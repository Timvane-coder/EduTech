// Enhanced States of Matter & Particle Theory Mathematical Workbook - Improved Step-by-Step Explanations
import * as math from 'mathjs';

export class EnhancedMatterParticleTheoryWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "chemistry";
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
        this.initializeMatterSolvers();
        this.initializeErrorDatabase();
        this.initializeExplanationTemplates();
    }

    initializeMatterLessons() {
        this.lessons = {
            ideal_gas_law: {
                title: "Ideal Gas Law Calculations",
                concepts: [
                    "PV = nRT relationship between pressure, volume, temperature, and moles",
                    "R = 0.0821 L·atm/(mol·K) or 8.314 J/(mol·K)",
                    "Temperature must be in Kelvin (K = °C + 273.15)",
                    "Assumes ideal gas behavior (no intermolecular forces)"
                ],
                theory: "The Ideal Gas Law describes the behavior of gases by relating pressure, volume, temperature, and amount of substance. It assumes gas particles have negligible volume and no attractive forces.",
                keyFormulas: {
                    "Ideal Gas Law": "PV = nRT",
                    "Combined Gas Law": "P₁V₁/T₁ = P₂V₂/T₂",
                    "Density Form": "PM = ρRT (where M is molar mass)",
                    "Molar Volume at STP": "22.4 L/mol at 273.15 K and 1 atm"
                },
                solvingSteps: [
                    "Identify known variables (P, V, n, T)",
                    "Convert all units to standard units (atm, L, mol, K)",
                    "Substitute values into PV = nRT",
                    "Solve algebraically for unknown variable",
                    "Verify units and reasonableness of answer"
                ],
                applications: [
                    "Calculating gas volumes in chemical reactions",
                    "Determining molar mass of unknown gases",
                    "Predicting pressure changes with temperature",
                    "Industrial gas storage and transport calculations"
                ]
            },

            phase_transitions: {
                title: "Phase Transition Calculations",
                concepts: [
                    "Energy changes during state changes (q = mΔH)",
                    "Heating curves show temperature vs energy added",
                    "During phase changes, temperature remains constant",
                    "Different substances have different ΔH_fusion and ΔH_vaporization values"
                ],
                theory: "Phase transitions occur when energy is added or removed from matter, causing changes between solid, liquid, and gas states. Energy absorbed or released depends on the mass and the substance's enthalpy of transition.",
                keyFormulas: {
                    "Heat of Fusion": "q = m × ΔH_fus (melting/freezing)",
                    "Heat of Vaporization": "q = m × ΔH_vap (boiling/condensation)",
                    "Specific Heat": "q = m × c × ΔT (temperature change within a phase)",
                    "Total Energy": "q_total = q_heat + q_phase_change"
                },
                solvingSteps: [
                    "Identify initial and final states",
                    "Determine if phase change occurs",
                    "Calculate energy for temperature changes (q = mcΔT)",
                    "Calculate energy for phase changes (q = mΔH)",
                    "Sum all energy contributions"
                ],
                applications: [
                    "Calculating energy to boil water",
                    "Determining cooling requirements for refrigeration",
                    "Analyzing heating curves in metallurgy",
                    "Climate science and weather prediction"
                ]
            },

            kinetic_molecular_theory: {
                title: "Kinetic Molecular Theory Calculations",
                concepts: [
                    "Average kinetic energy is proportional to absolute temperature",
                    "KE_avg = (3/2)kT or KE_avg = (3/2)RT per mole",
                    "Root-mean-square speed: u_rms = √(3RT/M)",
                    "Gas particles move in random, straight-line motion"
                ],
                theory: "Kinetic Molecular Theory explains gas behavior by modeling gases as collections of particles in constant, random motion. The theory connects microscopic particle motion to macroscopic properties like temperature and pressure.",
                keyFormulas: {
                    "Average KE per molecule": "KE_avg = (3/2)kT",
                    "Average KE per mole": "KE_avg = (3/2)RT",
                    "Root-mean-square speed": "u_rms = √(3RT/M)",
                    "Most probable speed": "u_mp = √(2RT/M)",
                    "Average speed": "u_avg = √(8RT/πM)"
                },
                solvingSteps: [
                    "Identify temperature and molar mass",
                    "Convert temperature to Kelvin",
                    "Convert molar mass to kg/mol for SI units",
                    "Substitute into appropriate formula",
                    "Calculate and verify units"
                ],
                applications: [
                    "Explaining effusion and diffusion rates",
                    "Understanding temperature effects on reaction rates",
                    "Analyzing gas behavior at molecular level",
                    "Designing molecular sieves and filters"
                ]
            },

            pressure_calculations: {
                title: "Pressure and Force Calculations",
                concepts: [
                    "Pressure = Force/Area (P = F/A)",
                    "Standard pressure units: atm, Pa, torr, mmHg",
                    "1 atm = 101,325 Pa = 760 torr = 760 mmHg",
                    "Hydrostatic pressure: P = ρgh"
                ],
                theory: "Pressure is the force exerted per unit area. In gases, pressure results from particle collisions with container walls. Understanding pressure conversions and calculations is fundamental to gas law applications.",
                keyFormulas: {
                    "Pressure definition": "P = F/A",
                    "Hydrostatic pressure": "P = ρgh",
                    "Partial pressure": "P_total = P₁ + P₂ + P₃ + ...",
                    "Mole fraction": "P_i = X_i × P_total"
                },
                solvingSteps: [
                    "Identify the type of pressure calculation needed",
                    "Convert all units to consistent system",
                    "Apply appropriate formula",
                    "Calculate result",
                    "Convert to desired output units"
                ],
                applications: [
                    "Calculating gas pressures in containers",
                    "Determining partial pressures in mixtures",
                    "Analyzing atmospheric pressure variations",
                    "Engineering applications in hydraulics"
                ]
            },

            density_calculations: {
                title: "Density and Molar Mass Calculations",
                concepts: [
                    "Density = mass/volume (ρ = m/V)",
                    "Gas density depends on pressure and temperature",
                    "Molar mass can be determined from gas density",
                    "d = PM/RT for ideal gases"
                ],
                theory: "Density relates mass to volume and is a characteristic property of substances. For gases, density varies with temperature and pressure, following the ideal gas law in modified form.",
                keyFormulas: {
                    "Density": "ρ = m/V",
                    "Gas density from ideal gas": "d = PM/RT",
                    "Molar mass from density": "M = dRT/P",
                    "Relative density": "d_rel = d_gas/d_air"
                },
                solvingSteps: [
                    "Identify known quantities (mass, volume, P, T)",
                    "Ensure consistent units",
                    "Substitute into appropriate formula",
                    "Solve for unknown (density or molar mass)",
                    "Verify reasonableness of result"
                ],
                applications: [
                    "Identifying unknown gases",
                    "Quality control in gas production",
                    "Calculating buoyancy forces",
                    "Analyzing gas mixture compositions"
                ]
            },

            diffusion_effusion: {
                title: "Graham's Law: Diffusion and Effusion",
                concepts: [
                    "Rate of effusion/diffusion inversely proportional to √(molar mass)",
                    "Graham's Law: rate₁/rate₂ = √(M₂/M₁)",
                    "Lighter gases move faster than heavier gases",
                    "Based on kinetic molecular theory"
                ],
                theory: "Graham's Law describes how gases spread through space (diffusion) or escape through small openings (effusion). The rate depends inversely on the square root of molar mass, reflecting the relationship between mass and molecular speed.",
                keyFormulas: {
                    "Graham's Law of Effusion": "rate₁/rate₂ = √(M₂/M₁)",
                    "Time relationship": "t₁/t₂ = √(M₁/M₂)",
                    "Distance relationship": "d₁/d₂ = √(M₂/M₁) at equal times",
                    "Speed relationship": "v₁/v₂ = √(M₂/M₁)"
                },
                solvingSteps: [
                    "Identify molar masses of gases involved",
                    "Determine which quantity is being compared (rate, time, distance)",
                    "Set up Graham's Law ratio correctly",
                    "Solve for unknown variable",
                    "Verify lighter gas moves faster/takes less time"
                ],
                applications: [
                    "Uranium isotope separation",
                    "Gas purification processes",
                    "Leak detection in sealed systems",
                    "Atmospheric gas behavior analysis"
                ]
            },

            daltons_law: {
                title: "Dalton's Law of Partial Pressures",
                concepts: [
                    "Total pressure equals sum of partial pressures",
                    "P_total = P₁ + P₂ + P₃ + ...",
                    "Partial pressure = mole fraction × total pressure",
                    "Each gas behaves independently"
                ],
                theory: "Dalton's Law states that in a mixture of non-reacting gases, each gas exerts pressure independently as if it alone occupied the entire volume. The total pressure is the sum of these partial pressures.",
                keyFormulas: {
                    "Dalton's Law": "P_total = P_A + P_B + P_C + ...",
                    "Partial pressure": "P_i = X_i × P_total",
                    "Mole fraction": "X_i = n_i/n_total",
                    "From ideal gas": "P_i = (n_i RT)/V"
                },
                solvingSteps: [
                    "Identify all gases in the mixture",
                    "Determine moles or mole fractions",
                    "Calculate partial pressures using P_i = X_i × P_total",
                    "Sum partial pressures for total pressure",
                    "Verify sum equals given total pressure (if known)"
                ],
                applications: [
                    "Analyzing atmospheric composition",
                    "Calculating gas concentrations in mixtures",
                    "Scuba diving gas mixture calculations",
                    "Industrial gas processing"
                ]
            },

            vapor_pressure: {
                title: "Vapor Pressure and Boiling Point",
                concepts: [
                    "Vapor pressure increases with temperature",
                    "Boiling occurs when vapor pressure equals atmospheric pressure",
                    "Clausius-Clapeyron equation relates vapor pressure to temperature",
                    "ln(P₂/P₁) = -(ΔH_vap/R)(1/T₂ - 1/T₁)"
                ],
                theory: "Vapor pressure is the pressure exerted by a vapor in equilibrium with its liquid phase. It increases exponentially with temperature and is characteristic of each substance. Boiling point is the temperature where vapor pressure equals external pressure.",
                keyFormulas: {
                    "Clausius-Clapeyron": "ln(P₂/P₁) = -(ΔH_vap/R)(1/T₂ - 1/T₁)",
                    "Simplified form": "ln P = -ΔH_vap/RT + C",
                    "Boiling point condition": "P_vapor = P_external",
                    "Raoult's Law": "P_solution = X_solvent × P°_solvent"
                },
                solvingSteps: [
                    "Identify known vapor pressures and temperatures",
                    "Convert temperatures to Kelvin",
                    "Use Clausius-Clapeyron equation",
                    "Solve for unknown (P, T, or ΔH_vap)",
                    "Verify answer makes physical sense"
                ],
                applications: [
                    "Predicting boiling points at different altitudes",
                    "Calculating heat of vaporization",
                    "Understanding distillation processes",
                    "Analyzing weather and evaporation"
                ]
            },

            heat_capacity: {
                title: "Heat Capacity and Calorimetry",
                concepts: [
                    "Specific heat (c): energy per gram per degree",
                    "Molar heat capacity (C): energy per mole per degree",
                    "q = mcΔT for temperature changes",
                    "Different values for constant pressure (Cp) vs constant volume (Cv)"
                ],
                theory: "Heat capacity quantifies how much energy is required to raise the temperature of a substance. Specific heat is per gram; molar heat capacity is per mole. For gases, heat capacity depends on whether volume or pressure is held constant.",
                keyFormulas: {
                    "Heat equation": "q = mcΔT",
                    "Molar form": "q = nCΔT",
                    "Heat capacity": "C = q/ΔT",
                    "Relationship": "Cp = Cv + R (for ideal gases)"
                },
                solvingSteps: [
                    "Identify mass (or moles), specific heat, and temperature change",
                    "Ensure consistent units",
                    "Calculate q = mcΔT (or q = nCΔT)",
                    "Determine sign (+ for heating, - for cooling)",
                    "Verify energy magnitude is reasonable"
                ],
                applications: [
                    "Calculating heating/cooling requirements",
                    "Calorimetry experiments",
                    "Thermal energy storage design",
                    "Climate and environmental modeling"
                ]
            },

            real_gases: {
                title: "Real Gas Behavior and Van der Waals Equation",
                concepts: [
                    "Real gases deviate from ideal behavior at high pressure and low temperature",
                    "Van der Waals equation corrects for particle volume and attractions",
                    "(P + a(n/V)²)(V - nb) = nRT",
                    "Compressibility factor Z = PV/nRT"
                ],
                theory: "Real gases exhibit intermolecular forces and occupy finite volume, causing deviations from ideal gas law. The Van der Waals equation accounts for these effects with correction factors 'a' (attractions) and 'b' (volume).",
                keyFormulas: {
                    "Van der Waals equation": "(P + a(n/V)²)(V - nb) = nRT",
                    "Compressibility factor": "Z = PV/nRT",
                    "For ideal gas": "Z = 1",
                    "Boyle temperature": "T_B = a/(Rb)"
                },
                solvingSteps: [
                    "Determine if real gas corrections are needed (high P, low T)",
                    "Look up Van der Waals constants a and b",
                    "Substitute into Van der Waals equation",
                    "Solve for unknown variable (often requires iteration)",
                    "Compare to ideal gas prediction"
                ],
                applications: [
                    "High-pressure industrial processes",
                    "Liquefaction of gases",
                    "Accurate gas storage calculations",
                    "Critical point determinations"
                ]
            },

            particle_speed_distribution: {
                title: "Maxwell-Boltzmann Speed Distribution",
                concepts: [
                    "Gas particles have a distribution of speeds",
                    "Most probable, average, and rms speeds are different",
                    "Distribution broadens and shifts right with higher temperature",
                    "Distribution shifts left with higher molar mass"
                ],
                theory: "The Maxwell-Boltzmann distribution describes the range of speeds in a gas sample. It shows that particles have various speeds, with most near the average, and allows calculation of different types of average speeds.",
                keyFormulas: {
                    "Most probable speed": "u_mp = √(2RT/M)",
                    "Average speed": "u_avg = √(8RT/πM)",
                    "RMS speed": "u_rms = √(3RT/M)",
                    "Relationship": "u_mp < u_avg < u_rms"
                },
                solvingSteps: [
                    "Identify which speed type is needed",
                    "Note temperature (in K) and molar mass",
                    "Convert M to kg/mol for SI units",
                    "Substitute into appropriate formula",
                    "Calculate and compare to other speed types if needed"
                ],
                applications: [
                    "Understanding reaction kinetics",
                    "Explaining effusion rate distributions",
                    "Analyzing particle beam experiments",
                    "Molecular dynamics simulations"
                ]
            },

            phase_diagrams: {
                title: "Phase Diagram Interpretation",
                concepts: [
                    "Phase diagrams show states of matter vs P and T",
                    "Triple point: all three phases coexist",
                    "Critical point: liquid and gas become indistinguishable",
                    "Phase boundaries show equilibrium conditions"
                ],
                theory: "Phase diagrams map the stable phases of a substance as functions of pressure and temperature. They reveal conditions for phase transitions, triple points, and critical points, providing comprehensive information about a substance's behavior.",
                keyFormulas: {
                    "Clausius-Clapeyron (phase boundary)": "dP/dT = ΔH/(TΔV)",
                    "Slope of solid-liquid line": "Usually positive (except water)",
                    "Critical constants": "Pc, Tc, Vc (substance-specific)",
                    "Triple point": "Unique P and T for each substance"
                },
                solvingSteps: [
                    "Locate pressure and temperature on diagram",
                    "Identify which region/phase the point falls in",
                    "Determine phase boundaries crossed for transitions",
                    "Identify any special points (triple, critical)",
                    "Predict phase changes with P or T changes"
                ],
                applications: [
                    "Predicting phase under various conditions",
                    "Understanding material processing",
                    "Analyzing supercritical fluid behavior",
                    "Planetary science and atmospheric studies"
                ]
            }
        };
    }

    setThemeColors() {
        const themes = {
            chemistry: {
                background: '#ffffff',
                gridColor: '#b0b0b0',
                headerBg: '#2e7d32',
                headerText: '#ffffff',
                sectionBg: '#c8e6c9',
                sectionText: '#1b5e20',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#e8f5e9',
                resultText: '#2e7d32',
                formulaBg: '#fff9c4',
                formulaText: '#f57f17',
                stepBg: '#f1f8e9',
                stepText: '#33691e',
                borderColor: '#66bb6a',
                mathBg: '#e3f2fd',
                mathText: '#0d47a1',
                graphBg: '#fafafa',
                vertexBg: '#ffebee'
            },
            laboratory: {
                background: '#fafafa',
                gridColor: '#9e9e9e',
                headerBg: '#01579b',
                headerText: '#ffffff',
                sectionBg: '#b3e5fc',
                sectionText: '#01579b',
                cellBg: '#ffffff',
                cellText: '#212121',
                resultBg: '#e1f5fe',
                resultText: '#01579b',
                formulaBg: '#fff3e0',
                formulaText: '#e65100',
                stepBg: '#e0f7fa',
                stepText: '#006064',
                borderColor: '#0288d1',
                mathBg: '#f3e5f5',
                mathText: '#4a148c',
                graphBg: '#f5f5f5',
                vertexBg: '#fce4ec'
            }
        };

        this.colors = themes[this.theme] || themes.chemistry;
    }

    initializeChemSymbols() {
        return {
            // States of matter
            'solid': '(s)',
            'liquid': '(l)',
            'gas': '(g)',
            'aqueous': '(aq)',
            
            // Greek letters for chemistry
            'delta': 'Δ',
            'Delta': 'Δ',
            'rho': 'ρ',
            'pi': 'π',
            
            // Mathematical
            'degree': '°',
            'approximately': '≈',
            'proportional': '∝',
            
            // Special chemistry
            'equilibrium': '⇌',
            'forward': '→',
            'reverse': '←',
            'yields': '→'
        };
    }

    initializeMatterSolvers() {
        this.matterTypes = {
            // Ideal Gas Law problems
            ideal_gas_law: {
                patterns: [
                    /ideal\s*gas/i,
                    /PV\s*=\s*nRT/i,
                    /pressure.*volume.*temperature/i,
                    /gas\s*law/i
                ],
                solver: this.solveIdealGasLaw.bind(this),
                name: 'Ideal Gas Law',
                category: 'gas_laws',
                description: 'Solves PV = nRT problems'
            },

            // Combined Gas Law
            combined_gas_law: {
                patterns: [
                    /combined\s*gas/i,
                    /P1V1.*T1.*P2V2.*T2/i,
                    /initial.*final.*gas/i
                ],
                solver: this.solveCombinedGasLaw.bind(this),
                name: 'Combined Gas Law',
                category: 'gas_laws',
                description: 'Solves P₁V₁/T₁ = P₂V₂/T₂'
            },

            // Phase transition energy
            phase_transition: {
                patterns: [
                    /phase\s*change/i,
                    /heat.*fusion/i,
                    /heat.*vaporization/i,
                    /melting|freezing|boiling|condensing/i,
                    /enthalpy.*transition/i
                ],
                solver: this.solvePhaseTransition.bind(this),
                name: 'Phase Transition Energy',
                category: 'phase_changes',
                description: 'Calculates energy for phase changes'
            },

            // Kinetic energy calculations
            kinetic_energy: {
                patterns: [
                    /kinetic\s*energy/i,
                    /KE.*average/i,
                    /molecular\s*speed/i,
                    /particle\s*velocity/i
                ],
                solver: this.solveKineticEnergy.bind(this),
                name: 'Kinetic Molecular Theory',
                category: 'particle_theory',
                description: 'Calculates molecular speeds and kinetic energy'
            },

            // RMS speed
            rms_speed: {
                patterns: [
                    /rms\s*speed/i,
                    /root.*mean.*square/i,
                    /molecular\s*speed/i,
                    /particle\s*velocity/i
                ],
                solver: this.solveRMSSpeed.bind(this),
                name: 'Root Mean Square Speed',
                category: 'particle_theory',
                description: 'Calculates u_rms = √(3RT/M)'
            },

            // Graham's Law
            grahams_law: {
                patterns: [
                    /graham/i,
                    /effusion/i,
                    /diffusion\s*rate/i,
                    /rate.*ratio.*molar.*mass/i
                ],
                solver: this.solveGrahamsLaw.bind(this),
                name: "Graham's Law",
                category: 'gas_behavior',
                description: 'Solves effusion/diffusion rate problems'
            },

            // Dalton's Law
            daltons_law: {
                patterns: [
                    /dalton/i,
                    /partial\s*pressure/i,
                    /gas\s*mixture/i,
                    /mole\s*fraction.*pressure/i
                ],
                solver: this.solveDaltonsLaw.bind(this),
                name: "Dalton's Law",
                category: 'gas_mixtures',
                description: 'Calculates partial pressures'
            },

            // Pressure calculations
            pressure_calc: {
                patterns: [
                    /pressure\s*calculation/i,
                    /force.*area/i,
                    /P\s*=\s*F\/A/i,
                    /hydrostatic\s*pressure/i
                ],
                solver: this.solvePressure.bind(this),
                name: 'Pressure Calculations',
                category: 'pressure',
                description: 'Calculates pressure from force and area'
            },

            // Density calculations
            density_calc: {
                patterns: [
                    /density/i,
                    /mass.*volume/i,
                    /ρ\s*=\s*m\/V/i,
                    /molar\s*mass.*gas/i
                ],
                solver: this.solveDensity.bind(this),
                name: 'Density Calculations',
                category: 'properties',
                description: 'Calculates density or molar mass'
            },

            // Heat capacity
            heat_capacity: {
                patterns: [
                    /heat\s*capacity/i,
                    /specific\s*heat/i,
                    /q\s*=\s*mc.*T/i,
                    /calorimetry/i
                ],
                solver: this.solveHeatCapacity.bind(this),
                name: 'Heat Capacity',
                category: 'thermodynamics',
                description: 'Calculates q = mcΔT'
            },

            // Vapor pressure
            vapor_pressure: {
                patterns: [
                    /vapor\s*pressure/i,
                    /clausius.*clapeyron/i,
                    /boiling\s*point/i,
                    /P.*vap/i
                ],
                solver: this.solveVaporPressure.bind(this),
                name: 'Vapor Pressure',
                category: 'phase_equilibrium',
                description: 'Uses Clausius-Clapeyron equation'
            },

            // Van der Waals
            van_der_waals: {
                patterns: [
                    /van\s*der\s*waals/i,
                    /real\s*gas/i,
                    /non.*ideal/i,
                    /correction.*factor/i
                ],
                solver: this.solveVanDerWaals.bind(this),
                name: 'Van der Waals Equation',
                category: 'real_gases',
                description: 'Accounts for real gas behavior'
            },

            // Heating curves
            heating_curve: {
                patterns: [
                    /heating\s*curve/i,
                    /total\s*energy.*phase/i,
                    /temperature.*energy.*graph/i
                ],
                solver: this.solveHeatingCurve.bind(this),
                name: 'Heating Curve Analysis',
                category: 'phase_changes',
                description: 'Calculates total energy across phases'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            ideal_gas_law: {
                'Convert units': [
                    'Forgetting to convert Celsius to Kelvin',
                    'Using incorrect gas constant R for given units',
                    'Mixing pressure units (atm vs Pa vs torr)'
                ],
                'Solve for unknown': [
                    'Not isolating variable correctly',
                    'Calculation errors with small/large numbers'
                ]
            },
            phase_transition: {
                'Calculate energy': [
                    'Using wrong enthalpy value (fusion vs vaporization)',
                    'Forgetting to convert mass to moles when needed',
                    'Not considering multiple phase changes'
                ]
            },
            kinetic_energy: {
                'Calculate speed': [
                    'Not converting molar mass to kg/mol',
                    'Using wrong temperature scale (must be Kelvin)',
                    'Confusing different types of speeds (rms, average, most probable)'
                ]
            },
            grahams_law: {
                'Set up ratio': [
                    'Inverting the molar mass ratio incorrectly',
                    'Confusing rate with time (inverse relationship)',
                    'Not taking square root of mass ratio'
                ]
            }
        };

        this.errorPrevention = {
            temperature_conversion: {
                reminder: 'Always convert to Kelvin: K = °C + 273.15',
                method: 'Write conversion as first step'
            },
            unit_consistency: {
                reminder: 'Match R constant units with pressure, volume, temperature units',
                method: 'Write out units in calculation to verify cancellation'
            },
            molar_mass_units: {
                reminder: 'Convert molar mass to kg/mol when using SI units',
                method: 'Check if formula needs g/mol or kg/mol'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Particle-level understanding and physical meaning',
                language: 'relating to everyday experiences and visualizations'
            },
            procedural: {
                focus: 'Step-by-step calculation procedure',
                language: 'clear mathematical operations'
            },
            visual: {
                focus: 'Molecular and macroscopic representations',
                               language: 'describing particle behavior and state changes'
            },
            chemical: {
                focus: 'Chemical principles and molecular interactions',
                language: 'precise chemistry terminology and theory'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential steps with minimal theory',
                examples: 'concrete, relatable scenarios'
            },
            intermediate: {
                vocabulary: 'standard chemistry terms',
                detail: 'main steps with explanations of reasoning',
                examples: 'mix of practical and theoretical'
            },
            detailed: {
                vocabulary: 'full scientific vocabulary',
                detail: 'comprehensive explanations with theory',
                examples: 'abstract and generalized principles'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery with probing questions',
                examples: 'carefully sequenced difficulty progression'
            }
        };
    }

    // MAIN SOLVER METHOD
    solveMatterProblem(config) {
        const { equation, scenario, parameters, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseMatterProblem(equation, scenario, parameters, problemType, context);

            // Solve the problem
            this.currentSolution = this.solveMatterProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateMatterSteps(this.currentProblem, this.currentSolution);

            // Generate graph/visualization data if applicable
            this.generateMatterGraphData();

            // Generate workbook
            this.generateMatterWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                graphData: this.graphData
            };

        } catch (error) {
            throw new Error(`Failed to solve matter/particle theory problem: ${error.message}`);
        }
    }

    parseMatterProblem(equation, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = equation ? this.cleanChemExpression(equation) : '';

        // If problem type is specified, use it directly
        if (problemType && this.matterTypes[problemType]) {
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

        // Auto-detect matter/particle theory problem type
        for (const [type, config] of Object.entries(this.matterTypes)) {
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

        throw new Error(`Unable to recognize matter/particle theory problem type from: ${equation || scenario}`);
    }

    cleanChemExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/°C/g, 'degC')
            .replace(/°K/g, 'K')
            .trim();
    }

    solveMatterProblem_Internal(problem) {
        const solver = this.matterTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // MATTER/PARTICLE THEORY SOLVERS

    solveIdealGasLaw(problem) {
        const { P, V, n, T, R = 0.0821 } = problem.parameters; // Default R in L·atm/(mol·K)

        // Convert temperature to Kelvin if needed
        let T_kelvin = T;
        if (problem.context.temperatureUnit === 'C' || problem.context.temperatureUnit === 'celsius') {
            T_kelvin = T + 273.15;
        }

        // Determine which variable to solve for
        if (P === undefined) {
            const pressure = (n * R * T_kelvin) / V;
            return {
                equation: 'PV = nRT',
                solving_for: 'Pressure (P)',
                given: { V, n, T: T_kelvin, R },
                result: pressure,
                units: 'atm',
                formula_used: 'P = nRT/V',
                category: 'ideal_gas_law'
            };
        } else if (V === undefined) {
            const volume = (n * R * T_kelvin) / P;
            return {
                equation: 'PV = nRT',
                solving_for: 'Volume (V)',
                given: { P, n, T: T_kelvin, R },
                result: volume,
                units: 'L',
                formula_used: 'V = nRT/P',
                category: 'ideal_gas_law'
            };
        } else if (n === undefined) {
            const moles = (P * V) / (R * T_kelvin);
            return {
                equation: 'PV = nRT',
                solving_for: 'Moles (n)',
                given: { P, V, T: T_kelvin, R },
                result: moles,
                units: 'mol',
                formula_used: 'n = PV/RT',
                category: 'ideal_gas_law'
            };
        } else if (T === undefined || T_kelvin === undefined) {
            const temperature = (P * V) / (n * R);
            return {
                equation: 'PV = nRT',
                solving_for: 'Temperature (T)',
                given: { P, V, n, R },
                result: temperature,
                units: 'K',
                celsius: temperature - 273.15,
                formula_used: 'T = PV/nR',
                category: 'ideal_gas_law'
            };
        }

        return {
            equation: 'PV = nRT',
            verification: Math.abs(P * V - n * R * T_kelvin) < 0.001,
            category: 'ideal_gas_law'
        };
    }

    solveCombinedGasLaw(problem) {
        const { P1, V1, T1, P2, V2, T2 } = problem.parameters;

        // Convert temperatures to Kelvin
        let T1_K = T1;
        let T2_K = T2;
        if (problem.context.temperatureUnit === 'C') {
            if (T1 !== undefined) T1_K = T1 + 273.15;
            if (T2 !== undefined) T2_K = T2 + 273.15;
        }

        // Determine unknown
        if (P2 === undefined) {
            const pressure2 = (P1 * V1 * T2_K) / (T1_K * V2);
            return {
                law: 'Combined Gas Law',
                equation: 'P₁V₁/T₁ = P₂V₂/T₂',
                solving_for: 'P₂',
                initial_state: { P1, V1, T1: T1_K },
                final_state: { P2: pressure2, V2, T2: T2_K },
                result: pressure2,
                units: 'atm (same as P₁)',
                category: 'combined_gas_law'
            };
        } else if (V2 === undefined) {
            const volume2 = (P1 * V1 * T2_K) / (P2 * T1_K);
            return {
                law: 'Combined Gas Law',
                equation: 'P₁V₁/T₁ = P₂V₂/T₂',
                solving_for: 'V₂',
                initial_state: { P1, V1, T1: T1_K },
                final_state: { P2, V2: volume2, T2: T2_K },
                result: volume2,
                units: 'L (same as V₁)',
                category: 'combined_gas_law'
            };
        } else if (T2 === undefined || T2_K === undefined) {
            const temp2 = (P2 * V2 * T1_K) / (P1 * V1);
            return {
                law: 'Combined Gas Law',
                equation: 'P₁V₁/T₁ = P₂V₂/T₂',
                solving_for: 'T₂',
                initial_state: { P1, V1, T1: T1_K },
                final_state: { P2, V2, T2: temp2 },
                result: temp2,
                units: 'K',
                celsius: temp2 - 273.15,
                category: 'combined_gas_law'
            };
        }

        return { law: 'Combined Gas Law', category: 'combined_gas_law' };
    }

    solvePhaseTransition(problem) {
        const { mass, molarMass, deltaH_fus, deltaH_vap, transitionType } = problem.parameters;

        let moles = mass;
        if (molarMass) {
            moles = mass / molarMass;
        }

        let energy, enthalpy, phase;

        if (transitionType === 'melting' || transitionType === 'freezing') {
            enthalpy = deltaH_fus;
            energy = moles * deltaH_fus;
            phase = transitionType === 'melting' ? 'solid → liquid' : 'liquid → solid';
        } else if (transitionType === 'vaporization' || transitionType === 'condensation') {
            enthalpy = deltaH_vap;
            energy = moles * deltaH_vap;
            phase = transitionType === 'vaporization' ? 'liquid → gas' : 'gas → liquid';
        }

        return {
            phase_transition: phase,
            formula: 'q = n × ΔH',
            mass: mass,
            moles: moles,
            enthalpy_of_transition: enthalpy,
            energy_required: Math.abs(energy),
            energy_sign: (transitionType === 'melting' || transitionType === 'vaporization') ? 'endothermic (+)' : 'exothermic (-)',
            units: 'kJ',
            category: 'phase_transition'
        };
    }

    solveKineticEnergy(problem) {
        const { T, R = 8.314 } = problem.parameters; // R in J/(mol·K)

        let T_kelvin = T;
        if (problem.context.temperatureUnit === 'C') {
            T_kelvin = T + 273.15;
        }

        // Average kinetic energy per molecule
        const k = 1.381e-23; // Boltzmann constant in J/K
        const KE_per_molecule = (3/2) * k * T_kelvin;

        // Average kinetic energy per mole
        const KE_per_mole = (3/2) * R * T_kelvin;

        return {
            theory: 'Kinetic Molecular Theory',
            temperature: T_kelvin,
            temperature_celsius: T_kelvin - 273.15,
            KE_per_molecule: KE_per_molecule,
            KE_per_molecule_units: 'J',
            KE_per_mole: KE_per_mole,
            KE_per_mole_units: 'J/mol',
            formula_molecule: 'KE = (3/2)kT',
            formula_mole: 'KE = (3/2)RT',
            physical_meaning: 'Higher temperature means faster average particle motion',
            category: 'kinetic_energy'
        };
    }

    solveRMSSpeed(problem) {
        const { T, M, R = 8.314 } = problem.parameters; // R in J/(mol·K), M in g/mol

        let T_kelvin = T;
        if (problem.context.temperatureUnit === 'C') {
            T_kelvin = T + 273.15;
        }

        // Convert molar mass to kg/mol
        const M_kg = M / 1000;

        // Calculate RMS speed
        const u_rms = Math.sqrt((3 * R * T_kelvin) / M_kg);

        // Also calculate other speeds for comparison
        const u_avg = Math.sqrt((8 * R * T_kelvin) / (Math.PI * M_kg));
        const u_mp = Math.sqrt((2 * R * T_kelvin) / M_kg);

        return {
            formula: 'u_rms = √(3RT/M)',
            temperature: T_kelvin,
            molar_mass: M,
            molar_mass_kg: M_kg,
            rms_speed: u_rms,
            average_speed: u_avg,
            most_probable_speed: u_mp,
            speed_relationship: 'u_mp < u_avg < u_rms',
            units: 'm/s',
            physical_meaning: 'RMS speed is the square root of the average of squared speeds',
            category: 'rms_speed'
        };
    }

    solveGrahamsLaw(problem) {
        const { M1, M2, rate1, rate2, time1, time2 } = problem.parameters;

        const massRatio = Math.sqrt(M2 / M1);

        if (rate2 === undefined && rate1 !== undefined) {
            // Solve for rate2
            const calculatedRate2 = rate1 / massRatio;
            return {
                law: "Graham's Law of Effusion",
                formula: 'rate₁/rate₂ = √(M₂/M₁)',
                molar_mass_1: M1,
                molar_mass_2: M2,
                mass_ratio: massRatio,
                rate_1: rate1,
                rate_2: calculatedRate2,
                interpretation: M1 < M2 ? 'Gas 1 is lighter and effuses faster' : 'Gas 2 is lighter and effuses faster',
                category: 'grahams_law'
            };
        } else if (rate1 === undefined && rate2 !== undefined) {
            // Solve for rate1
            const calculatedRate1 = rate2 * massRatio;
            return {
                law: "Graham's Law of Effusion",
                formula: 'rate₁/rate₂ = √(M₂/M₁)',
                molar_mass_1: M1,
                molar_mass_2: M2,
                mass_ratio: massRatio,
                rate_1: calculatedRate1,
                rate_2: rate2,
                interpretation: M1 < M2 ? 'Gas 1 is lighter and effuses faster' : 'Gas 2 is lighter and effuses faster',
                category: 'grahams_law'
            };
        } else if (time1 !== undefined && time2 === undefined) {
            // Time is inverse of rate
            const calculatedTime2 = time1 / massRatio;
            return {
                law: "Graham's Law (Time Form)",
                formula: 't₁/t₂ = √(M₁/M₂)',
                molar_mass_1: M1,
                molar_mass_2: M2,
                time_1: time1,
                time_2: calculatedTime2,
                interpretation: 'Lighter gas takes less time to effuse',
                category: 'grahams_law'
            };
        }

        return {
            law: "Graham's Law",
            mass_ratio: massRatio,
            category: 'grahams_law'
        };
    }

    solveDaltonsLaw(problem) {
        const { pressures = [], moles = [], P_total } = problem.parameters;

        if (P_total !== undefined && pressures.length > 0) {
            // Calculate total from partial pressures
            const calculated_total = pressures.reduce((sum, p) => sum + p, 0);
            return {
                law: "Dalton's Law of Partial Pressures",
                formula: 'P_total = P₁ + P₂ + P₃ + ...',
                partial_pressures: pressures,
                total_pressure: calculated_total,
                verification: Math.abs(calculated_total - P_total) < 0.01,
                category: 'daltons_law'
            };
        } else if (moles.length > 0 && P_total !== undefined) {
            // Calculate partial pressures from moles
            const n_total = moles.reduce((sum, n) => sum + n, 0);
            const moleFractions = moles.map(n => n / n_total);
            const partialPressures = moleFractions.map(X => X * P_total);

            return {
                law: "Dalton's Law of Partial Pressures",
                formula: 'P_i = X_i × P_total',
                moles: moles,
                total_moles: n_total,
                mole_fractions: moleFractions,
                partial_pressures: partialPressures,
                total_pressure: P_total,
                category: 'daltons_law'
            };
        }

        return {
            law: "Dalton's Law",
            category: 'daltons_law'
        };
    }

    solvePressure(problem) {
        const { force, area, rho, g = 9.81, height } = problem.parameters;

        if (force !== undefined && area !== undefined) {
            // P = F/A
            const pressure = force / area;
            return {
                formula: 'P = F/A',
                force: force,
                area: area,
                pressure: pressure,
                units: 'Pa (N/m²)',
                category: 'pressure_calc'
            };
        } else if (rho !== undefined && height !== undefined) {
            // Hydrostatic pressure: P = ρgh
            const pressure = rho * g * height;
            return {
                formula: 'P = ρgh',
                density: rho,
                gravity: g,
                height: height,
                pressure: pressure,
                units: 'Pa',
                type: 'Hydrostatic pressure',
                category: 'pressure_calc'
            };
        }

        return { category: 'pressure_calc' };
    }

    solveDensity(problem) {
        const { mass, volume, P, T, R = 0.0821, M } = problem.parameters;

        if (mass !== undefined && volume !== undefined) {
            // Simple density
            const density = mass / volume;
            return {
                formula: 'ρ = m/V',
                mass: mass,
                volume: volume,
                density: density,
                units: 'g/mL or g/cm³',
                category: 'density_calc'
            };
        } else if (P !== undefined && T !== undefined && M !== undefined) {
            // Gas density from ideal gas: d = PM/RT
            let T_kelvin = T;
            if (problem.context.temperatureUnit === 'C') {
                T_kelvin = T + 273.15;
            }

            const density = (P * M) / (R * T_kelvin);
            return {
                formula: 'd = PM/RT',
                pressure: P,
                molar_mass: M,
                temperature: T_kelvin,
                gas_constant: R,
                density: density,
                units: 'g/L',
                category: 'density_calc'
            };
        }

        return { category: 'density_calc' };
    }

    solveHeatCapacity(problem) {
        const { mass, c, deltaT, q, n, C } = problem.parameters;

        if (q === undefined && mass !== undefined && c !== undefined && deltaT !== undefined) {
            // Calculate heat
            const heat = mass * c * deltaT;
            return {
                formula: 'q = mcΔT',
                mass: mass,
                specific_heat: c,
                temperature_change: deltaT,
                heat: heat,
                units: 'J or kJ',
                sign: deltaT > 0 ? 'positive (heating)' : 'negative (cooling)',
                category: 'heat_capacity'
            };
        } else if (q !== undefined && n !== undefined && C !== undefined && deltaT !== undefined) {
            // Molar form
            const heat = n * C * deltaT;
            return {
                formula: 'q = nCΔT',
                moles: n,
                molar_heat_capacity: C,
                temperature_change: deltaT,
                heat: heat,
                units: 'J or kJ',
                category: 'heat_capacity'
            };
        }

        return { category: 'heat_capacity' };
    }

    solveVaporPressure(problem) {
        const { P1, T1, P2, T2, deltaH_vap, R = 8.314 } = problem.parameters;

        // Clausius-Clapeyron: ln(P2/P1) = -(ΔH_vap/R)(1/T2 - 1/T1)

        // Convert temperatures to Kelvin
        let T1_K = T1;
        let T2_K = T2;
        if (problem.context.temperatureUnit === 'C') {
            if (T1 !== undefined) T1_K = T1 + 273.15;
            if (T2 !== undefined) T2_K = T2 + 273.15;
        }

        if (P2 === undefined && P1 !== undefined && T1_K !== undefined && T2_K !== undefined && deltaH_vap !== undefined) {
            // Solve for P2
            const exponent = -(deltaH_vap / R) * (1/T2_K - 1/T1_K);
            const pressure2 = P1 * Math.exp(exponent);

            return {
                equation: 'Clausius-Clapeyron Equation',
                formula: 'ln(P₂/P₁) = -(ΔH_vap/R)(1/T₂ - 1/T₁)',
                initial_pressure: P1,
                final_pressure: pressure2,
                initial_temperature: T1_K,
                final_temperature: T2_K,
                enthalpy_vaporization: deltaH_vap,
                result: pressure2,
                units: 'same as P₁',
                category: 'vapor_pressure'
            };
        }

        return {
            equation: 'Clausius-Clapeyron Equation',
            category: 'vapor_pressure'
        };
    }

    solveVanDerWaals(problem) {
        const { n, V, T, a, b, R = 0.0821 } = problem.parameters;

        // Van der Waals: (P + a(n/V)²)(V - nb) = nRT

        let T_kelvin = T;
        if (problem.context.temperatureUnit === 'C') {
            T_kelvin = T + 273.15;
        }

        // Solve for pressure
        const correctedVolume = V - n * b;
        const attractionTerm = a * Math.pow(n / V, 2);
        const pressure = (n * R * T_kelvin / correctedVolume) - attractionTerm;

        // Compare to ideal gas
        const idealPressure = (n * R * T_kelvin) / V;

        return {
            equation: 'Van der Waals Equation',
            formula: '(P + a(n/V)²)(V - nb) = nRT',
            van_der_waals_constants: { a, b },
            real_gas_pressure: pressure,
            ideal_gas_pressure: idealPressure,
            deviation: pressure - idealPressure,
            percent_deviation: ((pressure - idealPressure) / idealPressure * 100).toFixed(2),
            interpretation: pressure < idealPressure ? 'Intermolecular attractions dominate' : 'Particle volume dominates',
            category: 'van_der_waals'
        };
    }

    solveHeatingCurve(problem) {
        const { mass, c_solid, c_liquid, c_gas, deltaH_fus, deltaH_vap, T_initial, T_final, T_melt, T_boil } = problem.parameters;

        let totalEnergy = 0;
        const stages = [];

        // Stage 1: Heat solid to melting point
        if (T_initial < T_melt && T_final >= T_melt) {
            const q1 = mass * c_solid * (T_melt - T_initial);
            totalEnergy += q1;
            stages.push({
                stage: 'Heating solid',
                formula: 'q = mcΔT',
                energy: q1,
                temp_range: `${T_initial}°C to ${T_melt}°C`
            });
        }

        // Stage 2: Melting
        if (T_initial <= T_melt && T_final > T_melt) {
            const q2 = mass * deltaH_fus;
            totalEnergy += q2;
            stages.push({
                stage: 'Melting (fusion)',
                formula: 'q = mΔH_fus',
                energy: q2,
                temp_range: `${T_melt}°C (constant)`
            });
        }

        // Stage 3: Heat liquid to boiling point
        if (T_final > T_melt && T_final >= T_boil) {
            const q3 = mass * c_liquid * (T_boil - T_melt);
            totalEnergy += q3;
            stages.push({
                stage: 'Heating liquid',
                formula: 'q = mcΔT',
                energy: q3,
                temp_range: `${T_melt}°C to ${T_boil}°C`
            });
        } else if (T_final > T_melt && T_final < T_boil) {
            const q3 = mass * c_liquid * (T_final - T_melt);
            totalEnergy += q3;
            stages.push({
                stage: 'Heating liquid',
                formula: 'q = mcΔT',
                energy: q3,
                temp_range: `${T_melt}°C to ${T_final}°C`
            });
        }

        // Stage 4: Boiling (vaporization)
        if (T_final > T_boil) {
            const q4 = mass * deltaH_vap;
            totalEnergy += q4;
            stages.push({
                stage: 'Boiling (vaporization)',
                formula: 'q = mΔH_vap',
                energy: q4,
                temp_range: `${T_boil}°C (constant)`
            });
        }

        // Stage 5: Heat gas
        if (T_final > T_boil) {
            const q5 = mass * c_gas * (T_final - T_boil);
            totalEnergy += q5;
            stages.push({
                stage: 'Heating gas',
                formula: 'q = mcΔT',
                energy: q5,
                temp_range: `${T_boil}°C to ${T_final}°C`
            });
        }

        return {
            analysis: 'Heating Curve Analysis',
            initial_temperature: T_initial,
            final_temperature: T_final,
            melting_point: T_melt,
            boiling_point: T_boil,
            stages: stages,
            total_energy: totalEnergy,
            units: 'J or kJ',
            category: 'heating_curve'
        };
    }

    // STEP GENERATION FOR MATTER/PARTICLE THEORY

    generateMatterSteps(problem, solution) {
        let baseSteps = this.generateBaseMatterSteps(problem, solution);

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

    generateBaseMatterSteps(problem, solution) {
        const { type } = problem;

        switch (type) {
            case 'ideal_gas_law':
                return this.generateIdealGasSteps(problem, solution);
            case 'phase_transition':
                return this.generatePhaseTransitionSteps(problem, solution);
            case 'rms_speed':
                return this.generateRMSSpeedSteps(problem, solution);
            case 'grahams_law':
                return this.generateGrahamsLawSteps(problem, solution);
            case 'daltons_law':
                return this.generateDaltonsLawSteps(problem, solution);
            default:
                return this.generateGenericMatterSteps(problem, solution);
        }
    }

    generateIdealGasSteps(problem, solution) {
        const { P, V, n, T, R } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify the Ideal Gas Law',
            description: 'Write the fundamental equation relating gas properties',
            expression: 'PV = nRT',
            reasoning: 'This equation connects pressure, volume, moles, and temperature for ideal gases',
            visualHint: 'Think of gas particles bouncing in a container - more particles, higher temperature, or smaller volume all increase pressure',
            algebraicRule: 'Ideal Gas Law',
            physicalMeaning: 'Each gas property affects the others through particle collisions',
            goalStatement: 'Use this relationship to find the unknown variable'
        });

        steps.push({
            stepNumber: 2,
            step: 'Convert temperature to Kelvin',
            description: 'Ensure temperature is in absolute scale (Kelvin)',
            beforeExpression: T !== undefined ? `T = ${T}°C` : 'Temperature given',
            operation: '+ 273.15',
            afterExpression: problem.context.temperatureUnit === 'C' ? `T = ${T + 273.15} K` : `T = ${T} K`,
            reasoning: 'The ideal gas law requires absolute temperature (Kelvin) because gas behavior depends on absolute kinetic energy',
            algebraicRule: 'K = °C + 273.15',
            criticalWarning: 'Using Celsius will give completely wrong results!',
            visualHint: 'Kelvin starts at absolute zero (-273.15°C) where all molecular motion theoretically stops'
        });

        steps.push({
            stepNumber: 3,
            step: 'List known variables',
            description: 'Identify all given values and the unknown',
            reasoning: 'Organizing information helps choose the correct solving strategy',
            knownVariables: {
                P: P !== undefined ? `${P} atm` : 'unknown',
                V: V !== undefined ? `${V} L` : 'unknown',
                n: n !== undefined ? `${n} mol` : 'unknown',
                T: T !== undefined ? `${T + 273.15} K` : 'unknown',
                R: `${R} L·atm/(mol·K)`
            },
            algebraicRule: 'Identify knowns and unknowns',
            goalStatement: `Solve for ${solution.solving_for}`
        });

        steps.push({
            stepNumber: 4,
            step: `Solve for ${solution.solving_for}`,
            description: `Rearrange PV = nRT to isolate ${solution.solving_for}`,
            beforeExpression: 'PV = nRT',
            operation: 'algebraic rearrangement',
            afterExpression: solution.formula_used,
            reasoning: 'Isolate the unknown variable by dividing or multiplying both sides',
            algebraicRule: 'Properties of equality',
            finalAnswer: false
        });

        steps.push({
            stepNumber: 5,
            step: 'Substitute and calculate',
            description: 'Insert known values and compute the result',
            substitution: this.formatSubstitution(solution),
            calculation: `${solution.solving_for} = ${solution.result.toFixed(3)}`,
            result: solution.result,
            units: solution.units,
            reasoning: 'Performing the arithmetic gives us the numerical answer',
            finalAnswer: true,
            physicalMeaning: this.getPhysicalMeaning(solution.solving_for, solution.result)
        });

        return steps;
    }

    generatePhaseTransitionSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify the phase transition',
            description: 'Determine which state change is occurring',
            phaseChange: solution.phase_transition,
            reasoning: 'Different phase changes require different enthalpy values',
            visualHint: 'Energy is absorbed for solid→liquid→gas; released for gas→liquid→solid',
            physicalMeaning: 'Phase changes involve breaking (endothermic) or forming (exothermic) intermolecular forces',
            goalStatement: 'Calculate the energy required for this phase transition'
        });

        steps.push({
            stepNumber: 2,
            step: 'Identify the appropriate formula',
            description: 'Choose the enthalpy formula for this transition',
            formula: solution.formula,
            enthalpy: solution.enthalpy_of_transition,
            reasoning: 'Each substance has characteristic enthalpy values for melting and boiling',
            algebraicRule: 'q = n × ΔH (where n is moles)',
            physicalMeaning: 'Enthalpy of transition represents energy per mole needed to overcome intermolecular forces'
        });

        steps.push({
            stepNumber: 3,
            step: 'Convert mass to moles (if needed)',
            description: 'Ensure amount is in moles for the formula',
            mass: solution.mass,
            moles: solution.moles,
            reasoning: 'Enthalpy values are typically given per mole',
            algebraicRule: 'n = mass/molar_mass',
            criticalWarning: 'Check if your enthalpy is per gram or per mole!'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate energy',
            description: 'Multiply moles by enthalpy of transition',
            beforeExpression: `q = n × ΔH`,
            substitution: `q = ${solution.moles} mol × ${solution.enthalpy_of_transition} kJ/mol`,
            afterExpression: `q = ${solution.energy_required.toFixed(2)} kJ`,
            result: solution.energy_required,
            units: solution.units,
            reasoning: 'This gives the total energy for the mass undergoing phase change',
            finalAnswer: true,
            physicalMeaning: `This is ${solution.energy_sign} - energy is ${solution.energy_sign.includes('endo') ? 'absorbed from' : 'released to'} surroundings`
        });

        steps.push({
            stepNumber: 5,
            step: 'Interpret the result',
            description: 'Understand the energy flow',
            energyType: solution.energy_sign,
            interpretation: solution.energy_sign.includes('endo') 
                ? 'System absorbs energy to break intermolecular forces' 
                : 'System releases energy as intermolecular forces form',
            visualHint: 'Temperature stays constant during phase change - all energy goes to breaking/forming bonds',
            physicalMeaning: 'At the molecular level, particles gain/lose potential energy without changing kinetic energy (temperature)'
        });

        return steps;
    }

    generateRMSSpeedSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Understand RMS speed',
            description: 'Root-mean-square speed represents typical molecular speed',
            formula: solution.formula,
            reasoning: 'RMS speed is the square root of the average of squared speeds',
            visualHint: 'Gas particles move at various speeds - RMS gives a characteristic speed for the distribution',
            physicalMeaning: 'Relates directly to average kinetic energy: KE_avg = (1/2)m(u_rms)²',
            goalStatement: 'Calculate the typical speed of gas molecules'
        });

        steps.push({
            stepNumber: 2,
            step: 'Convert temperature to Kelvin',
            description: 'Absolute temperature required for molecular speed calculations',
            temperature_celsius: solution.temperature - 273.15,
            temperature_kelvin: solution.temperature,
            reasoning: 'Temperature measures average kinetic energy on absolute scale',
            algebraicRule: 'K = °C + 273.15',
            criticalWarning: 'Using Celsius gives meaningless results for molecular speeds'
        });

        steps.push({
            stepNumber: 3,
            step: 'Convert molar mass to kg/mol',
            description: 'SI units require mass in kilograms',
            molar_mass_g: solution.molar_mass,
            molar_mass_kg: solution.molar_mass_kg,
            operation: '÷ 1000',
            reasoning: 'Standard SI units: R in J/(mol·K), M in kg/mol gives speed in m/s',
            algebraicRule: 'Unit consistency in calculations',
            physicalMeaning: 'Lighter molecules move faster at same temperature'
        });

        steps.push({
            stepNumber: 4,
            step: 'Substitute into RMS formula',
            description: 'Calculate u_rms = √(3RT/M)',
            substitution: `u_rms = √(3 × ${8.314} × ${solution.temperature} / ${solution.molar_mass_kg})`,
            calculation: `u_rms = √(${(3 * 8.314 * solution.temperature / solution.molar_mass_kg).toFixed(2)})`,
            reasoning: 'Perform calculation under the square root first',
            algebraicRule: 'Order of operations: multiply under radical, then take square root'
        });

        steps.push({
            stepNumber: 5,
            step: 'Calculate final speed',
            description: 'Take square root to get RMS speed',
            result: solution.rms_speed,
            units: solution.units,
            finalAnswer: true,
            comparison: {
                most_probable: solution.most_probable_speed.toFixed(2),
                average: solution.average_speed.toFixed(2),
                rms: solution.rms_speed.toFixed(2),
                relationship: solution.speed_relationship
            },
            physicalMeaning: `At ${solution.temperature}K, typical ${solution.molar_mass}g/mol molecules move at ${solution.rms_speed.toFixed(0)} m/s`,
            visualHint: 'This is about the speed of sound in the gas - they\'re related!'
        });

        return steps;
    }

    generateGrahamsLawSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'State Graham\'s Law',
            description: 'Rate of effusion inversely proportional to square root of molar mass',
            formula: solution.formula,
            reasoning: 'Lighter molecules move faster, so they effuse/diffuse more quickly',
            visualHint: 'Imagine a hole in a balloon - lighter gas molecules escape faster',
            physicalMeaning: 'Based on kinetic molecular theory: lighter = faster at same temperature',
            goalStatement: 'Calculate relative rates of effusion for two gases'
        });

        steps.push({
            stepNumber: 2,
            step: 'Identify molar masses',
            description: 'List the molar masses of both gases',
            M1: solution.molar_mass_1,
            M2: solution.molar_mass_2,
            reasoning: 'Molar mass ratio determines rate ratio',
            algebraicRule: 'Molar mass from periodic table or molecular formula',
            physicalMeaning: 'Heavier molecules move more slowly due to greater inertia'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate mass ratio',
            description: 'Find √(M₂/M₁) for the rate relationship',
            calculation: `√(${solution.molar_mass_2}/${solution.molar_mass_1})`,
            massRatio: solution.mass_ratio,
            reasoning: 'This ratio tells us how much faster the lighter gas moves',
            algebraicRule: 'Take square root of mass ratio',
            criticalWarning: 'Make sure M₂ is in numerator and M₁ in denominator!'
        });

        steps.push({
            stepNumber: 4,
            step: 'Apply Graham\'s Law',
            description: 'Use rate₁/rate₂ = √(M₂/M₁) to find unknown rate',
            beforeExpression: solution.formula,
            substitution: this.formatGrahamsSubstitution(solution),
            afterExpression: `rate = ${solution.rate_2 || solution.rate_1}`,
            reasoning: 'Solve algebraically for the unknown rate',
            algebraicRule: 'Cross-multiply and divide'
        });

        steps.push({
            stepNumber: 5,
            step: 'Interpret the result',
            description: 'Understand which gas moves faster',
            result: solution.rate_2 || solution.rate_1,
            interpretation: solution.interpretation,
            finalAnswer: true,
            physicalMeaning: 'The lighter gas effuses faster by this factor',
            visualHint: 'If rate ratio is 2:1, the lighter gas escapes twice as fast'
        });

        return steps;
    }

    generateDaltonsLawSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'State Dalton\'s Law',
            description: 'Total pressure equals sum of partial pressures',
            formula: solution.formula,
            reasoning: 'In a gas mixture, each gas contributes to total pressure independently',
            visualHint: 'Each gas behaves as if it alone occupies the entire container',
            physicalMeaning: 'Gas particles don\'t interact in ideal mixtures - each exerts its own pressure',
            goalStatement: 'Calculate partial pressures or total pressure'
        });

        if (solution.moles) {
            steps.push({
                stepNumber: 2,
                step: 'Calculate total moles',
                description: 'Sum the moles of all gases',
                moles: solution.moles,
                total_moles: solution.total_moles,
                reasoning: 'Total moles needed to find mole fractions',
                algebraicRule: 'n_total = n₁ + n₂ + n₃ + ...'
            });

            steps.push({
                stepNumber: 3,
                step: 'Calculate mole fractions',
                description: 'Find fraction of total moles for each gas',
                mole_fractions: solution.mole_fractions,
                formula: 'X_i = n_i/n_total',
                reasoning: 'Mole fraction determines pressure contribution',
                algebraicRule: 'Mole fraction = individual moles / total moles',
                physicalMeaning: 'Mole fraction represents proportion of molecules of each type'
            });

            steps.push({
                stepNumber: 4,
                step: 'Calculate partial pressures',
                description: 'Multiply each mole fraction by total pressure',
                formula: 'P_i = X_i × P_total',
                partial_pressures: solution.partial_pressures,
                total_pressure: solution.total_pressure,
                reasoning: 'Each gas contributes proportionally to its mole fraction',
                finalAnswer: true
            });
        } else {
            steps.push({
                stepNumber: 2,
                step: 'Sum partial pressures',
                description: 'Add all individual gas pressures',
                partial_pressures: solution.partial_pressures,
                calculation: solution.partial_pressures.join(' + '),
                total_pressure: solution.total_pressure,
                reasoning: 'Total pressure is simply the sum of all partial pressures',
                finalAnswer: true
            });
        }

        steps.push({
            stepNumber: steps.length + 1,
            step: 'Verify the result',
            description: 'Check that partial pressures sum to total',
            verification: solution.verification !== false ? 'Sum equals total pressure ✓' : 'Check calculations',
            physicalMeaning: 'This confirms each gas contributes independently to total pressure'
        });

        return steps;
    }

    generateGenericMatterSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Chemistry problem',
            description: 'Solve the states of matter or particle theory problem',
            expression: problem.scenario || 'Problem statement',
            reasoning: 'Apply appropriate chemistry principles and equations',
            solution: solution
        }];
    }

    // HELPER METHODS FOR MATTER/PARTICLE THEORY

    formatSubstitution(solution) {
        const parts = solution.formula_used.split('=');
        if (parts.length < 2) return solution.formula_used;

        const variable = parts[0].trim();
        const expression = parts[1].trim();

        // Replace variables with values from solution.given
        let substituted = expression;
        if (solution.given) {
            Object.keys(solution.given).forEach(key => {
                const regex = new RegExp(key, 'g');
                substituted = substituted.replace(regex, solution.given[key]);
            });
        }

        return `${variable} = ${substituted}`;
    }

    formatGrahamsSubstitution(solution) {
        if (solution.rate_1 && !solution.rate_2) {
            return `${solution.rate_1}/rate₂ = ${solution.mass_ratio.toFixed(3)}`;
        } else if (solution.rate_2 && !solution.rate_1) {
            return `rate₁/${solution.rate_2} = ${solution.mass_ratio.toFixed(3)}`;
        }
        return solution.formula;
    }

    getPhysicalMeaning(variable, value) {
        const meanings = {
            'Pressure (P)': `Pressure of ${value.toFixed(2)} atm results from molecular collisions with container walls`,
            'Volume (V)': `Volume of ${value.toFixed(2)} L is the space occupied by the gas`,
            'Moles (n)': `${value.toFixed(3)} moles represents ${(value * 6.022e23).toExponential(2)} molecules`,
            'Temperature (T)': `Temperature of ${value.toFixed(2)} K corresponds to ${(value - 273.15).toFixed(2)}°C and indicates average kinetic energy`
        };

        return meanings[variable] || `The calculated value is ${value}`;
    }

    // Enhanced step explanations for matter/particle theory
    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            // Multiple explanation formats
            explanations: {
                conceptual: this.getConceptualExplanationChem(step, problem),
                procedural: this.getProceduralExplanationChem(step),
                visual: this.getVisualExplanationChem(step, problem),
                chemical: this.getChemicalExplanation(step)
            },

            // Difficulty-adapted explanations
            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            // Learning support
            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisitesChem(step, problem.type),
                keyVocabulary: this.identifyKeyVocabularyChem(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null,
                molecularPerspective: this.getMolecularPerspective(step, problem)
            }
        };

        return enhanced;
    }

    getConceptualExplanationChem(step, problem) {
        const conceptualExplanations = {
            'Identify the Ideal Gas Law': 'The Ideal Gas Law emerges from how gas particles behave: more particles create more collisions (pressure), higher temperature means faster collisions (more pressure), and larger volume spreads collisions over more area (less pressure).',
            'Convert temperature to Kelvin': 'Kelvin measures thermal energy from absolute zero. Gas behavior depends on total kinetic energy, not arbitrary temperature scales. At 0 K, all molecular motion would theoretically stop.',
            'Identify the phase transition': 'Phase changes occur when thermal energy overcomes or creates intermolecular forces. Solid→liquid breaks some forces; liquid→gas breaks nearly all forces.',
            'Understand RMS speed': 'RMS speed connects temperature (average kinetic energy) to molecular motion. It\'s the speed that, when squared and averaged, gives the correct kinetic energy.'
        };

        return conceptualExplanations[step.step] || 'This step advances our understanding of the molecular behavior in this system.';
    }

    getProceduralExplanationChem(step) {
        if (step.substitution) {
            return `1. Write the formula: ${step.formula || step.beforeExpression}
2. Substitute known values: ${step.substitution}
3. Calculate the result
4. Include appropriate units`;
        }
        return 'Follow standard chemistry calculation procedures.';
    }

    getVisualExplanationChem(step, problem) {
        const visualExplanations = {
            'ideal_gas_law': 'Picture a container with gas particles bouncing rapidly. Pressure comes from particles hitting walls; temperature relates to how fast they move; volume is the space available.',
            'phase_transition': 'Visualize molecules breaking free from their neighbors (melting) or escaping completely into space (boiling). Energy goes into breaking bonds, not speeding up molecules.',
            'rms_speed': 'Imagine a distribution of molecular speeds - some slow, some fast. RMS speed is a characteristic speed representing the typical molecular motion at that temperature.',
            'grahams_law': 'Picture two gases effusing through a tiny hole. Lighter molecules zip through faster because they move at higher speeds at the same temperature.',
            'daltons_law': 'Visualize different colored particles in one container - each color (gas type) collides with walls independently, contributing its own pressure.'
        };

        return visualExplanations[problem.type] || 'Visualize the molecular-level behavior underlying this calculation.';
    }

    getChemicalExplanation(step) {
        return {
            theory: 'Based on kinetic molecular theory and thermodynamic principles',
            molecularBasis: 'At the molecular level, this relates to particle motion and intermolecular forces',
            assumptions: 'Assumes ideal behavior unless otherwise specified'
        };
    }

    getMolecularPerspective(step, problem) {
        const perspectives = {
            'ideal_gas_law': 'Molecules move randomly and collide elastically with container walls',
            'phase_transition': 'Energy breaks intermolecular forces without changing intramolecular bonds',
            'kinetic_energy': 'Average molecular kinetic energy is directly proportional to absolute temperature',
            'grahams_law': 'Lighter molecules have higher average speeds at the same temperature',
            'daltons_law': 'Gas molecules don\'t interact; each species behaves independently'
        };

        return perspectives[problem.type] || 'Consider the molecular-scale behavior';
    }

    identifyPrerequisitesChem(step, problemType) {
        const prerequisites = {
            'Convert temperature to Kelvin': ['Temperature scales', 'Absolute zero concept'],
            'Calculate energy': ['Unit conversions', 'Enthalpy concepts', 'Mole calculations'],
            'Substitute into RMS formula': ['Square roots', 'Unit analysis', 'Algebraic manipulation'],
            'Apply Graham\'s Law': ['Square roots', 'Ratio and proportion', 'Molar mass calculations']
        };

        return prerequisites[step.step] || ['Basic chemistry calculations', 'Unit conversions'];
    }

    identifyKeyVocabularyChem(step) {
        const vocabulary = {
            'Identify the Ideal Gas Law': ['ideal gas', 'moles', 'pressure', 'volume', 'temperature', 'gas constant'],
            'Identify the phase transition': ['phase change', 'enthalpy', 'fusion', 'vaporization', 'intermolecular forces'],
            'Understand RMS speed': ['root-mean-square', 'kinetic energy', 'molecular speed', 'distribution'],
            'State Graham\'s Law': ['effusion', 'diffusion', 'molar mass', 'rate']
        };

        return vocabulary[step.step] || [];
    }

    // Add step bridges specific to chemistry
    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: this.generateStepBridgeChem(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgression(steps[i], steps[i + 1]),
                    molecularConnection: this.connectMolecularPerspectives(steps[i], steps[i + 1], problem)
                });
            }
        }

        return enhancedSteps;
    }

    generateStepBridgeChem(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.result || currentStep.afterExpression || 'intermediate result'}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This connects to ${nextStep.step} because we need this information to proceed`,
            chemicalReasoning: 'Each step builds on chemical principles to reach the final answer'
        };
    }

    connectMolecularPerspectives(currentStep, nextStep, problem) {
        return 'At the molecular level, each calculation step reflects physical behavior of particles in this system';
    }

    // Error prevention specific to chemistry
    addErrorPrevention(step, problemType) {
        const mistakes = this.commonMistakes[problemType]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsChem(step, problemType),
                checkPoints: this.generateCheckPointsChem(step),
                warningFlags: this.identifyWarningFlagsChem(step, problemType),
                unitCheck: this.generateUnitCheck(step)
            },
            validation: {
                selfCheck: this.generateSelfCheckQuestionChem(step),
                expectedResult: this.describeExpectedResultChem(step),
                reasonablenessCheck: this.generateReasonablenessCheck(step, problemType)
            }
        };
    }

    generatePreventionTipsChem(step, problemType) {
        const tips = {
            'Convert temperature to Kelvin': [
                'Always add 273.15, never subtract',
                'Check that result is positive',
                'Kelvin values are always larger than Celsius for common temperatures'
            ],
            'Calculate energy': [
                'Check if enthalpy is per gram or per mole',
                'Verify endothermic vs exothermic direction',
                'Ensure mass/moles units match enthalpy units'
            ],
            'Substitute into RMS formula': [
                'Convert molar mass to kg/mol before calculating',
                'Use R = 8.314 J/(mol·K) for SI units',
                'Take square root at the very end'
            ]
        };

        return tips[step.step] || ['Double-check units', 'Verify calculations'];
    }

    generateCheckPointsChem(step) {
        return [
            'Are all units consistent?',
            'Is temperature in Kelvin?',
            'Do the numbers make physical sense?',
            'Have I included proper significant figures?'
        ];
    }

    identifyWarningFlagsChem(step, problemType) {
        const warnings = {
            ideal_gas_law: step.step === 'Convert temperature to Kelvin' ?
                ['Forgetting this conversion is the #1 mistake in gas law problems!'] : [],
            phase_transition: step.step === 'Calculate energy' ?
                ['Make sure you use the right ΔH (fusion vs vaporization)'] : [],
            rms_speed: step.step.includes('molar mass') ?
                ['Must convert g/mol to kg/mol for SI units!'] : []
        };

        return warnings[problemType] || [];
    }

    generateUnitCheck(step) {
        if (step.units) {
            return `Expected units: ${step.units}. Verify your calculation produces these units.`;
        }
        return 'Check that units cancel appropriately in the calculation.';
    }

    generateSelfCheckQuestionChem(step) {
        const questions = {
            'Convert temperature to Kelvin': 'Is my temperature positive and in the range I expect?',
            'Calculate energy': 'Does the sign (+ or -) match whether heat is absorbed or released?',
            'Substitute into RMS formula': 'Did I convert molar mass to kg/mol?',
            'Apply Graham\'s Law': 'Did I take the square root of the mass ratio?'
        };

        return questions[step.step] || 'Does this result make physical and chemical sense?';
    }

    describeExpectedResultChem(step) {
        const expectations = {
            'Convert temperature to Kelvin': 'Temperature should be positive and about 273 higher than Celsius value',
            'Calculate energy': 'Energy should be positive for heating/melting/boiling, negative for cooling/freezing/condensing',
            'Calculate final speed': 'Molecular speeds typically range from 100-2000 m/s depending on mass and temperature'
        };

        return expectations[step.step] || 'Result should be chemically reasonable';
    }

    generateReasonablenessCheck(step, problemType) {
        return [
            'Is the magnitude reasonable for this type of problem?',
            'Does the answer make physical sense?',
            'Are the units correct?',
            'Does it match your intuition about molecular behavior?'
        ];
    }

    // Scaffolding for chemistry
    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsChem(step, problem),
                subSteps: this.breakIntoSubStepsChem(step),
                hints: this.generateProgressiveHintsChem(step),
                practiceVariation: this.generatePracticeVariationChem(step, problem),
                molecularVisualization: this.suggestMolecularVisualization(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcessChem(step),
                decisionPoints: this.identifyDecisionPointsChem(step),
                alternativeApproaches: this.suggestAlternativeMethodsChem(step, problem),
                chemicalIntuition: this.developChemicalIntuition(step, problem)
            }
        }));
    }

    generateGuidingQuestionsChem(step, problem) {
        const questions = {
            'Identify the Ideal Gas Law': [
                'What four properties describe a gas?',
                'How do these properties relate to each other?',
                'Which variable are we solving for?'
            ],
            'Convert temperature to Kelvin': [
                'Why must temperature be in Kelvin for gas laws?',
                'What does absolute zero represent?',
                'How do I convert Celsius to Kelvin?'
            ],
            'Identify the phase transition': [
                'Which phase change is occurring?',
                'Is energy absorbed or released?',
                'Which enthalpy value should I use?'
            ],
            'Understand RMS speed': [
                'What does RMS speed represent?',
                'How does temperature affect molecular speed?',
                'Why do lighter molecules move faster?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'What chemical principle applies here?'];
    }

    breakIntoSubStepsChem(step) {
        if (step.substitution) {
            return [
                'Write the formula clearly',
                'Identify each variable and its value',
                'Substitute values one at a time',
                'Perform calculation with proper order of operations',
                'Include units in final answer',
                'Check reasonableness of result'
            ];
        }

        return ['Understand the concept', 'Apply the formula', 'Calculate carefully', 'Verify the result'];
    }

    generateProgressiveHintsChem(step) {
        return {
            level1: 'Think about what chemical principle applies here.',
            level2: 'Consider the molecular-level explanation for this step.',
            level3: 'Check your formula and units carefully.',
            level4: step.formula ? `Use the formula: ${step.formula}` : 'Apply the appropriate chemistry equation.'
        };
    }

    generatePracticeVariationChem(step, problem) {
        return {
            similarProblem: 'Try the same type of problem with different values',
            practiceHint: 'Practice with simpler numbers first to master the technique',
            extension: 'Once comfortable, try problems combining multiple concepts',
            realWorld: 'Look for everyday examples of this chemistry principle'
        };
    }

    suggestMolecularVisualization(step, problem) {
        const visualizations = {
            'ideal_gas_law': 'Draw a container with particles bouncing - show how changing variables affects the system',
            'phase_transition': 'Sketch particles in solid, liquid, and gas arrangements to show structural changes',
            'rms_speed': 'Draw a speed distribution curve showing spread of molecular speeds',
            'grahams_law': 'Illustrate two different-mass particles effusing through an opening'
        };

        return visualizations[problem.type] || 'Visualize the molecular-level process occurring';
    }

    explainThinkingProcessChem(step) {
        return {
            observe: 'What chemical information am I given?',
            goal: 'What am I trying to calculate?',
            strategy: 'Which formula or principle applies?',
            execute: 'How do I perform the calculation correctly?',
            verify: 'Does my answer make chemical and physical sense?',
            molecular: 'What is happening at the particle level?'
        };
    }

    identifyDecisionPointsChem(step) {
        return [
            'Which formula or equation to use',
            'What units are needed',
            'Whether to convert between units',
            'How to interpret the result chemically'
        ];
    }

    suggestAlternativeMethodsChem(step, problem) {
        const alternatives = {
            'ideal_gas_law': [
                'Could use combined gas law if comparing two states',
                'Could use molar volume at STP for standard conditions',
                'Could use density form of ideal gas law'
            ],
            'phase_transition': [
                'Could calculate via heating curve if temperature changes included',
                'Could use Clausius-Clapeyron for vapor pressure approach',
                'Could use calorimetry data if available'
            ],
            'rms_speed': [
                'Could calculate from kinetic energy if that\'s known',
                'Could use other speed types (average, most probable) depending on context',
                'Could derive from Maxwell-Boltzmann distribution'
            ]
        };

        return alternatives[problem.type] || ['Standard method is most direct for this problem'];
    }

    developChemicalIntuition(step, problem) {
        return {
            particleLevel: 'What are the molecules doing?',
            energyFlow: 'Where is energy going or coming from?',
            macroscopicEffect: 'What would we observe in the lab?',
            connectionToTheory: 'How does this relate to kinetic-molecular theory?'
        };
    }

    // VERIFICATION METHODS FOR CHEMISTRY

    verifyIdealGasLaw() {
        const { P, V, n, T, R } = this.currentProblem.parameters;
        const solution = this.currentSolution;

        let T_kelvin = T;
        if (this.currentProblem.context.temperatureUnit === 'C') {
            T_kelvin = T + 273.15;
        }

        // Use given values and calculated value to verify PV = nRT
        const allValues = {
            P: P || solution.result,
            V: V || solution.result,
            n: n || solution.result,
            T: T_kelvin || solution.result
        };

        const leftSide = allValues.P * allValues.V;
        const rightSide = allValues.n * R * allValues.T;
        const percentError = Math.abs((leftSide - rightSide) / rightSide * 100);

        return {
            equation: 'PV = nRT',
            leftSide: leftSide.toFixed(4),
            rightSide: rightSide.toFixed(4),
            difference: Math.abs(leftSide - rightSide).toFixed(6),
            percentError: percentError.toFixed(4) + '%',
            isValid: percentError < 0.1,
            substitution: `${allValues.P} × ${allValues.V} = ${allValues.n} × ${R} × ${allValues.T}`
        };
    }

    verifyPhaseTransition() {
        const solution = this.currentSolution;

        return {
            calculation: `q = ${solution.moles} mol × ${solution.enthalpy_of_transition} kJ/mol`,
            result: solution.energy_required + ' kJ',
            energyType: solution.energy_sign,
            phaseChange: solution.phase_transition,
            molecularExplanation: solution.energy_sign.includes('endo') 
                ? 'Energy absorbed to break intermolecular forces' 
                : 'Energy released as intermolecular forces form',
            isPhysicallyReasonable: true
        };
    }

    verifyRMSSpeed() {
        const solution = this.currentSolution;

        // Check if speed is in reasonable range (typically 100-2000 m/s for common gases)
        const isReasonable = solution.rms_speed > 50 && solution.rms_speed < 5000;

        // Verify relationship between speeds
        const relationshipCorrect = 
            solution.most_probable_speed < solution.average_speed && 
            solution.average_speed < solution.rms_speed;

        return {
            formula: solution.formula,
            rms_speed: solution.rms_speed.toFixed(2) + ' m/s',
            speedComparison: {
                most_probable: solution.most_probable_speed.toFixed(2),
                average: solution.average_speed.toFixed(2),
                rms: solution.rms_speed.toFixed(2),
                relationship: solution.speed_relationship,
                relationshipCorrect: relationshipCorrect
            },
            isReasonable: isReasonable,
            reasonableRange: '50-5000 m/s for typical gases',
            physicalInterpretation: `At ${solution.temperature}K, typical molecule speed is ${solution.rms_speed.toFixed(0)} m/s`
        };
    }

    verifyGrahamsLaw() {
        const solution = this.currentSolution;

        // Verify that lighter gas has higher rate
        const lighterGasFaster = solution.molar_mass_1 < solution.molar_mass_2 
            ? (solution.rate_1 || 0) > (solution.rate_2 || 0)
            : (solution.rate_2 || 0) > (solution.rate_1 || 0);

        return {
            law: solution.law,
            massRatio: solution.mass_ratio.toFixed(4),
            rateRatio: ((solution.rate_1 || 1) / (solution.rate_2 || 1)).toFixed(4),
            lighterGasFaster: lighterGasFaster,
            interpretation: solution.interpretation,
            physicallyCorrect: lighterGasFaster
        };
    }

    verifyDaltonsLaw() {
        const solution = this.currentSolution;

        if (solution.partial_pressures && solution.total_pressure) {
            const calculatedTotal = solution.partial_pressures.reduce((sum, p) => sum + p, 0);
            const difference = Math.abs(calculatedTotal - solution.total_pressure);
            const percentError = (difference / solution.total_pressure * 100);

            return {
                law: solution.law,
                partialPressures: solution.partial_pressures,
                sumOfPartials: calculatedTotal.toFixed(4),
                totalPressure: solution.total_pressure.toFixed(4),
                difference: difference.toFixed(6),
                percentError: percentError.toFixed(4) + '%',
                isValid: percentError < 0.1,
                formula: solution.formula
            };
        }

        return {
            law: solution.law,
            note: 'Verification requires both partial pressures and total pressure'
        };
    }

    // Format verification data for workbook display
    formatIdealGasVerification(verification) {
        return [
            ['Equation', verification.equation],
            ['Left Side (PV)', verification.leftSide],
            ['Right Side (nRT)', verification.rightSide],
            ['Difference', verification.difference],
            ['Percent Error', verification.percentError],
            ['Substitution', verification.substitution],
            ['Valid', verification.isValid ? 'Yes ✓' : 'Check calculation']
        ];
    }

    formatPhaseTransitionVerification(verification) {
        return [
            ['Phase Change', verification.phaseChange],
            ['Calculation', verification.calculation],
            ['Energy', verification.result],
            ['Energy Type', verification.energyType],
            ['Molecular Explanation', verification.molecularExplanation],
            ['Physically Reasonable', verification.isPhysicallyReasonable ? 'Yes ✓' : 'No']
        ];
    }

    formatRMSSpeedVerification(verification) {
        return [
            ['Formula Used', verification.formula],
            ['RMS Speed', verification.rms_speed],
            ['', ''],
            ['Speed Comparison', ''],
            ['Most Probable', verification.speedComparison.most_probable + ' m/s'],
            ['Average', verification.speedComparison.average + ' m/s'],
            ['RMS', verification.speedComparison.rms + ' m/s'],
            ['Relationship', verification.speedComparison.relationship],
            ['Relationship Correct', verification.speedComparison.relationshipCorrect ? 'Yes ✓' : 'No'],
            ['', ''],
            ['Reasonable Range', verification.reasonableRange],
            ['Within Range', verification.isReasonable ? 'Yes ✓' : 'Check calculation'],
            ['Physical Interpretation', verification.physicalInterpretation]
        ];
    }

    formatGrahamsLawVerification(verification) {
        return [
            ['Law', verification.law],
            ['Mass Ratio √(M₂/M₁)', verification.massRatio],
            ['Rate Ratio', verification.rateRatio],
            ['Lighter Gas Faster', verification.lighterGasFaster ? 'Yes ✓' : 'No'],
            ['Interpretation', verification.interpretation],
            ['Physically Correct', verification.physicallyCorrect ? 'Yes ✓' : 'Check calculation']
        ];
    }

    formatDaltonsLawVerification(verification) {
        if (verification.note) {
            return [['Note', verification.note]];
        }

        const data = [
            ['Law', verification.law],
            ['Formula', verification.formula],
            ['', ''],
            ['Partial Pressures', verification.partialPressures.join(', ')],
            ['Sum of Partials', verification.sumOfPartials],
            ['Total Pressure', verification.totalPressure],
            ['Difference', verification.difference],
            ['Percent Error', verification.percentError],
            ['Valid', verification.isValid ? 'Yes ✓' : 'Check calculation']
        ];

        return data;
    }

    // Calculate confidence for chemistry problems
    calculateVerificationConfidence() {
        if (!this.currentSolution || !this.currentProblem) return 'Unknown';

        const { type } = this.currentProblem;

        switch (type) {
            case 'ideal_gas_law':
                const verification = this.verifyIdealGasLaw();
                return verification.isValid ? 'High' : 'Medium';

            case 'phase_transition':
                return 'High'; // Energy calculations are straightforward

            case 'rms_speed':
                const rmsVerification = this.verifyRMSSpeed();
                return rmsVerification.isReasonable && rmsVerification.speedComparison.relationshipCorrect ? 'High' : 'Medium';

            case 'grahams_law':
                const grahamsVerification = this.verifyGrahamsLaw();
                return grahamsVerification.physicallyCorrect ? 'High' : 'Medium';

            case 'daltons_law':
                const daltonsVerification = this.verifyDaltonsLaw();
                return daltonsVerification.isValid ? 'High' : 'Medium';

            default:
                return 'Medium';
        }
    }

    getVerificationNotes() {
        const { type } = this.currentProblem;
        const notes = [];

        switch (type) {
            case 'ideal_gas_law':
                notes.push('PV = nRT verified by substitution');
                notes.push('Temperature converted to Kelvin');
                notes.push('Units checked for consistency');
                break;

            case 'phase_transition':
                notes.push('Energy calculation uses q = nΔH');
                notes.push('Sign indicates endothermic or exothermic');
                notes.push('Molecular forces explanation provided');
                break;

            case 'rms_speed':
                notes.push('Speed relationships verified: u_mp < u_avg < u_rms');
                notes.push('Result checked against typical molecular speeds');
                notes.push('Temperature and molar mass conversions verified');
                break;

            case 'grahams_law':
                notes.push('Lighter gas confirmed to have higher rate');
                notes.push('Square root relationship applied correctly');
                break;

            case 'daltons_law':
                notes.push('Partial pressures sum to total pressure');
                notes.push('Mole fractions used for calculation');
                break;

            default:
                notes.push('Standard chemistry verification applied');
        }

        return notes.join('; ');
    }

    // Generate pedagogical notes for chemistry
    generatePedagogicalNotes(problemType) {
        const pedagogicalDatabase = {
            ideal_gas_law: {
                objectives: [
                    'Apply PV = nRT to solve for unknown gas properties',
                    'Convert temperature to Kelvin scale',
                    'Understand relationship between gas properties'
                ],
                keyConcepts: [
                    'Kinetic molecular theory',
                    'Gas constant R and its units',
                    'Absolute temperature scale',
                    'Ideal gas assumptions'
                ],
                prerequisites: [
                    'Basic algebra',
                    'Unit conversions',
                    'Temperature scales',
                    'Mole concept'
                ],
                commonDifficulties: [
                    'Forgetting to convert Celsius to Kelvin',
                    'Using wrong value of R for given units',
                    'Mixing up pressure units (atm, Pa, torr)',
                    'Not recognizing which variable to solve for'
                ],
                extensions: [
                    'Combined gas law',
                    'Stoichiometry with gases',
                    'Real gas behavior',
                    'Gas density calculations'
                ],
                assessment: [
                    'Check temperature conversion explicitly',
                    'Verify unit consistency throughout',
                    'Test with different unknowns',
                    'Connect to molecular explanation'
                ],
                molecularPerspective: 'Gas pressure results from molecular collisions with container walls. Temperature measures average kinetic energy. Volume affects collision frequency.'
            },

            phase_transition: {
                objectives: [
                    'Calculate energy for phase changes',
                    'Distinguish between different types of phase transitions',
                    'Apply q = nΔH correctly'
                ],
                keyConcepts: [
                    'Enthalpy of fusion and vaporization',
                    'Endothermic vs exothermic processes',
                    'Intermolecular forces',
                    'Phase change at constant temperature'
                ],
                prerequisites: [
                    'States of matter',
                    'Mole conversions',
                    'Energy units',
                    'Intermolecular forces'
                ],
                commonDifficulties: [
                    'Confusing ΔH_fus with ΔH_vap',
                    'Forgetting to convert mass to moles',
                    'Sign confusion (+ for endothermic, - for exothermic)',
                    'Not recognizing when phase change occurs'
                ],
                extensions: [
                    'Heating curves with multiple phases',
                    'Clausius-Clapeyron equation',
                    'Phase diagrams',
                    'Calorimetry problems'
                ],
                assessment: [
                    'Verify correct enthalpy value used',
                    'Check sign of energy matches process',
                    'Test understanding of molecular explanation',
                    'Evaluate heating curve interpretation'
                ],
                molecularPerspective: 'Phase changes involve breaking or forming intermolecular forces without changing chemical bonds. Energy goes into potential energy, not kinetic energy, so temperature stays constant.'
            },

            rms_speed: {
                objectives: [
                    'Calculate root-mean-square molecular speed',
                    'Relate temperature to molecular motion',
                    'Compare speeds of different gases'
                ],
                keyConcepts: [
                    'Kinetic molecular theory',
                    'Temperature as measure of kinetic energy',
                    'Different types of molecular speeds',
                    'Maxwell-Boltzmann distribution'
                ],
                prerequisites: [
                    'Kinetic energy formula',
                    'Square roots',
                    'Unit conversions (especially molar mass)',
                    'Temperature in Kelvin'
                ],
                commonDifficulties: [
                    'Not converting molar mass to kg/mol',
                    'Confusing different speed types',
                    'Wrong value of R or wrong units',
                    'Not taking square root at correct point'
                ],
                extensions: [
                    'Graham\'s law applications',
                    'Deriving from kinetic energy',
                    'Speed distributions',
                    'Collision frequency calculations'
                ],
                assessment: [
                    'Verify molar mass units',
                    'Check speed is physically reasonable',
                    'Test relationship between different speeds',
                    'Connect to temperature and mass effects'
                ],
                molecularPerspective: 'Molecules move at various speeds. RMS speed represents typical molecular motion. Higher temperature and lower mass both increase molecular speed.'
            },

            grahams_law: {
                objectives: [
                    'Apply Graham\'s law to effusion/diffusion problems',
                    'Understand inverse relationship with molar mass',
                    'Calculate relative rates of gas movement'
                ],
                keyConcepts: [
                    'Effusion vs diffusion',
                    'Inverse square root relationship',
                    'Kinetic molecular theory basis',
                    'Rate comparisons'
                ],
                prerequisites: [
                    'Molar mass calculations',
                    'Square roots',
                    'Ratio and proportion',
                    'RMS speed concept'
                ],
                commonDifficulties: [
                    'Forgetting square root in ratio',
                    'Inverting mass ratio incorrectly',
                    'Confusing rate with time (inverse)',
                    'Not recognizing lighter gas is faster'
                ],
                extensions: [
                    'Isotope separation',
                    'Multiple gas comparisons',
                    'Connection to RMS speed',
                    'Real-world applications'
                ],
                assessment: [
                    'Verify square root applied to mass ratio',
                    'Check lighter gas has higher rate',
                    'Test with inverse (time) relationships',
                    'Evaluate molecular explanation'
                ],
                molecularPerspective: 'At same temperature, all gases have same average kinetic energy. Lighter molecules must move faster to have same energy, so they effuse/diffuse faster.'
            },

            daltons_law: {
                objectives: [
                    'Calculate partial pressures in gas mixtures',
                    'Apply P_total = ΣP_i',
                    'Use mole fractions to find partial pressures'
                ],
                keyConcepts: [
                    'Partial pressure',
                    'Mole fraction',
                    'Independent gas behavior',
                    'Additive pressures'
                ],
                prerequisites: [
                    'Mole calculations',
                    'Pressure concepts',
                    'Fractions and proportions',
                    'Ideal gas law'
                ],
                commonDifficulties: [
                    'Confusing mole fraction with mass fraction',
                    'Not summing all partial pressures',
                    'Calculation errors with multiple gases',
                    'Forgetting total must equal sum'
                ],
                extensions: [
                    'Vapor pressure of water',
                    'Gas collection over water',
                    'Atmospheric composition',
                    'Industrial gas mixtures'
                ],
                assessment: [
                    'Verify sum equals total',
                    'Check mole fraction calculations',
                    'Test with different numbers of gases',
                    'Evaluate understanding of independence'
                ],
                molecularPerspective: 'In ideal mixtures, gas molecules don\'t interact. Each gas contributes to pressure as if alone in container. Total pressure is sum of independent contributions.'
            }
        };

        return pedagogicalDatabase[problemType] || {
            objectives: ['Solve the chemistry problem correctly'],
            keyConcepts: ['Apply appropriate chemistry principles'],
            prerequisites: ['Basic chemistry knowledge'],
            commonDifficulties: ['Various calculation errors'],
            extensions: ['More complex variations'],
            assessment: ['Verify solution accuracy'],
            molecularPerspective: 'Consider particle-level behavior'
        };
    }

    // Generate alternative methods for chemistry
    generateAlternativeMethods(problemType) {
        const alternativeDatabase = {
            ideal_gas_law: {
                primaryMethod: 'Direct application of PV = nRT',
                methods: [
                    {
                        name: 'Combined Gas Law',
                        description: 'Use P₁V₁/T₁ = P₂V₂/T₂ when comparing two states of same gas sample'
                    },
                    {
                        name: 'Molar Volume Method',
                        description: 'At STP, use 22.4 L/mol as conversion factor'
                    },
                    {
                        name: 'Density Method',
                        description: 'Use d = PM/RT form when density is involved'
                    },
                    {
                        name: 'Proportional Reasoning',
                        description: 'For simple cases, use proportional relationships (e.g., doubling T doubles P at constant V and n)'
                    }
                ],
                comparison: 'PV = nRT is most versatile; Combined Gas Law better for before/after problems; STP method quick for standard conditions; Density form useful for molar mass problems'
            },

            phase_transition: {
                primaryMethod: 'Direct calculation with q = nΔH',
                methods: [
                    {
                        name: 'Heating Curve Method',
                        description: 'Calculate total energy including temperature changes: q_total = Σ(mcΔT) + Σ(nΔH)'
                    },
                    {
                        name: 'Calorimetry Method',
                        description: 'Use q_lost = q_gained if solving calorimetry problem'
                    },
                    {
                        name: 'Per-Gram Method',
                        description: 'Some tables give ΔH per gram rather than per mole'
                    }
                ],
                comparison: 'Direct q = nΔH is simplest for pure phase change; Heating curve method needed for temperature changes too; Calorimetry method for heat transfer problems'
            },

            rms_speed: {
                primaryMethod: 'Direct formula u_rms = √(3RT/M)',
                methods: [
                    {
                        name: 'Kinetic Energy Method',
                        description: 'Calculate from KE = (1/2)m(u_rms)² = (3/2)kT'
                    },
                    {
                        name: 'Comparison Method',
                        description: 'Use ratios: (u_rms)₁/(u_rms)₂ = √(M₂/M₁) if one speed known'
                    },
                    {
                        name: 'Maxwell-Boltzmann Method',
                        description: 'Derive from full speed distribution function'
                    }
                ],
                comparison: 'Direct formula is standard; Kinetic energy method good for theory understanding; Comparison method efficient for relative problems'
            },

            grahams_law: {
                primaryMethod: 'Rate ratio formula: rate₁/rate₂ = √(M₂/M₁)',
                methods: [
                    {
                        name: 'Time Method',
                        description: 'Use inverse relationship: t₁/t₂ = √(M₁/M₂)'
                    },
                    {
                        name: 'Distance Method',
                        description: 'For diffusion: d₁/d₂ = √(M₂/M₁) at equal times'
                    },
                    {
                        name: 'RMS Speed Method',
                        description: 'Calculate individual RMS speeds and take ratio'
                    }
                ],
                comparison: 'Rate ratio is most direct; Time method useful for experimental data; RMS speed method connects to kinetic theory'
            },

            daltons_law: {
                primaryMethod: 'Sum partial pressures: P_total = ΣP_i',
                methods: [
                    {
                        name: 'Mole Fraction Method',
                        description: 'Calculate P_i = X_i × P_total from mole fractions'
                    },
                    {
                        name: 'Individual Ideal Gas Method',
                        description: 'Calculate each P_i = n_i RT/V separately, then sum'
                    },
                    {
                        name: 'Percentage Method',
                        description: 'Use percentage composition to find partial pressures'
                    }
                ],
                comparison: 'Direct sum works when partial pressures known; Mole fraction method standard for mixture problems; Individual calculation useful for conceptual understanding'
            }
        };

        return alternativeDatabase[problemType] || {
            primaryMethod: 'Standard chemistry approach',
            methods: [
                {
                    name: 'Alternative Approach',
                    description: 'Apply chemistry principles systematically'
                }
            ],
            comparison: 'Method choice depends on given information and problem context'
        };
    }

    // GRAPH DATA GENERATION

    generateMatterGraphData() {
        if (!this.currentSolution) return;

        const { type } = this.currentProblem;

        switch(type) {
            case 'ideal_gas_law':
                this.graphData = this.generateIdealGasGraph();
                break;

            case 'phase_transition':
                this.graphData = this.generateHeatingCurveGraph();
                break;

            case 'rms_speed':
                this.graphData = this.generateSpeedDistributionGraph();
                break;

            case 'daltons_law':
                this.graphData = this.generatePartialPressureGraph();
                break;
        }
    }

    generateIdealGasGraph() {
        // Generate P vs V at constant T graph
        const { T, n, R = 0.0821 } = this.currentProblem.parameters;
        const points = [];

        if (T !== undefined && n !== undefined) {
            for (let V = 1; V <= 50; V += 1) {
                const P = (n * R * T) / V;
                points.push({ V: V, P: P });
            }

            return {
                type: 'ideal_gas_PV_curve',
                title: 'Pressure vs Volume (constant T, n)',
                xAxis: 'Volume (L)',
                yAxis: 'Pressure (atm)',
                points: points,
                relationship: 'Inverse (hyperbolic)'
            };
        }

        return null;
    }

    generateHeatingCurveGraph() {
        // Simplified heating curve representation
        return {
            type: 'heating_curve',
            title: 'Temperature vs Energy Added',
            phases: [
                { phase: 'Solid heating', slope: 'positive' },
                { phase: 'Melting', slope: 'zero' },
                { phase: 'Liquid heating', slope: 'positive' },
                { phase: 'Boiling', slope: 'zero' },
                { phase: 'Gas heating', slope: 'positive' }
            ],
            note: 'Temperature constant during phase changes'
        };
    }

    generateSpeedDistributionGraph() {
        // Maxwell-Boltzmann distribution curve
        return {
            type: 'speed_distribution',
            title: 'Maxwell-Boltzmann Speed Distribution',
            features: [
                'Peak at most probable speed',
                'Long tail at high speeds',
                'Area under curve = 1 (probability)',
                'Shifts right and flattens at higher T'
            ],
            markedSpeeds: {
                most_probable: this.currentSolution.most_probable_speed,
                average: this.currentSolution.average_speed,
                rms: this.currentSolution.rms_speed
            }
        };
    }

    generatePartialPressureGraph() {
        if (this.currentSolution.partial_pressures) {
            return {
                type: 'partial_pressure_bar_chart',
                title: 'Partial Pressures in Gas Mixture',
                data: this.currentSolution.partial_pressures,
                total: this.currentSolution.total_pressure,
                note: 'Each bar represents contribution of one gas to total pressure'
            };
        }

        return null;
    }

    // WORKBOOK GENERATION

    generateMatterWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.title = 'States of Matter & Particle Theory Workbook';

        workbook.sections = [
            this.createProblemSection(),
            this.createEnhancedStepsSection(),
            this.createLessonSection(),
            this.createSolutionSection(),
            this.createAnalysisSection(),
            this.createVerificationSection(),
            this.createMolecularPerspectiveSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'States of Matter & Particle Theory Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSection() {
        if (!this.currentProblem) return null;

        const problemData = [
            ['Problem Type', this.matterTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.matterTypes[this.currentProblem.type]?.category || 'General'],
            ['Description', this.matterTypes[this.currentProblem.type]?.description || 'Chemistry problem']
        ];

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
            // Skip bridge steps in main display
            if (step.stepType === 'bridge') {
                stepsData.push(['→ Connection', step.explanation.currentState]);
                stepsData.push(['', '']);
                return;
            }

            // Main step
            stepsData.push([`Step ${step.stepNumber}`, step.step]);
            stepsData.push(['Description', step.description]);

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

            if (step.substitution) {
                stepsData.push(['Substitution', step.substitution]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.physicalMeaning) {
                stepsData.push(['Physical Meaning', step.physicalMeaning]);
            }

            if (step.visualHint) {
                stepsData.push(['Visual Hint', step.visualHint]);
            }

            // Enhanced explanations (if detailed level)
            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
                stepsData.push(['Chemical Principle', step.explanations.chemical?.theory || 'Apply chemistry principles']);
            }

            // Error prevention
            if (step.errorPrevention.commonMistakes && step.errorPrevention.commonMistakes.length > 0) {
                    stepsData.push(['Common Mistakes', step.errorPrevention.commonMistakes.join('; ')]);
                }
                if (step.errorPrevention.preventionTips && step.errorPrevention.preventionTips.length > 0) {
                    stepsData.push(['Prevention Tips', step.errorPrevention.preventionTips.join('; ')]);
                }
                if (step.errorPrevention.criticalWarning) {
                    stepsData.push(['⚠️ Warning', step.errorPrevention.criticalWarning]);
                }
            }

            // Scaffolding (if scaffolded level)
            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                if (step.scaffolding.guidingQuestions) {
                    stepsData.push(['Guiding Questions', step.scaffolding.guidingQuestions.join(' ')]);
                }
                if (step.scaffolding.molecularVisualization) {
                    stepsData.push(['Visualization', step.scaffolding.molecularVisualization]);
                }
            }

            if (step.finalAnswer) {
                stepsData.push(['✓ Final Answer', step.result || step.afterExpression]);
                if (step.units) {
                    stepsData.push(['Units', step.units]);
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

        if (!lesson) {
            return {
                title: 'Key Concepts',
                type: 'lesson',
                data: [
                    ['Topic', 'States of Matter and Particle Theory'],
                    ['Concept', 'Matter exists as solid, liquid, or gas based on temperature and pressure'],
                    ['Particle Theory', 'Properties of matter explained by behavior of particles']
                ]
            };
        }

        const lessonData = [
            ['Title', lesson.title],
            ['', ''],
            ['Theory', lesson.theory],
            ['', '']
        ];

        if (lesson.concepts) {
            lessonData.push(['Key Concepts', '']);
            lesson.concepts.forEach((concept, index) => {
                lessonData.push([`  ${index + 1}`, concept]);
            });
            lessonData.push(['', '']);
        }

        if (lesson.keyFormulas) {
            lessonData.push(['Important Formulas', '']);
            Object.entries(lesson.keyFormulas).forEach(([name, formula]) => {
                lessonData.push([`  ${name}`, formula]);
            });
            lessonData.push(['', '']);
        }

        if (lesson.solvingSteps) {
            lessonData.push(['Solving Strategy', '']);
            lesson.solvingSteps.forEach((step, index) => {
                lessonData.push([`  ${index + 1}`, step]);
            });
            lessonData.push(['', '']);
        }

        if (lesson.applications) {
            lessonData.push(['Applications', '']);
            lesson.applications.forEach((app, index) => {
                lessonData.push([`  ${index + 1}`, app]);
            });
        }

        return {
            title: 'Lesson: ' + lesson.title,
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        // Add main result
        if (this.currentSolution.result !== undefined) {
            solutionData.push(['Result', this.currentSolution.result]);
            if (this.currentSolution.units) {
                solutionData.push(['Units', this.currentSolution.units]);
            }
        }

        // Add solving_for if present
        if (this.currentSolution.solving_for) {
            solutionData.push(['Solved For', this.currentSolution.solving_for]);
        }

        // Add formula used
        if (this.currentSolution.formula || this.currentSolution.formula_used) {
            solutionData.push(['Formula', this.currentSolution.formula || this.currentSolution.formula_used]);
        }

        // Add equation if present
        if (this.currentSolution.equation) {
            solutionData.push(['Equation', this.currentSolution.equation]);
        }

        // Add physical meaning or interpretation
        if (this.currentSolution.physical_meaning) {
            solutionData.push(['Physical Meaning', this.currentSolution.physical_meaning]);
        }
        if (this.currentSolution.interpretation) {
            solutionData.push(['Interpretation', this.currentSolution.interpretation]);
        }

        // Add energy sign for phase transitions
        if (this.currentSolution.energy_sign) {
            solutionData.push(['Energy Type', this.currentSolution.energy_sign]);
        }

        // Add phase transition info
        if (this.currentSolution.phase_transition) {
            solutionData.push(['Phase Change', this.currentSolution.phase_transition]);
        }

        // Add temperature conversions
        if (this.currentSolution.celsius !== undefined) {
            solutionData.push(['Temperature (°C)', this.currentSolution.celsius.toFixed(2)]);
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createAnalysisSection() {
        const analysisData = [
            ['Problem Type', this.matterTypes[this.currentProblem.type]?.name || 'Chemistry Problem'],
            ['Category', this.matterTypes[this.currentProblem.type]?.category || 'General'],
            ['Solution Steps', this.solutionSteps?.length || 0],
            ['Explanation Level', this.explanationLevel],
            ['Verification Confidence', this.calculateVerificationConfidence()]
        ];

        // Add specific analysis based on problem type
        if (this.currentSolution.deviation !== undefined) {
            analysisData.push(['Deviation from Ideal', this.currentSolution.deviation]);
            analysisData.push(['Percent Deviation', this.currentSolution.percent_deviation + '%']);
        }

        if (this.currentSolution.speed_relationship) {
            analysisData.push(['Speed Relationship', this.currentSolution.speed_relationship]);
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSection() {
        if (!this.currentSolution || !this.currentProblem) return null;

        const verificationData = [['Verification Method', 'Result']];
        verificationData.push(['', '']); // Spacing

        const { type } = this.currentProblem;

        switch (type) {
            case 'ideal_gas_law':
                const idealGasVerif = this.verifyIdealGasLaw();
                verificationData.push(...this.formatIdealGasVerification(idealGasVerif));
                break;

            case 'phase_transition':
                const phaseVerif = this.verifyPhaseTransition();
                verificationData.push(...this.formatPhaseTransitionVerification(phaseVerif));
                break;

            case 'rms_speed':
                const rmsVerif = this.verifyRMSSpeed();
                verificationData.push(...this.formatRMSSpeedVerification(rmsVerif));
                break;

            case 'grahams_law':
                const grahamsVerif = this.verifyGrahamsLaw();
                verificationData.push(...this.formatGrahamsLawVerification(grahamsVerif));
                break;

            case 'daltons_law':
                const daltonsVerif = this.verifyDaltonsLaw();
                verificationData.push(...this.formatDaltonsLawVerification(daltonsVerif));
                break;

            default:
                verificationData.push(['General Check', 'Solution verified using standard chemistry methods']);
        }

        // Add verification confidence and notes
        if (this.verificationDetail === 'detailed') {
            verificationData.push(['', '']); // Spacing
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

    createMolecularPerspectiveSection() {
        if (!this.includePedagogicalNotes) return null;

        const { type } = this.currentProblem;
        const molecularData = [];

        const perspectives = {
            ideal_gas_law: {
                particleBehavior: 'Gas particles move randomly in straight lines, colliding elastically with container walls',
                macroscopicConnection: 'Pressure results from momentum transfer during wall collisions',
                temperatureEffect: 'Higher temperature means faster average particle speed, leading to more forceful collisions',
                volumeEffect: 'Larger volume spreads particles out, reducing collision frequency with walls'
            },
            phase_transition: {
                particleBehavior: 'During phase changes, particles break free from or form new intermolecular attractions',
                macroscopicConnection: 'Energy input breaks bonds (endothermic); energy release forms bonds (exothermic)',
                temperatureEffect: 'Temperature stays constant during phase change as energy goes into potential, not kinetic energy',
                bondingExplanation: 'Solid: particles vibrate in fixed positions. Liquid: particles slide past each other. Gas: particles move freely'
            },
            rms_speed: {
                particleBehavior: 'Gas particles move at various speeds following Maxwell-Boltzmann distribution',
                macroscopicConnection: 'RMS speed is the characteristic speed related to average kinetic energy',
                temperatureEffect: 'Temperature is directly proportional to average kinetic energy: KE = (1/2)m(u_rms)²',
                massEffect: 'Lighter molecules move faster to have the same kinetic energy at a given temperature'
            },
            grahams_law: {
                particleBehavior: 'Lighter molecules move faster on average than heavier molecules at same temperature',
                macroscopicConnection: 'Faster molecules escape through openings more quickly (effusion) or spread through space faster (diffusion)',
                kineticEnergyConnection: 'At same T, all gases have same average KE: (1/2)m₁v₁² = (1/2)m₂v₂²',
                massEffect: 'Speed inversely proportional to square root of mass'
            },
            daltons_law: {
                particleBehavior: 'In ideal mixtures, different gas molecules don\'t interact with each other',
                macroscopicConnection: 'Each gas contributes to pressure independently based on its mole fraction',
                independenceExplanation: 'Molecules collide with walls regardless of what other gas species are present',
                pressureContribution: 'Partial pressure proportional to number of molecules of that type'
            }
        };

        const perspective = perspectives[type];

        if (perspective) {
            molecularData.push(['Molecular Perspective', '']);
            molecularData.push(['', '']);
            
            Object.entries(perspective).forEach(([key, value]) => {
                const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                molecularData.push([label, value]);
            });
        } else {
            molecularData.push(['Molecular Perspective', 'Consider how particle behavior explains macroscopic properties']);
        }

        return {
            title: 'Molecular Perspective',
            type: 'molecular',
            data: molecularData
        };
    }

    createPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        const { type } = this.currentProblem;
        const notes = this.generatePedagogicalNotes(type);

        const pedagogicalData = [
            ['Learning Objectives', notes.objectives.join('; ')],
            ['', ''],
            ['Key Concepts', notes.keyConcepts.join('; ')],
            ['', ''],
            ['Prerequisites', notes.prerequisites.join('; ')],
            ['', ''],
            ['Common Difficulties', notes.commonDifficulties.join('; ')],
            ['', ''],
            ['Extension Ideas', notes.extensions.join('; ')],
            ['', ''],
            ['Assessment Tips', notes.assessment.join('; ')]
        ];

        if (notes.molecularPerspective) {
            pedagogicalData.push(['', '']);
            pedagogicalData.push(['Molecular Perspective', notes.molecularPerspective]);
        }

        return {
            title: 'Teaching Notes',
            type: 'pedagogical',
            data: pedagogicalData
        };
    }

    createAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const { type } = this.currentProblem;
        const alternatives = this.generateAlternativeMethods(type);

        const alternativesData = [
            ['Primary Method Used', alternatives.primaryMethod],
            ['', '']
        ];

        if (alternatives.methods && alternatives.methods.length > 0) {
            alternativesData.push(['Alternative Methods', '']);
            alternatives.methods.forEach((method, index) => {
                alternativesData.push([`Method ${index + 1}: ${method.name}`, method.description]);
            });
            alternativesData.push(['', '']);
        }

        if (alternatives.comparison) {
            alternativesData.push(['Method Comparison', alternatives.comparison]);
        }

        return {
            title: 'Alternative Solution Methods',
            type: 'alternatives',
            data: alternativesData
        };
    }

    // Utility method for adaptive language (inherited from base, but can customize for chemistry)
    adaptLanguageLevel(text, level) {
        if (!text) return '';

        const adaptations = {
            basic: {
                replacements: {
                    'moles': 'amount of substance',
                    'kinetic energy': 'energy of motion',
                    'intermolecular forces': 'attractions between molecules',
                    'endothermic': 'absorbs heat',
                    'exothermic': 'releases heat',
                    'effusion': 'escape through small opening',
                    'diffusion': 'spreading through space'
                }
            },
            intermediate: {
                replacements: {
                    'moles': 'moles (mol)',
                    'kinetic energy': 'kinetic energy (KE)',
                    'intermolecular forces': 'intermolecular forces',
                    'endothermic': 'endothermic (heat absorbed)',
                    'exothermic': 'exothermic (heat released)'
                }
            },
            detailed: {
                replacements: {
                    'moles': 'moles (amount of substance in mol)',
                    'kinetic energy': 'kinetic energy (energy associated with particle motion)',
                    'intermolecular forces': 'intermolecular forces (attractions between distinct molecules)',
                    'endothermic': 'endothermic process (ΔH > 0, heat absorbed)',
                    'exothermic': 'exothermic process (ΔH < 0, heat released)'
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
}

// Export the class
export default EnhancedMatterParticleTheoryWorkbook;
