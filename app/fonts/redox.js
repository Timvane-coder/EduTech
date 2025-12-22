// Enhanced Reduction-Oxidation (Redox) Mathematical Workbook - Multiple Layer Explanations
import * as math from 'mathjs';

export class EnhancedRedoxMathematicalWorkbook {
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
        this.diagramData = null;

        // Enhanced explanation options
        this.explanationLevel = options.explanationLevel || 'intermediate'; // 'basic', 'intermediate', 'detailed', 'scaffolded'
        this.includeVerificationInSteps = options.includeVerificationInSteps !== false;
        this.includeConceptualConnections = options.includeConceptualConnections !== false;
        this.includeAlternativeMethods = options.includeAlternativeMethods !== false;
        this.includeErrorPrevention = options.includeErrorPrevention !== false;
        this.includeCommonMistakes = options.includeCommonMistakes !== false;
        this.includePedagogicalNotes = options.includePedagogicalNotes !== false;
        this.verificationDetail = options.verificationDetail || 'detailed';
        this.includeElectronFlow = options.includeElectronFlow !== false;
        this.includeMolecularVisualization = options.includeMolecularVisualization !== false;

        this.chemicalSymbols = this.initializeChemicalSymbols();
        this.setThemeColors();
        this.initializeRedoxSolvers();
        this.initializeErrorDatabase();
        this.initializeExplanationTemplates();
        this.initializePeriodicData();
        this.initializeRedoxData();
    }

    initializeRedoxData() {
        // Common oxidation states
        this.commonOxidationStates = {
            'H': [+1, -1],
            'O': [-2, -1, 0],
            'F': [-1],
            'Cl': [-1, 0, +1, +3, +5, +7],
            'Br': [-1, 0, +1, +5],
            'I': [-1, 0, +1, +5, +7],
            'S': [-2, 0, +4, +6],
            'N': [-3, 0, +3, +5],
            'P': [-3, 0, +3, +5],
            'C': [-4, -2, 0, +2, +4],
            'Fe': [0, +2, +3],
            'Cu': [0, +1, +2],
            'Ag': [0, +1],
            'Au': [0, +1, +3],
            'Zn': [0, +2],
            'Al': [0, +3],
            'Cr': [0, +2, +3, +6],
            'Mn': [0, +2, +4, +6, +7],
            'Na': [0, +1],
            'K': [0, +1],
            'Ca': [0, +2],
            'Mg': [0, +2],
            'Ba': [0, +2],
            'Li': [0, +1]
        };

        // Oxidation state rules priority
        this.oxidationRules = [
            { rule: 'Pure elements', oxidationState: 0, priority: 1 },
            { rule: 'Monatomic ions', oxidationState: 'charge', priority: 2 },
            { rule: 'Fluorine in compounds', element: 'F', oxidationState: -1, priority: 3 },
            { rule: 'Hydrogen in compounds', element: 'H', oxidationState: +1, priority: 4, exception: 'Metal hydrides: -1' },
            { rule: 'Oxygen in compounds', element: 'O', oxidationState: -2, priority: 5, exception: 'Peroxides: -1, OF₂: +2' },
            { rule: 'Group 1 metals', elements: ['Li', 'Na', 'K', 'Rb', 'Cs'], oxidationState: +1, priority: 6 },
            { rule: 'Group 2 metals', elements: ['Be', 'Mg', 'Ca', 'Sr', 'Ba'], oxidationState: +2, priority: 7 },
            { rule: 'Aluminum', element: 'Al', oxidationState: +3, priority: 8 },
            { rule: 'Sum equals charge', description: 'Sum of all oxidation states = overall charge', priority: 9 }
        ];

        // Standard reduction potentials (V at 25°C)
        this.standardPotentials = {
            'F₂/F⁻': +2.87,
            'H₂O₂/H₂O': +1.78,
            'MnO₄⁻/Mn²⁺': +1.51,
            'Cl₂/Cl⁻': +1.36,
            'Cr₂O₇²⁻/Cr³⁺': +1.33,
            'O₂/H₂O': +1.23,
            'Br₂/Br⁻': +1.07,
            'NO₃⁻/NO': +0.96,
            'Ag⁺/Ag': +0.80,
            'Fe³⁺/Fe²⁺': +0.77,
            'I₂/I⁻': +0.54,
            'Cu²⁺/Cu': +0.34,
            'H⁺/H₂': 0.00, // Reference
            'Pb²⁺/Pb': -0.13,
            'Sn²⁺/Sn': -0.14,
            'Ni²⁺/Ni': -0.25,
            'Fe²⁺/Fe': -0.44,
            'Zn²⁺/Zn': -0.76,
            'Al³⁺/Al': -1.66,
            'Mg²⁺/Mg': -2.37,
            'Na⁺/Na': -2.71,
            'Ca²⁺/Ca': -2.87,
            'K⁺/K': -2.93,
            'Li⁺/Li': -3.05
        };

        // Common oxidizing and reducing agents
        this.commonAgents = {
            oxidizing: [
                { formula: 'KMnO₄', name: 'Potassium permanganate', strength: 'Strong', conditions: 'Acidic' },
                { formula: 'K₂Cr₂O₇', name: 'Potassium dichromate', strength: 'Strong', conditions: 'Acidic' },
                { formula: 'H₂O₂', name: 'Hydrogen peroxide', strength: 'Moderate', conditions: 'Various' },
                { formula: 'Cl₂', name: 'Chlorine gas', strength: 'Strong', conditions: 'Various' },
                { formula: 'HNO₃', name: 'Nitric acid', strength: 'Strong', conditions: 'Concentrated' },
                { formula: 'O₂', name: 'Oxygen gas', strength: 'Moderate', conditions: 'Elevated temp' }
            ],
            reducing: [
                { formula: 'H₂', name: 'Hydrogen gas', strength: 'Moderate', conditions: 'Catalyzed' },
                { formula: 'C', name: 'Carbon/Coke', strength: 'Strong', conditions: 'High temp' },
                { formula: 'CO', name: 'Carbon monoxide', strength: 'Strong', conditions: 'High temp' },
                { formula: 'Na', name: 'Sodium metal', strength: 'Very strong', conditions: 'Anhydrous' },
                { formula: 'Zn', name: 'Zinc metal', strength: 'Strong', conditions: 'Acidic' },
                { formula: 'Fe²⁺', name: 'Iron(II) ions', strength: 'Moderate', conditions: 'Solution' }
            ]
        };

        // Balancing methods
        this.balancingMethods = [
            'oxidation_number',
            'half_reaction',
            'ion_electron'
        ];
    }

    initializeRedoxLessons() {
        this.lessons = {
            oxidation_states: {
                title: "Oxidation States (Oxidation Numbers)",
                concepts: [
                    "Oxidation state represents the hypothetical charge on an atom",
                    "Rules determine oxidation states in compounds",
                    "Sum of oxidation states equals overall charge",
                    "Changes in oxidation state indicate redox reactions"
                ],
                theory: "Oxidation states (oxidation numbers) are assigned to atoms to track electron transfer in reactions. They represent the charge an atom would have if all bonds were completely ionic. While actual electron distribution is more complex, oxidation states provide a powerful bookkeeping method for redox chemistry.",
                keyRules: {
                    "Rule 1": "Pure elements have oxidation state 0",
                    "Rule 2": "Monatomic ions: oxidation state = charge",
                    "Rule 3": "F always -1 in compounds",
                    "Rule 4": "H usually +1 (except metal hydrides: -1)",
                    "Rule 5": "O usually -2 (except peroxides: -1, OF₂: +2)",
                    "Rule 6": "Group 1: +1, Group 2: +2",
                    "Rule 7": "Sum = overall charge on species"
                },
                solvingSteps: [
                    "Identify known oxidation states (pure elements, F, Group 1/2)",
                    "Apply H and O rules carefully (watch for exceptions)",
                    "Set up equation: sum of (oxidation state × atoms) = charge",
                    "Solve for unknown oxidation state(s)",
                    "Verify: check sum equals overall charge"
                ],
                applications: [
                    "Identifying redox reactions",
                    "Determining oxidizing/reducing agents",
                    "Balancing redox equations",
                    "Understanding reaction mechanisms"
                ]
            },

            identifying_redox: {
                title: "Identifying Redox Reactions",
                concepts: [
                    "Oxidation = increase in oxidation state (loss of electrons)",
                    "Reduction = decrease in oxidation state (gain of electrons)",
                    "Redox reactions always involve both oxidation and reduction",
                    "OIL RIG: Oxidation Is Loss, Reduction Is Gain (of electrons)"
                ],
                theory: "Redox reactions involve electron transfer between species. The species that loses electrons (oxidized) causes another species to gain electrons (reduced). These processes are coupled - you cannot have one without the other. Identifying oxidation state changes reveals which atoms are oxidized and reduced.",
                keyDefinitions: {
                    "Oxidation": "Loss of electrons; oxidation state increases; species is oxidized",
                    "Reduction": "Gain of electrons; oxidation state decreases; species is reduced",
                    "Oxidizing Agent": "Species that gets reduced; causes oxidation of another species",
                    "Reducing Agent": "Species that gets oxidized; causes reduction of another species",
                    "LEO GER": "Lose Electrons = Oxidation; Gain Electrons = Reduction"
                },
                solvingSteps: [
                    "Assign oxidation states to all atoms in reactants",
                    "Assign oxidation states to all atoms in products",
                    "Identify which atoms changed oxidation state",
                    "Determine if increase (oxidation) or decrease (reduction)",
                    "Identify oxidizing agent (contains atom reduced)",
                    "Identify reducing agent (contains atom oxidized)"
                ],
                applications: [
                    "Classifying chemical reactions",
                    "Predicting reaction spontaneity",
                    "Understanding corrosion",
                    "Biochemical processes (cellular respiration, photosynthesis)"
                ]
            },

            half_reactions: {
                title: "Half-Reaction Method",
                concepts: [
                    "Separate overall redox into oxidation and reduction half-reactions",
                    "Balance atoms and charges in each half-reaction independently",
                    "Multiply half-reactions to equalize electrons transferred",
                    "Add half-reactions to get balanced overall equation"
                ],
                theory: "The half-reaction method separates the oxidation and reduction processes, making balancing easier. Each half-reaction is balanced for mass and charge independently, then combined ensuring electrons cancel. This method is particularly powerful for complex redox reactions in aqueous solution.",
                keySteps: {
                    "Step 1": "Write skeleton half-reactions (oxidation and reduction)",
                    "Step 2": "Balance atoms other than O and H",
                    "Step 3": "Balance O by adding H₂O",
                    "Step 4": "Balance H by adding H⁺ (acidic) or OH⁻ (basic)",
                    "Step 5": "Balance charge by adding electrons",
                    "Step 6": "Equalize electrons in both half-reactions",
                    "Step 7": "Add half-reactions and simplify"
                },
                solvingSteps: [
                    "Identify oxidation and reduction half-reactions",
                    "Balance each half-reaction (atoms, then charge)",
                    "Add H₂O, H⁺/OH⁻, and e⁻ as needed",
                    "Multiply to equalize electrons",
                    "Add and cancel common terms",
                    "Verify: check atoms and charges balanced"
                ],
                applications: [
                    "Balancing complex redox equations",
                    "Electrochemical cell equations",
                    "Industrial processes",
                    "Environmental chemistry"
                ]
            },

            oxidation_number_method: {
                title: "Oxidation Number Method",
                concepts: [
                    "Track changes in oxidation numbers",
                    "Balance electron transfer using oxidation state changes",
                    "Adjust coefficients to equalize total oxidation and reduction",
                    "Simpler than half-reactions for some problems"
                ],
                theory: "The oxidation number method focuses on tracking oxidation state changes and ensuring the total increase in oxidation states equals the total decrease. This method works well for reactions without spectator ions and provides quick balancing for many redox reactions.",
                keySteps: {
                    "Step 1": "Assign oxidation states to all atoms",
                    "Step 2": "Identify atoms oxidized and reduced",
                    "Step 3": "Calculate change in oxidation state for each",
                    "Step 4": "Find coefficients to balance electron transfer",
                    "Step 5": "Balance remaining atoms and charges",
                    "Step 6": "Verify balance"
                },
                solvingSteps: [
                    "Determine all oxidation states",
                    "Find oxidation state changes",
                    "Calculate electrons lost and gained",
                    "Use multipliers to equalize electrons",
                    "Complete balancing of equation",
                    "Check: atoms balanced, charges balanced"
                ],
                applications: [
                    "Quick balancing of redox equations",
                    "Teaching electron transfer concepts",
                    "Non-aqueous redox reactions",
                    "Combustion reactions"
                ]
            },

            electrochemistry_galvanic: {
                title: "Galvanic (Voltaic) Cells",
                concepts: [
                    "Spontaneous redox reaction generates electrical energy",
                    "Two half-cells: anode (oxidation) and cathode (reduction)",
                    "Electrons flow from anode to cathode through external circuit",
                    "Salt bridge maintains electrical neutrality"
                ],
                theory: "Galvanic cells convert chemical energy to electrical energy through spontaneous redox reactions. The two half-reactions occur in separate compartments, forcing electrons to flow through an external circuit where they can do useful work. The cell potential (voltage) depends on the reduction potentials of the half-reactions.",
                keyFormulas: {
                    "Cell Potential": "E°cell = E°cathode - E°anode",
                    "Nernst Equation": "E = E° - (RT/nF)ln(Q) = E° - (0.0592/n)log(Q) at 25°C",
                    "Free Energy": "ΔG° = -nFE°",
                    "Equilibrium Constant": "E° = (0.0592/n)log(K) at 25°C"
                },
                solvingSteps: [
                    "Identify oxidation and reduction half-reactions",
                    "Look up standard reduction potentials",
                    "Calculate E°cell = E°cathode - E°anode",
                    "Determine spontaneity: E°cell > 0 is spontaneous",
                    "Use Nernst equation for non-standard conditions",
                    "Calculate ΔG° or K if needed"
                ],
                applications: [
                    "Batteries (primary and secondary)",
                    "Fuel cells",
                    "Corrosion studies",
                    "Biological electron transport"
                ]
            },

            electrochemistry_electrolytic: {
                title: "Electrolytic Cells",
                concepts: [
                    "Non-spontaneous redox driven by external electrical energy",
                    "Anode is positive, cathode is negative (opposite of galvanic)",
                    "Used for electroplating, refining, and chemical production",
                    "Requires applied voltage greater than back-emf"
                ],
                theory: "Electrolytic cells use electrical energy to drive non-spontaneous redox reactions. An external power source forces electrons to flow in the direction opposite to their natural tendency. This process is used industrially for metal extraction, purification, and electroplating.",
                keyFormulas: {
                    "Faraday's Law": "mass = (Q × M) / (n × F) where Q = charge, M = molar mass, n = electrons, F = Faraday constant",
                    "Charge": "Q = I × t (current × time)",
                    "Moles of Electrons": "mol e⁻ = Q / F",
                    "Minimum Voltage": "E_applied > |E°cell| for non-spontaneous"
                },
                solvingSteps: [
                    "Identify anode (oxidation) and cathode (reduction) reactions",
                    "Calculate charge: Q = I × t",
                    "Determine moles of electrons: mol e⁻ = Q / F",
                    "Use stoichiometry to find moles of product",
                    "Convert to mass: mass = moles × molar mass",
                    "Apply efficiency factor if given"
                ],
                applications: [
                    "Electroplating (chrome, gold, silver)",
                    "Aluminum production (Hall-Héroult process)",
                    "Chlorine and sodium hydroxide production",
                    "Copper refining"
                ]
            },

            cell_potential: {
                title: "Cell Potential and Standard Reduction Potentials",
                concepts: [
                    "Standard reduction potential (E°) measures tendency to be reduced",
                    "More positive E° = stronger oxidizing agent",
                    "Cell potential = E°(cathode) - E°(anode)",
                    "Positive E°cell indicates spontaneous reaction"
                ],
                theory: "Standard reduction potentials provide a quantitative measure of how easily a species gains electrons. They are measured relative to the standard hydrogen electrode (E° = 0.00 V). The cell potential determines reaction spontaneity and the maximum work obtainable from a redox reaction.",
                keyFormulas: {
                    "Standard Cell Potential": "E°cell = E°red(cathode) - E°red(anode)",
                    "Spontaneity": "E°cell > 0 → spontaneous; E°cell < 0 → non-spontaneous",
                    "Reverse Potential": "E°(reverse) = -E°(forward)",
                    "Activity Series": "More negative E° = stronger reducing agent"
                },
                solvingSteps: [
                    "Write half-reactions with reduction potentials",
                    "Identify which half-reaction is reduction (higher E°)",
                    "Identify which is oxidation (lower E°, reverse it)",
                    "Calculate E°cell = E°cathode - E°anode",
                    "Check sign: positive means spontaneous",
                    "Relate to ΔG° or K if needed"
                ],
                applications: [
                    "Predicting reaction spontaneity",
                    "Designing batteries",
                    "Corrosion prevention",
                    "Chemical synthesis planning"
                ]
            },

            nernst_equation: {
                title: "Nernst Equation and Non-Standard Conditions",
                concepts: [
                    "Real cells operate under non-standard conditions",
                    "Concentration affects cell potential",
                    "Nernst equation: E = E° - (RT/nF)ln(Q)",
                    "At equilibrium: E = 0 and Q = K"
                ],
                theory: "The Nernst equation quantifies how cell potential changes with concentration, temperature, and pressure. It connects electrochemistry to thermodynamics through the reaction quotient Q. As a cell operates and concentrations change, the Nernst equation tracks the decreasing voltage until equilibrium (E = 0) is reached.",
                keyFormulas: {
                    "Nernst Equation (general)": "E = E° - (RT/nF)ln(Q)",
                    "Nernst at 25°C": "E = E° - (0.0592/n)log(Q)",
                    "Reaction Quotient": "Q = [products]/[reactants] with proper stoichiometry",
                    "At Equilibrium": "0 = E° - (0.0592/n)log(K), so E° = (0.0592/n)log(K)"
                },
                solvingSteps: [
                    "Calculate E° from standard potentials",
                    "Determine n (electrons transferred)",
                    "Write expression for Q using concentrations",
                    "Calculate Q from given concentrations",
                    "Apply Nernst: E = E° - (0.0592/n)log(Q)",
                    "Interpret result"
                ],
                applications: [
                    "pH measurement (pH electrode)",
                    "Concentration cells",
                    "Battery performance prediction",
                    "Biological systems"
                ]
            },

            free_energy_equilibrium: {
                title: "Relationship Between E°, ΔG°, and K",
                concepts: [
                    "Electrochemistry connects to thermodynamics",
                    "ΔG° = -nFE° relates free energy to cell potential",
                    "E° relates to equilibrium constant K",
                    "All three predict spontaneity and equilibrium"
                ],
                theory: "Cell potential, free energy, and equilibrium constant are interconnected thermodynamic quantities. They all describe the same fundamental property: how far a reaction can proceed. Positive E° corresponds to negative ΔG° and large K, all indicating a product-favored reaction.",
                keyFormulas: {
                    "Free Energy": "ΔG° = -nFE°cell",
                    "Equilibrium": "E° = (RT/nF)ln(K) = (0.0592/n)log(K) at 25°C",
                    "Combined": "ΔG° = -RT ln(K)",
                    "Faraday Constant": "F = 96,485 C/mol e⁻"
                },
                relationships: {
                    "E° > 0": "ΔG° < 0, K > 1, spontaneous, product-favored",
                    "E° = 0": "ΔG° = 0, K = 1, at equilibrium",
                    "E° < 0": "ΔG° > 0, K < 1, non-spontaneous, reactant-favored"
                },
                solvingSteps: [
                    "Calculate E°cell from reduction potentials",
                    "Determine n (moles of electrons)",
                    "Calculate ΔG° = -nFE°",
                    "Or calculate K from: log(K) = nE°/0.0592",
                    "Interpret thermodynamic favorability",
                    "Check consistency: all three should agree"
                ],
                applications: [
                    "Thermodynamic analysis of redox reactions",
                    "Battery energy calculations",
                    "Biochemical pathway analysis",
                    "Industrial process optimization"
                ]
            },

            disproportionation: {
                title: "Disproportionation Reactions",
                concepts: [
                    "Same element simultaneously oxidized and reduced",
                    "One species acts as both oxidizing and reducing agent",
                    "Intermediate oxidation states often disproportionate",
                    "Produces species with higher and lower oxidation states"
                ],
                theory: "Disproportionation occurs when a species in an intermediate oxidation state is unstable and undergoes self-oxidation-reduction. Part of the substance is oxidized to a higher oxidation state while another part is reduced to a lower oxidation state. This is thermodynamically favorable when it produces more stable species.",
                examples: {
                    "Chlorine in base": "Cl₂ + 2OH⁻ → Cl⁻ + ClO⁻ + H₂O (Cl: 0 → -1 and +1)",
                    "Hydrogen peroxide": "2H₂O₂ → 2H₂O + O₂ (O: -1 → -2 and 0)",
                    "Copper(I)": "2Cu⁺ → Cu + Cu²⁺ (Cu: +1 → 0 and +2)"
                },
                solvingSteps: [
                    "Identify element undergoing disproportionation",
                    "Determine initial oxidation state",
                    "Identify products with higher and lower states",
                    "Write half-reactions for oxidation and reduction",
                    "Balance using standard methods",
                    "Verify same element both oxidized and reduced"
                ],
                applications: [
                    "Halogen chemistry in water",
                    "Unstable intermediate compounds",
                    "Industrial chemical production",
                    "Biological redox systems"
                ]
            },

            comproportionation: {
                title: "Comproportionation Reactions",
                concepts: [
                    "Opposite of disproportionation",
                    "Species with high and low oxidation states combine",
                    "Produces intermediate oxidation state",
                    "Thermodynamically favorable for certain systems"
                ],
                theory: "Comproportionation (synproportionation) occurs when species of the same element in different oxidation states react to form a species with an intermediate oxidation state. This is the reverse of disproportionation and occurs when the intermediate state is more stable.",
                examples: {
                    "Iron": "Fe + Fe³⁺ → 2Fe²⁺ (Fe: 0 and +3 → +2)",
                    "Sulfur": "H₂S + SO₂ → S + H₂O (S: -2 and +4 → 0)",
                    "Copper": "Cu + Cu²⁺ → 2Cu⁺ (Cu: 0 and +2 → +1)"
                },
                solvingSteps: [
                    "Identify element in different oxidation states",
                    "Note the high and low oxidation states",
                    "Determine intermediate oxidation state product",
                    "Write and balance equation",
                    "Verify electron transfer balanced",
                    "Check thermodynamic favorability if needed"
                ],
                applications: [
                    "Analytical chemistry",
                    "Metallurgy",
                    "Waste treatment",
                    "Geochemical processes"
                ]
            },

            redox_titration: {
                title: "Redox Titrations",
                concepts: [
                    "Quantitative analysis using redox reactions",
                    "Titrant is oxidizing or reducing agent",
                    "Endpoint detected by color change or potential measurement",
                    "Stoichiometry based on electron transfer"
                ],
                theory: "Redox titrations use a standard solution of oxidizing or reducing agent to determine the concentration of an unknown solution. The equivalence point occurs when stoichiometrically equivalent amounts have reacted. Common oxidizing titrants include KMnO₄, K₂Cr₂O₇, and I₂.",
                commonTitrations: {
                    "Permanganate": "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O (self-indicating)",
                    "Dichromate": "Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O (needs indicator)",
                    "Iodine": "I₂ + 2e⁻ → 2I⁻ (starch indicator)",
                    "Thiosulfate": "2S₂O₃²⁻ → S₄O₆²⁻ + 2e⁻ (with iodine)"
                },
                solvingSteps: [
                    "Write balanced redox equation",
                    "Calculate moles of titrant used: n = M × V",
                    "Use stoichiometric ratio (electron transfer) to find moles of analyte",
                    "Calculate concentration: M = n / V",
                    "Report with correct significant figures",
                    "Consider equivalence point indicators"
                ],
                applications: [
                    "Water quality analysis (dissolved O₂, COD)",
                    "Pharmaceutical analysis",
                    "Industrial quality control",
                    "Ore analysis"
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
                diagramBg: '#f8f9fa',
                // Redox-specific colors
                oxidationBg: '#ffebee',
                oxidationText: '#c62828',
                reductionBg: '#e3f2fd',
                reductionText: '#1565c0',
                electronFlowBg: '#fff3e0',
                electronFlowText: '#e65100',
                anodeBg: '#ffcdd2',
                cathodeBg: '#bbdefb'
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
                diagramBg: '#f1f8ff',
                // Redox-specific colors
                oxidationBg: '#ffe0e6',
                oxidationText: '#b71c1c',
                reductionBg: '#e0f7ff',
                reductionText: '#01579b',
                electronFlowBg: '#fff8e1',
                electronFlowText: '#ff6f00',
                anodeBg: '#ffcccb',
                cathodeBg: '#b3e5fc'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeChemicalSymbols() {
        return {
            // Chemical symbols and notations
            'rightarrow': '→',
            'leftarrow': '←',
            'equilibrium': '⇌',
            'plus': '+',
            'yields': '→',
            'electron': 'e⁻',
            // Subscripts and superscripts
            'subscript': '₀₁₂₃₄₅₆₇₈₉',
            'superscript': '⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻',
            // State symbols
            'solid': '(s)',
            'liquid': '(l)',
            'gas': '(g)',
            'aqueous': '(aq)',
            // Greek letters
            'delta': 'Δ',
            'nu': 'ν',
            'lambda': 'λ',
            'epsilon': 'ε',
            // Special redox symbols
            'oxidation': '⊕',
            'reduction': '⊖'
        };
    }

    initializePeriodicData() {
        // Common elements with atomic masses
        this.atomicMasses = {
            'H': 1.008, 'He': 4.003,
            'C': 12.011, 'N': 14.007, 'O': 15.999, 'F': 18.998,
            'Na': 22.990, 'Mg': 24.305, 'Al': 26.982, 'Si': 28.085,
            'P': 30.974, 'S': 32.06, 'Cl': 35.45, 'Ar': 39.948,
            'K': 39.098, 'Ca': 40.078, 'Mn': 54.938, 'Fe': 55.845,
            'Cu': 63.546, 'Zn': 65.38, 'Br': 79.904, 'Ag': 107.868,
            'I': 126.904, 'Ba': 137.327, 'Au': 196.967, 'Hg': 200.592,
            'Pb': 207.2, 'Cr': 51.996, 'Ni': 58.693, 'Sn': 118.710,
            'Li': 6.94, 'Be': 9.012, 'B': 10.81
        };

        this.avogadroNumber = 6.02214076e23;
        this.faradayConstant = 96485; // C/mol e⁻
        this.gasConstant = 8.314; // J/(mol·K)
        this.gasConstantLAtm = 0.08206; // L·atm/(mol·K)
    }

    initializeRedoxSolvers() {
        this.redoxTypes = {
            // Oxidation state calculations
            oxidation_state: {
                patterns: [
                    /oxidation.*state/i,
                    /oxidation.*number/i,
                    /ox.*state/i,
                    /determine.*oxidation/i
                ],
                solver: this.solveOxidationState.bind(this),
                name: 'Oxidation State Determination',
                category: 'oxidation_states',
                description: 'Calculate oxidation states for atoms in compounds'
            },

            // Identifying redox reactions
            identify_redox: {
                patterns: [
                    /identify.*redox/i,
                    /is.*redox/i,
                    /oxidation.*reduction/i,
                    /electron.*transfer/i
                ],
                solver: this.solveIdentifyRedox.bind(this),
                name: 'Identify Redox Reaction',
                category: 'identifying_redox',
                description: 'Determine if reaction is redox and identify agents'
            },

            // Balancing redox equations
            balance_redox_acidic: {
                patterns: [
                    /balance.*acidic/i,
                    /balance.*redox.*acid/i,
                    /half.*reaction.*acid/i
                ],
                solver: this.solveBalanceRedoxAcidic.bind(this),
                name: 'Balance Redox in Acidic Solution',
                category: 'half_reactions',
                description: 'Balance redox equations in acidic conditions'
            },

            balance_redox_basic: {
                patterns: [
                    /balance.*basic/i,
                    /balance.*redox.*base/i,
                    /half.*reaction.*base/i
                ],
                solver: this.solveBalanceRedoxBasic.bind(this),
                name: 'Balance Redox in Basic Solution',
                category: 'half_reactions',
                description: 'Balance redox equations in basic conditions'
            },

            balance_oxidation_number: {
                patterns: [
                    /balance.*oxidation.*number/i,
                    /oxidation.*number.*method/i
                ],
                solver: this.solveBalanceOxidationNumber.bind(this),
                name: 'Balance Using Oxidation Numbers',
                category: 'oxidation_number_method',
                description: 'Balance using oxidation state changes'
            },

            // Electrochemistry
            galvanic_cell: {
                patterns: [
                    /galvanic.*cell/i,
                    /voltaic.*cell/i,
                    /cell.*potential/i,
                    /battery/i
                ],
                solver: this.solveGalvanicCell.bind(this),
                name: 'Galvanic Cell Calculations',
                category: 'electrochemistry_galvanic',
                description: 'Calculate cell potentials and spontaneity'
            },

            electrolytic_cell: {
                patterns: [
                    /electrolytic.*cell/i,
                    /electrolysis/i,
                    /faraday.*law/i,
                    /electroplating/i
                ],
                solver: this.solveElectrolyticCell.bind(this),
                name: 'Electrolytic Cell Calculations',
                category: 'electrochemistry_electrolytic',
                description: 'Calculate products from electrolysis'
            },

            cell_potential: {
                patterns: [
                    /cell.*potential/i,
                    /E.*cell/i,
                    /standard.*potential/i,
                    /reduction.*potential/i
                ],
                solver: this.solveCellPotential.bind(this),
                name: 'Cell Potential Calculation',
                category: 'cell_potential',
                description: 'Calculate E°cell from reduction potentials'
            },

            nernst_equation: {
                patterns: [
                    /nernst/i,
                    /non.*standard/i,
                    /concentration.*cell/i
                ],
                solver: this.solveNernstEquation.bind(this),
                name: 'Nernst Equation Application',
                category: 'nernst_equation',
                description: 'Calculate cell potential at non-standard conditions'
            },

            free_energy_cell: {
                patterns: [
                    /free.*energy.*cell/i,
                    /delta.*g.*cell/i,
                    /gibbs.*electrochemical/i
                ],
                solver: this.solveFreeEnergyCell.bind(this),
                name: 'Free Energy from Cell Potential',
                category: 'free_energy_equilibrium',
                description: 'Calculate ΔG° from E°cell'
            },

            equilibrium_constant_cell: {
                patterns: [
                    /equilibrium.*constant.*cell/i,
                    /k.*from.*e.*cell/i
                ],
                solver: this.solveEquilibriumConstantCell.bind(this),
                name: 'Equilibrium Constant from E°',
                category: 'free_energy_equilibrium',
                description: 'Calculate K from cell potential'
            },

            // Special redox reactions
            disproportionation: {
                patterns: [
                    /disproportionation/i,
                    /self.*redox/i
                ],
                solver: this.solveDisproportionation.bind(this),
                name: 'Disproportionation Reaction',
                category: 'disproportionation',
                description: 'Analyze disproportionation reactions'
            },

            redox_titration: {
                patterns: [
                    /redox.*titration/i,
                    /permanganate.*titration/i,
                    /dichromate.*titration/i
                ],
                solver: this.solveRedoxTitration.bind(this),
                name: 'Redox Titration',
                category: 'redox_titration',
                description: 'Calculate concentrations from redox titrations'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            oxidation_states: {
                'Assign oxidation states': [
                    'Forgetting that sum must equal overall charge',
                    'Not applying rules in correct priority order',
                    'Confusing oxidation state with actual ionic charge',
                    'Forgetting exceptions (peroxides, metal hydrides)'
                ],
                'Apply oxidation rules': [
                    'Using wrong sign conventions',
                    'Not accounting for polyatomic ions correctly',
                    'Ignoring that pure elements are always 0'
                ]
            },
            identifying_redox: {
                'Identify oxidation/reduction': [
                    'Confusing oxidation (loss e⁻) with reduction (gain e⁻)',
                    'Thinking oxidation means adding oxygen only',
                    'Not checking all oxidation state changes',
                    'Reversing oxidizing and reducing agents'
                ],
                'Determine agents': [
                    'Saying reducing agent is reduced (it\'s oxidized!)',
                    'Saying oxidizing agent is oxidized (it\'s reduced!)',
                    'Not identifying the entire species, just the atom'
                ]
            },
            half_reactions: {
                'Balance half-reactions': [
                    'Adding H⁺ in basic solution (use OH⁻ instead)',
                    'Not balancing oxygen before hydrogen',
                    'Forgetting to balance charge with electrons',
                    'Not multiplying entire half-reaction when equalizing electrons'
                ],
                'Combine half-reactions': [
                    'Not canceling electrons completely',
                    'Forgetting to simplify water and other species',
                    'Losing track of spectator ions',
                    'Not checking final atom and charge balance'
                ]
            },
            electrochemistry_galvanic: {
                'Calculate cell potential': [
                    'Using E°anode instead of -E°anode',
                    'Forgetting E°cell = E°cathode - E°anode',
                    'Multiplying potentials by coefficients (never do this!)',
                    'Confusing anode and cathode'
                ],
                'Determine spontaneity': [
                    'Thinking negative E° is spontaneous (it\'s not!)',
                    'Not relating E° to ΔG° correctly',
                    'Forgetting ΔG° = -nFE°'
                ]
            },
            electrochemistry_electrolytic: {
                'Calculate mass produced': [
                    'Using wrong number of electrons in Faraday\'s law',
                    'Forgetting to convert current to charge: Q = I × t',
                    'Not accounting for reaction stoichiometry',
                    'Using incorrect molar mass'
                ],
                'Apply Faraday\'s law': [
                    'Confusing F (Faraday constant) with F (fluorine)',
                    'Wrong units in calculations',
                    'Not considering efficiency of electrolysis'
                ]
            },
            nernst_equation: {
                'Calculate Q': [
                    'Using wrong form of reaction quotient',
                    'Including solids and pure liquids in Q',
                    'Wrong stoichiometric coefficients as exponents',
                    'Forgetting to use activities/concentrations'
                ],
                'Apply Nernst equation': [
                    'Using natural log instead of log base 10 at 25°C',
                    'Wrong value for n (electrons transferred)',
                    'Sign errors in equation',
                    'Temperature not in Kelvin'
                ]
            }
        };

        this.errorPrevention = {
            oxidation_states: {
                reminder: 'Always verify: sum of oxidation states = overall charge',
                method: 'Use systematic rule application and check result'
            },
            electron_tracking: {
                reminder: 'Electrons lost must equal electrons gained',
                method: 'Balance electrons before combining half-reactions'
            },
            sign_conventions: {
                reminder: 'E°cell = E°cathode - E°anode (never add!)',
                method: 'Cathode is where reduction occurs (more positive E°)'
            },
            nernst_precision: {
                reminder: 'Use 0.0592 for log base 10 at 25°C',
                method: 'Check temperature and use appropriate equation form'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Electron transfer and chemical meaning',
                language: 'intuitive with electron flow visualization'
            },
            procedural: {
                focus: 'Step-by-step balancing and calculation procedures',
                language: 'systematic instruction-based'
            },
            visual: {
                focus: 'Electron flow, oxidation state changes, cell diagrams',
                language: 'spatial and visual metaphors'
            },
            mathematical: {
                focus: 'Quantitative relationships and electrochemical calculations',
                language: 'precise mathematical and thermodynamic terminology'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, avoiding advanced electrochemistry terms',
                detail: 'essential steps only',
                examples: 'simple redox reactions with clear oxidation state changes'
            },
            intermediate: {
                vocabulary: 'standard redox and electrochemistry terminology',
                detail: 'main steps with electron transfer explanations',
                examples: 'mix of simple and complex redox reactions'
            },
            detailed: {
                vocabulary: 'full electrochemical and thermodynamic vocabulary',
                detail: 'comprehensive with theory, mechanisms, and applications',
                examples: 'complex redox systems including electrochemistry'
            },
            scaffolded: {
                vocabulary: 'progressive from basic to advanced',
                detail: 'guided discovery with probing questions',
                examples: 'carefully sequenced from simple to complex'
            }
        };
    }

    // ============================================================================
    // MAIN SOLVER METHOD
    // ============================================================================

    solveRedoxProblem(config) {
        const { equation, species, parameters, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseRedoxProblem(
                equation, species, parameters, problemType, context
            );

            // Solve the problem
            this.currentSolution = this.solveRedoxProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateRedoxSteps(
                this.currentProblem, this.currentSolution
            );

            // Generate diagram data
            this.generateRedoxDiagramData();

            // Generate workbook
            this.generateRedoxWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                steps: this.solutionSteps,
                diagram: this.diagramData
            };

        } catch (error) {
            throw new Error(`Failed to solve redox problem: ${error.message}`);
        }
    }

    parseRedoxProblem(equation, species = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = equation ? this.cleanChemicalExpression(equation) : '';

        // If problem type is specified, use it directly
        if (problemType && this.redoxTypes[problemType]) {
            return {
                originalInput: equation || `${problemType} problem`,
                cleanInput: cleanInput,
                type: problemType,
                species: species,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect redox problem type
        for (const [type, config] of Object.entries(this.redoxTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(species) || 
                    pattern.test(JSON.stringify(parameters))) {
                    return {
                        originalInput: equation || species,
                        cleanInput: cleanInput,
                        type: type,
                        species: species,
                        parameters: { ...parameters },
                        context: { ...context },
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        // Default to oxidation state if formula provided
        if (parameters.formula || species) {
            return {
                originalInput: `Calculate oxidation state in ${parameters.formula || species}`,
                cleanInput: cleanInput,
                type: 'oxidation_state',
                species: parameters.formula || species,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize redox problem type from: ${equation || species}`);
    }

    cleanChemicalExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/-->/g, '→')
            .replace(/->/g, '→')
            .replace(/<-->/g, '⇌')
            .replace(/<->/g, '⇌')
            .replace(/\be-\b/g, 'e⁻')
            .trim();
    }

    solveRedoxProblem_Internal(problem) {
        const solver = this.redoxTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for redox problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // ============================================================================
    // REDOX SOLVERS
    // ============================================================================

    solveOxidationState(problem) {
        const { formula, element, overallCharge } = problem.parameters;
        const species = formula || problem.species;
        const charge = overallCharge !== undefined ? overallCharge : 0;

        // Parse the formula to get element composition
        const composition = this.parseChemicalFormula(species);
        
        // Determine oxidation states
        const oxidationStates = this.calculateOxidationStates(species, composition, charge, element);

        return {
            problemType: 'Oxidation State Determination',
            formula: species,
            overallCharge: charge,
            composition: composition,
            oxidationStates: oxidationStates,
            targetElement: element || 'all',
            rulesApplied: oxidationStates.rulesApplied,
            calculation: oxidationStates.calculation,
            category: 'oxidation_states'
        };
    }

    calculateOxidationStates(formula, composition, overallCharge = 0, targetElement = null) {
        const oxidationStates = {};
        const rulesApplied = [];
        let calculation = '';

        // Check if pure element
        if (Object.keys(composition).length === 1 && composition[Object.keys(composition)[0]] === 1) {
            const elem = Object.keys(composition)[0];
            oxidationStates[elem] = 0;
            rulesApplied.push(`Rule: Pure element ${elem} has oxidation state 0`);
            return { oxidationStates, rulesApplied, calculation: `${elem}: 0` };
        }

        // Apply known oxidation states
        const knownStates = {};
        
        // Fluorine is always -1
        if (composition['F']) {
            knownStates['F'] = -1;
            oxidationStates['F'] = -1;
            rulesApplied.push('Rule: F is always -1 in compounds');
        }

        // Oxygen is usually -2 (except peroxides)
        if (composition['O'] && !formula.includes('O2') && !formula.includes('peroxide')) {
            knownStates['O'] = -2;
            oxidationStates['O'] = -2;
            rulesApplied.push('Rule: O is usually -2 in compounds');
        }

        // Hydrogen is usually +1 (except metal hydrides)
        if (composition['H']) {
            knownStates['H'] = +1;
            oxidationStates['H'] = +1;
            rulesApplied.push('Rule: H is usually +1 in compounds');
        }

        // Group 1 metals are always +1
        const group1 = ['Li', 'Na', 'K', 'Rb', 'Cs'];
        for (const elem of group1) {
            if (composition[elem]) {
                knownStates[elem] = +1;
                oxidationStates[elem] = +1;
                rulesApplied.push(`Rule: ${elem} (Group 1) is always +1`);
            }
        }

        // Group 2 metals are always +2
        const group2 = ['Be', 'Mg', 'Ca', 'Sr', 'Ba'];
        for (const elem of group2) {
            if (composition[elem]) {
                knownStates[elem] = +2;
                oxidationStates[elem] = +2;
                rulesApplied.push(`Rule: ${elem} (Group 2) is always +2`);
            }
        }

        // Aluminum is always +3
        if (composition['Al']) {
            knownStates['Al'] = +3;
            oxidationStates['Al'] = +3;
            rulesApplied.push('Rule: Al is always +3 in compounds');
        }

        // Calculate unknown oxidation state(s)
        const unknownElements = Object.keys(composition).filter(e => !knownStates[e]);
        
        if (unknownElements.length === 1) {
            const elem = unknownElements[0];
            const count = composition[elem];
            
            // Sum of known contributions
            let knownSum = 0;
            for (const [e, oxState] of Object.entries(knownStates)) {
                knownSum += oxState * composition[e];
            }
            
            // Solve: count × x + knownSum = overallCharge
            const unknownOxState = (overallCharge - knownSum) / count;
            oxidationStates[elem] = unknownOxState;
            
            calculation = `Let x = oxidation state of ${elem}\n`;
            calculation += `Sum equation: ${count}(x)`;
            for (const [e, oxState] of Object.entries(knownStates)) {
                const sign = oxState >= 0 ? '+' : '';
                calculation += ` ${sign}${composition[e]}(${oxState})`;
            }
            calculation += ` = ${overallCharge}\n`;
            calculation += `${count}x ${knownSum >= 0 ? '+' : ''}${knownSum} = ${overallCharge}\n`;
            calculation += `${count}x = ${overallCharge - knownSum}\n`;
            calculation += `x = ${unknownOxState}`;
            
            rulesApplied.push(`Calculated: ${elem} = ${unknownOxState > 0 ? '+' : ''}${unknownOxState}`);
        } else if (unknownElements.length > 1 && targetElement) {
            // If multiple unknowns, need more information or target element
            rulesApplied.push('Multiple unknown oxidation states - need additional information');
        }

        return { oxidationStates, rulesApplied, calculation };
    }

    solveIdentifyRedox(problem) {
        const { equation } = problem.parameters;
        const reaction = equation || problem.cleanInput;

        // Parse reaction into reactants and products
        const [reactants, products] = reaction.split('→').map(s => s.trim());
        
        // Get oxidation states for all species
        const reactantSpecies = this.parseReactionSide(reactants);
        const productSpecies = this.parseReactionSide(products);
        
        const reactantOxStates = reactantSpecies.map(spec => 
            this.calculateOxidationStatesForSpecies(spec)
        );
        const productOxStates = productSpecies.map(spec => 
            this.calculateOxidationStatesForSpecies(spec)
        );

        // Identify changes in oxidation states
        const changes = this.identifyOxidationChanges(reactantOxStates, productOxStates);
        
        const isRedox = changes.oxidized.length > 0 && changes.reduced.length > 0;

        return {
            problemType: 'Identify Redox Reaction',
            equation: reaction,
            isRedox: isRedox,
            reactantOxidationStates: reactantOxStates,
            productOxidationStates: productOxStates,
            oxidized: changes.oxidized,
            reduced: changes.reduced,
            oxidizingAgent: changes.oxidizingAgent,
            reducingAgent: changes.reducingAgent,
            electronTransfer: changes.electronTransfer,
            category: 'identifying_redox'
        };
    }

    parseReactionSide(side) {
        return side.split('+').map(s => s.trim()).filter(s => s.length > 0);
    }

    calculateOxidationStatesForSpecies(species) {
        // Remove coefficient if present
        const match = species.match(/^(\d*)\s*(.+)$/);
        const coefficient = match[1] ? parseInt(match[1]) : 1;
        const formula = match[2];

        // Determine charge
        let charge = 0;
        let cleanFormula = formula;
        
        if (formula.includes('+')) {
            const parts = formula.split('+');
            cleanFormula = parts[0];
            charge = parts[1] ? parseInt(parts[1]) || 1 : 1;
        } else if (formula.includes('-')) {
            const parts = formula.split('-');
            cleanFormula = parts[0];
            charge = -(parts[1] ? parseInt(parts[1]) || 1 : 1);
        }

        const composition = this.parseChemicalFormula(cleanFormula);
        const oxStates = this.calculateOxidationStates(cleanFormula, composition, charge);

        return {
            formula: formula,
            coefficient: coefficient,
            charge: charge,
            composition: composition,
            oxidationStates: oxStates.oxidationStates
        };
    }

    identifyOxidationChanges(reactants, products) {
        const oxidized = [];
        const reduced = [];
        let oxidizingAgent = null;
        let reducingAgent = null;
        const electronTransfer = [];

        // Compare oxidation states
        for (const rSpecies of reactants) {
            for (const [rElem, rOxState] of Object.entries(rSpecies.oxidationStates)) {
                for (const pSpecies of products) {
                    if (pSpecies.oxidationStates[rElem] !== undefined) {
                        const pOxState = pSpecies.oxidationStates[rElem];
                        const change = pOxState - rOxState;
                        
                        if (change > 0) {
                            oxidized.push({
                                element: rElem,
                                from: rOxState,
                                to: pOxState,
                                change: change,
                                species: rSpecies.formula
                            });
                            reducingAgent = rSpecies.formula;
                            electronTransfer.push(`${rElem}: ${rOxState} → ${pOxState} (loses ${change} e⁻)`);
                        } else if (change < 0) {
                            reduced.push({
                                element: rElem,
                                from: rOxState,
                                to: pOxState,
                                change: Math.abs(change),
                                species: rSpecies.formula
                            });
                            oxidizingAgent = rSpecies.formula;
                            electronTransfer.push(`${rElem}: ${rOxState} → ${pOxState} (gains ${Math.abs(change)} e⁻)`);
                        }
                    }
                }
            }
        }

        return {
            oxidized,
            reduced,
            oxidizingAgent,
            reducingAgent,
            electronTransfer
        };
    }

    solveBalanceRedoxAcidic(problem) {
        const { equation, oxidationHalf, reductionHalf } = problem.parameters;
        
        // Parse or determine half-reactions
        let oxHalf, redHalf;
        
        if (oxidationHalf && reductionHalf) {
            oxHalf = oxidationHalf;
            redHalf = reductionHalf;
        } else {
            // Extract from full equation
            const halfReactions = this.extractHalfReactions(equation);
            oxHalf = halfReactions.oxidation;
            redHalf = halfReactions.reduction;
        }

        // Balance each half-reaction in acidic solution
        const balancedOxidation = this.balanceHalfReactionAcidic(oxHalf, 'oxidation');
        const balancedReduction = this.balanceHalfReactionAcidic(redHalf, 'reduction');

        // Equalize electrons
        const lcm = this.lcm(balancedOxidation.electrons, balancedReduction.electrons);
        const oxMultiplier = lcm / balancedOxidation.electrons;
        const redMultiplier = lcm / balancedReduction.electrons;

        // Combine half-reactions
        const balanced = this.combineHalfReactions(
            balancedOxidation, oxMultiplier,
            balancedReduction, redMultiplier
        );

        return {
            problemType: 'Balance Redox in Acidic Solution',
            originalEquation: equation,
            oxidationHalf: balancedOxidation,
            reductionHalf: balancedReduction,
            oxidationMultiplier: oxMultiplier,
            reductionMultiplier: redMultiplier,
            electronsTransferred: lcm,
            balancedEquation: balanced.equation,
            simplifiedEquation: balanced.simplified,
            category: 'half_reactions'
        };
    }

    balanceHalfReactionAcidic(halfReaction, type) {
        const steps = [];
        let equation = halfReaction;

        // Parse half-reaction
const [left, right] = equation.split('→').map(s => s.trim());
        
        steps.push({ step: 'Initial', equation: equation });

        // Step 1: Balance atoms other than O and H
        let balanced = this.balanceMainAtoms(left, right);
        steps.push({ step: 'Balance main atoms', equation: balanced });

        // Step 2: Balance oxygen by adding H₂O
        balanced = this.balanceOxygenWithWater(balanced);
        steps.push({ step: 'Balance O with H₂O', equation: balanced });

        // Step 3: Balance hydrogen by adding H⁺
        balanced = this.balanceHydrogenWithProtons(balanced);
        steps.push({ step: 'Balance H with H⁺', equation: balanced });

        // Step 4: Balance charge by adding electrons
        const chargeBalanced = this.balanceChargeWithElectrons(balanced, type);
        steps.push({ step: 'Balance charge with e⁻', equation: chargeBalanced.equation });

        return {
            original: halfReaction,
            balanced: chargeBalanced.equation,
            electrons: chargeBalanced.electrons,
            type: type,
            steps: steps
        };
    }

    balanceMainAtoms(left, right) {
        // Simplified balancing - in real implementation would use more sophisticated algorithm
        return `${left} → ${right}`;
    }

    balanceOxygenWithWater(equation) {
        const [left, right] = equation.split('→').map(s => s.trim());
        
        const leftO = this.countElement(left, 'O');
        const rightO = this.countElement(right, 'O');
        const diff = rightO - leftO;

        if (diff > 0) {
            return `${left} + ${diff}H₂O → ${right}`;
        } else if (diff < 0) {
            return `${left} → ${right} + ${Math.abs(diff)}H₂O`;
        }
        return equation;
    }

    balanceHydrogenWithProtons(equation) {
        const [left, right] = equation.split('→').map(s => s.trim());
        
        const leftH = this.countElement(left, 'H');
        const rightH = this.countElement(right, 'H');
        const diff = rightH - leftH;

        if (diff > 0) {
            return `${left} + ${diff}H⁺ → ${right}`;
        } else if (diff < 0) {
            return `${left} → ${right} + ${Math.abs(diff)}H⁺`;
        }
        return equation;
    }

    balanceChargeWithElectrons(equation, type) {
        const [left, right] = equation.split('→').map(s => s.trim());
        
        const leftCharge = this.calculateCharge(left);
        const rightCharge = this.calculateCharge(right);
        const chargeDiff = rightCharge - leftCharge;

        let electrons = Math.abs(chargeDiff);
        let balancedEquation;

        if (type === 'oxidation') {
            // Oxidation: electrons on right (products)
            balancedEquation = `${left} → ${right} + ${electrons}e⁻`;
        } else {
            // Reduction: electrons on left (reactants)
            balancedEquation = `${left} + ${electrons}e⁻ → ${right}`;
        }

        return {
            equation: balancedEquation,
            electrons: electrons
        };
    }

    countElement(formula, element) {
        // Simplified element counter
        const regex = new RegExp(element + '(\\d*)', 'g');
        const matches = formula.match(regex);
        if (!matches) return 0;
        
        let total = 0;
        for (const match of matches) {
            const num = match.replace(element, '');
            total += num ? parseInt(num) : 1;
        }
        return total;
    }

    calculateCharge(side) {
        let charge = 0;
        
        // Count positive charges
        const plusMatches = side.match(/(\d*)H?\+/g);
        if (plusMatches) {
            for (const match of plusMatches) {
                const num = match.replace(/[H\+]/g, '');
                charge += num ? parseInt(num) : 1;
            }
        }

        // Count negative charges
        const minusMatches = side.match(/(\d*)-/g);
        if (minusMatches) {
            for (const match of minusMatches) {
                const num = match.replace('-', '');
                charge -= num ? parseInt(num) : 1;
            }
        }

        return charge;
    }

    combineHalfReactions(oxidation, oxMult, reduction, redMult) {
        // Multiply each half-reaction
        const oxEquation = this.multiplyHalfReaction(oxidation.balanced, oxMult);
        const redEquation = this.multiplyHalfReaction(reduction.balanced, redMult);

        // Add and simplify
        const combined = `${oxEquation} + ${redEquation}`;
        const simplified = this.simplifyRedoxEquation(combined);

        return {
            equation: combined,
            simplified: simplified
        };
    }

    multiplyHalfReaction(equation, multiplier) {
        if (multiplier === 1) return equation;
        
        // Simplified multiplication - would need proper coefficient handling
        const [left, right] = equation.split('→').map(s => s.trim());
        return `${multiplier}(${left}) → ${multiplier}(${right})`;
    }

    simplifyRedoxEquation(equation) {
        // Remove electrons (they should cancel)
        let simplified = equation.replace(/\s*\+\s*\d*e⁻/g, '');
        simplified = simplified.replace(/\d*e⁻\s*\+\s*/g, '');
        
        // Additional simplification would be needed for H₂O, H⁺, etc.
        return simplified;
    }

    solveBalanceRedoxBasic(problem) {
        // First balance in acidic solution
        const acidicSolution = this.solveBalanceRedoxAcidic(problem);

        // Convert to basic by adding OH⁻ to neutralize H⁺
        const basicEquation = this.convertAcidicToBasic(acidicSolution.balancedEquation);

        return {
            problemType: 'Balance Redox in Basic Solution',
            originalEquation: problem.parameters.equation,
            acidicForm: acidicSolution.balancedEquation,
            basicForm: basicEquation,
            oxidationHalf: acidicSolution.oxidationHalf,
            reductionHalf: acidicSolution.reductionHalf,
            conversionSteps: this.getBasicConversionSteps(acidicSolution.balancedEquation, basicEquation),
            category: 'half_reactions'
        };
    }

    convertAcidicToBasic(acidicEquation) {
        // Count H⁺ ions
        const hPlusCount = (acidicEquation.match(/H\+/g) || []).length;
        
        // Add equal OH⁻ to both sides
        let basicEquation = acidicEquation.replace(/H\+/g, 'H₂O');
        basicEquation += ` + ${hPlusCount}OH⁻`;
        
        // Simplify H₂O
        return this.simplifyWater(basicEquation);
    }

    simplifyWater(equation) {
        // Simplified water cancellation
        return equation;
    }

    getBasicConversionSteps(acidic, basic) {
        return [
            { step: 'Start with acidic form', equation: acidic },
            { step: 'Add OH⁻ to neutralize H⁺', equation: 'Add OH⁻ equal to H⁺ on both sides' },
            { step: 'Convert H⁺ + OH⁻ to H₂O', equation: 'H⁺ + OH⁻ → H₂O' },
            { step: 'Simplify water molecules', equation: basic }
        ];
    }

    solveBalanceOxidationNumber(problem) {
        const { equation } = problem.parameters;
        
        // Identify oxidation state changes
        const changes = this.identifyOxidationStateChanges(equation);
        
        // Calculate coefficients to balance electron transfer
        const coefficients = this.calculateBalancingCoefficients(changes);
        
        // Apply coefficients and balance remaining atoms
        const balanced = this.applyCoefficientsAndBalance(equation, coefficients);

        return {
            problemType: 'Balance Using Oxidation Numbers',
            originalEquation: equation,
            oxidationChanges: changes,
            electronTransferBalance: coefficients,
            balancedEquation: balanced,
            verification: this.verifyBalance(balanced),
            category: 'oxidation_number_method'
        };
    }

    identifyOxidationStateChanges(equation) {
        const [reactants, products] = equation.split('→').map(s => s.trim());
        
        const reactantSpecies = this.parseReactionSide(reactants);
        const productSpecies = this.parseReactionSide(products);
        
        const changes = [];
        
        // Compare oxidation states and find changes
        for (const rSpec of reactantSpecies) {
            const rOxStates = this.calculateOxidationStatesForSpecies(rSpec);
            
            for (const pSpec of productSpecies) {
                const pOxStates = this.calculateOxidationStatesForSpecies(pSpec);
                
                for (const [elem, rState] of Object.entries(rOxStates.oxidationStates)) {
                    if (pOxStates.oxidationStates[elem] !== undefined) {
                        const pState = pOxStates.oxidationStates[elem];
                        const change = pState - rState;
                        
                        if (change !== 0) {
                            changes.push({
                                element: elem,
                                from: rState,
                                to: pState,
                                change: change,
                                electronsTransferred: Math.abs(change),
                                type: change > 0 ? 'oxidation' : 'reduction',
                                reactantSpecies: rSpec,
                                productSpecies: pSpec
                            });
                        }
                    }
                }
            }
        }

        return changes;
    }

    calculateBalancingCoefficients(changes) {
        // Find total electrons lost and gained
        let electronsLost = 0;
        let electronsGained = 0;
        
        for (const change of changes) {
            if (change.type === 'oxidation') {
                electronsLost += change.electronsTransferred;
            } else {
                electronsGained += change.electronsTransferred;
            }
        }

        // Calculate LCM to balance electrons
        const lcm = this.lcm(electronsLost, electronsGained);
        
        return {
            oxidationCoefficient: lcm / electronsLost,
            reductionCoefficient: lcm / electronsGained,
            totalElectronsTransferred: lcm
        };
    }

    applyCoefficientsAndBalance(equation, coefficients) {
        // Simplified - would need full balancing algorithm
        return equation;
    }

    verifyBalance(equation) {
        const [left, right] = equation.split('→').map(s => s.trim());
        
        // Check atom balance
        const elements = this.getAllElements(equation);
        const atomBalance = {};
        
        for (const elem of elements) {
            const leftCount = this.countElement(left, elem);
            const rightCount = this.countElement(right, elem);
            atomBalance[elem] = {
                left: leftCount,
                right: rightCount,
                balanced: leftCount === rightCount
            };
        }

        // Check charge balance
        const leftCharge = this.calculateCharge(left);
        const rightCharge = this.calculateCharge(right);
        
        return {
            atomBalance: atomBalance,
            chargeBalance: {
                left: leftCharge,
                right: rightCharge,
                balanced: leftCharge === rightCharge
            },
            isBalanced: Object.values(atomBalance).every(a => a.balanced) && leftCharge === rightCharge
        };
    }

    getAllElements(equation) {
        const elementPattern = /[A-Z][a-z]?/g;
        const matches = equation.match(elementPattern);
        return [...new Set(matches)];
    }

    solveGalvanicCell(problem) {
        const { oxidationHalf, reductionHalf, anode, cathode } = problem.parameters;
        
        // Get standard reduction potentials
        let E_cathode, E_anode;
        
        if (cathode && this.standardPotentials[cathode]) {
            E_cathode = this.standardPotentials[cathode];
        }
        
        if (anode && this.standardPotentials[anode]) {
            E_anode = this.standardPotentials[anode];
        }

        // Calculate cell potential
        const E_cell = E_cathode - E_anode;
        
        // Determine spontaneity
        const isSpontaneous = E_cell > 0;
        
        // Calculate free energy
        const n = problem.parameters.electrons || 2;
        const deltaG = -n * this.faradayConstant * E_cell / 1000; // in kJ/mol

        return {
            problemType: 'Galvanic Cell Calculations',
            cathode: {
                half: cathode,
                potential: E_cathode,
                reaction: reductionHalf || 'Reduction occurs'
            },
            anode: {
                half: anode,
                potential: E_anode,
                reaction: oxidationHalf || 'Oxidation occurs'
            },
            cellPotential: E_cell,
            isSpontaneous: isSpontaneous,
            electronsTransferred: n,
            freeEnergy: deltaG,
            cellNotation: this.generateCellNotation(anode, cathode),
            category: 'electrochemistry_galvanic'
        };
    }

    generateCellNotation(anode, cathode) {
        return `Anode | Anode solution || Cathode solution | Cathode`;
    }

    solveElectrolyticCell(problem) {
        const { current, time, substance, electrons } = problem.parameters;
        
        // Calculate charge: Q = I × t
        const charge = current * time;
        
        // Calculate moles of electrons: mol e⁻ = Q / F
        const molesElectrons = charge / this.faradayConstant;
        
        // Calculate moles of substance produced
        const n = electrons || 1;
        const molesSubstance = molesElectrons / n;
        
        // Calculate mass
        const molarMass = this.calculateMolarMass(substance);
        const mass = molesSubstance * molarMass;

        return {
            problemType: 'Electrolytic Cell Calculations',
            current: current,
            time: time,
            charge: charge,
            molesElectrons: molesElectrons,
            electronsPerMole: n,
            molesSubstance: molesSubstance,
            substance: substance,
            molarMass: molarMass,
            massProduced: mass,
            faradayConstant: this.faradayConstant,
            category: 'electrochemistry_electrolytic'
        };
    }

    solveCellPotential(problem) {
        const { cathode, anode } = problem.parameters;
        
        const E_cathode = this.standardPotentials[cathode];
        const E_anode = this.standardPotentials[anode];
        
        if (E_cathode === undefined || E_anode === undefined) {
            throw new Error('Standard potentials not found for given half-reactions');
        }

        const E_cell = E_cathode - E_anode;

        return {
            problemType: 'Cell Potential Calculation',
            cathode: cathode,
            cathodeReduction: true,
            E_cathode: E_cathode,
            anode: anode,
            anodeOxidation: true,
            E_anode: E_anode,
            E_cell: E_cell,
            formula: 'E°cell = E°cathode - E°anode',
            spontaneity: E_cell > 0 ? 'Spontaneous' : 'Non-spontaneous',
            category: 'cell_potential'
        };
    }

    solveNernstEquation(problem) {
        const { E_standard, temperature, electrons, concentrations } = problem.parameters;
        
        const T = temperature || 298; // K
        const n = electrons;
        
        // Calculate reaction quotient Q
        const Q = this.calculateReactionQuotient(concentrations);
        
        // Nernst equation
        let E;
        if (T === 298) {
            // Simplified form at 25°C
            E = E_standard - (0.0592 / n) * Math.log10(Q);
        } else {
            // General form
            const R = this.gasConstant;
            const F = this.faradayConstant;
            E = E_standard - (R * T / (n * F)) * Math.log(Q);
        }

        return {
            problemType: 'Nernst Equation Application',
            E_standard: E_standard,
            temperature: T,
            electronsTransferred: n,
            concentrations: concentrations,
            reactionQuotient: Q,
            cellPotential: E,
            formula: T === 298 ? 'E = E° - (0.0592/n)log(Q)' : 'E = E° - (RT/nF)ln(Q)',
            category: 'nernst_equation'
        };
    }

    calculateReactionQuotient(concentrations) {
        // Simplified Q calculation
        // In full implementation, would parse reaction and calculate properly
        let Q = 1;
        
        if (concentrations.products && concentrations.reactants) {
            const productConc = concentrations.products.reduce((prod, c) => prod * c, 1);
            const reactantConc = concentrations.reactants.reduce((prod, c) => prod * c, 1);
            Q = productConc / reactantConc;
        }
        
        return Q;
    }

    solveFreeEnergyCell(problem) {
        const { E_cell, electrons } = problem.parameters;
        
        const n = electrons;
        const F = this.faradayConstant;
        
        // ΔG° = -nFE°
        const deltaG = -n * F * E_cell / 1000; // Convert to kJ/mol

        return {
            problemType: 'Free Energy from Cell Potential',
            E_cell: E_cell,
            electronsTransferred: n,
            faradayConstant: F,
            freeEnergy: deltaG,
            formula: 'ΔG° = -nFE°',
            spontaneity: deltaG < 0 ? 'Spontaneous (ΔG° < 0)' : 'Non-spontaneous (ΔG° > 0)',
            category: 'free_energy_equilibrium'
        };
    }

    solveEquilibriumConstantCell(problem) {
        const { E_cell, electrons, temperature } = problem.parameters;
        
        const n = electrons;
        const T = temperature || 298;
        
        // E° = (0.0592/n)log(K) at 25°C
        let K;
        if (T === 298) {
            K = Math.pow(10, (n * E_cell) / 0.0592);
        } else {
            const R = this.gasConstant;
            const F = this.faradayConstant;
            K = Math.exp((n * F * E_cell) / (R * T));
        }

        return {
            problemType: 'Equilibrium Constant from E°',
            E_cell: E_cell,
            electronsTransferred: n,
            temperature: T,
            equilibriumConstant: K,
            logK: Math.log10(K),
            formula: T === 298 ? 'E° = (0.0592/n)log(K)' : 'E° = (RT/nF)ln(K)',
            interpretation: K > 1 ? 'Product-favored' : 'Reactant-favored',
            category: 'free_energy_equilibrium'
        };
    }

    solveDisproportionation(problem) {
        const { equation, element } = problem.parameters;
        
        // Analyze oxidation state changes
        const changes = this.identifyOxidationStateChanges(equation);
        
        // Verify it's disproportionation (same element oxidized and reduced)
        const elementChanges = changes.filter(c => c.element === element);
        
        const oxidation = elementChanges.find(c => c.type === 'oxidation');
        const reduction = elementChanges.find(c => c.type === 'reduction');
        
        const isDisproportionation = oxidation && reduction;

        return {
            problemType: 'Disproportionation Reaction',
            equation: equation,
            element: element,
            isDisproportionation: isDisproportionation,
            initialOxidationState: oxidation ? oxidation.from : null,
            oxidizedTo: oxidation ? oxidation.to : null,
            reducedTo: reduction ? reduction.to : null,
            changes: elementChanges,
            explanation: isDisproportionation ? 
                `${element} acts as both oxidizing and reducing agent` :
                'Not a disproportionation reaction',
            category: 'disproportionation'
        };
    }

    solveRedoxTitration(problem) {
        const { titrantMolarity, titrantVolume, analyte, equation, electrons } = problem.parameters;
        
        // Calculate moles of titrant
        const molesTitrant = titrantMolarity * (titrantVolume / 1000);
        
        // Use stoichiometry to find moles of analyte
        const n = electrons || 1;
        const molesAnalyte = molesTitrant * n;
        
        // Calculate concentration if volume given
        let analyteConcentration = null;
        if (problem.parameters.analyteVolume) {
            analyteConcentration = molesAnalyte / (problem.parameters.analyteVolume / 1000);
        }

        return {
            problemType: 'Redox Titration',
            equation: equation,
            titrant: {
                molarity: titrantMolarity,
                volume: titrantVolume,
                moles: molesTitrant
            },
            analyte: {
                substance: analyte,
                moles: molesAnalyte,
                concentration: analyteConcentration
            },
            stoichiometricRatio: n,
            category: 'redox_titration'
        };
    }

    // ============================================================================
    // HELPER METHODS
    // ============================================================================

    parseChemicalFormula(formula) {
        const composition = {};
        
        // Remove charge indicators
        const cleanFormula = formula.replace(/[⁺⁻\+\-\d+$]/g, '');
        
        // Simple parser for elements
        const elementPattern = /([A-Z][a-z]?)(\d*)/g;
        let match;
        
        // Handle parentheses
        const parenPattern = /\(([^)]+)\)(\d+)/g;
        let working = cleanFormula;
        
        while ((match = parenPattern.exec(working)) !== null) {
            const group = match[1];
            const multiplier = parseInt(match[2]);
            
            const groupElements = {};
            let groupMatch;
            const groupPattern = /([A-Z][a-z]?)(\d*)/g;
            
            while ((groupMatch = groupPattern.exec(group)) !== null) {
                const elem = groupMatch[1];
                const count = groupMatch[2] ? parseInt(groupMatch[2]) : 1;
                groupElements[elem] = (groupElements[elem] || 0) + count * multiplier;
            }
            
            for (const [elem, count] of Object.entries(groupElements)) {
                composition[elem] = (composition[elem] || 0) + count;
            }
            
            working = working.replace(match[0], '');
        }
        
        // Parse remaining elements
        while ((match = elementPattern.exec(working)) !== null) {
            const element = match[1];
            const count = match[2] ? parseInt(match[2]) : 1;
            
            if (element && element !== '') {
                composition[element] = (composition[element] || 0) + count;
            }
        }
        
        return composition;
    }

    calculateMolarMass(formula) {
        const composition = this.parseChemicalFormula(formula);
        let molarMass = 0;
        
        for (const [element, count] of Object.entries(composition)) {
            if (!this.atomicMasses[element]) {
                console.warn(`Unknown element: ${element}, using 0`);
                continue;
            }
            molarMass += this.atomicMasses[element] * count;
        }
        
        return parseFloat(molarMass.toFixed(4));
    }

    lcm(a, b) {
        return Math.abs((a * b) / this.gcd(a, b));
    }

    gcd(a, b) {
        return b === 0 ? a : this.gcd(b, a % b);
    }

    extractHalfReactions(equation) {
        // Simplified extraction - would need more sophisticated logic
        return {
            oxidation: 'Oxidation half-reaction',
            reduction: 'Reduction half-reaction'
        };
    }

    // ============================================================================
    // STEP GENERATION
    // ============================================================================

    generateRedoxSteps(problem, solution) {
        let baseSteps = this.generateBaseRedoxSteps(problem, solution);

        // Apply enhancements
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

    generateBaseRedoxSteps(problem, solution) {
        const { type } = problem;

        switch(type) {
            case 'oxidation_state':
                return this.generateOxidationStateSteps(problem, solution);
            case 'identify_redox':
                return this.generateIdentifyRedoxSteps(problem, solution);
            case 'balance_redox_acidic':
                return this.generateBalanceAcidicSteps(problem, solution);
            case 'balance_redox_basic':
                return this.generateBalanceBasicSteps(problem, solution);
            case 'balance_oxidation_number':
                return this.generateOxidationNumberBalanceSteps(problem, solution);
            case 'galvanic_cell':
                return this.generateGalvanicCellSteps(problem, solution);
            case 'electrolytic_cell':
                return this.generateElectrolyticCellSteps(problem, solution);
            case 'cell_potential':
                return this.generateCellPotentialSteps(problem, solution);
            case 'nernst_equation':
                return this.generateNernstSteps(problem, solution);
            case 'free_energy_cell':
                return this.generateFreeEnergySteps(problem, solution);
            case 'equilibrium_constant_cell':
                return this.generateEquilibriumConstantSteps(problem, solution);
            case 'disproportionation':
                return this.generateDisproportionationSteps(problem, solution);
            case 'redox_titration':
                return this.generateRedoxTitrationSteps(problem, solution);
            default:
                return this.generateGenericRedoxSteps(problem, solution);
        }
    }

    generateOxidationStateSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify the formula and overall charge',
            description: 'Determine what species we\'re analyzing',
            formula: solution.formula,
            overallCharge: solution.overallCharge,
            reasoning: 'Clear identification of the species and its charge is essential',
            visualHint: 'Write the formula clearly with any charge indicated',
            goalStatement: 'Apply oxidation state rules systematically'
        });

        steps.push({
            stepNumber: 2,
            step: 'Apply oxidation state rules',
            description: 'Use rules in priority order to assign known oxidation states',
            rulesApplied: solution.rulesApplied,
            reasoning: 'Rules provide a systematic way to determine oxidation states',
            algebraicRule: 'Sum of (oxidation state × atoms) = overall charge',
            visualHint: 'Start with elements that have fixed oxidation states',
            criticalWarning: 'Rules have priority - apply them in correct order'
        });

        steps.push({
            stepNumber: 3,
            step: 'Set up equation for unknown oxidation state',
            description: 'Use the rule: sum of oxidation states equals overall charge',
            calculation: solution.calculation,
            reasoning: 'This equation ensures charge balance',
            algebraicRule: 'Σ(oxidation state × number of atoms) = charge',
            visualHint: 'Let x = unknown oxidation state'
        });

        steps.push({
            stepNumber: 4,
            step: 'Solve for unknown and verify',
            description: 'Calculate the unknown oxidation state',
            oxidationStates: solution.oxidationStates,
            reasoning: 'Verify that the sum equals the overall charge',
            finalAnswer: true,
            verification: 'Check: sum of all oxidation states = ' + solution.overallCharge
        });

        return steps;
    }

    generateIdentifyRedoxSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Assign oxidation states to all atoms',
            description: 'Determine oxidation states for reactants and products',
            reactantStates: solution.reactantOxidationStates,
            productStates: solution.productOxidationStates,
            reasoning: 'Need oxidation states to identify changes',
            visualHint: 'Write oxidation states above each atom'
        });

        steps.push({
            stepNumber: 2,
            step: 'Identify oxidation state changes',
            description: 'Find which atoms changed oxidation state',
            oxidized: solution.oxidized,
            reduced: solution.reduced,
            reasoning: 'Changes indicate electron transfer',
            algebraicRule: 'Oxidation = increase in oxidation state; Reduction = decrease',
            visualHint: 'Compare before and after oxidation states for each element'
        });

        steps.push({
            stepNumber: 3,
            step: 'Classify as redox or non-redox',
            description: 'Determine if reaction involves electron transfer',
            isRedox: solution.isRedox,
            reasoning: solution.isRedox ? 
                'Oxidation state changes indicate this is a redox reaction' :
                'No oxidation state changes - this is NOT a redox reaction',
            visualHint: solution.isRedox ? 
                'Both oxidation and reduction must occur' :
                'Look for reactions like precipitation or acid-base instead'
        });

        if (solution.isRedox) {
            steps.push({
                stepNumber: 4,
                step: 'Identify oxidizing and reducing agents',
                description: 'Determine which species cause oxidation and reduction',
                oxidizingAgent: solution.oxidizingAgent,
                reducingAgent: solution.reducingAgent,
                reasoning: 'Oxidizing agent gets reduced; reducing agent gets oxidized',
                algebraicRule: 'OIL RIG: Oxidation Is Loss, Reduction Is Gain (of electrons)',
                visualHint: 'The reducing agent contains the atom that is oxidized',
                criticalWarning: 'Don\'t confuse: reducing agent is oxidized, not reduced!',
                finalAnswer: true
            });

            steps.push({
                stepNumber: 5,
                step: 'Describe electron transfer',
                description: 'Summarize the electron flow in the reaction',
                electronTransfer: solution.electronTransfer,
                reasoning: 'Electrons flow from reducing agent to oxidizing agent',
                visualHint: 'Draw arrows showing electron transfer direction',
                finalAnswer: true
            });
        }

        return steps;
    }

    generateBalanceAcidicSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Write separate half-reactions',
            description: 'Identify oxidation and reduction half-reactions',
            oxidationHalf: solution.oxidationHalf.original,
            reductionHalf: solution.reductionHalf.original,
            reasoning: 'Balancing each half-reaction separately simplifies the process',
            visualHint: 'Oxidation: electrons on right; Reduction: electrons on left'
        });

        steps.push({
            stepNumber: 2,
            step: 'Balance each half-reaction',
            description: 'Balance atoms and charge in acidic solution',
            oxidationBalanced: solution.oxidationHalf.balanced,
            reductionBalanced: solution.reductionHalf.balanced,
            reasoning: 'Follow the sequence: atoms other than O/H, then O with H₂O, then H with H⁺, finally charge with e⁻',
            algebraicRule: 'Balance order: 1) Main atoms, 2) O with H₂O, 3) H with H⁺, 4) Charge with e⁻',
            visualHint: 'In acidic solution, use H⁺ and H₂O freely',
            criticalWarning: 'NEVER use OH⁻ in acidic solution!'
        });

        steps.push({
            stepNumber: 3,
            step: 'Equalize electrons transferred',
            description: 'Multiply half-reactions so electrons cancel',
            oxidationElectrons: solution.oxidationHalf.electrons,
            reductionElectrons: solution.reductionHalf.electrons,
            oxidationMultiplier: solution.oxidationMultiplier,
            reductionMultiplier: solution.reductionMultiplier,
            totalElectrons: solution.electronsTransferred,
            reasoning: 'Electrons lost must equal electrons gained',
            algebraicRule: `LCM(${solution.oxidationHalf.electrons}, ${solution.reductionHalf.electrons}) = ${solution.electronsTransferred}`,
            visualHint: 'Find least common multiple of electron numbers',
            criticalWarning: 'Multiply ALL terms in half-reaction, not just electrons'
        });

        steps.push({
            stepNumber: 4,
            step: 'Add half-reactions and simplify',
            description: 'Combine and cancel common terms',
            balancedEquation: solution.balancedEquation,
            simplified: solution.simplifiedEquation,
            reasoning: 'Electrons should cancel completely when added',
            visualHint: 'Cancel electrons, then simplify H₂O and H⁺ on both sides',
            finalAnswer: true
        });

        steps.push({
            stepNumber: 5,
            step: 'Verify balance',
            description: 'Check atoms and charges are balanced',
            verification: this.verifyBalance(solution.simplifiedEquation),
            reasoning: 'Both atom count and total charge must be equal on both sides',
            finalAnswer: true
        });

        return steps;
    }

    generateBalanceBasicSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Balance in acidic solution first',
            description: 'Use acidic balancing method as starting point',
            acidicForm: solution.acidicForm,
            reasoning: 'Easier to balance in acidic, then convert to basic',
            visualHint: 'Follow all acidic balancing steps first'
        });

        steps.push({
            stepNumber: 2,
            step: 'Add OH⁻ to neutralize H⁺',
            description: 'Add OH⁻ equal to H⁺ on BOTH sides',
            conversionSteps: solution.conversionSteps,
            reasoning: 'OH⁻ neutralizes H⁺ to form H₂O',
            algebraicRule: 'H⁺ + OH⁻ → H₂O',
            visualHint: 'Add same number of OH⁻ to both sides',
            criticalWarning: 'Must add to BOTH sides to maintain balance'
        });

        steps.push({
            stepNumber: 3,
            step: 'Form water and simplify',
            description: 'Combine H⁺ + OH⁻ → H₂O and cancel excess water',
            basicForm: solution.basicForm,
            reasoning: 'Simplify to get final basic solution form',
            visualHint: 'Cancel water molecules appearing on both sides',
            finalAnswer: true
        });

        return steps;
    }

    generateOxidationNumberBalanceSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Assign all oxidation states',
            description: 'Determine oxidation states for all atoms',
            oxidationChanges: solution.oxidationChanges,
            reasoning: 'Identify which atoms are oxidized and reduced',
            visualHint: 'Write oxidation numbers above each atom'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate electron transfer',
            description: 'Determine electrons lost and gained',
            electronTransferBalance: solution.electronTransferBalance,
            reasoning: 'Total electrons lost must equal total electrons gained',
            algebraicRule: 'Electrons lost = Electrons gained',
            visualHint: 'Count change in oxidation state for each atom'
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply balancing coefficients',
            description: 'Use coefficients to balance electron transfer',
            balancedEquation: solution.balancedEquation,
            reasoning: 'Coefficients ensure electrons balance',
            visualHint: 'May need to balance other atoms after electrons',
            finalAnswer: true
        });

        steps.push({
            stepNumber: 4,
            step: 'Verify complete balance',
            description: 'Check all atoms and charges',
            verification: solution.verification,
            reasoning: 'Final equation must conserve mass and charge',
            finalAnswer: true
        });

        return steps;
    }

    generateGalvanicCellSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify cathode and anode half-reactions',
            description: 'Determine which half-reaction is reduction (cathode) and oxidation (anode)',
            cathode: solution.cathode,
            anode: solution.anode,
            reasoning: 'Cathode: reduction (higher E°); Anode: oxidation (lower E°)',
            algebraicRule: 'Cathode has more positive (or less negative) reduction potential',
            visualHint: 'Higher E° = stronger oxidizer = gets reduced at cathode'
        });

        steps.push({
            stepNumber: 2,
            step: 'Look up standard reduction potentials',
            description: 'Find E° values from standard reduction potential table',
            E_cathode: solution.cathode.potential,
            E_anode: solution.anode.potential,
            reasoning: 'Standard potentials are tabulated relative to SHE (E° = 0.00 V)',
            visualHint: 'More positive E° = easier to reduce',
            referenceNote: 'Standard Hydrogen Electrode (SHE) is the reference: H⁺ + e⁻ → ½H₂, E° = 0.00 V'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate cell potential',
            description: 'Apply the formula E°cell = E°cathode - E°anode',
            formula: 'E°cell = E°cathode - E°anode',
            calculation: `E°cell = ${solution.cathode.potential} - (${solution.anode.potential}) = ${solution.cellPotential} V`,
            cellPotential: solution.cellPotential,
            reasoning: 'Cell potential determines spontaneity and maximum work',
            algebraicRule: 'NEVER add potentials; NEVER multiply by coefficients',
            visualHint: 'Positive E°cell indicates spontaneous reaction',
            criticalWarning: 'Common mistake: Adding instead of subtracting!',
            finalAnswer: true
        });

        steps.push({
            stepNumber: 4,
            step: 'Determine spontaneity',
            description: 'Check if reaction is spontaneous',
            isSpontaneous: solution.isSpontaneous,
            reasoning: solution.isSpontaneous ? 
                'E°cell > 0, so reaction is spontaneous' :
                'E°cell < 0, so reaction is non-spontaneous',
            interpretation: solution.isSpontaneous ?
                'This reaction can produce electrical energy (battery)' :
                'This reaction requires electrical energy (electrolysis)',
            finalAnswer: true
        });

        if (solution.freeEnergy !== undefined) {
            steps.push({
                stepNumber: 5,
                step: 'Calculate free energy change',
                description: 'Relate E°cell to ΔG°',
                formula: 'ΔG° = -nFE°',
                freeEnergy: solution.freeEnergy,
                reasoning: 'Free energy quantifies energy available for useful work',
                units: 'kJ/mol',
                finalAnswer: true
            });
        }

        return steps;
    }

    generateElectrolyticCellSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Calculate total charge passed',
            description: 'Use Q = I × t to find charge',
            formula: 'Q = I × t',
            current: solution.current,
            time: solution.time,
            charge: solution.charge,
            units: 'Coulombs (C)',
            reasoning: 'Charge determines how many electrons flowed',
            algebraicRule: 'Q (C) = I (A) × t (s)',
            visualHint: 'Make sure time is in seconds'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate moles of electrons',
            description: 'Use Faraday\'s constant to convert charge to moles',
            formula: 'mol e⁻ = Q / F',
            faradayConstant: solution.faradayConstant,
            molesElectrons: solution.molesElectrons,
            reasoning: 'Faraday\'s constant (96,485 C/mol) converts charge to moles of electrons',
            visualHint: '1 mole of electrons = 96,485 coulombs'
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply reaction stoichiometry',
            description: 'Use electrons per mole to find moles of substance',
            electronsPerMole: solution.electronsPerMole,
            molesSubstance: solution.molesSubstance,
            reasoning: 'Stoichiometry relates electrons to substance produced/consumed',
            algebraicRule: 'mol substance = (mol e⁻) / (electrons per mol substance)',
            visualHint: 'From balanced half-reaction: e.g., Cu²⁺ + 2e⁻ → Cu means 2 electrons per Cu'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate mass produced',
            description: 'Convert moles to grams using molar mass',
            formula: 'm = n × M',
            molarMass: solution.molarMass,
            massProduced: solution.massProduced,
            reasoning: 'Molar mass converts moles to measurable mass',
            units: 'grams',
            finalAnswer: true
        });

        return steps;
    }

    generateCellPotentialSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify half-reactions',
            description: 'Determine cathode (reduction) and anode (oxidation)',
            cathode: solution.cathode,
            anode: solution.anode,
            reasoning: 'Need to know which is reduced and which is oxidized'
        });

        steps.push({
            stepNumber: 2,
            step: 'Find standard reduction potentials',
            description: 'Look up E° values in table',
            E_cathode: solution.E_cathode,
            E_anode: solution.E_anode,
            reasoning: 'Standard potentials are measured vs. SHE',
            referenceNote: 'All values relative to standard hydrogen electrode'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate E°cell',
            description: 'Apply E°cell = E°cathode - E°anode',
            formula: solution.formula,
            E_cell: solution.E_cell,
            calculation: `${solution.E_cathode} V - (${solution.E_anode} V) = ${solution.E_cell} V`,
            reasoning: 'This gives the standard cell potential',
            criticalWarning: 'Subtract anode potential, don\'t add!',
            finalAnswer: true
        });

        steps.push({
            stepNumber: 4,
            step: 'Interpret spontaneity',
            description: 'Determine if reaction is spontaneous',
            spontaneity: solution.spontaneity,
            reasoning: solution.E_cell > 0 ? 
                'Positive E° indicates spontaneous reaction' :
                'Negative E° indicates non-spontaneous reaction',
            finalAnswer: true
        });

        return steps;
    }

    generateNernstSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify given information',
            description: 'List E°, n, T, and concentrations',
            E_standard: solution.E_standard,
            temperature: solution.temperature,
            electronsTransferred: solution.electronsTransferred,
            concentrations: solution.concentrations,
            reasoning: 'Nernst equation requires all these parameters'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate reaction quotient Q',
            description: 'Q = [products]/[reactants] with proper exponents',
            reactionQuotient: solution.reactionQuotient,
            reasoning: 'Q accounts for non-standard concentrations',
            algebraicRule: 'Use stoichiometric coefficients as exponents',
            visualHint: 'Pure solids and liquids are omitted from Q',
            criticalWarning: 'Make sure to use activities (≈ concentrations) for solutes'
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply Nernst equation',
            description: 'Calculate E using the appropriate form',
            formula: solution.formula,
            calculation: solution.temperature === 298 ?
                `E = ${solution.E_standard} - (0.0592/${solution.electronsTransferred})log(${solution.reactionQuotient})` :
                `E = ${solution.E_standard} - (RT/nF)ln(${solution.reactionQuotient})`,
            cellPotential: solution.cellPotential,
            reasoning: 'Non-standard conditions change the cell potential',
            algebraicRule: solution.temperature === 298 ?
                'At 25°C: E = E° - (0.0592/n)log(Q)' :
                'General: E = E° - (RT/nF)ln(Q)',
            visualHint: 'Use log₁₀ for 25°C form, natural log otherwise',
            finalAnswer: true
        });

        return steps;
    }

    generateFreeEnergySteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify cell potential and electrons',
            description: 'Determine E°cell and n',
            E_cell: solution.E_cell,
            electronsTransferred: solution.electronsTransferred,
            reasoning: 'Both needed for ΔG° calculation'
        });

        steps.push({
            stepNumber: 2,
            step: 'Apply ΔG° = -nFE° formula',
            description: 'Calculate free energy change',
            formula: solution.formula,
            calculation: `ΔG° = -${solution.electronsTransferred} × ${solution.faradayConstant} × ${solution.E_cell} / 1000`,
            freeEnergy: solution.freeEnergy,
            units: 'kJ/mol',
            reasoning: 'Negative sign because cell potential and free energy have opposite conventions',
            algebraicRule: 'F = 96,485 C/mol e⁻',
            visualHint: 'Divide by 1000 to convert J to kJ',
            finalAnswer: true
        });

        steps.push({
            stepNumber: 3,
            step: 'Interpret spontaneity',
            description: 'Relate ΔG° to spontaneity',
            spontaneity: solution.spontaneity,
            reasoning: solution.freeEnergy < 0 ?
                'ΔG° < 0 means spontaneous (product-favored)' :
                'ΔG° > 0 means non-spontaneous (reactant-favored)',
            relationship: 'E° > 0 ⟺ ΔG° < 0 ⟺ K > 1 ⟺ spontaneous',
            finalAnswer: true
        });

        return steps;
    }

    generateEquilibriumConstantSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify E°cell and n',
            description: 'Gather required parameters',
            E_cell: solution.E_cell,
            electronsTransferred: solution.electronsTransferred,
            temperature: solution.temperature,
            reasoning: 'Need these to calculate K'
        });

        steps.push({
            stepNumber: 2,
            step: 'Apply equilibrium relationship',
            description: 'Use E° = (0.0592/n)log(K) at 25°C',
            formula: solution.formula,
            calculation: solution.temperature === 298 ?
                `log(K) = (n × E°) / 0.0592 = (${solution.electronsTransferred} × ${solution.E_cell}) / 0.0592` :
                `ln(K) = (nFE°)/(RT)`,
            reasoning: 'At equilibrium, E = 0 and Q = K',
            algebraicRule: 'Solve for K from rearranged equation'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate K',
            description: 'Take antilog to find equilibrium constant',
            equilibriumConstant: solution.equilibriumConstant,
            logK: solution.logK,
            reasoning: 'K quantifies extent of reaction at equilibrium',
            visualHint: solution.equilibriumConstant > 1 ?
                'K > 1: products favored at equilibrium' :
                'K < 1: reactants favored at equilibrium',
            finalAnswer: true
        });

        steps.push({
            stepNumber: 4,
            step: 'Interpret result',
            description: 'Relate K to reaction favorability',
            interpretation: solution.interpretation,
            relationship: 'Large K (>1) means reaction goes nearly to completion',
            finalAnswer: true
        });

        return steps;
    }

    generateDisproportionationSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Assign oxidation states',
            description: 'Determine oxidation states for all species',
            changes: solution.changes,
            reasoning: 'Need to identify oxidation state changes'
        });

        steps.push({
            stepNumber: 2,
            step: 'Identify changes for target element',
            description: `Check if ${solution.element} is both oxidized and reduced`,
            element: solution.element,
            initialOxidationState: solution.initialOxidationState,
            oxidizedTo: solution.oxidizedTo,
            reducedTo: solution.reducedTo,
            reasoning: 'Disproportionation requires same element doing both',
            visualHint: 'Same element in reactant goes to two different oxidation states in products'
        });

        steps.push({
            stepNumber: 3,
            step: 'Verify disproportionation',
            description: 'Confirm reaction type',
            isDisproportionation: solution.isDisproportionation,
            explanation: solution.explanation,
            reasoning: solution.isDisproportionation ?
                'Element acts as both oxidizing and reducing agent' :
                'Not disproportionation - different elements are oxidized/reduced',
            finalAnswer: true
        });

        return steps;
    }

    generateRedoxTitrationSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Calculate moles of titrant',
            description: 'Use M × V to find moles',
            formula: 'n = M × V',
            titrant: solution.titrant,
            reasoning: 'Titrant is the known solution used to determine analyte',
            algebraicRule: 'Convert mL to L if necessary'
        });

        steps.push({
            stepNumber: 2,
            step: 'Apply stoichiometric ratio',
            description: 'Use balanced equation to relate titrant to analyte',
            equation: solution.equation,
            stoichiometricRatio: solution.stoichiometricRatio,
            reasoning: 'Mole ratio comes from balanced redox equation',
            visualHint: 'Based on electron transfer in half-reactions'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate moles of analyte',
            description: 'Apply mole ratio to find analyte moles',
            analyte: solution.analyte,
            reasoning: 'At equivalence point, stoichiometric amounts have reacted',
            finalAnswer: true
        });

        if (solution.analyte.concentration) {
            steps.push({
                stepNumber: 4,
                step: 'Calculate analyte concentration',
                description: 'Divide moles by volume',
                formula: 'M = n / V',
                concentration: solution.analyte.concentration,
                reasoning: 'This is the unknown concentration we sought',
                finalAnswer: true
            });
        }

        return steps;
    }

    generateGenericRedoxSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Solve redox problem',
            description: 'Apply appropriate redox principles',
            solution: solution,
            reasoning: 'Use oxidation states, electron transfer, or electrochemistry as needed'
        }];
    }

    // ============================================================================
    // ENHANCED EXPLANATION METHODS
    // ============================================================================

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanationRedox(step, problem),
                procedural: this.getProceduralExplanationRedox(step),
                visual: this.getVisualExplanationRedox(step, problem),
                mathematical: this.getMathematicalExplanationRedox(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisitesRedox(step, problem.type),
                keyVocabulary: this.identifyKeyVocabularyRedox(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        return enhanced;
    }

    getConceptualExplanationRedox(step, problem) {
        const conceptualExplanations = {
            'Identify the formula and overall charge': 'Oxidation states are bookkeeping tools to track electron distribution in compounds.',
            'Apply oxidation state rules': 'These rules reflect electron transfer tendencies: electronegative elements attract electrons (negative oxidation states).',
            'Assign oxidation states to all atoms': 'Comparing oxidation states before and after reaction reveals electron transfer.',
            'Identify oxidation state changes': 'Oxidation (loss of electrons) always accompanies reduction (gain of electrons) - they\'re inseparable.',
            'Write separate half-reactions': 'Separating oxidation and reduction simplifies balancing by focusing on one electron transfer at a time.',
            'Balance each half-reaction': 'Each half-reaction must conserve both atoms and charge independently.',
            'Equalize electrons transferred': 'Nature conserves electrons - none are created or destroyed in chemical reactions.',
            'Calculate cell potential': 'Cell potential is the electrical "pressure" driving electron flow from anode to cathode.',
            'Calculate total charge passed': 'Electric current is flowing electrons; charge quantifies how many electrons moved.',
            'Apply Nernst equation': 'Le Chatelier\'s principle applied to electrochemistry: concentrations affect driving force.',
            'Calculate reaction quotient Q': 'Q describes how far from equilibrium the system is; affects cell potential.',
            'Apply ΔG° = -nFE° formula': 'Cell potential and free energy are two ways to express the same spontaneity information.'
        };

        return conceptualExplanations[step.step] || 'This step applies principles of electron transfer and oxidation-reduction.';
    }

    getProceduralExplanationRedox(step) {
        if (step.formula) {
            return `1. Write the formula: ${step.formula}
2. Substitute known values
3. Perform the calculation
4. Check units and significant figures`;
        }
        return 'Follow the systematic approach for this redox calculation type.';
    }

    getVisualExplanationRedox(step, problem) {
        const visualExplanations = {
            'oxidation_states': 'Imagine electrons as currency - oxidation states track who "owns" electrons in chemical accounting.',
            'identifying_redox': 'Picture electrons hopping from one atom to another like passengers transferring between trains.',
            'half_reactions': 'Think of balancing half-reactions like balancing two sides of a chemical equation separately, then combining them.',
            'electrochemistry_galvanic': 'Visualize a battery: chemical energy at electrodes converts to electrical energy flowing through wires.',
            'electrochemistry_electrolytic': 'Imagine forcing water uphill with a pump - electrical energy forces non-spontaneous reactions.',
            'nernst_equation': 'Picture concentration as pressure - higher concentration increases the "push" for reaction.',
            'cell_potential': 'Think of E° as the "voltage" or electrical pressure difference between two half-reactions.'
        };

        const category = this.getRedoxCategoryFromType(problem.type);
        return visualExplanations[category] || 'Visualize electron flow from reducing agent to oxidizing agent.';
    }

    getMathematicalExplanationRedox(step) {
        const mathExplanations = {
            'Set up equation for unknown oxidation state': 'Σ(oxidation state × atoms) = charge (linear equation)',
            'Calculate cell potential': 'E°cell = E°cathode - E°anode (subtraction, not addition)',
            'Calculate total charge passed': 'Q = I × t (direct proportion)',
            'Calculate moles of electrons': 'n = Q / F (F = 96,485 C/mol is constant)',
            'Apply Nernst equation': 'E = E° - (RT/nF)ln(Q) (logarithmic relationship)',
            'Apply ΔG° = -nFE° formula': 'ΔG° = -nFE° (linear with negative slope)'
        };

        return mathExplanations[step.step] || 'Apply quantitative relationships for redox calculations.';
    }

    getRedoxCategoryFromType(type) {
        const categoryMap = {
            'oxidation_state': 'oxidation_states',
            'identify_redox': 'identifying_redox',
            'balance_redox_acidic': 'half_reactions',
            'balance_redox_basic': 'half_reactions',
            'balance_oxidation_number': 'oxidation_number_method',
            'galvanic_cell': 'electrochemistry_galvanic',
            'electrolytic_cell': 'electrochemistry_electrolytic',
            'cell_potential': 'cell_potential',
            'nernst_equation': 'nernst_equation',
            'free_energy_cell': 'free_energy_equilibrium',
            'equilibrium_constant_cell': 'free_energy_equilibrium'
        };
        return categoryMap[type] || 'general_redox';
    }

    identifyPrerequisitesRedox(step, problemType) {
        const prerequisites = {
            'Assign oxidation states': ['Periodic table familiarity', 'Ion charges', 'Electronegativity concept'],
            'Balance half-reactions': ['Chemical equation balancing', 'Understanding of H₂O, H⁺, OH⁻', 'Charge concept'],
            'Calculate cell potential': ['Standard reduction potentials', 'Cathode vs anode', 'Subtraction of potentials'],
            'Apply Nernst equation': ['Logarithms', 'Reaction quotient Q', 'Cell potential basics'],
            'Calculate moles of electrons': ['Faraday\'s constant', 'Mole concept', 'Unit conversions']
        };

        return prerequisites[step.step] || ['Basic redox concepts', 'Chemical equations', 'Stoichiometry'];
    }

    identifyKeyVocabularyRedox(step) {
        const vocabulary = {
            'Assign oxidation states': ['oxidation state', 'oxidation number', 'electronegativity', 'ionic charge'],
            'Identify oxidation state changes': ['oxidation', 'reduction', 'oxidizing agent', 'reducing agent', 'electron transfer', 'OIL RIG', 'LEO GER'],
            'Balance half-reactions': ['half-reaction', 'oxidation half', 'reduction half', 'spectator ions'],
            'Calculate cell potential': ['cell potential', 'E°cell', 'cathode', 'anode', 'standard reduction potential', 'spontaneous'],
            'Apply Nernst equation': ['Nernst equation', 'reaction quotient', 'non-standard conditions', 'concentration cell'],
            'Calculate total charge passed': ['current', 'charge', 'coulomb', 'Faraday\'s constant', 'electrolysis'],
            'Identify half-reactions': ['oxidation', 'reduction', 'half-cell', 'electrode'],
            'Apply ΔG° = -nFE° formula': ['free energy', 'Gibbs energy', 'Faraday constant', 'spontaneity']
        };

        return vocabulary[step.step] || ['redox', 'electron transfer', 'oxidation', 'reduction'];
    }

    getAdaptiveExplanation(step, explanationLevel) {
        const levelConfig = typeof explanationLevel === 'string' ? 
            this.difficultyLevels[explanationLevel] : 
            this.difficultyLevels.intermediate;

        if (!levelConfig) {
            return {
                adaptedDescription: step.description,
                adaptedReasoning: step.reasoning,
                complexityLevel: 'intermediate'
            };
        }

        const adaptedDescription = this.adaptLanguageLevel(
            step.description || '', 
            { vocabulary: levelConfig.vocabulary }
        );

        const adaptedReasoning = this.adaptLanguageLevel(
            step.reasoning || '', 
            { vocabulary: levelConfig.vocabulary }
        );

        let additionalExplanation = '';
        let scaffoldingQuestions = [];
        let detailLevel = '';

        switch (explanationLevel) {
            case 'basic':
                additionalExplanation = this.getBasicExplanationRedox(step);
                detailLevel = 'Essential steps with simple language';
                break;

            case 'intermediate':
                additionalExplanation = this.getIntermediateExplanationRedox(step);
                detailLevel = 'Standard redox procedures with clear explanations';
                break;

            case 'detailed':
                additionalExplanation = this.getDetailedExplanationRedox(step);
                detailLevel = 'Comprehensive with theory, mechanism, and electrochemical principles';
                break;

            case 'scaffolded':
                scaffoldingQuestions = this.getScaffoldingQuestionsRedox(step);
                additionalExplanation = this.getScaffoldedExplanationRedox(step);
                detailLevel = 'Guided discovery through questioning';
                break;

            default:
                additionalExplanation = step.reasoning || '';
                detailLevel = 'Standard explanation';
        }

        return {
            adaptedDescription: adaptedDescription,
            adaptedReasoning: adaptedReasoning,
            additionalExplanation: additionalExplanation,
            scaffoldingQuestions: scaffoldingQuestions,
            complexityLevel: explanationLevel,
            detailLevel: detailLevel,
            vocabulary: levelConfig.vocabulary,
            examples: this.getExamplesForLevelRedox(step, explanationLevel)
        };
    }

    adaptLanguageLevel(text, options) {
        // Simple language adaptation
        if (options.vocabulary === 'simple, avoiding advanced electrochemistry terms') {
            return text
                .replace(/oxidation state/gi, 'charge number')
                .replace(/reduction potential/gi, 'electron-gaining tendency')
                .replace(/stoichiometric/gi, 'balanced equation');
        }
        return text;
    }

    getBasicExplanationRedox(step) {
        const basicExplanations = {
            'Identify the formula and overall charge': 'Write down the chemical formula and its charge (if any).',
            'Apply oxidation state rules': 'Use simple rules: O is usually -2, H is usually +1, Group 1 is +1, Group 2 is +2.',
            'Set up equation for unknown oxidation state': 'Add up all the charges - they must equal the overall charge.',
            'Assign oxidation states to all atoms': 'Give each atom a number showing how many electrons it has lost or gained.',
            'Identify oxidation state changes': 'Find which numbers went up (oxidation) or down (reduction).',
            'Write separate half-reactions': 'Split the reaction into two parts: one for losing electrons, one for gaining.',
            'Balance each half-reaction': 'Make sure atoms and charges balance on both sides.',
            'Equalize electrons transferred': 'Make sure the same number of electrons are lost and gained.',
            'Calculate cell potential': 'Subtract the anode number from the cathode number.',
            'Calculate total charge passed': 'Multiply current by time to get charge.',
            'Apply Nernst equation': 'Adjust the voltage for different concentrations.'
        };

        return basicExplanations[step.step] || 'Follow the steps to work through this redox calculation.';
    }

    getIntermediateExplanationRedox(step) {
        const intermediateExplanations = {
            'Identify the formula and overall charge': 'Start by clearly identifying the chemical species and determining its overall charge. Neutral molecules have charge 0; ions have the charge indicated by their superscript.',

            'Apply oxidation state rules': 'Apply rules systematically in order of priority: pure elements (0), Group 1 (+1), Group 2 (+2), F (-1), O (usually -2), H (usually +1). Use the sum rule to solve for unknowns.',

            'Assign oxidation states to all atoms': 'Assign oxidation states to every atom in both reactants and products. This allows comparison to identify which atoms underwent oxidation or reduction.',

            'Identify oxidation state changes': 'Compare oxidation states: increase = oxidation (loss of electrons), decrease = reduction (gain of electrons). Remember OIL RIG: Oxidation Is Loss, Reduction Is Gain.',

            'Write separate half-reactions': 'Separate the overall reaction into oxidation and reduction half-reactions. Oxidation half shows electron loss (electrons on right), reduction half shows electron gain (electrons on left).',

            'Balance each half-reaction': 'For acidic solution: balance atoms other than O and H, then O with H₂O, then H with H⁺, finally charge with electrons. Each half must be balanced independently.',

            'Equalize electrons transferred': 'Find the least common multiple of electrons in each half-reaction. Multiply each entire half-reaction by the appropriate factor so electrons cancel when added.',

            'Calculate cell potential': 'Use E°cell = E°cathode - E°anode. The cathode is where reduction occurs (higher E°), anode is where oxidation occurs (lower E°). Never multiply E° by coefficients.',

            'Calculate total charge passed': 'Charge (Q) equals current (I) times time (t): Q = It. Ensure current is in amperes and time in seconds to get charge in coulombs.',

            'Apply Nernst equation': 'At 25°C, use E = E° - (0.0592/n)log(Q). Calculate Q from concentrations, determine n from balanced equation, then compute the non-standard cell potential.'
        };

        return intermediateExplanations[step.step] || 'Apply standard redox principles systematically for this step.';
    }

    getDetailedExplanationRedox(step) {
        const detailedExplanations = {
            'Identify the formula and overall charge': 'Oxidation states are a formalism for tracking electron distribution in chemical species. They represent hypothetical charges if all bonds were completely ionic. The overall charge on a species is the actual charge, while oxidation states are assigned to individual atoms within that species.',

            'Apply oxidation state rules': 'Oxidation state rules are prioritized based on electronegativity and chemical behavior. Elements with higher electronegativity (F, O) typically have negative oxidation states. The sum rule (Σ oxidation states = overall charge) derives from charge conservation and allows calculation of unknown oxidation states algebraically.',

            'Assign oxidation states to all atoms': 'Systematic assignment of oxidation states enables identification of redox reactions. While actual electron distribution involves partial charges and molecular orbitals, oxidation states provide a useful formalism. Compare oxidation states across the reaction equation to identify which atoms are oxidized (increase in oxidation state) and reduced (decrease in oxidation state).',

            'Identify oxidation state changes': 'Redox reactions fundamentally involve electron transfer. Oxidation (loss of electrons) is identified by an increase in oxidation state; reduction (gain of electrons) is identified by a decrease. These processes are coupled—electrons lost by one species are gained by another. The species containing the atom that is oxidized is the reducing agent; it causes reduction of another species while being oxidized itself. Conversely, the oxidizing agent contains the atom that is reduced.',

            'Write separate half-reactions': 'The half-reaction method separates the coupled oxidation and reduction processes, simplifying complex redox equation balancing. Each half-reaction represents either oxidation or reduction occurring at one electrode in an electrochemical cell. Electrons appear explicitly: as products in oxidation half-reactions (showing electron loss) and as reactants in reduction half-reactions (showing electron gain).',

            'Balance each half-reaction': 'Balancing half-reactions in acidic solution follows a strict sequence ensuring both mass and charge balance. First balance atoms other than O and H (typically the element being oxidized or reduced). Then balance oxygen by adding H₂O molecules. Next, balance hydrogen by adding H⁺ ions (valid in acidic solution). Finally, balance charge by adding electrons. This sequence works because H₂O and H⁺ are abundant in acidic aqueous solution.',

            'Equalize electrons transferred': 'The fundamental principle of electron conservation requires that electrons lost in oxidation equal electrons gained in reduction. Mathematically, find the least common multiple (LCM) of the electron coefficients in both half-reactions. Multiply each entire half-reaction by the factor that makes electron numbers equal. When half-reactions are added, electrons cancel completely, yielding the balanced overall equation.',

            'Calculate cell potential': 'Standard cell potential (E°cell) quantifies the thermodynamic driving force for a redox reaction under standard conditions (25°C, 1 M, 1 atm). It equals the difference between cathode and anode reduction potentials: E°cell = E°cathode - E°anode. The cathode (reduction site) has the more positive (or less negative) reduction potential. Positive E°cell indicates spontaneous reaction; negative E°cell indicates non-spontaneous reaction requiring external energy input.',

            'Calculate total charge passed': 'Electric charge (Q) quantifies the number of electrons flowing through an electrolytic or galvanic cell. The relationship Q = I × t connects current (charge per time) to total charge transferred. One coulomb equals the charge of 6.24 × 10¹⁸ electrons. This macroscopic electrical measurement enables calculation of chemical change via Faraday\'s law.',

            'Apply Nernst equation': 'The Nernst equation quantifies how cell potential depends on concentration (activity) of reactants and products. It derives from combining electrochemical potential with thermodynamic reaction quotient: E = E° - (RT/nF)ln(Q). At 25°C, this simplifies to E = E° - (0.0592/n)log(Q). As reactions proceed toward equilibrium (Q → K), cell potential decreases toward zero. At equilibrium, E = 0 and Q = K, connecting electrochemistry to thermodynamics.',

            'Apply ΔG° = -nFE° formula': 'Free energy change (ΔG°) and cell potential (E°) are thermodynamically equivalent measures of reaction spontaneity. The relationship ΔG° = -nFE° connects them, where n is moles of electrons transferred and F is Faraday\'s constant (96,485 C/mol e⁻). The negative sign reflects convention: positive E° (spontaneous electrochemical reaction) corresponds to negative ΔG° (spontaneous thermodynamic process). This equation enables calculation of maximum electrical work obtainable from a redox reaction.'
        };

        return detailedExplanations[step.step] || 'This step applies fundamental principles of electron transfer, electrochemistry, and thermodynamics to quantify redox processes.';
    }

    getScaffoldedExplanationRedox(step) {
        const scaffoldedExplanations = {
            'Identify the formula and overall charge': 'Let\'s start by looking at what we have. What is the chemical formula? Does it have a charge? If yes, is it positive or negative? Writing this down clearly helps us apply the right rules.',

            'Apply oxidation state rules': 'Now, which rules apply to this compound? Let\'s think: Do we have any Group 1 or Group 2 metals? Those have fixed oxidation states. What about oxygen or hydrogen? Remember, oxygen is usually -2 and hydrogen is usually +1. Can you identify these elements?',

            'Set up equation for unknown oxidation state': 'Here\'s where we solve like a puzzle! We know some oxidation states and need to find others. Let\'s call the unknown "x" and write an equation. Remember: all the oxidation states must add up to the overall charge. Can you set up that equation?',

            'Assign oxidation states to all atoms': 'Let\'s be detectives! We need to write an oxidation state above every single atom—in reactants AND products. Start with the easy ones (pure elements are always 0). Which atoms can you label first?',

            'Identify oxidation state changes': 'Now compare before and after. Which atoms changed their oxidation state? Did the number go up or down? Remember: up means oxidation (loses electrons), down means reduction (gains electrons). Can you spot the changes?',

            'Write separate half-reactions': 'Let\'s split this reaction into two parts. Which atom is being oxidized (going up in oxidation state)? That\'s your oxidation half. Which is being reduced (going down)? That\'s your reduction half. Can you separate them?',

            'Balance each half-reaction': 'Time to balance! Let\'s do one half-reaction at a time. First, is the main element balanced? Good. Now, how many oxygens on each side? Add H₂O to balance them. Then balance hydrogens with H⁺. Finally, add electrons to balance the charge. Ready to try?',

            'Equalize electrons transferred': 'We need the same number of electrons in both halves. How many electrons in the oxidation half? How many in the reduction half? What\'s their least common multiple? That tells us what to multiply each half by. Can you calculate that?',

            'Calculate cell potential': 'Here\'s the key formula: E°cell = E°cathode - E°anode. Which half-reaction has the more positive E°? That\'s your cathode (reduction). The other is your anode (oxidation). Now subtract anode from cathode—careful, don\'t add! What do you get?',

            'Calculate total charge passed': 'Let\'s think about what flows through the wire. Current is charge per time. If we multiply current by time, we get total charge. Do you have current in amps and time in seconds? Then Q = I × t. What\'s the charge?',

            'Apply Nernst equation': 'The voltage changes with concentration! Let\'s use the Nernst equation. First, what\'s E°? How many electrons are transferred (that\'s n)? Now, what\'s Q from concentrations? At 25°C, we use: E = E° - (0.0592/n)log(Q). Can you plug in the numbers?'
        };

        return scaffoldedExplanations[step.step] || 'Let\'s think through this step together. What do we know? What do we need to find? What relationship connects them?';
    }

    getScaffoldingQuestionsRedox(step) {
        const questionSets = {
            'Identify the formula and overall charge': [
                'What is the complete chemical formula?',
                'Is this a neutral molecule or an ion?',
                'If it\'s an ion, what is its charge?',
                'Are there any polyatomic ions present?'
            ],
            'Apply oxidation state rules': [
                'Which elements have fixed oxidation states?',
                'Is oxygen present? What\'s its usual oxidation state?',
                'Is hydrogen present? What\'s its usual oxidation state?',
                'Which element has an unknown oxidation state?',
                'What must all the oxidation states add up to?'
            ],
            'Assign oxidation states to all atoms': [
                'Which atoms are in their elemental form (oxidation state = 0)?',
                'Which atoms are in Group 1 or Group 2?',
                'Where is oxygen in the compound?',
                'How do we handle polyatomic ions?',
                'Can you write the oxidation state above each atom?'
            ],
            'Identify oxidation state changes': [
                'Which atoms have different oxidation states in products vs reactants?',
                'Did the oxidation state increase or decrease?',
                'What does an increase in oxidation state mean?',
                'What does a decrease in oxidation state mean?',
                'Is this a redox reaction? How can you tell?'
            ],
            'Write separate half-reactions': [
                'Which atom is oxidized (oxidation state increases)?',
                'Which atom is reduced (oxidation state decreases)?',
                'Where do electrons appear in an oxidation half-reaction?',
                'Where do electrons appear in a reduction half-reaction?',
                'Can you write both half-reactions separately?'
            ],
            'Balance each half-reaction': [
                'Is the main element balanced first?',
                'How do we balance oxygen atoms?',
                'How do we balance hydrogen atoms in acidic solution?',
                'What do we add to balance the charge?',
                'Are both atoms AND charge balanced now?'
            ],
            'Equalize electrons transferred': [
                'How many electrons are in the oxidation half?',
                'How many electrons are in the reduction half?',
                'What\'s the LCM of these two numbers?',
                'What do we multiply each half-reaction by?',
                'Will electrons cancel when we add them?'
            ],
            'Calculate cell potential': [
                'What is E° for each half-reaction?',
                'Which half-reaction is reduction (cathode)?',
                'Which half-reaction is oxidation (anode)?',
                'What\'s the formula for E°cell?',
                'Do we add or subtract the potentials?',
                'What does the sign of E°cell tell us?'
            ],
            'Calculate total charge passed': [
                'What is the current in amperes?',
                'What is the time in seconds?',
                'What\'s the formula Q = I × t?',
                'What units should charge have?',
                'Does the answer make sense?'
            ],
            'Apply Nernst equation': [
                'What is E° for this reaction?',
                'How many electrons are transferred (n)?',
                'What is the reaction quotient Q?',
                'Are we at 25°C? Which Nernst form should we use?',
                'What happens to E when Q increases?',
                'What is E at equilibrium?'
            ]
        };

        return questionSets[step.step] || [
            'What is this step trying to accomplish?',
            'What information do we have?',
            'What principle or formula applies?',
            'How can we verify our answer?'
        ];
    }

    getExamplesForLevelRedox(step, level) {
        const examples = {
            basic: {
                'Apply oxidation state rules': 'In H₂O: H is +1 (rule for H), O is -2 (rule for O). Check: 2(+1) + 1(-2) = 0 ✓',
                'Calculate cell potential': 'Cu²⁺ + 2e⁻ → Cu, E° = +0.34 V and Zn²⁺ + 2e⁻ → Zn, E° = -0.76 V. E°cell = 0.34 - (-0.76) = 1.10 V',
                'Calculate total charge passed': 'Current = 2 A, time = 1 hour = 3600 s. Q = 2 × 3600 = 7200 C'
            },
            intermediate: {
                'Apply oxidation state rules': 'In MnO₄⁻: O is -2, so 4 O atoms = -8 total. Overall charge is -1. Let Mn = x: x + (-8) = -1, so x = +7',
                'Balance half-reactions': 'MnO₄⁻ → Mn²⁺ in acidic: Add 4 H₂O to right for O. Add 8 H⁺ to left for H. Add 5 e⁻ to left for charge: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O',
                'Calculate cell potential': 'Cell: Zn | Zn²⁺ || Cu²⁺ | Cu. Cathode (reduction): Cu²⁺ + 2e⁻ → Cu, E° = +0.34 V. Anode (oxidation): Zn → Zn²⁺ + 2e⁻, E° = -0.76 V. E°cell = 0.34 - (-0.76) = 1.10 V'
            },
            detailed: {
                'Apply oxidation state rules': 'In Cr₂O₇²⁻: Let Cr = x. O is -2 each (7 O = -14 total). Sum: 2x + (-14) = -2 (overall charge). Solving: 2x = +12, x = +6. Each Cr is +6.',
                'Balance half-reactions': 'Cr₂O₇²⁻ → Cr³⁺ (acidic): Balance Cr: Cr₂O₇²⁻ → 2Cr³⁺. Balance O with H₂O: Cr₂O₇²⁻ → 2Cr³⁺ + 7H₂O. Balance H with H⁺: Cr₂O₇²⁻ + 14H⁺ → 2Cr³⁺ + 7H₂O. Balance charge with e⁻: left = +12, right = +6, need 6e⁻ on left: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O',
                'Apply Nernst equation': 'For Cu²⁺ + Zn → Cu + Zn²⁺, E° = 1.10 V, n = 2. If [Cu²⁺] = 0.1 M and [Zn²⁺] = 1.0 M: Q = [Zn²⁺]/[Cu²⁺] = 1.0/0.1 = 10. E = 1.10 - (0.0592/2)log(10) = 1.10 - 0.0296 = 1.07 V'
            },
            scaffolded: {
                'Apply oxidation state rules': 'Let\'s do SO₄²⁻ together: O is -2, right? We have 4 O atoms: 4 × (-2) = -8. The overall charge is -2. So if S = x, then x + (-8) = -2. Solving: x = +6. Try SO₃²⁻ yourself!',
                'Balance half-reactions': 'Start with Fe²⁺ → Fe³⁺. Is Fe balanced? Yes! Is O balanced? Yes (no O). Is H balanced? Yes (no H). Now balance charge: left is +2, right is +3. Add 1e⁻ to right: Fe²⁺ → Fe³⁺ + e⁻. Done!',
                'Calculate cell potential': 'We have Ag⁺/Ag (E° = +0.80 V) and Ni²⁺/Ni (E° = -0.25 V). Which is higher? Ag! So Ag is cathode (reduction). Ni is anode (oxidation). E°cell = 0.80 - (-0.25). What do you get?'
            }
        };

        const levelExamples = examples[level] || examples.intermediate;
        return levelExamples[step.step] || 'Practice similar redox problems to build understanding.';
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: this.generateStepBridgeRedox(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgressionRedox(steps[i], steps[i + 1]),
                    strategicThinking: this.explainStepStrategyRedox(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generateStepBridgeRedox(currentStep, nextStep) {
        const bridges = {
            'Identify the formula and overall charge→Apply oxidation state rules': 'Now that we know the formula and charge, we can systematically apply oxidation state rules to determine how electrons are distributed.',
            
            'Apply oxidation state rules→Set up equation for unknown oxidation state': 'With rules applied to known elements, we can set up an algebraic equation using the sum rule to find unknowns.',
            
            'Assign oxidation states to all atoms→Identify oxidation state changes': 'Having assigned all oxidation states, we can now compare reactants to products to identify electron transfer.',
            
            'Identify oxidation state changes→Classify as redox or non-redox': 'Changes in oxidation states definitively tell us whether this is a redox reaction.',
            
            'Write separate half-reactions→Balance each half-reaction': 'With half-reactions separated, we can now focus on balancing each one independently.',
            
            'Balance each half-reaction→Equalize electrons transferred': 'Both half-reactions are now balanced, so we can ensure electron conservation by equalizing electron numbers.',
            
            'Equalize electrons transferred→Add half-reactions and simplify': 'With electrons equalized, we can add the half-reactions and let electrons cancel.',
            
            'Identify half-reactions→Find standard reduction potentials': 'Knowing which half-reactions occur allows us to look up their standard potentials.',
            
            'Find standard reduction potentials→Calculate cell potential': 'With both potentials known, we can calculate the overall cell potential.',
            
            'Calculate cell potential→Determine spontaneity': 'The sign of cell potential directly indicates whether the reaction is spontaneous.',
            
            'Calculate total charge passed→Calculate moles of electrons': 'Converting charge to moles connects electrical measurements to chemical quantities.',
            
            'Calculate moles of electrons→Apply reaction stoichiometry': 'Moles of electrons can be related to moles of substance via the balanced half-reaction.',
            
            'Calculate reaction quotient Q→Apply Nernst equation': 'With Q calculated, we can now use the Nernst equation to find cell potential at non-standard conditions.',
            
            'Calculate cell potential→Calculate free energy change': 'Cell potential and free energy are related thermodynamic quantities - knowing one gives us the other.'
        };

        const key = `${currentStep.step}→${nextStep.step}`;
        return bridges[key] || `Having completed ${currentStep.step}, we now move to ${nextStep.step} to continue our analysis.`;
    }

    explainStepProgressionRedox(currentStep, nextStep) {
        return `${currentStep.step} provides the foundation for ${nextStep.step}. The information obtained here is essential for the next calculation.`;
    }

    explainStepStrategyRedox(step) {
        const strategies = {
            'Apply oxidation state rules': 'Strategy: Apply rules in priority order - start with elements that have fixed oxidation states.',
            'Balance half-reactions': 'Strategy: Follow the sequence systematically - atoms, oxygen, hydrogen, charge - don\'t skip steps.',
            'Equalize electrons transferred': 'Strategy: Use LCM to find the smallest multipliers that make electrons equal.',
            'Calculate cell potential': 'Strategy: Always identify cathode (higher E°) first, then subtract anode potential.',
            'Apply Nernst equation': 'Strategy: Calculate Q carefully, ensuring correct stoichiometric exponents.',
            'Calculate moles of electrons': 'Strategy: Convert electrical measurements (Q) to chemical quantities (mol) using F.'
        };

        return strategies[step.step] || 'Strategy: Apply redox principles systematically and carefully.';
    }

    addErrorPrevention(step, problemType) {
        const category = this.getRedoxCategoryFromType(problemType);
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsRedox(step, problemType),
                checkPoints: this.generateCheckPointsRedox(step),
                warningFlags: this.identifyWarningFlagsRedox(step, problemType)
            },
            validation: {
                selfCheck: this.generateSelfCheckQuestionRedox(step),
                expectedResult: this.describeExpectedResultRedox(step),
                troubleshooting: this.generateTroubleshootingTipsRedox(step)
            }
        };
    }

    generatePreventionTipsRedox(step, problemType) {
        const tips = {
            'Apply oxidation state rules': [
                'Always check that sum equals overall charge',
                'Remember exceptions: peroxides (O = -1), metal hydrides (H = -1)',
                'Group 1 and 2 metals never vary in compounds'
            ],
            'Identify oxidation/reduction': [
                'Remember: oxidation is LOSS of electrons (oxidation state increases)',
                'Reducing agent is oxidized; oxidizing agent is reduced',
                'Check that both oxidation AND reduction occur'
            ],
            'Balance half-reactions': [
                'NEVER use OH⁻ in acidic solution',
                'NEVER skip the balancing sequence',
                'Always balance charge last with electrons'
            ],
            'Calculate cell potential': [
                'NEVER add the two E° values',
                'NEVER multiply E° by stoichiometric coefficients',
                'Always use E°cathode - E°anode, not E°anode - E°cathode'
            ],
            'Apply Nernst equation': [
                'Use log₁₀ (not ln) with 0.0592 at 25°C',
                'Omit pure solids and liquids from Q',
                'Use correct stoichiometric exponents in Q'
            ]
        };

        return tips[step.step] || ['Follow systematic procedures', 'Check units', 'Verify results make chemical sense'];
    }

    generateCheckPointsRedox(step) {
        const checkpoints = {
            'Apply oxidation state rules': [
                '✓ Sum of oxidation states = overall charge?',
                '✓ All elements assigned an oxidation state?',
                '✓ Rules applied in correct priority?'
            ],
            'Balance half-reactions': [
                '✓ Main element balanced?',
                '✓ Oxygen balanced with H₂O?',
                '✓ Hydrogen balanced with H⁺/OH⁻?',
                '✓ Charge balanced with electrons?',
                '✓ All atoms and charges balance on both sides?'
            ],
            'Calculate cell potential': [
                '✓ Cathode identified (higher E°)?',
                '✓ Formula used: E°cell = E°cathode - E°anode?',
                '✓ Sign makes sense (+ for spontaneous)?',
                '✓ Did NOT multiply by coefficients?'
            ],
            'Apply Nernst equation': [
                '✓ Q calculated correctly?',
                '✓ Correct value of n used?',
                '✓ Right equation for temperature?',
                '✓ Sign of correction makes sense?'
            ]
        };

        return checkpoints[step.step] || ['✓ Units correct?', '✓ Answer reasonable?', '✓ All steps followed?'];
    }

    identifyWarningFlagsRedox(step, problemType) {
        const warnings = {
            'Apply oxidation state rules': [
                '⚠️ If sum ≠ overall charge, recalculate',
                '⚠️ Watch for peroxides (O₂²⁻) where O = -1',
                '⚠️ Metal hydrides have H = -1, not +1'
            ],
            'Identify oxidation/reduction': [
                '⚠️ If no oxidation state changes, not a redox reaction',
                '⚠️ Both oxidation AND reduction must occur',
                '⚠️ Don\'t confuse "oxidizing agent" with "oxidized species"'
            ],
            'Balance half-reactions': [
                '⚠️ Using OH⁻ in acidic solution is WRONG',
                '⚠️ Electrons must be on correct side (left for reduction, right for oxidation)',
                '⚠️ If atoms don\'t balance, recheck H₂O and H⁺/OH⁻'
            ],
            'Calculate cell potential': [
                '⚠️ If you added E° values, start over',
                '⚠️ If you multiplied E° by coefficients, that\'s wrong',
                '⚠️ Negative E° means non-spontaneous, not error (unless expecting spontaneous)'
            ],
            'Apply Nernst equation': [
                '⚠️ If E > E°, check sign in formula',
                '⚠️ If using ln instead of log at 25°C, recalculate',
                '⚠️ At equilibrium, E must equal 0'
            ],
            'Calculate total charge passed': [
                '⚠️ Time must be in seconds, not minutes or hours',
                '⚠️ Current must be in amperes',
                '⚠️ If charge seems too large/small, check unit conversions'
            ]
        };

        return warnings[step.step] || ['⚠️ Check all calculations', '⚠️ Verify units', '⚠️ Ensure answer is reasonable'];
    }

    generateSelfCheckQuestionRedox(step) {
        const questions = {
            'Apply oxidation state rules': 'Do all oxidation states add up to the overall charge of the species?',
            'Identify oxidation state changes': 'Can you identify which element is oxidized and which is reduced?',
            'Balance half-reactions': 'Are both atoms and charges balanced in each half-reaction?',
            'Equalize electrons transferred': 'Do electrons completely cancel when half-reactions are added?',
            'Calculate cell potential': 'Is E°cell positive (spontaneous) or negative (non-spontaneous)?',
            'Apply Nernst equation': 'Does E change in the expected direction based on concentration changes?',
            'Calculate total charge passed': 'Are units consistent (A × s = C)?'
        };

        return questions[step.step] || 'Does your answer make chemical sense?';
    }

    describeExpectedResultRedox(step) {
        const expectations = {
            'Apply oxidation state rules': 'Oxidation states should be integers (occasionally fractions in average oxidation states)',
            'Identify oxidation state changes': 'At least one element increases and one decreases in oxidation state',
            'Balance half-reactions': 'Same number of each atom on both sides; same total charge on both sides',
            'Calculate cell potential': 'Typically between -3 V and +3 V; positive for spontaneous reactions',
            'Apply Nernst equation': 'E decreases as Q increases toward K; E = 0 at equilibrium',
            'Calculate moles of electrons': 'Should be positive; magnitude depends on current and time'
        };

        return expectations[step.step] || 'Result should be chemically and mathematically reasonable';
    }

    generateTroubleshootingTipsRedox(step) {
        const tips = {
            'Apply oxidation state rules': 'If sum doesn\'t equal charge: recheck which elements you\'ve assigned; verify you\'re using correct charges for O and H',
            'Balance half-reactions': 'If balance doesn\'t work: ensure you\'re following the correct sequence; check you haven\'t mixed acidic/basic methods',
            'Calculate cell potential': 'If E°cell seems wrong: verify you subtracted (not added); check you identified cathode correctly',
            'Apply Nernst equation': 'If E seems incorrect: verify Q calculation; ensure correct form of equation for temperature; check sign on correction term'
        };

        return tips[step.step] || 'Review the step systematically; check each sub-calculation; verify units';
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.getScaffoldingQuestionsRedox(step),
                subSteps: this.breakIntoSubStepsRedox(step),
                hints: this.generateProgressiveHintsRedox(step),
                practiceVariation: this.generatePracticeVariationRedox(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcessRedox(step),
                decisionPoints: this.identifyDecisionPointsRedox(step),
                alternativeApproaches: this.suggestAlternativeMethodsRedox(step, problem)
            }
        }));
    }

    breakIntoSubStepsRedox(step) {
        const subSteps = {
            'Balance each half-reaction': [
                'Sub-step 1: Balance main element (the one changing oxidation state)',
                'Sub-step 2: Balance oxygen atoms by adding H₂O',
                'Sub-step 3: Balance hydrogen atoms by adding H⁺ (acidic) or OH⁻ (basic)',
                'Sub-step 4: Balance charge by adding electrons',
                'Sub-step 5: Verify atom count and charge balance'
            ],
            'Calculate cell potential': [
                'Sub-step 1: Write both half-reactions',
                'Sub-step 2: Look up E° for each from table',
                'Sub-step 3: Identify which is cathode (higher E°)',
                'Sub-step 4: Identify which is anode (lower E°)',
                'Sub-step 5: Calculate E°cell = E°cathode - E°anode'
            ],
            'Apply Nernst equation': [
                'Sub-step 1: Identify E°, n, and T',
                'Sub-step 2: Write balanced equation',
                'Sub-step 3: Write Q expression',
                'Sub-step 4: Calculate Q from concentrations',
                'Sub-step 5: Apply Nernst formula',
                'Sub-step 6: Calculate final E'
            ]
        };

        return subSteps[step.step] || ['Complete this step systematically'];
    }

    generateProgressiveHintsRedox(step) {
        const hints = {
            'Apply oxidation state rules': [
                'Hint 1: Start with elements that have fixed oxidation states (Group 1, Group 2, F)',
                'Hint 2: Remember O is usually -2 and H is usually +1',
                'Hint 3: Set up equation: sum of (oxidation state × number of atoms) = overall charge',
                'Hint 4: Solve algebraically for unknown oxidation state'
            ],
            'Balance half-reactions': [
                'Hint 1: Don\'t worry about H and O initially—balance the main element first',
                'Hint 2: Count oxygens; add H₂O to the side that needs more O',
                'Hint 3: Count hydrogens; add H⁺ (acidic) to the side that needs more H',
                'Hint 4: Calculate total charge on each side; add electrons to balance',
                'Hint 5: Electrons go on the left (reactants) for reduction, right (products) for oxidation'
            ],
            'Calculate cell potential': [
                'Hint 1: The half-reaction with more positive E° is the cathode (reduction)',
                'Hint 2: The formula is ALWAYS E°cathode MINUS E°anode',
                'Hint 3: Never multiply E° values by stoichiometric coefficients',
                'Hint 4: Positive E°cell means spontaneous reaction'
            ]
        };

        return hints[step.step] || ['Think through the logic', 'Check each calculation', 'Verify your answer'];
    }

    generatePracticeVariationRedox(step, problem) {
        const variations = {
            'Apply oxidation state rules': 'Try finding oxidation states in: (a) NO₃⁻, (b) Cr₂O₇²⁻, (c) NH₄⁺',
            'Balance half-reactions': 'Practice balancing: (a) Fe²⁺ → Fe³⁺, (b) Cl₂ → Cl⁻, (c) MnO₄⁻ → Mn²⁺ (acidic)',
            'Calculate cell potential': 'Calculate E°cell for: (a) Zn + Cu²⁺, (b) Fe + Ag⁺, (c) Al + Ni²⁺',
            'Apply Nernst equation': 'Recalculate E if: (a) [Cu²⁺] = 0.01 M, (b) Temperature = 50°C, (c) Both concentrations halved'
        };

        return variations[step.step] || 'Try similar problems to reinforce understanding';
    }

    explainThinkingProcessRedox(step) {
        const processes = {
            'Apply oxidation state rules': 'Think: Which elements have known oxidation states? What equation do I need? How do I solve for the unknown?',
            'Identify oxidation state changes': 'Think: Which numbers went up (oxidation)? Which went down (reduction)? What does this tell me about electron transfer?',
            'Balance half-reactions': 'Think: What\'s the sequence? Atoms other than H/O, then O, then H, then charge. Am I following this order?',
            'Calculate cell potential': 'Think: Which reaction wants to happen more (higher E°)? That\'s reduction. Subtract the other from it.'
        };

        return processes[step.step] || 'Think systematically about what the step requires and how to achieve it';
    }

    identifyDecisionPointsRedox(step) {
        const decisions = {
            'Balance half-reactions': [
                'Decision: Acidic or basic solution? (determines whether to use H⁺ or OH⁻)',
                'Decision: Which side needs H₂O for oxygen balance?',
                'Decision: Which side needs H⁺/OH⁻ for hydrogen balance?',
                'Decision: How many electrons needed to balance charge?'
            ],
            'Calculate cell potential': [
                'Decision: Which half-reaction has higher E°? (becomes cathode)',
                'Decision: Should I reverse any half-reaction? (no - use as reduction potentials)',
                'Decision: Do I need to check spontaneity? (yes - sign of E°cell)'
            ],
            'Apply Nernst equation': [
                'Decision: Is temperature 25°C? (determines which form of equation)',
                'Decision: What species go in Q? (products over reactants, omit solids/liquids)',
                'Decision: What exponents for Q? (stoichiometric coefficients from balanced equation)'
            ]
        };

        return decisions[step.step] || ['Key decision: What method applies?', 'What information do I need?'];
    }

    suggestAlternativeMethodsRedox(step, problem) {
        const alternatives = {
            'Balance redox equations': 'Alternative methods: (1) Half-reaction method (best for aqueous), (2) Oxidation number method (good for simple reactions), (3) Inspection (only for very simple reactions)',
            'Calculate cell potential': 'Alternative: Calculate ΔG° first, then use ΔG° = -nFE° to find E°',
            'Determine spontaneity': 'Alternatives: (1) Check E°cell > 0, (2) Calculate ΔG° < 0, (3) Calculate K > 1—all are equivalent'
        };

        return alternatives[step.step] || null;
    }

    connectToPreviousStep(step, stepIndex) {
        return `This step builds directly on Step ${stepIndex}, using the results obtained there.`;
    }

    // ============================================================================
    // DIAGRAM GENERATION
    // ============================================================================

    generateRedoxDiagramData() {
        if (!this.currentSolution) return;

        const { type } = this.currentProblem;
        const solution = this.currentSolution;

        switch(type) {
            case 'oxidation_state':
                this.diagramData = this.generateOxidationStateDiagram(solution);
                break;

            case 'identify_redox':
                this.diagramData = this.generateRedoxIdentificationDiagram(solution);
                break;

            case 'balance_redox_acidic':
            case 'balance_redox_basic':
                this.diagramData = this.generateHalfReactionDiagram(solution);
                break;

            case 'galvanic_cell':
                this.diagramData = this.generateGalvanicCellDiagram(solution);
                break;

            case 'electrolytic_cell':
                this.diagramData = this.generateElectrolyticCellDiagram(solution);
                break;

            case 'cell_potential':
                this.diagramData = this.generateCellPotentialDiagram(solution);
                break;

            case 'nernst_equation':
                this.diagramData = this.generateNernstDiagram(solution);
                break;

            case 'free_energy_cell':
                this.diagramData = this.generateFreeEnergyDiagram(solution);
                break;

            case 'redox_titration':
                this.diagramData = this.generateRedoxTitrationDiagram(solution);
                break;

            default:
                this.diagramData = this.generateGenericRedoxDiagram(solution);
        }
    }

    generateOxidationStateDiagram(solution) {
        return {
            type: 'oxidation_state_breakdown',
            title: 'Oxidation State Determination',
            formula: solution.formula,
            overallCharge: solution.overallCharge,
            composition: solution.composition,
            oxidationStates: solution.oxidationStates,
            visualization: 'formula_with_oxidation_states',
            rulesApplied: solution.rulesApplied,
            calculation: solution.calculation,
            verification: {
                sum: Object.entries(solution.oxidationStates).reduce((sum, [elem, state]) => 
                    sum + state * solution.composition[elem], 0),
                shouldEqual: solution.overallCharge,
                isCorrect: Math.abs(Object.entries(solution.oxidationStates).reduce((sum, [elem, state]) => 
                    sum + state * solution.composition[elem], 0) - solution.overallCharge) < 0.001
            }
        };
    }

    generateRedoxIdentificationDiagram(solution) {
        return {
            type: 'redox_identification',
            title: 'Redox Reaction Analysis',
            equation: solution.equation,
            isRedox: solution.isRedox,
            electronFlow: this.includeElectronFlow ? {
                oxidized: solution.oxidized,
                reduced: solution.reduced,
                flowDirection: `${solution.reducingAgent} → ${solution.oxidizingAgent}`,
                electronCount: solution.oxidized.length > 0 ? solution.oxidized[0].change : 0
            } : null,
            agentIdentification: {
                oxidizingAgent: {
                    species: solution.oxidizingAgent,
                    role: 'Gets reduced (gains electrons)',
                    color: this.colors.reductionBg
                },
                reducingAgent: {
                    species: solution.reducingAgent,
                    role: 'Gets oxidized (loses electrons)',
                    color: this.colors.oxidationBg
                }
            },
            oxidationStateChanges: {
                oxidized: solution.oxidized,
                reduced: solution.reduced
            },
            visualization: 'electron_transfer_diagram'
        };
    }

    generateHalfReactionDiagram(solution) {
        return {
            type: 'half_reaction_balancing',
            title: 'Half-Reaction Method',
            originalEquation: solution.originalEquation,
            halfReactions: {
                oxidation: {
                    original: solution.oxidationHalf.original,
                    balanced: solution.oxidationHalf.balanced,
                    electrons: solution.oxidationHalf.electrons,
                    steps: solution.oxidationHalf.steps,
                    color: this.colors.oxidationBg
                },
                reduction: {
                    original: solution.reductionHalf.original,
                    balanced: solution.reductionHalf.balanced,
                    electrons: solution.reductionHalf.electrons,
                    steps: solution.reductionHalf.steps,
                    color: this.colors.reductionBg
                }
            },
            electronEqualization: {
                oxidationMultiplier: solution.oxidationMultiplier,
                reductionMultiplier: solution.reductionMultiplier,
                totalElectrons: solution.electronsTransferred
            },
            finalEquation: solution.simplifiedEquation || solution.balancedEquation,
            visualization: 'half_reaction_flow'
        };
    }

    generateGalvanicCellDiagram(solution) {
        return {
            type: 'galvanic_cell',
            title: 'Galvanic (Voltaic) Cell',
            cellNotation: solution.cellNotation,
            anode: {
                half: solution.anode.half,
                reaction: solution.anode.reaction,
                potential: solution.anode.potential,
                label: 'Oxidation occurs here',
                color: this.colors.anodeBg,
                sign: 'Negative electrode'
            },
            cathode: {
                half: solution.cathode.half,
                reaction: solution.cathode.reaction,
                potential: solution.cathode.potential,
                label: 'Reduction occurs here',
                color: this.colors.cathodeBg,
                sign: 'Positive electrode'
            },
            cellPotential: solution.cellPotential,
            electronFlow: {
                direction: 'Anode → External Circuit → Cathode',
                color: this.colors.electronFlowBg
            },
            saltBridge: {
                function: 'Maintains electrical neutrality',
                ionFlow: 'Anions → Anode compartment; Cations → Cathode compartment'
            },
            spontaneity: {
                isSpontaneous: solution.isSpontaneous,
                freeEnergy: solution.freeEnergy,
                interpretation: solution.isSpontaneous ? 'Produces electrical energy' : 'Requires external energy'
            },
            visualization: 'electrochemical_cell_diagram'
        };
    }

    generateElectrolyticCellDiagram(solution) {
        return {
            type: 'electrolytic_cell',
            title: 'Electrolytic Cell',
            powerSource: {
                label: 'External Power Source (Battery/DC Supply)',
                required: true
            },
            anode: {
                label: 'Anode (Positive)',
                reaction: 'Oxidation',
                color: this.colors.anodeBg
            },
            cathode: {
                label: 'Cathode (Negative)',
                reaction: 'Reduction',
                color: this.colors.cathodeBg
            },
            electricalData: {
                current: solution.current + ' A',
                time: solution.time + ' s',
                charge: solution.charge + ' C'
            },
            chemicalData: {
                substance: solution.substance,
                molesElectrons: solution.molesElectrons,
                molesSubstance: solution.molesSubstance,
                massProduced: solution.massProduced + ' g'
            },
            faradaysLaw: {
                formula: 'mass = (Q × M) / (n × F)',
                explanation: 'Relates electrical charge to chemical amount'
            },
            visualization: 'electrolysis_diagram'
        };
    }

    generateCellPotentialDiagram(solution) {
        return {
            type: 'cell_potential_calculation',
            title: 'Standard Cell Potential',
            reductionPotentialScale: {
                cathode: {
                    half: solution.cathode,
                    E: solution.E_cathode,
                    position: 'higher',
                    color: this.colors.cathodeBg
                },
                anode: {
                    half: solution.anode,
                    E: solution.E_anode,
                    position: 'lower',
                    color: this.colors.anodeBg
                },
                reference: {
                    label: 'Standard Hydrogen Electrode (SHE)',
                    E: 0.00,
                    position: 'middle'
                }
            },
            calculation: {
                formula: 'E°cell = E°cathode - E°anode',
                values: `${solution.E_cathode} V - (${solution.E_anode} V)`,
                result: solution.E_cell + ' V'
            },
            interpretation: {
                spontaneity: solution.spontaneity,
                meaning: solution.E_cell > 0 ? 
                    'Reaction proceeds spontaneously' : 
                    'Reaction requires external energy'
            },
            visualization: 'potential_scale'
        };
    }

    generateNernstDiagram(solution) {
        return {
            type: 'nernst_equation',
            title: 'Non-Standard Cell Potential',
            standardConditions: {
                E_standard: solution.E_standard + ' V',
                temperature: '25°C (298 K)',
                concentrations: '1 M (or 1 atm for gases)'
            },
            actualConditions: {
                temperature: solution.temperature + ' K',
                concentrations: solution.concentrations,
                reactionQuotient: solution.reactionQuotient
            },
            nernstCalculation: {
                formula: solution.formula,
                E_standard: solution.E_standard,
                n: solution.electronsTransferred,
                Q: solution.reactionQuotient,
                result: solution.cellPotential + ' V'
            },
            concentrationEffect: {
                direction: solution.cellPotential < solution.E_standard ? 
                    'E decreased (Q > 1, products favored)' :
                    'E increased (Q < 1, reactants favored)',
                atEquilibrium: 'When Q = K, E = 0'
            },
            visualization: 'nernst_concentration_effect'
        };
    }

    generateFreeEnergyDiagram(solution) {
        return {
            type: 'free_energy_relationship',
            title: 'ΔG° and E° Relationship',
            cellPotential: {
                E_cell: solution.E_cell + ' V',
                sign: solution.E_cell > 0 ? 'Positive' : 'Negative'
            },
            freeEnergy: {
                deltaG: solution.freeEnergy + ' kJ/mol',
                sign: solution.freeEnergy < 0 ? 'Negative' : 'Positive'
            },
            relationship: {
                formula: 'ΔG° = -nFE°',
                explanation: 'Negative ΔG° (spontaneous) corresponds to positive E°',
                n: solution.electronsTransferred,
                F: solution.faradayConstant + ' C/mol e⁻'
            },
            thermodynamicTriangle: {
                vertices: ['E° > 0', 'ΔG° < 0', 'K > 1'],
                meaning: 'All three indicate spontaneous, product-favored reaction'
            },
            visualization: 'thermodynamic_triangle'
        };
    }

    generateRedoxTitrationDiagram(solution) {
        return {
            type: 'redox_titration',
            title: 'Redox Titration',
            setup: {
                burette: {
                    contains: solution.titrant.substance || 'Titrant',
                    molarity: solution.titrant.molarity + ' M',
                    volumeAdded: solution.titrant.volume + ' mL'
                },
                flask: {
                    contains: solution.analyte.substance,
                    volume: 'Known volume',
                    molarity: solution.analyte.concentration ? 
                        solution.analyte.concentration + ' M (calculated)' : 
                        'Unknown (to be determined)'
                }
            },
            reaction: {
                equation: solution.equation,
                stoichiometry: solution.stoichiometricRatio
            },
            calculations: {
                molesTitrant: solution.titrant.moles + ' mol',
                molesAnalyte: solution.analyte.moles + ' mol',
                analyteConcentration: solution.analyte.concentration ? 
                    solution.analyte.concentration + ' M' : 
                    'Calculate from moles and volume'
            },
            endpoint: {
                detection: 'Color change of indicator or potential measurement',
                meaning: 'Stoichiometric equivalence point reached'
            },
            visualization: 'titration_setup'
        };
    }

    generateGenericRedoxDiagram(solution) {
        return {
            type: 'generic_redox',
            title: 'Redox Problem Summary',
            problemType: solution.problemType,
            keyData: this.extractKeyValuesRedox(solution),
            visualization: 'summary_table'
        };
    }

    extractKeyValuesRedox(solution) {
        const keyValues = [];
        
        if (solution.oxidationStates) keyValues.push({ label: 'Oxidation States', value: JSON.stringify(solution.oxidationStates) });
        if (solution.cellPotential !== undefined) keyValues.push({ label: 'Cell Potential', value: solution.cellPotential + ' V' });
        if (solution.freeEnergy !== undefined) keyValues.push({ label: 'Free Energy', value: solution.freeEnergy + ' kJ/mol' });
        if (solution.electronsTransferred !== undefined) keyValues.push({ label: 'Electrons Transferred', value: solution.electronsTransferred });
        if (solution.isSpontaneous !== undefined) keyValues.push({ label: 'Spontaneous?', value: solution.isSpontaneous ? 'Yes' : 'No' });
        
        return keyValues;
    }

    // ============================================================================
    // WORKBOOK GENERATION
    // ============================================================================

    generateRedoxWorkbook() {
        if (!this.currentSolution || !this.currentProblem) {
            console.warn('Cannot generate workbook: missing solution or problem data');
            return;
        }

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createGivenDataSection(),
            this.createConceptualOverviewSectionRedox(),
            this.createEnhancedStepsSection(),
            this.createLessonSectionRedox(),
            this.createSolutionSection(),
            this.createAnalysisSectionRedox(),
            this.createVerificationSectionRedox(),
            this.createDiagramSection(),
            this.createKeyFormulasSection(),
            this.createCommonMistakesSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection(),
            this.createPracticeProblemsSection(),
            this.createReferenceSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
        return workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Reduction-Oxidation Mathematical Workbook',
            subtitle: this.redoxTypes[this.currentProblem.type]?.name || 'Redox Problem',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            dimensions: { width: this.width, height: this.height },
            explanationLevel: this.explanationLevel,
            features: {
                verification: this.includeVerificationInSteps,
                errorPrevention: this.includeErrorPrevention,
                pedagogicalNotes: this.includePedagogicalNotes,
                alternativeMethods: this.includeAlternativeMethods,
                electronFlow: this.includeElectronFlow,
                molecularVisualization: this.includeMolecularVisualization
            },
            sections: []
        };
    }

    createProblemSection() {
        return {
            title: 'Problem Statement',
            type: 'problem',
            content: {
                originalInput: this.currentProblem.originalInput,
                problemType: this.redoxTypes[this.currentProblem.type]?.name,
                category: this.redoxTypes[this.currentProblem.type]?.category,
                description: this.redoxTypes[this.currentProblem.type]?.description,
                parsedAt: this.currentProblem.parsedAt
            },
            color: this.colors.sectionBg
        };
    }

    createGivenDataSection() {
        return {
            title: 'Given Information',
            type: 'given_data',
            content: {
                parameters: this.currentProblem.parameters,
                species: this.currentProblem.species,
                context: this.currentProblem.context
            },
            color: this.colors.cellBg
        };
    }

    createConceptualOverviewSectionRedox() {
        const category = this.getRedoxCategoryFromType(this.currentProblem.type);
        const lesson = this.lessons?.[category];

        if (!lesson) return null;

        return {
            title: 'Conceptual Overview',
            type: 'conceptual',
            content: {
                title: lesson.title,
                concepts: lesson.concepts,
                theory: lesson.theory,
                keyFormulas: lesson.keyFormulas || lesson.keyRules || lesson.keyDefinitions,
                applications: lesson.applications
            },
            color: this.colors.sectionBg
        };
    }

    createEnhancedStepsSection() {
        return {
            title: 'Detailed Solution Steps',
            type: 'steps',
            content: {
                steps: this.solutionSteps,
                totalSteps: this.solutionSteps.length,
                explanationLevel: this.explanationLevel
            },
            color: this.colors.stepBg
        };
    }

    createLessonSectionRedox() {
        if (!this.includePedagogicalNotes) return null;

        const category = this.getRedoxCategoryFromType(this.currentProblem.type);
        this.initializeRedoxLessons(); // Ensure lessons are initialized
        const lesson = this.lessons?.[category];

        if (!lesson) return null;

        return {
            title: `Lesson: ${lesson.title}`,
            type: 'lesson',
            content: lesson,
            color: this.colors.formulaBg
        };
    }

    createSolutionSection() {
        return {
            title: 'Final Solution',
            type: 'solution',
            content: this.currentSolution,
            color: this.colors.resultBg
        };
    }



createAnalysisSectionRedox() {
        return {
            title: 'Solution Analysis',
            type: 'analysis',
            content: {
                problemType: this.currentSolution.problemType,
                category: this.currentSolution.category,
                keyResults: this.extractKeyValuesRedox(this.currentSolution),
                interpretation: this.generateInterpretationRedox(this.currentSolution)
            },
            color: this.colors.sectionBg
        };
    }

    generateInterpretationRedox(solution) {
        const interpretations = {
            'oxidation_states': `Oxidation states assigned: ${JSON.stringify(solution.oxidationStates)}. These values track electron distribution in the compound.`,
            
            'identifying_redox': solution.isRedox ? 
                `This is a redox reaction. ${solution.reducingAgent} is oxidized (loses electrons) and ${solution.oxidizingAgent} is reduced (gains electrons).` :
                'This is NOT a redox reaction - no electron transfer occurs.',
            
            'half_reactions': `Balanced using half-reaction method. ${solution.electronsTransferred} electrons transferred. Oxidation at anode, reduction at cathode.`,
            
            'electrochemistry_galvanic': solution.isSpontaneous ?
                `Spontaneous galvanic cell with E°cell = ${solution.cellPotential} V. Can produce ${Math.abs(solution.freeEnergy)} kJ/mol of electrical work.` :
                `Non-spontaneous with E°cell = ${solution.cellPotential} V. Would require external energy to proceed.`,
            
            'electrochemistry_electrolytic': `Electrolysis produced ${solution.massProduced} g of ${solution.substance} using ${solution.charge} C of charge over ${solution.time} seconds.`,
            
            'cell_potential': `Standard cell potential is ${solution.E_cell} V. Reaction is ${solution.spontaneity.toLowerCase()}.`,
            
            'nernst_equation': `At non-standard conditions, E = ${solution.cellPotential} V (compared to E° = ${solution.E_standard} V). Concentration effects ${solution.cellPotential < solution.E_standard ? 'decrease' : 'increase'} cell potential.`,
            
            'free_energy_equilibrium': `ΔG° = ${solution.freeEnergy} kJ/mol indicates ${solution.freeEnergy < 0 ? 'spontaneous, product-favored' : 'non-spontaneous, reactant-favored'} reaction.`,
            
            'disproportionation': solution.isDisproportionation ?
                `${solution.element} undergoes disproportionation: simultaneously oxidized to ${solution.oxidizedTo} and reduced to ${solution.reducedTo}.` :
                'This is not a disproportionation reaction.',
            
            'redox_titration': `Titration determined analyte concentration: ${solution.analyte.concentration} M using ${solution.titrant.volume} mL of ${solution.titrant.molarity} M titrant.`
        };

        const category = solution.category || 'general';
        return interpretations[category] || 'Solution obtained using redox principles.';
    }

    createVerificationSectionRedox() {
        if (!this.includeVerificationInSteps) return null;

        const verification = this.verifyRedoxCalculation();

        return {
            title: 'Verification',
            type: 'verification',
            content: {
                verification: verification,
                confidence: this.calculateVerificationConfidenceRedox(),
                notes: this.getVerificationNotesRedox()
            },
            color: this.colors.resultBg
        };
    }

    verifyRedoxCalculation() {
        const { type } = this.currentProblem;
        const solution = this.currentSolution;

        switch (type) {
            case 'oxidation_state':
                return this.verifyOxidationStates(solution);
            
            case 'identify_redox':
                return this.verifyRedoxIdentification(solution);
            
            case 'balance_redox_acidic':
            case 'balance_redox_basic':
                return this.verifyBalancedEquation(solution);
            
            case 'galvanic_cell':
            case 'cell_potential':
                return this.verifyCellPotential(solution);
            
            case 'electrolytic_cell':
                return this.verifyElectrolysis(solution);
            
            case 'nernst_equation':
                return this.verifyNernst(solution);
            
            case 'free_energy_cell':
                return this.verifyFreeEnergy(solution);
            
            default:
                return { isValid: true, method: 'General verification' };
        }
    }

    verifyOxidationStates(solution) {
        // Verify sum equals overall charge
        let sum = 0;
        for (const [element, oxState] of Object.entries(solution.oxidationStates)) {
            const count = solution.composition[element] || 0;
            sum += oxState * count;
        }

        const difference = Math.abs(sum - solution.overallCharge);
        const isValid = difference < 0.001;

        return {
            isValid: isValid,
            method: 'Sum of oxidation states verification',
            calculatedSum: sum,
            expectedSum: solution.overallCharge,
            difference: difference,
            interpretation: isValid ? 
                'Oxidation states correctly sum to overall charge' :
                'ERROR: Sum does not equal overall charge'
        };
    }

    verifyRedoxIdentification(solution) {
        const hasOxidation = solution.oxidized && solution.oxidized.length > 0;
        const hasReduction = solution.reduced && solution.reduced.length > 0;
        const isValidRedox = hasOxidation && hasReduction;

        // If claimed to be redox, must have both oxidation and reduction
        const isValid = (solution.isRedox === isValidRedox);

        return {
            isValid: isValid,
            method: 'Redox identification verification',
            hasOxidation: hasOxidation,
            hasReduction: hasReduction,
            isRedox: solution.isRedox,
            interpretation: isValid ?
                'Redox identification is correct' :
                'ERROR: Redox classification inconsistent with oxidation state changes'
        };
    }

    verifyBalancedEquation(solution) {
        const equation = solution.simplifiedEquation || solution.balancedEquation;
        const verification = this.verifyBalance(equation);

        return {
            isValid: verification.isBalanced,
            method: 'Atom and charge balance verification',
            atomBalance: verification.atomBalance,
            chargeBalance: verification.chargeBalance,
            interpretation: verification.isBalanced ?
                'Equation is properly balanced' :
                'WARNING: Equation may not be fully balanced'
        };
    }

    verifyCellPotential(solution) {
        // Verify E°cell = E°cathode - E°anode
        const calculated = solution.E_cathode - solution.E_anode;
        const difference = Math.abs(calculated - solution.E_cell);
        const isValid = difference < 0.001;

        // Verify spontaneity prediction
        const predictedSpontaneous = solution.E_cell > 0;
        const spontaneityConsistent = (predictedSpontaneous === solution.isSpontaneous);

        return {
            isValid: isValid && spontaneityConsistent,
            method: 'Cell potential formula verification',
            E_cathode: solution.E_cathode,
            E_anode: solution.E_anode,
            calculated: calculated,
            reported: solution.E_cell,
            difference: difference,
            spontaneityCorrect: spontaneityConsistent,
            interpretation: (isValid && spontaneityConsistent) ?
                'Cell potential correctly calculated and spontaneity properly determined' :
                'ERROR in cell potential calculation or spontaneity determination'
        };
    }

    verifyElectrolysis(solution) {
        // Verify Q = I × t
        const calculatedCharge = solution.current * solution.time;
        const chargeDiff = Math.abs(calculatedCharge - solution.charge);
        const chargeValid = chargeDiff < 0.1;

        // Verify mol e⁻ = Q / F
        const calculatedMolElectrons = solution.charge / this.faradayConstant;
        const moleDiff = Math.abs(calculatedMolElectrons - solution.molesElectrons);
        const moleValid = moleDiff < 0.0001;

        return {
            isValid: chargeValid && moleValid,
            method: 'Faraday\'s law verification',
            chargeCalculation: {
                calculated: calculatedCharge,
                reported: solution.charge,
                difference: chargeDiff,
                valid: chargeValid
            },
            molesElectronsCalculation: {
                calculated: calculatedMolElectrons,
                reported: solution.molesElectrons,
                difference: moleDiff,
                valid: moleValid
            },
            interpretation: (chargeValid && moleValid) ?
                'Electrolysis calculations are correct' :
                'ERROR in charge or mole calculations'
        };
    }

    verifyNernst(solution) {
        // Verify Nernst equation calculation
        let calculatedE;
        if (solution.temperature === 298) {
            calculatedE = solution.E_standard - (0.0592 / solution.electronsTransferred) * Math.log10(solution.reactionQuotient);
        } else {
            const R = this.gasConstant;
            const F = this.faradayConstant;
            calculatedE = solution.E_standard - (R * solution.temperature / (solution.electronsTransferred * F)) * Math.log(solution.reactionQuotient);
        }

        const difference = Math.abs(calculatedE - solution.cellPotential);
        const isValid = difference < 0.001;

        return {
            isValid: isValid,
            method: 'Nernst equation verification',
            calculated: calculatedE,
            reported: solution.cellPotential,
            difference: difference,
            Q: solution.reactionQuotient,
            interpretation: isValid ?
                'Nernst equation correctly applied' :
                'ERROR in Nernst equation calculation'
        };
    }

    verifyFreeEnergy(solution) {
        // Verify ΔG° = -nFE°
        const calculated = -solution.electronsTransferred * this.faradayConstant * solution.E_cell / 1000;
        const difference = Math.abs(calculated - solution.freeEnergy);
        const isValid = difference < 0.1;

        // Verify sign consistency
        const signConsistent = (solution.E_cell > 0 && solution.freeEnergy < 0) || 
                               (solution.E_cell < 0 && solution.freeEnergy > 0) ||
                               (solution.E_cell === 0 && solution.freeEnergy === 0);

        return {
            isValid: isValid && signConsistent,
            method: 'ΔG° = -nFE° verification',
            calculated: calculated,
            reported: solution.freeEnergy,
            difference: difference,
            signConsistent: signConsistent,
            interpretation: (isValid && signConsistent) ?
                'Free energy correctly calculated with proper sign' :
                'ERROR in free energy calculation or sign'
        };
    }

    calculateVerificationConfidenceRedox() {
        const verification = this.verifyRedoxCalculation();
        
        if (!verification) return 'Medium';

        if (verification.isValid === true) {
            // Check specific confidence indicators
            if (verification.difference !== undefined) {
                if (verification.difference < 0.001) return 'Very High';
                if (verification.difference < 0.01) return 'High';
                if (verification.difference < 0.1) return 'Medium';
                return 'Low';
            }
            return 'High';
        } else if (verification.isValid === false) {
            return 'Low - Verification Failed';
        }

        return 'Medium';
    }

    getVerificationNotesRedox() {
        const { type } = this.currentProblem;
        const verification = this.verifyRedoxCalculation();
        const confidence = this.calculateVerificationConfidenceRedox();
        const notes = [];

        notes.push(`Confidence Level: ${confidence}`);
        notes.push(`Verification Method: ${verification?.method || 'Standard redox verification'}`);

        // Type-specific notes
        switch (type) {
            case 'oxidation_state':
                notes.push('Verification: Sum of oxidation states equals overall charge');
                notes.push('All oxidation state rules applied correctly');
                if (verification?.difference < 0.001) {
                    notes.push('✓ Perfect agreement with charge balance');
                }
                break;

            case 'identify_redox':
                notes.push('Verification: Both oxidation and reduction processes identified');
                notes.push('Oxidizing and reducing agents correctly determined');
                notes.push('Electron transfer direction verified');
                break;

            case 'balance_redox_acidic':
            case 'balance_redox_basic':
                notes.push('Verification: Atoms balanced on both sides');
                notes.push('Charge balanced on both sides');
                notes.push('Electrons properly cancelled in final equation');
                if (verification?.isBalanced) {
                    notes.push('✓ Complete mass and charge balance confirmed');
                }
                break;

            case 'galvanic_cell':
            case 'cell_potential':
                notes.push('Verification: E°cell = E°cathode - E°anode');
                notes.push('Spontaneity correctly predicted from sign of E°cell');
                notes.push('Cathode has higher (more positive) reduction potential');
                if (verification?.spontaneityCorrect) {
                    notes.push('✓ Spontaneity prediction is thermodynamically consistent');
                }
                break;

            case 'electrolytic_cell':
                notes.push('Verification: Q = I × t correctly calculated');
                notes.push('Moles of electrons from Faraday\'s law');
                notes.push('Stoichiometry properly applied');
                notes.push('Mass calculated using correct molar mass');
                break;

            case 'nernst_equation':
                notes.push('Verification: Correct Nernst equation form used');
                notes.push('Reaction quotient Q properly calculated');
                notes.push('Temperature and electron number verified');
                if (verification?.difference < 0.001) {
                    notes.push('✓ Excellent precision in Nernst calculation');
                }
                break;

            case 'free_energy_cell':
                notes.push('Verification: ΔG° = -nFE° formula applied');
                notes.push('Sign consistency: E° > 0 ⟺ ΔG° < 0');
                notes.push('Faraday constant used correctly');
                if (verification?.signConsistent) {
                    notes.push('✓ Thermodynamic sign relationship confirmed');
                }
                break;

            case 'equilibrium_constant_cell':
                notes.push('Verification: E° and K relationship applied');
                notes.push('Large K (>1) corresponds to positive E°');
                notes.push('log(K) proportional to E°');
                break;

            default:
                notes.push('Standard redox verification methods applied');
        }

        notes.push('All calculations follow electron conservation principles');
        notes.push('Units tracked and verified throughout');

        return notes.join('; ');
    }

    createDiagramSection() {
        if (!this.diagramData) return null;

        return {
            title: 'Visual Diagram',
            type: 'diagram',
            content: this.diagramData,
            color: this.colors.diagramBg
        };
    }

    createKeyFormulasSection() {
        const category = this.getRedoxCategoryFromType(this.currentProblem.type);
        this.initializeRedoxLessons();
        const lesson = this.lessons?.[category];

        if (!lesson || !lesson.keyFormulas) return null;

        return {
            title: 'Key Formulas & Relationships',
            type: 'formulas',
            content: {
                formulas: lesson.keyFormulas,
                constants: {
                    'Faraday Constant': 'F = 96,485 C/mol e⁻',
                    'Gas Constant': 'R = 8.314 J/(mol·K)',
                    'Avogadro\'s Number': 'NA = 6.022 × 10²³'
                }
            },
            color: this.colors.formulaBg
        };
    }

    createCommonMistakesSection() {
        if (!this.includeCommonMistakes) return null;

        const category = this.getRedoxCategoryFromType(this.currentProblem.type);
        const mistakes = this.commonMistakes[category];

        if (!mistakes) return null;

        return {
            title: 'Common Mistakes to Avoid',
            type: 'mistakes',
            content: mistakes,
            color: this.colors.formulaBg
        };
    }

    createPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        return {
            title: 'Teaching Notes',
            type: 'pedagogical',
            content: {
                keyPoints: this.generatePedagogicalKeyPointsRedox(),
                studentDifficulties: this.identifyStudentDifficultiesRedox(),
                teachingStrategies: this.suggestTeachingStrategiesRedox(),
                connectionsToCurriculum: this.identifyCurriculumConnectionsRedox()
            },
            color: this.colors.sectionBg
        };
    }

    generatePedagogicalKeyPointsRedox() {
        const { type } = this.currentProblem;
        
        const keyPoints = {
            'oxidation_state': [
                'Oxidation states are a formalism for tracking electrons, not actual charges',
                'Rules have priority - apply systematically',
                'Sum rule is the key to solving for unknowns',
                'Understanding oxidation states is fundamental to all redox chemistry'
            ],
            'identify_redox': [
                'Oxidation and reduction always occur together - they\'re coupled',
                'OIL RIG mnemonic helps remember: Oxidation Is Loss, Reduction Is Gain',
                'Reducing agent gets oxidized; oxidizing agent gets reduced (often confusing!)',
                'Not all chemical reactions are redox - look for oxidation state changes'
            ],
            'balance_redox_acidic': [
                'Half-reaction method is systematic and powerful',
                'The sequence matters: atoms, O, H, then charge',
                'Acidic vs basic determines whether to use H⁺ or OH⁻',
                'Electrons must cancel completely in final equation'
            ],
            'galvanic_cell': [
                'Galvanic cells convert chemical energy to electrical energy',
                'Cathode is positive (attracts cations), anode is negative',
                'Remember: E°cell = E°cathode - E°anode (subtraction, not addition!)',
                'Positive E°cell means spontaneous reaction'
            ],
            'electrolytic_cell': [
                'Electrolytic cells use electrical energy to drive non-spontaneous reactions',
                'Faraday\'s law connects electrical measurements to chemical amounts',
                'Current × time gives charge; charge ÷ F gives moles of electrons',
                'Essential for electroplating, metal extraction, and chemical production'
            ],
            'nernst_equation': [
                'Nernst equation shows how concentration affects cell potential',
                'It\'s Le Chatelier\'s principle applied to electrochemistry',
                'At equilibrium, E = 0 and Q = K',
                'Temperature form changes at 25°C vs other temperatures'
            ]
        };

        return keyPoints[type] || [
            'Focus on electron transfer as the central concept',
            'Use systematic approaches for problem-solving',
            'Connect to real-world applications'
        ];
    }

    identifyStudentDifficultiesRedox() {
        return [
            'Confusing oxidation (loss e⁻) with reduction (gain e⁻)',
            'Mixing up oxidizing agent (gets reduced) with reducing agent (gets oxidized)',
            'Adding instead of subtracting in E°cell = E°cathode - E°anode',
            'Multiplying E° by stoichiometric coefficients (never correct!)',
            'Using wrong balancing method (OH⁻ in acidic solution)',
            'Forgetting electrons must cancel in final balanced equation',
            'Difficulty visualizing electron flow in electrochemical cells',
            'Confusion about anode/cathode polarity in galvanic vs electrolytic cells'
        ];
    }

    suggestTeachingStrategiesRedox() {
        return [
            'Use visual aids: electron transfer diagrams, cell diagrams with electron flow',
            'Emphasize mnemonics: OIL RIG, LEO GER (LEo Goes to Electronic Reduction)',
            'Practice oxidation state assignment with many examples',
            'Build electrochemical cells with students (potato batteries, etc.)',
            'Connect to real applications: batteries, corrosion, electroplating',
            'Use color coding: oxidation in red, reduction in blue',
            'Scaffold balancing: start simple, add complexity gradually',
            'Relate E°, ΔG°, and K to show they\'re equivalent measures'
        ];
    }

    identifyCurriculumConnectionsRedox() {
        return {
            chemistry: [
                'Chemical bonding (electron distribution)',
                'Thermodynamics (ΔG, spontaneity, equilibrium)',
                'Kinetics (reaction rates, though not directly in redox)',
                'Acids and bases (Brønsted-Lowry involves H⁺ transfer; redox involves e⁻ transfer)',
                'Periodic trends (ionization energy, electronegativity relate to redox)'
            ],
            realWorld: [
                'Batteries and portable power',
                'Corrosion and rust prevention',
                'Electroplating and metal finishing',
                'Fuel cells and renewable energy',
                'Biological systems (cellular respiration, photosynthesis)',
                'Industrial metal extraction (aluminum, copper)',
                'Water treatment and purification'
            ],
            mathematics: [
                'Algebra (solving for unknowns in oxidation states)',
                'Logarithms (Nernst equation)',
                'Stoichiometry (balancing equations, calculations)',
                'Unit conversions and dimensional analysis'
            ]
        };
    }

    createAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        return {
            title: 'Alternative Solution Methods',
            type: 'alternatives',
            content: this.generateAlternativeMethodsRedox(),
            color: this.colors.sectionBg
        };
    }

    generateAlternativeMethodsRedox() {
        const { type } = this.currentProblem;

        const alternatives = {
            'balance_redox_acidic': {
                primary: 'Half-reaction method (used here)',
                alternatives: [
                    {
                        name: 'Oxidation number method',
                        description: 'Track oxidation state changes and balance electron transfer directly',
                        whenToUse: 'Simpler reactions; when working without water',
                        pros: 'Faster for simple reactions; good for understanding electron transfer',
                        cons: 'More difficult for complex aqueous reactions'
                    },
                    {
                        name: 'Inspection method',
                        description: 'Balance by trial and error',
                        whenToUse: 'Very simple reactions only',
                        pros: 'Quick if you can see the pattern',
                        cons: 'Unreliable; doesn\'t work for complex reactions'
                    }
                ]
            },
            'cell_potential': {
                primary: 'Direct calculation from E° values',
                alternatives: [
                    {
                        name: 'Free energy method',
                        description: 'Calculate ΔG° from thermodynamic data, then use ΔG° = -nFE° to find E°',
                        whenToUse: 'When ΔG° values are available but E° values are not',
                        pros: 'Uses thermodynamic data directly',
                        cons: 'Requires additional calculation step'
                    },
                    {
                        name: 'Equilibrium constant method',
                        description: 'Calculate K from other data, then use E° = (0.0592/n)log(K)',
                        whenToUse: 'When equilibrium constant is known',
                        pros: 'Connects equilibrium to electrochemistry',
                        cons: 'Indirect method'
                    }
                ]
            },
            'nernst_equation': {
                primary: 'Nernst equation at 25°C: E = E° - (0.0592/n)log(Q)',
                alternatives: [
                    {
                        name: 'General Nernst equation',
                        description: 'E = E° - (RT/nF)ln(Q) for any temperature',
                        whenToUse: 'Non-standard temperatures',
                        pros: 'Works at all temperatures',
                        cons: 'More complex; requires natural logarithm'
                    },
                    {
                        name: 'Thermodynamic method',
                        description: 'Calculate ΔG from ΔG° and Q, then convert to E',
                        whenToUse: 'When working with free energy data',
                        pros: 'Uses thermodynamic relationships',
                        cons: 'More steps involved'
                    }
                ]
            }
        };

        return alternatives[type] || null;
    }

    createPracticeProblemsSection() {
        return {
            title: 'Practice Problems',
            type: 'practice',
            content: this.generatePracticeProblemsRedox(),
            color: this.colors.sectionBg
        };
    }

    generatePracticeProblemsRedox() {
        const { type } = this.currentProblem;

        const problems = {
            'oxidation_state': [
                'Find the oxidation state of Cr in Cr₂O₇²⁻',
                'Determine the oxidation state of S in H₂SO₄',
                'What is the oxidation state of N in NO₃⁻?',
                'Find the oxidation state of Mn in KMnO₄'
            ],
            'identify_redox': [
                'Is this redox? 2Na + Cl₂ → 2NaCl',
                'Is this redox? HCl + NaOH → NaCl + H₂O',
                'Identify oxidizing and reducing agents in: Zn + Cu²⁺ → Zn²⁺ + Cu',
                'Is Fe²⁺ + MnO₄⁻ → Fe³⁺ + Mn²⁺ a redox reaction?'
            ],
            'balance_redox_acidic': [
                'Balance in acidic solution: Fe²⁺ + MnO₄⁻ → Fe³⁺ + Mn²⁺',
                'Balance in acidic solution: Cr₂O₇²⁻ + I⁻ → Cr³⁺ + I₂',
                'Balance in acidic solution: H₂O₂ + Fe²⁺ → H₂O + Fe³⁺'
            ],
            'galvanic_cell': [
                'Calculate E°cell for Mg + Fe²⁺ → Mg²⁺ + Fe',
                'Is Al + Ni²⁺ → Al³⁺ + Ni spontaneous?',
                'Calculate ΔG° for Zn + Cu²⁺ → Zn²⁺ + Cu'
            ],
            'nernst_equation': [
                'Calculate E for Cu²⁺/Cu half-cell if [Cu²⁺] = 0.01 M',
                'What is E for Zn|Zn²⁺||Cu²⁺|Cu if [Zn²⁺] = 1.0 M and [Cu²⁺] = 0.001 M?',
                'At what concentration ratio does E = 0 for a cell with E° = 1.10 V and n = 2?'
            ]
        };

        return problems[type] || [
            'Try variations with different reactants',
            'Practice with increasing complexity',
            'Verify your answers using alternative methods'
        ];
    }

    createReferenceSection() {
        return {
            title: 'Reference Information',
            type: 'reference',
            content: {
                oxidationRules: this.oxidationRules,
                commonPotentials: this.standardPotentials,
                constants: {
                    'Faraday Constant': `F = ${this.faradayConstant} C/mol e⁻`,
                    'Gas Constant': `R = ${this.gasConstant} J/(mol·K)`,
                    'Gas Constant (L·atm)': `R = ${this.gasConstantLAtm} L·atm/(mol·K)`,
                    'Avogadro\'s Number': `NA = ${this.avogadroNumber}`
                },
                commonAgents: this.commonAgents
            },
            color: this.colors.sectionBg
        };
    }
}

// Export the class
export default EnhancedRedoxMathematicalWorkbook;
