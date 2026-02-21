// Enhanced Electricity Workbook - Comprehensive Electricity System
// Follows the same architecture as EnhancedMechanicsWorkbook

export class EnhancedElectricityWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "electricity";
        this.cellWidth = 200;
        this.cellHeight = 28;
        this.headerHeight = 35;
        this.contentHeight = 40;
        this.rowLabelWidth = 60;
        this.fontSize = 12;
        this.contentFontSize = 14;

        this.currentProblem = null;
        this.currentContent = null;
        this.contentSteps = [];
        this.currentWorkbook = null;
        this.diagramRenderer = new PhysicsDiagramsRenderer();
        this.includeDiagramsInWorkbook = options.includeDiagrams !== false;
        this.diagramWidth = options.diagramWidth || 800;
        this.diagramHeight = options.diagramHeight || 600;
        this.renderedDiagrams = new Map();
        this.diagramsPromise = null;
        this.currentExperiment = null;

        this.explanationLevel = options.explanationLevel || 'intermediate';
        this.includeVisualizations = options.includeVisualizations !== false;
        this.includeConceptualConnections = options.includeConceptualConnections !== false;
        this.includeExamples = options.includeExamples !== false;
        this.includeComparisons = options.includeComparisons !== false;
        this.includeCommonMisconceptions = options.includeCommonMisconceptions !== false;
        this.includePedagogicalNotes = options.includePedagogicalNotes !== false;
        this.includeExperiments = options.includeExperiments !== false;
        this.detailLevel = options.detailLevel || 'detailed';

        this.adaptiveDifficulty = options.adaptiveDifficulty !== false;
        this.metacognitiveSupport = options.metacognitiveSupport !== false;
        this.contextualLearning = options.contextualLearning !== false;
        this.assessmentFeedback = options.assessmentFeedback !== false;

        this.learnerProfile = {
            currentLevel: 'intermediate',
            masteredTopics: [],
            strugglingTopics: [],
            preferredLearningStyle: 'visual',
            progressHistory: []
        };

        this.electricitySymbols = this.initializeElectricitySymbols();
        this.setThemeColors();
        this.initializeElectricityTopics();
        this.initializeElectricityLessons();
        this.initializeElectricityExperiments();
        this.initializeMisconceptionDatabase();
        this.initializeMetacognitivePrompts();
        this.initializeContextualScenarios();
        this.initializeAssessmentRubrics();
    }

    setThemeColors() {
        const themes = {
            electricity: {
                background: '#ffffff',
                gridColor: '#b0b0b0',
                headerBg: '#e65100',
                headerText: '#ffffff',
                sectionBg: '#fff3e0',
                sectionText: '#bf360c',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#fbe9e7',
                resultText: '#bf360c',
                definitionBg: '#e8f5e9',
                definitionText: '#1b5e20',
                stepBg: '#e3f2fd',
                stepText: '#0d47a1',
                borderColor: '#ff6f00',
                contentBg: '#fff9c4',
                contentText: '#f57f17',
                diagramBg: '#fce4ec',
                structureBg: '#e0f2f1',
                experimentBg: '#f3e5f5',
                experimentText: '#6a1b9a',
                chargeBg: '#fff3e0',
                currentBg: '#e3f2fd',
                resistanceBg: '#e8f5e9',
                circuitsBg: '#f3e5f5',
                powerBg: '#fce4ec',
                electromagneticBg: '#e0f7fa'
            },
            circuit: {
                background: '#fafafa',
                gridColor: '#9e9e9e',
                headerBg: '#1a237e',
                headerText: '#ffffff',
                sectionBg: '#e8eaf6',
                sectionText: '#1a237e',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#ede7f6',
                resultText: '#4527a0',
                definitionBg: '#e0f7fa',
                definitionText: '#006064',
                stepBg: '#f1f8e9',
                stepText: '#33691e',
                borderColor: '#3949ab',
                contentBg: '#e8eaf6',
                contentText: '#1a237e',
                diagramBg: '#fce4ec',
                structureBg: '#e8f5e9',
                experimentBg: '#fffde7',
                experimentText: '#f57f17',
                chargeBg: '#e8eaf6',
                currentBg: '#e3f2fd',
                resistanceBg: '#e8f5e9',
                circuitsBg: '#ede7f6',
                powerBg: '#fce4ec',
                electromagneticBg: '#e0f7fa'
            }
        };

        this.colors = themes[this.theme] || themes.electricity;
    }

    initializeElectricitySymbols() {
        return {
            // Greek letters
            'alpha': 'α',
            'beta': 'β',
            'delta': 'Δ',
            'epsilon': 'ε',
            'eta': 'η',
            'lambda': 'λ',
            'mu': 'μ',
            'omega': 'Ω',
            'phi': 'φ',
            'rho': 'ρ',
            'sigma': 'σ',
            'tau': 'τ',
            'theta': 'θ',

            // Math symbols
            'approximately': '≈',
            'proportional': '∝',
            'infinity': '∞',
            'degree': '°',
            'integral': '∫',
            'partial': '∂',
            'sqrt': '√',
            'squared': '²',
            'cubed': '³',
            'plusminus': '±',

            // Charge and current
            'charge': 'Q',
            'current': 'I',
            'elementaryCharge': 'e',
            'electronCharge': '−e',
            'protonCharge': '+e',
            'chargeCarrier': 'n',
            'driftVelocity': 'v_d',

            // Potential and EMF
            'voltage': 'V',
            'potential': 'V',
            'emf': 'ε',
            'potentialDifference': 'V',
            'terminalVoltage': 'V_T',

            // Resistance
            'resistance': 'R',
            'resistivity': 'ρ',
            'conductance': 'G',
            'conductivity': 'σ',
            'internalResistance': 'r',

            // Power and energy
            'power': 'P',
            'energy': 'E',
            'work': 'W',
            'joule': 'J',
            'watt': 'W',
            'kilowatthour': 'kWh',

            // Capacitance
            'capacitance': 'C',
            'farad': 'F',
            'permittivity': 'ε₀',

            // Magnetic
            'magneticField': 'B',
            'magneticFlux': 'Φ',
            'inductance': 'L',
            'henry': 'H',
            'tesla': 'T',

            // Units
            'ampere': 'A',
            'volt': 'V',
            'ohm': 'Ω',
            'coulomb': 'C',
            'siemen': 'S',
            'meter': 'm',
            'kilogram': 'kg',
            'second': 's'
        };
    }

    initializeElectricityTopics() {
        this.electricityTopics = {
            charge_and_current: {
                patterns: [
                    /electric.*charge|charge.*carrier/i,
                    /current|ampere|electron.*flow/i,
                    /drift.*velocity|charge.*flow/i,
                    /coulomb|elementary.*charge/i
                ],
                handler: this.handleChargeAndCurrent.bind(this),
                name: 'Electric Charge and Current',
                category: 'electricity',
                description: 'Nature of electric charge, current as charge flow, and drift velocity model',
                difficulty: 'beginner',
                prerequisites: ['atomic structure', 'basic algebra']
            },

            potential_difference_emf: {
                patterns: [
                    /potential.*difference|voltage/i,
                    /emf|electromotive.*force/i,
                    /internal.*resistance|terminal.*voltage/i,
                    /energy.*per.*charge|joule.*per.*coulomb/i
                ],
                handler: this.handlePotentialDifferenceEMF.bind(this),
                name: 'Potential Difference and EMF',
                category: 'electricity',
                description: 'Electric potential difference, EMF, and internal resistance of cells',
                difficulty: 'intermediate',
                prerequisites: ['charge_and_current', 'energy concepts']
            },

            resistance_resistivity: {
                patterns: [
                    /resistance|resistivity/i,
                    /ohm.*law|i.*v.*characteristic/i,
                    /conductor|semiconductor|insulator/i,
                    /temperature.*resistance|thermistor|LDR/i
                ],
                handler: this.handleResistanceResistivity.bind(this),
                name: 'Resistance and Resistivity',
                category: 'electricity',
                description: "Ohm's law, resistance, resistivity, and I-V characteristics",
                difficulty: 'intermediate',
                prerequisites: ['charge_and_current', 'potential_difference_emf']
            },

            dc_circuits: {
                patterns: [
                    /circuit|series|parallel/i,
                    /kirchhoff|loop.*rule|junction.*rule/i,
                    /potential.*divider|wheatstone/i,
                    /resistor.*combination|network/i
                ],
                handler: this.handleDCCircuits.bind(this),
                name: 'DC Circuits',
                category: 'electricity',
                description: "Series and parallel circuits, Kirchhoff's laws, potential dividers",
                difficulty: 'intermediate',
                prerequisites: ['resistance_resistivity', 'potential_difference_emf']
            },

            electrical_power_energy: {
                patterns: [
                    /electrical.*power|power.*dissipation/i,
                    /electrical.*energy|kilowatt.*hour/i,
                    /heating.*effect|joule.*heating/i,
                    /efficiency.*electrical|cost.*electricity/i
                ],
                handler: this.handleElectricalPowerEnergy.bind(this),
                name: 'Electrical Power and Energy',
                category: 'electricity',
                description: 'Power dissipation, electrical energy, and efficiency',
                difficulty: 'intermediate',
                prerequisites: ['dc_circuits', 'energy concepts']
            },

            capacitance: {
                patterns: [
                    /capacit|capacitor/i,
                    /charge.*store|dielectric/i,
                    /charging.*discharging|RC.*circuit/i,
                    /time.*constant|exponential.*decay/i
                ],
                handler: this.handleCapacitance.bind(this),
                name: 'Capacitance',
                category: 'electricity',
                description: 'Capacitors, charge storage, energy, and RC circuits',
                difficulty: 'advanced',
                prerequisites: ['dc_circuits', 'electrical_power_energy', 'exponential functions']
            }
        };
    }

    initializeElectricityLessons() {
        this.lessons = {
            charge_and_current: {
                title: "Electric Charge and Current: The Foundation of Electricity",
                concepts: [
                    "Electric charge is a fundamental property of matter; it is quantised in units of e = 1.6 × 10⁻¹⁹ C",
                    "Current is the rate of flow of electric charge: I = ΔQ/Δt",
                    "Conventional current flows from positive to negative; electron flow is opposite",
                    "The drift velocity model explains how current arises from slow electron migration",
                    "Current in a conductor: I = nAve, where n is charge carrier density"
                ],
                theory: "Electricity arises from the existence and movement of electric charge. Electrons carry negative charge and are responsible for current in most conductors. Understanding charge and current at the microscopic level — using the drift velocity model — connects the observable macroscopic current to the behaviour of billions of charge carriers.",
                keyDefinitions: {
                    "Electric Charge (Q)": "A fundamental property of matter; measured in coulombs (C). Positive charges (protons) and negative charges (electrons). Like charges repel; unlike attract.",
                    "Elementary Charge (e)": "The magnitude of charge on one electron or proton: e = 1.60 × 10⁻¹⁹ C. All charge is quantised: Q = ne",
                    "Electric Current (I)": "The rate of flow of electric charge past a point: I = ΔQ/Δt. Measured in amperes (A). 1 A = 1 C s⁻¹",
                    "Conventional Current": "Defined as flow of positive charge from + to −. Opposite to actual electron flow.",
                    "Charge Carrier": "Particle that carries charge: electrons in metals, ions in electrolytes, holes in semiconductors",
                    "Drift Velocity (v_d)": "The average velocity of charge carriers along the conductor due to the electric field; typically very slow (~mm/s)",
                    "Charge Carrier Density (n)": "Number of free charge carriers per unit volume (m⁻³); very high in metals (~10²⁸ m⁻³)"
                },
                currentModel: {
                    microscopicFormula: {
                        equation: "I = nAve",
                        variables: {
                            n: "number density of charge carriers (m⁻³)",
                            A: "cross-sectional area of conductor (m²)",
                            v: "mean drift velocity of carriers (m/s)",
                            e: "charge on each carrier (C)"
                        },
                        derivation: "In time Δt, carriers travel distance v·Δt. Volume swept = A·v·Δt. Number of carriers = n·A·v·Δt. Charge = n·A·v·Δt·e. Current I = Q/t = nAve",
                        insight: "A large current can arise from large n (many carriers) rather than large v (fast carriers). In metals, n is huge but v is tiny."
                    }
                },
                applications: [
                    "Understanding fuse ratings and safe current limits",
                    "Designing wire cross-sections for electrical installations",
                    "Explaining why metals are good conductors (high n)",
                    "Comparing conductors, semiconductors, and insulators by carrier density",
                    "Electrolysis and electroplating (ionic charge carriers)"
                ]
            },

            potential_difference_emf: {
                title: "Potential Difference and EMF: Energy in Electric Circuits",
                concepts: [
                    "Potential difference (p.d.) is energy transferred per unit charge between two points",
                    "EMF is the energy supplied per unit charge by a source (cell, battery, generator)",
                    "Internal resistance causes the terminal voltage to be less than the EMF",
                    "V = ε − Ir relates terminal voltage to EMF and internal resistance",
                    "Power delivered to external circuit = εI − I²r"
                ],
                theory: "Potential difference and EMF are both measured in volts (V = J C⁻¹). They represent energy per unit charge, but play different roles: EMF is the energy input from a source; potential difference is the energy output to a component. Internal resistance is a critical real-world complication that explains why batteries 'go flat' under load.",
                keyDefinitions: {
                    "Potential Difference (V)": "Energy transferred per unit charge between two points in a circuit: V = W/Q. Measured in volts (V). 1 V = 1 J C⁻¹",
                    "Electromotive Force (EMF, ε)": "Energy supplied per unit charge by a source (cell, generator): ε = W/Q. Measured in volts. NOT a force despite the name.",
                    "Internal Resistance (r)": "Resistance within a cell/battery due to its internal chemistry and structure. Causes energy dissipation inside the source.",
                    "Terminal Voltage": "The actual potential difference across the terminals of a cell when current flows: V_T = ε − Ir",
                    "Lost Volts": "Voltage 'lost' across internal resistance: V_lost = Ir",
                    "Open Circuit Voltage": "Terminal voltage when no current flows = EMF (ε)",
                    "Short Circuit Current": "Maximum current when external resistance = 0: I_max = ε/r"
                },
                emfAndInternalResistance: {
                    mainEquation: "ε = I(R + r)  or equivalently  V = ε − Ir",
                    terminalVoltage: "V_terminal = ε − Ir",
                    powerRelations: {
                        totalPower: "P_total = εI",
                        externalPower: "P_external = I²R = IV",
                        internalPower: "P_internal = I²r",
                        conservation: "εI = I²R + I²r  (total = external + internal)"
                    },
                    graphMethod: {
                        axes: "Plot V (terminal voltage) vs I (current)",
                        gradient: "gradient = −r (negative of internal resistance)",
                        yIntercept: "y-intercept = ε (EMF)",
                        xIntercept: "x-intercept = ε/r (short circuit current)"
                    }
                },
                applications: [
                    "Battery design and selection for devices",
                    "Why car batteries fail to start engines in cold weather (r increases)",
                    "Matching source impedance to load for maximum power transfer",
                    "Understanding voltage drop in long cable runs",
                    "Comparing rechargeable vs primary cells"
                ]
            },

            resistance_resistivity: {
                title: "Resistance and Resistivity: Opposing Current Flow",
                concepts: [
                    "Resistance is defined as R = V/I; it opposes the flow of current",
                    "Ohm's Law: for an ohmic conductor, V ∝ I at constant temperature",
                    "Resistivity ρ is a material property: R = ρL/A",
                    "Resistance of metals increases with temperature; semiconductors decrease",
                    "Non-ohmic devices: thermistors, LDRs, and diodes have non-linear I-V characteristics"
                ],
                theory: "Resistance quantifies how difficult it is for current to flow through a component. Resistivity extends this to a material property independent of dimensions. The I-V characteristic of a component reveals its resistance behaviour — whether it obeys Ohm's law or not — and is fundamental to circuit design and electronic engineering.",
                keyDefinitions: {
                    "Resistance (R)": "Opposition to current flow: R = V/I. Measured in ohms (Ω). 1 Ω = 1 V A⁻¹",
                    "Ohm's Law": "For a conductor at constant temperature, V ∝ I, i.e., R = V/I = constant",
                    "Ohmic Conductor": "Device for which resistance is constant regardless of V or I (e.g., metal wire at constant temperature)",
                    "Non-ohmic Device": "Device for which resistance varies with V or I (e.g., lamp, diode, thermistor)",
                    "Resistivity (ρ)": "A material property relating resistance to dimensions: R = ρL/A. Unit: Ω m",
                    "Conductance (G)": "Reciprocal of resistance: G = 1/R = I/V. Unit: siemens (S)",
                    "Conductivity (σ)": "Reciprocal of resistivity: σ = 1/ρ. Unit: S m⁻¹",
                    "Thermistor": "Resistor whose resistance changes significantly with temperature (NTC: resistance decreases as temp increases)",
                    "LDR": "Light-Dependent Resistor: resistance decreases as light intensity increases"
                },
                ohmsLaw: {
                    statement: "The current through a conductor is directly proportional to the potential difference across it, provided physical conditions (temperature) remain constant",
                    equation: "V = IR",
                    graphForOhmic: "I-V graph: straight line through origin; gradient = 1/R",
                    graphForLamp: "I-V graph: curve, gradient decreasing (R increasing with temperature)",
                    graphForDiode: "I-V graph: negligible current until forward threshold (~0.7 V for silicon); conducts freely forward, blocks reverse"
                },
                resistivity: {
                    formula: "R = ρL/A",
                    variables: {
                        R: "resistance (Ω)",
                        rho: "resistivity of material (Ω m)",
                        L: "length of conductor (m)",
                        A: "cross-sectional area (m²)"
                    },
                    values: {
                        copper: "ρ ≈ 1.7 × 10⁻⁸ Ω m (excellent conductor)",
                        aluminium: "ρ ≈ 2.8 × 10⁻⁸ Ω m (good conductor)",
                        silicon: "ρ ≈ 10³ Ω m (semiconductor)",
                        glass: "ρ ≈ 10¹² Ω m (insulator)"
                    },
                    temperatureEffect: {
                        metals: "Resistivity increases with temperature (more lattice vibrations impede electron flow)",
                        semiconductors: "Resistivity decreases with temperature (more charge carriers thermally generated)",
                        superconductors: "Resistivity drops to zero below critical temperature"
                    }
                },
                ivCharacteristics: {
                    ohmic_wire: {
                        shape: "Straight line through origin",
                        meaning: "R = constant (independent of V and I)",
                        examples: ["Resistor at constant temperature", "Metal wire at room temperature"]
                    },
                    filament_lamp: {
                        shape: "Curve; gradient decreases as V increases (S-shape)",
                        meaning: "R increases as temperature rises with current",
                        examples: ["Tungsten filament bulb"]
                    },
                    thermistor_ntc: {
                        shape: "Curve; gradient increases as V increases",
                        meaning: "R decreases as self-heating warms the thermistor",
                        examples: ["NTC thermistor in circuit"]
                    },
                    diode: {
                        shape: "Almost no current in reverse bias; sharp rise at ~0.7 V forward threshold",
                        meaning: "Allows current in one direction only",
                        examples: ["Silicon p-n junction diode", "LED"]
                    }
                },
                applications: [
                    "Selecting wire gauge for electrical installations (R = ρL/A)",
                    "Temperature sensors using thermistors (NTC) in thermostats",
                    "Automatic lighting using LDRs in street lights",
                    "Diodes in rectifier circuits (AC to DC conversion)",
                    "Superconducting magnets in MRI machines and particle accelerators"
                ]
            },

            dc_circuits: {
                title: "DC Circuits: Analysing Series and Parallel Networks",
                concepts: [
                    "Series circuit: same current everywhere; voltages add; R_total = R₁ + R₂ + ...",
                    "Parallel circuit: same voltage; currents add; 1/R_total = 1/R₁ + 1/R₂ + ...",
                    "Kirchhoff's Current Law (KCL): sum of currents at a junction = 0",
                    "Kirchhoff's Voltage Law (KVL): sum of EMFs = sum of p.d.s around any closed loop",
                    "Potential dividers divide voltage in proportion to resistance"
                ],
                theory: "Circuit analysis using Kirchhoff's laws provides a systematic method for finding unknown currents and voltages in any DC network. The laws are direct consequences of conservation of charge (KCL) and conservation of energy (KVL). Mastering series/parallel combinations and potential dividers is essential for electronics and electrical engineering.",
                keyDefinitions: {
                    "Series Circuit": "Components connected end-to-end; same current flows through all components",
                    "Parallel Circuit": "Components connected between the same two nodes; same voltage across all components",
                    "Kirchhoff's Current Law (KCL)": "The sum of currents entering a junction equals the sum leaving it. (Conservation of charge: ΣI_in = ΣI_out)",
                    "Kirchhoff's Voltage Law (KVL)": "The sum of all EMFs around a closed loop equals the sum of all potential drops. (Conservation of energy: Σε = ΣIR)",
                    "Potential Divider": "Two or more resistors in series used to produce a fraction of the supply voltage",
                    "Wheatstone Bridge": "Circuit with four resistors in a diamond pattern; balanced when R₁/R₂ = R₃/R₄"
                },
                seriesCircuits: {
                    currentRule: "I is the same through all components: I₁ = I₂ = I₃ = I",
                    voltageRule: "Voltages add up to supply: V_supply = V₁ + V₂ + V₃",
                    resistanceRule: "R_total = R₁ + R₂ + R₃ + ...",
                    voltageRatio: "V₁/V₂ = R₁/R₂  (voltages proportional to resistances)"
                },
                parallelCircuits: {
                    voltageRule: "V is the same across all branches: V₁ = V₂ = V₃ = V",
                    currentRule: "Currents add: I_total = I₁ + I₂ + I₃",
                    resistanceRule: "1/R_total = 1/R₁ + 1/R₂ + 1/R₃",
                    twoResistors: "R_total = (R₁ × R₂)/(R₁ + R₂)",
                    currentRatio: "I₁/I₂ = R₂/R₁  (currents inversely proportional to resistances)"
                },
                kirchhoffsLaws: {
                    KCL: {
                        law: "ΣI = 0 at any junction (currents in = currents out)",
                        basis: "Conservation of charge — charge cannot accumulate at a junction",
                        application: "Label unknown currents with assumed directions; write KCL for each independent junction"
                    },
                    KVL: {
                        law: "ΣV = 0 around any closed loop (sum of EMFs − sum of drops = 0)",
                        basis: "Conservation of energy — energy gained = energy lost per unit charge",
                        application: "Choose loop direction; add EMFs when traversing in direction of conventional current; subtract for resistors"
                    },
                    systemOfEquations: "With n unknowns, need n independent equations from KCL and KVL"
                },
                potentialDivider: {
                    circuit: "Two resistors R₁ and R₂ in series across supply V_s",
                    outputVoltage: "V_out = V_s × R₂ / (R₁ + R₂)",
                    withVariableR: "Replace R₂ with thermistor or LDR to make voltage-sensing circuit",
                    applications: [
                        "Temperature sensor: thermistor in potential divider feeds into comparator",
                        "Light sensor: LDR in potential divider controls switching circuit",
                        "Volume control: variable resistor (potentiometer) as potential divider"
                    ]
                },
                problemSolvingStrategy: [
                    "Step 1: Draw and label the circuit clearly; mark all known values",
                    "Step 2: Identify series and parallel sections; simplify step by step",
                    "Step 3: For complex networks, assign current variables to each branch",
                    "Step 4: Apply KCL at each independent junction",
                    "Step 5: Apply KVL around enough independent loops",
                    "Step 6: Solve the system of simultaneous equations",
                    "Step 7: Back-substitute to find all remaining unknowns; verify with energy conservation"
                ],
                applications: [
                    "Household wiring (parallel circuits for independent appliance control)",
                    "Electronic sensor circuits using potential dividers",
                    "Battery banks (series for higher voltage; parallel for higher current)",
                    "Audio mixing desks (complex resistor networks)",
                    "Wheatstone bridge for precision resistance measurement"
                ]
            },

            electrical_power_energy: {
                title: "Electrical Power and Energy: Quantifying Energy Transfer",
                concepts: [
                    "Power is the rate of energy transfer: P = IV = I²R = V²/R",
                    "Electrical energy: E = Pt = IVt = I²Rt",
                    "The kilowatt-hour (kWh) is the commercial unit of electrical energy",
                    "Efficiency = useful output power / total input power × 100%",
                    "Joule heating (I²R) is the dominant energy loss mechanism in conductors"
                ],
                theory: "Electrical power and energy calculations are central to both physics and engineering. They underpin the design of safe electrical systems, the calculation of electricity bills, the efficiency of electrical devices, and the management of power distribution. Joule's law of heating has broad implications from fuse design to power line transmission.",
                keyDefinitions: {
                    "Electrical Power (P)": "Rate of electrical energy transfer: P = IV. Measured in watts (W). 1 W = 1 J s⁻¹",
                    "Electrical Energy (E)": "Energy transferred electrically: E = Pt = IVt. Measured in joules (J) or kilowatt-hours (kWh)",
                    "Kilowatt-Hour (kWh)": "Commercial unit of energy: 1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J",
                    "Joule Heating": "Thermal energy dissipated in a resistor: P = I²R (also called Ohmic heating or resistive heating)",
                    "Efficiency (η)": "η = (useful output power / total input power) × 100%. Real devices always have η < 100%",
                    "Power Rating": "Maximum power a device is designed to handle continuously"
                },
                powerEquations: {
                    fromIandV: "P = IV",
                    fromIandR: "P = I²R  (Joule heating; use when R and I are known)",
                    fromVandR: "P = V²/R  (use when R and V are known)",
                    energyFromPower: "E = Pt",
                    energyFull: "E = IVt = I²Rt = V²t/R",
                    note: "All three power equations are equivalent via V = IR; choose based on known quantities"
                },
                energyInCommercialUnits: {
                    conversion: "1 kWh = 3.6 × 10⁶ J = 3.6 MJ",
                    costCalculation: "Cost = Power (kW) × Time (hours) × Unit cost (pence/kWh)",
                    example: "A 2 kW heater running 3 hours at 20p/kWh costs: 2 × 3 × 20 = 120p = £1.20"
                },
                efficiency: {
                    formula: "η = P_useful / P_input = E_useful / E_input",
                    sankey: "Sankey diagrams show energy flow: thick arrow = input; branches show useful and wasted output",
                    improvements: [
                        "Reduce I²R losses by using lower resistance conductors",
                        "Transmit at high voltage (low I) to reduce cable losses",
                        "Use high-efficiency motors and generators",
                        "Insulation to reduce thermal losses"
                    ]
                },
                fuseAndWiring: {
                    fuseRating: "Fuse rated just above normal operating current of device",
                    example: "P = 1200 W at V = 230 V → I = P/V = 1200/230 = 5.2 A → use 5 A or 13 A fuse",
                    wireGauge: "Thicker wire (larger A) has less resistance: R = ρL/A → less power wasted as heat"
                },
                powerTransmission: {
                    problem: "Power = I²R losses in transmission cables increase with current",
                    solution: "Step up voltage before transmission (P = IV → higher V means lower I for same P)",
                    transformer: "Step-up transformer increases V; step-down reduces V at destination",
                    gridVoltage: "National Grid uses 400 kV transmission to minimise I²R losses"
                },
                applications: [
                    "Calculating electricity bills and energy consumption of appliances",
                    "Selecting correct fuse ratings for electrical safety",
                    "Designing power grids with minimum transmission loss",
                    "Specifying motor and generator ratings for industrial use",
                    "LED lighting efficiency comparison with incandescent bulbs"
                ]
            },

            capacitance: {
                title: "Capacitance: Storing Electric Charge and Energy",
                concepts: [
                    "A capacitor stores charge on parallel plates separated by a dielectric",
                    "Capacitance C = Q/V; unit is farad (F)",
                    "Energy stored in capacitor: E = ½CV² = ½QV = Q²/2C",
                    "Capacitors in series: 1/C_total = 1/C₁ + 1/C₂; in parallel: C_total = C₁ + C₂",
                    "RC circuits: charge and discharge follow exponential curves with time constant τ = RC"
                ],
                theory: "Capacitors are fundamental components in virtually all electronic circuits. They store energy in electric fields, smooth fluctuating voltages, filter signals, and control timing circuits. The exponential charge/discharge behaviour is a mathematically rich topic connecting to differential equations and appears in many areas of physics and engineering.",
                keyDefinitions: {
                    "Capacitor": "Electrical component that stores charge and energy in an electric field; consists of two conducting plates separated by a dielectric",
                    "Capacitance (C)": "Ratio of stored charge to potential difference: C = Q/V. Measured in farads (F). 1 F = 1 C V⁻¹",
                    "Farad (F)": "Unit of capacitance. 1 F is very large; practical values are μF, nF, or pF",
                    "Dielectric": "Insulating material between capacitor plates that increases capacitance",
                    "Time Constant (τ)": "τ = RC; time for capacitor to charge to ~63% or discharge to ~37% of initial value",
                    "Relative Permittivity (εᵣ)": "Factor by which a dielectric increases capacitance relative to vacuum"
                },
                fundamentals: {
                    capacitanceDefinition: "C = Q/V",
                    parallelPlateCapacitor: "C = ε₀εᵣA/d",
                    variables: {
                        epsilon0: "permittivity of free space = 8.85 × 10⁻¹² F m⁻¹",
                        epsilonR: "relative permittivity of dielectric (dimensionless)",
                        A: "area of one plate (m²)",
                        d: "separation between plates (m)"
                    },
                    effectOfDielectric: "Inserting dielectric between plates increases C (reduces V for same Q)"
                },
                energyStored: {
                    threeEquivalentForms: [
                        "E = ½QV",
                        "E = ½CV²",
                        "E = Q²/(2C)"
                    ],
                    derivation: "Energy = area under Q-V graph = ½ × Q × V (triangle)",
                    note: "Energy comes from the work done moving charge against the growing electric field"
                },
                combinations: {
                    parallel: {
                        rule: "C_total = C₁ + C₂ + C₃ + ...",
                        voltage: "Same voltage across each capacitor",
                        charge: "Total charge = Q₁ + Q₂ + Q₃",
                        analogy: "Same as resistors in series (charge adds; V same)"
                    },
                    series: {
                        rule: "1/C_total = 1/C₁ + 1/C₂ + 1/C₃",
                        twoCapacitors: "C_total = (C₁ × C₂)/(C₁ + C₂)",
                        charge: "Same charge on each capacitor",
                        voltage: "V_total = V₁ + V₂ + V₃",
                        analogy: "Same as resistors in parallel (V adds; Q same)"
                    }
                },
                rcCircuits: {
                    charging: {
                        charge: "Q(t) = Q₀(1 − e^(−t/RC))",
                        voltage: "V(t) = V₀(1 − e^(−t/RC))",
                        current: "I(t) = I₀·e^(−t/RC)  where I₀ = V₀/R",
                        timeConstant: "τ = RC; after one τ, Q = 63% of final value"
                    },
                    discharging: {
                        charge: "Q(t) = Q₀·e^(−t/RC)",
                        voltage: "V(t) = V₀·e^(−t/RC)",
                        current: "I(t) = I₀·e^(−t/RC)  where I₀ = V₀/R",
                        timeConstant: "τ = RC; after one τ, Q = 37% of initial value",
                        halfLife: "t½ = RC·ln2 ≈ 0.693RC (time for Q to halve)"
                    },
                    graphAnalysis: {
                        linearisedDischarge: "ln(V) vs t gives straight line; gradient = −1/RC",
                        determiningRC: "gradient of ln(V) vs t graph = −1/τ = −1/RC"
                    },
                    timeConstantSignificance: [
                        "After 1τ: ~63% charged or ~37% remaining",
                        "After 2τ: ~86% charged or ~14% remaining",
                        "After 3τ: ~95% charged or ~5% remaining",
                        "After 5τ: effectively fully charged/discharged (>99%)"
                    ]
                },
                applications: [
                    "Smoothing circuits in power supplies (reducing AC ripple)",
                    "Flash photography (rapid energy discharge from large capacitor)",
                    "Timing circuits (RC time constant sets delay in 555 timer)",
                    "Touchscreens (capacitive sensing)",
                    "Defibrillators (stored energy discharged through patient's heart)",
                    "Radio tuning circuits (variable capacitor to select frequency)"
                ]
            }
        };
    }

    initializeElectricityExperiments() {
        this.electricityExperiments = {

            // ============================================================
            // EXPERIMENT 1: OHM'S LAW AND I-V CHARACTERISTICS
            // ============================================================

            ohms_law_iv_characteristics: {
                name: "Ohm's Law and I-V Characteristics — Investigating Resistance",
                relatedTopics: ['resistance_resistivity', 'potential_difference_emf'],
                category: 'resistance',
                historicalBackground: {
                    scientist: "Georg Simon Ohm",
                    year: "1827",
                    location: "Bavaria, Germany",
                    discovery: "Current through a conductor is directly proportional to the voltage across it (at constant temperature)",
                    publication: "Die galvanische Kette, mathematisch bearbeitet (The Galvanic Circuit Investigated Mathematically)",
                    reception: "Initially rejected by German scientific establishment; later recognised with the Royal Society's Copley Medal (1841)",
                    significance: "Foundation of circuit theory; unit of resistance (ohm, Ω) named in his honour",
                    quote: "The magnitude of the current is directly proportional to the sum of all the tensions, and inversely proportional to the sum of the reduced lengths of the circuit",
                    contribution: "Established quantitative relationship V = IR; enabled systematic circuit design"
                },
                labExperiment: {
                    title: "Investigating I-V Characteristics of Ohmic and Non-Ohmic Components",
                    hypothesis: "For an ohmic conductor (resistor), the I-V graph will be a straight line through the origin. For non-ohmic components (lamp, diode), the graph will be non-linear.",
                    purpose: "Determine the resistance of components by measuring V and I; compare I-V characteristics of ohmic and non-ohmic devices",
                    variables: {
                        independent: "Potential difference (V) across component",
                        dependent: "Current (I) through component",
                        controlled: ["Temperature (difficult — noted as a limitation)", "Same component throughout each experiment"]
                    },
                    materials: [
                        "DC power supply (variable, 0–12 V)",
                        "Ammeter (range 0–1 A, resolution 0.01 A)",
                        "Voltmeter (range 0–12 V, resolution 0.1 V)",
                        "Fixed resistor (e.g., 10 Ω, 47 Ω, 100 Ω)",
                        "Filament lamp (e.g., 6 V, 0.06 A)",
                        "Silicon diode (e.g., 1N4001)",
                        "NTC thermistor",
                        "Connecting wires and circuit board",
                        "Protective resistor (for diode circuit)",
                        "Rheostat or potential divider for fine voltage control"
                    ],
                    circuitDesigns: {
                        ammeterExternal: {
                            description: "Ammeter outside voltmeter; voltmeter measures component + ammeter voltage",
                            bestFor: "Low resistance components (R << ammeter resistance); ammeter reading more accurate",
                            error: "Voltmeter reads V_component + V_ammeter; overestimates V across component"
                        },
                        ammeterInternal: {
                            description: "Ammeter inside voltmeter; ammeter measures component + voltmeter current",
                            bestFor: "High resistance components (R >> voltmeter resistance); voltmeter reading more accurate",
                            error: "Ammeter reads I_component + I_voltmeter; overestimates I through component"
                        }
                    },
                    safetyPrecautions: [
                        "Never exceed the rated voltage or current of components",
                        "Use a series protective resistor with diodes to prevent excessive current",
                        "Switch off supply when changing connections",
                        "Avoid touching components that may become hot (filament lamp)"
                    ],
                    procedure: [
                        "Set up potential divider circuit to allow voltage variation from 0 V",
                        "Connect ammeter in series and voltmeter in parallel with component",
                        "Choose appropriate ammeter/voltmeter configuration for component resistance",
                        "Set supply to minimum; switch on; increase voltage in small steps",
                        "Record V and I at each step (at least 8 readings from 0 to maximum)",
                        "Reduce back to zero and reverse connections to obtain negative V readings",
                        "Repeat for each component: resistor, lamp, diode, thermistor",
                        "For thermistor: also investigate effect of temperature by placing in water bath"
                    ],
                    dataTable: [
                        ["Component", "V (V)", "I (mA)", "R = V/I (Ω)", "Notes"],
                        ["Fixed Resistor", "", "", "", ""],
                        ["Filament Lamp", "", "", "", "Resistance increases with brightness"],
                        ["Diode (forward)", "", "", "", ""],
                        ["Diode (reverse)", "", "", "", "Very small current"],
                        ["NTC Thermistor", "", "", "", ""]
                    ],
                    dataAnalysis: {
                        ohmic: "Plot I vs V for resistor; gradient = 1/R; should be linear through origin",
                        lamp: "Plot I vs V; curve indicates increasing resistance with temperature",
                        diode: "Plot I vs V for both forward and reverse; mark threshold voltage (~0.7 V)",
                        resistanceCalculation: "R = V/I at each point; for ohmic: constant; for lamp: increases"
                    },
                    expectedResults: {
                        resistor: "Straight line through origin; R = 1/gradient = constant",
                        lamp: "Curve, gradient decreasing; R increases from cold to hot (low to high current)",
                        diode: "Near-zero current until ~0.7 V; then rapid current increase; reverse: very small current",
                        thermistor: "Resistance decreases as temperature increases (NTC behaviour)"
                    },
                    errorAnalysis: {
                        systematic: [
                            "Ammeter/voltmeter placement (external or internal) introduces small systematic error",
                            "Self-heating of resistor changes its resistance slightly",
                            "Zero error on meters if not properly zeroed"
                        ],
                        random: [
                            "Reading parallax error on analogue meters",
                            "Fluctuations in supply voltage"
                        ],
                        improvements: [
                            "Use digital multimeters with high resolution",
                            "Allow components to cool between readings",
                            "Use data logger with computer interface for automatic recording",
                            "Use variable power supply with digital readout"
                        ]
                    },
                    conclusions: [
                        "Fixed resistor is ohmic: I ∝ V; resistance constant",
                        "Filament lamp is non-ohmic: resistance increases with temperature",
                        "Diode allows current in one direction only; threshold at ~0.7 V",
                        "NTC thermistor resistance decreases with increasing temperature",
                        "R = V/I can be calculated at each point for any component"
                    ],
                    realWorldApplications: [
                        "Diodes used in rectifiers, LEDs, and photodetectors",
                        "Thermistors used in thermostats, medical thermometers, and engine management",
                        "LDRs in automatic street lighting and camera exposure control",
                        "Ohm's law used in all resistor selection for electronics"
                    ],
                    extensions: [
                        "Investigate how temperature affects resistivity of a metal wire",
                        "Measure I-V characteristic of a solar cell under different light intensities",
                        "Investigate LED forward voltage for different colours (relates to energy gap)",
                        "Compare AC and DC characteristics of components"
                    ]
                }
            },

            // ============================================================
            // EXPERIMENT 2: RESISTIVITY OF A WIRE
            // ============================================================

            resistivity_of_wire: {
                name: "Measuring the Resistivity of a Metal Wire",
                relatedTopics: ['resistance_resistivity'],
                category: 'resistance',
                historicalBackground: {
                    scientist: "Georg Simon Ohm (resistivity concept formalised from his work)",
                    year: "1827–1830s",
                    discovery: "Resistance depends not just on material but on dimensions; resistivity is an intrinsic material property",
                    significance: "Allows comparison of conducting materials independent of sample size; fundamental to materials science and electrical engineering",
                    modernContext: "Resistivity measurements are used to characterise new materials, detect impurities in semiconductors, and quality-control metal conductors"
                },
                labExperiment: {
                    title: "Determining the Resistivity of Nichrome (or Constantan) Wire",
                    hypothesis: "From R = ρL/A, a graph of R vs L will be a straight line through the origin with gradient = ρ/A, allowing calculation of resistivity ρ",
                    purpose: "Measure how resistance of a wire varies with length and cross-sectional area; calculate resistivity of the wire material",
                    variables: {
                        independent: "Length of wire (L)",
                        dependent: "Resistance of wire (R)",
                        controlled: ["Same wire (same material, same gauge)", "Temperature (low current used to prevent self-heating)", "Measurement technique"]
                    },
                    materials: [
                        "Resistance wire on reel (e.g., nichrome or constantan, ~1 m length)",
                        "Metre rule",
                        "Crocodile clips (to make contact at variable positions)",
                        "Ohmmeter or multimeter set to resistance",
                        "OR: ammeter, voltmeter, and low-voltage DC supply",
                        "Micrometer screw gauge (to measure wire diameter)",
                        "Graph paper or computer for analysis"
                    ],
                    safetyPrecautions: [
                        "Use low current (< 1 A) to prevent self-heating of wire",
                        "Ensure good electrical contact to avoid high contact resistance errors",
                        "Handle micrometer carefully to avoid damaging wire"
                    ],
                    procedure: [
                        "Use micrometer to measure diameter of wire at 5 different positions; calculate mean d",
                        "Calculate cross-sectional area: A = π(d/2)² = πd²/4",
                        "Stretch wire along metre rule; secure at 0 cm end",
                        "Attach crocodile clip at 0 cm; move second clip to 10 cm",
                        "Measure resistance using ohmmeter (or calculate R = V/I from ammeter/voltmeter)",
                        "Move second clip to 20 cm; measure again",
                        "Continue in 10 cm steps to 100 cm",
                        "Record L and R for each position",
                        "Plot R vs L graph; find gradient; calculate ρ = gradient × A"
                    ],
                    dataTable: [
                        ["Length L (m)", "R₁ (Ω)", "R₂ (Ω)", "R₃ (Ω)", "Mean R (Ω)"],
                        ["0.10", "", "", "", ""],
                        ["0.20", "", "", "", ""],
                        ["0.30", "", "", "", ""],
                        ["0.40", "", "", "", ""],
                        ["0.50", "", "", "", ""],
                        ["0.60", "", "", "", ""],
                        ["0.70", "", "", "", ""],
                        ["0.80", "", "", "", ""],
                        ["0.90", "", "", "", ""],
                        ["1.00", "", "", "", ""]
                    ],
                    diameterTable: [
                        ["Position", "Diameter d₁ (mm)", "d₂ (mm)", "d₃ (mm)", "d₄ (mm)", "d₅ (mm)", "Mean d (mm)"],
                        ["Wire", "", "", "", "", "", ""]
                    ],
                    dataAnalysis: {
                        formula: "R = (ρ/A)·L  →  gradient of R vs L graph = ρ/A",
                        resistivity: "ρ = gradient × A = gradient × πd²/4",
                        units: "ρ in Ω m; gradient in Ω/m; A in m²",
                        expectedValues: "Nichrome: ρ ≈ 1.1 × 10⁻⁶ Ω m; Constantan: ρ ≈ 4.9 × 10⁻⁷ Ω m",
                        percentageError: "Calculate % difference between experimental and accepted ρ"
                    },
                    errorAnalysis: {
                        systematic: [
                            "Contact resistance at crocodile clips (consistent offset — intercept non-zero)",
                            "Wire not perfectly uniform along length",
                            "Self-heating changes resistance (use low current)"
                        ],
                        random: [
                            "Uncertainty in length measurement (crocodile clip position)",
                            "Uncertainty in micrometer reading",
                            "Fluctuations in supply voltage"
                        ],
                        improvements: [
                            "Use four-probe method to eliminate contact resistance",
                            "Measure diameter at multiple points to check uniformity",
                            "Use low current to minimise heating effects",
                            "Repeat each measurement three times and average"
                        ]
                    },
                    conclusions: [
                        "Resistance is directly proportional to length: R ∝ L",
                        "R vs L graph is a straight line through (or near) the origin",
                        "Gradient = ρ/A; resistivity calculated from gradient × A",
                        "Calculated ρ can be compared with accepted value to assess accuracy",
                        "Contact resistance may cause small positive intercept on R-axis"
                    ],
                    realWorldApplications: [
                        "Selecting wire gauge for electrical installations",
                        "Quality control of metal conductors in manufacturing",
                        "Measuring impurity levels in semiconductors",
                        "Designing heating elements (nichrome wire in toasters, hair dryers)",
                        "Characterising new materials for electronics"
                    ],
                    extensions: [
                        "Investigate how resistance varies with cross-sectional area (use different gauge wires)",
                        "Measure ρ at different temperatures to find temperature coefficient",
                        "Compare resistivities of copper, aluminium, nichrome, and constantan",
                        "Investigate resistance of semiconductor versus metal at different temperatures"
                    ]
                }
            },

            // ============================================================
            // EXPERIMENT 3: EMF AND INTERNAL RESISTANCE
            // ============================================================

            emf_internal_resistance: {
                name: "Measuring EMF and Internal Resistance of a Cell",
                relatedTopics: ['potential_difference_emf', 'dc_circuits'],
                category: 'potential_difference',
                historicalBackground: {
                    scientist: "Alessandro Volta",
                    year: "1800",
                    location: "Pavia, Italy",
                    discovery: "Invented the voltaic pile — the first chemical battery producing sustained electric current",
                    significance: "Demonstrated that chemical reactions could produce electricity; enabled first systematic study of electric circuits",
                    legacy: "Unit of potential difference (volt) named in his honour; voltaic pile inspired generations of research into electrochemistry",
                    modernContext: "Internal resistance is central to battery technology; lithium-ion batteries have very low r to deliver high currents for electric vehicles"
                },
                labExperiment: {
                    title: "Determining EMF and Internal Resistance from Terminal Voltage vs Current",
                    hypothesis: "From V = ε − Ir, a graph of terminal voltage V vs current I will be a straight line with gradient = −r and y-intercept = ε",
                    purpose: "Measure the EMF and internal resistance of a cell by varying external resistance and recording terminal voltage and current",
                    variables: {
                        independent: "Current drawn from cell (I), controlled by varying external resistance (R)",
                        dependent: "Terminal voltage across cell (V)",
                        controlled: ["Same cell throughout", "Temperature of cell", "State of charge"]
                    },
                    materials: [
                        "Cell or battery (e.g., 1.5 V AA cell or 9 V battery)",
                        "Resistance box (variable resistor, 0–100 Ω) OR set of fixed resistors",
                        "High-resistance voltmeter (across cell terminals)",
                        "Ammeter (in series with external circuit)",
                        "Switch (to avoid draining cell between readings)",
                        "Connecting wires",
                        "Optional: datalogger for automatic recording"
                    ],
                    safetyPrecautions: [
                        "Never short-circuit the cell (R → 0); this could damage cell and cause it to overheat",
                        "Keep switch open when not recording to preserve cell charge",
                        "Do not exceed rated current of ammeter"
                    ],
                    procedure: [
                        "Connect cell, switch, ammeter, and resistance box in series",
                        "Connect voltmeter directly across cell terminals",
                        "Set resistance box to maximum (e.g., 100 Ω); close switch briefly; record I and V",
                        "Open switch; reduce resistance; close switch briefly; record I and V",
                        "Repeat for 8–10 different resistance values",
                        "Include one reading with only voltmeter connected (I ≈ 0; V ≈ ε)",
                        "Plot V vs I graph; find gradient (= −r) and y-intercept (= ε)"
                    ],
                    dataTable: [
                        ["External R (Ω)", "Current I (A)", "Terminal V (V)", "V_lost = εcalc − V (V)", "r = V_lost/I (Ω)"],
                        ["∞ (open circuit)", "~0", "", "~0", ""],
                        ["100", "", "", "", ""],
                        ["68", "", "", "", ""],
                        ["47", "", "", "", ""],
                        ["33", "", "", "", ""],
                        ["22", "", "", "", ""],
                        ["15", "", "", "", ""],
                        ["10", "", "", "", ""],
                        ["6.8", "", "", "", ""],
                        ["4.7", "", "", "", ""]
                    ],
                    dataAnalysis: {
                        graph: "Plot terminal voltage V (y-axis) vs current I (x-axis)",
                        gradient: "gradient = −r (negative of internal resistance)",
                        yIntercept: "y-intercept = ε (EMF of cell)",
                        xIntercept: "x-intercept = ε/r (short-circuit current; do NOT actually short circuit)",
                        alternativeMethod: "For each row: r = (ε − V)/I; average these values"
                    },
                    expectedResults: {
                        freshCell: "ε ≈ 1.5 V; r ≈ 0.5–2 Ω for typical AA cell",
                        oldCell: "Same ε approximately; higher r; terminal voltage drops more under load",
                        graphShape: "Straight line with negative gradient; y-intercept gives ε"
                    },
                    errorAnalysis: {
                        systematic: [
                            "Cell voltage decreasing during experiment as charge is drawn",
                            "Voltmeter drawing small current (so true open circuit not achieved)",
                            "Resistance box contact resistance"
                        ],
                        random: [
                            "Fluctuations in current during brief measurement periods",
                            "Reading errors on analogue meters"
                        ],
                        improvements: [
                            "Take readings quickly to minimise cell depletion",
                            "Use high-impedance voltmeter to minimise current drawn",
                            "Repeat set in reverse order and average to account for cell depletion",
                            "Use datalogger for rapid simultaneous recording"
                        ]
                    },
                    conclusions: [
                        "Terminal voltage decreases linearly with increasing current: V = ε − Ir",
                        "EMF ε = y-intercept of V vs I graph",
                        "Internal resistance r = magnitude of gradient of V vs I graph",
                        "Lost volts = Ir increases with current, reducing useful terminal voltage",
                        "As cell depletes, internal resistance increases (terminal voltage drops more)"
                    ],
                    realWorldApplications: [
                        "Battery selection for high-current applications (low r needed)",
                        "Why car batteries fail to start engines in cold weather (r increases)",
                        "Designing battery management systems for electric vehicles",
                        "Understanding voltage sag in power supplies under load",
                        "Fuel cell and solar cell characterisation"
                    ],
                    extensions: [
                        "Measure r of new vs old/depleted cell and compare",
                        "Investigate how temperature affects EMF and internal resistance",
                        "Measure EMF and r of different cell types (alkaline, NiMH, lithium)",
                        "Determine condition for maximum power transfer (R_external = r)"
                    ]
                }
            },

            // ============================================================
            // EXPERIMENT 4: POTENTIAL DIVIDER AND SENSOR CIRCUITS
            // ============================================================

            potential_divider_sensors: {
                name: "Potential Divider Circuits and Sensor Applications",
                relatedTopics: ['dc_circuits', 'resistance_resistivity'],
                category: 'circuits',
                historicalBackground: {
                    scientist: "Charles Wheatstone (systematic development of bridge circuits)",
                    year: "1843",
                    location: "London, England",
                    discovery: "Wheatstone bridge circuit for precision resistance measurement; built on potential divider principles",
                    original_inventor: "Samuel Hunter Christie (1833) first described the bridge, but Wheatstone popularised it",
                    significance: "Potential divider and bridge circuits fundamental to instrumentation, sensor technology, and analogue electronics",
                    modernContext: "Potential divider sensors used in everything from thermostat controls and automatic lighting to joystick position sensing and audio volume controls"
                },
                labExperiment: {
                    title: "Investigating Potential Divider Circuits with LDR and Thermistor Sensors",
                    hypothesis: "The output voltage from a potential divider V_out = V_s × R₂/(R₁ + R₂) will change predictably as R₂ (LDR or thermistor) changes in response to light or temperature",
                    purpose: "Understand potential divider operation; design and test light-sensitive and temperature-sensitive voltage output circuits",
                    variables: {
                        independent: "Light intensity (for LDR circuit) or temperature (for thermistor circuit)",
                        dependent: "Output voltage V_out of potential divider",
                        controlled: ["Supply voltage V_s", "Fixed resistor R₁ value", "Same circuit connections"]
                    },
                    materials: [
                        "DC power supply (fixed, e.g., 5 V or 9 V)",
                        "LDR (light-dependent resistor, e.g., GL5516)",
                        "NTC thermistor (e.g., 10 kΩ at 25°C)",
                        "Fixed resistors (various values: 1 kΩ, 4.7 kΩ, 10 kΩ, 47 kΩ)",
                        "Voltmeter or multimeter",
                        "Ohmmeter (to measure LDR and thermistor resistance)",
                        "Light source with adjustable distance (or different intensities)",
                        "Water baths at different temperatures (or electronic thermometer)",
                        "Connecting wires and breadboard"
                    ],
                    safetyPrecautions: [
                        "Do not exceed rated voltage of components",
                        "Take care with hot water baths (risk of scalding)",
                        "Ensure waterproofed thermistor probe when immersing in water"
                    ],
                    procedure: [
                        "Part A — LDR Circuit:",
                        "Measure resistance of LDR in bright light and complete darkness using ohmmeter",
                        "Connect LDR (R₂) and fixed resistor R₁ = 10 kΩ in series across 5 V supply",
                        "Measure V_out across LDR at different light levels (cover LDR to vary)",
                        "Record distance from light source and corresponding V_out and R_LDR",
                        "Part B — Thermistor Circuit:",
                        "Connect thermistor (R₂) and fixed resistor R₁ in series across 5 V supply",
                        "Measure V_out across thermistor at temperatures: 10, 20, 30, 40, 50, 60°C",
                        "Record temperature, thermistor resistance, and V_out",
                        "Compare with calculated V_out = V_s × R₂/(R₁ + R₂)"
                    ],
                    dataTable: [
                        ["Light/Temp condition", "R_sensor (kΩ)", "V_out measured (V)", "V_out calculated (V)", "% difference"],
                        ["Very bright light", "", "", "", ""],
                        ["Bright light", "", "", "", ""],
                        ["Dim light", "", "", "", ""],
                        ["Dark", "", "", "", ""],
                        ["10°C", "", "", "", ""],
                        ["20°C", "", "", "", ""],
                        ["30°C", "", "", "", ""],
                        ["40°C", "", "", "", ""],
                        ["50°C", "", "", "", ""],
                        ["60°C", "", "", "", ""]
                    ],
                    dataAnalysis: {
                        predictedOutput: "V_out = V_s × R₂/(R₁ + R₂) for each measured R₂",
                        comparison: "Compare predicted vs measured V_out; calculate % error",
                        graphLDR: "Plot V_out vs 1/distance² (if using point source; intensity ∝ 1/d²)",
                        graphThermistor: "Plot V_out vs temperature; note non-linear relationship",
                        optimalR1: "Discuss choice of R₁ for maximum sensitivity at specific R₂ range"
                    },
                    expectedResults: {
                        LDR: "V_out increases as light decreases (R_LDR increases → larger share of voltage)",
                        thermistorNTC: "V_out decreases as temperature increases (R_thermistor decreases)",
                        agreement: "Measured V_out should agree with calculated within ~5%"
                    },
                    errorAnalysis: {
                        systematic: [
                            "Supply voltage not exactly as stated",
                            "Voltmeter draws current, loading the circuit (affects V_out if voltmeter resistance ≈ R₂)",
                            "Temperature of thermistor not uniform with water bath"
                        ],
                        random: [
                            "Light source intensity fluctuations",
                            "Variable contact resistance at connectors"
                        ],
                        improvements: [
                            "Use high-impedance digital voltmeter to minimise loading",
                            "Allow thermistor to equilibrate fully in water bath before reading",
                            "Calibrate supply voltage with precision meter"
                        ]
                    },
                    conclusions: [
                        "Output voltage of potential divider varies with sensor resistance as V_out = V_s × R₂/(R₁ + R₂)",
                        "LDR gives increasing V_out as light decreases (useful for dark-activated switches)",
                        "NTC thermistor gives decreasing V_out as temperature increases (useful for over-temperature alarms)",
                        "Choice of fixed resistor R₁ affects sensitivity of circuit to changes in sensor resistance",
                        "Practical circuit agrees with theory within experimental error"
                    ],
                    realWorldApplications: [
                        "Automatic street lighting (LDR senses darkness; switches lights on)",
                        "Thermostat circuits in home heating (thermistor senses temperature)",
                        "Fire alarm sensors (thermistor detects rapid temperature rise)",
                        "Camera exposure control (LDR measures ambient light level)",
                        "Audio volume controls (potentiometer as variable potential divider)"
                    ],
                    extensions: [
                        "Design a circuit that outputs 2.5 V at a target temperature",
                        "Add an op-amp comparator to create a switching circuit",
                        "Investigate Wheatstone bridge and how to balance it",
                        "Compare response of different R₁ values on sensitivity and output range"
                    ]
                }
            },

            // ============================================================
            // EXPERIMENT 5: CAPACITOR CHARGE AND DISCHARGE
            // ============================================================

            capacitor_charge_discharge: {
                name: "Capacitor Charge and Discharge — RC Circuits and Time Constants",
                relatedTopics: ['capacitance', 'dc_circuits'],
                category: 'capacitance',
                historicalBackground: {
                    scientist: "Pieter van Musschenbroek and Ewald Georg von Kleist",
                    year: "1745–1746",
                    location: "Leiden, Netherlands",
                    discovery: "Invention of the Leyden jar — the first practical capacitor, capable of storing electric charge",
                    significance: "Enabled early experiments in electricity (Franklin's lightning experiments used Leyden jars); first device for storing electrical energy",
                    mathematicalFramework: "James Clerk Maxwell (1860s) and Lord Kelvin developed the mathematical theory of capacitance and RC circuits",
                    modernContext: "RC time constants used in timing circuits, signal filtering, power supply smoothing, and memory systems; capacitors in every electronic device"
                },
                labExperiment: {
                    title: "Investigating Capacitor Discharge: Exponential Decay and RC Time Constant",
                    hypothesis: "The voltage across a discharging capacitor will decrease exponentially: V(t) = V₀·e^(−t/RC). A graph of ln(V) vs t will be linear with gradient −1/RC, allowing calculation of capacitance C or resistance R",
                    purpose: "Investigate the exponential discharge of a capacitor through a resistor; determine the RC time constant experimentally",
                    variables: {
                        independent: "Time (t) after start of discharge",
                        dependent: "Voltage across capacitor (V)",
                        controlled: ["Same capacitor and resistor in each trial", "Initial voltage V₀", "Room temperature"]
                    },
                    materials: [
                        "Electrolytic capacitor (e.g., 1000 μF — note polarity!)",
                        "Resistors (e.g., 10 kΩ, 22 kΩ, 47 kΩ for different time constants)",
                        "DC power supply (e.g., 6 V or 9 V)",
                        "High-resistance voltmeter or multimeter",
                        "Switch (SPDT: single-pole double-throw) to switch between charging and discharging",
                        "Stopwatch or timer",
                        "OR: datalogger with voltage probe for automatic recording",
                        "Graph paper or computer for analysis"
                    ],
                    safetyPrecautions: [
                        "Electrolytic capacitors are polarised: always connect + terminal to higher voltage",
                        "Never charge capacitor with reversed polarity — it will be damaged",
                        "Fully discharge capacitor before handling (short terminals through resistor)",
                        "High-value capacitors can store significant charge; do not short with fingers"
                    ],
                    procedure: [
                        "Charge capacitor fully by connecting to power supply for at least 5τ (start with rough estimate)",
                        "At t = 0, switch to discharge circuit (capacitor in series with resistor)",
                        "Immediately start stopwatch and record V₀",
                        "Record voltage at regular time intervals (e.g., every 10 s or every τ/5)",
                        "Continue until V < 5% of V₀ (effectively fully discharged, about 3–5τ)",
                        "Repeat with different resistor values to observe effect on time constant",
                        "If using datalogger: set to record V every 0.1 s automatically",
                        "Plot V vs t (exponential curve) and ln(V) vs t (straight line) for each trial"
                    ],
                    dataTable: [
                        ["Time t (s)", "V (V)", "ln(V)", "Calculated V = V₀e^(-t/RC) (V)"],
                        ["0", "", "", ""],
                        ["10", "", "", ""],
                        ["20", "", "", ""],
                        ["30", "", "", ""],
                        ["40", "", "", ""],
                        ["50", "", "", ""],
                        ["60", "", "", ""],
                        ["80", "", "", ""],
                        ["100", "", "", ""],
                        ["120", "", "", ""]
                    ],
                    dataAnalysis: {
                        directPlot: "V vs t: exponential decay; confirms qualitative shape",
                        linearisedPlot: "ln(V) vs t: straight line; gradient = −1/(RC) = −1/τ",
                        timeConstant: "τ = RC = −1/gradient of ln(V) vs t graph",
                        capacitance: "C = τ/R = −1/(R × gradient)  if R is known",
                        resistance: "R = τ/C = −1/(C × gradient)  if C is known",
                        halfLife: "t₁/₂ = τ ln2 = 0.693RC; can read from graph where V = V₀/2"
                    },
                    expectedResults: {
                        exponentialDecay: "V decreases rapidly at first, then more slowly — classic exponential shape",
                        linearisedGraph: "ln(V) vs t is a straight line; gradient = −1/τ",
                        timeConstant: "For 1000 μF and 10 kΩ: τ = RC = 10 × 10³ × 1000 × 10⁻⁶ = 10 s",
                        afterOneTC: "After time τ, V ≈ 37% of V₀",
                        afterFiveTC: "After 5τ, V ≈ 0.7% of V₀ (effectively zero)"
                    },
                    errorAnalysis: {
                        systematic: [
                            "Voltmeter draws current from capacitor during measurement (causes faster discharge than theoretical)",
                            "Capacitor tolerance (±20% typical for electrolytic) affects τ",
                            "Resistance of connecting wires adds to R"
                        ],
                        random: [
                            "Reaction time in starting stopwatch",
                            "Reading voltage on analogue meter as it changes",
                            "Initial voltage may not be exactly V₀ if switched at non-zero time"
                        ],
                        improvements: [
                            "Use high-impedance (>10 MΩ) voltmeter to minimise current drain",
                            "Use datalogger for automatic, high-frequency recording",
                            "Use precision resistors and capacitors with known tolerances",
                            "Repeat and average for multiple trials"
                        ]
                    },
                    conclusions: [
                        "Capacitor discharge follows exponential decay: V(t) = V₀·e^(−t/RC)",
                        "ln(V) vs t is linear with gradient = −1/RC, confirming exponential form",
                        "Time constant τ = RC; calculated from gradient agrees with product R × C",
                        "Larger R or C gives longer time constant (slower discharge)",
                        "Voltage halves every t₁/₂ = 0.693RC seconds"
                    ],
                    realWorldApplications: [
                        "RC timing circuits in 555 timer chips (alarm clocks, pulse generators)",
                        "Flash photography: large capacitor discharges rapidly to power flash",
                        "Defibrillators: capacitor stores and rapidly releases energy to restart heart",
                        "Power supply smoothing: capacitor charges/discharges to smooth AC ripple",
                        "Signal filtering: RC circuits block or pass certain signal frequencies"
                    ],
                    extensions: [
                        "Investigate charging curve: V(t) = V₀(1 − e^(−t/RC))",
                        "Compare time constants for different C values with same R",
                        "Investigate energy stored and released: E = ½CV²",
                        "Design an RC circuit with a specific time constant for a timer application",
                        "Investigate capacitors in series and parallel and compare time constants"
                    ]
                }
            }
        };

        this.linkExperimentsToTopics();
    }

    linkExperimentsToTopics() {
        Object.entries(this.electricityExperiments).forEach(([expId, experiment]) => {
            experiment.relatedTopics.forEach(topicId => {
                if (this.electricityTopics[topicId]) {
                    if (!this.electricityTopics[topicId].relatedExperiments) {
                        this.electricityTopics[topicId].relatedExperiments = [];
                    }
                    this.electricityTopics[topicId].relatedExperiments.push({
                        id: expId,
                        name: experiment.name,
                        category: experiment.category
                    });
                }
            });
        });
    }

    initializeMisconceptionDatabase() {
        this.commonMisconceptions = {
            charge_and_current: {
                'Charge and Current': [
                    'Confusing current (rate of charge flow, I = Q/t) with charge itself (Q)',
                    'Believing current flows from negative to positive (conventional current is defined as positive to negative)',
                    'Thinking electrons move at the speed of light in a wire (drift velocity is typically ~mm/s)',
                    'Believing current is "used up" as it flows through a circuit',
                    'Confusing the direction of electron flow with conventional current direction'
                ],
                'Drift Velocity': [
                    'Thinking a higher voltage means faster electrons (drift speed increases, but signals propagate at near light speed via fields)',
                    'Believing all electrons in a conductor are free (only valence electrons contribute to conduction)',
                    'Confusing charge carrier density n with current I (large n does not mean large I on its own)'
                ],
                'Circuit Models': [
                    'Thinking current entering a component is different from current leaving it (in series, current is the same throughout)',
                    'Believing the battery "pushes" electrons through — it actually maintains a potential difference'
                ]
            },

            potential_difference_emf: {
                'Potential Difference': [
                    'Confusing potential difference (energy per charge) with current (charge per second)',
                    'Thinking voltage is "used up" like current — voltage is a property of position in a circuit, not something flowing',
                    'Believing potential difference is the same as potential (it is a difference between two points)',
                    'Confusing EMF (energy per charge from source) with terminal voltage (energy per charge delivered externally)'
                ],
                'EMF and Internal Resistance': [
                    'Thinking EMF is a force (it is energy per unit charge, measured in volts)',
                    'Believing terminal voltage always equals EMF (only true when I = 0)',
                    'Thinking internal resistance is outside the cell (it is inside)',
                    'Confusing "lost volts" (= Ir) with energy dissipated (= I²r)'
                ]
            },

            resistance_resistivity: {
                "Ohm's Law": [
                    "Thinking Ohm's Law applies to all components (it only applies to ohmic conductors at constant temperature)",
                    "Believing R = V/I is Ohm's Law (it is the definition of resistance; Ohm's Law additionally states R is constant)",
                    "Thinking resistance causes current to slow down like friction slows objects (resistance opposes current but is not analogous to mechanical friction)",
                    "Confusing resistance (property of a specific component, Ω) with resistivity (property of a material, Ω m)"
                ],
                'Resistivity': [
                    'Thinking a longer wire has higher resistivity (resistivity is a material property; resistance increases with length)',
                    'Believing thicker wire has higher resistance (cross-sectional area increases → resistance decreases)',
                    'Confusing the effect of temperature on metals versus semiconductors'
                ],
                'I-V Characteristics': [
                    'Reading the gradient of an I-V graph as resistance (gradient = 1/R for ohmic; R = V/I at each point)',
                    'Thinking a curve on an I-V graph means the device is broken (non-ohmic is normal for lamps, diodes, etc.)',
                    'Believing a diode conducts in both directions (it is a one-way valve for conventional current)'
                ]
            },

            dc_circuits: {
                'Series and Parallel': [
                    'Thinking adding a resistor in series always reduces current everywhere (it does reduce total current but the same new current flows throughout)',
                    'Believing adding a bulb in parallel makes all bulbs dimmer (each bulb has same voltage; each draws same current; total current increases)',
                    'Confusing total resistance formula: series (add) vs parallel (reciprocal add)',
                    'Thinking current is shared equally in parallel (currents share inversely with resistance)'
                ],
                "Kirchhoff's Laws": [
                    'Forgetting to account for direction when applying KVL (EMF gains vs resistance drops)',
                    'Applying KCL to a point along a wire instead of at a junction',
                    'Thinking KVL applies only to simple loops (it applies to any closed loop)'
                ],
                'Potential Divider': [
                    'Thinking the output voltage is always half the supply (only true when R₁ = R₂)',
                    'Forgetting that connecting a load resistor across V_out changes the output voltage',
                    'Believing voltage divides equally regardless of resistance values'
                ]
            },

            electrical_power_energy: {
                'Power': [
                    'Confusing power (rate of energy transfer, W) with energy (total transferred, J)',
                    'Thinking P = IV always, regardless of whether V is across the component or the whole circuit',
                    'Believing higher resistance always means higher power (P = V²/R — at fixed V, higher R gives LOWER P; but P = I²R — at fixed I, higher R gives HIGHER P)',
                    'Confusing P = I²R with P = V²/R — which is appropriate depends on what is fixed'
                ],
                'Energy': [
                    'Believing electrical energy is "destroyed" in a resistor (it is converted to thermal energy)',
                    'Confusing kWh with kW (kWh is energy; kW is power)',
                    'Thinking efficiency > 100% is achievable (energy conservation prevents this)'
                ],
                'Transmission': [
                    'Thinking higher voltage in transmission lines is more dangerous only (it is also more efficient: lower I²R losses for same power)',
                    'Confusing step-up and step-down transformer functions'
                ]
            },

            capacitance: {
                'Capacitance': [
                    'Confusing capacitance C (ability to store charge per volt) with charge Q (amount stored)',
                    'Thinking a larger capacitor always stores more charge (Q = CV; charge depends on both C and V)',
                    'Believing capacitors work in DC circuits indefinitely (after charging, no current flows in ideal DC circuit)',
                    'Confusing capacitors in series (reduce total C) with resistors in series (increase total R)'
                ],
                'RC Circuits': [
                    'Thinking a capacitor charges/discharges instantaneously (it takes time governed by τ = RC)',
                    'Believing the time constant is the time to fully discharge (it is time to reach 37% of initial; full discharge takes ~5τ)',
                    'Confusing charging curve (approaches V₀) with discharging curve (decays from V₀)',
                    'Thinking larger R gives faster charging (larger R gives slower charging: longer τ = RC)'
                ],
                'Energy': [
                    'Believing E = QV for a capacitor (it is E = ½QV = ½CV² because V builds up from 0 to V as charge accumulates)',
                    'Thinking all energy from battery goes into capacitor (only 50% is stored; 50% is dissipated in resistance even if R → 0)'
                ]
            }
        };

        this.clarificationStrategies = {
            visual_comparison: {
                method: 'Use circuit diagrams and I-V characteristic graphs to show differences',
                effectiveness: 'Very high for Ohm\'s law, series/parallel, and capacitor behaviour'
            },
            analogy: {
                method: 'Water flow analogies (current = flow rate; voltage = pressure; resistance = pipe narrowness)',
                effectiveness: 'High for current, voltage, and resistance concepts'
            },
            physical_models: {
                method: 'Use actual circuits, multimeters, and oscilloscopes to demonstrate directly',
                effectiveness: 'Very high for I-V characteristics and RC time constants'
            },
            contrast_table: {
                method: 'Side-by-side comparison (e.g., series vs parallel, EMF vs terminal voltage)',
                effectiveness: 'High for related but distinct concepts'
            },
            equations_analysis: {
                method: 'Examine units and dimensions to resolve confusion',
                effectiveness: 'High for power (W vs J), capacitance (F vs C), energy in capacitor'
            },
            experimental_demonstration: {
                method: 'Link to historical and lab experiments (Ohm, Volta, Leyden jar)',
                effectiveness: 'Very high for concrete understanding of laws'
            }
        };
    }

    initializeMetacognitivePrompts() {
        this.metacognitivePrompts = {
            beforeLearning: [
                "What do you already know about {topic}?",
                "What questions do you have about {topic}?",
                "How does {topic} relate to what you've learned before in electricity?",
                "Can you think of any everyday devices that might use {topic}?"
            ],
            duringLearning: [
                "Does this circuit make sense? Can you trace the current path?",
                "How does this connect to {related_concept}?",
                "What would happen to the current/voltage if we changed {variable}?",
                "Can you explain why this equation has those particular variables?",
                "Can you sketch the circuit diagram or I-V graph for this situation?"
            ],
            afterLearning: [
                "What were the main ideas about {topic}?",
                "What surprised you while learning about {topic}?",
                "What are you still unsure about?",
                "How would you explain {topic} to someone using a water flow analogy?",
                "Which equations are essential, and when do you choose each one?"
            ],
            problemSolving: [
                "What is the circuit asking for? What quantities are unknown?",
                "Have you drawn and labelled the circuit diagram with all given values?",
                "Is this a series circuit, parallel circuit, or a mixture?",
                "Which law applies here: Ohm's law, Kirchhoff's KCL, KVL, or energy conservation?",
                "Is your answer reasonable in terms of units and order of magnitude?"
            ]
        };
    }

    initializeContextualScenarios() {
        this.contextualScenarios = {
            charge_and_current: [
                {
                    scenario: "Smartphone Battery Charging",
                    context: "A phone charger supplies current to charge the lithium-ion battery",
                    application: "Q = It; a 2000 mAh battery at 1 A takes 2 hours: Q = 2 × 3600 = 7200 C total",
                    question: "A 3000 mAh battery is charged at 1.5 A. How long does it take and how much charge is transferred?"
                },
                {
                    scenario: "Lightning Strike",
                    context: "A lightning bolt transfers charge very rapidly between cloud and ground",
                    application: "A typical lightning bolt transfers ~5 C of charge in ~0.2 ms: I = Q/t = 5/(0.0002) = 25,000 A",
                    question: "Why can a lightning bolt carrying relatively little charge (5 C) be so destructive?"
                }
            ],

            potential_difference_emf: [
                {
                    scenario: "Car Battery in Cold Weather",
                    context: "A car fails to start on a cold winter morning",
                    application: "Cold increases internal resistance r; V_terminal = ε − Ir drops below threshold to crank starter motor",
                    question: "A car battery has ε = 12 V and r = 0.1 Ω at 20°C but r = 0.5 Ω at −10°C. If starter motor needs V ≥ 10 V at I = 200 A, does it start in the cold?"
                },
                {
                    scenario: "USB Power Delivery",
                    context: "USB chargers supply 5 V at up to 3 A (USB-C Power Delivery at higher voltages)",
                    application: "Power = IV; higher voltage delivery reduces cable current and I²R losses for same power",
                    question: "Why has USB Power Delivery moved to higher voltages (20 V) for high-power charging?"
                }
            ],

            resistance_resistivity: [
                {
                    scenario: "Overhead Power Lines",
                    context: "Electricity is transmitted across the country through overhead cables",
                    application: "Cables have resistance R = ρL/A; I²R losses heat the cables; thick cables (large A) reduce resistance",
                    question: "A copper cable 100 km long, 2 cm² cross-section. What is its resistance? (ρ_Cu = 1.7 × 10⁻⁸ Ω m)"
                },
                {
                    scenario: "Digital Thermometer",
                    context: "A thermometer uses an NTC thermistor to measure temperature",
                    application: "Thermistor resistance decreases as temperature rises; circuit converts resistance to temperature reading",
                    question: "Why must the thermistor in a medical thermometer have a very predictable and repeatable resistance-temperature relationship?"
                }
            ],

            dc_circuits: [
                {
                    scenario: "Christmas Tree Lights",
                    context: "Old-style fairy lights were in series; modern LED lights are in parallel",
                    application: "Series: one blown bulb breaks the circuit (all off); Parallel: one blown bulb leaves others unaffected",
                    question: "Explain using circuit theory why all lights go out when one fails in a series string, but not in a parallel string"
                },
                {
                    scenario: "Automatic Street Lighting",
                    context: "Street lights switch on automatically at dusk and off at dawn",
                    application: "LDR in potential divider; as light decreases, R_LDR increases, V_out rises, triggering switching circuit",
                    question: "Design a potential divider circuit with a 10 kΩ fixed resistor and an LDR that outputs 2.5 V from a 5 V supply when R_LDR = 10 kΩ"
                }
            ],

            electrical_power_energy: [
                {
                    scenario: "National Grid Transmission",
                    context: "Power is transmitted across the UK at 400 kV to minimise losses",
                    application: "P = I²R; at higher V, lower I for same P → much lower I²R losses in cables",
                    question: "A power station generates 500 MW at 25 kV. Calculate I²R losses in 100 km of cable (R = 2 Ω) at this voltage, then at 400 kV after stepping up"
                },
                {
                    scenario: "Electric Vehicle Charging",
                    context: "EV charging varies from 3 kW home charging to 350 kW ultra-rapid DC charging",
                    application: "E = Pt; efficiency η = useful/total; battery gets E_stored = η × P × t",
                    question: "A 75 kWh EV battery charges at 11 kW with 95% efficiency. How long to charge from 20% to 80%?"
                }
            ],

            capacitance: [
                {
                    scenario: "Camera Flash",
                    context: "A camera flash stores energy in a large capacitor, then releases it very rapidly",
                    application: "E = ½CV²; slow charge over seconds; fast discharge in microseconds gives high power pulse",
                    question: "A flash uses a 2000 μF capacitor charged to 300 V. Calculate stored energy and compare with a 1.5 V AA battery (E ≈ 4000 J)"
                },
                {
                    scenario: "Heart Defibrillator",
                    context: "A defibrillator delivers a controlled electric shock to restart a fibrillating heart",
                    application: "Capacitor charges slowly from mains supply; discharges rapidly through patient (R ≈ 50 Ω chest impedance)",
                    question: "A defibrillator uses a 32 μF capacitor charged to 5000 V. Calculate energy stored and time constant through 50 Ω patient"
                }
            ]
        };
    }

    initializeAssessmentRubrics() {
        this.assessmentRubrics = {
            knowledgeLevel: {
                remember: {
                    description: "Recall equations, definitions, and units for electricity",
                    verbs: ["State", "Define", "Write", "Recall", "Name"],
                    example: "State Ohm's Law and write its equation"
                },
                understand: {
                    description: "Explain physical meaning of electrical laws and relationships",
                    verbs: ["Explain", "Describe", "Summarise", "Interpret", "Compare"],
                    example: "Explain why the terminal voltage of a cell is less than its EMF when current flows"
                },
                apply: {
                    description: "Use equations and circuit rules to solve problems",
                    verbs: ["Calculate", "Solve", "Determine", "Predict", "Apply"],
                    example: "Calculate the current through a 47 Ω resistor connected to a 6 V supply with internal resistance 1 Ω"
                },
                analyze: {
                    description: "Interpret I-V graphs, circuit diagrams, and experimental data",
                    verbs: ["Analyse", "Deduce", "Identify", "Sketch", "Derive"],
                    example: "Analyse an I-V graph to determine whether a component is ohmic and find its resistance"
                },
                evaluate: {
                    description: "Assess experimental methods, compare circuit designs, evaluate models",
                    verbs: ["Evaluate", "Critique", "Justify", "Assess", "Compare"],
                    example: "Evaluate the limitations of using an analogue voltmeter across a high-resistance component"
                },
                create: {
                    description: "Design circuits, experiments, and derive equations from first principles",
                    verbs: ["Design", "Derive", "Model", "Construct", "Plan"],
                    example: "Design a circuit using a potential divider and NTC thermistor to activate a fan above 40°C"
                }
            },
            understandingLevels: {
                novice: {
                    characteristics: ["Can recall V = IR but unsure when to apply", "Confuses current and voltage", "Struggles with series vs parallel rules"],
                    support: ["Worked examples tracing current around circuits", "Use water flow analogies", "Simple single-loop circuits first"]
                },
                developing: {
                    characteristics: ["Applies Ohm's Law in simple circuits", "Can combine resistors in series or parallel", "Reads I-V graphs with support"],
                    support: ["Multi-component circuits with mixed series/parallel", "I-V characteristic analysis tasks", "Kirchhoff's law application"]
                },
                proficient: {
                    characteristics: ["Solves multi-loop circuits using Kirchhoff's laws", "Interprets I-V graphs independently", "Designs sensor circuits"],
                    support: ["Complex bridge circuits", "Exponential capacitor problems", "EMF and internal resistance determination"]
                },
                expert: {
                    characteristics: ["Derives circuit equations from first principles", "Designs and evaluates experiments", "Connects to real engineering applications"],
                    support: ["Open-ended circuit design", "AC circuit introduction", "Mathematical derivation of RC time constant"]
                }
            }
        };

        this.assessmentQuestions = {
            charge_and_current: {
                remember: "State the equation relating charge, current, and time, giving the unit of each quantity",
                understand: "Explain why conventional current direction is opposite to electron flow direction",
                apply: "A charge of 240 C passes through a wire in 2 minutes. Calculate the current",
                analyze: "Using I = nAve, explain why a thick copper wire has lower resistance than a thin one of the same length and material",
                evaluate: "Evaluate why the drift velocity model predicts very slow electron movement yet lights come on almost instantly when a switch is flipped",
                create: "Plan an experiment to investigate how the current in a circuit depends on the number of cells connected in series"
            },
            potential_difference_emf: {
                remember: "Write the equation relating terminal voltage, EMF, current, and internal resistance",
                understand: "Explain what 'lost volts' means and why terminal voltage decreases as current increases",
                apply: "A cell has EMF 1.5 V and internal resistance 0.8 Ω. Calculate terminal voltage when delivering 0.5 A",
                analyze: "A V vs I graph for a battery gives y-intercept 9.0 V and gradient −1.5 V/A. State the EMF and internal resistance",
                evaluate: "Evaluate why rechargeable lithium-ion batteries (very low r) are preferred over alkaline cells for power tools",
                create: "Design an experiment to measure the EMF and internal resistance of a solar cell under different light intensities"
            },
            resistance_resistivity: {
                remember: "Write the equation relating resistance, resistivity, length, and cross-sectional area",
                understand: "Explain why the resistance of a metal wire increases with temperature but the resistance of a thermistor decreases",
                apply: "A nichrome wire is 2.0 m long, 0.5 mm diameter, ρ = 1.1 × 10⁻⁶ Ω m. Calculate its resistance",
                analyze: "Sketch and annotate the I-V characteristics of: (a) a fixed resistor, (b) a filament lamp, (c) a diode",
                evaluate: "Evaluate the claim: 'The gradient of a V-I graph always equals resistance'",
                create: "Design an experiment to determine the resistivity of nichrome wire, stating how you would minimise systematic errors"
            },
            dc_circuits: {
                remember: "State Kirchhoff's Current Law and Kirchhoff's Voltage Law",
                understand: "Explain why adding resistors in parallel reduces total resistance but adding them in series increases it",
                apply: "Three resistors of 6 Ω, 12 Ω, and 4 Ω are connected in parallel across a 12 V supply. Find the total resistance and total current",
                analyze: "A potential divider uses a 10 kΩ fixed resistor and a thermistor in series across 6 V. When the thermistor is 10 kΩ, what is V_out across the thermistor? What happens to V_out as temperature rises?",
                evaluate: "A student connects an ammeter in parallel with a resistor to measure current. Evaluate this mistake",
                create: "Design a resistor network that provides output voltages of 4 V and 2 V from a 12 V supply"
            },
            electrical_power_energy: {
                remember: "Write three equivalent equations for electrical power",
                understand: "Explain why electricity is transmitted at high voltage for long distances",
                apply: "A 60 W lamp is connected to a 230 V supply. Calculate the current drawn and the resistance of the filament",
                analyze: "A kettle rated 2.2 kW, 230 V is used for 5 minutes. Calculate energy in joules and kWh, and the cost at 28p/kWh",
                evaluate: "Compare the power dissipated in a 10 Ω and a 100 Ω resistor connected (a) in series, (b) in parallel to the same supply",
                create: "Design a circuit to safely test whether a fuse rated at 500 mA will blow when current exceeds this value"
            },
            capacitance: {
                remember: "Write the equation for energy stored in a capacitor in three equivalent forms",
                understand: "Explain why the voltage across a discharging capacitor decreases exponentially rather than linearly",
                apply: "A 470 μF capacitor is charged to 12 V. Calculate stored charge and energy. It then discharges through 5 kΩ. Calculate the time constant",
                analyze: "A ln(V) vs t graph for a discharging capacitor has gradient −0.025 s⁻¹. The resistor is 40 kΩ. Calculate C",
                evaluate: "Evaluate why electrolytic capacitors cannot be used in AC circuits without additional protection",
                create: "Design a timing circuit using an RC combination that activates a buzzer after approximately 10 seconds"
            }
        };
    }

    // ============================================================
    // TOPIC HANDLER: CHARGE AND CURRENT
    // ============================================================

    handleChargeAndCurrent(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Electric Charge and Current",
            category: 'electricity',
            summary: "Electric current is the rate of flow of electric charge. At the microscopic level, current arises from the drift of charge carriers (electrons in metals) under the influence of an electric field. The fundamental relationship is I = ΔQ/Δt, and the microscopic model gives I = nAve.",

            definitions: {
                electricCharge: {
                    symbol: "Q",
                    unit: "coulombs (C)",
                    type: "scalar",
                    definition: "A fundamental property of matter. Protons carry +e; electrons carry −e. Charge is quantised: all charges are integer multiples of e.",
                    quantisation: "Q = ne  where n is an integer and e = 1.60 × 10⁻¹⁹ C",
                    conservation: "Charge is always conserved — it cannot be created or destroyed, only transferred"
                },
                elementaryCharge: {
                    symbol: "e",
                    value: "e = 1.60 × 10⁻¹⁹ C",
                    definition: "The magnitude of charge on a single proton or electron",
                    note: "The electron has charge −e; the proton has charge +e"
                },
                electricCurrent: {
                    symbol: "I",
                    unit: "amperes (A)",
                    type: "scalar (though flow has direction)",
                    definition: "The rate of flow of electric charge past a point: I = ΔQ/Δt",
                    instantaneous: "I = dQ/dt",
                    SI: "1 A = 1 C s⁻¹ (one ampere = one coulomb per second)",
                    direction: "Conventional current flows from + to − (high to low potential); electron flow is opposite"
                },
                driftVelocity: {
                    symbol: "v (or v_d)",
                    unit: "m/s",
                    definition: "The mean velocity of charge carriers along the conductor due to the applied electric field",
                    typical: "~10⁻⁴ to 10⁻³ m/s (mm/s range) in typical metal conductors",
                    distinction: "The signal (electric field change) propagates at nearly the speed of light, but individual electrons drift very slowly"
                },
                chargeCarrierDensity: {
                    symbol: "n",
                    unit: "m⁻³ (per cubic metre)",
                    definition: "Number of free charge carriers per unit volume",
                    metalValue: "~10²⁸ m⁻³ for copper (very high → good conductor)",
                    semiconductorValue: "~10¹⁶ m⁻³ for silicon (much lower → poor conductor at room temp)",
                    insulatorValue: "~10⁻¹⁰ m⁻³ (essentially no free carriers)"
                }
            },

            fundamentalEquations: {
                chargeAndCurrent: {
                    equation: "Q = It  or  I = Q/t  or  I = ΔQ/Δt",
                    variables: { Q: "charge (C)", I: "current (A)", t: "time (s)" },
                    note: "Applies when current is constant; use ΔQ/Δt for changing current"
                },
                microscopicCurrentModel: {
                    equation: "I = nAve",
                    variables: {
                        n: "charge carrier density (m⁻³)",
                        A: "cross-sectional area of conductor (m²)",
                        v: "mean drift velocity of carriers (m/s)",
                        e: "charge per carrier (C) — for electrons, e = 1.60 × 10⁻¹⁹ C"
                    },
                    derivation: {
                        step1: "In time Δt, a carrier moving at drift velocity v travels distance: Δx = v·Δt",
                        step2: "Volume of conductor swept by moving carriers: ΔV = A·Δx = A·v·Δt",
                        step3: "Number of charge carriers in this volume: N = n·A·v·Δt",
                        step4: "Total charge that passes the cross-section: ΔQ = N·e = n·A·v·Δt·e",
                        step5: "Current: I = ΔQ/Δt = nAve  ✓"
                    }
                },
                chargeQuantisation: {
                    equation: "Q = ne",
                    variables: { n: "integer number of elementary charges", e: "elementary charge = 1.60 × 10⁻¹⁹ C" }
                }
            },

            conceptualUnderstanding: {
                whyElectronsMove: "When a battery is connected, it creates an electric field throughout the conductor (almost instantly, at near light speed). This field exerts a force on free electrons (F = eE), causing them to accelerate. Collisions with ions in the lattice rapidly bring them to a mean drift velocity.",
                whySignalFast: "The electric field propagates through the conductor at near the speed of light. This is why a light comes on almost instantly — the field reaches all parts of the circuit nearly simultaneously, even though electrons drift very slowly.",
                conventionalVsElectron: "Conventional current (historical definition, before electrons were discovered) is defined as flowing from + to −. Electron flow is from − to +. The physics works correctly with either convention as long as it is used consistently.",
                conductorTypes: {
                    metals: "Free electrons (n ~ 10²⁸ m⁻³); excellent conductors",
                    semiconductors: "Fewer free carriers (n ~ 10¹⁰–10¹⁶ m⁻³); conductivity increases with temperature",
                    insulators: "Virtually no free carriers; very high resistance",
                    electrolytes: "Positive and negative ions carry charge (e.g., in batteries, electroplating)",
                    plasma: "Ionised gas; both electrons and positive ions carry charge"
                }
            },

            graphicalAnalysis: {
                chargeVsTime: {
                    title: "Charge-Time Graph (Q vs t)",
                    gradient: "gradient = current I (A)",
                    constantCurrent: "Straight line; gradient = I",
                    varyingCurrent: "Curve; instantaneous current = gradient of tangent",
                    areaUnder: "No physical meaning for Q-t graph area"
                },
                currentVsTime: {
                    title: "Current-Time Graph (I vs t)",
                    areaUnder: "Area under I-t graph = total charge Q transferred",
                    constantCurrent: "Horizontal line",
                    decayingCurrent: "Exponential decay (e.g., capacitor discharge)"
                }
            },

            workedExamples: [
                {
                    title: "Charge from current and time",
                    problem: "A current of 3.5 A flows through a wire for 4 minutes. Calculate the total charge transferred.",
                    given: "I = 3.5 A, t = 4 × 60 = 240 s",
                    solution: {
                        step1: "Q = It = 3.5 × 240 = 840 C",
                        answer: "Q = 840 C",
                        check: "Units: A × s = C ✓"
                    }
                },
                {
                    title: "Number of electrons",
                    problem: "A charge of 840 C passes through a wire. How many electrons does this represent?",
                    given: "Q = 840 C, e = 1.60 × 10⁻¹⁹ C",
                    solution: {
                        step1: "n = Q/e = 840 / (1.60 × 10⁻¹⁹)",
                        step2: "n = 5.25 × 10²¹ electrons",
                        note: "An enormous number — but each electron carries only tiny charge"
                    }
                },
                {
                    title: "Drift velocity calculation",
                    problem: "A copper wire of diameter 1.5 mm carries a current of 2.0 A. Copper has n = 8.5 × 10²⁸ m⁻³. Calculate the drift velocity of electrons.",
                    given: "d = 1.5 × 10⁻³ m, I = 2.0 A, n = 8.5 × 10²⁸ m⁻³, e = 1.60 × 10⁻¹⁹ C",
                    solution: {
                        step1: "A = π(d/2)² = π(0.75 × 10⁻³)² = π × 5.625 × 10⁻⁷ = 1.77 × 10⁻⁶ m²",
                        step2: "From I = nAve: v = I/(nAe)",
                        step3: "v = 2.0 / (8.5 × 10²⁸ × 1.77 × 10⁻⁶ × 1.60 × 10⁻¹⁹)",
                        step4: "v = 2.0 / (2.41 × 10⁴) = 8.3 × 10⁻⁵ m/s ≈ 0.083 mm/s",
                        insight: "Electrons drift at less than 0.1 mm per second — very slow!"
                    }
                },
                {
                    title: "Comparing conductors",
                    problem: "If the same current flows through a copper wire and a thinner copper wire of half the diameter, what is the ratio of their drift velocities?",
                    given: "Same I, same n, same e; A₁ = π(d/2)², A₂ = π(d/4)²",
                    solution: {
                        step1: "From I = nAve: v = I/(nAe); since n, I, e same: v ∝ 1/A",
                        step2: "A₂/A₁ = (d/4)²/(d/2)² = (1/4)/(1/2)² = 1/4",
                        step3: "So v₂ = 4v₁ — the thinner wire has 4× the drift velocity for the same current",
                        note: "This is why thin wires get hotter — more collisions per unit length as electrons move faster"
                    }
                }
            ],

            commonErrors: [
                {
                    error: "Confusing current and charge",
                    consequence: "Using I where Q is needed (or vice versa)",
                    fix: "Remember: I = Q/t. Current is rate; charge is the quantity itself"
                },
                {
                    error: "Forgetting to convert minutes to seconds",
                    consequence: "Charge calculation off by factor of 60",
                    fix: "Always convert time to seconds before substituting into Q = It"
                },
                {
                    error: "Not calculating cross-sectional area from diameter correctly",
                    consequence: "Area wrong by factor of 4 (using d instead of d/2 in A = πr²)",
                    fix: "Always write A = π(d/2)² = πd²/4; never A = πd²"
                },
                {
                    error: "Thinking drift velocity equals speed of light (or is very fast)",
                    consequence: "Incorrect intuition about current flow",
                    fix: "Remember v is typically mm/s; it is the electric field that travels at near-c, not the electrons"
                }
            ],

            assessmentQuestions: {
                recall: [
                    "State the equation for electric current in terms of charge and time",
                    "What is the elementary charge e?",
                    "State the equation I = nAve and define each symbol"
                ],
                understanding: [
                    "Explain why conventional current is in the opposite direction to electron flow",
                    "Why does the signal (light turning on) appear instantaneous if electrons drift so slowly?",
                    "Explain why copper (n ~ 10²⁸) is a much better conductor than silicon (n ~ 10¹⁶)"
                ],
                application: [
                    "A current of 0.25 A flows for 8 minutes. Calculate the charge transferred and number of electrons",
                    "A copper wire of radius 0.8 mm carries 5 A. Calculate the drift velocity (n_Cu = 8.5 × 10²⁸ m⁻³)",
                    "If wire diameter is doubled, what happens to drift velocity for the same current? Show with I = nAve"
                ],
                analysis: [
                    "A current-time graph shows I increasing from 0 to 4 A over 10 s. Describe how you would find the total charge transferred",
                    "Two wires of the same material carry the same current but have different diameters. Compare their drift velocities",
                    "In an electrolyte, both Na⁺ and Cl⁻ ions carry charge. Explain how both contribute to conventional current in the same direction"
                ]
            },

            applications: [
                "Battery capacity ratings (mAh = charge stored; I × t = Q)",
                "Fuse design: melts when current (hence I²Rt heating) exceeds safe level",
                "Electroplating: Q = It controls mass of metal deposited",
                "Bioelectricity: nerve impulses as ion current flows",
                "Semiconductor device design using carrier density engineering"
            ]
        };

        if (/drift.*veloc|nAve|I\s*=\s*nAve/i.test(input)) {
            content.focus = 'driftVelocityModel';
            content.highlighted = content.fundamentalEquations.microscopicCurrentModel;
        } else if (/quantis|elementary.*charge|number.*electron/i.test(input)) {
            content.focus = 'chargeQuantisation';
            content.highlighted = content.fundamentalEquations.chargeQuantisation;
        } else if (/graph|Q.*t|I.*t/i.test(input)) {
            content.focus = 'graphicalAnalysis';
            content.highlighted = content.graphicalAnalysis;
        }

        return content;
    }

    // ============================================================
    // TOPIC HANDLER: POTENTIAL DIFFERENCE AND EMF
    // ============================================================

    handlePotentialDifferenceEMF(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Potential Difference and EMF",
            category: 'electricity',
            summary: "Potential difference (p.d.) is the energy transferred per unit charge between two points in a circuit. EMF (electromotive force) is the energy supplied per unit charge by a source. Internal resistance causes the terminal voltage to be less than the EMF: V = ε − Ir.",

            definitions: {
                potentialDifference: {
                    symbol: "V",
                    unit: "volts (V)",
                    type: "scalar",
                    definition: "The energy transferred per unit charge as charge moves between two points: V = W/Q",
                    SI: "1 V = 1 J C⁻¹ (one joule per coulomb)",
                    distinction: "P.d. is a difference — it is always measured between two points, never at a single point",
                    measurement: "Measured with a voltmeter connected in parallel"
                },
                emf: {
                    symbol: "ε (epsilon)",
                    unit: "volts (V)",
                    type: "scalar",
                    definition: "The energy supplied per unit charge by a source (cell, battery, generator): ε = W/Q",
                    clarification: "EMF is NOT a force despite its name — it is energy per unit charge, measured in volts",
                    openCircuit: "When no current flows, terminal voltage = EMF (V_T = ε when I = 0)",
                    source: "Arises from chemical energy in cells, mechanical energy in generators, light in solar cells"
                },
                internalResistance: {
                    symbol: "r",
                    unit: "ohms (Ω)",
                    definition: "Resistance within a cell/battery arising from the cell's internal structure and chemistry",
                    effect: "Causes voltage drop Ir inside the source when current flows",
                    consequence: "Terminal voltage < EMF whenever current flows: V_T = ε − Ir",
                    increases: "Internal resistance increases as a battery ages or temperature decreases"
                },
                terminalVoltage: {
                    symbol: "V_T  or  V",
                    definition: "The actual potential difference across the terminals of a source when current is flowing",
                    formula: "V_T = ε − Ir",
                    openCircuit: "When I = 0: V_T = ε (terminal voltage equals EMF)",
                    shortCircuit: "When R_ext = 0: I = ε/r; V_T = 0 (all voltage lost internally)"
                },
                lostVolts: {
                    symbol: "V_lost",
                    definition: "The potential difference dropped across the internal resistance: V_lost = Ir",
                    interpretation: "Energy per unit charge dissipated inside the source — not available to external circuit",
                    relationship: "ε = V_terminal + V_lost = V_terminal + Ir"
                }
            },

            fundamentalEquations: {
                basicPD: {
                    equation: "V = W/Q",
                    rearrangements: ["W = QV", "Q = W/V"],
                    variables: { V: "potential difference (V)", W: "energy/work (J)", Q: "charge (C)" }
                },
                emfAndInternalResistance: {
                    primaryEquation: "ε = I(R + r)  or equivalently  V_terminal = ε − Ir",
                    derived: [
                        "I = ε / (R + r)  [current in circuit]",
                        "V_terminal = IR  [voltage across external resistance]",
                        "V_lost = Ir  [voltage dropped internally]",
                        "ε = V_terminal + Ir  [EMF shared between external and internal]"
                    ]
                },
                powerRelations: {
                    totalPowerFromSource: "P_total = εI",
                    externalPower: "P_external = I²R = IV_terminal",
                    internalPowerLost: "P_internal = I²r = I × V_lost",
                    energyConservation: "εI = I²R + I²r  (input = external + internal)"
                }
            },

            graphicalMethod: {
                title: "Determining ε and r Graphically",
                axes: "x-axis: current I (A); y-axis: terminal voltage V (V)",
                equation: "V = ε − Ir  (compare with y = c + mx: y-intercept = ε, gradient = −r)",
                gradient: "gradient of V vs I graph = −r (negative; internal resistance)",
                yIntercept: "y-intercept (I = 0) = ε (EMF)",
                xIntercept: "x-intercept (V = 0) = ε/r (short-circuit current — do NOT achieve experimentally)",
                method: [
                    "Plot V (y) vs I (x) for several different external resistance values",
                    "Draw best-fit straight line",
                    "Read y-intercept = ε",
                    "Calculate gradient = −r → r = |gradient|",
                    "Alternatively: r = (ε − V)/I at any point on the line"
                ]
            },

            maximumPowerTransfer: {
                condition: "Maximum power is delivered to external resistance when R_external = r",
                proof: "P = I²R = [ε/(R+r)]²·R; differentiate with respect to R and set dP/dR = 0 → R = r",
                efficiency: "At maximum power transfer, efficiency = 50% (half power lost internally)",
                practicalImplication: "High-fidelity audio amplifiers are designed with output impedance matching speaker impedance"
            },

            workedExamples: [
                {
                    title: "Basic EMF and terminal voltage",
                    problem: "A cell has EMF 2.0 V and internal resistance 0.5 Ω. It delivers a current of 1.2 A. Find (a) terminal voltage, (b) power delivered externally, (c) power wasted internally.",
                    given: "ε = 2.0 V, r = 0.5 Ω, I = 1.2 A",
                    solution: {
                        terminalVoltage: "V = ε − Ir = 2.0 − (1.2)(0.5) = 2.0 − 0.6 = 1.4 V",
                        externalPower: "P_ext = IV = 1.2 × 1.4 = 1.68 W",
                        internalPower: "P_int = I²r = (1.2)² × 0.5 = 1.44 × 0.5 = 0.72 W",
                        check: "Total power = εI = 2.0 × 1.2 = 2.40 W = 1.68 + 0.72 = 2.40 W ✓"
                    }
                },
                {
                    title: "Finding ε and r from measurements",
                    problem: "A battery gives terminal voltage 8.4 V when current is 0.5 A, and 7.2 V when current is 2.0 A. Find EMF and internal resistance.",
                    given: "V₁ = 8.4 V, I₁ = 0.5 A; V₂ = 7.2 V, I₂ = 2.0 A",
                    solution: {
                        setup: "V = ε − Ir: two equations",
                        eq1: "8.4 = ε − 0.5r  ...(1)",
                        eq2: "7.2 = ε − 2.0r  ...(2)",
                        subtract: "(1) − (2): 1.2 = 1.5r → r = 0.8 Ω",
                        emf: "From (1): ε = 8.4 + 0.5 × 0.8 = 8.4 + 0.4 = 8.8 V",
                        check: "Check (2): 8.8 − 2.0 × 0.8 = 8.8 − 1.6 = 7.2 V ✓"
                    }
                },
                {
                    title: "Work done and energy supplied",
                    problem: "A 9 V battery (ε = 9 V) drives 0.3 A through an external circuit for 5 minutes. Calculate (a) total charge, (b) total energy supplied by battery, (c) energy transferred to external circuit if r = 2 Ω.",
                    given: "ε = 9 V, I = 0.3 A, t = 5 × 60 = 300 s, r = 2 Ω",
                    solution: {
                        charge: "Q = It = 0.3 × 300 = 90 C",
                        totalEnergy: "E_total = εQ = 9 × 90 = 810 J  (or εIt = 9 × 0.3 × 300 = 810 J)",
                        internalLoss: "E_internal = I²rt = (0.3)² × 2 × 300 = 54 J",
                        externalEnergy: "E_external = 810 − 54 = 756 J",
                        check: "V_terminal = ε − Ir = 9 − 0.3×2 = 8.4 V; E_ext = VIt = 8.4 × 0.3 × 300 = 756 J ✓"
                    }
                }
            ],

            commonErrors: [
                {
                    error: "Confusing EMF with terminal voltage",
                    consequence: "Using ε instead of V_T in power calculations for external circuit",
                    fix: "EMF is the energy supplied per unit charge by the source; terminal voltage is what the external circuit actually 'sees'"
                },
                {
                    error: "Treating internal resistance as being outside the cell",
                    consequence: "Including it in external resistance calculations",
                    fix: "r is inside the source; total circuit resistance = R + r; terminal voltage is measured outside"
                },
                {
                    error: "Forgetting that V_T = ε only when I = 0",
                    consequence: "Measuring V_T with voltmeter and assuming it equals EMF",
                    fix: "A high-resistance voltmeter draws negligible current, so V_T ≈ ε in practice, but strictly equal only at I = 0"
                },
                {
                    error: "Sign error in V = ε − Ir",
                    consequence: "Getting V > ε (impossible — violates energy conservation)",
                    fix: "Terminal voltage is always less than EMF when current flows: V_T < ε always"
                }
            ],

            assessmentQuestions: {
                recall: [
                    "Write the equation for terminal voltage in terms of EMF, current, and internal resistance",
                    "What is the unit of EMF and what does it physically represent?",
                    "What is the terminal voltage of a cell with EMF ε when no current flows?"
                ],
                understanding: [
                    "Explain why the terminal voltage of a cell decreases as the current drawn increases",
                    "Why does a battery's terminal voltage drop significantly when a car starter motor is engaged?",
                    "Explain what 'lost volts' means using the equation ε = V + Ir"
                ],
                application: [
                    "A cell has ε = 1.5 V and r = 0.3 Ω. Calculate terminal voltage when R = 4.7 Ω is connected",
                    "A V-I graph has y-intercept 6.0 V and gradient −0.5. Find ε and r",
                    "Calculate the current at which a cell (ε = 12 V, r = 0.1 Ω) delivers maximum power"
                ],
                analysis: [
                    "Sketch a V vs I graph for a cell. Mark and explain ε, the gradient, and the short-circuit current",
                    "Two cells each of ε = 1.5 V and r = 0.5 Ω are connected in series. What are the combined ε and r?",
                    "The same two cells are connected in parallel. Show that combined ε = 1.5 V and r = 0.25 Ω"
                ]
            },

            applications: [
                "Battery selection for high-drain vs low-drain devices",
                "Understanding battery fade in electric vehicles as r increases with age",
                "Designing low-loss power supplies with minimal internal resistance",
                "Matching source and load resistance for maximum power transfer in audio systems",
                "Understanding why solar panels need maximum power point tracking"
            ]
        };

        if (/internal.*resist|lost.*volt|terminal/i.test(input)) {
            content.focus = 'internalResistance';
            content.highlighted = content.definitions.internalResistance;
        } else if (/graph|V.*I|gradient.*intercept/i.test(input)) {
            content.focus = 'graphicalMethod';
            content.highlighted = content.graphicalMethod;
        } else if (/power|energy.*supplied|work.*done/i.test(input)) {
            content.focus = 'powerRelations';
            content.highlighted = content.fundamentalEquations.powerRelations;
        }

        return content;
    }

    // ============================================================
    // TOPIC HANDLER: RESISTANCE AND RESISTIVITY
    // ============================================================

    handleResistanceResistivity(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Resistance and Resistivity",
            category: 'electricity',
            summary: "Resistance (R = V/I) quantifies opposition to current flow in a specific component. Resistivity (ρ) is a fundamental material property: R = ρL/A. Ohm's Law states that for ohmic conductors R is constant; non-ohmic devices have I-V characteristics that curve.",

            definitions: {
                resistance: {
                    symbol: "R",
                    unit: "ohms (Ω)",
                    definition: "The ratio of potential difference across a component to the current through it: R = V/I",
                    SI: "1 Ω = 1 V A⁻¹",
                    notOhmsLaw: "R = V/I is the DEFINITION of resistance — it applies to any component. Ohm's Law additionally states that R is constant for ohmic conductors.",
                    temperature: "Resistance of metals increases with temperature; thermistors decrease"
                },
                ohmsLaw: {
                    statement: "The current through a conductor is directly proportional to the potential difference across it, provided physical conditions (especially temperature) remain constant",
                    mathematically: "V ∝ I, i.e., V/I = R = constant",
                    consequence: "I-V graph is a straight line through the origin for ohmic conductors",
                    limitations: "Does NOT apply to: lamps (temperature changes), diodes (non-symmetric), thermistors (temperature-sensitive)"
                },
                resistivity: {
                    symbol: "ρ (rho)",
                    unit: "ohm metres (Ω m)",
                    definition: "A material property quantifying how strongly a material opposes current flow, independent of sample dimensions",
                    formula: "ρ = RA/L  or equivalently  R = ρL/A",
                    typicalValues: {
                        silver: "1.6 × 10⁻⁸ Ω m (best metallic conductor)",
                        copper: "1.7 × 10⁻⁸ Ω m",
                        aluminium: "2.8 × 10⁻⁸ Ω m",
                        nichrome: "1.1 × 10⁻⁶ Ω m (used in heating elements)",
                        silicon: "~10³ Ω m (semiconductor)",
                        glass: "~10¹² Ω m (insulator)"
                    }
                },
                conductance: {
                    symbol: "G",
                    unit: "siemens (S)",
                    definition: "Reciprocal of resistance: G = 1/R = I/V",
                    note: "Convenient in parallel circuit analysis"
                },
                conductivity: {
                    symbol: "σ (sigma)",
                    unit: "S m⁻¹",
                    definition: "Reciprocal of resistivity: σ = 1/ρ",
                    note: "Higher σ = better conductor"
                }
            },

            fundamentalEquations: {
                resistanceDefinition: {
                    equation: "R = V/I",
                    rearrangements: ["V = IR", "I = V/R"],
                    note: "V = IR is the most commonly used form (Ohm's Law + resistance definition combined)"
                },
                resistivityFormula: {
                    equation: "R = ρL/A",
                    variables: { R: "resistance (Ω)", rho: "resistivity (Ω m)", L: "length (m)", A: "cross-sectional area (m²)" },
                    rearrangements: [
                        "ρ = RA/L  [to find resistivity from measured R]",
                        "L = RA/ρ  [to find required length of wire]",
                        "A = ρL/R  [to find required cross-sectional area]"
                    ],
                    areaFromDiameter: "A = πr² = π(d/2)² = πd²/4  where d = diameter"
                }
            },

            ivCharacteristics: {
                ohmicResistor: {
                    shape: "Straight line through the origin",
                    gradient: "gradient = I/V = 1/R = constant",
                    resistance: "R = 1/gradient (constant for ohmic conductor)",
                    example: "Metal wire at constant temperature, carbon resistor",
                    both_directions: "Symmetric about origin — same R for forward and reverse current"
                },
                filamentLamp: {
                    shape: "S-shaped curve; gradient decreasing as V increases",
                    explanation: "As current increases, filament heats up → lattice vibrates more → more electron scattering → resistance increases",
                    resistance: "R = V/I increases from cold to hot (low R when cold, high R when at operating temperature)",
                    example: "Tungsten filament incandescent bulb"
                },
                diode: {
                    forwardBias: "Near-zero current until threshold (~0.6–0.7 V for silicon); then rapid rise",
                    reverseBias: "Very small (reverse saturation) current until breakdown voltage",
                    threshold: "Forward voltage: ~0.7 V (silicon), ~0.2 V (germanium), ~2–3 V (LED depending on colour)",
                    resistance: "Forward resistance very low above threshold; reverse resistance very high",
                    use: "Allows current in one direction only — used in rectifiers"
                },
                ntcThermistor: {
                    shape: "Curve; increasing gradient as V increases (due to self-heating reducing R)",
                    temperature: "As temperature increases (from external source or self-heating), resistance decreases sharply",
                    ntc: "Negative Temperature Coefficient (NTC): R decreases as temperature increases",
                    use: "Temperature sensing, overcurrent protection, inrush current limiters"
                },
                ldr: {
                    shape: "Resistance decreases as light intensity increases",
                    mechanism: "Photons excite electrons into conduction band, increasing carrier density n",
                    range: "From ~MΩ in darkness to ~100 Ω in bright light",
                    use: "Light sensing, camera exposure, automatic street lighting"
                }
            },

            temperatureEffects: {
                metals: {
                    effect: "Resistance increases with temperature",
                    mechanism: "Lattice ions vibrate more at higher temperatures → more frequent electron-ion collisions → reduced mean free path → lower drift velocity for same field",
                    formula: "R(T) = R₀(1 + αΔT) where α is temperature coefficient of resistance",
                    alpha_copper: "α_Cu ≈ 3.9 × 10⁻³ K⁻¹"
                },
                semiconductors: {
                    effect: "Resistance decreases with temperature",
                    mechanism: "More electrons gain sufficient thermal energy to jump the band gap → more charge carriers → higher n in I = nAve → more current for same field",
                    contrast: "Opposite behaviour to metals — very useful for sensing temperature"
                },
                superconductors: {
                    effect: "Resistance drops to exactly zero below critical temperature T_c",
                    mechanism: "Cooper pairs of electrons form, not scattered by lattice",
                    examples: "Mercury at 4.2 K (discovered 1911, Kamerlingh Onnes); some ceramics at higher T_c",
                    applications: "MRI magnets, particle accelerator magnets, maglev trains"
                }
            },

            workedExamples: [
                {
                    title: "Basic resistance calculation",
                    problem: "A component has a potential difference of 6 V across it and carries 150 mA. Find its resistance.",
                    given: "V = 6 V, I = 150 mA = 0.150 A",
                    solution: {
                        step1: "R = V/I = 6 / 0.150 = 40 Ω",
                        answer: "R = 40 Ω"
                    }
                },
                {
                    title: "Resistivity calculation",
                    problem: "A nichrome wire is 3.0 m long and has diameter 0.60 mm. Resistivity of nichrome = 1.1 × 10⁻⁶ Ω m. Calculate its resistance.",
                    given: "L = 3.0 m, d = 0.60 mm = 6.0 × 10⁻⁴ m, ρ = 1.1 × 10⁻⁶ Ω m",
                    solution: {
                        step1: "A = π(d/2)² = π(3.0 × 10⁻⁴)² = π × 9.0 × 10⁻⁸ = 2.83 × 10⁻⁷ m²",
                        step2: "R = ρL/A = (1.1 × 10⁻⁶ × 3.0) / (2.83 × 10⁻⁷)",
                        step3: "R = 3.3 × 10⁻⁶ / 2.83 × 10⁻⁷ = 11.7 Ω ≈ 12 Ω",
                        answer: "R ≈ 12 Ω"
                    }
                },
                {
                    title: "Finding resistivity from a graph",
                    problem: "A student plots R vs L for a wire of diameter 0.40 mm. The gradient is 45 Ω/m. Find the resistivity of the wire.",
                    given: "Gradient (= ρ/A) = 45 Ω/m, d = 0.40 mm = 4.0 × 10⁻⁴ m",
                    solution: {
                        step1: "A = π(d/2)² = π(2.0 × 10⁻⁴)² = 1.257 × 10⁻⁷ m²",
                        step2: "From R = (ρ/A)L, gradient = ρ/A",
                        step3: "ρ = gradient × A = 45 × 1.257 × 10⁻⁷ = 5.66 × 10⁻⁶ Ω m",
                        note: "Compare with known values to identify the material"
                    }
                },
                {
                    title: "Non-ohmic device: reading R from I-V graph",
                    problem: "A lamp's I-V graph shows that at V = 12 V, I = 0.4 A, and at V = 2 V, I = 0.2 A. Is the lamp ohmic? Calculate R at each point.",
                    solution: {
                        step1: "At V = 12 V: R = V/I = 12/0.4 = 30 Ω",
                        step2: "At V = 2 V: R = V/I = 2/0.2 = 10 Ω",
                        conclusion: "R is NOT constant (30 Ω ≠ 10 Ω) → lamp is non-ohmic",
                        interpretation: "R increases with V (and hence temperature) — consistent with filament lamp behaviour"
                    }
                }
            ],

            commonErrors: [
                {
                    error: "Saying 'R = V/I IS Ohm's Law'",
                    consequence: "Applying Ohm's Law to non-ohmic components incorrectly",
                    fix: "R = V/I is the definition of resistance (always valid). Ohm's Law additionally states R is constant — only true for ohmic conductors at constant temperature"
                },
                {
                    error: "Using diameter instead of radius in A = πr²",
                    consequence: "Area too large by factor of 4; resistance too small by factor of 4",
                    fix: "Always write A = π(d/2)² = πd²/4; never use d directly in the formula"
                },
                {
                    error: "Confusing resistivity (material property) and resistance (component property)",
                    consequence: "Thinking a longer wire has higher resistivity",
                    fix: "Resistivity ρ depends only on material and temperature. Resistance R = ρL/A depends on dimensions too"
                },
                {
                    error: "Reading gradient of I-V graph as resistance",
                    consequence: "Gradient = 1/R (not R) for ohmic; for non-ohmic gradient ≠ 1/R at all points",
                    fix: "R = V/I at a specific point (not the gradient); gradient of V-I graph = R; gradient of I-V graph = 1/R"
                }
            ],

            assessmentQuestions: {
                recall: [
                    "Write the equation relating resistance, resistivity, length, and cross-sectional area",
                    "State Ohm's Law precisely",
                    "What is the unit of resistivity and what does it represent physically?"
                ],
                understanding: [
                    "Explain the difference between resistance and resistivity",
                    "Explain why a filament lamp does not obey Ohm's Law",
                    "Why does the resistance of a metal increase with temperature but a thermistor decreases?"
                ],
                application: [
                    "Calculate the resistance of a 1.5 m copper wire of diameter 2 mm (ρ_Cu = 1.7 × 10⁻⁸ Ω m)",
                    "A lamp has resistance 12 Ω when cold and 120 Ω at operating temperature. What current flows at 240 V?",
                    "From a R vs L graph with gradient 12 Ω/m and wire diameter 0.50 mm, calculate resistivity"
                ],
                analysis: [
                    "Sketch and annotate I-V characteristics for: ohmic resistor, filament lamp, and silicon diode",
                    "A wire is replaced by one of double the length and half the diameter (same material). By what factor does resistance change?",
                    "Describe how you could determine whether a component is ohmic using only a battery, ammeter, voltmeter, and variable resistor"
                ]
            },

            applications: [
                "Wire selection for electrical installations (trading resistance vs cost vs weight)",
                "Heating element design: high ρ material (nichrome) in specific length and gauge",
                "Temperature sensing (thermistor in digital thermometers, engine management)",
                "Light sensing (LDR in camera exposure meters, automatic lighting)",
                "Superconducting magnets in MRI scanners (zero resistance → no heating)"
            ]
        };

        if (/ohm.*law|ohmic|non.ohmic/i.test(input)) {
            content.focus = 'ohmsLaw';
            content.highlighted = content.definitions.ohmsLaw;
        } else if (/resistiv|rho|ρ|material.*property/i.test(input)) {
            content.focus = 'resistivity';
            content.highlighted = content.fundamentalEquations.resistivityFormula;
        } else if (/I.V|characteristic|lamp|diode|thermistor|LDR/i.test(input)) {
            content.focus = 'ivCharacteristics';
            content.highlighted = content.ivCharacteristics;
        } else if (/temperature.*effect|superconduct/i.test(input)) {
            content.focus = 'temperatureEffects';
            content.highlighted = content.temperatureEffects;
        }

        return content;
    }

    // ============================================================
    // TOPIC HANDLER: DC CIRCUITS
    // ============================================================

    handleDCCircuits(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "DC Circuits",
            category: 'electricity',
            summary: "DC circuit analysis uses series and parallel resistor rules together with Kirchhoff's Current Law (charge conservation at junctions) and Kirchhoff's Voltage Law (energy conservation around loops) to find unknown currents and voltages. Potential dividers and Wheatstone bridges are key practical circuits.",

            definitions: {
                seriesCircuit: {
                    definition: "Components connected end-to-end in a single loop; same current flows through each component",
                    currentRule: "I = I₁ = I₂ = I₃ (same current everywhere in series)",
                    voltageRule: "V_total = V₁ + V₂ + V₃ (voltages add up to supply)",
                    resistanceRule: "R_total = R₁ + R₂ + R₃ (resistances add)",
                    voltageDistribution: "Voltages divide in proportion to resistance: V₁/V₂ = R₁/R₂"
                },
                parallelCircuit: {
                    definition: "Components connected between the same two nodes; same voltage across each component",
                    voltageRule: "V = V₁ = V₂ = V₃ (same voltage across each branch)",
                    currentRule: "I_total = I₁ + I₂ + I₃ (currents add)",
                    resistanceRule: "1/R_total = 1/R₁ + 1/R₂ + 1/R₃",
                    twoResistors: "R_total = R₁R₂/(R₁ + R₂)",
                    currentDistribution: "Currents divide inversely with resistance: I₁/I₂ = R₂/R₁"
                },
                kirchhoffsCurrentLaw: {
                    statement: "The algebraic sum of currents at any junction is zero: ΣI = 0",
                    equivalently: "Sum of currents entering a junction = sum of currents leaving",
                    basis: "Conservation of charge — charge cannot accumulate at a junction in steady state",
                    application: "Assign current directions to each branch; write ΣI_in = ΣI_out at each junction"
                },
                kirchhoffsVoltageLaw: {
                    statement: "The algebraic sum of all EMFs and potential drops around any closed loop is zero: ΣV = 0",
                    equivalently: "ΣEMFs = ΣIR drops around any closed loop",
                    basis: "Conservation of energy — energy gained (from EMFs) = energy dissipated (in resistors) per unit charge",
                    signConvention: {
                        EMF: "Add ε when traversing loop in direction of conventional current through EMF source; subtract if against",
                        resistor: "Subtract IR when traversing in direction of assumed current; add if against"
                    }
                },
                potentialDivider: {
                    definition: "Two or more resistors in series used to produce a fraction of the supply voltage as output",
                    formula: "V_out = V_s × R₂ / (R₁ + R₂)",
                    variableSensor: "Replacing R₂ with a sensor (LDR, thermistor) gives a voltage output that varies with the physical quantity",
                    loading: "Connecting a load resistor R_L across V_out changes the effective R₂ and hence V_out"
                }
            },

            seriesCircuitRules: {
                summary: "Same current, voltages add, resistances add",
                currentRule: {
                    law: "I₁ = I₂ = I₃ = I",
                    basis: "No junctions — charge cannot accumulate — same charge passes all points per second"
                },
                voltageRule: {
                    law: "V_s = V₁ + V₂ + V₃ + ...",
                    basis: "KVL: total energy per charge from EMF = total energy per charge dissipated in resistors"
                },
                totalResistance: {
                    formula: "R_total = R₁ + R₂ + R₃ + ...",
                    consequence: "Adding more resistors always increases R_total"
                }
            },

            parallelCircuitRules: {
                summary: "Same voltage, currents add, reciprocal resistances add",
                voltageRule: {
                    law: "V₁ = V₂ = V₃ = V",
                    basis: "All branches connect between the same two nodes — same potential difference"
                },
                currentRule: {
                    law: "I_total = I₁ + I₂ + I₃ = V/R₁ + V/R₂ + V/R₃",
                    basis: "KCL at junction: total incoming current = sum of all branch currents"
                },
                totalResistance: {
                    formula: "1/R_total = 1/R₁ + 1/R₂ + 1/R₃",
                    twoResistors: "R_total = R₁R₂/(R₁ + R₂)  [product over sum]",
                    consequence: "Adding more parallel branches always decreases R_total; R_total < smallest individual R"
                }
            },

            kirchhoffsLawsApplied: {
                systemOfEquations: {
                    step1: "Label all unknown branch currents with assumed directions on circuit diagram",
                    step2: "Apply KCL at each independent junction: write ΣI_in = ΣI_out",
                    step3: "Apply KVL around enough independent loops: write ΣEMFs = ΣIR",
                    step4: "Solve simultaneous equations for unknown currents",
                    step5: "If any current is negative, it flows opposite to assumed direction",
                    note: "For n unknown currents, need n independent equations total from KCL and KVL"
                }
            },

            potentialDivider: {
                basicCircuit: {
                    description: "R₁ and R₂ in series across supply V_s; output taken across R₂",
                    formula: "V_out = V_s × R₂ / (R₁ + R₂)",
                    derivation: "Current I = V_s/(R₁ + R₂); V_out = IR₂ = V_s × R₂/(R₁ + R₂)"
                },
                sensorApplication: {
                    LDR: {
                        circuit: "R₁ fixed + R₂ = LDR in series across V_s",
                        darkCondition: "R_LDR high → V_out = V_s × R_LDR/(R₁ + R_LDR) → high V_out",
                        brightCondition: "R_LDR low → V_out low",
                        use: "V_out fed to comparator to switch lights on at dusk (V_out exceeds threshold)"
                    },
                    thermistorNTC: {
                        circuit: "R₁ fixed + R₂ = NTC thermistor in series across V_s",
                        coldCondition: "R_thermistor high → V_out high",
                        hotCondition: "R_thermistor low → V_out low",
                        use: "V_out fed to comparator to trigger cooling fan when temperature rises"
                    },
                    choosingR1: {
                        principle: "Choose R₁ ≈ geometric mean of R_sensor_min and R_sensor_max for best sensitivity",
                        practical: "Match R₁ to typical operating resistance of sensor for maximum output variation"
                    }
                },
                loadingEffect: {
                    problem: "Connecting a load R_L across V_out creates a parallel combination with R₂",
                    effectiveR2: "R_eff = R₂ × R_L / (R₂ + R_L)  (less than R₂)",
                    consequence: "V_out = V_s × R_eff/(R₁ + R_eff) — lower than unloaded value",
                    minimise: "Use high R_L (high-impedance voltmeter or op-amp input) to minimise loading effect"
                }
            },

            workedExamples: [
                {
                    title: "Series circuit analysis",
                    problem: "Three resistors 10 Ω, 15 Ω, and 25 Ω are connected in series to a 12 V supply with internal resistance 2 Ω. Find the current and voltage across each resistor.",
                    given: "R₁ = 10 Ω, R₂ = 15 Ω, R₃ = 25 Ω, r = 2 Ω, ε = 12 V",
                    solution: {
                        total: "R_total = 10 + 15 + 25 + 2 = 52 Ω",
                        current: "I = ε/R_total = 12/52 = 0.231 A",
                        V1: "V₁ = IR₁ = 0.231 × 10 = 2.31 V",
                        V2: "V₂ = IR₂ = 0.231 × 15 = 3.46 V",
                        V3: "V₃ = IR₃ = 0.231 × 25 = 5.77 V",
                        Vr: "V_r = Ir = 0.231 × 2 = 0.462 V",
                        check: "2.31 + 3.46 + 5.77 + 0.46 = 12.00 V ✓"
                    }
                },
                {
                    title: "Parallel circuit analysis",
                    problem: "Three resistors 12 Ω, 6 Ω, and 4 Ω are connected in parallel across 12 V. Find total resistance, total current, and each branch current.",
                    given: "R₁ = 12 Ω, R₂ = 6 Ω, R₃ = 4 Ω, V = 12 V",
                    solution: {
                        totalR: "1/R_total = 1/12 + 1/6 + 1/4 = 1/12 + 2/12 + 3/12 = 6/12 → R_total = 2 Ω",
                        totalI: "I_total = V/R_total = 12/2 = 6 A",
                        I1: "I₁ = V/R₁ = 12/12 = 1 A",
                        I2: "I₂ = V/R₂ = 12/6 = 2 A",
                        I3: "I₃ = V/R₃ = 12/4 = 3 A",
                        check: "I₁ + I₂ + I₃ = 1 + 2 + 3 = 6 A = I_total ✓"
                    }
                },
                {
                    title: "Potential divider",
                    problem: "A 5 V supply is connected to a potential divider of R₁ = 8 kΩ and R₂ = 4 kΩ (with R₂ at bottom). Calculate V_out across R₂, and V_out when a 12 kΩ load is connected across R₂.",
                    given: "V_s = 5 V, R₁ = 8000 Ω, R₂ = 4000 Ω",
                    solution: {
                        unloaded: "V_out = V_s × R₂/(R₁ + R₂) = 5 × 4000/12000 = 5/3 = 1.67 V",
                        loadedR: "R_eff = R₂ × R_L/(R₂ + R_L) = 4000 × 12000/16000 = 3000 Ω",
                        loaded: "V_out = 5 × 3000/(8000 + 3000) = 15000/11000 = 1.36 V",
                        change: "Loading reduces V_out from 1.67 V to 1.36 V (−18%) — loading effect is significant here"
                    }
                },
                {
                    title: "Kirchhoff's Laws — two-loop circuit",
                    problem: "A circuit has ε₁ = 10 V (r₁ = 1 Ω) and ε₂ = 4 V (r₂ = 1 Ω) and R = 5 Ω connecting the two. Find current in each branch and voltage across R.",
                    solution: {
                        setup: "Assign I₁ (from ε₁), I₂ (from ε₂), I₃ through R. At junction: I₁ + I₂ = I₃ (if currents meet)",
                        KVL_loop1: "10 = I₁(1) + I₃(5) → 10 = I₁ + 5I₃",
                        KVL_loop2: "4 = I₂(1) + I₃(5) → 4 = I₂ + 5I₃",
                        KCL: "I₃ = I₁ + I₂",
                        solving: "Substitute I₃ = I₁ + I₂ and solve simultaneously → I₁ = 1.5 A, I₂ = −0.5 A, I₃ = 1.0 A",
                        interpretation: "Negative I₂ means ε₂ current flows opposite to assumed direction (ε₂ is being charged/forced backward)",
                        VR: "V_R = I₃R = 1.0 × 5 = 5 V"
                    }
                }
            ],

            commonErrors: [
                {
                    error: "Using R_total = R₁ + R₂ for parallel, or 1/R_total for series",
                    consequence: "Completely wrong total resistance",
                    fix: "SERIES: add resistances. PARALLEL: add reciprocals (1/R_total = 1/R₁ + 1/R₂ + ...)"
                },
                {
                    error: "Thinking voltage divides equally in series",
                    consequence: "Wrong voltage drop calculations",
                    fix: "V₁/V₂ = R₁/R₂ — voltage proportional to resistance"
                },
                {
                    error: "Thinking current divides equally in parallel",
                    consequence: "Wrong branch current calculations",
                    fix: "I₁/I₂ = R₂/R₁ — current inversely proportional to resistance (more current takes easier path)"
                },
                {
                    error: "Forgetting to account for loading effect on potential divider",
                    consequence: "V_out higher than actual when load is connected",
                    fix: "Calculate effective parallel resistance of R₂ and R_L before applying divider formula"
                },
                {
                    error: "Inconsistent sign convention in Kirchhoff's Voltage Law",
                    consequence: "Wrong signs give wrong answers from simultaneous equations",
                    fix: "Choose a loop direction; stick to it. EMF adds if same direction; IR subtracts if same direction as assumed current"
                }
            ],

            assessmentQuestions: {
                recall: [
                    "State Kirchhoff's Current Law and Voltage Law",
                    "Write the equation for total resistance of n resistors in series and in parallel",
                    "Write the potential divider formula for V_out across R₂"
                ],
                understanding: [
                    "Explain why adding resistors in parallel decreases total resistance",
                    "Why does current through series resistors remain the same throughout?",
                    "Explain the loading effect in a potential divider circuit"
                ],
                application: [
                    "Find R_total for: 4 Ω and 12 Ω in parallel, in series with 5 Ω",
                    "A 9 V supply, 15 kΩ and 10 kΩ in series. Find V_out across 10 kΩ",
                    "Use KVL to find current in a loop: ε = 6 V, R₁ = 4 Ω, R₂ = 2 Ω in series"
                ],
                analysis: [
                    "A student connects an ammeter in parallel with a resistor by mistake. What happens and why?",
                    "In a potential divider with a thermistor, explain with equations why V_out increases as temperature falls",
                    "Apply KCL and KVL to find all branch currents in a two-loop circuit"
                ]
            },

            applications: [
                "Household wiring (parallel: each appliance works independently)",
                "LED indicator circuits (series resistor to limit current)",
                "Wheatstone bridge for precision resistance measurement (e.g., strain gauges)",
                "Potential divider sensors in environmental monitoring",
                "Voltage regulators and reference circuits in electronics"
            ]
        };

        if (/series/i.test(input) && !/parallel/i.test(input)) {
            content.focus = 'seriesCircuits';
            content.highlighted = content.seriesCircuitRules;
        } else if (/parallel/i.test(input) && !/series/i.test(input)) {
            content.focus = 'parallelCircuits';
            content.highlighted = content.parallelCircuitRules;
        } else if (/kirchhoff/i.test(input)) {
            content.focus = 'kirchhoffsLaws';
            content.highlighted = content.definitions.kirchhoffsCurrentLaw;
        } else if (/potential.*divider|divider/i.test(input)) {
            content.focus = 'potentialDivider';
            content.highlighted = content.potentialDivider;
        }

        return content;
    }

    // ============================================================
    // TOPIC HANDLER: ELECTRICAL POWER AND ENERGY
    // ============================================================

    handleElectricalPowerEnergy(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Electrical Power and Energy",
            category: 'electricity',
            summary: "Electrical power P = IV = I²R = V²/R is the rate of energy transfer. Electrical energy E = Pt. The kilowatt-hour (kWh) is the commercial energy unit. Joule heating (I²R losses) affects cable design and transmission efficiency. Maximum efficiency requires minimising resistance in transmission lines.",

            definitions: {
                electricalPower: {
                    symbol: "P",
                    unit: "watts (W)",
                    definition: "The rate of electrical energy transfer: P = W/t = IV",
                    SI: "1 W = 1 J s⁻¹ = 1 V A",
                    threeEquivalentForms: [
                        "P = IV  [use when current and voltage known]",
                        "P = I²R  [Joule heating; use when current and resistance known]",
                        "P = V²/R  [use when voltage and resistance known]"
                    ],
                    note: "All three are equivalent via V = IR — choose based on what quantities are known"
                },
                electricalEnergy: {
                    symbol: "E or W",
                    unit: "joules (J) or kilowatt-hours (kWh)",
                    definition: "Total energy transferred electrically: E = Pt = IVt",
                    equivalentForms: ["E = Pt", "E = IVt", "E = I²Rt", "E = V²t/R"]
                },
                kilowattHour: {
                    symbol: "kWh",
                    definition: "Energy transferred by a 1 kW device operating for 1 hour",
                    conversion: "1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J = 3.6 MJ",
                    use: "Commercial unit for electricity billing"
                },
                jouleHeating: {
                    definition: "Thermal energy dissipated in a resistor when current flows: P = I²R",
                    significance: "Always causes energy loss in any conductor — cannot be avoided, only minimised",
                    fuse: "Fuses exploit Joule heating: excessive current heats fuse wire until it melts"
                },
                efficiency: {
                    symbol: "η (eta)",
                    definition: "η = useful output power / total input power = P_useful/P_input",
                    percentage: "η(%) = (P_useful/P_input) × 100",
                    energyForm: "η = E_useful/E_input",
                    limit: "η < 100% always (energy conservation); η = 100% is physically impossible"
                }
            },

            fundamentalEquations: {
                power: {
                    fromIV: "P = IV",
                    fromIR: "P = I²R",
                    fromVR: "P = V²/R",
                    note: "When circuit has internal resistance, use V_terminal (not EMF) for external power"
                },
                energy: {
                    basic: "E = Pt",
                    withIV: "E = IVt",
                    jouleHeating: "E = I²Rt",
                    fromV: "E = V²t/R"
                },
                commercialEnergy: {
                    inKWh: "E (kWh) = P (kW) × t (hours)",
                    cost: "Cost = E (kWh) × unit cost (per kWh)",
                    conversion: "E (J) = E (kWh) × 3.6 × 10⁶"
                },
                efficiency: {
                    basic: "η = P_out/P_in",
                    withLosses: "P_in = P_useful + P_wasted",
                    losses: "P_wasted = P_in − P_useful"
                }
            },

            powerInCircuits: {
                seriesCircuit: {
                    rule: "Same current I through all components",
                    power: "P ∝ R for components in series (P = I²R; same I → more power in larger R)",
                    note: "Component with largest resistance dissipates most power in series"
                },
                parallelCircuit: {
                    rule: "Same voltage V across all components",
                    power: "P ∝ 1/R for components in parallel (P = V²/R; same V → more power in smaller R)",
                    note: "Component with smallest resistance dissipates most power in parallel"
                }
            },

            fuseAndSafeCurrentRating: {
                fuseOperation: "Fuse wire melts when I²Rt exceeds a threshold — chosen to melt just above safe operating current",
                fuseRatingCalculation: {
                    step1: "Find operating current: I = P/V",
                    step2: "Select fuse rated slightly above this current",
                    example: "1200 W at 230 V → I = 1200/230 = 5.2 A → use 5 A or 13 A fuse (13 A is standard UK fuse ratings: 3 A, 5 A, 13 A)"
                },
                wireRating: "Wire cross-section must carry current without overheating: use R = ρL/A to select A for acceptable R and hence I²R heating"
            },

            powerTransmissionAndLoss: {
                problem: "Resistance of long cables causes I²R power loss during transmission",
                loss_equation: "P_loss = I²R_cable",
                solutionHighVoltage: {
                    principle: "For same power P = IV: higher V → lower I → much lower I²R losses (P_loss ∝ I² ∝ 1/V²)",
                    factor: "Doubling transmission voltage reduces I²R losses by factor of 4",
                    gridVoltage: "National Grid: 400 kV for long-distance transmission; stepped down locally to 230 V"
                },
                transformerRole: {
                    stepUp: "At power station: step-up transformer increases V before transmission",
                    stepDown: "Near homes/industry: step-down transformers reduce V to safe levels",
                    ideal: "Ideal transformer: V_s/V_p = N_s/N_p and I_s/I_p = N_p/N_s"
                }
            },

            sankey: {
                description: "Sankey diagram shows energy flow: arrow width proportional to power/energy",
                input: "Wide arrow on left = total input power",
                outputs: "Branches show useful output and all loss mechanisms",
                reading: "η = width of useful arrow / width of input arrow",
                commonLosses: ["Joule heating in resistance", "Friction in motors", "Sound and vibration", "Radiation and convection heat loss"]
            },

            workedExamples: [
                {
                    title: "Three equivalent power calculations",
                    problem: "A resistor of 100 Ω carries 0.5 A with 50 V across it. Calculate power using all three methods.",
                    solution: {
                        method1: "P = IV = 0.5 × 50 = 25 W",
                        method2: "P = I²R = (0.5)² × 100 = 0.25 × 100 = 25 W",
                        method3: "P = V²/R = 50²/100 = 2500/100 = 25 W",
                        conclusion: "All three methods give the same answer ✓"
                    }
                },
                {
                    title: "Electricity bill calculation",
                    problem: "A household uses the following appliances over one month (30 days): kettle 2.5 kW for 1 hour/day; TV 150 W for 5 hours/day; fridge 100 W continuously. Calculate monthly energy in kWh and cost at 28p/kWh.",
                    solution: {
                        kettle: "E = P × t = 2.5 × 1 × 30 = 75 kWh",
                        tv: "E = 0.15 × 5 × 30 = 22.5 kWh",
                        fridge: "E = 0.1 × 24 × 30 = 72 kWh",
                        total: "E_total = 75 + 22.5 + 72 = 169.5 kWh",
                        cost: "Cost = 169.5 × 0.28 = £47.46"
                    }
                },
                {
                    title: "Transmission line loss comparison",
                    problem: "A power station generates 50 MW. Transmission cables have total resistance 2 Ω. Compare I²R losses at 25 kV vs 250 kV.",
                    solution: {
                        at25kV: {
                            current: "I = P/V = 50 × 10⁶ / 25000 = 2000 A",
                            loss: "P_loss = I²R = 2000² × 2 = 8 × 10⁶ W = 8 MW",
                            percentage: "8/50 = 16% power lost"
                        },
                        at250kV: {
                            current: "I = P/V = 50 × 10⁶ / 250000 = 200 A",
                            loss: "P_loss = I²R = 200² × 2 = 80000 W = 80 kW",
                            percentage: "0.08/50 = 0.16% power lost"
                        },
                        ratio: "Losses reduced by factor 100 (= 10²) when voltage increased by factor 10"
                    }
                },
                {
                    title: "Power dissipated in series vs parallel",
                    problem: "A 10 Ω and 40 Ω resistor are connected (a) in series, (b) in parallel to 20 V. Find power dissipated in each resistor in each case.",
                    solution: {
                        series: {
                            current: "I = V/(R₁+R₂) = 20/50 = 0.4 A",
                            P10: "P₁ = I²R₁ = 0.16 × 10 = 1.6 W",
                            P40: "P₂ = I²R₂ = 0.16 × 40 = 6.4 W",
                            note: "Larger resistance dissipates more in series (P ∝ R)"
                        },
                        parallel: {
                            I10: "I₁ = V/R₁ = 20/10 = 2 A; P₁ = I₁²R₁ = 4 × 10 = 40 W",
                            I40: "I₂ = V/R₂ = 20/40 = 0.5 A; P₂ = I₂²R₂ = 0.25 × 40 = 10 W",
                            note: "Smaller resistance dissipates more in parallel (P = V²/R ∝ 1/R)"
                        }
                    }
                }
            ],

            commonErrors: [
                {
                    error: "Using EMF instead of terminal voltage in P = IV for external circuit",
                    consequence: "Overestimates useful power output of source",
                    fix: "External power = V_terminal × I; total power from source = ε × I"
                },
                {
                    error: "Confusing kW with kWh",
                    consequence: "Energy and power mixed up in calculations",
                    fix: "kW is power (rate); kWh is energy (rate × time). kWh = kW × hours"
                },
                {
                    error: "Thinking P = V²/R means higher R always means less power (or P = I²R means higher R means more)",
                    consequence: "Wrong comparison of power in components",
                    fix: "P = V²/R applies when V is fixed (parallel); P = I²R applies when I is fixed (series). Choose the right formula"
                },
                {
                    error: "Forgetting to convert hours to seconds when calculating energy in joules",
                    consequence: "Energy off by factor of 3600",
                    fix: "E(J) = P(W) × t(s). If time in hours: E(J) = P × t_hours × 3600"
                }
            ],

            assessmentQuestions: {
                recall: [
                    "Write three equivalent equations for electrical power",
                    "What is one kilowatt-hour in joules?",
                    "Write the equation for efficiency of an electrical device"
                ],
                understanding: [
                    "Explain why I²R losses in transmission cables are reduced by using higher voltages",
                    "Explain which of two resistors (small or large) dissipates more power when connected (a) in series, (b) in parallel",
                    "Why is efficiency always less than 100% for any real device?"
                ],
                application: [
                    "A 1.5 kW iron is used for 20 minutes. Calculate energy used in J and kWh, and cost at 30p/kWh",
                    "An electric motor takes 8 A from 230 V. If it lifts 50 kg by 12 m in 15 s, find efficiency",
                    "A heating wire has resistance 10 Ω. Calculate power dissipated at currents of 1 A, 2 A, 4 A. What pattern do you notice?"
                ],
                analysis: [
                    "Sketch a Sankey diagram for an electric kettle rated 2 kW. Add approximate values if 5% is lost to sound and heating the casing",
                    "Two transmission lines have the same resistance but carry power at 10 kV and 100 kV. What is the ratio of their I²R losses?",
                    "Calculate the operating resistance of a 60 W, 230 V lamp and the current it draws. Why does R increase from cold to hot?"
                ]
            },

            applications: [
                "Electricity billing and energy management",
                "Fuse and circuit breaker ratings for electrical safety",
                "National Grid transmission voltage optimisation",
                "LED vs incandescent lamp efficiency comparison",
                "Motor and generator efficiency ratings for industrial use"
            ]
        };

        if (/kwh|kilowatt.*hour|bill|cost/i.test(input)) {
            content.focus = 'commercialEnergy';
            content.highlighted = content.fundamentalEquations.commercialEnergy;
        } else if (/fuse|wire.*rating|safe.*current/i.test(input)) {
            content.focus = 'fuseAndRating';
            content.highlighted = content.fuseAndSafeCurrentRating;
        } else if (/transmiss|grid|national.*grid|cable.*loss/i.test(input)) {
            content.focus = 'powerTransmission';
            content.highlighted = content.powerTransmissionAndLoss;
        } else if (/efficien|sankey/i.test(input)) {
            content.focus = 'efficiency';
            content.highlighted = content.definitions.efficiency;
        } else if (/series.*parallel.*power|power.*series|power.*parallel/i.test(input)) {
            content.focus = 'powerInCircuits';
            content.highlighted = content.powerInCircuits;
        }

        return content;
    }

    // ============================================================
    // TOPIC HANDLER: CAPACITANCE
    // ============================================================

    handleCapacitance(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Capacitance and RC Circuits",
            category: 'electricity',
            summary: "A capacitor stores charge on parallel plates: C = Q/V (farads). Energy stored: E = ½CV² = ½QV. Capacitors in series reduce total capacitance (like parallel resistors); in parallel they add. In RC circuits, charge and discharge follow exponential curves with time constant τ = RC.",

            definitions: {
                capacitor: {
                    definition: "An electrical component that stores charge and energy in the electric field between two conducting plates separated by a dielectric (insulator)",
                    structure: "Two parallel conducting plates + dielectric (air, ceramic, electrolyte, polymer)",
                    symbol: "Two parallel lines (—||— ) in circuit diagrams; electrolytic has polarity mark"
                },
                capacitance: {
                    symbol: "C",
                    unit: "farads (F)",
                    definition: "The ratio of charge stored to the potential difference that causes it: C = Q/V",
                    SI: "1 F = 1 C V⁻¹",
                    practical: "1 F is very large; practical values are μF (10⁻⁶ F), nF (10⁻⁹ F), pF (10⁻¹² F)",
                    physical: "Higher C: can store more charge for the same voltage"
                },
                dielectric: {
                    definition: "Insulating material between capacitor plates that increases capacitance",
                    mechanism: "Polarisation of dielectric reduces electric field between plates for same charge → lower V → higher C = Q/V",
                    relativePermittivity: "C = ε₀εᵣA/d; εᵣ > 1 for any dielectric; εᵣ = 1 for vacuum"
                },
                timeConstant: {
                    symbol: "τ (tau)",
                    unit: "seconds (s)",
                    definition: "τ = RC; the time for capacitor voltage to fall to 1/e (≈ 37%) of its initial value during discharge",
                    significance: [
                        "After 1τ: V = 37% of V₀ (discharge) or 63% of V_max (charge)",
                        "After 2τ: V = 14% of V₀ (discharge) or 86% of V_max (charge)",
                        "After 5τ: effectively fully charged or discharged (>99%)"
                    ]
                }
            },

            fundamentalEquations: {
                capacitanceDefinition: {
                    equation: "C = Q/V",
                    rearrangements: ["Q = CV", "V = Q/C"],
                    variables: { C: "capacitance (F)", Q: "charge stored (C)", V: "potential difference (V)" }
                },
                parallelPlateCapacitor: {
                    equation: "C = ε₀εᵣA/d",
                    variables: {
                        epsilon0: "permittivity of free space = 8.85 × 10⁻¹² F m⁻¹",
                        epsilonR: "relative permittivity of dielectric (dimensionless; ≥ 1)",
                        A: "area of one plate (m²)",
                        d: "separation between plates (m)"
                    },
                    effects: {
                        increaseA: "C increases (more surface area → more charge per volt)",
                        decreaseD: "C increases (stronger field → more charge stored per volt)",
                        increaseEpsilonR: "C increases (dielectric reduces field → more charge for same V)"
                    }
                },
                energyStored: {
                    fromQV: "E = ½QV",
                    fromCV: "E = ½CV²",
                    fromQ: "E = Q²/(2C)",
                    derivation: "As charge builds from 0 to Q, voltage builds from 0 to V. Average voltage = V/2. Energy = Q × (V/2) = ½QV",
                    graphical: "E = area under Q-V graph (triangle) = ½ × base × height = ½QV"
                }
            },

            combinationsOfCapacitors: {
                parallel: {
                    rule: "C_total = C₁ + C₂ + C₃ + ...",
                    voltage: "V₁ = V₂ = V₃ = V (same voltage across each)",
                    charge: "Q_total = Q₁ + Q₂ + Q₃",
                    derivation: "Q_total = C₁V + C₂V + C₃V = V(C₁ + C₂ + C₃) = C_total × V",
                    analogy: "Parallel capacitors act like resistors in SERIES (capacitances add)",
                    result: "Total capacitance INCREASES by adding capacitors in parallel"
                },
                series: {
                    rule: "1/C_total = 1/C₁ + 1/C₂ + 1/C₃",
                    twoCapacitors: "C_total = C₁C₂/(C₁ + C₂)",
                    charge: "Q₁ = Q₂ = Q₃ = Q (same charge on each capacitor)",
                    voltage: "V_total = V₁ + V₂ + V₃",
                    derivation: "V = Q/C₁ + Q/C₂ + Q/C₃ = Q(1/C₁ + 1/C₂ + 1/C₃) = Q/C_total",
                    analogy: "Series capacitors act like resistors in PARALLEL (reciprocals add)",
                    result: "Total capacitance DECREASES; C_total < smallest individual C"
                },
                commonConfusion: "Capacitors in PARALLEL: capacitances ADD (opposite to resistors in parallel). Capacitors in SERIES: reciprocals add (opposite to resistors in series). This reversal is a common exam trap."
            },

            rcCircuits: {
                chargingCircuit: {
                    setup: "Capacitor C in series with resistor R; connected to supply voltage V₀ at t = 0",
                    chargeEquation: "Q(t) = CV₀(1 − e^(−t/RC)) = Q_max(1 − e^(−t/τ))",
                    voltageEquation: "V_C(t) = V₀(1 − e^(−t/RC))",
                    currentEquation: "I(t) = (V₀/R)·e^(−t/RC) = I₀·e^(−t/τ)",
                    atT0: "t = 0: V_C = 0; I = V₀/R (maximum current)",
                    atTInfinity: "t → ∞: V_C = V₀; I = 0 (fully charged; no current)",
                    graphShape: "V_C vs t: rises exponentially toward V₀; I vs t: decays exponentially"
                },
                dischargingCircuit: {
                    setup: "Charged capacitor (initial voltage V₀) discharges through resistor R; switch closed at t = 0",
                    chargeEquation: "Q(t) = Q₀·e^(−t/RC) = Q₀·e^(−t/τ)",
                    voltageEquation: "V_C(t) = V₀·e^(−t/RC)",
                    currentEquation: "I(t) = (V₀/R)·e^(−t/RC) = I₀·e^(−t/τ)",
                    atT0: "t = 0: V_C = V₀; I = V₀/R (maximum current)",
                    atTInfinity: "t → ∞: V_C → 0; I → 0 (fully discharged)",
                    halfLife: "t₁/₂ = RC·ln2 ≈ 0.693RC — time for V to halve"
                },
                graphicalAnalysis: {
                    directPlot: "V vs t: exponential curve; difficult to determine τ precisely",
                    linearisedPlot: {
                        equation: "ln(V) = ln(V₀) − t/RC",
                        graph: "Plot ln(V) vs t: straight line",
                        gradient: "gradient = −1/(RC) = −1/τ",
                        yIntercept: "y-intercept = ln(V₀)",
                        determination: "τ = −1/gradient; C = τ/R or R = τ/C"
                    },
                    timeConstantFromGraph: [
                        "Method 1: Read t when V = V₀/e ≈ 0.37V₀ → this is τ",
                        "Method 2: Read t when V = V₀/2 → this is t₁/₂ = 0.693τ → τ = t₁/₂/0.693",
                        "Method 3: Linearise (ln V vs t) and find gradient = −1/τ"
                    ]
                },
                derivation: {
                    discharge: "KVL: V_C − V_R = 0 → Q/C = IR → Q/C = −(dQ/dt)R → dQ/dt = −Q/(RC) → Q = Q₀e^(−t/RC)"
                }
            },

            energyConsiderations: {
                energySupplied: "When charging fully from V = 0 to V₀: energy from battery = CV₀² (= Q × V₀ = C × V₀²)",
                energyStored: "Energy stored in capacitor = ½CV₀²",
                energyDissipated: "Energy dissipated in resistor = ½CV₀²",
                result: "Only 50% of energy from battery is stored in capacitor — regardless of R value",
                explanation: "As charge flows, current through R causes I²R heating. Even as R → 0, total dissipation = ½CV₀² (occurs as a spark/radiation)"
            },

            workedExamples: [
                {
                    title: "Basic capacitance and stored charge",
                    problem: "A 470 μF capacitor is charged to 15 V. Calculate (a) charge stored, (b) energy stored.",
                    given: "C = 470 × 10⁻⁶ F, V = 15 V",
                    solution: {
                        charge: "Q = CV = 470 × 10⁻⁶ × 15 = 7.05 × 10⁻³ C = 7.05 mC",
                        energy: "E = ½CV² = ½ × 470 × 10⁻⁶ × 15² = ½ × 470 × 10⁻⁶ × 225 = 0.0529 J ≈ 53 mJ",
                        check: "E = ½QV = ½ × 7.05 × 10⁻³ × 15 = 0.0529 J ✓"
                    }
                },
                {
                    title: "Capacitors in series and parallel",
                    problem: "Three capacitors: C₁ = 2 μF, C₂ = 4 μF, C₃ = 6 μF. Find total capacitance (a) all in parallel, (b) all in series.",
                    solution: {
                        parallel: "C_total = 2 + 4 + 6 = 12 μF",
                        series: {
                            reciprocal: "1/C_total = 1/2 + 1/4 + 1/6 = 6/12 + 3/12 + 2/12 = 11/12",
                            answer: "C_total = 12/11 ≈ 1.09 μF",
                            note: "Series total (1.09 μF) is less than any individual capacitor ✓"
                        }
                    }
                },
                {
                    title: "RC discharge — finding time constant",
                    problem: "A capacitor discharges through a 10 kΩ resistor. The voltage falls from 8.0 V to 3.0 V in 25 s. Find the time constant and capacitance.",
                    given: "V₀ = 8.0 V, V = 3.0 V at t = 25 s, R = 10000 Ω",
                    solution: {
                        step1: "V = V₀·e^(−t/τ) → 3.0 = 8.0·e^(−25/τ)",
                        step2: "3.0/8.0 = e^(−25/τ) → ln(3/8) = −25/τ",
                        step3: "ln(0.375) = −0.981 → −0.981 = −25/τ",
                        step4: "τ = 25/0.981 = 25.5 s",
                        capacitance: "C = τ/R = 25.5/(10000) = 2.55 × 10⁻³ F = 2.55 mF",
                        check: "After τ = 25.5 s: V = 8.0 × e^(−1) = 8.0 × 0.368 = 2.94 V; at t = 25 s should be slightly above this → V = 3.0 V ✓"
                    }
                },
                {
                    title: "Linearising discharge data",
                    problem: "A capacitor discharges; data shows: t = 0 s, V = 12.0 V; t = 20 s, V = 7.30 V; t = 40 s, V = 4.44 V; t = 60 s, V = 2.70 V. Find τ from ln(V) vs t graph.",
                    solution: {
                        lnValues: "ln(12.0) = 2.485; ln(7.30) = 1.988; ln(4.44) = 1.491; ln(2.70) = 0.993",
                        gradient: "gradient = Δln(V)/Δt = (0.993 − 2.485)/(60 − 0) = −1.492/60 = −0.02487 s⁻¹",
                        timeConstant: "τ = −1/gradient = 1/0.02487 = 40.2 s",
                        check: "ln(V) decreases by equal amounts (≈ 0.497) for equal time steps (20 s) → confirms exponential ✓"
                    }
                }
            ],

            commonErrors: [
                {
                    error: "Confusing capacitors in series with resistors in series (and parallel with parallel)",
                    consequence: "Wrongly adding C in series, or adding reciprocals in parallel",
                    fix: "Capacitors in PARALLEL → ADD capacitances. In SERIES → ADD reciprocals. This is OPPOSITE to resistors"
                },
                {
                    error: "Using E = QV instead of E = ½QV for energy stored",
                    consequence: "Energy doubled — very common exam error",
                    fix: "Energy = ½QV because voltage builds from 0 to V as charge accumulates — average voltage = V/2"
                },
                {
                    error: "Thinking time constant is the time to fully discharge",
                    consequence: "Wrong identification of τ from graph",
                    fix: "τ is when V falls to 37% of V₀, NOT to zero. Full discharge takes ~5τ"
                },
                {
                    error: "Confusing charging and discharging equations",
                    consequence: "Using 1 − e^(−t/τ) for discharge and e^(−t/τ) for charge",
                    fix: "DISCHARGE: V = V₀e^(−t/τ) (starts high, falls). CHARGE: V = V₀(1 − e^(−t/τ)) (starts low, rises)"
                },
                {
                    error: "Not converting μF to F before calculation",
                    consequence: "Answers out by factor of 10⁶",
                    fix: "Always convert: 1 μF = 10⁻⁶ F; 1 nF = 10⁻⁹ F; 1 pF = 10⁻¹² F before substituting"
                }
            ],

            assessmentQuestions: {
                recall: [
                    "Write the definition of capacitance and its unit",
                    "Write three equivalent equations for energy stored in a capacitor",
                    "What is the time constant of an RC circuit?"
                ],
                understanding: [
                    "Explain why adding capacitors in parallel increases total capacitance but in series decreases it",
                    "Explain why the energy stored in a capacitor is ½QV rather than QV",
                    "Why does the voltage across a discharging capacitor decrease exponentially rather than linearly?"
                ],
                application: [
                    "A 220 μF capacitor is charged to 12 V. Calculate charge, energy stored, and time to discharge to 37% through 5 kΩ",
                    "Two capacitors 6 μF and 3 μF in series across 12 V. Find C_total, total charge, and voltage across each",
                    "From a ln(V) vs t graph with gradient −0.05 s⁻¹ and R = 20 kΩ, find C"
                ],
                analysis: [
                    "Sketch V vs t for (a) charging and (b) discharging an RC circuit. Mark V₀, τ, and 5τ on each",
                    "Explain how you would determine the time constant of a capacitor from experimental data",
                    "A camera flash uses a 3300 μF capacitor charged to 300 V. Calculate energy stored and compare to energy in a 1.5 V AA battery (E ≈ 9000 J)"
                ]
            },

            applications: [
                "Timing circuits in 555 timer chips (alarms, pulse generators, PWM)",
                "Flash photography (large capacitor discharges rapidly to power flash tube)",
                "Heart defibrillators (store and rapidly deliver electrical energy to patient)",
                "Power supply smoothing (capacitors reduce ripple in rectified AC)",
                "Touchscreen technology (capacitive sensing detects finger contact)",
                "Tuning circuits in radio receivers (variable capacitor selects station frequency)"
            ]
        };

        if (/series|parallel.*capacit|capacit.*series/i.test(input)) {
            content.focus = 'combinations';
            content.highlighted = content.combinationsOfCapacitors;
        } else if (/discharge|charge.*RC|time.*constant|tau|exponential/i.test(input)) {
            content.focus = 'rcCircuits';
            content.highlighted = content.rcCircuits;
        } else if (/energy.*capacit|capacit.*energy|½CV|half.*CV/i.test(input)) {
            content.focus = 'energyStored';
            content.highlighted = content.fundamentalEquations.energyStored;
        } else if (/parallel.*plate|C.*=.*epsilon|permittiv/i.test(input)) {
            content.focus = 'parallelPlate';
            content.highlighted = content.fundamentalEquations.parallelPlateCapacitor;
        }

        return content;
    }
}
