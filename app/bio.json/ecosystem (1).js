//Enhanced Ecosystem Biology Workbook - Comprehensive Ecological Systems
import { createCanvas, loadImage } from '@napi-rs/canvas';
import { BiologySvgDiagrams } from '../svg-data.js';
import { BiologyDiagramsRegistry} from '../registry.js';
import { BiologyDiagramsRenderer } from '../renderer.js';
import * as math from 'mathjs';

export class EnhancedEcosystemBiologyWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "ecosystem";
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
        this.renderedDiagrams = new Map();
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

        this.ecosystemSymbols = this.initializeEcosystemSymbols();
        this.setThemeColors();
        this.initializeEcosystemTopics();
        this.initializeEcosystemLessons();
        this.initializeEcosystemExperiments();
        this.initializeMisconceptionDatabase();
        this.initializeMetacognitivePrompts();
        this.initializeContextualScenarios();
        this.initializeAssessmentRubrics();
    }

    setThemeColors() {
        const themes = {
            ecosystem: {
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
                stepBg: '#e3f2fd',
                stepText: '#0d47a1',
                borderColor: '#66bb6a',
                contentBg: '#f1f8e9',
                contentText: '#33691e',
                diagramBg: '#e0f2f1',
                structureBg: '#fce4ec',
                experimentBg: '#fff9c4',
                experimentText: '#f57f17',
                energyBg: '#ffebee',
                nutrientBg: '#e8eaf6',
                populationBg: '#e1f5fe',
                communityBg: '#f3e5f5',
                biodiversityBg: '#fff8e1',
                conservationBg: '#e0f7fa'
            },
            ecology: {
                background: '#fafafa',
                gridColor: '#9e9e9e',
                headerBg: '#00695c',
                headerText: '#ffffff',
                sectionBg: '#b2dfdb',
                sectionText: '#004d40',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#e0f2f1',
                resultText: '#00695c',
                definitionBg: '#fff8e1',
                definitionText: '#f57f17',
                stepBg: '#f1f8e9',
                stepText: '#33691e',
                borderColor: '#26a69a',
                contentBg: '#ede7f6',
                contentText: '#4a148c',
                diagramBg: '#fce4ec',
                structureBg: '#e8eaf6',
                experimentBg: '#fffde7',
                experimentText: '#f57f17',
                energyBg: '#ffebee',
                nutrientBg: '#e8eaf6',
                populationBg: '#e1f5fe',
                communityBg: '#f3e5f5',
                biodiversityBg: '#fff8e1',
                conservationBg: '#e0f7fa'
            }
        };

        this.colors = themes[this.theme] || themes.ecosystem;
    }

    initializeEcosystemSymbols() {
        return {
            // Greek letters
            'alpha': 'α',
            'beta': 'β',
            'gamma': 'γ',
            'delta': 'Δ',
            'lambda': 'λ',
            'mu': 'μ',
            'pi': 'π',
            
            // Arrows
            'arrow': '→',
            'reversible': '⇌',
            'doubleArrow': '↔',
            'upArrow': '↑',
            'downArrow': '↓',
            
            // Math symbols
            'plus': '+',
            'minus': '−',
            'plusminus': '±',
            'approximately': '≈',
            'proportional': '∝',
            'infinity': '∞',
            'degree': '°',
            'percent': '%',
            'perMille': '‰',
            
            // Ecological symbols
            'sun': '☀',
            'plant': '🌱',
            'tree': '🌳',
            'animal': '🦌',
            'predator': '🦁',
            'decomposer': '🍄',
            'bacteria': '🦠',
            
            // Chemical formulas relevant to ecosystems
            'H2O': 'H₂O',
            'CO2': 'CO₂',
            'O2': 'O₂',
            'N2': 'N₂',
            'NH3': 'NH₃',
            'NO3-': 'NO₃⁻',
            'NH4+': 'NH₄⁺',
            'CH4': 'CH₄',
            'H2S': 'H₂S',
            'PO4': 'PO₄³⁻',
            
            // Units
            'squared': '²',
            'cubed': '³',
            'perSquareMeter': '/m²',
            'kJperMeterSquared': 'kJ/m²',
            'gramsPerMeterSquared': 'g/m²'
        };
    }

    initializeEcosystemTopics() {
        this.ecosystemTopics = {
            energy_flow: {
                patterns: [
                    /energy.*flow|trophic|food.*chain|food.*web/i,
                    /producer|consumer|decomposer/i,
                    /pyramid.*energy|biomass.*pyramid/i,
                    /photosynthesis.*ecosystem|primary.*production/i,
                    /10.*percent.*rule|ecological.*efficiency/i
                ],
                handler: this.handleEnergyFlow.bind(this),
                name: 'Energy Flow in Ecosystems',
                category: 'ecosystem_function',
                description: 'Transfer of energy through trophic levels and ecological efficiency',
                difficulty: 'intermediate',
                prerequisites: ['photosynthesis', 'cellular_respiration', 'basic_ecology']
            },
            
            nutrient_cycling: {
                patterns: [
                    /nutrient.*cycl|biogeochemical/i,
                    /carbon.*cycle|nitrogen.*cycle|phosphorus.*cycle|water.*cycle/i,
                    /decomposition|mineralization/i,
                    /fixation|denitrification|nitrification/i
                ],
                handler: this.handleNutrientCycling.bind(this),
                name: 'Nutrient Cycling and Biogeochemical Cycles',
                category: 'ecosystem_function',
                description: 'Movement of essential elements through living and non-living components',
                difficulty: 'advanced',
                prerequisites: ['chemistry_basics', 'microbiology', 'plant_biology']
            },
            
            population_ecology: {
                patterns: [
                    /population.*growth|logistic.*growth|exponential.*growth/i,
                    /carrying.*capacity|limiting.*factor/i,
                    /density.*dependent|density.*independent/i,
                    /birth.*rate|death.*rate|immigration|emigration/i,
                    /population.*size|population.*density/i
                ],
                handler: this.handlePopulationEcology.bind(this),
                name: 'Population Ecology and Dynamics',
                category: 'population_ecology',
                description: 'Study of population size, growth, and regulation',
                difficulty: 'intermediate',
                prerequisites: ['statistics', 'basic_ecology', 'mathematics']
            },
            
            community_ecology: {
                patterns: [
                    /community|species.*interaction/i,
                    /competition|predation|mutualism|commensalism|parasitism/i,
                    /symbiosis|coevolution/i,
                    /ecological.*niche|habitat/i,
                    /succession|climax.*community/i
                ],
                handler: this.handleCommunityEcology.bind(this),
                name: 'Community Ecology and Species Interactions',
                category: 'community_ecology',
                description: 'Interactions between species and community structure',
                difficulty: 'advanced',
                prerequisites: ['population_ecology', 'evolution', 'behavior']
            },
            
            biodiversity: {
                patterns: [
                    /biodiversity|species.*diversity|genetic.*diversity/i,
                    /species.*richness|species.*evenness/i,
                    /alpha.*diversity|beta.*diversity|gamma.*diversity/i,
                    /shannon.*index|simpson.*index/i,
                    /endemism|hotspot/i
                ],
                handler: this.handleBiodiversity.bind(this),
                name: 'Biodiversity and Ecosystem Health',
                category: 'biodiversity',
                description: 'Measurement and importance of biological diversity',
                difficulty: 'intermediate',
                prerequisites: ['taxonomy', 'statistics', 'community_ecology']
            },
            
            ecosystem_services: {
                patterns: [
                    /ecosystem.*service|natural.*capital/i,
                    /provisioning|regulating|cultural.*service|supporting.*service/i,
                    /pollination|water.*purification|climate.*regulation/i,
                    /human.*impact|anthropogenic/i
                ],
                handler: this.handleEcosystemServices.bind(this),
                name: 'Ecosystem Services and Human Wellbeing',
                category: 'applied_ecology',
                description: 'Benefits humans derive from ecosystems',
                difficulty: 'intermediate',
                prerequisites: ['basic_ecology', 'environmental_science']
            }
        };
    }

    initializeEcosystemLessons() {
        this.lessons = {
            energy_flow: {
                title: "Energy Flow in Ecosystems: From Sun to Decomposers",
                concepts: [
                    "Energy flows unidirectionally through ecosystems (sun → producers → consumers → decomposers → heat)",
                    "Only ~1-10% of energy transfers between trophic levels (10% rule)",
                    "Primary producers capture solar energy through photosynthesis",
                    "Energy pyramids show decreasing energy at higher trophic levels",
                    "Food webs are more realistic than linear food chains",
                    "Decomposers recycle nutrients but energy is lost as heat"
                ],
                theory: "Energy flow is the movement of energy through an ecosystem. Unlike nutrients which cycle, energy flows in one direction: from the sun through living organisms and is eventually lost as heat. This unidirectional flow shapes ecosystem structure and determines how many trophic levels can be supported.",
                keyDefinitions: {
                    "Trophic Level": "Position an organism occupies in a food chain (producer, primary consumer, secondary consumer, etc.)",
                    "Primary Producers": "Autotrophs (mostly plants) that capture solar energy through photosynthesis; form base of food chain",
                    "Primary Consumers": "Herbivores that eat producers",
                    "Secondary Consumers": "Carnivores that eat herbivores",
                    "Tertiary Consumers": "Carnivores that eat other carnivores; top predators",
                    "Decomposers": "Organisms (bacteria, fungi) that break down dead organic matter, recycling nutrients",
                    "Detritivores": "Organisms that feed on dead organic matter (earthworms, millipedes, vultures)",
                    "Gross Primary Production (GPP)": "Total rate of photosynthesis (energy captured by producers)",
                    "Net Primary Production (NPP)": "GPP minus respiration by producers; energy available to consumers (NPP = GPP - R)",
                    "Ecological Efficiency": "Percentage of energy transferred from one trophic level to the next (~10%)",
                    "Biomass": "Total mass of living organisms at a trophic level"
                },
                energyFlowPrinciples: {
                    firstLaw: {
                        principle: "First Law of Thermodynamics: Energy cannot be created or destroyed",
                        application: "Total energy in ecosystem remains constant, but changes form",
                        example: "Solar energy → chemical energy (glucose) → kinetic energy (movement) → heat"
                    },
                    secondLaw: {
                        principle: "Second Law of Thermodynamics: Energy conversions are inefficient",
                        application: "Each energy transfer loses energy as heat (entropy increases)",
                        consequence: "Limits number of trophic levels (usually 4-5 maximum)",
                        example: "Plant uses only ~1-2% of solar energy for photosynthesis; rest reflected or dissipated as heat"
                    },
                    tenPercentRule: {
                        rule: "Only ~10% of energy transfers to next trophic level",
                        range: "Actually 5-20%, but 10% is average",
                        reasons: [
                            "Not all biomass is consumed (inedible parts)",
                            "Not all consumed food is digested (passes as waste)",
                            "Much energy lost as heat during metabolism",
                            "Energy used for movement, reproduction, maintenance"
                        ],
                        calculation: "If plants capture 10,000 kJ, herbivores get ~1,000 kJ, carnivores get ~100 kJ"
                    }
                },
                trophicLevels: {
                    level1_producers: {
                        organisms: "Plants, algae, phytoplankton, cyanobacteria, some bacteria",
                        energySource: "Sunlight (photosynthesis) or chemicals (chemosynthesis)",
                        role: "Convert solar/chemical energy to chemical energy (glucose)",
                        efficiency: "~1-2% of solar energy captured",
                        grossPrimaryProduction: "Total photosynthesis rate",
                        netPrimaryProduction: "GPP - plant respiration = energy available to herbivores",
                        examples: "Grasses, trees, phytoplankton, kelp"
                    },
                    level2_primaryConsumers: {
                        organisms: "Herbivores",
                        energySource: "Eat producers",
                        role: "Transfer energy from plants to carnivores",
                        efficiency: "~10% of plant energy obtained",
                        examples: "Grasshoppers, deer, rabbits, zooplankton, caterpillars, cows"
                    },
                    level3_secondaryConsumers: {
                        organisms: "Carnivores that eat herbivores",
                        energySource: "Eat primary consumers",
                        role: "Regulate herbivore populations",
                        efficiency: "~10% of herbivore energy obtained",
                        examples: "Frogs, small fish, spiders, snakes, foxes"
                    },
                    level4_tertiaryConsumers: {
                        organisms: "Carnivores that eat other carnivores",
                        energySource: "Eat secondary consumers",
                        role: "Top predators, regulate entire food web",
                        efficiency: "~10% of secondary consumer energy",
                        examples: "Hawks, eagles, sharks, lions, orcas",
                        note: "Usually few in number due to energy limitation"
                    },
                    decomposers: {
                        organisms: "Bacteria, fungi, some protists and invertebrates",
                        energySource: "Dead organic matter at all trophic levels",
                        role: "Recycle nutrients back to soil/water; close nutrient cycles",
                        special: "Obtain energy from all levels, essential for nutrient cycling",
                        examples: "Bacteria, mushrooms, earthworms, dung beetles"
                    }
                },
                ecologicalPyramids: {
                    pyramidOfEnergy: {
                        description: "Shows energy flow through trophic levels",
                        shape: "Always upright pyramid (decreasing energy upward)",
                        units: "kJ/m²/year or kcal/m²/year",
                        example: "Producers: 10,000 → Primary: 1,000 → Secondary: 100 → Tertiary: 10 kJ/m²/year",
                        significance: "Explains why top predators are rare"
                    },
                    pyramidOfBiomass: {
                        description: "Shows total biomass at each level",
                        shape: "Usually upright, but can be inverted in aquatic systems",
                        units: "g/m² or kg/m²",
                        invertedExample: "Ocean: phytoplankton reproduce rapidly, small biomass supports large zooplankton biomass at any given time",
                        uprightExample: "Grassland: large plant biomass supports smaller herbivore biomass"
                    },
                    pyramidOfNumbers: {
                        description: "Shows number of individuals at each level",
                        shape: "Variable (can be upright, inverted, or irregular)",
                        limitation: "Doesn't account for size differences",
                        example: "One tree (producer) can support thousands of insects (primary consumers)"
                    }
                },
                foodChainsVsFoodWebs: {
                    foodChain: {
                        definition: "Linear sequence of who eats whom",
                        example: "Grass → Grasshopper → Frog → Snake → Hawk",
                        limitation: "Oversimplified; real ecosystems are complex",
                        types: {
                            grazing: "Living plants as base (grass → cow → human)",
                            detrital: "Dead organic matter as base (dead leaves → earthworm → bird)"
                        }
                    },
                    foodWeb: {
                        definition: "Interconnected food chains showing multiple feeding relationships",
                        reality: "Most organisms eat multiple food sources and are eaten by multiple predators",
                        complexity: "Shows omnivores, connections between chains",
                        stability: "More connections = more stable (if one species declines, alternatives exist)",
                        keystone: "Some species have disproportionate impact on web structure"
                    }
                },
                energyBudget: {
                    inputOutput: {
                        solarInput: "Total solar radiation reaching ecosystem",
                        reflected: "~30% reflected by atmosphere/surface",
                        absorbed: "~70% absorbed, warms Earth",
                        photosynthesis: "Only ~1-2% used in photosynthesis",
                        heat: "Eventually all energy lost as heat (respiration, decomposition)"
                    },
                    productivityMeasures: {
                        GPP: "Gross Primary Production = total photosynthesis",
                        NPP: "Net Primary Production = GPP - plant respiration",
                        secondaryProduction: "Consumer growth and reproduction (new consumer biomass)",
                        comparison: "NPP typically 40-80% of GPP (rest used in plant respiration)"
                    }
                },
                ecosystemComparison: {
                    terrestrial: {
                        highProductivity: "Tropical rainforests, wetlands (~2,000-2,500 g C/m²/year)",
                        moderateProductivity: "Temperate forests, grasslands (~600-1,200 g C/m²/year)",
                        lowProductivity: "Deserts, tundra (~100-200 g C/m²/year)",
                        limitingFactors: "Water, temperature, nutrients"
                    },
                    aquatic: {
                        highProductivity: "Estuaries, coral reefs (~1,000-2,500 g C/m²/year)",
                        moderateProductivity: "Coastal waters (~200-600 g C/m²/year)",
                        lowProductivity: "Open ocean (~100-150 g C/m²/year)",
                        limitingFactors: "Light penetration, nutrient availability"
                    }
                },
                applications: [
                    "Sustainable fisheries management (understanding trophic levels)",
                    "Agriculture and crop yield optimization",
                    "Conservation biology (protecting keystone species)",
                    "Climate change mitigation (carbon sequestration by forests)",
                    "Ecosystem restoration and rewilding",
                    "Understanding impacts of removing top predators"
                ]
            },

            nutrient_cycling: {
                title: "Nutrient Cycling: Biogeochemical Pathways Through Ecosystems",
                concepts: [
                    "Nutrients cycle through living organisms (biotic) and environment (abiotic)",
                    "Carbon, nitrogen, phosphorus, water are essential nutrient cycles",
                    "Microorganisms play critical roles in nutrient transformations",
                    "Human activities disrupt natural nutrient cycles",
                    "Nutrients are reused; energy flows one-way and is lost as heat"
                ],
                theory: "Biogeochemical cycles describe the movement of chemical elements between living organisms and the physical environment. Unlike energy which flows through ecosystems and is lost as heat, nutrients are recycled and reused. Understanding these cycles is essential for addressing environmental issues like climate change, eutrophication, and soil depletion.",
                keyDefinitions: {
                    "Biogeochemical Cycle": "Movement of chemical elements through biological (living) and geological (non-living) components of ecosystems",
                    "Reservoir": "Major storage location for an element (atmosphere, ocean, soil, organisms)",
                    "Flux": "Rate of movement between reservoirs",
                    "Residence Time": "Average time an element spends in a reservoir",
                    "Fixation": "Conversion of element from unusable to biologically available form",
                    "Mineralization": "Conversion of organic matter to inorganic nutrients (by decomposers)",
                    "Assimilation": "Uptake and incorporation of nutrients by organisms",
                    "Volatilization": "Conversion to gaseous form",
                    "Limiting Nutrient": "Nutrient in shortest supply relative to demand; limits productivity"
                },
                carbonCycle: {
                    importance: "Carbon is backbone of all organic molecules; major greenhouse gas as CO₂",
                    reservoirs: {
                        atmosphere: "CO₂ (~850 Gt C), fastest exchange",
                        terrestrialBiosphere: "Plants and soil (~2,000-3,000 Gt C)",
                        ocean: "Dissolved CO₂, bicarbonate (~38,000 Gt C), largest reservoir",
                        fossilFuels: "Coal, oil, natural gas (~4,000 Gt C)",
                        sedimentaryRocks: "Limestone, carbonate rocks (largest, ~65,500,000 Gt C, slow exchange)"
                    },
                    processes: {
                        photosynthesis: {
                            reaction: "6 CO₂ + 6 H₂O + light → C₆H₁₂O₆ + 6 O₂",
                            role: "Removes CO₂ from atmosphere, fixes carbon into organic molecules",
                            rate: "~120 Gt C/year (terrestrial + ocean)",
                            organisms: "Plants, algae, cyanobacteria"
                        },
                        cellularRespiration: {
                            reaction: "C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + energy (ATP)",
                            role: "Returns CO₂ to atmosphere",
                            rate: "~120 Gt C/year (balances photosynthesis naturally)",
                            organisms: "All aerobic organisms"
                        },
                        decomposition: {
                            process: "Breakdown of dead organic matter by bacteria and fungi",
                            result: "Releases CO₂ and nutrients back to environment",
                            rate: "Faster in warm, moist conditions; slower in cold or dry"
                        },
                        combustion: {
                            natural: "Forest fires, volcanic eruptions",
                            anthropogenic: "Burning fossil fuels, deforestation",
                            impact: "Adds ~9-10 Gt C/year to atmosphere (human activities)",
                            consequence: "Increases atmospheric CO₂, drives climate change"
                        },
                        oceanExchange: {
                            dissolution: "CO₂ dissolves in ocean water, forms carbonic acid (H₂CO₃)",
                            buffering: "Ocean absorbs ~25-30% of human CO₂ emissions",
                            acidification: "Increased CO₂ lowers pH, harms coral reefs and shellfish",
                            biologicalPump: "Phytoplankton photosynthesis, shells sink to deep ocean"
                        }
                    },
                    humanImpact: {
                        fossilFuelBurning: "Releases ancient carbon, increases atmospheric CO₂",
                        deforestation: "Reduces carbon sink (trees), releases stored carbon",
                        landUseChange: "Agriculture, urbanization alter carbon storage",
                        consequences: "Global warming, climate change, ocean acidification"
                    }
                },
                nitrogenCycle: {
                    importance: "Nitrogen is essential for proteins, nucleic acids; most abundant gas in atmosphere (78% N₂) but unusable by most organisms",
                    reservoirs: {
                        atmosphere: "N₂ gas (~3.9 × 10⁶ Gt N), largest reservoir",
                        soil: "Organic nitrogen, NH₄⁺, NO₃⁻ (~140 Gt N)",
                        livingOrganisms: "Proteins, DNA, RNA (~3.5 Gt N)",
                        ocean: "Dissolved nitrogen (~22,000 Gt N)"
                    },
                    processes: {
                        nitrogenFixation: {
                            definition: "Conversion of atmospheric N₂ to ammonia (NH₃)",
                            biological: {
                                organisms: "Nitrogen-fixing bacteria (Rhizobium, Azotobacter, Cyanobacteria)",
                                reaction: "N₂ + 8 H⁺ + 8 e⁻ + 16 ATP → 2 NH₃ + H₂ + 16 ADP + 16 Pi",
                                enzyme: "Nitrogenase (oxygen-sensitive)",
                                symbiosis: "Rhizobium in legume root nodules (peas, beans, clover)",
                                rate: "~200-300 Tg N/year globally (natural + crops)"
                            },
                            industrial: {
                                process: "Haber-Bosch process for fertilizer production",
                                reaction: "N₂ + 3 H₂ → 2 NH₃ (high pressure, temperature, catalyst)",
                                rate: "~150 Tg N/year (now exceeds natural fixation)",
                                impact: "Transformed agriculture; also causes pollution"
                            },
                            atmospheric: {
                                process: "Lightning provides energy to break N≡N bond",
                                rate: "~10 Tg N/year (minor compared to biological)"
                            }
                        },
                        nitrification: {
                            definition: "Oxidation of ammonia to nitrite then nitrate",
                            step1_ammoniaToNitrite: {
                                reaction: "NH₄⁺ + 1.5 O₂ → NO₂⁻ + 2 H⁺ + H₂O",
                                organisms: "Nitrosomonas (ammonia-oxidizing bacteria)"
                            },
                            step2_nitriteToNitrate: {
                                reaction: "NO₂⁻ + 0.5 O₂ → NO₃⁻",
                                organisms: "Nitrobacter (nitrite-oxidizing bacteria)"
                            },
                            overall: "NH₄⁺ → NO₂⁻ → NO₃⁻ (aerobic process)",
                            significance: "NO₃⁻ is highly mobile in soil, easily absorbed by plants"
                        },
                        assimilation: {
                            plants: "Absorb NO₃⁻ or NH₄⁺ from soil, incorporate into amino acids and nucleotides",
                            animals: "Obtain organic nitrogen by eating plants or other animals"
                        },
                        ammonification: {
                            definition: "Decomposition of organic nitrogen to ammonia",
                            process: "Bacteria and fungi break down proteins, nucleic acids → NH₃/NH₄⁺",
                            organisms: "Decomposers",
                            significance: "Recycles nitrogen from dead organisms and waste"
                        },
                        denitrification: {
                            definition: "Conversion of nitrate (NO₃⁻) back to N₂ gas",
                            reaction: "NO₃⁻ → NO₂⁻ → NO → N₂O → N₂",
                            organisms: "Denitrifying bacteria (Pseudomonas, Clostridium)",
                            conditions: "Anaerobic (no oxygen), such as waterlogged soil",
                            significance: "Returns N₂ to atmosphere, completes cycle",
                            concern: "N₂O is potent greenhouse gas (intermediate product)"
                        }
                    },
                    humanImpact: {
                        fertilizers: "Excess NO₃⁻ runs off into water → eutrophication",
                        fossilFuelCombustion: "Produces NOₓ → acid rain, smog",
                        landClearing: "Reduces nitrogen storage in vegetation",
                        consequences: "Algal blooms, dead zones, air pollution, climate change"
                    }
                },
                phosphorusCycle: {
                    importance: "Essential for DNA, RNA, ATP, phospholipids; often limiting nutrient",
                    reservoirs: {
                        rock: "Phosphate minerals (apatite), largest reservoir",
                        soil: "Phosphate ions (PO₄³⁻), organic phosphorus",
                        livingOrganisms: "DNA, RNA, ATP, bones, teeth",
                        ocean: "Dissolved phosphate, sediments"
                    },
                    uniqueFeatures: {
                        noGaseousPhase: "Phosphorus cycle lacks atmospheric component (unlike C, N, O)",
                        slowCycle: "Very slow release from rocks (geological timescale)",
                        limitingNutrient: "Often limits productivity in aquatic ecosystems"
                    },
                    processes: {
                        weathering: {
                            process: "Rocks erode, release PO₄³⁻ into soil and water",
                            rate: "Very slow (millions of years)",
                            factors: "Rainfall, temperature, biological activity accelerate"
                        },
                        absorption: {
                            plants: "Absorb PO₄³⁻ from soil through roots",
                            incorporation: "Used to make ATP, nucleic acids, phospholipids"
                        },
                        consumption: {
                            animals: "Obtain phosphorus by eating plants or other animals"
                        },
                        decomposition: {
                            process: "Decomposers break down organic matter, release PO₄³⁻ back to soil",
                            cycling: "Relatively rapid recycling in ecosystems"
                        },
                        sedimentation: {
                            process: "PO₄³⁻ washes into ocean, precipitates into sediments",
                            uplift: "Geological uplift can bring sedimentary rocks back to surface (millions of years)",
                            loss: "Significant loss from terrestrial ecosystems to ocean"
                        }
                    },
                    humanImpact: {
                        mining: "Extract phosphate rock for fertilizer (finite resource)",
                        fertilizers: "Runoff causes eutrophication in lakes and coastal waters",
                        detergents: "Historically major source (now regulated in many countries)",
                        wastewater: "Human and animal waste contains phosphorus",
                        consequences: "Algal blooms, oxygen depletion, fish kills"
                    }
                },
                waterCycle: {
                    importance: "Essential for all life; medium for biochemical reactions; regulates temperature",
                    reservoirs: {
                        ocean: "~97% of Earth's water (salt water)",
                        iceCaps: "~2% (glaciers, polar ice)",
                        groundwater: "~0.6%",
                        freshwaterLakes: "~0.009%",
                        atmosphere: "~0.001% (but rapid turnover)"
                    },
                    processes: {
                        evaporation: {
                            process: "Liquid water → water vapor (requires energy from sun)",
                            location: "Primarily from ocean, also lakes, rivers, soil",
                            rate: "~500,000 km³/year from ocean"
                        },
                        transpiration: {
                            process: "Water vapor released by plants through stomata",
                            significance: "Returns water to atmosphere; cools plants",
                            rate: "~40,000 km³/year from land plants"
                        },
                        evapotranspiration: {
                            combined: "Evaporation + Transpiration",
                            importance: "Major pathway for water returning to atmosphere from land"
                        },
                        condensation: {
                            process: "Water vapor → liquid water (forms clouds)",
                            mechanism: "Cooling of air, reaches dew point"
                        },
                        precipitation: {
                            process: "Water falls as rain, snow, sleet, hail",
                            rate: "~500,000 km³/year globally"
                        },
                        infiltration: {
                            process: "Water soaks into soil",
                            outcome: "Becomes groundwater, or taken up by plant roots"
                        },
                        runoff: {
                            process: "Water flows over land surface into streams, rivers, lakes, ocean",
                            rate: "~40,000 km³/year from land to ocean"
                        }
                    },
                    humanImpact: {
                        damming: "Alters natural flow, evaporation rates",
                        irrigation: "Depletes groundwater, changes local hydrology",
                        urbanization: "Increases runoff (impervious surfaces), reduces infiltration",
                        deforestation: "Reduces transpiration, increases runoff and erosion",
                        climateChange: "Alters precipitation patterns, increases extreme weather"
                    }
                },
                comparisonOfCycles: {
                    gaseous: {
                        cycles: "Carbon, Nitrogen, Oxygen, Water",
                        characteristic: "Significant atmospheric reservoir, relatively rapid exchange",
                        timescale: "Days to years for biological component"
                    },
                    sedimentary: {
                        cycles: "Phosphorus, Sulfur, Calcium",
                        characteristic: "No or limited atmospheric component, rock reservoir dominant",
                        timescale: "Millions of years for geological component",
                        vulnerability: "Easier to disrupt; lost phosphorus not easily replaced"
                    }
                },
                applications: [
                    "Sustainable agriculture (nutrient management, cover crops, crop rotation)",
                    "Wastewater treatment (remove excess N and P)",
                    "Climate change mitigation (carbon sequestration in forests and soils)",
                    "Restoration ecology (reestablish nutrient cycling in degraded ecosystems)",
                    "Understanding eutrophication and dead zones",
                    "Predicting impacts of land use change"
                ]
            },

            population_ecology: {
                title: "Population Ecology: Growth, Regulation, and Dynamics",
                concepts: [
                    "Population size changes through births, deaths, immigration, and emigration",
                    "Exponential growth occurs when resources are unlimited (J-shaped curve)",
                    "Logistic growth occurs when populations approach carrying capacity (S-shaped curve)",
                    "Density-dependent factors regulate populations near carrying capacity",
                    "Density-independent factors affect populations regardless of size",
                    "Life history strategies reflect trade-offs between reproduction and survival"
                ],
                theory: "Population ecology studies the dynamics of species populations and how they interact with their environment. Understanding population growth and regulation is essential for conservation, pest management, fisheries, and predicting responses to environmental change.",
                keyDefinitions: {
                    "Population": "Group of individuals of the same species living in the same area at the same time",
                    "Population Size (N)": "Total number of individuals in a population",
                    "Population Density": "Number of individuals per unit area or volume",
                    "Population Distribution": "Spatial arrangement of individuals (clumped, uniform, random)",
                    "Birth Rate (b)": "Number of births per individual per unit time",
                    "Death Rate (d)": "Number of deaths per individual per unit time",
                    "Immigration": "Individuals moving into a population",
                    "Emigration": "Individuals leaving a population",
                    "Growth Rate (r)": "Per capita rate of population increase (r = b - d)",
                    "Carrying Capacity (K)": "Maximum population size that environment can sustain indefinitely",
                    "Limiting Factor": "Resource or environmental condition that limits population growth"
                },
                populationGrowthModels: {
                    exponentialGrowth: {
                        characteristics: "Unlimited resources, constant growth rate, J-shaped curve",
                        equation: "dN/dt = rN (or Nₜ = N₀e^(rt))",
                        where: "N = population size, t = time, r = intrinsic growth rate",
                        conditions: "Ideal conditions, no resource limitation",
                        examples: "Bacteria in fresh culture, invasive species colonizing new habitat, early stage of colonization",
                        realWorld: "Rarely sustained for long; eventually resources become limited",
                        doubling_time: "td = ln(2)/r = 0.693/r"
                    },
                    logisticGrowth: {
                        characteristics: "Resources limited, growth slows near carrying capacity, S-shaped curve",
                        equation: "dN/dt = rN((K - N)/K)",
                        where: "K = carrying capacity",
                        phases: {
                            lag: "Slow initial growth (small population, getting established)",
                            exponential: "Rapid growth (resources abundant, population increasing)",
                            deceleration: "Growth rate slows (resources becoming limited, competition increases)",
                            plateau: "Growth stops (N ≈ K, births ≈ deaths)"
                        },
                        carryingCapacity: "Population oscillates around K due to environmental fluctuations",
                        examples: "Most natural populations over long term",
                        realWorld: "More realistic than exponential; populations rarely exceed K for long"
                    },
                    comparison: {
                        exponential: "r constant, no limit",
                        logistic: "r decreases as N approaches K, has upper limit",
                        shape: "J-curve vs S-curve"
                    }
                },
                regulatingFactors: {
                    densityDependent: {
                        definition: "Factors whose effects increase with population density",
                        mechanism: "Regulate populations near carrying capacity through negative feedback",
                        factors: [
                            {factor: "Competition", effect: "Intraspecific competition for food, space, mates increases with density"},
                            {factor: "Predation", effect: "Predators often focus on abundant prey (switching)"},
                            {factor: "Disease", effect: "Spreads faster in dense populations (contact rate higher)"},
                            {factor: "Parasitism", effect: "Transmission increases with host density"},
                            {factor: "Toxic waste accumulation", effect: "More individuals = more waste (e.g., ammonia in fish tanks)"},
                            {factor: "Territoriality", effect: "Limited suitable territories, excess individuals excluded"}
                        ],
                        significance: "Stabilize populations around K; prevent unlimited growth"
                    },
                    densityIndependent: {
                        definition: "Factors whose effects are independent of population density",
                        mechanism: "Kill similar proportion regardless of density; often catastrophic",
                        factors: [
                            {factor: "Weather", effect: "Freezes, droughts, floods affect all individuals similarly"},
                            {factor: "Natural disasters", effect: "Fires, hurricanes, earthquakes"},
                            {factor: "Human disturbance", effect: "Pollution, habitat destruction"},
                            {factor: "Seasonal changes", effect: "Temperature extremes, photoperiod"}
                        ],
                        significance: "Can cause dramatic population crashes; prevent populations from reaching K"
                    }
                },
                lifeHistoryStrategies: {
                    rSelected: {
                        characteristics: "High reproductive rate, early reproduction, small body size, short lifespan",
                        strategy: "Produce many offspring with little parental care",
                        environment: "Unstable, unpredictable, low competition",
                        advantages: "Rapid colonization, quick recovery from disturbance",
                        disadvantages: "High juvenile mortality, vulnerable to environmental change",
                        examples: "Insects, weeds, bacteria, mice, most fish",
                        parenting: "Little to no parental care"
                    },
                    KSelected: {
                        characteristics: "Low reproductive rate, delayed reproduction, large body size, long lifespan",
                        strategy: "Produce few offspring with extensive parental care",
                        environment: "Stable, predictable, high competition",
                        advantages: "High offspring survival, competitive ability",
                        disadvantages: "Slow population growth, slow recovery from disturbance",
                        examples: "Elephants, whales, primates, large trees",
                        parenting: "Extended parental care, teaching"
                    },
                    continuum: "Most species fall somewhere between extremes; trade-offs between quantity and quality of offspring"
                },
                survivorshipCurves: {
                    typeI: {
                        description: "High survival until old age, then rapid die-off",
                        shape: "Convex curve",
                        characteristics: "Low juvenile mortality, most live to old age",
                        examples: "Humans (in developed countries), elephants, whales, large mammals",
                        strategy: "K-selected, high parental care"
                    },
                    typeII: {
                        description: "Constant mortality rate at all ages",
                        shape: "Diagonal line",
                        characteristics: "Equal chance of dying at any age",
                        examples: "Birds, small mammals, some reptiles",
                        strategy: "Intermediate"
                    },
                    typeIII: {
                        description: "High juvenile mortality, few survive to adulthood, those that do survive long",
                        shape: "Concave curve",
                        characteristics: "Very high early mortality, survivors have good longevity",
                        examples: "Fish, amphibians, marine invertebrates, plants (seeds)",
                        strategy: "r-selected, many offspring, no parental care"
                    }
                },
                populationStructure: {
                    agePyramids: {
                        expanding: {
                            shape: "Wide base, narrow top",
                            characteristics: "High birth rate, many young individuals",
                            prediction: "Rapid population growth",
                            examples: "Developing countries, populations recovering from disturbance"
                        },
                        stable: {
                            shape: "Rectangular (relatively even across ages)",
                            characteristics: "Birth rate ≈ death rate",
                            prediction: "Stable population size",
                            examples: "Developed countries with low growth"
                        },
                        declining: {
                            shape: "Narrow base, wider middle",
                            characteristics: "Low birth rate, aging population",
                            prediction: "Population decline",
                            examples: "Aging populations in developed countries, endangered species"
                        }
                    },
                    sexRatio: {
                        definition: "Ratio of males to females",
                        typical: "1:1 in most species (Fisher's principle)",
                        deviations: "Some species have biased sex ratios (e.g., social insects, temperature-dependent sex determination in reptiles)"
                    }
                },
                metapopulations: {
                    definition: "Group of spatially separated populations connected by occasional dispersal",
                    structure: "Populations in habitat patches; individuals migrate between patches",
                    dynamics: {
                        localExtinction: "Some populations go extinct (stochastic events)",
                        recolonization: "Extinct patches recolonized by dispersers from other patches",
                        balance: "Metapopulation persists if colonization > extinction"
                    },
                    significance: "Important for conservation in fragmented habitats",
                    examples: "Butterflies in meadow patches, salamanders in ponds, plants on islands"
                },
                applications: [
                    "Wildlife conservation and endangered species recovery",
                    "Fisheries management (sustainable harvest levels)",
                    "Pest control (integrated pest management)",
                    "Invasive species management",
                    "Human population planning",
                    "Predicting population responses to climate change"
                ]
            },

            community_ecology: {
                title: "Community Ecology: Species Interactions and Ecosystem Structure",
                concepts: [
                    "Communities are assemblages of interacting populations",
                    "Species interactions include competition, predation, mutualism, commensalism, and parasitism",
                    "Ecological niches describe how species use resources and interact with environment",
                    "Succession is predictable change in community composition over time",
                    "Keystone species have disproportionate effects on community structure",
                    "Biodiversity enhances ecosystem stability and function"
                ],
                theory: "Community ecology examines how species interact and coexist, and how these interactions shape community structure and dynamics. Understanding community ecology is crucial for conservation, restoration, and predicting ecosystem responses to disturbances.",
                keyDefinitions: {
                    "Community": "All populations of different species living and interacting in an area",
                    "Species Richness": "Number of different species in a community",
                    "Species Evenness": "Relative abundance of different species",
                    "Ecological Niche": "Role a species plays in a community; includes resource use, habitat, and interactions",
                    "Fundamental Niche": "Full range of conditions a species can potentially occupy (without competition)",
                    "Realized Niche": "Actual conditions where species occurs (limited by competition, predation)",
                    "Keystone Species": "Species with disproportionately large effect on community structure relative to abundance",
                    "Foundation Species": "Abundant species that provide habitat or resources for many other species",
                    "Succession": "Predictable change in species composition over time",
                    "Climax Community": "Stable, mature community that represents endpoint of succession"
                },
                speciesInteractions: {
                    competition: {
                        definition: "Interaction where both species negatively affected (- -)",
                        types: {
                            interspecific: "Competition between different species",
                            intraspecific: "Competition within a species"
                        },
                        mechanisms: {
                            exploitative: "Indirect; species compete by consuming shared resource",
                            interference: "Direct; species directly harm each other (territoriality, allelopathy)",
                            apparent: "Mediated by shared predator or parasite"
                        },
                        outcomes: {
                            competitiveExclusion: "Gause's Principle: species with identical niches cannot coexist; one outcompetes and excludes the other",
                            resourcePartitioning: "Species evolve to use different resources or same resource differently (niche differentiation)",
                            characterDisplacement: "Competing species diverge in traits to reduce competition"
                        },
                        examples: [
                            "Barnacles on rocky shore (Chthamalus and Balanus)",
                            "Plants competing for light, water, nutrients",
                            "Lions and hyenas competing for prey"
                        ]
                    },
                    predation: {
                        definition: "One species (predator) eats another (prey) (+ -)",
                        types: {
                            carnivory: "Animal eating animal",
                            herbivory: "Animal eating plant",
                            parasitoidism: "Insect larvae eat host from inside, eventually killing it"
                        },
                        effects: {
                            onPrey: "Reduces prey population; selects for anti-predator adaptations",
                            onPredator: "Provides energy; predator population depends on prey availability"
                        },
                        populationDynamics: {
                            predatorPreyCycles: "Lynx and hare populations cycle with ~10 year period",
                            mechanism: "Prey increase → predators increase → prey decrease → predators decrease → cycle repeats"
                        },
                        preyDefenses: [
                            "Camouflage (cryptic coloration)",
                            "Warning coloration (aposematism)",
                            "Mimicry (Batesian: harmless mimics harmful; Müllerian: two harmful species converge)",
                            "Physical defenses (spines, shells, toxins)",
                            "Behavioral defenses (hiding, fleeing, group defense)"
                        ],
                        predatorAdaptations: [
                            "Speed and agility",
                            "Keen senses (vision, smell, echolocation)",
                            "Camouflage (to ambush)",
                            "Cooperative hunting"
                        ],
                        examples: [
                            "Wolves and elk in Yellowstone",
                            "Sea otters and sea urchins (kelp forest)",
                            "Ladybugs and aphids"
                        ]
                    },
                    mutualism: {
                        definition: "Both species benefit (+ +)",
                        obligate: "Neither species can survive without the other",
                        facultative: "Species benefit but can survive independently",
                        examples: [
                            {species: "Pollinators and flowers", benefit: "Insects get nectar/pollen, plants get pollination"},
                            {species: "Nitrogen-fixing bacteria and legumes", benefit: "Bacteria get sugars, plants get nitrogen"},
                            {species: "Mycorrhizae and plants", benefit: "Fungi get sugars, plants get water and minerals"},
                            {species: "Cleaner fish and large fish", benefit: "Cleaner gets food, large fish gets parasites removed"},
                            {species: "Zooxanthellae and corals", benefit: "Algae get shelter and CO₂, corals get glucose"}
                        ],
                        significance: "Essential for many ecosystem functions (pollination, nutrient cycling)"
                    },
                    commensalism: {
                        definition: "One species benefits, other unaffected (+ 0)",
                        examples: [
                            "Barnacles on whales (barnacles get transportation, whale unaffected)",
                            "Epiphytes on trees (orchids get light, tree unaffected)",
                            "Remoras on sharks (remoras eat scraps, sharks unaffected)",
                            "Birds nesting in trees"
                        ],
                        note: "True commensalism rare; often closer look reveals slight cost or benefit"
                    },
                    parasitism: {
                        definition: "One species (parasite) benefits, other (host) harmed (+ -)",
                        characteristics: "Parasite usually smaller, lives on or in host, doesn't immediately kill host",
                        types: {
                            ectoparasites: "Live on host surface (ticks, lice, leeches, fleas)",
                            endoparasites: "Live inside host (tapeworms, flukes, malaria)",
                            broodParasites: "Lay eggs in other species' nests (cowbirds, cuckoos)"
                        },
                        effects: {
                            onHost: "Reduced growth, reproduction, survival; increased disease susceptibility",
                            onParasite: "Access to nutrients; must overcome host immune system"
                        },
                        coevolution: "Hosts evolve resistance; parasites evolve to overcome resistance (arms race)",
                        examples: [
                            "Tapeworms in mammal intestines",
                            "Mistletoe on trees",
                            "Malaria (Plasmodium) in humans"
                        ]
                    },
                    amensalism: {
                        definition: "One species harmed, other unaffected (- 0)",
                        examples: [
                            "Large animal stepping on smaller organisms",
                            "Allelopathy: black walnut produces chemicals that inhibit other plants",
                            "Penicillium mold produces antibiotic that kills bacteria"
                        ]
                    }
                },
                ecologicalNiche: {
                    concept: "Niche is multidimensional; includes all abiotic and biotic factors affecting species",
                    hutchinsonNiche: "n-dimensional hypervolume (each axis = environmental variable)",
                    fundamentalVsRealized: {
                        fundamental: "Where species CAN live (physiological tolerance)",
                        realized: "Where species DOES live (restricted by competition, predation)",
                        example: "Barnacles: Chthamalus fundamental niche is entire intertidal, but Balanus outcompetes it, so realized niche is upper intertidal only"
                    },
                    nichePartitioning: {
                        definition: "Species divide resources to reduce competition and coexist",
                        mechanisms: [
                            "Temporal partitioning: use resources at different times (day vs night, seasons)",
                            "Spatial partitioning: use different microhabitats",
                            "Morphological partitioning: different bill sizes in birds allow eating different seed sizes"
                        ],
                        example: "Warblers in coniferous trees: different species feed at different heights and tree parts"
                    }
                },
                succession: {
                    primary: {
                        definition: "Succession on substrate never before colonized (no soil)",
                        examples: "Newly formed volcanic island, retreating glacier, bare rock",
                        pioneer_species: "Lichens, mosses (tolerant of harsh conditions, create soil)",
                        stages: [
                            "Lichens and mosses colonize bare rock",
                            "Weathering and decomposition create thin soil",
                            "Grasses and small herbs establish",
                            "Shrubs and small trees appear",
                            "Shade-intolerant trees (pioneer trees like aspen, birch)",
                            "Shade-tolerant trees (oak, maple, beech)",
                            "Climax community (mature forest)"
                        ],
                        timescale: "Hundreds to thousands of years"
                    },
                    secondary: {
                        definition: "Succession after disturbance removes community but soil remains",
                        examples: "After fire, logging, abandoned farmland, hurricane",
                        pioneerSpecies: "Weeds, grasses (fast-growing r-selected species)",
                        stages: [
                            "Annual weeds and grasses",
                            "Perennial grasses and herbs",
                            "Shrubs",
                            "Pioneer trees (fast-growing, shade-intolerant)",
                            "Climax trees (slow-growing, shade-tolerant)",
                            "Climax community"
                        ],
                        timescale: "Decades to centuries (faster than primary)"
                    },
                    mechanisms: {
                        facilitation: "Early species make environment more favorable for later species (e.g., nitrogen fixation, shade)",
                        inhibition: "Early species prevent colonization by later species (outcompete)",
                        tolerance: "Later species simply tolerate conditions created by early species; not facilitated or inhibited"
                    },
                    climaxCommunity: {
                        characteristics: "Stable, high biomass, high diversity, efficient nutrient cycling",
                        note: "Rarely truly stable; disturbances reset succession (fire, storms)",
                        climateInfluence: "Climax community type determined by climate (tropical rainforest, temperate deciduous forest, grassland, etc.)"
                    }
                },
                keystoneSpecies: {
                    definition: "Species whose impact on community far exceeds what would be expected from abundance",
                    removal: "Removing keystone species causes dramatic changes in community structure and composition",
                    examples: [
                        {
                            species: "Sea otters",
                            ecosystem: "Kelp forests",
                            role: "Eat sea urchins; without otters, urchins overgraze kelp",
                            result: "Otters maintain kelp forests; loss leads to 'urchin barrens'"
                        },
                        {
                            species: "Wolves",
                            ecosystem: "Yellowstone",
                            role: "Top predator; control elk populations",
                            result: "Wolf reintroduction allowed willow and aspen regeneration, benefiting beavers, songbirds, etc. (trophic cascade)"
                        },
                        {
                            species: "Sea stars (Pisaster)",
                            ecosystem: "Intertidal",
                            role: "Eat mussels (dominant competitor)",
                            result: "Without sea stars, mussels exclude other species, diversity plummets"
                        },
                        {
                            species: "Elephants",
                            ecosystem: "African savanna",
                            role: "Knock down trees, maintain grasslands",
                            result: "Loss leads to woodland encroachment, changes habitat for other species"
                        },
                        {
                            species: "Beavers",
                            ecosystem: "Temperate streams",
                            role: "Build dams, create wetlands",
                            result: "Increase habitat diversity, benefit many species"
                        }
                    ],
                    types: {
                        predator: "Top predators that regulate prey (wolves, sea otters)",
                        mutualist: "Pollinators, seed dispersers (bats, bees)",
                        engineer: "Modify physical environment (beavers, elephants)"
                    }
                },
                applications: [
                    "Predicting effects of species loss or introduction",
                    "Ecosystem restoration (reintroducing keystone species)",
                    "Invasive species management",
                    "Conservation prioritization (protect keystone species)",
                    "Understanding trophic cascades",
                    "Managing succession for desired outcomes (e.g., preventing woody encroachment in grasslands)"
                ]
            },

            biodiversity: {
                title: "Biodiversity: Measurement, Patterns, and Conservation",
                concepts: [
                    "Biodiversity includes genetic, species, and ecosystem diversity",
                    "Species richness is number of species; evenness is relative abundance",
                    "Diversity indices combine richness and evenness into single metric",
                    "Latitudinal gradient: diversity generally increases toward tropics",
                    "Island biogeography theory predicts diversity based on area and isolation",
                    "Human activities are causing sixth mass extinction"
                ],
                theory: "Biodiversity is the variety of life at all levels of organization. It is essential for ecosystem functioning, resilience, and provision of ecosystem services. Understanding patterns and drivers of biodiversity is crucial for conservation in the face of accelerating biodiversity loss.",
                keyDefinitions: {
                    "Biodiversity": "Variety of life at genetic, species, and ecosystem levels",
                    "Genetic Diversity": "Variation in genes within a species",
                    "Species Diversity": "Variety and abundance of species in a community",
                    "Ecosystem Diversity": "Variety of ecosystems in a region",
                    "Species Richness": "Number of different species (S)",
                    "Species Evenness": "How evenly individuals are distributed among species",
                    "Endemism": "Species found only in a specific geographic location",
                    "Biodiversity Hotspot": "Region with high endemism and significant habitat loss (>1,500 endemic plants, >70% habitat loss)",
                    "Extinction": "Complete loss of a species globally",
                    "Extirpation": "Local extinction (species lost from specific area but survives elsewhere)"
                },
                levelsOfBiodiversity: {
                    genetic: {
                        definition: "Variation in DNA sequences among individuals within a species",
                        importance: [
                            "Allows adaptation to changing environments",
                            "Reduces inbreeding depression",
                            "Source of evolutionary potential",
                            "Confers disease resistance"
                        ],
                        threats: "Small population size, inbreeding, genetic bottlenecks",
                        examples: "Genetic diversity in crop wild relatives allows breeding for pest resistance"
                    },
                    species: {
                        definition: "Variety of species in a region",
                        importance: [
                            "Redundancy in ecosystem functions",
                            "Stability and resilience",
                            "Provides ecosystem services"
                        ],
                        measurement: "Species richness, diversity indices",
                        threats: "Habitat loss, overexploitation, invasive species, pollution, climate change"
                    },
                    ecosystem: {
                        definition: "Variety of habitats, communities, and ecological processes",
                        importance: [
                            "Provides diverse ecosystem services",
                            "Supports species diversity",
                            "Regional and global biodiversity"
                        ],
                        examples: "Forests, wetlands, coral reefs, grasslands, deserts",
                        threats: "Land conversion, fragmentation, degradation"
                    }
                },
                measuringDiversity: {
                    speciesRichness: {
                        definition: "Simple count of number of species (S)",
                        advantages: "Easy to understand and calculate",
                        disadvantages: "Ignores relative abundance; doesn't distinguish between common and rare species",
                        example: "Community A: 5 species (100, 1, 1, 1, 1); Community B: 5 species (20, 20, 20, 20, 24). Both have S=5"
                    },
                    simpsonIndex: {
                        formula: "D = Σ(nᵢ/N)² or Simpson's Diversity: 1 - D",
                        where: "nᵢ = number of individuals of species i, N = total individuals",
                        interpretation: "D = probability two randomly selected individuals are same species; 1-D = diversity",
                        range: "0 (low diversity) to ~1 (high diversity)",
                        advantages: "Weighs abundant species more heavily",
                        example: "If one species dominates, D is high (low diversity)"
                    },
                    shannonIndex: {
                        formula: "H' = -Σ(pᵢ × ln(pᵢ))",
                        where: "pᵢ = proportion of individuals of species i",
                        interpretation: "Higher H' = higher diversity",
                        range: "0 (one species) to ~5+ (many evenly distributed species)",
                        advantages: "Sensitive to rare species, commonly used",
                        example: "Typical temperate forest H' = 2-3; tropical rainforest H' = 4-5"
                    },
                    evennessIndex: {
                        formula: "E = H'/H'max = H'/ln(S)",
                        where: "H'max = maximum possible diversity for given richness (all species equal abundance)",
                        range: "0 (one species dominates) to 1 (all species equally abundant)",
                        interpretation: "Measures how evenly individuals are distributed among species"
                    }
                },
                patternsOfBiodiversity: {
                    latitudinalGradient: {
                        pattern: "Species richness generally increases from poles to equator",
                        observation: "Tropics have far more species than temperate or polar regions",
                        hypotheses: [
                            "Climate/energy: More solar energy → higher productivity → more species",
                            "Evolutionary time: Tropics older, more stable → more time for speciation",
                            "Area: Tropics cover larger area → more species",
                            "Specialization: Smaller niches in tropics → more species can pack in"
                        ],
                        examples: "Tree species: ~300 in temperate forest, ~300 in single hectare of tropical rainforest"
                    },
                    altitudinalGradient: {
                        pattern: "Diversity generally decreases with elevation",
                        reasons: "Lower temperature, shorter growing season, less area at high elevations"
                    },
                    depthGradient: {
                        pattern: "Marine diversity highest in shallow waters, declines with depth",
                        reasons: "Light limitation, less productivity, fewer habitats in deep sea"
                    },
                    islandBiogeography: {
                        theory: "Diversity on islands determined by balance between immigration and extinction",
                        factors: {
                            area: "Larger islands support more species (more habitat, resources, lower extinction)",
                            isolation: "Islands closer to mainland have higher immigration rates, more species"
                        },
                        equilibrium: "Species richness reaches equilibrium where immigration = extinction",
                        applications: "Habitat fragments act like islands; predicts diversity loss from fragmentation",
                        example: "Large, close islands most diverse; small, distant islands least diverse"
                    }
                },
                biodiversityHotspots: {
                    definition: "Regions with ≥1,500 endemic vascular plant species and ≥70% habitat loss",
                    identified: "36 hotspots globally (as of 2020)",
                    coverage: "Cover <2% of Earth's land surface but contain >50% of plant species and 42% of terrestrial vertebrates",
                    examples: [
                        "Madagascar and Indian Ocean Islands",
                        "Tropical Andes",
                        "Sundaland (Southeast Asia)",
                        "Atlantic Forest (Brazil)",
                        "Caribbean Islands",
                        "Mediterranean Basin",
                        "Philippines",
                        "Cape Floristic Region (South Africa)"
                    ],
                    importance: "High priority for conservation efforts; irreplaceable biodiversity at high risk"
                },
                valueOfBiodiversity: {
                    intrinsic: "Value of species in their own right (ethical/philosophical)",
                    instrumental: {
                        provisioning: "Food, medicine, materials, genetic resources",
                        regulating: "Climate regulation, water purification, pollination, pest control",
                        supporting: "Nutrient cycling, soil formation, primary production",
                        cultural: "Recreation, aesthetic, spiritual, educational"
                    },
                    insurance: "Higher diversity → greater resilience to disturbances (functional redundancy)",
                    economic: "Ecosystem services valued at $125-140 trillion/year globally"
                },
                threatsTo Biodiversity: {
                    habitatLoss: {
                        cause: "Deforestation, urbanization, agriculture expansion",
                        impact: "Leading cause of species extinction; ~50% of tropical forests lost",
                        fragmentation: "Remaining habitat broken into small, isolated patches"
                    },
                    overexploitation: {
                        cause: "Overfishing, overhunting, poaching, overharvesting",
                        examples: "Passenger pigeon (extinct), cod collapse, rhinoceros poaching for horns",
                        impact: "Directly reduces populations, can lead to extinction"
                    },
                    invasiveSpecies: {
                        cause: "Non-native species introduced (intentionally or accidentally)",
                        impact: "Outcompete natives, alter habitats, introduce diseases",
                        examples: "Cane toads in Australia, zebra mussels in Great Lakes, rats on islands"
                    },
                    pollution: {
                        types: "Pesticides, heavy metals, plastics, eutrophication, acid rain",
                        impact: "Direct toxicity, habitat degradation",
                        examples: "DDT bioaccumulation, ocean acidification, dead zones"
                    },
                    climateChange: {
                        effects: "Shifting ranges, altered phenology, coral bleaching, ice habitat loss",
                        rate: "Faster than many species can adapt or migrate",
                        synergies: "Interacts with other threats (e.g., stressed species more vulnerable to disease)"
                    },
                    HIPPO: "Mnemonic for major threats: Habitat loss, Invasive species, Pollution, Population growth (human), Overharvesting"
                },
                conservation: {
                    strategies: [
                        "Protected areas (national parks, reserves)",
                        "Habitat restoration",
                        "Captive breeding and reintroduction",
                        "Sustainable use and management",
                        "Combating invasive species",
                        "Addressing climate change",
                        "Education and community involvement"
                    ],
                    IUCN_RedList: "Categorizes species by extinction risk: Extinct, Extinct in Wild, Critically Endangered, Endangered, Vulnerable, Near Threatened, Least Concern, Data Deficient"
                },
                applications: [
                    "Conservation prioritization (hotspots, endangered species)",
                    "Ecological restoration",
                    "Monitoring ecosystem health",
                    "Predicting effects of habitat loss and fragmentation",
                    "Bioprospecting for new medicines and materials",
                    "Understanding resilience to environmental change"
                ]
            }
        };
    }

    initializeEcosystemExperiments() {
        this.ecosystemExperiments = {
            
            // ========================================
            // ENERGY FLOW EXPERIMENTS
            // ========================================
            
            lindeman_efficiency: {
                name: "Lindeman's Trophic Efficiency - Energy Transfer Through Food Chains",
                relatedTopics: ['energy_flow'],
                category: 'ecosystem_energetics',
                historicalBackground: {
                    scientist: "Raymond Lindeman",
                    year: "1942",
                    publication: "The Trophic-Dynamic Aspect of Ecology",
                    location: "Cedar Bog Lake, Minnesota",
                    discovery: "Quantified energy flow through trophic levels; proposed ~10% efficiency",
                    innovation: "First to quantitatively study energy transfer in ecosystems",
                    significance: "Established energetics as fundamental to ecology; explained pyramid of numbers/biomass",
                    context: "Before Lindeman, ecology focused on species distributions; he showed energy flow determines ecosystem structure",
                    tragicNote: "Died at age 27, shortly after publication; paper initially rejected but became foundational",
                    legacy: "10% rule, trophic dynamics, ecosystem energy budgets"
                },
                labExperiment: {
                    title: "Quantifying Energy Transfer in a Model Aquatic Food Chain",
                    hypothesis: "Energy transfer efficiency between trophic levels will be approximately 10%, demonstrating Lindeman's trophic efficiency principle",
                    purpose: "Measure energy content (calories) at each trophic level and calculate ecological efficiency in a simplified aquatic food chain",
                    background: {
                        tenPercentRule: "Only ~10% of energy at one trophic level transfers to the next",
                        ecologicalEfficiency: "Efficiency = (Energy at trophic level n / Energy at trophic level n-1) × 100%",
                        energyLoss: "90% lost as heat (respiration), waste (uneaten/undigested), and decomposition",
                        measurement: "Use bomb calorimetry or proxies (dry biomass) to estimate energy content"
                    },
                    variables: {
                        independent: "Trophic level (producers, primary consumers, secondary consumers)",
                        dependent: "Energy content (calories or kJ per unit biomass)",
                        controlled: ["Ecosystem type", "Sampling method", "Time of sampling", "Biomass measurement technique"]
                    },
                    materials: [
                        "Aquarium or pond ecosystem with established food chain",
                        "Producers: Algae or aquatic plants",
                        "Primary consumers: Water fleas (Daphnia) or snails",
                        "Secondary consumers: Small fish (guppies) or aquatic insects",
                        "Nets for collecting organisms",
                        "Balance for weighing (precision to 0.01 g)",
                        "Drying oven (60-80°C) or dessicator",
                        "Bomb calorimeter (or use published caloric values)",
                        "Calculator",
                        "Data recording sheets",
                        "Optional: Dissolved oxygen meter (for productivity measurements)",
                        "Optional: Light meter (for PAR - photosynthetically active radiation)"
                    ],
                    safetyPrecautions: [
                        "Handle organisms humanely; minimize stress",
                        "Wash hands after handling aquatic organisms",
                        "Use gloves if handling sharp or potentially harmful organisms",
                        "Be cautious around hot drying oven",
                        "If using real bomb calorimeter, follow strict safety protocols (fire/explosion risk)"
                    ],
                    procedure: [
                        "ECOSYSTEM SETUP (if creating from scratch):",
                        "Set up aquarium with water, substrate, and light source",
                        "Introduce algae/plants (producers)",
                        "After 1-2 weeks (algae established), introduce Daphnia or snails (primary consumers)",
                        "After another week, introduce small fish or predatory insects (secondary consumers)",
                        "Allow ecosystem to stabilize for 2-4 weeks",
                        "Optional: Establish tertiary consumer level (larger fish)",
                        "",
                        "ALTERNATIVE: Use natural pond/lake",
                        "Identify food chain: Phytoplankton → Zooplankton → Small fish → Larger fish",
                        "",
                        "SAMPLING AND BIOMASS COLLECTION:",
                        "Producers (Algae/Plants):",
                        "  Collect known volume of water (e.g., 1 L) or known area of algae mat",
                        "  Filter to collect algae, or harvest plant material",
                        "  Rinse with distilled water to remove debris",
                        "  Place in labeled container",
                        "",
                        "Primary Consumers (Daphnia/Snails):",
                        "  Collect representative sample (e.g., 50-100 individuals)",
                        "  Rinse with distilled water",
                        "  Blot dry gently",
                        "  Place in labeled container",
                        "",
                        "Secondary Consumers (Small fish):",
                        "  Collect 5-10 individuals of same size/age",
                        "  Rinse and blot dry",
                        "  Place in labeled container",
                        "",
                        "Tertiary Consumers (optional): Collect larger fish similarly",
                        "",
                        "BIOMASS DETERMINATION:",
                        "Wet Weight:",
                        "  Weigh each sample immediately (blot to remove excess water first)",
                        "  Record wet weight",
                        "",
                        "Dry Weight (more accurate for energy content):",
                        "  Dry samples in oven at 60-80°C for 24-48 hours (until constant weight)",
                        "  Alternative: Place in dessicator with desiccant for several days",
                        "  Weigh dried samples",
                        "  Record dry weight",
                        "  Calculate water content: (Wet weight - Dry weight) / Wet weight × 100%",
                        "",
                        "ENERGY CONTENT DETERMINATION:",
                        "Method 1 - Bomb Calorimetry (if available):",
                        "  Combust dried sample in bomb calorimeter",
                        "  Measure heat released (calories or kJ)",
                        "  Calculate energy per gram dry weight",
                        "",
                        "Method 2 - Use Published Values:",
                        "  Algae/plants: ~3-4 kcal/g dry weight (~12-17 kJ/g)",
                        "  Invertebrates: ~4-5 kcal/g dry weight (~17-21 kJ/g)",
                        "  Fish: ~5-6 kcal/g dry weight (~21-25 kJ/g)",
                        "  Multiply dry biomass by appropriate energy density",
                        "",
                        "SCALE TO ECOSYSTEM LEVEL:",
                        "Estimate total biomass per square meter (or per unit volume for aquatic)",
                        "Multiply by energy density to get total energy per trophic level",
                        "",
                        "CALCULATE ECOLOGICAL EFFICIENCY:",
                        "Efficiency = (Energy at level n / Energy at level n-1) × 100%",
                        "Calculate for each transition:",
                        "  Producer → Primary consumer",
                        "  Primary → Secondary consumer",
                        "  Secondary → Tertiary consumer (if applicable)",
                        "",
                        "Optional - PRIMARY PRODUCTIVITY MEASUREMENT:",
                        "Use light-dark bottle method:",
                        "  Fill clear and dark bottles with water containing phytoplankton",
                        "  Measure initial dissolved oxygen (DO)",
                        "  Incubate in light for set time (e.g., 4-8 hours)",
                        "  Measure final DO in both bottles",
                        "  Calculate:",
                        "    NPP = DO(light) - DO(initial)",
                        "    Respiration = DO(initial) - DO(dark)",
                        "    GPP = NPP + Respiration",
                        "  Convert DO change to energy (1 mg O₂ ≈ 3.5 calories produced in photosynthesis)"
                    ],
                    expectedResults: {
                        biomass: {
                            producers: "Highest biomass (e.g., 1000 g/m² dry weight)",
                            primaryConsumers: "Lower (e.g., 100 g/m²)",
                            secondaryConsumers: "Much lower (e.g., 10 g/m²)",
                            tertiaryConsumers: "Lowest (e.g., 1 g/m²)"
                        },
                        energyContent: {
                            producers: "e.g., 1000 g/m² × 4 kcal/g = 4000 kcal/m²",
                            primaryConsumers: "e.g., 100 g/m² × 5 kcal/g = 500 kcal/m²",
                            secondaryConsumers: "e.g., 10 g/m² × 5.5 kcal/g = 55 kcal/m²",
                            tertiaryConsumers: "e.g., 1 g/m² × 6 kcal/g = 6 kcal/m²"
                        },
                        efficiency: {
                            producerToPrimary: "500 / 4000 × 100% = 12.5%",
                            primaryToSecondary: "55 / 500 × 100% = 11%",
                            secondaryToTertiary: "6 / 55 × 100% = 10.9%",
                            average: "~11% (close to Lindeman's 10%)"
                        },
                        note: "Actual values vary with ecosystem type, season, organism type"
                    },
                    dataTable: [
                        ["Trophic Level", "Biomass (g/m²)", "Energy Density (kcal/g)", "Total Energy (kcal/m²)", "Efficiency (%)"],
                        ["Producers (algae)", "1000", "4", "4000", "-"],
                        ["Primary (Daphnia)", "100", "5", "500", "12.5"],
                        ["Secondary (small fish)", "10", "5.5", "55", "11.0"],
                        ["Tertiary (large fish)", "1", "6", "6", "10.9"],
                        ["", "", "", "Average Efficiency:", "11.5%"]
                    ],
                    observations: [
                        "Biomass decreases dramatically at each trophic level",
                        "Total energy available decreases by ~90% per level",
                        "Ecological efficiency typically 5-20%, average ~10%",
                        "Higher trophic levels have higher energy density per gram (more fat/protein)",
                        "Explains why food chains rarely exceed 4-5 levels (insufficient energy)"
                    ],
                    analysis: {
                        whyOnly10Percent: [
                            "Not all biomass consumed (inedible parts: bones, shells, cell walls)",
                            "Not all consumed food digested (passes as feces)",
                            "Much energy lost as heat during cellular respiration",
                            "Energy used for movement, reproduction, maintaining body temperature",
                            "Some organisms die and are decomposed before being eaten"
                        ],
                        energyBudgetBreakdown: {
                            consumed: "Consumer eats only ~50% of available biomass",
                            assimilated: "Of consumed, ~80% digested and absorbed (20% as feces)",
                            respiration: "Of assimilated, ~60% lost as heat during metabolism",
                            growth: "Remaining ~20% of assimilated energy becomes new biomass",
                            overall: "50% × 80% × 40% ≈ 16% theoretically available, but losses reduce to ~10% actually transferred"
                        },
                        variability: {
                            high: "Carnivore→Carnivore transitions (meat easier to digest, ~20%)",
                            low: "Herbivore→Herbivore transitions (cellulose hard to digest, ~5-10%)",
                            aquatic: "Often higher efficiency than terrestrial (less energy to support body, ectotherms)"
                        }
                    },
                    connectionToLindeman: {
                        originalStudy: "Cedar Bog Lake food chain: Phytoplankton → Zooplankton → Planktivorous fish → Piscivorous fish",
                        findings: "Efficiency: 13.3% (algae→zooplankton), 10.7% (zooplankton→small fish), 5.5% (small→large fish)",
                        conclusion: "Energy transfer constrains trophic levels; explains ecosystem structure",
                        impact: "Revolutionized ecology; showed thermodynamics govern ecosystem organization"
                    },
                    mathematicalModel: {
                        exponentialDecay: "Energy at level n = Energy at level 1 × (efficiency)^(n-1)",
                        example: "If producers = 10,000 kcal/m² and efficiency = 10%:",
                        primary: "10,000 × 0.1 = 1,000 kcal/m²",
                        secondary: "1,000 × 0.1 = 100 kcal/m²",
                        tertiary: "100 × 0.1 = 10 kcal/m²",
                        quaternary: "10 × 0.1 = 1 kcal/m²",
                        implication: "Insufficient energy to support 5th+ level in most ecosystems"
                    },
                    conclusions: [
                        "Energy transfer between trophic levels is highly inefficient (~10%)",
                        "This inefficiency limits the number of trophic levels in ecosystems (typically 4-5 max)",
                        "Higher trophic levels have progressively less energy available",
                        "Top predators are rare because there's not enough energy to support large populations",
                        "Lindeman's work established that energy flow, not just nutrient cycling, structures ecosystems"
                    ],
                    realWorldApplications: [
                        "Fisheries management: Estimating sustainable harvest from primary productivity",
                        "Agriculture: Understanding energy costs of meat vs. plant-based diets (eating lower on food chain more efficient)",
                        "Aquaculture: Optimizing feed conversion ratios",
                        "Conservation: Protecting enough habitat area to support top predators",
                        "Climate modeling: Predicting how productivity changes affect food webs",
                        "Human nutrition: 10 kg grain → 1 kg beef; vegetarian diets more energy-efficient"
                    ],
                    extensions: [
                        "Compare efficiencies in different ecosystem types (aquatic vs terrestrial, tropical vs temperate)",
                        "Investigate seasonal variation in energy transfer",
                        "Model effects of removing a trophic level (e.g., overfishing predators)",
                        "Calculate human population carrying capacity based on diet (meat vs plant)",
                        "Study detrital food chains (decomposer pathway) and compare efficiencies",
                        "Measure respiration rates at each level to account for energy losses"
                    ],
                    limitations: [
                        "Simplified linear food chain; real ecosystems have complex food webs",
                        "Snapshot in time; doesn't capture seasonal or long-term dynamics",
                        "Difficult to account for all energy flows (detritus, migration, etc.)",
                        "Biomass may not accurately reflect energy if organisms differ in composition (fat vs. carbohydrate content)",
                        "Labor-intensive to collect sufficient samples for statistical power"
                    ],
                    troubleshooting: [
                        "Low efficiency values (<5%): May indicate sampling error, stressed ecosystem, or unusual food chain",
                        "High efficiency values (>20%): Check calculations; may indicate enriched ecosystem (aquaculture) or measurement error",
                        "High variation: Ensure adequate sample size; consider organism life stage (juveniles vs adults differ in energy content)",
                        "Missing trophic level: Some ecosystems have abbreviated food chains; detritivores may be important"
                    ]
                }
            },

            // ========================================
            // NUTRIENT CYCLING EXPERIMENTS
            // ========================================
            
            winogradsky_column: {
                name: "Winogradsky Column - Modeling Biogeochemical Cycles and Microbial Communities",
                relatedTopics: ['nutrient_cycling'],
                category: 'biogeochemical_cycles',
                historicalBackground: {
                    scientist: "Sergei Winogradsky",
                    year: "1888",
                    discovery: "Discovered chemosynthesis and developed column method to study microbial ecology",
                    innovation: "First to culture soil microorganisms and demonstrate their role in nutrient cycling",
                    significance: "Showed bacteria drive nitrogen, sulfur, and carbon cycles; founded environmental microbiology",
                    contributions: [
                        "Discovered nitrifying bacteria (Nitrosomonas, Nitrobacter)",
                        "Demonstrated sulfur bacteria can use H₂S as energy source (chemosynthesis)",
                        "Developed enrichment culture techniques",
                        "Showed microbes transform inorganic nutrients"
                    ],
                    context: "Before Winogradsky, photosynthesis was thought to be only way to fix carbon",
                    legacy: "Winogradsky columns used for ~130 years to study microbial ecology, biogeochemistry, and bioremediation"
                },
                labExperiment: {
                    title: "Constructing and Observing a Winogradsky Column to Model Nutrient Cycling",
                    hypothesis: "A stratified microbial ecosystem will develop in the column, with distinct zones representing different biogeochemical processes (aerobic, anaerobic, photosynthetic, chemosynthetic), demonstrating how microorganisms drive carbon, nitrogen, and sulfur cycles",
                    purpose: "Create a self-sustaining microbial ecosystem in a column that models nutrient cycling and microbial succession over weeks to months",
                    background: {
                        principle: "Column creates gradient of oxygen, light, and nutrients; different microbes thrive in different zones",
                        biogeochemistry: "Microorganisms mediate transformations of C, N, S, and other elements",
                        stratification: {
                            top: "Aerobic (oxygen present), algae and cyanobacteria photosynthesize",
                            middle: "Anaerobic (no oxygen), purple sulfur bacteria photosynthesize using H₂S",
                            bottom: "Anaerobic, sulfate-reducing bacteria produce H₂S from sulfate and organic matter"
                        },
                        colorDevelopment: "Bacterial pigments create distinct colored zones over time"
                    },
                    variables: {
                        independent: "Nutrient additions (egg yolk = sulfur, newspaper = carbon), light exposure",
                        dependent: "Microbial community composition (inferred from color), stratification pattern, time to develop",
                        controlled: ["Sediment source", "Water source", "Temperature", "Light intensity/duration"]
                    },
                    materials: [
                        "Clear plastic or glass column (e.g., 2-liter bottle with top cut off, clear cylinder, or tall jar)",
                        "Mud/sediment from pond, lake, marsh, or estuary (contains diverse microbes)",
                        "Water from same source (or dechlorinated tap water)",
                        "Carbon source: Shredded newspaper or cellulose (not glossy paper)",
                        "Sulfur source: Egg yolk (provides sulfate and organic sulfur)",
                        "Calcium carbonate (CaCO₃) or ground eggshells (buffer pH, provide carbon source)",
                        "Plastic wrap or parafilm (to seal top)",
                        "Rubber band",
                        "Light source (indirect sunlight or grow light)",
                        "Opaque paper or aluminum foil (to shade lower portion if desired)",
                        "Optional: Graduated cylinder, pH paper, microscope for observations"
                    ],
                    safetyPrecautions: [
                        "Sediment may contain pathogens; wear gloves and wash hands thoroughly",
                        "Egg yolk will smell foul (H₂S) after several weeks; seal well",
                        "Do not ingest or inhale from column",
                        "Dispose of column properly at end of experiment (do not pour down drain)",
                        "Supervise younger students closely"
                    ],
                    procedure: [
                        "SEDIMENT PREPARATION:",
                        "Collect sediment from bottom of freshwater or marine environment (top 5-10 cm)",
                        "Collect water from same site (1-2 liters)",
                        "Note collection site characteristics (depth, vegetation, water quality)",
                        "",
                        "COLUMN ASSEMBLY:",
                        "In large container, mix sediment with supplements:",
                        "  ~500 mL sediment (wet)",
                        "  1-2 tablespoons shredded newspaper or cellulose (carbon source)",
                        "  1 egg yolk (sulfur source)",
                        "  1 tablespoon CaCO₃ or crushed eggshells (buffer)",
                        "  Mix thoroughly to create homogeneous slurry",
                        "",
                        "Pack mixed sediment into column:",
                        "  Add to about 2/3 to 3/4 height of column",
                        "  Pack down gently to remove large air pockets (but don't over-compact)",
                        "  Leave some space at top",
                        "",
                        "Add water layer:",
                        "  Carefully pour water from collection site over sediment",
                        "  Fill to near top of column (~5-10 cm above sediment)",
                        "  Try not to disturb sediment too much",
                        "",
                        "Seal column:",
                        "  Cover top with plastic wrap or parafilm",
                        "  Secure with rubber band",
                        "  This creates closed system (prevents evaporation and gas exchange)",
                        "",
                        "PLACEMENT:",
                        "Place column in location with indirect sunlight or under grow light",
                        "  Light intensity: Moderate (not direct intense sun, but enough for photosynthesis)",
                        "  Temperature: Room temperature (20-25°C) is ideal",
                        "Optional: Cover lower 1/3 to 1/2 of column with opaque material to create dark anaerobic zone",
                        "",
                        "OBSERVATION SCHEDULE:",
                        "Week 1-2:",
                        "  Observe daily; note any color changes, gas bubbles, smell (if opening)",
                        "  Initial aerobic decomposition begins",
                        "",
                        "Week 3-6:",
                        "  Observe 2-3x per week",
                        "  Stratification begins: zones of different colors appear",
                        "  Document colors, layer thickness, changes over time",
                        "",
                        "Month 2-6:",
                        "  Observe weekly",
                        "  Mature column develops distinct zones",
                        "  Colors intensify and stabilize",
                        "  Take photos at each observation",
                        "",
                        "OBSERVATIONS TO RECORD:",
                        "Visual:",
                        "  Color of different zones (top, middle, bottom)",
                        "  Thickness of each layer",
                        "  Clarity of water",
                        "  Presence of gas bubbles",
                        "  Growth of algae on sides or surface",
                        "",
                        "Measurements (optional):",
                        "  pH of water layer (use pH paper)",
                        "  Temperature",
                        "  Odor (carefully waft if unsealing briefly)",
                        "",
                        "Microscopic (optional):",
                        "  After 4-6 weeks, carefully extract samples from different zones",
                        "  Observe under microscope (100-400x) to see microbial diversity",
                        "  Look for bacteria, protists, algae",
                        "",
                        "Photography:",
                        "  Take photos at each observation from same angle/lighting",
                        "  Create time-lapse series"
                    ],
                    expectedResults: {
                        timeline: {
                            week1: "Little change; water may become cloudy as aerobic bacteria multiply",
                            week2_3: "Sediment darkens; oxygen depleted below surface, anaerobic zone develops",
                            week4_6: "Colors appear: green/brown algae on top, red/purple/pink zones develop in middle",
                            month2_6: "Stable stratification; distinct colored zones; column matures"
                        },
                        zones: {
                            topWaterLayer: {
                                color: "Clear to green",
                                organisms: "Algae (green), cyanobacteria (blue-green)",
                                process: "Aerobic photosynthesis: CO₂ + H₂O → glucose + O₂",
                                conditions: "Aerobic (oxygen present), light"
                            },
                            upperSediment: {
                                color: "Brown to rusty orange",
                                organisms: "Aerobic bacteria, iron-oxidizing bacteria",
                                process: "Aerobic respiration, iron oxidation",
                                conditions: "Aerobic or microaerophilic"
                            },
                            middleSediment: {
                                color: "Red, purple, or pink",
                                organisms: "Purple sulfur bacteria (Chromatium), purple non-sulfur bacteria (Rhodospirillum)",
                                process: "Anoxygenic photosynthesis: CO₂ + H₂S → glucose + S (uses H₂S instead of H₂O)",
                                conditions: "Anaerobic, light, H₂S present",
                                pigments: "Bacteriochlorophyll and carotenoids"
                            },
                            lowerSediment: {
                                color: "Green (if lit) or black",
                                organisms: "Green sulfur bacteria (Chlorobium), sulfate-reducing bacteria (Desulfovibrio)",
                                process: {
                                    photosynthetic: "CO₂ + H₂S → glucose + S (green sulfur bacteria)",
                                    chemosynthetic: "SO₄²⁻ + organic matter → H₂S + CO₂ (sulfate reducers)"
                                },
                                conditions: "Anaerobic, low light or dark, H₂S present",
                                note: "Black color from iron sulfide (FeS) precipitation"
                            },
                            deepestSediment: {
                                color: "Black",
                                organisms: "Sulfate-reducing bacteria, methanogens, fermentative bacteria",
                                process: "Decomposition, methanogenesis (CH₄ production), sulfate reduction",
                                conditions: "Anaerobic, dark",
                                smell: "H₂S ('rotten egg' smell) if opened"
                            }
                        }
                    },
                    keyProcesses: {
                        carbonCycle: {
                            fixation: "Algae, cyanobacteria (top), photosynthetic bacteria (middle) fix CO₂ into organic carbon",
                            decomposition: "Organic matter broken down by aerobic and anaerobic bacteria",
                            methane: "Methanogens produce CH₄ in deep anaerobic zones"
                        },
                        nitrogenCycle: {
                            ammonification: "Decomposition of organic N → NH₃/NH₄⁺",
                            nitrification: "NH₄⁺ → NO₂⁻ → NO₃⁻ (in aerobic zone)",
                            denitrification: "NO₃⁻ → N₂ (in anaerobic zones)",
                            fixation: "Cyanobacteria may fix N₂ → NH₃ (if present)"
                        },
                        sulfurCycle: {
                            mineralization: "Organic S → H₂S (sulfate reduction in deep zone)",
                            oxidation: "H₂S → S → SO₄²⁻ (by sulfur bacteria in middle/upper zones)",
                            photosyntheticUse: "H₂S used by purple/green sulfur bacteria as electron donor",
                            precipitation: "H₂S + Fe²⁺ → FeS (black color)"
                        },
                        oxygenGradient: {
                            surface: "Oxygen produced by photosynthesis",
                            consumption: "Aerobic respiration depletes O₂ with depth",
                            anaerobic: "No oxygen below surface; alternative electron acceptors used (NO₃⁻, SO₄²⁻, CO₂)"
                        }
                    },
                    observations: [
                        "Distinct colored zones develop over 4-8 weeks",
                        "Column becomes stratified with oxygen gradient (aerobic top, anaerobic bottom)",
                        "Red/purple/pink zones indicate photosynthetic sulfur bacteria",
                        "Black color in deep sediment indicates H₂S and iron sulfide",
                        "System is self-sustaining; no additional nutrients needed",
                        "Mimics natural sediment biogeochemistry in lakes, wetlands, estuaries"
                    ],
                    analysis: {
                        microbialDiversity: "Column demonstrates that different microbes occupy different ecological niches based on oxygen, light, and chemical gradients",
                        biogeochemistry: "Microbes drive transformations of C, N, S, Fe, and other elements; these cycles are coupled",
                        energySources: {
                            light: "Algae, cyanobacteria, photosynthetic bacteria",
                            chemicals: "Chemosynthetic bacteria use H₂S, NH₄⁺, Fe²⁺, etc. as energy"
                        },
                        succession: "Microbial communities change over time as chemical environment evolves; eventually reaches quasi-steady state",
                        analogsInNature: "Column mimics stratified lakes (hypolimnion), wetland sediments, marine sediments, hydrothermal vents"
                    },
                    connectionToWinogradsky: {
                        originalWork: "Winogradsky used enrichment cultures to isolate and study specific bacteria (nitrifiers, sulfur oxidizers)",
                        discovery: "Showed bacteria obtain energy from inorganic chemical reactions (chemosynthesis)",
                        impact: "Revolutionized understanding of biogeochemical cycles; showed life can exist without photosynthesis (basis for hydrothermal vent ecosystems)",
                        methodology: "Winogradsky's approach of using natural communities (not pure cultures) was revolutionary"
                    },
                    conclusions: [
                        "Microorganisms drive nutrient cycles; without them, ecosystems would not function",
                        "Different microbial groups occupy distinct niches based on oxygen, light, and chemistry",
                        "Stratification develops naturally in response to gradients",
                        "Photosynthesis is not only way to fix carbon; chemosynthesis and anoxygenic photosynthesis also occur",
                        "Sulfur cycle closely linked to carbon cycle in anaerobic environments",
                        "Winogradsky columns model complex biogeochemical processes in simple, visible way"
                    ],
                    realWorldApplications: [
                        "Bioremediation: Using microbes to clean up pollution (e.g., oil spills, heavy metals)",
                        "Wastewater treatment: Exploiting microbial nutrient transformations (nitrification, denitrification)",
                        "Understanding wetland function: Wetlands remove pollutants via microbial processes",
                        "Astrobiology: Chemosynthetic microbes suggest life possible without sunlight (Europa, Enceladus)",
                        "Aquaculture: Managing sediment chemistry in ponds",
                        "Studying origin of life: Chemosynthesis may have preceded photosynthesis evolutionarily"
                    ],
                    extensions: [
                        "Vary nutrient additions (more/less carbon, sulfur) and observe effects on stratification",
                        "Compare columns from different sediment sources (freshwater vs marine, polluted vs pristine)",
                        "Manipulate light (shaded vs lit) and observe effects on photosynthetic zones",
                        "Extract DNA from different zones and sequence to identify microbial communities",
                        "Measure chemical gradients (O₂, pH, sulfide, redox potential) at different depths",
                        "Create 'polluted' column (add hydrocarbons) to study bioremediation",
                        "Inoculate with specific bacteria and track their establishment"
                    ],
                    limitations: [
                        "Simplified model; lacks some complexity of natural systems (flow, seasonal changes, large organisms)",
                        "Takes weeks to months to develop; requires patience",
                        "Sealed system; cannot sample repeatedly without disrupting",
                        "Difficult to quantify processes; mostly qualitative observations",
                        "Odor can be unpleasant if opened"
                    ],
                    troubleshooting: [
                        "No color development: May lack sulfur bacteria; try sediment from different source, ensure light exposure",
                        "Uniform color (no stratification): Sediment may be too well-mixed or too much air introduced; remake with careful packing",
                        "Green/algae on sides: Normal; shows photosynthesis occurring",
                        "Bubbles: Normal; produced by gas-generating bacteria (CO₂, CH₄, H₂S, N₂)",
                        "Foul smell when opened: Normal (H₂S); shows sulfur cycle active; reseal quickly",
                        "Water layer evaporating: Seal better; can add sterile water if needed but avoid introducing oxygen"
                    ]
                }
            },

            // ========================================
            // POPULATION ECOLOGY EXPERIMENTS
            // ========================================
            
            gause_competitive_exclusion: {
                name: "Gause's Competitive Exclusion Principle - Laboratory Test with Paramecium",
                relatedTopics: ['population_ecology', 'community_ecology'],
                category: 'population_dynamics',
                historicalBackground: {
                    scientist: "Georgy Gause (Georgii Frantsevitch Gause)",
                    year: "1934",
                    publication: "The Struggle for Existence",
                    organism: "Paramecium aurelia and P. caudatum",
                    discovery: "Two species competing for the same resource cannot coexist; one will outcompete and exclude the other",
                    principle: "Competitive Exclusion Principle (Gause's Law): Species with identical niches cannot coexist indefinitely",
                    experiments: "Cultured two Paramecium species separately (both survived) and together (one drove other to extinction)",
                    significance: "Demonstrated that ecological niche governs species coexistence; foundational for community ecology",
                    context: "Tested Darwin's ideas about competition in controlled laboratory setting",
                    implications: "Explains why similar species partition resources (character displacement, niche differentiation)",
                    legacy: "Competitive exclusion principle is core concept in ecology; drives conservation, invasive species management"
                },
                labExperiment: {
                    title: "Testing Competitive Exclusion and Coexistence in Paramecium Cultures",
                    hypothesis: "When two Paramecium species with overlapping niches are cultured together, the competitively superior species will exclude the other. However, if niches differ (e.g., resource partitioning), both species can coexist.",
                    purpose: "Demonstrate competitive exclusion using Paramecium cultures; investigate conditions allowing coexistence",
                    background: {
                        paramecium: "Single-celled ciliate protist; easy to culture; reproduces asexually (divides)",
                        species: {
                            Paurelia: "Slightly smaller, faster reproduction, feeds on smaller bacteria, prefers upper water",
                            Pcaudatum: "Larger, slower reproduction, feeds on larger bacteria, prefers lower/sediment"
                        },
                        niche: "If niches are identical (same food, same location), competition most intense",
                        outcome: "P. aurelia typically outcompetes P. caudatum when both occupy same niche (faster reproduction wins)",
                        coexistence: "Can be achieved if resource heterogeneity provided (different food sizes, stratification)"
                    },
                    variables: {
                        independent: "Culture conditions: (1) P. aurelia alone, (2) P. caudatum alone, (3) Both together (homogeneous), (4) Both together (heterogeneous environment)",
                        dependent: "Population size of each species over time",
                        controlled: ["Temperature", "Volume of culture", "Food type and amount", "Light", "Initial population size"]
                    },
                    materials: [
                        "Paramecium aurelia culture",
                        "Paramecium caudatum culture",
                        "Boiled wheat grains or rice grains (food source - promotes bacterial growth)",
                        "Pond water or culture medium (autoclaved or aged tap water)",
                        "Test tubes or small beakers (50-100 mL)",
                        "Pipettes or droppers (sterile)",
                        "Microscope (100-400x magnification)",
                        "Microscope slides and coverslips",
                        "Counting grid or hemocytometer",
                        "Methylcellulose or cotton fibers (to slow Paramecium for counting)",
                        "Incubator or warm location (~22-25°C)",
                        "Graph paper or computer for plotting data",
                        "Data recording sheets"
                    ],
                    safetyPrecautions: [
                        "Paramecium is harmless but use aseptic technique to avoid contamination",
                        "Wash hands after handling cultures",
                        "Dispose of cultures properly (autoclave or bleach treatment before disposal)",
                        "Be cautious with microscope (fragile)"
                    ],
                    procedure: [
                        "CULTURE PREPARATION (Start 1 week before experiment):",
                        "Prepare culture medium:",
                        "  For each liter of aged tap water or pond water, add 1-2 boiled wheat grains",
                        "  Allow to stand at room temperature for 3-5 days",
                        "  Bacteria grow on grains; these will be Paramecium food",
                        "  Culture medium should be slightly cloudy but not foul",
                        "",
                        "Obtain or order Paramecium cultures:",
                        "  P. aurelia and P. caudatum from biological supply company or local pond",
                        "  Maintain in separate containers with culture medium",
                        "  Let populations grow for several days before starting experiment",
                        "",
                        "EXPERIMENTAL SETUP:",
                        "Prepare 4 sets of cultures (in triplicate for statistical power = 12 tubes total):",
                        "",
                        "Treatment 1 - P. aurelia alone:",
                        "  Label 3 tubes 'P. aurelia control'",
                        "  Add 50 mL culture medium + 1 wheat grain to each",
                        "  Add 20-30 individuals of P. aurelia to each tube (use pipette)",
                        "",
                        "Treatment 2 - P. caudatum alone:",
                        "  Label 3 tubes 'P. caudatum control'",
                        "  Add 50 mL medium + 1 wheat grain to each",
                        "  Add 20-30 individuals of P. caudatum",
                        "",
                        "Treatment 3 - Both species together (homogeneous):",
                        "  Label 3 tubes 'Mixed homogeneous'",
                        "  Add 50 mL medium + 1 wheat grain",
                        "  Add 20-30 individuals of EACH species (equal numbers)",
                        "",
                        "Treatment 4 - Both species together (heterogeneous) [Optional extension]:",
                        "  Label 3 tubes 'Mixed heterogeneous'",
                        "  Add different sized food particles (small and large bacteria promoted by different grain types)",
                        "  Or create stratification (partial sediment at bottom)",
                        "  Add 20-30 individuals of each species",
                        "",
                        "INCUBATION:",
                        "Place all tubes in same environment (22-25°C, indirect light)",
                        "Do not shake or disturb excessively",
                        "",
                        "SAMPLING AND COUNTING:",
                        "Sample every 2-3 days for 2-3 weeks:",
                        "",
                        "Sampling procedure:",
                        "  Gently swirl tube to distribute Paramecium evenly",
                        "  Use pipette to withdraw 1-2 mL sample from middle of tube",
                        "  Place drop on microscope slide",
                        "  Add small amount of methylcellulose or cotton fibers to slow Paramecium",
                        "  Add coverslip",
                        "",
                        "Counting:",
                        "  Under 100x or 400x magnification, identify species:",
                        "    P. aurelia: Smaller (~80-170 µm), two micronuclei",
                        "    P. caudatum: Larger (~180-300 µm), one micronucleus",
                        "    Note: Size easiest distinguishing feature",
                        "  Count all individuals in field of view or use counting grid",
                        "  Estimate total population: (count/volume sampled) × total volume",
                        "  Repeat for 3-5 fields per tube",
                        "  Average counts from triplicate tubes",
                        "",
                        "Record data:",
                        "  Date, treatment, P. aurelia count, P. caudatum count",
                        "  Calculate population density (individuals/mL)",
                        "",
                        "Continue for 14-21 days (until one species excluded in mixed cultures, or populations stabilize)"
                    ],
                    expectedResults: {
                        Paurelia_alone: {
                            growth: "Exponential growth initially, then plateau at carrying capacity (~200-300/mL)",
                            curve: "Logistic S-curve",
                            survival: "Population stable"
                        },
                        Pcaudatum_alone: {
                            growth: "Similar to P. aurelia but may plateau at lower density or grow slower",
                            curve: "Logistic S-curve",
                            survival: "Population stable"
                        },
                        mixed_homogeneous: {
                            Paurelia: "Increases initially, outcompetes P. caudatum",
                            Pcaudatum: "Increases initially, then declines to extinction (~14-16 days)",
                            outcome: "Competitive exclusion - only P. aurelia survives",
                            mechanism: "P. aurelia has higher reproductive rate, reduces bacteria faster, outcompetes for food"
                        },
                        mixed_heterogeneous: {
                            both: "Both species may coexist if resource partitioning occurs",
                            Paurelia: "Dominates upper water column or feeds on small bacteria",
                            Pcaudatum: "Occupies lower/sediment or feeds on larger particles",
                            outcome: "Coexistence possible if niches differentiate"
                        }
                    },
                    dataTable: [
                        ["Day", "P. aurelia alone", "P. caudatum alone", "Mixed - P. aurelia", "Mixed - P. caudatum"],
                        ["0", "25", "25", "25", "25"],
                        ["2", "50", "45", "48", "42"],
                        ["4", "95", "80", "90", "70"],
                        ["6", "170", "130", "165", "85"],
                        ["8", "240", "180", "235", "60"],
                        ["10", "280", "220", "285", "30"],
                        ["12", "295", "235", "300", "10"],
                        ["14", "300", "240", "305", "3"],
                        ["16", "305", "245", "310", "0"],
                        ["Note:", "Stable", "Stable", "P. aurelia wins", "Excluded"]
                    ],
                    graphing: {
                        xAxis: "Time (days)",
                        yAxis: "Population density (individuals/mL)",
                        lines: [
                            "P. aurelia alone (blue solid line)",
                            "P. caudatum alone (red solid line)",
                            "P. aurelia in mixed (blue dashed line)",
                            "P. caudatum in mixed (red dashed line, goes to zero)"
                        ],
                        observation: "P. caudatum declines and is excluded when P. aurelia present"
                    },
                    observations: [
                        "Both species grow well when cultured separately (no competition)",
                        "When together (homogeneous environment), P. aurelia increases while P. caudatum declines",
                        "P. caudatum is eventually excluded (goes extinct in culture) after ~2 weeks",
                        "P. aurelia reaches similar carrying capacity whether alone or with P. caudatum (eventually)",
                        "Competitive exclusion demonstrates that complete competitors cannot coexist"
                    ],
                    analysis: {
                        competitiveExclusion: "Complete competitors (species using identical resources in identical ways) cannot coexist indefinitely; competitively superior species excludes the other",
                        mechanism: {
                            Paurelia: "Faster reproduction rate (divides ~2x/day vs 1.5x/day for P. caudatum)",
                            consequence: "Even slight advantage compounds over time (exponential growth)",
                            resource: "Both eat bacteria; P. aurelia depletes food faster, P. caudatum starves"
                        },
                        realizediNiche: "P. caudatum fundamental niche includes entire culture, but realized niche is zero when P. aurelia present (competitively excluded)",
                        coexistence: {
                            conditions: "Species can coexist if:",
                            nichePartitioning: "Use different resources or same resource differently",
                            spatial: "Occupy different microhabitats (P. caudatum in sediment, P. aurelia in water column)",
                            temporal: "Active at different times",
                            tradeoffs: "Each is superior in different aspect (P. caudatum better in low food, P. aurelia better in high food)"
                        },
                        mathematicalModel: {
                            lotkaVolterra: "Competition equations: dN₁/dt = r₁N₁((K₁ - N₁ - α₁₂N₂)/K₁)",
                            explanation: "α₁₂ = competition coefficient (effect of species 2 on species 1)",
                            prediction: "If α₁₂ > K₁/K₂ and α₂₁ > K₂/K₁, one species excludes other",
                            coexistence: "Requires intraspecific competition > interspecific competition"
                        }
                    },
                    connectionToGause: {
                        originalExperiments: "Gause (1934) performed exactly this experiment; demonstrated competitive exclusion quantitatively",
                        findings: "P. aurelia always outcompeted P. caudatum in homogeneous cultures",
                        extension: "Gause also showed coexistence possible when niches differ (fed P. caudatum on bacteria in sediment, P. aurelia on suspended bacteria)",
                        principle: "Formulated Competitive Exclusion Principle (Gause's Law): Complete competitors cannot coexist",
                        impact: "Explained Darwin's observation that similar species rarely overlap; laid foundation for niche theory"
                    },
                    implications: {
                        nicheTheory: "Species must differentiate ecologically to coexist; explains resource partitioning",
                        characterDisplacement: "Competing species evolve to become more different (reduces competition)",
                        communityStructure: "Limits on similarity; species packing depends on niche differentiation",
                        conservation: "Introduces species may outcompete natives if niches overlap",
                        invasiveSpecies: "Successful invaders often exploit unused niche or outcompete weak natives"
                    },
                    conclusions: [
                        "Two species cannot occupy the same niche indefinitely; one will exclude the other",
                        "P. aurelia outcompetes P. caudatum due to higher reproductive rate in this system",
                        "Coexistence requires niche differentiation (resource partitioning)",
                        "Competitive exclusion is a fundamental principle governing species diversity and community structure",
                        "Laboratory experiments can test and confirm ecological theories"
                    ],
                    realWorldExamples: [
                        "Red vs grey squirrels in Britain: Grey squirrels outcompeting native red squirrels",
                        "Zebra mussels vs native mussels in Great Lakes: Zebra mussels filter food more efficiently",
                        "Cheetahs vs other predators: Cheetahs hunt at different times (daytime) to avoid larger predators",
                        "Warblers in spruce trees: Five warbler species coexist by feeding in different parts of tree (MacArthur, 1958)",
                        "Darwin's finches: Beak sizes evolved to use different seed sizes (character displacement)"
                    ],
                    extensions: [
                        "Test different initial population ratios; does outcome change?",
                        "Vary food quantity; does exclusion happen faster with limited food?",
                        "Create heterogeneous environment (stratified sediment) and test coexistence",
                        "Use different species pairs (Paramecium bursaria + P. aurelia; bursaria has symbiotic algae, may coexist)",
                        "Measure resource (bacteria) levels over time; show depletion by Paramecium",
                        "Model results with Lotka-Volterra competition equations; estimate competition coefficients",
                        "Investigate effect of disturbance (periodic removal of individuals); does it allow coexistence?"
                    ],
                    limitations: [
                        "Simplified laboratory system; nature more complex (many resources, spatial heterogeneity, predators)",
                        "Counting small organisms under microscope is tedious and imprecise",
                        "Cultures can become contaminated (other protists, fungi)",
                        "Takes 2-3 weeks; requires consistent maintenance",
                        "Difficult to distinguish species; requires practice"
                    ],
                    troubleshooting: [
                        "Both species die: Food insufficient or toxins accumulated; use fresh medium, more frequent medium changes",
                        "No exclusion observed: May need longer time, or niches may be sufficiently different; check species identification",
                        "Populations crash: Contamination or oxygen depletion; start over with fresh cultures and medium",
                        "Can't count Paramecium: Use methylcellulose to slow; adjust microscope lighting; practice",
                        "Irregular growth: Ensure temperature and food consistent"
                    ]
                }
            },

            // ========================================
            // COMMUNITY ECOLOGY EXPERIMENTS
            // ========================================
            
            paine_keystone_species: {
                name: "Paine's Keystone Species Concept - Experimental Test in Rocky Intertidal",
                relatedTopics: ['community_ecology', 'biodiversity'],
                category: 'species_interactions',
                historicalBackground: {
                    scientist: "Robert T. Paine",
                    year: "1966",
                    location: "Mukkaw Bay, Washington (rocky intertidal zone)",
                    organism: "Sea star Pisaster ochraceus (ochre star)",
                    experiment: "Removed all Pisaster from experimental plots; monitored community changes",
                    discovery: "Removal of sea star (top predator) drastically reduced species diversity",
                    mechanism: "Pisaster eats mussels (Mytilus), the dominant competitor for space; without Pisaster, mussels excluded other species",
                    result: "Species richness dropped from 15 to 8 species in removal plots",
                    concept: "Coined term 'keystone species': species whose impact on community greatly exceeds what would be predicted from abundance",
                    analogy: "Like keystone in arch: not largest stone, but removal causes collapse",
                    significance: "Revolutionized community ecology; showed predators can increase diversity (not just reduce prey)",
                    legacy: "Keystone species concept central to conservation biology; guides protection priorities",
                    impact: "Challenged prevailing view that dominant species (most abundant) most important"
                },
                labExperiment: {
                    title: "Simulating Keystone Species Removal in Model Communities",
                    hypothesis: "Removal of a keystone species (predator that controls dominant competitor) will decrease species diversity as the dominant competitor excludes other species",
                    purpose: "Demonstrate keystone species concept using a model system or field observations; understand how predators can maintain diversity",
                    background: {
                        keystoneSpecies: "Species with disproportionately large effect on community structure relative to abundance",
                        mechanism: "Typically predators that control dominant competitors, allowing inferior competitors to persist",
                        trophicCascade: "Top-down effect of predators on multiple trophic levels",
                        alternative: "Without keystone species, dominant competitor monopolizes resources (competitive exclusion)",
                        diversity: "Keystone predators increase diversity by preventing competitive exclusion"
                    },
                    variables: {
                        independent: "Presence/absence of keystone species (predator)",
                        dependent: "Species richness and diversity in community",
                        controlled: ["Environment (habitat type)", "Time", "Area sampled", "Disturbance"]
                    },
                    materials: [
                        "OPTION 1 - Field Study (rocky intertidal):",
                        "  Transect tapes and quadrats (0.25 m² or 1 m²)",
                        "  Identification guides for intertidal organisms",
                        "  Data sheets and clipboard",
                        "  Camera for documentation",
                        "  Tide tables",
                        "  Waders or boots",
                        "",
                        "OPTION 2 - Model Community (classroom simulation):",
                        "  Large tray or tub (ecosystem arena)",
                        "  Model organisms (cards, tiles, or tokens representing species):",
                        "    - Dominant competitor (e.g., mussels - blue squares)",
                        "    - Inferior competitors (e.g., barnacles, algae - various colors)",
                        "    - Keystone predator (e.g., sea star - star-shaped token)",
                        "  Dice (for random placement and interaction outcomes)",
                        "  Graph paper or gridded area",
                        "",
                        "OPTION 3 - Computer Simulation:",
                        "  Computer with ecological modeling software or spreadsheet",
                        "  Lotka-Volterra predator-prey-competitor models"
                    ],
                    safetyPrecautions: [
                        "Field work:",
                        "  Check tide tables; work during low tide only",
                        "  Be aware of wave action; stay alert",
                        "  Wear appropriate footwear (slippery rocks)",
                        "  Do not remove organisms; observational study only",
                        "  Respect wildlife; minimize disturbance",
                        "",
                        "Classroom: Standard lab safety"
                    ],
                    procedure: [
                        "OPTION 1: FIELD OBSERVATIONAL STUDY",
                        "(Mimics Paine's approach, but non-manipulative)",
                        "",
                        "Site Selection:",
                        "  Find rocky intertidal area accessible at low tide",
                        "  Identify areas with and without keystone predator (e.g., sea stars in some areas, absent in others due to natural variation)",
                        "  Alternative: Find areas where predator has been naturally excluded (wave-exposed vs protected, high vs low shore)",
                        "",
                        "Establish Plots:",
                        "  'Control' plots: Areas with keystone predator present",
                        "  'Removal' plots: Areas where predator naturally absent",
                        "  Use at least 5 replicate 1 m² quadrats per treatment",
                        "",
                        "Survey Species:",
                        "  Place quadrat randomly within plot",
                        "  Identify and count all species present",
                        "    - Sessile organisms: Mussels, barnacles, algae, sea anemones",
                        "    - Mobile organisms: Sea stars, snails, limpets, crabs, etc.",
                        "  Estimate percent cover for sessile organisms",
                        "  Record presence/absence and abundance",
                        "  Take photos for documentation",
                        "  Repeat for all quadrats",
                        "",
                        "Data Collection:",
                        "  Record species richness (number of species) per quadrat",
                        "  Record dominant competitor abundance (e.g., mussel cover %)",
                        "  Calculate diversity indices (Shannon, Simpson)",
                        "  Compare control vs removal plots",
                        "",
                        "",
                        "OPTION 2: CLASSROOM MODEL SIMULATION",
                        "(Board game-style demonstration of keystone species effect)",
                        "",
                        "Setup:",
                        "  Create gridded playing area (e.g., 10×10 grid representing space on rock)",
                        "  Each grid square can be occupied by one organism",
                        "",
                        "Species Rules:",
                        "  Dominant Competitor (Mussels - blue):",
                        "    - Grows/spreads aggressively (can colonize 2 adjacent squares per turn)",
                        "    - Outcompetes all other species (replaces them if adjacent)",
                        "    - Can occupy up to 70% of grid if unchecked",
                        "  ",
                        "  Inferior Competitors (Barnacles, algae - various colors):",
                        "    - Grow slowly (1 square per turn)",
                        "    - Displaced by mussels if adjacent",
                        "    - Can coexist with each other",
                        "    - 5-8 different species",
                        "  ",
                        "  Keystone Predator (Sea Star - star token):",
                        "    - Moves 2 squares per turn",
                        "    - Eats mussels preferentially (removes 1 mussel per turn)",
                        "    - Prevents mussel dominance",
                        "",
                        "SCENARIO 1 - Predator Present (Control):",
                        "  Initial setup:",
                        "    - Place 5 mussels randomly",
                        "    - Place 10 inferior competitors (mixed species) randomly",
                        "    - Place 2 sea stars randomly",
                        "  ",
                        "  Each turn (represents 1 month):",
                        "    1. Mussels spread to adjacent empty squares (up to 2 per mussel)",
                        "    2. Inferior competitors spread to adjacent empty squares (1 per species)",
                        "    3. Mussels displace adjacent inferior competitors (roll die: 5-6 = displacement)",
                        "    4. Sea stars move and eat mussels (remove 1 mussel per sea star)",
                        "    5. Record species richness (number of different colored squares occupied)",
                        "  ",
                        "  Run for 20 turns",
                        "  Record species richness each turn",
                        "",
                        "SCENARIO 2 - Predator Absent (Removal):",
                        "  Initial setup: Same as Scenario 1 but WITHOUT sea stars",
                        "  ",
                        "  Each turn:",
                        "    1-3. Same as above (mussels and other species spread and compete)",
                        "    4. SKIP (no predator)",
                        "    5. Record species richness",
                        "  ",
                        "  Run for 20 turns",
                        "  Record species richness each turn",
                        "",
                        "Data Analysis:",
                        "  Plot species richness over time for both scenarios",
                        "  Calculate final species richness and diversity",
                        "  Compare mussel cover % at end of experiment",
                        "  Statistical test: t-test comparing richness between scenarios",
                        "",
                        "",
                        "OPTION 3: DETAILED FIELD EXPERIMENT (Advanced)",
                        "(Actual manipulative removal - requires permits and training)",
                        "",
                        "WARNING: This is Paine's original experiment; requires:",
                        "  - Research permits",
                        "  - Ethical approval",
                        "  - Training in intertidal ecology",
                        "  - Long-term commitment (monitor for months to years)",
                        "  - NOT recommended for typical classroom",
                        "",
                        "Brief Outline (for information only):",
                        "  1. Establish control and removal plots (matched pairs)",
                        "  2. Survey initial species composition (baseline)",
                        "  3. Remove ALL sea stars from removal plots weekly",
                        "  4. Leave control plots untouched",
                        "  5. Survey both plots monthly for 1-2 years",
                        "  6. Record species richness, mussel cover, community composition",
                        "  7. Analyze changes over time",
                        "",
                        "Expected Result: Removal plots become mussel monocultures; control plots remain diverse"
                    ],
                    expectedResults: {
                        withPredator_Control: {
                            speciesRichness: "High (12-15 species in Paine's original study)",
                            dominantCompetitor: "Mussels present but patchy (20-40% cover)",
                            inferiorCompetitors: "Barnacles, algae, anemones, chitons present",
                            mechanism: "Sea stars eat mussels, create space for other species",
                            diversity: "High Shannon index (H' ~2.5-3.0)",
                            stability: "Community relatively stable over time"
                        },
                        withoutPredator_Removal: {
                            speciesRichness: "Low (8 species in Paine's study after 1 year)",
                            dominantCompetitor: "Mussels dominate (60-90% cover)",
                            inferiorCompetitors: "Most species excluded (crowded out)",
                            mechanism: "Without predation, mussels monopolize space via competitive exclusion",
                            diversity: "Low Shannon index (H' ~1.5-2.0)",
                            decline: "Diversity decreases over months as mussels spread"
                        },
                        classroomModel: {
                            withPredator: "Species richness remains 6-8 species throughout simulation",
                            withoutPredator: "Species richness declines from 8 to 2-3 species; mussels cover 70-90% of grid by turn 20"
                        }
                    },
                    dataTable: [
                        ["Time (months)", "Control - Richness", "Control - Mussel %", "Removal - Richness", "Removal - Mussel %"],
                        ["0 (Baseline)", "15", "25", "15", "25"],
                        ["1", "15", "22", "14", "35"],
                        ["2", "14", "24", "13", "45"],
                        ["3", "15", "26", "12", "55"],
                        ["6", "14", "23", "10", "68"],
                        ["9", "15", "25", "9", "75"],
                        ["12", "14", "27", "8", "82"],
                        ["", "", "", "", ""],
                        ["Summary:", "Stable ~15", "Stable ~25%", "Declines to 8", "Increases to 80%"]
                    ],
                    graphing: {
                        graph1: {
                            title: "Species Richness Over Time",
                            xAxis: "Time (months)",
                            yAxis: "Number of Species",
                            lines: [
                                "Control (with predator): Relatively flat line around 14-15 species",
                                "Removal (no predator): Declining line from 15 to 8 species"
                            ]
                        },
                        graph2: {
                            title: "Mussel Cover Over Time",
                            xAxis: "Time (months)",
                            yAxis: "Percent Cover of Mussels",
                            lines: [
                                "Control: Stable around 25%",
                                "Removal: Increases from 25% to 80-90%"
                            ]
                        }
                    },
                    observations: [
                        "Control plots maintain high diversity with keystone predator present",
                        "Removal plots show dramatic decline in species richness over time",
                        "Mussels (dominant competitor) increase dramatically in absence of predator",
                        "Inferior competitors (barnacles, algae, etc.) excluded by mussel overgrowth",
                        "Predator presence maintains community diversity by preventing competitive exclusion",
                        "Effect is indirect: predator doesn't eat inferior competitors, but prevents their exclusion by eating dominant competitor"
                    ],
                    analysis: {
                        keystoneConcept: {
                            definition: "Keystone species has disproportionately large effect on community relative to its abundance",
                            characteristic: "Removal causes major community restructuring",
                            contrast: "Removing abundant species has proportional effect; removing keystone has massive effect",
                            example: "Sea stars are relatively uncommon (~1-2 per m²) but maintain 15 species; removal reduces to 8 species"
                        },
                        mechanismOfAction: {
                            step1: "Pisaster preys preferentially on mussels (Mytilus californianus)",
                            step2: "Mussels are best competitors for space (fast-growing, can overgrow/smother other species)",
                            step3: "Predation keeps mussel population in check, creates open space",
                            step4: "Open space colonized by competitively inferior but diverse species (barnacles, algae, anemones, etc.)",
                            step5: "Without predation, mussels reach carrying capacity, exclude most other species",
                            keyInsight: "Predator increases diversity by preventing competitive exclusion"
                        },
                        competitiveHierarchy: {
                            best: "Mussels (but eaten by sea stars)",
                            intermediate: "Barnacles (Balanus), goose barnacles",
                            poor: "Algae, anemones, chitons, limpets",
                            result: "Without predation on top competitor, hierarchy plays out to monoculture"
                        },
                        trophicCascade: {
                            definition: "Effect of predator cascades down through multiple trophic levels/species",
                            pathway: "Sea star → Mussels ↓ → Space available ↑ → Barnacles/algae/other species ↑",
                            topDown: "This is top-down control (predator regulates community structure)",
                            contrast: "Bottom-up control would be resource availability determining structure"
                        },
                        diversityMaintenance: {
                            intermediateDisturbance: "Predation acts as 'intermediate disturbance', preventing competitive exclusion",
                            patchiness: "Predation creates spatial mosaic (patches at different successional stages)",
                            coexistence: "Allows coexistence of species that would otherwise be competitively excluded"
                        }
                    },
                    connectionToPaine: {
                        originalStudy: {
                            location: "Makah Bay and Mukkaw Bay, Washington (1963-1973)",
                            method: "Removed all Pisaster ochraceus from 8×2 m plots; monitored control plots",
                            duration: "10+ years of observations",
                            results: "Richness: 15 → 8 species after 1 year; mussels dominated >80% cover"
                        },
                        publication: "Paine, R.T. (1966). Food web complexity and species diversity. American Naturalist 100:65-75.",
                        terminology: "Coined 'keystone species' in 1969 paper",
                        impact: "One of most influential experiments in ecology; >5,000 citations",
                        broader_findings: {
                            complexity: "Complex food webs maintain diversity",
                            predation: "Predators can increase prey diversity (counterintuitive)",
                            conservation: "Protect keystone species to maintain entire community"
                        }
                    },
                    otherKeystoneExamples: [
                        {
                            species: "Sea otters (Enhydra lutris)",
                            ecosystem: "Kelp forests, Pacific coast",
                            mechanism: "Eat sea urchins; without otters, urchins overgraze kelp → 'urchin barrens'",
                            result: "Otters maintain kelp forests; support hundreds of species",
                            restoration: "Reintroduction of sea otters restored kelp forest ecosystems"
                        },
                        {
                            species: "Wolves (Canis lupus)",
                            ecosystem: "Yellowstone National Park",
                            mechanism: "Prey on elk; reduce browsing pressure on willow/aspen",
                            result: "Wolf reintroduction (1995) allowed tree regeneration; benefited beavers, songbirds, etc.",
                            cascade: "Wolves → Elk ↓ → Willows ↑ → Beavers ↑ → Wetlands ↑ → Multiple species ↑"
                        },
                        {
                            species: "African elephants (Loxodonta africana)",
                            ecosystem: "African savanna",
                            mechanism: "Knock down trees, maintain grasslands",
                            result: "Without elephants, woodland encroaches; savanna species decline",
                            balance: "Elephants maintain mosaic of woodland and grassland"
                        },
                        {
                            species: "Beavers (Castor canadensis)",
                            ecosystem: "Temperate streams and rivers",
                            mechanism: "Build dams, create wetlands",
                            result: "Increase habitat diversity; benefit fish, amphibians, birds, invertebrates",
                            engineering: "Ecosystem engineer; physically create habitat"
                        },
                        {
                            species: "Starfish (Pisaster giganteus)",
                            ecosystem: "Intertidal zones, Pacific",
                            mechanism: "Similar to P. ochraceus; prey on mussels",
                            result: "Maintain diversity; prevent mussel monocultures"
                        },
                        {
                            species: "Parrotfish",
                            ecosystem: "Coral reefs",
                            mechanism: "Graze algae on coral; prevent algal overgrowth",
                            result: "Maintain coral health; overfishing of parrotfish → algal blooms → coral decline"
                        }
                    ],
                    typesOfKeystoneSpecies: {
                        predator: "Controls dominant competitors (sea stars, wolves, sea otters)",
                        mutualist: "Critical for many species (pollinators, seed dispersers like fruit bats)",
                        engineer: "Creates/modifies habitat (beavers, elephants, corals)",
                        plant: "Provides critical resource (fig trees in tropics produce fruit year-round)"
                    },
                    conservationImplications: {
                        priority: "Identify and protect keystone species; their loss has cascading effects",
                        restoration: "Reintroducing keystone species can restore ecosystem function (wolves in Yellowstone, sea otters)",
                        managementError: "Historically, predators were culled; now recognized as essential",
                        monitoring: "Monitor keystone species as indicators of ecosystem health",
                        legal: "Some keystone species have special protection status (Marine Mammal Protection Act protects sea otters)"
                    },
                    conclusions: [
                        "Keystone species have disproportionately large effects on community structure and diversity",
                        "Predators can increase prey diversity by preventing competitive exclusion",
                        "Removal of keystone species causes major community reorganization and diversity loss",
                        "Not all species are equal in importance; some have outsized ecological roles",
                        "Paine's experiment demonstrated that species interactions, not just species presence, determine community structure",
                        "Keystone species concept is crucial for effective conservation and management"
                    ],
                    realWorldApplications: [
                        "Wildlife reintroduction programs (wolves, sea otters, predators)",
                        "Marine protected areas (protect key predators)",
                        "Coral reef conservation (protect parrotfish from overfishing)",
                        "Predicting ecosystem collapse from species loss",
                        "Prioritizing species for conservation funding",
                        "Understanding trophic cascades and ecosystem resilience"
                    ],
                    extensions: [
                        "Identify keystone species in local ecosystem; predict effects of removal",
                        "Compare communities with and without specific predator in different ecosystems",
                        "Model trophic cascades mathematically (Lotka-Volterra with multiple species)",
                        "Investigate historical cases of ecosystem collapse after predator removal",
                        "Study species interaction networks; identify keystone species by network analysis",
                        "Design conservation plan for ecosystem prioritizing keystone species protection"
                    ],
                    limitations: [
                        "Keystone effect may vary with environmental conditions (some contexts stronger than others)",
                        "Defining 'keystone' can be subjective; quantitative metrics still debated",
                        "Manipulative field experiments difficult, require permits, long-term commitment",
                        "Classroom models oversimplify complex natural interactions",
                        "Identifying keystone species requires extensive ecological knowledge of system"
                    ],
                    troubleshooting: [
                        "Field study: If no difference between control and removal areas, may be too short time period, or predator may not be keystone in that system",
                        "Classroom model: If mussels don't dominate in removal scenario, increase their competitive advantage (spread rate, displacement success)",
                        "No diversity loss: Ensure dominant competitor is actually superior; may need to adjust rules",
                        "Too rapid exclusion: Slow down mussel growth rate to show gradual decline in diversity"
                    ]
                }
            },

            // ========================================
            // BIODIVERSITY MEASUREMENT EXPERIMENT
            // ========================================
            
            shannon_diversity_index: {
                name: "Shannon Diversity Index - Quantifying Biodiversity in Communities",
                relatedTopics: ['biodiversity', 'community_ecology'],
                category: 'biodiversity_measurement',
                historicalBackground: {
                    scientist: "Claude Shannon",
                    year: "1948",
                    originalField: "Information theory and telecommunications",
                    publication: "A Mathematical Theory of Communication",
                    originalPurpose: "Quantify uncertainty/information content in messages",
                    ecologicalAdaptation: "Applied to ecology in 1960s-1970s to measure species diversity",
                    adaptors: "E.H. Simpson (1949) and later ecologists adapted information theory to biodiversity",
                    formula: "H' = -Σ(pᵢ × ln(pᵢ)) where pᵢ = proportion of species i",
                    interpretation: "Higher H' = more diverse community (more uncertainty in 'guessing' which species a random individual belongs to)",
                    significance: "Provided quantitative, standardized way to compare diversity across ecosystems",
                    comparison: "More sensitive to rare species than Simpson index; most widely used diversity metric",
                    legacy: "Standard metric in ecology, conservation biology, biodiversity monitoring, environmental impact assessment"
                },
                labExperiment: {
                    title: "Measuring and Comparing Biodiversity Using Shannon and Simpson Indices",
                    hypothesis: "Communities with more species and/or more even species abundances will have higher diversity indices, and these indices will detect differences in diversity that simple species richness counts may miss",
                    purpose: "Learn to measure biodiversity using diversity indices; compare diversity of different habitats or communities",
                    background: {
                        whyNotJustRichness: "Species richness (number of species) ignores relative abundance; community with one dominant species differs from community with evenly distributed species",
                        evenness: "How evenly individuals are distributed among species",
                        diversityIndices: "Combine richness and evenness into single metric",
                        shannonIndex: "Based on entropy; measures uncertainty in species identity",
                        simpsonIndex: "Probability two randomly selected individuals are different species"
                    },
                    variables: {
                        independent: "Habitat/community type (e.g., forest vs meadow, pristine vs disturbed)",
                        dependent: "Biodiversity (species richness, Shannon H', Simpson D, evenness)",
                        controlled: ["Sampling effort", "Area sampled", "Time of sampling", "Observer"]
                    },
                    materials: [
                        "Field sampling:",
                        "  Quadrats (0.25 m² to 1 m² for plants) or transect tape",
                        "  Collection nets (sweep net for insects, aquatic net for pond organisms)",
                        "  Identification guides (field guides for plants, insects, birds, etc.)",
                        "  Data sheets and clipboard",
                        "  Hand lens or magnifying glass",
                        "  Camera for documentation",
                        "  Optional: GPS for location recording",
                        "",
                        "Data analysis:",
                        "  Calculator (or computer with spreadsheet software)",
                        "  Graph paper or computer for graphing",
                        "  Statistical software (optional)"
                    ],
                    safetyPrecautions: [
                        "Be aware of surroundings (wildlife, terrain)",
                        "Avoid harmful plants (poison ivy, stinging nettles)",
                        "Wear appropriate clothing and sun protection",
                        "Work in pairs or groups in field",
                        "Obtain necessary permits for sampling protected areas",
                        "Do not harm or remove organisms unless necessary; observational study preferred"
                    ],
                    procedure: [
                        "SITE SELECTION:",
                        "Choose 2-3 different habitats to compare, such as:",
                        "  - Forest vs meadow",
                        "  - Pristine vs disturbed habitat",
                        "  - Different successional stages",
                        "  - Urban vs rural",
                        "  - Different soil types",
                        "",
                        "Ensure sites are comparable in:",
                        "  - Area sampled",
                        "  - Sampling effort",
                        "  - Time of day/season",
                        "",
                        "SAMPLING DESIGN:",
                        "Quadrat method (for plants, sessile invertebrates):",
                        "  - Randomly place 10-20 quadrats in each habitat",
                        "  - Record all species in each quadrat",
                        "  - Count number of individuals per species (or estimate % cover for plants)",
                        "",
                        "Transect method (for mobile organisms):",
                        "  - Walk transect (e.g., 50-100 m) through habitat",
                        "  - Record all species encountered within set distance of transect (e.g., 5 m on each side)",
                        "  - Note abundance of each species",
                        "",
                        "Sweep net/collection (for insects):",
                        "  - Perform standardized sweep net sampling (e.g., 100 sweeps)",
                        "  - Identify and count all insects collected",
                        "  - Release unharmed if possible",
                        "",
                        "Point count (for birds):",
                        "  - Stand at point for fixed time (e.g., 10 minutes)",
                        "  - Record all bird species seen or heard",
                        "  - Estimate abundance",
                        "",
                        "DATA RECORDING:",
                        "For each habitat, create table:",
                        "  Species | Number of Individuals (n) | Notes",
                        "",
                        "Record:",
                        "  - Species name (or assign code if unknown; identify later)",
                        "  - Number of individuals of each species",
                        "  - Total number of individuals sampled (N)",
                        "",
                        "Example data:",
                        "  Habitat A (Meadow):",
                        "    Species A: 45 individuals",
                        "    Species B: 38 individuals",
                        "    Species C: 25 individuals",
                        "    Species D: 12 individuals",
                        "    Species E: 10 individuals",
                        "    Total N = 130 individuals, S = 5 species",
                        "",
                        "CALCULATE DIVERSITY INDICES:",
                        "",
                        "1. Species Richness (S):",
                        "   S = total number of species",
                        "   Simple count",
                        "",
                        "2. Shannon Diversity Index (H'):",
                        "   Formula: H' = -Σ(pᵢ × ln(pᵢ))",
                        "   where pᵢ = nᵢ/N = proportion of individuals of species i",
                        "",
                        "   Steps:",
                        "   a. Calculate proportion (pᵢ) for each species:",
                        "      pᵢ = nᵢ / N",
                        "   b. Calculate ln(pᵢ) for each species (natural log)",
                        "   c. Calculate pᵢ × ln(pᵢ) for each species",
                        "   d. Sum all (pᵢ × ln(pᵢ)) values",
                        "   e. Multiply sum by -1 to get H'",
                        "",
                        "   Example calculation (Habitat A):",
                        "   Species A: p = 45/130 = 0.346",
                        "     ln(0.346) = -1.061",
                        "     p × ln(p) = 0.346 × (-1.061) = -0.367",
                        "   Species B: p = 38/130 = 0.292",
                        "     ln(0.292) = -1.231",
                        "     p × ln(p) = -0.360",
                        "   Species C: p = 25/130 = 0.192",
                        "     ln(0.192) = -1.649",
                        "     p × ln(p) = -0.317",
                        "   Species D: p = 12/130 = 0.092",
                        "     ln(0.092) = -2.386",
                        "     p × ln(p) = -0.220",
                        "   Species E: p = 10/130 = 0.077",
                        "     ln(0.077) = -2.565",
                        "     p × ln(p) = -0.197",
                        "",
                        "   Sum = -0.367 + (-0.360) + (-0.317) + (-0.220) + (-0.197) = -1.461",
                        "   H' = -1 × (-1.461) = 1.461",
                        "",
                        "3. Maximum Shannon Diversity (H'max):",
                        "   H'max = ln(S)",
                        "   This is maximum possible H' if all species equally abundant",
                        "   Example: H'max = ln(5) = 1.609",
                        "",
                        "4. Evenness (E):",
                        "   E = H' / H'max",
                        "   Ranges from 0 to 1; 1 = perfectly even",
                        "   Example: E = 1.461 / 1.609 = 0.908",
                        "",
                        "5. Simpson Diversity Index (D):",
                        "   Formula: D = Σ(nᵢ/N)² or D = Σpᵢ²",
                        "   This is Simpson's Dominance; high D = low diversity",
                        "",
                        "   Simpson's Index of Diversity: 1 - D",
                        "   Ranges 0-1; higher = more diverse",
                        "",
                        "   Example calculation:",
                        "   Species A: (45/130)² = 0.120",
                        "   Species B: (38/130)² = 0.085",
                        "   Species C: (25/130)² = 0.037",
                        "   Species D: (12/130)² = 0.009",
                        "   Species E: (10/130)² = 0.006",
                        "   D = 0.120 + 0.085 + 0.037 + 0.009 + 0.006 = 0.257",
                        "   Simpson's Index = 1 - D = 1 - 0.257 = 0.743",
                        "",
                        "COMPARE HABITATS:",
                        "Create table summarizing diversity metrics for each habitat:",
                        "  Metric | Habitat A | Habitat B | Habitat C",
                        "  Species Richness (S) | ... | ... | ...",
                        "  Shannon H' | ... | ... | ...",
                        "  Evenness E | ... | ... | ...",
                        "  Simpson 1-D | ... | ... | ...",
                        "",
                        "Interpret differences:",
                        "  - Which habitat is most diverse?",
                        "  - Are differences due to richness, evenness, or both?",
                        "  - What ecological factors might explain differences?",
                        "",
                        "STATISTICAL ANALYSIS (Optional):",
                        "  - Use t-test or ANOVA to compare H' between habitats",
                        "  - Bootstrap or jackknife methods to estimate confidence intervals",
                        "  - Rarefaction curves to account for different sample sizes"
                    ],
                    expectedResults: {
                        pristineHabitat: {
                            speciesRichness: "High (e.g., 20-30 plant species in temperate meadow)",
                            shannonH: "High (2.5-3.5 typical for diverse natural community)",
                            evenness: "Moderate to high (0.7-0.9)",
                            interpretation: "Many species, relatively evenly distributed"
                        },
                        disturbedHabitat: {
                            speciesRichness: "Lower (e.g., 10-15 species)",
                            shannonH: "Lower (1.5-2.5)",
                            evenness: "May be low if few weedy species dominate",
                            interpretation: "Fewer species, some dominant species"
                        },
                        urbanHabitat: {
                            speciesRichness: "Often low (invasive species, limited natives)",
                            shannonH: "Low to moderate (1.0-2.0)",
                            evenness: "Variable",
                            interpretation: "Low diversity, human-influenced species composition"
                        },
                        forestVsMeadow: {
                            forest: "High tree diversity (but fewer herb species in shaded understory); H' 2.0-3.0",
                            meadow: "High herb diversity; H' 2.5-3.5",
                            comparison: "Depends on region and sampling method"
                        }
                    },
                    dataTable: [
                        ["Habitat", "Richness (S)", "Shannon H'", "H'max", "Evenness E", "Simpson 1-D"],
                        ["Pristine meadow", "25", "2.95", "3.22", "0.92", "0.92"],
                        ["Disturbed field", "12", "1.85", "2.48", "0.75", "0.78"],
                        ["Urban park", "8", "1.45", "2.08", "0.70", "0.72"],
                        ["", "", "", "", "", ""],
                        ["Interpretation:", "Pristine meadow most diverse", "High richness and high evenness", "Urban park least diverse", "Low richness, moderate evenness", ""]
                    ],
                    interpretationGuide: {
                        shannonH: {
                            low: "0-1.5: Low diversity (few species or very uneven)",
                            moderate: "1.5-3.0: Moderate diversity (typical for many natural communities)",
                            high: "3.0-4.5: High diversity (many species, fairly even)",
                            veryHigh: ">4.5: Very high diversity (tropical rainforests, coral reefs)"
                        },
                        evenness: {
                            low: "0-0.4: Very uneven (one or few species dominate)",
                            moderate: "0.4-0.7: Moderately uneven",
                            high: "0.7-1.0: Even (species relatively similar in abundance)"
                        },
                        simpsonIndex: {
                            low: "0-0.5: Low diversity (high dominance)",
                            moderate: "0.5-0.8: Moderate diversity",
                            high: "0.8-1.0: High diversity (low dominance, many species)"
                        }
                    },
                    observations: [
                        "Shannon H' captures both richness and evenness in single metric",
                        "Two communities with same richness can differ in H' if evenness differs",
                        "Disturbed habitats often have lower diversity than undisturbed",
                        "Evenness is often as important as richness for overall diversity",
                        "Simpson index gives more weight to common species; Shannon more sensitive to rare species"
                    ],
                    analysis: {
                        whyUseIndices: [
                            "Richness alone is insufficient: Community A with 100 of species 1 and 1 each of 9 others (total 109) vs Community B with 11 each of 10 species (total 110) have same richness but very different diversity",
                            "Indices standardize comparisons across different sample sizes",
                            "Allow statistical comparisons between communities",
                            "Widely used, facilitating comparisons with literature values"
                        ],
                        shannonVsSimpson: {
                            shannon: {
                                sensitivity: "More sensitive to rare species",
                                calculation: "Uses natural log, emphasizes entropy",
                                range: "0 to ~5 (no upper limit theoretically, but rarely >5)",
                                use: "Most common in ecology"
                            },
                            simpson: {
                                sensitivity: "More sensitive to common species",
                                calculation: "Probability-based",
                                range: "0 to 1 (for 1-D version)",
                                use: "Easier to interpret (probability), but less common"
                            },
                            both: "Complement each other; often report both"
                        },
                        factorsAffectingDiversity: {
                            environmental: "Habitat heterogeneity, climate stability, productivity",
                            disturbance: "Intermediate disturbance hypothesis: moderate disturbance → maximum diversity",
                            area: "Larger areas support more species (species-area relationship)",
                            isolation: "Isolated habitats (islands) have lower diversity (colonization limited)",
                            succession: "Diversity changes over successional time; often peaks mid-succession",
                            humanImpact: "Pollution, habitat loss, invasive species reduce diversity"
                        }
                    },
                    connectionToShannon: {
                        informationTheory: "Shannon developed H to measure information content in messages",
                        entropy: "H measures entropy (uncertainty); in ecology, uncertainty about species identity",
                        analogy: "Low diversity = low uncertainty (likely to 'guess' species correctly); high diversity = high uncertainty",
                        adaptation: "Ecologists recognized that species diversity is analogous to information entropy",
                        universality: "Shannon index now used beyond ecology: economics, linguistics, genetics"
                    },
                    conclusions: [
                        "Diversity indices provide quantitative, standardized measures of biodiversity",
                        "Shannon H' combines species richness and evenness into single metric",
                        "Higher H' indicates more diverse community (more species, more evenly distributed)",
                        "Different habitats/communities can be objectively compared using these indices",
                        "Understanding diversity is essential for conservation, restoration, and environmental monitoring"
                    ],
                    realWorldApplications: [
                        "Conservation prioritization: Protect areas with high diversity",
                        "Environmental impact assessment: Compare diversity before/after disturbance",
                        "Restoration ecology: Monitor recovery (increasing H' indicates success)",
                        "Agriculture: Measure crop diversity, pest diversity (agricultural biodiversity)",
                        "Invasive species detection: Declining H' may indicate invasive species takeover",
                        "Climate change monitoring: Track changes in community composition and diversity over time",
                        "Ecological restoration: Set targets for desired diversity levels"
                    ],
                    extensions: [
                        "Compare diversity across environmental gradient (e.g., elevation, moisture)",
                        "Monitor seasonal changes in diversity",
                        "Investigate relationship between diversity and ecosystem function (productivity, stability)",
                        "Use rarefaction to compare communities with different sample sizes",
                        "Calculate beta diversity (turnover between communities)",
                        "Map diversity spatially using GIS",
                        "Investigate historical changes in diversity using museum specimens or literature",
                        "Conduct manipulative experiment: alter diversity and measure ecosystem response"
                    ],
                    limitations: [
                        "Requires accurate species identification (challenging for non-experts)",
                        "Sample size affects accuracy (larger samples more accurate)",
                        "Different taxa require different sampling methods (hard to compare plants vs insects)",
                        "Rare species may be missed (underestimate diversity)",
                        "Doesn't capture functional or phylogenetic diversity (species may be functionally similar)",
                        "Index value alone doesn't indicate which species present or community composition",
                        "May not detect invasive species if they're not yet dominant"
                    ],
                    troubleshooting: [
                        "Low sample size: Collect more data; use rarefaction to compare with larger samples",
                        "Difficult identification: Group similar species into morphospecies; or focus on easier groups (e.g., vascular plants)",
                        "Unequal sampling effort: Standardize time, area, or number of samples across sites",
                        "Seasonal variation: Sample same season each year; or sample multiple times to capture annual variation",
                        "H' seems too high/low: Check calculations; ensure natural log used (not log base 10); verify data entry"
                    ]
                }
            }
        };

        // Link experiments to topics
        this.linkExperimentsToTopics();
    }

    linkExperimentsToTopics() {
        Object.entries(this.ecosystemExperiments).forEach(([expId, experiment]) => {
            experiment.relatedTopics.forEach(topicId => {
                if (this.ecosystemTopics[topicId]) {
                    if (!this.ecosystemTopics[topicId].relatedExperiments) {
                        this.ecosystemTopics[topicId].relatedExperiments = [];
                    }
                    this.ecosystemTopics[topicId].relatedExperiments.push({
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
            energy_flow: {
                'Energy Transfer': [
                    'Thinking energy is recycled like nutrients (energy flows one-way, lost as heat)',
                    'Believing all energy comes from sun (chemosynthetic ecosystems exist)',
                    'Confusing energy flow with nutrient cycling (energy flows, nutrients cycle)',
                    'Thinking 10% rule is exact (actually varies 5-20%)',
                    'Believing more trophic levels = better (actually limited by energy)'
                ],
                'Food Webs': [
                    'Oversimplifying to linear food chains (real ecosystems are complex webs)',
                    'Thinking herbivores are always primary consumers (some eat algae = producers)',
                    'Forgetting decomposers (essential for recycling, often overlooked)',
                    'Believing top predators are most important (keystone species may be mid-level)'
                ]
            },
            
            nutrient_cycling: {
                'Cycling vs Flow': [
                    'Confusing nutrient cycling with energy flow (nutrients cycle, energy flows one-way)',
                    'Thinking nutrients are created/destroyed (they\'re transformed, conserved)',
                    'Believing only living things cycle nutrients (abiotic processes crucial)'
                ],
                'Nitrogen Cycle': [
                    'Thinking plants can use N₂ directly (they need NH₄⁺ or NO₃⁻)',
                    'Forgetting that N₂ is abundant but unusable (78% of atmosphere!)',
                    'Confusing nitrification with nitrogen fixation (opposite processes)',
                    'Believing all bacteria are decomposers (many are nitrogen fixers, nitrifiers, etc.)'
                ],
                'Carbon Cycle': [
                    'Thinking CO₂ is only in atmosphere (dissolved in ocean, stored in soil, rocks)',
                    'Believing photosynthesis only by plants (algae, cyanobacteria also)',
                    'Forgetting respiration returns CO₂ (both plants and animals respire)',
                    'Confusing organic vs inorganic carbon'
                ]
            },
            
            population_ecology: {
                'Population Growth': [
                    'Thinking populations always grow exponentially (limited by resources)',
                    'Believing carrying capacity is fixed (it varies with environment)',
                    'Confusing density-dependent with density-independent factors',
                    'Thinking all populations reach K (many fluctuate, crash before reaching K)'
                ],
                'Life History': [
                    'Believing r vs K is binary (it\'s a continuum)',
                    'Thinking all small organisms are r-selected (counterexamples exist)',
                    'Confusing reproductive rate with fitness (quality vs quantity trade-off)'
                ]
            },
            
            community_ecology: {
                'Species Interactions': [
                    'Thinking predation always reduces diversity (keystone predators increase diversity)',
                    'Believing competition always harmful (drives niche differentiation, coevolution)',
                    'Confusing parasitism with predation (parasites don\'t immediately kill host)',
                    'Thinking mutualism is altruistic (both benefit, not one-sided)'
                ],
                'Succession': [
                    'Believing climax community is permanent (disturbances reset succession)',
                    'Thinking succession is always predictable (stochastic events occur)',
                    'Confusing primary with secondary succession',
                    'Believing pioneer species are "inferior" (they\'re adapted for harsh conditions)'
                ]
            },
            
            biodiversity: {
                'Measurement': [
                    'Thinking species richness = diversity (evenness matters too)',
                    'Believing diversity indices are absolute (they\'re relative comparisons)',
                    'Confusing genetic, species, and ecosystem diversity (all important)',
                    'Thinking high richness always means healthy ecosystem (invasive species can inflate richness)'
                ],
                'Conservation': [
                    'Believing rare species are always most important (keystone species may be common)',
                    'Thinking diversity is always good (some ecosystems naturally low diversity)',
                    'Confusing endemic with endangered (endemic = limited range, not necessarily threatened)',
                    'Believing biodiversity loss is only about charismatic species (invertebrates, microbes crucial)'
                ]
            }
        };

        this.clarificationStrategies = {
            visual_diagrams: {
                method: 'Use flow diagrams for energy/nutrients, food webs',
                effectiveness: 'High for understanding complex interactions'
            },
            field_observations: {
                method: 'Direct observation of ecosystems',
                effectiveness: 'Very high for connecting concepts to reality'
            },
            mathematical_models: {
                method: 'Population growth equations, diversity indices',
                effectiveness: 'High for quantitative understanding'
            },
            experiments: {
                method: 'Lab and field experiments (Winogradsky, Gause, diversity surveys)',
                effectiveness: 'Very high for testing ecological principles'
            },
            case_studies: {
                method: 'Real-world examples (Yellowstone wolves, sea otter decline)',
                effectiveness: 'High for understanding conservation applications'
            }
        };
    }

    initializeMetacognitivePrompts() {
        this.metacognitivePrompts = {
            beforeLearning: [
                "What do you already know about ecosystems and how they function?",
                "What connections can you make between {topic} and your everyday observations of nature?",
                "What questions do you have about {topic}?",
                "Have you observed {topic} in your local environment?"
            ],
            duringLearning: [
                "How does this ecological concept connect to what you've learned about {related_concept}?",
                "Can you think of a local example of {ecological_process}?",
                "What would happen if {key_species} were removed from this ecosystem?",
                "How do human activities affect {topic}?"
            ],
            afterLearning: [
                "What were the most important ecological principles you learned about {topic}?",
                "How has your understanding of {ecosystem_concept} changed?",
                "What are the conservation implications of {topic}?",
                "How would you explain {topic} to a younger student or community member?"
            ],
            problemSolving: [
                "What ecological factors might be involved in this scenario?",
                "What data would you need to test this ecological hypothesis?",
                "Are there alternative explanations for this ecological pattern?",
                "How could you apply this knowledge to conservation or management?"
            ]
        };
    }

    initializeContextualScenarios() {
        this.contextualScenarios = {
            energy_flow: [
                {
                    scenario: "Declining Ocean Fish Stocks",
                    context: "Commercial fisheries collapsing worldwide despite fishing quotas",
                    application: "Overfishing removes top predators and mid-level fish; disrupts energy flow through marine food webs",
                    question: "Why is fishing at lower trophic levels (e.g., krill, sardines) potentially more sustainable than fishing top predators like tuna?"
                },
                {
                    scenario: "Biofuel Sustainability",
                    context: "Debate over corn-based ethanol vs gasoline",
                    application: "10% rule means energy loss at each trophic level; eating corn directly more efficient than feeding to cattle then eating beef; similarly, corn ethanol captures more solar energy than petroleum (ancient solar energy, many losses)",
                    question: "Why is biodiesel from algae potentially more energy-efficient than corn ethanol?"
                }
            ],
            
            nutrient_cycling: [
                {
                    scenario: "Gulf of Mexico Dead Zone",
                    context: "Massive hypoxic (low oxygen) zone in Gulf of Mexico appears every summer",
                    application: "Excess nitrogen from fertilizer runoff → algal blooms → decomposition depletes oxygen → fish kills",
                    question: "How does disrupting the nitrogen cycle cause dead zones?"
                },
                {
                    scenario: "Amazon Rainforest Fires",
                    context: "Burning Amazon rainforest for agriculture",
                    application: "Releases stored carbon, disrupts local water cycle, eliminates trees that cycle nutrients from deep soil",
                    question: "Why are tropical soils often poor for agriculture despite lush rainforest growth?"
                }
            ],
            
            population_ecology: [
                {
                    scenario: "Invasive Lionfish in Caribbean",
                    context: "Lionfish (native to Indo-Pacific) spreading rapidly in Caribbean since 1985",
                    application: "No natural predators, high reproductive rate, prey on native fish → exponential growth depleting native fish populations",
                    question: "What factors might eventually limit lionfish population growth in Caribbean?"
                },
                {
                    scenario: "China's One-Child Policy Impact",
                    context: "China's population control policy (1980-2015) and aging population",
                    application: "Reduced birth rate below replacement level → age pyramid becoming inverted → labor shortages, eldercare challenges",
                    question: "How do changes in age structure affect carrying capacity and societal sustainability?"
                }
            ],
            
            community_ecology: [
                {
                    scenario: "Yellowstone Wolf Reintroduction",
                    context: "Wolves extirpated 1926, reintroduced 1995",
                    application: "Wolves (keystone species) control elk → willows/aspen regenerate → beavers return → wetlands restored → benefits cascade through ecosystem",
                    question: "Why did the absence of wolves lead to ecosystem degradation?"
                },
                {
                    scenario: "Coral Reef Bleaching",
                    context: "Rising ocean temperatures causing mass coral bleaching events",
                    application: "Coral-zooxanthellae mutualism disrupted by heat stress → coral expels algae → loses food source → dies → reef ecosystem collapses",
                    question: "How does loss of coral (foundation species) affect reef biodiversity?"
                }
            ],
            
            biodiversity: [
                {
                    scenario: "Pollinator Decline",
                    context: "Global decline of bees, butterflies, and other pollinators",
                    application: "Loss of pollinator diversity → reduced crop yields (35% of crops depend on pollinators) → food security threat",
                    question: "Why is pollinator diversity more important than just abundance of a single species?"
                },
                {
                    scenario: "Madagascar Biodiversity Crisis",
                    context: "Madagascar (biodiversity hotspot) has lost >90% of forest; >80% of species endemic",
                    application: "Deforestation threatens unique species found nowhere else; extinction would be global loss",
                    question: "Why are biodiversity hotspots like Madagascar high priority for conservation funding?"
                }
            ]
        };
    }

    initializeAssessmentRubrics() {
        this.assessmentRubrics = {
            knowledgeLevel: {
                remember: {
                    description: "Recall ecological facts, terms, and concepts",
                    verbs: ["Define", "List", "Identify", "Name", "State", "Describe"],
                    example: "Define keystone species and give an example"
                },
                understand: {
                    description: "Explain ecological concepts and relationships",
                    verbs: ["Explain", "Summarize", "Compare", "Classify", "Interpret"],
                    example: "Explain how energy flows through a food web"
                },
                apply: {
                    description: "Use ecological knowledge in new situations",
                    verbs: ["Calculate", "Predict", "Apply", "Demonstrate", "Solve"],
                    example: "Calculate Shannon diversity index for a community"
                },
                analyze: {
                    description: "Examine ecological relationships and patterns",
                    verbs: ["Analyze", "Differentiate", "Compare", "Investigate", "Categorize"],
                    example: "Analyze how removing wolves affects Yellowstone ecosystem"
                },
                evaluate: {
                    description: "Judge ecological solutions and conservation strategies",
                    verbs: ["Evaluate", "Critique", "Assess", "Justify", "Recommend"],
                    example: "Evaluate the effectiveness of marine protected areas for biodiversity conservation"
                },
                create: {
                    description: "Design ecological studies and conservation plans",
                    verbs: ["Design", "Develop", "Create", "Plan", "Propose"],
                    example: "Design an experiment to test competitive exclusion in local community"
                }
            },
            
            ecologicalLiteracy: {
                novice: {
                    characteristics: ["Memorizes ecological terms", "Sees species in isolation", "Linear thinking about interactions"],
                    support: ["Use local examples", "Field trips", "Simple food chains before webs"]
                },
                developing: {
                    characteristics: ["Connects organisms to environment", "Recognizes basic interactions", "Understands simple cycles"],
                    support: ["Introduce complexity gradually", "Use systems thinking", "Experiments and data collection"]
                },
                proficient: {
                    characteristics: ["Systems thinking", "Understands multiple interactions", "Applies concepts to conservation"],
                    support: ["Case studies", "Research projects", "Community science involvement"]
                },
                expert: {
                    characteristics: ["Integrates across scales", "Predicts ecosystem responses", "Designs conservation strategies"],
                    support: ["Original research", "Policy analysis", "Mentoring others"]
                }
            }
        };
    }




    // ========================================
// DETAILED TOPIC HANDLER IMPLEMENTATIONS
// ========================================

handleEnergyFlow(problem) {
    const content = {
        topic: "Energy Flow in Ecosystems",
        category: 'ecosystem_function',
        summary: "Energy flows unidirectionally through ecosystems from the sun through producers, consumers, and decomposers, with approximately 90% lost as heat at each trophic level. This energy flow determines ecosystem structure and limits the number of trophic levels that can be supported.",
        
        fundamentalPrinciples: {
            firstLaw: {
                name: "First Law of Thermodynamics (Conservation of Energy)",
                statement: "Energy cannot be created or destroyed, only transformed from one form to another",
                ecologicalApplication: "Total energy in ecosystem remains constant, but changes form: solar → chemical → kinetic → heat",
                examples: [
                    "Solar energy captured by plants during photosynthesis → converted to chemical energy (glucose)",
                    "Chemical energy in plant tissue → transferred to herbivore when eaten",
                    "Chemical energy in food → converted to ATP (usable energy) + heat (lost)",
                    "Kinetic energy of running animal → heat dissipated to environment"
                ],
                implication: "Energy budget must balance: Input (solar) = Output (heat + stored biomass)"
            },
            secondLaw: {
                name: "Second Law of Thermodynamics (Entropy)",
                statement: "Energy transformations are inefficient; entropy (disorder) always increases",
                ecologicalApplication: "Each energy transfer loses energy as heat; no energy transfer is 100% efficient",
                efficiency: "Typical ecological efficiency: 5-20%, average ~10%",
                consequences: [
                    "Limits number of trophic levels (usually 4-5 maximum)",
                    "Top predators are rare (insufficient energy to support large populations)",
                    "Biomass decreases at higher trophic levels",
                    "Food chains are short compared to theoretical possibilities"
                ],
                explanation: "Every organism uses energy for metabolism (respiration), movement, growth, reproduction. Most of this energy is released as heat and cannot be recaptured. Only energy stored in new biomass can be passed to next trophic level."
            },
            unidirectionalFlow: {
                concept: "Energy flows in ONE direction through ecosystems (unlike nutrients which cycle)",
                pathway: "Sun → Producers → Primary Consumers → Secondary Consumers → Tertiary Consumers → Heat",
                cantRecycle: "Once energy becomes heat, it cannot be reused by organisms (unlike water, carbon, nitrogen which cycle)",
                externalInput: "Ecosystems require constant solar input; not self-sustaining for energy",
                comparison: {
                    energy: "Flows through (one-way street)",
                    nutrients: "Cycle within ecosystem (circular pathway)"
                }
            }
        },

        trophicStructure: {
            trophicLevels: {
                level1_producers: {
                    name: "Producers (Autotrophs)",
                    definition: "Organisms that produce their own food from inorganic materials",
                    energySource: "Sunlight (photoautotrophs) or chemicals (chemoautotrophs)",
                    process: {
                        photosynthesis: {
                            equation: "6 CO₂ + 6 H₂O + light energy → C₆H₁₂O₆ + 6 O₂",
                            efficiency: "Only 1-2% of solar radiation captured (most reflected or wrong wavelength)",
                            location: "Chloroplasts in plant cells",
                            products: "Glucose (stored as starch, cellulose, or used immediately)"
                        },
                        chemosynthesis: {
                            equation: "6 CO₂ + 6 H₂O + chemical energy (e.g., H₂S, NH₃) → C₆H₁₂O₆ + byproducts",
                            organisms: "Certain bacteria (sulfur bacteria, nitrifying bacteria)",
                            locations: "Deep sea vents, soil, caves",
                            significance: "Supports ecosystems without sunlight"
                        }
                    },
                    organisms: {
                        terrestrial: ["Trees", "Grasses", "Shrubs", "Mosses", "Ferns"],
                        aquatic: ["Phytoplankton (algae)", "Seaweeds", "Cyanobacteria", "Aquatic plants"],
                        microscopic: ["Cyanobacteria", "Green algae", "Diatoms"]
                    },
                    productivity: {
                        GPP: "Gross Primary Production = total photosynthesis rate (all carbon fixed)",
                        respiration: "Plants use 30-60% of GPP for their own respiration",
                        NPP: "Net Primary Production = GPP - plant respiration = energy available to consumers",
                        formula: "NPP = GPP - R_plants",
                        typical: "NPP is 40-80% of GPP depending on ecosystem"
                    },
                    ecosystemComparison: {
                        highestNPP: {
                            ecosystems: ["Tropical rainforests", "Estuaries", "Swamps and marshes", "Coral reefs"],
                            NPP: "2,000-2,500 g C/m²/year",
                            reasons: "Warm, wet, abundant nutrients, year-round growing season"
                        },
                        moderateNPP: {
                            ecosystems: ["Temperate forests", "Grasslands", "Agricultural lands"],
                            NPP: "600-1,200 g C/m²/year",
                            reasons: "Seasonal variation, moderate rainfall"
                        },
                        lowestNPP: {
                            ecosystems: ["Deserts", "Tundra", "Open ocean"],
                            NPP: "100-200 g C/m²/year",
                            reasons: "Water limitation (desert), temperature limitation (tundra), nutrient limitation (ocean)"
                        }
                    }
                },
                
                level2_primaryConsumers: {
                    name: "Primary Consumers (Herbivores)",
                    definition: "Animals that eat producers (plants, algae)",
                    energySource: "Plant biomass",
                    efficiency: "~10% of plant energy transferred to herbivore biomass",
                    energyLosses: {
                        notConsumed: "~50% of plant biomass not eaten (roots, wood, thorns, etc.)",
                        notDigested: "~20-30% passes as feces (cellulose hard to digest)",
                        respiration: "~60% of assimilated energy lost as heat during metabolism",
                        growth: "Only ~10% becomes new herbivore biomass"
                    },
                    adaptations: {
                        teeth: "Flat molars for grinding plant material",
                        digestiveSystem: {
                            ruminants: "Multiple stomach chambers (cows, deer) with symbiotic bacteria to digest cellulose",
                            hindgutFermenters: "Large cecum (horses, rabbits) for microbial cellulose digestion",
                            long: "Long intestines to maximize nutrient absorption from low-quality food"
                        },
                        behavior: "Spend much of day eating (plant tissue low in energy relative to meat)"
                    },
                    organisms: {
                        terrestrial: ["Grasshoppers", "Caterpillars", "Deer", "Rabbits", "Elephants", "Cattle"],
                        aquatic: ["Zooplankton (Daphnia, copepods)", "Krill", "Sea urchins", "Parrotfish", "Manatees"],
                        size: "Varies from tiny insects to elephants"
                    },
                    challenges: "Plant defenses (thorns, toxins, low nutritional value), need large quantities"
                },
                
                level3_secondaryConsumers: {
                    name: "Secondary Consumers (Carnivores, Omnivores)",
                    definition: "Animals that eat primary consumers",
                    energySource: "Herbivore biomass",
                    efficiency: "~10-15% of herbivore energy transferred (meat easier to digest than plants)",
                    energyBudget: "More efficient than herbivores because meat is higher quality food (more protein, fat, less indigestible material)",
                    adaptations: {
                        teeth: "Sharp canines and carnassials for tearing meat",
                        claws: "For capturing prey",
                        speed: "Fast runners (cheetah) or ambush predators (crocodile)",
                        senses: "Keen vision, hearing, smell for detecting prey",
                        digestive: "Shorter intestines than herbivores (meat easier to digest)"
                    },
                    organisms: {
                        terrestrial: ["Spiders", "Frogs", "Snakes", "Small carnivorous mammals (weasels, foxes)"],
                        aquatic: ["Small fish (minnows eating zooplankton)", "Squid", "Jellyfish"],
                        omnivores: ["Bears", "Raccoons", "Humans (eat both plants and animals)"]
                    },
                    feedingStrategies: {
                        activePredation: "Chase and capture (wolves, cheetahs)",
                        ambush: "Wait and strike (crocodiles, snakes)",
                        filterFeeding: "Filter small organisms from water (baleen whales)",
                        scavenging: "Eat dead animals (vultures, hyenas also scavenge)"
                    }
                },
                
                level4_tertiaryConsumers: {
                    name: "Tertiary Consumers (Top Predators, Apex Predators)",
                    definition: "Carnivores that eat other carnivores",
                    energySource: "Secondary consumer biomass",
                    efficiency: "~10% of secondary consumer energy transferred",
                    characteristics: {
                        abundance: "Rare (limited energy available at this level)",
                        size: "Often large (eagles, lions, sharks, orcas)",
                        territory: "Large home ranges needed to find sufficient prey",
                        reproduction: "Slow (K-selected: few offspring, long lifespan, high parental care)",
                        vulnerability: "Susceptible to extinction (small populations, bioaccumulation of toxins)"
                    },
                    organisms: {
                        terrestrial: ["Lions", "Tigers", "Wolves", "Eagles", "Hawks", "Large owls"],
                        aquatic: ["Orcas", "Great white sharks", "Tuna", "Barracuda", "Giant squid"],
                        note: "Some ecosystems lack tertiary consumers (insufficient energy)"
                    },
                    ecologicalRole: {
                        topDown: "Control populations of lower trophic levels (trophic cascade)",
                        keystone: "Often keystone species (removal causes major ecosystem changes)",
                        example: "Wolves in Yellowstone control elk, allowing willow/aspen regeneration"
                    },
                    energyCalculation: {
                        example: "If producers have 10,000 kcal/m²/year:",
                        primary: "10,000 × 0.1 = 1,000 kcal/m²/year",
                        secondary: "1,000 × 0.1 = 100 kcal/m²/year",
                        tertiary: "100 × 0.1 = 10 kcal/m²/year",
                        implication: "Only 0.1% of producer energy reaches tertiary consumers"
                    }
                },
                
                decomposers: {
                    name: "Decomposers and Detritivores",
                    definition: "Organisms that break down dead organic matter from ALL trophic levels",
                    uniqueness: "Operate on all levels; recycle nutrients but energy still lost as heat",
                    organisms: {
                        decomposers: ["Bacteria", "Fungi", "Some protists"],
                        detritivores: ["Earthworms", "Millipedes", "Dung beetles", "Vultures", "Crabs"],
                        difference: "Decomposers (microbes) secrete enzymes externally; detritivores consume and internally digest"
                    },
                    process: {
                        step1: "Detritivores physically break down dead material (increase surface area)",
                        step2: "Bacteria and fungi secrete enzymes, chemically break down complex molecules",
                        step3: "Nutrients released into soil/water (mineralization)",
                        step4: "Plants absorb nutrients, cycle continues",
                        energyFate: "Energy in dead material released as heat during decomposition"
                    },
                    importance: {
                        nutrientRecycling: "Return C, N, P, etc. to soil for plant uptake",
                        wasteRemoval: "Prevent accumulation of dead material",
                        soilFormation: "Create humus, improve soil structure",
                        foodSource: "Support detrital food webs"
                    },
                    factorsAffectingRate: {
                        temperature: "Faster in warm conditions (tropical rainforest)",
                        moisture: "Require water for enzyme activity",
                        oxygenAvailability: "Aerobic decomposition faster than anaerobic",
                        materialQuality: "Leaves decompose faster than wood (less lignin)",
                        example: "Tropical leaf litter: months; temperate: 1-2 years; boreal forest: decades"
                    }
                }
            }
        },

        tenPercentRule: {
            statement: "Approximately 10% of energy at one trophic level is transferred to the next level",
            range: "Actual range: 5-20%, but 10% is useful average for calculations",
            origin: "Raymond Lindeman (1942) quantified energy transfer in Cedar Bog Lake",
            
            explanation: {
                whereEnergy: "Of the 100% energy available at trophic level n:",
                breakdown: {
                    notConsumed: "~40-50% not eaten (wrong parts, escape, die and decompose)",
                    notAssimilated: "~15-25% consumed but not digested (feces)",
                    respiration: "~50-70% assimilated but lost as heat (metabolism)",
                    production: "~10% becomes new biomass (growth, reproduction)"
                },
                calculation: "If level 1 has 1000 units: Level 2 ≈ 100, Level 3 ≈ 10, Level 4 ≈ 1"
            },
            
            variability: {
                higherEfficiency: {
                    carnivoreToCarnivore: "15-20% (meat easier to digest, less waste)",
                    aquaticEctotherms: "10-20% (don't expend energy maintaining body temperature)",
                    example: "Fish → larger fish more efficient than grass → cow"
                },
                lowerEfficiency: {
                    plantToHerbivore: "5-10% (cellulose indigestible, plant defenses)",
                    endotherms: "Lower (birds, mammals expend much energy on thermoregulation)",
                    example: "Grass → cow: only ~5% efficient"
                },
                extremes: {
                    lowest: "Insects eating leaves: ~2-5% (plant defenses, low quality)",
                    highest: "Carnivores eating meat: ~20-25% (high quality food)"
                }
            },
            
            consequences: {
                limitsTrophicLevels: "Each transfer loses 90%, so 4-5 levels maximum before insufficient energy",
                biomassDecline: "Biomass decreases ~10x per level (typically)",
                rareTopPredators: "Top predators need large areas to find enough prey",
                shortFoodChains: "Average food chain length: 3-4 levels terrestrial, 4-5 aquatic",
                humanImplication: "Eating lower on food chain (plants vs meat) more energy-efficient, supports more people"
            },
            
            calculations: {
                example1: {
                    scenario: "Grassland ecosystem with 10,000 kcal/m²/year NPP",
                    level1_producers: "10,000 kcal/m²/year",
                    level2_herbivores: "10,000 × 0.10 = 1,000 kcal/m²/year",
                    level3_carnivores: "1,000 × 0.10 = 100 kcal/m²/year",
                    level4_topPredators: "100 × 0.10 = 10 kcal/m²/year",
                    interpretation: "Only 0.1% of producer energy reaches top predators"
                },
                example2: {
                    scenario: "Human food supply - vegetarian vs meat-based diet",
                    directPlantConsumption: "1000 kg grain supports ~10 people (direct consumption)",
                    meatProduction: "1000 kg grain → 100 kg beef → supports ~1 person",
                    implication: "10x more people can be fed on plant-based diet for same agricultural output",
                    caveat: "Some land unsuitable for crops but can support grazing (grasslands, marginal lands)"
                }
            }
        },

        ecologicalPyramids: {
            conceptualFramework: "Graphical representations of trophic structure; each level drawn proportional to some measure",
            
            pyramidOfEnergy: {
                name: "Energy Pyramid (most fundamental)",
                measure: "Energy flow through each trophic level (kcal/m²/year or kJ/m²/year)",
                shape: "ALWAYS upright pyramid (energy always decreases upward)",
                reason: "Second law of thermodynamics - energy lost as heat at each transfer",
                example: {
                    producers: "10,000 kcal/m²/year (base)",
                    primaryConsumers: "1,000 kcal/m²/year",
                    secondaryConsumers: "100 kcal/m²/year",
                    tertiaryConsumers: "10 kcal/m²/year",
                    shape: "Wide base, narrow top"
                },
                importance: "Most accurate representation; shows actual energy flow",
                limitation: "Requires measuring energy content (calorimetry), time-consuming"
            },
            
            pyramidOfBiomass: {
                name: "Biomass Pyramid",
                measure: "Total dry mass of living organisms at each level (g/m² or kg/m²)",
                shape: "Usually upright, but can be inverted in some ecosystems",
                uprightExample: {
                    ecosystem: "Grassland, forest",
                    reasoning: "Large plant biomass supports smaller herbivore biomass supports smaller carnivore biomass",
                    data: "Forest: Plants 20,000 kg/ha, Herbivores 200 kg/ha, Carnivores 10 kg/ha"
                },
                invertedExample: {
                    ecosystem: "Open ocean, lakes (phytoplankton-based)",
                    reasoning: "Phytoplankton reproduce rapidly (high turnover); small biomass at any moment supports larger zooplankton biomass",
                    data: "Ocean: Phytoplankton 4 g/m², Zooplankton 21 g/m² (inverted!)",
                    explanation: "It's like bank account: phytoplankton have small balance but high deposit rate; zooplankton have larger balance but withdraw slowly",
                    productivityVsBiomass: "Productivity (flow) vs biomass (standing stock) differ"
                },
                advantages: "Easier to measure than energy (weigh organisms, dry, reweigh)",
                limitations: {
                    canInvert: "Not always upright (unlike energy pyramid)",
                    ignoresTurnover: "Doesn't show production rate, only standing stock",
                    ignoresEnergyContent: "1 kg plant ≠ 1 kg meat in energy value"
                }
            },
            
            pyramidOfNumbers: {
                name: "Numbers Pyramid",
                measure: "Number of individual organisms at each level",
                shape: "Highly variable - can be upright, inverted, or irregular",
                limitation: "Doesn't account for size differences between organisms",
                uprightExample: {
                    ecosystem: "Grassland",
                    data: "Grass plants: 1,000,000 → Grasshoppers: 10,000 → Frogs: 100 → Snakes: 10",
                    shape: "Wide base, narrow top"
                },
                invertedExample: {
                    ecosystem: "Forest with parasites",
                    data: "Trees: 10 → Caterpillars: 1,000 → Parasitoid wasps: 10,000",
                    reasoning: "One tree supports many insects; each insect can have multiple parasites"
                },
                irregularExample: {
                    scenario: "Single tree supporting herbivorous insects",
                    problem: "One producer (tree) can support thousands of consumers",
                    shape: "Inverted at base"
                },
                usefulness: "Easy to count, but least informative pyramid type"
            },
            
            comparisonTable: {
                energy: {
                    shape: "Always upright",
                    unit: "kcal or kJ per area per time",
                    pros: "Most accurate, shows actual flow",
                    cons: "Difficult to measure"
                },
                biomass: {
                    shape: "Usually upright, can invert",
                    unit: "grams or kg per area",
                    pros: "Easier to measure than energy",
                    cons: "Can invert, ignores turnover"
                },
                numbers: {
                    shape: "Variable (upright, inverted, irregular)",
                    unit: "Count of individuals",
                    pros: "Easiest to measure",
                    cons: "Ignores size, least informative"
                }
            }
        },

        foodChainsVsFoodWebs: {
            foodChain: {
                definition: "Linear sequence showing 'who eats whom' in single pathway",
                structure: "Producer → Primary Consumer → Secondary Consumer → Tertiary Consumer",
                examples: [
                    {
                        chain: "Grass → Grasshopper → Frog → Snake → Hawk",
                        ecosystem: "Grassland"
                    },
                    {
                        chain: "Phytoplankton → Krill → Small fish → Tuna → Shark",
                        ecosystem: "Ocean"
                    },
                    {
                        chain: "Oak tree → Caterpillar → Bird → Hawk",
                        ecosystem: "Forest"
                    }
                ],
                types: {
                    grazingChain: {
                        definition: "Starts with living plant material",
                        example: "Grass → Cow → Human",
                        characteristic: "Energy from primary production"
                    },
                    detritalChain: {
                        definition: "Starts with dead organic matter",
                        example: "Dead leaves → Earthworm → Robin → Hawk",
                        characteristic: "Often more energy flows through detrital than grazing chain",
                        importance: "Recycles nutrients, supports many organisms"
                    }
                },
                limitations: [
                    "Oversimplified - organisms typically eat multiple species",
                    "Doesn't show omnivores well",
                    "Ignores interconnections between chains",
                    "Implies single pathway (rarely true in nature)"
                ],
                usefulness: "Pedagogical tool for introducing trophic levels; easy to understand"
            },
            
            foodWeb: {
                definition: "Network of interconnected food chains showing all feeding relationships in community",
                structure: "Complex web with multiple pathways; organisms at multiple trophic levels",
                characteristics: {
                    realistic: "More accurately represents nature than food chains",
                    complexity: "Shows that most organisms eat multiple prey and are eaten by multiple predators",
                    omnivores: "Easily represented (eat at multiple trophic levels)",
                    redundancy: "Multiple pathways mean if one species lost, alternatives exist"
                },
                components: {
                    nodes: "Species (represented as points or boxes)",
                    links: "Feeding relationships (arrows pointing from prey to predator)",
                    strength: "Link thickness can show interaction strength or energy flow"
                },
                properties: {
                    connectance: "Proportion of possible links that are realized",
                    trophicLevel: "Species can have fractional trophic level (e.g., 2.3) if omnivorous",
                    complexity: "Number of species and links",
                    compartmentalization: "Sub-webs weakly connected to each other"
                },
                stabilityDebate: {
                    classicalView: "Complexity → stability (more links = more alternative pathways)",
                    modernView: "Relationship complex; some types of connections stabilize, others destabilize",
                    empirical: "Moderate complexity seems optimal; too simple OR too complex can be unstable"
                }
            },
            
            comparisonSummary: {
                foodChain: {
                    advantages: ["Simple to understand", "Shows basic energy flow", "Good teaching tool"],
                    disadvantages: ["Unrealistic", "Oversimplified", "Misses complexity"],
                    when: "Use for introducing concept of trophic levels to students"
                },
                foodWeb: {
                    advantages: ["Realistic", "Shows complexity", "Reveals species interactions", "Better for research"],
                    disadvantages: ["Complex to draw and analyze", "Can be overwhelming", "Hard to measure all links"],
                    when: "Use for research, conservation planning, understanding real ecosystems"
                }
            },
            
            exampleFoodWeb: {
                ecosystem: "Temperate deciduous forest",
                producers: ["Oak trees", "Maple trees", "Wildflowers", "Grasses"],
                primaryConsumers: ["Caterpillars", "Deer", "Rabbits", "Squirrels", "Mice"],
                secondaryConsumers: ["Insectivorous birds", "Foxes", "Snakes", "Owls"],
                tertiaryConsumers: ["Hawks", "Wolves (if present)"],
                decomposers: ["Fungi", "Bacteria", "Earthworms"],
                interconnections: [
                    "Owls eat mice, rabbits, and small birds",
                    "Foxes eat mice, rabbits, and birds",
                    "Deer eat leaves, wildflowers, and grass",
                    "Birds eat caterpillars and seeds (omnivores!)",
                    "Decomposers act on all levels"
                ],
                complexity: "15+ species with 50+ feeding links"
            }
        },

        energyBudgetCalculations: {
            conceptualFramework: "Accounting for energy inputs, storage, and losses at each trophic level",
            
            producerLevel: {
                inputs: {
                    solarRadiation: "Total sunlight reaching ecosystem (e.g., 3,000,000 kcal/m²/year)",
                    captureEfficiency: "Only 1-2% used in photosynthesis",
                    GPP: "Gross Primary Production = total photosynthesis (e.g., 30,000 kcal/m²/year)"
                },
                uses: {
                    plantRespiration: "30-60% of GPP used for plant metabolism (e.g., 15,000 kcal/m²/year)",
                    growth: "Stored in new plant biomass",
                    reproduction: "Seeds, fruits, flowers"
                },
                output: {
                    NPP: "Net Primary Production = GPP - plant respiration (e.g., 15,000 kcal/m²/year)",
                    availableToConsumers: "NPP is what herbivores can potentially consume"
                },
                formula: "NPP = GPP - R_autotroph"
            },
            
            primaryConsumerLevel: {
                inputs: {
                    potentialFood: "All plant NPP (e.g., 15,000 kcal/m²/year)",
                    ingested: "Only ~50% actually eaten (e.g., 7,500 kcal/m²/year)",
                    notEaten: "Roots, wood, thorns inedible or protected; some plants die and decompose"
                },
                losses: {
                    egestion: "15-25% not digested, passes as feces (e.g., 1,500 kcal/m²/year)",
                    assimilation: "Absorbed through gut (e.g., 6,000 kcal/m²/year)"
                },
                uses: {
                    respiration: "60-70% of assimilated energy lost as heat (e.g., 4,500 kcal/m²/year)",
                    production: "10-15% becomes new herbivore biomass (e.g., 1,500 kcal/m²/year)"
                },
                output: {
                    secondaryProduction: "New herbivore biomass available to carnivores",
                    efficiency: "1,500 / 15,000 = 10% of NPP"
                },
                formula: "Production = Assimilation - Respiration = Ingestion - (Egestion + Respiration)"
            },
            
            secondaryConsumerLevel: {
                inputs: {
                    herbivoreBiomass: "1,500 kcal/m²/year available",
                    ingested: "~70% consumed (higher than plants, less waste)",
                    consumption: "~1,000 kcal/m²/year"
                },
                losses: {
                    egestion: "~10-15% (meat more digestible)",
                    assimilation: "~900 kcal/m²/year"
                },
                uses: {
                    respiration: "~750 kcal/m²/year",
                    production: "~150 kcal/m²/year (new carnivore biomass)"
                },
                efficiency: "150 / 1,500 = 10% of herbivore production; 150 / 15,000 = 1% of NPP"
            },
            
            summary: {
                totalFlow: "Of 15,000 kcal/m²/year NPP:",
                herbivores: "Receive 7,500, assimilate 6,000, store 1,500 (10%)",
                carnivores: "Receive 1,000, assimilate 900, store 150 (1% of NPP)",
                heat: "Vast majority (>99%) eventually lost as heat through respiration",
                decomposers: "Process uneaten material, feces, dead organisms; release remaining energy as heat"
            }
        },

        applications: {
            fisheries: {
                application: "Sustainable harvest based on productivity",
                principle: "Can only harvest NPP replacement rate; harvesting higher trophic levels (tuna) less sustainable than lower (sardines)",
                example: "Overfishing cod (tertiary consumer) had cascading effects on North Atlantic ecosystem",
                management: "Catch limits based on primary productivity and trophic efficiency"
            },
            
            agriculture: {
                application: "Maximizing food production for humans",
                principle: "Eating lower on food chain feeds more people",
                calculation: "1 ha producing 10,000 kg grain:",
                vegetarian: "Feeds ~20 people directly",
                meatBased: "Produces ~1,000 kg beef, feeds ~2 people",
                tradeoffs: "Some land unsuitable for crops but can graze livestock; cultural preferences; nutritional differences",
                modernPractice: "Sustainable agriculture considers trophic efficiency in crop/livestock selection"
            },
            
            conservation: {
                application: "Protecting ecosystems and top predators",
                principle: "Top predators need large areas (low energy availability); serve as umbrella species",
                example: "Protecting jaguar habitat (large territory) protects entire ecosystem",
                cascades: "Removing top predators can cause trophic cascades (Yellowstone wolves)",
                planning: "Reserve design considers energy requirements for viable predator populations"
            },
            
            climateChange: {
                application: "Carbon sequestration and climate mitigation",
                principle: "Primary production removes CO₂; some stored long-term in biomass and soil",
                forest: "Tropical rainforests store ~300 tons C/ha; temperate forests ~100-150 tons C/ha",
                ocean: "Phytoplankton fix ~50 Gt C/year; some sinks to deep ocean (biological pump)",
                management: "Reforestation, protecting primary forests, restoring wetlands for carbon storage"
            },
            
            bioenergyEvaluation: {
                application: "Assessing biofuel sustainability",
                principle: "Energy return on investment (EROI); trophic efficiency",
                comparison: {
                    cornEthanol: "Captures recent solar energy, but low EROI (~1.3:1); uses cropland",
                    algalBiodiesel: "Higher productivity, doesn't compete with food, but expensive",
                    cellulosicEthanol: "Uses waste biomass (straw, wood), better EROI",
                    fossilFuels: "Ancient solar energy, high EROI but finite and polluting"
                },
                tradeoff: "Food vs fuel debate; land use efficiency"
            }
        },

        commonMisconceptions: {
            misconception1: {
                wrong: "Energy is recycled in ecosystems like nutrients",
                correct: "Energy flows ONE WAY and is eventually lost as heat; cannot be reused",
                clarification: "Nutrients (C, N, P) cycle; energy does not. Ecosystems require constant solar input."
            },
            misconception2: {
                wrong: "All energy comes from the sun",
                correct: "Most ecosystems rely on sun, but chemosynthetic ecosystems (deep sea vents, caves) use chemical energy",
                clarification: "Chemosynthetic bacteria use H₂S, NH₃, CH₄, etc. as energy source"
            },
            misconception3: {
                wrong: "The 10% rule is exact for all ecosystems",
                correct: "It's an average; actual range is 5-20% depending on organism type, ecosystem",
                clarification: "Herbivore efficiency lower (~5-10%); carnivore efficiency higher (~10-20%)"
            },
            misconception4: {
                wrong: "More trophic levels = more complex/better ecosystem",
                correct: "Trophic level number determined by energy availability; more isn't necessarily better",
                clarification: "Energy limits levels to 4-5; ecosystem health is about diversity, not just levels"
            },
            misconception5: {
                wrong: "Top predators are most important species",
                correct: "All species play roles; primary producers are essential base; keystone species have outsized impact (may not be top predators)",
                clarification: "Remove producers → everything dies; remove keystone species → major changes; remove top predators → cascading effects but ecosystem persists"
            },
            misconception6: {
                wrong: "Decomposers are at the bottom of the food chain",
                correct: "Decomposers act on ALL trophic levels simultaneously; they're part of all chains",
                clarification: "Decomposers break down dead material from every level, cycling nutrients"
            },
            misconception7: {
                wrong: "Biomass pyramid is always upright",
                correct: "Biomass pyramid can invert in aquatic systems (phytoplankton)",
                clarification: "Energy pyramid ALWAYS upright; biomass pyramid usually upright but can invert"
            }
        },

        keyTakeaways: [
            "Energy flows unidirectionally through ecosystems: Sun → Producers → Consumers → Heat",
            "~10% of energy transfers between trophic levels (10% rule); 90% lost as heat",
            "Second Law of Thermodynamics limits trophic levels to 4-5 typically",
            "Primary productivity (NPP) determines how much life an ecosystem can support",
            "Energy pyramids are always upright; biomass and number pyramids can vary",
            "Food webs are more realistic than food chains; show complexity and interconnections",
            "Decomposers are essential for nutrient recycling and operate on all trophic levels",
            "Understanding energy flow is crucial for conservation, fisheries, agriculture, and sustainability"
        ]
    };

    return content;
}

handleNutrientCycling(problem) {
    const content = {
        topic: "Nutrient Cycling and Biogeochemical Cycles",
        category: 'ecosystem_function',
        summary: "Nutrients cycle through living organisms (biotic) and the physical environment (abiotic) in biogeochemical cycles. Unlike energy which flows one-way, nutrients are reused, moving between atmosphere, lithosphere, hydrosphere, and biosphere. Major cycles include carbon, nitrogen, phosphorus, and water.",
        
        fundamentalConcepts: {
            definition: {
                biogeochemical: "'Bio' (living) + 'geo' (Earth/geological) + 'chemical' (elements) + 'cycle' (circular pathway)",
                meaning: "Movement of chemical elements through biological organisms AND geological components of Earth",
                cyclical: "Elements return to starting point; contrast with energy flow (unidirectional)"
            },
            
            keyPrinciples: {
                lawOfConservation: {
                    principle: "Matter cannot be created or destroyed, only transformed",
                    application: "Total amount of element (e.g., carbon, nitrogen) on Earth is constant",
                    implication: "Elements are reused infinitely; same carbon atoms in your body may have been in dinosaurs, trees, ocean"
                },
                differenceFromEnergy: {
                    energy: "Flows through ecosystem, lost as heat, requires constant input",
                    nutrients: "Cycle within ecosystem, reused repeatedly",
                    both: "Both involve transformations between different forms"
                },
                reservoirs: {
                    definition: "Major storage locations for an element",
                    examples: "Atmosphere, ocean, soil, rock, living organisms",
                    variability: "Size and residence time vary greatly between reservoirs"
                },
                fluxes: {
                    definition: "Rates of movement between reservoirs",
                    units: "Amount per time (e.g., Gt/year, kg/ha/year)",
                    balance: "Input fluxes = output fluxes at equilibrium"
                },
                residenceTime: {
                    definition: "Average time element spends in a reservoir",
                    calculation: "Residence time = Reservoir size / Flux rate",
                    variability: "From days (atmosphere CO₂) to millions of years (sedimentary rock)"
                }
            },
            
            typesOfCycles: {
                gaseous: {
                    characteristic: "Significant atmospheric reservoir; element has gaseous phase",
                    cycles: "Carbon, Nitrogen, Oxygen, Water (vapor)",
                    exchange: "Relatively rapid exchange with atmosphere",
                    timescale: "Biological component: days to years; geological: millions of years"
                },
                sedimentary: {
                    characteristic: "No or limited atmospheric reservoir; main reservoir is rocks/sediments",
                    cycles: "Phosphorus, Sulfur, Calcium, Iron",
                    exchange: "Slow exchange; depends on weathering and uplift",
                    timescale: "Geological timescales (millions of years) for full cycle",
                    vulnerability: "Easier to disrupt locally; losses not easily replaced"
                }
            }
        },

        carbonCycle: {
            importance: [
                "Carbon is backbone of all organic molecules (carbohydrates, lipids, proteins, nucleic acids)",
                "CO₂ is major greenhouse gas regulating Earth's temperature",
                "Carbon cycling linked to climate, ocean chemistry, and all life"
            ],
            
            reservoirs: {
                atmosphere: {
                    amount: "~850 Gt C (gigatons carbon)",
                    form: "CO₂ (carbon dioxide), trace CH₄ (methane)",
                    residenceTime: "~4 years (rapid turnover through photosynthesis/respiration)",
                    currentChange: "Increasing due to fossil fuel burning (~420 ppm in 2023, up from 280 ppm pre-industrial)"
                },
                terrestrialBiosphere: {
                    vegetation: "~550 Gt C (plant biomass)",
                    soil: "~1,500-2,400 Gt C (organic matter, humus)",
                    total: "~2,000-3,000 Gt C",
                    form: "Organic carbon in living tissue, dead organic matter, soil humus",
                    distribution: "Tropical forests store most; peatlands and tundra store carbon in soil"
                },
                ocean: {
                    surface: "~1,000 Gt C (dissolved CO₂, DIC - dissolved inorganic carbon)",
                    deep: "~37,000 Gt C",
                    total: "~38,000 Gt C (largest active reservoir)",
                    forms: "Dissolved CO₂, bicarbonate (HCO₃⁻), carbonate (CO₃²⁻), organic matter",
                    biologicalPump: "Phytoplankton photosynthesize, die, sink → carbon to deep ocean"
                },
                fossilFuels: {
                    amount: "~4,000 Gt C",
                    form: "Coal, oil, natural gas (ancient photosynthesis, buried 300+ million years ago)",
                    humanExtraction: "Burning releases ~9-10 Gt C/year to atmosphere",
                    note: "Was sequestered (removed from cycle) for millions of years; now being rapidly released"
                },
                sedimentaryRocks: {
                    amount: "~65,500,000 Gt C (largest reservoir by far)",
                    form: "Limestone (CaCO₃), chalk, carbonate rocks",
                    exchange: "Very slow (weathering and geological uplift over millions of years)",
                    note: "Not part of 'active' cycle on human timescales"
                }
            },
            
            majorProcesses: {
                photosynthesis: {
                    reaction: "6 CO₂ + 6 H₂O + light energy → C₆H₁₂O₆ + 6 O₂",
                    organisms: "Plants, algae, cyanobacteria, phytoplankton",
                    rate: "~120 Gt C/year fixed globally (terrestrial + marine)",
                    terrestrial: "~60 Gt C/year",
                    marine: "~50 Gt C/year (phytoplankton)",
                    role: "Removes CO₂ from atmosphere, incorporates into organic compounds",
                    storage: "Carbon stored in plant biomass (wood, leaves, roots)",
                    importance: "Primary pathway for carbon entering living organisms"
                },
                
                cellularRespiration: {
                    reaction: "C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + energy (ATP)",
                    organisms: "All aerobic organisms (plants, animals, fungi, bacteria)",
                    rate: "~120 Gt C/year released globally",
                    balance: "Roughly balances photosynthesis naturally (small net uptake by biosphere)",
                    role: "Returns CO₂ to atmosphere",
                    note: "Plants respire too! (~50% of photosynthesis goes to plant respiration)"
                },
                
                decomposition: {
                    process: "Breakdown of dead organic matter by bacteria and fungi",
                    reaction: "Organic matter → CO₂ + nutrients (aerobic) or CH₄ + nutrients (anaerobic)",
                    rate: "Variable; fast in tropics (warm, moist), slow in cold/dry climates",
                    storage: "Incomplete decomposition → soil organic matter (humus)",
                    carbonStorage: "Soils contain more carbon than atmosphere + vegetation combined",
                    peatlands: "Waterlogged conditions slow decomposition → carbon accumulates (important carbon sink)",
                    tundra: "Permafrost stores ancient carbon; thawing due to climate change releasing CO₂ and CH₄"
                },
                
                combustion: {
                    natural: {
                        wildfires: "Release CO₂ stored in vegetation; ~2 Gt C/year naturally",
                        volcanoes: "Release ~0.1 Gt C/year (minor compared to human)",
                        note: "Part of natural cycle; forests regrow and reabsorb"
                    },
                    anthropogenic: {
                        fossilFuels: "~9-10 Gt C/year (coal, oil, natural gas burning)",
                        deforestation: "~1-2 Gt C/year (burning and decay of cleared forests)",
                        total: "~10-12 Gt C/year added to atmosphere by humans",
                        accumulation: "~50% remains in atmosphere (increasing CO₂); ~30% absorbed by ocean; ~20% by terrestrial biosphere"
                    },
                    impact: "Main driver of current climate change (atmospheric CO₂ up 50% since 1800)"
                },
                
                oceanExchange: {
                    dissolution: {
                        process: "CO₂ dissolves in seawater: CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ ⇌ 2H⁺ + CO₃²⁻",
                        equilibrium: "Atmosphere ⇌ surface ocean (fairly rapid exchange)",
                        rate: "Ocean absorbs ~2.5 Gt C/year from atmosphere (mitigates climate change)",
                        temperature: "Cold water absorbs more CO₂; warm water releases it"
                    },
                    biologicalPump: {
                        step1: "Phytoplankton photosynthesize in surface ocean (fix CO₂)",
                        step2: "Phytoplankton eaten or die",
                        step3: "Organic matter sinks to deep ocean",
                        step4: "Decomposition in deep ocean or burial in sediments",
                        result: "Transports carbon from surface to deep ocean; sequesters for centuries",
                        importance: "Without this pump, atmospheric CO₂ would be much higher"
                    },
                    oceanAcidification: {
                        mechanism: "Excess CO₂ + H₂O → H₂CO₃ (carbonic acid) → H⁺ + HCO₃⁻",
                        result: "pH decreases (ocean becoming more acidic); pH dropped 0.1 units since 1800 (30% increase in acidity)",
                        impact: "Carbonate (CO₃²⁻) levels decrease → corals and shellfish struggle to build shells/skeletons",
                        organisms: "Corals, mollusks, some plankton with CaCO₃ structures threatened",
                        cascading: "Threatens marine food webs and fisheries"
                    }
                },
                
                carbonSe sequestration: {
                    geological: {
                        process: "Organic matter buried and converted to fossil fuels over millions of years",
                        rate: "Extremely slow (~0.01 Gt C/year naturally)",
                        note: "This is how fossil fuels formed (Carboniferous period, 300+ MYA)"
                    },
                    sedimentary: {
                        process: "Marine organisms (plankton, corals) build CaCO₃ shells → die → accumulate as sediments → limestone",
                        rate: "Slow; millions of years to form significant deposits",
                        storage: "Most carbon in sedimentary rocks (~65 million Gt C)"
                    }
                }
            },
            
            humanImpact: {
                fossilFuelCombustion: {
                    rate: "~10 Gt C/year released",
                    comparison: "Natural carbon cycle ~120 Gt C/year in each direction; humans adding ~10 Gt one-way",
                    effect: "Atmospheric CO₂ increasing (~2-3 ppm/year)",
                    history: "280 ppm (1800) → 420 ppm (2023) = 50% increase"
                },
                deforestation: {
                    rate: "~1-2 Gt C/year",
                    double: "Reduces photosynthesis (removes CO₂ sink) AND releases stored carbon (via burning or decay)",
                    location: "Mainly tropical rainforests (Amazon, Indonesia, Congo)",
                    cascade: "Also affects water cycle, biodiversity, indigenous communities"
                },
                landUseChange: {
                    agriculture: "Plowing releases soil carbon (oxidation)",
                    urbanization: "Replaces carbon-storing vegetation with pavement",
                    effect: "Soil carbon losses; reduced carbon sequestration"
                },
                consequences: {
                    climateChange: "Rising global temperature (~1.2°C since 1800, accelerating)",
                    feedbacks: {
                        permafrostThaw: "Releases ancient carbon as CO₂ and CH₄ (positive feedback)",
                        forestDieback: "Droughts kill forests → releases carbon → more warming",
                        reducedOceanUptake: "Warmer ocean absorbs less CO₂"
                    },
                    oceanAcidification: "Threatens marine ecosystems",
                    extremeWeather: "Droughts, floods, hurricanes intensify"
                }
            },
            
            solutions: {
                reducingEmissions: {
                    renewableEnergy: "Solar, wind, hydro replace fossil fuels",
                    efficiency: "Better insulation, electric vehicles, industrial efficiency",
                    behavioralChange: "Diet shifts, less flying, sustainable consumption"
                },
                enhancingSinks: {
                    reforestation: "Plant trees to absorb CO₂",
                    forestProtection: "Prevent deforestation (especially tropics)",
                    soilCarbonSequestration: "No-till agriculture, cover crops, biochar",
                    blueCarbon: "Protect coastal wetlands (mangroves, salt marshes, seagrass) that sequester carbon in sediments"
                },
                emerging: {
                    CCS: "Carbon capture and storage (capture CO₂ from power plants, store underground)",
                    DAC: "Direct air capture (machines remove CO₂ from air)",
                    oceanAlkalinization: "Add alkalinity to ocean to absorb more CO₂",
                    note: "These are expensive and unproven at scale; reducing emissions is priority"
                }
            }
        },

        nitrogenCycle: {
            importance: [
                "Nitrogen is essential component of amino acids (proteins), nucleotides (DNA, RNA), ATP",
                "N₂ gas is 78% of atmosphere but unusable by most organisms (triple bond very strong)",
                "Nitrogen availability often limits plant growth (why fertilizers important)",
                "Only certain bacteria can 'fix' atmospheric N₂ into usable forms"
            ],
            
            reservoirs: {
                atmosphere: {
                    amount: "~3.9 × 10⁶ Gt N (gigatons nitrogen)",
                    form: "N₂ gas (diatomic nitrogen)",
                    availability: "Inert; triple bond (N≡N) requires enormous energy to break",
                    note: "Largest reservoir but mostly inaccessible"
                },
                soils: {
                    amount: "~95-140 Gt N",
                    forms: "Organic N (in humus, dead organisms), NH₄⁺ (ammonium), NO₃⁻ (nitrate)",
                    availability: "NO₃⁻ and NH₄⁺ are plant-available forms"
                },
                livingOrganisms: {
                    amount: "~3-5 Gt N",
                    form: "Organic nitrogen (proteins, nucleic acids)",
                    small: "Tiny reservoir but rapid turnover"
                },
                ocean: {
                    amount: "~20,000-22,000 Gt N",
                    forms: "Dissolved N₂, NO₃⁻, NH₄⁺, organic N",
                    limitation: "Nitrogen often limits productivity in ocean (especially near surface)"
                }
            },
            
            majorProcesses: {
                nitrogenFixation: {
                    definition: "Conversion of atmospheric N₂ to ammonia (NH₃) or ammonium (NH₄⁺)",
                    
                    biological: {
                        reaction: "N₂ + 8 H⁺ + 8 e⁻ + 16 ATP → 2 NH₃ + H₂ + 16 ADP + 16 Pi",
                        enzyme: "Nitrogenase (extremely oxygen-sensitive; requires anaerobic conditions)",
                        organisms: {
                            freeL Living: "Azotobacter, Clostridium, Cyanobacteria (in aquatic systems and some soils)",
                            symbiotic: {
                                legumes: "Rhizobium bacteria in root nodules of legumes (peas, beans, clover, alfalfa)",
                                mechanism: "Plant provides sugars; bacteria provide fixed nitrogen (mutualism)",
                                nodules: "Visible pink nodules on roots (pink from leghemoglobin which protects nitrogenase from O₂)"
                            },
                            associative: "Some bacteria associated with grass roots (partial symbiosis)"
                        },
                        rate: "~200-300 Tg N/year globally (natural + agricultural legumes)",
                        energyCost: "Very expensive (16 ATP per N₂); why bacteria need plant sugars",
                        importance: "Only way to naturally add 'new' nitrogen to terrestrial ecosystems"
                    },
                    
                    industrial: {
                        process: "Haber-Bosch process",
                        reaction: "N₂ + 3 H₂ → 2 NH₃ (high temperature ~450°C, high pressure ~200 atm, iron catalyst)",
                        developed: "1909 by Fritz Haber and Carl Bosch",
                        rate: "~150 Tg N/year (exceeds natural biological fixation!)",
                        purpose: "Produces nitrogen fertilizers (ammonia, urea, ammonium nitrate)",
                        impact: {
                            positive: "Transformed agriculture; feeds ~50% of world population",
                            negative: "Enormous energy use (~2% global energy); fertilizer runoff causes pollution"
                        },
                        historical: "Before Haber-Bosch, nitrogen was limiting factor for crop yields; relied on manure and guano"
                    },
                    
                    atmospheric: {
                        process: "Lightning provides energy to break N≡N bond",
                        reaction: "N₂ + O₂ + energy (lightning) → 2 NO (nitric oxide) → NO₂ → HNO₃ (nitric acid in rain)",
                        rate: "~10 Tg N/year (minor compared to biological)",
                        distribution: "Nitric acid in rain ('nitrogen deposition') fertilizes ecosystems"
                    }
                },
                
                nitrification: {
                    definition: "Oxidation of ammonia (NH₄⁺) to nitrite (NO₂⁻) then nitrate (NO₃⁻)",
                    type: "Aerobic process (requires oxygen)",
                    organisms: "Specialized bacteria (chemoautotrophs - gain energy from oxidation)",
                    
                    step1: {
                        reaction: "NH₄⁺ + 1.5 O₂ → NO₂⁻ + 2 H⁺ + H₂O + energy",
                        bacteria: "Nitrosomonas, Nitrosococcus (ammonia-oxidizing bacteria, AOB)",
                        energy: "Bacteria gain energy from this oxidation (chemosynthesis)"
                    },
                    
                    step2: {
                        reaction: "NO₂⁻ + 0.5 O₂ → NO₃⁻ + energy",
                        bacteria: "Nitrobacter, Nitrospira (nitrite-oxidizing bacteria, NOB)",
                        energy: "Also chemoautotrophs"
                    },
                    
                    overall: "NH₄⁺ → NO₂⁻ → NO₃⁻",
                    
                    significance: {
                        plantUptake: "Most plants prefer NO₃⁻ (more mobile in soil than NH₄⁺)",
                        mobility: "NO₃⁻ is negatively charged, doesn't bind to soil → easily leaches to groundwater",
                        problem: "Nitrate pollution in wells and streams from agricultural runoff"
                    },
                    
                    location: "Aerobic soils, well-aerated aquatic sediments",
                    rate: "Fast in warm, moist, well-aerated soils"
                },
                
                assimilation: {
                    definition: "Uptake and incorporation of nitrogen into organic molecules",
                    
                    plants: {
                        uptake: "Absorb NO₃⁻ or NH₄⁺ from soil through roots",
                        conversion: "Reduce NO₃⁻ → NO₂⁻ → NH₄⁺ (if they took up nitrate)",
                        incorporation: "NH₄⁺ + organic acids → amino acids",
                        synthesis: "Amino acids → proteins; also nucleotides (DNA, RNA), chlorophyll, etc.",
                        demand: "High nitrogen demand during rapid growth"
                    },
                    
                    animals: {
                        uptake: "Cannot use inorganic nitrogen; must eat plants or other animals",
                        digestion: "Break down proteins → amino acids",
                        synthesis: "Reassemble into own proteins",
                        waste: "Excess protein broken down → NH₃/urea excreted"
                    },
                    
                    microbes: {
                        uptake: "Can use NH₄⁺, NO₃⁻, or organic nitrogen",
                        competition: "Microbes compete with plants for available nitrogen"
                    }
                },
                
                ammonification: {
                    definition: "Decomposition of organic nitrogen compounds to ammonia/ammonium",
                    alsoKnown: "Mineralization (organic → inorganic)",
                    
                    process: {
                        source: "Dead organisms, feces, urine, sloughed cells",
                        decomposers: "Bacteria and fungi secrete enzymes",
                        breakdown: "Proteins → amino acids → NH₃ (ammonia)",
                        soilForm: "NH₃ + H⁺ → NH₄⁺ (ammonium - dominant form in most soils)"
                    },
                    
                    equation: "Organic-N (proteins, nucleic acids) → NH₃/NH₄⁺",
                    organisms: "Many bacteria and fungi (not specialized like nitrifiers)",
                    rate: "Varies with temperature, moisture, organic matter quality",
                    significance: "Recycles nitrogen from dead material back to inorganic form usable by plants",
                    soilPool: "Soil NH₄⁺ can be taken up by plants or nitrified to NO₃⁻"
                },
                
                denitrification: {
                    definition: "Reduction of nitrate (NO₃⁻) to nitrogen gas (N₂), returning nitrogen to atmosphere",
                    type: "Anaerobic respiration (occurs in absence of oxygen)",
                    
                    process: {
                        reaction: "NO₃⁻ → NO₂⁻ → NO → N₂O → N₂",
                        electronAcceptor: "Bacteria use NO₃⁻ instead of O₂ for respiration (when O₂ unavailable)",
                        energySource: "Organic matter oxidized"
                    },
                    
                    organisms: "Pseudomonas, Clostridium, Bacillus (facultative anaerobes)",
                    conditions: {
                        anaerobic: "No or very low oxygen (waterlogged soils, sediments, deep water)",
                        organicMatter: "Need carbon source for energy",
                        nitrate: "Need NO₃⁻ as electron acceptor"
                    },
                    
                    locations: "Waterlogged soils, wetlands, rice paddies, bottom of lakes/estuaries, manure lagoons",
                    
                    significance: {
                        completing Cycle: "Returns N₂ to atmosphere, completing nitrogen cycle",
                        agricultureLoss: "Removes nitrogen from ecosystems (loss for farmers - up to 30% of fertilizer can be lost)",
                        greenHouseGas: "Intermediate N₂O (nitrous oxide) is potent greenhouse gas (300x stronger than CO₂)",
                        beneficialAspect: "Can remove excess nitrate from water (wastewater treatment, constructed wetlands)"
                    },
                    
                    rate: "~200-300 Tg N/year globally returned to atmosphere",
                    
                    problem: "N₂O emissions contribute to climate change and stratospheric ozone depletion"
                },
                
                anammox: {
                    definition: "Anaerobic ammonia oxidation (recently discovered, 1990s)",
                    reaction: "NH₄⁺ + NO₂⁻ → N₂ + 2 H₂O",
                    organisms: "Specialized bacteria (Planctomycetes)",
                    importance: "Significant in ocean nitrogen loss; being explored for wastewater treatment",
                    note: "Relatively minor but important in certain environments"
                }
            },
            
            humanImpact: {
                fertilizers: {
                    scale: "~150 Tg N/year produced via Haber-Bosch (doubled natural fixation rate)",
                    overuse: "Much of applied fertilizer not taken up by crops (inefficient)",
                    runoff: "Excess N runs off fields into streams, rivers, lakes, coastal ocean",
                    consequences: "Eutrophication (excess nutrient enrichment)"
                },
                
                eutrophication: {
                    process: {
                        step1: "Excess nitrogen (and phosphorus) enters water",
                        step2: "Stimulates explosive algal growth ('algal bloom')",
                        step3: "Algae die, sink to bottom",
                        step4: "Bacteria decompose algae, consume oxygen",
                        step5: "Hypoxia or anoxia (low/no oxygen) kills fish and invertebrates"
                    },
                    result: "'Dead zones' in lakes, rivers, estuaries, coastal ocean",
                    examples: {
                        gulfOfMexico: "~20,000 km² dead zone each summer (Mississippi River drainage)",
                        chesapeakeBay: "Historically severe eutrophication; ongoing restoration",
                        balticsea: "Large dead zones",
                        lakeeirie: "Algal blooms, some toxic (cyanobacteria produce toxins)"
                    },
                    impacts: {
                        ecological: "Loss of biodiversity, fish kills, disrupted food webs",
                        economic: "Fisheries collapse, loss of tourism, drinking water contamination",
                        human: "Toxic algae can poison water supplies (cyanotoxins)"
                    }
                },
                
                fossilFuelCombustion: {
                    process: "High-temperature combustion (cars, power plants) oxidizes atmospheric N₂: N₂ + O₂ → NOₓ (NO, NO₂)",
                    amount: "~20-30 Tg N/year released as NOₓ",
                    acidRain: "NOₓ + water → nitric acid (HNO₃) → acid rain",
                    effects: "Acidifies lakes, forests, soils; damages buildings and monuments",
                    deposition: "Nitrogen deposition fertilizes ecosystems (can be good or bad)",
                    ozone: "NOₓ + volatile organic compounds + sunlight → tropospheric ozone (smog, respiratory irritant)"
                },
                
                landClearing: {
                    effect: "Removes nitrogen stored in vegetation and organic soil",
                    erosion: "Soil erosion carries nitrogen to waterways",
                    mineralization: "Disturbing soil accelerates decomposition → release of N"
                },
                
                summary: "Human activities now add more reactive nitrogen (Nr) to environment than all natural processes combined; major driver of environmental problems"
            },
            
            solutions: {
                agriculture: {
                    precisionAgriculture: "Apply fertilizer only where and when needed (GPS-guided, soil testing)",
                    timing: "Match application to crop demand (split applications, slow-release fertilizers)",
                    coverCrops: "Plant legumes or grasses between cash crops (capture excess N, prevent erosion)",
                    bufferStrips: "Vegetated zones along streams intercept runoff",
                    manure: "Manage carefully (can be benefit or pollution source)"
                },
                waterManagement: {
                    wetlands: "Constructed wetlands for wastewater treatment (denitrification removes nitrogen)",
                    restoration: "Restore natural wetlands to filter agricultural runoff",
                    drainage: "Controlled drainage from agricultural fields (reduce runoff peaks)"
                },
                emissions: {
                    catalytic Converters: "Reduce NOₓ emissions from vehicles",
                    scrubbers: "Remove NOₓ from power plant emissions",
                    renewableEnergy: "Reduce combustion (solar, wind)"
                },
                dietary: {
                    reduceMeat: "Livestock feed requires nitrogen fertilizers; meat production is nitrogen-intensive",
                    localFood: "Reduce transport (lower fossil fuel combustion)"
                }
            }
        },

        phosphorusCycle: {
            importance: [
                "Essential for DNA, RNA (sugar-phosphate backbone), ATP (energy currency), phospholipids (membranes), bones and teeth (hydroxyapatite)",
                "Often limiting nutrient in ecosystems (especially aquatic)",
                "No gaseous phase (unlike C, N) - entirely sedimentary cycle",
                "Phosphate rock (for fertilizer) is finite, non-renewable resource"
            ],
            
            reservoirs: {
                rocks: {
                    amount: "~10⁸ Gt P (by far largest reservoir)",
                    form: "Apatite (Ca₅(PO₄)₃(OH, F, Cl)) and other phosphate minerals",
                    availability: "Extremely slow release via weathering (geological timescale)",
                    mining: "Humans mine for fertilizer (depleting finite resource)"
                },
                soils: {
                    amount: "~90-140 Gt P",
                    forms: {
                        inorganic: "PO₄³⁻ (phosphate ion), bound to soil particles",
                        organic: "In humus, dead organisms (must be mineralized to be available)"
                    },
                    availability: "PO₄³⁻ binds tightly to soil (especially clays, iron/aluminum oxides) → low mobility",
                    problem: "Much soil phosphorus is 'bound' and unavailable to plants"
                },
                livingOrganisms: {
                    amount: "~0.3 Gt P",
                    form: "Organic phosphorus (nucleic acids, ATP, membranes)",
                    rapid: "Rapid turnover through food web"
                },
                ocean: {
                    surfaceWater: "Low concentration (often limiting nutrient)",
                    deepOcean: "Higher concentration (~0.3 Gt P dissolved)",
                    sediments: "~4,000 Gt P (accumulates over millions of years)",
                    upwelling: "Deep water brings nutrients to surface (supports productive fisheries)"
                }
            },
            
            uniqueFeatures: {
                noGaseousPhase: "Phosphorus has no stable gaseous compounds at Earth temperatures",
                slowCycle: "Release from rocks extremely slow; most cycling is local (soil-plant-animal-soil)",
                onewayFlow: "Generally flows from land → ocean → sediments (long-term 'leak' from terrestrial systems)",
                recycling: "Short-term recycling in ecosystems (plants → animals → decomposition → plants), but long-term loss to ocean",
                limiting: "Often limits productivity (especially in freshwater lakes, mature tropical forests)"
            },
            
            majorProcesses: {
                weathering: {
                    process: "Physical and chemical breakdown of phosphate-containing rocks",
                    reactions: [
                        "Water + carbonic acid dissolve minerals",
                        "Ca₅(PO₄)₃OH + acid → Ca²⁺ + H₂PO₄⁻ + H₃PO₄"
                    ],
                    release: "Phosphate ions (PO₄³⁻, HPO₄²⁻, H₂PO₄⁻) enter soil solution",
                    rate: "Very slow (0.01-0.1 Tg P/year from weathering)",
                    factors: {
                        rainfall: "More water → faster weathering",
                        temperature: "Warm → faster chemical reactions",
                        biology: "Plant roots, soil organisms, lichens accelerate weathering"
                    },
                    timescale: "Millions of years to weather significant rock mass"
                },
                
                absorption: {
                    plants: {
                        uptake: "Absorb phosphate (H₂PO₄⁻ or HPO₄²⁻) through roots",
                        mycorrhizae: "Symbiotic fungi extend root reach, access bound phosphorus (critical in low-P soils)",
                        incorporation: "Phosphate used to synthesize ATP, nucleic acids, phospholipids",
                        efficiency: "Plants very efficient at scavenging P (adaptations include cluster roots, phosphatase enzymes)",
                        limitation: "Growth often P-limited (especially tropical soils which are ancient, weathered, P-depleted)"
                    },
                    immobilization: "Microbes also compete for phosphate (microbial immobilization)"
                },
                
                consumption: {
                    animals: "Eat plants or other animals, obtain organic phosphorus",
                    digestion: "Break down molecules, absorb phosphate",
                    bones: "Vertebrates store much P in bones and teeth (hydroxyapatite)",
                    excretion: "Excess P excreted in urine and feces (recycled by decomposers)"
                },
                
                decomposition: {
                    process: "Bacteria and fungi break down dead organisms",
                    mineralization: "Organic phosphorus → inorganic phosphate (PO₄³⁻)",
                    release: "Phosphate returned to soil solution",
                    cycling: "Rapidly recycled in ecosystems (short-term cycle)",
                    organisms: "Phosphatase enzymes secreted by microbes and plant roots cleave phosphate from organic molecules",
                    rate: "Fast in warm, moist conditions; slow in cold or dry"
                },
                
                adsorption: {
                    definition: "Phosphate binds tightly to soil particles",
                    mechanism: "PO₄³⁻ (negatively charged) binds to positively charged surfaces (iron oxides, aluminum oxides, calcium carbonate)",
                    consequence: "Much soil P is 'bound' and unavailable to plants",
                    pH: {
                        acidic: "Binds to iron and aluminum oxides (tropical soils)",
                        alkaline: "Precipitates as calcium phosphate (arid soils)"
                    },
                    optimal: "pH 6-7 (temperate soils) has most available phosphorus",
                    problem: "Added fertilizer phosphate quickly binds to soil → low efficiency (only ~20% used by plants in year applied)"
                },
                
                sedimentation: {
                    runoff: "Phosphate washes from land into streams, rivers, lakes, ocean (erosion, runoff)",
                    transport: "Carried by water to ocean (both dissolved and attached to sediment particles)",
                    deposition: "Settles to ocean floor as sediments",
                    accumulation: "Accumulates over millions of years → phosphate-rich sedimentary rocks",
                    timescale: "Extremely slow return to land (requires geological uplift over millions of years)",
                    loss: "Represents long-term loss from terrestrial ecosystems (broken only by uplift and weathering)"
                },
                
                uplift: {
                    process: "Tectonic activity raises ocean sediments → new land",
                    exposure: "Phosphate rocks exposed to weathering",
                    timescale: "Millions of years",
                    completion: "Completes phosphorus cycle (but on geological timescale)",
                    example: "Phosphate deposits in Florida formed from ancient marine sediments now uplifted"
                }
            },
            
            humanImpact: {
                mining: {
                    scale: "~200-250 Tg P mined per year for fertilizers and industrial uses",
                    sources: "Major deposits: Morocco/Western Sahara (~70% of reserves), China, USA, Russia",
                    problem: "Finite resource; high-quality reserves may be depleted within 50-100 years",
                    geopolitics: "Morocco controls most reserves → potential future resource conflicts",
                    energy: "Mining and processing are energy-intensive"
                },
                
                fertilizerRunoff: {
                    problem: "Applied phosphorus fertilizer (>80% of mined P) runs off fields into water",
                    eutrophication: "Along with nitrogen, causes algal blooms and dead zones",
                    difference: "Phosphorus usually limiting nutrient in freshwater (nitrogen in marine); so P runoff hits lakes hardest",
                    examples: {
                        lakeErie: "Severe algal blooms from agricultural runoff (Ohio, Michigan, Ontario watersheds)",
                        everglades: "Phosphorus from agriculture disrupts natural P-limited ecosystem",
                        worldwide: "Lakes globally affected"
                    }
                },
                
                detergents: {
                    historical: "Phosphate detergents (until 1970s-1990s) major pollution source",
                    regulation: "Most developed countries banned or restricted phosphate in detergents",
                    wastewater: "Human waste contains phosphorus (food-derived); wastewater treatment plants must remove P"
                },
                
                animalWaste: {
                    concentratedFeedlots: "Livestock waste concentrated → high-P manure",
                    application: "Manure applied to fields (fertilizer) but often overapplied",
                    runoff: "Excess washes into water bodies"
                },
                
                consequences: {
                    eutrophication: "Algal blooms, hypoxia, fish kills (same as nitrogen)",
                    resourceDepletion: "Mining unsustainable; future shortages possible",
                    foodSecurity: "Without phosphorus fertilizers, crop yields would plummet (feeds ~50% of population)",
                    inequality: "Phosphorus mainly in few countries → geopolitical issues"
                }
            },
            
            solutions: {
                agriculture: {
                    precisionApplication: "Soil test, apply only what's needed",
                    placementTiming: "Place fertilizer near plant roots; apply when plants actively growing",
                    coverCrops: "Reduce erosion (phosphorus often bound to soil particles)",
                    reduceTillage: "Prevent soil erosion",
                    manureManagement: "Use manure strategically (avoid over-application)",
                    bufferStrips: "Vegetated zones trap sediment and phosphorus"
                },
                
                recycling: {
                    wastewater: "Recover phosphorus from sewage (technologies being developed)",
                    manure: "Treat as resource, not waste (compost, distribute wisely)",
                    foodWaste: "Compost organic waste (return P to soil cycle)",
                    urine: "Separate urine (rich in P) for fertilizer use (being explored)"
                },
                
                alternatives: {
                    mycorrhizae: "Inoculate crops with beneficial fungi (enhance P uptake)",
                    geneticEngineering: "Develop crops more efficient at acquiring soil P",
                    alternatives: "Research non-rock phosphorus sources (ocean, organic wastes)"
                },
                
                conservation: {
                    protectWetlands: "Wetlands filter phosphorus from water",
                    reduceMeat: "Meat production requires more P than plants (feed conversion)",
                    awareness: "Recognize phosphorus as critical, limited resource"
                }
            }
        },

        waterCycle: {
            importance: [
                "Water is essential for all biochemical reactions",
                "Medium for nutrient transport in organisms and ecosystems",
                "Regulates climate (high heat capacity, evaporative cooling)",
                "Shapes landscapes (erosion, weathering)",
                "Habitat for aquatic life"
            ],
            
            reservoirs: {
                ocean: {
                    amount: "~1,335,000,000 km³ (~97% of all water)",
                    form: "Saltwater (unusable for most terrestrial life without desalination)",
                    residence: "~3,000 years average"
                },
                iceAndSnow: {
                    glaciers: "~24,000,000 km³ (mostly Antarctica, Greenland)",
                    proportion: "~1.7% of total water",
                    freshwater: "~69% of freshwater is frozen",
                    melting: "Climate change causing glacier retreat → sea level rise, altered hydrology"
                },
                groundwater: {
                    amount: "~10,500,000 km³",
                    proportion: "~30% of freshwater",
                    depth: "Shallow aquifers (fast turnover) vs deep aquifers (fossil water, thousands of years old)",
                    residence: "Weeks to 10,000 years depending on depth",
                    humanUse: "Major source for drinking water and irrigation",
                    depletion: "Over-extraction (Ogallala Aquifer USA, North China Plain, India)"
                },
                lakes: {
                    amount: "~90,000 km³",
                    proportion: "Tiny but important for humans and ecosystems",
                    freshwater: "~0.3% of freshwater"
                },
                soil: {
                    amount: "~16,000 km³",
                    importance: "Critical for plant growth",
                    residence: "2 weeks to 1 year"
                },
                atmosphere: {
                    amount: "~12,700 km³ (very small!)",
                    proportion: "~0.001% of total",
                    residence: "~9 days (rapid turnover)",
                    importance: "Despite small size, mediates water movement globally"
                },
                rivers: {
                    amount: "~2,000 km³",
                    proportion: "Tiny reservoir",
                    residence: "~2 weeks",
                    importance: "Disproportionate importance for humans, ecosystems, nutrient transport"
                },
                biota: {
                    amount: "~1,000 km³ (in living organisms)",
                    note: "Trivial reservoir size but rapid exchange"
                }
            },
            
            majorProcesses: {
                evaporation: {
                    definition: "Liquid water → water vapor (requires energy)",
                    energySource: "Solar radiation",
                    locations: "Primarily ocean (~90%), also lakes, rivers, soil",
                    rate: "~500,000 km³/year from ocean globally",
                    latentHeat: "Evaporation absorbs heat (cooling effect); condensation releases heat (warming)",
                    climate: "Major mechanism for transferring heat from tropics toward poles"
                },
                
                transpiration: {
                    definition: "Water vapor released from plant stomata (leaf pores)",
                    process: {
                        step1: "Roots absorb water from soil",
                        step2: "Water transported through xylem to leaves",
                        step3: "Evaporates from mesophyll cells",
                        step4: "Exits through stomata",
                        driver: "Driven by solar energy and vapor pressure gradient"
                    },
                    rate: "~40,000 km³/year from land vegetation",
                    purpose: "Cools plant, transports nutrients, creates suction (pulling water up tall trees)",
                    tradeoff: "Plants must open stomata for CO₂ (photosynthesis) but lose water; balance between carbon gain and water loss",
                    ecosystem: "Returns water to atmosphere, influences local climate and rainfall"
                },
                
                evapotranspiration: {
                    definition: "Combined evaporation + transpiration from ecosystems",
                    rate: "~60-70% of precipitation on land returns to atmosphere via evapotranspiration",
                    variability: {
                        humid: "Forests, wetlands: High evapotranspiration (>1000 mm/year)",
                        arid: "Deserts: Low (<200 mm/year)"
                    },
                    importance: "Determines water available for rivers, groundwater recharge"
                },
                
                condensation: {
                    definition: "Water vapor → liquid water (releases heat)",
                    process: "Air cools (rises, moves to cold region) → reaches dew point → water vapor condenses on particles (dust, salt) → forms clouds",
                    cloudFormation: "Tiny droplets suspended in air",
                    coalescence: "Droplets merge, grow larger",
                    importance: "Necessary step before precipitation; releases latent heat (powers storms)"
                },
                
                precipitation: {
                    definition: "Water falls from clouds as rain, snow, sleet, hail",
                    formation: {
                        coalescence: "Droplets merge until heavy enough to fall (warm clouds)",
                        iceCrystals: "Ice forms, grows, melts as it falls (cold clouds)"
                    },
                    rate: "~500,000 km³/year globally",
                    distribution: {
                        ocean: "~385,000 km³/year",
                        land: "~115,000 km³/year"
                    },
                    variability: "Equatorial regions: >2000 mm/year; deserts: <250 mm/year; extreme: Cherrapunji, India: >11,000 mm/year",
                    forms: "Rain (liquid), snow (ice crystals), sleet (frozen rain), hail (ice balls)"
                },
                
                infiltration: {
                    definition: "Water soaks into soil",
                    factors: {
                        soilType: "Sandy soil: high infiltration; clay: low",
                        vegetation: "Plant roots create channels → increase infiltration",
                        saturation: "Saturated soil can't absorb more",
                        slope: "Steep slopes → less time to infiltrate"
                    },
                    outcome: "Water becomes soil moisture or percolates to groundwater",
                    importance: "Recharges aquifers, provides plant water, filters pollutants"
                },
                
                runoff: {
                    definition: "Water flows over land surface into streams, rivers, lakes",
                    occurrence: "When precipitation rate > infiltration rate, or soil saturated",
                    pathways: "Overland flow → streams → rivers → lakes → ocean",
                    rate: "~40,000 km³/year from land to ocean",
                    erosion: "Runoff causes soil erosion, transports sediments and nutrients",
                    flooding: "Excessive runoff → floods",
                    humanImpact: "Urbanization (impervious surfaces) increases runoff, decreases infiltration"
                },
                
                percolation: {
                    definition: "Water moves downward through soil to groundwater",
                    rate: "Slow (weeks to years)",
                    recharge: "Replenishes aquifers",
                    importance: "Groundwater is major freshwater source",
                    problemDepletion: "Extraction often exceeds recharge rate (unsustainable)"
                },
                
                sublimation: {
                    definition: "Ice → water vapor (without melting)",
                    locations: "Glaciers, snowpack in dry, cold climates",
                    rate: "Minor globally but locally important (high mountains, polar regions)",
                    reverse: "Deposition: water vapor → ice (frost formation)"
                }
            },
            
            humanImpact: {
                damming: {
                    number: "~60,000 large dams worldwide",
                    effects: {
                        positive: "Hydroelectric power, irrigation water, flood control",
                        negative: "Alters river flow, blocks sediment, disrupts fish migration, changes evaporation rates, displaces people, alters downstream ecosystems"
                    },
                    examples: "Three Gorges Dam (China), Hoover Dam (USA), Aswan Dam (Egypt)"
                },
                
                irrigation: {
                    use: "~70% of global freshwater withdrawals for agriculture",
                    depletion: "Groundwater levels dropping (Ogallala, North China Plain, India)",
                    efficiency: "Much water lost to evaporation (especially flood irrigation)",
                    salinization: "Irrigation in arid regions → salt accumulation in soil"
                },
                
                urbanization: {
                    imperviousSurfaces: "Pavement, roofs prevent infiltration",
                    increasedRunoff: "More flashy floods, less groundwater recharge",
                    waterQuality: "Runoff carries pollutants (oil, heavy metals, nutrients)",
                    heatIsland: "Cities warmer → altered local water cycle"
                },
                
                deforestation: {
                    reducedTranspiration: "Fewer trees → less moisture returned to atmosphere",
                    increasedRunoff: "Less interception, infiltration → more erosion",
                    localClimate: "Can reduce local rainfall (forests generate rain through transpiration)",
                    example: "Amazon deforestation may be reducing rainfall, risking tipping point to savanna"
                },
                
                climateChange: {
                    intensifiedCycle: "Warmer air holds more moisture → more evaporation, more intense precipitation",
                    precipitation: "Wet areas getting wetter, dry areas drier",
                    extremes: "More droughts, more floods, more intense storms",
                    glacierMelting: "Losing freshwater storage → altered river flow (initially increase, then decrease)",
                    seaLevel: "Thermal expansion + ice melting → rising (threatens coasts, freshwater intrusion)"
                },
                
                pollution: {
                    point: "Factories, sewage treatment plants discharge pollutants",
                    nonpoint: "Agricultural runoff (nutrients, pesticides), urban runoff",
                    contamination: "Groundwater contamination (hard to clean)",
                    examples: "Flint, Michigan (lead in water), Ganges River pollution"
                }
            },
            
            solutions: {
                conservation: {
                    efficiency: "Drip irrigation (saves ~50% water vs flood), fix leaks, low-flow fixtures",
                    reuse: "Greywater systems, treat wastewater for reuse",
                    behavior: "Shorter showers, turn off taps, water-wise landscaping"
                },
                
                sustainableManagement: {
                    IWRM: "Integrated Water Resources Management (balance competing uses)",
                    groundwaterLimits: "Regulate extraction to sustainable levels",
                    protectWatersheds: "Maintain forests, wetlands (natural filtration, water storage)"
                },
                
                greenInfrastructure: {
                    rainGardens: "Capture runoff, allow infiltration",
                    permeablePavements: "Allow water to seep through",
                    greenRoofs: "Vegetation on roofs (reduces runoff, cools buildings)",
                    restored Wetlands: "Natural flood control, water purification"
                },
                
                climateAction: {
                    mitigate: "Reduce greenhouse gas emissions → stabilize water cycle",
                    adapt: "Build resilience to droughts, floods (better infrastructure, water storage)"
                }
            }
        },

        comparisonOfCycles: {
            gaseous: {
                cycles: ["Carbon", "Nitrogen", "Oxygen", "Water (vapor)"],
                characteristic: "Significant atmospheric reservoir",
                exchange: "Relatively rapid exchange with atmosphere",
                timescale: "Days to years for biological/atmospheric components; millions of years for geological",
                buffering: "Atmosphere acts as large, well-mixed reservoir"
            },
            
            sedimentary: {
                cycles: ["Phosphorus", "Sulfur", "Calcium", "Iron"],
                characteristic: "No or limited atmospheric component; rock reservoir dominant",
                exchange: "Slow; depends on weathering, sedimentation, uplift",
                timescale: "Millions of years for geological component",
                vulnerability: "Easier to disrupt locally; lost nutrients not easily replaced",
                limitation: "Often limit ecosystems (phosphorus in lakes, iron in ocean)"
            },
            
            hybrid: {
                sulfur: "Has both gaseous (H₂S, SO₂, DMS) and sedimentary (sulfate minerals) components",
                iron: "Minimal gas phase but important in ocean and terrestrial systems"
            }
        },

        interconnections: {
            carbonNitrogen: "Both required in specific ratios (C:N) for microbial decomposition; imbalance slows nutrient cycling",
            nitrogenPhosphorus: "Both cause eutrophication; often co-limit productivity (Liebig's Law of Minimum)",
            waterCarbon: "Water cycle transports dissolved carbon; photosynthesis links them (CO₂ + H₂O)",
            waterNitrogen: "Water transports nitrogen (NO₃⁻ leaching); precipitation carries nitrogen from atmosphere",
            all: "All cycles are linked through living organisms and biogeochemical processes"
        },

        keyTakeaways: [
            "Nutrients cycle through biotic and abiotic components; unlike energy, nutrients are reused",
            "Carbon cycle: photosynthesis vs respiration naturally balanced; human fossil fuel burning disrupts → climate change",
            "Nitrogen cycle: Only certain bacteria can fix N₂; humans doubled reactive nitrogen → pollution",
            "Phosphorus cycle: No gaseous phase, very slow; human mining unsustainable, runoff causes eutrophication",
            "Water cycle: Evaporation, transpiration, condensation, precipitation, runoff, infiltration; human activities alter local and global hydrology",
            "Microorganisms are essential drivers of nutrient transformations",
            "Human activities have dramatically accelerated and disrupted natural nutrient cycles → environmental problems",
            "Understanding nutrient cycles is crucial for agriculture, water management, climate change mitigation, and ecosystem conservation"
        ]
    };

    return content;
}

handlePopulationEcology(problem) {
    const content = {
        topic: "Population Ecology and Dynamics",
        category: 'population_ecology',
        summary: "Population ecology studies the dynamics of species populations: how and why population size changes over time and space. Key factors include birth rates, death rates, immigration, emigration, carrying capacity, and density-dependent and density-independent regulation. Understanding population dynamics is essential for conservation, pest management, fisheries, and predicting species' responses to environmental change.",
        
        fundamentalConcepts: {
            populationDefinition: {
                definition: "Group of individuals of the same species living in the same geographic area at the same time",
                characteristics: {
                    sameSpecies: "Can potentially interbreed",
                    sameArea: "Geographic boundaries (can be natural or arbitrary)",
                    sameTime: "Contemporaneous (alive at same time)"
                },
                examples: [
                    "All white-tailed deer in Yellowstone National Park",
                    "Oak trees in a forest stand",
                    "Bacteria in a petri dish",
                    "Humans in New York City"
                ]
            },
            
            populationProperties: {
                size_N: {
                    definition: "Total number of individuals in population",
                    symbol: "N",
                    measurement: "Census, mark-recapture, sampling",
                    variability: "Changes through births, deaths, immigration, emigration",
                    importance: "Small populations at risk of extinction (genetic drift, inbreeding, stochastic events)"
                },
                
                density: {
                    definition: "Number of individuals per unit area or volume",
                    formula: "Density = N / Area (or Volume)",
                    units: "individuals/m², individuals/hectare, individuals/km²",
                    variability: "Low density (sparse desert plants) to high density (crowded cities, bacterial colonies)",
                    importance: "Affects interactions (competition, mate finding, disease transmission)"
                },
                
                distribution: {
                    definition: "Spatial arrangement of individuals",
                    types: {
                        clumped: {
                            description: "Individuals clustered in patches",
                            causes: "Resources patchy, social behavior (herds, schools), reproduction (offspring near parents)",
                            examples: "Trees around water source, fish schools, elephant herds",
                            mostCommon: "Most common pattern in nature"
                        },
                        uniform: {
                            description: "Individuals evenly spaced",
                            causes: "Territoriality, competition (plants competing for light/water)",
                            examples: "Territorial birds, creosote bushes in desert (allelopathy)",
                            rare: "Relatively rare in nature"
                        },
                        random: {
                            description: "Individuals distributed without pattern",
                            causes: "Resources uniformly distributed, no strong social interactions",
                            examples: "Wind-dispersed seedlings in uniform habitat",
                            rare: "Very rare (most habitats have some heterogeneity)"
                        }
                    },
                    measurement: "Quadrat sampling, nearest-neighbor analysis",
                    importance: "Affects sampling methods, predicts population spread"
                },
                
                ageStructure: {
                    definition: "Proportion of individuals in different age classes",
                    representation: "Age pyramids (horizontal bars for each age class)",
                    types: {
                        expanding: "Wide base (many young) → rapid population growth",
                        stable: "Rectangular (even across ages) → stable population",
                        declining: "Narrow base (few young) → population decline"
                    },
                    importance: "Predicts future population trends, informs management",
                    applications: "Human demography, wildlife management, conservation",
                    examples: [
                        "Developing countries: Expanding pyramid",
                        "Japan, Italy: Declining pyramid (aging population)",
                        "Endangered species: Often declining pyramid"
                    ]
                },
                
                sexRatio: {
                    definition: "Ratio of males to females",
                    typical: "1:1 in most species (Fisher's principle: equal investment in sons and daughters evolutionarily stable)",
                    deviations: {
                        femaleSkewed: "Social insects (many workers, few males), some fish (sex change)",
                        maleSkewed: "Sometimes in humans (China, India - sex-selective abortion)",
                        environmental: "Some reptiles: temperature-dependent sex determination"
                    },
                    importance: "Affects reproduction rate, social structure, conservation (need breeding pairs)"
                }
            },
            
            populationChangeEquation: {
                basicEquation: "ΔN / Δt = (B - D) + (I - E)",
                where: {
                    N: "Population size",
                    t: "Time",
                    B: "Births (per capita rate: b)",
                    D: "Deaths (per capita rate: d)",
                    I: "Immigration (individuals moving in)",
                    E: "Emigration (individuals moving out)"
                },
                closedPopulation: "If I = E = 0 (no movement), then ΔN/Δt = B - D",
                perCapitaRates: {
                    birthRate: "b = Births / N",
                    deathRate: "d = Deaths / N",
                    growthRate: "r = b - d (per capita rate of increase)"
                },
                interpretation: {
                    rPositive: "Population growing (b > d)",
                    rZero: "Population stable (b = d)",
                    rNegative: "Population declining (b < d)"
                }
            }
        },

        populationGrowthModels: {
            exponentialGrowth: {
                name: "Exponential Growth (J-shaped curve)",
                assumptions: [
                    "Unlimited resources",
                    "Constant per capita growth rate (r)",
                    "No immigration/emigration",
                    "No age structure (all individuals identical)",
                    "Continuous reproduction"
                ],
                
                differentialEquation: "dN/dt = rN",
                where: {
                    dN_dt: "Instantaneous rate of population change",
                    r: "Intrinsic rate of increase (per capita growth rate)",
                    N: "Population size"
                },
                
                integratedForm: "Nₜ = N₀ × e^(rt)",
                where: {
                    Nt: "Population size at time t",
                    N0: "Initial population size",
                    e: "Base of natural logarithm (~2.718)",
                    r: "Intrinsic growth rate",
                    t: "Time"
                },
                
                characteristics: {
                    shape: "J-curve (ever-steeper increase)",
                    growthRate: "Accelerates over time (ΔN/Δt increases)",
                    perCapitaRate: "Constant (r is constant)",
                    doublingTime: "td = ln(2) / r = 0.693 / r (time to double population)",
                    example: "If r = 0.1/year, doubling time = 6.93 years"
                },
                
                whenOccurs: {
                    realWorld: [
                        "Colonizing species in new habitat (abundant resources, few competitors)",
                        "Bacteria in fresh culture medium (lag phase → exponential)",
                        "Invasive species initially (zebra mussels, kudzu)",
                        "Recovering populations after disturbance",
                        "Humans historically (until recently in most countries)"
                    ],
                    limitations: "Cannot continue indefinitely; resources eventually become limited"
                },
                
                rmax: {
                    definition: "Maximum per capita growth rate under ideal conditions",
                    variability: "r-selected species (high rmax, weeds, insects); K-selected species (low rmax, elephants, whales)",
                    factors: "Body size (smaller animals generally higher rmax), temperature, food quality"
                },
                
                mathematicalExample: {
                    scenario: "Bacterial culture: N₀ = 100 cells, r = 1.5/hour (divides every ~28 minutes)",
                    hour1: "N₁ = 100 × e^(1.5×1) = 448 cells",
                    hour2: "N₂ = 100 × e^(1.5×2) = 2,008 cells",
                    hour5: "N₅ = 100 × e^(1.5×5) = 180,034 cells",
                    hour10: "N₁₀ = 100 × e^(1.5×10) = ~3.3 million cells",
                    note: "Exponential growth is VERY fast!"
                }
            },
            
            logisticGrowth: {
                name: "Logistic Growth (S-shaped curve)",
                assumptions: [
                    "Resources are LIMITED",
                    "Carrying capacity (K) exists",
                    "Intraspecific competition increases with density",
                    "No immigration/emigration",
                    "Continuous reproduction"
                ],
                
                differentialEquation: "dN/dt = rN × [(K - N) / K]",
                alternative: "dN/dt = rN × (1 - N/K)",
                where: {
                    dN_dt: "Instantaneous rate of population change",
                    r: "Intrinsic growth rate",
                    N: "Current population size",
                    K: "Carrying capacity",
                    term: "(K - N) / K is the unused carrying capacity (0 to 1)"
                },
                
                carryingCapacity: {
                    definition: "Maximum population size that environment can sustain indefinitely",
                    symbol: "K",
                    determinedBy: "Limiting resources (food, water, space, nest sites, etc.)",
                    variability: "Changes with environment (seasonally, yearly, with habitat quality)",
                    note: "Not a fixed number; populations often fluctuate around K"
                },
                
                characteristics: {
                    shape: "S-curve (sigmoid)",
                    phases: {
                        lag: {
                            description: "Slow initial growth",
                            N: "N << K",
                            growthRate: "Low (small population)",
                            perCapitaRate: "≈ r (resources abundant)"
                        },
                        exponential: {
                            description: "Rapid acceleration",
                            N: "N < K/2",
                            growthRate: "Increasing (dN/dt peaks at K/2)",
                            perCapitaRate: "Still high (resources not yet limiting)"
                        },
                        deceleration: {
                            description: "Growth slows",
                            N: "K/2 < N < K",
                            growthRate: "Decreasing (competition intensifies)",
                            perCapitaRate: "Declining (r × (1 - N/K) decreases)"
                        },
                        plateau: {
                            description: "Population stabilizes",
                            N: "N ≈ K",
                            growthRate: "≈ 0 (births ≈ deaths)",
                            perCapitaRate: "≈ 0 (1 - N/K ≈ 0)"
                        }
                    },
                    maxGrowthRate: "Occurs at N = K/2 (inflection point)",
                    equilibrium: "At K, dN/dt = 0 (population stable)"
                },
                
                whenOccurs: {
                    realWorld: [
                        "Most natural populations over long periods",
                        "Laboratory populations (yeast, Paramecium, Daphnia)",
                        "Reindeer on St. Paul Island (introduced, grew logistically, overshot K, crashed)",
                        "Human populations transitioning to lower growth (demographic transition)"
                    ]
                },
                
                overshoot: {
                    definition: "Population exceeds K temporarily",
                    causes: "Time lag in resource depletion or reproductive responses",
                    consequence: "Rapid die-off to below K (often oscillations around K)",
                    example: "Reindeer on St. Paul Island: grew to 2000 (K ≈ 500), crashed to 8"
                },
                
                mathematicalExample: {
                    scenario: "Deer population: N₀ = 20, r = 0.5/year, K = 500",
                    year0: "N = 20, dN/dt = 0.5 × 20 × (1 - 20/500) = 9.6 ≈ 10 deer/year",
                    year10: "N ≈ 143, dN/dt ≈ 52 deer/year (near max growth)",
                    year20: "N ≈ 368, dN/dt ≈ 24 deer/year (slowing)",
                    year40: "N ≈ 495, dN/dt ≈ 2 deer/year (approaching K)",
                    equilibrium: "Stabilizes near K = 500"
                }
            },
            
            comparison: {
                exponential: {
                    shape: "J-curve (ever-increasing slope)",
                    carryingCapacity: "None (infinite resources assumed)",
                    perCapitaRate: "Constant (r)",
                    reality: "Short-term; initial colonization",
                    maxSize: "Unlimited (unrealistic)"
                },
                logistic: {
                    shape: "S-curve (levels off)",
                    carryingCapacity: "K (limited resources)",
                    perCapitaRate: "Decreases with N: r(1 - N/K)",
                    reality: "Long-term; most populations",
                    maxSize: "Limited to K"
                }
            },
            
            limitationsOfModels: {
                exponential: [
                    "Assumes unlimited resources (never true long-term)",
                    "Ignores density-dependent effects",
                    "Predicts infinite growth (impossible)"
                ],
                logistic: [
                    "Assumes K is constant (actually varies)",
                    "Ignores time lags (age structure, delayed responses)",
                    "Assumes smooth adjustment to K (populations often overshoot, oscillate)",
                    "Ignores stochasticity (random environmental variation)",
                    "Simplifies density-dependence (actual relationships complex)"
                ],
                both: [
                    "Ignore age structure (all individuals identical)",
                    "Ignore spatial structure (populations heterogeneous)",
                    "Continuous time/reproduction (many species reproduce seasonally)"
                ],
                usefulness: "Despite limitations, provide valuable conceptual framework and baseline expectations"
            }
        },

        populationRegulation: {
            definition: "Factors that prevent unlimited population growth and cause populations to stabilize (often around K)",
            
            densityDependentFactors: {
                definition: "Factors whose effects INCREASE as population density increases",
                mechanism: "Negative feedback: high density → increased mortality or decreased birth rate → population declines → density decreases → loop",
                importance: "Stabilize populations near K (homeostatic regulation)",
                
                competition: {
                    intraspecific: {
                        definition: "Competition among individuals of SAME species",
                        resources: "Food, water, space, mates, nest sites, light (plants)",
                        outcomes: {
                            scramble: "All individuals get reduced resources (all suffer equally)",
                            contest: "Some individuals exclude others (winners/losers)"
                        },
                        effects: {
                            growth: "Reduced growth rates at high density",
                            reproduction: "Fewer offspring, delayed maturity",
                            survival: "Increased mortality (starvation, stress)",
                            dispersal: "Some individuals emigrate to find resources"
                        },
                        examples: [
                            "Crowded seedlings: stunted growth",
                            "Deer in winter: food shortage → starvation",
                            "Territorial birds: non-territorial individuals don't breed"
                        ]
                    },
                    interspecific: {
                        definition: "Competition between DIFFERENT species",
                        outcome: "Can limit both species; one may exclude the other (competitive exclusion)",
                        regulation: "Can contribute to density-dependence if competitor abundance varies with focal species density",
                        example: "Squirrels and chipmunks competing for acorns"
                    }
                },
                
                predation: {
                    mechanism: "More prey → predators eat more, reproduce more → increased predation pressure → prey decline",
                    functionalResponse: {
                        type1: "Predator consumption rate increases linearly with prey density (until satiation)",
                        type2: "Consumption rate increases rapidly at low prey density, then levels off (most common)",
                        type3: "S-shaped (learning, prey switching)"
                    },
                    numericalResponse: "Predator population increases with prey density (more food → more predator reproduction)",
                    cycles: "Can create predator-prey oscillations (lynx-hare, foxes-lemmings)",
                    example: "Wolves and elk: more elk → wolves kill more, reproduce more → elk decline"
                },
                
                parasitismDisease: {
                    transmission: "Contact-transmitted diseases spread faster at high density (more encounters)",
                    vectorBorne: "Mosquitoes, ticks more likely to encounter hosts at high density",
                    stressImmune: "Crowding causes stress → weakened immune system → increased susceptibility",
                    examples: [
                        "Plague in crowded prairie dog colonies",
                        "Infectious diseases in dense human populations (COVID-19 spreads faster in crowded areas)",
                        "White-nose syndrome in bat caves"
                    ],
                    regulation: "Epidemics can crash high-density populations"
                },
                
                toxicWasteAccumulation: {
                    mechanism: "Waste products accumulate at high density, become toxic",
                    examples: [
                        "Bacteria in culture: metabolic wastes (acids, alcohols) poison cells",
                        "Tadpoles: ammonia excretion in stagnant pools",
                        "Allelopathy: plants release chemicals inhibiting neighbors"
                    ],
                    humanRelevance: "Sewage, pollution accumulate in dense human populations"
                },
                
                territoriality: {
                    mechanism: "Fixed number of territories available; excess individuals cannot breed or are excluded",
                    effect: "Reproductive rate limited by availability of quality habitat",
                    examples: [
                        "Songbirds: males defend territories; only territorial males attract mates",
                        "Red grouse in Scotland: territorial behavior limits density"
                    ],
                    social: "Dominance hierarchies (only dominant individuals breed)"
                },
                
                stressBehavior: {
                    mechanism: "High density → physiological stress → hormonal changes → reduced reproduction, increased aggression",
                    effects: "Suppressed immune system, infanticide, cannibalism",
                    examples: [
                        "Rats in crowded conditions: behavioral breakdown, increased aggression",
                        "Lemmings: crowding stress may contribute to population crashes",
                        "Mice: crowding inhibits reproduction"
                    ]
                }
            },
            
            densityIndependentFactors: {
                definition: "Factors whose effects do NOT depend on population density",
                mechanism: "Kill/harm similar PROPORTION regardless of density",
                importance: "Prevent populations from reaching K; cause fluctuations",
                note: "Often catastrophic, abiotic factors",
                
                weather: {
                    temperature: "Freezes, heat waves kill regardless of density",
                    precipitation: "Droughts, floods",
                    examples: [
                        "Late spring freeze kills wildflower seedlings (high and low density equally affected)",
                        "Hurricane destroys 80% of forest birds regardless of population size",
                        "Drought kills 50% of plants whether crowded or sparse"
                    ]
                },
                
                naturalDisasters: {
                    fire: "Wildfires kill indiscriminately",
                    volcanoes: "Eruptions devastate area",
                    earthquakes: "Tsunami, landslides",
                    examples: [
                        "Mount St. Helens eruption (1980): killed animals across large area",
                        "Fire in Yellowstone (1988): killed trees regardless of density"
                    ]
                },
                
                humanDisturbance: {
                    pollution: "Pesticides, oil spills, industrial chemicals kill regardless of density",
                    habitatDestruction: "Bulldozing, clear-cutting removes habitat completely",
                    harvest: "Hunting, fishing (if not density-dependent)",
                    examples: [
                        "Pesticide spray kills all insects in field (not density-dependent unless targeting is involved)",
                        "Exxon Valdez oil spill killed seabirds regardless of population size"
                    ]
                },
                
                seasonal: {
                    photoperiod: "Changing day length triggers dormancy, migration (not density-dependent)",
                    temperature: "Seasonal cold kills frost-intolerant species"
                }
            },
            
            comparison: {
                densityDependent: {
                    effect: "Strength increases with density",
                    mechanism: "Negative feedback (stabilizing)",
                    examples: "Competition, predation, disease, territoriality",
                    populationEffect: "Regulates population near K",
                    graph: "Effect steepens with increasing density"
                },
                densityIndependent: {
                    effect: "Constant proportion regardless of density",
                    mechanism: "Random, catastrophic (destabilizing)",
                    examples: "Weather, natural disasters, pollution",
                    populationEffect: "Causes fluctuations, prevents reaching K",
                    graph: "Horizontal line (constant effect)"
                }
            },
            
            relativImportance: {
                stable: "Density-dependent factors dominate in stable environments (tropics, mature forests)",
                variable: "Density-independent factors important in variable environments (deserts, temperate grasslands, arctic)",
                reality: "Both operate simultaneously; relative importance varies with conditions"
            }
        },

        lifeHistoryStrategies: {
            definition: "Suite of traits related to growth, reproduction, and survival that evolve in response to environmental conditions",
            tradeoffs: "Limited resources must be allocated among growth, reproduction, survival (can't maximize all)",
            
            rSelected: {
                name: "r-selected species (opportunistic)",
                environment: "Unstable, unpredictable, ephemeral (short-lived habitats), low competition",
                strategy: "Reproduce quickly, produce many offspring, colonize rapidly ('live fast, die young')",
                
                traits: {
                    bodySize: "Small",
                    maturity: "Early (rapid development)",
                    lifespan: "Short",
                    offspring: "Many (high fecundity)",
                    offspringSize: "Small (little investment per offspring)",
                    parental: "None or minimal parental care",
                    survivalCurve: "Type III (high juvenile mortality)",
                    generation: "Short generation time",
                    populationGrowth: "Rapid (high r), exponential when conditions good"
                },
                
                advantages: [
                    "Rapid colonization of new habitats",
                    "Quick recovery from disturbances",
                    "Exploit temporary resources",
                    "High reproductive output"
                ],
                
                disadvantages: [
                    "Poor competitors (outcompeted in stable conditions)",
                    "Vulnerable to environmental variability (boom-bust cycles)",
                    "High juvenile mortality",
                    "Low probability each offspring survives"
                ],
                
                examples: [
                    "Insects (mosquitoes, fruit flies, aphids)",
                    "Weeds (dandelions, ragweed)",
                    "Bacteria",
                    "Small rodents (mice, voles)",
                    "Many fish (produce thousands of eggs)"
                ]
            },
            
            KSelected: {
                name: "K-selected species (equilibrium)",
                environment: "Stable, predictable, long-lasting, high competition (near carrying capacity)",
                strategy: "Invest in fewer, high-quality offspring; compete well; maximize survival ('live slow, die old')",
                
                traits: {
                    bodySize: "Large",
                    maturity: "Late (slow development)",
                    lifespan: "Long",
                    offspring: "Few (low fecundity)",
                    offspringSize: "Large (high investment per offspring)",
                    parental: "Extensive parental care (teaching, protection)",
                    survivalCurve: "Type I (high survival to old age, then rapid senescence)",
                    generation: "Long generation time",
                    populationGrowth: "Slow, logistic, near K"
                },
                
                advantages: [
                    "Superior competitors (win in stable, crowded conditions)",
                    "High offspring survival (due to care)",
                    "Persist in stable environments",
                    "Efficient resource use"
                ],
                
                disadvantages: [
                    "Slow to colonize new habitats",
                    "Slow recovery from disturbances (low reproductive rate)",
                    "Vulnerable to extinction (small populations, low genetic diversity)",
                    "Require long-term stable conditions"
                ],
                
                examples: [
                    "Elephants, whales, great apes",
                    "Large trees (oaks, redwoods)",
                    "Humans",
                    "Eagles, condors, albatrosses",
                    "Many large, long-lived fish (sharks, sturgeon)"
                ]
            },
            
            continuum: {
                concept: "r-K is continuum, not binary; most species fall between extremes",
                factors: "Position depends on body size, environmental predictability, mortality patterns",
                flexibility: "Some species show plasticity (adjust strategy based on conditions)",
                examples: [
                    "Deer: intermediate (moderate reproduction, moderate care)",
                    "Salmon: r traits (many offspring, no care) but delayed maturity (K trait)"
                ]
            },
            
            tradeoffs: {
                quantityVsQuality: "Many small offspring with low survival OR few large offspring with high survival",
                growthVsReproduction: "Invest in own growth (delay reproduction) OR reproduce early (sacrifice growth)",
                currentVsFuture: "Reproduce now (may shorten lifespan) OR wait (increase future reproduction)",
                example: "Pacific salmon (reproduce once, massively, then die - 'semelparity') vs Atlantic salmon (reproduce multiple times - 'iteroparity')"
            }
        },

        survivorshipCurves: {
            definition: "Graphical representation of proportion of cohort surviving over time",
            axes: "X-axis: Age; Y-axis: log(Number surviving) or Proportion surviving",
            cohort: "Group of individuals born at same time (followed through life)",
            
            typeI: {
                shape: "Convex (high survival until old age, then rapid decline)",
                description: "Low mortality throughout life; high survival to old age; die of senescence",
                mortality: "Most die as old adults",
                strategy: "High parental investment, K-selected",
                examples: [
                    "Humans (in developed countries)",
                    "Elephants",
                    "Large mammals (whales, gorillas)",
                    "Some birds (albatrosses)"
                ],
                interpretation: "Parents invest heavily in offspring survival (care, protection)"
            },
            
            typeII: {
                shape: "Diagonal line (constant mortality rate at all ages)",
                description: "Equal probability of dying at any age",
                mortality: "Constant across lifespan",
                strategy: "Intermediate",
                examples: [
                    "Birds (many songbirds, parrots)",
                    "Small mammals (squirrels, rodents)",
                    "Some reptiles (lizards)",
                    "Hydra (cnidarian - doesn't age!)"
                ],
                interpretation: "Mortality not strongly age-dependent; extrinsic factors (predation, disease) kill indiscriminately"
            },
            
            typeIII: {
                shape: "Concave (high early mortality, survivors live long)",
                description: "Very high juvenile/infant mortality; few reach adulthood; those that do have good survival",
                mortality: "Most die young",
                strategy: "High fecundity, r-selected, little parental care",
                examples: [
                    "Fish (produce thousands of eggs, few survive)",
                    "Marine invertebrates (oysters, sea urchins - larvae eaten by predators)",
                    "Plants (seeds - most eaten, fail to germinate, or die as seedlings)",
                    "Insects (high egg/larval mortality)",
                    "Amphibians (frogs - tadpoles vulnerable)"
                ],
                interpretation: "Overwhelm predators with numbers; only a few need survive to maintain population"
            },
            
            realityComplexity: {
                idealizedCurves: "Types I, II, III are idealized; real populations show variation",
                mixedPatterns: "Some species show different curves depending on conditions (good vs bad years)",
                humanExample: "Humans historically: Type III (high infant mortality); modern developed countries: Type I",
                influencingFactors: "Predation, disease, food availability, parental care, environmental conditions"
            },
            
            lifeTable: {
                definition: "Table tracking cohort survival and reproduction over time",
                columns: {
                    age_x: "Age class",
                    n_x: "Number surviving to age x",
                    l_x: "Proportion surviving to age x (= nₓ / n₀)",
                    d_x: "Number dying between age x and x+1",
                    q_x: "Mortality rate (= dₓ / nₓ)",
                    m_x: "Fecundity (offspring produced per individual at age x)"
                },
                calculations: {
                    survivalRate: "1 - qₓ",
                    lifeExpectancy: "Average age at death for individuals of age x",
                    reproduction: "Σ(lₓ × mₓ) = net reproductive rate (R₀)",
                    generationTime: "Average age of parents when offspring born"
                },
                applications: "Wildlife management, fisheries, conservation, actuarial science (insurance)"
            }
        },

        metapopulations: {
            definition: "Set of spatially separated populations connected by occasional dispersal",
            structure: "Populations in habitat patches; individuals migrate between patches",
            
            conceptualFramework: {
                patches: "Discrete habitat areas separated by unsuitable matrix (non-habitat)",
                localPopulations: "Population in each patch (can go extinct)",
                dispersal: "Some individuals move between patches (colonize empty patches, rescue declining populations)",
                dynamics: "Balance between local extinction and recolonization"
            },
            
            LevinsModel: {
                equation: "dp/dt = cp(1 - p) - ep",
                where: {
                    p: "Proportion of patches occupied",
                    c: "Colonization rate",
                    e: "Extinction rate"
                },
                equilibrium: "p* = 1 - e/c (if e < c, metapopulation persists; if e > c, metapopulation goes extinct)",
                interpretation: "Metapopulation persists if colonization exceeds extinction"
            },
            
            patchTypes: {
                source: {
                    definition: "High-quality habitat; births > deaths; produces emigrants",
                    role: "Sustains metapopulation; colonizes sink patches"
                },
                sink: {
                    definition: "Low-quality habitat; deaths > births; depends on immigration",
                    role: "Maintained by immigration from sources"
                }
            },
            
            keyInsights: {
                persistence: "Some local populations go extinct, but metapopulation persists (recolonization prevents regional extinction)",
                connectivity: "Corridors (habitat strips) facilitate dispersal, increase metapopulation stability",
                largePatches: "Less likely to go extinct (larger populations, more resources)",
                isolationRisk: "Isolated patches rarely recolonized (rescue effect weak)"
            },
            
            conservation: {
                fragmentedHabitats: "Human activities fragment landscapes → populations become metapopulations",
                habitatLoss: "Reduces patch number and connectivity → threatens metapopulation persistence",
                corridors: "Create wildlife corridors to connect patches (facilitate dispersal)",
                protect: "Protect multiple patches (don't focus on just one)",
                examples: [
                    "Butterflies in meadow patches",
                    "Salamanders in ponds",
                    "Plants on islands or mountaintops",
                    "Spotted owls in old-growth forest fragments"
                ]
            }
        },

        applications: {
            conservation: {
                endangeredSpecies: {
                    assessment: "Estimate population size, growth rate, viability",
                    PVA: "Population Viability Analysis: model extinction risk under different scenarios",
                    recovery: "Minimum viable population (MVP): size needed to persist (typically hundreds to thousands)",
                    genetics: "Avoid inbreeding depression (need genetic diversity)",
                    examples: "Black-footed ferrets, California condors, whooping cranes"
                },
                habitatProtection: {
                    sizing: "Determine reserve size needed to support viable populations",
                    connectivity: "Design corridors linking populations",
                    bufferZones: "Protect surrounding areas from disturbance"
                }
            },
            
            pestManagement: {
                IPM: "Integrated Pest Management: understanding pest population dynamics",
                threshold: "Economic injury level: density where cost of control < cost of damage",
                timing: "Apply control when pest vulnerable (high mortality impact)",
                resistance: "Rotate pesticides to prevent resistance evolution (r-selected pests evolve quickly)"
            },
            
            fisheries: {
                MSY: "Maximum Sustainable Yield: harvest that maintains population near K/2 (maximum growth rate)",
                quotas: "Set catch limits based on population estimates and reproduction rates",
                size: "Size limits (let young mature, reproduce before harvest)",
                collapse: "Overharvesting ignores population dynamics → collapses (cod, herring)"
            },
            
            wildlife: {
                huntingRegulations: "Bag limits, seasons based on population surveys",
                reintroduction: "Understanding carrying capacity, dispersal for reintroduction programs (wolves, otters)",
                invasiveControl: "Rapid response when invasive species detected (exponential growth phase)"
            },
            
            humanPopulation: {
                demography: "Age structure, growth rate predict future needs (schools, healthcare, jobs)",
                resources: "Estimate carrying capacity (debated - technology increases K, but limits exist)",
                transition: "Demographic transition: high birth/death rates → low birth/death rates (as development increases)"
            },
            
            climateChange: {
                rangeShifts: "Species move poleward, upward as climate warms (need dispersal ability)",
                phenology: "Timing of reproduction, migration changes (can mismatch with food availability)",
                extinction: "Species unable to disperse or adapt face extinction risk",
                modeling: "Predict population responses to changing conditions"
            }
        },

        commonMisconceptions: {
            misconception1: {
                wrong: "All populations grow exponentially",
                correct: "Exponential growth only occurs when resources unlimited (rarely, temporarily); most populations limited by resources (logistic)",
                clarification: "Exponential is special case; logistic is more general, realistic"
            },
            misconception2: {
                wrong: "Carrying capacity (K) is fixed",
                correct: "K varies with environmental conditions (seasonally, annually, with habitat quality)",
                clarification: "K is not constant; populations often fluctuate around changing K"
            },
            misconception3: {
                wrong: "All populations reach carrying capacity smoothly",
                correct: "Many populations overshoot K (time lags), then crash, leading to oscillations",
                clarification: "Logistic model assumes instantaneous adjustment; real populations have delays"
            },
            misconception4: {
                wrong: "r-selected vs K-selected is strict dichotomy",
                correct: "It's a continuum; most species show intermediate traits",
                clarification: "r-K is useful conceptual framework but oversimplifies reality"
            },
            misconception5: {
                wrong: "Density-dependent factors always dominate",
                correct: "Relative importance of density-dependent vs density-independent varies with environment",
                clarification: "Stable environments: density-dependent dominates; variable environments: density-independent important"
            },
            misconception6: {
                wrong: "Small populations are always doomed",
                correct: "Small populations at risk but can recover with proper management (captive breeding, habitat protection, genetic rescue)",
                clarification: "Small size increases extinction risk (inbreeding, stochasticity) but is not deterministic; many species recovered from <100 individuals"
            },
            misconception7: {
                wrong: "Population growth rate (r) is same as population growth (ΔN)",
                correct: "r is PER CAPITA rate; ΔN is absolute change (ΔN = rN, so depends on both r and N)",
                clarification: "Small population with high r may grow slower than large population with low r"
            }
        },

        keyTakeaways: [
            "Population size changes through births, deaths, immigration, and emigration (BIDE factors)",
            "Exponential growth (J-curve) occurs when resources unlimited; logistic growth (S-curve) occurs when approaching carrying capacity",
            "Carrying capacity (K) is maximum sustainable population size; determined by limiting resources",
            "Density-dependent factors (competition, predation, disease) regulate populations near K through negative feedback",
            "Density-independent factors (weather, disasters) cause fluctuations regardless of density",
            "r-selected species: many small offspring, rapid reproduction, colonizers; K-selected: few large offspring, slow reproduction, competitors",
            "Survivorship curves (I, II, III) reflect mortality patterns and life history strategies",
            "Metapopulations: spatially separated populations linked by dispersal; balance between local extinction and recolonization",
            "Understanding population dynamics is essential for conservation, pest management, fisheries, and predicting responses to environmental change"
        ]
    };

    return content;
}

handleCommunityEcology(problem) {
    const content = {
        topic: "Community Ecology and Species Interactions",
        category: 'community_ecology',
        summary: "Community ecology examines how multiple species interact and coexist, and how these interactions shape community structure, diversity, and dynamics. Key concepts include species interactions (competition, predation, mutualism, etc.), ecological niches, keystone species, succession, and the factors maintaining biodiversity. Understanding community ecology is crucial for conservation, ecosystem management, and predicting responses to environmental change.",
        
        fundamentalConcepts: {
            communityDefinition: {
                definition: "All populations of different species living and interacting in a particular area at a particular time",
                scope: "Can be defined at various scales (pond community, forest community, soil microbial community)",
                characteristics: {
                    diversity: "Number and relative abundance of species",
                    structure: "Feeding relationships, spatial distribution, dominance patterns",
                    dynamics: "Changes over time (succession, seasonal variation)"
                },
                examples: [
                    "All organisms in a coral reef",
                    "All species in a prairie grassland",
                    "Microbes in your gut",
                    "Intertidal rocky shore organisms"
                ]
            },
            
            communityProperties: {
                speciesRichness: {
                    definition: "Number of different species in community (S)",
                    measurement: "Simple count",
                    limitation: "Ignores relative abundances (rare vs common)"
                },
                speciesAbundance: {
                    definition: "Number of individuals per species",
                    patterns: {
                        dominance: "One or few species very abundant, others rare",
                        evenness: "Species similarly abundant"
                    }
                },
                diversity: {
                    definition: "Combines richness and evenness",
                    indices: "Shannon H', Simpson D (see biodiversity section)",
                    importance: "More informative than richness alone"
                },
                trophicStructure: {
                    definition: "Feeding relationships and energy flow",
                    components: "Producers, consumers, decomposers; food webs",
                    complexity: "Number of trophic levels, connectance"
                }
            }
        },

        speciesInteractions: {
            overview: {
                types: "Competition (- -), Predation (+ -), Herbivory (+ -), Parasitism (+ -), Mutualism (+ +), Commensalism (+ 0), Amensalism (- 0)",
                notation: "(+) = benefits, (-) = harmed, (0) = unaffected",
                importance: "Shape community structure, determine coexistence, drive evolution"
            },
            
            competition: {
                definition: "Interaction where both species negatively affected by limiting resources",
                notation: "(- -)",
                
                types: {
                    interspecific: {
                        definition: "Competition between different species",
                        importance: "Determines which species coexist, shapes community composition",
                        example: "Two bird species competing for nest cavities"
                    },
                    intraspecific: {
                        definition: "Competition within same species",
                        importance: "Density-dependent population regulation",
                        example: "Seedlings competing for light, water"
                    }
                },
                
                mechanisms: {
                    exploitativeCompetition: {
                        name: "Exploitation (resource competition)",
                        mechanism: "Species compete by consuming shared resource (indirect)",
                        result: "Whoever uses resource more efficiently wins",
                        example: "Plants competing for soil nitrogen; both deplete shared pool"
                    },
                    interferenceCompetition: {
                        name: "Interference (contest competition)",
                        mechanism: "Direct interactions; one species prevents another from accessing resource",
                        behaviors: "Territoriality, allelopathy (plants release toxins), physical aggression",
                        example: "Barnacle species: Balanus physically crushes and overgrows Chthamalus"
                    },
                    apparentCompetition: {
                        name: "Apparent competition",
                        mechanism: "Mediated by shared predator or parasite (indirect)",
                        result: "Increase in one prey increases predator → increased predation on other prey",
                        example: "Deer and moose share ticks; more deer → more ticks → harms moose"
                    }
                },
                
                outcomes: {
                    competitiveExclusion: {
                        principle: "Gause's Principle: Complete competitors cannot coexist indefinitely",
                        statement: "Two species with identical niches cannot coexist; competitively superior excludes inferior",
                        evidence: "Gause (1934): Paramecium aurelia outcompeted P. caudatum in lab",
                        reality: "Rarely see identical niches in nature (coexistence requires differentiation)"
                    },
                    coexistence: {
                        requirement: "Species must differ sufficiently in resource use (niche differentiation)",
                        mechanisms: [
                            "Resource partitioning: use different resources or same resource differently",
                            "Spatial partitioning: use different microhabitats",
                            "Temporal partitioning: active at different times",
                            "Trade-offs: each species superior in different conditions"
                        ]
                    },
                    characterDisplacement: {
                        definition: "Competing species evolve to become more different in traits related to resource use",
                        mechanism: "Natural selection favors individuals using different resources (less competition)",
                        evidence: "Morphological differences greater in sympatry than allopatry",
                        example: "Darwin's finches: beak sizes diverge where species overlap (reduces seed size overlap)"
                    }
                },
                
                lotkaVolterraModel: {
                    equations: {
                        species1: "dN₁/dt = r₁N₁[(K₁ - N₁ - α₁₂N₂) / K₁]",
                        species2: "dN₂/dt = r₂N₂[(K₂ - N₂ - α₂₁N₁) / K₂]"
                    },
                    where: {
                        α12: "Competition coefficient: effect of species 2 on species 1",
                        α21: "Competition coefficient: effect of species 1 on species 2"
                    },
                    outcomes: {
                        species1Wins: "K₁ > K₂/α₂₁ AND K₁/α₁₂ > K₂ → Species 1 excludes species 2",
                        species2Wins: "K₂ > K₁/α₁₂ AND K₂/α₂₁ > K₁ → Species 2 excludes species 1",
                        coexistence: "K₁ > K₂/α₂₁ AND K₂ > K₁/α₁₂ → Both coexist (intraspecific > interspecific competition)",
                        unstable: "K₁ < K₂/α₂₁ AND K₂ < K₁/α₁₂ → Whoever starts with advantage wins (priority effect)"
                    },
                    interpretation: "Coexistence requires each species more limited by intraspecific than interspecific competition"
                },
                
                examples: [
                    {
                        species: "Barnacles (Chthamalus and Balanus)",
                        mechanism: "Interference - Balanus outcompetes, crushes Chthamalus",
                        outcome: "Chthamalus restricted to upper intertidal (realizes narrower niche)",
                        study: "Connell (1961) removal experiments"
                    },
                    {
                        species: "Warblers in spruce trees",
                        mechanism: "Resource partitioning - five species feed in different tree zones",
                        outcome: "Coexistence through spatial niche differentiation",
                        study: "MacArthur (1958)"
                    },
                    {
                        species: "Plants competing for light, water, nutrients",
                        mechanism: "Exploitation competition",
                        outcome: "Dominance hierarchies, size-asymmetric competition (large individuals disproportionately affect small)"
                    }
                ]
            },
            
            predation: {
                definition: "One species (predator) kills and eats another (prey)",
                notation: "(+ -): predator benefits, prey harmed",
                
                types: {
                    carnivory: "Animal eating animal (lion eating zebra)",
                    herbivory: "Animal eating plant (caterpillar eating leaves)",
                    parasitoidism: "Insect larva eats host from inside, eventually killing it (wasps)"
                },
                
                effectsOnPrey: {
                    directMortality: "Individuals killed and consumed",
                    traitMediated: "Prey alter behavior (vigilance, hiding) → reduced foraging, growth, reproduction",
                    adaptations: "Evolution of anti-predator traits (armor, toxins, camouflage, warning colors)"
                },
                
                effectsOnPredator: {
                    energy: "Provides food, energy for survival and reproduction",
                    numericalResponse: "Predator population tracks prey abundance",
                    limitation: "Predator population size limited by prey availability"
                },
                
                populationDynamics: {
                    cycles: {
                        description: "Predator and prey populations oscillate",
                        mechanism: {
                            step1: "Prey abundant → predators eat well, reproduce",
                            step2: "Predators increase → consume more prey",
                            step3: "Prey decline → predators starve, reproduce less",
                            step4: "Predators decline → prey released from predation, increase",
                            step5: "Cycle repeats"
                        },
                        example: "Lynx and snowshoe hare: ~10-year cycles (Hudson Bay Company fur records)",
                        lotkaVolterra: {
                            preyEquation: "dN/dt = rN - aNP",
                            predatorEquation: "dP/dt = baNP - mP",
                            where: "a = attack rate, b = conversion efficiency, m = predator mortality",
                            prediction: "Neutral cycles (populations oscillate indefinitely)"
                        },
                        reality: "Real cycles damped (stabilize) or irregular (other factors involved)"
                    },
                    stability: {
                        refuges: "Prey refuges (spatial, size) stabilize dynamics",
                        switching: "Predators switch to abundant prey → stabilizes multiple prey populations",
                        inertia: "Time lags, age structure create complex dynamics"
                    }
                },
                
                preyDefenses: {
                    avoidance: {
                        crypsis: "Camouflage (countershading, disruptive coloration)",
                        hiding: "Nocturnal behavior, burrowing, remaining in refuges",
                        vigilance: "Lookout behavior, alarm calls",
                        fleeing: "Fast escape, confusing movements (erratic flight)"
                    },
                    mechanicalDefenses: {
                        armor: "Shells (turtles, snails), thick skin (elephants), scales",
                        spines: "Porcupines, hedgehogs, spiny plants (cacti)",
                        size: "Growing large (elephants rarely preyed upon as adults)"
                    },
                    chemicalDefenses: {
                        toxins: "Poison dart frogs, monarch butterflies (sequester toxins from plants), skunks",
                        venoms: "Snakes, spiders, jellyfish (active injection)",
                        unpalatability: "Bad taste, noxious chemicals"
                    },
                    warningSignals: {
                        aposematism: "Bright colors advertise toxicity (poison dart frogs - red, yellow, blue)",
                        honest: "Predators learn to avoid conspicuous toxic prey"
                    },
                    mimicry: {
                        batesian: "Harmless species mimics harmful species (viceroy butterfly mimics toxic monarch)",
                        mullerian: "Two toxic species converge on similar warning signal (coral snakes, king snakes)",
                        aggressive: "Predator mimics harmless organism (anglerfish lure resembles prey)"
                    },
                    groupDefenses: {
                        herding: "Confusion effect, dilution effect (many eyes, safety in numbers)",
                        mobbing: "Group attacks predator (birds mobbing owl)",
                        cooperativeVigilance: "Some individuals watch while others feed"
                    }
                },
                
                predatorAdaptations: {
                    sensory: "Keen vision (raptors), echolocation (bats), olfaction (wolves)",
                    morphological: "Sharp teeth, claws, speed, strength",
                    behavioral: "Stalking, ambush, cooperative hunting (wolves, orcas)",
                    venoms: "Immobilize prey (snakes, spiders)",
                    learning: "Improve hunting with experience, remember successful locations"
                },
                
                impactOnCommunity: {
                    trophicCascades: {
                        definition: "Top-down effects cascade through multiple trophic levels",
                        mechanism: "Predator controls herbivore → herbivore affects plants → plants affect...
",
                        example: "Sea otters → sea urchins ↓ → kelp ↑ → entire kelp forest community benefits",
                        yellowstone: "Wolves → elk ↓ → willows/aspen ↑ → beavers ↑ → wetlands ↑ → many species ↑"
                    },
                    keystoneSpecies: {
                        definition: "Predator whose impact far exceeds its abundance",
                        mechanism: "Controls dominant competitor, maintains diversity",
                        example: "Sea stars (Pisaster) eat mussels (dominant competitor) → prevents mussel monoculture → maintains intertidal diversity",
                        detail: "See keystone species section"
                    },
                    apparentMutualism: {
                        definition: "Predator creates indirect positive interaction between prey species",
                        mechanism: "Predator preferentially eats dominant competitor → benefits inferior competitor",
                        example: "Predator eats superior competitor → inferior competitor persists (not excluded)"
                    }
                }
            },
            
            herbivory: {
                definition: "Animals eating plants",
                notation: "(+ -): herbivore benefits, plant harmed",
                distinction: "Often NOT lethal to plant (unlike typical predation); plants regrow",
                
                types: {
                    grazers: "Eat grasses, low vegetation (cattle, grasshoppers)",
                    browsers: "Eat leaves, twigs from woody plants (deer, giraffes)",
                    granivores: "Eat seeds (many birds, rodents)",
                    frugivores: "Eat fruits (often mutualistic - seed dispersal)"
                },
                
                impactsOnPlants: {
                    tissue: "Loss of photosynthetic tissue → reduced growth",
                    reproduction: "Damage to flowers, fruits, seeds → reduced reproduction",
                    mortality: "Seedlings especially vulnerable; adult trees rarely killed by herbivory alone",
                    regrowth: "Many plants can regrow (grasses, deciduous trees)",
                    compensation: "Some plants fully or over-compensate (regrow more vigorously after grazing)"
                },
                
                plantDefenses: {
                    constitutive: {
                        definition: "Always present defenses",
                        mechanical: "Thorns, spines, tough leaves (sclerophylly), silica, trichomes (hairs)",
                        chemical: "Tannins, alkaloids, terpenoids, latex (milkweed), resins",
                        examples: [
                            "Acacia thorns",
                            "Holly leaves (spiny)",
                            "Oak tannins (bind proteins → indigestible)",
                            "Tobacco nicotine (toxic)"
                        ]
                    },
                    induced: {
                        definition: "Produced in response to herbivore damage",
                        mechanism: "Damage triggers signaling cascade → upregulate defense genes",
                        chemical: "Increase toxins, protease inhibitors (interfere with digestion)",
                        signaling: "Volatile compounds warn neighboring plants (priming)",
                        examples: [
                            "Tomatoes produce protease inhibitors after damage",
                            "Sagebrush volatiles induce defenses in neighbors"
                        ],
                        tradeoff: "Costly to maintain; only produce when needed"
                    },
                    tolerance: {
                        definition: "Withstand herbivory without significant fitness loss",
                        mechanisms: "High growth rate, storage organs (tubers, bulbs), meristems protected, compensatory regrowth",
                        example: "Grasses: growing points at base (not removed by grazers) → continue growing"
                    }
                },
                
                herbivoreAdaptations: {
                    digestive: {
                        ruminants: "Multiple stomach chambers with symbiotic bacteria digest cellulose (cows, deer)",
                        hindgutFermentation: "Enlarged cecum with microbes (horses, rabbits)",
                        detoxification: "Liver enzymes break down plant toxins"
                    },
                    behavioral: {
                        selectiveFeeding: "Avoid toxic plants or plant parts",
                        mixing: "Eat diverse diet (dilutes toxins)",
                        geophagy: "Eat clay (binds toxins)"
                    },
                    morphological: {
                        teeth: "Continuously growing molars (to withstand wear from tough vegetation)",
                        mouthparts: "Chewing (caterpillars) vs piercing-sucking (aphids)"
                    }
                },
                
                ecologicalImpacts: {
                    communityStructure: "Selective herbivory can maintain plant diversity (prevent dominant species from monopolizing)",
                    succession: "Herbivores can slow or reverse succession",
                    nutrientCycling: "Dung returns nutrients; trampling affects soil",
                    landscapePatterns: "Create mosaics of grazed and ungrazed patches",
                    example: "African savannas: elephants knock down trees → maintain grasslands → support diverse herbivore community"
                }
            },
            
            parasitism: {
                definition: "Parasite lives on or in host, harms host but typically doesn't kill immediately",
                notation: "(+ -): parasite benefits, host harmed",
                distinction: "Parasite smaller than host; usually doesn't kill quickly (unlike predation)",
                
                types: {
                    ectoparasites: {
                        definition: "Live on external surface of host",
                        examples: "Ticks, lice, fleas, leeches, lamprey, mistletoe (plant)",
                        feeding: "Blood, skin, sap",
                        impacts: "Blood loss, irritation, disease transmission (ticks transmit Lyme disease)"
                    },
                    endoparasites: {
                        definition: "Live inside host body",
                        examples: "Tapeworms, roundworms, flukes, malaria (Plasmodium), trypanosomes",
                        location: "Gut, blood, tissues, cells",
                        impacts: "Nutrient theft, tissue damage, organ dysfunction"
                    },
                    social: {
                        definition: "Exploit social behavior",
                        broodParasites: "Lay eggs in other species' nests (cowbirds, cuckoos)",
                        kleptoparasites: "Steal food (frigate birds steal from other seabirds)"
                    }
                },
                
                impactsOnHost: {
                    direct: "Energy drain, tissue damage, castration (some parasites sterilize hosts)",
                    indirect: "Weakened condition → increased predation risk, reduced mating success",
                    behavior: "Parasites can manipulate host behavior (toxoplasma makes rats less afraid of cats → eaten → parasite reproduces in cat)",
                    mortality: "Rarely immediate, but heavy infections can kill"
                },
                
                hostDefenses: {
                    innateImmunity: "Barriers (skin, mucus), inflammation, fever",
                    adaptiveImmunity: "Antibodies, memory cells (vertebrates)",
                    behavioral: "Grooming, avoiding infected individuals, habitat selection",
                    symbiotic: "Cleaner fish remove ectoparasites"
                },
                
                parasiteAdaptations: {
                    attachment: "Hooks, suckers, cement glands",
                    feeding: "Piercing mouthparts, absorb nutrients through body wall",
                    reproduction: "Enormous fecundity (tapeworms produce millions of eggs)",
                    complexLifecycles: "Multiple hosts (definitive and intermediate)",
                    immuneEvasion: "Mimic host molecules, suppress immune system, hide in cells"
                },
                
                ecologicalImpacts: {
                    populationRegulation: "Can regulate host populations (density-dependent transmission)",
                    communityStructure: "Affect competitive outcomes (parasites harm dominant competitor → benefits inferior competitor)",
                    biodiversity: "Parasites themselves are diverse (contribute to overall diversity)",
                    coevolution: "Parasites and hosts in evolutionary arms race",
                    example: "Rinderpest (viral parasite) regulated wildebeest populations in Serengeti (eradicated 2011)"
                }
            },
            
            mutualism: {
                definition: "Both species benefit from interaction",
                notation: "(+ +)",
                importance: "Crucial for ecosystem functioning (pollination, nitrogen fixation, decomposition)",
                
                types: {
                    obligate: {
                        definition: "Neither species can survive without the other",
                        examples: [
                            "Lichens: fungus + alga/cyanobacterium (fungus provides structure, alga photosynthesizes)",
                            "Leafcutter ants + fungus (ants cultivate fungus, fungus is sole food)",
                            "Fig wasps + figs (wasp pollinates, fig provides nursery)"
                        ],
                        coevolution: "Extremely tight evolutionary relationship"
                    },
                    facultative: {
                        definition: "Species benefit but can survive independently",
                        examples: [
                            "Pollinators + flowering plants (many pollinators visit multiple plant species)",
                            "Seed dispersers + fruiting plants",
                            "Cleaner fish + client fish"
                        ],
                        flexibility: "More evolutionarily labile"
                    }
                },
                
                categories: {
                    trophic: {
                        definition: "One species provides food to the other",
                        pollination: {
                            benefit: "Plants: reproduction; pollinators: nectar/pollen (food)",
                            examples: "Bees, butterflies, birds, bats pollinating flowers",
                            coevolution: "Flower shape, color, scent match pollinator morphology, senses",
                            importance: "~80% of flowering plants animal-pollinated; ~35% of crops depend on pollinators"
                        },
                        seedDispersal: {
                            benefit: "Plants: seeds dispersed away from parent (reduced competition); animals: food (fruit)",
                            examples: "Birds, mammals, ants disperse seeds",
                            adaptations: "Fleshy fruits, hooks (attach to fur), ant rewards (elaiosomes)"
                        },
                        gutMicrobiomes: {
                            benefit: "Animals: digest cellulose, synthesize vitamins; microbes: habitat, food",
                            examples: "Ruminants + bacteria, termites + protists, humans + gut bacteria",
                            essential: "Many herbivores cannot digest plant material without symbionts"
                        }
                    },
                    defensive: {
                        definition: "One species provides protection to the other",
                        examples: [
                            "Acacia ants + acacia trees: ants defend tree from herbivores, tree provides food (nectar) and shelter (hollow thorns)",
                            "Anemones + clownfish: fish protected from predators, anemone gets food scraps",
                            "Cleaner fish + client fish: cleaner gets food (parasites), client gets cleaned"
                        ]
                    },
                    dispersive: {
                        definition: "One species disperses the other",
                        pollination: "Pollen dispersal (above)",
                        seedDispersal: "Seed dispersal (above)",
                        note: "Often overlaps with trophic category"
                    }
                },
                
                specialExamples: {
                    nitrogenFixation: {
                        partners: "Rhizobium bacteria + legumes (peas, beans, clover)",
                        benefit: "Bacteria: sugars from plant; Plant: fixed nitrogen (NH₃)",
                        mechanism: "Bacteria in root nodules fix N₂ → NH₃ using nitrogenase enzyme",
                        importance: "Legumes can grow in nitrogen-poor soils; used as green manure",
                        agriculture: "Reduces need for synthetic fertilizers"
                    },
                    mycorrhizae: {
                        partners: "Fungi + plant roots",
                        types: {
                            ectomycorrhizae: "Fungus sheathes roots (trees: pine, oak, birch)",
                            arbuscular: "Fungus penetrates root cells (most plants including crops)"
                        },
                        benefit: "Fungus: sugars from plant (up to 20% of photosynthesis!); Plant: enhanced water/mineral uptake (especially phosphorus)",
                        mechanism: "Fungal hyphae extend far into soil, vastly increase root surface area",
                        ubiquity: "~90% of land plants have mycorrhizae; ancient mutualism (400+ million years)"
                    },
                    coralZooxanthellae: {
                        partners: "Coral polyps + dinoflagellate algae (zooxanthellae)",
                        benefit: "Algae: shelter, CO₂, nutrients; Coral: glucose (up to 90% of energy from algae)",
                        consequence: "Enables corals to build reefs in nutrient-poor tropical waters",
                        bleaching: "Stress (heat) causes coral to expel algae → turns white → can die",
                        threat: "Ocean warming causing mass coral bleaching events"
                    }
                },
                
                evolution: {
                    coevolution: "Reciprocal evolutionary change in interacting species",
                    traitMatching: "Traits of partners become matched (flower tube length = pollinator tongue length)",
                    cheating: "Some individuals take benefits without providing services (nectar robbers bite hole in flower)",
                    stability: "Maintained by sanctions (hosts punish cheaters) or partner choice"
                }
            },
            
            commensalism: {
                definition: "One species benefits, the other is unaffected",
                notation: "(+ 0)",
                rarity: "True commensalism rare; closer examination often reveals slight cost or benefit",
                
                examples: [
                    {
                        interaction: "Barnacles on whales",
                        benefit: "Barnacles: transportation, access to plankton-rich water",
                        neutral: "Whales: seemingly unaffected (though slight drag possible)"
                    },
                    {
                        interaction: "Epiphytes on trees",
                        benefit: "Orchids, bromeliads: access to light (in canopy)",
                        neutral: "Trees: unaffected if epiphyte load not excessive"
                    },
                    {
                        interaction: "Cattle egrets and cattle",
                        benefit: "Egrets: eat insects stirred up by cattle",
                        neutral: "Cattle: unaffected"
                    },
                    {
                        interaction: "Remoras (suckerfish) on sharks",
                        benefit: "Remoras: eat scraps from shark's meals, transportation, protection",
                        neutral: "Sharks: seemingly unaffected"
                    }
                ],
                
                inquilism: {
                    definition: "One species uses another (or its structures) for housing",
                    examples: "Birds nesting in trees, hermit crabs in snail shells"
                },
                
                challenges: "Hard to prove truly neutral effect; subtle costs may exist (weight, drag, nutrient competition)"
            },
            
            amensalism: {
                definition: "One species harmed, the other unaffected",
                notation: "(- 0)",
                rarity: "Relatively uncommon; often reclassified as weak competition",
                
                examples: [
                    {
                        interaction: "Allelopathy: Black walnut trees",
                        harm: "Produce juglone toxin → inhibits growth of many plants nearby",
                        benefit: "Tree: reduces competition (slight benefit, so arguably weak competition)"
                    },
                    {
                        interaction: "Trampling by large animals",
                        harm: "Elephants step on small organisms, kill them",
                        neutral: "Elephants: gain no benefit from killing"
                    },
                    {
                        interaction: "Penicillium mold",
                        harm: "Produces penicillin antibiotic → kills bacteria",
                        benefit: "Mold: arguable benefit (reduces competitors), so maybe weak competition"
                    }
                ]
            }
        },

        ecologicalNiche: {
            definition: "The role a species plays in its community; includes all abiotic and biotic factors affecting the species",
            hutchinsonNiche: "n-dimensional hypervolume; each axis represents an environmental variable (temperature, humidity, food size, etc.)",
            
            fundamentalVsRealized: {
                fundamentalNiche: {
                    definition: "Full range of conditions a species CAN tolerate (physiological limits)",
                    determinedBy: "Abiotic tolerances (temperature, pH, salinity, etc.)",
                    measurement: "Laboratory experiments, absence of competitors/predators/parasites"
                },
                realizedNiche: {
                    definition: "Actual conditions where species DOES occur (ecological limits)",
                    determinedBy: "Fundamental niche MINUS effects of competition, predation, parasitism",
                    measurement: "Field observations in natural communities",
                    typically: "Narrower than fundamental niche (species excluded from part of potential range)"
                },
                example: {
                    species: "Barnacle Chthamalus",
                    fundamental: "Can survive throughout intertidal zone (upper to lower)",
                    realized: "Only upper intertidal (excluded from lower by Balanus competition)",
                    experiment: "Connell removed Balanus → Chthamalus expanded to lower zone (revealed fundamental niche)"
                }
            },
            
            nichePartitioning: {
                definition: "Species divide resources to reduce competition and coexist",
                necessity: "Required for coexistence (avoid competitive exclusion)",
                
                mechanisms: {
                    spatial: {
                        definition: "Species use different microhabitats or foraging zones",
                        example: "Five warbler species in spruce trees: each feeds in different tree zone (top, middle, lower, trunk, etc.)",
                        study: "MacArthur (1958) - classic study"
                    },
                    temporal: {
                        definition: "Species active at different times",
                        diel: "Day vs night (diurnal vs nocturnal)",
                        seasonal: "Different flowering times (spring ephemerals vs summer flowers)",
                        example: "Desert rodents: kangaroo rats (nocturnal) vs ground squirrels (diurnal) reduce competition"
                    },
                    morphological: {
                        definition: "Different body sizes or structures allow use of different resources",
                        example: "Darwin's finches: beak sizes match seed sizes (small beaks = small seeds, large beaks = large seeds)",
                        result: "Reduces diet overlap, allows coexistence"
                    },
                    dietary: {
                        definition: "Generalist vs specialist feeding strategies",
                        example: "Different fish species specialize on different prey sizes or types"
                    }
                },
                
                limitingSimilarity: {
                    concept: "There's a limit to how similar coexisting species can be",
                    threshold: "If too similar (niche overlap too great), one excludes the other",
                    debated: "Exact limit controversial; depends on environment"
                }
            },
            
            nicheEvolution: {
                characterDisplacement: {
                    definition: "Competing species evolve to become more different (reduce competition)",
                    pattern: "Traits more divergent in sympatry than allopatry",
                    example: "Darwin's finches: beak sizes more different on islands where species co-occur",
                    mechanism: "Natural selection favors individuals using different resources (less competition, higher fitness)"
                },
                nicheConservatism: {
                    definition: "Species retain ancestral niche requirements (niches evolve slowly)",
                    consequence: "Related species often have similar niches",
                    implication: "May prevent range expansion into new environments"
                }
            }
        },

        keystoneSpecies: {
            definition: "Species whose impact on community greatly exceeds what would be predicted from abundance",
            analogy: "Like keystone in arch: not largest stone, but removing it causes arch to collapse",
            importance: "Disproportionate role in maintaining community structure and diversity",
            discovery: "Robert Paine (1966): removed sea star Pisaster from intertidal → diversity crashed",
            
            characteristics: [
                "Relatively low abundance",
                "High per capita effect on community",
                "Removal causes major community changes",
                "Often (but not always) top predators"
            ],
            
            mechanismsOfAction: {
                predation: {
                    mechanism: "Keystone predator controls dominant competitor → maintains diversity",
                    example: "Sea star Pisaster eats mussels (dominant space competitor) → prevents mussel monoculture → allows barnacles, algae, anemones, etc. to coexist",
                    outcome: "Predator increases prey diversity (counter-intuitive!)"
                },
                herbivory: {
                    mechanism: "Herbivore prevents plant dominance",
                    example: "Sea urchins graze algae on coral reefs → prevent algal overgrowth of corals",
                    outcome: "Grazers maintain habitat for many species"
                },
                enginering: {
                    mechanism: "Species creates or maintains habitat",
                    example: "Beavers build dams → create wetlands → habitat for fish, amphibians, birds, invertebrates",
                    outcome: "Ecosystem engineer increases habitat heterogeneity"
                },
                mutualism: {
                    mechanism: "Provides critical service to many species",
                    example: "Fig trees in tropics: produce fruit year-round → critical food source during lean seasons for many animals",
                    outcome: "Loss of keystone mutualist cascades through community"
                }
            },
            
            classicExamples: {
                seaStarPisaster: {
                    ecosystem: "Rocky intertidal, Pacific coast",
                    role: "Predator of mussels (Mytilus californianus)",
                    experiment: "Paine removed all Pisaster from plots",
                    result: "Species richness: 15 → 8 species within 1 year; mussels dominated >80% cover",
                    mechanism: "Mussels are superior competitor; without predation, exclude other species",
                    restoration: "When Pisaster allowed back, diversity recovered"
                },
                seaOtters: {
                    ecosystem: "Kelp forests, Pacific coast",
                    role: "Predator of sea urchins",
                    history: "Otters hunted to near-extinction (fur trade, 1700s-1900s) → urchins exploded → overgrazed kelp → 'urchin barrens' (no kelp, low diversity)",
                    recovery: "Otter reintroduction → urchins controlled → kelp forests restored → hundreds of species benefit",
                    cascade: "Otters → urchins ↓ → kelp ↑ → fish, invertebrates, seals, seabirds ↑",
                    additional: "Kelp forests sequester carbon (climate benefit)"
                },
                wolves: {
                    ecosystem: "Yellowstone National Park",
                    history: "Wolves extirpated 1926 → elk populations exploded → overbrowsed willows/aspen → riparian degradation",
                    reintroduction: "1995: 31 wolves reintroduced",
                    effects: {
                        direct: "Wolves kill elk, reduce elk population",
                        behavioral: "Elk avoid risky areas (valleys, near streams) → 'landscape of fear'",
                        vegetation: "Willows, aspen, cottonwoods recover in valleys (elk avoid)",
                        beavers: "Return (more willows for food and dams)",
                        wetlands: "Beaver dams create wetlands",
                        birds: "Songbirds increase (more trees for nesting)",
                        bears: "Scavenge wolf kills, also benefit from berries (more shrubs)",
                        rivers: "Stabilized banks (more vegetation) → less erosion"
                    },
                    note: "Complex trophic cascade; ongoing research"
                },
                elephants: {
                    ecosystem: "African savanna",
                    role: "Ecosystem engineer; maintain grasslands",
                    mechanism: "Knock down trees (feed on bark, branches) → prevent woodland encroachment",
                    outcome: "Without elephants, savannas become woodlands → reduces habitat for grazing animals (zebra, wildebeest, etc.)",
                    complexity: "Too many elephants can overdo tree removal (need balance)"
                },
                beavers: {
                    ecosystem: "Temperate streams, wetlands",
                    role: "Ecosystem engineer; create wetlands",
                    mechanism: "Build dams → slow water flow → create ponds",
                    effects: {
                        habitat: "Wetlands provide habitat for fish, amphibians, waterfowl, invertebrates, plants",
                        water: "Raise water table, recharge groundwater, filter sediments",
                        diversity: "Increase landscape heterogeneity (mosaic of ponds, wet meadows, streams)"
                    },
                    cascades: "Support ~50% of endangered species in North America (indirectly, through habitat creation)"
                }
            },
            
            identifyingKeystones: {
                removalExperiments: "Remove species, observe community changes (Paine's approach)",
                observations: "Compare areas with/without species",
                challenges: [
                    "Ethical concerns (removing species)",
                    "Time required (effects may be delayed)",
                    "Replication (need multiple sites)",
                    "Rare species hard to study"
                ],
                quantification: "Community Importance (CI) = change in community metric / change in species abundance"
            },
            
            conservationImplications: [
                "Prioritize keystone species for protection (high conservation ROI)",
                "Reintroduce keystone species to restore ecosystems (wolves, otters)",
                "Protect keystone habitats (protect ecosystem engineers)",
                "Recognize that losing keystone ≠ losing any species (disproportionate impact)",
                "Management: sometimes need to artificially control dominant competitors if keystone lost"
            ]
        },

        succession: {
            definition: "Predictable, directional change in species composition and community structure over time",
            driver: "Species modify environment → create conditions favoring different species → community changes",
            
            types: {
                primary: {
                    definition: "Succession on substrate that has never supported life (no soil)",
                    examples: [
                        "Newly formed volcanic island (Hawaii, Surtsey)",
                        "Retreating glacier (exposes barren rock)",
                        "New sand dune",
                        "Cooled lava flow"
                    ],
                    startingCondition: "Bare rock or sand; no organic matter, no soil",
                    timescale: "Hundreds to thousands of years",
                    
                    stages: {
                        stage1_pioneerSpecies: {
                            organisms: "Lichens, mosses, bacteria",
                            adaptations: "Tolerate harsh conditions (extreme temperature, drought, low nutrients)",
                            role: "Weathering: acids break down rock; death/decomposition creates thin soil",
                            duration: "Decades to centuries"
                        },
                        stage2_grasses: {
                            organisms: "Grasses, small herbs, annual plants",
                            requirements: "Thin soil layer (created by pioneers)",
                            role: "Further soil development; add organic matter",
                            duration: "Decades"
                        },
                        stage3_shrubs: {
                            organisms: "Shrubs, perennial plants",
                            requirements: "Deeper soil, more nutrients",
                            role: "Increase organic matter, shade ground, moderate microclimate",
                            duration: "Decades to century"
                        },
                        stage4_pioneerTrees: {
                            organisms: "Fast-growing, shade-intolerant trees (aspen, birch, pine)",
                            characteristics: "r-selected traits (fast growth, early maturity)",
                            role: "Create forest; deep shade",
                            duration: "50-150 years"
                        },
                        stage5_climaxForest: {
                            organisms: "Shade-tolerant trees (oak, maple, beech, hemlock)",
                            characteristics: "K-selected (slow growth, long-lived, reproduce in shade)",
                            stability: "Can regenerate under own canopy → self-replacing → stable (until disturbance)",
                            duration: "Centuries to millennia (in absence of disturbance)"
                        }
                    }
                },
                
                secondary: {
                    definition: "Succession after disturbance removes community but soil remains",
                    examples: [
                        "Abandoned agricultural field (old field succession)",
                        "After forest fire",
                        "After logging",
                        "After hurricane",
                        "Landslide (if some soil remains)"
                    ],
                    startingCondition: "Disturbed, but soil, seed bank, roots present",
                    timescale: "Decades to centuries (faster than primary because soil present)",
                    
                    stages: {
                        stage1_annualWeeds: {
                            organisms: "Fast-growing annuals (ragweed, crabgrass, dandelions)",
                            source: "Seed bank, wind dispersal",
                            adaptations: "r-selected (rapid growth, high seed production)",
                            duration: "1-3 years"
                        },
                        stage2_perennialGrasses: {
                            organisms: "Perennial grasses and herbs",
                            competition: "Outcompete annuals (deeper roots, persist year-round)",
                            duration: "3-10 years"
                        },
                        stage3_shrubs: {
                            organisms: "Woody shrubs, brambles (blackberries, sumac)",
                            shading: "Begin to shade out grasses",
                            duration: "10-25 years"
                        },
                        stage4_pioneerTrees: {
                            organisms: "Fast-growing trees (pine, aspen, birch, cherry)",
                            characteristics: "Shade-intolerant, need full sun to germinate",
                            duration: "25-100 years"
                        },
                        stage5_climaxForest: {
                            organisms: "Shade-tolerant hardwoods (oak, hickory, maple, beech)",
                            mechanism: "Seedlings can grow in understory shade → replace pioneers → stable",
                            duration: "100+ years"
                        }
                    }
                }
            },
            
            mechanisms: {
                facilitation: {
                    definition: "Early species make environment MORE suitable for later species",
                    example: "Pioneer plants improve soil (nitrogen fixation, organic matter) → enable later species to establish",
                    importance: "Dominant in early succession (especially primary)"
                },
                tolerance: {
                    definition: "Later species simply TOLERATE conditions created by early species; don't need facilitation",
                    example: "Shade-tolerant trees can establish under pioneers; don't need pioneers but aren't harmed by them",
                    importance: "Common in mid-succession"
                },
                inhibition: {
                    definition: "Early species PREVENT establishment of later species (competitive monopolization)",
                    example: "Dense grass cover prevents tree seedling establishment",
                    overcoming: "Requires disturbance (fire, grazing) to remove inhibitors",
                    importance: "Can slow or halt succession"
                }
            },
            
            climaxCommunity: {
                definition: "Stable, mature community representing endpoint of succession",
                characteristics: {
                    stability: "Species composition relatively constant (self-replacing)",
                    biomass: "Maximum biomass for given environment",
                    diversity: "Often (but not always) high diversity",
                    productivity: "High NPP, but most energy goes to maintenance (respiration), little accumulation",
                    nutrient: "Tight nutrient cycling (efficient retention)",
                    structure: "Complex vertical structure (canopy layers), microhabitats"
                },
                determinedBy: "Climate (temperature, rainfall) determines climax type (tropical rainforest, temperate deciduous forest, grassland, etc.)",
                monoClimax: "Classical view: single climax for each climate zone",
                polyclimax: "Modern view: multiple stable states possible; depends on disturbance regime, soils, history"
            },
            
            disturbanceAndSuccession: {
                role: "Disturbances reset succession → create mosaic of successional stages",
                intermediatDisturbance: {
                    hypothesis: "Moderate disturbance frequency/intensity → maximum diversity",
                    mechanism: {
                        lowDisturbance: "Climax (K-selected) species dominate → low diversity (competitive exclusion)",
                        highDisturbance: "Only pioneer (r-selected) species persist → low diversity (no time for later species)",
                        intermediateDisturbance: "Mixture of early, mid, late successional species → high diversity"
                    },
                    examples: [
                        "Moderate fire frequency in forests",
                        "Seasonal flooding in rivers",
                        "Moderate grazing in grasslands"
                    ]
                },
                shiftingMosaic: {
                    concept: "Landscapes are patchwork of different successional stages (due to disturbances at different times/places)",
                    result: "Landscape-level diversity higher than local diversity",
                    management: "Maintain disturbance regime to preserve mosaic"
                }
            },
            
            deviationsFrom Predictions: [
                "Succession not always predictable (stochastic events, multiple pathways)",
                "Priority effects: who arrives first can determine trajectory",
                "Legacy effects: past land use affects succession trajectory",
                "Invasive species can alter or halt succession",
                "Climate change altering traditional successional pathways",
                "True climax rare (disturbances occur before reaching equilibrium)"
            ]
        },

        commonMisconceptions: {
            misconception1: {
                wrong: "Predation always reduces prey diversity",
                correct: "Keystone predators INCREASE diversity by preventing competitive exclusion",
                clarification: "If predator eats dominant competitor, inferior competitors can coexist"
            },
            misconception2: {
                wrong: "Competition always results in one species going extinct",
                correct: "Coexistence possible if niche differentiation occurs (resource partitioning)",
                clarification: "Competitive exclusion only if niches identical"
            },
            misconception3: {
                wrong: "Mutualism is altruism (one species helping another)",
                correct: "Mutualism is reciprocal benefit (both benefit), not altruism",
                clarification: "Each species acts in own self-interest; benefit to partner is byproduct"
            },
            misconception4: {
                wrong: "Climax community is permanent, unchanging",
                correct: "Disturbances reset succession; true climax rare; climate change shifts climax type",
                clarification: "Climax is stable in absence of disturbance, but disturbances common"
            },
            misconception5: {
                wrong: "Succession always proceeds through same stages to same endpoint",
                correct: "Multiple pathways, priority effects, stochastic events create variation",
                clarification: "General trends exist, but not deterministic"
            },
            misconception6: {
                wrong: "All interactions fit neatly into categories (+ -, + +, etc.)",
                correct: "Context-dependent; mutualism can become parasitism, etc.; continuum, not discrete categories",
                clarification: "Interactions vary in strength, sign; can shift with conditions"
            }
        },

        keyTakeaways: [
            "Communities are structured by species interactions: competition, predation, mutualism, parasitism, etc.",
            "Competition can lead to competitive exclusion OR coexistence (via niche partitioning)",
            "Predation can have counterintuitive effects: keystone predators INCREASE diversity",
            "Mutualism is widespread and essential (pollination, nitrogen fixation, mycorrhizae)",
            "Ecological niches: species must differ to coexist (limit to similarity)",
            "Keystone species have disproportionate effects; removal causes major community shifts",
            "Succession is predictable community change over time (primary: no soil → climax; secondary: disturbed → climax)",
            "Intermediate disturbance hypothesis: moderate disturbance maximizes diversity",
            "Understanding community ecology is crucial for conservation, ecosystem management, and predicting responses to change"
        ]
    };

    return content;
}

handleBiodiversity(problem) {
    const content = {
        topic: "Biodiversity: Measurement, Patterns, and Conservation",
        category: 'biodiversity',
        summary: "Biodiversity encompasses the variety of life at all levels: genetic diversity within species, species diversity within communities, and ecosystem diversity across landscapes. It is essential for ecosystem functioning, resilience, and provision of ecosystem services. Understanding patterns and drivers of biodiversity, and the threats it faces, is crucial for conservation in the Anthropocene.",
        
        fundamentalConcepts: {
            biodiversityDefinition: {
                definition: "Variety of life at all levels of biological organization",
                etymology: "'Biological diversity' coined by Thomas Lovejoy (1980); 'biodiversity' popularized by E.O. Wilson (1988)",
                scope: "Genes, species, ecosystems, functional diversity, phylogenetic diversity",
                importance: "Foundation for ecosystem services, human well-being, and resilience to change"
            },
            
            levelsOfBiodiversity: {
                geneticDiversity: {
                    definition: "Variation in DNA sequences within and among populations of a species",
                    measurement: "Heterozygosity, allelic richness, nucleotide diversity",
                    importance: [
                        "Enables adaptation to changing environments (evolutionary potential)",
                        "Reduces inbreeding depression",
                        "Confers disease resistance",
                        "Source of genetic variation for selective breeding (crops, livestock)"
                    ],
                    threats: "Small population size, inbreeding, genetic bottlenecks, genetic drift",
                    examples: [
                        "Cheetahs: low genetic diversity (bottleneck ~10,000 years ago) → susceptible to disease",
                        "Crop wild relatives: high genetic diversity → source of disease resistance genes for breeding",
                        "Northern elephant seals: recovered from <100 individuals → low genetic diversity but population thriving (controversial whether limiting)"
                    ]
                },
                
                speciesDiversity: {
                    definition: "Variety and abundance of species in defined area",
                    components: "Species richness (number of species) + evenness (relative abundances)",
                    measurement: "Species counts, diversity indices (Shannon H', Simpson D)",
                    importance: [
                        "Functional redundancy (if one species lost, others perform role)",
                        "Ecosystem stability and productivity",
                        "Aesthetic, cultural, economic value"
                    ],
                    threats: "Habitat loss, overexploitation, invasive species, pollution, climate change (HIPPO)",
                    note: "Most studied level of biodiversity; focus of conservation efforts"
                },
                
                ecosystemDiversity: {
                    definition: "Variety of habitats, communities, and ecological processes in region",
                    measurement: "Number of ecosystem types, landscape heterogeneity indices",
                    importance: [
                        "Provides diverse ecosystem services (different ecosystems provide different services)",
                        "Supports species diversity at larger scales",
                        "Landscape-level resilience"
                    ],
                    examples: [
                        "Tropical regions: high ecosystem diversity (rainforest, savanna, mangrove, coral reef)",
                        "Regional diversity: mountains to coast (alpine, forest, riparian, wetland, marine)",
                        "Midwest USA: lost much ecosystem diversity (prairies → agriculture monoculture)"
                    ],
                    threats: "Land use change, habitat destruction, homogenization"
                },
                
                functionalDiversity: {
                    definition: "Range of functions and functional traits performed by species in community",
                    traits: "Body size, diet, reproductive strategy, dispersal ability, nutrient cycling role",
                    importance: [
                        "Determines ecosystem processes (decomposition, pollination, seed dispersal)",
                        "May be more important for ecosystem functioning than species richness per se"
                    ],
                    example: "Losing keystone pollinator has greater functional impact than losing rare plant species"
                },
                
                phylogeneticDiversity: {
                    definition: "Evolutionary relationships and branch lengths among species",
                    measurement: "Phylogenetic tree branch lengths",
                    importance: [
                        "Preserves evolutionary history",
                        "Often correlates with functional diversity (related species often similar function)",
                        "Losing evolutionarily distinct species = losing unique traits"
                    ],
                    example: "Platypus is phylogenetically unique (monotreme - egg-laying mammal); loss would be huge loss of evolutionary history"
                }
            }
        },

        measuringDiversity: {
            overview: "Multiple metrics exist; choice depends on question, scale, available data",
            
            speciesRichness: {
                definition: "Simple count of number of species (S)",
                symbol: "S",
                calculation: "Count distinct species",
                advantages: [
                    "Easy to understand and communicate",
                    "Intuitive"
                ],
                disadvantages: [
                    "Ignores relative abundances (treats rare and common species equally)",
                    "Sensitive to sample size (bigger samples = more species found)",
                    "Doesn't distinguish between communities with different evenness"
                ],
                example: "Community A: 100 individuals of species 1, 1 each of species 2-10 (S=10). Community B: 10 each of 10 species (S=10). Same richness but very different!"
            },
            
            diversityIndices: {
                simpsonIndex: {
                    formula: "D = Σ(pᵢ)² or D = Σ(nᵢ/N)²",
                    where: "pᵢ = proportion of species i, nᵢ = number of individuals of species i, N = total individuals",
                    interpretation: "D = probability two randomly selected individuals are SAME species (dominance)",
                    range: "0 (infinite diversity) to 1 (one species)",
                    inversions: {
                        simpsonsIndexDiversity: "1 - D (ranges 0 to 1; higher = more diverse)",
                        simpsonReciprocal: "1/D (ranges 1 to S; higher = more diverse)"
                    },
                    characteristics: [
                        "Emphasizes common species (squared term)",
                        "Less sensitive to rare species",
                        "Easier to interpret (probability)"
                    ],
                    calculation: {
                        example: "Community with species A:50, B:30, C:15, D:5 individuals (N=100)",
                        D: "(50/100)² + (30/100)² + (15/100)² + (5/100)² = 0.25 + 0.09 + 0.0225 + 0.0025 = 0.365",
                        oneMinusD: "1 - 0.365 = 0.635 (Simpson's Index of Diversity)"
                    }
                },
                
                shannonIndex: {
                    formula: "H' = -Σ(pᵢ × ln(pᵢ))",
                    where: "pᵢ = proportion of species i, ln = natural logarithm",
                    origin: "Information theory (Claude Shannon, 1948)",
                    interpretation: "Uncertainty/entropy in predicting species identity of random individual",
                    range: "0 (one species) to ln(S) (all species equally abundant)",
                    typical: "1.5-3.5 for most ecological communities; >4 for very diverse (tropical rainforest)",
                    characteristics: [
                        "More sensitive to rare species than Simpson",
                        "Most widely used diversity index in ecology",
                        "Logarithmic (emphasizes species presence over abundance)"
                    ],
                    calculation: {
                        example: "Community A:50, B:30, C:15, D:5 (N=100)",
                        pA: "50/100=0.5, ln(0.5)=-0.693, p×ln(p)=-0.347",
                        pB: "0.3×ln(0.3)=-0.361",
                        pC: "0.15×ln(0.15)=-0.285",
                        pD: "0.05×ln(0.05)=-0.150",
                        H: "-(-0.347-0.361-0.285-0.150) = 1.143"
                    },
                    maximum: {
                        Hmax: "H'max = ln(S) = maximum possible H' if all species equally abundant",
                        example: "For S=4, H'max = ln(4) = 1.386",
                        comparison: "Observed H' (1.143) vs H'max (1.386) → not perfectly even"
                    }
                },
                
                evennessIndex: {
                    formula: "E = H' / H'max = H' / ln(S)",
                    range: "0 (one species dominates) to 1 (all species equally abundant)",
                    interpretation: "How evenly individuals distributed among species",
                    importance: "Separates richness from evenness components of diversity",
                    example: "From above: E = 1.143 / 1.386 = 0.825 (fairly even, but species A somewhat dominant)"
                }
            },
            
            alphaBetaGamma: {
                alpha_α: {
                    definition: "Local diversity; species diversity within a single site/community",
                    measurement: "Richness or diversity indices within plots",
                    example: "Number of tree species in 1 hectare forest plot"
                },
                beta_β: {
                    definition: "Turnover diversity; change in species composition between sites",
                    measurement: "β = γ/α (Whittaker's original)",
                    importance: "Indicates habitat heterogeneity, environmental gradients",
                    high: "Species composition changes dramatically between sites (high turnover)",
                    low: "Species composition similar across sites",
                    example: "Beta diversity high along elevational gradient (lowland vs montane vs alpine species differ)"
                },
                gamma_γ: {
                    definition: "Regional diversity; total diversity across multiple sites",
                    calculation: "γ = α × β (Whittaker)",
                    example: "Total number of bird species across entire national park"
                },
                relationship: "γ (regional) = α (local) × β (turnover)"
            },
            
            sampling: {
                rarefaction: {
                    definition: "Statistical technique to compare diversity across samples of different sizes",
                    problem: "Bigger samples find more species → unfair comparison",
                    solution: "Rarefy (subsample) larger sample to match smaller sample size",
                    interpretation: "Allows fair comparison of richness after accounting for sample size differences"
                },
                accumulationCurves: {
                    definition: "Plot of cumulative species richness vs sampling effort",
                    shape: "Initially steep, then flattens (asymptote = total richness)",
                    use: "Determine if sampling effort sufficient (has curve flattened?)",
                    extrapolation: "Estimate total richness from incomplete sampling (Chao estimators, jackknife)"
                },
                adequacy: "Need sufficient sampling to compare sites reliably; undercounting biases comparisons"
            }
        },

        patternsOfBiodiversity: {
            latitudinalGradient: {
                pattern: "Species richness generally increases from poles toward equator",
                observation: "Oldest, most striking pattern in ecology (recognized by early naturalists)",
                magnitude: {
                    trees: "~10 species per hectare in boreal forest → ~300 species per hectare in Amazon rainforest",
                    birds: "~50 breeding species in Alaska → ~500+ species in Amazon",
                    insects: "Dramatic increase (tropics may harbor millions of undescribed insect species)"
                },
                taxa: "Pattern holds for most groups (plants, animals, fungi, microbes)",
                exceptions: "Penguins, seals, some conifers (peak at high latitudes)",
                
                hypotheses: {
                    climateEnergy: {
                        mechanism: "More solar energy → higher productivity → more energy supports more species",
                        support: "Strong correlation between energy (temperature, insolation) and richness",
                        critique: "Correlation doesn't prove causation; energy alone insufficient explanation"
                    },
                    areaSize: {
                        mechanism: "Tropics cover larger land area → more species (species-area relationship)",
                        support: "Larger areas generally have more species",
                        critique: "Doesn't fully explain pattern when area standardized"
                    },
                    evolutionaryTime: {
                        mechanism: "Tropics older, more climatically stable → more time for speciation, less extinction",
                        support: "Tropics largely ice-free during glaciations; temperate recolonized post-glaciation",
                        critique: "Fossil record suggests turnover in tropics too; not just accumulation"
                    },
                    specializationNicheWidth: {
                        mechanism: "Tropics: stable climate → narrower niches (specialize on specific resources) → more species can pack in",
                        support: "Tropical species often have smaller ranges, narrower niches than temperate",
                        critique: "Hard to test; mechanism unclear"
                    },
                    diversificationRates: {
                        mechanism: "Speciation rates higher and/or extinction rates lower in tropics",
                        support: "Some evidence for higher tropical speciation (faster metabolism, shorter generation times)",
                        critique: "Difficult to measure historical rates reliably"
                    },
                    multipleFactors: "Likely combination of factors; not mutually exclusive"
                },
                
                importance: "Understanding this pattern is fundamental question in ecology and biogeography"
            },
            
            altitudinalGradient: {
                pattern: "Richness generally decreases with elevation (low to high)",
                exceptions: "Mid-elevation peaks common (hump-shaped) for some taxa",
                mechanisms: {
                    temperature: "Decreases with elevation (~6°C per 1000 m)",
                    area: "Mountaintops smaller area than bases",
                    productivity: "Decreases at high elevation (cold, short growing season)",
                    isolation: "Mountaintops isolated (like islands)"
                },
                example: "Tree line: forests at low elevation → shrubs → alpine meadows → barren rock at summit (richness declines)"
            },
            
            depthGradient: {
                pattern: "Marine diversity highest in shallow waters, declines with depth",
                mechanisms: "Light (photosynthesis limited to photic zone), temperature, productivity, habitat complexity (coral reefs in shallows)",
                exceptions: "Deep-sea hydrothermal vents have high diversity (local productivity from chemosynthesis)"
            },
            
            islandBiogeography: {
                theory: "MacArthur & Wilson (1967): diversity on islands determined by balance of immigration and extinction",
                factors: {
                    area: {
                        pattern: "Larger islands have more species",
                        mechanism: "More habitat, larger populations (lower extinction), more resources",
                        relationship: "S = c × A^z (species-area relationship)",
                        z: "Typically 0.15-0.35 (exponent; slope on log-log plot)"
                    },
                    isolation: {
                        pattern: "Islands closer to mainland have more species",
                        mechanism: "Higher immigration rate (easier to reach)",
                        example: "Caribbean islands: near Puerto Rico more diverse than distant Lesser Antilles"
                    }
                },
                equilibrium: "Species richness reaches equilibrium where immigration = extinction",
                dynamics: "Equilibrium number relatively stable, but species composition changes (turnover)",
                applications: {
                    habitatFragments: "Habitat patches in agricultural landscape act like islands",
                    reserves: "Larger reserves maintain more species; corridors act as stepping stones"
                },
                limitations: [
                    "Assumes species equivalent (differ in colonization, extinction)",
                    "Assumes mainland source unlimited",
                    "Ignores evolution (speciation on islands)",
                    "Simple model but foundational"
                ]
            },
            
            habitatHeterogeneity: {
                pattern: "More habitat types → more species",
                mechanism: "Different habitats support different species; more niches available",
                example: "Mountainous regions more diverse than flat (elevation creates habitat gradients)",
                application: "Preserve habitat diversity to maximize species conservation"
            }
        },

        valueOfBiodiversity: {
            intrinsicValue: {
                definition: "Value of species in their own right, independent of utility to humans",
                ethical: "Species have right to exist (biocentric or ecocentric ethics)",
                debate: "Anthropocentric vs biocentric views",
                importance: "Even if we can't quantify economic value, biodiversity has inherent worth"
            },
            
            instrumentalValue: {
                definition: "Value to humans; utilitarian perspective",
                categories: "Ecosystem services framework",
                
                provisioning: {
                    definition: "Products obtained from ecosystems",
                    examples: {
                        food: "Crops, livestock, fisheries, wild foods (hunting, gathering)",
                        water: "Fresh water for drinking, irrigation",
                        materials: "Timber, fibers (cotton, wool), fuel wood, biochemicals",
                        medicinalResources: "~50% of pharmaceuticals derived from natural products; many undiscovered",
                        geneticResources: "Crop wild relatives for breeding; genetic diversity for biotech"
                    },
                    biodiversityLink: "Diverse ecosystems provide more resources; genetic diversity enables improvement"
                },
                
                regulating: {
                    definition: "Benefits from ecosystem regulation of processes",
                    examples: {
                        climateRegulation: "Forests sequester CO₂, moderate temperature; wetlands store carbon",
                        waterPurification: "Wetlands filter pollutants; forests prevent erosion",
                        pollination: "~35% of global crop production depends on animal pollinators; worth ~$200+ billion/year",
                        pestControl: "Predators, parasitoids control agricultural pests naturally; reduces pesticide need",
                        diseaseRegulation: "Biodiversity can dilute disease transmission (dilution effect)",
                        floodControl: "Wetlands, forests absorb water, reduce flooding",
                        erosionControl: "Vegetation stabilizes soil"
                    },
                    biodiversityLink: "More diverse ecosystems often provide more reliable regulation (functional redundancy)"
                },
                
                cultural: {
                    definition: "Non-material benefits",
                    examples: {
                        recreation: "Ecotourism, wildlife watching, hiking, fishing",
                        aesthetic: "Beauty of nature; inspiration for art, literature",
                        spiritual: "Sacred species, sacred groves, nature-based religions",
                        educational: "Nature as teaching tool; biodiversity essential for ecology research",
                        cultural: "Identity tied to landscapes, species (national symbols)"
                    },
                    importance: "Contributes to quality of life, mental health, cultural heritage",
                    biodiversityLink: "Diverse ecosystems more aesthetically pleasing, offer more recreation opportunities"
                },
                
                supporting: {
                    definition: "Services necessary for all other services (fundamental ecosystem processes)",
                    examples: {
                        nutrientCycling: "Decomposition, nitrogen fixation recycle nutrients",
                        soilFormation: "Weathering, organic matter accumulation create soil",
                        primaryProduction: "Photosynthesis creates organic matter (base of food webs)",
                        waterCycling: "Transpiration, infiltration maintain water cycle"
                    },
                    biodiversityLink: "Microbes, fungi, bacteria essential for these processes; biodiversity maintains functionality"
                }
            },
            
            economicValuation: {
                attempts: "Costanza et al. (1997): estimated global ecosystem services at $33 trillion/year (GDP at time: $18 trillion); updated (2014): $125-$145 trillion/year",
                challenges: [
                    "Hard to monetize intrinsic or cultural values",
                    "Many services not traded in markets (no price)",
                    "Valuation methods controversial",
                    "Services interconnected (double-counting risk)"
                ],
                utility: "Despite challenges, economic valuation helps communicate biodiversity importance to policymakers"
            },
            
            insuranceValue: {
                concept: "Biodiversity provides resilience and insurance against environmental change",
                mechanisms: {
                    redundancy: "Multiple species perform similar functions → if one lost, others compensate",
                    response: "Different species respond differently to disturbances → portfolio effect → stability",
                    adaptability: "Genetic diversity enables adaptation to new conditions"
                },
                analogy: "Diverse portfolio of stocks safer than investing in single stock",
                importance: "Especially critical in face of climate change and unpredictable future"
            },
            
            optionValue: {
                definition: "Value of preserving biodiversity for unknown future uses",
                examples: [
                    "Undiscovered medicines (e.g., Pacific yew → taxol for cancer)",
                    "Future crops (wild relatives for breeding)",
                    "Genetic engineering source material",
                    "Biomimicry (learning from nature for technology)"
                ],
                prudence: "We don't know what we'll need in future; extinction is irreversible"
            }
        },

        threatsTo Biodiversity: {
            HIPPO: {
                acronym: "Habitat loss, Invasive species, Pollution, Population (human), Overharvesting",
                note: "Mnemonic for major threats"
            },
            
            habitatLoss: {
                description: "Leading cause of biodiversity loss globally",
                extent: "~50% of tropical forests lost; ~90% of temperate grasslands converted to agriculture; ~50% of wetlands drained",
                drivers: {
                    agriculture: "Expansion of cropland, pasture (~70% of recent deforestation in tropics for agriculture)",
                    urbanization: "Cities, infrastructure (roads fragment habitat)",
                    logging: "Timber extraction, often unsustainable",
                    mining: "Resource extraction destroys habitat"
                },
                fragmentation: {
                    definition: "Breaking continuous habitat into small, isolated patches",
                    effects: [
                        "Edge effects: altered microclimate, increased predation near edges",
                        "Reduced area: smaller patches support fewer species (species-area relationship)",
                        "Isolation: reduced dispersal between patches → genetic isolation, lower recolonization after local extinction",
                        "Altered disturbance regimes"
                    ],
                    example: "Amazon: fragmentation experiments showed rapid species loss in isolated forest patches"
                },
                regions: {
                    tropicalForests: "Highest biodiversity; fastest loss (Amazon, Southeast Asia, Congo Basin)",
                    coralReefs: "Coastal development, sedimentation, destructive fishing",
                    wetlands: "Drained for agriculture; fill for development",
                    grasslands: "Converted to cropland (prairies, pampas, steppes mostly gone)"
                }
            },
            
            overexploitation: {
                definition: "Harvesting species faster than they can reproduce",
                examples: {
                    overfishing: "Cod collapse (Northwest Atlantic); tuna, sharks overfished globally; ~33% of fish stocks overexploited",
                    hunting: "Passenger pigeon (extinct 1914 from overhunting); many large mammals overhunted",
                    poaching: "Rhinos (horns), elephants (ivory), tigers (pelts, traditional medicine)",
                    logging: "Mahogany, teak overharvested",
                    wildlifeTrade: "Parrots, reptiles, orchids collected for pet/plant trade"
                },
                feedbacks: "As species rarer, price increases → more hunting (economic incentive for extinction)",
                tragedy: "Open-access resources (no ownership) lead to overuse ('tragedy of the commons')",
                solutions: "Quotas, protected areas, CITES (Convention on International Trade in Endangered Species), sustainable harvest"
            },
            
            invasiveSpecies: {
                definition: "Non-native species introduced to new area where they spread and cause harm",
                impact: "Second leading cause of biodiversity loss (especially on islands)",
                mechanisms: {
                    competition: "Outcompete native species (zebra mussels in Great Lakes)",
                    predation: "Naïve prey lack defenses (brown tree snake eradicated birds on Guam)",
                    disease: "Introduce pathogens (chytrid fungus devastating amphibians globally)",
                    habitatAlteration: "Change ecosystem structure (kudzu smothers forests)"
                },
                examples: [
                    "Cane toads in Australia: toxic, kill native predators",
                    "Rats on islands: eat eggs, chicks of ground-nesting birds → many extinctions",
                    "Zebra mussels in North America: filter water excessively, outcompete natives",
                    "Burmese pythons in Everglades: devastating mammal populations"
                ],
                vulnerability: "Islands especially vulnerable (evolved without predators, competitors)",
                vectors: "Ships (ballast water), horticulture, pet trade, intentional release",
                prevention: "Border controls, ballast water treatment, public education ('Don't Let It Loose')"
            },
            
            pollution: {
                types: {
                    nutrients: "Nitrogen, phosphorus runoff → eutrophication, dead zones",
                    toxics: "Pesticides, heavy metals, industrial chemicals → bioaccumulation, poisoning",
                    plastics: "Entanglement, ingestion, microplastics in food chain",
                    airPollution: "Acid rain, ozone damage forests, lakes",
                    lightNoise: "Disrupts behavior (bird migration, sea turtle nesting)",
                    thermalPollution: "Warm water discharge alters aquatic ecosystems"
                },
                examples: {
                    DDT: "Bioaccumulated in food chain → eggshell thinning in raptors (bald eagles, peregrines nearly extinct); banned 1972 in US",
                    oceanAcidification: "CO₂ absorption → lower pH → harms corals, shellfish (discussed in nutrient cycling)",
                    plastics: "Entangle marine mammals, seabirds; microplastics ubiquitous, effects unknown",
                    eutrophication: "Excess nutrients → algal blooms → hypoxia → fish kills (Gulf of Mexico dead zone)"
                },
                synergies: "Pollutants interact with other stressors (pollution + habitat loss worse than either alone)"
            },
            
            climateChange: {
                impacts: {
                    rangeShifts: "Species move poleward, upward to track suitable climate (average ~17 km/decade poleward)",
                    phenology: "Timing of life events (flowering, migration, breeding) shifts; mismatches possible (birds arrive after peak caterpillar abundance)",
                    coralBleaching: "Warm water → corals expel zooxanthellae → bleaching → death if prolonged; mass bleaching events increasing",
                    seaIceDecline: "Polar bears, seals lose habitat",
                    oceanAcidification: "Threatens calcifying organisms (corals, mollusks, plankton)",
                    extremeEvents: "Droughts, floods, fires increase in frequency/intensity"
                },
                extinctionRisk: "Species unable to disperse, adapt, or lacking suitable habitat at risk; 20-30% of species at increased extinction risk with 2°C warming",
                interactions: "Interacts with other threats (climate-stressed forests more susceptible to pests; fires exacerbated by drought)",
                momentum: "Committed to further warming even if emissions stopped today (ocean thermal inertia)"
            },
            
            synergies: {
                concept: "Threats interact; combined impact > sum of individual impacts",
                examples: [
                    "Habitat fragmentation + climate change: species can't disperse to track suitable climate",
                    "Pollution + disease: stressed organisms more susceptible to pathogens",
                    "Invasive species + climate change: invaders benefit from novel conditions"
                ],
                implication: "Must address multiple threats simultaneously for effective conservation"
            }
        },

        extinctionCrisis: {
            backgroundExtinctionRate: {
                definition: "Normal extinction rate over evolutionary time",
                estimate: "~1 extinction per million species per year (1 E/MSY)",
                measurement: "Fossil record (though incomplete)"
            },
            
            currentExtinctionRate: {
                estimate: "100-1000x background rate (conservative estimates); possibly much higher",
                uncertainty: "Many species undescribed; extinction may go unnoticed",
                evidence: "IUCN Red List: ~28% of assessed species threatened with extinction"
            },
            
            massExtinctions: {
                definition: "Events where >75% of species go extinct in geologically short time",
                big5: [
                    "Ordovician-Silurian (445 MYA): ~85% marine species",
                    "Late Devonian (375 MYA): ~75% species",
                    "Permian-Triassic (251 MYA): ~96% marine, ~70% terrestrial (worst ever)",
                    "Triassic-Jurassic (200 MYA): ~80% species",
                    "Cretaceous-Paleogene (66 MYA): ~75% species (dinosaurs, except birds)"
                ],
                sixthExtinction: {
                    claim: "We are in/entering sixth mass extinction",
                    evidence: "Extinction rates 100-1000x background; many species declining",
                    cause: "Humans (first mass extinction caused by single species)",
                    debate: "Some argue not yet at mass extinction levels; others say it's underway",
                    urgency: "Even if not technically 'mass' yet, biodiversity loss is severe and accelerating"
                }
            },
            
            extinctionVortex: {
                concept: "Small populations spiral toward extinction through positive feedbacks",
                mechanisms: [
                    "Inbreeding depression → reduced fitness → population declines",
                    "Genetic drift → loss of genetic diversity → reduced adaptability",
                    "Allee effects: at low density, hard to find mates → reproduction fails",
                    "Stochastic events: random disasters can wipe out small populations"
                ],
                MVP: "Minimum Viable Population: size needed to persist (typically hundreds to thousands); below this, extinction likely"
            }
        },

        conservationStrategies: {
            protected Areas: {
                types: "National parks, wilderness areas, wildlife reserves, marine protected areas",
                extent: "~17% of land, ~8% of ocean protected (targets: 30% by 2030)",
                design: {
                    size: "Larger better (species-area relationship; support viable populations)",
                    connectivity: "Corridors link patches → facilitate dispersal, gene flow",
                    representation: "Protect samples of all ecosystem types (not just 'charismatic' places)",
                    management: "Active management often needed (invasive removal, fire management)"
                },
                effectiveness: "Generally work (species fare better inside than outside), but challenges exist (poaching, encroachment, insufficient funding)"
            },
            
            restoration: {
                definition: "Repairing degraded ecosystems",
                examples: [
                    "Reforestation (plant trees in deforested areas)",
                    "Wetland restoration (remove drainage, restore hydrology)",
                    "Coral reef restoration (transplant corals, remove invasives)",
                    "Stream restoration (remove dams, restore riparian vegetation)"
                ],
                challenges: "Restored ecosystems often don't fully replicate original (missing species, altered soils); expensive",
                success: "Many examples of successful restoration (Everglades, Rhine River, Loess Plateau China)"
            },
            
            speciesBasedApproaches: {
                captiveBreeding: {
                    purpose: "Maintain populations in zoos, aquaria until wild habitat restored",
                    successes: "California condor, black-footed ferret, Arabian oryx reintroduced after captive breeding",
                    challenges: "Expensive, genetic diversity loss, adaptation to captivity, reintroduction difficult"
                },
                reintroduction: {
                    definition: "Release captive-bred or translocated individuals into wild",
                    requirements: "Suitable habitat, removal of threats, sufficient numbers, genetic diversity",
                    examples: "Wolves to Yellowstone, sea otters to California, peregrine falcons widespread"
                },
                flagship: {
                    definition: "Charismatic species used to garner support for conservation",
                    examples: "Pandas, tigers, elephants, whales",
                    benefit: "Protecting flagship often protects many other species ('umbrella species')",
                    critique: "Neglects less charismatic but equally important species"
                }
            },
            
            landscapeApproaches: {
                hotspots: {
                    definition: "Regions with high endemism and high habitat loss (≥1,500 endemic plants, ≥70% habitat loss)",
                    identified: "36 hotspots globally (e.g., Madagascar, Atlantic Forest, Philippines, Caribbean)",
                    coverage: "<2% land area but >50% plant species, 42% terrestrial vertebrates",
                    strategy: "Prioritize hotspots for funding (maximize species protected per dollar)"
                },
                ecosystemServices: {
                    approach: "Protect areas providing critical services (water supply, carbon storage, pollination)",
                    benefit: "Wins support from stakeholders benefiting from services",
                    examples: "Protect watersheds for water quality; forests for carbon credits"
                },
                connectivity: {
                    corridors: "Habitat strips linking patches",
                    function: "Facilitate dispersal, gene flow, range shifts (climate change)",
                    examples: "Yellowstone to Yukon corridor (Y2Y), European Green Belt"
                }
            },
            
            legislation: {
                ESA: "Endangered Species Act (US, 1973): protects threatened/endangered species; prevents extinction but recovery slow",
                CITES: "Convention on International Trade in Endangered Species: regulates wildlife trade",
                nationalLaws: "Many countries have endangered species laws, though enforcement varies"
            },
            
            communitybased: {
                rationale: "Local people most affected by conservation; must be involved for success",
                approaches: {
                    comanagement: "Share management authority with local communities",
                    incentives: "Payments for ecosystem services, ecotourism revenue-sharing",
                    traditionalKnowledge: "Incorporate indigenous/local knowledge"
                },
                examples: "Community forests (Nepal), community wildlife conservancies (Kenya/Namibia)",
                success: "Often more sustainable than top-down 'fortress conservation'"
            },
            
            climateAction: {
                mitigation: "Reduce greenhouse gas emissions (transition to renewables, energy efficiency, reforestation)",
                adaptation: {
                    assistedMigration: "Deliberately move species to suitable habitat (controversial)",
                    corridors: "Facilitate natural range shifts",
                    refugia: "Protect climate refugia (areas likely to remain suitable)",
                    evolutionaryRescue: "Facilitate adaptation (gene flow from adapted populations)"
                },
                integration: "Climate adaptation must be integrated into all conservation planning"
            }
        },

        commonMisconceptions: {
            misconception1: {
                wrong: "Biodiversity = species richness (number of species)",
                correct: "Biodiversity includes genetic, species, ecosystem diversity; also evenness matters",
                clarification: "Richness is one component, but diversity more than just counting species"
            },
            misconception2: {
                wrong: "Rare species are always most important for conservation",
                correct: "Keystone species (which may be common) often have greater impact; functional diversity also critical",
                clarification: "Rarity doesn't automatically equal importance (though rare endemic species are conservation priorities)"
            },
            misconception3: {
                wrong: "High biodiversity always = healthy ecosystem",
                correct: "Not necessarily; invasive species can inflate richness but degrade ecosystem function",
                clarification: "Native diversity and ecosystem integrity more important than raw richness"
            },
            misconception4: {
                wrong: "Extinction is natural, so current crisis is normal",
                correct: "Current rates 100-1000x background rate; pace and human cause unprecedented",
                clarification: "Extinction is natural, but current anthropogenic crisis is not"
            },
            misconception5: {
                wrong: "Conservation is only about protecting charismatic megafauna",
                correct: "Microbes, insects, plants equally important for ecosystem function; invertebrates vastly more diverse",
                clarification: "Flagship species garner attention, but conservation must be comprehensive"
            },
            misconception6: {
                wrong: "Protected areas are sufficient for conservation",
                correct: "Need landscape-level conservation, address threats outside reserves, restore degraded areas",
                clarification: "Protected areas are necessary but not sufficient; need matrix management, corridors"
            }
        },

        keyTakeaways: [
            "Biodiversity includes genetic, species, and ecosystem diversity; essential for ecosystem function and human well-being",
            "Diversity measured using richness, Shannon H', Simpson D, evenness indices; combine richness and abundance",
            "Species richness highest in tropics, decreases toward poles (latitudinal gradient); also varies with elevation, area, isolation",
            "Biodiversity provides ecosystem services: provisioning, regulating, cultural, supporting",
            "Major threats: HIPPO (Habitat loss, Invasive species, Pollution, Population, Overharvesting); synergistic effects",
            "Sixth mass extinction: current extinction rates 100-1000x background; anthropogenic",
            "Conservation strategies: protected areas, restoration, species reintroduction, landscape corridors, community-based, climate action",
            "Biodiversity hotspots: 36 regions with high endemism and high threat; conservation priorities",
            "Preserving biodiversity is ethical imperative and practical necessity for sustaining life on Earth"
        ]
    };

    return content;
}


    // ========================================
    // HANDLER METHODS FOR ECOSYSTEM TOPICS
    // ========================================

    handleEnergyFlow(problem) {
        // Return comprehensive energy flow content
        // This would access this.lessons.energy_flow and format it appropriately
        return this.lessons.energy_flow;
    }

    handleNutrientCycling(problem) {
        return this.lessons.nutrient_cycling;
    }

    handlePopulationEcology(problem) {
        return this.lessons.population_ecology;
    }

    handleCommunityEcology(problem) {
        return this.lessons.community_ecology;
    }

    handleBiodiversity(problem) {
        return this.lessons.biodiversity;
    }

    handleEcosystemServices(problem) {
        // Would return ecosystem services lesson content
        return {
            topic: "Ecosystem Services",
            summary: "Benefits humans derive from ecosystems, essential for human wellbeing and survival",
            // ... additional content
        };
    }



// ========================================
// MAIN PROBLEM PROCESSING METHODS - ECOSYSTEM
// ========================================

parseEcosystemProblem(topic, parameters = {}, subTopic = null, context = {}) {
    let topicType = null;

    // Match topic to handler
    for (const [type, config] of Object.entries(this.ecosystemTopics)) {
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
        throw new Error(`Unable to recognize ecosystem ecology topic: ${topic}`);
    }

    return {
        originalTopic: topic,
        type: topicType,
        subTopic: subTopic,
        parameters: { ...parameters },
        context: { ...context },
        difficulty: this.ecosystemTopics[topicType].difficulty,
        prerequisites: this.ecosystemTopics[topicType].prerequisites,
        parsedAt: new Date().toISOString()
    };
}

handleEcosystemProblem(config) {
    const { topic, parameters, subTopic, context, requestType } = config;

    try {
        const isExperimentRequest = requestType === 'experiment' || 
                                   (typeof topic === 'string' && topic.toLowerCase().includes('experiment'));

        if (isExperimentRequest) {
            return this.handleEcosystemExperimentRequest(config);
        } else {
            this.currentProblem = this.parseEcosystemProblem(topic, parameters, subTopic, context);
            this.currentContent = this.getEcosystemContent(this.currentProblem);
            
            if (this.adaptiveDifficulty) {
                this.currentContent = this.adaptContentDifficulty(this.currentContent, this.learnerProfile.currentLevel);
            }
            
            if (this.contextualLearning) {
                this.currentContent.contextualScenarios = this.getContextualScenarios(this.currentProblem.type);
            }
            
            if (this.includeExperiments) {
                this.currentContent.relatedExperiments = this.getRelatedEcosystemExperiments(this.currentProblem.type);
            }
            
            if (this.metacognitiveSupport) {
                this.currentContent.metacognitivePrompts = this.getMetacognitivePrompts(this.currentProblem.type);
            }
            
            this.contentSteps = this.generateEcosystemContent(this.currentProblem, this.currentContent);
            
            // Generate workbook (handles async internally)
            this.generateEcosystemWorkbook();

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
        throw new Error(`Failed to process ecosystem ecology request: ${error.message}`);
    }
}

getEcosystemContent(problem) {
    const handler = this.ecosystemTopics[problem.type]?.handler;
    if (!handler) {
        throw new Error(`No handler available for ecosystem topic: ${problem.type}`);
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

    // Filter by specific topics (ecosystem-specific)
    if (parameters.focusTopics && Array.isArray(parameters.focusTopics)) {
        const focusSet = new Set(parameters.focusTopics.map(t => t.toLowerCase()));
        
        // Keep only content sections that match focus topics
        Object.keys(filtered).forEach(key => {
            if (typeof filtered[key] === 'object' && !Array.isArray(filtered[key])) {
                const shouldKeep = focusSet.has(key.toLowerCase()) || 
                                  ['topic', 'category', 'summary', 'keyTakeaways'].includes(key);
                if (!shouldKeep) {
                    delete filtered[key];
                }
            }
        });
    }

    // Filter by ecosystem type (terrestrial, aquatic, etc.)
    if (parameters.ecosystemType) {
        filtered.ecosystemFocus = parameters.ecosystemType;
    }

    return filtered;
}

handleEcosystemExperimentRequest(config) {
    const { topic, parameters, experimentId } = config;

    if (experimentId && this.ecosystemExperiments[experimentId]) {
        this.currentExperiment = this.ecosystemExperiments[experimentId];
    } else {
        this.currentExperiment = this.findEcosystemExperimentByTopic(topic);
    }

    if (!this.currentExperiment) {
        throw new Error(`No ecosystem experiment found for: ${topic}`);
    }

    const experimentContent = this.generateEcosystemExperimentContent(this.currentExperiment, parameters);
    this.generateEcosystemExperimentWorkbook(experimentContent);

    return {
        experiment: this.currentExperiment,
        content: experimentContent,
        workbook: this.currentWorkbook,
        getDiagrams: () => this.waitForDiagrams()
    };
}

findEcosystemExperimentByTopic(topic) {
    const topicLower = topic.toLowerCase();
    
    // First try exact name match
    for (const [id, exp] of Object.entries(this.ecosystemExperiments)) {
        if (exp.name.toLowerCase().includes(topicLower)) {
            return exp;
        }
    }

    // Then try related topics
    for (const [id, exp] of Object.entries(this.ecosystemExperiments)) {
        if (exp.relatedTopics.some(t => topicLower.includes(t.toLowerCase()))) {
            return exp;
        }
    }

    // Try category match
    for (const [id, exp] of Object.entries(this.ecosystemExperiments)) {
        if (exp.category.toLowerCase().includes(topicLower)) {
            return exp;
        }
    }

    return null;
}

generateEcosystemExperimentContent(experiment, parameters = {}) {
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
            data: this.formatEcosystemLabExperiment(experiment.labExperiment)
        });
    }

    return content;
}

formatEcosystemLabExperiment(labExp) {
    const formatted = [];

    formatted.push(['Experiment Title', labExp.title]);
    formatted.push(['Hypothesis', labExp.hypothesis]);
    formatted.push(['Purpose', labExp.purpose]);
    
    if (labExp.background) {
        formatted.push(['', '']);
        formatted.push(['Background', '']);
        if (typeof labExp.background === 'object') {
            Object.entries(labExp.background).forEach(([key, value]) => {
                formatted.push([`  ${key}:`, value]);
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
        }
    }

    if (labExp.safetyPrecautions) {
        formatted.push(['', '']);
        formatted.push(['SAFETY PRECAUTIONS', '']);
        if (Array.isArray(labExp.safetyPrecautions)) {
            labExp.safetyPrecautions.forEach(safety => {
                formatted.push(['  ⚠', safety]);
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
        Object.entries(labExp.expectedResults).forEach(([key, value]) => {
            formatted.push([`  ${key}:`, '']);
            if (typeof value === 'object' && !Array.isArray(value)) {
                Object.entries(value).forEach(([subKey, subValue]) => {
                    formatted.push([`    ${subKey}:`, subValue]);
                });
            } else {
                formatted.push(['    ', value]);
            }
        });
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
        }
    }

    if (labExp.analysis) {
        formatted.push(['', '']);
        formatted.push(['Analysis', '']);
        Object.entries(labExp.analysis).forEach(([key, value]) => {
            formatted.push([`  ${key}:`, '']);
            if (Array.isArray(value)) {
                value.forEach(item => formatted.push(['    -', item]));
            } else if (typeof value === 'object') {
                Object.entries(value).forEach(([subKey, subValue]) => {
                    formatted.push([`    ${subKey}:`, subValue]);
                });
            } else {
                formatted.push(['    ', value]);
            }
        });
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
        formatted.push(['Extensions', '']);
        if (Array.isArray(labExp.extensions)) {
            labExp.extensions.forEach(ext => {
                formatted.push(['  •', ext]);
            });
        }
    }

    return formatted;
}

getRelatedEcosystemExperiments(topicType) {
    const related = [];
    
    Object.entries(this.ecosystemExperiments).forEach(([id, experiment]) => {
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
// UTILITY AND HELPER METHODS - ECOSYSTEM
// ========================================

getAllEcosystemExperiments() {
    return Object.entries(this.ecosystemExperiments).map(([id, exp]) => ({
        id: id,
        name: exp.name,
        category: exp.category,
        relatedTopics: exp.relatedTopics,
        scientist: exp.historicalBackground?.scientist,
        year: exp.historicalBackground?.year
    }));
}

// ========================================
// CONTENT GENERATION METHODS - ECOSYSTEM
// ========================================

generateEcosystemContent(problem, content) {
    const contentSections = [];

    // Generate overview section
    contentSections.push(this.generateEcosystemOverviewSection(problem, content));

    // Generate specific content sections based on content structure
    if (content.fundamentalPrinciples || content.fundamentalConcepts) {
        contentSections.push(this.generateFundamentalsSection(content));
    }

    if (content.trophicStructure || content.trophicLevels) {
        contentSections.push(this.generateTrophicStructureSection(content));
    }

    if (content.reservoirs || content.majorProcesses) {
        contentSections.push(this.generateProcessesSection(content));
    }

    if (content.populationGrowthModels || content.populationRegulation) {
        contentSections.push(this.generatePopulationDynamicsSection(content));
    }

    if (content.speciesInteractions) {
        contentSections.push(this.generateInteractionsSection(content));
    }

    if (content.measuringDiversity || content.patternsOfBiodiversity) {
        contentSections.push(this.generateBiodiversitySection(content));
    }

    // Add patterns section
    if (content.latitudinalGradient || content.islandBiogeography) {
        contentSections.push(this.generatePatternsSection(content));
    }

    // Add human impacts
    if (content.humanImpact || content.threatsTo || content.extinctionCrisis) {
        contentSections.push(this.generateHumanImpactsSection(content));
    }

    // Add conservation section
    if (content.solutions || content.conservationStrategies) {
        contentSections.push(this.generateConservationSection(content));
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

generateEcosystemOverviewSection(problem, content) {
    return {
        type: 'overview',
        title: content.topic || problem.type,
        content: {
            category: content.category,
            summary: content.summary,
            keyPoints: this.extractEcosystemKeyPoints(content),
            difficulty: problem.difficulty,
            prerequisites: problem.prerequisites
        }
    };
}

generateFundamentalsSection(content) {
    return {
        type: 'fundamentals',
        title: 'Fundamental Concepts',
        content: content.fundamentalPrinciples || content.fundamentalConcepts
    };
}

generateTrophicStructureSection(content) {
    return {
        type: 'trophic_structure',
        title: 'Trophic Structure and Energy Flow',
        content: content.trophicStructure || content.trophicLevels
    };
}

generateProcessesSection(content) {
    return {
        type: 'processes',
        title: 'Ecological Processes',
        content: {
            reservoirs: content.reservoirs,
            processes: content.majorProcesses
        }
    };
}

generatePopulationDynamicsSection(content) {
    return {
        type: 'population_dynamics',
        title: 'Population Dynamics',
        content: {
            growthModels: content.populationGrowthModels,
            regulation: content.populationRegulation,
            lifeHistory: content.lifeHistoryStrategies
        }
    };
}

generateInteractionsSection(content) {
    return {
        type: 'interactions',
        title: 'Species Interactions',
        content: content.speciesInteractions
    };
}

generateBiodiversitySection(content) {
    return {
        type: 'biodiversity',
        title: 'Biodiversity Measurement and Patterns',
        content: {
            measurement: content.measuringDiversity,
            patterns: content.patternsOfBiodiversity,
            value: content.valueOfBiodiversity
        }
    };
}

generatePatternsSection(content) {
    return {
        type: 'patterns',
        title: 'Ecological Patterns',
        content: {
            latitudinal: content.latitudinalGradient,
            island: content.islandBiogeography,
            other: content.otherPatterns
        }
    };
}

generateHumanImpactsSection(content) {
    return {
        type: 'human_impacts',
        title: 'Human Impacts and Threats',
        content: {
            impacts: content.humanImpact,
            threats: content.threatsTo,
            extinction: content.extinctionCrisis
        }
    };
}

generateConservationSection(content) {
    return {
        type: 'conservation',
        title: 'Conservation Strategies',
        content: content.solutions || content.conservationStrategies
    };
}

extractEcosystemKeyPoints(content) {
    const keyPoints = [];

    if (content.summary) keyPoints.push(content.summary);
    
    // Extract from key takeaways if available
    if (content.keyTakeaways) {
        keyPoints.push(...content.keyTakeaways.slice(0, 5));
    } else {
        // Extract from fundamental principles
        if (content.fundamentalPrinciples) {
            Object.values(content.fundamentalPrinciples).forEach(principle => {
                if (principle.statement) keyPoints.push(principle.statement);
            });
        }
    }

    return keyPoints.slice(0, 5);
}

// ========================================
// ECOSYSTEM SPECIFIC HELPER METHODS
// ========================================

getEcosystemTopicRelevance(topicType) {
    const relevance = {
        energy_flow: "Energy flow determines ecosystem structure and limits trophic levels through the 10% rule",
        nutrient_cycling: "Nutrient cycles connect living organisms with the physical environment and enable life",
        population_ecology: "Population dynamics explain changes in species abundance and inform conservation",
        community_ecology: "Species interactions shape community structure and biodiversity patterns",
        biodiversity: "Biodiversity is essential for ecosystem functioning, resilience, and human well-being",
        ecosystem_services: "Ecosystems provide essential services supporting all human societies"
    };

    return relevance[topicType] || "Important ecological concept affecting ecosystem function";
}

suggestRelatedEcosystemTopics() {
    if (!this.currentProblem) return [];

    const relatedTopicsMap = {
        energy_flow: ['nutrient_cycling', 'community_ecology', 'population_ecology'],
        nutrient_cycling: ['energy_flow', 'biodiversity', 'community_ecology'],
        population_ecology: ['community_ecology', 'biodiversity', 'energy_flow'],
        community_ecology: ['population_ecology', 'biodiversity', 'energy_flow'],
        biodiversity: ['community_ecology', 'population_ecology', 'ecosystem_services'],
        ecosystem_services: ['biodiversity', 'community_ecology', 'nutrient_cycling']
    };

    const relatedTypes = relatedTopicsMap[this.currentProblem.type] || [];

    return relatedTypes.map(type => ({
        type: type,
        name: this.ecosystemTopics[type]?.name,
        description: this.ecosystemTopics[type]?.description
    }));
}

generateEcosystemDiagramData() {
    if (!this.currentContent) return;

    const { type } = this.currentProblem;

    this.diagramData = {
        type: type,
        diagrams: this.getRelevantEcosystemDiagrams(type),
        placeholder: true,
        note: "Diagram generation will include food webs, energy pyramids, cycles, and population graphs"
    };
}

getRelevantEcosystemDiagrams(topicType) {
    const diagramMap = {
        energy_flow: ['food_web', 'energy_pyramid', 'trophic_levels', 'ten_percent_rule'],
        nutrient_cycling: ['carbon_cycle', 'nitrogen_cycle', 'phosphorus_cycle', 'water_cycle'],
        population_ecology: ['exponential_growth', 'logistic_growth', 'survivorship_curves', 'age_pyramids'],
        community_ecology: ['species_interactions', 'succession_stages', 'niche_partitioning'],
        biodiversity: ['species_area_curve', 'biodiversity_hotspots', 'latitudinal_gradient'],
        ecosystem_services: ['ecosystem_services_framework', 'human_impacts']
    };

    return diagramMap[topicType] || [];
}

generateEcosystemGlossary() {
    if (!this.currentContent) return {};

    const glossary = {};

    // Extract from key definitions
    if (this.currentContent.keyDefinitions) {
        Object.entries(this.currentContent.keyDefinitions).forEach(([term, definition]) => {
            glossary[term] = definition;
        });
    }

    // Extract from fundamental concepts
    if (this.currentContent.fundamentalConcepts) {
        this.extractGlossaryFromObject(this.currentContent.fundamentalConcepts, glossary);
    }

    return glossary;
}

extractGlossaryFromObject(obj, glossary, parentKey = '') {
    Object.entries(obj).forEach(([key, value]) => {
        if (typeof value === 'object' && value !== null) {
            if (value.definition) {
                glossary[this.formatKey(key)] = value.definition;
            }
            // Recurse for nested objects
            this.extractGlossaryFromObject(value, glossary, key);
        }
    });
}

generateEcosystemAnalogy(concept) {
    const analogies = {
        // Energy Flow
        'trophic_level': "Like floors in an office building - each level receives less energy from below",
        'food_chain': "Like an assembly line where energy passes from one station to the next",
        'food_web': "Like a complex network of roads connecting many destinations",
        'energy_pyramid': "Like a financial pyramid - only a fraction passes to the next level",
        'ten_percent_rule': "Like losing 90% of your money in transaction fees at each step",
        
        // Nutrient Cycling
        'carbon_cycle': "Like money circulating through an economy - same atoms reused",
        'nitrogen_fixation': "Like converting foreign currency to usable local currency",
        'decomposition': "Like recycling centers breaking down products for reuse",
        'nutrient_reservoir': "Like a bank where nutrients are stored",
        
        // Population Ecology
        'exponential_growth': "Like compound interest in a savings account with no limits",
        'logistic_growth': "Like filling a parking lot - fast at first, then slows as spaces fill",
        'carrying_capacity': "Like the maximum number of cars that can fit in a parking garage",
        'density_dependent': "Like traffic jams - problems increase with more cars",
        
        // Community Ecology
        'competition': "Like two stores competing for the same customers",
        'predation': "Like a hunter pursuing prey in a strategic game",
        'mutualism': "Like a business partnership where both companies benefit",
        'niche': "Like a job description - what you do, when, and where",
        'keystone_species': "Like a keystone in an arch - remove it and the structure collapses",
        'succession': "Like a neighborhood developing from bare land to established community",
        
        // Biodiversity
        'species_richness': "Like counting the number of different items in a collection",
        'species_evenness': "Like how evenly distributed money is among people",
        'biodiversity_hotspot': "Like a treasure chest - small area with concentrated value",
        'extinction_vortex': "Like a downward spiral - small problems compound into disaster"
    };

    return analogies[concept] || "Performs an important ecological function";
}

adaptEcosystemLanguage(text, level) {
    if (!text) return '';

    const adaptations = {
        basic: {
            replacements: {
                'trophic level': 'feeding level',
                'primary producer': 'plant (makes own food)',
                'primary consumer': 'herbivore (plant eater)',
                'secondary consumer': 'carnivore (meat eater)',
                'decomposer': 'recycler',
                'photosynthesis': 'making food from sunlight',
                'cellular respiration': 'breaking down food for energy',
                'carrying capacity': 'maximum population size',
                'niche': 'ecological role',
                'biodiversity': 'variety of life',
                'ecosystem': 'community of living things and their environment'
            }
        },
        intermediate: {
            replacements: {
                'trophic level': 'trophic level (feeding level)',
                'carrying capacity': 'carrying capacity (K)',
                'biodiversity': 'biodiversity (variety of species)'
            }
        },
        advanced: {
            replacements: {
                'carrying capacity': 'carrying capacity (K, density-dependent limit)',
                'trophic level': 'trophic level (position in food chain)',
                'ecological efficiency': 'ecological efficiency (~10% energy transfer)'
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

generateEcosystemLearningObjectives() {
    if (!this.currentProblem) return [];

    const objectivesDatabase = {
        energy_flow: [
            "Trace the flow of energy from sun through trophic levels to decomposers",
            "Explain the 10% rule and its implications for food chain length",
            "Distinguish between food chains and food webs",
            "Calculate energy transfer efficiency between trophic levels",
            "Compare energy pyramids, biomass pyramids, and pyramids of numbers"
        ],
        nutrient_cycling: [
            "Describe the major reservoirs and fluxes in biogeochemical cycles",
            "Explain the role of microorganisms in nutrient transformations",
            "Compare gaseous and sedimentary nutrient cycles",
            "Analyze human impacts on carbon and nitrogen cycles",
            "Relate nutrient cycling to ecosystem sustainability"
        ],
        population_ecology: [
            "Distinguish between exponential and logistic population growth",
            "Explain density-dependent and density-independent factors",
            "Interpret survivorship curves and relate to life history strategies",
            "Apply population models to conservation and management",
            "Predict population responses to environmental change"
        ],
        community_ecology: [
            "Classify species interactions and predict their ecological effects",
            "Explain competitive exclusion and niche partitioning",
            "Describe the role of keystone species in maintaining diversity",
            "Trace the stages of ecological succession",
            "Analyze trophic cascades and indirect effects"
        ],
        biodiversity: [
            "Calculate and interpret diversity indices (Shannon, Simpson)",
            "Explain patterns of biodiversity across space and time",
            "Evaluate the value of biodiversity for ecosystem function and human well-being",
            "Identify major threats to biodiversity (HIPPO)",
            "Design conservation strategies based on ecological principles"
        ],
        ecosystem_services: [
            "Categorize ecosystem services (provisioning, regulating, cultural, supporting)",
            "Relate biodiversity to ecosystem service provision",
            "Evaluate trade-offs in ecosystem management",
            "Assess the economic value of ecosystem services"
        ]
    };

    return objectivesDatabase[this.currentProblem.type] || [
        "Understand key ecological concepts",
        "Apply ecological principles to real-world scenarios",
        "Make connections between ecology and conservation"
    ];
}

identifyEcosystemPrerequisites() {
    if (!this.currentProblem) return [];

    const prerequisitesDatabase = {
        energy_flow: [
            "Basic understanding of photosynthesis and cellular respiration",
            "Knowledge of trophic levels and food chains",
            "First and Second Laws of Thermodynamics"
        ],
        nutrient_cycling: [
            "Basic chemistry (elements, compounds, chemical reactions)",
            "Understanding of photosynthesis and decomposition",
            "Knowledge of microbial roles in ecosystems"
        ],
        population_ecology: [
            "Basic mathematics (exponential functions, graphs)",
            "Understanding of population parameters (birth rate, death rate)",
            "Concept of limiting factors"
        ],
        community_ecology: [
            "Population ecology concepts",
            "Understanding of species interactions",
            "Knowledge of ecological niches"
        ],
        biodiversity: [
            "Community ecology concepts",
            "Basic statistics (understanding of indices)",
            "Taxonomy and species concepts"
        ],
        ecosystem_services: [
            "General ecology background",
            "Understanding of ecosystem processes",
            "Basic economics concepts"
        ]
    };

    return prerequisitesDatabase[this.currentProblem.type] || [
        "General biology background",
        "Basic ecology concepts"
    ];
}

generateEcosystemStudyTips() {
    if (!this.currentProblem) return [];

    const studyTipsDatabase = {
        energy_flow: [
            "Draw your own food webs for familiar ecosystems",
            "Practice calculating energy transfer using the 10% rule",
            "Create energy pyramid diagrams for different ecosystems",
            "Compare aquatic and terrestrial food chains",
            "Use real examples (Yellowstone wolves, kelp forests) to understand trophic cascades"
        ],
        nutrient_cycling: [
            "Draw each biogeochemical cycle from memory",
            "Create flowcharts showing microbial transformations",
            "Compare cycles side-by-side (gaseous vs sedimentary)",
            "Relate cycles to current events (climate change, eutrophication)",
            "Use mnemonics for complex processes (nitrification, denitrification)"
        ],
        population_ecology: [
            "Practice graphing exponential and logistic growth",
            "Calculate doubling time for different growth rates",
            "Draw and interpret different survivorship curves",
            "Apply models to real species (deer, bacteria, elephants)",
            "Work through word problems involving carrying capacity"
        ],
        community_ecology: [
            "Create matrices of species interactions (+/-, +/+, etc.)",
            "Draw niche diagrams showing resource partitioning",
            "Sketch succession sequences for different ecosystems",
            "Research local keystone species examples",
            "Make concept maps connecting interactions to community structure"
        ],
        biodiversity: [
            "Practice calculating diversity indices with sample data",
            "Compare diversity of different local habitats",
            "Create maps of biodiversity hotspots",
            "Research threats and conservation for specific regions",
            "Analyze relationships between diversity and ecosystem function"
        ],
        ecosystem_services: [
            "Categorize local ecosystem services",
            "Research economic valuations of ecosystems",
            "Create case studies of ecosystem service loss",
            "Connect services to conservation priorities",
            "Evaluate trade-offs in land use decisions"
        ]
    };

    return studyTipsDatabase[this.currentProblem.type] || [
        "Review material regularly with active recall",
        "Create visual aids and diagrams",
        "Practice explaining concepts to others",
        "Relate ecological concepts to local ecosystems and current events"
    ];
}

validateEcosystemContent(content) {
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
        content.fundamentalConcepts ||
        content.majorProcesses ||
        content.speciesInteractions ||
        content.measuringDiversity;

    if (!hasSubstantiveContent) {
        validationResults.warnings.push("Limited substantive content");
        validationResults.suggestions.push("Consider adding more detailed information");
    }

    // Check for real-world connections
    if (!content.applications && !content.realWorldApplications) {
        validationResults.suggestions.push("Consider adding real-world applications");
    }

    return validationResults;
}

calculateEcosystemContentCompleteness() {
    if (!this.currentContent) return 0;

    let score = 0;
    const maxScore = 10;

    // Award points for different content aspects
    if (this.currentContent.topic) score += 1;
    if (this.currentContent.summary) score += 1;
    if (this.currentContent.keyTakeaways) score += 1;
    if (this.currentContent.applications || this.currentContent.realWorldApplications) score += 1;
    if (this.currentContent.commonMisconceptions) score += 1;
    
    // Main content structures
    const hasMainContent = 
        this.currentContent.fundamentalConcepts ||
        this.currentContent.majorProcesses ||
        this.currentContent.speciesInteractions;
    if (hasMainContent) score += 3;

    // Additional depth
    if (this.currentContent.humanImpact || this.currentContent.threats) score += 1;
    if (this.currentContent.contextualScenarios) score += 1;

    return Math.round((score / maxScore) * 100);
}

getEcosystemContentQualityMetrics() {
    return {
        completeness: this.calculateEcosystemContentCompleteness(),
        hasExamples: !!(this.currentContent?.examples || this.currentContent?.realWorldExamples),
        hasApplications: !!(this.currentContent?.applications || this.currentContent?.realWorldApplications),
        hasContextualScenarios: !!this.currentContent?.contextualScenarios,
        hasTakeaways: !!this.currentContent?.keyTakeaways,
        detailLevel: this.explanationLevel,
        includesVisualizations: this.includeVisualizations,
        includesMisconceptions: this.includeCommonMisconceptions,
        includesExperiments: this.includeExperiments,
        adaptiveDifficulty: this.adaptiveDifficulty,
        metacognitiveSupport: this.metacognitiveSupport
    };
}

generateEcosystemContentSummary() {
    if (!this.currentContent) return null;

    const summary = {
        topic: this.currentContent.topic,
        category: this.currentContent.category,
        summary: this.currentContent.summary,
        keyPoints: this.currentContent.keyTakeaways || [],
        coverage: {},
        difficulty: this.currentProblem?.difficulty
    };

    // Track coverage
    if (this.currentContent.fundamentalConcepts) {
        summary.coverage.concepts = true;
    }

    if (this.currentContent.majorProcesses || this.currentContent.processes) {
        summary.coverage.processes = true;
    }

    if (this.currentContent.speciesInteractions) {
        summary.coverage.interactions = true;
    }

    if (this.currentContent.applications || this.currentContent.realWorldApplications) {
        summary.coverage.applications = true;
    }

    return summary;
}

assessEcosystemContentDifficulty() {
    if (!this.currentContent) return 'unknown';

    let difficultyScore = 0;

    // Topic-based difficulty
    const basicTopics = ['energy_flow'];
    const intermediateTopics = ['nutrient_cycling', 'population_ecology', 'biodiversity'];
    const advancedTopics = ['community_ecology', 'ecosystem_services'];

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

formatKey(key) {
    return key
        .replace(/_/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
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

// ========================================
// WORKBOOK GENERATION METHODS - ECOSYSTEM
// ========================================

generateEcosystemWorkbook() {
    if (!this.currentContent || !this.currentProblem) return;

    const workbook = this.createWorkbookStructure();
    workbook.title = 'Ecosystem Biology Workbook';

    // Start diagram generation in background if needed
    if (this.includeDiagramsInWorkbook) {
        this.diagramsPromise = this.generateEcosystemDiagramDataAsync();
    }

    workbook.sections = [
        this.createProblemSection(),
        this.createContentOverviewSection(),
        this.createDetailedEcosystemContentSection(),
        this.createDiagramsPlaceholderSection(),
        this.createEcosystemProcessesSection(),
        this.createEcosystemComparisonsSection(),
        this.createExamplesApplicationsSection(),
        this.createContextualScenariosWorkbookSection(),
        this.createRelatedExperimentsWorkbookSection(),
        this.createMisconceptionsSection(),
        this.createMetacognitiveWorkbookSection(),
        this.createAssessmentSection()
    ].filter(section => section !== null);

    this.currentWorkbook = workbook;
}

generateEcosystemExperimentWorkbook(experimentContent) {
    const workbook = this.createWorkbookStructure();
    workbook.title = 'Ecosystem Biology Experiment Workbook';

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
                this.ecosystemTopics[topic]?.name || topic,
                this.ecosystemTopics[topic]?.description || ''
            ])
        });
    }

    this.currentWorkbook = workbook;
}

// Async helper that runs in background
async generateEcosystemDiagramDataAsync() {
    if (!this.currentContent) return;

    const { type } = this.currentProblem;

    // Get relevant diagram keys
    const diagramKeys = this.getRelevantEcosystemDiagrams(type);

    this.diagramData = {
        type: type,
        diagrams: diagramKeys,
        renderedImages: [],
        status: 'rendering',
        placeholder: false,
        note: "Ecosystem ecology diagrams"
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
        title: 'Ecosystem Diagrams',
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
        title: 'Ecosystem Diagrams',
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

getRelevantEcosystemDiagrams(topicType) {
    const diagramMap = {
        energy_flow: [
            "foodWeb",
            "foodChain",
            "energyPyramid",
            "trophicLevels",
            "ecosystemStructure"
        ],
        nutrient_cycling: [
            "carbonCycle",
            "nitrogenCycle",
            "phosphorusCycle",
            "waterCycle",
            "nutrientCycling"
        ],
        population_ecology: [
            "populationGrowth",
            "logisticGrowth",
            "carryingCapacity",
            "survivalCurves",
            "agePyramids"
        ],
        community_ecology: [
            "foodWeb",
            "succession",
            "nichePartitioning",
            "speciesInteractions"
        ],
        biodiversity: [
            "biodiversityHotspots",
            "speciesAreaCurve",
            "latitudinalGradient",
            "islandBiogeography"
        ],
        ecosystem_services: [
            "ecosystemServices",
            "humanImpacts",
            "conservationStrategies"
        ]
    };

    return diagramMap[topicType] || [];
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
    console.log('Diagram cache cleared');
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
        title: 'Ecosystem Biology Workbook',
        timestamp: new Date().toISOString(),
        theme: this.theme,
        dimensions: { width: this.width, height: this.height },
        learnerLevel: this.learnerProfile.currentLevel,
        sections: []
    };
}

// ========================================
// SECTION GENERATION METHODS - ECOSYSTEM
// ========================================

createProblemSection() {
    if (!this.currentProblem) return null;

    return {
        title: 'Topic Overview',
        type: 'problem',
        data: [
            ['Topic', this.currentProblem.originalTopic],
            ['Category', this.ecosystemTopics[this.currentProblem.type]?.category || 'Ecosystem Ecology'],
            ['Type', this.currentProblem.type],
            ['Difficulty', this.currentProblem.difficulty],
            ['Prerequisites', this.currentProblem.prerequisites?.join(', ') || 'Basic ecology'],
            ['Relevance', this.getEcosystemTopicRelevance(this.currentProblem.type)]
        ]
    };
}

createContentOverviewSection() {
    if (!this.currentContent) return null;

    const keyPoints = this.extractEcosystemKeyPoints(this.currentContent);

    return {
        title: 'Content Overview',
        type: 'overview',
        data: [
            ['Topic', this.currentContent.topic],
            ['Category', this.currentContent.category],
            ['Summary', this.currentContent.summary],
            ['', ''],
            ['Key Concepts', ''],
            ...keyPoints.map((point, index) => [`  ${index + 1}.`, point])
        ]
    };
}

createDetailedEcosystemContentSection() {
    if (!this.currentContent) return null;

    const section = {
        title: 'Detailed Content',
        type: 'detailed_content',
        subsections: []
    };

    // Add fundamental concepts
    if (this.currentContent.fundamentalConcepts || this.currentContent.fundamentalPrinciples) {
        section.subsections.push(this.createFundamentalsSubsection());
    }

    // Add topic-specific content
    if (this.currentContent.trophicStructure || this.currentContent.trophicLevels) {
        section.subsections.push(this.createTrophicStructureSubsection());
    }

    if (this.currentContent.reservoirs || this.currentContent.majorProcesses) {
        section.subsections.push(this.createProcessesSubsection());
    }

    if (this.currentContent.populationGrowthModels) {
        section.subsections.push(this.createPopulationModelsSubsection());
    }

    if (this.currentContent.speciesInteractions) {
        section.subsections.push(this.createInteractionsSubsection());
    }

    if (this.currentContent.measuringDiversity) {
        section.subsections.push(this.createDiversityMeasurementSubsection());
    }

    return section;
}

createFundamentalsSubsection() {
    const fundamentals = this.currentContent.fundamentalConcepts || this.currentContent.fundamentalPrinciples;
    const data = [];

    Object.entries(fundamentals).forEach(([key, value]) => {
        data.push([this.formatKey(key), '']);
        if (typeof value === 'object' && value !== null) {
            this.flattenObjectToData(value, data, 1);
        } else {
            data.push(['  ', value]);
        }
        data.push(['', '']);
    });

    return {
        title: 'Fundamental Concepts',
        type: 'fundamentals',
        data: data
    };
}

createTrophicStructureSubsection() {
    const structure = this.currentContent.trophicStructure || this.currentContent.trophicLevels;
    const data = [];

    if (structure.trophicLevels) {
        data.push(['Trophic Levels', '']);
        Object.entries(structure.trophicLevels).forEach(([level, info]) => {
            data.push([`  ${this.formatKey(level)}`, '']);
            this.flattenObjectToData(info, data, 2);
            data.push(['', '']);
        });
    }

    return {
        title: 'Trophic Structure',
        type: 'trophic_structure',
        data: data
    };
}

createProcessesSubsection() {
    const data = [];

    if (this.currentContent.reservoirs) {
        data.push(['Reservoirs', '']);
        Object.entries(this.currentContent.reservoirs).forEach(([name, info]) => {
            data.push([`  ${this.formatKey(name)}`, '']);
            this.flattenObjectToData(info, data, 2);
            data.push(['', '']);
        });
    }

    if (this.currentContent.majorProcesses) {
        data.push(['Major Processes', '']);
        Object.entries(this.currentContent.majorProcesses).forEach(([name, info]) => {
            data.push([`  ${this.formatKey(name)}`, '']);
            this.flattenObjectToData(info, data, 2);
            data.push(['', '']);
        });
    }

    return {
        title: 'Ecological Processes',
        type: 'processes',
        data: data
    };
}

createPopulationModelsSubsection() {
    const models = this.currentContent.populationGrowthModels;
    const data = [];

    Object.entries(models).forEach(([modelName, modelInfo]) => {
        data.push([this.formatKey(modelName), '']);
        this.flattenObjectToData(modelInfo, data, 1);
        data.push(['', '']);
    });

    return {
        title: 'Population Growth Models',
        type: 'population_models',
        data: data
    };
}

createInteractionsSubsection() {
    const interactions = this.currentContent.speciesInteractions;
    const data = [];

    Object.entries(interactions).forEach(([type, info]) => {
        if (type === 'overview') {
            data.push(['Overview', info.types || info]);
            data.push(['', '']);
        } else {
            data.push([this.formatKey(type), '']);
            this.flattenObjectToData(info, data, 1);
            data.push(['', '']);
        }
    });

    return {
        title: 'Species Interactions',
        type: 'interactions',
        data: data
    };
}

createDiversityMeasurementSubsection() {
    const measurement = this.currentContent.measuringDiversity;
    const data = [];

    Object.entries(measurement).forEach(([method, info]) => {
        data.push([this.formatKey(method), '']);
        this.flattenObjectToData(info, data, 1);
        data.push(['', '']);
    });

    return {
        title: 'Measuring Biodiversity',
        type: 'diversity_measurement',
        data: data
    };
}

createEcosystemProcessesSection() {
    if (!this.currentContent.majorProcesses && !this.currentContent.processes) return null;

    const processes = this.currentContent.majorProcesses || this.currentContent.processes;
    const data = [];

    Object.entries(processes).forEach(([processName, processInfo]) => {
        data.push([this.formatKey(processName), '']);
        this.flattenObjectToData(processInfo, data, 1);
        data.push(['', '']);
    });

    return {
        title: 'Ecosystem Processes',
        type: 'processes',
        data: data
    };
}

createEcosystemComparisonsSection() {
    if (!this.currentContent.comparison && !this.currentContent.comparisonOfCycles) return null;

    const comparisons = this.currentContent.comparison || this.currentContent.comparisonOfCycles;
    const data = [];

    Object.entries(comparisons).forEach(([aspect, details]) => {
        data.push([this.formatKey(aspect), '']);
        if (typeof details === 'object') {
            this.flattenObjectToData(details, data, 1);
        } else {
            data.push(['  ', details]);
        }
        data.push(['', '']);
    });

    return {
        title: 'Comparisons and Contrasts',
        type: 'comparisons',
        data: data
    };
}

createExamplesApplicationsSection() {
    if (!this.currentContent.applications && !this.currentContent.examples) return null;

    const data = [];

    if (this.currentContent.examples) {
        data.push(['Examples', '']);
        if (Array.isArray(this.currentContent.examples)) {
            this.currentContent.examples.forEach(example => {
                if (typeof example === 'object') {
                    this.flattenObjectToData(example, data, 1);
                } else {
                    data.push(['  •', example]);
                }
            });
        }
        data.push(['', '']);
    }

    if (this.currentContent.applications || this.currentContent.realWorldApplications) {
        data.push(['Real-World Applications', '']);
        const apps = this.currentContent.applications || this.currentContent.realWorldApplications;
        if (Array.isArray(apps)) {
            apps.forEach(app => {
                data.push(['  •', app]);
            });
        } else if (typeof apps === 'object') {
            this.flattenObjectToData(apps, data, 1);
        }
    }

    return {
        title: 'Examples and Applications',
        type: 'examples_applications',
        data: data
    };
}

createContextualScenariosWorkbookSection() {
    if (!this.currentContent.contextualScenarios) return null;

    const data = [];
    
    this.currentContent.contextualScenarios.forEach((scenario, index) => {
        data.push([`Scenario ${index + 1}`, scenario.scenario]);
        data.push(['  Context', scenario.context]);
        data.push(['  Application', scenario.application]);
        data.push(['  Question', scenario.question]);
        data.push(['', '']);
    });

    return {
        title: 'Contextual Scenarios',
        type: 'scenarios',
        data: data
    };
}

createRelatedExperimentsWorkbookSection() {
    if (!this.currentContent.relatedExperiments || this.currentContent.relatedExperiments.length === 0) {
        return null;
    }

    const data = [
        ['Related Experiments', ''],
        ['', '']
    ];

    this.currentContent.relatedExperiments.forEach((exp, index) => {
        data.push([`${index + 1}. ${exp.name}`, '']);
        data.push(['   Category', exp.category]);
        if (exp.historicalScientist) {
            data.push(['   Scientist', exp.historicalScientist]);
        }
        data.push(['', '']);
    });

    return {
        title: 'Related Experiments',
        type: 'related_experiments',
        data: data
    };
}

createMisconceptionsSection() {
    if (!this.includeCommonMisconceptions || !this.currentContent.commonMisconceptions) {
        return null;
    }

    const data = [
        ['Common Misconceptions', ''],
        ['', '']
    ];

    Object.entries(this.currentContent.commonMisconceptions).forEach(([key, value]) => {
        data.push([`Misconception ${key}:`, '']);
        if (value.wrong) data.push(['  Wrong', value.wrong]);
        if (value.correct) data.push(['  Correct', value.correct]);
        if (value.clarification) data.push(['  Clarification', value.clarification]);
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
    const prompts = this.currentContent.metacognitivePrompts;

    if (prompts.beforeLearning) {
        data.push(['Before Learning', '']);
        prompts.beforeLearning.forEach(prompt => {
            data.push(['  •', prompt]);
        });
        data.push(['', '']);
    }

    if (prompts.duringLearning) {
        data.push(['During Learning', '']);
        prompts.duringLearning.forEach(prompt => {
            data.push(['  •', prompt]);
        });
        data.push(['', '']);
    }

    if (prompts.afterLearning) {
        data.push(['After Learning', '']);
        prompts.afterLearning.forEach(prompt => {
            data.push(['  •', prompt]);
        });
    }

    return {
        title: 'Metacognitive Prompts',
        type: 'metacognitive',
        data: data
    };
}

createAssessmentSection() {
    if (!this.assessmentFeedback) return null;

    const objectives = this.generateEcosystemLearningObjectives();
    const prerequisites = this.identifyEcosystemPrerequisites();
    const studyTips = this.generateEcosystemStudyTips();

    const data = [];

    if (objectives.length > 0) {
        data.push(['Learning Objectives', '']);
        objectives.forEach((obj, index) => {
            data.push([`  ${index + 1}.`, obj]);
        });
        data.push(['', '']);
    }

    if (prerequisites.length > 0) {
        data.push(['Prerequisites', '']);
        prerequisites.forEach(prereq => {
            data.push(['  •', prereq]);
        });
        data.push(['', '']);
    }

    if (studyTips.length > 0) {
        data.push(['Study Tips', '']);
        studyTips.forEach(tip => {
            data.push(['  •', tip]);
        });
    }

    return {
        title: 'Assessment and Study Guide',
        type: 'assessment',
        data: data
    };
}

// Helper method to flatten nested objects into workbook data format
flattenObjectToData(obj, data, indent = 1) {
    const prefix = '  '.repeat(indent);
    
    Object.entries(obj).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            data.push([`${prefix}${this.formatKey(key)}:`, '']);
            value.forEach((item, index) => {
                if (typeof item === 'object' && item !== null) {
                    this.flattenObjectToData(item, data, indent + 1);
                } else {
                    data.push([`${prefix}  ${index + 1}.`, item]);
                }
            });
        } else if (typeof value === 'object' && value !== null) {
            data.push([`${prefix}${this.formatKey(key)}:`, '']);
            this.flattenObjectToData(value, data, indent + 1);
        } else {
            data.push([`${prefix}${this.formatKey(key)}:`, value]);
        }
    });
}

// Export the class
export default EnhancedEcosystemBiologyWorkbook;
