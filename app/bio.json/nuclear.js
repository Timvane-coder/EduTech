Here is the full implementation:
// Nuclear Physics Workbook — Comprehensive Nuclear Physics System
// Modelled on EnhancedMechanicsWorkbook architecture

export class NuclearPhysicsWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "nuclear";
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

        this.nuclearSymbols = this.initializeNuclearSymbols();
        this.setThemeColors();
        this.initializeNuclearTopics();
        this.initializeNuclearLessons();
        this.initializeNuclearExperiments();
        this.initializeMisconceptionDatabase();
        this.initializeMetacognitivePrompts();
        this.initializeContextualScenarios();
        this.initializeAssessmentRubrics();
    }

    setThemeColors() {
        const themes = {
            nuclear: {
                background: '#ffffff',
                gridColor: '#b0b0b0',
                headerBg: '#b71c1c',
                headerText: '#ffffff',
                sectionBg: '#ffcdd2',
                sectionText: '#b71c1c',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#ffebee',
                resultText: '#c62828',
                definitionBg: '#fff3e0',
                definitionText: '#e65100',
                stepBg: '#fce4ec',
                stepText: '#880e4f',
                borderColor: '#ef5350',
                contentBg: '#fdf2f8',
                contentText: '#4a0e0e',
                diagramBg: '#fff8e1',
                structureBg: '#e8f5e9',
                experimentBg: '#fffde7',
                experimentText: '#f57f17',
                radioactivityBg: '#ffebee',
                nuclearStructureBg: '#e3f2fd',
                nuclearReactionsBg: '#f3e5f5',
                fissionFusionBg: '#fff8e1',
                particlePhysicsBg: '#e8f5e9'
            }
        };
        this.colors = themes[this.theme] || themes.nuclear;
    }

    initializeNuclearSymbols() {
        return {
            // Greek letters
            'alpha': 'α',
            'beta': 'β',
            'gamma': 'γ',
            'delta': 'Δ',
            'lambda': 'λ',
            'mu': 'μ',
            'nu': 'ν',
            'pi': 'π',
            'sigma': 'σ',
            'tau': 'τ',
            'phi': 'φ',
            'psi': 'ψ',
            'omega': 'Ω',
            'epsilon': 'ε',
            'rho': 'ρ',

            // Nuclear notation
            'proton': 'p',
            'neutron': 'n',
            'electron': 'e⁻',
            'positron': 'e⁺',
            'neutrino': 'ν',
            'antineutrino': 'ν̄',
            'alphaParticle': '⁴₂He',
            'betaMinus': 'β⁻',
            'betaPlus': 'β⁺',
            'gammaRay': 'γ',

            // Math symbols
            'arrow': '→',
            'approximately': '≈',
            'proportional': '∝',
            'infinity': '∞',
            'squared': '²',
            'cubed': '³',
            'halflife': 't½',
            'lambda_decay': 'λ',
            'plusminus': '±',

            // Units
            'electronvolt': 'eV',
            'MeV': 'MeV',
            'becquerel': 'Bq',
            'curie': 'Ci',
            'gray': 'Gy',
            'sievert': 'Sv',
            'amu': 'u',
            'joule': 'J',
            'second': 's',
            'kilogram': 'kg',
            'meter': 'm'
        };
    }

    initializeNuclearTopics() {
        this.nuclearTopics = {
            nuclear_structure: {
                patterns: [
                    /nuclear.*structure|atomic.*nucleus/i,
                    /proton|neutron|nucleon/i,
                    /isotope|nuclide|atomic.*number/i,
                    /mass.*number|nucleon.*number/i,
                    /nuclear.*radius|nuclear.*density/i
                ],
                handler: this.handleNuclearStructure.bind(this),
                name: 'Nuclear Structure',
                category: 'nuclear',
                description: 'Composition of the atomic nucleus, isotopes, and nuclear properties',
                difficulty: 'intermediate',
                prerequisites: ['atomic structure', 'algebra', 'scientific notation']
            },

            radioactivity: {
                patterns: [
                    /radioactiv|radioactive.*decay/i,
                    /alpha.*decay|beta.*decay|gamma/i,
                    /half.?life|decay.*constant/i,
                    /activity|becquerel|curie/i,
                    /ionising.*radiation|radiation.*type/i
                ],
                handler: this.handleRadioactivity.bind(this),
                name: 'Radioactivity and Radioactive Decay',
                category: 'nuclear',
                description: 'Types of radioactive decay, decay laws, and half-life',
                difficulty: 'intermediate',
                prerequisites: ['nuclear structure', 'exponential functions', 'algebra']
            },

            nuclear_reactions: {
                patterns: [
                    /nuclear.*reaction|nuclear.*equation/i,
                    /conservation.*nucleon|conservation.*charge/i,
                    /binding.*energy|mass.*defect/i,
                    /Q.*value|energy.*release/i,
                    /transmutation/i
                ],
                handler: this.handleNuclearReactions.bind(this),
                name: 'Nuclear Reactions and Binding Energy',
                category: 'nuclear',
                description: 'Nuclear reaction equations, mass-energy equivalence, and binding energy',
                difficulty: 'advanced',
                prerequisites: ['nuclear structure', 'radioactivity', 'special relativity basics']
            },

            fission_fusion: {
                patterns: [
                    /fission|fusion/i,
                    /chain.*reaction|critical.*mass/i,
                    /nuclear.*reactor|nuclear.*power/i,
                    /stellar.*nucleosynthesis|thermonuclear/i,
                    /hydrogen.*bomb|atomic.*bomb/i
                ],
                handler: this.handleFissionFusion.bind(this),
                name: 'Fission, Fusion and Nuclear Energy',
                category: 'nuclear',
                description: 'Nuclear fission, fusion, reactors, and energy release',
                difficulty: 'advanced',
                prerequisites: ['nuclear reactions', 'binding energy', 'chain reactions']
            },

            particle_physics: {
                patterns: [
                    /particle.*physics|fundamental.*particle/i,
                    /quark|lepton|hadron|meson|baryon/i,
                    /standard.*model|higgs/i,
                    /antimatter|annihilation|pair.*production/i,
                    /feynman|exchange.*particle|boson/i
                ],
                handler: this.handleParticlePhysics.bind(this),
                name: 'Particle Physics and the Standard Model',
                category: 'nuclear',
                description: 'Fundamental particles, quarks, leptons, and the Standard Model',
                difficulty: 'advanced',
                prerequisites: ['nuclear structure', 'radioactivity', 'special relativity']
            }
        };
    }

    initializeNuclearLessons() {
        this.lessons = {

            nuclear_structure: {
                title: "Nuclear Structure: The Atomic Nucleus",
                concepts: [
                    "The nucleus contains protons and neutrons (nucleons) held by the strong nuclear force",
                    "Atomic number Z = number of protons; mass number A = total nucleons; N = A − Z neutrons",
                    "Isotopes have the same Z but different A (different neutron numbers)",
                    "Nuclear radius follows r = r₀A^(1/3) where r₀ ≈ 1.2 × 10⁻¹⁵ m",
                    "Nuclear density is approximately constant for all nuclei ≈ 2.3 × 10¹⁷ kg/m³"
                ],
                theory: "The nucleus is a tiny, dense region at the centre of every atom. Despite containing positively charged protons, the nucleus is held together by the strong nuclear force — a short-range force that dominates over electrostatic repulsion at distances below ~3 fm. Understanding nuclear structure underpins all of nuclear physics, from radioactive decay to nuclear power.",
                keyDefinitions: {
                    "Nucleon": "A particle found in the nucleus: either a proton or neutron",
                    "Atomic Number (Z)": "The number of protons in the nucleus; defines the element",
                    "Mass Number (A)": "Total number of nucleons (protons + neutrons) in the nucleus",
                    "Neutron Number (N)": "Number of neutrons: N = A − Z",
                    "Nuclide": "A specific nucleus characterised by given Z and A; written as ᴬ_Z X",
                    "Isotope": "Nuclei with same Z (same element) but different A (different neutron numbers); same chemistry, different nuclear properties",
                    "Isobar": "Nuclei with same A but different Z",
                    "Isotone": "Nuclei with same N but different Z",
                    "Strong Nuclear Force": "Short-range force (~3 fm) holding nucleons together; overcomes electrostatic repulsion between protons; acts equally on protons and neutrons",
                    "Nuclear Radius": "r = r₀A^(1/3); r₀ ≈ 1.2 × 10⁻¹⁵ m (1.2 fm); nucleus is ~10⁵ times smaller than the atom",
                    "Nuclear Density": "ρ ≈ 2.3 × 10¹⁷ kg/m³; approximately constant for all nuclei; independent of A",
                    "Atomic Mass Unit (u)": "1 u = 1.66054 × 10⁻²⁷ kg = 931.5 MeV/c²; defined as 1/12 mass of ¹²C"
                },
                nuclearNotation: {
                    format: "ᴬ_Z X or X-A (e.g., ²³⁸₉₂U or U-238)",
                    components: {
                        A: "Mass number (top left) — total nucleons",
                        Z: "Atomic number (bottom left) — protons",
                        X: "Chemical symbol of the element"
                    },
                    examples: [
                        "¹H: Z=1, A=1, N=0 — ordinary hydrogen (protium)",
                        "²H: Z=1, A=2, N=1 — deuterium (heavy hydrogen)",
                        "³H: Z=1, A=3, N=2 — tritium (radioactive)",
                        "⁴He: Z=2, A=4, N=2 — helium-4 (alpha particle)",
                        "¹²C: Z=6, A=12, N=6 — carbon-12 (defines the atomic mass unit)",
                        "²³⁵U: Z=92, A=235, N=143 — uranium-235 (fissile)"
                    ]
                },
                nuclearForces: {
                    strongNuclearForce: {
                        range: "~3 fm (3 × 10⁻¹⁵ m)",
                        nature: "Attractive at ~1–3 fm; repulsive at < 0.5 fm (prevents nuclear collapse)",
                        chargeIndependence: "Acts equally between p-p, p-n, and n-n pairs",
                        saturation: "Each nucleon only interacts with its nearest neighbours",
                        carrier: "Mediated by pion exchange (π mesons) or gluons at fundamental level"
                    },
                    electrostaticForce: {
                        nature: "Repulsive between protons; long-range",
                        comparison: "Much weaker than strong force at short range; but acts on all protons",
                        implication: "Very large nuclei become unstable as electrostatic repulsion grows faster than strong force binding"
                    },
                    stabilityTrend: {
                        lightNuclei: "Stable when N ≈ Z (roughly equal protons and neutrons)",
                        heavyNuclei: "Stable when N > Z (extra neutrons provide binding without adding electrostatic repulsion)",
                        bandOfStability: "Plot of N vs Z for stable nuclides; unstable nuclides decay toward this band"
                    }
                },
                applications: [
                    "Nuclear medicine: isotopes for imaging (PET, SPECT) and therapy",
                    "Carbon dating: uses ¹⁴C isotope properties",
                    "Nuclear power: isotope selection for fuel",
                    "Materials science: neutron activation analysis",
                    "Astrophysics: stellar nucleosynthesis"
                ]
            },

            radioactivity: {
                title: "Radioactivity: Spontaneous Nuclear Decay",
                concepts: [
                    "Radioactive decay is spontaneous and random at the level of individual nuclei",
                    "Three main types: alpha (α), beta-minus (β⁻), beta-plus (β⁺), and gamma (γ)",
                    "Activity A = λN; decay law: N = N₀e^(−λt); A = A₀e^(−λt)",
                    "Half-life t½ = ln2/λ = 0.693/λ",
                    "Radiation ionises matter; penetrating power and ionisation ability differ by type"
                ],
                theory: "Radioactive decay occurs when an unstable nucleus spontaneously emits radiation to become more stable. Despite being random for individual nuclei, large numbers obey precise statistical laws. The discovery of radioactivity by Becquerel (1896) and its characterisation by the Curies and Rutherford transformed our understanding of matter and led to nuclear physics, medicine, and energy.",
                keyDefinitions: {
                    "Radioactivity": "Spontaneous emission of radiation from an unstable nucleus",
                    "Activity (A)": "Number of nuclear decays per second; unit: becquerel (Bq); 1 Bq = 1 decay/s",
                    "Decay Constant (λ)": "Probability of a given nucleus decaying per unit time; unit: s⁻¹",
                    "Half-Life (t½)": "Time for half the nuclei (or activity) to decay; t½ = ln2/λ ≈ 0.693/λ",
                    "Alpha Decay": "Emission of ⁴₂He nucleus; reduces Z by 2, A by 4",
                    "Beta-Minus Decay": "Neutron → proton + β⁻ + antineutrino; Z increases by 1, A unchanged",
                    "Beta-Plus Decay": "Proton → neutron + β⁺ + neutrino; Z decreases by 1, A unchanged",
                    "Electron Capture": "Nucleus captures inner electron: p + e⁻ → n + ν; Z decreases by 1",
                    "Gamma Decay": "Emission of high-energy photon; nucleus loses energy but Z and A unchanged",
                    "Background Radiation": "Natural radiation from cosmic rays, rocks, food, radon gas; ~2.5 mSv/year average (UK)"
                },
                decayTypes: {
                    alpha: {
                        symbol: "α or ⁴₂He",
                        composition: "2 protons + 2 neutrons (helium-4 nucleus)",
                        changes: "Z decreases by 2; A decreases by 4",
                        generalEquation: "ᴬ_Z X → ᴬ⁻⁴_{Z-2}Y + ⁴₂He",
                        example: "²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He",
                        energy: "Typically 4–9 MeV; discrete energy spectrum (characteristic of parent)",
                        penetration: "Stopped by ~5 cm of air or thin paper",
                        ionisation: "Highly ionising (~10,000 ion pairs per mm in air)",
                        whyOccurs: "Heavy nuclei (Z > 82) have too many protons; losing an α particle reduces repulsion"
                    },
                    betaMinus: {
                        symbol: "β⁻ or ⁰₋₁e",
                        composition: "Electron emitted from nucleus",
                        changes: "Z increases by 1; A unchanged; neutron → proton",
                        generalEquation: "ᴬ_Z X → ᴬ_{Z+1}Y + ⁰₋₁e + ν̄_e",
                        nuclearProcess: "n → p + e⁻ + ν̄_e (antineutrino emitted)",
                        example: "¹⁴₆C → ¹⁴₇N + ⁰₋₁e + ν̄_e",
                        energy: "Continuous spectrum 0 to E_max (shared with antineutrino)",
                        penetration: "Stopped by ~3 mm of aluminium",
                        ionisation: "Moderately ionising (~100 ion pairs per mm)",
                        whyOccurs: "Neutron-rich nuclei; too many neutrons relative to protons"
                    },
                    betaPlus: {
                        symbol: "β⁺ or ⁰₊₁e",
                        composition: "Positron emitted from nucleus",
                        changes: "Z decreases by 1; A unchanged; proton → neutron",
                        generalEquation: "ᴬ_Z X → ᴬ_{Z-1}Y + ⁰₊₁e + ν_e",
                        nuclearProcess: "p → n + e⁺ + ν_e (neutrino emitted)",
                        example: "²²₁₁Na → ²²₁₀Ne + ⁰₊₁e + ν_e",
                        energy: "Continuous spectrum (shared with neutrino)",
                        penetration: "Short range; annihilates with electron producing two 0.511 MeV gamma photons",
                        whyOccurs: "Proton-rich nuclei; too many protons relative to neutrons"
                    },
                    gamma: {
                        symbol: "γ",
                        composition: "High-energy electromagnetic photon",
                        changes: "Z and A unchanged; nucleus drops to lower energy state",
                        generalEquation: "ᴬ_Z X* → ᴬ_Z X + γ",
                        example: "⁶⁰₂₇Co* → ⁶⁰₂₇Co + γ",
                        energy: "Discrete energies characteristic of nuclear energy levels",
                        penetration: "Highly penetrating; reduced by several cm of lead or metres of concrete",
                        ionisation: "Weakly ionising (~1 ion pair per mm)",
                        whyOccurs: "Usually follows alpha or beta decay; nucleus left in excited state"
                    }
                },
                decayLaw: {
                    equation: "N(t) = N₀ · e^(−λt)",
                    activityEquation: "A(t) = A₀ · e^(−λt)",
                    relationship: "A = λN",
                    halfLifeDerivation: {
                        step1: "At t = t½: N = N₀/2",
                        step2: "N₀/2 = N₀ · e^(−λt½)",
                        step3: "½ = e^(−λt½)",
                        step4: "ln(½) = −λt½",
                        step5: "t½ = ln(2)/λ = 0.693/λ"
                    },
                    alternativeForm: "N = N₀ · (½)^(t/t½)  [useful for integer multiples of half-life]",
                    graphShape: "N vs t: exponential decay; ln(N) vs t: straight line with gradient −λ",
                    probabilisticNature: "λ is probability of decay per unit time per nucleus; individual decays are random and unpredictable"
                },
                radiationProperties: {
                    comparison: [
                        {
                            type: "Alpha (α)",
                            charge: "+2e",
                            mass: "4 u",
                            speed: "~0.05c",
                            range_air: "~5 cm",
                            stopped_by: "Paper / skin",
                            ionisation: "Very high",
                            biological_risk: "Very high if inhaled/ingested"
                        },
                        {
                            type: "Beta-minus (β⁻)",
                            charge: "−e",
                            mass: "1/1836 u",
                            speed: "up to ~0.9c",
                            range_air: "~1 m",
                            stopped_by: "3 mm aluminium",
                            ionisation: "Medium",
                            biological_risk: "Moderate"
                        },
                        {
                            type: "Gamma (γ)",
                            charge: "0",
                            mass: "0",
                            speed: "c",
                            range_air: "Very large",
                            stopped_by: "Several cm lead",
                            ionisation: "Very low",
                            biological_risk: "Penetrating external hazard"
                        }
                    ]
                },
                dosimetry: {
                    absorbed_dose: { name: "Absorbed Dose", symbol: "D", unit: "Gray (Gy)", definition: "Energy deposited per unit mass: D = E/m; 1 Gy = 1 J/kg" },
                    equivalent_dose: { name: "Equivalent Dose", symbol: "H", unit: "Sievert (Sv)", definition: "H = D × Q_R; accounts for biological effectiveness of different radiation types" },
                    effective_dose: { name: "Effective Dose", symbol: "E", unit: "Sievert (Sv)", definition: "Weighted sum over organs; accounts for sensitivity of different tissues" },
                    quality_factors: { alpha: 20, beta: 1, gamma: 1, neutron: "3–20 depending on energy" }
                },
                applications: [
                    "Medical diagnosis: gamma camera imaging, PET scanning",
                    "Cancer radiotherapy: targeted alpha and beta emitters",
                    "Radiocarbon dating (¹⁴C) for archaeological samples",
                    "Smoke detectors (²⁴¹Am alpha source)",
                    "Sterilisation of medical equipment",
                    "Industrial thickness gauging"
                ]
            },

            nuclear_reactions: {
                title: "Nuclear Reactions and Binding Energy",
                concepts: [
                    "Nuclear reactions conserve nucleon number (A), charge (Z), energy, and momentum",
                    "Mass defect Δm = mass of separated nucleons − mass of nucleus",
                    "Binding energy: E = Δm · c²; energy needed to completely separate all nucleons",
                    "Binding energy per nucleon peaks at iron-56; this determines whether fission or fusion releases energy",
                    "Q-value: energy released (+) or absorbed (−) in a nuclear reaction"
                ],
                theory: "Every nuclear reaction must conserve nucleon number, charge, energy, and momentum. The key insight of Einstein's E = mc² is that mass and energy are equivalent: when nucleons bind together, the resulting nucleus is less massive than the sum of its parts. This 'missing mass' (mass defect) is the binding energy — the source of nuclear energy in both fission and fusion.",
                keyDefinitions: {
                    "Mass Defect (Δm)": "Difference between mass of constituent nucleons and actual nuclear mass; Δm = Z·mₚ + N·mₙ − M_nucleus",
                    "Binding Energy (E_B)": "Energy equivalent of mass defect; E_B = Δm·c²; energy required to completely disassemble nucleus into free nucleons",
                    "Binding Energy per Nucleon (E_B/A)": "Average binding energy per nucleon; measure of nuclear stability; peaks at ⁵⁶Fe ≈ 8.8 MeV/nucleon",
                    "Q-value": "Energy released in a nuclear reaction; Q = (initial mass − final mass)·c²; Q > 0: exothermic; Q < 0: endothermic",
                    "Nuclear Transmutation": "Change of one element into another via nuclear reaction",
                    "Conservation Laws": "In all nuclear reactions: ΣA = constant; ΣZ = constant; Σ(mass-energy) = constant; Σ(momentum) = constant"
                },
                massEnergyEquivalence: {
                    equation: "E = mc²",
                    constant: "c = 3.00 × 10⁸ m/s",
                    conversions: {
                        joulesFromKg: "E(J) = m(kg) × (3×10⁸)² = m × 9×10¹⁶ J/kg",
                        MeVFromU: "1 u corresponds to 931.5 MeV (since 1 u = 1.66054×10⁻²⁷ kg)",
                        practicalUnit: "Nuclear physicists typically use MeV/c² for mass and MeV for energy"
                    },
                    particleMasses: {
                        proton: "mₚ = 1.007276 u = 938.3 MeV/c²",
                        neutron: "mₙ = 1.008665 u = 939.6 MeV/c²",
                        electron: "mₑ = 0.000549 u = 0.511 MeV/c²",
                        alphaParticle: "mₐ = 4.001506 u"
                    }
                },
                bindingEnergy: {
                    calculation: {
                        step1: "Find mass defect: Δm = Z·mₚ + N·mₙ − M_nucleus (all in u)",
                        step2: "Convert to energy: E_B = Δm × 931.5 MeV/u",
                        step3: "Binding energy per nucleon: E_B/A"
                    },
                    example: {
                        nucleus: "Helium-4 (⁴He)",
                        composition: "Z = 2 protons, N = 2 neutrons",
                        massProtons: "2 × 1.007276 = 2.014552 u",
                        massNeutrons: "2 × 1.008665 = 2.017330 u",
                        totalSeparated: "4.031882 u",
                        actualMass: "4.002602 u",
                        massDefect: "Δm = 4.031882 − 4.002602 = 0.029280 u",
                        bindingEnergy: "E_B = 0.029280 × 931.5 = 27.28 MeV",
                        bindingPerNucleon: "E_B/A = 27.28 / 4 = 6.82 MeV/nucleon"
                    },
                    bindingEnergyGraph: {
                        description: "Graph of binding energy per nucleon (MeV) vs mass number A",
                        features: [
                            "Peak at ⁵⁶Fe: ~8.8 MeV/nucleon — most stable nucleus",
                            "Low for very light nuclei (H, He): fewer binding neighbours",
                            "Gradual decrease for heavy nuclei (A > 56): electrostatic repulsion grows",
                            "Fusion of light nuclei increases E_B/A → releases energy",
                            "Fission of heavy nuclei increases E_B/A → releases energy"
                        ],
                        keyValues: {
                            H1: "0 MeV/nucleon",
                            H2: "1.11 MeV/nucleon",
                            He4: "6.82 MeV/nucleon",
                            Fe56: "8.79 MeV/nucleon (maximum)",
                            U235: "7.59 MeV/nucleon"
                        }
                    }
                },
                nuclearReactionTypes: {
                    generalForm: "a + A → B + b + Q",
                    conservationRules: [
                        "Nucleon number (A): ΣA_reactants = ΣA_products",
                        "Proton number (Z): ΣZ_reactants = ΣZ_products",
                        "Mass-energy: total relativistic energy conserved",
                        "Linear momentum: conserved",
                        "Angular momentum (spin): conserved"
                    ],
                    qValueCalculation: {
                        formula: "Q = (Σm_reactants − Σm_products) × c² = (Σm_reactants − Σm_products) × 931.5 MeV/u",
                        positive: "Q > 0: reaction releases energy (exothermic); kinetic energy of products > kinetic energy of reactants",
                        negative: "Q < 0: reaction requires energy input (endothermic); threshold energy required"
                    },
                    rutherfordTransmutation: {
                        reaction: "⁴₂He + ¹⁴₇N → ¹⁷₈O + ¹₁H",
                        year: "1919",
                        significance: "First artificially induced nuclear reaction; Rutherford split the nitrogen nucleus with alpha particles"
                    }
                },
                workedExamples: [
                    {
                        title: "Calculate binding energy of ¹²C",
                        given: "Z=6, N=6; M(¹²C) = 12.000000 u; mₚ = 1.007276 u; mₙ = 1.008665 u",
                        solution: {
                            massDefect: "Δm = 6(1.007276) + 6(1.008665) − 12.000000 = 6.043656 + 6.051990 − 12 = 0.095646 u",
                            bindingEnergy: "E_B = 0.095646 × 931.5 = 89.09 MeV",
                            perNucleon: "E_B/A = 89.09/12 = 7.42 MeV/nucleon"
                        }
                    },
                    {
                        title: "Balance nuclear equation",
                        problem: "Complete: ²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ___Kr + 3¹₀n",
                        solution: {
                            nucleonBalance: "235 + 1 = 141 + A + 3; A = 236 − 144 = 92",
                            chargeBalance: "92 + 0 = 56 + Z + 0; Z = 36",
                            answer: "⁹²₃₆Kr — Krypton-92"
                        }
                    }
                ]
            },

            fission_fusion: {
                title: "Nuclear Fission, Fusion and Nuclear Energy",
                concepts: [
                    "Fission: heavy nucleus splits into lighter fragments + neutrons + energy",
                    "Fusion: light nuclei combine to form heavier nucleus + energy",
                    "Both processes move products toward the peak of the binding energy curve (⁵⁶Fe)",
                    "Chain reactions in fission: controlled in reactors, uncontrolled in weapons",
                    "Fusion requires extreme temperature (~10⁸ K) to overcome Coulomb barrier"
                ],
                theory: "Fission and fusion are the two routes to releasing nuclear energy. Both work by moving nuclei toward the most stable configuration — the peak of the binding energy per nucleon curve at iron-56. Fission releases energy by splitting heavy nuclei; fusion releases energy by combining light nuclei. Fusion is the energy source of stars, while fission powers nuclear reactors and was the basis of early nuclear weapons.",
                keyDefinitions: {
                    "Nuclear Fission": "Splitting of a heavy nucleus (typically U-235 or Pu-239) into two lighter daughter nuclei plus 2–3 neutrons and ~200 MeV of energy",
                    "Nuclear Fusion": "Combination of two light nuclei (typically deuterium and tritium) to form a heavier nucleus plus energy; ~17.6 MeV per D-T fusion event",
                    "Chain Reaction": "Self-sustaining sequence of fissions where neutrons from each fission trigger further fissions",
                    "Critical Mass": "Minimum mass of fissile material needed to sustain a chain reaction",
                    "Multiplication Factor (k)": "Average number of neutrons from one fission that cause further fissions; k = 1: critical; k > 1: supercritical; k < 1: subcritical",
                    "Moderator": "Material (water, graphite) that slows neutrons to thermal energies to increase fission probability",
                    "Control Rods": "Neutron-absorbing rods (boron, hafnium) inserted into reactor core to control reaction rate",
                    "Coulomb Barrier": "Electrostatic repulsion that must be overcome for two nuclei to fuse; requires very high kinetic energy (temperature)",
                    "Plasma": "Fourth state of matter: hot ionised gas; required for fusion reactions",
                    "Lawson Criterion": "Minimum condition for net fusion energy: nτ > 10²⁰ s/m³ (density × confinement time)"
                },
                fission: {
                    typicalReaction: "²³⁵₉₂U + ¹₀n → ²³⁶₉₂U* → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3¹₀n + ~200 MeV",
                    energyRelease: {
                        total: "~200 MeV per fission event",
                        comparison: "1 kg of U-235 releases ~8.2 × 10¹³ J ≈ energy from burning 20,000 tonnes of coal",
                        distribution: {
                            kineticEnergyFragments: "~165 MeV (83%)",
                            kineticEnergyNeutrons: "~5 MeV",
                            gammaRays: "~7 MeV",
                            betaDecayProducts: "~20 MeV (from radioactive daughters)"
                        }
                    },
                    chainReaction: {
                        mechanism: "Each U-235 fission releases 2–3 neutrons; each can trigger another fission",
                        subcritical: "k < 1: reaction dies out (neutrons lost faster than produced)",
                        critical: "k = 1: steady, controlled reaction (nuclear reactor)",
                        supercritical: "k > 1: exponentially growing reaction (nuclear weapon)",
                        controlMethods: ["Control rods absorb excess neutrons", "Moderator concentration adjustment", "Fuel rod geometry"]
                    },
                    nuclearReactor: {
                        components: {
                            fuel: "Enriched uranium (3–5% U-235 in UO₂ fuel rods)",
                            moderator: "Slows fast neutrons to thermal energies; water (PWR), graphite (RBMK), heavy water (CANDU)",
                            coolant: "Transfers heat from core; water, CO₂, helium, sodium",
                            controlRods: "Boron or hafnium rods; absorb neutrons to control k",
                            pressureVessel: "Contains core; prevents release of radioactive material",
                            containment: "Outer reinforced concrete shield"
                        },
                        thermalPWR: {
                            name: "Pressurised Water Reactor (PWR)",
                            description: "Most common type globally; water under pressure acts as both moderator and coolant",
                            primaryLoop: "Water under ~155 bar; stays liquid above 100°C; carries heat from core",
                            secondaryLoop: "Water flashes to steam; drives turbine; condensed and recycled",
                            efficiency: "~33% thermal efficiency"
                        },
                        nuclearWaste: {
                            highLevel: "Spent fuel rods; highly radioactive; long half-lives; requires secure storage for thousands of years",
                            lowLevel: "Contaminated materials; shorter half-lives; shallower storage",
                            challenge: "Safe disposal of long-lived radioactive waste is a major unresolved challenge"
                        }
                    }
                },
                fusion: {
                    typicalReaction: "²₁H + ³₁H → ⁴₂He + ¹₀n + 17.6 MeV",
                    DT_components: "Deuterium (D = ²H) + Tritium (T = ³H) → Helium-4 + neutron",
                    energyRelease: {
                        perReaction: "17.6 MeV per D-T fusion event",
                        comparison: "1 kg of D-T fuel could release ~3 × 10¹⁴ J; far more per kg than fission"
                    },
                    conditionsRequired: {
                        temperature: "~10⁸ K (10× hotter than Sun's core; needed to overcome Coulomb barrier)",
                        density: "High plasma density to increase collision frequency",
                        confinement: "Long enough to allow sufficient reactions (Lawson criterion)"
                    },
                    confinementMethods: {
                        magnetic: {
                            name: "Tokamak (magnetic confinement)",
                            principle: "Magnetic fields confine and shape plasma in toroidal (donut) chamber",
                            example: "ITER (France): international experimental reactor; JET (UK): current record holder"
                        },
                        inertial: {
                            name: "Inertial confinement fusion (ICF)",
                            principle: "Powerful lasers compress and heat D-T pellet to fusion conditions",
                            example: "National Ignition Facility (NIF), USA; achieved ignition in 2022"
                        }
                    },
                    stellarFusion: {
                        protonProton: "In stars: 4p → ⁴He + 2e⁺ + 2ν + energy (PP chain)",
                        CNOcycle: "In heavier stars: carbon acts as catalyst; net result same as PP chain",
                        energySource: "Sun converts ~4.3 × 10⁹ kg of mass to energy per second via fusion"
                    },
                    advantages: [
                        "Fuel (deuterium) available from seawater; effectively unlimited",
                        "No long-lived radioactive waste (short-lived tritium, activated structural materials)",
                        "No risk of runaway chain reaction",
                        "No CO₂ emissions"
                    ],
                    challenges: [
                        "Achieving and sustaining plasma conditions is extremely difficult",
                        "Current experimental reactors consume more energy than they produce",
                        "Materials must withstand intense neutron bombardment",
                        "Tritium is rare and must be bred from lithium"
                    ]
                },
                comparison: {
                    fission_vs_fusion: [
                        { aspect: "Fuel", fission: "Uranium-235, Plutonium-239 (scarce)", fusion: "Deuterium (from seawater), Tritium (from lithium)" },
                        { aspect: "Energy per kg fuel", fission: "~8 × 10¹³ J/kg (U-235)", fusion: "~3 × 10¹⁴ J/kg (D-T)" },
                        { aspect: "Radioactive waste", fission: "Long-lived; serious disposal problem", fusion: "Short-lived; much less problematic" },
                        { aspect: "Safety", fission: "Risk of meltdown; chain reaction can accelerate", fusion: "Inherently safe; plasma quenches if disrupted" },
                        { aspect: "Technology readiness", fission: "Commercial power stations operational since 1950s", fusion: "Still experimental; commercial fusion aim ~2040–2050s" }
                    ]
                }
            },

            particle_physics: {
                title: "Particle Physics and the Standard Model",
                concepts: [
                    "Matter is made of quarks (form hadrons) and leptons (fundamental fermions)",
                    "Forces are mediated by exchange particles (gauge bosons): photon, W±, Z⁰, gluon",
                    "The Standard Model classifies all known fundamental particles and three of four forces",
                    "Antimatter: every particle has an antiparticle with same mass, opposite quantum numbers",
                    "Pair production and annihilation demonstrate mass-energy equivalence"
                ],
                theory: "Particle physics seeks the ultimate building blocks of matter and the forces between them. The Standard Model — developed through the 1960s–1970s — classifies all known fundamental particles and describes three fundamental forces (electromagnetic, weak, strong) with extraordinary precision. It predicted the existence of the W and Z bosons, the top quark, and the Higgs boson before their experimental discovery.",
                keyDefinitions: {
                    "Fermion": "Particle with half-integer spin (½, 3/2, ...); obeys Pauli exclusion principle; quarks and leptons",
                    "Boson": "Particle with integer spin (0, 1, 2, ...); does not obey Pauli principle; force-carrying particles",
                    "Quark": "Fundamental constituent of hadrons; six flavours: up, down, charm, strange, top, bottom; fractional charge",
                    "Lepton": "Fundamental fermion not subject to strong force; electron, muon, tau and their neutrinos",
                    "Hadron": "Composite particle made of quarks; held together by strong force; subdivided into baryons and mesons",
                    "Baryon": "Hadron made of 3 quarks; proton (uud), neutron (udd), and heavier baryons",
                    "Meson": "Hadron made of quark-antiquark pair; pion (π), kaon (K), etc.",
                    "Antiparticle": "Partner to each particle with same mass, opposite charge, opposite quantum numbers; notation: p̄, ē⁺, etc.",
                    "Annihilation": "Particle meets antiparticle → two gamma photons; e⁺ + e⁻ → 2γ (0.511 MeV each)",
                    "Pair Production": "Gamma photon produces particle-antiparticle pair; γ → e⁺ + e⁻ (minimum energy 1.022 MeV)",
                    "Exchange Particle": "Boson that mediates a force by being exchanged between interacting particles (virtual particle)",
                    "Standard Model": "Theory unifying electromagnetic, weak, and strong forces; classifies all known fundamental particles"
                },
                fundamentalParticles: {
                    quarks: {
                        description: "Six flavours in three generations; always confined in hadrons; never observed free",
                        generations: [
                            { gen: 1, up: { symbol: "u", charge: "+2/3 e", mass: "~2.2 MeV/c²" }, down: { symbol: "d", charge: "−1/3 e", mass: "~4.7 MeV/c²" } },
                            { gen: 2, charm: { symbol: "c", charge: "+2/3 e", mass: "~1.28 GeV/c²" }, strange: { symbol: "s", charge: "−1/3 e", mass: "~96 MeV/c²" } },
                            { gen: 3, top: { symbol: "t", charge: "+2/3 e", mass: "~173 GeV/c²" }, bottom: { symbol: "b", charge: "−1/3 e", mass: "~4.18 GeV/c²" } }
                        ],
                        color_charge: "Quarks carry 'colour charge' (red, green, blue); strong force acts between colour charges"
                    },
                    leptons: {
                        description: "Six leptons in three generations; do not interact via strong force",
                        particles: [
                            { name: "Electron", symbol: "e⁻", charge: "−e", mass: "0.511 MeV/c²", neutrino: "νₑ" },
                            { name: "Muon", symbol: "μ⁻", charge: "−e", mass: "105.7 MeV/c²", neutrino: "νᵤ" },
                            { name: "Tau", symbol: "τ⁻", charge: "−e", mass: "1777 MeV/c²", neutrino: "ντ" }
                        ],
                        neutrinos: "Electrically neutral; very small mass; interact only via weak force and gravity; extremely penetrating"
                    },
                    bosons: {
                        photon: { symbol: "γ", force: "Electromagnetic", mass: 0, charge: 0, range: "Infinite" },
                        wBoson: { symbol: "W±", force: "Weak (charged current)", mass: "80.4 GeV/c²", charge: "±e", range: "~10⁻¹⁸ m" },
                        zBoson: { symbol: "Z⁰", force: "Weak (neutral current)", mass: "91.2 GeV/c²", charge: 0, range: "~10⁻¹⁸ m" },
                        gluon: { symbol: "g", force: "Strong", mass: 0, charge: "colour charge", range: "~10⁻¹⁵ m" },
                        higgsBoson: { symbol: "H⁰", role: "Gives mass to W, Z bosons and fermions via Higgs mechanism", mass: "125 GeV/c²", discovery: "2012 at CERN LHC" }
                    }
                },
                hadronComposition: {
                    proton: { quarks: "uud", charge: "+e", mass: "938.3 MeV/c²" },
                    neutron: { quarks: "udd", charge: "0", mass: "939.6 MeV/c²" },
                    piPlus: { quarks: "ud̄", charge: "+e", mass: "139.6 MeV/c²" },
                    piMinus: { quarks: "ūd", charge: "−e", mass: "139.6 MeV/c²" },
                    piZero: { quarks: "uū or dd̄", charge: "0", mass: "135.0 MeV/c²" }
                },
                conservationLaws: {
                    always: ["Energy", "Momentum", "Angular momentum", "Electric charge", "Lepton number (per family)", "Baryon number"],
                    strongAndEM: ["Strangeness", "Charm", "Parity"],
                    violated: ["Strangeness (in weak decays)", "CP symmetry (rare)", "Lepton number mixing (neutrino oscillations)"]
                },
                betaDecayInDepth: {
                    betaMinus: {
                        quarkLevel: "d → u + W⁻ → u + e⁻ + ν̄ₑ",
                        explanation: "A down quark in the neutron emits a W⁻ boson, converting to an up quark (neutron becomes proton). The W⁻ decays to an electron and an electron antineutrino."
                    },
                    betaPlus: {
                        quarkLevel: "u → d + W⁺ → d + e⁺ + νₑ",
                        explanation: "An up quark emits a W⁺ boson, converting to a down quark (proton becomes neutron). The W⁺ decays to a positron and an electron neutrino."
                    }
                },
                antimatter: {
                    definition: "For every particle there exists an antiparticle with same mass but opposite charge and quantum numbers",
                    notation: "Antiparticle of X written as X̄ (e.g., p̄ = antiproton, n̄ = antineutron)",
                    pairProduction: {
                        process: "γ → e⁺ + e⁻",
                        minimumEnergy: "2mₑc² = 2 × 0.511 = 1.022 MeV",
                        requirement: "Must occur near a nucleus to conserve momentum",
                        formula: "E_photon ≥ 2m₀c²"
                    },
                    annihilation: {
                        process: "e⁺ + e⁻ → 2γ",
                        energyPerPhoton: "mₑc² = 0.511 MeV per photon",
                        totalEnergy: "2 × 0.511 = 1.022 MeV conserved",
                        application: "PET scanning: positrons annihilate with electrons; two 511 keV gamma rays detected in coincidence"
                    },
                    cosmicAsymmetry: "Universe appears to consist almost entirely of matter; reason for matter-antimatter asymmetry is a major unsolved problem"
                },
                feynmanDiagrams: {
                    purpose: "Visual representation of particle interactions; each line and vertex corresponds to mathematical term in quantum field theory",
                    conventions: {
                        fermions: "Solid lines with arrows (arrow forward: particle; backward: antiparticle)",
                        bosons: "Wavy lines (photon, W, Z) or curly lines (gluon)",
                        vertices: "Each vertex represents an interaction; conserves all quantum numbers"
                    },
                    examples: [
                        "Electron-electron scattering: two electrons exchange a virtual photon",
                        "Beta-minus decay: d quark emits W⁻; W⁻ → e⁻ + ν̄ₑ",
                        "Electron-positron annihilation: e⁺ + e⁻ → γ → e⁺ + e⁻"
                    ]
                },
                applications: [
                    "Particle accelerators: LHC at CERN produces and studies rare particles",
                    "Medical PET scanners: use positron annihilation",
                    "Neutrino detectors: study solar and supernova neutrinos",
                    "Cosmology: understanding Big Bang and dark matter",
                    "Nuclear medicine: cyclotron-produced isotopes for diagnosis"
                ]
            }
        };
    }

    initializeNuclearExperiments() {
        this.nuclearExperiments = {

            // ============================================================
            // EXPERIMENT 1: GEIGER-MARSDEN ALPHA SCATTERING EXPERIMENT
            // ============================================================
            geiger_marsden_scattering: {
                name: "Geiger-Marsden Alpha Scattering Experiment — Discovery of the Nuclear Atom",
                relatedTopics: ['nuclear_structure', 'particle_physics'],
                category: 'nuclear_structure',
                historicalBackground: {
                    scientist: "Hans Geiger and Ernest Marsden, supervised by Ernest Rutherford",
                    year: "1909 (experiment); 1911 (Rutherford's nuclear model published)",
                    location: "University of Manchester, England",
                    discovery: "The atom has a tiny, massive, positively charged nucleus; disproved Thomson's plum pudding model",
                    previousModel: "J.J. Thomson's 'plum pudding' model (1904): positive charge spread uniformly through atom; electrons embedded within it",
                    method: "Alpha particles fired at thin gold foil; detected by scintillations on zinc sulphide screen",
                    famousQuote: "It was almost as incredible as if you fired 15-inch shells at tissue paper and they came back and hit you (Rutherford, 1911)",
                    significance: "Established the nuclear model of the atom; led to Bohr model; foundation of all nuclear physics"
                },
                labExperiment: {
                    title: "Modelling the Geiger-Marsden Experiment and Analysing Rutherford Scattering",
                    hypothesis: "If the nucleus is small, dense, and positively charged, most alpha particles will pass through with small deflections, but a small fraction will be deflected through large angles (>90°) by close approach to the nucleus",
                    purpose: "Understand the experimental evidence for the nuclear model of the atom; analyse the scattering distribution; estimate nuclear size from closest approach",
                    originalApparatus: {
                        components: [
                            "Radioactive source: ²¹⁴Bi (radium C) — alpha emitter in evacuated chamber",
                            "Gold foil: ~6 × 10⁻⁷ m thick (~400 atoms); gold chosen for malleability (very thin)",
                            "Zinc sulphide (ZnS) screen: produces flash (scintillation) when struck by alpha particle",
                            "Microscope: to observe and count scintillations",
                            "Rotatable detector arm: screen could be moved to different angles θ"
                        ],
                        evacuated: "Evacuated chamber essential — alpha particles absorbed by air",
                        procedure: [
                            "Set detector at angle θ to beam direction",
                            "Count scintillations on ZnS screen over fixed time",
                            "Rotate detector to different angles; repeat counting",
                            "Record N(θ) = count rate as function of scattering angle θ"
                        ]
                    },
                    keyResults: {
                        mostParticles: "Most alpha particles pass straight through with deflection < 1°",
                        someDeflected: "Some deflected through small angles (up to ~10°)",
                        backScattered: "About 1 in 8000 alpha particles deflected through > 90° (back-scattered)",
                        rutherfordFormula: "N(θ) ∝ 1/sin⁴(θ/2) — Rutherford scattering formula; confirmed by data"
                    },
                    conclusions: {
                        conclusion1: "Most of atom is empty space (most particles pass through undeflected)",
                        conclusion2: "Positive charge is concentrated in a tiny central nucleus (explains large angle deflections)",
                        conclusion3: "Nuclear radius ~10⁻¹⁵ m; atomic radius ~10⁻¹⁰ m; nucleus is 10⁵ times smaller than atom",
                        conclusion4: "Nucleus contains almost all the mass of the atom",
                        conclusion5: "Thomson's plum pudding model is incorrect (could not explain back-scattering)"
                    },
                    closestApproachCalculation: {
                        title: "Estimating Nuclear Size from Distance of Closest Approach",
                        principle: "At closest approach, all alpha KE converted to electrostatic PE",
                        equation: "½mᵥ² = kZₐZₙe²/r_min  →  r_min = kZₐZₙe²/(½mᵥ²) = 2kZₐZₙe²/(mᵥ²)",
                        variables: {
                            k: "Coulomb's constant = 8.99 × 10⁹ N m² C⁻²",
                            Zα: "Atomic number of alpha particle = 2",
                            ZN: "Atomic number of gold nucleus = 79",
                            e: "Elementary charge = 1.60 × 10⁻¹⁹ C",
                            m: "Mass of alpha particle = 6.64 × 10⁻²⁷ kg",
                            v: "Speed of alpha particle (~2 × 10⁷ m/s typical)"
                        },
                        exampleCalc: {
                            alphaKE: "KE = ½ × 6.64×10⁻²⁷ × (2×10⁷)² = 1.33 × 10⁻¹² J",
                            rMin: "r_min = (8.99×10⁹ × 2 × 79 × (1.60×10⁻¹⁹)²) / (1.33×10⁻¹²) ≈ 2.7 × 10⁻¹⁴ m",
                            interpretation: "Upper limit on nuclear radius: nucleus is smaller than this distance"
                        }
                    },
                    classroomModelling: {
                        rollBallModel: {
                            description: "Roll ball bearings at central raised dome (representing nucleus); observe deflection vs impact parameter",
                            observation: "Balls far from centre pass through; balls aimed at centre are deflected through large angles",
                            limitation: "Gravity models 1/r² force but nuclear force is different at short range"
                        },
                        computerSimulation: {
                            description: "Use PhET 'Rutherford Scattering' simulation or similar",
                            variables: "Change nuclear charge, alpha energy, impact parameter",
                            observations: "Count back-scattered particles; verify Rutherford formula"
                        }
                    },
                    dataTable: [
                        ["Angle θ (°)", "Count N (per min)", "sin⁴(θ/2)", "N × sin⁴(θ/2)", "Consistent with Rutherford?"],
                        ["10", "", "", "", ""],
                        ["20", "", "", "", ""],
                        ["30", "", "", "", ""],
                        ["45", "", "", "", ""],
                        ["60", "", "", "", ""],
                        ["90", "", "", "", ""],
                        ["120", "", "", "", ""],
                        ["150", "", "", "", ""]
                    ],
                    errorAnalysis: {
                        systematic: [
                            "Dead time of detector (misses counts at very high rates)",
                            "Multiple scattering in foil (some particles scattered more than once)",
                            "Scattering from detector walls",
                            "Non-uniform foil thickness"
                        ],
                        random: [
                            "Statistical fluctuation in count rate (N follows Poisson statistics; uncertainty = √N)",
                            "Misidentification of scintillations"
                        ],
                        improvements: [
                            "Use electronic detectors instead of visual counting",
                            "Evacuate fully to eliminate air scattering",
                            "Use very thin, uniform gold foil",
                            "Count for longer periods to improve statistics"
                        ]
                    },
                    realWorldApplications: [
                        "Rutherford backscattering spectrometry (RBS): surface analysis of thin films",
                        "Ion beam analysis in semiconductor manufacturing",
                        "Nuclear structure studies at particle accelerators",
                        "Medical hadron therapy: proton and carbon ion cancer treatment"
                    ],
                    extensions: [
                        "Use different foil materials (aluminium, copper, lead) to show dependence on Z",
                        "Vary alpha particle energy to show dependence of r_min on energy",
                        "Investigate deviation from Rutherford formula at high energies (nuclear force takes over)",
                        "Research Bohr's model developed from Rutherford's nuclear atom"
                    ]
                }
            },

            // ============================================================
            // EXPERIMENT 2: RADIOACTIVE DECAY AND HALF-LIFE
            // ============================================================
            radioactive_decay_halflife: {
                name: "Radioactive Decay and Half-Life — Exponential Decay Law",
                relatedTopics: ['radioactivity'],
                category: 'radioactivity',
                historicalBackground: {
                    scientist: "Ernest Rutherford and Frederick Soddy",
                    year: "1902",
                    location: "McGill University, Montreal, Canada",
                    discovery: "Radioactive decay follows an exponential law; defined half-life; discovered transmutation",
                    method: "Measured activity of thorium samples over time; plotted activity vs time",
                    significance: "Established quantitative law of radioactive decay; led to concept of radioactive series; enabled radiometric dating",
                    soddy: "Soddy also recognised that radioactive decay changed one element into another — transmutation"
                },
                labExperiment: {
                    title: "Measuring the Half-Life of a Short-Lived Isotope (e.g., Protactinium-234 or Barium-137m)",
                    hypothesis: "If radioactive decay follows N = N₀e^(−λt), the activity should decrease exponentially and a graph of ln(A) vs t should be a straight line with gradient −λ, from which t½ = ln2/λ can be found",
                    purpose: "Measure the half-life of a short-lived radioactive isotope; verify the exponential decay law",
                    methods: {
                        protactinium: {
                            isotope: "²³⁴Pa (protactinium-234); t½ ≈ 72 s",
                            source: "Uranium-238 secular equilibrium solution; Pa-234 extracted into organic solvent by shaking",
                            procedure: [
                                "Shake sealed bottle containing uranium salt in organic solvent to extract Pa-234 into organic layer",
                                "Place bottle near GM tube; start timer",
                                "Record counts per 10 s interval every 10 s for ~10 minutes",
                                "Subtract background (measured separately over 5 min)",
                                "Plot corrected count rate vs time; then plot ln(count rate) vs time",
                                "Find gradient of ln graph → λ → t½"
                            ],
                            safety: "Sealed source — do not open; follow school radiation protection guidelines; handle with tongs"
                        },
                        barium137m: {
                            isotope: "¹³⁷ᵐBa (metastable barium); t½ = 2.55 min",
                            source: "Commercially available isogenerator (milking a Cs-137 source)",
                            procedure: [
                                "Elute Ba-137m from isogenerator into small flask",
                                "Place flask near GM tube; start timer immediately",
                                "Record count rate every 30 s for 15 minutes",
                                "Subtract background; plot corrected count rate vs time",
                                "Plot ln(count rate) vs time; determine gradient and hence λ and t½"
                            ]
                        },
                        dice_model: {
                            description: "Modelling radioactive decay with dice — analogy only",
                            procedure: [
                                "Start with N₀ = 200 dice (or similar large number)",
                                "Roll all dice; remove any showing a '6' (they have 'decayed')",
                                "Count remaining dice (N); record against roll number",
                                "Repeat until fewer than 10 dice remain",
                                "Plot N vs roll number; plot ln(N) vs roll number"
                            ],
                            analysis: "Each roll represents one time step; probability of decay per roll = 1/6 → λ = 1/6 per roll → t½ = ln2/λ ≈ 3.8 rolls",
                            limitations: [
                                "Dice give discrete approximation; real decay is continuous",
                                "Large fluctuations with small N (statistical noise)",
                                "Dice decay probability (1/6) is arbitrary; real λ is characteristic of isotope"
                            ]
                        }
                    },
                    variables: {
                        independent: "Time t (s)",
                        dependent: "Corrected count rate C (counts per second)",
                        controlled: ["Distance from source to detector", "Same GM tube throughout", "Background measured before/after experiment"]
                    },
                    dataAnalysis: {
                        step1: "Subtract background count rate from all readings: C_corrected = C_measured − C_background",
                        step2: "Plot C_corrected vs t: should show exponential decrease",
                        step3: "Plot ln(C_corrected) vs t: should give straight line",
                        step4: "Find gradient of ln graph: gradient = −λ",
                        step5: "Calculate half-life: t½ = ln2/λ = 0.693/λ",
                        step6: "Estimate uncertainty: use uncertainty in gradient; propagate to t½",
                        alternativeGraphicalMethod: "Read t½ directly from exponential graph: time for activity to halve; repeat for three consecutive halvings and average"
                    },
                    dataTable: [
                        ["Time t (s)", "Raw count rate (s⁻¹)", "Background (s⁻¹)", "Corrected rate C (s⁻¹)", "ln(C)"],
                        ["0", "", "", "", ""],
                        ["10", "", "", "", ""],
                        ["20", "", "", "", ""],
                        ["30", "", "", "", ""],
                        ["40", "", "", "", ""],
                        ["50", "", "", "", ""],
                        ["60", "", "", "", ""],
                        ["70", "", "", "", ""],
                        ["80", "", "", "", ""],
                        ["90", "", "", "", ""],
                        ["100", "", "", "", ""],
                        ["120", "", "", "", ""],
                        ["150", "", "", "", ""],
                        ["180", "", "", "", ""]
                    ],
                    expectedResults: {
                        graphShape: "Exponential decay curve; ln(C) vs t is straight line",
                        gradient: "−λ (negative — activity decreasing)",
                        halfLife_Pa234: "~72 s",
                        halfLife_Ba137m: "~153 s (2.55 min)"
                    },
                    errorAnalysis: {
                        statistical: "Radioactive decay is random: uncertainty in N counts = √N; take counts over longer intervals to reduce % error",
                        systematic: [
                            "Background radiation must be subtracted accurately",
                            "GM tube dead time: at very high count rates, counts may be missed",
                            "Variation in source-detector geometry if source moves"
                        ],
                        improvements: [
                            "Measure background for 5+ minutes to reduce uncertainty",
                            "Repeat experiment and average λ values",
                            "Use scaler/ratemeter with datalogger for automatic recording"
                        ]
                    },
                    conclusions: [
                        "Radioactive decay follows exponential law: A = A₀e^(−λt)",
                        "ln(A) vs t gives straight line confirming exponential relationship",
                        "Half-life is constant and characteristic of the isotope",
                        "Measured t½ should agree with accepted value within experimental uncertainty"
                    ],
                    realWorldApplications: [
                        "Radiocarbon dating: uses ¹⁴C t½ = 5730 years",
                        "Nuclear medicine: choosing isotopes with appropriate half-lives for diagnosis vs therapy",
                        "Nuclear waste management: predicting when materials are safe",
                        "Geological dating: potassium-argon, uranium-lead methods",
                        "Smoke detectors: ²⁴¹Am (t½ = 432 years) chosen for long life"
                    ],
                    extensions: [
                        "Measure background in different locations; discuss sources of background radiation",
                        "Use secular equilibrium to study relationship between parent and daughter half-lives",
                        "Compare half-lives of different isotopes and relate to nuclear stability",
                        "Research the use of specific isotopes in medicine and justify half-life choice"
                    ]
                }
            },

            // ============================================================
            // EXPERIMENT 3: RADIATION ABSORPTION AND PENETRATION
            // ============================================================
            radiation_absorption: {
                name: "Radiation Absorption — Penetration of Alpha, Beta, and Gamma Radiation",
                relatedTopics: ['radioactivity'],
                category: 'radioactivity',
                historicalBackground: {
                    scientist: "Ernest Rutherford",
                    year: "1899",
                    location: "Cambridge and McGill Universities",
                    discovery: "Identified two types of radiation: alpha (absorbed by thin paper/air) and beta (more penetrating); gamma identified by Paul Villard (1900)",
                    naming: "Rutherford named α and β based on penetrating power; gamma named by Rutherford 1903",
                    significance: "Characterising radiation types essential for radiation protection, medical use, and nuclear physics"
                },
                labExperiment: {
                    title: "Investigating the Absorption and Penetration of Nuclear Radiation",
                    hypothesis: "Alpha radiation is absorbed by paper; beta by a few mm of aluminium; gamma requires several cm of lead for significant attenuation. For gamma radiation, intensity follows I = I₀e^(−μx) where μ is the linear attenuation coefficient.",
                    purpose: "Identify the three types of nuclear radiation by their penetration; measure the absorption coefficient for gamma radiation",
                    materials: [
                        "Geiger-Müller (GM) tube connected to counter/ratemeter",
                        "Alpha source: ²⁴¹Am sealed source (241Am, t½ = 432 y)",
                        "Beta source: ⁹⁰Sr sealed source (strontium-90, t½ = 28.8 y)",
                        "Gamma source: ⁶⁰Co or ¹³⁷Cs sealed source",
                        "Absorbers: paper sheets, aluminium sheets (0.5–10 mm), lead sheets (1–10 cm)",
                        "Ruler; micrometer for measuring absorber thickness",
                        "Lead screen for shielding when not in use",
                        "Source holder and retort stand"
                    ],
                    safetyPrecautions: [
                        "Use sealed sources only; never attempt to open source container",
                        "Handle sources with long forceps; minimise time holding source",
                        "Keep sources in lead-lined containers when not in use",
                        "Never point source at people; beam directed away from operators",
                        "Follow school/institution radiation protection guidelines at all times",
                        "Wash hands after experiment",
                        "Gamma sources: work behind lead screen; keep distance maximised"
                    ],
                    procedure: {
                        backgroundMeasurement: [
                            "Remove all sources from vicinity",
                            "Count background for 5 minutes; calculate background rate (counts/s)",
                            "This must be subtracted from all subsequent readings"
                        ],
                        alphaAbsorption: [
                            "Place alpha source 2 cm from GM tube window (thin-window end)",
                            "Record count rate with no absorber",
                            "Place single sheet of paper between source and tube; record count",
                            "Add more paper sheets; check if alpha penetrates paper",
                            "Increase air gap between source and detector in 1 cm steps; record count",
                            "Determine range of alpha particles in air"
                        ],
                        betaAbsorption: [
                            "Place beta source 3–5 cm from GM tube",
                            "Record count rate with no absorber",
                            "Place aluminium sheets of increasing thickness; record count for each",
                            "Plot count rate vs aluminium thickness",
                            "Determine thickness that reduces count to background level (range in Al)"
                        ],
                        gammaAbsorption: [
                            "Place gamma source 5–10 cm from GM tube",
                            "Record count rate with no absorber",
                            "Place lead sheets of increasing thickness x; record count rate for each",
                            "Calculate corrected count rate (subtract background)",
                            "Plot ln(corrected rate) vs thickness x",
                            "Gradient = −μ (linear attenuation coefficient); find half-value thickness"
                        ]
                    },
                    variables: {
                        independent: "Thickness of absorber material (mm or cm)",
                        dependent: "Corrected count rate (counts per second)",
                        controlled: ["Source-detector distance", "Same GM tube and source", "Background measured consistently"]
                    },
                    gammaAttenuation: {
                        equation: "I = I₀ · e^(−μx)",
                        linearisation: "ln(I) = ln(I₀) − μx → straight line; gradient = −μ",
                        halfValueThickness: "x½ = ln2/μ = 0.693/μ; thickness that halves the intensity",
                        units: {
                            μ: "m⁻¹ or cm⁻¹ (linear attenuation coefficient)",
                            x: "m or cm (absorber thickness)"
                        },
                        factors: "μ depends on photon energy and absorber material; higher Z materials more effective"
                    },
                    dataTable: {
                        gammaTable: [
                            ["Lead thickness x (cm)", "Raw count (s⁻¹)", "Corrected count I (s⁻¹)", "ln(I)"],
                            ["0", "", "", ""],
                            ["1", "", "", ""],
                            ["2", "", "", ""],
                            ["3", "", "", ""],
                            ["4", "", "", ""],
                            ["5", "", "", ""],
                            ["7", "", "", ""],
                            ["10", "", "", ""]
                        ],
                        betaTable: [
                            ["Al thickness (mm)", "Raw count (s⁻¹)", "Corrected count (s⁻¹)", "Notes"],
                            ["0", "", "", ""],
                            ["1", "", "", ""],
                            ["2", "", "", ""],
                            ["3", "", "", ""],
                            ["5", "", "", ""],
                            ["8", "", "", ""],
                            ["10", "", "", ""]
                        ]
                    },
                    expectedResults: {
                        alpha: "Completely stopped by 1 sheet of paper or ~5 cm of air; count drops to background",
                        beta: "Gradually absorbed by aluminium; stopped by ~3 mm Al; then only background",
                        gamma: "Not completely stopped even by thick lead; exponential attenuation; ln(I) vs x linear"
                    },
                    errorAnalysis: {
                        statistical: "Count rate has uncertainty √N per count; count over longer time for better statistics; background subtraction introduces uncertainty",
                        systematic: [
                            "Backscattering from absorbers can increase apparent count (beta especially)",
                            "Source may emit more than one type of radiation",
                            "GM tube response varies with photon energy"
                        ],
                        improvements: [
                            "Use a scaler and count for fixed time (30–60 s per reading)",
                            "Measure background before and after; use mean",
                            "For gamma: use collimated source to reduce scattered radiation reaching detector"
                        ]
                    },
                    conclusions: [
                        "Alpha radiation has very low penetrating power; stopped by paper or a few cm of air",
                        "Beta radiation has intermediate penetrating power; stopped by ~3 mm of aluminium",
                        "Gamma radiation is highly penetrating; intensity follows I = I₀e^(−μx) with lead",
                        "ln(I) vs thickness x gives straight line confirming exponential absorption of gamma",
                        "Linear attenuation coefficient μ can be found from gradient of ln(I) vs x graph"
                    ],
                    realWorldApplications: [
                        "Radiation shielding design for nuclear facilities and medical departments",
                        "Radiation protection: appropriate shielding material choice for each type",
                        "Medical radiotherapy: choosing radiation type that deposits energy at correct depth",
                        "Airport security: X-ray scanners use photon attenuation for imaging",
                        "Industrial radiography: gamma sources used to image welds and structures"
                    ],
                    extensions: [
                        "Investigate how absorber material (not just thickness) affects gamma attenuation",
                        "Measure μ for different gamma energies (different sources) in the same material",
                        "Investigate inverse square law for gamma radiation (count vs distance)",
                        "Research how PET scanners detect back-to-back 511 keV gamma photons"
                    ]
                }
            },

            // ============================================================
            // EXPERIMENT 4: BINDING ENERGY AND MASS DEFECT (COMPUTATIONAL)
            // ============================================================
            binding_energy_investigation: {
                name: "Binding Energy and Mass Defect — Investigating Nuclear Stability",
                relatedTopics: ['nuclear_reactions', 'fission_fusion'],
                category: 'nuclear_reactions',
                historicalBackground: {
                    scientist: "Francis Aston (mass spectrometer); Hans Bethe (nuclear binding energy)",
                    year: "1920s–1930s",
                    aston: "Francis Aston developed the mass spectrograph (1919); measured atomic masses with high precision; discovered isotopes and measured packing fractions",
                    bethe: "Hans Bethe and Carl von Weizsäcker developed the semi-empirical mass formula (liquid drop model) in 1935–1936",
                    significance: "Precise mass measurements reveal binding energy differences; explain why certain nuclei are stable and why fission/fusion release energy",
                    nobelPrize: "Aston won Nobel Prize in Chemistry (1922); Bethe won Nobel Prize in Physics (1967)"
                },
                labExperiment: {
                    title: "Calculating Binding Energy per Nucleon and Interpreting the Binding Energy Curve",
                    hypothesis: "Binding energy per nucleon peaks at iron-56; nuclei lighter than Fe-56 can release energy by fusion; nuclei heavier than Fe-56 can release energy by fission",
                    purpose: "Calculate binding energies from nuclear mass data; plot binding energy per nucleon vs mass number; interpret the stability curve; relate to fission and fusion energy release",
                    nature: "This is a computational/data-analysis experiment using published nuclear mass data",
                    requiredData: {
                        fundamentalConstants: {
                            mProton: "mₚ = 1.007276 u",
                            mNeutron: "mₙ = 1.008665 u",
                            mElectron: "mₑ = 0.000549 u",
                            conversionFactor: "1 u = 931.5 MeV/c²",
                            cSquared: "c² = 9.00 × 10¹⁶ m²/s²"
                        },
                        atomicMassData: [
                            { symbol: "¹H", Z: 1, A: 1, atomicMass_u: 1.007825 },
                            { symbol: "²H", Z: 1, A: 2, atomicMass_u: 2.014102 },
                            { symbol: "³H", Z: 1, A: 3, atomicMass_u: 3.016049 },
                            { symbol: "⁴He", Z: 2, A: 4, atomicMass_u: 4.002602 },
                            { symbol: "⁷Li", Z: 3, A: 7, atomicMass_u: 7.016003 },
                            { symbol: "¹²C", Z: 6, A: 12, atomicMass_u: 12.000000 },
                            { symbol: "¹⁴N", Z: 7, A: 14, atomicMass_u: 14.003074 },
                            { symbol: "¹⁶O", Z: 8, A: 16, atomicMass_u: 15.994915 },
                            { symbol: "²³Na", Z: 11, A: 23, atomicMass_u: 22.989769 },
                            { symbol: "⁴⁰Ca", Z: 20, A: 40, atomicMass_u: 39.962591 },
                            { symbol: "⁵⁶Fe", Z: 26, A: 56, atomicMass_u: 55.934939 },
                            { symbol: "⁶³Cu", Z: 29, A: 63, atomicMass_u: 62.929598 },
                            { symbol: "⁸⁴Kr", Z: 36, A: 84, atomicMass_u: 83.911508 },
                            { symbol: "¹⁰⁷Ag", Z: 47, A: 107, atomicMass_u: 106.905097 },
                            { symbol: "¹³²Xe", Z: 54, A: 132, atomicMass_u: 131.904154 },
                            { symbol: "²⁰⁸Pb", Z: 82, A: 208, atomicMass_u: 207.976652 },
                            { symbol: "²³²Th", Z: 90, A: 232, atomicMass_u: 232.038051 },
                            { symbol: "²³⁵U", Z: 92, A: 235, atomicMass_u: 235.043928 },
                            { symbol: "²³⁸U", Z: 92, A: 238, atomicMass_u: 238.050785 }
                        ]
                    },
                    calculationMethod: {
                        note: "Use nuclear mass = atomic mass − Z × electron mass for nuclear calculations, OR use atomic masses directly with hydrogen atom mass instead of proton mass",
                        step1: "Calculate total mass of separated nucleons: M_sep = Z × mₚ + N × mₙ (using nuclear masses) OR M_sep = Z × M(¹H) + N × mₙ (using atomic masses)",
                        step2: "Find mass defect: Δm = M_sep − M_nucleus (in u)",
                        step3: "Convert to binding energy: E_B = Δm × 931.5 MeV",
                        step4: "Divide by A: E_B/A (MeV/nucleon)",
                        step5: "Enter results in table; plot E_B/A (y-axis) vs A (x-axis)"
                    },
                    dataTable: [
                        ["Nuclide", "Z", "N", "A", "Atomic Mass (u)", "M_sep (u)", "Δm (u)", "E_B (MeV)", "E_B/A (MeV/nucleon)"],
                        ["¹H", "1", "0", "1", "1.007825", "", "", "", ""],
                        ["²H", "1", "1", "2", "2.014102", "", "", "", ""],
                        ["⁴He", "2", "2", "4", "4.002602", "", "", "", ""],
                        ["⁷Li", "3", "4", "7", "7.016003", "", "", "", ""],
                        ["¹²C", "6", "6", "12", "12.000000", "", "", "", ""],
                        ["¹⁶O", "8", "8", "16", "15.994915", "", "", "", ""],
                        ["⁵⁶Fe", "26", "30", "56", "55.934939", "", "", "", ""],
                        ["²⁰⁸Pb", "82", "126", "208", "207.976652", "", "", "", ""],
                        ["²³⁵U", "92", "143", "235", "235.043928", "", "", "", ""],
                        ["²³⁸U", "92", "146", "238", "238.050785", "", "", "", ""]
                    ],
                    workedExample: {
                        nucleus: "⁴He",
                        Z: 2, N: 2, A: 4,
                        atomicMass: "4.002602 u",
                        MH: "1.007825 u (hydrogen-1 atom mass)",
                        mn: "1.008665 u",
                        Msep: "2 × 1.007825 + 2 × 1.008665 = 2.015650 + 2.017330 = 4.032980 u",
                        massDefect: "Δm = 4.032980 − 4.002602 = 0.030378 u",
                        bindingEnergy: "E_B = 0.030378 × 931.5 = 28.30 MeV",
                        perNucleon: "E_B/A = 28.30/4 = 7.07 MeV/nucleon"
                    },
                    graphAnalysis: {
                        plotInstructions: "Plot E_B/A (y-axis, MeV/nucleon) vs A (x-axis); use range 0–240 for x-axis; 0–10 MeV/nucleon for y-axis",
                        expectedFeatures: [
                            "Rapid rise for light nuclei (A < 20): ¹H at 0; ²H at 1.11; ⁴He at 7.07",
                            "Peak at A ≈ 56 (⁵⁶Fe): E_B/A ≈ 8.79 MeV/nucleon — most stable",
                            "Gentle decrease for heavy nuclei (A > 56) due to growing electrostatic repulsion",
                            "Local peaks at ⁴He, ¹²C, ¹⁶O (magic numbers / especially stable nuclei)"
                        ],
                        interpretation: [
                            "Energy released in fusion = difference in E_B/A × A (moving left nuclei toward peak)",
                            "Energy released in fission = difference in E_B/A × A (splitting heavy nucleus toward peak)",
                            "⁵⁶Fe is most stable — neither fission nor fusion of iron releases energy",
                            "Explains why stars stop generating energy when core becomes iron"
                        ]
                    },
                    fissionEnergyEstimation: {
                        example: "²³⁵U fission into Ba and Kr",
                        uranium_Ebinding_per_nucleon: "≈ 7.59 MeV/nucleon × 235 = 1784 MeV total",
                        products_Ebinding_per_nucleon: "≈ 8.5 MeV/nucleon (Ba, Kr region)",
                        energyReleased: "ΔE ≈ (8.5 − 7.59) × 235 ≈ 214 MeV per fission",
                        note: "Actual value ~200 MeV; consistent with binding energy curve prediction"
                    },
                    fusionEnergyEstimation: {
                        example: "D + T → ⁴He + n",
                        reactants: "E_B(²H) = 2.22 MeV; E_B(³H) = 8.48 MeV; total = 10.70 MeV",
                        products: "E_B(⁴He) = 28.30 MeV; neutron = 0 MeV; total = 28.30 MeV",
                        energyReleased: "Q = 28.30 − 10.70 = 17.60 MeV",
                        note: "Matches published value of 17.6 MeV for D-T fusion"
                    },
                    conclusions: [
                        "Binding energy per nucleon peaks at ⁵⁶Fe — the most stable nucleus",
                        "Fusion of light nuclei and fission of heavy nuclei both move products toward the peak",
                        "Both processes release energy equal to the increase in total binding energy",
                        "Mass defect confirms Einstein's E = mc²: mass difference converts to energy",
                        "Nuclear forces are immensely stronger than chemical bonds (MeV vs eV scale)"
                    ],
                    extensions: [
                        "Research the semi-empirical mass formula (SEMF) and its terms",
                        "Investigate magic numbers (Z or N = 2, 8, 20, 28, 50, 82, 126) and their special stability",
                        "Calculate the energy released in the proton-proton chain in the Sun",
                        "Compare binding energy per nucleon with chemical bond energies (eV vs MeV scale)"
                    ]
                }
            },

            // ============================================================
            // EXPERIMENT 5: CLOUD CHAMBER — VISUALISING RADIATION TRACKS
            // ============================================================
            cloud_chamber: {
                name: "Cloud Chamber — Visualising Tracks of Nuclear Radiation",
                relatedTopics: ['radioactivity', 'particle_physics'],
                category: 'radioactivity',
                historicalBackground: {
                    scientist: "Charles Thomson Rees Wilson",
                    year: "1911 (operational cloud chamber); 1927 Nobel Prize in Physics",
                    location: "Cavendish Laboratory, Cambridge",
                    invention: "Wilson invented the expansion cloud chamber; observed that ionising radiation leaves tracks in supersaturated vapour",
                    motivation: "Wilson was inspired by cloud formations on Ben Nevis (1894); tried to reproduce them in the lab",
                    significance: "First method to visually observe paths of individual subatomic particles; confirmed existence of positron (Anderson, 1932); led to discovery of many particles; essential tool in particle physics for decades",
                    legacy: "Led to bubble chamber (Glaser, 1952); spark chamber; modern silicon detectors"
                },
                labExperiment: {
                    title: "Building and Using a Diffusion Cloud Chamber to Observe Radiation Tracks",
                    hypothesis: "Ionising particles (alpha, beta) leave distinct tracks in supersaturated alcohol vapour; track characteristics (length, width, straightness) depend on particle type and energy",
                    purpose: "Observe and identify tracks from different radiation types; understand ionisation; compare track characteristics; link to identification of particle type",
                    typeOfChamber: {
                        diffusion: {
                            name: "Continuous diffusion cloud chamber",
                            principle: "Alcohol vapour continuously diffuses from warm top toward cold bottom (dry ice or liquid nitrogen); supersaturated layer forms ~1–2 cm above cold base; ions from radiation act as condensation nuclei for droplets"
                        }
                    },
                    materials: [
                        "Flat-bottomed transparent container (acrylic or glass; e.g., petri dish or custom chamber)",
                        "Felt or sponge strip soaked in isopropanol (IPA) or methanol mounted inside top of chamber",
                        "Dry ice (solid CO₂) or mixture of ice and salt to cool base (dry ice preferred: ~−78°C)",
                        "Black card or black-painted metal base plate",
                        "Bright LED or halogen lamp (angled illumination from side is essential)",
                        "Radioactive source holder (sealed ²⁴¹Am for alpha; ⁹⁰Sr for beta)",
                        "Magnets (optional: to deflect beta tracks and confirm negative charge)",
                        "Camera or phone for recording tracks",
                        "Rubber gloves and tongs for dry ice"
                    ],
                    safetyPrecautions: [
                        "Dry ice: use insulated gloves; causes cryogenic burns; do not handle directly",
                        "Isopropanol/methanol: flammable; no naked flames; ventilate well",
                        "Sealed radioactive sources only; follow school radiation protection policy",
                        "Do not ingest or inhale alcohol vapour",
                        "Camera only for observation; no need to look for extended periods"
                    ],
                    assemblyProcedure: [
                        "Soak felt strip with ~5 mL of IPA; fix inside top of chamber",
                        "Place black card on base of chamber",
                        "Place chamber on layer of dry ice (~3–4 cm deep); wait 10–15 minutes to cool",
                        "Darken room; illuminate chamber from side with bright light",
                        "Observe fog layer forming near base — this is the supersaturated region",
                        "Place sealed radioactive source inside chamber (or on shelf above fog layer)",
                        "Look for tracks in the fog layer; photograph or video them",
                        "To reset: gently sweep hand over top of chamber to clear old tracks"
                    ],
                    observationsAndAnalysis: {
                        alphaTrack: {
                            appearance: "Thick, straight, short tracks; well-defined endpoints",
                            explanation: "Alpha particles (charge +2, mass 4 u) cause intense ionisation → thick tracks; low penetration → short tracks; no deflection by electric field (heavy) → straight",
                            typicalLength: "~4–7 cm in air equivalent at typical alpha energies"
                        },
                        betaTrack: {
                            appearance: "Thin, wiggly, longer tracks",
                            explanation: "Beta particles (charge −1, mass ~1/2000 u) cause less ionisation → thin tracks; higher penetration → longer; light particle deflected by collisions → wiggly",
                            magneticDeflection: "Magnetic field curves beta tracks; direction shows negative charge"
                        },
                        gammaTrack: {
                            appearance: "No direct tracks; may see short electron tracks (Compton scatter/pair production)",
                            explanation: "Gamma photons do not directly ionise; eject electrons that then ionise → secondary electron tracks"
                        },
                        backgroundCosmic: {
                            appearance: "Occasional long, straight tracks crossing entire chamber",
                            explanation: "Cosmic ray muons; highly penetrating; created in upper atmosphere by cosmic rays"
                        }
                    },
                    dataTable: [
                        ["Track observation", "Thickness (thick/thin)", "Length (cm)", "Shape (straight/wiggly)", "Identified as"],
                        ["1", "", "", "", ""],
                        ["2", "", "", "", ""],
                        ["3", "", "", "", ""],
                        ["4", "", "", "", ""],
                        ["5", "", "", "", ""],
                        ["6", "", "", "", ""]
                    ],
                    quantitativeAnalysis: {
                        rangeEnergy: "Range of alpha track in air relates to its energy; R ≈ 0.31 × E^(3/2) (cm, MeV) for air at STP",
                        counting: "Count alpha tracks from source per minute; compare to expected activity",
                        deflection: "With magnetic field B applied: r = mv/(qB); measure radius to find momentum"
                    },
                    errorAnalysis: {
                        limitations: [
                            "Tracks only visible in supersaturated region (~1–2 cm above base)",
                            "Vibrations disrupt track formation",
                            "Alcohol vapour pressure depends on temperature — must maintain cold base",
                            "IPA/methanol vapour is hazardous; must ventilate"
                        ],
                        improvements: [
                            "Use liquid nitrogen instead of dry ice for more stable cooling",
                            "Mount chamber on vibration-free surface",
                            "Use continuous IPA feed (drip) instead of felt reservoir"
                        ]
                    },
                    conclusions: [
                        "Alpha tracks are thick, straight, and short — consistent with high ionisation and low penetration",
                        "Beta tracks are thin, wiggly, and longer — consistent with lower ionisation and higher penetration",
                        "Gamma radiation produces no direct tracks but secondary electron tracks may be visible",
                        "Cosmic ray tracks are very long and straight — muons with very high penetration",
                        "Cloud chamber makes otherwise invisible nuclear radiation directly visible"
                    ],
                    realWorldApplications: [
                        "Positron discovered by Carl Anderson in cloud chamber (1932)",
                        "First evidence for strange particles (kaons, hyperons) found in cloud chambers",
                        "Modern particle detectors (LHC silicon trackers) are conceptually descended from cloud chamber",
                        "Demonstration tool for public understanding of radiation",
                        "Cosmic ray research and muon detection"
                    ],
                    extensions: [
                        "Apply magnetic field; calculate momentum of beta particles from track curvature",
                        "Compare alpha track lengths from different alpha-emitting sources",
                        "Observe cosmic ray muon tracks; estimate flux (tracks per minute per cm²)",
                        "Research bubble chamber and its advantages over cloud chamber"
                    ]
                }
            }
        };

        this.linkExperimentsToTopics();
    }

    linkExperimentsToTopics() {
        Object.entries(this.nuclearExperiments).forEach(([expId, experiment]) => {
            experiment.relatedTopics.forEach(topicId => {
                if (this.nuclearTopics[topicId]) {
                    if (!this.nuclearTopics[topicId].relatedExperiments) {
                        this.nuclearTopics[topicId].relatedExperiments = [];
                    }
                    this.nuclearTopics[topicId].relatedExperiments.push({
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
            nuclear_structure: {
                'Nucleus and Atom': [
                    'Confusing the nucleus (tiny central core) with the atom (includes electron cloud)',
                    'Thinking the atom is mostly solid matter (it is ~99.9999% empty space)',
                    'Believing electrons orbit in fixed circular paths like planets (quantum model: probability clouds)',
                    'Thinking protons repel each other so the nucleus should fly apart (strong nuclear force overcomes electrostatic repulsion)'
                ],
                'Isotopes': [
                    'Confusing isotopes (same Z, different A) with isobars (same A, different Z)',
                    'Thinking all isotopes of an element are radioactive (many are stable)',
                    'Believing isotopes have different chemical properties (chemical properties depend on Z/electrons, not N)'
                ],
                'Nuclear Size': [
                    'Thinking the nuclear radius is proportional to A (it is proportional to A^(1/3))',
                    'Confusing nuclear density (constant for all nuclei) with nuclear radius (varies with A)'
                ]
            },
            radioactivity: {
                'Decay Types': [
                    'Thinking radioactivity is caused by electrons leaving the atom (radioactivity involves the nucleus)',
                    'Believing gamma radiation consists of particles (it is electromagnetic radiation — photons)',
                    'Thinking beta decay emits electrons that were stored in the nucleus (neutron converts to proton, creating and emitting the electron)',
                    'Confusing activity (decays per second) with the number of radioactive nuclei'
                ],
                'Half-Life': [
                    'Thinking after two half-lives, ALL radioactive material has decayed (after two t½, 25% remains)',
                    'Believing half-life means an atom will definitely decay in that time (it is a statistical probability)',
                    'Thinking half-life decreases over time as the material decays (half-life is constant — it is an intrinsic property of the isotope)',
                    'Confusing half-life with average lifetime (mean lifetime = t½/ln2 ≈ 1.44 × t½)'
                ],
                'Radiation Hazards': [
                    'Thinking all radioactive substances glow green (only some phosphors/luminescent materials glow; most do not)',
                    'Believing low-level background radiation is harmless to all people at all doses (effects depend on dose; background is generally safe)',
                    'Confusing contamination (radioactive material on/in the body) with irradiation (exposed to external source)',
                    'Thinking washing removes all radioactive contamination (some isotopes are absorbed internally)'
                ]
            },
            nuclear_reactions: {
                'Mass-Energy': [
                    'Thinking mass is destroyed in nuclear reactions (mass-energy is conserved; mass converts to energy)',
                    'Believing E = mc² applies only to nuclear weapons (it applies to all energy transformations, including chemical reactions — just too small to notice)',
                    'Confusing binding energy (energy released when nucleus formed) with energy needed to break it apart (they are equal in magnitude)'
                ],
                'Binding Energy': [
                    'Thinking a higher binding energy per nucleon means the nucleus is less stable (higher E_B/A means MORE stable)',
                    'Believing binding energy is the energy stored in the nucleus ready for release (it is the energy deficit — the energy needed to pull it apart)',
                    'Confusing total binding energy with binding energy per nucleon when comparing stability'
                ]
            },
            fission_fusion: {
                'Fission': [
                    'Thinking fission releases energy because uranium has "stored" energy (energy comes from the mass defect — products have higher binding energy per nucleon)',
                    'Believing the chain reaction in a reactor is the same as in a weapon (reactor: controlled, k = 1; weapon: supercritical, k >> 1)',
                    'Thinking nuclear reactors can explode like nuclear bombs (impossible — fuel enrichment is too low; no uncontrolled supercritical assembly)'
                ],
                'Fusion': [
                    'Believing fusion produces large amounts of radioactive waste (it produces helium and neutrons; activated reactor materials are short-lived compared to fission products)',
                    'Thinking fusion power will be available very soon (significant technical challenges remain; commercial fusion is decades away)',
                    'Confusing fusion (combining light nuclei) with fission (splitting heavy nuclei)'
                ]
            },
            particle_physics: {
                'Quarks and Hadrons': [
                    'Thinking quarks can exist as free particles (quarks are confined; they are always bound in hadrons)',
                    'Believing protons and neutrons are fundamental particles (they are composite: made of quarks)',
                    'Confusing quarks (constituents of hadrons) with leptons (electrons, neutrinos — truly fundamental)'
                ],
                'Antimatter': [
                    'Believing antimatter is exotic and rare in physics (antimatter is created routinely in particle accelerators and PET scanners)',
                    'Thinking matter-antimatter annihilation produces only one photon (must produce two to conserve momentum)',
                    'Confusing the positron (antielectron) with a proton (very different mass and role)'
                ],
                'Forces': [
                    'Thinking gravity is one of the four fundamental forces described by the Standard Model (gravity is NOT included in the Standard Model)',
                    'Believing the strong nuclear force directly attracts nucleons (residual strong force between nucleons; fundamental strong force acts between quarks via gluon exchange)',
                    'Confusing the weak force (responsible for beta decay) with a weak version of the strong force (they are completely different forces)'
                ]
            }
        };

        this.clarificationStrategies = {
            visual_comparison: {
                method: 'Use nuclear notation diagrams; compare nucleus size to atom size with scale models',
                effectiveness: 'High for nuclear structure and scale'
            },
            analogy: {
                method: 'Cloud chamber tracks = jet contrails; nucleus in atom = marble in a football stadium',
                effectiveness: 'High for abstract particle/nuclear concepts'
            },
            historical_context: {
                method: 'Use historical experiments (Geiger-Marsden, Becquerel) to motivate each concept',
                effectiveness: 'Very high for motivation and deep understanding'
            },
            mathematical_verification: {
                method: 'Work through conservation of nucleon number and charge in equations; verify units',
                effectiveness: 'High for nuclear equations and binding energy'
            },
            contrast_table: {
                method: 'Side-by-side comparison of alpha/beta/gamma properties; fission vs fusion',
                effectiveness: 'High for distinguishing related but distinct concepts'
            },
            experimental_demonstration: {
                method: 'GM tube, cloud chamber, half-life experiment directly confront misconceptions',
                effectiveness: 'Very high for radioactivity and decay law'
            }
        };
    }

    initializeMetacognitivePrompts() {
        this.metacognitivePrompts = {
            beforeLearning: [
                "What do you already know about {topic}?",
                "What questions do you have about {topic}?",
                "How does {topic} connect to what you know about atoms and electrons?",
                "What do you predict will be most conceptually challenging about {topic}?"
            ],
            duringLearning: [
                "Can you explain this in your own words without using the equations?",
                "How does this connect to {related_concept}?",
                "Can you draw a diagram of this nuclear process?",
                "What would happen if we changed one of the quantities — what does the equation predict?",
                "What would you measure in an experiment to test this?"
            ],
            afterLearning: [
                "What were the three most important ideas about {topic}?",
                "What surprised you most about {topic}?",
                "What are you still unsure about — can you write a specific question?",
                "How would you explain {topic} to a student who missed the lesson?",
                "What real-world application of {topic} do you find most interesting?"
            ],
            problemSolving: [
                "Have you written down all known quantities with symbols and values?",
                "Have you checked that nucleon number A and charge Z are conserved on both sides?",
                "Have you converted all masses to the same unit (u or MeV/c²) before calculating?",
                "Is your answer physically reasonable? (Check order of magnitude)",
                "Did you subtract background radiation before calculating activity or half-life?"
            ]
        };
    }

    initializeContextualScenarios() {
        this.contextualScenarios = {
            nuclear_structure: [
                {
                    scenario: "Scale of the Nucleus",
                    context: "If an atom were the size of a football stadium, the nucleus would be the size of a marble at the centre",
                    application: "Nuclear radius r = r₀A^(1/3) ≈ 1.2 × 10⁻¹⁵ m; atom radius ≈ 10⁻¹⁰ m; ratio ~10⁵",
                    question: "Calculate the radius of the ²³⁸U nucleus and compare it with the radius of the uranium atom (~1.8 Å)"
                },
                {
                    scenario: "Nuclear Density",
                    context: "Nuclear matter is extraordinarily dense — a teaspoon of nuclear material would weigh ~2 billion tonnes",
                    application: "ρ = m/V = A × mₙ / (4/3 π r³) = A × 1.67×10⁻²⁷ / (4/3 π (r₀A^(1/3))³) ≈ 2.3 × 10¹⁷ kg/m³",
                    question: "Calculate the density of nuclear matter and compare it to the density of water (1000 kg/m³) and gold (19,300 kg/m³)"
                }
            ],
            radioactivity: [
                {
                    scenario: "Radiocarbon Dating — Ötzi the Iceman",
                    context: "In 1991, a mummified body (Ötzi) was found in the Alps. Radiocarbon dating showed he lived ~5300 years ago",
                    application: "¹⁴C t½ = 5730 years; A = A₀e^(−λt); measure ratio of ¹⁴C/¹²C in sample; compare to atmospheric ratio",
                    question: "If a sample has 42% of the ¹⁴C activity of living wood, calculate the age of the sample. (t½ = 5730 years)"
                },
                {
                    scenario: "Nuclear Medicine — PET Scanning",
                    context: "PET scanners use positron-emitting isotopes (e.g., ¹⁸F, t½ = 110 min) to image metabolic activity in the brain and tumours",
                    application: "¹⁸F → ¹⁸O + β⁺ + νₑ; positron annihilates with electron → two 511 keV gamma photons detected in coincidence",
                    question: "Why is the short half-life of ¹⁸F (110 minutes) both an advantage and a challenge for nuclear medicine?"
                }
            ],
            nuclear_reactions: [
                {
                    scenario: "Mass of the Sun Converted to Energy",
                    context: "The Sun converts ~4.3 × 10⁹ kg of mass to energy every second via nuclear fusion",
                    application: "E = mc²; P = Δm/Δt × c² = 4.3×10⁹ × (3×10⁸)² ≈ 3.8 × 10²⁶ W",
                    question: "Verify that E = mc² gives the Sun's luminosity if 4.3 × 10⁹ kg of mass is converted per second"
                },
                {
                    scenario: "Little Boy — Hiroshima Atomic Bomb (1945)",
                    context: "The Hiroshima bomb used ~64 kg of U-235; only ~1 kg underwent fission; released energy equivalent to ~15,000 tonnes of TNT",
                    application: "~200 MeV per fission; 1 kg of U-235 ≈ 2.56 × 10²⁴ atoms → 2.56×10²⁴ × 200 MeV ≈ 8.2 × 10¹³ J",
                    question: "Calculate the energy released by fission of 1 kg of U-235, assuming 200 MeV per fission event"
                }
            ],
            fission_fusion: [
                {
                    scenario: "Chernobyl Disaster (1986)",
                    context: "The Chernobyl RBMK reactor had a design flaw (positive void coefficient) and lack of proper containment",
                    application: "Steam explosion and graphite fire; no containment building → release of radioactive isotopes; k > 1 uncontrolled",
                    question: "What is the multiplication factor k, and why is it so important for reactor safety?"
                },
                {
                    scenario: "ITER — International Fusion Experiment",
                    context: "ITER (France) is the world's largest tokamak; aims to produce 500 MW of fusion power from 50 MW input",
                    application: "D + T → ⁴He + n + 17.6 MeV; plasma at ~10⁸ K; magnetic confinement via superconducting magnets",
                    question: "Why does fusion require temperatures 10× higher than the Sun's core temperature? (Hint: consider density)"
                }
            ],
            particle_physics: [
                {
                    scenario: "Antimatter PET Scanning",
                    context: "PET scanners detect the two 511 keV gamma photons from positron-electron annihilation",
                    application: "e⁺ + e⁻ → 2γ; each photon has energy mₑc² = 0.511 MeV; photons emitted at 180° to conserve momentum",
                    question: "Show using conservation of energy and momentum why two photons (not one) must be produced in positron annihilation"
                },
                {
                    scenario: "CERN and the Higgs Boson Discovery (2012)",
                    context: "The LHC collided protons at 7 TeV centre-of-mass energy; discovered a boson at 125 GeV consistent with the Higgs",
                    application: "Standard Model predicted Higgs boson to explain why W and Z bosons have mass; Higgs field pervades all space",
                    question: "Why was the Higgs boson discovery so significant for the Standard Model?"
                }
            ]
        };
    }

    initializeAssessmentRubrics() {
        this.assessmentRubrics = {
            knowledgeLevel: {
                remember: {
                    description: "Recall nuclear equations, conservation laws, definitions, units",
                    verbs: ["State", "Write", "Define", "Name", "Recall", "List"],
                    example: "State the equation for radioactive decay law and define the decay constant λ"
                },
                understand: {
                    description: "Explain physical meaning of nuclear processes; interpret graphs; describe mechanisms",
                    verbs: ["Explain", "Describe", "Interpret", "Compare", "Summarise"],
                    example: "Explain why the half-life of a radioactive isotope is constant regardless of temperature or chemical environment"
                },
                apply: {
                    description: "Use equations to solve problems; balance nuclear equations; calculate binding energies",
                    verbs: ["Calculate", "Solve", "Determine", "Balance", "Apply"],
                    example: "Calculate the binding energy per nucleon of ¹⁶O given its atomic mass"
                },
                analyze: {
                    description: "Interpret decay curves; analyse nuclear reaction data; identify conservation law violations",
                    verbs: ["Analyse", "Deduce", "Identify", "Sketch", "Derive", "Interpret"],
                    example: "Analyse a graph of ln(activity) vs time to find the half-life and decay constant"
                },
                evaluate: {
                    description: "Evaluate experimental methods; assess nuclear energy arguments; critique models",
                    verbs: ["Evaluate", "Critique", "Justify", "Assess", "Discuss"],
                    example: "Evaluate the relative advantages and disadvantages of nuclear fission and fusion as energy sources"
                },
                create: {
                    description: "Design experiments; derive equations; model decay series; propose investigations",
                    verbs: ["Design", "Derive", "Plan", "Construct", "Model"],
                    example: "Design an experiment to measure the half-life of protactinium-234 and identify potential sources of error"
                }
            },
            understandingLevels: {
                novice: {
                    characteristics: [
                        "Recalls definitions but struggles to apply to novel situations",
                        "Balances simple nuclear equations by trial and error",
                        "Confuses activity with number of nuclei"
                    ],
                    support: [
                        "Provide worked examples with step-by-step conservation law checking",
                        "Use nuclear notation diagrams; colour-code protons and neutrons",
                        "Start with simple alpha/beta decay before multi-step chains"
                    ]
                },
                developing: {
                    characteristics: [
                        "Applies decay law to familiar problems",
                        "Draws and interprets decay curves",
                        "Understands qualitative differences between radiation types"
                    ],
                    support: [
                        "Novel contexts (medical, environmental, astrophysical)",
                        "Graph analysis tasks (ln(A) vs t)",
                        "Qualitative explanation questions before quantitative"
                    ]
                },
                proficient: {
                    characteristics: [
                        "Solves multi-step nuclear problems independently",
                        "Calculates binding energy and interprets curve",
                        "Evaluates experimental methods and errors"
                    ],
                    support: [
                        "Complex binding energy calculations across the curve",
                        "Experimental design and error analysis tasks",
                        "Cross-topic problems linking radioactivity and particle physics"
                    ]
                },
                expert: {
                    characteristics: [
                        "Derives decay law from differential equation",
                        "Spots conservation law violations in particle reactions",
                        "Critically evaluates nuclear energy policy arguments"
                    ],
                    support: [
                        "Derivation of t½ from dN/dt = −λN",
                        "Standard Model conservation law checks",
                        "Research and extended writing on nuclear energy"
                    ]
                }
            }
        };

        this.assessmentQuestions = {
            nuclear_structure: {
                remember: "State the meaning of the symbols A, Z, and N in nuclear notation ᴬ_Z X",
                understand: "Explain why isotopes of the same element have identical chemical properties but different nuclear properties",
                apply: "Calculate the radius of the ¹⁹⁷Au nucleus using r = r₀A^(1/3), where r₀ = 1.2 fm",
                analyze: "Sketch a graph of neutron number N vs proton number Z for stable nuclei (the band of stability). Annotate and explain its features",
                evaluate: "Evaluate the evidence from the Geiger-Marsden experiment that led Rutherford to propose the nuclear model of the atom",
                create: "Design a model or demonstration to convey the relative sizes of the atom and nucleus to a non-specialist audience"
            },
            radioactivity: {
                remember: "State the changes in A and Z that occur in (a) alpha decay, (b) beta-minus decay, (c) gamma emission",
                understand: "Explain why the beta-minus energy spectrum is continuous rather than discrete, and what this implies",
                apply: "A sample has initial activity 8000 Bq and half-life 15 minutes. Calculate its activity after 1 hour",
                analyze: "A graph of ln(activity) vs time is a straight line with gradient −0.0231 min⁻¹. Find the half-life and initial activity if the y-intercept is 6.91",
                evaluate: "Evaluate the statement: 'After two half-lives, all the radioactive material has decayed'",
                create: "Plan an experiment to measure the half-life of Ba-137m using a GM tube. Include how you will account for background radiation"
            },
            nuclear_reactions: {
                remember: "State Einstein's mass-energy equation and define each symbol",
                understand: "Explain why the binding energy per nucleon curve peaks at iron-56 and what this means for energy release in nuclear reactions",
                apply: "Calculate the binding energy of ²H (deuterium) given: M(²H) = 2.014102 u; mₚ = 1.007825 u; mₙ = 1.008665 u",
                analyze: "Using the binding energy per nucleon curve, explain why both fission of uranium and fusion of hydrogen release energy",
                evaluate: "A student claims: 'Nuclear reactions create energy from nothing.' Evaluate this claim using the concept of mass defect",
                create: "Derive the formula t½ = ln(2)/λ from the radioactive decay law N = N₀e^(−λt)"
            },
            fission_fusion: {
                remember: "State two differences between nuclear fission and nuclear fusion",
                understand: "Explain the role of the moderator in a thermal nuclear reactor",
                apply: "In the reaction ²³⁵U + n → ¹⁴⁰Xe + ⁹⁴Sr + 2n, verify conservation of nucleon number and charge",
                analyze: "Explain, using the binding energy curve, why the D-T fusion reaction (²H + ³H → ⁴He + n) releases 17.6 MeV",
                evaluate: "Evaluate nuclear fusion as a future energy source: consider fuel availability, energy output, waste, and technical challenges",
                create: "Design an information leaflet explaining to the public the difference between nuclear fission reactors and nuclear bombs, addressing common misconceptions"
            },
            particle_physics: {
                remember: "Name the six quarks and the six leptons in the Standard Model",
                understand: "Explain the quark-level process occurring in beta-minus decay of a neutron",
                apply: "Show that the annihilation e⁺ + e⁻ → 2γ conserves charge, lepton number, and energy. Calculate the energy of each photon",
                analyze: "The decay π⁺ → μ⁺ + νᵤ is observed. Verify that lepton number is conserved",
                evaluate: "A student proposes the decay p → e⁺ + γ. Evaluate whether this is possible given conservation laws",
                create: "Draw an annotated Feynman diagram for beta-minus decay at the quark level, labelling all particles and the exchange boson"
            }
        };
    }

    // ============================================================
    // TOPIC HANDLER: NUCLEAR STRUCTURE
    // ============================================================

    handleNuclearStructure(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Nuclear Structure",
            category: 'nuclear',
            summary: "The atomic nucleus contains protons and neutrons (nucleons) held together by the strong nuclear force. Nuclear properties are characterised by atomic number Z (protons), mass number A (total nucleons), and neutron number N = A − Z.",

            definitions: {
                nucleon: {
                    definition: "A particle found in the nucleus: either a proton or a neutron",
                    types: { proton: "charge +e; mass 1.007276 u", neutron: "charge 0; mass 1.008665 u" }
                },
                atomicNumber: {
                    symbol: "Z",
                    definition: "Number of protons in the nucleus; determines the chemical element",
                    note: "Z is the same as the number of electrons in a neutral atom"
                },
                massNumber: {
                    symbol: "A",
                    definition: "Total number of nucleons (protons + neutrons): A = Z + N"
                },
                neutronNumber: {
                    symbol: "N",
                    definition: "Number of neutrons: N = A − Z"
                },
                nuclide: {
                    definition: "A specific type of nucleus characterised by given values of Z and A",
                    notation: "Written as ᴬ_Z X, e.g., ²³⁸₉₂U"
                },
                isotope: {
                    definition: "Nuclei of the same element (same Z) with different numbers of neutrons (different A)",
                    chemicalProperties: "Isotopes have identical chemical properties (same electron configuration)",
                    nuclearProperties: "Isotopes differ in mass, stability, and nuclear behaviour",
                    examples: [
                        "¹H (protium): Z=1, N=0 — 99.985% of natural hydrogen",
                        "²H (deuterium): Z=1, N=1 — 0.015% of natural hydrogen; used in nuclear reactors",
                        "³H (tritium): Z=1, N=2 — radioactive (t½ = 12.3 years); used in fusion research",
                        "¹²C: Z=6, N=6 — standard atomic mass; 98.9% of carbon",
                        "¹⁴C: Z=6, N=8 — radioactive (t½ = 5730 years); used in radiocarbon dating"
                    ]
                },
                isobar: {
                    definition: "Nuclei with same A but different Z (different elements)",
                    example: "¹⁴₆C and ¹⁴₇N: both A=14 but different Z"
                }
            },

            nuclearNotation: {
                format: "ᴬ_Z X (standard); also written as X-A (e.g., U-238)",
                readingNotation: [
                    "Top left number = A (mass number = total nucleons)",
                    "Bottom left number = Z (atomic number = protons)",
                    "Symbol X identifies the element (and hence gives Z)"
                ],
                practiceExamples: [
                    { notation: "⁴₂He", Z: 2, N: 2, A: 4, meaning: "Helium-4; alpha particle; 2p + 2n" },
                    { notation: "²³⁵₉₂U", Z: 92, N: 143, A: 235, meaning: "Uranium-235; fissile isotope" },
                    { notation: "⁶⁰₂₇Co", Z: 27, N: 33, A: 60, meaning: "Cobalt-60; medical gamma source" },
                    { notation: "¹⁴₆C", Z: 6, N: 8, A: 14, meaning: "Carbon-14; radiocarbon dating" },
                    { notation: "¹³¹₅₃I", Z: 53, N: 78, A: 131, meaning: "Iodine-131; thyroid cancer therapy" }
                ]
            },

            nuclearForces: {
                strongNuclearForce: {
                    nature: "Attractive at separations 0.5–3 fm; strongly repulsive below ~0.5 fm",
                    range: "~3 × 10⁻¹⁵ m (3 fm); short-range unlike gravity and electrostatic",
                    chargeIndependence: "Acts equally between p-p, n-n, and p-n pairs",
                    saturation: "Each nucleon only interacts with its immediate neighbours",
                    vsElectrostatic: "At ~1 fm: strong force ~100× greater than electrostatic repulsion between protons"
                },
                electrostaticForce: {
                    nature: "Long-range repulsive force between protons (like charges repel)",
                    significance: "Grows with Z²; destabilises heavy nuclei where many protons repel each other",
                    implication: "Heavy nuclei (large Z) need excess neutrons (N > Z) to provide extra binding without adding repulsion"
                },
                bandOfStability: {
                    description: "Plot of N vs Z for all stable nuclides",
                    lightNuclei: "N ≈ Z (equal protons and neutrons); e.g., ¹²C (N=Z=6)",
                    heavyNuclei: "N > Z; e.g., ²⁰⁸Pb: Z=82, N=126; ratio N/Z ≈ 1.54",
                    tooManyNeutrons: "Nucleus undergoes β⁻ decay (neutron → proton)",
                    tooManyProtons: "Nucleus undergoes β⁺ decay or electron capture (proton → neutron)",
                    tooHeavy: "A > ~209: α decay or spontaneous fission"
                }
            },

            nuclearRadius: {
                formula: "r = r₀ × A^(1/3)",
                constants: { r0: "r₀ = 1.2 × 10⁻¹⁵ m = 1.2 fm (femtometres)" },
                derivedFrom: "Assumption that nuclei have constant density; volume ∝ A → radius ∝ A^(1/3)",
                examples: [
                    { nucleus: "¹H", A: 1, radius: "1.2 fm" },
                    { nucleus: "⁴He", A: 4, radius: "1.2 × 4^(1/3) = 1.2 × 1.587 = 1.90 fm" },
                    { nucleus: "¹²C", A: 12, radius: "1.2 × 12^(1/3) = 1.2 × 2.289 = 2.75 fm" },
                    { nucleus: "²³⁸U", A: 238, radius: "1.2 × 238^(1/3) = 1.2 × 6.20 = 7.44 fm" }
                ],
                atomComparison: "Atomic radius ~10⁻¹⁰ m; nuclear radius ~10⁻¹⁵ m; nucleus is ~10⁵ times smaller"
            },

            nuclearDensity: {
                derivation: {
                    step1: "Volume of nucleus: V = (4/3)π r³ = (4/3)π (r₀A^(1/3))³ = (4/3)π r₀³ A",
                    step2: "Mass of nucleus: m ≈ A × mₙ = A × 1.67 × 10⁻²⁷ kg",
                    step3: "Density: ρ = m/V = (A × 1.67×10⁻²⁷) / ((4/3)π r₀³ A)",
                    step4: "A cancels: ρ = mₙ / ((4/3)π r₀³) = constant for all nuclei"
                },
                value: "ρ ≈ 1.67×10⁻²⁷ / ((4/3)π × (1.2×10⁻¹⁵)³) ≈ 2.3 × 10¹⁷ kg/m³",
                comparison: "Nuclear density is 2.3 × 10¹⁷ kg/m³; water is 10³ kg/m³; ratio ≈ 2 × 10¹⁴",
                significance: "Constant density → nuclear volume is proportional to A (like an incompressible liquid — basis of liquid drop model)"
            },

            atomicMassUnit: {
                definition: "1 u defined as exactly 1/12 of the mass of a ¹²C atom",
                value: "1 u = 1.66054 × 10⁻²⁷ kg",
                energyEquivalent: "1 u ≡ 931.5 MeV/c² (from E = mc²)",
                particleMasses: {
                    proton: "1.007276 u = 938.3 MeV/c²",
                    neutron: "1.008665 u = 939.6 MeV/c²",
                    electron: "0.000549 u = 0.511 MeV/c²",
                    alphaParticle: "4.001506 u"
                }
            },

            workedExamples: [
                {
                    title: "Determine Z, N, A from notation",
                    problem: "For the nuclide ²³⁸₉₂U, determine the number of protons, neutrons, and nucleons",
                    solution: {
                        Z: "Z = 92 (bottom number) → 92 protons",
                        A: "A = 238 (top number) → 238 nucleons total",
                        N: "N = A − Z = 238 − 92 = 146 neutrons"
                    }
                },
                {
                    title: "Calculate nuclear radius",
                    problem: "Calculate the radius of a ²⁰⁸Pb nucleus (A = 208)",
                    solution: {
                        formula: "r = r₀ × A^(1/3) = 1.2 × 10⁻¹⁵ × 208^(1/3)",
                        cubeRoot: "208^(1/3) = (208)^(0.333) ≈ 5.926",
                        answer: "r = 1.2 × 10⁻¹⁵ × 5.926 = 7.11 × 10⁻¹⁵ m = 7.11 fm"
                    }
                },
                {
                    title: "Identify isotopes",
                    problem: "Which of the following are isotopes of carbon? ¹²₆C, ¹³₆C, ¹⁴₆C, ¹⁴₇N",
                    solution: {
                        carbon12: "¹²₆C: Z=6 → carbon; A=12 ✓",
                        carbon13: "¹³₆C: Z=6 → carbon; A=13 ✓ (isotope)",
                        carbon14: "¹⁴₆C: Z=6 → carbon; A=14 ✓ (isotope)",
                        nitrogen14: "¹⁴₇N: Z=7 → nitrogen; NOT carbon",
                        answer: "¹²C, ¹³C, and ¹⁴C are all isotopes of carbon (same Z=6, different A)"
                    }
                }
            ],

            commonErrors: [
                {
                    error: "Confusing mass number A with atomic number Z",
                    fix: "A is always the larger number (top); Z identifies the element (bottom). Check with periodic table."
                },
                {
                    error: "Thinking isotopes have different chemical properties",
                    fix: "Chemical properties depend only on Z (and hence the electron configuration). Isotopes have identical chemistry."
                },
                {
                    error: "Forgetting that r ∝ A^(1/3) not r ∝ A",
                    fix: "Volume ∝ A; since V = (4/3)πr³, we get r ∝ A^(1/3). Doubling A increases radius by factor 2^(1/3) ≈ 1.26, not 2."
                },
                {
                    error: "Claiming the strong force is just a stronger version of electrostatic force",
                    fix: "The strong force is a fundamentally different force; it is charge-independent (acts on p-p, n-n, p-n equally) and is short-range."
                }
            ],

            assessmentQuestions: {
                recall: [
                    "State the meaning of Z, A, and N for a nucleus",
                    "Define the term 'isotope' and give two examples for a named element",
                    "State the approximate radius of the proton (r₀ value)"
                ],
                understanding: [
                    "Explain why isotopes of the same element have the same chemical properties",
                    "Explain why heavy nuclei are unstable and tend to have N > Z",
                    "Describe the properties of the strong nuclear force"
                ],
                application: [
                    "For ⁵⁶₂₆Fe, state the number of protons, neutrons, and electrons in a neutral iron atom",
                    "Calculate the radius of ²⁷₁₃Al using r = 1.2 × 10⁻¹⁵ × A^(1/3)",
                    "Show that nuclear density is approximately constant and does not depend on A"
                ],
                analysis: [
                    "Sketch a graph of N vs Z for stable nuclides; annotate the regions where β⁻ and β⁺ decay are expected",
                    "Explain why the Geiger-Marsden alpha scattering experiment showed that the nuclear atom model must be correct"
                ]
            },

            relatedExperiments: this.nuclearTopics?.nuclear_structure?.relatedExperiments || [
                { id: 'geiger_marsden_scattering', name: "Geiger-Marsden Alpha Scattering Experiment" }
            ]
        };

        if (/isotope/i.test(input)) {
            content.focus = 'isotopes';
            content.highlightedSection = content.definitions.isotope;
        } else if (/radius|size|density/i.test(input)) {
            content.focus = 'nuclearRadius';
            content.highlightedSection = content.nuclearRadius;
        } else if (/force|strong/i.test(input)) {
            content.focus = 'nuclearForces';
            content.highlightedSection = content.nuclearForces;
        } else if (/notation|symbol|nuclide/i.test(input)) {
            content.focus = 'nuclearNotation';
            content.highlightedSection = content.nuclearNotation;
        }

        return content;
    }

    // ============================================================
    // TOPIC HANDLER: RADIOACTIVITY
    // ============================================================

    handleRadioactivity(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Radioactivity and Radioactive Decay",
            category: 'nuclear',
            summary: "Radioactive decay is the spontaneous, random emission of radiation from unstable nuclei. The three main types are alpha (α), beta (β), and gamma (γ). Large numbers of nuclei follow the exponential decay law: N = N₀e^(−λt), with half-life t½ = ln2/λ.",

            definitions: {
                radioactivity: {
                    definition: "Spontaneous emission of radiation from an unstable nucleus; cannot be controlled by temperature, pressure, or chemical state",
                    discovery: "Henri Becquerel (1896); Marie and Pierre Curie (1898) identified polonium and radium"
                },
                activity: {
                    symbol: "A",
                    unit: "Becquerel (Bq); 1 Bq = 1 decay per second",
                    olderUnit: "Curie (Ci); 1 Ci = 3.7 × 10¹⁰ Bq",
                    formula: "A = λN (activity = decay constant × number of undecayed nuclei)",
                    note: "Activity decreases as N decreases; follows same exponential law as N"
                },
                decayConstant: {
                    symbol: "λ",
                    unit: "s⁻¹ (per second)",
                    definition: "Probability of a given nucleus decaying per unit time; characteristic of isotope",
                    relationship: "A = λN; dN/dt = −λN"
                },
                halfLife: {
                    symbol: "t½",
                    definition: "Time for half the undecayed nuclei to decay; equivalently, time for activity to halve",
                    formula: "t½ = ln(2)/λ = 0.693/λ",
                    characteristic: "Constant — does not change as decay proceeds; independent of N₀",
                    ranges: "Ranges from microseconds (e.g., ²¹²Po: 0.3 μs) to billions of years (e.g., ²³⁸U: 4.47 × 10⁹ years)"
                }
            },

            decayTypes: {
                alpha: {
                    symbol: "α",
                    composition: "Helium-4 nucleus: 2 protons + 2 neutrons",
                    charge: "+2e",
                    mass: "4 u (≈ 4 × 1.66 × 10⁻²⁷ kg)",
                    changes: { Z: "decreases by 2", A: "decreases by 4", N: "decreases by 2" },
                    generalEquation: "ᴬ_Z X → ᴬ⁻⁴_{Z-2} Y + ⁴₂He",
                    examples: [
                        "²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He",
                        "²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He",
                        "²⁴¹₉₅Am → ²³⁷₉₃Np + ⁴₂He (smoke detectors)"
                    ],
                    energy: "Discrete: 4–9 MeV; determined by specific nuclear energy levels of parent",
                    penetration: "Very low: stopped by ~5 cm of air or thin paper/skin",
                    ionisation: "Very high: ~10,000 ion pairs per mm in air",
                    biologicalHazard: "Low external risk (stopped by skin); very high internal risk (inhaled/ingested radon gas)",
                    whyOccurs: "Heavy nuclei (Z > 82) gain stability by shedding α particles; reduces electrostatic repulsion"
                },
                betaMinus: {
                    symbol: "β⁻",
                    composition: "Fast electron",
                    charge: "−e",
                    mass: "1/1836 u ≈ 0.00055 u",
                    nuclearProcess: "n → p + e⁻ + ν̄ₑ (neutron converts to proton; emits electron and electron antineutrino)",
                    changes: { Z: "increases by 1", A: "unchanged", N: "decreases by 1" },
                    generalEquation: "ᴬ_Z X → ᴬ_{Z+1} Y + ⁰₋₁e + ν̄ₑ",
                    examples: [
                        "¹⁴₆C → ¹⁴₇N + ⁰₋₁e + ν̄ₑ (radiocarbon dating)",
                        "⁹⁰₃₈Sr → ⁹⁰₃₉Y + ⁰₋₁e + ν̄ₑ (strontium-90; in nuclear fallout)",
                        "³₁H → ³₂He + ⁰₋₁e + ν̄ₑ (tritium)"
                    ],
                    energy: "Continuous spectrum: 0 to E_max (energy shared between electron and antineutrino)",
                    neutrino: "Pauli predicted antineutrino (1930) to explain continuous spectrum and conserve energy/momentum",
                    penetration: "Intermediate: stopped by ~3 mm of aluminium",
                    ionisation: "Moderate: ~100 ion pairs per mm in air",
                    whyOccurs: "Neutron-rich nuclei (too many neutrons relative to protons); moves nucleus toward band of stability"
                },
                betaPlus: {
                    symbol: "β⁺",
                    composition: "Positron (antielectron)",
                    charge: "+e",
                    mass: "same as electron",
                    nuclearProcess: "p → n + e⁺ + νₑ (proton converts to neutron; emits positron and electron neutrino)",
                    changes: { Z: "decreases by 1", A: "unchanged", N: "increases by 1" },
                    generalEquation: "ᴬ_Z X → ᴬ_{Z-1} Y + ⁰₊₁e + νₑ",
                    examples: [
                        "¹⁸₉F → ¹⁸₈O + ⁰₊₁e + νₑ (PET scanning tracer)",
                        "²²₁₁Na → ²²₁₀Ne + ⁰₊₁e + νₑ",
                        "¹¹₆C → ¹¹₅B + ⁰₊₁e + νₑ"
                    ],
                    annihilation: "Positron quickly annihilates with an electron → 2 gamma photons of 0.511 MeV each",
                    application: "PET scanning: detects two 511 keV photons in coincidence to locate tumours",
                    whyOccurs: "Proton-rich nuclei; moves toward band of stability"
                },
                gamma: {
                    symbol: "γ",
                    composition: "High-energy electromagnetic photon",
                    charge: 0,
                    mass: 0,
                    changes: { Z: "unchanged", A: "unchanged", note: "Nucleus falls to lower energy (ground) state" },
                    generalEquation: "ᴬ_Z X* → ᴬ_Z X + γ",
                    examples: [
                        "⁶⁰₂₇Co* → ⁶⁰₂₇Co + γ (cobalt-60; medical radiotherapy)",
                        "⁹⁹ᵐ₄₃Tc → ⁹⁹₄₃Tc + γ (technetium-99m; diagnostic imaging)"
                    ],
                    energy: "Discrete: specific to nuclear energy level transitions (characteristic of nuclide)",
                    penetration: "Very high: reduced by cm of lead; follows exponential attenuation I = I₀e^(−μx)",
                    ionisation: "Very low: ~1 ion pair per mm",
                    timing: "Usually emitted immediately after α or β decay leaves daughter in excited state",
                    biologicalHazard: "Significant external hazard due to penetrating power"
                }
            },

            decayLaw: {
                differentialForm: "dN/dt = −λN  (rate of decay proportional to number of undecayed nuclei)",
                integratedForm: "N(t) = N₀ · e^(−λt)",
                activityForm: "A(t) = A₀ · e^(−λt)  where A₀ = λN₀",
                halfLifeDerivation: {
                    start: "At t = t½: N = N₀/2",
                    step1: "N₀/2 = N₀ · e^(−λt½)",
                    step2: "1/2 = e^(−λt½)",
                    step3: "ln(1/2) = −λt½",
                    step4: "−ln2 = −λt½",
                    result: "t½ = ln2/λ = 0.693/λ"
                },
                alternativeForm: "N = N₀ · (1/2)^(t/t½)  [useful when t is a whole-number multiple of t½]",
                linearisation: {
                    takeLog: "ln(N) = ln(N₀) − λt",
                    graphForm: "Plot ln(N) vs t: straight line, gradient = −λ, y-intercept = ln(N₀)"
                },
                probabilisticNature: "λ is the probability of any one nucleus decaying per unit time; individual decays are random; the law applies statistically to large numbers of nuclei"
            },

            radiationComparison: {
                table: [
                    { property: "Particle/wave", alpha: "Particle (⁴He nucleus)", beta: "Particle (e⁻ or e⁺)", gamma: "Electromagnetic wave (photon)" },
                    { property: "Charge", alpha: "+2e", beta: "±e", gamma: "0" },
                    { property: "Mass", alpha: "4 u", beta: "0.00055 u", gamma: "0" },
                    { property: "Speed", alpha: "~0.05c", beta: "up to ~0.99c", gamma: "c" },
                    { property: "Range in air", alpha: "~2–9 cm", beta: "~1 m", gamma: "very large (exponential attenuation)" },
                    { property: "Stopped by", alpha: "Paper / 5 cm air", beta: "3 mm Al", gamma: "Several cm Pb" },
                    { property: "Ionisation", alpha: "Very high (~10,000/mm)", beta: "Moderate (~100/mm)", gamma: "Very low (~1/mm)" },
                    { property: "Deflection by fields", alpha: "Yes (positive)", beta: "Yes (negative)", gamma: "No" }
                ]
            },

            dosimetry: {
                absorbedDose: {
                    symbol: "D",
                    unit: "Gray (Gy) = 1 J/kg",
                    formula: "D = energy deposited / mass of absorbing tissue"
                },
                equivalentDose: {
                    symbol: "H",
                    unit: "Sievert (Sv)",
                    formula: "H = D × w_R (radiation weighting factor)",
                    weightingFactors: {
                        gamma: "w_R = 1",
                        beta: "w_R = 1",
                        alpha: "w_R = 20",
                        neutron: "w_R = 3–20 depending on energy"
                    },
                    note: "Alpha is 20× more biologically damaging per unit absorbed dose"
                },
                backgroundRadiation: {
                    sources: ["Cosmic rays (~10%)", "Radon gas from ground (~50%)", "Food and drink (~15%)", "Medical procedures (~14%)", "Terrestrial gamma (~14%)"],
                    averageUK: "~2.7 mSv per year",
                    radon: "Radon-222 (from uranium decay in granite rocks) is biggest single contributor in UK"
                }
            },

            workedExamples: [
                {
                    title: "Balance an alpha decay equation",
                    problem: "Write the complete nuclear equation for the alpha decay of radium-226 (²²⁶₈₈Ra)",
                    solution: {
                        step1: "Alpha decay: Z decreases by 2, A decreases by 4",
                        step2: "New A = 226 − 4 = 222; new Z = 88 − 2 = 86",
                        step3: "Z = 86 is Radon (Rn) from the periodic table",
                        answer: "²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He",
                        check: "A: 226 = 222 + 4 ✓; Z: 88 = 86 + 2 ✓"
                    }
                },
                {
                    title: "Half-life calculation",
                    problem: "A radioactive sample has initial activity 12,000 Bq and half-life 20 minutes. Calculate the activity after 1 hour.",
                    solution: {
                        step1: "Number of half-lives: n = t/t½ = 60/20 = 3",
                        step2: "A = A₀ × (1/2)^n = 12,000 × (1/2)³ = 12,000/8 = 1,500 Bq",
                        check: "After 1st t½: 6000; after 2nd: 3000; after 3rd: 1500 Bq ✓"
                    }
                },
                {
                    title: "Decay constant from half-life",
                    problem: "Carbon-14 has a half-life of 5730 years. Find the decay constant in s⁻¹.",
                    solution: {
                        step1: "Convert t½ to seconds: 5730 × 365.25 × 24 × 3600 = 1.808 × 10¹¹ s",
                        step2: "λ = ln2/t½ = 0.6931/(1.808 × 10¹¹) = 3.83 × 10⁻¹² s⁻¹"
                    }
                },
                {
                    title: "Exponential decay — finding time elapsed",
                    problem: "An isotope has A₀ = 50,000 Bq and λ = 0.02 min⁻¹. Find the time for activity to fall to 3125 Bq.",
                    solution: {
                        method1_halflife: "t½ = 0.693/0.02 = 34.65 min; 50000 → 25000 → 12500 → 6250 → 3125: 4 half-lives → t = 4 × 34.65 = 138.6 min",
                        method2_exponential: "3125 = 50000 · e^(−0.02t) → e^(−0.02t) = 0.0625 → −0.02t = ln(0.0625) = −2.773 → t = 138.6 min ✓"
                    }
                },
                {
                    title: "Finding half-life from ln(A) vs t graph",
                    problem: "A ln(A) vs t graph is a straight line. The gradient is −0.0693 hour⁻¹. Find the half-life.",
                    solution: {
                        step1: "gradient = −λ = −0.0693 hour⁻¹ → λ = 0.0693 hour⁻¹",
                        step2: "t½ = ln2/λ = 0.6931/0.0693 = 10.0 hours"
                    }
                }
            ],

            commonErrors: [
                {
                    error: "Thinking that after 2 half-lives, all material has decayed",
                    fix: "After n half-lives, fraction remaining = (1/2)^n; after 2 t½ → 25% remains; never truly zero."
                },
                {
                    error: "Confusing activity A with number of nuclei N",
                    fix: "A = λN; activity depends on both N and λ. An isotope with large λ can have high activity even with small N."
                },
                {
                    error: "Writing an electron as ⁰₀e instead of ⁰₋₁e in β⁻ decay",
                    fix: "The beta-minus particle has Z = −1 (charge = −e) and A = 0. Correct notation: ⁰₋₁e."
                },
                {
                    error: "Using the decay law N = N₀e^(−λt) without subtracting background",
                    fix: "In experiments, always measure and subtract background count rate before applying the decay law."
                },
                {
                    error: "Assuming all radiation types have the same biological risk",
                    fix: "Alpha has weighting factor 20×; same absorbed dose (Gy) delivers 20× higher equivalent dose (Sv) for alpha vs gamma."
                }
            ],

            assessmentQuestions: {
                recall: [
                    "State the change in proton number Z and nucleon number A for (a) α decay, (b) β⁻ decay, (c) γ emission",
                    "Write the equation relating half-life to the decay constant λ",
                    "State two differences between alpha and beta radiation in terms of penetrating power and ionising ability"
                ],
                understanding: [
                    "Explain why the beta-minus energy spectrum is continuous while the alpha spectrum is discrete",
                    "Explain why the half-life of a radioactive isotope is independent of temperature, pressure, or chemical environment",
                    "Describe what is meant by 'background radiation' and state three natural sources"
                ],
                application: [
                    "A sample of ²²²Rn (t½ = 3.82 days) has initial activity 40,000 Bq. Calculate its activity after 19.1 days",
                    "The activity of a sample falls from 8000 Bq to 500 Bq in 24 hours. Find the half-life",
                    "Write a balanced nuclear equation for the β⁻ decay of ¹³¹₅₃I"
                ],
                analysis: [
                    "A graph of ln(activity/Bq) vs time/hours is plotted for a radioactive sample. Gradient = −0.347 h⁻¹. Find λ and t½ and identify the isotope if the half-life matches iodine-131 (t½ = 192 h) or carbon-14 (t½ = 5730 years)",
                    "Explain why α-emitting sources are particularly dangerous if ingested or inhaled, despite being easily stopped externally"
                ]
            },

            relatedExperiments: this.nuclearTopics?.radioactivity?.relatedExperiments || [
                { id: 'radioactive_decay_halflife', name: "Radioactive Decay and Half-Life" },
                { id: 'radiation_absorption', name: "Radiation Absorption and Penetration" },
                { id: 'cloud_chamber', name: "Cloud Chamber" }
            ]
        };

        if (/half.?life|halflife/i.test(input)) {
            content.focus = 'halfLife';
            content.highlightedSection = content.decayLaw;
        } else if (/alpha/i.test(input)) {
            content.focus = 'alphaDecay';
            content.highlightedSection = content.decayTypes.alpha;
        } else if (/beta/i.test(input)) {
            content.focus = 'betaDecay';
            content.highlightedSection = { betaMinus: content.decayTypes.betaMinus, betaPlus: content.decayTypes.betaPlus };
        } else if (/gamma/i.test(input)) {
            content.focus = 'gammaEmission';
            content.highlightedSection = content.decayTypes.gamma;
        } else if (/decay.*law|exponential/i.test(input)) {
            content.focus = 'decayLaw';
            content.highlightedSection = content.decayLaw;
        } else if (/dose|sievert|gray|hazard/i.test(input)) {
            content.focus = 'dosimetry';
            content.highlightedSection = content.dosimetry;
        }

        return content;
    }

    // ============================================================
    // TOPIC HANDLER: NUCLEAR REACTIONS
    // ============================================================

    handleNuclearReactions(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Nuclear Reactions and Binding Energy",
            category: 'nuclear',
            summary: "Nuclear reactions conserve nucleon number A, charge Z, mass-energy, and momentum. The mass defect of a nucleus (Δm) corresponds to its binding energy E_B = Δm·c². Binding energy per nucleon peaks at ⁵⁶Fe and determines whether fission or fusion releases energy.",

            conservationLaws: {
                introduction: "Every nuclear reaction must satisfy all conservation laws simultaneously. These are used to balance nuclear equations and to determine whether a reaction is allowed.",
                laws: [
                    {
                        law: "Conservation of Nucleon Number",
                        statement: "Total number of nucleons A is the same before and after: Σ A_reactants = Σ A_products",
                        example: "²³⁸U + ⁴He → ²⁴¹Pu + ¹n: 238+4 = 241+1 = 242 ✓"
                    },
                    {
                        law: "Conservation of Charge (Proton Number)",
                        statement: "Total charge Z is the same before and after: Σ Z_reactants = Σ Z_products",
                        example: "²³⁸U + ⁴He → ²⁴¹Pu + ¹n: 92+2 = 94+0 = 94 ✓"
                    },
                    {
                        law: "Conservation of Mass-Energy",
                        statement: "Total relativistic energy (kinetic energy + rest mass energy) is conserved; E = mc²",
                        implication: "If product masses are less than reactant masses, kinetic energy is released (exothermic, Q > 0)"
                    },
                    {
                        law: "Conservation of Momentum",
                        statement: "Total linear momentum is conserved; determines how energy is distributed among products"
                    },
                    {
                        law: "Conservation of Angular Momentum (Spin)",
                        statement: "Total spin is conserved; governs allowed decay modes"
                    }
                ],
                balancingMethod: {
                    steps: [
                        "Step 1: Write all known nuclei with their A and Z values",
                        "Step 2: Sum all A values on left side and right side; they must be equal",
                        "Step 3: Sum all Z values on left side and right side; they must be equal",
                        "Step 4: Use discrepancies to identify unknown particle (A and Z uniquely identify it)",
                        "Step 5: Look up element from periodic table using Z value",
                        "Step 6: Check both A and Z balance exactly"
                    ]
                }
            },

            massEnergyEquivalence: {
                equation: "E = mc²",
                einsteinContext: "Published by Einstein in 1905; shows mass and energy are equivalent; the proportionality constant is c² = (3×10⁸)² = 9×10¹⁶ J/kg",
                practicalConversion: {
                    joules: "E(J) = Δm(kg) × (3.00 × 10⁸)²",
                    MeV: "E(MeV) = Δm(u) × 931.5",
                    note: "1 u = 931.5 MeV/c²; most convenient for nuclear calculations"
                },
                scale: {
                    chemical: "Chemical bond energy: ~few eV per bond",
                    nuclear: "Nuclear binding energy: ~MeV per nucleon (10⁶ × larger than chemical)"
                }
            },

            massDefect: {
                definition: "Δm = (sum of masses of individual nucleons) − (actual nuclear mass); always positive for bound nucleus",
                twoForms: {
                    nuclearMasses: "Δm = Z·mₚ + N·mₙ − M_nucleus",
                    atomicMasses: "Δm = Z·M(¹H) + N·mₙ − M_atom  [electron masses cancel; use this form with data tables]"
                },
                physicalMeaning: "Mass defect represents the mass equivalent of energy released when the nucleus formed from free nucleons; this energy is now the binding energy"
            },

            bindingEnergy: {
                definition: "Energy required to completely separate a nucleus into its constituent free nucleons; equivalent to energy released when nucleus is assembled from free nucleons",
                formula: "E_B = Δm × c² = Δm(u) × 931.5 MeV",
                bindingEnergyPerNucleon: "E_B/A: average energy per nucleon; higher value = more stable nucleus",
                calculationSteps: [
                    "1. Find Z and N from the notation ᴬ_Z X",
                    "2. Calculate Msep = Z × M(¹H) + N × mₙ (in u, using atomic masses)",
                    "3. Find Δm = Msep − M_atom (in u)",
                    "4. Calculate E_B = Δm × 931.5 (MeV)",
                    "5. Divide by A to get E_B/A (MeV/nucleon)"
                ],
                workedExample: {
                    nucleus: "¹²₆C",
                    Z: 6, N: 6, A: 12,
                    M_atom: "12.000000 u (by definition)",
                    MH: "1.007825 u",
                    mn: "1.008665 u",
                    Msep: "6 × 1.007825 + 6 × 1.008665 = 6.046950 + 6.051990 = 12.098940 u",
                    deltaM: "Δm = 12.098940 − 12.000000 = 0.098940 u",
                    EB: "E_B = 0.098940 × 931.5 = 92.16 MeV",
                    EBperA: "E_B/A = 92.16/12 = 7.68 MeV/nucleon"
                },
                bindingEnergyGraph: {
                    axes: "x-axis: mass number A (0 to 240); y-axis: binding energy per nucleon E_B/A (0 to 10 MeV)",
                    keyFeatures: [
                        "Starts at 0 for ¹H (no binding — lone proton)",
                        "Rapid rise for light nuclei; ⁴He unusually high at 7.07 MeV/nucleon (doubly magic)",
                        "Peak at ⁵⁶Fe: ~8.79 MeV/nucleon — most stable nucleus in nature",
                        "Gradual fall for A > 56: electrostatic repulsion grows, reducing binding per nucleon",
                        "U-235 at ~7.59 MeV/nucleon; substantially below peak"
                    ],
                    fissionImplication: "Splitting ²³⁵U (~7.59 MeV/A) into mid-mass fragments (~8.5 MeV/A) → gain ~0.9 MeV/nucleon × 235 ≈ 200 MeV per fission",
                    fusionImplication: "Fusing ²H (1.11 MeV/A) + ³H (2.83 MeV/A) → ⁴He (7.07 MeV/A) + n → gain → 17.6 MeV"
                }
            },

            qValue: {
                definition: "Energy released (Q > 0) or absorbed (Q < 0) in a nuclear reaction",
                formula: "Q = (Σm_reactants − Σm_products) × 931.5 MeV (masses in atomic mass units)",
                interpretation: {
                    positive: "Q > 0: exothermic; kinetic energy of products exceeds kinetic energy of reactants; energy released",
                    negative: "Q < 0: endothermic; requires kinetic energy input; threshold energy needed"
                },
                example: {
                    reaction: "²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3¹₀n",
                    massReactants: "M(²³⁵U) + M(n) = 235.043928 + 1.008665 = 236.052593 u",
                    massProducts: "M(¹⁴¹Ba) + M(⁹²Kr) + 3M(n) = 140.914411 + 91.926153 + 3(1.008665) = 235.866894 u",
                    massDefectReaction: "Δm = 236.052593 − 235.866894 = 0.185699 u",
                    qValue: "Q = 0.185699 × 931.5 = 172.9 MeV ≈ 173 MeV (close to ~200 MeV total when decay energy included)"
                }
            },

            balancingNuclearEquations: {
                rules: [
                    "ΣA (left) = ΣA (right): nucleon number conserved",
                    "ΣZ (left) = ΣZ (right): charge conserved",
                    "Electrons ⁰₋₁e count as Z = −1, A = 0",
                    "Positrons ⁰₊₁e count as Z = +1, A = 0",
                    "Neutrons ¹₀n count as Z = 0, A = 1",
                    "Gamma photons γ carry no A or Z"
                ],
                commonParticles: {
                    proton: "¹₁p or ¹₁H",
                    neutron: "¹₀n",
                    alphaParticle: "⁴₂He",
                    betaMinus: "⁰₋₁e",
                    betaPlus: "⁰₊₁e",
                    gammaRay: "γ (no A, no Z)"
                },
                examples: [
                    {
                        problem: "Complete: ²⁷₁₃Al + ⁴₂He → ? + ¹₀n",
                        solution: "A: 27+4 = A+1 → A=30; Z: 13+2 = Z+0 → Z=15 → Phosphorus → ³⁰₁₅P",
                        answer: "²⁷₁₃Al + ⁴₂He → ³⁰₁₅P + ¹₀n (Rutherford's 1919 transmutation)"
                    },
                    {
                        problem: "Complete: ²³⁵₉₂U + ¹₀n → ¹⁴⁰₅₄Xe + ? + 2¹₀n",
                        solution: "A: 235+1 = 140+A+2 → A=94; Z: 92+0 = 54+Z+0 → Z=38 → Strontium → ⁹⁴₃₈Sr",
                        answer: "²³⁵₉₂U + ¹₀n → ¹⁴⁰₅₄Xe + ⁹⁴₃₈Sr + 2¹₀n"
                    }
                ]
            },

            workedExamples: [
                {
                    title: "Calculate binding energy of ⁴He",
                    given: "M(⁴He) = 4.002602 u; M(¹H) = 1.007825 u; mₙ = 1.008665 u",
                    solution: {
                        sep: "Msep = 2 × 1.007825 + 2 × 1.008665 = 2.015650 + 2.017330 = 4.032980 u",
                        dm: "Δm = 4.032980 − 4.002602 = 0.030378 u",
                        eb: "E_B = 0.030378 × 931.5 = 28.30 MeV",
                        perA: "E_B/A = 28.30/4 = 7.07 MeV/nucleon"
                    }
                },
                {
                    title: "Find Q-value for D-T fusion",
                    reaction: "²₁H + ³₁H → ⁴₂He + ¹₀n",
                    given: "M(²H) = 2.014102 u; M(³H) = 3.016049 u; M(⁴He) = 4.002602 u; mₙ = 1.008665 u",
                    solution: {
                        reactants: "2.014102 + 3.016049 = 5.030151 u",
                        products: "4.002602 + 1.008665 = 5.011267 u",
                        dm: "Δm = 5.030151 − 5.011267 = 0.018884 u",
                        q: "Q = 0.018884 × 931.5 = 17.59 MeV ≈ 17.6 MeV ✓"
                    }
                }
            ],

            commonErrors: [
                {
                    error: "Not checking both A and Z balance in nuclear equations",
                    fix: "Always check both separately: ΣA left = ΣA right AND ΣZ left = ΣZ right."
                },
                {
                    error: "Using nuclear masses in binding energy formula without accounting for electrons",
                    fix: "Use atomic masses consistently with M(¹H) instead of mₚ; electron masses cancel."
                },
                {
                    error: "Thinking higher total binding energy means higher stability",
                    fix: "Use binding energy PER NUCLEON (E_B/A) to compare stability; total E_B naturally increases with A."
                },
                {
                    error: "Forgetting that E = mc² applies to ALL energy, not just nuclear reactions",
                    fix: "Every process involving energy has an associated mass change; nuclear reactions just have large enough Δm to measure."
                }
            ],

            assessmentQuestions: {
                recall: [
                    "State Einstein's mass-energy equation and define each symbol",
                    "Define binding energy and binding energy per nucleon",
                    "State the two conservation laws that must be satisfied in every nuclear reaction"
                ],
                understanding: [
                    "Explain why the binding energy per nucleon peaks at iron-56",
                    "Explain how the binding energy curve shows that both fission and fusion can release energy",
                    "Explain what is meant by the mass defect of a nucleus and how it relates to binding energy"
                ],
                application: [
                    "Calculate the binding energy per nucleon for ¹⁶O: M(¹⁶O) = 15.994915 u",
                    "Complete and balance: ²³⁵₉₂U + ¹₀n → ¹⁰³₄₁Nb + ? + 3¹₀n",
                    "Calculate the energy released when 1 kg of mass is completely converted to energy (E = mc²)"
                ]
            },

            relatedExperiments: this.nuclearTopics?.nuclear_reactions?.relatedExperiments || [
                { id: 'binding_energy_investigation', name: "Binding Energy and Mass Defect Investigation" }
            ]
        };

        if (/binding.*energy|mass.*defect/i.test(input)) {
            content.focus = 'bindingEnergy';
            content.highlightedSection = content.bindingEnergy;
        } else if (/q.value|energy.*release/i.test(input)) {
            content.focus = 'qValue';
            content.highlightedSection = content.qValue;
        } else if (/balance|equation|conserv/i.test(input)) {
            content.focus = 'balancingEquations';
            content.highlightedSection = content.balancingNuclearEquations;
        } else if (/e.*mc|mass.*energy/i.test(input)) {
            content.focus = 'massEnergy';
            content.highlightedSection = content.massEnergyEquivalence;
        }

        return content;
    }

    // ============================================================
    // TOPIC HANDLER: FISSION AND FUSION
    // ============================================================

    handleFissionFusion(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Nuclear Fission, Fusion and Nuclear Energy",
            category: 'nuclear',
            summary: "Fission splits heavy nuclei (releasing ~200 MeV per event); fusion combines light nuclei (releasing ~17.6 MeV per D-T reaction). Both move nuclei toward the binding energy peak at ⁵⁶Fe. Fission powers nuclear reactors; fusion powers stars and is being developed for future energy.",

            fission: {
                definition: "Splitting of a heavy fissile nucleus (e.g., ²³⁵U, ²³⁹Pu) into two lighter daughter nuclei plus neutrons and energy",
                typicalReaction: "²³⁵₉₂U + ¹₀n → ²³⁶₉₂U* → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3¹₀n + ~200 MeV",
                mechanism: {
                    step1: "Slow (thermal) neutron absorbed by ²³⁵U → highly excited compound nucleus ²³⁶U*",
                    step2: "²³⁶U* oscillates; if deformation sufficient, electrostatic repulsion overcomes strong force",
                    step3: "Nucleus splits into two mid-mass fragments + 2–3 fast neutrons + ~200 MeV energy",
                    step4: "Daughter nuclei are neutron-rich; undergo several β⁻ decays to reach stability"
                },
                energyRelease: {
                    perFission: "~200 MeV = 3.2 × 10⁻¹¹ J",
                    per_kgU235: "~8.2 × 10¹³ J/kg ≈ energy from 20,000 tonnes of coal",
                    distribution: {
                        fissionFragmentKE: "~165 MeV (83%) — becomes heat in reactor",
                        promptGammaRays: "~7 MeV",
                        fissionNeutronKE: "~5 MeV",
                        betaDecayDaughters: "~20 MeV (delayed — from radioactive daughters)"
                    },
                    bindingEnergyExplanation: "U-235 has E_B/A ≈ 7.59 MeV/nucleon; Ba/Kr region ≈ 8.5 MeV/nucleon; gain ≈ 0.9 MeV/nucleon × 235 ≈ 210 MeV"
                },
                fissileVsFertile: {
                    fissile: "Undergoes fission with thermal neutrons: ²³⁵U (0.72% of natural uranium), ²³⁹Pu, ²³³U",
                    fertile: "Absorbs neutrons to become fissile: ²³⁸U (99.28%) → ²³⁹Pu; ²³²Th → ²³³U",
                    enrichment: "Natural uranium enriched to 3–5% ²³⁵U for reactor fuel; >90% for weapons"
                },
                chainReaction: {
                    mechanism: "Each fission releases 2–3 neutrons; each can trigger another fission → chain reaction",
                    multiplicationFactor: {
                        definition: "k = average number of neutrons from one fission that cause another fission",
                        subcritical: "k < 1: reaction dies out (neutrons lost/absorbed faster than produced)",
                        critical: "k = 1: steady, self-sustaining reaction → controlled nuclear reactor",
                        supercritical: "k > 1: exponentially increasing reaction → nuclear explosion"
                    },
                    criticalMass: "Minimum mass of fissile material for sustained chain reaction; depends on geometry and purity (~52 kg for bare ²³⁵U sphere; less with reflector or optimal geometry)"
                },
                nuclearReactor: {
                    purpose: "Maintain controlled fission chain reaction (k = 1) to produce heat → electricity",
                    components: {
                        fuel: "Enriched UO₂ pellets in zirconium alloy cladding rods; ~3–5% ²³⁵U",
                        moderator: {
                            purpose: "Slows fast fission neutrons to thermal energies (0.025 eV) where ²³⁵U fission cross-section is high",
                            materials: "Light water (H₂O) — most common; heavy water (D₂O); graphite"
                        },
                        controlRods: {
                            purpose: "Absorb excess neutrons to maintain k = 1; insert deeper to reduce power; withdraw to increase power",
                            materials: "Boron, hafnium, cadmium (high neutron absorption cross-section)"
                        },
                        coolant: {
                            purpose: "Transfer heat from reactor core to steam generator",
                            materials: "Pressurised water (PWR/BWR); CO₂ (AGR); sodium (fast reactor)"
                        },
                        pressureVessel: "Contains core; high-strength steel; prevents release of radioactive material",
                        containment: "Outer reinforced concrete shell; prevents release in accident"
                    },
                    PWR: {
                        name: "Pressurised Water Reactor — world's most common type",
                        primaryLoop: "Water at ~155 bar; liquid above 100°C; circulates through core; carries heat",
                        heatExchanger: "Primary → secondary loop via steam generator",
                        secondaryLoop: "Water flashes to steam at lower pressure; drives turbine → generator",
                        efficiency: "~33% thermal efficiency (rest rejected as waste heat)"
                    },
                    advantages: ["Low CO₂ emissions during operation", "High energy density", "Reliable baseload power", "Small land area per GW"],
                    disadvantages: ["Radioactive waste: high-level waste remains hazardous for thousands of years", "Risk of serious accidents (Chernobyl 1986, Fukushima 2011)", "High construction cost and time", "Nuclear proliferation concerns"]
                }
            },

            fusion: {
                definition: "Combining two light nuclei to form a heavier nucleus with release of energy; products have higher binding energy per nucleon",
                mainReaction: {
                    equation: "²₁H + ³₁H → ⁴₂He + ¹₀n + 17.6 MeV",
                    components: "Deuterium (D = ²H, from seawater) + Tritium (T = ³H, bred from lithium) → Helium-4 + neutron",
                    energyPerReaction: "17.6 MeV = 2.82 × 10⁻¹² J",
                    energyPerKg: "~3.4 × 10¹⁴ J/kg of D-T fuel (about 4× more than fission per kg)"
                },
                bindingEnergyExplanation: {
                    deuterium: "E_B/A (²H) = 1.11 MeV/nucleon",
                    tritium: "E_B/A (³H) = 2.83 MeV/nucleon",
                    helium4: "E_B/A (⁴He) = 7.07 MeV/nucleon",
                    gain: "Products have much higher binding energy per nucleon → excess energy released"
                },
                conditions: {
                    temperature: "~10⁸ K (100 million kelvin) required; must overcome Coulomb barrier between two positive nuclei",
                    coulombBarrier: "Two nuclei must be ~1 fm apart for strong force to take over; classical barrier ≈ few MeV; quantum tunnelling allows some fusion at lower energies",
                    density: "High plasma density → more frequent collisions → more fusion events",
                    confinementTime: "Plasma must be confined long enough for net energy output",
                    lawsonCriterion: "For net energy: nτ > 10²⁰ s/m³ (density × confinement time); also expressed with temperature included"
                },
                confinement: {
                    magnetic: {
                        name: "Magnetic Confinement Fusion (MCF)",
                        principle: "Charged plasma particles follow magnetic field lines; toroidal (donut-shaped) magnetic field confines plasma",
                        tokamak: "Most successful MCF design; ITER (France, under construction) aims for Q = 10 (500 MW output from 50 MW input); JET (UK): Q ≈ 0.67 achieved 2022",
                        challenges: "Plasma instabilities; first-wall material damage from neutrons; sustaining plasma at 10⁸ K"
                    },
                    inertial: {
                        name: "Inertial Confinement Fusion (ICF)",
                        principle: "Powerful lasers compress D-T pellet from all sides; temperature and density reached for brief fusion burn",
                        NIF: "National Ignition Facility (USA): achieved ignition (Q > 1) in December 2022 — historic milestone",
                        challenges: "Laser efficiency; pellet symmetry; repetition rate for power plant"
                    }
                },
                stellarFusion: {
                    ppChain: "In stars like the Sun: 4¹H → ⁴He + 2e⁺ + 2νₑ + 26.7 MeV (proton-proton chain)",
                    sunPower: "Sun converts ~4.3 × 10⁹ kg/s of mass to energy; luminosity = 3.8 × 10²⁶ W",
                    stellarLifecycle: "Stars fuse hydrogen → helium → carbon → oxygen → ... → iron; beyond iron, energy cannot be released by fusion → star collapses"
                },
                advantages: [
                    "Virtually unlimited fuel: deuterium from seawater (~10³⁰ kg equivalent); lithium for tritium breeding",
                    "No long-lived radioactive waste: helium product is inert; tritium is short-lived (t½ = 12.3 years); activated structural materials are manageable",
                    "Inherently safe: plasma quenches in seconds if disrupted; no chain reaction; no possibility of explosion",
                    "No CO₂ emissions during operation"
                ],
                challenges: [
                    "Achieving and sustaining plasma at 10⁸ K remains extremely challenging",
                    "No commercial reactor exists; ITER aiming for Q = 10 by ~2035",
                    "14 MeV neutrons from D-T fusion damage first-wall materials; require replacement",
                    "Tritium is scarce; must be bred from lithium using fusion neutrons",
                    "Very high cost of experimental and demonstration reactors"
                ]
            },

            comparison: {
                fissionVsFusion: [
                    { aspect: "Principle", fission: "Heavy nucleus splits (A~235→ two A~120)", fusion: "Light nuclei combine (A~2,3 → A~4)" },
                    { aspect: "Typical reaction", fission: "²³⁵U + n → Ba + Kr + 3n + 200 MeV", fusion: "D + T → ⁴He + n + 17.6 MeV" },
                    { aspect: "Energy per kg fuel", fission: "~8 × 10¹³ J/kg (U-235)", fusion: "~3 × 10¹⁴ J/kg (D-T)" },
                    { aspect: "Fuel availability", fission: "Uranium is limited (geopolitical issues)", fusion: "Deuterium from seawater (vast; ~centuries of supply)" },
                    { aspect: "Radioactive waste", fission: "High-level, long-lived (tens of thousands of years)", fusion: "Short-lived; activated materials manageable (decades)" },
                    { aspect: "Safety", fission: "Risk of meltdown if cooling fails; radioactive release possible", fusion: "Inherently safe; plasma quenches instantly if disrupted" },
                    { aspect: "Technology readiness", fission: "Commercial since 1950s; 400+ reactors globally", fusion: "Still experimental; first commercial fusion ~2040–2050s" },
                    { aspect: "CO₂ emissions", fission: "Near zero operational; low lifecycle", fusion: "Near zero operational; low lifecycle" }
                ]
            },

            workedExamples: [
                {
                    title: "Energy from fission of 1 kg of U-235",
                    solution: {
                        atomsPerKg: "N = (1000 g / 235 g/mol) × 6.022×10²³ = 2.563 × 10²⁴ atoms",
                        energyPerFission: "~200 MeV = 200 × 1.60×10⁻¹³ = 3.20 × 10⁻¹¹ J",
                        totalEnergy: "E = 2.563×10²⁴ × 3.20×10⁻¹¹ = 8.20 × 10¹³ J",
                        comparison: "≈ 80 TJ ≈ energy from burning ~20,000 tonnes of coal"
                    }
                },
                {
                    title: "Power output of a nuclear reactor",
                    problem: "A reactor fissions 1.2 kg of U-235 per day. Calculate the thermal power output.",
                    solution: {
                        energyPerDay: "E = 1.2 × 8.20×10¹³ = 9.84 × 10¹³ J",
                        power: "P = E/t = 9.84×10¹³ / (24×3600) = 1.14 × 10⁹ W = 1.14 GW (thermal)",
                        electrical: "At ~33% efficiency: P_electrical ≈ 380 MW"
                    }
                },
                {
                    title: "Balance a fission equation",
                    problem: "Complete: ²³⁵₉₂U + ¹₀n → ¹⁴⁴₅₅Cs + ? + 3 ¹₀n",
                    solution: {
                        A: "235 + 1 = 144 + A + 3 → A = 236 − 147 = 89",
                        Z: "92 + 0 = 55 + Z + 0 → Z = 37 → Rubidium (Rb)",
                        answer: "²³⁵₉₂U + ¹₀n → ¹⁴⁴₅₅Cs + ⁸⁹₃₇Rb + 3 ¹₀n"
                    }
                }
            ],

            commonErrors: [
                {
                    error: "Confusing fusion (combining light nuclei) with fission (splitting heavy nuclei)",
                    fix: "Fusion: FUSing together; Fission: Splitting (like 'fissure'). Both release energy by moving toward iron-56 on binding energy curve."
                },
                {
                    error: "Thinking a nuclear reactor can explode like a nuclear bomb",
                    fix: "Reactor fuel is enriched only to 3–5% U-235 (weapon needs >90%); k is maintained at exactly 1; no supercritical assembly is possible by design."
                },
                {
                    error: "Believing fusion produces large long-lived radioactive waste",
                    fix: "D-T fusion produces helium (stable) and neutrons; neutrons activate structural materials but products have much shorter half-lives than fission waste."
                },
                {
                    error: "Stating that energy comes from 'splitting the atom' (electrons and nucleus)",
                    fix: "Nuclear fission energy comes from the mass difference between reactant and product nuclei — not from chemical (electron) separation."
                }
            ],

            assessmentQuestions: {
                recall: [
                    "State two differences between nuclear fission and nuclear fusion",
                    "Name the two roles of water in a pressurised water reactor (PWR)",
                    "Write an equation for the deuterium-tritium fusion reaction"
                ],
                understanding: [
                    "Explain, using the binding energy per nucleon curve, why both fission and fusion release energy",
                    "Explain the role of control rods in a nuclear reactor and how they are used",
                    "Explain why such extreme temperatures (~10⁸ K) are needed for nuclear fusion"
                ],
                application: [
                    "Calculate the energy released in MeV by the reaction: ²H + ²H → ³He + n, given the relevant atomic masses",
                    "A reactor has electrical output 500 MW at efficiency 33%. How many kg of U-235 does it consume per year?",
                    "Complete and balance: ²³⁵U + n → ¹³⁷Cs + ? + 2n"
                ],
                evaluate: [
                    "Evaluate nuclear fusion as an energy source for the 21st century: consider fuel, waste, safety, and technological readiness",
                    "Compare nuclear fission power with fossil fuels and renewable energy in terms of energy density, emissions, waste, and safety"
                ]
            },

            relatedExperiments: this.nuclearTopics?.fission_fusion?.relatedExperiments || [
                { id: 'binding_energy_investigation', name: "Binding Energy and Mass Defect Investigation" }
            ]
        };

        if (/fission/i.test(input) && !/fusion/i.test(input)) {
            content.focus = 'fission';
            content.highlightedSection = content.fission;
        } else if (/fusion/i.test(input) && !/fission/i.test(input)) {
            content.focus = 'fusion';
            content.highlightedSection = content.fusion;
        } else if (/reactor|moderator|control.*rod|coolant/i.test(input)) {
            content.focus = 'reactor';
            content.highlightedSection = content.fission.nuclearReactor;
        } else if (/chain.*reaction|multiplication|critical/i.test(input)) {
            content.focus = 'chainReaction';
            content.highlightedSection = content.fission.chainReaction;
        } else if (/star|stellar|sun/i.test(input)) {
            content.focus = 'stellarFusion';
            content.highlightedSection = content.fusion.stellarFusion;
        }

        return content;
    }

    // ============================================================
    // TOPIC HANDLER: PARTICLE PHYSICS
    // ============================================================

    handleParticlePhysics(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Particle Physics and the Standard Model",
            category: 'nuclear',
            summary: "Matter is built from quarks (forming hadrons) and leptons (fundamental). Forces are mediated by exchange bosons: photon (EM), W±/Z⁰ (weak), gluon (strong). The Standard Model classifies all known fundamental particles and three fundamental forces. Every particle has an antiparticle.",

            standardModel: {
                overview: "The Standard Model (SM) is the most successful theory in physics; describes all known fundamental particles and three of four fundamental forces (electromagnetic, weak, and strong); does not include gravity",
                development: "Developed through work of many physicists including Glashow, Weinberg, Salam (1960s–70s); formally confirmed by discovery of W and Z bosons (1983), top quark (1995), and Higgs boson (2012)",
                structure: "Fermions (quarks + leptons): matter particles; Bosons (gauge bosons + Higgs): force carriers and mass origin"
            },

            quarks: {
                definition: "Fundamental constituents of hadrons; six flavours in three generations; carry fractional electric charge; subject to strong, weak, and electromagnetic forces",
                confinement: "Free quarks are never observed; they are permanently confined in hadrons (colour confinement)",
                flavours: [
                    { gen: 1, name: "up (u)", charge: "+2/3 e", mass: "~2.2 MeV/c²", partner: "down (d)", pCharge: "−1/3 e", pMass: "~4.7 MeV/c²" },
                    { gen: 2, name: "charm (c)", charge: "+2/3 e", mass: "~1.28 GeV/c²", partner: "strange (s)", pCharge: "−1/3 e", pMass: "~96 MeV/c²" },
                    { gen: 3, name: "top (t)", charge: "+2/3 e", mass: "~173 GeV/c²", partner: "bottom (b)", pCharge: "−1/3 e", pMass: "~4.18 GeV/c²" }
                ],
                colorCharge: {
                    concept: "Quarks carry 'colour charge' (red, green, blue — not actual colour); strong force acts between colour charges",
                    colourNeutral: "Observable hadrons are colour-neutral: baryons (rgb = white); mesons (colour + anticolour)",
                    gluons: "8 gluons carry colour charge; mediate strong interaction between quarks"
                },
                antiquarks: "Each quark has antiquark with same mass, opposite charge and colour (ū, d̄, c̄, s̄, t̄, b̄)"
            },

            leptons: {
                definition: "Fundamental fermions not subject to the strong force; six leptons in three generations",
                particles: [
                    { name: "electron (e⁻)", charge: "−e", mass: "0.511 MeV/c²", neutrino: "electron neutrino (νₑ)", nuMass: "< 1 eV/c²" },
                    { name: "muon (μ⁻)", charge: "−e", mass: "105.7 MeV/c²", neutrino: "muon neutrino (νᵤ)", nuMass: "< 0.19 MeV/c²" },
                    { name: "tau (τ⁻)", charge: "−e", mass: "1777 MeV/c²", neutrino: "tau neutrino (ντ)", nuMass: "< 18.2 MeV/c²" }
                ],
                antileptons: "Positron e⁺, antimuon μ⁺, antitau τ⁺, and three antineutrinos ν̄ₑ, ν̄ᵤ, ν̄τ",
                leptonNumber: {
                    definition: "Lepton number L = +1 for leptons; L = −1 for antileptons; conserved in all interactions",
                    familyNumbers: "Lₑ, Lᵤ, Lτ each conserved separately in Standard Model (though neutrino oscillations violate this slightly)"
                },
                neutrinos: {
                    properties: "Electrically neutral; tiny but non-zero mass; interact only via weak force and gravity",
                    penetrating: "10¹⁴ neutrinos pass through every square centimetre of Earth per second; most pass through Earth unimpeded",
                    oscillation: "Neutrinos can change flavour (oscillate); implies non-zero mass; not fully explained by Standard Model"
                }
            },

            hadrons: {
                definition: "Composite particles made of quarks; subject to strong force; further divided into baryons and mesons",
                baryons: {
                    definition: "Made of 3 quarks (qqq); half-integer spin; subject to baryon number conservation",
                    baryonNumber: "B = +1 for baryons; B = −1 for antibaryons; conserved in all interactions",
                    examples: [
                        { name: "proton", composition: "uud", charge: "+e", mass: "938.3 MeV/c²", stable: "Stable (or very long lifetime)" },
                        { name: "neutron", composition: "udd", charge: "0", mass: "939.6 MeV/c²", stable: "Stable in nucleus; free: t½ = 10.3 min" },
                        { name: "lambda (Λ⁰)", composition: "uds", charge: "0", mass: "1116 MeV/c²", stable: "Unstable" },
                        { name: "antiproton (p̄)", composition: "ūūd̄", charge: "−e", mass: "938.3 MeV/c²", stable: "Stable (antibaryon)" }
                    ]
                },
                mesons: {
                    definition: "Made of quark-antiquark pair (qq̄); integer spin; bosons",
                    examples: [
                        { name: "pion⁺ (π⁺)", composition: "ud̄", charge: "+e", mass: "139.6 MeV/c²" },
                        { name: "pion⁻ (π⁻)", composition: "ūd", charge: "−e", mass: "139.6 MeV/c²" },
                        { name: "pion⁰ (π⁰)", composition: "uū/dd̄", charge: "0", mass: "135.0 MeV/c²" },
                        { name: "kaon⁺ (K⁺)", composition: "us̄", charge: "+e", mass: "493.7 MeV/c²" }
                    ],
                    pions: "Pions mediate residual strong force between nucleons (Yukawa's meson exchange picture)"
                }
            },

            exchangeParticles: {
                principle: "Forces arise from exchange of virtual particles (gauge bosons) between interacting particles; each fundamental force has its own boson(s)",
                bosons: [
                    { name: "Photon (γ)", force: "Electromagnetic", mass: "0", range: "Infinite (∝ 1/r²)", charge: "0", example: "Electron-electron repulsion; photoelectric effect" },
                    { name: "W⁺, W⁻ bosons", force: "Weak (charged)", mass: "80.4 GeV/c²", range: "~10⁻¹⁸ m", charge: "±e", example: "Beta decay; muon decay" },
                    { name: "Z⁰ boson", force: "Weak (neutral)", mass: "91.2 GeV/c²", range: "~10⁻¹⁸ m", charge: "0", example: "Neutrino scattering" },
                    { name: "Gluon (g)", force: "Strong", mass: "0", range: "~10⁻¹⁵ m", charge: "Colour charge (8 types)", example: "Quark-quark binding in hadrons" },
                    { name: "Graviton (G)", force: "Gravity", mass: "0 (theoretical)", range: "Infinite", charge: "0", example: "Gravitational attraction; NOT in Standard Model" }
                ],
                weakForceDetail: {
                    betaMinus: {
                        quarkProcess: "d → u + W⁻",
                        fullProcess: "d → u + W⁻ → u + e⁻ + ν̄ₑ",
                        nuclear: "n (udd) → p (uud) + e⁻ + ν̄ₑ"
                    },
                    betaPlus: {
                        quarkProcess: "u → d + W⁺",
                        fullProcess: "u → d + W⁺ → d + e⁺ + νₑ",
                        nuclear: "p (uud) → n (udd) + e⁺ + νₑ"
                    }
                }
            },

            higgsBoson: {
                discovery: "Discovered at CERN LHC on 4 July 2012; mass = 125.1 GeV/c²",
                role: "Higgs field pervades all space; particles acquire mass by interacting with this field; W and Z bosons acquire mass via Higgs mechanism",
                significance: "Explains why W and Z are massive while photon is massless; last missing piece of Standard Model",
                nobel: "Peter Higgs and François Englert awarded Nobel Prize in Physics 2013"
            },

            antimatter: {
                definition: "For every fundamental particle there exists an antiparticle with same mass, opposite electric charge, and opposite quantum numbers (baryon number, lepton number, etc.)",
                notation: {
                    convention: "Antiparticle of X written as X̄; e.g., antiproton = p̄; antineutron = n̄; antielectron = e⁺ (positron)",
                    exceptions: "Positron (e⁺) not usually written as ē; it has its own symbol"
                },
                pairProduction: {
                    process: "γ → e⁺ + e⁻",
                    minimumEnergy: "E_photon ≥ 2mₑc² = 2 × 0.511 = 1.022 MeV",
                    momentumConservation: "Must occur near a nucleus to conserve momentum (nucleus absorbs recoil)",
                    formula: "E_photon = 2mₑc² + KE(e⁺) + KE(e⁻)"
                },
                annihilation: {
                    process: "e⁺ + e⁻ → 2γ",
                    energyPerPhoton: "E = mₑc² = 0.511 MeV per photon (total 1.022 MeV conserved)",
                    twoPhotons: "Two photons required to conserve momentum (back-to-back, 180° apart in COM frame)",
                    PET: "PET scanning detects two 511 keV photons in coincidence; reconstructs 3D image of metabolic activity",
                    generalAnnihilation: "p + p̄ → multiple pions + other particles (at high energy)"
                },
                cosmicAsymmetry: "Observable universe is almost entirely matter; why not equal amounts of matter and antimatter from Big Bang is one of the greatest unsolved problems in physics (CP violation provides partial explanation)"
            },

            conservationLaws: {
                title: "Conservation Laws in Particle Reactions",
                alwaysConserved: [
                    "Energy-momentum (4-momentum)",
                    "Electric charge Q",
                    "Baryon number B",
                    "Lepton number Lₑ, Lᵤ, Lτ (separately, approximately)",
                    "Angular momentum (spin)"
                ],
                conservedInStrongAndEM: [
                    "Strangeness (S): changed only in weak decays",
                    "Charm, Beauty, Topness (C, B, T): changed only in weak decays"
                ],
                checkingReactions: {
                    method: "For each candidate reaction: check Q, B, Lₑ, Lᵤ, Lτ, and S on both sides; if any is violated, reaction is forbidden",
                    examples: [
                        {
                            reaction: "p → e⁺ + γ",
                            chargeCheck: "+1 → +1 + 0 ✓",
                            baryonCheck: "B: +1 → 0 + 0 ✗ (baryon number not conserved)",
                            verdict: "FORBIDDEN — proton decay not observed (standard model prediction: lifetime > 10³⁴ years)"
                        },
                        {
                            reaction: "μ⁻ → e⁻ + ν̄ₑ + νᵤ",
                            chargeCheck: "−1 → −1 + 0 + 0 ✓",
                            leptonECheck: "Lₑ: 0 → +1 + (−1) = 0 ✓",
                            leptonMuCheck: "Lᵤ: +1 → 0 + 0 + 1 = +1 ✓",
                            verdict: "ALLOWED — this is the observed muon decay"
                        }
                    ]
                }
            },

            feynmanDiagrams: {
                purpose: "Diagrammatic representation of particle interactions in quantum field theory; each diagram corresponds to a term in the perturbation series",
                basicRules: [
                    "Fermions: solid lines with arrows (arrow = particle going forward in time; arrow backward = antiparticle)",
                    "Photons: wavy lines; W, Z: wavy lines; gluons: curly lines",
                    "Each vertex conserves charge, baryon number, lepton number",
                    "Time usually flows left to right (or bottom to top)",
                    "Internal lines represent virtual particles (off-shell; not directly observable)"
                ],
                commonDiagrams: [
                    { name: "e⁺e⁻ annihilation", description: "Two fermion lines meet; virtual photon; two outgoing photon lines" },
                    { name: "Compton scattering", description: "Photon + electron → photon + electron via virtual electron" },
                    { name: "Beta-minus decay (quark level)", description: "d quark line emits W⁻ (wavy); becomes u; W⁻ decays to e⁻ + ν̄ₑ" }
                ]
            },

            workedExamples: [
                {
                    title: "Determine quark composition from charge",
                    problem: "A baryon has charge +2e. What could be its quark composition?",
                    solution: {
                        baryonMeans: "Three quarks: q₁q₂q₃; charges must sum to +2e",
                        possible: "uuu: (+2/3 + 2/3 + 2/3)e = +2e ✓",
                        answer: "uuu (Delta-plus-plus baryon, Δ⁺⁺)"
                    }
                },
                {
                    title: "Check if particle decay is allowed",
                    problem: "Is the decay π⁺ → μ⁺ + νᵤ allowed?",
                    solution: {
                        chargeCheck: "Q: +e → +e + 0 ✓",
                        baryonCheck: "B: 0 → 0 + 0 ✓ (meson, B=0)",
                        leptonECheck: "Lₑ: 0 → 0 + 0 ✓",
                        leptonMuCheck: "Lᵤ: 0 → −1 + 1 = 0 ✓ (μ⁺ has Lᵤ = −1; νᵤ has Lᵤ = +1)",
                        verdict: "ALLOWED — this is the observed primary decay mode of π⁺ (branching ratio ~99.99%)"
                    }
                },
                {
                    title: "Pair production energy threshold",
                    problem: "What is the minimum photon energy to produce an electron-positron pair?",
                    solution: {
                        restMass: "2mₑc² = 2 × 0.511 = 1.022 MeV",
                        answer: "Minimum photon energy = 1.022 MeV (both particles at rest in COM frame)"
                    }
                },
                {
                    title: "Annihilation photon energy",
                    problem: "An electron and positron at rest annihilate. Calculate the energy and wavelength of each photon produced.",
                    solution: {
                        energy: "E = mₑc² = 0.511 MeV = 0.511 × 1.60×10⁻¹³ = 8.18 × 10⁻¹⁴ J",
                        wavelength: "E = hf = hc/λ → λ = hc/E = (6.63×10⁻³⁴ × 3.00×10⁸) / (8.18×10⁻¹⁴) = 2.43 × 10⁻¹² m = 2.43 pm",
                        note: "These are gamma-ray photons (hard X-ray/gamma boundary)"
                    }
                }
            ],

            commonErrors: [
                {
                    error: "Thinking quarks can exist as free particles",
                    fix: "Quarks are permanently confined within hadrons due to colour confinement; isolated quarks have never been observed."
                },
                {
                    error: "Confusing mesons (q-qbar) with baryons (qqq)",
                    fix: "Mesons: quark-antiquark pair, integer spin, B=0. Baryons: three quarks, half-integer spin, B=+1."
                },
                {
                    error: "Claiming gravity is part of the Standard Model",
                    fix: "The Standard Model describes three forces (EM, weak, strong); it does not include gravity; unification of SM with gravity is an unsolved problem."
                },
                {
                    error: "Writing beta decay without the neutrino",
                    fix: "β⁻ decay: n → p + e⁻ + ν̄ₑ; β⁺ decay: p → n + e⁺ + νₑ; the (anti)neutrino is always emitted to conserve lepton number and energy."
                },
                {
                    error: "Thinking pair production creates one photon and one electron",
                    fix: "Pair production from a single photon: γ → e⁺ + e⁻ (creates both an electron AND a positron from the photon energy)."
                }
            ],

            assessmentQuestions: {
                recall: [
                    "Name the six quarks, giving their charges",
                    "State the quark composition of the proton and neutron",
                    "Name the exchange particle for the electromagnetic force"
                ],
                understanding: [
                    "Explain, using quark-level processes, what happens during beta-minus decay",
                    "Explain why two photons (not one) must be produced in electron-positron annihilation",
                    "Explain why the weak force has such a short range despite being mediated by massless-seeming exchange"
                ],
                application: [
                    "A neutral baryon is found to contain a strange quark. Write two possible quark compositions and verify the charges",
                    "Show that the reaction n → p + e⁻ + ν̄ₑ satisfies conservation of charge, baryon number, and lepton number",
                    "Calculate the minimum photon energy needed to produce a proton-antiproton pair (mp = 938.3 MeV/c²)"
                ],
                analysis: [
                    "Determine whether the following decay is possible: Λ⁰ → p + π⁻. Check all conservation laws (Λ⁰: uds, strangeness −1)",
                    "Draw and annotate the Feynman diagram for beta-minus decay at the quark level, labelling all particles"
                ]
            },

            relatedExperiments: this.nuclearTopics?.particle_physics?.relatedExperiments || [
                { id: 'cloud_chamber', name: "Cloud Chamber — Visualising Radiation Tracks" },
                { id: 'geiger_marsden_scattering', name: "Geiger-Marsden Alpha Scattering Experiment" }
            ]
        };

        if (/quark/i.test(input)) {
            content.focus = 'quarks';
            content.highlightedSection = content.quarks;
        } else if (/lepton/i.test(input)) {
            content.focus = 'leptons';
            content.highlightedSection = content.leptons;
        } else if (/hadron|baryon|meson|pion/i.test(input)) {
            content.focus = 'hadrons';
            content.highlightedSection = content.hadrons;
        } else if (/antimatter|annihilation|pair.*production|positron/i.test(input)) {
            content.focus = 'antimatter';
            content.highlightedSection = content.antimatter;
        } else if (/exchange|boson|feynman/i.test(input)) {
            content.focus = 'exchangeParticles';
            content.highlightedSection = content.exchangeParticles;
        } else if (/conserv|allowed|forbidden/i.test(input)) {
            content.focus = 'conservationLaws';
            content.highlightedSection = content.conservationLaws;
        } else if (/higgs/i.test(input)) {
            content.focus = 'higgsBoson';
            content.highlightedSection = content.higgsBoson;
        } else if (/standard.*model/i.test(input)) {
            content.focus = 'standardModel';
            content.highlightedSection = content.standardModel;
        }

        return content;
    }

