//Enhanced Cellular Division Workbook - Comprehensive Cell Division System
import { createCanvas, loadImage } from '@napi-rs/canvas';
import { BiologySvgDiagrams } from '../svg-data.js';
import { BiologyDiagramsRegistry} from '../registry.js';
import { BiologyDiagramsRenderer } from '../renderer.js';
import * as math from 'mathjs';

export class EnhancedCellularDivisionWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "cellular";
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

        this.cellularSymbols = this.initializeCellularSymbols();
        this.setThemeColors();
        this.initializeCellularTopics();
        this.initializeCellularLessons();
        this.initializeCellularExperiments();
        this.initializeMisconceptionDatabase();
        this.initializeMetacognitivePrompts();
        this.initializeContextualScenarios();
        this.initializeAssessmentRubrics();
    }

    setThemeColors() {
        const themes = {
            cellular: {
                background: '#ffffff',
                gridColor: '#b0b0b0',
                headerBg: '#1976d2',
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
                stepText: '#311b92',
                borderColor: '#42a5f5',
                contentBg: '#f3e5f5',
                contentText: '#4a148c',
                diagramBg: '#fce4ec',
                structureBg: '#e0f2f1',
                experimentBg: '#fff9c4',
                experimentText: '#f57f17',
                mitosisBg: '#ffebee',
                meiosisBg: '#e8f5e9',
                cellCycleBg: '#e1f5fe',
                chromosomeBg: '#f3e5f5'
            },
            division: {
                background: '#fafafa',
                gridColor: '#9e9e9e',
                headerBg: '#00796b',
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
                mitosisBg: '#ffebee',
                meiosisBg: '#e8f5e9',
                cellCycleBg: '#e1f5fe',
                chromosomeBg: '#f3e5f5'
            }
        };

        this.colors = themes[this.theme] || themes.cellular;
    }

    initializeCellularSymbols() {
        return {
            // Greek letters
            'alpha': 'α',
            'beta': 'β',
            'gamma': 'γ',
            'delta': 'Δ',
            'Delta': 'Δ',
            'lambda': 'λ',
            'mu': 'μ',
            'pi': 'π',
            
            // Arrows
            'arrow': '→',
            'reversible': '⇌',
            'doubleArrow': '↔',
            
            // Math symbols
            'plus': '+',
            'minus': '−',
            'plusminus': '±',
            'approximately': '≈',
            'proportional': '∝',
            'infinity': '∞',
            'degree': '°',
            'times': '×',
            'divide': '÷',
            
            // Cell cycle notation
            'G1': 'G₁',
            'G2': 'G₂',
            'S': 'S',
            'M': 'M',
            'G0': 'G₀',
            
            // Chromosome notation
            '2n': '2n',
            'n': 'n',
            '4n': '4n',
            '1n': '1n',
            
            // Common cellular abbreviations
            'DNA': 'DNA',
            'RNA': 'RNA',
            'ATP': 'ATP',
            'MPF': 'MPF',
            'CDK': 'CDK',
            'APC': 'APC',
            
            // Phase abbreviations
            'prophase': 'Prophase',
            'metaphase': 'Metaphase',
            'anaphase': 'Anaphase',
            'telophase': 'Telophase',
            'cytokinesis': 'Cytokinesis',
            'interphase': 'Interphase'
        };
    }

    initializeCellularTopics() {
        this.cellularTopics = {
            cell_cycle: {
                patterns: [
                    /cell.*cycle/i,
                    /interphase|G1|S.*phase|G2/i,
                    /cell.*cycle.*regulation/i,
                    /checkpoint/i,
                    /cyclin|CDK/i
                ],
                handler: this.handleCellCycle.bind(this),
                name: 'Cell Cycle and Regulation',
                category: 'cell_division',
                description: 'The ordered sequence of events in which a cell duplicates its contents and divides',
                difficulty: 'intermediate',
                prerequisites: ['cell_structure', 'DNA_structure', 'proteins']
            },
            
            mitosis: {
                patterns: [
                    /mitosis/i,
                    /prophase|metaphase|anaphase|telophase/i,
                    /mitotic.*spindle/i,
                    /sister.*chromatid/i,
                    /somatic.*cell.*division/i
                ],
                handler: this.handleMitosis.bind(this),
                name: 'Mitosis',
                category: 'cell_division',
                description: 'Nuclear division producing two genetically identical daughter cells',
                difficulty: 'intermediate',
                prerequisites: ['cell_cycle', 'chromosome_structure', 'DNA_replication']
            },
            
            meiosis: {
                patterns: [
                    /meiosis/i,
                    /meiosis.*I|meiosis.*II/i,
                    /crossing.*over|recombination/i,
                    /gamete.*formation|gametogenesis/i,
                    /reduction.*division/i,
                    /sexual.*reproduction/i
                ],
                handler: this.handleMeiosis.bind(this),
                name: 'Meiosis and Genetic Variation',
                category: 'cell_division',
                description: 'Specialized cell division producing four genetically unique haploid cells',
                difficulty: 'advanced',
                prerequisites: ['mitosis', 'chromosome_structure', 'genetics_basics']
            },
            
            chromosome_structure: {
                patterns: [
                    /chromosome.*structure/i,
                    /chromatin|nucleosome/i,
                    /sister.*chromatid|centromere|kinetochore/i,
                    /homologous.*chromosome/i,
                    /karyotype/i
                ],
                handler: this.handleChromosomeStructure.bind(this),
                name: 'Chromosome Structure and Organization',
                category: 'chromosome_biology',
                description: 'Organization of DNA into chromosomes and chromatin dynamics',
                difficulty: 'intermediate',
                prerequisites: ['DNA_structure', 'proteins', 'cell_nucleus']
            },
            
            cytokinesis: {
                patterns: [
                    /cytokinesis/i,
                    /cleavage.*furrow/i,
                    /cell.*plate/i,
                    /contractile.*ring/i,
                    /cytoplasmic.*division/i
                ],
                handler: this.handleCytokinesis.bind(this),
                name: 'Cytokinesis',
                category: 'cell_division',
                description: 'Division of the cytoplasm following nuclear division',
                difficulty: 'intermediate',
                prerequisites: ['cell_structure', 'cytoskeleton', 'mitosis']
            },
            
            cell_cycle_regulation: {
                patterns: [
                    /cell.*cycle.*control|regulation/i,
                    /checkpoint|restriction.*point/i,
                    /cyclin.*dependent.*kinase|CDK/i,
                    /p53|tumor.*suppressor/i,
                    /cancer.*cell.*cycle/i
                ],
                handler: this.handleCellCycleRegulation.bind(this),
                name: 'Cell Cycle Regulation and Cancer',
                category: 'cell_division',
                description: 'Molecular mechanisms controlling cell division and cancer development',
                difficulty: 'advanced',
                prerequisites: ['cell_cycle', 'signal_transduction', 'gene_regulation']
            },
            
            gametogenesis: {
                patterns: [
                    /gametogenesis|spermatogenesis|oogenesis/i,
                    /sperm.*formation|egg.*formation/i,
                    /gamete.*development/i
                ],
                handler: this.handleGametogenesis.bind(this),
                name: 'Gametogenesis',
                category: 'reproductive_biology',
                description: 'Formation of specialized reproductive cells (gametes)',
                difficulty: 'advanced',
                prerequisites: ['meiosis', 'cell_differentiation', 'reproductive_system']
            }
        };
    }

    initializeCellularLessons() {
        this.lessons = {
            cell_cycle: {
                title: "The Cell Cycle: Phases, Regulation, and Checkpoints",
                concepts: [
                    "The cell cycle consists of interphase (G₁, S, G₂) and M phase (mitosis + cytokinesis)",
                    "Interphase is the period of cell growth and DNA replication",
                    "Checkpoints ensure proper progression through the cell cycle",
                    "Cyclins and CDKs regulate cell cycle progression",
                    "Loss of cell cycle control leads to cancer"
                ],
                theory: "The cell cycle is an ordered sequence of events that allows cells to grow and divide. Understanding cell cycle regulation is crucial for comprehending normal development, tissue maintenance, and cancer biology.",
                keyDefinitions: {
                    "Cell Cycle": "The complete sequence of events from one cell division to the next",
                    "Interphase": "Period between cell divisions when cell grows and DNA replicates (G₁, S, G₂)",
                    "G₁ Phase": "Gap 1 - Cell growth and normal metabolic activities",
                    "S Phase": "Synthesis - DNA replication occurs",
                    "G₂ Phase": "Gap 2 - Continued growth and preparation for mitosis",
                    "M Phase": "Mitosis and cytokinesis - nuclear and cytoplasmic division",
                    "G₀ Phase": "Quiescent state - cells exit cell cycle temporarily or permanently",
                    "Checkpoint": "Control point where progression is halted until conditions are met",
                    "Cyclin": "Protein whose concentration varies during cell cycle",
                    "CDK (Cyclin-Dependent Kinase)": "Enzyme activated by cyclins that drives cell cycle events",
                    "MPF (Maturation Promoting Factor)": "Cyclin B-CDK1 complex that triggers entry into M phase"
                },
                
                phases: {
                    interphase: {
                        description: "Accounts for ~90% of cell cycle time",
                        G1: {
                            duration: "Variable (hours to years)",
                            events: [
                                "Cell growth and normal metabolism",
                                "Accumulation of enzymes for DNA synthesis",
                                "G₁ checkpoint (Restriction point in mammals)",
                                "Decision: proceed to S phase or enter G₀"
                            ],
                            checkpoint: "G₁/S checkpoint - checks for adequate size, nutrients, growth signals, DNA damage"
                        },
                        S: {
                            duration: "~6-8 hours in mammalian cells",
                            events: [
                                "DNA replication (2n → 4n DNA content)",
                                "Histone synthesis",
                                "Centrosome duplication",
                                "Each chromosome becomes two sister chromatids"
                            ],
                            result: "Cell has replicated genome but still one nucleus"
                        },
                        G2: {
                            duration: "~3-4 hours",
                            events: [
                                "Continued cell growth",
                                "Protein synthesis for mitosis",
                                "G₂ checkpoint",
                                "Accumulation of MPF (cyclin B-CDK1)"
                            ],
                            checkpoint: "G₂/M checkpoint - checks for complete DNA replication, DNA damage"
                        }
                    },
                    
                    Mphase: {
                        description: "Nuclear and cytoplasmic division",
                        duration: "~1 hour in mammalian cells",
                        components: {
                            mitosis: "Nuclear division (prophase, metaphase, anaphase, telophase)",
                            cytokinesis: "Cytoplasmic division"
                        },
                        checkpoint: "M checkpoint (spindle checkpoint) - ensures all chromosomes attached to spindle"
                    },
                    
                    G0: {
                        description: "Quiescent, non-dividing state",
                        types: {
                            reversible: "Liver cells, lymphocytes - can re-enter cycle with signals",
                            permanent: "Neurons, muscle cells - terminally differentiated"
                        }
                    }
                },
                
                regulation: {
                    cyclins: {
                        function: "Regulatory proteins that activate CDKs",
                        types: {
                            cyclinD: "G₁ phase - responds to growth signals",
                            cyclinE: "G₁/S transition",
                            cyclinA: "S phase and G₂",
                            cyclinB: "M phase (part of MPF)"
                        },
                        mechanism: "Cyclin levels oscillate - synthesis and degradation"
                    },
                    
                    CDKs: {
                        function: "Kinases that phosphorylate target proteins to drive cell cycle",
                        activation: "Requires binding to cyclin",
                        targets: "Transcription factors, nuclear envelope proteins, histone H1, etc.",
                        regulation: "Phosphorylation/dephosphorylation, inhibitory proteins (CKIs)"
                    },
                    
                    checkpoints: {
                        G1_checkpoint: {
                            location: "End of G₁",
                            checks: ["Cell size adequate?", "Nutrients available?", "Growth signals present?", "DNA damaged?"],
                            action: "If conditions not met → G₀ or apoptosis",
                            proteins: "p53, Rb (retinoblastoma protein)"
                        },
                        G2_checkpoint: {
                            location: "End of G₂",
                            checks: ["DNA fully replicated?", "DNA damaged?", "Cell large enough?"],
                            action: "Halt entry into mitosis if problems detected",
                            proteins: "p53, CDC25"
                        },
                        M_checkpoint: {
                            location: "Metaphase",
                            checks: ["All chromosomes attached to spindle?", "Chromosomes aligned at metaphase plate?"],
                            action: "Prevent anaphase until all kinetochores attached",
                            proteins: "Mad2, BubR1 (spindle assembly checkpoint proteins)"
                        }
                    }
                },
                
                cancer: {
                    definition: "Uncontrolled cell division due to loss of cell cycle regulation",
                    causes: {
                        oncogenes: "Mutated genes promoting cell division (e.g., Ras, Myc)",
                        tumorSuppressors: "Loss of genes inhibiting division (e.g., p53, Rb)",
                        checkpointFailure: "Cells with damaged DNA proceed through cycle"
                    },
                    examples: [
                        "p53 mutations: ~50% of cancers (cannot halt cycle for DNA repair)",
                        "Rb mutations: Retinoblastoma, other cancers",
                        "Cyclin overexpression: Excessive CDK activity"
                    ]
                },
                
                timing: {
                    typical: {
                        totalCycle: "~24 hours for rapidly dividing mammalian cells",
                        interphase: "~23 hours (G₁: variable, S: 6-8h, G₂: 3-4h)",
                        Mphase: "~1 hour"
                    },
                    variation: {
                        earlyEmbryo: "Very rapid cycles (30 min) - skip G₁ and G₂",
                        neurons: "Permanent G₀ - never divide",
                        liverCells: "Slow division normally, rapid when needed (regeneration)"
                    }
                },
                
                applications: [
                    "Cancer treatment targeting rapidly dividing cells",
                    "Understanding developmental biology and aging",
                    "Tissue engineering and regenerative medicine",
                    "Agricultural biotechnology (plant propagation)",
                    "Research on cellular senescence and immortalization"
                ]
            },

            mitosis: {
                title: "Mitosis: Stages, Mechanisms, and Significance",
                concepts: [
                    "Mitosis produces two genetically identical diploid daughter cells",
                    "Mitosis consists of prophase, metaphase, anaphase, and telophase (PMAT)",
                    "The mitotic spindle ensures equal distribution of chromosomes",
                    "Mitosis is essential for growth, repair, and asexual reproduction",
                    "Errors in mitosis can lead to aneuploidy and cancer"
                ],
                theory: "Mitosis is a precisely orchestrated process that distributes replicated chromosomes equally to two daughter cells. This process is fundamental for development, growth, tissue maintenance, and wound healing in multicellular organisms.",
                
                keyDefinitions: {
                    "Mitosis": "Nuclear division producing two genetically identical daughter nuclei",
                    "Sister Chromatids": "Two identical copies of a chromosome joined at centromere",
                    "Centromere": "Region where sister chromatids are joined; kinetochore attaches here",
                    "Kinetochore": "Protein structure on centromere where spindle fibers attach",
                    "Mitotic Spindle": "Microtubule structure that segregates chromosomes",
                    "Spindle Fiber": "Microtubule extending from centrosome/spindle pole",
                    "Aster": "Radial array of short microtubules extending from centrosome",
                    "Cleavage Furrow": "Indentation forming during animal cell cytokinesis",
                    "Cell Plate": "Structure forming during plant cell cytokinesis",
                    "Chromosome Condensation": "Tightening of chromatin into visible chromosomes"
                },
                
                stages: {
                    prophase: {
                        duration: "~30-60 minutes",
                        events: [
                            "Chromatin condenses into visible chromosomes (each = 2 sister chromatids)",
                            "Centrioles move to opposite poles (in animal cells)",
                            "Mitotic spindle begins to form",
                            "Nuclear envelope starts to break down (late prophase)",
                            "Nucleolus disappears"
                        ],
                        molecular: [
                            "Condensin proteins compact chromatin",
                            "MPF (cyclin B-CDK1) phosphorylates lamins → nuclear envelope breakdown",
                            "Motor proteins move centrosomes along microtubules"
                        ],
                        visualCue: "Chromosomes become visible; nucleus still present"
                    },
                    
                    prometaphase: {
                        description: "Transition phase (sometimes considered late prophase)",
                        events: [
                            "Nuclear envelope fully fragments",
                            "Kinetochores appear at centromeres",
                            "Spindle microtubules attach to kinetochores",
                            "Chromosomes begin moving toward metaphase plate"
                        ],
                        molecular: [
                            "Kinetochore assembly on centromeres",
                            "Dynamic instability of microtubules allows 'search and capture'",
                            "Tension stabilizes correct attachments"
                        ]
                    },
                    
                    metaphase: {
                        duration: "~20 minutes",
                        events: [
                            "Chromosomes align at metaphase plate (cell equator)",
                            "Each sister chromatid attached to opposite spindle poles",
                            "Spindle checkpoint activated",
                            "Cell pauses until all chromosomes properly attached"
                        ],
                        molecular: [
                            "Mad2 and BubR1 monitor kinetochore attachment",
                            "Unattached kinetochores produce 'wait' signal",
                            "When all attached → APC/C activated"
                        ],
                        visualCue: "Chromosomes lined up in middle of cell",
                        checkpoint: "Spindle checkpoint - most important to prevent aneuploidy"
                    },
                    
                    anaphase: {
                        duration: "~10 minutes",
                        events: [
                            "Sister chromatids separate at centromere",
                            "Chromatids (now chromosomes) move to opposite poles",
                            "Two mechanisms: anaphase A (chromosome movement) and anaphase B (pole separation)"
                        ],
                        molecular: [
                            "APC/C degrades securin → separase active",
                            "Separase cleaves cohesin proteins holding sister chromatids",
                            "Motor proteins (dynein, kinesin) pull chromosomes",
                            "Microtubule depolymerization at kinetochores"
                        ],
                        anaphaseA: "Shortening of kinetochore microtubules → chromosomes to poles",
                        anaphaseB: "Lengthening of polar microtubules → poles apart",
                        visualCue: "Chromatids moving to opposite ends; V or Y shape"
                    },
                    
                    telophase: {
                        duration: "~20-30 minutes",
                        events: [
                            "Chromosomes arrive at poles and begin to decondense",
                            "Nuclear envelopes reform around chromosome sets",
                            "Nucleoli reappear",
                            "Spindle disassembles",
                            "Cleavage furrow begins (animal) or cell plate forms (plant)"
                        ],
                        molecular: [
                            "Dephosphorylation of lamins → nuclear envelope reassembly",
                            "Cyclin B degraded → CDK1 inactivated → exit from mitosis",
                            "Chromosome decondensation as condensins released"
                        ],
                        visualCue: "Two nuclei forming; cell beginning to pinch"
                    },
                    
                    cytokinesis: {
                        description: "Cytoplasmic division (overlaps with telophase)",
                        animalCells: {
                            mechanism: "Cleavage furrow",
                            process: [
                                "Contractile ring of actin and myosin forms at cell equator",
                                "Ring contracts, pinching cell in two",
                                "Midbody forms (residual spindle microtubules)",
                                "Abscission completes separation"
                            ],
                            proteins: "Actin, myosin II, anillin, RhoA"
                        },
                        plantCells: {
                            mechanism: "Cell plate formation",
                            process: [
                                "Vesicles from Golgi align at metaphase plate",
                                "Vesicles fuse to form cell plate",
                                "Cell plate grows outward to cell wall",
                                "New cell wall and plasma membrane complete"
                            ],
                            proteins: "Phragmoplast (microtubules), kinesin motors",
                            reason: "Rigid cell wall prevents cleavage furrow"
                        }
                    }
                },
                
                spindle: {
                    components: {
                        centrosomes: "Microtubule organizing centers (MTOCs) in animal cells",
                        spindlepoles: "Ends of spindle (centrosomes or spindle pole bodies)",
                        microtubules: {
                            kinetochore: "Attach to kinetochores on chromosomes",
                            polar: "Overlap at metaphase plate; push poles apart",
                            astral: "Anchor spindle to cell cortex; position spindle"
                        }
                    },
                    formation: {
                        animalCells: "Centrosomes nucleate microtubules",
                        plantCells: "No centrosomes; microtubules nucleate from multiple sites",
                        mechanism: "Dynamic instability - growth and shrinkage of microtubules"
                    },
                    function: [
                        "Capture chromosomes via kinetochores",
                        "Move chromosomes to metaphase plate",
                        "Segregate sister chromatids in anaphase",
                        "Position cleavage furrow"
                    ]
                },
                
                significance: {
                    growth: "Increase cell number during development and growth",
                    repair: "Replace damaged or dead cells (wound healing)",
                    asexualReproduction: "Single-celled organisms, vegetative reproduction in plants",
                    tissueRenewal: "Constant replacement (skin, blood, intestinal lining)",
                    geneticIdentity: "Maintains genetic consistency across cell populations"
                },
                
                errors: {
                    nondisjunction: {
                        definition: "Failure of sister chromatids to separate in anaphase",
                        result: "One daughter cell: extra chromosome; other: missing chromosome",
                        consequence: "Aneuploidy (abnormal chromosome number)"
                    },
                    laggingChromosomes: "Chromosomes not properly attached, lag during anaphase",
                    multipolarSpindles: "More than two spindle poles → unequal division",
                    consequences: [
                        "Cell death (apoptosis)",
                        "Senescence (permanent G₀)",
                        "Continued division → cancer (if checkpoints fail)"
                    ]
                },
                
                comparison: {
                    mitosisVsMeiosis: {
                        purpose: "Growth/repair vs gamete formation",
                        divisions: "One vs two",
                        daughterCells: "Two identical 2n vs four unique 1n",
                        recombination: "No vs yes (crossing over)",
                        location: "Somatic cells vs germ cells"
                    }
                },
                
                applications: [
                    "Cancer research and chemotherapy development",
                    "Stem cell biology and regenerative medicine",
                    "Plant cloning and tissue culture",
                    "Understanding developmental disorders",
                    "Wound healing and tissue engineering"
                ]
            },

            meiosis: {
                title: "Meiosis: Reduction Division and Genetic Diversity",
                concepts: [
                    "Meiosis consists of two divisions: meiosis I (reduction) and meiosis II (separation)",
                    "Meiosis I separates homologous chromosomes; meiosis II separates sister chromatids",
                    "Crossing over and independent assortment generate genetic variation",
                    "Meiosis produces four haploid (n) gametes from one diploid (2n) cell",
                    "Errors in meiosis cause chromosomal disorders"
                ],
                theory: "Meiosis is a specialized cell division that reduces chromosome number by half and generates genetic diversity through recombination and independent assortment. This process is essential for sexual reproduction and evolution.",
                
                keyDefinitions: {
                    "Meiosis": "Two-division process producing four haploid cells from one diploid cell",
                    "Homologous Chromosomes": "Pair of chromosomes (one maternal, one paternal) with same genes",
                    "Synapsis": "Pairing of homologous chromosomes in prophase I",
                    "Bivalent (Tetrad)": "Paired homologous chromosomes (4 chromatids total)",
                    "Crossing Over": "Exchange of DNA segments between homologous chromosomes",
                    "Chiasma (pl. Chiasmata)": "Point where crossing over occurred; holds homologs together",
                    "Recombination": "Production of new gene combinations via crossing over",
                    "Independent Assortment": "Random distribution of homologous pairs into gametes",
                    "Reduction Division": "Meiosis I - reduces chromosome number from 2n to n"
                },
                
                meiosisI: {
                    title: "Meiosis I - Reduction Division (Separates Homologous Chromosomes)",
                    result: "Two haploid cells (but chromosomes still as sister chromatids)",
                    
                    prophaseI: {
                        duration: "Can last days to years (depending on organism)",
                        substages: "Leptotene, Zygotene, Pachytene, Diplotene, Diakinesis",
                        events: [
                            "Chromosomes condense",
                            "Homologous chromosomes pair (synapsis)",
                            "Synaptonemal complex forms between homologs",
                            "Crossing over occurs between non-sister chromatids",
                            "Chiasmata visible as homologs begin to separate",
                            "Nuclear envelope breaks down",
                            "Spindle forms"
                        ],
                        molecular: [
                            "Synaptonemal complex proteins (SC proteins) mediate synapsis",
                            "SPO11 enzyme creates DNA double-strand breaks",
                            "Homologous recombination machinery repairs breaks → crossover",
                            "At least one crossover per chromosome pair (usually 2-3)"
                        ],
                        significance: "Crossing over is THE source of genetic recombination",
                        substagesDetail: {
                            leptotene: "Chromosomes condense; homology search begins",
                            zygotene: "Synapsis begins (homologs pair)",
                            pachytene: "Synapsis complete; crossing over occurs",
                            diplotene: "Synaptonemal complex dissolves; chiasmata visible",
                            diakinesis: "Chromosomes fully condensed; ready for metaphase"
                        }
                    },
                    
                    metaphaseI: {
                        events: [
                            "Bivalents align at metaphase plate",
                            "Homologous chromosomes oriented to opposite poles",
                            "Spindle fibers attach to kinetochores",
                            "Spindle checkpoint activated"
                        ],
                        key: "Homologous pairs (not individual chromosomes) at plate",
                        orientation: "Random - source of independent assortment"
                    },
                    
                    anaphaseI: {
                        events: [
                            "Homologous chromosomes separate and move to opposite poles",
                            "Sister chromatids REMAIN attached at centromere",
                            "Chiasmata resolved"
                        ],
                        key: "Homologs separate (NOT sister chromatids)",
                        result: "Each pole has haploid number (n) but chromosomes = 2 chromatids"
                    },
                    
                    telophaseI: {
                        events: [
                            "Chromosomes arrive at poles",
                            "Nuclear envelopes may reform (depends on species)",
                            "Cytokinesis occurs",
                            "Chromosomes may decondense slightly"
                        ],
                        result: "Two haploid cells",
                        note: "Cells are haploid (n) but still have 2n DNA content (sister chromatids)"
                    },
                    
                    interkinesis: {
                        description: "Brief pause between meiosis I and II",
                        events: "No DNA replication! (critical difference from mitosis)",
                        duration: "Variable; may be very brief or absent"
                    }
                },
                
                meiosisII: {
                    title: "Meiosis II - Equational Division (Like Mitosis)",
                    result: "Four haploid cells with n chromosomes (1 chromatid each)",
                    
                    prophaseII: {
                        events: [
                            "Chromosomes condense (if decondensed)",
                            "Spindle forms",
                            "Nuclear envelope breaks down (if reformed)"
                        ]
                    },
                    
                    metaphaseII: {
                        events: [
                            "Chromosomes align at metaphase plate",
                            "Sister chromatids oriented to opposite poles",
                            "Spindle checkpoint activated"
                        ]
                    },
                    
                    anaphaseII: {
                        events: [
                            "Sister chromatids separate at centromere",
                            "Now-individual chromatids (chromosomes) move to poles"
                        ],
                        key: "Sister chromatids separate (like mitosis anaphase)"
                    },
                    
                    telophaseII: {
                        events: [
                            "Chromosomes arrive at poles and decondense",
                            "Nuclear envelopes reform",
                            "Cytokinesis occurs"
                        ],
                        result: "Four haploid (n) cells, each genetically unique"
                    }
                },
                
                geneticVariation: {
                    mechanisms: {
                        crossingOver: {
                            description: "Exchange of DNA between homologous chromosomes in prophase I",
                            frequency: "2-3 crossovers per chromosome pair on average",
                            result: "Recombinant chromosomes with new allele combinations",
                            calculation: "With n crossovers, potential combinations are vast"
                        },
                        independentAssortment: {
                            description: "Random orientation of homologous pairs at metaphase I",
                            calculation: "2ⁿ possible combinations (n = haploid number)",
                            human: "2²³ = 8,388,608 possible gametes from one person (without crossing over!)",
                            result: "Each gamete receives random mix of maternal/paternal chromosomes"
                        },
                        randomFertilization: {
                            description: "Any sperm can fertilize any egg",
                            calculation: "(2ⁿ)² possible offspring from two parents",
                            human: "(2²³)² = ~70 trillion possible combinations"
                        }
                    },
                    totalVariation: "Crossing over + independent assortment + random fertilization = virtually unlimited genetic diversity"
                },
                
                comparison: {
                    meiosisIMitosis: {
                        synapsis: "Yes (meiosis I only) vs No",
                        crossingOver: "Yes (meiosis I only) vs No",
                        centromeresSeparate: "No in meiosis I vs Yes in mitosis",
                        result: "Haploid cells vs Diploid cells"
                    },
                    meiosisIIMitosis: {
                        similarity: "Both separate sister chromatids",
                        difference: "Meiosis II starts with haploid cell; mitosis with diploid",
                        DNAreplication: "No S phase before meiosis II vs Yes before mitosis"
                    }
                },
                
                errors: {
                    nondisjunction: {
                        meiosisI: "Homologous chromosomes fail to separate → gametes with n+1 and n-1",
                        meiosisII: "Sister chromatids fail to separate → gametes with n+1 and n-1",
                        result: "Aneuploidy in offspring"
                    },
                    humanDisorders: {
                        trisomy21: "Down syndrome - extra chromosome 21 (usually from meiosis I error)",
                        trisomy18: "Edwards syndrome - extra chromosome 18",
                        trisomy13: "Patau syndrome - extra chromosome 13",
                        turnerSyndrome: "XO (45 chromosomes) - missing sex chromosome",
                        klinefelterSyndrome: "XXY (47 chromosomes) - extra X chromosome",
                        XXX: "Triple X syndrome",
                        XYY: "XYY syndrome"
                    },
                    risk: "Increases with maternal age (especially after 35)"
                },
                
                significance: {
                    sexualReproduction: "Maintains constant chromosome number across generations",
                    geneticDiversity: "Creates variation essential for evolution and adaptation",
                    recombination: "Breaks linkage between genes on same chromosome",
                    purifyingSelection: "Allows elimination of deleterious mutations"
                },
                
                applications: [
                    "Understanding genetic disorders and prenatal testing",
                    "Genetic counseling for chromosomal abnormalities",
                    "Plant and animal breeding programs",
                    "Evolutionary biology and population genetics",
                    "Fertility research and assisted reproduction"
                ]
            },

            chromosome_structure: {
                title: "Chromosome Structure: From DNA to Metaphase Chromosome",
                concepts: [
                    "DNA is packaged into chromatin through multiple levels of organization",
                    "Nucleosomes are the basic unit of chromatin (DNA + histone octamer)",
                    "Chromatin exists in euchromatin (loose) and heterochromatin (compact) forms",
                    "Chromosomes are most condensed during metaphase of cell division",
                    "Chromosome structure is dynamic and regulated"
                ],
                theory: "Chromosome structure represents the hierarchical organization of DNA, allowing ~2 meters of DNA to fit into a nucleus ~10 μm in diameter. Understanding chromatin structure is essential for comprehending gene regulation, DNA replication, and chromosome segregation.",
                
                keyDefinitions: {
                    "Chromatin": "Complex of DNA and proteins (primarily histones) in nucleus",
                    "Chromosome": "Condensed, organized structure of chromatin visible during cell division",
                    "Nucleosome": "DNA wrapped around histone octamer (147 bp DNA)",
                    "Histone": "Small, positively charged protein that DNA wraps around",
                    "Histone Octamer": "Core of nucleosome (2 each of H2A, H2B, H3, H4)",
                    "Linker DNA": "DNA between nucleosomes (~20-80 bp)",
                    "Histone H1": "Linker histone that binds to DNA between nucleosomes",
                    "30-nm Fiber": "Higher-order chromatin structure (solenoid model)",
                    "Euchromatin": "Loosely packed chromatin; transcriptionally active",
                    "Heterochromatin": "Tightly packed chromatin; transcriptionally silent",
                    "Centromere": "Constricted region where sister chromatids join; kinetochore attachment site",
                    "Kinetochore": "Protein complex assembled on centromere; spindle fiber attachment",
                    "Telomere": "Repetitive DNA sequences at chromosome ends (protect from degradation)",
                    "Sister Chromatids": "Two identical copies of replicated chromosome joined at centromere",
                    "Homologous Chromosomes": "Chromosome pairs (one maternal, one paternal) with same genes"
                },
                
                packagingLevels: {
                    level1: {
                        name: "DNA Double Helix",
                        diameter: "2 nm",
                        description: "Naked DNA - double helix structure",
                        length: "~2 meters total in human cell (46 chromosomes)"
                    },
                    level2: {
                        name: "Nucleosomes ('Beads on a String')",
                        diameter: "11 nm",
                        description: "DNA wrapped 1.65 turns around histone octamer",
                        structure: {
                            histoneCore: "Octamer of H2A, H2B, H3, H4 (2 copies each)",
                            DNAwrapped: "147 base pairs",
                            linkerDNA: "20-80 bp between nucleosomes"
                        },
                        compaction: "~6-fold compared to naked DNA"
                    },
                    level3: {
                        name: "30-nm Fiber (Chromatin Fiber)",
                        diameter: "30 nm",
                        description: "Nucleosomes coiled into solenoid structure",
                        stabilization: "Histone H1 and other proteins",
                        compaction: "~40-fold total"
                    },
                    level4: {
                        name: "Higher-Order Loops",
                        diameter: "300 nm",
                        description: "30-nm fiber forms loops attached to protein scaffold",
                        scaffold: "Non-histone proteins (condensin, cohesin, topoisomerase II)",
                        compaction: "~400-fold"
                    },
                    level5: {
                        name: "Condensed Chromatin (Interphase)",
                        description: "Further folding into distinct chromosome territories",
                        forms: {
                            euchromatin: "Loosely packed, accessible, gene-rich, transcribed",
                            heterochromatin: "Tightly packed, inaccessible, gene-poor, silent"
                        }
                    },
                    level6: {
                        name: "Metaphase Chromosome",
                        diameter: "700-1400 nm",
                        description: "Maximally condensed form visible by light microscopy",
                        compaction: "~10,000-fold overall",
                        features: "Two sister chromatids joined at centromere"
                    }
                },
                
                chromosomeRegions: {
                    centromere: {
                        function: "Sister chromatid cohesion and kinetochore assembly",
                        structure: {
                            DNA: "Repetitive sequences (α-satellite DNA in humans)",
                            proteins: "CENP-A (histone H3 variant), CENP-C, other CENPs"
                        },
                        kinetochore: {
                            function: "Attachment site for spindle microtubules",
                            structure: "Protein complex with inner and outer plates",
                            role: "Chromosome movement during division"
                        },
                        types: {
                            monocentric: "One centromere per chromosome (most eukaryotes)",
                            holocentric: "Centromere along entire length (some nematodes, insects)"
                        }
                    },
                    
                    telomeres: {
                        function: "Protect chromosome ends from degradation and fusion",
                        structure: {
                            DNA: "Repetitive sequences (TTAGGG)n in humans (~2,000-20,000 bp)",
                            proteins: "Shelterin complex (TRF1, TRF2, POT1, etc.)"
                        },
                        endReplicationProblem: {
                            issue: "DNA polymerase cannot fully replicate 3' ends",
                            consequence: "Telomeres shorten with each division",
                            solution: "Telomerase enzyme (reverse transcriptase) extends telomeres"
                        },
                        significance: {
                            normalCells: "Telomeres shorten → senescence after ~50 divisions (Hayflick limit)",
                            stemCells: "Telomerase active → unlimited divisions",
                            cancerCells: "Telomerase reactivated → immortalization"
                        }
                    },
                    
                    arms: {
                        pArm: "Short arm (from French 'petit')",
                        qArm: "Long arm",
                        separation: "Centromere position divides arms",
                        banding: "G-banding reveals unique pattern for each chromosome"
                    }
                },
                
                chromatinStates: {
                    euchromatin: {
                        structure: "Loosely packed, 'beads on string' visible",
                        accessibility: "DNA accessible to transcription factors",
                        transcription: "Actively transcribed genes",
                        histoneModifications: "Acetylation (H3K9ac, H3K27ac), methylation (H3K4me3)",
                        location: "Interior of nucleus, away from periphery"
                    },
                    heterochromatin: {
                        constitutive: {
                            description: "Always condensed",
                            location: "Centromeres, telomeres",
                            function: "Structural; maintains chromosome integrity",
                            mark: "H3K9me3"
                        },
                        facultative: {
                            description: "Can be condensed or open (context-dependent)",
                            example: "Inactive X chromosome (Barr body) in female mammals",
                            mark: "H3K27me3",
                            regulation: "Developmentally regulated"
                        }
                    }
                },
                
                chromatinRemodeling: {
                    purpose: "Regulate DNA accessibility for transcription, replication, repair",
                    mechanisms: {
                        histoneModification: {
                            acetylation: "Neutralizes positive charge → loosens DNA-histone binding → activation",
                            methylation: "Can activate or repress (context-dependent)",
                            phosphorylation: "Often associated with transcription or DNA damage response",
                            enzymes: "HATs (histone acetyltransferases), HDACs (histone deacetylases), HMTs, etc."
                        },
                        ATPdependentRemodeling: {
                            complexes: "SWI/SNF, ISWI, CHD, INO80",
                            function: "Use ATP to slide, eject, or restructure nucleosomes",
                            result: "Expose or hide DNA sequences"
                        },
                        histoneVariants: {
                            H2AZ: "Transcription regulation, DNA repair",
                            H3_3: "Active transcription",
                            CENP_A: "Centromere-specific (replaces H3)"
                        }
                    }
                },
                
                karyotype: {
                    definition: "Complete set of chromosomes in a cell, arranged and numbered",
                    preparation: [
                        "Arrest cells in metaphase (colchicine blocks spindle)",
                        "Hypotonic solution swells cells",
                        "Fix and stain chromosomes",
                        "Photograph and arrange by size, centromere position"
                    ],
                    human: {
                        total: "46 chromosomes (23 pairs)",
                        autosomes: "22 pairs (numbered 1-22 by size)",
                        sexChromosomes: "XX (female) or XY (male)",
                        notation: "46,XX or 46,XY (normal)"
                    },
                    clinical: "Detect chromosomal abnormalities (aneuploidies, translocations, deletions)"
                },
                
                applications: [
                    "Prenatal diagnosis of chromosomal disorders",
                    "Cancer cytogenetics (detect translocations, amplifications)",
                    "Epigenetics research (histone modifications, DNA methylation)",
                    "Gene therapy vector design",
                    "Understanding evolution and comparative genomics"
                ]
            },

            cytokinesis: {
                title: "Cytokinesis: Mechanisms of Cytoplasmic Division",
                concepts: [
                    "Cytokinesis divides the cytoplasm after nuclear division",
                    "Animal and plant cells use different mechanisms due to structural differences",
                    "Cytokinesis is coordinated with mitosis/meiosis but is a separate process",
                    "Errors in cytokinesis can produce binucleate or multinucleate cells",
                    "Cytokinesis is essential for complete cell division"
                ],
                theory: "Cytokinesis is the physical separation of the cytoplasm following nuclear division (mitosis or meiosis). The mechanism differs fundamentally between animal and plant cells due to the presence of a rigid cell wall in plants.",
                
                keyDefinitions: {
                    "Cytokinesis": "Division of the cytoplasm following nuclear division",
                    "Cleavage Furrow": "Contractile ring-mediated invagination in animal cells",
                    "Contractile Ring": "Actin-myosin structure that pinches cell in two",
                    "Cell Plate": "New cell wall forming between plant daughter cells",
                    "Phragmoplast": "Microtubule structure guiding vesicle fusion in plant cytokinesis",
                    "Midbody": "Remnant of spindle microtubules at site of abscission",
                    "Abscission": "Final membrane severing to complete cell separation"
                },
                
                animalCytokinesis: {
                    mechanism: "Cleavage furrow via contractile ring",
                    
                    timing: "Begins in late anaphase, completes in telophase",
                    
                    positioning: {
                        signal: "Astral microtubules and central spindle specify furrow position",
                        location: "Perpendicular to spindle axis, at cell equator (former metaphase plate)",
                        molecules: "RhoA GTPase concentrated at furrow site"
                    },
                    
                    contractileRing: {
                        composition: "Actin filaments + myosin II motor proteins",
                        assembly: [
                            "RhoA activated at cell equator",
                            "RhoA activates formins and other actin nucleators",
                            "Actin filaments and myosin II assemble into ring"
                        ],
                        contraction: [
                            "Myosin II walks along actin filaments",
                            "Ring contracts, pulling membrane inward",
                            "Cleavage furrow deepens progressively"
                        ],
                        regulation: "RhoA (GTPase), anillin, septins, ECT2"
                    },
                    
                    stages: {
                        initiation: "Contractile ring assembles at cell equator",
                        ingression: "Ring contracts, furrow deepens",
                        midbodyFormation: "Narrow cytoplasmic bridge remains with central spindle remnants",
                        abscission: "Final membrane severing by ESCRT-III complex"
                    },
                    
                    midbody: {
                        structure: "Dense structure of bundled microtubules",
                        components: "Remnants of central spindle, plus various proteins",
                        function: "Guides final abscission",
                        fate: "Can be inherited by one daughter cell or degraded"
                    },
                    
                    abscission: {
                        timing: "Can occur hours after furrowing",
                        machinery: "ESCRT-III complex (Endosomal Sorting Complex Required for Transport)",
                        mechanism: "Membrane-severing machinery from inside cell",
                        checkpoint: "Abscission checkpoint ensures no DNA in bridge"
                    }
                },
                
                plantCytokinesis: {
                    mechanism: "Cell plate formation",
                    
                    reason: "Rigid cell wall prevents cleavage furrow",
                    
                    timing: "Begins in telophase",
                    
                    phragmoplast: {
                        structure: "Array of microtubules and ER perpendicular to division plane",
                        function: "Scaffold for vesicle delivery and fusion",
                        formation: "Derived from spindle microtubules",
                        dynamics: "Expands outward from center to cell periphery"
                    },
                    
                    cellPlateFolation: {
                        step1: "Golgi-derived vesicles transported to phragmoplast",
                        step2: "Vesicles align at former metaphase plate",
                        step3: "Vesicles fuse to form tubular network",
                        step4: "Network matures into fenestrated sheet",
                        step5: "Membrane fusion completes, forming two continuous plasma membranes",
                        step6: "Cell wall materials deposited between membranes"
                    },
                    
                    cellWallSynthesis: {
                        primary: "Vesicles contain pectin, hemicellulose, cellulose precursors",
                        middleLamella: "Pectin-rich layer between daughter cells",
                        maturation: "Primary cell wall deposited, then secondary wall (if needed)"
                    },
                    
                    expansion: {
                        centrifugal: "Cell plate grows outward from center",
                        guidance: "Phragmoplast microtubules guide vesicle fusion",
                        completion: "Fuses with parent cell wall at periphery"
                    }
                },
                
                comparison: {
                    animalVsPlant: {
                        mechanism: "Cleavage (pinching) vs Cell plate (building)",
                        direction: "Centripetal (inward) vs Centrifugal (outward)",
                        cytoskeleton: "Actin-myosin vs Microtubules",
                        reason: "No cell wall vs Rigid cell wall",
                        result: "Two separate cells vs Two cells in same wall"
                    }
                },
                
                coordination: {
                    withMitosis: "Cytokinesis triggered by anaphase signals but proceeds independently",
                    MPFinactivation: "Exit from mitosis (CDK1 inactivation) allows cytokinesis",
                    spatialCues: "Central spindle specifies furrow position",
                    temporalCues: "Anaphase onset triggers cytokinesis initiation"
                },
                
                errors: {
                    failureTypes: {
                        complete: "No cytokinesis → binucleate cell",
                        asymmetric: "Unequal division (normal in some cells, e.g., oocyte)",
                        furrowRegression: "Furrow forms but regresses → failed division"
                    },
                    consequences: {
                        binucleate: "Cell with two nuclei (polyploid)",
                        multinucleate: "Repeated failure → multiple nuclei (e.g., muscle fibers intentional)",
                        cancer: "Failed cytokinesis can contribute to aneuploidy"
                    },
                    examples: {
                        physiological: "Muscle cells (syncytium), osteoclasts (multinucleate)",
                        pathological: "Some cancer cells, tetraploid intermediate in tumorigenesis"
                    }
                },
                
                specialCases: {
                    asymmetricDivision: {
                        examples: "Oocyte meiosis (unequal cytokinesis → large egg + small polar body)",
                        purpose: "Maximize cytoplasm in one cell",
                        mechanism: "Asymmetric positioning of spindle and furrow"
                    },
                    incompleteUnokesis: {
                        examples: "Drosophila embryo (syncytial blastoderm), plant endosperm",
                        description: "Multiple nuclei share common cytoplasm",
                        purpose: "Rapid nuclear division without cell division"
                    }
                },
                
                applications: [
                    "Understanding cancer progression (polyploidy)",
                    "Regenerative medicine (control of cell division)",
                    "Agricultural biotechnology (polyploid crops)",
                    "Drug development (chemotherapy targeting cytokinesis)",
                    "Developmental biology (asymmetric divisions in stem cells)"
                ]
            },

            cell_cycle_regulation: {
                title: "Cell Cycle Regulation: Checkpoints, Cyclins, and Cancer",
                concepts: [
                    "Cell cycle is regulated by cyclins and cyclin-dependent kinases (CDKs)",
                    "Checkpoints ensure fidelity of cell division",
                    "Tumor suppressors (p53, Rb) and oncogenes regulate cell cycle",
                    "Loss of cell cycle control is a hallmark of cancer",
                    "Multiple regulatory mechanisms ensure genomic stability"
                ],
                theory: "Precise regulation of the cell cycle is essential for maintaining genomic integrity and preventing uncontrolled proliferation. Understanding these control mechanisms is crucial for cancer biology and developing targeted therapies.",
                
                keyDefinitions: {
                    "Cyclin": "Regulatory protein that activates CDKs; levels oscillate through cell cycle",
                    "CDK (Cyclin-Dependent Kinase)": "Enzyme that phosphorylates target proteins when bound to cyclin",
                    "MPF (M-Phase Promoting Factor)": "Cyclin B-CDK1 complex that triggers mitosis",
                    "Checkpoint": "Control mechanism that halts cycle progression until conditions are met",
                    "Tumor Suppressor": "Gene/protein that inhibits cell division or promotes apoptosis",
                    "Oncogene": "Mutated gene promoting uncontrolled cell division",
                    "p53": "Tumor suppressor protein; 'guardian of the genome'",
                    "Rb (Retinoblastoma Protein)": "Tumor suppressor controlling G₁/S transition",
                    "CKI (CDK Inhibitor)": "Protein that inhibits CDK activity (e.g., p21, p27)",
                    "APC/C (Anaphase Promoting Complex/Cyclosome)": "E3 ubiquitin ligase targeting cyclins for degradation"
                },
                
                cyclinsAndCDKs: {
                    overview: "Cyclins and CDKs drive cell cycle transitions",
                    
                    mechanism: {
                        cyclinSynthesis: "Cyclin proteins synthesized at specific cell cycle phases",
                        CDKactivation: "Cyclin binding activates CDK",
                        phosphorylation: "Active cyclin-CDK phosphorylates target proteins",
                        cyclinDegradation: "Ubiquitin-mediated proteolysis destroys cyclins",
                        result: "CDK levels constant; cyclin levels oscillate"
                    },
                    
                    types: {
                        G1_cyclins: {
                            cyclins: "Cyclin D",
                            CDK: "CDK4, CDK6",
                            function: "Respond to growth signals; phosphorylate Rb",
                            target: "Rb protein → release E2F transcription factors"
                        },
                        G1_S_cyclins: {
                            cyclins: "Cyclin E",
                            CDK: "CDK2",
                            function: "Commit cell to DNA replication",
                            target: "Proteins for DNA synthesis, origin licensing"
                        },
                        S_cyclins: {
                            cyclins: "Cyclin A",
                            CDK: "CDK2",
                            function: "DNA replication, prevent re-replication",
                            target: "Replication proteins, E2F"
                        },
                        M_cyclins: {
                            cyclins: "Cyclin A, Cyclin B",
                            CDK: "CDK1 (also called CDC2)",
                            function: "Trigger and maintain mitosis (MPF)",
                            target: "Nuclear lamins, condensins, histone H1, APC/C activators"
                        }
                    },
                    
                    regulation: {
                        synthesis: "Transcriptional regulation of cyclin genes",
                        degradation: "APC/C and SCF ubiquitin ligases",
                        inhibition: "CKIs (p21, p27, p57, INK4 family)",
                        phosphorylation: "Activating (CAK) and inhibitory (Wee1, Myt1) phosphorylations on CDKs"
                    }
                },
                
                checkpoints: {
                    G1_checkpoint: {
                        altName: "Restriction point (R point) in mammals; Start in yeast",
                        location: "Late G₁, before S phase",
                        question: "Is environment favorable? DNA damaged?",
                        checks: [
                            "Cell size adequate?",
                            "Sufficient nutrients?",
                            "Growth signals present?",
                            "DNA damage absent?"
                        ],
                        passSignal: "Cyclin D-CDK4/6 phosphorylates Rb → E2F released → S phase genes ON",
                        failSignal: "p53 activated (if DNA damage) → p21 blocks CDKs → G₁ arrest or apoptosis",
                        keyProteins: "Rb, p53, p21, Cyclin D, CDK4/6, E2F",
                        significance: "Most important checkpoint; once passed, cell committed to division"
                    },
                    
                    G2_checkpoint: {
                        altName: "G₂/M checkpoint",
                        location: "End of G₂, before mitosis",
                        question: "Is DNA fully replicated? Any damage?",
                        checks: [
                            "DNA replication complete?",
                            "DNA damage repaired?",
                            "Cell size sufficient?"
                        ],
                        passSignal: "Cyclin B-CDK1 (MPF) activated → entry into mitosis",
                        failSignal: "p53 pathway halts cycle; DNA repair mechanisms activated",
                        keyProteins: "p53, Cyclin B, CDK1, Wee1 (inhibits CDK1), CDC25 (activates CDK1)",
                        regulation: "Wee1 keeps CDK1 inactive until checkpoint passed; CDC25 phosphatase then activates"
                    },
                    
                    M_checkpoint: {
                        altName: "Spindle assembly checkpoint (SAC)",
                        location: "Metaphase",
                        question: "Are all chromosomes properly attached to spindle?",
                        checks: [
                            "All kinetochores attached to spindle microtubules?",
                            "Chromosomes under proper tension?",
                            "Chromosomes aligned at metaphase plate?"
                        ],
                        passSignal: "APC/C activated → securin degraded → separase active → cohesin cleaved → anaphase",
                        failSignal: "Mad2, BubR1 inhibit APC/C → metaphase arrest",
                        keyProteins: "Mad2, BubR1, Bub3, Mps1, APC/C, securin, separase",
                        significance: "Prevents aneuploidy by ensuring equal chromosome segregation"
                    }
                },
                
                tumorSuppressors: {
                    p53: {
                        nickname: "'Guardian of the genome'",
                        function: "Transcription factor activated by stress (DNA damage, hypoxia, oncogene activation)",
                        normalRole: {
                            activation: "ATM/ATR kinases phosphorylate p53 in response to DNA damage",
                            targets: [
                                "p21 → CDK inhibition → cell cycle arrest (G₁ or G₂)",
                                "DNA repair genes → attempt to fix damage",
                                "Bax, PUMA → apoptosis if damage unrepairable",
                                "p21 → senescence (permanent G₀)"
                            ]
                        },
                        mutations: {
                            frequency: "Mutated in ~50% of human cancers",
                            consequence: "Loss of checkpoint control → accumulation of mutations",
                            syndromes: "Li-Fraumeni syndrome (inherited p53 mutation) → high cancer risk"
                        },
                        regulation: "Normally kept low by MDM2 (ubiquitin ligase); stress stabilizes p53"
                    },
                    
                    Rb: {
                        fullName: "Retinoblastoma protein",
                        function: "Controls G₁/S transition by regulating E2F transcription factors",
                        normalRole: {
                            inactive: "Hypophosphorylated Rb binds E2F → blocks S phase genes",
                            active: "Cyclin D-CDK4/6 phosphorylates Rb → E2F released → S phase genes expressed",
                            commitment: "Once Rb hyperphosphorylated, cell passes restriction point"
                        },
                        mutations: {
                            loss: "Both alleles lost → uncontrolled E2F → uncontrolled S phase entry",
                            syndrome: "Retinoblastoma (eye cancer in children) from inherited Rb mutation",
                            cancers: "Also involved in lung, breast, bladder cancers"
                        }
                    },
                    
                    others: {
                        p16INK4a: "CDK inhibitor; blocks cyclin D-CDK4/6",
                        p21: "CDK inhibitor; induced by p53",
                        PTEN: "Phosphatase opposing PI3K/Akt growth pathway",
                        APC: "Adenomatous polyposis coli; regulates Wnt signaling; mutated in colon cancer"
                    }
                },
                
                oncogenes: {
                    definition: "Genes that promote cell division; cancer when mutated/overexpressed",
                    
                    examples: {
                        Ras: {
                            normal: "GTPase in growth signaling pathway",
                            mutant: "Constitutively active (always 'ON') → constant growth signal",
                            cancers: "Mutated in ~30% of cancers (pancreatic ~90%, colon ~50%)"
                        },
                        Myc: {
                            normal: "Transcription factor promoting cell cycle genes",
                            mutant: "Overexpressed or amplified → excessive proliferation",
                            cancers: "Burkitt lymphoma (translocation), many others"
                        },
                        CyclinD: {
                            normal: "G₁ cyclin responding to growth signals",
                            mutant: "Overexpressed or amplified → hyperphosphorylation of Rb",
                            cancers: "Breast cancer, lymphomas"
                        },
                        ErbB2_HER2: {
                            normal: "Growth factor receptor",
                            mutant: "Overexpressed → excessive signaling",
                            cancers: "Breast cancer (~20% of cases)",
                            therapy: "Herceptin (trastuzumab) targets HER2"
                        }
                    },
                    
                    mechanisms: {
                        pointMutation: "Single amino acid change (Ras)",
                        geneAmplification: "Multiple copies of gene (Myc, HER2)",
                        chromosomeTranslocation: "Gene placed under strong promoter (Myc in Burkitt lymphoma)",
                        viralInsertion: "Viral promoter drives oncogene expression"
                    }
                },
                
                cancerHallmarks: {
                    cellCycleRelated: [
                        "Sustained proliferative signaling (oncogenes activated)",
                        "Evading growth suppressors (tumor suppressors lost)",
                        "Resisting cell death (apoptosis defects)",
                        "Enabling replicative immortality (telomerase reactivation)",
                        "Genome instability (checkpoint defects)"
                    ],
                    multiStepModel: "Cancer requires multiple mutations (oncogene activation + tumor suppressor loss)"
                },
                
                applications: [
                    "Cancer diagnosis (detect p53 mutations, HER2 overexpression)",
                    "Targeted cancer therapy (CDK inhibitors, HER2 antibodies)",
                    "Chemotherapy development (target rapidly dividing cells)",
                    "Prognostic markers (p53 status, Ki-67 proliferation index)",
                    "Understanding aging and cellular senescence"
                ]
            },

            gametogenesis: {
                title: "Gametogenesis: Formation of Sperm and Eggs",
                concepts: [
                    "Gametogenesis produces haploid gametes (sperm and eggs) via meiosis",
                    "Spermatogenesis and oogenesis differ significantly in timing and outcomes",
                    "Spermatogenesis produces four functional sperm per precursor cell",
                    "Oogenesis produces one functional egg and polar bodies per precursor cell",
                    "Errors in gametogenesis lead to infertility and genetic disorders"
                ],
                theory: "Gametogenesis is the process of gamete formation through meiosis and cellular differentiation. Understanding these processes is essential for reproductive biology, fertility medicine, and prenatal genetics.",
                
                keyDefinitions: {
                    "Gametogenesis": "Formation of gametes (sex cells) through meiosis",
                    "Spermatogenesis": "Formation of sperm in males",
                    "Oogenesis": "Formation of eggs (ova) in females",
                    "Germ Cell": "Cell that gives rise to gametes",
                    "Spermatogonium": "Diploid stem cell in testis",
                    "Primary Spermatocyte": "Cell undergoing meiosis I",
                    "Secondary Spermatocyte": "Cell after meiosis I, before meiosis II",
                    "Spermatid": "Haploid cell after meiosis II",
                    "Spermiogenesis": "Differentiation of spermatid into mature sperm",
                    "Oogonium": "Diploid stem cell in ovary",
                    "Primary Oocyte": "Cell arrested in prophase I",
                    "Secondary Oocyte": "Cell after meiosis I, arrested in metaphase II",
                    "Polar Body": "Small cell with discarded chromosomes",
                    "Zona Pellucida": "Glycoprotein layer surrounding oocyte",
                    "Corona Radiata": "Layer of follicle cells surrounding oocyte"
                },
                
                spermatogenesis: {
                    location: "Seminiferous tubules of testis",
                    duration: "~74 days in humans",
                    timing: "Begins at puberty, continues throughout life",
                    
                    stages: {
                        mitosis: {
                            cells: "Spermatogonia (2n) divide mitotically",
                            types: {
                                typeA: "Stem cells (self-renewing)",
                                typeB: "Differentiate into primary spermatocytes"
                            },
                            result: "Maintains stem cell pool + produces spermatocytes"
                        },
                        meiosisI: {
                            cell: "Primary spermatocyte (2n, 4c DNA)",
                            process: "Meiosis I (reduction division)",
                            result: "Two secondary spermatocytes (n, 2c DNA)",
                            duration: "~24 days (mostly prophase I)"
                        },
                        meiosisII: {
                            cell: "Secondary spermatocyte (n, 2c)",
                            process: "Meiosis II",
                            result: "Four spermatids (n, 1c DNA)",
                            duration: "~1 day"
                        },
                        spermiogenesis: {
                            cell: "Round spermatid",
                            process: "Differentiation into mature sperm",
                            changes: [
                                "Acrosome formation (from Golgi) - contains enzymes for egg penetration",
                                "Flagellum development - for motility",
                                "Mitochondria arrangement - midpiece for energy",
                                "Nucleus condensation - chromatin super-compacted with protamines",
                                "Cytoplasm reduction - excess cytoplasm shed (residual body)"
                            ],
                            result: "Mature spermatozoon",
                            duration: "~24 days"
                        },
                        spermiation: {
                            process: "Release of mature sperm into seminiferous tubule lumen",
                            maturation: "Further maturation in epididymis (gain motility and fertilization capacity)"
                        }
                    },
                    
                    spermStructure: {
                        head: {
                            nucleus: "Highly condensed chromatin (protamines replace histones)",
                            acrosome: "Cap containing hydrolytic enzymes (hyaluronidase, acrosin)"
                        },
                        midpiece: {
                            mitochondria: "Spiral arrangement around flagellum",
                            centriole: "Anchors flagellum"
                        },
                        tail: {
                            flagellum: "9+2 microtubule arrangement",
                            function: "Propulsion for motility"
                        }
                    },
                    
                    efficiency: "Four functional sperm per spermatogonium",
                    production: "~1,500 sperm/second in adult human male",
                    
                    regulation: {
                        hormones: {
                            FSH: "Stimulates Sertoli cells → support spermatogenesis",
                            LH: "Stimulates Leydig cells → testosterone production",
                            testosterone: "Required for spermatogenesis"
                        },
                        sertoliCells: "Nurse cells providing nutrients and hormonal support",
                        bloodTestisBarrier: "Tight junctions between Sertoli cells protect developing sperm"
                    }
                },
                
                oogenesis: {
                    location: "Ovarian follicles",
                    duration: "Years to decades (depending on stage)",
                    timing: "Begins before birth, completes at fertilization",
                    
                    stages: {
                        prenatal: {
                            timing: "During fetal development",
                            process: "Oogonia (2n) undergo mitosis",
                            result: "~7 million primary oocytes formed by 5th month",
                            arrest: "Primary oocytes arrest in prophase I",
                            atresia: "Most degenerate; ~400,000 remain at birth"
                        },
                        puberty: {
                            timing: "Monthly from puberty to menopause (~450 oocytes ovulated)",
                            process: "FSH stimulates follicle development",
                            resumption: "One primary oocyte per month resumes meiosis I",
                            meiosisI: {
                                cell: "Primary oocyte (2n, 4c)",
                                completion: "Just before ovulation",
                                result: "Secondary oocyte (n, 2c) + first polar body (n, 2c)",
                                asymmetry: "Unequal cytokinesis - oocyte keeps most cytoplasm"
                            },
                            arrest2: "Secondary oocyte arrests in metaphase II",
                            ovulation: "Secondary oocyte (metaphase II) released from follicle"
                        },
                        fertilization: {
                            trigger: "Sperm entry",
                            completion: "Meiosis II completes",
                            result: "Mature ovum (n, 1c) + second polar body (n, 1c)",
                            ifNoFertilization: "Secondary oocyte degenerates within 24 hours"
                        }
                    },
                    
                    polarBodies: {
                        formation: "Small cells receiving chromosomes but minimal cytoplasm",
                        fate: "Degenerate (no function)",
                        purpose: "Discard extra chromosomes while keeping cytoplasm in egg"
                    },
                    
                    oocyteStructure: {
                        size: "Large (~100 μm diameter in humans) - 1000x larger than sperm",
                        cytoplasm: "Rich in nutrients, mRNA, proteins, organelles",
                        zonaPellucida: "Glycoprotein layer (ZP1, ZP2, ZP3) - species-specific sperm binding",
                        coronaRadiata: "Surrounding follicle cells (cumulus cells)"
                    },
                    
                    efficiency: "One functional egg (+ 2-3 polar bodies) per oogonium",
                    
                    regulation: {
                        hormones: {
                            FSH: "Follicle development",
                            LH: "Triggers ovulation and completion of meiosis I",
                            estrogen: "Produced by developing follicle",
                            progesterone: "Produced by corpus luteum after ovulation"
                        },
                        menstrualCycle: "Coordinated with ovarian cycle"
                    }
                },
                
                comparison: {
                    spermatogenesisVsOogenesis: {
                        location: "Testis vs Ovary",
                        timing: "Puberty onward vs Before birth to fertilization",
                        duration: "~74 days continuous vs Years with arrests",
                        production: "Millions daily vs 1 per month",
                        efficiency: "4 functional gametes vs 1 functional gamete",
                        cytokinesis: "Equal vs Unequal",
                        gameteSize: "Small vs Large",
                        motility: "Motile vs Non-motile",
                        arrests: "None vs Prophase I and Metaphase II"
                    }
                },
                
                errors: {
                    nondisjunction: {
                        risk: "Increases with maternal age (especially after 35)",
                        reason: "Cohesin proteins holding chromatids degrade over time",
                        meiosisI: "Homologous chromosomes fail to separate",
                        meiosisII: "Sister chromatids fail to separate",
                        result: "Aneuploidy (wrong number of chromosomes)"
                    },
                    disorders: {
                        downSyndrome: "Trisomy 21 (extra chromosome 21)",
                        edwardsSyndrome: "Trisomy 18",
                        patauSyndrome: "Trisomy 13",
                        turnerSyndrome: "XO (45 chromosomes)",
                        klinefelterSyndrome: "XXY (47 chromosomes)"
                    },
                    infertility: {
                        male: "Low sperm count, motility issues, morphology defects",
                        female: "Anovulation, age-related decline, premature ovarian failure"
                    }
                },
                
                applications: [
                    "Assisted reproductive technology (IVF, ICSI)",
                    "Prenatal genetic screening and diagnosis",
                    "Fertility preservation (sperm/egg freezing)",
                    "Understanding age-related fertility decline",
                    "Contraceptive development",
                    "Genetic counseling for chromosomal disorders"
                ]
            }
        };
    }

    

