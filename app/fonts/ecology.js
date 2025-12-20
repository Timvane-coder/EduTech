
// Enhanced Ecology Biology Workbook - Comprehensive Ecological Content System
import * as math from 'mathjs';

export class EnhancedEcologyBiologyWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "ecological";
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

        this.ecologicalSymbols = this.initializeEcologicalSymbols();
        this.setThemeColors();
        this.initializeEcologyTopics();
        this.initializeMisconceptionDatabase();
        this.initializeExplanationTemplates();
        this.initializeEcologyLessons();
    }

    setThemeColors() {
        const themes = {
            ecological: {
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

        this.colors = themes[this.theme] || themes.ecological;
    }

    initializeEcologicalSymbols() {
        return {
            // Common ecological symbols
            'alpha': 'α',
            'beta': 'β',
            'gamma': 'γ',
            'delta': 'Δ',
            'arrow': '→',
            'doubleArrow': '↔',
            'plus': '⊕',
            'minus': '⊖',
            'approximately': '≈',
            'infinity': '∞',
            'proportional': '∝',
            'increase': '↑',
            'decrease': '↓',
            // Ecological notation
            'CO2': 'CO₂',
            'O2': 'O₂',
            'H2O': 'H₂O',
            'N2': 'N₂',
            'NH3': 'NH₃',
            'NO3': 'NO₃⁻',
            'PO4': 'PO₄³⁻',
            'producer': '🌱',
            'consumer': '🦌',
            'decomposer': '🍄',
            'energy': '⚡'
        };
    }

    initializeEcologyTopics() {
        this.ecologyTopics = {
            // 1. Ecosystems
            ecosystems: {
                patterns: [
                    /ecosystem/i,
                    /ecological.*system/i,
                    /biotic.*abiotic/i,
                    /habitat.*community/i
                ],
                handler: this.handleEcosystems.bind(this),
                name: 'Ecosystems',
                category: 'ecology_fundamentals',
                description: 'Interactions between living organisms and their environment'
            },

            // 2. Food Webs
            food_webs: {
                patterns: [
                    /food.*web|food.*chain/i,
                    /trophic.*level/i,
                    /producer.*consumer/i,
                    /feeding.*relationship/i
                ],
                handler: this.handleFoodWebs.bind(this),
                name: 'Food Webs',
                category: 'energy_relationships',
                description: 'Complex feeding relationships in ecosystems'
            },

            // 3. Energy Flow
            energy_flow: {
                patterns: [
                    /energy.*flow|energy.*transfer/i,
                    /energy.*pyramid/i,
                    /10.*percent.*rule/i,
                    /biomass.*pyramid/i
                ],
                handler: this.handleEnergyFlow.bind(this),
                name: 'Energy Flow',
                category: 'energy_relationships',
                description: 'Transfer of energy through trophic levels'
            },

            // 4. Nutrient Cycles
            nutrient_cycles: {
                patterns: [
                    /nutrient.*cycle|biogeochemical.*cycle/i,
                    /carbon.*cycle|nitrogen.*cycle|water.*cycle/i,
                    /phosphorus.*cycle/i,
                    /cycling.*matter/i
                ],
                handler: this.handleNutrientCycles.bind(this),
                name: 'Nutrient Cycles',
                category: 'matter_cycling',
                description: 'Movement of essential elements through ecosystems'
            },

            // 5. Population Dynamics
            population_dynamics: {
                patterns: [
                    /population.*dynamic|population.*growth/i,
                    /carrying.*capacity/i,
                    /exponential.*logistic.*growth/i,
                    /population.*ecology/i
                ],
                handler: this.handlePopulationDynamics.bind(this),
                name: 'Population Dynamics',
                category: 'population_ecology',
                description: 'Changes in population size and structure over time'
            },

            // 6. Biomes
            biomes: {
                patterns: [
                    /biome/i,
                    /terrestrial.*ecosystem/i,
                    /aquatic.*ecosystem/i,
                    /desert|tundra|rainforest|grassland|taiga/i
                ],
                handler: this.handleBiomes.bind(this),
                name: 'Biomes',
                category: 'large_scale_ecology',
                description: 'Large-scale ecological regions with characteristic climates and communities'
            },

            // 7. Symbiosis
            symbiosis: {
                patterns: [
                    /symbiosis|symbiotic/i,
                    /mutualism|commensalism|parasitism/i,
                    /predation|competition/i,
                    /species.*interaction/i
                ],
                handler: this.handleSymbiosis.bind(this),
                name: 'Symbiosis',
                category: 'species_interactions',
                description: 'Close relationships between different species'
            },
            
            // 8. Ecological Succession
            ecological_succession: {
                patterns: [
                    /succession|ecological.*succession/i,
                    /primary.*succession|secondary.*succession/i,
                    /pioneer.*species|climax.*community/i,
                    /community.*change/i
                ],
                handler: this.handleEcologicalSuccession.bind(this),
                name: 'Ecological Succession',
                category: 'community_ecology',
                description: 'Predictable changes in community composition over time'
            }
        };
    }

    /*"initializeEcologyLessons() {
        this.lessons = {
            ecosystems: {
                title: "Ecosystems: Structure and Function",
                concepts: [
                    "Ecosystems include both living and non-living components",
                    "Biotic factors are living organisms in an ecosystem",
                    "Abiotic factors are non-living physical and chemical conditions",
                    "Ecosystems can be studied at various scales"
                ],
                theory: "An ecosystem is a community of organisms interacting with each other and their physical environment. Energy flows through ecosystems while matter cycles within them.",
                keyDefinitions: {
                    "Ecosystem": "A biological community of interacting organisms and their physical environment",
                    "Biotic Factors": "Living components (plants, animals, fungi, bacteria)",
                    "Abiotic Factors": "Non-living components (temperature, water, sunlight, soil, pH)",
                    "Habitat": "The physical location where an organism lives",
                    "Niche": "The role an organism plays in its ecosystem",
                    "Community": "All populations of different species in an area",
                    "Population": "All individuals of one species in an area"
                },
                mainCategories: [
                    "Biotic components (producers, consumers, decomposers)",
                    "Abiotic components (climate, soil, water, light)",
                    "Energy flow through the system",
                    "Matter cycling within the system"
                ],
                applications: [
                    "Conservation and ecosystem management",
                    "Understanding environmental impacts",
                    "Predicting ecosystem responses to change",
                    "Sustainable resource use"
                ]
            },

            food_webs: {
                title: "Food Webs and Trophic Relationships",
                concepts: [
                    "Food chains show linear feeding relationships",
                    "Food webs show complex interconnected feeding relationships",
                    "Organisms occupy different trophic levels",
                    "Energy flows from producers to top predators"
                ],
                theory: "Food webs illustrate the complex feeding relationships in ecosystems. They show how energy and matter flow through different trophic levels, from producers through various levels of consumers.",
                keyDefinitions: {
                    "Food Chain": "Linear sequence showing who eats whom",
                    "Food Web": "Complex network of interconnected food chains",
                    "Trophic Level": "Position in the food chain (producer, primary consumer, etc.)",
                    "Producer": "Organism that makes its own food (autotroph)",
                    "Consumer": "Organism that eats other organisms (heterotroph)",
                    "Decomposer": "Organism that breaks down dead matter",
                    "Primary Consumer": "Herbivore that eats producers",
                    "Secondary Consumer": "Carnivore that eats primary consumers",
                    "Tertiary Consumer": "Top predator that eats secondary consumers"
                },
                mainCategories: [
                    "Producers (autotrophs): plants, algae, photosynthetic bacteria",
                    "Consumers (heterotrophs): herbivores, carnivores, omnivores",
                    "Decomposers: bacteria, fungi, detritivores",
                    "Trophic levels: primary, secondary, tertiary, apex"
                ],
                applications: [
                    "Understanding ecosystem stability",
                    "Predicting impacts of species loss",
                    "Managing fisheries and wildlife",
                    "Analyzing ecosystem health"
                ]
            },

            energy_flow: {
                title: "Energy Flow Through Ecosystems",
                concepts: [
                    "Energy enters ecosystems as sunlight",
                    "Only 10% of energy transfers between trophic levels",
                    "Energy is lost as heat at each transfer",
                    "Energy flows one-way through ecosystems"
                ],
                theory: "The 10% Rule states that only about 10% of energy is transferred from one trophic level to the next. The remaining 90% is used for metabolism, movement, and is lost as heat. This limits the number of trophic levels in an ecosystem.",
                keyDefinitions: {
                    "Energy Pyramid": "Diagram showing energy available at each trophic level",
                    "Biomass": "Total mass of living organisms in an area",
                    "10% Rule": "Only ~10% of energy transfers between trophic levels",
                    "Primary Productivity": "Rate at which producers convert solar energy to chemical energy",
                    "Gross Primary Productivity (GPP)": "Total energy captured by producers",
                    "Net Primary Productivity (NPP)": "Energy available after producer respiration (GPP - respiration)",
                    "Trophic Efficiency": "Percentage of energy transferred between levels"
                },
                energyFlow: {
                    sunlight: "100% enters ecosystem",
                    producers: "~1% captured by photosynthesis",
                    primaryConsumers: "~10% of producer energy",
                    secondaryConsumers: "~10% of primary consumer energy",
                    tertiaryConsumers: "~10% of secondary consumer energy"
                },
                applications: [
                    "Understanding ecosystem productivity",
                    "Managing agricultural systems",
                    "Analyzing energy efficiency",
                    "Predicting food chain length"
                ]
            },

            nutrient_cycles: {
                title: "Nutrient Cycles in Ecosystems",
                concepts: [
                    "Matter cycles through ecosystems (unlike energy)",
                    "Nutrients move between biotic and abiotic reservoirs",
                    "Decomposers play crucial roles in nutrient cycling",
                    "Human activities can disrupt natural cycles"
                ],
                theory: "Biogeochemical cycles describe how essential elements (carbon, nitrogen, phosphorus, water) move through living organisms, the atmosphere, water, and soil. Unlike energy, matter is recycled within ecosystems.",
                keyCycles: {
                    "Carbon Cycle": "Movement of carbon through atmosphere, organisms, and earth",
                    "Nitrogen Cycle": "Conversion and movement of nitrogen through various forms",
                    "Water Cycle": "Continuous movement of water through evaporation, precipitation, and runoff",
                    "Phosphorus Cycle": "Movement of phosphorus through rocks, soil, water, and organisms"
                },
                processes: {
                    carbon: ["Photosynthesis (CO₂ → glucose)", "Respiration (glucose → CO₂)", "Decomposition", "Combustion", "Ocean absorption"],
                    nitrogen: ["Nitrogen fixation (N₂ → NH₃)", "Nitrification (NH₃ → NO₃⁻)", "Assimilation", "Ammonification", "Denitrification (NO₃⁻ → N₂)"],
                    water: ["Evaporation", "Transpiration", "Condensation", "Precipitation", "Runoff", "Infiltration"],
                    phosphorus: ["Weathering of rocks", "Uptake by plants", "Consumption", "Decomposition", "Sedimentation"]
                },
                applications: [
                    "Managing agricultural nutrients",
                    "Understanding climate change",
                    "Water resource management",
                    "Pollution control"
                ]
            },

            population_dynamics: {
                title: "Population Dynamics and Growth",
                concepts: [
                    "Populations grow and shrink based on birth, death, immigration, emigration",
                    "Exponential growth occurs with unlimited resources",
                    "Logistic growth occurs with limited resources",
                    "Carrying capacity limits population size"
                ],
                theory: "Population dynamics examines changes in population size and structure over time. Growth is influenced by density-dependent and density-independent factors, ultimately limited by the environment's carrying capacity.",
                keyDefinitions: {
                    "Population": "All individuals of one species in an area",
                    "Population Density": "Number of individuals per unit area",
                    "Carrying Capacity (K)": "Maximum population size the environment can sustain",
                    "Exponential Growth": "J-shaped curve; unlimited resources",
                    "Logistic Growth": "S-shaped curve; limited resources",
                    "Limiting Factors": "Resources or conditions that limit population growth",
                    "Density-Dependent Factors": "Factors whose effects depend on population density (competition, predation, disease)",
                    "Density-Independent Factors": "Factors unaffected by density (weather, natural disasters)"
                },
                growthModels: {
                    exponential: {
                        equation: "dN/dt = rN",
                        description: "Population grows without limit",
                        shape: "J-shaped curve",
                        conditions: "Unlimited resources, ideal environment"
                    },
                    logistic: {
                        equation: "dN/dt = rN((K-N)/K)",
                        description: "Population growth slows as it approaches carrying capacity",
                        shape: "S-shaped curve",
                        conditions: "Limited resources, environmental resistance"
                    }
                },
                applications: [
                    "Wildlife management",
                    "Fisheries management",
                    "Human population planning",
                    "Conservation strategies"
                ]
            },


            /**
            biomes: {
                title: "Biomes: Large-Scale Ecosystems",
                concepts: [
                    "Biomes are defined by climate and vegetation",
                    "Temperature and precipitation determine biome type",
                    "Each biome has characteristic flora and fauna",
                    "Biomes exist on land (terrestrial) and in water (aquatic)"
                ],
                theory: "Biomes are large geographic regions characterized by distinct climate patterns, vegetation types, and animal communities. Climate (primarily temperature and precipitation) is the main factor determining biome distribution.",
                


            terrestrialBiomes: {
                    "Tropical Rainforest": "High temperature, high precipitation year-round",
                    "Desert": "Low precipitation, extreme temperature variation",
                    "Grassland/Savanna": "Moderate precipitation, seasonal rainfall",
                    "Temperate Forest": "Moderate temperature, moderate precipitation, four seasons",
                    "Taiga/Boreal Forest": "Cold winters, short summers, moderate precipitation",
                    "Tundra": "Very cold, low precipitation, permafrost",
                    "Chaparral": "Hot dry summers, mild wet winters"
                },
                aquaticBiomes: {
                    "Freshwater": "Lakes, rivers, streams, wetlands",
                    "Marine": "Oceans, coral reefs, estuaries, intertidal zones"
                },
                applications: [
                    "Understanding biodiversity patterns",
                    "Climate change predictions",
                    "Conservation priorities",
                    "Agricultural planning"
                ]
            },

            symbiosis: {
                title: "Symbiosis and Species Interactions",
                concepts: [
                    "Symbiosis is a close relationship between species",
                    "Relationships can benefit, harm, or have no effect on partners",
                    "Competition occurs when organisms need the same resources",
                    "Predation and herbivory involve one organism consuming another"
                ],
                theory: "Species interactions shape community structure and evolution. These relationships include symbiotic associations (mutualism, commensalism, parasitism), competition, predation, and herbivory.",
                keyDefinitions: {
                    "Symbiosis": "Close, long-term interaction between species",
                    "Mutualism": "Both species benefit (+/+)",
                    "Commensalism": "One benefits, other unaffected (+/0)",
                    "Parasitism": "One benefits, other harmed (+/-)",
                    "Competition": "Both harmed when using same resources (-/-)",
                    "Predation": "One kills and eats the other (+/-)",
                    "Herbivory": "Animal eats plant material (+/-)"
                },
                interactionTypes: [
                    "Mutualism: bees and flowers, nitrogen-fixing bacteria and legumes",
                    "Commensalism: barnacles on whales, epiphytic plants on trees",
                    "Parasitism: tapeworms in hosts, mistletoe on trees",
                    "Competition: lions and hyenas for prey, plants for sunlight",
                    "Predation: wolves eating deer, owls eating mice",
                    "Herbivory: deer eating plants, caterpillars eating leaves"
                ],
                applications: [
                    "Biological pest control",
                    "Understanding coevolution",
                    "Managing invasive species",
                    "Conservation biology"
                ]
            },

            ecological_succession: {
                title: "Ecological Succession",
                concepts: [
                    "Succession is predictable change in community composition",
                    "Primary succession starts on bare substrate",
                    "Secondary succession starts after disturbance",
                    "Pioneer species colonize first, climax community is final stage"
                ],
                theory: "Ecological succession is the gradual, sequential replacement of one community by another. It occurs through predictable stages from pioneer species to climax community, driven by changes in environmental conditions caused by the organisms themselves.",
                keyDefinitions: {
                    "Ecological Succession": "Predictable change in species composition over time",
                    "Primary Succession": "Occurs on bare substrate (no soil)",
                    "Secondary Succession": "Occurs after disturbance (soil present)",
                    "Pioneer Species": "First colonizers (lichens, mosses, grasses)",
                    "Intermediate Species": "Species that replace pioneers",
                    "Climax Community": "Stable, mature community",
                    "Disturbance": "Event that disrupts community (fire, flood, hurricane)"
                },
                stages: {
                    primary: [
                        "Bare rock/sand",
                        "Pioneer species (lichens, mosses)",
                        "Small plants (grasses, ferns)",
                        "Shrubs and small trees",
                        "Mature forest (climax community)"
                    ],
                    secondary: [
                        "Disturbed area with soil",
                        "Annual weeds and grasses",
                        "Perennial plants and shrubs",
                        "Young forest",
                        "Mature forest (climax community)"
                    ]
                },
                applications: [
                    "Ecosystem restoration",
                    "Understanding forest recovery",
                    "Managing disturbed lands",
                    "Predicting community changes"
                ]
            }
        };
    }
    */
    initializeMisconceptionDatabase() {
        this.commonMisconceptions = {
            ecosystems: {
                'Biotic vs Abiotic': [
                    'Thinking dead organisms are abiotic (they\'re still biotic)',
                    'Believing soil is purely abiotic (it contains living organisms)',
                    'Confusing habitat with ecosystem (habitat is just the location)'
                ],
                'Energy and Matter': [
                    'Thinking energy cycles like matter (energy flows one-way)',
                    'Believing all energy comes from sun (some bacteria use chemicals)',
                    'Confusing energy flow with matter cycling'
                ]
            },
            food_webs: {
                'Food Chains vs Webs': [
                    'Thinking organisms eat only one food source (most have varied diets)',
                    'Believing food chains are separate (they\'re interconnected)',
                    'Assuming simple linear relationships (webs are complex networks)'
                ],
                'Trophic Levels': [
                    'Thinking organisms are at one trophic level only (many occupy multiple)',
                    'Believing all producers are plants (algae and bacteria too)',
                    'Confusing decomposers with detritivores'
                ]
            },
            energy_flow: {
                'Energy Transfer': [
                    'Thinking energy is recycled (it\'s lost as heat)',
                    'Believing 100% of energy transfers (only ~10% does)',
                    'Confusing energy pyramids with biomass pyramids (they can differ)'
                ],
                '10% Rule': [
                    'Thinking the 10% is exact (it\'s approximate, varies 5-20%)',
                    'Believing energy is destroyed (it\'s converted to heat)',
                    'Assuming efficiency is the same in all ecosystems'
                ]
            },
            nutrient_cycles: {
                'Cycling vs Flow': [
                    'Thinking nutrients flow out like energy (they cycle)',
                    'Believing all cycles are the same (each has unique pathways)',
                    'Confusing reservoirs with processes'
                ],
                'Specific Cycles': [
                    'Thinking plants use nitrogen from air directly (they need fixed nitrogen)',
                    'Believing all carbon is in atmosphere (oceans store more)',
                    'Assuming water only cycles through atmosphere (groundwater too)'
                ]
            },
            population_dynamics: {
                'Growth Models': [
                    'Thinking populations always grow exponentially (most are logistic)',
                    'Believing carrying capacity is constant (it changes)',
                    'Confusing r (growth rate) with K (carrying capacity)'
                ],
                'Limiting Factors': [
                    'Thinking only food limits populations (many factors involved)',
                    'Believing density-independent factors don\'t affect large populations',
                    'Assuming all populations reach carrying capacity smoothly'
                ]
            },
            biomes: {
                'Climate and Biomes': [
                    'Thinking latitude alone determines biome (altitude and rain matter too)',
                    'Believing all rainforests are tropical (temperate rainforests exist)',
                    'Confusing biome with ecosystem (biomes are much larger)'
                ],
                'Adaptations': [
                    'Thinking all desert organisms are similar (different deserts, different species)',
                    'Believing tundra and desert are similar (very different moisture levels)',
                    'Assuming biome boundaries are sharp (they grade into each other)'
                ]
            },
            symbiosis: {
                'Types of Relationships': [
                    'Thinking all symbiosis is mutualistic (includes parasitism and commensalism)',
                    'Believing parasites always kill hosts (many don\'t)',
                    'Confusing predation with parasitism (different strategies)'
                ],
                'Competition': [
                    'Thinking competition requires contact (can be indirect)',
                    'Believing stronger competitor always wins (niche partitioning prevents this)',
                    'Assuming competition is always harmful (can drive evolution)'
                ]
            },
            ecological_succession: {
                'Primary vs Secondary': [
                    'Confusing the two types (primary has no soil initially)',
                    'Thinking succession always reaches climax (disturbances can reset it)',
                    'Believing succession is always sequential (can have setbacks)'
                ],
                'Process': [
                    'Thinking later species outcompete pioneers (pioneers change environment)',
                    'Believing climax is always forest (depends on climate)',
                    'Assuming succession happens quickly (can take hundreds of years)'
                ]
            }
        };

        this.clarificationStrategies = {
            visual_comparison: {
                method: 'Use side-by-side diagrams to highlight differences',
                effectiveness: 'High for structural and process comparisons'
            },
            analogy: {
                method: 'Relate ecological concepts to familiar everyday examples',
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
            evolutionary: {
                focus: 'Historical development and adaptations',
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
                vocabulary: 'standard ecological terms',
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
    handleEcologyProblem(config) {
        const { topic, parameters, subTopic, context } = config;

        try {
            // Parse the ecological query
            this.currentProblem = this.parseEcologyProblem(topic, parameters, subTopic, context);

            // Get content based on topic
            this.currentContent = this.getEcologyContent(this.currentProblem);

            // Generate content steps/sections
            this.contentSteps = this.generateEcologyContent(this.currentProblem, this.currentContent);

            // Generate diagram data if applicable
            this.generateEcologyDiagramData();

            // Generate workbook
            this.generateEcologyWorkbook();

            return {
                workbook: this.currentWorkbook,
                content: this.currentContent,
                diagrams: this.diagramData
            };

        } catch (error) {
            throw new Error(`Failed to process ecology topic: ${error.message}`);
        }
    }

    parseEcologyProblem(topic, parameters = {}, subTopic = null, context = {}) {
        let topicType = null;

        // Match topic to handler
        for (const [type, config] of Object.entries(this.ecologyTopics)) {
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
            throw new Error(`Unable to recognize ecology topic: ${topic}`);
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

    getEcologyContent(problem) {
        const handler = this.ecologyTopics[problem.type]?.handler;
        if (!handler) {
            throw new Error(`No handler available for ecology topic: ${problem.type}`);
        }

        return handler(problem);
    }

    // TOPIC HANDLERS

    handleEcosystems(problem) {
        return {
            topic: "Ecosystems",
            definition: "A biological community of interacting organisms and their physical environment",
            components: {
                biotic: {
                    name: "Biotic Factors",
                    description: "Living components of an ecosystem",
                    categories: [
                        {
                            name: "Producers (Autotrophs)",
                            description: "Organisms that produce their own food through photosynthesis or chemosynthesis",
                            examples: ["Plants", "Algae", "Phytoplankton", "Cyanobacteria", "Photosynthetic bacteria"],
                            role: "Convert solar/chemical energy into organic compounds",
                            energySource: "Sunlight or chemical reactions"
                        },
                        {
                            name: "Consumers (Heterotrophs)",
                            description: "Organisms that obtain energy by consuming other organisms",
                            types: {
                                herbivores: {
                                    description: "Primary consumers that eat plants",
                                    examples: ["Deer", "Rabbits", "Caterpillars", "Zooplankton"]
                                },
                                carnivores: {
                                    description: "Secondary/tertiary consumers that eat animals",
                                    examples: ["Lions", "Hawks", "Snakes", "Sharks"]
                                },
                                omnivores: {
                                    description: "Consumers that eat both plants and animals",
                                    examples: ["Bears", "Humans", "Raccoons", "Pigs"]
                                },
                                detritivores: {
                                    description: "Consumers that eat dead organic matter",
                                    examples: ["Earthworms", "Millipedes", "Dung beetles"]
                                }
                            }
                        },
                        {
                            name: "Decomposers",
                            description: "Organisms that break down dead matter and return nutrients to soil",
                            examples: ["Bacteria", "Fungi", "Some protists"],
                            role: "Nutrient recycling, breaking down complex molecules",
                            importance: "Essential for nutrient cycling and soil formation"
                        }
                    ]
                },
                abiotic: {
                    name: "Abiotic Factors",
                    description: "Non-living physical and chemical components",
                    categories: [
                        {
                            factor: "Climate",
                            components: ["Temperature", "Precipitation", "Humidity", "Wind", "Seasonality"],
                            effects: "Determines species distribution and ecosystem type"
                        },
                        {
                            factor: "Light",
                            components: ["Intensity", "Duration (photoperiod)", "Quality (wavelength)"],
                            effects: "Affects photosynthesis, plant growth, animal behavior"
                        },
                        {
                            factor: "Water",
                            components: ["Availability", "Quality", "pH", "Salinity"],
                            effects: "Essential for all life, limits organism distribution"
                        },
                        {
                            factor: "Soil",
                            components: ["Texture", "pH", "Nutrients", "Moisture", "Organic matter"],
                            effects: "Determines plant growth and nutrient availability"
                        },
                        {
                            factor: "Atmosphere",
                            components: ["Oxygen", "Carbon dioxide", "Nitrogen", "Air pressure"],
                            effects: "Necessary for respiration and photosynthesis"
                        },
                        {
                            factor: "Topography",
                            components: ["Elevation", "Slope", "Aspect"],
                            effects: "Influences climate, water flow, species distribution"
                        }
                    ]
                }
            },
            ecosystemLevels: {
                organism: "Individual living thing",
                population: "All individuals of one species in an area",
                community: "All populations in an area",
                ecosystem: "Community plus abiotic factors",
                biome: "Large ecosystem with similar climate and organisms",
                biosphere: "All ecosystems on Earth"
            },
            keyRelationships: [
                "Predator-prey interactions",
                "Competition for resources",
                "Symbiotic relationships",
                "Nutrient cycling",
                "Energy flow"
            ],
            ecosystemTypes: {
                terrestrial: ["Forest", "Grassland", "Desert", "Tundra", "Taiga"],
                aquatic: {
                    freshwater: ["Lakes", "Rivers", "Streams", "Wetlands"],
                    marine: ["Ocean", "Coral reefs", "Estuaries", "Intertidal zones"]
                }
            },
            ecosystemServices: [
                "Provisioning: food, water, timber, fiber",
                "Regulating: climate regulation, flood control, disease control",
                "Supporting: nutrient cycling, soil formation, photosynthesis",
                "Cultural: recreation, aesthetic, spiritual"
            ],
            examples: [
                {
                    name: "Tropical Rainforest Ecosystem",
                    location: "Amazon, Congo, Southeast Asia",
                    biotic: "High biodiversity, dense vegetation, many animal species",
                    abiotic: "High temperature (25-30°C), high rainfall (2000-10000mm/year)",
                    characteristics: "Complex structure, high productivity"
                },
                {
                    name: "Desert Ecosystem",
                    location: "Sahara, Arabian, Mojave",
                    biotic: "Sparse vegetation, adapted animals (cacti, camels, lizards)",
                    abiotic: "Low rainfall (<250mm/year), extreme temperatures",
                    characteristics: "Low productivity, specialized adaptations"
                },
                {
                    name: "Coral Reef Ecosystem",
                    location: "Tropical oceans",
                    biotic: "High diversity, coral polyps, reef fish, algae",
                    abiotic: "Warm water (20-32°C), clear water, sunlight",
                    characteristics: "High biodiversity, symbiotic relationships"
                }
            ],
            category: 'ecosystems'
        };
    }

    handleFoodWebs(problem) {
        return {
            topic: "Food Webs and Trophic Relationships",
            definition: "Complex network of interconnected food chains showing feeding relationships in an ecosystem",
            foodChainVsFoodWeb: {
                foodChain: {
                    description: "Linear sequence showing who eats whom",
                    structure: "Simple, single pathway",
                    example: "Grass → Grasshopper → Frog → Snake → Hawk",
                    limitation: "Oversimplified; organisms usually eat multiple food sources"
                },
                foodWeb: {
                    description: "Complex network of many interconnected food chains",
                    structure: "Complex, multiple pathways",
                    advantages: ["More realistic", "Shows ecosystem complexity", "Reveals species interdependence"],
                    importance: "Better represents actual feeding relationships"
                }
            },
            trophicLevels: [
                {
                    level: "Primary Producers (1st Trophic Level)",
                    description: "Organisms that produce organic compounds from inorganic sources",
                    type: "Autotrophs",
                    energySource: "Sunlight (photosynthesis) or chemicals (chemosynthesis)",
                    examples: ["Plants", "Algae", "Phytoplankton", "Photosynthetic bacteria"],
                    biomass: "Largest biomass in most ecosystems",
                    energy: "Contains most energy in ecosystem"
                },
                {
                    level: "Primary Consumers (2nd Trophic Level)",
                    description: "Organisms that eat producers",
                    type: "Herbivores",
                    dietType: "Plant-eaters",
                    examples: ["Deer", "Rabbits", "Caterpillars", "Zooplankton", "Grasshoppers"],
                    biomass: "~10% of producer biomass",
                    energy: "~10% of producer energy"
                },
                {
                    level: "Secondary Consumers (3rd Trophic Level)",
                    description: "Organisms that eat primary consumers",
                    type: "Carnivores or omnivores",
                    dietType: "Meat-eaters or mixed diet",
                    examples: ["Frogs", "Small fish", "Spiders", "Insectivorous birds"],
                    biomass: "~10% of primary consumer biomass",
                    energy: "~10% of primary consumer energy"
                },
                {
                    level: "Tertiary Consumers (4th Trophic Level)",
                    description: "Organisms that eat secondary consumers",
                    type: "Top carnivores",
                    dietType: "Predators of other carnivores",
                    examples: ["Wolves", "Hawks", "Sharks", "Killer whales"],
                    biomass: "Smallest biomass",
                    energy: "Least energy available"
                },
                {
                    level: "Apex Predators (Top Trophic Level)",
                    description: "Top predators with no natural predators",
                    characteristics: "No organisms prey on them as adults",
                    examples: ["Lions", "Great white sharks", "Bald eagles", "Polar bears"],
                    role: "Regulate populations of lower trophic levels",
                    importance: "Keystone species in many ecosystems"
                },
                {
                    level: "Decomposers (All Levels)",
                    description: "Break down dead organic matter from all trophic levels",
                    type: "Bacteria, fungi, detritivores",
                    role: "Return nutrients to ecosystem",
                    examples: ["Bacteria", "Fungi", "Earthworms", "Vultures"],
                    importance: "Essential for nutrient cycling"
                }
            ],
            trophicInteractions: {
                herbivory: {
                    description: "Animals eating plants",
                    effect: "Controls plant populations, can shape plant evolution",
                    examples: "Deer browsing trees, caterpillars eating leaves"
                },
                predation: {
                    description: "Carnivores eating herbivores or other carnivores",
                    effect: "Controls prey populations, maintains ecosystem balance",
                    examples: "Lions hunting zebras, hawks catching mice"
                },
                omnivory: {
                    description: "Organisms feeding at multiple trophic levels",
                    effect: "Increases food web complexity and stability",
                    examples: "Bears eating berries and fish, humans eating plants and meat"
                },
                detritivory: {
                    description: "Organisms consuming dead organic matter",
                    effect: "Accelerates decomposition and nutrient cycling",
                    examples: "Earthworms eating leaf litter, vultures eating carcasses"
                }
            },
            foodWebCharacteristics: {
                complexity: "More species = more complex web",
                stability: "Complex webs are often more stable (more alternative pathways)",
                redundancy: "Multiple species can fill similar roles",
                connectivity: "Species are highly interconnected",
                vulnerability: "Loss of keystone species can collapse web"
            },
            keystoneSpecies: {
                definition: "Species with disproportionately large effect on ecosystem",
                characteristics: "Removal causes dramatic ecosystem changes",
                examples: [
                    {
                        species: "Sea otter",
                        ecosystem: "Kelp forest",
                        role: "Controls sea urchin populations",
                        impact: "Without otters, urchins overgraze kelp, destroying forest"
                    },
                    {
                        species: "Gray wolf",
                        ecosystem: "Yellowstone",
                        role: "Controls elk populations",
                        impact: "Wolf removal led to elk overpopulation and vegetation loss"
                    },
                    {
                        species: "Beaver",
                        ecosystem: "Wetlands",
                        role: "Creates dams and ponds",
                        impact: "Engineer habitat for many other species"
                    }
                ]
            },
            examples: [
                {
                    ecosystem: "Grassland Food Web",
                    producers: "Grasses, wildflowers",
                    primaryConsumers: "Grasshoppers, rabbits, prairie dogs, bison",
                    secondaryConsumers: "Snakes, hawks, foxes, badgers",
                    tertiaryConsumers: "Wolves, eagles",
                    decomposers: "Bacteria, fungi, beetles, vultures"
                },
                {
                    ecosystem: "Marine Food Web",
                    producers: "Phytoplankton, algae, seaweed",
                    primaryConsumers: "Zooplankton, small fish, sea urchins",
                    secondaryConsumers: "Larger fish, squid, sea turtles",
                    tertiaryConsumers: "Sharks, dolphins, seals",
                    decomposers: "Bacteria, crabs, sea cucumbers"
                }
            ],
            trophicCascades: {
                definition: "Effects that propagate down through food web when top predator is added or removed",
                topDown: "Predators control lower trophic levels",
                bottomUp: "Producer abundance controls higher trophic levels",
                example: "Wolf reintroduction to Yellowstone reduced elk → vegetation recovered → beaver populations increased → more wetlands created"
            },
            category: 'food_webs'
        };
    }

    handleEnergyFlow(problem) {
        return {
            topic: "Energy Flow Through Ecosystems",
            definition: "The transfer of energy from one organism to another through food chains and webs",
            fundamentalPrinciples: {
                energySource: {
                    primary: "Sunlight (99.9% of ecosystems)",
                    alternative: "Chemical energy (hydrothermal vents, deep caves)",
                    capture: "~1% of sunlight captured by producers"
                },
                energyLaws: {
                    firstLaw: "Energy cannot be created or destroyed, only transformed",
                    secondLaw: "Energy transformations are inefficient; some energy is always lost as heat",
                    application: "Explains why energy flows one-way through ecosystems"
                },
                unidirectionalFlow: {
                    description: "Energy flows in one direction: sun → producers → consumers → environment",
                    contrast: "Unlike matter, energy does NOT cycle",
                    endpoint: "All energy eventually lost as heat"
                }
            },
            tenPercentRule: {
                definition: "Only approximately 10% of energy transfers from one trophic level to the next",
                formula: "Energy at level n+1 = 10% × Energy at level n",
                range: "Typically 5-20%, average ~10%",
                energyLoss: {
                    metabolism: "Used for cellular respiration (30-60%)",
                    movement: "Used for locomotion and activity",
                    heat: "Lost as heat during all metabolic processes (40-60%)",
                    waste: "Undigested material in feces and urine",
                    notConsumed: "Not all biomass is consumed (roots, bones, etc.)"
                },
                implications: [
                    "Limits number of trophic levels (usually 4-5 maximum)",
                    "Top predators are rare (not enough energy)",
                    "Biomass decreases at higher levels",
                    "Food chains are short"
                ]
            },
            energyPyramids: {
                definition: "Diagram showing amount of energy at each trophic level",
                shape: "Always pyramid-shaped (decreasing energy up levels)",
                structure: {
                    base: "Producers (most energy)",
                    middle: "Primary and secondary consumers",
                    top: "Tertiary consumers and apex predators (least energy)"
                },
                measurements: "Energy measured in kcal/m²/year or kJ/m²/year",
                example: {
                    producers: "10,000 kcal",
                    primaryConsumers: "1,000 kcal (10%)",
                    secondaryConsumers: "100 kcal (10% of 1,000)",
                    tertiaryConsumers: "10 kcal (10% of 100)"
                }
            },
            biomassPyramids: {
                definition: "Diagram showing total mass of living organisms at each level",
                shape: "Usually pyramid, but exceptions exist",
                measurements: "Biomass measured in g/m² or kg/m²",
                terrestrial: {
                    shape: "Typically pyramid",
                    reason: "Producers (trees, grass) have large biomass"
                },
                aquatic: {
                    shape: "Can be inverted pyramid",
                    reason: "Phytoplankton reproduce rapidly but have small biomass at any moment",
                    explanation: "High productivity but low standing biomass"
                }
            },
            numberspyramids: {
                definition: "Diagram showing number of individuals at each level",
                shape: "Variable, not always pyramid",
                exceptions: [
                    "One tree (producer) can support many insects (consumers)",
                    "Inverted in some ecosystems (e.g., forest with large trees)"
                ]
            },
            productivity: {
                grossPrimaryProductivity: {
                    abbreviation: "GPP",
                    definition: "Total energy captured by producers through photosynthesis",
                    measurement: "Energy fixed per unit area per unit time",
                    includes: "All energy captured, including that used by producers"
                },
                netPrimaryProductivity: {
                    abbreviation: "NPP",
                    definition: "Energy available to consumers after producer respiration",
                    formula: "NPP = GPP - Respiration",
                    importance: "This energy is available to rest of ecosystem",
                    measurement: "g carbon/m²/year or kcal/m²/year"
                },
                secondaryProductivity: {
                    definition: "Rate of energy storage by consumers",
                    dependence: "Depends on NPP and consumer efficiency",
                    measurement: "Energy stored as consumer biomass"
                },
                factors: [
                    "Light availability",
                    "Temperature",
                    "Water availability",
                    "Nutrient availability",
                    "CO₂ concentration"
                ]
            },
            ecologicalEfficiency: {
                definition: "Percentage of energy transferred between trophic levels",
                calculation: "(Energy at level n+1 / Energy at level n) × 100",
                typical: "5-20%, average ~10%",
                variability: {
                    high: "Herbivores eating seeds/fruits (20%)",
                    medium: "Herbivores eating leaves (10%)",
                    low: "Carnivores eating herbivores (5-10%)",
                    reason: "Depends on digestibility and metabolic costs"
                }
            },
            energyBudget: {
                intake: "Energy consumed in food",
                assimilation: "Energy absorbed through digestion",
                respiration: "Energy used for metabolism",
                production: "Energy stored as growth and reproduction",
                waste: "Energy lost in feces and urine",
                equation: "Intake = Assimilation + Waste; Assimilation = Respiration + Production"
            },
            examples: [
                {
                    ecosystem: "Grassland",
                    sunlight: "1,000,000 kcal/m²/year",
                    producers: "10,000 kcal (1% captured)",
                    primaryConsumers: "1,000 kcal (10% efficiency)",
                    secondaryConsumers: "100 kcal (10% efficiency)",
                    tertiaryConsumers: "10 kcal (10% efficiency)",
                    trophicLevels: 4
                },
                {
                    ecosystem: "Ocean",
                    sunlight: "1,000,000 kcal/m²/year",
                    phytoplankton: "8,000 kcal",
                    zooplankton: "800 kcal",
                    smallFish: "80 kcal",
                    largeFish: "8 kcal",
                    sharks: "0.8 kcal",
                    trophicLevels: 5
                }
            ],
            implications: {
                foodProduction: "Growing plants more efficient than raising animals for food",
                ecosystemHealth: "High productivity indicates healthy ecosystem",
                climateChange: "Warming affects productivity patterns globally",
                conservation: "Protecting producers protects entire food web"
            },
            category: 'energy_flow'
        };
    }

    handleNutrientCycles(problem) {
        return {
            topic: "Nutrient Cycles (Biogeochemical Cycles)",
            definition: "The pathways by which essential elements move through living organisms and the physical environment",
            fundamentalConcepts: {
                cycling: "Unlike energy, matter cycles through ecosystems",
                reservoirs: "Locations where nutrients are stored (atmosphere, soil, water, organisms)",
                processes: "Biological, geological, chemical, physical processes that move nutrients",
                importance: "Essential elements are limited; must be recycled for life to continue"
            },
            carbonCycle: {
                name: "Carbon Cycle",
                importance: "Carbon is the backbone of all organic molecules",
                mainReservoirs: {
                    atmosphere: "CO₂ gas (~0.04% of atmosphere)",
                    oceans: "Dissolved CO₂, carbonate ions (largest reservoir)",
                    terrestrial: "Living organisms, soil organic matter",
                    fossil: "Coal, oil, natural gas (long-term storage)",
                    rocks: "Limestone, carbonate rocks"
                },
                processes: {
                    photosynthesis: {
                        description: "Plants/algae absorb CO₂ and convert to glucose",
                        equation: "6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂",
                        effect: "Removes CO₂ from atmosphere",
                        rate: "Fast (hours to months)"
                    },
                    cellularRespiration: {
                        description: "Organisms break down glucose, release CO₂",
                        equation: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP",
                        effect: "Returns CO₂ to atmosphere",
                        rate: "Fast (continuous)"
                    },
                    decomposition: {
                        description: "Decomposers break down dead matter, release CO₂",
                        organisms: "Bacteria, fungi",
                        effect: "Returns carbon to soil and atmosphere",
                        rate: "Medium (weeks to years)"
                    },
                    combustion: {
                        description: "Burning organic matter or fossil fuels releases CO₂",
                        natural: "Forest fires",
                        anthropogenic: "Burning fossil fuels, deforestation",
                        effect: "Rapidly increases atmospheric CO₂",
                        impact: "Major contributor to climate change"
                    },
                    oceanUptake: {
                        description: "Oceans absorb atmospheric CO₂",
                        process: "CO₂ dissolves, forms carbonic acid",
                        storage: "Dissolved CO₂, carbonate ions, marine organisms",
                        concern: "Ocean acidification from excess CO₂"
                    },
                    fossilization: {
                        description: "Organic matter buried, forms fossil fuels",
                        rate: "Very slow (millions of years)",
                        effect: "Long-term carbon storage",
                        impact: "Removes carbon from active cycle"
                    }
                },
                humanImpact: [
                    "Burning fossil fuels increases atmospheric CO₂",
                    "Deforestation reduces CO₂ absorption",
                    "Industrial agriculture releases soil carbon",
                    "Result: Enhanced greenhouse effect, climate change"
                ]
            },
            nitrogenCycle: {
                name: "Nitrogen Cycle",
                importance: "Nitrogen is essential for proteins, DNA, RNA",
                challenge: "Atmospheric N₂ is inert; must be 'fixed' for organisms to use",
                mainReservoirs: {
                    atmosphere: "N₂ gas (78% of atmosphere, largest reservoir)",
                    soil: "NH₃, NH₄⁺, NO₃⁻",
                    organisms: "Proteins, nucleic acids",
                    water: "Dissolved nitrogen compounds"
                },
                processes: {
                    nitrogenFixation: {
                        description: "Converting atmospheric N₂ to ammonia (NH₃)",
                        biological: {
                            organisms: "Nitrogen-fixing bacteria (Rhizobium in legume roots, Azotobacter in soil, cyanobacteria)",
                            process: "N₂ + 8H⁺ + 8e⁻ → 2NH₃ + H₂",
                            importance: "Only way most organisms can access nitrogen"
                        },
                        atmospheric: {
                            process: "Lightning provides energy to break N₂ bonds",
                            amount: "Small contribution"
                        },
                        industrial: {
                            process: "Haber-Bosch process creates ammonia for fertilizers",
                            impact: "Doubled nitrogen fixation globally"
                        }
                    },
                    nitrification: {
                        description: "Conversion of ammonia to nitrate",
                        step1: {
                            process: "NH₃ → NO₂⁻ (nitrite)",
                            bacteria: "Nitrosomonas",
                            name: "Ammonia oxidation"
                        },
                        step2: {
                            process: "NO₂⁻ → NO₃⁻ (nitrate)",
                            bacteria: "Nitrobacter",
                            name: "Nitrite oxidation"
                        },
                        location: "Soil, water",
                        importance: "Plants absorb nitrate for growth"
                    },
                    assimilation: {
                        description: "Plants absorb NH₄⁺ and NO₃⁻, incorporate into proteins",
                        process: "Nitrate/ammonia → amino acids → proteins",
                        transfer: "Animals get nitrogen by eating plants or other animals"
                    },
                    ammonification: {
                        description: "Decomposers convert organic nitrogen to ammonia",
                        organisms: "Bacteria, fungi",
                        process: "Proteins, urea, uric acid → NH₃",
                        importance: "Returns nitrogen to soil for reuse"
                    },
                    denitrification: {
                        description: "Bacteria convert nitrate back to N₂ gas",
                        bacteria: "Pseudomonas, Clostridium (anaerobic)",
                        process: "NO₃⁻ → NO₂⁻ → NO → N₂O → N₂",
                        conditions: "Oxygen-poor environments (waterlogged soil, wetlands)",
                        importance: "Returns nitrogen to atmosphere, completing cycle"
                    }
                },
                humanImpact: [
                    "Synthetic fertilizer overuse causes runoff",
                    "Eutrophication of water bodies",
                    "N₂O emissions (greenhouse gas)",
                    "Disruption of natural nitrogen balance"
                ]
            },
            waterCycle: {
                name: "Water Cycle (Hydrologic Cycle)",
                importance: "Water is essential for all life; universal solvent",
                mainReservoirs: {
                    oceans: "97% of Earth's water (saltwater)",
                    ice: "2% (glaciers, ice caps)",
                    freshwater: "1% (groundwater, lakes, rivers, atmosphere)",
                    organisms: "Small amount in living tissue"
                },
                processes: {
                    evaporation: {
                        description: "Liquid water → water vapor",
                        location: "Oceans, lakes, rivers, soil",
                        energy: "Requires heat energy (from sun)",
                        amount: "~85% from oceans, 15% from land"
                    },
                    transpiration: {
                        description: "Water vapor released from plant leaves",
                        process: "Water moves from roots → stems → leaves → atmosphere",
                        amount: "Significant contribution to atmospheric water",
                        combined: "Evapotranspiration = evaporation + transpiration"
                    },
                    condensation: {
                        description: "Water vapor → liquid water (clouds form)",
                        trigger: "Air cools as it rises",
                        result: "Cloud formation",
                        importance: "Necessary for precipitation"
                    },
                    precipitation: {
                        description: "Water falls as rain, snow, sleet, hail",
                        distribution: "Uneven across Earth (creates climate patterns)",
                        fate: "Runoff, infiltration, or evaporation"
                    },
                    infiltration: {
                        description: "Water soaks into soil",
                        storage: "Groundwater in aquifers",
                        importance: "Recharges groundwater supplies"
                    },
                    runoff: {
                        description: "Water flows over land to streams, rivers, oceans",
                        causes: "Impermeable surfaces, saturated soil, steep slopes",
                        concerns: "Erosion, flooding, pollution transport"
                    },
                    percolation: {
                        description: "Water moves down through soil layers",
                        destination: "Groundwater aquifers",
                        rate: "Slow (days to years)"
                    }
                },
                humanImpact: [
                    "Water extraction depletes aquifers",
                    "Deforestation reduces transpiration",
                    "Urbanization increases runoff, decreases infiltration",
                    "Climate change alters precipitation patterns",
                    "Pollution contaminates water supplies"
                ]
            },
            phosphorusCycle: {
                name: "Phosphorus Cycle",
                importance: "Essential for DNA, RNA, ATP, cell membranes",
                uniqueness: "No atmospheric component (sedimentary cycle)",
                mainReservoirs: {
                    rocks: "Phosphate rocks (primary source)",
                    soil: "Dissolved phosphate ions (PO₄³⁻)",
                    organisms: "DNA, RNA, ATP, bones, teeth",
                    sediments: "Ocean floor (long-term storage)"
                },
                processes: {
                    weathering: {
                        description: "Rocks erode, release phosphate to soil",
                        types: "Physical (freeze-thaw), chemical (acid rain)",
                        rate: "Very slow (geological timescale)",
                        importance: "Only way phosphorus enters ecosystem"
                    },
                    absorption: {
                        description: "Plant roots absorb phosphate from soil",
                        form: "PO₄³⁻ ions",
                        use: "Incorporated into organic molecules"
                    },
                    consumption: {
                        description: "Animals get phosphorus by eating plants/animals",
                        transfer: "Through food web"
                    },
                    decomposition: {
                        description: "Decomposers return phosphorus to soil",
                        organisms: "Bacteria, fungi",
                        form: "Phosphate ions available for plants"
                    },
                    sedimentation: {
                        description: "Phosphorus washes to ocean, forms sediments",
                        rate: "Slow",
                        result: "Forms new phosphate rocks over millions of years",
                        problem: "Removes phosphorus from land ecosystems"
                    },
                    uplift: {
                        description: "Geological uplift exposes rocks for weathering",
                        rate: "Extremely slow (millions of years)",
                        importance: "Returns phosphorus to land"
                    }
                },
                humanImpact: [
                    "Mining phosphate rocks for fertilizer",
                    "Fertilizer runoff causes eutrophication",
                    "Algal blooms deplete oxygen",
                    "Phosphorus is non-renewable on human timescale"
                ],
                limitingFactor: "Often the limiting nutrient in aquatic ecosystems"
            },
            eutrophication: {
                definition: "Excess nutrients (nitrogen, phosphorus) cause algal blooms",
                process: [
                    "1. Fertilizer/sewage runoff adds nutrients to water",
                    "2. Algae population explodes (algal bloom)",
                    "3. Algae die and sink to bottom",
                    "4. Decomposers consume oxygen breaking down algae",
                    "5. Oxygen depletion kills fish and other organisms",
                    "6. Creates 'dead zones'"
                ],
                consequences: ["Fish kills", "Loss of biodiversity", "Toxins from cyanobacteria", "Ecosystem collapse"],
                solutions: ["Reduce fertilizer use", "Buffer zones near water", "Wastewater treatment", "Wetland restoration"]
            },
            category: 'nutrient_cycles'
        };
    }

    handlePopulationDynamics(problem) {
        return {
            topic: "Population Dynamics and Growth",
            definition: "The study of how and why populations change in size and structure over time",
            populationCharacteristics: {
                size: {
                    definition: "Total number of individuals in a population",
                    symbol: "N",
                    importance: "Determines population viability and resource needs"
                },
                density: {
                    definition: "Number of individuals per unit area or volume",
                    calculation: "Density = N / Area",
                    types: {
                        crude: "Total individuals / total area",
                        ecological: "Individuals / suitable habitat area"
                    },
                    importance: "Affects competition, predation, disease transmission"
                },
                distribution: {
                    definition: "Spatial arrangement of individuals",
                    patterns: {
                        clumped: {
                            description: "Individuals grouped together",
                            causes: "Resource distribution, social behavior, reproduction",
                            examples: "Schools of fish, herds of elephants",
                            mostCommon: true
                        },
                        uniform: {
                            description: "Evenly spaced individuals",
                            causes: "Competition, territoriality",
                            examples: "Desert plants, nesting birds"
                        },
                        random: {
                            description: "No pattern; unpredictable spacing",
                            causes: "Resources uniformly available, no strong interactions",
                            examples: "Dandelions in a lawn",
                            leastCommon: true
                        }
                    }
                },
                ageStructure: {
                    definition: "Distribution of individuals among age groups",
                    types: {
                        preReproductive: "Juveniles not yet reproducing",
                        reproductive: "Adults capable of reproduction",
                        postReproductive: "Individuals past reproductive age"
                    },
                    diagrams: {
                        expanding: "Pyramid shape; growing population",
                        stable: "Column shape; stable population",
                        declining: "Inverted pyramid; declining population"
                    },
                    importance: "Predicts future population growth"
                },
                sexRatio: {
                    definition: "Ratio of males to females",
                    typical: "Often 1:1, but varies",
                    importance: "Affects reproductive potential"
                }
            },
            populationGrowth: {
                factors: {
                    birth: {
                        term: "Natality",
                        effect: "Increases population size",
                        rate: "Births per individual per unit time"
                    },
                    death: {
                        term: "Mortality",
                        effect: "Decreases population size",
                        rate: "Deaths per individual per unit time"
                    },
                    immigration: {
                        definition: "Individuals entering population",
                        effect: "Increases population size"
                    },
                    emigration: {
                        definition: "Individuals leaving population",
                        effect: "Decreases population size"
                    }
                },
                equation: "ΔN = (Births + Immigration) - (Deaths + Emigration)",
                intrinsicGrowthRate: {
                    symbol: "r",
                    definition: "Maximum per capita growth rate under ideal conditions",
                    calculation: "r = birth rate - death rate",
                    interpretation: {
                        rPositive: "Population growing",
                        rZero: "Population stable",
                        rNegative: "Population declining"
                    }
                }
            },
            exponentialGrowth: {
                definition: "Population grows at constant rate without limits",
                equation: "dN/dt = rN",
                description: "Change in population = growth rate × population size",
                curve: "J-shaped curve",
                characteristics: [
                    "Constant per capita growth rate",
                    "No resource limitation",
                    "Population doubles at regular intervals",
                    "Growth accelerates over time"
                ],
                conditions: "Unlimited resources, ideal environment, no predators/disease",
                realWorld: [
                    "Invasive species initially",
                    "Bacteria in fresh culture",
                    "Populations recovering from low numbers",
                    "Short-term only; not sustainable"
                ],
                doublingTime: {
                    formula: "t = ln(2) / r ≈ 0.69 / r",
                    example: "If r = 0.1, doubling time = 6.9 time units"
                }
            },
            logisticGrowth: {
                definition: "Population growth slows as it approaches carrying capacity",
                equation: "dN/dt = rN((K-N)/K)",
                description: "Growth rate reduced by proportion of K already used",
                curve: "S-shaped (sigmoid) curve",
                phases: [
                    {
                        phase: "Lag Phase",
                        description: "Slow initial growth; population establishing",
                        reason: "Small population size, adaptation period"
                    },
                    {
                        phase: "Exponential Phase",
                        description: "Rapid growth; resources abundant",
                        reason: "Optimal conditions, low competition"
                    },
                    {
                        phase: "Deceleration Phase",
                        description: "Growth rate slows; resources becoming limited",
                        reason: "Increasing competition, approaching K"
                    },
                    {
                        phase: "Equilibrium Phase",
                        description: "Population stabilizes around K",
                        reason: "Birth rate ≈ death rate"
                    }
                ],
                carryingCapacity: {
                    symbol: "K",
                    definition: "Maximum population size environment can sustain",
                    factors: [
                        "Food availability",
                        "Water supply",
                        "Shelter/nesting sites",
                        "Space",
                        "Accumulation of waste"
                    ],
                    variability: "K can change with environmental conditions",
                    reality: "Populations may overshoot or oscillate around K"
                },
                realWorld: [
                    "Most natural populations",
                    "Deer in forest",
                    "Fish in lake",
                    "Bacteria in confined space"
                ]
            },
            limitingFactors: {
                densityDependent: {
                    definition: "Effects intensify as population density increases",
                    characteristics: "Regulate population growth; provide negative feedback",
                    examples: {
                        competition: {
                            description: "Increased competition for limited resources",
                            effect: "Reduces growth, reproduction, survival",
                            types: "Intraspecific (within species), interspecific (between species)"
                        },
                        predation: {
                            description: "More prey attract more predators",
                            effect: "Increases mortality rate",
                            result: "Predator-prey cycles"
                        },
                        disease: {
                            description: "Pathogens spread more easily in dense populations",
                            effect: "Increases death rate",
                            examples: "COVID-19, plague, fungal infections"
                        },
                        parasitism: {
                            description: "Parasites spread more efficiently",
                            effect: "Reduces host fitness",
                            examples: "Ticks, tapeworms, lice"
                        },
                        stress: {
                            description: "Crowding causes physiological stress",
                            effect: "Reduces reproduction, increases mortality",
                            examples: "Hormonal changes, behavioral changes"
                        },
                        wasteAccumulation: {
                            description: "Toxic waste builds up",
                            effect: "Poisons environment",
                            examples: "Bacterial cultures, algal blooms"
                        }
                    },
                    importance: "Primary regulators keeping populations near K"
                },
                densityIndependent: {
                    definition: "Effects occur regardless of population density",
                    characteristics: "Cannot regulate population size; no feedback",
                    examples: {
                        weather: {
                            description: "Temperature extremes, drought, storms",
                            effect: "Kills individuals regardless of density",
                            unpredictable: true
                        },
                        naturalDisasters: {
                            description: "Floods, fires, volcanic eruptions",
                            effect: "Catastrophic mortality",
                            examples: "Forest fires, hurricanes, earthquakes"
                        },
                        seasonality: {
                            description: "Seasonal temperature/precipitation changes",
                            effect: "Affects all individuals similarly",
                            examples: "Winter die-offs, dry season stress"
                        },
                        humanActivities: {
                            description: "Habitat destruction, pollution",
                            effect: "Affects populations regardless of size",
                            examples: "Deforestation, pesticide use, oil spills"
                        }
                    },
                    importance: "Can cause dramatic population fluctuations"
                }
            },
            lifeTables: {
                definition: "Tables showing survival and reproduction rates by age",
                cohort: "Group of individuals born at same time",
                columns: {
                    age: "Age class or interval",
                    nx: "Number alive at start of age interval",
                    dx: "Number dying during age interval",
                    lx: "Proportion surviving to start of age interval",
                    mx: "Average offspring per individual in age interval"
                },
                uses: [
                    "Calculate life expectancy",
                    "Predict population growth",
                    "Identify vulnerable age classes",
                    "Inform conservation strategies"
                ]
            },
            survivorshipCurves: {
                definition: "Graphs showing proportion of cohort surviving over time",
                typeI: {
                    shape: "High survival until old age, then rapid decline",
                    characteristics: "Low juvenile mortality, high parental care",
                    examples: "Humans, elephants, large mammals",
                    strategy: "Few offspring, high investment per offspring"
                },
                typeII: {
                    shape: "Constant mortality rate throughout life",
                    characteristics: "Equal chance of death at any age",
                    examples: "Birds, rodents, some reptiles",
                    strategy: "Moderate offspring, moderate care"
                },
                typeIII: {
                    shape: "High juvenile mortality, then high survival",
                    characteristics: "Very high early mortality, low parental care",
                    examples: "Fish, insects, plants, oysters",
                    strategy: "Many offspring, low investment per offspring"
                }
            },
            reproductiveStrategies: {
                rSelected: {
                    name: "r-selected (opportunistic) species",
                    characteristics: [
                        "High reproductive rate",
                        "Many small offspring",
                        "Little parental care",
                        "Early maturity",
                        "Short lifespan",
                        "Small body size"
                    ],
                    environment: "Unstable, unpredictable",
                    strategy: "Reproduce quickly before conditions change",
                    examples: "Insects, mice, weeds, bacteria",
                    survivorshipCurve: "Type III"
                },
                KSelected: {
                    name: "K-selected (equilibrium) species",
                    characteristics: [
                        "Low reproductive rate",
                        "Few large offspring",
                        "Extensive parental care",
                        "Late maturity",
                        "Long lifespan",
                        "Large body size"
                    ],
                    environment: "Stable, predictable",
                    strategy: "Compete effectively at high densities",
                    examples: "Elephants, humans, trees, whales",
                    survivorshipCurve: "Type I"
                },
                continuum: "Most species fall on a continuum between r and K"
            },
            populationFluctuations: {
                stable: {
                    description: "Population remains relatively constant",
                    conditions: "Birth rate ≈ death rate near K"
                },
                cyclical: {
                    description: "Regular oscillations in population size",
                    causes: "Predator-prey dynamics, resource fluctuations",
                    examples: "Lynx-hare cycles, lemming cycles",
                    period: "Often 3-11 years"
                },
                irruptive: {
                    description: "Population explodes then crashes",
                    causes: "Resource pulse followed by depletion",
                    examples: "Locust swarms, algal blooms"
                },
                irregular: {
                    description: "Unpredictable fluctuations",
                    causes: "Variable environmental conditions",
                    examples: "Desert species responding to rainfall"
                }
            },
            metapopulation: {
                definition: "Group of spatially separated populations connected by migration",
                structure: "Patches of suitable habitat in matrix of unsuitable habitat",
                dynamics: {
                    colonization: "Dispersers establish new populations",
                    extinction: "Local populations go extinct",
                    recolonization: "Extinct patches recolonized by dispersers"
                },
                importance: "Persistence despite local extinctions",
                conservation: "Maintain habitat connectivity"
            },
            humanPopulation: {
                currentSize: "~8 billion (2024)",
                growthRate: "Declining but still positive (~1% per year)",
                doublingTime: "~70 years at current rate",
                challenges: [
                    "Resource depletion",
                    "Climate change",
                    "Pollution",
                    "Habitat destruction",
                    "Food security"
                ],
                demographicTransition: {
                    stage1: {
                        name: "Pre-industrial",
                        characteristics: "High birth rate, high death rate",
                        growth: "Slow"
                    },
                    stage2: {
                        name: "Transitional",
                        characteristics: "High birth rate, declining death rate",
                        growth: "Rapid"
                    },
                    stage3: {
                        name: "Industrial",
                        characteristics: "Declining birth rate, low death rate",
                        growth: "Slowing"
                    },
                    stage4: {
                        name: "Post-industrial",
                        characteristics: "Low birth rate, low death rate",
                        growth: "Stable or declining"
                    }
                },
                carryingCapacity: {
                    estimates: "Vary widely (8-16 billion)",
                    factors: "Technology, resource use, lifestyle",
                    debate: "Controversial and uncertain"
                }
            },
            category: 'population_dynamics'
        };
    }

    handleBiomes(problem) {
        return {
            topic: "Biomes: Large-Scale Ecosystems",
            definition: "Large geographic regions characterized by similar climate, vegetation, and animal communities",
            determiningFactors: {
                primaryFactors: {
                    temperature: {
                        importance: "Primary determinant of biome type",
                        effects: "Affects metabolism, growing season, species adaptations",
                        patterns: "Decreases with latitude and altitude"
                    },
                    precipitation: {
                        importance: "Second most important factor",
                        effects: "Determines water availability for plants and animals",
                        patterns: "Varies with geography, season, ocean currents"
                    }
                },
                secondaryFactors: [
                    "Latitude (affects temperature and day length)",
                    "Altitude (mountains create local climate variations)",
                    "Proximity to water bodies (moderates temperature)",
                    "Ocean currents (affect coastal climates)",
                    "Soil type and nutrients",
                    "Fire frequency",
                    "Human activities"
                ]
            },
            terrestrialBiomes: [
                {
                    name: "Tropical Rainforest",
                    location: "Equatorial regions (Amazon, Congo, Southeast Asia)",
                    climate: {
                        temperature: "Warm year-round (25-30°C)",
                        precipitation: "High, even distribution (2000-10000 mm/year)",
                        seasons: "No distinct seasons"
                    },
                    vegetation: {
                        dominant: "Broad-leaved evergreen trees",
                        structure: "Multiple canopy layers (emergent, canopy, understory, forest floor)",
                        adaptations: "Drip tips, buttress roots, epiphytes",
                        diversity: "Highest plant diversity on Earth"
                    },
                    animals: {
                        examples: "Monkeys, parrots, jaguars, sloths, poison dart frogs, countless insects",
                        adaptations: "Arboreal lifestyle, camouflage, bright colors",
                        diversity: "More than half of Earth's species"
                    },
                    soil: "Nutrient-poor (nutrients in biomass, not soil)",
                    threats: "Deforestation, agriculture, logging",
                    characteristics: [
                        "Highest biodiversity",
                        "High productivity",
                        "Rapid nutrient cycling",
                        "Complex food webs"
                    ]
                },
                {
                    name: "Desert",
                    location: "30° N and S latitude (Sahara, Arabian, Mojave, Atacama)",
                    climate: {
                        temperature: "Extreme daily variation (hot days, cold nights)",
                        precipitation: "Very low (<250 mm/year)",
                        seasons: "Seasonal or irregular rain"
                    },
                    vegetation: {
                        dominant: "Cacti, succulents, drought-resistant shrubs",
                        adaptations: [
                            "Water storage (succulents)",
                            "Small leaves or spines (reduce water loss)",
                            "Deep roots or widespread shallow roots",
                            "CAM photosynthesis",
                            "Dormancy during drought"
                        ],
                        sparsity: "Low plant density"
                    },
                    animals: {
                        examples: "Camels, lizards, snakes, scorpions, roadrunners, kangaroo rats",
                        adaptations: [
                            "Nocturnal activity (avoid heat)",
                            "Water conservation (concentrated urine)",
                            "Burrowing (escape heat)",
                            "Light coloration (reflect heat)",
                            "Behavioral adaptations (estivation)"
                        ]
                    },
                    soil: "Nutrient-rich but dry; low organic matter",
                    types: {
                        hot: "Sahara, Arabian (high temperatures)",
                        cold: "Gobi, Great Basin (cold winters)",
                        coastal: "Atacama (cool, foggy)"
                    },
                    characteristics: [
                        "Low biodiversity",
                        "Low productivity",
                        "Extreme environmental conditions",
                        "Specialized adaptations required"
                    ]
                },
                {
                    name: "Grassland / Savanna",
                    location: "Interior continents (Great Plains, African savanna, Pampas)",
                    climate: {
                        temperature: "Seasonal variation; warm summers",
                        precipitation: "Moderate, seasonal (250-750 mm/year)",
                        seasons: "Distinct wet and dry seasons (savanna)"
                    },
                    vegetation: {
                        dominant: "Grasses; few trees",
                        adaptations: [
                            "Underground stems and roots (survive fire, grazing)",
                            "Rapid growth after rain",
                            "Fire-resistant",
                            "Deep roots"
                        ],
                        types: {
                            temperate: "Tallgrass and shortgrass prairie",
                            tropical: "Savanna with scattered trees"
                        }
                    },
                    animals: {
                        examples: "Bison, antelope, zebras, lions, prairie dogs, elephants, giraffes",
                        adaptations: [
                            "Speed and agility (escape predators)",
                            "Herding behavior",
                            "Burrowing (prairie dogs)",
                            "Migration following rain/resources"
                        ]
                    },
                    soil: "Fertile, rich in organic matter",
                    threats: "Agriculture (breadbasket regions), overgrazing",
                    fire: "Essential for maintaining grasslands; prevents tree encroachment",
                    characteristics: [
                        "Dominated by grasses",
                        "Periodic droughts and fires",
                        "Large grazing mammals",
                        "High agricultural value"
                    ]
                },
                {
                    name: "Temperate Deciduous Forest",
                    location: "Eastern North America, Europe, Eastern Asia",
                    climate: {
                        temperature: "Moderate; distinct seasons (-30°C winter to 30°C summer)",
                        precipitation: "Moderate, evenly distributed (750-1500 mm/year)",
                        seasons: "Four distinct seasons"
                    },
                    vegetation: {
                        dominant: "Broad-leaved deciduous trees (oak, maple, beech)",
                        adaptations: [
                            "Leaves drop in fall (reduce water loss in winter)",
                            "Dormancy in winter",
                            "Spring ephemerals (flower before canopy leafs out)"
                        ],
                        layers: "Canopy, understory, shrub layer, herb layer, forest floor"
                    },
                    animals: {
                        examples: "Deer, bears, squirrels, raccoons, birds (many migrate)",
                        adaptations: [
                            "Hibernation (bears, groundhogs)",
                            "Migration (birds)",
                            "Food storage (squirrels)",
                            "Thick fur for winter"
                        ]
                    },
                    soil: "Fertile, rich in organic matter",
                    characteristics: [
                        "Moderate biodiversity",
                        "Moderate productivity",
                        "Dramatic seasonal changes",
                        "Beautiful fall colors"
                    ],
                    humanImpact: "Most affected by human settlement and agriculture"
                },
                {
                    name: "Taiga / Boreal Forest",
                    location: "Northern hemisphere (Canada, Alaska, Russia, Scandinavia)",
                    climate: {
                        temperature: "Long, cold winters; short, mild summers (-40°C to 20°C)",
                        precipitation: "Low to moderate (300-900 mm/year), mostly as snow",
                        seasons: "Long winter, short summer"
                    },
                    vegetation: {
                        dominant: "Coniferous trees (spruce, fir, pine)",
                        adaptations: [
                            "Needle-shaped leaves (reduce water loss)",
                            "Evergreen (photosynthesize when possible)",
                            "Conical shape (shed snow)",
                            "Shallow roots (permafrost below)"
                        ],
                        understory: "Sparse; mosses and lichens common"
                    },
                    animals: {
                        examples: "Moose, wolves, bears, lynx, owls, crossbills, voles",
                        adaptations: [
                            "Thick fur/feathers",
                            "Large body size (conserve heat)",
                            "Migration or hibernation",
                            "Camouflage (white in winter)"
                        ]
                    },
                    soil: "Acidic, nutrient-poor, slow decomposition",
                    characteristics: [
                        "Low biodiversity",
                        "Low productivity",
                        "Largest terrestrial biome",
                        "Carbon storage in peat"
                    ],
                    threats: "Logging, oil/gas extraction, climate change (thawing permafrost)"
                },
                {
                    name: "Tundra",
                    location: "Arctic regions, high mountain peaks",
                    climate: {
                        temperature: "Very cold; short, cool summers (-34°C to 12°C)",
                        precipitation: "Very low (150-250 mm/year), mostly as snow",
                        growingSeason: "Very short (50-60 days)"
                    },
                    vegetation: {
                        dominant: "Mosses, lichens, dwarf shrubs, grasses",
                        adaptations: [
                            "Low-growing (avoid wind, conserve heat)",
                            "Rapid growth in short summer",
                            "Perennial (no time to complete life cycle annually)",
                            "Cushion/mat growth forms"
                        ],
                        treeLimit: "No trees (too cold, permafrost)"
                    },
                    animals: {
                        examples: "Caribou, arctic fox, polar bear, snowy owl, lemmings, migratory birds",
                        adaptations: [
                            "Thick insulation (fat, fur, feathers)",
                            "Small extremities (reduce heat loss)",
                            "White coloration (camouflage)",
                            "Migration (many species)"
                        ]
                    },
                    soil: "Permafrost (permanently frozen subsoil); thin active layer in summer",
                    types: {
                        arctic: "Northern polar regions",
                        alpine: "High mountains at any latitude"
                    },
                    characteristics: [
                        "Lowest biodiversity",
                        "Lowest productivity",
                        "Fragile ecosystem (slow recovery)",
                        "Permafrost"
                    ],
                    threats: "Climate change (most vulnerable biome), oil/gas development",
                    climateChange: "Warming faster than any other biome"
                },
                {
                    name: "Chaparral / Mediterranean Shrubland",
                    location: "Mediterranean regions, California, Chile, South Africa, Australia",
                    climate: {
                        temperature: "Mild, wet winters; hot, dry summers",
                        precipitation: "300-1000 mm/year, winter rains",
                        seasons: "Distinct wet and dry seasons"
                    },
                    vegetation: {
                        dominant: "Evergreen shrubs, small trees (oak, olive)",
                        adaptations: [
                            "Small, leathery leaves (reduce water loss)",
                            "Deep roots (access groundwater)",
                            "Fire-adapted (resprout after fire)",
                            "Aromatic oils (reduce herbivory, flammable)"
                        ]
                    },
                    animals: {
                        examples: "Deer, lizards, snakes, rabbits, birds, coyotes",
                        adaptations: [
                            "Nocturnal activity (avoid heat)",
                            "Burrowing",
                            "Estivation during dry season"
                        ]
                    },
                    soil: "Thin, nutrient-poor",
                    fire: "Frequent fires; plants fire-adapted",
                    characteristics: [
                        "Fire-prone",
                        "Aromatic vegetation",
                        "High endemism",
                        "Popular for human settlement"
                    ],
                    threats: "Urban development, fire suppression"
                }
            ],
            aquaticBiomes: {
                freshwater: [
                    {
                        name: "Lakes and Ponds",
                        characteristics: "Standing water; lentic ecosystems",
                        zones: {
                            littoral: "Shallow, near shore; rooted plants",
                            limnetic: "Open water surface; phytoplankton",
                            profundal: "Deep water; no light; decomposers"
                        },
                        stratification: "Temperature layers in summer (warm top, cold bottom)",
                        turnover: "Mixing in spring and fall redistributes nutrients",
                        threats: "Pollution, eutrophication, invasive species"
                    },
                    {
                        name: "Rivers and Streams",
                        characteristics: "Flowing water; lotic ecosystems",
                        gradient: "Headwaters (fast, cold, oxygen-rich) to mouth (slow, warmer, less oxygen)",
                        organisms: "Adapted to current (streamlined, hold-fast structures)",
                        importance: "Transport nutrients, connect ecosystems",
                        threats: "Dams, pollution, water extraction"
                    },
                    {
                        name: "Wetlands",
                        types: "Marshes, swamps, bogs",
                        characteristics: "Saturated soil, emergent vegetation",
                        importance: [
                            "Filter water",
                            "Flood control",
                            "Nutrient cycling",
                            "Wildlife habitat"
                        ],
                        threats: "Drainage for agriculture, development"
                    }
                ],
                marine: [
                    {
                        name: "Oceans",
                        zones: {
                            intertidal: "Between high and low tide; extreme conditions",
                            neritic: "Shallow water over continental shelf",
                            oceanic: "Open ocean; low nutrients",
                            benthic: "Ocean floor; decomposers, burrowers",
                            abyssal: "Deep ocean; high pressure, no light, cold"
                        },
                        verticalZones: {
                            photic: "Surface water with light; photosynthesis occurs",
                            aphotic: "Deep water without light; no photosynthesis"
                        },
                        importance: [
                            "Climate regulation",
                            "Oxygen production (phytoplankton)",
                            "Carbon storage",
                            "Food source"
                        ]
                    },
                    {
                        name: "Coral Reefs",
                        location: "Shallow tropical waters",
                        organisms: "Coral polyps, algae (zooxanthellae), fish, invertebrates",
                        biodiversity: "Highest marine biodiversity ('rainforests of the sea')",
                        threats: [
                            "Ocean acidification",
                            "Coral bleaching (temperature stress)",
                            "Overfishing",
                            "Pollution"
                        ],
                        importance: "Protect coastlines, nursery for fish, tourism"
                    },
                    {
                        name: "Estuaries",
                        characteristics: "Where freshwater meets saltwater",
                        salinity: "Variable, brackish water",
                        productivity: "Very high (nutrient-rich)",
                        importance: "Nursery for many marine species",
                        examples: "Chesapeake Bay, San Francisco Bay",
                        threats: "Pollution, development"
                    }
                ]
            },
            biomeDistribution: {
                latitudinal: "Temperature decreases from equator to poles",
                altitudinal: "Temperature decreases with elevation (similar pattern to latitude)",
                rainshadow: "Mountains block moisture, creating dry regions on leeward side",
                oceanic: "Ocean currents affect coastal climates and biomes"
            },
            climateChange: {
                impacts: [
                    "Biome boundaries shifting poleward and upward",
                    "Species ranges changing",
                    "Phenology shifts (timing of events)",
                    "Increased extinction risk"
                ],
                vulnerableBiomes: ["Tundra (thawing permafrost)", "Coral reefs (bleaching)", "Arctic sea ice"]
            },
            category: 'biomes'
        };
    }

    handleSymbiosis(problem) {
        return {
            topic: "Symbiosis and Species Interactions",
            definition: "Close, long-term interactions between different species living together",
            etymology: "Greek: 'sym' (together) + 'biosis' (living)",
            typesOfSymbiosis: [
                {
                    name: "Mutualism",
                    symbol: "+/+",
                    definition: "Both species benefit from the interaction",
                    characteristics: "Win-win relationship; both species gain fitness",
                    obligate: {
                        description: "Species cannot survive without each other",
                        examples: [
                            {
                                partners: "Nitrogen-fixing bacteria (Rhizobium) and legumes",
                                benefits: "Bacteria: sugars from plant; Plant: fixed nitrogen",
                                importance: "Critical for plant nutrition and agriculture"
                            },
                            {
                                partners: "Corals and zooxanthellae algae",
                                benefits: "Algae: protected habitat, CO₂; Coral: glucose from photosynthesis",
                                importance: "Forms coral reef ecosystems"
                            },
                            {
                                partners: "Lichens (fungi and algae/cyanobacteria)",
                                benefits: "Fungus: photosynthates; Algae: water, minerals, protection",
                                importance: "Pioneer species on bare rock"
                            }
                        ]
                    },
                    facultative: {
                        description: "Species benefit but can survive independently",
                        examples: [
                            {
                                partners: "Bees and flowering plants",
                                benefits: "Bees: nectar and pollen for food; Plants: pollination",
                                importance: "Critical for plant reproduction and food production"
                            },
                            {
                                partners: "Oxpeckers and large mammals (buffalo, rhino)",
                                benefits: "Birds: food (ticks, parasites); Mammals: pest removal, warning signals",
                                note: "Debated; may be parasitic if birds feed on wounds"
                            },
                            {
                                partners: "Clownfish and sea anemones",
                                benefits: "Fish : protection from predators; Anemone: food scraps, protection from predators",
                                mechanism: "Fish immune to anemone's sting"
                            },
                            {
                                partners: "Mycorrhizal fungi and plant roots",
                                benefits: "Fungus: sugars from plant; Plant: increased water and nutrient absorption",
                                importance: "90% of plants have mycorrhizae; critical for forest health"
                            }
                        ]
                    },
                    examples: [
                        "Ants and acacia trees (ants protect tree from herbivores, get food and shelter)",
                        "Cleaner fish and larger fish (cleaners eat parasites, get food)",
                        "Human gut bacteria (bacteria get food/habitat, humans get vitamins and digestion help)"
                    ]
                },
                {
                    name: "Commensalism",
                    symbol: "+/0",
                    definition: "One species benefits, the other is unaffected",
                    characteristics: "One-sided benefit; neutral to other partner",
                    controversy: "Difficult to prove truly no effect; may be subtle costs/benefits",
                    examples: [
                        {
                            relationship: "Barnacles on whales",
                            beneficiary: "Barnacles get transportation and feeding opportunities",
                            neutral: "Whale typically unaffected",
                            note: "Large numbers might increase drag slightly"
                        },
                        {
                            relationship: "Epiphytic plants (orchids, bromeliads) on trees",
                            beneficiary: "Epiphytes get elevated position for sunlight",
                            neutral: "Tree unaffected (epiphyte doesn't take nutrients from tree)",
                            location: "Common in tropical rainforests"
                        },
                        {
                            relationship: "Remora fish and sharks",
                            beneficiary: "Remora gets transportation, protection, food scraps",
                            neutral: "Shark unaffected",
                            mechanism: "Remora attaches with modified dorsal fin"
                        },
                        {
                            relationship: "Birds nesting in trees",
                            beneficiary: "Birds get safe nesting sites",
                            neutral: "Tree unaffected",
                            ubiquity: "Common worldwide"
                        },
                        {
                            relationship: "Cattle egrets following cattle",
                            beneficiary: "Egrets catch insects stirred up by cattle",
                            neutral: "Cattle unaffected"
                        }
                    ]
                },
                {
                    name: "Parasitism",
                    symbol: "+/-",
                    definition: "One species (parasite) benefits, the other (host) is harmed",
                    characteristics: "Parasite gains nutrition/shelter; host loses fitness",
                    parasiteTypes: {
                        ectoparasites: {
                            description: "Live on outside of host",
                            examples: ["Ticks", "Fleas", "Lice", "Leeches", "Lampreys", "Mistletoe"],
                            feeding: "Blood, skin, sap"
                        },
                        endoparasites: {
                            description: "Live inside host",
                            examples: ["Tapeworms", "Roundworms", "Flukes", "Plasmodium (malaria)", "Trypanosomes"],
                            location: "Intestines, blood, tissues, cells"
                        }
                    },
                    strategies: {
                        keepHostAlive: "Parasites typically don't kill host quickly (lose food source)",
                        reproduction: "Often have complex life cycles with multiple hosts",
                        transmission: "Various routes (vectors, direct contact, ingestion)",
                        manipulation: "Some parasites manipulate host behavior"
                    },
                    examples: [
                        {
                            parasite: "Tapeworms",
                            host: "Mammals (including humans)",
                            harm: "Nutrient theft, intestinal blockage, weight loss",
                            transmission: "Undercooked meat"
                        },
                        {
                            parasite: "Plasmodium (malaria parasite)",
                            host: "Humans",
                            harm: "Destroys red blood cells, fever, potentially fatal",
                            vector: "Mosquitoes",
                            impact: "Major global health problem"
                        },
                        {
                            parasite: "Cordyceps fungus",
                            host: "Insects (ants, caterpillars)",
                            harm: "Kills host, grows fruiting body from corpse",
                            manipulation: "Controls ant behavior to climb and bite leaf"
                        },
                        {
                            parasite: "Cuckoo birds",
                            host: "Other bird species",
                            harm: "Host raises cuckoo chick, neglects own offspring",
                            strategy: "Brood parasitism"
                        },
                        {
                            parasite: "Mistletoe",
                            host: "Trees",
                            harm: "Steals water and nutrients via haustorium",
                            note: "Partially photosynthetic"
                        }
                    ],
                    coevolution: "Arms race between parasite and host (resistance vs. infectivity)"
                }
            ],
            otherInteractions: {
                competition: {
                    symbol: "-/-",
                    definition: "Both species harmed by using same limited resources",
                    types: {
                        interspecific: {
                            description: "Competition between different species",
                            examples: "Lions and hyenas for prey, trees competing for sunlight",
                            outcome: "Competitive exclusion or niche partitioning"
                        },
                        intraspecific: {
                            description: "Competition within same species",
                            examples: "Male deer fighting for mates, plants competing for water",
                            intensity: "Often stronger than interspecific (same needs)"
                        }
                    },
                    resources: ["Food", "Water", "Space", "Mates", "Nesting sites", "Sunlight"],
                    mechanisms: {
                        exploitation: "Consuming shared resource",
                        interference: "Directly preventing access to resource"
                    },
                    competitiveExclusion: {
                        principle: "Two species with identical niches cannot coexist",
                        outcome: "One species outcompetes and eliminates the other",
                        example: "Paramecium aurelia excludes P. caudatum in laboratory"
                    },
                    nichePartitioning: {
                        definition: "Species divide resources to reduce competition",
                        examples: [
                            "Warblers feeding at different heights in trees",
                            "Anoles lizards using different perch heights",
                            "Finches with different beak sizes eating different seed sizes"
                        ],
                        result: "Coexistence of similar species"
                    },
                    characterDisplacement: "Evolution of differences in resource use to reduce competition"
                },
                predation: {
                    symbol: "+/-",
                    definition: "One organism (predator) kills and eats another (prey)",
                    characteristics: "Predator benefits (food), prey harmed (death)",
                    predatorAdaptations: [
                        "Sharp teeth/claws",
                        "Speed and agility",
                        "Keen senses (vision, hearing, smell)",
                        "Camouflage (ambush predators)",
                        "Venom",
                        "Pack hunting"
                    ],
                    preyAdaptations: {
                        avoidance: [
                            "Camouflage (cryptic coloration)",
                            "Warning coloration (aposematism)",
                            "Mimicry (Batesian: harmless mimics dangerous; Müllerian: dangerous species mimic each other)",
                            "Speed and agility",
                            "Vigilance and alarm calls",
                            "Herding behavior"
                        ],
                        defense: [
                            "Armor (shells, spines)",
                            "Toxins or bad taste",
                            "Size (too large to attack)",
                            "Fighting back"
                        ]
                    },
                    predatorPreyCycles: {
                        description: "Oscillating populations of predators and prey",
                        pattern: [
                            "1. Prey abundant → predators increase",
                            "2. Many predators → prey decline",
                            "3. Prey scarce → predators decline",
                            "4. Few predators → prey increase (cycle repeats)"
                        ],
                        example: "Lynx and snowshoe hare populations in Canada",
                        lagTime: "Predator population lags behind prey population"
                    },
                    topDownControl: "Predators limit prey populations",
                    keystonePredators: "Removal causes dramatic ecosystem changes"
                },
                herbivory: {
                    symbol: "+/-",
                    definition: "Animals eating plants or algae",
                    characteristics: "Similar to predation but usually doesn't kill plant",
                    herbivoreAdaptations: [
                        "Grinding teeth (molars)",
                        "Long digestive systems",
                        "Symbiotic gut bacteria (digest cellulose)",
                        "Detoxification enzymes"
                    ],
                    plantDefenses: {
                        physical: [
                            "Thorns, spines, prickles",
                            "Tough leaves (high cellulose, lignin)",
                            "Trichomes (tiny hairs)",
                            "Waxy coatings"
                        ],
                        chemical: [
                            "Toxins (alkaloids, tannins, terpenes)",
                            "Digestibility reducers",
                            "Bitter taste",
                            "Latex (sticky, clogs mouthparts)"
                        ]
                    },
                    coevolution: "Plants evolve defenses, herbivores evolve counter-adaptations",
                    examples: [
                        "Monarch butterflies eat toxic milkweed, sequester toxins for protection",
                        "Acacia trees house ants that attack herbivores",
                        "Grasses evolved silica in leaves (abrasive to teeth)"
                    ],
                    impact: "Can shape plant community composition and evolution"
                }
            },
            coevolution: {
                definition: "Two species evolve in response to each other",
                mechanism: "Selection pressure each species exerts on the other",
                types: {
                    pairwise: "Two species (e.g., hummingbird and flower)",
                    diffuse: "Multiple species (e.g., many pollinators and many plants)"
                },
                armsRace: {
                    description: "Escalating adaptations and counter-adaptations",
                    examples: [
                        "Predator speed vs. prey speed",
                        "Plant toxins vs. herbivore detoxification",
                        "Parasite infectivity vs. host resistance"
                    ]
                },
                examples: [
                    {
                        species: "Yucca plants and yucca moths",
                        relationship: "Obligate mutualism",
                        coevolution: "Moth has specialized structures for pollinating yucca; yucca flowers accommodate moth"
                    },
                    {
                        species: "Cheetahs and gazelles",
                        relationship: "Predator-prey",
                        coevolution: "Both evolve for speed; cheetah speed selects for fast gazelles, gazelle speed selects for faster cheetahs"
                    },
                    {
                        species: "Rough-skinned newts and garter snakes",
                        relationship: "Prey-predator",
                        coevolution: "Newt evolves stronger toxin; snake evolves greater resistance (extreme toxicity and resistance)"
                    }
                ]
            },
            ecologicalNiche: {
                definition: "The role a species plays in its ecosystem (its 'occupation')",
                components: {
                    habitat: "Where it lives",
                    foodSources: "What it eats",
                    predators: "What eats it",
                    reproduction: "How and when it reproduces",
                    activity: "When it's active (diurnal, nocturnal)"
                },
                fundamentalNiche: "Full range of conditions species could use (theoretical)",
                realizedNiche: "Actual conditions species uses (limited by competition, predation)",
                nicheOverlap: "Two species use similar resources (leads to competition)"
            },
            evolutionaryOutcomes: {
                adaptation: "Species evolve traits in response to interactions",
                specialization: "Species becomes highly adapted to specific partner or resource",
                diversification: "Competition drives species to use different resources",
                extinction: "Species unable to adapt may go extinct",
                speciation: "Interactions can drive formation of new species"
            },
            examples: [
                {
                    ecosystem: "African Savanna",
                    interactions: [
                        "Lions (predator) hunt zebras and wildebeest (prey)",
                        "Zebras (herbivore) graze on grass",
                        "Oxpeckers (mutualist) remove ticks from zebras",
                        "Ticks (parasites) feed on zebra blood",
                        "Zebras and wildebeest (competitors) eat similar grasses",
                        "Vultures (scavengers) clean up carcasses"
                    ]
                },
                {
                    ecosystem: "Coral Reef",
                    interactions: [
                        "Corals and zooxanthellae (mutualism)",
                        "Clownfish and sea anemone (mutualism)",
                        "Cleaner wrasse and larger fish (mutualism)",
                        "Parrotfish (herbivore) eat algae on coral",
                        "Sharks (predator) hunt reef fish",
                        "Many species compete for space on reef"
                    ]
                }
            ],
            humanRelevance: [
                "Agriculture depends on mutualistic pollinators",
                "Gut microbiome (mutualism) essential for health",
                "Parasites cause major diseases (malaria, tapeworms)",
                "Biological pest control uses predators/parasites",
                "Understanding interactions aids conservation"
            ],
            category: 'symbiosis'
        };
    }

    /**handleEcologicalSuccession(problem) {
        return {
            topic: "Ecological Succession",
            definition: "Predictable, gradual change in species composition of a community over time",
            fundamentalConcepts: {
                directionality: "Generally progresses toward more complex, stable community",
                predictability: "Follows recognizable patterns (though exact species vary)",
                timescale: "Can take decades to centuries",
                mechanism: "Early species modify environment, making it suitable for later species"
            },
            typesOfSuccession: {
                primarySuccession: {
                    definition: "Succession on substrate with no soil or organisms",
                    startingPoint: "Bare rock, sand, lava, glacial till",
                    challenge: "No soil, extreme conditions, few nutrients",
                    timescale: "Very slow (hundreds to thousands of years)",
                    examples: [
                        "Rock exposed by retreating glacier",
                        "Volcanic island (new lava)",
                        "Sand dunes",
                        "Rock outcrop"
                    ],
                    stages: [
                        {
                            stage: "Bare Substrate",
                            description: "No life; harsh conditions",
                            characteristics: "No soil, extreme temperature, no nutrients",
                            duration: "Until colonization"
                        },
                        {
                            stage: "Pioneer Species",
                            species: "Lichens, mosses",
                            characteristics: [
                                "Extremely hardy",
                                "Tolerant of harsh conditions",
                                "Can survive on bare rock",
                                "Produce acids that weather rock"
                            ],
                            role: "Begin soil formation (dead matter + weathered rock)",
                            duration: "Decades to centuries"
                        },
                        {
                            stage: "Early Successional",
                            species: "Small herbaceous plants, grasses, ferns",
                            characteristics: [
                                "Fast-growing",
                                "Short-lived",
                                "Produce many seeds",
                                "r-selected traits"
                            ],
                            soilDevelopment: "Increasing organic matter and depth",
                            duration: "Years to decades"
                        },
                        {
                            stage: "Mid-Successional",
                            species: "Shrubs, small trees, perennial plants",
                            characteristics: [
                                "Longer-lived",
                                "Sun-loving (shade-intolerant)"
                            ],
                            forestDevelopment: "Young forest begins",
                            timeframe: "5-15 years"
                        },
                        {
                            stage: "Late Successional",
                            species: "Slower-growing, shade-tolerant trees (e.g., oak, maple, beech)",
                            characteristics: [
                                "Long-lived",
                                "Shade-tolerant seedlings",
                                "Large size at maturity"
                            ],
                            transition: "Gradually replace early trees",
                            timeframe: "50-150 years"
                        },
                        {
                            stage: "Climax Community",
                            species: "Mature forest dominated by shade-tolerant species",
                            characteristics: [
                                "High biodiversity",
                                "Complex structure (multiple layers)",
                                "Self-replacing (shade-tolerant seedlings grow under canopy)"
                            ],
                            stability: "Relatively stable",
                            timeframe: "150+ years"
                        }
                    ]
                }
            },
            keyTerms: {
                pioneerSpecies: {
                    definition: "First organisms to colonize barren environment",
                    characteristics: [
                        "Hardy and tolerant of harsh conditions",
                        "Small, fast-growing",
                        "Produce many offspring/seeds",
                        "Wind or animal dispersed",
                        "r-selected traits"
                    ],
                    role: "Modify environment for later species",
                    examples: {
                        primary: "Lichens, mosses",
                        secondary: "Weeds, grasses (ragweed, dandelion)"
                    }
                },
                climaxCommunity: {
                    definition: "Final, stable community in successional sequence",
                    characteristics: [
                        "Dominated by K-selected species",
                        "High biodiversity",
                        "Complex structure",
                        "Self-perpetuating",
                        "Relatively stable"
                    ],
                    determinants: "Climate, soil, topography determine climax type",
                    examples: [
                        "Temperate deciduous forest (Eastern US)",
                        "Tropical rainforest (Amazon)",
                        "Tallgrass prairie (Great Plains)"
                    ],
                    debate: "Concept controversial; some ecologists prefer 'old-growth' or 'mature' community"
                },
                intermediateSpecies: {
                    definition: "Species that appear between pioneer and climax stages",
                    role: "Continue modifying environment",
                    examples: "Shrubs, fast-growing trees",
                    duration: "Temporary; replaced by later species"
                }
            },
            mechanisms: {
                facilitation: {
                    description: "Early species make environment more suitable for later species",
                    examples: [
                        "Lichens weather rock, create soil for plants",
                        "Nitrogen-fixing plants add nitrogen to soil",
                        "Pioneer trees provide shade for shade-tolerant seedlings"
                    ],
                    importance: "Drives succession forward"
                },
                tolerance: {
                    description: "Later species tolerate conditions better than early species",
                    examples: [
                        "Shade-tolerant trees grow under canopy where pioneers cannot",
                        "Late species better competitors for resources"
                    ],
                    result: "Later species gradually replace earlier ones"
                },
                inhibition: {
                    description: "Early species resist invasion by later species",
                    examples: [
                        "Dense pioneer vegetation prevents establishment of other species",
                        "Allelopathy (chemical inhibition)"
                    ],
                    succession: "Proceeds only when pioneers die or are disturbed"
                }
            },
            changesDuringSuccession: {
                biodiversity: {
                    pattern: "Generally increases, then plateaus or slightly decreases",
                    early: "Low diversity (few hardy species)",
                    mid: "High diversity (many species coexisting)",
                    late: "Moderate-high diversity (stable community)"
                },
                biomass: {
                    pattern: "Increases throughout succession",
                    early: "Low biomass (small, herbaceous plants)",
                    late: "High biomass (large trees, accumulated organic matter)"
                },
                productivity: {
                    grossProductivity: "Increases, then stabilizes",
                    netProductivity: "High in mid-succession, decreases in climax (respiration = photosynthesis)"
                },
                soilDevelopment: {
                    depth: "Increases (primary succession)",
                    organicMatter: "Increases",
                    nutrients: "Accumulate and cycle more efficiently",
                    structure: "Improves (better water retention, aeration)"
                },
                species: {
                    early: "r-selected (fast growth, high reproduction, short-lived)",
                    late: "K-selected (slow growth, low reproduction, long-lived)"
                },
                nutrientCycling: {
                    early: "Nutrients lost easily (poor retention)",
                    late: "Nutrients tightly cycled (efficient retention)"
                },
                stratification: {
                    early: "Single layer (ground cover)",
                    late: "Multiple layers (canopy, understory, shrub layer, herb layer, forest floor)"
                }
            },
            disturbanceAndSuccession: {
                disturbanceRole: {
                    description: "Disturbances reset succession or create patchwork of successional stages",
                    benefits: [
                        "Increases landscape diversity",
                        "Creates habitat for early successional species",
                        "Prevents dominance by climax species",
                        "Maintains biodiversity"
                    ]
                },
                intermediateDisturbanceHypothesis: {
                    concept: "Moderate disturbance frequency/intensity maximizes biodiversity",
                    reasoning: [
                        "Too little disturbance: competitive exclusion reduces diversity",
                        "Too much disturbance: only hardy pioneers survive",
                        "Moderate disturbance: mix of early, mid, and late successional species"
                    ],
                    shape: "Bell curve (diversity vs. disturbance)"
                },
                fireEcology: {
                    description: "Many ecosystems adapted to periodic fire",
                    fireAdaptations: [
                        "Thick bark (protects trees)",
                        "Serotinous cones (release seeds after fire)",
                        "Resprouting from roots/stumps",
                        "Fire-stimulated germination"
                    ],
                    fireDependentEcosystems: [
                        "Longleaf pine forests",
                        "Chaparral",
                        "Tallgrass prairie",
                        "Jack pine forests"
                    ],
                    fireSuppression: "Can lead to fuel buildup and more severe fires"
                }
            },
            successionExamples: [
                {
                    location: "Mount St. Helens, Washington (1980 eruption)",
                    type: "Primary succession",
                    starting: "Volcanic ash and debris",
                    progress: "Lupines (nitrogen-fixers) → grasses → shrubs → young forest",
                    current: "Forest recovering, but still decades from climax"
                },
                {
                    location: "Abandoned farm field, Eastern US",
                    type: "Secondary succession",
                    starting: "Old agricultural land",
                    progress: "Annual weeds → perennial grasses → shrubs → pine forest → deciduous forest",
                    climax: "Oak-hickory or maple-beech forest (depending on region)"
                },
                {
                    location: "Glacier Bay, Alaska",
                    type: "Primary succession",
                    starting: "Exposed rock and gravel from glacial retreat",
                    progress: "Mosses/lichens → Dryas (nitrogen-fixer) → alder → spruce forest",
                    timeframe: "200+ years studied"
                }
            },
            aquaticSuccession: {
                lakeSuccession: {
                    process: "Lake gradually fills in and becomes land",
                    stages: [
                        "Oligotrophic lake (nutrient-poor, clear, deep)",
                        "Mesotrophic lake (moderate nutrients)",
                        "Eutrophic lake (nutrient-rich, algae-filled, shallow)",
                        "Marsh/wetland (filled in)",
                        "Terrestrial habitat (completely filled)"
                    ],
                    timescale: "Thousands of years",
                    accelerated: "Eutrophication from pollution speeds process"
                }
            },
            climateChange: {
                impacts: [
                    "Changes climax community types (warmer favors different species)",
                    "Alters disturbance regimes (more fires, storms)",
                    "Shifts species ranges (changes who colonizes)",
                    "Novel communities (species combinations never seen before)"
                ],
                uncertainty: "Successional pathways may change unpredictably"
            },
            applications: [
                "Ecosystem restoration (guide recovery after damage)",
                "Forest management (control succession with fire, thinning)",
                "Reclamation of mined lands",
                "Invasive species management (early species easier to remove)",
                "Conservation (protect late-successional species and old-growth)"
            ],
            category: 'ecological_succession'
        };
    }
    */

    // CONTENT GENERATION METHODS (same pattern as cell biology)

    generateEcologyContent(problem, content) {
        const contentSections = [];

        // Generate overview section
        contentSections.push(this.generateOverviewSection(problem, content));

        // Generate detailed content based on topic type
        if (content.components) {
            contentSections.push(this.generateComponentsContent(content));
        }

        if (content.trophicLevels) {
            contentSections.push(this.generateTrophicContent(content));
        }

        if (content.carbonCycle || content.nitrogenCycle || content.waterCycle) {
            contentSections.push(this.generateCyclesContent(content));
        }

        if (content.typesOfSymbiosis) {
            contentSections.push(this.generateSymbiosisContent(content));
        }

        if (content.terrestrialBiomes) {
            contentSections.push(this.generateBiomesContent(content));
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
            description: content.description || content.summary || content.definition || `Overview of ${content.topic}`,
            keyPoints: this.extractKeyPoints(content),
            relevance: this.getTopicRelevance(problem.type)
        };
    }

    generateComponentsContent(content) {
        return {
            sectionType: 'components',
            title: 'Ecosystem Components',
            biotic: content.components.biotic,
            abiotic: content.components.abiotic
        };
    }

    generateTrophicContent(content) {
        return {
            sectionType: 'trophic_levels',
            title: 'Trophic Levels and Feeding Relationships',
            levels: content.trophicLevels
        };
    }

    generateCyclesContent(content) {
        return {
            sectionType: 'nutrient_cycles',
            title: 'Biogeochemical Cycles',
            cycles: {
                carbon: content.carbonCycle,
                nitrogen: content.nitrogenCycle,
                water: content.waterCycle,
                phosphorus: content.phosphorusCycle
            }
        };
    }

    generateSymbiosisContent(content) {
        return {
            sectionType: 'symbiosis_types',
            title: 'Types of Symbiotic Relationships',
            types: content.typesOfSymbiosis,
            otherInteractions: content.otherInteractions
        };
    }

    generateBiomesContent(content) {
        return {
            sectionType: 'biomes',
            title: 'Terrestrial and Aquatic Biomes',
            terrestrial: content.terrestrialBiomes,
            aquatic: content.aquaticBiomes
        };
    }

    generateComparisonsSection(content) {
        const comparisons = content.comparisons || content.comparison;
        if (!comparisons) return null;

        return {
            sectionType: 'comparisons',
            title: 'Comparisons and Contrasts',
            comparisons: Object.entries(comparisons).map(([key, comp]) => ({
                comparisonName: key,
                data: comp
            }))
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

        if (content.concepts) keyPoints.push(...content.concepts);
        if (content.keyDefinitions) keyPoints.push(...Object.keys(content.keyDefinitions));
        if (content.mainCategories) keyPoints.push(...content.mainCategories);
        if (content.fundamentalConcepts) {
            Object.values(content.fundamentalConcepts).forEach(concept => {
                if (typeof concept === 'string') keyPoints.push(concept);
                else if (concept.importance) keyPoints.push(concept.importance);
            });
        }

        return keyPoints.slice(0, 5); // Limit to top 5 key points
    }

    getTopicRelevance(topicType) {
        const relevance = {
            ecosystems: "Understanding ecosystems is fundamental to all ecological studies",
            food_webs: "Food webs show how energy and matter flow through communities",
            energy_flow: "Energy flow explains ecosystem productivity and structure",
            nutrient_cycles: "Nutrient cycles maintain life by recycling essential elements",
            population_dynamics: "Population dynamics explain changes in species abundance",
            biomes: "Biomes represent Earth's major ecological regions and biodiversity patterns",
            symbiosis: "Species interactions shape community structure and evolution",
            ecological_succession: "Succession explains how communities change and recover over time"
        };

        return relevance[topicType] || "Important ecological concept";
    }

    // DIAGRAM GENERATION (Placeholder methods)

    generateEcologyDiagramData() {
        if (!this.currentContent) return;

        const { type } = this.currentProblem;

        // Placeholder diagram data generation
        this.diagramData = {
            type: type,
            diagrams: this.getRelevantDiagrams(type),
            placeholder: true,
            note: "Diagram generation will be implemented with actual ecological diagrams"
        };
    }

    getRelevantDiagrams(topicType) {
        const diagramMap = {
            ecosystems: ["ecosystem_components", "energy_pyramid", "food_web_diagram"],
            food_webs: ["food_chain", "food_web", "trophic_levels"],
            energy_flow: ["energy_pyramid", "10_percent_rule", "productivity_diagram"],
            nutrient_cycles: ["carbon_cycle", "nitrogen_cycle", "water_cycle", "phosphorus_cycle"],
            population_dynamics: ["exponential_growth", "logistic_growth", "survivorship_curves"],
            biomes: ["world_biomes_map", "biome_climate_graph", "biome_characteristics"],
            symbiosis: ["symbiosis_types", "predator_prey_cycle", "competition_diagram"],
            ecological_succession: ["primary_succession", "secondary_succession", "climax_community"]
        };

        return diagramMap[topicType] || [];
    }

    // WORKBOOK GENERATION

    generateEcologyWorkbook() {
        if (!this.currentContent || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createEcologyProblemSection(),
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
            title: `Ecology Workbook: ${this.currentContent.topic}`,
            created: new Date().toISOString(),
            theme: this.theme,
            explanationLevel: this.explanationLevel,
            sections: []
        };
    }

    createEcologyProblemSection() {
        if (!this.currentProblem) return null;

        return {
            title: 'Topic Information',
            type: 'problem',
            data: [
                ['Topic Type', this.currentProblem.type],
                ['Main Topic', this.currentProblem.originalTopic],
                ['Sub-Topic', this.currentProblem.subTopic || 'General'],
                ['Category', this.ecologyTopics[this.currentProblem.type]?.category || 'N/A']
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

        // Handle different content structures
        if (this.currentContent.components) {
            contentData.push(['ECOSYSTEM COMPONENTS', '']);
            if (this.currentContent.components.biotic) {
                contentData.push(['Biotic Factors', '']);
                this.currentContent.components.biotic.categories?.forEach(cat => {
                    contentData.push([cat.name, cat.description]);
                });
            }
            if (this.currentContent.components.abiotic) {
                contentData.push(['', '']);
                contentData.push(['Abiotic Factors', '']);
                this.currentContent.components.abiotic.categories?.forEach(cat => {
                    contentData.push([cat.factor, cat.effects]);
                });
            }
        }

        if (this.currentContent.trophicLevels) {
            contentData.push(['', '']);
            contentData.push(['TROPHIC LEVELS', '']);
            this.currentContent.trophicLevels.forEach(level => {
                contentData.push([level.level, level.description]);
                if (level.examples) {
                    contentData.push(['Examples', level.examples.join(', ')]);
                }
            });
        }

        if (this.currentContent.terrestrialBiomes) {
            contentData.push(['', '']);
            contentData.push(['TERRESTRIAL BIOMES', '']);
            this.currentContent.terrestrialBiomes.forEach(biome => {
                contentData.push([biome.name, '']);
                contentData.push(['Location', biome.location]);
                contentData.push(['Climate', JSON.stringify(biome.climate)]);
                contentData.push(['', '']);
            });
        }

        return contentData.length > 0 ? {
            title: 'Detailed Content',
            type: 'detailed_content',
            data: contentData
        } : null;
    }

    createComparisonsSection() {
        const comparisons = this.currentContent?.comparisons || this.currentContent?.comparison;
        if (!comparisons) return null;

        const comparisonData = [];

        Object.entries(comparisons).forEach(([comparisonName, comparisonContent]) => {
            comparisonData.push([comparisonName.toUpperCase(), '']);
            
            if (typeof comparisonContent === 'object') {
                Object.entries(comparisonContent).forEach(([key, value]) => {
                    if (typeof value === 'string') {
                        comparisonData.push([key, value]);
                    } else if (Array.isArray(value)) {
                        comparisonData.push([key, value.join(', ')]);
                    } else if (typeof value === 'object') {
                        comparisonData.push([key, JSON.stringify(value)]);
                    }
                });
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
                        const exampleName = example.name || example.ecosystem || example.location || 'Example';
                        data.push([exampleName, '']);
                        Object.entries(example).forEach(([key, value]) => {
                            if (key !== 'name' && key !== 'ecosystem' && key !== 'location') {
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

        if (lesson.keyCycles) {
            data.push(['', '']);
            data.push(['KEY CYCLES', '']);
            Object.entries(lesson.keyCycles).forEach(([cycle, description]) => {
                data.push([cycle, description]);
            });
        }

        if (lesson.applications) {
            data.push(['', '']);
            data.push(['APPLICATIONS', '']);
            lesson.applications.forEach(app => {
                data.push(['•', app]);
            });
        }

        if (lesson.mainCategories) {
            data.push(['', '']);
            data.push(['MAIN CATEGORIES', '']);
            lesson.mainCategories.forEach(cat => {
                data.push(['•', cat]);
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

    // UTILITY METHODS FOR ENHANCED EXPLANATIONS

    adaptEcologyLanguage(text, level) {
        if (!text) return '';

        const adaptations = {
            basic: {
                replacements: {
                    'ecosystem': 'community of living things and their environment',
                    'biotic': 'living',
                    'abiotic': 'non-living',
                    'producer': 'plant that makes its own food',
                    'consumer': 'animal that eats other organisms',
                    'decomposer': 'organism that breaks down dead things',
                    'trophic level': 'feeding level',
                    'biodiversity': 'variety of life',
                    'carrying capacity': 'maximum population the environment can support',
                    'succession': 'gradual change in community over time'
                }
            },
            intermediate: {
                replacements: {
                    'ecosystem': 'ecosystem',
                    'biotic': 'biotic',
                    'abiotic': 'abiotic',
                    'trophic level': 'trophic level'
                }
            },
            detailed: {
                replacements: {
                    'ecosystem': 'ecosystem (biological community and physical environment)',
                    'producer': 'autotrophic producer',
                    'consumer': 'heterotrophic consumer',
                    'trophic level': 'trophic level (feeding position in food web)'
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

    generateEcologyAnalogy(concept) {
        const analogies = {
            ecosystem: "Like a city with many interconnected parts",
            food_web: "Like a network of restaurants and customers",
            energy_flow: "Like money flowing through an economy",
            producer: "Like a factory making products",
            consumer: "Like a customer buying products",
            decomposer: "Like a recycling center",
            carrying_capacity: "Like the maximum capacity of a parking lot",
            niche: "Like a person's job or profession",
            succession: "Like a neighborhood changing over time",
            competition: "Like businesses competing for customers",
            predation: "Like hunting for food",
            mutualism: "Like a business partnership where both benefit",
            carbon_cycle: "Like money circulating in an economy",
            population_growth: "Like a bank account earning interest"
        };

        return analogies[concept] || "An important ecological relationship";
    }

    formatEcologicalTerm(term) {
        // Format ecological terms with proper symbols
        const formatted = term
            .replace(/CO2/g, this.ecologicalSymbols.CO2)
            .replace(/O2/g, this.ecologicalSymbols.O2)
            .replace(/H2O/g, this.ecologicalSymbols.H2O)
            .replace(/N2/g, this.ecologicalSymbols.N2)
            .replace(/NH3/g, this.ecologicalSymbols.NH3)
            .replace(/NO3/g, this.ecologicalSymbols.NO3)
            .replace(/PO4/g, this.ecologicalSymbols.PO4);

        return formatted;
    }

    // ENHANCED CONTENT METHODS

    addConceptualConnections(content) {
        if (!this.includeConceptualConnections) return content;

        const connections = {
            ecosystems: "Ecosystems integrate biotic and abiotic components through energy flow and matter cycling",
            food_webs: "Food webs connect to energy flow, nutrient cycling, and population dynamics",
            energy_flow: "Energy flow connects to thermodynamics and explains ecosystem productivity limits",
            nutrient_cycles: "Nutrient cycles link organisms to geological and atmospheric processes",
            population_dynamics: "Population changes affect community structure and ecosystem function",
            biomes: "Biomes reflect climate patterns and evolutionary adaptations",
            symbiosis: "Species interactions drive coevolution and shape community structure",
            ecological_succession: "Succession connects disturbance ecology, community assembly, and ecosystem development"
        };

        content.conceptualConnections = connections[this.currentProblem.type] || 
            "This topic connects to broader ecological principles";

        return content;
    }

    enrichWithExamples(content) {
        if (!this.includeExamples || content.examples) return content;

        const exampleDatabase = {
            ecosystems: [
                "Coral reef ecosystem with complex interactions",
                "Desert ecosystem with water-limited adaptations",
                "Rainforest ecosystem with high biodiversity"
            ],
            food_webs: [
                "Kelp forest food web: kelp → sea urchins → sea otters",
                "Grassland food web: grass → grasshoppers → birds → hawks",
                "Marine food web: phytoplankton → zooplankton → fish → sharks"
            ],
            energy_flow: [
                "Only 10% of grass energy transfers to grasshoppers",
                "Pyramid of energy always upright (decreases up levels)",
                "Primary productivity varies by biome (rainforest > desert)"
            ],
            nutrient_cycles: [
                "Carbon moves from atmosphere to plants via photosynthesis",
                "Nitrogen-fixing bacteria convert N₂ to usable forms",
                "Water cycles through evaporation and precipitation"
            ],
            population_dynamics: [
                "Deer population limited by food and predators",
                "Bacterial population grows exponentially then crashes",
                "Human population following logistic growth"
            ],
            biomes: [
                "Tropical rainforest: hot, wet, high biodiversity",
                "Tundra: cold, dry, low biodiversity",
                "Temperate forest: four seasons, deciduous trees"
            ],
            symbiosis: [
                "Clownfish and sea anemone (mutualism)",
                "Barnacles on whales (commensalism)",
                "Tick on dog (parasitism)"
            ],
            ecological_succession: [
                "Abandoned farm field becomes forest over time",
                "Bare rock colonized by lichens, then mosses, then plants",
                "Forest fire followed by recovery sequence"
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
            ecosystems: {
                size: "Can range from small pond to entire biome",
                energy: "Energy flows through; matter cycles within",
                complexity: "More species = more complex interactions"
            },
            food_webs: {
                structure: "Food chains linear; food webs interconnected",
                stability: "Complex webs more stable than simple chains",
                efficiency: "~10% energy transfer between levels"
            },
            energy_flow: {
                direction: "Energy flows one-way (unlike matter cycling)",
                efficiency: "Decreases at each trophic level",
                source: "Nearly all from sun (except deep sea vents)"
            },
            population_dynamics: {
                growth: "Exponential (J-curve) vs. Logistic (S-curve)",
                factors: "Density-dependent vs. density-independent",
                strategies: "r-selected (many offspring) vs. K-selected (few offspring)"
            },
            biomes: {
                distribution: "Determined by temperature and precipitation",
                diversity: "Tropical > temperate > polar",
                productivity: "Rainforest > grassland > desert"
            },
            symbiosis: {
                effects: "Mutualism (+/+), Commensalism (+/0), Parasitism (+/-)",
                duration: "Short-term interactions vs. long-term symbiosis",
                specificity: "Obligate (required) vs. facultative (optional)"
            }
        };

        if (comparativeData[this.currentProblem.type]) {
            content.comparativeContext = comparativeData[this.currentProblem.type];
        }

        return content;
    }

    // VERIFICATION AND VALIDATION

    validateEcologyContent(content) {
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
            content.components ||
            content.trophicLevels ||
            content.terrestrialBiomes ||
            content.typesOfSymbiosis ||
            content.carbonCycle ||
            content.populationCharacteristics;

        if (!hasSubstantiveContent) {
            validationResults.warnings.push("Limited substantive content");
            validationResults.suggestions.push("Consider adding more detailed information");
        }

        // Check for educational value
        if (!content.examples && !content.applications) {
            validationResults.suggestions.push("Consider adding examples and applications");
        }

        return validationResults;
    }

    calculateContentCompleteness() {
        if (!this.currentContent) return 0;

        let score = 0;
        const maxScore = 10;

        // Award points for different content aspects
        if (this.currentContent.topic) score += 1;
        if (this.currentContent.description || this.currentContent.definition) score += 1;
        if (this.currentContent.examples) score += 1;
        if (this.currentContent.applications) score += 1;
        if (this.currentContent.comparisons || this.currentContent.comparison) score += 1;

        // Main content
        const hasMainContent =
            this.currentContent.components ||
            this.currentContent.trophicLevels ||
            this.currentContent.terrestrialBiomes ||
            this.currentContent.typesOfSymbiosis ||
            this.currentContent.carbonCycle;
        if (hasMainContent) score += 3;

        // Additional depth
        if (this.currentContent.fundamentalConcepts) score += 1;
        if (this.currentContent.mechanisms || this.currentContent.processes) score += 1;

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
            // Search in different content types
            if (this.currentContent.terrestrialBiomes) {
                this.currentContent.terrestrialBiomes.forEach(biome => {
                    if (JSON.stringify(biome).toLowerCase().includes(queryLower)) {
                        results.matches.push({
                            type: 'biome',
                            name: biome.name,
                            content: biome
                        });
                    }
                });
            }

            if (this.currentContent.trophicLevels) {
                this.currentContent.trophicLevels.forEach(level => {
                    if (JSON.stringify(level).toLowerCase().includes(queryLower)) {
                        results.matches.push({
                            type: 'trophic_level',
                            name: level.level,
                            content: level
                        });
                    }
                });
            }

            if (this.currentContent.typesOfSymbiosis) {
                this.currentContent.typesOfSymbiosis.forEach(symbiosis => {
                    if (JSON.stringify(symbiosis).toLowerCase().includes(queryLower)) {
                        results.matches.push({
                            type: 'symbiosis',
                            name: symbiosis.name,
                            content: symbiosis
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
        if (this.currentContent.terrestrialBiomes) {
            const matching = this.currentContent.terrestrialBiomes.filter(biome =>
                biome.name?.toLowerCase().includes(category.toLowerCase()) ||
                biome.location?.toLowerCase().includes(category.toLowerCase())
            );
            filtered.items.push(...matching);
        }

        if (this.currentContent.components) {
            if (category.toLowerCase().includes('biotic') && this.currentContent.components.biotic) {
                filtered.items.push(this.currentContent.components.biotic);
            }
            if (category.toLowerCase().includes('abiotic') && this.currentContent.components.abiotic) {
                filtered.items.push(this.currentContent.components.abiotic);
            }
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
        if (this.currentContent.terrestrialBiomes) {
            summary.itemCount += this.currentContent.terrestrialBiomes.length;
            summary.coverage.biomes = this.currentContent.terrestrialBiomes.length;
        }

        if (this.currentContent.trophicLevels) {
            summary.itemCount += this.currentContent.trophicLevels.length;
            summary.coverage.trophicLevels = this.currentContent.trophicLevels.length;
        }

        if (this.currentContent.typesOfSymbiosis) {
            summary.itemCount += this.currentContent.typesOfSymbiosis.length;
            summary.coverage.symbiosisTypes = this.currentContent.typesOfSymbiosis.length;
        }

        // Extract key points
        if (this.currentContent.concepts) {
            summary.keyPoints.push(...this.currentContent.concepts.slice(0, 3));
        }

        return summary;
    }

    // DIFFICULTY ASSESSMENT

    assessContentDifficulty() {
        if (!this.currentContent) return 'unknown';

        let difficultyScore = 0;

        // Simple topics
        const simpleTopics = ['ecosystems', 'food_webs', 'biomes'];
        if (simpleTopics.includes(this.currentProblem.type)) {
            difficultyScore += 1;
        }

        // Intermediate topics
        const intermediateTopics = ['energy_flow', 'symbiosis', 'population_dynamics'];
        if (intermediateTopics.includes(this.currentProblem.type)) {
            difficultyScore += 2;
        }

        // Complex topics
        const complexTopics = ['nutrient_cycles', 'ecological_succession'];
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

    // LEARNING OBJECTIVES GENERATION

    generateLearningObjectives() {
        if (!this.currentProblem) return [];

        const objectivesDatabase = {
            ecosystems: [
                "Define ecosystem and distinguish between biotic and abiotic factors",
                "Explain the relationships between organisms and their environment",
                "Describe ecosystem services and their importance",
                "Analyze how energy and matter flow through ecosystems"
            ],
            food_webs: [
                "Distinguish between food chains and food webs",
                "Identify organisms at different trophic levels",
                "Explain the roles of producers, consumers, and decomposers",
                "Analyze the effects of removing species from food webs"
            ],
            energy_flow: [
                "Explain the 10% rule and its implications",
                "Describe how energy flows through trophic levels",
                "Distinguish between energy pyramids and biomass pyramids",
                "Calculate energy transfer efficiency between trophic levels"
            ],
            nutrient_cycles: [
                "Describe the major biogeochemical cycles",
                "Explain how matter cycles through ecosystems",
                "Identify processes that move nutrients between reservoirs",
                "Analyze human impacts on nutrient cycles"
            ],
            population_dynamics: [
                "Compare exponential and logistic population growth",
                "Define carrying capacity and limiting factors",
                "Distinguish between density-dependent and density-independent factors",
                "Interpret survivorship curves and reproductive strategies"
            ],
            biomes: [
                "Identify major terrestrial and aquatic biomes",
                "Explain how climate determines biome distribution",
                "Describe characteristic organisms of each biome",
                "Analyze threats to different biomes"
            ],
            symbiosis: [
                "Distinguish between mutualism, commensalism, and parasitism",
                "Explain how species interactions shape communities",
                "Describe examples of coevolution",
                "Analyze the effects of competition and predation"
            ],
            ecological_succession: [
                "Compare primary and secondary succession",
                "Describe the stages of ecological succession",
                "Explain the role of pioneer species and climax communities",
                "Predict how disturbances affect succession"
            ]
        };

        return objectivesDatabase[this.currentProblem.type] || [
            "Understand the key concepts of this topic",
            "Apply knowledge to ecological contexts",
            "Make connections to other ecological principles"
        ];
    }

    // PREREQUISITE KNOWLEDGE

    identifyPrerequisites() {
        if (!this.currentProblem) return [];

        const prerequisitesDatabase = {
            ecosystems: [
                "Basic understanding of living organisms",
                "Knowledge of environmental factors"
            ],
            food_webs: [
                "Understanding of ecosystems",
                "Basic knowledge of producers and consumers"
            ],
            energy_flow: [
                "Understanding of food webs and trophic levels",
                "Basic knowledge of energy and photosynthesis",
                "Understanding of producers and consumers"
            ],
            nutrient_cycles: [
                "Basic chemistry (elements, compounds)",
                "Understanding of ecosystems",
                "Knowledge of photosynthesis and cellular respiration"
            ],
            population_dynamics: [
                "Basic mathematics (exponential functions, graphs)",
                "Understanding of birth and death rates",
                "Knowledge of resources and limiting factors"
            ],
            biomes: [
                "Understanding of ecosystems",
                "Knowledge of climate factors (temperature, precipitation)",
                "Basic geography"
            ],
            symbiosis: [
                "Understanding of species interactions",
                "Knowledge of adaptations",
                "Basic understanding of evolution"
            ],
            ecological_succession: [
                "Understanding of communities and ecosystems",
                "Knowledge of disturbance",
                "Basic understanding of soil formation"
            ]
        };

        return prerequisitesDatabase[this.currentProblem.type] || [
            "General ecology background"
        ];
    }

    // STUDY TIPS GENERATION

    generateStudyTips() {
        if (!this.currentProblem) return [];

        const studyTipsDatabase = {
            ecosystems: [
                "Create concept maps showing relationships between components",
                "List examples of biotic and abiotic factors in local ecosystem",
                "Draw and label a diagram of an ecosystem",
                "Practice distinguishing between levels of organization"
            ],
            food_webs: [
                "Draw food webs for different ecosystems",
                "Practice tracing energy flow from sun to top predators",
                "Use arrows to show direction of energy flow (eaten by)",
                "Memorize the sequence: producer → primary → secondary → tertiary"
            ],
            energy_flow: [
                "Practice calculating 10% rule problems",
                "Draw energy pyramids showing decreasing energy",
                "Remember: energy flows one-way, matter cycles",
                "Create mnemonics for remembering trophic levels"
            ],
            nutrient_cycles: [
                "Draw each cycle from memory",
                "Focus on key processes in each cycle",
                "Compare and contrast different cycles",
                "Use different colors for different pathways"
            ],
            population_dynamics: [
                "Practice graphing exponential vs. logistic growth",
                "Learn the equations and what each variable represents",
                "Create flashcards for key terms (r, K, density-dependent)",
                "Draw and interpret survivorship curves"
            ],
            biomes: [
                "Create a chart comparing all biomes",
                "Use climate graphs to identify biomes",
                "Learn characteristic plants and animals for each",
                "Understand temperature and precipitation patterns"
            ],
            symbiosis: [
                "Use +, 0, - notation to remember interaction types",
                "Collect real-world examples of each interaction",
                "Practice identifying interactions from descriptions",
                "Create comparison table for all interaction types"
            ],
            ecological_succession: [
                "Draw the stages of succession in order",
                "Remember: primary = no soil, secondary = soil present",
                "Learn characteristics of pioneer vs. climax species",
                "Use timelines to show progression"
            ]
        };

        return studyTipsDatabase[this.currentProblem.type] || [
            "Review material regularly",
            "Create visual aids and diagrams",
            "Practice active recall",
            "Relate concepts to real-world examples"
        ];
    }

    // ASSESSMENT QUESTIONS GENERATION

    generateAssessmentQuestions() {
        if (!this.currentProblem) return [];

        const questionsDatabase = {
            ecosystems: [
                {
                    question: "What is the difference between biotic and abiotic factors?",
                    type: "comparison",
                    difficulty: "easy"
                },
                {
                    question: "Explain how energy flows and matter cycles in an ecosystem.",
                    type: "explanation",
                    difficulty: "medium"
                },
                {
                    question: "How would removing top predators affect an ecosystem?",
                    type: "analysis",
                    difficulty: "hard"
                }
            ],
            food_webs: [
                {
                    question: "What are the different trophic levels in a food web?",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "Why are food webs more realistic than food chains?",
                    type: "explanation",
                    difficulty: "medium"
                },
                {
                    question: "Predict what would happen if all decomposers were removed from an ecosystem.",
                    type: "prediction",
                    difficulty: "hard"
                }
            ],
            energy_flow: [
                {
                    question: "What is the 10% rule?",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "If producers have 10,000 kcal of energy, how much reaches tertiary consumers?",
                    type: "calculation",
                    difficulty: "medium"
                },
                {
                    question: "Why are there usually no more than 4-5 trophic levels?",
                    type: "explanation",
                    difficulty: "hard"
                }
            ],
            nutrient_cycles: [
                {
                    question: "Name the major biogeochemical cycles.",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "Explain how carbon moves from atmosphere to organisms and back.",
                    type: "explanation",
                    difficulty: "medium"
                },
                {
                    question: "How do human activities affect the nitrogen cycle?",
                    type: "analysis",
                    difficulty: "hard"
                }
            ],
            population_dynamics: [
                {
                    question: "What is carrying capacity?",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "Compare exponential and logistic growth curves.",
                    type: "comparison",
                    difficulty: "medium"
                },
                {
                    question: "Explain how density-dependent factors regulate population size.",
                    type: "explanation",
                    difficulty: "hard"
                }
            ],
            biomes: [
                {
                    question: "What two factors primarily determine biome type?",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "Compare tropical rainforest and desert biomes.",
                    type: "comparison",
                    difficulty: "medium"
                },
                {
                    question: "How will climate change affect biome distribution?",
                    type: "prediction",
                    difficulty: "hard"
                }
            ],
            symbiosis: [
                {
                    question: "Define mutualism, commensalism, and parasitism.",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "Give an example of each type of symbiosis.",
                    type: "application",
                    difficulty: "medium"
                },
                {
                    question: "How does coevolution occur between predator and prey?",
                    type: "explanation",
                    difficulty: "hard"
                }
            ],
            ecological_succession: [
                {
                    question: "What is the difference between primary and secondary succession?",
                    type: "comparison",
                    difficulty: "easy"
                },
                {
                    question: "Describe the stages of secondary succession after a forest fire.",
                    type: "explanation",
                    difficulty: "medium"
                },
                {
                    question: "Why do pioneer species eventually get replaced by other species?",
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

    // RELATED TOPICS SUGGESTION

    suggestRelatedTopics() {
        if (!this.currentProblem) return [];

        const relatedTopicsMap = {
            ecosystems: ['food_webs', 'energy_flow', 'nutrient_cycles', 'biomes'],
            food_webs: ['ecosystems', 'energy_flow', 'symbiosis'],
            energy_flow: ['food_webs', 'ecosystems', 'nutrient_cycles'],
            nutrient_cycles: ['ecosystems', 'energy_flow', 'biomes'],
            population_dynamics: ['ecosystems', 'symbiosis', 'ecological_succession'],
            biomes: ['ecosystems', 'population_dynamics', 'ecological_succession'],
            symbiosis: ['food_webs', 'population_dynamics', 'ecological_succession'],
            ecological_succession: ['ecosystems', 'biomes', 'population_dynamics']
        };

        const relatedTypes = relatedTopicsMap[this.currentProblem.type] || [];
        
        return relatedTypes.map(type => ({
            type: type,
            name: this.ecologyTopics[type]?.name,
            description: this.ecologyTopics[type]?.description
        }));
    }

    // GLOSSARY GENERATION

    generateGlossary() {
        if (!this.currentContent) return {};

        const glossary = {};

        // Extract key terms from content
        if (this.currentContent.keyDefinitions) {
            Object.assign(glossary, this.currentContent.keyDefinitions);
        }

        if (this.currentContent.terrestrialBiomes) {
            this.currentContent.terrestrialBiomes.forEach(biome => {
                glossary[biome.name] = biome.climate ? 
                    `${biome.climate.temperature}; ${biome.climate.precipitation}` : 
                    biome.description;
            });
        }

        if (this.currentContent.trophicLevels) {
            this.currentContent.trophicLevels.forEach(level => {
                glossary[level.level] = level.description;
            });
        }

        if (this.currentContent.typesOfSymbiosis) {
            this.currentContent.typesOfSymbiosis.forEach(symbiosis => {
                glossary[symbiosis.name] = symbiosis.definition;
            });
        }

        return glossary;
    }

    // PROCESS TIMELINE GENERATION

    generateProcessTimeline(processName) {
        const timelines = {
            'Primary Succession': [
                { stage: 'Bare substrate', duration: 'Initial state', events: 'No life present' },
                { stage: 'Pioneer species', duration: 'Decades to centuries', events: 'Lichens and mosses colonize, begin soil formation' },
                { stage: 'Early plants', duration: 'Years to decades', events: 'Grasses and small plants establish' },
                { stage: 'Shrubs and small trees', duration: 'Decades', events: 'Woody plants establish' },
                { stage: 'Climax community', duration: 'Centuries+', events: 'Mature forest or other stable community' }
            ],
            'Secondary Succession': [
                { stage: 'Disturbance', duration: 'Event', events: 'Fire, logging, or other disturbance' },
                { stage: 'Annual weeds', duration: 'First year', events: 'Fast-growing annuals colonize' },
                { stage: 'Perennial plants', duration: '1-3 years', events: 'Longer-lived plants establish' },
                { stage: 'Shrubs and young trees', duration: '5-15 years', events: 'Woody growth begins' },
                { stage: 'Young forest', duration: '15-50 years', events: 'Fast-growing trees dominate' },
                { stage: 'Mature forest', duration: '150+ years', events: 'Shade-tolerant species establish climax' }
            ],
            'Carbon Cycle': [
                { process: 'Photosynthesis', timescale: 'Hours', description: 'CO₂ → glucose in plants' },
                { process: 'Respiration', timescale: 'Continuous', description: 'Glucose → CO₂ in organisms' },
                { process: 'Decomposition', timescale: 'Weeks to years', description: 'Dead matter → CO₂' },
                { process: 'Fossilization', timescale: 'Millions of years', description: 'Organic matter → fossil fuels' },
                { process: 'Combustion', timescale: 'Rapid', description: 'Burning releases CO₂' }
            ],
            'Nitrogen Cycle': [
                { process: 'Nitrogen fixation', timescale: 'Continuous', description: 'N₂ → NH₃ by bacteria' },
                { process: 'Nitrification', timescale: 'Days to weeks', description: 'NH₃ → NO₃⁻ by bacteria' },
                { process: 'Assimilation', timescale: 'Continuous', description: 'Plants absorb nitrate' },
                { process: 'Ammonification', timescale: 'Weeks to months', description: 'Organic N → NH₃' },
                { process: 'Denitrification', timescale: 'Continuous', description: 'NO₃⁻ → N₂ by bacteria' }
            ],
            'Population Growth': [
                { phase: 'Lag phase', duration: 'Initial period', characteristics: 'Slow growth, population establishing' },
                { phase: 'Exponential phase', duration: 'Variable', characteristics: 'Rapid growth, J-curve' },
                { phase: 'Deceleration', duration: 'Transitional', characteristics: 'Growth slowing as K approaches' },
                { phase: 'Equilibrium', duration: 'Sustained', characteristics: 'Population stabilizes at K' }
            ]
        };

        return timelines[processName] || [];
    }

    // CONTENT HIERARCHY VISUALIZATION

    generateContentHierarchy() {
        if (!this.currentContent) return null;

        const hierarchy = {
            root: this.currentContent.topic,
            children: []
        };

        if (this.currentContent.components) {
            hierarchy.children.push({
                name: 'Components',
                type: 'section',
                children: [
                    { name: 'Biotic Factors', type: 'category' },
                    { name: 'Abiotic Factors', type: 'category' }
                ]
            });
        }

        if (this.currentContent.trophicLevels) {
            hierarchy.children.push({
                name: 'Trophic Levels',
                type: 'section',
                count: this.currentContent.trophicLevels.length
            });
        }

        if (this.currentContent.terrestrialBiomes) {
            hierarchy.children.push({
                name: 'Biomes',
                type: 'section',
                count: this.currentContent.terrestrialBiomes.length,
                children: this.currentContent.terrestrialBiomes.map(b => ({
                    name: b.name,
                    type: 'biome'
                }))
            });
        }

        if (this.currentContent.typesOfSymbiosis) {
            hierarchy.children.push({
                name: 'Symbiosis Types',
                type: 'section',
                count: this.currentContent.typesOfSymbiosis.length
            });
        }

        return hierarchy;
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

        if (content.definition) {
            markdown += `**Definition:** ${content.definition}\n\n`;
        }

        if (content.terrestrialBiomes) {
            markdown += `## Terrestrial Biomes\n\n`;
            content.terrestrialBiomes.forEach(biome => {
                markdown += `### ${biome.name}\n`;
                markdown += `**Location:** ${biome.location}\n\n`;
                if (biome.climate) {
                    markdown += `**Climate:**\n`;
                    markdown += `- Temperature: ${biome.climate.temperature}\n`;
                    markdown += `- Precipitation: ${biome.climate.precipitation}\n`;
                }
                markdown += `\n`;
            });
        }

        if (content.examples) {
            markdown += `## Examples\n\n`;
            content.examples.forEach(example => {
                if (typeof example === 'string') {
                    markdown += `- ${example}\n`;
                } else {
                    markdown += `- ${example.name || example.ecosystem || 'Example'}\n`;
                }
            });
        }

        return markdown;
    }

convertToHTML(content) {
        let html = `<div class="ecology-content">\n`;
        html += `  <h1>${content.topic}</h1>\n`;

        if (content.definition) {
            html += `  <p class="definition"><strong>Definition:</strong> ${content.definition}</p>\n`;
        }

        if (content.terrestrialBiomes) {
            html += `  <section class="biomes">\n`;
            html += `    <h2>Terrestrial Biomes</h2>\n`;
            content.terrestrialBiomes.forEach(biome => {
                html += `    <article>\n`;
                html += `      <h3>${biome.name}</h3>\n`;
                html += `      <p><strong>Location:</strong> ${biome.location}</p>\n`;
                if (biome.climate) {
                    html += `      <p><strong>Climate:</strong> ${biome.climate.temperature}; ${biome.climate.precipitation}</p>\n`;
                }
                html += `    </article>\n`;
            });
            html += `  </section>\n`;
        }

        if (content.examples) {
            html += `  <section class="examples">\n`;
            html += `    <h2>Examples</h2>\n`;
            html += `    <ul>\n`;
            content.examples.forEach(example => {
                if (typeof example === 'string') {
                    html += `      <li>${example}</li>\n`;
                } else {
                    html += `      <li>${example.name || example.ecosystem || 'Example'}</li>\n`;
                }
            });
            html += `    </ul>\n`;
            html += `  </section>\n`;
        }

        html += `</div>`;
        return html;
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

    getAvailableTopics() {
        return Object.entries(this.ecologyTopics).map(([key, topic]) => ({
            id: key,
            name: topic.name,
            category: topic.category,
            description: topic.description
        }));
    }

    getTopicDetails(topicId) {
        const topic = this.ecologyTopics[topicId];
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
}

// Export the class
export default EnhancedEcologyBiologyWorkbook;
