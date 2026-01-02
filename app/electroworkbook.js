
// Enhanced Electricity & Magnetism Physics Workbook - Improved Step-by-Step Explanations
import * as math from 'mathjs';

export class EnhancedElectricityMagnetismWorkbook {
    constructor(options = {}) {
    this.width = options.width || 1400;
    this.height = options.height || 2000;
    this.theme = options.theme || "scientific";
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

    // Initialize in the correct order
    this.physicsSymbols = this.initializePhysicsSymbols();
    this.physicsConstants = this.initializePhysicsConstants();
    this.setThemeColors();
    this.initializeElectricityMagnetismLessons();  // ADD THIS LINE - Initialize lessons first
    this.initializeElectricityMagnetismSolvers();  // Then initialize solvers
    this.initializeErrorDatabase();
    this.initializeExplanationTemplates();
}
    initializePhysicsConstants() {
        return {
            // Fundamental constants
            e: 1.602e-19,              // Elementary charge (C)
            epsilon0: 8.854e-12,       // Permittivity of free space (F/m)
            mu0: 4 * Math.PI * 1e-7,   // Permeability of free space (H/m)
            k: 8.988e9,                // Coulomb's constant (N⋅m²/C²)
            me: 9.109e-31,             // Electron mass (kg)
            mp: 1.673e-27,             // Proton mass (kg)
            c: 2.998e8,                // Speed of light (m/s)
            h: 6.626e-34,              // Planck's constant (J⋅s)
            
            // Derived constants
            ke: 8.988e9,               // Coulomb's constant k = 1/(4πε₀)
            
            // Unit conversions
            eV_to_J: 1.602e-19,        // Electron volts to Joules
            T_to_G: 1e4,               // Tesla to Gauss
            A_to_mA: 1e3,              // Ampere to milliampere
            V_to_kV: 1e-3              // Volt to kilovolt
        };
    }

    initializePhysicsSymbols() {
        return {
            // Greek letters for physics
            'mu': 'μ',        // Permeability
            'epsilon': 'ε',   // Permittivity
            'rho': 'ρ',       // Charge density
            'sigma': 'σ',     // Surface charge density
            'lambda': 'λ',    // Linear charge density
            'phi': 'Φ',       // Flux
            'omega': 'ω',     // Angular frequency
            'theta': 'θ',     // Angle
            'tau': 'τ',       // Torque
            
            // Special symbols
            'nabla': '∇',     // Del operator
            'partial': '∂',   // Partial derivative
            'integral': '∫',  // Integral
            'dot': '·',       // Dot product
            'cross': '×',     // Cross product
            'infinity': '∞',
            'propto': '∝',    // Proportional to
            'approx': '≈',
            'delta': 'Δ',     // Change in
            'sum': 'Σ'        // Summation
        };
    }

    initializeElectricityMagnetismLessons() {
        this.lessons = {
            coulombs_law: {
                title: "Coulomb's Law",
                concepts: [
                    "Electric force between two point charges",
                    "Force is proportional to product of charges",
                    "Force is inversely proportional to square of distance",
                    "Force acts along line connecting charges"
                ],
                theory: "Coulomb's law describes the electrostatic force between charged particles. Like charges repel, unlike charges attract. The magnitude of force depends on the charges and their separation distance.",
                keyFormulas: {
                    "Coulomb's Law": "F = k|q₁q₂|/r²",
                    "Coulomb's Constant": "k = 8.99 × 10⁹ N⋅m²/C²",
                    "Vector Form": "F⃗ = k(q₁q₂/r²)r̂",
                    "Electric Constant": "k = 1/(4πε₀)"
                },
                solvingSteps: [
                    "Identify the charges q₁ and q₂",
                    "Determine the separation distance r",
                    "Apply Coulomb's law: F = k|q₁q₂|/r²",
                    "Determine direction (attraction or repulsion)",
                    "Calculate magnitude and express with units"
                ],
                applications: [
                    "Atomic structure and bonding",
                    "Electrostatic precipitators",
                    "Photocopiers and laser printers",
                    "Van de Graaff generators"
                ]
            },

            electric_field: {
                title: "Electric Field",
                concepts: [
                    "Electric field is force per unit charge",
                    "Field points away from positive charges",
                    "Field points toward negative charges",
                    "Superposition principle applies"
                ],
                theory: "The electric field represents the force that would be exerted on a unit positive test charge placed at any point in space. It's a vector field that exists independently of test charges.",
                keyFormulas: {
                    "Electric Field Definition": "E⃗ = F⃗/q",
                    "Point Charge Field": "E = kq/r²",
                    "Field Direction": "E⃗ = k(q/r²)r̂",
                    "Superposition": "E⃗_total = ΣE⃗ᵢ"
                },
                solvingSteps: [
                    "Identify source charge(s) creating the field",
                    "Determine position where field is calculated",
                    "Calculate field from each charge: E = kq/r²",
                    "Determine direction for each field component",
                    "Apply superposition to find total field"
                ],
                applications: [
                    "Particle accelerators",
                    "CRT displays",
                    "Electric field sensors",
                    "Atmospheric electricity studies"
                ]
            },

            electric_potential: {
                title: "Electric Potential and Potential Energy",
                concepts: [
                    "Electric potential is potential energy per unit charge",
                    "Potential is a scalar quantity",
                    "Work done by electric field is path-independent",
                    "Voltage is potential difference between points"
                ],
                theory: "Electric potential energy represents the work done to bring a charge from infinity to a point in an electric field. Electric potential (voltage) is this energy per unit charge.",
                keyFormulas: {
                    "Electric Potential": "V = kq/r",
                    "Potential Energy": "U = kq₁q₂/r",
                    "Potential Difference": "ΔV = -∫E⃗·dr⃗",
                    "Work-Energy Relation": "W = qΔV"
                },
                solvingSteps: [
                    "Identify the charge configuration",
                    "Choose reference point (usually infinity)",
                    "Calculate potential from each charge",
                    "Sum potentials (scalar addition)",
                    "Calculate energy or voltage as needed"
                ],
                applications: [
                    "Batteries and power supplies",
                    "Capacitor charging/discharging",
                    "Electric power transmission",
                    "Electrochemical cells"
                ]
            },

            gauss_law: {
                title: "Gauss's Law",
                concepts: [
                    "Electric flux through a closed surface",
                    "Flux depends only on enclosed charge",
                    "Symmetry simplifies calculations",
                    "Fundamental law of electrostatics"
                ],
                theory: "Gauss's law relates the electric flux through a closed surface to the charge enclosed by that surface. It's particularly useful for calculating fields with high symmetry.",
                keyFormulas: {
                    "Gauss's Law": "∮E⃗·dA⃗ = Q_enc/ε₀",
                    "Electric Flux": "Φ_E = ∮E⃗·dA⃗",
                    "Field from Gauss": "E = Q_enc/(ε₀A)",
                    "Charge Density": "Q_enc = ∫ρ dV"
                },
                solvingSteps: [
                    "Identify symmetry of charge distribution",
                    "Choose appropriate Gaussian surface",
                    "Calculate enclosed charge Q_enc",
                    "Apply Gauss's law: ∮E⃗·dA⃗ = Q_enc/ε₀",
                    "Solve for electric field magnitude"
                ],
                applications: [
                    "Field of infinite line charge",
                    "Field of infinite sheet charge",
                    "Field inside/outside spherical shell",
                    "Capacitor field calculations"
                ]
            },

            capacitance: {
                title: "Capacitance and Capacitors",
                concepts: [
                    "Capacitance is charge storage ability",
                    "C = Q/V relationship",
                    "Energy stored in electric field",
                    "Series and parallel combinations"
                ],
                theory: "Capacitance is the ability of a system to store electric charge. A capacitor stores energy in the electric field between conductors separated by an insulator (dielectric).",
                keyFormulas: {
                    "Capacitance Definition": "C = Q/V",
                    "Parallel Plate": "C = ε₀A/d",
                    "Energy Stored": "U = ½CV² = ½QV = Q²/(2C)",
                    "Series": "1/C_eq = Σ(1/Cᵢ)",
                    "Parallel": "C_eq = ΣCᵢ",
                    "With Dielectric": "C = κε₀A/d"
                },
                solvingSteps: [
                    "Identify capacitor geometry or configuration",
                    "Calculate capacitance using appropriate formula",
                    "Apply Q = CV to find charge or voltage",
                    "Calculate energy if needed: U = ½CV²",
                    "Handle combinations using series/parallel rules"
                ],
                applications: [
                    "Energy storage in electronic circuits",
                    "Flash photography",
                    "Power factor correction",
                    "Touch screens and sensors"
                ]
            },

            current_resistance: {
                title: "Current and Resistance",
                concepts: [
                    "Current is charge flow rate",
                    "Resistance opposes current flow",
                    "Ohm's law relates V, I, and R",
                    "Power dissipation in resistors"
                ],
                theory: "Electric current is the rate of charge flow through a conductor. Resistance is the opposition to current flow, caused by collisions of charge carriers with atoms in the material.",
                keyFormulas: {
                    "Current Definition": "I = dQ/dt",
                    "Ohm's Law": "V = IR",
                    "Resistance": "R = ρL/A",
                    "Power": "P = IV = I²R = V²/R",
                    "Current Density": "J = I/A = σE"
                },
                solvingSteps: [
                    "Identify circuit parameters (V, I, or R)",
                    "Apply Ohm's law: V = IR",
                    "Calculate missing quantity",
                    "Determine power dissipation if needed",
                    "Check units and reasonableness"
                ],
                applications: [
                    "Electrical circuits and devices",
                    "Heating elements",
                    "Fuses and circuit breakers",
                    "Electrical safety systems"
                ]
            },

            dc_circuits: {
                title: "DC Circuits",
                concepts: [
                    "Kirchhoff's voltage law (loop rule)",
                    "Kirchhoff's current law (junction rule)",
                    "Series and parallel resistor combinations",
                    "EMF and internal resistance"
                ],
                theory: "DC circuits involve steady current flow. Kirchhoff's laws, based on charge and energy conservation, allow analysis of complex circuits with multiple loops and junctions.",
                keyFormulas: {
                    "Series Resistance": "R_eq = ΣRᵢ",
                    "Parallel Resistance": "1/R_eq = Σ(1/Rᵢ)",
                    "Voltage Law (KVL)": "ΣV = 0 (around loop)",
                    "Current Law (KCL)": "ΣI_in = ΣI_out (at junction)",
                    "EMF with Internal r": "V = ε - Ir"
                },
                solvingSteps: [
                    "Draw circuit diagram clearly",
                    "Identify series/parallel combinations",
                    "Simplify using equivalent resistances",
                    "Apply Kirchhoff's laws for complex circuits",
                    "Solve system of equations for unknowns"
                ],
                applications: [
                    "Electronic device design",
                    "Battery and power supply circuits",
                    "Automotive electrical systems",
                    "Measurement instruments"
                ]
            },

            rc_circuits: {
                title: "RC Circuits (Charging and Discharging)",
                concepts: [
                    "Exponential charging/discharging behavior",
                    "Time constant τ = RC",
                    "Initial and steady-state analysis",
                    "Energy considerations"
                ],
                theory: "RC circuits exhibit transient behavior when switches are opened or closed. The time constant determines how quickly the capacitor charges or discharges.",
                keyFormulas: {
                    "Time Constant": "τ = RC",
                    "Charging": "Q(t) = Q_max(1 - e^(-t/τ))",
                    "Discharging": "Q(t) = Q₀e^(-t/τ)",
                    "Voltage Charging": "V_C(t) = V₀(1 - e^(-t/τ))",
                    "Current": "I(t) = I₀e^(-t/τ)"
                },
                solvingSteps: [
                    "Identify initial conditions (t = 0)",
                    "Determine final steady-state values",
                    "Calculate time constant τ = RC",
                    "Apply appropriate exponential formula",
                    "Solve for desired quantity at given time"
                ],
                applications: [
                    "Camera flash circuits",
                    "Timing circuits",
                    "Signal filtering",
                    "Defibrillator circuits"
                ]
            },

            magnetic_field: {
                title: "Magnetic Fields and Forces",
                concepts: [
                    "Magnetic field B⃗ measured in Tesla",
                    "Moving charges experience magnetic force",
                    "Force perpendicular to velocity and field",
                    "Right-hand rule for force direction"
                ],
                theory: "Magnetic fields exert forces on moving charges and current-carrying wires. The force is perpendicular to both the velocity and the magnetic field, causing circular or helical motion.",
                keyFormulas: {
                    "Magnetic Force on Charge": "F⃗ = qv⃗ × B⃗",
                    "Force Magnitude": "F = qvB sin θ",
                    "Force on Current": "F⃗ = IL⃗ × B⃗",
                    "Lorentz Force": "F⃗ = q(E⃗ + v⃗ × B⃗)",
                    "Circular Motion Radius": "r = mv/(qB)"
                },
                solvingSteps: [
                    "Identify charge, velocity, and magnetic field",
                    "Determine angle between v⃗ and B⃗",
                    "Calculate force magnitude: F = qvB sin θ",
                    "Apply right-hand rule for direction",
                    "Analyze resulting motion (circular, helical, etc.)"
                ],
                applications: [
                    "Mass spectrometers",
                    "Cyclotrons and particle accelerators",
                    "Hall effect sensors",
                    "Cathode ray tubes"
                ]
            },

            biot_savart: {
                title: "Biot-Savart Law and Ampère's Law",
                concepts: [
                    "Magnetic field created by current",
                    "Field circulates around current",
                    "Superposition of magnetic fields",
                    "Symmetry simplifies calculations"
                ],
                theory: "The Biot-Savart law describes the magnetic field created by current-carrying conductors. Ampère's law provides a simpler method for high-symmetry situations.",
                keyFormulas: {
                    "Biot-Savart Law": "dB⃗ = (μ₀/4π)(I dL⃗ × r̂)/r²",
                    "Long Straight Wire": "B = μ₀I/(2πr)",
                    "Center of Loop": "B = μ₀I/(2R)",
                    "Ampère's Law": "∮B⃗·dL⃗ = μ₀I_enc",
                    "Solenoid": "B = μ₀nI"
                },
                solvingSteps: [
                    "Identify current configuration and symmetry",
                    "Choose appropriate law (Biot-Savart or Ampère)",
                    "Set up integration or apply formula",
                    "Calculate field magnitude",
                    "Determine field direction using right-hand rule"
                ],
                applications: [
                    "Electromagnets",
                    "MRI machines",
                    "Magnetic levitation",
                    "Current sensors"
                ]
            },

            faradays_law: {
                title: "Faraday's Law and Electromagnetic Induction",
                concepts: [
                    "Changing magnetic flux induces EMF",
                    "Lenz's law determines induced current direction",
                    "Motional EMF in moving conductors",
                    "Induced electric fields"
                ],
                theory: "Faraday's law states that a changing magnetic flux through a loop induces an EMF. This is the principle behind generators, transformers, and inductors.",
                keyFormulas: {
                    "Faraday's Law": "ε = -dΦ_B/dt",
                    "Magnetic Flux": "Φ_B = ∫B⃗·dA⃗ = BA cos θ",
                    "Motional EMF": "ε = BLv",
                    "Induced E-field": "∮E⃗·dL⃗ = -dΦ_B/dt",
                    "EMF in N-turn Coil": "ε = -N(dΦ_B/dt)"
                },
                solvingSteps: [
                    "Calculate initial magnetic flux Φ_B",
                    "Determine how flux changes with time",
                    "Apply Faraday's law: ε = -dΦ_B/dt",
                    "Use Lenz's law for induced current direction",
                    "Calculate induced current: I = ε/R"
                ],
                applications: [
                    "Electric generators",
                    "Transformers",
                    "Induction cooktops",
                    "Magnetic braking systems"
                ]
            },

            inductance: {
                title: "Inductance and Inductors",
                concepts: [
                    "Inductance opposes current changes",
                    "Self-inductance and mutual inductance",
                    "Energy stored in magnetic field",
                    "RL circuit time constant"
                ],
                theory: "Inductance is the property of a circuit element that opposes changes in current. It arises from the magnetic field created by the current itself.",
                keyFormulas: {
                    "Self-Inductance": "ε = -L(dI/dt)",
                    "Inductance Definition": "L = NΦ_B/I",
                    "Solenoid Inductance": "L = μ₀n²Al",
                    "Energy Stored": "U = ½LI²",
                    "RL Time Constant": "τ = L/R"
                },
                solvingSteps: [
                    "Identify inductor parameters (L, N, geometry)",
                    "Determine current or rate of change",
                    "Apply appropriate formula",
                    "Calculate induced EMF or energy",
                    "Analyze RL circuit behavior if applicable"
                ],
                applications: [
                    "Power supply filters",
                    "Transformers and inductors",
                    "Radio frequency circuits",
                    "Energy storage in switching converters"
                ]
            },

            ac_circuits: {
                title: "AC Circuits",
                concepts: [
                    "Sinusoidal voltage and current",
                    "Phase relationships in R, L, C components",
                    "Impedance and reactance",
                    "Power in AC circuits (real, reactive, apparent)"
                ],
                theory: "AC circuits involve time-varying voltages and currents. Capacitors and inductors introduce phase shifts between voltage and current, described by complex impedance.",
                keyFormulas: {
                    "AC Voltage": "V(t) = V₀ sin(ωt)",
                    "Capacitive Reactance": "X_C = 1/(ωC)",
                    "Inductive Reactance": "X_L = ωL",
                    "Impedance": "Z = √(R² + (X_L - X_C)²)",
                    "RMS Values": "V_rms = V₀/√2",
                    "Average Power": "P_avg = V_rms I_rms cos φ"
                },
                solvingSteps: [
                    "Identify circuit components and frequency",
                    "Calculate reactances X_L and X_C",
                    "Determine total impedance Z",
                    "Calculate current using I = V/Z",
                    "Find phase angle and power"
                ],
                applications: [
                    "Power distribution systems",
                    "Radio and communication circuits",
                    "Audio amplifiers",
                    "Resonant circuits and filters"
                ]
            },

            maxwells_equations: {
                title: "Maxwell's Equations",
                concepts: [
                    "Fundamental laws of electromagnetism",
                    "Unification of electricity and magnetism",
                    "Electromagnetic waves",
                    "Displacement current"
                ],
                theory: "Maxwell's equations are four fundamental equations that describe all classical electromagnetic phenomena. They predict electromagnetic waves traveling at the speed of light.",
                keyFormulas: {
                    "Gauss's Law (E)": "∮E⃗·dA⃗ = Q_enc/ε₀",
                    "Gauss's Law (B)": "∮B⃗·dA⃗ = 0",
                    "Faraday's Law": "∮E⃗·dL⃗ = -dΦ_B/dt",
                    "Ampère-Maxwell Law": "∮B⃗·dL⃗ = μ₀(I_enc + ε₀ dΦ_E/dt)",
                    "Wave Speed": "c = 1/√(μ₀ε₀)"
                },
                solvingSteps: [
                    "Identify which Maxwell equation applies",
                    "Set up appropriate integral or derivative",
                    "Apply symmetry considerations",
                    "Solve for unknown field or flux",
                    "Interpret physical meaning"
                ],
                applications: [
                    "Electromagnetic wave propagation",
                    "Radio and microwave technology",
                    "Optics and light",
                    "Antenna design"
                ]
            }
        };
    }