initializeMisconceptionDatabase() {
        this.commonMisconceptions = {
            cell_cycle: {
                'Phases and Timing': [
                    'Thinking cells are always dividing (most time spent in interphase, many in G₀)',
                    'Believing interphase is "resting" (actually very active - growth, DNA replication)',
                    'Confusing G₁, G₂ with "Gap" meaning nothing happens (Growth phases, very active)',
                    'Thinking S phase only duplicates chromosomes (also duplicates centrosomes, organelles)',
                    'Believing all cells have same cell cycle length (varies: embryo ~30min, neuron ~never)'
                ],
                'Checkpoints': [
                    'Thinking checkpoints speed up cell cycle (they slow/halt until conditions met)',
                    'Believing checkpoint = stage of cell cycle (checkpoints are control points between stages)',
                    'Confusing restriction point with a physical barrier (molecular decision point)',
                    'Thinking cells can divide without passing checkpoints (checkpoint failure → cancer)'
                ],
                'DNA Content': [
                    'Confusing chromosome number with DNA amount (G₁: 2n chromosomes, 2c DNA; G₂: 2n chromosomes, 4c DNA)',
                    'Thinking DNA doubles in G₂ (doubles in S phase; G₂ has 4c but same chromosome number)',
                    'Believing chromosome number changes in S phase (number stays 2n; each becomes 2 sister chromatids)'
                ]
            },
            
            mitosis: {
                'Chromosome Behavior': [
                    'Thinking chromosomes are always visible (only condensed during mitosis)',
                    'Confusing sister chromatids with homologous chromosomes (sisters = identical copies; homologs = maternal/paternal pair)',
                    'Believing chromosomes split lengthwise in mitosis (centromeres split; sister chromatids separate)',
                    'Thinking each chromosome has different genetic information (sisters are identical until mutation)',
                    'Confusing chromatid with chromosome (before anaphase: chromosome = 2 chromatids; after: 1 chromatid = 1 chromosome)'
                ],
                'Stages': [
                    'Thinking prophase comes after metaphase (PMAT order: Prophase, Metaphase, Anaphase, Telophase)',
                    'Believing metaphase = middle of mitosis timewise (actually brief stage; prophase is longest)',
                    'Confusing nuclear envelope breakdown with cell membrane breakdown (nuclear only)',
                    'Thinking cytokinesis is part of mitosis (cytokinesis follows mitosis; separate process)',
                    'Believing telophase reverses prophase exactly (similar but includes cytokinesis beginning)'
                ],
                'Spindle': [
                    'Thinking spindle fibers are ropes that pull (microtubules that grow/shrink dynamically)',
                    'Believing plant cells have centrosomes (they don\'t; nucleate microtubules from multiple sites)',
                    'Confusing kinetochore with centromere (centromere = DNA region; kinetochore = protein complex)',
                    'Thinking all spindle microtubules attach to chromosomes (kinetochore, polar, astral types)'
                ],
                'Results': [
                    'Believing mitosis creates genetic variation (produces identical cells; meiosis creates variation)',
                    'Thinking mitosis produces four cells (produces two; meiosis produces four)',
                    'Confusing mitosis with cell division (mitosis = nuclear division; + cytokinesis = cell division)'
                ]
            },
            
            meiosis: {
                'Meiosis vs Mitosis': [
                    'Thinking meiosis is just mitosis twice (two divisions but with unique events like crossing over)',
                    'Believing meiosis I and II are identical (I separates homologs; II separates sisters)',
                    'Confusing which division reduces chromosome number (meiosis I reduces from 2n to n)',
                    'Thinking meiosis occurs in all cells (only in germ cells for gamete production)'
                ],
                'Crossing Over': [
                    'Believing crossing over occurs between sister chromatids (occurs between NON-sister chromatids of homologs)',
                    'Thinking crossing over happens in meiosis II (only in prophase I)',
                    'Confusing crossing over with independent assortment (crossing over = exchange within chromosome; independent assortment = random chromosome distribution)',
                    'Believing chiasmata and crossing over are different (chiasma is visible evidence of crossing over)',
                    'Thinking all chromatids cross over (varies; typically 1-3 crossovers per chromosome pair)'
                ],
                'Genetic Variation': [
                    'Believing meiosis alone creates variation (meiosis + fertilization)',
                    'Thinking variation only from crossing over (also independent assortment and mutations)',
                    'Confusing recombination frequency with mutation rate (recombination = rearranging existing alleles)',
                    'Believing 2²³ is total variation (that\'s just independent assortment; crossing over adds much more)'
                ],
                'Chromosome Number': [
                    'Thinking haploid = half the DNA (haploid = half chromosome number; DNA amount varies by stage)',
                    'Confusing n and 1c (n = chromosome number; c = DNA content)',
                    'Believing cells after meiosis I are haploid with half DNA (n chromosomes but 2c DNA - still sister chromatids)',
                    'Thinking gametes are 1n and 1c (correct: n chromosomes, 1c DNA content)'
                ]
            },
            
            chromosome_structure: {
                'Chromatin vs Chromosomes': [
                    'Thinking chromatin and chromosomes are different substances (chromosome = condensed chromatin)',
                    'Believing chromosomes only exist during division (chromatin always present; maximally condensed in metaphase)',
                    'Confusing euchromatin with heterochromatin functions (euchromatin = active genes; heterochromatin = silent)',
                    'Thinking DNA is naked in nucleus (always associated with histones and other proteins)'
                ],
                'Sister Chromatids': [
                    'Believing sister chromatids are different (they\'re identical copies joined at centromere)',
                    'Confusing sister chromatids with homologous chromosomes (sisters = identical; homologs = similar but not identical)',
                    'Thinking centromere is a structure (it\'s a DNA region where kinetochore assembles)',
                    'Believing all chromosomes have centromere in middle (metacentric, submetacentric, acrocentric, telocentric)'
                ],
                'DNA Packaging': [
                    'Thinking DNA is just wrapped randomly around histones (precise 1.65 turns per nucleosome)',
                    'Believing all DNA equally accessible (euchromatin accessible; heterochromatin not)',
                    'Confusing histone with DNA (histones = proteins; DNA wraps around them)',
                    'Thinking nucleosome = nucleus (nucleosome = histone + DNA unit; nucleus = organelle)'
                ],
                'Telomeres': [
                    'Believing telomeres contain genes (repetitive non-coding sequences)',
                    'Thinking telomerase is always active (only in stem cells, germ cells, cancer cells normally)',
                    'Confusing telomere shortening with aging (correlation not causation; both linked to division number)',
                    'Believing telomeres shorten in all cells (only in dividing cells; neurons don\'t divide)'
                ]
            },
            
            cytokinesis: {
                'Mechanism': [
                    'Thinking cytokinesis is part of mitosis (separate but coordinated process)',
                    'Believing all organisms use same cytokinesis mechanism (animal cleavage vs plant cell plate)',
                    'Confusing contractile ring with spindle (actin-myosin vs microtubules)',
                    'Thinking plant cell plate cuts from outside in (builds from center outward)'
                ],
                'Animal vs Plant': [
                    'Believing plant cells can form cleavage furrow (cell wall prevents this)',
                    'Thinking animal cells form cell plate (no cell wall to build)',
                    'Confusing phragmoplast with spindle (phragmoplast guides cell plate; from spindle remnants)',
                    'Believing both mechanisms equally fast (plant typically slower due to cell wall synthesis)'
                ],
                'Timing': [
                    'Thinking cytokinesis starts after telophase (begins in late anaphase)',
                    'Believing cytokinesis completes at same time as mitosis (can extend beyond telophase)',
                    'Confusing furrow formation with complete separation (abscission occurs later)'
                ]
            },
            
            cell_cycle_regulation: {
                'Cyclins and CDKs': [
                    'Thinking cyclins are constant (they oscillate - synthesized and degraded)',
                    'Believing CDKs oscillate (CDK levels constant; activity controlled by cyclins)',
                    'Confusing cyclin with cyclin-dependent kinase (cyclin = regulatory protein; CDK = enzyme)',
                    'Thinking MPF is a checkpoint (it\'s cyclin B-CDK1 complex that drives M phase)',
                    'Believing one cyclin controls entire cell cycle (different cyclins for different phases)'
                ],
                'Checkpoints': [
                    'Thinking all checkpoints do same thing (G₁/S checks environment; G₂/M checks replication; M checks spindle)',
                    'Believing checkpoints always stop cycle (only halt if problems detected)',
                    'Confusing checkpoint failure with cancer (one of many requirements for cancer)',
                    'Thinking p53 is only checkpoint protein (it\'s one important one; many others exist)'
                ],
                'Cancer': [
                    'Believing one mutation causes cancer (requires multiple: oncogene activation + tumor suppressor loss)',
                    'Thinking all cancer from cell cycle loss of control (also need angiogenesis, metastasis, etc.)',
                    'Confusing oncogene with mutated gene (oncogene promotes division; tumor suppressor inhibits)',
                    'Believing cancer cells divide faster than normal (some do; many divide at normal rate but don\'t stop)',
                    'Thinking p53 mutation alone causes cancer (increases risk; not sufficient alone)'
                ],
                'Regulation': [
                    'Believing cell cycle only controlled internally (external signals critical - growth factors)',
                    'Thinking G₀ is same as G₁ (G₀ = exit from cycle; G₁ = preparing to divide)',
                    'Confusing density-dependent inhibition with contact inhibition (related but distinct mechanisms)',
                    'Believing all cells respond to same signals (different cell types have different growth requirements)'
                ]
            },
            
            gametogenesis: {
                'Spermatogenesis vs Oogenesis': [
                    'Thinking both produce four functional gametes (spermatogenesis = 4 sperm; oogenesis = 1 egg + 3 polar bodies)',
                    'Believing both start at puberty (spermatogenesis = puberty; oogenesis = before birth)',
                    'Confusing timing (spermatogenesis continuous ~74 days; oogenesis = years with arrests)',
                    'Thinking both gametes are same size (sperm tiny; egg ~1000x larger in volume)'
                ],
                'Oogenesis': [
                    'Believing eggs are made throughout life (all primary oocytes formed before birth)',
                    'Thinking meiosis completes at ovulation (completes at fertilization if sperm enters)',
                    'Confusing primary and secondary oocyte (primary = prophase I arrest; secondary = metaphase II arrest)',
                    'Believing polar bodies have function (they degenerate; discard extra chromosomes)',
                    'Thinking maternal age effect affects all chromosomes equally (non-disjunction risk for all, but trisomy 21 most viable)'
                ],
                'Spermatogenesis': [
                    'Believing all spermatogonia differentiate (some remain as stem cells)',
                    'Thinking sperm mature in testis (mature in epididymis)',
                    'Confusing spermatid with spermatozoon (spermatid = round cell; spermatozoon = mature with tail)',
                    'Believing capacitation occurs in testis (occurs in female reproductive tract)'
                ],
                'Errors': [
                    'Thinking nondisjunction only maternal (can be paternal, but maternal age effect stronger)',
                    'Believing all aneuploidies equally viable (most lethal; only 13, 18, 21, and sex chromosomes sometimes viable)',
                    'Confusing maternal age effect mechanism (cohesin degradation in arrested oocytes, not DNA damage)',
                    'Thinking Down syndrome always from trisomy (rarely from translocation)'
                ]
            }
        };

        this.clarificationStrategies = {
            visual_comparison: {
                method: 'Use diagrams showing side-by-side comparisons (mitosis vs meiosis, animal vs plant cytokinesis)',
                effectiveness: 'Very high for distinguishing similar processes'
            },
            timeline: {
                method: 'Create timeline showing when events occur (cell cycle phases, meiosis arrests)',
                effectiveness: 'High for understanding sequence and timing'
            },
            analogy: {
                method: 'Relate to everyday examples (checkpoint = quality control; crossing over = shuffling cards)',
                effectiveness: 'High for abstract concepts'
            },
            physical_models: {
                method: 'Build 3D models with pipe cleaners, beads (chromosomes, crossing over)',
                effectiveness: 'Very high for spatial understanding'
            },
            contrast_table: {
                method: 'Side-by-side comparison charts (mitosis vs meiosis, n vs 2n)',
                effectiveness: 'High for related concepts'
            },
            animation: {
                method: 'Show dynamic processes (spindle formation, chromosome movement)',
                effectiveness: 'Very high for understanding motion and change'
            },
            quantification: {
                method: 'Use numbers explicitly (2n → 4c in S; n+1 = trisomy)',
                effectiveness: 'High for chromosome number confusion'
            }
        };
    }

    initializeMetacognitivePrompts() {
        this.metacognitivePrompts = {
            beforeLearning: [
                "What do you already know about cell division?",
                "How do you think cells ensure each daughter cell gets the right chromosomes?",
                "What questions do you have about {topic}?",
                "Why do you think meiosis is different from mitosis?",
                "What do you predict is the most challenging aspect of {topic}?"
            ],
            duringLearning: [
                "Can you explain the difference between sister chromatids and homologous chromosomes in your own words?",
                "How does this stage of {process} connect to what happens next?",
                "What would happen if this checkpoint failed?",
                "Why do you think the cell needs so many checkpoints?",
                "Can you draw a diagram showing what's happening?",
                "How is this similar to or different from {related_process}?",
                "What's the purpose of this phase/stage?",
                "Does this make sense? What's confusing?"
            ],
            afterLearning: [
                "What are the main differences between mitosis and meiosis?",
                "How do checkpoints prevent cancer?",
                "What surprised you most about {topic}?",
                "Can you explain crossing over to someone who hasn't studied it?",
                "How would you teach someone the stages of mitosis?",
                "What are you still unsure about?",
                "How does understanding cell division help explain genetic disorders?",
                "What connections can you make between {topic} and real-world applications?"
            ],
            problemSolving: [
                "Is this a mitosis or meiosis question? How do you know?",
                "What stage is this cell in? What evidence supports your answer?",
                "If nondisjunction occurs here, what will the gametes look like?",
                "What checkpoint would catch this error?",
                "Have you drawn a diagram? Would that help?",
                "Does your answer make biological sense?",
                "Can you work backward from the result to the cause?"
            ],
            selfMonitoring: [
                "On a scale of 1-5, how well do you understand {concept}?",
                "What study strategy is working best for you with this material?",
                "Are you confusing any similar terms? (e.g., chromatid vs chromosome)",
                "Would making flashcards help you memorize the stages?",
                "Have you tried drawing the process from memory?",
                "What part should you review before the test?"
            ]
        };
    }

    initializeContextualScenarios() {
        this.contextualScenarios = {
            cell_cycle: [
                {
                    scenario: "Cancer Treatment with Chemotherapy",
                    context: "Many chemotherapy drugs target rapidly dividing cells by disrupting the cell cycle",
                    application: "Taxol stabilizes microtubules (blocks mitosis); Hydroxyurea blocks DNA synthesis (arrests in S); these kill cancer cells but also affect normal dividing cells (hair, gut lining, bone marrow)",
                    question: "Why does chemotherapy cause hair loss and nausea?"
                },
                {
                    scenario: "Wound Healing",
                    context: "When you get a cut, cells at the wound edge must divide to close the gap",
                    application: "Growth factors stimulate quiescent (G₀) cells to re-enter cell cycle at G₁; cells divide to replace lost tissue; contact inhibition stops division when wound is closed",
                    question: "Why do wounds heal faster in children than elderly people?"
                }
            ],
            
            mitosis: [
                {
                    scenario: "Identical Twins",
                    context: "Identical (monozygotic) twins form when early embryo splits into two",
                    application: "All cells derive from same zygote via mitosis; twins have identical DNA because mitosis produces genetically identical cells",
                    question: "Why are identical twins genetically identical but not 100% identical in appearance?"
                },
                {
                    scenario: "Skin Cell Replacement",
                    context: "Your skin completely replaces itself every 2-4 weeks",
                    application: "Basal layer stem cells continuously undergo mitosis; daughter cells differentiate and migrate to surface; mitosis maintains constant cell number",
                    question: "If mitosis produces identical cells, why do skin cells at the surface look different from basal cells?"
                }
            ],
            
            meiosis: [
                {
                    scenario: "Genetic Counseling for Older Mothers",
                    context: "Risk of Down syndrome increases with maternal age (1/1500 at age 20 → 1/30 at age 45)",
                    application: "All eggs arrested in prophase I since before birth; cohesin proteins holding sister chromatids degrade over decades; nondisjunction more likely in older eggs",
                    question: "Why doesn't paternal age have as strong an effect on Down syndrome risk?"
                },
                {
                    scenario: "Why Siblings Don't Look Identical",
                    context: "Siblings (except identical twins) look similar but not the same",
                    application: "Each parent produces ~8 million different gamete types (2²³ from independent assortment alone); crossing over adds more variation; fertilization is random",
                    question: "If parents have 2²³ × 2²³ = ~70 trillion possible offspring combinations, why do siblings often look similar?"
                }
            ],
            
            chromosome_structure: [
                {
                    scenario: "Karyotyping for Prenatal Diagnosis",
                    context: "Amniocentesis or CVS can detect chromosomal abnormalities in fetus",
                    application: "Fetal cells arrested in metaphase with colchicine; chromosomes maximally condensed and visible; stained and photographed; arranged by size and banding pattern to detect abnormalities (extra chromosome 21 = Down syndrome)",
                    question: "Why must cells be arrested in metaphase for karyotyping?"
                },
                {
                    scenario: "Telomeres and Aging",
                    context: "Normal cells can only divide ~50 times (Hayflick limit) before senescence",
                    application: "Telomeres shorten with each division (end-replication problem); critically short telomeres trigger p53 → senescence or apoptosis; prevents unlimited division",
                    question: "How do cancer cells overcome the Hayflick limit?"
                }
            ],
            
            cytokinesis: [
                {
                    scenario: "Muscle Fiber Formation",
                    context: "Skeletal muscle cells are multinucleate (syncytium) with hundreds of nuclei per cell",
                    application: "Myoblast cells fuse during development; nuclei divide (mitosis) but cytokinesis does not occur; creates long muscle fiber with many nuclei",
                    question: "What would happen if muscle cells underwent cytokinesis normally?"
                },
                {
                    scenario: "Plant Growth and Development",
                    context: "Plants grow throughout life at meristems (root tips, shoot tips)",
                    application: "Meristem cells continuously divide; cell plate formation adds new cell walls; oriented division planes determine plant shape",
                    question: "How does plant cell cytokinesis orientation affect whether plant grows taller vs wider?"
                }
            ],
            
            cell_cycle_regulation: [
                {
                    scenario: "HPV Vaccine and Cervical Cancer Prevention",
                    context: "Human papillomavirus (HPV) causes most cervical cancers",
                    application: "HPV E6 protein inactivates p53; E7 protein inactivates Rb; cells lose G₁/S and G₂/M checkpoint control; accumulate mutations → cancer",
                    question: "Why doesn't HPV infection always lead to cancer?"
                },
                {
                    scenario: "Liver Regeneration",
                    context: "Liver can regenerate even if 75% is removed",
                    application: "Normally, hepatocytes in G₀ (quiescent); liver damage → growth factors released → hepatocytes re-enter cell cycle at G₁ → divide until liver mass restored → return to G₀",
                    question: "Why doesn't the liver just keep growing indefinitely?"
                }
            ],
            
            gametogenesis: [
                {
                    scenario: "Male vs Female Fertility Over Lifespan",
                    context: "Men can father children into old age; women have menopause (~age 50)",
                    application: "Spermatogenesis continuous from puberty (fresh meiosis every 74 days); oogenesis arrests: all eggs formed before birth, arrested in prophase I for years/decades; eggs depleted by menopause",
                    question: "Why do women have menopause but men don't have a similar cutoff?"
                },
                {
                    scenario: "In Vitro Fertilization (IVF) and Egg Retrieval",
                    context: "IVF requires harvesting multiple eggs from woman",
                    application: "Hormones stimulate multiple follicles to develop (normally 1 per month); eggs arrested at metaphase II; retrieved before ovulation; fertilized in lab → complete meiosis II",
                    question: "Why are eggs retrieved before ovulation rather than after?"
                }
            ]
        };
    }

    initializeAssessmentRubrics() {
        this.assessmentRubrics = {
            knowledgeLevel: {
                remember: {
                    description: "Recall facts, terms, stages of cell division",
                    verbs: ["Define", "List", "Identify", "Name", "State", "Label"],
                    example: "Label the stages of mitosis in a diagram"
                },
                understand: {
                    description: "Explain concepts and processes",
                    verbs: ["Explain", "Describe", "Summarize", "Compare", "Contrast", "Distinguish"],
                    example: "Explain why crossing over occurs in meiosis I but not mitosis"
                },
                apply: {
                    description: "Use knowledge in new situations",
                    verbs: ["Calculate", "Solve", "Predict", "Demonstrate", "Illustrate", "Determine"],
                    example: "Predict the gamete types produced if nondisjunction occurs in meiosis II"
                },
                analyze: {
                    description: "Break down and examine relationships",
                    verbs: ["Analyze", "Differentiate", "Organize", "Compare", "Categorize", "Examine"],
                    example: "Analyze how checkpoint failure leads to cancer"
                },
                evaluate: {
                    description: "Make judgments and defend decisions",
                    verbs: ["Evaluate", "Critique", "Judge", "Defend", "Assess", "Justify"],
                    example: "Evaluate whether karyotyping or NIPT is better for prenatal diagnosis"
                },
                create: {
                    description: "Produce original work or design experiments",
                    verbs: ["Design", "Construct", "Create", "Develop", "Formulate", "Plan"],
                    example: "Design an experiment to test which checkpoint is affected by a new drug"
                }
            },
            
            understandingLevels: {
                novice: {
                    characteristics: [
                        "Memorizes stages without understanding purpose",
                        "Confuses similar terms (chromatid vs chromosome)",
                        "Sees mitosis and meiosis as unrelated",
                        "Struggles to apply to scenarios"
                    ],
                    support: [
                        "Use visual aids and diagrams extensively",
                        "Practice with simple matching and labeling",
                        "Focus on one process at a time (master mitosis before meiosis)",
                        "Use analogies and real-world connections"
                    ]
                },
                developing: {
                    characteristics: [
                        "Understands basic stages and sequence",
                        "Can explain differences between mitosis and meiosis",
                        "Begins making connections to applications",
                        "Can solve straightforward problems"
                    ],
                    support: [
                        "Challenge with comparison questions",
                        "Introduce error scenarios (nondisjunction, checkpoint failure)",
                        "Encourage diagram drawing from memory",
                        "Connect to real medical/biological scenarios"
                    ]
                },
                proficient: {
                    characteristics: [
                        "Explains molecular mechanisms (MPF, cohesin, separase)",
                        "Predicts outcomes of errors and interventions",
                        "Connects cell division to genetics, cancer, development",
                        "Analyzes experimental data"
                    ],
                    support: [
                        "Present complex scenarios requiring synthesis",
                        "Analyze primary literature and experiments",
                        "Design experiments or solve novel problems",
                        "Explore advanced topics (epigenetics, regeneration)"
                    ]
                },
                expert: {
                    characteristics: [
                        "Integrates across topics (cell cycle, genetics, evolution, cancer)",
                        "Evaluates research and experimental design",
                        "Teaches others effectively",
                        "Proposes hypotheses and research directions"
                    ],
                    support: [
                        "Original research projects",
                        "Critique current research papers",
                        "Mentor other students",
                        "Explore cutting-edge topics (single-cell sequencing, optogenetics)"
                    ]
                }
            },
            
            skillDevelopment: {
                diagramming: {
                    novice: "Can label provided diagrams",
                    developing: "Can draw stages with some prompting",
                    proficient: "Draws accurate diagrams from memory with all details",
                    expert: "Creates original diagrams explaining complex processes"
                },
                problemSolving: {
                    novice: "Solves simple one-step problems",
                    developing: "Solves multi-step problems with guidance",
                    proficient: "Independently solves complex problems",
                    expert: "Formulates and solves novel problems"
                },
                dataAnalysis: {
                    novice: "Reads simple data tables",
                    developing: "Calculates mitotic index, recombination frequency",
                    proficient: "Interprets experimental results, identifies trends",
                    expert: "Designs experiments, evaluates statistical significance"
                }
            }
        };

        this.assessmentQuestions = {
            cell_cycle: {
                remember: "List the phases of the cell cycle in order",
                understand: "Explain why cells spend more time in interphase than mitosis",
                apply: "If a cell has 10 picograms of DNA in G₁, how much will it have in G₂?",
                analyze: "Analyze why cancer cells often have defective p53",
                evaluate: "Evaluate whether targeting cyclin-CDK complexes is a good cancer therapy strategy",
                create: "Design an experiment to synchronize cells at G₁/S checkpoint"
            },
            mitosis: {
                remember: "Name the four stages of mitosis in order",
                understand: "Explain the role of the spindle checkpoint",
                apply: "A cell has 24 chromosomes in G₁. How many chromatids are present in metaphase?",
                analyze: "Compare chromosome behavior in mitosis vs meiosis I",
                evaluate: "Assess whether colchicine is an effective cancer treatment despite its toxicity",
                create: "Design a method to visualize the mitotic spindle in live cells"
            },
            meiosis: {
                remember: "Identify when crossing over occurs",
                understand: "Explain how meiosis reduces chromosome number from diploid to haploid",
                apply: "Calculate recombination frequency if 30 out of 200 offspring are recombinant",
                analyze: "Analyze why meiosis II is similar to mitosis",
                evaluate: "Evaluate the evolutionary advantages of sexual reproduction despite its costs",
                create: "Design an experiment to map gene locations using recombination frequency"
            },
            chromosome_structure: {
                remember: "Define centromere and telomere",
                understand: "Explain why euchromatin is associated with active genes",
                apply: "If a cell has 23 chromosomes in G₁, how many after S phase?",
                analyze: "Compare the structure and function of euchromatin vs heterochromatin",
                evaluate: "Assess whether telomerase activation could prevent aging",
                create: "Design a karyotype for a person with Down syndrome"
            },
            cytokinesis: {
                remember: "Name the two main types of cytokinesis",
                understand: "Explain why plant cells cannot use cleavage furrows",
                apply: "Predict what happens if contractile ring formation is blocked",
                analyze: "Analyze why some cells (muscle fibers) skip cytokinesis",
                evaluate: "Evaluate whether cytokinesis failure always leads to cancer",
                create: "Design an experiment to visualize the contractile ring in real time"
            },
            cell_cycle_regulation: {
                remember: "Name three checkpoints in the cell cycle",
                understand: "Explain how p53 prevents cancer",
                apply: "Predict the effect of a drug that inhibits CDK1",
                analyze: "Analyze why loss of both Rb alleles causes retinoblastoma",
                evaluate: "Evaluate the claim that 'cancer requires multiple mutations'",
                create: "Design a drug that targets a specific checkpoint"
            },
            gametogenesis: {
                remember: "State when oocytes arrest in meiosis",
                understand: "Explain why maternal age affects Down syndrome risk",
                apply: "If nondisjunction occurs in meiosis I, what gametes are produced?",
                analyze: "Compare spermatogenesis and oogenesis in terms of timing and products",
                evaluate: "Assess whether freezing eggs at young age reduces Down syndrome risk",
                create: "Design a protocol for in vitro maturation of oocytes"
            }
        };
    }

    // ========================================
    // HANDLER METHODS FOR EACH TOPIC
    // ========================================

    // ========================================
    // DETAILED HANDLER METHODS FOR EACH TOPIC
    // ========================================

    handleCellCycle(problem) {
        const content = {
            topic: "Cell Cycle and Regulation",
            category: 'cell_division',
            summary: "The cell cycle is an ordered sequence of events in which a cell duplicates its contents and divides into two daughter cells. It consists of interphase (G₁, S, G₂) and M phase (mitosis and cytokinesis), regulated by checkpoints, cyclins, and CDKs to ensure accurate cell division and prevent uncontrolled proliferation.",
            
            overview: {
                definition: "The cell cycle is the series of events that takes place in a cell leading to its division and duplication",
                duration: "Varies by cell type: ~24 hours (rapidly dividing mammalian cells), 30 minutes (early embryo), years/never (neurons)",
                importance: [
                    "Ensures accurate DNA replication and distribution to daughter cells",
                    "Maintains genome stability across generations",
                    "Enables growth, development, and tissue maintenance",
                    "Provides control points to prevent cancer"
                ],
                mainPhases: {
                    interphase: "Cell growth and DNA replication (~90-95% of cycle)",
                    MPhase: "Mitosis and cytokinesis (~5-10% of cycle)"
                }
            },
            
            detailedPhases: {
                interphase: {
                    description: "Period between cell divisions when cell grows and prepares for division",
                    duration: "~23 hours in typical mammalian cell",
                    percentage: "~90-95% of total cell cycle",
                    subphases: {
                        G1: {
                            name: "Gap 1 (First Gap Phase)",
                            duration: "Variable (3-12+ hours, or years in G₀)",
                            chromosomeNumber: "2n (diploid)",
                            DNAcontent: "2c (each chromosome = 1 chromatid)",
                            events: [
                                "Cell growth - increase in size and mass",
                                "Accumulation of nutrients and energy (ATP)",
                                "Synthesis of enzymes required for DNA replication",
                                "Synthesis of RNA and proteins for cell functions",
                                "Organelle production (mitochondria, ribosomes, ER)",
                                "Centrosome duplication begins",
                                "G₁ checkpoint assessment"
                            ],
                            molecularEvents: {
                                cyclins: "Cyclin D levels rise in response to growth factors",
                                CDKs: "Cyclin D-CDK4/6 complexes phosphorylate Rb protein",
                                Rb: "Phosphorylated Rb releases E2F transcription factors",
                                E2F: "Activates genes for S phase entry (DNA polymerases, cyclins E and A)",
                                growthFactors: "External signals (EGF, PDGF) required to proceed"
                            },
                            checkpoint: {
                                name: "G₁/S Checkpoint (Restriction Point)",
                                location: "Late G₁, before S phase",
                                alternative: "Start point (in yeast), Restriction point (in mammals)",
                                questions: [
                                    "Is cell large enough?",
                                    "Are nutrients available?",
                                    "Are growth signals present?",
                                    "Is DNA damaged?",
                                    "Is environment favorable?"
                                ],
                                passCondition: "All conditions met → proceed to S phase",
                                failCondition: "Conditions not met → enter G₀ or apoptosis",
                                significance: "MOST IMPORTANT checkpoint - once passed, cell committed to division",
                                proteins: {
                                    p53: "Detects DNA damage, activates p21",
                                    p21: "CDK inhibitor - blocks cyclin E-CDK2",
                                    Rb: "When hypophosphorylated, blocks E2F",
                                    E2F: "Transcription factor for S phase genes",
                                    cyclinD: "Responds to growth signals",
                                    CDK4_6: "Partners with cyclin D to phosphorylate Rb"
                                },
                                cancerRelevance: "p53 mutated in ~50% cancers; Rb mutated in retinoblastoma and others"
                            },
                            decision: {
                                proceed: "Cell passes checkpoint → commits to division → S phase",
                                G0exit: "Cell enters quiescent state (G₀) - reversible or permanent",
                                apoptosis: "Severe DNA damage → programmed cell death"
                            }
                        },
                        
                        S: {
                            name: "Synthesis Phase",
                            duration: "~6-8 hours in mammalian cells",
                            chromosomeNumber: "2n (still diploid - number doesn't change)",
                            DNAcontent: "2c → 4c (DNA doubles, but chromosomes still counted as 2n)",
                            events: [
                                "DNA replication - entire genome duplicated",
                                "Each chromosome becomes two sister chromatids joined at centromere",
                                "Histone synthesis to package new DNA",
                                "Centrosome duplication completes",
                                "Continued cell growth (though slower than G₁)"
                            ],
                            DNAreaplication: {
                                initiation: "Multiple origins of replication (~30,000 in humans)",
                                bidirectional: "Replication forks proceed in both directions from each origin",
                                semiconservative: "Each new DNA molecule has one old strand, one new strand",
                                enzymes: {
                                    helicase: "Unwinds DNA double helix",
                                    primase: "Synthesizes RNA primers",
                                    DNApolymerase: "Synthesizes new DNA strands (DNA pol δ and ε)",
                                    ligase: "Joins Okazaki fragments on lagging strand",
                                    topoisomerase: "Relieves tension from unwinding"
                                },
                                fidelity: "Proofreading by DNA polymerase ensures ~1 error per 10¹⁰ nucleotides",
                                licensing: "Origins licensed in G₁, fired in S - prevents re-replication"
                            },
                            molecularEvents: {
                                cyclins: "Cyclin E-CDK2 (early S), Cyclin A-CDK2 (later S)",
                                functions: [
                                    "Initiate DNA replication at origins",
                                    "Prevent re-replication (once-and-only-once rule)",
                                    "Phosphorylate proteins to inactivate licensing"
                                ]
                            },
                            checkpoints: {
                                intraSphase: {
                                    function: "Monitor replication fork progression",
                                    activation: "Stalled forks activate ATR kinase",
                                    response: "Slow S phase, recruit repair proteins, can arrest cycle"
                                }
                            },
                            result: "Cell now has 2n chromosomes, but 4c DNA (each chromosome = 2 sister chromatids)"
                        },
                        
                        G2: {
                            name: "Gap 2 (Second Gap Phase)",
                            duration: "~3-4 hours in mammalian cells",
                            chromosomeNumber: "2n",
                            DNAcontent: "4c (DNA replicated but not yet divided)",
                            events: [
                                "Continued cell growth",
                                "Protein synthesis for mitosis (tubulin for spindle, condensins, cohesins)",
                                "Accumulation of MPF (Cyclin B-CDK1)",
                                "Centrosomes mature (ready to nucleate spindle)",
                                "G₂/M checkpoint assessment",
                                "Cell prepares for rapid mitosis"
                            ],
                            molecularEvents: {
                                cyclins: "Cyclin A (G₂), Cyclin B accumulates",
                                CDK1: "Also called CDC2; partners with cyclin B to form MPF",
                                MPF: {
                                    fullName: "M-phase Promoting Factor (or Maturation Promoting Factor)",
                                    composition: "Cyclin B-CDK1 complex",
                                    regulation: {
                                        inactive: "CDK1 phosphorylated by Wee1 kinase (inhibitory)",
                                        activation: "CDC25 phosphatase removes inhibitory phosphorylations",
                                        threshold: "MPF accumulates; once threshold reached → M phase"
                                    },
                                    function: "Triggers entry into mitosis",
                                    targets: [
                                        "Nuclear lamins (nuclear envelope breakdown)",
                                        "Histone H1 (chromosome condensation)",
                                        "Condensin proteins (chromosome compaction)",
                                        "Golgi and ER proteins (organelle fragmentation)"
                                    ]
                                }
                            },
                            checkpoint: {
                                name: "G₂/M Checkpoint",
                                location: "End of G₂, before mitosis",
                                questions: [
                                    "Is all DNA fully replicated?",
                                    "Is any DNA damaged?",
                                    "Is cell large enough for division?",
                                    "Are all proteins for mitosis synthesized?"
                                ],
                                passCondition: "All conditions met → MPF activated → enter mitosis",
                                failCondition: "Problems detected → arrest in G₂, attempt repair",
                                proteins: {
                                    p53: "Activated by DNA damage, induces p21",
                                    p21: "Inhibits cyclin B-CDK1 (MPF)",
                                    ATM_ATR: "Kinases detecting DNA damage",
                                    Chk1_Chk2: "Checkpoint kinases, phosphorylate CDC25 (inactivate)",
                                    Wee1: "Keeps CDK1 phosphorylated (inactive) until checkpoint passed",
                                    CDC25: "Phosphatase that activates CDK1 when checkpoint passed"
                                },
                                mechanism: "If DNA damage: ATM/ATR → Chk1/Chk2 → inhibit CDC25 → CDK1 stays inactive → arrest in G₂"
                            }
                        }
                    },
                    summary: "Interphase is metabolically active period of cell growth and preparation for division, NOT a 'resting' phase"
                },
                
                Mphase: {
                    name: "M Phase (Mitotic Phase)",
                    duration: "~1 hour in mammalian cells",
                    percentage: "~5-10% of cell cycle",
                    components: {
                        mitosis: {
                            description: "Nuclear division",
                            duration: "~1 hour",
                            stages: "Prophase, Metaphase, Anaphase, Telophase (PMAT)"
                        },
                        cytokinesis: {
                            description: "Cytoplasmic division",
                            duration: "Begins in late anaphase, completes after telophase",
                            overlap: "Overlaps with late stages of mitosis"
                        }
                    },
                    checkpoint: {
                        name: "M Checkpoint (Spindle Assembly Checkpoint)",
                        location: "Metaphase",
                        alternative: "Spindle checkpoint, SAC",
                        question: "Are all chromosomes properly attached to spindle and aligned?",
                        mechanism: {
                            unattached: "Unattached kinetochores recruit Mad2, BubR1, Bub3",
                            waitSignal: "These proteins inhibit APC/C (Anaphase Promoting Complex)",
                            APCinhibited: "APC/C cannot degrade securin → separase inactive → cohesin intact → sister chromatids held together",
                            satisfied: "When all kinetochores attached and under tension → checkpoint satisfied",
                            APCactive: "APC/C activated → securin degraded → separase cleaves cohesin → anaphase begins"
                        },
                        proteins: {
                            Mad2: "Monitors kinetochore attachment",
                            BubR1: "Monitors kinetochore tension",
                            Bub3: "Part of checkpoint complex",
                            APC_C: "E3 ubiquitin ligase - tags proteins for degradation",
                            securin: "Inhibitor of separase",
                            separase: "Protease that cleaves cohesin",
                            cohesin: "Protein holding sister chromatids together"
                        },
                        significance: "Prevents aneuploidy (wrong chromosome number) - critical for genome stability",
                        cancerRelevance: "Defects in checkpoint → chromosomal instability → cancer"
                    },
                    result: "Two daughter cells, each with 2n chromosomes and 2c DNA (same as original G₁ cell)"
                },
                
                G0: {
                    name: "G₀ Phase (Quiescent State)",
                    description: "Cell exits cell cycle temporarily or permanently",
                    entry: "From G₁, before restriction point",
                    characteristics: {
                        metabolic: "Metabolically active but not dividing",
                        size: "May be smaller than dividing cells",
                        chromatin: "More condensed than G₁",
                        cyclins: "Low levels of cyclins"
                    },
                    types: {
                        reversible: {
                            description: "Can re-enter cell cycle with appropriate signals",
                            examples: [
                                "Liver cells (hepatocytes) - normally quiescent, divide during regeneration",
                                "Lymphocytes - activated by antigens, re-enter cycle",
                                "Fibroblasts - respond to wound signals"
                            ],
                            reentry: "Growth factors → cyclin D synthesis → pass restriction point → S phase"
                        },
                        permanent: {
                            description: "Terminally differentiated, cannot re-enter cycle",
                            examples: [
                                "Neurons - permanently in G₀ after differentiation",
                                "Cardiac muscle cells - very limited division capacity",
                                "Lens cells (eye) - lose nuclei, cannot divide"
                            ],
                            mechanism: "High levels of CDK inhibitors (p16, p27), permanent chromatin changes"
                        }
                    },
                    senescence: {
                        description: "Permanent growth arrest after repeated divisions",
                        cause: "Telomere shortening, DNA damage accumulation, oncogene activation",
                        HayflickLimit: "Normal cells divide ~50 times before senescence",
                        characteristics: "Flattened morphology, senescence-associated β-galactosidase activity",
                        function: "Tumor suppression mechanism, prevents damaged cells from dividing"
                    }
                }
            },
            
            regulation: {
                overview: "Cell cycle is regulated by cyclins, CDKs, checkpoints, and external signals to ensure accurate division",
                
                cyclins: {
                    definition: "Regulatory proteins whose concentration oscillates during cell cycle",
                    function: "Activate CDKs at specific cell cycle phases",
                    mechanism: {
                        synthesis: "Transcriptionally regulated - genes turned on at specific times",
                        degradation: "Ubiquitin-mediated proteolysis by APC/C or SCF complexes",
                        result: "Cyclin levels rise and fall in waves"
                    },
                    types: {
                        cyclinD: {
                            phase: "G₁",
                            partners: "CDK4, CDK6",
                            function: "Respond to external growth signals",
                            targets: "Rb protein (phosphorylation releases E2F)",
                            regulation: "Growth factor signaling induces cyclin D synthesis",
                            cancerRole: "Overexpressed in many cancers (breast, lymphoma)"
                        },
                        cyclinE: {
                            phase: "G₁/S transition",
                            partners: "CDK2",
                            function: "Commit cell to DNA replication",
                            targets: "Proteins for DNA synthesis, origin licensing",
                            peak: "Late G₁"
                        },
                        cyclinA: {
                            phase: "S phase and G₂",
                            partners: "CDK2 (S phase), CDK1 (G₂)",
                            function: "S phase: DNA replication; G₂: preparation for mitosis",
                            targets: "Replication proteins, E2F, nuclear envelope proteins"
                        },
                        cyclinB: {
                            phase: "M phase",
                            partners: "CDK1 (also called CDC2)",
                            function: "Trigger entry into mitosis (MPF)",
                            targets: "Nuclear lamins, condensins, Golgi, ER",
                            degradation: "APC/C degrades cyclin B in anaphase → exit from mitosis",
                            localization: "Cytoplasm in G₂, enters nucleus to trigger mitosis"
                        }
                    }
                },
                
                CDKs: {
                    definition: "Cyclin-Dependent Kinases - enzymes that phosphorylate target proteins when activated by cyclins",
                    function: "Drive cell cycle events by phosphorylating key regulatory proteins",
                    structure: "Catalytic subunit (kinase) that's inactive without cyclin binding",
                    mechanism: {
                        inactive: "CDK alone has distorted active site",
                        cyclinBinding: "Cyclin binding reshapes active site",
                        CAKphosphorylation: "CDK-activating kinase (CAK) phosphorylates T-loop → fully active",
                        activity: "Phosphorylates serine/threonine residues on target proteins"
                    },
                    types: {
                        CDK4_CDK6: "Partner with cyclin D in G₁",
                        CDK2: "Partners with cyclin E (G₁/S) and cyclin A (S, G₂)",
                        CDK1: "Partners with cyclin A (G₂) and cyclin B (M); also called CDC2"
                    },
                    regulation: {
                        activation: [
                            "Cyclin binding",
                            "CAK phosphorylation (activating)",
                            "CDC25 phosphatase removes inhibitory phosphorylations"
                        ],
                        inhibition: [
                            "Wee1, Myt1 kinases add inhibitory phosphorylations",
                            "CKIs (CDK inhibitors) block activity"
                        ]
                    },
                    targets: "Rb, E2F, lamins, histones, licensing factors, many others"
                },
                
                CDKinhibitors: {
                    definition: "Proteins that inhibit CDK activity",
                    function: "Halt cell cycle in response to damage or developmental signals",
                    families: {
                        INK4: {
                            members: "p16^INK4a, p15, p18, p19",
                            targets: "CDK4 and CDK6 specifically",
                            function: "Block cyclin D-CDK4/6, prevent Rb phosphorylation",
                            cancerRole: "p16 frequently inactivated in cancer"
                        },
                        CIP_KIP: {
                            members: "p21^CIP1, p27^KIP1, p57^KIP2",
                            targets: "Broad specificity - inhibit multiple cyclin-CDK complexes",
                            p21: {
                                inducer: "p53 induces p21 in response to DNA damage",
                                function: "Blocks cyclin E-CDK2, cyclin A-CDK2, cyclin B-CDK1",
                                result: "Arrest in G₁ or G₂"
                            },
                            p27: {
                                function: "Inhibits CDK2, maintains G₀/early G₁",
                                degradation: "Degraded when cell receives growth signals"
                            }
                        }
                    }
                },
                
                checkpoints: {
                    purpose: "Quality control mechanisms ensuring cell cycle fidelity",
                    function: "Halt cycle if conditions not met, allow repair or trigger apoptosis",
                    
                    summary: [
                        "G₁/S: Environment favorable? DNA intact? → Decide to commit to division",
                        "G₂/M: DNA fully replicated? Any damage? → Decide to enter mitosis",
                        "M: Chromosomes attached and aligned? → Decide to proceed to anaphase"
                    ],
                    
                    detailed: {
                        G1_S: {
                            name: "G₁/S Checkpoint (Restriction Point)",
                            timing: "Late G₁, before S phase entry",
                            significance: "MOST CRITICAL - point of no return",
                            checks: [
                                "Cell size adequate (enough resources for division)?",
                                "Nutrients available (amino acids, nucleotides)?",
                                "Growth factor signals present?",
                                "DNA damage absent?",
                                "Proper attachment to substrate (for adherent cells)?"
                            ],
                            pass: "Cyclin D-CDK4/6 hyperphosphorylates Rb → E2F released → S phase genes ON → commitment",
                            fail: {
                                noGrowthFactors: "Cyclin D not made → Rb active → E2F blocked → arrest or G₀",
                                DNAdamage: "p53 activated → p21 induced → CDKs inhibited → arrest",
                                inadequateSize: "Nutrient sensors → block cyclin D → arrest"
                            },
                            proteins: {
                                positive: "Cyclin D, CDK4/6, E2F, CDC25A",
                                negative: "Rb, p53, p21, p16"
                            },
                            cancer: "p53 mutation (~50% cancers), Rb mutation (retinoblastoma, others) → loss of checkpoint"
                        },
                        
                        G2_M: {
                            name: "G₂/M Checkpoint",
                            timing: "End of G₂, before mitosis",
                            checks: [
                                "All DNA fully replicated?",
                                "Any DNA damage (especially double-strand breaks)?",
                                "Cell size sufficient?",
                                "All proteins for mitosis made?"
                            ],
                            pass: "CDC25 activates CDK1 → MPF active → mitosis",
                            fail: {
                                incompleteReplication: "ATR → Chk1 → inhibit CDC25 → CDK1 inactive → G₂ arrest",
                                DNAdamage: "ATM → Chk2 → p53 → p21 → inhibit CDK1 → arrest",
                                mechanism: "Keep CDK1 phosphorylated (inactive) via Wee1, block CDC25"
                            },
                            proteins: {
                                positive: "Cyclin B, CDK1, CDC25, Plk1",
                                negative: "Wee1, p53, p21, ATM, ATR, Chk1, Chk2"
                            },
                            override: "Caffeine inhibits ATM/ATR → cells enter mitosis despite damage (dangerous)"
                        },
                        
                        M: {
                            name: "M Checkpoint (Spindle Assembly Checkpoint)",
                            timing: "Metaphase",
                            checks: [
                                "All kinetochores attached to spindle microtubules?",
                                "Chromosomes under proper tension (bi-oriented)?",
                                "Chromosomes aligned at metaphase plate?"
                            ],
                            pass: "Mad2/BubR1 release from kinetochores → APC/C active → securin degraded → anaphase",
                            fail: "Unattached kinetochore → Mad2/BubR1 inhibit APC/C → metaphase arrest",
                            mechanism: {
                                unattached: "Kinetochore recruits Mad1-Mad2, generates 'wait anaphase' signal",
                                tension: "BubR1 senses lack of tension (mono-oriented or unattached)",
                                inhibition: "Mad2-BubR1-Bub3 complex inhibits APC/C-Cdc20",
                                satisfied: "All kinetochores attached + tension → Mad2/BubR1 released → APC/C active",
                                anaphase: "APC/C ubiquitinates securin → degraded → separase active → cohesin cleaved"
                            },
                            proteins: {
                                checkpoint: "Mad1, Mad2, BubR1, Bub3, Mps1",
                                targets: "APC/C-Cdc20, securin, separase, cohesin"
                            },
                            drugs: "Taxol, colchicine block spindle → chronic M arrest → cell death (chemotherapy)",
                            cancer: "Defects → chromosomal instability, aneuploidy"
                        }
                    }
                },
                
                externalSignals: {
                    growthFactors: {
                        definition: "Extracellular proteins that stimulate cell division",
                        examples: "EGF, PDGF, FGF, IGF",
                        mechanism: "Bind receptor → signaling cascade → cyclin D synthesis",
                        pathway: "Growth factor → RTK → Ras → MAPK → transcription factors → cyclin D gene",
                        requirement: "Needed to pass restriction point in G₁",
                        cancer: "Oncogenes (Ras, RTKs) constitutively active → growth without signals"
                    },
                    contactInhibition: {
                        definition: "Cells stop dividing when they contact neighbors",
                        mechanism: "Cell-cell contact → cadherins → Hippo pathway → YAP/TAZ inhibition → growth arrest",
                        normal: "Prevents overgrowth, maintains tissue size",
                        cancer: "Loss of contact inhibition → uncontrolled growth, piling up"
                    },
                    anchorageDependence: {
                        definition: "Normal cells require attachment to substrate to divide",
                        mechanism: "Integrin signaling from ECM required for growth",
                        normal: "Prevents cells from dividing in wrong location",
                        cancer: "Anchorage-independent growth → metastasis, growth in suspension"
                    }
                }
            },
            
            cancer: {
                definition: "Uncontrolled cell division due to loss of cell cycle regulation",
                hallmarks: {
                    sustainedProliferation: "Growth signals always ON (oncogene activation)",
                    evadingGrowthSuppressors: "Checkpoints bypassed (tumor suppressor loss)",
                    resistingApoptosis: "p53 mutated, anti-apoptotic proteins overexpressed",
                    enablingImmorality: "Telomerase reactivated, unlimited divisions",
                    genomicInstability: "Checkpoint defects, DNA repair defects"
                },
                
                tumorSuppressors: {
                    definition: "Genes/proteins that inhibit cell division or promote apoptosis",
                    lossInCancer: "Both alleles must be lost (recessive)",
                    
                    p53: {
                        nickname: "'Guardian of the Genome'",
                        function: "Transcription factor activated by stress (DNA damage, oncogene activation, hypoxia)",
                        normalRole: {
                            DNAdamage: "ATM/ATR phosphorylate p53 → stabilized (not degraded by MDM2)",
                            targets: [
                                "p21 → CDK inhibition → G₁ or G₂ arrest (attempt repair)",
                                "DNA repair genes (GADD45, XPC) → fix damage",
                                "Bax, PUMA, Noxa → apoptosis if damage irreparable",
                                "p21 → senescence (permanent arrest)"
                            ],
                            decision: "Repairable damage → arrest + repair; irreparable → apoptosis"
                        },
                        mutations: {
                            frequency: "Mutated in ~50% of all human cancers",
                            hotspots: "DNA-binding domain (can't activate target genes)",
                            dominantNegative: "Some mutants inhibit wild-type p53 (worse than loss)",
                            consequence: "Cells with DNA damage proceed through cycle → mutations accumulate",
                            syndromes: "Li-Fraumeni syndrome (inherited p53 mutation) → high cancer risk, early onset"
                        },
                        regulation: "MDM2 ubiquitin ligase normally keeps p53 low; stress disrupts MDM2-p53 interaction"
                    },
                    
                    Rb: {
                        fullName: "Retinoblastoma protein (pRb)",
                        function: "Master regulator of G₁/S transition",
                        mechanism: {
                            hypophosphorylated: "Active Rb binds E2F → blocks S phase gene transcription",
                            phosphorylation: "Cyclin D-CDK4/6 phosphorylates Rb → partial release of E2F",
                            hyperphosphorylation: "Cyclin E-CDK2 completes phosphorylation → E2F fully released",
                            E2Factive: "Transcribes genes for DNA synthesis, cyclins A and E → S phase entry"
                        },
                        mutations: {
                            loss: "Both alleles lost → E2F always active → uncontrolled S phase entry",
                            syndrome: "Retinoblastoma (eye tumor in children) - inherited mutation + somatic loss",
                            otherCancers: "Lung, breast, bladder cancers",
                            mechanism: "Two-hit hypothesis (Knudson): both alleles must be inactivated"
                        },
                        viralInactivation: "HPV E7, adenovirus E1A, SV40 T antigen bind and inactivate Rb"
                    },
                    
                    others: {
                        p16INK4a: "CDK4/6 inhibitor; loss → excessive Rb phosphorylation",
                        PTEN: "Opposes PI3K/Akt survival pathway; loss → resistance to apoptosis",
                        APC: "Regulates Wnt signaling; mutated in familial adenomatous polyposis → colon cancer",
                        BRCA1_BRCA2: "DNA repair; mutations → breast/ovarian cancer susceptibility"
                    }
                },
                
                oncogenes: {
                    definition: "Mutated genes that promote cell division when overactive",
                    activationInCancer: "Only one allele needs activation (dominant)",
                    protoOncogene: "Normal version; becomes oncogene when mutated",
                    
                    Ras: {
                        normalFunction: "GTPase in growth factor signaling pathway (RTK → Ras → MAPK → nucleus)",
                        cycles: "GTP-bound (active) → GDP-bound (inactive); GAP accelerates hydrolysis",
                        mutation: {
                            type: "Point mutations (G12, G13, Q61) prevent GTP hydrolysis",
                            result: "Constitutively active (always 'ON') → continuous growth signal",
                            frequency: "~30% of all cancers (90% pancreatic, 50% colon, 30% lung)"
                        },
                        cancerMechanism: "Constant MAPK signaling → cyclin D → uncontrolled proliferation"
                    },
                    
                    Myc: {
                        normalFunction: "Transcription factor promoting cell cycle genes, ribosome biogenesis, metabolism",
                        activation: {
                            overexpression: "Gene amplification, strong promoter insertion",
                            translocation: "Burkitt lymphoma: t(8;14) places Myc near Ig promoter → overexpression"
                        },
                        cancerMechanism: "Excessive Myc → drive into S phase, block differentiation, promote growth"
                    },
                    
                    CyclinD: {
                        normalFunction: "G₁ cyclin, responds to growth factors",
                        activation: "Gene amplification, overexpression",
                        cancers: "Breast cancer, mantle cell lymphoma",
                        mechanism: "Excessive Rb phosphorylation → uncontrolled S phase entry"
                    },
                    
                    HER2_ErbB2: {
                        normalFunction: "Growth factor receptor (RTK family)",
                        activation: "Gene amplification → receptor overexpression",
                        cancers: "~20% of breast cancers",
                        mechanism: "Excessive signaling even without ligand → growth",
                        therapy: "Herceptin (trastuzumab) antibody blocks HER2 → effective treatment"
                    },
                    
                    Bcl2: {
                        normalFunction: "Anti-apoptotic protein",
                        activation: "Translocation t(14;18) in follicular lymphoma",
                        mechanism: "Overexpression → blocks apoptosis → cells survive despite damage"
                    }
                },
                
                multiStepModel: {
                    concept: "Cancer requires multiple mutations (oncogene activation + tumor suppressor loss)",
                    steps: [
                        "Normal cell",
                        "Mutation 1: Oncogene activated (e.g., Ras) → excessive growth",
                        "Mutation 2: Tumor suppressor lost (e.g., p53) → loss of checkpoint",
                        "Mutation 3: Another tumor suppressor (e.g., Rb) → further loss of control",
                        "Additional mutations: Invasion, metastasis, angiogenesis genes",
                        "Cancer"
                    ],
                    example: "Colon cancer: APC loss → K-Ras activation → p53 loss → cancer",
                    timeframe: "Decades for most cancers (explains age-dependence)",
                    implications: "Need multiple defenses to prevent cancer; single mutation insufficient"
                }
            },
            
            timing: {
                typical: {
                    totalCycle: "~24 hours for rapidly dividing mammalian cells",
                    G1: "3-12 hours (highly variable)",
                    S: "6-8 hours",
                    G2: "3-4 hours",
                    M: "1 hour",
                    interphase: "~23 hours (~95%)",
                    Mphase: "~1 hour (~5%)"
                },
                variation: {
                    earlyEmbryo: {
                        duration: "30 minutes to few hours",
                        phases: "Skip G₁ and G₂ (just S and M alternate)",
                        reason: "Using maternal stockpiles, no growth needed, rapid cleavage divisions"
                    },
                    yeast: "~90 minutes (rapidly growing)",
                    bacteria: "20 minutes (E. coli in rich medium)",
                    neurons: "Never divide after differentiation (permanent G₀)",
                    liverCells: "Normally quiescent (G₀), rapid division when needed (regeneration)",
                    skinCells: "~24 hours (constant renewal)",
                    intestinalCells: "~24 hours (high turnover)",
                    boneMarrowStem: "Weeks to months (slow cycling)",
                    cancerCells: "Often faster than normal, but not always (some slower)"
                }
            },
            
            DNAandChromosomeChanges: {
                G1: {
                    chromosomes: "2n (diploid number)",
                    DNA: "2c (each chromosome = 1 chromatid)",
                    description: "Normal diploid complement"
                },
                S: {
                    chromosomes: "2n (number doesn't change)",
                    DNA: "2c → 4c (DNA replicates)",
                    description: "Each chromosome becomes 2 sister chromatids, still counted as 2n"
                },
                G2: {
                    chromosomes: "2n",
                    DNA: "4c (replicated but not divided)",
                    description: "Ready for mitosis"
                },
                afterMitosis: {
                    chromosomes: "2n in each daughter cell",
                    DNA: "2c in each daughter cell",
                    description: "Identical to original G₁ cell"
                },
                clarification: "Chromosome NUMBER (n) vs DNA CONTENT (c) are different; S phase doubles DNA but not chromosome number"
            },
            
            comparison: {
                interphaseVsMitosis: {
                    interphase: {
                        duration: "~95% of cycle",
                        activity: "Growth, DNA replication, normal metabolism",
                        nucleus: "Intact, chromatin diffuse",
                        visibility: "Cannot see chromosomes (except as chromatin)"
                    },
                    mitosis: {
                        duration: "~5% of cycle",
                        activity: "Nuclear division, chromosome segregation",
                        nucleus: "Breaks down then reforms",
                        visibility: "Chromosomes condensed and visible"
                    }
                },
                normalVsCancerCell: {
                    normal: {
                        regulation: "Checkpoints functional",
                        growthFactors: "Required for division",
                        contact: "Contact inhibition present",
                        anchorage: "Anchorage-dependent",
                        divisions: "Limited (~50, Hayflick limit)",
                        chromosomes: "Stable number"
                    },
                    cancer: {
                        regulation: "Checkpoints defective",
                        growthFactors: "Divide without signals",
                        contact: "No contact inhibition",
                        anchorage: "Anchorage-independent",
                        divisions: "Unlimited (immortalized)",
                        chromosomes: "Often aneuploid, unstable"
                    }
                }
            },
            
            examples: [
                {
                    cell: "Intestinal crypt cells",
                    cycle: "~24 hours",
                    note: "Rapid turnover, constant division to replace sloughed cells",
                    regulation: "Wnt signaling maintains proliferation"
                },
                {
                    cell: "Skin basal cells",
                    cycle: "~24-48 hours",
                    note: "Continuous division, daughter cells differentiate and migrate to surface",
                    layers: "Basal (dividing) → spinous → granular → cornified (dead)"
                },
                {
                    cell: "Liver hepatocytes",
                    cycle: "Normally G₀, can cycle in ~1-2 days if needed",
                    note: "Quiescent but retain ability to divide (regeneration)",
                    regeneration: "Can restore 75% mass loss within weeks"
                },
                {
                    cell: "Bone marrow hematopoietic stem cells",
                    cycle: "Slow cycling, weeks to months",
                    note: "Preserve stem cell pool, asymmetric divisions"
                },
                {
                    cell: "Neurons",
                    cycle: "Permanent G₀",
                    note: "Terminally differentiated, no division (with rare exceptions)",
                    exception: "Some neurogenesis in hippocampus, olfactory bulb"
                },
                {
                    cell: "Early embryo (frog, fly)",
                    cycle: "30 minutes - few hours",
                    note: "Rapid cleavages, skip G₁ and G₂, synchronous divisions",
                    mechanism: "Maternal stockpiles of cyclins, nucleotides, etc."
                },
                {
                    cell: "Cancer cells (HeLa)",
                    cycle: "~24 hours, but continuous",
                    note: "Ignore growth signals, defective checkpoints, immortalized",
                    mutations: "p53 inactivated by HPV, telomerase active"
                }
            ],
            
            applications: [
                "Cancer treatment: Chemotherapy targets dividing cells (S phase, M phase)",
                "Understanding development: Rapid embryonic divisions vs differentiation and G₀ exit",
                "Regenerative medicine: Stimulate quiescent stem cells to divide and repair tissue",
                "Aging research: Telomere shortening and senescence linked to limited divisions",
                "Agricultural biotechnology: Control plant growth and propagation",
                "Drug development: CDK inhibitors for cancer (Palbociclib for breast cancer)",
                "Tissue engineering: Grow cells to confluence with contact inhibition, then scaffold",
                "Understanding wound healing: Cells exit G₀, divide, then stop when wound closed"
            ]
        };
        
        return content;
    }

   
