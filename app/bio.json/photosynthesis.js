//Enhanced Photosynthesis Biology Workbook - Comprehensive Photosynthesis System
import { createCanvas, loadImage } from '@napi-rs/canvas';
import { BiologySvgDiagrams } from '../svg-data.js';
import { BiologyDiagramsRegistry} from '../registry.js';
import { BiologyDiagramsRenderer } from '../renderer.js';
import * as math from 'mathjs';

export class EnhancedPhotosynthesisBiologyWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "photosynthesis";
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
        
        // Add diagram renderer
        this.diagramRenderer = new BiologyDiagramsRenderer();
        this.includeDiagramsInWorkbook = options.includeDiagrams !== false;
        this.diagramWidth = options.diagramWidth || 800;
        this.diagramHeight = options.diagramHeight || 600;
        this.renderedDiagrams = new Map(); // Cache for rendered diagrams
        this.diagramsPromise = null;        
        this.currentExperiment = null;

        // Enhanced explanation options
        this.explanationLevel = options.explanationLevel || 'intermediate';
        this.includeVisualizations = options.includeVisualizations !== false;
        this.includeConceptualConnections = options.includeConceptualConnections !== false;
        this.includeExamples = options.includeExamples !== false;
        this.includeComparisons = options.includeComparisons !== false;
        this.includeCommonMisconceptions = options.includeCommonMisconceptions !== false;
        this.includePedagogicalNotes = options.includePedagogicalNotes !== false;
        this.includeExperiments = options.includeExperiments !== false;
        this.detailLevel = options.detailLevel || 'detailed';

        // Adaptive learning features
        this.adaptiveDifficulty = options.adaptiveDifficulty !== false;
        this.metacognitiveSupport = options.metacognitiveSupport !== false;
        this.contextualLearning = options.contextualLearning !== false;
        this.assessmentFeedback = options.assessmentFeedback !== false;

        // Learning state tracking
        this.learnerProfile = {
            currentLevel: 'intermediate',
            masteredTopics: [],
            strugglingTopics: [],
            preferredLearningStyle: 'visual',
            progressHistory: []
        };

        this.photosynthesisSymbols = this.initializePhotosynthesisSymbols();
        this.setThemeColors();
        this.initializePhotosynthesisTopics();
        this.initializePhotosynthesisLessons();
        this.initializePhotosynthesisExperiments();
        this.initializeMisconceptionDatabase();
        this.initializeMetacognitivePrompts();
        this.initializeContextualScenarios();
        this.initializeAssessmentRubrics();
    }

    setThemeColors() {
        const themes = {
            photosynthesis: {
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
                definitionBg: '#fff3e0',
                definitionText: '#e65100',
                stepBg: '#e1f5fe',
                stepText: '#01579b',
                borderColor: '#4caf50',
                contentBg: '#f3e5f5',
                contentText: '#4a148c',
                diagramBg: '#fffde7',
                structureBg: '#e0f2f1',
                experimentBg: '#fff9c4',
                experimentText: '#f57f17',
                lightReactionBg: '#ffebee',
                darkReactionBg: '#e3f2fd',
                chloroplastBg: '#e8f5e9',
                pigmentBg: '#fce4ec'
            },
            botanical: {
                background: '#fafafa',
                gridColor: '#9e9e9e',
                headerBg: '#558b2f',
                headerText: '#ffffff',
                sectionBg: '#dcedc8',
                sectionText: '#33691e',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#f1f8e9',
                resultText: '#558b2f',
                definitionBg: '#fff8e1',
                definitionText: '#f57f17',
                stepBg: '#e0f7fa',
                stepText: '#006064',
                borderColor: '#7cb342',
                contentBg: '#ede7f6',
                contentText: '#4a148c',
                diagramBg: '#fffde7',
                structureBg: '#e8eaf6',
                experimentBg: '#fff3e0',
                experimentText: '#e65100',
                lightReactionBg: '#ffebee',
                darkReactionBg: '#e3f2fd',
                chloroplastBg: '#e8f5e9',
                pigmentBg: '#f3e5f5'
            }
        };

        this.colors = themes[this.theme] || themes.photosynthesis;
    }

    initializePhotosynthesisSymbols() {
        return {
            // Greek letters
            'alpha': 'α',
            'beta': 'β',
            'gamma': 'γ',
            'delta': 'Δ',
            'Delta': 'Δ',
            'lambda': 'λ',
            'mu': 'μ',
            'phi': 'φ',
            
            // Arrows
            'arrow': '→',
            'reversible': '⇌',
            'doubleArrow': '↔',
            'lightArrow': '⟶',
            
            // Math symbols
            'plus': '+',
            'minus': '−',
            'plusminus': '±',
            'approximately': '≈',
            'proportional': '∝',
            'infinity': '∞',
            'degree': '°',
            
            // Chemical formulas - Basic
            'H2O': 'H₂O',
            'CO2': 'CO₂',
            'O2': 'O₂',
            'H+': 'H⁺',
            'OH-': 'OH⁻',
            
            // Photosynthesis molecules
            'NADP+': 'NADP⁺',
            'NADPH': 'NADPH',
            'ATP': 'ATP',
            'ADP': 'ADP',
            'Pi': 'Pᵢ',
            'PPi': 'PPᵢ',
            
            // Carbon compounds
            'C3': 'C₃',
            'C4': 'C₄',
            'C5': 'C₅',
            'C6': 'C₆',
            'RuBP': 'RuBP',
            'PGA': '3-PGA',
            'G3P': 'G3P',
            'PGAL': 'PGAL',
            
            // Photosystems
            'PSI': 'PSI',
            'PSII': 'PSII',
            'P680': 'P₆₈₀',
            'P700': 'P₇₀₀',
            
            // Wavelengths
            'nm': 'nm',
            'lambda': 'λ'
        };
    }

    initializePhotosynthesisTopics() {
        this.photosynthesisTopics = {
            overview: {
                patterns: [
                    /photosynthesis.*overview/i,
                    /general.*photosynthesis/i,
                    /what.*is.*photosynthesis/i,
                    /photosynthesis.*equation/i
                ],
                handler: this.handlePhotosynthesisOverview.bind(this),
                name: 'Photosynthesis Overview',
                category: 'fundamentals',
                description: 'Overview of photosynthesis: converting light energy to chemical energy',
                difficulty: 'beginner',
                prerequisites: ['basic_chemistry', 'cell_biology']
            },
            
            light_reactions: {
                patterns: [
                    /light.*reaction/i,
                    /light.*dependent/i,
                    /photosystem/i,
                    /electron.*transport.*chain/i,
                    /photophosphorylation/i,
                    /z.*scheme/i
                ],
                handler: this.handleLightReactions.bind(this),
                name: 'Light-Dependent Reactions',
                category: 'mechanisms',
                description: 'Light reactions: capturing light energy and producing ATP and NADPH',
                difficulty: 'intermediate',
                prerequisites: ['photosynthesis_overview', 'redox_reactions', 'membrane_biology']
            },
            
            calvin_cycle: {
                patterns: [
                    /calvin.*cycle/i,
                    /dark.*reaction/i,
                    /light.*independent/i,
                    /carbon.*fixation/i,
                    /C3.*pathway/i,
                    /rubisco/i
                ],
                handler: this.handleCalvinCycle.bind(this),
                name: 'Calvin Cycle (Dark Reactions)',
                category: 'mechanisms',
                description: 'Calvin cycle: fixing CO₂ and synthesizing glucose',
                difficulty: 'intermediate',
                prerequisites: ['photosynthesis_overview', 'biochemistry']
            },
            
            photosynthetic_pigments: {
                patterns: [
                    /pigment/i,
                    /chlorophyll/i,
                    /carotenoid/i,
                    /absorption.*spectrum/i,
                    /action.*spectrum/i,
                    /accessory.*pigment/i
                ],
                handler: this.handlePhotosyntheticPigments.bind(this),
                name: 'Photosynthetic Pigments',
                category: 'biochemistry',
                description: 'Pigments that absorb light energy for photosynthesis',
                difficulty: 'intermediate',
                prerequisites: ['chemistry', 'light_physics']
            },
            
            chloroplast_structure: {
                patterns: [
                    /chloroplast/i,
                    /thylakoid/i,
                    /stroma/i,
                    /grana/i,
                    /chloroplast.*structure/i
                ],
                handler: this.handleChloroplastStructure.bind(this),
                name: 'Chloroplast Structure and Function',
                category: 'cell_biology',
                description: 'Structure and organization of the chloroplast organelle',
                difficulty: 'beginner',
                prerequisites: ['cell_biology', 'organelles']
            },
            
            alternative_pathways: {
                patterns: [
                    /C4.*plant/i,
                    /CAM.*plant/i,
                    /photorespiration/i,
                    /alternative.*pathway/i,
                    /kranz.*anatomy/i
                ],
                handler: this.handleAlternativePathways.bind(this),
                name: 'Alternative Photosynthetic Pathways',
                category: 'adaptations',
                description: 'C4 and CAM pathways as adaptations to environmental conditions',
                difficulty: 'advanced',
                prerequisites: ['calvin_cycle', 'plant_physiology']
            },
            
            environmental_factors: {
                patterns: [
                    /limiting.*factor/i,
                    /light.*intensity/i,
                    /temperature.*effect/i,
                    /CO2.*concentration/i,
                    /photosynthesis.*rate/i
                ],
                handler: this.handleEnvironmentalFactors.bind(this),
                name: 'Environmental Factors Affecting Photosynthesis',
                category: 'physiology',
                description: 'How light, temperature, CO₂, and water affect photosynthetic rate',
                difficulty: 'intermediate',
                prerequisites: ['photosynthesis_overview', 'enzymology']
            },
            
            leaf_anatomy: {
                patterns: [
                    /leaf.*structure/i,
                    /stomata/i,
                    /mesophyll/i,
                    /palisade/i,
                    /spongy.*layer/i,
                    /gas.*exchange/i
                ],
                handler: this.handleLeafAnatomy.bind(this),
                name: 'Leaf Anatomy and Gas Exchange',
                category: 'anatomy',
                description: 'Leaf structure specialized for photosynthesis and gas exchange',
                difficulty: 'beginner',
                prerequisites: ['plant_biology', 'cell_biology']
            }
        };
    }

    initializePhotosynthesisLessons() {
        this.lessons = {
            overview: {
                title: "Photosynthesis: Converting Light Energy to Chemical Energy",
                concepts: [
                    "Photosynthesis converts light energy into chemical energy stored in glucose",
                    "Overall equation: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂",
                    "Two main stages: light-dependent reactions and Calvin cycle (light-independent)",
                    "Occurs in chloroplasts, primarily in mesophyll cells of leaves",
                    "Foundation of most food chains and source of atmospheric oxygen"
                ],
                theory: "Photosynthesis is the process by which plants, algae, and some bacteria convert light energy into chemical energy in the form of glucose. This process not only provides energy for the organism but also releases oxygen as a byproduct, sustaining aerobic life on Earth. Understanding photosynthesis is fundamental to biology, ecology, agriculture, and addressing climate change.",
                keyDefinitions: {
                    "Photosynthesis": "Process converting light energy to chemical energy stored in glucose",
                    "Autotroph": "Organism that produces its own food (e.g., plants)",
                    "Heterotroph": "Organism that consumes other organisms for food",
                    "Chloroplast": "Organelle where photosynthesis occurs",
                    "Chlorophyll": "Primary pigment that absorbs light energy",
                    "Light Reactions": "Stage producing ATP and NADPH using light energy",
                    "Calvin Cycle": "Stage fixing CO₂ to produce glucose",
                    "Stomata": "Pores in leaves allowing gas exchange"
                },
                overallEquation: {
                    simplified: "6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂",
                    detailed: "6CO₂ + 12H₂O + light energy → C₆H₁₂O₆ + 6O₂ + 6H₂O",
                    interpretation: [
                        "Carbon dioxide and water are reactants",
                        "Light energy is required (endergonic process)",
                        "Glucose and oxygen are products",
                        "Water appears on both sides (12 consumed, 6 produced)"
                    ]
                },
                twoStages: {
                    lightReactions: {
                        location: "Thylakoid membranes",
                        input: "Light, H₂O, NADP⁺, ADP + Pi",
                        output: "O₂, NADPH, ATP",
                        purpose: "Capture light energy and convert to chemical energy",
                        keyProcesses: ["Photon absorption", "Water splitting", "Electron transport", "ATP synthesis"]
                    },
                    calvinCycle: {
                        location: "Stroma",
                        input: "CO₂, ATP, NADPH",
                        output: "Glucose (C₆H₁₂O₆), ADP + Pi, NADP⁺",
                        purpose: "Fix CO₂ into organic molecules (glucose)",
                        keyProcesses: ["Carbon fixation", "Reduction", "Regeneration of RuBP"]
                    }
                },
                significance: [
                    "Produces oxygen - sustains aerobic life",
                    "Converts inorganic carbon to organic compounds - base of food chains",
                    "Removes CO₂ from atmosphere - climate regulation",
                    "Source of biomass and fossil fuels",
                    "Model for artificial photosynthesis and renewable energy"
                ],
                applications: [
                    "Agriculture - optimizing crop photosynthesis for higher yields",
                    "Climate science - carbon sequestration",
                    "Biofuels - algae-based fuel production",
                    "Space exploration - life support systems",
                    "Artificial photosynthesis - clean energy technology"
                ]
            },

            light_reactions: {
                title: "Light-Dependent Reactions: Capturing and Converting Light Energy",
                concepts: [
                    "Light reactions occur in thylakoid membranes",
                    "Two photosystems (PSII and PSI) work in series",
                    "Water is split to provide electrons (photolysis)",
                    "Electron transport chain generates proton gradient",
                    "ATP synthase produces ATP (photophosphorylation)",
                    "NADP⁺ is reduced to NADPH"
                ],
                theory: "The light-dependent reactions convert light energy into chemical energy in the form of ATP and NADPH. These reactions involve two photosystems connected by an electron transport chain, resulting in oxygen release, ATP synthesis, and NADPH production. The Z-scheme describes the flow of electrons from water to NADP⁺.",
                keyDefinitions: {
                    "Photosystem": "Protein complex containing chlorophyll and accessory pigments",
                    "PSII (Photosystem II)": "First photosystem, oxidizes water, absorbs 680nm light",
                    "PSI (Photosystem I)": "Second photosystem, reduces NADP⁺, absorbs 700nm light",
                    "Reaction Center": "Chlorophyll molecule that loses electrons when excited",
                    "Photolysis": "Light-driven splitting of water (2H₂O → 4H⁺ + 4e⁻ + O₂)",
                    "Electron Transport Chain": "Series of electron carriers between PSII and PSI",
                    "Photophosphorylation": "Light-driven ATP synthesis",
                    "Z-Scheme": "Diagram showing electron energy levels during light reactions"
                },
                location: {
                    thylakoidMembrane: {
                        components: [
                            "Photosystem II complex",
                            "Cytochrome b6f complex",
                            "Photosystem I complex",
                            "ATP synthase",
                            "Electron carriers (plastoquinone, plastocyanin, ferredoxin)"
                        ],
                        organization: "Proteins embedded in lipid bilayer with lumen inside"
                    },
                    lumen: "Interior space of thylakoid where H⁺ accumulates",
                    stroma: "Fluid surrounding thylakoids"
                },
                stepByStepProcess: {
                    step1_PhotonAbsorption: {
                        photosystemII: "Chlorophyll P₆₈₀ absorbs photon, electron excited to higher energy",
                        result: "P₆₈₀⁺ (oxidized) and excited electron"
                    },
                    step2_WaterSplitting: {
                        process: "Oxygen-evolving complex splits water: 2H₂O → 4H⁺ + 4e⁻ + O₂",
                        purpose: "Replace electrons lost by P₆₈₀",
                        oxygenRelease: "O₂ is released as byproduct",
                        protons: "H⁺ ions accumulate in lumen"
                    },
                    step3_ElectronTransportPSIItoPSI: {
                        pathway: "e⁻ → Plastoquinone (PQ) → Cytochrome b₆f → Plastocyanin (PC) → PSI",
                        energyUse: "Energy from electrons pumps H⁺ into lumen (builds gradient)",
                        result: "Electron reaches PSI at lower energy level"
                    },
                    step4_PSIExcitation: {
                        process: "P₇₀₀ in PSI absorbs photon, electron re-excited",
                        result: "Electron at very high energy level"
                    },
                    step5_NADPHProduction: {
                        pathway: "e⁻ → Ferredoxin → NADP⁺ reductase",
                        reaction: "NADP⁺ + 2e⁻ + H⁺ → NADPH",
                        purpose: "NADPH provides reducing power for Calvin cycle"
                    },
                    step6_ATPSynthesis: {
                        mechanism: "Chemiosmosis - H⁺ gradient drives ATP synthase",
                        process: "H⁺ flows from lumen to stroma through ATP synthase",
                        reaction: "ADP + Pi → ATP",
                        yield: "Approximately 1.3 ATP per 2 electrons (varies)"
                    }
                },
                zScheme: {
                    description: "Graph of electron energy vs. position in electron transport chain",
                    shape: "Zigzag (Z-shape) showing energy increases at photosystems",
                    keyPoints: [
                        "Start: Water at low energy",
                        "PSII: Energy boost from 680nm light",
                        "ETC: Gradual energy decrease",
                        "PSI: Energy boost from 700nm light",
                        "End: NADPH at high energy"
                    ]
                },
                noncyclicVsCyclic: {
                    noncyclicPhotophosphorylation: {
                        pathway: "H₂O → PSII → ETC → PSI → NADPH",
                        products: "ATP, NADPH, O₂",
                        electronSource: "Water",
                        electronDestination: "NADP⁺",
                        description: "Normal light reactions described above"
                    },
                    cyclicPhotophosphorylation: {
                        pathway: "PSI → Ferredoxin → Cytochrome b₆f → PSI (cycle)",
                        products: "ATP only (no NADPH or O₂)",
                        purpose: "Make extra ATP when ratio needed",
                        occurs: "When cell needs more ATP relative to NADPH"
                    }
                },
                energetics: {
                    lightEnergy: "Photons provide energy to excite electrons",
                    conservedEnergy: "~40% captured in ATP and NADPH",
                    lostEnergy: "~60% lost as heat (still very efficient)",
                    comparison: "More efficient than artificial solar cells"
                },
                applications: [
                    "Understanding photosynthetic efficiency",
                    "Improving crop yields through genetic engineering",
                    "Artificial photosynthesis for clean energy",
                    "Biofuel production from algae",
                    "Solar panel design inspired by photosystems"
                ]
            },

            calvin_cycle: {
                title: "Calvin Cycle: Carbon Fixation and Glucose Synthesis",
                concepts: [
                    "Calvin cycle fixes CO₂ into organic molecules",
                    "Occurs in stroma, does not directly require light (but needs ATP/NADPH from light reactions)",
                    "Three phases: Carbon fixation, Reduction, Regeneration of RuBP",
                    "RuBisCO is the key enzyme catalyzing CO₂ fixation",
                    "Produces G3P which is used to make glucose and other compounds",
                    "For every 3 CO₂ fixed, 1 G3P exits; 6 CO₂ needed for 1 glucose"
                ],
                theory: "The Calvin cycle (light-independent reactions) uses ATP and NADPH from light reactions to fix CO₂ into organic molecules, ultimately producing glucose. This cycle occurs in the stroma and regenerates its starting molecule (RuBP), allowing continuous CO₂ fixation. The cycle turns 3 times to produce one G3P molecule; two G3P combine to make glucose.",
                keyDefinitions: {
                    "Calvin Cycle": "Metabolic pathway fixing CO₂ into glucose using ATP and NADPH",
                    "Carbon Fixation": "Process of converting inorganic CO₂ to organic molecules",
                    "RuBP (Ribulose-1,5-bisphosphate)": "5-carbon acceptor molecule for CO₂",
                    "RuBisCO": "Enzyme catalyzing CO₂ fixation; most abundant protein on Earth",
                    "3-PGA (3-phosphoglycerate)": "3-carbon molecule produced by CO₂ fixation",
                    "G3P (Glyceraldehyde-3-phosphate)": "3-carbon sugar; product of Calvin cycle",
                    "C3 Plant": "Plant using Calvin cycle directly (most plants)"
                },
                location: {
                    stroma: "Fluid-filled space surrounding thylakoids",
                    enzymes: "RuBisCO and other Calvin cycle enzymes dissolved in stroma",
                    independence: "Does not directly require light, but needs ATP and NADPH from light reactions"
                },
                threePhases: {
                    phase1_CarbonFixation: {
                        step: "CO₂ combines with RuBP (C₅)",
                        enzyme: "RuBisCO (ribulose-1,5-bisphosphate carboxylase/oxygenase)",
                        reaction: "RuBP (C₅) + CO₂ (C₁) → 2 × 3-PGA (C₃)",
                        unstableIntermediate: "C₆ intermediate immediately splits",
                        input: "3 CO₂ (for 3 turns)",
                        output: "6 × 3-PGA",
                        note: "This is THE carbon fixation step"
                    },
                    phase2_Reduction: {
                        step1: "3-PGA phosphorylated using ATP → 1,3-bisphosphoglycerate",
                        step2: "1,3-bisphosphoglycerate reduced using NADPH → G3P",
                        input: "6 ATP, 6 NADPH (for 3 turns)",
                        output: "6 G3P",
                        note: "Reduction because electrons added (from NADPH)"
                    },
                    phase3_RegenerationOfRuBP: {
                        process: "5 out of 6 G3P (C₃) rearranged to regenerate 3 RuBP (C₅)",
                        input: "3 ATP (for 3 turns)",
                        output: "3 RuBP (ready for next cycle)",
                        complexReactions: "Series of isomerizations and condensations",
                        netProduct: "1 G3P exits cycle (out of 6 produced)"
                    }
                },
                completeAccountingFor3Turns: {
                    inputs: {
                        CO2: "3 molecules",
                        RuBP: "3 molecules (regenerated)",
                        ATP: "9 molecules (6 for reduction, 3 for regeneration)",
                        NADPH: "6 molecules"
                    },
                    outputs: {
                        G3P: "1 net molecule (5 others used to regenerate RuBP)",
                        ADP: "9 molecules",
                        Pi: "9 molecules",
                        NADPplus: "6 molecules"
                    }
                },
                glucoseSynthesis: {
                    process: "2 G3P molecules combine → 1 glucose (C₆H₁₂O₆)",
                    cyclesNeeded: "6 turns of Calvin cycle to make 1 glucose",
                    totalInput: "6 CO₂, 18 ATP, 12 NADPH",
                    otherUses: "G3P also used to make fatty acids, amino acids, sucrose, starch"
                },
                rubisco: {
                    importance: "Most abundant enzyme/protein on Earth",
                    function: "Catalyzes CO₂ + RuBP → 2 × 3-PGA",
                    problem: "Slow enzyme (~3 reactions/second)",
                    inefficiency: "Can also catalyze photorespiration (CO₂ vs O₂)",
                    adaptations: "C₄ and CAM plants evolved to minimize RuBisCO's O₂ interaction",
                    structure: "Large complex (8 large subunits, 8 small subunits)",
                    regulation: "Activated by light (indirectly via stromal pH and Mg²⁺)"
                },
                energyAccounting: {
                    per_G3P: "3 CO₂, 9 ATP, 6 NADPH → 1 G3P",
                    per_glucose: "6 CO₂, 18 ATP, 12 NADPH → 1 glucose",
                    efficiency: "About 35-40% of light energy captured ends up in glucose"
                },
                comparison: {
                    toRespiration: "Calvin cycle is essentially reverse of glycolysis (but not exact)",
                    toPhotosynthesis: "Light reactions make ATP/NADPH; Calvin cycle uses them"
                },
                applications: [
                    "Understanding photosynthetic efficiency",
                    "Engineering C₃ crops with C₄ traits",
                    "Improving RuBisCO efficiency through directed evolution",
                    "Carbon capture technologies",
                    "Synthetic biology for biofuel production"
                ]
            },

            photosynthetic_pigments: {
                title: "Photosynthetic Pigments: Capturing Light Energy",
                concepts: [
                    "Pigments absorb specific wavelengths of light",
                    "Chlorophyll a is the primary pigment",
                    "Accessory pigments broaden absorption spectrum",
                    "Absorption spectrum shows wavelengths absorbed by pigment",
                    "Action spectrum shows wavelengths effective for photosynthesis",
                    "Fall colors result from breakdown of chlorophyll, revealing accessory pigments"
                ],
                theory: "Photosynthetic pigments are molecules that absorb light energy. Different pigments absorb different wavelengths, allowing plants to capture a broad range of light. Chlorophyll a is essential for photosynthesis, while accessory pigments (chlorophyll b, carotenoids) transfer absorbed energy to chlorophyll a and protect against photo-damage.",
                keyDefinitions: {
                    "Pigment": "Molecule that absorbs specific wavelengths of light",
                    "Chlorophyll a": "Primary pigment in photosynthesis, absorbs red and blue light",
                    "Chlorophyll b": "Accessory pigment, absorbs slightly different wavelengths than chlorophyll a",
                    "Carotenoids": "Orange/yellow accessory pigments (β-carotene, xanthophylls)",
                    "Absorption Spectrum": "Graph showing wavelengths absorbed by a pigment",
                    "Action Spectrum": "Graph showing wavelengths that drive photosynthesis",
                    "Antenna Complex": "Array of pigments transferring energy to reaction center"
                },
                pigmentTypes: {
                    chlorophyllA: {
                        color: "Blue-green",
                        absorptionPeaks: "430 nm (blue-violet) and 662 nm (red)",
                        role: "Primary pigment; directly participates in light reactions",
                        location: "Reaction center and antenna complex",
                        structure: "Porphyrin ring with Mg²⁺ at center, hydrophobic phytol tail",
                        universality: "Present in all photosynthetic organisms"
                    },
                    chlorophyllB: {
                        color: "Yellow-green",
                        absorptionPeaks: "453 nm (blue) and 642 nm (red)",
                        role: "Accessory pigment; transfers energy to chlorophyll a",
                        difference: "Has -CHO group instead of -CH₃ (compared to chlorophyll a)",
                        location: "Antenna complex only",
                        presence: "Plants and green algae"
                    },
                    carotenoids: {
                        betaCarotene: {
                            color: "Orange",
                            absorptionPeak: "450 nm (blue)",
                            role: "Accessory pigment; photoprotection",
                            structure: "Long hydrocarbon chain with conjugated double bonds",
                            function: "Absorbs excess light energy, quenches harmful radicals"
                        },
                        xanthophylls: {
                            color: "Yellow",
                            absorptionPeak: "400-500 nm",
                            role: "Photoprotection, dissipate excess energy as heat",
                            examples: "Lutein, zeaxanthin",
                            importance: "Prevent photo-oxidative damage"
                        }
                    }
                },
                absorptionVsAction: {
                    absorptionSpectrum: {
                        definition: "Wavelengths absorbed by isolated pigment",
                        method: "Spectrophotometer measures light absorption",
                        result: "Peaks where pigment absorbs most light"
                    },
                    actionSpectrum: {
                        definition: "Wavelengths that actually drive photosynthesis",
                        method: "Measure O₂ production or CO₂ uptake at different wavelengths",
                        result: "Shows effectiveness of each wavelength",
                        comparison: "Matches combined absorption of all pigments"
                    },
                    engelmannExperiment: {
                        scientist: "Theodor Engelmann (1882)",
                        setup: "Algae in spectrum of light, aerobic bacteria added",
                        observation: "Bacteria clustered in red and blue regions (most O₂)",
                        conclusion: "Red and blue light most effective for photosynthesis"
                    }
                },
                lightAndColor: {
                    visibleSpectrum: "400-700 nm (violet to red)",
                    plantAppearance: "Plants are green because they reflect/transmit green light (not absorbed)",
                    mostAbsorbed: "Blue (400-500 nm) and red (600-700 nm)",
                    leastAbsorbed: "Green (500-600 nm) - why plants look green"
                },
                antennaComplex: {
                    structure: "Hundreds of pigment molecules surrounding reaction center",
                    function: "Absorb photons and transfer energy to reaction center chlorophyll",
                    process: "Resonance energy transfer (not electron transfer)",
                    advantage: "Increases light-harvesting efficiency",
                    analogy: "Like a satellite dish focusing signals to receiver"
                },
                photoprotection: {
                    problem: "Excess light can damage photosynthetic apparatus",
                    carotenoidRole: [
                        "Absorb and dissipate excess light as heat",
                        "Quench reactive oxygen species (antioxidant)",
                        "Protect chlorophyll from photo-oxidation"
                    ],
                    xanthophyllCycle: "Converts violaxanthin to zeaxanthin under high light (dissipates energy)"
                },
                seasonalChanges: {
                    springSummer: "High chlorophyll production → leaves green",
                    fall: "Chlorophyll breaks down faster than produced",
                    revealed: "Carotenoids (orange/yellow) already present become visible",
                    anthocyanins: "Red pigments synthesized in fall (not photosynthetic)"
                },
                applications: [
                    "Identifying plant stress through pigment analysis",
                    "Optimizing greenhouse lighting for crops",
                    "Understanding algal blooms",
                    "Developing artificial photosynthetic systems",
                    "Remote sensing of vegetation health"
                ]
            },

            chloroplast_structure: {
                title: "Chloroplast Structure: The Organelle of Photosynthesis",
                concepts: [
                    "Chloroplasts are double-membrane organelles",
                    "Contains internal thylakoid membrane system",
                    "Thylakoids organized into stacks called grana",
                    "Stroma is the fluid surrounding thylakoids",
                    "Light reactions occur in thylakoid membranes",
                    "Calvin cycle occurs in stroma",
                    "Chloroplasts have their own DNA and ribosomes"
                ],
                theory: "The chloroplast is a specialized organelle where photosynthesis occurs. Its structure is intricately related to its function: the thylakoid membranes provide a large surface area for light-harvesting complexes and create compartments for proton gradients, while the stroma houses the enzymes of the Calvin cycle. Chloroplasts evolved from ancient cyanobacteria through endosymbiosis.",
                keyDefinitions: {
                    "Chloroplast": "Organelle where photosynthesis occurs in plants and algae",
                    "Double Membrane": "Outer and inner membranes surrounding chloroplast",
                    "Thylakoid": "Flattened sac containing photosynthetic membranes",
                    "Granum (plural: Grana)": "Stack of thylakoids",
                    "Stroma": "Fluid-filled space surrounding thylakoids",
                    "Lumen": "Interior space within thylakoid",
                    "Stroma Lamellae": "Thylakoid membranes connecting grana"
                },
                overallStructure: {
                    size: "5-10 μm in diameter",
                    number: "20-100 per mesophyll cell (varies)",
                    shape: "Lens-shaped or ellipsoid",
                    location: "Primarily in mesophyll cells of leaves",
                    movement: "Can move within cell in response to light"
                },
                membraneSystem: {
                    outerMembrane: {
                        properties: "Freely permeable to small molecules",
                        function: "Boundary, relatively non-selective",
                        composition: "Phospholipid bilayer"
                    },
                    innerMembrane: {
                        properties: "Selectively permeable, has transport proteins",
                        function: "Regulates entry/exit of molecules",
                        importance: "Controls metabolite flow into/out of chloroplast"
                    },
                    intermembraneSpace: "Narrow space between outer and inner membranes",
                    thylakoidMembrane: {
                        properties: "Highly folded, contains photosystems and ETC",
                        function: "Site of light-dependent reactions",
                        proteins: "Photosystems I and II, cytochrome b₆f, ATP synthase",
                        organization: "Lipids (~50%) and proteins (~50%)"
                    }
                },
                thylakoidSystem: {
                    granaThylakoids: {
                        structure: "Stacked thylakoids (10-20 per stack)",
                        location: "Concentrated in interior of chloroplast",
                        function: "Maximize surface area for light harvesting",
                        enrichment: "High concentration of PSII and light-harvesting complexes"
                    },
                    stromaLamellae: {
                        structure: "Unstacked thylakoids connecting grana",
                        function: "Connect grana, distribute proteins",
                        enrichment: "High concentration of PSI and ATP synthase"
                    },
                    lumen: {
                        function: "H⁺ accumulation creates proton gradient",
                        pH: "~5 (acidic) during light reactions vs stroma ~8 (basic)",
                        gradientMagnitude: "~1000× H⁺ concentration difference"
                    }
                },
                stroma: {
                    composition: "Aqueous solution with high protein concentration",
                    enzymes: "RuBisCO and all Calvin cycle enzymes",
                    otherContents: "Ribosomes, DNA, RNA, starch granules, lipid droplets",
                    function: "Site of Calvin cycle (carbon fixation)",
                    pH: "~8 (basic) during light reactions"
                },
                chloroplastDNA: {
                    presence: "Circular DNA, similar to bacterial DNA",
                    size: "~120-200 kilobase pairs",
                    genes: "~100-120 genes (much smaller than nuclear genome)",
                    encodes: [
                        "Some photosystem proteins",
                        "Some RuBisCO subunits",
                        "Ribosomal RNAs",
                        "Transfer RNAs"
                    ],
                    note: "Most chloroplast proteins encoded by nuclear DNA and imported"
                },
                endosymbioticOrigin: {
                    theory: "Chloroplasts evolved from free-living cyanobacteria",
                    evidence: [
                        "Double membrane (from engulfment)",
                        "Own circular DNA (like bacteria)",
                        "70S ribosomes (like bacteria, not 80S like eukaryotes)",
                        "Binary fission (divide independently)",
                        "Similar size to bacteria"
                    ],
                    timeline: "~1.5 billion years ago"
                },
                compartmentalization: {
                    advantage1: "Separates light and dark reactions spatially",
                    advantage2: "Allows proton gradient formation (lumen vs stroma)",
                    advantage3: "Protects light-sensitive molecules from cytoplasm",
                    advantage4: "Concentrates enzymes and substrates"
                },
                applications: [
                    "Understanding photosynthetic efficiency",
                    "Chloroplast engineering for improved crops",
                    "Studying endosymbiotic evolution",
                    "Designing artificial photosynthetic compartments",
                    "Chloroplast transformation for biotech applications"
                ]
            },

            alternative_pathways: {
                title: "Alternative Photosynthetic Pathways: C4 and CAM",
                concepts: [
                    "C3 plants use only Calvin cycle (most plants)",
                    "C4 plants have spatial separation of CO₂ fixation and Calvin cycle",
                    "CAM plants have temporal separation (fix CO₂ at night, Calvin cycle during day)",
                    "C4 and CAM are adaptations to hot, dry environments",
                    "Photorespiration is wasteful process minimized in C4 and CAM",
                    "RuBisCO can use O₂ instead of CO₂, leading to photorespiration"
                ],
                theory: "C4 and CAM photosynthesis are evolutionary adaptations that minimize photorespiration and conserve water in hot, dry climates. C4 plants spatially separate initial CO₂ fixation (in mesophyll) from the Calvin cycle (in bundle sheath), while CAM plants temporally separate these processes (night vs. day). Both strategies concentrate CO₂ around RuBisCO, improving efficiency.",
                keyDefinitions: {
                    "C3 Plant": "Plant using only Calvin cycle (e.g., wheat, rice, soybean)",
                    "C4 Plant": "Plant pre-fixing CO₂ as 4-carbon compound before Calvin cycle (e.g., corn, sugarcane)",
                    "CAM Plant": "Plant fixing CO₂ at night, Calvin cycle during day (e.g., cacti, pineapple)",
                    "Photorespiration": "Wasteful pathway when RuBisCO uses O₂ instead of CO₂",
                    "PEP Carboxylase": "Enzyme fixing CO₂ in C4 and CAM plants; no O₂ affinity",
                    "Kranz Anatomy": "Specialized leaf structure in C4 plants",
                    "Crassulacean Acid Metabolism": "Full name of CAM pathway"
                },
                photorespiration: {
                    problem: "RuBisCO can catalyze reaction with O₂ instead of CO₂",
                    reaction: "RuBP + O₂ → 3-PGA + 2-phosphoglycolate (only 1 useful product)",
                    consequence: "Wastes energy, releases CO₂, reduces photosynthetic efficiency",
                    conditions: "Favored by high O₂, low CO₂, high temperature",
                    lossOfEfficiency: "Can reduce photosynthesis by 25-50% in C3 plants",
                    evolutionaryProblem: "RuBisCO evolved when atmosphere had little O₂"
                },
                C3Photosynthesis: {
                    definition: "Standard Calvin cycle only",
                    firstStableProduct: "3-PGA (3-carbon compound)",
                    leafAnatomy: "Homogeneous mesophyll",
                    advantages: [
                        "Efficient under cool, moist conditions",
                        "Lower energy cost than C4/CAM",
                        "Simpler mechanism"
                    ],
                    disadvantages: [
                        "Photorespiration significant under hot, dry conditions",
                        "Water loss through stomata during day"
                    ],
                    examples: "Wheat, rice, soybean, most trees, most temperate plants"
                },
                C4Photosynthesis: {
                    definition: "Pre-fixes CO₂ as 4-carbon compound, then Calvin cycle",
                    mechanism: {
                        step1_mesophyll: "CO₂ + PEP → Oxaloacetate (C₄) via PEP carboxylase",
                        step2_conversion: "Oxaloacetate → Malate or Aspartate",
                        step3_transport: "4-carbon compound moves to bundle sheath cells",
                        step4_bundleSheath: "4-carbon compound releases CO₂ → Calvin cycle",
                        step5_return: "3-carbon compound returns to mesophyll to regenerate PEP"
                    },
                    kranzAnatomy: {
                        mesophyllCells: "Outer layer, initial CO₂ fixation",
                        bundleSheath: "Inner layer surrounding vein, Calvin cycle occurs",
                        spatial: "CO₂ fixation and Calvin cycle in different cells",
                        advantage: "Concentrates CO₂ around RuBisCO (10-120× higher than air)"
                    },
                    PEPCarboxylase: {
                        affinity: "High affinity for CO₂, does NOT react with O₂",
                        advantage: "No photorespiration in mesophyll cells",
                        efficiency: "Can fix CO₂ even at low concentrations"
                    },
                    advantages: [
                        "Minimal photorespiration",
                        "More efficient under high light, high temp",
                        "Better water use efficiency (stomata open less)",
                        "Higher photosynthetic rate in hot climates"
                    ],
                    disadvantages: [
                        "Higher energy cost (2 ATP per CO₂ for concentrating)",
                        "Requires specialized Kranz anatomy",
                        "Less efficient in cool, low-light conditions"
                    ],
                    examples: "Corn (maize), sugarcane, sorghum, many tropical grasses",
                    evolution: "Evolved independently >60 times in different plant families"
                },
                CAMPhotosynthesis: {
                    definition: "Temporal separation: CO₂ fixed at night, Calvin cycle during day",
                    mechanism: {
                        night: {
                            stomataOpen: "Stomata open (cooler, less water loss)",
                            fixation: "CO₂ + PEP → Oxaloacetate → Malate (via PEP carboxylase)",
                            storage: "Malate stored in vacuole (as malic acid)"
                        },
                        day: {
                            stomataClosed: "Stomata closed (prevent water loss)",
                            release: "Malate released from vacuole, decarboxylated → CO₂",
                            calvinCycle: "CO₂ enters Calvin cycle normally",
                            concentrated: "CO₂ concentration around RuBisCO high"
                        }
                    },
                    advantages: [
                        "Extreme water use efficiency (50× better than C3)",
                        "Minimal photorespiration",
                        "Survive in very dry environments",
                        "Stomata open at night (cooler, less water loss)"
                    ],
                    disadvantages: [
                        "Slow growth rate",
                        "Energy cost for concentrating CO₂",
                        "Limited storage capacity for malate"
                    ],
                    examples: "Cacti, pineapple, agave, jade plant, many succulents",
                    adaptation: "Extreme drought tolerance"
                },
                comparison: {
                    table: [
                        ["Feature", "C3", "C4", "CAM"],
                        ["CO₂ fixation", "Calvin cycle only", "PEP carboxylase first", "PEP carboxylase at night"],
                        ["First product", "3-PGA (C₃)", "Oxaloacetate (C₄)", "Malate (C₄)"],
                        ["Anatomy", "Homogeneous", "Kranz (2 cell types)", "Single cell"],
                        ["Photorespiration", "Significant", "Minimal", "Minimal"],
                        ["Water efficiency", "Low", "Medium-High", "Very High"],
                        ["Energy cost", "Low", "Medium (+2 ATP/CO₂)", "High"],
                        ["Optimal conditions", "Cool, moist", "Hot, sunny", "Hot, arid"],
                        ["Growth rate", "Variable", "Fast (warm climates)", "Slow"],
                        ["Examples", "Wheat, rice", "Corn, sugarcane", "Cacti, pineapple"]
                    ]
                },
                evolutionarySignificance: [
                    "C4 and CAM evolved as atmospheric O₂ increased and CO₂ decreased",
                    "Allow photosynthesis in hot, dry environments",
                    "C4 plants dominate tropical grasslands and savannas",
                    "CAM plants dominate desert ecosystems"
                ],
                applications: [
                    "Engineering C4 traits into C3 crops (e.g., rice) to improve yield",
                    "Understanding climate change impacts on plant distribution",
                    "Selecting appropriate crops for different climates",
                    "Bioenergy crops in marginal lands",
                    "Predicting agricultural productivity under global warming"
                ]
            },

            environmental_factors: {
                title: "Environmental Factors Affecting Photosynthesis",
                concepts: [
                    "Light intensity, CO₂ concentration, and temperature affect photosynthetic rate",
                    "Limiting factor principle: rate determined by factor in shortest supply",
                    "Light saturation point: beyond which more light doesn't increase rate",
                    "CO₂ enrichment can increase photosynthesis (up to a point)",
                    "Temperature affects enzyme activity (optimal range exists)",
                    "Water stress closes stomata, reducing CO₂ uptake"
                ],
                theory: "Photosynthetic rate is influenced by multiple environmental factors. According to the law of limiting factors (Blackman, 1905), the rate is determined by the factor that is in shortest supply. Understanding these factors is crucial for agriculture, ecology, and predicting responses to climate change.",
                keyDefinitions: {
                    "Limiting Factor": "Environmental variable that limits the rate of a process",
                    "Light Compensation Point": "Light intensity where photosynthesis = respiration",
                    "Light Saturation Point": "Light intensity beyond which rate plateaus",
                    "Photosynthetic Rate": "Rate of CO₂ uptake or O₂ production",
                    "Law of Limiting Factors": "Process rate limited by scarcest factor (Blackman)"
                },
                lightIntensity: {
                    relationship: "Generally linear increase at low light, plateaus at high light",
                    lowLight: {
                        response: "Photosynthetic rate increases with light intensity",
                        limitation: "Light is limiting factor",
                        slope: "Steeper in shade-adapted plants"
                    },
                    compensationPoint: {
                        definition: "Light intensity where photosynthesis = cellular respiration",
                        netCO2: "Zero net CO₂ uptake",
                        value: "~1-2% of full sunlight for C3 plants, lower for shade plants"
                    },
                    saturationPoint: {
                        definition: "Light intensity where photosynthesis plateaus",
                        cause: "Other factors become limiting (CO₂, enzymes)",
                        value: "~25% of full sunlight for shade plants, ~100% for sun plants",
                        beyondSaturation: "Excess light can cause photoinhibition (damage)"
                    },
                    sunVsShade: {
                        sunPlants: "Higher light saturation point, faster max rate",
                        shadePlants: "Lower light saturation, efficient at low light",
                        adaptation: "Reflects ecological niche"
                    }
                },
                CO2Concentration: {
                    atmosphericCO2: "~420 ppm (0.042%) as of 2024",
                    relationship: "Rate increases with CO₂ concentration up to saturation",
                    lowCO2: {
                        limitation: "CO₂ is limiting factor (common under high light)",
                        stomata: "Normally limit CO₂ entry"
                    },
                    enrichment: {
                        greenhouseUse: "CO₂ enrichment (800-1200 ppm) increases yield",
                        benefit: "Can increase photosynthesis by 20-50%",
                        saturation: "Eventually RuBisCO or light becomes limiting",
                        crops: "Tomatoes, cucumbers, lettuce benefit greatly"
                    },
                    C3VsC4: {
                        C3: "More responsive to CO₂ enrichment (RuBisCO not saturated)",
                        C4: "Less responsive (already concentrate CO₂ internally)"
                    },
                    globalChange: {
                        risingCO2: "Atmospheric CO₂ rising due to fossil fuels",
                        impact: "May increase plant productivity (CO₂ fertilization effect)",
                        complexity: "Offset by temperature, water stress, nutrient limitations"
                    }
                },
                temperature: {
                    relationship: "Optimum temperature exists; rate decreases above and below",
                    lowTemperature: {
                        effect: "Slows enzyme activity, reduces membrane fluidity",
                        limitation: "Enzyme kinetics slow",
                        plants: "Cold-adapted plants have lower optimum"
                    },
                    optimumTemperature: {
                        C3: "~25-30°C",
                        C4: "~30-40°C (evolved in warmer climates)",
                        CAM: "Variable, often high daytime tolerance",
                        note: "Optimum varies by species and adaptation"
                    },
                    highTemperature: {
                        effects: [
                            "Enzyme denaturation (especially RuBisCO)",
                            "Increased photorespiration (O₂ competes with CO₂)",
                            "Stomatal closure (water stress)",
                            "Membrane damage"
                        ],
                        C3Impact: "Photorespiration increases significantly >30°C",
                        C4Advantage: "C4 plants minimize photorespiration, tolerate higher temps"
                    },
                    Q10: {
                        definition: "Rate increase for every 10°C temperature rise",
                        typical: "Q₁₀ ≈ 2 (rate doubles per 10°C)",
                        note: "Only applies within optimal range"
                    }
                },
                waterAvailability: {
                    stomatalControl: {
                        tradeoff: "Stomata must open for CO₂ but causes water loss",
                        waterStress: "Stomata close to prevent wilting",
                        consequence: "Reduced CO₂ uptake, lower photosynthesis"
                    },
                    directEffects: "Wilting disrupts chloroplast structure and function",
                    C3VsC4VsCAM: {
                        C3: "High water loss (stomata open during day)",
                        C4: "Better water use efficiency (concentrate CO₂)",
                        CAM: "Best water efficiency (stomata open at night)"
                    }
                },
                otherFactors: {
                    wavelength: {
                        effect: "Red and blue light most effective",
                        green: "Least absorbed, least effective"
                    },
                    oxygenConcentration: {
                        effect: "High O₂ increases photorespiration in C3 plants",
                        normal: "21% O₂ in air"
                    },
                    nutrients: {
                        nitrogen: "Essential for chlorophyll and RuBisCO synthesis",
                        magnesium: "Central atom in chlorophyll",
                        iron: "Required for chlorophyll synthesis",
                        limitation: "Deficiency reduces photosynthetic capacity"
                    },
                    leafAge: {
                        young: "Lower rates (still developing)",
                        mature: "Highest rates",
                        senescent: "Declining rates (chlorophyll breakdown)"
                    }
                },
                limitingFactorPrinciple: {
                    law: "Rate determined by factor in shortest supply",
                    example: "If light is low, increasing CO₂ won't help",
                    application: "Optimize multiple factors for maximum yield",
                    Blackman: "Proposed by F.F. Blackman (1905)"
                },
                applications: [
                    "Greenhouse management - optimize light, CO₂, temperature",
                    "Crop yield prediction under climate change",
                    "Selecting crops for specific climates",
                    "Irrigation scheduling to prevent water stress",
                    "Understanding forest productivity and carbon sequestration"
                ]
            },

            leaf_anatomy: {
                title: "Leaf Anatomy: Structure Optimized for Photosynthesis",
                concepts: [
                    "Leaves are primary site of photosynthesis",
                    "Flat, broad shape maximizes light capture",
                    "Palisade mesophyll cells densely packed with chloroplasts",
                    "Spongy mesophyll allows gas exchange",
                    "Stomata regulate CO₂ uptake and water loss",
                    "Vascular bundles transport water and sugars"
                ],
                theory: "Leaf anatomy is highly specialized for photosynthesis and gas exchange. The structure reflects adaptations to maximize light capture, CO₂ diffusion, and water transport while minimizing water loss. Different plant types (C3, C4, CAM) and environments (sun, shade, desert) show variations in leaf anatomy.",
                keyDefinitions: {
                    "Leaf": "Primary photosynthetic organ of plants",
                    "Epidermis": "Outer protective layer of leaf",
                    "Cuticle": "Waxy layer preventing water loss",
                    "Mesophyll": "Internal tissue where photosynthesis occurs",
                    "Palisade Mesophyll": "Column-like cells with many chloroplasts",
                    "Spongy Mesophyll": "Loosely arranged cells for gas exchange",
                    "Stomata": "Pores allowing gas exchange",
                    "Guard Cells": "Cells surrounding stomata, control opening",
                    "Vascular Bundle": "Veins containing xylem and phloem"
                },
                externalStructure: {
                    blade: "Flat, broad part of leaf",
                    petiole: "Stalk attaching leaf to stem",
                    shape: "Varies by species (simple, compound, lobed)",
                    surfaceArea: "Large relative to volume - maximizes light capture"
                },
                layers: {
                    upperEpidermis: {
                        structure: "Single layer of flattened cells",
                        cuticle: "Waxy coating on outer surface",
                        function: "Protection, reduce water loss",
                        stomata: "Few or absent on upper surface (most plants)",
                        transparency: "Allows light penetration to mesophyll"
                    },
                    palisadeMesophyll: {
                        location: "Below upper epidermis",
                        structure: "Column-like cells, tightly packed",
                        chloroplasts: "Very high density (30-70 per cell)",
                        function: "Primary site of photosynthesis",
                        lightCapture: "Oriented to maximize light absorption",
                        layers: "Usually 1-2 layers"
                    },
                    spongyMesophyll: {
                        location: "Below palisade, above lower epidermis",
                        structure: "Irregularly shaped cells, loosely arranged",
                        airSpaces: "Large intercellular spaces",
                        chloroplasts: "Lower density than palisade",
                        function: "Gas exchange (CO₂, O₂, water vapor)",
                        surface: "Cells have large internal surface area"
                    },
                    lowerEpidermis: {
                        structure: "Single layer of flattened cells",
                        stomata: "Abundant (most plants)",
                        cuticle: "Waxy coating",
                        function: "Gas exchange, reduce water loss"
                    }
                },
                stomata: {
                    structure: {
                        pore: "Opening for gas exchange",
                        guardCells: "Pair of cells surrounding pore",
                        subsidiaries: "Neighboring cells (some species)"
                    },
                    function: {
                        gasExchange: "CO₂ in, O₂ and H₂O out",
                        regulation: "Open and close in response to conditions",
                        density: "100-300 per mm² (varies greatly)"
                    },
                    opening: {
                        mechanism: "Guard cells swell (turgid) → pore opens",
                        triggers: [
                            "Light (blue light especially)",
                            "Low CO₂ inside leaf",
                            "Adequate water supply"
                        ],
                        process: "K⁺ pumped into guard cells → water follows → turgor"
                    },
                    closing: {
                        mechanism: "Guard cells shrink (flaccid) → pore closes",
                        triggers: [
                            "Darkness",
                            "High CO₂ inside leaf",
                            "Water stress (ABA hormone signals closure)"
                        ],
                        process: "K⁺ leaves guard cells → water follows → loss of turgor"
                    },
                    tradeoff: "Must balance CO₂ uptake vs. water loss",
                    CAMPlants: "Stomata open at night, closed during day (water conservation)"
                },
                vascularBundles: {
                    location: "Running through mesophyll",
                    xylem: {
                        function: "Transport water and minerals from roots to leaves",
                        location: "Upper side of vein",
                        importance: "Provides water for photosynthesis and maintains turgor"
                    },
                    phloem: {
                        function: "Transport sugars (products of photosynthesis) to rest of plant",
                        location: "Lower side of vein",
                        importance: "Exports photosynthate to growing tissues, roots, storage"
                    },
                    bundleSheath: "Layer of cells surrounding vascular tissue",
                    C4Plants: "Bundle sheath cells site of Calvin cycle (Kranz anatomy)"
                },
                adaptations: {
                    sunLeaves: {
                        thickness: "Thicker leaves",
                        palisade: "More layers, denser chloroplasts",
                        cuticle: "Thicker",
                        stomata: "More per area",
                        advantage: "Higher photosynthetic capacity, tolerate high light"
                    },
                    shadeLeaves: {
                        thickness: "Thinner leaves",
                        palisade: "Fewer layers",
                        area: "Larger surface area per mass",
                        chlorophyll: "More per chloroplast (capture low light)",
                        advantage: "Efficient light capture in low light"
                    },
                    xerophytes: {
                        cuticle: "Very thick",
                        stomata: "Sunken, fewer per area",
                        trichomes: "Hairs reduce air flow (reduce water loss)",
                        CAM: "Many use CAM photosynthesis",
                        examples: "Cacti, succulents, desert plants"
                    },
                    hydrophytes: {
                        cuticle: "Thin or absent",
                        airSpaces: "Very large (buoyancy)",
                        stomata: "Mainly on upper surface",
                        roots: "Reduced",
                        examples: "Water lilies, aquatic plants"
                    }
                },
                gasExchange: {
                    CO2Pathway: "Air → stomata → intercellular spaces → dissolves in mesophyll cell walls → diffuses into cells → chloroplasts",
                    O2Pathway: "Chloroplasts → cells → intercellular spaces → stomata → air",
                    diffusionGradient: "Maintained by photosynthesis consuming CO₂, producing O₂",
                    resistance: "Stomatal aperture main resistance to gas exchange"
                },
                applications: [
                    "Crop breeding for improved photosynthetic efficiency",
                    "Understanding plant water use and irrigation needs",
                    "Predicting plant responses to climate change",
                    "Identifying plant stress through leaf anatomy changes",
                    "Designing artificial leaves for solar fuel production"
                ]
            }
        };
    }

    initializePhotosynthesisExperiments() {
        this.photosynthesisExperiments = {
            // ========================================
            // EXPERIMENT 1: PRIESTLEY'S EXPERIMENT
            // ========================================
            
            priestley_oxygen_discovery: {
                name: "Priestley's Experiment - Discovery that Plants Produce Oxygen",
                relatedTopics: ['overview', 'light_reactions', 'leaf_anatomy'],
                category: 'historical_fundamental',
                historicalBackground: {
                    scientist: "Joseph Priestley",
                    year: "1772",
                    context: "Before Priestley, the composition of air and role of plants in gas exchange was not understood. The concept of 'phlogiston' dominated chemistry.",
                    discovery: "Plants restore air made 'bad' by burning candles or respiring mice",
                    significance: "First evidence that plants produce oxygen and demonstrated plant-animal interdependence",
                    quote: "I have been so happy as by accident to hit upon a method of restoring air which has been injured by the burning of candles.",
                    nobelPrizeConnection: "Laid groundwork for understanding photosynthesis and respiration",
                    historicalImpact: "Overturned phlogiston theory, advanced understanding of gases, showed plants actively change atmosphere"
                },
                labExperiment: {
                    title: "Plants Restore 'Spent' Air: Measuring Oxygen Production",
                    hypothesis: "If plants produce oxygen during photosynthesis, then a plant grown in a sealed container will restore air that has been depleted of oxygen, allowing a candle to burn again or an organism to survive.",
                    purpose: "Demonstrate that plants produce oxygen and restore air quality",
                    background: {
                        priestleySetup: "Used bell jars, candles, mice, and mint plants",
                        observation: "Mouse dies in sealed jar with candle, but survives with plant",
                        modernUnderstanding: "Plant photosynthesis produces O₂; respiration/combustion consumes O₂ and produces CO₂"
                    },
                    variables: {
                        independent: "Presence or absence of plant in sealed container",
                        dependent: "Ability of candle to burn or oxygen concentration",
                        controlled: ["Light exposure", "Temperature", "Container volume", "Initial air composition"]
                    },
                    materials: [
                        "Clear plastic or glass containers with tight-fitting lids (large enough for plants)",
                        "Aquatic plants (e.g., Elodea, Cabomba) or small potted terrestrial plants (e.g., basil, mint)",
                        "Small candles or tea lights",
                        "Matches or lighter",
                        "Oxygen sensor (optional, for quantitative measurement)",
                        "Grow light or sunny location",
                        "Water (for aquatic plants)",
                        "Timer",
                        "Marker to label containers"
                    ],
                    safetyPrecautions: [
                        "Adult supervision required when using candles",
                        "Use containers that can withstand heat from candle",
                        "Do not leave burning candles unattended",
                        "Ventilate room after experiment",
                        "If using animals (e.g., snails), monitor welfare and remove if distressed",
                        "Wear safety goggles"
                    ],
                    procedure: [
                        "SETUP:",
                        "Prepare 3 identical clear containers with tight-fitting lids",
                        "Label: Control (no plant), Plant in Dark, Plant in Light",
                        "If using aquatic plants: fill containers 3/4 with water, add plant sprigs",
                        "If using terrestrial plants: place small potted plants in containers",
                        "",
                        "PHASE 1 - DEPLETE OXYGEN:",
                        "Place a small lit candle on a floating platform or stable base in each container",
                        "(For aquatic setup, candle can float on cork or placed on inverted cup above water)",
                        "Quickly seal containers with lids",
                        "Observe and time how long candle burns before extinguishing",
                        "Expected: Candles extinguish within 30-60 seconds (O₂ consumed, CO₂ accumulates)",
                        "Leave containers sealed",
                        "",
                        "PHASE 2 - TREATMENT:",
                        "Control container: Leave in light but NO plant present",
                        "Plant in Dark: Cover container completely with dark cloth or place in dark cupboard",
                        "Plant in Light: Place under grow light or in bright sunlight",
                        "Duration: 4-8 hours (longer = more dramatic results)",
                        "",
                        "PHASE 3 - TEST OXYGEN RESTORATION:",
                        "After treatment period, carefully remove lids one at a time",
                        "Immediately re-light candle and place in container, seal",
                        "Observe whether candle can re-light and how long it burns",
                        "OR: Use oxygen sensor to measure O₂ concentration in each container",
                        "Record observations",
                        "",
                        "ALTERNATIVE QUALITATIVE TEST:",
                        "Use glowing splint test: blow out wooden splint, insert glowing end into container",
                        "If O₂ present: splint re-ignites or glows brighter",
                        "If O₂ absent: splint extinguishes"
                    ],
                    expectedResults: {
                        phase1: {
                            allContainers: "Candles extinguish quickly (O₂ depleted, CO₂ increases)"
                        },
                        phase3: {
                            control: "Candle will NOT re-light or burns very briefly (no O₂ regeneration)",
                            plantInDark: "Candle may burn slightly longer than control, but not much (plant respires, consumes O₂, no photosynthesis)",
                            plantInLight: "Candle WILL re-light and burn significantly longer (O₂ restored by photosynthesis)"
                        }
                    },
                    dataTable: [
                        ["Container", "Candle Burn Time Phase 1 (sec)", "Candle Burn Time Phase 3 (sec)", "O₂ Restored?"],
                        ["Control (No Plant)", "45", "0-5", "No"],
                        ["Plant in Dark", "45", "5-15", "Minimal"],
                        ["Plant in Light", "45", "30-60", "Yes"]
                    ],
                    observations: [
                        "Plant in light restores O₂ to air (candle burns again)",
                        "Plant in dark does NOT restore O₂ (needs light for photosynthesis)",
                        "Control shows no O₂ restoration (no plant present)",
                        "Demonstrates plants produce O₂ only in light (photosynthesis)",
                        "Shows plant respiration (uses O₂) occurs in dark, but net effect without light is O₂ consumption"
                    ],
                    analysis: {
                        whatHappened: [
                            "Phase 1: Candle burning and any respiration consumed O₂, produced CO₂",
                            "Phase 2 (Light): Plant photosynthesis consumed CO₂, produced O₂ (net positive O₂)",
                            "Phase 2 (Dark): Plant respiration consumed O₂, produced CO₂ (no photosynthesis)",
                            "Phase 3: Candle could burn only if O₂ was restored (Plant in Light)"
                        ],
                        quantitative: "O₂ production rate depends on light intensity, plant size, and duration",
                        modernEquation: "6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂ (photosynthesis)"
                    },
                    connectionToHistorical: {
                        priestley: "Demonstrated principle that plants 'restore' air",
                        modernization: "We now quantify O₂ and understand molecular mechanisms",
                        significance: "Foundational experiment showing plant-animal gas exchange interdependence"
                    },
                    results: "Plants in light restored oxygen to depleted air, allowing candles to burn again. Plants in dark did not restore oxygen. This demonstrates that plants produce oxygen only during photosynthesis (light-dependent), confirming Priestley's discovery.",
                    conclusions: [
                        "Plants produce oxygen gas as a byproduct of photosynthesis",
                        "Oxygen production requires light (light-dependent reactions)",
                        "Plants and animals are interdependent (O₂/CO₂ cycling)",
                        "Photosynthesis reverses the effects of combustion and respiration",
                        "This experiment laid foundation for understanding Earth's atmosphere and ecosystems"
                    ],
                    realWorldApplications: [
                        "Understanding oxygen cycle in Earth's atmosphere",
                        "Life support systems for space missions (plants as O₂ source)",
                        "Bioremediation - plants improving air quality",
                        "Aquarium ecosystems - balancing O₂ production and consumption",
                        "Justification for preserving forests (oxygen production)"
                    ],
                    extensions: [
                        "Use oxygen sensor to quantify O₂ concentration changes",
                        "Test different plant species for O₂ production rate",
                        "Vary light intensity and measure effect on O₂ production",
                        "Add CO₂ indicator (e.g., bromothymol blue) to visualize CO₂ consumption",
                        "Compare terrestrial vs. aquatic plants for O₂ production",
                        "Investigate effect of temperature on photosynthetic O₂ production"
                    ],
                    limitations: [
                        "Candle test is qualitative (glowing splint or O₂ sensor more quantitative)",
                        "Small containers may not show dramatic differences",
                        "Plant size and health affect results",
                        "Longer treatment times show clearer results"
                    ],
                    troubleshooting: [
                        "Candle won't burn even with plant in light: Extend treatment time, use more plants, or ensure adequate light",
                        "Plant in dark shows O₂ restoration: Light leak, check dark covering",
                        "All candles extinguish quickly in Phase 3: Extend treatment period or use faster-growing aquatic plants like Elodea"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 2: ENGELMANN'S EXPERIMENT
            // ========================================
            
            engelmann_action_spectrum: {
                name: "Engelmann's Experiment - Action Spectrum of Photosynthesis",
                relatedTopics: ['photosynthetic_pigments', 'light_reactions'],
                category: 'pigment_spectroscopy',
                historicalBackground: {
                    scientist: "Theodor Wilhelm Engelmann",
                    year: "1882",
                    context: "Scientists knew plants needed light but didn't know which wavelengths were most effective",
                    setup: "Used algae (Spirogyra), prism to create spectrum, and aerobic bacteria as O₂ detectors",
                    observation: "Bacteria clustered in red and blue-violet regions of spectrum",
                    conclusion: "Red and blue light most effective for photosynthesis; matches chlorophyll absorption",
                    significance: "First action spectrum; linked light absorption to photosynthetic activity",
                    innovation: "Brilliant use of bacteria as living O₂ sensors (no electronic sensors existed)",
                    quote: "The bacteria serve as extremely sensitive reagents for the smallest traces of oxygen."
                },
                labExperiment: {
                    title: "Modern Action Spectrum: Which Wavelengths Drive Photosynthesis?",
                    hypothesis: "If chlorophyll absorbs red and blue light most strongly, then red and blue light will drive the highest rates of photosynthesis (measured by oxygen production).",
                    purpose: "Determine which wavelengths of light are most effective for photosynthesis by measuring oxygen production under different colored lights",
                    background: {
                        actionSpectrum: "Graph showing photosynthetic rate vs wavelength",
                        absorptionSpectrum: "Graph showing light absorbed by pigments vs wavelength",
                        connection: "Action spectrum should match absorption spectrum of photosynthetic pigments",
                        chlorophyll: "Absorbs red (~660 nm) and blue-violet (~430 nm), reflects green (~550 nm)"
                    },
                    variables: {
                        independent: "Wavelength (color) of light",
                        dependent: "Rate of oxygen production (or CO₂ uptake)",
                        controlled: ["Light intensity", "Temperature", "CO₂ concentration", "Plant species", "Treatment duration"]
                    },
                    materials: [
                        "Aquatic plant (Elodea or Cabomba) - multiple sprigs",
                        "Test tubes or beakers (one per wavelength)",
                        "Colored light filters or LED lights (red, blue, green, white, control/dark)",
                        "Alternatives: colored cellophane, theater gels, or monochromatic LED strips",
                        "Light source (if using filters)",
                        "Sodium bicarbonate (baking soda) - CO₂ source",
                        "Water",
                        "Ruler",
                        "Timer",
                        "Optional: Dissolved oxygen sensor or oxygen probe",
                        "Optional: Inverted graduated cylinder or gas collection tube to collect O₂ bubbles"
                    ],
                    safetyPrecautions: [
                        "Ensure lights do not overheat (especially if using incandescent bulbs)",
                        "Keep electrical equipment away from water",
                        "Use cool LED lights if possible"
                    ],
                    procedure: [
                        "PREPARATION:",
                        "Prepare 0.2% sodium bicarbonate solution (2 g NaHCO₃ per liter H₂O) - provides CO₂",
                        "Select healthy Elodea sprigs of similar size (~10 cm long)",
                        "Cut stems at an angle to maximize surface area",
                        "Place each sprig in test tube filled with bicarbonate solution",
                        "Let plants acclimate under moderate light for 15-30 minutes",
                        "",
                        "SETUP:",
                        "Prepare 5-6 treatment groups:",
                        "  - Red light (use red filter or red LED, ~660 nm)",
                        "  - Blue light (blue filter or blue LED, ~430-450 nm)",
                        "  - Green light (green filter or green LED, ~550 nm)",
                        "  - White light (full spectrum)",
                        "  - Dark (wrapped in aluminum foil - control)",
                        "  - (Optional) Yellow, orange for additional data points",
                        "Ensure all light sources have SAME INTENSITY (measure with light meter if available)",
                        "Place test tubes at equal distance from light sources",
                        "",
                        "MEASUREMENT METHOD 1 - Bubble Counting:",
                        "Count oxygen bubbles released per minute from cut stem",
                        "Observe for 5 minutes, count bubbles in each minute",
                        "Calculate average bubbles/minute for each wavelength",
                        "Repeat with 3 replicate plants per treatment",
                        "",
                        "MEASUREMENT METHOD 2 - Gas Collection:",
                        "Invert graduated cylinder or gas tube over plant in water",
                        "Collect oxygen gas for 30-60 minutes",
                        "Measure volume of gas collected (mL O₂)",
                        "Calculate rate: mL O₂ per hour",
                        "",
                        "MEASUREMENT METHOD 3 - Dissolved Oxygen:",
                        "Use dissolved oxygen sensor/probe",
                        "Measure initial [O₂] in solution",
                        "After 30-60 minutes under light, measure final [O₂]",
                        "Calculate rate: Δ[O₂] / time",
                        "",
                        "DATA COLLECTION:",
                        "Record photosynthetic rate for each wavelength",
                        "Calculate mean and standard deviation (if replicates used)",
                        "Plot action spectrum: rate vs wavelength"
                    ],
                    expectedResults: {
                        redLight: "High photosynthetic rate (many bubbles, high O₂)",
                        blueLight: "High photosynthetic rate (similar to red)",
                        greenLight: "LOW photosynthetic rate (green light not absorbed well)",
                        whiteLight: "High rate (contains red and blue)",
                        dark: "No photosynthesis (no O₂ production, may show slight O₂ consumption from respiration)"
                    },
                    dataTable: [
                        ["Light Color", "Wavelength (nm)", "Average Bubbles/min", "Relative Photosynthetic Rate"],
                        ["Red", "~660", "15-20", "High"],
                        ["Blue", "~450", "14-18", "High"],
                        ["Green", "~550", "2-5", "Very Low"],
                        ["White", "~400-700", "18-22", "Highest"],
                        ["Dark (Control)", "0", "0", "Zero (or negative)"]
                    ],
                    observations: [
                        "Red and blue light produce most oxygen (highest photosynthesis)",
                        "Green light produces little oxygen (not absorbed by chlorophyll)",
                        "White light (containing red and blue) also drives high photosynthesis",
                        "Dark treatment shows no O₂ production (photosynthesis requires light)",
                        "Action spectrum matches chlorophyll absorption spectrum"
                    ],
                    analysis: {
                        actionSpectrum: "Graph shows peaks at red and blue wavelengths",
                        explanation: [
                            "Chlorophyll a absorbs red (~660 nm) and blue (~430 nm) light most strongly",
                            "Accessory pigments (chlorophyll b, carotenoids) also absorb blue",
                            "Absorbed light energy drives light reactions → ATP and NADPH → photosynthesis",
                            "Green light (~550 nm) reflected/transmitted → not absorbed → low photosynthesis",
                            "This is why plants appear green (reflect green, absorb red/blue)"
                        ],
                        quantitative: "Rate proportional to amount of light absorbed by pigments",
                        modernTools: "Engelmann used bacteria as O₂ sensors; we use bubble counting, O₂ sensors, or fluorescence"
                    },
                    connectionToHistorical: {
                        engelmann: "Used Spirogyra algae, prism for spectrum, aerobic bacteria as O₂ detectors",
                        observation: "Bacteria (attracted to O₂) clustered in red and blue-violet regions",
                        modernization: "We use controlled LEDs and quantitative O₂ measurement",
                        significance: "First demonstration that action spectrum matches absorption spectrum"
                    },
                    results: "Red and blue light drove the highest rates of photosynthesis (most oxygen produced). Green light was least effective. This matches the absorption spectrum of chlorophyll, confirming that absorbed light wavelengths drive photosynthesis.",
                    conclusions: [
                        "Photosynthetic rate is wavelength-dependent",
                        "Red and blue light most effective (absorbed by chlorophyll)",
                        "Green light least effective (reflected, not absorbed)",
                        "Action spectrum matches chlorophyll absorption spectrum",
                        "Different wavelengths have different photosynthetic effectiveness",
                        "Engelmann's bacterial method was remarkably accurate"
                    ],
                    realWorldApplications: [
                        "Optimizing grow lights for indoor farming (use red and blue LEDs)",
                        "Designing efficient greenhouse lighting",
                        "Understanding why plants are green (reflect green light)",
                        "Developing energy-efficient horticultural lighting",
                        "Predicting photosynthesis at different water depths (light penetration varies by wavelength)"
                    ],
                    extensions: [
                        "Test additional wavelengths (orange, yellow) for complete action spectrum",
                        "Compare C3 vs C4 plants (similar results expected)",
                        "Test sun-adapted vs shade-adapted plants (different light saturation points)",
                        "Measure chlorophyll absorption spectrum with spectrophotometer and compare",
                        "Investigate effect of light intensity at optimal wavelength (red or blue)",
                        "Use photoperiod variation (different day lengths) at optimal wavelengths"
                    ],
                    limitations: [
                        "Difficult to ensure equal light intensity across all colors (especially with filters)",
                        "Bubble counting is semi-quantitative",
                        "Individual plant variation",
                        "Temperature may vary under different lights (use LEDs to minimize)"
                    ],
                    troubleshooting: [
                        "Few or no bubbles: Ensure fresh cut on stem, increase light intensity, add more sodium bicarbonate (CO₂)",
                        "Inconsistent results: Use multiple replicates, ensure equal light intensity",
                        "Plants not healthy: Use fresh, actively growing plants, acclimate before experiment"
                    ]
                }
            },

// ========================================
            // EXPERIMENT 3: HILL REACTION
            // ========================================
            
            hill_reaction_oxygen_evolution: {
                name: "Hill Reaction - Light-Dependent Oxygen Evolution from Isolated Chloroplasts",
                relatedTopics: ['light_reactions', 'chloroplast_structure'],
                category: 'biochemistry_mechanistic',
                historicalBackground: {
                    scientist: "Robert Hill",
                    year: "1937",
                    context: "Before Hill, it was unclear whether O₂ came from CO₂ or H₂O during photosynthesis. Some thought CO₂ was split, releasing O₂.",
                    experiment: "Isolated chloroplasts from leaves, illuminated them with artificial electron acceptors (no CO₂ present)",
                    observation: "O₂ evolved in light even WITHOUT CO₂; electron acceptors were reduced",
                    conclusion: "Water is the source of O₂; light reactions split water and can occur independently of CO₂ fixation (dark reactions)",
                    significance: "Separated light reactions from carbon fixation; proved O₂ comes from H₂O not CO₂",
                    hillReagent: "Originally used potassium ferricyanide as artificial electron acceptor; DCPIP commonly used now",
                    nobelConnection: "Hill's work paved way for understanding Z-scheme and photosystems",
                    quote: "The illumination of isolated chloroplasts in the presence of a suitable hydrogen acceptor results in the evolution of oxygen."
                },
                labExperiment: {
                    title: "Hill Reaction: Demonstrating Light-Dependent Water Splitting by Isolated Chloroplasts",
                    hypothesis: "If isolated chloroplasts can perform light reactions independently, then they will produce oxygen and reduce an artificial electron acceptor (DCPIP) when illuminated, even in the absence of CO₂.",
                    purpose: "Demonstrate that isolated chloroplasts can split water and release oxygen in light using an artificial electron acceptor (DCPIP), showing light reactions are separate from carbon fixation",
                    background: {
                        hillReaction: "2H₂O + 2A → O₂ + 2AH₂ (A = electron acceptor)",
                        normal: "In vivo, NADP⁺ is natural acceptor; in vitro, DCPIP or ferricyanide used",
                        DCPIP: "DCPIP (2,6-dichlorophenolindophenol) - blue when oxidized, colorless when reduced",
                        colorChange: "Blue DCPIP → colorless as it accepts electrons from photosystem II",
                        oxygenSource: "Experiments with H₂¹⁸O (heavy isotope) confirmed O₂ comes from water, not CO₂"
                    },
                    variables: {
                        independent: "Light vs dark treatment",
                        dependent: "Color change of DCPIP (blue → colorless) and/or oxygen production",
                        controlled: ["Chloroplast concentration", "DCPIP concentration", "Temperature", "pH", "Treatment duration"]
                    },
                    materials: [
                        "Fresh spinach leaves or other leafy greens (100-200 g)",
                        "Blender",
                        "Ice-cold isolation buffer: 0.4 M sucrose, 50 mM Tris-HCl pH 7.5, 10 mM NaCl",
                        "Cheesecloth or muslin cloth (for filtering)",
                        "Centrifuge (optional, for purer chloroplast prep)",
                        "DCPIP solution (0.1 mM in water or buffer)",
                        "Test tubes or cuvettes",
                        "Bright light source (halogen lamp or strong LED)",
                        "Ice bath",
                        "Spectrophotometer (optional, to quantify DCPIP absorbance at 600 nm)",
                        "Timer",
                        "Aluminum foil (for dark control)"
                    ],
                    safetyPrecautions: [
                        "Wear gloves and lab coat (DCPIP can stain)",
                        "Keep chloroplast preparation cold at all times (on ice)",
                        "Work quickly to maintain chloroplast integrity",
                        "Use fresh leaves for best results"
                    ],
                    procedure: [
                        "CHLOROPLAST ISOLATION:",
                        "Remove tough midribs from spinach leaves",
                        "Tear leaves into small pieces (50-100 g)",
                        "Place in blender with 200 mL ice-cold isolation buffer",
                        "Blend on low speed for 3-5 seconds (SHORT bursts to avoid damaging chloroplasts)",
                        "DO NOT over-blend (destroys chloroplasts)",
                        "Filter homogenate through 4 layers of cheesecloth into beaker on ice",
                        "Squeeze gently to extract liquid",
                        "Resulting green filtrate contains chloroplasts",
                        "OPTIONAL: Centrifuge at 200×g for 5 minutes to pellet intact chloroplasts, discard supernatant and cell debris",
                        "Resuspend pellet in fresh cold buffer",
                        "Keep on ice until use (use within 1-2 hours)",
                        "",
                        "HILL REACTION SETUP:",
                        "Prepare 4 test tubes:",
                        "  Tube 1: Chloroplasts + DCPIP + LIGHT",
                        "  Tube 2: Chloroplasts + DCPIP + DARK (wrap in foil)",
                        "  Tube 3: Boiled chloroplasts + DCPIP + LIGHT (negative control)",
                        "  Tube 4: DCPIP only + LIGHT (control for photobleaching)",
                        "",
                        "To each tube add:",
                        "  3 mL chloroplast suspension",
                        "  0.5 mL DCPIP solution (final conc. ~0.01 mM)",
                        "Mix gently, note initial blue color",
                        "",
                        "For Tube 3: Boil chloroplast suspension for 5 min before adding DCPIP (denatures proteins)",
                        "",
                        "ILLUMINATION:",
                        "Place Tubes 1, 3, 4 under bright light (10-15 cm from light source)",
                        "Keep all tubes in ice bath or cold water to prevent overheating",
                        "Wrap Tube 2 completely in aluminum foil (dark control)",
                        "Start timer",
                        "",
                        "OBSERVATION:",
                        "Observe color change every 2-5 minutes for 20-30 minutes",
                        "Record observations: blue color fading indicates DCPIP reduction",
                        "OPTIONAL: Measure absorbance at 600 nm every 5 minutes (DCPIP blue color)",
                        "Plot absorbance vs time for quantitative analysis",
                        "",
                        "EXPECTED TIMELINE:",
                        "0 min: All tubes blue",
                        "5-10 min: Tube 1 (chloroplasts + light) starts to fade",
                        "15-20 min: Tube 1 significantly lighter or colorless",
                        "20-30 min: Tube 1 colorless or nearly so; other tubes remain blue"
                    ],
                    expectedResults: {
                        tube1_Light: "Blue color FADES rapidly (DCPIP reduced by electrons from water splitting)",
                        tube2_Dark: "Remains BLUE (no light, no water splitting, DCPIP not reduced)",
                        tube3_BoiledLight: "Remains BLUE (denatured chloroplasts cannot function)",
                        tube4_DCPIPonlyLight: "Remains BLUE (no chloroplasts to provide electrons)"
                    },
                    dataTable: [
                        ["Tube", "Treatment", "0 min", "5 min", "10 min", "20 min", "Interpretation"],
                        ["1", "Chloroplasts + DCPIP + Light", "Blue", "Light blue", "Very light", "Colorless", "DCPIP reduced"],
                        ["2", "Chloroplasts + DCPIP + Dark", "Blue", "Blue", "Blue", "Blue", "No reduction"],
                        ["3", "Boiled + DCPIP + Light", "Blue", "Blue", "Blue", "Blue", "No reduction"],
                        ["4", "DCPIP only + Light", "Blue", "Blue", "Blue", "Blue", "No reduction"]
                    ],
                    observations: [
                        "Chloroplasts in light reduce DCPIP (blue → colorless)",
                        "Dark control shows NO color change (light required)",
                        "Boiled chloroplasts show NO color change (functional chloroplasts required)",
                        "DCPIP alone shows NO color change (chloroplasts required)",
                        "Demonstrates light-dependent reduction (Hill reaction)"
                    ],
                    analysis: {
                        reaction: "2H₂O + 2DCPIP(ox) --light--> O₂ + 2DCPIP(red) + 4H⁺",
                        process: [
                            "Light absorbed by photosystem II in thylakoid membranes",
                            "Water oxidized: 2H₂O → O₂ + 4H⁺ + 4e⁻",
                            "Electrons pass through electron transport chain",
                            "DCPIP accepts electrons (instead of NADP⁺): DCPIP(ox) + 2H⁺ + 2e⁻ → DCPIP(red)",
                            "Blue color (oxidized DCPIP) disappears as DCPIP is reduced"
                        ],
                        significance: [
                            "Water is source of electrons (and oxygen) in photosynthesis",
                            "Light reactions can occur WITHOUT CO₂ or Calvin cycle",
                            "Confirms separation of light and dark reactions"
                        ],
                        quantitative: "Rate of DCPIP reduction proportional to photosystem II activity"
                    },
                    connectionToHistorical: {
                        hill: "First demonstrated O₂ evolution from isolated chloroplasts with artificial acceptor",
                        original: "Used potassium ferricyanide; observed O₂ evolution without CO₂",
                        modernization: "DCPIP provides visual color change (easier to observe than ferricyanide)",
                        isotopes: "Later experiments with H₂¹⁸O definitively proved O₂ comes from water"
                    },
                    results: "Isolated chloroplasts in light reduced DCPIP (blue to colorless), demonstrating electron flow from water splitting. Dark control and boiled chloroplasts showed no DCPIP reduction. This confirms that functional chloroplasts split water in light, releasing electrons that can reduce artificial acceptors, proving the Hill reaction.",
                    conclusions: [
                        "Isolated chloroplasts can perform light-dependent reactions independently",
                        "Water is the source of electrons (and O₂) in photosynthesis",
                        "Light reactions do NOT require CO₂ or Calvin cycle",
                        "Photosystem II splits water and generates reducing power",
                        "Hill reaction demonstrates separation of light and dark reactions",
                        "Modern understanding: PSII oxidizes water, electrons reduce NADP⁺ (or DCPIP in vitro)"
                    ],
                    realWorldApplications: [
                        "Understanding photosynthetic electron transport",
                        "Studying herbicide modes of action (many inhibit electron transport)",
                        "Developing artificial photosynthesis systems",
                        "Chloroplast biogenesis research",
                        "Screening plants for photosynthetic efficiency"
                    ],
                    extensions: [
                        "Measure O₂ production directly with oxygen electrode",
                        "Test effect of light intensity on rate of DCPIP reduction",
                        "Add herbicides (e.g., DCMU/diuron) to inhibit electron transport → no DCPIP reduction",
                        "Compare chloroplasts from different plant species",
                        "Fractionate chloroplasts (grana vs stroma lamellae) and test separately",
                        "Use fluorescence to measure photosystem II activity"
                    ],
                    limitations: [
                        "Isolated chloroplasts are fragile, activity declines quickly",
                        "Chloroplast preparation quality variable (technique-dependent)",
                        "Color change qualitative (spectrophotometer improves quantification)",
                        "Must work quickly and keep samples cold"
                    ],
                    troubleshooting: [
                        "No color change in Tube 1: Chloroplasts damaged (over-blending, not kept cold), use fresh leaves and work quickly",
                        "All tubes lose color: DCPIP may be photosensitive (keep in dark until use), or contamination",
                        "Very slow color change: Increase light intensity, use more chloroplasts, ensure fresh preparation"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 4: CHROMATOGRAPHY OF PIGMENTS
            // ========================================
            
            paper_chromatography_pigments: {
                name: "Paper Chromatography of Photosynthetic Pigments - Separating Chlorophylls and Carotenoids",
                relatedTopics: ['photosynthetic_pigments'],
                category: 'biochemistry_analytical',
                historicalBackground: {
                    technique: "Chromatography",
                    inventor: "Mikhail Tsvet (1906)",
                    context: "Tsvet developed chromatography to separate plant pigments, literally meaning 'color writing' in Greek",
                    originalUse: "Separated chlorophyll a, chlorophyll b, and carotenoids from plant extracts",
                    significance: "Revealed multiple pigments work together in photosynthesis; foundational technique in biochemistry",
                    modernImpact: "Chromatography now essential in chemistry, forensics, drug testing, and molecular biology",
                    quote: "Like light rays in the spectrum, the different components of a pigment mixture are resolved on the calcium carbonate column and then can be measured."
                },
                labExperiment: {
                    title: "Separating and Identifying Photosynthetic Pigments by Paper Chromatography",
                    hypothesis: "If leaves contain multiple photosynthetic pigments with different polarities, then chromatography will separate these pigments into distinct bands, with less polar pigments (carotenoids) traveling farther than more polar pigments (chlorophylls).",
                    purpose: "Extract and separate photosynthetic pigments from leaves using paper chromatography, identifying chlorophyll a, chlorophyll b, and carotenoids based on their Rf values and colors",
                    background: {
                        chromatography: "Technique separating mixtures based on differential movement in mobile vs stationary phase",
                        paperChromatography: "Paper = stationary phase; solvent = mobile phase",
                        polarity: "Polar pigments stick to polar paper; nonpolar pigments move with nonpolar solvent",
                        Rf: "Retention factor = distance moved by pigment / distance moved by solvent front",
                        pigments: "Chlorophyll a (blue-green), chlorophyll b (yellow-green), carotenes (orange), xanthophylls (yellow)"
                    },
                    variables: {
                        independent: "Type of leaf (or solvent used)",
                        dependent: "Rf values and colors of separated pigments",
                        controlled: ["Solvent composition", "Paper type", "Temperature", "Development time"]
                    },
                    materials: [
                        "Fresh green leaves (spinach works well; also try fall leaves for variation)",
                        "Mortar and pestle",
                        "Acetone or 9:1 petroleum ether:acetone (solvent)",
                        "Alternative solvents: ethanol, chromatography solvent mixture",
                        "Chromatography paper (Whatman #1 or similar) cut into strips ~3 cm × 15-20 cm",
                        "Pencil (NOT pen - ink will run)",
                        "Ruler",
                        "Capillary tube or toothpick",
                        "Test tube or tall narrow beaker (tall enough for paper strip)",
                        "Cork or stopper to hold paper strip",
                        "Aluminum foil or plastic wrap",
                        "Sand (optional, helps grinding)",
                        "Coin or spoon (to grind leaf on paper)",
                        "Fume hood or well-ventilated area"
                    ],
                    safetyPrecautions: [
                        "Acetone and petroleum ether are flammable - no flames nearby",
                        "Use in well-ventilated area or fume hood",
                        "Wear gloves and safety goggles",
                        "Avoid breathing vapors",
                        "Dispose of solvents properly (not down drain)",
                        "Avoid skin contact with acetone"
                    ],
                    procedure: [
                        "PREPARATION OF CHROMATOGRAPHY STRIP:",
                        "Cut chromatography paper into strip ~3 cm wide × 15-20 cm long",
                        "Draw a faint pencil line across strip, 2-3 cm from bottom (origin line)",
                        "DO NOT use pen (ink will contaminate chromatogram)",
                        "",
                        "PIGMENT EXTRACTION METHOD 1 - Direct Application:",
                        "Place a fresh green leaf on the origin line",
                        "Use coin edge or spoon to firmly press and rub leaf on the line",
                        "This crushes cells and deposits pigments on paper",
                        "Repeat with fresh leaf sections 10-15 times to build up concentrated line of pigment",
                        "Let dry briefly between applications",
                        "Final pigment line should be dark green and concentrated",
                        "",
                        "PIGMENT EXTRACTION METHOD 2 - Solvent Extraction (Alternative):",
                        "Tear 5-10 g leaves into small pieces, place in mortar",
                        "Add small amount of sand (abrasive) and 10 mL acetone",
                        "Grind thoroughly until dark green solution forms",
                        "Using capillary tube or toothpick, apply tiny spots of extract to origin line",
                        "Let dry, reapply several times to concentrate pigment",
                        "Keep spot small and concentrated (< 5 mm wide)",
                        "",
                        "CHROMATOGRAPHY SETUP:",
                        "Pour ~1 cm depth of solvent into test tube or beaker",
                        "Solvent level must be BELOW origin line (pigments would dissolve into solvent directly)",
                        "Attach paper strip to cork/stopper or fold top and clamp",
                        "Lower paper strip into tube so bottom edge touches solvent",
                        "Origin line should be ABOVE solvent level",
                        "Cover top with foil or plastic wrap (reduce evaporation)",
                        "",
                        "DEVELOPMENT:",
                        "Allow solvent to rise up paper by capillary action",
                        "As solvent front moves, pigments separate",
                        "Stop when solvent front reaches ~1-2 cm from top (15-30 min)",
                        "Immediately mark solvent front with pencil (before it evaporates)",
                        "Remove strip and let dry",
                        "",
                        "ANALYSIS:",
                        "Identify pigment bands by color:",
                        "  Top (traveled farthest): Carotene (orange)",
                        "  Next: Pheophytin (gray, artifact) or Xanthophyll (yellow)",
                        "  Middle: Chlorophyll a (blue-green)",
                        "  Bottom (closest to origin): Chlorophyll b (yellow-green)",
                        "Measure distance from origin to center of each pigment band",
                        "Measure distance from origin to solvent front",
                        "Calculate Rf for each pigment: Rf = (distance moved by pigment) / (distance moved by solvent)"
                    ],
                    expectedResults: {
                        order: "Fastest (top) to slowest (bottom): Carotene > Xanthophyll > Chlorophyll a > Chlorophyll b",
                        carotene: {
                            color: "Orange",
                            Rf: "~0.95 (most nonpolar, least retained)",
                            polarity: "Nonpolar"
                        },
                        xanthophyll: {
                            color: "Yellow",
                            Rf: "~0.70",
                            polarity: "Slightly polar (has -OH groups)"
                        },
                        chlorophyllA: {
                            color: "Blue-green",
                            Rf: "~0.50",
                            polarity: "Moderately polar"
                        },
                        chlorophyllB: {
                            color: "Yellow-green",
                            Rf: "~0.40 (most polar, most retained)",
                            polarity: "More polar than chlorophyll a"
                        }
                    },
                    dataTable: [
                        ["Pigment", "Color", "Distance Traveled (cm)", "Solvent Front (cm)", "Rf Value", "Polarity"],
                        ["Carotene", "Orange", "14.2", "15.0", "0.95", "Nonpolar"],
                        ["Xanthophyll", "Yellow", "10.5", "15.0", "0.70", "Slightly polar"],
                        ["Chlorophyll a", "Blue-green", "7.5", "15.0", "0.50", "Moderate"],
                        ["Chlorophyll b", "Yellow-green", "6.0", "15.0", "0.40", "More polar"]
                    ],
                    observations: [
                        "Multiple pigment bands visible after chromatography",
                        "Carotene (orange) travels farthest (most nonpolar)",
                        "Chlorophyll b (yellow-green) travels least (most polar)",
                        "Pigments separate because of different polarities",
                        "Leaf appears green but contains multiple pigments"
                    ],
                    analysis: {
                        principle: [
                            "Chromatography separates based on polarity",
                            "Polar pigments (chlorophyll b) attracted to polar paper (cellulose with -OH groups) → move slowly",
                            "Nonpolar pigments (carotene) not attracted to paper → move quickly with solvent",
                            "Intermediate polarity → intermediate Rf"
                        ],
                        Rf: "Each pigment has characteristic Rf value under standard conditions",
                        identification: "Pigments identified by color and Rf value",
                        polarityOrder: "Chlorophyll b (most polar) > Chlorophyll a > Xanthophylls > Carotenes (least polar)",
                        structuralBasis: [
                            "Carotenes: Pure hydrocarbon (nonpolar)",
                            "Xanthophylls: Contain O atoms (-OH groups) → slightly polar",
                            "Chlorophyll a: Porphyrin ring with Mg²⁺, partial charges",
                            "Chlorophyll b: Has -CHO instead of -CH₃ → more polar than chlorophyll a"
                        ]
                    },
                    connectionToHistorical: {
                        tsvet: "Mikhail Tsvet first separated plant pigments using column chromatography (1906)",
                        innovation: "Showed leaves contain multiple pigments, not just one 'chlorophyll'",
                        modernization: "Paper chromatography (1940s) simplified Tsvet's column method; TLC, HPLC, GC further advanced field"
                    },
                    results: "Chromatography separated leaf pigments into distinct bands: carotene (orange, Rf ~0.95), xanthophyll (yellow, Rf ~0.70), chlorophyll a (blue-green, Rf ~0.50), and chlorophyll b (yellow-green, Rf ~0.40). This demonstrates that leaves contain multiple photosynthetic pigments with different polarities.",
                    conclusions: [
                        "Leaves contain multiple photosynthetic pigments (not just one)",
                        "Pigments can be separated based on polarity using chromatography",
                        "Less polar pigments (carotenes) move farther than more polar pigments (chlorophylls)",
                        "Chlorophyll a and b have slightly different polarities",
                        "Carotenoids (orange/yellow) present but usually masked by green chlorophyll",
                        "Rf values can identify pigments"
                    ],
                    realWorldApplications: [
                        "Understanding why leaves change color in fall (chlorophyll breaks down, carotenoids visible)",
                        "Quality control in food industry (pigment analysis)",
                        "Forensics - ink and dye analysis",
                        "Drug testing - separating compounds",
                        "Detecting plant stress or disease through pigment changes",
                        "Developing synthetic pigments for solar cells"
                    ],
                    extensions: [
                        "Compare pigments from different plant species",
                        "Extract from fall leaves to see more carotenoids",
                        "Try different solvents (ethanol, hexane) and compare separation",
                        "Use thin-layer chromatography (TLC) for better resolution",
                        "Measure absorption spectra of each isolated pigment band",
                        "Quantify pigment amounts using spectrophotometry after elution",
                        "Test effect of light exposure on pigment degradation over time"
                    ],
                    limitations: [
                        "Rf values vary with temperature, solvent purity, paper type",
                        "Some pigments may degrade during extraction or development",
                        "Paper chromatography has limited resolution (TLC or HPLC better)",
                        "Chlorophyll can convert to pheophytin (gray) if exposed to acid"
                    ],
                    troubleshooting: [
                        "Pigments don't separate: Solvent too polar or origin line too high (touched solvent)",
                        "Smeared bands: Applied too much pigment, let dry between applications",
                        "No carotenoids visible: Increase pigment concentration on origin line",
                        "Gray band appears: Pheophytin (degraded chlorophyll due to acid); use fresh leaves"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 5: STARCH TEST IN LEAVES
            // ========================================
            
            starch_test_photosynthesis: {
                name: "Starch Test - Demonstrating Photosynthesis Produces Glucose (Stored as Starch)",
                relatedTopics: ['overview', 'calvin_cycle', 'leaf_anatomy'],
                category: 'biochemical_product_analysis',
                historicalBackground: {
                    scientist: "Julius von Sachs",
                    year: "1862",
                    experiment: "Demonstrated that starch appears in leaves only in light, proving photosynthesis produces carbohydrates",
                    method: "Used iodine solution to detect starch in leaves after light exposure",
                    significance: "First direct evidence that photosynthesis produces organic compounds, specifically carbohydrates",
                    context: "Before Sachs, the products of photosynthesis were unknown",
                    innovation: "Simple yet definitive test showing photosynthesis creates energy-rich molecules",
                    quote: "The deposition of starch in chlorophyll-containing cells takes place only in light.",
                    impact: "Confirmed plants are autotrophs, producing their own food from inorganic materials"
                },
                labExperiment: {
                    title: "Starch Test: Proving Photosynthesis Produces Glucose (Stored as Starch)",
                    hypothesis: "If photosynthesis produces glucose (which plants store as starch), then leaves exposed to light will test positive for starch (blue-black with iodine), while leaves kept in dark will test negative.",
                    purpose: "Demonstrate that photosynthesis produces carbohydrates (glucose) which plants store as starch in leaves, and show that this only occurs in light",
                    background: {
                        photosynthesisProduct: "Glucose (C₆H₁₂O₆) produced in Calvin cycle",
                        storage: "Plants convert glucose to starch for temporary storage in chloroplasts and amyloplasts",
                        iodineTest: "Iodine (I₂/KI) reacts with starch → blue-black complex",
                        destarching: "Leaves must be destarched (kept in dark 24-48h) before experiment to remove existing starch"
                    },
                    variables: {
                        independent: "Light exposure (light vs dark)",
                        dependent: "Presence of starch (iodine test result)",
                        controlled: ["Leaf type", "Destarching time", "Light exposure duration", "Temperature"]
                    },
                    materials: [
                        "Potted plant (geranium works well; variegated leaf plant even better)",
                        "Aluminum foil",
                        "Paper clips or tape",
                        "Beaker or pot",
                        "Hot plate or stove (for boiling water)",
                        "95% Ethanol (or isopropanol)",
                        "Petri dishes or shallow dishes",
                        "Iodine solution (I₂/KI) or Lugol's iodine",
                        "Forceps or tongs",
                        "Water",
                        "White paper or tile (for viewing results)"
                    ],
                    safetyPrecautions: [
                        "Ethanol is flammable - keep away from flames; heat using water bath, not direct flame",
                        "Boiling ethanol gives off flammable vapors - use in well-ventilated area or fume hood",
                        "Use boiling water to heat ethanol (never heat ethanol directly)",
                        "Wear gloves and safety goggles",
                        "Iodine can stain skin and clothing"
                    ],
                    procedure: [
                        "DAY 1 - DESTARCHING:",
                        "Place potted plant in complete darkness for 24-48 hours",
                        "This allows plant to use up stored starch in leaves (respiration)",
                        "Ensures starting point is starch-free",
                        "",
                        "DAY 2 (OR 3) - SETUP:",
                        "Remove plant from dark",
                        "Select a healthy leaf still on plant",
                        "Cover part of leaf with aluminum foil (creating dark region)",
                        "Secure foil with paper clip (don't damage leaf)",
                        "Leave other part of leaf exposed to light",
                        "",
                        "OPTIONAL - VARIEGATED LEAF:",
                        "If using variegated plant (e.g., coleus with white/green parts)",
                        "No need for foil - white areas lack chlorophyll (natural control)",
                        "",
                        "LIGHT EXPOSURE:",
                        "Place plant in bright sunlight or under grow light for 4-8 hours",
                        "This allows photosynthesis to occur and starch to accumulate",
                        "",
                        "STARCH TESTING:",
                        "After light exposure, remove test leaf from plant",
                        "Remove aluminum foil (if used), note which area was covered",
                        "",
                        "STEP 1 - Kill Cells and Remove Chlorophyll:",
                        "Drop leaf into beaker of boiling water for 1-2 minutes",
                        "This kills cells, makes leaf permeable, and begins to extract chlorophyll",
                        "Leaf should turn dull green/brown",
                        "",
                        "STEP 2 - Extract Chlorophyll (CRITICAL STEP):",
                        "Set up double boiler: small beaker of ethanol in larger beaker of boiling water",
                        "NEVER heat ethanol directly over flame (fire hazard)",
                        "Transfer leaf from water to hot ethanol",
                        "Leave until chlorophyll is completely extracted (leaf turns white/pale yellow)",
                        "This may take 10-30 minutes; change ethanol if it becomes too green",
                        "Ethanol will turn dark green as it extracts chlorophyll",
                        "Leaf will become brittle and pale",
                        "",
                        "STEP 3 - Soften Leaf:",
                        "Remove leaf from ethanol with forceps",
                        "Rinse in warm water to soften (ethanol makes it brittle)",
                        "",
                        "STEP 4 - Iodine Test for Starch:",
                        "Spread leaf flat in petri dish or on white paper",
                        "Cover leaf with iodine solution",
                        "Wait 5-10 minutes for color to develop",
                        "",
                        "OBSERVATION:",
                        "Areas that were exposed to light: Turn BLUE-BLACK (starch present)",
                        "Areas that were covered (dark): Remain BROWN/YELLOW (no starch)",
                        "For variegated leaf: Green areas turn blue-black; white areas remain brown",
                        "Photograph or sketch results"
                    ],
                    expectedResults: {
                        exposedToLight: "Blue-black color (starch present from photosynthesis)",
                        keptInDark: "Brown/yellow color (no starch produced, no photosynthesis)",
                        variegatedGreen: "Blue-black (chlorophyll present, photosynthesis occurred)",
                        variegatedWhite: "Brown/yellow (no chlorophyll, no photosynthesis)"
                    },
                    dataTable: [
                        ["Leaf Area", "Light Exposure", "Chlorophyll Present", "Iodine Color", "Starch Present?", "Interpretation"],
                        ["Exposed area", "Yes", "Yes", "Blue-black", "Yes", "Photosynthesis occurred"],
                        ["Foil-covered area", "No", "Yes", "Brown/yellow", "No", "No photosynthesis (no light)"],
                        ["Variegated green", "Yes", "Yes", "Blue-black", "Yes", "Photosynthesis occurred"],
                        ["Variegated white", "Yes", "No", "Brown/yellow", "No", "No photosynthesis (no chlorophyll)"]
                    ],
                    observations: [
                        "Starch present ONLY in areas that were: (1) Exposed to light AND (2) Contained chlorophyll",
                        "Foil-covered areas show NO starch (no light)",
                        "White areas of variegated leaves show NO starch (no chlorophyll)",
                        "Green areas exposed to light show starch accumulation",
                        "Demonstrates both light and chlorophyll required for photosynthesis"
                    ],
                    analysis: {
                        biochemistry: [
                            "Calvin cycle produces G3P, which is converted to glucose",
                            "Glucose polymerized to starch for storage (amylose and amylopectin)",
                            "Starch stored in chloroplasts during day, exported at night",
                            "Iodine forms complex with helical amylose → blue-black color"
                        ],
                        requirements: [
                            "Light required: Dark-covered areas have no starch",
                            "Chlorophyll required: White (non-chlorophyll) areas have no starch",
                            "Both light AND chlorophyll needed for photosynthesis"
                        ],
                        destarching: "Essential to ensure baseline is zero starch; otherwise, existing starch would give false positive",
                        starchVsGlucose: "Plants store glucose as starch (easier to detect and doesn't affect osmotic balance)"
                    },
                    connectionToHistorical: {
                        sachs: "Julius von Sachs (1862) first demonstrated starch formation in leaves in light",
                        originalMethod: "Same basic method still used today (destarch, illuminate, test with iodine)",
                        significance: "First direct chemical evidence that photosynthesis produces organic compounds",
                        legacy: "Standard classroom demonstration for over 150 years"
                    },
                    results: "Leaf areas exposed to light and containing chlorophyll tested positive for starch (blue-black with iodine). Areas kept in dark or lacking chlorophyll tested negative. This proves photosynthesis produces glucose (stored as starch) and requires both light and chlorophyll.",
                    conclusions: [
                        "Photosynthesis produces carbohydrates (glucose, stored as starch)",
                        "Starch production requires light (photosynthesis is light-dependent)",
                        "Starch production requires chlorophyll (photosynthesis requires pigments)",
                        "Chloroplasts are sites of starch synthesis during photosynthesis",
                        "Plants are autotrophs - produce their own food from CO₂ and H₂O",
                        "Variegated leaves demonstrate chlorophyll requirement without foil"
                    ],
                    realWorldApplications: [
                        "Understanding plant growth and productivity",
                        "Optimizing crop yields (maximize photosynthesis → starch/sugar production)",
                        "Diagnosing plant stress (reduced photosynthesis → less starch)",
                        "Timing harvest (starch content indicates energy status)",
                        "Plant breeding - selecting high-starch varieties",
                        "Educational demonstration of photosynthesis products"
                    ],
                    extensions: [
                        "Test leaves at different times of day (morning vs evening) - starch accumulates during day",
                        "Compare sun leaves vs shade leaves (different starch levels)",
                        "Test effect of CO₂ enrichment on starch production",
                        "Quantify starch using enzymatic assay or spectrophotometry",
                        "Examine chloroplasts under microscope before and after illumination (starch grains visible)",
                        "Use radioactive ¹⁴CO₂ to trace carbon into starch (advanced)"
                    ],
                    limitations: [
                        "Starch is storage form; immediate product is glucose (harder to detect)",
                        "Iodine test is qualitative (not quantitative)",
                        "Variegated leaves give clearest results (built-in control)",
                        "Destarching essential but time-consuming"
                    ],
                    troubleshooting: [
                        "All leaf areas blue-black: Destarching insufficient, keep in dark longer",
                        "No blue-black color anywhere: Leaf damaged or not enough light exposure time",
                        "Can't see color change: Chlorophyll not fully removed, extend ethanol extraction time",
                        "Leaf disintegrates: Too much boiling, reduce time or handle more gently",
                        "Iodine not penetrating: Leaf not softened properly after ethanol, rinse in warm water longer"
                    ]
                }
            }
        };

        // Link experiments to topics
        this.linkExperimentsToTopics();
    }

    linkExperimentsToTopics() {
        Object.entries(this.photosynthesisExperiments).forEach(([expId, experiment]) => {
            experiment.relatedTopics.forEach(topicId => {
                if (this.photosynthesisTopics[topicId]) {
                    if (!this.photosynthesisTopics[topicId].relatedExperiments) {
                        this.photosynthesisTopics[topicId].relatedExperiments = [];
                    }
                    this.photosynthesisTopics[topicId].relatedExperiments.push({
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
            overview: {
                'General Concepts': [
                    'Thinking plants only photosynthesize (they also respire 24/7)',
                    'Believing plants breathe in CO₂ and breathe out O₂ (gas exchange is more complex)',
                    'Confusing photosynthesis with respiration (opposite processes but both occur in plants)',
                    'Thinking photosynthesis only occurs in leaves (also in green stems, some fruits)',
                    'Believing all plant parts are green (roots, flowers, seeds usually not)'
                ],
                'Products and Reactants': [
                    'Thinking plants get food from soil (they make their own food from CO₂ and H₂O)',
                    'Believing water is a product of photosynthesis (it\'s a reactant; O₂ is byproduct)',
                    'Confusing where O₂ comes from (comes from H₂O, not CO₂)',
                    'Thinking glucose is the only product (also produces O₂, and glucose converted to other compounds)',
                    'Believing photosynthesis produces energy (it stores energy from light in chemical bonds)'
                ]
            },

            light_reactions: {
                'Location and Requirements': [
                    'Thinking light reactions occur in stroma (they occur in thylakoid membranes)',
                    'Believing light reactions produce glucose (they produce ATP and NADPH)',
                    'Confusing photosystem I and II order (PSII happens first, despite numbering)',
                    'Thinking light reactions can occur in dark (they require light)',
                    'Believing chloroplasts only have one photosystem (they have two working together)'
                ],
                'Water Splitting': [
                    'Thinking O₂ comes from CO₂ (it comes from H₂O splitting)',
                    'Believing plants "breathe in" CO₂ to get oxygen (CO₂ is carbon source, not O₂ source)',
                    'Confusing photolysis with hydrolysis (photolysis is light-driven water splitting)'
                ],
                'Electron Flow': [
                    'Thinking electrons come from chlorophyll (they come from water)',
                    'Believing NADPH is the same as NADH (different molecules, different functions)',
                    'Confusing cyclic and noncyclic pathways (noncyclic is main pathway)'
                ]
            },

            calvin_cycle: {
                'Requirements': [
                    'Thinking Calvin cycle requires light directly (it needs ATP/NADPH from light reactions)',
                    'Believing dark reactions only occur in dark (they can occur in light)',
                    'Confusing light-independent with light-unnecessary (still needs products of light reactions)',
                    'Thinking Calvin cycle occurs in thylakoids (it occurs in stroma)'
                ],
                'Carbon Fixation': [
                    'Believing one turn of cycle produces glucose (takes 6 turns)',
                    'Thinking RuBisCO adds CO₂ to a 3-carbon molecule (adds to 5-carbon RuBP)',
                    'Confusing G3P output with glucose (2 G3P needed to make 1 glucose)',
                    'Believing all G3P exits the cycle (5/6 used to regenerate RuBP)'
                ],
                'RuBisCO': [
                    'Thinking RuBisCO is rare enzyme (most abundant protein on Earth)',
                    'Believing RuBisCO only fixes CO₂ (can also use O₂, causing photorespiration)',
                    'Confusing RuBisCO with rubisco (same thing, different capitalization)'
                ]
            },

            photosynthetic_pigments: {
                'Types and Functions': [
                    'Thinking all pigments are chlorophyll (also carotenoids, phycobilins in algae)',
                    'Believing chlorophyll is one molecule (chlorophyll a and b are different)',
                    'Thinking plants are green because they need green light (they REFLECT green, absorb red/blue)',
                    'Confusing accessory pigments with unnecessary (they broaden absorption, protect from damage)'
                ],
                'Light Absorption': [
                    'Believing green light is most important for photosynthesis (least absorbed)',
                    'Thinking all wavelengths equally effective (red and blue most effective)',
                    'Confusing absorption spectrum with action spectrum (related but different concepts)',
                    'Believing white light is a single color (it\'s mixture of all colors)'
                ],
                'Seasonal Changes': [
                    'Thinking chlorophyll appears in fall (it disappears, revealing other pigments)',
                    'Believing carotenoids only appear in fall (present year-round but masked by chlorophyll)',
                    'Confusing why leaves change color (chlorophyll breakdown, not pigment production)'
                ]
            },

            chloroplast_structure: {
                'Organization': [
                    'Confusing chloroplasts with mitochondria (different structures, opposite processes)',
                    'Thinking chloroplasts only have one membrane (double membrane plus thylakoids)',
                    'Believing grana are individual thylakoids (they are STACKS of thylakoids)',
                    'Confusing stroma with cytoplasm (stroma is inside chloroplast)',
                    'Thinking thylakoid lumen is same as stroma (lumen is inside thylakoid)'
                ],
                'Function': [
                    'Believing all photosynthesis occurs in one place (light reactions in thylakoids, Calvin cycle in stroma)',
                    'Thinking chloroplast DNA is same as nuclear DNA (different, smaller genome)',
                    'Confusing chloroplast origin (evolved from endosymbiotic cyanobacteria)'
                ]
            },

            alternative_pathways: {
                'C4 Plants': [
                    'Thinking C4 is more advanced than C3 (different, not "better" - adapted to different conditions)',
                    'Believing C4 plants don\'t do Calvin cycle (they do, in bundle sheath cells)',
                    'Confusing C4 with having 4 carbons in glucose (refers to 4-carbon initial product)',
                    'Thinking all crops are C3 (corn, sugarcane, sorghum are C4)'
                ],
                'CAM Plants': [
                    'Believing CAM plants don\'t open stomata (they open at night)',
                    'Thinking CAM is same as C4 (both concentrate CO₂ but different mechanisms)',
                    'Confusing temporal vs spatial separation (CAM = time, C4 = space)'
                ],
                'Photorespiration': [
                    'Thinking photorespiration is good (it\'s wasteful but unavoidable for C3 plants)',
                    'Believing photorespiration produces energy (it consumes energy and releases CO₂)',
                    'Confusing photorespiration with cellular respiration (different processes)'
                ]
            },

            environmental_factors: {
                'Limiting Factors': [
                    'Thinking increasing any factor always increases photosynthesis (limiting factor principle)',
                    'Believing light is always limiting (can be CO₂ or temperature at high light)',
                    'Confusing compensation point with saturation point'
                ],
                'Light': [
                    'Thinking more light always better (can cause photoinhibition)',
                    'Believing all plants need same light intensity (sun vs shade adaptations)',
                    'Confusing light quality (wavelength) with light quantity (intensity)'
                ],
                'Temperature': [
                    'Thinking higher temperature always increases rate (enzymes denature)',
                    'Believing C3 and C4 have same optimal temperature (C4 optimum higher)',
                    'Confusing enzyme optimum with plant survival range'
                ],
                'CO₂': [
                    'Believing atmospheric CO₂ is limiting for all plants (often is for C3 in bright light)',
                    'Thinking CO₂ enrichment always increases yield (other factors become limiting)',
                    'Confusing stomatal opening with CO₂ availability (stomata can limit CO₂ entry)'
                ]
            },

            leaf_anatomy: {
                'Structure': [
                    'Thinking leaves are solid tissue (have air spaces for gas diffusion)',
                    'Believing veins only transport water (also transport sugars)',
                    'Confusing upper and lower epidermis (lower usually has more stomata)',
                    'Thinking all leaf cells contain chloroplasts (guard cells, epidermis usually lack them)'
                ],
                'Stomata': [
                    'Believing stomata only on bottom of leaves (usually more, but some on top)',
                    'Thinking stomata are always open (they open/close based on conditions)',
                    'Confusing stomatal opening with active transport (it\'s osmotic, driven by K⁺ pumps)',
                    'Believing stomata only regulate CO₂ (also regulate water loss - transpiration)'
                ],
                'Mesophyll': [
                    'Confusing palisade and spongy mesophyll (different structure, both photosynthesize)',
                    'Thinking spongy mesophyll is less important (crucial for gas exchange)',
                    'Believing chloroplasts only in palisade cells (both palisade and spongy have them)'
                ]
            }
        };

        this.clarificationStrategies = {
            visual_comparison: {
                method: 'Use diagrams to show structural differences and process flows',
                effectiveness: 'High for distinguishing C3, C4, and CAM pathways'
            },
            analogy: {
                method: 'Relate to everyday examples (solar panels, factories, day/night shifts)',
                effectiveness: 'High for abstract concepts like energy conversion'
            },
            molecular_models: {
                method: 'Build or visualize 3D models of chloroplasts and pigments',
                effectiveness: 'Very high for understanding structure'
            },
            contrast_table: {
                method: 'Side-by-side comparison charts (C3 vs C4 vs CAM)',
                effectiveness: 'High for related concepts'
            },
            chemical_equations: {
                method: 'Show balanced reactions for overall photosynthesis and sub-reactions',
                effectiveness: 'High for understanding stoichiometry'
            },
            experimental_demonstration: {
                method: 'Link to historical experiments (Priestley, Engelmann, Hill, Sachs)',
                effectiveness: 'Very high for concrete understanding'
            },
            process_flowcharts: {
                method: 'Flow diagrams showing electron flow, carbon flow, energy flow',
                effectiveness: 'Very high for understanding sequential processes'
            }
        };
    }

    initializeMetacognitivePrompts() {
        this.metacognitivePrompts = {
            beforeLearning: [
                "What do you already know about {topic}?",
                "How do you think plants make their own food?",
                "What questions do you have about {topic}?",
                "How might {topic} relate to other biological processes you've studied?",
                "What do you predict will be most challenging about understanding {topic}?"
            ],
            duringLearning: [
                "Does this make sense? Can you explain it in your own words?",
                "How does this step connect to the previous one?",
                "Can you draw a diagram to represent this process?",
                "What's the purpose of this structure/molecule/process?",
                "How would you explain {concept} to someone younger?"
            ],
            afterLearning: [
                "What were the main ideas about {topic}?",
                "How do light reactions and Calvin cycle work together?",
                "What surprised you while learning about {topic}?",
                "What are you still unsure about?",
                "Can you trace the path of: (a) a photon of light, (b) a carbon atom, (c) an electron through photosynthesis?",
                "How would you teach {topic} to someone else?"
            ],
            problemSolving: [
                "What is the question really asking (products? location? requirements?)?",
                "What information do you have? What do you need?",
                "Is this about light reactions or Calvin cycle (or both)?",
                "Have you seen a similar problem before?",
                "Did your answer make sense? How can you check it?"
            ],
            conceptMapping: [
                "How does {topic} relate to cellular respiration?",
                "Draw connections between: light → chlorophyll → electrons → ATP/NADPH → glucose",
                "How do structure and function relate in chloroplasts?",
                "What would happen if we removed: light? CO₂? water? chlorophyll?"
            ]
        };
    }

    initializeContextualScenarios() {
        this.contextualScenarios = {
            overview: [
                {
                    scenario: "Global Oxygen Supply",
                    context: "Earth's atmosphere is 21% oxygen, maintained by photosynthesis",
                    application: "Photosynthesis by plants and phytoplankton replenishes O₂ consumed by respiration and combustion",
                    question: "What would happen to atmospheric O₂ if all photosynthesis stopped?"
                },
                {
                    scenario: "Climate Change Mitigation",
                    context: "Forests and oceans absorb CO₂ through photosynthesis",
                    application: "Photosynthesis removes ~120 gigatons of CO₂ from atmosphere annually",
                    question: "How does deforestation contribute to rising atmospheric CO₂?"
                }
            ],

            light_reactions: [
                {
                    scenario: "Herbicide Mode of Action",
                    context: "DCMU (diuron) is a widely used herbicide",
                    application: "DCMU blocks electron transport between PSII and PSI, halting photosynthesis",
                    question: "Why does blocking electron transport kill plants?"
                },
                {
                    scenario: "High-Altitude Sunlight",
                    context: "UV radiation increases with altitude",
                    application: "Carotenoids in chloroplasts absorb excess UV and protect photosystems from damage",
                    question: "Why are alpine plants often reddish (high carotenoid content)?"
                }
            ],

            calvin_cycle: [
                {
                    scenario: "Rising Atmospheric CO₂",
                    context: "Atmospheric CO₂ has increased from 280 ppm (pre-industrial) to 420 ppm (2024)",
                    application: "Higher CO₂ increases photosynthesis in C3 plants (CO₂ fertilization effect)",
                    question: "Why do C4 plants benefit less from CO₂ enrichment than C3 plants?"
                },
                {
                    scenario: "Biofuel Production from Algae",
                    context: "Algae can produce oils and starches for biofuel",
                    application: "Optimizing Calvin cycle efficiency increases lipid and carbohydrate production in algae",
                    question: "How could we engineer algae to produce more biofuel?"
                }
            ],

            photosynthetic_pigments: [
                {
                    scenario: "Autumn Leaf Colors",
                    context: "Leaves turn red, orange, and yellow in fall",
                    application: "Chlorophyll breaks down in fall, revealing carotenoids (orange/yellow); anthocyanins (red) may be synthesized",
                    question: "Why do some trees have more vibrant fall colors than others?"
                },
                {
                    scenario: "Grow Lights for Indoor Farming",
                    context: "Indoor farms use artificial lighting to grow crops year-round",
                    application: "LED grow lights emit red and blue wavelengths (absorbed by chlorophyll) for energy efficiency",
                    question: "Why don't grow lights emit green light?"
                }
            ],

            chloroplast_structure: [
                {
                    scenario: "Endosymbiotic Evolution",
                    context: "Chloroplasts evolved from ancient cyanobacteria engulfed by eukaryotic cells",
                    application: "Evidence: chloroplast DNA, double membrane, 70S ribosomes, binary fission",
                    question: "How does endosymbiotic theory explain why chloroplasts have their own DNA?"
                },
                {
                    scenario: "Genetic Engineering of Chloroplasts",
                    context: "Scientists can insert genes into chloroplast DNA",
                    application: "Chloroplast transformation can produce vaccines, pharmaceuticals, or improve photosynthesis",
                    question: "Why is chloroplast genetic engineering harder than nuclear genetic engineering?"
                }
            ],

            alternative_pathways: [
                {
                    scenario: "Drought-Resistant Crops",
                    context: "Climate change increases drought frequency",
                    application: "CAM crops (e.g., agave, prickly pear) have extreme water use efficiency",
                    question: "Could CAM pathway be engineered into food crops for drought tolerance?"
                },
                {
                    scenario: "Tropical vs Temperate Agriculture",
                    context: "C4 plants dominate tropics; C3 plants dominate temperate regions",
                    application: "C4 plants more productive in hot climates; C3 plants better in cool climates",
                    question: "Why is corn (C4) grown in hot regions while wheat (C3) in cooler regions?"
                }
            ],

            environmental_factors: [
                {
                    scenario: "Greenhouse CO₂ Enrichment",
                    context: "Commercial greenhouses inject CO₂ to increase crop yield",
                    application: "Raising CO₂ from 400 ppm to 1000 ppm can increase photosynthesis 20-50% in C3 crops",
                    question: "Why does CO₂ enrichment eventually stop increasing yield?"
                },
                {
                    scenario: "Shade vs Sun Leaves",
                    context: "Leaves at bottom of canopy receive less light than top leaves",
                    application: "Shade leaves have more chlorophyll per chloroplast, thinner structure, lower light saturation",
                    question: "How do plants adapt leaf structure to light availability?"
                }
            ],

            leaf_anatomy: [
                {
                    scenario: "Stomatal Control and Water Stress",
                    context: "During drought, plants close stomata to conserve water",
                    application: "Stomatal closure reduces CO₂ uptake, limiting photosynthesis (tradeoff)",
                    question: "How do plants balance CO₂ uptake with water conservation?"
                },
                {
                    scenario: "Aquatic vs Terrestrial Plants",
                    context: "Water lilies have stomata on upper leaf surface; most land plants on lower surface",
                    application: "Upper surface stomata allow gas exchange with air in aquatic environments",
                    question: "Why would stomata on lower surface be problematic for floating leaves?"
                }
            ]
        };
    }

    initializeAssessmentRubrics() {
        this.assessmentRubrics = {
            knowledgeLevel: {
                remember: {
                    description: "Recall facts, terms, basic concepts",
                    verbs: ["Define", "List", "Identify", "Name", "State", "Label"],
                    example: "Define photosynthesis"
                },
                understand: {
                    description: "Explain ideas or concepts",
                    verbs: ["Explain", "Describe", "Summarize", "Compare", "Classify", "Distinguish"],
                    example: "Explain why light reactions require light but Calvin cycle does not directly require light"
                },
                apply: {
                    description: "Use information in new situations",
                    verbs: ["Calculate", "Solve", "Demonstrate", "Predict", "Use", "Illustrate"],
                    example: "Predict what happens to photosynthetic rate if CO₂ is removed"
                },
                analyze: {
                    description: "Draw connections among ideas",
                    verbs: ["Analyze", "Differentiate", "Organize", "Compare", "Contrast", "Examine"],
                    example: "Analyze how C3, C4, and CAM plants are adapted to different environments"
                },
                evaluate: {
                    description: "Justify a decision or course of action",
                    verbs: ["Evaluate", "Critique", "Judge", "Defend", "Assess", "Prioritize"],
                    example: "Evaluate the claim that increasing atmospheric CO₂ will solve world hunger"
                },
                create: {
                    description: "Produce new or original work",
                    verbs: ["Design", "Construct", "Create", "Develop", "Formulate", "Hypothesize"],
                    example: "Design an experiment to determine the optimal wavelength for a new crop species"
                }
            },

            understandingLevels: {
                novice: {
                    characteristics: ["Memorizes equations", "Sees processes in isolation", "Struggles with application"],
                    support: ["Provide analogies", "Use concrete examples and experiments", "Break down complex processes into steps"]
                },
                developing: {
                    characteristics: ["Connects light and dark reactions", "Can trace molecules through processes", "Begins seeing patterns (e.g., C3 vs C4)"],
                    support: ["Challenge with new environmental conditions", "Encourage process diagrams", "Introduce evolutionary adaptations"]
                },
                proficient: {
                    characteristics: ["Explains energy and material flow", "Applies to novel situations", "Integrates photosynthesis with ecology"],
                    support: ["Present complex scenarios (climate change, agriculture)", "Encourage critical analysis", "Develop research skills"]
                },
                expert: {
                    characteristics: ["Synthesizes across biology (respiration, ecology, evolution)", "Evaluates global issues", "Teaches others effectively"],
                    support: ["Engage in original research", "Mentor novices", "Explore cutting-edge applications"]
                }
            }
        };

        this.assessmentQuestions = {
            overview: {
                remember: "Write the overall equation for photosynthesis",
                understand: "Explain why photosynthesis is called an endergonic process",
                apply: "Predict what would happen to a plant's mass if kept in the dark for a week",
                analyze: "Compare and contrast photosynthesis and cellular respiration",
                evaluate: "Evaluate the statement: 'Plants get their food from the soil'",
                create: "Design an experiment to prove that plants produce their own food"
            },
            light_reactions: {
                remember: "List the products of light-dependent reactions",
                understand: "Explain the role of water in photosystem II",
                apply: "Predict what happens to oxygen production if PSII is inhibited",
                analyze: "Trace an electron from water to NADPH through the Z-scheme",
                evaluate: "Evaluate whether cyclic photophosphorylation is wasteful or beneficial",
                create: "Design a system to measure the effect of light intensity on oxygen evolution"
            },
            calvin_cycle: {
                remember: "Name the enzyme that fixes CO₂ in the Calvin cycle",
                understand: "Explain why the Calvin cycle is called light-independent but still needs light reactions",
                apply: "Calculate how many CO₂ molecules are needed to make one glucose",
                analyze: "Analyze why RuBisCO's low efficiency is a problem for agriculture",
                evaluate: "Evaluate strategies to improve photosynthetic efficiency in crops",
                create: "Propose a genetic engineering approach to reduce photorespiration"
            },
            photosynthetic_pigments: {
                remember: "List the main types of photosynthetic pigments",
                understand: "Explain why plants appear green",
                apply: "Predict which wavelengths would be most effective for underwater photosynthesis",
                analyze: "Analyze why action spectrum matches absorption spectrum",
                evaluate: "Evaluate the use of red/blue LED grow lights vs full-spectrum lights",
                create: "Design an experiment to separate and identify pigments from a new plant species"
            },
            alternative_pathways: {
                remember: "Identify which crops use C4 photosynthesis",
                understand: "Explain how CAM plants conserve water",
                apply: "Predict which photosynthetic pathway would be most successful in a hot desert",
                analyze: "Compare the energetic costs of C3, C4, and CAM photosynthesis",
                evaluate: "Evaluate the feasibility of engineering C4 traits into rice",
                create: "Hypothesize why C4 photosynthesis evolved independently multiple times"
            }
        };
    }

// ========================================
// TOPIC HANDLER METHODS
// ========================================

handlePhotosynthesisOverview(problem) {
    const content = {
        topic: "Photosynthesis Overview",
        category: 'fundamentals',
        summary: "Photosynthesis is the process by which plants, algae, and some bacteria convert light energy into chemical energy stored in glucose. This process uses carbon dioxide and water as raw materials and produces glucose and oxygen. Photosynthesis is the foundation of nearly all food chains and the source of atmospheric oxygen.",
        
        overallEquation: {
            simplified: "6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂",
            detailed: "6CO₂ + 12H₂O + light energy → C₆H₁₂O₆ + 6O₂ + 6H₂O",
            explanation: {
                reactants: "Carbon dioxide (from air) and water (from soil)",
                energy: "Light energy (primarily from sun)",
                products: "Glucose (C₆H₁₂O₆) and oxygen gas (O₂)",
                waterNote: "Water appears on both sides: 12 consumed, 6 produced (net: 6 consumed)"
            },
            stoichiometry: {
                carbonDioxide: "6 molecules consumed",
                water: "12 molecules consumed (net 6 after accounting for production)",
                glucose: "1 molecule produced",
                oxygen: "6 molecules produced"
            }
        },

        twoStages: {
            overview: "Photosynthesis occurs in two interconnected stages: light-dependent reactions and light-independent reactions (Calvin cycle)",
            
            lightDependentReactions: {
                alternateName: "Light reactions, photochemical reactions",
                location: "Thylakoid membranes in chloroplast",
                requirement: "Light energy (photons)",
                inputs: ["Light", "H₂O", "NADP⁺", "ADP + Pᵢ"],
                outputs: ["O₂", "ATP", "NADPH"],
                keyProcesses: [
                    "Light absorption by photosystems",
                    "Water splitting (photolysis): 2H₂O → 4H⁺ + 4e⁻ + O₂",
                    "Electron transport chain",
                    "ATP synthesis (photophosphorylation)",
                    "NADP⁺ reduction to NADPH"
                ],
                purpose: "Convert light energy into chemical energy (ATP and NADPH)",
                duration: "Milliseconds to seconds",
                analogy: "Like a solar panel charging batteries (ATP) and creating fuel (NADPH)"
            },

            lightIndependentReactions: {
                alternateName: "Calvin cycle, dark reactions, carbon fixation",
                location: "Stroma of chloroplast",
                requirement: "ATP and NADPH from light reactions (not light directly)",
                inputs: ["CO₂", "ATP", "NADPH"],
                outputs: ["Glucose (C₆H₁₂O₆)", "ADP + Pᵢ", "NADP⁺"],
                keyProcesses: [
                    "Carbon fixation: CO₂ + RuBP → 2 × 3-PGA",
                    "Reduction: 3-PGA → G3P using ATP and NADPH",
                    "Regeneration of RuBP",
                    "Glucose synthesis from G3P"
                ],
                purpose: "Fix atmospheric CO₂ into organic molecules (glucose)",
                duration: "Minutes",
                cycles: "Cycle turns 6 times to produce 1 glucose molecule",
                analogy: "Like a factory assembly line building glucose from CO₂ parts using energy from 'charged batteries'"
            },

            interdependence: {
                connection: "Light reactions provide ATP and NADPH for Calvin cycle; Calvin cycle recycles ADP, Pᵢ, and NADP⁺ back to light reactions",
                dayNightCycle: "Both can occur simultaneously in light; Calvin cycle slows/stops in prolonged darkness when ATP/NADPH depleted"
            }
        },

        energyTransformations: {
            lightToChemical: "Light energy (photons) → Chemical energy (ATP, NADPH, glucose)",
            efficiency: "Approximately 3-6% of light energy ends up stored in glucose (better than most solar panels historically)",
            energyStorage: "Glucose contains chemical energy in C-H and C-C bonds",
            comparison: {
                solarPanel: "~15-20% efficient (modern commercial)",
                photosynthesis: "~3-6% efficient overall, but up to 30% for light reactions alone",
                note: "Solar panels store energy in batteries; photosynthesis stores in chemical bonds"
            }
        },

        autotrophsVsHeterotrophs: {
            autotrophs: {
                definition: "Organisms that produce their own food from inorganic materials",
                mechanism: "Photosynthesis (or chemosynthesis)",
                examples: ["Plants", "Algae", "Cyanobacteria", "Some protists"],
                etymology: "Auto = self, troph = feeding"
            },
            heterotrophs: {
                definition: "Organisms that obtain food by consuming other organisms",
                mechanism: "Consume autotrophs or other heterotrophs",
                examples: ["Animals", "Fungi", "Most bacteria"],
                dependency: "Depend on autotrophs for energy and organic molecules",
                etymology: "Hetero = other, troph = feeding"
            },
            interconnection: "Heterotrophs depend on autotrophs; photosynthesis is base of food chain"
        },

        historicalDiscoveries: {
            vanHelmont: {
                scientist: "Jan Baptist van Helmont",
                year: "1648",
                experiment: "Willow tree grew 74 kg with only water added (soil mass unchanged)",
                conclusion: "Plants gain mass from water (partially correct - didn't know about air)",
                significance: "First quantitative experiment on plant growth"
            },
            priestley: {
                scientist: "Joseph Priestley",
                year: "1772",
                experiment: "Plant 'restored' air after candle burned in sealed jar",
                conclusion: "Plants produce oxygen",
                significance: "Discovered O₂ production by plants"
            },
            ingenhousz: {
                scientist: "Jan Ingenhousz",
                year: "1779",
                experiment: "Plants produce O₂ only in light; consume O₂ in dark",
                conclusion: "Photosynthesis requires light; plants also respire",
                significance: "Separated photosynthesis from respiration"
            },
            sachs: {
                scientist: "Julius von Sachs",
                year: "1862",
                experiment: "Starch appears in leaves only in light (iodine test)",
                conclusion: "Photosynthesis produces carbohydrates",
                significance: "Identified glucose/starch as product"
            },
            engelmann: {
                scientist: "Theodor Engelmann",
                year: "1882",
                experiment: "Bacteria clustered in red/blue light regions of spectrum on algae",
                conclusion: "Red and blue light most effective for photosynthesis",
                significance: "First action spectrum, linked to chlorophyll absorption"
            },
            blackman: {
                scientist: "Frederick Frost Blackman",
                year: "1905",
                concept: "Law of limiting factors",
                conclusion: "Photosynthetic rate limited by scarcest factor",
                significance: "Explained how multiple factors control rate"
            },
            hill: {
                scientist: "Robert Hill",
                year: "1937",
                experiment: "Isolated chloroplasts produce O₂ in light without CO₂",
                conclusion: "Light and dark reactions are separate; O₂ from H₂O",
                significance: "Proved light reactions independent of carbon fixation"
            },
            calvin: {
                scientist: "Melvin Calvin",
                year: "1950s",
                experiment: "Used radioactive ¹⁴CO₂ to trace carbon path",
                conclusion: "Elucidated Calvin cycle pathway",
                significance: "Nobel Prize 1961; mapped carbon fixation pathway"
            }
        },

        globalSignificance: {
            oxygenProduction: {
                amount: "Photosynthesis produces ~300 billion tons of O₂ annually",
                maintenance: "Maintains 21% O₂ in atmosphere",
                history: "Cyanobacteria photosynthesis created Earth's oxygenated atmosphere 2.4 billion years ago (Great Oxygenation Event)",
                impact: "Enabled evolution of aerobic life"
            },
            carbonSequestration: {
                amount: "Photosynthesis removes ~120 gigatons of CO₂ from atmosphere annually",
                storage: "Carbon stored in plant biomass, soil, ocean",
                climateRegulation: "Major component of carbon cycle",
                concern: "Deforestation and ocean acidification reduce CO₂ uptake"
            },
            foodProduction: {
                agriculture: "All major food crops depend on photosynthesis",
                yield: "Crop yield directly related to photosynthetic efficiency",
                improvement: "Research focuses on enhancing photosynthesis for food security",
                statistics: "Feeds ~8 billion humans plus livestock"
            },
            fossilFuels: {
                origin: "Coal, oil, natural gas from ancient photosynthetic organisms",
                timeScale: "Formed over millions of years from buried plant/algae remains",
                irony: "Burning releases CO₂ sequestered by ancient photosynthesis"
            },
            biomass: {
                production: "Photosynthesis produces ~100 billion tons of dry biomass per year on land",
                ocean: "Marine phytoplankton produce similar amount",
                uses: "Food, timber, paper, biofuels, materials"
            }
        },

        locationInPlant: {
            primarySite: "Leaves (especially mesophyll cells)",
            otherSites: ["Green stems", "Sepals (green flower parts)", "Unripe fruit", "Specialized structures (e.g., cacti stems)"],
            chloroplasts: "Site of photosynthesis within cells",
            nonPhotosyntheticParts: "Roots, flowers (most), mature wood - lack chlorophyll"
        },

        plantVsAnimalRelationship: {
            complementary: "Photosynthesis and respiration are complementary",
            photosynthesis: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (plants produce food and O₂)",
            respiration: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP (all organisms break down food for energy)",
            cycle: "Plants produce O₂ and glucose; animals consume O₂ and glucose; produce CO₂ and H₂O; plants reuse CO₂ and H₂O",
            note: "Plants ALSO respire 24/7 (need ATP for all cellular processes)"
        },

        factorsAffecting: {
            preview: "Photosynthetic rate affected by multiple environmental factors",
            mainFactors: [
                "Light intensity (more light → higher rate, until saturation)",
                "CO₂ concentration (more CO₂ → higher rate, until saturation)",
                "Temperature (optimal range; too low = slow, too high = denaturation)",
                "Water availability (drought closes stomata, limits CO₂ uptake)",
                "Wavelength of light (red and blue most effective)"
            ],
            limitingFactor: "Rate determined by factor in shortest supply (Blackman's law)"
        },

        examples: [
            {
                name: "Terrestrial Plants",
                examples: "Trees, grasses, crops, houseplants",
                adaptation: "Leaves optimized for light capture and gas exchange",
                contribution: "~50% of global photosynthesis"
            },
            {
                name: "Phytoplankton",
                examples: "Diatoms, dinoflagellates, cyanobacteria",
                adaptation: "Float near ocean surface for light",
                contribution: "~50% of global photosynthesis (more than all terrestrial plants!)"
            },
            {
                name: "Algae",
                examples: "Seaweed, kelp, pond scum",
                adaptation: "Aquatic, various pigments for different light wavelengths",
                contribution: "Marine and freshwater ecosystems"
            },
            {
                name: "Cyanobacteria",
                examples: "Blue-green algae (though they're bacteria)",
                adaptation: "First photosynthetic organisms (3.5 billion years ago)",
                contribution: "Created Earth's oxygen atmosphere"
            }
        ],

        applications: [
            "Agriculture - Optimizing crop yields by enhancing photosynthesis",
            "Climate science - Understanding carbon cycle and climate regulation",
            "Biofuels - Growing algae or crops for renewable energy",
            "Artificial photosynthesis - Developing technology to mimic photosynthesis for clean energy",
            "Space exploration - Using plants/algae for life support (O₂, food)",
            "Biotechnology - Engineering more efficient photosynthetic organisms",
            "Forestry - Managing forests for carbon sequestration",
            "Aquaculture - Growing phytoplankton for fish food",
            "Bioremediation - Using plants to clean CO₂ from air or pollutants from soil"
        ],

        commonMisconceptions: [
            "Plants get food from soil (they make food from CO₂ and H₂O)",
            "Photosynthesis only occurs in leaves (also green stems, etc.)",
            "Plants breathe in CO₂ and out O₂ (gas exchange is more complex; they also respire)",
            "O₂ comes from CO₂ (it comes from water splitting)",
            "Photosynthesis produces energy (it stores energy from light in chemical bonds)",
            "Plants don't respire (they photosynthesize AND respire)"
        ]
    };

    return content;
}

handleLightReactions(problem) {
    const content = {
        topic: "Light-Dependent Reactions",
        category: 'mechanisms',
        summary: "Light-dependent reactions (light reactions) occur in thylakoid membranes and convert light energy into chemical energy in the form of ATP and NADPH. These reactions involve two photosystems working in series, water splitting (photolysis), electron transport, and chemiosmosis. The products (ATP and NADPH) are used in the Calvin cycle to fix CO₂ into glucose.",

        location: {
            chloroplast: "Light reactions occur in chloroplast",
            thylakoidMembranes: "Specifically in thylakoid membranes (grana and stroma lamellae)",
            lumen: "Protons accumulate in thylakoid lumen",
            stroma: "Protons flow back to stroma through ATP synthase"
        },

        overallEquation: {
            simplified: "2H₂O + 2NADP⁺ + 3ADP + 3Pᵢ + light → O₂ + 2NADPH + 3ATP",
            note: "Approximate stoichiometry; exact ATP yield varies (1-1.5 ATP per 2e⁻)"
        },

        photosystems: {
            overview: "Two photosystems (II and I) work in series; numbering reflects order of discovery, not function",
            
            photosystemII: {
                name: "PSII (Photosystem II)",
                reactionCenter: "P₆₈₀ (chlorophyll a that absorbs 680 nm light)",
                location: "Primarily in grana (stacked thylakoids)",
                function: "Oxidizes water, initiates electron flow",
                absorptionPeak: "680 nm (red light)",
                components: [
                    "Light-harvesting complex (antenna pigments)",
                    "Reaction center chlorophyll (P₆₈₀)",
                    "Oxygen-evolving complex (water-splitting enzyme)",
                    "Primary electron acceptor (pheophytin)",
                    "Plastoquinone (PQ) binding sites"
                ],
                process: [
                    "Photon absorbed by antenna pigments, energy transferred to P₆₈₀",
                    "P₆₈₀ excited, electron boosted to higher energy",
                    "Electron transferred to pheophytin then plastoquinone",
                    "P₆₈₀⁺ (oxidized) is very strong oxidant",
                    "Oxygen-evolving complex splits water to replace electron"
                ],
                waterSplitting: {
                    reaction: "2H₂O → 4H⁺ + 4e⁻ + O₂",
                    enzyme: "Oxygen-evolving complex (contains Mn cluster)",
                    significance: "Source of electrons for photosynthesis AND source of atmospheric O₂",
                    protons: "H⁺ ions released into lumen (contribute to gradient)"
                }
            },

            photosystemI: {
                name: "PSI (Photosystem I)",
                reactionCenter: "P₇₀₀ (chlorophyll a that absorbs 700 nm light)",
                location: "Primarily in stroma lamellae (unstacked thylakoids)",
                function: "Re-energizes electrons, reduces NADP⁺",
                absorptionPeak: "700 nm (far-red light)",
                components: [
                    "Light-harvesting complex",
                    "Reaction center chlorophyll (P₇₀₀)",
                    "Primary electron acceptor (A₀)",
                    "Ferredoxin (Fe-S protein)",
                    "Ferredoxin-NADP⁺ reductase (FNR)"
                ],
                process: [
                    "Electron arrives from plastocyanin (via ETC from PSII)",
                    "Photon absorbed, energy transferred to P₇₀₀",
                    "P₇₀₀ excited, electron boosted to even higher energy",
                    "Electron passed to ferredoxin",
                    "Ferredoxin-NADP⁺ reductase catalyzes: 2Ferredoxin(red) + NADP⁺ + H⁺ → 2Ferredoxin(ox) + NADPH"
                ],
                NADPHproduction: {
                    reaction: "NADP⁺ + 2e⁻ + H⁺ → NADPH",
                    purpose: "NADPH provides reducing power (electrons and H⁺) for Calvin cycle",
                    note: "NADPH is like 'electron currency' for biosynthesis"
                }
            }
        },

        electronTransportChain: {
            overview: "Series of electron carriers between PSII and PSI",
            pathway: "PSII → Plastoquinone (PQ) → Cytochrome b₆f complex → Plastocyanin (PC) → PSI",
            
            carriers: {
                plastoquinone: {
                    abbreviation: "PQ or PQH₂ (reduced form)",
                    type: "Lipid-soluble quinone",
                    function: "Accepts electrons from PSII, shuttles to cytochrome b₆f",
                    mobile: "Moves within thylakoid membrane",
                    protonPumping: "Carries H⁺ from stroma to lumen (contributes to gradient)"
                },
                cytochromeB6F: {
                    name: "Cytochrome b₆f complex",
                    type: "Large protein complex embedded in membrane",
                    function: "Transfers electrons from plastoquinone to plastocyanin",
                    protonPumping: "Pumps additional H⁺ into lumen (Q-cycle)",
                    analogy: "Similar to Complex III in mitochondrial ETC"
                },
                plastocyanin: {
                    abbreviation: "PC",
                    type: "Small copper-containing protein",
                    function: "Shuttles electrons from cytochrome b₆f to PSI",
                    mobile: "Diffuses in lumen",
                    location: "Soluble protein in thylakoid lumen"
                },
                ferredoxin: {
                    abbreviation: "Fd",
                    type: "Iron-sulfur protein",
                    function: "Accepts electrons from PSI, transfers to FNR",
                    location: "Stroma side of thylakoid membrane",
                    alternative: "Can participate in cyclic electron flow"
                }
            },

            energyChanges: "Electrons lose energy during transport from PSII to PSI; energy used to pump H⁺"
        },

        zScheme: {
            description: "Diagram showing electron energy levels during light reactions",
            name: "Called Z-scheme because of zigzag (Z-like) pattern",
            xAxis: "Position in electron transport chain",
            yAxis: "Energy level of electrons",
            keyFeatures: [
                "Start: Water (low energy, -0.8V)",
                "PSII boost: Electrons excited to high energy by 680nm light",
                "Downhill: Energy gradually released during transport to PSI",
                "PSI boost: Electrons re-excited by 700nm light",
                "End: NADPH (high energy, -0.32V)"
            ],
            visualization: "Shows two 'peaks' (photosystems) and 'valleys' (electron transport)",
            significance: "Demonstrates two light reactions required, energy flow, and redox changes"
        },

        photophosphorylation: {
            definition: "Light-driven synthesis of ATP",
            mechanism: "Chemiosmosis (same principle as mitochondrial ATP synthesis)",
            
            protonGradient: {
                formation: [
                    "Water splitting in lumen releases H⁺ (PSII)",
                    "Plastoquinone transports H⁺ from stroma to lumen",
                    "Cytochrome b₆f pumps H⁺ into lumen (Q-cycle)",
                    "NADP⁺ reduction in stroma consumes H⁺"
                ],
                result: "High [H⁺] in lumen (~pH 5), low [H⁺] in stroma (~pH 8)",
                magnitude: "~1000-fold concentration difference (3 pH units)",
                energy: "Proton-motive force (electrical + chemical gradient)"
            },

            ATPsynthase: {
                structure: "CF₀CF₁ complex (similar to mitochondrial F₀F₁)",
                CF0: "Transmembrane channel, allows H⁺ flow",
                CF1: "Catalytic head in stroma, synthesizes ATP",
                mechanism: [
                    "H⁺ flows from lumen through CF₀ to stroma (down gradient)",
                    "Flow drives rotation of CF₀ rotor",
                    "Rotation causes conformational changes in CF₁",
                    "Conformational changes catalyze: ADP + Pᵢ → ATP"
                ],
                efficiency: "~3 H⁺ required per ATP synthesized",
                yield: "Approximately 1.3 ATP per 2 electrons (varies with conditions)"
            }
        },

        noncyclicPhotophosphorylation: {
            name: "Noncyclic electron flow (normal pathway)",
            pathway: "H₂O → PSII → ETC → PSI → NADP⁺",
            products: "ATP, NADPH, O₂",
            electronSource: "Water (H₂O)",
            electronDestination: "NADP⁺ (becomes NADPH)",
            linear: "Electrons flow in one direction (noncyclic)",
            purpose: "Produce both ATP and NADPH for Calvin cycle",
            stoichiometry: "Per 2e⁻: ~1.3 ATP + 1 NADPH + ½ O₂"
        },

        cyclicPhotophosphorylation: {
            name: "Cyclic electron flow",
            pathway: "PSI → Ferredoxin → Cytochrome b₆f → Plastocyanin → PSI (cycle)",
            products: "ATP ONLY (no NADPH, no O₂)",
            PSIIinvolvement: "PSII NOT involved",
            electrons: "Electrons cycle back to PSI instead of reducing NADP⁺",
            purpose: "Make additional ATP when Calvin cycle needs more ATP relative to NADPH",
            ratio: "Calvin cycle uses ~1.5 ATP per NADPH; noncyclic provides ~1.3 ATP per NADPH",
            compensation: "Cyclic flow makes up the difference",
            occurrence: "Occurs when NADP⁺ is depleted or ATP demand is high",
            evolution: "Thought to be evolutionarily older than noncyclic"
        },

        oxygenEvolution: {
            source: "Oxygen comes from water (H₂O), NOT from CO₂",
            evidence: {
                isotope: "Experiments with H₂¹⁸O (heavy water) showed ¹⁸O in O₂, not in glucose",
                conclusion: "Proves O₂ comes from water splitting"
            },
            significance: [
                "Source of atmospheric oxygen on Earth",
                "Byproduct of photosynthesis (not needed by plant)",
                "Essential for aerobic respiration in all organisms",
                "Changed Earth's atmosphere 2.4 billion years ago"
            ],
            amount: "Plants and algae produce ~300 billion tons O₂/year globally"
        },

        energyFlow: {
            lightEnergy: "Photons absorbed by pigments",
            electronExcitation: "Energy excites electrons to higher energy levels",
            chemicalEnergy: "Energy stored in NADPH (high-energy electrons) and ATP (phosphate bonds)",
            efficiency: "Light reactions ~30% efficient (rest lost as heat)",
            conservation: "Energy conserved in 'useful' forms (ATP, NADPH) for biosynthesis"
        },

        regulation: {
            lightIntensity: "Higher light → more photosynthesis (until saturation)",
            photoinhibition: "Excess light can damage PSII (photoprotection mechanisms exist)",
            stateTansitions: "Regulate energy distribution between PSI and PSII",
            NPQnonPhotochemicalQuenching: "Dissipates excess light energy as heat (via xanthophyll cycle)"
        },

        comparison: {
            toMitochondrialETC: {
                similarities: [
                    "Both use electron transport chains",
                    "Both create proton gradients",
                    "Both use chemiosmosis to make ATP"
                ],
                differences: [
                    "Chloroplast: light energy input; Mitochondria: chemical energy input",
                    "Chloroplast: H₂O is electron source; Mitochondria: NADH/FADH₂ are electron sources",
                    "Chloroplast: NADP⁺ is final acceptor; Mitochondria: O₂ is final acceptor",
                    "Chloroplast: produces O₂; Mitochondria: consumes O₂",
                    "Chloroplast: H⁺ gradient lumen→stroma; Mitochondria: gradient intermembrane→matrix"
                ]
            }
        },

        examples: [
            {
                process: "Water splitting",
                equation: "2H₂O → 4H⁺ + 4e⁻ + O₂",
                location: "PSII oxygen-evolving complex",
                significance: "Source of electrons and oxygen"
            },
            {
                process: "NADPH formation",
                equation: "NADP⁺ + 2e⁻ + H⁺ → NADPH",
                location: "Stroma, catalyzed by ferredoxin-NADP⁺ reductase",
                significance: "Provides reducing power for Calvin cycle"
            },
            {
                process: "ATP synthesis",
                equation: "ADP + Pᵢ + energy (from H⁺ gradient) → ATP",
                location: "CF₁ portion of ATP synthase in stroma",
                significance: "Provides energy for Calvin cycle"
            }
        ],

        applications: [
            "Understanding herbicide mechanisms (many target PSII or electron transport)",
            "Artificial photosynthesis - mimicking light reactions for clean energy",
            "Improving crop photosynthetic efficiency through genetic engineering",
            "Developing biosensors based on photosystem activity",
            "Producing hydrogen gas from water using modified photosystems",
            "Understanding evolution of oxygenic photosynthesis",
            "Climate science - oxygen production and carbon cycling",
            "Biotechnology - engineering algae for biofuel production"
        ],

        keyTakeaways: [
            "Light reactions convert light energy to chemical energy (ATP, NADPH)",
            "Two photosystems work in series (Z-scheme)",
            "Water is split to provide electrons; O₂ is released",
            "Electron transport creates proton gradient",
            "ATP synthase uses gradient to make ATP (chemiosmosis)",
            "Products (ATP, NADPH) are used in Calvin cycle"
        ]
    };

    return content;
}

handleCalvinCycle(problem) {
    const content = {
        topic: "Calvin Cycle (Light-Independent Reactions)",
        category: 'mechanisms',
        summary: "The Calvin cycle (light-independent reactions) uses ATP and NADPH from light reactions to fix atmospheric CO₂ into organic molecules, ultimately producing glucose. This cycle occurs in the stroma and consists of three phases: carbon fixation, reduction, and regeneration of RuBP. The cycle must turn six times to produce one glucose molecule.",

        alternateName: [
            "Calvin-Benson cycle",
            "Light-independent reactions",
            "Dark reactions (misleading - can occur in light)",
            "C3 pathway (in C3 plants)",
            "Reductive pentose phosphate pathway"
        ],

        location: {
            chloroplast: "Stroma (fluid surrounding thylakoids)",
            enzymes: "All Calvin cycle enzymes dissolved in stroma",
            connection: "Spatially separated from light reactions (thylakoid membranes)"
        },

        lightIndependence: {
            directRequirement: "Does NOT require light directly",
            indirectRequirement: "REQUIRES ATP and NADPH from light reactions",
            timing: "Can occur in light or dark (as long as ATP/NADPH available)",
            misnomer: "'Dark reactions' is misleading - usually occurs simultaneously with light reactions during day",
            limitation: "In prolonged darkness, ATP and NADPH depleted → cycle stops"
        },

        overallEquation: {
            perGlucose: "6CO₂ + 18ATP + 12NADPH + 12H₂O → C₆H₁₂O₆ + 18ADP + 18Pᵢ + 12NADP⁺",
            perThreeCO2: "3CO₂ + 9ATP + 6NADPH + 6H₂O → G3P + 9ADP + 9Pᵢ + 6NADP⁺",
            note: "Glucose formed from 2 G3P molecules; cycle turns 6× for 1 glucose"
        },

        threePhases: {
            overview: "Calvin cycle has three main phases that repeat cyclically",

            phase1_CarbonFixation: {
                name: "Phase 1: Carbon Fixation",
                description: "CO₂ from atmosphere is attached to 5-carbon RuBP, forming unstable 6-carbon intermediate that splits into two 3-carbon molecules",
                
                reaction: "RuBP (C₅) + CO₂ (C₁) → 2 × 3-PGA (C₃)",
                enzyme: "RuBisCO (ribulose-1,5-bisphosphate carboxylase/oxygenase)",
                
                details: {
                    substrate: "Ribulose-1,5-bisphosphate (RuBP) - 5-carbon sugar with 2 phosphates",
                    CO2source: "Atmospheric CO₂ (enters through stomata)",
                    intermediate: "Unstable 6-carbon compound immediately splits",
                    product: "2 molecules of 3-phosphoglycerate (3-PGA) - 3-carbon compound",
                    carbonAccounting: "1 CO₂ + 1 RuBP (C₅) → 2 × 3-PGA (total 6 carbons)"
                },
                
                perTurn: {
                    input: "1 CO₂ + 1 RuBP",
                    output: "2 × 3-PGA"
                },
                
                perThreeTurns: {
                    input: "3 CO₂ + 3 RuBP",
                    output: "6 × 3-PGA"
                },
                
                significance: "This is THE carbon fixation step - inorganic CO₂ becomes part of organic molecule",
                name_origin: "3-PGA is a 3-carbon molecule → 'C3 pathway' in C3 plants"
            },

            phase2_Reduction: {
                name: "Phase 2: Reduction",
                description: "3-PGA is reduced to G3P (glyceraldehyde-3-phosphate) using ATP and NADPH from light reactions",
                
                twoSteps: {
                    step1_Phosphorylation: {
                        reaction: "3-PGA + ATP → 1,3-bisphosphoglycerate + ADP",
                        enzyme: "3-phosphoglycerate kinase (phosphoglycerate kinase)",
                        purpose: "Add phosphate group to activate molecule",
                        product: "1,3-bisphosphoglycerate (1,3-BPG) - high-energy intermediate"
                    },
                    step2_Reduction: {
                        reaction: "1,3-bisphosphoglycerate + NADPH + H⁺ → G3P + NADP⁺ + Pᵢ",
                        enzyme: "Glyceraldehyde-3-phosphate dehydrogenase (G3P dehydrogenase)",
                        purpose: "Reduce carbonyl group using electrons from NADPH",
                        product: "Glyceraldehyde-3-phosphate (G3P) - 3-carbon sugar phosphate"
                    }
                },
                
                overall: "3-PGA + ATP + NADPH → G3P + ADP + Pᵢ + NADP⁺",
                
                perThreeTurns: {
                    input: "6 × 3-PGA + 6 ATP + 6 NADPH",
                    output: "6 G3P + 6 ADP + 6 Pᵢ + 6 NADP⁺"
                },
                
                reductionMeaning: "Reduction = electrons added (from NADPH)",
                energyUse: "ATP provides energy for phosphorylation; NADPH provides electrons for reduction",
                significance: "Converts oxidized carbon (in 3-PGA) to reduced carbon (in G3P)",
                G3Pfate: "5 out of 6 G3P used to regenerate RuBP; 1 out of 6 exits cycle as product"
            },

            phase3_RegenerationOfRuBP: {
                name: "Phase 3: Regeneration of RuBP",
                description: "Five G3P molecules (C₃) are rearranged through complex series of reactions to regenerate three RuBP molecules (C₅), allowing cycle to continue",
                
                overall: "5 G3P (C₃) + 3 ATP → 3 RuBP (C₅) + 3 ADP + 3 Pᵢ",
                
                carbonAccounting: "5 × C₃ = 15 carbons → 3 × C₅ = 15 carbons (balanced)",
                
                complexReactions: {
                    enzymes: "Multiple enzymes (transketolase, aldolase, phosphatase, phosphoribulokinase)",
                    intermediates: "Various 3-, 4-, 5-, 6-, 7-carbon sugar phosphates",
                    finalStep: "Ribulose-5-phosphate + ATP → RuBP (catalyzed by phosphoribulokinase)"
                },
                
                ATPuse: "3 ATP needed to phosphorylate ribulose-5-phosphate to RuBP (regeneration)",
                
                significance: "Regenerates starting material (RuBP) so cycle can continue",
                analogy: "Like factory recycling parts to keep assembly line running"
            }
        },

        completeAccounting: {
            forThreeTurns: {
                description: "Three turns of cycle (3 CO₂ fixed) produces 1 net G3P",
                inputs: {
                    CO2: "3 molecules",
                    RuBP: "3 molecules (regenerated, not consumed)",
                    ATP: "9 molecules (6 for reduction, 3 for regeneration)",
                    NADPH: "6 molecules (for reduction)"
                },
                outputs: {
                    G3P: "1 net molecule (6 produced, 5 used in regeneration)",
                    ADP: "9 molecules",
                    Pi: "9 molecules",
                    NADPplus: "6 molecules"
                }
            },
            
            forSixTurns: {
                description: "Six turns produce 2 G3P → combine to make 1 glucose",
                inputs: {
                    CO2: "6 molecules",
                    ATP: "18 molecules",
                    NADPH: "12 molecules"
                },
                outputs: {
                    glucose: "1 molecule (C₆H₁₂O₆)",
                    ADP: "18 molecules",
                    Pi: "18 molecules",
                    NADPplus: "12 molecules"
                }
            }
        },

        G3Pfate: {
            description: "G3P is a 3-carbon sugar that serves as starting material for many biosynthetic pathways",
            glucose: "2 G3P → 1 glucose (C₆H₁₂O₆) via gluconeogenesis",
            starch: "Glucose polymerized to starch (energy storage in chloroplasts/amyloplasts)",
            sucrose: "Glucose + fructose → sucrose (transport form of sugar in plants)",
            cellulose: "Glucose polymerized to cellulose (structural polysaccharide)",
            fattyAcids: "G3P converted to fatty acids and lipids",
            aminoAcids: "Carbon skeletons for amino acid synthesis",
            nucleotides: "Ribose and deoxyribose sugars for RNA and DNA"
        },

        RuBisCO: {
            fullName: "Ribulose-1,5-bisphosphate carboxylase/oxygenase",
            abbreviation: "RuBisCO (or rubisco)",
            
            importance: "Most abundant protein on Earth",
            abundance: "~50% of soluble protein in leaves",
            totalMass: "Estimated 700 million tons of RuBisCO on Earth",
            
            function: "Catalyzes CO₂ fixation (carboxylase activity)",
            reaction: "RuBP + CO₂ → 2 × 3-PGA",
            
            structure: {
                form: "Large complex (holoenzyme)",
                subunits: "8 large subunits + 8 small subunits (form L₈S₈)",
                large: "Large subunit (L) ~55 kDa, encoded by chloroplast DNA (rbcL gene)",
                small: "Small subunit (S) ~15 kDa, encoded by nuclear DNA (rbcS gene)",
                assembly: "Requires chaperone proteins for proper folding",
                activeSite: "Located on large subunit"
            },
            
            slowEnzyme: {
                turnoverNumber: "~3-10 reactions per second (very slow for an enzyme)",
                comparison: "Catalase: ~40,000 reactions/second; RuBisCO: ~3/second",
                compensation: "Compensates for slowness by being very abundant"
            },
            
            dualFunction: {
                carboxylase: "RuBP + CO₂ → 2 × 3-PGA (desired reaction)",
                oxygenase: "RuBP + O₂ → 1 × 3-PGA + 1 × 2-phosphoglycolate (photorespiration)",
                problem: "Cannot distinguish well between CO₂ and O₂",
                consequence: "~25% of RuBisCO reactions use O₂ instead of CO₂ (wasteful photorespiration)"
            },
            
            regulation: {
                light: "Activated by light indirectly (pH and Mg²⁺ changes in stroma)",
                pH: "Stroma pH rises in light (~7.0 → ~8.0) - activates RuBisCO",
                Mg2plus: "Mg²⁺ moves from lumen to stroma in light - required for activity",
                carbamylation: "CO₂ binds to lysine residue (not the active site CO₂), activating enzyme",
                inhibitors: "Some sugar phosphates inhibit (feedback regulation)"
            },
            
            evolution: {
                ancient: "Evolved ~3.5 billion years ago when atmosphere had little O₂",
                context: "At that time, O₂/CO₂ selectivity wasn't important",
                modern: "Now atmosphere is 21% O₂, 0.04% CO₂ - suboptimal for RuBisCO",
                adaptation: "C4 and CAM plants evolved mechanisms to concentrate CO₂ around RuBisCO"
            },
            
            engineering: {
                goal: "Improve RuBisCO specificity for CO₂ over O₂, increase turnover rate",
                challenges: "Complex structure, assembly, regulation",
                progress: "Directed evolution, synthetic biology approaches being developed",
                potential: "Even 10% improvement could significantly boost crop yields"
            }
        },

        energyAccounting: {
            ATPperGlucose: "18 ATP consumed (12 from light reactions in photophosphorylation)",
            NADPHperGlucose: "12 NADPH consumed",
            efficiency: "About 35-40% of light energy captured in glucose bonds",
            comparison: "Cellular respiration recovers ~38 ATP from glucose (reverse process, but not exact)"
        },

        regulation: {
            lightActivation: "Calvin cycle enzymes activated in light (indirectly via stromal conditions)",
            ATPandNADPH: "Cycle rate depends on ATP and NADPH supply from light reactions",
            CO2concentration: "Higher CO₂ increases rate (substrate availability)",
            feedback: "Accumulation of products (sugars) can inhibit cycle",
            temperature: "Optimal temperature exists (enzyme kinetics)"
        },

        comparison: {
            toGlycolysis: {
                similarities: "Some reactions are reverse of glycolysis (e.g., G3P ↔ 3-PGA)",
                differences: [
                    "Calvin: builds glucose from CO₂ (anabolic)",
                    "Glycolysis: breaks glucose to pyruvate (catabolic)",
                    "Calvin: uses ATP and NADPH (consumes energy)",
                    "Glycolysis: produces ATP and NADH (releases energy)",
                    "Calvin: in chloroplast stroma",
                    "Glycolysis: in cytoplasm"
                ]
            }
        },

        examples: [
            {
                scenario: "Three CO₂ fixed",
                calculation: "3 CO₂ + 9 ATP + 6 NADPH → 1 G3P (net) + 9 ADP + 6 NADP⁺",
                outcome: "One G3P exits cycle; can be exported or used to make glucose"
            },
            {
                scenario: "Making one glucose",
                calculation: "6 CO₂ + 18 ATP + 12 NADPH → C₆H₁₂O₆ + 18 ADP + 12 NADP⁺",
                cycles: "Cycle turns 6 times to make 1 glucose"
            },
            {
                scenario: "Fast-growing plant",
                condition: "High light, high CO₂, optimal temperature",
                result: "Calvin cycle runs at maximum rate, producing glucose for growth"
            }
        ],

        applications: [
            "Engineering C4 traits into C3 crops (e.g., rice) to improve efficiency",
            "Improving RuBisCO efficiency through directed evolution",
            "Understanding photorespiration and strategies to minimize it",
            "Carbon capture technologies inspired by CO₂ fixation",
            "Optimizing greenhouse conditions (CO₂ enrichment) for crop production",
            "Algae cultivation for biofuels (maximizing carbon fixation)",
            "Synthetic biology - creating synthetic carbon fixation pathways",
            "Climate science - modeling plant CO₂ uptake"
        ],

        keyTakeaways: [
            "Calvin cycle fixes CO₂ into organic molecules using ATP and NADPH",
            "Three phases: carbon fixation, reduction, regeneration",
            "RuBisCO catalyzes carbon fixation (most abundant enzyme on Earth)",
            "Cycle turns 6× to make 1 glucose (from 2 G3P)",
            "Requires 18 ATP and 12 NADPH per glucose",
            "G3P is versatile building block for many biosynthetic pathways"
        ]
    };

    return content;
}

handlePhotosyntheticPigments(problem) {
    const content = {
        topic: "Photosynthetic Pigments",
        category: 'biochemistry',
        summary: "Photosynthetic pigments are molecules that absorb light energy for photosynthesis. Chlorophyll a is the primary pigment, while chlorophyll b and carotenoids are accessory pigments that broaden the absorption spectrum. Different pigments absorb different wavelengths, with chlorophyll absorbing red and blue light most strongly while reflecting green light, which is why plants appear green.",

        definition: "Pigments are colored molecules that selectively absorb certain wavelengths of light and reflect or transmit others",

        types: {
            chlorophylls: {
                description: "Green pigments essential for photosynthesis",
                
                chlorophyllA: {
                    name: "Chlorophyll a",
                    color: "Blue-green",
                    absorptionPeaks: {
                        peak1: "430 nm (blue-violet)",
                        peak2: "662 nm (red)"
                    },
                    reflectedLight: "Green (~500-550 nm)",
                    role: "Primary pigment; directly participates in light reactions",
                    location: "Reaction centers of PSI and PSII, and antenna complexes",
                    universality: "Present in ALL photosynthetic organisms (plants, algae, cyanobacteria)",
                    structure: {
                        porphyrinRing: "Flat, conjugated ring system with alternating single/double bonds",
                        centralAtom: "Mg²⁺ coordinated at center",
                        phytolTail: "Long hydrophobic hydrocarbon tail (C₂₀H₃₉)",
                        hydrophobic: "Tail anchors chlorophyll in thylakoid membrane",
                        conjugation: "Extended conjugated system allows electron delocalization → absorbs visible light"
                    },
                    chemistry: "C₅₅H₇₂O₅N₄Mg"
                },

                chlorophyllB: {
                    name: "Chlorophyll b",
                    color: "Yellow-green",
                    absorptionPeaks: {
                        peak1: "453 nm (blue)",
                        peak2: "642 nm (red)"
                    },
                    reflectedLight: "Yellow-green (~530-560 nm)",
                    role: "Accessory pigment; transfers absorbed energy to chlorophyll a",
                    location: "Antenna complexes only (NOT in reaction centers)",
                    presence: "Plants and green algae (not in cyanobacteria)",
                    structuralDifference: "Has -CHO (aldehyde) group instead of -CH₃ (methyl) compared to chlorophyll a",
                    significance: "Slight structural difference causes different absorption spectrum",
                    ratio: "Typically chlorophyll a:b ratio is 3:1 in plants"
                },

                otherChlorophylls: {
                    chlorophyllC: "Found in some algae (diatoms, dinoflagellates)",
                    chlorophyllD: "Found in some cyanobacteria",
                    bacteriochlorophylls: "Found in photosynthetic bacteria; absorb infrared light"
                }
            },

            carotenoids: {
                description: "Orange, yellow, or red pigments; accessory pigments and photoprotectants",
                color: "Orange to yellow (absorb blue-green light, reflect orange/yellow)",
                
                carotenes: {
                    type: "Pure hydrocarbons (only C and H)",
                    color: "Orange",
                    examples: "β-carotene (beta-carotene), α-carotene",
                    absorptionPeak: "~450 nm (blue)",
                    structure: "Long chain of conjugated double bonds (polyene)",
                    role: [
                        "Accessory pigment - absorbs blue light, transfers energy to chlorophyll",
                        "Photoprotection - absorbs excess light energy, dissipates as heat",
                        "Antioxidant - quenches reactive oxygen species"
                    ],
                    betaCarotene: {
                        description: "Most common carotene",
                        formula: "C₄₀H₅₆",
                        human: "Precursor to vitamin A in humans (provitamin A)",
                        sources: "Carrots, sweet potatoes, pumpkins"
                    }
                },

                xanthophylls: {
                    type: "Oxygenated carotenoids (contain oxygen atoms)",
                    color: "Yellow",
                    examples: "Lutein, zeaxanthin, violaxanthin, neoxanthin",
                    oxygenGroups: "Contain -OH (hydroxyl) or =O (carbonyl) groups",
                    absorptionPeak: "400-500 nm (blue to blue-green)",
                    role: [
                        "Accessory pigments",
                        "Photoprotection (xanthophyll cycle)",
                        "Structural components of light-harvesting complexes"
                    ],
                    xanthophyllCycle: {
                        description: "Violaxanthin ⇌ Zeaxanthin conversion",
                        highLight: "Violaxanthin → Zeaxanthin (dissipates excess energy as heat)",
                        lowLight: "Zeaxanthin → Violaxanthin (maximizes light harvesting)",
                        purpose: "Protects photosystems from photo-oxidative damage"
                    }
                },

                universality: "Present in all photosynthetic organisms",
                visibility: "Usually masked by chlorophyll; become visible in fall when chlorophyll breaks down"
            }
        },

        lightAbsorption: {
            visibleSpectrum: {
                range: "400-700 nm (violet to red)",
                colors: "Violet (400) → Blue (450) → Green (550) → Yellow (580) → Orange (620) → Red (700)"
            },

            absorptionSpectrum: {
                definition: "Graph showing how much light a pigment absorbs at each wavelength",
                measurement: "Use spectrophotometer to measure light absorption",
                chlorophyllAspectrum: "Two peaks: 430 nm (blue) and 662 nm (red); minimum ~550 nm (green)",
                chlorophyllBspectrum: "Two peaks: 453 nm (blue) and 642 nm (red)",
                carotenoidsSpectrum: "Peak ~450 nm (blue); absorb little red light",
                interpretation: "Peaks indicate wavelengths absorbed most strongly"
            },

            actionSpectrum: {
                definition: "Graph showing photosynthetic rate at each wavelength",
                measurement: "Measure O₂ production or CO₂ uptake at different wavelengths",
                result: "Peaks at red (~660 nm) and blue (~450 nm); low at green (~550 nm)",
                comparison: "Matches combined absorption spectra of all pigments",
                significance: "Proves that absorbed light drives photosynthesis"
            },

            engelmannExperiment: {
                scientist: "Theodor Engelmann (1882)",
                method: "Illuminated algae (Spirogyra) with spectrum; added aerobic bacteria",
                observation: "Bacteria clustered in red and blue regions (most O₂ produced there)",
                conclusion: "Red and blue light most effective for photosynthesis",
                brilliance: "Used bacteria as living O₂ sensors (no electronic sensors existed)",
                significance: "First action spectrum; showed light absorption → photosynthesis"
            }
        },

        whyPlantsGreen: {
            absorption: "Chlorophyll absorbs red and blue light strongly",
            reflection: "Chlorophyll reflects/transmits green light (~500-550 nm)",
            perception: "We see reflected light → plants appear green",
            efficiency: "Green light least useful for photosynthesis (not absorbed)",
            question: "Why don't plants absorb green light too?",
            answers: [
                "Evolutionary: Green light penetrates water well; absorbed by organisms below",
                "Physical: Molecular structure of chlorophyll determines absorption",
                "Practical: Absorbing ALL wavelengths would overheat leaves"
            ]
        },

        antennaComplex: {
            name: "Light-harvesting complex (LHC) or antenna complex",
            structure: "Hundreds of pigment molecules surrounding reaction center",
            pigments: "Chlorophyll a, chlorophyll b, carotenoids",
            arrangement: "Pigments organized in precise 3D structure in thylakoid membrane",
            function: [
                "Absorb photons across broad wavelength range",
                "Transfer absorbed energy to reaction center chlorophyll",
                "Increase effective absorption 'cross-section'"
            ],
            energyTransfer: {
                mechanism: "Resonance energy transfer (Förster resonance energy transfer)",
                notElectrons: "Energy transferred, NOT electrons themselves",
                speed: "Picoseconds (10⁻¹² seconds)",
                efficiency: ">90% efficiency in energy transfer",
                direction: "Energy 'funnels' from accessory pigments → chlorophyll a → reaction center"
            },
            analogy: "Like a satellite dish (antenna) focusing signals to a receiver (reaction center)",
            advantage: "Increases probability of photon capture; uses wider range of wavelengths"
        },

        photoprotection: {
            problem: "Excess light can generate reactive oxygen species (ROS) and damage photosystems",
            
            carotenoidRole: [
                "Absorb excess light and dissipate energy as heat",
                "Quench triplet chlorophyll (prevents ROS formation)",
                "Scavenge ROS (singlet oxygen, superoxide) - antioxidant function",
                "Protect chlorophyll from photo-oxidation"
            ],

            NPQ: {
                name: "Non-photochemical quenching",
                definition: "Dissipation of excess light energy as heat instead of using it for photochemistry",
                mechanism: "Xanthophyll cycle converts violaxanthin → zeaxanthin",
                zeaxanthin: "Binds to light-harvesting complexes, dissipates energy as heat",
                trigger: "High light intensity + acidic lumen pH",
                benefit: "Prevents photoinhibition and photo-oxidative damage",
                measurement: "Detected by chlorophyll fluorescence"
            },

            photoinhibition: "Damage to PSII under excess light (D1 protein degradation)",
            repair: "Constant degradation and re-synthesis of D1 protein"
        },

        seasonalChanges: {
            springSummer: {
                chlorophyll: "High chlorophyll production → leaves green",
                photosynthesis: "Active photosynthesis",
                carotenoids: "Present but masked by green chlorophyll"
            },

            fall: {
                trigger: "Shorter days, cooler temperatures",
                chlorophyllBreakdown: "Chlorophyll breaks down faster than produced",
                revealed: "Carotenoids (always present) become visible → orange/yellow colors",
                anthocyanins: {
                    description: "Red pigments synthesized in fall (NOT photosynthetic)",
                    function: "Photoprotection, attract animals, reclaim nutrients",
                    colors: "Red, purple (in some species)"
                },
                colorVariation: "Different tree species have different pigment compositions → variety of fall colors"
            },

            winter: "Leaves drop (deciduous trees); evergreens retain leaves but photosynthesis slows"
        },

        chromatography: {
            purpose: "Separate and identify pigments based on polarity",
            principle: "Differential movement in stationary phase (paper) vs mobile phase (solvent)",
            
            procedure: {
                extract: "Grind leaves with solvent (acetone or ethanol) to extract pigments",
                apply: "Apply concentrated pigment spot to chromatography paper",
                develop: "Solvent rises up paper by capillary action",
                separate: "Pigments move at different rates based on polarity",
                result: "Distinct colored bands"
            },

            separation: {
                order: "Most nonpolar (carotene) moves farthest; most polar (chlorophyll b) moves least",
                fastestToSlowest: "Carotene > Xanthophyll > Chlorophyll a > Chlorophyll b",
                Rf: "Retention factor = distance moved by pigment / distance moved by solvent",
                identification: "Each pigment has characteristic Rf value and color"
            },

            polarity: {
                carotene: "Nonpolar (pure hydrocarbon) → high Rf",
                xanthophyll: "Slightly polar (has -OH groups) → moderate Rf",
                chlorophyllA: "Moderately polar → lower Rf",
                chlorophyllB: "More polar than a (has -CHO) → lowest Rf"
            }
        },

        examples: [
            {
                pigment: "Chlorophyll a",
                absorption: "430 nm and 662 nm",
                role: "Primary pigment in reaction centers",
                color: "Blue-green"
            },
            {
                pigment: "β-carotene",
                absorption: "450 nm (blue)",
                role: "Accessory pigment and photoprotection",
                color: "Orange"
            },
            {
                pigment: "Zeaxanthin",
                absorption: "450 nm (blue)",
                role: "Photoprotection via xanthophyll cycle",
                color: "Yellow"
            }
        ],

        applications: [
            "Optimizing grow lights (use red and blue LEDs, not green)",
            "Understanding fall foliage and predicting peak colors",
            "Developing drought/stress-resistant crops (enhanced photoprotection)",
            "Remote sensing of vegetation health (chlorophyll fluorescence)",
            "Artificial photosynthesis - designing synthetic light-harvesting systems",
            "Food science - natural colorants from plant pigments",
            "Pharmaceutical industry - carotenoids as antioxidants, provitamin A"
        ],

        keyTakeaways: [
            "Multiple pigments absorb light across broad spectrum",
            "Chlorophyll a is primary; chlorophyll b and carotenoids are accessory",
            "Plants appear green because chlorophyll reflects green light",
            "Red and blue light most effective for photosynthesis",
            "Antenna complexes funnel energy to reaction centers",
            "Carotenoids provide photoprotection and antioxidant functions",
            "Fall colors result from chlorophyll breakdown revealing carotenoids"
        ]
    };

    return content;
}

handleChloroplastStructure(problem) {
    const content = {
        topic: "Chloroplast Structure and Function",
        category: 'cell_biology',
        summary: "Chloroplasts are double-membrane organelles where photosynthesis occurs. They contain an internal thylakoid membrane system organized into stacks called grana, surrounded by a fluid stroma. Light reactions occur in thylakoid membranes, while the Calvin cycle occurs in the stroma. Chloroplasts have their own DNA and evolved from ancient cyanobacteria through endosymbiosis.",

        classification: {
            organelleType: "Double-membrane organelle",
            kingdom: "Found in plants and algae",
            function: "Site of photosynthesis",
            evolution: "Derived from endosymbiotic cyanobacteria"
        },

        physicalCharacteristics: {
            size: "5-10 μm in diameter, 2-3 μm thick",
            shape: "Lens-shaped or ellipsoid (discoid)",
            number: "20-100 per mesophyll cell (varies by species and cell type)",
            distribution: "Most abundant in leaf mesophyll cells",
            color: "Green (due to chlorophyll)",
            mobility: "Can move within cell in response to light intensity"
        },

        membraneSystem: {
            overview: "Chloroplasts have THREE membrane systems: outer, inner, and thylakoid",

            outerMembrane: {
                properties: "Smooth, freely permeable",
                permeability: "Permeable to small molecules (<10 kDa) via porins",
                function: "Boundary; not selective barrier",
                proteins: "Porins allow passive diffusion",
                similarity: "Similar to mitochondrial outer membrane"
            },

            intermembraneSpace: {
                location: "Between outer and inner membranes",
                width: "~10-20 nm (narrow)",
                function: "Minimal; mainly structural",
                composition: "Aqueous, similar to cytosol"
            },

            innerMembrane: {
                properties: "Smooth, selectively permeable",
                permeability: "Requires specific transporters for molecules",
                function: "Regulates entry/exit of metabolites",
                transporters: [
                    "Triose phosphate translocator (exports G3P, imports Pᵢ)",
                    "Phosphate translocator (Pᵢ/triose-P exchanger)",
                    "Glucose-6-phosphate translocator",
                    "ATP/ADP translocator",
                    "Amino acid transporters"
                ],
                regulation: "Tightly controls metabolite flow",
                noETChere: "Does NOT contain electron transport chain (unlike mitochondrial inner membrane)"
            },

            thylakoidMembrane: {
                properties: "Highly folded, protein-rich",
                function: "Site of light-dependent reactions",
                surface: "Provides large surface area for photosystems",
                proteins: [
                    "Photosystem II complex",
                    "Cytochrome b₆f complex",
                    "Photosystem I complex",
                    "ATP synthase (CF₀CF₁)",
                    "Plastoquinone (mobile carrier)",
                    "Plastocyanin (mobile protein in lumen)"
                ],
                lipids: "~50% lipid, ~50% protein by mass",
                specialLipid: "High in galactolipids (not phospholipids)",
                pigments: "Chlorophyll a, chlorophyll b, carotenoids embedded",
                organization: "Asymmetric - different protein composition in grana vs stroma lamellae"
            }
        },

        internalCompartments: {
            thylakoidLumen: {
                location: "Interior space of thylakoid sacs",
                function: "Proton reservoir for ATP synthesis",
                pH: "~5 during light reactions (acidic due to H⁺ accumulation)",
                volume: "Small relative to stroma",
                proteins: "Plastocyanin, oxygen-evolving complex",
                significance: "High [H⁺] creates proton-motive force"
            },

            stroma: {
                location: "Fluid surrounding thylakoids",
                function: "Site of Calvin cycle (carbon fixation)",
                pH: "~8 during light reactions (basic)",
                composition: "Aqueous solution with high protein concentration",
                enzymes: "RuBisCO and all Calvin cycle enzymes",
                DNA: "Circular chloroplast DNA (cpDNA)",
                ribosomes: "70S ribosomes (like bacteria, not 80S like eukaryotes)",
                otherContents: [
                    "RNA",
                    "Starch granules (temporary storage)",
                    "Lipid droplets (plastoglobuli)",
                    "Various metabolites"
                ],
                significance: "Site of 'dark reactions' (Calvin cycle)"
            }
        },

        thylakoidOrganization: {
            granaThylakoids: {
                name: "Grana (singular: granum)",
                structure: "Stacks of flattened thylakoid discs",
                stackSize: "10-20 thylakoids per granum (varies)",
                location: "Interior of chloroplast, concentrated",
                function: "Maximize light-harvesting surface area",
                proteinEnrichment: [
                    "High PSII concentration",
                    "Light-harvesting complexes (LHCII)",
                    "More antenna pigments"
                ],
                advantage: "Efficient light capture in stacked region"
            },

            stromaLamellae: {
                name: "Stroma lamellae (or stroma thylakoids)",
                structure: "Unstacked, single thylakoid membranes",
                location: "Connect grana, extend into stroma",
                function: "Connect grana stacks, distribute proteins, allow lateral movement",
                proteinEnrichment: [
                    "High PSI concentration",
                    "ATP synthase (CF₀CF₁)",
                    "More cyclic electron flow activity"
                ],
                spacing: "Provides space for ATP synthase (large CF₁ head protrudes into stroma)"
            },

            granaMargins: {
                location: "Outer edges of grana stacks",
                proteinEnrichment: "Mixed PSI, PSII, ATP synthase",
                function: "Transition zone"
            },

            lateralHeterogeneity: "Different thylakoid regions have different protein compositions (functional specialization)"
        },

        chloroplastDNA: {
            type: "Circular, double-stranded DNA",
            size: "~120-200 kilobase pairs (varies by species)",
            comparison: "Much smaller than nuclear genome (millions to billions bp)",
            copyNumber: "Multiple copies per chloroplast (10-100+)",
            totalPerCell: "Hundreds to thousands of cpDNA copies per cell",

            encodedGenes: {
                total: "~100-120 genes",
                photosynthesis: [
                    "Some photosystem I and II subunits",
                    "Some cytochrome b₆f subunits",
                    "ATP synthase subunits (CF₀, some CF₁)",
                    "rbcL gene (large subunit of RuBisCO)"
                ],
                expression: [
                    "Ribosomal RNAs (rRNA) for 70S ribosomes",
                    "Transfer RNAs (tRNA)",
                    "RNA polymerase subunits"
                ],
                other: "Some ribosomal proteins"
            },

            nuclearGenes: {
                majority: "Most chloroplast proteins encoded by nuclear genome (thousands of genes)",
                import: "Proteins synthesized in cytoplasm, imported into chloroplast via TOC/TIC complexes",
                examples: [
                    "rbcS gene (small subunit of RuBisCO) - nuclear",
                    "Most light-harvesting complex proteins - nuclear",
                    "Most Calvin cycle enzymes - nuclear",
                    "Chloroplast chaperones - nuclear"
                ],
                control: "Nucleus controls most chloroplast functions"
            },

            inheritance: {
                maternal: "Usually maternally inherited (from egg, not sperm) in most plants",
                reason: "Sperm contributes little cytoplasm during fertilization",
                exception: "Some plants show biparental or paternal inheritance"
            }
        },

        ribosomes: {
            type: "70S ribosomes",
            size: "Smaller than cytoplasmic 80S ribosomes",
            similarity: "Same size as bacterial ribosomes (evidence for endosymbiosis)",
            rRNA: "Encoded by chloroplast DNA",
            function: "Translate cpDNA-encoded genes within chloroplast",
            antibiotics: "Sensitive to antibiotics that target bacterial ribosomes (e.g., chloramphenicol)"
        },

        endosymbioticOrigin: {
            theory: "Chloroplasts evolved from free-living cyanobacteria engulfed by ancestral eukaryotic cell",
            timeframe: "~1.5 billion years ago",

            evidence: [
                "Double membrane (inner = original bacterial membrane, outer = from engulfment vesicle)",
                "Own circular DNA (like bacteria)",
                "70S ribosomes (like bacteria, not 80S like eukaryotes)",
                "Divide by binary fission (like bacteria, independent of cell division)",
                "Similar size to bacteria (1-10 μm)",
                "rRNA sequence similarity to cyanobacteria",
                "Thylakoid membranes similar to cyanobacterial membranes"
            ],

            primaryEndosymbiosis: "Cyanobacterium engulfed by eukaryote → plant/algae chloroplasts",
            secondaryEndosymbiosis: "Some algae engulfed by other eukaryotes → more complex plastids (e.g., in some protists)",

            geneTransfer: {
                process: "Over time, many genes transferred from chloroplast to nucleus",
                original: "Ancestral cyanobacterium likely had ~3000 genes",
                current: "Modern chloroplast DNA has ~100-120 genes",
                transferred: "Most genes now in nuclear genome; products imported back to chloroplast",
                advantage: "Centralized genetic control"
            }
        },

        compartmentalization: {
            advantages: [
                "Separates light reactions (thylakoid) from Calvin cycle (stroma) spatially",
                "Allows proton gradient formation (lumen vs stroma)",
                "Protects light-sensitive molecules from cytoplasmic enzymes",
                "Concentrates enzymes and substrates for efficiency",
                "Enables regulation of different pathways independently"
            ],

            coordination: {
                lightDark: "Products of light reactions (ATP, NADPH) immediately available to Calvin cycle in stroma",
                recycling: "ADP, Pᵢ, NADP⁺ recycled from stroma back to thylakoid reactions",
                integration: "Both processes occur simultaneously in light"
            }
        },

        comparison: {
            toMitochondria: {
                similarities: [
                    "Both double-membrane organelles",
                    "Both have own DNA and ribosomes",
                    "Both evolved by endosymbiosis",
                    "Both have electron transport chains",
                    "Both use chemiosmosis to make ATP",
                    "Both semi-autonomous"
                ],
                differences: [
                    "Chloroplast: 3 membranes (outer, inner, thylakoid); Mitochondria: 2 membranes",
                    "Chloroplast: photosynthesis (energy capture); Mitochondria: respiration (energy release)",
                    "Chloroplast: light energy input; Mitochondria: chemical energy input",
                    "Chloroplast: produces O₂; Mitochondria: consumes O₂",
                    "Chloroplast: fixes CO₂; Mitochondria: releases CO₂",
                    "Chloroplast: in plants/algae; Mitochondria: in all eukaryotes"
                ]
            }
        },

        examples: [
            {
                cellType: "Palisade mesophyll cell",
                chloroplastNumber: "30-50 per cell",
                location: "Upper leaf (below epidermis)",
                function: "Primary site of photosynthesis"
            },
            {
                cellType: "Spongy mesophyll cell",
                chloroplastNumber: "10-30 per cell",
                location: "Lower leaf",
                function: "Photosynthesis and gas exchange"
            },
            {
                cellType: "Guard cell",
                chloroplastNumber: "3-10 per cell",
                location: "Surrounding stomata",
                function: "Photosynthesis (provides ATP for stomatal opening)"
            }
        ],

        applications: [
            "Understanding photosynthetic efficiency for crop improvement",
            "Chloroplast transformation (genetic engineering via cpDNA)",
            "Producing pharmaceuticals in chloroplasts (bioreactors)",
            "Studying endosymbiotic evolution",
            "Developing artificial photosynthetic compartments for solar fuels",
            "Improving stress tolerance in plants (drought, heat)",
            "Enhancing carbon sequestration through chloroplast engineering"
        ],

        keyTakeaways: [
            "Chloroplasts have three membrane systems: outer, inner, thylakoid",
            "Light reactions occur in thylakoid membranes; Calvin cycle in stroma",
            "Grana (stacked thylakoids) maximize light-harvesting area",
            "Chloroplasts have own DNA and 70S ribosomes (like bacteria)",
            "Evolved from cyanobacteria via endosymbiosis ~1.5 billion years ago",
            "Compartmentalization allows efficient, regulated photosynthesis"
        ]
    };

    return content;
}


handleAlternativePathways(problem) {
    const content = {
        topic: "Alternative Photosynthetic Pathways: C4 and CAM",
        category: 'adaptations',
        summary: "C4 and CAM photosynthesis are evolutionary adaptations that minimize photorespiration and improve water use efficiency in hot, dry environments. C4 plants spatially separate initial CO₂ fixation (mesophyll cells) from the Calvin cycle (bundle sheath cells), while CAM plants temporally separate these processes (CO₂ fixation at night, Calvin cycle during day). Both concentrate CO₂ around RuBisCO, improving efficiency under stress conditions.",

        photorespiration: {
            definition: "Wasteful pathway that occurs when RuBisCO uses O₂ instead of CO₂",
            
            problem: {
                RuBisCOdualFunction: "RuBisCO can catalyze reaction with O₂ OR CO₂",
                carboxylase: "RuBP + CO₂ → 2 × 3-PGA (desired, Calvin cycle)",
                oxygenase: "RuBP + O₂ → 1 × 3-PGA + 1 × 2-phosphoglycolate (photorespiration)",
                competition: "O₂ and CO₂ compete for RuBisCO active site"
            },

            conditions: {
                favored: "High O₂, low CO₂, high temperature",
                hotDay: "Stomata close to conserve water → CO₂ depleted, O₂ accumulates",
                temperature: "High temp increases O₂ solubility relative to CO₂, favors oxygenase activity"
            },

            consequences: {
                2phosphoglycolate: "2-phosphoglycolate is toxic, must be recycled",
                recyclingPathway: "Photorespiratory pathway (peroxisomes, mitochondria involved)",
                cost: "Consumes ATP, releases CO₂, produces NH₃ (must be re-fixed)",
                loss: "No useful products; 25-50% reduction in photosynthetic efficiency in C3 plants",
                equation: "2-phosphoglycolate + O₂ → 3-PGA + CO₂ + NH₃ (simplified)"
            },

            evolutionaryContext: {
                origin: "RuBisCO evolved ~3.5 billion years ago when atmosphere had little O₂ (<1%)",
                historical: "O₂/CO₂ selectivity wasn't important then",
                modernProblem: "Now atmosphere is 21% O₂, 0.04% CO₂ - very unfavorable ratio",
                adaptation: "C4 and CAM pathways evolved to cope with this problem"
            }
        },

        C3Photosynthesis: {
            name: "C3 pathway (standard Calvin cycle)",
            definition: "Photosynthesis using only Calvin cycle for CO₂ fixation",
            
            firstProduct: "3-phosphoglycerate (3-PGA) - 3-carbon compound",
            etymology: "Called C3 because first stable product has 3 carbons",

            process: {
                CO2fixation: "CO₂ + RuBP → 2 × 3-PGA (catalyzed by RuBisCO)",
                location: "Mesophyll cells",
                cellTypes: "Single cell type performs all photosynthesis"
            },

            leafAnatomy: {
                mesophyll: "Homogeneous; all mesophyll cells similar",
                bundleSheath: "Present but not specialized for photosynthesis",
                noKranz: "No Kranz anatomy"
            },

            advantages: [
                "Efficient under cool, moist conditions",
                "Lower energy cost than C4/CAM (no extra ATP for CO₂ concentration)",
                "Simpler mechanism (no additional enzymes or anatomy)",
                "Faster initial CO₂ fixation rate (when CO₂ not limiting)"
            ],

            disadvantages: [
                "Significant photorespiration under hot, dry conditions (25-50% loss)",
                "Stomata must open during day (high water loss)",
                "Inefficient at high temperatures and low CO₂",
                "Competitive disadvantage in hot, sunny environments"
            ],

            examples: "Wheat, rice, soybean, most trees, most temperate plants (~85% of plant species)",
            distribution: "Dominant in cool, moist climates (temperate regions)",
            crops: "Most major temperate crops (wheat, rice, barley, potato, soybean)"
        },

        C4Photosynthesis: {
            name: "C4 pathway",
            definition: "Photosynthesis with spatial separation: initial CO₂ fixation in mesophyll, Calvin cycle in bundle sheath",

            firstProduct: "Oxaloacetate (4-carbon compound)",
            etymology: "Called C4 because first stable product has 4 carbons",

            mechanism: {
                overview: "Two-stage process in two different cell types",

                stage1_Mesophyll: {
                    location: "Mesophyll cells (outer layer)",
                    enzyme: "PEP carboxylase (phosphoenolpyruvate carboxylase)",
                    reaction: "CO₂ + PEP (C₃) → Oxaloacetate (C₄)",
                    conversion: "Oxaloacetate → Malate or Aspartate (C₄ compounds)",
                    advantage: "PEP carboxylase has NO oxygenase activity, high affinity for CO₂",
                    noPhotorespiration: "PEP carboxylase cannot use O₂"
                },

                stage2_BundleSheath: {
                    location: "Bundle sheath cells (inner layer, surrounding vein)",
                    transport: "4-carbon compound (malate/aspartate) moves from mesophyll to bundle sheath",
                    decarboxylation: "4-carbon compound releases CO₂ → 3-carbon compound",
                    CO2concentration: "CO₂ concentration around RuBisCO is 10-120× higher than atmosphere",
                    calvinCycle: "CO₂ enters Calvin cycle normally (RuBisCO + RuBP → 2 × 3-PGA)",
                    minimizedPhotorespiration: "High CO₂/O₂ ratio suppresses RuBisCO oxygenase activity"
                },

                stage3_Recycling: {
                    return: "3-carbon compound returns to mesophyll",
                    regeneration: "Regenerated to PEP using ATP",
                    energyCost: "2 extra ATP per CO₂ for PEP regeneration (total cost: C4 uses ~30 ATP per glucose vs C3 uses 18 ATP)"
                }
            },

            kranzAnatomy: {
                name: "Kranz anatomy (wreath-like arrangement)",
                structure: {
                    mesophyllCells: "Outer layer, loosely arranged",
                    bundleSheath: "Inner layer, tightly surrounding vascular bundle (vein)",
                    wreath: "Bundle sheath forms 'wreath' around vein"
                },
                specialization: {
                    mesophyll: "Thin-walled, many chloroplasts, initial CO₂ fixation",
                    bundleSheath: "Thick-walled, many chloroplasts, Calvin cycle, often suberin layer (gas-tight)"
                },
                chloroplasts: {
                    mesophyll: "Contain PEP carboxylase, fewer grana",
                    bundleSheath: "Contain RuBisCO, more grana (or reduced grana depending on subtype)"
                },
                requirement: "Essential for C4 function; must have both cell types"
            },

            PEPcarboxylase: {
                enzyme: "Phosphoenolpyruvate carboxylase",
                substrate: "PEP (phosphoenolpyruvate) - 3-carbon compound",
                product: "Oxaloacetate - 4-carbon compound",
                advantages: [
                    "High affinity for CO₂ (works even at low CO₂ concentrations)",
                    "NO oxygenase activity (cannot use O₂)",
                    "Not inhibited by O₂",
                    "Faster than RuBisCO"
                ],
                location: "Mesophyll cell cytoplasm (not in chloroplast)",
                regulation: "Inhibited by malate (feedback), activated by light indirectly"
            },

            advantages: [
                "Minimal photorespiration (CO₂ concentrated around RuBisCO)",
                "Higher photosynthetic rate at high temperatures",
                "Better water use efficiency (stomata can be partially closed, less water loss per CO₂ fixed)",
                "Competitive advantage in hot, sunny environments",
                "Higher productivity in tropical/subtropical climates"
            ],

            disadvantages: [
                "Higher energy cost (extra 2 ATP per CO₂ for concentrating mechanism)",
                "Requires Kranz anatomy (complex developmental program)",
                "Less efficient in cool, low-light conditions (energy cost not justified)",
                "Cannot perform C4 photosynthesis at low temperatures (enzymes not active)"
            ],

            examples: "Corn (maize), sugarcane, sorghum, millet, many tropical grasses, amaranth",
            distribution: "Dominant in tropical/subtropical grasslands, savannas, deserts",
            crops: "Corn, sugarcane, sorghum - highly productive in warm climates",
            ecology: "C4 grasses dominate tropical grasslands (e.g., African savannas)",

            evolution: {
                independent: "Evolved independently >60 times in different plant families",
                timing: "Most C4 lineages evolved 25-30 million years ago (when atmospheric CO₂ dropped)",
                trigger: "Declining atmospheric CO₂ and increasing O₂ favored C4",
                convergent: "Multiple evolutionary pathways to same functional outcome"
            },

            subtypes: {
                NADPmalic: "Malate decarboxylated by NADP-malic enzyme (most common)",
                NADmalic: "Malate decarboxylated by NAD-malic enzyme",
                PCK: "Aspartate decarboxylated by PEP carboxykinase",
                note: "Differ in decarboxylation enzyme and location (chloroplast vs mitochondria)"
            }
        },

        CAMPhotosynthesis: {
            name: "CAM (Crassulacean Acid Metabolism)",
            etymology: "Named after Crassulaceae family (succulents) where first discovered",
            definition: "Photosynthesis with temporal separation: CO₂ fixation at night, Calvin cycle during day",

            mechanism: {
                overview: "Single cell performs both processes at different times",

                night: {
                    stomataOpen: "Stomata open (cooler, less water loss)",
                    CO2uptake: "CO₂ enters from atmosphere",
                    enzyme: "PEP carboxylase (same enzyme as C4)",
                    reaction: "CO₂ + PEP → Oxaloacetate → Malate",
                    storage: "Malate stored in large vacuole as malic acid",
                    accumulation: "Vacuole becomes acidic (malic acid accumulates)",
                    noCalvinCycle: "Calvin cycle inactive (no ATP/NADPH from light reactions)"
                },

                day: {
                    stomataClosed: "Stomata CLOSED (prevent water loss)",
                    malateRelease: "Malate released from vacuole",
                    decarboxylation: "Malate → CO₂ + 3-carbon compound",
                    CO2concentration: "CO₂ concentration inside cell increases (10-60× atmospheric)",
                    calvinCycle: "CO₂ enters Calvin cycle (light reactions provide ATP/NADPH)",
                    minimizedPhotorespiration: "High internal CO₂ suppresses photorespiration"
                }
            },

            temporalSeparation: {
                night: "Carbon fixation (PEP carboxylase)",
                day: "Calvin cycle (RuBisCO)",
                advantage: "Same cell does both; no Kranz anatomy needed",
                tradeoff: "Must store CO₂ as organic acid (limits carbon fixation capacity)"
            },

            acidFluctuation: {
                night: "Vacuole pH drops (malic acid accumulates, can taste sour)",
                day: "Vacuole pH rises (malic acid consumed)",
                measurement: "Titratable acidity varies >10-fold between night and day",
                demonstration: "CAM plant leaves taste sour in morning, less sour in evening"
            },

            advantages: [
                "Extreme water use efficiency (50× better than C3, 5× better than C4)",
                "Stomata open at night (cooler, higher humidity, less water loss)",
                "Minimal photorespiration (CO₂ concentrated during day)",
                "Survival in very dry environments (deserts, epiphytes)",
                "Can tolerate drought for extended periods"
            ],

            disadvantages: [
                "Slow growth rate (limited by vacuolar storage capacity for malate)",
                "High energy cost (ATP for PEP regeneration + Calvin cycle)",
                "Limited by malate storage (vacuole can only hold so much)",
                "Lower maximum photosynthetic rate than C3 or C4",
                "Not competitive in well-watered environments"
            ],

            examples: "Cacti, pineapple, agave, jade plant, Kalanchoe, many succulents, some orchids",
            distribution: "Deserts, arid regions, epiphytes (on tree branches), rocky habitats",
            diversity: "~6% of vascular plant species; 343 genera across 35 families",

            flexibility: {
                facultativeCAM: "Some plants can switch between C3 and CAM depending on water availability",
                induced: "Water stress induces CAM in some species",
                example: "Mesembryanthemum crystallinum switches from C3 to CAM under salt/drought stress"
            },

            agriculture: {
                crops: "Pineapple, agave (for tequila, biofuel)",
                potential: "CAM crops for marginal lands (too dry for C3/C4)",
                research: "Engineering CAM into C3 crops for drought tolerance"
            }
        },

        comparison: {
            table: {
                headers: ["Feature", "C3", "C4", "CAM"],
                rows: [
                    ["CO₂ fixation enzyme (initial)", "RuBisCO", "PEP carboxylase", "PEP carboxylase"],
                    ["First stable product", "3-PGA (C₃)", "Oxaloacetate (C₄)", "Malate (C₄)"],
                    ["Cell types", "One (mesophyll)", "Two (mesophyll + bundle sheath)", "One"],
                    ["Anatomy", "Homogeneous", "Kranz anatomy", "Large vacuoles"],
                    ["Separation", "None", "Spatial (2 cells)", "Temporal (night/day)"],
                    ["Photorespiration", "Significant (25-50%)", "Minimal (<2%)", "Minimal"],
                    ["Stomata opening", "Day", "Day (partially closed)", "Night"],
                    ["Water use efficiency", "Low", "Medium-High", "Very High"],
                    ["Energy cost (ATP/glucose)", "18", "30", "~30-36"],
                    ["Optimal climate", "Cool, moist", "Hot, sunny", "Hot, arid"],
                    ["Growth rate", "Variable", "Fast (warm)", "Slow"],
                    ["Examples", "Wheat, rice, oak", "Corn, sugarcane", "Cacti, pineapple"],
                    ["% of plant species", "~85%", "~3%", "~6%"]
                ]
            },

            strategicAdaptation: {
                C3: "Generalist - works well in moderate conditions",
                C4: "Specialist - optimized for hot, sunny environments",
                CAM: "Extremophile - survival in driest environments"
            },

            noClearWinner: "Each pathway advantageous in different environments; tradeoffs exist",
            
            geographicDistribution: {
                C3: "Temperate, boreal, tropical understory",
                C4: "Tropical/subtropical grasslands, disturbed habitats",
                CAM: "Deserts, semi-arid, epiphytic"
            }
        },

        evolutionarySignificance: {
            atmosphericChange: "C4 and CAM evolved as atmospheric CO₂ declined from ~1000 ppm (65 MYA) to ~200 ppm (20 MYA)",
            triggeringConditions: "Low CO₂ + high O₂ → severe photorespiration → selection for CO₂-concentrating mechanisms",
            timing: "Most C4 lineages: 25-32 MYA; CAM: various times, oldest ~60 MYA",
            frequency: "C4 evolved independently >60 times; CAM >30 times (convergent evolution)",
            success: "C4 grasses rapidly diversified and now dominate ~25% of terrestrial primary productivity",
            future: "Rising CO₂ (400+ ppm) may favor C3 plants again (but temperature and water also matter)"
        },

        applications: [
            "Engineering C4 traits into C3 rice to improve yield and drought tolerance (ongoing research)",
            "Developing CAM crops for marginal lands unsuitable for C3/C4 agriculture",
            "Understanding climate change impacts on plant distribution (C3 vs C4 vs CAM ranges)",
            "Selecting appropriate crops for different climates and irrigation availability",
            "Bioenergy: C4 crops (sugarcane, switchgrass) for high-productivity biomass",
            "Carbon sequestration: C4 grasslands store carbon efficiently in soils",
            "Predicting ecosystem responses to changing CO₂ and temperature",
            "Optimizing crop management (irrigation, fertilization) based on photosynthetic pathway"
        ],

        keyTakeaways: [
            "C3 is standard pathway; C4 and CAM are adaptations to minimize photorespiration",
            "C4: spatial separation (mesophyll fixes CO₂, bundle sheath does Calvin cycle)",
            "CAM: temporal separation (night fixes CO₂, day does Calvin cycle)",
            "Both C4 and CAM concentrate CO₂ around RuBisCO, suppressing photorespiration",
            "C4 and CAM trade higher energy cost for better efficiency in hot/dry conditions",
            "Each pathway is advantageous in different environments (no universal 'best')",
            "Convergent evolution: multiple independent origins of C4 and CAM"
        ]
    };

    return content;
}

handleEnvironmentalFactors(problem) {
    const content = {
        topic: "Environmental Factors Affecting Photosynthesis",
        category: 'physiology',
        summary: "Photosynthetic rate is influenced by multiple environmental factors including light intensity, CO₂ concentration, temperature, and water availability. According to the law of limiting factors (Blackman, 1905), the rate is determined by the factor in shortest supply. Understanding these factors is crucial for agriculture, ecology, and predicting plant responses to climate change.",

        limitingFactorPrinciple: {
            law: "Law of limiting factors (Blackman, 1905)",
            statement: "When a process depends on multiple factors, the rate is limited by the factor in shortest supply",
            application: "Only one factor is limiting at a time; improving non-limiting factors won't increase rate",
            example: "If light is very low, increasing CO₂ won't help (light is limiting)",
            multipleFactors: "Optimal photosynthesis requires optimal levels of ALL factors simultaneously",
            interaction: "Factors interact: optimal temperature depends on light intensity and CO₂ concentration"
        },

        lightIntensity: {
            overview: "Light provides energy for photosynthesis; rate increases with intensity until saturation",

            relationship: {
                lowLight: "Linear increase in rate with intensity (light is limiting)",
                moderateLight: "Rate begins to plateau (other factors becoming limiting)",
                saturation: "Light saturation point - further increase doesn't increase rate",
                veryhighLight: "Can cause photoinhibition (damage to PSII)"
            },

            compensationPoint: {
                definition: "Light intensity where photosynthesis = cellular respiration",
                netCO2: "Zero net CO₂ exchange",
                meaning: "Below compensation point: net CO₂ release; Above: net CO₂ uptake",
                value: "Typically 1-2% of full sunlight for C3 plants",
                variation: {
                    sunPlants: "Higher compensation point (~10-20 μmol photons m⁻² s⁻¹)",
                    shadePlants: "Lower compensation point (~1-5 μmol photons m⁻² s⁻¹)",
                    CAMplants: "Very low (open stomata at night, different dynamics)"
                }
            },

            saturationPoint: {
                definition: "Light intensity beyond which photosynthetic rate plateaus",
                cause: "Other factors (CO₂, enzyme capacity) become limiting",
                value: {
                    shadePlants: "~25% of full sunlight (~500 μmol photons m⁻² s⁻¹)",
                    sunPlants: "~100% of full sunlight (~2000 μmol photons m⁻² s⁻¹)",
                    C4plants: "Higher than C3 (can utilize more intense light)"
                },
                beyondSaturation: "Excess light can cause photo-oxidative damage (photoinhibition)"
            },

            photoinhibition: {
                definition: "Reduction in photosynthetic capacity caused by excess light",
                mechanism: "Over-excitation of PSII → reactive oxygen species → D1 protein damage",
                symptoms: "Decreased quantum yield, chlorophyll bleaching, reduced growth",
                protection: [
                    "Non-photochemical quenching (NPQ) - dissipate excess energy as heat",
                    "Xanthophyll cycle (violaxanthin → zeaxanthin)",
                    "Carotenoid photoprotection",
                    "State transitions - redistribute energy between PSI and PSII"
                ],
                repair: "D1 protein constantly degraded and re-synthesized (energy cost)",
                avoidance: "Leaf movement, chloroplast movement within cells"
            },

            sunVsShadeAdaptation: {
                sunPlants: {
                    characteristics: "High light saturation point, high maximum rate, thick leaves",
                    examples: "Crops in open fields, desert plants, canopy trees",
                    disadvantage: "Inefficient at low light (high respiration, low photosynthesis)"
                },
                shadePlants: {
                    characteristics: "Low light saturation point, low maximum rate, thin leaves, more chlorophyll",
                    examples: "Forest understory plants, houseplants",
                    advantage: "Efficient at low light (low compensation point)",
                    disadvantage: "Cannot handle high light (photoinhibition)"
                },
                plasticity: "Some plants can acclimate (sun leaves vs shade leaves on same tree)"
            },

            wavelength: {
                mostEffective: "Red (~660 nm) and blue (~450 nm) - absorbed by chlorophyll",
                leastEffective: "Green (~550 nm) - reflected/transmitted",
                farRed: "~700 nm - drives PSI, less effective alone",
                application: "LED grow lights use red + blue LEDs for energy efficiency (no green)"
            },

            measurement: "Photosynthetic photon flux density (PPFD) - μmol photons m⁻² s⁻¹ in 400-700 nm range"
        },

        CO2Concentration: {
            overview: "CO₂ is substrate for Calvin cycle; rate increases with concentration until enzyme saturation",

            atmospheric: {
                current: "~420 ppm (0.042%) as of 2024",
                preindustrial: "~280 ppm (before 1800)",
                historical: "Was much higher millions of years ago (>1000 ppm)",
                rising: "Increasing ~2.5 ppm/year due to fossil fuel combustion and deforestation"
            },

            relationship: {
                lowCO2: "CO₂ is limiting; rate increases steeply with concentration",
                atmospheric: "At 420 ppm, C3 plants are often CO₂-limited under high light",
                enrichment: "Raising to 800-1200 ppm can increase rate significantly",
                saturation: "Eventually RuBisCO or light becomes limiting",
                veryhighCO2: "Stomata may close partially (reduce water loss)"
            },

            limitationInNature: {
                C3plants: "Often CO₂-limited on sunny days (stomata limit diffusion)",
                C4plants: "Rarely CO₂-limited (concentrate CO₂ internally)",
                CAMplants: "CO₂-limited by storage capacity (vacuole), not atmospheric conc."
            },

            CO2enrichment: {
                greenhouse: "Commercial greenhouses inject CO₂ (800-1200 ppm)",
                benefits: {
                    C3crops: "20-50% increase in photosynthesis and yield",
                    C4crops: "5-10% increase (less responsive)",
                    waterUseEfficiency: "Stomata partially close, less water loss per CO₂ fixed"
                },
                crops: "Tomatoes, cucumbers, lettuce, strawberries benefit greatly",
                cost: "Must balance CO₂ cost with yield increase",
                ventilation: "Greenhouses must be sealed to maintain elevated CO₂"
            },

            globalCO2rise: {
                CO2fertilization: "Rising atmospheric CO₂ may increase plant productivity",
                C3advantage: "C3 plants benefit more than C4",
                limitations: "Other factors limit response (nitrogen, water, temperature)",
                ecosystem: "Uncertain how ecosystems will respond long-term",
                acclimation: "Plants may down-regulate photosynthesis over time",
                reality: "Benefits likely smaller than predicted due to nutrient limitations and heat stress"
            },

            diffusion: {
                pathway: "Atmosphere → stomata → intercellular spaces → mesophyll cell → chloroplast stroma",
                resistance: "Stomatal aperture is main resistance (stomata regulate CO₂ uptake vs water loss)",
                tradeoff: "Opening stomata increases CO₂ but also water loss"
            }
        },

        temperature: {
            overview: "Temperature affects enzyme activity, membrane fluidity, and gas solubility",

            relationship: {
                description: "Optimum temperature exists; rate decreases above and below optimum",
                curve: "Bell-shaped curve (low → optimal → high)"
            },

            lowTemperature: {
                effects: [
                    "Slows enzyme kinetics (RuBisCO, ATP synthase, etc.)",
                    "Reduces membrane fluidity (thylakoid membranes less functional)",
                    "Decreases diffusion rates",
                    "Can cause cold damage (ice crystals, membrane rupture)"
                ],
                limitation: "Enzyme activity too slow for efficient photosynthesis",
                adaptation: "Cold-adapted plants have enzymes with lower temperature optima"
            },

            optimumTemperature: {
                C3plants: "~25-30°C (77-86°F)",
                C4plants: "~30-40°C (86-104°F) - evolved in warmer climates",
                CAMplants: "Variable; often tolerate high daytime temps (stomata closed)",
                variation: "Depends on species, ecotype, and acclimation",
                acclimation: "Plants can shift optimum by ~5°C with long-term exposure"
            },

            highTemperature: {
                effects: [
                    "Enzyme denaturation (especially RuBisCO above ~45°C)",
                    "Increased photorespiration (O₂ solubility increases relative to CO₂)",
                    "Membrane damage (lipid bilayer breakdown)",
                    "Stomatal closure (water stress) → reduced CO₂ uptake",
                    "Increased respiration rate (burns energy reserves)"
                ],
                photorespiration: "Dramatically increases above 30°C in C3 plants (up to 50% loss)",
                C4advantage: "C4 plants minimize photorespiration even at high temps",
                heatShock: "Very high temps (>45°C) cause protein denaturation and cell death"
            },

            Q10: {
                definition: "Temperature coefficient - factor by which rate increases for every 10°C rise",
                typical: "Q₁₀ ≈ 2 (rate doubles per 10°C increase)",
                range: "Applies within optimal temperature range",
                breakdown: "Above optimum, Q₁₀ no longer applies (enzymes denature)"
            },

            globalWarming: {
                impact: "Rising global temperatures affect photosynthesis and plant distribution",
                C3plants: "May suffer increased photorespiration and heat stress",
                C4plants: "May expand range poleward (competitive advantage at higher temps)",
                complex: "Interactions with CO₂, water availability, nutrients make predictions difficult"
            }
        },

        waterAvailability: {
            overview: "Water is reactant in photosynthesis and maintains turgor; drought severely limits photosynthesis",

            directRole: {
                reactant: "Water is split in light reactions (2H₂O → 4H⁺ + 4e⁻ + O₂)",
                amount: "Usually not limiting (ample water in cells)",
                turgor: "Maintains cell turgor pressure (shape, function)"
            },

            indirectRole_stomatalControl: {
                tradeoff: "Stomata must open for CO₂ uptake but causes water loss (transpiration)",
                waterStress: {
                    trigger: "Soil water depletion, low humidity, high temperature",
                    response: "Stomata close to prevent wilting (ABA hormone signals closure)",
                    consequence: "Reduced CO₂ entry → photosynthesis declines",
                    severity: "Can reduce photosynthesis 50-90% during severe drought"
                },
                ABA: {
                    hormone: "Abscisic acid (ABA) - stress hormone",
                    production: "Produced in roots and leaves under water stress",
                    action: "Binds to guard cells → K⁺ efflux → water loss → stomata close"
                }
            },

            wilting: {
                loss: "Water loss from cells → loss of turgor",
                effects: "Disrupts chloroplast structure, enzyme function, membrane integrity",
                recovery: "Reversible if water restored quickly; prolonged wilting causes permanent damage"
            },

            waterUseEfficiency: {
                definition: "Carbon fixed per unit water lost (WUE)",
                calculation: "WUE = CO₂ assimilated / H₂O transpired",
                C3: "Low WUE (~1-3 mmol CO₂/mol H₂O)",
                C4: "Medium-high WUE (~2-5 mmol CO₂/mol H₂O)",
                CAM: "Very high WUE (~10-40 mmol CO₂/mol H₂O)",
                importance: "Critical for agriculture in water-limited regions"
            },

            adaptations: {
                C4: "Can partially close stomata while maintaining internal CO₂ (better WUE)",
                CAM: "Stomata open at night (cooler, less water loss)",
                xerophytes: "Thick cuticle, sunken stomata, reduced leaf area, deep roots"
            }
        },

        otherFactors: {
            oxygenConcentration: {
                atmospheric: "~21% O₂",
                effect: "High O₂ increases photorespiration in C3 plants",
                experimental: "Reducing O₂ to 2-5% can increase C3 photosynthesis by 50%",
                C4CAM: "Less affected (concentrate CO₂ internally)"
            },

            nutrients: {
                nitrogen: {
                    role: "Essential for chlorophyll, RuBisCO, all proteins",
                    deficiency: "Chlorosis (yellowing), reduced photosynthesis",
                    mostLimiting: "Often most limiting nutrient in natural ecosystems"
                },
                phosphorus: {
                    role: "ATP, NADPH, nucleic acids",
                    deficiency: "Dark green/purple leaves, stunted growth, reduced photosynthesis"
                },
                magnesium: {
                    role: "Central atom in chlorophyll, enzyme cofactor",
                    deficiency: "Interveinal chlorosis"
                },
                iron: {
                    role: "Chlorophyll synthesis, electron transport proteins",
                    deficiency: "Chlorosis in young leaves"
                },
                fertilization: "Adequate nutrients required to realize photosynthetic potential"
            },

            leafAge: {
                young: "Lower rates (still developing photosynthetic apparatus)",
                mature: "Highest photosynthetic rates",
                senescent: "Declining rates (chlorophyll breakdown, nutrient reallocation)"
            },

            airPollution: {
                ozone: "Damages chloroplasts, reduces photosynthesis",
                SO2: "Toxic, closes stomata, damages membranes",
                NO2: "Can be used as nitrogen source in low doses, toxic at high levels"
            },

            windSpeed: {
                moderate: "Reduces boundary layer, increases CO₂ supply to leaf",
                high: "Closes stomata (desiccation risk), physical damage"
            }
        },

        interactions: {
            lightXCO2: "At low light, increasing CO₂ has little effect; at high light, CO₂ increase is very effective",
            lightXtemperature: "Optimal temperature is higher at higher light intensity",
            CO2Xtemperature: "CO₂ enrichment more beneficial at moderate temps (at high temps, other stresses limit response)",
            waterXall: "Water stress limits response to other factors (overrides other optimizations)"
        },

        applications: [
            "Greenhouse management - optimize light, CO₂, temperature, humidity for maximum yield",
            "Crop selection for specific climates (C3 vs C4 vs CAM)",
            "Irrigation scheduling to prevent water stress during critical growth periods",
            "Predicting crop yields under climate change scenarios",
            "Designing controlled environment agriculture (vertical farms, growth chambers)",
            "Understanding forest productivity and carbon sequestration potential",
            "Breeding stress-tolerant crops (heat, drought, low light)",
            "Optimizing artificial photosynthesis systems"
        ],

        keyTakeaways: [
            "Multiple factors affect photosynthesis: light, CO₂, temperature, water",
            "Law of limiting factors: rate determined by scarcest factor",
            "Light: saturation occurs; excess light can damage photosystems",
            "CO₂: often limiting for C3 plants; enrichment increases yield",
            "Temperature: optimum exists; high temps increase photorespiration in C3",
            "Water: drought closes stomata, limiting CO₂ uptake",
            "Factors interact: optimal conditions require optimizing all factors together"
        ]
    };

    return content;
}

handleLeafAnatomy(problem) {
    const content = {
        topic: "Leaf Anatomy and Gas Exchange",
        category: 'anatomy',
        summary: "Leaves are the primary photosynthetic organs of plants, with anatomy highly specialized for light capture and gas exchange. The flat, broad structure maximizes surface area for light absorption. Internal tissues include palisade mesophyll (dense chloroplasts for photosynthesis) and spongy mesophyll (air spaces for gas diffusion). Stomata regulate CO₂ uptake and water loss, creating a critical tradeoff.",

        externalStructure: {
            blade: {
                name: "Leaf blade (lamina)",
                description: "Flat, broad, thin part of leaf",
                function: "Maximize surface area for light capture and gas exchange",
                thickness: "Typically 0.1-0.5 mm thick (allows light penetration)",
                surfaceArea: "Large relative to volume (high SA:V ratio)"
            },
            petiole: {
                name: "Petiole (leaf stalk)",
                function: "Attaches blade to stem",
                vascularBundles: "Contains xylem and phloem connecting to stem",
                flexibility: "Allows leaf movement and orientation"
            },
            veins: {
                description: "Vascular bundles visible on leaf surface",
                pattern: "Varies by species (parallel in monocots, netted in dicots)",
                function: "Transport water, minerals, and sugars",
                structure: "Network distributes resources throughout leaf"
            },
            shape: {
                variation: "Simple (single blade), compound (multiple leaflets), lobed",
                adaptation: "Reflects ecological niche and environmental conditions"
            }
        },

        internalAnatomy: {
            overview: "Leaf cross-section reveals specialized tissues arranged in layers",

            upperEpidermis: {
                location: "Upper surface of leaf",
                structure: "Single layer of flattened, tightly-packed cells",
                cuticle: {
                    composition: "Waxy layer (cutin, waxes) on outer surface",
                    function: "Waterproofing, reduce water loss (transpiration)",
                    thickness: "Thicker in dry climates, thinner in moist climates",
                    transparency: "Transparent to allow light penetration"
                },
                chloroplasts: "Usually few or absent (epidermal cells typically lack chloroplasts)",
                stomata: "Few or absent on upper surface in most plants (some floating aquatics have upper stomata only)",
                function: "Protection, reduce water loss, allow light through"
            },

            palisadeMesophyll: {
                location: "Below upper epidermis",
                structure: "Column-like (elongated, cylindrical) cells tightly packed",
                arrangement: "Cells oriented perpendicular to leaf surface",
                chloroplasts: {
                    density: "30-70 chloroplasts per cell (very high)",
                    position: "Arranged along cell walls for maximum light capture",
                    movement: "Can reorient in response to light intensity"
                },
                layers: "Usually 1-3 layers (varies by species and sun/shade adaptation)",
                function: "PRIMARY site of photosynthesis (80-90% of leaf photosynthesis)",
                lightCapture: "Positioned to intercept light first",
                airSpaces: "Minimal (cells tightly packed)"
            },

            spongyMesophyll: {
                location: "Below palisade, above lower epidermis",
                structure: "Irregularly shaped cells, loosely arranged",
                airSpaces: {
                    description: "LARGE intercellular air spaces (15-40% of volume)",
                    function: "Allow rapid gas diffusion (CO₂, O₂, water vapor)",
                    surface: "Cells have large internal surface area exposed to air"
                },
                chloroplasts: "Fewer than palisade (10-30 per cell)",
                function: [
                    "Photosynthesis (less than palisade)",
                    "GAS EXCHANGE - main function",
                    "Facilitate CO₂ diffusion to palisade cells"
                ],
                connectivity: "Air spaces interconnected, connect to stomata"
            },

            lowerEpidermis: {
                location: "Lower surface of leaf",
                structure: "Single layer of flattened cells",
                cuticle: "Waxy layer (usually thinner than upper cuticle)",
                stomata: {
                    abundance: "MANY stomata (most plants have more on lower surface)",
                    density: "100-300 per mm² (varies greatly)",
                    distribution: "Evenly distributed or clustered"
                },
                function: "Protection, gas exchange (via stomata)",
                chloroplasts: "Usually absent in guard cells of stomata"
            }
        },

        stomata: {
            definition: "Microscopic pores in epidermis allowing gas exchange",

            structure: {
                pore: "Opening (stoma) between two guard cells",
                guardCells: {
                    description: "Pair of specialized epidermal cells surrounding pore",
                    shape: "Kidney-shaped or dumbbell-shaped (varies)",
                    chloroplasts: "Contain chloroplasts (unusual for epidermal cells)",
                    cellWall: "Thicker on inner wall (facing pore)",
                    function: "Control stomatal opening via turgor changes"
                },
                subsidiaryVells: "Neighboring cells (in some species) that support guard cells",
                aperture: "Adjustable opening (0-15 μm when open)"
            },

            function: {
                gasExchange: [
                    "CO₂ enters leaf (required for photosynthesis)",
                    "O₂ exits leaf (product of photosynthesis)",
                    "Water vapor exits (transpiration - unavoidable water loss)"
                ],
                regulation: "Balance CO₂ uptake vs water loss (critical tradeoff)",
                proportion: "90-95% of water loss from plants occurs through stomata"
            },

            mechanism: {
                opening: {
                    trigger: [
                        "Light (especially blue light)",
                        "Low CO₂ concentration inside leaf",
                        "Adequate water supply"
                    ],
                    process: {
                        step1: "Blue light activates proton pumps in guard cell membrane",
                        step2: "H⁺ pumped out → membrane becomes more negative",
                        step3: "K⁺ channels open → K⁺ enters guard cells",
                        step4: "Cl⁻ and malate⁻ also accumulate (maintain charge balance)",
                        step5: "Solute concentration increases → water enters by osmosis",
                        step6: "Guard cells become turgid (swell)",
                        step7: "Due to thick inner wall, cells bow outward → pore opens"
                    },
                    typical: "Stomata open in morning (light), close at night (dark)"
                },
                closing: {
                    trigger: [
                        "Darkness",
                        "High CO₂ concentration inside leaf",
                        "Water stress (drought) → ABA hormone",
                        "High temperature (prevent excessive water loss)"
                    ],
                    process: {
                        step1: "K⁺ channels close, efflux channels open",
                        step2: "K⁺ and anions leave guard cells",
                        step3: "Solute concentration decreases → water exits by osmosis",
                        step4: "Guard cells become flaccid (shrink)",
                        step5: "Cells straighten → pore closes"
                    },
                    ABA: {
                        hormone: "Abscisic acid - stress hormone",
                        production: "Roots sense water stress, produce ABA, signal guard cells",
                        action: "Triggers K⁺ efflux → stomatal closure"
                    }
                }
            },

            tradeoff: {
                conflict: "Stomata must open for CO₂ (photosynthesis) but this causes water loss (transpiration)",
                consequence: "Plant must balance photosynthesis vs water conservation",
                C3plants: "Lose ~300-500 water molecules per CO₂ fixed",
                C4plants: "Lose ~150-250 water molecules per CO₂ (better efficiency)",
                CAMplants: "Lose ~50-100 water molecules per CO₂ (open at night)",
                climateAdaptation: "Desert plants minimize stomatal opening; rainforest plants keep open"
            },

            density: {
                variation: "Varies greatly: 10-1000 per mm² depending on species and environment",
                typical: "100-300 per mm² on lower surface",
                adaptation: {
                    wetClimate: "High stomatal density (water not limiting)",
                    dryClimate: "Low stomatal density (conserve water)",
                    sun: "Higher density than shade",
                    aquatic: "Stomata on upper surface (contact with air)"
                }
            },

            distribution: {
                mostPlants: "More abundant on lower surface (shaded, cooler, less water loss)",
                floatingLeaves: "Only on upper surface (e.g., water lilies)",
                verticalLeaves: "Equal on both surfaces (e.g., grasses, iris)",
                amphistomatous: "Stomata on both surfaces",
                hypostomatous: "Stomata only on lower surface (most common)",
                epistomatous: "Stomata only on upper surface (rare, some aquatics)"
            }
        },

        vascularBundles: {
            name: "Veins",
            location: "Running through mesophyll",
            structure: "Xylem and phloem surrounded by bundle sheath cells",

            xylem: {
                location: "Upper side of vein (towards upper epidermis)",
                function: "Transport water and dissolved minerals from roots to leaves",
                direction: "Unidirectional (roots → leaves)",
                mechanism: "Transpiration pull + root pressure",
                cells: "Tracheids and vessel elements (dead at maturity, hollow tubes)",
                importance: "Provides water for photosynthesis (reactant) and maintains turgor"
            },

            phloem: {
                location: "Lower side of vein (towards lower epidermis)",
                function: "Transport sugars (products of photosynthesis) from leaves to rest of plant",
                direction: "Bidirectional (source → sink; usually leaves → roots, fruits, growing tissues)",
                mechanism: "Pressure flow (driven by osmotic gradient)",
                cells: "Sieve tube elements and companion cells (living)",
                cargoMolecules: "Sucrose (main form), amino acids, hormones",
                importance: "Exports photosynthate; supports growth of non-photosynthetic tissues"
            },

            bundleSheath: {
                description: "Layer of cells surrounding vascular bundle",
                C3plants: "Present but not specialized for photosynthesis",
                C4plants: "Site of Calvin cycle (Kranz anatomy); tightly packed, many chloroplasts",
                function: "Structural support, may regulate transport"
            },

            network: {
                hierarchical: "Major veins (midrib) → secondary veins → minor veins (venation)",
                branching: "Ensures all mesophyll cells close to veins (short diffusion distance)",
                design: "Efficient distribution and collection system"
            }
        },

        gasExchangePathway: {
            CO2uptake: {
                pathway: "Atmosphere → stomatal pore → substomatal cavity → intercellular air spaces (spongy mesophyll) → dissolve in water film on cell walls → diffuse into mesophyll cells → enter chloroplasts",
                diffusionGradient: "Maintained by photosynthesis consuming CO₂",
                resistance: "Stomatal aperture is main resistance (controllable)"
            },
            O2release: {
                pathway: "Chloroplasts → mesophyll cells → intercellular air spaces → stomatal pore → atmosphere",
                diffusionGradient: "Photosynthesis produces O₂, raises internal concentration"
            },
            waterVaporLoss: {
                pathway: "Xylem → mesophyll cells → evaporate from cell walls → intercellular air spaces → stomatal pore → atmosphere",
                driving: "Vapor pressure gradient (humid inside leaf, drier outside)",
                rate: "Depends on stomatal aperture, humidity, temperature, wind"
            },
            efficiency: "Thin leaf (short diffusion distance), large internal surface area (spongy mesophyll)"
        },

        adaptations: {
            sunLeaves: {
                characteristics: [
                    "Thicker leaves (more cell layers)",
                    "More palisade layers (2-3 vs 1)",
                    "Higher chloroplast density",
                    "Thicker cuticle (more protection)",
                    "Higher stomatal density",
                    "Smaller leaf area per mass (less SA:V)"
                ],
                advantage: "Higher photosynthetic capacity, tolerate high light and heat",
                location: "Tree canopy top, open fields"
            },
            shadeLeaves: {
                characteristics: [
                    "Thinner leaves",
                    "Fewer palisade layers (often 1)",
                    "Larger, thinner chloroplasts with more chlorophyll per chloroplast",
                    "Thinner cuticle",
                    "Lower stomatal density",
                    "Larger leaf area per mass (higher SA:V)"
                ],
                advantage: "Efficient light capture at low light, lower respiration cost",
                location: "Forest understory, lower canopy"
            },
            xerophytes: {
                name: "Drought-adapted plants",
                characteristics: [
                    "Very thick cuticle (reduce water loss)",
                    "Sunken stomata in pits/grooves (reduce air flow over stomata)",
                    "Trichomes (hairs) - trap humid air",
                    "Reduced leaf area (small, needle-like, or absent)",
                    "CAM photosynthesis (open stomata at night)",
                    "Waxy or reflective surfaces (reduce heat absorption)"
                ],
                examples: "Cacti, succulents, desert shrubs, conifers",
                tradeoff: "Reduced photosynthesis (stomata often closed) but survival in dry environments"
            },
            hydrophytes: {
                name: "Aquatic plants",
                characteristics: [
                    "Thin or absent cuticle (water loss not a concern)",
                    "Large air spaces (aerenchyma) for buoyancy and O₂ storage",
                    "Stomata on upper surface only (contact with air)",
                    "Reduced roots (absorb nutrients from water)",
                    "Flexible leaves (prevent damage from water currents)"
                ],
                examples: "Water lilies, duckweed, submerged aquatics",
                adaptation: "Optimized for gas exchange with water/air interface"
            },
            conifers: {
                needles: "Needle-shaped leaves (reduced surface area)",
                hypodermis: "Thick-walled cells below epidermis",
                sunkenStomata: "In grooves (reduce water loss)",
                evergreen: "Retain leaves year-round (photosynthesis possible in winter)",
                tradeoff: "Lower photosynthetic rate but cold and drought tolerance"
            }
        },

        leafDevelopment: {
            initiation: "Leaf primordia form at shoot apical meristem",
            expansion: "Cell division and elongation",
            differentiation: "Cells specialize (epidermis, mesophyll, vascular)",
            maturation: "Full photosynthetic capacity reached",
            senescence: "Chlorophyll breakdown, nutrient reallocation, abscission (leaf drop)"
        },

        applications: [
            "Crop breeding - select leaf traits for higher photosynthesis or stress tolerance",
            "Understanding plant water use and irrigation needs",
            "Predicting plant responses to climate change (temperature, CO₂, water)",
            "Identifying plant stress through leaf anatomy changes",
            "Biomimicry - designing artificial photosynthetic surfaces inspired by leaf anatomy",
            "Remote sensing - leaf reflectance and chlorophyll content for crop monitoring",
            "Optimizing greenhouse conditions (humidity, CO₂, light) to maximize stomatal conductance"
        ],

        keyTakeaways: [
            "Leaves are optimized for light capture and gas exchange",
            "Palisade mesophyll is primary photosynthetic tissue (dense chloroplasts)",
            "Spongy mesophyll facilitates gas diffusion (large air spaces)",
            "Stomata control CO₂ uptake vs water loss tradeoff (critical for plant survival)",
            "Guard cells regulate stomatal opening via turgor changes (K⁺ flux)",
            "Veins transport water (xylem) and sugars (phloem) to/from leaves",
            "Leaf anatomy varies with environment (sun vs shade, wet vs dry)"
        ]
    };

    return content;
}


// ========================================
// PROBLEM PROCESSING METHODS
// ========================================

parsePhotosynthesisProblem(topic, parameters = {}, subTopic = null, context = {}) {
    let topicType = null;

    // Match topic to handler
    for (const [type, config] of Object.entries(this.photosynthesisTopics)) {
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
        throw new Error(`Unable to recognize photosynthesis topic: ${topic}`);
    }

    return {
        originalTopic: topic,
        type: topicType,
        subTopic: subTopic,
        parameters: { ...parameters },
        context: { ...context },
        difficulty: this.photosynthesisTopics[topicType].difficulty,
        prerequisites: this.photosynthesisTopics[topicType].prerequisites,
        parsedAt: new Date().toISOString()
    };
}

handlePhotosynthesisProblem(config) {
    const { topic, parameters, subTopic, context, requestType } = config;

    try {
        const isExperimentRequest = requestType === 'experiment' || 
                                   (typeof topic === 'string' && topic.toLowerCase().includes('experiment'));

        if (isExperimentRequest) {
            return this.handleExperimentRequest(config);
        } else {
            this.currentProblem = this.parsePhotosynthesisProblem(topic, parameters, subTopic, context);
            this.currentContent = this.getPhotosynthesisContent(this.currentProblem);
            
            if (this.adaptiveDifficulty) {
                this.currentContent = this.adaptContentDifficulty(this.currentContent, this.learnerProfile.currentLevel);
            }
            
            if (this.contextualLearning) {
                this.currentContent.contextualScenarios = this.getContextualScenarios(this.currentProblem.type);
            }
            
            if (this.includeExperiments) {
                this.currentContent.relatedExperiments = this.getRelatedExperiments(this.currentProblem.type);
            }
            
            if (this.metacognitiveSupport) {
                this.currentContent.metacognitivePrompts = this.getMetacognitivePrompts(this.currentProblem.type);
            }
            
            this.contentSteps = this.generatePhotosynthesisContent(this.currentProblem, this.currentContent);
            
            // Generate workbook (handles async internally)
            this.generatePhotosynthesisWorkbook();

            // Return synchronously with promise for diagrams
            return {
                workbook: this.currentWorkbook,
                content: this.currentContent,
                steps: this.contentSteps,
                diagrams: this.diagramData,
                experiments: this.currentContent.relatedExperiments,
                learnerProfile: this.learnerProfile,
                // Provide method to wait for diagrams if needed
                getDiagrams: () => this.waitForDiagrams()
            };
        }
    } catch (error) {
        throw new Error(`Failed to process photosynthesis request: ${error.message}`);
    }
}

getPhotosynthesisContent(problem) {
    const handler = this.photosynthesisTopics[problem.type]?.handler;
    if (!handler) {
        throw new Error(`No handler available for photosynthesis topic: ${problem.type}`);
    }

    let content = handler(problem);

    // Apply parameter filtering if parameters are provided
    if (problem.parameters && Object.keys(problem.parameters).length > 0) {
        content = this.filterContentByParameters(content, problem.parameters);
    }

    return content;
}

filterContentByParameters(content, parameters) {
    if (!parameters || Object.keys(parameters).length === 0) {
        return content;
    }

    const filtered = { ...content };

    // Filter by specific items
    if (parameters.specificItems && Array.isArray(parameters.specificItems)) {
        // Filter arrays in content
        Object.keys(filtered).forEach(key => {
            if (Array.isArray(filtered[key])) {
                filtered[key] = filtered[key].filter(item => {
                    if (typeof item === 'object' && item.name) {
                        return parameters.specificItems.some(spec =>
                            item.name.toLowerCase().includes(spec.toLowerCase())
                        );
                    }
                    return true;
                });
            }
        });
    }

    // Filter by difficulty level
    if (parameters.difficulty) {
        filtered.detailLevel = parameters.difficulty;
    }

    // Filter by focus area (e.g., only light reactions, only Calvin cycle)
    if (parameters.focusArea) {
        const focusArea = parameters.focusArea.toLowerCase();
        // Keep only relevant sections based on focus
        Object.keys(filtered).forEach(key => {
            if (key.toLowerCase().includes(focusArea) === false && 
                key !== 'topic' && key !== 'summary' && key !== 'category') {
                // Only keep sections that match focus area
            }
        });
    }

    return filtered;
}

handleExperimentRequest(config) {
    const { topic, parameters, experimentId } = config;

    if (experimentId && this.photosynthesisExperiments[experimentId]) {
        this.currentExperiment = this.photosynthesisExperiments[experimentId];
    } else {
        this.currentExperiment = this.findExperimentByTopic(topic);
    }

    if (!this.currentExperiment) {
        throw new Error(`No experiment found for: ${topic}`);
    }

    const experimentContent = this.generateExperimentContent(this.currentExperiment, parameters);
    this.generateExperimentWorkbook(experimentContent);

    return {
        experiment: this.currentExperiment,
        content: experimentContent,
        workbook: this.currentWorkbook,
        getDiagrams: () => this.waitForDiagrams()
    };
}

findExperimentByTopic(topic) {
    const topicLower = topic.toLowerCase();
    
    // Direct name match
    for (const [id, exp] of Object.entries(this.photosynthesisExperiments)) {
        if (exp.name.toLowerCase().includes(topicLower)) {
            return exp;
        }
    }

    // Related topics match
    for (const [id, exp] of Object.entries(this.photosynthesisExperiments)) {
        if (exp.relatedTopics.some(t => topicLower.includes(t.toLowerCase()))) {
            return exp;
        }
    }

    // Scientist name match
    for (const [id, exp] of Object.entries(this.photosynthesisExperiments)) {
        if (exp.historicalBackground?.scientist && 
            topicLower.includes(exp.historicalBackground.scientist.toLowerCase())) {
            return exp;
        }
    }

    return null;
}

generateExperimentContent(experiment, parameters = {}) {
    const content = {
        experimentName: experiment.name,
        category: experiment.category,
        relatedTopics: experiment.relatedTopics,
        sections: []
    };

    if (experiment.historicalBackground) {
        content.sections.push({
            type: 'historical_background',
            title: 'Historical Background',
            data: this.formatHistoricalBackground(experiment.historicalBackground)
        });
    }

    if (experiment.labExperiment) {
        content.sections.push({
            type: 'lab_experiment',
            title: 'Laboratory Experiment',
            data: this.formatLabExperiment(experiment.labExperiment)
        });
    }

    return content;
}

formatHistoricalBackground(background) {
    const formatted = [];

    Object.entries(background).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            formatted.push([key, '']);
            value.forEach((item, index) => {
                if (typeof item === 'object') {
                    Object.entries(item).forEach(([k, v]) => {
                        formatted.push([`  ${k}`, v]);
                    });
                } else {
                    formatted.push([`  ${index + 1}.`, item]);
                }
            });
        } else if (typeof value === 'object' && value !== null) {
            formatted.push([key, '']);
            Object.entries(value).forEach(([k, v]) => {
                formatted.push([`  ${k}`, typeof v === 'object' ? JSON.stringify(v) : v]);
            });
        } else {
            formatted.push([key, value]);
        }
    });

    return formatted;
}

formatLabExperiment(labExp) {
    const formatted = [];

    formatted.push(['Experiment Title', labExp.title]);
    formatted.push(['Hypothesis', labExp.hypothesis]);
    
    if (labExp.purpose) {
        formatted.push(['Purpose', labExp.purpose]);
    }

    if (labExp.background) {
        formatted.push(['', '']);
        formatted.push(['Background', '']);
        if (typeof labExp.background === 'object') {
            Object.entries(labExp.background).forEach(([key, value]) => {
                formatted.push([`  ${key}`, value]);
            });
        } else {
            formatted.push(['  ', labExp.background]);
        }
    }
    
    if (labExp.variables) {
        formatted.push(['', '']);
        formatted.push(['Variables', '']);
        formatted.push(['  Independent', labExp.variables.independent]);
        formatted.push(['  Dependent', labExp.variables.dependent]);
        if (labExp.variables.controlled) {
            formatted.push(['  Controlled', Array.isArray(labExp.variables.controlled) ? 
                labExp.variables.controlled.join(', ') : labExp.variables.controlled]);
        }
    }

    if (labExp.materials) {
        formatted.push(['', '']);
        formatted.push(['Materials Required', '']);
        if (Array.isArray(labExp.materials)) {
            labExp.materials.forEach(material => {
                formatted.push(['  •', material]);
            });
        } else if (typeof labExp.materials === 'object') {
            Object.values(labExp.materials).forEach(materialList => {
                if (Array.isArray(materialList)) {
                    materialList.forEach(material => {
                        formatted.push(['  •', material]);
                    });
                } else {
                    formatted.push(['  •', materialList]);
                }
            });
        }
    }

    if (labExp.safetyPrecautions) {
        formatted.push(['', '']);
        formatted.push(['SAFETY PRECAUTIONS', '']);
        if (Array.isArray(labExp.safetyPrecautions)) {
            labExp.safetyPrecautions.forEach(precaution => {
                formatted.push(['  ⚠', precaution]);
            });
        }
    }

    if (labExp.procedure) {
        formatted.push(['', '']);
        formatted.push(['Procedure', '']);
        
        if (Array.isArray(labExp.procedure)) {
            labExp.procedure.forEach((step, index) => {
                if (step.trim() === '') {
                    formatted.push(['', '']);
                } else if (step.includes(':') && step === step.toUpperCase()) {
                    formatted.push([step, '']);
                } else if (step.endsWith(':')) {
                    formatted.push([step, '']);
                } else {
                    formatted.push([`  ${index + 1}.`, step]);
                }
            });
        } else if (typeof labExp.procedure === 'object') {
            Object.entries(labExp.procedure).forEach(([key, value]) => {
                formatted.push([key.toUpperCase() + ':', '']);
                if (Array.isArray(value)) {
                    value.forEach((step, idx) => {
                        formatted.push([`  ${idx + 1}.`, step]);
                    });
                } else if (typeof value === 'object') {
                    Object.entries(value).forEach(([subKey, subValue]) => {
                        formatted.push([`  ${subKey}:`, '']);
                        if (Array.isArray(subValue)) {
                            subValue.forEach(item => formatted.push(['    -', item]));
                        } else {
                            formatted.push(['    ', subValue]);
                        }
                    });
                } else {
                    formatted.push(['  ', value]);
                }
                formatted.push(['', '']);
            });
        }
    }

    if (labExp.expectedResults) {
        formatted.push(['', '']);
        formatted.push(['Expected Results', '']);
        if (typeof labExp.expectedResults === 'object') {
            Object.entries(labExp.expectedResults).forEach(([key, value]) => {
                formatted.push([`  ${key}:`, '']);
                if (typeof value === 'object' && !Array.isArray(value)) {
                    Object.entries(value).forEach(([subKey, subValue]) => {
                        formatted.push([`    ${subKey}`, subValue]);
                    });
                } else {
                    formatted.push(['    ', value]);
                }
            });
        } else {
            formatted.push(['  ', labExp.expectedResults]);
        }
    }

    if (labExp.dataTable) {
        formatted.push(['', '']);
        formatted.push(['Data Table', '']);
        labExp.dataTable.forEach(row => {
            formatted.push(row);
        });
    }

    if (labExp.observations) {
        formatted.push(['', '']);
        formatted.push(['Observations', '']);
        if (Array.isArray(labExp.observations)) {
            labExp.observations.forEach(obs => {
                formatted.push(['  •', obs]);
            });
        } else if (typeof labExp.observations === 'object') {
            Object.entries(labExp.observations).forEach(([key, value]) => {
                formatted.push([`  ${key}:`, '']);
                if (Array.isArray(value)) {
                    value.forEach(item => formatted.push(['    -', item]));
                } else {
                    formatted.push(['    ', value]);
                }
            });
        }
    }

    if (labExp.analysis) {
        formatted.push(['', '']);
        formatted.push(['Analysis', '']);
        if (typeof labExp.analysis === 'object') {
            Object.entries(labExp.analysis).forEach(([key, value]) => {
                if (Array.isArray(value)) {
                    formatted.push([`  ${key}:`, '']);
                    value.forEach(item => formatted.push(['    -', item]));
                } else if (typeof value === 'object') {
                    formatted.push([`  ${key}:`, '']);
                    Object.entries(value).forEach(([k, v]) => {
                        formatted.push([`    ${k}`, v]);
                    });
                } else {
                    formatted.push([`  ${key}`, value]);
                }
            });
        }
    }

    if (labExp.connectionToHistorical) {
        formatted.push(['', '']);
        formatted.push(['Connection to Historical Experiment', '']);
        if (typeof labExp.connectionToHistorical === 'object') {
            Object.entries(labExp.connectionToHistorical).forEach(([key, value]) => {
                formatted.push([`  ${key}`, value]);
            });
        } else {
            formatted.push(['  ', labExp.connectionToHistorical]);
        }
    }

    if (labExp.results) {
        formatted.push(['', '']);
        formatted.push(['Results', labExp.results]);
    }

    if (labExp.conclusions) {
        formatted.push(['', '']);
        formatted.push(['Conclusions', '']);
        if (Array.isArray(labExp.conclusions)) {
            labExp.conclusions.forEach(conclusion => {
                formatted.push(['  •', conclusion]);
            });
        } else {
            formatted.push(['  ', labExp.conclusions]);
        }
    }

    if (labExp.realWorldApplications) {
        formatted.push(['', '']);
        formatted.push(['Real-World Applications', '']);
        if (Array.isArray(labExp.realWorldApplications)) {
            labExp.realWorldApplications.forEach(app => {
                formatted.push(['  •', app]);
            });
        }
    }

    if (labExp.extensions) {
        formatted.push(['', '']);
        formatted.push(['Extension Activities', '']);
        if (Array.isArray(labExp.extensions)) {
            labExp.extensions.forEach(ext => {
                formatted.push(['  •', ext]);
            });
        }
    }

    if (labExp.limitations) {
        formatted.push(['', '']);
        formatted.push(['Limitations', '']);
        if (Array.isArray(labExp.limitations)) {
            labExp.limitations.forEach(lim => {
                formatted.push(['  •', lim]);
            });
        }
    }

    if (labExp.troubleshooting) {
        formatted.push(['', '']);
        formatted.push(['Troubleshooting', '']);
        if (Array.isArray(labExp.troubleshooting)) {
            labExp.troubleshooting.forEach(tip => {
                formatted.push(['  •', tip]);
            });
        }
    }

    return formatted;
}

// ========================================
// ADAPTIVE LEARNING METHODS
// ========================================

adaptContentDifficulty(content, currentLevel) {
    const adapted = { ...content };

    switch (currentLevel) {
        case 'beginner':
            adapted.vocabulary = 'simplified';
            adapted.examples = this.selectBasicExamples(content.examples);
            adapted.depth = 'overview';
            break;
        
        case 'intermediate':
            adapted.vocabulary = 'standard';
            adapted.examples = this.selectMixedExamples(content.examples);
            adapted.depth = 'moderate';
            break;
        
        case 'advanced':
            adapted.vocabulary = 'technical';
            adapted.examples = this.selectAdvancedExamples(content.examples);
            adapted.depth = 'comprehensive';
            adapted.research = this.addResearchConnections(content);
            break;
    }

    return adapted;
}

selectBasicExamples(examples) {
    if (!examples || !Array.isArray(examples)) return [];
    return examples.filter(ex => ex.difficulty === 'basic' || !ex.difficulty).slice(0, 3);
}

selectMixedExamples(examples) {
    if (!examples || !Array.isArray(examples)) return [];
    return examples.slice(0, 5);
}

selectAdvancedExamples(examples) {
    if (!examples || !Array.isArray(examples)) return [];
    return examples;
}

addResearchConnections(content) {
    return {
        currentResearch: `Current research in ${content.topic} includes advances in improving photosynthetic efficiency, engineering C4 traits into C3 crops, and understanding climate change impacts`,
        openQuestions: "Key unresolved questions include: How can RuBisCO be engineered for better efficiency? What are the optimal strategies for enhancing crop photosynthesis? How will rising CO₂ and temperatures affect global photosynthesis?",
        techniques: "Advanced techniques include chlorophyll fluorescence imaging, stable isotope analysis, gas exchange measurements, and genetic engineering of photosynthetic pathways"
    };
}

getContextualScenarios(topicType) {
    return this.contextualScenarios[topicType] || [];
}

getMetacognitivePrompts(topicType) {
    const prompts = {
        beforeLearning: this.metacognitivePrompts.beforeLearning.map(p => 
            p.replace('{topic}', this.photosynthesisTopics[topicType]?.name || topicType)
        ),
        duringLearning: this.metacognitivePrompts.duringLearning.map(p => 
            p.replace('{concept}', topicType)
        ),
        afterLearning: this.metacognitivePrompts.afterLearning.map(p => 
            p.replace('{topic}', this.photosynthesisTopics[topicType]?.name || topicType)
        )
    };

    return prompts;
}

updateLearnerProfile(topicType, performance) {
    if (performance.score >= 0.8) {
        if (!this.learnerProfile.masteredTopics.includes(topicType)) {
            this.learnerProfile.masteredTopics.push(topicType);
        }
        // Remove from struggling if present
        this.learnerProfile.strugglingTopics = this.learnerProfile.strugglingTopics.filter(t => t !== topicType);
    } else if (performance.score < 0.5) {
        if (!this.learnerProfile.strugglingTopics.includes(topicType)) {
            this.learnerProfile.strugglingTopics.push(topicType);
        }
    }

    this.learnerProfile.progressHistory.push({
        topic: topicType,
        timestamp: new Date().toISOString(),
        performance: performance
    });
}

getRelatedExperiments(topicType) {
    const related = [];
    
    Object.entries(this.photosynthesisExperiments).forEach(([id, experiment]) => {
        if (experiment.relatedTopics.includes(topicType)) {
            related.push({
                id: id,
                name: experiment.name,
                category: experiment.category,
                historicalScientist: experiment.historicalBackground?.scientist,
                labTitle: experiment.labExperiment?.title
            });
        }
    });

    return related;
}

// ========================================
// CONTENT GENERATION METHODS
// ========================================

generatePhotosynthesisContent(problem, content) {
    const contentSections = [];

    // Generate overview section
    contentSections.push(this.generateOverviewSection(problem, content));

    // Generate specific content sections based on content structure
    if (content.overallEquation || content.twoStages) {
        contentSections.push(this.generateProcessSection(content));
    }

    if (content.photosystems || content.electronTransportChain) {
        contentSections.push(this.generateMechanismSection(content));
    }

    if (content.threePhases || content.completeAccounting) {
        contentSections.push(this.generateCycleSection(content));
    }

    if (content.types || content.lightAbsorption) {
        contentSections.push(this.generatePigmentSection(content));
    }

    if (content.membraneSystem || content.internalCompartments) {
        contentSections.push(this.generateStructureSection(content));
    }

    if (content.C3Photosynthesis || content.C4Photosynthesis || content.CAMPhotosynthesis) {
        contentSections.push(this.generatePathwaysSection(content));
    }

    if (content.lightIntensity || content.CO2Concentration || content.temperature) {
        contentSections.push(this.generateFactorsSection(content));
    }

    if (content.externalStructure || content.internalAnatomy || content.stomata) {
        contentSections.push(this.generateAnatomySection(content));
    }

    // Add comparisons if available
    if (content.comparison) {
        contentSections.push(this.generateComparisonsSection(content));
    }

    // Add examples section
    if (content.examples) {
        contentSections.push(this.generateExamplesSection(content));
    }

    // Add contextual scenarios
    if (content.contextualScenarios) {
        contentSections.push(this.generateContextualScenariosSection(content));
    }

    // Add related experiments section
    if (this.includeExperiments && content.relatedExperiments) {
        contentSections.push(this.generateRelatedExperimentsSection(content));
    }

    // Add metacognitive prompts
    if (content.metacognitivePrompts) {
        contentSections.push(this.generateMetacognitiveSection(content));
    }

    return contentSections;
}

generateOverviewSection(problem, content) {
    return {
        sectionType: 'overview',
        title: content.topic || problem.originalTopic,
        category: content.category,
        summary: content.summary,
        difficulty: problem.difficulty,
        prerequisites: problem.prerequisites,
        keyPoints: this.extractKeyPoints(content)
    };
}

generateProcessSection(content) {
    return {
        sectionType: 'process',
        title: 'Overall Process and Equations',
        data: {
            overallEquation: content.overallEquation,
            twoStages: content.twoStages,
            energyTransformations: content.energyTransformations
        }
    };
}

generateMechanismSection(content) {
    return {
        sectionType: 'mechanism',
        title: 'Molecular Mechanisms',
        data: {
            photosystems: content.photosystems,
            electronTransportChain: content.electronTransportChain,
            zScheme: content.zScheme,
            photophosphorylation: content.photophosphorylation
        }
    };
}

generateCycleSection(content) {
    return {
        sectionType: 'cycle',
        title: 'Calvin Cycle Details',
        data: {
            threePhases: content.threePhases,
            completeAccounting: content.completeAccounting,
            RuBisCO: content.RuBisCO
        }
    };
}

generatePigmentSection(content) {
    return {
        sectionType: 'pigments',
        title: 'Photosynthetic Pigments',
        data: {
            types: content.types,
            lightAbsorption: content.lightAbsorption,
            antennaComplex: content.antennaComplex,
            photoprotection: content.photoprotection
        }
    };
}

generateStructureSection(content) {
    return {
        sectionType: 'structure',
        title: 'Chloroplast Structure',
        data: {
            membraneSystem: content.membraneSystem,
            internalCompartments: content.internalCompartments,
            thylakoidOrganization: content.thylakoidOrganization,
            endosymbioticOrigin: content.endosymbioticOrigin
        }
    };
}

generatePathwaysSection(content) {
    return {
        sectionType: 'pathways',
        title: 'Photosynthetic Pathways',
        data: {
            photorespiration: content.photorespiration,
            C3: content.C3Photosynthesis,
            C4: content.C4Photosynthesis,
            CAM: content.CAMPhotosynthesis,
            comparison: content.comparison
        }
    };
}

generateFactorsSection(content) {
    return {
        sectionType: 'factors',
        title: 'Environmental Factors',
        data: {
            limitingFactorPrinciple: content.limitingFactorPrinciple,
            lightIntensity: content.lightIntensity,
            CO2Concentration: content.CO2Concentration,
            temperature: content.temperature,
            waterAvailability: content.waterAvailability
        }
    };
}

generateAnatomySection(content) {
    return {
        sectionType: 'anatomy',
        title: 'Leaf Anatomy',
        data: {
            externalStructure: content.externalStructure,
            internalAnatomy: content.internalAnatomy,
            stomata: content.stomata,
            vascularBundles: content.vascularBundles,
            gasExchangePathway: content.gasExchangePathway
        }
    };
}

generateComparisonsSection(content) {
    if (!content.comparison) return null;

    return {
        sectionType: 'comparisons',
        title: 'Comparisons and Contrasts',
        data: content.comparison
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

generateContextualScenariosSection(content) {
    return {
        sectionType: 'contextual_scenarios',
        title: 'Real-World Applications',
        scenarios: content.contextualScenarios
    };
}

generateRelatedExperimentsSection(content) {
    if (!content.relatedExperiments || content.relatedExperiments.length === 0) {
        return null;
    }

    return {
        sectionType: 'related_experiments',
        title: 'Related Experiments',
        experiments: content.relatedExperiments
    };
}

generateMetacognitiveSection(content) {
    return {
        sectionType: 'metacognitive',
        title: 'Learning Guidance',
        prompts: content.metacognitivePrompts
    };
}

extractKeyPoints(content) {
    const keyPoints = [];

    if (content.summary) keyPoints.push(content.summary);
    
    // Extract from key takeaways if available
    if (content.keyTakeaways && Array.isArray(content.keyTakeaways)) {
        keyPoints.push(...content.keyTakeaways.slice(0, 5));
        return keyPoints;
    }

    // Extract from various content structures
    if (content.overallEquation && content.overallEquation.simplified) {
        keyPoints.push(`Equation: ${content.overallEquation.simplified}`);
    }

    if (content.twoStages) {
        keyPoints.push('Photosynthesis has two stages: light reactions and Calvin cycle');
    }

    if (content.photosystems) {
        keyPoints.push('Two photosystems (PSII and PSI) work in series');
    }

    if (content.threePhases) {
        keyPoints.push('Calvin cycle has three phases: fixation, reduction, regeneration');
    }

    if (content.types && content.types.chlorophylls) {
        keyPoints.push('Chlorophyll a is primary pigment; chlorophyll b and carotenoids are accessory');
    }

    return keyPoints.slice(0, 5);
}


// ========================================
// WORKBOOK GENERATION METHODS
// ========================================

generatePhotosynthesisWorkbook() {
    if (!this.currentContent || !this.currentProblem) return;

    const workbook = this.createWorkbookStructure();
    workbook.title = 'Photosynthesis Biology Workbook';

    // Start diagram generation in background if needed
    if (this.includeDiagramsInWorkbook) {
        this.diagramsPromise = this.generatePhotosynthesisDiagramDataAsync();
    }

    workbook.sections = [
        this.createProblemSection(),
        this.createContentOverviewSection(),
        this.createDetailedContentSection(),
        this.createDiagramsPlaceholderSection(), // Placeholder until diagrams ready
        this.createComparisonsWorkbookSection(),
        this.createExamplesApplicationsSection(),
        this.createContextualScenariosWorkbookSection(),
        this.createRelatedExperimentsWorkbookSection(),
        this.createMisconceptionsSection(),
        this.createMetacognitiveWorkbookSection(),
        this.createAssessmentSection()
    ].filter(section => section !== null);

    this.currentWorkbook = workbook;
}

generateExperimentWorkbook(experimentContent) {
    const workbook = this.createWorkbookStructure();
    workbook.title = 'Photosynthesis Experiment Workbook';

    workbook.sections = experimentContent.sections.map(section => ({
        title: section.title,
        type: section.type,
        data: section.data
    }));

    if (experimentContent.relatedTopics) {
        workbook.sections.push({
            title: 'Related Topics',
            type: 'related_topics',
            data: experimentContent.relatedTopics.map(topic => [
                this.photosynthesisTopics[topic]?.name || topic,
                this.photosynthesisTopics[topic]?.description || ''
            ])
        });
    }

    this.currentWorkbook = workbook;
}

// Async helper that runs in background
async generatePhotosynthesisDiagramDataAsync() {
    if (!this.currentContent) return;

    const { type } = this.currentProblem;

    // Get relevant diagram keys
    const diagramKeys = this.getRelevantPhotosynthesisDiagrams(type);

    this.diagramData = {
        type: type,
        diagrams: diagramKeys,
        renderedImages: [],
        status: 'rendering',
        placeholder: false,
        note: "Photosynthesis biology diagrams"
    };

    // Render diagrams
    if (diagramKeys.length > 0) {
        await this.renderDiagramsForTopic(diagramKeys);
        this.diagramData.status = 'complete';
        
        // Update the diagrams section in workbook
        this.updateDiagramsSection();
    } else {
        this.diagramData.status = 'no_diagrams';
    }

    return this.diagramData;
}

async renderDiagramsForTopic(diagramKeys) {
    this.diagramData.renderedImages = [];

    for (const diagramKey of diagramKeys) {
        try {
            // Check if already rendered (cache)
            if (this.renderedDiagrams.has(diagramKey)) {
                this.diagramData.renderedImages.push(this.renderedDiagrams.get(diagramKey));
                continue;
            }

            // Render the diagram
            const canvas = await this.diagramRenderer.renderDiagram(
                diagramKey,
                0,
                0,
                this.diagramWidth,
                this.diagramHeight,
                {
                    showLabels: true,
                    backgroundColor: '#FFFFFF'
                }
            );

            // Convert to PNG buffer
            const pngBuffer = await canvas.encode('png');

            // Store rendered diagram data
            const diagramData = {
                key: diagramKey,
                buffer: pngBuffer,
                width: this.diagramWidth,
                height: this.diagramHeight,
                type: 'png'
            };

            // Cache the rendered diagram
            this.renderedDiagrams.set(diagramKey, diagramData);
            this.diagramData.renderedImages.push(diagramData);

        } catch (error) {
            console.error(`Failed to render diagram ${diagramKey}:`, error);
            // Add error placeholder
            this.diagramData.renderedImages.push({
                key: diagramKey,
                error: error.message,
                type: 'error'
            });
        }
    }
}

// Create placeholder section that will be updated when diagrams are ready
createDiagramsPlaceholderSection() {
    if (!this.includeDiagramsInWorkbook) {
        return null;
    }

    return {
        title: 'Photosynthesis Diagrams',
        type: 'diagrams',
        status: 'loading',
        diagrams: [],
        note: 'Diagrams are being rendered...'
    };
}

// Update the diagrams section once rendering is complete
updateDiagramsSection() {
    if (!this.currentWorkbook || !this.diagramData) return;

    // Find the diagrams section
    const diagramSectionIndex = this.currentWorkbook.sections.findIndex(
        section => section.type === 'diagrams'
    );

    if (diagramSectionIndex === -1) return;

    // Update the section with rendered diagrams
    const diagramSection = {
        title: 'Photosynthesis Diagrams',
        type: 'diagrams',
        status: 'complete',
        diagrams: []
    };

    for (const diagram of this.diagramData.renderedImages) {
        if (diagram.type === 'error') {
            diagramSection.diagrams.push({
                key: diagram.key,
                error: diagram.error,
                type: 'error'
            });
        } else {
            diagramSection.diagrams.push({
                key: diagram.key,
                buffer: diagram.buffer,
                width: diagram.width,
                height: diagram.height,
                type: 'image'
            });
        }
    }

    this.currentWorkbook.sections[diagramSectionIndex] = diagramSection;
}

// Method to wait for diagrams to finish rendering
async waitForDiagrams() {
    if (this.diagramsPromise) {
        await this.diagramsPromise;
    }
    return this.diagramData;
}

// Method to check if diagrams are ready
areDiagramsReady() {
    return this.diagramData && this.diagramData.status === 'complete';
}

getRelevantPhotosynthesisDiagrams(topicType) {
    const diagramMap = {
        overview: [
            "photosynthesisOverview",
            "chloroplastStructure",
            "leafCrossSection"
        ],
        light_reactions: [
            "photosynthesisDetailed",
            "chloroplastStructure",
            "electronTransportChain",
            "atpStructure"
        ],
        calvin_cycle: [
            "photosynthesisDetailed",
            "chloroplastStructure",
            "calvinCycle"
        ],
        photosynthetic_pigments: [
            "chloroplastStructure",
            "photosynthesisDetailed"
        ],
        chloroplast_structure: [
            "chloroplastStructure",
            "cellStructure",
            "photosynthesisDetailed"
        ],
        alternative_pathways: [
            "photosynthesisDetailed",
            "leafCrossSection",
            "chloroplastStructure"
        ],
        environmental_factors: [
            "photosynthesisDetailed",
            "leafCrossSection"
        ],
        leaf_anatomy: [
            "leafCrossSection",
            "cellStructure",
            "plantCell"
        ]
    };

    return diagramMap[topicType] || ["photosynthesisDetailed", "chloroplastStructure"];
}

// Helper method to export a single diagram (async but optional)
async exportDiagram(diagramKey, filename, options = {}) {
    const width = options.width || this.diagramWidth;
    const height = options.height || this.diagramHeight;

    try {
        await this.diagramRenderer.exportToFile(
            diagramKey,
            filename,
            width,
            height,
            {
                showLabels: options.showLabels !== false,
                backgroundColor: options.backgroundColor || '#FFFFFF'
            }
        );
        return { success: true, filename };
    } catch (error) {
        console.error(`Failed to export diagram ${diagramKey}:`, error);
        return { success: false, error: error.message };
    }
}

// Helper method to export all diagrams for current topic (async but optional)
async exportAllDiagramsForTopic(outputDir = './diagrams') {
    // Wait for diagrams to be ready first
    await this.waitForDiagrams();

    if (!this.diagramData || !this.diagramData.diagrams) {
        throw new Error('No diagrams available for current topic');
    }

    const fs = await import('fs');
    const path = await import('path');

    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const results = [];

    for (const diagramKey of this.diagramData.diagrams) {
        const filename = path.join(outputDir, `${diagramKey}.png`);
        const result = await this.exportDiagram(diagramKey, filename);
        results.push({ diagramKey, ...result });
    }

    return results;
}

// Method to get diagram as buffer for embedding (async but optional)
async getDiagramBuffer(diagramKey, options = {}) {
    const width = options.width || this.diagramWidth;
    const height = options.height || this.diagramHeight;

    try {
        return await this.diagramRenderer.exportToPng(
            diagramKey,
            width,
            height,
            {
                showLabels: options.showLabels !== false,
                backgroundColor: options.backgroundColor || '#FFFFFF'
            }
        );
    } catch (error) {
        console.error(`Failed to get diagram buffer for ${diagramKey}:`, error);
        return null;
    }
}

// Clear diagram cache
clearDiagramCache() {
    this.renderedDiagrams.clear();
    this.diagramsPromise = null;
    console.log('Photosynthesis diagram cache cleared');
}

// Get cache statistics
getDiagramCacheStats() {
    return {
        cachedDiagrams: this.renderedDiagrams.size,
        cacheKeys: Array.from(this.renderedDiagrams.keys()),
        diagramsReady: this.areDiagramsReady(),
        status: this.diagramData?.status || 'not_started'
    };
}

// Update getWorkbookStatus to include diagram info
getWorkbookStatus() {
    return {
        hasProblem: !!this.currentProblem,
        hasContent: !!this.currentContent,
        hasWorkbook: !!this.currentWorkbook,
        hasExperiment: !!this.currentExperiment,
        hasDiagrams: !!this.diagramData && this.diagramData.renderedImages?.length > 0,
        diagramsReady: this.areDiagramsReady(),
        diagramStatus: this.diagramData?.status || 'not_started',
        diagramCount: this.diagramData?.renderedImages?.length || 0,
        cachedDiagrams: this.renderedDiagrams.size,
        learnerLevel: this.learnerProfile.currentLevel,
        masteredTopics: this.learnerProfile.masteredTopics.length,
        strugglingTopics: this.learnerProfile.strugglingTopics.length
    };
}

createWorkbookStructure() {
    return {
        title: 'Photosynthesis Biology Workbook',
        timestamp: new Date().toISOString(),
        theme: this.theme,
        dimensions: { width: this.width, height: this.height },
        learnerLevel: this.learnerProfile.currentLevel,
        sections: []
    };
}

createProblemSection() {
    if (!this.currentProblem) return null;

    return {
        title: 'Topic Information',
        type: 'problem',
        data: [
            ['Topic Type', this.currentProblem.type],
            ['Main Topic', this.currentProblem.originalTopic],
            ['Sub-Topic', this.currentProblem.subTopic || 'General'],
            ['Category', this.photosynthesisTopics[this.currentProblem.type]?.category || 'N/A'],
            ['Difficulty', this.currentProblem.difficulty || 'Intermediate'],
            ['Prerequisites', this.currentProblem.prerequisites ? this.currentProblem.prerequisites.join(', ') : 'None']
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

    // Process different content structures
    this.processContentStructure(this.currentContent, contentData);

    return contentData.length > 0 ? {
        title: 'Detailed Content',
        type: 'detailed_content',
        data: contentData
    } : null;
}

processContentStructure(obj, dataArray, prefix = '') {
    Object.entries(obj).forEach(([key, value]) => {
        // Skip meta fields
        if (key === 'topic' || key === 'category' || key === 'summary') return;

        if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
            dataArray.push([`${prefix}${key.toUpperCase()}`, '']);
            this.processContentStructure(value, dataArray, '  ');
        } else if (Array.isArray(value)) {
            dataArray.push([`${prefix}${key}`, '']);
            value.forEach(item => {
                if (typeof item === 'string') {
                    dataArray.push([`${prefix}  •`, item]);
                } else if (typeof item === 'object') {
                    Object.entries(item).forEach(([k, v]) => {
                        dataArray.push([`${prefix}  ${k}`, typeof v === 'object' ? JSON.stringify(v) : v]);
                    });
                    dataArray.push(['', '']);
                }
            });
        } else {
            dataArray.push([`${prefix}${key}`, value]);
        }
    });
}

createComparisonsWorkbookSection() {
    if (!this.currentContent?.comparison) return null;

    const comparisonData = [];
    
    if (Array.isArray(this.currentContent.comparison)) {
        comparisonData.push(['Feature', 'Option 1', 'Option 2', 'Option 3']);
        this.currentContent.comparison.forEach(comp => {
            const row = [];
            Object.values(comp).forEach(val => row.push(val));
            comparisonData.push(row);
        });
    } else if (this.currentContent.comparison.table) {
        // Handle table format (like C3 vs C4 vs CAM comparison)
        const table = this.currentContent.comparison.table;
        comparisonData.push(...table.rows);
    } else {
        Object.entries(this.currentContent.comparison).forEach(([key, value]) => {
            if (key === 'table') return; // Already handled above
            comparisonData.push([key.toUpperCase(), '']);
            if (typeof value === 'object' && !Array.isArray(value)) {
                Object.entries(value).forEach(([k, v]) => {
                    if (Array.isArray(v)) {
                        comparisonData.push([`  ${k}:`, '']);
                        v.forEach(item => comparisonData.push(['    -', item]));
                    } else {
                        comparisonData.push([`  ${k}`, typeof v === 'object' ? JSON.stringify(v) : v]);
                    }
                });
            }
            comparisonData.push(['', '']);
        });
    }

    return {
        title: 'Comparisons',
        type: 'comparisons',
        data: comparisonData
    };
}

createExamplesApplicationsSection() {
    if (!this.currentContent.examples && !this.currentContent.applications) return null;

    const data = [];

    if (this.currentContent.examples) {
        data.push(['EXAMPLES', '']);
        this.currentContent.examples.forEach(example => {
            if (typeof example === 'object') {
                Object.entries(example).forEach(([key, value]) => {
                    data.push([key, typeof value === 'object' ? JSON.stringify(value) : value]);
                });
                data.push(['', '']);
            } else if (typeof example === 'string') {
                data.push(['•', example]);
            }
        });
    }

    if (this.currentContent.applications) {
        data.push(['APPLICATIONS', '']);
        this.currentContent.applications.forEach(app => {
            data.push(['•', app]);
        });
    }

    if (this.currentContent.keyTakeaways) {
        data.push(['', '']);
        data.push(['KEY TAKEAWAYS', '']);
        this.currentContent.keyTakeaways.forEach(takeaway => {
            data.push(['•', takeaway]);
        });
    }

    return data.length > 0 ? {
        title: 'Examples and Applications',
        type: 'examples_applications',
        data: data
    } : null;
}

createContextualScenariosWorkbookSection() {
    if (!this.currentContent.contextualScenarios || this.currentContent.contextualScenarios.length === 0) {
        return null;
    }

    const data = [['Scenario', 'Context', 'Application', 'Question']];
    
    this.currentContent.contextualScenarios.forEach(scenario => {
        data.push([
            scenario.scenario,
            scenario.context,
            scenario.application,
            scenario.question || ''
        ]);
    });

    return {
        title: 'Real-World Scenarios',
        type: 'contextual',
        data: data
    };
}

createRelatedExperimentsWorkbookSection() {
    if (!this.includeExperiments || !this.currentContent.relatedExperiments) {
        return null;
    }

    const data = [['Experiment Name', 'Category', 'Scientist', 'Year']];

    this.currentContent.relatedExperiments.forEach(exp => {
        const fullExp = this.photosynthesisExperiments[exp.id];
        data.push([
            exp.name,
            exp.category,
            fullExp?.historicalBackground?.scientist || 'Various',
            fullExp?.historicalBackground?.year || 'N/A'
        ]);
    });

    return {
        title: 'Related Experiments',
        type: 'experiments',
        data: data
    };
}

createMisconceptionsSection() {
    if (!this.includeCommonMisconceptions) return null;

    const misconceptions = this.commonMisconceptions[this.currentProblem.type];
    if (!misconceptions) return null;

    const data = [['Category', 'Common Misconceptions']];

    Object.entries(misconceptions).forEach(([category, miscList]) => {
        data.push([category, '']);
        miscList.forEach(misc => {
            data.push(['  •', misc]);
        });
        data.push(['', '']);
    });

    return {
        title: 'Common Misconceptions',
        type: 'misconceptions',
        data: data
    };
}

createMetacognitiveWorkbookSection() {
    if (!this.metacognitiveSupport || !this.currentContent.metacognitivePrompts) {
        return null;
    }

    const data = [];

    Object.entries(this.currentContent.metacognitivePrompts).forEach(([phase, prompts]) => {
        data.push([phase.toUpperCase().replace('_', ' '), '']);
        prompts.forEach(prompt => {
            data.push(['  •', prompt]);
        });
        data.push(['', '']);
    });

    return {
        title: 'Learning Strategies',
        type: 'metacognitive',
        data: data
    };
}

createAssessmentSection() {
    if (!this.assessmentFeedback) return null;

    const questions = this.generateAssessmentQuestions(this.currentProblem.type);
    if (!questions || Object.keys(questions).length === 0) return null;

    const data = [['Bloom\'s Level', 'Assessment Question']];

    Object.entries(questions).forEach(([level, question]) => {
        data.push([level.charAt(0).toUpperCase() + level.slice(1), question]);
    });

    return {
        title: 'Assessment Questions',
        type: 'assessment',
        data: data
    };
}

generateAssessmentQuestions(topicType) {
    return this.assessmentQuestions[topicType] || {};
}


// ========================================
// UTILITY AND HELPER METHODS
// ========================================

getAllExperiments() {
    return Object.entries(this.photosynthesisExperiments).map(([id, exp]) => ({
        id: id,
        name: exp.name,
        category: exp.category,
        relatedTopics: exp.relatedTopics,
        scientist: exp.historicalBackground?.scientist,
        year: exp.historicalBackground?.year
    }));
}

getAllTopics() {
    return Object.entries(this.photosynthesisTopics).map(([id, topic]) => ({
        id: id,
        name: topic.name,
        category: topic.category,
        description: topic.description,
        difficulty: topic.difficulty,
        prerequisites: topic.prerequisites
    }));
}

getTopicsByCategory(category) {
    return Object.entries(this.photosynthesisTopics)
        .filter(([_, topic]) => topic.category === category)
        .map(([id, topic]) => ({
            id: id,
            name: topic.name,
            description: topic.description
        }));
}

getExperimentsByCategory(category) {
    return Object.entries(this.photosynthesisExperiments)
        .filter(([_, exp]) => exp.category === category)
        .map(([id, exp]) => ({
            id: id,
            name: exp.name,
            scientist: exp.historicalBackground?.scientist
        }));
}

resetWorkbook() {
    this.currentProblem = null;
    this.currentContent = null;
    this.contentSteps = [];
    this.currentWorkbook = null;
    this.currentExperiment = null;
    this.diagramData = null;
    this.diagramsPromise = null;
}

formatPhotosynthesisTerm(term) {
    let formatted = term;
    
    Object.entries(this.photosynthesisSymbols).forEach(([key, symbol]) => {
        const regex = new RegExp(key, 'g');
        formatted = formatted.replace(regex, symbol);
    });

    return formatted;
}

formatKey(key) {
    // Convert camelCase or snake_case to Title Case
    return key
        .replace(/([A-Z])/g, ' $1')
        .replace(/_/g, ' ')
        .replace(/^./, str => str.toUpperCase())
        .trim();
}

// ========================================
// PHOTOSYNTHESIS-SPECIFIC HELPER METHODS
// ========================================

getTopicRelevance(topicType) {
    const relevance = {
        overview: "Photosynthesis is the foundation of most food chains and the source of atmospheric oxygen",
        light_reactions: "Light reactions convert solar energy into chemical energy, powering all life on Earth",
        calvin_cycle: "The Calvin cycle fixes atmospheric CO₂ into organic molecules, forming the basis of the food chain",
        photosynthetic_pigments: "Pigments capture light energy across the spectrum, maximizing photosynthetic efficiency",
        chloroplast_structure: "Chloroplast organization reflects billions of years of evolution for optimal photosynthesis",
        alternative_pathways: "C4 and CAM adaptations allow photosynthesis in challenging environments, crucial for agriculture",
        environmental_factors: "Understanding limiting factors is essential for agriculture and predicting climate change impacts",
        leaf_anatomy: "Leaf structure represents the perfect balance between light capture and water conservation"
    };

    return relevance[topicType] || "Important photosynthesis concept";
}

suggestRelatedTopics() {
    if (!this.currentProblem) return [];

    const relatedTopicsMap = {
        overview: ['light_reactions', 'calvin_cycle', 'chloroplast_structure'],
        light_reactions: ['overview', 'photosynthetic_pigments', 'chloroplast_structure', 'calvin_cycle'],
        calvin_cycle: ['overview', 'light_reactions', 'alternative_pathways'],
        photosynthetic_pigments: ['light_reactions', 'environmental_factors'],
        chloroplast_structure: ['overview', 'light_reactions', 'calvin_cycle'],
        alternative_pathways: ['calvin_cycle', 'environmental_factors', 'leaf_anatomy'],
        environmental_factors: ['overview', 'alternative_pathways', 'leaf_anatomy'],
        leaf_anatomy: ['environmental_factors', 'alternative_pathways', 'chloroplast_structure']
    };

    const relatedTypes = relatedTopicsMap[this.currentProblem.type] || [];

    return relatedTypes.map(type => ({
        type: type,
        name: this.photosynthesisTopics[type]?.name,
        description: this.photosynthesisTopics[type]?.description
    }));
}

generatePhotosynthesisAnalogy(concept) {
    const analogies = {
        // Overview
        photosynthesis: "Like a solar panel that creates food instead of electricity",
        chloroplast: "Like a factory with two assembly lines (light reactions and Calvin cycle)",
        
        // Light Reactions
        photosystem: "Like a solar collector that boosts electrons to higher energy",
        electron_transport: "Like a bucket brigade passing water downhill, generating power",
        water_splitting: "Like breaking apart water molecules to get raw materials (electrons)",
        atp_synthase: "Like a water wheel turned by flowing protons to make ATP",
        
        // Calvin Cycle
        calvin_cycle: "Like a factory assembly line building glucose from CO₂ parts",
        rubisco: "Like a worker that grabs CO₂ from the air and attaches it to RuBP",
        carbon_fixation: "Like capturing CO₂ gas and turning it into solid organic matter",
        
        // Pigments
        chlorophyll: "Like a solar panel that absorbs red and blue light",
        carotenoids: "Like backup solar collectors that also protect from too much sun",
        antenna_complex: "Like a satellite dish focusing energy to a receiver",
        
        // Structure
        thylakoid: "Like stacked pancakes where light reactions occur",
        stroma: "Like the fluid filling a factory floor where Calvin cycle operates",
        grana: "Like stacks of coins increasing surface area for light capture",
        
        // Alternative Pathways
        c4_pathway: "Like a two-room system where CO₂ is concentrated before use",
        cam_pathway: "Like working night shift (collect CO₂) and day shift (process it) separately",
        photorespiration: "Like a wasteful mistake where the enzyme uses oxygen instead of CO₂",
        
        // Environmental Factors
        light_saturation: "Like a worker who can only work so fast even with more light",
        stomata: "Like adjustable vents balancing CO₂ intake with water loss",
        limiting_factor: "Like a production line limited by the slowest worker",
        
        // Leaf Anatomy
        palisade_cells: "Like solar panels arranged vertically to catch maximum light",
        spongy_mesophyll: "Like a sponge with air spaces for gas exchange",
        guard_cells: "Like doormen that open and close the stomata pores",
        veins: "Like highways transporting water in and sugar out"
    };

    return analogies[concept] || "Performs a specialized photosynthetic function";
}

adaptPhotosynthesisLanguage(text, level) {
    if (!text) return '';

    const adaptations = {
        basic: {
            replacements: {
                'photosystem': 'light-capturing structure',
                'thylakoid': 'membrane inside chloroplast',
                'stroma': 'fluid in chloroplast',
                'NADPH': 'energy carrier molecule',
                'ATP': 'energy molecule',
                'RuBisCO': 'CO₂-capturing enzyme',
                'photorespiration': 'wasteful process using oxygen',
                'photophosphorylation': 'making ATP using light',
                'chemiosmosis': 'making ATP using proton flow',
                'photolysis': 'splitting water with light',
                'carbon fixation': 'capturing CO₂',
                'Calvin cycle': 'CO₂-to-sugar cycle',
                'light-dependent': 'needs light',
                'light-independent': 'doesn\'t need light directly'
            }
        },
        intermediate: {
            replacements: {
                'photosystem': 'photosystem (light-harvesting complex)',
                'NADPH': 'NADPH (electron carrier)',
                'RuBisCO': 'RuBisCO enzyme',
                'photorespiration': 'photorespiration',
                'Calvin cycle': 'Calvin cycle'
            }
        },
        advanced: {
            replacements: {
                'photosystem': 'photosystem complex',
                'NADPH': 'NADPH (nicotinamide adenine dinucleotide phosphate)',
                'RuBisCO': 'ribulose-1,5-bisphosphate carboxylase/oxygenase',
                'photorespiration': 'photorespiration (C₂ oxidative photosynthetic carbon cycle)',
                'Calvin cycle': 'Calvin-Benson cycle (reductive pentose phosphate pathway)'
            }
        }
    };

    const levelAdaptation = adaptations[level] || adaptations.intermediate;
    let adaptedText = text;

    for (const [term, replacement] of Object.entries(levelAdaptation.replacements)) {
        const regex = new RegExp(`\\b${term}\\b`, 'gi');
        adaptedText = adaptedText.replace(regex, replacement);
    }

    return adaptedText;
}

addPhotosynthesisConceptualConnections(content) {
    if (!this.includeConceptualConnections) return content;

    const connections = {
        overview: "Photosynthesis connects to cellular respiration (opposite processes), ecology (food chains), climate science (carbon cycle), and evolution (origin of oxygen atmosphere).",
        light_reactions: "Light reactions connect to chemiosmosis (same principle as mitochondria), quantum mechanics (photon absorption), and electrochemistry (redox reactions).",
        calvin_cycle: "Calvin cycle connects to gluconeogenesis (similar reactions), photorespiration (competing pathway), and global carbon cycle (CO₂ fixation).",
        photosynthetic_pigments: "Pigments connect to organic chemistry (conjugated systems), optics (light absorption), and evolution (different pigments in different lineages).",
        chloroplast_structure: "Chloroplast structure connects to endosymbiosis (evolutionary origin), cell biology (organelles), and biochemistry (compartmentalization).",
        alternative_pathways: "C4/CAM pathways connect to plant evolution (adaptations), ecology (habitat specialization), and agriculture (crop selection).",
        environmental_factors: "Environmental factors connect to climate science (global change), agriculture (crop management), and ecology (plant distribution).",
        leaf_anatomy: "Leaf anatomy connects to plant physiology (gas exchange), evolution (adaptations), and biomimicry (artificial photosynthesis design)."
    };

    content.conceptualConnections = connections[this.currentProblem.type] || 
        "This topic connects to broader photosynthesis and biological principles";

    return content;
}

enrichWithPhotosynthesisExamples(content) {
    if (!this.includeExamples || content.examples) return content;

    const exampleDatabase = {
        overview: [
            "Amazon rainforest produces ~20% of global oxygen through photosynthesis",
            "One large tree can produce enough oxygen for 2 people per year",
            "Phytoplankton perform ~50% of global photosynthesis (more than all terrestrial plants)"
        ],
        light_reactions: [
            "Chlorophyll fluorescence: red glow when leaves illuminated then darkened (electrons returning to ground state)",
            "Herbicide DCMU blocks electron transport between PSII and PSI, killing plants",
            "High-altitude plants have more carotenoids (photoprotection from intense UV)"
        ],
        calvin_cycle: [
            "Rising atmospheric CO₂ (420 ppm) increases C3 crop yields ~20-30% (CO₂ fertilization)",
            "RuBisCO constitutes ~50% of leaf protein (most abundant protein on Earth)",
            "Algae biofuels: engineered to maximize Calvin cycle efficiency for lipid production"
        ],
        photosynthetic_pigments: [
            "Fall colors: chlorophyll breaks down revealing carotenoids (orange/yellow) and newly synthesized anthocyanins (red)",
            "Red LED grow lights: energy-efficient because red light strongly absorbed by chlorophyll",
            "Purple sulfur bacteria: use bacteriochlorophyll (absorbs infrared) instead of chlorophyll"
        ],
        chloroplast_structure: [
            "Spinach chloroplasts: ~40-60 per palisade cell, can move to optimize light capture",
            "Chloroplast DNA: inherited maternally in most plants (from egg, not sperm)",
            "Chlamydomonas (algae): single large chloroplast takes up ~40% of cell volume"
        ],
        alternative_pathways: [
            "Corn (C4) vs wheat (C3): corn grows faster in hot climates, wheat better in cool climates",
            "Pineapple (CAM): survives with 1/50th the water requirement of typical C3 plant",
            "C4 grasses dominate African savannas: outcompete C3 plants in hot, sunny conditions"
        ],
        environmental_factors: [
            "Greenhouse CO₂ enrichment (1000 ppm): can increase tomato yield 20-40%",
            "Heat stress: photosynthesis declines above 35°C in C3 plants (photorespiration increases)",
            "Cloud cover reduces photosynthesis ~50% compared to full sun in crop plants"
        ],
        leaf_anatomy: [
            "Water lilies: stomata only on upper surface (contact with air)",
            "Desert plants: sunken stomata in pits reduce water loss by 50-90%",
            "Shade leaves: 2-3× more chlorophyll per area than sun leaves (maximize light capture)"
        ]
    };

    if (exampleDatabase[this.currentProblem.type]) {
        content.examples = content.examples || [];
        content.examples.push(...exampleDatabase[this.currentProblem.type]);
    }

    return content;
}

addPhotosynthesisComparativeContext(content) {
    if (!this.includeComparisons || content.comparison) return content;

    const comparativeData = {
        overview: {
            vsRespiration: "Photosynthesis stores energy; respiration releases energy (opposite processes)",
            efficiency: "~3-6% of light energy stored in glucose (vs ~40% ATP efficiency in respiration)",
            global: "Photosynthesis removes ~120 Gt CO₂/year; respiration/combustion release ~110 Gt/year"
        },
        light_reactions: {
            vsRespiration: "Both use electron transport and chemiosmosis, but opposite energy flow",
            efficiency: "Light reactions ~30% efficient (vs cellular respiration ~40% efficient)",
            location: "Thylakoid membrane (vs mitochondrial inner membrane)"
        },
        calvin_cycle: {
            vsGlycolysis: "Opposite pathways: Calvin builds glucose, glycolysis breaks it down",
            energy: "Calvin uses 18 ATP per glucose; glycolysis produces 2 ATP per glucose",
            location: "Stroma (vs cytoplasm for glycolysis)"
        },
        alternative_pathways: {
            C3vsC4vsCAM: "C3: simple, low energy; C4: spatial separation, medium energy; CAM: temporal separation, high energy but extreme water efficiency"
        },
        environmental_factors: {
            C3vsC4: "C3 optimal <25°C; C4 optimal 30-40°C",
            waterUse: "C3 loses 300-500 H₂O per CO₂; C4 loses 150-250; CAM loses 50-100"
        }
    };

    if (comparativeData[this.currentProblem.type]) {
        content.comparativeContext = comparativeData[this.currentProblem.type];
    }

    return content;
}

validatePhotosynthesisContent(content) {
    const validationResults = {
        isValid: true,
        warnings: [],
        suggestions: []
    };

    // Check for required fields
    if (!content.topic) {
        validationResults.warnings.push("Missing topic title");
        validationResults.isValid = false;
    }

    if (!content.category) {
        validationResults.warnings.push("Missing category classification");
    }

    if (!content.summary) {
        validationResults.suggestions.push("Consider adding a summary");
    }

    // Check for content depth
    const hasSubstantiveContent = 
        content.overallEquation ||
        content.twoStages ||
        content.photosystems ||
        content.threePhases ||
        content.types ||
        content.membraneSystem ||
        content.C3Photosynthesis ||
        content.lightIntensity ||
        content.internalAnatomy;

    if (!hasSubstantiveContent) {
        validationResults.warnings.push("Limited substantive content");
        validationResults.suggestions.push("Consider adding more detailed information");
    }

    // Check for educational value
    if (!content.examples && !content.applications) {
        validationResults.suggestions.push("Consider adding examples and applications");
    }

    // Check for comparisons
    if (!content.comparison) {
        validationResults.suggestions.push("Consider adding comparative information");
    }

    // Check for key takeaways
    if (!content.keyTakeaways) {
        validationResults.suggestions.push("Consider adding key takeaways");
    }

    return validationResults;
}

calculatePhotosynthesisContentCompleteness() {
    if (!this.currentContent) return 0;

    let score = 0;
    const maxScore = 10;

    // Award points for different content aspects
    if (this.currentContent.topic) score += 1;
    if (this.currentContent.summary) score += 1;
    if (this.currentContent.examples) score += 1;
    if (this.currentContent.applications) score += 1;
    if (this.currentContent.comparison) score += 1;
    
    // Main content structures
    const hasMainContent = 
        this.currentContent.overallEquation ||
        this.currentContent.photosystems ||
        this.currentContent.threePhases ||
        this.currentContent.types ||
        this.currentContent.membraneSystem ||
        this.currentContent.C3Photosynthesis ||
        this.currentContent.lightIntensity ||
        this.currentContent.internalAnatomy;
    if (hasMainContent) score += 3;

    // Additional depth
    if (this.currentContent.keyTakeaways) score += 1;
    if (this.currentContent.contextualScenarios) score += 1;

    return Math.round((score / maxScore) * 100);
}

getPhotosynthesisContentQualityMetrics() {
    return {
        completeness: this.calculatePhotosynthesisContentCompleteness(),
        hasExamples: !!this.currentContent?.examples,
        hasComparisons: !!this.currentContent?.comparison,
        hasApplications: !!this.currentContent?.applications,
        hasContextualScenarios: !!this.currentContent?.contextualScenarios,
        hasKeyTakeaways: !!this.currentContent?.keyTakeaways,
        detailLevel: this.explanationLevel,
        includesVisualizations: this.includeVisualizations,
        includesMisconceptions: this.includeCommonMisconceptions,
        includesExperiments: this.includeExperiments,
        adaptiveDifficulty: this.adaptiveDifficulty,
        metacognitiveSupport: this.metacognitiveSupport
    };
}

filterPhotosynthesisContentByCategory(category) {
    if (!this.currentContent) return null;

    const filtered = {
        category: category,
        items: []
    };

    // Filter based on category
    Object.entries(this.currentContent).forEach(([key, value]) => {
        if (key.toLowerCase().includes(category.toLowerCase())) {
            filtered.items.push({ type: key, data: value });
        }
    });

    return filtered;
}

generatePhotosynthesisContentSummary() {
    if (!this.currentContent) return null;

    const summary = {
        topic: this.currentContent.topic,
        category: this.currentContent.category,
        summary: this.currentContent.summary,
        keyPoints: [],
        coverage: {},
        difficulty: this.currentProblem?.difficulty
    };

    // Extract key points
    if (this.currentContent.keyTakeaways) {
        summary.keyPoints.push(...this.currentContent.keyTakeaways.slice(0, 5));
    }

    if (this.currentContent.overallEquation) {
        summary.coverage.equation = true;
    }

    if (this.currentContent.twoStages) {
        summary.coverage.stages = true;
    }

    if (this.currentContent.photosystems) {
        summary.coverage.mechanisms = true;
    }

    if (this.currentContent.examples) {
        summary.coverage.examples = this.currentContent.examples.length;
    }

    return summary;
}

assessPhotosynthesisContentDifficulty() {
    if (!this.currentContent) return 'unknown';

    let difficultyScore = 0;

    // Topic-based difficulty
    const basicTopics = ['overview', 'leaf_anatomy', 'chloroplast_structure'];
    const intermediateTopics = ['photosynthetic_pigments', 'environmental_factors'];
    const advancedTopics = ['light_reactions', 'calvin_cycle', 'alternative_pathways'];

    if (basicTopics.includes(this.currentProblem.type)) {
        difficultyScore += 1;
    } else if (intermediateTopics.includes(this.currentProblem.type)) {
        difficultyScore += 2;
    } else if (advancedTopics.includes(this.currentProblem.type)) {
        difficultyScore += 3;
    }

    // Adjust based on detail level
    if (this.explanationLevel === 'advanced') difficultyScore += 1;
    if (this.explanationLevel === 'basic') difficultyScore -= 1;

    // Return difficulty rating
    if (difficultyScore <= 2) return 'beginner';
    if (difficultyScore <= 4) return 'intermediate';
    return 'advanced';
}

generatePhotosynthesisLearningObjectives() {
    if (!this.currentProblem) return [];

    const objectivesDatabase = {
        overview: [
            "Write the overall equation for photosynthesis",
            "Explain the two main stages of photosynthesis and where they occur",
            "Describe the role of light energy in photosynthesis",
            "Explain how photosynthesis relates to cellular respiration"
        ],
        light_reactions: [
            "Trace the path of electrons from water to NADPH (Z-scheme)",
            "Explain how the proton gradient is established and used",
            "Describe the roles of PSII and PSI in light reactions",
            "Explain the difference between cyclic and noncyclic photophosphorylation"
        ],
        calvin_cycle: [
            "Identify the three phases of the Calvin cycle",
            "Explain the role of RuBisCO in carbon fixation",
            "Calculate the inputs and outputs for making one glucose",
            "Describe how the Calvin cycle regenerates RuBP"
        ],
        photosynthetic_pigments: [
            "Distinguish between chlorophyll a, chlorophyll b, and carotenoids",
            "Explain why plants appear green",
            "Interpret absorption and action spectra",
            "Describe the function of the antenna complex"
        ],
        chloroplast_structure: [
            "Identify the major components of chloroplast structure",
            "Explain how thylakoid organization supports photosynthesis",
            "Describe evidence for endosymbiotic origin of chloroplasts",
            "Relate chloroplast structure to function"
        ],
        alternative_pathways: [
            "Compare and contrast C3, C4, and CAM photosynthesis",
            "Explain the problem of photorespiration",
            "Describe how C4 plants minimize photorespiration",
            "Relate photosynthetic pathways to climate and habitat"
        ],
        environmental_factors: [
            "Apply the law of limiting factors to photosynthesis",
            "Explain how light intensity affects photosynthetic rate",
            "Describe the effects of temperature on photosynthesis",
            "Analyze the tradeoff between CO₂ uptake and water loss"
        ],
        leaf_anatomy: [
            "Identify the major tissues in a leaf cross-section",
            "Explain the structure and function of stomata",
            "Describe how guard cells control stomatal opening",
            "Relate leaf anatomy to photosynthetic function"
        ]
    };

    return objectivesDatabase[this.currentProblem.type] || [
        "Understand the key photosynthesis concepts",
        "Apply knowledge to biological contexts",
        "Make connections between structure and function"
    ];
}

identifyPhotosynthesisPrerequisites() {
    if (!this.currentProblem) return [];

    const prerequisitesDatabase = {
        overview: [
            "Basic chemistry (atoms, molecules, chemical equations)",
            "Understanding of energy and energy transformations",
            "Basic cell biology (organelles)"
        ],
        light_reactions: [
            "Photosynthesis overview",
            "Understanding of redox reactions",
            "Knowledge of ATP and NADPH",
            "Basic membrane biology"
        ],
        calvin_cycle: [
            "Photosynthesis overview",
            "Light reactions (ATP and NADPH)",
            "Basic understanding of enzymes",
            "Chemical equations and stoichiometry"
        ],
        photosynthetic_pigments: [
            "Basic chemistry (molecules)",
            "Understanding of light and electromagnetic spectrum",
            "Knowledge of absorption and reflection"
        ],
        chloroplast_structure: [
            "Cell biology (organelles)",
            "Membrane structure",
            "Basic understanding of photosynthesis stages"
        ],
        alternative_pathways: [
            "Calvin cycle",
            "Understanding of RuBisCO and photorespiration",
            "Plant anatomy basics"
        ],
        environmental_factors: [
            "Photosynthesis overview",
            "Understanding of enzyme kinetics",
            "Basic ecology concepts"
        ],
        leaf_anatomy: [
            "Basic plant biology",
            "Cell structure",
            "Understanding of gas exchange"
        ]
    };

    return prerequisitesDatabase[this.currentProblem.type] || [
        "Basic biology background",
        "Understanding of chemistry fundamentals"
    ];
}

generatePhotosynthesisStudyTips() {
    if (!this.currentProblem) return [];

    const studyTipsDatabase = {
        overview: [
            "Create a concept map connecting light reactions, Calvin cycle, inputs, and outputs",
            "Practice writing and balancing the overall equation",
            "Compare photosynthesis to cellular respiration (opposite processes)",
            "Use mnemonics: 'Light reactions Light up the Energy' (make ATP/NADPH)"
        ],
        light_reactions: [
            "Draw the Z-scheme multiple times until you can do it from memory",
            "Trace one electron from water all the way to NADPH",
            "Create flashcards for each protein complex and its function",
            "Watch animations of electron transport and ATP synthesis"
        ],
        calvin_cycle: [
            "Draw the cycle showing all three phases",
            "Practice calculating inputs/outputs for 3 CO₂ vs 6 CO₂",
            "Make a model showing how 5 G3P regenerate 3 RuBP",
            "Use the mnemonic 'Fred Reduced Randy' (Fixation, Reduction, Regeneration)"
        ],
        photosynthetic_pigments: [
            "Do paper chromatography lab to see pigments separated",
            "Create a color-coded absorption spectrum diagram",
            "Compare absorption vs action spectra side-by-side",
            "Relate pigment structure to function using molecular models"
        ],
        chloroplast_structure: [
            "Build a 3D model of chloroplast structure",
            "Label diagrams showing where each process occurs",
            "Compare chloroplast to mitochondria structure",
            "Study electron micrographs of real chloroplasts"
        ],
        alternative_pathways: [
            "Create a comparison table for C3, C4, and CAM",
            "Draw Kranz anatomy for C4 plants",
            "Make timeline showing when stomata open for each pathway",
            "Practice explaining why each pathway is adaptive in different climates"
        ],
        environmental_factors: [
            "Graph photosynthetic rate vs each factor",
            "Practice identifying limiting factors in scenarios",
            "Relate factors to real-world applications (greenhouses, climate change)",
            "Create flowcharts showing factor interactions"
        ],
        leaf_anatomy: [
            "Label leaf cross-section diagrams repeatedly",
            "Examine real leaf sections under microscope",
            "Draw stomatal opening/closing mechanism",
            "Relate each tissue to its specific function"
        ]
    };

    return studyTipsDatabase[this.currentProblem.type] || [
        "Review material regularly with active recall",
        "Create visual aids and diagrams",
        "Practice explaining concepts to others",
        "Relate photosynthesis to real-world applications"
    ];
}

generatePhotosynthesisProcessTimeline(processName) {
    const timelines = {
        'Light Reactions': [
            { event: 'Photon absorption', duration: 'Femtoseconds (10⁻¹⁵ s)', location: 'Antenna complex' },
            { event: 'Energy transfer to reaction center', duration: 'Picoseconds (10⁻¹² s)', location: 'Light-harvesting complex' },
            { event: 'Electron excitation', duration: 'Femtoseconds', location: 'P₆₈₀ or P₇₀₀' },
            { event: 'Electron transport through ETC', duration: 'Milliseconds (10⁻³ s)', location: 'Thylakoid membrane' },
            { event: 'ATP synthesis', duration: 'Milliseconds', location: 'ATP synthase' },
            { event: 'Complete light reaction cycle', duration: '~20 milliseconds', result: 'ATP + NADPH produced' }
        ],
        'Calvin Cycle': [
            { phase: 'Carbon fixation', duration: 'Seconds', enzyme: 'RuBisCO', product: '3-PGA' },
            { phase: 'Reduction', duration: 'Seconds', enzyme: 'G3P dehydrogenase', product: 'G3P' },
            { phase: 'Regeneration', duration: 'Seconds', enzyme: 'Multiple enzymes', product: 'RuBP' },
            { phase: 'Complete cycle (3 turns)', duration: '~10-30 seconds', product: '1 net G3P' },
            { phase: 'Glucose synthesis (6 turns)', duration: '~20-60 seconds', product: '1 glucose' }
        ],
        'Daily Photosynthesis': [
            { time: 'Dawn', event: 'Stomata begin opening', rate: 'Low (light just starting)' },
            { time: 'Mid-morning', event: 'Maximum stomatal opening', rate: 'Increasing rapidly' },
            { time: 'Midday', event: 'Peak photosynthesis', rate: 'Maximum (if water sufficient)' },
            { time: 'Afternoon', event: 'Possible stomatal closure (heat/water stress)', rate: 'May decline' },
            { time: 'Late afternoon', event: 'Photosynthesis declining', rate: 'Decreasing' },
            { time: 'Dusk', event: 'Stomata closing', rate: 'Very low' },
            { time: 'Night', event: 'No photosynthesis (respiration only)', rate: 'Zero' }
        ],
        'CAM Daily Cycle': [
            { time: 'Night (8 PM - 6 AM)', event: 'Stomata OPEN, CO₂ fixation', process: 'PEP carboxylase active, malate stored' },
            { time: 'Dawn (6 AM)', event: 'Stomata begin closing', process: 'Transition period' },
            { time: 'Day (7 AM - 6 PM)', event: 'Stomata CLOSED, Calvin cycle', process: 'Malate decarboxylated, CO₂ released internally' },
            { time: 'Dusk (6 PM)', event: 'Stomata begin opening', process: 'Transition to night fixation' }
        ]
    };

    return timelines[processName] || [];
}

generatePhotosynthesisContentHierarchy() {
    if (!this.currentContent) return null;

    const hierarchy = {
        root: this.currentContent.topic,
        children: []
    };

    // Build hierarchy based on content structure
    if (this.currentContent.overallEquation) {
        hierarchy.children.push({
            name: 'Overall Process',
            type: 'section',
            children: ['Equation', 'Energy transformations']
        });
    }

    if (this.currentContent.twoStages) {
        hierarchy.children.push({
            name: 'Two Stages',
            type: 'section',
            children: ['Light reactions', 'Calvin cycle']
        });
    }

    if (this.currentContent.photosystems) {
        hierarchy.children.push({
            name: 'Light Reactions',
            type: 'section',
            children: ['Photosystems', 'Electron transport', 'ATP synthesis']
        });
    }

    if (this.currentContent.threePhases) {
        hierarchy.children.push({
            name: 'Calvin Cycle',
            type: 'section',
            children: ['Fixation', 'Reduction', 'Regeneration']
        });
    }

    return hierarchy;
}

// ========================================
// FINAL UTILITY METHODS
// ========================================

generateGlossary() {
    if (!this.currentContent) return {};

    const glossary = {};

    // Extract from content
    if (this.currentContent.keyDefinitions) {
        Object.assign(glossary, this.currentContent.keyDefinitions);
    }

    // Add common photosynthesis terms
    const commonTerms = {
        'Photosynthesis': 'Process converting light energy to chemical energy stored in glucose',
        'Chloroplast': 'Organelle where photosynthesis occurs',
        'Chlorophyll': 'Green pigment that absorbs light energy',
        'Stomata': 'Pores in leaves allowing gas exchange',
        'ATP': 'Adenosine triphosphate - energy currency of cells',
        'NADPH': 'Electron carrier providing reducing power',
        'RuBisCO': 'Enzyme catalyzing CO₂ fixation in Calvin cycle',
        'Thylakoid': 'Membrane-bound compartment in chloroplast',
        'Stroma': 'Fluid surrounding thylakoids',
        'Photosystem': 'Protein complex containing chlorophyll and accessory pigments'
    };

    Object.entries(commonTerms).forEach(([term, definition]) => {
        if (!glossary[term]) {
            glossary[term] = definition;
        }
    });

    return glossary;
}

// Clean up and finalize
cleanup() {
    this.clearDiagramCache();
    this.resetWorkbook();
}

// Export workbook data
exportWorkbookData() {
    return {
        problem: this.currentProblem,
        content: this.currentContent,
        workbook: this.currentWorkbook,
        diagrams: this.diagramData,
        learnerProfile: this.learnerProfile,
        timestamp: new Date().toISOString()
    };
}

// Get comprehensive status
getComprehensiveStatus() {
    return {
        workbook: this.getWorkbookStatus(),
        content: this.getPhotosynthesisContentQualityMetrics(),
        diagrams: this.getDiagramCacheStats(),
        learner: {
            level: this.learnerProfile.currentLevel,
            mastered: this.learnerProfile.masteredTopics,
            struggling: this.learnerProfile.strugglingTopics,
            history: this.learnerProfile.progressHistory.length
        }
    };
}


// Export the class
export default EnhancedPhotosynthesisBiologyWorkbook;
