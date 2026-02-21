Here is the full implementation directly in the response:
import { createCanvas, loadImage } from '@napi-rs/canvas';
import { ChemistrySvgDiagrams } from '../svg-data.js';
import { ChemistryDiagramsRegistry } from '../registry.js';
import { ChemistryDiagramsRenderer } from '../renderer.js';
import * as math from 'mathjs';

export class EnhancedRedoxChemistryWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || 'redox';
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

        this.diagramRenderer = new ChemistryDiagramsRenderer();
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

        this.redoxSymbols = this.initializeRedoxSymbols();
        this.setThemeColors();
        this.initializeRedoxTopics();
        this.initializeRedoxLessons();
        this.initializeRedoxExperiments();
        this.initializeMisconceptionDatabase();
        this.initializeMetacognitivePrompts();
        this.initializeContextualScenarios();
        this.initializeAssessmentRubrics();
    }

    setThemeColors() {
        const themes = {
            redox: {
                background: '#ffffff',
                gridColor: '#b0b0b0',
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
                stepBg: '#e8eaf6',
                stepText: '#283593',
                borderColor: '#42a5f5',
                contentBg: '#f3f4ff',
                contentText: '#1a237e',
                diagramBg: '#fce4ec',
                structureBg: '#e0f2f1',
                experimentBg: '#fff9c4',
                experimentText: '#f57f17',
                oxidationBg: '#ffebee',
                reductionBg: '#e8f5e9',
                electrolysissBg: '#e3f2fd',
                electrochemBg: '#f3e5f5',
                titrationBg: '#e0f7fa',
                corrosionBg: '#fff8e1'
            },
            electrochemistry: {
                background: '#fafafa',
                gridColor: '#9e9e9e',
                headerBg: '#6a1b9a',
                headerText: '#ffffff',
                sectionBg: '#e1bee7',
                sectionText: '#4a148c',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#f3e5f5',
                resultText: '#6a1b9a',
                definitionBg: '#fff8e1',
                definitionText: '#f57f17',
                stepBg: '#fce4ec',
                stepText: '#880e4f',
                borderColor: '#ab47bc',
                contentBg: '#f8f0ff',
                contentText: '#4a148c',
                diagramBg: '#e8f5e9',
                structureBg: '#e3f2fd',
                experimentBg: '#fffde7',
                experimentText: '#f57f17',
                oxidationBg: '#ffebee',
                reductionBg: '#e8f5e9',
                electrolysissBg: '#e3f2fd',
                electrochemBg: '#f3e5f5',
                titrationBg: '#e0f7fa',
                corrosionBg: '#fff8e1'
            }
        };

        this.colors = themes[this.theme] || themes.redox;
    }

    initializeRedoxSymbols() {
        return {
            // Greek letters
            'alpha': 'α',
            'beta': 'β',
            'delta': 'Δ',
            'Delta': 'Δ',
            'lambda': 'λ',
            'mu': 'μ',
            'phi': 'φ',
            'eta': 'η',
            'theta': 'θ',

            // Arrows
            'arrow': '→',
            'reversible': '⇌',
            'doubleArrow': '↔',
            'electronFlow': '→',
            'curvedArrow': '⟳',

            // Math/Chemistry symbols
            'plus': '+',
            'minus': '−',
            'plusminus': '±',
            'approximately': '≈',
            'degree': '°',
            'standard': '°',

            // Charge symbols
            'cation': '⁺',
            'anion': '⁻',
            'electron': 'e⁻',
            'proton': 'H⁺',

            // Electrochemistry symbols
            'EMF': 'E°',
            'cell_potential': 'Ecell',
            'standard_potential': 'E°cell',
            'reduction_potential': 'E°red',
            'oxidation_potential': 'E°ox',
            'Faraday': 'F',
            'Gibbs': 'ΔG°',

            // Common redox species (oxidized forms)
            'MnO4_minus': 'MnO₄⁻',
            'Cr2O7_2minus': 'Cr₂O₇²⁻',
            'H2O2': 'H₂O₂',
            'Fe3': 'Fe³⁺',
            'Fe2': 'Fe²⁺',
            'Cu2': 'Cu²⁺',
            'Zn2': 'Zn²⁺',
            'Ag': 'Ag⁺',
            'Cl2': 'Cl₂',
            'Br2': 'Br₂',
            'I2': 'I₂',
            'O2': 'O₂',
            'F2': 'F₂',

            // Common reduced forms
            'Mn2': 'Mn²⁺',
            'Cr3': 'Cr³⁺',
            'Cu': 'Cu',
            'Zn': 'Zn',
            'Fe': 'Fe',
            'H2': 'H₂',
            'Cl_minus': 'Cl⁻',
            'Br_minus': 'Br⁻',
            'I_minus': 'I⁻',
            'OH_minus': 'OH⁻',

            // Common reagents
            'H2SO4': 'H₂SO₄',
            'HCl': 'HCl',
            'HNO3': 'HNO₃',
            'NaOH': 'NaOH',
            'KMnO4': 'KMnO₄',
            'K2Cr2O7': 'K₂Cr₂O₇',
            'Na2S2O3': 'Na₂S₂O₃',
            'KI': 'KI',
            'starch': 'starch indicator',

            // Spectroscopy / Units
            'mV': 'mV',
            'V': 'V',
            'A': 'A',
            'C': 'C',
            'mol': 'mol',
            'Jmol': 'J mol⁻¹'
        };
    }

    initializeRedoxTopics() {
        this.redoxTopics = {
            redox_fundamentals: {
                patterns: [
                    /redox|oxidation.*reduction/i,
                    /oxidation state|oxidation number/i,
                    /electron transfer/i,
                    /reducing agent|oxidizing agent/i,
                    /half.*reaction|half.*equation/i
                ],
                handler: this.handleRedoxFundamentals.bind(this),
                name: 'Redox Fundamentals',
                category: 'redox_principles',
                description: 'The principles of electron transfer, oxidation states, and balancing redox equations',
                difficulty: 'beginner',
                prerequisites: ['atomic_structure', 'chemical_bonding', 'ionic_equations']
            },

            electrochemical_cells: {
                patterns: [
                    /electrochemical cell|galvanic cell|voltaic cell/i,
                    /electrode potential|standard electrode/i,
                    /anode|cathode/i,
                    /salt bridge|cell notation/i,
                    /electromotive force|EMF/i,
                    /Daniel.*cell|zinc.*copper cell/i
                ],
                handler: this.handleElectrochemicalCells.bind(this),
                name: 'Electrochemical Cells',
                category: 'electrochemistry',
                description: 'Spontaneous redox reactions that generate electrical energy in galvanic cells',
                difficulty: 'intermediate',
                prerequisites: ['redox_fundamentals', 'thermodynamics', 'ionic_equations']
            },

            electrolysis: {
                patterns: [
                    /electrolysis/i,
                    /electrolytic cell/i,
                    /electroplating|electrolytic refining/i,
                    /Faraday.*law|moles.*electrons/i,
                    /aqueous electrolysis|molten.*electrolysis/i,
                    /discharge.*ions|selective discharge/i
                ],
                handler: this.handleElectrolysis.bind(this),
                name: 'Electrolysis',
                category: 'electrochemistry',
                description: 'Using electrical energy to drive non-spontaneous redox reactions',
                difficulty: 'intermediate',
                prerequisites: ['redox_fundamentals', 'electrochemical_cells', 'ionic_equations']
            },

            redox_titrations: {
                patterns: [
                    /redox titration/i,
                    /permanganate titration|manganometry/i,
                    /dichromate titration|chromatometry/i,
                    /iodometric|iodimetric titration/i,
                    /thiosulfate|sodium thiosulfate/i,
                    /iron.*titration|vitamin C.*titration/i
                ],
                handler: this.handleRedoxTitrations.bind(this),
                name: 'Redox Titrations',
                category: 'analytical',
                description: 'Quantitative analysis using redox reactions to determine concentration of oxidizing or reducing agents',
                difficulty: 'intermediate',
                prerequisites: ['redox_fundamentals', 'acid_base_titrations', 'stoichiometry']
            },

            corrosion_and_protection: {
                patterns: [
                    /corrosion|rusting/i,
                    /iron.*rust|rust.*prevention/i,
                    /sacrificial.*protection|cathodic protection/i,
                    /galvanizing|electroplating/i,
                    /oxidation.*metals|passivation/i,
                    /electrochemical.*corrosion/i
                ],
                handler: this.handleCorrosionAndProtection.bind(this),
                name: 'Corrosion and Protection',
                category: 'applications',
                description: 'Electrochemical corrosion of metals and methods of prevention',
                difficulty: 'intermediate',
                prerequisites: ['redox_fundamentals', 'electrochemical_cells', 'electrode_potentials']
            }
        };
    }

    initializeRedoxLessons() {
        this.lessons = {
            redox_fundamentals: {
                title: "Redox Chemistry: Oxidation, Reduction, and Electron Transfer",
                concepts: [
                    "Oxidation is loss of electrons (OIL - Oxidation Is Loss)",
                    "Reduction is gain of electrons (RIG - Reduction Is Gain)",
                    "Oxidation and reduction always occur simultaneously (redox)",
                    "Oxidation states (oxidation numbers) track electron changes in reactions",
                    "The oxidizing agent is reduced; the reducing agent is oxidized",
                    "Redox equations are balanced using the half-equation method",
                    "In acidic solution, balance O with H₂O and H with H⁺; in basic solution use OH⁻"
                ],
                theory: "Redox reactions involve the transfer of electrons between chemical species. The concept of oxidation states provides a bookkeeping system for tracking electron changes even in covalent compounds. The half-equation method separates the oxidation and reduction processes, making complex redox equations manageable. Redox reactions underpin energy storage (batteries), industrial synthesis, biological respiration, and corrosion — making them among the most important reaction types in chemistry.",
                keyDefinitions: {
                    "Oxidation": "Loss of electrons by a species; increase in oxidation state",
                    "Reduction": "Gain of electrons by a species; decrease in oxidation state",
                    "Oxidizing Agent": "Species that accepts electrons from another species; is itself reduced in the process",
                    "Reducing Agent": "Species that donates electrons to another species; is itself oxidized in the process",
                    "Oxidation State": "A number assigned to an atom representing the charge it would have if the compound were fully ionic; useful for tracking electron transfer",
                    "Half-Equation": "An equation showing either the oxidation or reduction process alone, including electrons explicitly",
                    "Redox Couple": "An oxidized/reduced pair related by electron transfer (e.g., Fe³⁺/Fe²⁺)",
                    "Disproportionation": "A redox reaction in which a single species is simultaneously oxidized and reduced",
                    "Comproportionation": "The reverse of disproportionation; two different oxidation states of an element combine to give an intermediate oxidation state",
                    "OIL RIG": "Memory aid: Oxidation Is Loss, Reduction Is Gain (of electrons)"
                },
                oxidationStateRules: {
                    rule1: {
                        rule: "Uncombined elements have oxidation state = 0",
                        examples: ["Na(s): 0", "Cl₂(g): 0", "Fe(s): 0", "O₂(g): 0"]
                    },
                    rule2: {
                        rule: "Simple monatomic ions have oxidation state equal to their charge",
                        examples: ["Na⁺: +1", "Cl⁻: −1", "Fe²⁺: +2", "Al³⁺: +3"]
                    },
                    rule3: {
                        rule: "Oxygen is −2 in compounds (except in peroxides: −1, and OF₂: +2)",
                        examples: ["H₂O: O is −2", "H₂O₂: O is −1 (peroxide)", "Na₂O: O is −2"]
                    },
                    rule4: {
                        rule: "Hydrogen is +1 in compounds with nonmetals; −1 in metal hydrides",
                        examples: ["HCl: H is +1", "NaH: H is −1", "H₂O: H is +1"]
                    },
                    rule5: {
                        rule: "Fluorine is always −1 in compounds (most electronegative element)",
                        examples: ["HF: F is −1", "OF₂: O is +2, F is −1"]
                    },
                    rule6: {
                        rule: "Sum of oxidation states = charge on species (0 for neutral, = charge for ion)",
                        examples: ["SO₄²⁻: S + 4(−2) = −2, so S = +6", "KMnO₄: Mn = +7"]
                    }
                },
                balancingMethods: {
                    halfEquationMethod: {
                        acidicSolution: {
                            steps: [
                                "Step 1: Write unbalanced half-equations for oxidation and reduction",
                                "Step 2: Balance atoms other than O and H",
                                "Step 3: Balance O atoms by adding H₂O",
                                "Step 4: Balance H atoms by adding H⁺",
                                "Step 5: Balance charge by adding electrons (e⁻)",
                                "Step 6: Multiply half-equations so electrons cancel",
                                "Step 7: Add half-equations and simplify"
                            ],
                            example: {
                                reaction: "MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺ (acidic solution)",
                                oxidation: "Fe²⁺ → Fe³⁺ + e⁻",
                                reduction: "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O",
                                combined: "MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺"
                            }
                        },
                        basicSolution: {
                            steps: [
                                "Steps 1-5 as for acidic solution",
                                "Step 6: Add OH⁻ to both sides to neutralize H⁺ (number of OH⁻ = number of H⁺)",
                                "Step 7: Combine H⁺ + OH⁻ → H₂O and simplify",
                                "Step 8: Multiply and add half-equations"
                            ],
                            example: {
                                reaction: "MnO₄⁻ + SO₃²⁻ → MnO₂ + SO₄²⁻ (basic solution)",
                                oxidation: "SO₃²⁻ + H₂O → SO₄²⁻ + 2H⁺ + 2e⁻",
                                reduction: "MnO₄⁻ + 2H₂O + 3e⁻ → MnO₂ + 4OH⁻",
                                combined: "2MnO₄⁻ + 3SO₃²⁻ + H₂O → 2MnO₂ + 3SO₄²⁻ + 2OH⁻"
                            }
                        }
                    },
                    oxidationStateMethod: {
                        steps: [
                            "Step 1: Assign oxidation states to all atoms",
                            "Step 2: Identify atoms that change oxidation state",
                            "Step 3: Calculate change in oxidation state per atom",
                            "Step 4: Multiply coefficients so total increase = total decrease",
                            "Step 5: Balance remaining atoms (H, O) by inspection"
                        ],
                        example: {
                            reaction: "KMnO₄ + HCl → KCl + MnCl₂ + Cl₂ + H₂O",
                            mnChange: "Mn: +7 → +2 (gain of 5e⁻, reduction)",
                            clChange: "Cl⁻: −1 → 0 (loss of 1e⁻, oxidation)",
                            balancing: "Need 5 Cl⁻ oxidized per Mn reduced",
                            balanced: "2KMnO₄ + 16HCl → 2KCl + 2MnCl₂ + 5Cl₂ + 8H₂O"
                        }
                    }
                },
                commonOxidationStates: {
                    manganese: {
                        element: "Manganese (Mn)",
                        states: [
                            { state: "+2", compound: "MnCl₂, MnSO₄", color: "Pale pink (dilute: colorless)", notes: "Most stable in acidic solution" },
                            { state: "+3", compound: "Mn₂O₃", color: "Brown/black", notes: "Unstable, disproportionates" },
                            { state: "+4", compound: "MnO₂", color: "Black", notes: "Stable solid; used in batteries" },
                            { state: "+6", compound: "K₂MnO₄", color: "Green", notes: "Manganate; unstable in acidic/neutral" },
                            { state: "+7", compound: "KMnO₄", color: "Purple/violet", notes: "Permanganate; powerful oxidizing agent" }
                        ]
                    },
                    chromium: {
                        element: "Chromium (Cr)",
                        states: [
                            { state: "+2", compound: "CrCl₂", color: "Blue", notes: "Strong reducing agent; easily oxidized" },
                            { state: "+3", compound: "CrCl₃, Cr₂O₃", color: "Green/violet", notes: "Most stable; amphoteric" },
                            { state: "+6", compound: "K₂Cr₂O₇, CrO₃", color: "Orange/yellow", notes: "Dichromate; powerful oxidizing agent; toxic carcinogen" }
                        ]
                    },
                    iron: {
                        element: "Iron (Fe)",
                        states: [
                            { state: "0", compound: "Fe(s)", color: "Grey metal", notes: "Reduces to Fe²⁺ in acid" },
                            { state: "+2", compound: "FeCl₂, FeSO₄", color: "Pale green", notes: "Fe(II)/ferrous; reducing agent" },
                            { state: "+3", compound: "FeCl₃, Fe₂O₃", color: "Yellow/brown", notes: "Fe(III)/ferric; oxidizing agent" }
                        ]
                    },
                    nitrogen: {
                        element: "Nitrogen (N)",
                        states: [
                            { state: "−3", compound: "NH₃, NH₄⁺", color: "—", notes: "Most reduced form" },
                            { state: "0", compound: "N₂", color: "—", notes: "Dinitrogen" },
                            { state: "+1", compound: "N₂O", color: "—", notes: "Nitrous oxide" },
                            { state: "+2", compound: "NO", color: "Colourless", notes: "Nitric oxide; radical" },
                            { state: "+3", compound: "HNO₂, NO₂⁻", color: "—", notes: "Nitrous acid/nitrite" },
                            { state: "+4", compound: "NO₂", color: "Brown", notes: "Nitrogen dioxide" },
                            { state: "+5", compound: "HNO₃, NO₃⁻", color: "—", notes: "Nitric acid/nitrate; most oxidized" }
                        ]
                    },
                    sulfur: {
                        element: "Sulfur (S)",
                        states: [
                            { state: "−2", compound: "H₂S, S²⁻", color: "—", notes: "Sulfide; reducing agent" },
                            { state: "0", compound: "S(s)", color: "Yellow solid", notes: "Elemental sulfur" },
                            { state: "+4", compound: "SO₂, SO₃²⁻", color: "—", notes: "Sulfur dioxide/sulfite; can oxidize or reduce" },
                            { state: "+6", compound: "H₂SO₄, SO₄²⁻", color: "—", notes: "Sulfuric acid/sulfate; most oxidized" }
                        ]
                    },
                    chlorine: {
                        element: "Chlorine (Cl)",
                        states: [
                            { state: "−1", compound: "HCl, NaCl, Cl⁻", color: "—", notes: "Chloride; most reduced, reducing agent" },
                            { state: "0", compound: "Cl₂", color: "Yellow-green gas", notes: "Oxidizing agent; disproportionates in water" },
                            { state: "+1", compound: "HOCl, NaOCl", color: "—", notes: "Hypochlorous acid/hypochlorite; bleach" },
                            { state: "+3", compound: "HClO₂", color: "—", notes: "Chlorous acid" },
                            { state: "+5", compound: "HClO₃, ClO₃⁻", color: "—", notes: "Chloric acid/chlorate" },
                            { state: "+7", compound: "HClO₄, ClO₄⁻", color: "—", notes: "Perchloric acid/perchlorate; most oxidized" }
                        ]
                    }
                },
                examples: [
                    {
                        name: "Iron rusting",
                        equation: "4Fe + 3O₂ + 6H₂O → 4Fe(OH)₃",
                        oxidized: "Fe: 0 → +3 (loses 3e⁻)",
                        reduced: "O₂: 0 → −2 (gains 2e⁻ per O)",
                        context: "Electrochemical corrosion; requires both O₂ and H₂O"
                    },
                    {
                        name: "Combustion of methane",
                        equation: "CH₄ + 2O₂ → CO₂ + 2H₂O",
                        oxidized: "C: −4 → +4 (loses 8e⁻ total)",
                        reduced: "O₂: 0 → −2",
                        context: "Exothermic redox; energy released as heat and light"
                    },
                    {
                        name: "Zinc displacing copper",
                        equation: "Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)",
                        oxidized: "Zn: 0 → +2 (loses 2e⁻)",
                        reduced: "Cu²⁺: +2 → 0 (gains 2e⁻)",
                        context: "Displacement reaction; basis of Daniel cell"
                    },
                    {
                        name: "Permanganate oxidizing iron(II)",
                        equation: "MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺",
                        oxidized: "Fe²⁺: +2 → +3 (loses 1e⁻)",
                        reduced: "Mn: +7 → +2 (gains 5e⁻)",
                        context: "Redox titration; basis of manganometry"
                    },
                    {
                        name: "Disproportionation of chlorine",
                        equation: "Cl₂ + H₂O ⇌ HOCl + HCl",
                        oxidized: "Cl₂ (one Cl: 0 → +1)",
                        reduced: "Cl₂ (other Cl: 0 → −1)",
                        context: "Same element simultaneously oxidized and reduced"
                    }
                ],
                applications: [
                    "Batteries and fuel cells: controlled redox reactions for electricity generation",
                    "Bleaching: chlorine and hydrogen peroxide oxidize colored compounds",
                    "Metal extraction: reduction of metal ores (e.g., Fe₂O₃ + CO → Fe + CO₂)",
                    "Biological respiration: glucose oxidized via redox chain in mitochondria",
                    "Photography: silver halides reduced by light; fixer oxidizes unreacted AgBr",
                    "Analytical chemistry: redox titrations for quantitative analysis",
                    "Industrial synthesis: catalytic oxidation (SO₂ → SO₃ in Contact process)"
                ]
            },

            electrochemical_cells: {
                title: "Electrochemical Cells: Galvanic Cells and Electrode Potentials",
                concepts: [
                    "A galvanic (voltaic) cell converts chemical energy of a spontaneous redox reaction into electrical energy",
                    "Oxidation occurs at the anode (negative electrode in galvanic cell); reduction at the cathode (positive)",
                    "The salt bridge completes the electrical circuit and maintains charge neutrality",
                    "Standard electrode potential (E°) measures tendency of a half-cell to be reduced",
                    "Standard hydrogen electrode (SHE) is the reference; E° = 0.00 V by definition",
                    "E°cell = E°cathode − E°anode (or E°red − E°ox); positive E°cell = spontaneous reaction",
                    "ΔG° = −nFE°cell; Nernst equation relates E to concentration at non-standard conditions"
                ],
                theory: "When a spontaneous redox reaction is arranged so that oxidation and reduction occur in separate compartments connected by a conductor and a salt bridge, the flow of electrons through the external circuit constitutes an electric current. The driving force is the difference in electrode potentials. Standard electrode potentials provide a quantitative measure of oxidizing/reducing power and allow prediction of cell EMF and spontaneity.",
                keyDefinitions: {
                    "Galvanic Cell": "An electrochemical cell in which a spontaneous redox reaction produces electrical energy (also called voltaic cell)",
                    "Electrolytic Cell": "An electrochemical cell in which electrical energy drives a non-spontaneous redox reaction",
                    "Electrode Potential": "The potential of a half-cell relative to the standard hydrogen electrode; measured under standard conditions as E°",
                    "Standard Conditions": "25°C (298 K), 1 mol dm⁻³ concentrations for all ions, 100 kPa for all gases",
                    "Standard Hydrogen Electrode": "The reference half-cell; Pt | H₂(g, 1 atm) | H⁺(aq, 1 M); assigned E° = 0.00 V exactly",
                    "Cell Notation": "Shorthand for an electrochemical cell: anode | anode solution || cathode solution | cathode; || = salt bridge",
                    "EMF (Electromotive Force)": "The cell potential measured under zero-current conditions; equals the maximum work the cell can do",
                    "Nernst Equation": "E = E° − (RT/nF)ln Q; corrects standard potential for non-standard concentrations",
                    "Faraday Constant (F)": "Charge carried by one mole of electrons; F = 96,485 C mol⁻¹ (≈ 96,500 C mol⁻¹)",
                    "Equilibrium Constant from E°": "ln K = nFE°/RT = nE°/0.0257 (at 298 K)"
                },
                standardElectrodePotentials: {
                    strongOxidizingAgents: [
                        { half_equation: "F₂ + 2e⁻ → 2F⁻", E_standard: "+2.87 V", notes: "Strongest common oxidizing agent" },
                        { half_equation: "S₂O₈²⁻ + 2e⁻ → 2SO₄²⁻", E_standard: "+2.01 V", notes: "Persulfate; powerful oxidizer" },
                        { half_equation: "H₂O₂ + 2H⁺ + 2e⁻ → 2H₂O", E_standard: "+1.77 V", notes: "In acidic solution" },
                        { half_equation: "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O", E_standard: "+1.51 V", notes: "In acidic solution; purple→colourless" },
                        { half_equation: "Cl₂ + 2e⁻ → 2Cl⁻", E_standard: "+1.36 V", notes: "Chlorine gas" },
                        { half_equation: "Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O", E_standard: "+1.33 V", notes: "In acidic solution; orange→green" },
                        { half_equation: "O₂ + 4H⁺ + 4e⁻ → 2H₂O", E_standard: "+1.23 V", notes: "In acidic solution" },
                        { half_equation: "Br₂ + 2e⁻ → 2Br⁻", E_standard: "+1.09 V", notes: "Bromine" },
                        { half_equation: "NO₃⁻ + 4H⁺ + 3e⁻ → NO + 2H₂O", E_standard: "+0.96 V", notes: "In acidic solution" },
                        { half_equation: "Ag⁺ + e⁻ → Ag", E_standard: "+0.80 V", notes: "Silver ion" },
                        { half_equation: "Fe³⁺ + e⁻ → Fe²⁺", E_standard: "+0.77 V", notes: "Iron(III)/iron(II) couple" },
                        { half_equation: "I₂ + 2e⁻ → 2I⁻", E_standard: "+0.54 V", notes: "Iodine; basis of iodometric titrations" },
                        { half_equation: "Cu²⁺ + 2e⁻ → Cu", E_standard: "+0.34 V", notes: "Copper(II); above H₂ (not displaced by H)" },
                        { half_equation: "2H⁺ + 2e⁻ → H₂", E_standard: "0.00 V", notes: "Standard hydrogen electrode (reference)" }
                    ],
                    moderateReducingAgents: [
                        { half_equation: "Pb²⁺ + 2e⁻ → Pb", E_standard: "−0.13 V", notes: "Lead" },
                        { half_equation: "Sn²⁺ + 2e⁻ → Sn", E_standard: "−0.14 V", notes: "Tin(II)" },
                        { half_equation: "Ni²⁺ + 2e⁻ → Ni", E_standard: "−0.25 V", notes: "Nickel" },
                        { half_equation: "Co²⁺ + 2e⁻ → Co", E_standard: "−0.28 V", notes: "Cobalt" },
                        { half_equation: "Fe²⁺ + 2e⁻ → Fe", E_standard: "−0.44 V", notes: "Iron metal" },
                        { half_equation: "Cr³⁺ + 3e⁻ → Cr", E_standard: "−0.74 V", notes: "Chromium metal" }
                    ],
                    strongReducingAgents: [
                        { half_equation: "Zn²⁺ + 2e⁻ → Zn", E_standard: "−0.76 V", notes: "Zinc; sacrificial anode in galvanizing" },
                        { half_equation: "Al³⁺ + 3e⁻ → Al", E_standard: "−1.66 V", notes: "Aluminium; protected by oxide layer" },
                        { half_equation: "Mg²⁺ + 2e⁻ → Mg", E_standard: "−2.37 V", notes: "Magnesium; sacrificial anode" },
                        { half_equation: "Na⁺ + e⁻ → Na", E_standard: "−2.71 V", notes: "Sodium; very strong reducing agent" },
                        { half_equation: "Ca²⁺ + 2e⁻ → Ca", E_standard: "−2.87 V", notes: "Calcium" },
                        { half_equation: "K⁺ + e⁻ → K", E_standard: "−2.93 V", notes: "Potassium" },
                        { half_equation: "Li⁺ + e⁻ → Li", E_standard: "−3.04 V", notes: "Lithium; strongest common reducing agent" }
                    ]
                },
                cellPotentialCalculations: {
                    formula: "E°cell = E°cathode (reduction) − E°anode (reduction)",
                    alternativeFormula: "E°cell = E°red(more positive) − E°red(more negative)",
                    spontaneity: "Spontaneous when E°cell > 0 (ΔG° < 0)",
                    gibbsRelationship: {
                        equation: "ΔG° = −nFE°cell",
                        whereN: "n = number of moles of electrons transferred",
                        whereF: "F = 96,485 C mol⁻¹ (Faraday constant)",
                        example: "For Zn/Cu cell: E°cell = 0.34 − (−0.76) = +1.10 V; n = 2; ΔG° = −2 × 96485 × 1.10 = −212 kJ mol⁻¹"
                    },
                    equilibriumConstant: {
                        equation: "ln K = nFE°cell / RT = nE°cell / 0.02569 (at 298 K)",
                        log10Form: "log K = nE°cell / 0.0592 (at 298 K)",
                        example: "E°cell = +0.46 V, n = 2: log K = 2×0.46/0.0592 = 15.5; K = 3.2 × 10¹⁵ (strongly favors products)"
                    },
                    nernstEquation: {
                        equation: "E = E° − (RT/nF) × ln Q",
                        atRoom: "E = E° − (0.0257/n) × ln Q",
                        inLog10: "E = E° − (0.0592/n) × log Q",
                        applications: [
                            "Concentration cells (same electrodes, different concentrations)",
                            "pH measurement (glass electrode is a concentration cell)",
                            "Predicting cell potential at non-standard conditions",
                            "Calculating ion concentrations from measured cell potential"
                        ]
                    }
                },
                danielCell: {
                    description: "The Daniel cell is the classic example of a galvanic cell",
                    components: {
                        anode: "Zinc electrode in ZnSO₄(aq) — zinc is oxidized",
                        cathode: "Copper electrode in CuSO₄(aq) — copper(II) is reduced",
                        saltBridge: "KCl or KNO₃ in agar gel; allows ion flow to maintain neutrality",
                        externalCircuit: "Wire connecting the electrodes; electrons flow anode→cathode"
                    },
                    reactions: {
                        anode: "Zn(s) → Zn²⁺(aq) + 2e⁻  (oxidation, E° = +0.76 V as oxidation)",
                        cathode: "Cu²⁺(aq) + 2e⁻ → Cu(s)  (reduction, E° = +0.34 V)",
                        overall: "Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)",
                        E_cell: "E°cell = +0.34 − (−0.76) = +1.10 V"
                    },
                    cellNotation: "Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s)",
                    observations: [
                        "Zinc electrode gradually dissolves (loses mass)",
                        "Copper electrode gains mass (copper deposits)",
                        "Blue color of CuSO₄ solution fades",
                        "Voltmeter reads approximately +1.10 V (standard conditions)"
                    ],
                    saltBridgeRole: [
                        "Completes the electrical circuit through ion migration",
                        "NO₃⁻ or Cl⁻ ions migrate toward anode compartment (becoming positive)",
                        "K⁺ ions migrate toward cathode compartment (becoming negative)",
                        "Without salt bridge, charge buildup stops the reaction quickly"
                    ]
                },
                batteryTypes: {
                    primary: {
                        description: "Non-rechargeable; reactions are irreversible under normal conditions",
                        examples: [
                            {
                                name: "Alkaline Battery",
                                anode: "Zn oxidized",
                                cathode: "MnO₂ reduced",
                                electrolyte: "KOH (alkaline)",
                                voltage: "~1.5 V",
                                uses: "Torches, remote controls, toys"
                            },
                            {
                                name: "Lithium Battery",
                                anode: "Li oxidized",
                                cathode: "MnO₂ or other",
                                electrolyte: "Organic solvent + Li salt",
                                voltage: "~3 V",
                                uses: "Watches, calculators, pacemakers"
                            }
                        ]
                    },
                    secondary: {
                        description: "Rechargeable; reactions are reversible",
                        examples: [
                            {
                                name: "Lead-Acid Battery",
                                anode: "Pb oxidized to PbSO₄",
                                cathode: "PbO₂ reduced to PbSO₄",
                                electrolyte: "H₂SO₄(aq)",
                                voltage: "~2 V per cell (12V = 6 cells)",
                                uses: "Car batteries, UPS",
                                charging: "Reaction reversed by applying external current"
                            },
                            {
                                name: "Lithium-Ion Battery",
                                anode: "Li intercalated in graphite",
                                cathode: "LiCoO₂ or LiFePO₄",
                                electrolyte: "Organic solvent + LiPF₆",
                                voltage: "~3.6 V",
                                uses: "Smartphones, laptops, electric vehicles"
                            }
                        ]
                    },
                    fuelCells: {
                        description: "Continuous conversion of chemical energy to electricity; reactants supplied continuously",
                        hydrogenFuelCell: {
                            anode: "H₂ → 2H⁺ + 2e⁻ (oxidation at Pt catalyst)",
                            cathode: "O₂ + 4H⁺ + 4e⁻ → 2H₂O (reduction at Pt catalyst)",
                            overall: "2H₂ + O₂ → 2H₂O",
                            E_cell: "~1.23 V (theoretical)",
                            efficiency: "~60−70% (vs ~25% for internal combustion engine)",
                            advantages: "Zero carbon emissions at point of use; only byproduct is water",
                            challenges: "H₂ storage and production; expensive Pt catalyst"
                        }
                    }
                }
            },

            electrolysis: {
                title: "Electrolysis: Using Electricity to Drive Chemical Change",
                concepts: [
                    "Electrolysis uses electrical energy to drive non-spontaneous redox reactions",
                    "In electrolytic cells, the anode is positive (connected to +ve terminal of supply); cathode is negative",
                    "At the anode: oxidation (anions lose electrons); at cathode: reduction (cations gain electrons)",
                    "For molten ionic compounds: only the constituent ions are discharged",
                    "For aqueous solutions: selective discharge occurs; water competes with ions",
                    "Faraday's First Law: mass of product ∝ charge passed",
                    "Faraday's Second Law: for same charge, moles of product ∝ 1/(charge on ion)",
                    "Quantitative calculations use: moles of e⁻ = Q/F = It/F"
                ],
                theory: "Electrolysis occurs when an external electrical source forces current through an electrolyte, driving a non-spontaneous redox reaction. The electrode connected to the positive terminal of the power supply (anode) attracts anions and oxidizes them. The electrode connected to the negative terminal (cathode) attracts cations and reduces them. The ability to control redox reactions using electricity is exploited industrially for metal extraction (Al), electroplating, and production of important chemicals (Cl₂, NaOH).",
                keyDefinitions: {
                    "Electrolyte": "A substance that conducts electricity when molten or dissolved in water (ionic compound or strong acid/base)",
                    "Inert Electrode": "An electrode that does not take part in the electrolysis reaction (typically platinum or graphite/carbon)",
                    "Active Electrode": "An electrode that dissolves during electrolysis (e.g., copper anode in copper refining)",
                    "Selective Discharge": "In aqueous solutions, the preferential discharge of one ion over another based on electrode potential and concentration",
                    "Faraday's First Law": "The mass of substance deposited or liberated at an electrode is proportional to the quantity of charge passed",
                    "Faraday's Second Law": "For a given quantity of charge, the number of moles of substance deposited is inversely proportional to the charge on the ion",
                    "Overpotential": "Additional voltage required beyond the theoretical minimum to drive an electrode reaction at a practical rate"
                },
                faradaysLaws: {
                    quantitativeFormulae: {
                        charge: "Q = It  (charge in coulombs = current in A × time in s)",
                        molesElectrons: "n(e⁻) = Q/F = It/F",
                        molesProduct: "n(product) = n(e⁻) / |z|  where z = charge on ion",
                        massProduct: "m = n × M  where M = molar mass",
                        combinedFormula: "m = (It × M) / (F × |z|)"
                    },
                    examples: [
                        {
                            problem: "2.00 A passed through CuSO₄(aq) for 30 min. Mass of Cu deposited?",
                            solution: [
                                "Q = It = 2.00 × (30 × 60) = 3600 C",
                                "n(e⁻) = Q/F = 3600/96485 = 0.03731 mol",
                                "Cu²⁺ + 2e⁻ → Cu, so n(Cu) = n(e⁻)/2 = 0.01866 mol",
                                "m(Cu) = 0.01866 × 63.55 = 1.19 g"
                            ]
                        },
                        {
                            problem: "What current is needed to deposit 1.00 g of silver (Ag⁺ + e⁻ → Ag) in 20 minutes?",
                            solution: [
                                "n(Ag) = 1.00/107.87 = 9.27 × 10⁻³ mol",
                                "Ag⁺ + 1e⁻ → Ag, so n(e⁻) = n(Ag) = 9.27 × 10⁻³ mol",
                                "Q = n(e⁻) × F = 9.27 × 10⁻³ × 96485 = 894 C",
                                "I = Q/t = 894/(20×60) = 0.745 A"
                            ]
                        }
                    ]
                },
                electrolysisOfMoltenSalts: {
                    description: "Molten ionic compounds contain only the cation and anion from that compound; straightforward discharge",
                    examples: [
                        {
                            compound: "Molten NaCl",
                            cathode: "Na⁺(l) + e⁻ → Na(l)   [reduction of sodium ions]",
                            anode: "2Cl⁻(l) → Cl₂(g) + 2e⁻  [oxidation of chloride ions]",
                            overall: "2NaCl(l) → 2Na(l) + Cl₂(g)",
                            industrialProcess: "Downs Process: produces Na metal and Cl₂; operated above 600°C",
                            importance: "Only industrial method for producing sodium metal"
                        },
                        {
                            compound: "Molten Al₂O₃ (alumina)",
                            cathode: "Al³⁺ + 3e⁻ → Al(l)    [reduction]",
                            anode: "2O²⁻ → O₂(g) + 4e⁻    [oxidation; attacks carbon anode]",
                            overall: "2Al₂O₃(l) → 4Al(l) + 3O₂(g)",
                            industrialProcess: "Hall-Héroult Process: Al₂O₃ dissolved in molten cryolite (Na₃AlF₆) at 950°C",
                            importance: "Only economical method for aluminium extraction; accounts for ~3% of global electricity use",
                            energyConsumption: "~14 kWh per kg Al produced"
                        }
                    ]
                },
                electrolysisOfAqueousSolutions: {
                    description: "Aqueous solutions contain both the electrolyte ions AND water (H₂O, H⁺, OH⁻); selective discharge determines products",
                    selectiveDischarge: {
                        cathodePriority: {
                            rule: "Ion with most positive (least negative) standard reduction potential discharged preferentially",
                            order: "Cu²⁺ > Ag⁺ > H⁺ > Pb²⁺ > Ni²⁺ > Fe²⁺ > Zn²⁺ > Al³⁺ > Mg²⁺ > Na⁺ > Ca²⁺",
                            waterCompetition: "At cathode, H⁺ from water competes: 2H⁺ + 2e⁻ → H₂; but metals above H in activity series won't be deposited from dilute solution",
                            practicalRule: "Ions of metals less reactive than H (Cu, Ag, Au, Pt) are preferentially discharged"
                        },
                        anodePriority: {
                            rule: "Ion with least positive (most negative) standard oxidation potential discharged first",
                            concentrationEffect: "High [Cl⁻] favors Cl₂ over O₂ despite thermodynamics; at low [Cl⁻], O₂ produced",
                            waterOxidation: "2H₂O → O₂ + 4H⁺ + 4e⁻  (E° = −1.23 V vs SHE for oxidation)",
                            iodideIons: "I⁻ discharged preferentially (low E°ox)",
                            inertVsActive: "With active anode (e.g., Cu), anode metal dissolves instead of anion being oxidized"
                        }
                    },
                    examples: [
                        {
                            electrolyte: "Dilute H₂SO₄(aq) with Pt electrodes",
                            cathode: "2H⁺(aq) + 2e⁻ → H₂(g)  [H⁺ discharged]",
                            anode: "2H₂O(l) → O₂(g) + 4H⁺(aq) + 4e⁻  [water oxidized]",
                            overall: "2H₂O(l) → 2H₂(g) + O₂(g)",
                            observation: "Gas at both electrodes; H₂:O₂ volume ratio = 2:1",
                            notes: "Net effect: decomposition of water"
                        },
                        {
                            electrolyte: "Concentrated NaCl(aq) — Chlor-Alkali Process",
                            cathode: "2H₂O(l) + 2e⁻ → H₂(g) + 2OH⁻(aq)",
                            anode: "2Cl⁻(aq) → Cl₂(g) + 2e⁻  [high [Cl⁻] favors Cl₂]",
                            overall: "2NaCl(aq) + 2H₂O(l) → Cl₂(g) + H₂(g) + 2NaOH(aq)",
                            industrialImportance: "Cl₂ for PVC, bleach, water treatment; NaOH for soap, paper, aluminium industry",
                            membraneTechnology: "Ion-exchange membrane separates Cl₂ from NaOH to prevent reaction"
                        },
                        {
                            electrolyte: "CuSO₄(aq) with Cu electrodes (copper refining)",
                            cathode: "Cu²⁺(aq) + 2e⁻ → Cu(s)  [pure Cu deposits]",
                            anode: "Cu(s) → Cu²⁺(aq) + 2e⁻  [impure Cu anode dissolves]",
                            overall: "Cu(anode, impure) → Cu(cathode, pure)",
                            notes: "Impurities (Ag, Au, Pt) fall as 'anode sludge' — valuable byproduct",
                            industrialUse: "Electrorefining produces 99.99% pure copper; anode sludge recovered for precious metals"
                        },
                        {
                            electrolyte: "Dilute NaCl(aq) with Pt electrodes",
                            cathode: "2H₂O(l) + 2e⁻ → H₂(g) + 2OH⁻(aq)  [water reduced, not Na⁺]",
                            anode: "2H₂O(l) → O₂(g) + 4H⁺(aq) + 4e⁻  [water oxidized, not Cl⁻ at low [Cl⁻]]",
                            overall: "2H₂O(l) → 2H₂(g) + O₂(g)",
                            notes: "Low [Cl⁻] means thermodynamic preference for O₂ production prevails"
                        }
                    ]
                },
                industrialApplications: [
                    {
                        application: "Hall-Héroult Process (Aluminium smelting)",
                        description: "Al₂O₃ dissolved in molten cryolite electrolyzed at 950°C; ~14 kWh/kg Al",
                        products: "Aluminium metal + CO₂ (carbon anodes react with O₂ produced)",
                        scale: "~65 million tonnes Al/year worldwide"
                    },
                    {
                        application: "Downs Process (Sodium production)",
                        description: "Molten NaCl electrolyzed above 600°C; modified cell separates Na from Cl₂",
                        products: "Sodium metal + Chlorine gas",
                        uses: "Na used in making Na compounds, nuclear reactors; Cl₂ for PVC, disinfection"
                    },
                    {
                        application: "Chlor-Alkali Process",
                        description: "Concentrated brine (NaCl) electrolyzed with membrane cell at room temperature",
                        products: "Chlorine gas + Hydrogen gas + Sodium hydroxide solution",
                        scale: "~65 million tonnes Cl₂/year; NaOH essential for many industries"
                    },
                    {
                        application: "Electroplating",
                        description: "Object to be plated = cathode; plating metal = anode; dissolved salt = electrolyte",
                        examples: "Silver plating (cutlery), chrome plating (car parts), gold plating (jewelry, electronics)",
                        purpose: "Corrosion protection, appearance, wear resistance, conductivity"
                    },
                    {
                        application: "Electrorefining of Copper",
                        description: "Impure Cu anode, pure Cu cathode, CuSO₄ electrolyte; 99.99% purity achieved",
                        byproduct: "Precious metal anode sludge (Ag, Au, Pt, Se)"
                    }
                ]
            },

            redox_titrations: {
                title: "Redox Titrations: Quantitative Analysis by Electron Transfer",
                concepts: [
                    "Redox titrations use a standard solution of an oxidizing or reducing agent to determine the concentration of an unknown",
                    "Permanganate (MnO₄⁻) titrations are self-indicating; purple → colourless at endpoint",
                    "Dichromate (Cr₂O₇²⁻) titrations require an external indicator (e.g., diphenylamine)",
                    "Iodometric titrations: oxidizing agent oxidizes I⁻ → I₂; I₂ titrated with Na₂S₂O₃; starch = indicator",
                    "All redox titrations require careful equation writing and mole ratio determination",
                    "Standard solutions prepared from primary standards (e.g., KMnO₄ standardized vs oxalic acid or Na₂C₂O₄)"
                ],
                theory: "Redox titrations extend the principle of volumetric analysis to electron-transfer reactions. Unlike acid-base titrations where the endpoint is neutralization, redox titrations reach their endpoint when the standard solution has exactly consumed all of the analyte's electron donor or acceptor capacity. The stoichiometric mole ratios from balanced half-equations are essential for calculation. Permanganate titrations are particularly elegant because the bright purple color of MnO₄⁻ acts as its own indicator.",
                keyDefinitions: {
                    "Redox Titration": "A volumetric analysis technique in which the analyte reacts with a standard oxidizing or reducing agent via an electron-transfer reaction",
                    "Primary Standard": "A highly pure, stable substance of known composition used to prepare or standardize solutions (e.g., Na₂C₂O₄, As₂O₃, KIO₃)",
                    "Self-Indicating Titration": "Titration in which the titrant itself changes color at the endpoint (e.g., KMnO₄: purple → colorless)",
                    "Starch Indicator": "Used in iodometric titrations; forms intense blue-black complex with I₂; disappears at endpoint when I₂ consumed",
                    "Iodometric Titration": "Indirect method: oxidizing agent oxidizes I⁻ to I₂; I₂ titrated with Na₂S₂O₃",
                    "Iodimetric Titration": "Direct titration using iodine solution as oxidant (less common)",
                    "Back Titration": "Excess standard reagent added, then the excess is back-titrated with a second standard solution",
                    "Equivalent Point": "Point where moles of oxidizing equivalents exactly equal moles of reducing equivalents"
                },
                permanganateTitrations: {
                    halfEquationAcidic: "MnO₄⁻(aq) + 8H⁺(aq) + 5e⁻ → Mn²⁺(aq) + 4H₂O(l)    E° = +1.51 V",
                    halfEquationNeutral: "MnO₄⁻(aq) + 2H₂O(l) + 3e⁻ → MnO₂(s) + 4OH⁻(aq)   E° = +0.59 V",
                    halfEquationBasic: "MnO₄⁻(aq) + e⁻ → MnO₄²⁻(aq)   (forms manganate; green)",
                    conditions: "Typically performed in acidic solution (excess dilute H₂SO₄ added); never use HCl (Cl⁻ reduces MnO₄⁻)",
                    selfIndicating: "Purple KMnO₄ solution is the indicator; first permanent pink tinge = endpoint",
                    preparation: "KMnO₄ solutions are not primary standard; must be standardized against Na₂C₂O₄ or ammonium iron(II) sulfate",
                    commonAnalytes: [
                        {
                            analyte: "Fe²⁺ (iron(II) / ferrous ions)",
                            half_eq_analyte: "Fe²⁺ → Fe³⁺ + e⁻",
                            ratio: "1 MnO₄⁻ : 5 Fe²⁺",
                            balanced: "MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺",
                            application: "Iron content in steel, iron tablets, iron ore",
                            notes: "Carried out in H₂SO₄; use of HCl would give false high result (Cl⁻ oxidized)"
                        },
                        {
                            analyte: "C₂O₄²⁻ (oxalate ions / oxalic acid)",
                            half_eq_analyte: "C₂O₄²⁻ → 2CO₂ + 2e⁻",
                            ratio: "2 MnO₄⁻ : 5 C₂O₄²⁻",
                            balanced: "2MnO₄⁻ + 16H⁺ + 5C₂O₄²⁻ → 2Mn²⁺ + 8H₂O + 10CO₂",
                            application: "Standardizing KMnO₄; calcium content (precipitate as CaC₂O₄, dissolve, titrate oxalate)",
                            notes: "Slow at room temperature; warm to 60−70°C to increase rate; reaction autocatalytic (Mn²⁺ catalyzes itself)"
                        },
                        {
                            analyte: "H₂O₂ (hydrogen peroxide)",
                            half_eq_analyte: "H₂O₂ → O₂ + 2H⁺ + 2e⁻",
                            ratio: "2 MnO₄⁻ : 5 H₂O₂",
                            balanced: "2MnO₄⁻ + 6H⁺ + 5H₂O₂ → 2Mn²⁺ + 8H₂O + 5O₂",
                            application: "Determine concentration of H₂O₂ in commercial products"
                        }
                    ]
                },
                dichromateTitrations: {
                    halfEquation: "Cr₂O₇²⁻(aq) + 14H⁺(aq) + 6e⁻ → 2Cr³⁺(aq) + 7H₂O(l)    E° = +1.33 V",
                    conditions: "Strongly acidic (H₂SO₄ + H₃PO₄); H₃PO₄ complexes Fe³⁺ (removes color interference)",
                    indicator: "Diphenylamine sulfonate (colorless → violet at endpoint); or Ferroin for some applications",
                    advantages: "K₂Cr₂O₇ is a primary standard (stable, highly pure, exact formula weight)",
                    disadvantages: "Requires external indicator; Cr⁶⁺ is toxic and carcinogenic (disposal concerns)",
                    commonAnalytes: [
                        {
                            analyte: "Fe²⁺",
                            ratio: "1 Cr₂O₇²⁻ : 6 Fe²⁺",
                            balanced: "Cr₂O₇²⁻ + 14H⁺ + 6Fe²⁺ → 2Cr³⁺ + 7H₂O + 6Fe³⁺",
                            application: "Iron determination in ore, alloys (used in BOD analysis)"
                        }
                    ],
                    environmentalApplication: {
                        name: "Biochemical Oxygen Demand (BOD)",
                        description: "Dichromate oxidizes organic matter in water sample; excess Cr₂O₇²⁻ back-titrated with Fe²⁺",
                        relevance: "Measures organic pollution level in rivers, wastewater, industrial effluents",
                        equation: "COD: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O"
                    }
                },
                iodometricTitrations: {
                    principle: "Two-step indirect method: (1) Oxidizing agent oxidizes I⁻ → I₂; (2) I₂ titrated with standard Na₂S₂O₃",
                    step1: "Oxidizing agent + excess KI → I₂ liberated  (in acidic solution)",
                    step2: "I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻  (thiosulfate reduces iodine)",
                    indicator: "Freshly prepared starch solution; forms deep blue-black complex with I₂; disappears to colourless at endpoint",
                    indicatorAddition: "Add starch NEAR endpoint (when solution is pale yellow/straw color), NOT at start; dark blue colour can mask endpoint if too much I₂ present",
                    advantagesOfMethod: [
                        "Wide range of oxidizing agents can be determined",
                        "Na₂S₂O₃ can be standardized against KIO₃ or K₂Cr₂O₇",
                        "High sensitivity and precision",
                        "Suitable for colored solutions where other indicators would be hard to see"
                    ],
                    commonOxidizingAgentsAnalyzed: [
                        {
                            analyte: "Cl₂ / ClO⁻ (chlorine/hypochlorite)",
                            step1equation: "Cl₂ + 2I⁻ → 2Cl⁻ + I₂",
                            application: "Determining available chlorine in bleach, chlorine in swimming pool water",
                            moleRatio: "1 Cl₂ = 1 I₂ = 2 S₂O₃²⁻"
                        },
                        {
                            analyte: "H₂O₂",
                            step1equation: "H₂O₂ + 2I⁻ + 2H⁺ → I₂ + 2H₂O",
                            application: "Concentration of H₂O₂ in pharmaceuticals, cosmetics",
                            moleRatio: "1 H₂O₂ = 1 I₂ = 2 S₂O₃²⁻"
                        },
                        {
                            analyte: "Cu²⁺",
                            step1equation: "2Cu²⁺ + 4I⁻ → 2CuI(s) + I₂",
                            application: "Copper content in alloys, plating baths",
                            notes: "Reaction proceeds in slightly acidic solution; CuI precipitates"
                        },
                        {
                            analyte: "IO₃⁻ (iodate)",
                            step1equation: "IO₃⁻ + 5I⁻ + 6H⁺ → 3I₂ + 3H₂O",
                            application: "Standardizing Na₂S₂O₃; determining iodate in iodized salt"
                        }
                    ],
                    calculationExample: {
                        problem: "25.0 cm³ of bleach sample acidified and treated with excess KI. Liberated I₂ titrated with 0.100 mol dm⁻³ Na₂S₂O₃; 22.5 cm³ required. Calculate [ClO⁻] in bleach.",
                        solution: [
                            "n(Na₂S₂O₃) = 0.100 × 22.5/1000 = 2.25 × 10⁻³ mol",
                            "Step 2: I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻",
                            "n(I₂) = n(S₂O₃²⁻)/2 = 1.125 × 10⁻³ mol",
                            "Step 1: ClO⁻ + 2I⁻ + 2H⁺ → Cl⁻ + I₂ + H₂O",
                            "n(ClO⁻) = n(I₂) = 1.125 × 10⁻³ mol",
                            "[ClO⁻] = 1.125 × 10⁻³ / (25.0/1000) = 0.0450 mol dm⁻³"
                        ]
                    }
                }
            },

            corrosion_and_protection: {
                title: "Corrosion: Electrochemical Degradation and Prevention",
                concepts: [
                    "Corrosion is electrochemical oxidation of a metal in the presence of an electrolyte and oxidizing agent",
                    "Iron rusting requires both oxygen and water; chloride ions accelerate corrosion",
                    "Corrosion involves anodic and cathodic regions on the same metal surface",
                    "Electrochemical series determines which metal corrodes preferentially in a bimetallic contact",
                    "Sacrificial protection uses a more reactive metal (e.g., Zn, Mg) as a sacrificial anode",
                    "Cathodic protection applies external current to make the structure a cathode (no oxidation)",
                    "Passive oxide layers (Al₂O₃, Cr₂O₃) can protect metals from further corrosion"
                ],
                theory: "Corrosion is one of the most costly chemical processes in the world, costing an estimated 3−4% of global GDP annually. It is fundamentally an electrochemical process: metal atoms are oxidized at anodic sites, and the electrons released flow to cathodic sites where oxygen and water are reduced. A thin film of moisture containing dissolved ions acts as the electrolyte. Understanding the electrochemical principles of corrosion allows rational design of protection strategies.",
                keyDefinitions: {
                    "Corrosion": "The irreversible degradation of a metal by electrochemical reaction with its environment",
                    "Rust": "Hydrated iron(III) oxide, Fe₂O₃·nH₂O, formed by corrosion of iron",
                    "Sacrificial Anode": "A more reactive metal deliberately connected to the structure; it oxidizes preferentially, protecting the structure",
                    "Cathodic Protection": "Making the metal structure the cathode (by applying negative current or connecting to a sacrificial anode) so no oxidation occurs",
                    "Galvanizing": "Coating iron or steel with zinc; protects by physical barrier AND sacrificial protection",
                    "Passive Layer": "A thin, adherent, impermeable oxide film (e.g., Al₂O₃, Cr₂O₃) that prevents further corrosion of the underlying metal",
                    "Galvanic Corrosion": "Accelerated corrosion of a less noble metal in electrical contact with a more noble metal in the presence of an electrolyte",
                    "Bimetallic Corrosion": "Another term for galvanic corrosion; the more reactive metal of the couple is selectively corroded"
                },
                mechanismOfIronRusting: {
                    conditions: "Requires both O₂ and H₂O (moisture); absence of either prevents rusting",
                    anodeReaction: "Fe(s) → Fe²⁺(aq) + 2e⁻   [oxidation; occurs at anodic pits or stress points]",
                    cathodeReaction: "O₂(g) + 2H₂O(l) + 4e⁻ → 4OH⁻(aq)   [reduction; at cathodic regions]",
                    secondaryReactions: [
                        "Fe²⁺(aq) + 2OH⁻(aq) → Fe(OH)₂(s)  [iron(II) hydroxide precipitates]",
                        "4Fe(OH)₂(s) + O₂(g) + 2H₂O(l) → 4Fe(OH)₃(s)  [further oxidation]",
                        "2Fe(OH)₃(s) → Fe₂O₃(s) + 3H₂O  [dehydration to rust]"
                    ],
                    rustFormula: "Fe₂O₃·nH₂O (hydrated iron(III) oxide; variable n)",
                    acceleratingFactors: [
                        "Salt water / dissolved electrolytes (improve electrical conductivity of moisture film)",
                        "Acid rain (lower pH; H⁺ acts as additional oxidizing agent)",
                        "Contact with more noble metals (galvanic corrosion)",
                        "Mechanical stress, scratches, defects (increase anodic activity)",
                        "Higher temperature (increases reaction rates)"
                    ],
                    galvanicCorrosion: {
                        principle: "When two metals of different electrode potentials are in contact with electrolyte, the more reactive (lower E°) acts as anode and is selectively corroded",
                        example: "Iron nail in contact with copper: E°(Cu) > E°(Fe); Fe is anode → Fe corrodes faster than it would alone",
                        practicalImplications: [
                            "Iron pipes connected to copper fittings corrode rapidly",
                            "Aluminium aircraft fastened with steel bolts: Al corrodes",
                            "Zinc-plated (galvanized) iron: if zinc layer breached, Zn corrodes preferentially (protects Fe)"
                        ]
                    }
                },
                protectionMethods: {
                    physicalBarriers: {
                        description: "Prevent contact between metal and electrolyte/oxygen",
                        methods: [
                            { method: "Paint/lacquer", mechanism: "Physical barrier; excludes O₂ and H₂O", limitation: "Once scratched, corrosion can spread under paint" },
                            { method: "Oil/grease", mechanism: "Excludes water and O₂", limitation: "Must be reapplied; not suitable for structural applications" },
                            { method: "Plastic coating (PVC)", mechanism: "Physical barrier", limitation: "Inflexible; degrades in UV" },
                            { method: "Tin plating (tinplate)", mechanism: "Physical barrier; Sn is cathodic to Fe", limitation: "If coating broken, Fe corrodes FASTER due to galvanic effect (Sn is more noble)" }
                        ]
                    },
                    electrochemicalProtection: {
                        sacrificialProtection: {
                            principle: "Connect a metal more reactive than iron (lower E°) to the structure; it acts as anode and is sacrificially oxidized",
                            metals: [
                                { metal: "Zinc (Zn)", E: "−0.76 V", applications: "Galvanizing, zinc blocks on ship hulls, underground pipeline anodes" },
                                { metal: "Magnesium (Mg)", E: "−2.37 V", applications: "Protecting offshore platforms, buried pipelines; replaced more frequently due to rapid consumption" },
                                { metal: "Aluminium alloys", E: "~−0.76 V (alloyed)", applications: "Marine applications; replaced periodically" }
                            ],
                            mechanism: "Mg(s) → Mg²⁺(aq) + 2e⁻  [anode: Mg oxidized]; Fe²⁺ + 2e⁻ → Fe(s)  [cathode: Fe²⁺ reduced back to Fe, OR O₂ reduced]",
                            galvanizing: {
                                process: "Zinc coating applied by hot-dip galvanizing (steel dipped in molten Zn) or electroplating",
                                mechanismIntact: "Zn provides physical barrier AND has lower E° than Fe → acts as sacrificial anode if coating broken",
                                mechanismScratched: "Zn(s) → Zn²⁺(aq) + 2e⁻  [Zn corrodes]; Fe²⁺ + 2e⁻ → Fe [Fe protected]; opposite of tin plate",
                                corrosionProduct: "Zn(OH)₂ → ZnCO₃ (patina); adheres and provides secondary protection",
                                uses: "Corrugated iron roofing, crash barriers, chain-link fencing, car bodies"
                            }
                        },
                        impressedCurrentProtection: {
                            description: "External electrical source makes the metal structure the cathode (no oxidation at cathode)",
                            mechanism: "Apply negative potential to structure; anodic oxidation is prevented; O₂ reduction or H₂ evolution at structure instead",
                            applications: [
                                "Oil and gas pipelines (impressed current from transformer-rectifier)",
                                "Ship hulls (combined with sacrificial anodes)",
                                "Offshore platforms, storage tanks",
                                "Reinforced concrete structures in marine environments"
                            ],
                            advantages: "Fully controllable; can protect large structures; adjustable",
                            disadvantages: "Requires power supply; complex monitoring; risk of hydrogen embrittlement if over-protected"
                        }
                    },
                    alloyingAndPassivation: {
                        stainlessSteel: {
                            composition: "Iron + ≥10.5% chromium; often also nickel, molybdenum",
                            mechanism: "Cr₂O₃ passive layer forms spontaneously in oxygen; extremely thin (~2 nm), transparent, self-healing",
                            types: [
                                { grade: "304 (18/8)", composition: "18% Cr, 8% Ni", uses: "Kitchen equipment, cutlery, food processing" },
                                { grade: "316 (Marine grade)", composition: "16% Cr, 10% Ni, 2% Mo", uses: "Marine, chemical plant, surgical implants" }
                            ]
                        },
                        aluminium: {
                            description: "Al naturally forms thin Al₂O₃ layer in air; protects from further oxidation despite highly negative E°",
                            anodizing: {
                                process: "Anodic oxidation in H₂SO₄: 2Al + 3H₂O → Al₂O₃ + 6H⁺ + 6e⁻; thicker, controlled oxide layer",
                                benefits: "Thicker oxide (up to 25 μm); can be dyed; harder surface",
                                uses: "Architectural aluminium, aircraft panels, cookware"
                            }
                        }
                    }
                },
                economicAndEnvironmentalImpact: {
                    globalCost: "~3−4% of GDP in industrialized nations (USA: ~$270 billion/year, UK: ~£10 billion/year)",
                    preventionSavings: "Estimated 25−30% of corrosion costs preventable with best current practice",
                    environmentalIssues: [
                        "Organic coatings (paints) contain solvents and pigments (historical use of Pb compounds)",
                        "Chromate inhibitors highly toxic and now restricted (REACH regulations, EU)",
                        "Zinc-rich coatings: Zn released into environment; aquatic toxicity concerns",
                        "Impressed current can cause stray current corrosion of unprotected adjacent structures"
                    ]
                }
            }
        };
    }

    initializeRedoxExperiments() {
        this.redoxExperiments = {

            // ========================================
            // EXPERIMENT 1: REDOX REACTIONS AND THE ELECTROCHEMICAL SERIES
            // ========================================

            electrochemical_series: {
                name: "Building the Electrochemical Series: Displacement Reactions",
                relatedTopics: ['redox_fundamentals', 'electrochemical_cells'],
                category: 'electrochemistry',
                historicalBackground: {
                    scientist: "Alessandro Volta (1800) constructed the first battery; Daniel (1836) developed the Daniel cell",
                    development: "The electrochemical series systematized by 19th century chemists from Berzelius to Nernst",
                    significance: "Provides a quantitative scale of oxidizing/reducing power; predicts direction of spontaneous redox reactions"
                },
                labExperiment: {
                    title: "Displacement Reactions and Construction of the Electrochemical Series",
                    hypothesis: "Metals higher in the reactivity series will displace metals lower in the series from their salt solutions, as predicted by the electrochemical series",
                    purpose: "Determine the relative positions of metals in the electrochemical series by observing displacement reactions, and construct a simple galvanic cell to measure electrode potentials",
                    background: {
                        principle: "A metal can reduce the ions of any metal below it in the electrochemical series. The more negative the standard electrode potential, the stronger the reducing agent. Displacement reactions: M₁(s) + M₂²⁺(aq) → M₁²⁺(aq) + M₂(s) occurs if E°(M₂) > E°(M₁).",
                        cellPotential: "E°cell = E°cathode − E°anode; positive value = spontaneous reaction"
                    },
                    variables: {
                        independent: "Identity of metal strips and salt solutions",
                        dependent: "Observation of reaction (color change, metal deposition, temperature change)",
                        controlled: ["Concentration of salt solutions (0.1 mol dm⁻³)", "Volume of solution used", "Surface area of metal strips"]
                    },
                    materials: [
                        "Metal strips: Zn, Fe, Pb, Cu, Mg (cleaned with sandpaper)",
                        "Salt solutions (0.1 mol dm⁻³): ZnSO₄, FeSO₄, Pb(NO₃)₂, CuSO₄, MgSO₄",
                        "Spot plate or well plate",
                        "Forceps / tweezers",
                        "Magnifying glass",
                        "For cell measurement: voltmeter (high impedance), crocodile clips, leads, beakers, salt bridge material (KNO₃ in filter paper)",
                        "Sandpaper (to clean metal surfaces)"
                    ],
                    safetyPrecautions: [
                        "Lead and lead nitrate solution are toxic — minimize exposure, wash hands",
                        "Copper sulfate solution is an irritant and harmful to aquatic life",
                        "Dispose of all solutions in designated waste containers",
                        "Clean all metal surfaces with sandpaper before use (oxide layer affects results)"
                    ],
                    procedure: [
                        "PART A: Displacement reactions",
                        "Prepare a 5×5 grid on spot plate; label rows with metal strips (Zn, Fe, Pb, Cu, Mg), columns with metal ion solutions",
                        "Place a small piece of each metal into wells containing each of the 5 solutions",
                        "After 5 minutes, examine each well carefully for:",
                        "  (i) Metal depositing on the strip",
                        "  (ii) Color change in solution",
                        "  (iii) Gas evolution",
                        "Record results as 'reaction' (R) or 'no reaction' (NR)",
                        "",
                        "PART B: Measuring cell potentials",
                        "Set up galvanic cells: place each metal in its own solution in a small beaker",
                        "Connect pairs of half-cells with a salt bridge (filter paper soaked in KNO₃)",
                        "Connect voltmeter between the two electrodes",
                        "Record cell potential for each combination",
                        "Use values to construct an electrochemical series for the metals tested"
                    ],
                    expectedResultsTable: [
                        ["Metal\\Ion", "Zn²⁺", "Fe²⁺", "Pb²⁺", "Cu²⁺", "Mg²⁺"],
                        ["Zn", "—", "R", "R", "R (blue fades, pink Cu)", "NR"],
                        ["Fe", "NR", "—", "R", "R", "NR"],
                        ["Pb", "NR", "NR", "—", "R (blue fades, Cu)", "NR"],
                        ["Cu", "NR", "NR", "NR", "—", "NR"],
                        ["Mg", "R", "R", "R", "R", "—"]
                    ],
                    analysis: [
                        "Reactions occur when metal strip has more negative E° than metal ion's E°",
                        "Mg displaces all others (most negative E° = strongest reducing agent)",
                        "Cu is displaced by all others (most positive E° = strongest oxidizing agent as ion)",
                        "Series from most reactive to least: Mg > Zn > Fe > Pb > Cu",
                        "E°cell values from Part B should correlate with E° differences from data book"
                    ],
                    conclusions: [
                        "Displacement reactions confirm relative positions in electrochemical series",
                        "Electrochemical series provides quantitative ordering of reducing/oxidizing power",
                        "Positive E°cell confirms spontaneous reaction direction",
                        "Measured potentials may differ from standard values due to non-standard concentrations and surface conditions"
                    ],
                    realWorldApplications: [
                        "Selection of metals to prevent galvanic corrosion in engineering",
                        "Design of sacrificial anodes for corrosion protection",
                        "Understanding battery and fuel cell chemistry",
                        "Metal extraction and refining processes"
                    ],
                    extensions: [
                        "Measure cell potentials with varying concentrations (Nernst equation investigation)",
                        "Investigate effect of temperature on cell potential",
                        "Add further metals (Ni, Ag) to extend the series",
                        "Research the activity of transition metals and their complex ion formation"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 2: CONSTRUCTION OF A GALVANIC CELL
            // ========================================

            galvanic_cell_construction: {
                name: "Constructing and Investigating the Daniel Cell",
                relatedTopics: ['electrochemical_cells', 'redox_fundamentals'],
                category: 'electrochemistry',
                historicalBackground: {
                    scientist: "John Frederic Daniell (1836)",
                    discovery: "Developed the Daniel cell to provide a more reliable current than Volta's pile",
                    significance: "First practical long-duration galvanic cell; used extensively in early telegraphy",
                    modernRelevance: "The Daniel cell remains the archetypal example for teaching electrochemistry; principles extend to modern batteries"
                },
                labExperiment: {
                    title: "Construction and Investigation of the Daniel Cell",
                    hypothesis: "The Daniel cell will produce a voltage of approximately +1.10 V under standard conditions; the measured potential will vary with ion concentration according to the Nernst equation",
                    purpose: "Construct a working galvanic cell, measure its EMF, investigate the role of the salt bridge, and explore the effect of ion concentration on cell potential",
                    background: {
                        anodeReaction: "Zn(s) → Zn²⁺(aq) + 2e⁻   E° = +0.76 V (oxidation potential)",
                        cathodeReaction: "Cu²⁺(aq) + 2e⁻ → Cu(s)   E° = +0.34 V (reduction potential)",
                        overallReaction: "Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)",
                        E_cell: "E°cell = E°cathode − E°anode = +0.34 − (−0.76) = +1.10 V",
                        saltBridgeFunction: "Allows ion flow to maintain electrical neutrality; without it, charge builds up and reaction stops",
                        nernst: "E = E° − (0.0257/n) × ln([Zn²⁺]/[Cu²⁺])  at 298 K"
                    },
                    variables: {
                        independent: "Concentration of CuSO₄ and ZnSO₄ solutions",
                        dependent: "Cell potential (voltage)",
                        controlled: ["Temperature (room temperature)", "Surface area of electrodes", "Type of salt bridge electrolyte"]
                    },
                    materials: [
                        "Zinc strip (cleaned with sandpaper)",
                        "Copper strip (cleaned with sandpaper)",
                        "0.1 mol dm⁻³, 0.5 mol dm⁻³, and 1.0 mol dm⁻³ ZnSO₄(aq)",
                        "0.1 mol dm⁻³, 0.5 mol dm⁻³, and 1.0 mol dm⁻³ CuSO₄(aq)",
                        "Two 100 mL beakers",
                        "Salt bridge: filter paper or glass tubing filled with KNO₃(aq) or KCl(aq)",
                        "Digital multimeter or high-impedance voltmeter",
                        "Connecting leads with crocodile clips",
                        "Sandpaper"
                    ],
                    safetyPrecautions: [
                        "Copper sulfate is irritant and harmful to aquatic organisms; dispose properly",
                        "Zinc sulfate is irritant; avoid skin contact",
                        "Handle electrodes with care after experiment; may have metal deposits"
                    ],
                    procedure: [
                        "PART A: Standard Daniel Cell",
                        "Polish both metal strips with sandpaper; rinse with deionized water",
                        "Pour 50 mL of 1.0 mol dm⁻³ ZnSO₄ into beaker 1; place Zn strip as electrode",
                        "Pour 50 mL of 1.0 mol dm⁻³ CuSO₄ into beaker 2; place Cu strip as electrode",
                        "Connect the two beakers with a salt bridge (KNO₃-soaked filter paper bridging both)",
                        "Connect voltmeter: positive terminal to Cu electrode, negative to Zn electrode",
                        "Record the initial cell potential; note polarity",
                        "Let run for 5 minutes; record any changes in voltage or appearance",
                        "Remove salt bridge; record what happens to voltage",
                        "Replace salt bridge; record what happens",
                        "",
                        "PART B: Effect of Concentration on EMF (Nernst equation)",
                        "Vary [Cu²⁺] while keeping [Zn²⁺] = 1.0 mol dm⁻³:",
                        "  (i) [Cu²⁺] = 1.0, 0.1, 0.01, 0.001 mol dm⁻³",
                        "Record E for each combination",
                        "Vary [Zn²⁺] while keeping [Cu²⁺] = 1.0 mol dm⁻³:",
                        "  (i) [Zn²⁺] = 1.0, 0.1, 0.01, 0.001 mol dm⁻³",
                        "Record E for each combination",
                        "Plot E vs log([Cu²⁺]/[Zn²⁺]) and determine slope"
                    ],
                    expectedResults: {
                        standardCell: "~0.9−1.1 V (may be slightly below 1.10 V due to non-standard conditions and electrode surface effects)",
                        saltBridgeRemoval: "Voltage drops rapidly to near zero within seconds",
                        nernstSlope: "Slope of E vs log(Q) = −0.0592/n = −0.0296 V/decade for n=2",
                        observations: "Zn electrode loses mass; Cu electrode gains mass; blue color of CuSO₄ fades over time"
                    },
                    dataTable: [
                        ["[Cu²⁺] (mol dm⁻³)", "[Zn²⁺] (mol dm⁻³)", "log([Zn²⁺]/[Cu²⁺])", "Measured E (V)", "Predicted E (Nernst) (V)"],
                        ["1.0", "1.0", "0.00", "~1.10", "1.10"],
                        ["0.1", "1.0", "1.00", "~1.07", "1.07"],
                        ["0.01", "1.0", "2.00", "~1.04", "1.04"],
                        ["0.001", "1.0", "3.00", "~1.01", "1.01"]
                    ],
                    analysis: [
                        "Measured E agrees with E° under standard conditions",
                        "Salt bridge is essential: removing it stops current flow; ion migration required to maintain charge neutrality",
                        "Increasing [Cu²⁺] increases cell potential (more driving force for reduction)",
                        "Increasing [Zn²⁺] decreases cell potential (product buildup opposes reaction)",
                        "Linear E vs log(Q) plot confirms Nernst equation",
                        "Slope of ~−0.030 V/decade confirms n=2 electron transfer (theoretical: −0.0592/2 = −0.0296)"
                    ],
                    conclusions: [
                        "Daniel cell converts chemical energy of Zn/Cu²⁺ reaction into electrical energy",
                        "E°cell ≈ +1.10 V confirms prediction from standard electrode potentials",
                        "Salt bridge is essential component: maintains charge neutrality enabling sustained current",
                        "Cell potential varies with concentration as predicted by the Nernst equation",
                        "These principles apply directly to modern battery technology"
                    ],
                    realWorldApplications: [
                        "Lead-acid battery in vehicles (6 cells × 2 V = 12 V)",
                        "Lithium-ion batteries in portable electronics",
                        "pH measurement (concentration cell principle)",
                        "Fuel cells for vehicles and stationary power generation"
                    ],
                    extensions: [
                        "Construct a concentration cell (same electrodes, different concentrations); measure potential",
                        "Investigate effect of temperature on cell potential",
                        "Calculate ΔG° from measured E°cell and compare to thermochemical data",
                        "Research design of lithium-ion battery and compare electrochemistry to Daniel cell"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 3: ELECTROLYSIS OF AQUEOUS COPPER SULFATE
            // ========================================

            electrolysis_copper_sulfate: {
                name: "Electrolysis of Copper Sulfate Solution: Faraday's Laws",
                relatedTopics: ['electrolysis', 'redox_fundamentals', 'electrochemical_cells'],
                category: 'electrolysis',
                historicalBackground: {
                    scientist: "Michael Faraday (1833−1834)",
                    laws: "Faraday's First and Second Laws of Electrolysis; coined terms electrode, electrolyte, anode, cathode, ion",
                    significance: "Quantitative relationship between electricity and chemical change; foundation of electrochemistry",
                    industrialImpact: "Led to development of electroplating, electrorefining, and industrial electrolysis"
                },
                labExperiment: {
                    title: "Electrolysis of Copper Sulfate: Verification of Faraday's First Law",
                    hypothesis: "The mass of copper deposited at the cathode will be directly proportional to the charge passed, in accordance with Faraday's First Law of Electrolysis",
                    purpose: "Verify Faraday's First Law quantitatively, determine the Faraday constant experimentally, and investigate selective discharge in electrolysis of CuSO₄(aq)",
                    background: {
                        cathodeReaction: "Cu²⁺(aq) + 2e⁻ → Cu(s)   [reduction; copper deposits]",
                        anodeReactionCuElectrode: "Cu(s) → Cu²⁺(aq) + 2e⁻   [active Cu anode dissolves]",
                        anodeReactionPtElectrode: "2H₂O(l) → O₂(g) + 4H⁺(aq) + 4e⁻   [inert anode; water oxidized]",
                        faradayFirst: "m ∝ Q = It   (mass deposited proportional to charge passed)",
                        quantitative: "m = (It × M) / (F × z)   where z = 2 for Cu²⁺, M = 63.55 g mol⁻¹"
                    },
                    variables: {
                        independent: "Charge passed (Q = It; vary time at constant current, or current with constant time)",
                        dependent: "Mass of copper deposited at cathode",
                        controlled: ["Temperature", "CuSO₄ concentration", "Electrode surface area", "Current (for Part A)"]
                    },
                    materials: [
                        "DC power supply (0−6 V, 0−2 A)",
                        "Ammeter (0−2 A)",
                        "Connecting leads",
                        "Two copper electrodes (for active electrode experiment) OR two carbon/graphite electrodes (for inert electrode experiment)",
                        "1.0 mol dm⁻³ CuSO₄(aq)",
                        "100 mL beaker",
                        "Analytical balance (to ±0.001 g)",
                        "Stopwatch / timer",
                        "Sandpaper (to clean electrodes)",
                        "Acetone or ethanol (to degrease electrodes before weighing)",
                        "Drying oven or heat gun"
                    ],
                    safetyPrecautions: [
                        "Ensure electrical connections are secure before switching on power",
                        "Do not exceed 2 A or 6 V to avoid overheating and H₂S/SO₂ production",
                        "Copper sulfate is irritant and harmful to aquatic life; dispose in designated waste",
                        "Acetone is highly flammable; use in fume hood away from ignition sources",
                        "Electrodes will be warm after electrolysis; handle with care"
                    ],
                    procedure: [
                        "PREPARATION:",
                        "Clean copper electrodes with sandpaper; wipe with acetone on cotton wool",
                        "Rinse with deionized water; dry in oven at 80°C for 5 minutes",
                        "Allow to cool in desiccator; weigh electrodes to ±0.001 g; record masses",
                        "",
                        "ELECTROLYSIS:",
                        "Pour 80 mL of 1.0 mol dm⁻³ CuSO₄(aq) into beaker",
                        "Set up circuit: power supply → ammeter → anode → solution → cathode → back to power supply",
                        "Anode = positive terminal; cathode = negative terminal",
                        "Set current to exactly 0.50 A using ammeter; adjust rheostat if needed",
                        "Switch on and start stopwatch simultaneously",
                        "Monitor and record current every 2 minutes; adjust to maintain 0.50 A",
                        "After exactly 20 minutes, switch off and stop stopwatch",
                        "Carefully remove electrodes without disturbing deposited copper",
                        "Rinse gently with deionized water; rinse with acetone; dry in oven",
                        "Cool in desiccator; reweigh both electrodes; record masses",
                        "",
                        "PART B: Vary charge (repeat with different times: 10 min, 20 min, 30 min, 40 min at 0.50 A)"
                    ],
                    expectedResults: {
                        theoreticalmass20min: "m = (0.50 × 1200 × 63.55) / (96485 × 2) = 0.197 g",
                        cathodeGainsMass: "Copper deposits on cathode (pink metallic sheen visible)",
                        anodeLosesMass: "Copper anode loses mass (active electrode dissolves)",
                        anodeMassLoss: "Should approximately equal cathode mass gain (active anode)",
                        linearRelationship: "Plot of mass deposited vs charge passed should be linear through origin"
                    },
                    dataTable: [
                        ["Time (min)", "Charge Q (C)", "Theoretical m(Cu) (g)", "Actual m(Cu) (g)", "% Efficiency"],
                        ["10", "300", "0.099", "~0.095−0.099", "~96−100%"],
                        ["20", "600", "0.197", "~0.190−0.197", "~96−100%"],
                        ["30", "900", "0.296", "~0.285−0.296", "~96−100%"],
                        ["40", "1200", "0.394", "~0.380−0.394", "~96−100%"]
                    ],
                    graphWork: [
                        "Plot mass of Cu deposited (y-axis) vs charge passed in coulombs (x-axis)",
                        "Straight line through origin confirms Faraday's First Law",
                        "Gradient = M/(F×z) = 63.55/(F×2); rearrange to find experimental F",
                        "Theoretical gradient = 63.55/(96485×2) = 3.29 × 10⁻⁴ g C⁻¹",
                        "Compare experimental F to literature value (96485 C mol⁻¹)"
                    ],
                    analysis: [
                        "Mass of Cu deposited ∝ Q confirms Faraday's First Law",
                        "Gradient of graph gives experimental value of M/(Fz); calculate F from gradient",
                        "Active Cu anode maintains [Cu²⁺] constant (Cu dissolves to replace deposited Cu)",
                        "Efficiency < 100% due to competing reactions (O₂ evolution, Cu²⁺ depletion near electrode)",
                        "Switch to inert (graphite) anode: anode produces O₂ not Cu; solution becomes acidic as H⁺ produced"
                    ],
                    conclusions: [
                        "Faraday's First Law quantitatively verified: mass ∝ charge passed",
                        "Experimental Faraday constant agrees with theoretical within ~2−3%",
                        "Electrode material (active vs inert) determines anode reaction in CuSO₄ electrolysis",
                        "Principle applied industrially in electroplating and copper electrorefining"
                    ],
                    realWorldApplications: [
                        "Copper electrorefining: impure Cu anode → pure Cu cathode (99.99% purity)",
                        "Electroplating: silver, gold, chrome, nickel plating of objects",
                        "Industrial electrosynthesis: chlorine, sodium hydroxide production",
                        "Electroforming: making exact metal replicas"
                    ],
                    extensions: [
                        "Repeat with different current values at fixed time; plot m vs I (should be linear)",
                        "Switch to inert (graphite) electrodes; observe gas at anode (O₂); note [H⁺] increase with pH paper",
                        "Investigate electroplating of steel nail with copper; assess quality of deposit",
                        "Calculate cost of electricity per gram of Cu deposited at industrial scale"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 4: REDOX TITRATION — PERMANGANATE
            // ========================================

            permanganate_titration: {
                name: "Redox Titration with Potassium Permanganate: Determination of Iron(II) Content",
                relatedTopics: ['redox_titrations', 'redox_fundamentals'],
                category: 'analytical',
                historicalBackground: {
                    scientist: "Method developed following isolation of KMnO₄ by Carl Löwig (1840s) and systematized by 19th century analytical chemists",
                    significance: "Self-indicating titration is elegantly simple; among the most widely used redox analytical methods",
                    industrialUse: "Iron determination in steel, ore, pharmaceutical tablets (iron supplement analysis)"
                },
                labExperiment: {
                    title: "Determination of Iron(II) Content in Iron Tablets by Permanganate Titration",
                    hypothesis: "The concentration of Fe²⁺ in dissolved iron tablets can be accurately determined by titration with standardized KMnO₄; mass of iron per tablet calculated from titre values",
                    purpose: "Determine the mass of iron in commercial iron supplement tablets using permanganate redox titration; evaluate accuracy of the method against the label claim",
                    background: {
                        halfEquationKMnO4: "MnO₄⁻(aq) + 8H⁺(aq) + 5e⁻ → Mn²⁺(aq) + 4H₂O(l)   E° = +1.51 V",
                        halfEquationFe: "Fe²⁺(aq) → Fe³⁺(aq) + e⁻   E° = −0.77 V (oxidation potential)",
                        fullEquation: "MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺",
                        moleRatio: "1 mol MnO₄⁻ ≡ 5 mol Fe²⁺",
                        whyH2SO4: "H₂SO₄ provides H⁺ needed for reaction; HCl avoided because Cl⁻ can be oxidized by MnO₄⁻ giving erroneously high result",
                        selfIndicating: "KMnO₄ is purple; Mn²⁺ is colourless; endpoint = first permanent pale pink tinge"
                    },
                    variables: {
                        independent: "Volume of KMnO₄ solution added",
                        dependent: "Color change at endpoint; titre volume",
                        controlled: ["Concentration of KMnO₄ (standardized)", "Volume of Fe²⁺ solution per titration", "Acid concentration"]
                    },
                    materials: [
                        "Iron tablets (commercial ferrous sulfate, FeSO₄·7H₂O; note stated Fe content on packaging)",
                        "0.0200 mol dm⁻³ KMnO₄ solution (standardized)",
                        "Dilute H₂SO₄ (approximately 1 mol dm⁻³)",
                        "Deionized water",
                        "250 mL volumetric flask",
                        "Burette (50 mL) + burette stand",
                        "25.00 mL pipette + pipette filler",
                        "Conical flasks (250 mL) × 4",
                        "White tile",
                        "Funnel (for filling burette)",
                        "Mortar and pestle",
                        "Balance (±0.001 g)"
                    ],
                    safetyPrecautions: [
                        "KMnO₄ is a strong oxidizer; stains skin and clothing permanently purple/brown",
                        "Dilute H₂SO₄ is corrosive; wear eye protection at all times",
                        "Dispose of KMnO₄ waste carefully; do not put concentrated solutions down drain",
                        "KMnO₄ can oxidize rubber tubing; use plastic or glass equipment"
                    ],
                    procedure: [
                        "PREPARATION OF IRON(II) SOLUTION FROM TABLETS:",
                        "Accurately weigh 5 iron tablets; crush to fine powder in mortar and pestle",
                        "Weigh approximately 2.5 g of the powder (record exact mass); transfer to 250 mL beaker",
                        "Dissolve in 25 mL dilute H₂SO₄ (1 mol dm⁻³); stir until dissolved",
                        "Filter if necessary to remove binders/fillers",
                        "Transfer quantitatively to 250 mL volumetric flask; make up to mark with deionized water",
                        "Stopper and mix thoroughly",
                        "",
                        "TITRATION:",
                        "Rinse burette with KMnO₄ solution; fill to 0.00 mL mark",
                        "Pipette 25.00 mL of iron(II) solution into conical flask",
                        "Add 25 mL dilute H₂SO₄ to the flask (to ensure acidic conditions)",
                        "Record initial burette reading",
                        "Titrate with KMnO₄: add dropwise, swirling constantly",
                        "Observe: purple color disappears rapidly at first (each MnO₄⁻ immediately reduced by excess Fe²⁺)",
                        "Near endpoint: purple color takes longer to discharge; add drop by drop",
                        "Endpoint: first permanent pale pink color lasting >30 seconds",
                        "Record final burette reading",
                        "Repeat for concordant results (within ±0.10 mL)"
                    ],
                    sampleCalculation: {
                        given: "KMnO₄ concentration = 0.0200 mol dm⁻³; average titre = 24.80 mL; solution in 250 mL flask from 2.53 g tablet powder",
                        steps: [
                            "n(MnO₄⁻) = 0.0200 × 24.80/1000 = 4.96 × 10⁻⁴ mol",
                            "Mole ratio 1:5, so n(Fe²⁺) in 25.00 mL = 5 × 4.96 × 10⁻⁴ = 2.48 × 10⁻³ mol",
                            "Total n(Fe²⁺) in 250 mL flask = 10 × 2.48 × 10⁻³ = 2.48 × 10⁻² mol",
                            "m(Fe) = 2.48 × 10⁻² × 55.85 = 1.385 g",
                            "% Fe in powder = (1.385/2.53) × 100 = 54.7%",
                            "Mass Fe per tablet = (1.385/5) = 0.277 g = 277 mg per tablet",
                            "Compare to label claim (e.g., 200 mg Fe per tablet)"
                        ]
                    },
                    dataTable: [
                        ["Titration", "Initial Reading (mL)", "Final Reading (mL)", "Titre (mL)", "Use?"],
                        ["Rough", "0.00", "25.30", "25.30", "No"],
                        ["1", "0.00", "24.75", "24.75", "Yes"],
                        ["2", "0.00", "24.85", "24.85", "Yes"],
                        ["3", "0.00", "24.80", "24.80", "Yes"],
                        ["Mean concordant titre", "—", "—", "24.80", "—"]
                    ],
                    commonErrors: [
                        "Using HCl instead of H₂SO₄: Cl⁻ oxidized by MnO₄⁻, giving high result",
                        "Adding starch as indicator: not appropriate for permanganate (self-indicating)",
                        "Overrunning endpoint: first permanent pink is endpoint; if purple, too much added",
                        "Allowing Fe²⁺ solution to stand in air: Fe²⁺ oxidized to Fe³⁺ by O₂ (low result)",
                        "Not including H⁺ in calculation: Mn⁷⁺ → Mn²⁺ requires 8 H⁺; without acid, reaction gives MnO₂ (different stoichiometry)"
                    ],
                    analysis: [
                        "Purple colour of MnO₄⁻ acts as its own indicator — no external indicator needed",
                        "Endpoint detected by first permanent pale pink (excess 1 drop of KMnO₄)",
                        "Mole ratio 1:5 (KMnO₄:Fe²⁺) crucial for correct calculation",
                        "Result compared to stated tablet content validates method accuracy",
                        "Sources of error: Fe²⁺ oxidation by air; tablet fillers; indicator endpoint judgment"
                    ],
                    conclusions: [
                        "Permanganate titration is a reliable self-indicating redox analytical method",
                        "Iron content in commercial tablets can be accurately determined",
                        "Acidic conditions (H₂SO₄) are essential for correct stoichiometry and reaction rate",
                        "Mole ratio from balanced equation is fundamental to calculation accuracy",
                        "Method precision demonstrated by concordant titres within ±0.10 mL"
                    ],
                    realWorldApplications: [
                        "Quality control analysis of iron supplement tablets",
                        "Iron content in food and dietary supplements",
                        "Iron determination in industrial process streams",
                        "Monitoring Fe²⁺ levels in water treatment"
                    ],
                    extensions: [
                        "Standardize KMnO₄ against sodium oxalate (Na₂C₂O₄) primary standard",
                        "Determine iron content in different brands of iron tablets; compare to label claims",
                        "Investigate rate of Fe²⁺ oxidation in air (prepare solution, titrate at intervals)",
                        "Determine H₂O₂ concentration in a commercial antiseptic solution using KMnO₄"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 5: CORROSION AND PROTECTION
            // ========================================

            corrosion_and_protection_experiment: {
                name: "Investigating Corrosion of Iron and Evaluating Protection Methods",
                relatedTopics: ['corrosion_and_protection', 'redox_fundamentals', 'electrochemical_cells'],
                category: 'applications',
                historicalBackground: {
                    context: "Corrosion costs industrialized nations ~3−4% of GDP annually",
                    historicalSolutions: "Galvanizing pioneered in France (Sorel, 1837); impressed current protection patented by Edison (1890); stainless steel discovered by Brearley (1913)",
                    importance: "Understanding corrosion as an electrochemical process has enabled rational design of protection strategies saving billions annually"
                },
                labExperiment: {
                    title: "Investigating Iron Corrosion and Evaluating Anti-Corrosion Methods",
                    hypothesis: "Iron will corrode most rapidly in the presence of both oxygen and electrolyte (saltwater); protective coatings and sacrificial metals will significantly reduce corrosion",
                    purpose: "Investigate the conditions necessary for iron corrosion, compare effectiveness of different protection methods, and understand the electrochemical principles underlying each method",
                    background: {
                        anodeReaction: "Fe(s) → Fe²⁺(aq) + 2e⁻   [iron oxidized at anodic sites]",
                        cathodeReaction: "O₂(g) + 2H₂O(l) + 4e⁻ → 4OH⁻(aq)   [oxygen reduced at cathodic sites]",
                        rust: "Fe²⁺ → Fe(OH)₂ → Fe(OH)₃ → Fe₂O₃·nH₂O  (rust)",
                        indicator: "Ferroxyl indicator (potassium hexacyanoferrate(II) + phenolphthalein) visually shows where anodic (Fe²⁺ formed: blue) and cathodic (OH⁻ formed: pink) regions are",
                        saltEffect: "NaCl increases electrolyte conductivity; Cl⁻ attacks passive oxide layer; greatly accelerates corrosion"
                    },
                    variables: {
                        independent: "Environmental conditions (presence/absence of water, O₂, salt) and protection method",
                        dependent: "Degree of rusting observed after set time period",
                        controlled: ["Type of iron/steel nails", "Temperature", "Duration of experiment", "Initial nail condition"]
                    },
                    materials: [
                        "Iron or steel nails (identical, cleaned with sandpaper and acid)",
                        "Test tubes with bungs × 8−10",
                        "Distilled water",
                        "Brine (saturated NaCl solution)",
                        "Calcium chloride (drying agent, for dry tube)",
                        "Boiled deionized water (for O₂-free tube; sealed with oil)",
                        "Zinc metal (strip or granules, for sacrificial protection test)",
                        "Copper metal strip (to test accelerated corrosion via bimetallic contact)",
                        "Petroleum jelly / nail varnish / paint (coating tests)",
                        "Ferroxyl indicator: 1% K₄[Fe(CN)₆] + phenolphthalein in 3% NaCl agar",
                        "Petri dishes",
                        "Ruler (to measure rust extent)"
                    ],
                    safetyPrecautions: [
                        "Potassium hexacyanoferrate(II) is not highly hazardous; avoid ingestion",
                        "Boiling water to remove O₂: use heat-proof glassware; allow to cool before handling",
                        "Rust particles: avoid inhalation",
                        "Dilute acid used to clean nails is corrosive; wear eye protection"
                    ],
                    procedure: [
                        "PART A: CONDITIONS FOR RUSTING (set up and leave 7 days or use accelerated brine conditions at 40°C for 24 h)",
                        "Tube 1: Iron nail in distilled water (O₂ present from air)",
                        "Tube 2: Iron nail in water with calcium chloride at top (excludes moisture, O₂ present)",
                        "  → Seal CaCl₂ with cotton wool plug at top; nail in dry air",
                        "Tube 3: Iron nail in boiled deionized water sealed with thin oil layer (O₂ excluded)",
                        "Tube 4: Iron nail in brine (saltwater; NaCl 3%)",
                        "Tube 5: Iron nail in distilled water (control, like tube 1 for comparison)",
                        "",
                        "PART B: PROTECTION METHODS (use brine as most aggressive condition; assess over 24−48 h at 40°C)",
                        "Tube 6: Iron nail coated with petroleum jelly (physical barrier)",
                        "Tube 7: Iron nail painted with nail varnish on top half only",
                        "Tube 8: Iron nail in contact with zinc strip (sacrificial anode)",
                        "Tube 9: Iron nail in contact with copper strip (bimetallic acceleration)",
                        "Tube 10: Iron nail fully coated with paint",
                        "All tubes: brine solution",
                        "",
                        "PART C: FERROXYL INDICATOR DEMONSTRATION (for visualizing electrochemical nature of corrosion)",
                        "Prepare ferroxyl indicator agar: dissolve indicator in warm 3% NaCl agar solution; pour into petri dish",
                        "Place a clean iron nail across the petri dish; allow agar to set around nail",
                        "Observe color development over 20−30 minutes:",
                        "  Blue (Prussian blue): Fe²⁺ present → anodic regions (OXIDATION)",
                        "  Pink/red: OH⁻ present (phenolphthalein) → cathodic regions (REDUCTION)",
                        "Note location of blue (tips, scratches) vs pink (body of nail)"
                    ],
                    expectedResults: {
                        tube1: "Rusts moderately (water + O₂ present)",
                        tube2: "Little to no rust (no moisture; dry air only)",
                        tube3: "Little to no rust (no dissolved O₂)",
                        tube4: "Rusts most severely (electrolyte accelerates electrochemical corrosion)",
                        tube5: "As tube 1 (repeat)",
                        tube6: "Protected where coated; rust if coating incomplete",
                        tube7: "Uncoated area rusts; rust may spread under varnish",
                        tube8: "Iron nail protected; zinc corrodes instead",
                        tube9: "Iron nail rusts FASTER (galvanic corrosion; Cu is cathodic, Fe is anodic)",
                        tube10: "Protected if coating intact",
                        ferroxylDemonstration: "Blue at nail tips and scratches (high stress → anodic); pink along body (cathodic); confirms electrochemical model"
                    },
                    dataTable: [
                        ["Condition", "After 24h", "After 48h", "Rust Level (0−5)", "Explanation"],
                        ["Distilled water only", "Slight rust", "Moderate rust", "2", "Both O₂ and H₂O present"],
                        ["Dry air (no moisture)", "No rust", "No rust", "0", "No electrolyte; no electrochemical cell"],
                        ["O₂-free water", "No rust", "Trace", "0−1", "No oxidizing agent"],
                        ["Brine (3% NaCl)", "Heavy rust", "Very heavy rust", "4−5", "Electrolyte + O₂; rapid ion transport"],
                        ["Nail + zinc in brine", "No rust on nail", "Slight rust on nail", "0−1", "Zn sacrificed; Fe protected"],
                        ["Nail + copper in brine", "Heavy rust", "Very heavy rust", "5", "Galvanic corrosion; Cu is cathode; Fe is anode"]
                    ],
                    analysis: [
                        "Rusting requires BOTH O₂ and H₂O: tubes with only one confirm this",
                        "Salt accelerates corrosion by increasing electrolyte conductivity (more rapid ion migration)",
                        "Sacrificial zinc protects iron: E°(Zn) < E°(Fe); Zn is anodic → Zn oxidized, not Fe",
                        "Copper accelerates iron corrosion: E°(Cu) > E°(Fe); Fe is anodic in Fe/Cu bimetallic cell",
                        "Ferroxyl indicator visually confirms electrochemical model: anodic (blue/Fe²⁺) and cathodic (pink/OH⁻) regions",
                        "Physical barriers work only when intact: scratched paint accelerates corrosion under coating"
                    ],
                    conclusions: [
                        "Iron corrosion is an electrochemical process requiring O₂ and moisture (electrolyte)",
                        "Electrochemical series accurately predicts which metal corrodes in bimetallic couples",
                        "Sacrificial protection works because more reactive metal (Zn) is preferentially oxidized",
                        "Bimetallic contact with less reactive metal (Cu) accelerates corrosion of iron",
                        "Physical barriers effective only when complete; any breach allows accelerated corrosion",
                        "Ferroxyl indicator visually demonstrates the spatial separation of oxidation and reduction in corrosion"
                    ],
                    realWorldApplications: [
                        "Galvanizing of steel structures (bridges, railings, cars)",
                        "Sacrificial zinc or magnesium anodes on ship hulls, offshore platforms, buried pipelines",
                        "Stainless steel and aluminium alloys using passive oxide layers",
                        "Cathodic protection of reinforced concrete in bridges and car parks",
                        "Design of bimetallic structures to avoid galvanic corrosion (e.g., use of insulating washers)"
                    ],
                    extensions: [
                        "Quantify rusting by weighing nails before and after (mass gain from rust formation)",
                        "Test effectiveness of different coating materials: bitumen paint vs epoxy vs zinc spray",
                        "Investigate impressed current cathodic protection using a small DC supply",
                        "Model the corrosion of steel in reinforced concrete in NaCl solution (simulate de-icing salt penetration)"
                    ]
                }
            }
        };

        this.linkExperimentsToTopics();
    }

    linkExperimentsToTopics() {
        Object.entries(this.redoxExperiments).forEach(([expId, experiment]) => {
            experiment.relatedTopics.forEach(topicId => {
                if (this.redoxTopics[topicId]) {
                    if (!this.redoxTopics[topicId].relatedExperiments) {
                        this.redoxTopics[topicId].relatedExperiments = [];
                    }
                    this.redoxTopics[topicId].relatedExperiments.push({
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
            redox_fundamentals: {
                'Oxidation and Reduction': [
                    'Thinking oxidation always involves oxygen (oxidation is loss of electrons; oxygen involvement is common but not required)',
                    'Confusing OIL and RIG: "oxidation is gain" — this is WRONG; Oxidation Is Loss (of electrons)',
                    'Believing a species can be oxidized without another being reduced (redox reactions always involve both simultaneously)',
                    'Thinking the charge on an ion equals its oxidation state in all compounds (only true for simple monatomic ions)',
                    'Confusing oxidizing agent with the species that gets oxidized (the oxidizing agent is REDUCED; it causes oxidation of the other species)'
                ],
                'Oxidation States': [
                    'Thinking oxygen is always −2 (it is −1 in peroxides like H₂O₂, +2 in OF₂)',
                    'Believing oxidation states are real charges on atoms (they are a bookkeeping device; formal charges in ionic approximation)',
                    'Forgetting that the sum of oxidation states in an ion must equal the charge on the ion (not zero)',
                    'Assigning oxidation states to elements in alloys or metallic compounds (convention breaks down; elemental metals = 0)',
                    'Thinking higher oxidation state = more reactive (e.g., Mn⁷⁺ as MnO₄⁻ is reactive oxidizer, but Mn²⁺ is stable)'
                ],
                'Balancing Equations': [
                    'Balancing redox equations by trial and error without using half-equations (very unreliable for complex reactions)',
                    'Forgetting to include H⁺ or OH⁻ when balancing in acidic or basic solution',
                    'Thinking you can balance charge by adding electrons to either side without considering oxidation/reduction (electrons go on the correct side only)',
                    'Not multiplying half-equations correctly to cancel electrons (must have same number of electrons in both half-equations before adding)',
                    'Including spectator ions in half-equations (only include species directly involved in electron transfer)'
                ]
            },
            electrochemical_cells: {
                'Anode and Cathode': [
                    'Thinking the anode is always positive (anode is positive in electrolytic cell but NEGATIVE in galvanic cell; remember: anode = oxidation always)',
                    'Confusing direction of electron flow and ion flow (electrons flow in external circuit; ions migrate in solution through salt bridge)',
                    'Believing ions flow through the external wire (only electrons flow in wire; ions migrate in solution)',
                    'Thinking the cathode is always where positive ions are discharged (this is true for electrolysis but in galvanic cell, the cathode is the positive electrode where reduction of cations occurs)'
                ],
                'Standard Electrode Potentials': [
                    'Thinking more positive E° always means "stronger acid" or "stronger base" — E° is about electron transfer, not proton transfer',
                    'Confusing standard electrode potential (reduction potential) with oxidation potential (E°ox = −E°red)',
                    'Believing E°cell = E°cathode + E°anode (WRONG: E°cell = E°cathode − E°anode, where both are REDUCTION potentials)',
                    'Thinking a positive E° means the substance will oxidize anything (it depends on what it is reacting with; need to compare E° values)',
                    'Not understanding that E° values are intensive properties (do NOT multiply by stoichiometric coefficients when calculating E°cell)'
                ],
                'Cell Potential and Spontaneity': [
                    'Thinking a large positive ΔG° means spontaneous (WRONG: spontaneous means NEGATIVE ΔG°)',
                    'Confusing the sign convention: E°cell positive ↔ ΔG° negative ↔ spontaneous reaction',
                    'Believing equilibrium constant K < 1 means a reaction cannot occur (it can, it just strongly favors reactants at equilibrium)'
                ]
            },
            electrolysis: {
                'Electrode Polarity': [
                    'Forgetting that electrode polarity is REVERSED from galvanic cells: in electrolysis, cathode is negative, anode is positive',
                    'Thinking metals always deposit at the anode (metals deposit at the CATHODE in electrolysis via reduction of metal ions)',
                    'Believing the anode always produces oxygen (only if anion is not preferentially discharged)'
                ],
                'Faradays Laws': [
                    'Thinking mass deposited ∝ current only (mass ∝ charge = current × time; both matter)',
                    'Forgetting the charge on the ion when calculating moles: for Cu²⁺, n(e⁻) = 2 × n(Cu); for Al³⁺, n(e⁻) = 3 × n(Al)',
                    'Using current in amperes directly without converting to charge in coulombs (must multiply by time in seconds)',
                    'Thinking 1 mole of electrons = 1 Faraday (correct!) but then using F = 9648.5 (wrong; F = 96485 C mol⁻¹)'
                ],
                'Selective Discharge': [
                    'Thinking Na⁺ is always reduced at cathode of NaCl solution (H⁺ from water is discharged instead because E°(Na⁺) much more negative)',
                    'Believing the more concentrated ion is always discharged (concentration affects preference but standard potentials are primary factor)',
                    'Forgetting that with a copper anode, the anode dissolves rather than producing O₂ or Cl₂'
                ]
            },
            redox_titrations: {
                'Indicators and Endpoints': [
                    'Adding starch indicator at the start of an iodometric titration (starch should be added near the endpoint when solution is pale straw/yellow; adding too early with high [I₂] gives irreversible starch-iodine complex)',
                    'Thinking the endpoint in permanganate titration is bright purple (endpoint is FIRST PERMANENT PALE PINK, not purple — purple means excess MnO₄⁻ added)',
                    'Using HCl to acidify for permanganate titrations (Cl⁻ is a reducing agent oxidized by MnO₄⁻; must use H₂SO₄)'
                ],
                'Stoichiometry': [
                    'Forgetting the mole ratio is not always 1:1 in redox titrations (MnO₄⁻:Fe²⁺ = 1:5; Cr₂O₇²⁻:Fe²⁺ = 1:6)',
                    'Confusing direct and indirect (iodometric) titrations (in iodometric: analyte → I₂ → titrated by S₂O₃²⁻; two mole ratios needed)',
                    'Thinking the titre directly gives moles of analyte without applying the mole ratio'
                ],
                'Experimental Technique': [
                    'Allowing iron(II) solution to stand in air before titrating (Fe²⁺ is oxidized to Fe³⁺ by atmospheric O₂, giving a low result)',
                    'Not heating oxalate titration with KMnO₄ (reaction very slow at room temperature; warm to 60−70°C to increase rate)'
                ]
            },
            corrosion_and_protection: {
                'Mechanism of Corrosion': [
                    'Thinking rust forms directly: Fe + O₂ → Fe₂O₃ in one step (rust formation is a multi-step electrochemical process involving Fe²⁺ → Fe(OH)₂ → Fe(OH)₃ → Fe₂O₃)',
                    'Believing corrosion can occur in completely dry conditions (electrochemical corrosion requires an electrolyte, i.e., moisture)',
                    'Thinking rust (Fe₂O₃) protects iron (it is porous and flakes off, exposing fresh iron — unlike Al₂O₃ which is adherent and protective)'
                ],
                'Protection Methods': [
                    'Thinking tin plating protects steel better than galvanizing when scratched (tin is more noble than Fe; when coating broken, Fe is anodic and corrodes faster; zinc is more reactive, acting as sacrificial anode)',
                    'Believing all metal coatings provide sacrificial protection (only if coating metal is MORE reactive, i.e., lower E°, than the base metal)',
                    'Thinking stainless steel never corrodes (it can corrode in chloride-rich or highly acidic environments; passive layer can be broken)'
                ]
            }
        };

        this.clarificationStrategies = {
            visual_comparison: {
                method: 'Compare galvanic cell vs electrolytic cell diagrams side-by-side; show electron and ion flow explicitly',
                effectiveness: 'Very high for anode/cathode polarity misconceptions'
            },
            analogy: {
                method: '"Electrons are like water flowing downhill: they flow from negative (high energy) to positive (low energy)"',
                effectiveness: 'High for understanding spontaneous electron flow direction'
            },
            mnemonic: {
                method: 'OIL RIG; "An Ox at the Anode, Red Cat at the Cathode"; "PANC (Positive Anode, Negative Cathode)" for electrolysis',
                effectiveness: 'High for remembering oxidation/reduction at electrodes'
            },
            worked_examples: {
                method: 'Step-by-step worked calculations for Faraday\'s law and cell potential problems with checking strategies',
                effectiveness: 'Very high for quantitative problems'
            },
            experimental_demonstration: {
                method: 'Ferroxyl indicator visually shows anodic/cathodic regions; colorimetric changes make abstract concepts concrete',
                effectiveness: 'Very high for corrosion and electrode concepts'
            },
            energy_diagram: {
                method: 'Show energy level diagram for spontaneous vs non-spontaneous redox; relate to ΔG and E°cell',
                effectiveness: 'High for understanding cell spontaneity'
            }
        };
    }

    initializeMetacognitivePrompts() {
        this.metacognitivePrompts = {
            beforeLearning: [
                "What do you already know about electricity and chemical reactions?",
                "Can you name any everyday devices that use redox chemistry?",
                "What do you predict will happen when a zinc strip is placed in copper sulfate solution?",
                "Have you ever seen a corroded metal? What do you think caused it?",
                "How might chemistry explain why car batteries die in winter?"
            ],
            duringLearning: [
                "Can you identify which species is oxidized and which is reduced in this reaction?",
                "Where are the electrons going in this half-equation?",
                "How does this electrode potential value tell you about the direction of the reaction?",
                "Can you connect this concept to the Daniel cell you learned about earlier?",
                "Does this Faraday's law calculation make intuitive sense? What would happen if you doubled the current?"
            ],
            afterLearning: [
                "Can you explain without notes why a positive E°cell means the reaction is spontaneous?",
                "What is the difference between a galvanic cell and an electrolytic cell in terms of energy?",
                "How would you describe corrosion to someone who hadn't studied chemistry?",
                "Can you predict which metal would corrode in a bimetallic joint without looking up the answer?",
                "What questions do you still have about redox chemistry?"
            ],
            problemSolving: [
                "First, identify all species and assign oxidation states — which ones change?",
                "Write the half-equations separately before combining",
                "For Faraday calculations: Q = It first, then moles of electrons, then moles of product",
                "For cell EMF: E°cell = E°cathode − E°anode (both as reduction potentials)",
                "Check your answer makes chemical sense: is the direction of reaction correct? Are atoms balanced?"
            ],
            electrolysisCalculation: [
                "What are the electrode reactions? (cathode: reduction; anode: oxidation)",
                "What is the charge on the ion being discharged? (determines electrons per mole)",
                "Have I converted time to seconds and current to amperes?",
                "Does my calculated mass seem reasonable for the current and time?",
                "Would using a different electrolyte change the products at each electrode?"
            ]
        };
    }

    initializeContextualScenarios() {
        this.contextualScenarios = {
            redox_fundamentals: [
                {
                    scenario: "Bleaching and the Textile Industry",
                    context: "Chlorine-based bleaches (NaOCl) and hydrogen peroxide are used to remove color from textiles and paper",
                    application: "Oxidation of colored chromophore molecules destroys their conjugated π system, removing visible color",
                    question: "Why do bleaches work by oxidizing colored compounds? What would happen if a reducing agent were used instead?"
                },
                {
                    scenario: "Breathalyzer Chemistry",
                    context: "Traditional breathalyzers rely on oxidation of ethanol by dichromate",
                    application: "CH₃CH₂OH + Cr₂O₇²⁻ (orange) → CH₃COOH + Cr³⁺ (green); color change proportional to ethanol",
                    question: "What oxidation state changes occur in the breathalyzer reaction? How does the colour change confirm the reaction?"
                },
                {
                    scenario: "Cellular Respiration",
                    context: "Living cells generate ATP by the controlled oxidation of glucose through a series of redox steps",
                    application: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O (ΔG° = −2870 kJ mol⁻¹); carried out via electron transport chain",
                    question: "How does the cell's electron transport chain resemble an electrochemical cell?"
                }
            ],
            electrochemical_cells: [
                {
                    scenario: "Electric Vehicles and Lithium-Ion Batteries",
                    context: "The shift from fossil fuel vehicles to electric vehicles requires high-energy-density rechargeable batteries",
                    application: "Li-ion cells operate at ~3.6 V; LiCoO₂ cathode + graphite anode; lithium ions intercalate during charge/discharge",
                    question: "What advantages do lithium-ion batteries have over lead-acid batteries for vehicle applications? What are the limitations?"
                },
                {
                    scenario: "pH Measurement with a Glass Electrode",
                    context: "The glass electrode in a pH meter is a concentration cell sensitive to [H⁺]",
                    application: "E = constant − 0.0592 × pH (at 25°C); glass membrane develops potential proportional to H⁺ concentration via Nernst equation",
                    question: "How does the Nernst equation explain why a glass electrode can measure pH?"
                },
                {
                    scenario: "Hydrogen Fuel Cell Vehicles",
                    context: "Fuel cell electric vehicles (FCEVs) use hydrogen oxidation to produce electricity with water as the only exhaust",
                    application: "H₂ + ½O₂ → H₂O; E°cell = 1.23 V; efficiency ~60% vs ~25% for internal combustion engine",
                    question: "Why is the hydrogen fuel cell theoretically more efficient than a petrol engine? What practical challenges limit their use?"
                }
            ],
            electrolysis: [
                {
                    scenario: "Aluminium Smelting and Renewable Energy",
                    context: "Aluminium production by electrolysis (Hall-Héroult) consumes ~5% of electricity in some countries; increasingly powered by hydroelectric power",
                    application: "Al₂O₃ dissolved in molten cryolite at 950°C; ~14 kWh per kg Al; Al recycling uses only 5% of this energy",
                    question: "Why is aluminium sometimes called 'stored electricity'? What are the environmental implications of aluminium recycling vs primary production?"
                },
                {
                    scenario: "Chlor-Alkali Industry and PVC Production",
                    context: "Chlorine from electrolysis of brine is used to make PVC, pharmaceuticals, bleach, and water treatment chemicals",
                    application: "2NaCl + 2H₂O → Cl₂ + H₂ + 2NaOH; membrane cell prevents Cl₂ and NaOH from mixing (which would make bleach)",
                    question: "What would happen if the ion-exchange membrane in a chlor-alkali cell were removed? How does this relate to household bleach chemistry?"
                },
                {
                    scenario: "Electroplating in Electronics",
                    context: "Printed circuit boards, USB connectors, and microchips use electroplated gold, tin, and copper contacts",
                    application: "Thin, uniform metal deposition by electrolysis provides corrosion resistance and conductivity; Faraday's law controls thickness",
                    question: "How does Faraday's law allow an engineer to control the exact thickness of a gold plating on a circuit board?"
                }
            ],
            redox_titrations: [
                {
                    scenario: "Determining Vitamin C in Fruit Juice",
                    context: "Vitamin C (ascorbic acid) is a reducing agent; its concentration can be determined by iodometric titration",
                    application: "Ascorbic acid + I₂ → dehydroascorbic acid + 2I⁻; starch indicator shows endpoint; used in food quality control",
                    question: "Why might vitamin C concentration in orange juice decrease over time after opening? How would you verify this by titration?"
                },
                {
                    scenario: "Wine and Water Analysis",
                    context: "Free SO₂ in wine (added as preservative) can be quantified by iodometric titration; dissolved O₂ in water by Winkler method (iodometric)",
                    application: "SO₂ + I₂ + H₂O → H₂SO₄ + 2HI; Winkler method measures dissolved O₂ for assessing water quality (BOD)",
                    question: "Why is dissolved oxygen important for aquatic life? How does the iodometric Winkler method allow its measurement?"
                },
                {
                    scenario: "Iron Determination in Steel Manufacture",
                    context: "Quality control in steel production requires accurate iron content analysis; permanganate or dichromate titrations used routinely",
                    application: "Steel dissolved in acid → Fe²⁺ → titrated with standard KMnO₄; result reported as %Fe in alloy",
                    question: "Why must hydrochloric acid be avoided when dissolving steel samples for permanganate titration? What error would it cause?"
                }
            ],
            corrosion_and_protection: [
                {
                    scenario: "The Titanic and Deep-Sea Corrosion",
                    context: "The wreck of the Titanic is being slowly consumed by rusticles (iron-oxidizing bacterial colonies forming iron oxide structures)",
                    application: "Deep-sea corrosion involves microbially-influenced corrosion; iron oxidized despite low O₂; bacteria catalyze anodic reactions",
                    question: "Why is deep-sea corrosion possible even in low-oxygen environments? How does this differ from normal atmospheric rusting?"
                },
                {
                    scenario: "Galvanizing and the Zinc Life of a Bridge",
                    context: "Many steel bridges and railings are hot-dip galvanized; zinc coating lasts 20−70 years depending on environment",
                    application: "Zn corrodes preferentially (E° = −0.76 V vs Fe E° = −0.44 V); ZnCO₃ patina provides secondary protection; much longer life than painted steel",
                    question: "Why does a scratch in galvanized steel not lead to rust formation, while the same scratch in tin-plated steel causes rapid rusting?"
                },
                {
                    scenario: "Cathodic Protection of Oil Pipelines",
                    context: "Thousands of kilometers of underground oil and gas pipelines are protected against corrosion by impressed current cathodic protection",
                    application: "Rectifier applies negative potential to pipeline (cathode); remote anode (graphite or MMO-coated titanium) buried nearby; pipeline cannot be oxidized when cathodic",
                    question: "How does making a pipeline the cathode prevent corrosion? What would happen if the rectifier failed?"
                }
            ]
        };
    }

    initializeAssessmentRubrics() {
        this.assessmentRubrics = {
            knowledgeLevel: {
                remember: {
                    description: "Recall facts and definitions relating to redox chemistry",
                    verbs: ["Define", "State", "List", "Identify", "Write the half-equation for", "Give the oxidation state of"],
                    example: "State the oxidation state of Mn in KMnO₄"
                },
                understand: {
                    description: "Explain redox principles and relationships",
                    verbs: ["Explain", "Describe", "Predict", "Classify", "Compare", "Distinguish between"],
                    example: "Explain why a positive E°cell indicates a spontaneous reaction"
                },
                apply: {
                    description: "Apply redox principles to new situations",
                    verbs: ["Balance", "Calculate", "Determine", "Predict the products of", "Use Faraday's law to"],
                    example: "Calculate the mass of copper deposited when 0.50 A flows for 20 minutes"
                },
                analyze: {
                    description: "Analyze electrochemical data and mechanisms",
                    verbs: ["Analyze the cell diagram", "Deduce the products", "Interpret the titration curve", "Compare two cell types"],
                    example: "Analyze why copper deposits preferentially over hydrogen at the cathode in CuSO₄ electrolysis"
                },
                evaluate: {
                    description: "Evaluate protection methods, cell designs, and analytical procedures",
                    verbs: ["Evaluate", "Justify", "Select the best method", "Critique the procedure", "Assess the validity"],
                    example: "Evaluate the advantages of zinc galvanizing over tin plating for long-term corrosion protection"
                },
                create: {
                    description: "Design cells, experiments, and protection systems",
                    verbs: ["Design a cell", "Propose a protection strategy", "Devise an experiment", "Plan a titration"],
                    example: "Design an electrolytic cell to silver-plate a steel spoon, specifying electrode materials, electrolyte, and required charge"
                }
            },

            understandingLevels: {
                novice: {
                    characteristics: [
                        "Identifies oxidation as 'gaining oxygen' only",
                        "Knows OIL RIG but cannot apply to complex reactions",
                        "Can assign obvious oxidation states (Na⁺: +1, O²⁻: −2)",
                        "Aware that batteries involve chemistry"
                    ],
                    support: [
                        "Practice assigning oxidation states with worked examples",
                        "Use OIL RIG with simple ion examples (Fe²⁺→Fe³⁺: oxidation)",
                        "Introduce galvanic cell with zinc-copper as concrete example",
                        "Connect to everyday examples (batteries, rusting, bleach)"
                    ]
                },
                developing: {
                    characteristics: [
                        "Writes and balances half-equations for simple reactions",
                        "Understands anode = oxidation, cathode = reduction",
                        "Can use E° table to predict spontaneous reactions qualitatively",
                        "Understands Faraday's First Law qualitatively"
                    ],
                    support: [
                        "Practice balancing complex redox equations in acidic and basic solution",
                        "Introduce E°cell calculation with worked examples",
                        "Quantitative Faraday's law problems with increasing complexity",
                        "Distinguish between active and inert electrodes in electrolysis"
                    ]
                },
                proficient: {
                    characteristics: [
                        "Balances complex redox equations systematically",
                        "Calculates E°cell and ΔG° from electrode potentials",
                        "Applies Faraday's laws quantitatively with multi-step calculations",
                        "Plans and interprets redox titrations"
                    ],
                    support: [
                        "Introduce Nernst equation and concentration effects on E",
                        "Connect E°cell to equilibrium constant K",
                        "Challenging electrolysis problems (concurrent reactions, efficiencies)",
                        "Redox titration back-calculations with multiple equilibria"
                    ]
                },
                expert: {
                    characteristics: [
                        "Uses Nernst equation for concentration cells and non-standard conditions",
                        "Designs electrochemical experiments and evaluates industrial processes",
                        "Evaluates corrosion protection strategies with thermodynamic and kinetic reasoning",
                        "Interprets complex titration data with appropriate error analysis"
                    ],
                    support: [
                        "Research literature examples of industrial electrochemistry",
                        "Work through corrosion case studies with quantitative analysis",
                        "Introduce Pourbaix diagrams (potential-pH stability diagrams)",
                        "Engage with green electrochemistry and energy storage challenges"
                    ]
                }
            }
        };

        this.assessmentQuestions = {
            redox_fundamentals: {
                remember: "Give the oxidation state of Cr in Cr₂O₇²⁻",
                understand: "Explain why the oxidizing agent is itself reduced during a redox reaction",
                apply: "Balance the equation: MnO₄⁻ + C₂O₄²⁻ → Mn²⁺ + CO₂ in acidic solution",
                analyze: "Identify all oxidation state changes in the reaction: Cl₂ + 2OH⁻ → Cl⁻ + ClO⁻ + H₂O. What type of redox reaction is this?",
                evaluate: "Evaluate whether concentrated H₂SO₄ can act as an oxidizing agent toward Br⁻, using electrode potential data",
                create: "Design a two-step procedure to convert a solution of Fe³⁺ to Fe²⁺ and then back to Fe³⁺, identifying suitable reagents and writing all relevant equations"
            },
            electrochemical_cells: {
                remember: "State the standard electrode potential of the Cu²⁺/Cu half-cell",
                understand: "Explain the role of the salt bridge in a Daniel cell",
                apply: "Calculate E°cell and ΔG° for the cell: Zn | Zn²⁺ || Ag⁺ | Ag",
                analyze: "Using the Nernst equation, analyze how the EMF of the Daniel cell changes when [Cu²⁺] is reduced from 1.0 to 0.001 mol dm⁻³",
                evaluate: "Evaluate the factors that make the hydrogen fuel cell theoretically more efficient than a combustion engine",
                create: "Design an electrochemical cell to determine the concentration of Ag⁺ ions in an unknown solution, specifying all components and the calculation procedure"
            },
            electrolysis: {
                remember: "State Faraday's First Law of electrolysis",
                understand: "Explain why hydrogen is produced at the cathode rather than sodium during electrolysis of dilute NaCl(aq)",
                apply: "Calculate the time required to deposit 1.50 g of silver (Ag⁺ + e⁻ → Ag) using a current of 0.80 A",
                analyze: "Analyze the products at each electrode when concentrated NaCl(aq) is electrolyzed with (a) inert platinum electrodes and (b) copper electrodes",
                evaluate: "Evaluate the economic and environmental impacts of the Hall-Héroult process for aluminium smelting compared to aluminium recycling",
                create: "Design an electroplating procedure to deposit a 10 μm thick layer of nickel (density 8.9 g cm⁻³) onto a steel plate of area 100 cm², specifying current, time, and electrolyte"
            },
            redox_titrations: {
                remember: "State the mole ratio of KMnO₄ to Fe²⁺ in the permanganate titration in acidic solution",
                understand: "Explain why starch indicator should be added near the endpoint in an iodometric titration rather than at the beginning",
                apply: "25.0 cm³ of 0.0200 mol dm⁻³ KMnO₄ was required to titrate iron(II) sulfate solution. Calculate n(Fe²⁺) in the sample",
                analyze: "Analyze the sources of error in a permanganate titration if (a) HCl is used instead of H₂SO₄, or (b) the iron(II) solution is allowed to stand in air for 30 minutes before titrating",
                evaluate: "Evaluate the advantages and disadvantages of using KMnO₄ versus K₂Cr₂O₇ as a standard oxidizing agent in redox titrations",
                create: "Design an iodometric procedure to determine the concentration of hydrogen peroxide in a commercial 3% H₂O₂ solution, including all equations, indicator choice, and calculation"
            },
            corrosion_and_protection: {
                remember: "State two conditions required for iron to rust",
                understand: "Explain why zinc provides sacrificial protection to iron but tin does not, even though both form coatings",
                apply: "Given E°(Zn²⁺/Zn) = −0.76 V and E°(Fe²⁺/Fe) = −0.44 V, determine which metal acts as the anode when iron and zinc are in electrical contact in brine",
                analyze: "Analyze why iron corrodes faster when in contact with copper than when alone in brine, using the electrochemical series",
                evaluate: "Evaluate the long-term effectiveness of galvanizing, painting, and impressed current cathodic protection for a steel bridge in a coastal environment",
                create: "Design a comprehensive corrosion protection system for an underground steel water main, explaining the electrochemical principle underlying each protective measure chosen"
            }
        };
    }

    handleRedoxFundamentals(problem) {
        const content = {
            topic: "Redox Fundamentals",
            category: 'redox_principles',
            summary: "Redox reactions involve the transfer of electrons between chemical species. Oxidation is loss of electrons (increase in oxidation state); reduction is gain of electrons (decrease in oxidation state). These processes always occur simultaneously. The oxidizing agent accepts electrons (is itself reduced); the reducing agent donates electrons (is itself oxidized). OIL RIG: Oxidation Is Loss, Reduction Is Gain.",
            lesson: this.lessons.redox_fundamentals,
            misconceptions: this.commonMisconceptions.redox_fundamentals,
            metacognitivePrompts: this.metacognitivePrompts,
            contextualScenarios: this.contextualScenarios.redox_fundamentals,
            assessmentQuestions: this.assessmentQuestions.redox_fundamentals,
            relatedExperiments: this.redoxTopics.redox_fundamentals.relatedExperiments || [],
            keyFormulae: {
                oxidationStateRules: "Sum of oxidation states = charge on species",
                halfEquationBalancing: "Add H₂O for O, H⁺ for H (acidic); or OH⁻/H₂O for basic solution",
                combinedEquation: "Multiply half-equations to equalize electrons; add and simplify"
            },
            workedExamples: [
                {
                    title: "Assigning Oxidation States in KMnO₄",
                    steps: [
                        "K: +1 (group 1 metal in compound)",
                        "O: −2 (standard; not peroxide, not OF₂)",
                        "Apply sum rule: (+1) + Mn + 4(−2) = 0",
                        "1 + Mn − 8 = 0 → Mn = +7",
                        "Answer: Mn is +7 in KMnO₄ (permanganate)"
                    ]
                },
                {
                    title: "Balancing MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺ (acidic)",
                    steps: [
                        "Reduction half: MnO₄⁻ → Mn²⁺ (Mn: +7 → +2; gains 5e⁻)",
                        "Balance O: MnO₄⁻ → Mn²⁺ + 4H₂O",
                        "Balance H: MnO₄⁻ + 8H⁺ → Mn²⁺ + 4H₂O",
                        "Balance charge: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O  ✓ (charge: −1+8−5 = +2 ✓)",
                        "Oxidation half: Fe²⁺ → Fe³⁺ + e⁻",
                        "Multiply to cancel electrons: ×5 oxidation: 5Fe²⁺ → 5Fe³⁺ + 5e⁻",
                        "Add: MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺",
                        "Check: 1Mn ✓; 8H ✓; 4O ✓; 5Fe ✓; charge: (+8−1−10) = −3 → (+2+0+15) = +17... recheck",
                        "Charge left: −1 + 8 + 5(+2) = +17; Charge right: +2 + 0 + 5(+3) = +17 ✓"
                    ]
                }
            ]
        };
        return content;
    }

    handleElectrochemicalCells(problem) {
        const content = {
            topic: "Electrochemical Cells",
            category: 'electrochemistry',
            summary: "Galvanic (voltaic) cells convert chemical energy from spontaneous redox reactions into electrical energy. Oxidation occurs at the anode (negative in galvanic cell); reduction at the cathode (positive). E°cell = E°cathode − E°anode (both as reduction potentials); positive E°cell indicates spontaneity. The Nernst equation relates cell potential to ion concentrations at non-standard conditions.",
            lesson: this.lessons.electrochemical_cells,
            misconceptions: this.commonMisconceptions.electrochemical_cells,
            metacognitivePrompts: this.metacognitivePrompts,
            contextualScenarios: this.contextualScenarios.electrochemical_cells,
            assessmentQuestions: this.assessmentQuestions.electrochemical_cells,
            relatedExperiments: this.redoxTopics.electrochemical_cells.relatedExperiments || [],
            keyFormulae: {
                E_cell: "E°cell = E°cathode − E°anode  (both as standard reduction potentials)",
                Gibbs: "ΔG° = −nFE°cell",
                equilibrium: "ln K = nFE°cell / RT = nE°cell / 0.02569  (at 298 K)",
                nernst: "E = E° − (0.0257/n) × ln Q  (at 298 K)  or  E = E° − (0.0592/n) × log Q"
            },
            workedExamples: [
                {
                    title: "Calculate E°cell and ΔG° for Zn | Zn²⁺ || Cu²⁺ | Cu",
                    steps: [
                        "E°(Cu²⁺/Cu) = +0.34 V  (cathode: reduction of Cu²⁺)",
                        "E°(Zn²⁺/Zn) = −0.76 V  (anode: oxidation of Zn)",
                        "E°cell = E°cathode − E°anode = +0.34 − (−0.76) = +1.10 V",
                        "n = 2 (2 electrons transferred per formula unit)",
                        "ΔG° = −nFE° = −2 × 96485 × 1.10 = −212,267 J mol⁻¹ = −212 kJ mol⁻¹",
                        "Positive E°cell and negative ΔG° confirm spontaneous reaction"
                    ]
                },
                {
                    title: "Nernst Equation: Effect of [Cu²⁺] Decreasing to 0.001 mol dm⁻³ in Daniel Cell",
                    steps: [
                        "E° = +1.10 V; n = 2; [Zn²⁺] = 1.0 mol dm⁻³; [Cu²⁺] = 0.001 mol dm⁻³",
                        "Q = [Zn²⁺]/[Cu²⁺] = 1.0/0.001 = 1000",
                        "E = E° − (0.0592/2) × log(1000)",
                        "E = 1.10 − (0.0296) × 3 = 1.10 − 0.0888 = 1.011 V",
                        "Cell potential decreases as Cu²⁺ depleted (Le Chatelier's principle analogue)"
                    ]
                }
            ],
            standardElectrodePotentialTable: this.lessons.electrochemical_cells.standardElectrodePotentials,
            danielCellDetails: this.lessons.electrochemical_cells.danielCell,
            batteryTypes: this.lessons.electrochemical_cells.batteryTypes
        };
        return content;
    }

    handleElectrolysis(problem) {
        const content = {
            topic: "Electrolysis",
            category: 'electrochemistry',
            summary: "Electrolysis uses electrical energy to drive non-spontaneous redox reactions. In an electrolytic cell, the anode is positive (connected to +ve terminal) and oxidation occurs there; the cathode is negative and reduction occurs. Faraday's Laws relate mass of product to charge passed: m = ItM/(Fz). In aqueous solutions, selective discharge determines which ions are discharged at each electrode.",
            lesson: this.lessons.electrolysis,
            misconceptions: this.commonMisconceptions.electrolysis,
            metacognitivePrompts: this.metacognitivePrompts,
            contextualScenarios: this.contextualScenarios.electrolysis,
            assessmentQuestions: this.assessmentQuestions.electrolysis,
            relatedExperiments: this.redoxTopics.electrolysis.relatedExperiments || [],
            keyFormulae: {
                charge: "Q = It  (coulombs = amperes × seconds)",
                molesElectrons: "n(e⁻) = Q / F = It / F",
                molesProduct: "n(product) = n(e⁻) / z  where z = charge on ion",
                massProduct: "m = n(product) × M  where M = molar mass (g mol⁻¹)",
                combined: "m = ItM / (Fz)"
            },
            faradayConstant: {
                value: "F = 96,485 C mol⁻¹  (≈ 96,500 C mol⁻¹)",
                meaning: "Charge carried by one mole of electrons"
            },
            workedExamples: [
                {
                    title: "Mass of Cu deposited: 1.50 A for 45 minutes, CuSO₄(aq)",
                    steps: [
                        "Q = It = 1.50 × (45 × 60) = 1.50 × 2700 = 4050 C",
                        "n(e⁻) = Q/F = 4050 / 96485 = 0.04197 mol",
                        "Cu²⁺ + 2e⁻ → Cu: z = 2, so n(Cu) = n(e⁻)/2 = 0.02099 mol",
                        "m(Cu) = 0.02099 × 63.55 = 1.33 g"
                    ]
                },
                {
                    title: "Current needed to produce 100 cm³ H₂ at STP in 10 minutes",
                    steps: [
                        "n(H₂) = 0.100/22.4 = 4.46 × 10⁻³ mol  (at STP; 1 mol gas = 22.4 L)",
                        "2H⁺ + 2e⁻ → H₂: z = 2 per H₂, so n(e⁻) = 2 × n(H₂) = 8.93 × 10⁻³ mol",
                        "Q = n(e⁻) × F = 8.93 × 10⁻³ × 96485 = 861 C",
                        "t = 10 × 60 = 600 s",
                        "I = Q/t = 861/600 = 1.43 A"
                    ]
                }
            ],
            selectiveDischarge: this.lessons.electrolysis.electrolysisOfAqueousSolutions.selectiveDischarge,
            industrialApplications: this.lessons.electrolysis.industrialApplications,
            aqueousExamples: this.lessons.electrolysis.electrolysisOfAqueousSolutions.examples,
            moltenSaltExamples: this.lessons.electrolysis.electrolysisOfMoltenSalts.examples
        };
        return content;
    }

    handleRedoxTitrations(problem) {
        const content = {
            topic: "Redox Titrations",
            category: 'analytical',
            summary: "Redox titrations use a standard solution of an oxidizing or reducing agent to determine the concentration of an unknown analyte by electron transfer. The three main types are: permanganate titrations (self-indicating; purple KMnO₄ → colourless Mn²⁺), dichromate titrations (K₂Cr₂O₇ primary standard; external indicator needed), and iodometric titrations (indirect: oxidizing agent → I₂ → titrated by Na₂S₂O₃; starch indicator).",
            lesson: this.lessons.redox_titrations,
            misconceptions: this.commonMisconceptions.redox_titrations,
            metacognitivePrompts: this.metacognitivePrompts,
            contextualScenarios: this.contextualScenarios.redox_titrations,
            assessmentQuestions: this.assessmentQuestions.redox_titrations,
            relatedExperiments: this.redoxTopics.redox_titrations.relatedExperiments || [],
            keyFormulae: {
                molesFromTitre: "n = c × V  (where V in dm³ = mL/1000)",
                moleRatioMnO4Fe: "MnO₄⁻ : Fe²⁺ = 1 : 5",
                moleRatioCr2O7Fe: "Cr₂O₇²⁻ : Fe²⁺ = 1 : 6",
                iodometricChain: "n(oxidizing agent) → n(I₂) → n(S₂O₃²⁻) [I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻; ratio 1:2]"
            },
            workedExamples: [
                {
                    title: "Iron(II) determination by permanganate titration",
                    problem: "22.50 mL of 0.0200 mol dm⁻³ KMnO₄ required to titrate 25.00 mL Fe²⁺ solution. Find [Fe²⁺].",
                    steps: [
                        "n(MnO₄⁻) = 0.0200 × 22.50/1000 = 4.50 × 10⁻⁴ mol",
                        "Mole ratio MnO₄⁻:Fe²⁺ = 1:5",
                        "n(Fe²⁺) = 5 × 4.50 × 10⁻⁴ = 2.25 × 10⁻³ mol",
                        "[Fe²⁺] = 2.25 × 10⁻³ / (25.00/1000) = 0.0900 mol dm⁻³"
                    ]
                },
                {
                    title: "Iodometric determination of Cl₂ in bleach",
                    problem: "25.0 cm³ bleach + excess KI + acid → I₂ liberated; titrated with 18.70 mL 0.100 mol dm⁻³ Na₂S₂O₃. Find [Cl₂].",
                    steps: [
                        "n(S₂O₃²⁻) = 0.100 × 18.70/1000 = 1.87 × 10⁻³ mol",
                        "I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻: n(I₂) = n(S₂O₃²⁻)/2 = 9.35 × 10⁻⁴ mol",
                        "Cl₂ + 2I⁻ → 2Cl⁻ + I₂: n(Cl₂) = n(I₂) = 9.35 × 10⁻⁴ mol",
                        "[Cl₂] = 9.35 × 10⁻⁴ / (25.0/1000) = 0.0374 mol dm⁻³"
                    ]
                }
            ],
            permanganateDetails: this.lessons.redox_titrations.permanganateTitrations,
            dichromateTitrations: this.lessons.redox_titrations.dichromateTitrations,
            iodometricDetails: this.lessons.redox_titrations.iodometricTitrations
        };
        return content;
    }

    handleCorrosionAndProtection(problem) {
        const content = {
            topic: "Corrosion and Protection",
            category: 'applications',
            summary: "Corrosion is the electrochemical degradation of metals by oxidation in the presence of an electrolyte. Iron rusting requires both O₂ and moisture; anodic sites (Fe → Fe²⁺ + 2e⁻) and cathodic sites (O₂ + 2H₂O + 4e⁻ → 4OH⁻) form a short-circuit electrochemical cell. Protection methods include physical barriers, sacrificial anodes (Zn, Mg), cathodic protection, and passive alloys (stainless steel, anodized Al).",
            lesson: this.lessons.corrosion_and_protection,
            misconceptions: this.commonMisconceptions.corrosion_and_protection,
            metacognitivePrompts: this.metacognitivePrompts,
            contextualScenarios: this.contextualScenarios.corrosion_and_protection,
            assessmentQuestions: this.assessmentQuestions.corrosion_and_protection,
            relatedExperiments: this.redoxTopics.corrosion_and_protection.relatedExperiments || [],
            electrochemicalPrinciples: {
                anodeReaction: "Fe(s) → Fe²⁺(aq) + 2e⁻   [occurs at defects, stress points, scratches]",
                cathodeReaction: "O₂(g) + 2H₂O(l) + 4e⁻ → 4OH⁻(aq)   [occurs at less stressed areas]",
                overall: "Fe + ½O₂ + H₂O → Fe(OH)₂  → Fe(OH)₃  → Fe₂O₃·nH₂O (rust)",
                galvanicPrinciple: "In bimetallic contact, more reactive metal (lower E°) is anodic → corrodes; less reactive (higher E°) is cathodic → protected"
            },
            protectionComparison: [
                {
                    method: "Galvanizing (Zn coating)",
                    mechanism: "Physical barrier + sacrificial anode (E°Zn < E°Fe)",
                    effectiveness: "Excellent; works even when coating scratched",
                    limitations: "Zinc eventually consumed; not suitable for food contact",
                    examples: "Crash barriers, corrugated roofing, car bodies, steel pipes"
                },
                {
                    method: "Tin plating",
                    mechanism: "Physical barrier only (E°Sn > E°Fe; tin is cathodic to iron)",
                    effectiveness: "Good when intact; coating breach ACCELERATES iron corrosion",
                    limitations: "Any scratch causes rapid galvanic corrosion of Fe",
                    examples: "Food cans (steel inside, tin outside)"
                },
                {
                    method: "Sacrificial magnesium anode",
                    mechanism: "Mg more reactive than Fe (E°Mg = −2.37 V); Mg oxidized instead",
                    effectiveness: "Excellent for large structures; must be replaced periodically",
                    limitations: "Mg consumed rapidly; practical for slow-corrosion environments",
                    examples: "Buried pipelines, ship hulls, boat propellers"
                },
                {
                    method: "Impressed current cathodic protection",
                    mechanism: "External negative potential applied to structure (cathode); no oxidation at cathode",
                    effectiveness: "Very high; controllable and adjustable",
                    limitations: "Requires power supply; over-protection causes H₂ embrittlement",
                    examples: "Long-distance pipelines, offshore platforms, reinforced concrete"
                },
                {
                    method: "Stainless steel alloying",
                    mechanism: "Cr₂O₃ passive layer self-heals in O₂; prevents electrochemical oxidation",
                    effectiveness: "Excellent in most environments; permanent",
                    limitations: "Fails in Cl⁻-rich or low pH environments; expensive",
                    examples: "Surgical instruments, kitchen equipment, chemical plant"
                },
                {
                    method: "Paint / epoxy coating",
                    mechanism: "Physical barrier excluding O₂ and H₂O",
                    effectiveness: "Good while intact; can cause crevice corrosion where breached",
                    limitations: "Mechanical damage exposes metal; water can diffuse through some paints",
                    examples: "Structural steelwork, car bodies, bridges (combined with other methods)"
                }
            ],
            workedExamples: [
                {
                    title: "Predicting galvanic corrosion in Mg/Fe bimetallic contact in seawater",
                    steps: [
                        "E°(Mg²⁺/Mg) = −2.37 V  (more negative; more reactive)",
                        "E°(Fe²⁺/Fe) = −0.44 V  (less negative; less reactive)",
                        "In electrical contact: Mg is anode (lower E°); Fe is cathode",
                        "Anode reaction: Mg → Mg²⁺ + 2e⁻  (Mg corrodes)",
                        "Cathode reaction: O₂ + 2H₂O + 4e⁻ → 4OH⁻  (at Fe surface)",
                        "Result: Mg sacrificed; Fe protected → this IS the sacrificial anode principle"
                    ]
                },
                {
                    title: "Predicting which metal corrodes in Fe/Cu bimetallic couple in brine",
                    steps: [
                        "E°(Cu²⁺/Cu) = +0.34 V  (more positive; more noble)",
                        "E°(Fe²⁺/Fe) = −0.44 V  (more negative; more reactive)",
                        "Fe is anode (lower E°); Cu is cathode",
                        "Fe oxidizes: Fe → Fe²⁺ + 2e⁻",
                        "O₂ reduced at Cu surface: O₂ + 2H₂O + 4e⁻ → 4OH⁻",
                        "Result: Fe corrodes faster than it would without Cu contact (galvanic corrosion)"
                    ]
                }
            ],
            mechanismOfRusting: this.lessons.corrosion_and_protection.mechanismOfIronRusting,
            protectionMethods: this.lessons.corrosion_and_protection.protectionMethods,
            economicImpact: this.lessons.corrosion_and_protection.economicAndEnvironmentalImpact
        };
        return content;
    }

    processRedoxQuery(query) {
        for (const [topicId, topic] of Object.entries(this.redoxTopics)) {
            for (const pattern of topic.patterns) {
                if (pattern.test(query)) {
                    return {
                        topicId,
                        topicName: topic.name,
                        content: topic.handler(query),
                        experiments: topic.relatedExperiments || [],
                        difficulty: topic.difficulty,
                        prerequisites: topic.prerequisites
                    };
                }
            }
        }
        return null;
    }

    getExperimentById(experimentId) {
        return this.redoxExperiments[experimentId] || null;
    }

    getAllExperimentsForTopic(topicId) {
        const topic = this.redoxTopics[topicId];
        if (!topic || !topic.relatedExperiments) return [];
        return topic.relatedExperiments.map(ref => ({
            ...ref,
            details: this.redoxExperiments[ref.id]
        }));
    }

    getMisconceptionsForTopic(topicId) {
        return this.commonMisconceptions[topicId] || {};
    }

    getAssessmentQuestionsForTopic(topicId, level = null) {
        const questions = this.assessmentQuestions[topicId];
        if (!questions) return null;
        if (level) return { [level]: questions[level] };
        return questions;
    }

    getContextualScenariosForTopic(topicId) {
        return this.contextualScenarios[topicId] || [];
    }

    getLearnerSupportForLevel(level) {
        const rubric = this.assessmentRubrics.understandingLevels[level];
        if (!rubric) return null;
        return {
            level,
            characteristics: rubric.characteristics,
            supportStrategies: rubric.support
        };
    }

    updateLearnerProfile(topicId, performanceScore) {
        const threshold = { mastered: 0.8, struggling: 0.5 };
        if (performanceScore >= threshold.mastered) {
            if (!this.learnerProfile.masteredTopics.includes(topicId)) {
                this.learnerProfile.masteredTopics.push(topicId);
            }
            this.learnerProfile.strugglingTopics = this.learnerProfile.strugglingTopics.filter(t => t !== topicId);
        } else if (performanceScore < threshold.struggling) {
            if (!this.learnerProfile.strugglingTopics.includes(topicId)) {
                this.learnerProfile.strugglingTopics.push(topicId);
            }
        }
        this.learnerProfile.progressHistory.push({
            topicId,
            score: performanceScore,
            timestamp: new Date().toISOString()
        });
        return this.learnerProfile;
    }

    generateAdaptiveRecommendations() {
        const recommendations = {
            reviewTopics: this.learnerProfile.strugglingTopics,
            nextTopics: [],
            suggestedExperiments: [],
            assessmentLevel: this.learnerProfile.currentLevel
        };

        for (const [topicId, topic] of Object.entries(this.redoxTopics)) {
            if (!this.learnerProfile.masteredTopics.includes(topicId)) {
                const prerequisitesMet = (topic.prerequisites || []).every(prereq =>
                    this.learnerProfile.masteredTopics.includes(prereq)
                );
                if (prerequisitesMet) {
                    recommendations.nextTopics.push({
                        topicId,
                        name: topic.name,
                        difficulty: topic.difficulty
                    });
                }
            }
        }

        this.learnerProfile.strugglingTopics.forEach(topicId => {
            const experiments = this.getAllExperimentsForTopic(topicId);
            recommendations.suggestedExperiments.push(...experiments.slice(0, 1));
        });

        return recommendations;
    }
}
