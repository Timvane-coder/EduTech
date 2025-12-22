Enhanced Chemistry Workbook - Comprehensive Chemistry Content System
I'll create a complete Enhanced Chemistry Workbook class following the exact same pattern as the Cell Biology Workbook. Here's the full implementation:
// Enhanced Chemistry Workbook - Comprehensive Chemistry Content System
import * as math from 'mathjs';

export class EnhancedChemistryWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "chemical";
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
        this.diagramData = null;

        // Enhanced explanation options
        this.explanationLevel = options.explanationLevel || 'intermediate'; // 'basic', 'intermediate', 'detailed', 'scaffolded'
        this.includeVisualizations = options.includeVisualizations !== false;
        this.includeConceptualConnections = options.includeConceptualConnections !== false;
        this.includeExamples = options.includeExamples !== false;
        this.includeComparisons = options.includeComparisons !== false;
        this.includeCommonMisconceptions = options.includeCommonMisconceptions !== false;
        this.includePedagogicalNotes = options.includePedagogicalNotes !== false;
        this.detailLevel = options.detailLevel || 'detailed';

        this.chemicalSymbols = this.initializeChemicalSymbols();
        this.setThemeColors();
        this.initializeChemistryTopics();
        this.initializeMisconceptionDatabase();
        this.initializeExplanationTemplates();
        this.initializeChemistryLessons();
    }

    setThemeColors() {
        const themes = {
            chemical: {
                background: '#ffffff',
                gridColor: '#c0c0c0',
                headerBg: '#1565c0',
                headerText: '#ffffff',
                sectionBg: '#bbdefb',
                sectionText: '#0d47a1',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#e3f2fd',
                resultText: '#1565c0',
                definitionBg: '#fff3e0',
                definitionText: '#e65100',
                stepBg: '#f3e5f5',
                stepText: '#4a148c',
                borderColor: '#42a5f5',
                contentBg: '#e8f5e9',
                contentText: '#2e7d32',
                diagramBg: '#fce4ec',
                structureBg: '#fff9c4'
            },
            scientific: {
                background: '#f8f9fa',
                gridColor: '#4682b4',
                headerBg: '#0d47a1',
                headerText: '#ffffff',
                sectionBg: '#90caf9',
                sectionText: '#01579b',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#e1f5fe',
                resultText: '#01579b',
                definitionBg: '#ffe0b2',
                definitionText: '#e65100',
                stepBg: '#ede7f6',
                stepText: '#311b92',
                borderColor: '#2196f3',
                contentBg: '#c8e6c9',
                contentText: '#1b5e20',
                diagramBg: '#f8bbd0',
                structureBg: '#f0f4c3'
            }
        };

        this.colors = themes[this.theme] || themes.chemical;
    }

    initializeChemicalSymbols() {
        return {
            // Greek letters commonly used in chemistry
            'alpha': 'α',
            'beta': 'β',
            'gamma': 'γ',
            'delta': 'Δ',
            'Delta': 'Δ',
            'epsilon': 'ε',
            'theta': 'θ',
            'lambda': 'λ',
            'mu': 'μ',
            'pi': 'π',
            'sigma': 'σ',
            'omega': 'ω',
            
            // Mathematical operators
            'arrow': '→',
            'rightarrow': '→',
            'leftarrow': '←',
            'equilibrium': '⇌',
            'doubleArrow': '↔',
            'reversible': '⇌',
            'plus': '+',
            'minus': '−',
            'times': '×',
            'divide': '÷',
            'plusminus': '±',
            'approximately': '≈',
            'proportional': '∝',
            'infinity': '∞',
            'degree': '°',
            
            // Chemical notation
            'subscript0': '₀',
            'subscript1': '₁',
            'subscript2': '₂',
            'subscript3': '₃',
            'subscript4': '₄',
            'subscript5': '₅',
            'subscript6': '₆',
            'subscript7': '₇',
            'subscript8': '₈',
            'subscript9': '₉',
            
            'superscript0': '⁰',
            'superscript1': '¹',
            'superscript2': '²',
            'superscript3': '³',
            'superscript4': '⁴',
            'superscript+': '⁺',
            'superscript-': '⁻',
            
            // Common chemical formulas
            'H2O': 'H₂O',
            'CO2': 'CO₂',
            'O2': 'O₂',
            'N2': 'N₂',
            'H2': 'H₂',
            'NH3': 'NH₃',
            'CH4': 'CH₄',
            'C2H6': 'C₂H₆',
            'H2SO4': 'H₂SO₄',
            'HCl': 'HCl',
            'NaOH': 'NaOH',
            'NaCl': 'NaCl',
            'CaCO3': 'CaCO₃',
            'H3O+': 'H₃O⁺',
            'OH-': 'OH⁻',
            
            // States of matter
            'solid': '(s)',
            'liquid': '(l)',
            'gas': '(g)',
            'aqueous': '(aq)',
            
            // Special symbols
            'celsius': '°C',
            'kelvin': 'K',
            'joule': 'J',
            'calorie': 'cal',
            'mol': 'mol',
            'molarity': 'M',
            'atm': 'atm',
            'torr': 'Torr',
            'pascal': 'Pa'
        };
    }

    initializeChemistryTopics() {
        this.chemistryTopics = {
            // 1. Stoichiometry
            stoichiometry: {
                patterns: [
                    /stoichiometry/i,
                    /mole.*ratio/i,
                    /limiting.*reagent|limiting.*reactant/i,
                    /percent.*yield|theoretical.*yield/i,
                    /molar.*mass|molecular.*weight/i,
                    /balanced.*equation/i
                ],
                handler: this.handleStoichiometry.bind(this),
                name: 'Stoichiometry',
                category: 'quantitative_chemistry',
                description: 'Quantitative relationships in chemical reactions'
            },

            // 2. Organic Chemistry
            organic_chemistry: {
                patterns: [
                    /organic.*chemistry/i,
                    /hydrocarbon|alkane|alkene|alkyne/i,
                    /functional.*group/i,
                    /isomer|structural.*formula/i,
                    /nomenclature|IUPAC/i,
                    /aromatic|benzene/i
                ],
                handler: this.handleOrganicChemistry.bind(this),
                name: 'Organic Chemistry',
                category: 'organic',
                description: 'Chemistry of carbon-containing compounds'
            },

            // 3. Redox (Reduction-Oxidation)
            redox: {
                patterns: [
                    /redox|oxidation.*reduction/i,
                    /oxidizing.*agent|reducing.*agent/i,
                    /oxidation.*state|oxidation.*number/i,
                    /half.*reaction|half.*equation/i,
                    /electrochemistry|galvanic.*cell|voltaic.*cell/i,
                    /electrolysis/i
                ],
                handler: this.handleRedox.bind(this),
                name: 'Redox Reactions',
                category: 'reactions',
                description: 'Oxidation-reduction reactions and electron transfer'
            },

            // 4. Acid-Base Chemistry
            acid_base: {
                patterns: [
                    /acid.*base/i,
                    /pH|pOH/i,
                    /neutralization/i,
                    /buffer|buffer.*solution/i,
                    /titration/i,
                    /strong.*acid|weak.*acid|strong.*base|weak.*base/i,
                    /Bronsted.*Lowry|Lewis.*acid|Arrhenius/i
                ],
                handler: this.handleAcidBase.bind(this),
                name: 'Acid-Base Chemistry',
                category: 'reactions',
                description: 'Properties and reactions of acids and bases'
            },

            // 5. Chemical Equilibrium
            equilibrium: {
                patterns: [
                    /equilibrium/i,
                    /equilibrium.*constant|Kc|Kp|Keq/i,
                    /Le.*Chatelier|stress|shift/i,
                    /reaction.*quotient|Q/i,
                    /solubility.*product|Ksp/i,
                    /dynamic.*equilibrium/i
                ],
                handler: this.handleEquilibrium.bind(this),
                name: 'Chemical Equilibrium',
                category: 'physical_chemistry',
                description: 'Dynamic balance in reversible reactions'
            },

            // 6. Kinetics and Thermodynamics
            kinetics_thermodynamics: {
                patterns: [
                    /kinetics|reaction.*rate/i,
                    /rate.*law|rate.*constant/i,
                    /activation.*energy|Ea/i,
                    /catalyst|catalysis/i,
                    /thermodynamics|enthalpy|entropy|Gibbs/i,
                    /endothermic|exothermic/i,
                    /spontaneous.*reaction/i,
                    /Hess.*law/i
                ],
                handler: this.handleKineticsThermodynamics.bind(this),
                name: 'Kinetics and Thermodynamics',
                category: 'physical_chemistry',
                description: 'Reaction rates and energy changes'
            },

            // 7. Atomic Structure
            atomic_structure: {
                patterns: [
                    /atomic.*structure/i,
                    /electron.*configuration/i,
                    /quantum.*number/i,
                    /orbital|subshell|shell/i,
                    /periodic.*table|periodic.*trend/i,
                    /valence.*electron/i,
                    /atomic.*model|Bohr|quantum/i
                ],
                handler: this.handleAtomicStructure.bind(this),
                name: 'Atomic Structure',
                category: 'atomic',
                description: 'Structure of atoms and electron arrangement'
            },

            // 8. Chemical Bonding
            chemical_bonding: {
                patterns: [
                    /chemical.*bond/i,
                    /ionic.*bond|covalent.*bond|metallic.*bond/i,
                    /Lewis.*structure|dot.*structure/i,
                    /VSEPR|molecular.*geometry|molecular.*shape/i,
                    /hybridization|sp3|sp2|sp/i,
                    /polarity|polar.*bond|nonpolar/i,
                    /intermolecular.*force|hydrogen.*bond|van.*der.*Waals/i
                ],
                handler: this.handleChemicalBonding.bind(this),
                name: 'Chemical Bonding',
                category: 'bonding',
                description: 'Forces holding atoms together in compounds'
            },

            // 9. States of Matter and Particle Theory
            states_of_matter: {
                patterns: [
                    /states.*of.*matter|phase/i,
                    /solid|liquid|gas|plasma/i,
                    /phase.*change|phase.*transition/i,
                    /kinetic.*molecular.*theory|KMT/i,
                    /gas.*law|ideal.*gas|Boyle|Charles|Avogadro/i,
                    /vapor.*pressure|evaporation|condensation/i,
                    /melting.*point|boiling.*point|freezing.*point/i
                ],
                handler: this.handleStatesOfMatter.bind(this),
                name: 'States of Matter',
                category: 'physical_chemistry',
                description: 'Physical states and particle behavior'
            },

            // 10. Nuclear Chemistry
            nuclear_chemistry: {
                patterns: [
                    /nuclear.*chemistry|nuclear.*reaction/i,
                    /radioactivity|radioactive.*decay/i,
                    /alpha.*decay|beta.*decay|gamma.*decay/i,
                    /half.*life|decay.*constant/i,
                    /nuclear.*fission|nuclear.*fusion/i,
                    /isotope|radioisotope/i
                ],
                handler: this.handleNuclearChemistry.bind(this),
                name: 'Nuclear Chemistry',
                category: 'nuclear',
                description: 'Reactions involving atomic nuclei'
            },

            // 11. Laboratory Chemistry
            laboratory_chemistry: {
                patterns: [
                    /laboratory|lab.*technique/i,
                    /titration|gravimetric|spectroscopy/i,
                    /separation.*technique|chromatography|distillation/i,
                    /lab.*safety|laboratory.*safety/i,
                    /measurement|precision|accuracy/i,
                    /lab.*equipment|apparatus/i
                ],
                handler: this.handleLaboratoryChemistry.bind(this),
                name: 'Laboratory Chemistry',
                category: 'practical',
                description: 'Laboratory techniques and procedures'
            }
        };
    }

    initializeChemistryLessons() {
        this.lessons = {
            stoichiometry: {
                title: "Stoichiometry: Quantitative Relationships in Chemistry",
                concepts: [
                    "The mole is the fundamental unit for counting particles",
                    "Balanced equations show mole ratios between reactants and products",
                    "Limiting reagent determines the maximum amount of product",
                    "Percent yield compares actual to theoretical yield"
                ],
                theory: "Stoichiometry uses balanced chemical equations and the mole concept to calculate quantitative relationships between reactants and products. It's based on the law of conservation of mass.",
                keyDefinitions: {
                    "Mole": "6.022 × 10²³ particles (Avogadro's number)",
                    "Molar Mass": "Mass of one mole of a substance in grams",
                    "Stoichiometric Coefficient": "Number before a formula in a balanced equation",
                    "Limiting Reagent": "Reactant that is completely consumed and limits product formation",
                    "Excess Reagent": "Reactant that remains after reaction is complete",
                    "Theoretical Yield": "Maximum amount of product that can be formed",
                    "Actual Yield": "Amount of product actually obtained",
                    "Percent Yield": "(Actual yield / Theoretical yield) × 100%"
                },
                mainCategories: [
                    "Mole conversions (mass ↔ moles ↔ particles)",
                    "Stoichiometric calculations using balanced equations",
                    "Limiting reagent problems",
                    "Percent yield calculations"
                ],
                applications: [
                    "Industrial chemical production and optimization",
                    "Pharmaceutical drug synthesis",
                    "Environmental chemistry and pollution control",
                    "Food chemistry and nutrition"
                ]
            },

            organic_chemistry: {
                title: "Organic Chemistry: The Chemistry of Carbon Compounds",
                concepts: [
                    "Carbon forms four covalent bonds and chains",
                    "Functional groups determine chemical properties",
                    "Isomers have the same formula but different structures",
                    "Organic reactions involve breaking and forming bonds"
                ],
                theory: "Organic chemistry studies carbon-containing compounds. Carbon's ability to form four stable covalent bonds and chain with itself creates vast molecular diversity. Functional groups are specific atom arrangements that give molecules characteristic properties.",
                keyDefinitions: {
                    "Hydrocarbon": "Compound containing only carbon and hydrogen",
                    "Alkane": "Saturated hydrocarbon with single bonds (CₙH₂ₙ₊₂)",
                    "Alkene": "Unsaturated hydrocarbon with double bond (CₙH₂ₙ)",
                    "Alkyne": "Unsaturated hydrocarbon with triple bond (CₙH₂ₙ₋₂)",
                    "Functional Group": "Specific atom group that determines chemical properties",
                    "Isomer": "Molecules with same molecular formula but different structure",
                    "Aromatic": "Ring compound with delocalized electrons (like benzene)",
                    "Saturated": "Contains only single bonds",
                    "Unsaturated": "Contains double or triple bonds"
                },
                mainCategories: [
                    "Hydrocarbons (alkanes, alkenes, alkynes, aromatics)",
                    "Functional groups (alcohols, aldehydes, ketones, acids, esters, amines)",
                    "Isomerism (structural, geometric, optical)",
                    "Organic reactions (substitution, addition, elimination, oxidation)"
                ],
                applications: [
                    "Pharmaceutical drug design",
                    "Polymer and plastic production",
                    "Petroleum refining and fuel production",
                    "Biochemistry and metabolism"
                ]
            },

            redox: {
                title: "Redox Reactions: Electron Transfer Reactions",
                concepts: [
                    "Oxidation is loss of electrons; reduction is gain of electrons",
                    "Oxidation and reduction always occur together",
                    "Oxidation numbers track electron transfer",
                    "Redox reactions can generate electricity or drive chemical changes"
                ],
                theory: "Redox reactions involve the transfer of electrons from one species to another. The species that loses electrons is oxidized, while the species that gains electrons is reduced. These reactions are fundamental to energy production, corrosion, and many industrial processes.",
                keyDefinitions: {
                    "Oxidation": "Loss of electrons; increase in oxidation number",
                    "Reduction": "Gain of electrons; decrease in oxidation number",
                    "Oxidizing Agent": "Species that causes oxidation (gets reduced itself)",
                    "Reducing Agent": "Species that causes reduction (gets oxidized itself)",
                    "Oxidation Number": "Charge an atom would have if electrons were completely transferred",
                    "Half-Reaction": "Either the oxidation or reduction part of a redox reaction",
                    "Electrochemical Cell": "Device that converts chemical energy to electrical energy or vice versa",
                    "Electrolysis": "Using electrical energy to drive non-spontaneous redox reaction"
                },
                mainCategories: [
                    "Identifying oxidation and reduction",
                    "Assigning oxidation numbers",
                    "Balancing redox equations (half-reaction method)",
                    "Electrochemistry (galvanic cells, electrolytic cells)"
                ],
                applications: [
                    "Batteries and fuel cells",
                    "Corrosion prevention",
                    "Metal extraction and purification",
                    "Electroplating and industrial electrolysis"
                ]
            },

            acid_base: {
                title: "Acid-Base Chemistry: Proton Transfer Reactions",
                concepts: [
                    "Acids donate protons; bases accept protons",
                    "pH measures acidity on a logarithmic scale",
                    "Strong acids/bases completely ionize; weak ones partially ionize",
                    "Buffers resist pH changes"
                ],
                theory: "Acid-base chemistry involves the transfer of protons (H⁺ ions). The Brønsted-Lowry definition describes acids as proton donors and bases as proton acceptors. pH quantifies acidity, and buffer solutions maintain stable pH by neutralizing added acids or bases.",
                keyDefinitions: {
                    "Acid (Brønsted-Lowry)": "Proton (H⁺) donor",
                    "Base (Brønsted-Lowry)": "Proton (H⁺) acceptor",
                    "pH": "Negative logarithm of [H⁺]: pH = -log[H⁺]",
                    "pOH": "Negative logarithm of [OH⁻]: pOH = -log[OH⁻]",
                    "Strong Acid": "Completely ionizes in water (HCl, H₂SO₄, HNO₃)",
                    "Weak Acid": "Partially ionizes in water (CH₃COOH, H₂CO₃)",
                    "Buffer": "Solution that resists pH change (weak acid + conjugate base)",
                    "Neutralization": "Reaction of acid with base to form salt and water",
                    "Titration": "Technique to determine concentration using neutralization",
                    "Conjugate Acid-Base Pair": "Species differing by one proton"
                },
                mainCategories: [
                    "Acid-base definitions (Arrhenius, Brønsted-Lowry, Lewis)",
                    "pH and pOH calculations",
                    "Strong vs weak acids and bases",
                    "Buffer solutions and titrations"
                ],
                applications: [
                    "Blood pH regulation in human body",
                    "Environmental chemistry (acid rain, ocean acidification)",
                    "Industrial chemical production",
                    "Pharmaceutical formulation"
                ]
            },

            equilibrium: {
                title: "Chemical Equilibrium: Dynamic Balance in Reactions",
                concepts: [
                    "At equilibrium, forward and reverse rates are equal",
                    "Equilibrium constant (K) indicates position of equilibrium",
                    "Le Chatelier's principle predicts equilibrium shifts",
                    "Temperature is the only factor that changes K"
                ],
                theory: "Chemical equilibrium occurs when the rate of the forward reaction equals the rate of the reverse reaction. The system appears static but is dynamically balanced. The equilibrium constant quantifies the position of equilibrium, and Le Chatelier's principle predicts how equilibrium responds to stress.",
                keyDefinitions: {
                    "Chemical Equilibrium": "State where forward and reverse reaction rates are equal",
                    "Equilibrium Constant (K)": "Ratio of products to reactants at equilibrium",
                    "Reaction Quotient (Q)": "Same expression as K but at any point (not equilibrium)",
                    "Le Chatelier's Principle": "System at equilibrium responds to stress by shifting to minimize it",
                    "Kc": "Equilibrium constant using concentrations",
                    "Kp": "Equilibrium constant using partial pressures",
                    "Ksp": "Solubility product constant for ionic compounds",
                    "Common Ion Effect": "Solubility decrease due to common ion in solution"
                },
                mainCategories: [
                    "Equilibrium expressions and constants",
                    "Calculating equilibrium concentrations",
                    "Le Chatelier's principle and equilibrium shifts",
                    "Solubility equilibria (Ksp)"
                ],
                applications: [
                    "Industrial process optimization (Haber process for ammonia)",
                    "Environmental systems (CO₂ in oceans)",
                    "Biological systems (hemoglobin oxygen binding)",
                    "Solubility and precipitation reactions"
                ]
            },

            kinetics_thermodynamics: {
                title: "Kinetics and Thermodynamics: Rates and Energy",
                concepts: [
                    "Kinetics studies how fast reactions occur",
                    "Thermodynamics determines if reactions are spontaneous",
                    "Catalysts speed up reactions without being consumed",
                    "Enthalpy, entropy, and Gibbs energy predict spontaneity"
                ],
                theory: "Chemical kinetics examines reaction rates and mechanisms. Thermodynamics studies energy changes and predicts reaction spontaneity. Kinetics answers 'how fast?'; thermodynamics answers 'how far?' and 'will it happen?'",
                keyDefinitions: {
                    "Reaction Rate": "Change in concentration per unit time",
                    "Rate Law": "Equation relating rate to reactant concentrations",
                    "Rate Constant (k)": "Proportionality constant in rate law",
                    "Activation Energy (Ea)": "Minimum energy needed for reaction to occur",
                    "Catalyst": "Substance that speeds reaction by lowering Ea",
                    "Enthalpy (H)": "Heat content; ΔH is heat absorbed/released",
                    "Entropy (S)": "Measure of disorder; ΔS is change in disorder",
                    "Gibbs Free Energy (G)": "Energy available for work; ΔG predicts spontaneity",
                    "Endothermic": "Reaction absorbing heat (ΔH > 0)",
                    "Exothermic": "Reaction releasing heat (ΔH < 0)",
                    "Spontaneous": "Reaction occurring without external energy (ΔG < 0)"
                },
                mainCategories: [
                    "Reaction rates and rate laws",
                    "Activation energy and catalysis",
                    "Enthalpy and thermochemistry",
                    "Entropy and Gibbs free energy"
                ],
                applications: [
                    "Industrial reaction optimization",
                    "Catalytic converters in automobiles",
                    "Energy production and storage",
                    "Predicting reaction feasibility"
                ]
            },

            atomic_structure: {
                title: "Atomic Structure: Building Blocks of Matter",
                concepts: [
                    "Atoms consist of protons, neutrons, and electrons",
                    "Electrons occupy specific energy levels and orbitals",
                    "Electron configuration determines chemical properties",
                    "Periodic table organizes elements by atomic structure"
                ],
                theory: "Modern atomic theory describes atoms as having a dense nucleus (protons and neutrons) surrounded by electrons in specific orbitals. Quantum mechanics explains electron behavior using quantum numbers and probability distributions.",
                keyDefinitions: {
                    "Proton": "Positively charged particle in nucleus; mass ≈ 1 amu",
                    "Neutron": "Neutral particle in nucleus; mass ≈ 1 amu",
                    "Electron": "Negatively charged particle; mass ≈ 1/1836 amu",
                    "Atomic Number (Z)": "Number of protons in nucleus",
                    "Mass Number (A)": "Total protons + neutrons",
                    "Isotope": "Atoms with same protons but different neutrons",
                    "Orbital": "Region of space where electron is likely found",
                    "Electron Configuration": "Distribution of electrons in orbitals",
                    "Valence Electrons": "Electrons in outermost shell",
                    "Quantum Numbers": "n, l, mₗ, mₛ describing electron state"
                },
                mainCategories: [
                    "Subatomic particles and atomic structure",
                    "Electron shells, subshells, and orbitals",
                    "Electron configuration and orbital diagrams",
                    "Periodic trends (atomic radius, ionization energy, electronegativity)"
                ],
                applications: [
                    "Understanding chemical bonding",
                    "Predicting element properties",
                    "Spectroscopy and atomic emission",
                    "Quantum computing and nanotechnology"
                ]
            },

            chemical_bonding: {
                title: "Chemical Bonding: Forces Holding Matter Together",
                concepts: [
                    "Chemical bonds form when atoms share or transfer electrons",
                    "Ionic bonds involve electron transfer; covalent bonds involve sharing",
                    "Molecular geometry affects polarity and properties",
                    "Intermolecular forces affect physical properties"
                ],
                theory: "Chemical bonding occurs when atoms combine to achieve stable electron configurations. The type of bonding (ionic, covalent, metallic) depends on electronegativity differences. Molecular shape, determined by VSEPR theory, affects polarity and intermolecular forces.",
                keyDefinitions: {
                    "Ionic Bond": "Electrostatic attraction between oppositely charged ions",
                    "Covalent Bond": "Sharing of electron pair between atoms",
                    "Metallic Bond": "Delocalized electrons shared among metal atoms",
                    "Electronegativity": "Atom's ability to attract bonding electrons",
                    "Polar Bond": "Unequal electron sharing due to electronegativity difference",
                    "Lewis Structure": "Diagram showing valence electrons and bonds",
                    "VSEPR Theory": "Valence Shell Electron Pair Repulsion theory for shape",
                    "Hybridization": "Mixing atomic orbitals to form new hybrid orbitals",
                    "Hydrogen Bond": "Strong dipole-dipole attraction involving H",
                    "London Dispersion Forces": "Weak attractions due to temporary dipoles"
                },
                mainCategories: [
                    "Types of chemical bonds (ionic, covalent, metallic)",
                    "Lewis structures and formal charge",
                    "Molecular geometry (VSEPR theory)",
                    "Intermolecular forces (hydrogen bonding, van der Waals)"
                ],
                applications: [
                    "Material properties and design",
                    "Drug design and molecular recognition",
                    "Understanding phase changes",
                    "Predicting solubility and reactivity"
                ]
            },

            states_of_matter: {
                title: "States of Matter: Phases and Particle Behavior",
                concepts: [
                    "Matter exists in solid, liquid, gas, and plasma states",
                    "Kinetic molecular theory explains gas behavior",
                    "Phase changes involve energy but not temperature change",
                    "Gas laws relate pressure, volume, temperature, and moles"
                ],
                theory: "States of matter differ in particle arrangement and motion. Kinetic molecular theory explains that gas particles are in constant random motion, with kinetic energy proportional to temperature. Phase changes occur when energy overcomes intermolecular forces.",
                keyDefinitions: {
                    "Solid": "Fixed shape and volume; particles vibrate in fixed positions",
                    "Liquid": "Fixed volume but variable shape; particles move freely",
                    "Gas": "Variable shape and volume; particles move independently",
                    "Plasma": "Ionized gas with free electrons and ions",
                    "Phase Change": "Transformation between states of matter",
                    "Melting Point": "Temperature at which solid becomes liquid",
                    "Boiling Point": "Temperature at which liquid becomes gas",
                    "Sublimation": "Direct solid to gas transition",
                    "Vapor Pressure": "Pressure exerted by gas in equilibrium with liquid",
                    "Ideal Gas Law": "PV = nRT"
                },
                mainCategories: [
                    "Properties of solids, liquids, and gases",
                    "Kinetic molecular theory",
                    "Phase changes and heating curves",
                    "Gas laws (Boyle's, Charles's, combined, ideal)"
                ],
                applications: [
                    "Weather prediction and atmospheric science",
                    "Refrigeration and air conditioning",
                    "Industrial gas processes",
                    "Understanding material properties"
                ]
            },

            nuclear_chemistry: {
                title: "Nuclear Chemistry: Reactions of Atomic Nuclei",
                concepts: [
                    "Nuclear reactions involve changes in the nucleus",
                    "Radioactive decay transforms unstable nuclei",
                    "Half-life measures decay rate",
                    "Nuclear reactions release enormous energy"
                ],
                theory: "Nuclear chemistry studies reactions involving atomic nuclei. Unlike chemical reactions which involve electrons, nuclear reactions involve protons and neutrons. Radioactive decay, fission, and fusion release energy according to E = mc².",
                keyDefinitions: {
                    "Radioactivity": "Spontaneous emission of particles or energy from unstable nucleus",
                    "Alpha Decay": "Emission of helium nucleus (₂⁴He)",
                    "Beta Decay": "Conversion of neutron to proton with electron emission",
                    "Gamma Decay": "Emission of high-energy electromagnetic radiation",
                    "Half-Life": "Time for half of radioactive sample to decay",
                    "Nuclear Fission": "Splitting heavy nucleus into lighter nuclei",
                    "Nuclear Fusion": "Combining light nuclei into heavier nucleus",
                    "Isotope": "Atoms with same protons but different neutrons",
                    "Radioactive Decay Series": "Sequence of decay reactions to stable isotope",
                    "Activity": "Number of decay events per unit time (measured in Becquerels)"
                },
                mainCategories: [
                    "Types of radioactive decay",
                    "Nuclear equations and balancing",
                    "Half-life calculations",
                    "Nuclear fission and fusion"
                ],
                applications: [
                    "Medical imaging and cancer treatment",
                    "Nuclear power generation",
                    "Radiocarbon dating",
                    "Industrial radiography and sterilization"
                ]
            },

            laboratory_chemistry: {
                title: "Laboratory Chemistry: Techniques and Procedures",
                concepts: [
                    "Accurate measurement is fundamental to chemistry",
                    "Separation techniques isolate components",
                    "Analytical techniques identify and quantify substances",
                    "Safety procedures prevent accidents"
                ],
                theory: "Laboratory chemistry involves practical techniques for preparing, separating, analyzing, and measuring chemical substances. Proper technique ensures accurate results and safe operations. Understanding equipment and procedures is essential for experimental chemistry.",
                keyDefinitions: {
                    "Accuracy": "How close a measurement is to the true value",
                    "Precision": "How close repeated measurements are to each other",
                    "Titration": "Technique to determine concentration using neutralization",
                    "Gravimetric Analysis": "Quantitative analysis by mass measurement",
                    "Spectroscopy": "Analysis using interaction with electromagnetic radiation",
                    "Chromatography": "Separation based on differential movement through medium",
                    "Distillation": "Separation based on boiling point differences",
                    "Filtration": "Separation of solid from liquid",
                    "Significant Figures": "Digits that carry meaning in measurement",
                    "Standard Solution": "Solution with precisely known concentration"
                },
                mainCategories: [
                    "Measurement and significant figures",
                    "Separation techniques (distillation, chromatography, filtration)",
                    "Analytical techniques (titration, spectroscopy, gravimetric)",
                    "Laboratory safety and equipment"
                ],
                applications: [
                    "Quality control in manufacturing",
                    "Environmental testing and monitoring",
                    "Forensic analysis",
                    "Pharmaceutical development and testing"
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.commonMisconceptions = {
            stoichiometry: {
                'Mole Concept': [
                    'Thinking moles are a unit of mass (moles count particles, not mass)',
                    'Confusing molar mass with molecular mass units',
                    'Believing coefficients in equations represent masses instead of mole ratios'
                ],
                'Limiting Reagent': [
                    'Thinking the reactant with the smallest mass is limiting (must use mole ratios)',
                    'Assuming the reactant with fewer moles is always limiting',
                    'Forgetting to consider stoichiometric ratios when identifying limiting reagent'
                ],
                'Percent Yield': [
                    'Thinking percent yield can exceed 100% (indicates error or impurities)',
                    'Confusing theoretical yield with actual yield',
                    'Not accounting for side reactions or losses'
                ]
            },
            
            organic_chemistry: {
                'Bonding': [
                    'Thinking carbon can form more or fewer than 4 bonds in stable molecules',
                    'Forgetting that carbon forms chains and rings',
                    'Confusing single, double, and triple bonds'
                ],
                'Isomers': [
                    'Thinking isomers have different molecular formulas (same formula, different structure)',
                    'Not recognizing that isomers have different properties',
                    'Confusing structural isomers with the same molecule drawn differently'
                ],
                'Functional Groups': [
                    'Thinking all -OH groups are the same (alcohol vs carboxylic acid)',
                    'Not recognizing how functional groups determine reactivity',
                    'Confusing aldehydes and ketones (both have C=O)'
                ]
            },
            
            redox: {
                'Oxidation and Reduction': [
                    'Thinking oxidation always involves oxygen (it\'s about electron loss)',
                    'Believing oxidation number is the actual charge (it\'s a bookkeeping tool)',
                    'Confusing which species is oxidized vs which is the oxidizing agent'
                ],
                'Oxidation Numbers': [
                    'Thinking oxidation number equals formal charge',
                    'Not following the rules systematically',
                    'Forgetting that sum of oxidation numbers equals charge'
                ],
                'Electrochemistry': [
                    'Confusing anode and cathode (anode is oxidation site)',
                    'Thinking electrons flow through the salt bridge (ions flow, not electrons)',
                    'Believing galvanic and electrolytic cells work the same way'
                ]
            },
            
            acid_base: {
                'pH Scale': [
                    'Thinking pH is a linear scale (it\'s logarithmic)',
                    'Believing pH 7 is always neutral (only at 25°C in water)',
                    'Not understanding that pH 6 is 10× more acidic than pH 7'
                ],
                'Strong vs Weak': [
                    'Confusing concentration with strength (strong = completely ionizes)',
                    'Thinking strong acids are more dangerous (concentrated weak acids can be)',
                    'Believing weak acids don\'t conduct electricity (they do, just less)'
                ],
                'Buffers': [
                    'Thinking buffers prevent pH change completely (they resist change)',
                    'Not understanding buffer capacity limits',
                    'Believing any acid-base mixture is a buffer (needs weak acid + conjugate base)'
                ]
            },
            
            equilibrium: {
                'Equilibrium Constant': [
                    'Thinking equilibrium means equal concentrations (means equal rates)',
                    'Believing K changes with concentration (only temperature changes K)',
                    'Not understanding that large K means products favored'
                ],
                'Le Chatelier\'s Principle': [
                    'Thinking adding catalyst shifts equilibrium (catalysts don\'t shift, just speed up)',
                    'Not considering the entire stress-response cycle',
                    'Forgetting that temperature is unique (it changes K value)'
                ],
                'Reaction Quotient': [
                    'Confusing Q with K (Q is at any point, K is at equilibrium)',
                    'Not using Q to predict shift direction',
                    'Thinking Q = K means no reaction occurring (means equilibrium)'
                ]
            },
            
            kinetics_thermodynamics: {
                'Kinetics': [
                    'Confusing thermodynamics with kinetics (feasible ≠ fast)',
                    'Thinking higher temperature always increases yield (it increases rate)',
                    'Not understanding that catalysts don\'t change equilibrium position'
                ],
                'Activation Energy': [
                    'Thinking Ea is the same as enthalpy change',
                    'Believing all molecules have enough energy to react',
                    'Not understanding how catalysts lower Ea'
                ],
                'Thermodynamics': [
                    'Thinking exothermic reactions are always spontaneous',
                    'Confusing enthalpy with Gibbs free energy',
                    'Not considering entropy in spontaneity predictions',
                    'Believing spontaneous means fast (spontaneous means energetically favorable)'
                ]
            },
            
            atomic_structure: {
                'Electron Configuration': [
                    'Not following Aufbau principle correctly',
                    'Forgetting that 4s fills before 3d',
                    'Thinking electrons are in fixed orbits (they\'re in probability clouds)'
                ],
                'Periodic Trends': [
                    'Not understanding why trends occur',
                    'Confusing atomic radius and ionic radius',
                    'Thinking all properties increase or decrease uniformly'
                ],
                'Orbitals': [
                    'Thinking orbitals are orbits (they\'re regions of probability)',
                    'Not understanding orbital shapes and orientations',
                    'Confusing energy levels with sublevels'
                ]
            },
            
            chemical_bonding: {
                'Bond Types': [
                    'Thinking bonding is purely ionic or covalent (most are somewhere between)',
                    'Not understanding that ionic bonds form between metals and nonmetals',
                    'Believing covalent bonds only form between identical atoms'
                ],
                'Lewis Structures': [
                    'Not counting total valence electrons correctly',
                    'Forgetting octet rule exceptions (H wants 2, B wants 6, expanded octets)',
                    'Not considering resonance structures'
                ],
                'Molecular Geometry': [
                    'Confusing electron geometry with molecular geometry',
                    'Forgetting to count lone pairs in VSEPR',
                    'Not understanding how geometry affects polarity'
                ]
            },
            
            states_of_matter: {
                'Phase Changes': [
                    'Thinking temperature changes during phase transition (it doesn\'t)',
                    'Not understanding latent heat',
                    'Confusing evaporation with boiling'
                ],
                'Gas Laws': [
                    'Not keeping units consistent in ideal gas law',
                    'Forgetting to convert Celsius to Kelvin',
                    'Thinking gases behave ideally at all conditions (fails at high P, low T)'
                ],
                'Kinetic Theory': [
                    'Thinking gas particles have size (ideal gas assumes point masses)',
                    'Not understanding temperature as average kinetic energy',
                    'Believing all particles move at same speed (range of speeds)'
                ]
            },
            
            nuclear_chemistry: {
                'Radioactivity': [
                    'Thinking radioactivity can be stopped by chemical means',
                    'Confusing nuclear reactions with chemical reactions',
                    'Not understanding that radioactive decay is random but predictable statistically'
                ],
                'Half-Life': [
                    'Thinking half-life is time for all sample to decay',
                    'Not understanding exponential decay',
                    'Believing half-life depends on amount of sample'
                ],
                'Nuclear Equations': [
                    'Not balancing mass numbers and atomic numbers separately',
                    'Forgetting about conservation laws',
                    'Confusing isotope notation'
                ]
            },
            
            laboratory_chemistry: {
                'Measurement': [
                    'Not understanding significant figures',
                    'Confusing accuracy with precision',
                    'Not using proper technique for measurements'
                ],
                'Techniques': [
                    'Not understanding when to use each separation technique',
                    'Improper titration technique (endpoint vs equivalence point)',
                    'Not considering experimental error sources'
                ],
                'Safety': [
                    'Not treating all chemicals as potentially hazardous',
                    'Improper waste disposal',
                    'Not wearing appropriate safety equipment'
                ]
            }
        };

        this.clarificationStrategies = {
            visual_comparison: {
                method: 'Use side-by-side diagrams, molecular models, or energy diagrams',
                effectiveness: 'High for structural and process comparisons'
            },
            analogy: {
                method: 'Relate chemical concepts to familiar everyday examples',
                effectiveness: 'High for abstract concepts like equilibrium, kinetics'
            },
            step_by_step: {
                method: 'Break down complex processes into sequential steps',
                effectiveness: 'High for understanding mechanisms and calculations'
            },
            contrast_table: {
                method: 'Create comparison tables showing key differences',
                effectiveness: 'High for distinguishing similar concepts'
            },
            mathematical_approach: {
                method: 'Use equations and calculations to demonstrate concepts',
                effectiveness: 'High for quantitative topics'
            },
            experimental_demonstration: {
                method: 'Reference or describe experiments that demonstrate concepts',
                effectiveness: 'High for understanding practical applications'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            structural: {
                focus: 'Physical arrangement and molecular structure',
                language: 'descriptive and spatial'
            },
            functional: {
                focus: 'Purpose and mechanisms of reactions',
                language: 'process-oriented and causal'
            },
            comparative: {
                focus: 'Similarities and differences between concepts',
                language: 'contrastive and analytical'
            },
            quantitative: {
                focus: 'Mathematical relationships and calculations',
                language: 'numerical and formulaic'
            },
            experimental: {
                focus: 'Laboratory techniques and observations',
                language: 'procedural and observational'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential information only',
                examples: 'concrete and familiar',
                mathematics: 'minimal calculations'
            },
            intermediate: {
                vocabulary: 'standard chemical terms',
                detail: 'main concepts with explanations',
                examples: 'mix of familiar and technical',
                mathematics: 'basic calculations with guidance'
            },
            detailed: {
                vocabulary: 'full scientific terminology',
                detail: 'comprehensive with mechanisms',
                examples: 'technical and research-based',
                mathematics: 'advanced calculations and derivations'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery approach',
                examples: 'carefully sequenced difficulty',
                mathematics: 'step-by-step problem solving'
            }
        };
    }

    // MAIN HANDLER METHOD
    handleChemistryProblem(config) {
        const { topic, parameters, subTopic, context } = config;

        try {
            // Parse the chemistry query
            this.currentProblem = this.parseChemistryProblem(topic, parameters, subTopic, context);

            // Get content based on topic
            this.currentContent = this.getChemistryContent(this.currentProblem);

            // Generate content steps/sections
            this.contentSteps = this.generateChemistryContent(this.currentProblem, this.currentContent);

            // Generate diagram data if applicable
            this.generateChemistryDiagramData();

            // Generate workbook
            this.generateChemistryWorkbook();

            return {
                workbook: this.currentWorkbook,
                content: this.currentContent,
                diagrams: this.diagramData
            };

        } catch (error) {
            throw new Error(`Failed to process chemistry topic: ${error.message}`);
        }
    }

    parseChemistryProblem(topic, parameters = {}, subTopic = null, context = {}) {
        let topicType = null;

        // Match topic to handler
        for (const [type, config] of Object.entries(this.chemistryTopics)) {
            if (type === topic || type === subTopic) {
                topicType = type;
                break;
            }
            
            for (const pattern of config.patterns) {
                if (pattern.test(topic) || (subTopic && pattern.test(subTopic))) {
                    topicType = type;
                    break;
                }
            }
            if (topicType) break;
        }

        if (!topicType) {
            throw new Error(`Unable to recognize chemistry topic: ${topic}`);
        }

        return {
            originalTopic: topic,
            type: topicType,
            subTopic: subTopic,
            parameters: { ...parameters },
            context: { ...context },
            parsedAt: new Date().toISOString()
        };
    }

    getChemistryContent(problem) {
        const handler = this.chemistryTopics[problem.type]?.handler;
        if (!handler) {
            throw new Error(`No handler available for chemistry topic: ${problem.type}`);
        }

        return handler(problem);
    }

    // TOPIC HANDLERS - Each returns structured chemistry content

    handleStoichiometry(problem) {
        const { subTopic, parameters } = problem;

        return {
            topic: "Stoichiometry",
            category: 'quantitative_chemistry',
            summary: "Stoichiometry uses balanced chemical equations and the mole concept to calculate quantitative relationships between reactants and products in chemical reactions.",
            
            fundamentalConcepts: [
                {
                    name: "The Mole",
                    definition: "A mole is 6.022 × 10²³ particles (Avogadro's number)",
                    significance: "Connects atomic scale to laboratory scale",
                    analogy: "Like a 'dozen' but for atoms and molecules",
                    examples: [
                        "1 mole of C atoms = 6.022 × 10²³ C atoms = 12.01 g",
                        "1 mole of H₂O molecules = 6.022 × 10²³ H₂O molecules = 18.02 g",
                        "1 mole of NaCl = 6.022 × 10²³ NaCl formula units = 58.44 g"
                    ]
                },
                {
                    name: "Molar Mass",
                    definition: "Mass in grams of one mole of a substance",
                    calculation: "Sum of atomic masses from periodic table",
                    units: "g/mol",
                    examples: [
                        "H₂O: (2 × 1.01) + (1 × 16.00) = 18.02 g/mol",
                        "CO₂: (1 × 12.01) + (2 × 16.00) = 44.01 g/mol",
                        "Ca(OH)₂: (1 × 40.08) + (2 × 16.00) + (2 × 1.01) = 74.10 g/mol"
                    ]
                },
                {
                    name: "Balanced Chemical Equations",
                    purpose: "Show mole ratios between reactants and products",
                    lawOfConservation: "Mass is conserved - atoms aren't created or destroyed",
                    coefficients: "Represent mole ratios, not mass ratios",
                    example: {
                        equation: "2H₂ + O₂ → 2H₂O",
                        meaning: "2 moles H₂ react with 1 mole O₂ to produce 2 moles H₂O",
                        moleRatio: "2:1:2",
                        notValid: "2 grams H₂ + 1 gram O₂ → 2 grams H₂O (wrong!)"
                    }
                }
            ],

            conversionTypes: [
                {
                    type: "Mass to Moles",
                    formula: "moles = mass (g) / molar mass (g/mol)",
                    example: "How many moles in 36 g H₂O?",
                    solution: "36 g ÷ 18.02 g/mol = 2.0 mol H₂O"
                },
                {
                    type: "Moles to Mass",
                    formula: "mass (g) = moles × molar mass (g/mol)",
                    example: "What is mass of 0.5 mol NaCl?",
                    solution: "0.5 mol × 58.44 g/mol = 29.22 g NaCl"
                },
                {
                    type: "Moles to Particles",
                    formula: "particles = moles × 6.022 × 10²³",
                    example: "How many molecules in 2 mol H₂O?",
                    solution: "2 mol × 6.022 × 10²³ = 1.204 × 10²⁴ molecules"
                },
                {
                    type: "Particles to Moles",
                    formula: "moles = particles / 6.022 × 10²³",
                    example: "How many moles is 3.011 × 10²³ atoms?",
                    solution: "3.011 × 10²³ ÷ 6.022 × 10²³ = 0.5 mol"
                }
            ],

            stoichiometricCalculations: {
                generalApproach: [
                    "1. Write balanced equation",
                    "2. Convert given quantity to moles",
                    "3. Use mole ratio from equation",
                    "4. Convert to desired unit"
                ],
                example: {
                    problem: "How many grams of H₂O form from 4.0 g H₂?",
                    equation: "2H₂ + O₂ → 2H₂O",
                    solution: [
                        "Convert H₂ to moles: 4.0 g ÷ 2.02 g/mol = 1.98 mol H₂",
                        "Use mole ratio: 1.98 mol H₂ × (2 mol H₂O / 2 mol H₂) = 1.98 mol H₂O",
                        "Convert to grams: 1.98 mol × 18.02 g/mol = 35.7 g H₂O"
                    ],
                    answer: "35.7 g H₂O"
                }
            },

            limitingReagent: {
                definition: "Reactant that is completely consumed, limiting product formation",
                determination: [
                    "Method 1: Calculate product from each reactant; lowest is from limiting reagent",
                    "Method 2: Compare mole ratios to stoichiometric ratio"
                ],
                excessReagent: "Reactant that remains after reaction completes",
                example: {
                    problem: "10 g H₂ and 80 g O₂ react. Which is limiting?",
                    equation: "2H₂ + O₂ → 2H₂O",
                    solution: [
                        "Moles H₂: 10 g ÷ 2.02 g/mol = 4.95 mol",
                        "Moles O₂: 80 g ÷ 32.00 g/mol = 2.50 mol",
                        "From H₂: 4.95 mol H₂ × (2 mol H₂O / 2 mol H₂) = 4.95 mol H₂O",
                        "From O₂: 2.50 mol O₂ × (2 mol H₂O / 1 mol O₂) = 5.00 mol H₂O",
                        "H₂ produces less H₂O, so H₂ is limiting"
                    ],
                    limitingReagent: "H₂",
                    excessReagent: "O₂"
                }
            },

            percentYield: {
                definition: "Comparison of actual yield to theoretical yield",
                formula: "% yield = (actual yield / theoretical yield) × 100%",
                theoreticalYield: "Maximum amount of product that can form",
                actualYield: "Amount of product actually obtained",
                reasonsForLowerYield: [
                    "Incomplete reactions",
                    "Side reactions forming other products",
                    "Product lost during purification",
                    "Measurement errors"
                ],
                example: {
                    problem: "Theoretical yield is 50 g, actual yield is 42 g. Find % yield.",
                    solution: "(42 g / 50 g) × 100% = 84%",
                    answer: "84% yield"
                },
                note: "Percent yield over 100% indicates error (impurities, measurement mistakes)"
            },

            applications: [
                "Industrial chemical production optimization",
                "Pharmaceutical drug synthesis",
                "Environmental chemistry (pollution control)",
                "Food chemistry and nutrition",
                "Fuel combustion calculations"
            ],

            keyFormulas: {
                "Moles from mass": "n = m / M",
                "Mass from moles": "m = n × M",
                "Particles from moles": "N = n × Nₐ",
                "Percent yield": "% = (actual / theoretical) × 100%"
            }
        };
    }

    handleOrganicChemistry(problem) {
        return {
            topic: "Organic Chemistry",
            category: 'organic',
            summary: "Organic chemistry studies carbon-containing compounds. Carbon's unique ability to form four stable covalent bonds and chain with itself creates enormous molecular diversity.",

            fundamentalConcepts: [
                {
                    name: "Carbon's Unique Properties",
                    characteristics: [
                        "Forms 4 covalent bonds (tetravalent)",
                        "Can bond with itself to form chains and rings",
                        "Forms single, double, and triple bonds",
                        "Forms stable bonds with H, O, N, S, halogens"
                    ],
                    significance: "Enables millions of different organic molecules",
                    bondingPatterns: {
                        single: "sp³ hybridization, tetrahedral, 109.5°",
                        double: "sp² hybridization, trigonal planar, 120°",
                        triple: "sp hybridization, linear, 180°"
                    }
                },
                {
                    name: "Hydrocarbons",
                    definition: "Compounds containing only carbon and hydrogen",
                    importance: "Simplest organic compounds; basis for all others"
                }
            ],

            hydrocarbonTypes: [
                {
                    name: "Alkanes",
                    description: "Saturated hydrocarbons with only single bonds",
                    generalFormula: "CₙH₂ₙ₊₂",
                    suffix: "-ane",
                    examples: [
                        { name: "Methane", formula: "CH₄", structure: "One carbon" },
                        { name: "Ethane", formula: "C₂H₆", structure: "Two carbons" },
                        { name: "Propane", formula: "C₃H₈", structure: "Three carbons" },
                        { name: "Butane", formula: "C₄H₁₀", structure: "Four carbons" }
                    ],
                    properties: "Relatively unreactive, undergo combustion and substitution"
                },
                {
                    name: "Alkenes",
                    description: "Unsaturated hydrocarbons with one or more C=C double bonds",
                    generalFormula: "CₙH₂ₙ",
                    suffix: "-ene",
                    examples: [
                        { name: "Ethene (Ethylene)", formula: "C₂H₄", structure: "CH₂=CH₂" },
                        { name: "Propene", formula: "C₃H₆", structure: "CH₂=CH-CH₃" },
                        { name: "Butene", formula: "C₄H₈", structure: "CH₂=CH-CH₂-CH₃" }
                    ],
                    properties: "More reactive than alkanes, undergo addition reactions"
                },
                {
                    name: "Alkynes",
                    description: "Unsaturated hydrocarbons with one or more C≡C triple bonds",
                    generalFormula: "CₙH₂ₙ₋₂",
                    suffix: "-yne",
                    examples: [
                        { name: "Ethyne (Acetylene)", formula: "C₂H₂", structure: "CH≡CH" },
                        { name: "Propyne", formula: "C₃H₄", structure: "CH≡C-CH₃" }
                    ],
                    properties: "Very reactive, undergo addition reactions"
                },
                {
                    name: "Aromatic Hydrocarbons",
                    description: "Ring compounds with delocalized electrons",
                    keyExample: "Benzene (C₆H₆)",
                    structure: "Six-membered ring with alternating double bonds (resonance)",
                    properties: "Unusually stable due to resonance, undergo substitution",
                    examples: ["Benzene", "Toluene", "Naphthalene"]
                }
            ],

            functionalGroups: [
                {
                    name: "Alcohols",
                    group: "-OH (hydroxyl)",
                    suffix: "-ol",
                    example: "Ethanol (CH₃CH₂OH)",
                    properties: "Can hydrogen bond, polar, often soluble in water",
                    uses: "Solvents, beverages, disinfectants"
                },
                {
                    name: "Aldehydes",
                    group: "-CHO (carbonyl at end of chain)",
                    suffix: "-al",
                    example: "Methanal/Formaldehyde (HCHO)",
                    properties: "Polar, reactive carbonyl group",
                    uses: "Preservatives, synthesis intermediates"
                },
                {
                    name: "Ketones",
                    group: "C=O (carbonyl within chain)",
                    suffix: "-one",
                    example: "Propanone/Acetone (CH₃COCH₃)",
                    properties: "Polar, good solvents",
                    uses: "Solvents, nail polish remover"
                },
                {
                    name: "Carboxylic Acids",
                    group: "-COOH (carboxyl)",
                    suffix: "-oic acid",
                    example: "Ethanoic acid/Acetic acid (CH₃COOH)",
                    properties: "Acidic (donate H⁺), polar",
                    uses: "Vinegar, food preservatives, synthesis"
                },
                {
                    name: "Esters",
                    group: "-COO- (from acid + alcohol)",
                    suffix: "-oate",
                    example: "Ethyl ethanoate (CH₃COOCH₂CH₃)",
                    properties: "Pleasant smell, often fruity",
                    uses: "Flavoring, fragrances, solvents"
                },
                {
                    name: "Amines",
                    group: "-NH₂ (amino)",
                    suffix: "-amine",
                    example: "Methylamine (CH₃NH₂)",
                    properties: "Basic (accept H⁺), fishy smell",
                    uses: "Pharmaceuticals, dyes, polymers"
                },
                {
                    name: "Halogenoalkanes (Alkyl Halides)",
                    group: "-X (F, Cl, Br, I)",
                    prefix: "fluoro-, chloro-, bromo-, iodo-",
                    example: "Chloromethane (CH₃Cl)",
                    properties: "Polar, reactive",
                    uses: "Solvents, refrigerants, synthesis"
                }
            ],

            isomerism: {
                definition: "Molecules with same molecular formula but different structure",
                types: [
                    {
                        name: "Structural (Constitutional) Isomers",
                        description: "Different connectivity of atoms",
                        subtypes: [
                            {
                                name: "Chain Isomers",
                                description: "Different carbon skeleton arrangements",
                                example: "Butane (straight chain) vs 2-methylpropane (branched)"
                            },
                            {
                                name: "Position Isomers",
                                description: "Functional group in different positions",
                                example: "1-propanol (OH at end) vs 2-propanol (OH in middle)"
                            },
                            {
                                name: "Functional Group Isomers",
                                description: "Different functional groups",
                                example: "Ethanol (C₂H₆O, alcohol) vs dimethyl ether (C₂H₆O, ether)"
                            }
                        ]
                    },
                    {
                        name: "Stereoisomers",
                        description: "Same connectivity but different 3D arrangement",
                        subtypes: [
                            {
                                name: "Geometric (Cis-Trans)",
                                description: "Different arrangement around double bond",
                                example: "Cis-2-butene vs trans-2-butene",
                                requirement: "Restricted rotation (double bond or ring)"
                            },
                            {
                                name: "Optical Isomers (Enantiomers)",
                                description: "Non-superimposable mirror images",
                                requirement: "Chiral center (carbon with 4 different groups)",
                                property: "Rotate plane-polarized light in opposite directions"
                            }
                        ]
                    }
                ],
                significance: "Isomers have different physical and chemical properties despite same formula"
            },

            nomenclature: {
                IUPACRules: [
                    "1. Find longest continuous carbon chain (parent)",
                    "2. Number chain to give substituents lowest numbers",
                    "3. Name and number substituents",
                    "4. Assemble name: substituents (alphabetically) + parent + suffix"
                ],
                examples: [
                    {
                        structure: "CH₃-CH₂-CH₂-CH₃",
                        name: "Butane",
                        explanation: "4 carbons, all single bonds"
                    },
                    {
                        structure: "CH₃-CH(CH₃)-CH₃",
                        name: "2-methylpropane",
                        explanation: "3-carbon parent, methyl group on carbon 2"
                    },
                    {
                        structure: "CH₃-CH=CH₂",
                        name: "Propene",
                        explanation: "3 carbons, double bond starting at carbon 1"
                    },
                    {
                        structure: "CH₃-CH₂-OH",
                        name: "Ethanol",
                        explanation: "2 carbons, -OH group"
                    }
                ]
            },

            organicReactions: [
                {
                    type: "Combustion",
                    description: "Reaction with oxygen to produce CO₂ and H₂O",
                    example: "CH₄ + 2O₂ → CO₂ + 2H₂O",
                    conditions: "Oxygen present, often with heat",
                    application: "Fuel burning, energy production"
                },
                {
                    type: "Substitution",
                    description: "One atom/group replaced by another",
                    example: "CH₄ + Cl₂ → CH₃Cl + HCl (in UV light)",
                    typical: "Alkanes and aromatic compounds",
                    application: "Synthesis of halogenated compounds"
                },
                {
                    type: "Addition",
                    description: "Atoms/groups added across double/triple bond",
                    example: "C₂H₄ + H₂ → C₂H₆ (hydrogenation)",
                    typical: "Alkenes and alkynes",
                    application: "Polymer production, margarine manufacture"
                },
                {
                    type: "Elimination",
                    description: "Removal of atoms/groups to form double bond",
                    example: "C₂H₅OH → C₂H₄ + H₂O (dehydration)",
                    typical: "Alcohols to alkenes",
                    application: "Synthesis of unsaturated compounds"
                },
                {
                    type: "Esterification",
                    description: "Carboxylic acid + alcohol → ester + water",
                    example: "CH₃COOH + CH₃OH → CH₃COOCH₃ + H₂O",
                    catalyst: "Concentrated H₂SO₄",
                    application: "Fragrance and flavor production"
                },
                {
                    type: "Oxidation",
                    description: "Addition of oxygen or removal of hydrogen",
                    examples: [
                        "Primary alcohol → aldehyde → carboxylic acid",
                        "Secondary alcohol → ketone",
                        "Tertiary alcohol → no oxidation"
                    ],
                    oxidizingAgent: "Acidified potassium dichromate (K₂Cr₂O₇)",
                    application: "Synthesis of carbonyl compounds and acids"
                }
            ],

            applications: [
                "Pharmaceuticals (drug design and synthesis)",
                "Polymers (plastics, fibers, rubbers)",
                "Fuels and energy",
                "Cosmetics and personal care",
                "Food additives and flavorings",
                "Agricultural chemicals (pesticides, herbicides)"
            ],

            importantConcepts: {
                saturation: "Saturated = all single bonds; Unsaturated = contains double/triple bonds",
                homologousSeries: "Family of compounds with same functional group, differing by CH₂",
                carbonylGroup: "C=O found in aldehydes, ketones, carboxylic acids, esters",
                hydrophobicity: "Most organic compounds are nonpolar and water-insoluble"
            }
        };
    }

    handleRedox(problem) {
        return {
            topic: "Redox Reactions (Oxidation-Reduction)",
            category: 'reactions',
            summary: "Redox reactions involve the transfer of electrons from one species to another. They are fundamental to energy production, corrosion, battery operation, and many industrial processes.",

            fundamentalConcepts: [
                {
                    name: "Oxidation and Reduction",
                    definitions: {
                        oxidation: "Loss of electrons (increase in oxidation number)",
                        reduction: "Gain of electrons (decrease in oxidation number)"
                    },
                    mnemonic: "OIL RIG - Oxidation Is Loss, Reduction Is Gain (of electrons)",
                    alternativeMnemonic: "LEO says GER - Loss of Electrons is Oxidation, Gain of Electrons is Reduction",
                    keyPrinciple: "Oxidation and reduction ALWAYS occur together",
                    historical: "Originally oxidation meant combining with oxygen; now generalized to electron loss"
                },
                {
                    name: "Oxidizing and Reducing Agents",
                    definitions: {
                        oxidizingAgent: "Substance that causes oxidation (itself gets reduced)",
                        reducingAgent: "Substance that causes reduction (itself gets oxidized)"
                    },
                    example: "Zn + Cu²⁺ → Zn²⁺ + Cu",
                    analysis: {
                        zincRole: "Reducing agent (loses electrons, gets oxidized)",
                        copperRole: "Oxidizing agent (gains electrons, gets reduced)"
                    },
                    note: "The substance oxidized is the reducing agent; substance reduced is oxidizing agent"
                }
            ],

            oxidationNumbers: {
                definition: "Hypothetical charge an atom would have if all bonds were completely ionic",
                purpose: "Bookkeeping tool to track electron transfer",
                rules: [
                    {
                        rule: "1. Free elements have oxidation number of 0",
                        examples: ["O₂, H₂, N₂, Fe, C: all have oxidation number 0"]
                    },
                    {
                        rule: "2. Monatomic ions: oxidation number = charge",
                        examples: ["Na⁺: +1", "Cl⁻: -1", "Ca²⁺: +2", "O²⁻: -2"]
                    },
                    {
                        rule: "3. Oxygen is usually -2",
                        exceptions: ["Peroxides (H₂O₂): -1", "OF₂: +2", "Free O₂: 0"]
                    },
                    {
                        rule: "4. Hydrogen is usually +1",
                        exceptions: ["Metal hydrides (NaH): -1", "Free H₂: 0"]
                    },
                    {
                        rule: "5. Halogens usually -1 in binary compounds",
                        exception: "When combined with oxygen or more electronegative halogen"
                    },
                    {
                        rule: "6. Sum of oxidation numbers = charge on species",
                        examples: [
                            "Neutral molecule: sum = 0",
                            "Polyatomic ion: sum = charge on ion"
                        ]
                    }
                ],
                examples: [
                    {
                        compound: "H₂SO₄",
                        calculation: "H: +1 (×2), O: -2 (×4), S: +6",
                        verification: "2(+1) + (+6) + 4(-2) = 0 ✓"
                    },
                    {
                        ion: "Cr₂O₇²⁻",
                        calculation: "O: -2 (×7), Cr: +6 (×2)",
                        verification: "2(+6) + 7(-2) = -2 ✓"
                    },
                    {
                        compound: "NH₃",
                        calculation: "H: +1 (×3), N: -3",
                        verification: "(-3) + 3(+1) = 0 ✓"
                    }
                ]
            },

            identifyingRedoxReactions: {
                method: "Check if oxidation numbers change",
                steps: [
                    "1. Assign oxidation numbers to all atoms",
                    "2. Compare oxidation numbers before and after reaction",
                    "3. If any oxidation numbers change, it's a redox reaction"
                ],
                examples: [
                    {
                        reaction: "2Mg + O₂ → 2MgO",
                        analysis: {
                            before: "Mg: 0, O: 0",
                            after: "Mg: +2, O: -2",
                            conclusion: "REDOX (Mg oxidized 0→+2, O reduced 0→-2)"
                        }
                    },
                    {
                        reaction: "HCl + NaOH → NaCl + H₂O",
                        analysis: {
                            before: "H: +1, Cl: -1, Na: +1, O: -2",
                            after: "Na: +1, Cl: -1, H: +1, O: -2",
                            conclusion: "NOT REDOX (no oxidation number changes)"
                        }
                    },
                    {
                        reaction: "Fe + CuSO₄ → FeSO₄ + Cu",
                        analysis: {
                            before: "Fe: 0, Cu: +2",
                            after: "Fe: +2, Cu: 0",
                            conclusion: "REDOX (Fe oxidized 0→+2, Cu reduced +2→0)"
                        }
                    }
                ]
            },

            halfReactions: {
                definition: "Separate oxidation and reduction parts of redox reaction",
                format: "Shows electrons explicitly",
                types: {
                    oxidationHalf: "Shows loss of electrons (electrons on product side)",
                    reductionHalf: "Shows gain of electrons (electrons on reactant side)"
                },
                example: {
                    overallReaction: "Zn + Cu²⁺ → Zn²⁺ + Cu",
                    oxidationHalf: "Zn → Zn²⁺ + 2e⁻",
                    reductionHalf: "Cu²⁺ + 2e⁻ → Cu",
                    note: "Electrons lost = electrons gained (2e⁻ in each half-reaction)"
                }
            },

            balancingRedoxEquations: {
                method: "Half-Reaction Method",
                acidicSolution: [
                    "1. Separate into half-reactions",
                    "2. Balance atoms other than O and H",
                    "3. Balance O by adding H₂O",
                    "4. Balance H by adding H⁺",
                    "5. Balance charge by adding e⁻",
                    "6. Multiply to equalize electrons",
                    "7. Add half-reactions and simplify"
                ],
                basicSolution: [
                    "Follow acidic solution steps 1-7",
                    "8. Add OH⁻ to neutralize H⁺",
                    "9. Combine H⁺ and OH⁻ to form H₂O",
                    "10. Simplify by canceling H₂O"
                ],
                example: {
                    problem: "Balance: MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺ (acidic)",
                    solution: [
                        "Reduction: MnO₄⁻ → Mn²⁺",
                        "Add H₂O: MnO₄⁻ → Mn²⁺ + 4H₂O",
                        "Add H⁺: MnO₄⁻ + 8H⁺ → Mn²⁺ + 4H₂O",
                        "Add e⁻: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O",
                        "",
                        "Oxidation: Fe²⁺ → Fe³⁺ + e⁻",
                        "Multiply by 5: 5Fe²⁺ → 5Fe³⁺ + 5e⁻",
                        "",
                        "Add: MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O"
                    ]
                }
            },

            electrochemistry: {
                definition: "Study of relationship between chemical reactions and electricity",
                types: [
                    {
                        name: "Galvanic (Voltaic) Cell",
                        description: "Spontaneous redox reaction generates electricity",
                        example: "Batteries",
                        components: {
                            anode: "Oxidation occurs (negative electrode)",
                            cathode: "Reduction occurs (positive electrode)",
                            saltBridge: "Allows ion flow, maintains electrical neutrality",
                            externalCircuit: "Electrons flow from anode to cathode"
                        },
                        cellNotation: "Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s)",
                        mnemonic: "AN OX, RED CAT (Anode Oxidation, Reduction Cathode)"
                    },
                    {
                        name: "Electrolytic Cell",
                        description: "Non-spontaneous reaction driven by external electricity",
                        example: "Electroplating, electrolysis of water",
                        components: {
                            anode: "Oxidation occurs (positive electrode connected to + terminal)",
                            cathode: "Reduction occurs (negative electrode connected to - terminal)"
                        },
                        note: "Electrode charges opposite of galvanic cell"
                    }
                ],
                cellPotential: {
                    definition: "Voltage produced by electrochemical cell",
                    symbol: "E°cell",
                    calculation: "E°cell = E°cathode - E°anode",
                    standardConditions: "25°C, 1 M concentrations, 1 atm pressure",
                    spontaneity: "E°cell > 0 → spontaneous reaction"
                }
            },

            commonRedoxReactions: [
                {
                    type: "Combustion",
                    example: "CH₄ + 2O₂ → CO₂ + 2H₂O",
                    description: "Organic compound oxidized by oxygen"
                },
                {
                    type: "Corrosion",
                    example: "4Fe + 3O₂ → 2Fe₂O₃ (rust)",
                    description: "Oxidation of metals in air/water"
                },
                {
                    type: "Metal Displacement",
                    example: "Zn + CuSO₄ → ZnSO₄ + Cu",
                    description: "More reactive metal reduces less reactive metal ion"
                },
                {
                    type: "Disproportionation",
                    example: "2H₂O₂ → 2H₂O + O₂",
                    description: "Same element both oxidized and reduced"
                }
            ],

            applications: [
                "Batteries and fuel cells (energy storage)",
                "Corrosion prevention (sacrificial anodes)",
                "Electroplating (coating metals)",
                "Metal extraction (electrolysis of ores)",
                "Water purification (chlorination)",
                "Bleaching and disinfection"
            ],

            keyPoints: {
                electronBalance: "Electrons lost in oxidation = electrons gained in reduction",
                chargeBalance: "Total charge must be equal on both sides of equation",
                massBalance: "Atoms must be balanced on both sides",
                spontaneity: "Redox reactions with positive cell potential are spontaneous"
            }
        };
    }

    handleAcidBase(problem) {
        return {
            topic: "Acid-Base Chemistry",
            category: 'reactions',
            summary: "Acid-base chemistry involves the transfer of protons (H⁺ ions) between species. Understanding pH, neutralization, and buffers is crucial for chemistry, biology, and environmental science.",

            acidBaseDefinitions: [
                {
                    theory: "Arrhenius",
                    acid: "Produces H⁺ ions in water",
                    base: "Produces OH⁻ ions in water",
                    example: {
                        acid: "HCl → H⁺ + Cl⁻",
                        base: "NaOH → Na⁺ + OH⁻"
                    },
                    limitation: "Only applies to aqueous solutions"
                },
                {
                    theory: "Brønsted-Lowry",
                    acid: "Proton (H⁺) donor",
                    base: "Proton (H⁺) acceptor",
                    example: {
                        reaction: "HCl + NH₃ → NH₄⁺ + Cl⁻",
                        acid: "HCl donates H⁺",
                        base: "NH₃ accepts H⁺"
                    },
                    advantage: "Works in non-aqueous solutions",
                    conjugatePairs: "Acid-base pairs differing by one H⁺"
                },
                {
                    theory: "Lewis",
                    acid: "Electron pair acceptor",
                    base: "Electron pair donor",
                    example: "BF₃ + NH₃ → BF₃NH₃",
                    advantage: "Broadest definition, includes reactions without H⁺",
                    note: "All Brønsted-Lowry acids/bases are Lewis acids/bases"
                }
            ],

            conjugateAcidBasePairs: {
                definition: "Two species differing by one proton (H⁺)",
                relationship: "When acid loses H⁺, it becomes its conjugate base",
                examples: [
                    {
                        acid: "HCl",
                        conjugateBase: "Cl⁻",
                        reaction: "HCl ⇌ H⁺ + Cl⁻"
                    },
                    {
                        base: "NH₃",
                        conjugateAcid: "NH₄⁺",
                        reaction: "NH₃ + H⁺ ⇌ NH₄⁺"
                    },
                    {
                        acid: "H₂O",
                        conjugateBase: "OH⁻",
                        asBase: "H₂O can also accept H⁺ to become H₃O⁺"
                    }
                ],
                amphoteric: "Species that can act as acid or base (like H₂O)"
            },

            strongVsWeak: {
                strongAcids: {
                    definition: "Completely ionize in water (100%)",
                    common: ["HCl", "HBr", "HI", "HNO₃", "H₂SO₄", "HClO₄"],
                    mnemonic: "Six strong acids to memorize",
                    example: "HCl → H⁺ + Cl⁻ (complete dissociation)",
                    pH: "Low pH (typically 0-1 for 1 M solution)"
                },
                weakAcids: {
                    definition: "Partially ionize in water (<5%)",
                    examples: ["CH₃COOH (acetic)", "HF", "H₂CO₃", "H₃PO₄"],
                    equilibrium: "CH₃COOH ⇌ H⁺ + CH₃COO⁻",
                    Ka: "Acid dissociation constant (smaller Ka = weaker acid)",
                    pH: "Higher pH than strong acids at same concentration"
                },
                strongBases: {
                    definition: "Completely dissociate in water",
                    common: ["NaOH", "KOH", "Ca(OH)₂", "Ba(OH)₂"],
                    group: "Group 1 hydroxides and some Group 2 hydroxides",
                    example: "NaOH → Na⁺ + OH⁻",
                    pH: "High pH (typically 13-14 for 1 M solution)"
                },
                weakBases: {
                    definition: "Partially accept protons",
                    examples: ["NH₃ (ammonia)", "CH₃NH₂ (methylamine)"],
                    equilibrium: "NH₃ + H₂O ⇌ NH₄⁺ + OH⁻",
                    Kb: "Base dissociation constant",
                    pH: "Lower pH than strong bases at same concentration"
                },
                keyDifference: "Strength relates to degree of ionization, NOT concentration"
            },

            pHScale: {
                definition: "pH = -log[H⁺]",
                range: "0 (very acidic) to 14 (very basic)",
                neutral: "pH = 7 at 25°C",
                relationship: {
                    acidic: "pH < 7 ([H⁺] > [OH⁻])",
                    neutral: "pH = 7 ([H⁺] = [OH⁻] = 1.0 × 10⁻⁷ M)",
                    basic: "pH > 7 ([H⁺] < [OH⁻])"
                },
                logarithmic: "Each pH unit represents 10× difference in [H⁺]",
                examples: [
                    { substance: "Stomach acid", pH: "1-2", description: "Very acidic" },
                    { substance: "Lemon juice", pH: "2-3", description: "Acidic" },
                    { substance: "Coffee", pH: "5", description: "Slightly acidic" },
                    { substance: "Pure water", pH: "7", description: "Neutral" },
                    { substance: "Baking soda", pH: "9", description: "Slightly basic" },
                    { substance: "Ammonia", pH: "11", description: "Basic" },
                    { substance: "Drain cleaner", pH: "13-14", description: "Very basic" }
                ],
                pOH: {
                    definition: "pOH = -log[OH⁻]",
                    relationship: "pH + pOH = 14 (at 25°C)",
                    waterIonProduct: "[H⁺][OH⁻] = 1.0 × 10⁻¹⁴ at 25°C"
                }
            },

            calculations: {
                pHFromConcentration: {
                    strongAcid: "pH = -log[H⁺]",
                    example: "[HCl] = 0.01 M → pH = -log(0.01) = 2"
                },
                concentrationFromPH: {
                    formula: "[H⁺] = 10⁻ᵖᴴ",
                    example: "pH = 3 → [H⁺] = 10⁻³ = 0.001 M"
                },
                dilution: {
                    principle: "When diluted 10×, pH increases by 1 (for acids)",
                    example: "pH 2 acid diluted 10× → pH 3"
                }
            },

            neutralization: {
                definition: "Acid + Base → Salt + Water",
                general: "H⁺ + OH⁻ → H₂O",
                examples: [
                    {
                        reaction: "HCl + NaOH → NaCl + H₂O",
                        products: "Salt (NaCl) + Water"
                    },
                    {
                        reaction: "H₂SO₄ + 2KOH → K₂SO₄ + 2H₂O",
                        note: "Stoichiometry: 1 H₂SO₄ neutralizes 2 KOH"
                    }
                ],
                heat: "Neutralization reactions are exothermic",
                endpoint: "Point where acid and base have reacted in stoichiometric amounts"
            },

            titration: {
                definition: "Technique to determine unknown concentration using neutralization",
                setup: {
                    burette: "Contains solution of known concentration (titrant)",
                    flask: "Contains solution of unknown concentration (analyte)",
                    indicator: "Shows when endpoint reached (color change)"
                },
                procedure: [
                    "1. Measure volume of unknown solution",
                    "2. Add indicator",
                    "3. Slowly add titrant until color change (endpoint)",
                    "4. Record volume of titrant used",
                    "5. Calculate unknown concentration"
                ],
                calculation: {
                    principle: "Moles of acid = Moles of base (at equivalence point)",
                    formula: "M₁V₁ = M₂V₂ (for 1:1 stoichiometry)",
                    example: {
                        problem: "25 mL of HCl titrated with 30 mL of 0.1 M NaOH. Find [HCl].",
                        solution: "M₁(25) = (0.1)(30) → M₁ = 0.12 M HCl"
                    }
                },
                indicators: [
                    { name: "Phenolphthalein", acidColor: "Colorless", baseColor: "Pink", pHRange: "8.2-10" },
                    { name: "Methyl orange", acidColor: "Red", baseColor: "Yellow", pHRange: "3.1-4.4" },
                    { name: "Litmus", acidColor: "Red", baseColor: "Blue", pHRange: "4.5-8.3" }
                ]
            },

            buffers: {
                definition: "Solution that resists pH change when small amounts of acid or base added",
                composition: "Weak acid + its conjugate base (or weak base + its conjugate acid)",
                examples: [
                    {
                        name: "Acetic acid buffer",
                        components: "CH₃COOH (weak acid) + CH₃COO⁻ (conjugate base, from NaCH₃COO)",
                        pH: "Around 4.7"
                    },
                    {
                        name: "Ammonia buffer",
                        components: "NH₃ (weak base) + NH₄⁺ (conjugate acid, from NH₄Cl)",
                        pH: "Around 9.3"
                    },
                    {
                        name: "Phosphate buffer",
                        components: "H₂PO₄⁻ / HPO₄²⁻",
                        pH: "Around 7.2",
                        importance: "Important in biological systems"
                    }
                ],
                mechanism: {
                    addingAcid: "Conjugate base neutralizes added H⁺",
                    addingBase: "Weak acid neutralizes added OH⁻",
                    result: "pH changes minimally"
                },
                capacity: "Amount of acid/base buffer can neutralize before pH changes significantly",
                applications: [
                    "Blood pH regulation (7.35-7.45)",
                    "Cell culture media",
                    "Fermentation processes",
                    "Chemical manufacturing"
                ],
                hendersonHasselbalch: {
                    equation: "pH = pKa + log([A⁻]/[HA])",
                    use: "Calculate pH of buffer solution",
                    bestBuffering: "pH ≈ pKa (ratio close to 1:1)"
                }
            },

            applications: [
                "Medicine (stomach antacids, pH-sensitive drugs)",
                "Environment (acid rain, ocean acidification)",
                "Biology (blood pH, enzyme activity)",
                "Industry (pH control in manufacturing)",
                "Agriculture (soil pH management)",
                "Swimming pools (pH maintenance)"
            ],

            keyPoints: {
                logScale: "pH is logarithmic - small changes represent large concentration changes",
                waterAutoionization: "Water can act as acid or base",
                temperatureEffect: "pH 7 is neutral only at 25°C",
                bufferLimits: "Buffers have finite capacity"
            }
        };
    }

    handleEquilibrium(problem) {
        return {
            topic: "Chemical Equilibrium",
            category: 'physical_chemistry',
            summary: "Chemical equilibrium occurs when the rates of forward and reverse reactions are equal. The system appears static but is dynamically balanced at the molecular level.",

            fundamentalConcepts: [
                {
                    name: "Dynamic Equilibrium",
                    definition: "State where forward and reverse reaction rates are equal",
                    characteristics: [
                        "Concentrations of reactants and products remain constant",
                        "Both reactions continue to occur",
                        "Macroscopic properties don't change",
                        "Can be approached from either direction"
                    ],
                    notation: "A + B ⇌ C + D",
                    notStatic: "Molecules constantly reacting, but no net change",
                    analogy: "Like water entering and leaving a bathtub at same rate - water level constant"
                },
                {
                    name: "Reversible Reactions",
                    definition: "Reactions that can proceed in both forward and reverse directions",
                    representation: "Double arrow (⇌) indicates reversibility",
                    example: "N₂ + 3H₂ ⇌ 2NH₃",
                    irreversible: "Reactions that go to completion (single arrow →)"
                }
            ],

            equilibriumConstant: {
                definition: "Ratio of products to reactants at equilibrium",
                expression: "For aA + bB ⇌ cC + dD: K = [C]ᶜ[D]ᵈ / [A]ᵃ[B]ᵇ",
                rules: [
                    "Products in numerator, reactants in denominator",
                    "Each concentration raised to power of its coefficient",
                    "Pure solids and liquids NOT included in expression",
                    "K is constant at constant temperature"
                ],
                types: {
                    Kc: {
                        name: "Equilibrium constant using concentrations",
                        units: "Depends on reaction (often mol/L)",
                        example: "K = [NH₃]² / ([N₂][H₂]³)"
                    },
                    Kp: {
                        name: "Equilibrium constant using partial pressures",
                        units: "atm or Pa",
                        gasReactions: "Used for gas-phase reactions",
                        relationship: "Kp = Kc(RT)^Δn where Δn = moles products - moles reactants"
                    }
                },
                magnitude: {
                    large: "K >> 1 (e.g., K = 10⁵) → products favored, reaction goes nearly to completion",
                    small: "K << 1 (e.g., K = 10⁻⁵) → reactants favored, little product formed",
                    moderate: "K ≈ 1 → significant amounts of both reactants and products"
                },
                examples: [
                    {
                        reaction: "N₂ + 3H₂ ⇌ 2NH₃",
                        expression: "K = [NH₃]² / ([N₂][H₂]³)",
                        note: "Concentrations at equilibrium only"
                    },
                    {
                        reaction: "CaCO₃(s) ⇌ CaO(s) + CO₂(g)",
                        expression: "K = [CO₂]",
                        note: "Solids omitted from expression"
                    },
                    {
                        reaction: "H₂(g) + I₂(g) ⇌ 2HI(g)",
                        Kc: "[HI]² / ([H₂][I₂])",
                        value: "K = 50.5 at 448°C",
                        interpretation: "Products favored"
                    }
                ]
            },

            reactionQuotient: {
                definition: "Same expression as K, but at ANY point (not just equilibrium)",
                symbol: "Q",
                purpose: "Predict direction reaction will shift to reach equilibrium",
                interpretation: {
                    QlessThanK: "Q < K → Too few products, reaction shifts right (forward)",
                    QequalsK: "Q = K → At equilibrium, no shift",
                    QgreaterThanK: "Q > K → Too many products, reaction shifts left (reverse)"
                },
                example: {
                    reaction: "A + B ⇌ C + D, K = 100",
                    scenario1: "Q = 50 (Q < K) → Shift right to produce more C and D",
                    scenario2: "Q = 100 (Q = K) → At equilibrium, no change",
                    scenario3: "Q = 200 (Q > K) → Shift left to produce more A and B"
                },
                mnemonic: "Q chases K"
            },

            leChateliersPrinciple: {
                statement: "If a system at equilibrium is subjected to stress, the system shifts to minimize that stress",
                stressTypes: [
                    {
                        stress: "Concentration Change",
                        addReactant: "Shift right (toward products)",
                        addProduct: "Shift left (toward reactants)",
                        removeReactant: "Shift left (to replace reactant)",
                        removeProduct: "Shift right (to replace product)",
                        example: {
                            reaction: "N₂ + 3H₂ ⇌ 2NH₃",
                            scenario: "Add N₂",
                            shift: "Right (produce more NH₃)",
                            result: "More product formed"
                        },
                        note: "Does NOT change K value"
                    },
                    {
                        stress: "Pressure Change (gases)",
                        increasePressure: "Shift toward side with fewer gas molecules",
                        decreasePressure: "Shift toward side with more gas molecules",
                        example: {
                            reaction: "N₂ + 3H₂ ⇌ 2NH₃",
                            moles: "4 moles gas → 2 moles gas",
                            increasePressure: "Shift right (fewer moles)",
                            decreasePressure: "Shift left (more moles)"
                        },
                        equalMoles: "No shift if equal moles on both sides",
                        note: "Does NOT change K value"
                    },
                    {
                        stress: "Temperature Change",
                        endothermic: "Heat is reactant (ΔH > 0)",
                        exothermic: "Heat is product (ΔH < 0)",
                        increaseTemp: {
                            endothermic: "Shift right (absorbs heat)",
                            exothermic: "Shift left (produces heat, removes added heat)"
                        },
                        decreaseTemp: {
                            endothermic: "Shift left",
                            exothermic: "Shift right"
                        },
                        example: {
                            reaction: "N₂ + 3H₂ ⇌ 2NH₃ (ΔH = -92 kJ, exothermic)",
                            increaseTemp: "Shift left (K decreases)",
                            decreaseTemp: "Shift right (K increases)"
                        },
                        unique: "Temperature is ONLY factor that changes K value"
                    },
                    {
                        stress: "Catalyst",
                        effect: "Speeds up BOTH forward and reverse reactions equally",
                        equilibrium: "NO shift, reaches equilibrium faster",
                        K: "Does NOT change K value",
                        note: "Catalysts only affect rate, not position"
                    },
                    {
                        stress: "Inert Gas Addition (constant volume)",
                        effect: "NO shift",
                        reason: "Doesn't change partial pressures of reactants/products",
                        note: "Only changes total pressure, not concentrations"
                    }
                ],
                summary: "Only temperature changes K; other factors shift position but not K value"
            },

            calculatingEquilibrium: {
                ICETable: {
                    name: "Initial, Change, Equilibrium table",
                    purpose: "Organize equilibrium calculations",
                    steps: [
                        "1. Write balanced equation",
                        "2. List initial concentrations",
                        "3. Define change in terms of x",
                        "4. Express equilibrium concentrations",
                        "5. Substitute into K expression",
                        "6. Solve for x"
                    ],
                    example: {
                        problem: "2A ⇌ B, K = 4. Initial [A] = 1.0 M, [B] = 0. Find equilibrium concentrations.",
                        ICE: {
                            species: ["2A", "B"],
                            initial: ["1.0 M", "0 M"],
                            change: ["-2x", "+x"],
                            equilibrium: ["1.0 - 2x", "x"]
                        },
                        equation: "K = [B] / [A]² = x / (1.0 - 2x)² = 4",
                        solving: "Solve quadratic equation for x",
                        approximation: "If K is small or large, may approximate"
                    }
                },
                approximations: {
                    rule: "If x is < 5% of initial concentration, can approximate",
                    example: "If [A]₀ = 1.0 M and change is -x, use (1.0 - x) ≈ 1.0",
                    verification: "Check if x/[A]₀ × 100% < 5%"
                }
            },

            solubilityEquilibrium: {
                definition: "Equilibrium between solid and its dissolved ions",
                notation: "AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)",
                Ksp: {
                    name: "Solubility Product Constant",
                    expression: "Ksp = [Ag⁺][Cl⁻]",
                    solidOmitted: "Solid not included in expression",
                    interpretation: "Smaller Ksp = less soluble compound"
                },
                examples: [
                    {
                        compound: "AgCl",
                        equilibrium: "AgCl(s) ⇌ Ag⁺ + Cl⁻",
                        Ksp: "[Ag⁺][Cl⁻] = 1.8 × 10⁻¹⁰",
                        solubility: "Very low (sparingly soluble)"
                    },
                    {
                        compound: "PbCl₂",
                        equilibrium: "PbCl₂(s) ⇌ Pb²⁺ + 2Cl⁻",
                        Ksp: "[Pb²⁺][Cl⁻]² = 1.7 × 10⁻⁵",
                        note: "Cl⁻ squared due to coefficient"
                    }
                ],
                predicting: {
                    ionProduct: "Q = [cation][anion]",
                    comparison: {
                        QlessThanKsp: "Q < Ksp → Unsaturated, no precipitate",
                        QequalsKsp: "Q = Ksp → Saturated, at equilibrium",
                        QgreaterThanKsp: "Q > Ksp → Supersaturated, precipitate forms"
                    }
                },
                commonIonEffect: {
                    definition: "Solubility decreases when common ion present",
                    example: "AgCl less soluble in NaCl solution than pure water",
                    explanation: "Cl⁻ from NaCl shifts equilibrium left"
                }
            },

            industrialApplications: {
                haberProcess: {
                    reaction: "N₂(g) + 3H₂(g) ⇌ 2NH₃(g) (ΔH = -92 kJ)",
                    purpose: "Produce ammonia for fertilizers",
                    conditions: {
                        pressure: "High pressure (200-400 atm) favors products (fewer moles)",
                        temperature: "Moderate temp (400-500°C) - compromise",
                        catalyst: "Iron catalyst speeds reaction"
                    },
                    compromise: "Lower temp favors products but reaction too slow; higher temp faster but less product",
                    LeChatelierApplication: "Optimizes yield using equilibrium principles"
                },
                contactProcess: {
                    reaction: "2SO₂(g) + O₂(g) ⇌ 2SO₃(g) (exothermic)",
                    purpose: "Produce sulfuric acid",
                    optimization: "High pressure, moderate temperature, catalyst"
                }
            },

            applications: [
                "Industrial chemical production (ammonia, sulfuric acid)",
                "Environmental chemistry (CO₂ in oceans)",
                "Biological systems (hemoglobin-oxygen binding)",
                "Pharmaceutical formulation",
                "Solubility and precipitation reactions"
            ],

            keyPoints: {
                dynamicBalance: "Equilibrium is dynamic, not static",
                temperatureUnique: "Only temperature changes K value",
                catalystNoShift: "Catalysts speed up but don't shift equilibrium",
                LeChatelierPredictive: "Use Le Chatelier to predict shifts",
                KvalsueProductFavored: "Large K means products favored, small K means reactants favored"
            }
        };
    }

    handleKineticsThermodynamics(problem) {
        return {
            topic: "Chemical Kinetics and Thermodynamics",
            category: 'physical_chemistry',
            summary: "Kinetics studies reaction rates and mechanisms (how fast). Thermodynamics studies energy changes and spontaneity (how far and will it happen). Together they provide complete picture of chemical reactions.",

            fundamentalDistinction: {
                kinetics: {
                    question: "How fast does the reaction occur?",
                    focus: "Reaction rate and mechanism",
                    timescale: "Seconds to years",
                    example: "Diamond → graphite (thermodynamically favorable but kinetically very slow)"
                },
                thermodynamics: {
                    question: "Will the reaction occur? How far will it go?",
                    focus: "Energy changes and spontaneity",
                    timescale: "Doesn't predict time",
                    example: "Can tell if reaction is spontaneous, not how fast"
                },
                independence: "Thermodynamically favorable ≠ fast; spontaneous ≠ rapid"
            },

            // KINETICS SECTION
            chemicalKinetics: {
                reactionRate: {
                    definition: "Change in concentration per unit time",
                    formula: "Rate = Δ[concentration] / Δtime",
                    units: "mol/(L·s) or M/s",
                    measuring: "Can measure disappearance of reactants or appearance of products",
                    example: "For A → B, rate = -Δ[A]/Δt = +Δ[B]/Δt",
                    sign: "Negative for reactants (decreasing), positive for products (increasing)"
                },
                
                factorsAffectingRate: [
                    {
                        factor: "Concentration",
                        effect: "Higher concentration → faster rate",
                        reason: "More particles → more collisions",
                        quantitative: "Described by rate law"
                    },
                    {
                        factor: "Temperature",
                        effect: "Higher temperature → faster rate",
                        reason: "More particles have sufficient energy to react",
                        rule: "Rate roughly doubles for every 10°C increase",
                        quantitative: "Described by Arrhenius equation"
                    },
                    {
                        factor: "Surface Area",
                        effect: "Greater surface area → faster rate",
                        reason: "More particles exposed to reactants",
                        example: "Powdered solid reacts faster than chunk"
                    },
                    {
                        factor: "Catalyst",
                        effect: "Catalyst increases rate",
                        reason: "Provides alternative pathway with lower activation energy",
                        unchanged: "Catalyst not consumed, regenerated at end"
                    },
                    {
                        factor: "Nature of Reactants",
                        effect: "Some substances inherently more reactive",
                        example: "Ionic reactions faster than covalent bond breaking"
                    }
                ],

                rateLaw: {
                    definition: "Mathematical relationship between rate and concentrations",
                    generalForm: "Rate = k[A]ᵐ[B]ⁿ",
                    components: {
                        k: "Rate constant (depends on temperature)",
                        m_n: "Reaction orders (determined experimentally, NOT from coefficients)",
                        brackets: "[ ] denotes concentration"
                    },
                    reactionOrder: {
                        overall: "Sum of all exponents (m + n + ...)",
                        individual: "Order with respect to each reactant",
                        zeroOrder: "Rate = k (independent of concentration)",
                        firstOrder: "Rate = k[A] (rate proportional to [A])",
                        secondOrder: "Rate = k[A]² or k[A][B]"
                    },
                    example: {
                        rateLaw: "Rate = k[NO]²[O₂]",
                        orderNO: "Second order in NO",
                        orderO2: "First order in O₂",
                        overallOrder: "Third order overall (2 + 1)"
                    },
                    determination: "Must be determined experimentally (not from balanced equation)"
                },

                activationEnergy: {
                    definition: "Minimum energy needed for reaction to occur",
                    symbol: "Ea",
                    concept: "Energy barrier that must be overcome",
                    analogy: "Like pushing boulder over hill - need minimum energy to get over top",
                    diagram: "Energy vs reaction coordinate shows Ea as peak height",
                    relationship: {
                        highEa: "Few molecules have enough energy → slow reaction",
                        lowEa: "More molecules have enough energy → fast reaction"
                    },
                    temperature: "Higher T → more molecules have E ≥ Ea → faster rate"
                },

                collisionTheory: {
                    requirements: [
                        "Particles must collide",
                        "Collision must have sufficient energy (E ≥ Ea)",
                        "Collision must have proper orientation"
                    ],
                    effectiveCollision: "Collision that results in reaction",
                    mostCollisionsFail: "Only small fraction of collisions lead to reaction",
                    explanation: "Explains how concentration and temperature affect rate"
                },

                catalysis: {
                    definition: "Substance that speeds reaction without being consumed",
                    mechanism: "Provides alternative pathway with lower Ea",
                    types: [
                        {
                            type: "Homogeneous Catalyst",
                            description: "Same phase as reactants",
                            example: "H₂SO₄ catalyzing esterification (all aqueous)"
                        },
                        {
                            type: "Heterogeneous Catalyst",
                            description: "Different phase from reactants",
                            example: "Solid Pt catalyst for gas-phase reactions",
                            application: "Catalytic converters in cars"
                        },
                        {
                            type: "Enzyme",
                            description: "Biological catalyst (protein)",
                            specificity: "Highly specific for particular reactions",
                            example: "Catalase breaks down H₂O₂"
                        }
                    ],
                    energyDiagram: "Lower Ea but same ΔH (doesn't change thermodynamics)",
                    equilibrium: "Catalyst speeds both forward and reverse equally (no shift)"
                }
            },

            // THERMODYNAMICS SECTION
            chemicalThermodynamics: {
                firstLaw: {
                    statement: "Energy cannot be created or destroyed",
                    equation: "ΔE = q + w (change in energy = heat + work)",
                    conservation: "Total energy of universe is constant"
                },

                enthalpy: {
                    definition: "Heat content of system at constant pressure",
                    symbol: "H",
                    change: "ΔH = Hproducts - Hreactants",
                    units: "kJ or kJ/mol",
                    exothermic: {
                        ΔH: "Negative (ΔH < 0)",
                        meaning: "Releases heat to surroundings",
                        examples: ["Combustion", "Neutralization", "Freezing"],
                        feeling: "Feels hot"
                    },
                    endothermic: {
                        ΔH: "Positive (ΔH > 0)",
                        meaning: "Absorbs heat from surroundings",
                        examples: ["Photosynthesis", "Melting ice", "Cooking egg"],
                        feeling: "Feels cold"
                    },
                    standardEnthalpy: {
                        symbol: "ΔH°",
                        conditions: "25°C, 1 atm, 1 M concentrations",
                        formation: "ΔH°f = enthalpy change to form 1 mol from elements",
                        calculation: "ΔH°rxn = Σ ΔH°f(products) - Σ ΔH°f(reactants)"
                    },
                    HessLaw: {
                        statement: "ΔH is independent of pathway",
                        application: "Can add equations to find unknown ΔH",
                        example: "If can't measure directly, use alternative route"
                    }
                },

                entropy: {
                    definition: "Measure of disorder or randomness",
                    symbol: "S",
                    units: "J/(mol·K)",
                    secondLaw: "Entropy of universe increases in spontaneous processes",
                    change: "ΔS = Sproducts - Sreactants",
                    trends: {
                        positive: "ΔS > 0 → increase in disorder (favored)",
                        negative: "ΔS < 0 → decrease in disorder (unfavored)"
                    },
                    factors: [
                        {
                            factor: "State of Matter",
                            order: "S(gas) > S(liquid) > S(solid)",
                            reason: "More disorder in gases"
                        },
                        {
                            factor: "Temperature",
                            effect: "Higher T → higher S",
                            reason: "More thermal motion"
                        },
                        {
                            factor: "Moles of Gas",
                            effect: "More moles of gas → higher S",
                            example: "2A(g) → A₂(g) decreases entropy"
                        },
                        {
                            factor: "Dissolving",
                            effect: "Usually increases S",
                            reason: "Particles more dispersed"
                        }
                    ],
                    examples: [
                        {
                            process: "Ice melting",
                            ΔS: "Positive (solid → liquid)",
                            interpretation: "Disorder increases"
                        },
                        {
                            process: "2H₂(g) + O₂(g) → 2H₂O(g)",
                            ΔS: "Negative (3 moles gas → 2 moles gas)",
                            interpretation: "Disorder decreases"
                        }
                    ]
                },

                gibbsFreeEnergy: {
                    definition: "Energy available to do work; predicts spontaneity",
                    symbol: "G",
                    equation: "ΔG = ΔH - TΔS",
                    units: "kJ/mol",
                    spontaneity: {
                        negative: "ΔG < 0 → Spontaneous (reaction proceeds forward)",
                        zero: "ΔG = 0 → At equilibrium",
                        positive: "ΔG > 0 → Non-spontaneous (reverse reaction spontaneous)"
                    },
                    conditions: [
                        {
                            case: "ΔH < 0, ΔS > 0",
                            ΔG: "Always negative",
                            spontaneity: "Spontaneous at all temperatures",
                            example: "Combustion reactions"
                        },
                        {
                            case: "ΔH > 0, ΔS < 0",
                            ΔG: "Always positive",
                            spontaneity: "Non-spontaneous at all temperatures"
                        },
                        {
                            case: "ΔH < 0, ΔS < 0",
                            ΔG: "Negative at low T, positive at high T",
                            spontaneity: "Spontaneous only at low temperatures",
                            example: "Exothermic condensation"
                        },
                        {
                            case: "ΔH > 0, ΔS > 0",
                            ΔG: "Positive at low T, negative at high T",
                            spontaneity: "Spontaneous only at high temperatures",
                            example: "Endothermic vaporization"
                        }
                    ],
                    relationshipToK: {
                        equation: "ΔG° = -RT ln(K)",
                        KlargePositive: "K >> 1 → ΔG° negative → products favored",
                        KsmallPositive: "K << 1 → ΔG° positive → reactants favored",
                        equilibrium: "ΔG = 0, Q = K"
                    },
                    note: "ΔG tells IF reaction occurs, not HOW FAST"
                }
            },

            applications: [
                "Kinetics: Reaction rate optimization in industry",
                "Kinetics: Drug stability and shelf life",
                "Kinetics: Catalytic converter design",
                "Thermodynamics: Predicting reaction feasibility",
                "Thermodynamics: Energy production and efficiency",
                "Thermodynamics: Phase diagram analysis",
                "Combined: Industrial process optimization (Haber process)"
            ],

            keyFormulas: {
                "Rate": "Rate = -Δ[reactant]/Δt",
                "Rate law": "Rate = k[A]ᵐ[B]ⁿ",
                "Enthalpy": "ΔH = Hproducts - Hreactants",
                "Entropy": "ΔS = Sproducts - Sreactants",
                "Gibbs Free Energy": "ΔG = ΔH - TΔS",
                "Gibbs and K": "ΔG° = -RT ln(K)"
            },

            keyPoints: {
                kineticVsThermodynamic: "Kinetics = how fast; Thermodynamics = how far",
                spontaneousNotFast: "Spontaneous doesn't mean fast (diamond to graphite)",
                catalystLowersEa: "Catalysts lower Ea but don't change ΔH or ΔG",
                temperatureAffectsBoth: "Temperature affects both rate (kinetics) and K (thermodynamics)",
                ΔGpredictsDirection: "ΔG < 0 means reaction proceeds forward"
            }
        };
    }

    handleAtomicStructure(problem) {
        return {
            topic: "Atomic Structure",
            category: 'atomic',
            summary: "Atoms consist of protons, neutrons, and electrons. Modern atomic theory describes electron arrangement in orbitals using quantum mechanics, which determines chemical properties and periodic trends.",

            historicalDevelopment: [
                {
                    model: "Dalton's Atomic Theory (1803)",
                    description: "Matter made of indivisible atoms; all atoms of element identical",
                    contribution: "First scientific atomic theory",
                    limitations: "Atoms are divisible; isotopes exist"
                },
                {
                    model: "Thomson's Plum Pudding Model (1897)",
                    description: "Atom is positive sphere with embedded electrons",
                    contribution: "Discovered electron",
                    limitations: "Didn't explain Rutherford's scattering experiments"
                },
                {
                    model: "Rutherford's Nuclear Model (1911)",
                    description: "Tiny dense positive nucleus surrounded by electrons",
                    contribution: "Discovered nucleus",
                    experiment: "Gold foil experiment showed most of atom is empty space",
                    limitations: "Didn't explain electron arrangement or atomic spectra"
                },
                {
                    model: "Bohr Model (1913)",
                    description: "Electrons in fixed circular orbits with quantized energy",
                    contribution: "Explained hydrogen spectrum",
                    limitations: "Only works for hydrogen; electrons don't orbit"
                },
                {
                    model: "Quantum Mechanical Model (1920s)",
                    description: "Electrons in orbitals (probability regions), not orbits",
                    contributors: "Schrödinger, Heisenberg, de Broglie",
                    current: "Modern accepted model"
                }
            ],

            subatomicParticles: [
                {
                    particle: "Proton",
                    symbol: "p⁺",
                    charge: "+1",
                    mass: "1.007 amu (≈ 1 amu)",
                    location: "Nucleus",
                    significance: "Number of protons = atomic number = element identity"
                },
                {
                    particle: "Neutron",
                    symbol: "n⁰",
                    charge: "0 (neutral)",
                    mass: "1.009 amu (≈ 1 amu)",
                    location: "Nucleus",
                    significance: "Different neutron numbers = isotopes"
                },
                {
                    particle: "Electron",
                    symbol: "e⁻",
                    charge: "-1",
                    mass: "0.0005 amu (≈ 1/1836 proton mass)",
                    location: "Electron cloud around nucleus",
                    significance: "Determines chemical properties and bonding"
                }
            ],

            atomicNotation: {
                symbolism: {
                    general: "ᴬ_Z X^charge",
                    A: "Mass number (protons + neutrons)",
                    Z: "Atomic number (protons)",
                    X: "Element symbol",
                    charge: "Overall charge (if ion)"
                },
                calculations: {
                    protons: "= atomic number (Z)",
                    neutrons: "= mass number (A) - atomic number (Z)",
                    electrons: "= protons - charge (for neutral atom, electrons = protons)"
                },
                examples: [
                    {
                        notation: "¹²_₆C",
                        name: "Carbon-12",
                        protons: "6",
                        neutrons: "12 - 6 = 6",
                        electrons: "6",
                        neutral: "Yes"
                    },
                    {
                        notation: "²³_₁₁Na⁺",
                        name: "Sodium ion",
                        protons: "11",
                        neutrons: "23 - 11 = 12",
                        electrons: "11 - 1 = 10",
                        neutral: "No (lost 1 electron)"
                    },
                    {
                        notation: "³⁵_₁₇Cl⁻",
                        name: "Chloride ion",
                        protons: "17",
                        neutrons: "35 - 17 = 18",
                        electrons: "17 - (-1) = 18",
                        neutral: "No (gained 1 electron)"
                    }
                ]
            },

            isotopes: {
                definition: "Atoms of same element with different numbers of neutrons",
                sameProperties: "Same atomic number (protons), same chemical properties",
                differentProperties: "Different mass number, different physical properties",
                examples: [
                    {
                        element: "Hydrogen",
                        isotopes: [
                            { name: "Protium", symbol: "¹H", neutrons: "0", abundance: "99.98%" },
                            { name: "Deuterium", symbol: "²H or D", neutrons: "1", abundance: "0.02%" },
                            { name: "Tritium", symbol: "³H or T", neutrons: "2", abundance: "Trace (radioactive)" }
                        ]
                    },
                    {
                        element: "Carbon",
                        isotopes: [
                            { name: "Carbon-12", symbol: "¹²C", neutrons: "6", abundance: "98.9%" },
                            { name: "Carbon-13", symbol: "¹³C", neutrons: "7", abundance: "1.1%" },
                            { name: "Carbon-14", symbol: "¹⁴C", neutrons: "8", abundance: "Trace (radioactive)" }
                        ]
                    }
                ],
                averageAtomicMass: {
                    definition: "Weighted average of isotope masses",
                    formula: "Σ (isotope mass × abundance)",
                    example: {
                        element: "Chlorine",
                        isotopes: "³⁵Cl (75%) and ³⁷Cl (25%)",
                        calculation: "(35 × 0.75) + (37 × 0.25) = 35.5 amu",
                        periodicTable: "Atomic mass on periodic table is average"
                    }
                }
            },

            quantumNumbers: {
                purpose: "Describe electron location and properties",
                numbers: [
                    {
                        symbol: "n",
                        name: "Principal Quantum Number",
                        values: "n = 1, 2, 3, 4, ...",
                        meaning: "Energy level (shell)",
                        relationship: "Larger n = higher energy, farther from nucleus",
                        electrons: "Maximum 2n² electrons per shell"
                    },
                    {
                        symbol: "l",
                        name: "Angular Momentum Quantum Number",
                        values: "l = 0 to (n-1)",
                        meaning: "Subshell shape (orbital type)",
                        subshells: {
                            "l = 0": "s subshell (spherical)",
                            "l = 1": "p subshell (dumbbell)",
                            "l = 2": "d subshell (cloverleaf)",
                            "l = 3": "f subshell (complex)"
                        }
                    },
                    {
                        symbol: "mₗ",
                        name: "Magnetic Quantum Number",
                        values: "mₗ = -l to +l",
                        meaning: "Orbital orientation in space",
                        example: "p subshell (l=1) has mₗ = -1, 0, +1 (three p orbitals: px, py, pz)"
                    },
                    {
                        symbol: "mₛ",
                        name: "Spin Quantum Number",
                        values: "mₛ = +½ or -½",
                        meaning: "Electron spin direction",
                        representation: "↑ (spin up) or ↓ (spin down)"
                    }
                ],
                pauliExclusionPrinciple: "No two electrons can have the same set of four quantum numbers",
                example: {
                    electron: "2p electron",
                    n: "2",
                    l: "1 (p subshell)",
                    mₗ: "-1, 0, or +1",
                    mₛ: "+½ or -½"
                }
            },

            electronConfiguration: {
                definition: "Distribution of electrons among orbitals",
                aufbauPrinciple: "Electrons fill lowest energy orbitals first",
                orderOfFilling: "1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, 6s, 4f, 5d, 6p, 7s, 5f, 6d, 7p",
                diagram: "Use diagonal rule or energy diagram",
                hundsRule: "Electrons occupy orbitals singly before pairing",
                pauliExclusion: "Maximum 2 electrons per orbital (opposite spins)",
                notation: {
                    standard: "nl^x where n=shell, l=subshell type, x=number of electrons",
                    example: "1s² 2s² 2p⁶ (neon)"
                },
                examples: [
                    {
                        element: "Hydrogen (Z=1)",
                        configuration: "1s¹",
                        explanation: "1 electron in 1s orbital"
                    },
                    {
                        element: "Carbon (Z=6)",
                        configuration: "1s² 2s² 2p²",
                        explanation: "Fill 1s, then 2s, then 2p",
                        orbital: "[He] 2s² 2p² (noble gas notation)"
                    },
                    {
                        element: "Sodium (Z=11)",
                        configuration: "1s² 2s² 2p⁶ 3s¹",
                        nobleGas: "[Ne] 3s¹",
                        valence: "1 valence electron"
                    },
                    {
                        element: "Iron (Z=26)",
                        configuration: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶",
                        nobleGas: "[Ar] 4s² 3d⁶",
                        note: "4s fills before 3d"
                    }
                ],
                exceptions: {
                    chromium: "Cr: [Ar] 4s¹ 3d⁵ (not 4s² 3d⁴) - half-filled d more stable",
                    copper: "Cu: [Ar] 4s¹ 3d¹⁰ (not 4s² 3d⁹) - filled d more stable"
                },
                ions: {
                    cations: "Remove electrons from highest n first (even though 3d fills after 4s, remove 4s first)",
                    anions: "Add electrons following aufbau principle",
                    examples: [
                        { ion: "Fe²⁺", neutral: "[Ar] 4s² 3d⁶", ionConfig: "[Ar] 3d⁶ (removed both 4s)" },
                        { ion: "O²⁻", neutral: "1s² 2s² 2p⁴", ionConfig: "1s² 2s² 2p⁶ (added 2 to 2p)" }
                    ]
                }
            },

            orbitalDiagrams: {
                purpose: "Show electron arrangement and spin",
                notation: "Boxes or lines represent orbitals, arrows represent electrons",
                rules: [
                    "Each orbital holds max 2 electrons (opposite spins)",
                    "Fill orbitals singly before pairing (Hund's rule)",
                    "Use ↑↓ for paired electrons, ↑ for unpaired"
                ],
                examples: [
                    {
                        element: "Carbon (C)",
                        diagram: "1s: ↑↓  2s: ↑↓  2p: ↑ ↑ _",
                        note: "Two unpaired electrons in 2p"
                    },
                    {
                        element: "Oxygen (O)",
                        diagram: "1s: ↑↓  2s: ↑↓  2p: ↑↓ ↑ ↑",
                        note: "Four electrons in 2p, two paired"
                    },
                    {
                        element: "Neon (Ne)",
                        diagram: "1s: ↑↓  2s: ↑↓  2p: ↑↓ ↑↓ ↑↓",
                        note: "All orbitals filled and paired"
                    }
                ]
            },

            valenceElectrons: {
                definition: "Electrons in outermost shell",
                significance: "Determine chemical properties and bonding",
                determination: "From group number or electron configuration",
                examples: [
                    { element: "Na", configuration: "[Ne] 3s¹", valence: "1 (Group 1)" },
                    { element: "C", configuration: "[He] 2s² 2p²", valence: "4 (Group 14)" },
                    { element: "Cl", configuration: "[Ne] 3s² 3p⁵", valence: "7 (Group 17)" },
                    { element: "Ne", configuration: "1s² 2s² 2p⁶", valence: "8 (Group 18, noble gas)" }
                ],
                octetRule: "Atoms tend to gain, lose, or share electrons to achieve 8 valence electrons",
                exceptions: "H wants 2 (duet), Be and B can have less than 8, expanded octets for period 3+"
            },

            periodicTable: {
                organization: {
                    periods: "Horizontal rows; period number = number of shells",
                    groups: "Vertical columns; group number relates to valence electrons",
                    blocks: {
                        s: "Groups 1-2 (filling s orbitals)",
                        p: "Groups 13-18 (filling p orbitals)",
                        d: "Groups 3-12 (transition metals, filling d orbitals)",
                        f: "Lanthanides and actinides (filling f orbitals)"
                    }
                },
                families: [
                    { group: "1", name: "Alkali metals", properties: "Very reactive, 1 valence electron" },
                    { group: "2", name: "Alkaline earth metals", properties: "Reactive, 2 valence electrons" },
                    { group: "17", name: "Halogens", properties: "Very reactive nonmetals, 7 valence electrons" },
                    { group: "18", name: "Noble gases", properties: "Unreactive, 8 valence electrons (stable)" }
                ],
                categories: {
                    metals: "Left side and center; conductive, malleable, lose electrons",
                    nonmetals: "Right side; insulators, brittle, gain electrons",
                    metalloids: "Staircase line; properties between metals and nonmetals"
                }
            },

            periodicTrends: [
                {
                    trend: "Atomic Radius",
                    definition: "Size of atom",
                    acrossPeriod: "Decreases left to right",
                    reason: "More protons pull electrons closer",
                    downGroup: "Increases top to bottom",
                    reason2: "More shells, electrons farther from nucleus",
                    largest: "Fr (francium) - bottom left",
                    smallest: "He (helium) - top right"
                },
                {
                    trend: "Ionization Energy",
                    definition: "Energy to remove electron",
                    acrossPeriod: "Increases left to right",
                    reason: "Stronger nuclear attraction",
                    downGroup: "Decreases top to bottom",
                    reason2: "Electrons farther away, easier to remove",
                    highest: "He - top right",
                    lowest: "Fr - bottom left",
                    successive: "Each subsequent electron harder to remove"
                },
                {
                    trend: "Electronegativity",
                    definition: "Ability to attract bonding electrons",
                    acrossPeriod: "Increases left to right",
                    reason: "Atoms want to complete octet",
                    downGroup: "Decreases top to bottom",
                    reason2: "Less attraction at greater distance",
                    highest: "F (fluorine) = 4.0 - most electronegative",
                    lowest: "Fr - least electronegative",
                    nobleGases: "Not assigned (don't form bonds)"
                },
                {
                    trend: "Electron Affinity",
                    definition: "Energy change when atom gains electron",
                    acrossPeriod: "Becomes more negative (more energy released) left to right",
                    reason: "Atoms closer to full octet",
                    downGroup: "Generally less negative top to bottom",
                    highest: "Halogens (want 1 more electron)",
                    exceptions: "Noble gases (don't want electrons)"
                },
                {
                    trend: "Metallic Character",
                    acrossPeriod: "Decreases left to right",
                    downGroup: "Increases top to bottom",
                    most: "Fr - bottom left",
                    least: "F - top right (most nonmetallic)"
                }
            ],

            applications: [
                "Predicting chemical bonding and reactivity",
                "Understanding periodic trends",
                "Spectroscopy and light emission/absorption",
                "Quantum computing",
                "Nanotechnology and material science"
            ],

            keyPoints: {
                quantumModel: "Electrons in probability regions (orbitals), not fixed orbits",
                configurationDeterminesProperties: "Valence electrons determine chemical behavior",
                periodicTrends: "Properties change predictably across periodic table",
                exceptionsExist: "Cr and Cu configurations are exceptions for stability",
                isotopesSameChemistry: "Different isotopes have same chemical properties"
            }
        };
    }

    handleChemicalBonding(problem) {
        return {
            topic: "Chemical Bonding",
            category: 'bonding',
            summary: "Chemical bonds form when atoms combine by sharing or transferring electrons to achieve stable electron configurations. Bond type, molecular shape, and polarity determine physical and chemical properties.",

            whyBondsForm: {
                driving: "Atoms bond to achieve stable electron configuration (usually 8 valence electrons)",
                energy: "Bonding releases energy; bonded atoms have lower energy than separate atoms",
                octetRule: "Atoms tend to gain, lose, or share electrons to achieve noble gas configuration",
                exceptions: ["H wants 2 electrons (duet rule)", "Be and B can have less than 8", "Period 3+ can expand octet"]
            },

            typesOfBonds: [
                {
                    type: "Ionic Bond",
                    definition: "Electrostatic attraction between oppositely charged ions",
                    mechanism: "Complete transfer of electrons from metal to nonmetal",
                    participants: "Metal (low electronegativity) + Nonmetal (high electronegativity)",
                    formation: [
                        "Metal loses electrons → cation (+)",
                        "Nonmetal gains electrons → anion (-)",
                        "Opposite charges attract"
                    ],
                    example: {
                        reaction: "Na + Cl → Na⁺ + Cl⁻ → NaCl",
                        explanation: "Na loses 1e⁻ (becomes Na⁺), Cl gains 1e⁻ (becomes Cl⁻)",
                        structure: "Crystalline lattice of alternating ions"
                    },
                    properties: {
                        meltingPoint: "High (strong electrostatic forces)",
                        hardness: "Hard but brittle",
                        conductivity: "Conducts when molten or dissolved (ions mobile)",
                        solubility: "Often soluble in water"
                    },
                    electronegativityDifference: "> 1.7 (large difference)"
                },
                {
                    type: "Covalent Bond",
                    definition: "Sharing of electron pair(s) between atoms",
                    mechanism: "Electrons shared between atoms",
                    participants: "Nonmetal + Nonmetal (similar electronegativities)",
                    types: {
                        single: "One shared pair (e.g., H-H)",
                        double: "Two shared pairs (e.g., O=O)",
                        triple: "Three shared pairs (e.g., N≡N)"
                    },
                    examples: [
                        { molecule: "H₂", bond: "H-H", shared: "1 pair" },
                        { molecule: "O₂", bond: "O=O", shared: "2 pairs" },
                        { molecule: "N₂", bond: "N≡N", shared: "3 pairs" },
                        { molecule: "H₂O", bonds: "Two O-H single bonds" },
                        { molecule: "CO₂", bonds: "Two C=O double bonds" }
                    ],
                    properties: {
                        meltingPoint: "Lower than ionic (weaker intermolecular forces)",
                        hardness: "Variable (depends on structure)",
                        conductivity: "Generally do not conduct (no charged particles)",
                        solubility: "Nonpolar dissolve in nonpolar; polar dissolve in polar"
                    },
                    electronegativityDifference: "< 1.7 (small difference)"
                },
                {
                    type: "Metallic Bond",
                    definition: "Delocalized electrons shared among metal atoms",
                    mechanism: "Sea of electrons moves freely among metal cations",
                    participants: "Metal + Metal",
                    visualization: "Metal cations in sea of mobile electrons",
                    properties: {
                        conductivity: "Excellent electrical and thermal conductivity (mobile electrons)",
                        malleability: "Malleable and ductile (layers slide without breaking bonds)",
                        luster: "Shiny (electrons reflect light)",
                        strength: "Variable (depends on number of valence electrons)"
                    },
                    examples: ["Cu", "Fe", "Al", "Na", "Au"]
                }
            ],

            polarityAndElectronegativity: {
                electronegativity: {
                    definition: "Atom's ability to attract bonding electrons",
                    scale: "Pauling scale (0-4)",
                    highest: "Fluorine (4.0)",
                    trend: "Increases left to right, decreases top to bottom",
                    nobleGases: "Not assigned (don't form bonds)"
                },
                bondPolarity: {
                    nonpolar: {
                        definition: "Equal sharing of electrons",
                        occurs: "Between identical atoms or similar electronegativity",
                        examples: ["H₂", "O₂", "N₂", "CH₄ (individual C-H bonds nearly nonpolar)"],
                        ΔEN: "< 0.4"
                    },
                    polar: {
                        definition: "Unequal sharing of electrons",
                        occurs: "Between atoms with different electronegativities",
                        dipole: "Partial charges: δ+ (less electronegative) and δ- (more electronegative)",
                        examples: ["H-O (in H₂O)", "H-F", "C=O"],
                        ΔEN: "0.4 to 1.7"
                    },
                    representation: "Arrow pointing toward more electronegative atom (δ+→δ-)"
                },
                molecularPolarity: {
                    determination: "Depends on bond polarity AND molecular geometry",
                    polar: {
                        requirements: "Polar bonds + asymmetric shape",
                        examples: [
                            { molecule: "H₂O", shape: "Bent", polar: "Yes (polar bonds don't cancel)" },
                            { molecule: "NH₃", shape: "Trigonal pyramidal", polar: "Yes" },
                            { molecule: "HCl", shape: "Linear (diatomic)", polar: "Yes" }
                        ],
                        properties: "Dissolves in polar solvents (like water), higher boiling point"
                    },
                    nonpolar: {
                        scenarios: [
                            "All bonds nonpolar",
                            "Polar bonds cancel due to symmetry"
                        ],
                        examples: [
                            { molecule: "CO₂", shape: "Linear", polar: "No (polar bonds cancel)" },
                            { molecule: "CH₄", shape: "Tetrahedral", polar: "No (symmetric)" },
                            { molecule: "BF₃", shape: "Trigonal planar", polar: "No (symmetric)" }
                        ],
                        properties: "Dissolves in nonpolar solvents, lower boiling point"
                    },
                    rule: "Symmetrical molecules with polar bonds are nonpolar (dipoles cancel)"
                }
            },

            lewisStructures: {
                definition: "Diagram showing valence electrons and bonds",
                purpose: "Visualize electron distribution and bonding",
                rules: [
                    "1. Count total valence electrons",
                    "2. Draw skeleton (least electronegative atom in center, except H)",
                    "3. Connect atoms with single bonds",
                    "4. Complete octets of outer atoms (except H wants 2)",
                    "5. Place remaining electrons on central atom",
                    "6. If central atom lacks octet, form double/triple bonds",
                    "7. Check: total electrons used = total valence electrons"
                ],
                notation: {
                    dot: "Unpaired electron",
                    pair: "Electron pair (bonding or lone)",
                    line: "Bonding pair (single bond)",
                    doubleLine: "Double bond",
                    tripleLine: "Triple bond"
                },
                examples: [
                    {
                        molecule: "H₂O",
                        valenceElectrons: "1(2) + 6 = 8",
                        structure: "H-O-H with 2 lone pairs on O",
                        bonds: "2 single bonds",
                        lonePairs: "2 on oxygen"
                    },
                    {
                        molecule: "CO₂",
                        valenceElectrons: "4 + 6(2) = 16",
                        structure: "O=C=O",
                        bonds: "2 double bonds",
                        lonePairs: "2 on each oxygen"
                    },
                    {
                        molecule: "NH₃",
                        valenceElectrons: "5 + 1(3) = 8",
                        structure: "N with 3 H atoms and 1 lone pair",
                        bonds: "3 single bonds",
                        lonePairs: "1 on nitrogen"
                    }
                ],
                formalCharge: {
                    definition: "Hypothetical charge if electrons equally shared",
                    formula: "FC = V - (L + ½B) where V=valence, L=lone, B=bonding electrons",
                    purpose: "Determine best Lewis structure",
                    preference: "Structure with formal charges closest to zero and negative on more electronegative"
                },
                resonance: {
                    definition: "Multiple valid Lewis structures for same molecule",
                    reality: "Actual structure is hybrid (average) of resonance forms",
                    example: {
                        molecule: "O₃ (ozone)",
                        structures: "Two forms with O=O bond in different positions",
                        actual: "Both O-O bonds identical, intermediate between single and double"
                    },
                    notation: "Double-headed arrow (↔) between structures"
                }
            },

            VSEPRTheory: {
                name: "Valence Shell Electron Pair Repulsion Theory",
                principle: "Electron pairs repel each other and arrange to minimize repulsion",
                prediction: "Determines molecular geometry (shape)",
                steps: [
                    "1. Draw Lewis structure",
                    "2. Count electron groups around central atom (bonds + lone pairs)",
                    "3. Determine electron geometry",
                    "4. Determine molecular geometry (considering only atoms)"
                ],
                electronGroups: {
                    note: "Single, double, triple bonds all count as ONE group"
                },
                geometries: [
                    {
                        electronGroups: 2,
                        electronGeometry: "Linear",
                        bondAngle: "180°",
                        molecularShapes: [
                            { name: "Linear", example: "CO₂ (O=C=O)", lonePairs: 0 }
                        ]
                    },
                    {
                        electronGroups: 3,
                        electronGeometry: "Trigonal planar",
                        bondAngle: "120°",
                        molecularShapes: [
                            { name: "Trigonal planar", example: "BF₃", lonePairs: 0 },
                            { name: "Bent", example: "SO₂", lonePairs: 1, angle: "<120°" }
                        ]
                    },
                    {
                        electronGroups: 4,
                        electronGeometry: "Tetrahedral",
                        bondAngle: "109.5°",
                        molecularShapes: [
                            { name: "Tetrahedral", example: "CH₄", lonePairs: 0 },
                            { name: "Trigonal pyramidal", example: "NH₃", lonePairs: 1, angle: "107°" },
                            { name: "Bent", example: "H₂O", lonePairs: 2, angle: "104.5°" }
                        ],
                        note: "Lone pairs take more space, compress bond angles"
                    },
                    {
                        electronGroups: 5,
                        electronGeometry: "Trigonal bipyramidal",
                        bondAngle: "90° and 120°",
                        molecularShapes: [
                            { name: "Trigonal bipyramidal", example: "PCl₅", lonePairs: 0 },
                            { name: "Seesaw", example: "SF₄", lonePairs: 1 },
                            { name: "T-shaped", example: "ClF₃", lonePairs: 2 },
                            { name: "Linear", example: "XeF₂", lonePairs: 3 }
                        ]
                    },
                    {
                        electronGroups: 6,
                        electronGeometry: "Octahedral",
                        bondAngle: "90°",
                        molecularShapes: [
                            { name: "Octahedral", example: "SF₆", lonePairs: 0 },
                            { name: "Square pyramidal", example: "BrF₅", lonePairs: 1 },
                            { name: "Square planar", example: "XeF₄", lonePairs: 2 }
                        ]
                    }
                ],
                keyPoints: {
                    lonePairs: "Lone pairs repel more than bonding pairs (take more space)",
                    doubleBonds: "Double/triple bonds repel more than single bonds",
                    angleCompression: "Lone pairs compress bond angles"
                }
            },

            hybridization: {
                definition: "Mixing of atomic orbitals to form new hybrid orbitals for bonding",
                purpose: "Explains bonding geometry and bond angles",
                types: [
                    {
                        type: "sp",
                        atomicOrbitals: "1s + 1p",
                        hybridOrbitals: "2 sp orbitals",
                        geometry: "Linear",
                        bondAngle: "180°",
                        example: "BeCl₂, CO₂"
                    },
                    {
                        type: "sp²",
                        atomicOrbitals: "1s + 2p",
                        hybridOrbitals: "3 sp² orbitals",
                        geometry: "Trigonal planar",
                        bondAngle: "120°",
                        example: "BF₃, C₂H₄ (ethene)",
                        note: "One unhybridized p orbital for π bond"
                    },
                    {
                        type: "sp³",
                        atomicOrbitals: "1s + 3p",
                        hybridOrbitals: "4 sp³ orbitals",
                        geometry: "Tetrahedral",
                        bondAngle: "109.5°",
                        example: "CH₄, H₂O, NH₃",
                        note: "Can hold bonding pairs or lone pairs"
                    },
                    {
                        type: "sp³d",
                        atomicOrbitals: "1s + 3p + 1d",
                        hybridOrbitals: "5 sp³d orbitals",
                        geometry: "Trigonal bipyramidal",
                        bondAngle: "90°, 120°",
                        example: "PCl₅"
                    },
                    {
                        type: "sp³d²",
                        atomicOrbitals: "1s + 3p + 2d",
                        hybridOrbitals: "6 sp³d² orbitals",
                        geometry: "Octahedral",
                        bondAngle: "90°",
                        example: "SF₆"
                    }
                ],
                determination: "Based on number of electron groups (steric number)",
                relationship: {
                    "2 electron groups": "sp",
                    "3 electron groups": "sp²",
                    "4 electron groups": "sp³",
                    "5 electron groups": "sp³d",
                    "6 electron groups": "sp³d²"
                }
            },

            intermolecularForces: {
                definition: "Forces of attraction BETWEEN molecules (not within)",
                comparison: "Weaker than chemical bonds but affect physical properties",
                types: [
                    {
                        force: "London Dispersion Forces (Van der Waals)",
                        description: "Temporary dipoles from electron movement",
                        strength: "Weakest",
                        occursIn: "ALL molecules",
                        factors: "Larger molecules = stronger (more electrons)",
                        example: "Noble gases, nonpolar molecules (CH₄, CO₂)",
                        effect: "Only force in nonpolar molecules"
                    },
                    {
                        force: "Dipole-Dipole Forces",
                        description: "Attraction between permanent dipoles (δ+ to δ-)",
                        strength: "Moderate",
                        occursIn: "Polar molecules",
                        example: "HCl, SO₂, CH₃Cl",
                        effect: "Higher boiling points than nonpolar molecules of similar size"
                    },
                    {
                        force: "Hydrogen Bonding",
                        description: "Special dipole-dipole between H and N, O, or F",
                        strength: "Strongest intermolecular force",
                        requirement: "H bonded to N, O, or F",
                        examples: [
                            { molecule: "H₂O", HBonds: "Each H₂O can form 4 H-bonds", effect: "High boiling point" },
                            { molecule: "NH₃", HBonds: "Each NH₃ can form H-bonds" },
                            { molecule: "HF", HBonds: "Strong H-bonding" },
                            { molecule: "DNA", role: "H-bonds between base pairs" },
                            { molecule: "Proteins", role: "H-bonds stabilize structure" }
                        ],
                        effects: {
                            water: "High boiling point, high surface tension, ice less dense than liquid",
                            biology: "Protein and DNA structure"
                        },
                        notation: "Often shown as dotted line (----)"
                    },
                    {
                        force: "Ion-Dipole Forces",
                        description: "Attraction between ion and polar molecule",
                        strength: "Very strong (stronger than H-bonding)",
                        occursIn: "Solutions of ionic compounds in polar solvents",
                        example: "NaCl dissolved in H₂O (Na⁺ attracts δ- of H₂O)",
                        effect: "Explains solubility of ionic compounds in water"
                    }
                ],
                strengthOrder: "Ion-Dipole > H-bonding > Dipole-Dipole > London Dispersion",
                effects: {
                    boilingPoint: "Stronger IMF → higher boiling point",
                    meltingPoint: "Stronger IMF → higher melting point",
                    viscosity: "Stronger IMF → higher viscosity",
                    surfaceTension: "Stronger IMF → higher surface tension",
                    solubility: "Like dissolves like (similar IMF)"
                }
            },

            applications: [
                "Predicting molecular shapes and properties",
                "Drug design (molecular recognition)",
                "Material science (polymers, alloys)",
                "Understanding solubility and miscibility",
                "Biochemistry (protein folding, DNA structure)",
                "Nanotechnology"
            ],

            keyPoints: {
                bondingAchievesStability: "Atoms bond to achieve stable electron configuration",
                geometryAffectsPolarity: "Molecular shape determines overall polarity",
                IMFaffectProperties: "Intermolecular forces determine physical properties",
                hybridizationExplainsGeometry: "Hybrid orbitals explain bonding angles",
                likeDissolves: "Like dissolves like - polarity determines solubility"
            }
        };
    }

    handleStatesOfMatter(problem) {
        return {
            topic: "States of Matter and Particle Theory",
            category: 'physical_chemistry',
            summary: "Matter exists in different states based on particle arrangement and motion. The kinetic molecular theory explains gas behavior, and gas laws describe relationships between pressure, volume, temperature, and moles.",

            statesOfMatter: [
                {
                    state: "Solid",
                    particleArrangement: "Closely packed in fixed, organized pattern",
                    particleMotion: "Vibrate in fixed positions",
                    shape: "Definite shape",
                    volume: "Definite volume",
                    compressibility: "Incompressible",
                    density: "High (particles close together)",
                    examples: ["Ice", "Iron", "Diamond", "Salt"],
                    types: {
                        crystalline: "Ordered arrangement (NaCl, diamond, ice)",
                        amorphous: "Random arrangement (glass, rubber, plastic)"
                    }
                },
                {
                    state: "Liquid",
                    particleArrangement: "Close together but not organized",
                    particleMotion: "Move freely, slide past each other",
                    shape: "Takes shape of container",
                    volume: "Definite volume",
                    compressibility: "Slightly compressible",
                    density: "High (particles close, but less than solid)",
                    examples: ["Water", "Ethanol", "Mercury", "Oil"],
                    properties: {
                        viscosity: "Resistance to flow",
                        surfaceTension: "Tendency of surface to minimize area",
                        capillaryAction: "Rise/fall in narrow tube"
                    }
                },
                {
                    state: "Gas",
                    particleArrangement: "Very far apart, random",
                    particleMotion: "Move rapidly and independently in all directions",
                    shape: "Takes shape of container",
                    volume: "Fills entire volume of container",
                    compressibility: "Highly compressible",
                    density: "Low (particles far apart)",
                    examples: ["Oxygen", "Nitrogen", "Carbon dioxide", "Water vapor"],
                    characteristics: {
                        noFixedShape: "Expands to fill container",
                        lowDensity: "~1000× less dense than liquids/solids",
                        miscible: "Gases mix completely with each other"
                    }
                },
                {
                    state: "Plasma",
                    particleArrangement: "Ions and free electrons, very far apart",
                    particleMotion: "Very high energy, rapid motion",
                    shape: "No definite shape",
                    volume: "No definite volume",
                    properties: "Ionized gas, conducts electricity",
                    examples: ["Sun", "Lightning", "Fluorescent lights", "Stars"],
                    temperature: "Very high temperature required",
                    occurrence: "Most common state in universe (stars)"
                }
            ],

            phaseChanges: [
                {
                    change: "Melting (Fusion)",
                    transition: "Solid → Liquid",
                    energy: "Endothermic (absorbs energy)",
                    example: "Ice → Water",
                    temperature: "Occurs at melting point",
                    heatOfFusion: "Energy to melt 1 mole or 1 gram"
                },
                {
                    change: "Freezing (Solidification)",
                    transition: "Liquid → Solid",
                    energy: "Exothermic (releases energy)",
                    example: "Water → Ice",
                    temperature: "Occurs at freezing point (same as melting point)",
                    note: "Reverse of melting"
                },
                {
                    change: "Vaporization (Evaporation/Boiling)",
                    transition: "Liquid → Gas",
                    energy: "Endothermic (absorbs energy)",
                    example: "Water → Steam",
                    types: {
                        evaporation: "Surface molecules escape at any temperature",
                        boiling: "Rapid vaporization throughout liquid at boiling point"
                    },
                    heatOfVaporization: "Energy to vaporize 1 mole or 1 gram"
                },
                {
                    change: "Condensation",
                    transition: "Gas → Liquid",
                    energy: "Exothermic (releases energy)",
                    example: "Steam → Water",
                    temperature: "Occurs at condensation point",
                    note: "Reverse of vaporization"
                },
                {
                    change: "Sublimation",
                    transition: "Solid → Gas (directly, skipping liquid)",
                    energy: "Endothermic (absorbs energy)",
                    example: "Dry ice (CO₂) → Carbon dioxide gas",
                    others: "Iodine, naphthalene (mothballs)",
                    note: "Occurs below triple point"
                },
                {
                    change: "Deposition",
                    transition: "Gas → Solid (directly, skipping liquid)",
                    energy: "Exothermic (releases energy)",
                    example: "Water vapor → Frost",
                    note: "Reverse of sublimation"
                }
            ],

            heatingCoolingCurves: {
                description: "Graph of temperature vs time as substance heated or cooled",
                regions: [
                    {
                        region: "Heating solid",
                        slope: "Temperature increases",
                        particleMotion: "Particles vibrate faster"
                    },
                    {
                        region: "Melting (plateau)",
                        slope: "Temperature constant",
                        energy: "Energy breaks intermolecular forces, not raising temperature",
                        duration: "Depends on heat of fusion"
                    },
                    {
                        region: "Heating liquid",
                        slope: "Temperature increases",
                        particleMotion: "Particles move faster"
                    },
                    {
                        region: "Boiling (plateau)",
                        slope: "Temperature constant",
                        energy: "Energy overcomes intermolecular forces",
                        duration: "Depends on heat of vaporization"
                    },
                    {
                        region: "Heating gas",
                        slope: "Temperature increases",
                        particleMotion: "Particles move much faster"
                    }
                ],
                keyPoint: "Temperature doesn't change during phase transitions (energy breaks bonds)"
            },

            kineticMolecularTheory: {
                description: "Model explaining behavior of gases at particle level",
                assumptions: [
                    {
                        assumption: "Gas particles in constant, random, rapid motion",
                        reality: "Average speed ~500 m/s at room temperature"
                    },
                    {
                        assumption: "Gas particles have negligible volume",
                        reality: "Volume of particles << volume of container",
                        idealGas: "Perfectly true for ideal gas"
                    },
                    {
                        assumption: "No intermolecular forces between particles",
                        reality: "No attraction or repulsion",
                        idealGas: "True for ideal gas; real gases have weak IMF"
                    },
                    {
                        assumption: "Collisions are perfectly elastic",
                        reality: "No kinetic energy lost in collisions",
                        meaning: "Total energy conserved"
                    },
                    {
                        assumption: "Average kinetic energy proportional to temperature (K)",
                        formula: "KE_avg = (3/2)RT",
                        meaning: "Higher temperature = faster particle motion"
                    }
                ],
                explanations: {
                    pressure: "Result of particle collisions with container walls",
                    temperature: "Measure of average kinetic energy of particles",
                    volume: "Space particles move through",
                    gasPressure: "More collisions or faster particles = higher pressure"
                },
                realGasDeviations: "Real gases deviate from ideal behavior at high pressure and low temperature"
            },

            gasLaws: [
                {
                    law: "Boyle's Law",
                    statement: "Pressure inversely proportional to volume (at constant T and n)",
                    formula: "P₁V₁ = P₂V₂",
                    relationship: "P ∝ 1/V",
                    graph: "Hyperbola (P vs V)",
                    explanation: "Smaller volume → more collisions per unit area → higher pressure",
                    example: {
                        problem: "Gas at 2 atm and 4 L. If volume changes to 2 L, find new pressure.",
                        solution: "P₁V₁ = P₂V₂ → (2)(4) = P₂(2) → P₂ = 4 atm"
                    }
                },
                {
                    law: "Charles's Law",
                    statement: "Volume directly proportional to temperature (at constant P and n)",
                    formula: "V₁/T₁ = V₂/T₂",
                    relationship: "V ∝ T",
                    graph: "Straight line through origin (V vs T)",
                    explanation: "Higher temperature → faster particles → push out more → larger volume",
                    units: "Temperature MUST be in Kelvin",
                    example: {
                        problem: "Gas at 300 K has volume 2 L. Find volume at 600 K.",
                        solution: "V₁/T₁ = V₂/T₂ → 2/300 = V₂/600 → V₂ = 4 L"
                    }
                },
                {
                    law: "Gay-Lussac's Law",
                    statement: "Pressure directly proportional to temperature (at constant V and n)",
                    formula: "P₁/T₁ = P₂/T₂",
                    relationship: "P ∝ T",
                    graph: "Straight line through origin (P vs T)",
                    explanation: "Higher temperature → faster particles → more forceful collisions → higher pressure",
                    units: "Temperature MUST be in Kelvin",
                    example: {
                        problem: "Gas at 300 K has pressure 1 atm. Find pressure at 450 K.",
                        solution: "P₁/T₁ = P₂/T₂ → 1/300 = P₂/450 → P₂ = 1.5 atm"
                    }
                },
                {
                    law: "Avogadro's Law",
                    statement: "Volume directly proportional to moles (at constant P and T)",
                    formula: "V₁/n₁ = V₂/n₂",
                    relationship: "V ∝ n",
                    explanation: "More moles → more particles → larger volume (or more pressure)",
                    molarVolume: "1 mole of any gas = 22.4 L at STP",
                    STP: "Standard Temperature and Pressure: 0°C (273 K) and 1 atm"
                },
                {
                    law: "Combined Gas Law",
                    statement: "Combines Boyle's, Charles's, and Gay-Lussac's laws",
                    formula: "P₁V₁/T₁ = P₂V₂/T₂",
                    use: "When amount of gas (n) is constant but P, V, and T change",
                    note: "Can derive individual laws by holding one variable constant",
                    example: {
                        problem: "Gas: P₁=2 atm, V₁=3 L, T₁=300 K. Find V₂ if P₂=1 atm, T₂=400 K.",
                        solution: "P₁V₁/T₁ = P₂V₂/T₂ → (2)(3)/300 = (1)(V₂)/400 → V₂ = 8 L"
                    }
                },
                {
                    law: "Ideal Gas Law",
                    statement: "Relates P, V, n, and T for ideal gases",
                    formula: "PV = nRT",
                    variables: {
                        P: "Pressure (atm, kPa, mmHg)",
                        V: "Volume (L)",
                        n: "Moles",
                        R: "Gas constant",
                        T: "Temperature (MUST be Kelvin)"
                    },
                    gasConstant: {
                        value1: "R = 0.0821 L·atm/(mol·K)",
                        value2: "R = 8.314 J/(mol·K)",
                        units: "Choose R based on units of P and V"
                    },
                    use: "Calculate any variable if other three known",
                    examples: [
                        {
                            problem: "Find moles of gas: P=2 atm, V=10 L, T=300 K",
                            solution: "n = PV/RT = (2)(10)/(0.0821)(300) = 0.81 mol"
                        },
                        {
                            problem: "Find volume: n=2 mol, T=273 K, P=1 atm",
                            solution: "V = nRT/P = (2)(0.0821)(273)/1 = 44.8 L (close to 2×22.4 L)"
                        }
                    ],
                    idealGasAssumptions: "Assumes no IMF and negligible particle volume",
                    realGases: "Real gases approximate ideal behavior at low P and high T"
                },
                {
                    law: "Dalton's Law of Partial Pressures",
                    statement: "Total pressure = sum of partial pressures",
                    formula: "P_total = P₁ + P₂ + P₃ + ...",
                    partialPressure: "Pressure exerted by one gas in a mixture",
                    calculation: "P_i = (n_i/n_total) × P_total or P_i = χ_i × P_total",
                    moleFraction: "χ_i = n_i/n_total",
                    example: {
                        problem: "Container with 0.5 mol N₂ and 1.5 mol O₂ at 4 atm total. Find P(N₂).",
                        solution: "χ(N₂) = 0.5/2.0 = 0.25; P(N₂) = 0.25 × 4 = 1 atm"
                    },
                    application: "Collecting gas over water (subtract water vapor pressure)"
                },
                {
                    law: "Graham's Law of Effusion",
                    statement: "Rate of effusion inversely proportional to square root of molar mass",
                    formula: "rate₁/rate₂ = √(M₂/M₁)",
                    effusion: "Gas escaping through tiny hole into vacuum",
                    diffusion: "Gas spreading through another gas",
                    explanation: "Lighter molecules move faster",
                    example: {
                        problem: "Compare effusion rates of H₂ (M=2) and O₂ (M=32).",
                        solution: "rate(H₂)/rate(O₂) = √(32/2) = √16 = 4 (H₂ effuses 4× faster)"
                    }
                }
            ],

            vaporPressure: {
                definition: "Pressure exerted by vapor in equilibrium with liquid",
                equilibrium: "Rate of evaporation = rate of condensation",
                factors: [
                    {
                        factor: "Temperature",
                        effect: "Higher T → higher vapor pressure",
                        reason: "More molecules have enough energy to escape"
                    },
                    {
                        factor: "Intermolecular Forces",
                        effect: "Stronger IMF → lower vapor pressure",
                        reason: "Harder for molecules to escape",
                        example: "Water (H-bonding) has lower vapor pressure than ethanol"
                    }
                ],
                boilingPoint: {
                    definition: "Temperature at which vapor pressure = atmospheric pressure",
                    normal: "Boiling point at 1 atm (101.3 kPa)",
                    effect: "Lower atmospheric pressure → lower boiling point",
                    example: "Water boils at <100°C on mountains"
                },
                volatility: "High vapor pressure = volatile (evaporates easily)"
            },

            applications: [
                "Weather prediction (atmospheric pressure and temperature)",
                "Scuba diving (gas laws at depth)",
                "Hot air balloons (Charles's Law)",
                "Refrigeration and air conditioning",
                "Industrial gas processes",
                "Respiratory physiology",
                "Tire pressure management"
            ],

            keyPoints: {
                temperatureKelvin: "ALWAYS use Kelvin for gas law calculations",
                phasesRequireEnergy: "Phase changes involve energy but not temperature change",
                KMTexplainsGases: "Kinetic molecular theory explains gas behavior",
                idealVsReal: "Real gases deviate from ideal at high P and low T",
                pressureFromCollisions: "Gas pressure results from particle collisions"
            }
        };
    }

    handleNuclearChemistry(problem) {
        return {
            topic: "Nuclear Chemistry",
            category: 'nuclear',
            summary: "Nuclear chemistry studies reactions involving changes in atomic nuclei. Unlike chemical reactions which involve electrons, nuclear reactions involve protons and neutrons and release enormous amounts of energy.",

            nuclearVsChemical: {
                comparison: [
                    {
                        aspect: "What changes",
                        chemical: "Electron arrangement",
                        nuclear: "Nucleus (protons and neutrons)"
                    },
                    {
                        aspect: "Energy scale",
                        chemical: "kJ/mol",
                        nuclear: "MeV (million times larger)"
                    },
                    {
                        aspect: "Affected by conditions",
                        chemical: "Yes (temperature, pressure, catalyst)",
                        nuclear: "No (independent of chemical environment)"
                    },
                    {
                        aspect: "Identity change",
                        chemical: "Elements unchanged",
                        nuclear: "Elements can change (transmutation)"
                    },
                    {
                        aspect: "Mass-energy",
                        chemical: "Mass conserved",
                        nuclear: "Mass can convert to energy (E=mc²)"
                    }
                ]
            },

            nuclearStability: {
                factors: [
                    {
                        factor: "Neutron-to-Proton Ratio",
                        stable: "For light elements: n/p ≈ 1",
                        heavyElements: "For heavy elements: n/p ≈ 1.5",
                        tooManyNeutrons: "Beta decay (neutron → proton + electron)",
                        tooFewNeutrons: "Positron emission or electron capture"
                    },
                    {
                        factor: "Magic Numbers",
                        definition: "Extra stable with 2, 8, 20, 28, 50, 82, or 126 protons or neutrons",
                        example: "⁴He (2p, 2n) is very stable"
                    },
                    {
                        factor: "Even-Odd Effects",
                        mostStable: "Even protons and even neutrons",
                        leastStable: "Odd protons and odd neutrons"
                    }
                ],
                bindingEnergy: "Energy required to break nucleus into individual nucleons",
                massDefect: "Difference between mass of nucleus and sum of individual nucleons",
                Emc2: "E = mc² relates mass defect to binding energy"
            },

            radioactiveDecay: {
                definition: "Spontaneous emission of particles or energy from unstable nucleus",
                types: [
                    {
                        type: "Alpha Decay (α)",
                        particle: "Helium nucleus (₂⁴He or ₂⁴α)",
                        composition: "2 protons + 2 neutrons",
                        symbol: "₂⁴He or α",
                        effect: {
                            massNumber: "Decreases by 4",
                            atomicNumber: "Decreases by 2"
                        },
                        penetration: "Stopped by paper or skin",
                        example: {
                            equation: "²³⁸₉₂U → ²³⁴₉₀Th + ₂⁴He",
                            explanation: "Uranium-238 → Thorium-234 + alpha particle"
                        },
                        occurrence: "Heavy elements (Z > 82)"
                    },
                    {
                        type: "Beta Decay (β⁻)",
                        particle: "Electron (₋₁⁰e or β⁻)",
                        process: "Neutron → Proton + Electron + Antineutrino",
                        effect: {
                            massNumber: "Unchanged",
                            atomicNumber: "Increases by 1"
                        },
                        penetration: "Stopped by aluminum foil",
                        example: {
                            equation: "¹⁴₆C → ¹⁴₇N + ₋₁⁰e",
                            explanation: "Carbon-14 → Nitrogen-14 + beta particle"
                        },
                        occurrence: "Neutron-rich nuclei"
                    },
                    {
                        type: "Positron Emission (β⁺)",
                        particle: "Positron (₁⁰e or β⁺)",
                        process: "Proton → Neutron + Positron + Neutrino",
                        effect: {
                            massNumber: "Unchanged",
                            atomicNumber: "Decreases by 1"
                        },
                        penetration: "Similar to beta",
                        example: {
                            equation: "¹¹₆C → ¹¹₅B + ₁⁰e",
                            explanation: "Carbon-11 → Boron-11 + positron"
                        },
                        occurrence: "Proton-rich nuclei"
                    },
                    {
                        type: "Gamma Decay (γ)",
                        particle: "High-energy photon (γ)",
                        process: "Nucleus releases excess energy",
                        effect: {
                            massNumber: "Unchanged",
                            atomicNumber: "Unchanged"
                        },
                        penetration: "Very penetrating; thick lead or concrete needed",
                        example: {
                            equation: "⁶⁰₂₇Co* → ⁶⁰₂₇Co + γ",
                            explanation: "Excited cobalt-60 → ground state + gamma ray"
                        },
                        occurrence: "Often accompanies other decay types",
                        note: "* denotes excited state"
                    },
                    {
                        type: "Electron Capture",
                        process: "Inner electron captured by nucleus",
                        effect: {
                            massNumber: "Unchanged",
                            atomicNumber: "Decreases by 1"
                        },
                        example: {
                            equation: "⁴⁰₁₉K + ₋₁⁰e → ⁴⁰₁₈Ar",
                            explanation: "Potassium-40 captures electron → Argon-40"
                        },
                        occurrence: "Alternative to positron emission"
                    }
                ],
                balancingEquations: {
                    rules: [
                        "Mass number (A) must be conserved",
                        "Atomic number (Z) must be conserved",
                        "Charge must be conserved"
                    ],
                    example: {
                        problem: "²³⁵₉₂U → ? + ₂⁴He",
                        solution: "Mass: 235 = A + 4 → A = 231; Atomic: 92 = Z + 2 → Z = 90",
                        answer: "²³¹₉₀Th"
                    }
                }
            },

            halfLife: {
                definition: "Time for half of radioactive sample to decay",
                symbol: "t₁/₂",
                characteristics: [
                    "Independent of amount of sample",
                    "Independent of temperature, pressure, chemical state",
                    "Constant for each isotope",
                    "Cannot be changed by any chemical or physical means"
                ],
                calculation: {
                    formula: "N_t = N₀ × (1/2)^(t/t₁/₂)",
                    variables: {
                        Nt: "Amount remaining after time t",
                        N0: "Initial amount",
                        t: "Elapsed time",
                        halfLife: "Half-life"
                    },
                    alternativeFormula: "N_t = N₀ × e^(-λt) where λ = ln(2)/t₁/₂"
                },
                examples: [
                    {
                        isotope: "Carbon-14",
                        halfLife: "5,730 years",
                        application: "Radiocarbon dating (organic materials)",
                        problem: "16 g of C-14. How much after 11,460 years (2 half-lives)?",
                        solution: "16 → 8 → 4 g"
                    },
                    {
                        isotope: "Uranium-238",
                        halfLife: "4.5 billion years",
                        application: "Dating rocks and Earth's age"
                    },
                    {
                        isotope: "Iodine-131",
                        halfLife: "8 days",
                        application: "Medical imaging (thyroid)"
                    },
                    {
                        isotope: "Technetium-99m",
                        halfLife: "6 hours",
                        application: "Medical imaging"
                    }
                ],
                activity: {
                    definition: "Number of decay events per unit time",
                    units: "Becquerel (Bq) = 1 decay/second; Curie (Ci) = 3.7×10¹⁰ Bq",
                    relationship: "Activity also decreases with same half-life"
                }
            },

            nuclearReactions: [
                {
                    type: "Nuclear Fission",
                    definition: "Splitting heavy nucleus into lighter nuclei",
                    process: "Heavy nucleus + neutron → lighter nuclei + neutrons + energy",
                    example: {
                        equation: "²³⁵₉₂U + ₀¹n → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3₀¹n + energy",
                        explanation: "Uranium-235 splits into barium-141, krypton-92, and 3 neutrons"
                    },
                    chainReaction: "Neutrons released trigger more fissions",
                    criticalMass: "Minimum mass needed to sustain chain reaction",
                    controlRods: "Absorb neutrons to control reaction rate",
                    applications: [
                        "Nuclear power plants (controlled fission)",
                        "Nuclear weapons (uncontrolled fission)"
                    ],
                    energy: "~200 MeV per fission"
                },
                {
                    type: "Nuclear Fusion",
                    definition: "Combining light nuclei into heavier nucleus",
                    process: "Light nuclei → heavier nucleus + energy",
                    example: {
                        equation: "₁²H + ₁³H → ₂⁴He + ₀¹n + energy",
                        explanation: "Deuterium + Tritium → Helium-4 + neutron"
                    },
                    conditions: "Extremely high temperature and pressure (millions of degrees)",
                    applications: [
                        "Energy source in stars (including Sun)",
                        "Hydrogen bombs",
                        "Experimental fusion reactors (ITER)"
                    ],
                    energy: "More energy per mass than fission",
                    challenge: "Difficult to achieve and sustain on Earth"
                },
                {
                    type: "Artificial Transmutation",
                    definition: "Bombarding nucleus with particles to create new element",
                    process: "Target nucleus + projectile → new nucleus + particles",
                    example: {
                        equation: "¹⁴₇N + ₂⁴He → ¹⁷₈O + ₁¹H",
                        explanation: "First transmutation (Rutherford, 1919)"
                    },
                    applications: [
                        "Creating new elements (transuranium elements)",
                        "Producing radioisotopes for medicine"
                    ],
                    accelerators: "Particle accelerators provide high-energy particles"
                }
            ],

            applications: [
                {
                    area: "Medicine",
                    uses: [
                        "Diagnostic imaging (PET, SPECT scans)",
                        "Cancer treatment (radiation therapy)",
                        "Sterilization of medical equipment",
                        "Radioactive tracers"
                    ],
                    isotopes: ["Technetium-99m", "Iodine-131", "Cobalt-60"]
                },
                {
                    area: "Dating",
                    uses: [
                        "Radiocarbon dating (organic materials up to ~50,000 years)",
                        "Uranium-lead dating (rocks, billions of years)",
                        "Potassium-argon dating (volcanic rocks)"
                    ]
                },
                {
                    area: "Energy Production",
                    uses: [
                        "Nuclear power plants (fission reactors)",
                        "Nuclear submarines and ships",
                        "Space probes (radioisotope thermoelectric generators)"
                    ]
                },
                {
                    area: "Industrial",
                    uses: [
                        "Radiography (inspect welds, structures)",
                        "Smoke detectors (Americium-241)",
                        "Food irradiation (preservation)",
                        "Thickness gauges"
                    ]
                },
                {
                    area: "Research",
                    uses: [
                        "Tracer studies (follow chemical pathways)",
                        "Studying reaction mechanisms",
                        "Archaeological dating"
                    ]
                }
            ],

            safetyAndHazards: {
                radiationDamage: "Ionizing radiation damages cells and DNA",
                units: {
                    exposure: "Roentgen (R)",
                    dose: "Gray (Gy) or rad",
                    biologicalEffect: "Sievert (Sv) or rem"
                },
                protection: [
                    "Time: Minimize exposure time",
                    "Distance: Maximize distance from source (inverse square law)",
                    "Shielding: Use appropriate shielding (lead, concrete)"
                ],
                disposal: "Radioactive waste must be safely stored for many half-lives",
                detection: "Geiger counter, scintillation counter, film badges"
            },

            keyPoints: {
                nuclearNotChemical: "Nuclear reactions involve nuclei, not electrons",
                hugeEnergy: "Nuclear reactions release millions of times more energy than chemical",
                halfLifeConstant: "Half-life is constant and cannot be changed",
                balanceEquations: "Balance both mass number and atomic number",
                Emc2: "Mass can be converted to energy: E = mc²"
            }
        };
    }

    handleLaboratoryChemistry(problem) {
        return {
            topic: "Laboratory Chemistry",
            category: 'practical',
            summary: "Laboratory chemistry encompasses techniques, equipment, measurements, and safety procedures essential for experimental chemistry. Proper technique ensures accurate results and safe operations.",

            labSafety: {
                importance: "Safety is the highest priority in any laboratory",
                personalProtectiveEquipment: [
                    {
                        item: "Safety Goggles",
                        purpose: "Protect eyes from chemicals, splashes, projectiles",
                        requirement: "MUST be worn at all times in lab",
                        note: "Regular glasses NOT sufficient"
                    },
                    {
                        item: "Lab Coat or Apron",
                        purpose: "Protect skin and clothing from chemical spills",
                        requirement: "Should cover arms and body"
                    },
                    {
                        item: "Gloves",
                        purpose: "Protect hands from chemicals and heat",
                        types: "Latex, nitrile, or heat-resistant depending on task"
                    },
                    {
                        item: "Closed-Toe Shoes",
                        purpose: "Protect feet from spills and dropped objects",
                        requirement: "No sandals or open-toed shoes"
                    }
                ],
                generalRules: [
                    "Know location of safety equipment (eyewash, shower, fire extinguisher, exits)",
                    "Never eat, drink, or chew gum in lab",
                    "Tie back long hair; remove dangling jewelry",
                    "Read all labels carefully before using chemicals",
                    "Never taste or directly smell chemicals (waft if necessary)",
                    "Add acid to water, never water to acid ('Do like you oughta, add acid to water')",
                    "Clean up spills immediately",
                    "Wash hands thoroughly before leaving lab",
                    "Report all accidents, injuries, and broken equipment immediately",
                    "Never work alone in lab"
                ],
                chemicalHazards: {
                    corrosive: "Acids, bases (cause burns)",
                    flammable: "Organic solvents, alcohols",
                    toxic: "Heavy metals, certain organic compounds",
                    reactive: "Alkali metals, strong oxidizers",
                    carcinogenic: "Benzene, formaldehyde"
                },
                wasteDisposal: [
                    "Never pour chemicals down sink (unless specifically instructed)",
                    "Separate waste by type (acids, bases, organics, etc.)",
                    "Use designated waste containers",
                    "Label all waste containers",
                    "Follow institutional guidelines for hazardous waste"
                ],
                emergencyProcedures: {
                    fire: "Use appropriate extinguisher; evacuate if necessary; pull fire alarm",
                    chemicalSpill: "Alert others; contain if safe; use spill kit; notify instructor",
                    eyeContamination: "Immediately flush with eyewash for 15+ minutes; seek medical attention",
                    skinContamination: "Remove contaminated clothing; rinse with water 15+ minutes; use safety shower if large area",
                    ingestion: "Do NOT induce vomiting; seek medical attention immediately; bring chemical label"
                }
            },

            measurementAndData: {
                accuracyVsPrecision: {
                    accuracy: {
                        definition: "How close a measurement is to the true value",
                        example: "Measuring 10.0 g when true mass is 10.1 g (accurate)"
                    },
                    precision: {
                        definition: "How close repeated measurements are to each other",
                        example: "Measurements of 10.5, 10.6, 10.5 g (precise but not accurate if true value is 10.0)"
                    },
                    ideal: "Both accurate AND precise"
                },
                
                significantFigures: {
                    purpose: "Indicate precision of measurement",
                    rules: [
                        "All non-zero digits are significant (234 has 3 sig figs)",
                        "Zeros between non-zeros are significant (1002 has 4 sig figs)",
                        "Leading zeros are NOT significant (0.0023 has 2 sig figs)",
                        "Trailing zeros after decimal ARE significant (2.300 has 4 sig figs)",
                        "Trailing zeros without decimal may or may not be (ambiguous: 1200)"
                    ],
                    calculations: {
                        multiplication: "Result has same sig figs as measurement with fewest",
                        addition: "Result has same decimal places as measurement with fewest",
                        example: "12.1 + 0.035 = 12.135 → 12.1 (round to 1 decimal place)"
                    }
                },

                uncertaintyAndError: {
                    randomError: {
                        definition: "Unpredictable variations in measurement",
                        causes: "Environmental fluctuations, human limitations",
                        effect: "Affects precision",
                        reduction: "Multiple measurements, better equipment"
                    },
                    systematicError: {
                        definition: "Consistent error in same direction",
                        causes: "Uncalibrated equipment, improper technique",
                        effect: "Affects accuracy",
                        reduction: "Calibrate equipment, improve technique"
                    },
                    percentError: {
                        formula: "% Error = |experimental - theoretical| / theoretical × 100%",
                        example: "Experimental: 9.5 g, Theoretical: 10.0 g → % Error = 5%"
                    }
                }
            },

            commonLabEquipment: [
                {
                    equipment: "Beaker",
                    purpose: "Hold and heat liquids; approximate measurements",
                    precision: "Low",
                    sizes: "50 mL to 2000 mL",
                    note: "NOT for accurate volume measurements"
                },
                {
                    equipment: "Erlenmeyer Flask",
                    purpose: "Mix solutions; titrations",
                    advantage: "Tapered top reduces splashing",
                    precision: "Low for volume",
                    uses: "Mixing, heating, titration endpoint"
                },
                {
                    equipment: "Volumetric Flask",
                    purpose: "Prepare solutions of precise concentrations",
                    precision: "High (±0.01%)",
                    sizes: "25 mL to 2000 mL",
                    marking: "Single calibration line",
                    use: "Fill to line for exact volume"
                },
                {
                    equipment: "Graduated Cylinder",
                    purpose: "Measure liquid volumes",
                    precision: "Moderate (±0.5-1%)",
                    sizes: "10 mL to 1000 mL",
                    reading: "Read at bottom of meniscus",
                    note: "More precise than beaker, less than volumetric flask"
                },
                {
                    equipment: "Burette",
                    purpose: "Deliver precise variable volumes (titrations)",
                    precision: "High (±0.01 mL)",
                    capacity: "Usually 50 mL",
                    reading: "Read at bottom of meniscus before and after delivery",
                    use: "Titrations to determine concentrations"
                },
                {
                    equipment: "Pipette",
                    purpose: "Transfer precise volumes of liquid",
                    types: {
                        volumetric: "Fixed volume (10, 25, 50 mL); most precise",
                        graduated: "Variable volumes; less precise",
                        micropipette: "Very small volumes (μL)"
                    },
                    precision: "Very high",
                    use: "Use pipette bulb or filler, NEVER mouth pipette"
                },
                {
                    equipment: "Balance",
                    purpose: "Measure mass",
                    types: {
                        analytical: "High precision (±0.0001 g)",
                        topLoading: "Moderate precision (±0.01 g)"
                    },
                    technique: [
                        "Calibrate before use (tare/zero)",
                        "Place on level surface",
                        "Close doors (analytical balance)",
                        "Never weigh hot objects",
                        "Use weighing paper or container"
                    ]
                },
                {
                    equipment: "Bunsen Burner",
                    purpose: "Heat substances",
                    parts: "Base, gas inlet, barrel, air vent",
                    flames: {
                        yellow: "Incomplete combustion (sooty, cooler)",
                        blue: "Complete combustion (clean, hotter ~1500°C)"
                    },
                    safety: "Tie back hair; know gas shut-off location"
                },
                {
                    equipment: "Hot Plate",
                    purpose: "Heat liquids and solutions",
                    advantage: "Safer than open flame; temperature control",
                    use: "Never touch hot surface; use tongs or holders"
                },
                {
                    equipment: "Thermometer",
                    purpose: "Measure temperature",
                    types: "Mercury, alcohol, digital",
                    reading: "Eye level; wait for equilibrium",
                    range: "Typically -10°C to 110°C"
                },
                {
                    equipment: "Test Tube",
                    purpose: "Hold small amounts for reactions",
                    sizes: "Various (typically 13×100 mm to 25×200 mm)",
                    heating: "Use test tube holder; point away from people",
                    note: "Never fill more than 1/3 full when heating"
                },
                {
                    equipment: "Funnel",
                    purpose: "Transfer liquids or powders",
                    types: {
                        regular: "Simple transfer",
                        separatory: "Separate immiscible liquids",
                        Buchner: "Vacuum filtration with filter paper"
                    }
                },
                {
                    equipment: "Stirring Rod",
                    purpose: "Mix solutions; guide liquid flow",
                    material: "Glass",
                    technique: "Stir gently; use to pour along rod"
                },
                {
                    equipment: "Watch Glass",
                    purpose: "Cover beakers; hold small amounts; evaporate",
                    shape: "Concave disc",
                    use: "Can be used as weighing surface"
                },
                {
                    equipment: "Crucible and Cover",
                    purpose: "Heat substances to high temperatures",
                    material: "Porcelain or metal",
                    use: "Heating solids; decomposition reactions",
                    handling: "Use crucible tongs when hot"
                },
                {
                    equipment: "Evaporating Dish",
                    purpose: "Evaporate solvents; heat solids",
                    material: "Porcelain",
                    shape: "Shallow dish",
                    use: "Concentrating solutions"
                }
            ],

            commonTechniques: [
                {
                    technique: "Titration",
                    purpose: "Determine concentration of unknown solution",
                    principle: "Controlled addition of known solution until reaction complete",
                    equipment: "Burette, Erlenmeyer flask, indicator",
                    procedure: [
                        "1. Fill burette with titrant (known concentration)",
                        "2. Add measured volume of analyte (unknown) to flask",
                        "3. Add indicator to analyte",
                        "4. Slowly add titrant while swirling",
                        "5. Stop when indicator changes color (endpoint)",
                        "6. Record volume of titrant used",
                        "7. Calculate unknown concentration"
                    ],
                    calculation: "M₁V₁ = M₂V₂ (for 1:1 stoichiometry)",
                    indicators: {
                        phenolphthalein: "Colorless (acid) → Pink (base), pH 8.2-10",
                        methylOrange: "Red (acid) → Yellow (base), pH 3.1-4.4"
                    },
                    tips: [
                        "Swirl constantly during addition",
                        "Near endpoint, add dropwise",
                        "Repeat trial 2-3 times for precision",
                        "First trial is often practice"
                    ]
                },
                {
                    technique: "Filtration",
                    purpose: "Separate solid from liquid",
                    types: {
                        gravity: {
                            equipment: "Funnel, filter paper, beaker",
                            use: "Routine separations",
                            speed: "Slow"
                        },
                        vacuum: {
                            equipment: "Buchner funnel, filter flask, vacuum pump",
                            use: "Faster filtration",
                            speed: "Fast"
                        }
                    },
                    procedure: [
                        "Fold filter paper (cone or flat)",
                        "Place in funnel",
                        "Wet filter paper with solvent",
                        "Pour mixture slowly down stirring rod",
                        "Rinse solid with small amount of solvent"
                    ],
                    terms: {
                        filtrate: "Liquid that passes through",
                        residue: "Solid remaining on filter"
                    }
                },
                {
                    technique: "Distillation",
                    purpose: "Separate liquids based on boiling points",
                    types: {
                        simple: "Separate liquids with large BP difference (>25°C)",
                        fractional: "Separate liquids with similar BP"
                    },
                    equipment: "Distillation flask, condenser, thermometer, receiving flask",
                    procedure: [
                        "Heat mixture in distillation flask",
                        "Vapors rise and enter condenser",
                        "Cool water flows through condenser jacket",
                        "Vapors condense and collect in receiving flask",
                        "Monitor temperature (should stay constant during distillation)"
                    ],
                    applications: [
                        "Purify liquids",
                        "Separate petroleum fractions",
                        "Produce distilled water",
                        "Purify alcohols"
                    ]
                },
                {
                    technique: "Chromatography",
                    purpose: "Separate components of mixture",
                    principle: "Differential movement through stationary phase",
                    types: {
                        paperChromatography: {
                            phases: "Paper (stationary), solvent (mobile)",
                            use: "Separate pigments, amino acids",
                            Rf: "Rf = distance traveled by substance / distance traveled by solvent"
                        },
                        thinLayerChromatography: {
                            phases: "TLC plate coated with silica (stationary), solvent (mobile)",
                            use: "Quick analysis, purity checks",
                            advantage: "Faster than paper"
                        },
                        columnChromatography: {
                            phases: "Column packed with stationary phase, mobile solvent",
                            use: "Purify larger quantities",
                            scale: "Preparative scale"
                        },
                        gasChromatography: {
                            phases: "Gas (mobile), coated column (stationary)",
                            use: "Separate volatile compounds",
                            detection: "Very sensitive"
                        }
                    },
                    procedure: [
                        "Apply sample near bottom of paper/plate",
                        "Place in solvent (don't submerge sample spot)",
                        "Allow solvent to rise by capillary action",
                        "Remove and mark solvent front",
                        "Visualize spots (UV light, iodine, etc.)"
                    ]
                },
                {
                    technique: "Recrystallization",
                    purpose: "Purify solid compounds",
                    principle: "Solubility increases with temperature",
                    procedure: [
                        "1. Dissolve impure solid in minimum hot solvent",
                        "2. Filter hot to remove insoluble impurities",
                        "3. Cool solution slowly (pure crystals form)",
                        "4. Filter to collect crystals",
                        "5. Wash with cold solvent",
                        "6. Dry crystals"
                    ],
                    solventChoice: "Good solubility when hot, poor when cold",
                    applications: "Purify organic compounds, remove colored impurities"
                },
                {
                    technique: "Extraction",
                    purpose: "Transfer substance from one phase to another",
                    types: {
                        liquidLiquid: "Use separatory funnel to separate immiscible liquids",
                        solidLiquid: "Dissolve solid in liquid solvent"
                    },
                    procedure: [
                        "Add two immiscible solvents to separatory funnel",
                        "Add mixture to be separated",
                        "Stopper and shake (vent periodically)",
                        "Allow layers to separate",
                        "Drain lower layer",
                        "Collect upper layer"
                    ],
                    partitionCoefficient: "Ratio of concentrations in two phases",
                    application: "Isolate products, remove impurities"
                },
                {
                    technique: "Spectroscopy",
                    purpose: "Identify substances by interaction with electromagnetic radiation",
                    types: {
                        UVVis: "Electronic transitions; measure concentration",
                        IR: "Molecular vibrations; identify functional groups",
                        NMR: "Nuclear spin; determine molecular structure",
                        massSpec: "Molecular mass and fragmentation"
                    },
                    beersLaw: "A = εbc (absorbance = molar absorptivity × concentration × path length)",
                    use: "Quantitative and qualitative analysis"
                }
            ],

            preparingSolutions: {
                dilution: {
                    principle: "Moles of solute remain constant",
                    formula: "M₁V₁ = M₂V₂ or C₁V₁ = C₂V₂",
                    procedure: [
                        "Calculate volume of concentrated solution needed",
                        "Measure concentrated solution with pipette",
                        "Add to volumetric flask",
                        "Add water until near mark",
                        "Mix thoroughly",
                        "Add water to mark",
                        "Invert to mix completely"
                    ],
                    example: {
                        problem: "Prepare 500 mL of 0.1 M HCl from 6 M HCl",
                        calculation: "(6 M)(V₁) = (0.1 M)(500 mL) → V₁ = 8.3 mL",
                        procedure: "Add 8.3 mL of 6 M HCl to flask, dilute to 500 mL"
                    }
                },
                solidSolution: {
                    procedure: [
                        "Calculate mass of solute needed: mass = M × MW × V",
                        "Weigh solute accurately",
                        "Add to volumetric flask",
                        "Add solvent (about half volume)",
                        "Swirl to dissolve completely",
                        "Add solvent to mark",
                        "Mix thoroughly"
                    ],
                    example: {
                        problem: "Prepare 250 mL of 0.5 M NaCl (MW = 58.44 g/mol)",
                        calculation: "mass = 0.5 M × 58.44 g/mol × 0.250 L = 7.31 g",
                        procedure: "Dissolve 7.31 g NaCl in water, dilute to 250 mL"
                    }
                }
            },

            dataAnalysis: {
                graphing: [
                    "Independent variable on x-axis",
                    "Dependent variable on y-axis",
                    "Use appropriate scale (fill graph space)",
                    "Label axes with units",
                    "Title the graph",
                    "Plot points carefully",
                    "Draw best-fit line or curve"
                ],
                calculations: {
                    molarity: "M = moles/liters",
                    density: "d = mass/volume",
                    percentComposition: "% = (part/whole) × 100%",
                    yieldCalculations: "% yield = (actual/theoretical) × 100%"
                }
            },

            applications: [
                "Quality control in manufacturing",
                "Environmental testing and monitoring",
                "Pharmaceutical development and testing",
                "Forensic analysis",
                "Research and development",
                "Clinical chemistry (medical labs)",
                "Food and beverage industry"
            ],

            keyPoints: {
                safetyFirst: "Safety is always the top priority",
                readMeniscus: "Always read liquid levels at bottom of meniscus",
                calibrateEquipment: "Calibrate balances and glassware before use",
                properTechnique: "Good technique ensures accurate and reproducible results",
                recordData: "Record all observations and measurements immediately",
                cleanEquipment: "Clean all equipment thoroughly before and after use"
            }
        };
    }

    // CONTENT GENERATION METHODS (similar to biology workbook)

    generateChemistryContent(problem, content) {
        const contentSections = [];

        contentSections.push(this.generateOverviewSection(problem, content));

        // Generate specific content based on topic type
        if (content.fundamentalConcepts) {
            contentSections.push(this.generateFundamentalConceptsSection(content));
        }

        if (content.calculations || content.conversionTypes || content.stoichiometricCalculations) {
            contentSections.push(this.generateCalculationsSection(content));
        }

        if (content.examples) {
            contentSections.push(this.generateExamplesSection(content));
        }

        if (content.comparisons || content.comparison) {
            contentSections.push(this.generateComparisonsSection(content));
        }

        return contentSections;
    }

    generateOverviewSection(problem, content) {
        return {
            sectionType: 'overview',
            title: content.topic || problem.originalTopic,
            category: content.category,
            description: content.summary || `Overview of ${content.topic}`,
            keyPoints: this.extractKeyPoints(content),
            relevance: this.getTopicRelevance(problem.type)
        };
    }

    generateFundamentalConceptsSection(content) {
        return {
            sectionType: 'fundamental_concepts',
            title: 'Fundamental Concepts',
            concepts: content.fundamentalConcepts
        };
    }

    generateCalculationsSection(content) {
        return {
            sectionType: 'calculations',
            title: 'Calculations and Problem Solving',
            calculations: content.calculations || content.conversionTypes || content.stoichiometricCalculations
        };
    }

    generateExamplesSection(content) {
        return {
            sectionType: 'examples',
            title: 'Examples and Applications',
            examples: content.examples,
            applications: content.applications
        };
    }

    generateComparisonsSection(content) {
        const comparisons = content.comparisons || content.comparison;
        return {
            sectionType: 'comparisons',
            title: 'Comparisons and Contrasts',
            comparisons: comparisons
        };
    }

    // HELPER METHODS

    extractKeyPoints(content) {
        const keyPoints = [];

        if (content.fundamentalConcepts) {
            content.fundamentalConcepts.forEach(concept => {
                if (concept.name) keyPoints.push(concept.name);
            });
        }

        if (content.keyPoints) {
            Object.values(content.keyPoints).forEach(point => {
                keyPoints.push(point);
            });
        }

        return keyPoints.slice(0, 5);
    }

    getTopicRelevance(topicType) {
        const relevance = {
            stoichiometry: "Foundation for all quantitative chemistry",
            organic_chemistry: "Basis for biochemistry, medicine, and materials",
            redox: "Essential for energy production and many industrial processes",
            acid_base: "Critical for biology, medicine, and environmental science",
            equilibrium: "Understanding chemical reactions and industrial optimization",
            kinetics_thermodynamics: "Predicting and controlling chemical reactions",
            atomic_structure: "Foundation for understanding chemical behavior",
            chemical_bonding: "Explains molecular properties and reactivity",
            states_of_matter: "Understanding physical properties and phase changes",
            nuclear_chemistry: "Applications in medicine, energy, and dating",
            laboratory_chemistry: "Essential practical skills for all chemists"
        };

        return relevance[topicType] || "Important chemistry concept";
    }

    // DIAGRAM GENERATION (Placeholder)

    generateChemistryDiagramData() {
        if (!this.currentContent) return;

        const { type } = this.currentProblem;

        this.diagramData = {
            type: type,
            diagrams: this.getRelevantDiagrams(type),
            placeholder: true,
            note: "Diagram generation will be implemented with actual chemical diagrams"
        };
    }

    getRelevantDiagrams(topicType) {
        const diagramMap = {
            stoichiometry: ["mole_conversion", "limiting_reagent", "percent_yield"],
            organic_chemistry: ["hydrocarbons", "functional_groups", "isomers"],
            redox: ["oxidation_states", "electrochemical_cell", "half_reactions"],
            acid_base: ["pH_scale", "titration_curve", "buffer_system"],
            equilibrium: ["equilibrium_position", "le_chatelier", "ice_table"],
            kinetics_thermodynamics: ["energy_diagram", "maxwell_boltzmann", "gibbs_free_energy"],
            atomic_structure: ["atomic_model", "electron_configuration", "periodic_trends"],
            chemical_bonding: ["lewis_structures", "vsepr_shapes", "molecular_orbitals"],
            states_of_matter: ["phase_diagram", "heating_curve", "gas_laws"],
            nuclear_chemistry: ["radioactive_decay", "fission_fusion", "decay_series"],
            laboratory_chemistry: ["lab_equipment", "titration_setup", "distillation_apparatus"]
        };

        return diagramMap[topicType] || [];
    }

    // WORKBOOK GENERATION

    generateChemistryWorkbook() {
        if (!this.currentContent || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createChemistryProblemSection(),
            this.createContentOverviewSection(),
            this.createDetailedContentSection(),
            this.createComparisonsSection(),
            this.createExamplesApplicationsSection(),
            this.createMisconceptionsSection(),
            this.createPedagogicalNotesSection(),
            this.createDiagramReferencesSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            type: 'chemistry_workbook',
            version: '1.0',
            created: new Date().toISOString(),
            problem: this.currentProblem,
            sections: []
        };
    }

    createChemistryProblemSection() {
        if (!this.currentProblem) return null;

        return {
            title: 'Topic Information',
            type: 'problem',
            data: [
                ['Topic Type', this.currentProblem.type],
                ['Main Topic', this.currentProblem.originalTopic],
                ['Sub-Topic', this.currentProblem.subTopic || 'General'],
                ['Category', this.chemistryTopics[this.currentProblem.type]?.category || 'N/A']
            ]
        };
    }

    createContentOverviewSection() {
        if (!this.currentContent) return null;

        const overviewData = [
            ['Topic', this.currentContent.topic],
            ['Category', this.currentContent.category]
        ];

        if (this.currentContent.summary) {
            overviewData.push(['Summary', this.currentContent.summary]);
        }

        return {
            title: 'Content Overview',
            type: 'overview',
            data: overviewData
        };
    }

    createDetailedContentSection() {
        if (!this.currentContent) return null;

        const contentData = [];

        // Add fundamental concepts
        if (this.currentContent.fundamentalConcepts) {
            contentData.push(['FUNDAMENTAL CONCEPTS', '']);
            this.currentContent.fundamentalConcepts.forEach(concept => {
                contentData.push([concept.name || 'Concept', concept.definition || concept.description || '']);
            });
            contentData.push(['', '']);
        }

        // Add key definitions if available
        const lesson = this.lessons[this.currentProblem.type];
        if (lesson && lesson.keyDefinitions) {
            contentData.push(['KEY DEFINITIONS', '']);
            Object.entries(lesson.keyDefinitions).forEach(([term, definition]) => {
                contentData.push([term, definition]);
            });
            contentData.push(['', '']);
        }

        return contentData.length > 0 ? {
            title: 'Detailed Content',
            type: 'detailed_content',
            data: contentData
        } : null;
    }

    createComparisonsSection() {
        return this.generateComparisonsSection(this.currentContent);
    }

    createExamplesApplicationsSection() {
        return this.generateExamplesSection(this.currentContent);
    }

    createMisconceptionsSection() {
        if (!this.includeCommonMisconceptions) return null;

        const misconceptions = this.commonMisconceptions[this.currentProblem.type];
        if (!misconceptions) return null;

        const data = [['Common Misconception', 'Clarification']];

        Object.entries(misconceptions).forEach(([category, miscList]) => {
            data.push(['', '']);
            data.push([category.toUpperCase(), '']);
            miscList.forEach(misc => {
                data.push(['•', misc]);
            });
        });

        return {
            title: 'Common Misconceptions',
            type: 'misconceptions',
            data: data
        };
    }

    createPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        const lesson = this.lessons[this.currentProblem.type];
        if (!lesson) return null;

        const data = [
            ['Lesson Title', lesson.title],
            ['', ''],
            ['KEY CONCEPTS', '']
        ];

        if (lesson.concepts) {
            lesson.concepts.forEach(concept => {
                data.push(['•', concept]);
            });
        }

        if (lesson.theory) {
            data.push(['', '']);
            data.push(['THEORY', lesson.theory]);
        }

        return {
            title: 'Teaching Notes',
            type: 'pedagogical',
            data: data
        };
    }

    createDiagramReferencesSection() {
        if (!this.diagramData || !this.includeVisualizations) return null;

        const data = [
            ['Topic', this.diagramData.type],
            ['', ''],
            ['RELEVANT DIAGRAMS', '']
        ];

        if (this.diagramData.diagrams) {
            this.diagramData.diagrams.forEach(diagram => {
                data.push(['•', diagram]);
            });
        }

        return {
            title: 'Diagram References',
            type: 'diagrams',
            data: data
        };
    }

    // UTILITY METHODS (same structure as biology workbook)

    resetWorkbook() {
        this.currentProblem = null;
        this.currentContent = null;
        this.contentSteps = [];
        this.currentWorkbook = null;
        this.diagramData = null;
    }

    getWorkbookStatus() {
        return {
            hasProblem: !!this.currentProblem,
            hasContent: !!this.currentContent,
            hasWorkbook: !!this.currentWorkbook,
            hasDiagrams: !!this.diagramData,
            contentCompleteness: this.calculateContentCompleteness(),
            qualityMetrics: this.getContentQualityMetrics()
        };
    }

    calculateContentCompleteness() {
        if (!this.currentContent) return 0;

        let score = 0;
        const maxScore = 10;

        if (this.currentContent.topic) score += 1;
        if (this.currentContent.summary) score += 1;
        if (this.currentContent.examples) score += 1;
        if (this.currentContent.applications) score += 1;
        if (this.currentContent.fundamentalConcepts) score += 2;
        if (this.currentContent.keyPoints) score += 2;
        if (this.lessons[this.currentProblem?.type]) score += 2;

        return Math.round((score / maxScore) * 100);
    }

    getContentQualityMetrics() {
        return {
            completeness: this.calculateContentCompleteness(),
            hasExamples: !!this.currentContent?.examples,
            hasComparisons: !!(this.currentContent?.comparisons || this.currentContent?.comparison),
            hasApplications: !!this.currentContent?.applications,
            detailLevel: this.explanationLevel,
            includesVisualizations: this.includeVisualizations,
            includesMisconceptions: this.includeCommonMisconceptions
        };
    }

    getAvailableTopics() {
        return Object.entries(this.chemistryTopics).map(([key, topic]) => ({
            id:key,
            name: topic.name,
            category: topic.category,
            description: topic.description
        }));
    }

    getTopicDetails(topicId) {
        const topic = this.chemistryTopics[topicId];
        if (!topic) return null;

        return {
            id: topicId,
            name: topic.name,
            category: topic.category,
            description: topic.description,
            lesson: this.lessons[topicId],
            prerequisites: this.identifyPrerequisites(topicId),
            learningObjectives: this.generateLearningObjectives(topicId),
            relatedTopics: this.suggestRelatedTopics(topicId)
        };
    }

    // ASSESSMENT AND LEARNING SUPPORT METHODS

    assessContentDifficulty() {
        if (!this.currentContent) return 'unknown';

        let difficultyScore = 0;

        const simpleTopics = ['states_of_matter', 'laboratory_chemistry'];
        if (simpleTopics.includes(this.currentProblem.type)) {
            difficultyScore += 1;
        }

        const intermediateTopics = ['stoichiometry', 'acid_base', 'chemical_bonding', 'atomic_structure'];
        if (intermediateTopics.includes(this.currentProblem.type)) {
            difficultyScore += 2;
        }

        const complexTopics = ['organic_chemistry', 'redox', 'equilibrium', 'kinetics_thermodynamics', 'nuclear_chemistry'];
        if (complexTopics.includes(this.currentProblem.type)) {
            difficultyScore += 3;
        }

        if (this.explanationLevel === 'detailed') difficultyScore += 1;
        if (this.explanationLevel === 'basic') difficultyScore -= 1;

        if (difficultyScore <= 2) return 'beginner';
        if (difficultyScore <= 4) return 'intermediate';
        return 'advanced';
    }

    generateLearningObjectives(topicId) {
        const objectivesDatabase = {
            stoichiometry: [
                "Convert between mass, moles, and number of particles",
                "Use balanced equations to calculate stoichiometric relationships",
                "Identify limiting reagents and calculate theoretical yield",
                "Calculate percent yield from experimental data"
            ],
            organic_chemistry: [
                "Identify and name common functional groups",
                "Distinguish between alkanes, alkenes, and alkynes",
                "Recognize different types of isomers",
                "Apply IUPAC nomenclature rules to organic compounds"
            ],
            redox: [
                "Assign oxidation numbers to atoms in compounds",
                "Identify oxidation and reduction in reactions",
                "Balance redox equations using half-reaction method",
                "Describe the operation of electrochemical cells"
            ],
            acid_base: [
                "Define acids and bases using different theories",
                "Calculate pH and pOH from concentration",
                "Distinguish between strong and weak acids/bases",
                "Perform titration calculations",
                "Explain buffer action"
            ],
            equilibrium: [
                "Write equilibrium expressions from balanced equations",
                "Calculate equilibrium constants and concentrations",
                "Apply Le Chatelier's principle to predict shifts",
                "Use reaction quotient Q to predict direction"
            ],
            kinetics_thermodynamics: [
                "Explain factors affecting reaction rates",
                "Interpret energy diagrams for reactions",
                "Calculate enthalpy changes using Hess's Law",
                "Use Gibbs free energy to predict spontaneity",
                "Distinguish between kinetics and thermodynamics"
            ],
            atomic_structure: [
                "Describe the modern atomic model",
                "Write electron configurations for elements",
                "Explain periodic trends in atomic properties",
                "Use quantum numbers to describe electrons"
            ],
            chemical_bonding: [
                "Draw Lewis structures for molecules",
                "Predict molecular geometry using VSEPR theory",
                "Determine molecular polarity",
                "Identify types of intermolecular forces",
                "Explain relationship between bonding and properties"
            ],
            states_of_matter: [
                "Describe properties of solids, liquids, and gases",
                "Explain phase changes in terms of energy",
                "Apply gas laws to solve problems",
                "Interpret heating and cooling curves"
            ],
            nuclear_chemistry: [
                "Write balanced nuclear equations",
                "Identify types of radioactive decay",
                "Calculate amounts remaining using half-life",
                "Distinguish between fission and fusion",
                "Describe applications of radioisotopes"
            ],
            laboratory_chemistry: [
                "Follow proper safety procedures in the lab",
                "Use laboratory equipment correctly",
                "Perform accurate measurements with appropriate precision",
                "Execute common laboratory techniques",
                "Analyze and interpret experimental data"
            ]
        };

        return objectivesDatabase[topicId] || [
            "Understand the key concepts of this topic",
            "Apply knowledge to solve problems",
            "Make connections to other chemistry topics"
        ];
    }

    identifyPrerequisites(topicId) {
        const prerequisitesDatabase = {
            stoichiometry: [
                "Understanding of atoms, molecules, and molar mass",
                "Ability to balance chemical equations",
                "Basic algebra skills"
            ],
            organic_chemistry: [
                "Knowledge of chemical bonding",
                "Understanding of Lewis structures",
                "Familiarity with electronegativity"
            ],
            redox: [
                "Understanding of oxidation numbers",
                "Knowledge of ionic and molecular compounds",
                "Ability to balance chemical equations"
            ],
            acid_base: [
                "Understanding of ions and ionic compounds",
                "Knowledge of chemical equations",
                "Logarithm calculations (for pH)"
            ],
            equilibrium: [
                "Understanding of reversible reactions",
                "Knowledge of concentration units",
                "Basic algebra skills"
            ],
            kinetics_thermodynamics: [
                "Understanding of chemical reactions",
                "Knowledge of energy concepts",
                "Familiarity with graphing and mathematical relationships"
            ],
            atomic_structure: [
                "Basic understanding of atoms",
                "Knowledge of subatomic particles",
                "Introduction to periodic table"
            ],
            chemical_bonding: [
                "Atomic structure and electron configuration",
                "Electronegativity concept",
                "Understanding of atoms and molecules"
            ],
            states_of_matter: [
                "Understanding of particles and temperature",
                "Basic knowledge of phases",
                "Unit conversions"
            ],
            nuclear_chemistry: [
                "Atomic structure (protons, neutrons)",
                "Isotope notation",
                "Basic understanding of radioactivity"
            ],
            laboratory_chemistry: [
                "Basic chemistry knowledge",
                "Safety awareness",
                "Measurement and unit understanding"
            ]
        };

        return prerequisitesDatabase[topicId] || ["General chemistry background"];
    }

    generateStudyTips(topicId) {
        const studyTipsDatabase = {
            stoichiometry: [
                "Master mole conversions first - they're the foundation",
                "Practice dimensional analysis (factor-label method)",
                "Always start with a balanced equation",
                "Draw flow charts for conversion pathways",
                "Work many practice problems - pattern recognition is key"
            ],
            organic_chemistry: [
                "Build molecular models to visualize 3D structures",
                "Create flashcards for functional groups",
                "Practice drawing structures repeatedly",
                "Learn nomenclature rules systematically",
                "Group similar compounds together when studying"
            ],
            redox: [
                "Memorize oxidation number rules",
                "Practice identifying oxidation and reduction separately",
                "Use OIL RIG mnemonic (Oxidation Is Loss, Reduction Is Gain)",
                "Draw half-reactions to visualize electron transfer",
                "Check your work by balancing both atoms and charge"
            ],
            acid_base: [
                "Memorize the six strong acids",
                "Practice pH calculations until automatic",
                "Understand the logarithmic nature of pH scale",
                "Draw pictures of molecular-level processes",
                "Work through titration problems step-by-step"
            ],
            equilibrium: [
                "Master ICE tables (Initial, Change, Equilibrium)",
                "Understand Q vs K conceptually before calculating",
                "Practice Le Chatelier's principle with diverse examples",
                "Remember: only temperature changes K",
                "Visualize equilibrium as dynamic, not static"
            ],
            kinetics_thermodynamics: [
                "Don't confuse kinetics (how fast) with thermodynamics (how far)",
                "Draw and label energy diagrams",
                "Memorize signs: ΔH < 0 exothermic, ΔH > 0 endothermic",
                "Practice Gibbs free energy problems with all sign combinations",
                "Understand conceptually before memorizing formulas"
            ],
            atomic_structure: [
                "Use the periodic table as your guide",
                "Practice electron configurations daily",
                "Draw orbital diagrams to visualize electron placement",
                "Learn one periodic trend thoroughly before moving to next",
                "Understand exceptions (Cr, Cu) and why they occur"
            ],
            chemical_bonding: [
                "Draw Lewis structures for every example you see",
                "Build molecular models or use online 3D viewers",
                "Practice VSEPR systematically by number of electron groups",
                "Create a chart comparing IMF types",
                "Relate structure to properties constantly"
            ],
            states_of_matter: [
                "Visualize particles at molecular level",
                "Always convert temperature to Kelvin for gas laws",
                "Create a phase change diagram and annotate it",
                "Practice one gas law at a time before combining",
                "Understand KMT assumptions and when they break down"
            ],
            nuclear_chemistry: [
                "Practice balancing nuclear equations daily",
                "Make flashcards for decay types and particles",
                "Draw decay series diagrams",
                "Set up half-life problems carefully",
                "Understand applications to see relevance"
            ],
            laboratory_chemistry: [
                "Always review safety procedures before lab",
                "Practice reading meniscus at eye level",
                "Learn to estimate before measuring",
                "Keep a detailed lab notebook",
                "Ask questions when unsure - safety first!"
            ]
        };

        return studyTipsDatabase[topicId] || [
            "Review material regularly",
            "Practice problems actively",
            "Relate concepts to real-world examples",
            "Create visual aids and diagrams"
        ];
    }

    generateAssessmentQuestions(topicId) {
        const questionsDatabase = {
            stoichiometry: [
                {
                    question: "How many grams of CO₂ are produced when 10.0 g of C₃H₈ burns completely?",
                    type: "calculation",
                    difficulty: "medium"
                },
                {
                    question: "If you have 5 mol of H₂ and 2 mol of O₂, which is the limiting reagent for 2H₂ + O₂ → 2H₂O?",
                    type: "limiting_reagent",
                    difficulty: "medium"
                },
                {
                    question: "Explain why coefficients in balanced equations represent mole ratios, not mass ratios.",
                    type: "conceptual",
                    difficulty: "easy"
                }
            ],
            acid_base: [
                {
                    question: "Calculate the pH of a 0.01 M HCl solution.",
                    type: "calculation",
                    difficulty: "easy"
                },
                {
                    question: "Explain why a buffer resists pH change when small amounts of acid or base are added.",
                    type: "explanation",
                    difficulty: "medium"
                },
                {
                    question: "How does temperature affect the pH of pure water? Does it remain neutral?",
                    type: "analysis",
                    difficulty: "hard"
                }
            ],
            equilibrium: [
                {
                    question: "For the reaction N₂ + 3H₂ ⇌ 2NH₃, what happens to equilibrium if N₂ is added?",
                    type: "prediction",
                    difficulty: "easy"
                },
                {
                    question: "If K = 100, does the reaction favor products or reactants?",
                    type: "interpretation",
                    difficulty: "easy"
                },
                {
                    question: "Why does adding a catalyst not shift equilibrium position?",
                    type: "explanation",
                    difficulty: "medium"
                }
            ]
        };

        return questionsDatabase[topicId] || [
            {
                question: "What are the main concepts of this topic?",
                type: "recall",
                difficulty: "easy"
            }
        ];
    }

    suggestRelatedTopics(topicId) {
        const relatedTopicsMap = {
            stoichiometry: ['chemical_bonding', 'states_of_matter', 'equilibrium'],
            organic_chemistry: ['chemical_bonding', 'isomerism', 'reaction_mechanisms'],
            redox: ['equilibrium', 'kinetics_thermodynamics', 'electrochemistry'],
            acid_base: ['equilibrium', 'stoichiometry', 'laboratory_chemistry'],
            equilibrium: ['kinetics_thermodynamics', 'acid_base', 'redox'],
            kinetics_thermodynamics: ['equilibrium', 'atomic_structure', 'states_of_matter'],
            atomic_structure: ['chemical_bonding', 'periodic_trends'],
            chemical_bonding: ['atomic_structure', 'organic_chemistry', 'states_of_matter'],
            states_of_matter: ['kinetics_thermodynamics', 'chemical_bonding'],
            nuclear_chemistry: ['atomic_structure', 'radioactivity'],
            laboratory_chemistry: ['stoichiometry', 'acid_base', 'all_practical_topics']
        };

        const relatedTypes = relatedTopicsMap[topicId] || [];
        
        return relatedTypes.map(type => ({
            type: type,
            name: this.chemistryTopics[type]?.name,
            description: this.chemistryTopics[type]?.description
        })).filter(item => item.name); // Filter out undefined topics
    }

    generateGlossary() {
        if (!this.currentContent) return {};

        const glossary = {};
        const lesson = this.lessons[this.currentProblem?.type];

        if (lesson && lesson.keyDefinitions) {
            Object.entries(lesson.keyDefinitions).forEach(([term, definition]) => {
                glossary[term] = definition;
            });
        }

        return glossary;
    }

    generateProcessTimeline(processName) {
        const timelines = {
            'Titration': [
                { step: 1, action: 'Fill burette with titrant', duration: '1-2 min' },
                { step: 2, action: 'Measure analyte into flask', duration: '1 min' },
                { step: 3, action: 'Add indicator', duration: '30 sec' },
                { step: 4, action: 'Titrate to endpoint', duration: '5-10 min' },
                { step: 5, action: 'Record volume and calculate', duration: '2-3 min' }
            ],
            'Recrystallization': [
                { step: 1, action: 'Dissolve in hot solvent', duration: '10-15 min' },
                { step: 2, action: 'Hot filtration', duration: '5 min' },
                { step: 3, action: 'Cool slowly', duration: '30-60 min' },
                { step: 4, action: 'Filter crystals', duration: '5 min' },
                { step: 5, action: 'Dry', duration: 'Hours to overnight' }
            ],
            'Distillation': [
                { step: 1, action: 'Setup apparatus', duration: '10 min' },
                { step: 2, action: 'Heat mixture', duration: 'Variable' },
                { step: 3, action: 'Collect distillate', duration: '20-60 min' },
                { step: 4, action: 'Monitor temperature', duration: 'Throughout' }
            ]
        };

        return timelines[processName] || [];
    }

    generateContentHierarchy() {
        if (!this.currentContent) return null;

        const hierarchy = {
            root: this.currentContent.topic,
            children: []
        };

        if (this.currentContent.fundamentalConcepts) {
            hierarchy.children.push({
                name: 'Fundamental Concepts',
                type: 'section',
                count: this.currentContent.fundamentalConcepts.length
            });
        }

        if (this.currentContent.applications) {
            hierarchy.children.push({
                name: 'Applications',
                type: 'section',
                count: this.currentContent.applications.length
            });
        }

        const lesson = this.lessons[this.currentProblem?.type];
        if (lesson) {
            if (lesson.keyDefinitions) {
                hierarchy.children.push({
                    name: 'Key Definitions',
                    type: 'section',
                    count: Object.keys(lesson.keyDefinitions).length
                });
            }
        }

        return hierarchy;
    }

    // FORMATTING AND EXPORT

    formatContentForExport(format = 'json') {
        if (!this.currentContent) return null;

        switch (format) {
            case 'json':
                return JSON.stringify(this.currentContent, null, 2);
            
            case 'markdown':
                return this.convertToMarkdown(this.currentContent);
            
            case 'html':
                return this.convertToHTML(this.currentContent);
            
            default:
                return this.currentContent;
        }
    }

convertToMarkdown(content) {
        let markdown = `# ${content.topic}\n\n`;

        if (content.summary) {
            markdown += `${content.summary}\n\n`;
        }

        if (content.fundamentalConcepts) {
            markdown += `## Fundamental Concepts\n\n`;
            content.fundamentalConcepts.forEach(concept => {
                markdown += `### ${concept.name}\n`;
                if (concept.definition) markdown += `${concept.definition}\n\n`;
            });
        }

        return markdown;
    }

    convertToHTML(content) {
        let html = `<div class="chemistry-content">\n`;
        html += `  <h1>${content.topic}</h1>\n`;

        if (content.summary) {
            html += `  <p class="summary">${content.summary}</p>\n`;
        }

        html += `</div>`;
        return html;
    }

    // SEARCH AND FILTER

    searchContent(query) {
        if (!this.currentContent) return null;

        const results = {
            query: query,
            matches: []
        };

        const searchableContent = JSON.stringify(this.currentContent).toLowerCase();
        const queryLower = query.toLowerCase();

        if (searchableContent.includes(queryLower)) {
            results.matches.push({
                type: 'content',
                content: this.currentContent.topic
            });
        }

        return results;
    }

    filterContentByCategory(category) {
        if (!this.currentContent) return null;

        const filtered = {
            category: category,
            items: []
        };

        if (this.currentContent.category === category) {
            filtered.items.push(this.currentContent);
        }

        return filtered;
    }

    generateContentSummary() {
        if (!this.currentContent) return null;

        const summary = {
            topic: this.currentContent.topic,
            category: this.currentContent.category,
            hasExamples: !!this.currentContent.examples,
            hasApplications: !!this.currentContent.applications,
            keyPoints: this.extractKeyPoints(this.currentContent)
        };

        return summary;
    }

    // VALIDATION

    validateChemistryContent(content) {
        const validationResults = {
            isValid: true,
            warnings: [],
            suggestions: []
        };

        if (!content.topic) {
            validationResults.warnings.push("Missing topic title");
            validationResults.isValid = false;
        }

        if (!content.category) {
            validationResults.warnings.push("Missing category classification");
        }

        if (!content.summary && !content.fundamentalConcepts) {
            validationResults.suggestions.push("Consider adding summary or fundamental concepts");
        }

        return validationResults;
    }
}

// Export the class
export default EnhancedChemistryWorkbook;
                    
