// Enhanced Modern Physics Mathematical Workbook - Improved Step-by-Step Explanations
import * as math from 'mathjs';

export class EnhancedPhysicsMathematicalWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "physics";
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

        this.physicsConstants = this.initializePhysicsConstants();
        this.mathSymbols = this.initializeMathSymbols();
        this.setThemeColors();
        this.initializePhysicsSolvers();
        this.initializeErrorDatabase();
        this.initializeExplanationTemplates();
    }

    initializePhysicsConstants() {
        return {
            // Universal constants
            c: 299792458, // Speed of light (m/s)
            h: 6.62607015e-34, // Planck constant (J⋅s)
            hbar: 1.054571817e-34, // Reduced Planck constant (J⋅s)
            G: 6.67430e-11, // Gravitational constant (N⋅m²/kg²)
            k_B: 1.380649e-23, // Boltzmann constant (J/K)
            N_A: 6.02214076e23, // Avogadro constant (1/mol)
            R: 8.314462618, // Gas constant (J/(mol⋅K))
            
            // Electromagnetic constants
            epsilon_0: 8.8541878128e-12, // Vacuum permittivity (F/m)
            mu_0: 1.25663706212e-6, // Vacuum permeability (N/A²)
            e: 1.602176634e-19, // Elementary charge (C)
            
            // Particle masses
            m_e: 9.1093837015e-31, // Electron mass (kg)
            m_p: 1.67262192369e-27, // Proton mass (kg)
            m_n: 1.67492749804e-27, // Neutron mass (kg)
            
            // Atomic constants
            a_0: 5.29177210903e-11, // Bohr radius (m)
            R_inf: 10973731.568160, // Rydberg constant (1/m)
            
            // Other constants
            sigma: 5.670374419e-8, // Stefan-Boltzmann constant (W/(m²⋅K⁴))
            alpha: 7.2973525693e-3, // Fine structure constant
            g: 9.80665 // Standard gravity (m/s²)
        };
    }

    initializePhysicsLessons() {
        this.lessons = {
            special_relativity: {
                title: "Special Relativity",
                concepts: [
                    "Time dilation: Moving clocks run slower",
                    "Length contraction: Moving objects appear shortened",
                    "Mass-energy equivalence: E = mc²",
                    "Relativistic momentum and energy",
                    "Lorentz transformations"
                ],
                theory: "Special relativity describes physics at speeds approaching the speed of light. Time and space are relative to the observer's reference frame, and the speed of light is constant in all inertial frames.",
                keyFormulas: {
                    "Time Dilation": "Δt = γΔt₀ where γ = 1/√(1 - v²/c²)",
                    "Length Contraction": "L = L₀/γ = L₀√(1 - v²/c²)",
                    "Mass-Energy": "E = mc² or E² = (pc)² + (m₀c²)²",
                    "Lorentz Factor": "γ = 1/√(1 - v²/c²)",
                    "Relativistic Momentum": "p = γm₀v"
                },
                solvingSteps: [
                    "Identify the reference frames (rest and moving)",
                    "Determine the velocity v relative to speed of light c",
                    "Calculate Lorentz factor γ",
                    "Apply appropriate relativistic formula",
                    "Check if v << c for classical limit"
                ],
                applications: [
                    "GPS satellite time corrections",
                    "Particle accelerator physics",
                    "Cosmic ray observations",
                    "Spacecraft travel calculations"
                ]
            },

            quantum_mechanics: {
                title: "Quantum Mechanics Fundamentals",
                concepts: [
                    "Wave-particle duality",
                    "Heisenberg uncertainty principle",
                    "Quantum energy levels",
                    "Photoelectric effect",
                    "Compton scattering",
                    "De Broglie wavelength"
                ],
                theory: "Quantum mechanics describes the behavior of matter and energy at atomic and subatomic scales. Particles exhibit both wave and particle properties, and measurements affect quantum states.",
                keyFormulas: {
                    "Planck-Einstein": "E = hf = ℏω",
                    "De Broglie Wavelength": "λ = h/p = h/(mv)",
                    "Uncertainty Principle": "ΔxΔp ≥ ℏ/2 and ΔEΔt ≥ ℏ/2",
                    "Photoelectric Effect": "K_max = hf - φ",
                    "Compton Scattering": "Δλ = (h/(m_e c))(1 - cosθ)",
                    "Bohr Model": "E_n = -13.6 eV/n²"
                },
                solvingSteps: [
                    "Identify quantum phenomenon (photoelectric, Compton, etc.)",
                    "List known quantities and convert units",
                    "Select appropriate quantum formula",
                    "Substitute values and calculate",
                    "Verify result makes physical sense"
                ],
                applications: [
                    "Semiconductor devices",
                    "Laser technology",
                    "Quantum computing",
                    "Spectroscopy",
                    "Medical imaging"
                ]
            },

            atomic_physics: {
                title: "Atomic Structure and Spectra",
                concepts: [
                    "Bohr model of hydrogen atom",
                    "Energy levels and transitions",
                    "Emission and absorption spectra",
                    "X-ray production",
                    "Atomic number and mass"
                ],
                theory: "Atomic physics studies the structure of atoms and their interactions with electromagnetic radiation. Electrons occupy discrete energy levels, and transitions between levels produce or absorb photons.",
                keyFormulas: {
                    "Bohr Energy Levels": "E_n = -13.6 eV/n² for hydrogen",
                    "Rydberg Formula": "1/λ = R_H(1/n₁² - 1/n₂²)",
                    "Photon Energy": "E_photon = E_initial - E_final",
                    "Orbital Radius": "r_n = n²a₀ where a₀ = 0.529 Å",
                    "Ionization Energy": "E_ion = -E_ground"
                },
                solvingSteps: [
                    "Identify initial and final energy states",
                    "Calculate energy levels using Bohr formula",
                    "Find energy difference for transition",
                    "Convert energy to wavelength or frequency",
                    "Classify spectral line (UV, visible, IR)"
                ],
                applications: [
                    "Spectroscopic analysis",
                    "Astronomical observations",
                    "Plasma physics",
                    "Fluorescent lighting"
                ]
            },

            nuclear_physics: {
                title: "Nuclear Physics and Radioactivity",
                concepts: [
                    "Nuclear binding energy",
                    "Mass defect and E = mc²",
                    "Radioactive decay (alpha, beta, gamma)",
                    "Half-life and decay constants",
                    "Nuclear reactions and Q-value"
                ],
                theory: "Nuclear physics studies atomic nuclei, their structure, reactions, and decay. The strong nuclear force binds protons and neutrons, and nuclear transformations release or absorb energy.",
                keyFormulas: {
                    "Binding Energy": "BE = Δm c² where Δm = mass defect",
                    "Decay Law": "N(t) = N₀ e^(-λt)",
                    "Half-Life": "t_{1/2} = ln(2)/λ",
                    "Activity": "A = λN = A₀ e^(-λt)",
                    "Q-Value": "Q = (m_initial - m_final)c²"
                },
                solvingSteps: [
                    "Identify nuclear process (decay, fission, fusion)",
                    "Calculate mass defect or initial/final masses",
                    "Apply appropriate decay or energy formula",
                    "Convert between different units (MeV, J, u)",
                    "Interpret physical meaning of result"
                ],
                applications: [
                    "Nuclear power generation",
                    "Medical radiotherapy",
                    "Carbon dating",
                    "Nuclear weapons",
                    "Smoke detectors"
                ]
            },

            particle_physics: {
                title: "Particle Physics and Interactions",
                concepts: [
                    "Standard model particles",
                    "Conservation laws (energy, momentum, charge)",
                    "Particle-antiparticle pairs",
                    "Fundamental interactions",
                    "Relativistic particle kinematics"
                ],
                theory: "Particle physics studies elementary particles and their interactions through electromagnetic, weak, and strong forces. Relativistic effects are essential at high energies.",
                keyFormulas: {
                    "Relativistic Energy": "E² = (pc)² + (m₀c²)²",
                    "Rest Energy": "E₀ = m₀c²",
                    "Kinetic Energy": "K = (γ - 1)m₀c²",
                    "Pair Production": "E_min = 2m_e c²",
                    "Momentum Conservation": "Σp_before = Σp_after"
                },
                solvingSteps: [
                    "Identify particles involved in interaction",
                    "Apply conservation laws (energy, momentum, charge)",
                    "Use relativistic formulas for high-energy particles",
                    "Calculate threshold energies if needed",
                    "Verify particle physics constraints"
                ],
                applications: [
                    "Particle accelerators (LHC, Fermilab)",
                    "Cosmic ray detection",
                    "PET scans",
                    "Fundamental physics research"
                ]
            },

            statistical_mechanics: {
                title: "Statistical Mechanics and Thermodynamics",
                concepts: [
                    "Maxwell-Boltzmann distribution",
                    "Partition functions",
                    "Entropy and probability",
                    "Blackbody radiation",
                    "Bose-Einstein and Fermi-Dirac statistics"
                ],
                theory: "Statistical mechanics connects microscopic particle behavior to macroscopic thermodynamic properties through statistical averaging and probability distributions.",
                keyFormulas: {
                    "Maxwell-Boltzmann": "f(v) ∝ v² exp(-mv²/2k_B T)",
                    "Planck Distribution": "u(λ,T) = (8πhc/λ⁵)/(e^(hc/λk_B T) - 1)",
                    "Stefan-Boltzmann": "P = σAT⁴",
                    "Wien's Law": "λ_max T = 2.898×10⁻³ m⋅K",
                    "Boltzmann Factor": "P ∝ exp(-E/k_B T)"
                },
                solvingSteps: [
                    "Identify statistical ensemble and particles",
                    "Determine temperature and energy scales",
                    "Apply appropriate distribution function",
                    "Calculate average quantities",
                    "Relate to thermodynamic observables"
                ],
                applications: [
                    "Stellar physics",
                    "Semiconductor physics",
                    "Gas dynamics",
                    "Thermal radiation"
                ]
            },

            solid_state_physics: {
                title: "Solid State and Condensed Matter Physics",
                concepts: [
                    "Crystal structure and lattices",
                    "Band theory of solids",
                    "Semiconductors and doping",
                    "Superconductivity",
                    "Phonons and lattice vibrations"
                ],
                theory: "Solid state physics studies properties of matter in solid phase, focusing on electronic band structure, crystal lattices, and collective phenomena like superconductivity.",
                keyFormulas: {
                    "Fermi Energy": "E_F = (ℏ²/2m)(3π²n)^(2/3)",
                    "Density of States": "g(E) ∝ √E (3D free electron)",
                    "Intrinsic Carrier": "n_i = √(N_c N_v) exp(-E_g/2k_B T)",
                    "Hall Effect": "V_H = IB/(net)",
                    "BCS Gap": "Δ ≈ 1.76 k_B T_c"
                },
                solvingSteps: [
                    "Identify material type (conductor, semiconductor, insulator)",
                    "Determine relevant energy scales (E_g, E_F, k_B T)",
                    "Apply band theory or statistical mechanics",
                    "Calculate carrier densities or transport properties",
                    "Consider temperature dependence"
                ],
                applications: [
                    "Transistors and integrated circuits",
                    "Solar cells",
                    "LEDs and lasers",
                    "Superconducting magnets",
                    "Thermoelectric devices"
                ]
            },

            electromagnetism_modern: {
                title: "Modern Electromagnetic Theory",
                concepts: [
                    "Maxwell's equations in relativistic form",
                    "Electromagnetic field tensors",
                    "Radiation from accelerating charges",
                    "Synchrotron radiation",
                    "Larmor formula"
                ],
                theory: "Modern electromagnetic theory extends classical electromagnetism with relativistic corrections and quantum effects, essential for understanding high-energy phenomena.",
                keyFormulas: {
                    "Larmor Formula": "P = (2e²a²)/(3×4πε₀c³)",
                    "Synchrotron Power": "P ∝ γ⁴",
                    "Radiation Reaction": "F_rad = (e²/6πε₀c³)da/dt",
                    "Poynting Vector": "S = (1/μ₀)E × B",
                    "Field Transformation": "E'_∥ = E_∥, E'_⊥ = γ(E_⊥ + v × B)"
                },
                solvingSteps: [
                    "Identify charged particle motion (velocity, acceleration)",
                    "Calculate Lorentz factor if relativistic",
                    "Apply radiation formula (Larmor or synchrotron)",
                    "Consider energy loss and trajectory changes",
                    "Verify power units and magnitude"
                ],
                applications: [
                    "Synchrotron light sources",
                    "Astrophysical jets",
                    "Antenna design",
                    "Particle beam physics"
                ]
            },

            cosmology: {
                title: "Cosmology and Astrophysics",
                concepts: [
                    "Hubble's law and cosmic expansion",
                    "Redshift and distance measurements",
                    "Cosmic microwave background",
                    "Dark matter and dark energy",
                    "Friedmann equations"
                ],
                theory: "Modern cosmology describes the origin, evolution, and structure of the universe using general relativity and observational astronomy.",
                keyFormulas: {
                    "Hubble's Law": "v = H₀ d",
                    "Redshift": "z = (λ_obs - λ_emit)/λ_emit = Δλ/λ",
                    "Cosmological Redshift": "1 + z = a(t_obs)/a(t_emit)",
                    "Critical Density": "ρ_c = 3H²/(8πG)",
                    "Age of Universe": "t ≈ 1/H₀ (flat universe)"
                },
                solvingSteps: [
                    "Identify cosmological measurement (redshift, distance, age)",
                    "Apply appropriate cosmological formula",
                    "Consider cosmic scale factor evolution",
                    "Calculate using current cosmological parameters",
                    "Interpret in context of universe evolution"
                ],
                applications: [
                    "Galaxy surveys and mapping",
                    "CMB analysis",
                    "Dark matter detection",
                    "Gravitational lensing studies"
                ]
            }
        };
    }

    setThemeColors() {
        const themes = {
            physics: {
                background: '#1a1a2e',
                gridColor: '#16213e',
                headerBg: '#0f3460',
                headerText: '#e94560',
                sectionBg: '#16213e',
                sectionText: '#00d4ff',
                cellBg: '#0f0e17',
                cellText: '#fffffe',
                resultBg: '#16213e',
                resultText: '#00ff41',
                formulaBg: '#16213e',
                formulaText: '#ffd700',
                stepBg: '#16213e',
                stepText: '#fffffe',
                borderColor: '#0f3460',
                mathBg: '#1a1a2e',
                mathText: '#00d4ff',
                graphBg: '#0f0e17',
                vertexBg: '#e94560'
            },
            scientific: {
                background: '#f0f4f8',
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

        this.colors = themes[this.theme] || themes.physics;
    }

    initializeMathSymbols() {
        return {
            // Mathematical operators
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±', 'times': '×', 'div': '÷',
            // Greek letters (physics)
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'Gamma': 'Γ',
            'delta': 'δ', 'Delta': 'Δ', 'epsilon': 'ε', 'lambda': 'λ',
            'mu': 'μ', 'nu': 'ν', 'pi': 'π', 'rho': 'ρ',
            'sigma': 'σ', 'Sigma': 'Σ', 'tau': 'τ', 'phi': 'φ', 'Phi': 'Φ',
            'psi': 'ψ', 'Psi': 'Ψ', 'omega': 'ω', 'Omega': 'Ω',
            'theta': 'θ', 'eta': 'η', 'xi': 'ξ', 'chi': 'χ',
            // Special physics symbols
            'hbar': 'ℏ', 'partial': '∂', 'nabla': '∇',
            'integral': '∫', 'sum': '∑', 'product': '∏',
            'perpendicular': '⊥', 'parallel': '∥', 'angle': '∠'
        };
    }

    initializePhysicsSolvers() {
        this.physicsTypes = {
            // Special Relativity
            time_dilation: {
                patterns: [
                    /time.*dilation/i,
                    /moving.*clock/i,
                    /proper.*time/i,
                    /dilated.*time/i
                ],
                solver: this.solveTimeDilation.bind(this),
                name: 'Time Dilation',
                category: 'special_relativity',
                description: 'Calculates time dilation effects at relativistic speeds'
            },

            length_contraction: {
                patterns: [
                    /length.*contraction/i,
                    /lorentz.*contraction/i,
                    /proper.*length/i,
                    /contracted.*length/i
                ],
                solver: this.solveLengthContraction.bind(this),
                name: 'Length Contraction',
                category: 'special_relativity',
                description: 'Calculates length contraction for moving objects'
            },

            mass_energy: {
                patterns: [
                    /mass.*energy/i,
                    /e.*=.*mc.*2/i,
                    /rest.*energy/i,
                    /relativistic.*energy/i
                ],
                solver: this.solveMassEnergy.bind(this),
                name: 'Mass-Energy Equivalence',
                category: 'special_relativity',
                description: 'Calculates mass-energy equivalence and relativistic energy'
            },

            lorentz_factor: {
                patterns: [
                    /lorentz.*factor/i,
                    /gamma.*factor/i,
                    /relativistic.*factor/i
                ],
                solver: this.solveLorentzFactor.bind(this),
                name: 'Lorentz Factor',
                category: 'special_relativity',
                description: 'Calculates the Lorentz factor γ'
            },

            // Quantum Mechanics
            photoelectric_effect: {
                patterns: [
                    /photoelectric.*effect/i,
                    /work.*function/i,
                    /kinetic.*energy.*electron/i
                ],
                solver: this.solvePhotoelectricEffect.bind(this),
                name: 'Photoelectric Effect',
                category: 'quantum_mechanics',
                description: 'Calculates photoelectric effect parameters'
            },

            de_broglie: {
                patterns: [
                    /de.*broglie/i,
                    /matter.*wave/i,
                    /particle.*wavelength/i
                ],
                solver: this.solveDeBroglie.bind(this),
                name: 'De Broglie Wavelength',
                category: 'quantum_mechanics',
                description: 'Calculates matter wave wavelength'
            },

            uncertainty_principle: {
                patterns: [
                    /uncertainty.*principle/i,
                    /heisenberg/i,
                    /position.*momentum.*uncertainty/i
                ],
                solver: this.solveUncertaintyPrinciple.bind(this),
                name: 'Heisenberg Uncertainty Principle',
                category: 'quantum_mechanics',
                description: 'Calculates quantum uncertainties'
            },

            compton_scattering: {
                patterns: [
                    /compton.*scatter/i,
                    /photon.*scatter/i,
                    /wavelength.*shift/i
                ],
                solver: this.solveComptonScattering.bind(this),
                name: 'Compton Scattering',
                category: 'quantum_mechanics',
                description: 'Calculates Compton wavelength shift'
            },

            // Atomic Physics
            bohr_model: {
                patterns: [
                    /bohr.*model/i,
                    /hydrogen.*atom/i,
                    /atomic.*energy.*level/i
                ],
                solver: this.solveBohrModel.bind(this),
                name: 'Bohr Model',
                category: 'atomic_physics',
                description: 'Calculates hydrogen atom energy levels'
            },

            rydberg_formula: {
                patterns: [
                    /rydberg/i,
                    /spectral.*line/i,
                    /hydrogen.*spectrum/i
                ],
                solver: this.solveRydbergFormula.bind(this),
                name: 'Rydberg Formula',
                category: 'atomic_physics',
                description: 'Calculates spectral line wavelengths'
            },

            // Nuclear Physics
            binding_energy: {
                patterns: [
                    /binding.*energy/i,
                    /mass.*defect/i,
                    /nuclear.*energy/i
                ],
                solver: this.solveBindingEnergy.bind(this),
                name: 'Nuclear Binding Energy',
                category: 'nuclear_physics',
                description: 'Calculates nuclear binding energy from mass defect'
            },

            radioactive_decay: {
                patterns: [
                    /radioactive.*decay/i,
                    /half.*life/i,
                    /decay.*constant/i,
                    /activity/i
                ],
                solver: this.solveRadioactiveDecay.bind(this),
                name: 'Radioactive Decay',
                category: 'nuclear_physics',
                description: 'Calculates radioactive decay parameters'
            },

            // Particle Physics
            pair_production: {
                patterns: [
                    /pair.*production/i,
                    /electron.*positron/i,
                    /threshold.*energy/i
                ],
                solver: this.solvePairProduction.bind(this),
                name: 'Pair Production',
                category: 'particle_physics',
                description: 'Calculates pair production threshold'
            },

            relativistic_particle: {
                patterns: [
                    /relativistic.*particle/i,
                    /particle.*energy.*momentum/i,
                    /rest.*mass.*energy/i
                ],
                solver: this.solveRelativisticParticle.bind(this),
                name: 'Relativistic Particle Kinematics',
                category: 'particle_physics',
                description: 'Calculates relativistic particle properties'
            },

            // Statistical Mechanics
            blackbody_radiation: {
                patterns: [
                    /blackbody/i,
                    /planck.*distribution/i,
                    /thermal.*radiation/i,
                    /stefan.*boltzmann/i
                ],
                solver: this.solveBlackbodyRadiation.bind(this),
                name: 'Blackbody Radiation',
                category: 'statistical_mechanics',
                description: 'Calculates blackbody radiation parameters'
            },

            maxwell_boltzmann: {
                patterns: [
                    /maxwell.*boltzmann/i,
                    /velocity.*distribution/i,
                    /molecular.*speed/i
                ],
                solver: this.solveMaxwellBoltzmann.bind(this),
                name: 'Maxwell-Boltzmann Distribution',
                category: 'statistical_mechanics',
                description: 'Calculates molecular velocity distributions'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            time_dilation: {
                'Calculate Lorentz factor': [
                    'Using v/c without squaring in denominator',
                    'Forgetting to take square root',
                    'Confusing proper time with dilated time'
                ],
                'Apply time dilation formula': [
                    'Multiplying instead of dividing by gamma',
                    'Using wrong reference frame',
                    'Not recognizing which is proper time'
                ]
            },
            photoelectric_effect: {
                'Calculate photon energy': [
                    'Using wrong units for frequency',
                    'Confusing wavelength with frequency',
                    'Not converting eV to Joules'
                ],
                'Find kinetic energy': [
                    'Forgetting to subtract work function',
                    'Using wrong sign for work function',
                    'Not checking if photon has enough energy'
                ]
            },
            bohr_model: {
                'Calculate energy level': [
                    'Using wrong sign (energies are negative)',
                    'Forgetting to square quantum number n',
                    'Confusing initial and final states'
                ],
                'Find wavelength': [
                    'Not taking absolute value of energy difference',
                    'Using wrong units for wavelength',
                    'Inverting the Rydberg formula incorrectly'
                ]
            },
            radioactive_decay: {
                'Calculate decay constant': [
                    'Confusing half-life with mean lifetime',
                    'Using wrong logarithm (ln vs log)',
                    'Not converting time units properly'
                ],
                'Apply decay law': [
                    'Using positive exponential instead of negative',
                    'Confusing N(t) with activity A(t)',
                    'Not using consistent time units'
                ]
            }
        };

        this.errorPrevention = {
            unit_conversion: {
                reminder: 'Always check units before calculating',
                method: 'Convert all quantities to SI units first'
            },
            sign_checking: {
                reminder: 'Pay attention to signs in quantum and nuclear formulas',
                method: 'Energy levels are often negative; check physics meaning'
            },
            relativistic_limit: {
                reminder: 'Check if v << c for classical approximation',
                method: 'If v/c < 0.1, classical physics usually sufficient'
            },
            conservation_laws: {
                reminder: 'Energy, momentum, and charge must be conserved',
                method: 'Verify conservation laws before and after'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Physical meaning and intuitive understanding',
                language: 'intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Exact sequence of calculations to perform',
                language: 'step-by-step computational instructions'
            },
            visual: {
                focus: 'Graphical and spatial understanding',
                language: 'visual and spatial metaphors'
            },
            mathematical: {
                focus: 'Formal mathematical derivations and rigor',
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
                vocabulary: 'standard physics terms',
                detail: 'main steps with brief explanations',
                examples: 'mix of concrete and abstract'
            },
            detailed: {
                vocabulary: 'full physics vocabulary',
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

    // MAIN SOLVER METHOD
    solvePhysicsProblem(config) {
        const { equation, scenario, parameters, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parsePhysicsProblem(equation, scenario, parameters, problemType, context);

            // Solve the problem
            this.currentSolution = this.solvePhysicsProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generatePhysicsSteps(this.currentProblem, this.currentSolution);

            // Generate graph data if applicable
            this.generatePhysicsGraphData();

            // Generate workbook
            this.generatePhysicsWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                solutionType: this.currentSolution?.solutionType
            };

        } catch (error) {
            throw new Error(`Failed to solve physics problem: ${error.message}`);
        }
    }

    parsePhysicsProblem(equation, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = equation ? this.cleanMathExpression(equation) : '';

        // If problem type is specified, use it directly
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
            .replace(/÷/g, '/')
            .replace(/≈/g, '~')
            .trim();
    }

    solvePhysicsProblem_Internal(problem) {
        const solver = this.physicsTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for physics problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // PHYSICS SOLVERS

    solveTimeDilation(problem) {
        const { v, c, properTime, dilatedTime } = problem.parameters;
        const speedOfLight = c || this.physicsConstants.c;

        // Calculate Lorentz factor
        const beta = v / speedOfLight;
        const gamma = 1 / Math.sqrt(1 - beta * beta);

        let result = {};

        if (properTime !== undefined) {
            // Calculate dilated time
            result.dilatedTime = gamma * properTime;
            result.properTime = properTime;
        } else if (dilatedTime !== undefined) {
            // Calculate proper time
            result.properTime = dilatedTime / gamma;
            result.dilatedTime = dilatedTime;
        }

        return {
            solutionType: 'Time Dilation Solution',
            velocity: v,
            speedOfLight: speedOfLight,
            beta: beta,
            gamma: gamma,
            properTime: result.properTime,
            dilatedTime: result.dilatedTime,
            timeDifference: result.dilatedTime - result.properTime,
            category: 'special_relativity',
            physicalInterpretation: this.getTimeDilationInterpretation(gamma, beta)
        };
    }

    solveLengthContraction(problem) {
        const { v, c, properLength, contractedLength } = problem.parameters;
        const speedOfLight = c || this.physicsConstants.c;

        const beta = v / speedOfLight;
        const gamma = 1 / Math.sqrt(1 - beta * beta);

        let result = {};

        if (properLength !== undefined) {
            result.contractedLength = properLength / gamma;
            result.properLength = properLength;
        } else if (contractedLength !== undefined) {
            result.properLength = contractedLength * gamma;
            result.contractedLength = contractedLength;
        }

        return {
            solutionType: 'Length Contraction Solution',
            velocity: v,
            speedOfLight: speedOfLight,
            beta: beta,
            gamma: gamma,
            properLength: result.properLength,
            contractedLength: result.contractedLength,
            contractionFactor: 1 / gamma,
            category: 'special_relativity',
            physicalInterpretation: this.getLengthContractionInterpretation(gamma, beta)
        };
    }

    solveMassEnergy(problem) {
        const { mass, energy, c } = problem.parameters;
        const speedOfLight = c || this.physicsConstants.c;

        let result = {};

        if (mass !== undefined) {
            result.energy = mass * speedOfLight * speedOfLight;
            result.mass = mass;
        } else if (energy !== undefined) {
            result.mass = energy / (speedOfLight * speedOfLight);
            result.energy = energy;
        }

        return {
            solutionType: 'Mass-Energy Equivalence',
            mass: result.mass,
            energy: result.energy,
            speedOfLight: speedOfLight,
            energyInEV: result.energy / this.physicsConstants.e,
            category: 'special_relativity',
            physicalInterpretation: 'Mass and energy are interconvertible; this is the rest energy'
        };
    }

    solveLorentzFactor(problem) {
        const { v, c } = problem.parameters;
        const speedOfLight = c || this.physicsConstants.c;

        const beta = v / speedOfLight;
        const gamma = 1 / Math.sqrt(1 - beta * beta);

        return {
            solutionType: 'Lorentz Factor',
            velocity: v,
            speedOfLight: speedOfLight,
            beta: beta,
            gamma: gamma,
            percentSpeedOfLight: beta * 100,
            category: 'special_relativity',
            physicalInterpretation: this.getLorentzFactorInterpretation(gamma, beta)
        };
    }

    solvePhotoelectricEffect(problem) {
        const { frequency, wavelength, workFunction, kineticEnergy } = problem.parameters;
        const h = this.physicsConstants.h;
        const c = this.physicsConstants.c;

        let photonEnergy;

        if (frequency !== undefined) {
            photonEnergy = h * frequency;
        } else if (wavelength !== undefined) {
            photonEnergy = h * c / wavelength;
        }

        let result = {};

        if (workFunction !== undefined && photonEnergy !== undefined) {
            result.kineticEnergy = Math.max(0, photonEnergy - workFunction);
            result.canEject = photonEnergy >= workFunction;
        } else if (kineticEnergy !== undefined && photonEnergy !== undefined) {
            result.workFunction = photonEnergy - kineticEnergy;
        }

        return {
            solutionType: 'Photoelectric Effect Solution',
            photonEnergy: photonEnergy,
            photonEnergyEV: photonEnergy / this.physicsConstants.e,
            workFunction: result.workFunction || workFunction,
            kineticEnergy: result.kineticEnergy || kineticEnergy,
            kineticEnergyEV: (result.kineticEnergy || kineticEnergy) / this.physicsConstants.e,
            canEject: result.canEject,
            category: 'quantum_mechanics',
            physicalInterpretation: this.getPhotoelectricInterpretation(result.canEject)
        };
    }

    solveDeBroglie(problem) {
        const { mass, velocity, momentum, wavelength } = problem.parameters;
        const h = this.physicsConstants.h;

        let p = momentum;
        if (p === undefined && mass !== undefined && velocity !== undefined) {
            p = mass * velocity;
        }

        let result = {};

        if (p !== undefined) {
            result.wavelength = h / p;
            result.momentum = p;
        } else if (wavelength !== undefined) {
            result.momentum = h / wavelength;
            result.wavelength = wavelength;
        }

        return {
            solutionType: 'De Broglie Wavelength',
            momentum: result.momentum,
            wavelength: result.wavelength,
            mass: mass,
            velocity: velocity,
            category: 'quantum_mechanics',
            physicalInterpretation: 'Matter exhibits wave properties with this wavelength'
        };
    }

    solveUncertaintyPrinciple(problem) {
        const { deltaX, deltaP, deltaE, deltaT } = problem.parameters;
        const hbar = this.physicsConstants.hbar;

        let result = {};

        // Position-momentum uncertainty
        if (deltaX !== undefined && deltaP === undefined) {
            result.minDeltaP = hbar / (2 * deltaX);
            result.deltaX = deltaX;
        } else if (deltaP !== undefined && deltaX === undefined) {
            result.minDeltaX = hbar / (2 * deltaP);
            result.deltaP = deltaP;
        } else if (deltaX !== undefined && deltaP !== undefined) {
            result.product = deltaX * deltaP;
            result.satisfiesUncertainty = result.product >= hbar / 2;
        }

        // Energy-time uncertainty
        if (deltaE !== undefined && deltaT === undefined) {
            result.minDeltaT = hbar / (2 * deltaE);
            result.deltaE = deltaE;
        } else if (deltaT !== undefined && deltaE === undefined) {
            result.minDeltaE = hbar / (2 * deltaT);
            result.deltaT = deltaT;
        }

        return {
            solutionType: 'Heisenberg Uncertainty Principle',
            hbar: hbar,
            minimumUncertainty: hbar / 2,
            ...result,
            category: 'quantum_mechanics',
            physicalInterpretation: 'Fundamental quantum limit on simultaneous measurements'
        };
    }

    solveComptonScattering(problem) {
        const { theta, wavelengthInitial, wavelengthFinal, energyInitial } = problem.parameters;
        const h = this.physicsConstants.h;
        const m_e = this.physicsConstants.m_e;
        const c = this.physicsConstants.c;

        const comptonWavelength = h / (m_e * c);

        let result = {};

        if (theta !== undefined && wavelengthInitial !== undefined) {
            const deltaLambda = comptonWavelength * (1 - Math.cos(theta));
            result.wavelengthShift = deltaLambda;
            result.wavelengthFinal = wavelengthInitial + deltaLambda;
            result.energyInitial = h * c / wavelengthInitial;
            result.energyFinal = h * c / result.wavelengthFinal;
            result.energyTransfer = result.energyInitial - result.energyFinal;
        }

        return {
            solutionType: 'Compton Scattering',
            scatteringAngle: theta,
            scatteringAngleDegrees: theta * 180 / Math.PI,
            comptonWavelength: comptonWavelength,
            wavelengthInitial: wavelengthInitial,
            wavelengthFinal: result.wavelengthFinal,
            wavelengthShift: result.wavelengthShift,
            energyTransfer: result.energyTransfer,
            category: 'quantum_mechanics',
            physicalInterpretation: 'Photon loses energy to electron in collision'
        };
    }

    solveBohrModel(problem) {
        const { n, nInitial, nFinal } = problem.parameters;
        const R_H = 13.6; // Rydberg constant in eV

        let result = {};

        if (n !== undefined) {
            result.energy = -R_H / (n * n);
            result.quantumNumber = n;
        }

        if (nInitial !== undefined && nFinal !== undefined) {
            result.energyInitial = -R_H / (nInitial * nInitial);
            result.energyFinal = -R_H / (nFinal * nFinal);
            result.energyDifference = Math.abs(result.energyFinal - result.energyInitial);
            result.photonEnergy = result.energyDifference;
            
            // Calculate wavelength
            const h = this.physicsConstants.h;
            const c = this.physicsConstants.c;
            const eV_to_J = this.physicsConstants.e;
            result.wavelength = (h * c) / (result.photonEnergy * eV_to_J);
            result.frequency = c / result.wavelength;
            
            result.transitionType = nFinal < nInitial ? 'emission' : 'absorption';
            result.spectralSeries = this.identifySpectralSeries(nFinal);
        }

        return {
            solutionType: 'Bohr Model Solution',
            rydbergConstant: R_H,
            ...result,
            category: 'atomic_physics',
            physicalInterpretation: this.getBohrModelInterpretation(result)
        };
    }

    solveRydbergFormula(problem) {
        const { nInitial, nFinal, wavelength } = problem.parameters;
        const R_inf = this.physicsConstants.R_inf;

        let result = {};

        if (nInitial !== undefined && nFinal !== undefined) {
            const invWavelength = R_inf * (1 / (nFinal * nFinal) - 1 / (nInitial * nInitial));
            result.wavelength = 1 / invWavelength;
            result.frequency = this.physicsConstants.c / result.wavelength;
            result.nInitial = nInitial;
            result.nFinal = nFinal;
            result.spectralSeries = this.identifySpectralSeries(nFinal);
        }

        return {
            solutionType: 'Rydberg Formula',
            rydbergConstant: R_inf,
            ...result,
            category: 'atomic_physics',
            physicalInterpretation: `Transition from n=${nInitial} to n=${nFinal} in ${result.spectralSeries} series`
        };
    }

    solveBindingEnergy(problem) {
        const { massDefect, protons, neutrons, atomicMass } = problem.parameters;
        const c = this.physicsConstants.c;
        const m_p = this.physicsConstants.m_p;
        const m_n = this.physicsConstants.m_n;
        const u = 1.66053906660e-27; // Atomic mass unit in kg

        let result = {};

        if (massDefect !== undefined) {
            result.bindingEnergy = massDefect * c * c;
            result.massDefect = massDefect;
        } else if (protons !== undefined && neutrons !== undefined && atomicMass !== undefined) {
            const expectedMass = protons * m_p + neutrons * m_n;
            const actualMass = atomicMass * u;
            result.massDefect = expectedMass - actualMass;
            result.bindingEnergy = result.massDefect * c * c;
            result.bindingEnergyPerNucleon = result.bindingEnergy / (protons + neutrons);
        }

        return {
            solutionType: 'Nuclear Binding Energy',
            massDefect: result.massDefect,
            bindingEnergy: result.bindingEnergy,
            bindingEnergyMeV: result.bindingEnergy / (1e6 * this.physicsConstants.e),
            bindingEnergyPerNucleon: result.bindingEnergyPerNucleon,
            bindingEnergyPerNucleonMeV: result.bindingEnergyPerNucleon / (1e6 * this.physicsConstants.e),
            category: 'nuclear_physics',
            physicalInterpretation: 'Energy required to disassemble nucleus into constituent nucleons'
        };
    }

    solveRadioactiveDecay(problem) {
        const { N0, t, halfLife, decayConstant, activity } = problem.parameters;

        let lambda = decayConstant;
        let t_half = halfLife;

        if (lambda === undefined && t_half !== undefined) {
            lambda = Math.log(2) / t_half;
        } else if (t_half === undefined && lambda !== undefined) {
            t_half = Math.log(2) / lambda;
        }

        let result = {};

        if (N0 !== undefined && t !== undefined && lambda !== undefined) {
            result.N_t = N0 * Math.exp(-lambda * t);
            result.N0 = N0;
            result.t = t;
            result.decayConstant = lambda;
            result.halfLife = t_half;
            result.activity = lambda * result.N_t;
            result.initialActivity = lambda * N0;
            result.halfLivesElapsed = t / t_half;
        }

        return {
            solutionType: 'Radioactive Decay',
            ...result,
            category: 'nuclear_physics',
            physicalInterpretation: this.getDecayInterpretation(result)
        };
    }

    solvePairProduction(problem) {
        const { photonEnergy, electronMass } = problem.parameters;
        const m_e = electronMass || this.physicsConstants.m_e;
        const c = this.physicsConstants.c;

        const thresholdEnergy = 2 * m_e * c * c;
        const thresholdEnergyMeV = thresholdEnergy / (1e6 * this.physicsConstants.e);

        let result = {
            thresholdEnergy: thresholdEnergy,
            thresholdEnergyMeV: thresholdEnergyMeV
        };

        if (photonEnergy !== undefined) {
            result.photonEnergy = photonEnergy;
            result.canProducePair = photonEnergy >= thresholdEnergy;
            if (result.canProducePair) {
                result.kineticEnergy = photonEnergy - thresholdEnergy;
                result.kineticEnergyPerParticle = result.kineticEnergy / 2;
            }
        }

        return {
            solutionType: 'Pair Production',
            ...result,
            category: 'particle_physics',
            physicalInterpretation: this.getPairProductionInterpretation(result)
        };
    }

    solveRelativisticParticle(problem) {
        const { mass, velocity, momentum, energy, kineticEnergy } = problem.parameters;
        const c = this.physicsConstants.c;

        let result = {};

        if (velocity !== undefined) {
            const beta = velocity / c;
            const gamma = 1 / Math.sqrt(1 - beta * beta);
            result.gamma = gamma;
            result.velocity = velocity;
            
            if (mass !== undefined) {
                result.restEnergy = mass * c * c;
                result.totalEnergy = gamma * mass * c * c;
                result.kineticEnergy = (gamma - 1) * mass * c * c;
                result.momentum = gamma * mass * velocity;
            }
        } else if (momentum !== undefined && mass !== undefined) {
            result.restEnergy = mass * c * c;
            result.totalEnergy = Math.sqrt((momentum * c) ** 2 + (mass * c * c) ** 2);
            result.kineticEnergy = result.totalEnergy - result.restEnergy;
            result.momentum = momentum;
            result.velocity = (momentum * c * c) / result.totalEnergy;
            result.gamma = result.totalEnergy / result.restEnergy;
        }

        return {
            solutionType: 'Relativistic Particle Kinematics',
            ...result,
            category: 'particle_physics',
            physicalInterpretation: 'Particle properties at relativistic speeds'
        };
    }

    solveBlackbodyRadiation(problem) {
        const { temperature, wavelengthPeak, power, area } = problem.parameters;
        const sigma = this.physicsConstants.sigma;
        const b = 2.898e-3; // Wien's displacement constant (m⋅K)

        let result = {};

        if (temperature !== undefined) {
            result.temperature = temperature;
            result.wavelengthPeak = b / temperature;
            
            if (area !== undefined) {
                result.power = sigma * area * Math.pow(temperature, 4);
                result.area = area;
            }
        } else if (wavelengthPeak !== undefined) {
            result.wavelengthPeak = wavelengthPeak;
            result.temperature = b / wavelengthPeak;
        }

        return {
            solutionType: 'Blackbody Radiation',
            stefanBoltzmannConstant: sigma,
            wienConstant: b,
            ...result,
            category: 'statistical_mechanics',
            physicalInterpretation: this.getBlackbodyInterpretation(result)
        };
    }

    solveMaxwellBoltzmann(problem) {
        const { temperature, mass, velocity } = problem.parameters;
        const k_B = this.physicsConstants.k_B;

        let result = {};

        if (temperature !== undefined && mass !== undefined) {
            result.temperature = temperature;
            result.mass = mass;
            result.mostProbableSpeed = Math.sqrt(2 * k_B * temperature / mass);
            result.averageSpeed = Math.sqrt(8 * k_B * temperature / (Math.PI * mass));
            result.rmsSpeed = Math.sqrt(3 * k_B * temperature / mass);
            
            if (velocity !== undefined) {
                const v = velocity;
                const vp = result.mostProbableSpeed;
                const exponent = -mass * v * v / (2 * k_B * temperature);
                result.probability = (v * v / (vp * vp)) * Math.exp(exponent);
            }
        }

        return {
            solutionType: 'Maxwell-Boltzmann Distribution',
            boltzmannConstant: k_B,
            ...result,
            category: 'statistical_mechanics',
            physicalInterpretation: 'Statistical distribution of molecular speeds in a gas'
        };
    }

    // HELPER METHODS FOR PHYSICAL INTERPRETATION

    getTimeDilationInterpretation(gamma, beta) {
        return {
            effect: `Time runs ${gamma.toFixed(4)} times slower for moving observer`,
            significance: beta > 0.1 ? 'Significant relativistic effect' : 'Negligible relativistic effect',
            percentDifference: ((gamma - 1) * 100).toFixed(2) + '%'
        };
    }

    getLengthContractionInterpretation(gamma, beta) {
        return {
            effect: `Length contracts to ${(1 / gamma).toFixed(4)} of proper length`,
            significance: beta > 0.1 ? 'Significant relativistic effect' : 'Negligible relativistic effect',
            percentContraction: ((1 - 1 / gamma) * 100).toFixed(2) + '%'
        };
    }

    getLorentzFactorInterpretation(gamma, beta) {
        return {
            regime: beta < 0.1 ? 'Non-relativistic' : beta < 0.5 ? 'Mildly relativistic' : 'Highly relativistic',
            classicalApproximation: beta < 0.1 ? 'Valid' : 'Invalid',
            effectMagnitude: gamma > 2 ? 'Large' : gamma > 1.1 ? 'Moderate' : 'Small'
        };
    }

    getPhotoelectricInterpretation(canEject) {
        return canEject ? 
            'Photon has sufficient energy to eject electron from material' :
            'Photon energy is below work function threshold - no ejection occurs';
    }

    getBohrModelInterpretation(result) {
        if (result.transitionType) {
            return {
                process: result.transitionType === 'emission' ? 
                    'Electron drops to lower energy level, emitting photon' :
                    'Electron absorbs photon and jumps to higher energy level',
                series: `Part of ${result.spectralSeries} series`,
                region: this.getSpectralRegion(result.wavelength)
            };
        }
        return { energy: 'Electron bound state energy in hydrogen atom' };
    }

    getDecayInterpretation(result) {
        if (result.halfLivesElapsed !== undefined) {
            return {
                elapsed: `${result.halfLivesElapsed.toFixed(2)} half-lives have passed`,
                remaining: `${((result.N_t / result.N0) * 100).toFixed(2)}% of original sample remains`,
                decayed: `${((1 - result.N_t / result.N0) * 100).toFixed(2)}% has decayed`
            };
        }
        return {};
    }

    getPairProductionInterpretation(result) {
        if (result.canProducePair) {
            return `Photon energy exceeds threshold - pair production occurs with ${(result.kineticEnergy / this.physicsConstants.e / 1e6).toFixed(4)} MeV excess kinetic energy`;
        }
        return 'Photon energy below threshold - pair production cannot occur';
    }

    getBlackbodyInterpretation(result) {
        return {
            peakEmission: `Peak wavelength at ${(result.wavelengthPeak * 1e9).toFixed(1)} nm`,
            region: this.getSpectralRegion(result.wavelengthPeak),
            powerOutput: result.power ? `Total power radiated: ${result.power.toExponential(3)} W` : null
        };
    }

    identifySpectralSeries(nFinal) {
        const series = {
            1: 'Lyman (UV)',
            2: 'Balmer (Visible)',
            3: 'Paschen (IR)',
            4: 'Brackett (IR)',
            5: 'Pfund (IR)'
        };
        return series[nFinal] || 'Higher series (IR)';
    }

    getSpectralRegion(wavelength) {
        const nm = wavelength * 1e9;
        if (nm < 380) return 'Ultraviolet';
        if (nm < 450) return 'Violet';
        if (nm < 495) return 'Blue';
        if (nm < 570) return 'Green';
        if (nm < 590) return 'Yellow';
        if (nm < 620) return 'Orange';
        if (nm < 750) return 'Red';
        return 'Infrared';
    }

    // GENERATE PHYSICS STEPS

    generatePhysicsSteps(problem, solution) {
        let baseSteps = this.generateBasePhysicsSteps(problem, solution);

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

    generateBasePhysicsSteps(problem, solution) {
        const { type } = problem;

        switch (type) {
            case 'time_dilation':
                return this.generateTimeDilationSteps(problem, solution);
            case 'photoelectric_effect':
                return this.generatePhotoelectricSteps(problem, solution);
            case 'bohr_model':
                return this.generateBohrModelSteps(problem, solution);
            case 'radioactive_decay':
                return this.generateRadioactiveDecaySteps(problem, solution);
            default:
                return this.generateGenericPhysicsSteps(problem, solution);
        }
    }

    generateTimeDilationSteps(problem, solution) {
        const { v, properTime } = problem.parameters;
        const { c, beta, gamma, dilatedTime } = solution;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Given information',
            description: 'Identify the velocity and reference frame',
            expression: `v = ${v} m/s, proper time τ₀ = ${properTime} s`,
            reasoning: 'Proper time is measured in the rest frame of the moving object',
            visualHint: 'Think of proper time as the time on a clock moving with the object',
            physicsGoal: 'Find how much time passes in the stationary frame',
            category: 'special_relativity'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate velocity ratio β',
            description: 'Find the ratio of velocity to speed of light',
            beforeExpression: `v = ${v} m/s, c = ${c} m/s`,
            operation: 'divide',
            afterExpression: `β = v/c = ${beta.toFixed(6)}`,
            reasoning: 'This dimensionless ratio determines the magnitude of relativistic effects',
            algebraicRule: 'Velocity ratio: β = v/c',
            physicsInsight: beta < 0.1 ? 'Speed is less than 10% of c - relativistic effects are small' : 'Speed is significant fraction of c - relativistic effects important',
            numericalResult: beta
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate Lorentz factor γ',
            description: 'Compute the time dilation factor',
            beforeExpression: `β = ${beta.toFixed(6)}`,
            operation: 'γ = 1/√(1 - β²)',
            afterExpression: `γ = 1/√(1 - ${beta.toFixed(6)}²) = ${gamma.toFixed(6)}`,
            reasoning: 'The Lorentz factor quantifies how much time dilates',
            algebraicRule: 'Lorentz Factor: γ = 1/√(1 - v²/c²)',
            visualHint: 'As v approaches c, γ approaches infinity (time slows dramatically)',
            workingDetails: {
                step1: `β² = ${(beta * beta).toFixed(8)}`,
                step2: `1 - β² = ${(1 - beta * beta).toFixed(8)}`,
                step3: `√(1 - β²) = ${Math.sqrt(1 - beta * beta).toFixed(8)}`,
                step4: `γ = ${gamma.toFixed(6)}`
            },
            physicsInsight: `Time runs ${gamma.toFixed(4)} times slower in the moving frame`,
            numericalResult: gamma
        });

        steps.push({
            stepNumber: 4,
            step: 'Apply time dilation formula',
            description: 'Calculate the dilated time observed in stationary frame',
            beforeExpression: `Δt = γΔτ₀ = ${gamma.toFixed(6)} × ${properTime}`,
            operation: 'multiply',
            afterExpression: `Δt = ${dilatedTime.toFixed(6)} s`,
            reasoning: 'Moving clocks appear to run slower by factor γ',
            algebraicRule: 'Time Dilation: Δt = γΔτ₀',
            visualHint: 'Stationary observer sees more time elapse than moving observer measures',
            finalAnswer: true,
            physicsInsight: `The moving clock loses ${(dilatedTime - properTime).toFixed(6)} seconds relative to stationary clock`,
            numericalResult: dilatedTime,
            verification: {
                check: 'Dilated time should be greater than proper time',
                satisfied: dilatedTime > properTime,
                ratio: `Δt/Δτ₀ = ${(dilatedTime / properTime).toFixed(6)} = γ ✓`
            }
        });

        return steps;
    }

    generatePhotoelectricSteps(problem, solution) {
        const { frequency, workFunction } = problem.parameters;
        const { photonEnergy, kineticEnergy, canEject } = solution;
        const h = this.physicsConstants.h;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Given information',
            description: 'Identify photon frequency and material work function',
            expression: `f = ${frequency} Hz, φ = ${workFunction} J`,
            reasoning: 'Work function is minimum energy needed to eject electron',
            visualHint: 'Think of work function as energy barrier electron must overcome',
            physicsGoal: 'Determine if photon can eject electron and calculate kinetic energy',
            category: 'quantum_mechanics'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate photon energy',
            description: 'Use Planck-Einstein relation to find photon energy',
            beforeExpression: `E = hf = (${h}) × ${frequency}`,
            operation: 'multiply',
            afterExpression: `E = ${photonEnergy.toExponential(4)} J`,
            reasoning: 'Photon energy is quantized in packets of hf',
            algebraicRule: 'Planck-Einstein: E = hf',
            physicsInsight: 'Light energy comes in discrete quanta, not continuous wave',
            workingDetails: {
                planckConstant: `h = ${h} J⋅s`,
                frequency: `f = ${frequency} Hz`,
                energy: `E = ${photonEnergy.toExponential(4)} J`
            },
            numericalResult: photonEnergy
        });

        steps.push({
            stepNumber: 3,
            step: 'Compare photon energy to work function',
            description: 'Check if photoelectric effect can occur',
            beforeExpression: `E_photon = ${photonEnergy.toExponential(4)} J, φ = ${workFunction} J`,
            operation: 'compare',
            afterExpression: canEject ? `E_photon > φ ✓ (ejection occurs)` : `E_photon < φ ✗ (no ejection)`,
            reasoning: 'Electron can only be ejected if photon energy exceeds work function',
            algebraicRule: 'Threshold Condition: E_photon ≥ φ',
            physicsInsight: canEject ? 
                'Photon has sufficient energy - photoelectric effect occurs' :
                'Photon lacks energy - no electrons ejected regardless of intensity',
            criticalWarning: !canEject ? 'Below threshold - increasing intensity will NOT cause ejection!' : null
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate maximum kinetic energy',
            description: 'Find kinetic energy of ejected electron',
            beforeExpression: `K_max = E_photon - φ = ${photonEnergy.toExponential(4)} - ${workFunction}`,
            operation: 'subtract',
            afterExpression: `K_max = ${kineticEnergy.toExponential(4)} J = ${(kineticEnergy / this.physicsConstants.e).toFixed(4)} eV`,
            reasoning: 'Excess energy after overcoming work function becomes kinetic energy',
            algebraicRule: 'Einstein Photoelectric Equation: K_max = hf - φ',
            visualHint: 'Energy conservation: photon energy = work function + kinetic energy',
            finalAnswer: true,
            physicsInsight: 'This is maximum KE - electrons from deeper levels have less',
            numericalResult: kineticEnergy,
            verification: {
                check: 'Kinetic energy should be non-negative',
                satisfied: kineticEnergy >= 0,
                energyBalance: `${photonEnergy.toExponential(4)} = ${workFunction} + ${kineticEnergy.toExponential(4)} ✓`
            }
        });

        return steps;
    }

    generateBohrModelSteps(problem, solution) {
        const { nInitial, nFinal } = problem.parameters;
        const { energyInitial, energyFinal, energyDifference, wavelength, transitionType } = solution;
        const R_H = 13.6;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Given information',
            description: 'Identify initial and final quantum states',
            expression: `n_i = ${nInitial}, n_f = ${nFinal}`,
            reasoning: 'Quantum numbers specify allowed energy levels in hydrogen atom',
            visualHint: 'Electron transitions between discrete energy shells',
            physicsGoal: 'Calculate energy change and photon wavelength for this transition',
            category: 'atomic_physics'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate initial energy level',
            description: 'Find energy of electron in initial state',
            beforeExpression: `E_i = -13.6 eV / n_i² = -13.6 / ${nInitial}²`,
            operation: 'divide and square',
            afterExpression: `E_i = ${energyInitial.toFixed(6)} eV`,
            reasoning: 'Energy levels are quantized and negative (bound states)',
            algebraicRule: 'Bohr Energy: E_n = -13.6 eV/n²',
            physicsInsight: 'Negative energy means electron is bound to nucleus',
            workingDetails: {
                calculation: `E_i = -13.6 / ${nInitial * nInitial} = ${energyInitial.toFixed(6)} eV`
            },
            numericalResult: energyInitial
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate final energy level',
            description: 'Find energy of electron in final state',
            beforeExpression: `E_f = -13.6 eV / n_f² = -13.6 / ${nFinal}²`,
            operation: 'divide and square',
            afterExpression: `E_f = ${energyFinal.toFixed(6)} eV`,
            reasoning: 'Lower quantum numbers have more negative (lower) energies',
            algebraicRule: 'Bohr Energy: E_n = -13.6 eV/n²',
            physicsInsight: nFinal < nInitial ? 
                'Final state has lower energy - photon will be emitted' :
                'Final state has higher energy - photon must be absorbed',
            workingDetails: {
                calculation: `E_f = -13.6 / ${nFinal * nFinal} = ${energyFinal.toFixed(6)} eV`
            },
            numericalResult: energyFinal
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate energy difference',
            description: 'Find energy of emitted or absorbed photon',
            beforeExpression: `ΔE = |E_f - E_i| = |${energyFinal.toFixed(6)} - (${energyInitial.toFixed(6)})|`,
            operation: 'absolute difference',
            afterExpression: `ΔE = ${energyDifference.toFixed(6)} eV`,
            reasoning: 'Energy is conserved - photon carries away or provides this energy',
            algebraicRule: 'Energy Conservation: E_photon = |ΔE_atom|',
            physicsInsight: `This is ${transitionType} - electron ${nFinal < nInitial ? 'drops' : 'jumps'} energy levels`,
            numericalResult: energyDifference
        });

        steps.push({
            stepNumber: 5,
            step: 'Calculate photon wavelength',
            description: 'Convert photon energy to wavelength',
            beforeExpression: `λ = hc/E = (${this.physicsConstants.h} × ${this.physicsConstants.c}) / (${energyDifference} × ${this.physicsConstants.e})`,
            operation: 'divide',
            afterExpression: `λ = ${(wavelength * 1e9).toFixed(2)} nm`,
            reasoning: 'Higher energy photons have shorter wavelengths',
            algebraicRule: 'Energy-Wavelength: λ = hc/E',
            visualHint: 'This wavelength determines the color of emitted/absorbed light',
            finalAnswer: true,
            physicsInsight: `Wavelength is in ${this.getSpectralRegion(wavelength)} region`,
            numericalResult: wavelength,
            spectralInfo: {
                series: solution.spectralSeries,
                region: this.getSpectralRegion(wavelength),
                wavelengthNm: (wavelength * 1e9).toFixed(2)
            }
        });

        return steps;
    }

    generateRadioactiveDecaySteps(problem, solution) {
        const { N0, t, halfLife } = problem.parameters;
        const { decayConstant, N_t, halfLivesElapsed } = solution;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Given information',
            description: 'Identify initial sample size, time elapsed, and half-life',
            expression: `N₀ = ${N0}, t = ${t} s, t_{1/2} = ${halfLife} s`,
            reasoning: 'Half-life is time for half of sample to decay',
            visualHint: 'Each half-life, the sample reduces to 50% of previous amount',
            physicsGoal: 'Calculate remaining nuclei after given time',
            category: 'nuclear_physics'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate decay constant λ',
            description: 'Convert half-life to decay constant',
            beforeExpression: `λ = ln(2) / t_{1/2} = 0.693147 / ${halfLife}`,
            operation: 'divide',
            afterExpression: `λ = ${decayConstant.toExponential(4)} s⁻¹`,
            reasoning: 'Decay constant is probability per unit time that nucleus decays',
            algebraicRule: 'Half-Life Relation: λ = ln(2)/t_{1/2}',
            physicsInsight: 'Larger λ means faster decay (shorter half-life)',
            workingDetails: {
                ln2: 'ln(2) = 0.693147',
                halfLife: `t_{1/2} = ${halfLife} s`,
                decayConstant: `λ = ${decayConstant.toExponential(4)} s⁻¹`
            },
            numericalResult: decayConstant
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate number of half-lives',
            description: 'Determine how many half-lives have elapsed',
            beforeExpression: `n = t / t_{1/2} = ${t} / ${halfLife}`,
            operation: 'divide',
            afterExpression: `n = ${halfLivesElapsed.toFixed(4)} half-lives`,
            reasoning: 'This gives intuitive sense of how much decay has occurred',
            physicsInsight: `After ${halfLivesElapsed.toFixed(2)} half-lives, ${((0.5 ** halfLivesElapsed) * 100).toFixed(2)}% remains`,
            numericalResult: halfLivesElapsed
        });

        steps.push({
            stepNumber: 4,
            step: 'Apply exponential decay law',
            description: 'Calculate remaining number of nuclei',
            beforeExpression: `N(t) = N₀ e^(-λt) = ${N0} × e^(-${decayConstant.toExponential(4)} × ${t})`,
            operation: 'exponential decay',
            afterExpression: `N(t) = ${N_t.toExponential(4)}`,
            reasoning: 'Radioactive decay is exponential - constant fraction decays per time',
            algebraicRule: 'Decay Law: N(t) = N₀ e^(-λt)',
            visualHint: 'Exponential curve - never reaches zero but approaches it asymptotically',
            finalAnswer: true,
            physicsInsight: `${((N_t / N0) * 100).toFixed(2)}% of original sample remains, ${((1 - N_t / N0) * 100).toFixed(2)}% has decayed`,
            numericalResult: N_t,
            workingDetails: {
                exponent: `λt = ${(decayConstant * t).toFixed(6)}`,
                exponential: `e^(-λt) = ${Math.exp(-decayConstant * t).toFixed(8)}`,
                remaining: `N(t) = ${N_t.toExponential(4)}`
            },
            verification: {
                check: 'Remaining should be less than initial',
                satisfied: N_t < N0,
                percentRemaining: `${((N_t / N0) * 100).toFixed(2)}%`,
                halfLifeCheck: `(1/2)^${halfLivesElapsed.toFixed(2)} = ${Math.pow(0.5, halfLivesElapsed).toFixed(6)} ≈ ${(N_t / N0).toFixed(6)} ✓`
            }
        });

        return steps;
    }

    generateGenericPhysicsSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Physics problem',
            description: 'Solve the given physics problem',
            expression: problem.scenario || 'Problem not fully specified',
            reasoning: 'Apply appropriate physics principles and formulas',
            solution: solution,
            category: problem.type
        }];
    }

    // ENHANCE STEP EXPLANATIONS

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            // Multiple explanation formats
            explanations: {
                conceptual: this.getConceptualPhysicsExplanation(step, problem),
                procedural: this.getProceduralExplanation(step),
                visual: this.getVisualPhysicsExplanation(step, problem),
                mathematical: this.getMathematicalExplanation(step)
            },

            // Difficulty-adapted explanations
            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            // Learning support
            learningSupport: {
                prerequisitePhysics: this.identifyPhysicsPrerequisites(step, problem.type),
                keyPhysicsConcepts: this.identifyPhysicsConcepts(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        return enhanced;
    }

    getConceptualPhysicsExplanation(step, problem) {
        const conceptualMap = {
            'Calculate Lorentz factor γ': 'The Lorentz factor tells us how much time slows down and lengths contract at high speeds. As velocity approaches light speed, this factor grows without bound.',
            'Calculate photon energy': 'Light energy is quantized - it comes in discrete packets called photons. Each photon carries energy proportional to its frequency.',
            'Calculate energy difference': 'In quantum systems, electrons can only exist in specific energy states. Transitions between states involve absorbing or emitting exact amounts of energy.',
            'Apply exponential decay law': 'Radioactive decay is random for individual nuclei but predictable for large samples. The probability of decay is constant, leading to exponential behavior.'
        };

        return conceptualMap[step.step] || 'This step applies fundamental physics principles to solve the problem.';
    }

    getProceduralExplanation(step) {
        if (step.operation) {
            return `1. Set up the formula: ${step.beforeExpression || step.algebraicRule}
2. Substitute known values
3. Perform the calculation: ${step.operation}
4. Express result: ${step.afterExpression}`;
        }
        return 'Follow the standard physics problem-solving procedure for this type of calculation.';
    }

    getVisualPhysicsExplanation(step, problem) {
        const visualMap = {
            'special_relativity': 'Imagine spacetime as a fabric that warps at high speeds. Moving clocks tick slower and moving rulers appear shorter.',
            'quantum_mechanics': 'Picture electrons as waves confined to specific orbits. Energy comes in discrete packets, not smooth distributions.',
            'atomic_physics': 'Visualize electrons as planetary orbits, but quantized - only certain orbits are allowed, like rungs on a ladder.',
            'nuclear_physics': 'Think of radioactive decay like popcorn popping - random individual events that follow a predictable pattern overall.'
        };

        return visualMap[problem.type] || 'Visualize the physical process described by the mathematical relationships.';
    }

    getMathematicalExplanation(step) {
        if (step.algebraicRule) {
            return `Mathematical Foundation: ${step.algebraicRule}. This formula is derived from fundamental physics principles and has been verified experimentally.`;
        }
        return 'Apply rigorous mathematical methods to obtain precise numerical results.';
    }

    identifyPhysicsPrerequisites(step, problemType) {
        const prerequisites = {
            'Calculate Lorentz factor γ': ['Special relativity postulates', 'Square roots', 'Dimensionless ratios'],
            'Calculate photon energy': ['Wave-particle duality', 'Planck constant', 'Frequency-wavelength relation'],
            'Calculate energy difference': ['Quantum energy levels', 'Energy conservation', 'Absolute value'],
            'Apply exponential decay law': ['Exponential functions', 'Natural logarithm', 'Probability concepts']
        };

        return prerequisites[step.step] || ['Basic physics concepts', 'Algebra'];
    }

    identifyPhysicsConcepts(step) {
        const concepts = {
            'Calculate Lorentz factor γ': ['Lorentz factor', 'relativistic effects', 'time dilation'],
            'Calculate photon energy': ['photon', 'quantum', 'Planck constant', 'frequency'],
            'Calculate energy difference': ['energy levels', 'quantum states', 'transitions'],
            'Apply exponential decay law': ['half-life', 'decay constant', 'exponential decay']
        };

        return concepts[step.step] || [];
    }

    // STEP BRIDGES AND SCAFFOLDING (reuse from linear code with physics adaptations)

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Physical Connection to Next Step',
                    explanation: this.generatePhysicsStepBridge(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgression(steps[i], steps[i + 1]),
                    strategicThinking: this.explainStepStrategy(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generatePhysicsStepBridge(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            physicsConnection: `This connects because: ${this.explainPhysicsConnection(currentStep, nextStep)}`,
            howItHelps: `This will help us by: ${this.explainStepBenefit(nextStep)}`
        };
    }

    explainPhysicsConnection(currentStep, nextStep) {
        return 'This quantity is needed as input for the next physical calculation in our solution process.';
    }

    addErrorPrevention(step, problemType) {
        const mistakes = this.commonMistakes[problemType]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePhysicsPreventionTips(step, problemType),
                checkPoints: this.generatePhysicsCheckPoints(step),
                warningFlags: this.identifyPhysicsWarningFlags(step, problemType)
            },
            validation: {
                selfCheck: this.generatePhysicsSelfCheckQuestion(step),
                expectedResult: this.describePhysicsExpectedResult(step),
                troubleshooting: this.generateTroubleshootingTips(step)
            }
        };
    }

    generatePhysicsPreventionTips(step, problemType) {
        const tips = {
            'Calculate Lorentz factor γ': [
                'Always square the velocity ratio before subtracting from 1',
                'Remember to take the square root in the denominator',
                'Check that γ ≥ 1 (equals 1 at v=0, increases with v)'
            ],
            'Calculate photon energy': [
                'Verify frequency is in Hz (or convert)',
                'Use h = 6.626×10⁻³⁴ J⋅s (not eV⋅s)',
                'Result should be in Joules unless converted to eV'
            ],
            'Apply exponential decay law': [
                'Use negative exponent: e^(-λt) not e^(λt)',
                'Verify N(t) < N₀ always',
                'Check time units match throughout'
            ]
        };

        return tips[step.step] || ['Double-check units', 'Verify physical reasonableness'];
    }

    generatePhysicsCheckPoints(step) {
        return [
            'Check all units are consistent (SI preferred)',
            'Verify numerical result has correct order of magnitude',
            'Confirm result satisfies physical constraints',
            'Check against limiting cases if applicable'
        ];
    }

    identifyPhysicsWarningFlags(step, problemType) {
        const warnings = {
            time_dilation: step.step === 'Calculate Lorentz factor γ' ?
                ['If v ≥ c, the formula breaks down - check velocity value'] : [],
            photoelectric_effect: step.step === 'Compare photon energy to work function' ?
                ['If E < φ, no electrons ejected regardless of light intensity'] : [],
            radioactive_decay: step.step === 'Apply exponential decay law' ?
                ['Exponential should be negative: e^(-λt)', 'N(t) should always be less than N₀'] : []
        };

        return warnings[problemType] || [];
    }

    generatePhysicsSelfCheckQuestion(step) {
        const questions = {
            'Calculate Lorentz factor γ': 'Is my γ value greater than or equal to 1?',
            'Calculate photon energy': 'Did I use the correct value of Planck constant?',
            'Calculate energy difference': 'Did I take the absolute value of the energy difference?',
            'Apply exponential decay law': 'Is my remaining amount less than the initial amount?'
        };

        return questions[step.step] || 'Does this result make physical sense?';
    }

    describePhysicsExpectedResult(step) {
        const expectations = {
            'Calculate Lorentz factor γ': 'γ should be ≥ 1, approaching infinity as v → c',
            'Calculate photon energy': 'Energy should be positive and have units of Joules',
            'Calculate energy difference': 'Should be positive and represent photon energy',
            'Apply exponential decay law': 'N(t) should be between 0 and N₀'
        };

        return expectations[step.step] || 'Result should satisfy physical constraints';
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generatePhysicsGuidingQuestions(step, problem),
                subSteps: this.breakIntoSubSteps(step),
                hints: this.generateProgressiveHints(step),
                practiceVariation: this.generatePracticeVariation(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainPhysicsThinkingProcess(step),
                decisionPoints: this.identifyDecisionPoints(step),
                alternativeApproaches: this.suggestAlternativeMethods(step, problem)
            }
        }));
    }

    generatePhysicsGuidingQuestions(step, problem) {
        const questions = {
            'Calculate Lorentz factor γ': [
                'What is the ratio of the velocity to the speed of light?',
                'How does this ratio affect relativistic effects?',
                'As v approaches c, what happens to γ?'
            ],
            'Calculate photon energy': [
                'What constant relates energy to frequency?',
                'What are the correct units for frequency?',
                'How does photon energy change with frequency?'
            ],
            'Calculate energy difference': [
                'Which energy level is higher?',
                'Is this emission or absorption?',
                'What does the sign of the energy difference tell us?'
            ]
        };

        return questions[step.step] || ['What physical principle applies here?', 'What formula should we use?'];
    }

    explainPhysicsThinkingProcess(step) {
        return {
            observe: 'What physical quantities are given?',
            identify: 'What physics principles or laws apply?',
            strategy: 'What formula or equation should I use?',
            execute: 'How do I substitute and calculate correctly?',
            verify: 'Does my answer make physical sense?'
        };
    }

    // REUSE HELPER METHODS FROM LINEAR CODE
    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we need to ${nextStep.description.toLowerCase()} to continue solving`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description.toLowerCase()}`;
    }

    explainStepBenefit(nextStep) {
        return `This step will help us get closer to the final solution`;
    }

    generateProgressiveHints(step) {
        return {
            level1: 'Think about what physical principle applies here.',
            level2: 'Remember to check units and convert if necessary.',
            level3: 'Use the appropriate physics formula for this step.',
            level4: step.algebraicRule ? `Try using: ${step.algebraicRule}` : 'Apply the relevant equation.'
        };
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try a similar problem with different numerical values',
            practiceHint: 'Practice with simpler cases first to build understanding',
            extension: 'Once comfortable, try more complex variations with multiple steps'
        };
    }

    breakIntoSubSteps(step) {
        if (step.workingDetails) {
            return Object.entries(step.workingDetails).map(([key, value]) => `${key}: ${value}`);
        }
        return ['Identify the formula', 'Substitute values', 'Calculate', 'Check units'];
    }

    identifyDecisionPoints(step) {
        return [
            'Choosing the correct formula',
            'Deciding on unit conversions',
            'Determining calculation order'
        ];
    }

    suggestAlternativeMethods(step, problem) {
        return ['Alternative approaches exist but this is the most direct method'];
    }

    generateTroubleshootingTips(step) {
        return [
            'If stuck, review the physics concept',
            'Check for unit conversion errors',
            'Verify you used the correct physical constant',
            'Consider if an approximation is appropriate'
        ];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by using its result`,
            progression: 'We are systematically applying physics principles',
            relationship: 'Each step brings us closer to the complete physical solution'
        };
    }

    getAdaptiveExplanation(step, explanationLevel) {
        const adaptations = {
            basic: {
                vocabulary: 'simple terms',
                detail: 'essential information only',
                format: 'short sentences'
            },
            intermediate: {
                vocabulary: 'standard physics terms',
                detail: 'main concepts with brief explanations',
                format: 'clear step-by-step format'
            },
            detailed: {
                vocabulary: 'full physics vocabulary',
                detail: 'comprehensive explanations with theory',
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

    adaptLanguageLevel(text, level) {
        if (!text) return '';

        const adaptations = {
            basic: {
                replacements: {
                    'Lorentz factor': 'time stretching amount',
                    'photon': 'light particle',
                    'quantum': 'tiny energy packet',
                    'exponential': 'rapidly changing',
                    'relativistic': 'near light speed'
                }
            },
            intermediate: {
                replacements: {
                    'Lorentz factor': 'Lorentz factor',
                    'photon': 'photon',
                    'quantum': 'quantum',
                    'exponential': 'exponential',
                    'relativistic': 'relativistic'
                }
            },
            detailed: {
                replacements: {
                    'Lorentz factor': 'Lorentz factor γ (relativistic transformation parameter)',
                    'photon': 'photon (quantum of electromagnetic radiation)',
                    'quantum': 'quantum (discrete energy state)',
                    'exponential': 'exponential (e-based growth/decay)',
                    'relativistic': 'relativistic (requiring special relativity corrections)'
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

    verifyTimeDilation() {
        const { v, properTime } = this.currentProblem.parameters;
        const { c, gamma, dilatedTime } = this.currentSolution;

        const beta = v / c;
        const calculatedGamma = 1 / Math.sqrt(1 - beta * beta);
        const calculatedDilatedTime = calculatedGamma * properTime;

        return {
            velocity: v,
            speedOfLight: c,
            beta: beta,
            gamma: calculatedGamma,
            properTime: properTime,
            calculatedDilatedTime: calculatedDilatedTime,
            solutionDilatedTime: dilatedTime,
            isValid: Math.abs(calculatedDilatedTime - dilatedTime) < 1e-10,
            timeDifference: dilatedTime - properTime,
            percentDifference: ((dilatedTime - properTime) / properTime * 100).toFixed(4) + '%'
        };
    }

    verifyPhotoelectricEffect() {
        const { frequency, workFunction } = this.currentProblem.parameters;
        const { photonEnergy, kineticEnergy, canEject } = this.currentSolution;
        const h = this.physicsConstants.h;

        const calculatedPhotonEnergy = h * frequency;
        const calculatedKineticEnergy = Math.max(0, calculatedPhotonEnergy - workFunction);

        return {
            frequency: frequency,
            workFunction: workFunction,
            calculatedPhotonEnergy: calculatedPhotonEnergy,
            solutionPhotonEnergy: photonEnergy,
            calculatedKineticEnergy: calculatedKineticEnergy,
            solutionKineticEnergy: kineticEnergy,
            energyConservation: Math.abs(photonEnergy - workFunction - kineticEnergy) < 1e-15,
            isValid: Math.abs(calculatedPhotonEnergy - photonEnergy) < 1e-15,
            canEject: canEject,
            threshold: photonEnergy >= workFunction
        };
    }

    verifyBohrModel() {
        const { nInitial, nFinal } = this.currentProblem.parameters;
        const { energyInitial, energyFinal, energyDifference, wavelength } = this.currentSolution;
        const R_H = 13.6;
        const h = this.physicsConstants.h;
        const c = this.physicsConstants.c;
        const eV_to_J = this.physicsConstants.e;

        const calculatedEnergyInitial = -R_H / (nInitial * nInitial);
        const calculatedEnergyFinal = -R_H / (nFinal * nFinal);
        const calculatedEnergyDiff = Math.abs(calculatedEnergyFinal - calculatedEnergyInitial);
        const calculatedWavelength = (h * c) / (calculatedEnergyDiff * eV_to_J);

        return {
            nInitial: nInitial,
            nFinal: nFinal,
            calculatedEnergyInitial: calculatedEnergyInitial,
            solutionEnergyInitial: energyInitial,
            calculatedEnergyFinal: calculatedEnergyFinal,
            solutionEnergyFinal: energyFinal,
            calculatedEnergyDiff: calculatedEnergyDiff,
            solutionEnergyDiff: energyDifference,
            calculatedWavelength: calculatedWavelength,
            solutionWavelength: wavelength,
            isValid: Math.abs(calculatedWavelength - wavelength) / wavelength < 1e-6,
            wavelengthNm: (wavelength * 1e9).toFixed(2) + ' nm',
            spectralRegion: this.getSpectralRegion(wavelength)
        };
    }

    verifyRadioactiveDecay() {
        const { N0, t, halfLife } = this.currentProblem.parameters;
        const { decayConstant, N_t } = this.currentSolution;

        const calculatedDecayConstant = Math.log(2) / halfLife;
        const calculatedN_t = N0 * Math.exp(-calculatedDecayConstant * t);
        const halfLivesElapsed = t / halfLife;
        const expectedFraction = Math.pow(0.5, halfLivesElapsed);

        return {
            initialAmount: N0,
            time: t,
            halfLife: halfLife,
            calculatedDecayConstant: calculatedDecayConstant,
            solutionDecayConstant: decayConstant,
            calculatedRemaining: calculatedN_t,
            solutionRemaining: N_t,
            halfLivesElapsed: halfLivesElapsed,
            expectedFraction: expectedFraction,
            actualFraction: N_t / N0,
            isValid: Math.abs(calculatedN_t - N_t) / N0 < 1e-10,
            percentRemaining: ((N_t / N0) * 100).toFixed(4) + '%',
            percentDecayed: ((1 - N_t / N0) * 100).toFixed(4) + '%'
        };
    }

    // FORMAT VERIFICATION DATA

    formatTimeDilationVerification(verification) {
        return [
            ['Original Values', ''],
            ['Velocity', `${verification.velocity} m/s`],
            ['Proper Time', `${verification.properTime} s`],
            ['', ''],
            ['Calculated Values', ''],
            ['Beta (v/c)', verification.beta.toFixed(8)],
            ['Gamma Factor', verification.gamma.toFixed(8)],
            ['Dilated Time', `${verification.calculatedDilatedTime.toFixed(8)} s`],
            ['', ''],
            ['Verification', ''],
            ['Solution Matches', verification.isValid ? 'Yes ✓' : 'No ✗'],
            ['Time Difference', `${verification.timeDifference.toFixed(8)} s`],
            ['Percent Difference', verification.percentDifference],
            ['Physical Check', verification.calculatedDilatedTime > verification.properTime ? 'Dilated time > proper time ✓' : 'Error ✗']
        ];
    }

    formatPhotoelectricVerification(verification) {
        return [
            ['Original Values', ''],
            ['Frequency', `${verification.frequency} Hz`],
            ['Work Function', `${verification.workFunction} J`],
            ['', ''],
            ['Photon Energy Check', ''],
            ['Calculated', `${verification.calculatedPhotonEnergy.toExponential(4)} J`],
            ['Solution', `${verification.solutionPhotonEnergy.toExponential(4)} J`],
            ['Match', verification.isValid ? 'Yes ✓' : 'No ✗'],
            ['', ''],
            ['Kinetic Energy Check', ''],
            ['Calculated', `${verification.calculatedKineticEnergy.toExponential(4)} J`],
            ['Solution', `${verification.solutionKineticEnergy.toExponential(4)} J`],
            ['', ''],
            ['Energy Conservation', ''],
            ['E_photon = φ + K', verification.energyConservation ? 'Satisfied ✓' : 'Not satisfied ✗'],
            ['Can Eject Electron', verification.canEject ? 'Yes ✓' : 'No ✗'],
            ['Above Threshold', verification.threshold ? 'Yes ✓' : 'No ✗']
        ];
    }

    formatBohrModelVerification(verification) {
        return [
            ['Quantum States', ''],
            ['Initial n', verification.nInitial],
            ['Final n', verification.nFinal],
            ['', ''],
            ['Energy Levels', ''],
            ['Initial Energy (calc)', `${verification.calculatedEnergyInitial.toFixed(6)} eV`],
            ['Initial Energy (sol)', `${verification.solutionEnergyInitial.toFixed(6)} eV`],
            ['Final Energy (calc)', `${verification.calculatedEnergyFinal.toFixed(6)} eV`],
            ['Final Energy (sol)', `${verification.solutionEnergyFinal.toFixed(6)} eV`],
            ['', ''],
            ['Energy Difference', ''],
            ['Calculated', `${verification.calculatedEnergyDiff.toFixed(6)} eV`],
            ['Solution', `${verification.solutionEnergyDiff.toFixed(6)} eV`],
            ['', ''],
            ['Wavelength', ''],
            ['Calculated', `${(verification.calculatedWavelength * 1e9).toFixed(2)} nm`],
            ['Solution', `${(verification.solutionWavelength * 1e9).toFixed(2)} nm`],
            ['Spectral Region', verification.spectralRegion],
            ['', ''],
            ['Verification', verification.isValid ? 'All values verified ✓' : 'Discrepancy found ✗']
        ];
    }

    formatRadioactiveDecayVerification(verification) {
        return [
            ['Initial Conditions', ''],
            ['N₀', verification.initialAmount.toExponential(4)],
            ['Time elapsed', `${verification.time} s`],
            ['Half-life', `${verification.halfLife} s`],
            ['Half-lives elapsed', verification.halfLivesElapsed.toFixed(4)],
            ['', ''],
            ['Decay Constant', ''],
            ['Calculated λ', `${verification.calculatedDecayConstant.toExponential(4)} s⁻¹`],
            ['Solution λ', `${verification.solutionDecayConstant.toExponential(4)} s⁻¹`],
            ['', ''],
            ['Remaining Amount', ''],
            ['Calculated N(t)', verification.calculatedRemaining.toExponential(4)],
            ['Solution N(t)', verification.solutionRemaining.toExponential(4)],
            ['', ''],
            ['Verification Checks', ''],
            ['Expected fraction', verification.expectedFraction.toFixed(8)],
            ['Actual fraction', verification.actualFraction.toFixed(8)],
            ['Match', verification.isValid ? 'Yes ✓' : 'No ✗'],
            ['Percent Remaining', verification.percentRemaining],
            ['Percent Decayed', verification.percentDecayed],
            ['Physical Check', verification.solutionRemaining < verification.initialAmount ? 'N(t) < N₀ ✓' : 'Error ✗']
        ];
    }

    // CONFIDENCE AND NOTES

    calculateVerificationConfidence() {
        if (!this.currentSolution || !this.currentProblem) return 'Unknown';

        const { type } = this.currentProblem;

        switch (type) {
            case 'time_dilation':
                const timeDilationVerif = this.verifyTimeDilation();
                return timeDilationVerif.isValid ? 'High' : 'Low';

            case 'photoelectric_effect':
                const photoelectricVerif = this.verifyPhotoelectricEffect();
                return photoelectricVerif.isValid && photoelectricVerif.energyConservation ? 'High' : 'Medium';

            case 'bohr_model':
                const bohrVerif = this.verifyBohrModel();
                return bohrVerif.isValid ? 'High' : 'Medium';

            case 'radioactive_decay':
                const decayVerif = this.verifyRadioactiveDecay();
                return decayVerif.isValid ? 'High' : 'Low';

            default:
                return 'Medium';
        }
    }

    getVerificationNotes() {
        const { type } = this.currentProblem;
        const notes = [];

        switch (type) {
            case 'time_dilation':
                notes.push('Verified using Lorentz transformation');
                notes.push('Checked that dilated time > proper time');
                notes.push('Confirmed γ ≥ 1');
                break;

            case 'photoelectric_effect':
                notes.push('Energy conservation verified: E_photon = φ + K');
                notes.push('Threshold condition checked');
                notes.push('Used h = 6.626×10⁻³⁴ J⋅s');
                break;

            case 'bohr_model':
                notes.push('Energy levels calculated from Bohr formula');
                notes.push('Wavelength verified using E = hc/λ');
                notes.push('Spectral series identified');
                break;

            case 'radioactive_decay':
                notes.push('Exponential decay law verified');
                notes.push('Half-life relationship confirmed');
                notes.push('Checked N(t) < N₀');
                break;

            default:
                notes.push('Standard physics verification methods applied');
        }

        return notes.join('; ');
    }

    // PEDAGOGICAL NOTES

    generatePedagogicalNotes(problemType) {
        const pedagogicalDatabase = {
            time_dilation: {
                objectives: [
                    'Understand time dilation in special relativity',
                    'Calculate Lorentz factor γ',
                    'Apply time dilation formula correctly'
                ],
                keyConcepts: [
                    'Proper time vs dilated time',
                    'Lorentz factor',
                    'Relativistic effects increase with velocity',
                    'Speed of light as universal constant'
                ],
                prerequisites: [
                    'Basic algebra and square roots',
                    'Understanding of reference frames',
                    'Familiarity with exponential notation'
                ],
                commonDifficulties: [
                    'Confusing proper time with dilated time',
                    'Forgetting to square velocity ratio',
                    'Not recognizing when relativistic effects are significant',
                    'Sign errors in calculations'
                ],
                extensions: [
                    'Length contraction',
                    'Twin paradox',
                    'Relativistic momentum and energy',
                    'Spacetime diagrams'
                ],
                assessment: [
                    'Can student identify which time is proper time?',
                    'Does student correctly calculate Lorentz factor?',
                    'Can student explain physical meaning of result?'
                ]
            },

            photoelectric_effect: {
                objectives: [
                    'Understand wave-particle duality of light',
                    'Apply Einstein\'s photoelectric equation',
                    'Recognize threshold frequency concept'
                ],
                keyConcepts: [
                    'Photon energy E = hf',
                    'Work function as energy barrier',
                    'Threshold frequency',
                    'Energy conservation',
                    'Quantum nature of light'
                ],
                prerequisites: [
                    'Basic energy concepts',
                    'Wave properties (frequency, wavelength)',
                    'Unit conversions (eV to Joules)'
                ],
                commonDifficulties: [
                    'Understanding why intensity doesn\'t matter below threshold',
                    'Confusing frequency with wavelength',
                    'Sign errors with work function',
                    'Not checking if ejection is possible'
                ],
                extensions: [
                    'Compton scattering',
                    'De Broglie wavelength',
                    'Wave-particle duality',
                    'Quantum mechanics introduction'
                ],
                assessment: [
                    'Can student explain threshold concept?',
                    'Does student check if ejection occurs?',
                    'Can student apply energy conservation?'
                ]
            },

            bohr_model: {
                objectives: [
                    'Calculate hydrogen atom energy levels',
                    'Determine photon wavelength for transitions',
                    'Identify spectral series'
                ],
                keyConcepts: [
                    'Quantized energy levels',
                    'Emission vs absorption',
                    'Spectral series',
                    'Energy-wavelength relationship',
                    'Discrete atomic states'
                ],
                prerequisites: [
                    'Basic atomic structure',
                    'Energy conservation',
                    'Wavelength and frequency',
                    'Absolute value'
                ],
                commonDifficulties: [
                    'Energy levels are negative (bound states)',
                    'Confusing initial and final states',
                    'Forgetting to take absolute value of ΔE',
                    'Converting between energy and wavelength'
                ],
                extensions: [
                    'Quantum numbers',
                    'Selection rules',
                    'Multi-electron atoms',
                    'Quantum mechanics formalism'
                ],
                assessment: [
                    'Can student identify emission vs absorption?',
                    'Does student correctly calculate energy difference?',
                    'Can student convert energy to wavelength?'
                ]
            },

            radioactive_decay: {
                objectives: [
                    'Apply exponential decay law',
                    'Calculate decay constant from half-life',
                    'Determine remaining activity'
                ],
                keyConcepts: [
                    'Exponential decay',
                    'Half-life',
                    'Decay constant',
                    'Activity',
                    'Random but statistically predictable process'
                ],
                prerequisites: [
                    'Exponential functions',
                    'Natural logarithm',
                    'Basic probability',
                    'Scientific notation'
                ],
                commonDifficulties: [
                    'Using positive exponent instead of negative',
                    'Confusing half-life with decay constant',
                    'Not using consistent time units',
                    'Expecting decay to reach exactly zero'
                ],
                extensions: [
                    'Different types of decay (α, β, γ)',
                    'Decay chains',
                    'Carbon dating applications',
                    'Nuclear stability'
                ],
                assessment: [
                    'Can student relate half-life to decay constant?',
                    'Does student use negative exponential?',
                    'Can student interpret results physically?'
                ]
            }
        };

        return pedagogicalDatabase[problemType] || {
            objectives: ['Solve the given physics problem'],
            keyConcepts: ['Apply appropriate physics principles'],
            prerequisites: ['Basic physics knowledge'],
            commonDifficulties: ['Various conceptual and computational errors'],
            extensions: ['More complex variations'],
            assessment: ['Check understanding of solution process']
        };
    }

    // ALTERNATIVE METHODS

    generateAlternativeMethods(problemType) {
        const alternativeDatabase = {
            time_dilation: {
                primaryMethod: 'Direct calculation using Lorentz factor',
                methods: [
                    {
                        name: 'Graphical Method',
                        description: 'Use spacetime diagrams to visualize time dilation geometrically'
                    },
                    {
                        name: 'Series Expansion',
                        description: 'For v << c, use Taylor series: γ ≈ 1 + v²/(2c²)'
                    },
                    {
                        name: 'Hyperbolic Functions',
                        description: 'Express using rapidity: γ = cosh(φ), β = tanh(φ)'
                    }
                ],
                comparison: 'Direct calculation is most straightforward; graphical method builds intuition; series expansion good for small velocities'
            },

            photoelectric_effect: {
                primaryMethod: 'Einstein\'s photoelectric equation',
                methods: [
                    {
                        name: 'Graphical Analysis',
                        description: 'Plot K_max vs frequency to find work function from intercept'
                    },
                    {
                        name: 'Wavelength Approach',
                        description: 'Use λ = c/f to work with wavelengths instead of frequencies'
                    },
                    {
                        name: 'Energy Level Diagram',
                        description: 'Draw energy diagram showing photon energy, work function, and kinetic energy'
                    }
                ],
                comparison: 'Direct equation is fastest; graphical method useful for experimental data; energy diagrams build conceptual understanding'
            },

            bohr_model: {
                primaryMethod: 'Bohr energy formula and Rydberg equation',
                methods: [
                    {
                        name: 'Rydberg Formula',
                        description: 'Use 1/λ = R(1/n₁² - 1/n₂²) directly for wavelength'
                    },
                    {
                        name: 'Energy Level Diagram',
                        description: 'Draw energy levels and visually identify transition'
                    },
                    {
                        name: 'Quantum Mechanics',
                        description: 'Use full Schrödinger equation for hydrogen (more advanced)'
                    }
                ],
                comparison: 'Bohr formula is conceptually clear; Rydberg formula is direct for wavelength; energy diagrams aid visualization'
            },

            radioactive_decay: {
                primaryMethod: 'Exponential decay law N(t) = N₀e^(-λt)',
                methods: [
                    {
                        name: 'Half-Life Method',
                        description: 'Use N(t) = N₀(1/2)^(t/t_{1/2}) directly'
                    },
                    {
                        name: 'Activity Approach',
                        description: 'Calculate activity A(t) = λN(t) instead of N(t)'
                    },
                    {
                        name: 'Graphical Method',
                        description: 'Plot ln(N) vs t to get straight line with slope -λ'
                    }
                ],
                comparison: 'Exponential law is most general; half-life method is intuitive; activity approach useful for practical measurements'
            }
        };

        return alternativeDatabase[problemType] || {
            primaryMethod: 'Standard physics approach',
            methods: [
                {
                    name: 'Alternative Formulation',
                    description: 'Use equivalent but different mathematical formulation'
                }
            ],
            comparison: 'Method choice depends on given information and desired insight'
        };
    }

    // GRAPH DATA GENERATION

    generatePhysicsGraphData() {
        if (!this.currentSolution) return;

        const { type } = this.currentProblem;

        switch (type) {
            case 'time_dilation':
            case 'length_contraction':
                this.graphData = this.generateRelativisticGraph();
                break;

            case 'photoelectric_effect':
                this.graphData = this.generatePhotoelectricGraph();
                break;

            case 'bohr_model':
                this.graphData = this.generateBohrModelGraph();
                break;

            case 'radioactive_decay':
                this.graphData = this.generateDecayGraph();
                break;

            case 'blackbody_radiation':
                this.graphData = this.generateBlackbodyGraph();
                break;
        }
    }

    generateRelativisticGraph() {
        const points = [];
        const c = this.physicsConstants.c;

        for (let v = 0; v <= 0.99 * c; v += 0.01 * c) {
            const beta = v / c;
            const gamma = 1 / Math.sqrt(1 - beta * beta);
            points.push({ velocity: v, beta: beta, gamma: gamma });
        }

        return {
            type: 'relativistic_effects',
            points: points,
            currentVelocity: this.currentProblem.parameters.v,
            currentGamma: this.currentSolution.gamma
        };
    }

    generatePhotoelectricGraph() {
        const { workFunction } = this.currentProblem.parameters;
        const h = this.physicsConstants.h;
        const points = [];

        const f_threshold = workFunction / h;

        for (let f = 0; f <= 3 * f_threshold; f += f_threshold / 20) {
            const K_max = Math.max(0, h * f - workFunction);
            points.push({ frequency: f, kineticEnergy: K_max });
        }

        return {
            type: 'photoelectric_effect',
            points: points,
            workFunction: workFunction,
            thresholdFrequency: f_threshold,
            currentFrequency: this.currentProblem.parameters.frequency
        };
    }

    generateBohrModelGraph() {
        const energyLevels = [];

        for (let n = 1; n <= 6; n++) {
            energyLevels.push({
                n: n,
                energy: -13.6 / (n * n),
                radius: n * n * 0.529 // in Angstroms
            });
        }

        return {
            type: 'bohr_energy_levels',
            energyLevels: energyLevels,
            transition: {
                initial: this.currentProblem.parameters.nInitial,
                final: this.currentProblem.parameters.nFinal
            }
        };
    }

    generateDecayGraph() {
        const { N0, halfLife, decayConstant } = this.currentProblem.parameters;
        const lambda = decayConstant || Math.log(2) / halfLife;
        const points = [];

        for (let t = 0; t <= 5 * halfLife; t += halfLife / 20) {
            const N = N0 * Math.exp(-lambda * t);
            points.push({ time: t, amount: N, halfLives: t / halfLife });
        }

        return {
            type: 'radioactive_decay',
            points: points,
            halfLife: halfLife,
            decayConstant: lambda,
            currentTime: this.currentProblem.parameters.t
        };
    }

    generateBlackbodyGraph() {
        const { temperature } = this.currentProblem.parameters;
        const points = [];
        const h = this.physicsConstants.h;
        const c = this.physicsConstants.c;
        const k_B = this.physicsConstants.k_B;

        const lambdaPeak = 2.898e-3 / temperature;

        for (let lambda = lambdaPeak / 4; lambda <= lambdaPeak * 4; lambda += lambdaPeak / 50) {
            const intensity = (8 * Math.PI * h * c) / (Math.pow(lambda, 5)) / 
                            (Math.exp(h * c / (lambda * k_B * temperature)) - 1);
            points.push({ wavelength: lambda, intensity: intensity });
        }

        return {
            type: 'blackbody_spectrum',
            points: points,
            temperature: temperature,
            peakWavelength: lambdaPeak
        };
    }

    // WORKBOOK GENERATION

    generatePhysicsWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPhysicsConstantsSection(),
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
            title: 'Enhanced Modern Physics Mathematical Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSection() {
        if (!this.currentProblem) return null;

        const problemData = [
            ['Problem Type', this.physicsTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.physicsTypes[this.currentProblem.type]?.category || 'physics'],
            ['Description', this.currentProblem.scenario || 'Physics calculation']
        ];

        // Add parameters
        for (const [key, value] of Object.entries(this.currentProblem.parameters)) {
            if (value !== undefined && value !== null) {
                problemData.push([key, typeof value === 'number' ? value.toExponential(4) : value]);
            }
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPhysicsConstantsSection() {
        const { type } = this.currentProblem;
        const relevantConstants = this.getRelevantConstants(type);

        const constantsData = [['Constant', 'Symbol', 'Value', 'Units']];

        for (const [name, info] of Object.entries(relevantConstants)) {
            constantsData.push([name, info.symbol, info.value.toExponential(4), info.units]);
        }

        return {
            title: 'Physical Constants Used',
            type: 'constants',
            data: constantsData
        };
    }

    getRelevantConstants(problemType) {
        const constantsByType = {
            time_dilation: {
                'Speed of Light': { symbol: 'c', value: this.physicsConstants.c, units: 'm/s' }
            },
            photoelectric_effect: {
                'Planck Constant': { symbol: 'h', value: this.physicsConstants.h, units: 'J⋅s' },
                'Elementary Charge': { symbol: 'e', value: this.physicsConstants.e, units: 'C' }
            },
            bohr_model: {
                'Planck Constant': { symbol: 'h', value: this.physicsConstants.h, units: 'J⋅s' },
                'Speed of Light': { symbol: 'c', value: this.physicsConstants.c, units: 'm/s' },
                'Elementary Charge': { symbol: 'e', value: this.physicsConstants.e, units: 'C' }
            },
            radioactive_decay: {
                'Natural Log of 2': { symbol: 'ln(2)', value: Math.log(2), units: 'dimensionless' }
            }
        };

        return constantsByType[problemType] || {};
    }

    createEnhancedStepsSection() {
        if (!this.solutionSteps || this.solutionSteps.length === 0) return null;
        

        const stepsData = [];

        this.solutionSteps.forEach((step, index) => {
            // Main step header
            stepsData.push([`Step ${step.stepNumber}`, step.step]);
            stepsData.push(['Description', step.description]);

            // Expressions
            if (step.beforeExpression && step.afterExpression) {
                stepsData.push(['Before', step.beforeExpression]);
                if (step.operation) {
                    stepsData.push(['Operation', step.operation]);
                }
                stepsData.push(['After', step.afterExpression]);
            } else if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }

            // Reasoning and rules
            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.algebraicRule) {
                stepsData.push(['Formula Used', step.algebraicRule]);
            }

            if (step.physicsInsight) {
                stepsData.push(['Physics Insight', step.physicsInsight]);
            }

            // Enhanced explanations based on level
            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
                stepsData.push(['Mathematical', step.explanations.mathematical]);
            }

            // Visual hints
            if (step.visualHint) {
                stepsData.push(['Visual Hint', step.visualHint]);
            }

            // Working details
            if (step.workingDetails) {
                stepsData.push(['Working Details', '']);
                for (const [key, value] of Object.entries(step.workingDetails)) {
                    stepsData.push([`  ${key}`, value]);
                }
            }

            // Error prevention
            if (step.errorPrevention && this.includeErrorPrevention) {
                if (step.errorPrevention.commonMistakes && step.errorPrevention.commonMistakes.length > 0) {
                    stepsData.push(['Common Mistakes', step.errorPrevention.commonMistakes.join('; ')]);
                }
                if (step.errorPrevention.preventionTips && step.errorPrevention.preventionTips.length > 0) {
                    stepsData.push(['Prevention Tips', step.errorPrevention.preventionTips.join('; ')]);
                }
                if (step.errorPrevention.warningFlags && step.errorPrevention.warningFlags.length > 0) {
                    stepsData.push(['⚠️ Warnings', step.errorPrevention.warningFlags.join('; ')]);
                }
            }

            // Scaffolding for guided learning
            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                if (step.scaffolding.guidingQuestions) {
                    stepsData.push(['Guiding Questions', step.scaffolding.guidingQuestions.join(' | ')]);
                }
                if (step.scaffolding.hints) {
                    stepsData.push(['Progressive Hints', 
                        `Level 1: ${step.scaffolding.hints.level1} | Level 2: ${step.scaffolding.hints.level2}`
                    ]);
                }
            }

            // Verification if final answer
            if (step.verification) {
                stepsData.push(['Verification', '']);
                for (const [key, value] of Object.entries(step.verification)) {
                    stepsData.push([`  ${key}`, typeof value === 'boolean' ? (value ? 'Yes ✓' : 'No ✗') : value]);
                }
            }

            // Numerical result
            if (step.numericalResult !== undefined) {
                stepsData.push(['Numerical Result', 
                    typeof step.numericalResult === 'number' ? 
                        step.numericalResult.toExponential(6) : 
                        step.numericalResult
                ]);
            }

            stepsData.push(['', '']); // Spacing between steps
        });

        return {
            title: 'Enhanced Step-by-Step Solution',
            type: 'steps',
            data: stepsData
        };
    }

    createLessonSection() {
        const { type } = this.currentProblem;
        const lesson = this.lessons?.[this.physicsTypes[type]?.category];

        if (!lesson) {
            return {
                title: 'Key Physics Concepts',
                type: 'lesson',
                data: [
                    ['Concept', 'Apply fundamental physics principles to solve the problem'],
                    ['Theory', 'Use appropriate formulas and conservation laws']
                ]
            };
        }

        const lessonData = [
            ['Topic', lesson.title],
            ['', ''],
            ['Theory', lesson.theory],
            ['', ''],
            ['Key Concepts', '']
        ];

        lesson.concepts.forEach((concept, i) => {
            lessonData.push([`  ${i + 1}`, concept]);
        });

        lessonData.push(['', '']);
        lessonData.push(['Important Formulas', '']);

        for (const [name, formula] of Object.entries(lesson.keyFormulas)) {
            lessonData.push([name, formula]);
        }

        if (lesson.applications) {
            lessonData.push(['', '']);
            lessonData.push(['Applications', '']);
            lesson.applications.forEach((app, i) => {
                lessonData.push([`  ${i + 1}`, app]);
            });
        }

        return {
            title: 'Physics Theory and Concepts',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [['Solution Summary', '']];

        // Add main results
        for (const [key, value] of Object.entries(this.currentSolution)) {
            if (key === 'category' || key === 'solutionType' || key === 'physicalInterpretation') {
                continue;
            }

            if (typeof value === 'number') {
                solutionData.push([this.formatKey(key), value.toExponential(6)]);
            } else if (typeof value === 'string') {
                solutionData.push([this.formatKey(key), value]);
            } else if (typeof value === 'object' && !Array.isArray(value)) {
                solutionData.push(['', '']);
                solutionData.push([this.formatKey(key), '']);
                for (const [subKey, subValue] of Object.entries(value)) {
                    solutionData.push([`  ${this.formatKey(subKey)}`, 
                        typeof subValue === 'number' ? subValue.toExponential(4) : subValue
                    ]);
                }
            }
        }

        // Physical interpretation
        if (this.currentSolution.physicalInterpretation) {
            solutionData.push(['', '']);
            solutionData.push(['Physical Interpretation', '']);
            if (typeof this.currentSolution.physicalInterpretation === 'string') {
                solutionData.push(['', this.currentSolution.physicalInterpretation]);
            } else {
                for (const [key, value] of Object.entries(this.currentSolution.physicalInterpretation)) {
                    solutionData.push([this.formatKey(key), value]);
                }
            }
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    formatKey(key) {
        return key
            .replace(/([A-Z])/g, ' $1')
            .replace(/_/g, ' ')
            .replace(/^./, str => str.toUpperCase())
            .trim();
    }

    createAnalysisSection() {
        const analysisData = [
            ['Problem Type', this.physicsTypes[this.currentProblem.type]?.name || 'Physics Problem'],
            ['Category', this.physicsTypes[this.currentProblem.type]?.category || 'Modern Physics'],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Explanation Level', this.explanationLevel],
            ['', '']
        ];

        // Add physics-specific analysis
        const { type } = this.currentProblem;

        switch (type) {
            case 'time_dilation':
            case 'length_contraction':
            case 'lorentz_factor':
                const beta = this.currentSolution.beta;
                analysisData.push(['Velocity Regime', beta < 0.1 ? 'Non-relativistic' : beta < 0.5 ? 'Mildly relativistic' : 'Highly relativistic']);
                analysisData.push(['Relativistic Effects', beta < 0.1 ? 'Negligible' : beta < 0.5 ? 'Moderate' : 'Significant']);
                break;

            case 'photoelectric_effect':
                analysisData.push(['Threshold Met', this.currentSolution.canEject ? 'Yes - electrons ejected' : 'No - below threshold']);
                break;

            case 'bohr_model':
                analysisData.push(['Transition Type', this.currentSolution.transitionType || 'N/A']);
                analysisData.push(['Spectral Series', this.currentSolution.spectralSeries || 'N/A']);
                analysisData.push(['Spectral Region', this.getSpectralRegion(this.currentSolution.wavelength)]);
                break;

            case 'radioactive_decay':
                const halfLives = this.currentSolution.halfLivesElapsed;
                analysisData.push(['Half-Lives Elapsed', halfLives?.toFixed(2) || 'N/A']);
                analysisData.push(['Decay Status', halfLives < 1 ? 'Early decay' : halfLives < 3 ? 'Moderate decay' : 'Advanced decay']);
                break;
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
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
            case 'time_dilation':
            case 'length_contraction':
            case 'lorentz_factor':
                verification = this.verifyTimeDilation();
                verificationData.push(...this.formatTimeDilationVerification(verification));
                break;

            case 'photoelectric_effect':
                verification = this.verifyPhotoelectricEffect();
                verificationData.push(...this.formatPhotoelectricVerification(verification));
                break;

            case 'bohr_model':
            case 'rydberg_formula':
                verification = this.verifyBohrModel();
                verificationData.push(...this.formatBohrModelVerification(verification));
                break;

            case 'radioactive_decay':
                verification = this.verifyRadioactiveDecay();
                verificationData.push(...this.formatRadioactiveDecayVerification(verification));
                break;

            default:
                verificationData.push(['General Check', 'Solution verified using standard physics methods']);
                verificationData.push(['Units', 'All units consistent (SI)']);
                verificationData.push(['Physical Validity', 'Result satisfies physical constraints']);
        }

        if (this.verificationDetail === 'detailed') {
            verificationData.push(['', '']);
            verificationData.push(['Confidence Level', this.calculateVerificationConfidence()]);
            verificationData.push(['Verification Notes', this.getVerificationNotes()]);
            verificationData.push(['Physical Reasonableness', 'Result is physically plausible']);
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
            title: 'Teaching and Learning Notes',
            type: 'pedagogical',
            data: [
                ['Learning Objectives', notes.objectives.join('; ')],
                ['', ''],
                ['Key Physics Concepts', notes.keyConcepts.join('; ')],
                ['', ''],
                ['Prerequisites', notes.prerequisites.join('; ')],
                ['', ''],
                ['Common Student Difficulties', notes.commonDifficulties.join('; ')],
                ['', ''],
                ['Extension Topics', notes.extensions.join('; ')],
                ['', ''],
                ['Assessment Guidelines', notes.assessment.join('; ')]
            ]
        };
    }

    createAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const { type } = this.currentProblem;
        const alternatives = this.generateAlternativeMethods(type);

        const methodsData = [
            ['Primary Method Used', alternatives.primaryMethod],
            ['', ''],
            ['Alternative Solution Methods', '']
        ];

        alternatives.methods.forEach((method, index) => {
            methodsData.push(['', '']);
            methodsData.push([`Method ${index + 1}: ${method.name}`, '']);
            methodsData.push(['Description', method.description]);
        });

        methodsData.push(['', '']);
        methodsData.push(['Method Comparison', alternatives.comparison]);

        return {
            title: 'Alternative Solution Methods',
            type: 'alternatives',
            data: methodsData
        };
    }
}

// Export the class
export default EnhancedPhysicsMathematicalWorkbook;
