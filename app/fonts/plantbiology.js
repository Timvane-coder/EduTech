
// Enhanced Plant Biology Workbook - Comprehensive Plant Biology Content System
import * as math from 'mathjs';

export class EnhancedPlantBiologyWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "botanical";
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

        this.botanicalSymbols = this.initializeBotanicalSymbols();
        this.setThemeColors();
        this.initializePlantTopics();
        this.initializeMisconceptionDatabase();
        this.initializeExplanationTemplates();
        this.initializePlantLessons();
    }

    setThemeColors() {
        const themes = {
            botanical: {
                background: '#ffffff',
                gridColor: '#c0c0c0',
                headerBg: '#2e7d32',
                headerText: '#ffffff',
                sectionBg: '#c8e6c9',
                sectionText: '#1b5e20',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#e8f5e9',
                resultText: '#2e7d32',
                definitionBg: '#fff9c4',
                definitionText: '#f57f17',
                stepBg: '#f1f8e9',
                stepText: '#33691e',
                borderColor: '#81c784',
                contentBg: '#e3f2fd',
                contentText: '#0d47a1',
                diagramBg: '#f3e5f5',
                structureBg: '#fce4ec'
            },
            scientific: {
                background: '#f8f9fa',
                gridColor: '#4682b4',
                headerBg: '#1565c0',
                headerText: '#ffffff',
                sectionBg: '#bbdefb',
                sectionText: '#0d47a1',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#e1f5fe',
                resultText: '#01579b',
                definitionBg: '#fff3e0',
                definitionText: '#e65100',
                stepBg: '#e8eaf6',
                stepText: '#311b92',
                borderColor: '#42a5f5',
                contentBg: '#f3e5f5',
                contentText: '#4a148c',
                diagramBg: '#fce4ec',
                structureBg: '#fff9c4'
            }
        };

        this.colors = themes[this.theme] || themes.botanical;
    }

    initializeBotanicalSymbols() {
        return {
            // Common botanical symbols
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
            // Plant-specific notation
            'H2O': 'H₂O',
            'CO2': 'CO₂',
            'O2': 'O₂',
            'glucose': 'C₆H₁₂O₆',
            'IAA': 'IAA',
            'GA': 'GA',
            'ABA': 'ABA',
            'ethylene': 'C₂H₄'
        };
    }

    initializePlantTopics() {
        this.plantTopics = {
            // 1. Plant Structure
            plant_structure: {
                patterns: [
                    /plant.*structure/i,
                    /root.*stem.*leaf/i,
                    /plant.*organ/i,
                    /plant.*tissue/i
                ],
                handler: this.handlePlantStructure.bind(this),
                name: 'Plant Structure',
                category: 'plant_anatomy',
                description: 'Organization and structure of plant organs and tissues'
            },

            // 2. Plant Transport
            plant_transport: {
                patterns: [
                    /plant.*transport/i,
                    /xylem.*phloem/i,
                    /transpiration|translocation/i,
                    /water.*movement.*plant/i
                ],
                handler: this.handlePlantTransport.bind(this),
                name: 'Plant Transport',
                category: 'plant_physiology',
                description: 'Movement of water, minerals, and nutrients in plants'
            },

            // 3. Plant Reproduction
            plant_reproduction: {
                patterns: [
                    /plant.*reproduction/i,
                    /flower.*structure/i,
                    /pollination|fertilization/i,
                    /seed.*fruit.*development/i
                ],
                handler: this.handlePlantReproduction.bind(this),
                name: 'Plant Reproduction',
                category: 'plant_biology',
                description: 'Sexual and asexual reproduction in plants'
            },

            // 4. Plant Hormones
            plant_hormones: {
                patterns: [
                    /plant.*hormone/i,
                    /auxin|gibberellin|cytokinin/i,
                    /plant.*growth.*regulator/i,
                    /hormone.*plant/i
                ],
                handler: this.handlePlantHormones.bind(this),
                name: 'Plant Hormones',
                category: 'plant_physiology',
                description: 'Chemical messengers regulating plant growth and development'
            },

            // 5. Tropisms
            tropisms: {
                patterns: [
                    /tropism/i,
                    /phototropism|gravitropism|thigmotropism/i,
                    /plant.*movement/i,
                    /plant.*response.*stimuli/i
                ],
                handler: this.handleTropisms.bind(this),
                name: 'Tropisms',
                category: 'plant_physiology',
                description: 'Directional growth responses to environmental stimuli'
            },

            // 6. Plant Anatomy
            plant_anatomy: {
                patterns: [
                    /plant.*anatomy/i,
                    /plant.*cell.*type/i,
                    /meristem|parenchyma|collenchyma|sclerenchyma/i,
                    /dermal.*vascular.*ground.*tissue/i
                ],
                handler: this.handlePlantAnatomy.bind(this),
                name: 'Plant Anatomy',
                category: 'plant_anatomy',
                description: 'Internal structure and organization of plant tissues'
            },

            // 7. Photosynthesis
            photosynthesis: {
                patterns: [
                    /photosynthesis/i,
                    /light.*reaction|calvin.*cycle/i,
                    /chloroplast.*function/i,
                    /carbon.*fixation/i
                ],
                handler: this.handlePhotosynthesis.bind(this),
                name: 'Photosynthesis',
                category: 'plant_physiology',
                description: 'Process of converting light energy into chemical energy'
            },

            // 8. Plant Nutrition
            plant_nutrition: {
                patterns: [
                    /plant.*nutrition/i,
                    /mineral.*uptake/i,
                    /essential.*element.*plant/i,
                    /nutrient.*deficiency/i
                ],
                handler: this.handlePlantNutrition.bind(this),
                name: 'Plant Nutrition',
                category: 'plant_physiology',
                description: 'Nutrient requirements and mineral uptake in plants'
            },

            // 9. Plant Growth and Development
            plant_growth: {
                patterns: [
                    /plant.*growth/i,
                    /plant.*development/i,
                    /germination|differentiation/i,
                    /primary.*secondary.*growth/i
                ],
                handler: this.handlePlantGrowth.bind(this),
                name: 'Plant Growth and Development',
                category: 'plant_physiology',
                description: 'Patterns and mechanisms of plant growth'
            },

            // 10. Plant Adaptations
            plant_adaptations: {
                patterns: [
                    /plant.*adaptation/i,
                    /xerophyte|hydrophyte|halophyte/i,
                    /plant.*environment/i,
                    /adaptation.*desert|water|salt/i
                ],
                handler: this.handlePlantAdaptations.bind(this),
                name: 'Plant Adaptations',
                category: 'plant_ecology',
                description: 'Modifications enabling plants to survive in different environments'
            },

            // 11. Root Systems
            root_systems: {
                patterns: [
                    /root.*system/i,
                    /taproot|fibrous.*root/i,
                    /root.*structure|root.*function/i,
                    /root.*zone/i
                ],
                handler: this.handleRootSystems.bind(this),
                name: 'Root Systems',
                category: 'plant_anatomy',
                description: 'Structure and function of plant roots'
            },

            // 12. Leaf Structure and Function
            leaf_structure: {
                patterns: [
                    /leaf.*structure/i,
                    /stomata|mesophyll/i,
                    /leaf.*anatomy/i,
                    /gas.*exchange.*leaf/i
                ],
                handler: this.handleLeafStructure.bind(this),
                name: 'Leaf Structure and Function',
                category: 'plant_anatomy',
                description: 'Organization and roles of leaf tissues'
            }
        };
    }

    initializePlantLessons() {
        this.lessons = {
            plant_structure: {
                title: "Plant Structure and Organization",
                concepts: [
                    "Plants have three main organ systems: roots, stems, and leaves",
                    "Each organ has specialized tissues for specific functions",
                    "Plants show modular growth patterns",
                    "Structure is adapted to function"
                ],
                theory: "Plants are organized into organ systems (roots, stems, leaves) composed of tissue systems (dermal, vascular, ground). This hierarchical organization allows for division of labor and efficient resource allocation.",
                keyDefinitions: {
                    "Root": "Underground organ for anchorage, absorption, and storage",
                    "Stem": "Above-ground organ providing support and transport",
                    "Leaf": "Primary photosynthetic organ for gas exchange and light capture",
                    "Meristem": "Region of active cell division for plant growth",
                    "Vascular Tissue": "Transport tissue (xylem and phloem)"
                },
                mainCategories: [
                    "Root system: anchorage and absorption",
                    "Shoot system: support, transport, and photosynthesis",
                    "Tissue systems: dermal, vascular, ground",
                    "Meristematic vs permanent tissues"
                ],
                applications: [
                    "Agricultural crop improvement",
                    "Understanding plant responses to environment",
                    "Forestry and horticulture",
                    "Plant breeding strategies"
                ]
            },

            plant_transport: {
                title: "Transport in Plants",
                concepts: [
                    "Xylem transports water and minerals upward",
                    "Phloem transports sugars bidirectionally",
                    "Transpiration drives water movement",
                    "Root pressure and cohesion-tension theory explain transport"
                ],
                theory: "Plant transport involves two separate systems: xylem for water/mineral transport driven by transpiration and root pressure, and phloem for sugar transport driven by pressure flow mechanism.",
                keyDefinitions: {
                    "Xylem": "Dead, hollow cells transporting water and minerals upward",
                    "Phloem": "Living cells transporting sugars and organic compounds",
                    "Transpiration": "Evaporation of water from leaves creating pull",
                    "Translocation": "Movement of sugars through phloem",
                    "Cohesion-Tension": "Theory explaining upward water movement"
                },
                mainCategories: [
                    "Xylem transport: water and minerals",
                    "Phloem transport: sugars and organics",
                    "Driving forces: transpiration, root pressure, pressure flow",
                    "Factors affecting transport rate"
                ],
                applications: [
                    "Irrigation management",
                    "Understanding drought stress",
                    "Nutrient delivery in crops",
                    "Pesticide/herbicide distribution"
                ]
            },

            plant_reproduction: {
                title: "Plant Reproduction",
                concepts: [
                    "Plants reproduce sexually through flowers and seeds",
                    "Asexual reproduction produces genetically identical offspring",
                    "Pollination transfers pollen to stigma",
                    "Double fertilization is unique to flowering plants"
                ],
                theory: "Plant reproduction involves alternation of generations between sporophyte (diploid) and gametophyte (haploid) phases. Flowering plants show double fertilization producing both embryo and endosperm.",
                keyDefinitions: {
                    "Flower": "Reproductive structure containing male and/or female parts",
                    "Pollination": "Transfer of pollen from anther to stigma",
                    "Fertilization": "Fusion of male and female gametes",
                    "Seed": "Embryo with stored food in protective coat",
                    "Fruit": "Mature ovary containing seeds"
                },
                mainCategories: [
                    "Sexual reproduction: flowers, pollination, fertilization",
                    "Asexual reproduction: vegetative propagation",
                    "Seed and fruit development",
                    "Germination and establishment"
                ],
                applications: [
                    "Crop breeding and genetics",
                    "Fruit production",
                    "Conservation of rare species",
                    "Horticultural propagation"
                ]
            },

            plant_hormones: {
                title: "Plant Hormones and Growth Regulators",
                concepts: [
                    "Plant hormones coordinate growth and development",
                    "Hormones work at very low concentrations",
                    "Multiple hormones interact to regulate responses",
                    "Hormones affect cell division, elongation, and differentiation"
                ],
                theory: "Plant hormones are chemical messengers produced in one location and transported to target tissues where they trigger specific responses. Hormone interactions create complex regulatory networks.",
                keyDefinitions: {
                    "Auxin": "Promotes cell elongation, apical dominance, root development",
                    "Gibberellin": "Stimulates stem elongation, seed germination",
                    "Cytokinin": "Promotes cell division, delays senescence",
                    "Abscisic Acid": "Induces dormancy, closes stomata during stress",
                    "Ethylene": "Promotes fruit ripening, leaf abscission"
                },
                mainCategories: [
                    "Growth promoters: auxin, gibberellin, cytokinin",
                    "Growth inhibitors: abscisic acid, ethylene",
                    "Hormone synthesis and transport",
                    "Signal transduction pathways"
                ],
                applications: [
                    "Agricultural production (ripening, rooting)",
                    "Weed control (synthetic auxins)",
                    "Post-harvest storage",
                    "Stress management"
                ]
            },

            tropisms: {
                title: "Tropisms and Plant Movements",
                concepts: [
                    "Tropisms are directional growth responses",
                    "Plants respond to light, gravity, and touch",
                    "Hormones mediate tropic responses",
                    "Different plant parts show different tropisms"
                ],
                theory: "Tropisms result from differential growth rates on opposite sides of plant organs, typically mediated by unequal distribution of auxin or other hormones in response to environmental stimuli.",
                keyDefinitions: {
                    "Phototropism": "Growth response to light (shoots positive, roots negative)",
                    "Gravitropism": "Growth response to gravity (roots positive, shoots negative)",
                    "Thigmotropism": "Growth response to touch (tendril coiling)",
                    "Hydrotropism": "Growth response to water",
                    "Nastic Movement": "Non-directional response to stimuli"
                },
                mainCategories: [
                    "Positive vs negative tropisms",
                    "Phototropism: light-directed growth",
                    "Gravitropism: gravity-directed growth",
                    "Other tropisms: thigmo-, hydro-, chemotropism"
                ],
                applications: [
                    "Understanding plant architecture",
                    "Space agriculture",
                    "Crop positioning and orientation",
                    "Climbing plant management"
                ]
            },

            plant_anatomy: {
                title: "Plant Anatomy and Tissue Systems",
                concepts: [
                    "Plants have three tissue systems: dermal, vascular, ground",
                    "Meristematic tissue produces new cells",
                    "Simple tissues have one cell type, complex have multiple",
                    "Tissue organization differs between monocots and dicots"
                ],
                theory: "Plant anatomy reflects functional specialization at cellular and tissue levels. The arrangement of tissues creates efficient systems for protection, transport, support, and metabolism.",
                keyDefinitions: {
                    "Dermal Tissue": "Outer protective layer (epidermis, periderm)",
                    "Vascular Tissue": "Transport system (xylem, phloem)",
                    "Ground Tissue": "Everything between dermal and vascular",
                    "Meristem": "Undifferentiated tissue for growth",
                    "Parenchyma": "Living cells for storage, photosynthesis, secretion"
                },
                mainCategories: [
                    "Tissue systems: dermal, vascular, ground",
                    "Simple tissues: parenchyma, collenchyma, sclerenchyma",
                    "Complex tissues: xylem, phloem, epidermis",
                    "Meristematic vs permanent tissues"
                ],
                applications: [
                    "Wood and fiber production",
                    "Understanding plant development",
                    "Identifying plants microscopically",
                    "Breeding for structural traits"
                ]
            },

            photosynthesis: {
                title: "Photosynthesis in Plants",
                concepts: [
                    "Photosynthesis converts light energy to chemical energy",
                    "Light reactions produce ATP and NADPH",
                    "Calvin cycle fixes CO₂ into glucose",
                    "C3, C4, and CAM plants differ in carbon fixation"
                ],
                theory: "Photosynthesis occurs in two stages: light-dependent reactions in thylakoids capture energy, while light-independent reactions in stroma use that energy to fix CO₂ into sugars.",
                keyDefinitions: {
                    "Chloroplast": "Organelle where photosynthesis occurs",
                    "Chlorophyll": "Green pigment that captures light energy",
                    "Light Reactions": "Convert light to chemical energy (ATP, NADPH)",
                    "Calvin Cycle": "Uses ATP and NADPH to fix CO₂ into sugar",
                    "Stomata": "Pores allowing CO₂ entry and water loss"
                },
                mainCategories: [
                    "Light reactions: energy capture in thylakoids",
                    "Calvin cycle: carbon fixation in stroma",
                    "C3, C4, and CAM pathways",
                    "Factors affecting photosynthesis rate"
                ],
                applications: [
                    "Crop productivity optimization",
                    "Climate change research",
                    "Biofuel production",
                    "Greenhouse management"
                ]
            },

            plant_nutrition: {
                title: "Plant Nutrition and Mineral Uptake",
                concepts: [
                    "Plants need 17 essential elements",
                    "Macronutrients needed in large amounts",
                    "Micronutrients needed in trace amounts",
                    "Deficiency symptoms are element-specific"
                ],
                theory: "Plants obtain water and minerals from soil through roots. Essential elements are classified as macro- or micronutrients based on required quantities. Each plays specific roles in plant metabolism.",
                keyDefinitions: {
                    "Essential Element": "Required for plant completion of life cycle",
                    "Macronutrient": "Needed in large amounts (N, P, K, Ca, Mg, S)",
                    "Micronutrient": "Needed in trace amounts (Fe, Mn, Zn, Cu, B, Mo, Cl)",
                    "Nitrogen Fixation": "Conversion of atmospheric N₂ to usable forms",
                    "Mycorrhizae": "Fungal associations enhancing nutrient uptake"
                },
                mainCategories: [
                    "Essential macronutrients: N, P, K, Ca, Mg, S",
                    "Essential micronutrients: Fe, Mn, Zn, Cu, B, Mo, Cl",
                    "Nutrient uptake mechanisms",
                    "Deficiency and toxicity symptoms"
                ],
                applications: [
                    "Fertilizer management",
                    "Diagnosing nutrient problems",
                    "Sustainable agriculture",
                    "Hydroponics and soilless culture"
                ]
            },

            plant_growth: {
                title: "Plant Growth and Development",
                concepts: [
                    "Primary growth increases length",
                    "Secondary growth increases width",
                    "Meristems are centers of cell division",
                    "Environmental factors influence growth patterns"
                ],
                theory: "Plant growth results from cell division in meristems followed by cell elongation and differentiation. Primary growth occurs at apical meristems; secondary growth at lateral meristems.",
                keyDefinitions: {
                    "Primary Growth": "Increase in length from apical meristems",
                    "Secondary Growth": "Increase in width from lateral meristems",
                    "Apical Meristem": "Growing tip of shoots and roots",
                    "Cambium": "Lateral meristem producing secondary tissues",
                    "Differentiation": "Cells becoming specialized for specific functions"
                },
                mainCategories: [
                    "Primary growth: apical meristems, elongation",
                    "Secondary growth: vascular cambium, cork cambium",
                    "Growth patterns: determinate vs indeterminate",
                    "Environmental control of growth"
                ],
                applications: [
                    "Forest management",
                    "Ornamental plant production",
                    "Understanding plant architecture",
                    "Growth regulator applications"
                ]
            },

            plant_adaptations: {
                title: "Plant Adaptations to Environment",
                concepts: [
                    "Plants adapt to water availability",
                    "Xerophytes survive in dry conditions",
                    "Hydrophytes thrive in aquatic environments",
                    "Structural and physiological adaptations occur"
                ],
                theory: "Plant adaptations are inherited traits enhancing survival and reproduction in specific environments. Adaptations may be structural (anatomy), physiological (metabolism), or behavioral (timing).",
                keyDefinitions: {
                    "Xerophyte": "Plant adapted to dry environments",
                    "Hydrophyte": "Plant adapted to aquatic environments",
                    "Halophyte": "Plant adapted to salty environments",
                    "Mesophyte": "Plant adapted to moderate water conditions",
                    "CAM Photosynthesis": "Adaptation reducing water loss in arid conditions"
                },
                mainCategories: [
                    "Water adaptations: xerophytes, hydrophytes, mesophytes",
                    "Temperature adaptations: cold and heat tolerance",
                    "Light adaptations: sun and shade plants",
                    "Soil adaptations: halophytes, calciphiles, acidophiles"
                ],
                applications: [
                    "Landscaping in different climates",
                    "Crop selection for environments",
                    "Conservation of specialized habitats",
                    "Climate change resilience"
                ]
            },

            root_systems: {
                title: "Root Systems and Functions",
                concepts: [
                    "Roots anchor plants and absorb water/minerals",
                    "Taproot vs fibrous root systems",
                    "Root hairs increase surface area",
                    "Roots can store nutrients"
                ],
                theory: "Root systems provide anchorage, absorption, conduction, and storage. Organization into zones reflects developmental stages and functional specialization.",
                keyDefinitions: {
                    "Taproot": "Primary root growing downward with lateral branches",
                    "Fibrous Root": "Network of similar-sized roots from stem base",
                    "Root Hair": "Extension of epidermal cell increasing absorption",
                    "Root Cap": "Protective covering of root tip",
                    "Zone of Elongation": "Region where cells rapidly lengthen"
                },
                mainCategories: [
                    "Root types: taproot, fibrous, adventitious",
                    "Root zones: cap, meristem, elongation, maturation",
                    "Root functions: anchorage, absorption, storage",
                    "Modified roots: prop, aerial, storage"
                ],
                applications: [
                    "Understanding soil-plant relationships",
                    "Crop root architecture breeding",
                    "Erosion control",
                    "Water and nutrient management"
                ]
            },

            leaf_structure: {
                title: "Leaf Structure and Function",
                concepts: [
                    "Leaves are primary photosynthetic organs",
                    "Broad, flat shape maximizes light capture",
                    "Stomata regulate gas exchange",
                    "Internal tissues specialized for photosynthesis"
                ],
                theory: "Leaf structure reflects optimization for photosynthesis while minimizing water loss. Arrangement of tissues creates efficient light capture, CO₂ uptake, and water conservation.",
                keyDefinitions: {
                    "Stomata": "Pores in epidermis allowing gas exchange",
                    "Guard Cells": "Cells surrounding stomata controlling opening",
                    "Mesophyll": "Internal photosynthetic tissue",
                    "Palisade Layer": "Column-shaped cells for maximum photosynthesis",
                    "Spongy Layer": "Loosely arranged cells for gas circulation"
                },
                mainCategories: [
                    "External structure: blade, petiole, veins",
                    "Internal anatomy: epidermis, mesophyll, vascular bundles",
                    "Stomatal function: gas exchange regulation",
                    "Leaf modifications: tendrils, spines, storage"
                ],
                applications: [
                    "Understanding photosynthetic efficiency",
                    "Water stress management",
                    "Leaf disease diagnosis",
                    "Breeding for leaf traits"
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.commonMisconceptions = {
            plant_structure: {
                'Root vs Shoot': [
                    'Thinking roots only absorb water (they also absorb minerals and can store food)',
                    'Believing stems only provide support (they also transport and store)',
                    'Assuming all leaves are green (some are modified for other functions)'
                ],
                'Tissue Organization': [
                    'Confusing xylem and phloem functions',
                    'Thinking all plant cells are the same',
                    'Believing plant growth occurs everywhere (it\'s limited to meristems)'
                ]
            },
            plant_transport: {
                'Xylem Transport': [
                    'Thinking xylem is like a pump (it\'s passive, driven by transpiration)',
                    'Believing roots push water up (root pressure is minor compared to transpiration pull)',
                    'Confusing xylem with veins in animals (no circulation, unidirectional flow)'
                ],
                'Phloem Transport': [
                    'Thinking phloem only moves sugars upward (it\'s bidirectional)',
                    'Believing transport is like blood flow (it\'s driven by pressure differences, not pumping)',
                    'Assuming phloem cells are dead like xylem (phloem cells are living)'
                ]
            },
            plant_reproduction: {
                'Pollination vs Fertilization': [
                    'Confusing pollination (pollen transfer) with fertilization (gamete fusion)',
                    'Thinking all flowers have both male and female parts',
                    'Believing fruits develop from flowers even without fertilization'
                ],
                'Seeds and Fruits': [
                    'Thinking all fruits are sweet and edible (tomatoes, peppers are fruits)',
                    'Confusing seeds with fruits (seeds are inside fruits)',
                    'Believing all seeds need light to germinate (many need darkness)'
                ]
            },
            plant_hormones: {
                'Hormone Function': [
                    'Thinking plant hormones work like animal hormones (similar but distinct mechanisms)',
                    'Believing one hormone has one effect (hormones have multiple effects)',
                    'Assuming hormones always promote growth (some inhibit)'
                ],
                'Auxin Specifically': [
                    'Thinking auxin always promotes growth (high concentrations can inhibit)',
                    'Believing auxin only affects stems (it affects roots, leaves, flowers too)',
                    'Confusing auxin distribution with its synthesis location'
                ]
            },
            tropisms: {
                'Phototropism': [
                    'Thinking plants "move" toward light (they grow toward it)',
                    'Believing all plant parts are positively phototropic (roots can be negative)',
                    'Confusing phototropism with solar tracking (different mechanisms)'
                ],
                'Gravitropism': [
                    'Thinking plants sense gravity with special organs (it\'s at cellular level)',
                    'Believing gravitropism overrides phototropism (they interact)',
                    'Assuming roots are always positively gravitropic (some lateral roots aren\'t)'
                ]
            },
            photosynthesis: {
                'Light vs Dark Reactions': [
                    'Thinking dark reactions only occur in darkness (they occur anytime, just don\'t require light)',
                    'Believing chloroplasts make food (they make glucose, which is processed elsewhere)',
                    'Confusing photosynthesis inputs and outputs'
                ],
                'Location': [
                    'Thinking photosynthesis only occurs in leaves (any green tissue can)',
                    'Believing all leaf cells photosynthesize (guard cells, epidermal cells usually don\'t)',
                    'Assuming chloroplasts are only in plants (algae and some protists have them)'
                ]
            }
        };

        this.clarificationStrategies = {
            visual_comparison: {
                method: 'Use side-by-side diagrams to highlight differences',
                effectiveness: 'High for structural and process comparisons'
            },
            analogy: {
                method: 'Relate plant concepts to familiar everyday examples',
                effectiveness: 'High for abstract concepts'
            },
            step_by_step: {
                method: 'Break down complex processes into sequential steps',
                effectiveness: 'High for understanding processes'
            },
            contrast_table: {
                method: 'Create comparison tables showing key differences',
                effectiveness: 'High for distinguishing similar concepts'
            }
        };
    }

initializeExplanationTemplates() {
        this.explanationStyles = {
            structural: {
                focus: 'Physical organization and components',
                language: 'descriptive and spatial'
            },
            functional: {
                focus: 'Purpose and mechanisms of action',
                language: 'process-oriented and causal'
            },
            comparative: {
                focus: 'Similarities and differences between concepts',
                language: 'contrastive and analytical'
            },
            ecological: {
                focus: 'Environmental interactions and adaptations',
                language: 'adaptive and contextual'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential information only',
                examples: 'concrete and familiar'
            },
            intermediate: {
                vocabulary: 'standard botanical terms',
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

    // MAIN HANDLER METHOD
    handlePlantProblem(config) {
        const { topic, parameters, subTopic, context } = config;

        try {
            // Parse the plant biology query
            this.currentProblem = this.parsePlantProblem(topic, parameters, subTopic, context);

            // Get content based on topic
            this.currentContent = this.getPlantContent(this.currentProblem);

            // Generate content steps/sections
            this.contentSteps = this.generatePlantContent(this.currentProblem, this.currentContent);

            // Generate diagram data if applicable
            this.generatePlantDiagramData();

            // Generate workbook
            this.generatePlantWorkbook();

            return {
                workbook: this.currentWorkbook,
                content: this.currentContent,
                diagrams: this.diagramData
            };

        } catch (error) {
            throw new Error(`Failed to process plant biology topic: ${error.message}`);
        }
    }

    parsePlantProblem(topic, parameters = {}, subTopic = null, context = {}) {
        let topicType = null;

        // Match topic to handler
        for (const [type, config] of Object.entries(this.plantTopics)) {
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
            throw new Error(`Unable to recognize plant biology topic: ${topic}`);
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

    getPlantContent(problem) {
        const handler = this.plantTopics[problem.type]?.handler;
        if (!handler) {
            throw new Error(`No handler available for plant biology topic: ${problem.type}`);
        }

        return handler(problem);
    }

    // TOPIC HANDLERS - Each returns structured plant biology content

    handlePlantStructure(problem) {
        const { subTopic, parameters } = problem;

        const organsList = [
            {
                name: "Root",
                type: "Underground organ",
                mainFunctions: [
                    "Anchorage: holds plant firmly in soil",
                    "Absorption: takes up water and dissolved minerals",
                    "Conduction: transports water and minerals to stem",
                    "Storage: stores food and nutrients"
                ],
                types: {
                    taproot: {
                        description: "One main primary root growing downward",
                        characteristics: ["Deep penetration", "Strong anchorage", "Efficient water access"],
                        examples: ["Carrot", "Radish", "Dandelion", "Most dicots"]
                    },
                    fibrousRoot: {
                        description: "Network of similar-sized roots from stem base",
                        characteristics: ["Shallow spreading", "Extensive surface area", "Erosion control"],
                        examples: ["Grass", "Wheat", "Rice", "Most monocots"]
                    },
                    adventitious: {
                        description: "Roots arising from stem or leaves",
                        characteristics: ["Not from primary root", "Various origins", "Specialized functions"],
                        examples: ["Prop roots (corn)", "Aerial roots (ivy)", "Climbing roots"]
                    }
                },
                zones: [
                    {
                        name: "Root Cap",
                        location: "Tip of root",
                        function: "Protects apical meristem as root pushes through soil",
                        characteristics: "Secretes mucilage, cells constantly replaced"
                    },
                    {
                        name: "Zone of Cell Division (Apical Meristem)",
                        location: "Just behind root cap",
                        function: "Produces new cells through mitosis",
                        characteristics: "Actively dividing cells, undifferentiated"
                    },
                    {
                        name: "Zone of Elongation",
                        location: "Above meristem",
                        function: "Cells elongate rapidly, pushing root forward",
                        characteristics: "Most rapid growth region, cells lengthening"
                    },
                    {
                        name: "Zone of Maturation",
                        location: "Upper region",
                        function: "Cells differentiate into specialized tissues, root hairs form",
                        characteristics: "Root hairs for absorption, vascular tissue functional"
                    }
                ],
                modifications: [
                    "Storage roots: enlarged for food storage (sweet potato, carrot)",
                    "Prop roots: provide additional support (corn, mangroves)",
                    "Pneumatophores: aerial roots for gas exchange in swamps",
                    "Climbing roots: attach to surfaces (ivy)",
                    "Contractile roots: pull plant deeper into soil (bulbs)"
                ],
                diagram: "root_structure_zones"
            },
            {
                name: "Stem",
                type: "Above-ground organ",
                mainFunctions: [
                    "Support: holds leaves, flowers, and fruits in favorable positions",
                    "Conduction: transports water, minerals, and sugars",
                    "Storage: stores food and water in some species",
                    "Photosynthesis: green stems can photosynthesize"
                ],
                structure: {
                    nodes: "Points where leaves attach",
                    internodes: "Segments between nodes",
                    axillaryBuds: "Buds in leaf axils that can form branches",
                    terminalBud: "Bud at stem tip for primary growth",
                    lenticels: "Pores for gas exchange in woody stems"
                },
                types: {
                    herbaceous: {
                        description: "Soft, green, non-woody stems",
                        characteristics: ["Flexible", "Little or no secondary growth", "Annual or perennial"],
                        examples: ["Tomato", "Sunflower", "Grass"]
                    },
                    woody: {
                        description: "Hard, rigid stems with secondary growth",
                        characteristics: ["Bark formation", "Wood (secondary xylem)", "Perennial"],
                        examples: ["Trees", "Shrubs", "Woody vines"]
                    }
                },
                arrangement: {
                    erect: "Grows upright (most trees and herbs)",
                    prostrate: "Grows along ground (strawberry runners)",
                    climbing: "Uses support structures (vines, lianas)",
                    underground: "Modified for storage (rhizomes, tubers)"
                },
                modifications: [
                    "Rhizome: horizontal underground stem (ginger, iris)",
                    "Tuber: enlarged underground stem for storage (potato)",
                    "Bulb: short stem with fleshy leaves (onion, tulip)",
                    "Corm: short, vertical underground stem (gladiolus)",
                    "Stolon (runner): horizontal above-ground stem (strawberry)",
                    "Tendril: modified stem for climbing (grape)",
                    "Thorn: modified stem for defense (hawthorn)",
                    "Cladode: flattened photosynthetic stem (asparagus)"
                ],
                diagram: "stem_structure_types"
            },
            {
                name: "Leaf",
                type: "Primary photosynthetic organ",
                mainFunctions: [
                    "Photosynthesis: produces glucose using light energy",
                    "Gas exchange: CO₂ intake and O₂ release through stomata",
                    "Transpiration: water loss creating pull for transport",
                    "Food storage: in some modified leaves"
                ],
                parts: {
                    blade: {
                        description: "Flat, expanded portion",
                        function: "Main photosynthetic surface",
                        characteristics: "Broad and thin for maximum light capture"
                    },
                    petiole: {
                        description: "Stalk connecting blade to stem",
                        function: "Positions leaf for optimal light",
                        characteristics: "Flexible, contains vascular tissue"
                    },
                    stipules: {
                        description: "Small leaf-like structures at base",
                        function: "Protection, photosynthesis (sometimes)",
                        characteristics: "Present in some species, can be modified"
                    },
                    veins: {
                        description: "Vascular bundles in blade",
                        function: "Transport water, minerals, sugars; provide support",
                        patterns: ["Parallel (monocots)", "Netted/reticulate (dicots)"]
                    }
                },
                types: {
                    simple: {
                        description: "Single, undivided blade",
                        examples: ["Oak", "Maple", "Apple"]
                    },
                    compound: {
                        description: "Blade divided into leaflets",
                        types: {
                            pinnate: "Leaflets along central axis (rose, ash)",
                            palmate: "Leaflets radiating from one point (horse chestnut)"
                        }
                    }
                },
                arrangement: {
                    alternate: "One leaf per node",
                    opposite: "Two leaves per node",
                    whorled: "Three or more leaves per node"
                },
                modifications: [
                    "Spines: defense, water conservation (cactus)",
                    "Tendrils: climbing support (pea)",
                    "Storage leaves: food storage (onion bulb)",
                    "Bracts: colorful, attract pollinators (poinsettia)",
                    "Insectivorous leaves: trap and digest insects (Venus flytrap)",
                    "Scale leaves: protection (bud scales)"
                ],
                diagram: "leaf_structure_types"
            }
        ];

        const tissueSystems = {
            dermal: {
                name: "Dermal Tissue System",
                location: "Outermost layer covering plant body",
                components: {
                    epidermis: {
                        description: "Outer protective layer",
                        characteristics: [
                            "Single layer of cells",
                            "Cuticle (waxy coating) on surface",
                            "Contains stomata (in leaves and green stems)",
                            "No chloroplasts (except guard cells)",
                            "Tightly packed cells"
                        ],
                        functions: ["Protection from water loss", "Protection from pathogens", "Gas exchange (via stomata)"]
                    },
                    periderm: {
                        description: "Secondary protective tissue in woody plants",
                        components: ["Cork (phellem)", "Cork cambium (phellogen)", "Phelloderm"],
                        functions: ["Replaces epidermis in older stems and roots", "Protection", "Reduces water loss"],
                        characteristics: "Forms bark in trees"
                    }
                },
                specializedCells: {
                    guardCells: "Control stomatal opening/closing",
                    trichomes: "Hair-like structures for defense/reduce water loss",
                    rootHairs: "Extensions increasing absorption surface area"
                }
            },
            vascular: {
                name: "Vascular Tissue System",
                location: "Throughout plant body, forms continuous system",
                components: {
                    xylem: {
                        description: "Water and mineral transport tissue",
                        cellTypes: {
                            tracheids: "Long, tapered cells with pits (all vascular plants)",
                            vesselElements: "Shorter, wider cells forming vessels (angiosperms)",
                            xylemParenchyma: "Living cells for storage",
                            xylemFibers: "Support cells"
                        },
                        characteristics: [
                            "Dead cells at maturity (except parenchyma)",
                            "Thick, lignified walls",
                            "Hollow cells forming tubes",
                            "Unidirectional flow (roots to leaves)"
                        ],
                        functions: ["Transport water and minerals upward", "Mechanical support"]
                    },
                    phloem: {
                        description: "Sugar and organic compound transport tissue",
                        cellTypes: {
                            sieveElements: "Conducting cells (sieve tube members in angiosperms)",
                            companionCells: "Metabolic support for sieve tube members",
                            phloemParenchyma: "Storage cells",
                            phloemFibers: "Support cells"
                        },
                        characteristics: [
                            "Living cells at maturity",
                            "Thin cell walls",
                            "Sieve plates between cells",
                            "Bidirectional flow (source to sink)"
                        ],
                        functions: ["Transport sugars and organic compounds", "Bidirectional movement"]
                    }
                },
                arrangement: {
                    vascularBundles: "Xylem and phloem grouped together",
                    patterns: {
                        dicot: "Arranged in ring in stem, scattered in some roots",
                        monocot: "Scattered throughout stem"
                    }
                }
            },
            ground: {
                name: "Ground Tissue System",
                location: "Between dermal and vascular tissues",
                regions: {
                    cortex: "Between epidermis and vascular tissue (mainly in roots and stems)",
                    pith: "Central region inside vascular tissue (in stems)",
                    mesophyll: "Interior tissue of leaves (palisade and spongy layers)"
                },
                cellTypes: {
                    parenchyma: {
                        description: "Most common, living cells with thin walls",
                        functions: ["Photosynthesis", "Storage", "Secretion", "Tissue repair"],
                        characteristics: "Large vacuoles, metabolically active",
                        locations: "Throughout plant, especially in cortex, pith, mesophyll"
                    },
                    collenchyma: {
                        description: "Living cells with unevenly thickened walls",
                        functions: ["Flexible support for growing regions", "Structural support"],
                        characteristics: "Elongated cells, thickened corners",
                        locations: "Below epidermis in stems, leaf petioles"
                    },
                    sclerenchyma: {
                        description: "Dead cells with thick, lignified walls",
                        types: {
                            fibers: "Long, slender cells (hemp, flax)",
                            sclereids: "Shorter, irregular cells (stone cells in pear)"
                        },
                        functions: ["Rigid support and protection", "Give hardness to structures"],
                        characteristics: "Dead at maturity, very thick walls",
                        locations: "Throughout plant body, especially in mature tissues"
                    }
                }
            }
        };

        return {
            topic: "Plant Structure and Organization",
            organs: organsList,
            tissueSystems: tissueSystems,
            organizationLevels: {
                organ: "Root, stem, leaf",
                tissueSystem: "Dermal, vascular, ground",
                tissue: "Groups of similar cells",
                cell: "Basic unit of structure and function"
            },
            monocotVsDicot: {
                criteria: ["Root type", "Vascular bundle arrangement", "Leaf venation", "Flower parts", "Cotyledons"],
                monocot: ["Fibrous", "Scattered in stem", "Parallel", "Multiples of 3", "One"],
                dicot: ["Taproot", "Ring in stem", "Netted", "Multiples of 4 or 5", "Two"]
            },
            category: 'plant_structure'
        };
    }

handlePlantTransport(problem) {
        return {
            topic: "Transport in Plants",
            transportSystems: {
                xylem: {
                    name: "Xylem Transport",
                    what: "Water and dissolved minerals",
                    direction: "Unidirectional (roots → leaves)",
                    cells: "Tracheids and vessel elements (dead at maturity)",
                    mechanism: {
                        transpiration: {
                            description: "Loss of water vapor from leaves through stomata",
                            process: [
                                "Water evaporates from mesophyll cells",
                                "Water vapor exits through stomata",
                                "Creates negative pressure (tension) in xylem",
                                "Pulls water column upward from roots"
                            ],
                            importance: "Primary driving force for water movement",
                            factors: ["Light", "Temperature", "Humidity", "Wind", "Stomatal aperture"]
                        },
                        cohesionTension: {
                            description: "Water molecules stick together and to xylem walls",
                            cohesion: "Water molecules attract each other (hydrogen bonds)",
                            adhesion: "Water molecules attract to xylem walls",
                            tension: "Negative pressure created by transpiration",
                            result: "Continuous water column pulled upward"
                        },
                        rootPressure: {
                            description: "Positive pressure pushing water upward",
                            mechanism: "Active transport of minerals into root xylem → water follows by osmosis",
                            contribution: "Minor role, mainly at night when transpiration is low",
                            evidence: "Guttation (water droplets on leaf edges at dawn)"
                        }
                    },
                    pathway: [
                        "Soil → Root hairs (absorption)",
                        "Root cortex → Endodermis (Casparian strip blocks apoplast)",
                        "Root xylem (enters vascular tissue)",
                        "Stem xylem (upward transport)",
                        "Leaf xylem → Mesophyll cells",
                        "Evaporation from leaf surfaces"
                    ],
                    rate: "Can reach 75 cm/minute in tall trees",
                    diagram: "xylem_transport_mechanism"
                },
                phloem: {
                    name: "Phloem Transport (Translocation)",
                    what: "Sugars (mainly sucrose) and organic compounds",
                    direction: "Bidirectional (source → sink)",
                    cells: "Sieve tube members and companion cells (living)",
                    mechanism: {
                        pressureFlow: {
                            description: "Movement driven by pressure differences between source and sink",
                            steps: [
                                "SOURCE: Sugars actively loaded into phloem (leaves, storage organs)",
                                "Water follows by osmosis → high pressure at source",
                                "SINK: Sugars unloaded from phloem (roots, fruits, growing tissues)",
                                "Water leaves → low pressure at sink",
                                "Pressure gradient drives bulk flow from source to sink"
                            ],
                            energy: "Requires ATP for active loading/unloading",
                            speed: "Slower than xylem, typically 20-150 cm/hour"
                        }
                    },
                    sourceVsSink: {
                        source: {
                            definition: "Region producing or releasing sugars",
                            examples: ["Mature leaves (photosynthesis)", "Storage organs releasing reserves (germinating seeds)"],
                            activity: "Sugar loading into phloem"
                        },
                        sink: {
                            definition: "Region consuming or storing sugars",
                            examples: ["Roots", "Fruits", "Seeds", "Young leaves", "Flowers", "Storage organs"],
                            activity: "Sugar unloading from phloem"
                        },
                        note: "Same organ can be source or sink at different times (e.g., storage root)"
                    },
                    pathway: [
                        "Source tissue (e.g., leaf mesophyll)",
                        "Active loading into companion cells and sieve tubes",
                        "Bulk flow through phloem",
                        "Unloading at sink tissues",
                        "Utilization or storage"
                    ],
                    diagram: "phloem_transport_mechanism"
                }
            },
            comparison: {
                headers: ["Feature", "Xylem", "Phloem"],
                data: [
                    ["Material transported", "Water, minerals", "Sugars, amino acids, hormones"],
                    ["Direction", "Unidirectional (up)", "Bidirectional (source to sink)"],
                    ["Cell type", "Tracheids, vessels (dead)", "Sieve tubes, companion cells (living)"],
                    ["Driving force", "Transpiration pull, cohesion-tension", "Pressure flow (osmotic pressure)"],
                    ["Energy required", "No (passive)", "Yes (ATP for loading/unloading)"],
                    ["Speed", "Fast (up to 75 cm/min)", "Slower (20-150 cm/hour)"],
                    ["Cell walls", "Thick, lignified", "Thin, cellulose"]
                ]
            },
            stomatalRegulation: {
                description: "Guard cells control stomatal opening to balance CO₂ uptake and water loss",
                openingMechanism: [
                    "Light triggers K⁺ uptake by guard cells",
                    "Water follows by osmosis",
                    "Guard cells become turgid and curve",
                    "Stomatal pore opens"
                ],
                closingMechanism: [
                    "Dark or water stress triggers K⁺ loss",
                    "Water leaves by osmosis",
                    "Guard cells become flaccid",
                    "Stomatal pore closes"
                ],
                regulation: {
                    hormones: "Abscisic acid (ABA) closes stomata during drought",
                    CO2: "High internal CO₂ promotes closing",
                    light: "Blue light promotes opening",
                    circadianRhythm: "Daily opening/closing pattern"
                }
            },
            factors: {
                affectingTranspiration: [
                    "Light intensity: more light → more transpiration",
                    "Temperature: higher temperature → more evaporation",
                    "Humidity: lower humidity → more transpiration",
                    "Wind: more wind → more transpiration (removes humid air)",
                    "Soil water: less available water → stomata close"
                ],
                affectingTranslocation: [
                    "Source strength: photosynthetic rate",
                    "Sink strength: growth rate, storage capacity",
                    "Temperature: affects metabolic loading/unloading",
                    "Phloem connectivity and capacity"
                ]
            },
            category: 'plant_transport'
        };
    }

    handlePlantReproduction(problem) {
        return {
            topic: "Plant Reproduction",
            sexualReproduction: {
                flowerStructure: {
                    description: "Reproductive structure of angiosperms",
                    parts: {
                        receptacle: "Base where flower parts attach",
                        sepals: {
                            description: "Outermost whorl, typically green",
                            collective: "Calyx",
                            function: "Protect flower bud"
                        },
                        petals: {
                            description: "Colorful whorl inside sepals",
                            collective: "Corolla",
                            function: "Attract pollinators"
                        },
                        stamens: {
                            description: "Male reproductive parts",
                            collective: "Androecium",
                            parts: {
                                filament: "Stalk",
                                anther: "Pollen-producing structure containing microsporangia"
                            },
                            produces: "Pollen grains (male gametophytes)"
                        },
                        carpels: {
                            description: "Female reproductive parts",
                            collective: "Gynoecium (pistil if fused)",
                            parts: {
                                stigma: "Sticky surface receiving pollen",
                                style: "Connects stigma to ovary",
                                ovary: "Contains ovules"
                            },
                            produces: "Ovules (containing female gametophytes)"
                        }
                    },
                    flowerTypes: {
                        complete: "Has all four whorls (sepals, petals, stamens, carpels)",
                        incomplete: "Missing one or more whorls",
                        perfect: "Has both stamens and carpels (bisexual)",
                        imperfect: "Has either stamens or carpels, not both (unisexual)"
                    },
                    diagram: "flower_structure"
                },
                pollination: {
                    definition: "Transfer of pollen from anther to stigma",
                    types: {
                        selfPollination: {
                            description: "Pollen from same flower or same plant",
                            advantages: ["Ensures reproduction when pollinators scarce", "Preserves successful gene combinations"],
                            disadvantages: ["Reduces genetic variation", "Can accumulate harmful mutations"]
                        },
                        crossPollination: {
                            description: "Pollen from different plant of same species",
                            advantages: ["Increases genetic variation", "Produces stronger offspring", "Evolutionary adaptation"],
                            disadvantages: ["Depends on pollinators or wind", "Less reliable"]
                        }
                    },
                    agents: {
                        insects: {
                            description: "Bees, butterflies, moths, beetles",
                            flowerAdaptations: ["Bright colors", "Sweet nectar", "Strong scent", "Landing platforms"],
                            examples: "Most flowering plants"
                        },
                        wind: {
                            description: "Pollen carried by air currents",
                            flowerAdaptations: ["Small, dull flowers", "No nectar", "Large amounts of light pollen", "Feathery stigmas"],
                            examples: "Grasses, oaks, pines"
                        },
                        animals: {
                            description: "Birds, bats, small mammals",
                            flowerAdaptations: ["Large, colorful", "Abundant nectar", "Strong structure"],
                            examples: "Hummingbird flowers, bat-pollinated cacti"
                        },
                        water: {
                            description: "Pollen floats on water",
                            examples: "Aquatic plants like eelgrass"
                        }
                    },
                    diagram: "pollination_types"
                },
                fertilization: {
                    doubleFertilization: {
                        description: "Unique to flowering plants - two fertilization events",
                        steps: [
                            "Pollen grain lands on stigma",
                            "Pollen tube grows through style to ovary",
                            "Pollen tube enters ovule through micropyle",
                            "Two sperm cells released from pollen tube",
                            "FIRST FERTILIZATION: One sperm + egg → zygote (2n) → embryo",
                            "SECOND FERTILIZATION: Second sperm + two polar nuclei → endosperm (3n) → food for embryo"
                        ],
                        significance: "Produces both embryo and nutritive tissue (endosperm)",
                        unique: "Only in angiosperms (flowering plants)"
                    },
                    alternationOfGenerations: {
                        description: "Life cycle alternates between diploid sporophyte and haploid gametophyte",
                        sporophyte: {
                            ploidy: "Diploid (2n)",
                            description: "Dominant, visible plant",
                            produces: "Spores through meiosis"
                        },
                        gametophyte: {
                            ploidy: "Haploid (n)",
                            description: "Microscopic, dependent on sporophyte in flowering plants",
                            male: "Pollen grain",
                            female: "Embryo sac in ovule",
                            produces: "Gametes through mitosis"
                        }
                    },
                    diagram: "double_fertilization"
                },
                seedDevelopment: {
                    description: "Ovule develops into seed after fertilization",
                    seedParts: {
                        embryo: {
                            description: "Young plant developed from zygote",
                            parts: {
                                radicle: "Embryonic root",
                                hypocotyl: "Embryonic stem below cotyledons",
                                epicotyl: "Embryonic stem above cotyledons (forms plumule)",
                                cotyledons: "Seed leaves (one in monocots, two in dicots)"
                            }
                        },
                        endosperm: {
                            description: "Nutritive tissue (3n) for embryo",
                            fate: {
                                monocots: "Remains in mature seed (corn, wheat)",
                                dicots: "Often absorbed by cotyledons (beans, peas)"
                            }
                        },
                        seedCoat: {
                            description: "Protective outer covering",
                            origin: "Develops from integuments of ovule",
                            function: "Protection from damage, desiccation, pathogens"
                        }
                    },
                    dormancy: {
                        description: "Period of suspended development",
                        causes: ["Hard seed coat", "Chemical inhibitors", "Immature embryo"],
                        breakingDormancy: ["Cold stratification", "Scarification", "Light exposure", "Fire"],
                        advantage: "Delays germination until favorable conditions"
                    },
                    diagram: "seed_structure"
                },
                fruitDevelopment: {
                    description: "Ovary develops into fruit after fertilization",
                    function: ["Protect seeds", "Aid seed dispersal"],
                    types: {
                        simple: {
                            description: "From one ovary of one flower",
                            types: {
                                fleshy: "Juicy (tomato, grape, peach)",
                                dry: "Hard (nut, grain, pod)"
                            }
                        },
                        aggregate: {
                            description: "From many ovaries of one flower",
                            examples: "Strawberry, raspberry"
                        },
                        multiple: {
                            description: "From ovaries of many flowers fused together",
                            examples: "Pineapple, fig"
                        }
                    },
                    dispersal: {
                        wind: "Light, with wings or hairs (maple, dandelion)",
                        animals: "Fleshy, edible, or hooks/burrs (berries, cocklebur)",
                        water: "Buoyant, waterproof (coconut)",
                        explosive: "Pod bursts open (touch-me-not, lupine)"
                    },
                    diagram: "fruit_types_dispersal"
                }
            },
            asexualReproduction: {
                description: "Production of new individuals without gamete fusion",
                advantages: ["Rapid reproduction", "No need for pollinator", "Preserves successful genotypes", "Colonizes new areas quickly"],
                disadvantages: ["No genetic variation", "All susceptible to same diseases", "No adaptation to changing environment"],
                naturalMethods: {
                    vegetativePropagation: {
                        description: "New plants from vegetative parts",
                        types: {
                            runners: "Horizontal stems above ground producing new plants (strawberry)",
                            rhizomes: "Horizontal underground stems (ginger, iris)",
                            tubers: "Enlarged underground stems storing food (potato)",
                            bulbs: "Short stems with fleshy leaves (onion, tulip)",
                            corms: "Short, vertical underground stems (gladiolus)",
                            suckers: "Shoots from roots or base of stem (raspberry, aspen)",
                            plantlets: "Small plants forming on leaves (kalanchoe, spider plant)"
                        }
                    },
                    fragmentation: {
                        description: "Pieces of plant break off and grow into new individuals",
                        examples: "Liverworts, mosses, some succulents"
                    },
                    apomixis: {
                        description: "Seeds produced without fertilization",
                        examples: "Some grasses, dandelions, citrus"
                    }
                },
                artificialMethods: {
                    cuttings: {
                        description: "Stem, leaf, or root pieces placed in soil or water",
                        process: "Auxin application promotes root development",
                        examples: "Roses, geraniums, African violets"
                    },
                    grafting: {
                        description: "Joining parts of two plants",
                        parts: {
                            scion: "Upper part (desired variety)",
                            stock: "Lower part with roots (hardy rootstock)"
                        },
                        advantages: ["Combines desirable traits", "Faster fruit production", "Disease resistance"],
                        examples: "Fruit trees, roses"
                    },
                    layering: {
                        description: "Stem induced to form roots while still attached to parent",
                        types: ["Air layering", "Ground layering"],
                        examples: "Raspberries, blackberries"
                    },
                    tissueCulture: {
                        description: "Growing new plants from small tissue pieces in sterile conditions",
                        advantages: ["Rapid mass production", "Disease-free plants", "Preserve rare species"],
                        process: "Meristem tissue + growth medium + hormones → plantlets",
                        examples: "Orchids, bananas, many commercial plants"
                    }
                },
                diagram: "asexual_reproduction_methods"
            },
            germination: {
                description: "Process where embryo breaks dormancy and begins growth",
                requirements: ["Water (imbibition)", "Oxygen (aerobic respiration)", "Appropriate temperature", "Sometimes light"],
                stages: [
                    "Imbibition: seed absorbs water, swells",
                    "Activation: enzymes activated, metabolism resumes",
                    "Radicle emergence: embryonic root breaks through seed coat",
                    "Seedling establishment: cotyledons emerge, photosynthesis begins"
                ],
                types: {
                    epigeal: {
                        description: "Cotyledons pushed above ground",
                        mechanism: "Hypocotyl elongates",
                        examples: "Bean, sunflower"
                    },
                    hypogeal: {
                        description: "Cotyledons remain below ground",
                        mechanism: "Epicotyl elongates",
                        examples: "Pea, corn, oak"
                    }
                },
                diagram: "germination_types"
            },
            category: 'plant_reproduction'
        };
    }

    handlePlantHormones(problem) {
        return {
            topic: "Plant Hormones and Growth Regulators",
            definition: "Chemical messengers produced in small quantities that regulate plant growth, development, and responses",
            characteristics: [
                "Produced in one location, active in another",
                "Effective at very low concentrations",
                "Multiple hormones often interact",
                "Same hormone can have different effects in different tissues or concentrations"
            ],
            majorHormones: {
                auxin: {
                    name: "Auxin (Indole-3-Acetic Acid, IAA)",
                    chemicalStructure: "Indole ring with acetic acid side chain",
                    synthesis: "Shoot apical meristem, young leaves, developing seeds",
                    transport: "Polar (basipetal - tip to base), cell-to-cell",
                    effects: {
                        promotion: [
                            "Cell elongation in stems (acid growth hypothesis)",
                            "Root initiation and development",
                            "Vascular tissue differentiation",
                            "Fruit development (parthenocarpy)",
                            "Apical dominance (suppresses lateral buds)"
                        ],
                        inhibition: [
                            "Lateral bud growth (apical dominance)",
                            "Leaf abscission (high concentrations)",
                            "Root growth (high concentrations)"
                        ]
                    },
                    mechanism: {
                        acidGrowthHypothesis: [
                            "Auxin stimulates H⁺ pump in plasma membrane",
                            "H⁺ ions pumped into cell wall",
                            "Low pH activates expansins (wall-loosening proteins)",
                            "Cell wall loosens, cell elongates due to turgor pressure"
                        ]
                    },
                    applications: [
                        "Rooting powder for cuttings",
                        "Prevent premature fruit drop",
                        "Seedless fruit production",
                        "Herbicides (synthetic auxins like 2,4-D)"
                    ],
                    phototropism: "Unequal distribution causes bending toward light",
                    diagram: "auxin_effects"
                },
                gibberellin: {
                    name: "Gibberellin (GA)",
                    chemicalStructure: "Complex ring structure",
                    synthesis: "Young tissues (shoots, roots, seeds, fruits)",
                    transport: "Non-polar (xylem and phloem)",
                    effects: [
                        "Stem elongation (internodal growth)",
                        "Seed germination (mobilizes stored food)",
                        "Breaking dormancy",
                        "Flowering in long-day plants",
                        "Fruit development",
                        "Delays senescence"
                    ],
                    mechanism: {
                        seedGermination: [
                            "Embryo produces GA",
                            "GA diffuses to aleurone layer",
                            "Stimulates synthesis of α-amylase",
                            "α-amylase breaks down starch to sugars",
                            "Sugars fuel embryo growth"
                        ],
                        stemElongation: [
                            "Promotes cell division in intercalary meristem",
                            "Stimulates cell elongation",
                            "Particularly affects genetically dwarf plants"
                        ]
                    },
                    applications: [
                        "Brewing industry (barley germination)",
                        "Seedless grape production",
                        "Increase stem length in ornamentals",
                        "Break dormancy in seeds and buds"
                    ],
                    discovery: "First discovered in fungus causing excessive growth in rice",
                    diagram: "gibberellin_effects"
                },
                cytokinin: {
                    name: "Cytokinin",
                    chemicalStructure: "Adenine derivative",
                    synthesis: "Root apical meristem, developing seeds and fruits",
                    transport: "Xylem (roots to shoots)",
                    effects: [
                        "Promotes cell division (cytokinesis)",
                        "Delays leaf senescence (aging)",
                        "Promotes chloroplast development",
                        "Stimulates lateral bud growth (with auxin)",
                        "Promotes nutrient mobilization",
                        "Overcomes apical dominance (antagonizes auxin)"
                    ],
                    interaction: {
                        withAuxin: {
                            description: "Ratio determines developmental pathway",
                            highCytokininLowAuxin: "Shoot development",
                            lowCytokininHighAuxin: "Root development",
                            equalRatio: "Undifferentiated callus tissue"
                        }
                    },
                    applications: [
                        "Tissue culture (shoot formation)",
                        "Delay senescence in cut flowers and vegetables",
                        "Increase branching in ornamentals",
                        "Break dormancy"
                    ],
                    name: "Named for promoting cytokinesis",
                    diagram: "cytokinin_effects"
                },
                abscisicAcid: {
                    name: "Abscisic Acid (ABA)",
                    chemicalStructure: "Terpenoid",
                    synthesis: "Mature leaves, roots, stems, seeds",
                    transport: "Xylem and phloem",
                    effects: [
                        "Induces and maintains seed dormancy",
                        "Promotes stomatal closure during water stress",
                        "Inhibits shoot growth",
                        "Promotes stress tolerance",
                        "Inhibits germination",
                        "Promotes storage protein synthesis in seeds"
                    ],
                    mechanism: {
                        stomatalClosure: [
                            "Water stress triggers ABA synthesis in roots and leaves",
                            "ABA causes K⁺ efflux from guard cells",
                            "Water follows by osmosis",
                            "Guard cells lose turgor and stomata close",
                            "Reduces water loss"
                        ],
                        dormancy: [
                            "High ABA levels maintain seed dormancy",
                            "Cold or other signals reduce ABA",
                            "GA levels increase",
                            "Germination proceeds"
                        ]
                    },
                    applications: [
                        "Reduce transplant shock",
                        "Increase drought tolerance",
                        "Synchronize seed germination (by removal)"
                    ],
                    stress: "Called 'stress hormone' due to role in stress responses",
                    diagram: "aba_effects"
                },
                ethylene: {
                    name: "Ethylene (C₂H₄)",
                    chemicalStructure: "Simple gas (H₂C=CH₂)",
                    synthesis: "Ripening fruits, senescing tissues, stressed tissues",
                    transport: "Diffuses through air spaces",
                    effects: [
                        "Promotes fruit ripening",
                        "Promotes leaf and flower abscission",
                        "Inhibits stem elongation (promotes radial expansion)",
                        "Promotes senescence",
                        "Stimulates flowering in some plants",
                        "Response to stress (flooding, wounding)"
                    ],
                    mechanism: {
                        fruitRipening: [
                            "Climacteric fruits produce ethylene surge",
                            "Ethylene triggers ripening cascade",
                            "Starch → sugar conversion",
                            "Chlorophyll breakdown (color change)",
                            "Cell wall softening",
                            "More ethylene produced (positive feedback)"
                        ],
                        tripleResponse: [
                            "In seedlings encountering obstacle",
                            "Inhibits stem elongation",
                            "Promotes radial swelling",
                            "Causes horizontal growth"
                        ]
                    },
                    applications: [
                        "Ripen fruits commercially (bananas, tomatoes)",
                        "De-green citrus",
                        "Promote flowering in pineapples",
                        "Inhibit ethylene to delay ripening (storage)"
                    ],
                    uniqueness: "Only gaseous plant hormone",
                    diagram: "ethylene_effects"
                }
            },
            hormoneInteractions: {
                auxinCytokinkinRatio: {
                    description: "Determines organ development in tissue culture",
                    highAuxin: "Root formation",
                    highCytokinin: "Shoot formation",
                    balanced: "Callus (undifferentiated tissue)"
                },
                auxinEthylene: {
                    description: "Work together in fruit ripening and abscission",
                    interaction: "Auxin delays abscission; ethylene promotes it"
                },
                GAandABA: {
                    description: "Antagonistic in seed germination",
                    GA: "Promotes germination",
                    ABA: "Maintains dormancy"
                },
                apicalDominance: {
                    description: "Auxin from apical bud suppresses lateral buds; cytokinins promote them",
                    removeApex: "Removes auxin source → lateral buds grow (pruning effect)"
                }
            },
            comparisonTable: {
                headers: ["Hormone", "Main Sources", "Primary Effects", "Growth", "Applications"],
                data: [
                    ["Auxin", "Shoot tips, young leaves", "Cell elongation, apical dominance, root initiation", "Promotes", "Rooting, herbicides"],
                    ["Gibberellin", "Young tissues, seeds", "Stem elongation, germination, flowering", "Promotes", "Seed germination, brewing"],
                    ["Cytokinin", "Roots, seeds", "Cell division, delays senescence", "Promotes", "Tissue culture, cut flowers"],
                    ["Abscisic Acid", "Mature leaves, roots", "Dormancy, stomatal closure, stress response", "Inhibits", "Drought tolerance"],
                    ["Ethylene", "Ripening fruits, stressed tissues", "Fruit ripening, senescence, abscission", "Inhibits (stems)", "Fruit ripening"]
                ]
            },
            category: 'plant_hormones'
        };
    }

    handleTropisms(problem) {
        return {
            topic: "Tropisms and Plant Movements",
            definition: "Growth responses where direction of growth is determined by direction of stimulus",
            characteristics: [
                "Directional growth responses",
                "Permanent changes (growth-based)",
                "Usually slow (hours to days)",
                "Mediated by differential growth rates",
                "Hormone-regulated (especially auxin)"
            ],
            majorTropisms: {
                phototropism: {
                    name: "Phototropism",
                    stimulus: "Light (direction)",
                    description: "Growth response to light direction",
                    types: {
                        positive: {
                            description: "Growth toward light",
                            examples: "Shoots, stems, leaves",
                            adaptive: "Maximizes light capture for photosynthesis"
                        },
                        negative: {
                            description: "Growth away from light",
                            examples: "Some roots",
                            adaptive: "Roots grow into soil"
                        }
                    },
                    mechanism: {
                        darwinExperiment: [
                            "Covered tip of grass seedling",
                            "No bending occurred",
                            "Concluded tip perceives light and sends signal downward"
                        ],
                        wentExperiment: [
                            "Isolated diffusible substance from tips (auxin)",
                            "Auxin alone could cause bending"
                        ],
                        modernUnderstanding: [
                            "Blue light photoreceptors (phototropins) in shoot tip",
                            "Light causes auxin redistribution to shaded side",
                            "Shaded side has more auxin → more cell elongation",
                            "Unequal growth causes bending toward light"
                        ]
                    },
                    receptors: "Phototropins (blue light receptors)",
                    adaptiveValue: "Optimizes light exposure for photosynthesis",
                    diagram: "phototropism_mechanism"
                },
                gravitropism: {
                    name: "Gravitropism (Geotropism)",
                    stimulus: "Gravity (direction)",
                    description: "Growth response to gravity",
                    types: {
                        positive: {
                            description: "Growth toward gravity (downward)",
                            examples: "Primary roots",
                            adaptive: "Anchors plant, accesses water and minerals"
                        },
                        negative: {
                            description: "Growth away from gravity (upward)",
                            examples: "Shoots, stems",
                            adaptive: "Positions shoots for light capture"
                        },
                        diagravitropism: {
                            description: "Growth perpendicular to gravity (horizontal)",
                            examples: "Lateral roots and branches",
                            adaptive: "Spreads root and shoot systems"
                        }
                    },
                    mechanism: {
                        statolithTheory: [
                            "Specialized cells contain statoliths (dense starch-filled plastids)",
                            "Gravity causes statoliths to settle to bottom of cells",
                            "Pressure on cell membrane triggers signal cascade",
                            "Auxin redistributed to lower side",
                            "In shoots: lower side grows faster → upward bending",
                            "In roots: lower side grows slower → downward bending (roots more sensitive to auxin)"
                        ],
                        location: {
                            shoots: "Statoliths in endodermis cells",
                            roots: "Statoliths in columella cells of root cap"
                        }
                    },
                    receptors: "Statoliths (amyloplasts) in specialized cells",
                    adaptiveValue: "Orients plant organs appropriately regardless of seed orientation",
                    spaceExperiments: "Plants in microgravity show disoriented growth, confirming gravity sensing",
                    diagram: "gravitropism_mechanism"
                },
                thigmotropism: {
                    name: "Thigmotropism",
                    stimulus: "Touch or physical contact",
                    description: "Growth response to contact with solid object",
                    examples: {
                        tendrils: {
                            description: "Modified stems or leaves that coil around supports",
                            mechanism: [
                                "Contact triggers differential growth",
                                "Cells on contact side grow slower",
                                "Cells on opposite side grow faster",
                                "Tendril coils around support"
                            ],
                            plants: "Peas, grapes, cucumbers, morning glory"
                        },
                        twining: {
                            description: "Stems wrap around supports",
                            examples: "Beans, bindweed, hops"
                        },
                        climbingRoots: {
                            description: "Roots attach to surfaces",
                            examples: "Ivy, climbing figs"
                        }
                    },
                    mechanism: {
                        rapidResponse: "Some tendrils coil within minutes of contact",
                        hormones: "Ethylene and auxin involved in differential growth",
                        cellElongation: "Unequal cell elongation on opposite sides causes coiling"
                    },
                    adaptiveValue: "Allows plants to climb and access light without investing in thick supportive stems",
                    diagram: "thigmotropism_tendril"
                },
                hydrotropism: {
                    name: "Hydrotropism",
                    stimulus: "Water (moisture gradient)",
                    description: "Growth response toward water",
                    examples: "Roots growing toward water source",
                    mechanism: [
                        "Root tip perceives moisture gradient",
                        "Auxin redistributes toward wetter side",
                        "Differential growth bends root toward water"
                    ],
                    interaction: "Can override gravitropism when water source is not directly below",
                    adaptiveValue: "Helps plants access water in heterogeneous soil",
                    diagram: "hydrotropism"
                },
                chemotropism: {
                    name: "Chemotropism",
                    stimulus: "Chemical gradient",
                    description: "Growth response toward or away from chemicals",
                    examples: {
                        pollenTube: {
                            description: "Grows toward ovule guided by chemicals",
                            chemicals: "Calcium ions, GABA, other attractants from ovule"
                        },
                        roots: {
                            description: "Can grow toward beneficial nutrients or away from toxins",
                            examples: "Toward nitrogen-rich areas, away from aluminum"
                        }
                    },
                    adaptiveValue: "Directs pollen tubes for fertilization; helps roots locate nutrients",
                    diagram: "chemotropism_pollen"
                },
                thermotropism: {
                    name: "Thermotropism",
                    stimulus: "Temperature gradient",
                    description: "Growth response to temperature differences",
                    examples: "Roots may grow toward warmer or cooler soil regions",
                    mechanism: "Poorly understood; likely involves hormone redistribution",
                    adaptiveValue: "Optimizes root zone temperature"
                }
            },
            nasticMovements: {
                description: "Non-directional responses to stimuli (not tropisms, but related movements)",
                types: {
                    photonasty: {
                        name: "Photonasty",
                        stimulus: "Light (presence/absence, not direction)",
                        examples: {
                            flowerOpening: "Many flowers open in day, close at night",
                            plants: "Morning glory, tulips, crocuses"
                        },
                        mechanism: "Differential growth rates on opposite sides of petals"
                    },
                    nyctinasty: {
                        name: "Nyctinasty (Sleep Movements)",
                        stimulus: "Day/night cycle (circadian rhythm)",
                        examples: {
                            leaves: "Legume leaves fold at night, unfold during day",
                            flowers: "Some flowers close at night",
                            plants: "Beans, clover, prayer plant"
                        },
                        mechanism: "Changes in turgor pressure in pulvinus (specialized cells at leaf base)",
                        adaptiveValue: "May reduce heat loss, prevent dew formation"
                    },
                    thigmonasty: {
                        name: "Thigmonasty (Seismonasty)",
                        stimulus: "Touch or vibration (non-directional)",
                        examples: {
                            mimosaPudica: {
                                description: "Sensitive plant - leaves fold when touched",
                                mechanism: [
                                    "Touch triggers electrical signal",
                                    "Rapid water loss from pulvinus cells",
                                    "Leaflets fold and petiole droops",
                                    "Recovery takes 15-30 minutes"
                                ],
                                adaptiveValue: "Deters herbivores, reduces water loss"
                            },
                            venusFlytrap: {
                                description: "Carnivorous plant closes on prey",
                                mechanism: [
                                    "Two trigger hairs must be touched within 20 seconds",
                                    "Electrical signal triggers rapid cell expansion",
                                    "Trap snaps shut in <1 second",
                                    "Digestion takes days"
                                ],
                                adaptiveValue: "Captures insects for nitrogen"
                            }
                        },
                        speed: "Can be very rapid (seconds)",
                        reversible: "Yes, after recovery period"
                    },
                    thermonasty: {
                        name: "Thermonasty",
                        stimulus: "Temperature change",
                        examples: "Tulip and crocus flowers open when warm, close when cold",
                        mechanism: "Differential growth rates of inner vs outer petal surfaces"
                    }
                },
                comparisonWithTropisms: {
                    tropisms: "Directional, growth-based, slow, permanent",
                    nasticMovements: "Non-directional, turgor-based (often), fast, reversible"
                }
            },
            category: 'tropisms'
        };
    }

    handlePlantAnatomy(problem) {
        return {
            topic: "Plant Anatomy and Tissue Organization",
            tissueSystems: {
                dermal: {
                    name: "Dermal Tissue System",
                    function: "Protection, regulation of gas exchange and water loss",
                    components: {
                        epidermis: {
                            description: "Primary dermal tissue, typically one cell layer thick",
                            characteristics: [
                                "Tightly packed cells with no intercellular spaces",
                                "Covered by cuticle (waxy layer)",
                                "Usually lacks chloroplasts (except guard cells)",
                                "Living cells at maturity"
                            ],
                            specializedCells: {
                                guardCells: {
                                    description: "Paired cells surrounding stomata",
                                    function: "Regulate stomatal opening/closing",
                                    features: "Contain chloroplasts, kidney-shaped, unevenly thickened walls"
                                },
                                trichomes: {
                                    description: "Hair-like outgrowths",
                                    types: ["Glandular (secretory)", "Non-glandular (protective)"],
                                    functions: ["Reduce water loss", "Reflect light", "Defense against herbivores", "Secrete substances"]
                                },
                                rootHairs: {
                                    description: "Extensions of epidermal cells",
                                    function: "Increase surface area for water and mineral absorption",
                                    lifespan: "Short-lived (days to weeks)"
                                }
                            },
                            modifications: {
                                cuticle: "Waxy layer reducing water loss",
                                stomata: "Pores for gas exchange",
                                lenticels: "Pores in woody stems for gas exchange"
                            }
                        },
                        periderm: {
                            description: "Secondary dermal tissue replacing epidermis in woody plants",
                            components: {
                                corkCambium: {
                                    description: "Lateral meristem producing cork",
                                    activity: "Produces cork cells outward, phelloderm cells inward"
                                },
                                cork: {
                                    description: "Dead cells with suberin-impregnated walls",
                                    function: "Protection, waterproofing",
                                    formation: "Replaces epidermis in older stems and roots"
                                },
                                phelloderm: {
                                    description: "Living parenchyma cells",
                                    location: "Inner side of cork cambium",
                                    function: "Storage, photosynthesis (if chloroplasts present)"
                                }
                            },
                            collectively: "Cork + cork cambium + phelloderm = periderm (bark)"
                        }
                    }
                },
                vascular: {
                    name: "Vascular Tissue System",
                    function: "Transport of water, minerals, and organic compounds",
                    components: {
                        xylem: {
                            description: "Transports water and minerals upward",
                            cellTypes: {
                                tracheids: {
                                    description: "Long, tapered cells with pitted walls",
                                    occurrence: "All vascular plants",
                                    characteristics: "Dead at maturity, thick lignified walls, water passes through pits"
                                },
                                vesselElements: {
                                    description: "Shorter, wider cells aligned end-to-end forming vessels",
                                    occurrence: "Angiosperms (flowering plants)",
                                    characteristics: "Dead at maturity, perforation plates at ends, more efficient than tracheids",
                                    advantage: "Faster water transport than tracheids"
                                },
                                xylemParenchyma: {
                                    description: "Living cells among tracheary elements",
                                    function: "Storage of water and nutrients, lateral transport"
                                },
                                xylemFibers: {
                                    description: "Elongated sclerenchyma cells",
                                    function: "Mechanical support"
                                }
                            },
                            arrangement: {
                                primary: "Formed from procambium during primary growth",
                                secondary: "Formed from vascular cambium during secondary growth (wood)"
                            },
                            lignin: "Polymer providing strength and waterproofing"
                        },
                        phloem: {
                            description: "Transports sugars and organic compounds bidirectionally",
                            cellTypes: {
                                sieveTubeMembers: {
                                    description: "Living conducting cells lacking nuclei at maturity",
                                    occurrence: "Angiosperms",
                                    characteristics: [
                                        "Connected end-to-end by sieve plates",
                                        "Living but lack nucleus, ribosomes, vacuoles",
                                        "Thin cellulose walls",
                                        "Sieve pores allow cytoplasmic connections"
                                    ]
                                },
                                companionCells: {
                                    description: "Living cells adjacent to each sieve tube member",
                                    connection: "Connected by plasmodesmata",
                                    function: [
                                        "Provide metabolic support to sieve tube members",
                                        "Maintain sieve tube member function",
                                        "Load and unload sugars"
                                    ],
                                    characteristics: "Dense cytoplasm, many mitochondria"
                                },
                                sieveCells: {
                                    description: "Phloem conducting cells in gymnosperms",
                                    characteristics: "Less specialized than sieve tube members, no companion cells"
                                },
                                phloemParenchyma: {
                                    description: "Living cells for storage",
                                    function: "Storage of starch and other compounds"
                                },
                                phloemFibers: {
                                    description: "Sclerenchyma cells",
                                    function: "Support and protection"
                                }
                            },
                            arrangement: {
                                primary: "Formed from procambium",
                                secondary: "Formed from vascular cambium (inner bark)"
                            }
                        },
                        vascularCambium: {
                            description: "Lateral meristem producing secondary vascular tissues",
                            location: "Between xylem and phloem in stems and roots",
                            products: {
                                outward: "Secondary phloem",
                                inward: "Secondary xylem (wood)"
                            },
                            activity: "More xylem produced than phloem",
                            occurrence: "Gymnosperms and dicot angiosperms (mostly)"
                        }
                    }
                },
                ground: {
                    name: "Ground Tissue System",
                    function: "Photosynthesis, storage, support",
                    description: "All tissues between dermal and vascular systems",
                    regions: {
                        cortex: {
                            location: "Between epidermis and vascular tissue in roots and stems",
                            composition: "Mainly parenchyma, some collenchyma",
                            functions: ["Storage", "Photosynthesis (if green)", "Support"]
                        },
                        pith: {
                            location: "Central region of stem inside vascular bundles",
                            composition: "Parenchyma cells",
                            function: "Storage",
                            note: "May become hollow in older stems"
                        },
                        mesophyll: {
                            location: "Internal tissue of leaves between upper and lower epidermis",
                            layers: {
                                palisade: {
                                    description: "Upper layer of columnar cells",
                                    characteristics: "Tightly packed, many chloroplasts",
                                    function: "Primary site of photosynthesis"
                                },
                                spongy: {
                                    description: "Lower layer of loosely arranged irregular cells",
                                    characteristics: "Large air spaces, fewer chloroplasts",
                                    function: "Gas exchange, some photosynthesis"
                                }
                            }
                        }
                    },
                    cellTypes: {
                        parenchyma: {
                            description: "Most abundant, versatile living cells",
                            characteristics: [
                                "Thin primary cell walls",
                                "Large central vacuole",
                                "Living at maturity",
                                "Retain ability to divide"
                            ],
                            functions: [
                                "Photosynthesis (chlorenchyma)",
                                "Storage (starch, lipids, proteins)",
                                "Secretion",
                                "Wound healing",
                                "Gas exchange"
                            ],
                            locations: "Throughout plant body"
                        },
                        collenchyma: {
                            description: "Living support cells with unevenly thickened walls",
                            characteristics: [
                                "Living at maturity",
                                "Unevenly thickened primary walls (cellulose)",
                                "Elongated cells",
                                "Thickest at corners"
                            ],
                            function: "Flexible support in growing regions",
                            location: "Beneath epidermis in stems, leaf petioles, leaf veins",
                            advantage: "Provides support while allowing continued growth"
                        },
                        sclerenchyma: {
                            description: "Dead support cells with thick, lignified walls",
                            characteristics: [
                                "Dead at maturity",
                                "Very thick secondary walls",
                                "Impregnated with lignin",
                                "Rigid"
                            ],
                            types: {
                                fibers: {
                                    description: "Long, slender cells in bundles",
                                    location: "Vascular tissues, cortex",
                                    function: "Support and strength",
                                    commercial: "Source of textile fibers (hemp, flax, jute)"
                                },
                                sclereids: {
                                    description: "Shorter, variable-shaped cells",
                                    types: ["Stone cells", "Branched sclereids", "Hair-like sclereids"],
                                    location: "Seed coats, nutshells, fruit flesh",
                                    example: "Gritty texture in pears (stone cells)",
                                    function: "Protection, deterring herbivores"
                                }
                            },
                            function: "Rigid support and protection in mature tissues"
                        }
                    }
                }
            },
            meristematicTissues: {
                description: "Regions of active cell division producing new cells",
                characteristics: [
                    "Small, undifferentiated cells",
                    "Thin primary walls",
                    "Dense cytoplasm",
                    "Large nuclei relative to cell size",
                    "No vacuoles or small vacuoles"
                ],
                types: {
                    apicalMeristems: {
                        description: "At tips of roots and shoots",
                        function: "Primary growth (increase in length)",
                        location: {
                            shoots: "Protected by leaf primordia in bud",
                            roots: "Protected by root cap"
                        },
                        produces: "Primary tissues (primary xylem, primary phloem, ground tissue, epidermis)"
                    },
                    lateralMeristems: {
                        description: "Cylindrical layers in stems and roots",
                        function: "Secondary growth (increase in girth)",
                        types: {
                            vascularCambium: {
                                location: "Between xylem and phloem",
                                produces: "Secondary xylem (wood) inward, secondary phloem (inner bark) outward",
                                occurrence: "Gymnosperms and woody dicots"
                            },
                            corkCambium: {
                                location: "In cortex or secondary phloem",
                                produces: "Cork (phellem) outward, phelloderm inward",
                                function: "Produces protective periderm (outer bark)"
                            }
                        }
                    },
                    intercalaryMeristems: {
                        description: "Between regions of mature tissue",
                        location: "Base of grass leaf blades, nodes of stems",
                        function: "Regrowth after grazing or mowing",
                        example: "Grass can continue growing after cutting because intercalary meristems remain"
                    }
                }
            },
            organAnatomy: {
                rootAnatomy: {
                    crossSection: {
                        epidermis: "Outermost layer with root hairs",
                        cortex: "Wide region of parenchyma for storage",
                        endodermis: {
                            description: "Innermost layer of cortex",
                            feature: "Casparian strip (waxy band) forcing water/minerals through cells",
                            function: "Regulates what enters vascular tissue"
                        },
                        pericycle: {
                            description: "Layer of cells inside endodermis",
                            function: "Produces lateral roots",
                            potential: "Can become meristematic"
                        },
                        vascularCylinder: {
                            description: "Central core containing xylem and phloem",
                            arrangement: {
                                dicot: "Xylem forms star shape, phloem between arms",
                                monocot: "Xylem and phloem in separate bundles arranged in ring"
                            }
                        }
                    },
                    diagram: "root_cross_section"
                },
                stemAnatomy: {
                    herbaceousDicotStem: {
                        epidermis: "Single layer with cuticle",
                        cortex: "Collenchyma (support) and parenchyma (storage)",
                        vascularBundles: {
                            arrangement: "Arranged in ring",
                            structure: "Xylem toward inside, phloem toward outside, cambium between"
                        },
                        pith: "Central parenchyma for storage"
                    },
                    monocotStem: {
                        epidermis: "Thick cuticle",
                        groundTissue: "No distinct cortex and pith",
                        vascularBundles: {
                            arrangement: "Scattered throughout ground tissue",
                            structure: "Xylem and phloem, usually no cambium",
                            note: "Cannot undergo secondary growth"
                        }
                    },
                    woodyStem: {
                        bark: {
                            description: "All tissues outside vascular cambium",
                            outerBark: "Dead cork cells (protection)",
                            innerBark: "Living secondary phloem (transport)"
                        },
                        vascularCambium: "Thin layer of dividing cells",
                        wood: {
                            description: "Secondary xylem inside cambium",
                            sapwood: "Outer, functional xylem transporting water",
                            heartwood: "Inner, non-functional xylem (darker, filled with resins)",
                            annualRings: "Growth rings showing seasonal growth patterns"
                        },
                        pith: "Small, central region (may degenerate)"
                    },
                    diagram: "stem_cross_sections"
                },
                leafAnatomy: {
                    upperEpidermis: {
                        description: "Single layer of cells",
                        cuticle: "Thick waxy layer",
                        stomata: "Usually absent or few"
                    },
                    palisadeMesophyll: {
                        description: "1-3 layers of columnar cells",
                        characteristics: "Tightly packed, many chloroplasts",
                        orientation: "Long axis perpendicular to leaf surface",
                        function: "Primary site of photosynthesis"
                    },
                    spongyMesophyll: {
                        description: "Loosely arranged irregular cells",
                        characteristics: "Large air spaces, fewer chloroplasts",
                        function: "Gas exchange, some photosynthesis",
                        airSpaces: "Facilitate CO₂ and O₂ diffusion"
                    },
                    lowerEpidermis: {
                        description: "Single layer of cells",
                        cuticle: "Thin waxy layer",
                        stomata: "Numerous (typically more than upper surface)"
                    },
                    vascularBundles: {
                        description: "Veins containing xylem and phloem",
                        arrangement: {
                            xylem: "Upper side of vein",
                            phloem: "Lower side of vein"
                        },
                        bundleSheath: "Layer of cells surrounding vascular bundle"
                    },
                    stomata: {
                        description: "Pores surrounded by guard cells",
                        function: "Gas exchange (CO₂ in, O₂ and H₂O out)",
                        density: "100-1000 per mm² of leaf surface"
                    },
                    diagram: "leaf_cross_section"
                }
            },
            primaryVsSecondaryGrowth: {
                primaryGrowth: {
                    description: "Increase in length from apical meristems",
                    produces: "Primary tissues (1° xylem, 1° phloem, epidermis, ground tissue)",
                    occurrence: "All plants",
                    duration: "Throughout life",
                    organs: "Elongates roots and shoots"
                },
                secondaryGrowth: {
                    description: "Increase in girth from lateral meristems",
                    produces: "Secondary tissues (2° xylem/wood, 2° phloem/inner bark, cork)",
                    occurrence: "Gymnosperms and woody dicots (most monocots lack this)",
                    timing: "After primary growth complete",
                    result: "Thicker stems and roots, bark formation"
                }
            },
            monocotVsDicotAnatomy: {
                headers: ["Feature", "Monocot", "Dicot"],
                data: [
                    ["Root type", "Fibrous", "Taproot"],
                    ["Stem vascular bundles", "Scattered", "Ring arrangement"],
                    ["Cambium in stem", "Usually absent", "Present (vascular cambium)"],
                    ["Secondary growth", "Usually absent", "Present in woody species"],
                    ["Leaf venation", "Parallel", "Netted (reticulate)"],
                    ["Flower parts", "Multiples of 3", "Multiples of 4 or 5"],
                    ["Cotyledons", "One", "Two"]
                ]
            },
            category: 'plant_anatomy'
        };
    }

    handlePhotosynthesis(problem) {
        return {
            topic: "Photosynthesis in Plants",
            definition: "Process converting light energy into chemical energy (glucose) using CO₂ and H₂O",
            overallEquation: "6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂",
            significance: [
                "Produces organic compounds for plant growth",
                "Primary source of energy for most life on Earth",
                "Produces O₂ as byproduct",
                "Removes CO₂ from atmosphere"
            ],
            location: {
                organelle: "Chloroplast",
                structure: {
                    outerMembrane: "Smooth, permeable boundary",
                    innerMembrane: "Selective barrier",
                    stroma: "Fluid-filled interior (Calvin cycle occurs here)",
                    thylakoids: {
                        description: "Flattened membrane sacs (light reactions occur here)",
                        grana: "Stacks of thylakoids",
                        thylakoidLumen: "Interior space of thylakoid"
                    },
                    chlorophyll: "Green pigment in thylakoid membranes capturing light"
                }
            },
            stages: {
                lightReactions: {
                    name: "Light-Dependent Reactions",
                    location: "Thylakoid membranes",
                    requirements: ["Light", "H₂O", "ADP + Pi", "NADP⁺"],
                    products: ["ATP", "NADPH", "O₂"],
                    process: [
                        "Photosystem II absorbs light energy",
                        "Water molecules split (photolysis): 2H₂O → 4H⁺ + 4e⁻ + O₂",
                        "Electrons energized and enter electron transport chain",
                        "Electrons move through chain, pumping H⁺ into thylakoid lumen",
                        "Photosystem I absorbs light, re-energizes electrons",
                        "Electrons reduce NADP⁺ to NADPH",
                        "H⁺ gradient drives ATP synthesis (chemiosmosis)",
                        "ATP synthase produces ATP from ADP + Pi"
                    ],
                    photosystems: {
                        PSII: {
                            description: "Photosystem II (absorbs 680 nm light)",
                            function: "Splits water, initiates electron flow",
                            location: "Grana"
                        },
                        PSI: {
                            description: "Photosystem I (absorbs 700 nm light)",
                            function: "Produces NADPH",
                            location: "Grana and stroma lamellae"
                        }
                    },
                    chemiosmosis: {
                        description: "ATP synthesis driven by H⁺ gradient",
                        steps: [
                            "Electron transport creates H⁺ concentration gradient",
                            "High [H⁺] in thylakoid lumen, low in stroma",
                            "H⁺ flows through ATP synthase down gradient",
                            "Energy from flow drives ATP synthesis"
                        ]
                    },
                    diagram: "light_reactions"
                },
                calvinCycle: {
                    name: "Calvin Cycle (Light-Independent Reactions / Dark Reactions)",
                    location: "Stroma",
                    requirements: ["CO₂", "ATP (from light reactions)", "NADPH (from light reactions)"],
                    products: ["Glucose (C₆H₁₂O₆)", "ADP + Pi", "NADP⁺"],
                    note: "Called 'dark reactions' but occurs during day; doesn't require light directly",
                    phases: {
                        carbonFixation: {
                            description: "CO₂ incorporated into organic molecule",
                            reaction: "CO₂ + RuBP (5C) → 2 × 3-PGA (3C)",
                            enzyme: "RuBisCO (most abundant protein on Earth)",
                            note: "RuBP = ribulose bisphosphate; 3-PGA = 3-phosphoglycerate"
                        },
                        reduction: {
                            description: "3-PGA reduced to G3P using ATP and NADPH",
                            reaction: "3-PGA + ATP + NADPH → G3P + ADP + NADP⁺",
                            product: "G3P (glyceraldehyde-3-phosphate)",
                            note: "Some G3P used to make glucose, rest regenerates RuBP"
                        },
                        regeneration: {
                            description: "RuBP regenerated from G3P",
                            reaction: "G3P + ATP → RuBP",
                            purpose: "Allows cycle to continue",
                            note: "5 G3P (3C) → 3 RuBP (5C)"
                        }
                    },
                    stoichiometry: {
                        forOneGlucose: "6 turns of Calvin cycle needed",
                        input: "6 CO₂, 18 ATP, 12 NADPH",
                        output: "1 glucose (C₆H₁₂O₆)"
                    },
                    diagram: "calvin_cycle"
                }
            },
            photosynthesisVariations: {
                C3Photosynthesis: {
                    description: "Standard Calvin cycle; first stable product is 3-carbon (3-PGA)",
                    carbonFixation: "Direct CO₂ fixation by RuBisCO",
                    plants: "Most plants (rice, wheat, soybeans, trees)",
                    anatomy: "Mesophyll cells only",
                    efficiency: {
                        advantages: "Simple, works well in moderate conditions",
                        disadvantages: "Photorespiration in hot, dry conditions reduces efficiency"
                    },
                    photorespiration: {
                        description: "RuBisCO binds O₂ instead of CO₂, producing glycolate",
                        conditions: "High O₂, low CO₂, high temperature",
                        effect: "Reduces photosynthetic efficiency, releases CO₂",
                        wasteOfEnergy: "Consumes ATP without producing sugars"
                    },
                    optimalConditions: "Cool, moist, moderate light"
                },
                C4Photosynthesis: {
                    description: "Modified pathway; first stable product is 4-carbon (oxaloacetate)",
                    carbonFixation: "CO₂ first fixed by PEP carboxylase into 4-carbon compounds",
                    plants: "Corn, sugarcane, sorghum, many tropical grasses",
                    anatomy: {
                        krantzAnatomy: "Distinctive leaf anatomy",
                        mesophyllCells: "CO₂ fixed into 4-carbon compounds (malate or aspartate)",
                        bundleSheath: "4-carbon compounds release CO₂, Calvin cycle occurs here",
                        separation: "CO₂ fixation and Calvin cycle spatially separated"
                    },
                    advantage: {
                        concentratesCO2: "Pumps CO₂ to bundle sheath cells",
                        minimizesPhotorespiration: "High CO₂ concentration around RuBisCO",
                        waterUseEfficiency: "Better water use efficiency than C3"
                    },
                    cost: "Requires extra ATP (2 ATP per CO₂)",
                    optimalConditions: "Hot, bright, dry environments",
                    diagram: "c4_photosynthesis"
                },
                CAMPhotosynthesis: {
                    name: "Crassulacean Acid Metabolism",
                    description: "Temporal separation of CO₂ fixation and Calvin cycle",
                    carbonFixation: "CO₂ fixed at night, stored as malic acid in vacuoles",
                    plants: "Cacti, succulents, pineapple, agave",
                    process: {
                        night: [
                            "Stomata open (cooler, less water loss)",
                            "CO₂ enters and fixed by PEP carboxylase",
                            "Forms 4-carbon acids (malate)",
                            "Stored in vacuoles"
                        ],
                        day: [
                            "Stomata closed (conserves water)",
                            "Malate released from vacuoles",
                            "Decarboxylation releases CO₂",
                            "Calvin cycle uses CO₂ to make sugars"
                        ]
                    },
                    advantage: {
                        waterConservation: "Stomata closed during day",
                        droughtTolerance: "Can survive extreme aridity",
                        minimizesPhotorespiration: "CO₂ concentrated internally during day"
                    },
                    cost: "Requires large vacuoles for storage, slower growth",
                    optimalConditions: "Arid environments with limited water",
                    diagram: "cam_photosynthesis"
                }
            },
            comparisonTable: {
                headers: ["Feature", "C3", "C4", "CAM"],
                data: [
                    ["First product", "3-PGA (3C)", "Oxaloacetate (4C)", "Malate (4C)"],
                    ["CO₂ fixation enzyme", "RuBisCO", "PEP carboxylase then RuBisCO", "PEP carboxylase then RuBisCO"],
                    ["Leaf anatomy", "Normal mesophyll", "Kranz anatomy", "Large vacuoles"],
                    ["Photorespiration", "Occurs in hot/dry", "Minimal", "Minimal"],
                    ["Separation", "None", "Spatial (cell type)", "Temporal (day/night)"],
                    ["Stomata behavior", "Open during day", "Open during day", "Open at night"],
                    ["Water use efficiency", "Lower", "Higher", "Highest"],
                    ["Growth rate", "Fast in cool/moist", "Fast in hot/bright", "Slow"],
                    ["Examples", "Wheat, rice, trees", "Corn, sugarcane", "Cacti, pineapple"]
                ]
            },
            factorsAffectingPhotosynthesis: {
                lightIntensity: {
                    effect: "Increases rate until saturation point",
                    limitingFactor: "At low light levels",
                    saturation: "Beyond certain intensity, no further increase"
                },
                CO2Concentration: {
                    effect: "Increases rate until saturation",
                    atmosphere: "Currently ~0.04% (increasing due to human activity)",
                    limitingFactor: "Often limiting in bright light"
                },
                temperature: {
                    effect: "Optimal range for each species",
                    low: "Slows enzyme activity",
                    optimal: "Maximum rate (usually 25-35°C)",
                    high: "Denatures enzymes, closes stomata"
                },
                waterAvailability: {
                    effect: "Water stress closes stomata",
                    consequence: "Reduces CO₂ uptake, lowers photosynthesis"
                },
                chlorophyllContent: {
                    effect: "More chlorophyll captures more light",
                    factors: "Affected by nitrogen availability, leaf age"
                }
            },
            category: 'photosynthesis'
        };
    }

    handlePlantNutrition(problem) {
        return {
            topic: "Plant Nutrition and Mineral Uptake",
            essentialElements: {
                definition: "Elements required for plant to complete life cycle",
                criteria: [
                    "Required for normal growth and reproduction",
                    "Cannot be replaced by another element",
                    "Direct role in plant metabolism"
                ],
                totalNumber: "17 essential elements",
                categories: {
                    macronutrients: {
                        description: "Required in large amounts (>0.1% dry weight)",
                        elements: {
                            carbon: {
                                symbol: "C",
                                source: "Atmospheric CO₂",
                                percentage: "~45% of dry weight",
                                functions: ["Major component of organic compounds", "Structural element in all biomolecules"]
                            },
                            oxygen: {
                                symbol: "O",
                                source: "H₂O, CO₂, atmospheric O₂",
                                percentage: "~45% of dry weight",
                                functions: ["Component of organic compounds", "Cellular respiration"]
                            },
                            hydrogen: {
                                symbol: "H",
                                source: "H₂O",
                                percentage: "~6% of dry weight",
                                functions: ["Component of organic compounds", "Maintains cell turgor", "Photosynthesis"]
                            },
                            nitrogen: {
                                symbol: "N",
                                source: "Nitrate (NO₃⁻), ammonium (NH₄⁺) from soil",
                                percentage: "~1.5% of dry weight",
                                functions: ["Component of amino acids, proteins", "Nucleic acids (DNA, RNA)", "Chlorophyll", "Hormones"],
                                deficiencySymptoms: "Stunted growth, pale yellow leaves (chlorosis), older leaves affected first",
                                mobility: "Mobile (deficiency appears in older leaves first)"
                            },
                            phosphorus: {
                                symbol: "P",
                                source: "Phosphate (PO₄³⁻) from soil",
                                percentage: "~0.2% of dry weight",
                                functions: ["Component of ATP, NADP", "Nucleic acids", "Phospholipids", "Energy transfer"],
                                deficiencySymptoms: "Dark green leaves with purple tint, stunted growth, poor root development",
                                mobility: "Mobile"
                            },
                            potassium: {
                                symbol: "K",
                                source: "K⁺ ions from soil",
                                percentage: "~1% of dry weight",
                                functions: ["Enzyme activation (40+ enzymes)", "Stomatal regulation", "Osmotic balance", "Protein synthesis"],
                                deficiencySymptoms: "Chlorosis and necrosis at leaf margins, weak stems",
                                mobility: "Mobile"
                            },
                            sulfur: {
                                symbol: "S",
                                source: "Sulfate (SO₄²⁻) from soil",
                                percentage: "~0.1% of dry weight",
                                functions: ["Component of amino acids (cysteine, methionine)", "Vitamins", "Coenzymes"],
                                deficiencySymptoms: "Chlorosis in young leaves (immobile)",
                                mobility: "Relatively immobile"
                            },
                            calcium: {
                                symbol: "Ca",
                                source: "Ca²⁺ ions from soil",
                                percentage: "~0.2% of dry weight",
                                functions: ["Cell wall structure (middle lamella)", "Second messenger in signaling", "Enzyme activation", "Membrane stability"],
                                deficiencySymptoms: "Death of apical meristems, necrosis of young leaves, blossom end rot",
                                mobility: "Immobile"
                            },
                            magnesium: {
                                symbol: "Mg",
                                source: "Mg²⁺ ions from soil",
                                percentage: "~0.2% of dry weight",
                                functions: ["Central atom in chlorophyll", "Enzyme activation", "Ribosome structure"],
                                deficiencySymptoms: "Interveinal chlorosis in older leaves",
                                mobility: "Mobile"
                            }
                        }
                    },
                    micronutrients: {
                        description: "Required in trace amounts (<0.01% dry weight)",
                        note: "Also called trace elements",
                        elements: {
                            iron: {
                                symbol: "Fe",
                                functions: ["Chlorophyll synthesis", "Component of cytochromes (electron transport)", "Enzyme cofactor"],
                                deficiency: "Interveinal chlorosis in young leaves",
                                mobility: "Immobile"
                            },
                            manganese: {
                                symbol: "Mn",
                                functions: ["Photosystem II function (water splitting)", "Enzyme activation", "Chloroplast formation"],
                                deficiency: "Interveinal chlorosis, small necrotic spots",
                                mobility: "Immobile"
                            },
                            zinc: {
                                symbol: "Zn",
                                functions: ["Enzyme component", "Auxin synthesis", "Protein synthesis"],
                                deficiency: "Short internodes, small leaves (rosetting), chlorosis",
                                mobility: "Immobile"
                            },
                            copper: {
                                symbol: "Cu",
                                functions: ["Component of enzymes", "Electron transport", "Lignin synthesis"],
                                deficiency: "Wilting, chlorosis, die-back of shoots",
                                mobility: "Immobile"
                            },
                            boron: {
                                symbol: "B",
                                functions: ["Cell wall formation", "Membrane function", "Reproductive development"],
                                deficiency: "Death of apical meristems, brittle leaves, poor fruit/seed development",
                                mobility: "Immobile"
                            },
                            molybdenum: {
                                symbol: "Mo",
                                functions: ["Nitrogen fixation", "Nitrate reduction", "Enzyme cofactor"],
                                deficiency: "Chlorosis (like nitrogen deficiency), poor growth",
                                mobility: "Mobile in some species"
                            },
                            chlorine: {
                                symbol: "Cl",
                                functions: ["Osmotic balance", "Photosystem II function", "Stomatal regulation"],
                                deficiency: "Wilting, chlorosis, necrosis (rare)",
                                mobility: "Mobile"
                            },
                            nickel: {
                                symbol: "Ni",
                                functions: ["Component of urease enzyme", "Nitrogen metabolism"],
                                deficiency: "Urea accumulation, necrosis (rare)",
                                mobility: "Mobile"
                            }
                        }
                    }
                }
            },
            mineralUptake: {
                pathways: {
                    apoplast: {
                        description: "Through cell walls and intercellular spaces",
                        mechanism: "Passive diffusion and mass flow",
                        limitation: "Blocked at endodermis by Casparian strip",
                        advantage: "No energy required"
                    },
                    symplast: {
                        description: "Through cytoplasm via plasmodesmata",
                        mechanism: "Requires crossing membrane at epidermis",
                        advantage: "Selective uptake",
                        energy: "Active transport requires ATP"
                    }
                },
                activeTransport: {
                    description: "Movement against concentration gradient using ATP",
                    necessity: "Mineral concentration usually higher in roots than soil",
                    carriers: "Specific membrane proteins for each ion",
                    selectivity: "Allows plants to accumulate needed minerals"
                },
                rootHairImportance: "Increase surface area 10-20 fold for absorption",
                casparianStrip: {
                    description: "Waxy barrier in endodermis cell walls",
                    function: "Forces water and minerals through symplast pathway",
                    significance: "Allows selective uptake and prevents backflow"
                }
            },
            nitrogenCycle: {
                forms: {
                    atmosphericN2: "Inert gas (78% of atmosphere), unavailable to most plants",
                    nitrate: "NO₃⁻ - main form absorbed by plants",
                    ammonium: "NH₄⁺ - absorbed by some plants, especially in acidic soils"
                },
                processes: {
                    nitrogenFixation: {
                        description: "Conversion of N₂ gas to NH₃/NH₄⁺",
                        biological: {
                            organisms: "Nitrogen-fixing bacteria (Rhizobium, Azotobacter, cyanobacteria)",
                            symbiotic: "Rhizobium in root nodules of legumes",
                            equation: "N₂ + 8H⁺ + 8e⁻ + 16ATP → 2NH₃ + H₂ + 16ADP + 16Pi",
                            enzyme: "Nitrogenase (requires iron and molybdenum)"
                        },
                        industrial: "Haber process for fertilizer production",
                        lightning: "High energy converts N₂ to NO₃⁻"
                    },
                    nitrification: {
                        description: "Conversion of NH₄⁺ to NO₃⁻",
                        steps: [
                            "Ammonia → Nitrite (NO₂⁻) by Nitrosomonas bacteria",
                            "Nitrite → Nitrate (NO₃⁻) by Nitrobacter bacteria"
                        ],
                        location: "Soil",
                        conditions: "Requires oxygen (aerobic)"
                    },
                    assimilation: {
                        description: "Plants absorb NO₃⁻ or NH₄⁺ and incorporate into organic molecules",
                        process: "NO₃⁻ reduced to NH₄⁺, then incorporated into amino acids"
                    },
                    ammonification: {
                        description: "Decomposers break down organic nitrogen to NH₃/NH₄⁺",
                        organisms: "Bacteria and fungi",
                        location: "Soil"
                    },
                    denitrification: {
                        description: "Conversion of NO₃⁻ back to N₂ gas",
                        organisms: "Anaerobic bacteria",
                        conditions: "Waterlogged, oxygen-poor soils",
                        significance: "Returns nitrogen to atmosphere, reduces soil fertility"
                    }
                },
                legumesSymbiosis: {
                    partners: "Legume plants (peas, beans, clover) + Rhizobium bacteria",
                    location: "Root nodules",
                    benefit: {
                        plant: "Receives fixed nitrogen (NH₄⁺)",
                        bacteria: "Receives carbohydrates from photosynthesis"
                    },
                    leghemoglobin: "Pink protein in nodules maintaining low O₂ for nitrogenase",
                    significance: "Allows legumes to grow in nitrogen-poor soils"
                }
            },
            mycorrhizae: {
                description: "Mutually beneficial association between fungi and plant roots",
                types: {
                    ectomycorrhizae: {
                        structure: "Fungal sheath around roots, penetrates between cells",
                        plants: "Many trees (pines, oaks, birches)",
                        fungi: "Basidiomycetes"
                    },
                    endomycorrhizae: {
                        name: "Arbuscular mycorrhizae (AM)",
                        structure: "Fungal hyphae penetrate root cells, form arbuscules",
                        plants: "Most herbaceous plants, many trees",
                        fungi: "Glomeromycota"
                    }
                },
                benefits: {
                    plant: [
                        "Increased nutrient uptake (especially phosphorus)",
                        "Increased water absorption",
                        "Disease resistance",
                        "Drought tolerance"
                    ],
                    fungus: "Receives sugars from plant"
                },
                extent: "Present in 80-90% of land plant species",
                importance: "Critical for plant nutrition, especially in poor soils"
            },
            soilpH: {
                definition: "Measure of soil acidity/alkalinity",
                scale: "pH 0-14 (7 is neutral, <7 acidic, >7 alkaline)",
                optimalRange: "Most plants grow best at pH 6-7",
                effects: {
                    nutrientAvailability: {
                        acidic: "Iron, manganese, zinc more available; phosphorus less available",
                        alkaline: "Phosphorus, iron, manganese, zinc less available",
                        neutral: "Most nutrients optimally available"
                    },
                    microbialActivity: "Optimal at neutral pH",
                    aluminum: "Toxic at low pH (<5.5)"
                },
                specialAdaptations: {
                    acidophiles: "Prefer acidic soils (blueberries, azaleas, rhododendrons)",
                    calciphiles: "Prefer alkaline soils (clematis, lilac)"
                }
            },
            deficiencyDiagnosis: {
                mobilityPattern: {
                    mobileNutrients: {
                        description: "Symptoms appear in older leaves first",
                        elements: "N, P, K, Mg, Mo, Cl",
                        reason: "Plant translocates from old to new growth"
                    },
                    immobileNutrients: {
                        description: "Symptoms appear in younger leaves first",
                        elements: "Ca, Fe, Mn, Zn, Cu, B",
                        reason: "Cannot be translocated once incorporated"
                    }
                },
                visualSymptoms: {
                    chlorosis: "Yellowing due to chlorophyll loss",
                    necrosis: "Death of tissue (brown/black areas)",
                    stunting: "Reduced growth",
                    purpling: "Anthocyanin accumulation (phosphorus deficiency)"
                }
            },
            category: 'plant_nutrition'
        };
    }

    handlePlantGrowth(problem) {
        return {
            topic: "Plant Growth and Development",
            definition: "Irreversible increase in size, mass, and complexity",
            characteristics: [
                "Indeterminate growth (continues throughout life)",
                "Modular construction (repeated units)",
                "Localized to meristems",
                "Influenced by genetics and environment"
            ],
            typesOfGrowth: {
                primaryGrowth: {
                    description: "Increase in length (vertical growth)",
                    location: "Apical meristems at root and shoot tips",
                    produces: "Primary tissues (1° xylem, 1° phloem, epidermis, cortex, pith)",
                    duration: "Throughout plant life",
                    process: [
                        "Cell division in apical meristem",
                        "Cell elongation in zone of elongation",
                        "Cell differentiation into specialized tissues"
                    ],
                    organs: "Elongates stems and roots, produces leaves and flowers"
                },
                secondaryGrowth: {
                    description: "Increase in girth (lateral growth)",
                    location: "Lateral meristems (vascular cambium and cork cambium)",
                    produces: "Secondary tissues (wood, inner bark, outer bark)",
                    occurrence: "Gymnosperms and woody dicots (most monocots lack this)",
                    duration: "After primary tissues mature",
                    process: {
                        vascularCambium: [
                            "Produces secondary xylem (wood) inward",
                            "Produces secondary phloem (inner bark) outward",
                            "More xylem than phloem produced",
                            "Results in annual rings"
                        ],
                        corkCambium: [
                            "Produces cork (phellem) outward",
                            "Produces phelloderm inward",
                            "Forms protective outer bark"
                        ]
                    },
                    result: "Thick, woody stems and roots"
                }
            },
            growthPatterns: {
                determinate: {
                    description: "Growth stops at maturity",
                    examples: "Most leaves, flowers, fruits",
                    characteristic: "Reaches genetically predetermined size"
                },
                indeterminate: {
                    description: "Growth continues indefinitely",
                    examples: "Main stems and roots of many plants",
                    characteristic: "Continues as long as conditions permit"
                }
            },
            developmentalPhases: {
                embryonic: {
                    description: "Development within seed",
                    stages: ["Fertilization", "Embryogenesis", "Seed maturation"],
                    result: "Dormant embryo in seed"
                },
                juvenile: {
                    description: "Vegetative growth phase",
                    characteristics: [
                        "Cannot flower",
                        "Often different leaf morphology",
                        "Rapid growth",
                        "May have different phyllotaxy"
                    ],
                    duration: "Weeks to years depending on species"
                },
                adult: {
                    description: "Reproductive competence achieved",
                    characteristics: [
                        "Can produce flowers",
                        "Mature leaf form",
                        "May continue vegetative growth"
                    ],
                    transition: "Triggered by size, age, or environmental signals"
                },
                senescence: {
                    description: "Aging and decline",
                    types: {
                        deciduous: "Seasonal leaf senescence",
                        monocarpic: "Death after single reproductive event (annuals, some bamboos)",
                        polycarpic: "Multiple reproductive cycles (perennials)"
                    },
                    processes: [
                        "Chlorophyll breakdown",
                        "Nutrient mobilization",
                        "Abscission layer formation",
                        "Programmed cell death"
                    ]
                }
            },
            germination: {
                definition: "Resumption of growth by embryo, breaking dormancy",
                requirements: ["Water (imbibition)", "Oxygen", "Appropriate temperature", "Sometimes light"],
                dormancy: {
                    description: "Period of suspended development",
                    types: {
                        seedCoatDormancy: "Hard, impermeable coat prevents water entry",
                        embryoDormancy: "Immature embryo or chemical inhibitors",
                        double: "Both seed coat and embryo dormancy"
                    },
                    breaking: [
                        "Scarification (mechanical or chemical weakening of coat)",
                        "Stratification (cold treatment)",
                        "Light exposure",
                        "Fire",
                        "Passage through animal gut"
                    ],
                    adaptiveValue: "Prevents germination until favorable conditions"
                },
                stages: [
                    "Imbibition: seed absorbs water, swells",
                    "Enzyme activation: metabolism resumes",
                    "Radicle emergence: embryonic root breaks through",
                    "Shoot emergence: hypocotyl or epicotyl elongates",
                    "Establishment: cotyledons expand (or remain underground)",
                    "Autotrophic growth: true leaves develop, photosynthesis begins"
                ]
            },
            meristems: {
                apicalMeristems: {
                    location: "Tips of roots and shoots",
                    function: "Primary growth (elongation)",
                    structure: {
                        shootApex: {
                            zones: ["Central zone (slowly dividing)", "Peripheral zone (rapidly dividing)", "Rib zone (forms pith)"],
                            produces: "Leaves, lateral buds, flowers"
                        },
                        rootApex: {
                            zones: ["Quiescent center", "Root cap meristem", "Ground meristem", "Procambium", "Protoderm"],
                            protection: "Root cap protects meristem"
                        }
                    }
                },
                lateralMeristems: {
                    vascularCambium: {
                        location: "Between xylem and phloem",
                        products: "Secondary xylem (inward), secondary phloem (outward)",
                        activity: "Produces more xylem than phloem",
                        result: "Wood formation, stem thickening"
                    },
                    corkCambium: {
                        location: "Outer region of stem/root",
                        products: "Cork (outward), phelloderm (inward)",
                        result: "Bark formation"
                    }
                },
                intercalaryMeristems: {
                    location: "Base of grass leaves, stem nodes",
                    function: "Localized growth",
                    significance: "Allows regrowth after grazing/mowing"
                }
            },
            environmentalInfluences: {
                light: {
                    quality: "Red/far-red ratio affects stem elongation",
                    intensity: "Affects photosynthesis rate, leaf size",
                    photoperiod: "Day length triggers flowering"
                },
                temperature: {
                    vernalization: "Cold requirement for flowering (winter wheat, biennials)",
                    thermoperiod: "Day/night temperature differences affect growth",
                    heatStress: "High temperatures slow growth, damage proteins"
                },
                water: {
                    drought: "Slows growth, triggers stress responses",
                    flooding: "Reduces oxygen, damages roots",
                    turgor: "Essential for cell expansion"
                },
                nutrients: {
                    nitrogen: "Promotes vegetative growth",
                    phosphorus: "Promotes root and flower development",
                    potassium: "Overall vigor"
                },
                gravity: "Influences orientation (gravitropism)",
                mechanicalStress: "Wind, touch cause thigmomorphogenesis (shorter, stockier)"
            },
            annualRings: {
                formation: "Seasonal variation in xylem production",
                structure: {
                    springWood: {
                        description: "Light-colored, wide vessels",
                        season: "Rapid growth in spring",
                        function: "Efficient water transport"
                    },
                    summerWood: {
                        description: "Dark-colored, narrow vessels, thick walls",
                        season: "Slower growth in late summer",
                        function: "Structural support"
                    }
                },
                applications: {
                    dendrochronology: "Dating using tree rings",
                    climateReconstruction: "Ring width indicates growing conditions",
                    forestry: "Determines tree age and growth rate"
                }
            },
            plantLifeSpans: {
                annuals: {
                    description: "Complete life cycle in one year",
                    strategy: "Rapid growth, heavy seed production",
                    examples: "Wheat, corn, marigolds, lettuce"
                },
                biennials: {
                    description: "Two-year life cycle",
                    yearOne: "Vegetative growth, food storage",
                    yearTwo: "Flowering, seed production, death",
                    examples: "Carrots, beets, foxglove, parsley"
                },
                perennials: {
                    description: "Live for many years",
                    herbaceous: "Die back to ground each winter (tulips, hostas)",
                    woody: "Maintain above-ground structure (trees, shrubs)",
                    examples: "Apple trees, roses, asparagus, rhubarb"
                }
            },
            category: 'plant_growth'
        };
    }

    handlePlantAdaptations(problem) {
        return {
            topic: "Plant Adaptations to Environment",
            definition: "Inherited traits enhancing survival and reproduction in specific environments",
            types: {
                structural: "Physical features (anatomy, morphology)",
                physiological: "Metabolic and biochemical processes",
                behavioral: "Timing of activities (flowering, dormancy)"
            },
            waterAdaptations: {
                xerophytes: {
                    description: "Plants adapted to dry environments (deserts, dry climates)",
                    challenges: "Water scarcity, high temperatures, intense sunlight",
                    adaptations: {
                        leaves: [
                            "Reduced leaf size or leaves modified to spines (cacti)",
                            "Thick cuticle reducing water loss",
                            "Sunken stomata in pits or grooves",
                            "Dense trichomes reflecting light and trapping humidity",
                            "Leaves shed during drought (drought deciduous)",
                            "Vertical orientation reducing midday sun exposure"
                        ],
                        stems: [
                            "Succulent stems for water storage (cacti)",
                            "Green stems for photosynthesis when leaves absent",
                            "Thick waxy coating"
                        ],
                        roots: [
                            "Extensive shallow root systems (wide spread)",
                            "Deep taproots reaching water table (mesquite)",
                            "Rapid root growth after rain"
                        ],
                        metabolism: [
                            "CAM photosynthesis (stomata open at night)",
                            "C4 photosynthesis (more efficient in hot, dry)",
                            "Osmotic adjustment (accumulate solutes)"
                        ],
                        other: [
                            "Seeds remain dormant until rain",
                            "Short life cycles (complete before drought)",
                            "Bulbs/tubers for survival underground"
                        ]
                    },
                    examples: {
                        cacti: "Succulent stems, spines, CAM photosynthesis",
                        agave: "Thick succulent leaves, CAM photosynthesis",
                        sagebrush: "Small leaves, aromatic oils, deep roots",
                        creosoteBush: "Waxy leaves, wide shallow roots, allelopathy"
                    }
                },
                mesophytes: {
                    description: "Plants adapted to moderate water conditions",
                    characteristics: [
                        "Moderate leaf size",
                        "Thin cuticle",
                        "Stomata on both leaf surfaces",
                        "Fibrous root system",
                        "No special water storage"
                    ],
                    examples: "Most crop plants, deciduous trees, garden plants"
                },
                hydrophytes: {
                    description: "Plants adapted to aquatic environments or very wet conditions",
                    challenges: "Waterlogged conditions, reduced oxygen, submersion",
                    adaptations: {
                        leaves: [
                            "Thin or absent cuticle (water freely available)",
                            "Stomata on upper surface only (if floating)",
                            "Finely divided leaves (submerged)",
                            "Large air spaces for buoyancy"
                        ],
                        stems: [
                            "Aerenchyma tissue (large air spaces)",
                            "Flexible, reduced support tissue",
                            "Hollow stems"
                        ],
                        roots: [
                            "Reduced or adventitious roots",
                            "Aerenchyma for oxygen transport",
                            "Root hairs often absent"
                        ],
                        other: [
                            "Vegetative reproduction common",
                            "Seeds/spores dispersed by water",
                            "Submersed vs emergent vs floating forms"
                        ]
                    },
                    examples: {
                        waterLilies: "Floating leaves, long flexible stems, aerenchyma",
                        duckweed: "Tiny floating plants, no roots or tiny roots",
                        eelgrass: "Submerged, ribbon-like leaves, rhizomes",
                        mangroves: "Prop roots, pneumatophores, salt excretion"
                    }
                }
            },
            temperatureAdaptations: {
                coldAdaptations: {
                    challenges: "Freezing, ice crystal formation, reduced water availability",
                    strategies: {
                        avoidance: [
                            "Dormancy (buds, seeds)",
                            "Annual life cycle (complete before winter)",
                            "Underground storage organs (bulbs, rhizomes)"
                        ],
                        tolerance: [
                            "Antifreeze proteins in cells",
                            "Increased sugar concentration (lowers freezing point)",
                            "Supercooling (liquid below freezing point)",
                            "Ice nucleation outside cells (prevents internal ice)"
                        ],
                        morphological: [
                            "Low, compact growth form (less exposure)",
                            "Insulating dead leaves/stems",
                            "Needle-like leaves (conifers) reducing surface area",
                            "Dark pigmentation absorbing heat"
                        ]
                    },
                    examples: {
                        conifers: "Needle leaves, antifreeze compounds, flexible branches",
                        arcticWillow: "Low growing, insulation from snow",
                        winterWheat: "Requires vernalization, cold hardy"
                    }
                },
                heatAdaptations: {
                    challenges: "High temperatures, water stress, protein denaturation",
                    strategies: [
                        "Heat shock proteins protecting enzymes",
                        "Reflective leaf surfaces",
                        "Vertical leaf orientation (midday sun avoidance)",
                        "Deep roots accessing cooler water",
                        "C4 or CAM photosynthesis",
                        "Evaporative cooling (transpiration)"
                    ],
                    examples: "Desert plants, tropical grasses (C4 pathway)"
                }
            },
            lightAdaptations: {
                sunPlants: {
                    description: "Adapted to high light intensity",
                    characteristics: [
                        "Thick leaves with multiple palisade layers",
                        "High chlorophyll and enzyme concentrations",
                        "Small, dense leaves",
                        "High light saturation point",
                        "High maximum photosynthetic rate"
                    ],
                    examples: "Crops, desert plants, alpine plants"
                },
                shadePlants: {
                    description: "Adapted to low light intensity",
                    characteristics: [
                        "Thin leaves with large surface area",
                        "Single palisade layer",
                        "Lower light saturation point",
                        "Efficient light capture at low intensities",
                        "Often darker green (more chlorophyll per unit area)"
                    ],
                    examples: "Forest understory plants, houseplants"
                }
            },
            soilAdaptations: {
                halophytes: {
                    description: "Salt-tolerant plants",
                    challenges: "High soil salinity, osmotic stress, ion toxicity",
                    adaptations: [
                        "Salt excretion through glands",
                        "Salt accumulation in vacuoles (dilution)",
                        "Salt exclusion at roots",
                        "Succulent leaves (dilute salt concentration)",
                        "Osmotic adjustment with compatible solutes"
                    ],
                    examples: "Saltgrass, pickleweed, mangroves, glasswort"
                },
                calciphiles: {
                    description: "Calcium-loving plants (alkaline soils)",
                    adaptations: "Tolerate high pH, adapted to low iron availability",
                    examples: "Clematis, lilac, dianthus"
                },
                calcifuges: {
                    description: "Calcium-avoiding plants (acidic soils)",
                    adaptations: "Require low pH, sensitive to alkaline conditions",
                    examples: "Blueberries, azaleas, rhododendrons, heathers"
                },
                serpentinePlants: {
                    description: "Adapted to serpentine soils (high Mg, Ni, Cr; low Ca)",
                    adaptations: [
                        "Heavy metal tolerance",
                        "Altered Ca/Mg ratio requirements",
                        "Often endemic to serpentine outcrops"
                    ],
                    examples: "Serpentine goldfields, jewelflower species"
                }
            },
            competitionAdaptations: {
                allelopathy: {
                    description: "Chemical inhibition of competitors",
                    mechanism: "Release of phytotoxic compounds into environment",
                    examples: {
                        blackWalnut: "Juglone toxin inhibits nearby plants",
                        eucalyptus: "Leaf compounds inhibit understory",
                        sunflower: "Allelopathic to some crop plants"
                    }
                },
                rapidGrowth: {
                    description: "Outcompete through fast resource acquisition",
                    characteristics: "High growth rates, efficient resource use",
                    examples: "Weedy species, pioneer species"
                },
                shadeTolerance: {
                    description: "Ability to grow in shade of competitors",
                    characteristics: "Efficient low-light photosynthesis",
                    examples: "Forest understory species"
                }
            },
            herbivorDefense: {
                physical: [
                    "Thorns, spines, prickles (roses, cacti, blackberries)",
                    "Trichomes (stinging hairs on nettles)",
                    "Tough, fibrous leaves",
                    "Silica crystals in tissues (grasses)",
                    "Waxy coatings"
                ],
                chemical: [
                    "Alkaloids (nicotine, caffeine, morphine) - toxic or deterrent",
                    "Tannins (astringent, reduce digestibility)",
                    "Terpenes (essential oils, repellent)",
                    "Phenolics (bitter taste)",
                    "Cyanogenic glycosides (release cyanide when damaged)",
                    "Latex (sticky, toxic)"
                ],
                indirect: [
                    "Nectar production attracting predatory insects",
                    "Volatile compounds attracting parasitoids",
                    "Ant associations (myrmecophytes)"
                ],
                induced: [
                    "Increased chemical production after herbivory",
                    "Signaling compounds warning other plants",
                    "Jasmonic acid pathway activation"
                ]
            },
            pollinatorAdaptations: {
                description: "Features attracting specific pollinators",
                syndromes: {
                    beetPollination: {
                        flowers: "Bright colors, nectar, landing platform",
                        examples: "Most flowers"
                    },
                    butterfly: {
                        flowers: "Bright red/pink, narrow tubes, diurnal",
                        examples: "Petunias, zinnias"
                    },
                    moth: {
                        flowers: "White/pale, strong scent, nocturnal",
                        examples: "Night-blooming jasmine, evening primrose"
                    },
                    birdPollination: {
                        flowers: "Red/orange, tubular, copious nectar, no scent",
                        examples: "Fuchsia, trumpet vine"
                    },
                    batPollination: {
                        flowers: "White/pale, strong odor, nocturnal, copious pollen/nectar",
                        examples: "Agave, baobab"
                    },
                    windPollination: {
                        flowers: "Small, no petals, abundant pollen, feathery stigmas",
                        examples: "Grasses, oaks, pines"
                    }
                }
            },
            category: 'plant_adaptations'
        };
    }

    handleRootSystems(problem) {
        return {
            topic: "Root Systems and Functions",
            functions: [
                "Anchorage: hold plant firmly in soil",
                "Absorption: take up water and dissolved minerals",
                "Conduction: transport water/minerals to stem",
                "Storage: store food and nutrients",
                "Vegetative propagation: in some species",
                "Hormone synthesis: cytokinins produced in roots"
            ],
            types: {
                taproot: {
                    description: "One main primary root growing vertically downward with lateral branches",
                    characteristics: [
                        "Develops from embryonic radicle",
                        "Penetrates deeply into soil",
                        "Strong anchorage",
                        "Access to deep water/nutrients",
                        "Dominant central axis"
                    ],
                    examples: "Carrot, radish, dandelion, most dicots",
                    advantages: [
                        "Deep penetration for water",
                        "Strong anchorage in wind",
                        "Access deep nutrients"
                    ],
                    disadvantages: [
                        "Less efficient in dry shallow soils",
                        "Smaller total surface area than fibrous"
                    ]
                },
                fibrousRoot: {
                    description: "Network of similar-sized roots spreading from stem base",
                    characteristics: [
                        "No dominant root",
                        "Many adventitious roots",
                        "Shallow, spreading system",
                        "Extensive surface area",
                        "Dense network"
                    ],
                    examples: "Grass, wheat, rice, most monocots",
                    advantages: [
                        "Large surface area for absorption",
                        "Excellent erosion control",
                        "Efficient in shallow soils"
                    ],
                    disadvantages: [
                        "Limited deep penetration",
                        "Less effective in drought"
                    ]
                },
                adventitious: {
                    description: "Roots arising from stems or leaves, not from primary root",
                    origin: "Non-root tissues (stems, leaves)",
                    types: {
                        propRoots: {
                            description: "Support roots growing from stem nodes",
                            function: "Additional support and anchorage",
                            examples: "Corn, pandanus, mangroves"
                        },
                        aerialRoots: {
                            description: "Roots exposed to air",
                            functions: ["Gas exchange", "Moisture absorption", "Climbing support"],
                            examples: "Orchids (epiphytic), ivy, monstera"
                        },
                        climbingRoots: {
                            description: "Attach to surfaces for support",
                            examples: "Ivy, climbing fig"
                        },
                        waterRoots: {
                            description: "Aquatic roots",
                            characteristics: "Aerenchyma tissue, reduced structure",
                            examples: "Water hyacinth, duckweed"
                        }
                    }
                }
            },
            rootZones: {
                rootCap: {
                    location: "Very tip of root",
                    structure: "Thimble-shaped covering",
                    functions: [
                        "Protects apical meristem",
                        "Secretes mucigel (lubricant)",
                        "Gravity perception (statoliths)"
                    ],
                    characteristics: "Cells constantly sloughed off and replaced"
                },
                zoneOfCellDivision: {
                    name: "Apical Meristem",
                    location: "Just behind root cap",
                    structure: "Small, densely cytoplasmic cells",
                    function: "Mitosis produces new cells",
                    characteristics: "Rapidly dividing, undifferentiated cells",
                    produces: "All root tissues"
                },
                zoneOfElongation: {
                    location: "Above meristem",
                    length: "Few millimeters",
                    function: "Cells rapidly elongate, pushing root forward",
                    characteristics: [
                        "Most rapid growth region",
                        "Cells increase in length 10-20 fold",
                        "No differentiation yet",
                        "Primary growth zone"
                    ],
                    mechanism: "Cell expansion driven by water uptake"
                },
                zoneOfMaturation: {
                    name: "Zone of Differentiation",
                    location: "Above elongation zone",
                    function: "Cells differentiate into specialized tissues",
                    features: {
                        rootHairs: {
                            description: "Extensions of epidermal cells",
                            function: "Increase surface area 10-20 fold",
                            characteristics: [
                                "Short-lived (days to weeks)",
                                "Single-celled extensions",
                                "Greatly increase absorption",
                                "Grow into soil pores"
                            ],
                            density: "Hundreds per mm² of root surface"
                        },
                        vascularTissue: "Xylem and phloem become functional",
                        endodermis: "Casparian strip develops"
                    }
                }
            },
            rootAnatomy: {
                epidermis: {
                    description: "Outermost layer",
                    characteristics: "Single layer, thin-walled cells, no cuticle",
                    specialization: "Root hairs (extensions for absorption)"
                },
                cortex: {
                    description: "Wide region of parenchyma",
                    characteristics: "Large cells with intercellular spaces",
                    functions: ["Storage of starch", "Transport of water (apoplast route)", "May contain chloroplasts near surface"],
                    width: "Often widest region of young root"
                },
                endodermis: {
                    description: "Innermost layer of cortex",
                    specialFeature: {
                        casparianStrip: {
                            description: "Band of suberin (waxy substance) in cell walls",
                            location: "Radial and transverse walls",
                            function: "Forces water and minerals through symplast pathway",
                            significance: [
                                "Selective barrier",
                                "Prevents backflow to soil",
                                "Regulates mineral uptake"
                            ]
                        }
                    },
                    importance: "Critical control point for what enters vascular tissue"
                },
                pericycle: {
                    description: "Layer of cells just inside endodermis",
                    characteristics: "Retains meristematic capacity",
                    functions: [
                        "Produces lateral (branch) roots",
                        "Contributes to vascular cambium in plants with secondary growth",
                        "Can become meristematic when needed"
                    ]
                },
                vascularCylinder: {
                    name: "Stele",
                    description: "Central core containing xylem and phloem",
                    arrangement: {
                        dicot: {
                            xylem: "Forms star-shaped pattern in center",
                            phloem: "Strands between xylem arms",
                            cambium: "Develops between xylem and phloem"
                        },
                        monocot: {
                            arrangement: "Xylem and phloem in separate bundles forming ring",
                            pith: "Central pith often present",
                            cambium: "Usually absent"
                        }
                    }
                }
            },
            modifiedRoots: {
                storage: {
                    description: "Enlarged roots storing food (carbohydrates)",
                    types: {
                        taproot: "Main root enlarged (carrot, radish, turnip, beet)",
                        tuberous: "Adventitious roots enlarged (sweet potato, dahlia)"
                    },
                    stored: "Primarily starch",
                    significance: "Biennial plants store food in year 1 for flowering in year 2"
                },
                prop: {
                    description: "Roots from stem providing additional support",
                    examples: "Corn (maize), pandanus, banyan tree",
                    function: "Mechanical support, especially in tall plants or weak soils",
                    origin: "Adventitious from lower stem nodes"
                },
                stilt: {
                    description: "Similar to prop roots but arising higher on stem",
                    examples: "Mangroves, corn",
                    function: "Support in unstable substrates"
                },
                pneumatophores: {
                    description: "Aerial roots growing upward from soil",
                    function: "Gas exchange in waterlogged soils",
                    characteristics: "Contain aerenchyma, numerous lenticels",
                    examples: "Mangroves (Avicennia), bald cypress",
                    environment: "Swamps, marshes, tidal zones"
                },
                aerial: {
                    description: "Roots exposed to air",
                    types: {
                        epiphytic: {
                            description: "Orchid roots absorbing moisture from air",
                            characteristics: "Green (photosynthetic), velamen (spongy tissue)",
                            examples: "Epiphytic orchids, bromeliads"
                        },
                        climbing: {
                            description: "Attach to surfaces",
                            examples: "Ivy, vanilla orchid"
                        }
                    }
                },
                haustoria: {
                    description: "Parasitic roots penetrating host tissues",
                    function: "Extract water, nutrients, or photosynthates from host",
                    types: {
                        hemiparasite: "Photosynthesize but steal water/minerals (mistletoe)",
                        holoparasite: "Non-photosynthetic, fully dependent (dodder, broomrape)"
                    },
                    examples: "Mistletoe, dodder, witchweed"
                },
                contractile: {
                    description: "Pull plant deeper into soil",
                    mechanism: "Roots contract longitudinally after growing",
                    function: "Position bulbs, corms at optimal depth",
                    examples: "Tulips, crocuses, gladiolus, dandelions",
                    importance: "Maintains proper planting depth despite soil erosion"
                },
                buttress: {
                    description: "Large, flange-like outgrowths from trunk base",
                    function: "Provide stability for tall tropical trees",
                    examples: "Tropical rainforest trees (kapok, fig)",
                    characteristics: "Thin, wide, radiating from trunk"
                }
            },
            rootSymbioses: {
                mycorrhizae: {
                    description: "Mutualistic fungal associations",
                    prevalence: "80-90% of land plants",
                    benefits: {
                        plant: ["Enhanced mineral uptake (especially P)", "Increased water absorption", "Disease resistance", "Drought tolerance"],
                        fungus: "Receives carbohydrates from plant"
                    },
                    types: {
                        ectomycorrhizae: "Fungal sheath around roots (trees)",
                        endomycorrhizae: "Fungal hyphae penetrate cells (most plants)"
                    }
                },
                rhizobium: {
                    description: "Nitrogen-fixing bacteria in legume nodules",
                    process: "Bacteria convert atmospheric N₂ to NH₃",
                    benefit: "Plant receives usable nitrogen",
                    location: "Root nodules",
                    indicator: "Pink color (leghemoglobin)",
                    significance: "Allows growth in nitrogen-poor soils"
                },
                actinorrhizae: {
                    description: "Nitrogen-fixing actinobacteria (Frankia) in root nodules",
                    plants: "Non-legumes (alder, bayberry, casuarina)",
                    function: "Similar to Rhizobium - nitrogen fixation"
                }
            },
            soilInteractions: {
                rhizosphere: {
                    description: "Zone of soil immediately surrounding roots",
                    characteristics: [
                        "High microbial activity",
                        "Modified pH",
                        "Rich in organic compounds",
                        "Different from bulk soil"
                    ],
                    rootExudates: {
                        description: "Compounds released by roots",
                        types: ["Sugars", "Amino acids", "Organic acids", "Enzymes", "Mucigel"],
                        functions: [
                            "Attract beneficial microbes",
                            "Chelate minerals (increase availability)",
                            "Inhibit pathogens",
                            "Lubricate soil penetration"
                        ]
                    }
                },
                rootGrowthFactors: {
                    physical: [
                        "Soil texture (compaction resistance)",
                        "Soil structure (porosity)",
                        "Mechanical impedance",
                        "Aeration"
                    ],
                    chemical: [
                        "Nutrient availability",
                        "pH",
                        "Toxic substances (aluminum, salts)",
                        "Oxygen concentration"
                    ],
                    biological: [
                        "Microbial interactions",
                        "Nematodes and pathogens",
                        "Competition from other plants"
                    ]
                }
            },
            category: 'root_systems'
        };
    }

    handleLeafStructure(problem) {
        return {
            topic: "Leaf Structure and Function",
            definition: "Primary photosynthetic organ of most plants",
            functions: [
                "Photosynthesis: produce glucose using light energy",
                "Gas exchange: CO₂ intake, O₂ release",
                "Transpiration: water loss creating transport pull",
                "Thermoregulation: cooling through evaporation"
            ],
            externalStructure: {
                blade: {
                    name: "Lamina",
                    description: "Flat, expanded portion of leaf",
                    shape: "Maximizes light capture while minimizing water loss",
                    characteristics: [
                        "Broad and thin for light interception",
                        "Large surface area",
                        "Various shapes (entire, lobed, compound)"
                    ],
                    surfaces: {
                        adaxial: "Upper surface (toward stem)",
                        abaxial: "Lower surface (away from stem)"
                    }
                },
                petiole: {
                    description: "Stalk connecting blade to stem",
                    functions: [
                        "Positions leaf for optimal light",
                        "Allows movement (sun tracking, wind flexibility)",
                        "Contains vascular tissue connecting leaf to stem"
                    ],
                    characteristics: "Flexible, contains vascular bundles",
                    variation: {
                        sessile: "Leaves lacking petiole (blade attached directly)",
                        petiolate: "Leaves with distinct petiole"
                    }
                },
                stipules: {
                    description: "Small leaf-like or scale-like structures at leaf base",
                    occurrence: "Present in many dicots, absent in monocots",
                    functions: ["Protect developing leaf", "Photosynthesis (in some)", "Modified for defense"],
                    types: {
                        free: "Separate from petiole",
                        adnate: "Fused to petiole",
                        sheathing: "Wrap around stem"
                    },
                    modifications: "Can be spines (black locust) or tendrils"
                },
                veins: {
                    description: "Vascular bundles in blade",
                    components: "Xylem (water/minerals in), phloem (sugars out)",
                    functions: ["Transport", "Structural support"],
                    patterns: {
                        parallel: {
                            description: "Veins run parallel to each other",
                            occurrence: "Monocots (grasses, lilies, corn)",
                            characteristics: "Major veins roughly same size"
                        },
                        reticulate: {
                            description: "Netted pattern with branching veins",
                            occurrence: "Dicots (oaks, maples, roses)",
                            types: {
                                pinnate: "Midrib with lateral branches (feather-like)",
                                palmate: "Several major veins radiating from one point"
                            }
                        }
                    }
                }
            },
            internalAnatomy: {
                epidermis: {
                    upper: {
                        description: "Single layer of cells on adaxial surface",
                        characteristics: [
                            "Transparent (allows light penetration)",
                            "Thick cuticle (waxy layer)",
                            "Usually lacks chloroplasts",
                            "Tightly packed cells"
                        ],
                        stomata: "Usually absent or very few",
                        function: "Protection, reduce water loss"
                    },
                    lower: {
                        description: "Single layer on abaxial surface",
                        characteristics: [
                            "Thin cuticle",
                            "Contains guard cells",
                            "Numerous stomata"
                        ],
                        stomata: "Abundant (typically 100-1000 per mm²)",
                        function: "Gas exchange while minimizing water loss"
                    }
                },
                cuticle: {
                    description: "Waxy layer covering epidermis",
                    composition: "Cutin (waxy polymer) and waxes",
                    functions: [
                        "Waterproofing (reduces transpiration)",
                        "Protection from pathogens",
                        "Reflects some UV radiation",
                        "Protection from physical damage"
                    ],
                    thickness: "Varies by environment (thick in xerophytes, thin in hydrophytes)"
                },
                stomata: {
                    description: "Pores in epidermis for gas exchange",
                    structure: {
                        pore: "Opening between guard cells",
                        guardCells: {
                            description: "Paired cells surrounding pore",
                            characteristics: [
                                "Kidney-shaped (dicots) or dumbbell-shaped (grasses)",
                                "Contain chloroplasts",
                                "Unevenly thickened cell walls",
                                "Control pore opening/closing"
                            ],
                            mechanism: [
                                "OPENING: K⁺ pumped in → water follows → cells swell → pore opens",
                                "CLOSING: K⁺ moves out → water leaves → cells shrink → pore closes"
                            ]
                        },
                        subsidiaryGuardCells: "Neighboring cells (in some species)"
                    },
                    functions: [
                        "CO₂ uptake for photosynthesis",
                        "O₂ release from photosynthesis",
                        "Water vapor loss (transpiration)",
                        "Gas exchange for respiration"
                    ],
                    regulation: {
                        opening: ["Light (blue light receptors)", "Low CO₂ concentration", "Adequate water"],
                        closing: ["Darkness", "High CO₂", "Water stress (ABA hormone)", "High temperature"]
                    },
                    distribution: "Usually more on lower surface (reduces water loss)",
                    density: "100-1000 per mm², varies by species and environment"
                },
                mesophyll: {
                    description: "Internal photosynthetic tissue between upper and lower epidermis",
                    layers: {
                        palisade: {
                            name: "Palisade Mesophyll",
                            location: "Below upper epidermis",
                            structure: "1-3 layers of columnar (column-shaped) cells",
                            orientation: "Long axis perpendicular to leaf surface",
                            characteristics: [
                                "Tightly packed with minimal air spaces",
                                "Numerous chloroplasts (30-70 per cell)",
                                "Chloroplasts often along cell walls",
                                "Cells elongated for maximum light capture"
                            ],
                            function: "Primary site of photosynthesis (70-80% of leaf photosynthesis)",
                            adaptations: "Maximizes light absorption"
                        },
                        spongy: {
                            name: "Spongy Mesophyll",
                            location: "Between palisade layer and lower epidermis",
                            structure: "Irregularly shaped cells loosely arranged",
                            characteristics: [
                                "Large intercellular air spaces (up to 70% of volume)",
                                "Fewer chloroplasts than palisade (20-40 per cell)",
                                "Cells irregular, lobed shape",
                                "Connected by air passages"
                            ],
                            function: [
                                "Gas exchange (CO₂ diffusion to cells)",
                                "Some photosynthesis (20-30%)",
                                "Facilitates gas movement to/from stomata"
                            ],
                            airSpaces: "Critical for CO₂ diffusion to all mesophyll cells"
                        }
                    },
                    variation: {
                        sunLeaves: "More palisade layers, thicker",
                        shadeLeaves: "Fewer palisade layers, thinner",
                        monocots: "Sometimes no distinction between palisade and spongy"
                    }
                },
                vascularBundles: {
                    description: "Veins containing xylem and phloem",
                    arrangement: {
                        xylem: "Upper side of vein (toward adaxial surface)",
                        phloem: "Lower side of vein (toward abaxial surface)",
                        placement: "Ensures efficient transport (xylem delivers water/minerals, phloem exports sugars)"
                    },
                    bundleSheath: {
                        description: "Layer of cells surrounding vascular bundle",
                        function: ["Regulates movement between vascular tissue and mesophyll", "Support"],
                        C4Plants: "Bundle sheath cells site of Calvin cycle"
                    },
                    size: {
                        majorVeins: "Large bundles with extensive xylem and phloem",
                        minorVeins: "Small bundles, high density, close to mesophyll cells"
                    },
                    importance: "Minor veins critical for efficient transport to/from mesophyll"
                }
            },
            leafTypes: {
                simple: {
                    description: "Single, undivided blade",
                    margin: {
                        entire: "Smooth edge (magnolia)",
                        serrate: "Saw-toothed (elm)",
                        dentate: "Toothed (larger teeth)",
                        lobed: "Deep indentations (oak, maple)"
                    },
                    examples: "Oak, maple, apple, tulip poplar"
                },
                compound: {
                    description: "Blade divided into separate leaflets",
                    identification: "Buds only at base of petiole, not at leaflet bases",
                    types: {
                        pinnatelyCompound: {
                            description: "Leaflets arranged along central axis (rachis)",
                            pattern: "Feather-like",
                            types: {
                                oddPinnate: "Terminal leaflet present (ash)",
                                evenPinnate: "No terminal leaflet (honey locust)"
                            },
                            examples: "Rose, ash, walnut, mesquite"
                        },
                        palmatelyCompound: {
                            description: "Leaflets radiating from one point",
                            pattern: "Hand-like",
                            examples: "Horse chestnut, buckeye, cannabis"
                        },
                        bipinnatelyCompound: {
                            description: "Leaflets themselves divided (twice compound)",
                            examples: "Honey locust, mimosa, acacia"
                        }
                    }
                }
            },
            leafArrangement: {
                phyllotaxy: {
                    definition: "Pattern of leaf arrangement on stem",
                    types: {
                        alternate: {
                            description: "One leaf per node",
                            pattern: "Leaves staggered along stem",
                            examples: "Oak, apple, sunflower",
                            advantage: "Minimizes self-shading"
                        },
                        opposite: {
                            description: "Two leaves per node",
                            pattern: "Leaves in pairs at each node",
                            examples: "Maple, ash, mint",
                            often: "Pairs at successive nodes perpendicular (decussate)"
                        },
                        whorled: {
                            description: "Three or more leaves per node",
                            pattern: "Ring of leaves at each node",
                            examples: "Some milkweeds, oleander"
                        },
                        rosette: {
                            description: "Leaves clustered at base",
                            pattern: "Very short internodes",
                            examples: "Dandelion, plantain, many succulents"
                        }
                    }
                }
            },
            leafModifications: {
                tendrils: {
                    description: "Modified leaves or leaflets for climbing",
                    function: "Wrap around supports",
                    examples: "Peas (leaf tendrils), grapes (stem tendrils)",
                    mechanism: "Thigmotropic growth"
                },
                spines: {
                    description: "Modified leaves for defense",
                    function: "Deter herbivores, reduce surface area (water conservation)",
                    examples: "Cacti (entire leaf), barberry (leaf margins)",
                    vs: "Thorns (modified stems), prickles (epidermal outgrowths)"
                },
                storageLeaves: {
                    description: "Thickened leaves storing water or food",
                    examples: {
                        bulbs: "Onion (fleshy leaf bases storing food)",
                        succulents: "Aloe, jade plant (water storage)"
                    },
                    characteristics: "Thick, fleshy, reduced surface area"
                },
                bracts: {
                    description: "Modified leaves near flowers",
                    function: "Attract pollinators (colorful) or protect flowers",
                    examples: "Poinsettia (red bracts), dogwood (white bracts)",
                    appearance: "Often colorful, petal-like"
                },
                insectivorousLeaves: {
                    description: "Modified to trap and digest insects",
                    function: "Supplement nitrogen in poor soils",
                    types: {
                        pitfall: "Pitcher-shaped trap (pitcher plants)",
                        snapTrap: "Rapid closure (Venus flytrap)",
                        flypaper: "Sticky surface (sundews)",
                        sucTrap: "Vacuum trap (bladderworts)"
                    },
                    mechanism: "Digestive enzymes break down prey"
                },
                scaleLeaves: {
                    description: "Small, non-photosynthetic leaves",
                    functions: ["Protect buds (bud scales)", "Reduce water loss"],
                    examples: "Bud scales, bulb scales",
                    characteristics: "Small, often brown, papery"
                },
                cotyledons: {
                    description: "Embryonic seed leaves",
                    function: "Store food for germination (dicots) or absorb food from endosperm (monocots)",
                    number: "One (monocots), two (dicots)",
                    fate: "May emerge and photosynthesize or remain below ground"
                }
            },
            leafAbscission: {
                definition: "Programmed shedding of leaves",
                occurrence: "Deciduous plants before winter or dry season",
                process: {
                    abscissionZone: {
                        location: "Base of petiole",
                        layers: {
                            abscissionLayer: "Weak cells that separate",
                            protectiveLayer: "Cork cells seal wound"
                        }
                    },
                    stages: [
                        "Nutrients mobilized from leaf to stem/roots",
                        "Chlorophyll breaks down (fall colors appear)",
                        "Abscission zone cells weaken",
                        "Leaf separates at abscission zone",
                        "Protective layer seals leaf scar"
                    ]
                },
                hormones: {
                    auxin: "High levels inhibit abscission",
                    ethylene: "Promotes abscission",
                    ratio: "Declining auxin + rising ethylene triggers abscission"
                },
                adaptiveValue: [
                    "Reduces water loss in winter/dry season",
                    "Prevents damage from snow/ice",
                    "Gets rid of old, inefficient leaves"
                ]
            },
            category: 'leaf_structure'
        };
    }

    // CONTENT GENERATION METHODS (same pattern as cell biology)

    generatePlantContent(problem, content) {
        const contentSections = [];

        // Generate overview section
        contentSections.push(this.generateOverviewSection(problem, content));

        // Generate detailed content based on topic type
        if (content.organs) {
            contentSections.push(this.generateOrgansContent(content));
        }

        if (content.transportSystems) {
            contentSections.push(this.generateTransportContent(content));
        }

        if (content.sexualReproduction || content.asexualReproduction) {
            contentSections.push(this.generateReproductionContent(content));
        }

        if (content.majorHormones) {
            contentSections.push(this.generateHormonesContent(content));
        }

        if (content.majorTropisms) {
            contentSections.push(this.generateTropismsContent(content));
        }

        if (content.tissueSystems) {
            contentSections.push(this.generateAnatomyContent(content));
        }

        if (content.stages) {
            contentSections.push(this.generatePhotosynthesisContent(content));
        }

        if (content.essentialElements) {
            contentSections.push(this.generateNutritionContent(content));
        }

        if (content.typesOfGrowth) {
            contentSections.push(this.generateGrowthContent(content));
        }

        if (content.waterAdaptations) {
            contentSections.push(this.generateAdaptationsContent(content));
        }

        // Add comparisons if available
        if (content.comparison || content.comparisonTable) {
            contentSections.push(this.generateComparisonsSection(content));
        }

        return contentSections;
    }

    generateOverviewSection(problem, content) {
        return {
            sectionType: 'overview',
            title: content.topic || problem.originalTopic,
            category: content.category,
            description: content.description || content.summary || content.definition || `Overview of ${content.topic}`,
            keyPoints: this.extractKeyPoints(content),
            relevance: this.getTopicRelevance(problem.type)
        };
    }

    generateOrgansContent(content) {
        return {
            sectionType: 'organs_list',
            title: 'Plant Organs',
            organs: content.organs.map(organ => ({
                name: organ.name,
                type: organ.type,
                functions: organ.mainFunctions || organ.functions,
                types: organ.types,
                structure: organ.structure,
                diagram: organ.diagram
            })),
            tissueSystems: content.tissueSystems
        };
    }

    generateTransportContent(content) {
        return {
            sectionType: 'transport_systems',
            title: 'Transport Systems',
            systems: content.transportSystems,
            comparison: content.comparison,
            regulation: content.stomatalRegulation
        };
    }

    generateReproductionContent(content) {
        return {
            sectionType: 'reproduction',
            title: 'Plant Reproduction',
            sexual: content.sexualReproduction,
            asexual: content.asexualReproduction,
            germination: content.germination
        };
    }

    generateHormonesContent(content) {
        return {
            sectionType: 'hormones',
            title: 'Plant Hormones',
            hormones: content.majorHormones,
            interactions: content.hormoneInteractions,
            comparisonTable: content.comparisonTable
        };
    }

    generateTropismsContent(content) {
        return {
            sectionType: 'tropisms',
            title: 'Tropisms and Movements',
            tropisms: content.majorTropisms,
            nasticMovements: content.nasticMovements
        };
    }

    generateAnatomyContent(content) {
        return {
            sectionType: 'anatomy',
            title: 'Plant Anatomy',
            tissueSystems: content.tissueSystems,
            meristems: content.meristematicTissues,
            organAnatomy: content.organAnatomy
        };
    }

    generatePhotosynthesisContent(content) {
        return {
            sectionType: 'photosynthesis',
            title: 'Photosynthesis',
            stages: content.stages,
            variations: content.photosynthesisVariations,
            factors: content.factorsAffectingPhotosynthesis
        };
    }

    generateNutritionContent(content) {
        return {
            sectionType: 'nutrition',
            title: 'Plant Nutrition',
            essentialElements: content.essentialElements,
            uptake: content.mineralUptake,
            nitrogenCycle: content.nitrogenCycle
        };
    }

    generateGrowthContent(content) {
        return {
            sectionType: 'growth',
            title: 'Plant Growth',
            types: content.typesOfGrowth,
            phases: content.developmentalPhases,
            meristems: content.meristems
        };
    }

    generateAdaptationsContent(content) {
        return {
            sectionType: 'adaptations',
            title: 'Plant Adaptations',
            waterAdaptations: content.waterAdaptations,
            temperatureAdaptations: content.temperatureAdaptations,
            otherAdaptations: {
                light: content.lightAdaptations,
                soil: content.soilAdaptations
            }
        };
    }

    generateComparisonsSection(content) {
        const comparisons = content.comparison || content.comparisonTable;
        return {
            sectionType: 'comparisons',
            title: 'Comparisons',
            data: comparisons
        };
    }

    // HELPER METHODS

    extractKeyPoints(content) {
        const keyPoints = [];

        if (content.characteristics) keyPoints.push(...content.characteristics);
        if (content.functions) keyPoints.push(...content.functions);
        if (content.mainCategories) keyPoints.push(...content.mainCategories);
        if (content.concepts) keyPoints.push(...content.concepts);

        return keyPoints.slice(0, 5); // Limit to top 5
    }

    getTopicRelevance(topicType) {
        const relevance = {
            plant_structure: "Understanding plant organs is fundamental to plant biology",
            plant_transport: "Transport systems sustain life in all vascular plants",
            plant_reproduction: "Reproduction ensures species survival and genetic diversity",
            plant_hormones: "Hormones coordinate all aspects of plant growth and development",
            tropisms: "Tropisms allow plants to respond to their environment",
            plant_anatomy: "Tissue organization reflects functional specialization",
            photosynthesis: "Photosynthesis is the basis of life on Earth",
            plant_nutrition: "Proper nutrition is essential for plant health and productivity",
            plant_growth: "Growth patterns determine plant form and function",
            plant_adaptations: "Adaptations enable plants to thrive in diverse environments",
            root_systems: "Roots anchor plants and acquire essential resources",
            leaf_structure: "Leaves are optimized for photosynthesis and gas exchange"
        };

        return relevance[topicType] || "Important plant biology concept";
    }

    // DIAGRAM GENERATION

    generatePlantDiagramData() {
        if (!this.currentContent) return;

        const { type } = this.currentProblem;

        this.diagramData = {
            type: type,
            diagrams: this.getRelevantDiagrams(type),
            placeholder: true,
            note: "Diagram generation will be implemented with actual plant diagrams"
        };
    }

    getRelevantDiagrams(topicType) {
        const diagramMap = {
            plant_structure: ["root_structure", "stem_structure", "leaf_structure", "tissue_systems"],
            plant_transport: ["xylem_transport", "phloem_transport", "transpiration", "translocation"],
            plant_reproduction: ["flower_structure", "pollination", "fertilization", "seed_development"],
            plant_hormones: ["auxin_effects", "hormone_interactions", "apical_dominance"],
            tropisms: ["phototropism", "gravitropism", "thigmotropism"],
            plant_anatomy: ["root_cross_section", "stem_cross_section", "leaf_cross_section"],
            photosynthesis: ["chloroplast_structure", "light_reactions", "calvin_cycle", "c4_cam"],
            plant_nutrition: ["mineral_uptake", "nitrogen_cycle", "mycorrhizae"],
            plant_growth: ["meristems", "primary_secondary_growth", "annual_rings"],
            plant_adaptations: ["xerophyte", "hydrophyte", "c4_cam_adaptations"],
            root_systems: ["root_zones", "root_types", "modified_roots"],
            leaf_structure: ["leaf_anatomy", "stomata", "mesophyll"]
        };

        return diagramMap[topicType] || [];
    }

    // WORKBOOK GENERATION

    generatePlantWorkbook() {
        if (!this.currentContent || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createPlantProblemSection(),
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
            title: `Plant Biology Workbook: ${this.currentContent?.topic || 'Unknown Topic'}`,
            created: new Date().toISOString(),
            theme: this.theme,
            explanationLevel: this.explanationLevel,
            sections: []
        };
    }

    createPlantProblemSection() {
        if (!this.currentProblem) return null;

        return {
            title: 'Topic Information',
            type: 'problem',
            data: [
                ['Topic Type', this.currentProblem.type],
                ['Main Topic', this.currentProblem.originalTopic],
                ['Sub-Topic', this.currentProblem.subTopic || 'General'],
                ['Category', this.plantTopics[this.currentProblem.type]?.category || 'N/A']
            ]
        };
    }

    createContentOverviewSection() {
        if (!this.currentContent) return null;

        const overviewData = [
            ['Topic', this.currentContent.topic],
            ['Category', this.currentContent.category]
        ];

        if (this.currentContent.definition) {
            overviewData.push(['Definition', this.currentContent.definition]);
        }

        if (this.currentContent.mainCategories) {
            overviewData.push(['Main Categories', this.currentContent.mainCategories.join('; ')]);
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

        // Add content based on type
        if (this.currentContent.organs) {
            this.currentContent.organs.forEach(organ => {
                contentData.push([organ.name, '']);
                if (organ.mainFunctions) {
                    contentData.push(['Functions', organ.mainFunctions.join('; ')]);
                }
                contentData.push(['', '']);
            });
        }

        // Add other content types...
        // Similar pattern for transportSystems, hormones, etc.

        return contentData.length > 0 ? {
            title: 'Detailed Content',
            type: 'detailed_content',
            data: contentData
        } : null;
    }

    createComparisonsSection() {
        const comparisons = this.currentContent?.comparison || this.currentContent?.comparisonTable;
        if (!comparisons) return null;

        return {
            title: 'Comparisons',
            type: 'comparisons',
            data: comparisons
        };
    }

    createExamplesApplicationsSection() {
        if (!this.currentContent.examples && !this.currentContent.applications) return null;

        const data = [];

        if (this.currentContent.examples) {
            data.push(['EXAMPLES', '']);
            // Add examples
        }

        if (this.currentContent.applications) {
            data.push(['APPLICATIONS', '']);
            this.currentContent.applications.forEach(app => {
                data.push(['•', app]);
            });
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

        if (lesson.keyDefinitions) {
            data.push(['', '']);
            data.push(['KEY DEFINITIONS', '']);
            Object.entries(lesson.keyDefinitions).forEach(([term, definition]) => {
                data.push([term, definition]);
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

        return {
            title: 'Diagram References',
            type: 'diagrams',
            data: data
        };
    }

    // UTILITY METHODS

    formatBotanicalTerm(term) {
        // Format botanical terms with proper symbols
        const formatted = term
            .replace(/H2O/g, this.botanicalSymbols.H2O)
            .replace(/CO2/g, this.botanicalSymbols.CO2)
            .replace(/O2/g, this.botanicalSymbols.O2);

        return formatted;
    }

    adaptPlantLanguage(text, level) {
        if (!text) return '';

        const adaptations = {
            basic: {
                replacements: {
                    'photosynthesis': 'making food from sunlight',
                    'transpiration': 'water loss from leaves',
                    'xylem': 'water tubes',
                    'phloem': 'food tubes',
                    'stomata': 'tiny pores',
                    'chloroplast': 'green parts that capture sunlight',
                    'mesophyll': 'leaf tissue',
                    'epidermis': 'outer layer'
                }
            },
            intermediate: {
                replacements: {
                    'photosynthesis': 'photosynthesis',
                    'xylem': 'xylem',
                    'phloem': 'phloem'
                }
            },
            detailed: {
                replacements: {
                    'photosynthesis': 'photosynthesis (light-dependent and light-independent reactions)',
                    'xylem': 'xylem (water-conducting vascular tissue)',
                    'phloem': 'phloem (sugar-transporting vascular tissue)'
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

    generatePlantAnalogy(concept) {
        const analogies = {
            xylem: "Like water pipes carrying water upward",
            phloem: "Like a delivery service transporting food throughout the plant",
            root: "Like an anchor and drinking straw combined",
            leaf: "Like a solar panel and air filter",
            stomata: "Like adjustable windows for air exchange",
            chloroplast: "Like a tiny factory converting sunlight to sugar",
            stem: "Like a highway system and structural column",
            flower: "Like a plant's reproductive organ",
            photosynthesis: "Like cooking with sunlight as the heat source",
            transpiration: "Like sweating to cool down"
        };

        return analogies[concept] || "Performs a specialized function in the plant";
    }

    // ASSESSMENT AND LEARNING METHODS

    assessContentDifficulty() {
        if (!this.currentContent) return 'unknown';

        let difficultyScore = 0;

        // Simple topics
        const simpleTopics = ['plant_structure', 'root_systems', 'leaf_structure'];
        if (simpleTopics.includes(this.currentProblem.type)) {
            difficultyScore += 1;
        }

        // Intermediate topics
        const intermediateTopics = ['plant_transport', 'plant_reproduction', 'tropisms', 'plant_anatomy'];
        if (intermediateTopics.includes(this.currentProblem.type)) {
            difficultyScore += 2;
        }

        // Complex topics
        const complexTopics = ['plant_hormones', 'photosynthesis', 'plant_nutrition', 'plant_adaptations'];
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
            plant_structure: [
                "Identify the three main plant organs and their functions",
                "Distinguish between different root and stem types",
                "Describe the organization of plant tissue systems",
                "Explain how structure relates to function in plants"
            ],
            plant_transport: [
                "Explain how water moves through plants via xylem",
                "Describe the mechanism of sugar transport in phloem",
                "Compare transpiration and translocation",
                "Understand the role of stomata in plant transport"
            ],
            plant_reproduction: [
                "Describe the structure and function of flower parts",
                "Explain the process of pollination and fertilization",
                "Compare sexual and asexual reproduction in plants",
                "Understand seed and fruit development"
            ],
            plant_hormones: [
                "Identify the five major plant hormones and their effects",
                "Explain how auxin mediates phototropism",
                "Describe hormone interactions in plant development",
                "Understand practical applications of plant hormones"
            ],
            tropisms: [
                "Define tropism and distinguish it from nastic movements",
                "Explain the mechanisms of phototropism and gravitropism",
                "Describe various types of tropisms in plants",
                "Relate tropisms to plant survival and adaptation"
            ],
            plant_anatomy: [
                "Identify the three tissue systems and their components",
                "Distinguish between simple and complex tissues",
                "Compare primary and secondary growth",
                "Relate tissue organization to plant function"
            ],
            photosynthesis: [
                "Describe the light-dependent and light-independent reactions",
                "Explain the role of chloroplasts in photosynthesis",
                "Compare C3, C4, and CAM photosynthesis",
                "Identify factors affecting photosynthetic rate"
            ],
            plant_nutrition: [
                "List the 17 essential elements for plants",
                "Distinguish between macronutrients and micronutrients",
                "Explain mechanisms of mineral uptake",
                "Diagnose nutrient deficiencies based on symptoms"
            ],
            plant_growth: [
                "Distinguish between primary and secondary growth",
                "Describe the role of meristems in plant growth",
                "Explain environmental influences on growth",
                "Compare determinate and indeterminate growth patterns"
            ],
            plant_adaptations: [
                "Describe adaptations of xerophytes, mesophytes, and hydrophytes",
                "Explain structural and physiological adaptations to environment",
                "Compare adaptations to different stress conditions",
                "Relate adaptations to plant survival in specific habitats"
            ],
            root_systems: [
                "Compare taproot and fibrous root systems",
                "Identify the zones of a growing root",
                "Describe modified roots and their functions",
                "Explain the importance of root-microbe symbioses"
            ],
            leaf_structure: [
                "Describe the internal anatomy of a leaf",
                "Explain the role of stomata in gas exchange",
                "Compare palisade and spongy mesophyll",
                "Identify various leaf modifications and their functions"
            ]
        };

        return objectivesDatabase[this.currentProblem.type] || [
            "Understand the key concepts of this topic",
            "Apply knowledge to plant biology contexts",
            "Make connections to other botanical principles"
        ];
    }

    identifyPrerequisites() {
        if (!this.currentProblem) return [];

        const prerequisitesDatabase = {
            plant_structure: [
                "Basic understanding of plant biology",
                "Knowledge of cells and tissues"
            ],
            plant_transport: [
                "Plant structure (xylem, phloem)",
                "Understanding of diffusion and osmosis",
                "Basic chemistry (water properties)"
            ],
            plant_reproduction: [
                "Plant structure (flower anatomy)",
                "Basic genetics (meiosis, fertilization)",
                "Understanding of life cycles"
            ],
            plant_hormones: [
                "Plant growth and development basics",
                "Cell biology (cell signaling)",
                "Understanding of chemical messengers"
            ],
            tropisms: [
                "Plant hormones (especially auxin)",
                "Understanding of stimuli and responses",
                "Basic plant anatomy"
            ],
            plant_anatomy: [
                "Cell structure and types",
                "Plant organs (roots, stems, leaves)",
                "Tissue concept"
            ],
            photosynthesis: [
                "Leaf structure (chloroplasts, mesophyll)",
                "Basic chemistry (chemical reactions)",
                "Understanding of energy"
            ],
            plant_nutrition: [
                "Basic chemistry (elements, ions)",
                "Root structure and function",
                "Understanding of plant metabolism"
            ],
            plant_growth: [
                "Cell division (mitosis)",
                "Plant structure and anatomy",
                "Meristem concept"
            ],
            plant_adaptations: [
                "Plant structure and function",
                "Environmental factors",
                "Natural selection concepts"
            ],
            root_systems: [
                "Plant structure basics",
                "Cell and tissue types",
                "Understanding of absorption and transport"
            ],
            leaf_structure: [
                "Plant organs",
                "Cell types",
                "Photosynthesis basics"
            ]
        };

        return prerequisitesDatabase[this.currentProblem.type] || [
            "General plant biology background"
        ];
    }

    generateStudyTips() {
        if (!this.currentProblem) return [];

        const studyTipsDatabase = {
            plant_structure: [
                "Draw and label diagrams of roots, stems, and leaves",
                "Create a comparison table of tissue systems",
                "Use plant specimens to observe structures",
                "Make flashcards for tissue types and functions"
            ],
            plant_transport: [
                "Draw the pathway of water from soil to atmosphere",
                "Create flowcharts for xylem and phloem transport",
                "Compare and contrast the two transport systems",
                "Use models or diagrams to visualize cohesion-tension"
            ],
            plant_reproduction: [
                "Dissect flowers to identify parts",
                "Create a timeline of reproduction from pollination to seed",
                "Draw and label flower structure from memory",
                "Compare sexual and asexual reproduction with examples"
            ],
            plant_hormones: [
                "Make a chart of hormones with effects and applications",
                "Use acronyms or mnemonics for the five major hormones",
                "Draw diagrams showing hormone effects",
                "Practice explaining hormone interactions"
            ],
            tropisms: [
                "Perform simple experiments (phototropism with seedlings)",
                "Draw before/after diagrams showing tropic responses",
                "Create comparison tables for different tropisms",
                "Distinguish tropisms from nastic movements with examples"
            ],
            plant_anatomy: [
                "Study microscope slides of plant tissues",
                "Draw cross-sections of roots, stems, and leaves",
                "Create tissue hierarchy diagrams",
                "Compare monocot and dicot anatomy side-by-side"
            ],
            photosynthesis: [
                "Memorize the overall equation",
                "Draw the chloroplast with reaction locations",
                "Create detailed flowcharts for light and dark reactions",
                "Compare C3, C4, and CAM in a table"
            ],
            plant_nutrition: [
                "Make flashcards for essential elements and deficiency symptoms",
                "Group nutrients by mobility (mobile vs immobile)",
                "Create a nitrogen cycle diagram",
                "Practice diagnosing deficiencies from photos"
            ],
            plant_growth: [
                "Draw and label different meristem types",
                "Create timelines for primary and secondary growth",
                "Study annual rings in wood samples",
                "Compare growth patterns in different plant types"
            ],
            plant_adaptations: [
                "Create adaptation comparison tables for different environments",
                "Examine real xerophyte and hydrophyte specimens",
                "Draw plants showing specific adaptations",
                "Relate each adaptation to its survival value"
            ],
            root_systems: [
                "Draw and label root zones",
                "Compare taproot and fibrous systems with examples",
                "Observe root hairs under microscope",
                "Create diagrams of modified roots"
            ],
            leaf_structure: [
                "Study leaf cross-sections under microscope",
                "Draw internal anatomy from memory",
                "Create stomata opening/closing mechanism diagrams",
                "Compare sun and shade leaf anatomy"
            ]
        };

        return studyTipsDatabase[this.currentProblem.type] || [
            "Review material regularly",
            "Create visual aids and diagrams",
            "Practice active recall",
            "Observe real plant specimens when possible"
        ];
    }

    generateAssessmentQuestions() {
        if (!this.currentProblem) return [];

        const questionsDatabase = {
            plant_structure: [
                {
                    question: "What are the three main functions of roots?",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "How does the structure of xylem vessels relate to their function?",
                    type: "analysis",
                    difficulty: "medium"
                },
                {
                    question: "Compare the tissue organization in monocot and dicot stems.",
                    type: "comparison",
                    difficulty: "hard"
                }
            ],
            plant_transport: [
                {
                    question: "What drives water movement in xylem?",
                    type: "explanation",
                    difficulty: "easy"
                },
                {
                    question: "Explain why cutting a ring of bark kills a tree.",
                    type: "application",
                    difficulty: "medium"
                },
                {
                    question: "How does the pressure-flow mechanism work in phloem?",
                    type: "explanation",
                    difficulty: "hard"
                }
            ],
            plant_reproduction: [
                {
                    question: "What is the difference between pollination and fertilization?",
                    type: "comparison",
                    difficulty: "easy"
                },
                {
                    question: "Describe the process of double fertilization in flowering plants.",
                    type: "explanation",
                    difficulty: "medium"
                },
                {
                    question: "Why is double fertilization considered an advantage for angiosperms?",
                    type: "analysis",
                    difficulty: "hard"
                }
            ],
            photosynthesis: [
                {
                    question: "Where do the light reactions of photosynthesis occur?",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "Why do C4 plants have an advantage in hot, dry climates?",
                    type: "explanation",
                    difficulty: "medium"
                },
                {
                    question: "Compare the costs and benefits of CAM photosynthesis.",
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
            plant_structure: ['plant_anatomy', 'root_systems', 'leaf_structure'],
            plant_transport: ['plant_structure', 'leaf_structure', 'plant_nutrition'],
            plant_reproduction: ['plant_hormones', 'plant_growth', 'plant_adaptations'],
            plant_hormones: ['tropisms', 'plant_growth', 'plant_reproduction'],
            tropisms: ['plant_hormones', 'plant_adaptations'],
            plant_anatomy: ['plant_structure', 'root_systems', 'leaf_structure'],
            photosynthesis: ['leaf_structure', 'plant_adaptations', 'plant_nutrition'],
            plant_nutrition: ['root_systems', 'plant_transport', 'photosynthesis'],
            plant_growth: ['plant_hormones', 'plant_anatomy', 'plant_structure'],
            plant_adaptations: ['plant_structure', 'photosynthesis', 'plant_nutrition'],
            root_systems: ['plant_structure', 'plant_transport', 'plant_nutrition'],
            leaf_structure: ['plant_structure', 'photosynthesis', 'plant_transport']
        };

        const relatedTypes = relatedTopicsMap[this.currentProblem.type] || [];
        
        return relatedTypes.map(type => ({
            type: type,
            name: this.plantTopics[type]?.name,
            description: this.plantTopics[type]?.description
        }));
    }

    generateGlossary() {
        if (!this.currentContent) return {};

        const glossary = {};

        // Extract key terms from content
        if (this.currentContent.organs) {
            this.currentContent.organs.forEach(organ => {
                glossary[organ.name] = organ.type;
            });
        }

        if (this.currentContent.majorHormones) {
            Object.keys(this.currentContent.majorHormones).forEach(hormone => {
                const hormoneData = this.currentContent.majorHormones[hormone];
                glossary[hormoneData.name] = hormoneData.description || 'Plant hormone';
            });
        }

        return glossary;
    }

    generateProcessTimeline(processName) {
        const timelines = {
            'Germination': [
                { phase: 'Imbibition', duration: 'Hours', events: 'Water absorption, seed swelling' },
                { phase: 'Activation', duration: 'Hours-Days', events: 'Enzyme activation, metabolism resumes' },
                { phase: 'Radicle Emergence', duration: 'Days', events: 'Root breaks through seed coat' },
                { phase: 'Shoot Emergence', duration: 'Days', events: 'Hypocotyl or epicotyl elongates' },
                { phase: 'Establishment', duration: 'Weeks', events: 'True leaves develop, photosynthesis begins' }
            ],
            'Photosynthesis': [
                { stage: 'Light Reactions', location: 'Thylakoids', output: 'ATP, NADPH, O₂' },
                { stage: 'Calvin Cycle', location: 'Stroma', output: 'Glucose' }
            ],
            'Transpiration': [
                { step: 'Water absorption', location: 'Root hairs', process: 'Osmosis' },
                { step: 'Upward transport', location: 'Xylem', process: 'Cohesion-tension' },
                { step: 'Evaporation', location: 'Mesophyll cells', process: 'Phase change' },
                { step: 'Diffusion', location: 'Stomata', process: 'Gas exchange' }
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

        if (this.currentContent.mainCategories) {
            hierarchy.children = this.currentContent.mainCategories.map(cat => ({
                name: cat,
                type: 'category'
            }));
        }

        return hierarchy;
    }

    // VALIDATION AND STATUS METHODS

    validatePlantContent(content) {
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

        return validationResults;
    }

    calculateContentCompleteness() {
        if (!this.currentContent) return 0;

        let score = 0;
        const maxScore = 10;

        if (this.currentContent.topic) score += 1;
        if (this.currentContent.description || this.currentContent.definition) score += 1;
        if (this.currentContent.functions) score += 1;
        if (this.currentContent.examples) score += 1;

        // Check for main content
        const hasMainContent = 
            this.currentContent.organs ||
            this.currentContent.transportSystems ||
            this.currentContent.majorHormones ||
            this.currentContent.majorTropisms ||
            this.currentContent.tissueSystems;
        
        if (hasMainContent) score += 4;

        return Math.round((score / maxScore) * 100);
    }

    getContentQualityMetrics() {
        return {
            completeness: this.calculateContentCompleteness(),
            hasExamples: !!this.currentContent?.examples,
            hasComparisons: !!(this.currentContent?.comparison || this.currentContent?.comparisonTable),
            hasApplications: !!this.currentContent?.applications,
            detailLevel: this.explanationLevel,
            includesVisualizations: this.includeVisualizations,
            includesMisconceptions: this.includeCommonMisconceptions
        };
    }

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

    getAvailableTopics() {
        return Object.entries(this.plantTopics).map(([key, topic]) => ({
            id: key,
            name: topic.name,
            category: topic.category,
            description: topic.description
        }));
    }

    getTopicDetails(topicId) {
        const topic = this.plantTopics[topicId];
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

    // EXPORT METHODS

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

        if (content.definition) {
            markdown += `**Definition:** ${content.definition}\n\n`;
        }

        return markdown;
    }

    convertToHTML(content) {
        let html = `<div class="plant-biology-content">\n`;
        html += `  <h1>${content.topic}</h1>\n`;

        if (content.definition) {
            html += `  <p class="definition"><strong>Definition:</strong> ${content.definition}</p>\n`;
        }

        html += `</div>`;
        return html;
    }
}

// Export the class
export default EnhancedPlantBiologyWorkbook;







