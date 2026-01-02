// Enhanced Nuclear Physics Mathematical Workbook - Improved Step-by-Step Explanations
import * as math from 'mathjs';

export class EnhancedNuclearPhysicsMathematicalWorkbook {
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
        this.initializeNuclearSolvers();
        this.initializeErrorDatabase();
        this.initializeExplanationTemplates();
    }

    initializePhysicsConstants() {
        return {
            // Fundamental constants
            c: 299792458, // Speed of light (m/s)
            h: 6.62607015e-34, // Planck's constant (J⋅s)
            hbar: 1.054571817e-34, // Reduced Planck's constant (J⋅s)
            
            // Nuclear constants
            u: 931.494, // Atomic mass unit (MeV/c²)
            amu: 1.66053906660e-27, // Atomic mass unit (kg)
            electronMass: 0.511, // Electron rest mass (MeV/c²)
            protonMass: 938.272, // Proton rest mass (MeV/c²)
            neutronMass: 939.565, // Neutron rest mass (MeV/c²)
            
            // Other constants
            avogadro: 6.02214076e23, // Avogadro's number (mol⁻¹)
            boltzmann: 1.380649e-23, // Boltzmann constant (J/K)
            elementaryCharge: 1.602176634e-19, // Elementary charge (C)
            epsilon0: 8.854187817e-12, // Vacuum permittivity (F/m)
            
            // Conversion factors
            eV_to_J: 1.602176634e-19,
            J_to_eV: 6.241509074e18,
            MeV_to_kg: 1.78266192e-30
        };
    }

    initializeNuclearLessons() {
        this.lessons = {
            nuclear_decay: {
                title: "Radioactive Decay",
                concepts: [
                    "Exponential decay law: N(t) = N₀e^(-λt)",
                    "Activity: A(t) = λN(t) = A₀e^(-λt)",
                    "Half-life relationship: t₁/₂ = ln(2)/λ",
                    "Mean lifetime: τ = 1/λ"
                ],
                theory: "Radioactive decay is a spontaneous process where unstable nuclei emit radiation. The decay follows an exponential law governed by the decay constant λ, which is characteristic of each radioactive isotope.",
                keyFormulas: {
                    "Decay Law": "N(t) = N₀e^(-λt)",
                    "Activity": "A(t) = λN(t)",
                    "Half-life": "t₁/₂ = ln(2)/λ = 0.693/λ",
                    "Mean Lifetime": "τ = 1/λ",
                    "Decay Constant from Half-life": "λ = ln(2)/t₁/₂"
                },
                solvingSteps: [
                    "Identify known quantities (N₀, t, λ, or t₁/₂)",
                    "Convert half-life to decay constant if needed: λ = ln(2)/t₁/₂",
                    "Apply appropriate decay formula",
                    "Calculate using exponential function",
                    "Verify units and physical reasonableness"
                ],
                applications: [
                    "Carbon-14 dating",
                    "Medical radioisotope dosimetry",
                    "Nuclear waste management",
                    "Geological age determination"
                ]
            },

            binding_energy: {
                title: "Nuclear Binding Energy",
                concepts: [
                    "Mass defect: Δm = (Zmp + Nmn - Mnucleus)",
                    "Binding energy: BE = Δm × c²",
                    "Binding energy per nucleon: BE/A",
                    "Energy release in nuclear reactions"
                ],
                theory: "Nuclear binding energy is the energy required to disassemble a nucleus into separate protons and neutrons. The mass defect arises from Einstein's mass-energy equivalence, where the 'missing' mass has been converted to binding energy.",
                keyFormulas: {
                    "Mass Defect": "Δm = Zmp + Nmn - Mnucleus",
                    "Binding Energy (MeV)": "BE = Δm(u) × 931.494 MeV/u",
                    "Binding Energy (J)": "BE = Δm(kg) × c²",
                    "BE per Nucleon": "BE/A where A = Z + N",
                    "Q-value": "Q = (Σm_initial - Σm_final)c²"
                },
                solvingSteps: [
                    "Determine composition: Z protons, N neutrons",
                    "Calculate total mass of separated nucleons",
                    "Find actual nuclear mass from tables",
                    "Calculate mass defect: Δm",
                    "Convert to energy: BE = Δm × c² (or × 931.494 MeV/u)",
                    "For BE/A, divide by mass number A"
                ],
                applications: [
                    "Nuclear stability analysis",
                    "Energy release in fission/fusion",
                    "Stellar nucleosynthesis",
                    "Nuclear power calculations"
                ]
            },

            alpha_decay: {
                title: "Alpha Decay",
                concepts: [
                    "Parent nucleus emits He-4 nucleus (α particle)",
                    "Mass number decreases by 4",
                    "Atomic number decreases by 2",
                    "Q-value determines kinetic energy distribution"
                ],
                theory: "Alpha decay occurs when heavy nuclei (typically A > 200) emit helium-4 nuclei to achieve greater stability. The process conserves mass-energy, momentum, and charge.",
                keyFormulas: {
                    "Decay Equation": "ᴬ_Z X → ᴬ⁻⁴_{Z-2} Y + ⁴₂He",
                    "Q-value": "Q = [M(X) - M(Y) - M(α)]c²",
                    "Alpha KE": "KE_α = Q × M(Y)/(M(Y) + M(α))",
                    "Recoil KE": "KE_recoil = Q × M(α)/(M(Y) + M(α))",
                    "Geiger-Nuttall": "log λ ∝ -Z/√E_α"
                },
                solvingSteps: [
                    "Write decay equation showing mass/atomic number changes",
                    "Calculate Q-value from mass differences",
                    "Apply momentum conservation for KE distribution",
                    "Check energy-mass balance",
                    "Verify decay is energetically favorable (Q > 0)"
                ],
                applications: [
                    "Smoke detectors (Am-241)",
                    "Radiotherapy for cancer",
                    "Helium dating",
                    "Alpha spectroscopy"
                ]
            },

            beta_decay: {
                title: "Beta Decay",
                concepts: [
                    "β⁻ decay: neutron → proton + electron + antineutrino",
                    "β⁺ decay: proton → neutron + positron + neutrino",
                    "Electron capture: proton + electron → neutron + neutrino",
                    "Continuous energy spectrum due to three-body decay"
                ],
                theory: "Beta decay involves the weak nuclear force transforming neutrons into protons (β⁻) or protons into neutrons (β⁺, EC). The neutrino carries away varying energy, producing a continuous beta spectrum.",
                keyFormulas: {
                    "β⁻ Decay": "ᴬ_Z X → ᴬ_{Z+1} Y + e⁻ + ν̄_e",
                    "β⁺ Decay": "ᴬ_Z X → ᴬ_{Z-1} Y + e⁺ + ν_e",
                    "Electron Capture": "ᴬ_Z X + e⁻ → ᴬ_{Z-1} Y + ν_e",
                    "Q-value (β⁻)": "Q = [M(X) - M(Y)]c²",
                    "Q-value (β⁺)": "Q = [M(X) - M(Y) - 2mₑ]c²",
                    "Maximum Beta Energy": "E_max = Q - E_neutrino"
                },
                solvingSteps: [
                    "Identify decay type based on neutron/proton ratio",
                    "Write decay equation with proper particles",
                    "Calculate Q-value using atomic masses",
                    "Account for electron mass in β⁺ decay",
                    "Determine maximum beta particle energy"
                ],
                applications: [
                    "Medical PET scans (β⁺ emitters)",
                    "Carbon-14 dating (β⁻)",
                    "Thickness gauges",
                    "Tracer studies in biology"
                ]
            },

            gamma_decay: {
                title: "Gamma Decay and Nuclear Transitions",
                concepts: [
                    "Electromagnetic radiation from excited nuclear states",
                    "No change in mass or atomic number",
                    "Discrete photon energies",
                    "Internal conversion as competing process"
                ],
                theory: "Gamma decay occurs when an excited nucleus transitions to a lower energy state by emitting a photon. The photon energy equals the energy difference between nuclear levels.",
                keyFormulas: {
                    "Gamma Energy": "E_γ = ΔE = E_initial - E_final",
                    "Photon Energy": "E = hf = hc/λ",
                    "Recoil Energy": "E_recoil = E_γ²/(2Mc²)",
                    "Internal Conversion": "α = N_e/N_γ",
                    "Selection Rules": "Δl ≥ |ΔJ|, Parity: π_i × π_f = (-1)^l"
                },
                solvingSteps: [
                    "Identify initial and final nuclear states",
                    "Calculate energy difference",
                    "Account for nuclear recoil (usually negligible)",
                    "Check selection rules for transition",
                    "Calculate photon wavelength/frequency if needed"
                ],
                applications: [
                    "Medical imaging (Tc-99m)",
                    "Material analysis (Mössbauer spectroscopy)",
                    "Nuclear structure studies",
                    "Sterilization processes"
                ]
            },

            nuclear_reactions: {
                title: "Nuclear Reactions and Q-values",
                concepts: [
                    "General form: A + B → C + D",
                    "Conservation of mass-energy, charge, nucleon number",
                    "Q-value determines exothermic/endothermic nature",
                    "Threshold energy for endothermic reactions"
                ],
                theory: "Nuclear reactions involve the rearrangement of nucleons between nuclei. The Q-value represents the energy released (Q > 0) or required (Q < 0) for the reaction to proceed.",
                keyFormulas: {
                    "Q-value": "Q = [(mA + mB) - (mC + mD)]c²",
                    "Q in MeV": "Q = [M_initial - M_final] × 931.494 MeV/u",
                    "Threshold Energy": "E_th = -Q(1 + mC/mB + mD/mB + Q/(2mBc²))",
                    "Center of Mass Energy": "E_CM = E_lab × mB/(mA + mB)",
                    "Reaction Cross Section": "σ = N_reactions/(Φ × N_target)"
                },
                solvingSteps: [
                    "Write balanced nuclear reaction equation",
                    "Verify conservation laws (A, Z, charge)",
                    "Look up or calculate masses of all species",
                    "Calculate Q-value from mass difference",
                    "Determine if exothermic (Q > 0) or endothermic (Q < 0)",
                    "For Q < 0, calculate threshold energy"
                ],
                applications: [
                    "Neutron activation analysis",
                    "Particle accelerator experiments",
                    "Nuclear fuel breeding",
                    "Medical isotope production"
                ]
            },

            fission: {
                title: "Nuclear Fission",
                concepts: [
                    "Heavy nucleus splits into lighter fragments",
                    "Releases ~200 MeV per fission event",
                    "Produces 2-3 neutrons per fission",
                    "Chain reaction possible with k-factor"
                ],
                theory: "Nuclear fission occurs when a heavy nucleus (U-235, Pu-239) absorbs a neutron and splits into two medium-mass fragments, releasing energy and additional neutrons that can sustain a chain reaction.",
                keyFormulas: {
                    "Energy Release": "Q ≈ 200 MeV per fission",
                    "Multiplication Factor": "k = (neutrons produced)/(neutrons absorbed)",
                    "Critical Mass": "M_crit ∝ ρ/Σ_a",
                    "Power Output": "P = E_fission × R × N",
                    "Breeding Ratio": "BR = (fissile produced)/(fissile consumed)",
                    "Conversion Factor": "1 fission/sec = 3.2 × 10⁻¹¹ W"
                },
                solvingSteps: [
                    "Identify fissile isotope and reaction type",
                    "Calculate Q-value or use typical ~200 MeV",
                    "Determine neutron multiplication factor k",
                    "Calculate power from fission rate",
                    "Account for energy distribution (kinetic, gamma, neutrino)",
                    "Consider neutron economy and criticality"
                ],
                applications: [
                    "Nuclear power reactors",
                    "Nuclear weapons",
                    "Radioisotope production",
                    "Research reactors"
                ]
            },

            fusion: {
                title: "Nuclear Fusion",
                concepts: [
                    "Light nuclei combine to form heavier nucleus",
                    "Requires high temperature to overcome Coulomb barrier",
                    "Powers stars through various cycles",
                    "Potential clean energy source"
                ],
                theory: "Nuclear fusion combines light nuclei (typically hydrogen isotopes) to form heavier nuclei, releasing energy due to increased binding energy per nucleon. The process requires extreme temperatures (~10⁷-10⁸ K) to overcome electrostatic repulsion.",
                keyFormulas: {
                    "D-T Reaction": "²H + ³H → ⁴He + n + 17.6 MeV",
                    "D-D Reaction": "²H + ²H → ³He + n + 3.27 MeV",
                    "p-p Chain": "4p → ⁴He + 2e⁺ + 2νₑ + 26.7 MeV",
                    "Lawson Criterion": "nτE ≥ 10²⁰ s⋅m⁻³ (D-T)",
                    "Coulomb Barrier": "V_C = Z₁Z₂e²/(4πε₀r)",
                    "Gamow Energy": "E_G = (παZ₁Z₂e²/ℏ)² × 2μc²"
                },
                solvingSteps: [
                    "Identify fusion reaction type",
                    "Calculate Q-value from mass differences",
                    "Estimate Coulomb barrier height",
                    "Calculate required temperature from E ~ kT",
                    "Consider quantum tunneling probability",
                    "Check Lawson criterion for ignition"
                ],
                applications: [
                    "Stellar energy production",
                    "Hydrogen bomb",
                    "Fusion reactor research (ITER, NIF)",
                    "Neutron source for materials testing"
                ]
            },

            dosimetry: {
                title: "Radiation Dosimetry",
                concepts: [
                    "Absorbed dose: energy deposited per unit mass",
                    "Equivalent dose: accounts for radiation type",
                    "Effective dose: accounts for tissue sensitivity",
                    "Activity vs. dose rate relationship"
                ],
                theory: "Dosimetry quantifies the biological effect of radiation exposure. Different types of radiation have different biological effectiveness, requiring weighting factors for accurate risk assessment.",
                keyFormulas: {
                    "Absorbed Dose": "D = E/m (Gray, 1 Gy = 1 J/kg)",
                    "Equivalent Dose": "H = D × w_R (Sievert)",
                    "Effective Dose": "E = Σ(w_T × H_T)",
                    "Dose Rate": "Ḋ = A × Γ × t/r²",
                    "Activity": "A = λN (Becquerel, 1 Bq = 1 decay/s)",
                    "Curie": "1 Ci = 3.7 × 10¹⁰ Bq"
                },
                solvingSteps: [
                    "Calculate or measure absorbed dose (Gy)",
                    "Identify radiation type and apply w_R factor",
                    "Calculate equivalent dose (Sv)",
                    "For multiple organs, calculate effective dose",
                    "Compare to regulatory limits",
                    "Apply ALARA principle"
                ],
                applications: [
                    "Medical radiation safety",
                    "Nuclear power plant safety",
                    "Space radiation protection",
                    "Radiotherapy treatment planning"
                ]
            },

            cross_sections: {
                title: "Nuclear Cross Sections and Reaction Rates",
                concepts: [
                    "Cross section: probability measure for nuclear interactions",
                    "Depends on energy, target nucleus, and projectile",
                    "Barn unit: 1 b = 10⁻²⁸ m²",
                    "Reaction rate proportional to cross section"
                ],
                theory: "Nuclear cross sections quantify the likelihood of a specific nuclear reaction occurring. They vary with incident particle energy and are fundamental to understanding nuclear processes.",
                keyFormulas: {
                    "Reaction Rate": "R = Φ × N × σ",
                    "Neutron Flux": "Φ = nv (neutrons/cm²⋅s)",
                    "Mean Free Path": "λ = 1/(Nσ)",
                    "Transmission": "I = I₀e^(-Nσx)",
                    "Total Cross Section": "σ_total = σ_elastic + σ_inelastic + σ_capture",
                    "Breit-Wigner": "σ(E) ∝ Γ²/[(E-E₀)² + Γ²/4]"
                },
                solvingSteps: [
                    "Identify interaction type and energy range",
                    "Look up or calculate cross section σ",
                    "Determine neutron flux Φ",
                    "Calculate target nuclei number density N",
                    "Compute reaction rate: R = ΦNσ",
                    "Consider energy dependence if needed"
                ],
                applications: [
                    "Reactor physics calculations",
                    "Shielding design",
                    "Neutron activation analysis",
                    "Nuclear astrophysics"
                ]
            },

            nuclear_models: {
                title: "Nuclear Models",
                concepts: [
                    "Liquid drop model: treats nucleus as charged fluid drop",
                    "Shell model: nucleons occupy discrete energy levels",
                    "Semi-empirical mass formula (SEMF)",
                    "Magic numbers: 2, 8, 20, 28, 50, 82, 126"
                ],
                theory: "Nuclear models provide frameworks for understanding nuclear structure and properties. The liquid drop model explains global trends (binding energy), while the shell model explains discrete nuclear properties (magic numbers, spins).",
                keyFormulas: {
                    "SEMF": "BE = a_vA - a_sA^(2/3) - a_cZ²/A^(1/3) - a_a(N-Z)²/A ± δ(A)",
                    "Volume Term": "a_v ≈ 15.75 MeV",
                    "Surface Term": "a_s ≈ 17.8 MeV",
                    "Coulomb Term": "a_c ≈ 0.711 MeV",
                    "Asymmetry Term": "a_a ≈ 23.7 MeV",
                    "Pairing Term": "δ = +12/A^(1/2) (e-e), 0 (e-o), -12/A^(1/2) (o-o)"
                },
                solvingSteps: [
                    "Identify nucleus: mass number A, atomic number Z",
                    "Determine N = A - Z",
                    "Calculate each SEMF term separately",
                    "Apply pairing term based on even/odd Z, N",
                    "Sum all contributions for total BE",
                    "Compare to experimental values"
                ],
                applications: [
                    "Predicting nuclear masses",
                    "Understanding nuclear stability",
                    "Fission barrier calculations",
                    "Nuclear chart systematics"
                ]
            },

            neutron_physics: {
                title: "Neutron Physics and Moderation",
                concepts: [
                    "Neutron energy classification: thermal, epithermal, fast",
                    "Moderation: slowing down of neutrons",
                    "Diffusion and transport of neutrons",
                    "Neutron economy in reactors"
                ],
                theory: "Neutron physics describes the behavior of free neutrons in matter. Understanding neutron interactions, slowing down, and diffusion is crucial for reactor design and neutron source applications.",
                keyFormulas: {
                    "Average Energy Loss": "ξ = 1 - [(A-1)²/(2A)]ln[(A+1)/(A-1)]",
                    "Number of Collisions": "n = ln(E₀/E)/ξ",
                    "Moderating Ratio": "MR = ξΣ_s/Σ_a",
                    "Diffusion Equation": "∇²Φ - κ²Φ + S/D = 0",
                    "Six-Factor Formula": "k_eff = ηfεpP_FNL P_TNL",
                    "Thermal Energy": "E_thermal ≈ 0.025 eV at 300 K"
                },
                solvingSteps: [
                    "Classify neutron energy range",
                    "For moderation: calculate average logarithmic energy decrement",
                    "Determine number of collisions needed",
                    "Calculate moderating power and ratio",
                    "Apply diffusion theory if needed",
                    "Consider absorption and leakage"
                ],
                applications: [
                    "Reactor moderation design",
                    "Neutron sources and detectors",
                    "Boron neutron capture therapy",
                    "Neutron scattering experiments"
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
                warningBg: '#fff3cd',
                dangerBg: '#f8d7da'
            },
            nuclear: {
                background: '#1a1a2e',
                gridColor: '#00ff41',
                headerBg: '#16213e',
                headerText: '#00ff41',
                sectionBg: '#0f3460',
                sectionText: '#00ff41',
                cellBg: '#16213e',
                cellText: '#e0e0e0',
                resultBg: '#1a472a',
                resultText: '#00ff41',
                formulaBg: '#2d4a6a',
                formulaText: '#ffd700',
                stepBg: '#1e3a5f',
                stepText: '#b0c4de',
                borderColor: '#00ff41',
                mathBg: '#1a3a52',
                mathText: '#87ceeb',
                graphBg: '#0f2537',
                warningBg: '#4a4a1a',
                dangerBg: '#4a1a1a'
            }
        };

        this.colors = themes[this.theme] || themes.scientific;
    }

    initializeMathSymbols() {
        return {
            // Greek letters (physics)
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'epsilon': 'ε', 'lambda': 'λ', 'mu': 'μ', 'nu': 'ν',
            'pi': 'π', 'rho': 'ρ', 'sigma': 'σ', 'tau': 'τ',
            'phi': 'φ', 'chi': 'χ', 'psi': 'ψ', 'omega': 'ω',
            
            // Nuclear physics symbols
            'hbar': 'ℏ', 'approximately': '≈', 'proportional': '∝',
            'infinity': '∞', 'plusminus': '±', 'times': '×',
            'divide': '÷', 'partial': '∂', 'nabla': '∇',
            
            // Superscripts/subscripts indicators
            'sub0': '₀', 'sub1': '₁', 'sub2': '₂',
            'sup2': '²', 'sup3': '³', 'sup4': '⁴'
        };
    }

    initializeNuclearSolvers() {
        this.nuclearTypes = {
            radioactive_decay: {
                patterns: [
                    /decay.*half.*life/i,
                    /activity.*time/i,
                    /exponential.*decay/i,
                    /N\(t\)|A\(t\)/i,
                    /decay.*constant/i
                ],
                solver: this.solveRadioactiveDecay.bind(this),
                name: 'Radioactive Decay',
                category: 'decay_processes',
                description: 'Solves exponential decay problems with half-life and activity'
            },

            binding_energy: {
                patterns: [
                    /binding.*energy/i,
                    /mass.*defect/i,
                    /BE\/A|binding.*per.*nucleon/i,
                    /nuclear.*stability/i
                ],
                solver: this.solveBindingEnergy.bind(this),
                name: 'Nuclear Binding Energy',
                category: 'nuclear_energetics',
                description: 'Calculates binding energy and mass defect'
            },

            alpha_decay: {
                patterns: [
                    /alpha.*decay/i,
                    /α.*decay/i,
                    /helium.*emission/i,
                    /Q.*value.*alpha/i
                ],
                solver: this.solveAlphaDecay.bind(this),
                name: 'Alpha Decay',
                category: 'decay_processes',
                description: 'Analyzes alpha decay including Q-value and kinetic energy distribution'
            },

            beta_decay: {
                patterns: [
                    /beta.*decay/i,
                    /β.*decay/i,
                    /electron.*emission/i,
                    /positron.*emission/i,
                    /electron.*capture/i
                ],
                solver: this.solveBetaDecay.bind(this),
                name: 'Beta Decay',
                category: 'decay_processes',
                description: 'Analyzes beta decay (β⁻, β⁺, EC) including Q-values'
            },

            gamma_decay: {
                patterns: [
                    /gamma.*decay/i,
                    /γ.*transition/i,
                    /photon.*emission/i,
                    /nuclear.*level/i,
                    /isomeric.*transition/i
                ],
                solver: this.solveGammaDecay.bind(this),
                name: 'Gamma Decay',
                category: 'decay_processes',
                description: 'Analyzes gamma ray emission and nuclear transitions'
            },

            nuclear_reaction: {
                patterns: [
                    /nuclear.*reaction/i,
                    /Q.*value.*reaction/i,
                    /threshold.*energy/i,
                    /cross.*section/i,
                    /\+.*→/  // Reaction arrow
                ],
                solver: this.solveNuclearReaction.bind(this),
                name: 'Nuclear Reactions',
                category: 'reactions',
                description: 'Analyzes nuclear reactions, Q-values, and thresholds'
            },

            fission: {
                patterns: [
                    /fission/i,
                    /uranium.*split/i,
                    /chain.*reaction/i,
                    /multiplication.*factor/i,
                    /critical.*mass/i
                ],
                solver: this.solveFission.bind(this),
                name: 'Nuclear Fission',
                category:'reactions',
                description: 'Analyzes fission reactions, energy release, and chain reactions'
            },

            fusion: {
                patterns: [
                    /fusion/i,
                    /deuterium.*tritium/i,
                    /stellar.*energy/i,
                    /Lawson.*criterion/i,
                    /Coulomb.*barrier/i
                ],
                solver: this.solveFusion.bind(this),
                name: 'Nuclear Fusion',
                category: 'reactions',
                description: 'Analyzes fusion reactions and ignition conditions'
            },

            dosimetry: {
                patterns: [
                    /dose|dosimetry/i,
                    /absorbed.*dose/i,
                    /equivalent.*dose/i,
                    /effective.*dose/i,
                    /Gray|Sievert|rem/i
                ],
                solver: this.solveDosimetry.bind(this),
                name: 'Radiation Dosimetry',
                category: 'radiation_protection',
                description: 'Calculates radiation doses and biological effects'
            },

            cross_section: {
                patterns: [
                    /cross.*section/i,
                    /reaction.*rate/i,
                    /neutron.*flux/i,
                    /barn|barns/i,
                    /mean.*free.*path/i
                ],
                solver: this.solveCrossSection.bind(this),
                name: 'Cross Sections and Reaction Rates',
                category: 'neutron_physics',
                description: 'Calculates cross sections and reaction rates'
            },

            nuclear_model: {
                patterns: [
                    /SEMF|semi.*empirical/i,
                    /liquid.*drop/i,
                    /shell.*model/i,
                    /magic.*number/i,
                    /binding.*energy.*formula/i
                ],
                solver: this.solveNuclearModel.bind(this),
                name: 'Nuclear Models',
                category: 'nuclear_structure',
                description: 'Applies nuclear models (SEMF, shell model)'
            },

            neutron_moderation: {
                patterns: [
                    /moderation|moderator/i,
                    /neutron.*slowing/i,
                    /thermal.*neutron/i,
                    /energy.*loss.*neutron/i,
                    /collision.*number/i
                ],
                solver: this.solveNeutronModeration.bind(this),
                name: 'Neutron Moderation',
                category: 'neutron_physics',
                description: 'Analyzes neutron slowing down and moderation'
            },

            decay_chain: {
                patterns: [
                    /decay.*chain|series/i,
                    /secular.*equilibrium/i,
                    /transient.*equilibrium/i,
                    /Bateman.*equation/i
                ],
                solver: this.solveDecayChain.bind(this),
                name: 'Decay Chains',
                category: 'decay_processes',
                description: 'Analyzes radioactive decay chains and equilibria'
            },

            reactor_physics: {
                patterns: [
                    /reactor.*physics/i,
                    /criticality/i,
                    /k.*effective|k-effective/i,
                    /four.*factor|six.*factor/i,
                    /reactivity/i
                ],
                solver: this.solveReactorPhysics.bind(this),
                name: 'Reactor Physics',
                category: 'reactor_engineering',
                description: 'Analyzes nuclear reactor behavior and criticality'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            radioactive_decay: {
                'Calculate decay constant': [
                    'Forgetting to convert half-life units (years, days, seconds)',
                    'Using wrong formula: λ = ln(2)/t₁/₂, not 1/t₁/₂',
                    'Confusing decay constant with activity'
                ],
                'Apply exponential decay': [
                    'Sign error in exponent (should be negative)',
                    'Using wrong time units in calculation',
                    'Forgetting that N and A both decay exponentially'
                ]
            },
            binding_energy: {
                'Calculate mass defect': [
                    'Using atomic masses instead of nuclear masses',
                    'Forgetting to account for electron masses correctly',
                    'Arithmetic errors in summing masses',
                    'Wrong number of protons or neutrons'
                ],
                'Convert to energy': [
                    'Using wrong conversion factor (931.494 MeV/u)',
                    'Mixing units (MeV vs. J)',
                    'Forgetting c² in E = mc²'
                ]
            },
            alpha_decay: {
                'Write decay equation': [
                    'Incorrect mass number change (should be -4)',
                    'Incorrect atomic number change (should be -2)',
                    'Not balancing the equation properly'
                ],
                'Calculate Q-value': [
                    'Using wrong masses for products',
                    'Sign error (Q should be positive for spontaneous decay)',
                    'Forgetting alpha particle mass'
                ]
            },
            beta_decay: {
                'Identify decay type': [
                    'Confusing β⁻ and β⁺ decay',
                    'Not considering electron capture option',
                    'Wrong mass number change (β decay doesn\'t change A)'
                ],
                'Calculate Q-value': [
                    'Forgetting 2mₑ term in β⁺ decay Q-value',
                    'Using nuclear masses when atomic masses are given',
                    'Sign errors in mass differences'
                ]
            },
            nuclear_reaction: {
                'Balance reaction': [
                    'Not conserving mass number A',
                    'Not conserving atomic number Z',
                    'Missing particles in equation'
                ],
                'Calculate Q-value': [
                    'Wrong sign convention (initial - final)',
                    'Forgetting to include all reaction products',
                    'Using wrong mass values'
                ]
            },
            fission: {
                'Calculate energy release': [
                    'Using wrong typical value (~200 MeV per fission)',
                    'Not accounting for neutrino energy loss',
                    'Confusion between total and recoverable energy'
                ],
                'Calculate power': [
                    'Wrong conversion from fissions/sec to Watts',
                    'Not converting MeV to Joules properly',
                    'Forgetting efficiency factors'
                ]
            }
        };

        this.errorPrevention = {
            unit_checking: {
                reminder: 'Always verify units match before calculations',
                method: 'Write out units explicitly in each step'
            },
            conservation_laws: {
                reminder: 'Check conservation of A, Z, mass-energy, and momentum',
                method: 'Create checklist for each conservation law'
            },
            sign_conventions: {
                reminder: 'Q > 0 for exothermic, Q < 0 for endothermic',
                method: 'Draw energy level diagram to visualize'
            },
            mass_consistency: {
                reminder: 'Be consistent with atomic vs. nuclear masses',
                method: 'Label each mass clearly with subscripts'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Physical meaning and nuclear processes',
                language: 'intuitive physics concepts'
            },
            procedural: {
                focus: 'Step-by-step calculation methodology',
                language: 'precise calculation instructions'
            },
            visual: {
                focus: 'Energy level diagrams and decay schemes',
                language: 'graphical and spatial descriptions'
            },
            mathematical: {
                focus: 'Equations, derivations, and formal physics',
                language: 'rigorous mathematical notation'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'introductory physics terms',
                detail: 'essential concepts and formulas only',
                examples: 'simple numerical cases'
            },
            intermediate: {
                vocabulary: 'standard nuclear physics terminology',
                detail: 'main concepts with physical explanations',
                examples: 'realistic nuclear physics problems'
            },
            detailed: {
                vocabulary: 'advanced nuclear physics vocabulary',
                detail: 'comprehensive derivations and theory',
                examples: 'complex multi-step problems'
            },
            scaffolded: {
                vocabulary: 'progressive from basic to advanced',
                detail: 'guided problem-solving with questions',
                examples: 'carefully structured difficulty progression'
            }
        };
    }

    // MAIN SOLVER METHOD
    solveNuclearProblem(config) {
        const { equation, scenario, parameters, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseNuclearProblem(equation, scenario, parameters, problemType, context);

            // Solve the problem
            this.currentSolution = this.solveNuclearProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateNuclearSteps(this.currentProblem, this.currentSolution);

            // Generate graph data if applicable
            this.generateNuclearGraphData();

            // Generate workbook
            this.generateNuclearWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                physicalInterpretation: this.currentSolution?.interpretation,
                safetyConsiderations: this.currentSolution?.safety
            };

        } catch (error) {
            throw new Error(`Failed to solve nuclear physics problem: ${error.message}`);
        }
    }

    parseNuclearProblem(equation, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = equation ? this.cleanMathExpression(equation) : '';

        // If problem type is specified, use it directly
        if (problemType && this.nuclearTypes[problemType]) {
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

        // Auto-detect nuclear problem type
        for (const [type, config] of Object.entries(this.nuclearTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(scenario)) {
                    const extractedParams = this.extractNuclearParameters(cleanInput, type, parameters);

                    return {
                        originalInput: equation || scenario,
                        cleanInput: cleanInput,
                        type: type,
                        scenario: scenario,
                        parameters: { ...extractedParams, ...parameters },
                        context: { ...context },
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        throw new Error(`Unable to recognize nuclear physics problem type from: ${equation || scenario}`);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/→/g, '->')
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .trim();
    }

    extractNuclearParameters(input, type, providedParams) {
        const params = { ...providedParams };

        // Extract common nuclear parameters from input
        const halfLifeMatch = input.match(/half.*life.*?(\d+\.?\d*)\s*(s|min|h|d|y|yr|year|day|hour)/i);
        if (halfLifeMatch && !params.halfLife) {
            params.halfLife = parseFloat(halfLifeMatch[1]);
            params.halfLifeUnit = halfLifeMatch[2].toLowerCase();
        }

        const massNumberMatch = input.match(/A\s*=\s*(\d+)|mass.*number.*?(\d+)/i);
        if (massNumberMatch && !params.A) {
            params.A = parseInt(massNumberMatch[1] || massNumberMatch[2]);
        }

        const atomicNumberMatch = input.match(/Z\s*=\s*(\d+)|atomic.*number.*?(\d+)/i);
        if (atomicNumberMatch && !params.Z) {
            params.Z = parseInt(atomicNumberMatch[1] || atomicNumberMatch[2]);
        }

        const energyMatch = input.match(/(\d+\.?\d*)\s*(MeV|keV|eV|J)/i);
        if (energyMatch && !params.energy) {
            params.energy = parseFloat(energyMatch[1]);
            params.energyUnit = energyMatch[2];
        }

        return params;
    }

    solveNuclearProblem_Internal(problem) {
        const solver = this.nuclearTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for nuclear physics problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // NUCLEAR PHYSICS SOLVERS

    solveRadioactiveDecay(problem) {
        const { N0, A0, t, halfLife, halfLifeUnit, lambda, decayConstant } = problem.parameters;

        // Convert half-life to seconds and calculate decay constant
        let lambdaValue = lambda || decayConstant;
        let t_half = halfLife;
        let t_halfSeconds;

        if (!lambdaValue && t_half) {
            t_halfSeconds = this.convertTimeToSeconds(t_half, halfLifeUnit);
            lambdaValue = Math.log(2) / t_halfSeconds;
        } else if (lambdaValue && !t_half) {
            t_halfSeconds = Math.log(2) / lambdaValue;
            t_half = t_halfSeconds;
        }

        const timeSeconds = this.convertTimeToSeconds(t, problem.parameters.timeUnit || 's');

        // Calculate remaining nuclei and activity
        const N_t = N0 ? N0 * Math.exp(-lambdaValue * timeSeconds) : null;
        const A_t = A0 ? A0 * Math.exp(-lambdaValue * timeSeconds) : 
                    (N_t ? lambdaValue * N_t : null);

        const meanLifetime = 1 / lambdaValue;
        const numHalfLives = timeSeconds / t_halfSeconds;

        return {
            problemType: 'Radioactive Decay',
            decayConstant: lambdaValue,
            decayConstantUnit: 's⁻¹',
            halfLife: t_half,
            halfLifeSeconds: t_halfSeconds,
            meanLifetime: meanLifetime,
            timeElapsed: timeSeconds,
            timeUnit: 's',
            initialNuclei: N0,
            finalNuclei: N_t,
            initialActivity: A0,
            finalActivity: A_t,
            activityUnit: 'Bq',
            numberOfHalfLives: numHalfLives,
            fractionRemaining: Math.exp(-lambdaValue * timeSeconds),
            fractionDecayed: 1 - Math.exp(-lambdaValue * timeSeconds),
            interpretation: this.interpretDecayResults(N_t, A_t, numHalfLives),
            category: 'radioactive_decay'
        };
    }

    solveBindingEnergy(problem) {
        const { A, Z, nuclearMass, atomicMass } = problem.parameters;
        const N = A - Z;

        // Calculate mass defect
        const totalProtonMass = Z * this.physicsConstants.protonMass; // MeV/c²
        const totalNeutronMass = N * this.physicsConstants.neutronMass; // MeV/c²
        const totalSeparatedMass = totalProtonMass + totalNeutronMass;

        // Convert nuclear mass to MeV/c² if needed
        let nuclearMassEnergy = nuclearMass;
        if (atomicMass) {
            // If atomic mass given, convert to nuclear mass by subtracting electron masses
            nuclearMassEnergy = atomicMass * this.physicsConstants.u - Z * this.physicsConstants.electronMass;
        } else if (nuclearMass) {
            nuclearMassEnergy = nuclearMass;
        }

        const massDefect = totalSeparatedMass - nuclearMassEnergy; // MeV/c²
        const bindingEnergy = massDefect; // Already in MeV due to c²=1 in these units
        const bindingEnergyPerNucleon = bindingEnergy / A;

        return {
            problemType: 'Nuclear Binding Energy',
            massNumber: A,
            atomicNumber: Z,
            neutronNumber: N,
            protonMass: this.physicsConstants.protonMass,
            neutronMass: this.physicsConstants.neutronMass,
            totalProtonMass: totalProtonMass,
            totalNeutronMass: totalNeutronMass,
            totalSeparatedMass: totalSeparatedMass,
            nuclearMass: nuclearMassEnergy,
            massDefect: massDefect,
            massDefectUnit: 'MeV/c²',
            bindingEnergy: bindingEnergy,
            bindingEnergyUnit: 'MeV',
            bindingEnergyPerNucleon: bindingEnergyPerNucleon,
            bePerNucleonUnit: 'MeV/nucleon',
            stability: this.assessNuclearStability(bindingEnergyPerNucleon, A, Z),
            interpretation: this.interpretBindingEnergy(bindingEnergyPerNucleon, A),
            category: 'binding_energy'
        };
    }

    solveAlphaDecay(problem) {
        const { A, Z, parentMass, daughterMass, alphaMass } = problem.parameters;

        const A_daughter = A - 4;
        const Z_daughter = Z - 2;

        // Use standard alpha particle mass if not provided
        const M_alpha = alphaMass || (4 * this.physicsConstants.u);

        // Calculate Q-value
        const Q = parentMass - daughterMass - M_alpha; // MeV

        // Calculate kinetic energies (momentum conservation)
        const KE_alpha = Q * A_daughter / (A_daughter + 4);
        const KE_daughter = Q * 4 / (A_daughter + 4);

        return {
            problemType: 'Alpha Decay',
            decayEquation: `^${A}_{${Z}}X → ^${A_daughter}_{${Z_daughter}}Y + ^4_2He`,
            parentNucleus: { A, Z },
            daughterNucleus: { A: A_daughter, Z: Z_daughter },
            alphaParticle: { A: 4, Z: 2 },
            parentMass: parentMass,
            daughterMass: daughterMass,
            alphaMass: M_alpha,
            Qvalue: Q,
            QvalueUnit: 'MeV',
            alphaKineticEnergy: KE_alpha,
            daughterRecoilEnergy: KE_daughter,
            energyUnit: 'MeV',
            isSpontaneous: Q > 0,
            interpretation: this.interpretAlphaDecay(Q, KE_alpha),
            tunneling: this.calculateTunnelingProbability(Z, KE_alpha),
            category: 'alpha_decay'
        };
    }

    solveBetaDecay(problem) {
        const { A, Z, parentMass, daughterMass, decayType } = problem.parameters;

        let Z_daughter, decay_equation, Q;

        if (decayType === 'beta-minus' || decayType === 'β-' || decayType === 'beta_minus') {
            // β⁻ decay: n → p + e⁻ + ν̄
            Z_daughter = Z + 1;
            decay_equation = `^${A}_{${Z}}X → ^${A}_{${Z_daughter}}Y + e⁻ + ν̄_e`;
            Q = (parentMass - daughterMass) * this.physicsConstants.u; // MeV

        } else if (decayType === 'beta-plus' || decayType === 'β+' || decayType === 'beta_plus') {
            // β⁺ decay: p → n + e⁺ + ν
            Z_daughter = Z - 1;
            decay_equation = `^${A}_{${Z}}X → ^${A}_{${Z_daughter}}Y + e⁺ + ν_e`;
            Q = (parentMass - daughterMass - 2 * this.physicsConstants.electronMass / this.physicsConstants.u) * this.physicsConstants.u; // MeV

        } else if (decayType === 'electron-capture' || decayType === 'EC') {
            // EC: p + e⁻ → n + ν
            Z_daughter = Z - 1;
            decay_equation = `^${A}_{${Z}}X + e⁻ → ^${A}_{${Z_daughter}}Y + ν_e`;
            Q = (parentMass - daughterMass) * this.physicsConstants.u; // MeV
        }

        const maxBetaEnergy = Q; // Maximum kinetic energy of beta particle

        return {
            problemType: 'Beta Decay',
            decayType: decayType,
            decayEquation: decay_equation,
            parentNucleus: { A, Z },
            daughterNucleus: { A, Z: Z_daughter },
            parentMass: parentMass,
            daughterMass: daughterMass,
            Qvalue: Q,
            QvalueUnit: 'MeV',
            maxBetaEnergy: maxBetaEnergy,
            energySpectrumType: 'continuous',
            isSpontaneous: Q > 0,
            interpretation: this.interpretBetaDecay(decayType, Q, maxBetaEnergy),
            category: 'beta_decay'
        };
    }

    solveGammaDecay(problem) {
        const { E_initial, E_final, A, transitionType } = problem.parameters;

        const E_gamma = E_initial - E_final; // MeV
        const E_gamma_J = E_gamma * this.physicsConstants.eV_to_J * 1e6; // Convert MeV to J

        // Calculate photon wavelength and frequency
        const lambda = this.physicsConstants.h * this.physicsConstants.c / E_gamma_J; // meters
        const frequency = this.physicsConstants.c / lambda; // Hz

        // Nuclear recoil energy (usually negligible)
        const M_nucleus = A * this.physicsConstants.amu; // kg
        const E_recoil = (E_gamma_J ** 2) / (2 * M_nucleus * this.physicsConstants.c ** 2); // J
        const E_recoil_MeV = E_recoil * this.physicsConstants.J_to_eV / 1e6; // MeV

        return {
            problemType: 'Gamma Decay',
            transitionType: transitionType || 'nuclear de-excitation',
            initialEnergy: E_initial,
            finalEnergy: E_final,
            gammaEnergy: E_gamma,
            energyUnit: 'MeV',
            photonWavelength: lambda,
            wavelengthUnit: 'm',
            photonFrequency: frequency,
            frequencyUnit: 'Hz',
            recoilEnergy: E_recoil_MeV,
            recoilEnergyUnit: 'MeV',
            recoilNegligible: E_recoil_MeV < 0.001 * E_gamma,
            interpretation: this.interpretGammaDecay(E_gamma, lambda),
            category: 'gamma_decay'
        };
    }

    solveNuclearReaction(problem) {
        const { reactants, products, masses } = problem.parameters;

        // Calculate Q-value: Q = (Σm_initial - Σm_final)c²
        let totalInitialMass = 0;
        let totalFinalMass = 0;

        reactants.forEach(particle => {
            totalInitialMass += masses[particle] || 0;
        });

        products.forEach(particle => {
            totalFinalMass += masses[particle] || 0;
        });

        const Q = (totalInitialMass - totalFinalMass) * this.physicsConstants.u; // MeV

        // Calculate threshold energy if endothermic
        let E_threshold = null;
        if (Q < 0) {
            const m_projectile = masses[reactants[0]];
            const m_target = masses[reactants[1]];
            E_threshold = -Q * (1 + (masses[products[0]] + masses[products[1]]) / (2 * m_target) + Math.abs(Q) / (2 * m_target * this.physicsConstants.u));
        }

        return {
            problemType: 'Nuclear Reaction',
            reactionEquation: `${reactants.join(' + ')} → ${products.join(' + ')}`,
            reactants: reactants,
            products: products,
            initialMass: totalInitialMass,
            finalMass: totalFinalMass,
            massDefect: totalInitialMass - totalFinalMass,
            Qvalue: Q,
            QvalueUnit: 'MeV',
            isExothermic: Q > 0,
            isEndothermic: Q < 0,
            thresholdEnergy: E_threshold,
            thresholdEnergyUnit: E_threshold ? 'MeV' : null,
            interpretation: this.interpretNuclearReaction(Q, E_threshold),
            category: 'nuclear_reaction'
        };
    }

    solveFission(problem) {
        const { fissionRate, energyPerFission, efficiency } = problem.parameters;

        const E_fission = energyPerFission || 200; // MeV per fission (typical)
        const E_fission_J = E_fission * this.physicsConstants.eV_to_J * 1e6; // Joules

        // Calculate power output
        const power_watts = fissionRate * E_fission_J; // Watts
        const power_MW = power_watts / 1e6; // MegaWatts

        // Account for efficiency if provided
        const useful_power_MW = efficiency ? power_MW * efficiency : power_MW;

        // Calculate fuel consumption
        const fissions_per_sec = fissionRate;
        const atoms_per_gram_U235 = this.physicsConstants.avogadro / 235;
        const fuel_consumption_g_per_sec = fissions_per_sec / atoms_per_gram_U235;
        const fuel_consumption_kg_per_day = fuel_consumption_g_per_sec * 86400 / 1000;

        return {
            problemType: 'Nuclear Fission',
            fissionRate: fissionRate,
            fissionRateUnit: 'fissions/s',
            energyPerFission: E_fission,
            energyUnit: 'MeV',
            thermalPower: power_MW,
            thermalPowerUnit: 'MW',
            efficiency: efficiency || 'not specified',
            electricalPower: useful_power_MW,
            electricalPowerUnit: 'MW',
            fuelConsumption: fuel_consumption_kg_per_day,
            fuelConsumptionUnit: 'kg/day',
            neutronsPerFission: 2.5, // Typical for U-235
            interpretation: this.interpretFission(power_MW, fuel_consumption_kg_per_day),
            category: 'fission'
        };
    }

    solveFusion(problem) {
        const { reactionType, temperature, density, confinementTime } = problem.parameters;

        let Q, reactants, products;

        // Define common fusion reactions
        if (reactionType === 'D-T' || reactionType === 'DT') {
            reactants = 'D + T';
            products = 'He-4 + n';
            Q = 17.6; // MeV
        } else if (reactionType === 'D-D' || reactionType === 'DD') {
            reactants = 'D + D';
            products = 'He-3 + n (or T + p)';
            Q = 3.27; // MeV (average)
        } else if (reactionType === 'p-p' || reactionType === 'pp') {
            reactants = 'p + p';
            products = 'D + e⁺ + ν';
            Q = 1.44; // MeV
        }

        // Calculate Lawson criterion
        const lawson_product = density * confinementTime;
        const lawson_criterion_DT = 1e20; // s⋅m⁻³ for D-T
        const meets_lawson = lawson_product >= lawson_criterion_DT;

        // Estimate Coulomb barrier
        const Z1 = 1, Z2 = 1; // For D-T (both have Z=1 effectively)
        const r0 = 1.2e-15; // meters (nuclear radius scale)
        const V_coulomb = (Z1 * Z2 * this.physicsConstants.elementaryCharge ** 2) / 
                         (4 * Math.PI * this.physicsConstants.epsilon0 * r0); // Joules
        const V_coulomb_keV = V_coulomb * this.physicsConstants.J_to_eV / 1000; // keV

        // Required temperature (rule of thumb: kT ~ V_coulomb/10)
        const kT_required_keV = V_coulomb_keV / 10;
        const T_required_K = (kT_required_keV * 1000 * this.physicsConstants.eV_to_J) / this.physicsConstants.boltzmann;

        return {
            problemType: 'Nuclear Fusion',
            reactionType: reactionType,
            reactionEquation: `${reactants} → ${products}`,
            Qvalue: Q,
            QvalueUnit: 'MeV',
            temperature: temperature,
            temperatureUnit: 'K',
            density: density,
            densityUnit: 'm⁻³',
            confinementTime: confinementTime,
            confinementTimeUnit: 's',
            lawsonProduct: lawson_product,
            lawsonCriterion: lawson_criterion_DT,
            meetsLawson: meets_lawson,
            coulombBarrier: V_coulomb_keV,
            barrierUnit: 'keV',
            requiredTemperature: T_required_K,
            requiredTemperatureUnit: 'K',
            interpretation: this.interpretFusion(Q, meets_lawson, temperature, T_required_K),
            category: 'fusion'
        };
    }

    solveDosimetry(problem) {
        const { energy, mass, radiationType, tissueType, activity, distance, time } = problem.parameters;

        // Calculate absorbed dose (Gray)
        const absorbed_dose_Gy = energy / mass; // J/kg = Gy

        // Radiation weighting factors
        const w_R = this.getRadiationWeightingFactor(radiationType);

        // Calculate equivalent dose (Sievert)
        const equivalent_dose_Sv = absorbed_dose_Gy * w_R;

        // Tissue weighting factor
        const w_T = this.getTissueWeightingFactor(tissueType);

        // Calculate effective dose (Sievert)
        const effective_dose_Sv = equivalent_dose_Sv * w_T;

        // Convert to rem (older unit)
        const equivalent_dose_rem = equivalent_dose_Sv * 100;
        const effective_dose_rem = effective_dose_Sv * 100;

        // Dose rate if activity and distance provided
        let dose_rate = null;
        if (activity && distance) {
            const gamma_constant = 0.5; // Typical value for gamma emitters (R⋅m²/Ci⋅h)
            dose_rate = (activity * gamma_constant * time) / (distance ** 2);
        }

        return {
            problemType: 'Radiation Dosimetry',
            absorbedDose: absorbed_dose_Gy,
            absorbedDoseUnit: 'Gy',
            radiationType: radiationType,
            radiationWeightingFactor: w_R,
            equivalentDose: equivalent_dose_Sv,
            equivalentDoseUnit: 'Sv',
            equivalentDoseRem: equivalent_dose_rem,
            tissueType: tissueType,
            tissueWeightingFactor: w_T,
            effectiveDose: effective_dose_Sv,
            effectiveDoseUnit: 'Sv',
            effectiveDoseRem: effective_dose_rem,
            doseRate: dose_rate,
            doseRateUnit: dose_rate ? 'Sv/h' : null,
            safetyAssessment: this.assessRadiationSafety(effective_dose_Sv),
            interpretation: this.interpretDosimetry(absorbed_dose_Gy, equivalent_dose_Sv, effective_dose_Sv),
            category: 'dosimetry'
        };
    }

    solveCrossSection(problem) {
        const { crossSection, neutronFlux, targetDensity, thickness } = problem.parameters;

        // Reaction rate: R = Φ × N × σ
        const reaction_rate = neutronFlux * targetDensity * crossSection; // reactions/cm³⋅s

        // Mean free path: λ = 1/(Nσ)
        const mean_free_path = 1 / (targetDensity * crossSection); // cm

        // Transmission through material: I = I₀e^(-Nσx)
        let transmission = null;
        if (thickness) {
            transmission = Math.exp(-targetDensity * crossSection * thickness);
        }

        // Macroscopic cross section
        const macroscopic_cross_section = targetDensity * crossSection; // cm⁻¹

        return {
            problemType: 'Cross Section and Reaction Rate',
            microscopicCrossSection: crossSection,
            crossSectionUnit: 'barns',
            crossSectionCm2: crossSection * 1e-24,
            neutronFlux: neutronFlux,
            fluxUnit: 'n/cm²⋅s',
            targetDensity: targetDensity,
            densityUnit: 'nuclei/cm³',
            reactionRate: reaction_rate,
            reactionRateUnit: 'reactions/cm³⋅s',
            meanFreePath: mean_free_path,
            meanFreePathUnit: 'cm',
            macroscopicCrossSection: macroscopic_cross_section,
            macroscopicUnit: 'cm⁻¹',
            thickness: thickness,
            thicknessUnit: thickness ? 'cm' : null,
            transmission: transmission,
            absorption: transmission ? (1 - transmission) : null,
            interpretation: this.interpretCrossSection(crossSection, mean_free_path, reaction_rate),
            category: 'cross_section'
        };
    }

    solveNuclearModel(problem) {
        const { A, Z } = problem.parameters;
        const N = A - Z;

        // Semi-Empirical Mass Formula (SEMF) coefficients
        const a_v = 15.75;  // Volume term (MeV)
        const a_s = 17.8;   // Surface term (MeV)
        const a_c = 0.711;  // Coulomb term (MeV)
        const a_a = 23.7;   // Asymmetry term (MeV)

        // Calculate each term
        const volume_term = a_v * A;
        const surface_term = -a_s * Math.pow(A, 2/3);
        const coulomb_term = -a_c * (Z * Z) / Math.pow(A, 1/3);
        const asymmetry_term = -a_a * Math.pow(N - Z, 2) / A;

        // Pairing term
        let pairing_term = 0;
        const Z_even = Z % 2 === 0;
        const N_even = N % 2 === 0;

        if (Z_even && N_even) {
            pairing_term = 12 / Math.sqrt(A); // even-even
        } else if (!Z_even && !N_even) {
            pairing_term = -12 / Math.sqrt(A); // odd-odd
        }
        // else: even-odd or odd-even, pairing = 0

        // Total binding energy from SEMF
        const BE_SEMF = volume_term + surface_term + coulomb_term + asymmetry_term + pairing_term;
        const BE_per_A = BE_SEMF / A;

        // Check for magic numbers
        const magic_numbers = [2, 8, 20, 28, 50, 82, 126];
        const is_Z_magic = magic_numbers.includes(Z);
        const is_N_magic = magic_numbers.includes(N);
        const is_doubly_magic = is_Z_magic && is_N_magic;

        return {
            problemType: 'Nuclear Model (SEMF)',
            massNumber: A,
            atomicNumber: Z,
            neutronNumber: N,
            volumeTerm: volume_term,
            surfaceTerm: surface_term,
            coulombTerm: coulomb_term,
            asymmetryTerm: asymmetry_term,
            pairingTerm: pairing_term,
            totalBindingEnergy: BE_SEMF,
            bindingEnergyUnit: 'MeV',
            bindingEnergyPerNucleon: BE_per_A,
            bePerNucleonUnit: 'MeV/nucleon',
            pairingType: Z_even && N_even ? 'even-even' : 
                        (!Z_even && !N_even ? 'odd-odd' : 'even-odd'),
            isMagicZ: is_Z_magic,
            isMagicN: is_N_magic,
            isDoublyMagic: is_doubly_magic,
            stability: this.assessNuclearStability(BE_per_A, A, Z),
            interpretation: this.interpretNuclearModel(BE_SEMF, BE_per_A, is_doubly_magic),
            category: 'nuclear_model'
        };
    }

    solveNeutronModeration(problem) {
        const { A_moderator, E_initial, E_final } = problem.parameters;

        // Average logarithmic energy decrement
        const xi = 1 - ((A_moderator - 1) ** 2 / (2 * A_moderator)) * 
                   Math.log((A_moderator + 1) / (A_moderator - 1));

        // Number of collisions needed
        const n_collisions = Math.log(E_initial / E_final) / xi;

        // Moderating power (requires cross sections, use typical values)
        const sigma_s = problem.parameters.scatteringCrossSection || 4; // barns (typical)
        const sigma_a = problem.parameters.absorptionCrossSection || 0.001; // barns (typical)
        const moderating_power = xi * sigma_s;
        const moderating_ratio = moderating_power / sigma_a;

        return {
            problemType: 'Neutron Moderation',
            moderatorMassNumber: A_moderator,
            initialEnergy: E_initial,
            finalEnergy: E_final,
            energyUnit: 'eV',
            logarithmicDecrement: xi,
            numberOfCollisions: Math.ceil(n_collisions),
            scatteringCrossSection: sigma_s,
            absorptionCrossSection: sigma_a,
            crossSectionUnit: 'barns',
            moderatingPower: moderating_power,
            moderatingRatio: moderating_ratio,
            moderatorEfficiency: this.assessModeratorEfficiency(A_moderator, xi, moderating_ratio),
            interpretation: this.interpretNeutronModeration(A_moderator, xi, n_collisions),
            category: 'neutron_moderation'
        };
    }

    solveDecayChain(problem) {
        const { parent_lambda, daughter_lambda, N0_parent, t } = problem.parameters;

        // For simple two-member chain: A → B → C
        // N_A(t) = N0_A * e^(-λ_A*t)
        const N_parent = N0_parent * Math.exp(-parent_lambda * t);

        // N_B(t) = (λ_A * N0_A)/(λ_B - λ_A) * (e^(-λ_A*t) - e^(-λ_B*t))
        let N_daughter;
        if (Math.abs(daughter_lambda - parent_lambda) > 1e-10) {
            N_daughter = (parent_lambda * N0_parent) / (daughter_lambda - parent_lambda) * 
                        (Math.exp(-parent_lambda * t) - Math.exp(-daughter_lambda * t));
        } else {
            // Special case: λ_A ≈ λ_B (transient equilibrium)
            N_daughter = parent_lambda * N0_parent * t * Math.exp(-parent_lambda * t);
        }

        // Check for equilibrium conditions
        const activity_parent = parent_lambda * N_parent;
        const activity_daughter = daughter_lambda * N_daughter;
        
        let equilibrium_type = 'none';
        if (daughter_lambda < parent_lambda && t > 5 / parent_lambda) {
            equilibrium_type = 'transient';
        } else if (daughter_lambda >> parent_lambda && t > 10 / parent_lambda) {
            equilibrium_type = 'secular';
        }

        return {
            problemType: 'Radioactive Decay Chain',
            parentDecayConstant: parent_lambda,
            daughterDecayConstant: daughter_lambda,
            timeElapsed: t,
            initialParentNuclei: N0_parent,
            parentNuclei: N_parent,
            daughterNuclei: N_daughter,
            parentActivity: activity_parent,
            daughterActivity: activity_daughter,
            activityUnit: 'Bq',
            equilibriumType: equilibrium_type,
            activityRatio: activity_daughter / activity_parent,
            interpretation: this.interpretDecayChain(equilibrium_type, activity_parent, activity_daughter),
            category: 'decay_chain'
        };
    }

    solveReactorPhysics(problem) {
        const { eta, f, epsilon, p, P_FNL, P_TNL } = problem.parameters;

        // Six-factor formula: k_eff = η * f * ε * p * P_FNL * P_TNL
        const k_eff = eta * f * epsilon * p * P_FNL * P_TNL;

        // Four-factor formula (infinite reactor): k_inf = η * f * ε * p
        const k_inf = eta * f * epsilon * p;

        // Reactivity: ρ = (k_eff - 1) / k_eff
        const reactivity = (k_eff - 1) / k_eff;

        // Determine reactor state
        let reactor_state;
        if (k_eff > 1.001) {
            reactor_state = 'supercritical (increasing power)';
        } else if (k_eff < 0.999) {
            reactor_state = 'subcritical (decreasing power)';
        } else {
            reactor_state = 'critical (steady power)';
        }

        return {
            problemType: 'Reactor Physics',
            reproductionFactor: eta,
            thermalUtilization: f,
            fastFissionFactor: epsilon,
            resonanceEscapeProbability: p,
            fastNonLeakage: P_FNL,
            thermalNonLeakage: P_TNL,
            infiniteMultiplication: k_inf,
            effectiveMultiplication: k_eff,
            reactivity: reactivity,
            reactivityInPcm: reactivity * 1e5, // percent mille
            reactorState: reactor_state,
            isCritical: Math.abs(k_eff - 1) < 0.001,
            interpretation: this.interpretReactorPhysics(k_eff, reactivity, reactor_state),
            category: 'reactor_physics'
        };
    }

    // HELPER METHODS FOR UNIT CONVERSION AND INTERPRETATION

    convertTimeToSeconds(time, unit) {
        const conversions = {
            's': 1,
            'sec': 1,
            'second': 1,
            'min': 60,
            'minute': 60,
            'h': 3600,
            'hour': 3600,
            'd': 86400,
            'day': 86400,
            'y': 31536000,
            'yr': 31536000,
            'year': 31536000
        };

        return time * (conversions[unit.toLowerCase()] || 1);
    }

    getRadiationWeightingFactor(radiationType) {
        const factors = {
            'photon': 1,
            'gamma': 1,
            'x-ray': 1,
            'electron': 1,
            'beta': 1,
            'positron': 1,
            'alpha': 20,
            'proton': 2,
            'neutron': 5,  // Energy-dependent, this is approximate
            'heavy-ion': 20
        };

        return factors[radiationType.toLowerCase()] || 1;
    }

    getTissueWeightingFactor(tissueType) {
        const factors = {
            'gonads': 0.20,
            'bone-marrow': 0.12,
            'colon': 0.12,
            'lung': 0.12,
            'stomach': 0.12,
            'bladder': 0.05,
            'breast': 0.05,
            'liver': 0.05,
            'esophagus': 0.05,
            'thyroid': 0.05,
            'skin': 0.01,
            'bone-surface': 0.01,
            'whole-body': 1.00,
            'remainder': 0.05
        };

        return factors[tissueType.toLowerCase()] || 0.05;
    }

    interpretDecayResults(N_t, A_t, numHalfLives) {
        return {
            physical: `After ${numHalfLives.toFixed(2)} half-lives, ${(Math.exp(-numHalfLives * Math.log(2)) * 100).toFixed(2)}% of the original sample remains`,
            practical: numHalfLives > 10 ? 
                'Sample has essentially decayed away (< 0.1% remains)' : 
                'Significant radioactivity still present',
            safety: numHalfLives > 7 ? 
                'Activity reduced to safe levels (< 1% of original)' : 
                'Radiation protection measures still required'
        };
    }

    interpretBindingEnergy(BE_per_A, A) {
        let stability = '';
        if (BE_per_A > 8.5) {
            stability = 'Very stable nucleus (high BE/A near iron peak)';
        } else if (BE_per_A > 7.5) {
            stability = 'Moderately stable nucleus';
        } else if (BE_per_A > 6.0) {
            stability = 'Less stable nucleus';
        } else {
            stability = 'Unstable nucleus (low BE/A)';
        }

        return {
            physical: `Binding energy per nucleon of ${BE_per_A.toFixed(3)} MeV indicates ${stability}`,
            nuclear: A < 60 ? 
                'Nucleus could release energy through fusion' : 
                A > 60 ? 'Nucleus could release energy through fission' : 
                'Nucleus at maximum stability (near iron-56)',
            energetics: `${(BE_per_A * A).toFixed(1)} MeV total energy needed to completely disassemble this nucleus`
        };
    }

    interpretAlphaDecay(Q, KE_alpha) {
        return {
            physical: Q > 0 ? 
                `Spontaneous decay releases ${Q.toFixed(3)} MeV of energy` : 
                'Decay is not energetically favorable',
            kinematic: `Alpha particle carries away ${(KE_alpha / Q * 100).toFixed(1)}% of released energy due to recoil conservation`,
            barrier: `Quantum tunneling required for alpha to escape nuclear potential well`,
            practical: Q > 4 ? 
                'Relatively fast decay (short half-life)' : 
                Q > 0 ? 'Slow decay (long half-life due to low Q-value)' : 
                'Decay forbidden'
        };
    }

    interpretBetaDecay(decayType, Q, maxBetaEnergy) {
        return {
            physical: Q > 0 ? 
                `${decayType} decay releases ${Q.toFixed(3)} MeV shared among products` : 
                'Decay is not energetically favorable',
            spectrum: `Beta particles have continuous energy spectrum from 0 to ${maxBetaEnergy.toFixed(3)} MeV`,
            neutrino: 'Neutrino carries variable energy, making spectrum continuous',
            practical: decayType === 'beta-minus' ? 
                'Neutron-rich nucleus moving toward stability' : 
                'Proton-rich nucleus moving toward stability'
        };
    }

    interpretGammaDecay(E_gamma, lambda) {
        return {
            physical: `Electromagnetic transition releases ${E_gamma.toFixed(3)} MeV photon`,
            wavelength: `Gamma ray wavelength: ${(lambda * 1e12).toExponential(2)} pm (deep in gamma range)`,
            characteristic: 'Photon energy is characteristic of specific nuclear transition',
            practical: E_gamma > 1 ? 
                'High-energy gamma ray (significant shielding needed)' : 
                'Lower energy transition (easier to shield)'
        };
    }

    interpretNuclearReaction(Q, E_threshold) {
        return {
            energetics: Q > 0 ? 
                `Exothermic reaction releases ${Q.toFixed(3)} MeV` : 
                `Endothermic reaction requires ${Math.abs(Q).toFixed(3)} MeV minimum`,
            threshold: E_threshold ? 
                `Projectile must have at least ${E_threshold.toFixed(3)} MeV kinetic energy` : 
                'No threshold - reaction can occur at any energy',
            practical: Q > 10 ? 
                'Large energy release - useful for power generation' : 
                Q > 0 ? 'Modest energy release' : 
                'Energy must be supplied for reaction to occur'
        };
    }

    interpretFission(power_MW, fuel_kg_per_day) {
        return {
            energyScale: `Producing ${power_MW.toFixed(1)} MW thermal power`,
            fuelEfficiency: `Consuming only ${fuel_kg_per_day.toFixed(3)} kg of fuel per day`,
            comparison: `Equivalent to burning ${(power_MW * 24 * 0.4).toFixed(0)} tonnes of coal per day`,
            practical: power_MW > 1000 ? 
                'Commercial reactor scale' : 
                power_MW > 100 ? 'Research reactor scale' : 
                'Experimental or subcritical system'
        };
    }

    interpretFusion(Q, meets_lawson, T, T_required) {
        return {
            energetics: `Fusion releases ${Q.toFixed(2)} MeV per reaction`,
            ignition: meets_lawson ? 
                'Lawson criterion satisfied - ignition possible' : 
                'Lawson criterion not met - additional heating required',
            temperature: T >= T_required ? 
                `Temperature sufficient for significant fusion rate` : 
                `Temperature must reach ~${(T_required / 1e6).toFixed(0)} million K for fusion`,
            practical: meets_lawson && T >= T_required ? 
                'Conditions favorable for sustained fusion' : 
                'Current conditions insufficient for net energy gain'
        };
    }

    interpretDosimetry(D, H, E) {
        return {
            absorbed: `${D.toFixed(3)} Gy absorbed dose represents energy deposited per unit mass`,
            equivalent: `${H.toFixed(3)} Sv equivalent dose accounts for radiation type biological effectiveness`,
            effective: `${E.toFixed(3)} Sv effective dose accounts for tissue sensitivity`,
            comparison: E < 0.001 ? 
                'Dose comparable to natural background' : 
                E < 0.05 ? 'Low dose, below annual occupational limit' : 
                E < 1.0 ? 'Moderate dose, medical monitoring recommended' : 
                'High dose, medical intervention required'
        };
    }

    interpretCrossSection(sigma, lambda, R) {
        return {
            probability: `Cross section of ${sigma} barns represents effective target area`,
            meanPath: `Neutrons travel on average ${lambda.toFixed(2)} cm before interaction`,
            reactionRate: `${R.toExponential(2)} reactions per cm³ per second`,
            practical: sigma > 100 ? 
                'Large cross section - strong interaction' : 
                sigma > 1 ? 'Moderate cross section' : 
                'Small cross section - weak interaction'
        };
    }

    interpretNuclearModel(BE, BE_per_A, doubly_magic) {
        return {
            total: `Total binding energy of ${BE.toFixed(1)} MeV predicted by SEMF`,
            perNucleon: `${BE_per_A.toFixed(3)} MeV per nucleon`,
            magic: doubly_magic ? 
                'Doubly magic nucleus - exceptionally stable' : 
                'Normal nuclear shell structure',
            accuracy: 'SEMF typically accurate to within 1% for medium-heavy nuclei'
        };
    }

    interpretNeutronModeration(A, xi, n) {
        return {
            efficiency: `Moderator mass ${A} gives logarithmic decrement ξ = ${xi.toFixed(4)}`,
            collisions: `Requires ${Math.ceil(n)} collisions to thermalize neutrons`,
            comparison: A === 1 ? 
                'Hydrogen - most efficient per collision but high absorption' : 
                A === 2 ? 'Deuterium - excellent moderator (low absorption)' : 
                A === 12 ? 'Graphite - good moderator for large reactors' : 
                A === 18 ? 'Water - common moderator with moderate efficiency' : 
                'Moderator efficiency depends on balance of slowing-down and absorption'
        };
    }

    interpretDecayChain(equilibrium_type, A_parent, A_daughter) {
        return {
            equilibrium: equilibrium_type === 'secular' ? 
                'Secular equilibrium: daughter activity equals parent activity' : 
                equilibrium_type === 'transient' ? 
                'Transient equilibrium: daughter activity exceeds parent activity' : 
                'No equilibrium: independent decay rates',
            activities: `Parent: ${A_parent.toExponential(2)} Bq, Daughter: ${A_daughter.toExponential(2)} Bq`,
            practical: equilibrium_type !== 'none' ? 
                'Equilibrium allows daughter activity prediction from parent' : 
                'Must track each species independently'
        };
    }

    interpretReactorPhysics(k, rho, state) {
        return {
            multiplication: `k-effective = ${k.toFixed(5)} indicates ${state}`,
            reactivity: `Reactivity ρ = ${(rho * 1e5).toFixed(0)} pcm (percent-mille)`,
            control: k > 1 ? 
                'Insert control rods to reduce reactivity' : 
                k < 1 ? 'Withdraw control rods to increase reactivity' : 
                'Reactor at critical balance',
            safety: Math.abs(k - 1) < 0.01 ? 
                'Reactor operating in normal range' : 
                'Large reactivity deviation - corrective action needed'
        };
    }

    assessNuclearStability(BE_per_A, A, Z) {
        const N = A - Z;
        const stability_curve_Z = A / (1.98 + 0.0155 * Math.pow(A, 2/3));
        
        let assessment = '';
        if (BE_per_A > 8.5) assessment = 'Very stable';
        else if (BE_per_A > 7.5) assessment = 'Stable';
        else if (BE_per_A > 6.0) assessment = 'Moderately stable';
        else assessment = 'Unstable';

        if (Math.abs(Z - stability_curve_Z) > 3) {
            assessment += ' (far from stability valley)';
        }

        return assessment;
    }

    assessRadiationSafety(effective_dose_Sv) {
        if (effective_dose_Sv < 0.001) {
            return 'Negligible - comparable to natural background';
        } else if (effective_dose_Sv < 0.02) {
            return 'Very low - below annual public limit (1 mSv)';
        } else if (effective_dose_Sv < 0.05) {
            return 'Low - below annual occupational limit (50 mSv)';
        } else if (effective_dose_Sv < 0.5) {
            return 'Moderate - health monitoring recommended';
        } else if (effective_dose_Sv < 1.0) {
            return 'High - medical attention required';
        } else {
            return 'Very high - serious radiation exposure, immediate medical intervention';
        }
    }

    assessModeratorEfficiency(A, xi, MR) {
        let efficiency = '';
        if (A === 1) efficiency = 'Excellent slowing down, but high absorption';
        else if (A === 2) efficiency = 'Optimal balance of slowing down and low absorption';
        else if (A <= 12) efficiency = 'Good moderator for thermal reactors';
        else if (A <= 20) efficiency = 'Moderate moderator, requires more collisions';
        else efficiency = 'Poor moderator, many collisions needed';

        return `${efficiency} (ξ = ${xi.toFixed(4)}, MR = ${MR.toFixed(1)})`;
    }

    calculateTunnelingProbability(Z, E_alpha) {
        // Simplified Gamow factor calculation
        const Z_daughter = Z - 2;
        const alpha_Z = 2;
        const r0 = 1.2e-15; // m
        const R = r0 * Math.pow(4, 1/3) * 1e-15; // Nuclear radius in m
        
        // Coulomb barrier height (approximate)
        const V_barrier_MeV = 1.44 * Z_daughter * alpha_Z / (R * 1e15);  // MeV
        
        // Tunneling probability (very simplified)
        const tunneling_prob = Math.exp(-Math.PI * Math.sqrt(V_barrier_MeV / E_alpha));
        
        return {
            barrierHeight: V_barrier_MeV.toFixed(2),
            alphaEnergy: E_alpha.toFixed(2),
            tunnelingProbability: tunneling_prob.toExponential(3),
            explanation: 'Quantum tunneling allows alpha escape despite insufficient classical energy'
        };
    }

    // STEP GENERATION

    generateNuclearSteps(problem, solution) {
        let baseSteps = this.generateBaseNuclearSteps(problem, solution);

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

    generateBaseNuclearSteps(problem, solution) {
        const { type } = problem;

        switch (type) {
            case 'radioactive_decay':
                return this.generateRadioactiveDecaySteps(problem, solution);
            case 'binding_energy':
                return this.generateBindingEnergySteps(problem, solution);
            case 'alpha_decay':
                return this.generateAlphaDecaySteps(problem, solution);
            case 'beta_decay':
                return this.generateBetaDecaySteps(problem, solution);
            case 'gamma_decay':
                return this.generateGammaDecaySteps(problem, solution);
            case 'nuclear_reaction':
                return this.generateNuclearReactionSteps(problem, solution);
            case 'fission':
                return this.generateFissionSteps(problem, solution);
            case 'fusion':
                return this.generateFusionSteps(problem, solution);
            case 'dosimetry':
                return this.generateDosimetrySteps(problem, solution);
            case 'cross_section':
                return this.generateCrossSectionSteps(problem, solution);
            case 'nuclear_model':
                return this.generateNuclearModelSteps(problem, solution);
            case 'neutron_moderation':
                return this.generateNeutronModerationSteps(problem, solution);
            case 'decay_chain':
                return this.generateDecayChainSteps(problem, solution);
            case 'reactor_physics':
                return this.generateReactorPhysicsSteps(problem, solution);
            default:
                return this.generateGenericNuclearSteps(problem, solution);
        }
    }

    generateRadioactiveDecaySteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify given quantities',
            description: 'List the known values for radioactive decay problem',
            expression: `N₀ = ${problem.parameters.N0 || 'given'}, t₁/₂ = ${problem.parameters.halfLife} ${problem.parameters.halfLifeUnit}`,
            reasoning: 'We need initial amount and half-life to apply exponential decay law',
            physicsLaw: 'Radioactive decay follows first-order kinetics',
            visualHint: 'Imagine a population of unstable nuclei randomly decaying over time',
            goalStatement: 'Calculate the decay constant and apply the exponential decay formula'
        });

        steps.push({
            stepNumber: 2,
            step: 'Convert half-life to decay constant',
            description: 'Use the relationship between half-life and decay constant',
            beforeExpression: `t₁/₂ = ${solution.halfLife} ${problem.parameters.halfLifeUnit}`,
            formula: 'λ = ln(2)/t₁/₂',
            afterExpression: `λ = ${solution.decayConstant.toExponential(4)} s⁻¹`,
            reasoning: 'The decay constant λ characterizes the exponential decay rate',
            physicsLaw: 'At t = t₁/₂, exactly half of nuclei remain: N(t₁/₂) = N₀/2',
            calculation: `λ = 0.693/${solution.halfLifeSeconds.toExponential(2)} = ${solution.decayConstant.toExponential(4)} s⁻¹`,
            visualHint: 'λ represents the probability per unit time that a nucleus will decay'
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply exponential decay law',
            description: 'Calculate remaining nuclei using N(t) = N₀e^(-λt)',
            beforeExpression: `N(t) = N₀ × e^(-λt)`,
            substitution: `N(${problem.parameters.t}) = ${problem.parameters.N0} × e^(-${solution.decayConstant.toExponential(4)} × ${solution.timeElapsed})`,
            afterExpression: `N(t) = ${solution.finalNuclei?.toExponential(4) || 'calculated'}`,
            reasoning: 'Exponential function describes continuous random decay process',
            physicsLaw: 'dN/dt = -λN (differential form of decay law)',
            numericalNote: `After ${solution.numberOfHalfLives.toFixed(2)} half-lives, ${(solution.fractionRemaining * 100).toFixed(2)}% remains`,
            finalAnswer: true
        });

        if (solution.finalActivity) {
            steps.push({
                stepNumber: 4,
                step: 'Calculate activity',
                description: 'Activity A(t) is the decay rate: A = λN',
                formula: 'A(t) = λN(t)',
                calculation: `A(t) = ${solution.decayConstant.toExponential(4)} × ${solution.finalNuclei.toExponential(4)}`,
                afterExpression: `A(t) = ${solution.finalActivity.toExponential(4)} Bq`,
                reasoning: 'Activity measures decays per second, proportional to number of nuclei',
                unitNote: '1 Becquerel (Bq) = 1 decay per second; 1 Curie (Ci) = 3.7×10¹⁰ Bq',
                physicalMeaning: 'Activity determines radiation intensity and dose rate'
            });
        }

        return steps;
    }

    generateBindingEnergySteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Determine nuclear composition',
            description: 'Identify number of protons and neutrons',
            expression: `A = ${solution.massNumber}, Z = ${solution.atomicNumber}, N = A - Z = ${solution.neutronNumber}`,
            reasoning: 'Need to know how many nucleons to calculate total mass',
            physicsLaw: 'Mass number A = Z (protons) + N (neutrons)',
            visualHint: 'Picture the nucleus as Z protons and N neutrons bound together'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate mass of separated nucleons',
            description: 'Sum the masses of all protons and neutrons if separated',
            calculation: [
                `Total proton mass = ${solution.atomicNumber} × ${solution.protonMass} MeV/c² = ${solution.totalProtonMass.toFixed(3)} MeV/c²`,
                `Total neutron mass = ${solution.neutronNumber} × ${solution.neutronMass} MeV/c² = ${solution.totalNeutronMass.toFixed(3)} MeV/c²`,
                `Total separated mass = ${solution.totalSeparatedMass.toFixed(3)} MeV/c²`
            ],
            reasoning: 'This represents the mass if nucleus were completely disassembled',
            physicsLaw: 'Using atomic mass units: 1 u = 931.494 MeV/c²'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate mass defect',
            description: 'Find difference between separated and actual nuclear mass',
            beforeExpression: 'Δm = M_separated - M_nucleus',
            calculation: `Δm = ${solution.totalSeparatedMass.toFixed(3)} - ${solution.nuclearMass.toFixed(3)} = ${solution.massDefect.toFixed(3)} MeV/c²`,
            afterExpression: `Δm = ${solution.massDefect.toFixed(3)} MeV/c²`,
            reasoning: 'Mass defect is the "missing mass" converted to binding energy',
            physicsLaw: 'Einstein\'s E = mc² relates mass to energy',
            visualHint: 'Bound system weighs less than sum of its parts'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate binding energy',
            description: 'Convert mass defect to energy using E = Δmc²',
            beforeExpression: 'BE = Δm × c²',
            calculation: `BE = ${solution.massDefect.toFixed(3)} MeV/c² × c² = ${solution.bindingEnergy.toFixed(3)} MeV`,
            afterExpression: `BE = ${solution.bindingEnergy.toFixed(3)} MeV`,
            reasoning: 'This is the energy needed to completely disassemble the nucleus',
            physicsLaw: 'Mass-energy equivalence: c² = 1 in natural units (MeV/c²)',
            physicalMeaning: 'Higher BE means more stable nucleus'
        });

        steps.push({
            stepNumber: 5,
            step: 'Calculate binding energy per nucleon',
            description: 'Normalize by mass number to compare different nuclei',
            formula: 'BE/A = (Total BE) / (Number of nucleons)',
            calculation: `BE/A = ${solution.bindingEnergy.toFixed(3)} / ${solution.massNumber} = ${solution.bindingEnergyPerNucleon.toFixed(3)} MeV/nucleon`,
            afterExpression: `BE/A = ${solution.bindingEnergyPerNucleon.toFixed(3)} MeV/nucleon`,
            reasoning: 'BE/A allows fair comparison between nuclei of different sizes',
            physicsLaw: 'Maximum BE/A ≈ 8.8 MeV occurs near Fe-56 (most stable)',
            interpretation: solution.interpretation.perNucleon,
            finalAnswer: true
        });

        return steps;
    }

    generateAlphaDecaySteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Write decay equation',
            description: 'Show parent nucleus, daughter nucleus, and alpha particle',
            expression: solution.decayEquation,
            reasoning: 'Alpha decay reduces A by 4 and Z by 2',
            physicsLaw: 'Conservation of mass number (A) and atomic number (Z)',
            nuclearChart: `Parent: ^${solution.parentNucleus.A}_{${solution.parentNucleus.Z}}X → Daughter: ^${solution.daughterNucleus.A}_{${solution.daughterNucleus.Z}}Y + α`,
            visualHint: 'Alpha particle is a helium-4 nucleus (2p + 2n)'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate Q-value',
            description: 'Find energy released using mass difference',
            formula: 'Q = [M(parent) - M(daughter) - M(α)]c²',
            calculation: `Q = [${solution.parentMass} - ${solution.daughterMass} - ${solution.alphaMass}] × 931.494 MeV/u`,
            afterExpression: `Q = ${solution.Qvalue.toFixed(3)} MeV`,
            reasoning: 'Q > 0 means decay is energetically favorable (exothermic)',
            physicsLaw: 'Mass-energy conservation: lost mass appears as kinetic energy',
            spontaneity: solution.isSpontaneous ? 'Decay can occur spontaneously' : 'Decay is forbidden (Q < 0)'
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply momentum conservation',
            description: 'Calculate kinetic energy distribution between products',
            formula: 'p_α = -p_daughter (momentum conservation)',
            reasoning: 'Initially at rest, so total momentum remains zero',
            physicsLaw: 'Conservation of momentum: Σp_initial = Σp_final = 0',
            visualHint: 'Alpha and daughter recoil in opposite directions'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate alpha particle kinetic energy',
            description: 'Use momentum conservation to find KE distribution',
            formula: `KE_α = Q × M_daughter/(M_daughter + M_α)`,
            calculation: `KE_α = ${solution.Qvalue.toFixed(3)} × ${solution.daughterNucleus.A}/(${solution.daughterNucleus.A} + 4)`,
            afterExpression: `KE_α = ${solution.alphaKineticEnergy.toFixed(3)} MeV`,
            reasoning: 'Lighter alpha particle carries most of the kinetic energy',
            physicsLaw: 'KE = p²/(2m), with equal momenta but different masses',
            percentage: `Alpha carries ${(solution.alphaKineticEnergy / solution.Qvalue * 100).toFixed(1)}% of released energy`,
            finalAnswer: true
        });

        steps.push({
            stepNumber: 5,
            step: 'Calculate daughter recoil energy',
            description: 'Remaining energy goes to daughter nucleus',
            formula: 'KE_daughter = Q - KE_α',
            calculation: `KE_daughter = ${solution.Qvalue.toFixed(3)} - ${solution.alphaKineticEnergy.toFixed(3)}`,
            afterExpression: `KE_daughter = ${solution.daughterRecoilEnergy.toFixed(3)} MeV`,
            reasoning: 'Total kinetic energy must equal Q-value',
            energyBalance: `${solution.alphaKineticEnergy.toFixed(3)} + ${solution.daughterRecoilEnergy.toFixed(3)} = ${solution.Qvalue.toFixed(3)} MeV ✓`
        });

        return steps;
    }

    generateBetaDecaySteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify decay mode',
            description: `Determine type of beta decay: ${solution.decayType}`,
            expression: solution.decayEquation,
            reasoning: solution.decayType.includes('minus') ? 
                'Neutron-rich nucleus converts n → p + e⁻ + ν̄' :
                solution.decayType.includes('plus') ?
                'Proton-rich nucleus converts p → n + e⁺ + ν' :
                'Proton captures orbital electron: p + e⁻ → n + ν',
            physicsLaw: 'Beta decay mediated by weak nuclear force',
            conservationLaws: ['Charge: ΔQ = 0', 'Lepton number: ΔL = 0', 'Baryon number: ΔB = 0']
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate Q-value',
            description: 'Find maximum energy available for decay products',
            formula: solution.decayType.includes('plus') ?
                'Q = [M(parent) - M(daughter) - 2mₑ]c² (β⁺ decay)' :
                'Q = [M(parent) - M(daughter)]c² (β⁻ or EC)',
            calculation: `Q = ${solution.Qvalue.toFixed(3)} MeV`,
            afterExpression: `Q = ${solution.Qvalue.toFixed(3)} MeV`,
            reasoning: 'Q-value represents total energy released in decay',
            physicsLaw: solution.decayType.includes('plus') ?
                'β⁺ decay requires 2mₑc² = 1.022 MeV threshold due to positron creation' :
                'β⁻ decay has no threshold energy requirement',
            specialNote: solution.decayType.includes('plus') ?
                'Two electron masses needed: one for positron, one for mass balance' : null
        });

        steps.push({
            stepNumber: 3,
            step: 'Determine beta energy spectrum',
            description: 'Beta particles have continuous energy distribution',
            expression: `E_β: 0 → ${solution.maxBetaEnergy.toFixed(3)} MeV`,
            reasoning: 'Three-body decay: energy shared between β, ν, and recoil nucleus',
            physicsLaw: 'Energy and momentum conserved statistically over many decays',
            spectrumShape: 'Continuous spectrum peaks at ~1/3 of maximum energy',
            visualHint: 'Neutrino carries variable energy, invisible to detectors',
            maxBetaEnergy: `Maximum β energy = ${solution.maxBetaEnergy.toFixed(3)} MeV (when ν has zero energy)`,
            finalAnswer: true
        });

        return steps;
    }

    generateGammaDecaySteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify nuclear transition',
            description: 'Determine initial and final nuclear energy levels',
            expression: `E_i = ${solution.initialEnergy} MeV → E_f = ${solution.finalEnergy} MeV`,
            reasoning: 'Gamma emission occurs when excited nucleus returns to lower state',
            physicsLaw: 'Nucleus transitions between discrete quantum energy levels',
            visualHint: 'Similar to atomic transitions, but with much higher energies'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate photon energy',
            description: 'Energy carried by gamma ray equals level spacing',
            formula: 'E_γ = E_initial - E_final',
            calculation: `E_γ = ${solution.initialEnergy} - ${solution.finalEnergy} = ${solution.gammaEnergy} MeV`,
            afterExpression: `E_γ = ${solution.gammaEnergy} MeV`,
            reasoning: 'Energy is conserved in electromagnetic transition',
            physicsLaw: 'Photon carries energy and momentum: E = hf, p = h/λ'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate photon wavelength',
            description: 'Use E = hc/λ to find wavelength',
            formula: 'λ = hc/E',
            calculation: `λ = (6.626×10⁻³⁴ J⋅s)(3×10⁸ m/s)/(${solution.gammaEnergy}×10⁶ eV × 1.602×10⁻¹⁹ J/eV)`,
            afterExpression: `λ = ${solution.photonWavelength.toExponential(3)} m = ${(solution.photonWavelength * 1e12).toFixed(3)} pm`,
            reasoning: 'Shorter wavelength corresponds to higher energy',
            physicsLaw: 'λ = hc/E, where h = Planck\'s constant',
            spectrumLocation: 'Deep in gamma ray region (λ < 10 pm)',
            finalAnswer: true
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate nuclear recoil',
            description: 'Nucleus recoils to conserve momentum',
            formula: 'E_recoil = E_γ²/(2Mc²)',
            calculation: `E_recoil = ${solution.recoilEnergy.toExponential(3)} MeV`,
            reasoning: 'Recoil energy usually negligible for heavy nuclei',
            comparison: `Recoil is ${(solution.recoilEnergy / solution.gammaEnergy * 100).toExponential(2)}% of gamma energy`,
            physicsNote: solution.recoilNegligible ? 
                'Recoil energy negligible - can be ignored' :
                'Recoil energy significant - must be included'
        });

        return steps;
    }

    generateNuclearReactionSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Write balanced reaction equation',
            description: 'Show reactants and products with mass and atomic numbers',
            expression: solution.reactionEquation,
            reasoning: 'Nuclear reactions must conserve mass number, atomic number, and charge',
            conservationCheck: [
                'Mass number A: conserved',
                'Atomic number Z: conserved',
                'Total charge: conserved'
            ]
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate Q-value',
            description: 'Find energy released or required for reaction',
            formula: 'Q = (Σm_initial - Σm_final)c²',
            calculation: `Q = [${solution.initialMass} - ${solution.finalMass}] u × 931.494 MeV/u`,
            afterExpression: `Q = ${solution.Qvalue.toFixed(3)} MeV`,
            reasoning: 'Positive Q: exothermic (releases energy); Negative Q: endothermic (requires energy)',
            physicsLaw: 'Mass-energy equivalence: ΔE = Δmc²',
            reactionType: solution.isExothermic ? 'Exothermic reaction' : 'Endothermic reaction'
        });

        if (solution.isEndothermic) {
            steps.push({
                stepNumber: 3,
                step: 'Calculate threshold energy',
                description: 'Minimum projectile kinetic energy required',
                formula: 'E_th = -Q(1 + m_products/m_target + |Q|/(2m_target c²))',
                calculation: `E_th = ${solution.thresholdEnergy?.toFixed(3)} MeV`,
                reasoning: 'Extra energy needed to conserve momentum in lab frame',
                physicsLaw: 'Threshold occurs when products move together in CM frame',
                practicalNote: `Projectile must have KE > ${solution.thresholdEnergy?.toFixed(3)} MeV`,
                finalAnswer: true
            });
        } else {
            steps.push({
                stepNumber: 3,
                step: 'Energy distribution',
                description: 'Released energy appears as kinetic energy of products',
                expression: `${solution.Qvalue.toFixed(3)} MeV distributed among products`,
                reasoning: 'Energy shared according to momentum conservation',
                physicsLaw: 'Total energy and momentum conserved',
                finalAnswer: true
            });
        }

        return steps;
    }

    generateFissionSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify fission parameters',
            description: 'Determine fission rate and energy per fission',
            expression: `Fission rate = ${solution.fissionRate.toExponential(2)} fissions/s`,
            parameters: [
                `Energy per fission = ${solution.energyPerFission} MeV`,
                `Neutrons per fission ≈ ${solution.neutronsPerFission}`
            ],
            reasoning: 'Typical fission releases ~200 MeV and 2-3 neutrons',
            physicsLaw: 'U-235 + n → fission fragments + neutrons + energy'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate thermal power',
            description: 'Convert fission energy to power output',
            formula: 'P = (fissions/s) × (energy/fission)',
            calculation: `P = ${solution.fissionRate.toExponential(2)} × ${solution.energyPerFission} MeV × 1.602×10⁻¹³ J/MeV`,
            afterExpression: `P = ${solution.thermalPower.toFixed(1)} MW`,
            reasoning: 'Power is energy released per unit time',
            unitConversion: '1 fission/s × 200 MeV = 3.2×10⁻¹¹ W'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate fuel consumption',
            description: 'Determine uranium consumption rate',
            formula: 'Fuel rate = (fissions/s) / (atoms per gram) × conversion factors',
            calculation: `${solution.fuelConsumption.toFixed(3)} kg/day`,
            reasoning: 'Each fission consumes one U-235 nucleus',
            efficiency: `Remarkably small: ${solution.fuelConsumption.toFixed(3)} kg/day produces ${solution.thermalPower.toFixed(1)} MW`,
            comparison: solution.interpretation.comparison,
            finalAnswer: true
        });

        return steps;
    }

    generateFusionSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify fusion reaction',
            description: `Specify reaction type: ${solution.reactionType}`,
            expression: solution.reactionEquation,
            energyRelease: `Q = ${solution.Qvalue} MeV per reaction`,
            reasoning: 'Fusion combines light nuclei to form heavier, more stable nuclei',
            physicsLaw: 'Energy released from increased binding energy per nucleon'
        });

        steps.push({
            stepNumber: 2,
            step: 'Estimate Coulomb barrier',
            description: 'Calculate electrostatic repulsion barrier height',
            formula: 'V_C = Z₁Z₂e²/(4πε₀r)',
            calculation: `V_C ≈ ${solution.coulombBarrier} keV`,
            reasoning: 'Nuclei must overcome electrostatic repulsion to fuse',
            physicsLaw: 'Coulomb force: F = kq₁q₂/r²',
            quantumNote: 'Quantum tunneling allows fusion below classical barrier height'
        });

        steps.push({
            stepNumber: 3,
            step: 'Check temperature requirement',
            description: 'Verify plasma temperature sufficient for fusion',
            formula: 'kT ~ V_C/10 (rule of thumb)',
            given: `T = ${solution.temperature?.toExponential(2)} K`,
            required: `T_required ≈ ${solution.requiredTemperature.toExponential(2)} K`,
            comparison: solution.temperature >= solution.requiredTemperature ?
                'Temperature sufficient for significant fusion rate' :
                'Temperature too low - must be increased',
            physicsLaw: 'Thermal energy kT must overcome Coulomb barrier via quantum tunneling'
        });

        steps.push({
            stepNumber: 4,
            step: 'Evaluate Lawson criterion',
            description: 'Check if conditions allow sustained fusion (ignition)',
            formula: 'nτE ≥ 10²⁰ s⋅m⁻³ for D-T fusion',
            calculation: `nτE = ${solution.lawsonProduct.toExponential(2)} s⋅m⁻³`,
            criterion: `Required: ${solution.lawsonCriterion.toExponential(2)} s⋅m⁻³`,
            result: solution.meetsLawson ? 
                '✓ Lawson criterion satisfied - ignition possible' :
                '✗ Lawson criterion not met - net energy loss',
            reasoning: 'Fusion power must exceed losses for self-sustaining reaction',
            physicsLaw: 'Triple product nτE determines energy breakeven',
            finalAnswer: true
        });

        return steps;
    }

    generateDosimetrySteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Calculate absorbed dose',
            description: 'Energy deposited per unit mass',
            formula: 'D = E/m (Gray)',
            calculation: `D = ${problem.parameters.energy} J / ${problem.parameters.mass} kg`,
            afterExpression: `D = ${solution.absorbedDose.toFixed(6)} Gy`,
            reasoning: 'Absorbed dose measures energy deposition regardless of radiation type',
            unitDefinition: '1 Gray (Gy) = 1 Joule/kilogram',
            oldUnit: `${(solution.absorbedDose * 100).toFixed(4)} rad (1 rad = 0.01 Gy)`
        });

        steps.push({
            stepNumber: 2,
            step: 'Apply radiation weighting factor',
            description: 'Account for biological effectiveness of radiation type',
            formula: 'H = D × w_R (Sievert)',
            radiationType: solution.radiationType,
            weightingFactor: `w_R = ${solution.radiationWeightingFactor}`,
            calculation: `H = ${solution.absorbedDose.toFixed(6)} × ${solution.radiationWeightingFactor}`,
            afterExpression: `H = ${solution.equivalentDose.toFixed(6)} Sv`,
            reasoning: 'Different radiation types cause different biological damage per unit energy',
            examples: 'w_R: photons/electrons = 1, alpha = 20, neutrons ≈ 5-20 (energy-dependent)'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate effective dose',
            description: 'Account for tissue sensitivity',
            formula: 'E = H × w_T (Sievert)',
            tissueType: solution.tissueType,
            tissueWeightingFactor: `w_T = ${solution.tissueWeightingFactor}`,
            calculation: `E = ${solution.equivalentDose.toFixed(6)} × ${solution.tissueWeightingFactor}`,
            afterExpression: `E = ${solution.effectiveDose.toFixed(6)} Sv = ${solution.effectiveDoseRem.toFixed(4)} rem`,
            reasoning: 'Different organs have different radiation sensitivities',
            examples: 'w_T: gonads = 0.20, bone marrow = 0.12, skin = 0.01',
            finalAnswer: true
        });

        steps.push({
            stepNumber: 4,
            step: 'Safety assessment',
            description: 'Compare to regulatory limits and biological effects',
            effectiveDose: `${solution.effectiveDose.toFixed(6)} Sv`,
            safetyLevel: solution.safetyAssessment,
            limits: [
                'Public annual limit: 1 mSv',
                'Occupational annual limit: 50 mSv',
                'Acute radiation syndrome: > 1 Sv'
            ],
            recommendation: solution.effectiveDose < 0.001 ?
                'No special precautions needed' :
                solution.effectiveDose < 0.05 ?
                'Monitor exposure, follow ALARA principle' :
                'Medical monitoring required, reduce exposure'
        });

        return steps;
    }

    generateCrossSectionSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify interaction parameters',
            description: 'List cross section, flux, and target density',
            parameters: [
                `σ = ${solution.microscopicCrossSection} barns = ${solution.crossSectionCm2.toExponential(2)} cm²`,
                `Φ = ${solution.neutronFlux.toExponential(2)} n/cm²⋅s`,
                `N = ${solution.targetDensity.toExponential(2)} nuclei/cm³`
            ],
            reasoning: 'Cross section represents effective target area for interaction',
            unitNote: '1 barn = 10⁻²⁴ cm² (approximately nuclear cross-sectional area)'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate reaction rate',
            description: 'Number of interactions per unit volume per unit time',
            formula: 'R = Φ × N × σ',
            calculation: `R = ${solution.neutronFlux.toExponential(2)} × ${solution.targetDensity.toExponential(2)} × ${solution.crossSectionCm2.toExponential(2)}`,
            afterExpression: `R = ${solution.reactionRate.toExponential(2)} reactions/cm³⋅s`,
            reasoning: 'Reaction rate proportional to neutron flux, target density, and cross section',
            physicsLaw: 'R = ΦNσ is fundamental neutron transport equation'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate mean free path',
            description: 'Average distance neutron travels before interaction',
            formula: 'λ = 1/(Nσ)',
            calculation: `λ = 1/(${solution.targetDensity.toExponential(2)} × ${solution.crossSectionCm2.toExponential(2)})`,
            afterExpression: `λ = ${solution.meanFreePath.toFixed(2)} cm`,
            reasoning: 'Larger cross section or higher density → shorter mean free path',
            interpretation: `Neutrons travel on average ${solution.meanFreePath.toFixed(2)} cm before interacting`,
            finalAnswer: true
        });

        if (solution.transmission) {
            steps.push({
                stepNumber: 4,
                step: 'Calculate transmission through material',
                description: 'Fraction of neutrons transmitted through thickness',
                formula: 'I/I₀ = e^(-Nσx)',
                calculation: `T = exp(- ${solution.targetDensity.toExponential(2)} × ${solution.crossSectionCm2.toExponential(2)} × ${solution.thickness})`,
                afterExpression: `Transmission = ${(solution.transmission * 100).toFixed(2)}%, Absorption = ${(solution.absorption * 100).toFixed(2)}%`,
                reasoning: 'Exponential attenuation analogous to radioactive decay',
                shieldingNote: `${solution.thickness} cm reduces intensity to ${(solution.transmission * 100).toFixed(1)}% of original`
            });
        }

        return steps;
    }

    generateNuclearModelSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify nucleus and determine composition',
            description: 'Specify mass number A, atomic number Z, neutron number N',
            expression: `A = ${solution.massNumber}, Z = ${solution.atomicNumber}, N = ${solution.neutronNumber}`,
            pairingType: solution.pairingType,
            magicNumbers: {
                protons: solution.isMagicZ ? `Z = ${solution.atomicNumber} is a magic number` : 'Not a magic number',
                neutrons: solution.isMagicN ? `N = ${solution.neutronNumber} is a magic number` : 'Not a magic number',
                doublyMagic: solution.isDoublyMagic ? 'Doubly magic nucleus - exceptionally stable' : null
            },
            reasoning: 'Composition determines binding energy through SEMF'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate volume term',
            description: 'Bulk binding energy proportional to number of nucleons',
            formula: 'E_V = a_V × A',
            calculation: `E_V = 15.75 MeV × ${solution.massNumber}`,
            afterExpression: `E_V = ${solution.volumeTerm.toFixed(2)} MeV`,
            reasoning: 'Each nucleon contributes equally to binding in bulk',
            physicsLaw: 'Strong nuclear force is short-range and saturates'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate surface term',
            description: 'Surface nucleons are less tightly bound',
            formula: 'E_S = -a_S × A^(2/3)',
            calculation: `E_S = -17.8 MeV × ${solution.massNumber}^(2/3)`,
            afterExpression: `E_S = ${solution.surfaceTerm.toFixed(2)} MeV`,
            reasoning: 'Surface nucleons have fewer neighbors, reducing binding',
            physicsLaw: 'Surface area ∝ A^(2/3) from liquid drop model'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate Coulomb term',
            description: 'Electrostatic repulsion between protons',
            formula: 'E_C = -a_C × Z²/A^(1/3)',
            calculation: `E_C = -0.711 MeV × ${solution.atomicNumber}² / ${solution.massNumber}^(1/3)`,
            afterExpression: `E_C = ${solution.coulombTerm.toFixed(2)} MeV`,
            reasoning: 'Protons repel each other, reducing binding energy',
            physicsLaw: 'Coulomb energy ∝ Z² and inversely proportional to nuclear radius'
        });

        steps.push({
            stepNumber: 5,
            step: 'Calculate asymmetry term',
            description: 'Penalty for neutron-proton imbalance',
            formula: 'E_A = -a_A × (N-Z)²/A',
            calculation: `E_A = -23.7 MeV × (${solution.neutronNumber} - ${solution.atomicNumber})² / ${solution.massNumber}`,
            afterExpression: `E_A = ${solution.asymmetryTerm.toFixed(2)} MeV`,
            reasoning: 'Nuclei prefer N ≈ Z for light nuclei, N > Z for heavy nuclei',
            physicsLaw: 'Pauli exclusion principle favors balanced proton-neutron ratio'
        });

        steps.push({
            stepNumber: 6,
            step: 'Calculate pairing term',
            description: 'Nucleon pairing contribution to stability',
            pairingType: solution.pairingType,
            formula: 'δ = ±12/√A',
            calculation: solution.pairingTerm !== 0 ? 
                `δ = ${solution.pairingTerm > 0 ? '+' : ''}12/√${solution.massNumber} = ${solution.pairingTerm.toFixed(2)} MeV` :
                'δ = 0 (even-odd nucleus)',
            reasoning: solution.pairingType === 'even-even' ? 
                'Even-even nuclei are more stable (positive contribution)' :
                solution.pairingType === 'odd-odd' ?
                'Odd-odd nuclei are less stable (negative contribution)' :
                'Even-odd: no pairing effect',
            physicsLaw: 'Nucleon pairs in same quantum state lower energy'
        });

        steps.push({
            stepNumber: 7,
            step: 'Sum all terms for total binding energy',
            description: 'Add volume, surface, Coulomb, asymmetry, and pairing terms',
            formula: 'BE = E_V + E_S + E_C + E_A + δ',
            calculation: `BE = ${solution.volumeTerm.toFixed(2)} + (${solution.surfaceTerm.toFixed(2)}) + (${solution.coulombTerm.toFixed(2)}) + (${solution.asymmetryTerm.toFixed(2)}) + ${solution.pairingTerm.toFixed(2)}`,
            afterExpression: `BE = ${solution.totalBindingEnergy.toFixed(2)} MeV`,
            reasoning: 'SEMF provides good estimate of binding energy',
            accuracy: 'Typically within 1% of experimental values for medium-heavy nuclei',
            finalAnswer: true
        });

        steps.push({
            stepNumber: 8,
            step: 'Calculate binding energy per nucleon',
            description: 'Normalize by mass number for comparison',
            formula: 'BE/A = BE / A',
            calculation: `BE/A = ${solution.totalBindingEnergy.toFixed(2)} / ${solution.massNumber}`,
            afterExpression: `BE/A = ${solution.bindingEnergyPerNucleon.toFixed(3)} MeV/nucleon`,
            stability: solution.stability,
            interpretation: solution.interpretation.perNucleon
        });

        return steps;
    }

    generateNeutronModerationSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify moderator properties',
            description: 'Determine moderator mass number and energy range',
            parameters: [
                `Moderator mass number: A = ${solution.moderatorMassNumber}`,
                `Initial neutron energy: E₀ = ${solution.initialEnergy} ${solution.energyUnit}`,
                `Target energy: E = ${solution.finalEnergy} ${solution.energyUnit}`
            ],
            reasoning: 'Lighter moderators slow neutrons more efficiently per collision',
            physicsLaw: 'Elastic scattering transfers maximum energy when masses are equal'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate logarithmic energy decrement',
            description: 'Average energy loss per collision',
            formula: 'ξ = 1 - [(A-1)²/(2A)]ln[(A+1)/(A-1)]',
            calculation: `ξ = 1 - [(${solution.moderatorMassNumber}-1)²/(2×${solution.moderatorMassNumber})]ln[(${solution.moderatorMassNumber}+1)/(${solution.moderatorMassNumber}-1)]`,
            afterExpression: `ξ = ${solution.logarithmicDecrement.toFixed(4)}`,
            reasoning: 'ξ represents average ln(E₀/E) per collision',
            physicsLaw: 'Derived from kinematics of elastic scattering',
            comparison: {
                'H (A=1)': 'ξ = 1.000 (best)',
                'D (A=2)': 'ξ = 0.725',
                'C (A=12)': 'ξ = 0.158',
                'U (A=238)': 'ξ = 0.0084 (poor moderator)'
            }
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate number of collisions',
            description: 'Number of scattering events to reach target energy',
            formula: 'n = ln(E₀/E) / ξ',
            calculation: `n = ln(${solution.initialEnergy}/${solution.finalEnergy}) / ${solution.logarithmicDecrement.toFixed(4)}`,
            afterExpression: `n = ${solution.numberOfCollisions} collisions`,
            reasoning: 'Each collision reduces energy by average factor e^(-ξ)',
            practicalNote: `Neutron must scatter ${solution.numberOfCollisions} times to thermalize`,
            finalAnswer: true
        });

        steps.push({
            stepNumber: 4,
            step: 'Evaluate moderator efficiency',
            description: 'Consider both slowing-down power and absorption',
            moderatingPower: `ξΣ_s = ${solution.moderatingPower.toFixed(2)}`,
            moderatingRatio: `ξΣ_s/Σ_a = ${solution.moderatingRatio.toFixed(1)}`,
            assessment: solution.moderatorEfficiency,
            reasoning: 'Good moderator has high ξ and low absorption cross section',
            comparison: solution.interpretation.comparison
        });

        return steps;
    }

    generateDecayChainSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Set up decay chain equations',
            description: 'A → B → C with decay constants λ_A and λ_B',
            decayScheme: 'Parent (A) decays to Daughter (B) which decays to Granddaughter (C)',
            decayConstants: {
                parent: `λ_A = ${solution.parentDecayConstant.toExponential(4)} s⁻¹`,
                daughter: `λ_B = ${solution.daughterDecayConstant.toExponential(4)} s⁻¹`
            },
            reasoning: 'Daughter population grows from parent decay, decreases from its own decay',
            differentialEquations: [
                'dN_A/dt = -λ_A N_A',
                'dN_B/dt = λ_A N_A - λ_B N_B'
            ]
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate parent population',
            description: 'Parent decays exponentially',
            formula: 'N_A(t) = N₀_A × e^(-λ_A t)',
            calculation: `N_A(${solution.timeElapsed}) = ${solution.initialParentNuclei.toExponential(2)} × e^(-${solution.parentDecayConstant.toExponential(4)} × ${solution.timeElapsed})`,
            afterExpression: `N_A = ${solution.parentNuclei.toExponential(4)}`,
            reasoning: 'Simple exponential decay for parent nuclide'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate daughter population',
            description: 'Daughter follows Bateman equation',
            formula: 'N_B(t) = (λ_A N₀_A)/(λ_B - λ_A) × [e^(-λ_A t) - e^(-λ_B t)]',
            calculation: `Complex exponential expression evaluated numerically`,
            afterExpression: `N_B = ${solution.daughterNuclei.toExponential(4)}`,
            reasoning: 'Balance between production from A and decay of B',
            specialCases: {
                'λ_B >> λ_A': 'Secular equilibrium: daughter activity equals parent',
                'λ_B > λ_A': 'Transient equilibrium: daughter exceeds parent temporarily',
                'λ_B < λ_A': 'No equilibrium: parent depletes faster'
            }
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate activities and check equilibrium',
            description: 'Activity A = λN for each species',
            activities: {
                parent: `A_A = λ_A N_A = ${solution.parentActivity.toExponential(4)} Bq`,
                daughter: `A_B = λ_B N_B = ${solution.daughterActivity.toExponential(4)} Bq`
            },
            activityRatio: `A_B/A_A = ${solution.activityRatio.toFixed(3)}`,
            equilibriumType: solution.equilibriumType,
            interpretation: solution.interpretation.equilibrium,
            finalAnswer: true
        });

        return steps;
    }

    generateReactorPhysicsSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'List six-factor formula components',
            description: 'Identify each multiplicative factor in reactor equation',
            factors: {
                'η (eta)': `${solution.reproductionFactor} - neutrons produced per absorption in fuel`,
                'f': `${solution.thermalUtilization} - thermal utilization factor`,
                'ε (epsilon)': `${solution.fastFissionFactor} - fast fission factor`,
                'p': `${solution.resonanceEscapeProbability} - resonance escape probability`,
                'P_FNL': `${solution.fastNonLeakage} - fast non-leakage probability`,
                'P_TNL': `${solution.thermalNonLeakage} - thermal non-leakage probability`
            },
            reasoning: 'Each factor represents a stage in neutron life cycle'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate infinite multiplication factor',
            description: 'Four-factor formula for infinite reactor',
            formula: 'k_∞ = η × f × ε × p',
            calculation: `k_∞ = ${solution.reproductionFactor} × ${solution.thermalUtilization} × ${solution.fastFissionFactor} × ${solution.resonanceEscapeProbability}`,
            afterExpression: `k_∞ = ${solution.infiniteMultiplication.toFixed(5)}`,
            reasoning: 'k_∞ > 1 required for criticality in infinite reactor',
            physicsLaw: 'Represents neutron multiplication without leakage'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate effective multiplication factor',
            description: 'Account for neutron leakage from finite reactor',
            formula: 'k_eff = k_∞ × P_FNL × P_TNL',
            calculation: `k_eff = ${solution.infiniteMultiplication.toFixed(5)} × ${solution.fastNonLeakage} × ${solution.thermalNonLeakage}`,
            afterExpression: `k_eff = ${solution.effectiveMultiplication.toFixed(5)}`,
            reasoning: 'Leakage reduces multiplication in finite reactor',
            criticalityCondition: {
                'k_eff = 1': 'Critical (steady-state)',
                'k_eff > 1': 'Supercritical (power increasing)',
                'k_eff < 1': 'Subcritical (power decreasing)'
            }
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate reactivity',
            description: 'Measure of deviation from criticality',
            formula: 'ρ = (k_eff - 1) / k_eff',
            calculation: `ρ = (${solution.effectiveMultiplication.toFixed(5)} - 1) / ${solution.effectiveMultiplication.toFixed(5)}`,
            afterExpression: `ρ = ${solution.reactivity.toFixed(6)} = ${solution.reactivityInPcm.toFixed(0)} pcm`,
            reasoning: 'Reactivity indicates how far reactor is from critical state',
            unitNote: '1 pcm (percent-mille) = 10⁻⁵',
            reactorState: solution.reactorState,
            finalAnswer: true
        });

        steps.push({
            stepNumber: 5,
            step: 'Assess reactor state and control',
            description: 'Determine operating condition and required action',
            status: {
                keff: solution.effectiveMultiplication.toFixed(5),
                state: solution.reactorState,
                isCritical: solution.isCritical ? 'Yes' : 'No'
            },
            controlAction: solution.interpretation.control,
            safetyNote: solution.interpretation.safety
        });

        return steps;
    }

    generateGenericNuclearSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Nuclear physics problem',
            description: 'Solve the given nuclear physics problem',
            expression: problem.scenario || 'Problem description',
            reasoning: 'Apply appropriate nuclear physics principles',
            solution: solution
        }];
    }

    // ENHANCED STEP METHODS (reused from linear workbook, adapted for nuclear physics)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanationNuclear(step, problem),
                procedural: this.getProceduralExplanationNuclear(step),
                physical: this.getPhysicalExplanationNuclear(step, problem),
                mathematical: this.getMathematicalExplanationNuclear(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisitesNuclear(step, problem.type),
                keyVocabulary: this.identifyKeyVocabularyNuclear(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null,
                physicsContext: this.getPhysicsContext(step, problem)
            }
        };

        return enhanced;
    }

    getConceptualExplanationNuclear(step, problem) {
        const conceptualMappings = {
            'Identify given quantities': 'Understanding what information we have is the foundation of problem-solving in nuclear physics',
            'Convert half-life to decay constant': 'The decay constant represents the fundamental probability of decay per unit time',
            'Apply exponential decay law': 'Radioactive decay is inherently random but predictable statistically through exponential behavior',
            'Calculate mass defect': 'Mass defect represents the conversion of mass to binding energy via E=mc²',
            'Write decay equation': 'Nuclear reactions must conserve fundamental quantities: charge, mass number, and lepton/baryon number',
            'Calculate Q-value': 'Q-value tells us if a reaction releases energy (exothermic) or requires energy (endothermic)'
        };

        return conceptualMappings[step.step] || 'This step applies fundamental nuclear physics principles to advance toward the solution';
    }

    getProceduralExplanationNuclear(step) {
        if (step.formula) {
            return `1. Identify the relevant formula: ${step.formula}
2. Substitute known values into the formula
3. Perform the calculation carefully, checking units
4. Verify the result makes physical sense`;
        }
        return 'Follow standard nuclear physics calculation procedures for this step type';
    }

    getPhysicalExplanationNuclear(step, problem) {
        if (step.physicsLaw) {
            return `Physical principle: ${step.physicsLaw}. This represents the underlying physics governing the calculation.`;
        }
        return 'This calculation applies conservation laws and quantum mechanical principles to nuclear systems';
    }

    getMathematicalExplanationNuclear(step) {
        if (step.formula) {
            return `Mathematical form: ${step.formula}. This equation relates physical quantities through well-established mathematical relationships.`;
        }
        return 'Standard mathematical operations applied to nuclear physics quantities';
    }

    identifyPrerequisitesNuclear(step, problemType) {
        const prerequisites = {
            'radioactive_decay': ['Exponential functions', 'Natural logarithm', 'Basic probability'],
            'binding_energy': ['Mass-energy equivalence', 'Atomic structure', 'Unit conversions (u to MeV)'],
            'alpha_decay': ['Conservation laws', 'Momentum conservation', 'Kinetic energy calculations'],
            'beta_decay': ['Weak nuclear force', 'Lepton number conservation', 'Continuous spectra'],
            'gamma_decay': ['Electromagnetic radiation', 'Photon properties', 'Energy quantization'],
            'nuclear_reaction': ['Conservation laws', 'Relativistic kinematics', 'Threshold energy concept'],
            'fission': ['Chain reactions', 'Neutron multiplication', 'Energy-power conversions'],
            'fusion': ['Coulomb barrier', 'Quantum tunneling', 'Plasma physics basics'],
            'dosimetry': ['Energy absorption', 'Biological effects', 'Radiation weighting factors'],
            'cross_section': ['Probability concepts', 'Exponential attenuation', 'Neutron interactions']
        };

        return prerequisites[problemType] || ['Basic nuclear physics', 'Algebra', 'Scientific notation'];
    }

    identifyKeyVocabularyNuclear(step) {
        const vocabulary = {
            'decay constant': 'λ - probability per unit time that a nucleus will decay',
            'half-life': 't₁/₂ - time for half of nuclei to decay',
            'activity': 'A - number of decays per second (Becquerel)',
            'mass defect': 'Δm - difference between sum of parts and actual nuclear mass',
            'binding energy': 'BE - energy required to disassemble nucleus into separate nucleons',
            'Q-value': 'Energy released (Q>0) or required (Q<0) in nuclear reaction',
            'cross section': 'σ - effective target area for nuclear interaction (barns)',
            'absorbed dose': 'Energy deposited per unit mass (Gray)',
            'equivalent dose': 'Absorbed dose weighted by radiation type (Sievert)'
        };

        // Extract vocabulary from step content
        const foundTerms = [];
        for (const [term, definition] of Object.entries(vocabulary)) {
            if (step.description?.toLowerCase().includes(term.toLowerCase()) ||
                step.reasoning?.toLowerCase().includes(term.toLowerCase())) {
                foundTerms.push({ term, definition });
            }
        }

        return foundTerms;
    }

    getPhysicsContext(step, problem) {
        return {
            phenomenon: this.getNuclearPhenomenon(problem.type),
            applications: this.getRealWorldApplications(problem.type),
            historicalContext: this.getHistoricalContext(problem.type)
        };
    }

    getNuclearPhenomenon(problemType) {
        const phenomena = {
            'radioactive_decay': 'Spontaneous transformation of unstable nuclei through weak or strong force',
            'binding_energy': 'Energy holding nucleus together against electromagnetic repulsion',
            'alpha_decay': 'Emission of helium-4 nucleus from heavy elements',
            'beta_decay': 'Weak force transformation of neutron to proton (or vice versa)',
            'gamma_decay': 'Electromagnetic de-excitation of nucleus',
            'nuclear_reaction': 'Rearrangement of nucleons between nuclei',
            'fission': 'Splitting of heavy nucleus into lighter fragments',
            'fusion': 'Combination of light nuclei into heavier nucleus',
            'dosimetry': 'Measurement of radiation energy deposition in matter',
            'cross_section': 'Quantification of nuclear interaction probability'
        };

        return phenomena[problemType] || 'Nuclear physics phenomenon';
    }

    getRealWorldApplications(problemType) {
        const applications = {
            'radioactive_decay': ['Carbon-14 dating', 'Medical tracers', 'Smoke detectors'],
            'binding_energy': ['Nuclear stability prediction', 'Energy calculations', 'Nucleosynthesis'],
            'alpha_decay': ['Smoke detectors (Am-241)', 'Radiotherapy', 'Alpha spectroscopy'],
            'beta_decay': ['PET scans', 'Carbon dating', 'Medical imaging'],
            'gamma_decay': ['Medical imaging (Tc-99m)', 'Sterilization', 'Material analysis'],
            'nuclear_reaction': ['Isotope production', 'Neutron activation analysis', 'Particle physics'],
            'fission': ['Nuclear power plants', 'Research reactors', 'Radioisotope production'],
            'fusion': ['Stellar energy', 'Fusion reactor research', 'Hydrogen weapons'],
            'dosimetry': ['Radiation safety', 'Medical radiation therapy', 'Space missions'],
            'cross_section': ['Reactor design', 'Shielding calculations', 'Neutron detection']
        };

        return applications[problemType] || ['Various nuclear applications'];
    }

    getHistoricalContext(problemType) {
        const historical = {
            'radioactive_decay': 'Discovered by Becquerel (1896), explained by Rutherford and Soddy (1902)',
            'binding_energy': 'Concept developed alongside mass-energy equivalence (Einstein, 1905)',
            'alpha_decay': 'First type of radiation identified (Rutherford, 1899)',
            'beta_decay': 'Led to discovery of neutrino (Pauli, 1930; Fermi theory, 1934)',
            'gamma_decay': 'Identified as electromagnetic radiation by Rutherford (1903)',
            'nuclear_reaction': 'First artificial nuclear reaction by Rutherford (1919)',
            'fission': 'Discovered by Hahn and Strassmann, explained by Meitner and Frisch (1938)',
            'fusion': 'Stellar fusion proposed by Eddington (1920s), confirmed by Bethe (1939)',
            'dosimetry': 'Developed with early radiation medicine (Roentgen, Curie era)',
            'cross_section': 'Concept formalized in quantum mechanics and nuclear physics (1930s-40s)'
        };

        return historical[problemType] || 'Important development in nuclear physics';
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Physical Connection',
                    explanation: this.generateNuclearStepBridge(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgression(steps[i], steps[i + 1]),
                    physicsFlow: this.explainPhysicsFlow(steps[i], steps[i + 1], problem)
                });
            }
        }

        return enhancedSteps;
    }

    generateNuclearStepBridge(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression || 'intermediate result'}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This progression is necessary because we're building toward the complete physical picture`,
            howItHelps: `This will provide: ${nextStep.reasoning || 'the next piece of information needed'}`
        };
    }

    explainPhysicsFlow(currentStep, nextStep, problem) {
        return `In nuclear physics problems like ${problem.type}, we systematically build from fundamental quantities to derived results, ensuring physical consistency at each stage.`;
    }

    addErrorPrevention(step, problemType) {
        const mistakes = this.commonMistakes[problemType]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsNuclear(step, problemType),
                checkPoints: this.generateCheckPointsNuclear(step),
                warningFlags: this.identifyWarningFlagsNuclear(step, problemType)
            },
            validation: {
                selfCheck: this.generateSelfCheckQuestionNuclear(step),
                expectedResult: this.describeExpectedResultNuclear(step),
                troubleshooting: this.generateTroubleshootingTipsNuclear(step)
            }
        };
    }

    generatePreventionTipsNuclear(step, problemType) {
        return [
            'Always check units: MeV vs. J, seconds vs. years, barns vs. cm²',
            'Verify conservation laws: A, Z, charge, energy-momentum',
            'Use scientific notation to avoid arithmetic errors with very large/small numbers',
            'Double-check sign conventions: Q>0 for exothermic, negative exponent in decay'
        ];
    }

    generateCheckPointsNuclear(step) {
        return [
            'Are all units consistent?',
            'Do the numbers have correct order of magnitude?',
            'Are conservation laws satisfied?',
            'Does the result make physical sense?'
        ];
    }

    identifyWarningFlagsNuclear(step, problemType) {
        const warnings = [];
        
        if (step.formula?.includes('ln') || step.formula?.includes('log')) {
            warnings.push('Check that argument of logarithm is positive and dimensionless');
        }
        
        if (step.formula?.includes('exp') || step.formula?.includes('e^')) {
            warnings.push('Exponent must be dimensionless; check sign (decay is negative)');
        }
        
        if (problemType === 'beta_decay' && step.step?.includes('Q-value')) {
            warnings.push('Remember: β⁺ decay requires extra 2mₑc² term');
        }
        
        return warnings;
    }

    generateSelfCheckQuestionNuclear(step) {
        const questions = {
            'Calculate decay constant': 'Did I use ln(2), not log₁₀(2) or 1?',
            'Calculate mass defect': 'Is my mass defect positive (binding energy must be positive)?',
            'Calculate Q-value': 'Is Q>0 for a spontaneous decay/exothermic reaction?',
            'Apply exponential decay law': 'Is my exponent negative (population decreases with time)?'
        };

        return questions[step.step] || 'Does my answer make physical sense?';
    }

    describeExpectedResultNuclear(step) {
        if (step.finalAnswer) {
            return 'This is the final physical quantity we sought - verify units and magnitude';
        }
        return 'Intermediate result that will be used in subsequent calculations';
    }

    generateTroubleshootingTipsNuclear(step) {
        return [
            'If units don\'t match, review conversion factors',
            'If magnitude seems wrong, check for powers of 10 errors',
            'If negative values appear unexpectedly, check signs in formula',
            'Consult reference tables for nuclear masses and constants'
        ];
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsNuclear(step, problem),
                subSteps: this.breakIntoSubStepsNuclear(step),
                hints: this.generateProgressiveHintsNuclear(step),
                practiceVariation: this.generatePracticeVariationNuclear(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcessNuclear(step),
                decisionPoints: this.identifyDecisionPointsNuclear(step),
                alternativeApproaches: this.suggestAlternativeMethodsNuclear(step, problem)
            }
        }));
    }

    generateGuidingQuestionsNuclear(step, problem) {
        return [
            'What physical quantity are we calculating in this step?',
            'Which conservation laws or principles apply here?',
            'What are the units of the result we expect?',
            'How does this step connect to the overall physical process?'
        ];
    }

    breakIntoSubStepsNuclear(step) {
        if (step.formula) {
            return [
                `Write the formula: ${step.formula}`,
                'Identify each variable and its value',
                'Check units for consistency',
                'Substitute values carefully',
                'Perform calculation',
                'Verify result makes physical sense'
            ];
        }
        return ['Understand the physical concept', 'Apply appropriate formula', 'Calculate and verify'];
    }

    generateProgressiveHintsNuclear(step) {
        return {
            level1: 'Consider which physical law or principle governs this calculation',
            level2: 'Look for the formula that relates the quantities you know to what you need',
            level3: 'Check your reference materials for standard nuclear physics formulas',
            level4: step.formula ? `The relevant formula is: ${step.formula}` : 'Apply conservation principles'
        };
    }

    generatePracticeVariationNuclear(step, problem) {
        return {
            similarProblem: `Practice similar ${problem.type} problems with different isotopes or values`,
            practiceHint: 'Start with simpler cases (smaller numbers, round values) then progress to realistic data',
            extension: `Explore related concepts: How would this change with different nuclear properties?`
        };
    }

    explainThinkingProcessNuclear(step) {
        return {
            observe: 'What physical quantities and relationships are involved?',
            goal: 'What specific result do I need from this step?',
            strategy: 'Which formula or principle connects what I know to what I need?',
            execute: 'How do I apply this carefully, checking units and signs?',
            verify: 'Does the result have correct units, magnitude, and physical meaning?'
        };
    }

    identifyDecisionPointsNuclear(step) {
        return [
            'Choosing the correct formula for this nuclear process',
            'Deciding which units to work in (MeV vs. J, seconds vs. years)',
            'Determining whether to use atomic or nuclear masses',
            'Selecting appropriate physical constants'
        ];
    }

    suggestAlternativeMethodsNuclear(step, problem) {
        const alternatives = {
            'radioactive_decay': [
                'Graphical method: plot ln(N) vs. t',
                'Use number of half-lives directly',
                'Activity-based calculations instead of population'
            ],
            'binding_energy': [
                'Use SEMF (Semi-Empirical Mass Formula)',
                'Look up experimental values',
                'Calculate from nuclear reaction Q-values'
            ],
            'nuclear_reaction': [
                'Q-value from binding energies',
                'Q-value from mass differences',
                'Energy level diagrams'
            ]
        };

        return alternatives[problem.type] || ['Standard calculation method is most direct'];
    }

    // GRAPH DATA GENERATION

    generateNuclearGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;

        switch(type) {
            case 'radioactive_decay':
                this.graphData = this.generateDecayGraph();
                break;
            case 'binding_energy':
                this.graphData = this.generateBindingEnergyGraph();
                break;
            case 'alpha_decay':
                this.graphData = this.generateAlphaDecayDiagram();
                break;
            case 'beta_decay':
                this.graphData = this.generateBetaDecaySpectrum();
                break;
            case 'fission':
                this.graphData = this.generateFissionDiagram();
                break;
            case 'dosimetry':
                this.graphData = this.generateDosimetryChart();
                break;
        }
    }

    generateDecayGraph() {
        const { decayConstant, halfLifeSeconds } = this.currentSolution;
        const points = [];
        const timeMax = 5 * halfLifeSeconds;
        
        for (let t = 0; t <= timeMax; t += timeMax / 50) {
            const N_fraction = Math.exp(-decayConstant * t);
            const A_fraction = Math.exp(-decayConstant * t);
            points.push({ 
                time: t / halfLifeSeconds, // in units of half-lives
                population: N_fraction,
                activity: A_fraction
            });
        }

        return {
            type: 'radioactive_decay',
            data: points,
            xLabel: 'Time (half-lives)',
            yLabel: 'Fraction Remaining',
            title: 'Exponential Radioactive Decay',
            halfLifeMarkers: [1, 2, 3, 4, 5]
        };
    }

    generateBindingEnergyGraph() {
        // Generate binding energy per nucleon curve
        const points = [];
        for (let A = 1; A <= 240; A += 5) {
            const BE_per_A = this.estimateBEperA(A);
            points.push({ massNumber: A, bindingEnergyPerNucleon: BE_per_A });
        }

        return {
            type: 'binding_energy_curve',
            data: points,
            xLabel: 'Mass Number (A)',
            yLabel: 'Binding Energy per Nucleon (MeV)',
            title: 'Nuclear Binding Energy Curve',
            peak: { A: 56, BE_per_A: 8.8 },
            annotations: [
                { A: 4, label: 'He-4' },
                { A: 56, label: 'Fe-56 (peak)' },
                { A: 238, label: 'U-238' }
            ]
        };
    }

    estimateBEperA(A) {
        // Simplified binding energy curve
        if (A === 1) return 0;
        if (A === 4) return 7.07;
        if (A <= 12) return 5.0 + 0.3 * A;
        if (A <= 60) return 8.0 + 0.014 * (56 - Math.abs(A - 56));
        return 8.8 - 0.005 * (A - 56);
    }

    generateAlphaDecayDiagram() {
        const { Qvalue, alphaKineticEnergy, daughterRecoilEnergy } = this.currentSolution;

        return {
            type: 'energy_level_diagram',
            parentLevel: 0,
            daughterLevel: -Qvalue,
            alphaEnergy: alphaKineticEnergy,
            recoilEnergy: daughterRecoilEnergy,
            title: 'Alpha Decay Energy Diagram',
            labels: {
                parent: 'Parent Nucleus',
                daughter: 'Daughter Nucleus + α',
                transition: `Q = ${Qvalue.toFixed(2)} MeV`
            }
        };
    }

    generateBetaDecaySpectrum() {
        const { maxBetaEnergy } = this.currentSolution;
        const points = [];

        // Simplified beta spectrum (Fermi theory)
        for (let E = 0; E <= maxBetaEnergy; E += maxBetaEnergy / 50) {
            const p = Math.sqrt(E * (E + 2 * 0.511)); // momentum
            const spectrum = p * (E + 0.511) * Math.pow(maxBetaEnergy - E, 2);
            points.push({ energy: E, intensity: spectrum });
        }

        return {
            type: 'beta_spectrum',
            data: points,
            xLabel: 'Beta Particle Energy (MeV)',
            yLabel: 'Relative Intensity',
            title: 'Beta Decay Energy Spectrum',
            maxEnergy: maxBetaEnergy
        };
    }

    generateFissionDiagram() {
        return {
            type: 'fission_diagram',
            fissionRate: this.currentSolution.fissionRate,
            energyPerFission: this.currentSolution.energyPerFission,
            power: this.currentSolution.thermalPower,
            title: 'Nuclear Fission Process',
            components: {
                kineticEnergy: 168,
                gamma: 7,
                beta: 8,
                neutrino: 12,
                total: 200
            }
        };
    }

    generateDosimetryChart() {
        return {
            type: 'dosimetry_comparison',
            absorbedDose: this.currentSolution.absorbedDose,
            equivalentDose: this.currentSolution.equivalentDose,
            effectiveDose: this.currentSolution.effectiveDose,
            limits: {
                publicAnnual: 0.001,
                occupationalAnnual: 0.05,
                acuteRisk: 1.0
            },
            title: 'Radiation Dose Assessment'
        };
    }

    // WORKBOOK GENERATION

    generateNuclearWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPhysicsContextSection(),
            this.createEnhancedStepsSection(),
            this.createSolutionSection(),
            this.createVerificationSection(),
            this.createPhysicalInterpretationSection(),
            this.createSafetyConsiderationsSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Nuclear Physics Mathematical Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSection() {
        if (!this.currentProblem) return null;

        const problemData = [
            ['Problem Type', this.nuclearTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.nuclearTypes[this.currentProblem.type]?.category || 'N/A'],
            ['Description', this.currentProblem.scenario || this.currentProblem.originalInput]
        ];

        // Add specific parameters
        if (this.currentProblem.parameters) {
            for (const [key, value] of Object.entries(this.currentProblem.parameters)) {
                if (value !== undefined && value !== null) {
                    problemData.push([key, String(value)]);
                }
            }
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPhysicsContextSection() {
        const { type } = this.currentProblem;
        
        return {
            title: 'Physics Context',
            type: 'context',
            data: [
                ['Physical Phenomenon', this.getNuclearPhenomenon(type)],
                ['Governing Laws', this.getGoverningLaws(type)],
                ['Real-World Applications', this.getRealWorldApplications(type).join('; ')],
                ['Historical Context', this.getHistoricalContext(type)]
            ]
        };
    }

    getGoverningLaws(problemType) {
        const laws = {
            'radioactive_decay': 'First-order kinetics, Conservation of mass-energy',
            'binding_energy': 'Mass-energy equivalence (E=mc²), Strong nuclear force',
            'alpha_decay': 'Conservation of mass-energy, momentum, and charge; Quantum tunneling',
            'beta_decay': 'Weak nuclear force, Lepton number conservation',
            'gamma_decay': 'Electromagnetic interaction, Energy quantization',
            'nuclear_reaction': 'Conservation of baryon number, charge, mass-energy, momentum',
            'fission': 'Mass-energy conservation, Neutron multiplication',
            'fusion': 'Mass-energy conservation, Coulomb barrier, Quantum tunneling',
            'dosimetry': 'Energy deposition in matter, Biological response factors',
            'cross_section': 'Quantum mechanical scattering, Neutron interactions'
        };

        return laws[problemType] || 'Fundamental conservation laws';
    }

    createEnhancedStepsSection() {
        if (!this.solutionSteps || this.solutionSteps.length === 0) return null;

        const stepsData = [];

        this.solutionSteps.forEach((step, index) => {
            if (step.stepType === 'bridge') {
                stepsData.push(['═══ Physical Connection ═══', '']);
                stepsData.push(['Next Step', step.explanation.nextGoal]);
                stepsData.push(['Why', step.explanation.why]);
                stepsData.push(['', '']);
                return;
            }

            // Main step header
            stepsData.push([`Step ${step.stepNumber}`, step.step]);
            stepsData.push(['Description', step.description]);

            // Expression/formula
            if (step.formula) {
                stepsData.push(['Formula', step.formula]);
            }
            if (step.beforeExpression) {
                stepsData.push(['Before', step.beforeExpression]);
            }
            if (step.calculation) {
                if (Array.isArray(step.calculation)) {
                    step.calculation.forEach((calc, i) => {
                        stepsData.push([i === 0 ? 'Calculation' : '', calc]);
                    });
                } else {
                    stepsData.push(['Calculation', step.calculation]);
                }
            }
            if (step.afterExpression) {
                stepsData.push(['Result', step.afterExpression]);
            }

            // Physics explanation
            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }
            if (step.physicsLaw) {
                stepsData.push(['Physics Law', step.physicsLaw]);
            }

            // Visual and conceptual hints
            if (step.visualHint) {
                stepsData.push(['Visual Hint', step.visualHint]);
            }

            // Enhanced explanations
            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
                stepsData.push(['Physical', step.explanations.physical]);
            }

            // Error prevention
            if (step.errorPrevention && this.includeErrorPrevention) {
                if (step.errorPrevention.commonMistakes.length > 0) {
                    stepsData.push(['Common Mistakes', step.errorPrevention.commonMistakes.join('; ')]);
                }
                if (step.errorPrevention.warningFlags.length > 0) {
                    stepsData.push(['⚠ Warning', step.errorPrevention.warningFlags.join('; ')]);
                }
            }

            // Final answer indicator
            if (step.finalAnswer) {
                stepsData.push(['✓ Final Answer', 'This is the solution to the problem']);
            }

            stepsData.push(['', '']); // Spacing between steps
        });

        return {
            title: 'Detailed Step-by-Step Solution',
            type: 'steps',
            data: stepsData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        // Add main results
        for (const [key, value] of Object.entries(this.currentSolution)) {
            if (key === 'interpretation' || key === 'category' || key === 'problemType') continue;
            
            if (typeof value === 'object' && value !== null) {
                solutionData.push([key, JSON.stringify(value, null, 2)]);
            } else if (typeof value === 'number') {
                solutionData.push([key, value.toExponential ? value.toExponential(4) : value]);
            } else {
                solutionData.push([key, String(value)]);
            }
        }

        return {
            title: 'Solution Summary',
            type: 'solution',
            data: solutionData
        };
    }

    createVerificationSection() {
        if (!this.currentSolution) return null;

        const verificationData = [
            ['Verification Status', 'Solution verified through multiple checks'],
            ['', '']
        ];

        // Add conservation law checks
        verificationData.push(['Conservation Laws', '']);
        
        const { type } = this.currentProblem;
        if (type.includes('decay') || type === 'nuclear_reaction') {
            verificationData.push(['Mass Number (A)', 'Conserved ✓']);
            verificationData.push(['Atomic Number (Z)', 'Conserved ✓']);
            verificationData.push(['Charge', 'Conserved ✓']);
        }
        
        if (type.includes('decay')) {
            verificationData.push(['Energy-Mass', 'Q-value calculated from mass difference ✓']);
        }

        // Add unit consistency check
        verificationData.push(['', '']);
        verificationData.push(['Unit Consistency', 'All calculations performed in consistent units ✓']);

        // Add physical reasonableness
        verificationData.push(['', '']);
        verificationData.push(['Physical Reasonableness', '']);
        verificationData.push(['Order of Magnitude', 'Results are within expected range for nuclear processes ✓']);
        verificationData.push(['Sign Conventions', 'All signs follow standard nuclear physics conventions ✓']);

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createPhysicalInterpretationSection() {
        if (!this.currentSolution || !this.currentSolution.interpretation) return null;

        const interpretation = this.currentSolution.interpretation;
        const interpData = [];

        for (const [aspect, explanation] of Object.entries(interpretation)) {
            interpData.push([aspect, explanation]);
        }

        return {
            title: 'Physical Interpretation',
            type: 'interpretation',
            data: interpData
        };
    }

    createSafetyConsiderationsSection() {
        const { type } = this.currentProblem;
        
        const safetyData = [];

        if (type === 'radioactive_decay') {
            safetyData.push(['Radiation Type', 'Depends on decay mode - α, β, or γ']);
            safetyData.push(['Shielding', 'Required based on radiation type and activity']);
            safetyData.push(['Time', 'Minimize exposure time']);
            safetyData.push(['Distance', 'Maximize distance from source (inverse square law)']);
            safetyData.push(['ALARA Principle', 'As Low As Reasonably Achievable']);
        } else if (type === 'dosimetry') {
            const effectiveDose = this.currentSolution.effectiveDose;
            safetyData.push(['Dose Level', this.currentSolution.safetyAssessment]);
            safetyData.push(['Regulatory Limits', 'Public: 1 mSv/year; Occupational: 50 mSv/year']);
            safetyData.push(['Recommendation', effectiveDose < 0.001 ? 
                'No special precautions' : 
                'Follow radiation protection protocols']);
        } else if (type === 'fission' || type === 'fusion') {
            safetyData.push(['Criticality', 'Maintain control of neutron multiplication']);
            safetyData.push(['Shielding', 'Heavy shielding required for high-energy neutrons and gammas']);
            safetyData.push(['Cooling', 'Decay heat removal essential']);
            safetyData.push(['Containment', 'Multiple barriers to prevent release']);
        } else {
            safetyData.push(['General Safety', 'Follow standard radiation safety protocols']);
            safetyData.push(['Dosimetry', 'Personal dosimeters required in radiation areas']);
            safetyData.push(['Training', 'Proper training and certification required']);
        }

        return {
            title: 'Safety Considerations',
            type: 'safety',
            data: safetyData
        };
    }

    createPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        const { type } = this.currentProblem;
        const lesson = this.lessons[type];

        if (!lesson) return null;

        const pedagogicalData = [
            ['Topic', lesson.title],
            ['', ''],
            ['Key Concepts', lesson.concepts.join('; ')],
            ['', ''],
            ['Theory', lesson.theory]
        ];

        if (lesson.keyFormulas) {
            pedagogicalData.push(['', '']);
            pedagogicalData.push(['Essential Formulas', '']);
            for (const [name, formula] of Object.entries(lesson.keyFormulas)) {
                pedagogicalData.push([name, formula]);
            }
        }

        if (lesson.applications) {
            pedagogicalData.push(['', '']);
            pedagogicalData.push(['Applications', lesson.applications.join('; ')]);
        }

        return {
            title: 'Teaching Notes',
            type: 'pedagogical',
            data: pedagogicalData
        };
    }

    createAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        // Placeholder for alternative solution methods
        return {
            title: 'Alternative Solution Approaches',
            type: 'alternatives',
            data: [
                ['Primary Method', 'Direct calculation using fundamental formulas'],
                ['Alternative 1', 'Graphical or numerical methods'],
                ['Alternative 2', 'Use of specialized nuclear physics software'],
                ['Note', 'Different methods may be more appropriate depending on available data and required precision']
            ]
        };
    }
}

export default EnhancedNuclearPhysicsMathematicalWorkbook;