    setThemeColors() {
        const themes = {
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
                vectorBg: '#fff8e1',
                fieldBg: '#f3e5f5'
            },
            physics: {
                background: '#ffffff',
                gridColor: '#34495e',
                headerBg: '#2980b9',
                headerText: '#ffffff',
                sectionBg: '#ecf0f1',
                sectionText: '#2c3e50',
                cellBg: '#ffffff',
                cellText: '#34495e',
                resultBg: '#d5f4e6',
                resultText: '#27ae60',
                formulaBg: '#fdebd0',
                formulaText: '#d68910',
                stepBg: '#f8f9fa',
                stepText: '#2c3e50',
                borderColor: '#34495e',
                mathBg: '#e8f8f5',
                mathText: '#16a085',
                graphBg: '#fef5e7',
                vectorBg: '#ebf5fb',
                fieldBg: '#fdf2e9'
            }
        };

        this.colors = themes[this.theme] || themes.scientific;
    }

    initializeElectricityMagnetismSolvers() {
        this.physicsTypes = {
            // Electrostatics
            coulombs_law: {
                patterns: [
                    /coulomb.*law/i,
                    /electric.*force.*charge/i,
                    /electrostatic.*force/i,
                    /force.*between.*charges/i
                ],
                solver: this.solveCoulombsLaw.bind(this),
                name: "Coulomb's Law",
                category: 'electrostatics',
                description: 'Calculates electrostatic force between charges'
            },

            electric_field: {
                patterns: [
                    /electric.*field/i,
                    /field.*due.*to.*charge/i,
                    /e.*field/i,
                    /field.*strength/i
                ],
                solver: this.solveElectricField.bind(this),
                name: 'Electric Field',
                category: 'electrostatics',
                description: 'Calculates electric field from charges'
            },

            electric_potential: {
                patterns: [
                    /electric.*potential/i,
                    /voltage/i,
                    /potential.*energy/i,
                    /work.*electric.*field/i
                ],
                solver: this.solveElectricPotential.bind(this),
                name: 'Electric Potential',
                category: 'electrostatics',
                description: 'Calculates electric potential and potential energy'
            },

            gauss_law: {
                patterns: [
                    /gauss.*law/i,
                    /electric.*flux/i,
                    /gaussian.*surface/i,
                    /enclosed.*charge/i
                ],
                solver: this.solveGaussLaw.bind(this),
                name: "Gauss's Law",
                category: 'electrostatics',
                description: 'Applies Gauss\'s law for symmetric charge distributions'
            },

            // Capacitance
            capacitance: {
                patterns: [
                    /capacitance/i,
                    /capacitor/i,
                    /parallel.*plate/i,
                    /dielectric/i
                ],
                solver: this.solveCapacitance.bind(this),
                name: 'Capacitance',
                category: 'capacitance',
                description: 'Calculates capacitance, charge, voltage, and energy'
            },

            capacitor_combinations: {
                patterns: [
                    /capacitor.*series/i,
                    /capacitor.*parallel/i,
                    /capacitor.*network/i,
                    /equivalent.*capacitance/i
                ],
                solver: this.solveCapacitorCombinations.bind(this),
                name: 'Capacitor Combinations',
                category: 'capacitance',
                description: 'Calculates equivalent capacitance for series/parallel'
            },

            // Current and Resistance
            ohms_law: {
                patterns: [
                    /ohm.*law/i,
                    /voltage.*current.*resistance/i,
                    /v.*i.*r/i,
                    /resistance.*calculation/i
                ],
                solver: this.solveOhmsLaw.bind(this),
                name: "Ohm's Law",
                category: 'circuits',
                description: 'Applies Ohm\'s law: V = IR'
            },

            power_dissipation: {
                patterns: [
                    /power.*dissipation/i,
                    /power.*resistor/i,
                    /joule.*heating/i,
                    /electrical.*power/i
                ],
                solver: this.solvePowerDissipation.bind(this),
                name: 'Power Dissipation',
                category: 'circuits',
                description: 'Calculates power in resistive elements'
            },

            resistor_combinations: {
                patterns: [
                    /resistor.*series/i,
                    /resistor.*parallel/i,
                    /equivalent.*resistance/i,
                    /resistor.*network/i
                ],
                solver: this.solveResistorCombinations.bind(this),
                name: 'Resistor Combinations',
                category: 'circuits',
                description: 'Calculates equivalent resistance'
            },

            // DC Circuits
            kirchhoff_voltage: {
                patterns: [
                    /kirchhoff.*voltage/i,
                    /kvl/i,
                    /loop.*rule/i,
                    /voltage.*loop/i
                ],
                solver: this.solveKirchhoffVoltage.bind(this),
                name: "Kirchhoff's Voltage Law",
                category: 'circuits',
                description: 'Applies KVL to circuit loops'
            },

            kirchhoff_current: {
                patterns: [
                    /kirchhoff.*current/i,
                    /kcl/i,
                    /junction.*rule/i,
                    /current.*junction/i
                ],
                solver: this.solveKirchhoffCurrent.bind(this),
                name: "Kirchhoff's Current Law",
                category: 'circuits',
                description: 'Applies KCL to circuit junctions'
            },

            voltage_divider: {
                patterns: [
                    /voltage.*divider/i,
                    /divide.*voltage/i,
                    /potential.*divider/i
                ],
                solver: this.solveVoltageDivider.bind(this),
                name: 'Voltage Divider',
                category: 'circuits',
                description: 'Calculates voltage division in series resistors'
            },

            current_divider: {
                patterns: [
                    /current.*divider/i,
                    /divide.*current/i,
                    /parallel.*current/i
                ],
                solver: this.solveCurrentDivider.bind(this),
                name: 'Current Divider',
                category: 'circuits',
                description: 'Calculates current division in parallel resistors'
            },

            // RC Circuits
            rc_charging: {
                patterns: [
                    /rc.*charging/i,
                    /capacitor.*charging/i,
                    /charge.*capacitor/i,
                    /rc.*transient/i
                ],
                solver: this.solveRCCharging.bind(this),
                name: 'RC Circuit Charging',
                category: 'transient_circuits',
                description: 'Analyzes capacitor charging in RC circuits'
            },

            rc_discharging: {
                patterns: [
                    /rc.*discharging/i,
                    /capacitor.*discharging/i,
                    /discharge.*capacitor/i
                ],
                solver: this.solveRCDischarging.bind(this),
                name: 'RC Circuit Discharging',
                category: 'transient_circuits',
                description: 'Analyzes capacitor discharging in RC circuits'
            },

            rc_time_constant: {
                patterns: [
                    /rc.*time.*constant/i,
                    /tau.*rc/i,
                    /time.*constant.*capacitor/i
                ],
                solver: this.solveRCTimeConstant.bind(this),
                name: 'RC Time Constant',
                category: 'transient_circuits',
                description: 'Calculates RC time constant and related quantities'
            },

            // Magnetism
            magnetic_force_charge: {
                patterns: [
                    /magnetic.*force.*charge/i,
                    /lorentz.*force/i,
                    /force.*moving.*charge/i,
                    /qvb/i
                ],
                solver: this.solveMagneticForceCharge.bind(this),
                name: 'Magnetic Force on Moving Charge',
                category: 'magnetism',
                description: 'Calculates force on charge in magnetic field'
            },

            magnetic_force_current: {
                patterns: [
                    /magnetic.*force.*wire/i,
                    /force.*current.*wire/i,
                    /ilb/i,
                    /force.*conductor/i
                ],
                solver: this.solveMagneticForceCurrent.bind(this),
                name: 'Magnetic Force on Current',
                category: 'magnetism',
                description: 'Calculates force on current-carrying wire'
            },

            circular_motion_magnetic: {
                patterns: [
                    /circular.*motion.*magnetic/i,
                    /radius.*magnetic.*field/i,
                    /cyclotron.*radius/i,
                    /helical.*motion/i
                ],
                solver: this.solveCircularMotionMagnetic.bind(this),
                name: 'Circular Motion in Magnetic Field',
                category: 'magnetism',
                description: 'Analyzes charged particle motion in B-field'
            },

            // Magnetic Fields from Currents
            biot_savart_wire: {
                patterns: [
                    /biot.*savart/i,
                    /magnetic.*field.*wire/i,
                    /field.*straight.*wire/i,
                    /field.*current/i
                ],
                solver: this.solveBiotSavartWire.bind(this),
                name: 'Magnetic Field from Wire (Biot-Savart)',
                category: 'magnetic_sources',
                description: 'Calculates B-field from current-carrying wire'
            },

            ampere_law: {
                patterns: [
                    /ampere.*law/i,
                    /amperian.*loop/i,
                    /field.*solenoid/i,
                    /field.*toroid/i
                ],
                solver: this.solveAmpereLaw.bind(this),
                name: "Ampère's Law",
                category: 'magnetic_sources',
                description: 'Applies Ampère\'s law for symmetric configurations'
            },

            magnetic_field_loop: {
                patterns: [
                    /field.*center.*loop/i,
                    /circular.*loop.*field/i,
                    /coil.*center/i
                ],
                solver: this.solveMagneticFieldLoop.bind(this),
                name: 'Magnetic Field from Current Loop',
                category: 'magnetic_sources',
                description: 'Calculates B-field at center of circular loop'
            },

            solenoid_field: {
                patterns: [
                    /solenoid.*field/i,
                    /field.*inside.*solenoid/i,
                    /long.*coil/i
                ],
                solver: this.solveSolenoidField.bind(this),
                name: 'Solenoid Magnetic Field',
                category: 'magnetic_sources',
                description: 'Calculates uniform B-field inside solenoid'
            },

            // Electromagnetic Induction
            faraday_law: {
                patterns: [
                    /faraday.*law/i,
                    /induced.*emf/i,
                    /electromagnetic.*induction/i,
                    /changing.*flux/i
                ],
                solver: this.solveFaradayLaw.bind(this),
                name: "Faraday's Law",
                category: 'induction',
                description: 'Calculates induced EMF from changing flux'
            },

            motional_emf: {
                patterns: [
                    /motional.*emf/i,
                    /moving.*conductor/i,
                    /blv/i,
                    /rod.*magnetic.*field/i
                ],
                solver: this.solveMotionalEMF.bind(this),
                name: 'Motional EMF',
                category: 'induction',
                description: 'Calculates EMF in moving conductor'
            },

            lenz_law: {
                patterns: [
                    /lenz.*law/i,
                    /direction.*induced.*current/i,
                    /oppose.*change/i
                ],
                solver: this.solveLenzLaw.bind(this),
                name: "Lenz's Law",
                category: 'induction',
                description: 'Determines direction of induced current'
            },

            // Inductance
            self_inductance: {
                patterns: [
                    /self.*inductance/i,
                    /inductance.*solenoid/i,
                    /inductor/i,
                    /calculate.*l/i
                ],
                solver: this.solveSelfInductance.bind(this),
                name: 'Self-Inductance',
                category: 'inductance',
                description: 'Calculates self-inductance of coils'
            },

            rl_circuits: {
                patterns: [
                    /rl.*circuit/i,
                    /inductor.*resistor/i,
                    /current.*growth.*inductor/i,
                    /rl.*time.*constant/i
                ],
                solver: this.solveRLCircuit.bind(this),
                name: 'RL Circuits',
                category: 'transient_circuits',
                description: 'Analyzes current in RL circuits'
            },

            energy_inductor: {
                patterns: [
                    /energy.*inductor/i,
                    /magnetic.*energy/i,
                    /stored.*energy.*coil/i
                ],
                solver: this.solveEnergyInductor.bind(this),
                name: 'Energy Stored in Inductor',
                category: 'inductance',
                description: 'Calculates magnetic energy storage'
            },

            // AC Circuits
            ac_resistor: {
                patterns: [
                    /ac.*resistor/i,
                    /resistor.*ac/i,
                    /sinusoidal.*resistor/i
                ],
                solver: this.solveACResistor.bind(this),
                name: 'AC Circuit - Resistor',
                category: 'ac_circuits',
                description: 'Analyzes resistor in AC circuit'
            },

            ac_capacitor: {
                patterns: [
                    /ac.*capacitor/i,
                    /capacitive.*reactance/i,
                    /xc/i,
                    /capacitor.*ac/i
                ],
                solver: this.solveACCapacitor.bind(this),
                name: 'AC Circuit - Capacitor',
                category: 'ac_circuits',
                description: 'Analyzes capacitor in AC circuit'
            },

            ac_inductor: {
                patterns: [
                    /ac.*inductor/i,
                    /inductive.*reactance/i,
                    /xl/i,
                    /inductor.*ac/i
                ],
                solver: this.solveACInductor.bind(this),
                name: 'AC Circuit - Inductor',
                category: 'ac_circuits',
                description: 'Analyzes inductor in AC circuit'
            },

            rlc_circuit: {
                patterns: [
                    /rlc.*circuit/i,
                    /series.*rlc/i,
                    /impedance/i,
                    /resonance/i
                ],
                solver: this.solveRLCCircuit.bind(this),
                name: 'RLC Circuit',
                category: 'ac_circuits',
                description: 'Analyzes series RLC circuit'
            },

            ac_power: {
                patterns: [
                    /ac.*power/i,
                    /power.*factor/i,
                    /rms.*power/i,
                    /average.*power.*ac/i
                ],
                solver: this.solveACPower.bind(this),
                name: 'AC Power',
                category: 'ac_circuits',
                description: 'Calculates power in AC circuits'
            },

            // Electromagnetic Waves
            em_wave_properties: {
                patterns: [
                    /electromagnetic.*wave/i,
                    /em.*wave/i,
                    /wave.*speed.*light/i,
                    /wavelength.*frequency/i
                ],
                solver: this.solveEMWaveProperties.bind(this),
                name: 'Electromagnetic Wave Properties',
                category: 'em_waves',
                description: 'Calculates wavelength, frequency, and energy'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            coulombs_law: {
                'Calculate force magnitude': [
                    'Forgetting to square the distance in denominator',
                    'Not using absolute value for charges when finding magnitude',
                    'Confusing force direction with magnitude calculation'
                ],
                'Determine direction': [
                    'Mixing up attraction vs repulsion rules',
                    'Not considering both charge signs'
                ]
            },
            electric_field: {
                'Calculate field magnitude': [
                    'Using charge of test particle instead of source charge',
                    'Forgetting that field is force per unit charge',
                    'Sign errors in superposition'
                ]
            },
            capacitance: {
                'Calculate energy': [
                    'Using wrong energy formula (½QV vs ½CV²)',
                    'Not converting units properly (μF to F)',
                    'Confusing charge Q with energy U'
                ]
            },
            rc_charging: {
                'Calculate at time t': [
                    'Using wrong exponential (e^(-t/τ) vs 1-e^(-t/τ))',
                    'Forgetting to calculate time constant first',
                    'Mixing up charging vs discharging formulas'
                ]
            },
            magnetic_force_charge: {
                'Calculate force': [
                    'Forgetting sin θ term for angle between v and B',
                    'Using wrong hand rule for direction',
                    'Not converting velocity to m/s or B to Tesla'
                ]
            },
            faraday_law: {
                'Calculate induced EMF': [
                    'Forgetting negative sign (Lenz\'s law)',
                    'Not calculating rate of change correctly',
                    'Missing the N (number of turns) factor'
                ]
            }
        };

        this.errorPrevention = {
            unit_checking: {
                reminder: 'Always verify units are consistent (SI units preferred)',
                method: 'Convert all quantities to base SI units before calculation'
            },
            vector_directions: {
                reminder: 'Use right-hand rule consistently for cross products',
                method: 'Draw diagrams showing vector directions'
            },
            sign_conventions: {
                reminder: 'Establish sign conventions clearly at the start',
                method: 'Mark positive/negative directions on diagrams'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Physical intuition and real-world meaning',
                language: 'intuitive explanations with analogies'
            },
            procedural: {
                focus: 'Step-by-step calculation procedure',
                language: 'clear computational instructions'
            },
            visual: {
                focus: 'Vector diagrams and field visualizations',
                language: 'spatial and geometric descriptions'
            },
            mathematical: {
                focus: 'Rigorous mathematical derivations',
                language: 'precise mathematical notation and proofs'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple physics terms',
                detail: 'essential concepts only',
                examples: 'concrete numerical examples'
            },
            intermediate: {
                vocabulary: 'standard physics terminology',
                detail: 'main concepts with explanations',
                examples: 'mix of numerical and conceptual'
            },
            detailed: {
                vocabulary: 'full technical vocabulary',
                detail: 'comprehensive theory and derivations',
                examples: 'abstract and generalized cases'
            },
            scaffolded: {
                vocabulary: 'progressive complexity',
                detail: 'guided discovery approach',
                examples: 'carefully sequenced progression'
            }
        };
    }

    // ==================== MAIN SOLVER METHOD ====================

    solvePhysicsProblem(config) {
        const { equation, scenario, parameters, problemType, context } = config;

        try {
            this.currentProblem = this.parsePhysicsProblem(equation, scenario, parameters, problemType, context);
            this.currentSolution = this.solvePhysicsProblem_Internal(this.currentProblem);
            this.solutionSteps = this.generatePhysicsSteps(this.currentProblem, this.currentSolution);
            this.generatePhysicsGraphData();
            this.generatePhysicsWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                value: this.currentSolution?.value,
                unit: this.currentSolution?.unit
            };

        } catch (error) {
            throw new Error(`Failed to solve physics problem: ${error.message}`);
        }
    }

    parsePhysicsProblem(equation, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = equation ? this.cleanMathExpression(equation) : '';

        if (problemType && this.physicsTypes[problemType]) {
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

        // Auto-detect physics problem type
        for (const [type, config] of Object.entries(this.physicsTypes)) {
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

        throw new Error(`Unable to recognize physics problem type from: ${equation || scenario}`);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/×/g, '*')
            .replace(/·/g, '*')
            .replace(/÷/g, '/')
            .trim();
    }

    solvePhysicsProblem_Internal(problem) {
        const solver = this.physicsTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for physics problem type: ${problem.type}`);
        }
        return solver(problem);
    }

    // ==================== PHYSICS SOLVERS ====================

    // ELECTROSTATICS SOLVERS

    solveCoulombsLaw(problem) {
        const { q1, q2, r, findForce = true, k } = problem.parameters;
        const kConstant = k || this.physicsConstants.k;

        if (findForce) {
            const force = kConstant * Math.abs(q1 * q2) / (r * r);
            const forceDirection = (q1 * q2 > 0) ? 'repulsive' : 'attractive';

            return {
                type: 'coulombs_law',
                force: force,
                unit: 'N',
                direction: forceDirection,
                q1: q1,
                q2: q2,
                distance: r,
                coulombConstant: kConstant,
                formula: 'F = k|q₁q₂|/r²',
                interpretation: `The ${forceDirection} force between the charges is ${force.toExponential(3)} N`
            };
        }

        // Could solve for distance or charge if force is given
        return {
            type: 'coulombs_law',
            note: 'Specify what to find (force, distance, or charge)'
        };
    }

solveElectricField(problem) {
        const { q, r, testCharge, k } = problem.parameters;
        const kConstant = k || this.physicsConstants.k;

        const fieldMagnitude = kConstant * Math.abs(q) / (r * r);
        const fieldDirection = q > 0 ? 'away from charge' : 'toward charge';

        let force = null;
        if (testCharge !== undefined) {
            force = fieldMagnitude * Math.abs(testCharge);
        }

        return {
            type: 'electric_field',
            electricField: fieldMagnitude,
            unit: 'N/C',
            direction: fieldDirection,
            sourceCharge: q,
            distance: r,
            force: force,
            forceUnit: force ? 'N' : null,
            formula: 'E = kq/r²',
            interpretation: `Electric field magnitude is ${fieldMagnitude.toExponential(3)} N/C pointing ${fieldDirection}`
        };
    }

    solveElectricPotential(problem) {
        const { q, r, q2, calculateEnergy = false, k } = problem.parameters;
        const kConstant = k || this.physicsConstants.k;

        const potential = kConstant * q / r;
        
        let potentialEnergy = null;
        if (calculateEnergy && q2 !== undefined) {
            potentialEnergy = kConstant * q * q2 / r;
        }

        return {
            type: 'electric_potential',
            potential: potential,
            unit: 'V',
            potentialEnergy: potentialEnergy,
            energyUnit: potentialEnergy ? 'J' : null,
            sourceCharge: q,
            distance: r,
            formula: 'V = kq/r',
            energyFormula: calculateEnergy ? 'U = kq₁q₂/r' : null,
            interpretation: `Electric potential at ${r} m is ${potential.toExponential(3)} V`
        };
    }

    solveGaussLaw(problem) {
        const { geometry, charge, radius, area, length, epsilon0 } = problem.parameters;
        const eps0 = epsilon0 || this.physicsConstants.epsilon0;

        let electricField = null;
        let flux = null;

        switch(geometry) {
            case 'sphere':
                if (radius && charge) {
                    const surfaceArea = 4 * Math.PI * radius * radius;
                    electricField = charge / (eps0 * surfaceArea);
                    flux = charge / eps0;
                }
                break;

            case 'cylinder':
                if (radius && length && charge) {
                    const lateralArea = 2 * Math.PI * radius * length;
                    electricField = charge / (eps0 * lateralArea);
                    flux = charge / eps0;
                }
                break;

            case 'plane':
                if (area && charge) {
                    const surfaceChargeDensity = charge / area;
                    electricField = surfaceChargeDensity / (2 * eps0);
                    flux = charge / eps0;
                }
                break;
        }

        return {
            type: 'gauss_law',
            geometry: geometry,
            electricField: electricField,
            fieldUnit: 'N/C',
            flux: flux,
            fluxUnit: 'N⋅m²/C',
            enclosedCharge: charge,
            formula: '∮E⋅dA = Q_enc/ε₀',
            interpretation: geometry ? `For ${geometry} geometry, E = ${electricField?.toExponential(3)} N/C` : 'Specify geometry'
        };
    }

    // CAPACITANCE SOLVERS

    solveCapacitance(problem) {
        const { C, Q, V, area, distance, dielectric = 1, epsilon0, findEnergy = false } = problem.parameters;
        const eps0 = epsilon0 || this.physicsConstants.epsilon0;

        let capacitance = C;
        let charge = Q;
        let voltage = V;
        let energy = null;

        // Calculate capacitance if geometry given
        if (!capacitance && area && distance) {
            capacitance = dielectric * eps0 * area / distance;
        }

        // Apply Q = CV relationship
        if (capacitance && voltage && !charge) {
            charge = capacitance * voltage;
        } else if (capacitance && charge && !voltage) {
            voltage = charge / capacitance;
        } else if (charge && voltage && !capacitance) {
            capacitance = charge / voltage;
        }

        // Calculate energy if requested
        if (findEnergy && capacitance && voltage) {
            energy = 0.5 * capacitance * voltage * voltage;
        } else if (findEnergy && charge && voltage) {
            energy = 0.5 * charge * voltage;
        }

        return {
            type: 'capacitance',
            capacitance: capacitance,
            capacitanceUnit: 'F',
            charge: charge,
            chargeUnit: 'C',
            voltage: voltage,
            voltageUnit: 'V',
            energy: energy,
            energyUnit: energy ? 'J' : null,
            dielectric: dielectric,
            formulas: {
                definition: 'C = Q/V',
                parallelPlate: 'C = ε₀A/d',
                energy: 'U = ½CV²'
            }
        };
    }

    solveCapacitorCombinations(problem) {
        const { capacitors, configuration } = problem.parameters;

        let equivalent = 0;

        if (configuration === 'series') {
            // 1/C_eq = Σ(1/C_i)
            const reciprocalSum = capacitors.reduce((sum, C) => sum + 1/C, 0);
            equivalent = 1 / reciprocalSum;
        } else if (configuration === 'parallel') {
            // C_eq = ΣC_i
            equivalent = capacitors.reduce((sum, C) => sum + C, 0);
        }

        return {
            type: 'capacitor_combinations',
            configuration: configuration,
            capacitors: capacitors,
            equivalent: equivalent,
            unit: 'F',
            formula: configuration === 'series' ? '1/C_eq = Σ(1/Cᵢ)' : 'C_eq = ΣCᵢ'
        };
    }

    // CURRENT AND RESISTANCE SOLVERS

    solveOhmsLaw(problem) {
        const { V, I, R } = problem.parameters;

        let voltage = V;
        let current = I;
        let resistance = R;

        // Apply V = IR
        if (!voltage && current && resistance) {
            voltage = current * resistance;
        } else if (!current && voltage && resistance) {
            current = voltage / resistance;
        } else if (!resistance && voltage && current) {
            resistance = voltage / current;
        }

        return {
            type: 'ohms_law',
            voltage: voltage,
            voltageUnit: 'V',
            current: current,
            currentUnit: 'A',
            resistance: resistance,
            resistanceUnit: 'Ω',
            formula: 'V = IR',
            interpretation: `With V=${voltage}V, I=${current}A, R=${resistance}Ω`
        };
    }

    solvePowerDissipation(problem) {
        const { V, I, R } = problem.parameters;

        let power = null;

        if (V && I) {
            power = V * I;
        } else if (I && R) {
            power = I * I * R;
        } else if (V && R) {
            power = V * V / R;
        }

        return {
            type: 'power_dissipation',
            power: power,
            unit: 'W',
            voltage: V,
            current: I,
            resistance: R,
            formulas: {
                primary: 'P = IV',
                current: 'P = I²R',
                voltage: 'P = V²/R'
            },
            interpretation: `Power dissipated is ${power} W`
        };
    }

    solveResistorCombinations(problem) {
        const { resistors, configuration } = problem.parameters;

        let equivalent = 0;

        if (configuration === 'series') {
            // R_eq = ΣR_i
            equivalent = resistors.reduce((sum, R) => sum + R, 0);
        } else if (configuration === 'parallel') {
            // 1/R_eq = Σ(1/R_i)
            const reciprocalSum = resistors.reduce((sum, R) => sum + 1/R, 0);
            equivalent = 1 / reciprocalSum;
        }

        return {
            type: 'resistor_combinations',
            configuration: configuration,
            resistors: resistors,
            equivalent: equivalent,
            unit: 'Ω',
            formula: configuration === 'series' ? 'R_eq = ΣRᵢ' : '1/R_eq = Σ(1/Rᵢ)'
        };
    }

    // DC CIRCUIT SOLVERS

    solveKirchhoffVoltage(problem) {
        const { voltages, emfs } = problem.parameters;

        const totalVoltage = voltages ? voltages.reduce((sum, v) => sum + v, 0) : 0;
        const totalEMF = emfs ? emfs.reduce((sum, e) => sum + e, 0) : 0;

        return {
            type: 'kirchhoff_voltage',
            voltages: voltages,
            emfs: emfs,
            sum: totalVoltage,
            law: 'ΣV = 0 around closed loop',
            interpretation: 'Sum of voltage drops equals sum of EMFs in loop'
        };
    }

    solveKirchhoffCurrent(problem) {
        const { currentsIn, currentsOut } = problem.parameters;

        const totalIn = currentsIn ? currentsIn.reduce((sum, i) => sum + i, 0) : 0;
        const totalOut = currentsOut ? currentsOut.reduce((sum, i) => sum + i, 0) : 0;

        return {
            type: 'kirchhoff_current',
            currentsIn: currentsIn,
            currentsOut: currentsOut,
            totalIn: totalIn,
            totalOut: totalOut,
            balanced: Math.abs(totalIn - totalOut) < 1e-10,
            law: 'ΣI_in = ΣI_out at junction',
            interpretation: 'Current entering junction equals current leaving'
        };
    }

    solveVoltageDivider(problem) {
        const { Vin, R1, R2 } = problem.parameters;

        const Vout = Vin * R2 / (R1 + R2);

        return {
            type: 'voltage_divider',
            inputVoltage: Vin,
            outputVoltage: Vout,
            R1: R1,
            R2: R2,
            unit: 'V',
            formula: 'V_out = V_in × R₂/(R₁+R₂)',
            interpretation: `Output voltage across R2 is ${Vout.toFixed(3)} V`
        };
    }

    solveCurrentDivider(problem) {
        const { Itotal, R1, R2 } = problem.parameters;

        // Current through R1 (larger resistance gets less current)
        const I1 = Itotal * R2 / (R1 + R2);
        const I2 = Itotal * R1 / (R1 + R2);

        return {
            type: 'current_divider',
            totalCurrent: Itotal,
            currentR1: I1,
            currentR2: I2,
            R1: R1,
            R2: R2,
            unit: 'A',
            formula: 'I₁ = I_total × R₂/(R₁+R₂)',
            interpretation: `Current divides: I1=${I1.toFixed(3)}A, I2=${I2.toFixed(3)}A`
        };
    }

    // RC CIRCUIT SOLVERS

    solveRCCharging(problem) {
        const { R, C, V0, t, findWhat = 'voltage' } = problem.parameters;

        const tau = R * C;
        const timeFraction = t / tau;

        let voltage = null;
        let charge = null;
        let current = null;

        if (findWhat === 'voltage' || findWhat === 'all') {
            voltage = V0 * (1 - Math.exp(-timeFraction));
        }

        if (findWhat === 'charge' || findWhat === 'all') {
            const Qmax = C * V0;
            charge = Qmax * (1 - Math.exp(-timeFraction));
        }

        if (findWhat === 'current' || findWhat === 'all') {
            current = (V0 / R) * Math.exp(-timeFraction);
        }

        return {
            type: 'rc_charging',
            resistance: R,
            capacitance: C,
            sourceVoltage: V0,
            time: t,
            timeConstant: tau,
            voltage: voltage,
            voltageUnit: voltage ? 'V' : null,
            charge: charge,
            chargeUnit: charge ? 'C' : null,
            current: current,
            currentUnit: current ? 'A' : null,
            formulas: {
                timeConstant: 'τ = RC',
                voltage: 'V_C(t) = V₀(1 - e^(-t/τ))',
                charge: 'Q(t) = Q_max(1 - e^(-t/τ))',
                current: 'I(t) = (V₀/R)e^(-t/τ)'
            },
            interpretation: `At t=${t}s (${(timeFraction).toFixed(2)}τ), capacitor has charged to ${voltage ? (voltage/V0*100).toFixed(1) : 'N/A'}% of maximum`
        };
    }

    solveRCDischarging(problem) {
        const { R, C, Q0, V0, t, findWhat = 'voltage' } = problem.parameters;

        const tau = R * C;
        const timeFraction = t / tau;

        let voltage = null;
        let charge = null;
        let current = null;

        if (findWhat === 'voltage' || findWhat === 'all') {
            voltage = V0 * Math.exp(-timeFraction);
        }

        if (findWhat === 'charge' || findWhat === 'all') {
            charge = Q0 * Math.exp(-timeFraction);
        }

        if (findWhat === 'current' || findWhat === 'all') {
            current = (V0 / R) * Math.exp(-timeFraction);
        }

        return {
            type: 'rc_discharging',
            resistance: R,
            capacitance: C,
            initialVoltage: V0,
            initialCharge: Q0,
            time: t,
            timeConstant: tau,
            voltage: voltage,
            voltageUnit: voltage ? 'V' : null,
            charge: charge,
            chargeUnit: charge ? 'C' : null,
            current: current,
            currentUnit: current ? 'A' : null,
            formulas: {
                timeConstant: 'τ = RC',
                voltage: 'V_C(t) = V₀e^(-t/τ)',
                charge: 'Q(t) = Q₀e^(-t/τ)',
                current: 'I(t) = (V₀/R)e^(-t/τ)'
            },
            interpretation: `At t=${t}s, capacitor has discharged to ${voltage ? (voltage/V0*100).toFixed(1) : 'N/A'}% of initial value`
        };
    }

    solveRCTimeConstant(problem) {
        const { R, C, findTime, percentage } = problem.parameters;

        const tau = R * C;
        
        let timeForPercentage = null;
        if (findTime && percentage) {
            // For charging: V = V0(1 - e^(-t/τ)), solve for t
            // For percentage p: p/100 = 1 - e^(-t/τ)
            // e^(-t/τ) = 1 - p/100
            // -t/τ = ln(1 - p/100)
            // t = -τ ln(1 - p/100)
            timeForPercentage = -tau * Math.log(1 - percentage/100);
        }

        return {
            type: 'rc_time_constant',
            resistance: R,
            capacitance: C,
            timeConstant: tau,
            unit: 's',
            timeForPercentage: timeForPercentage,
            percentageReached: percentage,
            formula: 'τ = RC',
            keyPoints: {
                '1τ': '63.2% charged',
                '2τ': '86.5% charged',
                '3τ': '95.0% charged',
                '4τ': '98.2% charged',
                '5τ': '99.3% charged (essentially full)'
            },
            interpretation: `Time constant is ${tau.toExponential(3)} s`
        };
    }

    // MAGNETISM SOLVERS

    solveMagneticForceCharge(problem) {
        const { q, v, B, angle = 90, findRadius = false, mass } = problem.parameters;

        const angleRad = angle * Math.PI / 180;
        const force = Math.abs(q) * v * B * Math.sin(angleRad);
        
        let radius = null;
        let period = null;
        let frequency = null;

        if (findRadius && mass) {
            // For circular motion: F = mv²/r and F = qvB
            // Therefore: r = mv/(qB)
            radius = mass * v / (Math.abs(q) * B);
            period = 2 * Math.PI * radius / v;
            frequency = 1 / period;
        }

        return {
            type: 'magnetic_force_charge',
            charge: q,
            velocity: v,
            magneticField: B,
            angle: angle,
            force: force,
            forceUnit: 'N',
            radius: radius,
            radiusUnit: radius ? 'm' : null,
            period: period,
            periodUnit: period ? 's' : null,
            frequency: frequency,
            frequencyUnit: frequency ? 'Hz' : null,
            formula: 'F = qvB sin θ',
            circularMotion: findRadius ? 'r = mv/(qB)' : null,
            interpretation: `Magnetic force is ${force.toExponential(3)} N perpendicular to both v and B`
        };
    }

    solveMagneticForceCurrent(problem) {
        const { I, L, B, angle = 90 } = problem.parameters;

        const angleRad = angle * Math.PI / 180;
        const force = I * L * B * Math.sin(angleRad);

        return {
            type: 'magnetic_force_current',
            current: I,
            length: L,
            magneticField: B,
            angle: angle,
            force: force,
            unit: 'N',
            formula: 'F = ILB sin θ',
            interpretation: `Force on current-carrying wire is ${force.toExponential(3)} N`
        };
    }

    solveCircularMotionMagnetic(problem) {
        const { q, m, v, B, E = 0 } = problem.parameters;

        const radius = m * v / (Math.abs(q) * B);
        const period = 2 * Math.PI * m / (Math.abs(q) * B);
        const frequency = Math.abs(q) * B / (2 * Math.PI * m);
        const angularFrequency = Math.abs(q) * B / m;

        // If electric field present, find velocity for straight-line motion
        let driftVelocity = null;
        if (E > 0) {
            driftVelocity = E / B;
        }

        return {
            type: 'circular_motion_magnetic',
            charge: q,
            mass: m,
            velocity: v,
            magneticField: B,
            electricField: E,
            radius: radius,
            radiusUnit: 'm',
            period: period,
            periodUnit: 's',
            frequency: frequency,
            frequencyUnit: 'Hz',
            angularFrequency: angularFrequency,
            angularFrequencyUnit: 'rad/s',
            driftVelocity: driftVelocity,
            driftVelocityUnit: driftVelocity ? 'm/s' : null,
            formulas: {
                radius: 'r = mv/(qB)',
                period: 'T = 2πm/(qB)',
                frequency: 'f = qB/(2πm)',
                cyclotronFrequency: 'ω_c = qB/m'
            },
            interpretation: `Particle moves in circle of radius ${radius.toExponential(3)} m`
        };
    }

    // MAGNETIC FIELD SOURCES SOLVERS

    solveBiotSavartWire(problem) {
        const { I, r, mu0 } = problem.parameters;
        const mu = mu0 || this.physicsConstants.mu0;

        // Magnetic field from infinite straight wire
        const B = mu * I / (2 * Math.PI * r);

        return {
            type: 'biot_savart_wire',
            current: I,
            distance: r,
            magneticField: B,
            unit: 'T',
            permeability: mu,
            formula: 'B = μ₀I/(2πr)',
            interpretation: `Magnetic field at distance ${r} m is ${B.toExponential(3)} T, circulating around wire`
        };
    }

    solveAmpereLaw(problem) {
        const { geometry, I, r, N, length, mu0 } = problem.parameters;
        const mu = mu0 || this.physicsConstants.mu0;

        let B = null;

        switch(geometry) {
            case 'solenoid':
                if (N && length && I) {
                    const n = N / length; // turns per unit length
                    B = mu * n * I;
                }
                break;

            case 'toroid':
                if (N && r && I) {
                    B = mu * N * I / (2 * Math.PI * r);
                }
                break;

            case 'wire':
                if (I && r) {
                    B = mu * I / (2 * Math.PI * r);
                }
                break;
        }

        return {
            type: 'ampere_law',
            geometry: geometry,
            current: I,
            magneticField: B,
            unit: 'T',
            formula: '∮B⋅dl = μ₀I_enc',
            specificFormula: geometry === 'solenoid' ? 'B = μ₀nI' : geometry === 'toroid' ? 'B = μ₀NI/(2πr)' : 'B = μ₀I/(2πr)',
            interpretation: `For ${geometry}, B = ${B?.toExponential(3)} T`
        };
    }

    solveMagneticFieldLoop(problem) {
        const { I, R, mu0 } = problem.parameters;
        const mu = mu0 || this.physicsConstants.mu0;

        // Field at center of circular loop
        const B = mu * I / (2 * R);

        return {
            type: 'magnetic_field_loop',
            current: I,
            radius: R,
            magneticField: B,
            unit: 'T',
            formula: 'B = μ₀I/(2R)',
            interpretation: `Field at center of loop is ${B.toExponential(3)} T perpendicular to loop plane`
        };
    }

    solveSolenoidField(problem) {
        const { N, L, I, mu0 } = problem.parameters;
        const mu = mu0 || this.physicsConstants.mu0;

        const n = N / L; // turns per unit length
        const B = mu * n * I;

        return {
            type: 'solenoid_field',
            turns: N,
            length: L,
            turnsPerLength: n,
            current: I,
            magneticField: B,
            unit: 'T',
            formula: 'B = μ₀nI',
            interpretation: `Uniform field inside solenoid is ${B.toExponential(3)} T parallel to axis`
        };
    }

    // ELECTROMAGNETIC INDUCTION SOLVERS

    solveFaradayLaw(problem) {
        const { B, A, angle = 0, dB_dt, dA_dt, dAngle_dt, N = 1 } = problem.parameters;

        let flux = null;
        let emf = null;

        // Calculate flux if B and A given
        if (B !== undefined && A !== undefined) {
            const angleRad = angle * Math.PI / 180;
            flux = B * A * Math.cos(angleRad);
        }

        // Calculate EMF from rate of change
        if (dB_dt !== undefined && A !== undefined) {
            emf = -N * A * dB_dt;
        } else if (B !== undefined && dA_dt !== undefined) {
            emf = -N * B * dA_dt;
        } else if (flux !== undefined && dAngle_dt !== undefined) {
            const angleRad = angle * Math.PI / 180;
            emf = N * B * A * Math.sin(angleRad) * dAngle_dt;
        }

        return {
            type: 'faraday_law',
            magneticField: B,
            area: A,
            angle: angle,
            turns: N,
            flux: flux,
            fluxUnit: flux ? 'Wb' : null,
            inducedEMF: emf,
            emfUnit: emf ? 'V' : null,
            formula: 'ε = -N(dΦ_B/dt)',
            fluxFormula: 'Φ_B = BA cos θ',
            interpretation: emf ? `Induced EMF is ${emf.toExponential(3)} V (Lenz's law determines direction)` : 'Provide rate of change to calculate EMF'
        };
    }

    solveMotionalEMF(problem) {
        const { B, L, v, angle = 90 } = problem.parameters;

        const angleRad = angle * Math.PI / 180;
        const emf = B * L * v * Math.sin(angleRad);

        return {
            type: 'motional_emf',
            magneticField: B,
            length: L,
            velocity: v,
            angle: angle,
            emf: emf,
            unit: 'V',
            formula: 'ε = BLv sin θ',
            interpretation: `Motional EMF in moving conductor is ${emf.toExponential(3)} V`
        };
    }

    solveLenzLaw(problem) {
        const { fluxIncreasing, fluxDirection } = problem.parameters;

        let inducedFieldDirection = null;
        let inducedCurrentDirection = null;

        if (fluxIncreasing !== undefined && fluxDirection) {
            inducedFieldDirection = fluxIncreasing ? 'opposite to flux' : 'same as flux';
            inducedCurrentDirection = 'creates field to oppose flux change';
        }

        return {
            type: 'lenz_law',
            fluxIncreasing: fluxIncreasing,
            fluxDirection: fluxDirection,
            inducedFieldDirection: inducedFieldDirection,
            inducedCurrentDirection: inducedCurrentDirection,
            principle: "Induced current opposes the change in magnetic flux",
            interpretation: `Induced field points ${inducedFieldDirection}`
        };
    }

    // INDUCTANCE SOLVERS

    solveSelfInductance(problem) {
        const { N, A, length, mu0, geometry = 'solenoid' } = problem.parameters;
        const mu = mu0 || this.physicsConstants.mu0;

        let L = null;

        if (geometry === 'solenoid' && N && A && length) {
            const n = N / length;
            L = mu * n * n * A * length;
        }

        return {
            type: 'self_inductance',
            geometry: geometry,
            turns: N,
            area: A,
            length: length,
            inductance: L,
            unit: 'H',
            formula: 'L = μ₀n²Al (solenoid)',
            interpretation: L ? `Self-inductance is ${L.toExponential(3)} H` : 'Provide geometry parameters'
        };
    }

    solveRLCircuit(problem) {
        const { R, L, V0, t, rising = true } = problem.parameters;

        const tau = L / R;
        const timeFraction = t / tau;

        let current = null;
        let voltage_L = null;
        let voltage_R = null;

        if (rising) {
            // Current rising: I(t) = (V0/R)(1 - e^(-t/τ))
            current = (V0 / R) * (1 - Math.exp(-timeFraction));
            voltage_L = V0 * Math.exp(-timeFraction);
            voltage_R = V0 * (1 - Math.exp(-timeFraction));
        } else {
            // Current falling: I(t) = I0 e^(-t/τ)
            const I0 = V0 / R;
            current = I0 * Math.exp(-timeFraction);
            voltage_L = -L * (I0 / tau) * Math.exp(-timeFraction);
            voltage_R = V0 * Math.exp(-timeFraction);
        }

        return {
            type: 'rl_circuit',
            resistance: R,
            inductance: L,
            sourceVoltage: V0,
            time: t,
            timeConstant: tau,
            current: current,
            currentUnit: 'A',
            voltageInductor: voltage_L,
            voltageResistor: voltage_R,
            voltageUnit: 'V',
            formulas: {
                timeConstant: 'τ = L/R',
                currentRising: 'I(t) = (V₀/R)(1 - e^(-t/τ))',
                currentFalling: 'I(t) = I₀e^(-t/τ)'
            },
            interpretation: `At t=${t}s, current is ${current.toExponential(3)} A (${(timeFraction).toFixed(2)}τ)`
        };
    }

    solveEnergyInductor(problem) {
        const { L, I } = problem.parameters;

        const energy = 0.5 * L * I * I;

        return {
            type: 'energy_inductor',
            inductance: L,
            current: I,
            energy: energy,
            unit: 'J',
            formula: 'U = ½LI²',
            interpretation: `Energy stored in magnetic field is ${energy.toExponential(3)} J`
        };
    }

    // AC CIRCUIT SOLVERS

    solveACResistor(problem) {
        const { R, V0, I0, omega, findCurrent = true } = problem.parameters;

        let current_amplitude = I0;
        let voltage_amplitude = V0;

        if (findCurrent && V0 && R) {
            current_amplitude = V0 / R;
        } else if (!findCurrent && I0 && R) {
            voltage_amplitude = I0 * R;
        }

        return {
            type: 'ac_resistor',
            resistance: R,
            voltageAmplitude: voltage_amplitude,
            currentAmplitude: current_amplitude,
            phaseShift: 0,
            impedance: R,
            impedanceUnit: 'Ω',
            formula: 'V = IR (in phase)',
            interpretation: `In resistor, voltage and current are in phase with I₀ = ${current_amplitude?.toExponential(3)} A`
        };
    }

    solveACCapacitor(problem) {
        const { C, V0, omega, frequency } = problem.parameters;

        const f = frequency || (omega / (2 * Math.PI));
        const w = omega || (2 * Math.PI * frequency);

        const X_C = 1 / (w * C);
        const I0 = V0 / X_C;

        return {
            type: 'ac_capacitor',
            capacitance: C,
            frequency: f,
            angularFrequency: w,
            voltageAmplitude: V0,
            currentAmplitude: I0,
            capacitiveReactance: X_C,
            reactanceUnit: 'Ω',
            phaseShift: 90,
            formula: 'X_C = 1/(ωC)',
            phaseRelation: 'Current leads voltage by 90°',
            interpretation: `Capacitive reactance is ${X_C.toExponential(3)} Ω, I₀ = ${I0.toExponential(3)} A`
        };
    }

    solveACInductor(problem) {
        const { L, V0, omega, frequency } = problem.parameters;

        const f = frequency || (omega / (2 * Math.PI));
        const w = omega || (2 * Math.PI * frequency);

        const X_L = w * L;
        const I0 = V0 / X_L;

        return {
            type: 'ac_inductor',
            inductance: L,
            frequency: f,
            angularFrequency: w,
            voltageAmplitude: V0,
            currentAmplitude: I0,
            inductiveReactance: X_L,
            reactanceUnit: 'Ω',
            phaseShift: -90,
            formula: 'X_L = ωL',
            phaseRelation: 'Current lags voltage by 90°',
            interpretation: `Inductive reactance is ${X_L.toExponential(3)} Ω, I₀ = ${I0.toExponential(3)} A`
        };
    }

    solveRLCCircuit(problem) {
        const { R, L, C, V0, omega, frequency } = problem.parameters;

        const f = frequency || (omega / (2 * Math.PI));
        const w = omega || (2 * Math.PI * frequency);

        const X_L = w * L;
        const X_C = 1 / (w * C);
        const Z = Math.sqrt(R * R + (X_L - X_C) * (X_L - X_C));
        const I0 = V0 / Z;

        const phi = Math.atan2(X_L - X_C, R);
        const phiDegrees = phi * 180 / Math.PI;

        // Resonance frequency
        const f_resonance = 1 / (2 * Math.PI * Math.sqrt(L * C));

        return {
            type: 'rlc_circuit',
            resistance: R,
            inductance: L,
            capacitance: C,
            frequency: f,
            angularFrequency: w,
            voltageAmplitude: V0,
            currentAmplitude: I0,
            inductiveReactance: X_L,
            capacitiveReactance: X_C,
            impedance: Z,
            impedanceUnit: 'Ω',
            phaseAngle: phiDegrees,
            phaseAngleUnit: '°',
            resonanceFrequency: f_resonance,
            resonanceFrequencyUnit: 'Hz',
            formulas: {
                impedance: 'Z = √(R² + (X_L - X_C)²)',
                phaseAngle: 'φ = arctan((X_L - X_C)/R)',
                resonance: 'f₀ = 1/(2π√(LC))'
            },
            interpretation: `Impedance is ${Z.toExponential(3)} Ω, current amplitude is ${I0.toExponential(3)} A, phase angle is ${phiDegrees.toFixed(1)}°`
        };
    }

    solveACPower(problem) {
        const { Vrms, Irms, phi, phaseDegrees } = problem.parameters;

        const phaseAngle = phi || (phaseDegrees * Math.PI / 180);

        const apparentPower = Vrms * Irms;
        const realPower = Vrms * Irms * Math.cos(phaseAngle);
        const reactivePower = Vrms * Irms * Math.sin(phaseAngle);
        const powerFactor = Math.cos(phaseAngle);

        return {
            type: 'ac_power',
            Vrms: Vrms,
            Irms: Irms,
            phaseAngle: phaseAngle * 180 / Math.PI,
            apparentPower: apparentPower,
            apparentPowerUnit: 'VA',
            realPower: realPower,
            realPowerUnit: 'W',
            reactivePower: reactivePower,
            reactivePowerUnit: 'VAR',
            powerFactor: powerFactor,
            formulas: {
                apparent: 'S = V_rms × I_rms',
                real: 'P = V_rms × I_rms × cos φ',
                reactive: 'Q = V_rms × I_rms × sin φ',
                powerFactor: 'pf = cos φ'
            },
            interpretation: `Real power dissipated is ${realPower.toExponential(3)} W with power factor ${powerFactor.toFixed(3)}`
        };
    }

    // ELECTROMAGNETIC WAVES SOLVER

    solveEMWaveProperties(problem) {
        const { wavelength, frequency, energy, photonEnergy } = problem.parameters;
        const c = this.physicsConstants.c;
        const h = this.physicsConstants.h;

        let lambda = wavelength;
        let f = frequency;
        let E = energy || photonEnergy;

        // Use c = λf
        if (!lambda && f) {
            lambda = c / f;
        } else if (!f && lambda) {
            f = c / lambda;
        }

        // Use E = hf
        if (!E && f) {
            E = h * f;
        } else if (!f && E) {
            f = E / h;
            lambda = c / f;
        }

        return {
            type: 'em_wave_properties',
            wavelength: lambda,
            wavelengthUnit: 'm',
            frequency: f,
            frequencyUnit: 'Hz',
            photonEnergy: E,
            energyUnit: 'J',
            speed: c,
            speedUnit: 'm/s',
            formulas: {
                waveRelation: 'c = λf',
                photonEnergy: 'E = hf',
                constants: `c = ${c.toExponential(3)} m/s, h = ${h.toExponential(3)} J⋅s`
            },
            interpretation: `EM wave with λ = ${lambda?.toExponential(3)} m, f = ${f?.toExponential(3)} Hz, E = ${E?.toExponential(3)} J`
        };
    }

    // ==================== STEP GENERATION ====================

    generatePhysicsSteps(problem, solution) {
        let baseSteps = this.generateBasePhysicsSteps(problem, solution);

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

    generateBasePhysicsSteps(problem, solution) {
        const { type } = problem;

        switch (type) {
            case 'coulombs_law':
                return this.generateCoulombsLawSteps(problem, solution);
            case 'electric_field':
                return this.generateElectricFieldSteps(problem, solution);
            case 'capacitance':
                return this.generateCapacitanceSteps(problem, solution);
            case 'rc_charging':
                return this.generateRCChargingSteps(problem, solution);
            case 'magnetic_force_charge':
                return this.generateMagneticForceSteps(problem, solution);
            case 'faraday_law':
                return this.generateFaradayLawSteps(problem, solution);
            default:
                return this.generateGenericPhysicsSteps(problem, solution);
        }
    }

    generateCoulombsLawSteps(problem, solution) {
        const { q1, q2, r } = problem.parameters;
        const k = this.physicsConstants.k;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify given quantities',
            description: 'List the charges and separation distance',
            givenData: {
                charge1: `q₁ = ${q1} C`,
                charge2: `q₂ = ${q2} C`,
                distance: `r = ${r} m`,
                constant: `k = ${k.toExponential(3)} N⋅m²/C²`
            },
            reasoning: 'Coulomb\'s law requires these three quantities to calculate electrostatic force',
            physicalMeaning: 'These charges will exert a force on each other that depends on their magnitudes and separation'
        });

        steps.push({
            stepNumber: 2,
            step: 'Apply Coulomb\'s Law',
            description: 'Calculate force magnitude using F = k|q₁q₂|/r²',
            formula: 'F = k|q₁q₂|/r²',
            beforeExpression: 'F = ?',
            calculation: `F = (${k.toExponential(3)}) × |${q1} × ${q2}| / (${r})²`,
            afterExpression: `F = ${solution.force.toExponential(3)} N`,
            reasoning: 'The force magnitude depends on the product of charges and inverse square of distance',
            physicalMeaning: 'Doubling the distance would reduce the force to one-fourth its value'
        });

        steps.push({
            stepNumber: 3,
            step: 'Determine force direction',
            description: 'Check if charges attract or repel',
            analysis: {
                chargeProduct: q1 * q2,
                productSign: q1 * q2 > 0 ? 'positive' : 'negative',
                forceType: solution.direction
            },
            rule: 'Like charges repel (same sign), unlike charges attract (opposite signs)',
            conclusion: `The force is ${solution.direction}`,
            physicalMeaning: `The charges ${solution.direction === 'repulsive' ? 'push away from' : 'pull toward'} each other along the line connecting them`
        });

        return steps;
    }

    generateElectricFieldSteps(problem, solution) {
        const { q, r } = problem.parameters;
        const k = this.physicsConstants.k;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify source charge and location',
            description: 'Note the charge creating the field and where we are calculating',
            givenData: {
                sourceCharge: `q = ${q} C`,
                distance: `r = ${r} m`,
                constant: `k = ${k.toExponential(3)} N⋅m²/C²`
            },
            reasoning: 'Electric field represents the force per unit charge at any point in space',
            physicalMeaning: 'A test charge placed at this point would experience a force proportional to the field'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate field magnitude',
            description: 'Use E = kq/r² for point charge field',
            formula: 'E = k|q|/r²',
            beforeExpression: 'E = ?',
            calculation: `E = (${k.toExponential(3)}) × |${q}| / (${r})²`,
            afterExpression: `E = ${solution.electricField.toExponential(3)} N/C`,
            reasoning: 'Field strength decreases with square of distance from source',
            physicalMeaning: 'This is the force that would act on a +1 C test charge placed at this location'
        });

        steps.push({
            stepNumber: 3,
            step: 'Determine field direction',
            description: 'Apply the convention for electric field direction',
            rule: 'Field points away from positive charges, toward negative charges',
            chargeSign: q > 0 ? 'positive' : 'negative',
            fieldDirection: solution.direction,
            physicalMeaning: 'A positive test charge would be pushed in the direction of the field vector'
        });

        return steps;
    }

    generateCapacitanceSteps(problem, solution) {
        const { C, Q, V, area, distance } = problem.parameters;
        const steps = [];

        if (area && distance) {
            steps.push({
                stepNumber: 1,
                step: 'Calculate capacitance from geometry',
                description: 'Use parallel-plate capacitor formula',
                formula: 'C = ε₀A/d',
                givenData: {
                    area: `A = ${area} m²`,
                    separation: `d = ${distance} m`,
                    permittivity: `ε₀ = ${this.physicsConstants.epsilon0.toExponential(3)} F/m`
                },
                calculation: `C = (${this.physicsConstants.epsilon0.toExponential(3)}) × ${area} / ${distance}`,
                result: `C = ${solution.capacitance.toExponential(3)} F`,
                physicalMeaning: 'Larger area and smaller separation increase charge storage capacity'
            });
        }

        steps.push({
            stepNumber: steps.length + 1,
            step: 'Apply Q = CV relationship',
            description: 'Use the fundamental capacitor equation',
            formula: 'Q = CV',
            beforeExpression: solution.charge ? `Q = ${solution.capacitance.toExponential(3)} × ${solution.voltage}` : 
                               `V = ${solution.charge.toExponential(3)} / ${solution.capacitance.toExponential(3)}`,
            afterExpression: solution.charge ? `Q = ${solution.charge.toExponential(3)} C` : 
                            `V = ${solution.voltage.toExponential(3)} V`,
            reasoning: 'Charge stored is directly proportional to voltage applied',
            physicalMeaning: 'Doubling the voltage doubles the stored charge'
        });

        if (solution.energy) {
            steps.push({
                stepNumber: steps.length + 1,
                step: 'Calculate stored energy',
                description: 'Determine energy stored in electric field',
                formula: 'U = ½CV²',
                calculation: `U = 0.5 × ${solution.capacitance.toExponential(3)} × (${solution.voltage})²`,
                result: `U = ${solution.energy.toExponential(3)} J`,
                physicalMeaning: 'This energy is stored in the electric field between the plates',
                alternativeFormulas: 'U = ½QV = Q²/(2C)'
            });
        }

        return steps;
    }

    generateRCChargingSteps(problem, solution) {
        const { R, C, V0, t } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Calculate time constant',
            description: 'Find the characteristic time τ = RC',
            formula: 'τ = RC',
            calculation: `τ = ${R} × ${C}`,
            result: `τ = ${solution.timeConstant.toExponential(3)} s`,
            reasoning: 'Time constant determines how quickly capacitor charges',
            physicalMeaning: 'After time τ, capacitor is charged to 63.2% of maximum',
            keyBehavior: {
                '1τ': '63.2% charged',
                '2τ': '86.5% charged',
                '3τ': '95.0% charged',
                '5τ': '99.3% charged (essentially complete)'
            }
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate voltage at time t',
            description: 'Apply exponential charging formula',
            formula: 'V_C(t) = V₀(1 - e^(-t/τ))',
            givenTime: `t = ${t} s`,
            timeFraction: `t/τ = ${(t/solution.timeConstant).toFixed(3)}`,
            calculation: `V_C(${t}) = ${V0} × (1 - e^(-${t}/${solution.timeConstant.toExponential(3)}))`,
            result: `V_C = ${solution.voltage.toExponential(3)} V`,
            percentageCharged: `${((solution.voltage/V0)*100).toFixed(1)}% of maximum`,
            physicalMeaning: 'Voltage increases exponentially, approaching V₀ asymptotically'
        });

        if (solution.current) {
            steps.push({
                stepNumber: 3,
                step: 'Calculate current at time t',
                description: 'Find instantaneous charging current',
                formula: 'I(t) = (V₀/R)e^(-t/τ)',
                calculation: `I(${t}) = (${V0}/${R}) × e^(-${t}/${solution.timeConstant.toExponential(3)})`,
                result: `I = ${solution.current.toExponential(3)} A`,
                reasoning: 'Current is maximum at t=0 and decreases exponentially',
                physicalMeaning: 'As capacitor charges, voltage across it increases, so current decreases'
            });
        }

        return steps;
    }

    generateMagneticForceSteps(problem, solution) {
        const { q, v, B, angle } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify given quantities',
            description: 'List charge, velocity, magnetic field, and angle',
            givenData: {
                charge: `q = ${q} C`,
                velocity: `v = ${v} m/s`,
                magneticField: `B = ${B} T`,
                angle: `θ = ${angle}°`
            },
            reasoning: 'Magnetic force depends on all these quantities',
            physicalMeaning: 'Force acts perpendicular to both velocity and magnetic field'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate force magnitude',
            description: 'Apply F = qvB sin θ',
            formula: 'F = qvB sin θ',
            angleInRadians: `θ = ${(angle * Math.PI / 180).toFixed(4)} rad`,
            sinTheta: `sin(${angle}°) = ${Math.sin(angle * Math.PI / 180).toFixed(4)}`,
            calculation: `F = |${q}| × ${v} × ${B} × ${Math.sin(angle * Math.PI / 180).toFixed(4)}`,
            result: `F = ${solution.force.toExponential(3)} N`,
            physicalMeaning: 'Maximum force occurs when velocity is perpendicular to field (θ = 90°)',
            specialCases: {
                parallel: 'F = 0 when v ∥ B (θ = 0°)',
                perpendicular: 'F = qvB when v ⊥ B (θ = 90°)'
            }
        });

        steps.push({
            stepNumber: 3,
            step: 'Determine force direction',
            description: 'Use right-hand rule for cross product',
            rightHandRule: {
                fingers: 'Point fingers in direction of velocity (v)',
                palm: 'Curl toward magnetic field (B)',
                thumb: 'Thumb points in direction of force (for positive charge)'
            },
            chargeSign: q > 0 ? 'positive' : 'negative',
            directionNote: q < 0 ? 'For negative charge, reverse the direction' : 'Direction as indicated by right-hand rule',
            physicalMeaning: 'Force is always perpendicular to plane containing v and B'
        });

        if (solution.radius) {
            steps.push({
                stepNumber: 4,
                step: 'Calculate circular motion radius',
                description: 'Find radius for circular path in magnetic field',
                formula: 'r = mv/(qB)',
                reasoning: 'Magnetic force provides centripetal force for circular motion',
                result: `r = ${solution.radius.toExponential(3)} m`,
                period: `T = ${solution.period.toExponential(3)} s`,
                frequency: `f = ${solution.frequency.toExponential(3)} Hz`,
                physicalMeaning: 'Charged particle moves in circular or helical path'
            });
        }

        return steps;
    }

    generateFaradayLawSteps(problem, solution) {
        const { B, A, N, angle } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Calculate magnetic flux',
            description: 'Find flux through the loop(s)',
            formula: 'Φ_B = BA cos θ',
            givenData: {
                magneticField: `B = ${B} T`,
                area: `A = ${A} m²`,
                angle: `θ = ${angle}°`,
                turns: N > 1 ? `N = ${N} turns` : 'Single loop'
            },
            calculation: `Φ_B = ${B} × ${A} × cos(${angle}°)`,
            result: solution.flux ? `Φ_B = ${solution.flux.toExponential(3)} Wb` : 'Calculate flux',
            physicalMeaning: 'Flux represents the "amount" of magnetic field passing through the loop',
            maxFlux: 'Maximum when loop perpendicular to field (θ = 0°)'
        });

        if (solution.inducedEMF) {
            steps.push({
                stepNumber: 2,
                step: 'Calculate induced EMF',
                description: 'Apply Faraday\'s law of induction',
                formula: 'ε = -N(dΦ_B/dt)',
                reasoning: 'EMF is induced when magnetic flux through loop changes',
                calculation: 'Use rate of change of flux',
                result: `ε = ${solution.inducedEMF.toExponential(3)} V`,
                negativeSign: 'Negative sign represents Lenz\'s law (opposition to change)',
                physicalMeaning: 'Changing flux induces electric field that drives current'
            });

            steps.push({
                stepNumber: 3,
                step: 'Apply Lenz\'s Law',
                description: 'Determine direction of induced current',
                lenzLaw: 'Induced current creates magnetic field to oppose flux change',
                reasoning: 'Nature opposes changes - this is conservation of energy',
                application: {
                    increasingFlux: 'Induced field opposes increase',
                    decreasingFlux: 'Induced field opposes decrease'
                },
                physicalMeaning: 'Direction ensures energy conservation in electromagnetic induction'
            });
        }

        return steps;
    }

    generateGenericPhysicsSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Physics problem',
            description: 'Solve using appropriate physics principles',
            problemType: problem.type,
            solution: solution,
            reasoning: 'Apply relevant equations and physical laws'
        }];
    }

    // ==================== ENHANCED EXPLANATION METHODS ====================

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanation(step, problem),
                procedural: this.getProceduralExplanation(step),
                visual: this.getVisualExplanation(step, problem),
                mathematical: this.getMathematicalExplanation(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisites(step, problem.type),
                keyVocabulary: this.identifyKeyVocabulary(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        return enhanced;
    }

    getConceptualExplanation(step, problem) {
        const conceptualExplanations = {
            'Identify given quantities': 'We start by organizing what we know. In physics, clearly identifying given information is crucial for selecting the right equations and approach.',
            'Calculate force magnitude': 'Force represents the interaction between objects. The formula encodes how the physical quantities relate to produce this interaction.',
            'Apply Coulomb\'s Law': 'Coulomb\'s law describes how electric charges interact through space. The inverse-square relationship means force weakens rapidly with distance.',
            'Calculate time constant': 'The time constant characterizes how quickly a system responds to changes. It combines resistance (opposition) and capacitance (storage) into a single meaningful quantity.',
            'Determine force direction': 'Direction is as important as magnitude. In vector physics, knowing where forces point is essential for understanding motion.'
        };

        return conceptualExplanations[step.step] || 'This step advances us toward the solution by applying physical principles.';
    }

    getProceduralExplanation(step) {
        if (step.formula && step.calculation) {
            return `1. Write the formula: ${step.formula}
2. Substitute known values: ${step.calculation}
3. Evaluate the expression
4. Express result with proper units
5. Check if answer is physically reasonable`;
        }
        return 'Follow the standard procedure for this type of physics calculation.';
    }

    getVisualExplanation(step, problem) {
        const visualExplanations = {
            'coulombs_law': 'Visualize two charges with force vectors pointing along the line connecting them. Attractive forces point toward each other, repulsive forces point away.',
            'electric_field': 'Picture field lines radiating outward from positive charges, inward toward negative charges. Density of lines represents field strength.',
            'magnetic_force_charge': 'Imagine the right-hand rule: fingers along velocity, curl toward B-field, thumb shows force direction. Force creates circular motion.',
            'rc_charging': 'Visualize voltage climbing exponentially toward maximum, like filling a tank where flow decreases as pressure builds up.',
            'faraday_law': 'Picture magnetic field lines passing through a loop. Changing the number of lines induces EMF - like cutting field lines creates voltage.'
        };

        return visualExplanations[problem.type] || 'Visualize the physical situation and how quantities relate geometrically.';
    }

    getMathematicalExplanation(step) {
        if (step.formula) {
            return `Formula ${step.formula} is derived from fundamental physical laws. Each term has specific meaning and units. The mathematical form reflects the underlying physical relationships.`;
        }
        return 'The mathematics precisely describes the physical relationships between quantities.';
    }

    getAdaptiveExplanation(step, explanationLevel) {
        const adaptations = {
            basic: {
                vocabulary: 'simple physics terms',
                detail: 'essential concepts only',
                format: 'short explanations'
            },
            intermediate: {
                vocabulary: 'standard physics terminology',
                detail: 'main concepts with explanations',
                format: 'clear step-by-step format'
            },
            detailed: {
                vocabulary: 'full technical vocabulary',
                detail: 'comprehensive theory and derivations',
                format: 'thorough analysis with multiple perspectives'
            },
            scaffolded: {
                vocabulary: 'progressive complexity',
                detail: 'guided discovery approach',
                format: 'questions leading to understanding'
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
            connection: `Step ${stepIndex + 1} builds on Step ${stepIndex} by using the calculated result to proceed further`,
            progression: 'Each step brings us closer to the complete solution',
            relationship: 'Physics problems often require sequential calculations where each result feeds into the next'
        };
    }

    identifyPrerequisites(step, problemType) {
        const prerequisites = {
            'Calculate force magnitude': ['Algebra', 'Understanding of force concept', 'Unit conversions'],
            'Apply Coulomb\'s Law': ['Inverse-square relationships', 'Vector concepts', 'Electric charge'],
            'Calculate time constant': ['Exponential functions', 'RC circuits', 'Time-dependent behavior'],
            'Use right-hand rule': ['3D spatial reasoning', 'Cross products', 'Vector directions']
        };

        return prerequisites[step.step] || ['Basic physics concepts', 'Algebra'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'Identify given quantities': ['charge', 'distance', 'force', 'field'],
            'Calculate force magnitude': ['magnitude', 'vector', 'inverse-square law'],
            'Calculate time constant': ['exponential', 'time constant', 'transient response'],
            'Apply Coulomb\'s Law': ['electrostatic force', 'permittivity', 'point charge']
        };

        return vocabulary[step.step] || [];
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

    generateStepBridge(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.result || currentStep.afterExpression || 'completed this step'}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary because: ${this.explainStepNecessity(currentStep, nextStep)}`,
            howItHelps: `This will help us by: ${this.explainStepBenefit(nextStep)}`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue solving the problem systematically`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description.toLowerCase()}`;
    }

    explainStepNecessity(currentStep, nextStep) {
        return `${nextStep.step} builds on the result from ${currentStep.step} to advance the solution`;
    }

    explainStepBenefit(nextStep) {
        return `completing ${nextStep.step} will bring us closer to the final answer`;
    }

    generatePreventionTips(step, problemType) {
        const tips = {
            'Calculate force magnitude': [
                'Always square the distance in denominator',
                'Use absolute value for charges when finding magnitude',
                'Check units: forces should be in Newtons'
            ],
            'Calculate time constant': [
                'Verify R is in ohms and C is in farads',
                'Time constant has units of seconds',
                'Larger τ means slower response'
            ]
        };

        return tips[step.step] || ['Double-check your arithmetic', 'Verify units', 'Check if answer is physically reasonable'];
    }

    generateCheckPoints(step) {
        return [
            'Are all values substituted correctly?',
            'Do the units work out properly?',
            'Is the result within reasonable physical bounds?',
            'Does the answer make physical sense?'
        ];
    }

    identifyWarningFlags(step, problemType) {
        const warnings = {
            magnetic_force_charge: step.step === 'Calculate force magnitude' ?
                ['Remember sin θ term - easy to forget!', 'Angle must be between v and B vectors'] : [],
            rc_charging: step.step === 'Calculate voltage at time t' ?
                ['Use (1 - e^(-t/τ)) for charging, NOT e^(-t/τ)'] : [],
            faraday_law: step.step === 'Calculate induced EMF' ?
                ['Don\'t forget negative sign (Lenz\'s law)', 'Include number of turns N'] : []
        };

        return warnings[problemType] || [];
    }

    generateSelfCheckQuestion(step) {
        const questions = {
            'Calculate force magnitude': 'Did I square the distance and use absolute values for charges?',
            'Calculate time constant': 'Are my units correct (Ω × F = s)?',
            'Determine force direction': 'Did I apply the right-hand rule correctly for the charge sign?'
        };

        return questions[step.step] || 'Does this step make physical sense?';
    }

    describeExpectedResult(step) {
        const expectations = {
            'Calculate force magnitude': 'Force should be positive value in Newtons',
            'Calculate time constant': 'Time constant should be positive with units of seconds',
            'Determine force direction': 'Direction should be clearly specified (attraction/repulsion or vector direction)'
        };

        return expectations[step.step] || 'Result should have proper units and be physically reasonable';
    }

    generateTroubleshootingTips(step) {
        return [
            'If result seems wrong, check unit conversions',
            'Verify formula is appropriate for this situation',
            'Recalculate arithmetic carefully',
            'Compare with similar example problems'
        ];
    }

    breakIntoSubSteps(step) {
        if (step.formula && step.calculation) {
            return [
                `Write the formula: ${step.formula}`,
                'Identify which quantities you know',
                'Substitute known values into formula',
                'Perform the calculation',
                'Express answer with correct units'
            ];
        }

        return ['Understand what is being asked', 'Identify relevant information', 'Apply appropriate method'];
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try the same type of problem with different numerical values',
            practiceHint: 'Practice with simpler numbers first to build confidence',
            extension: 'Once comfortable, try problems with additional complexity'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What information do I have?',
            goal: 'What am I trying to find?',
            strategy: 'Which physics principle or formula applies?',
            execute: 'How do I apply this correctly?',
            verify: 'Does my answer make physical sense?'
        };
    }

    identifyDecisionPoints(step) {
        return [
            'Choosing the appropriate formula or law',
            'Deciding which coordinate system to use',
            'Determining correct sign conventions'
        ];
    }

    suggestAlternativeMethods(step, problem) {
        const alternatives = {
            'coulombs_law': [
                'Could use field approach: E = F/q',
                'Could solve using energy methods for some scenarios'
            ],
            'capacitance': [
                'Could use energy formulas instead of Q = CV',
                'Could analyze using field energy density'
            ]
        };

        return alternatives[problem.type] || ['This is the most direct method for this problem'];
    }

    generateGuidingQuestions(step, problem) {
        const questions = {
            'Identify given quantities': [
                'What physical quantities are mentioned in the problem?',
                'What are we asked to find?',
                'What physics principles might apply?'
            ],
            'Calculate force magnitude': [
                'Which formula relates force to the given quantities?',
                'Have I included all necessary factors?',
                'What units should the answer have?'
            ],
            'Determine force direction': [
                'What determines the direction of this force?',
                'How do I apply the relevant rule (e.g., right-hand rule)?',
                'Does the direction make physical sense?'
            ]
        };

        return questions[step.step] || ['What is the purpose of this step?', 'How does it advance the solution?'];
    }

    generateProgressiveHints(step) {
        return {
            level1: 'Think about which physical law or principle applies here',
            level2: 'Consider the formula that relates the given quantities',
            level3: 'Make sure to include all factors and check units',
            level4: step.formula ? `Try using: ${step.formula}` : 'Apply the appropriate physics equation'
        };
    }

    adaptLanguageLevel(text, level) {
        if (!text) return '';

        const adaptations = {
            basic: {
                replacements: {
                    'magnitude': 'size',
                    'instantaneous': 'at this moment',
                    'perpendicular': 'at right angles',
                    'inverse-square': 'gets weaker with distance squared'
                }
            },
            intermediate: {
                replacements: {
                    'magnitude': 'magnitude',
                    'instantaneous': 'instantaneous',
                    'perpendicular': 'perpendicular',
                    'inverse-square': 'inverse-square'
                }
            },
            detailed: {
                replacements: {
                    'magnitude': 'magnitude (scalar quantity)',
                    'instantaneous': 'instantaneous (at specific time)',
                    'perpendicular': 'perpendicular (orthogonal)',
                    'inverse-square': 'inverse-square (∝ 1/r²)'
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

    // ==================== VERIFICATION METHODS ====================

    verifyElectrostatics() {
        const { type, parameters } = this.currentProblem;
        const solution = this.currentSolution;

        if (type === 'coulombs_law') {
            const { q1, q2, r } = parameters;
            const k = this.physicsConstants.k;
            const expectedForce = k * Math.abs(q1 * q2) / (r * r);
            const difference = Math.abs(solution.force - expectedForce);

            return {
                calculatedForce: solution.force,
                expectedForce: expectedForce,
                difference: difference,
                isValid: difference < 1e-10 * expectedForce,
                verification: `F = k|q₁q₂|/r² = ${expectedForce.toExponential(3)} N`,
                tolerance: '0.01%'
            };
        }

        return { type: 'verification_not_implemented' };
    }

    calculateVerificationConfidence() {
        if (!this.currentSolution || !this.currentProblem) return 'Unknown';

        const { type } = this.currentProblem;

        // Physics calculations with known formulas have high confidence
        const highConfidenceTypes = ['coulombs_law', 'electric_field', 'ohms_law', 'capacitance'];
        
        if (highConfidenceTypes.includes(type)) {
            return 'High';
        }

        return 'Medium';
    }

    getVerificationNotes() {
        const { type } = this.currentProblem;
        const notes = [];

        switch (type) {
            case 'coulombs_law':
                notes.push('Direct application of Coulomb\'s law');
                notes.push('Result verified against formula');
                break;
            case 'rc_charging':
                notes.push('Exponential functions used for time-dependent behavior');
                notes.push('Time constant calculated from R and C');
                break;
            case 'magnetic_force_charge':
                notes.push('Cross product relationship F = q(v × B)');
                notes.push('Direction determined by right-hand rule');
                break;
            default:
                notes.push('Standard physics formulas applied');
        }

        return notes.join('; ');
    }

    // ==================== GRAPH GENERATION ====================

    generatePhysicsGraphData() {
        if (!this.currentSolution) return;

        const { type } = this.currentProblem;

        switch(type) {
            case 'electric_field':
                this.graphData = this.generateElectricFieldGraph();
                break;
            case 'rc_charging':
                this.graphData = this.generateRCChargingGraph();
                break;
            case 'magnetic_force_charge':
                this.graphData = this.generateMagneticForceGraph();
                break;
            case 'rlc_circuit':
                this.graphData = this.generateRLCGraph();
                break;
        }
    }

    generateElectricFieldGraph() {
        const { q, r } = this.currentProblem.parameters;
        const k = this.physicsConstants.k;
        
        const points = [];
        for (let distance = 0.1 * r; distance <= 5 * r; distance += 0.1 * r) {
            const E = k * Math.abs(q) / (distance * distance);
            points.push({ distance: distance, field: E });
        }

        return {
            type: 'electric_field',
            title: 'Electric Field vs Distance',
            xAxis: 'Distance (m)',
            yAxis: 'Electric Field (N/C)',
            points: points,
            behavior: 'Inverse-square relationship'
        };
    }

    generateRCChargingGraph() {
        const { R, C, V0 } = this.currentProblem.parameters;
        const tau = R * C;
        
        const voltagePoints = [];
        const currentPoints = [];
        
        for (let t = 0; t <= 5 * tau; t += tau / 20) {
            const voltage = V0 * (1 - Math.exp(-t / tau));
            const current = (V0 / R) * Math.exp(-t / tau);
            voltagePoints.push({ time: t, voltage: voltage });
            currentPoints.push({ time: t, current: current });
        }

        return {
            type: 'rc_charging',
            title: 'RC Circuit Charging',
            xAxis: 'Time (s)',
            yAxis1: 'Voltage (V)',
            yAxis2: 'Current (A)',
            voltagePoints: voltagePoints,
            currentPoints: currentPoints,
            timeConstant: tau,
            behavior: 'Exponential approach to steady state'
        };
    }

    generateMagneticForceGraph() {
        const { q, v, B } = this.currentProblem.parameters;
        
        const forcePoints = [];
        for (let angle = 0; angle <= 180; angle += 5) {
            const angleRad = angle * Math.PI / 180;
            const force = Math.abs(q) * v * B * Math.sin(angleRad);
            forcePoints.push({ angle: angle, force: force });
        }

        return {
            type: 'magnetic_force',
            title: 'Magnetic Force vs Angle',
            xAxis: 'Angle between v and B (degrees)',
            yAxis: 'Force (N)',
            points: forcePoints,
            behavior: 'Sinusoidal variation with angle'
        };
    }

    generateRLCGraph() {
        const { R, L, C, V0 } = this.currentProblem.parameters;
        const omega_0 = 1 / Math.sqrt(L * C);
        
        const impedancePoints = [];
        for (let omega = 0.1 * omega_0; omega <= 3 * omega_0; omega += 0.05 * omega_0) {
            const X_L = omega * L;
            const X_C = 1 / (omega * C);
            const Z = Math.sqrt(R * R + (X_L - X_C) * (X_L - X_C));
            impedancePoints.push({ frequency: omega / (2 * Math.PI), impedance: Z });
        }

        return {
            type: 'rlc_impedance',
            title: 'RLC Circuit Impedance vs Frequency',
            xAxis: 'Frequency (Hz)',
            yAxis: 'Impedance (Ω)',
            points: impedancePoints,
            resonanceFrequency: omega_0 / (2 * Math.PI),
            behavior: 'Minimum impedance at resonance'
        };
    }

    // ==================== WORKBOOK GENERATION ====================

    generatePhysicsWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createEnhancedStepsSection(),
            this.createTheorySection(),
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
            title: 'Electricity & Magnetism Physics Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSection() {
        if (!this.currentProblem) return null;

        const paramData = [];
        for (const [key, value] of Object.entries(this.currentProblem.parameters)) {
            if (typeof value !== 'object') {
                paramData.push([key, value]);
            }
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: [
                ['Problem Type', this.physicsTypes[this.currentProblem.type]?.name || this.currentProblem.type],
                ['Category', this.physicsTypes[this.currentProblem.type]?.category || 'physics'],
                ['Description', this.currentProblem.scenario || 'Physics problem'],
                ['', ''], // Spacing
                ['Given Parameters', ''],
                ...paramData
            ]
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

            // Main step header
            stepsData.push([`Step ${step.stepNumber}`, step.step]);
            stepsData.push(['Description', step.description]);

            // Given data
            if (step.givenData) {
                stepsData.push(['Given Data', '']);
                for (const [key, value] of Object.entries(step.givenData)) {
                    stepsData.push(['  ' + key, value]);
                }
            }

            // Formula and calculation
            if (step.formula) {
                stepsData.push(['Formula', step.formula]);
            }
            if (step.calculation) {
                stepsData.push(['Calculation', step.calculation]);
            }
            if (step.result) {
                stepsData.push(['Result', step.result]);
            }

            // Reasoning and physical meaning
            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }
            if (step.physicalMeaning) {
                stepsData.push(['Physical Meaning', step.physicalMeaning]);
            }

            // Enhanced explanations for detailed mode
            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
                stepsData.push(['Mathematical', step.explanations.mathematical]);
            }

            // Error prevention
            if (step.errorPrevention && this.includeErrorPrevention) {
                if (step.errorPrevention.commonMistakes.length > 0) {
                    stepsData.push(['Common Mistakes', step.errorPrevention.commonMistakes.join('; ')]);
                }
                if (step.errorPrevention.preventionTips.length > 0) {
                    stepsData.push(['Prevention Tips', step.errorPrevention.preventionTips.join('; ')]);
                }
            }

            // Scaffolding for scaffolded mode
            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                stepsData.push(['Guiding Questions', step.scaffolding.guidingQuestions.join(' ')]);
            }

            stepsData.push(['', '']); // Spacing between steps
        });

        return {
            title: 'Step-by-Step Solution',
            type: 'steps',
            data: stepsData
        };
    }

    createTheorySection() {
        const problemType = this.currentProblem.type;
        const lesson = this.lessons[problemType];

        if (!lesson) return null;

        const theoryData = [
            ['Topic', lesson.title],
            ['', ''], // Spacing
            ['Theory', lesson.theory],
            ['', ''], // Spacing
            ['Key Concepts', ''],
            ...lesson.concepts.map(concept => ['  •', concept]),
            ['', ''], // Spacing
            ['Key Formulas', '']
        ];

        for (const [name, formula] of Object.entries(lesson.keyFormulas)) {
            theoryData.push(['  ' + name, formula]);
        }

        if (lesson.applications) {
            theoryData.push(['', '']); // Spacing
            theoryData.push(['Applications', '']);
            lesson.applications.forEach(app => {
                theoryData.push(['  •', app]);
            });
        }

        return {
            title: 'Relevant Theory',
            type: 'theory',
            data: theoryData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        // Add main result
        if (this.currentSolution.value !== undefined) {
            solutionData.push(['Final Answer', `${this.currentSolution.value} ${this.currentSolution.unit || ''}`]);
        } else {
            // Add all solution properties
            for (const [key, value] of Object.entries(this.currentSolution)) {
                if (typeof value !== 'object' && key !== 'type' && key !== 'formula' && key !== 'formulas') {
                    solutionData.push([key, value]);
                }
            }
        }

        if (this.currentSolution.interpretation) {
            solutionData.push(['', '']); // Spacing
            solutionData.push(['Interpretation', this.currentSolution.interpretation]);
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createAnalysisSection() {
        const analysisData = [
            ['Problem Type', this.currentProblem.type],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Explanation Level', this.explanationLevel],
            ['Confidence', this.calculateVerificationConfidence()]
        ];

        if (this.currentSolution.formula) {
            analysisData.push(['Primary Formula', this.currentSolution.formula]);
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSection() {
        if (!this.currentSolution || !this.currentProblem) return null;

        const verificationData = [
            ['Verification Method', 'Formula verification and unit analysis'],
            ['', ''] // Spacing
        ];

        // Add verification based on problem type
        const verification = this.verifyElectrostatics();
        if (verification.type !== 'verification_not_implemented') {
            for (const [key, value] of Object.entries(verification)) {
                if (typeof value !== 'object') {
                    verificationData.push([key, value]);
                }
            }
        }

        verificationData.push(['', '']); // Spacing
        verificationData.push(['Confidence Level', this.calculateVerificationConfidence()]);
        verificationData.push(['Verification Notes', this.getVerificationNotes()]);

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        const problemType = this.currentProblem.type;
        const lesson = this.lessons[problemType];

        if (!lesson) return null;

        const pedagogicalData = [
            ['Learning Objectives', ''],
            ...(lesson.solvingSteps || []).map((step, i) => [`  ${i + 1}.`, step]),
            ['', ''], // Spacing
            ['Key Concepts to Emphasize', ''],
            ...(lesson.concepts || []).map(concept => ['  •', concept]),
            ['', ''], // Spacing
            ['Real-World Applications', ''],
            ...(lesson.applications || []).map(app => ['  •', app])
        ];

        return {
            title: 'Teaching Notes',
            type: 'pedagogical',
            data: pedagogicalData
        };
    }

    createAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const alternativeMethods = this.generateAlternativePhysicsMethods(this.currentProblem.type);

        if (!alternativeMethods) return null;

        return {
            title: 'Alternative Solution Methods',
            type: 'alternatives',
            data: [
                ['Primary Method Used', alternativeMethods.primary],
                ['', ''], // Spacing
                ['Alternative Approaches', ''],
                ...alternativeMethods.alternatives.map((method, index) => [
                    `Method ${index + 1}`, method
                ]),
                ['', ''], // Spacing
                ['When to Use Each', alternativeMethods.guidance]
            ]
        };
    }

    generateAlternativePhysicsMethods(problemType) {
        const methodDatabase = {
            coulombs_law: {
                primary: 'Direct application of Coulomb\'s law F = kq₁q₂/r²',
                alternatives: [
                    'Field approach: Calculate E-field first, then F = qE',
                    'Energy method: Use potential energy U = kq₁q₂/r and F = -dU/dr',
                    'Gauss\'s law for symmetric charge distributions'
                ],
                guidance: 'Direct formula is best for point charges; field method helps for multiple charges; energy method useful for conservative force analysis'
            },
            capacitance: {
                primary: 'Use C = Q/V and geometry-specific formulas',
                alternatives: [
                    'Energy approach: U = ½CV², solve for unknown',
                    'Field approach: E = V/d, then C = ε₀A/d',
                    'Combination rules for complex circuits'
                ],
                guidance: 'Geometry formulas work for standard shapes; energy method when power/work involved; combination rules for multiple capacitors'
            },
            rc_charging: {
                primary: 'Exponential formulas with time constant τ = RC',
                alternatives: [
                    'Differential equation approach: solve dQ/dt = (V₀ - Q/C)/R',
                    'Graphical method: plot voltage vs time',
                    'Energy analysis: track energy distribution'
                ],
                guidance: 'Exponential formulas are quickest; differential equations show deeper understanding; graphical helps visualization'
            },
            faraday_law: {
                primary: 'ε = -N(dΦ_B/dt) with flux calculation',
                alternatives: [
                    'Motional EMF formula: ε = BLv for moving conductors',
                    'Induced E-field: ∮E⋅dl = -dΦ_B/dt',
                    'Lenz\'s law for direction without calculation'
                ],
                guidance: 'Standard formula for changing flux; motional EMF for moving wires; induced field for theoretical analysis'
            }
        };

        return methodDatabase[problemType] || null;
    }

    // ==================== PEDAGOGICAL NOTES ====================

    generatePedagogicalNotes(problemType) {
        const pedagogicalDatabase = {
            coulombs_law: {
                objectives: [
                    'Apply Coulomb\'s law to calculate electrostatic forces',
                    'Understand inverse-square relationship',
                    'Distinguish between attractive and repulsive forces'
                ],
                keyConcepts: [
                    'Electric force as fundamental interaction',
                    'Superposition principle for multiple charges',
                    'Vector nature of forces'
                ],
                prerequisites: [
                    'Vector addition and subtraction',
                    'Scientific notation and powers of 10',
                    'Understanding of force concept'
                ],
                commonDifficulties: [
                    'Forgetting to square the distance',
                    'Sign confusion for force direction',
                    'Unit conversion errors (μC to C)'
                ],
                extensions: [
                    'Electric field concept',
                    'Multiple charge systems',
                    'Continuous charge distributions'
                ],
                assessment: [
                    'Test with various charge signs',
                    'Check understanding of inverse-square behavior',
                    'Verify vector addition skills'
                ]
            },
            rc_charging: {
                objectives: [
                    'Analyze transient behavior in RC circuits',
                    'Calculate time constant and its significance',
                    'Predict voltage and current at any time'
                ],
                keyConcepts: [
                    'Exponential approach to equilibrium',
                    'Time constant as characteristic time',
                    'Energy storage in electric field'
                ],
                prerequisites: [
                    'Ohm\'s law and basic circuit analysis',
                    'Exponential functions and e',
                    'Capacitor properties'
                ],
                commonDifficulties: [
                    'Confusing charging vs discharging formulas',
                    'Misunderstanding exponential approach',
                    'Forgetting initial/final conditions'
                ],
                extensions: [
                    'RL circuits and comparison',
                    'RLC circuits and resonance',
                    'Applications in timing circuits'
                ],
                assessment: [
                    'Test at various times (fractional τ)',
                    'Check understanding of asymptotic behavior',
                    'Verify grasp of time constant significance'
                ]
            },
            magnetic_force_charge: {
                objectives: [
                    'Calculate magnetic force on moving charges',
                    'Apply right-hand rule for force direction',
                    'Analyze circular motion in magnetic fields'
                ],
                keyConcepts: [
                    'Lorentz force and cross product',
                    'Perpendicular nature of magnetic force',
                    'Circular/helical motion of charged particles'
                ],
                prerequisites: [
                    'Vector cross products',
                    'Circular motion and centripetal force',
                    'Right-hand rule conventions'
                ],
                commonDifficulties: [
                    'Forgetting sin θ term',
                    'Incorrect application of right-hand rule',
                    'Confusion with electric force'
                ],
                extensions: [
                    'Mass spectrometers and velocity selectors',
                    'Cyclotrons and particle accelerators',
                    'Hall effect'
                ],
                assessment: [
                    'Test with various angles',
                    'Check right-hand rule proficiency',
                    'Verify understanding of motion paths'
                ]
            }
        };

return pedagogicalDatabase[problemType] || {
            objectives: ['Solve physics problems using appropriate methods'],
            keyConcepts: ['Apply relevant physical laws'],
            prerequisites: ['Basic physics and mathematics'],
            commonDifficulties: ['Various computational and conceptual errors'],
            extensions: ['More complex variations'],
            assessment: ['Check understanding of solution process']
        };
    }

    // ==================== UTILITY METHODS ====================

    formatScientific(value, decimals = 3) {
        return value.toExponential(decimals);
    }

    formatStandard(value, decimals = 3) {
        return value.toFixed(decimals);
    }

    convertUnits(value, fromUnit, toUnit) {
        // Basic unit conversion framework
        const conversions = {
            'C_to_μC': 1e6,
            'μC_to_C': 1e-6,
            'T_to_G': this.physicsConstants.T_to_G,
            'G_to_T': 1 / this.physicsConstants.T_to_G,
            'A_to_mA': this.physicsConstants.A_to_mA,
            'mA_to_A': 1 / this.physicsConstants.A_to_mA
        };

        const key = `${fromUnit}_to_${toUnit}`;
        return conversions[key] ? value * conversions[key] : value;
    }
}

// Export the class
export default EnhancedElectricityMagnetismWorkbook;
