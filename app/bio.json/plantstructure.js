//Enhanced Plant Structure Workbook - Comprehensive Plant Anatomy and Morphology System
import { createCanvas, loadImage } from '@napi-rs/canvas';
import { BiologySvgDiagrams } from '../svg-data.js';
import { BiologyDiagramsRegistry} from '../registry.js';
import { BiologyDiagramsRenderer } from '../renderer.js';
import * as math from 'mathjs';

export class EnhancedPlantStructureWorkbook {
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

        this.botanicalSymbols = this.initializeBotanicalSymbols();
        this.setThemeColors();
        this.initializePlantTopics();
        this.initializePlantLessons();
        this.initializePlantExperiments();
        this.initializeMisconceptionDatabase();
        this.initializeMetacognitivePrompts();
        this.initializeContextualScenarios();
        this.initializeAssessmentRubrics();
    }

    setThemeColors() {
        const themes = {
            botanical: {
                background: '#ffffff',
                gridColor: '#a8b896',
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
                stepBg: '#f1f8e9',
                stepText: '#33691e',
                borderColor: '#66bb6a',
                contentBg: '#f3e5f5',
                contentText: '#4a148c',
                diagramBg: '#e0f2f1',
                structureBg: '#fff9c4',
                experimentBg: '#ffe0b2',
                experimentText: '#e65100',
                rootBg: '#d7ccc8',
                stemBg: '#c5e1a5',
                leafBg: '#a5d6a7',
                flowerBg: '#f8bbd0',
                tissueBg: '#ffccbc'
            },
            forest: {
                background: '#fafafa',
                gridColor: '#8d6e63',
                headerBg: '#3e2723',
                headerText: '#ffffff',
                sectionBg: '#d7ccc8',
                sectionText: '#3e2723',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#efebe9',
                resultText: '#5d4037',
                definitionBg: '#fff8e1',
                definitionText: '#f57f17',
                stepBg: '#f1f8e9',
                stepText: '#33691e',
                borderColor: '#8d6e63',
                contentBg: '#e8f5e9',
                contentText: '#1b5e20',
                diagramBg: '#e0f2f1',
                structureBg: '#fff9c4',
                experimentBg: '#ffe0b2',
                experimentText: '#e65100',
                rootBg: '#bcaaa4',
                stemBg: '#aed581',
                leafBg: '#81c784',
                flowerBg: '#f48fb1',
                tissueBg: '#ffab91'
            }
        };

        this.colors = themes[this.theme] || themes.botanical;
    }

    initializeBotanicalSymbols() {
        return {
            // Plant symbols
            'annual': '⊙',
            'biennial': '⊙⊙',
            'perennial': '♃',
            'male': '♂',
            'female': '♀',
            'hermaphrodite': '⚥',
            
            // Leaf arrangements
            'alternate': '⚘',
            'opposite': '⚘⚘',
            'whorled': '✿',
            
            // Flower parts
            'flower': '❀',
            'petal': '✿',
            
            // Growth patterns
            'upward': '↑',
            'downward': '↓',
            'lateral': '→',
            
            // Greek letters for measurements
            'mu': 'μ',
            'delta': 'Δ',
            
            // Math symbols
            'approximately': '≈',
            'degree': '°',
            'plusminus': '±',
            
            // Chemical formulas common in plant biology
            'H2O': 'H₂O',
            'CO2': 'CO₂',
            'O2': 'O₂',
            'N2': 'N₂',
            
            // Plant hormones
            'auxin': 'IAA',
            'gibberellin': 'GA',
            'cytokinin': 'CK',
            'ethylene': 'C₂H₄',
            'ABA': 'ABA'
        };
    }

    initializePlantTopics() {
        this.plantTopics = {
            root_systems: {
                patterns: [
                    /root|tap.*root|fibrous.*root/i,
                    /root.*hair|absorption|anchorage/i,
                    /root.*system|adventitious/i,
                    /root.*structure|cortex|endodermis/i
                ],
                handler: this.handleRootSystems.bind(this),
                name: 'Root Systems and Structure',
                category: 'plant_organs',
                description: 'Underground organs for absorption, anchorage, and storage',
                difficulty: 'intermediate',
                prerequisites: ['plant_cells', 'plant_tissues']
            },
            
            stem_anatomy: {
                patterns: [
                    /stem|vascular.*bundle/i,
                    /xylem|phloem|cambium/i,
                    /herbaceous|woody|bark/i,
                    /node|internode|bud/i
                ],
                handler: this.handleStemAnatomy.bind(this),
                name: 'Stem Anatomy and Vascular Tissues',
                category: 'plant_organs',
                description: 'Support structures and transport systems in plants',
                difficulty: 'intermediate',
                prerequisites: ['plant_cells', 'plant_tissues']
            },
            
            leaf_structure: {
                patterns: [
                    /leaf|blade|petiole/i,
                    /mesophyll|palisade|spongy/i,
                    /stomata|guard.*cell|transpiration/i,
                    /venation|midrib/i
                ],
                handler: this.handleLeafStructure.bind(this),
                name: 'Leaf Structure and Function',
                category: 'plant_organs',
                description: 'Primary photosynthetic organs and gas exchange',
                difficulty: 'intermediate',
                prerequisites: ['plant_cells', 'photosynthesis_basics']
            },
            
            flower_anatomy: {
                patterns: [
                    /flower|blossom|bloom/i,
                    /sepal|petal|stamen|pistil/i,
                    /pollination|reproduction/i,
                    /ovary|anther|stigma/i
                ],
                handler: this.handleFlowerAnatomy.bind(this),
                name: 'Flower Anatomy and Reproduction',
                category: 'plant_reproduction',
                description: 'Reproductive structures and sexual reproduction in angiosperms',
                difficulty: 'advanced',
                prerequisites: ['plant_life_cycle', 'basic_reproduction']
            },
            
            plant_tissues: {
                patterns: [
                    /meristem|tissue/i,
                    /parenchyma|collenchyma|sclerenchyma/i,
                    /dermal|ground|vascular/i,
                    /epidermis|cortex/i
                ],
                handler: this.handlePlantTissues.bind(this),
                name: 'Plant Tissue Systems',
                category: 'plant_anatomy',
                description: 'Specialized tissue types and their functions',
                difficulty: 'intermediate',
                prerequisites: ['plant_cells', 'cell_differentiation']
            }
        };
    }

    initializePlantLessons() {
        this.lessons = {
            root_systems: {
                title: "Root Systems: Structure, Function, and Adaptations",
                concepts: [
                    "Roots anchor plants and absorb water and minerals",
                    "Two main types: taproot and fibrous root systems",
                    "Root hairs increase surface area for absorption",
                    "Internal structure includes epidermis, cortex, endodermis, and vascular cylinder",
                    "Casparian strip controls water and mineral entry to vascular tissue"
                ],
                theory: "Roots are essential plant organs that provide anchorage, absorb water and nutrients, and often store food. Root structure reflects function, with specialized cells and tissues optimized for absorption and transport.",
                keyDefinitions: {
                    "Taproot System": "One large primary root with smaller lateral roots (e.g., carrots, dandelions)",
                    "Fibrous Root System": "Many thin roots of similar size spreading from stem base (e.g., grasses, corn)",
                    "Root Hair": "Extension of epidermal cell that increases surface area for absorption",
                    "Root Cap": "Protective covering at root tip, secretes mucilage for lubrication",
                    "Cortex": "Ground tissue between epidermis and vascular cylinder, stores starch",
                    "Endodermis": "Innermost layer of cortex with Casparian strip",
                    "Casparian Strip": "Waterproof band of suberin in endodermis that forces selective absorption",
                    "Pericycle": "Cylinder of cells inside endodermis, gives rise to lateral roots",
                    "Adventitious Roots": "Roots arising from stems or leaves (not from primary root)"
                },
                classification: {
                    byOrigin: {
                        primaryRoot: "Develops from radicle of embryo",
                        lateralRoots: "Branch from primary root (pericycle origin)",
                        adventitiousRoots: "Arise from stem or leaves (e.g., prop roots of corn, aerial roots of ivy)"
                    },
                    byType: {
                        taprootSystem: {
                            structure: "Single dominant primary root with lateral branches",
                            examples: "Carrot, radish, dandelion, pine",
                            advantages: "Deep penetration, drought resistance, strong anchorage",
                            typical: "Most dicots"
                        },
                        fibrousRootSystem: {
                            structure: "Many thin roots of similar size",
                            examples: "Grasses, corn, wheat, onion",
                            advantages: "Extensive soil coverage, prevents erosion, efficient absorption in shallow soil",
                            typical: "Most monocots"
                        }
                    },
                    byFunction: {
                        absorptive: "Root hairs for water and mineral uptake",
                        storage: "Enlarged roots storing starch (sweet potato, carrot, turnip)",
                        supportive: "Prop roots (corn, banyan tree), buttress roots (tropical trees)",
                        aerial: "Roots exposed to air for gas exchange (orchids, mangroves)",
                        pneumatophores: "Upward-growing roots in mangroves for oxygen in waterlogged soil"
                    }
                },
                internalStructure: {
                    zones: {
                        rootCap: {
                            location: "Covering root tip",
                            function: "Protection during soil penetration, secretes mucilage",
                            cells: "Statocytes (gravity sensing)"
                        },
                        meristematicZone: {
                            location: "Just behind root cap",
                            function: "Cell division (mitosis), growth in length",
                            cells: "Small, thin-walled, densely packed"
                        },
                        elongationZone: {
                            location: "Behind meristematic zone",
                            function: "Cells elongate, push root through soil",
                            cells: "Vacuoles expand"
                        },
                        maturationZone: {
                            location: "Behind elongation zone",
                            function: "Cells differentiate into specialized tissues",
                            features: "Root hairs appear here"
                        }
                    },
                    tissues: {
                        epidermis: {
                            location: "Outermost layer",
                            function: "Absorption (no cuticle in roots)",
                            specialization: "Root hairs (extensions of epidermal cells)"
                        },
                        cortex: {
                            location: "Between epidermis and endodermis",
                            cells: "Parenchyma cells",
                            function: "Storage (starch), transport to vascular tissue",
                            features: "Large intercellular spaces for air and water movement"
                        },
                        endodermis: {
                            location: "Innermost cortex layer",
                            specialization: "Casparian strip (suberin, lignin)",
                            function: "Regulates what enters vascular tissue (selectively permeable barrier)",
                            significance: "Forces water through cell membranes, not between cells"
                        },
                        pericycle: {
                            location: "Just inside endodermis",
                            function: "Gives rise to lateral roots",
                            feature: "Retains meristematic ability"
                        },
                        vascularCylinder: {
                            xylem: "Water and mineral transport upward, center of root",
                            phloem: "Food transport from leaves, between xylem arms",
                            arrangement: "Primary xylem forms 'X' shape (exarch - develops outside-in)"
                        }
                    }
                },
                adaptations: {
                    desertPlants: "Deep taproots (mesquite reaches 50+ feet deep)",
                    aquaticPlants: "Reduced roots, aerenchyma tissue for buoyancy",
                    epiphytes: "Aerial roots for moisture absorption from air (orchids)",
                    parasites: "Haustoria penetrate host plant vascular tissue (dodder, mistletoe)",
                    storageRoots: "Enlarged for food storage (sweet potato, cassava, beet)"
                },
                applications: [
                    "Agriculture: Understanding root growth for crop yield",
                    "Soil conservation: Root systems prevent erosion",
                    "Horticulture: Root cuttings for plant propagation",
                    "Phytoremediation: Roots absorb pollutants from soil",
                    "Understanding plant responses to drought and flooding"
                ]
            },

            stem_anatomy: {
                title: "Stem Anatomy and Vascular Tissue Organization",
                concepts: [
                    "Stems support leaves and transport materials between roots and leaves",
                    "Vascular bundles contain xylem and phloem",
                    "Monocot and dicot stems have different vascular arrangements",
                    "Secondary growth produces wood and bark in woody plants",
                    "Nodes and internodes define stem structure"
                ],
                theory: "Stems provide structural support and house the plant's transport system. Vascular tissues (xylem and phloem) form continuous pathways from roots to leaves. Stem anatomy varies between plant groups and reflects evolutionary adaptations.",
                keyDefinitions: {
                    "Node": "Point on stem where leaves attach",
                    "Internode": "Stem segment between two nodes",
                    "Bud": "Undeveloped shoot with meristematic tissue (terminal or axillary)",
                    "Vascular Bundle": "Strand of xylem and phloem tissues",
                    "Xylem": "Water-conducting tissue (tracheids, vessel elements)",
                    "Phloem": "Food-conducting tissue (sieve tube elements, companion cells)",
                    "Cambium": "Lateral meristem producing secondary growth",
                    "Vascular Cambium": "Produces secondary xylem (inward) and phloem (outward)",
                    "Cork Cambium": "Produces cork cells forming bark",
                    "Pith": "Central ground tissue in stems (storage)",
                    "Cortex": "Ground tissue between epidermis and vascular tissue"
                },
                stemTypes: {
                    herbaceous: {
                        description: "Soft, green, non-woody stems",
                        growth: "Primary growth only",
                        examples: "Sunflower, tomato, grasses",
                        lifespan: "Usually annual or biennial"
                    },
                    woody: {
                        description: "Hard stems with bark and wood",
                        growth: "Primary and secondary growth",
                        examples: "Trees, shrubs",
                        lifespan: "Perennial",
                        components: {
                            bark: "Cork (outer) + phloem (inner)",
                            wood: "Secondary xylem",
                            annualRings: "Growth rings visible in cross-section"
                        }
                    }
                },
                vascularArrangement: {
                    herbaceousDicot: {
                        pattern: "Vascular bundles arranged in ring",
                        bundleStructure: "Xylem (inside) and phloem (outside)",
                        cambium: "Present between xylem and phloem",
                        cortex: "Well-developed outside vascular ring",
                        pith: "Central, often large"
                    },
                    monocot: {
                        pattern: "Vascular bundles scattered throughout ground tissue",
                        bundleStructure: "Closed (no cambium between xylem and phloem)",
                        cortex: "Not clearly distinguished from pith",
                        secondaryGrowth: "Absent (no vascular cambium)",
                        examples: "Corn, palm, bamboo"
                    },
                    woodyDicot: {
                        primary: "Ring of vascular bundles (young stem)",
                        secondary: "Continuous vascular cambium produces wood (xylem) and inner bark (phloem)",
                        annualRings: {
                            springWood: "Large, thin-walled xylem cells (rapid growth)",
                            summerWood: "Smaller, thick-walled cells (slower growth)",
                            counting: "One light + one dark ring = one year"
                        },
                        sapwood: "Outer xylem, functional in transport",
                        heartwood: "Inner xylem, non-functional, provides strength (darker)"
                    }
                },
                vascularTissues: {
                    xylem: {
                        function: "Water and mineral transport (roots → leaves)",
                        direction: "Upward (unidirectional)",
                        mechanism: "Cohesion-tension theory, root pressure",
                        cellTypes: {
                            tracheids: "Long, tapered cells with pits (all vascular plants)",
                            vesselElements: "Wider, shorter, perforated end walls (angiosperms)",
                            fibers: "Support",
                            parenchyma: "Storage"
                        },
                        characteristics: "Dead at maturity, lignified cell walls"
                    },
                    phloem: {
                        function: "Sugar and organic compound transport (source → sink)",
                        direction: "Bidirectional (up or down as needed)",
                        mechanism: "Pressure-flow hypothesis",
                        cellTypes: {
                            sieveTubeElements: "Main conducting cells, sieve plates at ends",
                            companionCells: "Metabolic support for sieve tubes (connected by plasmodesmata)",
                            fibers: "Support",
                            parenchyma: "Storage"
                        },
                        characteristics: "Living at maturity, no nucleus in sieve tube elements"
                    },
                    cambium: {
                        vascularCambium: {
                            location: "Between xylem and phloem",
                            activity: "Produces secondary xylem (inward) and secondary phloem (outward)",
                            result: "Increase in stem diameter (girth)",
                            season: "Active in growing season, dormant in winter"
                        },
                        corkCambium: {
                            location: "In outer cortex or phloem",
                            activity: "Produces cork cells (outward) and phelloderm (inward)",
                            result: "Protective bark layer",
                            feature: "Cork cells are dead, waxy (suberin), waterproof"
                        }
                    }
                },
                secondaryGrowth: {
                    process: [
                        "Vascular cambium forms continuous cylinder",
                        "Divides periclinally (parallel to surface)",
                        "Produces secondary xylem (wood) inward",
                        "Produces secondary phloem (inner bark) outward",
                        "Cork cambium forms in outer tissues",
                        "Produces cork (outer bark) outward",
                        "Epidermis and cortex slough off as stem grows",
                        "Bark = all tissues outside vascular cambium (cork + phloem)"
                    ],
                    woodAnatomy: {
                        composition: "Secondary xylem",
                        springWood: "Formed early in growing season, large cells, light-colored",
                        summerWood: "Formed late in season, small cells, dark-colored",
                        annualRing: "One spring + summer wood layer = one year of growth",
                        sapwood: "Outer, functional xylem (water transport)",
                        heartwood: "Inner, non-functional xylem (support, darker due to deposits)"
                    }
                },
                stemModifications: {
                    underground: {
                        rhizome: "Horizontal stem (iris, ginger)",
                        tuber: "Enlarged tip of rhizome (potato - eyes are buds)",
                        corm: "Short, vertical, fleshy stem (gladiolus, crocus)",
                        bulb: "Short stem with fleshy leaves (onion, tulip - technically leaf bases)"
                    },
                    aboveground: {
                        stolon: "Horizontal stem growing along ground (strawberry, spider plant)",
                        tendril: "Slender, coiling stem for climbing (grape, pumpkin)",
                        thorn: "Sharp, pointed stem for protection (hawthorn, some modified branches)",
                        cladophyll: "Flattened, leaf-like stem (asparagus, prickly pear cactus)"
                    }
                },
                comparison: {
                    monocotVsDicot: {
                        vascularBundles: "Scattered vs. Ring arrangement",
                        cambium: "Absent vs. Present",
                        secondaryGrowth: "No vs. Yes",
                        pith: "Indistinct vs. Well-defined"
                    },
                    xylemVsPhloem: {
                        direction: "Unidirectional (up) vs. Bidirectional",
                        cells: "Dead vs. Living",
                        contents: "Water + minerals vs. Sugars + organics",
                        cellWalls: "Lignified vs. Cellulose"
                    }
                },
                applications: [
                    "Forestry: Understanding wood formation and tree growth",
                    "Dendrochronology: Dating historical events using tree rings",
                    "Horticulture: Grafting techniques (matching cambium layers)",
                    "Plant propagation: Stem cuttings",
                    "Understanding plant responses to environmental stress"
                ]
            },

            leaf_structure: {
                title: "Leaf Structure and Photosynthetic Adaptations",
                concepts: [
                    "Leaves are primary sites of photosynthesis and gas exchange",
                    "Mesophyll tissue contains chloroplasts for photosynthesis",
                    "Stomata regulate gas exchange and water loss",
                    "Vascular bundles (veins) transport water and sugars",
                    "Leaf structure reflects environmental adaptations"
                ],
                theory: "Leaves are optimized for capturing light energy and conducting photosynthesis while minimizing water loss. Internal anatomy and external morphology reflect adaptations to diverse environments.",
                keyDefinitions: {
                    "Blade": "Flattened, broad portion of leaf (lamina)",
                    "Petiole": "Stalk connecting blade to stem",
                    "Stipules": "Small appendages at base of petiole (if present)",
                    "Midrib": "Central, prominent vein",
                    "Veins": "Vascular bundles visible in leaf",
                    "Mesophyll": "Internal photosynthetic tissue",
                    "Palisade Mesophyll": "Column-like cells beneath upper epidermis, most chloroplasts",
                    "Spongy Mesophyll": "Loosely arranged cells, air spaces for gas exchange",
                    "Stomata": "Pores for gas exchange (CO₂ in, O₂ and water vapor out)",
                    "Guard Cells": "Pair of cells surrounding stoma, control opening/closing",
                    "Cuticle": "Waxy layer on epidermis, reduces water loss"
                },
                externalMorphology: {
                    parts: {
                        blade: "Photosynthetic surface",
                        petiole: "Positions blade for light capture, allows movement",
                        stipules: "Protect young leaves, sometimes photosynthetic or modified"
                    },
                    shapes: "Ovate, lanceolate, cordate, linear, palmate, etc.",
                    margins: "Entire (smooth), serrate (saw-toothed), lobed, dentate",
                    venation: {
                        parallel: "Veins run parallel (monocots - grasses, corn, lily)",
                        netted: {
                            pinnate: "Branching from midrib like feather (dicots - oak, apple)",
                            palmate: "Veins radiate from base (maple, grape)"
                        }
                    },
                    arrangement: {
                        alternate: "One leaf per node, staggered",
                        opposite: "Two leaves per node, across from each other",
                        whorled: "Three or more leaves per node"
                    },
                    types: {
                        simple: "Single blade",
                        compound: "Blade divided into leaflets (pinnate or palmate)"
                    }
                },
                internalAnatomy: {
                    upperEpidermis: {
                        location: "Upper surface",
                        function: "Protection, light transmission",
                        cuticle: "Thick waxy layer (reduces water loss)",
                        stomata: "Usually absent or rare (exception: aquatic plants)"
                    },
                    palisadeMesophyll: {
                        location: "Beneath upper epidermis",
                        cells: "Elongated, columnar, tightly packed",
                        chloroplasts: "Numerous (70-80% of leaf chloroplasts)",
                        function: "Primary site of photosynthesis",
                        arrangement: "Perpendicular to leaf surface (maximizes light capture)"
                    },
                    spongyMesophyll: {
                        location: "Above lower epidermis",
                        cells: "Irregular shape, loosely arranged",
                        airSpaces: "Large intercellular spaces (30-50% of tissue volume)",
                        chloroplasts: "Fewer than palisade",
                        function: "Gas exchange (connects stomata to palisade), some photosynthesis"
                    },
                    lowerEpidermis: {
                        location: "Lower surface",
                        function: "Protection, gas exchange",
                        cuticle: "Thinner than upper",
                        stomata: "Numerous (most gas exchange occurs here)"
                    },
                    veins: {
                        composition: "Xylem (top) + phloem (bottom) + bundle sheath cells",
                        xylem: "Brings water and minerals from roots",
                        phloem: "Exports sugars produced in photosynthesis",
                        bundleSheath: "Surrounds vascular tissue, may contain chloroplasts (C4 plants)",
                        support: "Sclerenchyma fibers provide structural support"
                    }
                },
                stomata: {
                    structure: {
                        guardCells: "Two kidney-shaped cells surrounding pore",
                        stoma: "Opening between guard cells",
                        subsidiaryCell: "Cells adjacent to guard cells (sometimes present)"
                    },
                    location: "Mostly on lower epidermis (reduces water loss)",
                    density: "Varies: 100-600 per mm² depending on species and environment",
                    function: [
                        "CO₂ uptake for photosynthesis",
                        "O₂ release from photosynthesis",
                        "Water vapor loss (transpiration)"
                    ],
                    mechanism: {
                        opening: [
                            "Light stimulates proton pumps in guard cells",
                            "K⁺ and Cl⁻ accumulate in guard cells",
                            "Water enters by osmosis",
                            "Guard cells swell and curve, opening pore"
                        ],
                        closing: [
                            "Dark or water stress",
                            "K⁺ and Cl⁻ leave guard cells",
                            "Water exits by osmosis",
                            "Guard cells shrink, pore closes"
                        ]
                    },
                    regulation: "Light, CO₂ concentration, water stress, circadian rhythm, ABA hormone"
                },
                adaptations: {
                    xerophytes: {
                        description: "Desert/dry environment plants",
                        features: [
                            "Thick cuticle",
                            "Reduced leaf size or needles",
                            "Sunken stomata in pits",
                            "Hairs or scales on surface",
                            "CAM photosynthesis (stomata open at night)"
                        ],
                        examples: "Cacti, succulents, pine needles"
                    },
                    hydrophytes: {
                        description: "Aquatic plants",
                        features: [
                            "Thin or no cuticle",
                            "Large air spaces (aerenchyma)",
                            "Stomata on upper surface (if floating)",
                            "Flexible, ribbon-like leaves"
                        ],
                        examples: "Water lily, pondweed, elodea"
                    },
                    shade: {
                        description: "Low light environments",
                        features: [
                            "Larger, thinner leaves (more surface area)",
                            "Single palisade layer",
                            "More chloroplasts per cell",
                            "Lower light compensation point"
                        ]
                    },
                    sun: {
                        description: "High light environments",
                        features: [
                            "Smaller, thicker leaves",
                            "Multiple palisade layers",
                            "Higher photosynthetic capacity"
                        ]
                    }
                },
                modifications: {
                    tendrils: "Climbing support (pea, cucumber)",
                    spines: "Defense (cactus - leaves modified to spines, stem does photosynthesis)",
                    storage: "Fleshy leaves (succulents, onion bulb scales)",
                    traps: "Carnivorous plants (Venus flytrap, pitcher plant)",
                    bracts: "Colorful, petal-like (poinsettia, dogwood)"
                },
                comparison: {
                    monocotVsDicot: {
                        venation: "Parallel vs. Netted",
                        mesophyll: "Less differentiated vs. Distinct palisade and spongy layers"
                    },
                    sunVsShade: {
                        thickness: "Thicker vs. Thinner",
                        palisade: "Multiple layers vs. Single layer",
                        photosynthesis: "Higher capacity vs. Lower capacity"
                    }
                },
                applications: [
                    "Understanding drought tolerance in crops",
                    "Optimizing greenhouse light conditions",
                    "Studying air pollution effects (stomatal damage)",
                    "Plant identification and taxonomy",
                    "Climate change impacts on photosynthesis"
                ]
            },

            flower_anatomy: {
                title: "Flower Anatomy and Sexual Reproduction in Angiosperms",
                concepts: [
                    "Flowers are reproductive structures of angiosperms",
                    "Four whorls: sepals, petals, stamens (male), carpels (female)",
                    "Pollination transfers pollen from anther to stigma",
                    "Double fertilization produces embryo and endosperm",
                    "Flower structure reflects pollination syndrome"
                ],
                theory: "Flowers are specialized shoots adapted for sexual reproduction. Their diverse forms reflect co-evolution with pollinators and reproductive strategies.",
                keyDefinitions: {
                    "Flower": "Reproductive shoot with modified leaves",
                    "Sepal": "Outermost whorl, usually green, protective (collectively: calyx)",
                    "Petal": "Second whorl, often colorful, attracts pollinators (collectively: corolla)",
                    "Perianth": "Calyx + corolla together",
                    "Stamen": "Male reproductive structure (anther + filament)",
                    "Anther": "Pollen-producing structure",
                    "Filament": "Stalk supporting anther",
                    "Carpel (Pistil)": "Female reproductive structure (stigma, style, ovary)",
                    "Stigma": "Tip of carpel, receives pollen",
                    "Style": "Stalk connecting stigma to ovary",
                    "Ovary": "Enlarged base containing ovules",
                    "Ovule": "Structure containing female gametophyte, becomes seed",
                    "Receptacle": "Thickened stem tip bearing flower parts"
                },
                flowerStructure: {
                    whorls: {
                        first: {
                            name: "Calyx (sepals)",
                            function: "Protect flower bud",
                            typical: "Green, leaf-like",
                            number: "Usually 3-5"
                        },
                        second: {
                            name: "Corolla (petals)",
                            function: "Attract pollinators",
                            typical: "Colorful, scented",
                            number: "Usually 3-5 (monocots in 3s, dicots in 4s or 5s)"
                        },
                        third: {
                            name: "Androecium (stamens)",
                            function: "Produce pollen (male gametes)",
                            parts: "Anther (pollen sacs) + filament",
                            number: "Variable"
                        },
                        fourth: {
                            name: "Gynoecium (carpels/pistil)",
                            function: "Produce ovules (female gametes)",
                            parts: "Stigma + style + ovary (containing ovules)",
                            number: "One or more carpels (may be fused)"
                        }
                    },
                    completeness: {
                        complete: "All four whorls present (rose, lily, tomato)",
                        incomplete: "One or more whorls missing (grasses lack petals)"
                    },
                    sexuality: {
                        perfect: "Both stamens and carpels present (hermaphrodite)",
                        imperfect: {
                            staminate: "Only stamens (male flower)",
                            pistillate: "Only carpels (female flower)"
                        },
                        monoecious: "Separate male and female flowers on same plant (corn, oak)",
                        dioecious: "Male and female flowers on different plants (holly, willow, kiwi)"
                    },
                    symmetry: {
                        radial: "Actinomorphic - multiple planes of symmetry (rose, lily)",
                        bilateral: "Zygomorphic - one plane of symmetry (orchid, snapdragon, pea)"
                    }
                },
                pollenDevelopment: {
                    location: "Anther (microsporangium)",
                    process: [
                        "Diploid microsporocyte (2n) undergoes meiosis",
                        "Produces four haploid microspores (n)",
                        "Each microspore divides by mitosis",
                        "Forms pollen grain with two cells:",
                        "  - Generative cell (will form sperm)",
                        "  - Tube cell (forms pollen tube)"
                    ],
                    maturation: "Anther dehisces (opens) to release pollen"
                },
                ovuleDevelopment: {
                    location: "Ovary (megasporangium within ovule)",
                    process: [
                        "Diploid megasporocyte (2n) undergoes meiosis",
                        "Produces four haploid megaspores (n)",
                        "Three degenerate, one survives",
                        "Surviving megaspore divides by mitosis (3 times)",
                        "Forms embryo sac (female gametophyte) with 8 nuclei:",
                        "  - Egg cell (1)",
                        "  - Synergids (2) - help guide pollen tube",
                        "  - Polar nuclei (2) - center of sac",
                        "  - Antipodal cells (3) - opposite end"
                    ]
                },
                pollination: {
                    definition: "Transfer of pollen from anther to stigma",
                    types: {
                        selfPollination: "Pollen to stigma of same flower or same plant",
                        crossPollination: "Pollen to stigma of different plant (increases genetic diversity)"
                    },
                    vectors: {
                        wind: {
                            flowers: "Small, inconspicuous petals, no scent",
                            pollen: "Light, abundant, smooth",
                            stigma: "Feathery, large surface area",
                            examples: "Grasses, corn, oak, pine"
                        },
                        insects: {
                            flowers: "Bright colors, nectar, scent, landing platform",
                            pollen: "Sticky, sculptured surface",
                            examples: "Roses, sunflowers, orchids (bees, butterflies, beetles)"
                        },
                        birds: {
                            flowers: "Red/orange/yellow, tubular, no scent (birds have poor smell), copious nectar",
                            examples: "Fuchsia, trumpet vine (hummingbirds)"
                        },
                        bats: {
                            flowers: "White/pale, strong fruity scent, open at night",
                            examples: "Agave, some cacti"
                        },
                        water: {
                            pollen: "Waterborne",
                            examples: "Eelgrass, some pondweeds"
                        }
                    }
                },
                doubleFertilization: {
                    unique: "Characteristic feature of angiosperms",
                    process: [
                        "Pollen grain lands on stigma",
                        "Germinates, forms pollen tube",
                        "Tube grows down style to ovary, guided by synergids",
                        "Generative cell divides → two sperm cells",
                        "Pollen tube enters ovule through micropyle",
                        "FERTILIZATION 1: Sperm (n) + egg (n) → zygote (2n) → embryo",
                        "FERTILIZATION 2: Sperm (n) + 2 polar nuclei (n+n) → endosperm (3n)",
                        "Endosperm nourishes developing embryo",
                        "Ovule develops into seed",
                        "Ovary develops into fruit"
                    ]
                },
                seedAndFruitDevelopment: {
                    seed: {
                        from: "Ovule",
                        parts: [
                            "Embryo (2n) - young plant",
                            "Endosperm (3n) - food storage (monocots) or absorbed by cotyledons (dicots)",
                            "Seed coat - protective covering (from ovule integuments)"
                        ]
                    },
                    fruit: {
                        from: "Ovary (and sometimes other flower parts)",
                        function: "Protect seeds, aid dispersal",
                        types: {
                            simple: "From one ovary (tomato, peach)",
                            aggregate: "From many ovaries of one flower (raspberry, strawberry)",
                            multiple: "From ovaries of multiple flowers (pineapple, fig)",
                            accessory: "Includes non-ovary tissue (apple - from receptacle)"
                        },
                        classification: {
                            fleshy: "Soft, often edible (berries, drupes)",
                            dry: {
                                dehiscent: "Split open (legume, follicle, capsule)",
                                indehiscent: "Don't split (achene, nut, caryopsis)"
                            }
                        }
                    }
                },
                adaptations: {
                    preventSelfPollination: [
                        "Temporal separation (anthers and stigma mature at different times)",
                        "Spatial separation (different heights in flower)",
                        "Self-incompatibility (genetic mechanisms reject self-pollen)"
                    ],
                    pollinatorSpecificity: "Flower color, shape, scent, nectar guide evolution with pollinators"
                },
                applications: [
                    "Agriculture: Understanding pollination for crop production",
                    "Horticulture: Breeding programs, hybrid seed production",
                    "Conservation: Protecting pollinator species",
                    "Biotechnology: Genetic modification of crops",
                    "Understanding co-evolution of plants and pollinators"
                ]
            },

            plant_tissues: {
                title: "Plant Tissue Systems: Organization and Function",
                concepts: [
                    "Three tissue systems: dermal, ground, vascular",
                    "Meristems produce new cells for growth",
                    "Simple tissues have one cell type; complex tissues have multiple",
                    "Dermal tissue protects; ground tissue fills; vascular tissue transports",
                    "Tissue types reflect specialization and division of labor"
                ],
                theory: "Plant tissues are groups of cells with similar structure and function. Organization into tissue systems allows efficient division of labor in plant bodies.",
                keyDefinitions: {
                    "Tissue": "Group of cells with similar structure and function",
                    "Meristem": "Tissue of actively dividing cells (undifferentiated)",
                    "Apical Meristem": "At root and shoot tips, primary growth (length)",
                    "Lateral Meristem": "Cylindrical, secondary growth (girth) - vascular cambium, cork cambium",
                    "Intercalary Meristem": "At nodes/bases of leaves (grasses)",
                    "Parenchyma": "Living, thin-walled cells for storage, photosynthesis",
                    "Collenchyma": "Living cells with unevenly thickened walls, flexible support",
                    "Sclerenchyma": "Dead cells with thick, lignified walls, rigid support",
                    "Epidermis": "Outer protective layer",
                    "Periderm": "Secondary dermal tissue (cork) in woody plants"
                },
                tissueSystems: {
                    dermal: {
                        function: "Protection, gas exchange",
                        primary: {
                            name: "Epidermis",
                            location: "Outermost layer of primary plant body",
                            cells: "Tightly packed, cuticle on outer surface",
                            specializations: {
                                guardCells: "Control stomatal opening",
                                trichomes: "Hairs (defense, reduce water loss)",
                                rootHairs: "Increase absorption surface area"
                            }
                        },
                        secondary: {
                            name: "Periderm (bark)",
                            location: "Replaces epidermis in woody plants",
                            components: {
                                cork: "Dead cells with suberin (waterproof)",
                                corkCambium: "Produces cork cells",
                                phelloderm: "Living cells inside cork cambium"
                            }
                        }
                    },
                    ground: {
                        function: "Storage, photosynthesis, support",
                        location: "Between dermal and vascular tissues",
                        cortex: "Outside vascular tissue",
                        pith: "Inside vascular tissue (stems)",
                        tissues: {
                            parenchyma: {
                                cells: "Living, thin primary walls, large vacuole",
                                function: "Storage (starch, water), photosynthesis (if chloroplasts), wound healing",
                                location: "Throughout plant - cortex, pith, mesophyll, flesh of fruits",
                                features: "Metabolically active, can differentiate into other cell types"
                            },
                            collenchyma: {
                                cells: "Living, unevenly thickened primary walls (cellulose)",
                                function: "Flexible support (young stems, leaf petioles)",
                                location: "Just beneath epidermis in stems, petioles",
                                features: "Elongated cells, can grow as plant elongates"
                            },
                            sclerenchyma: {
                                cells: "Dead at maturity, thick secondary walls (lignin)",
                                function: "Rigid support, protection",
                                types: {
                                    fibers: "Long, slender (hemp, flax, jute fibers)",
                                    sclereids: "Variable shape, shorter (stone cells in pear, nut shells)"
                                },
                                location: "Seed coats, nutshells, vascular tissue"
                            }
                        }
                    },
                    vascular: {
                        function: "Transport water, minerals, sugars",
                        location: "Throughout plant as continuous system",
                        components: {
                            xylem: {
                                function: "Water and mineral transport (roots → leaves)",
                                cells: {
                                    tracheids: "Long, tapered, pits in walls (all vascular plants)",
                                    vesselElements: "Wider, shorter, perforated end walls forming vessel (angiosperms)",
                                    fibers: "Support",
                                    parenchyma: "Storage"
                                },
                                characteristics: "Dead at maturity, lignified walls"
                            },
                            phloem: {
                                function: "Sugar transport (source → sink, typically leaves → roots/fruits)",
                                cells: {
                                    sieveTubeElements: "Living, no nucleus, sieve plates at ends (angiosperms)",
                                    sieveCells: "Living (gymnosperms)",
                                    companionCells: "Metabolic support for sieve tubes (connected by plasmodesmata)",
                                    fibers: "Support",
                                    parenchyma: "Storage"
                                },
                                characteristics: "Living, cellulose walls"
                            }
                        }
                    }
                },
                meristems: {
                    apical: {
                        location: "Root and shoot tips",
                        function: "Primary growth (increase in length)",
                        origin: "Present in embryo, persist throughout plant life",
                        organization: {
                            shootApical: "Produces leaves, stems, flowers",
                            rootApical: "Protected by root cap, produces root tissues"
                        }
                    },
                    lateral: {
                        vascularCambium: {
                            location: "Between xylem and phloem",
                            function: "Produces secondary xylem (wood) inward, secondary phloem outward",
                            result: "Increase in stem/root diameter"
                        },
                        corkCambium: {
                            location: "Outer cortex or phloem",
                            function: "Produces cork (bark)",
                            result: "Replaces epidermis in woody plants"
                        }
                    },
                    intercalary: {
                        location: "Base of leaves, nodes (monocots, especially grasses)",
                        function: "Growth in length even after tip is cut (why mowing doesn't kill grass)",
                        example: "Grasses can regrow after grazing"
                    }
                },
                cellTypes: {
                    simple: "One cell type (parenchyma, collenchyma, sclerenchyma)",
                    complex: "Multiple cell types (xylem, phloem, epidermis)"
                },
                comparison: {
                    parenchymaVsSclerenchyma: {
                        walls: "Thin, primary vs. Thick, secondary (lignified)",
                        living: "Yes vs. No (at maturity)",
                        function: "Storage, photosynthesis vs. Support"
                    },
                    xylemVsPhloem: {
                        cells: "Dead vs. Living",
                        contents: "Water + minerals vs. Sugars + organics",
                        direction: "Unidirectional (up) vs. Bidirectional"
                    },
                    primaryVsSecondaryGrowth: {
                        meristem: "Apical vs. Lateral",
                        direction: "Length vs. Girth",
                        plants: "All vascular plants vs. Woody plants only"
                    }
                },
                applications: [
                    "Understanding plant growth and development",
                    "Horticulture: Pruning, grafting techniques",
                    "Forestry: Wood quality and formation",
                    "Plant breeding: Improving stem strength, storage capacity",
                    "Biotechnology: Tissue culture and regeneration"
                ]
            }
        };
    }

    initializePlantExperiments() {
        this.plantExperiments = {
            // ========================================
            // EXPERIMENT 1: ROOT STRUCTURE
            // ========================================
            
            von_sachs_root_zones: {
                name: "Von Sachs' Root Growth Zones - Demonstrating Differential Growth",
                relatedTopics: ['root_systems', 'plant_tissues'],
                category: 'plant_anatomy',
                historicalBackground: {
                    scientist: "Julius von Sachs",
                    year: "1865",
                    contribution: "Identified distinct zones of growth in roots through ink-marking experiments",
                    discovery: "Root elongation occurs primarily in a specific zone behind the tip, not throughout the root",
                    context: "Before von Sachs, the mechanism of root growth was poorly understood",
                    significance: "Established foundation for understanding plant growth patterns and meristematic activity",
                    method: "Marked roots with India ink at regular intervals and observed where growth occurred",
                    conclusion: "Growth is concentrated in elongation zone; meristematic zone cells divide but don't elongate much"
                },
                labExperiment: {
                    title: "Demonstrating Root Growth Zones and Measuring Growth Patterns",
                    hypothesis: "If root growth occurs in specific zones, then marking roots at regular intervals will show differential spacing changes, with maximum elongation in the elongation zone behind the root tip",
                    purpose: "Identify and measure the zones of root growth; demonstrate that elongation is localized",
                    background: {
                        rootZones: [
                            "Root cap: Protection, gravity sensing",
                            "Meristematic zone: Cell division (mitosis)",
                            "Elongation zone: Cell growth, main region of lengthening",
                            "Maturation zone: Differentiation, root hairs appear"
                        ],
                        principle: "Cells divide in meristematic zone but elongate in elongation zone",
                        prediction: "Marks in elongation zone will spread apart; marks in maturation zone will not"
                    },
                    variables: {
                        independent: "Location along root (distance from tip)",
                        dependent: "Change in spacing between marks (indicates growth)",
                        controlled: ["Temperature", "Light conditions", "Water availability", "Plant species", "Seedling age"]
                    },
                    materials: [
                        "Seeds with rapid germination (corn, bean, radish, or pea work well)",
                        "Petri dishes or small plastic containers",
                        "Paper towels or germination paper",
                        "Distilled water",
                        "Waterproof fine-tip marker or India ink with fine brush",
                        "Ruler with millimeter markings",
                        "Graph paper",
                        "Tape (to secure paper towels)",
                        "Clear plastic wrap (optional, maintains humidity)",
                        "Light source (if needed)",
                        "Camera (optional, for documentation)"
                    ],
                    safetyPrecautions: [
                        "Handle seeds gently to avoid damage",
                        "Keep work area clean to prevent fungal contamination",
                        "Wash hands after handling seeds (some may be treated with fungicides)",
                        "Use waterproof ink that won't dissolve in water",
                        "Be careful not to damage delicate roots when marking"
                    ],
                    procedure: [
                        "SEED GERMINATION (3-4 days before experiment):",
                        "Soak seeds in water for 4-6 hours to soften seed coat",
                        "Line petri dish or container with moist paper towel",
                        "Place seeds on paper towel, cover with another moist paper towel",
                        "Keep in dark, warm place (20-25°C) until roots are 2-3 cm long",
                        "Check daily and add water to keep paper towels moist (not waterlogged)",
                        "",
                        "ROOT MARKING (Day 0 of observation):",
                        "Select seedlings with straight roots 2-3 cm long",
                        "Gently remove seedling from paper towel (use forceps if needed)",
                        "Place on ruler to measure root length",
                        "Using waterproof marker or India ink with fine brush:",
                        "  Make first mark 1-2 mm from root tip (be very gentle!)",
                        "  Make additional marks every 2 mm along the root (10-12 marks total)",
                        "  Ensure marks are clear, thin lines perpendicular to root axis",
                        "  DO NOT press hard - roots are delicate",
                        "Record initial spacing (should all be 2 mm apart)",
                        "Carefully place marked seedling back on moist paper towel",
                        "Cover with plastic wrap to maintain humidity (leave small opening for air)",
                        "Place in consistent environment (gentle light, room temperature)",
                        "",
                        "OBSERVATIONS:",
                        "Day 0 (immediately after marking): Measure and record position of each mark from root tip",
                        "Day 1 (24 hours later): Re-measure distance of each mark from root tip",
                        "Day 2 (48 hours): Re-measure",
                        "Day 3 (72 hours): Final measurement",
                        "For each measurement:",
                        "  Measure distance from root tip to each mark",
                        "  Measure spacing between consecutive marks",
                        "  Note any root hairs (appear in maturation zone)",
                        "  Record total root length",
                        "  Take photos if possible",
                        "",
                        "DATA COLLECTION:",
                        "Create table with columns: Mark number, Day 0 position, Day 1, Day 2, Day 3",
                        "Calculate spacing between marks for each day",
                        "Calculate change in spacing (Day 3 - Day 0) for each interval"
                    ],
                    expectedResults: {
                        zone1_rootCap: {
                            marks: "Very close to tip (0-1 mm)",
                            spacing: "Little to no change (root cap pushed forward)",
                            explanation: "Root cap is protective, not growing"
                        },
                        zone2_meristematic: {
                            marks: "1-3 mm from tip",
                            spacing: "Slight increase (cells dividing but small)",
                            explanation: "Cell division occurring but cells not yet elongating"
                        },
                        zone3_elongation: {
                            marks: "3-10 mm from tip",
                            spacing: "MAXIMUM increase (marks spread apart significantly)",
                            explanation: "Cells taking up water, expanding vacuoles, elongating",
                            observation: "This is where most root growth occurs!"
                        },
                        zone4_maturation: {
                            marks: ">10 mm from tip",
                            spacing: "No change (spacing remains constant)",
                            explanation: "Cells fully elongated, differentiating, forming root hairs",
                            observation: "Root hairs visible in this zone"
                        }
                    },
                    dataTable: [
                        ["Mark #", "Day 0 (mm from tip)", "Day 1", "Day 2", "Day 3", "Change", "Zone"],
                        ["1 (closest to tip)", "1", "1", "1", "1", "0", "Root cap"],
                        ["2", "3", "4", "5", "6", "+3", "Meristematic"],
                        ["3", "5", "8", "11", "14", "+9", "Elongation"],
                        ["4", "7", "14", "21", "28", "+21", "Elongation"],
                        ["5", "9", "20", "31", "42", "+33", "Elongation"],
                        ["6", "11", "24", "37", "50", "+39", "Elongation"],
                        ["7", "13", "26", "39", "52", "+39", "Late elongation"],
                        ["8", "15", "28", "41", "54", "+39", "Maturation"],
                        ["9", "17", "30", "43", "56", "+39", "Maturation"],
                        ["10", "19", "32", "45", "58", "+39", "Maturation"]
                    ],
                    observations: [
                        "Total root length increases daily",
                        "Marks near tip show minimal movement (pushed forward by growth behind)",
                        "Marks in elongation zone (3-10 mm initially) spread apart dramatically",
                        "Marks beyond 10-12 mm maintain constant spacing",
                        "Root hairs appear in maturation zone where marks don't spread",
                        "Growth rate may vary by species and conditions"
                    ],
                    graphing: {
                        graph1: {
                            type: "Bar graph",
                            xAxis: "Mark number (distance from tip)",
                            yAxis: "Change in spacing (mm)",
                            title: "Root Growth by Zone",
                            expectedPattern: "Peak in elongation zone (marks 3-7), minimal at extremes"
                        },
                        graph2: {
                            type: "Line graph",
                            xAxis: "Time (days)",
                            yAxis: "Distance from tip (mm)",
                            lines: "One line per mark",
                            title: "Mark Position Over Time",
                            expectedPattern: "Marks in elongation zone move away from tip quickly; maturation zone marks move slowly"
                        }
                    },
                    analysis: {
                        questions: [
                            "Which region showed the most elongation? (Elongation zone, 3-10 mm from tip)",
                            "Why don't marks near the tip spread apart? (Root cap protection, meristematic cells dividing)",
                            "Why don't marks far from tip spread apart? (Maturation zone, cells finished elongating)",
                            "Where do root hairs appear? (Maturation zone, where growth has ceased)",
                            "How does this relate to von Sachs' original findings? (Confirms localized growth)"
                        ],
                        molecularBasis: [
                            "Meristematic zone: High mitotic activity, cells rapidly dividing",
                            "Elongation zone: Cells uptake water, vacuoles expand, cell walls stretch",
                            "Maturation zone: Cell walls thicken, differentiation occurs, root hairs form"
                        ]
                    },
                    results: "The elongation zone (3-10 mm from tip) shows maximum spacing increase between marks, confirming that root growth is localized to this specific region. Marks in the maturation zone maintain constant spacing, indicating cells there have completed elongation.",
                    conclusions: [
                        "Root growth is NOT uniform along the entire root",
                        "Elongation is concentrated in a specific zone behind the root tip",
                        "Meristematic zone cells divide but don't elongate significantly",
                        "Maturation zone cells have completed growth and begin differentiation",
                        "Von Sachs' original observations are confirmed by modern experimentation"
                    ],
                    realWorldApplications: [
                        "Understanding how roots penetrate soil",
                        "Optimizing root development in agriculture",
                        "Studying effects of soil compaction on root growth",
                        "Understanding gravitropism (roots grow downward)",
                        "Developing better models of plant growth"
                    ],
                    extensions: [
                        "Compare growth zones in different plant species",
                        "Investigate effect of gravity (horizontal vs vertical orientation)",
                        "Test effect of auxin hormone on elongation zone length",
                        "Study root growth in different soil types or nutrient solutions",
                        "Measure cell size changes along the root using microscopy",
                        "Create time-lapse photography of root growth"
                    ],
                    limitations: [
                        "Marks may affect root growth if applied too heavily",
                        "Difficult to maintain sterile conditions (fungal contamination)",
                        "Individual variation between seedlings",
                        "Environmental factors (temperature, humidity) affect growth rate"
                    ],
                    troubleshooting: [
                        "Roots growing sideways: Use gravity to keep them straight, or pin gently",
                        "Fungal growth: Ensure good air circulation, don't over-water",
                        "Marks smudging: Use waterproof ink, let dry before placing on moist towel",
                        "Uneven growth: Ensure consistent environmental conditions"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 2: STOMATA
            // ========================================
            
            darwin_stomatal_function: {
                name: "Darwin's Stomatal Function Studies - Gas Exchange and Transpiration",
                relatedTopics: ['leaf_structure', 'plant_tissues'],
                category: 'plant_physiology',
                historicalBackground: {
                    scientist: "Charles Darwin (assisted by son Francis Darwin)",
                    year: "1898",
                    publication: "The Power of Movement in Plants",
                    observation: "Stomata open and close in response to light and water availability",
                    contribution: "Demonstrated stomata regulate gas exchange and water loss",
                    context: "Function of stomata was debated - some thought they were simply pores",
                    experiments: [
                        "Covered leaves with various coatings to block stomata",
                        "Measured transpiration rates",
                        "Observed stomatal opening/closing under microscope"
                    ],
                    significance: "Established that stomata are dynamic structures regulating plant-environment interaction",
                    modernConnection: "Led to understanding of guard cell physiology and environmental regulation"
                },
                labExperiment: {
                    title: "Observing Stomata and Measuring Stomatal Density",
                    hypothesis: "If stomata regulate gas exchange, then stomatal density and aperture should vary between leaf surfaces (upper vs. lower) and environmental conditions (sun vs. shade plants)",
                    purpose: "Observe stomatal structure, measure density, and understand their role in gas exchange",
                    background: {
                        stomata: "Pores in leaf epidermis formed by guard cells",
                        function: [
                            "CO₂ uptake for photosynthesis",
                            "O₂ release from photosynthesis",
                            "Water vapor loss (transpiration)"
                        ],
                        distribution: "Usually more abundant on lower leaf surface (reduces water loss)",
                        mechanism: "Guard cells swell when turgid (open stoma), shrink when flaccid (close stoma)"
                    },
                    variables: {
                        independent: "Leaf surface (upper vs. lower), plant type (sun vs. shade), environmental treatment",
                        dependent: "Stomatal density (number per mm²), stomatal aperture (open vs. closed)",
                        controlled: ["Leaf age", "Time of day", "Observation method"]
                    },
                    materials: [
                        "Fresh leaves from different plants (try: bean, geranium, tomato, lettuce, ivy)",
                        "Sun-exposed and shade-grown plants of same species (if available)",
                        "Clear nail polish",
                        "Clear tape",
                        "Microscope slides and coverslips",
                        "Compound light microscope",
                        "Forceps",
                        "Scissors",
                        "Ruler",
                        "Eyepiece reticle or stage micrometer (for calibration)",
                        "Graph paper",
                        "Optional: Camera attachment for microscope"
                    ],
                    safetyPrecautions: [
                        "Handle microscope slides carefully (edges can be sharp)",
                        "Use nail polish in well-ventilated area",
                        "Clean microscope lenses gently with lens paper only",
                        "Handle plant material carefully (some may cause irritation)"
                    ],
                    procedure: [
                        "METHOD 1: NAIL POLISH PEEL TECHNIQUE (Stomatal Imprint):",
                        "Select fresh, healthy leaf",
                        "Apply thin coat of clear nail polish to lower surface",
                        "Paint area about 1 cm² (avoid major veins)",
                        "Let dry completely (5-10 minutes)",
                        "Apply second thin coat and let dry",
                        "Place clear tape over dried nail polish",
                        "Press firmly and smooth out air bubbles",
                        "Carefully peel tape from leaf (nail polish should come with tape)",
                        "Place tape on microscope slide (sticky side down)",
                        "Smooth out to remove wrinkles",
                        "Repeat for upper leaf surface",
                        "Repeat for different plants",
                        "",
                        "METHOD 2: EPIDERMAL PEEL TECHNIQUE (Direct Observation):",
                        "Carefully bend leaf to crack lower epidermis",
                        "Use forceps to peel away thin transparent layer of epidermis",
                        "Place peel in drop of water on slide",
                        "Add coverslip, avoiding air bubbles",
                        "Observe immediately (cells can dry out quickly)",
                        "",
                        "MICROSCOPE OBSERVATION:",
                        "Start with low power (4× or 10× objective) to locate stomata",
                        "Switch to high power (40×) for detailed observation",
                        "Focus on guard cells surrounding stomatal pore",
                        "Observe:",
                        "  - Guard cell shape (kidney-bean or dumbbell shape)",
                        "  - Stomatal pore (opening between guard cells)",
                        "  - Size of aperture (open, partially open, closed)",
                        "  - Surrounding epidermal cells",
                        "  - Subsidiary cells (if present)",
                        "Draw several stomata at high magnification",
                        "",
                        "COUNTING STOMATAL DENSITY:",
                        "Using eyepiece reticle or known field of view diameter:",
                        "  Calculate area of field of view (πr²)",
                        "  Count all stomata in field of view",
                        "  Repeat for at least 5 different fields",
                        "  Calculate average stomata per field",
                        "  Convert to stomata per mm²",
                        "",
                        "COMPARATIVE STUDY:",
                        "Compare upper vs. lower leaf surfaces of same plant",
                        "Compare sun-grown vs. shade-grown plants",
                        "Compare different plant species",
                        "Note differences in density and distribution"
                    ],
                    expectedResults: {
                        lowerVsUpperSurface: {
                            lower: "Higher stomatal density (e.g., 200-400 per mm²)",
                            upper: "Lower or zero stomata (e.g., 0-50 per mm²)",
                            reason: "Reduces water loss (upper surface exposed to sun/heat)"
                        },
                        sunVsShade: {
                            sunPlants: "Higher stomatal density (more photosynthesis, more gas exchange needed)",
                            shadePlants: "Lower stomatal density (less photosynthesis, conserve water)",
                            aperture: "Sun plants may have smaller apertures (reduce water loss in high light)"
                        },
                        species: {
                            xerophytes: "Lower density, sunken stomata, smaller apertures (desert plants)",
                            mesophytes: "Moderate density (temperate plants)",
                            hydrophytes: "High density on upper surface if floating (aquatic plants)"
                        }
                    },
                    dataTable: [
                        ["Plant Species", "Surface", "Stomata Count (per field)", "Field Area (mm²)", "Density (per mm²)"],
                        ["Bean", "Lower", "45", "0.2", "225"],
                        ["Bean", "Upper", "2", "0.2", "10"],
                        ["Geranium", "Lower", "38", "0.2", "190"],
                        ["Geranium", "Upper", "0", "0.2", "0"],
                        ["Ivy (shade)", "Lower", "28", "0.2", "140"],
                        ["Lettuce (sun)", "Lower", "52", "0.2", "260"]
                    ],
                    observations: [
                        "Stomata more numerous on lower leaf surface in most plants",
                        "Guard cells appear kidney-shaped (dicots) or dumbbell-shaped (grasses)",
                        "Stomatal pores vary in size (aperture)",
                        "Epidermal cells have irregular, jigsaw-puzzle shapes",
                        "Some plants have stomata only on lower surface (apple, oak)",
                        "Aquatic plants may have stomata on upper surface only"
                    ],
                    stomatalStructure: {
                        guardCells: {
                            shape: "Kidney-shaped (dicots) or dumbbell (monocots/grasses)",
                            wallThickness: "Thicker on inner side (facing pore), thinner on outer",
                            chloroplasts: "Present (unique among epidermal cells)",
                            mechanism: "Water uptake → turgor pressure → cell swells → pore opens"
                        },
                        pore: {
                            aperture: "Opening between guard cells",
                            size: "3-12 μm length, 0-7 μm width (when open)",
                            regulation: "Opens in light, closes in dark or water stress"
                        }
                    },
                    analysis: {
                        questions: [
                            "Why more stomata on lower surface? (Reduces water loss from sun exposure)",
                            "Why do guard cells have chloroplasts? (Produce ATP for active transport during opening)",
                            "How do guard cells open the pore? (Turgor pressure, cell shape change)",
                            "Why do xerophytes have fewer stomata? (Conserve water in dry environments)",
                            "What happens to photosynthesis if all stomata close? (CO₂ uptake stops, photosynthesis limited)"
                        ],
                        connection_to_darwin: [
                            "Darwin showed stomata actively regulate gas exchange",
                            "Modern understanding confirms stomata respond to environmental cues",
                            "Guard cell mechanism explained by understanding of turgor and osmosis"
                        ]
                    },
                    calculation: {
                        fieldOfView: "If diameter = 0.5 mm, then radius = 0.25 mm",
                        area: "πr² = 3.14 × (0.25)² = 0.196 mm² ≈ 0.2 mm²",
                        density: "If 40 stomata counted, then 40 / 0.2 = 200 stomata per mm²"
                    },
                    results: "Lower leaf surfaces have significantly higher stomatal density than upper surfaces. Sun-adapted plants show higher densities than shade plants. Stomatal structure and distribution reflect adaptation to environmental water availability.",
                    conclusions: [
                        "Stomata are not randomly distributed - they're on lower surface primarily",
                        "Stomatal density reflects plant's environment and water needs",
                        "Guard cells have specialized structure for regulating aperture",
                        "Darwin's observations on stomatal function are confirmed",
                        "Stomata represent trade-off: CO₂ uptake vs. water conservation"
                    ],
                    realWorldApplications: [
                        "Crop breeding: Optimizing stomatal density for water efficiency",
                        "Climate change: Understanding plant responses to drought",
                        "Air pollution: Stomata as entry points for pollutants",
                        "Forensic botany: Identifying plants from leaf fragments",
                        "Understanding plant adaptation to different habitats"
                    ],
                    extensions: [
                        "Measure stomatal aperture changes with light/dark treatment",
                        "Test effect of ABA hormone on stomatal closure",
                        "Compare aquatic vs. terrestrial plants",
                        "Study effect of humidity on stomatal density in grown plants",
                        "Investigate diurnal rhythm of stomatal opening",
                        "Use porometer to measure actual transpiration rates"
                    ],
                    limitations: [
                        "Nail polish method shows only surface structure, not live cells",
                        "Some variation between leaves on same plant",
                        "Difficulty obtaining perfect epidermal peels",
                        "Stomatal aperture may change during preparation"
                    ],
                    troubleshooting: [
                        "Nail polish too thick: Apply thinner coats, let each dry",
                        "Peel tears: Use fresh, turgid leaves, apply polish more carefully",
                        "Can't see stomata: Adjust microscope light, try different magnification",
                        "Bubbles in preparation: Add coverslip slowly, at angle"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 3: VASCULAR TISSUES
            // ========================================
            
            malpighi_plant_circulation: {
                name: "Malpighi's Vascular Tissue Discovery - Demonstrating Xylem and Phloem Function",
                relatedTopics: ['stem_anatomy', 'plant_tissues'],
                category: 'plant_transport',
                historicalBackground: {
                    scientist: "Marcello Malpighi",
                    year: "1671",
                    publication: "Anatome Plantarum",
                    discovery: "First to observe and describe vascular tissues using microscopy",
                    contribution: "Demonstrated that plants have distinct conducting tissues analogous to animal circulatory system",
                    observations: [
                        "Identified vessels in wood (xylem)",
                        "Observed spiral and annular thickenings in vessels",
                        "Described phloem (though didn't understand its function)"
                    ],
                    context: "Before microscopy, plant internal structure was unknown",
                    significance: "Founded plant anatomy as a science; showed plants have organized transport systems",
                    technique: "Used early microscopes to examine thin sections of stems and roots",
                    quote: "Nature, in order to carry out the movement of fluids in plants... has built vessels similar to those in animals"
                },
                labExperiment: {
                    title: "Demonstrating Xylem and Phloem Transport Using Dye Tracers and Ringing",
                    hypothesis: "If xylem transports water upward and phloem transports sugars downward, then: (1) dye in water will move up through xylem and color leaves, (2) removing bark (phloem) will prevent sugar transport to roots while water transport continues",
                    purpose: "Demonstrate directional transport in vascular tissues and distinguish between xylem and phloem function",
                    background: {
                        xylem: "Water and mineral transport from roots to leaves (dead cells, lignified)",
                        phloem: "Sugar transport from leaves to rest of plant (living cells)",
                        location: "Xylem in center (wood), phloem in outer bark (stems)",
                        direction: "Xylem: upward only; Phloem: bidirectional (source to sink)"
                    },
                    variables: {
                        independent: "Treatment type (dye exposure, bark removal)",
                        dependent: "Dye distribution, plant health, tissue affected",
                        controlled: ["Plant species", "Plant age", "Environmental conditions", "Time period"]
                    },
                    materials: [
                        // Part A: Dye Transport
                        "White carnations or celery stalks with leaves (3-4)",
                        "Food coloring (red, blue, green) or eosin Y stain",
                        "Beakers or clear cups (250 mL)",
                        "Water",
                        "Razor blade or sharp knife",
                        "Ruler",
                        "Timer",
                        "Optional: Microscope and slides for cross-sections",
                        // Part B: Bark Ringing
                        "Young woody plants in pots (tomato, sunflower, or small tree saplings) - 3 plants",
                        "Sharp knife",
                        "Grafting tape or parafilm",
                        "Labels",
                        "Balance (for measuring plant mass changes)"
                    ],
                    safetyPrecautions: [
                        "Use sharp blades carefully - cut away from body",
                        "Handle plant material gently",
                        "Food coloring can stain - protect work surface",
                        "Dispose of plant material properly after experiment",
                        "Wash hands after handling plants"
                    ],
                    procedure: [
                        "PART A: XYLEM TRANSPORT (DYE UPTAKE)",
                        "",
                        "PREPARATION:",
                        "Fill three beakers with 100 mL water each",
                        "Add 15-20 drops of different food coloring to each beaker (red, blue, green)",
                        "Label beakers with color and start time",
                        "",
                        "CUTTING STEMS:",
                        "Select fresh white carnations or celery with leaves",
                        "Using sharp blade, make clean diagonal cut at stem base (underwater if possible)",
                        "Diagonal cut increases surface area for absorption",
                        "Cut at least 2 cm from bottom to remove any blocked vessels",
                        "Immediately place cut stem in colored water",
                        "",
                        "OBSERVATION SCHEDULE:",
                        "Time 0: Record initial appearance, photograph",
                        "30 minutes: Check for any color change in petals/leaves",
                        "1 hour: Observe progression",
                        "2 hours: Note extent of color distribution",
                        "4 hours: Photograph results",
                        "24 hours: Final observation and documentation",
                        "",
                        "CROSS-SECTION ANALYSIS:",
                        "After 2-4 hours, remove one stem from dye",
                        "Use razor blade to cut thin cross-sections at different heights:",
                        "  - Base of stem (in dye)",
                        "  - Middle of stem",
                        "  - Just below flower/leaves",
                        "Observe which tissues are colored (indicates dye path)",
                        "Optional: Observe under microscope to see dye in xylem vessels",
                        "",
                        "SPLIT-STEM VARIATION:",
                        "Take one fresh carnation/celery",
                        "Use razor to split stem lengthwise up the middle (5-7 cm up)",
                        "Place each half in different colored water",
                        "Observe if different colors appear in different parts of flower/leaf",
                        "",
                        "PART B: PHLOEM FUNCTION (BARK RINGING EXPERIMENT)",
                        "",
                        "EXPERIMENTAL SETUP:",
                        "Select 3 similar young woody plants (tomato, sunflower, or saplings)",
                        "Label: Control, Complete Ring, Partial Ring",
                        "Water all plants well before starting",
                        "",
                        "TREATMENT APPLICATION:",
                        "PLANT 1 (Control): No treatment",
                        "",
                        "PLANT 2 (Complete Ring - removes phloem):",
                        "Select point on stem about 10 cm from soil",
                        "Using sharp knife, carefully remove ring of bark (outer tissue) 1-2 cm wide",
                        "Cut only through bark (phloem + cork), NOT into wood (xylem)",
                        "Remove bark completely around entire circumference",
                        "Wrap with grafting tape to prevent desiccation",
                        "This removes phloem but leaves xylem intact",
                        "",
                        "PLANT 3 (Partial Ring - control for wounding):",
                        "Remove bark strip on only half the circumference (180°)",
                        "Wrap with tape",
                        "",
                        "OBSERVATIONS (over 2-4 weeks):",
                        "Daily: Check plant health, leaf color, wilting",
                        "Weekly: Measure plant growth (height, new leaves)",
                        "Weekly: Note swelling above ring (if present)",
                        "Weekly: Photograph all plants side-by-side",
                        "Note any differences in:",
                        "  - Leaf appearance (color, size, wilting)",
                        "  - Stem appearance above and below ring",
                        "  - Root growth (if in clear pot or can be gently excavated)",
                        "  - Overall plant vigor"
                    ],
                    expectedResults: {
                        partA_xylemTransport: {
                            timeZero: "Stems white/green, no color",
                            after30min: "Slight color visible in petals/leaves (varies by plant)",
                            after2hours: "Clear color in veins of leaves/petals",
                            after24hours: "Entire flower/leaf may be colored",
                            crossSections: {
                                pattern: "Dye concentrated in ring near outer edge of vascular bundles (xylem location)",
                                observation: "Colored tissue is in center (xylem), not outer bark",
                                microscopic: "Dye visible in xylem vessels, NOT in phloem or other tissues"
                            },
                            splitStem: "Each half of flower shows different color (demonstrates xylem vessels are independent channels)"
                        },
                        partB_phloemRinging: {
                            control: {
                                week1: "Normal growth, healthy leaves",
                                week2: "Continued growth",
                                week4: "Healthy plant, no swelling"
                            },
                            completeRing: {
                                week1: "Leaves remain healthy (xylem still functioning), slight swelling above ring begins",
                                week2: "Pronounced swelling/bulge above ring (sugars accumulating), leaves healthy, roots beginning to starve",
                                week4: "Severe swelling above ring, lower stem/roots may show decline, leaves may yellow (nutrient deficiency from failing roots)",
                                explanation: "Water ascends through xylem (intact), but sugars cannot descend through phloem (removed) → sugars accumulate above ring → roots starve"
                            },
                            partialRing: {
                                observation: "Minimal effects, perhaps slight swelling on ringed side",
                                explanation: "Remaining phloem can transport enough sugars downward"
                            }
                        }
                    },
                    dataTable_partB: [
                        ["Week", "Control Height (cm)", "Control Appearance", "Ringed Height", "Ringed Appearance", "Swelling Above Ring (mm)"],
                        ["0", "15", "Healthy", "15", "Healthy", "0"],
                        ["1", "18", "Healthy", "17", "Healthy", "2"],
                        ["2", "22", "Healthy", "19", "Healthy, swelling visible", "5"],
                        ["3", "26", "Healthy", "20", "Leaves yellowing, large bulge", "12"],
                        ["4", "30", "Healthy", "21", "Severely declining, roots dying", "18"]
                    ],
                    observations: [
                        "Dye moves rapidly upward through xylem (visible in hours)",
                        "Cross-sections show dye only in specific tissues (vascular bundles)",
                        "Split stems demonstrate independent xylem vessels",
                        "Ringed plants show swelling above ring (phloem blockage)",
                        "Ringed plants maintain leaf health initially (xylem still delivers water)",
                        "Over time, ringed plants decline (roots starve without sugars from phloem)"
                    ],
                    analysis: {
                        xylemEvidence: [
                            "Dye appears in leaves/petals (moved upward)",
                            "Cross-sections show dye in center tissues (xylem location)",
                            "Transport occurs even in cut stems (no living cells needed - xylem cells are dead)",
                            "Rapid transport (pulled by transpiration)"
                        ],
                        phloemEvidence: [
                            "Swelling above ring (material accumulating because can't move down)",
                            "Swelling contains sugars (can test with Benedict's or iodine)",
                            "Roots decline when phloem cut (not receiving sugars)",
                            "Xylem intact → water still reaches leaves → leaves stay alive initially"
                        ],
                        connectionToMalpighi: [
                            "Malpighi observed vessel structure in xylem",
                            "Modern experiment demonstrates function of vessels he described",
                            "Ringing experiment proves two separate transport systems exist"
                        ]
                    },
                    results: "Dye experiments demonstrate xylem transports water and dissolved substances upward through dead, lignified vessels. Ringing experiments demonstrate phloem transports sugars downward through living cells, and that xylem and phloem are functionally independent systems.",
                    conclusions: [
                        "Xylem transports water and minerals upward from roots to leaves",
                        "Phloem transports sugars downward from leaves to rest of plant",
                        "Xylem and phloem are separate, independent vascular systems",
                        "Xylem cells are dead (transport continues in cut stems)",
                        "Phloem cells are living (ringing experiment disrupts them)",
                        "Malpighi's anatomical observations corresponded to functional transport systems"
                    ],
                    realWorldApplications: [
                        "Forestry: Girdling (ringing) trees to kill them",
                        "Horticulture: Grafting requires matching vascular cambium",
                        "Agriculture: Understanding nutrient and water transport in crops",
                        "Plant pathology: Vascular diseases block xylem/phloem",
                        "Understanding how herbicides and systemic pesticides move in plants"
                    ],
                    extensions: [
                        "Test effect of environmental factors on dye transport rate (temperature, light)",
                        "Measure actual transpiration rate and relate to dye uptake",
                        "Use radioactive tracers (if available) to track phloem transport",
                        "Examine xylem/phloem anatomy under microscope",
                        "Test which tissues in cross-section contain sugars (iodine test)",
                        "Investigate rate of phloem transport (slower than xylem)",
                        "Study xylem embolism (air bubbles blocking water transport)"
                    ],
                    limitations: [
                        "Dye may not perfectly mimic all substances transported in xylem",
                        "Cut stems may transport differently than intact plants",
                        "Ringing is traumatic and may cause responses beyond phloem disruption",
                        "Individual plant variation affects results"
                    ],
                    troubleshooting: [
                        "Dye not moving: Re-cut stem underwater, ensure fresh cut",
                        "Dye everywhere (not just xylem): May have crushed cells, cut more carefully",
                        "Ringed plant dies quickly: May have cut too deep into xylem, damaged too much",
                        "No swelling in ring: Wait longer, ensure ring is complete around circumference"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 4: TROPISMS
            // ========================================
            
            darwin_phototropism: {
                name: "Darwin's Phototropism Experiments - Discovering Plant Hormones",
                relatedTopics: ['stem_anatomy', 'root_systems'],
                category: 'plant_responses',
                historicalBackground: {
                    scientist: "Charles Darwin and Francis Darwin (father and son)",
                    year: "1880",
                    publication: "The Power of Movement in Plants",
                    discovery: "Light-induced bending (phototropism) is controlled by tip of shoot",
                    experiments: [
                        "Covered shoot tips with opaque caps → no bending toward light",
                        "Covered shoot bases (left tips exposed) → bending occurred",
                        "Cut off tips → no bending",
                        "Illuminated from side → shoots bent toward light"
                    ],
                    conclusion: "Some 'influence' transmitted from tip causes bending in region below tip",
                    significance: "First evidence for plant hormones (later identified as auxin)",
                    quote: "We must therefore conclude that when seedlings are freely exposed to a lateral light some influence is transmitted from the upper to the lower part, causing the latter to bend",
                    laterDiscovery: "Went (1926) isolated auxin; showed it moves from tip and causes cell elongation"
                },
                labExperiment: {
                    title: "Investigating Phototropism and Gravitropism in Seedlings",
                    hypothesis: "If the shoot tip produces a hormone that causes bending, then: (1) removing the tip will prevent phototropic response, (2) covering the tip will prevent light detection, (3) shoots will bend toward unidirectional light source",
                    purpose: "Demonstrate phototropism and gravitropism; replicate Darwin's experiments showing tip control of growth direction",
                    background: {
                        phototropism: "Growth response to light (shoots grow toward light)",
                        gravitropism: "Growth response to gravity (roots down, shoots up)",
                        auxin: "Plant hormone produced in shoot tip, moves to shaded side, causes cell elongation",
                        mechanism: "Unequal auxin distribution → differential growth → bending"
                    },
                    variables: {
                        independent: "Light direction, tip treatment (intact, removed, covered), plant orientation",
                        dependent: "Degree of bending (angle from vertical)",
                        controlled: ["Plant species", "Seedling age", "Light intensity", "Temperature", "Time period"]
                    },
                    materials: [
                        "Fast-growing seeds (oat, corn, sunflower, or radish) - 30-40 seeds",
                        "Petri dishes or small containers for germination",
                        "Potting soil or agar (if available)",
                        "Small pots or containers",
                        "Cardboard boxes (2-3) for creating light chambers",
                        "Light source (lamp or flashlight)",
                        "Aluminum foil",
                        "Black paper or cardboard",
                        "Tape",
                        "Scissors",
                        "Razor blade (for tip removal)",
                        "Ruler or protractor (for measuring angles)",
                        "Camera (for time-lapse if available)",
                        "Graph paper",
                        "Clinostat or rotating platform (optional)"
                    ],
                    safetyPrecautions: [
                        "Use razor blade carefully when removing tips",
                        "Ensure light source doesn't overheat plants",
                        "Handle seedlings gently - they're delicate",
                        "Keep work area clean to prevent fungal contamination"
                    ],
                    procedure: [
                        "SEED GERMINATION (3-5 days before experiment):",
                        "Soak seeds in water for 4-6 hours",
                        "Plant in moist soil or on wet paper towels in petri dishes",
                        "Keep in dark, warm place until shoots are 2-3 cm tall",
                        "Use seedlings when shoots are straight and uniform",
                        "",
                        "EXPERIMENT 1: PHOTOTROPISM - REPLICATING DARWIN",
                        "",
                        "Setup Groups (5-6 seedlings per group):",
                        "GROUP 1 (Control - Intact): No treatment, all-around light",
                        "GROUP 2 (Unidirectional light - Intact): Intact seedlings, light from one side",
                        "GROUP 3 (Tip removed): Remove top 2-3 mm of shoot tip with razor, unidirectional light",
                        "GROUP 4 (Tip covered): Cover tip with aluminum foil cap (2-3 mm), unidirectional light",
                        "GROUP 5 (Base covered): Cover lower part of shoot with foil, leave tip exposed, unidirectional light",
                        "GROUP 6 (All dark): No light (negative control)",
                        "",
                        "LIGHT CHAMBER CONSTRUCTION:",
                        "Use cardboard box as dark chamber",
                        "Cut small opening (5 cm × 5 cm) in one side for light entry",
                        "Place lamp 30 cm from opening (ensure only unidirectional light enters)",
                        "Interior should be dark except for light from opening",
                        "",
                        "TREATMENT APPLICATION:",
                        "GROUP 1: Place in well-lit area (light from all directions)",
                        "GROUPS 2-5: Place in light chamber (unidirectional light)",
                        "GROUP 6: Place in completely dark box",
                        "",
                        "OBSERVATIONS:",
                        "Initial (Time 0): Photograph all groups, note that shoots are vertical",
                        "Every 6-12 hours for 48-72 hours:",
                        "  Photograph each group from side",
                        "  Measure bending angle from vertical using protractor",
                        "  Note: direction of bending, health of seedlings",
                        "Do NOT rotate containers (orientation matters!)",
                        "",
                        "EXPERIMENT 2: GRAVITROPISM",
                        "",
                        "Setup:",
                        "Plant seeds in clear containers with soil OR tape germinated seeds to inside of petri dish lid",
                        "Once shoots are growing upward (2-3 cm), rotate container 90° (shoots now horizontal)",
                        "Keep in dark or uniform light (eliminates phototropism)",
                        "",
                        "Observations (every 6-12 hours for 48 hours):",
                        "Measure angle of shoot tip from horizontal",
                        "Shoots should curve upward (negative gravitropism)",
                        "Roots should curve downward (positive gravitropism)",
                        "",
                        "EXPERIMENT 3: CLINOSTAT (ELIMINATING GRAVITY - Optional)",
                        "",
                        "If rotating platform available:",
                        "Mount seedlings horizontally on slow-rotating clinostat (1-2 rpm)",
                        "Rotation prevents sustained gravity stimulus on any one side",
                        "Expected: Shoots grow straight (no bending) because gravity stimulus is randomized",
                        ""
                    ],
                    expectedResults: {
                        phototropism: {
                            group1_control: {
                                bending: "Minimal or random (light from all directions)",
                                angle: "~0° from vertical"
                            },
                            group2_intact: {
                                bending: "Strong bending TOWARD light",
                                angle: "30-60° toward light after 48 hours",
                                explanation: "Tip senses light, auxin moves to shaded side, cells elongate, shoot bends toward light"
                            },
                            group3_tipRemoved: {
                                bending: "NO bending or minimal",
                                angle: "~0° (stays vertical)",
                                explanation: "Tip removed → no auxin production → no differential growth → no bending",
                                significance: "Confirms Darwin's finding: tip is essential for phototropic response"
                            },
                            group4_tipCovered: {
                                bending: "NO bending",
                                angle: "~0°",
                                explanation: "Tip can't sense light (covered) → no signal → no bending",
                                significance: "Light detection occurs in tip"
                            },
                            group5_baseCovered: {
                                bending: "Bending TOWARD light",
                                angle: "30-60°",
                                explanation: "Tip exposed, senses light → auxin signal sent to base → bending occurs in uncovered elongation zone",
                                significance: "Bending occurs in zone below tip, not in tip itself"
                            },
                            group6_dark: {
                                bending: "No directional bending",
                                growth: "May elongate more (etiolation)",
                                explanation: "No light cue → no directional growth"
                            }
                        },
                        gravitropism: {
                            shoots: {
                                response: "Bend UPWARD (negative gravitropism)",
                                angle: "Return to ~90° (vertical) within 24-48 hours",
                                mechanism: "Gravity causes auxin redistribution to lower side → cells elongate more → upward bending"
                            },
                            roots: {
                                response: "Bend DOWNWARD (positive gravitropism)",
                                angle: "Curve to point downward",
                                mechanism: "Auxin on lower side INHIBITS root cell elongation → upper side grows more → downward bending"
                            }
                        }
                    },
                    dataTable: [
                        ["Group", "Treatment", "0 hr angle", "12 hr", "24 hr", "48 hr", "Direction"],
                        ["1", "Control (all-around light)", "0°", "0°", "0°", "0°", "Vertical"],
                        ["2", "Intact + unidirectional light", "0°", "15°", "35°", "55°", "Toward light"],
                        ["3", "Tip removed + unidirectional", "0°", "0°", "2°", "3°", "Minimal"],
                        ["4", "Tip covered + unidirectional", "0°", "0°", "0°", "0°", "Vertical"],
                        ["5", "Base covered + unidirectional", "0°", "12°", "30°", "50°", "Toward light"],
                        ["6", "Dark", "0°", "0°", "0°", "0°", "Vertical (etiolated)"]
                    ],
                    observations: [
                        "Intact seedlings with unidirectional light bend strongly toward light source",
                        "Removing tip prevents phototropic bending (confirms Darwin)",
                        "Covering tip prevents light detection",
                        "Covering base doesn't prevent bending (bending zone is below tip)",
                        "Shoots bent upward when placed horizontally (gravitropism)",
                        "Roots bent downward when placed horizontally",
                        "Bending occurs over hours, not minutes"
                    ],
                    analysis: {
                        phototropism: {
                            lightDetection: "Occurs in shoot tip (blue light receptors - phototropins)",
                            signalTransduction: "Auxin (IAA) redistributes from illuminated side to shaded side",
                            response: "Auxin stimulates cell elongation on shaded side → differential growth → bending toward light",
                            adaptiveValue: "Maximizes light capture for photosynthesis"
                        },
                        gravitropism: {
                            gravityDetection: "Statoliths (starch-filled plastids) sediment in root cap and shoot cells",
                            signal: "Auxin redistributes to lower side in both shoots and roots",
                            shootResponse: "Auxin stimulates elongation → lower side grows more → upward bending",
                            rootResponse: "Auxin INHIBITS elongation → upper side grows more → downward bending",
                            adaptiveValue: "Shoots grow up (toward light), roots grow down (anchor, absorb water)"
                        },
                        connectionToDarwin: [
                            "Darwin showed tip controls bending (1880)",
                            "Went isolated auxin (1926)",
                            "Cholodny-Went model (1927): Auxin redistribution explains tropisms",
                            "Modern research confirms auxin transport and differential sensitivity"
                        ]
                    },
                    graphing: {
                        graph1: {
                            type: "Line graph",
                            xAxis: "Time (hours)",
                            yAxis: "Angle of bending (degrees from vertical)",
                            lines: "One line per group",
                            expected: "Groups 2 and 5 show increasing angle; Groups 3, 4, 6 stay near 0°"
                        }
                    },
                    results: "Intact seedlings with unidirectional light show strong phototropic bending toward the light source. Removing or covering the tip eliminates this response, confirming that the tip detects light and controls bending in the region below. This replicates Darwin's historic findings and demonstrates the role of auxin in directional growth responses.",
                    conclusions: [
                        "Shoot tip is essential for phototropic response (Darwin's conclusion confirmed)",
                        "Light detection occurs in tip, but bending occurs below tip",
                        "A signal (auxin) must be transmitted from tip to bending zone",
                        "Auxin causes differential cell elongation, resulting in directional growth",
                        "Gravitropism uses similar mechanism with opposite effects in shoots vs. roots",
                        "Tropisms are adaptive responses allowing plants to optimize growth orientation"
                    ],
                    realWorldApplications: [
                        "Agriculture: Understanding crop orientation and spacing",
                        "Horticulture: Controlling plant shape and growth direction",
                        "Space biology: Studying plant growth in microgravity",
                        "Understanding how plants compete for light in dense vegetation",
                        "Designing automated plant growth systems (greenhouses, indoor farms)"
                    ],
                    extensions: [
                        "Test different wavelengths of light (blue most effective for phototropism)",
                        "Measure auxin concentration in illuminated vs. shaded sides (if equipment available)",
                        "Test effect of auxin application on one side of stem",
                        "Investigate phototropism in roots (negative phototropism)",
                        "Study interaction between phototropism and gravitropism",
                        "Create time-lapse video of bending over 48 hours",
                        "Test effect of auxin inhibitors"
                    ],
                    limitations: [
                        "Individual plant variation",
                        "Difficult to precisely control light intensity and direction",
                        "Seedlings may respond to other environmental factors",
                        "Tip removal is traumatic and may affect plant beyond auxin loss"
                    ],
                    troubleshooting: [
                        "No bending: Check light is truly unidirectional, increase time period",
                        "All plants bending: Check for light leaks in dark box",
                        "Plants etiolated (pale, elongated): This is normal in dark, but use fresher seedlings",
                        "Tip removal kills plant: Cut more carefully, ensure sterile blade"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 5: TRANSPIRATION
            // ========================================
            
            hales_transpiration: {
                name: "Hales' Transpiration Experiments - Measuring Water Movement in Plants",
                relatedTopics: ['leaf_structure', 'stem_anatomy'],
                category: 'plant_physiology',
                historicalBackground: {
                    scientist: "Stephen Hales",
                    year: "1727",
                    publication: "Vegetable Staticks",
                    discovery: "Quantitative measurements of water uptake and transpiration in plants",
                    experiments: [
                        "Measured water uptake by plants over time",
                        "Compared water absorbed to water lost from leaves",
                        "Demonstrated 'imbibing force' (now known as transpiration pull)",
                        "Showed plants take up more water than needed for growth (most is transpired)"
                    ],
                    contribution: "First quantitative plant physiology experiments",
                    context: "Before Hales, plant water relations were purely speculative",
                    significance: "Established experimental approach to plant physiology; showed leaves are sites of water loss",
                    innovation: "Designed clever apparatus to measure and contain water loss",
                    quote: "Plants very plentifully perspire... much greater quantities than animals"
                },
                labExperiment: {
                    title: "Measuring Transpiration Rate and Factors Affecting Water Loss",
                    hypothesis: "If transpiration is driven by evaporation from leaves, then: (1) plants will lose water through leaves, (2) environmental factors (light, humidity, wind, temperature) will affect transpiration rate, (3) leaf surface area correlates with water loss",
                    purpose: "Measure transpiration rate; investigate environmental and anatomical factors affecting water loss",
                    background: {
                        transpiration: "Evaporation of water from plant surfaces (mainly leaves through stomata)",
                        function: [
                            "Pulls water and minerals up from roots (transpiration-cohesion-tension)",
                            "Cools plant",
                            "Maintains turgor",
                            "Delivers minerals to leaves"
                        ],
                        pathway: "Soil → roots → xylem → leaves → stomata → atmosphere",
                        rate: "Influenced by light, humidity, temperature, wind, and leaf characteristics"
                    },
                    variables: {
                        independent: "Environmental conditions (light, humidity, wind), plant treatment (leaves present/removed)",
                        dependent: "Volume of water absorbed over time (mL/hour)",
                        controlled: ["Plant species", "Plant size", "Initial water volume", "Container type"]
                    },
                    materials: [
                        // Basic Setup
                        "Leafy plant shoots or small potted plants (4-6) - similar size",
                        "Graduated cylinders or measuring cylinders (25-100 mL)",
                        "Beakers (for water reservoir)",
                        "Plastic tubing or straws",
                        "Waterproof tape or petroleum jelly (seal)",
                        "Ruler",
                        "Timer or stopwatch",
                        "Graph paper",
                        "Marker for labeling",
                        // For different conditions
                        "Lamp (light source)",
                        "Fan (wind simulation)",
                        "Plastic bags (reduce humidity)",
                        "Spray bottle (increase humidity)",
                        "Thermometer",
                        "Scissors",
                        "Vegetable oil or mineral oil (thin layer to prevent evaporation from water surface)"
                    ],
                    safetyPrecautions: [
                        "Handle glass carefully",
                        "Keep electrical equipment (lamp, fan) away from water",
                        "Use fresh plant material",
                        "Clean up water spills immediately"
                    ],
                    procedure: [
                        "APPARATUS ASSEMBLY (POTOMETER/SIMPLE TRANSPIRATION SETUP):",
                        "",
                        "METHOD 1: Simple Water Uptake Measurement:",
                        "Fill graduated cylinder with water to known volume (e.g., 50 mL)",
                        "Select leafy shoot and cut stem underwater (prevents air bubbles)",
                        "Insert stem into cylinder (stem should be submerged)",
                        "Seal around stem with waterproof tape or petroleum jelly (prevent evaporation from opening)",
                        "Add thin layer of vegetable oil on water surface (prevents evaporation from water surface)",
                        "Mark initial water level",
                        "Place in experimental condition",
                        "",
                        "METHOD 2: Potometer (More Accurate):",
                        "Fill entire apparatus (reservoir, tubing, graduated capillary tube) with water",
                        "Cut shoot stem underwater at angle",
                        "Insert into apparatus underwater (no air bubbles!)",
                        "Seal all connections",
                        "Introduce single air bubble into capillary tube",
                        "Measure bubble movement (indicates water uptake)",
                        "",
                        "EXPERIMENTAL GROUPS (4-6 setups):",
                        "",
                        "GROUP 1: CONTROL (Normal Conditions)",
                        "Intact leafy shoot in graduated cylinder",
                        "Indirect light, room temperature, still air",
                        "This is baseline transpiration rate",
                        "",
                        "GROUP 2: HIGH LIGHT",
                        "Intact shoot, place under bright lamp (30 cm away)",
                        "Stomata open more in light → increased transpiration",
                        "",
                        "GROUP 3: DARK",
                        "Intact shoot, cover with dark bag or place in dark cupboard",
                        "Stomata mostly closed → decreased transpiration",
                        "",
                        "GROUP 4: WIND (AIR MOVEMENT)",
                        "Intact shoot, place in front of fan (gentle breeze)",
                        "Removes humid air near leaves → increases transpiration",
                        "",
                        "GROUP 5: HIGH HUMIDITY",
                        "Intact shoot, cover loosely with clear plastic bag (sealed at base)",
                        "Or periodically mist leaves",
                        "Humid air reduces transpiration rate",
                        "",
                        "GROUP 6: REDUCED LEAF AREA",
                        "Remove 50% of leaves before setup",
                        "Less surface area → less transpiration",
                        "",
                        "OPTIONAL GROUP 7: PETROLEUM JELLY ON STOMATA",
                        "Coat lower leaf surface with petroleum jelly (blocks stomata)",
                        "Should dramatically reduce transpiration",
                        "",
                        "MEASUREMENTS:",
                        "Record initial water level (or bubble position) at Time 0",
                        "Record water level every 30 minutes for 3-4 hours",
                        "OR record every hour for 6-8 hours",
                        "Calculate water uptake: Initial volume - Final volume = mL absorbed",
                        "Calculate rate: mL absorbed / time (hours) = mL/hour",
                        "",
                        "ADDITIONAL DATA:",
                        "Count number of leaves on each plant",
                        "Estimate leaf surface area (length × width × 0.7 for most leaves)",
                        "Record environmental conditions (temperature, humidity if available)",
                        "",
                        "END OF EXPERIMENT:",
                        "Remove plants and blot dry",
                        "Calculate transpiration rate normalized by leaf area: (mL/hour) / (leaf area in cm²) = mL/cm²/hour"
                    ],
                    expectedResults: {
                        relativeRates: {
                            control: "Baseline (e.g., 2 mL/hour)",
                            highLight: "2-3× control (stomata open, increased evaporation)",
                            dark: "0.2-0.5× control (stomata mostly closed)",
                            wind: "1.5-2× control (removes humid boundary layer)",
                            highHumidity: "0.5-0.7× control (reduced concentration gradient)",
                            reducedLeaves: "~0.5× control (proportional to remaining leaf area)",
                            blockedStomata: "0.1-0.2× control (most transpiration through stomata)"
                        },
                        patterns: {
                            observation1: "Light greatly increases transpiration (stomatal opening)",
                            observation2: "Wind increases transpiration (removes humid air)",
                            observation3: "Humidity decreases transpiration (reduces driving force)",
                            observation4: "Leaf area correlates with total water loss",
                            observation5: "Blocking stomata dramatically reduces transpiration (confirms pathway)"
                        }
                    },
                    dataTable: [
                        ["Group", "Condition", "Start (mL)", "After 3 hr (mL)", "Water Lost (mL)", "Rate (mL/hr)", "Relative to Control"],
                        ["1", "Control (normal)", "50", "44", "6", "2.0", "1.0 (baseline)"],
                        ["2", "High light", "50", "38", "12", "4.0", "2.0"],
                        ["3", "Dark", "50", "48", "2", "0.67", "0.33"],
                        ["4", "Wind (fan)", "50", "41", "9", "3.0", "1.5"],
                        ["5", "High humidity (bag)", "50", "46", "4", "1.3", "0.65"],
                        ["6", "50% leaves removed", "50", "47", "3", "1.0", "0.5"]
                    ],
                    observations: [
                        "Water level decreases fastest in high light and wind conditions",
                        "Water level barely changes in dark or high humidity",
                        "Removing leaves reduces water uptake proportionally",
                        "Blocking stomata dramatically reduces water loss",
                        "Rate may not be constant (faster in daytime if experiment spans day/night)"
                    ],
                    graphing: {
                        graph1: {
                            type: "Line graph",
                            xAxis: "Time (hours)",
                            yAxis: "Cumulative water absorbed (mL)",
                            lines: "One line per experimental group",
                            expected: "Steeper slopes = faster transpiration (light, wind)"
                        },
                        graph2: {
                            type: "Bar graph",
                            xAxis: "Experimental condition",
                            yAxis: "Transpiration rate (mL/hour)",
                            expected: "Light and wind highest, dark and humidity lowest"
                        }
                    },
                    analysis: {
                        mechanism: {
                            cohesionTension: "Transpiration creates tension in xylem → pulls water column up from roots",
                            cohesion: "Water molecules stick together (hydrogen bonds) → continuous column",
                            adhesion: "Water sticks to xylem walls → prevents backflow"
                        },
                        stomatalRole: {
                            pathway: "~95% of transpiration through stomata, ~5% through cuticle",
                            regulation: "Guard cells open stomata in light (photosynthesis needs CO₂), close in dark or drought",
                            tradeoff: "Open stomata = CO₂ in but water out; closed = conserve water but no photosynthesis"
                        },
                        environmentalFactors: {
                            light: "Opens stomata (blue light receptors in guard cells) + increases temperature",
                            temperature: "Increases evaporation rate (kinetic energy)",
                            humidity: "Low humidity increases concentration gradient → faster diffusion",
                            wind: "Removes humid boundary layer near leaf → maintains gradient",
                            soilMoisture: "Low water → ABA hormone → stomata close → reduced transpiration"
                        },
                        adaptations: {
                            xerophytes: "Thick cuticle, reduced leaves, sunken stomata, CAM photosynthesis (stomata open at night)",
                            hydrophytes: "Thin cuticle, stomata on upper surface (if floating), large leaf area"
                        }
                    },
                    calculations: {
                        transpirationRate: "Rate = (Volume lost / Time) / Leaf area",
                        example: "If 6 mL lost in 3 hours with 20 cm² leaf area: (6 mL / 3 hr) / 20 cm² = 0.1 mL/cm²/hr",
                        scaling: "Large tree can transpire 100+ liters per day!"
                    },
                    results: "Transpiration rate is highest under bright light and moving air, lowest in dark and high humidity. Blocking stomata or removing leaves proportionally reduces water loss. Environmental factors strongly influence transpiration by affecting stomatal aperture and evaporation rates.",
                    conclusions: [
                        "Transpiration is loss of water vapor from plant surfaces, mainly through stomata",
                        "Environmental factors (light, humidity, wind, temperature) significantly affect rate",
                        "Light increases transpiration by opening stomata",
                        "Wind increases transpiration by removing humid air near leaves",
                        "Humidity decreases transpiration by reducing concentration gradient",
                        "Leaf area correlates with total water loss",
                        "Transpiration serves multiple functions: water transport, cooling, nutrient delivery",
                        "Plants balance water loss (transpiration) against CO₂ uptake (photosynthesis)"
                    ],
                    realWorldApplications: [
                        "Agriculture: Irrigation scheduling based on transpiration rates",
                        "Climate science: Plants are major contributors to water cycle",
                        "Drought resistance: Breeding crops with reduced transpiration",
                        "Forestry: Understanding water use by forests",
                        "Urban planning: Trees cool cities through transpiration",
                        "Understanding plant responses to climate change"
                    ],
                    extensions: [
                        "Compare transpiration rates of different plant species",
                        "Investigate diurnal (daily) rhythm of transpiration",
                        "Measure stomatal density and correlate with transpiration rate",
                        "Test effect of soil moisture on transpiration",
                        "Investigate transpiration in xerophytes vs. mesophytes",
                        "Use dataloggers to continuously monitor water uptake",
                        "Calculate water use efficiency (CO₂ fixed per water lost)",
                        "Model forest transpiration from individual leaf measurements"
                    ],
                    limitations: [
                        "Water uptake doesn't exactly equal transpiration (some used in growth/photosynthesis)",
                        "Cut shoots may behave differently than intact plants with roots",
                        "Difficult to control all environmental variables",
                        "Air bubbles in xylem can disrupt water column",
                        "Individual plant variation"
                    ],
                    troubleshooting: [
                        "No water uptake: Check for air bubbles in stem, ensure seal is tight",
                        "Too fast water loss: Reduce leaf area, check temperature",
                        "Inconsistent results: Ensure plants are similar size, check for leaks",
                        "Plant wilting: Air may have entered xylem, try re-cutting stem underwater"
                    ]
                }
            }
        };

        // Link experiments to topics
        this.linkExperimentsToTopics();
    }

    linkExperimentsToTopics() {
        Object.entries(this.plantExperiments).forEach(([expId, experiment]) => {
            experiment.relatedTopics.forEach(topicId => {
                if (this.plantTopics[topicId]) {
                    if (!this.plantTopics[topicId].relatedExperiments) {
                        this.plantTopics[topicId].relatedExperiments = [];
                    }
                    this.plantTopics[topicId].relatedExperiments.push({
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
            root_systems: {
                'Structure and Function': [
                    'Thinking roots only absorb water (they also anchor, store food, and absorb minerals)',
                    'Believing all plants have taproots (monocots typically have fibrous roots)',
                    'Confusing root hairs with lateral roots (root hairs are epidermal cell extensions)',
                    'Thinking roots grow uniformly along their length (growth is localized in specific zones)',
                    'Believing roots are always underground (some are aerial or above water)'
                ],
                'Root Growth': [
                    'Thinking root cap is the growing part (it\'s protective; growth is behind it)',
                    'Believing roots push through soil (they grow into spaces and around particles)',
                    'Confusing primary and lateral roots (lateral roots originate from pericycle, not root tip)'
                ]
            },
            
            stem_anatomy: {
                'Vascular Tissues': [
                    'Thinking xylem and phloem are the same (xylem transports water, phloem transports sugars)',
                    'Believing all stems have secondary growth (only woody plants do)',
                    'Confusing bark with wood (bark is outer dead tissue, wood is inner xylem)',
                    'Thinking vascular bundles are scattered in all plants (only monocots; dicots have ring arrangement)',
                    'Believing cambium is present in monocots (it\'s absent - no secondary growth)'
                ],
                'Growth': [
                    'Thinking tree rings represent months (they represent years)',
                    'Believing all growth occurs at tips (lateral growth from cambium is also important)',
                    'Confusing heartwood with diseased wood (heartwood is normal, non-functional xylem)'
                ]
            },
            
            leaf_structure: {
                'Anatomy': [
                    'Thinking all leaves have stomata on both surfaces (usually more on lower surface)',
                    'Believing chloroplasts are only in leaves (they\'re in any green tissue)',
                    'Confusing veins with decorations (veins are vascular bundles for transport)',
                    'Thinking palisade and spongy mesophyll are the same (different arrangements and functions)',
                    'Believing cuticle is on all surfaces (usually thicker on upper surface, thinner on lower)'
                ],
                'Function': [
                    'Thinking leaves are only for photosynthesis (also gas exchange, transpiration, storage in some)',
                    'Believing all photosynthesis occurs in palisade layer (spongy mesophyll also has chloroplasts)',
                    'Confusing transpiration with respiration (transpiration is water loss, respiration is gas exchange for energy)'
                ]
            },
            
            flower_anatomy: {
                'Structure': [
                    'Thinking all flowers have all four whorls (some are incomplete)',
                    'Believing petals are always colorful (some flowers lack petals or have green ones)',
                    'Confusing stamen with pistil (stamen is male, pistil is female)',
                    'Thinking all flowers are bisexual (some are unisexual - only male or female)',
                    'Believing pollen is the male gamete (pollen contains sperm cells, which are gametes)'
                ],
                'Reproduction': [
                    'Thinking ovary becomes seed (ovary becomes fruit, ovule becomes seed)',
                    'Believing all fruits are sweet and fleshy (many are dry or not sweet)',
                    'Confusing pollination with fertilization (pollination is pollen transfer; fertilization is sperm-egg fusion)',
                    'Thinking double fertilization is two eggs fertilized (it\'s one egg + one central cell)'
                ]
            },
            
            plant_tissues: {
                'Tissue Types': [
                    'Confusing parenchyma, collenchyma, and sclerenchyma functions',
                    'Thinking all plant cells are living (sclerenchyma and xylem vessels are dead at maturity)',
                    'Believing meristem is a type of permanent tissue (it\'s dividing tissue that produces permanent tissues)',
                    'Confusing primary and secondary growth (primary = length, secondary = girth)',
                    'Thinking epidermis is same as periderm (epidermis is primary dermal tissue, periderm replaces it in woody plants)'
                ],
                'Growth': [
                    'Believing all plants have secondary growth (only woody plants)',
                    'Thinking apical meristem only at tips (also intercalary meristem in grasses)',
                    'Confusing cambium types (vascular cambium produces xylem/phloem; cork cambium produces bark)'
                ]
            }
        };

        this.clarificationStrategies = {
            visual_comparison: {
                method: 'Use diagrams to show structural differences between plant parts',
                effectiveness: 'High for distinguishing root/stem/leaf anatomy'
            },
            analogy: {
                method: 'Relate to everyday examples (xylem like water pipes, phloem like food delivery)',
                effectiveness: 'High for abstract concepts like transport'
            },
            physical_models: {
                method: 'Build 3D models or examine real plant specimens',
                effectiveness: 'Very high for understanding 3D structure'
            },
            microscopy: {
                method: 'Observe actual tissues under microscope',
                effectiveness: 'Very high for connecting structure to function'
            },
            experiments: {
                method: 'Hands-on experiments demonstrating function (dye transport, tropisms)',
                effectiveness: 'Very high for understanding physiological processes'
            }
        };
    }

    initializeMetacognitivePrompts() {
        this.metacognitivePrompts = {
            beforeLearning: [
                "What do you already know about {topic}?",
                "What questions do you have about plant {topic}?",
                "How does {topic} relate to what you've learned about other plant structures?",
                "Can you predict how {structure} might be adapted for its function?"
            ],
            duringLearning: [
                "Does this make sense? Can you explain it in your own words?",
                "How does this plant structure connect to {related_concept}?",
                "What's confusing about this concept?",
                "Can you think of a plant example you've seen that demonstrates {concept}?"
            ],
            afterLearning: [
                "What were the main ideas about plant {topic}?",
                "What surprised you while learning about {topic}?",
                "What are you still unsure about?",
                "How would you teach {topic} to someone else?",
                "What study strategy worked best for you with this material?",
                "Can you draw and label the structure from memory?"
            ],
            problemSolving: [
                "What is the question really asking about this plant structure?",
                "What information do you have? What do you need?",
                "Have you seen a similar plant structure or function before?",
                "Did your answer make sense? How can you check it?",
                "Can you relate this to a plant you've actually observed?"
            ]
        };
    }

    initializeContextualScenarios() {
        this.contextualScenarios = {
            root_systems: [
                {
                    scenario: "Soil Erosion Prevention",
                    context: "After heavy rains, hillsides with grass cover remain intact while bare soil washes away",
                    application: "Fibrous root systems of grasses form dense network that holds soil particles together",
                    question: "Why do grasses prevent erosion better than plants with taproots?"
                },
                {
                    scenario: "Carrot vs. Onion Storage",
                    context: "Carrots store food in roots; onions store food in modified leaves",
                    application: "Taproots can become enlarged storage organs (carrots, radishes, beets)",
                    question: "Why do we eat the root of carrots but the leaves (bulb scales) of onions?"
                }
            ],
            
            stem_anatomy: [
                {
                    scenario: "Tree Ring Dating (Dendrochronology)",
                    context: "Scientists determine age of wooden artifacts by matching tree ring patterns",
                    application: "Annual rings reflect yearly growth; wide rings = good growing conditions, narrow = drought/stress",
                    question: "How can tree rings tell us about historical climate conditions?"
                },
                {
                    scenario: "Girdling Trees",
                    context: "Removing bark all around a tree trunk kills the tree over time",
                    application: "Removing bark removes phloem → sugars can't reach roots → roots starve → tree dies",
                    question: "Why does girdling kill a tree even though xylem remains intact?"
                }
            ],
            
            leaf_structure: [
                {
                    scenario: "Houseplant Leaf Drop",
                    context: "Houseplant placed in dark corner drops leaves",
                    application: "Low light → insufficient photosynthesis → plant sheds leaves to conserve resources",
                    question: "Why do plants in low light conditions often have larger, thinner leaves?"
                },
                {
                    scenario: "Desert Plant Adaptations",
                    context: "Cacti have spines instead of broad leaves",
                    application: "Reduced leaf surface area minimizes water loss through transpiration; photosynthesis occurs in green stem",
                    question: "How do cacti survive in desert with such reduced leaf area?"
                }
            ],
            
            flower_anatomy: [
                {
                    scenario: "Seedless Fruit Production",
                    context: "Seedless grapes and watermelons are commercially produced",
                    application: "Fertilization can be prevented (triploid plants) or induced hormonally without pollination (parthenocarpy)",
                    question: "If flowers need fertilization to produce fruit, how do seedless fruits form?"
                },
                {
                    scenario: "Crop Pollination Crisis",
                    context: "Declining bee populations threaten crop yields",
                    application: "Many crops depend on insect pollination for fruit/seed production",
                    question: "Why are some crops (corn, wheat) less affected by bee decline than others (apples, almonds)?"
                }
            ],
            
            plant_tissues: [
                {
                    scenario: "Bamboo Rapid Growth",
                    context: "Bamboo can grow up to 91 cm (36 inches) in 24 hours",
                    application: "Intercalary meristems at nodes allow growth even after tip is cut; extensive underground rhizome system provides resources",
                    question: "How can bamboo grow so much faster than trees?"
                },
                {
                    scenario: "Grafting Fruit Trees",
                    context: "Different varieties grafted onto one tree (fruit salad tree)",
                    application: "Vascular cambium layers must align for graft to succeed; ensures vascular connection",
                    question: "Why must cambium layers be carefully aligned when grafting?"
                }
            ]
        };
    }

    initializeAssessmentRubrics() {
        this.assessmentRubrics = {
            knowledgeLevel: {
                remember: {
                    description: "Recall facts, terms, basic plant structures",
                    verbs: ["Define", "List", "Identify", "Name", "Label"],
                    example: "Label the parts of a flower (sepal, petal, stamen, pistil)"
                },
                understand: {
                    description: "Explain plant structures and functions",
                    verbs: ["Explain", "Describe", "Summarize", "Compare", "Classify"],
                    example: "Explain how guard cells control stomatal opening"
                },
                apply: {
                    description: "Use knowledge in new situations",
                    verbs: ["Calculate", "Solve", "Demonstrate", "Predict", "Use"],
                    example: "Predict how a plant will respond to water stress based on stomatal structure"
                },
                analyze: {
                    description: "Draw connections among plant structures and functions",
                    verbs: ["Analyze", "Differentiate", "Organize", "Compare", "Contrast"],
                    example: "Analyze how leaf structure relates to photosynthetic efficiency"
                },
                evaluate: {
                    description: "Justify decisions about plant structure or function",
                    verbs: ["Evaluate", "Critique", "Judge", "Defend", "Assess"],
                    example: "Evaluate which root system is better for drought tolerance and why"
                },
                create: {
                    description: "Produce new ideas or original work",
                    verbs: ["Design", "Construct", "Create", "Develop", "Formulate"],
                    example: "Design an experiment to test the effect of light on stomatal density"
                }
            },
            
            understandingLevels: {
                novice: {
                    characteristics: ["Memorizes structures", "Sees parts in isolation", "Struggles with function"],
                    support: ["Provide diagrams", "Use specimens", "Break down complex structures"]
                },
                developing: {
                    characteristics: ["Connects structure to function", "Recognizes patterns", "Begins comparing"],
                    support: ["Challenge with variations", "Encourage explanation", "Introduce adaptations"]
                },
                proficient: {
                    characteristics: ["Flexible thinking", "Applies to novel plants", "Explains reasoning"],
                    support: ["Present complex problems", "Encourage analysis", "Develop research skills"]
                },
                expert: {
                    characteristics: ["Synthesizes across systems", "Creates new connections", "Teaches effectively"],
                    support: ["Original research", "Mentoring others", "Advanced applications"]
                }
            }
        };

        this.assessmentQuestions = {
            root_systems: {
                remember: "List the four zones of a growing root tip",
                understand: "Explain why root hairs increase absorption efficiency",
                apply: "Predict which root system would be better for preventing erosion on a hillside",
                analyze: "Compare and contrast taproot and fibrous root systems in terms of structure and function",
                evaluate: "Evaluate the claim that 'all roots grow uniformly along their length'",
                create: "Design an experiment to demonstrate that root elongation occurs in a specific zone"
            },
            
            stem_anatomy: {
                remember: "Name the two types of vascular tissues in stems",
                understand: "Explain how xylem and phloem differ in structure and function",
                apply: "Predict what will happen if you remove a ring of bark from a tree trunk",
                analyze: "Analyze the differences between monocot and dicot stem anatomy",
                evaluate: "Evaluate why tree rings are reliable for dating historical events",
                create: "Design an experiment to demonstrate that phloem transports sugars"
            },
            
            leaf_structure: {
                remember: "Identify the layers of a leaf from a cross-section",
                understand: "Explain why most stomata are on the lower leaf surface",
                apply: "Predict how a sun plant's leaf structure would differ from a shade plant",
                analyze: "Compare palisade and spongy mesophyll in terms of structure and function",
                evaluate: "Evaluate the statement 'stomata are wasteful because they cause water loss'",
                create: "Design a leaf structure optimized for maximum photosynthesis with minimum water loss"
            },
            
            flower_anatomy: {
                remember: "List the four whorls of a complete flower",
                understand: "Explain the process of double fertilization in angiosperms",
                apply: "Predict which flower structures would be most developed in a wind-pollinated plant",
                analyze: "Analyze how flower structure reflects pollination syndrome",
                evaluate: "Evaluate why double fertilization is considered a key angiosperm innovation",
                create: "Design a flower optimized for hummingbird pollination"
            },
            
            plant_tissues: {
                remember: "Name the three types of simple plant tissues",
                understand: "Explain the difference between primary and secondary growth",
                apply: "Predict which tissues would be most developed in a support function",
                analyze: "Compare parenchyma, collenchyma, and sclerenchyma tissues",
                evaluate: "Evaluate why meristems are considered essential for plant growth",
                create: "Design an experiment to demonstrate that growth occurs at specific meristem locations"
            }
        };
    }

    // ========================================
    // HANDLER METHODS FOR EACH TOPIC
    // ========================================

    handleRootSystems(problem) {
        const content = {
            topic: "Root Systems",
            category: 'plant_organs',
            summary: "Roots are underground organs that anchor plants, absorb water and minerals from soil, and often store food. Root structure is specialized for these functions with distinct tissue zones and growth patterns.",
            
            classification: {
                byType: {
                    taproot: {
                        description: "Single large primary root with smaller lateral branches",
                        structure: "Primary root dominant, grows vertically downward",
                        advantages: ["Deep soil penetration", "Access deep water", "Strong anchorage", "Drought tolerance"],
                        examples: "Carrot, radish, dandelion, oak, pine, most dicots",
                        adaptations: "Can be modified for storage (carrot, beet, turnip, sweet potato)"
                    },
                    fibrous: {
                        description: "Many thin roots of similar size spreading from stem base",
                        structure: "No dominant root, extensive horizontal network",
                        advantages: ["Wide soil coverage", "Efficient shallow water absorption", "Excellent erosion prevention", "Dense nutrient uptake"],
                        examples: "Grasses, corn, wheat, rice, onion, most monocots",
                        function: "Holds soil particles - important for erosion control"
                    },
                    adventitious: {
                        description: "Roots arising from stems or leaves (not from primary root)",
                        types: {
                            prop: "Grow from stem nodes down to soil for support (corn, banyan, mangrove)",
                            aerial: "Exposed to air, absorb moisture (orchids, ivy)",
                            climbing: "Attach to surfaces for support (ivy)",
                            storage: "Store food (sweet potato, cassava)",
                            pneumatophores: "Upward-growing roots in mangroves for gas exchange in waterlogged soil"
                        }
                    }
                }
            },
            
            externalStructure: {
                parts: {
                    rootCap: {
                        location: "Covers and protects root tip",
                        function: ["Protection during soil penetration", "Secretes mucilage (lubricant)", "Contains statocytes for gravity sensing"],
                        cells: "Continuously replaced as outer cells worn away"
                    },
                    rootHairs: {
                        location: "Maturation zone, 2-10 mm behind tip",
                        structure: "Extensions of epidermal cells (not separate cells)",
                        function: "Dramatically increase surface area for water and mineral absorption",
                        lifespan: "Short-lived (days to weeks), constantly replaced",
                        importance: "Primary site of water uptake - can increase absorption area by 10-100×"
                    }
                },
                growthZones: {
                    zone1_rootCap: "Protection, gravity sensing (0-1 mm from tip)",
                    zone2_meristematic: "Cell division (mitosis), no elongation (1-3 mm from tip)",
                    zone3_elongation: "Cell elongation (vacuole expansion), main growth zone (3-10 mm from tip)",
                    zone4_maturation: "Cell differentiation, root hairs appear, no elongation (>10 mm from tip)"
                }
            },
            
            internalAnatomy: {
                crossSectionalView: {
                    epidermis: {
                        location: "Outermost layer",
                        function: "Absorption (water and minerals enter here)",
                        specialization: "Root hairs (increase surface area)",
                        note: "No cuticle (unlike stems/leaves) - allows absorption"
                    },
                    cortex: {
                        location: "Between epidermis and endodermis",
                        tissue: "Parenchyma cells (loosely packed)",
                        function: ["Storage (starch in amyloplasts)", "Pathway for water/minerals to vascular tissue"],
                        features: "Large intercellular spaces for air circulation and water movement"
                    },
                    endodermis: {
                        location: "Innermost layer of cortex, surrounds vascular cylinder",
                        specialization: "Casparian strip (band of suberin and lignin in cell walls)",
                        function: "Selective barrier - controls entry into vascular tissue",
                        mechanism: "Casparian strip blocks apoplastic pathway (between cells) → forces water/minerals through cell membranes (symplastic pathway) → selective uptake",
                        importance: "Prevents toxic substances from entering xylem, regulates mineral uptake"
                    },
                    pericycle: {
                        location: "Just inside endodermis",
                        cells: "Retains meristematic capability",
                        function: "Gives rise to lateral (branch) roots",
                        note: "Lateral roots originate internally (from pericycle), unlike lateral stems (from axillary buds)"
                    },
                    vascularCylinder: {
                        xylem: {
                            location: "Center of root, often in X-shaped pattern",
                            function: "Water and mineral transport upward",
                            development: "Exarch (develops from outside toward center)"
                        },
                        phloem: {
                            location: "Between arms of xylem",
                            function: "Food (sugar) transport from shoots to roots",
                            arrangement: "Alternates with xylem"
                        }
                    }
                }
            },
            
            functions: {
                anchorage: "Secure plant in soil, provide stability against wind/gravity",
                absorption: "Uptake water and dissolved minerals (N, P, K, etc.) from soil",
                storage: "Store carbohydrates (starch) and other nutrients (carrots, beets, sweet potatoes)",
                conduction: "Transport absorbed water/minerals upward through xylem",
                synthesis: "Produce hormones (cytokinins), synthesize some amino acids",
                vegetativeReproduction: "Some plants reproduce via root suckers (aspen, raspberry)"
            },
            
            rootGrowth: {
                mechanism: {
                    cellDivision: "Occurs in apical meristem behind root cap",
                    cellElongation: "Occurs in elongation zone - cells expand by taking up water into vacuoles",
                    cellDifferentiation: "Occurs in maturation zone - cells develop specialized functions"
                },
                geotropism: {
                    response: "Roots grow downward (positive gravitropism)",
                    mechanism: "Gravity causes statoliths (starch-filled plastids) to sediment → auxin redistributes to lower side → upper side grows more → downward bending",
                    adaptiveValue: "Ensures roots grow into soil for water/mineral access"
                },
                hydrotropism: {
                    response: "Roots grow toward water",
                    mechanism: "Moisture gradient affects auxin distribution",
                    priority: "Can override gravitropism in some cases"
                }
            },
            
            adaptations: {
                desert: {
                    features: "Very deep taproots (mesquite 50+ feet), extensive lateral roots near surface, CAM metabolism",
                    examples: "Mesquite, acacia, cacti"
                },
                aquatic: {
                    features: "Reduced root systems, aerenchyma (air spaces) for buoyancy and oxygen transport",
                    examples: "Water lilies, duckweed"
                },
                epiphytic: {
                    features: "Aerial roots absorb moisture from air, attach to surfaces",
                    examples: "Orchids, bromeliads, some ferns"
                },
                parasitic: {
                    features: "Haustoria (specialized roots) penetrate host plant vascular tissue",
                    examples: "Dodder, mistletoe"
                },
                storage: {
                    features: "Enlarged fleshy roots store starch",
                    examples: "Carrot, radish, beet, sweet potato, cassava, turnip"
                },
                buttress: {
                    features: "Large, flared roots above ground for stability",
                    examples: "Large tropical trees (kapok, fig)"
                }
            },
            
            symbioticRelationships: {
                mycorrhizae: {
                    description: "Symbiotic association between roots and fungi",
                    types: "Ectomycorrhizae (fungi surround roots), Endomycorrhizae (fungi penetrate root cells)",
                    benefit: "Fungus increases surface area for absorption → enhanced nutrient uptake (especially phosphorus); plant provides sugars to fungus",
                    prevalence: "~90% of plant species have mycorrhizal associations"
                },
                nitrogen_fixing: {
                    description: "Root nodules containing nitrogen-fixing bacteria (Rhizobium)",
                    plants: "Legumes (beans, peas, clover, alfalfa)",
                    benefit: "Bacteria convert atmospheric N₂ to NH₃ (ammonia) usable by plant; plant provides sugars and anaerobic environment",
                    importance: "Natural fertilizer, enriches soil nitrogen"
                }
            },
            
            comparison: {
                taprootVsFibrous: {
                    structure: "Single deep root vs. Many shallow roots",
                    depth: "Deep (drought tolerant) vs. Shallow (efficient surface uptake)",
                    erosionControl: "Moderate vs. Excellent",
                    transplanting: "Difficult vs. Easier",
                    occurrence: "Dicots vs. Monocots",
                    examples: "Carrot, oak vs. Grass, corn"
                },
                primaryVsLateral: {
                    origin: "From radicle (embryo) vs. From pericycle of existing root",
                    location: "Main root vs. Branches",
                    function: "Main absorption/anchorage vs. Increase surface area"
                }
            },
            
            applications: [
                "Agriculture: Understanding root architecture for crop productivity",
                "Soil conservation: Using fibrous roots to prevent erosion",
                "Horticulture: Root cuttings for plant propagation",
                "Phytoremediation: Using roots to remove soil pollutants",
                "Understanding drought tolerance in crops",
                "Optimizing irrigation and fertilizer application",
                "Tree stability and urban forestry planning"
            ],
            
            examples: [
                {
                    plant: "Carrot",
                    rootType: "Taproot (modified for storage)",
                    adaptation: "Enlarged fleshy taproot stores sugars and carotenoids",
                    use: "Human food, animal feed"
                },
                {
                    plant: "Grass",
                    rootType: "Fibrous",
                    adaptation: "Dense network of thin roots in top 15 cm of soil",
                    use: "Erosion control, lawns, pasture"
                },
                {
                    plant: "Corn",
                    rootType: "Fibrous with prop roots",
                    adaptation: "Adventitious prop roots from lower stem nodes provide support",
                    use: "Prevents lodging (falling over) in wind"
                },
                {
                    plant: "Banyan tree",
                    rootType: "Aerial prop roots",
                    adaptation: "Roots grow down from branches, support massive canopy",
                    use: "One tree can cover acres"
                },
                {
                    plant: "Mangrove",
                    rootType: "Pneumatophores",
                    adaptation: "Upward-growing roots with pores (lenticels) for gas exchange in oxygen-poor mud",
                    use: "Survival in waterlogged coastal soils"
                }
            ]
        };
        
        return content;
    }

    handleStemAnatomy(problem) {
        const content = {
            topic: "Stem Anatomy and Vascular Tissues",
            category: 'plant_organs',
            summary: "Stems provide structural support, house the plant's vascular transport system, and connect roots to leaves. Stem anatomy varies between plant groups and reflects growth patterns (herbaceous vs. woody, monocot vs. dicot).",
            
            functions: {
                support: "Hold leaves, flowers, and fruits in optimal positions",
                transport: "Xylem conducts water/minerals upward; phloem transports sugars throughout plant",
                storage: "Parenchyma cells in pith and cortex store starch and other nutrients",
                photosynthesis: "Young green stems and some modified stems (cacti) perform photosynthesis",
                vegetativeReproduction: "Stolons, rhizomes, tubers, bulbs enable asexual reproduction"
            },
            
            externalFeatures: {
                node: "Point where leaf attaches to stem",
                internode: "Stem segment between two consecutive nodes",
                axillaryBud: "Bud in axil (angle) of leaf at node - can develop into branch or flower",
                terminalBud: "Bud at tip of stem - contains apical meristem for growth in length",
                budScales: "Modified leaves protecting buds (especially in woody plants)",
                lenticels: "Pores in bark for gas exchange (visible as raised dots)"
            },
            
            stemTypes: {
                herbaceous: {
                    description: "Soft, green, non-woody stems",
                    growth: "Primary growth only (length increase)",
                    structure: "Epidermis, cortex, vascular bundles, pith",
                    lifespan: "Annual or biennial (usually)",
                    examples: "Sunflower, tomato, corn, bean, tulip",
                    characteristics: "Flexible, green (photosynthetic), die back seasonally"
                },
                woody: {
                    description: "Hard stems with bark and secondary xylem (wood)",
                    growth: "Primary AND secondary growth (length and girth)",
                    structure: "Cork (bark), phloem, vascular cambium, xylem (wood), pith",
                    lifespan: "Perennial (live many years)",
                    types: {
                        trees: "Single main trunk, tall (oak, pine, maple)",
                        shrubs: "Multiple stems from base, shorter (rose, lilac)"
                    }
                }
            },
            
            internalAnatomy: {
                herbaceousDicot: {
                    epidermis: {
                        location: "Outermost layer",
                        function: "Protection, gas exchange (through stomata)",
                        cuticle: "Waxy coating reduces water loss"
                    },
                    cortex: {
                        location: "Between epidermis and vascular bundles",
                        tissue: "Parenchyma and collenchyma",
                        function: "Storage, photosynthesis (if green), support"
                    },
                    vascularBundles: {
                        arrangement: "Arranged in ring around pith",
                        structure: {
                            xylem: "Inner (toward center)",
                            cambium: "Between xylem and phloem (if present)",
                            phloem: "Outer (toward cortex)",
                            fibers: "Cap of sclerenchyma fibers for support"
                        },
                        type: "Open bundles (cambium present - can have secondary growth)"
                    },
                    pith: {
                        location: "Center of stem",
                        tissue: "Parenchyma cells",
                        function: "Storage",
                        feature: "May break down leaving hollow center in older stems"
                    }
                },
                
                monocot: {
                    epidermis: "Similar to dicot",
                    groundTissue: "Parenchyma throughout (no distinct cortex and pith)",
                    vascularBundles: {
                        arrangement: "Scattered throughout ground tissue (no ring pattern)",
                        structure: "Xylem and phloem in bundle, no cambium between them",
                        type: "Closed bundles (no cambium - no secondary growth)",
                        distribution: "More numerous near periphery, fewer in center"
                    },
                    examples: "Corn, bamboo, palm, lily",
                    note: "Cannot increase in diameter (no vascular cambium)"
                },
                
                woodyDicot: {
                    primaryStructure: "Young stem similar to herbaceous dicot",
                    secondaryGrowth: {
                        vascularCambium: {
                            location: "Forms continuous cylinder between xylem and phloem",
                            activity: "Divides to produce secondary xylem (inward) and secondary phloem (outward)",
                            result: "Stem increases in diameter",
                            seasonality: "Active in growing season, dormant in winter"
                        },
                        secondaryXylem: {
                            common_name: "Wood",
                            function: "Water transport and structural support",
                            annualRings: {
                                formation: "One ring = one year of growth",
                                springWood: "Large, thin-walled cells (rapid growth in spring) - light colored",
                                summerWood: "Smaller, thick-walled cells (slower growth in summer) - dark colored",
                                counting: "Count dark+light couplets to determine tree age",
                                variation: "Wide rings = favorable conditions; narrow = drought/stress"
                            },
                            sapwood: "Outer, functional xylem - actively transports water",
                            heartwood: "Inner, non-functional xylem - provides strength, darker due to deposits (tannins, resins)",
                        },
                        secondaryPhloem: {
                            common_name: "Inner bark",
                            function: "Sugar transport",
                            fate: "Crushed and pushed outward as new phloem forms, eventually sloughed off"
                        },
                        corkCambium: {
                            location: "Forms in outer cortex or phloem",
                            activity: "Produces cork cells (outward) and phelloderm (inward)",
                            cork: {
                                characteristics: "Dead cells, waterproof (suberin), air-filled",
                                function: "Protection, prevent water loss",
                                common_name: "Outer bark"
                            },
                            result: "Epidermis and original cortex slough off as stem expands"
                        }
                    },
                    matureStemComposition: {
                        bark: "All tissues outside vascular cambium (cork + phloem + cork cambium)",
                        wood: "Secondary xylem inside vascular cambium"
                    }
                }
            },
            
            vascularTissues: {
                xylem: {
                    function: "Transport water and dissolved minerals from roots to leaves",
                    direction: "Unidirectional (upward only)",
                    mechanism: ["Transpiration pull", "Root pressure", "Cohesion-tension theory"],
                    cellTypes: {
                        tracheids: {
                            structure: "Long, tapered cells with pits (openings) in walls",
                            occurrence: "All vascular plants",
                            waterMovement: "Through pits from cell to cell"
                        },
                        vesselElements: {
                            structure: "Short, wide cells with perforated or absent end walls",
                            occurrence: "Angiosperms primarily",
                            arrangement: "Stack end-to-end forming continuous vessel",
                            efficiency: "More efficient than tracheids (wider, less resistance)"
                        },
                        xylemFibers: {
                            function: "Support",
                            characteristics: "Long, thick-walled"
                        },
                        xylemParenchyma: {
                            function: "Storage",
                            characteristics: "Living cells"
                        }
                    },
                    characteristics: "Cells dead at maturity, lignified (woody) walls, no cell contents"
                },
                
                phloem: {
                    function: "Transport sugars (mainly sucrose) and organic compounds throughout plant",
                    direction: "Bidirectional (source to sink - e.g., leaves to roots, or leaves to fruits)",
                    mechanism: "Pressure-flow (mass flow) hypothesis",
                    cellTypes: {
                        sieveTubeElements: {
                            structure: "Living cells with sieve plates at ends (perforated)",
                            occurrence: "Angiosperms",
                            contents: "No nucleus at maturity, modified cytoplasm",
                            connection: "Sieve plates allow cytoplasmic continuity between cells"
                        },
                        companionCells: {
                            function: "Metabolic support for sieve tube elements",
                            location: "Adjacent to sieve tubes",
                            connection: "Connected by plasmodesmata (cytoplasmic connections)",
                            contents: "Nucleus, mitochondria, ribosomes - control sieve tube function"
                        },
                        phloemFibers: {
                            function: "Support",
                            examples: "Hemp, flax fibers used for textiles"
                        },
                        phloemParenchyma: {
                            function: "Storage"
                        }
                    },
                    characteristics: "Living cells, cellulose walls, functional cytoplasm"
                },
                
                cambium: {
                    vascularCambium: {
                        type: "Lateral meristem",
                        location: "Between xylem and phloem",
                        function: "Produces secondary xylem (inward, more) and secondary phloem (outward, less)",
                        result: "Increases stem diameter (secondary growth)",
                        occurrence: "Dicots and gymnosperms (not monocots)",
                        activity: "Divides periclinally (tangentially)"
                    },
                    corkCambium: {
                        type: "Lateral meristem",
                        location: "In cortex or phloem",
                        function: "Produces cork (protective bark)",
                        products: "Cork cells (outward), phelloderm (inward)",
                        occurrence: "Woody plants"
                    }
                }
            },
            
            secondaryGrowth: {
                process: [
                    "Vascular cambium forms continuous cylinder",
                    "Cambium divides: inner cells → secondary xylem, outer cells → secondary phloem",
                    "More xylem produced than phloem → stem diameter increases",
                    "Cork cambium forms in outer tissues",
                    "Cork cells protect stem, epidermis sloughs off",
                    "Annual rings visible in cross-section (temperate climates)"
                ],
                adaptiveValue: "Allows woody plants to grow tall, live for centuries, support large canopies",
                dendrochronology: {
                    definition: "Study of tree rings to date events and study past climates",
                    application: "Dating historical wooden artifacts, reconstructing past climates, studying forest ecology"
                }
            },
            
            stemModifications: {
                underground: {
                    rhizome: {
                        description: "Horizontal underground stem",
                        function: "Storage, vegetative reproduction",
                        features: "Nodes, internodes, scale leaves",
                        examples: "Iris, ginger, turmeric, ferns"
                    },
                    tuber: {
                        description: "Enlarged tip of rhizome",
                        function: "Storage (starch)",
                        features: "'Eyes' are buds at nodes",
                        examples: "Potato (stem tuber, not root!), Jerusalem artichoke"
                    },
                    corm: {
                        description: "Short, vertical, fleshy underground stem",
                        function: "Storage, perennation",
                        features: "Papery leaves, buds at top",
                        examples: "Gladiolus, crocus, taro"
                    },
                    bulb: {
                        description: "Short stem with fleshy leaves (actually modified leaves, not stem)",
                        function: "Storage, dormancy",
                        examples: "Onion, tulip, daffodil, lily",
                        note: "Technically a leaf modification, but often grouped with stem modifications"
                    }
                },
                aboveground: {
                    stolon: {
                        description: "Horizontal stem growing along ground surface",
                        function: "Vegetative reproduction",
                        features: "Nodes root and form new plants",
                        examples: "Strawberry, spider plant, Bermuda grass"
                    },
                    tendril: {
                        description: "Slender, coiling stem",
                        function: "Climbing support",
                        examples: "Grape, pumpkin, cucumber"
                    },
                    thorn: {
                        description: "Sharp, pointed, woody stem",
                        function: "Defense against herbivores",
                        examples: "Hawthorn, honey locust, some citrus",
                        note: "Different from spines (modified leaves) and prickles (outgrowths of epidermis)"
                    },
                    cladophyll: {
                        description: "Flattened, photosynthetic stem resembling leaf",
                        function: "Photosynthesis (in plants with reduced/absent leaves)",
                        examples: "Asparagus, prickly pear cactus, butcher's broom"
                    },
                    succulent: {
                        description: "Thick, fleshy stem storing water",
                        function: "Water storage in arid environments",
                        examples: "Cacti, euphorbias"
                    }
                }
            },
            
            comparison: {
                monocotVsDicot: {
                    vascularArrangement: "Scattered vs. Ring",
                    cambium: "Absent vs. Present",
                    secondaryGrowth: "No vs. Yes",
                    examples: "Corn, palm vs. Sunflower, oak"
                },
                xylemVsPhloem: {
                    cells: "Dead vs. Living",
                    transport: "Water+minerals vs. Sugars+organics",
                    direction: "Upward only vs. Bidirectional",
                    mechanism: "Cohesion-tension vs. Pressure-flow"
                },
                herbaceousVsWoody: {
                    tissue: "Mostly primary vs. Extensive secondary",
                    lifespan: "Annual/biennial vs. Perennial",
                    texture: "Soft, flexible vs. Hard, rigid",
                    examples: "Tomato, corn vs. Oak, pine"
                }
            },
            
            applications: [
                "Forestry: Understanding wood formation and tree growth",
                "Dendrochronology: Dating historical events, studying climate history",
                "Horticulture: Grafting (matching vascular cambium), pruning, propagation",
                "Timber industry: Sapwood vs. heartwood quality",
                "Agriculture: Understanding stem structure for crop support and yields",
                "Urban forestry: Tree selection and care",
                "Phytoremediation: Understanding transport pathways for pollutant removal"
            ]
        };
        
        return content;
    }

    handleLeafStructure(problem) {
        const content = {
            topic: "Leaf Structure and Function",
            category: 'plant_organs',
            summary: "Leaves are the primary photosynthetic organs of plants, optimized for light capture and gas exchange while minimizing water loss. Leaf structure reflects adaptations to diverse environmental conditions.",
            
            functions: {
                photosynthesis: "Primary function - convert light energy to chemical energy (glucose)",
                gasExchange: "CO₂ intake for photosynthesis, O₂ release, transpiration",
                transpiration: "Evaporative water loss - drives water transport, cools plant",
                storage: "Some leaves store water (succulents) or food (onion bulb scales)",
                protection: "Modified leaves (spines, tendrils) serve defensive or supportive roles"
            },
            
            externalMorphology: {
                parts: {
                    blade: {
                        name: "Lamina",
                        description: "Flattened, expanded portion",
                        function: "Main photosynthetic surface - optimized for light capture",
                        features: "Thin (allows light penetration to all cells), broad (maximizes surface area)"
                    },
                    petiole: {
                        description: "Stalk connecting blade to stem",
                        function: ["Positions blade for optimal light exposure", "Allows leaf movement (sun tracking)", "Contains vascular bundles"],
                        variation: "Long in shade plants, short/absent in some species"
                    },
                    stipules: {
                        description: "Small appendages at base of petiole (if present)",
                        function: "Protect young leaves, sometimes photosynthetic",
                        examples: "Prominent in roses, peas; absent in many species"
                    },
                    midrib: {
                        description: "Central, prominent vein",
                        structure: "Main vascular bundle",
                        function: "Support, transport"
                    },
                    veins: {
                        description: "Network of vascular bundles visible in blade",
                        function: "Transport water/minerals to cells, export sugars",
                        support: "Strengthen leaf structure"
                    }
                },
                
                types: {
                    simple: {
                        description: "Single, undivided blade",
                        examples: "Maple, oak, apple, lilac"
                    },
                    compound: {
                        description: "Blade divided into separate leaflets",
                        types: {
                            pinnate: "Leaflets arranged along central axis (feather-like) - ash, walnut, rose",
                            palmate: "Leaflets radiate from single point (hand-like) - horse chestnut, clover"
                        },
                        note: "Leaflets lack buds in axils (distinguishes from simple leaves on twig)"
                    }
                },
                
                venation: {
                    parallel: {
                        description: "Veins run parallel to each other",
                        occurrence: "Monocots",
                        examples: "Grasses, corn, lily, tulip",
                        pattern: "Veins do not branch extensively"
                    },
                    netted: {
                        description: "Veins form branching network",
                        occurrence: "Dicots",
                        types: {
                            pinnate: "Secondary veins branch from midrib (feather pattern) - oak, apple, cherry",
                            palmate: "Major veins radiate from base (maple, grape, ivy)"
                        }
                    }
                },
                
                arrangement: {
                    alternate: "One leaf per node, staggered pattern",
                    opposite: "Two leaves per node, across from each other",
                    whorled: "Three or more leaves per node arranged in circle"
                },
                
                margin: {
                    entire: "Smooth edge",
                    serrate: "Saw-toothed",
                    dentate: "Toothed",
                    lobed: "Indentations don't reach midrib",
                    undulate: "Wavy edge"
                }
            },
            
            internalAnatomy: {
                upperEpidermis: {
                    location: "Upper (adaxial) surface",
                    cells: "Tightly packed, transparent",
                    cuticle: "Thick waxy layer reduces water loss",
                    stomata: "Usually absent or rare (exception: aquatic floating leaves)",
                    function: "Protection, light transmission to mesophyll"
                },
                
                mesophyll: {
                    palisade: {
                        location: "Beneath upper epidermis",
                        cells: "Column-shaped (elongated), tightly packed, vertically oriented",
                        chloroplasts: "Very numerous (70-80% of leaf's chloroplasts)",
                        function: "Primary site of photosynthesis",
                        arrangement: "Perpendicular to leaf surface - maximizes light capture",
                        layers: "Usually 1-2 layers (more in sun plants)"
                    },
                    spongy: {
                        location: "Between palisade and lower epidermis",
                        cells: "Irregular shape, loosely arranged with many air spaces",
                        airSpaces: "Large intercellular spaces (30-50% of tissue volume)",
                        chloroplasts: "Fewer than palisade",
                        function: ["Gas diffusion from stomata to palisade", "Some photosynthesis", "CO₂ distribution"],
                        airPathway: "Connects stomata to all mesophyll cells for gas exchange"
                    }
                },
                
                lowerEpidermis: {
                    location: "Lower (abaxial) surface",
                    cells: "Similar to upper epidermis",
                    cuticle: "Thinner than upper epidermis",
                    stomata: "Numerous (most gas exchange occurs here)",
                    function: "Protection, gas exchange"
                },
                
                veins: {
                    structure: "Vascular bundles embedded in mesophyll",
                    composition: {
                        xylem: "On upper side - brings water and minerals from roots",
                        phloem: "On lower side - exports sugars made in photosynthesis",
                        bundleSheath: "Parenchyma cells surrounding vascular tissue (in C4 plants, contains chloroplasts)"
                    },
                    support: "Sclerenchyma fibers provide structural rigidity",
                    distribution: "Network ensures all cells are close to vascular supply"
                }
            },
            
            stomata: {
                structure: {
                    guardCells: {
                        shape: "Kidney-shaped (dicots) or dumbbell-shaped (grasses/monocots)",
                        wallThickness: "Thicker on side facing pore, thinner on outer side",
                        chloroplasts: "Present (unique among epidermal cells - provides ATP for ion pumps)",
                        mechanism: "Differential wall thickness causes bending when turgid"
                    },
                    stoma: "Pore (opening) between pair of guard cells",
                    subsidiaryCell: "Specialized epidermal cells adjacent to guard cells (in some species)"
                },
                
                location: {
                    distribution: "Mostly on lower epidermis (hypostomatous)",
                    exceptions: {
                        floatingLeaves: "Stomata on upper surface only (water lilies)",
                        amphistomatous: "Stomata on both surfaces (some grasses)",
                        vertical: "Both surfaces (minimizes surface difference)"
                    },
                    density: "100-600 per mm² depending on species and environment"
                },
                
                function: [
                    "CO₂ uptake for photosynthesis",
                    "O₂ release (photosynthesis product)",
                    "Water vapor loss (transpiration)"
                ],
                
                mechanism: {
                    opening: [
                        "Blue light stimulates proton pumps in guard cell membranes",
                        "H⁺ pumped out → membrane potential becomes more negative",
                        "K⁺ channels open → K⁺ enters guard cells",
                        "Cl⁻ also enters to balance charge",
                        "Increased solute concentration → water enters by osmosis",
                        "Guard cells become turgid → cell walls bend → pore opens"
                    ],
                    closing: [
                        "Darkness or water stress (ABA hormone)",
                        "K⁺ and Cl⁻ leave guard cells",
                        "Water exits by osmosis",
                        "Guard cells lose turgor → pore closes"
                    ]
                },
                
                regulation: {
                    light: "Blue light receptors (phototropins) trigger opening",
                    CO2: "Low CO₂ (high photosynthesis) promotes opening",
                    waterStatus: "Water stress → ABA produced → stomata close",
                    temperature: "High temperature initially opens stomata, but closes if causes water stress",
                    circadianRhythm: "Internal clock influences daily opening/closing pattern"
                },
                
                tradeoff: "Open stomata = CO₂ in (photosynthesis) but H₂O out (transpiration); closed = conserve water but no photosynthesis"
            },
            
            adaptations: {
                sunLeaves: {
                    characteristics: ["Smaller, thicker leaves", "Multiple palisade layers", "Higher chlorophyll per area", "More stomata", "Thicker cuticle"],
                    function: "High light capacity, photoprotection, withstand heat",
                    photosynthesis: "Higher light saturation point, higher max rate"
                },
                shadeLeaves: {
                    characteristics: ["Larger, thinner leaves", "Single palisade layer", "Less chlorophyll per area", "Fewer stomata", "Thinner cuticle"],
                    function: "Maximize light capture in low light, efficient use of limited light",
                    photosynthesis: "Lower light compensation point, lower max rate"
                },
                xerophytes: {
                    features: [
                        "Thick cuticle (reduce water loss)",
                        "Small leaf size or needles (reduce surface area)",
                        "Sunken stomata in pits or grooves (trap humid air)",
                        "Trichomes (hairs) on surface (reflect light, trap humidity)",
                        "Rolled leaves (reduce exposed surface)",
                        "CAM photosynthesis (stomata open at night)"
                    ],
                    examples: "Cacti, succulents, pine needles, sagebrush",
                    environment: "Deserts, arid regions"
                },
                hydrophytes: {
                    features: [
                        "Thin or no cuticle (water readily available)",
                        "Large air spaces (aerenchyma - buoyancy, oxygen storage)",
                        "Stomata on upper surface if floating (lower surface in water)",
                        "Flexible, ribbon-like leaves (flow with currents)",
                        "Reduced vascular tissue"
                    ],
                    examples: "Water lily, pondweed, elodea, duckweed",
                    environment: "Aquatic habitats"
                },
                mesophytes: {
                    description: "Typical plants in moderate moisture environments",
                    features: "Moderate cuticle, typical mesophyll structure, stomata mostly lower surface",
                    examples: "Most crop plants, temperate forest trees"
                }
            },
            
            leafModifications: {
                tendrils: "Climbing support (pea, sweet pea, cucumber)",
                spines: "Defense, reduced transpiration (cactus, barberry)",
                storage: "Water or food storage (aloe, onion bulb scales)",
                traps: "Capture insects (Venus flytrap, pitcher plant, sundew)",
                bracts: "Colorful, attract pollinators (poinsettia, dogwood, bougainvillea)",
                budScales: "Protect dormant buds (most temperate trees)",
                succulence: "Water storage (jade plant, ice plant)"
            },
            
            comparison: {
                sunVsShade: {
                    thickness: "Thicker vs. Thinner",
                    size: "Smaller vs. Larger",
                    palisade: "Multiple layers vs. Single layer",
                    chlorophyll: "More per area vs. Less per area"
                },
                monocotVsDicot: {
                    venation: "Parallel vs. Netted",
                    mesophyll: "Less differentiated vs. Distinct palisade/spongy"
                },
                xerophyteVsHydrophyte: {
                    cuticle: "Very thick vs. Thin/absent",
                    size: "Small/reduced vs. Large",
                    stomata: "Sunken, fewer vs. Surface, more (on upper)",
                    specialization: "Water conservation vs. Buoyancy, gas storage"
                }
            },
            
            applications: [
                "Agriculture: Optimizing leaf area index for crop yields",
                "Horticulture: Understanding light requirements for houseplants",
                "Climate science: Modeling photosynthesis and transpiration at global scale",
                "Air quality: Stomata as entry points for air pollutants",
                "Plant identification: Leaf characteristics used in taxonomy",
                "Understanding drought tolerance and irrigation needs",
                "Breeding crops for improved water use efficiency"
            ]
        };
        
        return content;
    }

    handleFlowerAnatomy(problem) {
        const content = {
            topic: "Flower Anatomy and Reproduction",
            category: 'plant_reproduction',
            summary: "Flowers are the reproductive structures of angiosperms, containing male and/or female parts. Flower diversity reflects co-evolution with pollinators and varied reproductive strategies.",
            
            definition: "A flower is a modified shoot with four whorls of modified leaves specialized for sexual reproduction",
            
            functions: {
                primary: "Sexual reproduction - production of seeds within fruits",
                attraction: "Attract pollinators through color, scent, nectar, shape",
                protection: "Sepals protect flower bud before opening",
                seedDispersal: "Develop into fruits that aid seed dispersal"
            },
            
            flowerParts: {
                whorl1_calyx: {
                    parts: "Sepals (collectively called calyx)",
                    location: "Outermost whorl",
                    function: "Protect flower bud before opening",
                    appearance: "Usually green, leaf-like (but can be colorful)",
                    number: "Typically 3, 4, or 5 (monocots in 3s, dicots in 4s or 5s)",
                    examples: "Rose has 5 sepals, lily has 3 colored sepals (look like petals)"
                },
                whorl2_corolla: {
                    parts: "Petals (collectively called corolla)",
                    location: "Second whorl, inside sepals",
                    function: "Attract pollinators (color, scent, nectar guides)",
                    appearance: "Often brightly colored, various shapes/sizes",
                    number: "Typically matches sepal number in same species",
                    modifications: {
                        nectaries: "Glands producing nectar (sugar solution)",
                        nectarGuides: "UV patterns guiding pollinators to center (visible to bees)",
                        spurs: "Elongated petals holding nectar (columbine, nasturtium)"
                    }
                },
                perianth: "Calyx + corolla together (sometimes undifferentiated as tepals)",
                
                whorl3_androecium: {
                    parts: "Stamens (collectively called androecium)",
                    location: "Third whorl, inside petals",
                    function: "Male reproductive structures - produce pollen",
                    number: "Variable (1 to hundreds)",
                    structure: {
                        filament: "Stalk supporting anther",
                        anther: {
                            description: "Pollen-producing structure at tip of filament",
                            parts: "Two lobes, each with two pollen sacs (microsporangia)",
                            function: "Produce and release pollen grains",
                            dehiscence: "Splits open when mature to release pollen"
                        }
                    }
                },
                
                whorl4_gynoecium: {
                    parts: "Carpels/pistil (collectively called gynoecium)",
                    location: "Innermost whorl, center of flower",
                    function: "Female reproductive structures - produce ovules",
                    number: "One or more carpels (may be separate or fused)",
                    structure: {
                        stigma: {
                            location: "Top of carpel",
                            function: "Receives pollen",
                            surface: "Often sticky or feathery to catch pollen"
                        },
                        style: {
                            location: "Between stigma and ovary",
                            function: "Elevates stigma; pollen tube grows through it",
                            structure: "Stalk-like"
                        },
                        ovary: {
                            location: "Base of carpel",
                            function: "Contains ovules",
                            fate: "Develops into fruit after fertilization",
                            ovules: {
                                location: "Inside ovary",
                                function: "Contain female gametophyte (embryo sac)",
                                number: "One to many per ovary",
                                fate: "Develop into seeds after fertilization"
                            }
                        }
                    },
                    terminology: "Pistil = one carpel or fused group of carpels"
                },
                
                receptacle: {
                    description: "Thickened end of flower stem (pedicel)",
                    function: "Attachment point for all flower parts",
                    fate: "Sometimes becomes part of fruit (apple, strawberry)"
                }
            },
            
            flowerTypes: {
                completeness: {
                    complete: "All four whorls present (rose, lily, tomato, apple)",
                    incomplete: "Missing one or more whorls (grasses lack petals, willow lacks petals and sepals)"
                },
                sexuality: {
                    perfect: {
                        description: "Both stamens and carpels present (hermaphrodite/bisexual)",
                        examples: "Most flowers (rose, lily, tomato, apple, sunflower)",
                        advantage: "Can self-pollinate if needed"
                    },
                    imperfect: {
                        description: "Either stamens OR carpels (unisexual)",
                        types: {
                            staminate: "Only stamens (male flowers)",
                            pistillate: "Only carpels (female flowers)"
                        },
                        monoecious: "Separate male and female flowers on SAME plant (corn, oak, squash, cucumber)",
                        dioecious: "Male and female flowers on DIFFERENT plants (holly, willow, kiwi, papaya, date palm)",
                        advantage: "Promotes outcrossing (genetic diversity)"
                    }
                },
                symmetry: {
                    radial: {
                        name: "Actinomorphic / Regular",
                        description: "Multiple planes of symmetry (like pie slices)",
                        examples: "Rose, lily, apple, buttercup, morning glory"
                    },
                    bilateral: {
                        name: "Zygomorphic / Irregular",
                        description: "Only one plane of symmetry",
                        examples: "Orchid, snapdragon, pea, pansy, violet",
                        advantage: "Often co-evolved with specific pollinators"
                    }
                }
            },
            
            pollenDevelopment: {
                location: "Anther (microsporangium)",
                process: [
                    "Diploid microspore mother cells (microsporocytes) in pollen sacs",
                    "Meiosis → 4 haploid microspores",
                    "Each microspore undergoes mitosis",
                    "Forms immature pollen grain with 2 cells:",
                    "  - Tube cell (larger, will form pollen tube)",
                    "  - Generative cell (smaller, will form sperm cells)",
                    "Pollen wall develops (tough, resistant, species-specific sculpture)",
                    "Anther matures and dehisces (opens) to release pollen"
                ],
                pollenGrain: {
                    structure: "Two cells (tube + generative) inside tough wall",
                    wall: "Sporopollenin (very resistant to decay, fossilizes well)",
                    size: "Varies by species: 10-100 μm",
                    number: "Millions produced per flower"
                }
            },
            
            ovuleDevelopment: {
                location: "Ovary (megasporangium within ovule)",
                process: [
                    "Diploid megaspore mother cell (megasporocyte) in ovule",
                    "Meiosis → 4 haploid megaspores",
                    "3 degenerate, 1 survives",
                    "Surviving megaspore undergoes mitosis (3 rounds)",
                    "Forms 8-nucleate embryo sac (female gametophyte):",
                    "  - 1 egg cell",
                    "  - 2 synergids (help guide pollen tube)",
                    "  - 2 polar nuclei (central cell)",
                    "  - 3 antipodal cells (opposite end, degenerate)"
                ],
                ovule: {
                    parts: "Nucellus (tissue), integuments (protective layers), micropyle (opening)",
                    fate: "Becomes seed after fertilization"
                }
            },
            
            pollination: {
                definition: "Transfer of pollen from anther to stigma",
                types: {
                    selfPollination: {
                        description: "Pollen to stigma of same flower or same plant",
                        advantage: "Ensures reproduction even without pollinators",
                        disadvantage: "Reduces genetic diversity",
                        mechanisms: "Anthers and stigma close together, same maturation time"
                    },
                    crossPollination: {
                        description: "Pollen to stigma of different plant (same species)",
                        advantage: "Increases genetic diversity, vigor, adaptability",
                        disadvantage: "Depends on pollinators or wind",
                        mechanisms: "Spatial or temporal separation of anthers/stigma, self-incompatibility"
                    }
                },
                
                vectors: {
                    wind: {
                        flowerCharacteristics: ["Small, inconspicuous", "No bright colors or scent", "No nectar", "Exposed stamens", "Feathery/large stigmas"],
                        pollen: "Small, light, smooth, abundant (overproduction)",
                        examples: "Grasses, corn, ragweed, oak, pine",
                        efficiency: "Low (most pollen wasted)",
                        allergens: "Major cause of hay fever"
                    },
                    insects: {
                        flowerCharacteristics: ["Bright colors (especially blue, yellow, UV)", "Scent", "Nectar", "Landing platform", "Nectar guides"],
                        pollen: "Sticky, sculptured (adheres to insect body)",
                        examples: "Rose, sunflower, orchid, apple, tomato",
                        pollinators: "Bees, butterflies, moths, beetles, flies",
                        coevolution: "Flower shape/color matches pollinator preferences and anatomy",
                        efficiency: "High (targeted delivery)"
                    },
                    birds: {
                        flowerCharacteristics: ["Red, orange, yellow colors", "Tubular shape", "No scent (birds have poor smell)", "Copious nectar", "Diurnal"],
                        examples: "Fuchsia, trumpet vine, honeysuckle, bird of paradise",
                        pollinators: "Hummingbirds (New World), sunbirds (Old World)",
                        adaptations: "Long tubular flowers match long bills/tongues"
                    },
                    bats: {
                        flowerCharacteristics: ["White or pale colors", "Strong fruity scent", "Open at night", "Large amounts of nectar/pollen", "Sturdy"],
                        examples: "Agave, baobab, some cacti, durian",
                        pollinators: "Nectar-feeding bats",
                        ecology: "Important in tropics"
                    },
                    water: {
                        description: "Pollen floats on water surface or underwater",
                        examples: "Eelgrass, some pondweeds",
                        rare: "Very uncommon pollination method"
                    }
                },
                
                preventingSelfPollination: {
                    structural: "Anthers and stigma at different heights or positions",
                    temporal: "Dichogamy - anthers and stigma mature at different times (protandry: anthers first; protogyny: stigma first)",
                    genetic: "Self-incompatibility - biochemical recognition prevents self-pollen germination"
                }
            },
            
            fertilization: {
                doubleFertilization: {
                    uniqueness: "Characteristic feature of angiosperms only",
                    process: [
                        "Pollen grain lands on stigma",
                        "Pollen germinates, forms pollen tube",
                        "Tube grows down through style toward ovary (guided by synergids)",
                        "Generative cell divides → 2 sperm cells (travel down tube)",
                        "Pollen tube enters ovule through micropyle",
                        "Tube discharges 2 sperm into embryo sac",
                        "FERTILIZATION 1 (Syngamy): Sperm (n) + Egg (n) → Zygote (2n) → embryo",
                        "FERTILIZATION 2 (Triple Fusion): Sperm (n) + 2 Polar nuclei (n+n) → Endosperm (3n)",
                        "Endosperm nourishes developing embryo"
                    ]
                },
                outcomes: {
                    embryo: "From zygote (2n), develops into new plant",
                    endosperm: "From triple fusion (3n), provides food for embryo",
                    seed: "Ovule develops into seed (embryo + endosperm + seed coat)",
                    fruit: "Ovary develops into fruit (protects seeds, aids dispersal)"
                }
            },
            
            fruitDevelopment: {
                from: "Ovary (sometimes with accessory parts)",
                function: "Protect seeds, aid seed dispersal",
                types: {
                    simple: {
                        description: "From single ovary of one flower",
                        examples: {
                            fleshy: "Tomato (berry), peach (drupe), grape (berry)",
                            dry: "Pea pod (legume), sunflower (achene), maple (samara)"
                        }
                    },
                    aggregate: {
                        description: "From multiple ovaries of one flower",
                        examples: "Raspberry, blackberry, strawberry (receptacle + achenes)"
                    },
                    multiple: {
                        description: "From ovaries of multiple flowers fused",
                        examples: "Pineapple, fig, mulberry"
                    },
                    accessory: {
                        description: "Includes tissue other than ovary",
                        examples: "Apple (from receptacle), strawberry (receptacle, achenes are 'seeds')"
                    }
                },
                classification: {
                    fleshy: "Berry, drupe, pome - often animal-dispersed",
                    dry: {
                        dehiscent: "Split open (legume, follicle, capsule) - often wind-dispersed",
                        indehiscent: "Don't split (achene, nut, caryopsis) - wind or animal"
                    }
                }
            },
            
            seedDevelopment: {
                from: "Ovule",
                parts: {
                    embryo: {
                        origin: "Zygote (2n)",
                        parts: "Cotyledons (seed leaves), epicotyl (shoot), hypocotyl, radicle (root)",
                        number: "One (monocots) or two (dicots) cotyledons"
                    },
                    endosperm: {
                        origin: "Triple fusion (3n)",
                        function: "Food storage - nourishes embryo during germination",
                        fate: {
                            monocots: "Persists in mature seed (corn, wheat)",
                            dicots: "Often absorbed by cotyledons during development (beans, peas)"
                        }
                    },
                    seedCoat: {
                        origin: "Integuments of ovule",
                        function: "Protection, prevent desiccation, regulate germination",
                        types: "Hard (nuts), soft (berries), winged (maple), hairy (cotton)"
                    }
                }
            },
            
            pollinationSyndromes: {
                definition: "Suites of floral characteristics associated with particular pollinator groups",
                examples: {
                    bee: "Blue/yellow, sweet scent, nectar guides, landing platform",
                    butterfly: "Bright colors, narrow tubes, diurnal",
                    moth: "White/pale, strong scent, open at night",
                    hummingbird: "Red/orange, tubular, no scent, diurnal",
                    bat: "White, strong scent, nocturnal, sturdy",
                    wind: "Small, green, no scent/nectar, exposed anthers"
                }
            },
            
            comparison: {
                monocotsVsDicots: {
                    flowerParts: "In multiples of 3 vs. multiples of 4 or 5",
                    examples: "Lily (3 petals, 3 sepals, 6 stamens) vs. Rose (5 petals, 5 sepals)"
                },
                perfectVsImperfect: {
                    parts: "Both stamens and carpels vs. Only one",
                    advantage: "Can self-pollinate vs. Promotes outcrossing"
                },
                windVsInsect: {
                    color: "Green/small vs. Bright/large",
                    pollen: "Light, abundant vs. Sticky, less",
                    efficiency: "Low (wasteful) vs. High (targeted)"
                }
            },
            
            applications: [
                "Agriculture: Understanding pollination requirements for crop production",
                "Horticulture: Breeding ornamental flowers, hybrid seed production",
                "Conservation: Protecting pollinators to maintain plant reproduction",
                "Food security: >75% of crop species depend on animal pollination",
                "Understanding co-evolution of plants and pollinators",
                "Taxonomy: Flower characteristics used to classify plants",
                "Biotechnology: Genetic modification of crops (often targets flower/fruit development)"
            ]
        };
        
        return content;
    }

    handlePlantTissues(problem) {
        const content = {
            topic: "Plant Tissue Systems",
            category: 'plant_anatomy',
            summary: "Plant tissues are groups of cells working together for specific functions. Three tissue systems (dermal, ground, vascular) are organized into organs (roots, stems, leaves, flowers).",
            
            tissueSystems: {
                dermal: {
                    function: "Protection, gas exchange, water regulation",
                    location: "Outermost layer covering entire plant body",
                    types: {
                        primary: {
                            name: "Epidermis",
                            structure: "Single layer of tightly packed cells",
                            coverage: "Covers leaves, young stems, roots, flowers, fruits, seeds",
                            cuticle: "Waxy covering on aerial parts (reduces water loss)",
                            specializations: {
                                guardCells: "Paired cells forming stomata (gas exchange)",
                                trichomes: "Hairs (reduce water loss, defense, trap insects)",
                                rootHairs: "Extensions increasing absorption area"
                            },
                            characteristics: "Usually lacks chloroplasts (except guard cells)"
                        },
                        secondary: {
                            name: "Periderm (bark)",
                            occurrence: "Woody plants (replaces epidermis)",
                            components: {
                                cork: "Dead cells with suberin (waterproof, insulating)",
                                corkCambium: "Meristem producing cork",
                                phelloderm: "Living parenchyma cells inside cork cambium"
                            },
                            function: "Protection, prevent water loss, insulation",
                            lenticels: "Pores for gas exchange in bark"
                        }
                    }
                },
                
                ground: {
                    function: "Storage, photosynthesis, support",
                    location: "Between dermal and vascular tissues",
                    regions: {
                        cortex: "Between epidermis and vascular tissue (roots, stems)",
                        pith: "Center of stem (inside vascular bundles)",
                        mesophyll: "Interior of leaf (photosynthetic tissue)"
                    },
                    tissues: {
                        parenchyma: {
                            description: "Most common plant tissue",
                            cells: "Living, thin primary walls, large central vacuole, polyhedral shape",
                            function: ["Storage (starch, water, oils)", "Photosynthesis (if chloroplasts)", "Wound healing", "Regeneration"],
                            location: "Throughout plant - cortex, pith, mesophyll, flesh of fruits",
                            versatility: "Can differentiate into other cell types",
                            examples: "Potato tuber tissue, apple flesh, leaf mesophyll"
                        },
                        collenchyma: {
                            description: "Flexible support tissue",
                            cells: "Living, unevenly thickened primary walls (cellulose), elongated",
                            function: "Flexible support in growing tissues (can stretch)",
                            location: "Just beneath epidermis in young stems, petioles, leaf veins",
                            wallThickening: "Corners or along length of cells",
                            examples: "Celery strings, stems of non-woody plants",
                            advantage: "Provides support while allowing growth"
                        },
                        sclerenchyma: {
                            description: "Rigid support tissue",
                            cells: "Dead at maturity, thick secondary walls (lignified), no protoplast",
                            function: "Rigid support, protection",
                            types: {
                                fibers: {
                                    description: "Long, slender, tapered cells",
                                    location: "Vascular bundles, bark, around seeds",
                                    function: "Support, tensile strength",
                                    uses: "Hemp, flax, jute fibers for textiles and rope"
                                },
                                sclereids: {
                                    description: "Variable shape, shorter than fibers",
                                    types: "Stone cells, star cells, etc.",
                                    location: "Seed coats, nutshells, pear flesh",
                                    function: "Protection, deterrent to herbivores",
                                    examples: "Gritty texture in pears (stone cells), walnut shells"
                                }
                            },
                            characteristics: "Cannot grow once mature (walls too rigid)"
                        }
                    }
                },
                
                vascular: {
                    function: "Transport and support",
                    location: "Throughout plant as continuous system (roots to leaves)",
                    organization: "Vascular bundles (discrete strands) or continuous cylinder",
                    components: {
                        xylem: {
                            function: "Water and mineral transport (roots → leaves)",
                            direction: "Unidirectional upward",
                            mechanism: ["Transpiration pull (main)", "Root pressure", "Capillarity"],
                            cellTypes: {
                                tracheids: {
                                    structure: "Long, tapered cells with pits",
                                    occurrence: "All vascular plants",
                                    waterMovement: "Pit-to-pit between cells",
                                    primitive: "Evolutionarily older"
                                },
                                vesselElements: {
                                    structure: "Short, wide cells with perforated end walls",
                                    occurrence: "Angiosperms (and some other groups)",
                                    arrangement: "Stack to form continuous vessel",
                                    efficiency: "More efficient than tracheids",
                                    derived: "Evolutionarily more advanced"
                                },
                                xylemFibers: "Support (sclerenchyma)",
                                xylemParenchyma: "Storage, lateral transport"
                            },
                            characteristics: "Cells dead at maturity, lignified walls",
                            secondaryXylem: "Wood in woody plants"
                        },
                        phloem: {
                            function: "Sugar and organic compound transport",
                            direction: "Bidirectional (source → sink)",
                            mechanism: "Pressure-flow (mass flow) hypothesis",
                            cellTypes: {
                                sieveTubeElements: {
                                    structure: "Living cells, no nucleus at maturity, sieve plates at ends",
                                    occurrence: "Angiosperms",
                                    contents: "Modified cytoplasm, specialized proteins",
                                    transport: "Sugars, amino acids, hormones, RNA, proteins"
                                },
                                sieveCells: {
                                    structure: "Similar but less specialized than sieve tube elements",
                                    occurrence: "Gymnosperms and seedless vascular plants"
                                },
                                companionCells: {
                                    function: "Metabolic support for sieve tube elements",
                                    location: "Adjacent to each sieve tube element",
                                    connection: "Plasmodesmata link to sieve tubes",
                                    contents: "Nucleus, mitochondria, ribosomes",
                                    note: "Sieve tube and companion cell from same mother cell"
                                },
                                phloemFibers: "Support",
                                phloemParenchyma: "Storage"
                            },
                            characteristics: "Living cells, cellulose walls"
                        }
                    }
                }
            },
            
            meristems: {
                definition: "Regions of actively dividing cells (undifferentiated)",
                function: "Produce new cells for growth",
                types: {
                    apical: {
                        location: "Tips of roots and shoots",
                        function: "Primary growth (increase in length)",
                        origin: "Present from embryo, persist throughout life",
                        organization: {
                            shootApex: {
                                structure: "Dome-shaped, produces leaves, stem tissue, flowers",
                                protectione: "Protected by young leaves or bud scales",
                                derivatives: "Protoderm (epidermis), ground meristem (cortex/pith), procambium (vascular tissue)"
                            },
                            rootApex: {
                                structure: "Produces root tissues",
                                protection: "Protected by root cap",
                                zones: "Produces root cap, meristematic zone, elongation zone, maturation zone"
                            }
                        }
                    },
                    lateral: {
                        location: "Cylinders along sides of stems and roots",
                        function: "Secondary growth (increase in girth)",
                        occurrence: "Woody plants (dicots and gymnosperms)",
                        types: {
                            vascularCambium: {
                                location: "Between xylem and phloem",
                                products: "Secondary xylem (inward) + secondary phloem (outward)",
                                result: "Increased diameter, wood formation",
                                activity: "Seasonal (active in growing season, dormant in winter)"
                            },
                            corkCambium: {
                                location: "In cortex or phloem",
                                products: "Cork (outward) + phelloderm (inward)",
                                result: "Bark formation, replace epidermis"
                            }
                        }
                    },
                    intercalary: {
                        location: "At nodes or bases of leaves",
                        occurrence: "Monocots (especially grasses)",
                        function: "Allow regrowth after grazing or mowing",
                        example: "Why grass continues growing after being cut",
                        advantage: "Meristem not removed when top is cut"
                    }
                }
            },
            
            tissueClassification: {
                simple: {
                    definition: "Composed of one cell type",
                    examples: "Parenchyma, collenchyma, sclerenchyma"
                },
                complex: {
                    definition: "Composed of two or more cell types",
                    examples: "Xylem, phloem, epidermis (with guard cells, trichomes)"
                }
            },
            
            growth: {
                primary: {
                    source: "Apical meristems",
                    result: "Increase in length/height",
                    tissues: "Primary xylem, primary phloem, epidermis, cortex, pith",
                    occurrence: "All plants",
                    herbaceous: "Only primary growth"
                },
                secondary: {
                    source: "Lateral meristems (vascular cambium, cork cambium)",
                    result: "Increase in girth/diameter",
                    tissues: "Secondary xylem (wood), secondary phloem, periderm (bark)",
                    occurrence: "Woody plants only (most dicots and gymnosperms)",
                    annualRings: "Visible in cross-section in temperate climates"
                }
            },
            
            comparison: {
                parenchymaVsCollenchymaVsSclerenchyma: {
                    walls: "Thin primary vs. Uneven primary vs. Thick secondary (lignified)",
                    living: "Yes vs. Yes vs. No (at maturity)",
                    function: "Storage, photosynthesis vs. Flexible support vs. Rigid support",
                    growth: "Can expand vs. Can expand vs. Cannot expand"
                },
                xylemVsPhloem: {
                    transport: "Water, minerals vs. Sugars, organics",
                    direction: "Up only vs. Bidirectional",
                    cells: "Dead vs. Living",
                    walls: "Lignified vs. Cellulose",
                    mechanism: "Cohesion-tension vs. Pressure-flow"
                },
                primaryVsSecondaryGrowth: {
                    meristem: "Apical vs. Lateral",
                    direction: "Length vs. Girth",
                    occurrence: "All plants vs. Woody plants only",
                    tissues: "Primary xylem/phloem vs. Secondary xylem/phloem"
                },
                epidermisVsPeriderm: {
                    origin: "Primary tissue vs. Secondary tissue",
                    layers: "Usually single vs. Multiple",
                    occurrence: "Young plants vs. Woody plants",
                    cells: "Living vs. Dead (cork)"
                }
            },
            
            applications: [
                "Forestry: Understanding wood (secondary xylem) formation and quality",
                "Agriculture: Optimizing plant growth and development",
                "Horticulture: Grafting (matching vascular cambium), pruning, propagation",
                "Biotechnology: Tissue culture, plant regeneration from single cells",
                "Textiles: Plant fibers (cotton, flax, hemp) from sclerenchyma",
                "Understanding plant responses to environmental stress",
                "Breeding crops for improved structure and yield"
            ]
        };
        
        return content;
    }

    // Additional utility methods would go here (same as MolecularBiologyWorkbook)
    // Including methods for generating workbooks, diagrams, rendering, etc.


// ========================================
// MAIN PROBLEM PROCESSING METHODS
// ========================================

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
        throw new Error(`Unable to recognize plant structure topic: ${topic}`);
    }

    return {
        originalTopic: topic,
        type: topicType,
        subTopic: subTopic,
        parameters: { ...parameters },
        context: { ...context },
        difficulty: this.plantTopics[topicType].difficulty,
        prerequisites: this.plantTopics[topicType].prerequisites,
        parsedAt: new Date().toISOString()
    };
}

handlePlantProblem(config) {
    const { topic, parameters, subTopic, context, requestType } = config;

    try {
        const isExperimentRequest = requestType === 'experiment' || 
                                   (typeof topic === 'string' && topic.toLowerCase().includes('experiment'));

        if (isExperimentRequest) {
            return this.handleExperimentRequest(config);
        } else {
            this.currentProblem = this.parsePlantProblem(topic, parameters, subTopic, context);
            this.currentContent = this.getPlantContent(this.currentProblem);
            
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
            
            this.contentSteps = this.generatePlantContent(this.currentProblem, this.currentContent);
            
            // Generate workbook (handles async internally)
            this.generatePlantWorkbook();

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
        throw new Error(`Failed to process plant structure request: ${error.message}`);
    }
}

getPlantContent(problem) {
    const handler = this.plantTopics[problem.type]?.handler;
    if (!handler) {
        throw new Error(`No handler available for plant structure topic: ${problem.type}`);
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
                    if (typeof item === 'object' && item.plant) {
                        return parameters.specificItems.some(spec =>
                            item.plant.toLowerCase().includes(spec.toLowerCase())
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

    // Filter by plant type (monocot vs dicot)
    if (parameters.plantType) {
        const plantType = parameters.plantType.toLowerCase();
        if (filtered.comparison) {
            Object.keys(filtered.comparison).forEach(key => {
                if (key.toLowerCase().includes('monocot') || key.toLowerCase().includes('dicot')) {
                    if (!key.toLowerCase().includes(plantType)) {
                        delete filtered.comparison[key];
                    }
                }
            });
        }
    }

    return filtered;
}

handleExperimentRequest(config) {
    const { topic, parameters, experimentId } = config;

    if (experimentId && this.plantExperiments[experimentId]) {
        this.currentExperiment = this.plantExperiments[experimentId];
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
    
    // First pass: exact name match
    for (const [id, exp] of Object.entries(this.plantExperiments)) {
        if (exp.name.toLowerCase().includes(topicLower)) {
            return exp;
        }
    }

    // Second pass: related topics match
    for (const [id, exp] of Object.entries(this.plantExperiments)) {
        if (exp.relatedTopics.some(t => topicLower.includes(t.toLowerCase()))) {
            return exp;
        }
    }

    // Third pass: category match
    for (const [id, exp] of Object.entries(this.plantExperiments)) {
        if (exp.category.toLowerCase().includes(topicLower)) {
            return exp;
        }
    }

    // Fourth pass: scientist name match
    for (const [id, exp] of Object.entries(this.plantExperiments)) {
        if (exp.historicalBackground?.scientist?.toLowerCase().includes(topicLower)) {
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
        if (typeof labExp.background === 'object' && !Array.isArray(labExp.background)) {
            Object.entries(labExp.background).forEach(([key, value]) => {
                if (Array.isArray(value)) {
                    formatted.push([`  ${key}:`, '']);
                    value.forEach(item => formatted.push(['    -', item]));
                } else {
                    formatted.push([`  ${key}:`, value]);
                }
            });
        } else if (typeof labExp.background === 'string') {
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
            labExp.safetyPrecautions.forEach(note => {
                formatted.push(['  ⚠', note]);
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
                } else if (step.match(/^[A-Z][A-Z\s]+:$/)) {
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
                            subValue.forEach((item, i) => formatted.push([`    ${i + 1}.`, item]));
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
        Object.entries(labExp.expectedResults).forEach(([key, value]) => {
            formatted.push([`  ${key}:`, '']);
            if (Array.isArray(value)) {
                value.forEach(obs => formatted.push(['    -', obs]));
            } else if (typeof value === 'object') {
                Object.entries(value).forEach(([subKey, subValue]) => {
                    formatted.push([`    ${subKey}:`, '']);
                    if (Array.isArray(subValue)) {
                        subValue.forEach(item => formatted.push(['      -', item]));
                    } else {
                        formatted.push(['      ', subValue]);
                    }
                });
            } else {
                formatted.push(['    ', value]);
            }
        });
    }

    if (labExp.dataTable) {
        formatted.push(['', '']);
        formatted.push(['Data Table', '']);
        if (Array.isArray(labExp.dataTable)) {
            labExp.dataTable.forEach((row, index) => {
                if (index === 0) {
                    formatted.push(['  Headers:', row.join(' | ')]);
                } else {
                    formatted.push([`  Row ${index}:`, row.join(' | ')]);
                }
            });
        }
    }

    if (labExp.observations) {
        formatted.push(['', '']);
        formatted.push(['Observations', '']);
        if (Array.isArray(labExp.observations)) {
            labExp.observations.forEach(obs => formatted.push(['  •', obs]));
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

    if (labExp.graphing) {
        formatted.push(['', '']);
        formatted.push(['Graphing Instructions', '']);
        Object.entries(labExp.graphing).forEach(([key, value]) => {
            formatted.push([`  ${key}:`, '']);
            Object.entries(value).forEach(([subKey, subValue]) => {
                formatted.push([`    ${subKey}:`, subValue]);
            });
        });
    }

    if (labExp.analysis) {
        formatted.push(['', '']);
        formatted.push(['Analysis', '']);
        if (typeof labExp.analysis === 'object') {
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
    }

    if (labExp.calculations) {
        formatted.push(['', '']);
        formatted.push(['Calculations', '']);
        Object.entries(labExp.calculations).forEach(([key, value]) => {
            formatted.push([`  ${key}:`, value]);
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
        } else {
            formatted.push(['  ', labExp.conclusions]);
        }
    }

    if (labExp.connectionToHistorical || labExp.connectionToDarwin || labExp.connectionToVonSachs) {
        formatted.push(['', '']);
        const connection = labExp.connectionToHistorical || labExp.connectionToDarwin || labExp.connectionToVonSachs;
        formatted.push(['Connection to Historical Experiment', '']);
        if (Array.isArray(connection)) {
            connection.forEach(item => formatted.push(['  •', item]));
        } else {
            formatted.push(['  ', connection]);
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

getRelatedExperiments(topicType) {
    const related = [];
    
    Object.entries(this.plantExperiments).forEach(([id, experiment]) => {
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
// UTILITY AND HELPER METHODS
// ========================================

getAllExperiments() {
    return Object.entries(this.plantExperiments).map(([id, exp]) => ({
        id: id,
        name: exp.name,
        category: exp.category,
        relatedTopics: exp.relatedTopics,
        scientist: exp.historicalBackground?.scientist,
        year: exp.historicalBackground?.year
    }));
}

getAllTopics() {
    return Object.entries(this.plantTopics).map(([id, topic]) => ({
        id: id,
        name: topic.name,
        category: topic.category,
        description: topic.description,
        difficulty: topic.difficulty,
        prerequisites: topic.prerequisites,
        relatedExperiments: topic.relatedExperiments || []
    }));
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
            adapted.focusAreas = ['basic structure', 'main functions', 'common examples'];
            break;
        
        case 'intermediate':
            adapted.vocabulary = 'standard';
            adapted.examples = this.selectMixedExamples(content.examples);
            adapted.depth = 'moderate';
            adapted.focusAreas = ['detailed structure', 'tissue organization', 'adaptations'];
            break;
        
        case 'advanced':
            adapted.vocabulary = 'technical';
            adapted.examples = this.selectAdvancedExamples(content.examples);
            adapted.depth = 'comprehensive';
            adapted.research = this.addResearchConnections(content);
            adapted.focusAreas = ['cellular mechanisms', 'molecular basis', 'evolutionary perspectives'];
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
        currentResearch: `Current research in plant ${content.topic} includes investigations into molecular mechanisms, genetic regulation, and evolutionary adaptations...`,
        openQuestions: "Unresolved questions include the precise signaling pathways, environmental response mechanisms, and developmental regulation...",
        techniques: "Advanced techniques include confocal microscopy, RNA-seq for gene expression, isotope tracing for transport studies, and CRISPR for gene editing..."
    };
}

getContextualScenarios(topicType) {
    return this.contextualScenarios[topicType] || [];
}

getMetacognitivePrompts(topicType) {
    const topicName = this.plantTopics[topicType]?.name || topicType;
    
    const prompts = {
        beforeLearning: this.metacognitivePrompts.beforeLearning.map(p => 
            p.replace('{topic}', topicName).replace('{structure}', topicType)
        ),
        duringLearning: this.metacognitivePrompts.duringLearning.map(p => 
            p.replace('{concept}', topicType).replace('{related_concept}', 'other plant structures')
        ),
        afterLearning: this.metacognitivePrompts.afterLearning.map(p => 
            p.replace('{topic}', topicName)
        ),
        problemSolving: this.metacognitivePrompts.problemSolving
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

// ========================================
// CONTENT GENERATION METHODS
// ========================================

generatePlantContent(problem, content) {
    const contentSections = [];

    // Generate overview section
    contentSections.push(this.generateOverviewSection(problem, content));

    // Generate specific content sections based on content structure
    if (content.classification) {
        contentSections.push(this.generateClassificationSection(content));
    }

    if (content.externalStructure || content.externalMorphology) {
        contentSections.push(this.generateExternalStructureSection(content));
    }

    if (content.internalStructure || content.internalAnatomy) {
        contentSections.push(this.generateInternalAnatomySection(content));
    }

    if (content.functions) {
        contentSections.push(this.generateFunctionsSection(content));
    }

    if (content.adaptations) {
        contentSections.push(this.generateAdaptationsSection(content));
    }

    if (content.tissueSystems || content.vascularTissues) {
        contentSections.push(this.generateTissueSystemsSection(content));
    }

    if (content.growth || content.secondaryGrowth) {
        contentSections.push(this.generateGrowthSection(content));
    }

    if (content.stemModifications || content.leafModifications) {
        contentSections.push(this.generateModificationsSection(content));
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

    // Add applications
    if (content.applications) {
        contentSections.push(this.generateApplicationsSection(content));
    }

    return contentSections;
}

generateOverviewSection(problem, content) {
    return {
        type: 'overview',
        title: content.topic || 'Plant Structure Overview',
        category: content.category,
        summary: content.summary,
        keyPoints: this.extractKeyPoints(content),
        difficulty: problem.difficulty
    };
}

generateClassificationSection(content) {
    return {
        type: 'classification',
        title: 'Classification and Types',
        data: content.classification
    };
}

generateExternalStructureSection(content) {
    return {
        type: 'external_structure',
        title: 'External Structure and Morphology',
        data: content.externalStructure || content.externalMorphology
    };
}

generateInternalAnatomySection(content) {
    return {
        type: 'internal_anatomy',
        title: 'Internal Anatomy and Tissue Organization',
        data: content.internalStructure || content.internalAnatomy
    };
}

generateFunctionsSection(content) {
    return {
        type: 'functions',
        title: 'Functions',
        data: content.functions
    };
}

generateAdaptationsSection(content) {
    return {
        type: 'adaptations',
        title: 'Adaptations to Different Environments',
        data: content.adaptations
    };
}

generateTissueSystemsSection(content) {
    return {
        type: 'tissue_systems',
        title: 'Tissue Systems',
        data: content.tissueSystems || content.vascularTissues
    };
}

generateGrowthSection(content) {
    return {
        type: 'growth',
        title: 'Growth and Development',
        data: content.growth || content.secondaryGrowth
    };
}

generateModificationsSection(content) {
    return {
        type: 'modifications',
        title: 'Structural Modifications',
        data: content.stemModifications || content.leafModifications || content.modifications
    };
}

generateComparisonsSection(content) {
    return {
        type: 'comparisons',
        title: 'Comparative Analysis',
        data: content.comparison
    };
}

generateExamplesSection(content) {
    return {
        type: 'examples',
        title: 'Examples',
        data: content.examples
    };
}

generateContextualScenariosSection(content) {
    return {
        type: 'contextual_scenarios',
        title: 'Real-World Applications and Scenarios',
        data: content.contextualScenarios
    };
}

generateRelatedExperimentsSection(content) {
    return {
        type: 'related_experiments',
        title: 'Related Laboratory Experiments',
        data: content.relatedExperiments
    };
}

generateMetacognitiveSection(content) {
    return {
        type: 'metacognitive_prompts',
        title: 'Reflection Questions',
        data: content.metacognitivePrompts
    };
}

generateApplicationsSection(content) {
    return {
        type: 'applications',
        title: 'Applications',
        data: content.applications
    };
}

extractKeyPoints(content) {
    const keyPoints = [];

    if (content.summary) keyPoints.push(content.summary);
    
    // Extract from various content structures
    if (content.classification && content.classification.byType) {
        Object.keys(content.classification.byType).forEach(key => {
            const item = content.classification.byType[key];
            if (item.description) {
                keyPoints.push(`${key}: ${item.description}`);
            }
        });
    }

    if (content.functions) {
        if (typeof content.functions === 'object' && !Array.isArray(content.functions)) {
            Object.entries(content.functions).forEach(([key, value]) => {
                if (typeof value === 'string') {
                    keyPoints.push(`${key}: ${value}`);
                }
            });
        }
    }

    return keyPoints.slice(0, 5);
}

// Method to get experiment by scientist name
getExperimentByScientist(scientistName) {
    for (const [id, exp] of Object.entries(this.plantExperiments)) {
        if (exp.historicalBackground?.scientist?.toLowerCase().includes(scientistName.toLowerCase())) {
            return { id, ...exp };
        }
    }
    return null;
}

// Method to get experiments by category
getExperimentsByCategory(category) {
    return Object.entries(this.plantExperiments)
        .filter(([id, exp]) => exp.category.toLowerCase() === category.toLowerCase())
        .map(([id, exp]) => ({ id, ...exp }));
}

// Method to get topics by difficulty
getTopicsByDifficulty(difficulty) {
    return Object.entries(this.plantTopics)
        .filter(([id, topic]) => topic.difficulty === difficulty)
        .map(([id, topic]) => ({ id, ...topic }));
}

// ========================================
// WORKBOOK GENERATION METHODS
// ========================================

generatePlantWorkbook() {
    if (!this.currentContent || !this.currentProblem) return;

    const workbook = this.createWorkbookStructure();
    workbook.title = 'Plant Structure Workbook';

    // Start diagram generation in background if needed
    if (this.includeDiagramsInWorkbook) {
        this.diagramsPromise = this.generatePlantDiagramDataAsync();
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
    workbook.title = 'Plant Structure Experiment Workbook';

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
                this.plantTopics[topic]?.name || topic,
                this.plantTopics[topic]?.description || ''
            ])
        });
    }

    this.currentWorkbook = workbook;
}

// Async helper that runs in background
async generatePlantDiagramDataAsync() {
    if (!this.currentContent) return;

    const { type } = this.currentProblem;

    // Get relevant diagram keys
    const diagramKeys = this.getRelevantPlantDiagrams(type);

    this.diagramData = {
        type: type,
        diagrams: diagramKeys,
        renderedImages: [],
        status: 'rendering',
        placeholder: false,
        note: "Plant structure diagrams"
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
        title: 'Plant Structure Diagrams',
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
        title: 'Plant Structure Diagrams',
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

getRelevantPlantDiagrams(topicType) {
    const diagramMap = {
        root_systems: [
            "rootStructure",
            "rootCrossSection",
            "rootHair",
            "rootTypes",
            "rootZones"
        ],
        stem_anatomy: [
            "stemCrossSection",
            "monocotStem",
            "dicotStem",
            "vascularBundle",
            "secondaryGrowth",
            "woodAnatomy"
        ],
        leaf_structure: [
            "leafCrossSection",
            "leafAnatomy",
            "stomata",
            "mesophyllStructure",
            "leafVenation",
            "guardCells"
        ],
        flower_anatomy: [
            "flowerStructure",
            "flowerParts",
            "pollenDevelopment",
            "ovuleStructure",
            "doubleFertilization",
            "flowerTypes"
        ],
        plant_tissues: [
            "tissueTypes",
            "meristems",
            "xylemPhloem",
            "epidermis",
            "parenchymaCollenchymaSclerenchyma",
            "primarySecondaryGrowth"
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
async exportAllDiagramsForTopic(outputDir = './plant_diagrams') {
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
    console.log('Plant diagram cache cleared');
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
        title: 'Plant Structure Workbook',
        timestamp: new Date().toISOString(),
        theme: this.theme,
        dimensions: { width: this.width, height: this.height },
        learnerLevel: this.learnerProfile.currentLevel,
        sections: []
    };
}

// ========================================
// WORKBOOK SECTION CREATION METHODS
// ========================================

createProblemSection() {
    if (!this.currentProblem) return null;

    return {
        title: 'Plant Structure Topic',
        type: 'problem',
        data: [
            ['Topic', this.plantTopics[this.currentProblem.type]?.name || this.currentProblem.originalTopic],
            ['Category', this.plantTopics[this.currentProblem.type]?.category || 'plant_anatomy'],
            ['Difficulty', this.currentProblem.difficulty],
            ['Prerequisites', this.currentProblem.prerequisites?.join(', ') || 'None']
        ]
    };
}

createContentOverviewSection() {
    if (!this.currentContent) return null;

    const overviewData = [
        ['Topic', this.currentContent.topic],
        ['Category', this.currentContent.category],
        ['Summary', this.currentContent.summary]
    ];

    // Add key functions if available
    if (this.currentContent.functions) {
        const functions = typeof this.currentContent.functions === 'object' 
            ? Object.entries(this.currentContent.functions).map(([k, v]) => `${k}: ${v}`).join('; ')
            : this.currentContent.functions;
        overviewData.push(['Key Functions', functions]);
    }

    return {
        title: 'Content Overview',
        type: 'overview',
        data: overviewData
    };
}

createDetailedContentSection() {
    if (!this.currentContent) return null;

    const sections = [];

    // Classification
    if (this.currentContent.classification) {
        sections.push({
            title: 'Classification',
            type: 'classification',
            data: this.flattenObject(this.currentContent.classification)
        });
    }

    // External Structure
    if (this.currentContent.externalStructure || this.currentContent.externalMorphology) {
        sections.push({
            title: 'External Structure',
            type: 'external_structure',
            data: this.flattenObject(this.currentContent.externalStructure || this.currentContent.externalMorphology)
        });
    }

    // Internal Anatomy
    if (this.currentContent.internalAnatomy || this.currentContent.internalStructure) {
        sections.push({
            title: 'Internal Anatomy',
            type: 'internal_anatomy',
            data: this.flattenObject(this.currentContent.internalAnatomy || this.currentContent.internalStructure)
        });
    }

    // Tissue Systems
    if (this.currentContent.tissueSystems || this.currentContent.vascularTissues) {
        sections.push({
            title: 'Tissue Systems',
            type: 'tissue_systems',
            data: this.flattenObject(this.currentContent.tissueSystems || this.currentContent.vascularTissues)
        });
    }

    // Growth and Development
    if (this.currentContent.growth || this.currentContent.secondaryGrowth) {
        sections.push({
            title: 'Growth and Development',
            type: 'growth',
            data: this.flattenObject(this.currentContent.growth || this.currentContent.secondaryGrowth)
        });
    }

    // Adaptations
    if (this.currentContent.adaptations) {
        sections.push({
            title: 'Adaptations',
            type: 'adaptations',
            data: this.flattenObject(this.currentContent.adaptations)
        });
    }

    // Modifications
    if (this.currentContent.stemModifications || this.currentContent.leafModifications || this.currentContent.modifications) {
        sections.push({
            title: 'Structural Modifications',
            type: 'modifications',
            data: this.flattenObject(
                this.currentContent.stemModifications || 
                this.currentContent.leafModifications || 
                this.currentContent.modifications
            )
        });
    }

    return {
        title: 'Detailed Content',
        type: 'detailed_content',
        subsections: sections
    };
}

createComparisonsWorkbookSection() {
    if (!this.currentContent?.comparison) return null;

    return {
        title: 'Comparative Analysis',
        type: 'comparisons',
        data: this.flattenObject(this.currentContent.comparison)
    };
}

createExamplesApplicationsSection() {
    if (!this.currentContent) return null;

    const data = [];

    // Examples
    if (this.currentContent.examples && Array.isArray(this.currentContent.examples)) {
        data.push(['EXAMPLES', '']);
        this.currentContent.examples.forEach((example, index) => {
            if (typeof example === 'object') {
                data.push([`Example ${index + 1}:`, '']);
                Object.entries(example).forEach(([key, value]) => {
                    data.push([`  ${key}`, value]);
                });
            } else {
                data.push([`${index + 1}.`, example]);
            }
        });
    }

    // Applications
    if (this.currentContent.applications && Array.isArray(this.currentContent.applications)) {
        data.push(['', '']);
        data.push(['APPLICATIONS', '']);
        this.currentContent.applications.forEach((app, index) => {
            data.push([`${index + 1}.`, app]);
        });
    }

    return data.length > 0 ? {
        title: 'Examples and Applications',
        type: 'examples_applications',
        data: data
    } : null;
}

createContextualScenariosWorkbookSection() {
    if (!this.currentContent?.contextualScenarios || this.currentContent.contextualScenarios.length === 0) {
        return null;
    }

    const data = [];
    this.currentContent.contextualScenarios.forEach((scenario, index) => {
        data.push([`Scenario ${index + 1}`, scenario.scenario]);
        data.push(['Context', scenario.context]);
        data.push(['Application', scenario.application]);
        data.push(['Question', scenario.question]);
        data.push(['', '']);
    });

    return {
        title: 'Real-World Scenarios',
        type: 'contextual_scenarios',
        data: data
    };
}

createRelatedExperimentsWorkbookSection() {
    if (!this.currentContent?.relatedExperiments || this.currentContent.relatedExperiments.length === 0) {
        return null;
    }

    const data = [];
    this.currentContent.relatedExperiments.forEach((exp, index) => {
        data.push([`${index + 1}. ${exp.name}`, '']);
        data.push(['  Category', exp.category]);
        if (exp.historicalScientist) {
            data.push(['  Scientist', exp.historicalScientist]);
        }
        if (exp.labTitle) {
            data.push(['  Lab Title', exp.labTitle]);
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
    const topicMisconceptions = this.commonMisconceptions[this.currentProblem?.type];
    if (!topicMisconceptions) return null;

    const data = [];
    Object.entries(topicMisconceptions).forEach(([category, misconceptions]) => {
        data.push([category.toUpperCase(), '']);
        misconceptions.forEach((misconception, index) => {
            data.push([`  ${index + 1}.`, misconception]);
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
    if (!this.currentContent?.metacognitivePrompts) return null;

    const data = [];
    
    if (this.currentContent.metacognitivePrompts.beforeLearning) {
        data.push(['BEFORE LEARNING', '']);
        this.currentContent.metacognitivePrompts.beforeLearning.forEach((prompt, i) => {
            data.push([`${i + 1}.`, prompt]);
        });
        data.push(['', '']);
    }

    if (this.currentContent.metacognitivePrompts.duringLearning) {
        data.push(['DURING LEARNING', '']);
        this.currentContent.metacognitivePrompts.duringLearning.forEach((prompt, i) => {
            data.push([`${i + 1}.`, prompt]);
        });
        data.push(['', '']);
    }

    if (this.currentContent.metacognitivePrompts.afterLearning) {
        data.push(['AFTER LEARNING', '']);
        this.currentContent.metacognitivePrompts.afterLearning.forEach((prompt, i) => {
            data.push([`${i + 1}.`, prompt]);
        });
        data.push(['', '']);
    }

    if (this.currentContent.metacognitivePrompts.problemSolving) {
        data.push(['PROBLEM SOLVING', '']);
        this.currentContent.metacognitivePrompts.problemSolving.forEach((prompt, i) => {
            data.push([`${i + 1}.`, prompt]);
        });
    }

    return {
        title: 'Reflection and Metacognition',
        type: 'metacognitive',
        data: data
    };
}

createAssessmentSection() {
    if (!this.assessmentFeedback) return null;

    const questions = this.assessmentQuestions[this.currentProblem?.type];
    if (!questions) return null;

    const data = [];
    
    Object.entries(questions).forEach(([level, question]) => {
        data.push([level.toUpperCase(), question]);
    });

    return {
        title: 'Assessment Questions',
        type: 'assessment',
        data: data
    };
}

// ========================================
// HELPER METHODS
// ========================================

flattenObject(obj, prefix = '', maxDepth = 3, currentDepth = 0) {
    const result = [];
    
    if (currentDepth >= maxDepth || typeof obj !== 'object' || obj === null) {
        return [[prefix, String(obj)]];
    }

    for (const [key, value] of Object.entries(obj)) {
        const newPrefix = prefix ? `${prefix} > ${key}` : key;
        
        if (Array.isArray(value)) {
            result.push([newPrefix, '']);
            value.forEach((item, index) => {
                if (typeof item === 'object' && item !== null) {
                    const subItems = this.flattenObject(item, '', maxDepth, currentDepth + 1);
                    subItems.forEach(([k, v]) => {
                        result.push([`  ${index + 1}. ${k}`, v]);
                    });
                } else {
                    result.push([`  ${index + 1}.`, String(item)]);
                }
            });
        } else if (typeof value === 'object' && value !== null) {
            result.push([newPrefix, '']);
            const subItems = this.flattenObject(value, '', maxDepth, currentDepth + 1);
            subItems.forEach(([k, v]) => {
                result.push([`  ${k}`, v]);
            });
        } else {
            result.push([newPrefix, String(value)]);
        }
    }
    
    return result;
}

// Method to generate summary statistics for workbook
getWorkbookSummary() {
    if (!this.currentWorkbook) return null;

    return {
        title: this.currentWorkbook.title,
        timestamp: this.currentWorkbook.timestamp,
        topic: this.currentProblem?.type,
        topicName: this.plantTopics[this.currentProblem?.type]?.name,
        sectionCount: this.currentWorkbook.sections.length,
        hasDiagrams: this.areDiagramsReady(),
        diagramCount: this.diagramData?.renderedImages?.length || 0,
        learnerLevel: this.learnerProfile.currentLevel,
        difficulty: this.currentProblem?.difficulty
    };
}

// Method to export workbook metadata
exportWorkbookMetadata() {
    return {
        workbook: this.getWorkbookSummary(),
        content: {
            topic: this.currentContent?.topic,
            category: this.currentContent?.category,
            hasClassification: !!this.currentContent?.classification,
            hasExamples: !!this.currentContent?.examples,
            hasApplications: !!this.currentContent?.applications,
            hasComparisons: !!this.currentContent?.comparison
        },
        diagrams: this.getDiagramCacheStats(),
        learner: {
            level: this.learnerProfile.currentLevel,
            mastered: this.learnerProfile.masteredTopics,
            struggling: this.learnerProfile.strugglingTopics,
            progress: this.learnerProfile.progressHistory.length
        }
    };
}

// ========================================
// PLANT STRUCTURE SPECIFIC HELPER METHODS
// ========================================

getTopicRelevance(topicType) {
    const relevance = {
        root_systems: "Roots anchor plants, absorb water and nutrients, and store food - essential for plant survival",
        stem_anatomy: "Stems provide support, transport materials, and connect all plant organs",
        leaf_structure: "Leaves are primary sites of photosynthesis and gas exchange, powering plant growth",
        flower_anatomy: "Flowers enable sexual reproduction and seed formation in angiosperms",
        plant_tissues: "Plant tissues organize cells into functional systems enabling growth and specialization"
    };

    return relevance[topicType] || "Important plant structure concept";
}

suggestRelatedTopics() {
    if (!this.currentProblem) return [];

    const relatedTopicsMap = {
        root_systems: ['plant_tissues', 'stem_anatomy'],
        stem_anatomy: ['root_systems', 'plant_tissues', 'leaf_structure'],
        leaf_structure: ['stem_anatomy', 'plant_tissues', 'flower_anatomy'],
        flower_anatomy: ['stem_anatomy', 'leaf_structure'],
        plant_tissues: ['root_systems', 'stem_anatomy', 'leaf_structure']
    };

    const relatedTypes = relatedTopicsMap[this.currentProblem.type] || [];

    return relatedTypes.map(type => ({
        type: type,
        name: this.plantTopics[type]?.name,
        description: this.plantTopics[type]?.description
    }));
}

// DIAGRAM GENERATION

generatePlantDiagramData() {
    if (!this.currentContent) return;

    const { type } = this.currentProblem;

    this.diagramData = {
        type: type,
        diagrams: this.getRelevantPlantDiagrams(type),
        placeholder: true,
        note: "Diagram generation will be implemented with actual plant structure illustrations"
    };
}

generateGlossary() {
    if (!this.currentContent) return {};

    const glossary = {};

    // Extract from classification structures
    if (this.currentContent.classification) {
        this.extractGlossaryFromClassification(this.currentContent.classification, glossary);
    }

    // Extract from external structure
    if (this.currentContent.externalStructure || this.currentContent.externalMorphology) {
        const external = this.currentContent.externalStructure || this.currentContent.externalMorphology;
        if (external.parts) {
            Object.entries(external.parts).forEach(([key, value]) => {
                if (typeof value === 'object' && value.description) {
                    glossary[this.formatKey(key)] = value.description;
                }
            });
        }
    }

    // Extract from internal anatomy
    if (this.currentContent.internalAnatomy || this.currentContent.internalStructure) {
        const internal = this.currentContent.internalAnatomy || this.currentContent.internalStructure;
        if (internal.crossSectionalView) {
            Object.entries(internal.crossSectionalView).forEach(([key, value]) => {
                if (typeof value === 'object' && value.function) {
                    glossary[this.formatKey(key)] = value.function;
                }
            });
        }
    }

    // Extract from tissue systems
    if (this.currentContent.tissueSystems) {
        Object.entries(this.currentContent.tissueSystems).forEach(([system, data]) => {
            if (data.function) {
                glossary[this.formatKey(system)] = data.function;
            }
            if (data.tissues) {
                Object.entries(data.tissues).forEach(([tissue, info]) => {
                    if (typeof info === 'object' && info.description) {
                        glossary[this.formatKey(tissue)] = info.description;
                    }
                });
            }
        });
    }

    return glossary;
}

extractGlossaryFromClassification(classification, glossary) {
    Object.entries(classification).forEach(([key, value]) => {
        if (typeof value === 'object' && value !== null) {
            if (value.definition || value.description) {
                glossary[this.formatKey(key)] = value.definition || value.description;
            }
            // Recurse for nested objects
            Object.entries(value).forEach(([subKey, subValue]) => {
                if (typeof subValue === 'object' && subValue !== null) {
                    if (subValue.definition || subValue.description) {
                        glossary[this.formatKey(subKey)] = subValue.definition || subValue.description;
                    }
                }
            });
        }
    });
}

generatePlantAnalogy(concept) {
    const analogies = {
        // Root Systems
        taproot: "Like a deep anchor with side chains, reaching for water far below",
        fibrous_root: "Like a dense network of strings holding soil together",
        root_hair: "Like tiny fingers reaching out to grab water and minerals",
        root_cap: "Like a protective helmet for the growing root tip",
        
        // Stem Anatomy
        xylem: "Like a plumbing system carrying water upward from roots to leaves",
        phloem: "Like a delivery service transporting sugar throughout the plant",
        vascular_bundle: "Like bundled pipes and cables in a building",
        cambium: "Like a growth factory producing new tissue",
        bark: "Like protective armor covering the wood",
        
        // Leaf Structure
        stomata: "Like adjustable windows controlling air and water flow",
        guard_cells: "Like doormen opening and closing the stomatal pores",
        palisade_mesophyll: "Like solar panels packed tightly for maximum energy capture",
        spongy_mesophyll: "Like a sponge with air spaces for gas circulation",
        cuticle: "Like a waterproof raincoat preventing water loss",
        
        // Flower Anatomy
        sepal: "Like protective covers for the flower bud",
        petal: "Like colorful billboards advertising to pollinators",
        stamen: "Like a dust-producing factory on a stalk",
        pistil: "Like a vase catching pollen on its sticky top",
        pollen: "Like tiny packages carrying male genetic information",
        
        // Plant Tissues
        parenchyma: "Like storage warehouses and factories in the plant",
        collenchyma: "Like flexible support beams in a growing structure",
        sclerenchyma: "Like rigid steel reinforcement in concrete",
        meristem: "Like a growth zone constantly producing new cells",
        epidermis: "Like the skin protecting internal structures"
    };

    return analogies[concept] || "Performs a specialized plant function";
}

adaptPlantLanguage(text, level) {
    if (!text) return '';

    const adaptations = {
        basic: {
            replacements: {
                'monocot': 'grass-type plant',
                'dicot': 'broadleaf plant',
                'vascular bundle': 'water and food tube',
                'xylem': 'water pipe',
                'phloem': 'sugar pipe',
                'meristem': 'growth zone',
                'parenchyma': 'storage tissue',
                'stomata': 'tiny pores',
                'guard cells': 'door cells',
                'photosynthesis': 'making food from sunlight',
                'transpiration': 'water evaporation',
                'epidermis': 'outer skin layer',
                'cortex': 'middle storage layer'
            }
        },
        intermediate: {
            replacements: {
                'monocot': 'monocot (parallel veins)',
                'dicot': 'dicot (netted veins)',
                'vascular bundle': 'vascular bundle (xylem + phloem)',
                'stomata': 'stomata (pores)',
                'meristem': 'meristem'
            }
        },
        advanced: {
            replacements: {
                'monocot': 'monocotyledon',
                'dicot': 'dicotyledon (eudicot)',
                'vascular bundle': 'vascular bundle (conducting tissue)',
                'xylem': 'xylem (tracheids and vessel elements)',
                'phloem': 'phloem (sieve tubes and companion cells)',
                'meristem': 'meristematic tissue',
                'stomata': 'stomata (pl. stoma)'
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

addPlantConceptualConnections(content) {
    if (!this.includeConceptualConnections) return content;

    const connections = {
        root_systems: "Root structure relates to water uptake efficiency. Root zones connect to growth patterns. Adaptations reflect environmental challenges.",
        stem_anatomy: "Vascular tissue organization connects transport to plant height. Primary vs secondary growth relates to life span. Monocot vs dicot differences reflect evolutionary paths.",
        leaf_structure: "Leaf anatomy optimizes photosynthesis vs water conservation trade-off. Stomatal distribution relates to environmental adaptation. Internal structure reflects light capture strategy.",
        flower_anatomy: "Flower structure reflects pollination syndrome. Double fertilization is unique angiosperm innovation connecting to seed success. Flower parts are modified leaves.",
        plant_tissues: "Tissue systems work together - dermal protects, ground stores/supports, vascular transports. Meristems enable indeterminate growth. Cell specialization creates division of labor."
    };

    content.conceptualConnections = connections[this.currentProblem.type] || 
        "This topic connects to broader plant biology principles";

    return content;
}

enrichWithPlantExamples(content) {
    if (!this.includeExamples || content.examples) return content;

    const exampleDatabase = {
        root_systems: [
            "Carrot: Taproot modified for food storage (orange color from carotene)",
            "Grass: Fibrous roots prevent soil erosion on hillsides",
            "Mangrove: Pneumatophores allow breathing in waterlogged soil",
            "Banyan tree: Prop roots support massive spreading canopy"
        ],
        stem_anatomy: [
            "Oak tree: Annual rings record climate history over centuries",
            "Bamboo: Rapid growth from intercalary meristems at nodes",
            "Potato: Underground stem tuber stores starch ('eyes' are buds)",
            "Grape vine: Stem tendrils coil around supports for climbing"
        ],
        leaf_structure: [
            "Cactus: Leaves reduced to spines, stem does photosynthesis",
            "Water lily: Stomata only on upper surface (floats on water)",
            "Pine needles: Thick cuticle and sunken stomata reduce water loss",
            "Maple: Large thin leaves optimized for shade tolerance"
        ],
        flower_anatomy: [
            "Corn: Separate male (tassel) and female (silk) flowers on same plant",
            "Squash: Large yellow flowers attract bee pollinators",
            "Grass flowers: Tiny, wind-pollinated, no colorful petals",
            "Orchids: Highly specialized flowers for specific insect pollinators"
        ],
        plant_tissues: [
            "Cork: Sclerenchyma in oak bark used for bottle stoppers",
            "Celery strings: Collenchyma providing flexible support",
            "Hemp fibers: Sclerenchyma fibers used for rope and textiles",
            "Meristems: Allow plants to be cloned from cuttings"
        ]
    };

    if (exampleDatabase[this.currentProblem.type]) {
        content.examples = content.examples || [];
        content.examples.push(...exampleDatabase[this.currentProblem.type]);
    }

    return content;
}

addPlantComparativeContext(content) {
    if (!this.includeComparisons || content.comparison) return content;

    const comparativeData = {
        root_systems: {
            depth: "Taproot: deep (drought tolerance) vs Fibrous: shallow (surface water)",
            spread: "Taproot: vertical vs Fibrous: horizontal",
            transplanting: "Taproot: difficult (main root) vs Fibrous: easier (many roots)"
        },
        stem_anatomy: {
            growth: "Monocot: no secondary growth vs Dicot: wood formation",
            vascularPattern: "Monocot: scattered bundles vs Dicot: ring pattern",
            lifespan: "Herbaceous: annual vs Woody: perennial"
        },
        leaf_structure: {
            environment: "Sun leaves: thick, small vs Shade leaves: thin, large",
            venation: "Monocot: parallel vs Dicot: netted",
            stomataLocation: "Usually lower surface (reduces water loss)"
        },
        flower_anatomy: {
            parts: "Monocot: 3s vs Dicot: 4s or 5s",
            pollination: "Wind: small, no color vs Insect: colorful, scented",
            reproduction: "Perfect: both sexes vs Imperfect: separate male/female"
        },
        plant_tissues: {
            support: "Collenchyma: flexible (growing) vs Sclerenchyma: rigid (mature)",
            transport: "Xylem: water upward vs Phloem: sugar bidirectional",
            growth: "Primary: length vs Secondary: girth"
        }
    };

    if (comparativeData[this.currentProblem.type]) {
        content.comparativeContext = comparativeData[this.currentProblem.type];
    }

    return content;
}

validatePlantContent(content) {
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
        content.classification ||
        content.externalStructure ||
        content.internalAnatomy ||
        content.tissueSystems ||
        content.functions;

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

    return validationResults;
}

calculatePlantContentCompleteness() {
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
        this.currentContent.classification ||
        this.currentContent.externalStructure ||
        this.currentContent.internalAnatomy ||
        this.currentContent.tissueSystems;
    if (hasMainContent) score += 3;

    // Additional depth
    if (this.currentContent.adaptations) score += 1;
    if (this.currentContent.contextualScenarios) score += 1;

    return Math.round((score / maxScore) * 100);
}

getPlantContentQualityMetrics() {
    return {
        completeness: this.calculatePlantContentCompleteness(),
        hasExamples: !!this.currentContent?.examples,
        hasComparisons: !!this.currentContent?.comparison,
        hasApplications: !!this.currentContent?.applications,
        hasContextualScenarios: !!this.currentContent?.contextualScenarios,
        hasAdaptations: !!this.currentContent?.adaptations,
        detailLevel: this.explanationLevel,
        includesVisualizations: this.includeVisualizations,
        includesMisconceptions: this.includeCommonMisconceptions,
        includesExperiments: this.includeExperiments,
        adaptiveDifficulty: this.adaptiveDifficulty,
        metacognitiveSupport: this.metacognitiveSupport
    };
}

filterPlantContentByCategory(category) {
    if (!this.currentContent) return null;

    const filtered = {
        category: category,
        items: []
    };

    // Filter based on category
    if (this.currentContent.classification) {
        Object.entries(this.currentContent.classification).forEach(([key, value]) => {
            if (key.toLowerCase().includes(category.toLowerCase())) {
                filtered.items.push({ type: key, data: value });
            }
        });
    }

    return filtered;
}

generatePlantContentSummary() {
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
    if (this.currentContent.classification) {
        summary.keyPoints.push("Classification and types covered");
        summary.coverage.classification = Object.keys(this.currentContent.classification).length;
    }

    if (this.currentContent.externalStructure || this.currentContent.externalMorphology) {
        summary.keyPoints.push("External structure explained");
        summary.coverage.externalStructure = true;
    }

    if (this.currentContent.internalAnatomy || this.currentContent.internalStructure) {
        summary.keyPoints.push("Internal anatomy described");
        summary.coverage.internalAnatomy = true;
    }

    if (this.currentContent.functions) {
        summary.keyPoints.push("Functions and roles described");
        summary.coverage.functions = true;
    }

    if (this.currentContent.examples) {
        summary.coverage.examples = this.currentContent.examples.length;
    }

    return summary;
}

assessPlantContentDifficulty() {
    if (!this.currentContent) return 'unknown';

    let difficultyScore = 0;

    // Topic-based difficulty
    const basicTopics = ['leaf_structure'];
    const intermediateTopics = ['root_systems', 'stem_anatomy'];
    const advancedTopics = ['flower_anatomy', 'plant_tissues'];

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

generatePlantLearningObjectives() {
    if (!this.currentProblem) return [];

    const objectivesDatabase = {
        root_systems: [
            "Distinguish between taproot and fibrous root systems",
            "Identify the zones of a growing root tip and their functions",
            "Explain the role of root hairs in water and mineral absorption",
            "Describe the structure and function of the Casparian strip",
            "Relate root adaptations to environmental conditions"
        ],
        stem_anatomy: [
            "Compare monocot and dicot stem anatomy",
            "Explain the functions of xylem and phloem tissues",
            "Describe primary and secondary growth in stems",
            "Interpret annual rings in woody stems",
            "Identify various stem modifications and their functions"
        ],
        leaf_structure: [
            "Describe the internal anatomy of a typical leaf",
            "Explain the mechanism of stomatal opening and closing",
            "Compare sun and shade leaf adaptations",
            "Relate leaf structure to photosynthesis and gas exchange",
            "Identify adaptations in xerophytes and hydrophytes"
        ],
        flower_anatomy: [
            "Identify the four whorls of a complete flower",
            "Explain the process of double fertilization in angiosperms",
            "Distinguish between perfect and imperfect flowers",
            "Relate flower structure to pollination syndrome",
            "Describe the development of fruits from ovaries"
        ],
        plant_tissues: [
            "Classify plant tissues into three tissue systems",
            "Compare parenchyma, collenchyma, and sclerenchyma",
            "Explain the role of meristems in plant growth",
            "Distinguish between primary and secondary growth",
            "Relate tissue structure to function"
        ]
    };

    return objectivesDatabase[this.currentProblem.type] || [
        "Understand key plant structure concepts",
        "Apply knowledge to plant adaptations",
        "Make connections between structure and function"
    ];
}

identifyPlantPrerequisites() {
    if (!this.currentProblem) return [];

    const prerequisitesDatabase = {
        root_systems: [
            "Basic plant cell structure",
            "Understanding of water movement (osmosis)",
            "Knowledge of plant organs"
        ],
        stem_anatomy: [
            "Plant cell types",
            "Basic transport concepts",
            "Understanding of plant growth"
        ],
        leaf_structure: [
            "Basic photosynthesis concepts",
            "Understanding of gas exchange",
            "Knowledge of plant cells"
        ],
        flower_anatomy: [
            "Basic reproduction concepts",
            "Understanding of pollination",
            "Knowledge of plant life cycles"
        ],
        plant_tissues: [
            "Plant cell structure",
            "Cell differentiation basics",
            "Understanding of tissue organization"
        ]
    };

    return prerequisitesDatabase[this.currentProblem.type] || [
        "General plant biology background",
        "Basic cell biology knowledge"
    ];
}

generatePlantStudyTips() {
    if (!this.currentProblem) return [];

    const studyTipsDatabase = {
        root_systems: [
            "Examine actual roots (carrot, grass) to see taproot vs fibrous",
            "Draw and label root zones from memory",
            "Create comparison tables for root types and adaptations",
            "Observe root hairs under microscope on germinating seeds"
        ],
        stem_anatomy: [
            "Compare monocot (corn) and dicot (bean) stem cross-sections under microscope",
            "Count tree rings and relate to age and climate",
            "Draw vascular bundles showing xylem and phloem arrangement",
            "Create concept maps linking primary and secondary growth"
        ],
        leaf_structure: [
            "Make leaf peel slides to observe stomata",
            "Compare leaves from different environments (sun vs shade, wet vs dry)",
            "Draw cross-sections showing all tissue layers",
            "Practice identifying adaptations from leaf structure"
        ],
        flower_anatomy: [
            "Dissect actual flowers and identify all parts",
            "Create diagrams of different flower types (complete/incomplete, perfect/imperfect)",
            "Draw the process of double fertilization step-by-step",
            "Compare flowers with different pollination syndromes"
        ],
        plant_tissues: [
            "Make slides of different tissue types and observe under microscope",
            "Draw each tissue type showing cell shape and wall thickness",
            "Create comparison tables for tissue functions",
            "Relate tissue types to organs where they're found"
        ]
    };

    return studyTipsDatabase[this.currentProblem.type] || [
        "Observe actual plant specimens whenever possible",
        "Create detailed labeled diagrams",
        "Use microscopy to see cellular structure",
        "Relate structure to function in every concept"
    ];
}

generatePlantProcessTimeline(processName) {
    const timelines = {
        'Root Growth': [
            { zone: 'Root Cap', duration: 'Continuous', activity: 'Protection, gravity sensing' },
            { zone: 'Meristematic Zone', duration: '1-3 mm', activity: 'Rapid cell division' },
            { zone: 'Elongation Zone', duration: '3-10 mm', activity: 'Cell expansion, main growth' },
            { zone: 'Maturation Zone', duration: '>10 mm', activity: 'Differentiation, root hairs form' }
        ],
        'Secondary Growth': [
            { step: 'Vascular cambium forms', timing: 'After primary growth', result: 'Continuous cylinder' },
            { step: 'Cambium divides', timing: 'Growing season', result: 'Secondary xylem (inward) + phloem (outward)' },
            { step: 'Spring wood forms', timing: 'Early season', result: 'Large, thin-walled cells' },
            { step: 'Summer wood forms', timing: 'Late season', result: 'Small, thick-walled cells' },
            { step: 'Cork cambium forms', timing: 'As stem expands', result: 'Bark replaces epidermis' }
        ],
        'Stomatal Opening': [
            { phase: 'Light detection', duration: 'Minutes', events: 'Blue light triggers phototropins' },
            { phase: 'Ion accumulation', duration: 'Minutes', events: 'K⁺ and Cl⁻ enter guard cells' },
            { phase: 'Water uptake', duration: 'Minutes', events: 'Osmosis causes turgor pressure' },
            { phase: 'Pore opens', duration: 'Minutes', events: 'Guard cells bend, pore widens' }
        ],
        'Pollination to Seed': [
            { step: 'Pollination', timing: 'Hours-days', events: 'Pollen lands on stigma' },
            { step: 'Pollen tube growth', timing: 'Hours', events: 'Tube grows down style to ovule' },
            { step: 'Double fertilization', timing: 'Hours', events: 'Embryo (2n) and endosperm (3n) form' },
            { step: 'Seed development', timing: 'Weeks-months', events: 'Embryo matures, ovule → seed' },
            { step: 'Fruit development', timing: 'Weeks-months', events: 'Ovary → fruit' }
        ]
    };

    return timelines[processName] || [];
}

generatePlantContentHierarchy() {
    if (!this.currentContent) return null;

    const hierarchy = {
        root: this.currentContent.topic,
        children: []
    };

    if (this.currentContent.classification) {
        Object.keys(this.currentContent.classification).forEach(key => {
            hierarchy.children.push({
                name: key,
                type: 'classification'
            });
        });
    }

    if (this.currentContent.externalStructure || this.currentContent.externalMorphology) {
        hierarchy.children.push({
            name: 'External Structure',
            type: 'section'
        });
    }

    if (this.currentContent.internalAnatomy || this.currentContent.internalStructure) {
        hierarchy.children.push({
            name: 'Internal Anatomy',
            type: 'section'
        });
    }

    if (this.currentContent.tissueSystems) {
        hierarchy.children.push({
            name: 'Tissue Systems',
            type: 'section'
        });
    }

    if (this.currentContent.adaptations) {
        hierarchy.children.push({
            name: 'Adaptations',
            type: 'section'
        });
    }

    return hierarchy;
}

// Utility method for formatting keys
formatKey(key) {
    return key.replace(/_/g, ' ')
              .split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
}

}

export default EnhancedPlantStructureWorkbook;