handleMitosis(problem) {
        const content = {
            topic: "Mitosis: Nuclear Division for Growth and Repair",
            category: 'cell_division',
            summary: "Mitosis is a precisely orchestrated process of nuclear division that distributes replicated chromosomes equally to two daughter cells, producing genetically identical diploid cells. Essential for growth, tissue maintenance, wound repair, and asexual reproduction.",
            
            overview: {
                definition: "Mitosis is the division of the nucleus that results in two daughter nuclei, each with the same number and kind of chromosomes as the parent cell",
                purpose: [
                    "Growth - increase cell number during development",
                    "Repair - replace damaged or dead cells",
                    "Maintenance - continuous replacement (skin, blood, intestinal lining)",
                    "Asexual reproduction - in unicellular eukaryotes and some multicellular organisms"
                ],
                duration: "~1 hour in mammalian cells (but highly variable)",
                frequency: "Occurs millions of times per second in human body",
                result: "Two genetically identical diploid (2n) daughter cells from one diploid parent cell",
                geneticIdentity: "Daughter cells have identical DNA sequence to parent (barring mutations)",
                conservesNumber: "Chromosome number stays constant (2n → 2n + 2n)"
            },
            
            prerequisites: {
                Sphase: "DNA must be replicated before mitosis (occurs in S phase of cell cycle)",
                starting: {
                    chromosomes: "2n (diploid)",
                    DNA: "4c (replicated in S phase)",
                    structure: "Each chromosome = 2 sister chromatids joined at centromere"
                },
                MPF: "Cyclin B-CDK1 (MPF) triggers entry into mitosis"
            },
            
            stages: {
                overview: "Mitosis divided into stages based on chromosome appearance and behavior",
                mnemonic: "PMAT - Prophase, Metaphase, Anaphase, Telophase",
                
                prophase: {
                    name: "Prophase (Early and Late)",
                    duration: "~30-60 minutes (longest mitotic stage)",
                    percentage: "~50-60% of mitosis time",
                    etymology: "Pro = before, first",
                    
                    earlyProphase: {
                        chromosomeCondensation: {
                            description: "Chromatin fibers condense into visible chromosomes",
                            mechanism: "Condensin proteins (SMC proteins) use ATP to compact chromatin",
                            result: "Chromosomes become visible as long, thin threads",
                            structure: "Each chromosome consists of 2 sister chromatids joined at centromere",
                            reason: "Condensation allows chromosome movement without tangling"
                        },
                        centrosomes: {
                            description: "Centrosomes (duplicated in S phase) begin moving to opposite poles",
                            mechanism: "Motor proteins (dynein) walk along microtubules",
                            asters: "Radial array of short microtubules forms around each centrosome",
                            animalCells: "Centrioles within centrosomes organize microtubules",
                            plantCells: "No centrosomes; microtubules nucleate from multiple sites"
                        },
                        nucleolus: {
                            change: "Nucleolus begins to disappear",
                            reason: "rRNA transcription ceases, ribosomal proteins disperse"
                        }
                    },
                    
                    lateProphase: {
                        alternative: "Sometimes called Prometaphase",
                        
                        nuclearEnvelope: {
                            event: "Nuclear envelope breaks down (Nuclear Envelope Breakdown, NEBD)",
                            mechanism: "MPF (cyclin B-CDK1) phosphorylates nuclear lamins",
                            lamins: "Intermediate filament proteins forming nuclear lamina",
                            phosphorylation: "Causes lamins to depolymerize → envelope fragments",
                            result: "Nuclear contents mix with cytoplasm",
                            timing: "Critical event marking transition to prometaphase"
                        },
                        
                        kinetochores: {
                            formation: "Kinetochores assemble on centromeres",
                            structure: {
                                innerPlate: "Contacts centromeric chromatin (CENP-A nucleosomes)",
                                outerPlate: "Attachment site for spindle microtubules",
                                proteins: "~100 different proteins (CENP-A, CENP-C, Ndc80 complex, etc.)"
                            },
                            function: "Attachment site for kinetochore microtubules",
                            eachSister: "Each sister chromatid has its own kinetochore",
                            critical: "Must attach to opposite poles (bi-orientation)"
                        },
                        
                        spindleFormation: {
                            description: "Mitotic spindle forms",
                            structure: "Bipolar array of microtubules",
                            poles: "Centrosomes (or spindle pole bodies in yeast)",
                            microtubuleTypes: {
                                kinetochore: {
                                    description: "Attach to kinetochores on chromosomes",
                                    function: "Capture and move chromosomes",
                                    dynamics: "Dynamic instability - grow and shrink until attached"
                                },
                                polar: {
                                    description: "Overlap at spindle midzone (don't attach to chromosomes)",
                                    function: "Push poles apart, stabilize spindle",
                                    interdigitate: "From opposite poles overlap at equator"
                                },
                                astral: {
                                    description: "Radiate from centrosomes toward cell cortex",
                                    function: "Anchor spindle, position it in cell, later specify cleavage plane",
                                    cortexAttachment: "Dynein at cortex pulls on astral microtubules"
                                }
                            }
                        },
                        
                        chromosomeCapture: {
                            description: "Microtubules 'search and capture' chromosomes",
                            mechanism: "Dynamic instability - microtubules grow/shrink until kinetochore contact",
                            stabilization: "Attachment stabilizes microtubule plus-end",
                            lateralAttachment: "Initial attachment often lateral (side of chromosome)",
                            endOnAttachment: "Converted to end-on (stable) attachment",
                            biOrientation: "Each sister must attach to opposite poles",
                            tension: "Correct bi-orientation creates tension (pulling apart but held by cohesin)"
                        },
                        
                        chromosomeMovement: {
                            congression: "Chromosomes begin moving toward metaphase plate",
                            motors: "Kinesin and dynein motors on kinetochores",
                            balancing: "Pull from both poles balances chromosome at equator"
                        }
                    },
                    
                    visualCues: {
                        microscopy: [
                            "Chromosomes visible as thin, tangled threads",
                            "Nucleus still present early, then disappears",
                            "Centrosomes moving to poles (if visible)",
                            "Nucleolus fading"
                        ],
                        distinguishing: "Chromosomes visible but not yet aligned"
                    },
                    
                    molecularControl: {
                        MPF: "Cyclin B-CDK1 phosphorylates targets to drive prophase events",
                        targets: [
                            "Lamins → nuclear envelope breakdown",
                            "Histone H1 → chromosome condensation",
                            "Condensins → activated",
                            "Golgi, ER → fragmentation (for equal distribution)"
                        ]
                    }
                },
                
                metaphase: {
                    name: "Metaphase",
                    duration: "~20 minutes (relatively brief but critical)",
                    percentage: "~15-20% of mitosis time",
                    etymology: "Meta = middle, between",
                    
                    chromosomeAlignment: {
                        description: "All chromosomes aligned at cell equator (metaphase plate)",
                        metaphasePlate: "Imaginary plane equidistant from two spindle poles",
                        notStructure: "Not an actual structure, just position where chromosomes align",
                        precision: "Chromosomes aligned with remarkable precision",
                        reason: "Balanced forces from both poles"
                    },
                    
                    biOrientation: {
                        requirement: "Each sister chromatid must attach to opposite spindle pole",
                        amphitelic: "Correct attachment (sisters to opposite poles)",
                        incorrectAttachments: {
                            monotelic: "One kinetochore attached, one not (incomplete)",
                            syntelic: "Both sisters attached to same pole (wrong)",
                            merotelic: "One kinetochore attached to both poles (wrong)"
                        },
                        correction: "Aurora B kinase detects and destabilizes incorrect attachments",
                        tension: {
                            importance: "Tension from pulling in opposite directions indicates correct attachment",
                            detection: "Aurora B at centromere senses lack of tension",
                            response: "If no tension → destabilize attachment → try again"
                        }
                    },
                    
                    spindleCheckpoint: {
                        name: "M Checkpoint / Spindle Assembly Checkpoint (SAC)",
                        location: "Activated in metaphase",
                        question: "Are all chromosomes properly attached and aligned?",
                        
                        mechanism: {
                            unattachedKinetochore: {
                                signal: "Unattached kinetochore recruits Mad1-Mad2",
                                amplification: "Mad2 undergoes conformational change, becomes 'wait anaphase' signal",
                                spreading: "Mad2 (closed form) catalyzes more Mad2 activation",
                                complex: "Mad2-BubR1-Bub3 complex forms (MCC - Mitotic Checkpoint Complex)"
                            },
                            
                            APCinhibition: {
                                target: "APC/C-Cdc20 (Anaphase Promoting Complex)",
                                inhibition: "MCC binds and inhibits APC/C",
                                result: "APC/C cannot ubiquitinate securin",
                                consequence: "Securin remains stable → separase inhibited → cohesin intact → sisters held together"
                            },
                            
                            satisfaction: {
                                trigger: "When ALL kinetochores attached and under tension",
                                silencing: "Mad2, BubR1 released from kinetochores",
                                MCCdissociation: "MCC falls apart, stops inhibiting APC/C",
                                APCactivation: "APC/C-Cdc20 now active"
                            }
                        },
                        
                        proteins: {
                            sensors: "Mad1, Mad2, BubR1 (Budding Uninhibited by Benzimidazole), Bub3, Mps1",
                            target: "APC/C-Cdc20",
                            downstream: "Securin, cyclin B"
                        },
                        
                        importance: "CRITICAL for preventing aneuploidy (wrong chromosome number)",
                        cancer: "Defects in checkpoint → chromosomal instability → cancer",
                        
                        timing: {
                            normal: "Brief delay (minutes) until all attached",
                            drugs: "Spindle poisons (colchicine, taxol) → chronic arrest → cell death",
                            override: "Extended arrest → eventual 'slippage' through checkpoint → bad outcomes"
                        }
                    },
                    
                    readyForAnaphase: {
                        conditions: [
                            "All chromosomes aligned at metaphase plate",
                            "All kinetochores attached bi-orientally",
                            "All attachments under tension",
                            "Spindle checkpoint satisfied"
                        ],
                        trigger: "APC/C activation initiates anaphase"
                    },
                    
                    visualCues: {
                        microscopy: [
                            "Chromosomes in straight line across cell center",
                            "Maximally condensed - easiest to count",
                            "Spindle visible (if stained)",
                            "Cell appears to 'pause'"
                        ],
                        distinguishing: "Chromosomes perfectly aligned at equator",
                        idealForCounting: "Best stage to count chromosomes (karyotyping)",
                        colchicine: "Arrests cells here (blocks spindle) → accumulate in metaphase"
                    },
                    
                    molecularControl: {
                        maintenance: "High MPF (cyclin B-CDK1) keeps cell in mitosis",
                        cohesin: "Still holds sister chromatids together",
                        tensionSensing: "Aurora B kinase monitors attachment quality",
                        ready: "Once checkpoint satisfied, APC/C triggers anaphase"
                    }
                },
                
                anaphase: {
                    name: "Anaphase",
                    duration: "~10 minutes (shortest mitotic stage but most dramatic)",
                    percentage: "~10% of mitosis time",
                    etymology: "Ana = back, away",
                    
                    trigger: {
                        APCactivation: "APC/C-Cdc20 ubiquitinates securin",
                        securinDegradation: "Proteasome degrades ubiquitinated securin",
                        separaseActivation: "Free separase (protease) is now active",
                        cohesinCleavage: "Separase cleaves cohesin subunit (Scc1/Rad21)",
                        result: "Sister chromatids separate at centromere"
                    },
                    
                    anaphaseA: {
                        name: "Anaphase A - Chromosome to Pole Movement",
                        description: "Sister chromatids (now individual chromosomes) move to opposite poles",
                        
                        mechanism: {
                            kinetochoreMicrotubules: "Shorten by depolymerization",
                            depolymerization: {
                                plusEnd: "At kinetochore - tubulin subunits removed",
                                minusEnd: "At spindle pole - also some depolymerization",
                                motors: "Dynein pulls on kinetochores toward pole"
                            },
                            pacman: "'Pac-Man' model - kinetochore 'chews' microtubule as it moves"
                        },
                        
                        speed: "~1 μm/min in mammalian cells",
                        
                        chromosomeShape: {
                            appearance: "V-shaped or Y-shaped",
                            reason: "Centromere leads (pulled), chromosome arms trail behind",
                            variation: "Shape depends on centromere position (metacentric vs acrocentric)"
                        }
                    },
                    
                    anaphaseB: {
                        name: "Anaphase B - Pole Separation",
                        description: "Spindle poles move farther apart, elongating cell",
                        
                        mechanism: {
                            polarMicrotubules: {
                                sliding: "Polar microtubules from opposite poles slide past each other",
                                motors: "Kinesin-5 (Eg5) walks toward plus-ends → pushes poles apart",
                                lengthening: "Polar microtubules also elongate (polymerize)"
                            },
                            astralMicrotubules: {
                                pulling: "Dynein at cell cortex pulls on astral microtubules",
                                result: "Pulls poles toward cell ends"
                            }
                        },
                        
                        cellElongation: "Cell becomes elongated (oval shape)",
                        contribution: "Further increases distance between chromosome groups"
                    },
                    
                    timing: "Anaphase A and B occur simultaneously (some species), or A then B (others)",
                    
                    visualCues: {
                        microscopy: [
                            "Chromatids moving to opposite ends of cell",
                            "V or Y shape as centromeres lead",
                            "Increasing gap between chromosome groups",
                            "Cell elongating"
                        ],
                        distinguishing: "Chromosomes actively moving, separated into two groups",
                        dramatic: "Most visually dramatic stage - clear movement"
                    },
                    
                    molecularControl: {
                        separase: "Cleaves cohesin → separation",
                        APCcontinues: "APC/C also targets cyclin B for degradation (begins exit from mitosis)",
                        motors: "Dynein, kinesin drive chromosome and pole movements",
                        stabilization: "Kinetochore microtubules destabilize after chromosome reaches pole"
                    },
                    
                    irreversible: "Once cohesin cleaved, cannot rejoin - committed to completing division",
                    
                    errors: {
                        laggingChromosomes: "Chromosome doesn't move properly, lags in middle",
                        chromosomeBridges: "If sisters don't fully separate, can form bridge",
                        nondisjunction: "Both sisters go to same pole (very rare in mitosis)",
                        consequences: "Aneuploidy, micronuclei formation, genomic instability"
                    }
                },
                
                telophase: {
                    name: "Telophase",
                    duration: "~20-30 minutes",
                    percentage: "~15-20% of mitosis time",
                    etymology: "Telo = end",
                    description: "Reversal of prophase events - reforming nuclei",
                    
                    chromosomeDecondensation: {
                        description: "Chromosomes begin to decondense",
                        mechanism: "Condensin proteins released, chromatin expands",
                        result: "Chromosomes become less visible, return to interphase chromatin",
                        reason: "Need to access DNA for transcription"
                    },
                    
                    nuclearEnvelopeReformation: {
                        description: "Nuclear envelopes reform around each chromosome group",
                        mechanism: {
                            step1: "Nuclear envelope fragments (from prophase) associate with chromatin",
                            step2: "ER membranes recruited to chromosomes",
                            step3: "Membrane vesicles fuse around chromosome groups",
                            step4: "Nuclear pore complexes insert into envelope",
                            step5: "Continuous double membrane forms"
                        },
                        laminReassembly: "Lamins dephosphorylated → polymerize → reform nuclear lamina",
                        result: "Two separate nuclei form"
                    },
                    
                    nucleolusReformation: {
                        description: "Nucleolus reappears in each nucleus",
                        mechanism: "rRNA genes (NORs - Nucleolar Organizing Regions) on specific chromosomes → recruit proteins → nucleolus reforms",
                        function: "Resume ribosome production"
                    },
                    
                    spindleDisassembly: {
                        description: "Mitotic spindle breaks down",
                        mechanism: "Microtubules depolymerize",
                        exception: "Central spindle (midzone) microtubules stabilized (needed for cytokinesis)"
                    },
                    
                    midbody: {
                        description: "Dense structure of bundled microtubules at former metaphase plate",
                        composition: "Remnants of overlapping polar microtubules",
                        proteins: "MKLP1, centralspindlin, Aurora B",
                        function: "Guides cytokinesis, marks division site",
                        persistence: "Remains until final abscission",
                        fate: "Can be inherited by one daughter cell or degraded"
                    },
                    
                    cytokinesisBegins: {
                        timing: "Overlaps with telophase",
                        cleavageFurrow: "In animal cells, begins to form",
                        cellPlate: "In plant cells, begins to form",
                        positioning: "Specified by central spindle and astral microtubules"
                    },
                    
                    visualCues: {
                        microscopy: [
                            "Chromosomes at opposite poles, beginning to decondense",
                            "Nuclear envelopes reforming (two nuclei visible)",
                            "Nucleoli reappearing",
                            "Cell beginning to pinch (cleavage furrow) or cell plate forming",
                            "Midbody visible as dense region between nuclei"
                        ],
                        distinguishing: "Two nuclei forming, cell dividing"
                    },
                    
                    molecularControl: {
                        cyclinBdegradation: "APC/C degrades cyclin B → MPF inactivated → exit from mitosis",
                        CDK1inactivation: "Without cyclin B, CDK1 inactive",
                        phosphatases: "Dephosphorylate MPF targets (lamins, etc.) → reversal of prophase",
                        commitment: "Exit from mitosis is irreversible"
                    }
                },
                
                cytokinesis: {
                    note: "See separate Cytokinesis handler for full details",
                    timing: "Begins in late anaphase/early telophase, completes after telophase",
                    importance: "Completes cell division (mitosis divides nucleus; cytokinesis divides cell)",
                    animalCells: "Cleavage furrow via contractile ring (actin-myosin)",
                    plantCells: "Cell plate formation via vesicle fusion"
                }
            },
            
            mitoticSpindle: {
                definition: "Bipolar structure of microtubules that segregates chromosomes",
                importance: "Essential for equal chromosome distribution",
                
                structure: {
                    poles: {
                        animalCells: "Centrosomes (containing centriole pairs)",
                        plantCells: "No centrosomes; microtubules nucleate from multiple sites",
                        organization: "MTOCs (Microtubule Organizing Centers)"
                    },
                    
                    microtubules: {
                        composition: "α and β tubulin heterodimers polymerize into hollow tubes",
                        polarity: "Minus-end at pole, plus-end extending outward",
                        dynamics: "Dynamic instability - constant growth and shrinkage",
                        
                        types: {
                            kinetochore: {
                                attachment: "Plus-ends attach to kinetochores",
                                number: "~20-40 per kinetochore in mammals",
                                function: "Capture, align, and segregate chromosomes",
                                stability: "Stabilized when attached under tension"
                            },
                            polar: {
                                overlap: "From opposite poles, interdigitate at spindle midzone",
                                function: "Push poles apart, provide structural support",
                                motors: "Kinesin-5 (Eg5) slides them past each other"
                            },
                            astral: {
                                extension: "Extend from poles to cell cortex",
                                function: "Anchor and position spindle, specify cleavage plane",
                                cortexInteraction: "Dynein at cortex pulls on astral MTs"
                            }
                        }
                    }
                },
                
                assembly: {
                    searchAndCapture: {
                        mechanism: "Microtubules grow and shrink until kinetochore contact",
                        stabilization: "Attachment stabilizes plus-end",
                        errorCorrection: "Incorrect attachments destabilized by Aurora B"
                    },
                    selfOrganization: "Spindle can self-organize even without centrosomes (e.g., plant cells, some experiments)"
                },
                
                motorProteins: {
                    kinesinFamily: {
                        kinesin5_Eg5: "Slides polar microtubules apart (outward force)",
                        kinesin4_7: "Regulate microtubule length",
                        kinesin13: "Microtubule depolymerase (shortens microtubules)"
                    },
                    dynein: {
                        location: "Kinetochores, cell cortex, spindle poles",
                        function: "Pulls chromosomes poleward, anchors spindle"
                    }
                },
                
                checkpointMonitoring: "Spindle checkpoint monitors kinetochore attachment and tension",
                
                drugs: {
                    colchicine: "Prevents microtubule polymerization → no spindle → metaphase arrest",
                    taxol_paclitaxel: "Stabilizes microtubules → cannot depolymerize → spindle dysfunction → arrest",
                    nocodazole: "Depolymerizes microtubules → used in research",
                    use: "Chemotherapy (target rapidly dividing cancer cells)"
                }
            },
            
            significance: {
                growth: {
                    description: "Increase cell number during development and growth",
                    examples: [
                        "Embryonic development: zygote → morula → blastula → gastrula",
                        "Child growth: increase in size and mass",
                        "Tissue expansion during development"
                    ],
                    rate: "Human: millions of mitotic divisions per second"
                },
                
                repair: {
                    description: "Replace damaged, dead, or worn-out cells",
                    examples: [
                        "Wound healing: skin, blood vessel, connective tissue repair",
                        "Bone fracture healing",
                        "Liver regeneration after injury"
                    ],
                    mechanism: "Quiescent (G₀) cells re-enter cycle, divide until repair complete"
                },
                
                maintenance: {
                    description: "Continuous replacement of cells in high-turnover tissues",
                    examples: [
                        "Skin: outer layer replaced every 2-4 weeks",
                        "Intestinal lining: replaced every 3-5 days",
                        "Blood cells: billions produced daily (erythrocytes, leukocytes, platelets)",
                        "Hair follicle cells: continuous growth"
                    ],
                    balance: "Division rate = cell loss rate (homeostasis)"
                },
                
                asexualReproduction: {
                    description: "Entire organism from mitotic divisions",
                    unicellular: "Amoeba, paramecium, yeast (budding)",
                    multicellular: [
                        "Hydra budding",
                        "Planaria regeneration",
                        "Plant vegetative propagation (cuttings, runners, tubers)",
                        "Starfish regeneration from arm"
                    ],
                    advantage: "Rapid, no need for mate",
                    disadvantage: "No genetic variation (clones)"
                },
                
                geneticIdentity: {
                    importance: "Maintains genetic consistency across cell populations",
                    examples: [
                        "All cells in body genetically identical (from zygote)",
                        "Tissue-specific gene expression, not different genomes",
                        "Cloning produces genetically identical individuals"
                    ]
                }
            },
            
            errors: {
                nondisjunction: {
                    definition: "Failure of sister chromatids to separate in anaphase",
                    rarity: "Very rare in mitosis (more common in meiosis)",
                    result: "One daughter: 2n+1 (trisomy for that chromosome); other: 2n-1 (monosomy)",
                    consequences: "Aneuploidy, usually cell death or cancer progression"
                },
                
                laggingChromosomes: {
                    description: "Chromosome doesn't move to pole in anaphase, lags behind",
                    causes: "Weak kinetochore attachment, merotelic attachment",
                    result: "May be excluded from nucleus → micronucleus formation"
                },
                
                multipolarSpindle: {
                    description: "More than two spindle poles",
                    causes: "Centrosome amplification (extra centrosomes)",
                    cancer: "Common in cancer cells",
                    result: "Unequal chromosome distribution, aneuploidy"
                },
                
                chromosomeBridges: {
                    description: "Chromatin stretched between daughter cells",
                    causes: "Incomplete DNA replication, unresolved DNA structures",
                    result: "Chromosome breakage, loss of genetic material"
                },
                
                cytokinesisFailure: {
                    description: "Mitosis completes but cytokinesis fails",
                    result: "Binucleate cell (two nuclei, one cell)",
                    tetraploidy: "If cell divides again, becomes tetraploid (4n)",
                    cancer: "Pathway to aneuploidy and chromosomal instability"
                },
                
                checkpointDefects: {
                    description: "Defective spindle checkpoint",
                    result: "Proceed to anaphase despite misattached chromosomes",
                    consequence: "Aneuploidy, genomic instability, cancer"
                }
            },
            
            comparison: {
                mitosisVsMeiosis: {
                    purpose: "Growth, repair vs Gamete production",
                    divisions: "One division vs Two divisions",
                    daughterCells: "Two vs Four",
                    chromosomeNumber: "2n → 2n, 2n (maintains) vs 2n → n, n, n, n (reduces)",
                    geneticVariation: "None (identical) vs High (crossing over, independent assortment)",
                    synapsis: "No vs Yes (prophase I)",
                    crossingOver: "No vs Yes (prophase I)",
                    location: "Somatic cells vs Germ cells",
                    frequency: "Throughout life vs Limited (gametogenesis)"
                },
                
                animalVsPlantMitosis: {
                    centrioles: "Present vs Absent",
                    spindleFormation: "From centrosomes vs Multiple sites",
                    cytokinesis: "Cleavage furrow vs Cell plate",
                    cellWall: "Absent vs Present (affects cytokinesis)",
                    overall: "Mitosis itself very similar; cytokinesis differs"
                }
            },
            
            molecularMechanisms: {
                chromosomeCondensation: {
                    condensinComplex: "SMC (Structural Maintenance of Chromosomes) proteins",
                    mechanism: "ATP-dependent DNA loop formation",
                    regulation: "Phosphorylation by CDK1 activates condensins",
                    result: "~10,000-fold compaction"
                },
                
                cohesion: {
                    cohesinComplex: "Ring-shaped complex holds sister chromatids together",
                    establishment: "During S phase, cohesin loads onto DNA",
                    maintenance: "Protects from separase until anaphase",
                    removal: {
                        prophase: "Cohesin along chromosome arms removed (phosphorylation by Plk1)",
                        metaphase: "Centromeric cohesin protected by Shugoshin protein",
                        anaphase: "Separase cleaves centromeric cohesin → separation"
                    }
                },
                
                nuclearEnvelopeBreakdown: {
                    trigger: "MPF phosphorylates lamins",
                    mechanism: "Lamin phosphorylation → depolymerization → envelope fragments",
                    reversibility: "Dephosphorylation in telophase → reassembly"
                },
                
                spindleAssembly: {
                    RanGTP: "Gradient around chromosomes promotes microtubule assembly",
                    motors: "Dynein, kinesins organize microtubules into bipolar spindle",
                    checkpoint: "Mad2, BubR1 monitor attachment"
                }
            },
            
            clinicalRelevance: {
                cancer: {
                    uncontrolledMitosis: "Loss of checkpoint control → continuous division",
                    aneuploidy: "Chromosome missegregation → genomic instability",
                    mutations: "p53, Rb, Mad2, BubR1 defects"
                },
                
                chemotherapy: {
                    principle: "Target rapidly dividing cells",
                    drugs: [
                        "Vinca alkaloids (vincristine, vinblastine) - block microtubule polymerization",
                        "Taxanes (paclitaxel, docetaxel) - stabilize microtubules",
                        "Both → spindle dysfunction → mitotic arrest → apoptosis"
                    ],
                    sideEffects: "Also affect normal dividing cells (hair, GI, bone marrow)"
                },
                
                kinetochoreDisorders: {
                    robertsonianTranslocations: "Chromosomes fused at centromeres",
                    consequnces: "Fertility problems, Down syndrome risk"
                }
            },
            
            examples: [
                {
                    tissue: "Bone marrow",
                    rate: "Billions of blood cells produced daily",
                    types: "Erythrocytes (~2 million/second), leukocytes, platelets",
                    mechanism: "Hematopoietic stem cells undergo mitosis → differentiate"
                },
                {
                    tissue: "Skin epidermis",
                    rate: "Complete replacement every 2-4 weeks",
                    layers: "Basal cells divide → migrate outward → differentiate → shed",
                    importance: "Barrier function, constant renewal"
                },
                {
                    tissue: "Intestinal crypts",
                    rate: "Entire lining replaced every 3-5 days",
                    mechanism: "Stem cells at crypt base divide → migrate up villi → shed at tip",
                    fastest: "One of fastest renewing tissues in body"
                },
                {
                    tissue: "Liver",
                    baseline: "Normally quiescent (G₀)",
                    regeneration: "Can restore 75% mass loss within weeks",
                    mechanism: "Growth factors → hepatocytes re-enter cycle → divide until mass restored → G₀"
                },
                {
                    organism: "Hydra",
                    reproduction: "Asexual budding",
                    mechanism: "Mitotic divisions form bud → detaches → independent organism",
                    regeneration: "Can regenerate entire organism from small piece"
                },
                {
                    organism: "Plant cuttings",
                    mechanism: "Stem cutting placed in soil → mitosis produces roots and shoots",
                    advantage: "Clone desirable plants (no genetic variation)",
                    horticulture: "Common in gardening and agriculture"
                }
            ],
            
            applications: [
                "Cancer research: Understanding mitotic errors and checkpoint defects",
                "Chemotherapy development: Drugs targeting mitosis (spindle poisons)",
                "Regenerative medicine: Stimulating controlled cell division for tissue repair",
                "Cloning and biotechnology: Plant propagation, animal cloning (Dolly the sheep)",
                "Cell culture: Growing cells for research, vaccine production, tissue engineering",
                "Understanding developmental disorders: Microcephaly (reduced cell division in brain)",
                "Karyotyping: Arrest cells in metaphase to visualize chromosomes",
                "Fertility: Understanding meiotic errors that also apply to mitosis"
            ]
        };
        
        return content;
    }

    handleMeiosis(problem) {
        const content = {
            topic: "Meiosis: Reduction Division and Genetic Diversity",
            category: 'cell_division',
            summary: "Meiosis is a specialized two-division process that produces four genetically unique haploid gametes from one diploid germ cell. It reduces chromosome number by half and generates genetic diversity through crossing over and independent assortment, essential for sexual reproduction and evolution.",
            
            overview: {
                definition: "Meiosis is a type of cell division that reduces the chromosome number by half and produces four haploid gametes, each genetically unique",
                etymology: "Meiosis from Greek 'meioun' = to diminish, to lessen",
                purpose: [
                    "Reduce chromosome number from diploid (2n) to haploid (n)",
                    "Generate genetic variation through recombination and independent assortment",
                    "Produce gametes (sex cells) for sexual reproduction",
                    "Maintain constant chromosome number across generations"
                ],
                divisions: "Two consecutive divisions: Meiosis I and Meiosis II",
                result: "Four haploid (n) cells from one diploid (2n) cell",
                uniqueness: "Each gamete genetically different from parent and from each other",
                location: "Occurs only in germ cells (cells destined to become gametes)",
                timing: {
                    males: "Spermatogenesis - begins at puberty, continuous",
                    females: "Oogenesis - begins before birth, arrests twice, completes at fertilization"
                }
            },
            
            prerequisite: {
                Sphase: "DNA replication occurs before meiosis I (in meiotic S phase)",
                starting: {
                    chromosomes: "2n (diploid)",
                    DNA: "4c (after replication)",
                    structure: "Each chromosome = 2 sister chromatids"
                },
                homologousPairs: "Have maternal and paternal homologs of each chromosome"
            },
            
            meiosisI: {
                name: "Meiosis I - Reduction Division",
                altName: "First meiotic division, Reductional division",
                purpose: "Separate homologous chromosomes (not sister chromatids)",
                duration: "Hours to years depending on organism and stage (especially prophase I)",
                result: "Two haploid cells (n), but each chromosome still has 2 sister chromatids (2c DNA)",
                key: "Chromosome number reduced from 2n to n",
                
                prophaseI: {
                    name: "Prophase I",
                    duration: "Can last hours to years (longest phase of meiosis)",
                    complexity: "Most complex stage of meiosis, divided into 5 substages",
                    significance: "Crossing over occurs here - THE source of genetic recombination",
                    
                    substages: {
                        leptotene: {
                            name: "Leptotene (Leptos = thin)",
                            events: [
                                "Chromosomes begin to condense (appear as thin threads)",
                                "Chromosome ends (telomeres) attach to nuclear envelope (bouquet formation)",
                                "Homology search begins - chromosomes start finding their partners",
                                "Axial elements (protein scaffolds) form along chromosome axes"
                            ],
                            visualization: "Thin, thread-like chromosomes"
                        },
                        
                        zygotene: {
                            name: "Zygotene (Zygon = joining)",
                            events: [
                                "Synapsis begins - homologous chromosomes pair up",
                                "Synaptonemal complex (SC) begins to form between homologs",
                                "Pairing is very precise - gene-by-gene alignment",
                                "Recombination nodules appear (sites of crossing over)"
                            ],
                            synaptonemalComplex: {
                                structure: "Zipper-like protein structure holding homologs together",
                                components: "Lateral elements (on each chromosome), central element, transverse filaments",
                                spacing: "Holds homologs ~100 nm apart",
                                proteins: "SYCP1, SYCP2, SYCP3 (synaptonemal complex proteins)",
                                function: "Mediates synapsis, facilitates recombination"
                            },
                            visualization: "Chromosomes pairing up, partial synapsis"
                        },
                        
                        pachytene: {
                            name: "Pachytene (Pachys = thick)",
                            events: [
                                "Synapsis complete - all homologs fully paired (bivalents formed)",
                                "Crossing over occurs - exchange of DNA between non-sister chromatids",
                                "Recombination nodules mark crossover sites",
                                "Chromosomes maximally condensed in prophase I"
                            ],
                            
                            bivalent: {
                                definition: "Paired homologous chromosomes (= tetrad)",
                                composition: "2 homologous chromosomes = 4 chromatids total",
                                terminology: "Bivalent (2 chromosomes) = Tetrad (4 chromatids) - same structure",
                                number: "In humans: 23 bivalents (from 46 chromosomes)"
                            },
                            
                            crossingOver: {
                                definition: "Exchange of DNA segments between non-sister chromatids of homologous chromosomes",
                                significance: "PRIMARY source of genetic recombination",
                                
                                mechanism: {
                                    step1: "SPO11 enzyme creates programmed double-strand breaks (DSBs) in DNA",
                                    step2: "DSBs processed → 3' single-stranded overhangs",
                                    step3: "RecA homologs (Rad51, Dmc1) facilitate strand invasion into homologous chromosome",
                                    step4: "Holliday junctions form (crossover intermediates)",
                                    step5: "Homologous recombination repair using homolog as template",
                                    step6: "Resolution of Holliday junctions → crossover or non-crossover",
                                    step7: "Crossovers become visible as chiasmata in next stage"
                                },
                                
                                frequency: {
                                    minimum: "At least 1 crossover per homologous pair (ensures proper segregation)",
                                    typical: "2-3 crossovers per chromosome pair in humans",
                                    variation: "Varies by chromosome size (longer = more crossovers)",
                                    total: "~50-60 crossovers per human meiosis (23 pairs × ~2-3 each)"
                                },
                                
                                nonSisterChromatids: {
                                    critical: "Occurs between NON-sister chromatids",
                                    meaning: "Between chromatids of maternal and paternal homologs",
                                    notBetween: "NOT between sister chromatids (they're identical)",
                                    result: "Recombinant chromosomes with new allele combinations"
                                },
                                
                                interference: {
                                    definition: "One crossover reduces probability of nearby crossover",
                                    function: "Ensures crossovers spread along chromosome",
                                    mechanism: "Not fully understood, involves stress on chromosome structure"
                                },
                                
                                geneticConsequence: {
                                    recombination: "Breaks linkage between genes on same chromosome",
                                    novelCombinations: "Creates chromosomes not present in either parent",
                                    example: "Parent has AB and ab; crossing over creates Ab and aB",
                                    evolution: "Increases genetic variation in population"
                                }
                            },
                            
                            duration: "Days to years (varies by organism; oocytes can arrest here for decades)",
                            visualization: "Thick, fully paired chromosomes (bivalents)"
                        },
                        
                        diplotene: {
                            name: "Diplotene (Diplos = double)",
                            events: [
                                "Synaptonemal complex begins to dissolve",
                                "Homologous chromosomes begin to separate (desynapsis)",
                                "Chiasmata become visible (X-shaped connections)",
                                "Chromosomes held together only at chiasmata",
                                "In oocytes: can arrest here for years ('dictyate' stage)"
                            ],
                            
                            chiasmata: {
                                definition: "Visible points where crossing over occurred",
                                appearance: "X-shaped connections between homologs",
                                function: "Hold homologous chromosomes together until anaphase I",
                                number: "At least 1 per bivalent (often 2-3)",
                                terminal: "Chiasmata often slide toward chromosome ends (terminalization)",
                                critical: "Required for proper chromosome segregation in meiosis I"
                            },
                            
                            arrest: {
                                oocytes: "Primary oocytes arrest in diplotene (dictyate stage)",
                                human: "Arrest begins before birth, can last decades",
                                resumption: "LH surge triggers resumption at ovulation",
                                significance: "Why maternal age affects meiotic errors (cohesin degradation over time)"
                            },
                            
                            visualization: "Homologs separating, chiasmata visible as X's"
                        },
                        
                        diakinesis: {
                            name: "Diakinesis (Dia = through, Kinesis = movement)",
                            events: [
                                "Chromosomes maximally condensed (shortest and thickest)",
                                "Nuclear envelope begins to break down",
                                "Nucleolus disappears",
                                "Spindle begins to form",
                                "Chiasmata terminalize (move toward chromosome ends)",
                                "Transition to metaphase I"
                            ],
                            visualization: "Maximally condensed bivalents, chiasmata at ends"
                        }
                    },
                    
                    summary: "Prophase I is characterized by synapsis, crossing over, and bivalent formation. Crossing over creates genetic diversity."
                },
                
                metaphaseI: {
                    name: "Metaphase I",
                    duration: "Relatively brief",
                    
                    alignment: {
                        description: "Bivalents (not individual chromosomes) align at metaphase plate",
                        key: "Homologous PAIRS at plate, not individual chromosomes",
                        orientation: "Each bivalent oriented randomly (independent assortment)"
                    },
                    
                    attachment: {
                        kinetochores: "Sister kinetochores face SAME pole (co-orient)",
                        biOrientation: "Bivalent has kinetochores on opposite sides facing opposite poles",
                        tension: "Chiasmata provide tension (pulling homologs apart but held together)",
                        difference: "Contrast with mitosis: sisters face opposite poles"
                    },
                    
                    independentAssortment: {
                        definition: "Random orientation of each homologous pair",
                        meaning: "Maternal vs paternal of each pair randomly distributed",
                        example: "Chromosome 1 maternal to left, 2 paternal to left, 3 maternal to left... all random",
                        calculation: "2ⁿ possible combinations (n = haploid number)",
                        human: "2²³ = 8,388,608 possible combinations from independent assortment alone",
                        mendel: "Basis of Mendel's Law of Independent Assortment",
                        variation: "Major source of genetic diversity"
                    },
                    
                    checkpoint: {
                        name: "Meiosis I spindle checkpoint",
                        check: "Are all bivalents attached and bi-oriented?",
                        proteins: "Mad2, BubR1 (same as mitosis)",
                        satisfaction: "When all bivalents properly attached"
                    },
                    
                    visualization: "Bivalents lined up at cell equator"
                },
                
                anaphaseI: {
                    name: "Anaphase I",
                    duration: "Relatively brief",
                    
                    separation: {
                        what: "HOMOLOGOUS CHROMOSOMES separate (not sister chromatids)",
                        key: "Sisters stay together; homologs separate",
                        contrast: "Opposite of mitosis (mitosis separates sisters)"
                    },
                    
                    mechanism: {
                        trigger: "APC/C activated (similar to mitosis)",
                        cohesinCleavage: {
                            arms: "Cohesin along chromosome arms was already removed (prophase I)",
                            centromere: "Centromeric cohesin PROTECTED (not cleaved)",
                            protection: "Shugoshin protein protects centromeric cohesin from separase",
                            result: "Sister chromatids stay together; homologs separate"
                        },
                        chiasmataResolution: "Chiasmata resolved, homologs pulled apart",
                        movement: "Each homolog (2 sister chromatids) moves to opposite pole"
                    },
                    
                    result: {
                        eachPole: "Receives n chromosomes (haploid number)",
                        chromatids: "Each chromosome still consists of 2 sister chromatids",
                        DNA: "Each cell has n chromosomes but 2c DNA (sister chromatids still joined)"
                    },
                    
                    reductionDivision: {
                        significance: "THIS is where reduction from 2n to n occurs",
                        reason: "Homologs separate; only one of each type goes to each pole"
                    },
                    
                    visualization: "Homologous chromosomes (each = 2 chromatids) moving to opposite poles"
                },
                
                telophaseI: {
                    name: "Telophase I",
                    duration: "Variable (sometimes brief or absent)",
                    
                    events: [
                        "Chromosomes arrive at poles",
                        "May or may not decondense (varies by species)",
                        "Nuclear envelopes may or may not reform (varies)",
                        "Cytokinesis occurs (cytoplasm divides)"
                    ],
                    
                    variability: "Highly variable among species",
                    
                    result: {
                        cells: "Two haploid cells",
                        chromosomes: "n chromosomes per cell",
                        DNA: "2c DNA per cell (sister chromatids still joined)",
                        clarification: "Haploid number of chromosomes, but diploid amount of DNA"
                    }
                },
                
                interkinesis: {
                    name: "Interkinesis (or Interphase II)",
                    description: "Brief pause between meiosis I and meiosis II",
                    duration: "Variable (may be very brief or even absent)",
                    
                    CRITICAL: {
                        noSphase: "NO DNA REPLICATION",
                        emphasis: "This is the KEY difference from mitotic interphase",
                        reason: "DNA already replicated before meiosis I; no need to replicate again",
                        consequence: "Meiosis II proceeds immediately (or after brief pause)"
                    },
                    
                    events: {
                        limited: "Limited metabolic activity, prepare for meiosis II",
                        spindle: "Spindle may disassemble and reform, or persist"
                    }
                }
            },
            
            meiosisII: {
                name: "Meiosis II - Equational Division",
                altName: "Second meiotic division",
                description: "Resembles mitosis, separates sister chromatids",
                purpose: "Separate sister chromatids",
                starting: {
                    cells: "Two haploid cells from meiosis I",
                    chromosomes: "n chromosomes per cell",
                    DNA: "2c DNA per cell"
                },
                result: "Four haploid cells, n chromosomes, 1c DNA each",
                
                prophaseII: {
                    name: "Prophase II",
                    events: [
                        "Chromosomes condense (if they decondensed)",
                        "Nuclear envelope breaks down (if it reformed)",
                        "Spindle forms in each cell",
                        "Centrosomes move to opposite poles"
                    ],
                    resembles: "Prophase of mitosis",
                    brief: "Usually rapid"
                },
                
                metaphaseII: {
                    name: "Metaphase II",
                    
                    alignment: {
                        description: "Chromosomes align at metaphase plate",
                        individual: "INDIVIDUAL chromosomes (not bivalents)",
                        resembles: "Metaphase of mitosis"
                    },
                    
                    attachment: {
                        kinetochores: "Sister kinetochores face OPPOSITE poles",
                        biOrientation: "Like mitosis",
                        difference: "Contrast with metaphase I where sisters faced same pole"
                    },
                    
                    checkpoint: "Spindle checkpoint ensures proper attachment",
                    
                    arrest: {
                        oocyte: "Secondary oocyte arrests here (metaphase II)",
                        human: "Ovulated egg arrested at metaphase II",
                        resumption: "Sperm entry triggers completion of meiosis II",
                        ifNoFertilization: "Egg degenerates within 24 hours"
                    }
                },
                
                anaphaseII: {
                    name: "Anaphase II",
                    
                    separation: {
                        what: "SISTER CHROMATIDS separate",
                        trigger: "APC/C → securin degraded → separase active",
                        cohesinCleavage: "Centromeric cohesin now cleaved (no longer protected)",
                        movement: "Individual chromatids (now chromosomes) move to opposite poles"
                    },
                    
                    resembles: "Anaphase of mitosis (sisters separate)",
                    
                    result: "Each pole receives n chromatids (now called chromosomes)"
                },
                
                telophaseII: {
                    name: "Telophase II",
                    
                    events: [
                        "Chromosomes arrive at poles",
                        "Nuclear envelopes reform around each set",
                        "Chromosomes decondense",
                        "Nucleoli reappear",
                        "Cytokinesis occurs"
                    ],
                    
                    result: {
                        cells: "Four haploid cells total (from original diploid cell)",
                        chromosomes: "n chromosomes per cell",
                        DNA: "1c DNA per cell",
                        uniqueness: "Each genetically unique (crossing over + independent assortment)"
                    },
                    
                    gametes: {
                        males: "Four functional sperm",
                        females: "One functional egg + three polar bodies (see Gametogenesis)"
                    }
                }
            },
            
            geneticVariation: {
                importance: "Genetic variation is essential for evolution, adaptation, and sexual reproduction",
                sources: "Meiosis generates variation through three mechanisms",
                
                crossingOver: {
                    definition: "Exchange of DNA between homologous chromosomes in prophase I",
                    location: "Between non-sister chromatids",
                    timing: "Pachytene of prophase I",
                    
                    frequency: {
                        typical: "2-3 crossovers per chromosome pair",
                        human: "~50-60 total crossovers per meiosis",
                        variation: "Varies by chromosome size, sex, age"
                    },
                    
                    result: {
                        recombinantChromosomes: "Chromosomes with new allele combinations",
                        breakLinkage: "Separates alleles that were on same chromosome",
                        example: {
                            parent: "Chromosome with A-B alleles or a-b alleles",
                            crossingOver: "Can produce A-b or a-B recombinants"
                        }
                    },
                    
                    recombinationFrequency: {
                        definition: "Percentage of recombinant offspring",
                        calculation: "(# recombinants / total offspring) × 100",
                        distance: "Recombination frequency proportional to distance between genes",
                        mapping: "1% recombination = 1 map unit (1 centiMorgan, cM)",
                        maximum: "50% (genes very far apart or on different chromosomes act independent)"
                    },
                    
                    calculation: {
                        withCrossingOver: "Vast number of possible combinations",
                        complexity: "Each crossover multiplies possible combinations",
                        estimate: "Trillions of possible gamete types from crossing over alone"
                    }
                },
                
                independentAssortment: {
                    definition: "Random distribution of maternal and paternal homologs into gametes",
                    location: "Metaphase I",
                    mechanism: "Each homologous pair orients independently",
                    
                    calculation: {
                        formula: "2ⁿ possible combinations (n = haploid number)",
                        human: "2²³ = 8,388,608 different gametes from one person",
                        fruit: "Drosophila 2⁴ = 16 different gametes",
                        pea: "Mendel's pea 2⁷ = 128 different gametes"
                    },
                    
                    example: {
                        simple: "2 chromosome pairs → 4 possible gamete types",
                        combinations: "AB, Ab, aB, ab",
                        mendel: "Basis of Mendel's Law of Independent Assortment"
                    },
                    
                    assumption: "Assumes no crossing over (crossing over adds much more variation)"
                },
                
                randomFertilization: {
                    definition: "Any sperm can fertilize any egg",
                    
                    calculation: {
                        formula: "(2ⁿ)² = 2²ⁿ possible offspring from two parents",
                        human: "(2²³)² = 2⁴⁶ = 70 trillion possible combinations",
                        reality: "Even more with crossing over"
                    },
                    
                    significance: "Explains why siblings are different (except identical twins)"
                },
                
                totalVariation: {
                    combined: "Crossing over × Independent assortment × Random fertilization",
                    result: "Virtually unlimited genetic diversity",
                    estimate: "Each human can produce >70 trillion genetically unique offspring (not counting crossing over)",
                    withCrossingOver: "Astronomically higher",
                    uniqueness: "Probability of two individuals being identical (except twins) is essentially zero"
                }
            },
            
            errors: {
                nondisjunction: {
                    definition: "Failure of chromosomes to separate properly",
                    
                    meiosisI: {
                        event: "Homologous chromosomes fail to separate in anaphase I",
                        result: "One cell gets both homologs (n+1), other gets neither (n-1)",
                        gametes: "All four gametes abnormal: two n+1, two n-1",
                        frequency: "More common than meiosis II nondisjunction"
                    },
                    
                    meiosisII: {
                        event: "Sister chromatids fail to separate in anaphase II",
                        result: "One cell gets both sisters (n+1), one gets neither (n-1), two normal (n)",
                        gametes: "Two abnormal (n+1, n-1), two normal (n)",
                        frequency: "Less common"
                    },
                    
                    fertilization: {
                        n1_gamete: "n+1 + normal n = 2n+1 (trisomy)",
                        nminus1_gamete: "n-1 + normal n = 2n-1 (monosomy)",
                        consequences: "Aneuploidy in offspring"
                    },
                    
                    causes: {
                        cohesionDefects: "Cohesin degradation (especially in aged oocytes)",
                        spindleDefects: "Spindle abnormalities, attachment errors",
                        checkpointFailure: "Checkpoint proteins defective",
                        age: "Maternal age strongly increases risk"
                    }
                },
                
                humanDisorders: {
                    downSyndrome: {
                        karyotype: "47,XX or XY,+21 (trisomy 21)",
                        cause: "Nondisjunction of chromosome 21 (90% meiosis I, 10% meiosis II)",
                        frequency: "1/700 births (average); increases with maternal age",
                        age: "1/1500 at age 20 → 1/30 at age 45",
                        features: "Intellectual disability, heart defects, characteristic facial features"
                    },
                    edwardsSyndrome: {
                        karyotype: "47,XX or XY,+18 (trisomy 18)",
                        severity: "Usually fatal in infancy",
                        frequency: "1/5000 births"
                    },
                    patauSyndrome: {
                        karyotype: "47,XX or XY,+13 (trisomy 13)",
                        severity: "Severe, usually fatal",
                        frequency: "1/10,000 births"
                    },
                    turnerSyndrome: {
                        karyotype: "45,X (monosomy X)",
                        affected: "Females only",
                        features: "Short stature, webbed neck, infertility, no intellectual disability",
                        frequency: "1/2500 female births",
                        viable: "Only viable monosomy in humans"
                    },
                    klinefelterSyndrome: {
                        karyotype: "47,XXY (XXY)",
                        affected: "Males",
                        features: "Tall, small testes, gynecomastia, often infertile, mild learning difficulties",
                        frequency: "1/500-1000 male births"
                    },
                    tripleX: {
                        karyotype: "47,XXX",
                        features: "Usually normal, tall stature, may have learning difficulties"
                    },
                    XYY: {
                        karyotype: "47,XYY",
                        features: "Usually normal, tall stature"
                    },
                    note: "Autosomal monosomies (2n-1 for autosomes) are lethal; only X monosomy viable"
                },
                
                maternalAgeEffect: {
                    observation: "Risk of aneuploidy increases dramatically with maternal age",
                    mechanism: {
                        oocyteArrest: "Oocytes arrested in prophase I since before birth",
                        cohesinDegradation: "Cohesin proteins holding sisters together degrade over decades",
                        ageEffect: "Older oocytes: weaker cohesion → more likely to missegregate",
                        proteins: "REC8, SMC1β cohesin subunits degrade with age"
                    },
                    statistics: {
                        age20: "Down syndrome risk: 1/1500",
                        age35: "1/350 (threshold for increased screening)",
                        age40: "1/100",
                        age45: "1/30",
                        exponential: "Risk increases exponentially after 35"
                    },
                    paternalAge: "Much weaker effect (fresh meiosis each sperm production)"
                }
            },
            
            comparison: {
                meiosisIMitosis: {
                    synapsis: "Yes (bivalent formation) vs No",
                    crossingOver: "Yes (prophase I) vs No",
                    separation: "Homologs separate vs Sisters separate",
                    result: "Haploid cells (n) vs Diploid cells (2n)",
                    genetic: "Variation vs Identical"
                },
                
                meiosisIIMitosis: {
                    similarity: "Both separate sister chromatids",
                    starting: "Haploid (n) vs Diploid (2n)",
                    result: "Haploid (n) vs Diploid (2n)",
                    DNAreaplication: "No S phase before meiosis II vs Yes before mitosis",
                    purpose: "Part of gamete formation vs Growth/repair"
                },
                
                meiosisIvsMeiosisII: {
                    meiosisI: "Homologs separate, n chromosomes (2c DNA)",
                    meiosisII: "Sisters separate, n chromosomes (1c DNA)",
                    reduction: "Meiosis I reduces number, meiosis II reduces DNA content",
                    unique: "Meiosis I unique (synapsis, crossing over); meiosis II like mitosis"
                }
            },
            
            significance: {
                sexualReproduction: {
                    maintains: "Maintains constant chromosome number across generations",
                    mechanism: "Meiosis halves (2n → n), fertilization restores (n + n → 2n)",
                    without: "Without meiosis, chromosome number would double each generation"
                },
                
                geneticDiversity: {
                    importance: "Variation is raw material for evolution",
                    mechanisms: "Crossing over, independent assortment, random fertilization",
                    population: "Increases genetic diversity in population",
                    adaptation: "Allows adaptation to changing environments",
                    evolution: "Enables natural selection"
                },
                
                recombination: {
                    linkage: "Breaks linkage between genes on same chromosome",
                    novelCombinations: "Creates combinations not in either parent",
                    deleterious: "Can separate deleterious mutations from beneficial alleles"
                },
                
                purifyingSelection: {
                    segregation: "Allows elimination of deleterious recessive alleles in homozygotes",
                    masking: "Recessive alleles 'hidden' in heterozygotes",
                    exposure: "Meiosis and fertilization can create homozygous recessive → selection"
                }
            },
            
            examples: [
                {
                    organism: "Humans",
                    2n: "46 (23 pairs)",
                    n: "23",
                    gametes: "Sperm and eggs",
                    variation: "8.4 million gamete types (just independent assortment); trillions with crossing over",
                    note: "Longest prophase I in females (decades)"
                },
                {
                    organism: "Fruit fly (Drosophila)",
                    2n: "8 (4 pairs)",
                    n: "4",
                    variation: "16 gamete types from independent assortment",
                    note: "Model organism for meiosis research"
                },
                {
                    organism: "Pea plant (Mendel)",
                    2n: "14 (7 pairs)",
                    n: "7",
                    variation: "128 gamete types",
                    note: "Mendel studied 7 traits on different chromosomes → independent assortment"
                },
                {
                    organism: "Yeast (S. cerevisiae)",
                    2n: "32 (16 pairs)",
                    n: "16",
                    note: "Model for meiosis research, produces 4-spore asci"
                }
            ],
            
            clinicalRelevance: {
                prenatalTesting: {
                    amniocentesis: "Sample fetal cells, karyotype for aneuploidies",
                    CVS: "Chorionic villus sampling, earlier than amniocentesis",
                    NIPT: "Non-invasive prenatal testing, fetal DNA in maternal blood",
                    indication: "Maternal age >35, family history, abnormal ultrasound"
                },
                
                geneticCounseling: {
                    riskAssessment: "Maternal age-related risk calculation",
                    carrier: "Screening for recessive disorders",
                    familyHistory: "Chromosomal abnormalities, translocation carriers"
                },
                
                IVF: {
                    PGT: "Preimplantation genetic testing",
                    PGTA: "PGT for aneuploidy - screen embryos before transfer",
                    advantage: "Select chromosomally normal embryos"
                },
                
                miscarriage: {
                    cause: "~50% of first trimester miscarriages due to aneuploidy",
                    mostCommon: "Trisomy 16 (always lethal)",
                    selection: "Natural selection against severe aneuploidies"
                },
                
                infertility: {
                    maleFactors: "Meiotic arrest, nondisjunction",
                    femaleFactors: "Oocyte quality decline with age, meiotic errors",
                    treatment: "IVF with PGT, donor gametes"
                }
            },
            
            applications: [
                "Understanding genetic disorders and prenatal diagnosis",
                "Genetic counseling for chromosomal abnormalities",
                "Assisted reproduction (IVF, PGT for aneuploidy)",
                "Plant and animal breeding - controlled crosses, hybrid vigor",
                "Evolutionary biology - source of variation",
                "Population genetics - Hardy-Weinberg, linkage disequilibrium",
                "Gene mapping - recombination frequency → genetic maps",
                "Understanding maternal age effect on fertility and pregnancy",
                "Cancer research - some cancers have meiotic gene expression"
            ]
        };
        
        return content;
    }

    handleChromosomeStructure(problem) {
        const content = {
            topic: "Chromosome Structure: From DNA to Metaphase Chromosome",
            category: 'chromosome_biology',
            summary: "Chromosomes are highly organized structures of DNA and proteins. Through multiple levels of packaging - from nucleosomes to chromatin fibers to condensed chromosomes - approximately 2 meters of DNA fits into a nucleus about 10 micrometers in diameter. Understanding chromosome structure is essential for comprehending gene regulation, DNA replication, and cell division.",
            
            overview: {
                challenge: "Packaging problem: Fit ~2 meters DNA (6 billion bp in humans) into nucleus ~10 μm diameter",
                solution: "Hierarchical levels of organization and compaction",
                compaction: "Overall: ~10,000-fold compaction (metaphase chromosome)",
                components: {
                    DNA: "Double helix, genetic information",
                    histones: "Structural proteins that DNA wraps around",
                    nonHistone: "Scaffolding proteins, regulatory proteins, enzymes"
                },
                terminology: {
                    chromatin: "DNA + proteins in nucleus (all states of compaction)",
                    chromosome: "Highly condensed chromatin visible during cell division"
                }
            },
            
            packagingLevels: {
                overview: "Six levels of organization from naked DNA to metaphase chromosome",
                
                level1_nakedDNA: {
                    name: "DNA Double Helix",
                    diameter: "2 nm",
                    description: "Watson-Crick double helix",
                    structure: {
                        strands: "Two antiparallel polynucleotide strands",
                        basePairs: "Adenine-Thymine (2 H-bonds), Guanine-Cytosine (3 H-bonds)",
                        sugarPhosphate: "Deoxyribose-phosphate backbone",
                        majorMinorGrooves: "Protein binding sites"
                    },
                    length: {
                        human: "~2 meters total (6 billion bp) if stretched",
                        singleChromosome: "e.g., Chromosome 1 ~8.5 cm"
                    },
                    compaction: "1× (baseline)"
                },
                
                level2_nucleosomes: {
                    name: "Nucleosomes ('Beads on a String')",
                    diameter: "11 nm",
                    description: "Fundamental unit of chromatin packaging",
                    
                    structure: {
                        histoneOctamer: {
                            composition: "8 histone proteins: 2 each of H2A, H2B, H3, H4",
                            shape: "Disc-shaped core",
                            size: "11 nm diameter, 5.5 nm height",
                            charge: "Positively charged (lysine, arginine residues)",
                            evolutionaryConservation: "Highly conserved across eukaryotes"
                        },
                        
                        DNAwrapping: {
                            length: "147 base pairs",
                            turns: "1.65 left-handed superhelical turns around octamer",
                            contacts: "~14 contact points per turn with histone core",
                            stability: "Electrostatic (positive histones, negative DNA phosphates)"
                        },
                        
                        linkerDNA: {
                            length: "20-80 bp (varies by organism, cell type)",
                            human: "~50 bp average",
                            connects: "Adjacent nucleosomes",
                            variable: "Length variation affects higher-order structure"
                        },
                        
                        histoneH1: {
                            location: "Binds to linker DNA entering/exiting nucleosome",
                            function: "Stabilizes nucleosome, promotes higher-order compaction",
                            structure: "Globular domain + long C-terminal tail",
                            stoichiometry: "~1 H1 per nucleosome (variable)"
                        }
                    },
                    
                    spacing: {
                        nucleosomeRepeat: "~200 bp (147 bp wrapped + ~50 bp linker)",
                        density: "~147 bp per nucleosome",
                        humanGenome: "~30 million nucleosomes per cell"
                    },
                    
                    visualization: {
                        electronMicroscopy: "Beads-on-a-string appearance",
                        beads: "Nucleosomes",
                        string: "Linker DNA"
                    },
                    
                    compaction: "~6-fold (compared to naked DNA)",
                    
                    dynamics: {
                        sliding: "Remodeling complexes slide nucleosomes along DNA",
                        eviction: "Nucleosomes can be temporarily removed",
                        positioning: "Non-random - certain sequences favor nucleosome formation"
                    }
                },
                
                level3_30nmFiber: {
                    name: "30-nm Chromatin Fiber",
                    diameter: "30 nm",
                    description: "Higher-order coiling of nucleosome array",
                    
                    structure: {
                        solenoid: {
                            model: "Nucleosomes coiled into helical structure",
                            pitch: "~6 nucleosomes per turn",
                            diameter: "30 nm",
                            stabilization: "Histone H1, histone tails, Mg²⁺ ions"
                        },
                        alternative: {
                            zigzag: "Zigzag model (alternative to solenoid)",
                            debate: "Exact structure still debated",
                            invivo: "May vary in living cells vs in vitro"
                        }
                    },
                    
                    histoneTails: {
                        role: "N-terminal tails extend from nucleosome core",
                        interactions: "Contact DNA and neighboring nucleosomes",
                        modifications: "Subject to post-translational modifications (acetylation, methylation, phosphorylation)",
                        regulation: "Modifications affect compaction and gene expression"
                    },
                    
                    compaction: "~40-fold total (compared to naked DNA)",
                    
                    formation: "Requires histone H1 and physiological salt concentration",
                    
                    geneExpression: {
                        compaction: "30-nm fiber generally represses transcription",
                        access: "Must be opened for transcription factor binding"
                    }
                },
                
                level4_higherOrderLoops: {
                    name: "Higher-Order Loops (300-nm Fiber)",
                    diameter: "300 nm",
                    description: "30-nm fiber forms loops attached to protein scaffold",
                    
                    structure: {
                        loops: {
                            size: "50,000-200,000 bp per loop",
                            attachment: "Loop bases attach to nuclear matrix/scaffold",
                            proteins: "Condensin II, topoisomerase II, SMC proteins"
                        },
                        scaffold: {
                            composition: "Non-histone proteins (scaffold proteins)",
                            topoisomeraseII: "Relieves tension from DNA supercoiling",
                            condensins: "SMC (Structural Maintenance of Chromosomes) proteins promote compaction"
                        }
                    },
                    
                    loopDomains: {
                        TADs: "Topologically Associating Domains",
                        size: "Megabase-scale domains",
                        function: "Regulatory domains, enhancer-promoter interactions within TAD",
                        boundaries: "CTCF protein, cohesin complex",
                        importance: "Gene regulation - genes in same TAD co-regulated"
                    },
                    
                    compaction: "~400-fold total"
                },
                
                level5_condensedChromatin: {
                    name: "Condensed Chromatin (Interphase)",
                    description: "Further folding and organization in nucleus",
                    
                    euchromatin: {
                        description: "Loosely packed chromatin, transcriptionally active",
                        appearance: "Light staining in electron microscopy",
                        location: "Interior of nucleus, away from periphery",
                        structure: "Less compact, accessible to transcription machinery",
                        genes: "Actively transcribed genes",
                        histoneModifications: {
                            acetylation: "H3K9ac, H3K27ac (lysine acetylation)",
                            methylation: "H3K4me3 (trimethylation at lysine 4 of histone H3)",
                            effect: "Open chromatin, gene activation"
                        },
                        DNAmethylation: "Low CpG methylation at promoters"
                    },
                    
                    heterochromatin: {
                        description: "Tightly packed chromatin, transcriptionally silent",
                        appearance: "Dark staining (electron-dense)",
                        location: "Nuclear periphery, around nucleolus",
                        structure: "Highly compact, inaccessible",
                        
                        constitutive: {
                            description: "Always condensed (permanently silent)",
                            location: "Centromeres, telomeres, pericentromeric regions",
                            function: "Structural - maintains chromosome integrity",
                            composition: "Repetitive DNA (satellite DNA)",
                            histoneMarks: "H3K9me3 (trimethylation lysine 9)",
                            proteins: "HP1 (Heterochromatin Protein 1)"
                        },
                        
                        facultative: {
                            description: "Can be condensed or open depending on developmental stage, cell type",
                            example: "Inactive X chromosome (Barr body) in female mammals",
                            mechanism: "X-inactivation via Xist RNA → recruits polycomb complexes",
                            histoneMarks: "H3K27me3",
                            developmentalGenes: "Many developmental genes in facultative heterochromatin",
                            reversibility: "Can be reactivated in some contexts"
                        }
                    },
                    
                    chromosomeTerritories: {
                        description: "Each chromosome occupies distinct region in nucleus",
                        organization: "Non-random positioning",
                        geneRich: "Gene-rich chromosomes toward interior",
                        genePoor: "Gene-poor chromosomes toward periphery",
                        interactions: "Inter-chromosomal interactions occur at territory boundaries"
                    }
                },
                
                level6_metaphaseChromosome: {
                    name: "Metaphase Chromosome",
                    diameter: "700-1400 nm (1.4 μm)",
                    length: "1-10 μm (depending on chromosome)",
                    description: "Maximally condensed chromosome visible by light microscopy",
                    
                    structure: {
                        sisterChromatids: {
                            number: "Two (after DNA replication)",
                            connection: "Joined at centromere",
                            identity: "Genetically identical (barring mutations)",
                            compaction: "Each chromatid = one DNA molecule maximally condensed"
                        },
                        
                        centromere: {
                            location: "Constricted region where sisters join",
                            position: {
                                metacentric: "Centromere in middle (human chr 1, 3)",
                                submetacentric: "Off-center (human chr 2, 4-12, 16-18, 20)",
                                acrocentric: "Near end (human chr 13-15, 21, 22, Y)",
                                telocentric: "At very end (not in humans; some organisms)"
                            },
                            arms: {
                                p: "Short arm (petit)",
                                q: "Long arm (queue)"
                            }
                        },
                        
                        scaffold: {
                            condensinI: "Loaded in prophase, further compacts chromosomes",
                            topoisomeraseII: "Axis of chromosome, resolves tangles",
                            axis: "Protein scaffold running along chromosome length"
                        }
                    },
                    
                    compaction: "~10,000-fold total (compared to naked DNA)",
                    
                    visibility: "Visible by light microscopy (0.5-1 μm thick)",
                    
                    idealFor: "Karyotyping, cytogenetics - count and examine chromosomes",
                    
                    timing: "Maximally condensed only during metaphase of mitosis/meiosis"
                }
            },
            
            chromosomeRegions: {
                centromere: {
                    definition: "Region where sister chromatids join; kinetochore assembles here",
                    
                    DNA: {
                        sequence: "Repetitive DNA (α-satellite DNA in humans)",
                        αsatellite: "171 bp repeat units, AT-rich",
                        length: "0.5-5 Mb (megabases) in humans",
                        evolution: "Rapidly evolving sequences"
                    },
                    
                    chromatin: {
                        CENPA: "Histone H3 variant specific to centromeres",
                        nucleosomes: "CENP-A replaces H3 in centromeric nucleosomes",
                        epigenetic: "Centromere identity epigenetically maintained (not just DNA sequence)",
                        spreading: "Centromeric chromatin can spread to adjacent regions"
                    },
                    
                    kinetochore: {
                        definition: "Protein complex assembled on centromere for spindle attachment",
                        structure: {
                            innerPlate: "Contacts centromeric chromatin (CENP-A, CENP-C, CENP-T)",
                            outerPlate: "Binds spindle microtubules (Ndc80 complex, Ska complex)",
                            proteins: "~100 different proteins (CENPs - Centromere Proteins)"
                        },
                        function: "Attachment site for kinetochore microtubules during division",
                        number: "One per sister chromatid (so 2 per metaphase chromosome)",
                        orientation: {
                            mitosis: "Sisters face opposite poles",
                            meiosisI: "Sisters face same pole (co-orient)"
                        }
                    },
                    
                    cohesion: {
                        cohesin: "Protein complex holding sisters together",
                        location: "Concentrated at centromere",
                        protection: "Shugoshin protects centromeric cohesin in meiosis I",
                        cleavage: {
                            mitosis: "Cleaved in anaphase → sisters separate",
                            meiosisI: "Protected → sisters stay together",
                            meiosisII: "Cleaved → sisters separate"
                        }
                    },
                    
                    types: {
                        monocentric: "Single centromere per chromosome (most eukaryotes including humans)",
                        holocentric: "Centromeric activity along entire chromosome length (nematodes, some insects)"
                    },
                    
                    clinical: {
                        robertsonian: "Translocation involving centromeres (fusion of acrocentric chromosomes)",
                        dicentric: "Chromosome with two centromeres (unstable, breaks)",
                        neocentromere: "New centromere forms at non-centromeric location (rare)"
                    }
                },
                
                telomeres: {
                    definition: "Repetitive DNA sequences at chromosome ends that protect from degradation",
                    
                    structure: {
                        sequence: "TTAGGG repeats in vertebrates (species-specific)",
                        length: "2,000-20,000 bp in humans (10-15 kb typical)",
                        strand: "G-rich 3' overhang (50-400 nucleotides)",
                        Tloop: "3' overhang invades double-stranded region forming loop"
                    },
                    
                    proteins: {
                        shelterin: "Six-protein complex protects telomeres",
                        components: {
                            TRF1: "Binds double-stranded telomeric DNA",
                            TRF2: "Binds dsDNA, promotes T-loop formation",
                            POT1: "Binds single-stranded 3' overhang",
                            TIN2: "Central hub connecting TRF1, TRF2",
                            TPP1: "Partner of POT1",
                            RAP1: "Recruited by TRF2"
                        },
                        function: "Prevent telomeres from being recognized as DNA breaks"
                    },
                    
                    functions: [
                        "Protect chromosome ends from degradation",
                        "Prevent end-to-end fusion of chromosomes",
                        "Allow complete replication of chromosome ends",
                        "Provide mechanism for counting cell divisions (molecular clock)"
                    ],
                    
                    endReplicationProblem: {
                        problem: "DNA polymerase cannot fully replicate 3' ends of linear DNA",
                        mechanism: {
                            laggingStrand: "After last RNA primer removed, gap remains",
                            consequence: "~50-100 bp lost each replication",
                            accumulation: "Telomeres shorten with each division"
                        },
                        solution: "Telomerase enzyme in some cells"
                    },
                    
                    telomerase: {
                        definition: "Reverse transcriptase that extends telomeres",
                        structure: {
                            TERT: "Telomerase Reverse Transcriptase (catalytic protein)",
                            TR_TERC: "Telomerase RNA Component (template: 3'-AAUCCC-5')",
                            mechanism: "Uses RNA template to add TTAGGG repeats"
                        },
                        activity: {
                            stemCells: "Active - unlimited divisions",
                            germCells: "Active - maintain telomeres across generations",
                            somaticCells: "Inactive or low - telomeres shorten",
                            cancerCells: "Reactivated in ~85-90% of cancers → immortalization"
                        }
                    },
                    
                    agingAndSenescence: {
                        HayflickLimit: "Normal cells divide ~50 times then senesce",
                        mechanism: "Telomere shortening → critically short → DNA damage response → p53 → senescence",
                        aging: "Telomere shortening associated with aging (correlation, not necessarily causation)",
                        exceptions: "Stem cells, germ cells maintain telomeres"
                    },
                    
                    cancer: {
                        immortalization: "Cancer cells must overcome Hayflick limit",
                        mechanisms: {
                            telomeraseReactivation: "~85-90% of cancers reactivate telomerase (hTERT)",
                            ALT: "Alternative Lengthening of Telomeres (~10-15%) - recombination-based"
                        },
                        target: "Telomerase inhibition as cancer therapy (in development)"
                    },
                    
                    clinical: {
                        dyskeratosisCongenita: "Mutation in telomerase components → short telomeres → bone marrow failure",
                        measurement: "Telomere length can be measured (qPCR, flow-FISH)",
                        biomarker: "Potential biomarker for aging, disease risk (controversial)"
                    }
                },
                
                arms: {
                    pArm: {
                        name: "Short arm (from French 'petit')",
                        location: "Above centromere (by convention)",
                        size: "Varies by chromosome"
                    },
                    qArm: {
                        name: "Long arm",
                        location: "Below centromere",
                        size: "Typically longer than p arm"
                    },
                    notation: {
                        example: "15q21.3",
                        meaning: "Chromosome 15, long arm (q), region 2, band 1, sub-band 3",
                        use: "Cytogenetic notation for gene locations, deletions, translocations"
                    }
                },
                
                banding: {
                    Gbanding: {
                        method: "Giemsa stain on trypsin-treated metaphase chromosomes",
                        pattern: "Alternating light (GC-rich) and dark (AT-rich) bands",
                        resolution: "~400-550 bands per haploid set (standard)",
                        uniqueness: "Each chromosome has unique banding pattern (like barcode)",
                        use: "Karyotyping, identify chromosomes, detect abnormalities"
                    },
                    otherBanding: {
                        Qbanding: "Quinacrine fluorescence",
                        Rbanding: "Reverse banding (opposite of G-banding)",
                        Cbanding: "Constitutive heterochromatin (centromeres)"
                    },
                    highResolution: "Up to 850 bands (prometaphase chromosomes, less condensed)"
                }
            },
            
            chromatinRemodeling: {
                purpose: "Regulate DNA accessibility for transcription, replication, repair",
                importance: "Gene regulation, development, response to signals",
                
                histoneModifications: {
                    overview: "Post-translational modifications of histone tails",
                    types: "Acetylation, methylation, phosphorylation, ubiquitination, sumoylation",
                    
                    acetylation: {
                        target: "Lysine residues on histone tails",
                        effect: "Neutralizes positive charge → loosens DNA-histone binding → ACTIVATION",
                        enzymes: {
                            HATs: "Histone Acetyltransferases - add acetyl groups",
                            HDACs: "Histone Deacetylases - remove acetyl groups"
                        },
                        examples: {
                            H3K9ac: "Histone H3, lysine 9 acetylation - gene activation",
                            H3K27ac: "Active enhancers",
                            H4K16ac: "Inhibits 30-nm fiber formation"
                        },
                        mechanism: "Acetylation → open chromatin → transcription factors bind"
                    },
                    
                    methylation: {
                        target: "Lysine or arginine residues",
                        effect: "Context-dependent (activation OR repression)",
                        states: "Mono-, di-, or tri-methylation (me1, me2, me3)",
                        enzymes: {
                            HMTs: "Histone Methyltransferases - add methyl groups",
                            HDMs: "Histone Demethylases - remove methyl groups"
                        },
                        examples: {
                            H3K4me3: "Trimethylation lysine 4 - ACTIVATION (promoters of active genes)",
                            H3K9me3: "Trimethylation lysine 9 - REPRESSION (heterochromatin)",
                            H3K27me3: "Polycomb repression (facultative heterochromatin)",
                            H3K36me3: "Active gene bodies (transcription elongation)"
                        }
                    },
                    
                    phosphorylation: {
                        target: "Serine, threonine, tyrosine",
                        examples: {
                            H3S10ph: "Phosphorylation serine 10 - chromosome condensation, transcription",
                            H2AXser139: "γH2AX - DNA damage response"
                        }
                    },
                    
                    histoneCode: {
                        hypothesis: "Combinations of histone modifications encode information",
                        readout: "Reader proteins recognize specific modification patterns",
                        outcome: "Recruit complexes for activation or repression",
                        complexity: "Combinatorial - multiple marks work together"
                    }
                },
                
                ATPdependentRemodeling: {
                    definition: "Protein complexes that use ATP to alter nucleosome position or composition",
                    mechanisms: [
                        "Slide nucleosomes along DNA",
                        "Eject nucleosomes (remove from DNA)",
                        "Replace histone variants",
                        "Alter DNA-histone contacts"
                    ],
                    
                    families: {
                        SWI_SNF: {
                            function: "Slide/eject nucleosomes → activate or repress genes",
                            examples: "BAF, PBAF complexes in mammals",
                            cancer: "Frequently mutated in cancer (tumor suppressor)"
                        },
                        ISWI: {
                            function: "Slide nucleosomes, establish regular spacing",
                            role: "Chromatin assembly, repression"
                        },
                        CHD: {
                            function: "Chromodomain-containing, diverse functions",
                            examples: "CHD1 (transcription), Mi-2/NuRD (repression)"
                        },
                        INO80: {
                            function: "Nucleosome editing, DNA repair, replication"
                        }
                    }
                },
                
                histoneVariants: {
                    definition: "Non-allelic isoforms of canonical histones",
                    function: "Specialized functions in chromatin",
                    
                    examples: {
                        H2A_Z: {
                            function: "Transcription regulation, DNA repair, chromosome segregation",
                            location: "Gene promoters, boundaries",
                            instability: "Nucleosomes with H2A.Z less stable"
                        },
                        H3_3: {
                            function: "Marks active genes, deposited during transcription",
                            deposition: "Replication-independent"
                        },
                        CENP_A: {
                            function: "Centromere-specific H3 variant",
                            critical: "Defines centromere identity",
                            evolution: "Rapidly evolving"
                        },
                        macroH2A: {
                            function: "Transcriptional repression",
                            location: "Inactive X chromosome (Barr body)"
                        }
                    }
                },
                
                DNAmethylation: {
                    definition: "Addition of methyl group to cytosine (5-methylcytosine, 5mC)",
                    location: "CpG dinucleotides (CG sites)",
                    effect: "Generally gene REPRESSION",
                    
                    CpGislands: {
                        definition: "Regions with high CG density (~1 kb, >50% GC, >0.6 CpG observed/expected)",
                        location: "~60-70% of gene promoters",
                        normal: "Usually unmethylated in normal cells → genes can be expressed",
                        cancer: "Hypermethylation of CpG islands → tumor suppressor silencing"
                    },
                    
                    enzymes: {
                        DNMTs: "DNA Methyltransferases - add methyl groups",
                        DNMT1: "Maintenance methylation (copies pattern to new strand)",
                        DNMT3A_3B: "De novo methylation",
                        TETs: "Ten-Eleven Translocation enzymes - demethylation pathway (5mC → 5hmC → ...)"
                    },
                    
                    functions: [
                        "Stable gene silencing (development)",
                        "X-inactivation",
                        "Genomic imprinting",
                        "Silencing of repetitive elements, transposons",
                        "Cancer - aberrant methylation"
                    ],
                    
                    epigenetic: {
                        inheritance: "Methylation patterns maintained through cell division",
                        reprogramming: "Erased and re-established in germ cells, early embryo",
                        reversibility: "Can be reversed (unlike DNA sequence mutations)"
                    }
                }
            },
            
            karyotype: {
                definition: "Complete set of chromosomes in a cell, arranged and numbered",
                
                preparation: {
                    steps: [
                        "Arrest cells in metaphase (colchicine - blocks spindle)",
                        "Hypotonic treatment (swells cells)",
                        "Fix cells (preserve structure)",
                        "Drop onto slide (chromosomes spread)",
                        "Stain (Giemsa for G-banding)",
                        "Photograph under microscope",
                        "Arrange by size and banding pattern"
                    ],
                    source: "Blood lymphocytes, bone marrow, amniotic fluid, chorionic villi, skin fibroblasts"
                },
                
                human: {
                    total: "46 chromosomes (23 pairs)",
                    autosomes: "22 pairs (numbered 1-22 by size, 1 = largest)",
                    sexChromosomes: "XX (female) or XY (male)",
                    notation: {
                        normal: "46,XX (female) or 46,XY (male)",
                        trisomy21: "47,XX,+21 or 47,XY,+21",
                        deletion: "46,XX,del(5)(p15.2) - deletion on chromosome 5 short arm"
                    }
                },
                
                features: {
                    number: "Count total chromosomes",
                    size: "Identify chromosomes by relative size",
                    banding: "Unique banding pattern identifies each chromosome",
                    centromerePosition: "Metacentric, submetacentric, acrocentric",
                    abnormalities: "Detect aneuploidy, translocations, deletions, duplications"
                },
                
                applications: {
                    prenatal: "Amniocentesis, CVS - detect chromosomal disorders (Down syndrome, etc.)",
                    cancer: "Identify chromosomal abnormalities (Philadelphia chromosome, etc.)",
                    infertility: "Chromosome abnormalities affecting fertility",
                    miscarriage: "Determine cause (often chromosomal)",
                    diagnosis: "Genetic syndromes with chromosomal basis"
                },
                
                limitations: {
                    resolution: "~5-10 Mb deletions/duplications (standard banding)",
                    balanced: "Cannot detect balanced translocations if no material lost",
                    smallChanges: "Point mutations, small indels not detected",
                    mosaicism: "Low-level mosaicism may be missed"
                },
                
                advancedMethods: {
                    FISH: "Fluorescence in situ hybridization - probe specific regions",
                    arrayCGH: "Comparative genomic hybridization - higher resolution",
                    karyo: "Spectral karyotyping - color each chromosome",
                    wholGenomeSeq: "Ultimate resolution, detects everything"
                }
            },
            
            comparison: {
                euchromatinVsHeterochromatin: {
                    compaction: "Loosely packed vs Densely packed",
                    transcription: "Transcriptionally active vs Silent",
                    location: "Nuclear interior vs Periphery, around nucleolus",
                    staining: "Light vs Dark (electron microscopy)",
                    replication: "Early S phase vs Late S phase",
                    histoneMarks: "H3K4me3, H3K9ac vs H3K9me3, H3K27me3",
                    DNAmethylation: "Low at promoters vs High",
                    accessibility: "Accessible vs Inaccessible",
                    genes: "Active genes vs Silenced genes, repetitive DNA"
                },
                
                constitutiveVsFacultativeHeterochromatin: {
                    constitutive: "Always condensed (permanent) vs Context-dependent (reversible)",
                    location: "Centromeres, telomeres vs Inactive X, developmental genes",
                    function: "Structural vs Regulatory",
                    reversibility: "Permanent vs Can be reactivated",
                    examples: "Satellite DNA vs Barr body, polycomb targets"
                },
                
                sisterChromatidsVsHomologs: {
                    origin: "Identical copies (DNA replication) vs One maternal, one paternal",
                    sequence: "Identical (except new mutations) vs Similar but not identical (allelic differences)",
                    connection: "Joined at centromere vs Separate (except during meiosis I)",
                    separation: "Mitosis anaphase, Meiosis II vs Meiosis I",
                    number: "2 per replicated chromosome vs 2 per cell (diploid)"
                }
            },
            
            examples: [
                {
                    name: "Human chromosome 1",
                    size: "248 million bp (largest)",
                    genes: "~2000 protein-coding genes",
                    type: "Metacentric",
                    length: "~8.5 cm if stretched"
                },
                {
                    name: "Human X chromosome",
                    size: "155 million bp",
                    genes: "~800 protein-coding genes",
                    inactivation: "One X inactivated in female cells (dosage compensation)",
                    BarrBody: "Inactive X forms Barr body (facultative heterochromatin)"
                },
                {
                    name: "Philadelphia chromosome",
                    abnormality: "t(9;22) translocation",
                    result: "BCR-ABL fusion gene",
                    disease: "Chronic Myeloid Leukemia (CML)",
                    treatment: "Gleevec (imatinib) - targets BCR-ABL kinase"
                },
                {
                    name: "Polytene chromosomes",
                    organism: "Drosophila salivary glands",
                    structure: "Multiple rounds of replication without separation → giant chromosomes",
                    visibility: "Banding visible by light microscopy",
                    use: "Historical tool for gene mapping"
                }
            ],
            
            applications: [
                "Prenatal diagnosis: Karyotyping for chromosomal disorders",
                "Cancer cytogenetics: Identify diagnostic/prognostic chromosomal changes",
                "Gene mapping and cloning: Chromosome walking, positional cloning",
                "Understanding gene regulation: Chromatin state determines expression",
                "Epigenetics research: Histone modifications, DNA methylation in disease",
                "Chromatin immunoprecipitation (ChIP): Map protein-DNA interactions, histone marks",
                "CRISPR/Cas9 gene editing: Chromatin accessibility affects efficiency",
                "Evolutionary biology: Chromosome structure evolution, karyotype comparison",
                "Aging research: Telomere length as biomarker",
                "Cancer therapy: Targeting chromatin modifiers (HDAC inhibitors, etc.)"
            ]
        };
        
        return content;
    }

    handleGametogenesis(problem) {
        const content = {
            topic: "Gametogenesis: Formation of Sperm and Eggs",
            category: 'reproductive_biology',
            summary: "Gametogenesis is the process of producing haploid gametes (sperm and eggs) from diploid germ cells through meiosis and cellular differentiation. Spermatogenesis in males is continuous and produces four functional sperm, while oogenesis in females involves meiotic arrests and produces one functional egg plus polar bodies.",
            
            overview: {
                definition: "Gametogenesis is the production of gametes (sex cells) through meiosis and differentiation",
                types: {
                    spermatogenesis: "Formation of sperm in males (testes)",
                    oogenesis: "Formation of eggs (ova) in females (ovaries)"
                },
                purpose: [
                    "Produce haploid gametes for sexual reproduction",
                    "Reduce chromosome number from 2n to n",
                    "Generate genetic diversity through meiosis",
                    "Create specialized cells for fertilization"
                ],
                location: {
                    males: "Seminiferous tubules of testes",
                    females: "Ovarian follicles"
                },
                outcome: {
                    males: "4 functional sperm per precursor cell",
                    females: "1 functional egg + 3 polar bodies per precursor cell"
                }
            },
            
            spermatogenesis: {
                definition: "Production of sperm (spermatozoa) in seminiferous tubules of testes",
                location: "Seminiferous tubules (highly coiled tubules in testes)",
                duration: "~74 days in humans (from spermatogonium to mature sperm)",
                timing: "Begins at puberty (~age 12-14), continues throughout life",
                output: "~1500 sperm produced per second in adult male (~200-300 million per day)",
                
                cellTypes: {
                    spermatogonia: {
                        type: "Diploid stem cells",
                        location: "Basement membrane of seminiferous tubule",
                        ploidy: "2n, 2c",
                        function: "Self-renewal and differentiation",
                        types: {
                            typeA_dark: "Reserve stem cells (rarely divide)",
                            typeA_pale: "Active stem cells (self-renewing divisions)",
                            typeB: "Committed to differentiation → primary spermatocytes"
                        },
                        division: "Mitosis (maintain stem cell pool + produce spermatocytes)"
                    },
                    
                    primarySpermatocyte: {
                        type: "Diploid cell entering meiosis I",
                        ploidy: "2n, 4c (after DNA replication)",
                        process: "Undergoes meiosis I",
                        duration: "~24 days (mostly in prophase I)",
                        result: "Two secondary spermatocytes"
                    },
                    
                    secondarySpermatocyte: {
                        type: "Haploid cell after meiosis I",
                        ploidy: "n, 2c",
                        process: "Undergoes meiosis II",
                        duration: "~1 day (very brief)",
                        result: "Two spermatids"
                    },
                    
                    spermatid: {
                        type: "Haploid cell after meiosis II",
                        ploidy: "n, 1c",
                        process: "Undergoes spermiogenesis (differentiation)",
                        duration: "~24 days",
                        shape: "Round initially, transforms into elongated sperm",
                        result: "Spermatozoon (mature sperm)"
                    },
                    
                    spermatozoon: {
                        type: "Mature haploid gamete",
                        ploidy: "n, 1c",
                        structure: "Head + midpiece + tail",
                        function: "Fertilize egg",
                        maturation: "Further maturation in epididymis (gain motility, capacitation potential)"
                    }
                },
                
                stages: {
                    proliferation: {
                        cells: "Spermatogonia",
                        process: "Mitotic divisions",
                        typeA: "Self-renewal (maintain stem cell pool)",
                        typeB: "Differentiate into primary spermatocytes",
                        result: "Maintain spermatogonia population + produce spermatocytes"
                    },
                    
                    meioticDivision: {
                        meiosisI: {
                            cell: "Primary spermatocyte (2n, 4c)",
                            prophaseI: "Longest phase (~24 days) - crossing over occurs",
                            result: "Two secondary spermatocytes (n, 2c)"
                        },
                        meiosisII: {
                            cell: "Secondary spermatocyte (n, 2c)",
                            duration: "~1 day",
                            result: "Four haploid spermatids (n, 1c)"
                        },
                        totalResult: "One spermatogonium → 4 haploid spermatids"
                    },
                    
                    spermiogenesis: {
                        definition: "Differentiation of round spermatid into mature spermatozoon",
                        duration: "~24 days",
                        
                        changes: {
                            acrosomeFormation: {
                                source: "Golgi apparatus",
                                structure: "Cap-like vesicle over nucleus",
                                contents: "Hydrolytic enzymes (hyaluronidase, acrosin, proteases)",
                                function: "Digest zona pellucida during fertilization (acrosome reaction)"
                            },
                            
                            nuclearCondensation: {
                                process: "Chromatin super-compacted",
                                mechanism: "Histones replaced by protamines (smaller, more basic)",
                                result: "Nucleus becomes very dense, streamlined",
                                function: "Reduce head size for swimming, protect DNA"
                            },
                            
                            flagellumFormation: {
                                source: "Centriole elongates",
                                structure: "9+2 microtubule arrangement",
                                length: "~50 μm in humans",
                                function: "Motility (swimming)"
                            },
                            
                            mitochondriaArrangement: {
                                location: "Spiral around midpiece (proximal flagellum)",
                                number: "~50-75 mitochondria",
                                function: "ATP production for flagellar movement",
                                importance: "Sperm rely heavily on oxidative phosphorylation"
                            },
                            
                            cytoplasmReduction: {
                                process: "Most cytoplasm shed (residual body)",
                                phagocytosis: "Sertoli cells engulf residual bodies",
                                result: "Streamlined sperm (minimal cytoplasm)",
                                function: "Reduce size and weight for efficient swimming"
                            }
                        },
                        
                        result: "Elongated, streamlined spermatozoon with head, midpiece, tail"
                    },
                    
                    spermiation: {
                        definition: "Release of mature spermatozoa into seminiferous tubule lumen",
                        mechanism: "Sertoli cells release sperm",
                        transport: "Sperm flow to epididymis via fluid flow"
                    },
                    
                    maturationInEpididymis: {
                        duration: "~2-12 days",
                        location: "Epididymis (highly coiled tube, ~6m long)",
                        changes: [
                            "Gain progressive motility (initially immotile)",
                            "Changes in plasma membrane (lipid, protein composition)",
                            "Potential for capacitation (final maturation in female tract)",
                            "Ability to undergo acrosome reaction"
                        ],
                        storage: "Mature sperm stored in tail of epididymis, vas deferens"
                    }
                },
                
                spermStructure: {
                    head: {
                        size: "~5 μm long, 3 μm wide (human)",
                        nucleus: {
                            DNA: "Haploid genome, highly condensed with protamines",
                            compaction: "~6-fold more compact than somatic cells",
                            transcription: "Transcriptionally inactive"
                        },
                        acrosome: {
                            location: "Cap over anterior 2/3 of nucleus",
                            contents: "Hyaluronidase, acrosin, neuraminidase, acid phosphatase",
                            function: "Acrosome reaction - penetrate zona pellucida"
                        }
                    },
                    
                    midpiece: {
                        length: "~5-7 μm (human)",
                        mitochondria: "~50-75 arranged in spiral (mitochondrial sheath)",
                        function: "ATP production via oxidative phosphorylation",
                        centriole: "Proximal centriole (will form centrosome in zygote)",
                        note: "Mitochondria typically degraded after fertilization (maternal inheritance of mtDNA)"
                    },
                    
                    tail: {
                        length: "~50 μm (human)",
                        structure: {
                            axoneme: "9+2 microtubule arrangement (classic cilium/flagellum)",
                            outerdensefibers: "9 fibers surrounding axoneme (structural support)",
                            fibrousSheath: "In principal piece, glycolytic enzymes"
                        },
                        regions: {
                            connectingpiece: "Joins midpiece to principal piece",
                            principalpiece: "Main length (~40-45 μm)",
                            endpiece: "Terminal ~5 μm, only axoneme"
                        },
                        movement: "Whip-like motion, ~1-3 mm/min",
                        energy: "ATP from mitochondria + glycolysis"
                    },
                    
                    totalLength: "~60 μm (human)",
                    volume: "~30 μm³ (tiny - 1000× smaller than egg)"
                },
                
                regulation: {
                    hormonal: {
                        hypothalamus: "GnRH (Gonadotropin-Releasing Hormone) - pulsatile",
                        anteriorPituitary: {
                            FSH: "Follicle-Stimulating Hormone → Sertoli cells",
                            LH: "Luteinizing Hormone → Leydig cells"
                        },
                        testis: {
                            testosterone: "Produced by Leydig cells (in response to LH)",
                            inhibin: "Produced by Sertoli cells → negative feedback on FSH"
                        }
                    },
                    
                    sertoliCells: {
                        location: "Extend from basement membrane to lumen",
                        functions: [
                            "Support and nourish developing sperm",
                            "Phagocytose residual bodies",
                            "Secrete testicular fluid (transport sperm)",
                            "Blood-testis barrier (tight junctions)",
                            "Respond to FSH and testosterone",
                            "Secrete androgen-binding protein (ABP) - concentrates testosterone",
                            "Secrete inhibin (negative feedback)"
                        ],
                        bloodTestisBarrier: {
                            structure: "Tight junctions between adjacent Sertoli cells",
                            function: "Isolate developing sperm from immune system",
                            importance: "Sperm are antigenically different (haploid) - prevent autoimmune attack",
                            compartments: "Basal (spermatogonia) vs Adluminal (meiotic cells, spermatids)"
                        }
                    },
                    
                    leydigCells: {
                        location: "Interstitial tissue between seminiferous tubules",
                        function: "Produce testosterone in response to LH",
                        testosterone: {
                            local: "High concentration in seminiferous tubules (via ABP)",
                            systemic: "Secondary sex characteristics, libido, muscle mass",
                            feedback: "Negative feedback on hypothalamus and pituitary"
                        }
                    },
                    
                    negativeFeedback: {
                        testosterone: "Inhibits GnRH and LH secretion",
                        inhibin: "Inhibits FSH secretion",
                        result: "Maintains relatively constant spermatogenesis"
                    }
                },
                
                efficiency: "Four functional sperm from each spermatogonium (no waste)",
                
                continuity: "Continuous process - millions of sperm produced daily throughout adult life"
            },
            
            oogenesis: {
                definition: "Production of eggs (ova) in ovarian follicles",
                location: "Ovarian follicles",
                duration: "Years to decades (with arrests)",
                timing: {
                    initiation: "Begins before birth (fetal development)",
                    arrest1: "Prophase I arrest before birth, resumes at ovulation",
                    arrest2: "Metaphase II arrest at ovulation, completes at fertilization",
                    completion: "At fertilization (if occurs)"
                },
                output: "One functional egg + 2-3 polar bodies per oogonium",
                
                cellTypes: {
                    primordialGermCells: {
                        origin: "Yolk sac (early embryo)",
                        migration: "Migrate to developing gonads (~week 4-5)",
                        ploidy: "2n, 2c"
                    },
                    
                    oogonia: {
                        type: "Diploid stem cells",
                        timing: "Proliferate in fetal ovary (mitosis)",
                        peak: "~7 million by 5th month of gestation",
                        ploidy: "2n, 2c",
                        fate: "Develop into primary oocytes or undergo atresia"
                    },
                    
                    primaryOocyte: {
                        type: "Diploid cell arrested in prophase I",
                        formation: "Before birth - oogonia enter meiosis I",
                        ploidy: "2n, 4c (DNA replicated)",
                        arrest: {
                            stage: "Diplotene of prophase I (dictyate stage)",
                            timing: "Begins before birth",
                            duration: "Years to decades (until ovulation)",
                            mechanism: "High cAMP, maturation promoting factor (MPF) inactive"
                        },
                        number: {
                            birth: "~400,000-500,000 (down from 7 million - most undergo atresia)",
                            puberty: "~300,000 remain",
                            lifetime: "~400 will ovulate"
                        },
                        surrounded: "Primordial follicle (single layer of squamous follicle cells)"
                    },
                    
                    secondaryOocyte: {
                        type: "Haploid cell after meiosis I",
                        formation: "Meiosis I completes just before ovulation (LH surge)",
                        ploidy: "n, 2c",
                        arrest: {
                            stage: "Metaphase II",
                            timing: "At ovulation",
                            duration: "~24 hours (if not fertilized, degenerates)",
                            mechanism: "CSF (Cytostatic Factor) - keeps MPF active, arrests"
                        },
                        asymmetry: "Unequal cytokinesis - oocyte gets most cytoplasm",
                        polarBody1: "First polar body (small, n, 2c) - discarded",
                        ovulation: "Released from ovary at this stage"
                    },
                    
                    ovum: {
                        type: "Mature egg (if fertilized)",
                        formation: "Meiosis II completes upon sperm entry",
                        ploidy: "n, 1c",
                        polarBody2: "Second polar body formed - discarded",
                        size: "~100-120 μm diameter (human) - HUGE compared to sperm",
                        cytoplasm: "Rich in nutrients, mRNA, proteins, organelles (maternal contribution)"
                    }
                },
                
                stages: {
                    prenatal: {
                        timing: "During fetal development",
                        events: [
                            "Primordial germ cells migrate to gonad",
                            "Differentiate into oogonia",
                            "Oogonia undergo mitosis - population expands (~7 million by month 5)",
                            "Oogonia enter meiosis I → become primary oocytes",
                            "Arrest in prophase I (diplotene) before birth",
                            "Massive atresia (cell death) - ~7 million → ~400,000 at birth"
                        ],
                        result: "All primary oocytes formed before birth - no more produced after"
                    },
                    
                    childhoodToPuberty: {
                        status: "Primary oocytes remain arrested in prophase I",
                        follicles: "Primordial follicles (dormant)",
                        atresia: "Continued loss - ~300,000 remain at puberty",
                        hormones: "Low FSH, LH - reproductive system quiescent"
                    },
                    
                    pubertToMenopause: {
                        timing: "~age 12-52 (~40 years, ~400 cycles)",
                        monthlyCycle: "One (or a few) primary oocyte(s) resumes development each month",
                        
                        follicularPhase: {
                            selection: "FSH stimulates several follicles to grow",
                            dominant: "Usually one becomes dominant follicle (others undergo atresia)",
                            growth: "Primary oocyte grows (accumulates cytoplasm, mRNA, proteins)",
                            follicle: "Primordial → primary → secondary → antral → Graafian (mature)",
                            duration: "~14 days (variable)"
                        },
                        
                        ovulation: {
                            trigger: "LH surge (mid-cycle, ~day 14)",
                            meiosisI: {
                                resumption: "LH → cAMP decrease → MPF activated",
                                completion: "Meiosis I completes (~10-12 hours after LH surge)",
                                result: "Secondary oocyte (n, 2c) + first polar body",
                                cytokinesis: "Highly asymmetric - oocyte retains nearly all cytoplasm"
                            },
                            meiosisII: {
                                progression: "Immediately enters meiosis II",
                                arrest: "Arrests at metaphase II (CSF - cytostatic factor)",
                                ovulation: "Ovary releases metaphase II oocyte (~24 hr after LH)"
                            },
                            structures: {
                                ovulated: "Secondary oocyte + zona pellucida + corona radiata",
                                cumulus: "Cumulus oophorus cells surround oocyte"
                            }
                        },
                        
                        fertilization: {
                            timing: "Within ~24 hours of ovulation (oocyte viable ~12-24 hr)",
                            trigger: "Sperm entry",
                            completion: {
                                meiosisII: "Completes within minutes to hours",
                                secondPolarBody: "Formed and extruded",
                                ovum: "Mature egg (n, 1c) - female pronucleus"
                            },
                            pronuclei: "Female pronucleus + male pronucleus (from sperm) → zygote",
                            ifNoFertilization: "Oocyte degenerates within 24 hours"
                        },
                        
                        lutealPhase: {
                            corpusLuteum: "Follicle remnant produces progesterone",
                            duration: "~14 days (unless pregnancy)",
                            function: "Maintain uterine lining for potential implantation"
                        }
                    },
                    
                    menopause: {
                        timing: "~age 50-52 (average)",
                        cause: "Ovarian follicle depletion (very few remain)",
                        result: "No more ovulation, menstruation ceases",
                        hormones: "Low estrogen, progesterone; high FSH, LH (no negative feedback)"
                    }
                },
                
                polarBodies: {
                    definition: "Small cells receiving chromosomes but minimal cytoplasm",
                    
                    firstPolarBody: {
                        formation: "Meiosis I (before ovulation)",
                        ploidy: "n, 2c",
                        fate: "May divide during meiosis II or degenerate",
                        location: "Between oocyte and zona pellucida"
                    },
                    
                    secondPolarBody: {
                        formation: "Meiosis II (at fertilization)",
                        ploidy: "n, 1c",
                        fate: "Degenerates",
                        location: "Perivitelline space"
                    },
                    
                    function: {
                        chromosomes: "Discard extra set of chromosomes (maintain haploid number)",
                        cytoplasm: "Maximize cytoplasm in egg (nutrients, organelles for early embryo)"
                    },
                    
                    total: "2-3 polar bodies per oocyte (1st may or may not divide)",
                    
                    clinicalUse: {
                        diagnosis: "Can biopsy polar body for genetic testing (PGD)",
                        advantage: "Doesn't harm oocyte",
                        inference: "Oocyte has opposite allele (if heterozygous)"
                    }
                },
                
                eggStructure: {
                    size: "~120 μm diameter (human) - largest cell in human body",
                    volume: "~1,000,000 μm³ (1000× larger than sperm by volume)",
                    
                    plasmaMembrane: {
                        oolemma: "Egg plasma membrane",
                        microvilli: "Increase surface area",
                        receptors: "Sperm-binding receptors"
                    },
                    
                    zonaPellucida: {
                        composition: "Glycoprotein matrix (ZP1, ZP2, ZP3)",
                        thickness: "~15 μm",
                        function: [
                            "Species-specific sperm binding (ZP3)",
                            "Induce acrosome reaction",
                            "Block polyspermy (after fertilization - ZP2 cleavage)",
                            "Protect early embryo"
                        ],
                        penetration: "Sperm must digest through (acrosome enzymes)"
                    },
                    
                    coronaRadiata: {
                        composition: "Layer of cumulus cells (follicle cells)",
                        function: "Nurture oocyte, aid in ovulation",
                        sperm: "Must disperse corona (hyaluronidase enzyme)",
                        postFertilization: "Disperses"
                    },
                    
                    cytoplasm: {
                        nutrients: "Proteins, lipids, glycogen (fuel for early embryo)",
                        mRNA: "Maternal mRNA for early development (before zygotic genome activation)",
                        organelles: "Mitochondria (~100,000), ribosomes, Golgi, ER",
                        corticalGranules: "Vesicles beneath plasma membrane - exocytose at fertilization to block polyspermy",
                        yolk: "Minimal in human (oligolecithal), extensive in birds, reptiles (megalecithal)"
                    },
                    
                    nucleus: {
                        status: "Arrested at metaphase II (spindle present)",
                        chromosomes: "n chromosomes aligned at metaphase plate",
                        completion: "After sperm entry → anaphase II, female pronucleus forms"
                    },
                    
                    polarity: {
                        animalPole: "Metabolically active, less yolk (where polar bodies located)",
                        vegetalPole: "More yolk (in species with significant yolk)",
                        humanEgg: "Minimal polarity (very little yolk)"
                    }
                },
                
                follicleGrowth: {
                    primordialFollicle: {
                        structure: "Primary oocyte + single layer of squamous follicle cells",
                        size: "~30-50 μm diameter",
                        dormant: "Can remain dormant for years/decades",
                        activation: "Mechanism not fully understood (FSH-independent initially)"
                    },
                    
                    primaryFollicle: {
                        structure: "Growing oocyte + single/multiple layers of cuboidal granulosa cells",
                        zonaPellucida: "Begins forming between oocyte and granulosa cells",
                        oocyteGrowth: "Accumulates cytoplasm, mRNA, organelles",
                        size: "~50-100 μm"
                    },
                    
                    secondaryFollicle: {
                        structure: "Multiple layers of granulosa cells + theca layers form",
                        theca: {
                            thecaInterna: "Vascularized, androgen production (respond to LH)",
                            thecaExterna: "Connective tissue capsule"
                        },
                        zonaPellucida: "Fully formed, thick",
                        size: "~100-200 μm"
                    },
                    
                    antalFollicle: {
                        structure: "Fluid-filled cavity (antrum) forms",
                        antrum: "Follicular fluid (plasma filtrate + granulosa secretions)",
                        cumulusOophorus: "Granulosa cells surrounding oocyte",
                        FSHdependence: "Growth now dependent on FSH",
                        size: "200 μm to several mm"
                    },
                    
                    graafianFollicle: {
                        alternative: "Mature/preovulatory follicle",
                        structure: "Large antrum, oocyte with cumulus projects into cavity",
                        size: "~2 cm diameter",
                        LHreceptors: "Granulosa cells acquire LH receptors",
                        readyToOvulate: "Responds to LH surge",
                        stigma: "Thinned area on ovary surface where rupture will occur"
                    }
                },
                
                regulation: {
                    hormonal: {
                        hypothalamus: "GnRH - pulsatile secretion",
                        anteriorPituitary: {
                            FSH: "Stimulates follicle growth, granulosa cell proliferation",
                            LH: "Triggers ovulation, stimulates theca cells (androgen production)"
                        },
                        ovary: {
                            estrogen: "Produced by granulosa cells (from theca androgens)",
                            progesterone: "Produced by corpus luteum after ovulation",
                            inhibin: "Negative feedback on FSH"
                        }
                    },
                    
                    twoCell_twoGonadotropin: {
                        thecaCells: "LH → androstenedione (androgen)",
                        granulosaCells: "FSH → aromatase → convert androgens to estradiol",
                        cooperation: "Theca + granulosa work together to produce estrogen"
                    },
                    
                    positiveFeedback: {
                        mechanism: "High estrogen (from dominant follicle) → positive feedback on pituitary",
                        LHsurge: "Massive LH release (10-fold increase)",
                        timing: "~24-36 hours before ovulation",
                        result: "Triggers ovulation and meiosis I completion"
                    },
                    
                    negativeFeedback: {
                        estrogen: "Low-moderate levels inhibit FSH, LH",
                        progesterone: "Inhibits GnRH, LH (luteal phase)",
                        inhibin: "Inhibits FSH"
                    }
                },
                
                efficiency: "One functional egg + 2-3 polar bodies (3 cells 'wasted' to maximize egg cytoplasm)",
                
                limitedNumber: "~400 ovulations in lifetime (vs millions of sperm per day in males)"
            },
            
            comparison: {
                spermatogenesisVsOogenesis: {
                    timing: {
                        spermatogenesis: "Begins at puberty, continuous throughout life",
                        oogenesis: "Begins before birth, arrests twice, completes at fertilization"
                    },
                    duration: {
                        spermatogenesis: "~74 days per cycle (continuous)",
                        oogenesis: "Years to decades (from formation to ovulation)"
                    },
                    location: {
                        spermatogenesis: "Seminiferous tubules of testis",
                        oogenesis: "Ovarian follicles"
                    },
                    stemCells: {
                        spermatogenesis: "Spermatogonia continuously divide (self-renewing)",
                        oogenesis: "All oogonia formed before birth, no stem cells in adults"
                    },
                    meiosis: {
                        spermatogenesis: "Continuous, no arrests",
                        oogenesis: "Two arrests (prophase I, metaphase II)"
                    },
                    cytokinesis: {
                        spermatogenesis: "Equal divisions",
                        oogenesis: "Highly unequal - egg gets almost all cytoplasm"
                    },
                    products: {
                        spermatogenesis: "Four functional sperm per spermatogonium",
                        oogenesis: "One functional egg + 2-3 polar bodies per oogonium"
                    },
                    production: {
                        spermatogenesis: "Millions per day (~1500/second)",
                        oogenesis: "One per month (~400 total lifetime)"
                    },
                    size: {
                        spermatogenesis: "Tiny sperm (~60 μm long, 30 μm³ volume)",
                        oogenesis: "Large egg (~120 μm diameter, ~1,000,000 μm³)"
                    },
                    gameteSize: {
                        sperm: "Small, motile, minimal cytoplasm",
                        egg: "Large, non-motile, nutrient-rich cytoplasm"
                    },
                    maturation: {
                        spermatogenesis: "Further maturation in epididymis",
                        oogenesis: "Meiosis completes at fertilization"
                    },
                    lifespan: {
                        sperm: "~2-5 days in female reproductive tract",
                        egg: "~12-24 hours after ovulation"
                    }
                },
                
                mitosisVsMeiosis: {
                    spermatogoniaOogonia: "Undergo mitosis (diploid → diploid)",
                    spermatocytesOocytes: "Undergo meiosis (diploid → haploid)"
                }
            },
            
            errors: {
                nondisjunction: {
                    definition: "Failure of chromosomes to separate properly in meiosis",
                    seeAlso: "Detailed in Meiosis section",
                    
                    maternalAge: {
                        observation: "Risk increases dramatically with maternal age",
                        mechanism: {
                            oocyteAge: "Oocytes arrested in prophase I for years/decades",
                            cohesinDegradation: "Cohesin proteins (hold sisters together) degrade over time",
                            weakCohesion: "Older oocytes have weaker cohesion → more errors in separation",
                            proteins: "REC8, SMC1β subunits degrade"
                        },
                        statistics: {
                            age20: "Down syndrome risk ~1/1500",
                            age35: "~1/350 (cutoff for increased screening)",
                            age40: "~1/100",
                            age45: "~1/30",
                            age49: "~1/10"
                        },
                        allChromosomes: "Affects all chromosomes, but trisomy 21 most viable",
                        paternalAge: "Much weaker effect (fresh meiosis every ~74 days)"
                    },
                    
                    consequences: {
                        trisomy: "Extra chromosome (2n+1) - some viable (21, 18, 13, XXY, XXX, XYY)",
                        monosomy: "Missing chromosome (2n-1) - usually lethal except XO (Turner)",
                        miscarriage: "~50% of 1st trimester losses due to aneuploidy",
                        livebirths: "Down syndrome most common (~1/700 overall)"
                    }
                },
                
                spermatogenesisDefects: {
                    oligospermia: "Low sperm count (<15 million/mL)",
                    azoospermia: "No sperm in ejaculate",
                    asthenozoospermia: "Poor motility",
                    teratozoospermia: "Abnormal morphology",
                    causes: [
                        "Hormonal imbalances (FSH, LH, testosterone)",
                        "Genetic defects (Klinefelter XXY, Y chromosome microdeletions)",
                        "Varicocele (enlarged veins in scrotum - increase temperature)",
                        "Cryptorchidism (undescended testes)",
                        "Infections, toxins, medications",
                        "Meiotic arrest"
                    ],
                    diagnosis: "Semen analysis (count, motility, morphology)",
                    treatment: "Depends on cause - hormones, surgery, IVF/ICSI"
                },
                
                oogenesisDefects: {
                    anovulation: "No ovulation (PCOS, hormonal disorders)",
                    poorOocyteQuality: "Age-related, aneuploidy, mitochondrial dysfunction",
                    prematureOvarianFailure: "Menopause before age 40",
                    causes: [
                        "Hormonal imbalances (PCOS, hypothalamic amenorrhea)",
                        "Genetic (Turner XO, Fragile X premutation)",
                        "Autoimmune disorders",
                        "Chemotherapy, radiation",
                        "Advanced maternal age"
                    ],
                    diagnosis: "Hormone levels (FSH, estradiol, AMH), ultrasound (follicle count)",
                    treatment: "Ovulation induction, IVF, donor eggs"
                }
            },
            
            clinicalRelevance: {
                infertility: {
                    definition: "Inability to conceive after 12 months of unprotected intercourse",
                    prevalence: "~10-15% of couples",
                    causes: {
                        male: "~30% (sperm defects)",
                        female: "~30% (ovulation, tubal, uterine)",
                        both: "~20%",
                        unexplained: "~20%"
                    }
                },
                
                assistedReproduction: {
                    IUI: {
                        name: "Intrauterine Insemination",
                        procedure: "Washed sperm inserted directly into uterus",
                        indication: "Mild male factor, cervical mucus issues"
                    },
                    
                    IVF: {
                        name: "In Vitro Fertilization",
                        procedure: [
                            "Ovarian stimulation (FSH injections) → multiple eggs",
                            "Egg retrieval (transvaginal ultrasound-guided needle)",
                            "Sperm collection",
                            "Fertilization in dish",
                            "Embryo culture (3-5 days)",
                            "Embryo transfer to uterus"
                        ],
                        indication: "Tubal factor, male factor, endometriosis, unexplained, advanced age",
                        successRate: "~30-40% per cycle (age-dependent)"
                    },
                    
                    ICSI: {
                        name: "Intracytoplasmic Sperm Injection",
                        procedure: "Single sperm injected directly into egg",
                        indication: "Severe male factor (very low count, poor motility)",
                        advantage: "Bypasses natural fertilization barriers"
                    },
                    
                    PGT: {
                        name: "Preimplantation Genetic Testing",
                        PGTA: "Test for aneuploidy (wrong chromosome number)",
                        PGTM: "Test for specific genetic mutations (Mendelian disorders)",
                        procedure: "Biopsy embryo (day 5), genetic analysis, transfer normal embryos",
                        advantage: "Select chromosomally normal embryos, reduce miscarriage, avoid genetic disease"
                    },
                    
                    cryopreservation: {
                        sperm: "Freeze for later use (cancer treatment, fertility preservation)",
                        oocytes: "Freeze eggs (age-related decline, cancer, elective)",
                        embryos: "Freeze embryos for later transfer",
                        technique: "Vitrification (ultra-rapid freezing) - high survival rates"
                    }
                },
                
                contraception: {
                    hormonal: {
                        mechanism: "Suppress FSH, LH → prevent follicle development and ovulation",
                        types: "Pills, patch, ring, injection, implant",
                        male: "No hormonal contraceptive yet (in development)"
                    },
                    barrier: "Condom, diaphragm - prevent sperm from reaching egg",
                    IUD: "Intrauterine device - prevent implantation, some release hormones",
                    sterilization: {
                        vasectomy: "Cut/seal vas deferens (no sperm in ejaculate)",
                        tubalLigation: "Cut/seal fallopian tubes (eggs can't reach uterus)"
                    }
                },
                
                prenatalDiagnosis: {
                    amniocentesis: "Sample amniotic fluid (fetal cells), karyotype for aneuploidies",
                    CVS: "Chorionic villus sampling - earlier than amnio",
                    NIPT: "Non-invasive prenatal testing - fetal DNA in maternal blood",
                    ultrasound: "Nuchal translucency, anatomy scan - detect anomalies",
                    indication: "Maternal age ≥35, family history, abnormal screening"
                },
                
                fertilityPreservation: {
                    cancer: "Freeze sperm/eggs before chemotherapy/radiation",
                    ageRelated: "Freeze eggs at younger age (elective fertility preservation)",
                    medical: "Autoimmune diseases, gender-affirming care"
                }
            },
            
            examples: [
                {
                    species: "Human",
                    spermatogenesis: "~74 days, continuous from puberty, ~200-300 million sperm/day",
                    oogenesis: "Begins before birth, ~400 ovulations lifetime, arrests at prophase I and metaphase II",
                    maternalAge: "Major factor in aneuploidy risk"
                },
                {
                    species: "Drosophila (fruit fly)",
                    spermatogenesis: "~10 days, giant sperm (~6 cm in some species - longest sperm in animal kingdom!)",
                    oogenesis: "Nurse cells provide cytoplasm to oocyte, no polar bodies formed (special mechanism)",
                    note: "Model organism for gametogenesis research"
                },
                {
                    species: "C. elegans (nematode)",
                    hermaphrodite: "Produces sperm first, then switches to oocyte production",
                    unique: "Self-fertilization possible",
                    research: "Model for studying oocyte development, meiosis"
                },
                {
                    species: "Mouse",
                    spermatogenesis: "~35 days",
                    oogenesis: "Similar to human but shorter lifespan, different timing",
                    research: "Common model for reproductive biology research"
                }
            ],
            
            evolutionaryPerspective: {
                anisogamy: {
                    definition: "Gametes of different sizes (eggs large, sperm small)",
                    evolution: "Ancestrally isogamous (equal-sized gametes), evolved to anisogamy",
                    advantage: {
                        eggs: "Provision embryo with nutrients, organelles",
                        sperm: "Small, motile, produced in large numbers (find egg)"
                    },
                    sexualSelection: "Differential investment → different reproductive strategies"
                },
                
                spermCompetition: {
                    observation: "Males produce far more sperm than needed to fertilize",
                    explanation: "Competition between males, between sperm from different males",
                    evidence: "Species with more sperm competition have larger testes, more sperm"
                },
                
                maternalAgeEffect: {
                    hypothesis: "Why do oocytes arrest for years?",
                    tradeoff: "Longer reproductive lifespan vs increased error risk with age",
                    humans: "Extended reproductive lifespan (compared to most mammals)",
                    selection: "Historically, most reproduction at younger ages (selection weak for older ages)"
                }
            },
            
            applications: [
                "Assisted reproductive technology: IVF, ICSI for infertility treatment",
                "Fertility preservation: Egg/sperm freezing for cancer patients, age-related decline",
                "Preimplantation genetic testing: Screen embryos for genetic disorders, aneuploidy",
                "Contraceptive development: Understanding gametogenesis → new contraceptives",
                "Prenatal diagnosis: Understand maternal age effect → genetic counseling",
                "Regenerative medicine: Germ cell derivation from stem cells (research)",
                "Understanding aging: Oocyte aging model for cellular aging",
                "Toxicology: Test effects of chemicals on gametogenesis",
                "Evolutionary biology: Sexual selection, gamete evolution",
                "Cancer research: Some cancers express germ cell genes (cancer-testis antigens)"
            ]
        };
        
        return content;
    }

    // ========================================
    // MAIN PROBLEM PROCESSING METHODS
    // ========================================

    parseCellularProblem(topic, parameters = {}, subTopic = null, context = {}) {
        let topicType = null;

        // Match topic to handler
        for (const [type, config] of Object.entries(this.cellularTopics)) {
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
            throw new Error(`Unable to recognize cellular division topic: ${topic}`);
        }

        return {
            originalTopic: topic,
            type: topicType,
            subTopic: subTopic,
            parameters: { ...parameters },
            context: { ...context },
            difficulty: this.cellularTopics[topicType].difficulty,
            prerequisites: this.cellularTopics[topicType].prerequisites,
            parsedAt: new Date().toISOString()
        };
    }

    handleCellularProblem(config) {
        const { topic, parameters, subTopic, context, requestType } = config;

        try {
            const isExperimentRequest = requestType === 'experiment' || 
                                       (typeof topic === 'string' && topic.toLowerCase().includes('experiment'));

            if (isExperimentRequest) {
                return this.handleExperimentRequest(config);
            } else {
                this.currentProblem = this.parseCellularProblem(topic, parameters, subTopic, context);
                this.currentContent = this.getCellularContent(this.currentProblem);
                
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
                
                this.contentSteps = this.generateCellularContent(this.currentProblem, this.currentContent);
                
                // Generate workbook (handles async internally)
                this.generateCellularWorkbook();

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
            throw new Error(`Failed to process cellular division request: ${error.message}`);
        }
    }

    handleExperimentRequest(config) {
        const { topic, parameters, experimentId } = config;

        if (experimentId && this.cellularExperiments[experimentId]) {
            this.currentExperiment = this.cellularExperiments[experimentId];
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

    getCellularContent(problem) {
        const handler = this.cellularTopics[problem.type]?.handler;
        if (!handler) {
            throw new Error(`No handler available for cellular division topic: ${problem.type}`);
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

        // Filter by specific stages (mitosis/meiosis stages)
        if (parameters.stages && Array.isArray(parameters.stages)) {
            if (filtered.stages) {
                const requestedStages = {};
                parameters.stages.forEach(stage => {
                    const stageKey = stage.toLowerCase();
                    if (filtered.stages[stageKey]) {
                        requestedStages[stageKey] = filtered.stages[stageKey];
                    }
                });
                filtered.stages = requestedStages;
            }
        }

        return filtered;
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
                adapted.molecularDetails = false;
                break;
            
            case 'intermediate':
                adapted.vocabulary = 'standard';
                adapted.examples = this.selectMixedExamples(content.examples);
                adapted.depth = 'moderate';
                adapted.molecularDetails = true;
                break;
            
            case 'advanced':
                adapted.vocabulary = 'technical';
                adapted.examples = this.selectAdvancedExamples(content.examples);
                adapted.depth = 'comprehensive';
                adapted.molecularDetails = true;
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
            currentResearch: `Current research in ${content.topic} includes cell cycle regulation, chromosome dynamics, and cancer biology`,
            openQuestions: "Unresolved questions about spindle assembly, checkpoint mechanisms, and chromosome segregation errors",
            techniques: "Advanced techniques: Live-cell imaging, super-resolution microscopy, optogenetics, single-cell sequencing"
        };
    }

    getContextualScenarios(topicType) {
        return this.contextualScenarios[topicType] || [];
    }

    getMetacognitivePrompts(topicType) {
        const prompts = {
            beforeLearning: this.metacognitivePrompts.beforeLearning.map(p => 
                p.replace('{topic}', this.cellularTopics[topicType]?.name || topicType)
            ),
            duringLearning: this.metacognitivePrompts.duringLearning.map(p => 
                p.replace('{concept}', topicType).replace('{process}', topicType).replace('{related_process}', this.getRelatedProcess(topicType))
            ),
            afterLearning: this.metacognitivePrompts.afterLearning.map(p => 
                p.replace('{topic}', this.cellularTopics[topicType]?.name || topicType)
            )
        };

        return prompts;
    }

    getRelatedProcess(topicType) {
        const relations = {
            mitosis: 'meiosis',
            meiosis: 'mitosis',
            cell_cycle: 'mitosis',
            chromosome_structure: 'cell division',
            cytokinesis: 'mitosis',
            cell_cycle_regulation: 'cancer',
            gametogenesis: 'meiosis'
        };
        return relations[topicType] || 'cell division';
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

    generateCellularContent(problem, content) {
        const contentSections = [];

        // Generate overview section
        contentSections.push(this.generateOverviewSection(problem, content));

        // Generate specific content sections based on content structure
        if (content.phases || content.detailedPhases) {
            contentSections.push(this.generatePhasesSection(content));
        }

        if (content.stages) {
            contentSections.push(this.generateStagesSection(content));
        }

        if (content.meiosisI || content.meiosisII) {
            contentSections.push(this.generateMeiosisSection(content));
        }

        if (content.packagingLevels) {
            contentSections.push(this.generatePackagingSection(content));
        }

        if (content.chromosomeRegions) {
            contentSections.push(this.generateChromosomeRegionsSection(content));
        }

        if (content.regulation) {
            contentSections.push(this.generateRegulationSection(content));
        }

        if (content.geneticVariation) {
            contentSections.push(this.generateGeneticVariationSection(content));
        }

        if (content.errors) {
            contentSections.push(this.generateErrorsSection(content));
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

    generatePhasesSection(content) {
        return {
            sectionType: 'phases',
            title: 'Cell Cycle Phases',
            data: content.phases || content.detailedPhases
        };
    }

    generateStagesSection(content) {
        return {
            sectionType: 'stages',
            title: 'Division Stages',
            data: content.stages
        };
    }

    generateMeiosisSection(content) {
        return {
            sectionType: 'meiosis_divisions',
            title: 'Meiosis I and II',
            meiosisI: content.meiosisI,
            meiosisII: content.meiosisII
        };
    }

    generatePackagingSection(content) {
        return {
            sectionType: 'packaging',
            title: 'DNA Packaging Levels',
            data: content.packagingLevels
        };
    }

    generateChromosomeRegionsSection(content) {
        return {
            sectionType: 'chromosome_regions',
            title: 'Chromosome Structure and Regions',
            data: content.chromosomeRegions
        };
    }

    generateRegulationSection(content) {
        return {
            sectionType: 'regulation',
            title: 'Regulatory Mechanisms',
            data: content.regulation
        };
    }

    generateGeneticVariationSection(content) {
        return {
            sectionType: 'genetic_variation',
            title: 'Sources of Genetic Variation',
            data: content.geneticVariation
        };
    }

    generateErrorsSection(content) {
        return {
            sectionType: 'errors',
            title: 'Errors and Clinical Relevance',
            data: content.errors
        };
    }

    generateComparisonsSection(content) {
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
        
        // Extract from various content structures
        if (content.overview && content.overview.purpose) {
            if (Array.isArray(content.overview.purpose)) {
                keyPoints.push(...content.overview.purpose.slice(0, 3));
            }
        }

        if (content.phases && content.phases.overview) {
            keyPoints.push(content.phases.overview);
        }

        if (content.stages && content.stages.overview) {
            keyPoints.push(content.stages.overview);
        }

        if (content.significance && Array.isArray(content.significance)) {
            keyPoints.push(...content.significance.slice(0, 2));
        }

        return keyPoints.slice(0, 5);
    }

    findExperimentByTopic(topic) {
        const topicLower = topic.toLowerCase();
        
        // Direct name match
        for (const [id, exp] of Object.entries(this.cellularExperiments)) {
            if (exp.name.toLowerCase().includes(topicLower)) {
                return exp;
            }
        }

        // Related topics match
        for (const [id, exp] of Object.entries(this.cellularExperiments)) {
            if (exp.relatedTopics.some(t => topicLower.includes(t.toLowerCase()))) {
                return exp;
            }
        }

        // Category match
        for (const [id, exp] of Object.entries(this.cellularExperiments)) {
            if (exp.category.toLowerCase().includes(topicLower)) {
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
        
        if (labExp.variables) {
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

        if (labExp.observations) {
            formatted.push(['', '']);
            formatted.push(['Expected Observations', '']);
            Object.entries(labExp.observations).forEach(([key, value]) => {
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
                formatted.push(['', labExp.conclusions]);
            }
        }

        if (labExp.connectionToHistorical || labExp.connectionToFlemming || labExp.connectionToMorgan || labExp.connectionToHartwellNurse || labExp.connectionToBridges || labExp.connectionToRappaport) {
            const connection = labExp.connectionToHistorical || labExp.connectionToFlemming || labExp.connectionToMorgan || labExp.connectionToHartwellNurse || labExp.connectionToBridges || labExp.connectionToRappaport;
            formatted.push(['', '']);
            formatted.push(['Connection to Historical Work', '']);
            if (typeof connection === 'object') {
                Object.entries(connection).forEach(([key, value]) => {
                    formatted.push([`  ${key}:`, value]);
                });
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

        if (labExp.safetyPrecautions) {
            formatted.push(['', '']);
            formatted.push(['SAFETY PRECAUTIONS', '']);
            if (Array.isArray(labExp.safetyPrecautions)) {
                labExp.safetyPrecautions.forEach(note => {
                    formatted.push(['  ⚠', note]);
                });
            }
        }

        return formatted;
    }

    getRelatedExperiments(topicType) {
        const related = [];
        
        Object.entries(this.cellularExperiments).forEach(([id, experiment]) => {
            if (experiment.relatedTopics.includes(topicType)) {
                related.push({
                    id: id,
                    name: experiment.name,
                    category: experiment.category,
                    historicalScientist: experiment.historicalBackground?.scientist || experiment.historicalBackground?.scientists,
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
        return Object.entries(this.cellularExperiments).map(([id, exp]) => ({
            id: id,
            name: exp.name,
            category: exp.category,
            relatedTopics: exp.relatedTopics,
            scientist: exp.historicalBackground?.scientist || exp.historicalBackground?.scientists,
            year: exp.historicalBackground?.year
        }));
    }

    getAllTopics() {
        return Object.entries(this.cellularTopics).map(([id, topic]) => ({
            id: id,
            name: topic.name,
            category: topic.category,
            description: topic.description,
            difficulty: topic.difficulty,
            prerequisites: topic.prerequisites
        }));
    }

    resetWorkbook() {
        this.currentProblem = null;
        this.currentContent = null;
        this.contentSteps = [];
        this.currentWorkbook = null;
        this.currentExperiment = null;
    }

    formatCellularTerm(term) {
        let formatted = term;
        
        Object.entries(this.cellularSymbols).forEach(([key, symbol]) => {
            const regex = new RegExp(key, 'g');
            formatted = formatted.replace(regex, symbol);
        });

        return formatted;
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
            strugglingTopics: this.learnerProfile.strugglingTopics.length
        };
    }


     // ========================================
    // WORKBOOK GENERATION METHODS
    // ========================================

    generateCellularWorkbook() {
        if (!this.currentContent || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();
        workbook.title = 'Cellular Division Workbook';

        // Start diagram generation in background if needed
        if (this.includeDiagramsInWorkbook) {
            this.diagramsPromise = this.generateCellularDiagramDataAsync();
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

    createWorkbookStructure() {
        return {
            title: 'Cellular Division Workbook',
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
                ['Category', this.cellularTopics[this.currentProblem.type]?.category || 'N/A'],
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
            comparisonData.push(['Feature', 'Comparison 1', 'Comparison 2']);
            this.currentContent.comparison.forEach(comp => {
                const row = [];
                Object.values(comp).forEach(val => row.push(val));
                comparisonData.push(row);
            });
        } else {
            Object.entries(this.currentContent.comparison).forEach(([key, value]) => {
                comparisonData.push([key.toUpperCase(), '']);
                Object.entries(value).forEach(([k, v]) => {
                    comparisonData.push([`  ${k}`, typeof v === 'object' ? JSON.stringify(v) : v]);
                });
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
                }
            });
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

    createContextualScenariosWorkbookSection() {
        if (!this.currentContent.contextualScenarios || this.currentContent.contextualScenarios.length === 0) {
            return null;
        }

        const data = [['Scenario', 'Context', 'Application']];
        
        this.currentContent.contextualScenarios.forEach(scenario => {
            data.push([
                scenario.scenario,
                scenario.context,
                scenario.application
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

        const data = [['Experiment Name', 'Category', 'Scientist']];

        this.currentContent.relatedExperiments.forEach(exp => {
            data.push([
                exp.name,
                exp.category,
                exp.historicalScientist || 'Various'
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
        if (!questions || questions.length === 0) return null;

        const data = [['Level', 'Question']];

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
    // EXPERIMENT WORKBOOK GENERATION
    // ========================================

    generateExperimentWorkbook(experimentContent) {
        const workbook = this.createWorkbookStructure();
        workbook.title = 'Cellular Division Experiment Workbook';

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
                    this.cellularTopics[topic]?.name || topic,
                    this.cellularTopics[topic]?.description || ''
                ])
            });
        }

        this.currentWorkbook = workbook;
    }

    // ========================================
    // DIAGRAM HANDLING METHODS
    // ========================================

    // Async helper that runs in background
    async generateCellularDiagramDataAsync() {
        if (!this.currentContent) return;

        const { type } = this.currentProblem;

        // Get relevant diagram keys
        const diagramKeys = this.getRelevantCellularDiagrams(type);

        this.diagramData = {
            type: type,
            diagrams: diagramKeys,
            renderedImages: [],
            status: 'rendering',
            placeholder: false,
            note: "Cellular division diagrams"
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
            title: 'Cellular Division Diagrams',
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
            title: 'Cellular Division Diagrams',
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

    getRelevantCellularDiagrams(topicType) {
        const diagramMap = {
            cell_cycle: [
                "cellCycle",
                "cellStructure"
            ],
            mitosis: [
                "mitosis",
                "cellCycle",
                "chromosomes"
            ],
            meiosis: [
                "meiosis",
                "chromosomes",
                "dnaStructure"
            ],
            chromosome_structure: [
                "chromosomes",
                "dnaStructure",
                "cellStructure"
            ],
            cytokinesis: [
                "mitosis",
                "cellStructure"
            ],
            cell_cycle_regulation: [
                "cellCycle",
                "cellStructure"
            ],
            gametogenesis: [
                "meiosis",
                "chromosomes"
            ]
        };

        return diagramMap[topicType] || [];
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

    // ========================================
    // UTILITY METHODS
    // ========================================

    getAllTopics() {
        return Object.entries(this.cellularTopics).map(([id, topic]) => ({
            id: id,
            name: topic.name,
            category: topic.category,
            description: topic.description,
            difficulty: topic.difficulty,
            prerequisites: topic.prerequisites
        }));
    }

    getAllExperiments() {
        return Object.entries(this.cellularExperiments).map(([id, exp]) => ({
            id: id,
            name: exp.name,
            category: exp.category,
            relatedTopics: exp.relatedTopics,
            scientist: exp.historicalBackground?.scientist,
            year: exp.historicalBackground?.year
        }));
    }



     // ========================================
    // CELLULAR DIVISION SPECIFIC HELPER METHODS
    // ========================================

    getTopicRelevance(topicType) {
        const relevance = {
            cell_cycle: "The cell cycle controls when and how cells divide, essential for growth, repair, and preventing cancer",
            mitosis: "Mitosis ensures genetic consistency across cell populations for growth and tissue maintenance",
            meiosis: "Meiosis generates genetic diversity and maintains constant chromosome number across generations",
            chromosome_structure: "Chromosome organization enables DNA packaging and regulates gene expression",
            cytokinesis: "Cytokinesis completes cell division by separating cytoplasm and organelles",
            cell_cycle_regulation: "Cell cycle regulation prevents cancer and ensures genomic stability",
            gametogenesis: "Gametogenesis produces specialized cells for sexual reproduction and genetic diversity"
        };

        return relevance[topicType] || "Important cellular division concept";
    }

    suggestRelatedTopics() {
        if (!this.currentProblem) return [];

        const relatedTopicsMap = {
            cell_cycle: ['mitosis', 'cell_cycle_regulation'],
            mitosis: ['cell_cycle', 'chromosome_structure', 'cytokinesis'],
            meiosis: ['gametogenesis', 'chromosome_structure', 'mitosis'],
            chromosome_structure: ['mitosis', 'meiosis', 'cell_cycle'],
            cytokinesis: ['mitosis', 'cell_cycle'],
            cell_cycle_regulation: ['cell_cycle', 'mitosis'],
            gametogenesis: ['meiosis', 'chromosome_structure']
        };

        const relatedTypes = relatedTopicsMap[this.currentProblem.type] || [];

        return relatedTypes.map(type => ({
            type: type,
            name: this.cellularTopics[type]?.name,
            description: this.cellularTopics[type]?.description
        }));
    }

    generateCellularDiagramData() {
        if (!this.currentContent) return;

        const { type } = this.currentProblem;

        this.diagramData = {
            type: type,
            diagrams: this.getRelevantCellularDiagrams(type),
            placeholder: true,
            note: "Diagram generation for cellular division processes"
        };
    }

    getRelevantCellularDiagrams(topicType) {
        const diagramMap = {
            cell_cycle: [
                "cellCycle",
                "cellStructure"
            ],
            mitosis: [
                "mitosis",
                "cellStructure",
                "chromosomes"
            ],
            meiosis: [
                "meiosis",
                "chromosomes",
                "dnaStructure"
            ],
            chromosome_structure: [
                "chromosomes",
                "dnaStructure",
                "cellStructure"
            ],
            cytokinesis: [
                "cellStructure",
                "cellMembrane"
            ],
            cell_cycle_regulation: [
                "cellCycle",
                "cellStructure"
            ],
            gametogenesis: [
                "meiosis",
                "chromosomes"
            ]
        };

        return diagramMap[topicType] || [];
    }

    generateGlossary() {
        if (!this.currentContent) return {};

        const glossary = {};

        // Extract from key definitions
        if (this.currentContent.keyDefinitions) {
            Object.entries(this.currentContent.keyDefinitions).forEach(([key, value]) => {
                glossary[key] = value;
            });
        }

        // Extract from classification structures
        if (this.currentContent.classification) {
            this.extractGlossaryFromClassification(this.currentContent.classification, glossary);
        }

        // Extract from phases/stages
        if (this.currentContent.phases) {
            Object.entries(this.currentContent.phases).forEach(([phase, data]) => {
                if (data.definition) {
                    glossary[this.formatKey(phase)] = data.definition;
                }
            });
        }

        if (this.currentContent.stages) {
            Object.entries(this.currentContent.stages).forEach(([stage, data]) => {
                if (data.description) {
                    glossary[this.formatKey(stage)] = data.description;
                }
            });
        }

        return glossary;
    }

    extractGlossaryFromClassification(classification, glossary) {
        Object.entries(classification).forEach(([key, value]) => {
            if (typeof value === 'object' && value !== null) {
                if (value.definition) {
                    glossary[this.formatKey(key)] = value.definition;
                }
                // Recurse for nested objects
                Object.entries(value).forEach(([subKey, subValue]) => {
                    if (typeof subValue === 'object' && subValue !== null && subValue.definition) {
                        glossary[this.formatKey(subKey)] = subValue.definition;
                    }
                });
            }
        });
    }

    formatKey(key) {
        // Convert camelCase or snake_case to Title Case
        return key
            .replace(/([A-Z])/g, ' $1')
            .replace(/_/g, ' ')
            .replace(/^./, str => str.toUpperCase())
            .trim();
    }

    generateCellularAnalogy(concept) {
        const analogies = {
            // Cell Cycle
            G1_phase: "Like a factory stocking up on materials before starting production",
            S_phase: "Like photocopying all instruction manuals before distributing to new offices",
            G2_phase: "Like final quality control before shipping products",
            M_phase: "Like sorting and packing products into two identical shipments",
            checkpoint: "Like a quality control station that stops the assembly line if problems detected",
            
            // Mitosis
            prophase: "Like organizing files and preparing to move to a new office",
            metaphase: "Like lining up children by height for a class photo",
            anaphase: "Like pulling apart Velcro - the two sides separate",
            telophase: "Like two offices being set up with identical equipment",
            spindle: "Like rope pulleys that move heavy objects",
            
            // Meiosis
            crossing_over: "Like shuffling a deck of cards to create new combinations",
            independent_assortment: "Like randomly distributing red and blue marbles into bags",
            synapsis: "Like two zippers coming together",
            bivalent: "Like holding two similar books side by side to compare",
            
            // Chromosomes
            sister_chromatids: "Like identical twins holding hands",
            homologous_chromosomes: "Like two similar books - one from mom, one from dad",
            centromere: "Like the knot tying two ropes together",
            kinetochore: "Like a hook where you attach the crane cable",
            chromatin: "Like thread wound around spools (nucleosomes)",
            
            // Regulation
            cyclin: "Like a key that starts an engine at specific times",
            CDK: "Like an engine that only runs when the key (cyclin) is inserted",
            p53: "Like a smoke detector that stops everything if danger detected",
            tumor_suppressor: "Like brakes on a car",
            oncogene: "Like a stuck accelerator pedal",
            
            // Gametogenesis
            polar_body: "Like the small piece cut off when trimming fabric - discarded but necessary",
            spermatogenesis: "Like a factory with continuous production",
            oogenesis: "Like making one high-quality product with extensive preparation",
            acrosome: "Like a drill bit that penetrates through barriers"
        };

        return analogies[concept] || "Performs a specialized cellular function";
    }

    adaptCellularLanguage(text, level) {
        if (!text) return '';

        const adaptations = {
            basic: {
                replacements: {
                    'interphase': 'growth phase',
                    'prophase': 'chromosome condensing phase',
                    'metaphase': 'chromosome lining up phase',
                    'anaphase': 'chromosome separating phase',
                    'telophase': 'nucleus reforming phase',
                    'cytokinesis': 'cell splitting',
                    'chromatid': 'chromosome copy',
                    'centromere': 'chromosome connection point',
                    'spindle': 'chromosome-moving structure',
                    'diploid': 'full set of chromosomes (2n)',
                    'haploid': 'half set of chromosomes (n)',
                    'nondisjunction': 'chromosomes failing to separate',
                    'checkpoint': 'quality control point',
                    'cyclin': 'cell cycle timer protein'
                }
            },
            intermediate: {
                replacements: {
                    'interphase': 'interphase (growth and DNA replication)',
                    'diploid': 'diploid (2n)',
                    'haploid': 'haploid (n)',
                    'cytokinesis': 'cytokinesis (cytoplasm division)'
                }
            },
            advanced: {
                replacements: {
                    'interphase': 'interphase (G₁, S, G₂ phases)',
                    'diploid': 'diploid (2n chromosomes, 2c or 4c DNA)',
                    'haploid': 'haploid (n chromosomes)',
                    'checkpoint': 'cell cycle checkpoint (G₁/S, G₂/M, M)',
                    'spindle': 'mitotic spindle apparatus'
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

    addCellularConceptualConnections(content) {
        if (!this.includeConceptualConnections) return content;

        const connections = {
            cell_cycle: "Cell cycle connects to DNA replication, gene expression, and growth control. Checkpoints link to cancer prevention.",
            mitosis: "Mitosis connects to growth, development, and tissue repair. Equal chromosome distribution ensures genetic stability.",
            meiosis: "Meiosis connects to genetics, evolution, and sexual reproduction. Variation mechanisms drive adaptation.",
            chromosome_structure: "Chromosome packaging connects to gene regulation. Chromatin states determine which genes are expressed.",
            cytokinesis: "Cytokinesis completes cell division. Different mechanisms in animals vs plants reflect structural differences.",
            cell_cycle_regulation: "Regulation connects checkpoints, growth signals, and tumor suppressors. Loss of control causes cancer.",
            gametogenesis: "Gametogenesis connects meiosis to reproduction. Timing differences between sexes affect fertility."
        };

        content.conceptualConnections = connections[this.currentProblem.type] || 
            "This topic connects to broader cellular division principles";

        return content;
    }

    enrichWithCellularExamples(content) {
        if (!this.includeExamples || content.examples) return content;

        const exampleDatabase = {
            cell_cycle: [
                "Skin cells: complete cycle in ~24 hours, constant replacement",
                "Neurons: permanent G₀ - never divide after maturation",
                "Cancer cells: uncontrolled cycling due to checkpoint defects"
            ],
            mitosis: [
                "Wound healing: mitosis replaces damaged skin cells",
                "Embryo development: zygote → thousands of cells via mitosis",
                "Identical twins: from one zygote split by mitosis"
            ],
            meiosis: [
                "Down syndrome: trisomy 21 from meiotic nondisjunction",
                "Siblings differ: crossing over + independent assortment",
                "Maternal age effect: older eggs have higher error rates"
            ],
            chromosome_structure: [
                "Barr body: inactive X chromosome in females",
                "Karyotyping: metaphase chromosomes for diagnosis",
                "Telomere shortening: limits cell divisions (~50 times)"
            ],
            cytokinesis: [
                "Muscle fibers: multinucleate from skipped cytokinesis",
                "Plant cell walls: require cell plate, not cleavage furrow",
                "Cancer cells: cytokinesis failure → polyploidy"
            ],
            cell_cycle_regulation: [
                "p53 mutations: found in ~50% of cancers",
                "Chemotherapy: targets rapidly dividing cells",
                "Liver regeneration: quiescent cells re-enter cycle"
            ],
            gametogenesis: [
                "Sperm production: ~1500 per second in adult males",
                "Menopause: ovarian follicle depletion around age 50",
                "IVF: retrieve eggs arrested at metaphase II"
            ]
        };

        if (exampleDatabase[this.currentProblem.type]) {
            content.examples = content.examples || [];
            content.examples.push(...exampleDatabase[this.currentProblem.type]);
        }

        return content;
    }

    addCellularComparativeContext(content) {
        if (!this.includeComparisons || content.comparison) return content;

        const comparativeData = {
            cell_cycle: {
                duration: "24 hours (typical) to never (neurons in G₀)",
                phases: "Interphase 90-95% vs M phase 5-10%",
                regulation: "Normal cells (checkpoints) vs Cancer cells (defective)"
            },
            mitosis: {
                divisions: "One division vs Meiosis two divisions",
                result: "Identical diploid cells vs Meiosis unique haploid cells",
                purpose: "Growth/repair vs Meiosis gamete production"
            },
            meiosis: {
                meiosisI: "Separates homologs (reduction) vs Meiosis II separates sisters",
                variation: "High (crossing over) vs Mitosis none",
                errors: "Maternal age effect vs Mitosis rare"
            },
            chromosome_structure: {
                euchromatin: "Open, active genes vs Heterochromatin closed, silent",
                interphase: "Diffuse chromatin vs Metaphase maximally condensed",
                packaging: "10,000-fold compaction from DNA to chromosome"
            }
        };

        if (comparativeData[this.currentProblem.type]) {
            content.comparativeContext = comparativeData[this.currentProblem.type];
        }

        return content;
    }

    validateCellularContent(content) {
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
            content.phases ||
            content.stages ||
            content.regulation ||
            content.packagingLevels ||
            content.meiosisI;

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

    calculateCellularContentCompleteness() {
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
            this.currentContent.phases ||
            this.currentContent.stages ||
            this.currentContent.regulation ||
            this.currentContent.packagingLevels ||
            this.currentContent.meiosisI;
        if (hasMainContent) score += 3;

        // Additional depth
        if (this.currentContent.errors) score += 1;
        if (this.currentContent.contextualScenarios) score += 1;

        return Math.round((score / maxScore) * 100);
    }

    getCellularContentQualityMetrics() {
        return {
            completeness: this.calculateCellularContentCompleteness(),
            hasExamples: !!this.currentContent?.examples,
            hasComparisons: !!this.currentContent?.comparison,
            hasApplications: !!this.currentContent?.applications,
            hasContextualScenarios: !!this.currentContent?.contextualScenarios,
            detailLevel: this.explanationLevel,
            includesVisualizations: this.includeVisualizations,
            includesMisconceptions: this.includeCommonMisconceptions,
            includesExperiments: this.includeExperiments,
            adaptiveDifficulty: this.adaptiveDifficulty,
            metacognitiveSupport: this.metacognitiveSupport
        };
    }

    filterCellularContentByCategory(category) {
        if (!this.currentContent) return null;

        const filtered = {
            category: category,
            items: []
        };

        // Filter based on category
        if (this.currentContent.phases) {
            Object.entries(this.currentContent.phases).forEach(([key, value]) => {
                if (key.toLowerCase().includes(category.toLowerCase())) {
                    filtered.items.push({ type: key, data: value });
                }
            });
        }

        if (this.currentContent.stages) {
            Object.entries(this.currentContent.stages).forEach(([key, value]) => {
                if (key.toLowerCase().includes(category.toLowerCase())) {
                    filtered.items.push({ type: key, data: value });
                }
            });
        }

        return filtered;
    }

    generateCellularContentSummary() {
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
        if (this.currentContent.phases) {
            summary.keyPoints.push("Cell cycle phases covered");
            summary.coverage.phases = Object.keys(this.currentContent.phases).length;
        }

        if (this.currentContent.stages) {
            summary.keyPoints.push("Division stages explained");
            summary.coverage.stages = Object.keys(this.currentContent.stages).length;
        }

        if (this.currentContent.regulation) {
            summary.keyPoints.push("Regulatory mechanisms described");
            summary.coverage.regulation = true;
        }

        if (this.currentContent.examples) {
            summary.coverage.examples = this.currentContent.examples.length;
        }

        return summary;
    }

    assessCellularContentDifficulty() {
        if (!this.currentContent) return 'unknown';

        let difficultyScore = 0;

        // Topic-based difficulty
        const basicTopics = ['cell_cycle', 'mitosis'];
        const intermediateTopics = ['chromosome_structure', 'cytokinesis'];
        const advancedTopics = ['meiosis', 'cell_cycle_regulation', 'gametogenesis'];

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

    generateCellularLearningObjectives() {
        if (!this.currentProblem) return [];

        const objectivesDatabase = {
            cell_cycle: [
                "Describe the phases of the cell cycle and their key events",
                "Explain the role of checkpoints in regulating cell division",
                "Identify the functions of cyclins and CDKs",
                "Relate cell cycle dysregulation to cancer development"
            ],
            mitosis: [
                "List and describe the stages of mitosis (PMAT)",
                "Explain the role of the mitotic spindle in chromosome segregation",
                "Compare mitosis in animal and plant cells",
                "Predict consequences of mitotic errors"
            ],
            meiosis: [
                "Distinguish between meiosis I and meiosis II",
                "Explain how crossing over generates genetic variation",
                "Calculate genetic variation from independent assortment",
                "Describe consequences of meiotic nondisjunction"
            ],
            chromosome_structure: [
                "Describe the levels of DNA packaging from nucleosome to chromosome",
                "Distinguish between euchromatin and heterochromatin",
                "Explain the structure and function of centromeres and telomeres",
                "Interpret a human karyotype"
            ],
            cytokinesis: [
                "Compare cytokinesis in animal and plant cells",
                "Explain the role of the contractile ring in animal cells",
                "Describe cell plate formation in plant cells",
                "Predict effects of cytokinesis failure"
            ],
            cell_cycle_regulation: [
                "Explain how tumor suppressors (p53, Rb) prevent cancer",
                "Describe the role of oncogenes in promoting cell division",
                "Identify checkpoint proteins and their functions",
                "Relate cell cycle control to cancer therapy"
            ],
            gametogenesis: [
                "Compare and contrast spermatogenesis and oogenesis",
                "Explain meiotic arrests in oogenesis",
                "Describe the maternal age effect on chromosome abnormalities",
                "Identify structures of mature sperm and eggs"
            ]
        };

        return objectivesDatabase[this.currentProblem.type] || [
            "Understand key cellular division concepts",
            "Apply knowledge to biological contexts",
            "Make connections between structure and function"
        ];
    }

    identifyCellularPrerequisites() {
        if (!this.currentProblem) return [];

        const prerequisitesDatabase = {
            cell_cycle: [
                "Basic cell structure (nucleus, organelles)",
                "Understanding of DNA as genetic material",
                "Knowledge of cell growth and metabolism"
            ],
            mitosis: [
                "Cell cycle phases",
                "DNA replication",
                "Basic chromosome structure"
            ],
            meiosis: [
                "Mitosis",
                "Chromosome structure (homologous chromosomes)",
                "Basic genetics (alleles, genotype)"
            ],
            chromosome_structure: [
                "DNA structure (double helix)",
                "Proteins (histones)",
                "Basic molecular biology"
            ],
            cytokinesis: [
                "Mitosis",
                "Cell structure (membrane, cytoskeleton)",
                "Plant vs animal cell differences"
            ],
            cell_cycle_regulation: [
                "Cell cycle phases",
                "Proteins and enzymes",
                "Signal transduction basics"
            ],
            gametogenesis: [
                "Meiosis",
                "Reproductive system basics",
                "Fertilization concept"
            ]
        };

        return prerequisitesDatabase[this.currentProblem.type] || [
            "General cell biology background",
            "Basic understanding of DNA"
        ];
    }

    generateCellularStudyTips() {
        if (!this.currentProblem) return [];

        const studyTipsDatabase = {
            cell_cycle: [
                "Create a circular diagram showing all phases and their durations",
                "Use mnemonics for checkpoint proteins (p53 = 'p-fifty-three checkpoints')",
                "Make flashcards for cyclin-CDK pairs and their phases",
                "Draw timeline showing when each cyclin peaks"
            ],
            mitosis: [
                "Use mnemonic PMAT (Prophase, Metaphase, Anaphase, Telophase)",
                "Draw each stage from memory, focusing on chromosome appearance",
                "Make a comparison table: mitosis vs meiosis",
                "Practice identifying stages from microscope images"
            ],
            meiosis: [
                "Create detailed diagrams of prophase I substages",
                "Practice calculating genetic variation (2^n formulas)",
                "Model crossing over with pipe cleaners or paper",
                "Make a table comparing meiosis I and meiosis II to mitosis"
            ],
            chromosome_structure: [
                "Draw packaging levels from DNA to metaphase chromosome",
                "Create visual comparison of euchromatin vs heterochromatin",
                "Practice interpreting karyotypes",
                "Build a nucleosome model with playdough"
            ],
            cytokinesis: [
                "Draw side-by-side comparison of animal vs plant cytokinesis",
                "Watch time-lapse videos of cytokinesis",
                "Create a flowchart of the molecular steps",
                "Make a model showing contractile ring vs cell plate"
            ],
            cell_cycle_regulation: [
                "Create concept map linking checkpoints, cyclins, CDKs, and cancer",
                "Make comparison chart: tumor suppressors vs oncogenes",
                "Use analogies (brake vs accelerator) to remember functions",
                "Study specific cancer examples for each regulatory protein"
            ],
            gametogenesis: [
                "Create parallel timelines for spermatogenesis and oogenesis",
                "Draw detailed sperm and egg structures with labels",
                "Make a table comparing four aspects of each process",
                "Calculate and graph maternal age vs Down syndrome risk"
            ]
        };

        return studyTipsDatabase[this.currentProblem.type] || [
            "Draw diagrams from memory to test understanding",
            "Create comparison tables for related concepts",
            "Use mnemonics and analogies",
            "Practice with real microscope images or photos"
        ];
    }

    generateCellularProcessTimeline(processName) {
        const timelines = {
            'Cell Cycle': [
                { phase: 'G₁', duration: '3-12 hours (variable)', events: 'Growth, prepare for DNA replication', checkpoint: 'G₁/S checkpoint' },
                { phase: 'S', duration: '6-8 hours', events: 'DNA replication (2c → 4c)', checkpoint: 'Intra-S checkpoints' },
                { phase: 'G₂', duration: '3-4 hours', events: 'Growth, prepare for mitosis', checkpoint: 'G₂/M checkpoint' },
                { phase: 'M', duration: '~1 hour', events: 'Mitosis + cytokinesis', checkpoint: 'M checkpoint (metaphase)' }
            ],
            'Mitosis': [
                { stage: 'Prophase', duration: '30-60 min', key: 'Chromosomes condense, spindle forms' },
                { stage: 'Metaphase', duration: '~20 min', key: 'Chromosomes align, spindle checkpoint' },
                { stage: 'Anaphase', duration: '~10 min', key: 'Sister chromatids separate' },
                { stage: 'Telophase', duration: '20-30 min', key: 'Nuclei reform, cytokinesis begins' }
            ],
            'Meiosis': [
                { division: 'Meiosis I', duration: 'Hours to decades (with arrests)', result: '2n → n (homologs separate)' },
                { phase: 'Prophase I', duration: 'Longest (days-years)', key: 'Synapsis, crossing over' },
                { phase: 'Metaphase I-Telophase I', duration: 'Hours', key: 'Homolog segregation' },
                { division: 'Meiosis II', duration: 'Hours', result: 'n → n (sisters separate)' },
                { outcome: 'Total', result: '4 haploid cells', variation: 'Genetically unique' }
            ],
            'Spermatogenesis': [
                { stage: 'Spermatogonia mitosis', duration: 'Continuous', result: 'Maintain stem cells' },
                { stage: 'Meiosis I', duration: '~24 days', result: 'Secondary spermatocytes' },
                { stage: 'Meiosis II', duration: '~1 day', result: 'Spermatids' },
                { stage: 'Spermiogenesis', duration: '~24 days', result: 'Mature sperm' },
                { stage: 'Epididymis maturation', duration: '2-12 days', result: 'Motile sperm' },
                { total: 'Total duration', duration: '~74 days', output: '~1500 sperm/second' }
            ],
            'Oogenesis': [
                { stage: 'Prenatal', timing: 'Before birth', events: 'All primary oocytes formed, arrest in prophase I' },
                { stage: 'Childhood-Puberty', timing: 'Years', events: 'Arrested in prophase I, follicle atresia' },
                { stage: 'Monthly cycle', timing: 'Puberty-Menopause', events: 'One oocyte resumes meiosis I' },
                { stage: 'Ovulation', timing: 'Mid-cycle', events: 'Meiosis I completes, arrest in metaphase II' },
                { stage: 'Fertilization', timing: 'Within 24 hours', events: 'Meiosis II completes' },
                { total: 'Total span', duration: 'Decades', output: '~400 eggs ovulated in lifetime' }
            ]
        };

        return timelines[processName] || [];
    }

    generateCellularContentHierarchy() {
        if (!this.currentContent) return null;

        const hierarchy = {
            root: this.currentContent.topic,
            children: []
        };

        if (this.currentContent.phases) {
            hierarchy.children.push({
                name: 'Cell Cycle Phases',
                type: 'phases'
            });
        }

        if (this.currentContent.stages) {
            hierarchy.children.push({
                name: 'Division Stages',
                type: 'stages'
            });
        }

        if (this.currentContent.regulation) {
            hierarchy.children.push({
                name: 'Regulation Mechanisms',
                type: 'regulation'
            });
        }

        if (this.currentContent.packagingLevels) {
            hierarchy.children.push({
                name: 'Chromosome Organization',
                type: 'structure'
            });
        }

        return hierarchy;
    }

    getAllTopics() {
        return Object.entries(this.cellularTopics).map(([id, topic]) => ({
            id: id,
            name: topic.name,
            category: topic.category,
            description: topic.description,
            difficulty: topic.difficulty,
            prerequisites: topic.prerequisites
        }));
    }

    getAllExperiments() {
        return Object.entries(this.cellularExperiments).map(([id, exp]) => ({
            id: id,
            name: exp.name,
            category: exp.category,
            relatedTopics: exp.relatedTopics,
            scientist: exp.historicalBackground?.scientist || exp.historicalBackground?.scientists,
            year: exp.historicalBackground?.year
        }));
    }

    resetWorkbook() {
        this.currentProblem = null;
        this.currentContent = null;
        this.contentSteps = [];
        this.currentWorkbook = null;
        this.currentExperiment = null;
        this.diagramData = null;
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
            strugglingTopics: this.learnerProfile.strugglingTopics.length
        };
    }
}


// Export the class
export default EnhancedCellularDivisionWorkbook;
