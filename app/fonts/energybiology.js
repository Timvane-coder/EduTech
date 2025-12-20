
// Enhanced Energy in Living Systems Workbook - Comprehensive Biological Energy Content System
import * as math from 'mathjs';

export class EnhancedEnergyInLivingSystemsWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "biological";
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

        this.biologicalSymbols = this.initializeBiologicalSymbols();
        this.setThemeColors();
        this.initializeEnergyTopics();
        this.initializeMisconceptionDatabase();
        this.initializeExplanationTemplates();
        this.initializeEnergyLessons();
    }

    setThemeColors() {
        const themes = {
            biological: {
                background: '#ffffff',
                gridColor: '#c0c0c0',
                headerBg: '#d84315',
                headerText: '#ffffff',
                sectionBg: '#ffccbc',
                sectionText: '#bf360c',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#fff3e0',
                resultText: '#e65100',
                definitionBg: '#fff9c4',
                definitionText: '#f57f17',
                stepBg: '#f1f8e9',
                stepText: '#33691e',
                borderColor: '#ff8a65',
                contentBg: '#e3f2fd',
                contentText: '#0d47a1',
                diagramBg: '#f3e5f5',
                structureBg: '#fce4ec'
            },
            scientific: {
                background: '#f8f9fa',
                gridColor: '#4682b4',
                headerBg: '#c62828',
                headerText: '#ffffff',
                sectionBg: '#ffcdd2',
                sectionText: '#b71c1c',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#ffe0b2',
                resultText: '#e65100',
                definitionBg: '#fff3e0',
                definitionText: '#e65100',
                stepBg: '#e8eaf6',
                stepText: '#311b92',
                borderColor: '#ef5350',
                contentBg: '#f3e5f5',
                contentText: '#4a148c',
                diagramBg: '#fce4ec',
                structureBg: '#fff9c4'
            }
        };

        this.colors = themes[this.theme] || themes.biological;
    }

    initializeBiologicalSymbols() {
        return {
            // Common biological symbols
            'alpha': 'α',
            'beta': 'β',
            'gamma': 'γ',
            'delta': 'Δ',
            'arrow': '→',
            'doubleArrow': '↔',
            'plus': '⊕',
            'minus': '⊖',
            'micro': 'μ',
            'degree': '°',
            'celsius': '°C',
            'approximately': '≈',
            'infinity': '∞',
            'proportional': '∝',
            // Energy-related notation
            'ATP': 'ATP',
            'ADP': 'ADP',
            'AMP': 'AMP',
            'NADH': 'NADH',
            'NAD+': 'NAD⁺',
            'FADH2': 'FADH₂',
            'FAD': 'FAD',
            'NADPH': 'NADPH',
            'NADP+': 'NADP⁺',
            'CoA': 'CoA',
            'CO2': 'CO₂',
            'O2': 'O₂',
            'H2O': 'H₂O',
            'H+': 'H⁺',
            'Pi': 'Pᵢ',
            'glucose': 'C₆H₁₂O₆',
            'pyruvate': 'C₃H₄O₃'
        };
    }

    initializeEnergyTopics() {
        this.energyTopics = {
            // 1. ATP - Energy Currency
            atp: {
                patterns: [
                    /ATP|adenosine.*triphosphate/i,
                    /energy.*currency/i,
                    /phosphate.*bond/i,
                    /ATP.*structure/i
                ],
                handler: this.handleATP.bind(this),
                name: 'ATP - Cellular Energy Currency',
                category: 'energy_molecules',
                description: 'The universal energy carrier in cells'
            },

            // 2. Glycolysis
            glycolysis: {
                patterns: [
                    /glycolysis/i,
                    /glucose.*breakdown/i,
                    /embden.*meyerhof/i,
                    /sugar.*splitting/i
                ],
                handler: this.handleGlycolysis.bind(this),
                name: 'Glycolysis',
                category: 'cellular_respiration',
                description: 'Breakdown of glucose to pyruvate'
            },

            // 3. Krebs Cycle
            krebs_cycle: {
                patterns: [
                    /krebs.*cycle|citric.*acid.*cycle/i,
                    /TCA.*cycle|tricarboxylic.*acid/i,
                    /acetyl.*CoA.*oxidation/i
                ],
                handler: this.handleKrebsCycle.bind(this),
                name: 'Krebs Cycle (Citric Acid Cycle)',
                category: 'cellular_respiration',
                description: 'Complete oxidation of acetyl-CoA'
            },

            // 4. Electron Transport Chain
            electron_transport: {
                patterns: [
                    /electron.*transport.*chain|ETC/i,
                    /oxidative.*phosphorylation/i,
                    /chemiosmosis/i,
                    /respiratory.*chain/i
                ],
                handler: this.handleElectronTransport.bind(this),
                name: 'Electron Transport Chain',
                category: 'cellular_respiration',
                description: 'ATP synthesis via chemiosmosis'
            },

            // 5. Fermentation
            fermentation: {
                patterns: [
                    /fermentation/i,
                    /lactic.*acid.*fermentation/i,
                    /alcoholic.*fermentation/i,
                    /anaerobic.*respiration/i
                ],
                handler: this.handleFermentation.bind(this),
                name: 'Fermentation',
                category: 'anaerobic_metabolism',
                description: 'Anaerobic energy production'
            },

            // 6. Light Reactions (Photosynthesis)
            light_reactions: {
                patterns: [
                    /light.*reaction|photo.*reaction/i,
                    /photosystem|thylakoid/i,
                    /light.*dependent/i,
                    /photolysis/i
                ],
                handler: this.handleLightReactions.bind(this),
                name: 'Light Reactions of Photosynthesis',
                category: 'photosynthesis',
                description: 'Light energy conversion to chemical energy'
            },

            // 7. Calvin Cycle
            calvin_cycle: {
                patterns: [
                    /calvin.*cycle|C3.*cycle/i,
                    /carbon.*fixation/i,
                    /light.*independent.*reaction/i,
                    /dark.*reaction/i
                ],
                handler: this.handleCalvinCycle.bind(this),
                name: 'Calvin Cycle',
                category: 'photosynthesis',
                description: 'Carbon dioxide fixation to glucose'
            },

            // 8. Cellular Respiration Overview
            cellular_respiration: {
                patterns: [
                    /cellular.*respiration/i,
                    /aerobic.*respiration/i,
                    /complete.*oxidation.*glucose/i
                ],
                handler: this.handleCellularRespiration.bind(this),
                name: 'Cellular Respiration',
                category: 'energy_metabolism',
                description: 'Complete breakdown of glucose for ATP'
            },

            // 9. Photosynthesis Overview
            photosynthesis: {
                patterns: [
                    /photosynthesis/i,
                    /light.*energy.*capture/i,
                    /CO2.*fixation/i
                ],
                handler: this.handlePhotosynthesis.bind(this),
                name: 'Photosynthesis',
                category: 'energy_metabolism',
                description: 'Light energy conversion to chemical energy'
            },

            // 10. Energy Coupling
            energy_coupling: {
                patterns: [
                    /energy.*coupling/i,
                    /exergonic.*endergonic/i,
                    /coupled.*reaction/i
                ],
                handler: this.handleEnergyCoupling.bind(this),
                name: 'Energy Coupling',
                category: 'bioenergetics',
                description: 'Linking energy-releasing to energy-requiring reactions'
            },

            // 11. Metabolic Pathways
            metabolic_pathways: {
                patterns: [
                    /metabolic.*pathway/i,
                    /anabolism|catabolism/i,
                    /metabolism.*regulation/i
                ],
                handler: this.handleMetabolicPathways.bind(this),
                name: 'Metabolic Pathways',
                category: 'metabolism',
                description: 'Interconnected biochemical reactions'
            },

            // 12. Thermodynamics in Biology
            thermodynamics: {
                patterns: [
                    /thermodynamics|bioenergetics/i,
                    /free.*energy|gibbs/i,
                    /entropy|enthalpy/i,
                    /laws.*thermodynamics/i
                ],
                handler: this.handleThermodynamics.bind(this),
                name: 'Biological Thermodynamics',
                category: 'bioenergetics',
                description: 'Energy transformations in living systems'
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.commonMisconceptions = {
            atp: {
                'ATP Structure': [
                    'Thinking ATP is only made in mitochondria (also made in chloroplasts, cytoplasm)',
                    'Believing all three phosphate bonds store equal energy (only last two are high-energy)',
                    'Confusing ATP with DNA/RNA (ATP is a nucleotide but not part of genetic material)'
                ],
                'ATP Function': [
                    'Thinking ATP is stored long-term (it\'s constantly being made and used)',
                    'Believing ATP directly powers all reactions (it transfers energy, doesn\'t "power" like electricity)',
                    'Assuming cells have large ATP reserves (actually very small, rapid turnover)'
                ]
            },
            glycolysis: {
                'Location and Requirements': [
                    'Thinking glycolysis requires oxygen (it\'s anaerobic)',
                    'Believing glycolysis only occurs in mitochondria (occurs in cytoplasm)',
                    'Assuming glycolysis produces most ATP (only 2 net ATP)'
                ],
                'Products': [
                    'Confusing pyruvate with lactate (lactate is fermentation product)',
                    'Thinking glycolysis produces CO₂ (CO₂ comes from Krebs cycle)',
                    'Believing all glucose is completely broken down in glycolysis (only partially)'
                ]
            },
            krebs_cycle: {
                'Process Understanding': [
                    'Thinking Krebs cycle directly produces lots of ATP (only 2 ATP per glucose)',
                    'Believing oxygen is used directly in Krebs cycle (oxygen is final electron acceptor in ETC)',
                    'Confusing number of cycles (2 cycles per glucose molecule, not 1)'
                ],
                'Products': [
                    'Thinking NADH and FADH₂ are waste products (they\'re energy carriers)',
                    'Believing all CO₂ is produced at once (released at multiple steps)',
                    'Assuming acetyl-CoA is the final product (it\'s the starting material)'
                ]
            },
            electron_transport: {
                'Mechanism': [
                    'Thinking ATP synthase uses ATP (it makes ATP)',
                    'Believing electrons are stored (they\'re transferred to oxygen)',
                    'Confusing chemiosmosis with active transport (it\'s facilitated diffusion of H⁺)'
                ],
                'Energy Production': [
                    'Thinking oxygen is "burned" for energy (it accepts electrons)',
                    'Believing all ATP is made the same way (substrate-level vs oxidative phosphorylation)',
                    'Assuming ETC can work without oxygen (oxygen is essential final electron acceptor)'
                ]
            },
            fermentation: {
                'Comparison to Respiration': [
                    'Thinking fermentation is more efficient than respiration (much less efficient)',
                    'Believing fermentation produces CO₂ in all types (only alcoholic fermentation)',
                    'Assuming fermentation doesn\'t use glycolysis (it does, just not Krebs/ETC)'
                ],
                'Products': [
                    'Confusing lactic acid with lactose (different molecules)',
                    'Thinking alcohol fermentation produces lactate (produces ethanol)',
                    'Believing fermentation regenerates glucose (regenerates NAD⁺)'
                ]
            },
            photosynthesis: {
                'Light Reactions': [
                    'Thinking chlorophyll absorbs all light colors (reflects green)',
                    'Believing oxygen is the goal of light reactions (it\'s a byproduct)',
                    'Assuming ATP from light reactions is used outside chloroplast (used in Calvin cycle)'
                ],
                'Calvin Cycle': [
                    'Thinking Calvin cycle requires light directly (light-independent)',
                    'Believing glucose is made in one cycle (requires 6 cycles for one glucose)',
                    'Confusing which molecules are inputs vs outputs'
                ]
            }
        };

        this.clarificationStrategies = {
            visual_comparison: {
                method: 'Use side-by-side diagrams to highlight differences',
                effectiveness: 'High for comparing aerobic vs anaerobic pathways'
            },
            energy_accounting: {
                method: 'Track ATP, NADH, FADH₂ inputs and outputs',
                effectiveness: 'High for understanding efficiency'
            },
            location_emphasis: {
                method: 'Clearly state where each process occurs',
                effectiveness: 'High for spatial understanding'
            },
            flowchart: {
                method: 'Create clear pathway diagrams with arrows',
                effectiveness: 'High for understanding sequential processes'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            structural: {
                focus: 'Physical organization and molecular components',
                language: 'descriptive and spatial'
            },
            functional: {
                focus: 'Energy transformations and mechanisms',
                language: 'process-oriented and causal'
            },
            comparative: {
                focus: 'Efficiency and pathway differences',
                language: 'contrastive and quantitative'
            },
            evolutionary: {
                focus: 'Development of energy systems',
                language: 'temporal and adaptive'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential information only',
                examples: 'concrete and familiar'
            },
            intermediate: {
                vocabulary: 'standard biological terms',
                detail: 'main concepts with explanations',
                examples: 'mix of familiar and technical'
            },
            detailed: {
                vocabulary: 'full scientific terminology',
                detail: 'comprehensive with mechanisms',
                examples: 'technical and research-based'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery approach',
                examples: 'carefully sequenced difficulty'
            }
        };
    }

    initializeEnergyLessons() {
        this.lessons = {
            atp: {
                title: "ATP: The Universal Energy Currency",
                concepts: [
                    "ATP stores energy in phosphate bonds",
                    "ATP hydrolysis releases energy for cellular work",
                    "ATP is constantly regenerated from ADP",
                    "ATP couples exergonic and endergonic reactions"
                ],
                theory: "ATP (adenosine triphosphate) is the primary energy carrier in all living cells. It temporarily stores energy from exergonic reactions and releases it to power endergonic reactions through a process called energy coupling.",
                keyDefinitions: {
                    "ATP": "Adenosine triphosphate - nucleotide with three phosphate groups",
                    "ADP": "Adenosine diphosphate - ATP minus one phosphate",
                    "Phosphorylation": "Adding a phosphate group to a molecule",
                    "Hydrolysis": "Breaking bonds with water",
                    "Energy Coupling": "Using energy from one reaction to drive another"
                },
                mainCategories: [
                    "ATP structure (adenine, ribose, three phosphates)",
                    "ATP hydrolysis (ATP → ADP + Pi + energy)",
                    "ATP synthesis (ADP + Pi + energy → ATP)",
                    "ATP uses (muscle contraction, active transport, biosynthesis)"
                ],
                applications: [
                    "Understanding muscle fatigue",
                    "Metabolic diseases",
                    "Drug development targeting ATP synthesis",
                    "Exercise physiology"
                ]
            },

            glycolysis: {
                title: "Glycolysis: The First Step in Energy Extraction",
                concepts: [
                    "Glycolysis breaks glucose into two pyruvate molecules",
                    "Occurs in the cytoplasm and doesn't require oxygen",
                    "Produces net 2 ATP and 2 NADH per glucose",
                    "Has energy investment and energy payoff phases"
                ],
                theory: "Glycolysis is the first stage of cellular respiration, occurring in all living cells. It's an ancient metabolic pathway that splits one glucose molecule into two pyruvate molecules while producing a small amount of ATP and NADH.",
                keyDefinitions: {
                    "Glycolysis": "Splitting of glucose (glyco = sugar, lysis = splitting)",
                    "Substrate-level Phosphorylation": "Direct transfer of phosphate to ADP to make ATP",
                    "Pyruvate": "3-carbon molecule produced from glucose",
                    "NAD+/NADH": "Electron carrier that accepts electrons during oxidation"
                },
                mainCategories: [
                    "Energy investment phase (uses 2 ATP)",
                    "Energy payoff phase (produces 4 ATP, 2 NADH)",
                    "Net production (2 ATP, 2 NADH, 2 pyruvate)",
                    "Regulation points"
                ],
                applications: [
                    "Cancer metabolism (Warburg effect)",
                    "Brewing and baking",
                    "Athletic performance",
                    "Diabetes management"
                ]
            },

            krebs_cycle: {
                title: "Krebs Cycle: The Central Hub of Metabolism",
                concepts: [
                    "Completes oxidation of glucose derivatives",
                    "Produces electron carriers (NADH, FADH₂)",
                    "Occurs in mitochondrial matrix",
                    "Generates CO₂ as waste product"
                ],
                theory: "The Krebs cycle (citric acid cycle) is the second stage of cellular respiration. It completely oxidizes acetyl-CoA to CO₂ while producing electron carriers that feed into the electron transport chain.",
                keyDefinitions: {
                    "Acetyl-CoA": "2-carbon molecule that enters the cycle",
                    "Oxaloacetate": "4-carbon molecule that starts and ends the cycle",
                    "Citrate": "6-carbon molecule formed first in the cycle",
                    "Decarboxylation": "Removal of CO₂",
                    "Oxidation": "Loss of electrons (hydrogen atoms)"
                },
                mainCategories: [
                    "Preparation: Pyruvate → Acetyl-CoA (produces CO₂, NADH)",
                    "Cycle proper: 8 steps forming a circle",
                    "Products per glucose: 2 ATP, 6 NADH, 2 FADH₂, 4 CO₂",
                    "Integration with other pathways"
                ],
                applications: [
                    "Understanding metabolic diseases",
                    "Mitochondrial disorders",
                    "Nutritional biochemistry",
                    "Drug metabolism"
                ]
            },

            electron_transport: {
                title: "Electron Transport Chain: Maximum ATP Production",
                concepts: [
                    "Electrons from NADH and FADH₂ pass through protein complexes",
                    "Creates proton gradient across inner mitochondrial membrane",
                    "ATP synthase uses gradient to make ATP (chemiosmosis)",
                    "Oxygen is the final electron acceptor"
                ],
                theory: "The electron transport chain is the final stage of cellular respiration, producing the majority of ATP through oxidative phosphorylation. Chemiosmosis couples electron transport to ATP synthesis.",
                keyDefinitions: {
                    "Electron Transport Chain": "Series of protein complexes in inner mitochondrial membrane",
                    "Chemiosmosis": "ATP synthesis driven by proton gradient",
                    "Oxidative Phosphorylation": "ATP synthesis coupled to electron transport",
                    "Proton-Motive Force": "Energy stored in H⁺ gradient",
                    "ATP Synthase": "Molecular machine that makes ATP"
                },
                mainCategories: [
                    "Complex I, II, III, IV (electron carriers)",
                    "Proton pumping (creates gradient)",
                    "ATP synthase (uses gradient to make ATP)",
                    "Oxygen's role (final electron acceptor → water)"
                ],
                applications: [
                    "Mitochondrial diseases",
                    "Toxin mechanisms (cyanide)",
                    "Exercise physiology",
                    "Aging research"
                ]
            },

            fermentation: {
                title: "Fermentation: Energy Without Oxygen",
                concepts: [
                    "Allows glycolysis to continue without oxygen",
                    "Regenerates NAD⁺ from NADH",
                    "Produces only 2 ATP per glucose (from glycolysis)",
                    "Two main types: lactic acid and alcoholic"
                ],
                theory: "Fermentation is an anaerobic process that allows cells to produce ATP when oxygen is unavailable. It regenerates NAD⁺ so glycolysis can continue, though much less efficiently than aerobic respiration.",
                keyDefinitions: {
                    "Fermentation": "Anaerobic ATP production via glycolysis",
                    "Lactic Acid Fermentation": "Pyruvate → lactate (animals, bacteria)",
                    "Alcoholic Fermentation": "Pyruvate → ethanol + CO₂ (yeast)",
                    "Anaerobic": "Without oxygen",
                    "NAD⁺ Regeneration": "Converting NADH back to NAD⁺"
                },
                mainCategories: [
                    "Lactic acid fermentation (muscle fatigue, yogurt)",
                    "Alcoholic fermentation (brewing, baking)",
                    "Comparison to aerobic respiration (2 ATP vs 38 ATP)",
                    "Ecological importance"
                ],
                applications: [
                    "Food production (yogurt, cheese, beer, wine, bread)",
                    "Muscle fatigue understanding",
                    "Biofuel production",
                    "Industrial microbiology"
                ]
            },

            light_reactions: {
                title: "Light Reactions: Capturing Solar Energy",
                concepts: [
                    "Chlorophyll absorbs light energy",
                    "Water is split (photolysis) releasing O₂",
                    "Electron transport produces ATP and NADPH",
                    "Occurs in thylakoid membranes"
                ],
                theory: "Light reactions convert light energy into chemical energy (ATP and NADPH) while releasing oxygen as a byproduct. They occur in the thylakoid membranes of chloroplasts and involve two photosystems.",
                keyDefinitions: {
                    "Photosystem": "Complex of pigments and proteins that captures light",
                    "Photolysis": "Splitting of water using light energy",
                    "Photophosphorylation": "ATP synthesis using light energy",
                    "NADPH": "Electron carrier for Calvin cycle",
                    "Thylakoid": "Membrane sac where light reactions occur"
                },
                mainCategories: [
                    "Photosystem II (captures light, splits water, releases O₂)",
                    "Electron transport chain (pumps H⁺)",
                    "Photosystem I (captures light, reduces NADP⁺)",
                    "Chemiosmosis (ATP synthase makes ATP)"
                ],
                applications: [
                    "Understanding photosynthetic efficiency",
                    "Crop improvement",
                    "Artificial photosynthesis",
                    "Solar energy research"
                ]
            },

            calvin_cycle: {
                title: "Calvin Cycle: Building Sugars from CO₂",
                concepts: [
                    "Fixes CO₂ into organic molecules",
                    "Uses ATP and NADPH from light reactions",
                    "Occurs in stroma of chloroplast",
                    "Produces G3P (used to make glucose)"
                ],
                theory: "The Calvin cycle (light-independent reactions) uses the ATP and NADPH from light reactions to fix carbon dioxide into glucose. It occurs in three phases: carbon fixation, reduction, and regeneration.",
                keyDefinitions: {
                    "Carbon Fixation": "Incorporating CO₂ into organic molecules",
                    "RuBisCO": "Enzyme that fixes CO₂ to RuBP",
                    "RuBP": "5-carbon molecule that accepts CO₂",
                    "G3P": "3-carbon sugar (glyceraldehyde-3-phosphate)",
                    "Stroma": "Fluid interior of chloroplast"
                },
                mainCategories: [
                    "Carbon fixation (CO₂ + RuBP → 2 3-PGA)",
                    "Reduction (3-PGA → G3P using ATP and NADPH)",
                    "Regeneration (G3P → RuBP using ATP)",
                    "Net production (1 G3P per 3 CO₂)"
                ],
                applications: [
                    "Crop yield improvement",
                    "Climate change mitigation",
                    "Biofuel production",
                    "Food security"
                ]
            },

            cellular_respiration: {
                title: "Cellular Respiration: Complete Glucose Oxidation",
                concepts: [
                    "Three stages: glycolysis, Krebs cycle, electron transport",
                    "Requires oxygen (aerobic)",
                    "Produces ~38 ATP per glucose",
                    "Reverse of photosynthesis equation"
                ],
                theory: "Cellular respiration completely oxidizes glucose to CO₂ and water, extracting maximum energy as ATP. It's the primary energy-producing pathway in most organisms.",
                keyDefinitions: {
                    "Aerobic Respiration": "Oxygen-requiring ATP production",
                    "Oxidation": "Loss of electrons, release of energy",
                    "Reduction": "Gain of electrons, storage of energy",
                    "Cellular Respiration": "Complete breakdown of glucose for ATP"
                },
                mainCategories: [
                    "Stage 1: Glycolysis (cytoplasm, 2 ATP)",
                    "Stage 2: Krebs cycle (matrix, 2 ATP)",
                    "Stage 3: Electron transport (cristae, ~34 ATP)",
                    "Total: ~38 ATP per glucose"
                ],
                applications: [
                    "Exercise physiology",
                    "Metabolic disorders",
                    "Weight management",
                    "Aging and longevity"
                ]
            },

            photosynthesis: {
                title: "Photosynthesis: Light to Chemical Energy",
                concepts: [
                    "Two stages: light reactions and Calvin cycle",
                    "Converts light energy + CO₂ + H₂O → glucose + O₂",
                    "Occurs in chloroplasts",
                    "Basis of most food chains"
                ],
                theory: "Photosynthesis captures light energy and converts it into chemical energy (glucose). It's the primary energy input for most ecosystems and the source of atmospheric oxygen.",
                keyDefinitions: {
                    "Photosynthesis": "Converting light to chemical energy",
                    "Autotroph": "Organism that makes its own food",
                    "Chloroplast": "Organelle where photosynthesis occurs",
                    "Chlorophyll": "Green pigment that captures light"
                },
                mainCategories: [
                    "Light reactions (thylakoid, produces ATP, NADPH, O₂)",
                    "Calvin cycle (stroma, produces glucose)",
                    "Overall equation: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂",
                    "Factors affecting rate"
                ],
                applications: [
                    "Agriculture and crop production",
                    "Climate change and carbon sequestration",
                    "Biofuels",
                    "Food security"
                ]
            },

            energy_coupling: {
                title: "Energy Coupling: Linking Reactions",
                concepts: [
                    "Exergonic reactions release energy",
                    "Endergonic reactions require energy",
                    "ATP couples these reactions",
                    "Makes unfavorable reactions possible"
                ],
                theory: "Energy coupling uses energy released from exergonic reactions to drive endergonic reactions. ATP serves as the energy intermediate, temporarily storing and transferring energy.",
                keyDefinitions: {
                    "Exergonic": "Energy-releasing (ΔG < 0)",
                    "Endergonic": "Energy-requiring (ΔG > 0)",
                    "Free Energy (G)": "Energy available to do work",
                    "Energy Coupling": "Linking energy-releasing to energy-requiring reactions",
                    "Phosphorylation": "Transfer of phosphate group"
                },
                mainCategories: [
                    "ATP hydrolysis (exergonic, releases 7.3 kcal/mol)",
                    "Coupled reactions (ATP hydrolysis drives endergonic reactions)",
                    "Examples (active transport, biosynthesis, muscle contraction)",
                    "Efficiency and thermodynamics"
                ],
                applications: [
                    "Drug design",
                    "Metabolic engineering",
                    "Understanding disease mechanisms",
                    "Biotechnology"
                 ]
            },

            metabolic_pathways: {
                title: "Metabolic Pathways: Interconnected Reactions",
                concepts: [
                    "Metabolism includes all chemical reactions in cells",
                    "Catabolism breaks down molecules for energy",
                    "Anabolism builds molecules using energy",
                    "Pathways are regulated at key control points"
                ],
                theory: "Metabolic pathways are series of connected chemical reactions that transform molecules. They're highly regulated to maintain homeostasis and respond to cellular needs.",
                keyDefinitions: {
                    "Metabolism": "All chemical reactions in an organism",
                    "Catabolism": "Breaking down complex molecules (releases energy)",
                    "Anabolism": "Building complex molecules (requires energy)",
                    "Metabolic Pathway": "Series of enzyme-catalyzed reactions",
                    "Regulation": "Control of pathway rate and direction"
                },
                mainCategories: [
                    "Catabolic pathways (cellular respiration, fermentation)",
                    "Anabolic pathways (photosynthesis, protein synthesis)",
                    "Amphibolic pathways (can be both - Krebs cycle)",
                    "Regulation mechanisms (feedback inhibition, allosteric control)"
                ],
                applications: [
                    "Metabolic disease diagnosis and treatment",
                    "Drug targeting of metabolic enzymes",
                    "Biotechnology and bioengineering",
                    "Nutritional science"
                ]
            },

            thermodynamics: {
                title: "Biological Thermodynamics: Energy Laws in Living Systems",
                concepts: [
                    "First Law: Energy cannot be created or destroyed",
                    "Second Law: Entropy (disorder) tends to increase",
                    "Living systems maintain order by increasing environmental entropy",
                    "Free energy (ΔG) determines reaction spontaneity"
                ],
                theory: "Thermodynamics governs energy transformations in biological systems. Living organisms maintain order by constantly consuming energy and releasing heat, increasing the universe's total entropy.",
                keyDefinitions: {
                    "First Law of Thermodynamics": "Energy conservation - total energy is constant",
                    "Second Law of Thermodynamics": "Entropy increases in isolated systems",
                    "Free Energy (ΔG)": "Energy available to do work at constant temp and pressure",
                    "Entropy (S)": "Measure of disorder or randomness",
                    "Enthalpy (H)": "Total heat content of a system"
                },
                mainCategories: [
                    "Laws of thermodynamics applied to biology",
                    "Free energy and spontaneity (ΔG < 0 = spontaneous)",
                    "Entropy and biological order",
                    "Energy flow through ecosystems"
                ],
                applications: [
                    "Understanding metabolic efficiency",
                    "Predicting reaction direction",
                    "Bioenergetics research",
                    "Ecosystem energy flow"
                ]
            }
        };
    }

    // MAIN HANDLER METHOD
    handleEnergyProblem(config) {
        const { topic, parameters, subTopic, context } = config;

        try {
            // Parse the energy query
            this.currentProblem = this.parseEnergyProblem(topic, parameters, subTopic, context);

            // Get content based on topic
            this.currentContent = this.getEnergyContent(this.currentProblem);

            // Generate content steps/sections
            this.contentSteps = this.generateEnergyContent(this.currentProblem, this.currentContent);

            // Generate diagram data if applicable
            this.generateEnergyDiagramData();

            // Generate workbook
            this.generateEnergyWorkbook();

            return {
                workbook: this.currentWorkbook,
                content: this.currentContent,
                diagrams: this.diagramData
            };

        } catch (error) {
            throw new Error(`Failed to process energy topic: ${error.message}`);
        }
    }

    parseEnergyProblem(topic, parameters = {}, subTopic = null, context = {}) {
        let topicType = null;

        // Match topic to handler
        for (const [type, config] of Object.entries(this.energyTopics)) {
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
            throw new Error(`Unable to recognize energy topic: ${topic}`);
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

    getEnergyContent(problem) {
        const handler = this.energyTopics[problem.type]?.handler;
        if (!handler) {
            throw new Error(`No handler available for energy topic: ${problem.type}`);
        }

        return handler(problem);
    }

    // TOPIC HANDLERS

    handleATP(problem) {
        return {
            topic: "ATP - The Universal Energy Currency",
            structure: {
                components: {
                    adenine: {
                        type: "Nitrogenous base",
                        description: "Purine base, same as in DNA/RNA",
                        structure: "Double-ring structure"
                    },
                    ribose: {
                        type: "5-carbon sugar",
                        description: "Same sugar as in RNA",
                        structure: "Pentose ring"
                    },
                    phosphates: {
                        type: "Three phosphate groups",
                        description: "α, β, γ phosphates linked in chain",
                        bonds: "Phosphoanhydride bonds (high-energy)"
                    }
                },
                molecularFormula: "C₁₀H₁₆N₅O₁₃P₃",
                molecularWeight: "507.18 g/mol"
            },
            energetics: {
                hydrolysis: {
                    reaction: "ATP + H₂O → ADP + Pi",
                    energyReleased: "-7.3 kcal/mol (-30.5 kJ/mol) under standard conditions",
                    actualCellular: "-12 kcal/mol (conditions different from standard)",
                    description: "Breaking terminal phosphate bond releases energy"
                },
                synthesis: {
                    reaction: "ADP + Pi + energy → ATP + H₂O",
                    energyRequired: "+7.3 kcal/mol",
                    sources: [
                        "Substrate-level phosphorylation (glycolysis, Krebs)",
                        "Oxidative phosphorylation (electron transport)",
                        "Photophosphorylation (light reactions)"
                    ]
                },
                phosphorylation: {
                    description: "Transfer of phosphate group to molecule",
                    effect: "Makes molecule more reactive",
                    examples: ["Glucose → Glucose-6-phosphate", "Protein activation"]
                }
            },
            functions: [
                {
                    function: "Energy Transfer",
                    description: "Intermediate between energy-releasing and energy-requiring reactions",
                    mechanism: "ATP hydrolysis coupled to endergonic reactions"
                },
                {
                    function: "Active Transport",
                    description: "Powers movement of molecules against concentration gradient",
                    example: "Sodium-potassium pump (3 Na⁺ out, 2 K⁺ in per ATP)"
                },
                {
                    function: "Muscle Contraction",
                    description: "ATP hydrolysis causes myosin head to move",
                    cycle: "Bind → Power stroke → Release → Reset (requires ATP)"
                },
                {
                    function: "Biosynthesis",
                    description: "Building complex molecules from simple ones",
                    examples: ["Protein synthesis", "DNA replication", "Lipid synthesis"]
                },
                {
                    function: "Signal Transduction",
                    description: "Phosphorylation of proteins in signaling cascades",
                    example: "Kinase cascades"
                },
                {
                    function: "Bioluminescence",
                    description: "Light production in fireflies, bacteria",
                    reaction: "ATP-dependent oxidation of luciferin"
                }
            ],
            atpCycle: {
                production: "~100-150 moles ATP per day in human body",
                turnover: "Each ATP molecule recycled ~500-750 times per day",
                reserves: "Only ~250g ATP in body at any time",
                recycleTime: "ATP lasts less than 1 minute before being used and regenerated"
            },
            relatedMolecules: {
                ADP: {
                    name: "Adenosine diphosphate",
                    phosphates: 2,
                    role: "ATP minus one phosphate, recharged to ATP"
                },
                AMP: {
                    name: "Adenosine monophosphate",
                    phosphates: 1,
                    role: "Low energy signal, activates AMP kinase"
                },
                GTP: {
                    name: "Guanosine triphosphate",
                    role: "Similar to ATP, used in protein synthesis and signaling"
                },
                CTP: {
                    name: "Cytidine triphosphate",
                    role: "Used in lipid synthesis"
                },
                UTP: {
                    name: "Uridine triphosphate",
                    role: "Used in carbohydrate metabolism"
                }
            },
            comparison: {
                vsElectricity: "ATP is not like electricity flowing; it's like rechargeable batteries being passed around",
                vsGasoline: "ATP is not stored long-term fuel; it's immediate energy currency",
                vsFood: "Food molecules store more energy but ATP provides immediate usable energy"
            },
            category: 'energy_molecules'
        };
    }

    handleGlycolysis(problem) {
        return {
            topic: "Glycolysis - Glucose to Pyruvate",
            overview: {
                definition: "Breakdown of one glucose (6C) into two pyruvate (3C) molecules",
                location: "Cytoplasm (cytosol)",
                oxygenRequirement: "Anaerobic (no oxygen needed)",
                occurrence: "All living cells",
                etymology: "Glyco (sugar) + lysis (splitting)"
            },
            overallEquation: {
                formula: "C₆H₁₂O₆ + 2 NAD⁺ + 2 ADP + 2 Pi → 2 C₃H₄O₃ + 2 NADH + 2 H⁺ + 2 ATP + 2 H₂O",
                simplified: "Glucose + 2 NAD⁺ + 2 ADP + 2 Pi → 2 Pyruvate + 2 NADH + 2 ATP",
                netProducts: "2 pyruvate, 2 NADH, 2 ATP (net)"
            },
            phases: {
                energyInvestment: {
                    description: "First 5 steps - uses 2 ATP to activate glucose",
                    steps: [
                        {
                            step: 1,
                            name: "Glucose phosphorylation",
                            reaction: "Glucose + ATP → Glucose-6-phosphate + ADP",
                            enzyme: "Hexokinase (or Glucokinase in liver)",
                            purpose: "Traps glucose in cell, activates it",
                            regulation: "Inhibited by product (G6P)",
                            energyChange: "Uses 1 ATP"
                        },
                        {
                            step: 2,
                            name: "Isomerization",
                            reaction: "Glucose-6-phosphate → Fructose-6-phosphate",
                            enzyme: "Phosphoglucose isomerase",
                            purpose: "Convert 6-carbon aldose to ketose"
                        },
                        {
                            step: 3,
                            name: "Second phosphorylation",
                            reaction: "Fructose-6-phosphate + ATP → Fructose-1,6-bisphosphate + ADP",
                            enzyme: "Phosphofructokinase (PFK)",
                            purpose: "Adds second phosphate, commits to glycolysis",
                            regulation: "KEY REGULATORY STEP - inhibited by ATP, citrate; activated by AMP, ADP",
                            energyChange: "Uses 1 ATP",
                            importance: "Main control point of glycolysis"
                        },
                        {
                            step: 4,
                            name: "Cleavage",
                            reaction: "Fructose-1,6-bisphosphate → DHAP + G3P",
                            enzyme: "Aldolase",
                            purpose: "Splits 6C sugar into two 3C sugars",
                            products: "Dihydroxyacetone phosphate (DHAP) and Glyceraldehyde-3-phosphate (G3P)"
                        },
                        {
                            step: 5,
                            name: "Isomerization",
                            reaction: "DHAP ↔ G3P",
                            enzyme: "Triose phosphate isomerase",
                            purpose: "Convert DHAP to G3P (only G3P continues)",
                            note: "From here, all steps occur twice per glucose (2 G3P molecules)"
                        }
                    ],
                    summary: "2 ATP invested, glucose split into two 3-carbon molecules"
                },
                energyPayoff: {
                    description: "Last 5 steps - produces 4 ATP and 2 NADH",
                    steps: [
                        {
                            step: 6,
                            name: "Oxidation and phosphorylation",
                            reaction: "G3P + NAD⁺ + Pi → 1,3-Bisphosphoglycerate + NADH + H⁺",
                            enzyme: "Glyceraldehyde-3-phosphate dehydrogenase",
                            purpose: "Oxidation releases energy, coupled to phosphorylation",
                            products: "2 NADH (×2 = 2 per glucose)",
                            energyChange: "Energy stored in NADH",
                            importance: "First energy harvest step"
                        },
                        {
                            step: 7,
                            name: "First ATP generation",
                            reaction: "1,3-Bisphosphoglycerate + ADP → 3-Phosphoglycerate + ATP",
                            enzyme: "Phosphoglycerate kinase",
                            purpose: "Substrate-level phosphorylation",
                            energyChange: "Produces 2 ATP (×2 = 2 per glucose)",
                            mechanism: "Direct transfer of phosphate to ADP"
                        },
                        {
                            step: 8,
                            name: "Rearrangement",
                            reaction: "3-Phosphoglycerate → 2-Phosphoglycerate",
                            enzyme: "Phosphoglycerate mutase",
                            purpose: "Moves phosphate group to prepare for next step"
                        },
                        {
                            step: 9,
                            name: "Dehydration",
                            reaction: "2-Phosphoglycerate → Phosphoenolpyruvate (PEP) + H₂O",
                            enzyme: "Enolase",
                            purpose: "Creates high-energy phosphate bond",
                            product: "PEP has very high phosphate transfer potential"
                        },
                        {
                            step: 10,
                            name: "Second ATP generation",
                            reaction: "PEP + ADP → Pyruvate + ATP",
                            enzyme: "Pyruvate kinase",
                            purpose: "Final substrate-level phosphorylation",
                            energyChange: "Produces 2 ATP (×2 = 2 per glucose)",
                            regulation: "Inhibited by ATP, activated by fructose-1,6-bisphosphate",
                            irreversible: "Essentially irreversible under cellular conditions"
                        }
                    ],
                    summary: "4 ATP produced, 2 NADH produced (per glucose)"
                }
            },
            energyAccounting: {
                atpInvestment: "-2 ATP (steps 1 and 3)",
                atpProduction: "+4 ATP (steps 7 and 10, each ×2)",
                netATP: "2 ATP per glucose",
                nadhProduction: "2 NADH per glucose (step 6 ×2)",
                nadhValue: "Worth ~5 ATP if used in electron transport chain"
            },
            regulation: {
                keyEnzymes: [
                    {
                        enzyme: "Hexokinase",
                        regulation: "Inhibited by glucose-6-phosphate (product inhibition)",
                        significance: "Prevents excessive glucose phosphorylation"
                    },
                    {
                        enzyme: "Phosphofructokinase (PFK)",
                        regulation: "Inhibited by ATP and citrate (plenty of energy); Activated by AMP and ADP (low energy)",
                        significance: "MAIN CONTROL POINT - commits glucose to glycolysis",
                        mechanism: "Allosteric regulation"
                    },
                    {
                        enzyme: "Pyruvate kinase",
                        regulation: "Inhibited by ATP; Activated by fructose-1,6-bisphosphate (feedforward)",
                        significance: "Final control point"
                    }
                ],
                principle: "When energy is high (↑ATP), glycolysis slows down. When energy is low (↑AMP/ADP), glycolysis speeds up."
            },
            fateOfProducts: {
                pyruvate: {
                    aerobicConditions: [
                        "Converted to Acetyl-CoA",
                        "Enters mitochondria",
                        "Proceeds to Krebs cycle"
                    ],
                    anaerobicConditions: [
                        "Fermentation to lactate (animals) or ethanol (yeast)",
                        "Regenerates NAD⁺ for glycolysis to continue"
                    ]
                },
                nadh: {
                    aerobic: "Electrons transferred to electron transport chain (worth ~2.5 ATP each)",
                    anaerobic: "Used in fermentation to regenerate NAD⁺"
                },
                atp: {
                    use: "Immediate energy for cellular processes"
                }
            },


evolutionarySignificance: {
                ancient: "One of oldest metabolic pathways",
                universal: "Present in virtually all organisms",
                independence: "Doesn't require membrane-bound organelles",
                anaerobic: "Evolved before oxygen-rich atmosphere"
            },
            category: 'cellular_respiration'
        };
    }

    handleKrebsCycle(problem) {
        return {
            topic: "Krebs Cycle (Citric Acid Cycle / TCA Cycle)",
            overview: {
                definition: "Cyclic pathway that completes oxidation of glucose derivatives",
                location: "Mitochondrial matrix",
                oxygenRequirement: "Aerobic (requires oxygen indirectly)",
                otherNames: ["Citric Acid Cycle", "TCA Cycle (Tricarboxylic Acid)", "Szent-Györgyi-Krebs Cycle"],
                discoverer: "Hans Krebs (1937, Nobel Prize 1953)"
            },
            preparation: {
                name: "Pyruvate Oxidation (Link Reaction)",
                location: "Mitochondrial matrix",
                reaction: "Pyruvate + CoA + NAD⁺ → Acetyl-CoA + CO₂ + NADH + H⁺",
                enzyme: "Pyruvate dehydrogenase complex",
                description: "3-carbon pyruvate converted to 2-carbon acetyl-CoA",
                products: "Acetyl-CoA (enters cycle), CO₂ (waste), NADH",
                perGlucose: "Occurs twice (2 pyruvate → 2 Acetyl-CoA)",
                regulation: "Inhibited by ATP, NADH, Acetyl-CoA; Activated by ADP, NAD⁺, Ca²⁺",
                irreversible: "Commits pyruvate to complete oxidation"
            },
            cycleSteps: [
                {
                    step: 1,
                    name: "Condensation",
                    reaction: "Acetyl-CoA (2C) + Oxaloacetate (4C) + H₂O → Citrate (6C) + CoA",
                    enzyme: "Citrate synthase",
                    description: "Acetyl group transferred to oxaloacetate",
                    type: "Condensation reaction",
                    regulation: "Inhibited by ATP, NADH, citrate",
                    carbonCount: "2C + 4C = 6C"
                },
                {
                    step: 2,
                    name: "Isomerization",
                    reaction: "Citrate (6C) → Isocitrate (6C)",
                    enzyme: "Aconitase",
                    description: "Rearrangement of citrate to isocitrate",
                    intermediate: "cis-Aconitate",
                    purpose: "Prepares for oxidation"
                },
                {
                    step: 3,
                    name: "First oxidation and decarboxylation",
                    reaction: "Isocitrate (6C) + NAD⁺ → α-Ketoglutarate (5C) + CO₂ + NADH + H⁺",
                    enzyme: "Isocitrate dehydrogenase",
                    description: "Oxidation coupled with CO₂ release",
                    products: "NADH, CO₂",
                    regulation: "Activated by ADP and Ca²⁺; Inhibited by ATP and NADH",
                    importance: "Rate-limiting step",
                    carbonCount: "6C → 5C (one CO₂ released)"
                },
                {
                    step: 4,
                    name: "Second oxidation and decarboxylation",
                    reaction: "α-Ketoglutarate (5C) + NAD⁺ + CoA → Succinyl-CoA (4C) + CO₂ + NADH + H⁺",
                    enzyme: "α-Ketoglutarate dehydrogenase complex",
                    description: "Similar to pyruvate dehydrogenase",
                    products: "Succinyl-CoA, NADH, CO₂",
                    regulation: "Inhibited by ATP, NADH, succinyl-CoA",
                    carbonCount: "5C → 4C (one CO₂ released)"
                },
                {
                    step: 5,
                    name: "Substrate-level phosphorylation",
                    reaction: "Succinyl-CoA (4C) + GDP + Pi → Succinate (4C) + GTP + CoA",
                    enzyme: "Succinyl-CoA synthetase (Succinate thiokinase)",
                    description: "Only substrate-level phosphorylation in cycle",
                    products: "GTP (equivalent to ATP), Succinate",
                    note: "GTP can transfer phosphate to ADP → ATP",
                    energyYield: "1 GTP (= 1 ATP)"
                },
                {
                    step: 6,
                    name: "Oxidation (produces FADH₂)",
                    reaction: "Succinate (4C) + FAD → Fumarate (4C) + FADH₂",
                    enzyme: "Succinate dehydrogenase",
                    description: "Only enzyme embedded in inner mitochondrial membrane",
                    products: "FADH₂",
                    note: "This enzyme is also Complex II of electron transport chain",
                    bondChange: "Single bond → double bond"
                },
                {
                    step: 7,
                    name: "Hydration",
                    reaction: "Fumarate (4C) + H₂O → Malate (4C)",
                    enzyme: "Fumarase",
                    description: "Water added across double bond",
                    reversible: "Easily reversible"
                },
                {
                    step: 8,
                    name: "Final oxidation",
                    reaction: "Malate (4C) + NAD⁺ → Oxaloacetate (4C) + NADH + H⁺",
                    enzyme: "Malate dehydrogenase",
                    description: "Regenerates oxaloacetate to continue cycle",
                    products: "NADH, Oxaloacetate",
                    completion: "Cycle is complete, ready for next acetyl-CoA"
                }
            ],
            energyAccounting: {
                perAcetylCoA: {
                    atp: "1 GTP (= 1 ATP) from step 5",
                    nadh: "3 NADH (steps 3, 4, 8)",
                    fadh2: "1 FADH₂ (step 6)",
                    co2: "2 CO₂ (steps 3, 4)"
                },
                perGlucose: {
                    cycles: "2 cycles (because 2 acetyl-CoA from 1 glucose)",
                    atp: "2 ATP",
                    nadh: "6 NADH (worth ~15 ATP in ETC)",
                    fadh2: "2 FADH₂ (worth ~3 ATP in ETC)",
                    co2: "4 CO₂ (plus 2 from pyruvate oxidation = 6 total)"
                },
                totalATPEquivalent: "~20 ATP per glucose (from NADH and FADH₂ in ETC)"
            },
            regulation: {
                keyControlPoints: [
                    {
                        enzyme: "Citrate synthase",
                        inhibitors: ["ATP", "NADH", "Citrate"],
                        activators: ["ADP", "Ca²⁺"],
                        mechanism: "Feedback inhibition"
                    },
                    {
                        enzyme: "Isocitrate dehydrogenase",
                        inhibitors: ["ATP", "NADH"],
                        activators: ["ADP", "Ca²⁺"],
                        mechanism: "Allosteric regulation",
                        importance: "Main rate-limiting step"
                    },
                    {
                        enzyme: "α-Ketoglutarate dehydrogenase",
                        inhibitors: ["ATP", "NADH", "Succinyl-CoA"],
                        activators: ["Ca²⁺"],
                        mechanism: "Product inhibition"
                    }
                ],
                principle: "High energy status (↑ATP, ↑NADH) slows cycle. Low energy (↑ADP, ↑Ca²⁺) speeds cycle."
            },
            amphibolicNature: {
                description: "Krebs cycle is amphibolic (both catabolic and anabolic)",
                catabolic: "Breaks down acetyl-CoA, produces energy carriers",
                anabolic: "Provides precursors for biosynthesis",
                intermediatesUsedFor: [
                    "Citrate → fatty acid synthesis",
                    "α-Ketoglutarate → amino acid synthesis (glutamate)",
                    "Succinyl-CoA → heme synthesis (for hemoglobin)",
                    "Oxaloacetate → amino acid synthesis (aspartate), gluconeogenesis"
                ],
                anaplerotic: "Reactions that replenish cycle intermediates"
            },
            carbonTracking: {
                acetylCoAEnters: "2 carbons (from acetyl group)",
                co2Released: "2 carbons (but not the same ones that entered)",
                note: "The carbon atoms that enter are not the same ones released as CO₂ in that turn"
            },
            category: 'cellular_respiration'
        };
    }

    handleElectronTransport(problem) {
        return {
            topic: "Electron Transport Chain and Oxidative Phosphorylation",
            overview: {
                definition: "Series of protein complexes that transfer electrons while pumping protons",
                location: "Inner mitochondrial membrane (cristae)",
                purpose: "Generate proton gradient for ATP synthesis",
                oxygenRole: "Final electron acceptor",
                coupling: "Electron transport coupled to ATP synthesis (oxidative phosphorylation)"
            },
            components: {
                complexI: {
                    name: "Complex I (NADH Dehydrogenase)",
                    function: "Accepts electrons from NADH",
                    reaction: "NADH + H⁺ + Q → NAD⁺ + QH₂",
                    protonsPumped: "4 H⁺ per NADH",
                    electronAcceptor: "Ubiquinone (Coenzyme Q)",
                    inhibitors: ["Rotenone", "Amytal"],
                    size: "Largest complex (~45 protein subunits)"
                },
                complexII: {
                    name: "Complex II (Succinate Dehydrogenase)",
                    function: "Accepts electrons from FADH₂ (from Krebs cycle)",
                    reaction: "Succinate + FAD → Fumarate + FADH₂; FADH₂ + Q → FAD + QH₂",
                    protonsPumped: "0 (does not pump protons)",
                    note: "Also part of Krebs cycle",
                    electronAcceptor: "Ubiquinone (Coenzyme Q)",
                    entryPoint: "Electrons enter at lower energy level than Complex I"
                },
                coenzymeQ: {
                    name: "Ubiquinone (Coenzyme Q)",
                    function: "Mobile electron carrier in membrane",
                    movement: "Diffuses within inner membrane",
                    accepts: "Electrons from Complex I and II",
                    delivers: "Electrons to Complex III"
                },
                complexIII: {
                    name: "Complex III (Cytochrome bc₁ Complex)",
                    function: "Transfers electrons from QH₂ to cytochrome c",
                    reaction: "QH₂ + 2 Cyt c (ox) → Q + 2 Cyt c (red) + 2 H⁺",
                    protonsPumped: "4 H⁺ per 2 electrons",
                    mechanism: "Q cycle (complex mechanism)",
                    inhibitors: ["Antimycin A"]
                },
                cytochromeC: {
                    name: "Cytochrome c",
                    function: "Mobile electron carrier between Complex III and IV",
                    location: "Intermembrane space",
                    structure: "Small protein with heme group",
                    role: "Carries one electron at a time"
                },
                complexIV: {
                    name: "Complex IV (Cytochrome c Oxidase)",
                    function: "Transfers electrons to oxygen (final electron acceptor)",
                    reaction: "4 Cyt c (red) + O₂ + 4 H⁺ → 4 Cyt c (ox) + 2 H₂O",
                    protonsPumped: "2 H⁺ per 2 electrons",
                    oxygenReduction: "Reduces O₂ to H₂O",
                    inhibitors: ["Cyanide", "Carbon monoxide", "Azide"],
                    importance: "Only step where oxygen is used"
                }
            },
            protonGradient: {
                creation: "Complexes I, III, IV pump H⁺ from matrix to intermembrane space",
                totalProtons: "~10 H⁺ pumped per NADH; ~6 H⁺ per FADH₂",
                gradient: {
                    chemical: "Higher H⁺ concentration in intermembrane space",
                    electrical: "Positive charge outside, negative inside",
                    combined: "Electrochemical gradient (proton-motive force)"
                },
                energy: "Potential energy stored in gradient"
            },
            atpSynthase: {
                name: "ATP Synthase (Complex V)",
                structure: {
                    F0: "Membrane-embedded portion, forms proton channel",
                    F1: "Catalytic head in matrix, synthesizes ATP",
                    rotor: "Rotates as protons flow through",
                    stator: "Stationary portion holding F1"
                },
                mechanism: {
                    name: "Chemiosmosis",
                    description: "Protons flow down gradient through ATP synthase",
                    rotation: "Proton flow causes F0 to rotate",
                    catalysis: "Rotation drives conformational changes in F1 that synthesize ATP",
                    bindingChange: "Three binding sites in different conformations (loose, tight, open)"
                },
                reaction: "ADP + Pi + H⁺ (outside) → ATP + H₂O (as H⁺ flows in)",
                efficiency: "~3 H⁺ needed per ATP synthesized",
                discoverer: "Peter Mitchell (chemiosmotic theory, Nobel Prize 1978)"
            },
            energyAccounting: {
                perNADH: {
                    protonsTransferred: "~10 H⁺",
                    atpProduced: "~2.5 ATP",
                    note: "Not exactly 3 due to proton leak and transport costs"
                },
                perFADH2: {
                    protonsTransferred: "~6 H⁺ (skips Complex I)",
                    atpProduced: "~1.5 ATP",
                    note: "Enters at Complex II, generates less ATP"
                },
                perGlucose: {
                    nadh: "10 NADH × 2.5 ATP = 25 ATP",
                    nadhBreakdown: "2 from glycolysis, 2 from pyruvate oxidation, 6 from Krebs",
                    fadh2: "2 FADH₂ × 1.5 ATP = 3 ATP (from Krebs)",
                    substrateLevel: "4 ATP (2 from glycolysis, 2 from Krebs)",
                    glycolysisNADH: "2 NADH from glycolysis worth ~3-5 ATP depending on shuttle",
                    theoreticalTotal: "~32-34 ATP per glucose",
                    actualTotal: "~30-32 ATP (due to proton leak, transport costs)"
                }
            },
            shuttles: {
                glycolysisNADH: {
                    problem: "NADH from glycolysis (cytoplasm) cannot cross inner membrane",
                    solution: "Shuttle systems transfer electrons to mitochondria"
                },
                malatetAspartate: {
                    name: "Malate-Aspartate Shuttle",
                    location: "Heart, liver, kidney",
                    result: "Full value - produces mitochondrial NADH",
                    yield: "~2.5 ATP per cytoplasmic NADH",
                    efficiency: "No ATP loss"
                },
                glycerolPhosphate: {
                    name: "Glycerol-3-Phosphate Shuttle",
                    location: "Brain, skeletal muscle",
                    result: "Reduced value - produces FADH₂ in mitochondria",
                    yield: "~1.5 ATP per cytoplasmic NADH",
                    efficiency: "Lower yield"
                }
            },
            oxygenRole: {
                finalElectronAcceptor: "Oxygen accepts electrons at end of chain",
                reduction: "O₂ + 4 e⁻ + 4 H⁺ → 2 H₂O",
                necessity: "Without oxygen, electron flow stops, NADH accumulates",
                consequence: "NAD⁺ depleted, Krebs cycle stops, only glycolysis continues (fermentation)",
                toxicity: "Partially reduced oxygen forms dangerous reactive oxygen species (ROS)"
            },
            inhibitorsAndPoisons: {
                complexIInhibitors: {
                    rotenone: "Insecticide, blocks electron transfer from Complex I",
                    amytal: "Barbiturate, blocks Complex I"
                },
                complexIIIInhibitors: {
                    antimycin: "Antibiotic, blocks electron transfer in Complex III"
                },
                complexIVInhibitors: {
                    cyanide: "Deadly poison, binds to heme in Complex IV, blocks oxygen binding",
                    carbonMonoxide: "Binds to heme, prevents oxygen reduction",
                    azide: "Blocks Complex IV"
                },
                atpSynthaseInhibitors: {
                    oligomycin: "Blocks proton channel in F0, prevents ATP synthesis"
                },
                uncouplers: {
                    dnp: {
                        name: "2,4-Dinitrophenol (DNP)",
                        mechanism: "Makes membrane permeable to H⁺, bypasses ATP synthase",
                        effect: "Electron transport continues but no ATP made, energy released as heat",
                        danger: "Used as weight-loss drug (now banned), can cause fatal hyperthermia"
                    },
                    thermogenin: {
                        name: "Thermogenin (UCP1)",
                        location: "Brown adipose tissue",
                        function: "Natural uncoupler for heat production",
                        importance: "Keeps newborns and hibernating animals warm"
                    }
                }
            },
            chemiosmoticTheory: {
                proposer: "Peter Mitchell (1961)",
                nobelPrize: "1978",
                keyInsights: [
                    "Energy stored as proton gradient, not chemical intermediate",
                    "ATP synthesis driven by proton flow, not direct coupling to electron transport",
                    "Membrane must be intact and impermeable to protons"
                ],
                evidence: [
                    "pH gradient across membrane correlates with ATP synthesis",
                    "Artificial proton gradient can drive ATP synthesis without electron transport",
                    "Uncouplers dissipate gradient and stop ATP synthesis"
                ],
                controversy: "Initially met with skepticism, now universally accepted"
            },
            comparison: {
                vsSubstrateLevelPhosphorylation: {
                    oxidativePhosphorylation: "Indirect - electron transport → gradient → ATP",
                    substrateLevelPhosphorylation: "Direct - phosphate transferred to ADP from substrate",
                    efficiency: "Oxidative produces ~90% of cellular ATP"
                },
                vsPhotophosphorylation: {
                    similarities: "Both use proton gradient and ATP synthase",
                    differences: "Mitochondria use food, chloroplasts use light; opposite locations"
                }
            },
            category: 'cellular_respiration'
        };
    }

    handleFermentation(problem) {
        return {
            topic: "Fermentation - Anaerobic Energy Production",
            overview: {
                definition: "Anaerobic process that regenerates NAD⁺ to allow glycolysis to continue",
                location: "Cytoplasm",
                oxygenRequirement: "Anaerobic (no oxygen)",
                purpose: "Produce ATP when oxygen unavailable",
                efficiency: "Low - only 2 ATP per glucose (from glycolysis)"
            },
            necessity: {
                problem: "Glycolysis produces NADH but limited NAD⁺ in cell",
                consequence: "Without NAD⁺ regeneration, glycolysis stops",
                solution: "Fermentation oxidizes NADH back to NAD⁺",
                keyPoint: "Fermentation allows glycolysis to continue producing 2 ATP"
            },
            types: {
                lacticAcid: {
                    name: "Lactic Acid Fermentation",
                    equation: "Pyruvate + NADH + H⁺ → Lactate + NAD⁺",
                    overallEquation: "Glucose → 2 Lactate + 2 ATP (net)",
                    enzyme: "Lactate dehydrogenase",
                    organisms: [
                        "Animal muscle cells (during intense exercise)",
                        "Certain bacteria (Lactobacillus)",
                        "Some fungi"
                    ],
                    product: "Lactate (lactic acid at physiological pH)",
                    co2Production: "None",
                    applications: [
                        {
                            application: "Muscle Metabolism",
                            description: "During intense exercise when oxygen limited",
                            lactateBuildup: "Causes muscle fatigue and burning sensation",
                            recovery: "Lactate transported to liver, converted back to glucose (Cori cycle)",
                            myth: "Lactate doesn't cause muscle soreness (that's from muscle damage)"
                        },
                        {
                            application: "Food Production",
                            products: [
                                "Yogurt (Lactobacillus bulgaricus, Streptococcus thermophilus)",
                                "Cheese (various lactic acid bacteria)",
                                "Sauerkraut (Lactobacillus)",
                                "Kimchi (Lactobacillus)",
                                "Pickles (Lactobacillus)"
                            ],
                            mechanism: "Bacteria convert lactose to lactic acid, lowering pH, preserving food"
                        }
                    ],
                    advantages: [
                        "Simple, fast ATP production",
                        "Doesn't require oxygen",
                        "Allows brief intense activity"
                    ],
                    disadvantages: [
                        "Very inefficient (only 2 ATP vs 32-34 in aerobic)",
                        "Lactate accumulation can lower pH",
                        "Cannot be sustained long-term"
                    ]
                },
                alcoholic: {
                    name: "Alcoholic Fermentation",
                    steps: [
                        {
                            step: 1,
                            reaction: "Pyruvate → Acetaldehyde + CO₂",
                            enzyme: "Pyruvate decarboxylase",
                            description: "Removes CO₂ from pyruvate"
                        },
                        {
                            step: 2,
                            reaction: "Acetaldehyde + NADH + H⁺ → Ethanol + NAD⁺",
                            enzyme: "Alcohol dehydrogenase",
                            description: "Reduces acetaldehyde to ethanol, oxidizes NADH"
                        }
                    ],
                    overallEquation: "Glucose → 2 Ethanol + 2 CO₂ + 2 ATP (net)",
                    organisms: [
                        "Yeast (Saccharomyces cerevisiae)",
                        "Some bacteria",
                        "Some plants (in waterlogged conditions)"
                    ],
                    products: "Ethanol (alcohol) and CO₂",
                    co2Production: "Yes - 2 CO₂ per glucose",
                    applications: [
                        {
                            application: "Brewing (Beer)",
                            organism: "Yeast (Saccharomyces cerevisiae)",
                            substrate: "Barley maltose",
                            process: "Fermentation of sugars to alcohol and CO₂",
                            co2Use: "Carbonation",
                            alcoholContent: "Usually 4-8%"
                        },
                        {
                            application: "Winemaking",
                            organism: "Yeast",
                            substrate: "Grape sugars (glucose, fructose)",
                            alcoholContent: "Usually 10-15%",
                            note: "Fermentation stops when alcohol reaches ~15% (toxic to yeast)"
                        },
                        {
                            application: "Baking (Bread)",
                            organism: "Baker's yeast",
                            substrate: "Flour sugars",
                            co2Use: "Causes dough to rise (leavening)",
                            alcoholUse: "Evaporates during baking",
                            note: "CO₂ is the important product for bread"
                        },
                        {
                            application: "Biofuel Production",
                            organism: "Yeast or bacteria",
                            substrate: "Corn, sugarcane, cellulose",
                            product: "Bioethanol (fuel)",
                            use: "Alternative to gasoline"
                        }
                    ],
                    advantages: [
                        "Produces useful products (alcohol, CO₂)",
                        "Doesn't require oxygen",
                        "Industrially important"
                    ],
                    disadvantages: [
                        "Very inefficient energy yield",
                        "Alcohol is toxic at high concentrations"
                    ]
                },
                other: {
                    propionicAcid: {
                        name: "Propionic Acid Fermentation",
                        organism: "Propionibacterium",
                        product: "Propionic acid + CO₂",
                        application: "Swiss cheese production (CO₂ makes holes)"
                    },
                    butyricAcid: {
                        name: "Butyric Acid Fermentation",
                        organism: "Clostridium",
                        product: "Butyric acid",
                        note: "Responsible for rancid butter smell"
                    },
                    mixedAcid: {
                        name: "Mixed Acid Fermentation",
                        organism: "E. coli and related bacteria",
                        products: "Mixture of acids (lactic, acetic, succinic, formic)"
                    }
                }
            },
            comparison: {
                aerobicVsAnaerobic: {
                    criteria: ["Oxygen", "ATP Yield", "Products", "Speed", "Sustainability"],
                    aerobic: ["Required", "~32-34 ATP", "CO₂ + H₂O", "Slower", "Long-term"],
                    anaerobic: ["Not required", "2 ATP", "Lactate or Ethanol + CO₂", "Faster", "Short-term"]
                },
                lacticVsAlcoholic: {
                    criteria: ["CO₂ Production", "Product", "Steps", "Organisms"],
                    lactic: ["No", "Lactate", "1 step", "Animals, some bacteria"],
                    alcoholic: ["Yes", "Ethanol", "2 steps", "Yeast, some plants"]
                }
            },
            energyAccounting: {
                glycolysisOnly: "2 ATP (net) per glucose",
                fermentationATP: "0 ATP (just regenerates NAD⁺)",
                totalATP: "2 ATP per glucose",
                efficiency: "~2% of glucose energy captured (vs ~32% in aerobic respiration)",
                nadRegeneration: "NADH → NAD⁺ (essential for glycolysis to continue)"
            },
            muscleFatigue: {
                intenseExercise: "Oxygen supply insufficient for demand",
                shift: "Cells switch from aerobic respiration to lactic acid fermentation",
                lactateBuildup: "Lactate accumulates in muscle",
                effects: [
                    "Lower pH (more acidic)",
                    "Muscle fatigue",
                    "Burning sensation"
                ],
                recovery: {
                    process: "Lactate transported to liver via bloodstream",
                    coriCycle: "Liver converts lactate back to glucose (uses ATP)",
                    return: "Glucose returned to muscles",
                    oxygenDebt: "Extra oxygen needed after exercise to repay ATP used in recovery"
                },
                commonMisconception: "Lactate itself doesn't cause delayed-onset muscle soreness (DOMS)"
            },
            evolutionaryPerspective: {
                ancient: "Fermentation evolved before aerobic respiration",
                earlyEarth: "Atmosphere lacked oxygen",
                firstOrganisms: "Relied on fermentation for ATP",
                efficiency: "Low efficiency acceptable when competition was low",
                persistence: "Still useful when oxygen temporarily unavailable"
            },
            industrialImportance: {
                foodIndustry: "Yogurt, cheese, bread, beer, wine, sauerkraut, kimchi",
                pharmaceuticals: "Production of antibiotics, vitamins",
                biofuels: "Ethanol production for fuel",
                chemicals: "Production of organic acids, solvents",
                economicValue: "Billions of dollars annually"
            },
            category: 'anaerobic_metabolism'
        };
    }

    handleLightReactions(problem) {
        return {
            topic: "Light Reactions of Photosynthesis",
            overview: {
                definition: "Light-dependent reactions that convert light energy to chemical energy",
                location: "Thylakoid membranes in chloroplasts",
                lightRequirement: "Requires light (light-dependent)",
                products: "ATP, NADPH, O₂",
                purpose: "Provide energy (ATP) and reducing power (NADPH) for Calvin cycle"
            },
            overallEquation: {
                simplified: "2 H₂O + 2 NADP⁺ + 3 ADP + 3 Pi + light → O₂ + 2 NADPH + 3 ATP",
                description: "Light energy splits water, produces O₂, generates ATP and NADPH"
            },
            components: {
                thylakoidMembrane: {
                    location: "Internal membrane system in chloroplasts",
                    structure: "Flattened sacs (thylakoids) stacked in grana",
                    function: "Contains photosystems and electron transport chain",
                    lumen: "Interior space where H⁺ accumulates"
                },
                photosystems: {
                    description: "Large complexes of pigments and proteins",
                    types: "Two photosystems working in series",
                    components: [
                        "Antenna complex (light-harvesting pigments)",
                        "Reaction center (chlorophyll a molecule)",
                        "Electron acceptor"
                    ]
                },
                pigments: {
                    chlorophyllA: {
                        description: "Primary photosynthetic pigment",
                        absorption: "Red (~680 nm) and blue (~430 nm) light",
                        reflects: "Green light (why plants look green)",
                        location: "Reaction centers"
                    },
                    chlorophyllB: {
                        description: "Accessory pigment",
                        absorption: "Slightly different wavelengths than chlorophyll a",
                        function: "Broadens absorption spectrum",
                        location: "Antenna complexes"
                    },
                    carotenoids: {
                         description: "Orange/yellow accessory pigments",
                        absorption: "Blue-green light",
                        functions: [
                            "Broaden absorption spectrum",
                            "Photoprotection (prevent damage from excess light)",
                            "Give fall leaf colors when chlorophyll breaks down"
                        ],
                        examples: "β-carotene, xanthophylls"
                    }
                }
            },
            photosystemII: {
                name: "Photosystem II (P680)",
                number: "Called II but operates first",
                reactionCenter: "P680 (absorbs 680 nm light)",
                location: "Thylakoid membrane",
                steps: [
                    {
                        step: 1,
                        name: "Light absorption",
                        description: "Antenna pigments capture light, transfer energy to P680",
                        result: "P680 excited to P680*"
                    },
                    {
                        step: 2,
                        name: "Electron excitation and transfer",
                        description: "P680* donates electron to primary electron acceptor",
                        result: "P680 becomes P680⁺ (oxidized, electron deficient)"
                    },
                    {
                        step: 3,
                        name: "Water splitting (Photolysis)",
                        reaction: "2 H₂O → 4 H⁺ + 4 e⁻ + O₂",
                        enzyme: "Water-splitting enzyme (oxygen-evolving complex)",
                        description: "Electrons from water replace those lost from P680⁺",
                        products: [
                            "O₂ (released as waste/byproduct)",
                            "H⁺ (contributes to gradient in lumen)",
                            "Electrons (replace those lost by P680)"
                        ],
                        significance: "Source of atmospheric oxygen, uses water as electron source"
                    }
                ],
                function: "Initiates electron flow, splits water, releases O₂",
                importance: "Only known biological system that can oxidize water"
            },
            electronTransportChain: {
                description: "Electrons pass through series of carriers",
                components: [
                    "Plastoquinone (PQ)",
                    "Cytochrome b₆f complex",
                    "Plastocyanin (PC)"
                ],
                process: [
                    {
                        step: "Electron flow from PSII",
                        description: "Electrons from P680 → Primary acceptor → Plastoquinone (PQ)"
                    },
                    {
                        step: "Cytochrome b₆f complex",
                        description: "PQ transfers electrons to cytochrome complex",
                        protonPumping: "Pumps H⁺ from stroma into lumen",
                        result: "Builds proton gradient"
                    },
                    {
                        step: "Plastocyanin",
                        description: "Mobile carrier transports electrons to PSI",
                        location: "Lumen side of membrane"
                    }
                ],
                energyRelease: "Energy from electron transfer used to pump H⁺ into lumen"
            },
            photosystemI: {
                name: "Photosystem I (P700)",
                reactionCenter: "P700 (absorbs 700 nm light)",
                location: "Thylakoid membrane",
                steps: [
                    {
                        step: 1,
                        name: "Light absorption",
                        description: "P700 absorbs light energy",
                        result: "P700 excited to P700*"
                    },
                    {
                        step: 2,
                        name: "Electron excitation",
                        description: "P700* donates electron to primary acceptor",
                        result: "P700 becomes P700⁺ (oxidized)"
                    },
                    {
                        step: 3,
                        name: "Electron replacement",
                        description: "Electron from plastocyanin (ultimately from PSII) replaces electron in P700⁺",
                        result: "P700 restored"
                    },
                    {
                        step: 4,
                        name: "NADPH formation",
                        description: "Electrons pass through ferredoxin to NADP⁺ reductase",
                        reaction: "2 e⁻ + H⁺ + NADP⁺ → NADPH",
                        enzyme: "Ferredoxin-NADP⁺ reductase",
                        result: "NADPH produced (reducing power for Calvin cycle)"
                    }
                ],
                function: "Provides high-energy electrons to make NADPH"
            },
            zScheme: {
                name: "Z-Scheme",
                description: "Graph showing energy changes of electrons",
                shape: "Resembles letter Z when plotted",
                flow: "PSII (up) → ETC (down) → PSI (up) → NADPH (down)",
                energy: [
                    "Electrons boosted to high energy by light in PSII",
                    "Fall in energy as they move through ETC (energy used for H⁺ pumping)",
                    "Boosted again by light in PSI",
                    "Fall to NADPH"
                ],
                twoLightReactions: "Requires two photons per electron (one at each photosystem)"
            },
            chemiosmosis: {
                protonGradient: {
                    creation: [
                        "H⁺ from water splitting accumulates in lumen",
                        "H⁺ pumped from stroma to lumen by cytochrome complex",
                        "H⁺ used from stroma when NADPH made"
                    ],
                    result: "High H⁺ in lumen, low H⁺ in stroma",
                    concentration: "Lumen ~1000× more H⁺ than stroma (pH ~5 vs ~8)"
                },
                atpSynthase: {
                    location: "Thylakoid membrane",
                    structure: "CF₀ (membrane channel) + CF₁ (catalytic head in stroma)",
                    function: "H⁺ flows from lumen to stroma through ATP synthase",
                    reaction: "ADP + Pi + H⁺ (lumen) → ATP + H₂O (as H⁺ flows to stroma)",
                    mechanism: "Same rotary mechanism as mitochondrial ATP synthase",
                    yield: "~3 H⁺ per ATP"
                },
                name: "Photophosphorylation (ATP synthesis using light energy)"
            },
            types: {
                noncyclicPhotophosphorylation: {
                    description: "Normal Z-scheme pathway described above",
                    flow: "H₂O → PSII → ETC → PSI → NADPH",
                    products: "ATP, NADPH, O₂",
                    ratio: "~1.5 ATP : 1 NADPH",
                    electronSource: "Water",
                    electronDestination: "NADP⁺"
                },
                cyclicPhotophosphorylation: {
                    description: "Alternative pathway using only PSI",
                    flow: "PSI → Ferredoxin → Cytochrome complex → Plastocyanin → PSI (cycle)",
                    products: "ATP only (no NADPH, no O₂)",
                    when: "When cell needs more ATP relative to NADPH",
                    electronSource: "PSI itself (electrons cycle back)",
                    protonPumping: "Cytochrome complex pumps H⁺",
                    purpose: "Adjust ATP:NADPH ratio for Calvin cycle needs"
                }
            },
            products: {
                atp: {
                    amount: "~3 ATP per 2 H₂O (noncyclic); variable (cyclic)",
                    use: "Energy for Calvin cycle"
                },
                nadph: {
                    amount: "2 NADPH per 2 H₂O",
                    use: "Reducing power for Calvin cycle (reduces CO₂ to sugar)"
                },
                oxygen: {
                    amount: "1 O₂ per 2 H₂O",
                    fate: "Released to atmosphere (waste product)",
                    significance: "Source of atmospheric oxygen, supports aerobic life"
                }
            },
            comparison: {
                vsMitochondria: {
                    similarities: [
                        "Both use electron transport chain",
                        "Both pump H⁺ to create gradient",
                        "Both use ATP synthase",
                        "Both use chemiosmosis"
                    ],
                    differences: [
                        "Chloroplasts use light, mitochondria use food",
                        "Chloroplasts split water, mitochondria reduce oxygen",
                        "H⁺ gradient direction reversed (lumen high vs matrix low)",
                        "Chloroplasts make NADPH, mitochondria oxidize NADH"
                    ]
                }
            },
            category: 'photosynthesis'
        };
    }

    handleCalvinCycle(problem) {
        return {
            topic: "Calvin Cycle - Carbon Fixation",
            overview: {
                definition: "Light-independent reactions that fix CO₂ into glucose",
                location: "Stroma of chloroplasts",
                lightRequirement: "Light-independent (but requires ATP and NADPH from light reactions)",
                otherNames: ["Calvin-Benson Cycle", "C3 Cycle", "Dark Reactions"],
                discoverer: "Melvin Calvin (Nobel Prize 1961)",
                purpose: "Build glucose from CO₂ using energy from light reactions"
            },
            overallEquation: {
                simplified: "3 CO₂ + 9 ATP + 6 NADPH + 6 H⁺ → G3P + 9 ADP + 8 Pi + 6 NADP⁺ + 3 H₂O",
                forGlucose: "6 CO₂ + 18 ATP + 12 NADPH → C₆H₁₂O₆ + 18 ADP + 16 Pi + 12 NADP⁺",
                description: "Takes 6 turns of cycle to make one glucose"
            },
            phases: {
                carbonFixation: {
                    name: "Phase 1: Carbon Fixation",
                    description: "CO₂ incorporated into organic molecule",
                    steps: [
                        {
                            reaction: "CO₂ + RuBP (5C) → 2 × 3-PGA (3C)",
                            enzyme: "RuBisCO (Ribulose-1,5-bisphosphate carboxylase/oxygenase)",
                            substrate: "RuBP (ribulose-1,5-bisphosphate)",
                            product: "3-phosphoglycerate (3-PGA)",
                            carbonCount: "1C + 5C = 6C intermediate → 2 × 3C",
                            note: "RuBisCO is most abundant protein on Earth"
                        }
                    ],
                    perCycle: "1 CO₂ fixed, 2 × 3-PGA produced",
                    per3Cycles: "3 CO₂ fixed, 6 × 3-PGA produced"
                },
                reduction: {
                    name: "Phase 2: Reduction",
                    description: "3-PGA reduced to G3P using ATP and NADPH",
                    steps: [
                        {
                            step: 1,
                            reaction: "3-PGA + ATP → 1,3-bisphosphoglycerate + ADP",
                            enzyme: "Phosphoglycerate kinase",
                            description: "Phosphorylation using ATP"
                        },
                        {
                            step: 2,
                            reaction: "1,3-bisphosphoglycerate + NADPH + H⁺ → G3P + NADP⁺ + Pi",
                            enzyme: "Glyceraldehyde-3-phosphate dehydrogenase",
                            description: "Reduction using NADPH",
                            product: "G3P (glyceraldehyde-3-phosphate)"
                        }
                    ],
                    perCycle: "2 × 3-PGA → 2 × G3P",
                    per3Cycles: "6 × 3-PGA → 6 × G3P",
                    energyUsed: "6 ATP + 6 NADPH (per 3 cycles)"
                },
                regeneration: {
                    name: "Phase 3: Regeneration of RuBP",
                    description: "5 of 6 G3P used to regenerate 3 RuBP",
                    complexity: "Complex rearrangement reactions",
                    steps: "Multiple enzymes rearrange carbon skeletons",
                    stoichiometry: "5 G3P (3C each = 15C total) → 3 RuBP (5C each = 15C total)",
                    energyUsed: "3 ATP (per 3 cycles)",
                    purpose: "Regenerate RuBP to keep cycle going",
                    note: "1 of 6 G3P exits cycle as net product"
                }
            },
            detailedAccounting: {
                input: {
                    co2: "3 CO₂ (per 3 cycles)",
                    atp: "9 ATP (6 in reduction, 3 in regeneration)",
                    nadph: "6 NADPH (in reduction)",
                    rubp: "3 RuBP (regenerated)"
                },
                output: {
                    g3p: "1 G3P (net product)",
                    adp: "9 ADP",
                    nadp: "6 NADP⁺",
                    pi: "8 Pi"
                },
                forGlucose: {
                    cycles: "6 cycles needed",
                    co2: "6 CO₂",
                    atp: "18 ATP",
                    nadph: "12 NADPH",
                    g3p: "2 G3P combine to make glucose"
                }
            },
            rubisco: {
                fullName: "Ribulose-1,5-bisphosphate carboxylase/oxygenase",
                significance: [
                    "Most abundant protein on Earth",
                    "Critical for life (fixes essentially all carbon)",
                    "Slow enzyme (~3 CO₂ per second)",
                    "Makes up ~50% of leaf protein"
                ],
                dualActivity: {
                    carboxylase: "Fixes CO₂ (desired reaction)",
                    oxygenase: "Fixes O₂ instead (undesired reaction - photorespiration)"
                },
                inefficiency: {
                    problem: "Cannot distinguish well between CO₂ and O₂",
                    consequence: "About 25% of time fixes O₂ instead (photorespiration)",
                    cost: "Wastes energy and carbon",
                    evolution: "Evolved when atmosphere had more CO₂, less O₂"
                },
                regulation: {
                    activation: "Requires Mg²⁺ and CO₂ to activate",
                    lightDependence: "Activated in light (indirectly through pH changes)",
                    inhibition: "Inhibited by products (3-PGA)"
                }
            },
            products: {
                g3p: {
                    name: "Glyceraldehyde-3-phosphate",
                    fate: [
                        "Most G3P recycled to regenerate RuBP",
                        "Net G3P (1 per 3 cycles) can be used for:"
                    ],
                    uses: [
                        "Glucose synthesis (2 G3P → 1 glucose)",
                        "Starch synthesis (glucose storage in chloroplasts)",
                        "Sucrose synthesis (transport sugar)",
                        "Amino acid synthesis",
                        "Fatty acid synthesis",
                        "Cellulose synthesis (cell walls)"
                    ]
                },
                glucose: {
                    formation: "2 G3P combine (requires 6 cycles)",
                    immediate: "Not made directly in cycle",
                    pathway: "G3P → DHAP → F1,6BP → F6P → G6P → Glucose"
                }
            },
            photorespiration: {
                problem: {
                    description: "RuBisCO fixes O₂ instead of CO₂",
                    conditions: "Hot, dry conditions (stomata close, O₂ builds up)",
                    reaction: "RuBP + O₂ → 3-PGA + 2-Phosphoglycolate",
                    consequence: "No sugar made, CO₂ released, energy wasted"
                },
                process: {
                    location: "Chloroplast, peroxisome, mitochondria",
                    steps: "Complex pathway to salvage some carbon",
                    cost: "Uses ATP, releases CO₂ and NH₃",
                    result: "Net loss of carbon and energy"
                },
                significance: "Can reduce photosynthetic efficiency by 25-50% in hot conditions"
            },
            alternativePathways: {
                c4Photosynthesis: {
                    description: "Adaptation to minimize photorespiration",
                    mechanism: [
                        "CO₂ first fixed by PEP carboxylase (doesn't fix O₂)",
                        "Makes 4-carbon compound (oxaloacetate → malate)",
                        "Malate transported to bundle sheath cells",
                        "CO₂ released near RuBisCO (high CO₂ concentration)",
                        "Calvin cycle operates normally with less photorespiration"
                    ],
                    anatomy: "Kranz anatomy (two cell types)",
                    plants: ["Corn", "Sugarcane", "Sorghum", "Crabgrass"],
                    advantage: "Better in hot, dry climates",
                    cost: "Uses 2 extra ATP per CO₂ (total 30 ATP per glucose)",
                    efficiency: "More efficient in hot weather"
                },
                camPhotosynthesis: {
                    description: "Temporal separation (not spatial like C4)",
                    fullName: "Crassulacean Acid Metabolism",
                    mechanism: [
                        "Night: Stomata open, CO₂ fixed by PEP carboxylase → malate",
                        "Malate stored in vacuole as malic acid",
                        "Day: Stomata closed, malate releases CO₂ to Calvin cycle"
                    ],
                    advantage: "Minimizes water loss (stomata open only at night)",
                    plants: ["Cacti", "Succulents", "Pineapple", "Orchids"],
                    habitat: "Desert and arid environments",
                    tradeoff: "Slower growth (limited CO₂ storage)"
                }
            },
            regulation: {
                lightDependence: {
                    indirect: "Requires ATP and NADPH from light reactions",
                    pHChanges: "Light reactions change stromal pH, activating enzymes",
                    redoxChanges: "Light-driven electron flow activates enzymes"
                },
                enzymeActivation: [
                    "RuBisCO: Activated by light-induced pH increase",
                    "Several cycle enzymes: Activated by reduced ferredoxin from light reactions",
                    "Fructose-1,6-bisphosphatase: Key regulatory enzyme"
                ],
                feedbackRegulation: "Product buildup (G3P, sugars) inhibits cycle"
            },
            efficiency: {
                theoreticalATP: "18 ATP per glucose",
                actualATP: "More when considering cyclic photophosphorylation",
                carbonConversion: "~3-6% of light energy stored in glucose",
                factors: [
                    "Light intensity",
                    "CO₂ concentration",
                    "Temperature",
                    "Water availability",
                    "Photorespiration rate"
                ]
            },
            comparison: {
                c3VsC4VsCam: {
                    criteria: ["CO₂ Fixation", "First Product", "Cells", "Stomata", "Photorespiration", "Environment"],
                    c3: ["RuBisCO", "3-PGA (3C)", "One type", "Open during day", "High", "Temperate"],
                    c4: ["PEP carboxylase first", "Oxaloacetate (4C)", "Two types", "Open during day", "Low", "Hot, dry"],
                    cam: ["PEP carboxylase night", "Oxaloacetate (4C)", "One type", "Open at night", "Low", "Arid"]
                }
            },
            category: 'photosynthesis'
        };
    }

    handleCellularRespiration(problem) {
        return {
            topic: "Cellular Respiration - Complete Overview",
            overview: {
                definition: "Complete oxidation of glucose to CO₂ and H₂O, extracting maximum ATP",
                type: "Aerobic (requires oxygen)",
                location: "Cytoplasm (glycolysis) and mitochondria (Krebs, ETC)",
                purpose: "Extract energy from glucose to make ATP",
                efficiency: "~32-34 ATP per glucose (~32% of glucose energy captured)"
            },
            overallEquation: {
                formula: "C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + ~32-34 ATP",
                simplified: "Glucose + Oxygen → Carbon dioxide + Water + Energy (ATP)",
                reverse: "Opposite of photosynthesis equation"
            },
            stages: {
                stage1: {
                    name: "Glycolysis",
                    location: "Cytoplasm (cytosol)",
                    oxygen: "Anaerobic (no oxygen needed)",
                    input: "1 Glucose",
                    output: "2 Pyruvate, 2 ATP (net), 2 NADH",
                    steps: "10 enzyme-catalyzed steps",
                    description: "Glucose split into two pyruvate molecules"
                },
                stage2: {
                    name: "Pyruvate Oxidation (Link Reaction)",
                    location: "Mitochondrial matrix",
                    oxygen: "Aerobic (requires oxygen indirectly)",
                    input: "2 Pyruvate (per glucose)",
                    output: "2 Acetyl-CoA, 2 CO₂, 2 NADH",
                    description: "Pyruvate converted to acetyl-CoA, enters mitochondria"
                },
                stage3: {
                    name: "Krebs Cycle (Citric Acid Cycle)",
                    location: "Mitochondrial matrix",
                    oxygen: "Aerobic (requires oxygen indirectly)",
                    input: "2 Acetyl-CoA (per glucose)",
                    output: "2 ATP, 6 NADH, 2 FADH₂, 4 CO₂",
                    cycles: "2 cycles per glucose",
                    description: "Complete oxidation of acetyl-CoA"
                },
                stage4: {
                    name: "Electron Transport Chain and Oxidative Phosphorylation",
                    location: "Inner mitochondrial membrane (cristae)",
                    oxygen: "Aerobic (oxygen is final electron acceptor)",
                    input: "10 NADH, 2 FADH₂, O₂",
                    output: "~28-32 ATP, H₂O",
                    description: "Electrons from NADH and FADH₂ drive ATP synthesis"
                }
            },
            completeEnergyAccounting: {
                glycolysis: {
                    atp: "2 ATP (net, substrate-level)",
                    nadh: "2 NADH (worth 3-5 ATP depending on shuttle)"
                },
                pyruvateOxidation: {
                    nadh: "2 NADH (worth ~5 ATP)"
                },
                krebsCycle: {
                    atp: "2 ATP (substrate-level)",
                    nadh: "6 NADH (worth ~15 ATP)",
                    fadh2: "2 FADH₂ (worth ~3 ATP)"
                },
                electronTransport: {
                    fromNADH: "10 NADH × ~2.5 ATP = ~25 ATP",
                    fromFADH2: "2 FADH₂ × ~1.5 ATP = ~3 ATP",
                    total: "~28-32 ATP (oxidative phosphorylation)"
                },
                grandTotal: {
                    substratLevel: "4 ATP (2 glycolysis + 2 Krebs)",
                    oxidativePhosphorylation: "~28-32 ATP",
                    total: "~32-34 ATP per glucose",
                    maximum: "38 ATP (theoretical maximum, rarely achieved)"
                }
            },
            oxygenRole: {
                location: "Final electron acceptor at Complex IV of ETC",
                reaction: "O₂ + 4 e⁻ + 4 H⁺ → 2 H₂O",
                necessity: "Without oxygen, ETC stops, NADH accumulates",
                consequences: [
                    "NAD⁺ depleted",
                    "Krebs cycle stops",
                    "Pyruvate oxidation stops",
                    "Only glycolysis continues (must use fermentation)"
                ],
                alternativeAcceptors: "Some organisms use nitrate, sulfate (not in humans)"
            },
            comparison: {
                aerobicVsAnaerobic: {
                    criteria: ["Oxygen", "ATP Yield", "Efficiency", "Products", "Location", "Sustainability"],
                    aerobic: ["Required", "~32-34 ATP", "~32%", "CO₂, H₂O", "Cytoplasm + Mitochondria", "Long-term"],
                    anaerobic: ["Not required", "2 ATP", "~2%", "Lactate or Ethanol", "Cytoplasm only", "Short-term"]
                },
                vsPhotosynthesis: {
                    respiration: "Breaks down glucose, releases energy, consumes O₂, produces CO₂",
                    photosynthesis: "Builds glucose, stores energy, produces O₂, consumes CO₂",
                    relationship: "Complementary processes, cycle energy in biosphere"
                }
            },
            regulation: {
                feedbackInhibition: "ATP inhibits key enzymes when energy is abundant",
                keyControlPoints: [
                    "Phosphofructokinase (glycolysis)",
                    "Pyruvate dehydrogenase (pyruvate oxidation)",
                    "Isocitrate dehydrogenase (Krebs cycle)"
                ],
                activators: "ADP, AMP, NAD⁺ (low energy signals)",
                inhibitors: "ATP, NADH, citrate (high energy signals)",
                principle: "Rate increases when ATP low, decreases when ATP high"
            },
            alternativeFuels: {
                lipids: {
                    process: "Fatty acids → β-oxidation → Acetyl-CoA",
                    entry: "Enter as acetyl-CoA into Krebs cycle",
                    yield: "More ATP per gram than glucose (9 kcal/g vs 4 kcal/g)",
                    efficiency: "One 16-carbon fatty acid yields ~106 ATP"
                },
                proteins: {
                    process: "Proteins → amino acids → deamination → intermediates",
                    entry: "Various entry points (pyruvate, acetyl-CoA, Krebs intermediates)",
                    note: "Not preferred fuel, used mainly in starvation",
                    nitrogen: "Amino group removed as ammonia (toxic, converted to urea)"
                }
            },
            mitochondrialStructure: {
                outerMembrane: "Permeable to small molecules",
                innerMembrane: "Highly folded (cristae), impermeable, contains ETC",
                intermembraneSpace: "Space between membranes, site of H⁺ accumulation",
                matrix: "Interior space, site of Krebs cycle, contains enzymes",
                cristae: "Folds of inner membrane, increase surface area for ETC",
                significance: "Structure optimized for chemiosmosis and ATP synthesis"
            },
            evolutionaryPerspective: {
                origin: "Aerobic respiration evolved after photosynthesis added O₂ to atmosphere",
                endosymbiosis: "Mitochondria evolved from ancient aerobic bacteria",
                advantage: "18× more efficient than fermentation",
                dominance: "Enabled complex, energy-demanding life forms",
                universality: "Present in virtually all eukaryotes"
            },
            applications: {
                exercise: "Understanding muscle energy during different activities",
                disease: "Mitochondrial diseases affect energy production",
                aging: "Mitochondrial decline linked to aging",
                metabolism: "Basis for understanding metabolic disorders",
                weight: "Energy balance involves respiration rate"
            },
            category: 'energy_metabolism'
        };
    }

    handlePhotosynthesis(problem) {
        return {
            topic: "Photosynthesis - Complete Overview",
            overview: {
                definition: "Conversion of light energy into chemical energy (glucose)",
                location: "Chloroplasts in plant cells",
                organisms: "Plants, algae, cyanobacteria, some protists",
                importance: "Primary energy source for most ecosystems",
                oxygenProduction: "Source of atmospheric oxygen"
            },
            overallEquation: {
                formula: "6 CO₂ + 6 H₂O + light energy → C₆H₁₂O₆ + 6 O₂",
                simplified: "Carbon dioxide + Water + Light → Glucose + Oxygen",
                energyStorage: "Light energy stored in chemical bonds of glucose",
                reverse: "Opposite of cellular respiration equation"
            },
            stages: {
                lightReactions: {
                    name: "Light Reactions (Light-Dependent Reactions)",
                    location: "Thylakoid membranes",
                    lightRequirement: "Requires light",
                    input: "Light, H₂O, NADP⁺, ADP + Pi",
                    output: "O₂, ATP, NADPH",
                    description: "Convert light energy to chemical energy",
                    processes: ["Photolysis of water", "Electron transport", "Chemiosmosis"]
                },
                calvinCycle: {
                    name: "Calvin Cycle (Light-Independent Reactions / Dark Reactions)",
                    location: "Stroma",
                    lightRequirement: "Light-independent (but requires ATP and NADPH)",
                    input: "CO₂, ATP, NADPH",
                    output: "Glucose (G3P), ADP + Pi, NADP⁺",
                    description: "Fix CO₂ into glucose using energy from light reactions",
                    phases: ["Carbon fixation", "Reduction", "Regeneration of RuBP"]
                }
            },
            chloroplastStructure: {
                outerMembrane: "Permeable outer boundary",
                innerMembrane: "Selective permeability",
                intermembraneSpace: "Space between membranes",
                stroma: "Fluid interior, site of Calvin cycle",
                thylakoids: "Flattened membrane sacs, site of light reactions",
                grana: "Stacks of thylakoids",
                lumen: "Interior of thylakoid, H⁺ accumulates here"
            },
            pigments: {
                chlorophyllA: "Primary pigment, absorbs red and blue light",
                chlorophyllB: "Accessory pigment, broadens absorption spectrum",
                carotenoids: "Accessory pigments, absorb blue-green light, photoprotection",
                absorptionSpectrum: "Graph showing which wavelengths absorbed",
                actionSpectrum: "Graph showing which wavelengths drive photosynthesis",
                greenReflection: "Plants reflect green light (why they appear green)"
            },
            energyFlow: {
                lightCapture: "Chlorophyll absorbs photons",
                electronExcitation: "Electrons boosted to higher energy level",
                electronTransport: "Electrons pass through ETC",
                atpSynthesis: "Proton gradient drives ATP synthesis",
                nadphProduction: "Electrons reduce NADP⁺ to NADPH",
                carbonFixation: "ATP and NADPH used to fix CO₂ into glucose"
            },
            factors: {
                lightIntensity: {
                    low: "Rate increases with light intensity",
                    high: "Rate plateaus (light saturation point)",
                    veryHigh: "Can damage photosystems (photoinhibition)"
                },
                co2Concentration: {
                    low: "Limits rate of Calvin cycle",
                    normal: "~0.04% of atmosphere",
                    elevated: "Can increase rate until other factors limiting",
                    saturation: "Eventually saturates"
                },
                temperature: {
                    low: "Enzyme reactions slow",
                    optimal: "Usually 25-35°C for most plants",
                    high: "Enzymes denature, photorespiration increases",
                    note: "C4 and CAM plants have higher optimal temperatures"
                },
                water: {
                    availability: "Required as electron source",
                    shortage: "Stomata close to conserve water, limits CO₂ uptake",
                    consequence: "Photosynthesis rate decreases"
                }
            },

            efficiency: {
                lightCapture: "Only ~3-6% of light energy stored in glucose",
                reasons: [
                    "Not all wavelengths absorbed",
                    "Energy lost as heat during transfers",
                    "Photorespiration wastes energy",
                    "Light saturation limits",
                    "Metabolic costs"
                ],
                c4AndCam: "More efficient in certain environments"
            },
            adaptations: {
                c3Plants: {
                    description: "Standard Calvin cycle",
                    efficiency: "Lower in hot, dry conditions due to photorespiration",
                    examples: "Wheat, rice, soybeans, most trees",
                    percentage: "~85% of plant species"
                },
                c4Plants: {
                    description: "CO₂ concentrated before Calvin cycle",
                    efficiency: "Higher in hot, dry conditions",
                    examples: "Corn, sugarcane, sorghum",
                    advantage: "Minimize photorespiration",
                    cost: "Requires extra ATP"
                },
                camPlants: {
                    description: "Temporal separation of CO₂ fixation and Calvin cycle",
                    efficiency: "Excellent water conservation",
                    examples: "Cacti, succulents, pineapple",
                    mechanism: "Open stomata at night, close during day",
                    tradeoff: "Slower growth rate"
                }
            },
            photorespiration: {
                problem: "RuBisCO fixes O₂ instead of CO₂ in hot conditions",
                consequence: "Wastes energy and carbon, releases CO₂",
                conditions: "Hot, dry weather when stomata close",
                cost: "Can reduce efficiency by 25-50%",
                evolution: "RuBisCO evolved when O₂ levels were lower"
            },
            globalImportance: {
                oxygenProduction: "Produces essentially all atmospheric O₂",
                carbonSink: "Removes CO₂ from atmosphere",
                foodProduction: "Basis of food chains (primary producers)",
                climateRegulation: "Affects global carbon cycle",
                fossilFuels: "Ancient photosynthesis stored as fossil fuels",
                biomass: "Provides raw materials, biofuels"
            },
            comparison: {
                vsRespiration: {
                    photosynthesis: "Builds glucose, stores energy, light-dependent, produces O₂, consumes CO₂",
                    respiration: "Breaks down glucose, releases energy, continuous, consumes O₂, produces CO₂",
                    relationship: "Inverse processes, cycle energy and carbon in biosphere"
                },
                c3VsC4VsCam: {
                    efficiency: "C3 < C4 < CAM (in terms of water use)",
                    speed: "C3 > C4 > CAM (in terms of growth rate)",
                    environment: "C3 (temperate), C4 (hot dry), CAM (arid)"
                }
            },
            category: 'energy_metabolism'
        };
    }

    handleEnergyCoupling(problem) {
        return {
            topic: "Energy Coupling in Biological Systems",
            overview: {
                definition: "Using energy from exergonic reactions to drive endergonic reactions",
                mechanism: "ATP serves as energy intermediate",
                importance: "Makes thermodynamically unfavorable reactions possible",
                universality: "Fundamental to all life processes"
            },
            thermodynamics: {
                exergonic: {
                    definition: "Energy-releasing reactions (spontaneous)",
                    freeEnergy: "ΔG < 0 (negative)",
                    examples: ["ATP hydrolysis", "Glucose oxidation", "NADH oxidation"],
                    characteristics: "Products have less free energy than reactants"
                },
                endergonic: {
                    definition: "Energy-requiring reactions (non-spontaneous)",
                    freeEnergy: "ΔG > 0 (positive)",
                    examples: ["ATP synthesis", "Glucose synthesis", "Protein synthesis"],
                    characteristics: "Products have more free energy than reactants"
                },
                coupling: {
                    principle: "Exergonic reaction drives endergonic reaction",
                    requirement: "Total ΔG must be negative",
                    calculation: "ΔG(total) = ΔG(exergonic) + ΔG(endergonic) < 0"
                }
            },
            atpRole: {
                energyCurrency: "Universal energy carrier in cells",
                hydrolysis: {
                    reaction: "ATP + H₂O → ADP + Pi",
                    freeEnergy: "ΔG = -7.3 kcal/mol (standard conditions)",
                    cellular: "ΔG ≈ -12 kcal/mol (actual cellular conditions)",
                    description: "Energy released when terminal phosphate bond broken"
                },
                synthesis: {
                    reaction: "ADP + Pi + energy → ATP + H₂O",
                    freeEnergy: "ΔG = +7.3 kcal/mol",
                    sources: ["Cellular respiration", "Photosynthesis", "Fermentation"]
                },
                intermediateRole: "Captures energy from exergonic reactions, transfers to endergonic reactions"
            },
            mechanisms: {
                directPhosphorylation: {
                    description: "ATP phosphorylates substrate, making it more reactive",
                    example: {
                        reaction: "Glucose + Pi → Glucose-6-phosphate (ΔG = +3.3 kcal/mol)",
                        coupling: "Glucose + ATP → Glucose-6-phosphate + ADP (ΔG = -4.0 kcal/mol)",
                        result: "Unfavorable reaction made favorable by coupling to ATP hydrolysis",
                        enzyme: "Hexokinase"
                    },
                    advantage: "Glucose-6-phosphate trapped in cell, activated for metabolism"
                },
                conformationalChange: {
                    description: "ATP hydrolysis drives protein shape changes",
                    examples: [
                        {
                            process: "Muscle contraction",
                            mechanism: "ATP binding and hydrolysis causes myosin head to move",
                            cycle: "Bind → Power stroke → Release → Reset (requires ATP)"
                        },
                        {
                            process: "Molecular motors",
                            examples: ["Kinesin (cargo transport)", "Dynein (flagella movement)"],
                            mechanism: "ATP hydrolysis drives conformational changes for movement"
                        }
                    ]
                },
                activeTransport: {
                    description: "ATP hydrolysis drives transport against concentration gradient",
                    example: {
                        name: "Sodium-Potassium Pump",
                        reaction: "3 Na⁺ (in) + 2 K⁺ (out) + ATP → 3 Na⁺ (out) + 2 K⁺ (in) + ADP + Pi",
                        steps: [
                            "ATP binds, 3 Na⁺ bind from inside",
                            "ATP hydrolyzed, protein phosphorylated, changes shape",
                            "3 Na⁺ released outside, 2 K⁺ bind from outside",
                            "Phosphate released, protein returns to original shape",
                            "2 K⁺ released inside"
                        ],
                        importance: "Maintains ion gradients, nerve function, cell volume"
                    }
                },
                biosynthesis: {
                    description: "ATP provides energy for building complex molecules",
                    examples: [
                        {
                            process: "Protein synthesis",
                            energyUse: "ATP activates amino acids, GTP drives ribosome movement",
                            cost: "~4 ATP equivalents per peptide bond"
                        },
                        {
                            process: "DNA replication",
                            energyUse: "dNTPs (with 3 phosphates like ATP) provide energy",
                            mechanism: "Hydrolysis of 2 phosphates drives polymerization"
                        },
                        {
                            process: "Polysaccharide synthesis",
                            example: "UDP-glucose used to build glycogen",
                            energySource: "UTP (similar to ATP)"
                        }
                    ]
                }
            },
            examples: {
                glycolysis: {
                    step: "Glucose phosphorylation",
                    endergonic: "Glucose + Pi → Glucose-6-P (ΔG = +3.3 kcal/mol)",
                    exergonic: "ATP → ADP + Pi (ΔG = -7.3 kcal/mol)",
                    coupled: "Glucose + ATP → Glucose-6-P + ADP (ΔG = -4.0 kcal/mol)",
                    result: "Unfavorable reaction made favorable"
                },
                gluconeogenesis: {
                    description: "Building glucose from non-carbohydrate sources",
                    problem: "Reverse of glycolysis thermodynamically unfavorable",
                    solution: "Uses 6 ATP (equivalents) per glucose to drive synthesis",
                    location: "Liver, kidney",
                    importance: "Maintains blood glucose during fasting"
                },
                nitrogenFixation: {
                    reaction: "N₂ → 2 NH₃",
                    energy: "Requires ~16 ATP per N₂ fixed",
                    organism: "Nitrogen-fixing bacteria",
                    importance: "Makes atmospheric nitrogen available to plants"
                }
            },
            efficiency: {
                coupling: "Not 100% efficient - some energy always lost as heat",
                secondLaw: "Entropy (disorder) always increases",
                heatProduction: "Explains why organisms produce heat",
                atpTurnover: "Each ATP recycled hundreds of times per day"
            },
            regulation: {
                energyCharge: {
                    definition: "Ratio of [ATP] + 0.5[ADP] to total adenine nucleotides",
                    high: "High energy status, slow ATP-producing pathways",
                    low: "Low energy status, speed up ATP-producing pathways"
                },
                ampk: {
                    name: "AMP-activated protein kinase",
                    activation: "Activated when AMP levels rise (low energy)",
                    effects: [
                        "Activates catabolic pathways (ATP production)",
                        "Inhibits anabolic pathways (ATP consumption)",
                        "Increases glucose uptake",
                        "Increases fatty acid oxidation"
                    ],
                    importance: "Master regulator of cellular energy balance"
                }
            },
            category: 'bioenergetics'
        };
    }

    handleMetabolicPathways(problem) {
        return {
            topic: "Metabolic Pathways and Integration",
            overview: {
                definition: "Series of enzyme-catalyzed reactions transforming molecules",
                metabolism: "Sum of all chemical reactions in organism",
                categories: ["Catabolic pathways", "Anabolic pathways", "Amphibolic pathways"]
            },
            types: {
                catabolic: {
                    description: "Break down complex molecules, release energy",
                    characteristics: [
                        "Exergonic (release energy)",
                        "Convergent (many inputs → few outputs)",
                        "Oxidative (remove electrons)",
                        "Produce ATP"
                    ],
                    examples: [
                        {
                            name: "Cellular respiration",
                            substrate: "Glucose",
                            products: "CO₂, H₂O, ATP",
                            stages: "Glycolysis, Krebs cycle, electron transport"
                        },
                        {
                            name: "β-Oxidation",
                            substrate: "Fatty acids",
                            products: "Acetyl-CoA, NADH, FADH₂",
                            location: "Mitochondria"
                        },
                        {
                            name: "Protein catabolism",
                            substrate: "Proteins",
                            products: "Amino acids → various intermediates",
                            note: "Not preferred, used in starvation"
                        }
                    ]
                },
                anabolic: {
                    description: "Build complex molecules from simple ones, require energy",
                    characteristics: [
                        "Endergonic (require energy)",
                        "Divergent (few inputs → many outputs)",
                        "Reductive (add electrons)",
                        "Consume ATP"
                    ],
                    examples: [
                        {
                            name: "Photosynthesis",
                            substrates: "CO₂, H₂O",
                            product: "Glucose",
                            energySource: "Light"
                        },
                        {
                            name: "Protein synthesis",
                            substrates: "Amino acids",
                            product: "Proteins",
                            energySource: "ATP, GTP"
                        },
                        {
                            name: "Fatty acid synthesis",
                            substrate: "Acetyl-CoA",
                            product: "Fatty acids",
                            location: "Cytoplasm",
                            energySource: "ATP, NADPH"
                        },
                        {
                            name: "Gluconeogenesis",
                            substrates: "Lactate, amino acids, glycerol",
                            product: "Glucose",
                            energySource: "6 ATP per glucose"
                        }
                    ]
                },
                amphibolic: {
                    description: "Serve both catabolic and anabolic functions",
                    characteristics: "Intermediates used for both energy and biosynthesis",
                    mainExample: {
                        name: "Krebs Cycle",
                        catabolic: "Oxidizes acetyl-CoA, produces NADH, FADH₂",
                        anabolic: "Provides precursors for biosynthesis",
                        intermediatesUsed: [
                            "Citrate → fatty acid synthesis",
                            "α-Ketoglutarate → glutamate, glutamine",
                            "Succinyl-CoA → heme synthesis",
                            "Oxaloacetate → aspartate, nucleotides, gluconeogenesis"
                        ]
                    }
                }
            },
            majorPathways: {
                carbohydrateMetabolism: {
                    glycolysis: "Glucose → Pyruvate (ATP production)",
                    gluconeogenesis: "Non-carbohydrate sources → Glucose (glucose synthesis)",
                    glycogenesis: "Glucose → Glycogen (storage)",
                    glycogenolysis: "Glycogen → Glucose (mobilization)",
                    pentosePhosphatePathway: "Glucose-6-P → NADPH + ribose-5-P (for nucleotides)"
                },
                lipidMetabolism: {
                    betaOxidation: "Fatty acids → Acetyl-CoA (energy extraction)",
                    fattyAcidSynthesis: "Acetyl-CoA → Fatty acids (storage)",
                    ketogenesis: "Acetyl-CoA → Ketone bodies (alternative fuel)",
                    lipogenesis: "Building triglycerides from glycerol and fatty acids"
                },
                proteinMetabolism: {
                    proteinSynthesis: "Amino acids → Proteins (building)",
                    proteinDegradation: "Proteins → Amino acids (breakdown)",
                    deamination: "Amino acids → NH₃ + carbon skeleton",
                    ureaCreation: "NH₃ → Urea (nitrogen disposal)",
                    transamination: "Transfer amino groups between molecules"
                },
                nucleotideMetabolism: {
                    synthesis: "Building purines and pyrimidines",
                    salvage: "Recycling bases from degraded nucleotides",
                    degradation: "Breaking down nucleotides"
                }
            },
            integration: {
                centralHub: {
                    name: "Acetyl-CoA",
                    description: "Common intermediate for carbs, fats, proteins",
                    sources: [
                        "Glucose → Pyruvate → Acetyl-CoA",
                        "Fatty acids → Acetyl-CoA (β-oxidation)",
                        "Some amino acids → Acetyl-CoA"
                    ],
                    fates: [
                        "Krebs cycle (energy)",
                        "Fatty acid synthesis",
                        "Ketone body production",
                        "Cholesterol synthesis"
                    ]
                },
                interconnections: {
                    carbsToFats: "Excess glucose → acetyl-CoA → fatty acids (storage)",
                    fatsToEnergy: "Fatty acids → acetyl-CoA → Krebs cycle → ATP",
                    proteinsToEnergy: "Amino acids → various intermediates → ATP",
                    proteinsToGlucose: "Glucogenic amino acids → glucose (gluconeogenesis)",
                    cannotMake: "Fatty acids cannot be converted to glucose (in animals)"
                }
            },
            regulation: {
                levels: [
                    {
                        level: "Enzyme regulation",
                        mechanisms: [
                            "Allosteric regulation (activators and inhibitors)",
                            "Covalent modification (phosphorylation)",
                            "Feedback inhibition (end product inhibits pathway)"
                        ]
                    },
                    {
                        level: "Genetic regulation",
                        mechanisms: [
                            "Transcriptional control (amount of enzyme made)",
                            "Post-transcriptional control (mRNA stability)"
                        ]
                    },
                    {
                        level: "Compartmentation",
                        description: "Separating pathways in different organelles",
                        examples: [
                            "Fatty acid synthesis (cytoplasm) vs oxidation (mitochondria)",
                            "Glycolysis (cytoplasm) vs Krebs cycle (mitochondrial matrix)"
                        ]
                    },
                    {
                        level: "Hormonal regulation",
                        examples: [
                            "Insulin (promotes anabolism, glucose uptake, storage)",
                            "Glucagon (promotes catabolism, glucose release)",
                            "Epinephrine (mobilizes energy stores)"
                        ]
                    }
                ],
                feedbackInhibition: {
                    description: "End product inhibits first enzyme in pathway",
                    advantages: [
                        "Prevents overproduction",
                        "Conserves resources",
                        "Responds quickly to needs"
                    ],
                    example: "ATP inhibits phosphofructokinase (glycolysis)"
                },
                feedforwardActivation: {
                    description: "Early product activates later enzyme",
                    example: "Fructose-1,6-bisphosphate activates pyruvate kinase",
                    purpose: "Commits pathway once started"
                }
            },
            metabolicStates: {
                fedState: {
                    timing: "After eating",
                    dominant: "Anabolic pathways",
                    hormones: "High insulin, low glucagon",
                    processes: [
                        "Glucose uptake and storage (glycogenesis)",
                        "Fat synthesis and storage (lipogenesis)",
                        "Protein synthesis",
                        "Glycolysis active"
                    ],
                    goal: "Store excess nutrients"
                },
                fastingState: {
                    timing: "Between meals (4-12 hours)",
                    dominant: "Catabolic pathways",
                    hormones: "Low insulin, high glucagon",
                    processes: [
                        "Glycogen breakdown (glycogenolysis)",
                        "Gluconeogenesis begins",
                        "Fat mobilization increases",
                        "Protein breakdown minimal"
                    ],
                    goal: "Maintain blood glucose"
                },
                starvation: {
                    timing: "Extended fasting (>24 hours)",
                    dominant: "Maximum catabolism",
                    hormones: "Very low insulin, high glucagon and cortisol",
                    processes: [
                        "Extensive fat breakdown",
                        "Ketone body production (ketogenesis)",
                        "Protein breakdown (muscle wasting)",
                        "Gluconeogenesis from amino acids",
                        "Brain adapts to use ketones"
                    ],
                    goal: "Preserve glucose for brain, maximize fat use"
                }
            },
            keyControlPoints: {
                glycolysis: {
                    enzyme: "Phosphofructokinase (PFK)",
                    regulation: "Inhibited by ATP, citrate; Activated by AMP, ADP",
                    significance: "Commits glucose to breakdown"
                },
                gluconeogenesis: {
                    enzyme: "Fructose-1,6-bisphosphatase",
                    regulation: "Inhibited by AMP, fructose-2,6-bisphosphate",
                    significance: "Opposes glycolysis, prevents futile cycling"
                },
                krebsCycle: {
                    enzyme: "Isocitrate dehydrogenase",
                    regulation: "Inhibited by ATP, NADH; Activated by ADP, Ca²⁺",
                    significance: "Controls cycle rate"
                },
                fattyAcidSynthesis: {
                    enzyme: "Acetyl-CoA carboxylase",
                    regulation: "Inhibited by palmitoyl-CoA (product); Activated by citrate",
                    significance: "Commits to fat synthesis"
                },
                fattyAcidOxidation: {
                    enzyme: "Carnitine palmitoyltransferase I",
                    regulation: "Inhibited by malonyl-CoA (from fat synthesis pathway)",
                    significance: "Prevents simultaneous synthesis and breakdown"
                }
            },
            coordinatedRegulation: {
                reciprocalRegulation: {
                    description: "Opposing pathways regulated oppositely",
                    examples: [
                        "Glycolysis activated when gluconeogenesis inhibited",
                        "Fat synthesis active when fat breakdown inactive"
                    ],
                    mechanism: "Same signals activate one pathway, inhibit opposite",
                    purpose: "Prevents futile cycling (wasting ATP)"
                },
                allostericRegulation: {
                    description: "Molecules bind away from active site, change enzyme shape",
                    advantages: [
                        "Very fast response (milliseconds)",
                        "Reversible",
                        "Sensitive to metabolite levels"
                    ],
                    examples: [
                        "ATP inhibits PFK (glycolysis)",
                        "AMP activates PFK"
                    ]
                },
                covalentModification: {
                    description: "Adding/removing groups (usually phosphate)",
                    speed: "Fast (seconds to minutes)",
                    mechanism: "Kinases add phosphate, phosphatases remove",
                    examples: [
                        "Hormone-sensitive lipase (activated by phosphorylation)",
                        "Glycogen phosphorylase (activated by phosphorylation)"
                    ]
                }
            },
            clinicalRelevance: {
                diabetes: {
                    type1: "Lack of insulin, cannot store glucose, hyperglycemia",
                    type2: "Insulin resistance, impaired glucose uptake",
                    metabolicEffects: "Excessive gluconeogenesis, lipolysis, ketogenesis"
                },
                obesity: {
                    imbalance: "Energy intake > energy expenditure",
                    metabolic: "Excess stored as fat (lipogenesis > lipolysis)",
                    complications: "Insulin resistance, metabolic syndrome"
                },
                inbornErrors: {
                    description: "Genetic defects in metabolic enzymes",
                    examples: [
                        "Phenylketonuria (PKU) - cannot metabolize phenylalanine",
                        "Glycogen storage diseases - impaired glycogen metabolism",
                        "Maple syrup urine disease - branched-chain amino acid metabolism"
                    ],
                    treatment: "Dietary management, enzyme replacement"
                }
            },
            category: 'metabolism'
        };
    }

    /**handleThermodynamics(problem) {
        return {
            topic: "Biological Thermodynamics and Bioenergetics",
            overview: {
                definition: "Study of energy transformations in living systems",
                importance: "Explains why reactions occur and how energy flows",
                scope: "Applies laws of thermodynamics to biological processes"
            },
            lawsOfThermodynamics: {
                firstLaw: {
                    name: "First Law of Thermodynamics (Law of Energy Conservation)",
                    statement: "Energy cannot be created or destroyed, only transformed",
                    formula: "ΔE = Q - W (change in energy = heat absorbed - work done)",
                    biologicalImplication: "Total energy in universe is constant",
                    examples: [
                        "Light energy → Chemical energy (photosynthesis)",
                        "Chemical energy → Kinetic energy (muscle contraction)",
                        "Chemical energy → Heat (metabolism always produces heat)"
                    ],
                    importance: "Living organisms must obtain energy from environment"
                },
                secondLaw: {
                    name: "Second Law of Thermodynamics (Law of Entropy)",
                    statement: "Entropy (disorder) of universe always increases",
                    formula: "ΔS(universe) > 0 for spontaneous processes",
                    biologicalImplication: "Living systems maintain order by increasing environmental entropy",
                    paradox: {
                        apparent: "Living things are highly ordered (low entropy)",
                        resolution: "Organisms increase environmental entropy more than they decrease their own",
                        mechanism: "Energy transformations release heat (increases entropy)"
                    },
                    examples: [
                        "Metabolism releases heat to environment",
                        "Protein folding decreases protein entropy but releases heat",
                        "Ecosystems maintain order by degrading high-energy molecules"
                    ],
                    consequence: "All energy transformations are inefficient (produce heat)"
                }
            },
            freeEnergy: {
                gibbsFreeEnergy: {
                    symbol: "G (or ΔG for change)",
                    definition: "Energy available to do work at constant temperature and pressure",
                    formula: "ΔG = ΔH - TΔS",
                    components: {
                        deltaH: "Enthalpy change (heat content)",
                        T: "Absolute temperature (Kelvin)",
                        deltaS: "Entropy change (disorder)"
                    }
                },
                spontaneity: {
                    exergonic: {
                        definition: "Reactions that release free energy (spontaneous)",
                        condition: "ΔG < 0 (negative)",
                        characteristics: "Products have less free energy than reactants",
                        examples: [
                            "ATP hydrolysis (ΔG = -7.3 kcal/mol)",
                            "Glucose oxidation (ΔG = -686 kcal/mol)",
                            "NADH oxidation"
                        ]
                    },
                    endergonic: {
                        definition: "Reactions that require free energy (non-spontaneous)",
                        condition: "ΔG > 0 (positive)",
                        characteristics: "Products have more free energy than reactants",
                        examples: [
                            "ATP synthesis (ΔG = +7.3 kcal/mol)",
                            "Glucose synthesis (ΔG = +686 kcal/mol)",
                            "Protein synthesis"
                        ],
                        inCells: "Coupled to exergonic reactions to proceed"
                    },
                    equilibrium: {
                        condition: "ΔG = 0",
                        meaning: "No net change, forward and reverse rates equal",
                        cellularContext: "Most metabolic reactions not at equilibrium (maintained away)"
                    }
                },
                standardVsActual: {
                    standardConditions: {
                        symbol: "ΔG°'",
                        conditions: [
                            "25°C (298 K)",
                            "1 M concentrations",
                            "pH 7.0",
                            "1 atm pressure"
                        ],
                        use: "Comparison between reactions"
                    },
                    actualConditions: {
                        symbol: "ΔG",
                        formula: "ΔG = ΔG°' + RT ln(Q)",
                        Q: "Reaction quotient ([products]/[reactants])",
                        cellular: "Different from standard, affected by concentrations",
                        importance: "Actual ΔG determines if reaction occurs in cell"
                    }
                }
            },
            energyConcepts: {
                activationEnergy: {
                    definition: "Energy required to start a reaction",
                    symbol: "Ea",
                    importance: "Determines reaction rate (not spontaneity)",
                    enzymeRole: "Enzymes lower activation energy, speed up reactions",
                    note: "Enzymes don't change ΔG, only rate"
                },
                equilibrium: {
                        condition: "ΔG = 0",
                        meaning: "No net change, forward and reverse rates equal",
                        cellularContext: "Most metabolic reactions not at equilibrium (maintained away)"
                    }
                },
                standardVsActual: {
                    standardConditions: {
                        symbol: "ΔG°'",
                        conditions: [
                            "25°C (298 K)",
                            "1 M concentrations",
                            "pH 7.0",
                            "1 atm pressure"
                        ],
                        use: "Comparison between reactions"
                    },
                    actualConditions: {
                        symbol: "ΔG",
                        formula: "ΔG = ΔG°' + RT ln(Q)",
                        Q: "Reaction quotient ([products]/[reactants])",
                        cellular: "Different from standard, affected by concentrations",
                        importance: "Actual ΔG determines if reaction occurs in cell"
                    }
                }
            },
            energyConcepts: {
                activationEnergy: {
                    definition: "Energy required to start a reaction",
                    symbol: "Ea",
                    importance: "Determines reaction rate (not spontaneity)",
                    enzymeRole: "Enzymes lower activation energy, speed up reactions",
                    note: "Enzymes don't change ΔG, only rate"
                },
                equilibrium: {
                    definition: "State where forward and reverse rates are equal",
                    relationship: "ΔG°' = -RT ln(Keq)",
                    Keq: "Equilibrium constant",
                    interpretation: [
                        "Large Keq (>1): Products favored, ΔG°' negative",
                        "Small Keq (<1): Reactants favored, ΔG°' positive"
                    ]
                },
                coupledReactions: {
                    principle: "Unfavorable reaction driven by favorable reaction",
                    requirement: "Total ΔG must be negative",
                    mechanism: "Common intermediate (often ATP)",
                    example: {
                        reaction1: "ATP → ADP + Pi (ΔG = -7.3 kcal/mol)",
                        reaction2: "Glucose + Pi → G6P (ΔG = +3.3 kcal/mol)",
                        coupled: "Glucose + ATP → G6P + ADP (ΔG = -4.0 kcal/mol)",
                        result: "Unfavorable reaction made favorable"
                    }
                }
            },
            biologicalApplications: {
                metabolism: {
                    catabolic: "Breaking down molecules, ΔG negative, releases energy",
                    anabolic: "Building molecules, ΔG positive, requires energy",
                    coupling: "Energy from catabolism drives anabolism via ATP"
                },
                transportProcesses: {
                    passiveDiffusion: {
                        description: "Down concentration gradient",
                        freeEnergy: "ΔG negative (spontaneous)",
                        example: "O₂ diffusion into cells"
                    },
                    activeTransport: {
                        description: "Against concentration gradient",
                        freeEnergy: "ΔG positive (requires energy)",
                        energySource: "ATP hydrolysis",
                        example: "Na⁺/K⁺ pump"
                    }
                },
                molecularMotors: {
                    description: "Proteins that convert chemical energy to mechanical work",
                    examples: [
                        "Myosin (muscle contraction)",
                        "Kinesin (cargo transport)",
                        "ATP synthase (rotary motor)"
                    ],
                    energySource: "ATP hydrolysis",
                    efficiency: "~50% (relatively efficient for molecular machines)"
                }
            },
            efficiency: {
                definition: "Useful work done / total energy input",
                cellularRespiration: {
                    glucose: "686 kcal/mol available",
                    atpCaptured: "~32 ATP × 7.3 kcal/mol = ~234 kcal/mol",
                    efficiency: "~234/686 = ~34%",
                    remaining: "~66% released as heat"
                },
                photosynthesis: {
                    lightEnergy: "Photons absorbed",
                    glucoseStored: "~3-6% of light energy stored in glucose",
                    remaining: "~94-97% lost as heat and fluorescence"
                },
                comparison: {
                    gasoline: "Car engine ~20-25% efficient",
                    biology: "Cellular respiration ~34% efficient",
                    note: "Biological systems quite efficient for molecular-scale machines"
                }
            },
            heatProduction: {
                inevitability: "All energy transformations produce heat (2nd law)",
                sources: [
                    "Inefficiency of ATP synthesis",
                    "Proton leak across membranes",
                    "Entropy increase in reactions"
                ],
                benefits: [
                    "Maintains body temperature",
                    "Enables endothermy (warm-blooded animals)",
                    "Brown fat produces heat intentionally"
                ],
                regulation: "Thermoregulation balances heat production and loss"
            },
            livingSystemsAndEntropy: {
                localDecrease: "Organisms decrease their own entropy (become more ordered)",
                globalIncrease: "Organisms increase environmental entropy more",
                mechanism: [
                    "Consume low-entropy nutrients (organized molecules)",
                    "Produce high-entropy waste (CO₂, heat, H₂O)",
                    "Net entropy of universe increases"
                ],
                openSystems: "Living things are open systems (exchange energy/matter with environment)",
                steadyState: "Maintain constant internal state by continuous energy input"
            },
            category: 'bioenergetics'
        };
    }
    */

    // CONTENT GENERATION METHODS

    generateEnergyContent(problem, content) {
        const contentSections = [];

        // Generate overview section
        contentSections.push(this.generateOverviewSection(problem, content));

        // Generate detailed content based on topic type
        if (content.structure) {
            contentSections.push(this.generateStructureContent(content));
        }

        if (content.energetics) {
            contentSections.push(this.generateEnergeticsContent(content));
        }

        if (content.phases || content.steps || content.stages) {
            contentSections.push(this.generateStagesContent(content));
        }

        if (content.components) {
            contentSections.push(this.generateComponentsContent(content));
        }

        if (content.energyAccounting) {
            contentSections.push(this.generateEnergyAccountingContent(content));
        }

        // Add comparisons if available
        if (content.comparisons || content.comparison) {
            contentSections.push(this.generateComparisonsSection(content));
        }

        // Add examples section
        if (content.examples) {
            contentSections.push(this.generateExamplesSection(content));
        }

        return contentSections;
    }

    generateOverviewSection(problem, content) {
        return {
            sectionType: 'overview',
            title: content.topic || problem.originalTopic,
            category: content.category,
            description: content.overview?.definition || content.definition || `Overview of ${content.topic}`,
            keyPoints: this.extractKeyPoints(content),
            relevance: this.getTopicRelevance(problem.type)
        };
    }

    generateStructureContent(content) {
        return {
            sectionType: 'structure',
            title: 'Molecular Structure',
            structure: content.structure
        };
    }

    generateEnergeticsContent(content) {
        return {
            sectionType: 'energetics',
            title: 'Energy Relationships',
            energetics: content.energetics
        };
    }

    generateStagesContent(content) {
        return {
            sectionType: 'stages',
            title: 'Process Stages',
            stages: content.phases || content.steps || content.stages || content.cycleSteps
        };
    }

    generateComponentsContent(content) {
        return {
            sectionType: 'components',
            title: 'Key Components',
            components: content.components
        };
    }

    generateEnergyAccountingContent(content) {
        return {
            sectionType: 'energy_accounting',
            title: 'Energy Accounting',
            accounting: content.energyAccounting || content.completeEnergyAccounting
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

    generateExamplesSection(content) {
        return {
            sectionType: 'examples',
            title: 'Examples and Applications',
            examples: content.examples,
            applications: content.applications
        };
    }

    // HELPER METHODS

    extractKeyPoints(content) {
        const keyPoints = [];

        if (content.overview?.keyPoints) keyPoints.push(...content.overview.keyPoints);
        if (content.concepts) keyPoints.push(...content.concepts);
        if (content.keyDefinitions) keyPoints.push(...Object.keys(content.keyDefinitions));
        if (content.mainCategories) keyPoints.push(...content.mainCategories);

        return keyPoints.slice(0, 5); // Limit to top 5 key points
    }

    getTopicRelevance(topicType) {
        const relevance = {
            atp: "ATP is the universal energy currency of all cells",
            glycolysis: "First step in energy extraction from glucose",
            krebs_cycle: "Central hub of cellular metabolism",
            electron_transport: "Produces majority of cellular ATP",
            fermentation: "Allows energy production without oxygen",
            light_reactions: "Captures light energy for life on Earth",
            calvin_cycle: "Fixes atmospheric CO₂ into organic molecules",
            cellular_respiration: "Primary energy-producing pathway in most organisms",
            photosynthesis: "Basis of most food chains and source of atmospheric oxygen",
            energy_coupling: "Makes thermodynamically unfavorable reactions possible",
            metabolic_pathways: "Integrates all cellular chemistry",
            thermodynamics: "Fundamental principles governing all biological energy transformations"
        };

        return relevance[topicType] || "Important biological energy concept";
    }

    // DIAGRAM GENERATION

    generateEnergyDiagramData() {
        if (!this.currentContent) return;

        const { type } = this.currentProblem;

        this.diagramData = {
            type: type,
            diagrams: this.getRelevantEnergyDiagrams(type),
            placeholder: true,
            note: "Diagram generation will be implemented with actual energy pathway diagrams"
        };
    }

    getRelevantEnergyDiagrams(topicType) {
        const diagramMap = {
            atp: ["atp_structure", "atp_hydrolysis", "atp_cycle", "energy_coupling_diagram"],
            glycolysis: ["glycolysis_overview", "glycolysis_steps", "energy_investment_payoff"],
            krebs_cycle: ["krebs_cycle_diagram", "pyruvate_oxidation", "cycle_intermediates"],
            electron_transport: ["etc_complexes", "chemiosmosis", "atp_synthase", "proton_gradient"],
            fermentation: ["lactic_acid_fermentation", "alcoholic_fermentation", "fermentation_comparison"],
            light_reactions: ["z_scheme", "photosystems", "thylakoid_membrane", "photophosphorylation"],
            calvin_cycle: ["calvin_cycle_phases", "carbon_fixation", "rubisco_reaction"],
            cellular_respiration: ["respiration_overview", "all_stages", "energy_summary"],
            photosynthesis: ["photosynthesis_overview", "chloroplast_structure", "light_and_dark_reactions"],
            energy_coupling: ["coupled_reactions", "atp_intermediate", "thermodynamic_coupling"],
            metabolic_pathways: ["metabolic_map", "pathway_integration", "regulation_points"],
            thermodynamics: ["free_energy_diagram", "entropy_and_life", "energy_transformations"]
        };

        return diagramMap[topicType] || [];
    }

    // WORKBOOK GENERATION

    generateEnergyWorkbook() {
        if (!this.currentContent || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createEnergyProblemSection(),
            this.createContentOverviewSection(),
            this.createDetailedContentSection(),
            this.createEnergyAccountingSection(),
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
            title: `Energy in Living Systems: ${this.currentContent.topic}`,
            type: 'energy_workbook',
            created: new Date().toISOString(),
            sections: []
        };
    }

    createEnergyProblemSection() {
        if (!this.currentProblem) return null;

        return {
            title: 'Topic Information',
            type: 'problem',
            data: [
                ['Topic Type', this.currentProblem.type],
                ['Main Topic', this.currentProblem.originalTopic],
                ['Sub-Topic', this.currentProblem.subTopic || 'General'],
                ['Category', this.energyTopics[this.currentProblem.type]?.category || 'N/A']
            ]
        };
    }

    createContentOverviewSection() {
        if (!this.currentContent) return null;

        const overviewData = [
            ['Topic', this.currentContent.topic],
            ['Category', this.currentContent.category]
        ];

        if (this.currentContent.overview) {
            if (this.currentContent.overview.definition) {
                overviewData.push(['Definition', this.currentContent.overview.definition]);
            }
            if (this.currentContent.overview.location) {
                overviewData.push(['Location', this.currentContent.overview.location]);
            }
            if (this.currentContent.overview.purpose) {
                overviewData.push(['Purpose', this.currentContent.overview.purpose]);
            }
        }

        if (this.currentContent.overallEquation) {
            if (this.currentContent.overallEquation.formula) {
                overviewData.push(['Equation', this.formatBiologicalTerm(this.currentContent.overallEquation.formula)]);
            }
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

        // Structure
        if (this.currentContent.structure) {
            contentData.push(['STRUCTURE', '']);
            this.addNestedContent(contentData, this.currentContent.structure, 1);
        }

        // Energetics
        if (this.currentContent.energetics) {
            contentData.push(['', '']);
            contentData.push(['ENERGETICS', '']);
            this.addNestedContent(contentData, this.currentContent.energetics, 1);
        }

        // Stages/Phases/Steps
        if (this.currentContent.phases) {
            contentData.push(['', '']);
            contentData.push(['PHASES', '']);
            Object.entries(this.currentContent.phases).forEach(([phaseName, phase]) => {
                contentData.push([phaseName, phase.description || '']);
                if (phase.steps) {
                    phase.steps.forEach((step, idx) => {
                        contentData.push([`  Step ${idx + 1}`, step.reaction || step.description || '']);
                    });
                }
            });
        }

        if (this.currentContent.stages) {
            contentData.push(['', '']);
            contentData.push(['STAGES', '']);
            Object.entries(this.currentContent.stages).forEach(([stageName, stage]) => {
                contentData.push([stageName, stage.name || stageName]);
                if (stage.location) contentData.push(['  Location', stage.location]);
                if (stage.output) contentData.push(['  Output', stage.output]);
                if (stage.description) contentData.push(['  Description', stage.description]);
            });
        }

        if (this.currentContent.cycleSteps) {
            contentData.push(['', '']);
            contentData.push(['CYCLE STEPS', '']);
            this.currentContent.cycleSteps.forEach((step) => {
                contentData.push([`Step ${step.step}`, step.name]);
                contentData.push(['  Reaction', this.formatBiologicalTerm(step.reaction)]);
                contentData.push(['  Enzyme', step.enzyme]);
                if (step.products) contentData.push(['  Products', step.products]);
            });
        }

        // Components
        if (this.currentContent.components) {
            contentData.push(['', '']);
            contentData.push(['COMPONENTS', '']);
            this.addNestedContent(contentData, this.currentContent.components, 1);
        }

        return contentData.length > 0 ? {
            title: 'Detailed Content',
            type: 'detailed_content',
            data: contentData
        } : null;
    }

    createEnergyAccountingSection() {
        const accounting = this.currentContent?.energyAccounting || this.currentContent?.completeEnergyAccounting;
        if (!accounting) return null;

        const data = [['Energy Accounting', '']];
        this.addNestedContent(data, accounting, 0);

        return {
            title: 'Energy Accounting',
            type: 'energy_accounting',
            data: data
        };
    }

    createComparisonsSection() {
        const comparisons = this.currentContent?.comparisons || this.currentContent?.comparison;
        if (!comparisons) return null;

        const comparisonData = [];

        Object.entries(comparisons).forEach(([comparisonName, comparisonContent]) => {
            comparisonData.push([comparisonName.toUpperCase(), '']);
            
            if (typeof comparisonContent === 'object') {
                // Handle comparison tables
                if (comparisonContent.criteria) {
                    comparisonData.push(['Criteria', comparisonContent.criteria.join(' | ')]);
                    Object.entries(comparisonContent).forEach(([key, value]) => {
                        if (key !== 'criteria' && Array.isArray(value)) {
                            comparisonData.push([key, value.join(' | ')]);
                        }
                    });
                } else {
                    // Handle nested comparisons
                    Object.entries(comparisonContent).forEach(([key, value]) => {
                        if (typeof value === 'string') {
                            comparisonData.push([key, value]);
                        } else if (Array.isArray(value)) {
                            comparisonData.push([key, value.join(', ')]);
                        }
                    });
                }
            }
            
            comparisonData.push(['', '']); // Spacing
        });

        return {
            title: 'Comparisons and Contrasts',
            type: 'comparisons',
            data: comparisonData
        };
    }

    createExamplesApplicationsSection() {
        if (!this.currentContent.examples && !this.currentContent.applications) return null;

        const data = [];

        if (this.currentContent.examples) {
            data.push(['EXAMPLES', '']);
            if (Array.isArray(this.currentContent.examples)) {
                this.currentContent.examples.forEach(example => {
                    if (typeof example === 'string') {
                        data.push(['•', example]);
                    } else if (typeof example === 'object') {
                        data.push([example.name || example.process || 'Example', '']);
                        Object.entries(example).forEach(([key, value]) => {
                            if (key !== 'name' && key !== 'process') {
                                data.push([`  ${key}`, Array.isArray(value) ? value.join(', ') : value]);
                            }
                        });
                    }
                });
            }
            data.push(['', '']); // Spacing
        }

        if (this.currentContent.applications) {
            data.push(['APPLICATIONS', '']);
            if (Array.isArray(this.currentContent.applications)) {
                this.currentContent.applications.forEach(app => {
                    data.push(['•', app]);
                });
            } else if (typeof this.currentContent.applications === 'object') {
                Object.entries(this.currentContent.applications).forEach(([key, value]) => {
                    data.push([key, '']);
                    if (typeof value === 'object') {
                        Object.entries(value).forEach(([subKey, subValue]) => {
                            data.push([`  ${subKey}`, Array.isArray(subValue) ? subValue.join(', ') : subValue]);
                        });
                    } else {
                        data.push(['  ', value]);
                    }
                });
            }
        }

        return data.length > 0 ? {
            title: 'Examples and Applications',
            type: 'examples_applications',
            data: data
        } : null;
    }

    createMisconceptionsSection() {
        if (!this.includeCommonMisconceptions) return null;

        const misconceptions = this.commonMisconceptions[this.currentProblem.type];
        if (!misconceptions) return null;

        const data = [['Common Misconception', 'Clarification']];

        Object.entries(misconceptions).forEach(([category, miscList]) => {
            data.push(['', '']); // Spacing
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

        if (lesson.keyDefinitions) {
            data.push(['', '']);
            data.push(['KEY DEFINITIONS', '']);
            Object.entries(lesson.keyDefinitions).forEach(([term, definition]) => {
                data.push([term, definition]);
            });
        }

        if (lesson.mainCategories) {
            data.push(['', '']);
            data.push(['MAIN CATEGORIES', '']);
            lesson.mainCategories.forEach(cat => {
                data.push(['•', cat]);
            });
        }

        if (lesson.applications) {
            data.push(['', '']);
            data.push(['APPLICATIONS', '']);
            lesson.applications.forEach(app => {
                data.push(['•', app]);
            });
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
            ['Diagram Status', this.diagramData.placeholder ? 'Placeholder (to be implemented)' : 'Available'],
            ['', ''],
            ['RELEVANT DIAGRAMS', '']
        ];

        if (this.diagramData.diagrams) {
            this.diagramData.diagrams.forEach(diagram => {
                data.push(['•', diagram]);
            });
        }

        if (this.diagramData.note) {
            data.push(['', '']);
            data.push(['Note', this.diagramData.note]);
        }

        return {
            title: 'Diagram References',
            type: 'diagrams',
            data: data
        };
    }

    // UTILITY METHODS

    addNestedContent(dataArray, content, indentLevel) {
        const indent = '  '.repeat(indentLevel);
        
        Object.entries(content).forEach(([key, value]) => {
            if (typeof value === 'string' || typeof value === 'number') {
                dataArray.push([indent + key, value]);
            } else if (Array.isArray(value)) {
                dataArray.push([indent + key, value.join('; ')]);
            } else if (typeof value === 'object' && value !== null) {
                dataArray.push([indent + key, '']);
                this.addNestedContent(dataArray, value, indentLevel + 1);
            }
        });
    }

    adaptEnergyLanguage(text, level) {
        if (!text) return '';

        const adaptations = {
            basic: {
                replacements: {
                    'ATP': 'energy molecule',
                    'NADH': 'energy carrier',
                    'mitochondria': 'powerhouse',
                    'oxidation': 'energy release',
                    'reduction': 'energy storage',
                    'phosphorylation': 'adding phosphate',
                    'chemiosmosis': 'proton flow making ATP'
                }
            },
            intermediate: {
                replacements: {
                    'ATP': 'ATP (energy currency)',
                    'NADH': 'NADH (electron carrier)',
                    'oxidation': 'oxidation (losing electrons)',
                    'reduction': 'reduction (gaining electrons)'
                }
            },
            detailed: {
                replacements: {
                    'ATP': 'adenosine triphosphate',
                    'NADH': 'reduced nicotinamide adenine dinucleotide',
                    'oxidation': 'oxidation (electron loss coupled to energy release)',
                    'reduction': 'reduction (electron gain coupled to energy storage)'
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

    generateEnergyAnalogy(concept) {
        const analogies = {
            atp: "Like rechargeable batteries that store and release energy",
            glycolysis: "Like breaking a log into kindling - first step in releasing energy",
            krebs_cycle: "Like a circular assembly line that completely processes fuel",
            electron_transport: "Like a waterfall where water drops drive turbines to make electricity",
            fermentation: "Like a backup generator when main power (oxygen) is out",
            light_reactions: "Like solar panels capturing sunlight to charge batteries",
            calvin_cycle: "Like a factory using charged batteries to build products from raw materials",
            chemiosmosis: "Like a dam where water pressure drives turbines",
            proton_gradient: "Like water held behind a dam - potential energy"
        };

        return analogies[concept] || "Performs energy transformation in the cell";
    }

    formatBiologicalTerm(term) {
        if (!term) return '';
        
        // Format biological terms with proper symbols
        const formatted = term
            .replace(/ATP/g, this.biologicalSymbols.ATP)
            .replace(/ADP/g, this.biologicalSymbols.ADP)
            .replace(/NADH/g, this.biologicalSymbols.NADH)
            .replace(/NAD\+/g, this.biologicalSymbols['NAD+'])
            .replace(/FADH2/g, this.biologicalSymbols.FADH2)
            .replace(/NADPH/g, this.biologicalSymbols.NADPH)
            .replace(/NADP\+/g, this.biologicalSymbols['NADP+'])
            .replace(/CO2/g, this.biologicalSymbols.CO2)
            .replace(/O2/g, this.biologicalSymbols.O2)
            .replace(/H2O/g, this.biologicalSymbols.H2O)
            .replace(/H\+/g, this.biologicalSymbols['H+'])
            .replace(/C6H12O6/g, this.biologicalSymbols.glucose)
            .replace(/->/g, this.biologicalSymbols.arrow)
            .replace(/<->/g, this.biologicalSymbols.doubleArrow);

        return formatted;
    }

    // ASSESSMENT AND LEARNING METHODS

    assessContentDifficulty() {
        if (!this.currentContent) return 'unknown';

        let difficultyScore = 0;

        // Simple topics
        const simpleTopics = ['atp', 'fermentation'];
        if (simpleTopics.includes(this.currentProblem.type)) {
            difficultyScore += 1;
        }

        // Intermediate topics
        const intermediateTopics = ['glycolysis', 'light_reactions', 'calvin_cycle', 'energy_coupling'];
        if (intermediateTopics.includes(this.currentProblem.type)) {
            difficultyScore += 2;
        }

        // Complex topics
        const complexTopics = ['krebs_cycle', 'electron_transport', 'cellular_respiration', 'photosynthesis', 'metabolic_pathways', 'thermodynamics'];
        if (complexTopics.includes(this.currentProblem.type)) {
            difficultyScore += 3;
        }

        // Adjust based on detail level
        if (this.explanationLevel === 'detailed') difficultyScore += 1;
        if (this.explanationLevel === 'basic') difficultyScore -= 1;

        // Return difficulty rating
        if (difficultyScore <= 2) return 'beginner';
        if (difficultyScore <= 4) return 'intermediate';
        return 'advanced';
    }

    generateLearningObjectives() {
        if (!this.currentProblem) return [];

        const objectivesDatabase = {
            atp: [
                "Describe the structure of ATP and identify its components",
                "Explain how ATP stores and releases energy",
                "Describe the ATP-ADP cycle and its importance",
                "Give examples of cellular processes powered by ATP"
            ],
            glycolysis: [
                "Describe the overall process and location of glycolysis",
                "Identify the inputs and outputs of glycolysis",
                "Explain the energy investment and payoff phases",
                "Describe the regulation of glycolysis"
            ],
            krebs_cycle: [
                "Describe the location and purpose of the Krebs cycle",
                "Trace the carbon atoms through the cycle",
                "Calculate the energy yield from the cycle",
                "Explain the amphibolic nature of the cycle"
            ],
            electron_transport: [
                "Describe the components of the electron transport chain",
                "Explain how the proton gradient is established",
                "Describe chemiosmosis and ATP synthesis",
                "Explain the role of oxygen as the final electron acceptor"
            ],
            fermentation: [
                "Compare lactic acid and alcoholic fermentation",
                "Explain why fermentation is necessary without oxygen",
                "Calculate the ATP yield from fermentation",
                "Give examples of fermentation in daily life"
            ],
            light_reactions: [
                "Describe the location and purpose of light reactions",
                "Explain the Z-scheme and electron flow",
                "Describe photolysis and oxygen production",
                "Explain chemiosmosis in chloroplasts"
            ],
            calvin_cycle: [
                "Describe the three phases of the Calvin cycle",
                "Explain the role of RuBisCO in carbon fixation",
                "Calculate the inputs and outputs for glucose production",
                "Describe photorespiration and alternative pathways"
            ],
            cellular_respiration: [
                "Describe the four stages of cellular respiration",
                "Calculate the total ATP yield from glucose",
                "Compare aerobic and anaerobic respiration",
                "Explain the role of oxygen in the process"
            ],
            photosynthesis: [
                "Describe the overall process of photosynthesis",
                "Explain the relationship between light reactions and Calvin cycle",
                "Compare photosynthesis and cellular respiration",
                "Describe factors affecting photosynthesis rate"
            ],
            energy_coupling: [
                "Explain how exergonic and endergonic reactions are coupled",
                "Describe the role of ATP in energy coupling",
                "Give examples of coupled reactions in cells",
                "Calculate free energy changes for coupled reactions"
            ],
            metabolic_pathways: [
                "Distinguish between catabolic and anabolic pathways",
                "Explain how metabolic pathways are integrated",
                "Describe the regulation of metabolic pathways",
                "Explain the concept of amphibolic pathways"
            ],
            thermodynamics: [
                "State the first and second laws of thermodynamics",
                "Explain free energy and its relationship to spontaneity",
                "Describe how living systems maintain order",
                "Calculate and interpret ΔG values"
            ]
        };

        return objectivesDatabase[this.currentProblem.type] || [
            "Understand the key concepts of this energy topic",
            "Apply knowledge to biological energy systems",
            "Make connections to other metabolic processes"
        ];
    }

    identifyPrerequisites() {
        if (!this.currentProblem) return [];

        const prerequisitesDatabase = {
            atp: [
                "Basic chemistry (bonds, molecules)",
                "Understanding of energy concepts"
            ],
            glycolysis: [
                "Understanding of glucose structure",
                "Basic chemistry (organic molecules)",
                "Concept of ATP"
            ],
            krebs_cycle: [
                "Glycolysis",
                "Understanding of oxidation-reduction",
                "Mitochondrial structure"
            ],
            electron_transport: [
                "Krebs cycle",
                "Understanding of electron carriers (NADH, FADH₂)",
                "Concept of chemiosmosis",
                "Mitochondrial structure"
            ],
            fermentation: [
                "Glycolysis",
                "Understanding of NAD⁺/NADH",
                "Concept of anaerobic processes"
            ],
            light_reactions: [
                "Understanding of light and electromagnetic radiation",
                "Chloroplast structure",
                "Concept of electron transport"
            ],
            calvin_cycle: [
                "Light reactions",
                "Understanding of CO₂ fixation",
                "Chloroplast structure"
            ],
            cellular_respiration: [
                "Basic chemistry (glucose, oxygen)",
                "Cell structure (mitochondria)",
                "Concept of ATP"
            ],
            photosynthesis: [
                "Basic chemistry (CO₂, water)",
                "Chloroplast structure",
                "Concept of energy conversion"
            ],
            energy_coupling: [
                "Understanding of ATP",
                "Basic thermodynamics",
                "Concept of spontaneity"
            ],
            metabolic_pathways: [
                "Basic biochemistry",
                "Understanding of enzymes",
                "Major metabolic pathways"
            ],
            thermodynamics: [
                "Basic chemistry",
                "Understanding of energy",
                "Concept of entropy"
            ]
        };

        return prerequisitesDatabase[this.currentProblem.type] || [
            "General biology background",
            "Basic chemistry"
        ];
    }

    generateStudyTips() {
        if (!this.currentProblem) return [];

        const studyTipsDatabase = {
            atp: [
                "Draw the ATP structure from memory",
                "Practice calculating energy from ATP hydrolysis",
                "Make flashcards for ATP uses in cells",
                "Create diagrams showing ATP-ADP cycling"
            ],
            glycolysis: [
                "Memorize the 10 steps in order",
                "Focus on the 3 irreversible steps (regulation points)",
                "Practice energy accounting (ATP in/out)",
                "Draw the pathway from memory"
            ],
            krebs_cycle: [
                "Track carbon atoms through the cycle",
                "Focus on where CO₂, NADH, FADH₂, and ATP are produced",
                "Understand it as a cycle (starts and ends with oxaloacetate)",
                "Use mnemonics for the 8 steps"
            ],
            electron_transport: [
                "Understand the flow: NADH → Complexes → O₂",
                "Focus on proton pumping and gradient formation",
                "Visualize ATP synthase as a molecular motor",
                "Practice calculating ATP yield"
            ],
            fermentation: [
                "Compare and contrast the two main types",
                "Understand why NAD⁺ regeneration is crucial",
                "Connect to real-world examples (food, exercise)",
                "Draw both pathways side-by-side"
            ],
            light_reactions: [
                "Draw the Z-scheme showing energy changes",
                "Track electrons from water to NADPH",
                "Understand where O₂ comes from (photolysis)",
                "Compare to electron transport in mitochondria"
            ],
            calvin_cycle: [
                "Memorize the three phases",
                "Track carbon atoms (3 CO₂ → 1 G3P)",
                "Calculate inputs and outputs for 1 glucose",
                "Understand RuBisCO's dual role"
            ],
            cellular_respiration: [
                "Create a summary table of all four stages",
                "Practice total ATP accounting",
                "Draw a flowchart showing glucose → CO₂",
                "Compare efficiency to car engines"
            ],
            photosynthesis: [
                "Compare to cellular respiration (opposite equations)",
                "Separate light reactions from Calvin cycle clearly",
                "Draw chloroplast with locations labeled",
                "Understand C3, C4, and CAM differences"
            ],
            energy_coupling: [
                "Practice calculating ΔG for coupled reactions",
                "Identify exergonic and endergonic reactions",
                "Find examples in metabolism",
                "Understand ATP's intermediary role"
            ],
            metabolic_pathways: [
                "Create a metabolic map showing connections",
                "Identify catabolic vs anabolic pathways",
                "Focus on regulation mechanisms",
                "Understand feedback inhibition"
            ],
            thermodynamics: [
                "Understand the laws conceptually first",
                "Practice ΔG calculations",
                "Relate entropy to everyday examples",
                "Connect to living systems maintaining order"
            ]
        };

        return studyTipsDatabase[this.currentProblem.type] || [
            "Review material regularly",
            "Create visual aids and diagrams",
            "Practice active recall",
            "Connect concepts to real-world examples"
        ];
    }

    generateAssessmentQuestions() {
        if (!this.currentProblem) return [];

        const questionsDatabase = {
            atp: [
                {
                    question: "What are the three components of ATP?",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "Why is ATP called the 'energy currency' of the cell?",
                    type: "explanation",
                    difficulty: "medium"
                },
                {
                    question: "Calculate the net ΔG when ATP hydrolysis is coupled to a reaction with ΔG = +5 kcal/mol.",
                    type: "application",
                    difficulty: "hard"
                }
            ],
            glycolysis: [
                {
                    question: "Where does glycolysis occur?",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "Why is phosphofructokinase the main control point of glycolysis?",
                    type: "explanation",
                    difficulty: "medium"
                },
                {
                    question: "Calculate the net ATP and NADH produced from 2 molecules of glucose.",
                    type: "application",
                    difficulty: "hard"
                }
            ],
            electron_transport: [
                {
                    question: "What is the role of oxygen in the electron transport chain?",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "Explain how the proton gradient drives ATP synthesis.",
                    type: "explanation",
                    difficulty: "medium"
                },
                {
                    question: "Why does FADH₂ produce less ATP than NADH?",
                    type: "analysis",
                    difficulty: "hard"
                }
            ]
        };

        return questionsDatabase[this.currentProblem.type] || [
            {
                question: "What are the main concepts of this topic?",
                type: "recall",
                difficulty: "easy"
            }
        ];
    }

    suggestRelatedTopics() {
        if (!this.currentProblem) return [];

        const relatedTopicsMap = {
            atp: ['energy_coupling', 'cellular_respiration', 'photosynthesis'],
            glycolysis: ['fermentation', 'krebs_cycle', 'cellular_respiration'],
            krebs_cycle: ['glycolysis', 'electron_transport', 'cellular_respiration'],
            electron_transport: ['krebs_cycle', 'chemiosmosis', 'atp'],
            fermentation: ['glycolysis', 'cellular_respiration'],
            light_reactions: ['calvin_cycle', 'photosynthesis', 'electron_transport'],
            calvin_cycle: ['light_reactions', 'photosynthesis'],
            cellular_respiration: ['glycolysis', 'krebs_cycle', 'electron_transport', 'atp'],
            photosynthesis: ['light_reactions', 'calvin_cycle', 'cellular_respiration'],
            energy_coupling: ['atp', 'thermodynamics', 'metabolic_pathways'],
            metabolic_pathways: ['cellular_respiration', 'photosynthesis', 'energy_coupling'],
            thermodynamics: ['energy_coupling', 'atp', 'metabolic_pathways']
        };

        const relatedTypes = relatedTopicsMap[this.currentProblem.type] || [];
        
        return relatedTypes.map(type => ({
            type: type,
            name: this.energyTopics[type]?.name,
            description: this.energyTopics[type]?.description
        }));
    }

    generateGlossary() {
        if (!this.currentContent) return {};

        const glossary = {};

        // Extract key terms from content
        if (this.currentContent.overview && this.currentContent.overview.definition) {
            glossary[this.currentContent.topic] = this.currentContent.overview.definition;
        }

        // Extract from key definitions in lessons
        const lesson = this.lessons[this.currentProblem?.type];
        if (lesson && lesson.keyDefinitions) {
            Object.assign(glossary, lesson.keyDefinitions);
        }

        return glossary;
    }

    generateProcessTimeline(processName) {
        const timelines = {
            'Glycolysis': [
                { phase: 'Energy Investment', steps: '1-5', duration: 'Microseconds', atp: '-2 ATP' },
                { phase: 'Energy Payoff', steps: '6-10', duration: 'Microseconds', atp: '+4 ATP, +2 NADH' }
            ],
            'Krebs Cycle': [
                { stage: 'Pyruvate Oxidation', location: 'Matrix', output: 'Acetyl-CoA, CO₂, NADH' },
                { stage: 'Cycle (×2)', location: 'Matrix', output: '2 ATP, 6 NADH, 2 FADH₂, 4 CO₂' }
            ],
            'Cellular Respiration': [
                { stage: 'Glycolysis', location: 'Cytoplasm', atp: '2 ATP (net)', time: 'Seconds' },
                { stage: 'Pyruvate Oxidation', location: 'Matrix', atp: '0 ATP directly', time: 'Seconds' },
                { stage: 'Krebs Cycle', location: 'Matrix', atp: '2 ATP', time: 'Seconds' },
                { stage: 'Electron Transport', location: 'Inner membrane', atp: '~28-32 ATP', time: 'Seconds' }
            ],
            'Photosynthesis': [
                { stage: 'Light Reactions', location: 'Thylakoids', products: 'ATP, NADPH, O₂', time: 'Milliseconds' },
                { stage: 'Calvin Cycle', location: 'Stroma', products: 'Glucose', time: 'Seconds to minutes' }
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

        if (this.currentContent.stages) {
            hierarchy.children.push({
                name: 'Stages',
                type: 'section',
                count: Object.keys(this.currentContent.stages).length
            });
        }

        if (this.currentContent.phases) {
            hierarchy.children.push({
                name: 'Phases',
                type: 'section',
                count: Object.keys(this.currentContent.phases).length
            });
        }

        if (this.currentContent.components) {
            hierarchy.children.push({
                name: 'Components',
                type: 'section',
                count: Object.keys(this.currentContent.components).length
            });
        }

        if (this.currentContent.types) {
            hierarchy.children.push({
                name: 'Types',
                type: 'section',
                count: Object.keys(this.currentContent.types).length
            });
        }

        return hierarchy;
    }

    // FINAL UTILITY METHODS

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

        // Award points for different content aspects
        if (this.currentContent.topic) score += 1;
        if (this.currentContent.overview) score += 1;
        if (this.currentContent.overallEquation) score += 1;
        if (this.currentContent.examples || this.currentContent.applications) score += 1;
        if (this.currentContent.comparisons || this.currentContent.comparison) score += 1;
        
        // Main content
        const hasMainContent = 
            this.currentContent.stages || 
            this.currentContent.phases || 
            this.currentContent.components || 
            this.currentContent.cycleSteps;
        if (hasMainContent) score += 3;

        // Energy accounting
        if (this.currentContent.energyAccounting || this.currentContent.completeEnergyAccounting) score += 1;

        // Additional depth
        if (this.currentContent.regulation) score += 1;

        return Math.round((score / maxScore) * 100);
    }

    getContentQualityMetrics() {
        return {
            completeness: this.calculateContentCompleteness(),
            hasExamples: !!(this.currentContent?.examples || this.currentContent?.applications),
            hasComparisons: !!(this.currentContent?.comparisons || this.currentContent?.comparison),
            hasEnergyAccounting: !!(this.currentContent?.energyAccounting || this.currentContent?.completeEnergyAccounting),
            detailLevel: this.explanationLevel,
            includesVisualizations: this.includeVisualizations,
            includesMisconceptions: this.includeCommonMisconceptions
        };
    }

    getAvailableTopics() {
        return Object.entries(this.energyTopics).map(([key, topic]) => ({
            id: key,
            name: topic.name,
            category: topic.category,
            description: topic.description
        }));
    }

    getTopicDetails(topicId) {
        const topic = this.energyTopics[topicId];
        if (!topic) return null;

        return {
            id: topicId,
            name: topic.name,
            category: topic.category,
            description: topic.description,
            lesson: this.lessons[topicId],
            prerequisites: this.identifyPrerequisites(),
            learningObjectives: this.generateLearningObjectives(),
            relatedTopics: this.suggestRelatedTopics()
        };
    }

    // EXPORT AND FORMATTING METHODS

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

        if (content.overview) {
            if (content.overview.definition) {
                markdown += `**Definition:** ${content.overview.definition}\n\n`;
            }
            if (content.overview.location) {
                markdown += `**Location:** ${content.overview.location}\n\n`;
            }
        }

        if (content.overallEquation && content.overallEquation.formula) {
            markdown += `## Overall Equation\n\n`;
            markdown += `\`${this.formatBiologicalTerm(content.overallEquation.formula)}\`\n\n`;
        }

        if (content.stages) {
            markdown += `## Stages\n\n`;
            Object.entries(content.stages).forEach(([stageName, stage]) => {
                markdown += `### ${stage.name || stageName}\n\n`;
                if (stage.location) markdown += `**Location:** ${stage.location}\n\n`;
                if (stage.output) markdown += `**Output:** ${stage.output}\n\n`;
                if (stage.description) markdown += `${stage.description}\n\n`;
            });
        }

        if (content.energyAccounting || content.completeEnergyAccounting) {
            markdown += `## Energy Accounting\n\n`;
            const accounting = content.energyAccounting || content.completeEnergyAccounting;
            this.addMarkdownSection(markdown, accounting);
        }

        return markdown;
    }

    addMarkdownSection(markdown, obj, level = 3) {
        Object.entries(obj).forEach(([key, value]) => {
            if (typeof value === 'string' || typeof value === 'number') {
                markdown += `${'#'.repeat(level)} ${key}\n\n${value}\n\n`;
            } else if (Array.isArray(value)) {
                markdown += `${'#'.repeat(level)} ${key}\n\n`;
                value.forEach(item => {
                    markdown += `- ${item}\n`;
                });
                markdown += '\n';
            } else if (typeof value === 'object') {
                markdown += `${'#'.repeat(level)} ${key}\n\n`;
                this.addMarkdownSection(markdown, value, level + 1);
            }
        });
    }

    convertToHTML(content) {
        let html = `<div class="energy-content">\n`;
        html += `  <h1>${content.topic}</h1>\n`;

        if (content.overview) {
            html += `  <section class="overview">\n`;
            if (content.overview.definition) {
                html += `    <p><strong>Definition:</strong> ${content.overview.definition}</p>\n`;
            }
            if (content.overview.location) {
                html += `    <p><strong>Location:</strong> ${content.overview.location}</p>\n`;
            }
            html += `  </section>\n`;
        }

        if (content.overallEquation && content.overallEquation.formula) {
            html += `  <section class="equation">\n`;
            html += `    <h2>Overall Equation</h2>\n`;
            html += `    <code>${this.formatBiologicalTerm(content.overallEquation.formula)}</code>\n`;
            html += `  </section>\n`;
        }

        if (content.stages) {
            html += `  <section class="stages">\n`;
            html += `    <h2>Stages</h2>\n`;
            Object.entries(content.stages).forEach(([stageName, stage]) => {
                html += `    <article>\n`;
                html += `      <h3>${stage.name || stageName}</h3>\n`;
                if (stage.location) html += `      <p><strong>Location:</strong> ${stage.location}</p>\n`;
                if (stage.output) html += `      <p><strong>Output:</strong> ${stage.output}</p>\n`;
                if (stage.description) html += `      <p>${stage.description}</p>\n`;
                html += `    </article>\n`;
            });
            html += `  </section>\n`;
        }

        html += `</div>`;
        return html;
    }

    // SEARCH AND FILTER METHODS

    searchContent(query) {
        if (!this.currentContent) return null;

        const results = {
            query: query,
            matches: []
        };

        const searchableContent = JSON.stringify(this.currentContent).toLowerCase();
        const queryLower = query.toLowerCase();

        if (searchableContent.includes(queryLower)) {
            // Search in stages
            if (this.currentContent.stages) {
                Object.entries(this.currentContent.stages).forEach(([name, stage]) => {
                    if (JSON.stringify(stage).toLowerCase().includes(queryLower)) {
                        results.matches.push({
                            type: 'stage',
                            name: name,
                            content: stage
                        });
                    }
                });
            }

            // Search in components
            if (this.currentContent.components) {
                Object.entries(this.currentContent.components).forEach(([name, component]) => {
                    if (JSON.stringify(component).toLowerCase().includes(queryLower)) {
                        results.matches.push({
                            type: 'component',
                            name: name,
                            content: component
                        });
                    }
                });
            }

            // Search in phases
            if (this.currentContent.phases) {
                Object.entries(this.currentContent.phases).forEach(([name, phase]) => {
                    if (JSON.stringify(phase).toLowerCase().includes(queryLower)) {
                        results.matches.push({
                            type: 'phase',
                            name: name,
                            content: phase
                        });
                    }
                });
            }
        }

        return results;
    }

    filterContentByCategory(category) {
        if (!this.currentContent) return null;

        const filtered = {
            category: category,
            items: []
        };

        // Filter based on category
        const categoryLower = category.toLowerCase();

        if (this.currentContent.stages) {
            Object.entries(this.currentContent.stages).forEach(([name, stage]) => {
                if (stage.location?.toLowerCase().includes(categoryLower) || 
                    stage.name?.toLowerCase().includes(categoryLower)) {
                    filtered.items.push({ type: 'stage', name, data: stage });
                }
            });
        }

        if (this.currentContent.components) {
            Object.entries(this.currentContent.components).forEach(([name, component]) => {
                if (name.toLowerCase().includes(categoryLower)) {
                    filtered.items.push({ type: 'component', name, data: component });
                }
            });
        }

        return filtered;
    }

    // SUMMARY GENERATION

    generateContentSummary() {
        if (!this.currentContent) return null;

        const summary = {
            topic: this.currentContent.topic,
            category: this.currentContent.category,
            itemCount: 0,
            keyPoints: [],
            coverage: {}
        };

        // Count items
        if (this.currentContent.stages) {
            summary.itemCount += Object.keys(this.currentContent.stages).length;
            summary.coverage.stages = Object.keys(this.currentContent.stages).length;
        }

        if (this.currentContent.phases) {
            summary.itemCount += Object.keys(this.currentContent.phases).length;
            summary.coverage.phases = Object.keys(this.currentContent.phases).length;
        }

        if (this.currentContent.components) {
            summary.itemCount += Object.keys(this.currentContent.components).length;
            summary.coverage.components = Object.keys(this.currentContent.components).length;
        }

        if (this.currentContent.cycleSteps) {
            summary.itemCount += this.currentContent.cycleSteps.length;
            summary.coverage.steps = this.currentContent.cycleSteps.length;
        }

        // Extract key points
        if (this.currentContent.overview) {
            if (this.currentContent.overview.purpose) {
                summary.keyPoints.push(this.currentContent.overview.purpose);
            }
        }

        // Add equation if available
        if (this.currentContent.overallEquation && this.currentContent.overallEquation.simplified) {
            summary.keyPoints.push(`Equation: ${this.currentContent.overallEquation.simplified}`);
        }

        return summary;
    }

    // VERIFICATION AND VALIDATION

    validateEnergyContent(content) {
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

        // Check for content depth
        const hasSubstantiveContent = 
            content.stages || 
            content.phases || 
            content.components || 
            content.cycleSteps ||
            content.energyAccounting;

        if (!hasSubstantiveContent) {
            validationResults.warnings.push("Limited substantive content");
            validationResults.suggestions.push("Consider adding more detailed information");
        }

        // Check for educational value
        if (!content.examples && !content.applications) {
            validationResults.suggestions.push("Consider adding examples and applications");
        }

        // Check for energy accounting (important for energy topics)
        if (!content.energyAccounting && !content.completeEnergyAccounting) {
            validationResults.suggestions.push("Consider adding energy accounting information");
        }

        return validationResults;
    }

    // CONCEPTUAL CONNECTIONS

    addConceptualConnections(content) {
        if (!this.includeConceptualConnections) return content;

        const connections = {
            atp: "ATP connects all energy-requiring and energy-releasing processes in cells",
            glycolysis: "Glycolysis is the universal first step in glucose metabolism",
            krebs_cycle: "The Krebs cycle is the central hub connecting carbohydrate, fat, and protein metabolism",
            electron_transport: "Electron transport is the final common pathway for extracting energy from all fuels",
            fermentation: "Fermentation allows continued ATP production when aerobic respiration cannot occur",
            light_reactions: "Light reactions provide the energy and reducing power for carbon fixation",
            calvin_cycle: "Calvin cycle uses energy from light reactions to build organic molecules",
            cellular_respiration: "Cellular respiration reverses photosynthesis, cycling energy through ecosystems",
            photosynthesis: "Photosynthesis is the ultimate source of energy for most life on Earth",
            energy_coupling: "Energy coupling makes unfavorable reactions possible throughout metabolism",
            metabolic_pathways: "Metabolic pathways are interconnected networks that regulate cellular chemistry",
            thermodynamics: "Thermodynamic principles govern all energy transformations in living systems"
        };

        content.conceptualConnections = connections[this.currentProblem.type] || 
            "This topic connects to broader biological energy principles";

        return content;
    }

    // ENRICHMENT METHODS

    enrichWithExamples(content) {
        if (!this.includeExamples || content.examples) return content;

        const exampleDatabase = {
            atp: [
                "Muscle contraction uses ATP to power myosin motors",
                "Active transport pumps use ATP to move ions against gradients",
                "Bioluminescent organisms use ATP-dependent reactions to produce light"
            ],
            glycolysis: [
                "During intense exercise, muscles rely heavily on glycolysis",
                "Cancer cells often use glycolysis even when oxygen is available (Warburg effect)",
                "Yeast use glycolysis to ferment sugars in bread and beer"
            ],
            electron_transport: [
                "Cyanide poisoning blocks Complex IV, preventing ATP synthesis",
                "Brown fat uses uncoupled electron transport to generate heat",
                "Mitochondrial diseases often affect electron transport complexes"
            ],
            fermentation: [
                "Yogurt, cheese, and sauerkraut are made by lactic acid fermentation",
                "Beer, wine, and bread use alcoholic fermentation",
                "Muscle fatigue during sprinting involves lactic acid fermentation"
            ]
        };

        if (exampleDatabase[this.currentProblem.type]) {
            content.examples = exampleDatabase[this.currentProblem.type];
        }

        return content;
    }

    addComparativeContext(content) {
        if (!this.includeComparisons || content.comparisons) return content;

        const comparativeData = {
            glycolysis: {
                efficiency: "2 ATP vs 32-34 ATP in complete aerobic respiration",
                speed: "Very fast (seconds) vs slower complete oxidation (minutes)",
                universality: "Universal (all cells) vs eukaryotic-specific (mitochondria needed)"
            },
            fermentation: {
                efficiency: "2 ATP per glucose vs 32-34 ATP aerobically",
                products: "Lactate or ethanol vs CO₂ and H₂O",
                sustainability: "Short-term only vs long-term sustainable"
            },
            light_reactions: {
                vsRespiration: "Stores energy vs releases energy",
                location: "Thylakoids vs mitochondria",
                gradient: "Lumen (high H⁺) vs matrix (low H⁺)"
            }
        };

        if (comparativeData[this.currentProblem.type]) {
            content.comparativeContext = comparativeData[this.currentProblem.type];
        }

        return content;
    }
}

// Export the class
export default EnhancedEnergyInLivingSystemsWorkbook;
