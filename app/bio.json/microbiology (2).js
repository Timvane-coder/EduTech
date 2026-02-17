// Enhanced Microbiology Workbook - Comprehensive Microbial Systems
import { createCanvas, loadImage } from '@napi-rs/canvas';
import { BiologySvgDiagrams } from '../svg-data.js';
import { BiologyDiagramsRegistry} from '../registry.js';
import { BiologyDiagramsRenderer } from '../renderer.js';
import * as math from 'mathjs';

export class EnhancedMicrobiologyWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "microbial";
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

        this.microbiologySymbols = this.initializeMicrobiologySymbols();
        this.setThemeColors();
        this.initializeMicrobiologyTopics();
        this.initializeMicrobiologyLessons();
        this.initializeMicrobiologyExperiments();
        this.initializeMisconceptionDatabase();
        this.initializeMetacognitivePrompts();
        this.initializeContextualScenarios();
        this.initializeAssessmentRubrics();
    }

    setThemeColors() {
        const themes = {
            microbial: {
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
                stepBg: '#e8eaf6',
                stepText: '#311b92',
                borderColor: '#66bb6a',
                contentBg: '#f3e5f5',
                contentText: '#4a148c',
                diagramBg: '#fce4ec',
                structureBg: '#e0f2f1',
                experimentBg: '#fff9c4',
                experimentText: '#f57f17',
                bacteriaBg: '#e3f2fd',
                virusBg: '#fce4ec',
                fungiBg: '#f1f8e9',
                protozoaBg: '#fff3e0'
            },
            pathogen: {
                background: '#fafafa',
                gridColor: '#9e9e9e',
                headerBg: '#c62828',
                headerText: '#ffffff',
                sectionBg: '#ffcdd2',
                sectionText: '#b71c1c',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#ffebee',
                resultText: '#c62828',
                definitionBg: '#fff8e1',
                definitionText: '#f57f17',
                stepBg: '#f1f8e9',
                stepText: '#33691e',
                borderColor: '#ef5350',
                contentBg: '#ede7f6',
                contentText: '#4a148c',
                diagramBg: '#fce4ec',
                structureBg: '#e8eaf6',
                experimentBg: '#fffde7',
                experimentText: '#f57f17',
                bacteriaBg: '#e3f2fd',
                virusBg: '#fce4ec',
                fungiBg: '#f1f8e9',
                protozoaBg: '#fff3e0'
            }
        };

        this.colors = themes[this.theme] || themes.microbial;
    }

    initializeMicrobiologySymbols() {
        return {
            // Greek letters
            'alpha': 'α',
            'beta': 'β',
            'gamma': 'γ',
            'delta': 'Δ',
            'mu': 'μ',
            'lambda': 'λ',
            
            // Arrows
            'arrow': '→',
            'reversible': '⇌',
            
            // Common notation
            'degree': '°',
            'plus': '+',
            'minus': '−',
            'approximately': '≈',
            
            // Microbiology specific
            'CFU': 'CFU',
            'MIC': 'MIC',
            'MBC': 'MBC',
            'LD50': 'LD₅₀',
            'pH': 'pH',
            'OD600': 'OD₆₀₀',
            
            // Common organisms (abbreviations)
            'E.coli': 'E. coli',
            'S.aureus': 'S. aureus',
            'B.subtilis': 'B. subtilis',
            'P.aeruginosa': 'P. aeruginosa',
            'C.albicans': 'C. albicans'
        };
    }

    initializeMicrobiologyTopics() {
        this.microbiologyTopics = {
            bacterial_structure: {
                patterns: [
                    /bacteria|prokaryote/i,
                    /cell.*wall|peptidoglycan/i,
                    /gram.*stain|gram.*positive|gram.*negative/i,
                    /flagella|pili|capsule/i
                ],
                handler: this.handleBacterialStructure.bind(this),
                name: 'Bacterial Structure and Classification',
                category: 'microbial_cells',
                description: 'Structure, function, and diversity of bacterial cells',
                difficulty: 'intermediate',
                prerequisites: ['cell_biology', 'basic_chemistry']
            },
            
            microbial_growth: {
                patterns: [
                    /growth.*curve|bacterial.*growth/i,
                    /generation.*time|exponential.*growth/i,
                    /culture.*media|agar/i,
                    /sterilization|aseptic/i
                ],
                handler: this.handleMicrobialGrowth.bind(this),
                name: 'Microbial Growth and Nutrition',
                category: 'microbial_physiology',
                description: 'Factors affecting microbial growth and cultivation methods',
                difficulty: 'intermediate',
                prerequisites: ['bacterial_structure', 'metabolism']
            },
            
            microbial_metabolism: {
                patterns: [
                    /fermentation|respiration/i,
                    /aerobic|anaerobic|facultative/i,
                    /photosynthesis.*bacteria/i,
                    /nitrogen.*fixation|nitrification/i
                ],
                handler: this.handleMicrobialMetabolism.bind(this),
                name: 'Microbial Metabolism',
                category: 'microbial_physiology',
                description: 'Energy generation and metabolic diversity in microorganisms',
                difficulty: 'advanced',
                prerequisites: ['cellular_respiration', 'enzymes']
            },
            
            microbial_genetics: {
                patterns: [
                    /plasmid|conjugation/i,
                    /transformation|transduction/i,
                    /horizontal.*gene.*transfer/i,
                    /mutation|antibiotic.*resistance/i
                ],
                handler: this.handleMicrobialGenetics.bind(this),
                name: 'Microbial Genetics',
                category: 'genetics',
                description: 'Genetic mechanisms and gene transfer in microorganisms',
                difficulty: 'advanced',
                prerequisites: ['DNA', 'gene_expression']
            },
            
            virology: {
                patterns: [
                    /virus|viral/i,
                    /bacteriophage|phage/i,
                    /lytic|lysogenic/i,
                    /viral.*replication/i
                ],
                handler: this.handleVirology.bind(this),
                name: 'Virology',
                category: 'viruses',
                description: 'Viral structure, replication, and classification',
                difficulty: 'advanced',
                prerequisites: ['nucleic_acids', 'proteins']
            },
            
            immunology: {
                patterns: [
                    /immune.*system|immunity/i,
                    /antibody|antigen/i,
                    /innate|adaptive.*immunity/i,
                    /vaccination|immunization/i
                ],
                handler: this.handleImmunology.bind(this),
                name: 'Immunology and Host Defense',
                category: 'host_pathogen',
                description: 'Immune responses to microbial infection',
                difficulty: 'advanced',
                prerequisites: ['proteins', 'cell_biology']
            },
            
            medical_microbiology: {
                patterns: [
                    /pathogen|disease/i,
                    /infection|infectious/i,
                    /antibiotic|antimicrobial/i,
                    /epidemiology/i
                ],
                handler: this.handleMedicalMicrobiology.bind(this),
                name: 'Medical Microbiology',
                category: 'applied_microbiology',
                description: 'Pathogenic microorganisms and disease processes',
                difficulty: 'advanced',
                prerequisites: ['bacterial_structure', 'immunology']
            },
            
            environmental_microbiology: {
                patterns: [
                    /biogeochemical.*cycle/i,
                    /bioremediation|biodegradation/i,
                    /wastewater|sewage/i,
                    /nitrogen.*cycle|carbon.*cycle/i
                ],
                handler: this.handleEnvironmentalMicrobiology.bind(this),
                name: 'Environmental Microbiology',
                category: 'applied_microbiology',
                description: 'Microorganisms in natural and engineered environments',
                difficulty: 'advanced',
                prerequisites: ['microbial_metabolism', 'ecology']
            }
        };
    }

    initializeMicrobiologyLessons() {
        this.lessons = {
            bacterial_structure: {
                title: "Bacterial Structure and Classification",
                concepts: [
                    "Bacteria are prokaryotic cells lacking membrane-bound organelles",
                    "Cell wall structure determines Gram stain reaction",
                    "Surface structures (flagella, pili, capsules) aid in survival",
                    "Bacteria have diverse shapes and arrangements",
                    "Bacterial classification based on morphology, biochemistry, and genetics"
                ],
                theory: "Bacteria are unicellular prokaryotic microorganisms that lack a nucleus and membrane-bound organelles. Despite their simplicity, they exhibit remarkable diversity in structure, metabolism, and ecological roles. Understanding bacterial structure is fundamental to microbiology and medical applications.",
                keyDefinitions: {
                    "Prokaryote": "Cell lacking nucleus and membrane-bound organelles; genetic material in nucleoid region",
                    "Peptidoglycan": "Polymer of sugars and amino acids forming bacterial cell wall mesh",
                    "Gram Positive": "Bacteria with thick peptidoglycan layer; retain crystal violet (purple stain)",
                    "Gram Negative": "Bacteria with thin peptidoglycan and outer membrane; pink after counterstain",
                    "Flagellum": "Long whip-like appendage for motility",
                    "Pilus": "Short protein appendage for attachment or DNA transfer",
                    "Capsule": "Polysaccharide layer outside cell wall; protection and virulence factor",
                    "Endospore": "Dormant, resistant structure formed by some bacteria (Bacillus, Clostridium)"
                },
                cellStructure: {
                    universal: {
                        plasmaMembrane: "Phospholipid bilayer; selective permeability, transport, energy generation",
                        cytoplasm: "Gel-like substance containing ribosomes, enzymes, nutrients",
                        ribosomes: "70S (50S + 30S subunits); protein synthesis",
                        nucleoid: "Region containing circular chromosome (DNA)",
                        plasmids: "Small circular DNA; often carry antibiotic resistance genes"
                    },
                    cellWall: {
                        function: "Maintain cell shape, prevent osmotic lysis, target for antibiotics",
                        composition: "Peptidoglycan (NAG-NAM sugar chains + peptide crosslinks)",
                        gramPositive: {
                            structure: "Thick peptidoglycan layer (20-80 nm)",
                            teichoicAcids: "Glycerol/ribitol phosphate polymers in wall",
                            staining: "Retain crystal violet (purple)",
                            examples: "Staphylococcus, Streptococcus, Bacillus, Clostridium",
                            antibiotics: "Susceptible to lysozyme, penicillin"
                        },
                        gramNegative: {
                            structure: "Thin peptidoglycan (2-3 nm) + outer membrane",
                            outerMembrane: "Lipopolysaccharide (LPS) in outer leaflet; porin channels",
                            periplasm: "Space between membranes; contains enzymes",
                            LPS: "Lipid A (endotoxin) + core + O-antigen",
                            staining: "Decolorize, take up safranin (pink/red)",
                            examples: "E. coli, Salmonella, Pseudomonas, Neisseria",
                            antibiotics: "More resistant due to outer membrane barrier"
                        }
                    },
                    surfaceStructures: {
                        flagella: {
                            structure: "Filament (flagellin protein) + hook + basal body",
                            function: "Motility via rotation (powered by proton motive force)",
                            arrangements: "Monotrichous (1), lophotrichous (tuft), amphitrichous (both ends), peritrichous (all over)",
                            types: "Run (counterclockwise) and tumble (clockwise) for chemotaxis"
                        },
                        pili: {
                            common: "Short, numerous; attachment to surfaces",
                            sex: "Longer, fewer; conjugation (F pilus for DNA transfer)",
                            composition: "Protein (pilin subunits)"
                        },
                        capsule: {
                            composition: "Usually polysaccharide (sometimes protein)",
                            function: "Protection from phagocytosis, desiccation, antibiotics",
                            virulence: "Major virulence factor (e.g., S. pneumoniae)",
                            staining: "Negative staining (India ink) or specific capsule stain"
                        },
                        glycocalyx: {
                            slimeLayer: "Loosely attached polysaccharide",
                            biofilm: "Communities embedded in extracellular matrix",
                            significance: "Antibiotic resistance, chronic infections"
                        }
                    }
                },
                morphology: {
                    shapes: {
                        coccus: "Spherical (e.g., Staphylococcus, Streptococcus)",
                        bacillus: "Rod-shaped (e.g., E. coli, Bacillus)",
                        spirillum: "Spiral (e.g., Spirillum, Campylobacter)",
                        spirochete: "Flexible spiral (e.g., Treponema, Borrelia)",
                        vibrio: "Comma-shaped (e.g., Vibrio cholerae)",
                        coccobacillus: "Short rod, intermediate (e.g., Haemophilus)"
                    },
                    arrangements: {
                        cocci: "Diplococci (pairs), streptococci (chains), staphylococci (clusters), tetrads (4), sarcinae (8 cubes)",
                        bacilli: "Diplobacilli (pairs), streptobacilli (chains), palisades (side-by-side)"
                    }
                },
                classification: {
                    phenotypic: {
                        morphology: "Shape, size, arrangement, Gram stain",
                        biochemical: "Catalase, oxidase, sugar fermentation, enzyme production",
                        growth: "Oxygen requirement, temperature range, pH tolerance"
                    },
                    genotypic: {
                        DNAsequence: "16S rRNA gene sequencing (phylogenetic marker)",
                        GCcontent: "Percent guanine-cytosine in genome",
                        wholeGenome: "Genome sequencing and comparison"
                    }
                },
                endospores: {
                    definition: "Highly resistant, dormant structure",
                    formation: "Sporulation in response to nutrient depletion",
                    structure: "Core (DNA + ribosomes) + cortex + coat + exosporium",
                    resistance: "Heat, radiation, desiccation, chemicals",
                    organisms: "Bacillus, Clostridium",
                    germination: "Return to vegetative state when conditions favorable",
                    medicalSignificance: "C. difficile, C. tetani, C. botulinum, B. anthracis"
                },
                applications: [
                    "Antibiotic development (target cell wall synthesis)",
                    "Disease diagnosis (Gram stain, culture)",
                    "Sterilization techniques (autoclaving for endospores)",
                    "Understanding antibiotic resistance mechanisms",
                    "Biotechnology (bacterial protein expression systems)"
                ]
            },

            microbial_growth: {
                title: "Microbial Growth and Nutrition",
                concepts: [
                    "Bacterial growth is exponential during log phase",
                    "Growth curve has four phases: lag, log, stationary, death",
                    "Environmental factors (temperature, pH, oxygen) affect growth",
                    "Culture media provide nutrients for microbial cultivation",
                    "Sterilization eliminates all microorganisms including spores"
                ],
                theory: "Microbial growth refers to increase in cell number, not cell size. Understanding growth kinetics, nutritional requirements, and environmental factors is essential for cultivating microorganisms in the laboratory and controlling them in applied settings.",
                keyDefinitions: {
                    "Binary Fission": "Asexual reproduction; one cell divides into two identical daughter cells",
                    "Generation Time": "Time required for population to double",
                    "Colony Forming Unit (CFU)": "Single viable cell that produces visible colony on agar",
                    "Exponential Growth": "Each cell divides at constant rate; population doubles regularly",
                    "Stationary Phase": "Growth rate equals death rate; no net increase",
                    "Culture Medium": "Nutrient preparation for growing microorganisms",
                    "Sterilization": "Complete elimination of all microorganisms and spores",
                    "Aseptic Technique": "Procedures to prevent contamination"
                },
                growthCurve: {
                    lagPhase: {
                        description: "Adaptation period; cells adjust to new environment",
                        cellNumber: "Constant (no increase)",
                        cellActivity: "High metabolic activity; synthesize enzymes, proteins",
                        duration: "Variable (depends on inoculum health, medium composition)",
                        note: "Cells not dividing but preparing for division"
                    },
                    logPhase: {
                        description: "Exponential growth; cells dividing at constant rate",
                        cellNumber: "Doubles every generation time",
                        equation: "Nt = N0 × 2^n where n = number of generations",
                        generationTime: "g = t / n where t = elapsed time",
                        characteristics: "Cells most active, uniform, susceptible to antibiotics",
                        harvesting: "Best time to harvest for experiments (cells in best condition)"
                    },
                    stationaryPhase: {
                        description: "Growth rate = death rate; no net change in cell number",
                        causes: "Nutrient depletion, toxic waste accumulation, oxygen depletion",
                        cellNumber: "Constant (maximum)",
                        characteristics: "Secondary metabolite production (antibiotics), endospore formation",
                        duration: "Can last hours to days depending on organism"
                    },
                    deathPhase: {
                        description: "Death rate exceeds growth rate; population declines",
                        cellNumber: "Decreases exponentially",
                        causes: "Nutrient exhaustion, toxic waste, autolysis",
                        characteristics: "Cells die and lyse",
                        note: "Some cells may persist as viable but nonculturable (VBNC)"
                    }
                },
                generationTimeCalculation: {
                    formula: "g = t / n where g = generation time, t = time, n = number of generations",
                    nFormula: "n = log(Nt/N0) / log(2) = 3.3 × log(Nt/N0)",
                    example: {
                        initial: "N0 = 1000 cells",
                        final: "Nt = 64,000 cells after 4 hours",
                        generations: "n = log(64000/1000) / log(2) = log(64) / log(2) = 6",
                        generationTime: "g = 4 hours / 6 generations = 40 minutes"
                    },
                    typicalValues: {
                        Ecoli: "20 minutes (optimal conditions)",
                        Staphylococcus: "30 minutes",
                        Mycobacterium: "2-20 hours (slow grower)"
                    }
                },
                environmentalFactors: {
                    temperature: {
                        minimum: "Lowest temperature for growth",
                        optimum: "Best growth rate",
                        maximum: "Highest temperature before death",
                        psychrophile: "<15°C optimum (cold-loving)",
                        psychrotroph: "Can grow at 0-7°C (food spoilage)",
                        mesophile: "20-45°C optimum (most pathogens, 37°C)",
                        thermophile: "45-80°C optimum (hot springs)",
                        hyperthermophile: ">80°C optimum (deep sea vents)"
                    },
                    pH: {
                        acidophile: "pH 0-5.5 optimum",
                        neutralophile: "pH 5.5-8.5 optimum (most bacteria)",
                        alkaliphile: "pH 8.5-11.5 optimum",
                        note: "Cytoplasm usually maintained near neutral pH"
                    },
                    oxygen: {
                        obligateAerobe: "Require O₂; aerobic respiration",
                        facultativeAnaerobe: "Prefer O₂ but can grow without (fermentation or anaerobic respiration)",
                        obligateAnaerobe: "Killed by O₂; lack enzymes (catalase, superoxide dismutase)",
                        aerotolerantAnaerobe: "Tolerate O₂ but don't use it (fermentation only)",
                        microaerophile: "Require low O₂ (2-10%); damaged by atmospheric O₂"
                    },
                    osmotic: {
                        isotonic: "Same solute concentration as cell; optimal",
                        hypotonic: "Lower solute; water enters cell (cell wall prevents lysis)",
                        hypertonic: "Higher solute; water leaves cell (plasmolysis)",
                        halophile: "Require high salt (1-15% NaCl)",
                        halotolerant: "Can tolerate salt but don't require"
                    }
                },
                nutrition: {
                    requirements: {
                        carbon: "Organic (heterotroph) or CO₂ (autotroph)",
                        nitrogen: "Amino acids, nitrate, ammonium, N₂ (nitrogen fixers)",
                        sulfur: "Amino acids (cysteine, methionine), sulfate",
                        phosphorus: "Phosphate (nucleic acids, ATP, membranes)",
                        minerals: "K, Mg, Ca, Fe, trace elements",
                        growthFactors: "Vitamins, amino acids (if cannot synthesize)"
                    },
                    nutritionalTypes: {
                        photoautotroph: "Light energy + CO₂ (cyanobacteria, plants)",
                        chemoautotroph: "Chemical energy + CO₂ (nitrifying bacteria, sulfur bacteria)",
                        photoheterotroph: "Light energy + organic carbon (purple nonsulfur bacteria)",
                        chemoheterotroph: "Chemical energy + organic carbon (most bacteria, animals)"
                    }
                },
                cultureMedia: {
                    types: {
                        chemicallyDefined: "Exact composition known; synthetic medium",
                        complex: "Exact composition unknown (yeast extract, peptone, beef extract)",
                        selective: "Allow growth of certain organisms while inhibiting others",
                        differential: "Distinguish between organisms based on biochemical properties",
                        enrichment: "Encourage growth of desired organism from mixed population"
                    },
                    examples: {
                        nutrientAgar: "Complex medium; general purpose",
                        bloodAgar: "Differential (hemolysis patterns)",
                        MacConkeyAgar: "Selective (Gram-negative) + differential (lactose fermentation)",
                        mannitolSaltAgar: "Selective (halophiles) + differential (mannitol fermentation)",
                        eosinMethyleneBlue: "Selective (Gram-negative) + differential (lactose)"
                    }
                },
                sterilization: {
                    physical: {
                        autoclaving: "121°C, 15 psi, 15-20 min; kills endospores",
                        dryHeat: "160-180°C, 2 hours; glassware",
                        pasteurization: "63°C 30 min or 72°C 15 sec; reduce pathogens, not sterile",
                        filtration: "0.22 μm filter; heat-sensitive liquids",
                        radiation: "UV (surface) or ionizing (gamma rays - medical equipment)"
                    },
                    chemical: {
                        ethanol: "70% most effective; denatures proteins",
                        bleach: "Sodium hypochlorite; oxidizing agent",
                        formalin: "Formaldehyde; cross-links proteins",
                        glutaraldehyde: "Sporicidal; medical equipment",
                        ethyleneOxide: "Gas sterilization; heat-sensitive items"
                    }
                },
                cultureTechniques: {
                    streak plate: "Obtain isolated colonies from mixed culture",
                    spread plate: "Spread diluted sample on agar surface; count CFU",
                    pour plate: "Mix sample with molten agar; colonies in and on agar",
                    broth culture: "Liquid medium; large-scale growth, turbidity measurement",
                    continuousCulture: "Chemostat; maintain exponential growth indefinitely"
                },
                applications: [
                    "Food microbiology (spoilage prevention, fermentation)",
                    "Clinical microbiology (culture pathogens, antibiotic susceptibility)",
                    "Biotechnology (fermentation, protein production)",
                    "Water quality testing (coliform count)",
                    "Research (molecular biology, genetics)"
                ]
            },

            microbial_metabolism: {
                title: "Microbial Metabolism: Energy and Biosynthesis",
                concepts: [
                    "Microorganisms exhibit diverse metabolic strategies",
                    "ATP generation via fermentation, aerobic respiration, or anaerobic respiration",
                    "Autotrophs fix CO₂; heterotrophs use organic carbon",
                    "Nitrogen fixation converts N₂ to ammonia",
                    "Photosynthetic bacteria use light energy"
                ],
                theory: "Microbial metabolism encompasses the chemical reactions that generate energy (catabolism) and synthesize cellular components (anabolism). Microorganisms display remarkable metabolic diversity, utilizing a wide range of energy sources and electron acceptors.",
                keyDefinitions: {
                    "Catabolism": "Breakdown of complex molecules; releases energy",
                    "Anabolism": "Synthesis of complex molecules; requires energy",
                    "Fermentation": "Anaerobic catabolism; organic final electron acceptor",
                    "Aerobic Respiration": "O₂ as final electron acceptor; complete oxidation",
                    "Anaerobic Respiration": "Inorganic molecule other than O₂ as final electron acceptor",
                    "Chemotroph": "Obtain energy from chemical compounds",
                    "Phototroph": "Obtain energy from light",
                    "Autotroph": "Use CO₂ as carbon source",
                    "Heterotroph": "Use organic carbon source"
                },
                ATPGeneration: {
                    substrateLevel: {
                        definition: "Direct transfer of phosphate to ADP",
                        location: "Glycolysis, Krebs cycle",
                        yield: "Small amount per glucose (4 ATP in glycolysis, 2 net)"
                    },
                    oxidativePhosphorylation: {
                        definition: "ATP synthesis via electron transport chain and chemiosmosis",
                        location: "Plasma membrane (prokaryotes), inner mitochondrial membrane (eukaryotes)",
                        yield: "Large amount (32-34 ATP per glucose in aerobic respiration)",
                        mechanism: "Proton gradient drives ATP synthase"
                    },
                    photophosphorylation: {
                        definition: "Light energy drives ATP synthesis",
                        cyclic: "Electrons return to photosystem; produces ATP only",
                        noncyclic: "Electrons flow to NADP+; produces ATP and NADPH"
                    }
                },
                respirationPathways: {
                    aerobic: {
                        electron_acceptor: "O₂",
                        endProducts: "CO₂ + H₂O",
                        ATPyield: "32-38 ATP per glucose",
                        organisms: "Most animals, plants, many bacteria",
                        pathways: "Glycolysis → Krebs cycle → Electron transport chain"
                    },
                    anaerobic: {
                        electron_acceptor: "NO₃⁻, SO₄²⁻, CO₂, Fe³⁺, etc.",
                        denitrification: "NO₃⁻ → N₂ (by Pseudomonas, Bacillus)",
                        sulfate_reduction: "SO₄²⁻ → H₂S (by Desulfovibrio)",
                        methanogenesis: "CO₂ → CH₄ (by methanogens)",
                        ATPyield: "Less than aerobic (but more than fermentation)",
                        organisms: "Facultative or obligate anaerobes"
                    }
                },
                fermentation: {
                    definition: "Anaerobic catabolism without external electron acceptor",
                    pathway: "Glycolysis + regenerate NAD+ via organic molecule reduction",
                    ATPyield: "2 ATP per glucose (substrate-level only)",
                    types: {
                        alcoholic: {
                            organisms: "Yeast (Saccharomyces), some bacteria",
                            products: "Ethanol + CO₂",
                            equation: "Glucose → 2 Ethanol + 2 CO₂ + 2 ATP",
                            applications: "Brewing, winemaking, baking, biofuel"
                        },
                        lactic_acid: {
                            homolactic: "Lactobacillus, Streptococcus → only lactic acid",
                            heterolactic: "Leuconostoc → lactic acid + ethanol + CO₂",
                            applications: "Yogurt, cheese, sauerkraut, kimchi",
                            humanMuscle: "Muscle cells under anaerobic conditions"
                        },
                        mixed_acid: "E. coli, Salmonella → acetic, lactic, succinic acids + ethanol, CO₂, H₂",
                        butyric_acid: "Clostridium → butyric acid, CO₂, H₂",
                        propionic_acid: "Propionibacterium → propionic acid, acetic acid, CO₂ (Swiss cheese)"
                    }
                },
                carbonMetabolism: {
                    autotrophy: {
                        definition: "Fix CO₂ into organic compounds",
                        CalvinCycle: "Most autotrophs; RuBisCO enzyme fixes CO₂",
                        reverseKrebsCycle: "Some bacteria (green sulfur bacteria)",
                        other: "3-hydroxypropionate cycle, Wood-Ljungdahl pathway"
                    },
                    heterotrophy: {
                        definition: "Use organic carbon (glucose, amino acids, etc.)",
                        saprophytes: "Dead organic matter",
                        parasites: "Living host organisms"
                    }
                },
                nitrogenMetabolism: {
                    nitrogenFixation: {
                        definition: "Convert N₂ gas → NH₃ (ammonia)",
                        organisms: "Rhizobium (legume symbiont), Azotobacter, cyanobacteria",
                        enzyme: "Nitrogenase (Fe-Mo protein); O₂ sensitive",
                        equation: "N₂ + 8H+ + 8e- + 16 ATP → 2NH₃ + H₂ + 16 ADP + 16 Pi",
                        significance: "Only biological process that fixes N₂; essential for nitrogen cycle"
                    },
                    nitrification: {
                        step1: "NH₃ → NO₂⁻ (by Nitrosomonas, Nitrosococcus)",
                        step2: "NO₂⁻ → NO₃⁻ (by Nitrobacter)",
                        significance: "Oxidize ammonia; part of nitrogen cycle"
                    },
                    denitrification: {
                        process: "NO₃⁻ → N₂ (returns nitrogen to atmosphere)",
                        organisms: "Pseudomonas, Bacillus",
                        significance: "Completes nitrogen cycle"
                    }
                },
                photosynthesis: {
                    oxygenic: {
                        organisms: "Cyanobacteria, algae, plants",
                        equation: "6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂",
                        electron_source: "H₂O (produces O₂)",
                        photosystems: "PS I + PS II"
                    },
                    anoxygenic: {
                        organisms: "Purple bacteria, green sulfur bacteria",
                        electron_source: "H₂S, H₂, organic compounds (not H₂O)",
                        noOxygen: "Does not produce O₂",
                        photosystem: "Single photosystem",
                        example: "Purple sulfur: 6CO₂ + 12H₂S + light → C₆H₁₂O₆ + 12S + 6H₂O"
                    }
                },
                chemolithoautotrophy: {
                    definition: "Inorganic chemicals as energy source + CO₂ as carbon source",
                    examples: {
                        nitrifying: "NH₃ or NO₂⁻ → NO₃⁻ (energy)",
                        sulfur_oxidizing: "H₂S → S → SO₄²⁻ (Thiobacillus)",
                        hydrogen_oxidizing: "H₂ → H₂O",
                        iron_oxidizing: "Fe²⁺ → Fe³⁺"
                    },
                    significance: "Geochemical cycling, extremophile habitats"
                },
                applications: [
                    "Industrial fermentation (antibiotics, enzymes, vitamins)",
                    "Biofuel production (ethanol, methane)",
                    "Food production (yogurt, cheese, bread, beer, wine)",
                    "Wastewater treatment (organic matter degradation)",
                    "Bioremediation (pollutant degradation)",
                    "Understanding nutrient cycles"
                ]
            },

            microbial_genetics: {
                title: "Microbial Genetics and Gene Transfer",
                concepts: [
                    "Bacterial chromosome is circular, double-stranded DNA",
                    "Plasmids are extrachromosomal genetic elements",
                    "Horizontal gene transfer spreads genetic traits",
                    "Mutations arise spontaneously or induced",
                    "Antibiotic resistance genes spread via mobile genetic elements"
                ],
                theory: "Microbial genetics explores how genetic information is stored, replicated, expressed, and transferred in microorganisms. Understanding these mechanisms is crucial for biotechnology and combating antibiotic resistance.",
                keyDefinitions: {
                    "Genotype": "Genetic makeup; all genes",
                    "Phenotype": "Observable characteristics; gene expression",
                    "Mutation": "Heritable change in DNA sequence",
                    "Plasmid": "Extrachromosomal circular DNA; replicates independently",
                    "Transformation": "Uptake of naked DNA from environment",
                    "Transduction": "Gene transfer via bacteriophage (virus)",
                    "Conjugation": "DNA transfer through direct cell-to-cell contact",
                    "Horizontal Gene Transfer": "Gene transfer between cells (not parent to offspring)"
                },
                bacterialGenome: {
                    chromosome: {
                        structure: "Single, circular, double-stranded DNA",
                        size: "0.5-10 million base pairs (Mb)",
                        location: "Nucleoid region (not membrane-bound)",
                        supercoiling: "Negative supercoiling by DNA gyrase; compact structure",
                        example: "E. coli: 4.6 Mb, ~4,300 genes"
                    },
                    plasmids: {
                        characteristics: "Small (1-400 kb), circular, extrachromosomal DNA",
                        replication: "Independent of chromosome; various copy numbers",
                        genes: "Often non-essential but advantageous (antibiotic resistance, toxins)",
                        types: {
                            F_plasmid: "Fertility factor; conjugation",
                            R_plasmid: "Resistance plasmid; antibiotic resistance genes",
                            col_plasmid: "Colicin production (toxins)",
                            virulence: "Toxin genes, adhesion factors"
                        },
                        applications: "Cloning vectors in genetic engineering"
                    }
                },
                mutations: {
                    spontaneous: {
                        rate: "10⁻⁶ to 10⁻¹⁰ per base pair per generation",
                        causes: "DNA replication errors, spontaneous DNA damage"
                    },
                    induced: {
                        chemical: "Base analogs, alkylating agents, intercalating agents",
                        physical: "UV light (thymine dimers), ionizing radiation",
                        example: "UV → thymine dimers → mutations if not repaired"
                    },
                    types: {
                        point: "Single base change",
                        substitution: {
                            silent: "No amino acid change (wobble position)",
                            missense: "Different amino acid (sickle cell: Glu → Val)",
                            nonsense: "Premature stop codon"
                        },
                        frameshift: "Insertion/deletion not multiple of 3; shifts reading frame",
                        consequences: "Loss of function, gain of function, no change"
                    },
                    repair: {
                        photorepair: "Photolyase enzyme; UV damage",
                        excision_repair: "Remove damaged segment, resynthesize",
                        mismatch_repair: "Correct replication errors",
                        SOS_response: "Error-prone repair when extensive damage"
                    }
                },
                horizontalGeneTransfer: {
                    transformation: {
                        definition: "Uptake of naked DNA from environment",
                        naturalCompetence: "Some bacteria naturally take up DNA (Streptococcus, Haemophilus, Bacillus)",
                        artificialCompetence: "CaCl₂ treatment, electroporation (lab technique)",
                        process: [
                            "DNA released from dead/lysed cells",
                            "Competent cell binds DNA",
                            "DNA enters cell through membrane",
                            "RecA protein integrates DNA into chromosome or exists as plasmid"
                        ],
                        significance: "Natural gene transfer; lab technique (cloning)",
                        discovery: "Griffith (1928): S. pneumoniae transformation"
                    },
                    transduction: {
                        definition: "Gene transfer via bacteriophage (bacterial virus)",
                        generalized: {
                            mechanism: "Phage accidentally packages host DNA instead of phage DNA",
                            result: "Any bacterial gene can be transferred",
                            frequency: "Low (1 in 10⁵ phage particles)",
                            phages: "Lytic phages (P1, P22)"
                        },
                        specialized: {
                            mechanism: "Phage DNA integrates in chromosome (prophage); excises imprecisely, taking adjacent bacterial genes",
                            result: "Only genes near prophage integration site transferred",
                            frequency: "Higher than generalized",
                            phages: "Temperate phages (lambda phage)"
                        },
                        significance: "Spread of toxin genes (diphtheria toxin, cholera toxin)",
                        discovery: "Zinder and Lederberg (1952)"
                    },
                    conjugation: {
                        definition: "DNA transfer through direct cell contact via pilus",
                        requirement: "Donor cell with F plasmid (F+ or Hfr); recipient (F-)",
                        process: [
                            "F+ cell extends F pilus to F- cell",
                            "Cells form mating bridge",
                            "One strand of F plasmid transfers via rolling circle replication",
                            "Both cells synthesize complementary strand",
                            "F- cell becomes F+ (if only plasmid transferred)"
                        ],
                        types: {
                            FplasmidTransfer: "F+ × F- → both become F+",
                            HfrTransfer: {
                                definition: "F plasmid integrated in chromosome (Hfr = High frequency recombination)",
                                result: "Chromosomal DNA transferred in linear order",
                                mapping: "Interrupted mating maps gene positions",
                                outcome: "Recipient usually remains F- (entire F plasmid rarely transfers)"
                            }
                        },
                        significance: "Major mechanism of antibiotic resistance spread; gene mapping",
                        discovery: "Lederberg and Tatum (1946)"
                    }
                },
                mobileGeneticElements: {
                    transposons: {
                        definition: "DNA segments that can move within genome",
                        simple: "Insertion sequences (IS); only transposase gene",
                        complex: "Carry additional genes (antibiotic resistance)",
                        mechanism: "Cut-and-paste or replicative transposition",
                        significance: "Gene inactivation, genome rearrangement, spread of resistance"
                    },
                    integrons: {
                        definition: "DNA elements that capture and express gene cassettes",
                        components: "Integrase gene + attI site + promoter",
                        function: "Capture antibiotic resistance genes from gene cassettes",
                        significance: "Multiresistance in single genetic element"
                    }
                },
                antibioticResistance: {
                    mechanisms: {
                        enzymaticInactivation: "β-lactamase destroys penicillin",
                        targetModification: "Ribosome mutation (streptomycin resistance)",
                        effluxPumps: "Pump antibiotic out of cell",
                        decreasedPermeability: "Altered porins (Gram-negative)",
                        bypassPathway: "Alternative enzyme not inhibited by drug"
                    },
                    spread: {
                        vertical: "Parent to offspring (cell division)",
                        horizontal: "Conjugation, transduction, transformation",
                        plasmids: "R plasmids carry multiple resistance genes",
                        globalProblem: "Overuse of antibiotics selects for resistant strains"
                    }
                },
                geneRegulation: {
                    lacOperon: {
                        function: "Regulate lactose utilization genes",
                        inducible: "Induced by lactose (actually allolactose)",
                        mechanism: "Lactose binds repressor → repressor releases → transcription ON",
                        genes: "lacZ (β-galactosidase), lacY (permease), lacA (transacetylase)"
                    },
                    trpOperon: {
                        function: "Regulate tryptophan synthesis genes",
                        repressible: "Repressed by tryptophan (end product)",
                        mechanism: "Trp binds repressor → active repressor binds operator → transcription OFF"
                    }
                },
                applications: [
                    "Genetic engineering (cloning, recombinant proteins)",
                    "Understanding antibiotic resistance spread",
                    "Bacterial identification and typing",
                    "Vaccine development (attenuated strains)",
                    "Industrial strain improvement"
                ]
            },

            virology: {
                title: "Virology: Viral Structure, Replication, and Classification",
                concepts: [
                    "Viruses are obligate intracellular parasites",
                    "Viruses consist of nucleic acid core + protein coat (capsid)",
                    "Bacteriophages infect bacteria",
                    "Lytic cycle kills host; lysogenic cycle integrates into host genome",
                    "Animal viruses enter cells by endocytosis or membrane fusion"
                ],
                theory: "Viruses are acellular infectious agents that require a host cell to replicate. They exist at the boundary between living and nonliving. Understanding viral structure and replication is essential for treating viral diseases and using viruses as tools in biotechnology.",
                keyDefinitions: {
                    "Virus": "Obligate intracellular parasite; nucleic acid + protein coat",
                    "Virion": "Complete viral particle outside host cell",
                    "Capsid": "Protein coat surrounding viral nucleic acid",
                    "Envelope": "Lipid bilayer (from host membrane) surrounding capsid",
                    "Bacteriophage": "Virus that infects bacteria",
                    "Lytic Cycle": "Viral replication resulting in host cell lysis",
                    "Lysogenic Cycle": "Viral DNA integrates into host chromosome (prophage)",
                    "Reverse Transcriptase": "Enzyme that synthesizes DNA from RNA template"
                },
                viralStructure: {
                    components: {
                        nucleicAcid: {
                            types: "DNA or RNA (never both)",
                            forms: "Single-stranded or double-stranded, linear or circular",
                            size: "3,000 to 2.5 million base pairs",
                            examples: "dsDNA (T4 phage, herpes), ssDNA (φX174), dsRNA (rotavirus), ssRNA (influenza, HIV)"
                        },
                        capsid: {
                            definition: "Protein coat; protects nucleic acid",
                            capsomeres: "Protein subunits that assemble into capsid",
                            symmetry: {
                                helical: "Rod-shaped; TMV (tobacco mosaic virus)",
                                icosahedral: "20 triangular faces; most spherical viruses (poliovirus, adenovirus)",
                                complex: "Neither purely helical nor icosahedral (poxviruses, some phages)"
                            }
                        },
                        envelope: {
                            definition: "Lipid bilayer from host membrane",
                            source: "Plasma membrane, nuclear envelope, or ER",
                            glycoproteins: "Viral spike proteins for attachment (hemagglutinin, neuraminidase)",
                            examples: "Influenza, HIV, herpes, SARS-CoV-2",
                            vulnerability: "Sensitive to detergents, drying (enveloped viruses more fragile)"
                        }
                    },
                    size: "20-300 nm (smaller than bacteria; visible only with EM)",
                    hostRange: {
                        definition: "Spectrum of host cells virus can infect",
                        determinedBy: "Viral attachment proteins + host cell receptors",
                        narrow: "Single host species (HIV → humans)",
                        broad: "Multiple species (rabies → mammals)"
                    }
                },
                bacteriophages: {
                    structure: {
                        head: "Icosahedral capsid; contains DNA",
                        tail: "Hollow tube for DNA injection",
                        baseplate: "Attachment apparatus",
                        tailFibers: "Recognize host cell receptors",
                        example: "T4 phage (infects E. coli)"
                    },
                    lyticCycle: {
                        steps: [
                            "1. ATTACHMENT: Tail fibers bind host receptors",
                            "2. PENETRATION: Tail contracts, injects DNA into cell",
                            "3. BIOSYNTHESIS: Viral DNA → viral mRNA → viral proteins; DNA replication",
                            "4. MATURATION: Assembly of new phage particles",
                            "5. RELEASE: Lysozyme lyses cell wall → release 50-200 progeny phages"
                        ],
                        timing: "~20-30 minutes for T4",
                        outcome: "Host cell dies"
                    },
                    lysogenicCycle: {
                        steps: [
                            "1. Phage DNA integrates into host chromosome (becomes prophage)",
                            "2. Prophage replicates with host DNA; vertical transmission",
                            "3. Prophage may remain dormant for many generations",
                            "4. INDUCTION: Stress (UV, chemicals) triggers prophage excision",
                            "5. Enter lytic cycle"
                        ],
                        advantages: "Viral genes preserved; can transfer bacterial genes (specialized transduction)",
                        example: "Lambda (λ) phage in E. coli",
                        lysogenicConversion: "Prophage genes alter host phenotype (diphtheria toxin, botulinum toxin)"
                    }
                },
                animalVirusReplication: {
                    attachment: "Viral glycoproteins bind host cell receptors",
                    entry: {
                        endocytosis: "Enveloped or naked viruses engulfed in vesicle",
                        fusion: "Envelope fuses with plasma membrane (HIV, influenza)",
                        result: "Virion or nucleocapsid enters cytoplasm"
                    },
                    uncoating: "Capsid removed; nucleic acid released",
                    biosynthesis: {
                        DNAviruses: {
                            location: "Nucleus (usually)",
                            replication: "Host enzymes replicate viral DNA",
                            transcription: "Host RNA polymerase → viral mRNA",
                            examples: "Herpes, adenovirus, smallpox"
                        },
                        RNAviruses: {
                            plusStrand: "RNA acts as mRNA directly (poliovirus, hepatitis A)",
                            minusStrand: "Must synthesize +RNA first via viral RNA-dependent RNA polymerase (influenza, measles)",
                            retroviruses: "RNA → DNA via reverse transcriptase → integrate into host genome (HIV)",
                            examples: "+RNA: SARS-CoV-2, polio; -RNA: influenza, rabies; Retrovirus: HIV"
                        }
                    },
                    assembly: "Capsomeres + nucleic acid → mature virions",
                    release: {
                        lysis: "Cell bursts (naked viruses)",
                        budding: "Enveloped viruses acquire envelope from host membrane; cell may survive"
                    }
                },
                viralClassification: {
                    baltimore: {
                        definition: "Classify by nucleic acid type and replication strategy",
                        classI: "dsDNA (herpes, adenovirus, pox)",
                        classII: "ssDNA (parvoviruses)",
                        classIII: "dsRNA (rotavirus)",
                        classIV: "+ssRNA (poliovirus, SARS-CoV-2)",
                        classV: "-ssRNA (influenza, measles, rabies)",
                        classVI: "ssRNA with DNA intermediate (retroviruses - HIV)",
                        classVII: "dsDNA with RNA intermediate (hepadnavirus - hepatitis B)"
                    },
                    ICTV: {
                        definition: "International Committee on Taxonomy of Viruses",
                        hierarchy: "Order → Family (-viridae) → Genus (-virus) → Species",
                        example: "Order: Mononegavirales; Family: Paramyxoviridae; Genus: Morbillivirus; Species: Measles virus"
                    }
                },
                clinicallyImportantViruses: {
                    DNA: {
                        herpes: "HSV-1/2 (oral/genital), VZV (chickenpox, shingles), EBV (mono), CMV",
                        pox: "Smallpox (eradicated), molluscum contagiosum",
                        papilloma: "HPV (warts, cervical cancer)",
                        hepatitis: "HBV (hepatitis B)"
                    },
                    RNA: {
                        influenza: "Influenza A, B, C (seasonal flu, pandemics)",
                        coronaviruses: "SARS-CoV-2 (COVID-19), MERS, SARS",
                        retroviruses: "HIV (AIDS)",
                        flaviviruses: "Dengue, yellow fever, Zika, West Nile",
                        paramyxoviruses: "Measles, mumps, RSV",
                        rhabdoviruses: "Rabies",
                        picornaviruses: "Poliovirus, rhinovirus (common cold), hepatitis A"
                    }
                },
                antiviralStrategies: {
                    prevention: {
                        vaccines: "Stimulate immune response (measles, polio, influenza, HPV, COVID-19)",
                        types: "Live attenuated, inactivated, subunit, mRNA"
                    },
                    treatment: {
                        mechanisms: "Inhibit viral entry, uncoating, replication, assembly, release",
                        examples: {
                            nucleosideAnalogs: "Block viral DNA/RNA synthesis (acyclovir for herpes, AZT for HIV)",
                            protease_inhibitors: "Prevent viral protein processing (ritonavir for HIV)",
                            neuraminidase_inhibitors: "Block release from infected cells (oseltamivir for influenza)",
                            fusion_inhibitors: "Prevent viral entry (enfuvirtide for HIV)"
                        },
                        resistance: "Viruses mutate rapidly; resistance can develop"
                    }
                },
                applications: [
                    "Vaccine development",
                    "Gene therapy vectors (adenovirus, AAV, lentivirus)",
                    "Phage therapy (treat antibiotic-resistant bacterial infections)",
                    "Oncolytic viruses (cancer treatment)",
                    "Biotechnology tools (viral promoters, reverse transcriptase)"
                ]
            }
        };
    }

    initializeMicrobiologyExperiments() {
        this.microbiologyExperiments = {
            // ========================================
            // GRAM STAIN EXPERIMENT
            // ========================================
            
            gram_stain: {
                name: "Gram Stain - The Foundation of Bacterial Classification",
                relatedTopics: ['bacterial_structure'],
                category: 'staining_techniques',
                historicalBackground: {
                    scientist: "Hans Christian Gram",
                    year: "1884",
                    location: "Berlin, Germany (working in Carl Friedländer's lab)",
                    discovery: "Developed differential staining technique that distinguishes two major groups of bacteria",
                    originalPurpose: "Staining bacteria in lung tissue to visualize pneumonia pathogens",
                    accident: "Noticed some bacteria retained crystal violet after alcohol wash, others didn't",
                    significance: "Single most important staining technique in microbiology; still used 140+ years later",
                    context: "Before Gram stain, bacteria difficult to observe microscopically; all looked similar",
                    quote: "I have therefore published the method, although I am aware that as yet it is very defective and imperfect; but it is hoped that also in the hands of other investigators it will turn out to be useful.",
                    nobelConnection: "Gram's colleague, Robert Koch, won Nobel Prize (1905) for work on tuberculosis",
                    modernUnderstanding: "Gram stain reaction reflects fundamental difference in cell wall structure (thick vs thin peptidoglycan)"
                },
                labExperiment: {
                    title: "Gram Stain: Differential Staining of Bacteria",
                    hypothesis: "If bacterial cell wall structure differs between species, then a differential staining procedure can distinguish between thick peptidoglycan (Gram-positive) and thin peptidoglycan with outer membrane (Gram-negative) bacteria",
                    purpose: "Classify bacteria into Gram-positive (purple) or Gram-negative (pink/red) based on cell wall structure",
                    background: {
                        cellWallDifferences: {
                            gramPositive: "Thick peptidoglycan layer (20-80 nm); no outer membrane; teichoic acids",
                            gramNegative: "Thin peptidoglycan (2-3 nm); outer membrane with LPS; periplasmic space"
                        },
                        stainingPrinciple: "Crystal violet-iodine complex trapped in thick peptidoglycan; alcohol decolorizes Gram-negative but not Gram-positive",
                        clinicalSignificance: "Determines antibiotic choice; Gram-negative more resistant (outer membrane barrier)"
                    },
                    variables: {
                        independent: "Bacterial species (Gram-positive vs Gram-negative)",
                        dependent: "Color after staining (purple vs pink)",
                        controlled: ["Staining time", "Reagent concentration", "Decolorization time", "Slide preparation"]
                    },
                    materials: [
                        "Bacterial cultures: Gram-positive (Staphylococcus aureus, Bacillus subtilis) and Gram-negative (Escherichia coli, Pseudomonas aeruginosa)",
                        "Clean glass microscope slides",
                        "Inoculating loop or needle",
                        "Bunsen burner or alcohol lamp",
                        "Slide rack or staining tray",
                        "Wash bottle with distilled water",
                        "Bibulous paper or paper towels",
                        "Light microscope with oil immersion objective (100×)",
                        "Immersion oil",
                        "Timer or stopwatch",
                        "",
                        "REAGENTS (in order of use):",
                        "1. Crystal violet (primary stain)",
                        "2. Gram's iodine (mordant)",
                        "3. 95% ethanol or acetone-alcohol (decolorizer)",
                        "4. Safranin (counterstain)"
                    ],
                    safetyPrecautions: [
                        "Assume all bacteria are potential pathogens; use aseptic technique",
                        "Sterilize inoculating loop before and after use (flame until red-hot)",
                        "Do not create aerosols; avoid splashing cultures",
                        "Dispose of slides and cultures in biohazard containers",
                        "Wash hands thoroughly after lab",
                        "Wear lab coat and gloves",
                        "Work near Bunsen burner to create updraft (reduces airborne contamination)",
                        "Clean microscope oil objective after use (xylene or lens cleaner)"
                    ],
                    procedure: {
                        slidePreparation: [
                            "SMEAR PREPARATION:",
                            "1. Clean slide thoroughly (wipe with alcohol, dry)",
                            "2. Using sterile loop, transfer small amount of bacterial culture to slide",
                            "3. Add small drop of water if culture is from solid medium (not needed for broth)",
                            "4. Spread bacteria into thin film (~1 cm diameter)",
                            "   - Too thick: cells pile up, stain incorrectly",
                            "   - Too thin: difficult to find cells",
                            "5. AIR DRY completely (do not heat yet; prevents spattering)",
                            "6. HEAT FIX: Pass slide through flame 3-4 times (slide bottom through flame, wait 1 sec, repeat)",
                            "   - Purpose: Adheres bacteria to slide, kills bacteria, makes cell wall permeable",
                            "   - Don't overheat: denatures proteins, cells distorted"
                        ],
                        stainingSteps: [
                            "STEP 1 - PRIMARY STAIN (Crystal Violet):",
                            "1. Place slide on staining rack over sink or tray",
                            "2. Flood slide with crystal violet solution",
                            "3. Stain for 1 minute (start timer)",
                            "4. Rinse gently with distilled water (wash bottle)",
                            "5. Drain excess water by tilting slide",
                            "RESULT: All bacteria stain purple",
                            "",
                            "STEP 2 - MORDANT (Gram's Iodine):",
                            "1. Flood slide with Gram's iodine",
                            "2. Let sit for 1 minute",
                            "   - Iodine binds to crystal violet → forms large CV-I complex",
                            "   - Complex too large to escape thick peptidoglycan",
                            "3. Rinse with distilled water",
                            "4. Drain excess",
                            "RESULT: All bacteria still purple (CV-I complex formed)",
                            "",
                            "STEP 3 - DECOLORIZATION (Ethanol/Acetone) - CRITICAL STEP:",
                            "1. Hold slide at angle over sink",
                            "2. Apply decolorizer drop by drop OR continuous gentle stream",
                            "3. Continue until runoff is ALMOST clear (5-10 seconds typically)",
                            "   - CAUTION: Most common error! Over-decolorizing makes G+ look G-",
                            "   - Under-decolorizing makes G- look G+",
                            "   - Thick smears require longer decolorization",
                            "4. IMMEDIATELY rinse with water to stop decolorization",
                            "RESULT: Gram-positive retain purple (thick PG holds CV-I); Gram-negative lose purple (thin PG, CV-I washed out)",
                            "",
                            "STEP 4 - COUNTERSTAIN (Safranin):",
                            "1. Flood slide with safranin",
                            "2. Stain for 30-60 seconds",
                            "   - Pink/red dye stains decolorized (Gram-negative) cells",
                            "3. Rinse gently with water",
                            "4. Blot dry with bibulous paper (do not wipe; will remove bacteria)",
                            "5. Let air dry completely before microscopy",
                            "RESULT: Gram-positive remain purple; Gram-negative now pink/red"
                        ],
                        microscopy: [
                            "OBSERVATION:",
                            "1. Use LOW power (10×) to focus and find stained bacteria",
                            "2. Switch to HIGH power (40×) to observe morphology",
                            "3. Add drop of immersion oil to slide",
                            "4. Switch to OIL IMMERSION objective (100×)",
                            "5. Focus carefully (oil immersion has very short working distance)",
                            "6. Observe and record:",
                            "   - COLOR: Purple (Gram+) or Pink (Gram-)",
                            "   - SHAPE: Cocci (spheres), bacilli (rods), spirals",
                            "   - ARRANGEMENT: Chains, clusters, pairs, single",
                            "7. Draw and label observations",
                            "8. Clean oil from objective with lens paper and xylene"
                        ]
                    },
                    expectedResults: {
                        gramPositive: {
                            color: "Purple/violet",
                            examples: [
                                "Staphylococcus aureus: Purple cocci in clusters (grape-like)",
                                "Bacillus subtilis: Purple rods (bacilli), may form chains or single",
                                "Streptococcus pyogenes: Purple cocci in chains",
                                "Clostridium: Purple rods, may see endospores (clear areas)"
                            ],
                            cellWall: "Thick peptidoglycan (20-80 nm) retains CV-I complex"
                        },
                        gramNegative: {
                            color: "Pink/red",
                            examples: [
                                "Escherichia coli: Pink rods (short bacilli), single or pairs",
                                "Pseudomonas aeruginosa: Pink rods (longer, slender)",
                                "Neisseria: Pink diplococci (paired cocci)",
                                "Salmonella: Pink rods"
                            ],
                            cellWall: "Thin peptidoglycan (2-3 nm) + outer membrane; CV-I washed out"
                        }
                    },
                    dataTable: [
                        ["Organism", "Expected Result", "Observed Color", "Morphology", "Arrangement"],
                        ["S. aureus", "Gram-positive", "Purple", "Cocci", "Clusters"],
                        ["B. subtilis", "Gram-positive", "Purple", "Bacilli", "Chains/single"],
                        ["E. coli", "Gram-negative", "Pink", "Bacilli", "Single/pairs"],
                        ["P. aeruginosa", "Gram-negative", "Pink", "Bacilli", "Single"],
                        ["Unknown A", "?", "", "", ""],
                        ["Unknown B", "?", "", "", ""]
                    ],
                    interpretation: {
                        correctResults: {
                            gramPositive: "Purple cocci or rods",
                            gramNegative: "Pink/red cocci or rods"
                        },
                        errorAnalysis: {
                            falseNegative: "Gram-positive appears pink (over-decolorized, old culture, thick smear)",
                            falsePositive: "Gram-negative appears purple (under-decolorized, reagent problem)",
                            noStaining: "Slide not heat-fixed, reagents expired",
                            fadedStain: "Over-washed, poor quality reagents"
                        },
                        qualityControl: "Use known Gram+ and Gram- controls on every staining day"
                    },
                    molecularBasis: {
                        whyGramPositiveRetainStain: [
                            "Thick peptidoglycan layer (20-80 nm)",
                            "Crystal violet-iodine (CV-I) complex forms",
                            "CV-I complex large, trapped in peptidoglycan meshwork",
                            "Ethanol dehydrates peptidoglycan → pores shrink → CV-I cannot escape",
                            "Cell remains purple"
                        ],
                        whyGramNegativeLoseStain: [
                            "Thin peptidoglycan layer (2-3 nm)",
                            "Outer membrane present",
                            "Ethanol dissolves outer membrane lipids",
                            "Thin peptidoglycan cannot retain CV-I complex",
                            "CV-I washed away",
                            "Safranin (small molecule) enters and stains cell pink"
                        ]
                    },
                    results: "Gram-positive bacteria retain crystal violet and appear purple due to thick peptidoglycan layer. Gram-negative bacteria lose crystal violet during decolorization and are counterstained pink by safranin due to thin peptidoglycan and presence of outer membrane.",
                    conclusions: [
                        "Gram stain differentiates bacteria based on cell wall structure",
                        "Gram-positive: thick peptidoglycan, purple",
                        "Gram-negative: thin peptidoglycan + outer membrane, pink",
                        "Gram stain guides antibiotic selection and identification",
                        "Technique remains essential in clinical and research microbiology after 140 years"
                    ],
                    clinicalRelevance: {
                        identification: "First step in bacterial identification; narrows possibilities",
                        antibioticSelection: {
                            gramPositive: "Penicillin, vancomycin generally effective",
                            gramNegative: "Often require broader spectrum (outer membrane barrier)"
                        },
                        infectiousDisease: {
                            gramPositive: "Staph infections, strep throat, anthrax, tetanus, botulism",
                            gramNegative: "UTIs (E. coli), pneumonia (Klebsiella), meningitis (Neisseria), sepsis"
                        },
                        rapidDiagnosis: "Results in minutes; guides immediate treatment"
                    },
                    limitations: [
                        "Some bacteria don't Gram stain well (Mycobacterium - acid-fast; Mycoplasma - no cell wall)",
                        "Old cultures may lose Gram positivity",
                        "Technique-dependent; requires practice",
                        "Does not identify species (only groups bacteria)"
                    ],
                    extensions: [
                        "Identify unknown bacterial samples based on Gram stain + morphology",
                        "Compare antibiotic susceptibility of Gram+ vs Gram-",
                        "Investigate why some bacteria are Gram-variable",
                        "Research acid-fast stain for Mycobacterium (alternative for non-Gram-stainable)",
                        "Study structure of Gram+ vs Gram- cell walls using electron microscopy"
                    ],
                    modernConnections: [
                        "Automated digital microscopy systems for Gram stain analysis",
                        "Molecular methods (16S rRNA sequencing) complement Gram stain",
                        "Understanding Gram-negative outer membrane for drug design",
                        "Developing new antibiotics that bypass Gram-negative barrier"
                    ],
                    troubleshooting: [
                        "Cells wash off slide: Heat-fix properly, don't over-wash",
                        "Both Gram+ and Gram- purple: Under-decolorized; apply decolorizer longer",
                        "Both pink: Over-decolorized; use fresher reagents, decolorize less",
                        "No cells visible: Smear too thin; use more bacteria",
                        "Thick clumps: Smear too thick; dilute and spread better"
                    ]
                }
            },

// ========================================
            // KOCH'S POSTULATES EXPERIMENT
            // ========================================
            
            kochs_postulates: {
                name: "Koch's Postulates - Proving Causation of Infectious Disease",
                relatedTopics: ['medical_microbiology', 'bacterial_culture'],
                category: 'disease_causation',
                historicalBackground: {
                    scientist: "Robert Koch",
                    year: "1884 (formalized); applied throughout 1870s-1880s",
                    location: "Germany",
                    nobelPrize: "1905 Nobel Prize in Physiology or Medicine",
                    context: "Before Koch, disease causation was unclear. Miasma theory (bad air) was popular. Pasteur had shown microbes cause fermentation/spoilage, but link to disease uncertain",
                    achievement: "Proved specific microorganisms cause specific diseases",
                    diseases: "Applied to anthrax (1876), tuberculosis (1882), cholera (1884)",
                    postulates: "Four criteria to prove a microbe causes a disease",
                    significance: "Established microbiology as medical science; foundation of germ theory of disease",
                    impact: "Revolutionized medicine; enabled development of vaccines, antibiotics, public health measures",
                    quote: "If it could be proven that...one special kind of bacterium, and no other, is always present in a disease, then this would be the proof that this bacterium is the cause of the disease",
                    colleagues: "Worked with Paul Ehrlich, Julius Petri (invented Petri dish), Richard Petri, Friedrich Loeffler",
                    techniques: "Developed solid culture media (agar plates), pure culture techniques, staining methods"
                },
                thePostulates: {
                    postulate1: {
                        statement: "The microorganism must be present in every case of the disease but absent from healthy individuals",
                        reasoning: "Association: If microbe causes disease, it must be found in diseased individuals",
                        example: "M. tuberculosis always found in TB patients' lungs, not in healthy people"
                    },
                    postulate2: {
                        statement: "The microorganism must be isolated from the diseased host and grown in pure culture",
                        reasoning: "Isolation: Prove specific microbe present, not contamination or mixture",
                        techniques: "Streak plate for single colonies; subculture for purity",
                        example: "Isolate M. tuberculosis from patient's sputum, culture on agar"
                    },
                    postulate3: {
                        statement: "When the pure culture is inoculated into a healthy susceptible host, it must cause the same disease",
                        reasoning: "Causation: If microbe causes disease, introducing it should reproduce disease",
                        example: "Inject cultured M. tuberculosis into guinea pigs → develop TB",
                        ethics: "Modern: Cannot intentionally infect humans; use animal models"
                    },
                    postulate4: {
                        statement: "The microorganism must be re-isolated from the experimentally infected host and shown to be identical to the original",
                        reasoning: "Confirmation: Complete the cycle; prove same organism throughout",
                        example: "Re-isolate M. tuberculosis from infected guinea pigs; verify same as original culture"
                    }
                },
                labExperiment: {
                    title: "Demonstrating Koch's Postulates Using Non-Pathogenic Bacteria",
                    hypothesis: "If a specific bacterium causes a specific effect (e.g., color change in medium), then following Koch's postulates will prove this causation",
                    purpose: "Understand Koch's postulates using safe, non-pathogenic bacteria (e.g., Serratia marcescens producing red pigment)",
                    safetyNote: "Use non-pathogenic bacteria (BSL-1) for educational purposes; actual disease experiments unethical and dangerous",
                    model_system: {
                        bacterium: "Serratia marcescens (produces prodigiosin - red pigment)",
                        effect: "Red coloration of colonies/medium",
                        advantage: "Safe, visible effect, fulfills postulates without causing disease"
                    },
                    variables: {
                        independent: "Presence or absence of S. marcescens",
                        dependent: "Production of red pigment",
                        controlled: ["Medium type", "Temperature", "Incubation time", "Sterility"]
                    },
                    materials: [
                        "Serratia marcescens culture (red pigment-producing strain)",
                        "Nutrient agar plates",
                        "Nutrient broth tubes",
                        "Sterile swabs or inoculating loops",
                        "Sterile test tubes",
                        "Incubator (25-30°C - best pigment production)",
                        "Microscope and Gram stain materials",
                        "Sterile saline or water for dilutions",
                        "Bunsen burner",
                        "Markers for labeling"
                    ],
                    safetyPrecautions: [
                        "Serratia marcescens is BSL-1 but can be opportunistic pathogen; use aseptic technique",
                        "Sterilize all materials before and after use",
                        "Do not create aerosols",
                        "Dispose in biohazard waste",
                        "Wash hands thoroughly"
                    ],
                    procedure: {
                        postulate1_Association: [
                            "DEMONSTRATING ASSOCIATION:",
                            "1. Examine 'diseased' sample: Nutrient agar plate with red colonies (S. marcescens culture)",
                            "2. Examine 'healthy' sample: Sterile nutrient agar plate (no red pigment)",
                            "3. Record observations:",
                            "   - 'Diseased': Red colonies present",
                            "   - 'Healthy': No red colonies, no pigment",
                            "4. Perform Gram stain on red colonies:",
                            "   - Observe Gram-negative rods (S. marcescens)",
                            "5. CONCLUSION: Red pigment associated with presence of specific bacterium",
                            "",
                            "POSTULATE 1 SATISFIED: Organism present in 'diseased' (pigmented) but absent from 'healthy' (non-pigmented)"
                        ],
                        postulate2_Isolation: [
                            "ISOLATING ORGANISM IN PURE CULTURE:",
                            "1. Streak bacteria from red colony onto fresh nutrient agar plate",
                            "   - Use streak plate technique for isolated colonies",
                            "2. Incubate at 25-30°C for 24-48 hours",
                            "3. Observe isolated red colonies",
                            "4. Subculture single colony to new plate",
                            "5. Incubate again",
                            "6. Verify pure culture:",
                            "   - All colonies same morphology (red, smooth, convex)",
                            "   - Gram stain shows uniform Gram-negative rods",
                            "7. Store pure culture for next steps",
                            "",
                            "POSTULATE 2 SATISFIED: Organism isolated and grown in pure culture"
                        ],
                        postulate3_Inoculation: [
                            "INOCULATING HEALTHY 'HOST' (MEDIUM):",
                            "1. Prepare 'healthy host': Sterile nutrient agar plate (no pigment)",
                            "2. Using sterile technique, transfer pure culture of S. marcescens to sterile plate:",
                            "   - Streak bacteria onto plate",
                            "3. Incubate at 25-30°C for 24-48 hours",
                            "4. Observe for development of 'disease' (red pigment production)",
                            "5. Expected result: Red colonies appear (same effect as original 'diseased' sample)",
                            "6. Control: Inoculate another plate with sterile saline (negative control)",
                            "   - Expected: No growth, no pigment",
                            "",
                            "POSTULATE 3 SATISFIED: Inoculating pure culture into 'healthy host' reproduces the effect (pigment)"
                        ],
                        postulate4_ReIsolation: [
                            "RE-ISOLATING ORGANISM:",
                            "1. From newly pigmented plate (step 3), isolate bacteria from red colony",
                            "2. Streak onto fresh nutrient agar plate",
                            "3. Incubate 24-48 hours",
                            "4. Observe red colonies again",
                            "5. Perform Gram stain and morphological examination",
                            "6. Compare to original isolate:",
                            "   - Same Gram reaction (negative)",
                            "   - Same morphology (rods)",
                            "   - Same pigment production (red)",
                            "7. CONCLUSION: Re-isolated organism identical to original",
                            "",
                            "POSTULATE 4 SATISFIED: Re-isolated organism is identical to original"
                        ]
                    },
                    expectedResults: {
                        postulate1: "Red pigment present in 'diseased' samples; absent in 'healthy' samples",
                        postulate2: "Pure culture of Gram-negative rods isolated; produces red pigment",
                        postulate3: "Inoculating pure culture onto sterile medium produces red pigment (reproduces effect)",
                        postulate4: "Re-isolated organism identical to original; Gram-negative rod producing red pigment"
                    },
                    dataTable: [
                        ["Step", "Procedure", "Observation", "Postulate Satisfied?"],
                        ["1", "Examine diseased vs healthy", "Red pigment in diseased only", "Postulate 1: YES"],
                        ["2", "Isolate in pure culture", "Red colonies, Gram(-) rods", "Postulate 2: YES"],
                        ["3", "Inoculate healthy host", "Red pigment produced", "Postulate 3: YES"],
                        ["4", "Re-isolate organism", "Same Gram(-) rods, red pigment", "Postulate 4: YES"],
                        ["", "", "", ""],
                        ["CONCLUSION", "All postulates satisfied", "S. marcescens causes red pigmentation", ""]
                    ],
                    realWorldApplication: {
                        anthrax: {
                            disease: "Anthrax (Bacillus anthracis)",
                            postulate1: "Found anthrax bacteria in blood of diseased animals, not healthy ones",
                            postulate2: "Isolated and cultured B. anthracis",
                            postulate3: "Injected mice with culture → mice developed anthrax",
                            postulate4: "Re-isolated B. anthracis from sick mice; same as original",
                            impact: "Proved bacteria cause disease; not miasma or spontaneous generation"
                        },
                        tuberculosis: {
                            disease: "Tuberculosis (Mycobacterium tuberculosis)",
                            discovery: "1882 - Koch identified M. tuberculosis",
                            challenge: "Slow-growing (weeks to months)",
                            success: "Proved TB caused by specific bacterium; enabled drug development",
                            legacy: "TB treatment strategies based on Koch's work"
                        },
                        cholera: {
                            disease: "Cholera (Vibrio cholerae)",
                            discovery: "1884 - Koch identified V. cholerae in India",
                            postulates: "Applied successfully",
                            publicHealth: "Led to sanitation improvements; water treatment"
                        }
                    },
                    results: "Successfully demonstrated all four of Koch's postulates using S. marcescens and red pigment production as model system. Organism present in pigmented samples, isolated in pure culture, reproduced effect when inoculated into sterile medium, and re-isolated in identical form.",
                    conclusions: [
                        "Koch's postulates provide scientific framework for proving disease causation",
                        "All four criteria must be satisfied to establish causation",
                        "Postulates applicable to observable effects (pigment production) and diseases",
                        "Foundation of medical microbiology and germ theory",
                        "Enable rational development of treatments and preventions"
                    ],
                    limitations: {
                        modernChallenges: {
                            viralDiseases: "Viruses cannot be grown in pure culture outside cells (required cell culture techniques developed later)",
                            opportunisticPathogens: "Normal flora can cause disease in immunocompromised (organism present in healthy and diseased)",
                            asymptomaticCarriers: "Healthy carriers of pathogens (e.g., Salmonella typhi in Typhoid Mary)",
                            nonculturableOrganisms: "Some pathogens cannot be cultured (Treponema pallidum - syphilis)",
                            multifactorialDiseases: "Disease requires multiple factors (pathogen + host immunity + environment)",
                            ethicalIssues: "Cannot intentionally infect humans; rely on animal models or natural infections"
                        },
                        modernModifications: {
                            molecularKochsPostulates: "For unculturable organisms; use molecular techniques (PCR, sequencing)",
                            criteria: [
                                "Nucleic acid sequence of pathogen found in diseased but not healthy",
                                "Sequence correlates with pathology",
                                "Introducing gene into host causes disease",
                                "Re-isolate sequence from experimentally infected host"
                            ]
                        }
                    },
                    extensions: [
                        "Apply postulates to different bacterial effects (e.g., bioluminescence in Vibrio fischeri)",
                        "Discuss why postulates fail for viruses and unculturable bacteria",
                        "Research molecular Koch's postulates for modern microbiology",
                        "Investigate one of Koch's original experiments (anthrax, TB, cholera)",
                        "Design experiment to prove antibiotic resistance plasmid causes resistance phenotype"
                    ],
                    historicalImpact: [
                        "Established microbiology as legitimate medical science",
                        "Disproved miasma theory and spontaneous generation",
                        "Enabled rational vaccine and antibiotic development",
                        "Transformed public health (sanitation, water treatment, disease control)",
                        "Foundation for understanding emerging infectious diseases",
                        "Still used today in modified form (molecular Koch's postulates)"
                    ]
                }
            },

            // ========================================
            // BACTERIAL GROWTH CURVE EXPERIMENT
            // ========================================
            
            bacterial_growth_curve: {
                name: "Bacterial Growth Curve - Exponential Growth and Population Dynamics",
                relatedTopics: ['microbial_growth', 'bacterial_structure'],
                category: 'growth_kinetics',
                historicalBackground: {
                    scientists: "Multiple contributors over time",
                    earlyWork: "1890s-1900s: Recognition that bacteria grow exponentially",
                    formalization: "1920s-1940s: Mathematical models developed",
                    keyFigures: {
                        JacquesMonod: "1940s-1950s: Extensive studies on bacterial growth kinetics; diauxic growth",
                        TerryPeppler: "Continuous culture (chemostat) development",
                        others: "Max Delbrück, Salvador Luria (phage and bacterial growth)"
                    },
                    significance: "Understanding growth phases essential for:",
                    applications: [
                        "Antibiotic production (harvest at right time)",
                        "Industrial fermentation",
                        "Understanding infection progression",
                        "Food microbiology (predict spoilage)",
                        "Biotechnology (protein expression timing)"
                    ],
                    context: "Before understanding growth curves, industrial processes inefficient; didn't know optimal harvest time"
                },
                labExperiment: {
                    title: "Measuring Bacterial Growth Curve: Monitoring E. coli Population Dynamics",
                    hypothesis: "Bacterial growth in batch culture follows predictable pattern with four distinct phases: lag, exponential (log), stationary, and death",
                    purpose: "Monitor bacterial growth over time, identify growth phases, calculate generation time",
                    background: {
                        batchCulture: "Closed system; nutrients finite, waste accumulates",
                        phases: "Lag (adaptation) → Log (exponential) → Stationary (equilibrium) → Death (decline)",
                        measurements: {
                            directCount: "Count cells under microscope (dead + alive)",
                            viableCount: "Plate count (CFU/ml) - only living cells",
                            turbidity: "Spectrophotometry (OD600) - indirect measure of cell density"
                        }
                    },
                    variables: {
                        independent: "Time",
                        dependent: "Cell density (OD600 or CFU/ml)",
                        controlled: ["Temperature", "Oxygen", "Medium composition", "Inoculum size"]
                    },
                    materials: [
                        "E. coli culture (overnight culture in log phase)",
                        "Nutrient broth or LB broth (sterile)",
                        "Erlenmeyer flasks (250 ml) with sterile broth",
                        "Spectrophotometer (wavelength 600 nm)",
                        "Cuvettes (for spectrophotometer)",
                        "Sterile pipettes (1 ml, 10 ml)",
                        "Nutrient agar plates (for viable counts)",
                        "Shaking incubator (37°C, 200 rpm)",
                        "Sterile saline or PBS for dilutions",
                        "Timer or clock",
                        "Graph paper or computer spreadsheet"
                    ],
                    safetyPrecautions: [
                        "E. coli K-12 is BSL-1 but use aseptic technique",
                        "Autoclave all materials after use",
                        "Avoid creating aerosols",
                        "Wash hands thoroughly"
                    ],
                    procedure: {
                        setup: [
                            "CULTURE PREPARATION:",
                            "1. Day before: Inoculate E. coli into nutrient broth; incubate overnight at 37°C with shaking",
                            "   - This is starter culture (should be in log phase by morning)",
                            "2. Day of experiment:",
                            "   a. Prepare 250 ml flask with 100 ml sterile nutrient broth",
                            "   b. Inoculate with 1 ml overnight culture (1:100 dilution)",
                            "   c. Start timer (Time 0)",
                            "   d. Place in shaking incubator (37°C, 200 rpm)",
                            "3. Label as 'Growth Curve Culture' with time started"
                        ],
                        sampling: [
                            "TAKING SAMPLES (Every 30-60 minutes for 8-12 hours):",
                            "1. Remove flask from incubator (work quickly to minimize temperature change)",
                            "2. Swirl flask gently to resuspend bacteria",
                            "3. Aseptically remove 2 ml sample with sterile pipette",
                            "4. Return flask to incubator immediately",
                            "5. Divide sample:",
                            "   - 1 ml for spectrophotometry (OD600)",
                            "   - 1 ml for viable count (optional, but recommended for 3-4 timepoints)"
                        ],
                        spectrophotometry: [
                            "MEASURING OPTICAL DENSITY (OD600):",
                            "1. Blank spectrophotometer:",
                            "   - Fill cuvette with sterile broth (same as growth medium)",
                            "   - Set wavelength to 600 nm",
                            "   - Zero/blank instrument",
                            "2. Measure sample:",
                            "   - Pour sample into cuvette (fill 2/3 full)",
                            "   - Wipe outside of cuvette (fingerprints interfere)",
                            "   - Insert into spectrophotometer",
                            "   - Record OD600 value",
                            "3. If OD > 1.0: Dilute sample (e.g., 1:10) and measure; multiply result by dilution factor",
                            "4. Record time and OD600 in data table",
                            "5. Repeat every 30-60 minutes for 8-12 hours"
                        ],
                        viableCounting: [
                            "VIABLE CELL COUNT (CFU/ml) - Optional but informative:",
                            "1. Perform at 3-4 time points: Time 0, mid-log phase, stationary phase, death phase",
                            "2. Serial dilutions:",
                            "   a. Prepare dilution blanks: 9 ml sterile saline in test tubes (10⁻¹ to 10⁻⁸)",
                            "   b. Transfer 1 ml sample to first tube (10⁻¹ dilution)",
                            "   c. Mix, transfer 1 ml to next tube (10⁻² dilution)",
                            "   d. Repeat to 10⁻⁶ or 10⁻⁸ (expect high cell density in log phase)",
                            "3. Plate count:",
                            "   a. Spread 0.1 ml from each dilution onto nutrient agar plate",
                            "   b. Use spread plate technique (sterile glass spreader or beads)",
                            "   c. Incubate plates inverted at 37°C for 24 hours",
                            "4. Count colonies:",
                            "   - Count plates with 30-300 colonies (statistically valid range)",
                            "   - Calculate CFU/ml: (# colonies × dilution factor) / volume plated",
                            "   - Example: 150 colonies on 10⁻⁶ plate, plated 0.1 ml",
                            "     CFU/ml = 150 × 10⁶ / 0.1 = 1.5 × 10⁹ CFU/ml"
                        ],
                        dataCollection: [
                            "RECORDING DATA:",
                            "Create data table with columns:",
                            "- Time (hours)",
                            "- OD600",
                            "- CFU/ml (if performing viable counts)",
                            "- Log₁₀(CFU/ml) (for plotting)",
                            "- Observations (appearance, odor, etc.)",
                            "",
                            "Sample every 30-60 minutes until stationary phase evident (OD plateaus)",
                            "Continue sampling into death phase if time permits (2-4 more hours)"
                        ]
                    },
                    expectedResults: {
                        lagPhase: {
                            timing: "0-2 hours (variable depending on inoculum health)",
                            OD600: "Remains low and constant (~0.05-0.10)",
                            CFU: "Constant or slight increase",
                            cellActivity: "High metabolic activity but not dividing yet",
                            appearance: "Broth remains relatively clear"
                        },
                        logPhase: {
                            timing: "2-6 hours",
                            OD600: "Increases exponentially (doubles regularly)",
                            CFU: "Increases exponentially",
                            plot: "Linear on semi-log plot (log CFU vs time)",
                            generationTime: "~20 minutes for E. coli (optimal conditions)",
                            appearance: "Broth becomes increasingly turbid (cloudy)"
                        },
                        stationaryPhase: {
                            timing: "6-10 hours",
                            OD600: "Plateaus (no further increase)",
                            CFU: "Constant (growth rate = death rate)",
                            causes: "Nutrient depletion, waste accumulation",
                            appearance: "Maximum turbidity"
                        },
                        deathPhase: {
                            timing: ">10 hours",
                            OD600: "Remains constant or decreases slightly (cells lyse)",
                            CFU: "Decreases (cells die)",
                            appearance: "May clear slightly as cells lyse"
                        }
                    },
                    dataTable: [
                        ["Time (hr)", "OD600", "CFU/ml", "Log₁₀(CFU)", "Growth Phase"],
                        ["0", "0.05", "1 × 10⁶", "6.0", "Lag"],
                        ["1", "0.06", "1.2 × 10⁶", "6.08", "Lag"],
                        ["2", "0.10", "5 × 10⁶", "6.70", "Early Log"],
                        ["3", "0.25", "5 × 10⁷", "7.70", "Log"],
                        ["4", "0.60", "5 × 10⁸", "8.70", "Log"],
                        ["5", "1.20", "5 × 10⁹", "9.70", "Late Log"],
                        ["6", "1.50", "8 × 10⁹", "9.90", "Stationary"],
                        ["7", "1.52", "8 × 10⁹", "9.90", "Stationary"],
                        ["8", "1.50", "7.5 × 10⁹", "9.88", "Stationary"],
                        ["10", "1.48", "6 × 10⁹", "9.78", "Death"],
                        ["12", "1.40", "4 × 10⁹", "9.60", "Death"]
                    ],
                    graphing: {
                        graph1: {
                            title: "Bacterial Growth Curve (Linear Scale)",
                            xAxis: "Time (hours)",
                            yAxis: "OD600 or CFU/ml",
                            description: "Sigmoid (S-shaped) curve showing all four phases"
                        },
                        graph2: {
                            title: "Bacterial Growth Curve (Semi-log Plot)",
                            xAxis: "Time (hours)",
                            yAxis: "Log₁₀(CFU/ml)",
                            description: "Log phase appears as straight line (linear); useful for calculating generation time"
                        }
                    },
                    calculations: {
                        generationTime: {
                            definition: "Time for population to double",
                            formula: "g = t / n",
                            where: "g = generation time; t = elapsed time; n = number of generations",
                            nFormula: "n = log₁₀(Nt/N0) / log₁₀(2) = 3.3 × log₁₀(Nt/N0)",
                            example: {
                                timepoint1: "Hour 2: N0 = 5 × 10⁶ CFU/ml",
                                timepoint2: "Hour 5: Nt = 5 × 10⁹ CFU/ml",
                                elapsedTime: "t = 3 hours = 180 minutes",
                                generations: "n = 3.3 × log₁₀(5×10⁹ / 5×10⁶) = 3.3 × log₁₀(1000) = 3.3 × 3 = 9.9 ≈ 10 generations",
                                generationTime: "g = 180 min / 10 = 18 minutes"
                            }
                        },
                        growthRate: {
                            definition: "Number of generations per unit time",
                            formula: "k = n / t",
                            relationship: "k = 1 / g (growth rate = inverse of generation time)"
                        }
                    },
                    results: "Bacterial growth in batch culture exhibits four distinct phases. E. coli demonstrated lag phase (0-2 hr), exponential log phase (2-6 hr, generation time ~20 min), stationary phase (6-10 hr), and death phase (>10 hr). Growth curve was sigmoid on linear scale and linear during log phase on semi-log plot.",
                    conclusions: [
                        "Batch culture growth follows predictable four-phase pattern",
                        "Exponential growth during log phase characterized by constant generation time",
                        "Nutrient limitation and waste accumulation cause stationary phase",
                        "Understanding growth phases essential for industrial applications",
                        "OD600 provides convenient, rapid method for monitoring growth"
                    ],
                    interpretation: {
                        lagPhase: {
                            factors: "Inoculum health, medium composition, environmental change",
                            minimize: "Use log-phase inoculum, same medium, avoid temperature shock",
                            significance: "Cells adapting; synthesizing enzymes needed for new environment"
                        },
                        logPhase: {
                            characteristics: "Constant growth rate, cells healthiest and most uniform",
                            harvesting: "Best time for experiments requiring active cells",
                            antibiotics: "Most effective during log phase (cells dividing)"
                        },
                        stationaryPhase: {
                            primaryMetabolite: "Nutrients exhausted; cells stop dividing",
                            secondaryMetabolite: "Some cells produce antibiotics, toxins (industrial interest)",
                            endospores: "Spore-forming bacteria (Bacillus, Clostridium) form spores"
                        },
                        deathPhase: {
                            causes: "Nutrient depletion, toxic waste, autolysis",
                            rate: "Often exponential (mirror of growth)",
                            VBNC: "Some cells enter 'viable but non-culturable' state"
                        }
                    },
                    applications: [
                        "Industrial fermentation: Harvest at optimal phase for product yield",
                        "Antibiotic production: Many antibiotics produced in stationary phase",
                        "Protein expression: Induce expression in log phase for maximum yield",
                        "Food microbiology: Predict shelf life based on growth rate",
                        "Infection dynamics: Understand bacterial population in host",
                        "Wastewater treatment: Optimize bacterial activity for pollutant degradation"
                    ],
                    variations: {
                        continuousCulture: {
                            chemostat: "Maintain cells in log phase indefinitely by continuous nutrient addition and waste removal",
                            advantages: "Steady-state growth; study physiology at constant growth rate",
                            applications: "Research, industrial fermentation"
                        },
                        diauxicGrowth: {
                            definition: "Two exponential growth phases separated by lag",
                            cause: "Utilization of two sugars sequentially (e.g., glucose then lactose)",
                            regulation: "Catabolite repression (glucose represses lac operon)",
                            discoverer: "Jacques Monod (led to operon concept)"
                        }
                    },
                    extensions: [
                        "Compare generation times of different bacterial species",
                        "Investigate effect of temperature on growth rate",
                        "Study effect of antibiotics on growth curve",
                        "Measure growth in different media (rich vs minimal)",
                        "Observe diauxic growth with glucose + lactose",
                        "Calculate growth yield (biomass per unit substrate)"
                    ],
                    troubleshooting: [
                        "No growth: Check sterility, inoculum viability, incubation conditions",
                        "Slow growth: Check temperature, oxygen, nutrient adequacy",
                        "Contamination: Colonies different morphology; restart with fresh culture",
                        "OD too high: Dilute sample before measuring (OD should be 0.1-1.0 for accuracy)"
                    ]
                }
            },

            // ========================================
            // ANTIBIOTIC SENSITIVITY EXPERIMENT
            // ========================================
            
            antibiotic_sensitivity: {
                name: "Antibiotic Sensitivity Testing - Kirby-Bauer Disk Diffusion Method",
                relatedTopics: ['medical_microbiology', 'bacterial_structure', 'microbial_genetics'],
                category: 'antimicrobial_testing',
                historicalBackground: {
                    scientists: "William Kirby and Alfred Bauer",
                    year: "1966 (standardized method published)",
                    earlier: "1940s: Antibiotic disk testing developed after penicillin discovery",
                    penicillin: "Alexander Fleming (1928 discovery); mass production 1940s",
                    context: "Penicillin revolutionized medicine but resistance emerged quickly; needed standardized testing",
                    standardization: "Kirby and Bauer standardized variables: medium, inoculum density, disk potency, incubation",
                    significance: "Enabled rational antibiotic selection; reduced trial-and-error prescribing",
                    currentUse: "Still standard method worldwide (with modifications)",
                    alternatives: "Minimum Inhibitory Concentration (MIC) by broth dilution or E-test",
                    resistanceCrisis: "Antibiotic resistance now major global health threat",
                    quote: "The improper use of antimicrobials results in the selection of resistant strains" - WHO
                },
                labExperiment: {
                    title: "Kirby-Bauer Antibiotic Sensitivity Testing",
                    hypothesis: "If bacteria are susceptible to an antibiotic, then the antibiotic will diffuse through agar and create a zone of inhibition around the disk where bacteria cannot grow",
                    purpose: "Determine antibiotic susceptibility of bacterial isolate; guide clinical treatment decisions",
                    clinicalContext: "Physician isolates bacteria from patient infection; lab tests which antibiotics will work",
                    variables: {
                        independent: "Type of antibiotic",
                        dependent: "Zone of inhibition diameter (mm)",
                        controlled: [
                            "Bacterial inoculum density (0.5 McFarland standard)",
                            "Medium (Mueller-Hinton agar - standardized)",
                            "Incubation (35°C, 16-18 hours)",
                            "Disk antibiotic concentration"
                        ]
                    },
                    materials: [
                        "Bacterial culture: Test organism (e.g., E. coli, S. aureus, P. aeruginosa)",
                        "Mueller-Hinton agar plates (150 mm diameter) - MUST use this medium for standardization",
                        "Sterile saline or nutrient broth",
                        "Sterile cotton swabs",
                        "Antibiotic disks: Multiple antibiotics (e.g., penicillin, tetracycline, erythromycin, gentamicin, ciprofloxacin, vancomycin)",
                        "Disk dispenser or forceps (sterilized)",
                        "McFarland standard (0.5) or turbidity meter",
                        "Ruler or calipers (measure zone diameters)",
                        "Incubator (35°C)",
                        "Marker for labeling",
                        "Kirby-Bauer interpretation chart (CLSI standards)"
                    ],
                    safetyPrecautions: [
                        "Treat all bacteria as potential pathogens",
                        "Use BSL-2 precautions for clinical isolates",
                        "Sterilize all materials after use",
                        "Dispose of plates in biohazard waste",
                        "Wash hands thoroughly"
                    ],
                    procedure: {
                        preparation: [
                            "PREPARING INOCULUM (CRITICAL FOR STANDARDIZATION):",
                            "1. Inoculum must be standardized to 0.5 McFarland turbidity standard",
                            "   - Corresponds to ~1.5 × 10⁸ CFU/ml",
                            "2. Pick 3-5 isolated colonies from overnight culture (18-24 hr old)",
                            "3. Suspend in 5 ml sterile saline or broth",
                            "4. Mix thoroughly (vortex)",
                            "5. Adjust turbidity:",
                            "   - Compare to 0.5 McFarland standard (visual or turbidity meter)",
                            "   - Too cloudy: Dilute with saline",
                            "   - Too clear: Add more bacteria",
                            "6. Use within 15 minutes (bacteria will grow/die)"
                        ],
                        inoculation: [
                            "INOCULATING MUELLER-HINTON AGAR PLATE:",
                            "1. Label plate bottom (name, organism, date)",
                            "2. Dip sterile cotton swab into bacterial suspension",
                            "3. Remove excess liquid by pressing and rotating swab against tube wall",
                            "4. Streak entire surface of Mueller-Hinton agar plate:",
                            "   a. Swab entire surface back and forth",
                            "   b. Rotate plate 60°",
                            "   c. Swab entire surface again",
                            "   d. Rotate plate 60° again",
                            "   e. Swab one final time",
                            "   - GOAL: Confluent lawn of bacteria (no isolated colonies)",
                            "5. Let plate dry 3-5 minutes (lid slightly open in biosafety cabinet)"
                        ],
                        diskApplication: [
                            "APPLYING ANTIBIOTIC DISKS:",
                            "1. Using sterile forceps or disk dispenser, place antibiotic disks on inoculated plate",
                            "2. Press down gently to ensure contact (no air bubbles)",
                            "3. Spacing:",
                            "   - Disks at least 24 mm apart (center to center)",
                            "   - Standard plate (150 mm): 12 disks maximum",
                            "   - Smaller plate (100 mm): 4-5 disks",
                            "4. Once disk touches agar, DO NOT move it (antibiotic starts diffusing immediately)",
                            "5. Label disk positions on plate bottom (or use template)",
                            "6. Incubate within 15 minutes of disk application"
                        ],
                        incubation: [
                            "INCUBATION:",
                            "1. Invert plates",
                            "2. Incubate at 35°C (NOT 37°C - standardized to 35°C)",
                            "3. Incubate 16-18 hours (overnight)",
                            "   - Too short: Zones too small (false susceptible)",
                            "   - Too long: Zones too large (false resistant)",
                            "4. Do NOT open incubator unnecessarily"
                        ],
                        measurement: [
                            "MEASURING AND INTERPRETING ZONES:",
                            "1. After 16-18 hours, examine plates",
                            "2. Measure zone of inhibition diameter (mm):",
                            "   - Hold ruler across center of disk",
                            "   - Measure from edge to edge (including disk diameter)",
                            "   - View from bottom of plate against dark background",
                            "   - Measure to complete inhibition (no visible growth)",
                            "3. Record measurements for each antibiotic",
                            "4. Interpret using Kirby-Bauer chart (CLSI standards):",
                            "   - Compare measured diameter to breakpoints",
                            "   - Classify as: SUSCEPTIBLE (S), INTERMEDIATE (I), or RESISTANT (R)",
                            "5. Special observations:",
                            "   - Swarming: Use colony edge, not swarm",
                            "   - Satellite colonies within zone: Usually ignore (may indicate resistance)",
                            "   - No growth: Inoculum problem or organism killed during prep"
                        ]
                    },
                    interpretation: {
                        zoneDiameters: {
                            principle: "Larger zone = more susceptible; smaller zone = more resistant; no zone = resistant",
                            factors: "Antibiotic diffusion rate, molecular weight, bacterial susceptibility"
                        },
                        breakpoints: {
                            definition: "Diameter cutoffs for S/I/R classification (set by CLSI or EUCAST)",
                            example: "Penicillin vs E. coli: ≥29 mm = S; 28-21 mm = I; ≤20 mm = R",
                            speciesSpecific: "Breakpoints differ by organism and antibiotic",
                            considerations: "Based on blood/tissue antibiotic levels and clinical outcomes"
                        },
                        categories: {
                            susceptible: "Organism likely inhibited by usual antibiotic dose",
                            intermediate: "May work with higher dose or at infection site where drug concentrates",
                            resistant: "Not likely effective even at high dose"
                        }
                    },
                    expectedResults: {
                        gramPositive: {
                            organism: "Staphylococcus aureus",
                            susceptible: ["Vancomycin (large zone)", "Gentamicin", "Ciprofloxacin"],
                            resistant: ["Penicillin (no zone - beta-lactamase)", "Ampicillin (small/no zone)"],
                            interpretation: "Gram-positive often resistant to beta-lactams (penicillin) due to beta-lactamase enzyme"
                        },
                        gramNegative: {
                            organism: "Escherichia coli",
                            susceptible: ["Gentamicin", "Ciprofloxacin", "Ceftriaxone"],
                            resistant: ["Penicillin (no zone - outer membrane barrier)", "Vancomycin (no zone - cannot penetrate)"],
                            interpretation: "Gram-negative intrinsically resistant to vancomycin (large molecule, outer membrane)"
                        },
                        multidrugResistant: {
                            MRSA: "Methicillin-resistant S. aureus - resistant to most beta-lactams; use vancomycin",
                            ESBL: "Extended-spectrum beta-lactamase producers (E. coli, Klebsiella) - resistant to many cephalosporins; use carbapenems",
                            CRE: "Carbapenem-resistant Enterobacteriaceae - resistant to carbapenems; limited options (colistin, tigecycline)"
                        }
                    },
                    dataTable: [
                        ["Antibiotic", "Disk Content (μg)", "Zone Diameter (mm)", "Interpretation (S/I/R)", "Clinical Use"],
                        ["Penicillin G", "10", "0", "R", "Not effective"],
                        ["Ampicillin", "10", "12", "R", "Not effective"],
                        ["Gentamicin", "10", "18", "S", "Effective - use"],
                        ["Ciprofloxacin", "5", "28", "S", "Effective - use"],
                        ["Tetracycline", "30", "16", "I", "Intermediate - consider"],
                        ["Erythromycin", "15", "22", "S", "Effective - use"],
                        ["Vancomycin", "30", "0", "R", "Not effective (Gram-negative)"],
                        ["Ceftriaxone", "30", "25", "S", "Effective - use"]
                    ],
                    mechanismsOfResistance: {
                        enzymaticDestruction: {
                            example: "Beta-lactamase destroys penicillin (breaks beta-lactam ring)",
                            organisms: "Staphylococcus, E. coli, Klebsiella",
                            clinicalImpact: "Major cause of penicillin resistance"
                        },
                        targetModification: {
                            example: "Altered penicillin-binding proteins (PBPs) in MRSA",
                            mechanism: "Antibiotic cannot bind to modified target",
                            result: "Resistance to entire class (all beta-lactams)"
                        },
                        decreasedPermeability: {
                            example: "Gram-negative outer membrane blocks large antibiotics (vancomycin)",
                            mechanism: "Loss of porin channels",
                            result: "Intrinsic or acquired resistance"
                        },
                        effluxPumps: {
                            mechanism: "Active transport pumps antibiotic out of cell",
                            examples: "Tetracycline, fluoroquinolone resistance",
                            regulation: "Often overexpressed in resistant strains"
                        },
                        bypassPathway: {
                            example: "Alternative metabolic pathway not inhibited by drug",
                            mechanism: "Cell uses different enzyme",
                            result: "Drug ineffective even if reaches target"
                        }
                    },
                    results: "Antibiotic susceptibility testing revealed varying zones of inhibition. E. coli was susceptible to gentamicin (18 mm), ciprofloxacin (28 mm), and ceftriaxone (25 mm), but resistant to penicillin (0 mm) and vancomycin (0 mm). Results guide appropriate antibiotic therapy.",
                    conclusions: [
                        "Kirby-Bauer method provides rapid, standardized antibiotic susceptibility testing",
                        "Zone diameter correlates with susceptibility; larger zone = more susceptible",
                        "Gram-negative bacteria intrinsically resistant to some antibiotics (e.g., vancomycin)",
                        "Antibiotic resistance is major clinical concern",
                        "Susceptibility testing essential for rational antibiotic therapy"
                    ],
                    clinicalRelevance: {
                        guideTreatment: "Physician selects antibiotic based on susceptibility results",
                        avoidResistance: "Targeted therapy reduces resistance development (vs broad-spectrum empiric)",
                        costEffective: "Use narrow-spectrum (cheaper) when possible",
                        patientSafety: "Avoid ineffective drugs; select most appropriate",
                        surveillance: "Track resistance patterns in hospital/community"
                    },
                    limitations: [
                        "Qualitative (S/I/R) not quantitative (MIC)",
                        "Does not predict clinical outcome (host factors important)",
                        "Slow (16-18 hours; molecular methods faster)",
                        "Requires pure culture (cannot test mixed infections directly)",
                        "Some organisms require special media (fastidious bacteria)"
                    ],
                    extensions: [
                        "Determine Minimum Inhibitory Concentration (MIC) by broth dilution",
                        "E-test strips (quantitative gradient method)",
                        "Test combination antibiotics (synergy testing)",
                        "Investigate molecular basis of resistance (PCR for resistance genes)",
                        "Compare resistance patterns of clinical isolates vs environmental",
                        "Study effect of antibiotic combinations on resistance evolution"
                    ],
                    globalContext: {
                        resistanceCrisis: "Antibiotic resistance causes 700,000+ deaths/year globally (WHO)",
                        causes: [
                            "Overuse in humans (unnecessary prescriptions)",
                            "Agricultural use (livestock growth promotion)",
                            "Lack of new antibiotics (discovery gap)",
                            "Poor infection control (hospital-acquired infections)"
                        ],
                        solutions: [
                            "Antibiotic stewardship programs",
                            "Rapid diagnostics for targeted therapy",
                            "New antibiotic development",
                            "Alternative therapies (phage therapy, immunotherapy)",
                            "Global surveillance systems"
                        ]
                    }
                }
            },

            // ========================================
            // BACTERIAL TRANSFORMATION EXPERIMENT
            // ========================================
            
            bacterial_transformation: {
                name: "Bacterial Transformation - Introducing Foreign DNA into Bacteria",
                relatedTopics: ['microbial_genetics', 'bacterial_structure'],
                category: 'genetic_engineering',
                historicalBackground: {
                    scientist: "Frederick Griffith",
                    year: "1928",
                    experiment: "Transformation in Streptococcus pneumoniae",
                    discovery: "Killed virulent bacteria could transform non-virulent bacteria into virulent form",
                    observation: "Injected mice with heat-killed virulent + live non-virulent bacteria → mice died; isolated live virulent bacteria",
                    conclusion: "Some 'transforming principle' from dead virulent bacteria changed non-virulent",
                    molecularBasis: "Not understood until 1944",
                    averyMacLeodMcCarty: {
                        scientists: "Oswald Avery, Colin MacLeod, Maclyn McCarty",
                        year: "1944",
                        discovery: "Transforming principle is DNA (not protein)",
                        experiment: "Destroyed different molecules (protein, DNA, RNA); only DNA destruction prevented transformation",
                        significance: "First proof that DNA is genetic material (before Watson & Crick)"
                    },
                    modernUse: "Foundation of genetic engineering and molecular biology",
                    applications: "Cloning, recombinant protein production, gene therapy, CRISPR",
                    significance: "Enabled biotechnology revolution; insulin, vaccines, research tools",
                    nobelConnection: "Work led to understanding of DNA as genetic material; enabled later Nobel Prizes"
                },
                labExperiment: {
                    title: "Bacterial Transformation: Introducing Antibiotic Resistance Gene",
                    hypothesis: "If competent bacteria can take up foreign DNA, then transforming E. coli with plasmid containing antibiotic resistance gene will allow cells to grow on antibiotic-containing medium",
                    purpose: "Demonstrate bacterial transformation using plasmid DNA; introduce antibiotic resistance",
                    background: {
                        transformation: "Uptake of naked DNA from environment",
                        competence: "Ability of cells to take up DNA (natural or artificial)",
                        plasmid: "Small circular DNA; replicates independently; often carries selectable marker",
                        selection: "Antibiotic kills non-transformed cells; only transformed cells survive",
                        applications: "Cloning genes, producing recombinant proteins, studying gene function"
                    },
                    variables: {
                        independent: "Presence of plasmid DNA",
                        dependent: "Bacterial growth on antibiotic plates",
                        controlled: ["Competent cell preparation", "Transformation conditions (CaCl₂, heat shock)", "Antibiotic concentration"]
                    },
                    materials: [
                        "E. coli competent cells (DH5α, TOP10, or BL21 strain) - stored at -80°C",
                        "Plasmid DNA: pGLO, pUC19, or similar (contains antibiotic resistance gene, e.g., ampicillin resistance)",
                        "LB broth and LB agar plates",
                        "LB agar plates containing antibiotic (e.g., ampicillin 100 μg/ml)",
                        "CaCl₂ solution (50 mM, ice-cold) - for competent cell preparation OR use pre-made competent cells",
                        "SOC medium (for recovery after transformation)",
                        "Microcentrifuge tubes",
                        "Ice bucket",
                        "42°C water bath (for heat shock)",
                        "37°C incubator and shaking incubator",
                        "Sterile pipettes and spreaders",
                        "Bunsen burner or biosafety cabinet"
                    ],
                    safetyPrecautions: [
                        "E. coli K-12 strains are BSL-1 but use aseptic technique",
                        "Ampicillin-resistant bacteria require proper disposal",
                        "Autoclave all materials after use",
                        "Avoid creating aerosols"
                    ],
                    procedure: {
                        competentCellPreparation: [
                            "PREPARING COMPETENT CELLS (if not using pre-made):",
                            "Note: This takes 1-2 days; often purchased ready-made",
                            "1. Grow E. coli overnight in LB broth at 37°C",
                            "2. Dilute 1:100 into fresh LB broth; grow to mid-log phase (OD600 = 0.4-0.6)",
                            "3. Chill on ice for 10 minutes",
                            "4. Centrifuge (5000 rpm, 10 min, 4°C)",
                            "5. Resuspend pellet in ice-cold 50 mM CaCl₂ (1/2 original volume)",
                            "6. Incubate on ice 30 minutes",
                            "7. Centrifuge again; resuspend in smaller volume CaCl₂",
                            "8. Aliquot and store at -80°C (or use immediately)",
                            "",
                            "MECHANISM: CaCl₂ neutralizes negative charges on DNA and cell membrane; creates pores for DNA entry"
                        ],
                        transformation: [
                            "TRANSFORMATION PROCEDURE:",
                            "DAY 1:",
                            "1. Thaw competent cells on ice (~10 minutes) - DO NOT warm!",
                            "2. Label two microcentrifuge tubes: '+DNA' and '-DNA' (negative control)",
                            "3. Add 50-100 μl competent cells to each tube (keep on ice)",
                            "4. Add plasmid DNA to '+DNA' tube:",
                            "   - Add 1-10 ng plasmid DNA (typically 1-2 μl of 10 ng/μl stock)",
                            "   - Mix gently by tapping (do NOT pipette up and down; shears DNA)",
                            "5. Do NOT add DNA to '-DNA' tube (negative control)",
                            "6. Incubate on ice for 20-30 minutes",
                            "   - DNA binds to cell surface; begins entry",
                            "7. HEAT SHOCK: Transfer tubes to 42°C water bath for exactly 45-90 seconds",
                            "   - CRITICAL STEP: Creates transient pores in membrane",
                            "8. IMMEDIATELY return tubes to ice for 2 minutes",
                            "   - Allows pores to close; DNA trapped inside",
                            "9. Add 250-900 μl SOC medium (or LB broth) to each tube",
                            "10. Incubate at 37°C for 45-60 minutes with shaking (200 rpm)",
                            "    - RECOVERY: Cells express antibiotic resistance gene",
                            "    - Critical: Cells need time to produce resistance protein before antibiotic exposure",
                            "11. Plate cells:",
                            "    a. LB plate (no antibiotic): Spread 50 μl from -DNA tube",
                            "       - Positive control: All competent cells should grow",
                            "    b. LB + ampicillin plate: Spread 50 μl from -DNA tube",
                            "       - Negative control: Should be no growth (no resistance)",
                            "    c. LB + ampicillin plate: Spread 50 μl from +DNA tube",
                            "       - Experimental: Only transformed cells grow",
                            "    d. LB + ampicillin plate: Spread 100 μl from +DNA tube",
                            "       - Get more colonies for counting",
                            "12. Let plates absorb liquid (~5 min); then invert",
                            "13. Incubate at 37°C overnight (16-18 hours)",
                            "",
                            "DAY 2:",
                            "14. Count colonies on each plate",
                            "15. Calculate transformation efficiency"
                        ],
                        alternativeProtocol: [
                            "ELECTROPORATION (alternative to heat shock):",
                            "- Uses electrical pulse instead of heat shock",
                            "- Creates pores via electrical field",
                            "- More efficient (10-100× more transformants)",
                            "- Requires specialized equipment (electroporator)",
                            "- Used for difficult-to-transform organisms",
                            "- Procedure: Mix cells + DNA in electroporation cuvette → pulse → immediate SOC addition → recover"
                        ]
                    },
                    expectedResults: {
                        positiveControl: {
                            plate: "LB (no antibiotic) + cells without DNA",
                            result: "Confluent growth (lawn of bacteria)",
                            interpretation: "Competent cells are viable"
                        },
                        negativeControl: {
                            plate: "LB + ampicillin + cells without DNA",
                            result: "No growth (or very few colonies from spontaneous mutants)",
                            interpretation: "Antibiotic working; cells not naturally resistant"
                        },
                        experimental: {
                            plate: "LB + ampicillin + cells with plasmid DNA",
                            result: "50-500+ colonies (depending on efficiency)",
                            interpretation: "These cells took up plasmid DNA and express resistance gene"
                        },
                        transformationEfficiency: {
                            calculation: "Number of transformants per μg DNA",
                            typical: "10⁶ to 10⁹ transformants per μg DNA (depending on method and strain)",
                            goodResult: ">10⁶ for CaCl₂ method; >10⁸ for electroporation"
                        }
                    },
                    dataTable: [
                        ["Plate Type", "DNA Added?", "Expected Result", "Colony Count", "Interpretation"],
                        ["LB only", "No", "Lawn of growth", "Too many", "Cells viable"],
                        ["LB + Amp", "No", "No growth", "0-5", "No natural resistance"],
                        ["LB + Amp", "Yes (50 μl)", "50-200 colonies", "125", "Transformation occurred"],
                        ["LB + Amp", "Yes (100 μl)", "100-400 colonies", "286", "More cells plated"],
                        ["", "", "", "", ""],
                        ["Calculation", "", "", "", ""],
                        ["Colonies (100 μl plate)", "", "", "286", ""],
                        ["Total volume plated", "", "", "100 μl", ""],
                        ["Total transformation volume", "", "", "1000 μl", ""],
                        ["Total transformants", "", "", "2,860", "= 286 × (1000/100)"],
                        ["DNA used", "", "", "10 ng = 0.01 μg", ""],
                        ["Transformation efficiency", "", "", "2.86 × 10⁵ per μg", "= 2860 / 0.01"]
                    ],
                    calculations: {
                        transformationEfficiency: {
                            formula: "Efficiency = (# colonies / amount of DNA plated) × (total volume / volume plated)",
                            example: {
                                colonies: "286 colonies on plate with 100 μl",
                                totalVolume: "1000 μl total transformation reaction",
                                volumePlated: "100 μl plated",
                                totalTransformants: "286 × (1000/100) = 2,860 total transformants",
                                DNAused: "10 ng = 0.01 μg",
                                efficiency: "2,860 / 0.01 = 2.86 × 10⁵ transformants/μg DNA"
                            },
                            goodEfficiency: {
                                CaCl2: "10⁶ - 10⁷ transformants/μg",
                                electroporation: "10⁸ - 10⁹ transformants/μg",
                                commercial: "Some kits claim >10⁹ transformants/μg"
                            }
                        },
                        percentageTransformation: {
                            formula: "% = (transformants / total cells) × 100",
                            note: "Usually <1% of cells take up DNA"
                        }
                    },
                    molecularMechanism: {
                        CaCl2treatment: [
                            "Ca²⁺ ions neutralize negative charges on DNA phosphate backbone",
                            "Ca²⁺ also binds to negative charges on lipopolysaccharides in cell membrane",
                            "Cold temperature makes membrane more rigid; Ca²⁺-DNA complexes adhere to surface"
                        ],
                        heatShock: [
                            "42°C thermal stress creates transient pores in membrane",
                            "Causes imbalance in membrane lipid distribution",
                            "DNA enters through pores during brief heat pulse",
                            "Quick return to ice allows pores to close, trapping DNA inside"
                        ],
                        DNAuptake: [
                            "Single-stranded or double-stranded DNA can enter",
                            "Linear DNA often degraded by nucleases",
                            "Circular plasmid DNA protected; can replicate",
                            "Some plasmids integrate into chromosome; others replicate autonomously"
                        ],
                        geneExpression: [
                            "Plasmid enters cytoplasm",
                            "Bacterial RNA polymerase recognizes plasmid promoters",
                            "Transcribes antibiotic resistance gene",
                            "Translates to produce resistance protein (e.g., beta-lactamase)",
                            "Cell becomes resistant to antibiotic"
                        ]
                    },
                    plasmidFeatures: {
                        essential: {
                            origin_of_replication: "Allows plasmid to replicate independently in bacteria",
                            selectable_marker: "Antibiotic resistance gene for identifying transformants",
                            multipleCloningSite: "Contains many restriction sites for inserting foreign DNA"
                        },
                        common_plasmids: {
                            pUC19: "High copy number; ampicillin resistance; lacZ gene (blue/white screening)",
                            pBR322: "Medium copy number; ampicillin and tetracycline resistance",
                            pGLO: "Ampicillin resistance + GFP gene (green fluorescent protein); used in teaching",
                            pET: "Protein expression vectors; T7 promoter for inducible expression"
                        },
                        copyNumber: {
                            high: "500-700 copies/cell (pUC); more protein produced",
                            medium: "15-20 copies/cell (pBR322); more stable",
                            low: "1-2 copies/cell; very stable; used for large inserts"
                        }
                    },
                    results: "Successfully transformed E. coli with plasmid containing ampicillin resistance gene. Transformation efficiency calculated as 2.86 × 10⁵ transformants per μg DNA. Only cells that received plasmid DNA grew on ampicillin plates, demonstrating successful uptake and expression of foreign DNA.",
                    conclusions: [
                        "Bacteria can take up foreign DNA through transformation",
                        "Competence induced by CaCl₂ treatment and heat shock",
                        "Antibiotic selection identifies successfully transformed cells",
                        "Transformation is foundation of genetic engineering",
                        "Only small percentage of cells (<1%) successfully transformed"
                    ],
                    applications: {
                        molecular_cloning: "Insert genes into plasmids; amplify in bacteria",
                        protein_production: "Express human proteins in bacteria (insulin, growth hormone, antibodies)",
                        gene_function_studies: "Introduce genes to study function; create mutants",
                        synthetic_biology: "Design and build genetic circuits; create new organisms with desired traits",
                        vaccine_development: "Produce vaccine antigens in bacteria",
                        enzyme_production: "Industrial enzymes for detergents, food processing",
                        biofuels: "Engineer bacteria to produce biofuels from plant material",
                        bioremediation: "Create bacteria that degrade pollutants"
                    },
                    realWorldExamples: {
                        insulin: {
                            before: "Insulin extracted from pig/cow pancreas; expensive, allergenic",
                            after: "Human insulin gene inserted into E. coli; cheap, pure",
                            impact: "Revolutionized diabetes treatment (1982)"
                        },
                        GFP: {
                            source: "Green fluorescent protein from jellyfish",
                            use: "Transform bacteria with GFP gene; cells glow green under UV light",
                            applications: "Research tool to track gene expression, protein localization",
                            nobelPrize: "2008 Nobel Prize in Chemistry"
                        },
                        CRISPR: {
                            system: "Bacterial immune system; uses transformation of phage DNA",
                            application: "Gene editing tool; transform cells with CRISPR components",
                            impact: "Revolutionizing medicine, agriculture, research"
                        }
                    },
                    extensions: {
                        blueWhiteScreening: {
                            principle: "pUC plasmids contain lacZ gene; insert disrupts gene",
                            result: "Non-transformed: blue colonies; Transformed with insert: white colonies",
                            use: "Identify recombinant plasmids (with foreign DNA insert)"
                        },
                        GFPexpression: {
                            experiment: "Transform with pGLO plasmid; grow on arabinose plates",
                            result: "Colonies glow green under UV light",
                            regulation: "GFP expression controlled by arabinose (inducer)"
                        },
                        coTransformation: {
                            experiment: "Transform with two different plasmids (different resistance genes)",
                            selection: "Plate on medium with both antibiotics",
                            result: "Only cells with both plasmids grow"
                        },
                        restrictionMapping: {
                            experiment: "Digest plasmid with restriction enzymes; verify by gel electrophoresis",
                            purpose: "Confirm plasmid structure and insert presence"
                        }
                    },
                    troubleshooting: {
                        no_growth_on_any_plates: [
                            "Cells dead (check storage, thawing)",
                            "Antibiotic in control plates (contamination)",
                            "Incorrect incubation temperature"
                        ],
                        growth_on_negative_control: [
                            "Spontaneous resistant mutants (usually <5 colonies acceptable)",
                            "Antibiotic expired or too dilute",
                            "Contamination with transformed cells"
                        ],
                        few_transformants: [
                            "Low competence (cells not competent; redo preparation)",
                            "DNA degraded (check quality on gel)",
                            "Heat shock too short or too long",
                            "Insufficient recovery time before plating",
                            "Too much DNA (toxic; use less)"
                        ],
                        too_many_background: [
                            "Contamination",
                            "Antibiotic concentration too low"
                        ]
                    },
                    historicalSignificance: {
                        Griffith1928: "First demonstration of transformation; 'transforming principle'",
                        Avery1944: "Proved DNA is genetic material",
                        Cohen_Boyer1973: "First recombinant DNA experiment; created recombinant plasmid",
                        biotech_revolution: "Enabled entire biotechnology industry",
                        modern_medicine: "Recombinant drugs, vaccines, diagnostics",
                        agriculture: "Genetically modified crops",
                        research: "Essential tool in molecular biology"
                    }
                }
            }
        };

        // Link experiments to topics
        this.linkExperimentsToTopics();
    }

    linkExperimentsToTopics() {
        Object.entries(this.microbiologyExperiments).forEach(([expId, experiment]) => {
            experiment.relatedTopics.forEach(topicId => {
                if (this.microbiologyTopics[topicId]) {
                    if (!this.microbiologyTopics[topicId].relatedExperiments) {
                        this.microbiologyTopics[topicId].relatedExperiments = [];
                    }
                    this.microbiologyTopics[topicId].relatedExperiments.push({
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
            bacterial_structure: {
                'Cell Wall': [
                    'Thinking all bacteria have same cell wall structure (Gram+ and Gram- very different)',
                    'Believing bacteria have cell membrane inside cell wall (correct, but often overlooked)',
                    'Confusing peptidoglycan with cellulose (both structural polymers but very different)',
                    'Thinking Gram stain colors cells different colors initially (all cells purple first, then differential)'
                ],
                'Size and Complexity': [
                    'Believing bacteria are all the same size (vary 0.5-10 μm)',
                    'Thinking bacteria are too simple to be important (extremely diverse metabolism)',
                    'Confusing bacteria with viruses (bacteria are cells; viruses are not)'
                ]
            },
            
            microbial_growth: {
                'Growth and Division': [
                    'Thinking bacteria grow bigger (they divide; population grows)',
                    'Believing exponential growth can continue indefinitely (resources limit)',
                    'Confusing generation time with doubling time (same thing!)',
                    'Thinking all bacteria divide at same rate (varies dramatically by species)'
                ],
                'Sterilization': [
                    'Believing boiling sterilizes (kills most but not endospores)',
                    'Thinking antiseptic = disinfectant = sterilization (different levels)',
                    'Confusing bacteriostatic with bactericidal (stop growth vs kill)'
                ]
            },
            
            microbial_metabolism: {
                'Fermentation vs Respiration': [
                    'Thinking fermentation produces more ATP (produces less than respiration)',
                    'Believing all bacteria need oxygen (many are anaerobes)',
                    'Confusing fermentation with spoilage (fermentation can be desirable: yogurt, beer)',
                    'Thinking fermentation requires yeast (bacteria also ferment)'
                ],
                'Photosynthesis': [
                    'Believing only plants photosynthesize (cyanobacteria and other bacteria do too)',
                    'Thinking all photosynthesis produces O₂ (anoxygenic bacteria do not)'
                ]
            },
            
            microbial_genetics: {
                'Horizontal Gene Transfer': [
                    'Confusing conjugation with sexual reproduction (not true sexual reproduction)',
                    'Thinking plasmids are essential (often carry useful but non-essential genes)',
                    'Believing antibiotic resistance is only by mutation (HGT major source)',
                    'Thinking bacteria are genetically isolated (HGT widespread in nature)'
                ],
                'Mutations': [
                    'Believing mutations are always harmful (most neutral; some beneficial)',
                    'Thinking antibiotics cause resistance mutations (select for pre-existing resistant mutants)',
                    'Confusing genotype with phenotype'
                ]
            },
            
            virology: {
                'Living vs Non-living': [
                    'Thinking viruses are alive (no metabolism, cannot reproduce independently)',
                    'Believing viruses are cells (not cells; no organelles)',
                    'Confusing viruses with bacteria (bacteria are much larger, are cells)'
                ],
                'Antibiotics and Viruses': [
                    'Thinking antibiotics treat viral infections (MAJOR misconception - antibiotics only work on bacteria!)',
                    'Believing flu shot treats flu (prevents infection; does not treat)',
                    'Confusing antiviral with antibiotic'
                ],
                'Viral Replication': [
                    'Thinking viruses divide like cells (they assemble from parts inside host)',
                    'Believing all viruses kill host cells (some bud off without killing)'
                ]
            },
            
            immunology: {
                'Immune System': [
                    'Thinking immune system only fights pathogens (also surveillance for cancer)',
                    'Believing antibodies kill pathogens directly (mark for destruction; some neutralize)',
                    'Confusing antibody with antigen (antibody binds antigen)',
                    'Thinking innate immunity is less important (first line of defense; essential)'
                ],
                'Vaccines': [
                    'Believing vaccines give you the disease (weakened/killed; cannot cause disease)',
                    'Thinking vaccines only protect individual (also herd immunity)',
                    'Confusing vaccine with cure (prevents disease; does not treat active infection)'
                ]
            },
            
            medical_microbiology: {
                'Pathogens': [
                    'Thinking all bacteria are pathogens (most harmless or beneficial)',
                    'Believing we should eliminate all bacteria (impossible and harmful; need normal flora)',
                    'Confusing infection with disease (infection = pathogen present; disease = damage/symptoms)',
                    'Thinking antibiotics make you better immediately (kill bacteria; immune system clears debris)'
                ],
                'Antibiotic Resistance': [
                    'Believing you become resistant to antibiotics (bacteria become resistant, not you)',
                    'Thinking stopping antibiotics early prevents resistance (actually promotes resistance!)',
                    'Confusing antibiotic resistance with immunity'
                ]
            }
        };

        this.clarificationStrategies = {
            size_comparison: {
                method: 'Compare bacteria, viruses, human cells visually with scale',
                effectiveness: 'High for understanding relative sizes'
            },
            timeline: {
                method: 'Show historical progression of discoveries',
                effectiveness: 'High for understanding scientific development'
            },
            analogy: {
                method: 'Use everyday comparisons (lock and key, factories, etc.)',
                effectiveness: 'High for abstract concepts'
            },
            demonstration: {
                method: 'Hands-on lab activities',
                effectiveness: 'Very high for concrete learning'
            },
            clinical_case: {
                method: 'Present real-world medical scenarios',
                effectiveness: 'Very high for relevance and motivation'
            }
        };
    }

    initializeMetacognitivePrompts() {
        this.metacognitivePrompts = {
            beforeLearning: [
                "What do you already know about {topic}?",
                "Why is understanding {topic} important in microbiology?",
                "How might {topic} relate to medicine or everyday life?",
                "What questions do you have about {topic}?"
            ],
            duringLearning: [
                "Can you explain this in your own words?",
                "How is this similar to or different from {related_concept}?",
                "Can you think of a real-world application?",
                "What's the most important point here?"
            ],
            afterLearning: [
                "What were the main concepts about {topic}?",
                "How would you explain {topic} to a friend?",
                "What clinical or practical applications can you identify?",
                "What are you still unsure about?",
                "How has your understanding changed?"
            ],
            experimentalThinking: [
                "What is this experiment trying to prove?",
                "What are the controls and why are they important?",
                "What results would you expect and why?",
                "How would you troubleshoot unexpected results?"
            ]
        };
    }

    initializeContextualScenarios() {
        this.contextualScenarios = {
            bacterial_structure: [
                {
                    scenario: "Treating Bacterial Meningitis",
                    context: "A patient has bacterial meningitis. Doctor must choose antibiotic quickly",
                    application: "Gram stain of cerebrospinal fluid reveals Gram-negative diplococci (Neisseria meningitidis)",
                    question: "Why is Gram stain critical in this emergency situation?"
                },
                {
                    scenario: "Antibiotic Development",
                    context: "Pharmaceutical company designing new antibiotic",
                    application: "Target peptidoglycan synthesis (unique to bacteria, not humans)",
                    question: "Why does penicillin work on Gram-positive but less on Gram-negative bacteria?"
                }
            ],
            
            microbial_growth: [
                {
                    scenario: "Food Poisoning Outbreak",
                    context: "Cafeteria food left at room temperature for 4 hours",
                    application: "Bacteria in log phase; population doubles every 20 min; exponential growth",
                    question: "How many bacteria after 4 hours if starting with 100 cells?"
                },
                {
                    scenario: "Antibiotic Timing",
                    context: "Patient with bacterial infection; when to give antibiotic?",
                    application: "Antibiotics most effective against actively dividing cells (log phase)",
                    question: "Why are stationary phase bacteria more resistant to antibiotics?"
                }
            ],
            
            microbial_genetics: [
                {
                    scenario: "MRSA Outbreak in Hospital",
                    context: "Methicillin-resistant Staphylococcus aureus spreading between patients",
                    application: "Resistance genes on plasmid; spread by horizontal gene transfer (conjugation)",
                    question: "How did resistance spread so quickly despite infection control?"
                },
                {
                    scenario: "Biotechnology Application",
                    context: "Company wants to produce human insulin in bacteria",
                    application: "Transform E. coli with plasmid containing human insulin gene",
                    question: "Why is bacterial transformation essential for this application?"
                }
            ],
            
            virology: [
                {
                    scenario: "Flu Season",
                    context: "Why do we need new flu vaccine every year?",
                    application: "Influenza virus mutates rapidly (antigenic drift); vaccine must match current strains",
                    question: "Why don't antibiotics work for flu?"
                },
                {
                    scenario: "HIV Treatment",
                    context: "Patient with HIV on antiretroviral therapy",
                    application: "HIV is retrovirus; reverse transcriptase makes DNA from RNA; integrates into genome",
                    question: "Why is HIV so difficult to cure compared to other viral infections?"
                }
            ]
        };
    }

    initializeAssessmentRubrics() {
        this.assessmentRubrics = {
            knowledgeLevel: {
                remember: {
                    description: "Recall facts, terms, basic concepts",
                    verbs: ["Define", "List", "Identify", "Name", "State"],
                    example: "Define Gram-positive bacteria"
                },
                understand: {
                    description: "Explain ideas or concepts",
                    verbs: ["Explain", "Describe", "Summarize", "Compare", "Classify"],
                    example: "Explain why Gram-negative bacteria are more resistant to antibiotics"
                },
                apply: {
                    description: "Use information in new situations",
                    verbs: ["Calculate", "Solve", "Demonstrate", "Predict", "Use"],
                    example: "Calculate bacterial generation time from growth curve data"
                },
                analyze: {
                    description: "Draw connections among ideas",
                    verbs: ["Analyze", "Differentiate", "Organize", "Compare", "Contrast"],
                    example: "Analyze how horizontal gene transfer contributes to antibiotic resistance"
                },
                evaluate: {
                    description: "Justify a decision or course of action",
                    verbs: ["Evaluate", "Critique", "Judge", "Defend", "Assess"],
                    example: "Evaluate whether Koch's postulates can be applied to viral diseases"
                },
                create: {
                    description: "Produce new or original work",
                    verbs: ["Design", "Construct", "Create", "Develop", "Formulate"],
                    example: "Design an experiment to test antibiotic efficacy against biofilms"
                }
            },
            
            experimentalSkills: {
                planning: "Design experiment with proper controls",
                technique: "Execute aseptic technique correctly",
                observation: "Record accurate, detailed observations",
                analysis: "Interpret results correctly",
                communication: "Present findings clearly"
            },
            
            clinicalRelevance: {
                recognition: "Identify clinically relevant scenarios",
                application: "Apply microbiological principles to patient care",
                reasoning: "Explain rationale for diagnostic/treatment decisions",
                safety: "Recognize biosafety and infection control issues"
            }
        };
    }



    handleMicrobialGrowth(problem) {
    const content = {
        topic: "Microbial Growth and Nutrition",
        category: 'microbial_physiology',
        summary: "Bacterial growth refers to increase in cell number through binary fission. Growth follows predictable patterns influenced by environmental factors and nutritional requirements. Understanding growth kinetics is essential for cultivation, industrial applications, and controlling microbial populations.",
        
        keyDefinitions: {
            "Binary Fission": "Asexual reproduction in bacteria; one cell divides into two identical daughter cells",
            "Generation Time": "Time required for bacterial population to double in number",
            "Colony Forming Unit (CFU)": "Single viable bacterial cell that produces visible colony on agar plate",
            "Exponential Growth": "Growth phase where cells divide at constant rate; population doubles regularly",
            "Lag Phase": "Adaptation period after inoculation; cells prepare for division but numbers remain constant",
            "Log Phase": "Period of exponential growth; cells dividing at maximum rate",
            "Stationary Phase": "Growth rate equals death rate; no net change in cell number",
            "Death Phase": "Death rate exceeds growth rate; population declines",
            "Batch Culture": "Closed system with finite nutrients; exhibits four growth phases",
            "Continuous Culture": "Open system with continuous nutrient addition; maintains constant growth",
            "Turbidity": "Cloudiness of liquid culture; indicates cell density",
            "Optical Density (OD)": "Measure of light absorbance by culture; proportional to cell density"
        },
        
        binaryFission: {
            definition: "Process by which one bacterial cell divides into two identical daughter cells",
            steps: [
                "1. DNA REPLICATION: Circular chromosome replicates; two copies attached to membrane",
                "2. CELL ELONGATION: Cell grows; chromosome copies separate as cell elongates",
                "3. SEPTUM FORMATION: New cell wall and membrane grow inward at midpoint",
                "4. CELL SEPARATION: Two daughter cells separate; each has complete chromosome copy"
            ],
            timing: "Entire process takes 20-30 minutes in E. coli under optimal conditions",
            result: "Two genetically identical daughter cells (clones)",
            contrast: {
                mitosis: "Eukaryotic division; involves spindle apparatus, nuclear envelope breakdown",
                meiosis: "Produces haploid gametes; bacteria don't undergo meiosis",
                budding: "Unequal division; seen in yeast, not typical bacteria"
            },
            efficiency: "Exponential increase: 1→2→4→8→16→32 cells",
            calculation: "After n generations: Nt = N0 × 2^n"
        },
        
        growthCurve: {
            overview: "Bacterial growth in batch culture exhibits characteristic four-phase pattern",
            
            lagPhase: {
                name: "Lag Phase",
                duration: "Variable (minutes to hours); depends on inoculum and conditions",
                cellNumber: "Remains constant; no increase in population",
                cellSize: "Cells may increase in size",
                metabolicActivity: "HIGH - cells very active metabolically",
                activities: [
                    "Synthesizing enzymes needed for new environment",
                    "Producing ATP and reducing power (NADH, NADPH)",
                    "Accumulating metabolic intermediates",
                    "Repairing damage from previous stationary phase",
                    "Adapting to new medium composition"
                ],
                factors: {
                    inoculumHealth: "Healthy log-phase inoculum → short lag; old stationary inoculum → long lag",
                    mediumSimilarity: "Same medium → short lag; different medium → long lag",
                    temperature: "Optimal temp → short lag; suboptimal → long lag",
                    cellDamage: "Damaged cells need repair time → longer lag"
                },
                minimizing: [
                    "Use log-phase inoculum (young, active cells)",
                    "Use same or similar medium for inoculum and culture",
                    "Maintain consistent temperature",
                    "Use larger inoculum (but not too large - can deplete nutrients quickly)"
                ],
                appearance: "Broth remains clear or slightly turbid; minimal change from initial",
                ODreading: "Low and constant (~0.05-0.10)",
                significance: "Cells preparing for rapid growth; not yet dividing"
            },
            
            logPhase: {
                name: "Logarithmic (Exponential) Phase",
                alternativeName: "Log phase or exponential phase",
                duration: "Several hours (2-6 hours for E. coli)",
                cellNumber: "INCREASES EXPONENTIALLY - doubles at constant rate",
                metabolicActivity: "MAXIMUM - cells most active",
                characteristics: [
                    "Constant and maximum growth rate",
                    "Cells divide at fastest possible rate for given conditions",
                    "Cell morphology and physiology most uniform",
                    "Generation time constant and minimal",
                    "Balanced growth - all cellular components increase proportionally"
                ],
                equation: "Nt = N0 × 2^n where n = number of generations",
                generationTime: {
                    definition: "Time for population to double",
                    formula: "g = t / n where g = generation time, t = time elapsed, n = number of generations",
                    nCalculation: "n = (log Nt - log N0) / log 2 = 3.3 × log(Nt/N0)",
                    examples: {
                        Ecoli: "20 minutes (optimal conditions)",
                        Staphylococcus: "25-30 minutes",
                        Streptococcus: "30-60 minutes",
                        Mycobacterium: "12-24 hours (very slow)",
                        Vibrio: "9-10 minutes (one of fastest known)"
                    }
                },
                graphCharacteristics: {
                    linearScale: "Exponential curve (J-shaped)",
                    semiLogScale: "Straight line (linear relationship between log cells and time)",
                    useOfSemiLog: "Easier to visualize and calculate generation time"
                },
                appearance: "Broth becomes increasingly turbid (cloudy)",
                ODreading: "Increases exponentially; doubles regularly",
                harvesting: "Best time to harvest for:",
                applications: [
                    "Experiments requiring uniform, active cells",
                    "Antibiotic susceptibility testing (cells most susceptible when dividing)",
                    "Protein expression (if induced during log phase)",
                    "Subculturing (transfer to new medium for continued growth)",
                    "Physiological studies (cells in most consistent state)"
                ],
                antibiotics: "Most antibiotics most effective during log phase",
                whyAntibioticsWork: "Many antibiotics target cell wall synthesis or protein synthesis - processes active during division",
                endingFactors: "Nutrient depletion, waste accumulation, oxygen depletion, space limitation"
            },
            
            stationaryPhase: {
                name: "Stationary Phase",
                duration: "Variable (hours to days)",
                cellNumber: "CONSTANT - no net change",
                equilibrium: "Growth rate equals death rate",
                causes: [
                    "Nutrient depletion (carbon, nitrogen, or other essential nutrients exhausted)",
                    "Waste product accumulation (acids, CO2, ammonia toxic at high concentrations)",
                    "Oxygen depletion (for aerobes)",
                    "Exhaustion of space (contact inhibition)",
                    "pH change (metabolic acids or bases alter pH beyond optimal range)"
                ],
                cellularChanges: [
                    "Cells become smaller and more rounded",
                    "Cell wall becomes thicker",
                    "Glycogen and lipid storage compounds accumulated",
                    "Stress response genes activated",
                    "Some cells may die and lyse"
                ],
                metabolism: {
                    primary: "Primary metabolites (needed for growth) no longer produced",
                    secondary: "Secondary metabolites (not essential for growth) may be produced",
                    examples: "Many antibiotics produced in stationary phase (penicillin, streptomycin)"
                },
                industrialSignificance: {
                    antibiotics: "Many commercial antibiotics harvested from stationary phase cultures",
                    reasoning: "Secondary metabolism activated when growth slows",
                    examples: "Penicillium chrysogenum (penicillin), Streptomyces (streptomycin, tetracycline)"
                },
                endospores: {
                    organisms: "Bacillus, Clostridium form endospores during stationary phase",
                    trigger: "Nutrient depletion signals sporulation",
                    purpose: "Survival structure; resist heat, desiccation, chemicals",
                    clinical: "C. difficile spores survive disinfection; cause hospital infections"
                },
                appearance: "Maximum turbidity; may begin to clear if lysis occurs",
                ODreading: "Plateaus at maximum; remains constant or decreases slightly",
                duration: "Can last hours to days depending on organism and conditions",
                crypticGrowth: "Some cells lyse; others use released nutrients for brief growth"
            },
            
            deathPhase: {
                name: "Death Phase (Decline Phase)",
                duration: "Variable; can be rapid or slow",
                cellNumber: "DECREASES - death rate exceeds growth rate",
                rate: "Often exponential (mirror image of log phase growth)",
                causes: [
                    "Complete nutrient exhaustion",
                    "Accumulation of toxic waste products",
                    "Extreme pH changes",
                    "Autolysis (self-digestion by cellular enzymes)",
                    "Protein denaturation",
                    "DNA damage"
                ],
                cellChanges: [
                    "Cell membranes lose integrity",
                    "Enzymes released (autolysis)",
                    "Cells may lyse and disintegrate",
                    "Debris accumulates in medium"
                ],
                appearance: "Culture may clear as cells lyse; debris may precipitate",
                ODreading: {
                    turbidity: "May remain high (dead cells scatter light)",
                    viable: "CFU count decreases dramatically",
                    discrepancy: "OD doesn't distinguish live from dead cells"
                },
                VBNC: {
                    definition: "Viable But Non-Culturable state",
                    description: "Some cells enter dormant state; alive but won't grow on standard media",
                    detection: "Can be detected by DNA staining or metabolic assays",
                    significance: "May underestimate viable cells in environment; public health concern"
                },
                notAllDie: "Some cells may survive for extended periods as VBNC or in spore form"
            }
        },
        
        generationTimeCalculations: {
            basicFormula: {
                equation: "g = t / n",
                where: {
                    g: "generation time",
                    t: "elapsed time (in desired units: minutes, hours)",
                    n: "number of generations"
                }
            },
            calculatingGenerations: {
                formula: "n = (log Nt - log N0) / log 2",
                simplified: "n = 3.3 × log(Nt / N0)",
                where: {
                    Nt: "final cell number",
                    N0: "initial cell number",
                    log: "logarithm base 10"
                }
            },
            workedExample1: {
                problem: "Culture starts with 1,000 cells. After 6 hours, there are 256,000 cells. Calculate generation time.",
                solution: {
                    step1: "Calculate number of generations",
                    n_calculation: "n = 3.3 × log(256,000 / 1,000) = 3.3 × log(256) = 3.3 × 2.408 = 7.95 ≈ 8 generations",
                    step2: "Calculate generation time",
                    g_calculation: "g = 6 hours / 8 generations = 0.75 hours = 45 minutes",
                    answer: "Generation time = 45 minutes"
                }
            },
            workedExample2: {
                problem: "E. coli has generation time of 20 minutes. Starting with 100 cells, how many after 2 hours?",
                solution: {
                    step1: "Calculate number of generations in 2 hours (120 minutes)",
                    n_calculation: "n = 120 min / 20 min = 6 generations",
                    step2: "Calculate final cell number",
                    Nt_calculation: "Nt = N0 × 2^n = 100 × 2^6 = 100 × 64 = 6,400 cells",
                    answer: "Final population = 6,400 cells"
                }
            },
            growthRate: {
                definition: "Number of generations per unit time",
                formula: "k = n / t = 1 / g",
                units: "generations per hour (or other time unit)",
                relationship: "Growth rate is reciprocal of generation time",
                example: "If g = 30 minutes = 0.5 hours, then k = 2 generations/hour"
            },
            specificGrowthRate: {
                symbol: "μ (mu)",
                formula: "μ = ln(Nt/N0) / t = 0.693 / g",
                units: "per hour (h⁻¹)",
                definition: "Instantaneous rate of growth",
                use: "Common in research and industrial microbiology"
            }
        },
        
        environmentalFactors: {
            temperature: {
                cardinal: {
                    minimum: "Lowest temperature permitting growth",
                    optimum: "Temperature for fastest growth rate",
                    maximum: "Highest temperature permitting growth"
                },
                categories: {
                    psychrophile: {
                        range: "Optimum <15°C; can grow at 0°C or below",
                        examples: "Polaromonas, Psychrobacter (Arctic/Antarctic)",
                        habitats: "Polar regions, deep ocean, refrigerators",
                        enzymes: "Cold-adapted; flexible at low temps",
                        membranes: "High unsaturated fatty acids (remain fluid)"
                    },
                    psychrotroph: {
                        range: "Can grow at 0-7°C; optimum 20-30°C",
                        examples: "Listeria monocytogenes, Pseudomonas",
                        significance: "Food spoilage in refrigerators",
                        concern: "Psychrotrophic pathogens grow slowly in cold storage"
                    },
                    mesophile: {
                        range: "Optimum 20-45°C",
                        examples: "E. coli, Staphylococcus, most pathogens",
                        humanPathogens: "Body temperature 37°C optimal for most pathogens",
                        mostCommon: "Majority of bacteria are mesophiles"
                    },
                    thermophile: {
                        range: "Optimum 45-80°C",
                        examples: "Thermus aquaticus (source of Taq polymerase for PCR), Geobacillus",
                        habitats: "Hot springs, compost heaps, industrial processes",
                        enzymes: "Heat-stable; useful in biotechnology",
                        TaqPolymerase: "Used in PCR; active at 72°C"
                    },
                    hyperthermophile: {
                        range: "Optimum >80°C; some grow at 113°C",
                        examples: "Pyrococcus furiosus, Pyrolobus fumarii (deep sea vents)",
                        domain: "Mostly Archaea, some Bacteria",
                        habitats: "Hydrothermal vents, geothermal areas",
                        proteins: "Extremely thermostable; biotechnology applications"
                    }
                },
                effects: {
                    lowTemp: "Slows enzyme activity; membranes gel; growth slows/stops (bacteriostatic, not bactericidal)",
                    highTemp: "Denatures proteins and nucleic acids; disrupts membranes; kills cells (bactericidal)",
                    optimum: "Enzymes most active; membranes fluid; fastest growth"
                },
                foodSafety: {
                    dangerZone: "5-60°C (41-140°F) - rapid bacterial growth",
                    refrigeration: "4°C (39°F) - slows but doesn't stop psychrotrophs",
                    freezing: "-18°C (0°F) - stops growth but doesn't kill all bacteria",
                    cooking: "74°C (165°F) kills most pathogens",
                    autoclaving: "121°C, 15 psi, 15-20 min - sterilization (kills endospores)"
                }
            },
            
            pH: {
                definition: "Measure of hydrogen ion concentration; scale 0-14",
                neutral: "pH 7",
                acidic: "pH <7",
                basic: "pH >7",
                categories: {
                    acidophile: {
                        range: "pH 0-5.5 optimum",
                        examples: "Thiobacillus ferrooxidans (pH 1-2), Helicobacter pylori (stomach, pH 2-3)",
                        mechanisms: "Pump H+ out; cytoplasm maintained near neutral",
                        habitats: "Acid mine drainage, volcanic soils, stomach"
                    },
                    neutralophile: {
                        range: "pH 5.5-8.5 optimum",
                        examples: "E. coli (pH 6-8), most bacteria",
                        humanBody: "Most body sites near neutral (blood pH 7.4)",
                        mostCommon: "Vast majority of bacteria"
                    },
                    alkaliphile: {
                        range: "pH 8.5-11.5 optimum",
                        examples: "Bacillus alcalophilus, Natronobacterium",
                        habitats: "Soda lakes, alkaline soils",
                        mechanisms: "Na+/H+ antiporters maintain internal pH",
                        applications: "Produce alkaline-stable enzymes (detergents)"
                    }
                },
                cellularControl: {
                    cytoplasmicpH: "Maintained near neutral (pH 7-7.5) regardless of external pH",
                    mechanisms: "H+ pumps, buffers, ion exchangers",
                    importance: "Enzymes optimally active near neutral pH"
                },
                effectsOnGrowth: {
                    acidic: "H+ interferes with membrane potential; denatures proteins",
                    alkaline: "OH- disrupts membrane; denatures proteins",
                    extreme: "Growth stops; cells may die"
                },
                buffers: {
                    definition: "Compounds that resist pH change",
                    media: "Growth media often buffered (phosphate buffers common)",
                    purpose: "Prevent pH drift from metabolic acids/bases"
                },
                medicalRelevance: {
                    Hpylori: "Survives stomach acid (pH 2) by producing urease; converts urea to ammonia (neutralizes acid)",
                    vaginal: "Lactobacilli produce lactic acid; maintain acidic pH (protects from pathogens)",
                    oralCavities: "Acid production by bacteria causes tooth decay"
                }
            },
            
            oxygen: {
                toxicity: {
                    superoxide: "O2⁻ (superoxide radical) - toxic",
                    hydrogenPeroxide: "H2O2 - toxic",
                    hydroxylRadical: "OH• - extremely toxic",
                    source: "Generated during aerobic metabolism"
                },
                detoxificationEnzymes: {
                    superoxideDismutase: "Converts O2⁻ → H2O2 + O2",
                    catalase: "Converts H2O2 → H2O + O2",
                    peroxidase: "Converts H2O2 → H2O (using NADH)"
                },
                categories: {
                    obligateAerobe: {
                        oxygenRequirement: "REQUIRES O2",
                        metabolism: "Aerobic respiration only",
                        enzymes: "Have SOD, catalase, peroxidase",
                        ATPyield: "High (32-38 ATP per glucose)",
                        examples: "Mycobacterium tuberculosis, Pseudomonas aeruginosa",
                        tubeTest: "Growth only at top (where O2 present)"
                    },
                    obligateAnaerobe: {
                        oxygenRequirement: "KILLED by O2",
                        metabolism: "Fermentation or anaerobic respiration",
                        enzymes: "LACK SOD, catalase (cannot detoxify oxygen radicals)",
                        ATPyield: "Low (2-36 ATP per glucose depending on electron acceptor)",
                        examples: "Clostridium tetani (tetanus), C. botulinum (botulism), C. perfringens (gas gangrene)",
                        culture: "Anaerobic chamber or GasPak jar (removes O2)",
                        tubeTest: "Growth only at bottom (O2-free zone)"
                    },
                    facultativeAnaerobe: {
                        oxygenRequirement: "Can use O2 but doesn't require it",
                        metabolism: "Aerobic respiration (if O2 present) or fermentation/anaerobic respiration (no O2)",
                        enzymes: "Have SOD and catalase",
                        ATPyield: "High with O2, low without",
                        examples: "E. coli, Staphylococcus, Salmonella, Shigella",
                        advantage: "Most versatile; can colonize many environments",
                        tubeTest: "Growth throughout, but heavier at top"
                    },
                    aerotolerantAnaerobe: {
                        oxygenRequirement: "Tolerate O2 but don't use it",
                        metabolism: "Fermentation only (even if O2 present)",
                        enzymes: "Have SOD but lack catalase",
                        ATPyield: "Low (fermentation always, ~2 ATP per glucose)",
                        examples: "Streptococcus, Enterococcus, Lactobacillus",
                        tubeTest: "Uniform growth throughout tube (don't respond to O2)"
                    },
                    microaerophile: {
                        oxygenRequirement: "Require low O2 (2-10%); damaged by atmospheric O2 (21%)",
                        metabolism: "Aerobic respiration, but sensitive to high O2",
                        enzymes: "Limited SOD and catalase",
                        examples: "Campylobacter jejuni, Helicobacter pylori",
                        culture: "Candle jar or CO2 incubator (5-10% O2)",
                        tubeTest: "Growth in narrow band below surface"
                    }
                },
                cultivation: {
                    aerobes: "Shake flasks (increase O2 transfer), aerated fermenters",
                    anaerobes: "Anaerobic jar (GasPak), anaerobic chamber (glove box with N2/H2/CO2)",
                    facultative: "No special requirements",
                    microaerophiles: "Candle jar (burn candle to reduce O2 to ~5%)"
                }
            },
            
            osmoticPressure: {
                definition: "Pressure created by water movement across semipermeable membrane",
                waterMovement: "Moves from low solute to high solute concentration",
                conditions: {
                    isotonic: {
                        definition: "Same solute concentration inside and outside cell",
                        waterMovement: "No net movement",
                        effect: "Optimal growth"
                    },
                    hypotonic: {
                        definition: "Lower solute concentration outside than inside cell",
                        waterMovement: "Water enters cell (osmosis)",
                        effect: "Cell would swell and burst BUT cell wall prevents lysis",
                        bacteria: "Cell wall provides rigid structure; cell becomes turgid (firm)",
                        animalCells: "Would lyse (no cell wall)"
                    },
                    hypertonic: {
                        definition: "Higher solute concentration outside than inside cell",
                        waterMovement: "Water leaves cell",
                        effect: "Plasmolysis - cytoplasm shrinks away from cell wall",
                        result: "Growth inhibited; may kill cell"
                    }
                },
                categories: {
                    nonhalophile: {
                        saltTolerance: "<1% NaCl optimum",
                        examples: "Most bacteria (E. coli)"
                    },
                    halotolerant: {
                        saltTolerance: "Can tolerate salt but don't require",
                        range: "0-10% NaCl",
                        examples: "Staphylococcus aureus (tolerates up to 15%)"
                    },
                    halophile: {
                        saltTolerance: "REQUIRE salt for growth",
                        mildHalophile: "1-6% NaCl",
                        moderateHalophile: "6-15% NaCl",
                        extremeHalophile: "15-30% NaCl (mostly Archaea)",
                        examples: "Halobacterium (Dead Sea, salt lakes)",
                        adaptations: "Accumulate compatible solutes (betaine, glycerol) or pump K+ inside"
                    }
                },
                foodPreservation: {
                    salting: "High salt creates hypertonic environment; inhibits bacterial growth",
                    examples: "Salted fish, cured meats, pickles (salt + acid)",
                    limitation: "Halotolerant bacteria (Staphylococcus) can grow"
                },
                sugaring: {
                    jams: "High sugar concentration; same principle as salt",
                    osmotic: "Water leaves bacterial cells"
                }
            },
            
            hydrostaticPressure: {
                definition: "Pressure exerted by column of water",
                deepSea: "Increases ~1 atm per 10 meters depth",
                categories: {
                    piezotolerant: "Tolerate high pressure but grow better at normal",
                    piezophile: "Require high pressure for optimal growth",
                    barophile: "Another term for piezophile"
                },
                examples: "Deep sea vent bacteria (Thermococcus barophilus)",
                pressure: "Up to 1000 atm in ocean trenches"
            },
            
            radiation: {
                UV: {
                    wavelength: "260 nm most effective (absorbed by DNA)",
                    effect: "Forms thymine dimers; disrupts DNA replication",
                    use: "Surface sterilization (UV lamps)",
                    limitation: "Poor penetration; doesn't sterilize liquids or thick materials"
                },
                ionizing: {
                    types: "Gamma rays, X-rays, electron beams",
                    effect: "Breaks DNA strands; creates free radicals",
                    use: "Sterilize medical equipment, food irradiation",
                    advantage: "Deep penetration; kills spores"
                },
                resistance: {
                    DeinococcusRadiodurans: "Extremely radiation-resistant; can survive 5000 Gy (500× lethal dose for humans)",
                    mechanism: "Multiple genome copies; efficient DNA repair"
                }
            }
        },
        
        nutritionalRequirements: {
            macronutrients: {
                carbon: {
                    need: "50% of cell dry weight",
                    sources: {
                        heterotroph: "Organic compounds (glucose, amino acids, lipids)",
                        autotroph: "CO2 (carbon fixation via Calvin cycle or other pathways)"
                    },
                    examples: {
                        heterotrophs: "Most bacteria (E. coli, Staphylococcus)",
                        autotrophs: "Cyanobacteria, nitrifying bacteria"
                    }
                },
                nitrogen: {
                    need: "12% of dry weight; amino acids, nucleotides",
                    sources: [
                        "NH3 or NH4+ (ammonia/ammonium) - preferred",
                        "NO3- (nitrate) - must be reduced",
                        "Amino acids - direct incorporation",
                        "N2 (nitrogen gas) - only nitrogen-fixing bacteria (Rhizobium, Azotobacter)"
                    ]
                },
                phosphorus: {
                    need: "Nucleic acids (DNA, RNA), ATP, phospholipids",
                    source: "PO4³⁻ (phosphate)",
                    typical: "Available in most media"
                },
                sulfur: {
                    need: "Amino acids (cysteine, methionine), vitamins, CoA",
                    sources: "SO4²⁻ (sulfate), H2S, amino acids containing sulfur",
                    someOxidize: "Sulfur-oxidizing bacteria use H2S as energy source"
                },
                minerals: {
                    potassium: "Enzyme cofactor, osmotic balance",
                    magnesium: "Ribosome stability, enzyme cofactor",
                    calcium: "Spore formation, enzyme cofactor",
                    iron: "Cytochromes, electron transport, some enzymes",
                    traceElements: "Mn, Zn, Cu, Co, Mo, Ni - enzyme cofactors"
                }
            },
            
            micronutrients: {
                vitamins: {
                    definition: "Organic compounds needed in small amounts",
                    function: "Coenzymes for metabolic reactions",
                    examples: [
                        "Thiamine (B1) - decarboxylation reactions",
                        "Riboflavin (B2) - FAD cofactor",
                        "Niacin (B3) - NAD+ cofactor",
                        "Pyridoxine (B6) - amino acid metabolism",
                        "Cobalamin (B12) - methylation reactions"
                    ],
                    synthesis: "Some bacteria synthesize all vitamins; others require supplementation"
                },
                growthFactors: {
                    definition: "Organic compounds required for growth but not synthesized by organism",
                    types: "Amino acids, purines, pyrimidines, vitamins",
                    fastidious: "Organisms with many growth factor requirements (Neisseria, Haemophilus)",
                    minimal: "Organisms with few requirements (E. coli can grow on glucose + salts)"
                }
            },
            
            nutritionalClassification: {
                byEnergySource: {
                    phototroph: "Light energy",
                    chemotroph: "Chemical energy (organic or inorganic compounds)"
                },
                byCarbonSource: {
                    autotroph: "CO2 as carbon source",
                    heterotroph: "Organic carbon (glucose, etc.)"
                },
                combined: {
                    photoautotroph: {
                        energy: "Light",
                        carbon: "CO2",
                        examples: "Cyanobacteria, purple sulfur bacteria, plants",
                        process: "Photosynthesis"
                    },
                    photoheterotroph: {
                        energy: "Light",
                        carbon: "Organic compounds",
                        examples: "Purple nonsulfur bacteria, green nonsulfur bacteria",
                        process: "Photoheterotrophy"
                    },
                    chemoautotroph: {
                        energy: "Inorganic chemicals (H2S, NH3, Fe²+)",
                        carbon: "CO2",
                        examples: "Nitrifying bacteria, sulfur-oxidizing bacteria, hydrogen bacteria",
                        process: "Chemosynthesis",
                        habitats: "Deep sea vents, caves, soil"
                    },
                    chemoheterotroph: {
                        energy: "Organic chemicals",
                        carbon: "Organic compounds",
                        examples: "Most bacteria, all fungi, all animals",
                        process: "Cellular respiration or fermentation",
                        mostCommon: "Vast majority of organisms"
                    }
                }
            }
        },
        
        cultureMedia: {
            definition: "Nutrient preparations for growing microorganisms in laboratory",
            
            byConsistency: {
                broth: {
                    description: "Liquid medium",
                    use: "Large-scale growth, physiological studies",
                    turbidity: "Can measure growth by optical density"
                },
                agarPlate: {
                    description: "Solid medium; agar as solidifying agent",
                    agar: "Polysaccharide from seaweed; melts at 100°C, solidifies at 40°C",
                    concentration: "1.5-2% for plates",
                    use: "Isolate pure cultures, count colonies (CFU), streak for isolation"
                },
                semisolid: {
                    description: "0.3-0.5% agar",
                    use: "Motility testing, transport medium"
                }
            },
            
            byComposition: {
                chemicallyDefined: {
                    description: "Exact chemical composition known",
                    components: "Pure chemicals in precise amounts",
                    advantage: "Reproducible; know exactly what organism gets",
                    disadvantage: "Expensive; time-consuming to prepare",
                    use: "Research, metabolic studies",
                    example: "Minimal medium: Glucose + NH4Cl + KH2PO4 + MgSO4 + trace minerals"
                },
                complex: {
                    description: "Exact composition unknown",
                    components: "Extracts of complex materials (yeast extract, peptone, beef extract)",
                    peptone: "Protein digest; provides amino acids, peptides",
                    yeastExtract: "Vitamins, nucleotides, amino acids",
                    beefExtract: "Minerals, vitamins, other nutrients",
                    advantage: "Supports growth of wide range of organisms; rich in nutrients",
                    disadvantage: "Composition varies batch-to-batch",
                    use: "Routine cultivation, clinical microbiology",
                    examples: "Nutrient agar, LB (Luria-Bertani) broth, TSA (tryptic soy agar)"
                }
            },
            
            byFunction: {
                generalPurpose: {
                    description: "Support growth of many organisms",
                    examples: "Nutrient agar, tryptic soy agar (TSA)",
                    use: "Routine cultivation"
                },
                enriched: {
                    description: "General purpose medium + extra nutrients (blood, serum)",
                    examples: "Blood agar (5-10% sheep blood), chocolate agar (lysed blood)",
                    use: "Fastidious organisms (Streptococcus, Neisseria)",
                    blood: "Provides heme, vitamins, proteins"
                },
                selective: {
                    description: "Allow growth of certain organisms while inhibiting others",
                    mechanism: "Contain inhibitors (antibiotics, dyes, high salt)",
                    examples: {
                        MacConkey: "Selects Gram-negative (bile salts, crystal violet inhibit Gram-positive)",
                        MannitolSalt: "Selects halophiles (7.5% NaCl inhibits non-halophiles)",
                        PheSmylethylalcohol: "Selects Gram-positive (inhibits Gram-negative)",
                        Thayer-Martin: "Selects Neisseria (antibiotics inhibit normal flora)"
                    },
                    use: "Isolate specific organism from mixed culture (e.g., pathogen from stool)"
                },
                differential: {
                    description: "Distinguish organisms based on biochemical properties",
                    mechanism: "Contain indicator (pH indicator, substrate that changes color)",
                    examples: {
                        MacConkey: "Differentiates lactose fermenters (pink) from non-fermenters (colorless)",
                        BloodAgar: "Differentiates by hemolysis: α (green), β (clear), γ (no change)",
                        MannitolSalt: "Differentiates mannitol fermenters (yellow) from non-fermenters (red)",
                        EMB: "Differentiates lactose fermenters; E. coli shows green metallic sheen"
                    },
                    use: "Identify organisms based on metabolic capabilities"
                },
                selectiveAndDifferential: {
                    description: "Combines both functions",
                    examples: "MacConkey (selective for Gram-negative, differential for lactose)",
                    advantage: "Two purposes in one medium"
                },
                enrichment: {
                    description: "Liquid medium favoring target organism; increases numbers",
                    mechanism: "Nutrients favoring target; may inhibit others",
                    examples: "Selenite broth (enriches Salmonella from stool)",
                    use: "Increase numbers of target before plating on selective medium"
                }
            },
            
            examples: {
                nutrientAgar: {
                    type: "General purpose, complex",
                    composition: "Beef extract + peptone + agar",
                    use: "Routine cultivation of non-fastidious bacteria"
                },
                LBagar: {
                    name: "Luria-Bertani agar",
                    type: "General purpose, complex, enriched",
                    composition: "Tryptone + yeast extract + NaCl + agar",
                    use: "Molecular biology; E. coli cultivation"
                },
                bloodAgar: {
                    type: "Enriched, differential",
                    composition: "TSA + 5% sheep blood",
                    use: "Fastidious organisms; hemolysis patterns"
                },
                MacConkeyAgar: {
                    type: "Selective and differential",
                    selective: "Bile salts + crystal violet inhibit Gram-positive",
                    differential: "Lactose + neutral red (pH indicator)",
                    use: "Gram-negative enteric bacteria; lactose fermentation"
                },
                MannitolSaltAgar: {
                    type: "Selective and differential",
                    selective: "7.5% NaCl (selects halophiles like Staphylococcus)",
                    differential: "Mannitol + phenol red (pH indicator)",
                    use: "Isolate and differentiate staphylococci (S. aureus ferments mannitol)"
                }
            }
        },
        
        sterilizationAndDisinfection: {
            definitions: {
                sterilization: "Complete destruction of ALL microorganisms including spores",
                disinfection: "Destruction of vegetative pathogens (not necessarily spores)",
                antisepsis: "Disinfection of living tissue",
                sanitization: "Reduction of microbes to safe public health levels",
                degerming: "Mechanical removal of microbes (washing)",
                bacteriostatic: "Inhibits bacterial growth (reversible)",
                bactericidal: "Kills bacteria (irreversible)"
            },
            
            physicalMethods: {
                heat: {
                    moistHeat: {
                        autoclaving: {
                            conditions: "121°C, 15 psi, 15-20 minutes",
                            mechanism: "Steam under pressure; denatures proteins, nucleic acids",
                            kills: "ALL microorganisms including endospores",
                            use: "Laboratory media, instruments, liquids, waste",
                            advantage: "Most reliable sterilization method",
                            indicator: "Biological indicator (Geobacillus stearothermophilus spores)",
                            tape: "Autoclave tape (stripes appear when proper temp reached)"
                        },
                        boiling: {
                            conditions: "100°C, 10-30 minutes",
                            mechanism: "Denatures proteins",
                            kills: "Vegetative cells, NOT endospores",
                            use: "Drinking water, some instruments",
                            limitation: "Not sterilization; disinfection only"
                        },
                        pasteurization: {
                            HTST: "High Temperature Short Time: 72°C, 15 seconds",
                            LTH: "Low Temperature Hold: 63°C, 30 minutes",
                            UHT: "Ultra High Temperature: 138°C, 2 seconds",
                            mechanism: "Kills pathogens; reduces spoilage organisms",
                            use: "Milk, juice, wine, beer",
                            notSterilization: "Reduces but doesn't eliminate all microbes",
                            advantage: "Preserves nutrients and flavor better than sterilization"
                        }
                    },
                    dryHeat: {
                        hotAirOven: {
                            conditions: "160-180°C, 2 hours",
                            mechanism: "Oxidation; slower than moist heat",
                            use: "Glassware, metal instruments, powders, oils",
                            advantage: "No moisture corrosion",
                            disadvantage: "Longer time; higher temp"
                        },
                        incineration: {
                            conditions: "Very high temperature (flame)",
                            mechanism: "Complete combustion",
                            use: "Inoculating loops, contaminated waste",
                            immediate: "Instantaneous sterilization"
                        }
                    }
                },
                
                filtration: {
                    mechanism: "Physical removal of microbes by passage through filter",
                    poreSize: "0.22 μm or 0.45 μm (bacteria cannot pass)",
                    use: "Heat-sensitive liquids (enzymes, sera, antibiotics, culture media with heat-sensitive components)",
                    types: {
                        membrane: "Cellulose acetate, polycarbonate",
                        HEPA: "High Efficiency Particulate Air filter (removes 99.97% of particles ≥0.3 μm)"
                    },
                    viruses: "Cannot remove most viruses (too small; 20-300 nm)",
                    advantage: "No heat; preserves sensitive compounds"
                },
                
                radiation: {
                    UV: {
                        wavelength: "260 nm (absorbed by DNA)",
                        mechanism: "Forms thymine dimers; prevents replication",
                        use: "Surface sterilization (biosafety cabinets, operating rooms)",
                        limitation: "Poor penetration; doesn't pass through glass or liquids",
                        exposure: "Several minutes to hours depending on intensity"
                    },
                    ionizing: {
                        types: "Gamma rays (Cobalt-60), electron beams",
                        mechanism: "Breaks chemical bonds; generates free radicals; damages DNA",
                        penetration: "Excellent; passes through packaging",
                        use: "Medical devices, pharmaceuticals, food irradiation",
                        advantage: "Sterilizes in packaging; no heat or chemicals",
                        cold: "Called 'cold sterilization'"
                    }
                },
                
                lowTemperature: {
                    refrigeration: {
                        temp: "0-7°C",
                        effect: "Bacteriostatic (slows growth; doesn't kill)",
                        use: "Food preservation, culture storage (short-term)"
                    },
                    freezing: {
                        temp: "-20°C to -80°C",
                        effect: "Bacteriostatic; some cells die from ice crystal damage",
                        use: "Long-term culture storage (with cryoprotectant glycerol)",
                        notSterilization: "Many bacteria survive freezing"
                    },
                    lyophilization: {
                        process: "Freeze-drying (freeze then remove water under vacuum)",
                        effect: "Preserves bacteria in dormant state",
                        use: "Culture collection storage; some pharmaceuticals",
                        decades: "Can preserve bacteria for decades"
                    }
                },
                
                desiccation: {
                    mechanism: "Removal of water; inhibits metabolism",
                    effect: "Bacteriostatic (most bacteria); some die",
                    resistant: "Spores, Mycobacterium, some Gram-positive (Staphylococcus)",
                    use: "Food preservation (dried foods)"
                },
                
                osmoticPressure: {
                    highSalt: "Hypertonic solution; water leaves cells (plasmolysis)",
                    highSugar: "Same principle as salt",
                    use: "Food preservation (salted fish, jams)",
                    limitation: "Halophiles can grow"
                }
            },
            
            chemicalMethods: {
                alcohols: {
                    ethanol: {
                        concentration: "70% most effective (denatures proteins; 100% too rapid evaporation)",
                        mechanism: "Denatures proteins, disrupts membranes",
                        use: "Skin antisepsis, disinfect surfaces",
                        limitations: "Not sporicidal; evaporates quickly"
                    },
                    isopropanol: {
                        concentration: "70-90%",
                        similar: "Similar to ethanol; slightly more effective"
                    }
                },
                halogens: {
                    iodine: {
                        forms: "Tincture (alcohol solution), iodophors (povidone-iodine)",
                        mechanism: "Oxidizes proteins, inactivates enzymes",
                        use: "Skin antisepsis before surgery",
                        spectrum: "Broad (bacteria, viruses, fungi, some spores)"
                    },
                    chlorine: {
                        forms: "Bleach (sodium hypochlorite), chloramine",
                        mechanism: "Strong oxidizing agent; disrupts proteins and membranes",
                        use: "Water treatment, surface disinfection",
                        concentration: "0.5% bleach for disinfection"
                    }
                },
                phenolics: {
                    examples: "Lysol, hexachlorophene, triclosan",
                    mechanism: "Disrupts membranes, denatures proteins",
                    use: "Surface disinfection, some antiseptics",
                    advantage: "Remains active in presence of organic matter",
                    note: "Triclosan banned in consumer soaps (antibiotic resistance concerns)"
                },
                heavyMetals: {
                    silver: "AgNO3 (silver nitrate) eye drops for newborns (prevent gonorrhea)",
                    mercury: "Merthiolate (thimerosal) - banned in many countries",
                    copper: "Copper sulfate - algicide",
                    mechanism: "Bind to proteins; inactivate enzymes"
                },
                surfaceActiveAgents: {
                    soaps: "Degerming (mechanical removal); not strongly antimicrobial",
                    detergents: {
                        cationic: "Quaternary ammonium compounds (quats) - benzalkonium chloride",
                        mechanism: "Disrupt membranes",
                        use: "Surface disinfection, antiseptic mouthwash"
                    }
                },
                aldehydes: {
                    formaldehyde: {
                        form: "Formalin (37% solution)",
                        mechanism: "Cross-links proteins",
                        use: "Tissue preservation, embalming, some sterilization",
                        toxic: "Carcinogenic; limited use"
                    },
                    glutaraldehyde: {
                        concentration: "2%",
                        mechanism: "Cross-links proteins and nucleic acids",
                        use: "Sterilize heat-sensitive medical equipment",
                        sporicidal: "Yes (given sufficient time - 10 hours)",
                        advantage: "Less toxic than formaldehyde"
                    }
                },
                gases: {
                    ethyleneOxide: {
                        mechanism: "Alkylating agent; inactivates proteins and DNA",
                        use: "Sterilize heat/moisture sensitive items (plastics, electronics)",
                        penetration: "Excellent; sterilizes in packaging",
                        hazard: "Flammable, toxic, carcinogenic; requires aeration",
                        time: "4-12 hours plus aeration"
                    }
                },
                oxidizingAgents: {
                    hydrogenPeroxide: {
                        concentration: "3% (antiseptic), 6-25% (disinfection), 35% (sterilization)",
                        mechanism: "Free radicals oxidize cellular components",
                        use: "Wound antisepsis, contact lens disinfection, surface sterilization",
                        advantage: "Breaks down to water and oxygen (environmentally safe)"
                    },
                    ozone: {
                        mechanism: "Strong oxidizer",
                        use: "Water treatment, air purification",
                        advantage: "No chemical residues"
                    }
                }
            },
            
            evaluatingEffectiveness: {
                usesDilutionTest: {
                    method: "Serial dilutions of disinfectant; test against bacteria",
                    result: "Determines dilution that kills in 10 minutes but not 5 (endpoint)",
                    express: "Phenol coefficient (compared to phenol)"
                },
                diskDiffusion: {
                    method: "Disinfectant-soaked disk on inoculated plate",
                    result: "Zone of inhibition indicates effectiveness",
                    similar: "Like antibiotic disk diffusion"
                },
                inUseTest: {
                    method: "Sample from actual use site",
                    reality: "Tests under real conditions"
                },
                factors: {
                    time: "Longer exposure = more effective",
                    concentration: "Higher concentration = more effective (to a point)",
                    temperature: "Higher temp = more effective",
                    organicMatter: "Interferes with many disinfectants",
                    biofilms: "Much more resistant than planktonic cells"
                }
            }
        },
        
        applications: [
            "Industrial fermentation: Optimize growth conditions for maximum product yield",
            "Clinical microbiology: Culture pathogens; understand infection dynamics",
            "Food microbiology: Predict shelf life; prevent spoilage and foodborne illness",
            "Biotechnology: Grow recombinant organisms; time protein expression",
            "Environmental: Understand microbial populations in nature",
            "Pharmaceutical: Produce antibiotics, enzymes, vaccines at optimal growth phase",
            "Research: Study bacterial physiology, genetics, metabolism"
        ],
        
        realWorldExamples: [
            {
                scenario: "Food poisoning outbreak",
                problem: "Potato salad left at room temperature 4 hours",
                calculation: "Staphylococcus aureus, generation time 30 min, start 100 cells",
                generations: "4 hours / 30 min = 8 generations",
                finalCells: "100 × 2^8 = 25,600 cells",
                toxin: "S. aureus produces enterotoxin (causes vomiting); only need ~10^5 cells",
                conclusion: "Dangerous level reached after 4 hours"
            },
            {
                scenario: "Antibiotic treatment timing",
                principle: "Penicillin inhibits cell wall synthesis during division",
                effectiveness: "Most effective when bacteria in log phase (actively dividing)",
                stationary: "Less effective in stationary phase (not dividing)",
                clinical: "Give antibiotics before bacteria reach stationary phase"
            },
            {
                scenario: "Yogurt production",
                starter: "Lactobacillus, Streptococcus thermophilus",
                temperature: "42-45°C (thermophile optimum)",
                fermentation: "Lactic acid production lowers pH; coagulates milk proteins",
                stationary: "Harvest in late log/early stationary phase for optimal flavor and texture"
            }
        ],
        
        clinicalRelevance: [
            "Infection progression: Understanding how bacterial populations grow in body",
            "Antibiotic timing: Treat during log phase for maximum effectiveness",
            "Sepsis: Bacteria in blood can double every 20-30 min; rapid intervention critical",
            "Chronic infections: Bacteria in stationary/biofilm state more antibiotic-resistant",
            "Food safety: Predict time to dangerous levels; set food handling guidelines",
            "Sterilization: Ensure medical devices free of all microbes including spores",
            "Wound care: Antiseptics reduce bacterial load on living tissue"
        ]
    };
    
    return content;
}

handleMicrobialMetabolism(problem) {
    const content = {
        topic: "Microbial Metabolism: Energy and Biosynthesis",
        category: 'microbial_physiology',
        summary: "Microbial metabolism encompasses all chemical reactions in cells, including catabolism (energy generation) and anabolism (biosynthesis). Microorganisms display remarkable metabolic diversity, utilizing various energy sources, electron acceptors, and carbon sources.",
        
        keyDefinitions: {
            "Metabolism": "Sum of all chemical reactions in cell",
            "Catabolism": "Breakdown of complex molecules; releases energy (exergonic)",
            "Anabolism": "Synthesis of complex molecules; requires energy (endergonic)",
            "ATP": "Adenosine triphosphate; universal energy currency of cells",
            "Redox Reaction": "Oxidation-reduction; transfer of electrons between molecules",
            "Oxidation": "Loss of electrons (or hydrogen); often releases energy",
            "Reduction": "Gain of electrons (or hydrogen); often requires energy",
            "Electron Carrier": "Molecule that accepts and donates electrons (NAD+, NADP+, FAD)",
            "Substrate-Level Phosphorylation": "Direct transfer of phosphate to ADP → ATP",
            "Oxidative Phosphorylation": "ATP synthesis via electron transport chain and chemiosmosis",
            "Fermentation": "Anaerobic catabolism; organic final electron acceptor",
            "Respiration": "Aerobic or anaerobic catabolism using electron transport chain",
            "Chemiosmosis": "ATP synthesis driven by proton gradient across membrane"
        },
        
        ATPStructureAndFunction: {
            structure: {
                adenine: "Nitrogenous base",
                ribose: "Five-carbon sugar",
                phosphates: "Three phosphate groups (α, β, γ)",
                highenergy: "Bonds between phosphates (especially β-γ) are high-energy"
            },
            hydrolysis: {
                reaction: "ATP + H2O → ADP + Pi + energy",
                energy: "ΔG = -7.3 kcal/mol (under standard conditions)",
                cellular: "Actually ~-12 kcal/mol in cell (non-standard conditions)",
                use: "Energy released drives endergonic reactions"
            },
            synthesis: {
                methods: "Substrate-level phosphorylation, oxidative phosphorylation, photophosphorylation",
                efficiency: "Aerobic respiration most efficient (32-38 ATP per glucose)"
            },
            currency: "Universal energy currency; couples exergonic and endergonic reactions",
            turnover: "Each ATP recycled ~500-750 times per day in human"
        },
        
        redoxReactions: {
            principle: "Oxidation and reduction always occur together (redox pair)",
            mnemonic: "OIL RIG = Oxidation Is Loss, Reduction Is Gain (of electrons)",
            electrons: {
                oxidation: "Molecule loses electrons (becomes oxidized)",
                reduction: "Molecule gains electrons (becomes reduced)",
                transfer: "Electrons transferred from donor (reducing agent) to acceptor (oxidizing agent)"
            },
            hydrogenTransfer: {
                dehydrogenation: "Removal of hydrogen = oxidation (H carries electrons)",
                hydrogenation: "Addition of hydrogen = reduction"
            },
            example: {
                reaction: "Glucose + O₂ → CO₂ + H₂O",
                glucose: "Oxidized (loses electrons/hydrogen)",
                oxygen: "Reduced (gains electrons/hydrogen)",
                energy: "Released during electron transfer"
            },
            electronCarriers: {
                NAD: {
                    fullName: "Nicotinamide adenine dinucleotide",
                    oxidized: "NAD+ (accepts electrons)",
                    reduced: "NADH (carries electrons)",
                    function: "Primary electron carrier in catabolism",
                    pathways: "Glycolysis, Krebs cycle",
                    destination: "Electrons go to electron transport chain (ETC)"
                },
                NADP: {
                    fullName: "Nicotinamide adenine dinucleotide phosphate",
                    oxidized: "NADP+",
                    reduced: "NADPH",
                    function: "Primary electron carrier in anabolism",
                    pathways: "Photosynthesis, biosynthetic reactions",
                    difference: "Extra phosphate group distinguishes from NAD+"
                },
                FAD: {
                    fullName: "Flavin adenine dinucleotide",
                    oxidized: "FAD",
                    reduced: "FADH₂",
                    function: "Electron carrier in Krebs cycle",
                    ATPyield: "2 ATP per FADH₂ (vs 3 ATP per NADH) in ETC"
                }
            }
        },
        
        glycolysis: {
            name: "Glycolysis (Embden-Meyerhof-Parnas pathway)",
            location: "Cytoplasm",
            oxygen: "Does NOT require oxygen (anaerobic)",
            universality: "Occurs in virtually all organisms (prokaryotes and eukaryotes)",
            overview: "Glucose (6C) → 2 Pyruvate (3C each)",
            
            stages: {
                energyInvestment: {
                    name: "Energy investment phase (steps 1-5)",
                    reactions: [
                        "1. Glucose → Glucose-6-phosphate (ATP consumed)",
                        "2. Glucose-6-P → Fructose-6-P (isomerization)",
                        "3. Fructose-6-P → Fructose-1,6-bisphosphate (ATP consumed)",
                        "4. Fructose-1,6-bisP → DHAP + G3P (cleavage into two 3C molecules)",
                        "5. DHAP → G3P (isomerization)"
                    ],
                    ATPused: "2 ATP consumed",
                    result: "One 6C glucose → Two 3C G3P (glyceraldehyde-3-phosphate)"
                },
                energyPayoff: {
                    name: "Energy payoff phase (steps 6-10)",
                    reactions: [
                        "6. G3P → 1,3-bisphosphoglycerate (NAD+ → NADH; oxidation)",
                        "7. 1,3-bisphosphoglycerate → 3-phosphoglycerate (ATP produced - substrate-level)",
                        "8. 3-phosphoglycerate → 2-phosphoglycerate (rearrangement)",
                        "9. 2-phosphoglycerate → Phosphoenolpyruvate (PEP) (dehydration)",
                        "10. PEP → Pyruvate (ATP produced - substrate-level)"
                    ],
                    ATPproduced: "4 ATP produced (2 per G3P × 2 G3P = 4 total)",
                    NADHproduced: "2 NADH (1 per G3P × 2 = 2 total)",
                    result: "Two 3C pyruvate molecules"
                }
            },
            
            netYield: {
                ATP: "Net 2 ATP (4 produced - 2 consumed)",
                NADH: "2 NADH",
                pyruvate: "2 Pyruvate",
                note: "NADH must be recycled (regenerate NAD+) for glycolysis to continue"
            },
            
            regulation: {
                keyEnzymes: [
                    "Hexokinase (step 1) - inhibited by product (G6P)",
                    "Phosphofructokinase (step 3) - inhibited by ATP, citrate; activated by AMP, ADP",
                    "Pyruvate kinase (step 10) - inhibited by ATP; activated by fructose-1,6-bisphosphate"
                ],
                principle: "Negative feedback; when ATP high, glycolysis slows"
            },
            
            fateOfPyruvate: {
                aerobic: "Pyruvate → Acetyl-CoA → Krebs cycle (if O₂ available)",
                anaerobic: "Pyruvate → fermentation products (if no O₂)",
                determines: "Aerobic respiration vs fermentation"
            }
        },
        
        aerobicRespiration: {
            overview: "Complete oxidation of glucose to CO₂ and H₂O; uses O₂ as final electron acceptor",
            stages: "Glycolysis → Pyruvate oxidation → Krebs cycle → Electron transport chain",
            location: {
                prokaryotes: "Cytoplasm (glycolysis, Krebs) and plasma membrane (ETC)",
                eukaryotes: "Cytoplasm (glycolysis), mitochondria (Krebs, ETC)"
            },
            ATPyield: "32-38 ATP per glucose (varies by shuttle system)",
            
            pyruvateOxidation: {
                location: "Mitochondrial matrix (eukaryotes) or cytoplasm (prokaryotes)",
                reaction: "Pyruvate + CoA + NAD+ → Acetyl-CoA + CO₂ + NADH",
                enzyme: "Pyruvate dehydrogenase complex (multi-enzyme)",
                products: {
                    acetylCoA: "2C acetyl group attached to Coenzyme A; enters Krebs cycle",
                    CO2: "First CO₂ released",
                    NADH: "1 NADH per pyruvate (2 total per glucose)"
                },
                irreversible: "Committed step; cannot reverse to make glucose from acetyl-CoA"
            },
            
            krebsCycle: {
                names: "Krebs cycle, Citric acid cycle, TCA (tricarboxylic acid) cycle",
                location: "Mitochondrial matrix (eukaryotes), cytoplasm (prokaryotes)",
                purpose: "Complete oxidation of acetyl-CoA to CO₂; generate NADH and FADH₂",
                cyclic: "Oxaloacetate regenerated each turn",
                
                steps: [
                    "1. Acetyl-CoA (2C) + Oxaloacetate (4C) → Citrate (6C) + CoA",
                    "2. Citrate (6C) → Isocitrate (6C) (rearrangement)",
                    "3. Isocitrate → α-Ketoglutarate (5C) + CO₂ + NADH (oxidative decarboxylation)",
                    "4. α-Ketoglutarate → Succinyl-CoA (4C) + CO₂ + NADH (oxidative decarboxylation)",
                    "5. Succinyl-CoA → Succinate + GTP (or ATP) (substrate-level phosphorylation)",
                    "6. Succinate → Fumarate + FADH₂ (oxidation)",
                    "7. Fumarate → Malate (hydration)",
                    "8. Malate → Oxaloacetate + NADH (oxidation; regenerates oxaloacetate)"
                ],
                
                productsPerTurn: {
                    CO2: "2 CO₂ (all carbon from acetyl-CoA released)",
                    NADH: "3 NADH",
                    FADH2: "1 FADH₂",
                    GTP: "1 GTP (equivalent to ATP)"
                },
                
                perGlucose: {
                    turns: "2 turns (2 acetyl-CoA from 1 glucose)",
                    CO2: "4 CO₂",
                    NADH: "6 NADH",
                    FADH2: "2 FADH₂",
                    ATP: "2 ATP (or GTP)"
                },
                
                regulation: {
                    allosteric: "Inhibited by ATP, NADH (products)",
                    activated: "Activated by ADP, NAD+ (when energy needed)",
                    keyEnzymes: "Citrate synthase, isocitrate dehydrogenase, α-ketoglutarate dehydrogenase"
                },
                
                amphibolic: "Both catabolic (energy) and anabolic (intermediates for biosynthesis)"
            },
            
            electronTransportChain: {
                location: "Inner mitochondrial membrane (eukaryotes), plasma membrane (prokaryotes)",
                purpose: "Transfer electrons from NADH/FADH₂ to O₂; generate proton gradient for ATP synthesis",
                components: "Four protein complexes (I-IV) + ubiquinone (Q) + cytochrome c",
                
                complexes: {
                    complexI: {
                        name: "NADH dehydrogenase",
                        accepts: "Electrons from NADH",
                        pumps: "4 H+ across membrane",
                        passes: "Electrons to ubiquinone (Q)"
                    },
                    complexII: {
                        name: "Succinate dehydrogenase",
                        accepts: "Electrons from FADH₂",
                        pumps: "0 H+ (does not pump protons)",
                        passes: "Electrons to ubiquinone (Q)",
                        note: "Also part of Krebs cycle"
                    },
                    complexIII: {
                        name: "Cytochrome bc₁ complex",
                        accepts: "Electrons from ubiquinone (QH₂)",
                        pumps: "4 H+",
                        passes: "Electrons to cytochrome c"
                    },
                    complexIV: {
                        name: "Cytochrome c oxidase",
                        accepts: "Electrons from cytochrome c",
                        pumps: "2 H+",
                        final: "Transfers electrons to O₂ (final electron acceptor)",
                        product: "O₂ + 4H+ + 4e- → 2H₂O"
                    }
                },
                
                protonGradient: {
                    formation: "Complexes I, III, IV pump H+ from matrix to intermembrane space",
                    result: "High H+ in intermembrane space; low H+ in matrix",
                    gradient: "Electrochemical gradient (ΔpH + Δψ)",
                    protonMotiveForce: "Potential energy stored in gradient"
                },
                
                chemiosmosis: {
                    definition: "ATP synthesis driven by proton gradient",
                    enzyme: "ATP synthase (Complex V)",
                    mechanism: [
                        "H+ flows back through ATP synthase (down gradient)",
                        "Rotary motion drives conformational changes",
                        "ADP + Pi → ATP"
                    ],
                    stoichiometry: "~3-4 H+ per ATP synthesized",
                    credit: "Peter Mitchell (1978 Nobel Prize)"
                },
                
                ATPyield: {
                    NADH: "~2.5-3 ATP per NADH",
                    FADH2: "~1.5-2 ATP per FADH₂ (enters at Complex II; pumps fewer H+)",
                    total: "32-38 ATP per glucose (varies by organism and shuttle)"
                }
            },
            
            totalATPYield: {
                glycolysis: "2 ATP (substrate-level) + 2 NADH → ~5 ATP",
                pyruvateOxidation: "2 NADH → ~5 ATP",
                krebsCycle: "2 ATP + 6 NADH + 2 FADH₂ → 2 + ~15 + ~3 = ~20 ATP",
                grandTotal: "~30-32 ATP (prokaryotes) or ~32-38 ATP (eukaryotes)",
                variability: "Depends on NADH shuttle system, H+/ATP stoichiometry, ATP/O ratio"
            }
        },
        
        anaerobicRespiration: {
            definition: "Uses electron transport chain but NOT O₂ as final electron acceptor",
            alternatives: "NO₃⁻, SO₄²⁻, CO₂, Fe³⁺, SeO₄²⁻, etc.",
            organisms: "Facultative anaerobes, obligate anaerobes",
            ATPyield: "Less than aerobic (alternate acceptors lower reduction potential)",
            
            types: {
                denitrification: {
                    acceptor: "NO₃⁻ (nitrate)",
                    reduction: "NO₃⁻ → NO₂⁻ → NO → N₂O → N₂ (nitrogen gas)",
                    organisms: "Pseudomonas, Paracoccus, Bacillus",
                    importance: "Returns N₂ to atmosphere; completes nitrogen cycle",
                    agriculture: "Loss of fertilizer nitrogen from soil"
                },
                sulfateReduction: {
                    acceptor: "SO₄²⁻ (sulfate)",
                    reduction: "SO₄²⁻ → H₂S (hydrogen sulfide)",
                    organisms: "Desulfovibrio, Desulfotomaculum",
                    habitats: "Anaerobic mud, sediments",
                    problem: "H₂S toxic, corrosive (corrodes pipes)",
                    smell: "Rotten egg smell"
                },
                methanogenesis: {
                    acceptor: "CO₂",
                    reduction: "CO₂ → CH₄ (methane)",
                    organisms: "Methanogens (Archaea: Methanobacterium, Methanococcus)",
                    habitats: "Swamps, rumen, intestines, anaerobic digesters",
                    importance: "Biogas production, wastewater treatment",
                    greenhouse: "CH₄ is potent greenhouse gas"
                },
                ironReduction: {
                    acceptor: "Fe³⁺ (ferric iron)",
                    reduction: "Fe³⁺ → Fe²⁺ (ferrous iron)",
                    organisms: "Geobacter, Shewanella",
                    applications: "Bioremediation of iron-contaminated sites"
                }
            },
            
            importance: [
                "Allows life in anaerobic environments",
                "Biogeochemical cycling (N, S, C, Fe)",
                "Wastewater treatment (methane production)",
                "Some prokaryotes exclusively use anaerobic respiration"
            ]
        },
        
        fermentation: {
            definition: "Anaerobic catabolism; organic molecule as final electron acceptor",
            noETC: "Does NOT use electron transport chain",
            ATPsource: "Substrate-level phosphorylation ONLY (from glycolysis)",
            ATPyield: "2 ATP per glucose (much less than respiration)",
            purpose: "Regenerate NAD+ so glycolysis can continue",
            NADregeneration: "NADH from glycolysis must be reoxidized to NAD+",
            
            types: {
                lacticAcid: {
                    reaction: "Pyruvate + NADH → Lactate + NAD+",
                    products: "Lactic acid",
                    homolactic: {
                        organisms: "Lactobacillus, Streptococcus",
                        product: "Only lactic acid",
                        applications: "Yogurt, cheese, sauerkraut, kimchi, pickles",
                        equation: "Glucose → 2 Lactate + 2 ATP"
                    },
                    heterolactic: {
                        organisms: "Leuconostoc",
                        products: "Lactic acid + ethanol + CO₂",
                        pathway: "Phosphoketolase pathway (alternative to glycolysis)"
                    },
                    humanMuscle: "Muscle cells under anaerobic conditions (intense exercise)",
                    soreness: "Lactic acid buildup contributes to muscle fatigue",
                    reversible: "Lactate converted back to pyruvate in liver when O₂ available"
                },
                
                alcoholic: {
                    reaction: "Pyruvate → Acetaldehyde + CO₂; Acetaldehyde + NADH → Ethanol + NAD+",
                    organisms: "Yeast (Saccharomyces cerevisiae), some bacteria (Zymomonas)",
                    products: "Ethanol + CO₂",
                    steps: [
                        "1. Pyruvate → Acetaldehyde + CO₂ (decarboxylation)",
                        "2. Acetaldehyde + NADH → Ethanol + NAD+"
                    ],
                    applications: {
                        brewing: "Beer production (yeast ferments barley sugars)",
                        winemaking: "Wine (yeast ferments grape sugars)",
                        distilling: "Spirits (distill fermented product)",
                        baking: "Bread (CO₂ makes dough rise; ethanol evaporates)",
                        biofuel: "Ethanol as fuel from corn or sugarcane"
                    },
                    equation: "Glucose → 2 Ethanol + 2 CO₂ + 2 ATP"
                },
                
                mixedAcid: {
                    organisms: "E. coli, Salmonella, Shigella",
                    products: "Acetic acid, lactic acid, succinic acid, formic acid, ethanol, CO₂, H₂",
                    pathway: "Formate-hydrogenlyase pathway",
                    test: "Methyl red test positive (lots of acid produced)"
                },
                
                butanediol: {
                    organisms: "Enterobacter, Klebsiella, Serratia",
                    products: "2,3-butanediol, ethanol, lactic acid, CO₂, H₂",
                    lessAcid: "Neutral pH endpoint (less acid than mixed-acid)",
                    test: "Voges-Proskauer test positive (detects acetoin intermediate)"
                },
                
                butyric: {
                    organisms: "Clostridium butyricum",
                    products: "Butyric acid, CO₂, H₂",
                    smell: "Rancid butter smell",
                    spores: "Often produce endospores"
                },
                
                propionic: {
                    organisms: "Propionibacterium",
                    products: "Propionic acid, acetic acid, CO₂",
                    application: "Swiss cheese (CO₂ makes holes; propionic acid gives flavor)"
                }
            },
            
            comparisonTable: {
                headers: ["Fermentation Type", "Organisms", "Products", "Applications"],
                rows: [
                    ["Lactic acid", "Lactobacillus, Streptococcus", "Lactic acid", "Yogurt, cheese, pickles"],
                    ["Alcoholic", "Yeast, Zymomonas", "Ethanol, CO₂", "Beer, wine, bread, biofuel"],
                    ["Mixed acid", "E. coli, Salmonella", "Multiple acids, ethanol, gases", "ID in lab (MR test)"],
                    ["Butanediol", "Enterobacter, Klebsiella", "2,3-butanediol, CO₂", "ID in lab (VP test)"],
                    ["Butyric", "Clostridium", "Butyric acid, gases", "Spoilage (rancid)"],
                    ["Propionic", "Propionibacterium", "Propionic acid, CO₂", "Swiss cheese"]
                ]
            },
            
            industrialImportance: [
                "Food production (dairy, fermented vegetables, bread)",
                "Beverage production (beer, wine, spirits)",
                "Biofuel production (ethanol from corn, sugarcane)",
                "Biotechnology (lactic acid for bioplastics)",
                "Identification (fermentation patterns identify bacteria)"
            ]
        },
        
        nutritionalClassification: {
            byEnergySource: {
                phototroph: {
                    energy: "Light energy",
                    process: "Photosynthesis",
                    pigments: "Chlorophyll, bacteriochlorophyll, carotenoids",
                    examples: "Cyanobacteria, purple bacteria, green bacteria, algae, plants"
                },
                chemotroph: {
                    energy: "Chemical bonds (oxidation of organic or inorganic)",
                    chemoorganotroph: "Oxidize organic compounds (glucose, amino acids)",
                    chemolithotroph: "Oxidize inorganic compounds (H₂S, NH₃, Fe²⁺)"
                }
            },
            
            byCarbonSource: {
                autotroph: {
                    carbon: "CO₂ (inorganic carbon)",
                    fixation: "Carbon fixation via Calvin cycle or alternative pathways",
                    meaning: "Self-feeder"
                },
                heterotroph: {
                    carbon: "Organic carbon compounds (glucose, amino acids, etc.)",
                    meaning: "Other-feeder"
                }
            },
            
            combined: {
                photoautotroph: {
                    energy: "Light",
                    carbon: "CO₂",
                    examples: "Cyanobacteria, purple sulfur bacteria, green sulfur bacteria, plants, algae",
                    process: "Oxygenic (plants, cyanobacteria) or anoxygenic (purple/green bacteria) photosynthesis",
                    importance: "Primary producers; base of food chain"
                },
                
                photoheterotroph: {
                    energy: "Light",
                    carbon: "Organic compounds",
                    examples: "Purple nonsulfur bacteria, green nonsulfur bacteria, Heliobacteria",
                    process: "Anoxygenic photosynthesis",
                    uncommon: "Relatively rare"
                },
                
                chemoautotroph: {
                    energy: "Inorganic chemicals",
                    carbon: "CO₂",
                    alternative: "Chemolithotroph, chemolithoautotroph",
                    examples: {
                        nitrifying: "Nitrosomonas (NH₃ → NO₂⁻), Nitrobacter (NO₂⁻ → NO₃⁻)",
                        sulfurOxidizing: "Thiobacillus (H₂S → SO₄²⁻), Beggiatoa",
                        hydrogenBacteria: "Hydrogen bacteria (H₂ → H₂O)",
                        ironOxidizing: "Acidithiobacillus ferrooxidans (Fe²⁺ → Fe³⁺)",
                        methanogens: "Use H₂ + CO₂ → CH₄"
                    },
                    habitats: "Deep sea vents, caves, soil, extreme environments",
                    importance: "Biogeochemical cycling; primary producers in dark environments"
                },
                
                chemoheterotroph: {
                    energy: "Organic compounds",
                    carbon: "Organic compounds",
                    examples: "Most bacteria, all fungi, all animals, protozoa",
                    mostCommon: "Vast majority of organisms",
                    processes: "Aerobic respiration, anaerobic respiration, fermentation"
                }
            }
        },
        
        bacterialPhotosynthesis: {
            oxygenic: {
                organisms: "Cyanobacteria (Anabaena, Nostoc, Synechococcus)",
                pigments: "Chlorophyll a (similar to plants)",
                electronSource: "H₂O (water)",
                oxygenProduction: "YES - splits water, releases O₂",
                equation: "6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂",
                photosystems: "PS I and PS II (like plants)",
                evolutionaryImportance: "Oxygenated Earth's atmosphere ~2.4 billion years ago",
                chloroplastOrigin: "Chloroplasts evolved from cyanobacteria (endosymbiosis)"
            },
            
            anoxygenic: {
                organisms: "Purple bacteria, green bacteria",
                pigments: "Bacteriochlorophyll a or b",
                electronSource: "H₂S, H₂, organic compounds (NOT H₂O)",
                oxygenProduction: "NO - does not split water",
                photosystem: "Only one photosystem (either PS I-like or PS II-like)",
                
                purpleBacteria: {
                    purpleSulfur: {
                        examples: "Chromatium, Thiospirillum",
                        electronDonor: "H₂S (hydrogen sulfide)",
                        equation: "CO₂ + 2H₂S + light → (CH₂O) + 2S + H₂O",
                        sulfur: "Deposits sulfur granules inside cells",
                        habitats: "Anaerobic zones of lakes, sulfur springs"
                    },
                    purpleNonsulfur: {
                        examples: "Rhodospirillum, Rhodobacter",
                        electronDonor: "Organic compounds, H₂",
                        metabolism: "Often photoheterotrophic (use organic carbon)",
                        versatile: "Can switch between photosynthesis and respiration"
                    }
                },
                
                greenBacteria: {
                    greenSulfur: {
                        examples: "Chlorobium, Prosthecochloris",
                        electronDonor: "H₂S",
                        sulfur: "Deposits sulfur outside cells",
                        obligate: "Obligate photoautotrophs; cannot grow in dark",
                        deepWater: "Can photosyn thesize at very low light levels"
                    },
                    greenNonsulfur: {
                        examples: "Chloroflexus",
                        metabolism: "Photoheterotrophic",
                        flexible: "Can also grow as chemoheterotroph"
                    }
                }
            }
        },
        
        nitrogenMetabolism: {
            nitrogenCycle: "N₂ ⇌ NH₃/NH₄⁺ ⇌ NO₂⁻ ⇌ NO₃⁻ ⇌ N₂",
            
            nitrogenFixation: {
                process: "N₂ (atmospheric nitrogen) → NH₃ (ammonia)",
                enzyme: "Nitrogenase (molybdenum-iron protein)",
                sensitivity: "Extremely sensitive to O₂ (irreversibly inactivated)",
                energyCost: "16 ATP per N₂ fixed (very expensive)",
                equation: "N₂ + 8H⁺ + 8e⁻ + 16ATP → 2NH₃ + H₂ + 16ADP + 16Pi",
                
                organisms: {
                    freeliving: "Azotobacter (aerobic), Clostridium (anaerobic), Klebsiella",
                    symbiotic: "Rhizobium (legume root nodules), Frankia (actin orhizal plants)",
                    cyanobacteria: "Anabaena, Nostoc (heterocysts protect nitrogenase from O₂)"
                },
                
                rhizobiumLegume: {
                    relationship: "Mutualistic symbiosis",
                    nodules: "Rhizobium infects legume roots; forms nodules",
                    plant: "Provides carbohydrates (photosynthate) to bacteria",
                    bacteria: "Provides fixed nitrogen (NH₃) to plant",
                    leghemoglobin: "Plant protein binds O₂; protects nitrogenase while allowing respiration",
                    agriculture: "Crop rotation with legumes (soybeans, alfalfa, clover) enriches soil"
                },
                
                importance: [
                    "Only biological process that fixes atmospheric N₂",
                    "Essential for nitrogen cycle",
                    "Reduces need for synthetic fertilizers (Haber-Bosch process)",
                    "Enriches soil naturally"
                ]
            },
            
            nitrification: {
                process: "NH₃ → NO₂⁻ → NO₃⁻ (oxidation of ammonia to nitrate)",
                organisms: "Chemoautotrophs (get energy from oxidation)",
                aerobic: "Requires O₂",
                
                step1: {
                    organisms: "Nitrosomonas, Nitrosococcus, Nitrosospira",
                    reaction: "NH₃ + 1.5O₂ → NO₂⁻ + H₂O + H⁺ + energy",
                    product: "Nitrite (NO₂⁻)"
                },
                step2: {
                    organisms: "Nitrobacter, Nitrospira",
                    reaction: "NO₂⁻ + 0.5O₂ → NO₃⁻ + energy",
                    product: "Nitrate (NO₃⁻)"
                },
                
                importance: [
                    "Converts ammonia to plant-available nitrate",
                    "Energy source for nitrifying bacteria",
                    "Part of nitrogen cycle in soil and water"
                ],
                
                agriculture: "Nitrification in soil makes nitrogen available to plants",
                wastewater: "Nitrification removes toxic ammonia from wastewater"
            },
            
            denitrification: {
                process: "NO₃⁻ → NO₂⁻ → NO → N₂O → N₂ (reduction of nitrate to nitrogen gas)",
                organisms: "Pseudomonas, Paracoccus, Bacillus (facultative anaerobes)",
                anaerobic: "Occurs in absence of O₂ (anaerobic respiration)",
                electronAcceptor: "Nitrate used as final electron acceptor instead of O₂",
                
                importance: [
                    "Returns nitrogen to atmosphere; completes nitrogen cycle",
                    "Removes excess nitrate from wastewater",
                    "Agriculture: causes nitrogen loss from fertilized soils (undesirable)"
                ],
                
                greenhouse: "N₂O (nitrous oxide) is potent greenhouse gas; intermediate in denitrification"
            },
            
            ammonification: {
                process: "Organic nitrogen (proteins, amino acids) → NH₃ (ammonia)",
                organisms: "Many bacteria and fungi (decomposers)",
                decomposition: "Break down dead organisms and waste",
                importance: "Recycles organic nitrogen back to inorganic form"
            }
        },
        
        metabolicDiversity: {
            extremophiles: {
                thermophiles: "Hot environments; thermostable enzymes",
                psychrophiles: "Cold environments; cold-adapted enzymes and membranes",
                acidophiles: "Acidic environments (pH 1-5)",
                alkaliphiles: "Alkaline environments (pH 9-11)",
                halophiles: "High salt; accumulate compatible solutes",
                barophiles: "High pressure (deep sea)"
            },
            
            uniqueMetabolisms: {
                methylotrophs: "Use single-carbon compounds (methane, methanol)",
                acetogens: "Produce acetate from H₂ + CO₂",
                manganeseOxidizers: "Oxidize Mn²⁺ to Mn⁴⁺",
                arsenicMetabolism: "Some bacteria use arsenic in place of phosphate"
            },
            
            syntrophy: {
                definition: "Two organisms cooperate; neither can survive alone",
                example: "Fermentative bacterium + methanogen; fermenter produces H₂, methanogen consumes H₂",
                importance: "Anaerobic degradation of complex organics"
            }
        },
        
        applications: [
            "Biofuel production: Ethanol, methane, hydrogen from microbial fermentation",
            "Food industry: Cheese, yogurt, pickles, bread, beer, wine, vinegar",
            "Industrial chemicals: Lactic acid, citric acid, acetic acid, enzymes",
            "Wastewater treatment: Aerobic/anaerobic digestion; nitrogen removal",
            "Bioremediation: Degradation of pollutants, heavy metal removal",
            "Agriculture: Nitrogen fixation by legume symbionts; biofertilizers",
            "Mining: Bioleaching of copper, gold from low-grade ores",
            "Pharmaceuticals: Antibiotic production (stationary phase fermentation)",
            "Understanding disease: Pathogen metabolism and virulence",
            "Biotechnology: Metabolic engineering for desired products"
        ],
        
        clinicalRelevance: [
            "Antibiotic targets: Many antibiotics target metabolism (cell wall synthesis, protein synthesis, DNA replication)",
            "Pathogen identification: Fermentation patterns (API strips, VITEK)",
            "Infection types: Aerobic vs anaerobic pathogens require different treatment",
            "Biofilms: Slow metabolism in biofilms → antibiotic resistance",
            "Sepsis: Uncontrolled bacterial growth; metabolic toxins (endotoxin, acids)",
            "Wound infections: Anaerobic metabolism (Clostridium) in deep wounds",
            "Dental caries: Acid production from sugar fermentation damages teeth"
        ]
    };
    
    return content;
}

handleMicrobialGenetics(problem) {
    const content = {
        topic: "Microbial Genetics and Gene Transfer",
        category: 'genetics',
        summary: "Bacterial genetics involves DNA replication, gene expression, mutation, and horizontal gene transfer. Understanding these mechanisms is essential for genetic engineering, understanding evolution, and combating antibiotic resistance.",
        
        keyDefinitions: {
            "Genotype": "Complete genetic makeup; all genes in organism",
            "Phenotype": "Observable characteristics resulting from genotype + environment",
            "Gene": "Segment of DNA encoding functional product (protein or RNA)",
            "Allele": "Alternative form of gene",
            "Mutation": "Permanent, heritable change in DNA sequence",
            "Plasmid": "Extrachromosomal circular DNA; replicates independently",
            "Transformation": "Uptake of naked DNA from environment",
            "Transduction": "Gene transfer via bacteriophage (virus)",
            "Conjugation": "DNA transfer through direct cell-to-cell contact via pilus",
            "Horizontal Gene Transfer": "Gene transfer between organisms (not parent to offspring)",
            "Vertical Gene Transfer": "Gene transfer from parent to offspring (normal inheritance)",
            "Recombination": "Exchange of genetic material between DNA molecules",
            "Homologous Recombination": "Exchange between similar DNA sequences"
        },
        
        bacterialGenome: {
            chromosome: {
                structure: "Single, circular, double-stranded DNA",
                size: "Variable: 0.5-10 million base pairs (Mb)",
                typical: "E. coli: 4.6 Mb with ~4,300 genes",
                smallest: "Mycoplasma genitalium: 0.58 Mb with 470 genes",
                largest: "Sorangium cellulosum: 13 Mb",
                location: "Nucleoid region (not membrane-bound nucleus)",
                packaging: "Supercoiled by DNA gyrase and other proteins; compacts DNA",
                geneContent: "~85-95% of DNA codes for proteins or functional RNA",
                geneDensity: "High; little noncoding DNA compared to eukaryotes"
            },
            
            plasmids: {
                definition: "Small, circular, extrachromosomal DNA",
                size: "1-400 kilobase pairs (kb); much smaller than chromosome",
                replication: "Replicate independently of chromosome; have own origin of replication",
                copyNumber: {
                    low: "1-2 copies per cell (large plasmids)",
                    medium: "15-20 copies (pBR322)",
                    high: "500-700 copies (pUC19)"
                },
                genes: "Usually non-essential but advantageous genes",
                
                types: {
                    Fplasmid: {
                        name: "Fertility plasmid",
                        function: "Conjugation (DNA transfer)",
                        genes: "tra genes encode pilus and transfer machinery",
                        size: "~100 kb",
                        example: "F plasmid in E. coli"
                    },
                    Rplasmid: {
                        name: "Resistance plasmid",
                        function: "Antibiotic resistance genes",
                        genes: "Beta-lactamase, aminoglycoside-modifying enzymes, etc.",
                        problem: "Spread of multidrug resistance",
                        example: "R100 plasmid (resistance to multiple antibiotics)"
                    },
                    colPlasmid: {
                        name: "Colicin plasmid",
                        function: "Produce bacteriocins (proteins that kill related bacteria)",
                        advantage: "Competitive advantage in mixed populations"
                    },
                    virulencePlasmid: {
                        function: "Carry virulence genes (toxins, adhesins)",
                        examples: "Ti plasmid (Agrobacterium, causes crown gall), pXO1/pXO2 (B. anthracis toxins)"
                    },
                    metabolicPlasmid: {
                        function: "Genes for degrading unusual substrates",
                        example: "TOL plasmid (Pseudomonas, degrades toluene)"
                    }
                },
                
                applications: "Cloning vectors in genetic engineering; carry foreign genes"
            },
            
            comparisonToEukaryotes: {
                bacteria: "Circular chromosome, no histones (usually), plasmids common",
                eukaryotes: "Linear chromosomes, histones, few or no plasmids (yeast have plasmids)"
            }
        },
        
        DNAReplication: {
            overview: "Semiconservative replication; each strand serves as template",
            origin: "Single origin of replication (oriC) in circular bacterial chromosome",
            direction: "Bidirectional; two replication forks move in opposite directions",
            speed: "~1000 nucleotides/second (bacteria); much faster than eukaryotes",
            
            steps: {
                initiation: {
                    proteins: "DnaA protein binds oriC; unwinds DNA",
                    helicase: "DnaB helicase unwinds double helix; breaks H-bonds",
                    SSB: "Single-strand binding proteins stabilize separated strands",
                    primase: "Synthesizes short RNA primer (10-12 nucleotides)"
                },
                elongation: {
                    DNApolymeraseIII: "Main enzyme; adds nucleotides 5' → 3'",
                    leadingStrand: "Continuous synthesis toward replication fork",
                    laggingStrand: "Discontinuous synthesis away from fork; Okazaki fragments",
                    okazakiFragments: "Short segments (1000-2000 nt in bacteria)",
                    DNApolymeraseI: "Removes RNA primers; fills gaps with DNA",
                    ligase: "Joins Okazaki fragments; seals nicks"
                },
                termination: {
                    terSites: "Termination sequences opposite oriC",
                    tus: "Ter-binding protein stops helicase",
                    catenation: "Two circular chromosomes linked; topoisomerase separates"
                }
            },
            
            proofreading: {
                exonuclease: "DNA polymerase has 3' → 5' exonuclease activity",
                errorRate: "~1 error per 10⁹-10¹⁰ nucleotides (very accurate)",
                mechanism: "Removes incorrectly paired nucleotide immediately"
            },
            
            multipleRounds: "Bacteria can initiate new round before previous finishes (fast growth)"
        },
        
        geneExpression: {
            centralDogma: "DNA → RNA → Protein",
            
            transcription: {
                definition: "DNA → RNA synthesis",
                enzyme: "RNA polymerase (single enzyme in bacteria)",
                direction: "5' → 3' (RNA synthesized)",
                template: "3' → 5' (DNA read)",
                
                promoter: {
                    definition: "DNA sequence where RNA polymerase binds",
                    consensus: "-10 box (TATAAT, Pribnow box) and -35 box (TTGACA)",
                    location: "Upstream of gene (numbered relative to transcription start +1)",
                    recognition: "Sigma factor recognizes promoter"
                },
                
                steps: {
                    initiation: {
                        holoenzyme: "Core enzyme + sigma factor",
                        binding: "Sigma factor recognizes -10 and -35 boxes",
                        openComplex: "DNA unwinds ~17 bp; forms transcription bubble",
                        firstNucleotide: "RNA synthesis begins at +1 site"
                    },
                    elongation: {
                        coreEnzyme: "Sigma factor released; core enzyme continues",
                        speed: "~40 nucleotides/second",
                        bubbleMovement: "Transcription bubble moves along DNA"
                    },
                    termination: {
                        rhoIndependent: "Hairpin structure in RNA + poly-U tract causes release",
                        rhoDependent: "Rho protein binds RNA; causes release",
                        release: "RNA polymerase and mRNA released"
                    }
                },
                
                polycistronic: "Bacterial mRNA can encode multiple proteins (operon)"
            },
            
            translation: {
                definition: "RNA → Protein synthesis",
                location: "Ribosomes (70S in bacteria: 50S + 30S subunits)",
                
                geneticCode: {
                    codons: "Three-nucleotide sequences code for amino acids",
                    start: "AUG (codes for methionine; formyl-methionine in bacteria)",
                    stop: "UAA, UAG, UGA (no tRNA; release factors bind)",
                    degeneracy: "Multiple codons for same amino acid (wobble position)",
                    universal: "Nearly universal across all life (minor exceptions)"
                },
                
                tRNA: {
                    structure: "Cloverleaf secondary structure; L-shaped 3D",
                    anticodon: "Three nucleotides complementary to mRNA codon",
                    aminoAcid: "Specific amino acid attached to 3' end",
                    charging: "Aminoacyl-tRNA synthetase attaches correct amino acid (ATP required)"
                },
                
                ribosome: {
                    bacterial: "70S (50S large + 30S small subunit)",
                    sites: "A (aminoacyl), P (peptidyl), E (exit)",
                    rRNA: "Catalytic activity (peptidyl transferase) by rRNA, not protein (ribozyme)"
                },
                
                steps: {
                    initiation: {
                        ShineDalgarno: "Ribosome binding site (RBS) on mRNA; binds 16S rRNA",
                        startCodon: "AUG recognized; fMet-tRNA binds P site",
                        factors: "IF1, IF2, IF3 (initiation factors)",
                        GTP: "Energy from GTP hydrolysis"
                    },
                    elongation: {
                        step1: "Aminoacyl-tRNA enters A site (EF-Tu + GTP)",
                        step2: "Peptide bond formed (peptidyl transferase); growing chain transferred to A-site tRNA",
                        step3: "Ribosome translocates (EF-G + GTP); tRNA moves P → E, A → P",
                        step4: "Cycle repeats; ~20 amino acids/second"
                    },
                    termination: {
                        stopCodon: "UAA, UAG, or UGA in A site",
                        releaseFactors: "RF1 or RF2 recognizes stop codon",
                        hydrolysis: "Peptide released from tRNA; ribosome dissociates",
                        recycling: "RRF (ribosome recycling factor) disassembles ribosome"
                    }
                },
                
                coupling: "In bacteria, transcription and translation occur simultaneously (no nucleus)"
            }
        },
        
        geneRegulation: {
            importance: "Bacteria respond to environment; express genes when needed",
            mechanisms: "Mostly transcriptional control (some post-transcriptional)",
            
            operonModel: {
                definition: "Cluster of genes transcribed together under single promoter",
                polycistronic: "One mRNA encodes multiple proteins",
                components: "Promoter, operator, structural genes, regulatory gene",
                
                lacOperon: {
                    function: "Metabolize lactose",
                    type: "Inducible operon (turned ON by substrate)",
                    genes: "lacZ (β-galactosidase), lacY (permease), lacA (transacetylase)",
                    
                    absenceLactose: {
                        repressor: "LacI repressor protein binds operator",
                        block: "RNA polymerase cannot transcribe structural genes",
                        result: "Genes OFF; no enzymes made (wasteful to make if no lactose)"
                    },
                    presenceLactose: {
                        inducer: "Allolactose (lactose metabolite) binds repressor",
                        conformationChange: "Repressor releases from operator",
                        transcription: "RNA polymerase transcribes genes",
                        result: "Genes ON; enzymes made to metabolize lactose"
                    },
                    
                    CAP_CRP: {
                        cataboliteRepression: "Glucose preferred over lactose",
                        lowGlucose: "High cAMP; CAP-cAMP complex binds near promoter",
                        enhanced: "CAP-cAMP enhances RNA polymerase binding",
                        highGlucose: "Low cAMP; no CAP-cAMP; weak transcription",
                        result: "Lactose operon fully ON only when lactose present AND glucose absent"
                    }
                },
                
                trpOperon: {
                    function: "Synthesize tryptophan amino acid",
                    type: "Repressible operon (turned OFF by end product)",
                    genes: "trpE, trpD, trpC, trpB, trpA (5 genes for tryptophan synthesis)",
                    
                    absenceTrp: {
                        repressor: "TrpR repressor inactive (cannot bind operator alone)",
                        transcription: "Genes transcribed",
                        result: "Genes ON; tryptophan synthesized"
                    },
                    presenceTrp: {
                        corepressor: "Tryptophan binds TrpR repressor (activates it)",
                        binding: "Active repressor binds operator",
                        block: "Transcription blocked",
                        result: "Genes OFF; no wasteful synthesis of tryptophan if already available"
                    },
                    
                    attenuation: {
                        mechanism: "Additional control; leader sequence with trp codons",
                        highTrp: "Ribosome translates leader quickly; forms terminator hairpin; transcription stops",
                        lowTrp: "Ribosome stalls; anti-terminator hairpin forms; transcription continues",
                        finetuning: "Fine-tunes expression based on trp availability"
                    }
                }
            },
            
            twoComponentSystems: {
                definition: "Sensor kinase + response regulator",
                mechanism: "Environmental signal → sensor phosphorylates → response regulator activated → gene expression",
                example: "OmpR/EnvZ (osmotic regulation of porin expression)"
            },
            
            globalRegulation: {
                definition: "Coordinate expression of many genes simultaneously",
                examples: "SOS response (DNA damage), heat shock response, stationary phase response",
                alternativeSigma: "Different sigma factors recognize different promoters"
            }
        },
        
        mutations: {
            definition: "Permanent, heritable change in DNA sequence",
            
            spontaneous: {
                definition: "Occur naturally without external cause",
                rate: "10⁻⁶ to 10⁻¹⁰ per base pair per generation",
                causes: {
                    replicationErrors: "DNA polymerase occasionally makes mistake (even with proofreading)",
                    spontaneousDamage: "Depurination (loss of purine base), deamination (cytosine → uracil)",
                    tautomericShifts: "Rare forms of bases pair incorrectly"
                }
            },
            
            induced: {
                definition: "Caused by external agent (mutagen)",
                
                chemical: {
                    baseAnalogs: {
                        example: "5-bromouracil (looks like thymine)",
                        mechanism: "Incorporated into DNA; pairs incorrectly"
                    },
                    alkylatingAgents: {
                        example: "Nitrous acid, ethyl methanesulfonate (EMS)",
                        mechanism: "Add alkyl groups to bases; altered pairing"
                    },
                    intercalatingAgents: {
                        example: "Acridine orange, ethidium bromide",
                        mechanism: "Insert between bases; cause frameshift mutations"
                    }
                },
                
                physical: {
                    UV: {
                        wavelength: "260 nm (absorbed by DNA)",
                        damage: "Forms thymine dimers (covalent bonds between adjacent thymines)",
                        result: "Blocks replication and transcription",
                        repair: "Photolyase (photoreactivation) or nucleotide excision repair"
                    },
                    ionizingRadiation: {
                        types: "X-rays, gamma rays",
                        damage: "Breaks DNA strands; generates free radicals",
                        severity: "Double-strand breaks difficult to repair"
                    }
                }
            },
            
            types: {
                pointMutation: {
                    definition: "Change in single base pair",
                    
                    substitution: {
                        transition: "Purine → purine (A ↔ G) or pyrimidine → pyrimidine (C ↔ T)",
                        transversion: "Purine ↔ pyrimidine",
                        
                        effects: {
                            silent: "No amino acid change (wobble position; degeneracy of code)",
                            missense: "Different amino acid; may affect protein function",
                            nonsense: "Premature stop codon (UAA, UAG, UGA); truncated protein"
                        }
                    }
                },
                
                frameshift: {
                    definition: "Insertion or deletion of nucleotides NOT multiple of 3",
                    mechanism: "Shifts reading frame downstream",
                    effect: "Usually catastrophic; all amino acids after mutation changed",
                    nonsense: "Often introduces premature stop codon"
                },
                
                largescale: {
                    deletion: "Loss of DNA segment (one or more genes)",
                    duplication: "Segment copied; present twice",
                    inversion: "Segment flipped 180°",
                    translocation: "Segment moved to different location"
                }
            },
            
            consequences: {
                beneficial: "Rare (<1%); may provide advantage (antibiotic resistance)",
                neutral: "Most common; no effect on fitness (silent mutations, noncoding regions)",
                harmful: "Common; impairs protein function; may be lethal"
            }
        },
        
        DNARepair: {
            importance: "Prevent mutations; maintain genome integrity",
            
            mechanisms: {
                photoreactivation: {
                    damage: "Thymine dimers from UV",
                    enzyme: "Photolyase (DNA photolyase)",
                    mechanism: "Uses visible light energy; breaks dimer bonds directly",
                    advantage: "Direct reversal; no DNA removed",
                    limitation: "Only works on thymine dimers; requires light"
                },
                
                excisionRepair: {
                    nucleotideExcision: {
                        damage: "Thymine dimers, bulky adducts, cross-links",
                        recognition: "UvrA, UvrB recognize distortion",
                        excision: "UvrC cuts DNA both sides of lesion (~12 nt removed)",
                        resynthesis: "DNA polymerase I fills gap",
                        ligation: "DNA ligase seals nick",
                        example: "Repairs UV damage when photolyase absent"
                    },
                    baseExcision: {
                        damage: "Modified or incorrect bases (uracil, alkylated bases)",
                        recognition: "DNA glycosylase recognizes and removes base (AP site)",
                        endonuclease: "AP endonuclease cuts phosphodiester backbone",
                        resynthesis: "DNA polymerase replaces nucleotide",
                        ligation: "DNA ligase seals"
                    }
                },
                
                mismatchRepair: {
                    damage: "Replication errors (mismatched bases)",
                    recognition: "MutS recognizes mismatch",
                    strand: "MutH distinguishes old (methylated) from new (unmethylated) strand",
                    excision: "MutL + exonucleases remove segment of new strand",
                    resynthesis: "DNA polymerase fills gap; ligase seals",
                    importance: "Catches errors missed by polymerase proofreading"
                },
                
                SOSResponse: {
                    trigger: "Extensive DNA damage; lots of single-stranded DNA",
                    regulation: "RecA protein activated; cleaves LexA repressor",
                    genes: "~40 genes induced (DNA repair, replication, recombination)",
                    errorprone: "Includes error-prone polymerases (allow replication despite damage)",
                    mutations: "Introduces mutations (better than dying)",
                    tradeoff: "Survival at cost of fidelity"
                }
            }
        },
        
        horizontalGeneTransfer: {
            definition: "Gene transfer between organisms (not parent to offspring)",
            importance: "Major source of genetic variation in bacteria; spreads traits rapidly",
            contrast: "Vertical transfer = parent to offspring (normal inheritance)",
            
            transformation: {
                definition: "Uptake of naked DNA from environment",
                discovered: "Frederick Griffith (1928); Streptococcus pneumoniae",
                
                naturalCompetence: {
                    definition: "Ability to naturally take up DNA",
                    organisms: "Streptococcus, Haemophilus, Bacillus, Neisseria",
                    developmentally: "Competence induced at specific growth phase or stress",
                    genes: "Com genes encode competence machinery",
                    mechanism: "DNA-binding proteins on surface; pores for DNA entry"
                },
                
                artificialCompetence: {
                    CaCl2: "Calcium chloride treatment + heat shock",
                    electroporation: "Electric pulse creates transient pores",
                    efficiency: "Artificial methods more efficient than natural",
                    use: "Laboratory technique for genetic engineering"
                },
                
                process: [
                    "DNA released from dead/lysed cells",
                    "Competent cell binds double-stranded DNA",
                    "One strand degraded; other enters cell",
                    "RecA protein mediates homologous recombination into chromosome",
                    "If plasmid DNA, can replicate autonomously"
                ],
                
                significance: [
                    "Natural mechanism in some bacteria",
                    "Laboratory tool for introducing genes (cloning, genetic engineering)",
                    "Can spread antibiotic resistance genes if DNA from environment",
                    "Historical: Proved DNA is genetic material (Griffith → Avery et al.)"
                ]
            },
            
            transduction: {
                definition: "Gene transfer via bacteriophage (bacterial virus)",
                discovered: "Joshua Lederberg and Norton Zinder (1952); Salmonella",
                
                generalized: {
                    mechanism: "Phage accidentally packages bacterial DNA instead of phage DNA during lytic cycle",
                    random: "Any bacterial gene can be transferred (random packaging)",
                    frequency: "Low (~1 in 10⁵ to 10⁷ phage particles)",
                    phages: "Lytic phages (P1 in E. coli, P22 in Salmonella)",
                    
                    steps: [
                        "Phage infects bacterium; viral DNA injected",
                        "Bacterial chromosome fragmented",
                        "Phage DNA replicates; new phages assembled",
                        "ERROR: Phage head accidentally packages bacterial DNA fragment instead of phage DNA",
                        "Cell lyses; transducing phage released",
                        "Transducing phage infects new cell; injects bacterial DNA",
                        "Bacterial DNA integrates by recombination (homologous sequences)",
                        "Recipient gains new genes"
                    ],
                    
                    defective: "Transducing phage lacks phage genes; cannot replicate"
                },
                
                specialized: {
                    mechanism: "Temperate phage DNA integrates in chromosome (prophage); excises imprecisely, taking adjacent bacterial genes",
                    specific: "Only genes near prophage integration site can be transferred",
                    frequency: "Higher than generalized",
                    phages: "Temperate phages (lambda phage in E. coli)",
                    
                    steps: [
                        "Temperate phage integrates into chromosome (lysogeny)",
                        "Induction: Phage DNA excises from chromosome",
                        "ERROR: Imprecise excision; includes adjacent bacterial genes",
                        "Phage particle contains phage genes + bacterial genes",
                        "Phage infects new cell",
                        "Bacterial genes + phage genes transferred",
                        "Genes may integrate or remain as plasmid"
                    ],
                    
                    example: "Lambda phage can transfer gal (galactose) or bio (biotin) genes"
                },
                
                significance: [
                    "Spreads virulence genes (diphtheria toxin, cholera toxin, Shiga toxin)",
                    "Converts non-pathogenic to pathogenic (lysogenic conversion)",
                    "Gene mapping tool (historical)",
                    "Phage therapy potential (could engineer phages to deliver beneficial genes)"
                ]
            },
            
            conjugation: {
                definition: "DNA transfer through direct cell-to-cell contact via pilus",
                discovered: "Joshua Lederberg and Edward Tatum (1946); E. coli",
                requires: "Donor cell with F (fertility) plasmid; recipient without",
                
                Fplasmid: {
                    size: "~100 kb",
                    genes: "tra genes encode pilus, transfer machinery (~25 genes)",
                    origin: "oriT (origin of transfer)",
                    replication: "Rolling circle replication during transfer"
                },
                
                FplusFminus: {
                    donor: "F+ cell (has F plasmid)",
                    recipient: "F- cell (lacks F plasmid)",
                    pilus: "F pilus (sex pilus) extends from F+ cell",
                    contact: "Pilus contacts F- cell; retracts; cells come close",
                    bridge: "Conjugation bridge (mating bridge) forms",
                    transfer: "One strand of F plasmid transferred 5' → 3'",
                    replication: "Rolling circle; both cells synthesize complementary strand",
                    result: "F- cell becomes F+ (now has F plasmid)",
                    plasmidOnly: "Only F plasmid transferred; no chromosomal genes"
                },
                
                HfrStrains: {
                    name: "High frequency recombination",
                    definition: "F plasmid integrated into chromosome",
                    integration: "Homologous recombination between F plasmid and chromosome",
                    stable: "Integrated F plasmid replicates with chromosome",
                    
                    conjugation: {
                        donor: "Hfr cell",
                        recipient: "F- cell",
                        transfer: "Chromosome transferred linearly (starts at integrated oriT)",
                        order: "Genes transferred in specific, linear order",
                        interruption: "Mating usually interrupted before complete transfer (~100 min for E. coli)",
                        recombination: "Transferred DNA must recombine into F- chromosome to be stably inherited",
                        result: "F- remains F- (rarely gets entire F plasmid; only partial chromosome)",
                        genotypes: "Recipient gains some donor genes (recombinants)"
                    },
                    
                    geneMapping: {
                        interruptedMating: "Interrupt conjugation at different times; determine gene order",
                        principle: "Genes transferred in fixed order; time of entry = position on chromosome",
                        map: "Create genetic map (minutes from origin)",
                        historical: "Important tool before DNA sequencing"
                    }
                },
                
                Fprime: {
                    definition: "F plasmid that excised from Hfr chromosome, taking some chromosomal genes",
                    merodiploid: "F' cell is partial diploid for genes on F'",
                    complementation: "Used in complementation tests"
                },
                
                R plasmids: {
                    resistance: "Conjugative plasmids carrying antibiotic resistance genes",
                    RTF: "Resistance Transfer Factor (tra genes for conjugation)",
                    rGenes: "Resistance genes (multiple antibiotics often present)",
                    problem: "Rapid spread of multidrug resistance in clinical and environmental settings",
                    examples: "R100, R1, RP4",
                    scope: "Can transfer between different bacterial species (broad host range)"
                },
                
                significance: [
                    "Major mechanism of antibiotic resistance spread",
                    "Spreads virulence genes",
                    "Gene mapping (historical)",
                    "Genetic engineering (conjugative transfer of engineered plasmids)",
                    "Bioremediation (transfer degradative genes to native bacteria)"
                ]
            }
        },
        
        mobileGeneticElements: {
            transposons: {
                definition: "DNA segments that can move within genome ('jumping genes')",
                discovered: "Barbara McClintock (1940s in corn; 1983 Nobel Prize)",
                
                insertionSequences: {
                    name: "IS elements",
                    size: "750-1500 bp",
                    genes: "Only transposase gene (encodes enzyme for transposition)",
                    termini: "Inverted repeats (10-40 bp) at ends",
                    mechanism: "Transposase recognizes inverted repeats; cuts and pastes",
                    frequency: "E. coli has ~5-10 different IS elements, multiple copies"
                },
                
                compositeTransposons: {
                    structure: "Central region (genes) flanked by two IS elements",
                    genes: "Antibiotic resistance, toxin genes, metabolic genes",
                    size: "Up to 40 kb",
                    example: "Tn10 (tetracycline resistance), Tn5 (kanamycin resistance)",
                    mechanism: "Either IS element can catalyze transposition"
                },
                
                mechanisms: {
                    cutAndPaste: "Transposon excised; moves to new location (simple transposition)",
                    replicative: "Transposon copied; one copy stays, one moves (cointegrate formation)",
                    result: "Increase in transposon copy number (replicative)"
                },
                
                effects: {
                    insertionMutation: "Insert into gene → gene inactivated",
                    polarEffect: "Disrupt transcription of downstream genes in operon",
                    rearrangements: "Deletions, inversions between transposons",
                    spread: "Transfer between plasmids, chromosome, phages"
                },
                
                significance: [
                    "Source of mutations",
                    "Genome rearrangements",
                    "Spread antibiotic resistance genes",
                    "Molecular tools (transposon mutagenesis, gene tagging)"
                ]
            },
            
            integrons: {
                definition: "Genetic elements that capture and express gene cassettes",
                components: "intI (integrase gene), attI (integration site), Pc (promoter)",
                geneCassettes: "Mobile genes (usually antibiotic resistance) with attC site",
                
                mechanism: [
                    "Integrase recognizes attI and attC sites",
                    "Gene cassette integrates downstream of Pc promoter",
                    "Multiple cassettes can integrate (array)",
                    "Pc promoter drives expression of all cassettes"
                ],
                
                antibiotic: "Major mechanism of multidrug resistance",
                classes: "Class 1 integrons most common in clinical isolates",
                flexibility: "Can capture, lose, rearrange cassettes",
                problem: "Single integron can carry 5+ resistance genes"
            },
            
            pathogenicityIslands: {
                definition: "Large chromosomal regions (10-200 kb) with virulence genes",
                acquisition: "Acquired by horizontal gene transfer",
                characteristics: "Different GC content, flanked by direct repeats, often near tRNA genes",
                genes: "Type III secretion systems, toxins, adhesins, iron uptake",
                examples: "SPI-1, SPI-2 in Salmonella; LEE in E. coli O157:H7",
                mobility: "Can be excised and transferred"
            }
        },
        
        antibioticResistance: {
            problem: "Global health crisis; ~700,000 deaths/year attributable to resistant infections",
            
            mechanisms: {
                enzymaticDestruction: {
                    betaLactamase: "Hydrolyzes beta-lactam ring (penicillin, cephalosporin)",
                    aminoglycosideModifying: "Acetylation, phosphorylation, adenylation of aminoglycosides",
                    chloramphenicolAcetyltransferase: "Inactivates chloramphenicol",
                    frequency: "Most common mechanism"
                },
                
                targetModification: {
                    alteredPBP: "Penicillin-binding proteins modified (MRSA)",
                    ribosomalMutation: "Ribosome altered; streptomycin resistance",
                    methylation: "rRNA methylation; erythromycin resistance",
                    result: "Antibiotic cannot bind target"
                },
                
                decreasedPermeability: {
                    porinLoss: "Gram-negative lose porin channels",
                    outerMembrane: "Altered LPS; less permeable",
                    intrinsic: "Gram-negative intrinsically resistant to some antibiotics (vancomycin)"
                },
                
                effluxPumps: {
                    mechanism: "Active transport pumps antibiotic out faster than enters",
                    energy: "ATP or proton motive force",
                    spectrum: "Some specific, some multidrug (MDR pumps)",
                    examples: "Tetracycline efflux, fluoroquinolone efflux",
                    overexpression: "Mutation in regulator → pump overexpressed"
                },
                
                bypassPathway: {
                    alternative: "Use different enzyme not inhibited by antibiotic",
                    example: "MRSA uses altered PBP2a; unaffected by methicillin",
                    sulfonamide: "Some bacteria acquire resistant DHPS enzyme"
                }
            },
            
            acquisition: {
                mutation: "Spontaneous mutation in chromosome (vertical)",
                HGT: "Horizontal gene transfer (transformation, transduction, conjugation)",
                plasmids: "R plasmids carry multiple resistance genes",
                transposons: "Move resistance genes between DNA molecules",
                integrons: "Capture resistance cassettes",
                mostCommon: "HGT spreads resistance much faster than mutation"
            },
            
            selection: {
                antibioticUse: "Antibiotic kills susceptible bacteria; resistant survive and multiply",
                overuse: "Unnecessary prescriptions (viral infections)",
                agriculture: "Subtherapeutic doses in livestock feed (growth promotion)",
                environment: "Antibiotics in wastewater; selects resistance in environment",
                horizontal: "Resistant bacteria transfer genes to other bacteria"
            },
            
            examples: {
                MRSA: "Methicillin-resistant Staphylococcus aureus; altered PBP",
                VRE: "Vancomycin-resistant Enterococcus; altered cell wall precursor",
                ESBL: "Extended-spectrum beta-lactamases; Gram-negative",
                CRE: "Carbapenem-resistant Enterobacteriaceae; carbapenemases",
                MDR_TB: "Multidrug-resistant Mycobacterium tuberculosis",
                XDR_TB: "Extensively drug-resistant TB",
                gonorrhea: "Neisseria gonorrhoeae increasingly resistant"
            },
            
            solutions: [
                "Antibiotic stewardship: Use only when needed, correct drug, correct duration",
                "Rapid diagnostics: Identify pathogen and resistance quickly",
                "New antibiotics: Research and development (economic challenges)",
                "Alternative therapies: Phage therapy, immunotherapy, CRISPR",
                "Infection control: Prevent spread in hospitals and community",
                "Reduce agricultural use: Ban growth promotion; use only for treatment",
"Combination therapy: Multiple antibiotics to prevent resistance emergence",
"Public education: Complete antibiotic courses; don't demand for viral infections",
"Global surveillance: Track resistance patterns (WHO GLASS)",
"Vaccination: Prevent infections (less need for antibiotics)"
]
},
CRISPR: {
        definition: "Clustered Regularly Interspaced Short Palindromic Repeats",
        discovery: "Bacterial adaptive immune system against phages",
        
        naturalSystem: {
            function: "Bacterial defense against viral infection",
            components: {
                CRISPRarray: "Repeated sequences separated by spacers (from phage DNA)",
                cas: "CRISPR-associated genes (encode nucleases)",
                spacers: "DNA fragments from previous phage infections ('memory')"
            },
            
            mechanism: [
                "ACQUISITION: Phage infects; Cas1-Cas2 cuts phage DNA; inserts fragment as new spacer",
                "EXPRESSION: CRISPR array transcribed → pre-crRNA",
                "PROCESSING: crRNA processed; binds Cas protein (e.g., Cas9)",
                "INTERFERENCE: If same phage infects again, crRNA guides Cas9 to matching phage DNA",
                "CLEAVAGE: Cas9 cuts phage DNA → phage destroyed"
            ],
            
            PAM: "Protospacer Adjacent Motif; short sequence next to target; distinguishes self from non-self",
            immunity: "Acquired immunity; bacteria 'remember' past infections"
        },
        
        biotechnology: {
            application: "Gene editing tool; revolutionized molecular biology",
            crRNA: "Design custom guide RNA (gRNA) to target any DNA sequence",
            Cas9: "Programmable nuclease; cuts DNA at target site",
            
            uses: [
                "Gene knockout: Disrupt gene function",
                "Gene insertion: Add new genes at specific location",
                "Gene correction: Fix mutations (therapeutic potential)",
                "Gene regulation: Use deactivated Cas9 (dCas9) to turn genes on/off",
                "Antimicrobial: Program CRISPR to target antibiotic resistance genes",
                "Diagnostics: Cas12/Cas13 for detecting nucleic acids (COVID-19 tests)"
            ],
            
            advantages: "Precise, efficient, versatile, relatively easy",
            NobelPrize: "2020 Nobel Prize in Chemistry (Doudna and Charpentier)"
        }
    },
    
    applications: [
        "Genetic engineering: Insert, delete, modify genes in bacteria",
        "Recombinant protein production: Insulin, growth hormone, enzymes, vaccines",
        "Gene therapy: Potential to cure genetic diseases",
        "Agriculture: Genetically modified crops (Bt toxin, herbicide resistance)",
        "Bioremediation: Engineer bacteria to degrade pollutants",
        "Industrial biotechnology: Produce chemicals, biofuels, materials",
        "Research: Study gene function; create mutants; map genomes",
        "Understanding evolution: Horizontal gene transfer drives bacterial evolution",
        "Combating resistance: Develop new strategies against antibiotic-resistant bacteria",
        "Diagnostics: Identify bacteria and resistance genes (PCR, sequencing)"
    ],
    
    clinicalRelevance: [
        "Antibiotic resistance spread: Understand mechanisms; develop strategies",
        "Pathogen virulence: Virulence genes often on mobile elements (plasmids, pathogenicity islands)",
        "Hospital-acquired infections: Resistant bacteria spread via HGT in hospitals",
        "Outbreak investigation: Genomic sequencing traces transmission",
        "Personalized medicine: Genome sequencing guides treatment",
        "Vaccine development: Identify antigens using genomics",
        "Diagnostic tests: Detect resistance genes (mecA for MRSA, blaNDM for CRE)",
        "Infection control: Prevent spread of resistant strains"
    ],
    
    realWorldExamples: [
        {
            scenario: "MRSA outbreak in hospital",
            problem: "Methicillin-resistant Staphylococcus aureus spreading between patients",
            genetics: "mecA gene on SCCmec mobile element; encodes altered PBP2a",
            HGT: "Can transfer between Staph strains; possibly from other species",
            solution: "Strict infection control; contact precautions; vancomycin treatment; genomic surveillance"
        },
        {
            scenario: "E. coli O157:H7 food poisoning",
            pathogen: "Shiga toxin-producing E. coli (STEC)",
            genetics: "Shiga toxin genes on prophage (acquired via transduction)",
            conversion: "Non-pathogenic E. coli → deadly pathogen via lysogenic conversion",
            clinical: "Bloody diarrhea, hemolytic uremic syndrome (HUS)",
            prevention: "Food safety; cook meat thoroughly"
        },
        {
            scenario: "Cholera pandemic",
            pathogen: "Vibrio cholerae O1 or O139",
            genetics: "Cholera toxin (ctx) genes on CTXφ prophage",
            virulence: "tcpA (toxin-coregulated pilus) on VPI pathogenicity island",
            HGT: "Pathogenicity acquired via transduction (CTXφ) and HGT (VPI)",
            clinical: "Severe watery diarrhea; dehydration; can be fatal without rehydration"
        }
    ]
};

return content;
}
handleMedicalMicrobiology(problem) {
const content = {
topic: "Medical Microbiology: Pathogenic Microorganisms and Disease",
category: 'applied_microbiology',
summary: "Medical microbiology studies microorganisms that cause human disease, including bacteria, viruses, fungi, and parasites. Understanding pathogenesis, transmission, and host defense is essential for diagnosis, treatment, and prevention of infectious diseases.",
keyDefinitions: {
        "Pathogen": "Microorganism capable of causing disease",
        "Pathogenicity": "Ability of organism to cause disease",
        "Virulence": "Degree of pathogenicity; measure of disease severity",
        "Virulence Factor": "Specific trait that enhances pathogenicity (toxin, adhesin, capsule)",
        "Infection": "Invasion and multiplication of microorganisms in body tissue",
        "Disease": "Abnormal state; impaired function resulting from infection or other cause",
        "Opportunistic Pathogen": "Causes disease only in immunocompromised or when normal barriers breached",
        "Normal Flora": "Microorganisms normally present in/on body; usually beneficial or harmless",
        "Nosocomial Infection": "Hospital-acquired infection (after 48 hours of admission)",
        "Zoonosis": "Disease transmitted from animals to humans",
        "Vector": "Organism that transmits pathogen (mosquito, tick)",
        "Reservoir": "Natural habitat where pathogen normally lives",
        "Incubation Period": "Time between infection and symptom onset",
        "Communicable Disease": "Disease transmitted person-to-person"
    },
    
    infectionVsDisease: {
        infection: {
            definition: "Pathogen invades and multiplies in host",
            outcome: "May or may not cause symptoms",
            asymptomatic: "Subclinical infection; no symptoms but pathogen present",
            carrier: "Infected but no symptoms; can transmit to others (Typhoid Mary)"
        },
        disease: {
            definition: "Infection causes damage; symptoms appear",
            signs: "Objective; measurable (fever, rash, elevated WBC)",
            symptoms: "Subjective; experienced by patient (pain, nausea, fatigue)",
            syndrome: "Group of signs and symptoms characteristic of disease"
        },
        stages: {
            incubation: "Between infection and first symptoms; pathogen multiplying",
            prodromal: "Vague, general symptoms (fatigue, malaise); patient infectious",
            illness: "Acute phase; characteristic signs and symptoms; most severe",
            decline: "Subsiding symptoms; immune response controlling infection",
            convalescence: "Recovery; strength returns; tissue repair"
        }
    },
    
    normalFlora: {
        definition: "Microorganisms that normally inhabit human body",
        alternativeTerms: "Normal microbiota, indigenous microbiota, microbiome",
        
        locations: {
            skin: {
                organisms: "Staphylococcus epidermidis, Propionibacterium acnes, Corynebacterium, fungi (Malassezia)",
                density: "10² - 10⁶ per cm²",
                function: "Compete with pathogens; produce antimicrobial substances; metabolize sebum"
            },
            oralCavity: {
                organisms: "Streptococcus mutans, S. salivarius, Actinomyces, Lactobacillus, anaerobes",
                density: "10⁸ - 10⁹ per ml saliva",
                biofilm: "Dental plaque (S. mutans); ferments sugars → acid → cavities",
                balance: "Good hygiene prevents pathogenic overgrowth"
            },
            nasopharynx: {
                organisms: "Staphylococcus aureus (20-30% carrier rate), Streptococcus pneumoniae, Haemophilus",
                significance: "Carriers can transmit to others; can cause opportunistic infection"
            },
            gastrointestinal: {
                stomach: "Few organisms (low pH); Helicobacter pylori in some individuals",
                smallIntestine: "10³ - 10⁷ per ml; Lactobacillus, Enterococcus",
                largeIntestine: {
                    density: "10¹¹ - 10¹² per gram (highest in body)",
                    organisms: "Bacteroides (most abundant), E. coli, Enterococcus, Clostridium, Bifidobacterium",
                    weight: "~1-2 kg of bacteria in adult colon",
                    functions: [
                        "Synthesize vitamins (K, B12, biotin)",
                        "Digest complex carbohydrates (fiber)",
                        "Produce short-chain fatty acids (butyrate)",
                        "Compete with pathogens (colonization resistance)",
                        "Train immune system"
                    ]
                }
            },
            urogenital: {
                male: "Urethra has few organisms; bladder and kidneys sterile",
                femaleVagina: {
                    organisms: "Lactobacillus (dominant in reproductive age)",
                    pH: "Acidic (pH 3.8-4.5) due to lactic acid production",
                    protection: "Low pH inhibits pathogens; prevents yeast overgrowth",
                    disruption: "Antibiotics kill Lactobacillus → yeast infection (Candida albicans)",
                    BV: "Bacterial vaginosis; overgrowth of Gardnerella, anaerobes when Lactobacillus depleted"
                }
            },
            respiratoryTract: {
                upperRT: "Heavily colonized (nose, throat)",
                lowerRT: "Sterile (trachea, bronchi, lungs); cleared by mucociliary escalator and alveolar macrophages"
            },
            sterileAreas: "Blood, CSF, bladder, kidneys, lower respiratory tract, internal organs"
        },
        
        benefits: {
            colonizationResistance: "Compete with pathogens for nutrients and attachment sites",
            vitamins: "Synthesize vitamin K, B vitamins",
            immunity: "Stimulate immune system development",
            digestion: "Break down complex polysaccharides (fiber)",
            protection: "Produce antimicrobial substances (bacteriocins, acids)"
        },
        
        opportunistic: {
            definition: "Normal flora can cause disease if barriers breached or immunity compromised",
            examples: [
                "E. coli (gut) → urinary tract infection",
                "Staphylococcus epidermidis (skin) → catheter-associated infection",
                "Streptococcus pneumoniae (nasopharynx) → pneumonia in elderly",
                "Candida albicans (vagina) → thrush after antibiotics",
                "Bacteroides fragilis (gut) → peritonitis after intestinal perforation"
            ]
        },
        
        dysbiosis: {
            definition: "Imbalance in normal flora; loss of beneficial organisms or overgrowth of pathogens",
            causes: "Antibiotics, diet, illness, stress",
            consequences: "Increased susceptibility to infection, inflammation",
            examples: "C. difficile colitis after broad-spectrum antibiotics; IBD associated with altered gut microbiome"
        }
    },
    
    pathogenesis: {
        definition: "Mechanisms by which pathogen causes disease",
        
        steps: {
            step1_Portal: {
                name: "Portal of Entry",
                definition: "Route by which pathogen enters body",
                types: {
                    mucousMembranes: "Respiratory, GI, urogenital, conjunctiva",
                    skin: "Requires breach (cut, injection, arthropod bite)",
                    parenteral: "Bypasses skin/mucous membranes (injection, bite, surgery)"
                },
                preferred: "Some pathogens have preferred portal (M. tuberculosis → respiratory)"
            },
            
            step2_Adhesion: {
                name: "Adhesion (Attachment)",
                definition: "Pathogen binds to host tissue",
                adhesins: "Surface molecules that bind to host receptors",
                examples: {
                    pili: "N. gonorrhoeae pili bind urogenital epithelium",
                    fimbriae: "E. coli fimbriae bind bladder epithelium (UTI)",
                    glycoproteins: "Influenza hemagglutinin binds sialic acid on respiratory cells",
                    LTA: "Lipoteichoic acid (Streptococcus) binds fibronectin"
                },
                specificity: "Determines tissue tropism (which tissues infected)",
                blocking: "Antibodies against adhesins prevent colonization (vaccine strategy)"
            },
            
            step3_Invasion: {
                name: "Invasion",
                definition: "Spread through tissues",
                enzymes: {
                    hyaluronidase: "Breaks down hyaluronic acid in connective tissue (spreading factor)",
                    collagenase: "Degrades collagen",
                    coagulase: "Clots plasma; protects from phagocytosis (S. aureus)",
                    kinases: "Dissolve clots; aids spread (streptokinase, staphylokinase)",
                    hemolysins: "Lyse red blood cells"
                },
                intracellular: "Some pathogens invade cells (Salmonella, Shigella, Listeria)",
                mechanisms: "Trigger endocytosis or inject proteins that rearrange host cytoskeleton"
            },
            
            step4_Evasion: {
                name: "Immune Evasion",
                definition: "Avoid or resist host immune response",
                strategies: {
                    capsule: "Polysaccharide capsule prevents phagocytosis (S. pneumoniae, K. pneumoniae)",
                    intracellular: "Hide inside cells (Mycobacterium, Listeria)",
                    antigenic_variation: "Change surface antigens (Influenza, N. gonorrhoeae, Trypanosoma)",
                    IgA_protease: "Cleaves IgA antibodies (N. gonorrhoeae, H. influenzae)",
                    protein_A: "Binds Fc region of antibodies backwards (S. aureus)",
                    biofilm: "Embed in extracellular matrix; resist immune cells and antibiotics",
                    mimicry: "Molecular mimicry; resemble host molecules"
                }
            },
            
            step5_Damage: {
                name: "Damage",
                definition: "Cause tissue damage and symptoms",
                direct: "Pathogen multiplication damages/kills host cells",
                indirect: "Immune response causes collateral damage (inflammation)",
                toxins: "Produce toxins that damage tissues (see below)"
            }
        }
    },
    
    virulenceFactors: {
        adhesins: {
            function: "Attachment to host cells",
            examples: "Pili, fimbriae, glycoproteins, lipoteichoic acid"
        },
        
        capsules: {
            function: "Protect from phagocytosis; antiphagocytic",
            composition: "Usually polysaccharide (some protein)",
            organisms: "Streptococcus pneumoniae, Haemophilus influenzae type b, Neisseria meningitidis, Klebsiella pneumoniae",
            vaccines: "Capsular polysaccharide vaccines (Pneumovax, Hib vaccine, meningococcal vaccine)"
        },
        
        invasins: {
            function: "Promote spread through tissues",
            enzymes: "Hyaluronidase, collagenase, coagulase, kinases",
            examples: "Streptococcus pyogenes (hyaluronidase), Clostridium perfringens (multiple enzymes)"
        },
        
        toxins: {
            definition: "Poisonous substances produced by pathogens",
            
            exotoxins: {
                definition: "Proteins secreted by living bacteria",
                production: "Gram-positive and Gram-negative",
                potency: "Extremely potent (lethal dose can be nanograms)",
                heat: "Heat-labile (denatured by heat)",
                immunity: "Stimulate antibody production; toxoids used as vaccines",
                
                types: {
                    AB_toxins: {
                        structure: "A (active) subunit + B (binding) subunit",
                        mechanism: "B binds receptor; A enters cell and disrupts function",
                        examples: {
                            diphtheria: {
                                organism: "Corynebacterium diphtheriae",
                                mechanism: "Inhibits protein synthesis (inactivates EF-2)",
                                disease: "Pseudomembrane in throat; myocarditis; neuropathy",
                                vaccine: "DTP vaccine (toxoid)"
                            },
                            tetanus: {
                                organism: "Clostridium tetani",
                                mechanism: "Blocks inhibitory neurotransmitters (GABA, glycine)",
                                disease: "Spastic paralysis; lockjaw; opisthotonus",
                                vaccine: "Tetanus toxoid"
                            },
                            botulinum: {
                                organism: "Clostridium botulinum",
                                mechanism: "Blocks acetylcholine release",
                                disease: "Flaccid paralysis; can be fatal (respiratory failure)",
                                use: "Botox (cosmetic and therapeutic)"
                            },
                            cholera: {
                                organism: "Vibrio cholerae",
                                mechanism: "Increases cAMP in intestinal cells; massive water/electrolyte loss",
                                disease: "Severe watery diarrhea ('rice water stools'); dehydration",
                                treatment: "Oral rehydration therapy"
                            },
                            pertussis: {
                                organism: "Bordetella pertussis",
                                mechanism: "Increases cAMP; impairs immune cells",
                                disease: "Whooping cough; paroxysmal coughing",
                                vaccine: "DTaP vaccine"
                            },
                            shiga: {
                                organism: "Shigella dysenteriae, E. coli O157:H7 (STEC)",
                                mechanism: "Inhibits protein synthesis (cleaves 28S rRNA)",
                                disease: "Bloody diarrhea; HUS (hemolytic uremic syndrome)",
                                severe: "Can cause kidney failure"
                            }
                        }
                    },
                    
                    membraneDamaging: {
                        hemolysins: {
                            function: "Lyse red blood cells and other cells",
                            organisms: "Streptococcus pyogenes (streptolysin O and S), Staphylococcus aureus (alpha toxin)",
                            detection: "Blood agar (hemolysis patterns)"
                        },
                        leukocidins: {
                            function: "Destroy white blood cells",
                            organism: "Staphylococcus aureus",
                            PVL: "Panton-Valentine leukocidin; associated with severe skin infections, necrotizing pneumonia"
                        },
                        phospholipase: {
                            function: "Degrades phospholipids in membranes",
                            organisms: "Clostridium perfringens (alpha toxin; gas gangrene)"
                        }
                    },
                    
                    superantigens: {
                        mechanism: "Bypass normal antigen processing; activate massive T cell response",
                        result: "Cytokine storm; systemic inflammation",
                        examples: {
                            TSST1: "Toxic shock syndrome toxin-1 (S. aureus); tampon use, post-surgical",
                            SPE: "Streptococcal pyrogenic exotoxins (S. pyogenes); scarlet fever, toxic shock",
                            symptoms: "Fever, rash, hypotension, multi-organ failure"
                        }
                    }
                }
            },
            
            endotoxins: {
                definition: "Lipopolysaccharide (LPS) in Gram-negative outer membrane",
                component: "Lipid A portion is toxic",
                release: "Released when bacteria die and lyse",
                heat: "Heat-stable (not destroyed by autoclaving)",
                immunity: "Weakly immunogenic; poor antibody response",
                
                effects: {
                    fever: "Stimulates macrophages to release IL-1, TNF-α (pyrogens)",
                    inflammation: "Activates complement; induces cytokine production",
                    septicShock: "Massive release → cytokine storm → vasodilation → hypotension → shock → death",
                    DIC: "Disseminated intravascular coagulation; clotting cascade activated",
                    lethality: "Septic shock highly fatal (30-50% mortality)"
                },
                
                organisms: "All Gram-negative bacteria (E. coli, Salmonella, Pseudomonas, Neisseria)",
                limulus: "Limulus amebocyte lysate (LAL) test detects endotoxin (from horseshoe crab blood)"
            },
            
            comparison: {
                headers: ["Property", "Exotoxin", "Endotoxin"],
                rows: [
                    ["Source", "Secreted by living bacteria", "Part of Gram-negative outer membrane"],
                    ["Chemistry", "Protein", "Lipopolysaccharide (LPS; Lipid A)"],
                    ["Heat stability", "Heat-labile (denatured)", "Heat-stable"],
                    ["Bacteria", "Mostly Gram-positive; some Gram-negative", "All Gram-negative"],
                    ["Potency", "Very high (ng)", "Low (μg - mg)"],
                    ["Specificity", "Specific effects", "General inflammation"],
                    ["Fever", "Usually no (except superantigens)", "Yes (pyrogen)"],
                    ["Immunogenicity", "Highly immunogenic", "Weakly immunogenic"],
                    ["Toxoid", "Yes (vaccine)", "No"],
                    ["Diseases", "Tetanus, botulism, diphtheria, cholera", "Septic shock, fever, DIC"],
                    ["Treatment", "Antitoxin antibodies", "Supportive care"]
                ]
            }
        },
        
        secretionSystems: {
            type3: "Inject proteins directly into host cell (Salmonella, Shigella, Yersinia, Pseudomonas)",
            type4: "Transfer DNA or proteins (Agrobacterium Ti plasmid, H. pylori CagA)",
            function: "Manipulate host cell; promote invasion, survival, immune evasion"
        },
        
        ironAcquisition: {
            importance: "Iron essential for growth; limited free iron in host (bound to transferrin, lactoferrin)",
            siderophores: "High-affinity iron chelators secreted by bacteria",
            receptors: "Bind host iron-binding proteins; extract iron",
            significance: "Virulence factor; bacteria that cannot acquire iron are avirulent"
        },
        
        biofilms: {
            definition: "Communities of bacteria embedded in extracellular matrix",
            matrix: "Polysaccharides, proteins, DNA",
            resistance: "1000× more resistant to antibiotics than planktonic cells",
            immune: "Resist phagocytosis; immune system cannot penetrate",
            infections: "Chronic infections (catheters, prosthetic joints, endocarditis, cystic fibrosis)",
            organisms: "Staphylococcus epidermidis, P. aeruginosa, E. coli",
            slime: "Staphylococcus produces slime layer (biofilm)"
        }
    },
    
    transmission: {
        contactTransmission: {
            direct: {
                definition: "Person-to-person physical contact",
                examples: "STIs (gonorrhea, syphilis, HIV), skin infections (impetigo), respiratory droplets (kissing)",
                prevention: "Hand hygiene, barrier precautions, sexual protection"
            },
            indirect: {
                definition: "Contact with contaminated object (fomite)",
                fomites: "Doorknobs, medical equipment, toys, surfaces",
                examples: "MRSA, norovirus, C. difficile spores",
                prevention: "Disinfection, hand hygiene"
            }
        },
        
        dropletTransmission: {
            definition: "Respiratory droplets (>5 μm); travel <1 meter",
            generation: "Coughing, sneezing, talking",
            examples: "Influenza, pertussis, meningococcal meningitis, strep throat",
            prevention: "Surgical masks, distance (>1 meter), respiratory hygiene"
        },
        
        airborneTransmission: {
            definition: "Aerosols (<5 μm); remain airborne; travel long distances",
            generation: "Coughing, certain procedures (intubation, bronchoscopy)",
            examples: "Tuberculosis, measles, varicella (chickenpox), COVID-19 (in some situations)",
            prevention: "N95 respirators, negative pressure rooms, ventilation"
        },
        
        vehicleTransmission: {
            definition: "Contaminated inanimate object transmits pathogen to many people",
            types: {
                food: "Salmonella, E. coli O157:H7, Listeria, Campylobacter, norovirus",
                water: "Cholera, Giardia, Cryptosporidium, hepatitis A",
                blood: "HIV, hepatitis B and C, malaria (transfusion)",
                IV_fluids: "Pseudomonas, Klebsiella (contaminated IV solutions)"
            },
            prevention: "Food safety, water treatment, blood screening, sterile techniques"
        },
        
        vectorTransmission: {
            definition: "Arthropod or animal transmits pathogen",
            mechanical: "Pathogen carried externally (fly carries bacteria on feet)",
            biological: "Pathogen multiplies in vector (mosquito, tick)",
            examples: {
                mosquito: "Malaria (Plasmodium), dengue, Zika, yellow fever, West Nile virus",
                tick: "Lyme disease (Borrelia burgdorferi), Rocky Mountain spotted fever, ehrlichiosis",
                flea: "Plague (Yersinia pestis), typhus",
                louse: "Epidemic typhus, trench fever",
                tsetse_fly: "African sleeping sickness (Trypanosoma)"
            },
            prevention: "Insect repellent, protective clothing, vector control, avoid endemic areas"
        },
        
        zoonotic: {
            definition: "Transmitted from animals to humans",
            direct: "Animal bite, scratch, contact with animal fluids",
            indirect: "Consume contaminated animal products",
            examples: {
                rabies: "Dog/bat/raccoon bite; virus in saliva",
                plague: "Flea from infected rodent",
                anthrax: "Contact with infected animals or products (wool, hides)",
                brucellosis: "Unpasteurized dairy from infected animals",
                salmonellosis: "Reptiles (turtles, lizards)",
                toxoplasmosis: "Cat feces (Toxoplasma gondii)",
                leptospirosis: "Rat urine in water",
                hantavirus: "Mouse droppings (aerosolized)"
            },
            percentage: "~60% of human infectious diseases are zoonotic"
        },
        
        nosocomial: {
            definition: "Hospital-acquired infection (HAI); healthcare-associated infection",
            timing: "Occurs after 48 hours of hospital admission or within 10 days of discharge",
            sources: "Contaminated equipment, healthcare workers' hands, other patients",
            types: {
                UTI: "Most common HAI; catheter-associated (CAUTI)",
                SSI: "Surgical site infections",
                pneumonia: "Ventilator-associated pneumonia (VAP)",
                BSI: "Bloodstream infections (central line-associated, CLABSI)",
                CDI: "C. difficile infection"
            },
            organisms: "MRSA, VRE, C. difficile, Pseudomonas, Klebsiella, Acinetobacter",
            risk: "Immunocompromised, invasive devices, prolonged stay, antibiotics",
            prevention: "Hand hygiene, sterile technique, antimicrobial stewardship, isolation"
        }
    },
    
    diagnosis: {
        clinicalDiagnosis: {
            history: "Symptoms, travel, exposure, animal contact, occupation",
            physical: "Fever, rash, lymphadenopathy, organ involvement",
            presumptive: "Based on signs, symptoms, and epidemiology"
        },
        
        laboratoryDiagnosis: {
            microscopy: {
                Gram_stain: "Differentiate Gram-positive from Gram-negative; observe morphology",
                acid_fast: "Mycobacterium, Nocardia (stain red with carbolfuchsin)",
                darkfield: "Spirochetes (Treponema pallidum - syphilis)",
                fluorescence: "Immunofluorescence (detect antigens with fluorescent antibodies)"
            },
            
            culture: {
                isolation: "Grow pathogen on appropriate medium",
                identification: "Biochemical tests, growth characteristics, colony morphology",
                susceptibility: "Antibiotic sensitivity testing (Kirby-Bauer, MIC)",
                time: "24-48 hours (bacteria); days-weeks (fungi, Mycobacterium)",
                goldStandard: "Culture considered gold standard for bacterial ID"
            },
            
            biochemical: {
                catalase: "Differentiates Staphylococcus (+) from Streptococcus (-)",
                coagulase: "Differentiates S. aureus (+) from S. epidermidis (-)",
                oxidase: "Differentiates Pseudomonas (+) from Enterobacteriaceae (-)",
                fermentation: "Sugar fermentation patterns (API strips, VITEK)"
            },
            
            serology: {
                definition: "Detect antibodies or antigens in blood",
                antibodies: {
                    IgM: "Indicates recent/acute infection",
                    IgG: "Indicates past infection or immunity",
                    titer: "Amount of antibody; rising titer indicates active infection"
                },
                tests: {
                    ELISA: "Enzyme-linked immunosorbent assay; detects antibodies or antigens",
                    western_blot: "Confirms HIV; detects specific antibodies",
                    agglutination: "Bacterial agglutination tests (salmonella O and H antigens)",
                    neutralization: "Antibodies neutralize virus (viral serology)"
                },
                limitations: "Antibodies take time to develop (window period); doesn't identify organism directly"
            },
            
            molecular: {
                PCR: {
                    method: "Polymerase chain reaction; amplifies DNA/RNA",
                    speed: "Results in hours (vs days for culture)",
                    sensitivity: "Can detect very small amounts",
                    uses: "HIV viral load, TB detection, MRSA screening, COVID-19",
                    multiplex: "Detect multiple pathogens simultaneously"
                },
                sequencing: {
                    16S_rRNA: "Identify bacteria by sequencing conserved gene",
                    whole_genome: "Complete genome sequence; outbreak investigation, resistance genes",
                    metagenomics: "Sequence all DNA in sample; detect unknown pathogens"
                },
                FISH: "Fluorescent in situ hybridization; detect specific RNA/DNA in tissues"
            },
            
            imaging: {
                Xray: "Chest X-ray for pneumonia, TB",
                CT: "Detailed imaging; abscesses, organ involvement",
                MRI: "Brain imaging for encephalitis, abscesses"
            }
        }
    },
    
    treatment: {
        antibacterial: {
            beta_lactams: {
                mechanism: "Inhibit cell wall synthesis (peptidoglycan crosslinking)",
                classes: "Penicillins, cephalosporins, carbapenems, monobactams",
                resistance: "Beta-lactamases destroy drug; altered PBPs",
                examples: "Penicillin, amoxicillin, ceftriaxone, meropenem"
            },
            aminoglycosides: {
                mechanism: "Inhibit protein synthesis (30S ribosome)",
                examples: "Gentamicin, tobramycin, streptomycin",
                toxicity: "Nephrotoxic, ototoxic",
                resistance: "Aminoglycoside-modifying enzymes"
            },
            tetracyclines: {
                mechanism: "Inhibit protein synthesis (30S ribosome)",
                examples: "Doxycycline, tetracycline",
                uses: "Lyme disease, rickettsial infections, chlamydia",
                resistance: "Efflux pumps"
            },
            macrolides: {
                mechanism: "Inhibit protein synthesis (50S ribosome)",
                examples: "Erythromycin, azithromycin (Z-pak), clarithromycin",
                uses: "Atypical pneumonia, pertussis, strep throat (penicillin allergy)",
                resistance: "rRNA methylation"
            },
            fluoroquinolones: {
                mechanism: "Inhibit DNA gyrase and topoisomerase IV (DNA replication)",
                examples: "Ciprofloxacin, levofloxacin, moxifloxacin",
                uses: "UTIs, respiratory infections, anthrax",
                adverse: "Tendon rupture, QT prolongation",
                resistance: "Mutations in gyrase genes"
            },
            sulfonamides: {
                mechanism: "Inhibit folic acid synthesis (competitive inhibitor of PABA)",
                examples: "Sulfamethoxazole (often with trimethoprim = Bactrim)",
                uses: "UTIs, Pneumocystis jirovecii pneumonia",
                resistance: "Altered DHPS enzyme"
            },
            vancomycin: {
                mechanism: "Inhibits cell wall synthesis (binds D-Ala-D-Ala)",
                uses: "MRSA, C. difficile (oral for CDI)",
                resistance: "VRE (altered peptidoglycan precursor to D-Ala-D-Lac)",
                toxicity: "Nephrotoxic, ototoxic, Red Man syndrome"
            },
            others: {
                metronidazole: "Anaerobes, C. difficile; damages DNA",
                linezolid: "MRSA, VRE; inhibits protein synthesis initiation",
                daptomycin: "MRSA, VRE; disrupts membrane",
                colistin: "Last resort for MDR Gram-negative; nephrotoxic"
            }
        },
        
        antiviral: {
            challenges: "Viruses use host machinery; few targets",
            
            nucleoside_analogs: {
                mechanism: "Mimic nucleosides; inhibit viral DNA/RNA synthesis",
                examples: {
                    acyclovir: "Herpes viruses (HSV, VZV); activated by viral thymidine kinase",
                    ganciclovir: "CMV",
                    ribavirin: "RSV, hepatitis C",
                    AZT: "HIV; reverse transcriptase inhibitor"
                }
            },
            neuraminidase_inhibitors: {
                mechanism: "Block viral release from infected cells",
                examples: "Oseltamivir (Tamiflu), zanamivir (Relenza)",
                uses: "Influenza A and B",
                timing: "Most effective within 48 hours of symptom onset"
            },
            protease_inhibitors: {
                mechanism: "Inhibit viral protease (HIV, hepatitis C)",
                examples: "Ritonavir, lopinavir (HIV); simeprevir (HCV)",
                uses: "HIV as part of HAART; hepatitis C"
            },
            fusion_inhibitors: {
                mechanism: "Prevent viral entry into cells",
                example: "Enfuvirtide (HIV)"
            },
            interferons: {
                mechanism: "Stimulate immune response; induce antiviral state",
                uses: "Hepatitis B and C (historically)",
                adverse: "Flu-like symptoms, depression"
            },
            directActingAntivirals: {
                HCV: "Sofosbuvir, ledipasvir; cure hepatitis C (>95%)",
                COVID: "Paxlovid (protease inhibitor), remdesivir"
            }
        },
        
        antifungal: {
            polyenes: {
                mechanism: "Bind ergosterol; disrupt fungal membrane",
                example: "Amphotericin B (AmB); gold standard for serious fungal infections",
                toxicity: "Nephrotoxic (AmB-terrible); liposomal formulation less toxic"
            },
            azoles: {
                mechanism: "Inhibit ergosterol synthesis (block 14-α-demethylase)",
                examples: "Fluconazole, itraconazole, voriconazole, posaconazole",
                uses: "Candida, Aspergillus, endemic mycoses",
                adverse: "Hepatotoxic, drug interactions (CYP450)"
            },
            echinocandins: {
                mechanism: "Inhibit β-1,3-glucan synthesis (cell wall)",
                examples: "Caspofungin, micafungin",
                uses: "Invasive candidiasis, Aspergillus",
                advantage: "Low toxicity"
            },
            others: {
                flucytosine: "Converted to 5-FU; inhibits DNA synthesis; use with AmB for Cryptococcus",
                griseofulvin: "Dermatophytes (skin fungi); disrupts microtubules",
                terbinafine: "Dermatophytes (nail fungi); inhibits squalene epoxidase"
            }
        },
        
        supportive: {
            fluids: "Hydration for diarrheal diseases (cholera, rotavirus)",
            electrolytes: "Replace losses",
            oxygen: "Respiratory support",
            dialysis: "Kidney failure (HUS from E. coli O157:H7)",
            surgery: "Debridement (gas gangrene), drainage (abscesses)"
        }
    },
    
    prevention: {
        vaccination: {
            definition: "Stimulate immunity without causing disease",
            
            types: {
                live_attenuated: {
                    description: "Weakened live pathogen; replicates but doesn't cause disease",
                    examples: "MMR (measles, mumps, rubella), varicella, oral polio (Sabin), BCG (TB)",
                    advantages: "Strong, long-lasting immunity; often single dose",
                    disadvantages: "Can revert to virulence (rare); contraindicated in immunocompromised"
                },
                inactivated: {
                    description: "Killed pathogen; cannot replicate",
                    examples: "Injectable polio (Salk), hepatitis A, rabies, influenza (some)",
                    advantages: "Safe; cannot cause disease",
                    disadvantages: "Weaker immunity; requires boosters"
                },
                subunit: {
                    description: "Purified antigens (proteins, polysaccharides)",
                    examples: "Hepatitis B (HBsAg), HPV, pneumococcal, meningococcal, Hib, pertussis (acellular)",
                    advantages: "Very safe; specific immunity",
                    disadvantages: "Weak immune response; requires adjuvant and boosters"
                },
                toxoid: {
                    description: "Inactivated bacterial toxin",
                    examples: "Tetanus, diphtheria (in DTaP, Tdap)",
                    advantages: "Prevents disease caused by toxin",
                    note: "Does not prevent infection/colonization, only toxin effects"
                },
                conjugate: {
                    description: "Polysaccharide linked to protein carrier",
                    examples: "Hib, pneumococcal (Prevnar), meningococcal",
                    advantage: "Effective in infants (T-cell dependent response)",
                    mechanism: "Protein carrier recruits T-cell help for polysaccharide"
                },
                mRNA: {
                    description: "mRNA encoding antigen; cells produce antigen",
                    examples: "COVID-19 (Pfizer, Moderna)",
                    advantages: "Rapid development, strong immunity",
                    new: "First widespread use in humans"
                }
            },
            
            herdImmunity: {
                definition: "High vaccination rates protect unvaccinated individuals",
                threshold: "Varies by disease; measles ~95%, polio ~80%",
                protects: "Infants too young to vaccinate, immunocompromised, vaccine failures"
            },
            
            schedule: {
                pediatric: "DTaP, Hib, Pneumococcal, MMR, Varicella, HepB, Polio, Rotavirus, Influenza",
                adult: "Tdap booster, influenza (annual), pneumococcal (≥65 yr), shingles (≥50 yr)",
                travel: "Yellow fever, typhoid, Japanese encephalitis, meningococcal"
            }
        },
        
        publicHealth: {
            sanitation: "Clean water, sewage treatment",
            foodSafety: "Pasteurization, proper cooking, refrigeration, avoid cross-contamination",
            vectorControl: "Insecticides, bed nets, eliminate breeding sites",
            quarantine: "Isolate infected individuals (TB, Ebola)",
            contact_tracing: "Identify and monitor exposed individuals",
            surveillance: "Monitor disease trends; detect outbreaks early",
            education: "Hand hygiene, safe sex, food safety"
        },
        
        personalMeasures: {
            handHygiene: "Single most important infection control measure",
            PPE: "Gloves, masks, gowns when appropriate",
            safeSex: "Condoms prevent STIs",
            avoid: "Sick individuals, contaminated food/water",
            insectRepellent: "DEET, permethrin for vector-borne diseases",
            petSafety: "Hand washing after handling; veterinary care"
        },
        
        antimicrobialStewardship: {
            principle: "Use antibiotics appropriately to preserve effectiveness",
            strategies: [
                "Prescribe only when necessary (not for viral infections)",
                "Use narrow-spectrum when possible",
                "Correct dose and duration",
                "De-escalate based on culture results",
                "Educate patients to complete course"
            ],
            goal: "Reduce antibiotic resistance"
        }
    },
    
    notifiableDiseases: {
        definition: "Diseases that must be reported to public health authorities",
        purpose: "Surveillance, outbreak detection, public health response",
        
        examples: {
            bacterial: "Anthrax, botulism, cholera, diphtheria, plague, tuberculosis, typhoid fever, meningococcal disease",
            viral: "Measles, mumps, rubella, polio, rabies, hepatitis, HIV, yellow fever, viral hemorrhagic fevers (Ebola)",
            parasitic: "Malaria, giardiasis, cryptosporidiosis",
            other: "Foodborne outbreaks, healthcare-associated infections (some)"
        },
        
        reporting: "Healthcare providers and laboratories report to local/state health departments → CDC"
    },
    
    emergingInfectiousDiseases: {
        definition: "Newly recognized or increasing in incidence/geographic range",
        
        factors: {
            ecological: "Climate change, deforestation, urbanization",
            human: "Population growth, migration, international travel",
            agricultural: "Intensive farming, antibiotic use in livestock",
            microbial: "Mutation, adaptation, antibiotic resistance",
            breakdown: "Public health infrastructure collapse, poverty"
        },
        
        examples: {
            new: "HIV/AIDS (1981), SARS (2003), MERS (2012), COVID-19 (2019), Zika (2015)",
            reemerging: "TB (MDR-TB, XDR-TB), measles (due to vaccine hesitancy), dengue (expanding range)",
            zoonotic: "Nipah, Hendra, avian influenza, swine flu, Ebola, Lyme disease"
        },
        
        preparedness: "Surveillance systems, rapid response teams, vaccine development platforms, stockpiles"
    },
    
    majorbacterialPathogens: {
        StaphylococcusAureus: {
            Gram: "Positive",
            morphology: "Cocci in clusters (grapelike)",
            habitat: "Skin, nose (30% carrier rate)",
            diseases: "Skin infections (boils, impetigo), pneumonia, endocarditis, toxic shock syndrome, food poisoning",
            toxins: "TSST-1, enterotoxins, hemolysins, PVL",
            resistance: "MRSA (methicillin-resistant); treat with vancomycin",
            identification: "Catalase (+), coagulase (+), golden colonies"
        },
        
        StreptococcusPyogenes: {
            Gram: "Positive",
            morphology: "Cocci in chains",
            diseases: "Strep throat, scarlet fever, impetigo, cellulitis, necrotizing fasciitis",
            toxins: "Streptolysin O and S, SPE (scarlet fever)",
            sequelae: "Rheumatic fever, glomerulonephritis (post-streptococcal)",
            identification: "Catalase (-), beta-hemolytic, Group A (Lancefield)"
        },
        
        StreptococcusPneumoniae: {
            Gram: "Positive",
            morphology: "Diplococci (lancet-shaped)",
            diseases: "Pneumonia (#1 cause), meningitis, otitis media, sinusitis",
            virulence: "Polysaccharide capsule (>90 serotypes)",
            identification: "Alpha-hemolytic, optochin-sensitive, bile soluble",
            vaccine: "Pneumococcal conjugate (PCV13, PCV15, PCV20), polysaccharide (PPSV23)"
        },
        
        Mycobacterium_tuberculosis: {
            Gram: "Not Gram-stained; acid-fast",
            morphology: "Slender rods",
            disease: "Tuberculosis (pulmonary, extrapulmonary)",
            transmission: "Airborne; highly contagious",
            characteristics: "Slow-growing (weeks), waxy cell wall (mycolic acid)",
            test: "Tuberculin skin test (TST), IGRA blood test",
            treatment: "Multi-drug regimen (6-9 months): rifampin, isoniazid, pyrazinamide, ethambutol",
            resistance: "MDR-TB, XDR-TB",
            vaccine: "BCG (not used in US)"
        },
        
        Escherichia_coli: {
            Gram: "Negative",
            morphology: "Rods (bacilli)",
            habitat: "Normal flora of colon",
            diseases: "UTI (#1 cause), gastroenteritis, neonatal meningitis, sepsis",
            pathotypes: {
                ETEC: "Enterotoxigenic; traveler's diarrhea (watery)",
                EPEC: "Enteropathogenic; infant diarrhea",
                EIEC: "Enteroinvasive; bloody diarrhea (dysentery-like)",
                EHEC: "Enterohemorrhagic; E. coli O157:H7; bloody diarrhea, HUS (Shiga toxin)",
                UPEC: "Uropathogenic; UTI (fimbriae adhere to bladder)"
            },
            identification: "Lactose fermenter, indole (+), motile"
        },
        
        Salmonella: {
            Gram: "Negative",
            morphology: "Rods",
            diseases: {
                gastroenteritis: "S. enteritidis, S. typhimurium; diarrhea, vomiting (non-typhoidal)",
                typhoidFever: "S. typhi; prolonged fever, rose spots, intestinal perforation (typhoidal)"
            },
            transmission: "Fecal-oral; contaminated food (poultry, eggs), water",
            carrier: "Asymptomatic carriers (Typhoid Mary)",
            identification: "Non-lactose fermenter, H₂S (+), motile",
            vaccine: "Typhoid vaccine (oral live attenuated or injectable polysaccharide)"
        },
        
        Pseudomonas_aeruginosa: {
            Gram: "Negative",
            morphology: "Rods",
            habitat: "Soil, water, hospitals (moist environments)",
            diseases: "Burn infections, pneumonia (CF patients, ventilator), UTI, otitis externa",
            characteristics: "Obligate aerobe, oxidase (+), grape-like odor, green pigment (pyocyanin)",
            resistance: "Intrinsically resistant to many antibiotics (outer membrane, efflux pumps)",
            treatment: "Anti-pseudomonal beta-lactams, fluoroquinolones, aminoglycosides"
        },
        
        Neisseria_gonorrhoeae: {
            Gram: "Negative",
            morphology: "Diplococci (kidney-shaped)",
            disease: "Gonorrhea (STI); urethritis, cervicitis, PID, neonatal conjunctivitis",
            transmission: "Sexual contact",
            resistance: "Increasing resistance to antibiotics",
            treatment: "Ceftriaxone + azithromycin (dual therapy)",
            prevention: "Condoms, screening"
        },
        
        Neisseria_meningitidis: {
            Gram: "Negative",
            morphology: "Diplococci",
            disease: "Meningitis, meningococcemia, Waterhouse-Friderichsen syndrome",
            transmission: "Respiratory droplets; close contact (dorms, military)",
            serogroups: "A, B, C, W, Y (capsular polysaccharide)",
            vaccine: "Meningococcal conjugate (MenACWY), MenB",
            prophylaxis: "Rifampin or ciprofloxacin for close contacts"
        },
        
        Clostridium: {
            Gram: "Positive",
            morphology: "Rods with endospores",
            characteristics: "Obligate anaerobes; spore-formers",
            species: {
                C_tetani: "Tetanus; spastic paralysis (lockjaw); vaccine available",
                C_botulinum: "Botulism; flaccid paralysis; food poisoning, wound, infant botulism",
                C_perfringens: "Gas gangrene; food poisoning; alpha toxin (lecithinase)",
                C_difficile: "Pseudomembranous colitis; diarrhea after antibiotics; toxins A and B"
            }
        }
    },
    
    applications: [
        "Clinical diagnosis and treatment of infectious diseases",
        "Antibiotic selection based on pathogen and susceptibility",
        "Infection control in hospitals and communities",
        "Vaccine development and immunization programs",
        "Public health surveillance and outbreak investigation",
        "Understanding antibiotic resistance mechanisms",
        "Developing rapid diagnostic tests",
        "Educating patients and healthcare workers"
    ],
    
    clinicalCase_Example: {
        presentation: "22-year-old woman presents with fever (39°C), severe headache, neck stiffness, photophobia, and altered mental status. She lives in a college dorm.",
        physicalExam: "Positive Kernig's and Brudzinski's signs; petechial rash on extremities",
        presumptiveDiagnosis: "Bacterial meningitis",
        differentials: "N. meningitidis, S. pneumoniae, H. influenzae (less common with Hib vaccine)",
        urgentAction: "Lumbar puncture for CSF analysis; blood cultures; start empiric antibiotics IMMEDIATELY (ceftriaxone + vancomycin)",
        CSFfindings: "Increased WBC (mostly PMNs), increased protein, decreased glucose, Gram-negative diplococci",
        diagnosis: "Neisseria meningitidis meningitis",
        treatment: "IV ceftriaxone or penicillin G; supportive care",
        prophylaxis: "Rifampin or ciprofloxacin for close contacts (dorm mates, kissing contacts)",
        prevention: "Meningococcal vaccine recommended for college students",
        prognosis: "With prompt treatment, good; without treatment, high mortality"
    }
};

return content;
}



    // ========================================
    // HANDLER METHODS FOR EACH TOPIC
    // ========================================

    handleBacterialStructure(problem) {
        const content = {
            topic: "Bacterial Structure and Classification",
            category: 'microbial_cells',
            summary: "Bacteria are prokaryotic microorganisms with diverse structures including cell wall, membrane, and surface appendages. The Gram stain differentiates bacteria based on cell wall structure.",
            
            // Full content from lessons object would go here
            // Pulling from this.lessons.bacterial_structure
            ...this.lessons.bacterial_structure
        };
        
        return content;
    }

    handleMicrobialGrowth(problem) {
        const content = {
            topic: "Microbial Growth and Nutrition",
            category: 'microbial_physiology',
            summary: "Bacterial growth follows predictable patterns with four phases. Environmental factors and nutritional requirements influence microbial cultivation.",
            
            ...this.lessons.microbial_growth
        };
        
        return content;
    }

    handleMicrobialMetabolism(problem) {
        const content = {
            topic: "Microbial Metabolism",
            category: 'microbial_physiology',
            summary: "Microorganisms exhibit remarkable metabolic diversity, utilizing various energy sources and electron acceptors for ATP generation and biosynthesis.",
            
            ...this.lessons.microbial_metabolism
        };
        
        return content;
    }

    handleMicrobialGenetics(problem) {
        const content = {
            topic: "Microbial Genetics",
            category: 'genetics',
            summary: "Bacterial genetics involves chromosomal and plasmid DNA, mutations, and horizontal gene transfer mechanisms that spread genetic traits including antibiotic resistance.",
            
            ...this.lessons.microbial_genetics
        };
        
        return content;
    }

    handleVirology(problem) {
        const content = {
            topic: "Virology",
            category: 'viruses',
            summary: "Viruses are obligate intracellular parasites consisting of nucleic acid and protein coat. They replicate only inside host cells through lytic or lysogenic cycles.",
            
            ...this.lessons.virology
        };
        
        return content;
    }

    handleImmunology(problem) {
        // Would implement immunology lesson content
        return {
            topic: "Immunology and Host Defense",
            category: 'host_pathogen',
            summary: "The immune system defends against microbial infection through innate and adaptive mechanisms."
        };
    }

    handleMedicalMicrobiology(problem) {
        // Would implement medical microbiology lesson content
        return {
            topic: "Medical Microbiology",
            category: 'applied_microbiology',
            summary: "Pathogenic microorganisms cause infectious diseases through specific virulence mechanisms."
        };
    }

    handleEnvironmentalMicrobiology(problem) {
        // Would implement environmental microbiology lesson content
        return {
            topic: "Environmental Microbiology",
            category: 'applied_microbiology',
            summary: "Microorganisms play essential roles in biogeochemical cycles and can be used for bioremediation."
        };
    }

    // Additional methods for workbook generation, diagram rendering, etc.
    // would follow the same pattern as the molecular biology workbook...

// ========================================
// MAIN PROBLEM PROCESSING METHODS
// ========================================

parseMicrobiologyProblem(topic, parameters = {}, subTopic = null, context = {}) {
    let topicType = null;

    // Match topic to handler
    for (const [type, config] of Object.entries(this.microbiologyTopics)) {
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
        throw new Error(`Unable to recognize microbiology topic: ${topic}`);
    }

    return {
        originalTopic: topic,
        type: topicType,
        subTopic: subTopic,
        parameters: { ...parameters },
        context: { ...context },
        difficulty: this.microbiologyTopics[topicType].difficulty,
        prerequisites: this.microbiologyTopics[topicType].prerequisites,
        parsedAt: new Date().toISOString()
    };
}

handleMicrobiologyProblem(config) {
    const { topic, parameters, subTopic, context, requestType } = config;

    try {
        const isExperimentRequest = requestType === 'experiment' || 
                                   (typeof topic === 'string' && topic.toLowerCase().includes('experiment'));

        if (isExperimentRequest) {
            return this.handleExperimentRequest(config);
        } else {
            this.currentProblem = this.parseMicrobiologyProblem(topic, parameters, subTopic, context);
            this.currentContent = this.getMicrobiologyContent(this.currentProblem);
            
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
            
            this.contentSteps = this.generateMicrobiologyContent(this.currentProblem, this.currentContent);
            
            // Generate workbook (handles async internally)
            this.generateMicrobiologyWorkbook();

            // Return synchronously with promise for diagrams
            return {
                workbook: this.currentWorkbook,
                content: this.currentContent,
                steps: this.contentSteps,
                diagrams: this.diagramData,
                experiments: this.currentContent.relatedExperiments,
                learnerProfile: this.learnerProfile,
                getDiagrams: () => this.waitForDiagrams()
            };
        }
    } catch (error) {
        throw new Error(`Failed to process microbiology request: ${error.message}`);
    }
}

getMicrobiologyContent(problem) {
    const handler = this.microbiologyTopics[problem.type]?.handler;
    if (!handler) {
        throw new Error(`No handler available for microbiology topic: ${problem.type}`);
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

    // Filter by organism type
    if (parameters.organismType) {
        const orgType = parameters.organismType.toLowerCase();
        if (filtered.majorbacterialPathogens && orgType === 'bacteria') {
            // Keep bacterial content
        } else if (orgType === 'virus' && !filtered.majorbacterialPathogens) {
            // Keep viral content
        }
    }

    return filtered;
}

handleExperimentRequest(config) {
    const { topic, parameters, experimentId } = config;

    if (experimentId && this.microbiologyExperiments[experimentId]) {
        this.currentExperiment = this.microbiologyExperiments[experimentId];
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
    for (const [id, exp] of Object.entries(this.microbiologyExperiments)) {
        if (exp.name.toLowerCase().includes(topicLower)) {
            return exp;
        }
    }

    // Related topics match
    for (const [id, exp] of Object.entries(this.microbiologyExperiments)) {
        if (exp.relatedTopics.some(t => topicLower.includes(t.toLowerCase()))) {
            return exp;
        }
    }

    // Scientist name match
    for (const [id, exp] of Object.entries(this.microbiologyExperiments)) {
        if (exp.historicalBackground?.scientist && 
            exp.historicalBackground.scientist.toLowerCase().includes(topicLower)) {
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
                } else {
                    formatted.push([`  ${index + 1}.`, step]);
                }
            });
        } else if (typeof labExp.procedure === 'object') {
            Object.entries(labExp.procedure).forEach(([key, value]) => {
                formatted.push([key.toUpperCase() + ':', '']);
                if (Array.isArray(value)) {
                    value.forEach((step, idx) => {
                        if (step.trim() === '') {
                            formatted.push(['', '']);
                        } else {
                            formatted.push([`  ${idx + 1}.`, step]);
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
            if (typeof value === 'object') {
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
        if (Array.isArray(labExp.dataTable)) {
            labExp.dataTable.forEach(row => {
                if (Array.isArray(row)) {
                    formatted.push(['  ', row.join(' | ')]);
                }
            });
        }
    }

    if (labExp.interpretation) {
        formatted.push(['', '']);
        formatted.push(['Interpretation', '']);
        if (typeof labExp.interpretation === 'object') {
            Object.entries(labExp.interpretation).forEach(([key, value]) => {
                formatted.push([`  ${key}:`, '']);
                if (Array.isArray(value)) {
                    value.forEach(item => formatted.push(['    -', item]));
                } else {
                    formatted.push(['    ', value]);
                }
            });
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

    if (labExp.clinicalRelevance) {
        formatted.push(['', '']);
        formatted.push(['Clinical Relevance', '']);
        if (typeof labExp.clinicalRelevance === 'object') {
            Object.entries(labExp.clinicalRelevance).forEach(([key, value]) => {
                formatted.push([`  ${key}:`, value]);
            });
        } else if (Array.isArray(labExp.clinicalRelevance)) {
            labExp.clinicalRelevance.forEach(item => {
                formatted.push(['  •', item]);
            });
        } else {
            formatted.push(['  ', labExp.clinicalRelevance]);
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
    
    Object.entries(this.microbiologyExperiments).forEach(([id, experiment]) => {
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
    return Object.entries(this.microbiologyExperiments).map(([id, exp]) => ({
        id: id,
        name: exp.name,
        category: exp.category,
        relatedTopics: exp.relatedTopics,
        scientist: exp.historicalBackground?.scientist,
        year: exp.historicalBackground?.year
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
        currentResearch: `Current research in ${content.topic} includes antimicrobial resistance monitoring, vaccine development, and microbiome studies...`,
        openQuestions: "Unresolved questions include mechanisms of resistance emergence, optimal treatment strategies, and prediction of outbreaks...",
        techniques: "Advanced techniques include whole genome sequencing, CRISPR-based diagnostics, and high-throughput screening..."
    };
}

getContextualScenarios(topicType) {
    return this.contextualScenarios[topicType] || [];
}

getMetacognitivePrompts(topicType) {
    const prompts = {
        beforeLearning: this.metacognitivePrompts.beforeLearning.map(p => 
            p.replace('{topic}', this.microbiologyTopics[topicType]?.name || topicType)
        ),
        duringLearning: this.metacognitivePrompts.duringLearning.map(p => 
            p.replace('{concept}', topicType)
        ),
        afterLearning: this.metacognitivePrompts.afterLearning.map(p => 
            p.replace('{topic}', this.microbiologyTopics[topicType]?.name || topicType)
        )
    };

    return prompts;
}

updateLearnerProfile(topicType, performance) {
    if (performance.score >= 0.8) {
        if (!this.learnerProfile.masteredTopics.includes(topicType)) {
            this.learnerProfile.masteredTopics.push(topicType);
        }
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

generateMicrobiologyContent(problem, content) {
    const contentSections = [];

    // Generate overview section
    contentSections.push(this.generateOverviewSection(problem, content));

    // Generate specific content sections based on content structure
    if (content.cellStructure || content.bacterialGenome) {
        contentSections.push(this.generateStructureSection(content));
    }

    if (content.growthCurve || content.environmentalFactors) {
        contentSections.push(this.generateGrowthSection(content));
    }

    if (content.ATPGeneration || content.respirationPathways || content.fermentation) {
        contentSections.push(this.generateMetabolismSection(content));
    }

    if (content.horizontalGeneTransfer || content.mutations) {
        contentSections.push(this.generateGeneticsSection(content));
    }

    if (content.viralStructure || content.bacteriophages) {
        contentSections.push(this.generateVirologySection(content));
    }

    if (content.pathogenesis || content.virulenceFactors) {
        contentSections.push(this.generatePathogenesisSection(content));
    }

    if (content.transmission || content.diagnosis) {
        contentSections.push(this.generateClinicalSection(content));
    }

    // Add comparisons if available
    if (content.comparison) {
        contentSections.push(this.generateComparisonsSection(content));
    }

    // Add examples section
    if (content.examples || content.majorbacterialPathogens) {
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
        type: 'overview',
        title: content.topic || problem.type,
        summary: content.summary,
        category: content.category,
        keyPoints: this.extractKeyPoints(content),
        relevance: this.getTopicRelevance(problem.type)
    };
}

generateStructureSection(content) {
    return {
        type: 'structure',
        title: 'Structure and Organization',
        data: content.cellStructure || content.bacterialGenome || content.viralStructure
    };
}

generateGrowthSection(content) {
    return {
        type: 'growth',
        title: 'Growth and Cultivation',
        data: {
            growthCurve: content.growthCurve,
            environmentalFactors: content.environmentalFactors,
            cultureMedia: content.cultureMedia
        }
    };
}

generateMetabolismSection(content) {
    return {
        type: 'metabolism',
        title: 'Metabolic Pathways',
        data: {
            ATPGeneration: content.ATPGeneration,
            respiration: content.aerobicRespiration || content.anaerobicRespiration,
            fermentation: content.fermentation
        }
    };
}

generateGeneticsSection(content) {
    return {
        type: 'genetics',
        title: 'Genetics and Gene Transfer',
        data: {
            genome: content.bacterialGenome,
            mutations: content.mutations,
            horizontalTransfer: content.horizontalGeneTransfer,
            resistance: content.antibioticResistance
        }
    };
}

generateVirologySection(content) {
    return {
        type: 'virology',
        title: 'Viral Biology',
        data: {
            structure: content.viralStructure,
            replication: content.bacteriophages || content.animalVirusReplication,
            classification: content.viralClassification
        }
    };
}

generatePathogenesisSection(content) {
    return {
        type: 'pathogenesis',
        title: 'Pathogenic Mechanisms',
        data: {
            pathogenesis: content.pathogenesis,
            virulenceFactors: content.virulenceFactors,
            immuneEvasion: content.pathogenesis?.step4_Evasion
        }
    };
}

generateClinicalSection(content) {
    return {
        type: 'clinical',
        title: 'Clinical Microbiology',
        data: {
            transmission: content.transmission,
            diagnosis: content.diagnosis,
            treatment: content.treatment,
            prevention: content.prevention
        }
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
        title: 'Examples and Applications',
        data: content.examples || content.majorbacterialPathogens || content.applications
    };
}

generateContextualScenariosSection(content) {
    return {
        type: 'scenarios',
        title: 'Clinical Scenarios',
        scenarios: content.contextualScenarios
    };
}

generateRelatedExperimentsSection(content) {
    return {
        type: 'experiments',
        title: 'Related Laboratory Experiments',
        experiments: content.relatedExperiments
    };
}

generateMetacognitiveSection(content) {
    return {
        type: 'metacognitive',
        title: 'Learning Reflection',
        prompts: content.metacognitivePrompts
    };
}

extractKeyPoints(content) {
    const keyPoints = [];

    if (content.summary) keyPoints.push(content.summary);
    
    // Extract from various content structures
    if (content.keyDefinitions) {
        const definitions = Object.entries(content.keyDefinitions).slice(0, 3);
        definitions.forEach(([term, def]) => {
            keyPoints.push(`${term}: ${def}`);
        });
    }

    if (content.growthCurve) {
        keyPoints.push("Bacterial growth follows lag, log, stationary, and death phases");
    }

    if (content.pathogenesis) {
        keyPoints.push("Pathogenesis involves adhesion, invasion, immune evasion, and damage");
    }

    return keyPoints.slice(0, 5);
}

// ========================================
// MICROBIOLOGY SPECIFIC HELPER METHODS
// ========================================

getTopicRelevance(topicType) {
    const relevance = {
        bacterial_structure: "Understanding bacterial structure is fundamental for identification, classification, and antibiotic development",
        microbial_growth: "Growth kinetics are essential for industrial fermentation, food safety, and infection control",
        microbial_metabolism: "Metabolic diversity enables microorganisms to thrive in diverse environments and perform biotechnology applications",
        microbial_genetics: "Genetic mechanisms drive evolution, antibiotic resistance spread, and enable genetic engineering",
        virology: "Understanding viral biology is crucial for treating infections, developing vaccines, and preventing pandemics",
        immunology: "Immune responses determine infection outcomes and vaccine effectiveness",
        medical_microbiology: "Identifying pathogens and understanding disease mechanisms guides treatment and prevention",
        environmental_microbiology: "Microorganisms drive biogeochemical cycles and can be harnessed for bioremediation"
    };

    return relevance[topicType] || "Important microbiology concept with clinical and research applications";
}

suggestRelatedTopics() {
    if (!this.currentProblem) return [];

    const relatedTopicsMap = {
        bacterial_structure: ['microbial_growth', 'medical_microbiology', 'microbial_genetics'],
        microbial_growth: ['microbial_metabolism', 'bacterial_structure'],
        microbial_metabolism: ['microbial_growth', 'environmental_microbiology'],
        microbial_genetics: ['bacterial_structure', 'medical_microbiology'],
        virology: ['immunology', 'medical_microbiology'],
        immunology: ['virology', 'medical_microbiology'],
        medical_microbiology: ['bacterial_structure', 'immunology', 'virology'],
        environmental_microbiology: ['microbial_metabolism', 'microbial_growth']
    };

    const relatedTypes = relatedTopicsMap[this.currentProblem.type] || [];

    return relatedTypes.map(type => ({
        type: type,
        name: this.microbiologyTopics[type]?.name,
        description: this.microbiologyTopics[type]?.description
    }));
}

// ========================================
// DIAGRAM GENERATION
// ========================================

generateMicrobiologyDiagramData() {
    if (!this.currentContent) return;

    const { type } = this.currentProblem;

    this.diagramData = {
        type: type,
        diagrams: this.getRelevantMicrobiologyDiagrams(type),
        placeholder: true,
        note: "Diagram generation will be implemented with actual microbiology structures"
    };
}

getRelevantMicrobiologyDiagrams(topicType) {
    const diagramMap = {
        bacterial_structure: ['gram_positive_cell_wall', 'gram_negative_cell_wall', 'bacterial_flagella', 'endospore_structure'],
        microbial_growth: ['growth_curve', 'generation_time_calculation', 'culture_methods'],
        microbial_metabolism: ['glycolysis_pathway', 'krebs_cycle', 'electron_transport_chain', 'fermentation_pathways'],
        microbial_genetics: ['conjugation_diagram', 'transformation', 'transduction', 'plasmid_map'],
        virology: ['bacteriophage_structure', 'viral_replication_cycle', 'lytic_vs_lysogenic'],
        immunology: ['innate_vs_adaptive_immunity', 'antibody_structure', 'complement_cascade'],
        medical_microbiology: ['koch_postulates', 'antibiotic_mechanisms', 'transmission_routes'],
        environmental_microbiology: ['nitrogen_cycle', 'carbon_cycle', 'wastewater_treatment']
    };

    return diagramMap[topicType] || [];
}

// ========================================
// GLOSSARY AND TERMINOLOGY
// ========================================

generateGlossary() {
    if (!this.currentContent) return {};

    const glossary = {};

    // Extract key definitions
    if (this.currentContent.keyDefinitions) {
        Object.assign(glossary, this.currentContent.keyDefinitions);
    }

    // Extract from specific sections
    if (this.currentContent.growthCurve) {
        Object.entries(this.currentContent.growthCurve).forEach(([phase, data]) => {
            if (data.description) {
                glossary[this.formatKey(phase)] = data.description;
            }
        });
    }

    if (this.currentContent.virulenceFactors) {
        Object.entries(this.currentContent.virulenceFactors).forEach(([factor, data]) => {
            if (data.definition || data.function) {
                glossary[this.formatKey(factor)] = data.definition || data.function;
            }
        });
    }

    return glossary;
}

formatKey(key) {
    return key
        .replace(/([A-Z])/g, ' $1')
        .replace(/_/g, ' ')
        .trim()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// ========================================
// ANALOGIES AND LANGUAGE ADAPTATION
// ========================================

generateMicrobiologyAnalogy(concept) {
    const analogies = {
        // Bacterial structure
        gram_positive: "Like a fortress with thick walls (peptidoglycan)",
        gram_negative: "Like a castle with double walls (outer membrane + peptidoglycan)",
        flagellum: "Like a rotating propeller for swimming",
        pilus: "Like a grappling hook for attachment",
        capsule: "Like a slime coat protecting from attack",
        endospore: "Like a seed that can survive harsh conditions",
        
        // Growth
        lag_phase: "Like athletes warming up before a race",
        log_phase: "Like a population explosion",
        stationary_phase: "Like a crowded room at maximum capacity",
        binary_fission: "Like cells photocopying themselves",
        
        // Metabolism
        fermentation: "Like burning fuel without oxygen (incomplete combustion)",
        aerobic_respiration: "Like efficient burning with oxygen (complete combustion)",
        chemiosmosis: "Like a hydroelectric dam generating electricity",
        
        // Genetics
        plasmid: "Like a USB drive with extra software",
        conjugation: "Like sharing files through a cable connection",
        transformation: "Like picking up money from the ground (DNA from environment)",
        transduction: "Like a delivery truck (phage) accidentally carrying passenger genes",
        
        // Virology
        virus: "Like a hijacker that takes over a cell factory",
        lytic_cycle: "Like a factory that explodes after making products",
        lysogenic_cycle: "Like a sleeper agent hiding in the chromosome",
        
        // Pathogenesis
        adhesion: "Like Velcro sticking to fabric",
        capsule_protection: "Like a force field protecting from immune system",
        toxin: "Like poison that damages cells",
        
        // Immunity
        antibody: "Like a Y-shaped key that locks onto invaders",
        phagocytosis: "Like Pac-Man eating bacteria",
        complement: "Like dominos causing a chain reaction",
        
        // Medical
        antibiotic: "Like a targeted missile against bacteria",
        vaccine: "Like a wanted poster training immune system",
        nosocomial_infection: "Like catching a cold at the doctor's office"
    };

    return analogies[concept] || "Performs a specialized microbial function";
}

adaptMicrobiologyLanguage(text, level) {
    if (!text) return '';

    const adaptations = {
        basic: {
            replacements: {
                'prokaryote': 'cell without nucleus',
                'peptidoglycan': 'cell wall material',
                'binary fission': 'cell splitting',
                'exponential growth': 'rapid multiplication',
                'virulence factor': 'disease-causing trait',
                'pathogen': 'disease-causing microbe',
                'phagocytosis': 'cell eating',
                'antibody': 'immune protein',
                'conjugation': 'bacterial mating',
                'bacteriophage': 'bacteria-eating virus'
            }
        },
        intermediate: {
            replacements: {
                'prokaryote': 'prokaryotic cell',
                'peptidoglycan': 'peptidoglycan cell wall',
                'binary fission': 'binary fission',
                'exponential growth': 'logarithmic (exponential) growth'
            }
        },
        advanced: {
            replacements: {
                'prokaryote': 'prokaryotic microorganism',
                'peptidoglycan': 'N-acetylglucosamine-N-acetylmuramic acid peptidoglycan',
                'binary fission': 'asexual reproduction via binary fission',
                'exponential growth': 'logarithmic phase with constant generation time'
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

// ========================================
// CONCEPTUAL CONNECTIONS
// ========================================

addMicrobiologyConceptualConnections(content) {
    if (!this.includeConceptualConnections) return content;

    const connections = {
        bacterial_structure: "Cell wall structure determines Gram stain result, antibiotic susceptibility, and identification. Structure reflects function and adaptation.",
        microbial_growth: "Growth rate determines infection progression and industrial fermentation timelines. Environmental control essential for food safety.",
        microbial_metabolism: "Metabolic diversity enables survival in extreme environments. Fermentation products have industrial applications. Energy pathways connected to growth.",
        microbial_genetics: "Horizontal gene transfer drives rapid evolution and antibiotic resistance spread. Connects to pathogenicity and adaptation.",
        virology: "Viral replication depends on host cell machinery. Connects to immunity, vaccines, and treatment strategies.",
        immunology: "Immune response determines infection outcome. Connects to vaccination, disease severity, and autoimmunity.",
        medical_microbiology: "Pathogen identification guides treatment. Virulence factors determine disease severity. Connects structure, genetics, and immunity.",
        environmental_microbiology: "Microbial metabolism drives global nutrient cycles. Connects to climate, agriculture, and bioremediation."
    };

    content.conceptualConnections = connections[this.currentProblem.type] || 
        "This topic connects to broader microbiology and health principles";

    return content;
}

// ========================================
// ENRICHMENT WITH EXAMPLES
// ========================================

enrichWithMicrobiologyExamples(content) {
    if (!this.includeExamples || content.examples) return content;

    const exampleDatabase = {
        bacterial_structure: [
            "MRSA: Gram-positive with thick cell wall; resistant to beta-lactam antibiotics",
            "E. coli: Gram-negative with outer membrane; causes UTIs and foodborne illness",
            "Mycobacterium tuberculosis: Acid-fast due to mycolic acids; causes TB"
        ],
        microbial_growth: [
            "Food poisoning: Bacteria multiply exponentially at room temperature (danger zone 5-60°C)",
            "Yogurt production: Lactobacillus growth controlled by temperature and time",
            "Hospital infections: Bacterial growth on catheters and medical devices"
        ],
        microbial_metabolism: [
            "Botulism: Clostridium botulinum grows anaerobically in canned foods",
            "Wastewater treatment: Aerobic bacteria decompose organic matter",
            "Cheese production: Lactic acid fermentation by bacteria"
        ],
        microbial_genetics: [
            "MRSA emergence: mecA gene acquired via horizontal gene transfer",
            "E. coli O157:H7: Acquired Shiga toxin gene from bacteriophage",
            "Antibiotic resistance plasmids: Spread rapidly through bacterial populations"
        ],
        virology: [
            "Influenza: Antigenic shift causes pandemics due to reassortment",
            "HIV: Retrovirus integrates into host genome; difficult to cure",
            "Bacteriophage therapy: Using viruses to treat antibiotic-resistant infections"
        ],
        medical_microbiology: [
            "Strep throat: Group A Streptococcus; can lead to rheumatic fever",
            "MRSA: Hospital-acquired infections difficult to treat",
            "Tuberculosis: Requires 6-9 month multi-drug treatment"
        ]
    };

    if (exampleDatabase[this.currentProblem.type]) {
        content.examples = content.examples || [];
        content.examples.push(...exampleDatabase[this.currentProblem.type]);
    }

    return content;
}

// ========================================
// COMPARATIVE CONTEXT
// ========================================

addMicrobiologyComparativeContext(content) {
    if (!this.includeComparisons || content.comparison) return content;

    const comparativeData = {
        bacterial_structure: {
            gramPositive: "Thick peptidoglycan (20-80 nm), no outer membrane, purple stain",
            gramNegative: "Thin peptidoglycan (2-3 nm), outer membrane with LPS, pink stain",
            antibioticSusceptibility: "Gram-positive more susceptible to penicillin; Gram-negative more resistant"
        },
        microbial_growth: {
            exponentialPhase: "Fastest growth, constant generation time, cells most uniform",
            stationaryPhase: "No net growth, nutrient depletion, secondary metabolites produced",
            bacterialVsEukaryotic: "Bacteria: 20 min generation time; Eukaryotes: hours to days"
        },
        microbial_metabolism: {
            aerobic: "38 ATP per glucose, requires O₂, complete oxidation",
            anaerobic: "2-36 ATP per glucose, no O₂ required, incomplete oxidation",
            fermentation: "2 ATP per glucose, fastest but least efficient"
        },
        virology: {
            bacteriaVsVirus: "Bacteria: cells with metabolism; Viruses: not cells, no metabolism",
            lyticVsLysogenic: "Lytic: immediate replication and cell death; Lysogenic: integration and dormancy"
        }
    };

    if (comparativeData[this.currentProblem.type]) {
        content.comparativeContext = comparativeData[this.currentProblem.type];
    }

    return content;
}

// ========================================
// VALIDATION AND QUALITY METRICS
// ========================================

validateMicrobiologyContent(content) {
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

    if (!content.keyDefinitions) {
        validationResults.suggestions.push("Consider adding key definitions");
    }

    const hasSubstantiveContent = 
        content.cellStructure ||
        content.growthCurve ||
        content.pathogenesis ||
        content.viralStructure ||
        content.ATPGeneration;

    if (!hasSubstantiveContent) {
        validationResults.warnings.push("Limited substantive content");
        validationResults.suggestions.push("Consider adding more detailed information");
    }

    if (!content.applications && !content.clinicalRelevance) {
        validationResults.suggestions.push("Consider adding clinical applications");
    }

    return validationResults;
}

calculateMicrobiologyContentCompleteness() {
    if (!this.currentContent) return 0;

    let score = 0;
    const maxScore = 10;

    if (this.currentContent.topic) score += 1;
    if (this.currentContent.summary) score += 1;
    if (this.currentContent.keyDefinitions) score += 1;
    if (this.currentContent.examples || this.currentContent.majorbacterialPathogens) score += 1;
    if (this.currentContent.applications || this.currentContent.clinicalRelevance) score += 1;
    
    const hasMainContent = 
        this.currentContent.cellStructure ||
        this.currentContent.growthCurve ||
        this.currentContent.pathogenesis ||
        this.currentContent.viralStructure;
    if (hasMainContent) score += 3;

    if (this.currentContent.diagnosis || this.currentContent.treatment) score += 1;
    if (this.currentContent.contextualScenarios) score += 1;

    return Math.round((score / maxScore) * 100);
}

getMicrobiologyContentQualityMetrics() {
    return {
        completeness: this.calculateMicrobiologyContentCompleteness(),
        hasExamples: !!(this.currentContent?.examples || this.currentContent?.majorbacterialPathogens),
        hasComparisons: !!this.currentContent?.comparison,
        hasApplications: !!(this.currentContent?.applications || this.currentContent?.clinicalRelevance),
        hasContextualScenarios: !!this.currentContent?.contextualScenarios,
        detailLevel: this.explanationLevel,
        includesVisualizations: this.includeVisualizations,
        includesMisconceptions: this.includeCommonMisconceptions,
        includesExperiments: this.includeExperiments,
        adaptiveDifficulty: this.adaptiveDifficulty,
        metacognitiveSupport: this.metacognitiveSupport
    };
}

// ========================================
// LEARNING OBJECTIVES AND STUDY TIPS
// ========================================

generateMicrobiologyLearningObjectives() {
    if (!this.currentProblem) return [];

    const objectivesDatabase = {
        bacterial_structure: [
            "Describe the major components of bacterial cells",
            "Distinguish between Gram-positive and Gram-negative cell walls",
            "Explain the functions of flagella, pili, and capsules",
            "Relate bacterial structure to antibiotic mechanisms"
        ],
        microbial_growth: [
            "Describe the four phases of the bacterial growth curve",
            "Calculate generation time from growth data",
            "Explain how environmental factors affect microbial growth",
            "Describe different types of culture media and their uses"
        ],
        microbial_metabolism: [
            "Compare aerobic respiration, anaerobic respiration, and fermentation",
            "Explain the role of electron carriers in metabolism",
            "Describe different nutritional types of bacteria",
            "Relate microbial metabolism to industrial applications"
        ],
        microbial_genetics: [
            "Describe the mechanisms of horizontal gene transfer",
            "Explain how antibiotic resistance genes spread",
            "Compare bacterial chromosome and plasmids",
            "Describe types of mutations and their consequences"
        ],
        virology: [
            "Describe viral structure and classification",
            "Compare lytic and lysogenic cycles",
            "Explain how antiviral drugs work",
            "Relate viral replication to disease and treatment"
        ],
        medical_microbiology: [
            "Describe the steps of pathogenesis",
            "Explain different types of virulence factors",
            "Describe routes of disease transmission",
            "Explain principles of diagnosis and treatment"
        ]
    };

    return objectivesDatabase[this.currentProblem.type] || [
        "Understand key microbiology concepts",
        "Apply knowledge to clinical contexts",
        "Make connections between structure and function"
    ];
}

generateMicrobiologyStudyTips() {
    if (!this.currentProblem) return [];

    const studyTipsDatabase = {
        bacterial_structure: [
            "Draw and label bacterial cell diagrams",
            "Compare Gram-positive and Gram-negative side-by-side",
            "Practice Gram stain procedure mentally",
            "Create flashcards for surface structures and their functions"
        ],
        microbial_growth: [
            "Sketch growth curves and label phases",
            "Practice generation time calculations",
            "Create tables comparing environmental requirements",
            "Relate growth concepts to food safety scenarios"
        ],
        microbial_metabolism: [
            "Draw metabolic pathways step-by-step",
            "Track ATP production through each pathway",
            "Create comparison tables for different metabolic strategies",
            "Use mnemonics for fermentation products"
        ],
        microbial_genetics: [
            "Draw diagrams of conjugation, transformation, and transduction",
            "Create concept maps showing resistance gene spread",
            "Practice explaining gene transfer mechanisms aloud",
            "Relate genetic concepts to real resistance problems"
        ],
        virology: [
            "Draw viral structures and label components",
            "Create flowcharts for viral replication cycles",
            "Compare and contrast different virus types",
            "Relate viral biology to vaccine strategies"
        ],
        medical_microbiology: [
            "Use clinical cases to apply knowledge",
            "Create organism identification flowcharts",
            "Practice Gram stain and other diagnostic tests mentally",
            "Connect pathogen features to disease symptoms"
        ]
    };

    return studyTipsDatabase[this.currentProblem.type] || [
        "Review material regularly with active recall",
        "Create visual aids and diagrams",
        "Practice explaining concepts to others",
        "Relate concepts to real clinical scenarios"
    ];
}

// ========================================
// PREREQUISITES AND CONNECTIONS
// ========================================

identifyMicrobiologyPrerequisites() {
    if (!this.currentProblem) return [];

    const prerequisitesDatabase = {
        bacterial_structure: [
            "Basic cell biology (prokaryotes vs eukaryotes)",
            "Chemical bonding and molecular structure",
            "Microscopy basics"
        ],
        microbial_growth: [
            "Bacterial structure and function",
            "Basic mathematics (exponential functions, logarithms)",
            "Understanding of binary fission"
        ],
        microbial_metabolism: [
            "Basic biochemistry (ATP, redox reactions)",
            "Cellular respiration overview",
            "Enzyme function"
        ],
        microbial_genetics: [
            "DNA structure and replication",
            "Basic genetics (genotype vs phenotype)",
            "Understanding of mutations"
        ],
        virology: [
            "Nucleic acids (DNA and RNA)",
            "Protein structure",
            "Cell biology basics"
        ],
        medical_microbiology: [
            "Bacterial structure and classification",
            "Basic immunology",
            "Disease transmission concepts"
        ]
    };

    return prerequisitesDatabase[this.currentProblem.type] || [
        "General biology background",
        "Basic chemistry knowledge"
    ];
}

generateMicrobiologyContentSummary() {
    if (!this.currentContent) return null;

    const summary = {
        topic: this.currentContent.topic,
        category: this.currentContent.category,
        summary: this.currentContent.summary,
        keyPoints: [],
        coverage: {},
        difficulty: this.currentProblem?.difficulty
    };

    if (this.currentContent.keyDefinitions) {
        summary.keyPoints.push("Key terminology defined");
        summary.coverage.definitions = Object.keys(this.currentContent.keyDefinitions).length;
    }

    if (this.currentContent.cellStructure || this.currentContent.bacterialGenome) {
        summary.keyPoints.push("Structural components explained");
        summary.coverage.structure = true;
    }

    if (this.currentContent.pathogenesis || this.currentContent.virulenceFactors) {
        summary.keyPoints.push("Disease mechanisms described");
        summary.coverage.pathogenesis = true;
    }

    if (this.currentContent.examples || this.currentContent.majorbacterialPathogens) {
        const exampleCount = this.currentContent.examples?.length || 
                           Object.keys(this.currentContent.majorbacterialPathogens || {}).length;
        summary.coverage.examples = exampleCount;
    }

    return summary;
}

// ========================================
// WORKBOOK GENERATION METHODS
// ========================================

generateMicrobiologyWorkbook() {
    if (!this.currentContent || !this.currentProblem) return;

    const workbook = this.createWorkbookStructure();
    workbook.title = 'Microbiology Workbook';

    // Start diagram generation in background if needed
    if (this.includeDiagramsInWorkbook) {
        this.diagramsPromise = this.generateMicrobiologyDiagramDataAsync();
    }

    workbook.sections = [
        this.createProblemSection(),
        this.createContentOverviewSection(),
        this.createDetailedContentSection(),
        this.createDiagramsPlaceholderSection(),
        this.createComparisonsWorkbookSection(),
        this.createExamplesApplicationsSection(),
        this.createClinicalScenariosSection(),
        this.createPathogenProfilesSection(),
        this.createRelatedExperimentsWorkbookSection(),
        this.createMisconceptionsSection(),
        this.createMetacognitiveWorkbookSection(),
        this.createAssessmentSection()
    ].filter(section => section !== null);

    this.currentWorkbook = workbook;
}

generateExperimentWorkbook(experimentContent) {
    const workbook = this.createWorkbookStructure();
    workbook.title = 'Microbiology Experiment Workbook';

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
                this.microbiologyTopics[topic]?.name || topic,
                this.microbiologyTopics[topic]?.description || ''
            ])
        });
    }

    // Add safety section for lab experiments
    if (experimentContent.sections.some(s => s.type === 'lab_experiment')) {
        workbook.sections.push(this.createSafetySection());
    }

    this.currentWorkbook = workbook;
}

// Async helper that runs in background
async generateMicrobiologyDiagramDataAsync() {
    if (!this.currentContent) return;

    const { type } = this.currentProblem;

    // Get relevant diagram keys
    const diagramKeys = this.getRelevantMicrobiologyDiagrams(type);

    this.diagramData = {
        type: type,
        diagrams: diagramKeys,
        renderedImages: [],
        status: 'rendering',
        placeholder: false,
        note: "Microbiology diagrams"
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

createDiagramsPlaceholderSection() {
    if (!this.includeDiagramsInWorkbook) {
        return null;
    }

    return {
        title: 'Microbiology Diagrams',
        type: 'diagrams',
        status: 'loading',
        diagrams: [],
        note: 'Diagrams are being rendered...'
    };
}

updateDiagramsSection() {
    if (!this.currentWorkbook || !this.diagramData) return;

    const diagramSectionIndex = this.currentWorkbook.sections.findIndex(
        section => section.type === 'diagrams'
    );

    if (diagramSectionIndex === -1) return;

    const diagramSection = {
        title: 'Microbiology Diagrams',
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

async waitForDiagrams() {
    if (this.diagramsPromise) {
        await this.diagramsPromise;
    }
    return this.diagramData;
}

areDiagramsReady() {
    return this.diagramData && this.diagramData.status === 'complete';
}

getRelevantMicrobiologyDiagrams(topicType) {
    const diagramMap = {
        bacterial_structure: [
            "bacterialCell",
            "gramPositiveVsGramNegative",
            "bacterialFlagella",
            "endosporeStructure",
            "cellWallStructure"
        ],
        microbial_growth: [
            "growthCurve",
            "binaryFission",
            "cultureMedia",
            "streakPlateMethod"
        ],
        microbial_metabolism: [
            "cellularRespiration",
            "fermentationPathways",
            "electronTransportChain",
            "glycolysis"
        ],
        microbial_genetics: [
            "conjugation",
            "transformation",
            "transduction",
            "plasmidStructure",
            "dnaReplication"
        ],
        virology: [
            "virusStructure",
            "bacteriophageStructure",
            "lyticCycle",
            "lysogenicCycle",
            "viralReplication"
        ],
        immunology: [
            "antibodyStructure",
            "immuneResponse",
            "phagocytosis",
            "complementCascade"
        ],
        medical_microbiology: [
            "gramStainProcedure",
            "kochPostulates",
            "transmissionRoutes",
            "antibioticMechanisms"
        ],
        environmental_microbiology: [
            "nitrogenCycle",
            "carbonCycle",
            "wastewaterTreatment"
        ]
    };

    return diagramMap[topicType] || [];
}

createWorkbookStructure() {
    return {
        title: 'Microbiology Workbook',
        timestamp: new Date().toISOString(),
        theme: this.theme,
        dimensions: { width: this.width, height: this.height },
        learnerLevel: this.learnerProfile.currentLevel,
        sections: []
    };
}

// ========================================
// SECTION GENERATION METHODS
// ========================================

createProblemSection() {
    if (!this.currentProblem) return null;

    return {
        title: 'Problem Overview',
        type: 'problem',
        data: [
            ['Topic', this.currentProblem.originalTopic],
            ['Type', this.formatKey(this.currentProblem.type)],
            ['Category', this.microbiologyTopics[this.currentProblem.type]?.category || 'General'],
            ['Difficulty', this.currentProblem.difficulty],
            ['Prerequisites', (this.currentProblem.prerequisites || []).join(', ')],
            ['', ''],
            ['Learning Context', ''],
            ['Learner Level', this.learnerProfile.currentLevel],
            ['Mastered Topics', this.learnerProfile.masteredTopics.join(', ') || 'None yet'],
            ['Focus Areas', this.learnerProfile.strugglingTopics.join(', ') || 'None']
        ]
    };
}

createContentOverviewSection() {
    if (!this.currentContent) return null;

    const overviewData = [
        ['Topic', this.currentContent.topic],
        ['Category', this.currentContent.category],
        ['', ''],
        ['Summary', this.currentContent.summary]
    ];

    if (this.currentContent.keyDefinitions) {
        overviewData.push(['', '']);
        overviewData.push(['Key Definitions', '']);
        Object.entries(this.currentContent.keyDefinitions).slice(0, 5).forEach(([term, definition]) => {
            overviewData.push([`  ${term}`, definition]);
        });
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

    // Bacterial Structure
    if (this.currentContent.cellStructure) {
        sections.push({
            title: 'Bacterial Cell Structure',
            subsections: this.formatNestedContent(this.currentContent.cellStructure)
        });
    }

    // Growth information
    if (this.currentContent.growthCurve) {
        sections.push({
            title: 'Growth Phases',
            subsections: this.formatGrowthCurve(this.currentContent.growthCurve)
        });
    }

    // Environmental factors
    if (this.currentContent.environmentalFactors) {
        sections.push({
            title: 'Environmental Factors',
            subsections: this.formatEnvironmentalFactors(this.currentContent.environmentalFactors)
        });
    }

    // Metabolism
    if (this.currentContent.ATPGeneration || this.currentContent.aerobicRespiration) {
        sections.push({
            title: 'Microbial Metabolism',
            subsections: this.formatMetabolism(this.currentContent)
        });
    }

    // Genetics
    if (this.currentContent.horizontalGeneTransfer) {
        sections.push({
            title: 'Horizontal Gene Transfer',
            subsections: this.formatHorizontalGeneTransfer(this.currentContent.horizontalGeneTransfer)
        });
    }

    // Pathogenesis
    if (this.currentContent.pathogenesis) {
        sections.push({
            title: 'Pathogenesis',
            subsections: this.formatPathogenesis(this.currentContent.pathogenesis)
        });
    }

    // Virulence factors
    if (this.currentContent.virulenceFactors) {
        sections.push({
            title: 'Virulence Factors',
            subsections: this.formatVirulenceFactors(this.currentContent.virulenceFactors)
        });
    }

    // Viral structure and replication
    if (this.currentContent.viralStructure) {
        sections.push({
            title: 'Viral Biology',
            subsections: this.formatViralContent(this.currentContent)
        });
    }

    return {
        title: 'Detailed Content',
        type: 'detailed_content',
        sections: sections
    };
}

createComparisonsWorkbookSection() {
    if (!this.currentContent || !this.currentContent.comparison) return null;

    const comparisonData = [];

    Object.entries(this.currentContent.comparison).forEach(([key, value]) => {
        comparisonData.push([this.formatKey(key), '']);
        if (typeof value === 'object') {
            Object.entries(value).forEach(([subKey, subValue]) => {
                comparisonData.push([`  ${this.formatKey(subKey)}`, subValue]);
            });
        } else {
            comparisonData.push(['  ', value]);
        }
        comparisonData.push(['', '']);
    });

    return {
        title: 'Comparisons',
        type: 'comparisons',
        data: comparisonData
    };
}

createExamplesApplicationsSection() {
    if (!this.currentContent) return null;

    const data = [];

    if (this.currentContent.examples) {
        data.push(['Examples', '']);
        if (Array.isArray(this.currentContent.examples)) {
            this.currentContent.examples.forEach(example => {
                if (typeof example === 'object') {
                    Object.entries(example).forEach(([key, value]) => {
                        data.push([`  ${key}`, value]);
                    });
                    data.push(['', '']);
                } else {
                    data.push(['  •', example]);
                }
            });
        }
    }

    if (this.currentContent.applications) {
        data.push(['', '']);
        data.push(['Applications', '']);
        if (Array.isArray(this.currentContent.applications)) {
            this.currentContent.applications.forEach(app => {
                data.push(['  •', app]);
            });
        }
    }

    if (this.currentContent.clinicalRelevance) {
        data.push(['', '']);
        data.push(['Clinical Relevance', '']);
        if (Array.isArray(this.currentContent.clinicalRelevance)) {
            this.currentContent.clinicalRelevance.forEach(item => {
                data.push(['  •', item]);
            });
        }
    }

    if (data.length === 0) return null;

    return {
        title: 'Examples and Applications',
        type: 'examples_applications',
        data: data
    };
}

createClinicalScenariosSection() {
    if (!this.contextualLearning || !this.currentContent.contextualScenarios) return null;

    const scenarioData = [];

    this.currentContent.contextualScenarios.forEach((scenario, index) => {
        scenarioData.push([`Scenario ${index + 1}: ${scenario.scenario}`, '']);
        scenarioData.push(['  Context', scenario.context]);
        scenarioData.push(['  Application', scenario.application]);
        scenarioData.push(['  Question', scenario.question]);
        scenarioData.push(['', '']);
    });

    return {
        title: 'Clinical Scenarios',
        type: 'clinical_scenarios',
        data: scenarioData
    };
}

createPathogenProfilesSection() {
    if (!this.currentContent.majorbacterialPathogens) return null;

    const pathogenData = [];

    Object.entries(this.currentContent.majorbacterialPathogens).forEach(([pathogen, info]) => {
        pathogenData.push([pathogen, '']);
        Object.entries(info).forEach(([key, value]) => {
            if (typeof value === 'object') {
                pathogenData.push([`  ${this.formatKey(key)}:`, '']);
                Object.entries(value).forEach(([subKey, subValue]) => {
                    pathogenData.push([`    ${this.formatKey(subKey)}`, subValue]);
                });
            } else {
                pathogenData.push([`  ${this.formatKey(key)}`, value]);
            }
        });
        pathogenData.push(['', '']);
    });

    return {
        title: 'Major Bacterial Pathogens',
        type: 'pathogen_profiles',
        data: pathogenData
    };
}

createRelatedExperimentsWorkbookSection() {
    if (!this.includeExperiments || !this.currentContent.relatedExperiments) return null;

    const experimentData = [
        ['Related Laboratory Experiments', ''],
        ['', '']
    ];

    this.currentContent.relatedExperiments.forEach((exp, index) => {
        experimentData.push([`${index + 1}. ${exp.name}`, '']);
        experimentData.push(['   Category', exp.category]);
        if (exp.historicalScientist) {
            experimentData.push(['   Scientist', exp.historicalScientist]);
        }
        if (exp.labTitle) {
            experimentData.push(['   Lab Title', exp.labTitle]);
        }
        experimentData.push(['', '']);
    });

    return {
        title: 'Related Experiments',
        type: 'related_experiments',
        data: experimentData
    };
}

createSafetySection() {
    return {
        title: 'Laboratory Safety',
        type: 'safety',
        data: [
            ['General Safety Guidelines', ''],
            ['  •', 'Wear appropriate PPE (lab coat, gloves, safety goggles)'],
            ['  •', 'Work in biosafety cabinet when handling microorganisms'],
            ['  •', 'Use aseptic technique to prevent contamination'],
            ['  •', 'Sterilize all materials before and after use'],
            ['  •', 'Dispose of biological waste in appropriate containers'],
            ['  •', 'Never eat, drink, or apply cosmetics in the lab'],
            ['  •', 'Wash hands thoroughly before leaving the lab'],
            ['  •', 'Report all spills and accidents immediately'],
            ['', ''],
            ['Biosafety Levels', ''],
            ['  BSL-1', 'Low risk; standard microbiological practices'],
            ['  BSL-2', 'Moderate risk; BSL-1 + biosafety cabinet for aerosols'],
            ['  BSL-3', 'High risk; BSL-2 + respiratory protection, controlled access'],
            ['  BSL-4', 'Extreme risk; maximum containment, full body suit']
        ]
    };
}

createMisconceptionsSection() {
    if (!this.includeCommonMisconceptions || !this.currentProblem) return null;

    const misconceptions = this.commonMisconceptions[this.currentProblem.type];
    if (!misconceptions) return null;

    const data = [['Common Misconceptions and Clarifications', ''], ['', '']];

    Object.entries(misconceptions).forEach(([category, items]) => {
        data.push([category, '']);
        items.forEach(item => {
            data.push(['  ✗', item]);
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
    if (!this.metacognitiveSupport || !this.currentContent.metacognitivePrompts) return null;

    const data = [];

    Object.entries(this.currentContent.metacognitivePrompts).forEach(([phase, prompts]) => {
        data.push([this.formatKey(phase), '']);
        prompts.forEach(prompt => {
            data.push(['  •', prompt]);
        });
        data.push(['', '']);
    });

    return {
        title: 'Reflection and Metacognition',
        type: 'metacognitive',
        data: data
    };
}

createAssessmentSection() {
    if (!this.assessmentFeedback) return null;

    const assessmentData = [
        ['Learning Objectives', ''],
        ['', '']
    ];

    const objectives = this.generateMicrobiologyLearningObjectives();
    objectives.forEach((objective, index) => {
        assessmentData.push([`${index + 1}.`, objective]);
    });

    assessmentData.push(['', '']);
    assessmentData.push(['Study Tips', '']);
    assessmentData.push(['', '']);

    const studyTips = this.generateMicrobiologyStudyTips();
    studyTips.forEach(tip => {
        assessmentData.push(['  •', tip]);
    });

    assessmentData.push(['', '']);
    assessmentData.push(['Prerequisites', '']);
    assessmentData.push(['', '']);

    const prerequisites = this.identifyMicrobiologyPrerequisites();
    prerequisites.forEach(prereq => {
        assessmentData.push(['  •', prereq]);
    });

    return {
        title: 'Assessment and Study Guide',
        type: 'assessment',
        data: assessmentData
    };
}

// ========================================
// CONTENT FORMATTING HELPERS
// ========================================

formatNestedContent(content, indent = '') {
    const formatted = [];

    Object.entries(content).forEach(([key, value]) => {
        if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
            formatted.push({ title: this.formatKey(key), data: this.formatNestedContent(value, indent + '  ') });
        } else if (Array.isArray(value)) {
            formatted.push({
                title: this.formatKey(key),
                data: value.map(item => [indent + '  •', typeof item === 'object' ? JSON.stringify(item) : item])
            });
        } else {
            formatted.push({ title: this.formatKey(key), data: [[indent + '  ', value]] });
        }
    });

    return formatted;
}

formatGrowthCurve(growthCurve) {
    const formatted = [];

    Object.entries(growthCurve).forEach(([phase, data]) => {
        if (phase === 'overview') {
            formatted.push({
                title: 'Overview',
                data: [[data]]
            });
            return;
        }

        const phaseData = [
            ['Description', data.description || ''],
            ['Cell Number', data.cellNumber || ''],
            ['Duration', data.duration || '']
        ];

        if (data.characteristics && Array.isArray(data.characteristics)) {
            phaseData.push(['', '']);
            phaseData.push(['Characteristics', '']);
            data.characteristics.forEach(char => {
                phaseData.push(['  •', char]);
            });
        }

        if (data.causes && Array.isArray(data.causes)) {
            phaseData.push(['', '']);
            phaseData.push(['Causes', '']);
            data.causes.forEach(cause => {
                phaseData.push(['  •', cause]);
            });
        }

        formatted.push({
            title: this.formatKey(phase),
            data: phaseData
        });
    });

    return formatted;
}

formatEnvironmentalFactors(factors) {
    const formatted = [];

    Object.entries(factors).forEach(([factor, data]) => {
        const factorData = [];

        if (data.definition) {
            factorData.push(['Definition', data.definition]);
        }

        if (data.categories) {
            factorData.push(['', '']);
            factorData.push(['Categories', '']);
            Object.entries(data.categories).forEach(([category, info]) => {
                factorData.push([`  ${this.formatKey(category)}:`, '']);
                if (typeof info === 'object') {
                    Object.entries(info).forEach(([key, value]) => {
                        factorData.push([`    ${this.formatKey(key)}`, value]);
                    });
                } else {
                    factorData.push(['    ', info]);
                }
            });
        }

        formatted.push({
            title: this.formatKey(factor),
            data: factorData
        });
    });

    return formatted;
}

formatMetabolism(content) {
    const formatted = [];

    if (content.ATPGeneration) {
        formatted.push({
            title: 'ATP Generation',
            data: this.formatObjectToArray(content.ATPGeneration)
        });
    }

    if (content.aerobicRespiration) {
        formatted.push({
            title: 'Aerobic Respiration',
            data: this.formatObjectToArray(content.aerobicRespiration)
        });
    }

    if (content.anaerobicRespiration) {
        formatted.push({
            title: 'Anaerobic Respiration',
            data: this.formatObjectToArray(content.anaerobicRespiration)
        });
    }

    if (content.fermentation) {
        formatted.push({
            title: 'Fermentation',
            data: this.formatObjectToArray(content.fermentation)
        });
    }

    return formatted;
}

formatHorizontalGeneTransfer(hgt) {
    const formatted = [];

    Object.entries(hgt).forEach(([mechanism, data]) => {
        const mechanismData = [
            ['Definition', data.definition || '']
        ];

        if (data.process || data.steps) {
            mechanismData.push(['', '']);
            mechanismData.push(['Process', '']);
            const steps = data.process || data.steps;
            if (Array.isArray(steps)) {
                steps.forEach((step, index) => {
                    mechanismData.push([`  ${index + 1}.`, step]);
                });
            }
        }

        if (data.significance) {
            mechanismData.push(['', '']);
            mechanismData.push(['Significance', '']);
            if (Array.isArray(data.significance)) {
                data.significance.forEach(item => {
                    mechanismData.push(['  •', item]);
                });
            } else {
                mechanismData.push(['  ', data.significance]);
            }
        }

        formatted.push({
            title: this.formatKey(mechanism),
            data: mechanismData
        });
    });

    return formatted;
}

formatPathogenesis(pathogenesis) {
    const formatted = [];

    if (pathogenesis.definition) {
        formatted.push({
            title: 'Definition',
            data: [[pathogenesis.definition]]
        });
    }

    if (pathogenesis.steps) {
        Object.entries(pathogenesis.steps).forEach(([step, data]) => {
            const stepData = [
                ['Name', data.name || ''],
                ['Definition', data.definition || '']
            ];

            if (data.examples) {
                stepData.push(['', '']);
                stepData.push(['Examples', '']);
                Object.entries(data.examples).forEach(([key, value]) => {
                    stepData.push([`  ${this.formatKey(key)}`, value]);
                });
            }

            formatted.push({
                title: this.formatKey(step),
                data: stepData
            });
        });
    }

    return formatted;
}

formatVirulenceFactors(virulenceFactors) {
    const formatted = [];

    Object.entries(virulenceFactors).forEach(([factor, data]) => {
        const factorData = [];

        if (data.function || data.definition) {
            factorData.push(['Function', data.function || data.definition]);
        }

        if (data.examples) {
            factorData.push(['', '']);
            factorData.push(['Examples', '']);
            if (typeof data.examples === 'object' && !Array.isArray(data.examples)) {
                Object.entries(data.examples).forEach(([key, value]) => {
                    factorData.push([`  ${this.formatKey(key)}`, '']);
                    if (typeof value === 'object') {
                        Object.entries(value).forEach(([subKey, subValue]) => {
                            factorData.push([`    ${this.formatKey(subKey)}`, subValue]);
                        });
                    } else {
                        factorData.push(['    ', value]);
                    }
                });
            } else if (Array.isArray(data.examples)) {
                data.examples.forEach(example => {
                    factorData.push(['  •', example]);
                });
            }
        }

        formatted.push({
            title: this.formatKey(factor),
            data: factorData
        });
    });

    return formatted;
}

formatViralContent(content) {
    const formatted = [];

    if (content.viralStructure) {
        formatted.push({
            title: 'Viral Structure',
            data: this.formatObjectToArray(content.viralStructure)
        });
    }

    if (content.bacteriophages) {
        formatted.push({
            title: 'Bacteriophages',
            data: this.formatObjectToArray(content.bacteriophages)
        });
    }

    if (content.animalVirusReplication) {
        formatted.push({
            title: 'Animal Virus Replication',
            data: this.formatObjectToArray(content.animalVirusReplication)
        });
    }

    return formatted;
}

formatObjectToArray(obj, indent = '') {
    const formatted = [];

    Object.entries(obj).forEach(([key, value]) => {
        if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
            formatted.push([indent + this.formatKey(key), '']);
            formatted.push(...this.formatObjectToArray(value, indent + '  '));
        } else if (Array.isArray(value)) {
            formatted.push([indent + this.formatKey(key), '']);
            value.forEach(item => {
                formatted.push([indent + '  •', typeof item === 'object' ? JSON.stringify(item) : item]);
            });
        } else {
            formatted.push([indent + this.formatKey(key), value]);
        }
    });

    return formatted;
}

// ========================================
// DIAGRAM EXPORT AND MANAGEMENT
// ========================================

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

async exportAllDiagramsForTopic(outputDir = './diagrams') {
    await this.waitForDiagrams();

    if (!this.diagramData || !this.diagramData.diagrams) {
        throw new Error('No diagrams available for current topic');
    }

    const fs = await import('fs');
    const path = await import('path');

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

clearDiagramCache() {
    this.renderedDiagrams.clear();
    this.diagramsPromise = null;
    console.log('Diagram cache cleared');
}

getDiagramCacheStats() {
    return {
        cachedDiagrams: this.renderedDiagrams.size,
        cacheKeys: Array.from(this.renderedDiagrams.keys()),
        diagramsReady: this.areDiagramsReady(),
        status: this.diagramData?.status || 'not_started'
    };
}

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
        strugglingTopics: this.learnerProfile.strugglingTopics.length,
        topicType: this.currentProblem?.type,
        includesPathogenProfiles: !!this.currentContent?.majorbacterialPathogens,
        includesClinicalScenarios: !!this.currentContent?.contextualScenarios
    };
}



// Export the class
export default EnhancedMicrobiologyWorkbook;
