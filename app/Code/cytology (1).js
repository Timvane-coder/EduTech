//Enhanced Cellular Structure Workbook - Comprehensive Cell Biology System
import { createCanvas, loadImage } from '@napi-rs/canvas';
import { BiologySvgDiagrams } from '../svg-data.js';
import { BiologyDiagramsRegistry} from '../registry.js';
import { BiologyDiagramsRenderer } from '../renderer.js';
import * as math from 'mathjs';

export class EnhancedCellularStructureWorkbook {
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
                borderColor: '#66bb6a',
                contentBg: '#f3e5f5',
                contentText: '#4a148c',
                diagramBg: '#fce4ec',
                structureBg: '#e0f2f1',
                experimentBg: '#fff9c4',
                experimentText: '#f57f17',
                prokaryoticBg: '#ffebee',
                eukaryoticBg: '#e8f5e9',
                membraneBg: '#e1f5fe',
                organelleBg: '#f3e5f5',
                nucleusBg: '#ede7f6'
            },
            cytology: {
                background: '#fafafa',
                gridColor: '#9e9e9e',
                headerBg: '#5d4037',
                headerText: '#ffffff',
                sectionBg: '#d7ccc8',
                sectionText: '#3e2723',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#efebe9',
                resultText: '#4e342e',
                definitionBg: '#fff8e1',
                definitionText: '#f57f17',
                stepBg: '#e0f7fa',
                stepText: '#006064',
                borderColor: '#8d6e63',
                contentBg: '#fce4ec',
                contentText: '#880e4f',
                diagramBg: '#f1f8e9',
                structureBg: '#e8eaf6',
                experimentBg: '#fffde7',
                experimentText: '#f57f17',
                prokaryoticBg: '#ffccbc',
                eukaryoticBg: '#c5e1a5',
                membraneBg: '#b3e5fc',
                organelleBg: '#e1bee7',
                nucleusBg: '#d1c4e9'
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
            'degree': '°',
            
            // Size measurements
            'micrometer': 'μm',
            'nanometer': 'nm',
            'angstrom': 'Å',
            
            // Chemical formulas relevant to cells
            'H2O': 'H₂O',
            'CO2': 'CO₂',
            'O2': 'O₂',
            'H+': 'H⁺',
            'Ca2+': 'Ca²⁺',
            'Na+': 'Na⁺',
            'K+': 'K⁺',
            'Cl-': 'Cl⁻',
            
            // Common cellular abbreviations
            'ATP': 'ATP',
            'ADP': 'ADP',
            'DNA': 'DNA',
            'RNA': 'RNA',
            'mRNA': 'mRNA',
            'tRNA': 'tRNA',
            'rRNA': 'rRNA',
            'ER': 'ER',
            'RER': 'RER',
            'SER': 'SER',
            'pH': 'pH'
        };
    }

    initializeCellularTopics() {
        this.cellularTopics = {
            cell_types: {
                patterns: [
                    /cell.*type/i,
                    /prokaryot(e|ic)|eukaryot(e|ic)/i,
                    /bacteria|archaea/i,
                    /plant.*cell|animal.*cell/i,
                    /unicellular|multicellular/i
                ],
                handler: this.handleCellTypes.bind(this),
                name: 'Cell Types and Classification',
                category: 'cell_biology',
                description: 'Classification of cells as prokaryotic or eukaryotic, and comparisons between plant and animal cells',
                difficulty: 'basic',
                prerequisites: ['basic_biology']
            },
            
            cell_membrane: {
                patterns: [
                    /cell.*membrane|plasma.*membrane/i,
                    /phospholipid.*bilayer/i,
                    /fluid.*mosaic.*model/i,
                    /membrane.*transport|diffusion|osmosis/i,
                    /active.*transport|passive.*transport/i
                ],
                handler: this.handleCellMembrane.bind(this),
                name: 'Cell Membrane Structure and Function',
                category: 'membrane_biology',
                description: 'Structure of the plasma membrane and mechanisms of transport across membranes',
                difficulty: 'intermediate',
                prerequisites: ['lipids', 'proteins']
            },
            
            nucleus: {
                patterns: [
                    /nucleus|nuclear/i,
                    /chromatin|chromosome/i,
                    /nucleolus|nucleoplasm/i,
                    /nuclear.*envelope|nuclear.*pore/i,
                    /DNA.*packaging/i
                ],
                handler: this.handleNucleus.bind(this),
                name: 'Nucleus and Genetic Material',
                category: 'organelles',
                description: 'Structure and function of the nucleus, chromosome organization, and gene expression control',
                difficulty: 'intermediate',
                prerequisites: ['DNA', 'chromosomes']
            },
            
            mitochondria: {
                patterns: [
                    /mitochondri(a|on)/i,
                    /powerhouse.*cell/i,
                    /cellular.*respiration.*organelle/i,
                    /cristae|mitochondrial.*matrix/i,
                    /oxidative.*phosphorylation.*site/i
                ],
                handler: this.handleMitochondria.bind(this),
                name: 'Mitochondria and Energy Production',
                category: 'organelles',
                description: 'Structure and function of mitochondria in cellular energy production',
                difficulty: 'intermediate',
                prerequisites: ['cellular_respiration', 'ATP']
            },
            
            chloroplasts: {
                patterns: [
                    /chloroplast/i,
                    /photosynthesis.*organelle/i,
                    /thylakoid|stroma|grana/i,
                    /light.*reaction.*site|calvin.*cycle.*location/i
                ],
                handler: this.handleChloroplasts.bind(this),
                name: 'Chloroplasts and Photosynthesis',
                category: 'organelles',
                description: 'Structure and function of chloroplasts in photosynthesis',
                difficulty: 'intermediate',
                prerequisites: ['photosynthesis', 'plant_cells']
            },
            
            endomembrane_system: {
                patterns: [
                    /endomembrane.*system/i,
                    /endoplasmic.*reticulum|ER/i,
                    /golgi.*apparatus|golgi.*body/i,
                    /lysosome|peroxisome/i,
                    /vesicle|vacuole/i,
                    /protein.*trafficking/i
                ],
                handler: this.handleEndomembraneSystem.bind(this),
                name: 'Endomembrane System',
                category: 'organelles',
                description: 'Network of membranes including ER, Golgi, lysosomes, and vesicles involved in protein processing and transport',
                difficulty: 'advanced',
                prerequisites: ['proteins', 'lipids', 'cell_membrane']
            },
            
            cytoskeleton: {
                patterns: [
                    /cytoskeleton/i,
                    /microfilament|actin/i,
                    /microtubule|tubulin/i,
                    /intermediate.*filament/i,
                    /cell.*shape|cell.*movement|cell.*division.*structure/i,
                    /centriole|centrosome/i
                ],
                handler: this.handleCytoskeleton.bind(this),
                name: 'Cytoskeleton and Cell Movement',
                category: 'cell_structure',
                description: 'Network of protein filaments providing structure, support, and enabling cell movement',
                difficulty: 'intermediate',
                prerequisites: ['proteins', 'cell_structure']
            },
            
            cell_junctions: {
                patterns: [
                    /cell.*junction/i,
                    /tight.*junction|adherens.*junction/i,
                    /desmosome|gap.*junction/i,
                    /plasmodesmata/i,
                    /cell.*adhesion|cell.*communication/i
                ],
                handler: this.handleCellJunctions.bind(this),
                name: 'Cell Junctions and Communication',
                category: 'cell_interactions',
                description: 'Structures connecting cells and enabling communication in multicellular organisms',
                difficulty: 'intermediate',
                prerequisites: ['cell_membrane', 'multicellular_organization']
            },
            
            cell_wall: {
                patterns: [
                    /cell.*wall/i,
                    /cellulose|chitin|peptidoglycan/i,
                    /primary.*wall|secondary.*wall/i,
                    /plant.*cell.*structure|bacterial.*cell.*structure/i
                ],
                handler: this.handleCellWall.bind(this),
                name: 'Cell Wall Structure and Function',
                category: 'cell_structure',
                description: 'Rigid outer layer in plant cells, fungi, and bacteria providing protection and support',
                difficulty: 'basic',
                prerequisites: ['carbohydrates', 'cell_types']
            },
            
            ribosomes: {
                patterns: [
                    /ribosome/i,
                    /protein.*synthesis.*site/i,
                    /translation.*machinery/i,
                    /70S|80S.*ribosome/i,
                    /free.*ribosome|bound.*ribosome/i
                ],
                handler: this.handleRibosomes.bind(this),
                name: 'Ribosomes and Protein Synthesis',
                category: 'organelles',
                description: 'Cellular machinery for protein synthesis',
                difficulty: 'intermediate',
                prerequisites: ['proteins', 'RNA', 'translation']
            }
        };
    }

    initializeCellularLessons() {
        this.lessons = {
            cell_types: {
                title: "Cell Types: Prokaryotic vs Eukaryotic, Plant vs Animal",
                concepts: [
                    "All living organisms are composed of cells (Cell Theory)",
                    "Prokaryotic cells lack a membrane-bound nucleus and organelles",
                    "Eukaryotic cells have a nucleus and membrane-bound organelles",
                    "Plant cells have cell walls, chloroplasts, and large central vacuoles",
                    "Animal cells have centrioles and typically smaller vacuoles",
                    "Cell size is limited by surface area to volume ratio"
                ],
                theory: "The cell is the fundamental unit of life. Understanding the differences between prokaryotic and eukaryotic cells, and between plant and animal cells, is essential for comprehending cellular function, evolution, and diversity of life.",
                keyDefinitions: {
                    "Cell Theory": "1) All living things are made of cells, 2) Cells are the basic unit of life, 3) All cells come from pre-existing cells",
                    "Prokaryotic Cell": "Cell lacking a membrane-bound nucleus; DNA in nucleoid region (bacteria, archaea)",
                    "Eukaryotic Cell": "Cell with membrane-bound nucleus and organelles (protists, fungi, plants, animals)",
                    "Organelle": "Specialized membrane-bound structure within eukaryotic cells performing specific functions",
                    "Nucleus": "Membrane-bound organelle containing genetic material (DNA)",
                    "Cell Wall": "Rigid outer layer providing structural support (plants, fungi, bacteria)",
                    "Chloroplast": "Organelle in plant cells where photosynthesis occurs",
                    "Central Vacuole": "Large fluid-filled sac in plant cells for storage and turgor pressure",
                    "Centriole": "Cylindrical structure in animal cells involved in cell division"
                },
                cellTheory: {
                    principle1: "All living organisms are composed of one or more cells",
                    principle2: "The cell is the basic unit of structure and organization in organisms",
                    principle3: "All cells come from pre-existing cells (biogenesis)",
                    modernAdditions: [
                        "Energy flow occurs within cells (metabolism)",
                        "Cells contain hereditary information (DNA) passed from cell to cell",
                        "All cells have the same basic chemical composition"
                    ],
                    historicalDevelopment: {
                        robertHooke1665: "First observed cells in cork, coined term 'cell'",
                        antonVanLeeuwenhoek1670s: "First observed living cells (bacteria, protists)",
                        matthiasSchleiden1838: "Proposed all plants are made of cells",
                        theodorSchwann1839: "Proposed all animals are made of cells",
                        rudolfVirchow1855: "Stated all cells arise from pre-existing cells"
                    }
                },
                prokaryoticVsEukaryotic: {
                    prokaryotic: {
                        size: "0.1-5.0 μm (typically 1-2 μm)",
                        nucleus: "No true nucleus; nucleoid region (no membrane)",
                        DNA: "Circular chromosome, not associated with histones; plasmids common",
                        organelles: "No membrane-bound organelles",
                        ribosomes: "70S ribosomes (smaller)",
                        cellWall: "Present (peptidoglycan in bacteria)",
                        reproduction: "Binary fission (asexual)",
                        examples: "Bacteria (E. coli), Archaea",
                        complexity: "Simpler, arose ~3.5 billion years ago",
                        metabolism: "Very diverse (aerobic, anaerobic, chemosynthetic)"
                    },
                    eukaryotic: {
                        size: "10-100 μm (typically 10-30 μm)",
                        nucleus: "True nucleus with nuclear envelope",
                        DNA: "Linear chromosomes, associated with histones",
                        organelles: "Membrane-bound organelles (mitochondria, ER, Golgi, etc.)",
                        ribosomes: "80S ribosomes (larger)",
                        cellWall: "Present in plants/fungi, absent in animals",
                        reproduction: "Mitosis/meiosis; sexual and asexual",
                        examples: "Protists, fungi, plants, animals",
                        complexity: "More complex, arose ~2 billion years ago",
                        metabolism: "Primarily aerobic (mitochondria)"
                    },
                    endosymbioticTheory: "Mitochondria and chloroplasts originated from prokaryotic cells engulfed by early eukaryotic ancestors. Evidence: own DNA, double membrane, 70S ribosomes, reproduce by binary fission."
                },
                plantVsAnimalCells: {
                    plantCells: {
                        cellWall: "Present (cellulose) - provides rigidity and protection",
                        shape: "Fixed, rectangular/polygonal due to cell wall",
                        chloroplasts: "Present - photosynthesis",
                        vacuole: "Large central vacuole (up to 90% of cell volume) - storage, turgor pressure",
                        centrioles: "Absent (in most plants)",
                        plasmodesmata: "Channels connecting plant cells through cell walls",
                        energy: "Produce own food (autotrophic)",
                        storage: "Starch",
                        uniqueFeatures: "Plastids (chloroplasts, chromoplasts, leucoplasts)"
                    },
                    animalCells: {
                        cellWall: "Absent",
                        shape: "Variable, irregular due to flexible membrane",
                        chloroplasts: "Absent",
                        vacuole: "Small, multiple vacuoles (if present) - temporary storage",
                        centrioles: "Present - organize spindle fibers during cell division",
                        junctions: "Tight junctions, gap junctions, desmosomes",
                        energy: "Consume food (heterotrophic)",
                        storage: "Glycogen",
                        uniqueFeatures: "Lysosomes more prominent"
                    },
                    similarities: [
                        "Both have plasma membrane",
                        "Both have nucleus and nuclear envelope",
                        "Both have mitochondria (cellular respiration)",
                        "Both have ribosomes (protein synthesis)",
                        "Both have ER and Golgi apparatus",
                        "Both have cytoplasm and cytoskeleton",
                        "Both contain DNA and undergo cell division"
                    ]
                },
                sizeAndScaleToVolumeRatio: {
                    concept: "Cell size is limited by surface area to volume ratio",
                    explanation: "As cell size increases, volume increases faster than surface area (V = r³, SA = r²). This limits nutrient uptake and waste removal efficiency.",
                    formula: "SA:V ratio = 6/r (for sphere)",
                    implication: "Cells remain small to maintain high SA:V ratio for efficient exchange",
                    adaptations: [
                        "Elongated shapes increase SA (nerve cells)",
                        "Folding increases SA (microvilli in intestine)",
                        "Flattening increases SA:V (red blood cells)",
                        "Multiple cells instead of one large cell (multicellularity)"
                    ],
                    calculations: {
                        smallCell: "r=1μm → SA=12.6μm², V=4.2μm³ → SA:V=3.0",
                        largeCell: "r=10μm → SA=1257μm², V=4189μm³ → SA:V=0.3",
                        conclusion: "10× increase in radius → 10× decrease in SA:V ratio"
                    }
                },
                applications: [
                    "Understanding infectious diseases (targeting prokaryotic vs eukaryotic cells)",
                    "Antibiotic development (exploiting differences in cell structure)",
                    "Agriculture and plant breeding (manipulating plant cell features)",
                    "Biotechnology (using bacterial cells for protein production)",
                    "Medical diagnostics (identifying cell types in tissue samples)",
                    "Evolution and origin of life studies"
                ]
            },

            cell_membrane: {
                title: "Cell Membrane: Structure, Function, and Transport",
                concepts: [
                    "Cell membrane is a selectively permeable phospholipid bilayer",
                    "Fluid Mosaic Model describes membrane structure",
                    "Membrane proteins perform various functions (transport, recognition, enzymatic)",
                    "Passive transport does not require energy (diffusion, osmosis, facilitated diffusion)",
                    "Active transport requires energy to move substances against concentration gradient",
                    "Membrane fluidity is essential for function"
                ],
                theory: "The plasma membrane is the boundary between the cell and its environment, controlling what enters and exits. Its structure enables selective permeability, cell recognition, and signal transduction.",
                keyDefinitions: {
                    "Plasma Membrane": "Selectively permeable barrier separating cell interior from exterior",
                    "Phospholipid Bilayer": "Double layer of phospholipids with hydrophilic heads out, hydrophobic tails in",
                    "Fluid Mosaic Model": "Model describing membrane as fluid structure with embedded proteins",
                    "Selective Permeability": "Membrane allows some substances through but not others",
                    "Diffusion": "Movement of molecules from high to low concentration (no energy)",
                    "Osmosis": "Diffusion of water across semipermeable membrane",
                    "Facilitated Diffusion": "Passive transport using membrane proteins",
                    "Active Transport": "Movement against gradient using ATP energy",
                    "Endocytosis": "Cell engulfs materials by forming vesicle (phagocytosis, pinocytosis)",
                    "Exocytosis": "Cell expels materials by fusing vesicle with membrane"
                },
                fluidMosaicModel: {
                    developedBy: "Singer and Nicolson (1972)",
                    fluid: "Phospholipids and proteins can move laterally within layer",
                    mosaic: "Proteins embedded in or attached to phospholipid bilayer create mosaic pattern",
                    components: {
                        phospholipids: {
                            structure: "Hydrophilic head (phosphate + glycerol) + 2 hydrophobic fatty acid tails",
                            arrangement: "Bilayer with heads facing aqueous environments, tails inside",
                            movement: "Lateral diffusion common, flip-flop rare",
                            saturation: "Unsaturated fatty acids (with kinks) increase fluidity"
                        },
                        cholesterol: {
                            location: "Embedded in bilayer between phospholipids",
                            function: "Maintains fluidity (prevents too fluid at high temp, too rigid at low temp)",
                            abundance: "~20% of membrane lipids in animal cells",
                            absent: "Not in prokaryotic cells (except mycoplasma)"
                        },
                        proteins: {
                            integralProteins: {
                                definition: "Embedded in membrane, often transmembrane",
                                hydrophobicRegions: "Interact with fatty acid tails",
                                functions: "Transport, receptors, cell-cell recognition"
                            },
                            peripheralProteins: {
                                definition: "Attached to surface of membrane",
                                attachment: "Bound to integral proteins or membrane lipids",
                                functions: "Enzymatic activity, structural support, signaling"
                            },
                            glycoproteins: {
                                structure: "Protein with carbohydrate chains attached",
                                location: "Carbohydrates face extracellular space",
                                functions: "Cell recognition, immune response, adhesion"
                            }
                        },
                        carbohydrates: {
                            location: "Attached to proteins (glycoproteins) or lipids (glycolipids) on outer surface",
                            glycocalyx: "Carbohydrate coat on cell surface",
                            functions: "Cell-cell recognition, tissue formation, immune response, blood type determination"
                        }
                    }
                },
                membraneTransport: {
                    passiveTransport: {
                        definition: "Movement down concentration gradient; no energy required",
                        simpleDiffusion: {
                            description: "Small, nonpolar molecules pass directly through bilayer",
                            examples: "O₂, CO₂, N₂, steroid hormones, small hydrophobic molecules",
                            rate: "Depends on concentration gradient, temperature, molecule size",
                            limitation: "Cannot transport large, polar, or charged molecules"
                        },
                        osmosis: {
                            description: "Diffusion of water across semipermeable membrane",
                            direction: "Water moves from high water potential (low solute) to low water potential (high solute)",
                            tonicity: {
                                hypertonic: "Higher solute concentration outside → cell shrinks (crenation in animals, plasmolysis in plants)",
                                hypotonic: "Lower solute concentration outside → cell swells (lysis in animals, turgid in plants)",
                                isotonic: "Equal solute concentration → no net water movement"
                            },
                            importance: "Maintains cell volume, turgor pressure in plants",
                            regulation: "Contractile vacuoles (protists), kidney (animals)"
                        },
                        facilitatedDiffusion: {
                            description: "Passive transport using membrane proteins",
                            channelProteins: "Form pores for specific ions (ion channels)",
                            carrierProteins: "Bind molecule, change shape to transport across",
                            examples: "Glucose transporters (GLUT), ion channels (Na⁺, K⁺, Ca²⁺, Cl⁻), aquaporins (water)",
                            characteristics: "Specific, saturable (limited by # of proteins), faster than simple diffusion"
                        }
                    },
                    activeTransport: {
                        definition: "Movement against concentration gradient; requires ATP energy",
                        primaryActiveTransport: {
                            description: "Uses ATP directly",
                            sodiumpotassiumPump: {
                                function: "Pumps 3 Na⁺ out, 2 K⁺ in against gradients",
                                energy: "Hydrolyzes 1 ATP per cycle",
                                importance: "Maintains ion gradients, resting membrane potential (neurons), cell volume",
                                percentage: "Uses ~30% of cell's ATP (70% in neurons)"
                            },
                            protonPump: "Pumps H⁺ out (plants, fungi, bacteria) to create electrochemical gradient"
                        },
                        secondaryActiveTransport: {
                            description: "Uses energy stored in ion gradient (created by primary active transport)",
                            cotransport: "Two substances transported together",
                            types: {
                                symport: "Both substances move in same direction (e.g., glucose-Na⁺ symporter in intestine)",
                                antiport: "Substances move in opposite directions (e.g., Na⁺-H⁺ exchanger)"
                            }
                        }
                    },
                    bulkTransport: {
                        definition: "Transport of large molecules or particles using vesicles",
                        endocytosis: {
                            description: "Cell membrane engulfs material, forms vesicle",
                            phagocytosis: "Cell eating - engulfs solid particles (white blood cells engulf bacteria)",
                            pinocytosis: "Cell drinking - engulfs liquid droplets",
                            receptorMediatedEndocytosis: "Specific molecules bind receptors, trigger endocytosis (LDL cholesterol uptake)"
                        },
                        exocytosis: {
                            description: "Vesicle fuses with membrane, releases contents outside",
                            examples: "Neurotransmitter release, hormone secretion, waste removal",
                            process: "Vesicle from Golgi moves to membrane → fusion → release"
                        }
                    }
                },
                membraneProteins: {
                    functions: {
                        transport: "Channels and carriers for molecules/ions",
                        enzymatic: "Catalyze reactions at membrane surface",
                        signalTransduction: "Receptors for hormones, neurotransmitters",
                        cellRecognition: "Glycoproteins as identification tags (MHC, blood type)",
                        intercellularJoining: "Membrane proteins hook together (junctions)",
                        attachmentToCytoskeleton: "Maintain cell shape, fix membrane proteins"
                    },
                    specificity: "Each protein has specific function and binding site",
                    regulation: "Cells control which transport proteins are present"
                },
                membraneFluidity: {
                    importance: "Allows movement of proteins, necessary for function, enables vesicle fusion/fission",
                    factorsAffecting: {
                        temperature: "Higher temp → more fluid; lower temp → less fluid",
                        fattyAcidSaturation: "More unsaturated (double bonds) → more fluid (kinks prevent tight packing)",
                        cholesterol: "Stabilizes fluidity - prevents extremes",
                        proteinContent: "More proteins → less fluid"
                    },
                    coldAdaptation: "Cold-environment organisms have more unsaturated fatty acids",
                    homeoviscousAdaptation: "Cells adjust membrane composition to maintain optimal fluidity"
                },
                applications: [
                    "Drug delivery (liposomes)",
                    "Understanding disease (cystic fibrosis - defective Cl⁻ channel)",
                    "Nerve function (action potentials depend on ion channels)",
                    "Dialysis (mimics passive transport)",
                    "Food preservation (osmosis to dehydrate bacteria)",
                    "IV solutions (must be isotonic)",
                    "Cancer research (altered membrane proteins in cancer cells)"
                ]
            },

            nucleus: {
                title: "Nucleus: Control Center of the Eukaryotic Cell",
                concepts: [
                    "Nucleus houses and protects genetic material (DNA)",
                    "Nuclear envelope is a double membrane with nuclear pores",
                    "Chromatin is DNA complexed with histone proteins",
                    "Nucleolus is site of ribosomal RNA synthesis",
                    "Nuclear pores regulate transport between nucleus and cytoplasm",
                    "DNA packaging allows meters of DNA to fit in tiny nucleus"
                ],
                theory: "The nucleus is the defining feature of eukaryotic cells, separating transcription (in nucleus) from translation (in cytoplasm). This compartmentalization allows for complex gene regulation and protects DNA from damage.",
                keyDefinitions: {
                    "Nucleus": "Membrane-bound organelle containing cell's genetic material",
                    "Nuclear Envelope": "Double membrane surrounding nucleus with nuclear pores",
                    "Nuclear Pore": "Channel allowing selective transport between nucleus and cytoplasm",
                    "Chromatin": "Complex of DNA and proteins (primarily histones)",
                    "Chromosome": "Condensed, visible form of chromatin during cell division",
                    "Nucleolus": "Dense region in nucleus where ribosomal RNA is synthesized",
                    "Nucleoplasm": "Gel-like substance filling nucleus",
                    "Histone": "Protein that DNA wraps around to form nucleosomes",
                    "Nucleosome": "DNA wrapped around histone octamer (basic unit of chromatin)"
                },
                nuclearStructure: {
                    nuclearEnvelope: {
                        structure: "Two concentric lipid bilayer membranes (inner and outer)",
                        outerMembrane: "Continuous with rough ER, may have ribosomes attached",
                        innerMembrane: "Supported by nuclear lamina (protein filaments)",
                        perinuclearSpace: "Space between inner and outer membranes (~20-40 nm)",
                        function: "Separates nuclear contents from cytoplasm, regulates traffic"
                    },
                    nuclearPores: {
                        number: "3000-4000 pores per nucleus",
                        structure: "Nuclear pore complex (NPC) - large protein complex (~125 million Daltons, ~30 different proteins called nucleoporins)",
                        size: "~120 nm diameter",
                        function: "Selective gateway for molecules between nucleus and cytoplasm",
                        transport: {
                            passive: "Small molecules (<40 kDa) and ions diffuse freely",
                            active: "Large molecules (proteins, RNA) require signal sequences and energy",
                            import: "Nuclear localization signals (NLS) on proteins",
                            export: "Nuclear export signals (NES) on RNA and proteins"
                        },
                        regulation: "Controls which proteins enter nucleus (transcription factors) and which RNA exits"
                    },
                    nuclearLamina: {
                        composition: "Network of lamin proteins (intermediate filaments)",
                        location: "Lines inner surface of nuclear envelope",
                        functions: [
                            "Provides structural support to nucleus",
                            "Organizes chromatin",
                            "Involved in DNA replication and cell division",
                            "Anchors chromosomes and nuclear pore complexes"
                        ],
                        disassembly: "Broken down during cell division (prophase), reassembled after division (telophase)"
                    },
                    nucleoplasm: {
                        composition: "Gel-like matrix containing water, ions, enzymes, nucleotides, chromatin, nucleolus",
                        function: "Provides environment for DNA replication, transcription, and RNA processing",
                        similar: "Similar to cytoplasm but within nucleus"
                    }
                },
                chromatinAndChromosomes: {
                    chromatin: {
                        definition: "Complex of DNA and histone proteins",
                        composition: "~50% DNA, ~50% protein (mostly histones)",
                        function: "Package DNA into compact form, regulate gene expression",
                        types: {
                            euchromatin: {
                                structure: "Loosely packed, less condensed",
                                appearance: "Light-staining",
                                activity: "Transcriptionally active (genes can be expressed)",
                                location: "Interior of nucleus"
                            },
                            heterochromatin: {
                                structure: "Tightly packed, highly condensed",
                                appearance: "Dark-staining",
                                activity: "Transcriptionally inactive (genes silenced)",
                                location: "Near nuclear envelope and nucleolus"
                            }
                        }
                    },
                    DNApackaging: {
                        levels: [
                            "1. DNA double helix (2 nm diameter)",
                            "2. DNA wraps around histone octamer → nucleosome ('beads on string', 11 nm)",
                            "3. Nucleosomes coil → 30-nm chromatin fiber",
                            "4. 30-nm fiber loops and coils → higher-order chromatin structures",
                            "5. Maximum condensation → metaphase chromosome (1400 nm wide)"
                        ],
                        compaction: "DNA length reduced ~10,000-fold",
                        humanExample: "2 meters of DNA packaged into nucleus (~10 μm diameter)",
                        histones: {
                            types: "H1, H2A, H2B, H3, H4",
                            octamer: "2 copies each of H2A, H2B, H3, H4 form nucleosome core",
                            H1: "Linker histone - binds between nucleosomes, promotes compaction",
                            charge: "Positively charged (lysine, arginine) - attract negatively charged DNA",
                            modifications: "Acetylation, methylation regulate gene expression (epigenetics)"
                        }
                    },
                    chromosomes: {
                        formation: "Chromatin condenses during cell division",
                        structure: {
                            chromatid: "One copy of duplicated chromosome",
                            sisterChromatids: "Two identical chromatids joined at centromere",
                            centromere: "Constricted region where sister chromatids attach, kinetochore forms here",
                            telomeres: "Protective caps at chromosome ends (prevent degradation)"
                        },
                        humanChromosomes: "46 chromosomes (23 pairs) - 22 pairs autosomes + 1 pair sex chromosomes (XX or XY)",
                        karyotype: "Visual display of all chromosomes arranged by size and shape"
                    }
                },
                nucleolus: {
                    structure: "Dense, non-membrane-bound region in nucleus",
                    number: "1-4 nucleoli per nucleus (varies)",
                    composition: "DNA (rRNA genes), RNA, proteins",
                    function: "Ribosomal RNA (rRNA) synthesis and ribosome assembly",
                    process: {
                        step1: "rRNA genes transcribed → pre-rRNA",
                        step2: "pre-rRNA processed (cleaved, modified)",
                        step3: "rRNA combines with ribosomal proteins (imported from cytoplasm)",
                        step4: "Ribosomal subunits (large 60S and small 40S) assembled",
                        step5: "Subunits exported through nuclear pores to cytoplasm"
                    },
                    visibility: "Disassembles during cell division, reforms in daughter cells",
                    ribosomeProduction: "Cell produces ~10,000 ribosomes per minute"
                },
                nuclearFunctions: {
                    DNAreplication: "Synthesis of new DNA strands (S phase of cell cycle)",
                    transcription: "DNA → RNA (mRNA, tRNA, rRNA synthesis)",
                    RNAprocessing: {
                        splicing: "Remove introns, join exons (mRNA)",
                        capping: "Add 5' cap to mRNA",
                        polyadenylation: "Add poly-A tail to 3' end of mRNA"
                    },
                    geneRegulation: "Control which genes are transcribed",
                    ribosomeAssembly: "In nucleolus",
                    chromatinRemodeling: "Change chromatin structure to regulate gene access"
                },
                applications: [
                    "Cancer diagnosis (abnormal nuclei and chromosomes)",
                    "Genetic testing (karyotyping for chromosomal abnormalities)",
                    "Understanding aging (telomere shortening)",
                    "Drug development (targeting nuclear transport, transcription)",
                    "Stem cell biology (nuclear reprogramming)",
                    "Forensic science (nuclear DNA analysis)"
                ]
            },

            mitochondria: {
                title: "Mitochondria: Powerhouse of the Cell",
                concepts: [
                    "Mitochondria produce ATP through cellular respiration",
                    "Double membrane structure with cristae increasing surface area",
                    "Matrix contains enzymes for Krebs cycle",
                    "Inner membrane contains electron transport chain",
                    "Mitochondria have their own DNA and ribosomes",
                    "Endosymbiotic theory explains mitochondrial origin"
                ],
                theory: "Mitochondria are essential organelles that convert energy from food into ATP, the cell's energy currency. Their unique structure and independent genome support the endosymbiotic theory of their evolutionary origin from ancient bacteria.",
                keyDefinitions: {
                    "Mitochondrion": "Double-membrane organelle producing ATP through cellular respiration",
                    "Cristae": "Folds of inner mitochondrial membrane increasing surface area",
                    "Matrix": "Fluid-filled space inside inner membrane containing enzymes",
                    "Intermembrane Space": "Space between outer and inner membranes",
                    "Cellular Respiration": "Process converting glucose and oxygen to ATP, CO₂, and H₂O",
                    "Chemiosmosis": "ATP synthesis using H⁺ gradient across inner membrane",
                    "Electron Transport Chain": "Series of proteins in inner membrane transferring electrons",
                    "ATP Synthase": "Enzyme producing ATP from ADP + Pi using H⁺ gradient"
                },
                structure: {
                    size: "0.5-10 μm length, 0.5-1 μm diameter",
                    shape: "Oval/rod-shaped, dynamic (can fuse, divide, move)",
                    number: "Varies by cell type: liver cells ~2000, red blood cells 0, oocytes ~100,000",
                    outerMembrane: {
                        structure: "Smooth, similar to cell membrane",
                        permeability: "Contains porins - channels allowing molecules <5000 Da to pass freely",
                        composition: "~50% protein, 50% lipid"
                    },
                    innerMembrane: {
                        structure: "Highly folded into cristae",
                        cristae: {
                            function: "Increase surface area for electron transport chain and ATP synthesis",
                            shapeVariation: "Tubular cristae (embryonic cells), lamellar cristae (most cells)"
                        },
                        permeability: "Impermeable to most molecules (maintains H⁺ gradient)",
                        composition: "~80% protein, 20% lipid; contains cardiolipin (unique lipid)",
                        proteins: "Electron transport chain complexes (I-IV), ATP synthase"
                    },
                    intermembraneSpace: {
                        composition: "High [H⁺] due to pumping by ETC",
                        function: "H⁺ gradient drives ATP synthesis",
                        width: "~6-8 nm"
                    },
                    matrix: {
                        composition: "Gel-like substance with enzymes, mitochondrial DNA, ribosomes, ions, metabolites",
                        enzymes: "Krebs cycle enzymes, fatty acid oxidation enzymes",
                        pH: "~7.8 (higher than intermembrane space pH ~7.0)",
                        mitochondrialDNA: "Circular, 16,569 base pairs in humans, encodes 13 proteins (all ETC subunits), 22 tRNAs, 2 rRNAs",
                        ribosomes: "70S ribosomes (like prokaryotic, not 80S like eukaryotic cytoplasmic)"
                    }
                },
                functions: {
                    ATPproduction: {
                        process: "Cellular respiration (glycolysis → Krebs cycle → ETC & chemiosmosis)",
                        location: {
                            glycolysis: "Cytoplasm (not in mitochondria)",
                            linkReaction: "Matrix (pyruvate → acetyl-CoA)",
                            krebsCycle: "Matrix",
                            electronTransportChain: "Inner membrane",
                            chemiosmosis: "Inner membrane (ATP synthase)"
                        },
                        ATPyield: "~36-38 ATP per glucose (depends on shuttle system)",
                        efficiency: "~40% energy captured as ATP, rest as heat"
                    },
                    cellularRespiration: {
                        overview: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP",
                        krebsCycle: {
                            location: "Mitochondrial matrix",
                            input: "Acetyl-CoA (from pyruvate)",
                            outputs: "3 NADH, 1 FADH₂, 1 ATP (per acetyl-CoA), 2 CO₂",
                            purpose: "Oxidize acetyl-CoA, produce electron carriers"
                        },
                        electronTransportChain: {
                            location: "Inner mitochondrial membrane",
                            complexes: "Complex I, II, III, IV (contain electron carriers)",
                            process: "Electrons from NADH and FADH₂ pass through complexes, energy pumps H⁺ to intermembrane space",
                            finalElectronAcceptor: "O₂ (reduced to H₂O)",
                            result: "H⁺ gradient (high [H⁺] in intermembrane space)"
                        },
                        chemiosmosis: {
                            mechanism: "H⁺ flows down gradient through ATP synthase",
                            coupling: "Flow of H⁺ drives ATP synthesis (ADP + Pi → ATP)",
                            yield: "~3 ATP per NADH, ~2 ATP per FADH₂",
                            petMullerHypothesis: "Mitchell proposed chemiosmotic theory (1961, Nobel Prize 1978)"
                        }
                    },
                    otherFunctions: {
                        heatGeneration: "In brown fat (thermogenesis via uncoupling proteins)",
                        calciumStorage: "Regulate cytoplasmic Ca²⁺ levels",
                        apoptosis: "Release cytochrome c triggering programmed cell death",
                        hemeSynthesis: "Produce heme groups for hemoglobin, cytochromes",
                        steroidSynthesis: "Initial steps in adrenal and gonadal cells"
                    }
                },
                endosymbioticTheory: {
                    hypothesis: "Mitochondria originated from free-living aerobic prokaryotes engulfed by early eukaryotic ancestors (~2 billion years ago)",
                    evidence: {
                        doubleMembrane: "Inner membrane from original bacteria, outer from host cell",
                        ownDNA: "Circular DNA like bacteria, separate from nuclear DNA",
                        ownRibosomes: "70S ribosomes (like bacteria), not 80S (like eukaryotes)",
                        reproduction: "Divide by binary fission (like bacteria)",
                        genetics: "Maternal inheritance (from egg cytoplasm)",
                        antibiotics: "Some antibiotics affecting bacteria also affect mitochondria"
                    },
                    proposedBy: "Lynn Margulis (1967)",
                    acceptance: "Now widely accepted, supported by genetic and structural evidence"
                },
                mitochondrialDiseases: {
                    cause: "Mutations in mitochondrial DNA or nuclear DNA affecting mitochondrial proteins",
                    inheritance: "Maternal (mitochondria from egg only)",
                    symptoms: "Affect energy-demanding tissues: muscles, brain, heart, liver",
                    examples: {
                        MELAS: "Mitochondrial encephalomyopathy, lactic acidosis, stroke-like episodes",
                        MERRF: "Myoclonic epilepsy with ragged red fibers",
                        Leber: "Leber's hereditary optic neuropathy (vision loss)",
                        Pearson: "Pearson syndrome (bone marrow failure, pancreatic dysfunction)"
                    },
                    noKnownCure: "Treatments supportive (supplements, diet, exercise)"
                },
                applications: [
                    "Understanding metabolic diseases",
                    "Aging research (mitochondrial dysfunction in aging)",
                    "Cancer therapy (cancer cells have altered metabolism)",
                    "Forensic science (mitochondrial DNA analysis)",
                    "Evolutionary biology (tracing maternal lineages)",
                    "Drug development (targeting mitochondrial function)",
                    "Exercise physiology (mitochondrial density increases with endurance training)"
                ]
            },

            chloroplasts: {
                title: "Chloroplasts: Photosynthesis Organelles in Plant Cells",
                concepts: [
                    "Chloroplasts convert light energy to chemical energy (photosynthesis)",
                    "Double membrane structure with internal thylakoid membrane system",
                    "Thylakoids contain chlorophyll and light-dependent reactions",
                    "Stroma contains enzymes for Calvin cycle (light-independent reactions)",
                    "Chloroplasts have own DNA and ribosomes",
                    "Originated from endosymbiotic cyanobacteria"
                ],
                theory: "Chloroplasts are the sites of photosynthesis in plants and algae, converting solar energy into chemical energy stored in glucose. Like mitochondria, they have a double membrane and own DNA, supporting the endosymbiotic theory.",
                keyDefinitions: {
                    "Chloroplast": "Double-membrane organelle in plant cells where photosynthesis occurs",
                    "Thylakoid": "Flattened membrane sac inside chloroplast containing chlorophyll",
                    "Granum": "Stack of thylakoids (plural: grana)",
                    "Stroma": "Fluid-filled space surrounding thylakoids",
                    "Chlorophyll": "Green pigment absorbing light energy for photosynthesis",
                    "Photosynthesis": "Process converting light energy, CO₂, and H₂O into glucose and O₂",
                    "Light-Dependent Reactions": "First stage of photosynthesis in thylakoids producing ATP and NADPH",
                    "Calvin Cycle": "Light-independent reactions in stroma using ATP and NADPH to fix CO₂ into glucose"
                },
                structure: {
                    size: "5-10 μm length, 2-3 μm width (larger than mitochondria)",
                    shape: "Lens-shaped or disc-shaped",
                    number: "20-100 per plant cell (varies by cell type)",
                    outerMembrane: {
                        structure: "Smooth, similar to cell membrane",
                        permeability: "Contains porins, permeable to molecules <10,000 Da",
                        function: "Protective barrier"
                    },
                    innerMembrane: {
                        structure: "Smooth, encloses stroma",
                        permeability: "Selective, contains transport proteins",
                        function: "Regulates transport into stroma"
                    },
                    intermembraneSpace: {
                        width: "~10-20 nm",
                        function: "Similar to mitochondrial intermembrane space but less significant for energy conversion"
                    },
                    thylakoidMembrane: {
                        structure: "Third internal membrane system, highly folded",
                        thylakoids: {
                            shape: "Flattened sacs (like pancakes)",
                            arrangement: {
                                grana: "Stacked thylakoids (10-20 per stack)",
                                stromaThylakoids: "Unstacked thylakoids connecting grana",
                                granamThylakoids: "Thylakoids within grana"
                            },
                            function: "Site of light-dependent reactions",
                            components: {
                                photosystemII: "Absorbs light, splits water, produces O₂",
                                cytochromeb6f: "Electron transport chain component",
                                photosystemI: "Absorbs light, reduces NADP⁺ to NADPH",
                                ATPsynthase: "Produces ATP from H⁺ gradient"
                            }
                        },
                        thylakoidLumen: {
                            definition: "Space inside thylakoid",
                            function: "H⁺ accumulation creates gradient for ATP synthesis",
                            pH: "~5 (acidic) vs stroma pH ~8 (basic)"
                        },
                        chlorophyll: {
                            types: "Chlorophyll a (blue-green), chlorophyll b (yellow-green)",
                            location: "Embedded in thylakoid membrane in photosystems",
                            function: "Absorb light energy (red and blue wavelengths), reflect green",
                            structure: "Porphyrin ring with Mg²⁺ center, hydrophobic tail",
                            accessoryPigments: "Carotenoids (orange/yellow) - protect, expand absorption range"
                        }
                    },
                    stroma: {
                        composition: "Fluid matrix containing enzymes, DNA, ribosomes, starch granules, lipid droplets",
                        enzymes: "Calvin cycle enzymes (RuBisCO, others)",
                        chloroplastDNA: "Circular, ~120,000-200,000 base pairs (larger than mitochondrial DNA), encodes ~100 genes",
                        ribosomes: "70S ribosomes (prokaryotic-type)",
                        starchGrains: "Temporary glucose storage as starch",
                        function: "Site of Calvin cycle (CO₂ fixation)"
                    }
                },
                photosynthesis: {
                    overallEquation: "6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂",
                    twoStages: {
                        lightDependentReactions: {
                            location: "Thylakoid membrane",
                            input: "Light, H₂O",
                            output: "O₂, ATP, NADPH",
                            process: {
                                photoexcitation: "Light excites electrons in chlorophyll",
                                waterSplitting: "PSII splits H₂O → 2H⁺ + ½O₂ + 2e⁻ (photolysis)",
                                electronTransport: "Electrons pass from PSII → cytochrome b₆f → PSI",
                                protonPumping: "H⁺ pumped into thylakoid lumen (creates gradient)",
                                NADPHformation: "PSI reduces NADP⁺ + H⁺ → NADPH",
                                ATPsynthesis: "H⁺ flows through ATP synthase → ADP + Pi → ATP (photophosphorylation)"
                            },
                            yield: "~3 ATP + 2 NADPH per 'turn' (approximate)"
                        },
                        calvinCycle: {
                            location: "Stroma",
                            input: "CO₂, ATP, NADPH",
                            output: "Glucose (C₆H₁₂O₆)",
                            phases: {
                                carbonFixation: "RuBisCO enzyme fixes CO₂ to RuBP (5C) → two 3-PGA (3C)",
                                reduction: "3-PGA reduced using ATP and NADPH → G3P (glyceraldehyde-3-phosphate)",
                                regeneration: "Some G3P used to regenerate RuBP (using ATP)",
                                glucoseSynthesis: "Two G3P molecules → one glucose (6C)"
                            },
                            cycles: "6 turns of Calvin cycle produce 1 glucose",
                            requirement: "18 ATP + 12 NADPH for 1 glucose",
                            RuBisCO: "Most abundant enzyme on Earth, but slow and inefficient (also fixes O₂ in photorespiration)"
                        }
                    }
                },
                endosymbioticTheory: {
                    hypothesis: "Chloroplasts originated from free-living photosynthetic cyanobacteria engulfed by early eukaryotic cell (~1.5 billion years ago)",
                    evidence: {
                        doubleMembrane: "Inner from original cyanobacteria, outer from host cell",
                        thylakoidMembrane: "Similar to cyanobacterial membranes",
                        ownDNA: "Circular DNA like bacteria",
                        ownRibosomes: "70S ribosomes like bacteria",
                        reproduction: "Divide by binary fission",
                        genetics: "Some chloroplast genes similar to cyanobacterial genes"
                    },
                    secondaryEndosymbiosis: "Some algae acquired chloroplasts by engulfing eukaryotic algae (e.g., brown algae, diatoms have 3-4 membranes)"
                },
                otherPlastids: {
                    chromoplasts: {
                        color: "Red, orange, yellow (carotenoids)",
                        function: "Pigmentation in flowers, fruits (attract pollinators, seed dispersers)",
                        examples: "Tomatoes, carrots, peppers"
                    },
                    leucoplasts: {
                        color: "Colorless",
                        function: "Storage",
                        types: {
                            amyloplasts: "Store starch (potatoes, grains)",
                            elaioplasts: "Store oils",
                            proteinoplasts: "Store proteins"
                        }
                    },
                    interconversion: "Plastids can convert between types (chloroplast ↔ chromoplast, e.g., tomato ripening)"
                },
                applications: [
                    "Agriculture (improving photosynthetic efficiency)",
                    "Biofuel production (engineering algae for oil)",
                    "Climate change research (CO₂ fixation)",
                    "Understanding plant evolution",
                    "Genetic engineering (chloroplast transformation for crop improvement)",
                    "Artificial photosynthesis (solar energy conversion)",
                    "Food security (increasing crop yields)"
                ]
            }
        };
    }

    initializeCellularExperiments() {
        this.cellularExperiments = {
            // ========================================
            // CELL TYPES EXPERIMENT
            // ========================================
            
            hooke_cell_discovery: {
                name: "Robert Hooke's Cork Cells - Discovery of the Cell",
                relatedTopics: ['cell_types', 'cell_theory'],
                category: 'microscopy_histology',
                historicalBackground: {
                    scientist: "Robert Hooke",
                    year: "1665",
                    publication: "Micrographia",
                    discovery: "First person to observe and name 'cells' while examining thin slices of cork under early compound microscope",
                    observation: "Observed box-like structures in cork, reminded him of small rooms (cells) in monastery",
                    significance: "Coined the term 'cell' and demonstrated power of microscopy for biological discovery",
                    context: "Early microscopes just invented; Hooke made detailed drawings of what he saw",
                    actualObservation: "Hooke saw dead cell walls (empty boxes), not living cells",
                    quote: "I could exceedingly plainly perceive it to be all perforated and porous, much like a Honey-comb... these pores, or cells, were not very deep",
                    impact: "Sparked interest in microscopic examination of biological specimens, laid groundwork for cell theory (1838-1839)"
                },
                labExperiment: {
                    title: "Observing Plant and Animal Cells Under the Microscope",
                    hypothesis: "Different cell types (plant vs animal, prokaryotic vs eukaryotic) will show distinct structural features when observed under a microscope",
                    purpose: "Compare and contrast prokaryotic and eukaryotic cells, and plant and animal cells using light microscopy and staining techniques",
                    background: {
                        cellTheory: "All living things are made of cells; cells are the basic unit of life; all cells come from pre-existing cells",
                        microscope: "Light microscope magnifies specimens using visible light and lenses",
                        staining: "Dyes increase contrast, making cellular structures visible",
                        resolution: "Light microscope resolution ~0.2 μm (200 nm) - can see nucleus, cell wall, chloroplasts but not ribosomes, membranes in detail"
                    },
                    variables: {
                        independent: "Type of cell examined (onion epidermal cell, human cheek cell, bacterial cell)",
                        dependent: "Cellular structures observed (cell wall, nucleus, chloroplasts, shape, size)",
                        controlled: ["Microscope magnification", "Staining protocol", "Specimen preparation method", "Light intensity"]
                    },
                    materials: [
                        "Compound light microscope",
                        "Microscope slides and coverslips",
                        "Dropper or pipette",
                        "Forceps (tweezers)",
                        "Scalpel or razor blade",
                        "Toothpicks or cotton swabs",
                        "Distilled water",
                        "Iodine solution or Lugol's iodine (stains starch, cell structures)",
                        "Methylene blue stain (stains nuclei, bacteria)",
                        "Onion (for plant cells)",
                        "Elodea (aquatic plant, for observing chloroplasts)",
                        "Prepared slide of bacteria (E. coli or mixed bacteria)",
                        "Lens paper",
                        "Paper towels"
                    ],
                    safetyPrecautions: [
                        "Handle microscope carefully - carry with two hands",
                        "Use caution with sharp scalpel/razor blade",
                        "Iodine and methylene blue can stain skin and clothing - wear gloves",
                        "Dispose of broken glass in sharps container",
                        "Clean slides and coverslips properly",
                        "Never use coarse focus at high power (can crack slide/damage objective)"
                    ],
                    procedure: {
                        microscopeSetup: [
                            "Place microscope on flat, stable surface",
                            "Plug in light source and turn on",
                            "Rotate to lowest power objective (4× or 10×)",
                            "Adjust diaphragm for optimal light"
                        ],
                        
                        part1_OnionEpidermalCells: {
                            title: "PART 1: Observing Plant Cells (Onion Epidermis)",
                            preparation: [
                                "Peel a thin layer of onion epidermis (inner layer of onion scale leaf)",
                                "Use forceps to carefully remove a single layer (should be translucent)",
                                "Place onion piece on slide",
                                "Add 1-2 drops of iodine solution",
                                "Carefully lower coverslip at angle to avoid air bubbles",
                                "Blot excess liquid with paper towel"
                            ],
                            observation: [
                                "Place slide on microscope stage, center over light",
                                "Start with lowest power (4× or 10× objective)",
                                "Use coarse focus to bring cells into view",
                                "Center cells of interest in field of view",
                                "Switch to medium power (40× objective)",
                                "Use ONLY fine focus at higher powers",
                                "Observe and draw cells at 40× and 100× (if available)",
                                "Look for: cell wall, cell membrane (difficult to see), nucleus (dark-staining), vacuole (large, clear area), cytoplasm"
                            ],
                            expectedObservations: {
                                cellShape: "Rectangular or polygonal (due to cell wall)",
                                cellWall: "Thick boundary around each cell (rigid, made of cellulose)",
                                nucleus: "Dark-staining spherical or oval structure (iodine stains DNA)",
                                vacuole: "Large clear area taking up most of cell (central vacuole)",
                                cytoplasm: "Thin layer between vacuole and cell wall (may appear grainy)",
                                chloroplasts: "Absent (onion is underground storage organ)",
                                arrangement: "Cells in organized rows, tightly packed"
                            },
                            size: "Typical onion epidermal cell: 0.25-0.4 mm length, 0.15-0.25 mm width (250-400 μm × 150-250 μm)"
                        },
                        
                        part2_ElodeaCells: {
                            title: "PART 2: Observing Plant Cells with Chloroplasts (Elodea)",
                            preparation: [
                                "Remove single young leaf from tip of Elodea plant",
                                "Place leaf on slide with drop of water",
                                "Add coverslip",
                                "No stain needed (chloroplasts are green)"
                            ],
                            observation: [
                                "Observe at low power, then medium/high power",
                                "Look for: cell wall, nucleus, chloroplasts, vacuole",
                                "Note chloroplast movement (cytoplasmic streaming if visible)",
                                "Observe distribution of chloroplasts within cells"
                            ],
                            expectedObservations: {
                                cellShape: "Rectangular/brick-like",
                                cellWall: "Visible boundary",
                                chloroplasts: "Many green, oval organelles (20-40 per cell)",
                                chloroplastMovement: "May observe cytoplasmic streaming (chloroplasts moving in current)",
                                nucleus: "May be difficult to see (often obscured by chloroplasts)",
                                centralVacuole: "Large, clear area (pushes chloroplasts to periphery)"
                            },
                            size: "Elodea cells: ~100-200 μm length, ~50-100 μm width; chloroplasts ~5-10 μm"
                        },
                        
                        part3_HumanCheekCells: {
                            title: "PART 3: Observing Animal Cells (Human Cheek Epithelial Cells)",
                            preparation: [
                                "Gently scrape inside of cheek with toothpick or cotton swab (painless)",
                                "Smear sample on center of clean slide",
                                "Add 1 drop of methylene blue stain",
                                "Wait 2-3 minutes for stain to penetrate",
                                "Add coverslip",
                                "Blot excess stain"
                            ],
                            observation: [
                                "Observe at low power to find cells (may need to search)",
                                "Switch to medium/high power",
                                "Look for: cell membrane, nucleus, cytoplasm",
                                "Draw several cells showing variation in appearance"
                            ],
                            expectedObservations: {
                                cellShape: "Irregular, flattened, round or oval (no rigid shape)",
                                cellMembrane: "Thin boundary (flexible, no cell wall)",
                                nucleus: "Dark blue-staining, centrally located, large relative to cell",
                                cytoplasm: "Light blue, granular appearance",
                                noCellWall: "Cell membrane only (flexible boundary)",
                                noChloroplasts: "Absent (animal cells don't photosynthesize)",
                                noLargeVacuole: "Only small vesicles if any",
                                bacteria: "May observe bacteria on slide (much smaller, different shape)"
                            },
                            size: "Cheek cells: 50-60 μm diameter (smaller than onion cells)"
                        },
                        
                        part4_BacterialCells: {
                            title: "PART 4: Observing Prokaryotic Cells (Bacteria)",
                            preparation: [
                                "Use prepared bacteria slide OR",
                                "Prepare yogurt smear: dilute yogurt with water, place tiny drop on slide, smear thin, air dry, add methylene blue, wait 1 min, rinse gently, air dry, add coverslip"
                            ],
                            observation: [
                                "Start at low power, increase to highest power (100× oil immersion if available)",
                                "Bacteria are VERY small - may appear as tiny dots",
                                "Look for shapes: cocci (spheres), bacilli (rods), spirilla (spirals)",
                                "Note size compared to eukaryotic cells"
                            ],
                            expectedObservations: {
                                size: "1-5 μm (much smaller than eukaryotic cells)",
                                shape: "Cocci (round), bacilli (rods), spirilla (spiral/curved)",
                                color: "Stained (blue/purple with methylene blue)",
                                noNucleus: "No visible nucleus (nucleoid not visible at this resolution)",
                                noOrganelles: "No visible internal structures",
                                arrangement: "Single cells, pairs (diplo-), chains (strepto-), clusters (staphylo-)"
                            }
                        }
                    },
                    dataCollection: {
                        drawingRequirements: [
                            "Draw what you actually see, not what you expect",
                            "Use stippling or light shading (no heavy shading)",
                            "Draw single cells and groups showing arrangement",
                            "Label all visible structures",
                            "Include magnification and scale bar",
                            "Title each drawing"
                        ],
                        dataTable: [
                            ["Cell Type", "Shape", "Size (μm)", "Cell Wall?", "Nucleus?", "Chloroplasts?", "Large Vacuole?", "Other Features"],
                            ["Onion (plant)", "Rectangular", "250-400 × 150-250", "Yes", "Yes", "No", "Yes", "Organized rows"],
                            ["Elodea (plant)", "Rectangular", "100-200 × 50-100", "Yes", "Yes", "Yes", "Yes", "Chloroplasts visible"],
                            ["Cheek (animal)", "Irregular", "50-60 diameter", "No", "Yes", "No", "No", "Flexible shape"],
                            ["Bacteria (prokaryotic)", "Varied", "1-5", "Yes", "No", "No", "No", "Very small, simple"]
                        ]
                    },
                    analysis: {
                        comparisonTable: [
                            ["Feature", "Prokaryotic (Bacteria)", "Eukaryotic Plant", "Eukaryotic Animal"],
                            ["Size", "Small (1-5 μm)", "Large (50-500 μm)", "Medium (10-100 μm)"],
                            ["Cell Wall", "Yes (peptidoglycan)", "Yes (cellulose)", "No"],
                            ["Nucleus", "No (nucleoid)", "Yes", "Yes"],
                            ["Membrane-bound organelles", "No", "Yes", "Yes"],
                            ["Chloroplasts", "No*", "Yes", "No"],
                            ["Large central vacuole", "No", "Yes", "No"],
                            ["Shape", "Defined", "Rectangular/fixed", "Irregular/variable"],
                            ["Complexity", "Simple", "Complex", "Complex"]
                        ],
                        note: "*Cyanobacteria have thylakoids but not chloroplasts",
                        questions: [
                            "How can you distinguish plant cells from animal cells?",
                            "Why are plant cells more regular in shape than animal cells?",
                            "What is the function of the cell wall in plant cells?",
                            "Why can't you see individual organelles in bacteria?",
                            "What is the relationship between cell size and complexity?",
                            "How does the presence of chloroplasts indicate the cell's function?",
                            "Why is staining necessary to see cellular details?"
                        ]
                    },
                    conclusions: [
                        "Eukaryotic cells (plant and animal) are larger and more complex than prokaryotic cells (bacteria)",
                        "Plant cells have cell walls, chloroplasts, and large central vacuoles; animal cells do not",
                        "Both plant and animal cells have nuclei and membrane-bound organelles",
                        "Prokaryotic cells lack a nucleus and membrane-bound organelles",
                        "Cell structure reflects function (e.g., chloroplasts for photosynthesis)",
                        "Microscopy and staining are essential tools for observing cellular structures",
                        "Hooke's original observation of cork cells showed dead cell walls; living cells contain much more detail"
                    ],
                    realWorldApplications: [
                        "Medical diagnosis (identifying abnormal cells, pathogens)",
                        "Agriculture (plant breeding, disease identification)",
                        "Microbiology (bacterial identification, antibiotic testing)",
                        "Forensic science (analyzing biological evidence)",
                        "Research (understanding cell function, disease mechanisms)",
                        "Quality control (food industry, water testing)"
                    ],
                    extensions: [
                        "Compare multiple plant tissues (e.g., leaf, root, stem)",
                        "Observe mitosis in onion root tips",
                        "Test osmosis effects on plant cells (plasmolysis)",
                        "Prepare and stain blood cells",
                        "Use electron microscope images to see ultrastructure",
                        "Measure actual cell dimensions using eyepiece micrometer"
                    ]
                }
            }
        };

        // Link experiments to topics
        this.linkExperimentsToTopics();
    }

    linkExperimentsToTopics() {
        Object.entries(this.cellularExperiments).forEach(([expId, experiment]) => {
            experiment.relatedTopics.forEach(topicId => {
                if (this.cellularTopics[topicId]) {
                    if (!this.cellularTopics[topicId].relatedExperiments) {
                        this.cellularTopics[topicId].relatedExperiments = [];
                    }
                    this.cellularTopics[topicId].relatedExperiments.push({
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
            cell_types: {
                'Prokaryotic vs Eukaryotic': [
                    'Thinking prokaryotic cells have no DNA (they do, just not in a nucleus)',
                    'Believing all prokaryotes are harmful (most are harmless or beneficial)',
                    'Confusing "no nucleus" with "no genetic material"',
                    'Thinking prokaryotes are simpler means they\'re less successful (bacteria dominate Earth)',
                    'Believing all single-celled organisms are prokaryotes (protists are eukaryotic)'
                ],
                'Plant vs Animal Cells': [
                    'Thinking only plant cells have cell membranes (both have membranes; plants also have walls)',
                    'Believing plant cells don\'t need mitochondria because they have chloroplasts (they need both)',
                    'Thinking animal cells have no structures comparable to central vacuole (they have smaller vacuoles)',
                    'Confusing cell wall with cell membrane',
                    'Believing all plant cells have chloroplasts (only photosynthetic cells do)'
                ],
                'Cell Size': [
                    'Thinking cells can be seen with naked eye (most cannot, except eggs)',
                    'Believing all cells are microscopic (some neurons are >1 meter long)',
                    'Confusing cell size with organism size (elephant cells aren\'t bigger than mouse cells, just more of them)'
                ]
            },
            
            cell_membrane: {
                'Membrane Structure': [
                    'Thinking membrane is solid barrier (it\'s fluid)',
                    'Believing lipid bilayer is static (lipids and proteins move)',
                    'Confusing channel proteins with carrier proteins',
                    'Thinking all membrane proteins span the bilayer (peripheral proteins don\'t)',
                    'Believing membranes are uniform (different membranes have different compositions)'
                ],
                'Transport': [
                    'Confusing diffusion with active transport (diffusion is passive)',
                    'Thinking osmosis only involves plant cells (all cells affected)',
                    'Believing facilitated diffusion requires energy (it\'s passive)',
                    'Confusing endocytosis with exocytosis',
                    'Thinking active transport always means pumping things in (can pump out too)'
                ],
                'Osmosis': [
                    'Believing water always moves into cells (depends on tonicity)',
                    'Confusing hypertonic and hypotonic solutions',
                    'Thinking osmosis violates laws of diffusion (water follows concentration gradient of water, from high water to low water concentration)'
                ]
            },
            
            nucleus: {
                'Nuclear Structure': [
                    'Thinking nucleus is solid (it has nuclear envelope with pores)',
                    'Believing chromatin and chromosomes are different substances (chromatin condenses into chromosomes)',
                    'Confusing nucleolus with nucleus',
                    'Thinking nuclear envelope is single membrane (it\'s double)',
                    'Believing DNA is always tightly packed (varies with cell cycle and gene activity)'
                ],
                'Nuclear Function': [
                    'Thinking nucleus controls cell by "thinking" (it controls via gene expression)',
                    'Believing all DNA is in nucleus (mitochondria and chloroplasts have own DNA)',
                    'Confusing replication with transcription (both occur in nucleus but different processes)',
                    'Thinking nucleus divides independently (nuclear division is part of cell division)'
                ]
            },
            
            mitochondria: {
                'Structure and Function': [
                    'Thinking mitochondria only produce ATP (also heat, help with calcium regulation, apoptosis)',
                    'Believing plant cells don\'t have mitochondria (they do! They need ATP too)',
                    'Confusing cellular respiration with breathing (breathing is gas exchange; cellular respiration is metabolic process)',
                    'Thinking cristae are separate organelles (they\'re folds of inner membrane)',
                    'Believing mitochondria are always the same size/number (varies by cell energy needs)'
                ],
                'Inheritance and Evolution': [
                    'Confusing maternal inheritance with nuclear DNA inheritance',
                    'Thinking endosymbiotic theory means mitochondria can live independently (they\'ve lost that ability)',
                    'Believing mitochondrial DNA is identical to bacterial DNA (it\'s similar but evolved)'
                ]
            },
            
            chloroplasts: {
                'Structure and Function': [
                    'Thinking chloroplasts are only for making cells green (primary function is photosynthesis)',
                    'Believing photosynthesis only occurs in chloroplasts (in plants yes; in bacteria, no separate organelle)',
                    'Confusing thylakoids with grana (grana are stacks of thylakoids)',
                    'Thinking stroma is empty space (it contains enzymes, DNA, ribosomes)',
                    'Believing chlorophyll is the only photosynthetic pigment (accessory pigments also important)'
                ],
                'Photosynthesis': [
                    'Confusing light-dependent and light-independent reactions',
                    'Thinking plants only photosynthesize (they also do cellular respiration)',
                    'Believing O₂ comes from CO₂ (it comes from splitting H₂O)',
                    'Confusing photosynthesis with cellular respiration (opposite processes, but both occur in plants)'
                ]
            }
        };

        this.clarificationStrategies = {
            visual_comparison: {
                method: 'Use diagrams to show structural differences',
                effectiveness: 'High for distinguishing similar structures'
            },
            analogy: {
                method: 'Relate to everyday examples (factory, city, etc.)',
                effectiveness: 'High for understanding cellular functions'
            },
            microscopy: {
                method: 'Direct observation of specimens',
                effectiveness: 'Very high for making abstract concepts concrete'
            },
            contrast_table: {
                method: 'Side-by-side comparison charts',
                effectiveness: 'High for related cell types/structures'
            },
            animation: {
                method: 'Show dynamic processes (transport, division)',
                effectiveness: 'Very high for understanding processes'
            },
            scale_model: {
                method: 'Build 3D models or use scale representations',
                effectiveness: 'High for understanding relative sizes'
            }
        };
    }

    initializeMetacognitivePrompts() {
        this.metacognitivePrompts = {
            beforeLearning: [
                "What do you already know about {topic}?",
                "What questions do you have about {topic}?",
                "How does {topic} relate to what you've learned before?",
                "What do you predict will be most challenging about {topic}?"
            ],
            duringLearning: [
                "Does this make sense? Can you explain it in your own words?",
                "How does this connect to {related_concept}?",
                "What's confusing about this concept?",
                "Can you think of a real-world example of {concept}?"
            ],
            afterLearning: [
                "What were the main ideas about {topic}?",
                "What surprised you while learning about {topic}?",
                "What are you still unsure about?",
                "How would you teach {topic} to someone else?",
                "What study strategy worked best for you with this material?"
            ],
            problemSolving: [
                "What is the question really asking?",
                "What information do you have? What do you need?",
                "Have you seen a similar problem before?",
                "Did your answer make sense? How can you check?"
            ]
        };
    }

    initializeContextualScenarios() {
        this.contextualScenarios = {
            cell_types: [
                {
                    scenario: "Antibiotic Resistance",
                    context: "Antibiotics target prokaryotic cell structures not present in eukaryotic cells",
                    application: "Penicillin targets bacterial cell wall synthesis; since human cells lack cell walls, we're unharmed",
                    question: "Why don't antibiotics harm human cells while killing bacteria?"
                },
                {
                    scenario: "Plant-Based Meat Alternatives",
                    context: "Understanding plant cell structure helps develop realistic meat substitutes",
                    application: "Plant cells have rigid cell walls; processing breaks these down to create meat-like texture",
                    question: "What structural differences between plant and animal cells affect texture of plant-based burgers?"
                }
            ],
            
            cell_membrane: [
                {
                    scenario: "Intravenous (IV) Fluids",
                    context: "Medical IV solutions must be isotonic to blood to avoid damaging red blood cells",
                    application: "0.9% NaCl (saline) is isotonic; hypertonic or hypotonic solutions would cause cells to shrink or burst",
                    question: "Why must IV fluids match the salt concentration of blood?"
                },
                {
                    scenario: "Food Preservation by Salting",
                    context: "High salt concentration preserves food by killing bacteria",
                    application: "Hypertonic environment causes water to leave bacterial cells, dehydrating and killing them",
                    question: "How does salting meat prevent spoilage?"
                }
            ],
            
            nucleus: [
                {
                    scenario: "Cancer and Cell Division",
                    context: "Cancer involves uncontrolled cell division due to mutations affecting nuclear function",
                    application: "Mutations in DNA (in nucleus) disrupt cell cycle regulation, leading to continuous division",
                    question: "Why do cancer treatments target rapidly dividing cells?"
                },
                {
                    scenario: "Genetic Testing",
                    context: "DNA testing for diseases or paternity uses nuclear DNA",
                    application: "Nuclear DNA inherited from both parents; unique to individual (except identical twins)",
                    question: "Why is nuclear DNA used for paternity testing but mitochondrial DNA used for maternal lineage tracing?"
                }
            ],
            
            mitochondria: [
                {
                    scenario: "Muscle Fatigue",
                    context: "Muscles need constant ATP for contraction; fatigue relates to ATP depletion",
                    application: "Exercise increases ATP demand; when O₂ insufficient, cells switch to less efficient fermentation → lactate buildup → fatigue",
                    question: "Why do muscles fatigue during intense exercise?"
                },
                {
                    scenario: "Mitochondrial Diseases",
                    context: "Defects in mitochondrial function cause severe, often inherited diseases",
                    application: "Organs with high energy needs (brain, heart, muscles) most affected by mitochondrial dysfunction",
                    question: "Why do mitochondrial diseases primarily affect muscles and nervous system?"
                }
            ],
            
            chloroplasts: [
                {
                    scenario: "Leaf Color Change in Fall",
                    context: "Chlorophyll breaks down in fall, revealing other pigments",
                    application: "Green chlorophyll degrades; yellow/orange carotenoids (always present) become visible",
                    question: "Why do leaves change color in autumn?"
                },
                {
                    scenario: "Hydroponics and Indoor Farming",
                    context: "Growing plants indoors requires understanding light needs for photosynthesis",
                    application: "Chloroplasts need specific light wavelengths (red and blue most effective); LEDs optimized for these wavelengths",
                    question: "What light spectrum is most efficient for indoor plant growth?"
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
                    example: "Define prokaryotic cell"
                },
                understand: {
                    description: "Explain ideas or concepts",
                    verbs: ["Explain", "Describe", "Summarize", "Compare", "Classify"],
                    example: "Explain why plant cells have cell walls but animal cells don't"
                },
                apply: {
                    description: "Use information in new situations",
                    verbs: ["Calculate", "Solve", "Demonstrate", "Predict", "Use"],
                    example: "Predict what happens to red blood cell in hypertonic solution"
                },
                analyze: {
                    description: "Draw connections among ideas",
                    verbs: ["Analyze", "Differentiate", "Organize", "Compare", "Contrast"],
                    example: "Analyze structural differences between prokaryotic and eukaryotic cells"
                },
                evaluate: {
                    description: "Justify a decision or course of action",
                    verbs: ["Evaluate", "Critique", "Judge", "Defend", "Assess"],
                    example: "Evaluate evidence for endosymbiotic theory of mitochondrial origin"
                },
                create: {
                    description: "Produce new or original work",
                    verbs: ["Design", "Construct", "Create", "Develop", "Formulate"],
                    example: "Design an experiment to test effect of salt concentration on cell turgor"
                }
            },
            
            understandingLevels: {
                novice: {
                    characteristics: ["Memorizes structures", "Sees organelles in isolation", "Struggles with function-structure relationships"],
                    support: ["Provide analogies", "Use visual models", "Break down complex structures"]
                },
                developing: {
                    characteristics: ["Connects structures to functions", "Can compare cell types", "Begins seeing integrated systems"],
                    support: ["Challenge with new cell types", "Encourage explanation", "Introduce variations"]
                },
                proficient: {
                    characteristics: ["Flexible thinking", "Applies to novel situations", "Explains structure-function relationships"],
                    support: ["Present complex problems", "Encourage analysis of diseases", "Develop research skills"]
                },
                expert: {
                    characteristics: ["Synthesizes across systems", "Understands evolutionary perspectives", "Teaches others effectively"],
                    support: ["Original research questions", "Mentoring others", "Advanced techniques"]
                }
            }
        };

        this.assessmentQuestions = {
            cell_types: {
                remember: "List three differences between prokaryotic and eukaryotic cells",
                understand: "Explain why bacteria can survive in more extreme environments than eukaryotic cells",
                apply: "If you observed a cell with a cell wall and chloroplasts under a microscope, what type of cell is it?",
                analyze: "Compare the surface area to volume ratios of prokaryotic and eukaryotic cells and explain the implications",
                evaluate: "Evaluate the endosymbiotic theory using evidence from mitochondrial and chloroplast structures",
                create: "Design an experiment to determine if a newly discovered organism is prokaryotic or eukaryotic"
            },
            cell_membrane: {
                remember: "Define selective permeability",
                understand: "Explain how the fluid mosaic model describes membrane structure",
                apply: "Predict the direction of water movement when a plant cell is placed in a hypotonic solution",
                analyze: "Analyze how membrane protein structure determines function",
                evaluate: "Evaluate the role of cholesterol in membrane function across different temperatures",
                create: "Design a drug delivery system using liposomes, explaining how it would cross cell membranes"
            },
            nucleus: {
                remember: "List the main components of the nucleus",
                understand: "Explain the function of nuclear pores in regulating traffic between nucleus and cytoplasm",
                apply: "If a cell's nuclear envelope breaks down, predict what would happen to gene expression",
                analyze: "Compare chromatin structure in actively transcribed genes vs silenced genes",
                evaluate: "Evaluate the significance of the nuclear envelope in eukaryotic evolution",
                create: "Design an experiment to track protein import into the nucleus"
            },
            mitochondria: {
                remember: "State the main function of mitochondria",
                understand: "Explain why mitochondria are called the 'powerhouse of the cell'",
                apply: "Predict how a drug that disrupts the electron transport chain would affect ATP production",
                analyze: "Analyze the structural features of mitochondria that support their function",
                evaluate: "Evaluate the evidence that mitochondria originated from endosymbiotic bacteria",
                create: "Design a study to investigate how exercise training affects mitochondrial density in muscle cells"
            },
            chloroplasts: {
                remember: "Identify the location of light-dependent reactions in chloroplasts",
                understand: "Explain the relationship between thylakoid structure and function",
                apply: "Predict what would happen to photosynthesis if thylakoid membranes were disrupted",
                analyze: "Compare energy conversion in mitochondria vs chloroplasts",
                evaluate: "Evaluate different agricultural strategies for maximizing photosynthetic efficiency",
                create: "Design an artificial photosynthesis system inspired by chloroplast structure"
            }
        };
    }



// ========================================
    // HANDLER METHODS FOR EACH TOPIC
    // ========================================

    handleCellTypes(problem) {
        const content = {
            topic: "Cell Types and Classification",
            category: 'cell_biology',
            summary: "All living organisms are composed of cells, which are classified into two main types: prokaryotic cells (lacking a membrane-bound nucleus) and eukaryotic cells (with a true nucleus and organelles). Eukaryotic cells are further divided into plant and animal cells with distinct structural features.",
            
            cellTheory: {
                principles: [
                    "All living organisms are composed of one or more cells",
                    "The cell is the basic unit of structure and organization in organisms",
                    "All cells come from pre-existing cells (biogenesis)"
                ],
                modernAdditions: [
                    "Energy flow occurs within cells (metabolism)",
                    "Cells contain hereditary information (DNA) passed from cell to cell",
                    "All cells have the same basic chemical composition"
                ],
                historicalDevelopment: {
                    robertHooke1665: "First observed cells in cork, coined term 'cell'",
                    antonVanLeeuwenhoek1670s: "First observed living cells (bacteria, protists, sperm)",
                    matthiasSchleiden1838: "Proposed all plants are made of cells",
                    theodorSchwann1839: "Proposed all animals are made of cells",
                    rudolfVirchow1855: "Stated all cells arise from pre-existing cells (omnis cellula e cellula)"
                },
                significance: "Foundation of biology; understanding cells is essential for understanding life"
            },
            
            prokaryoticVsEukaryotic: {
                prokaryotic: {
                    definition: "Cells lacking membrane-bound nucleus and organelles",
                    size: "0.1-5.0 μm (typically 1-2 μm)",
                    nucleus: "No true nucleus; DNA in nucleoid region (not membrane-bound)",
                    DNA: "Single circular chromosome; plasmids common; not associated with histones (except in archaea)",
                    organelles: "No membrane-bound organelles (no mitochondria, ER, Golgi, lysosomes)",
                    ribosomes: "70S ribosomes (30S + 50S subunits) - smaller than eukaryotic",
                    cellWall: "Present (peptidoglycan in bacteria, various compositions in archaea)",
                    cellMembrane: "Present, lacks sterols (except mycoplasma)",
                    reproduction: "Binary fission (asexual), horizontal gene transfer (conjugation, transformation, transduction)",
                    cellDivision: "Simple - DNA replicates, cell elongates, divides",
                    flagella: "Simple structure (flagellin protein), rotates like propeller",
                    metabolicDiversity: "Extremely diverse (aerobic, anaerobic, chemosynthetic, photosynthetic)",
                    examples: {
                        bacteria: "E. coli, Streptococcus, Bacillus, Lactobacillus, Cyanobacteria",
                        archaea: "Methanogens, halophiles, thermophiles"
                    },
                    domains: "Bacteria and Archaea (two of three domains of life)",
                    firstAppeared: "~3.5 billion years ago",
                    abundance: "Most abundant organisms on Earth; dominate biomass"
                },
                eukaryotic: {
                    definition: "Cells with membrane-bound nucleus and organelles",
                    size: "10-100 μm (typically 10-30 μm; up to 1000× larger than prokaryotes)",
                    nucleus: "True nucleus with nuclear envelope (double membrane) and nuclear pores",
                    DNA: "Multiple linear chromosomes; associated with histone proteins; organized into chromatin/chromosomes",
                    organelles: "Membrane-bound organelles: mitochondria, ER, Golgi, lysosomes, peroxisomes, (chloroplasts in plants)",
                    ribosomes: "80S ribosomes (40S + 60S subunits) in cytoplasm; 70S in mitochondria/chloroplasts",
                    cellWall: "Present in plants (cellulose), fungi (chitin); absent in animals",
                    cellMembrane: "Present, contains sterols (cholesterol in animals)",
                    reproduction: "Mitosis (asexual) and meiosis (sexual reproduction)",
                    cellDivision: "Complex - nuclear envelope breaks down, spindle apparatus forms, chromosomes separate",
                    flagella: "Complex structure (9+2 microtubule arrangement), undulates",
                    compartmentalization: "Allows separation of functions and complex regulation",
                    examples: {
                        protists: "Amoeba, Paramecium, algae",
                        fungi: "Yeast, mushrooms, molds",
                        plants: "All plants (mosses, ferns, flowering plants, trees)",
                        animals: "All animals (sponges, worms, insects, fish, mammals)"
                    },
                    domain: "Eukarya (one of three domains of life)",
                    firstAppeared: "~2 billion years ago",
                    complexity: "More structurally complex, larger genome, more diverse cell types in multicellular organisms"
                },
                keyDifferences: [
                    "Size: Prokaryotes much smaller (1-5 μm vs 10-100 μm)",
                    "Nucleus: Absent (prokaryotes) vs Present (eukaryotes)",
                    "Organelles: None membrane-bound (prokaryotes) vs Many (eukaryotes)",
                    "DNA: Circular, nucleoid (prokaryotes) vs Linear, nucleus (eukaryotes)",
                    "Ribosomes: 70S (prokaryotes) vs 80S (eukaryotes)",
                    "Reproduction: Binary fission (prokaryotes) vs Mitosis/Meiosis (eukaryotes)",
                    "Cell division: Simple (prokaryotes) vs Complex (eukaryotes)",
                    "Complexity: Simple (prokaryotes) vs Complex (eukaryotes)"
                ],
                endosymbioticTheory: {
                    hypothesis: "Mitochondria and chloroplasts originated from free-living prokaryotes that were engulfed by early eukaryotic ancestors in symbiotic relationships",
                    timeline: "Mitochondria ~2 billion years ago; chloroplasts ~1.5 billion years ago",
                    evidence: [
                        "Double membrane (inner from bacteria, outer from host cell)",
                        "Own circular DNA (like prokaryotes)",
                        "70S ribosomes (like prokaryotes, not 80S like eukaryotic cytoplasm)",
                        "Reproduce by binary fission (like bacteria)",
                        "Transcription/translation similar to prokaryotes",
                        "Antibiotics affecting bacteria also affect mitochondria/chloroplasts"
                    ],
                    proposedBy: "Lynn Margulis (1967)",
                    significance: "Explains major evolutionary transition to eukaryotic cells"
                }
            },
            
            plantVsAnimalCells: {
                plantCells: {
                    cellWall: {
                        composition: "Cellulose (polysaccharide), also hemicellulose, pectin",
                        structure: "Rigid, outside cell membrane",
                        function: "Structural support, protection, maintains cell shape, prevents over-expansion",
                        layers: {
                            primaryWall: "Thin, flexible, allows growth",
                            middleLamella: "Pectin layer cementing adjacent cells",
                            secondaryWall: "Thick, rigid, deposited after growth stops (in some cells like xylem)"
                        }
                    },
                    chloroplasts: {
                        presence: "In photosynthetic cells (leaves, stems)",
                        function: "Photosynthesis - convert light energy to chemical energy (glucose)",
                        structure: "Double membrane, thylakoids (contain chlorophyll), stroma",
                        number: "20-100 per cell",
                        note: "Root cells and internal stem cells lack chloroplasts"
                    },
                    centralVacuole: {
                        size: "Large (can occupy 90% of cell volume)",
                        membrane: "Tonoplast",
                        contents: "Cell sap (water, ions, sugars, pigments, waste products)",
                        functions: [
                            "Storage (water, nutrients, waste)",
                            "Turgor pressure (maintains rigidity)",
                            "Degradation of macromolecules",
                            "Pigmentation (anthocyanins for flower/fruit color)"
                        ],
                        turgor: "Water-filled vacuole pushes against cell wall, keeping plant upright"
                    },
                    plasmodesmata: {
                        definition: "Channels through cell walls connecting adjacent plant cells",
                        structure: "Lined with plasma membrane, contain desmotubule (from ER)",
                        function: "Direct cytoplasmic connection, allows transport of molecules between cells",
                        significance: "Creates symplast (interconnected cytoplasm of plant tissue)"
                    },
                    shape: "Fixed, rectangular/polygonal due to rigid cell wall",
                    centrioles: "Absent in most plants (except some lower plants)",
                    lysosomes: "Rare or absent (vacuoles perform similar functions)",
                    plasids: {
                        chloroplasts: "Green, photosynthesis",
                        chromoplasts: "Colored (red, orange, yellow), pigment storage",
                        leucoplasts: "Colorless, storage (amyloplasts store starch)"
                    },
                    energySource: "Autotrophic - produce own food via photosynthesis",
                    storage: "Starch (in amyloplasts)",
                    examples: "Onion epidermis, Elodea leaf cells, palisade mesophyll, root hairs"
                },
                animalCells: {
                    cellWall: "Absent (only plasma membrane)",
                    chloroplasts: "Absent (animals are heterotrophic)",
                    vacuoles: {
                        size: "Small, multiple, temporary",
                        function: "Storage, transport, waste removal",
                        types: "Food vacuoles (phagocytosis), contractile vacuoles (protists)"
                    },
                    centrioles: {
                        presence: "Present (pair near nucleus)",
                        structure: "Nine triplets of microtubules arranged in cylinder",
                        function: "Organize spindle fibers during cell division (mitosis/meiosis)",
                        location: "In centrosome (microtubule organizing center)"
                    },
                    shape: "Irregular, variable, flexible (no rigid cell wall)",
                    lysosomes: {
                        presence: "Prominent and numerous",
                        function: "Digest macromolecules, old organelles, bacteria (autophagy, phagocytosis)",
                        enzymes: "Contain hydrolytic enzymes (proteases, lipases, nucleases)"
                    },
                    cellJunctions: {
                        tightJunctions: "Seal adjacent cells, prevent leakage (intestinal epithelium)",
                        desmosomes: "Anchor cells together, resist mechanical stress",
                        gapJunctions: "Allow communication, small molecules pass between cells"
                    },
                    energySource: "Heterotrophic - consume food",
                    storage: "Glycogen (in liver and muscle cells)",
                    examples: "Human cheek cells, red blood cells, neurons, muscle cells, white blood cells"
                },
                similarities: [
                    "Both have plasma membrane (selective permeability)",
                    "Both have nucleus with nuclear envelope",
                    "Both have mitochondria (cellular respiration for ATP)",
                    "Both have ribosomes (protein synthesis)",
                    "Both have endoplasmic reticulum (rough and smooth)",
                    "Both have Golgi apparatus (processing and packaging proteins)",
                    "Both have cytoplasm with cytoskeleton (structure, movement)",
                    "Both contain DNA (genetic information)",
                    "Both undergo cell division (mitosis)"
                ],
                whyDifferences: {
                    cellWall: "Plants need rigidity for support against gravity (animals have skeletal systems)",
                    chloroplasts: "Plants are autotrophs (make food), animals are heterotrophs (consume food)",
                    largeVacuole: "Plants store water for turgor pressure; animals regulate water differently",
                    centrioles: "Animal cells need centrioles for spindle formation; plants use other methods",
                    lysosomes: "Animals need to digest diverse food particles; plant vacuoles perform similar function"
                }
            },
            
            cellSizeAndScaleToVolumeRatio: {
                concept: "Cell size is limited by surface area to volume ratio",
                explanation: "As cell radius increases, volume increases faster than surface area. Volume = (4/3)πr³ grows as r³, while surface area = 4πr² grows as r². This creates a problem: larger cells have proportionally less membrane surface for nutrient uptake and waste removal relative to their volume.",
                formula: "SA:V ratio = 6/r (for sphere)",
                calculations: {
                    smallCell: {
                        radius: "1 μm",
                        surfaceArea: "12.6 μm²",
                        volume: "4.2 μm³",
                        ratio: "3.0"
                    },
                    mediumCell: {
                        radius: "5 μm",
                        surfaceArea: "314 μm²",
                        volume: "524 μm³",
                        ratio: "0.6"
                    },
                    largeCell: {
                        radius: "10 μm",
                        surfaceArea: "1257 μm²",
                        volume: "4189 μm³",
                        ratio: "0.3"
                    }
                },
                implication: "10× increase in radius → 100× increase in surface area but 1000× increase in volume → 10× decrease in SA:V ratio. This limits efficiency of diffusion for nutrients and waste.",
                whyCellsStaySmall: [
                    "Diffusion becomes limiting - nutrients can't reach center fast enough",
                    "Waste removal slows - toxic buildup",
                    "Communication between nucleus and cytoplasm becomes difficult",
                    "Heat dissipation problems"
                ],
                adaptations: {
                    staySmall: "Most cells remain 10-100 μm in diameter",
                    elongate: "Nerve cells - long and thin (high SA:V along length)",
                    flatten: "Red blood cells - disc shape increases SA:V",
                    fold: "Intestinal microvilli, mitochondrial cristae - increase SA",
                    branchOut: "Neurons have dendrites - increase SA for synapses",
                    multicellular: "Multiple small cells instead of one large cell"
                },
                exceptions: {
                    eggs: "Large but mostly inactive metabolically; nutrients stored, not produced",
                    neurons: "Long but very thin; SA:V high along length",
                    musclefibers: "Long but multinucleate (many nuclei for large volume)",
                    adipocytes: "Large fat cells but mostly inert fat storage"
                },
                importance: "Explains why cells divide rather than growing indefinitely; fundamental constraint on cell size"
            },
            
            comparison: {
                comparisonTable: [
                    ["Feature", "Prokaryotic", "Plant Eukaryotic", "Animal Eukaryotic"],
                    ["Size", "1-5 μm", "10-100 μm", "10-100 μm"],
                    ["Nucleus", "No (nucleoid)", "Yes", "Yes"],
                    ["Cell Wall", "Yes (peptidoglycan)", "Yes (cellulose)", "No"],
                    ["Chloroplasts", "No*", "Yes", "No"],
                    ["Mitochondria", "No", "Yes", "Yes"],
                    ["Ribosomes", "70S", "80S (cytoplasm), 70S (organelles)", "80S (cytoplasm), 70S (mitochondria)"],
                    ["ER & Golgi", "No", "Yes", "Yes"],
                    ["Vacuole", "No", "Large central vacuole", "Small, multiple"],
                    ["Centrioles", "No", "No (most plants)", "Yes"],
                    ["Lysosomes", "No", "Rare", "Yes, prominent"],
                    ["DNA", "Circular, nucleoid", "Linear, nucleus", "Linear, nucleus"],
                    ["Cell Division", "Binary fission", "Mitosis/Meiosis", "Mitosis/Meiosis"],
                    ["Metabolism", "Very diverse", "Aerobic + photosynthesis", "Aerobic"]
                ],
                note: "*Cyanobacteria (prokaryotic) can photosynthesize but lack membrane-bound chloroplasts; have thylakoids in cytoplasm"
            },
            
            examples: [
                {
                    type: "Prokaryotic",
                    name: "Escherichia coli (E. coli)",
                    size: "1-2 μm length, 0.5 μm width",
                    shape: "Rod (bacillus)",
                    habitat: "Human intestine (mostly harmless), some strains pathogenic",
                    significance: "Model organism for genetics, biotechnology"
                },
                {
                    type: "Prokaryotic",
                    name: "Streptococcus",
                    size: "0.5-1 μm diameter",
                    shape: "Sphere (coccus) in chains",
                    habitat: "Human throat, skin",
                    significance: "Some species cause strep throat, pneumonia"
                },
                {
                    type: "Plant Eukaryotic",
                    name: "Onion epidermal cell",
                    size: "250-400 μm × 150-250 μm",
                    features: "Cell wall, nucleus, large central vacuole, no chloroplasts (underground)",
                    significance: "Commonly used in microscopy education"
                },
                {
                    type: "Plant Eukaryotic",
                    name: "Elodea leaf cell",
                    size: "100-200 μm × 50-100 μm",
                    features: "Cell wall, chloroplasts (many), nucleus, cytoplasmic streaming visible",
                    significance: "Demonstrates chloroplasts and cytoplasmic streaming"
                },
                {
                    type: "Animal Eukaryotic",
                    name: "Human cheek epithelial cell",
                    size: "50-60 μm diameter",
                    features: "No cell wall, nucleus prominent, irregular shape",
                    significance: "Easy to obtain for microscopy, demonstrates animal cell features"
                },
                {
                    type: "Animal Eukaryotic",
                    name: "Red blood cell (erythrocyte)",
                    size: "7-8 μm diameter, 2 μm thick",
                    features: "No nucleus (in mammals), biconcave disc shape, no mitochondria",
                    significance: "Specialized for oxygen transport, unusual structure"
                }
            ],
            
            applications: [
                "Medicine - understanding infectious diseases (bacterial vs viral infections target different cell types)",
                "Antibiotics - target prokaryotic cell structures (cell wall synthesis, 70S ribosomes) without harming eukaryotic cells",
                "Agriculture - improving crop plants by understanding plant cell structure",
                "Biotechnology - using bacterial cells for protein production, genetic engineering",
                "Evolutionary biology - understanding origin of eukaryotic cells (endosymbiotic theory)",
                "Cell culture - growing cells in lab for research, vaccine production",
                "Tissue engineering - building artificial tissues from understanding cell types",
                "Forensic science - identifying cell types in biological samples"
            ]
        };
        
        return content;
    }

    handleCellMembrane(problem) {
        const content = {
            topic: "Cell Membrane Structure and Function",
            category: 'membrane_biology',
            summary: "The plasma membrane is a selectively permeable phospholipid bilayer that separates the cell interior from the external environment. It controls substance exchange, maintains cell integrity, and facilitates communication between cells.",
            
            fluidMosaicModel: {
                overview: "Current model of membrane structure proposed by Singer and Nicolson (1972)",
                fluid: "Lipids and proteins can move laterally within the membrane (dynamic, not static)",
                mosaic: "Membrane composed of diverse proteins embedded in or attached to lipid bilayer, creating mosaic pattern",
                components: {
                    phospholipids: {
                        structure: "Amphipathic molecule with hydrophilic head (phosphate + glycerol) and two hydrophobic fatty acid tails",
                        bilayerFormation: "Spontaneously arrange into bilayer in aqueous environment - heads face water, tails face each other",
                        movement: {
                            lateralDiffusion: "Very common - phospholipids move sideways within same layer (~10⁷ times/sec)",
                            rotation: "Spin around long axis",
                            flipFlop: "Rare - move from one layer to other (requires enzyme flippase)",
                            flexion: "Fatty acid tails flex and bend"
                        },
                        fattyAcidComposition: {
                            saturated: "No double bonds, straight tails, pack tightly, less fluid",
                            unsaturated: "Double bonds create kinks, pack loosely, more fluid",
                            effect: "More unsaturated fatty acids → more fluid membrane"
                        },
                        abundance: "Most abundant membrane lipid (~50% of membrane mass)"
                    },
                    cholesterol: {
                        location: "Embedded in bilayer between phospholipids (in animal cells)",
                        structure: "Rigid steroid structure with hydroxyl group (slightly amphipathic)",
                        function: "Membrane fluidity buffer - prevents extremes",
                        mechanism: {
                            highTemperature: "Restricts phospholipid movement, reduces fluidity (stabilizes)",
                            lowTemperature: "Prevents tight packing, maintains fluidity (prevents solidification)"
                        },
                        abundance: "~20% of membrane lipids in animal cells",
                        absence: "Not in prokaryotes (except mycoplasma) or plant cells (plants use other sterols)"
                    },
                    proteins: {
                        proportion: "~50% of membrane mass, but molecules outnumbered by lipids (~50:1 lipid:protein)",
                        integralProteins: {
                            definition: "Permanently embedded in membrane, most are transmembrane (span entire bilayer)",
                            structure: "Hydrophobic regions interact with fatty acid tails; hydrophilic regions protrude into aqueous environments",
                            removal: "Require detergents or organic solvents to remove",
                            examples: "Channel proteins, carrier proteins, receptors",
                            transmembrane: "Cross membrane one or more times (single-pass or multi-pass)"
                        },
                        peripheralProteins: {
                            definition: "Loosely attached to membrane surface (not embedded)",
                            attachment: "Bound to integral proteins or membrane lipids via ionic/hydrogen bonds",
                            location: "Inner or outer surface of membrane",
                            removal: "Easily removed by changes in pH or salt concentration",
                            examples: "Enzymes, structural proteins, signaling proteins"
                        },
                        functions: {
                            transport: "Channels (pores for specific ions/molecules), carriers (bind and transport substances)",
                            enzymatic: "Catalyze reactions at membrane surface (digestive enzymes in intestinal brush border)",
                            signalTransduction: "Receptors bind hormones, neurotransmitters, triggering cellular response",
                            cellRecognition: "Glycoproteins act as ID tags (MHC proteins, ABO blood group antigens)",
                            intercellularJoining: "Membrane proteins of adjacent cells hook together (tight junctions, gap junctions)",
                            attachmentToCytoskeleton: "Anchor membrane to cytoskeleton, maintain cell shape, fix protein positions"
                        },
                        glycoproteins: {
                            structure: "Protein with carbohydrate chains covalently attached",
                            location: "Carbohydrates always face extracellular space",
                            function: "Cell recognition, adhesion, immune response",
                            examples: "Blood type antigens, MHC proteins, antibodies"
                        }
                    },
                    carbohydrates: {
                        location: "Outer surface of membrane only (extracellular side)",
                        attachment: "Attached to proteins (glycoproteins) or lipids (glycolipids)",
                        glycocalyx: "Carbohydrate coat on cell surface",
                        functions: [
                            "Cell-cell recognition (immune system distinguishes self from non-self)",
                            "Tissue formation and cell adhesion",
                            "Receptor sites for hormones and other signals",
                            "Protection (cushioning, lubrication)"
                        ],
                        bloodTypes: "ABO blood types determined by carbohydrate structures on RBCs"
                    }
                },
                asymmetry: "Inner and outer leaflets of bilayer have different lipid and protein compositions (functional specialization)",
                thickness: "~7-10 nm (phospholipid bilayer)"
            },
            
            membraneFluidity: {
                importance: "Essential for membrane function - allows proteins to move, enables vesicle fusion/fission, necessary for cell division, permits lateral movement of receptors",
                factorsAffecting: {
                    temperature: {
                        high: "Increases kinetic energy → more fluid",
                        low: "Decreases kinetic energy → less fluid, can become gel-like",
                        transition: "Phase transition temperature (Tm) - temp at which membrane transitions between fluid and gel state"
                    },
                    fattyAcidSaturation: {
                        saturated: "Straight tails pack tightly → less fluid",
                        unsaturated: "Kinked tails pack loosely → more fluid",
                        adaptation: "Cold-environment organisms have more unsaturated fatty acids in membranes"
                    },
                    fattyAcidLength: {
                        shorter: "Less hydrophobic interaction → more fluid",
                        longer: "More hydrophobic interaction → less fluid"
                    },
                    cholesterol: {
                        effect: "Stabilizes fluidity - restrains movement at high temp, prevents tight packing at low temp",
                        concentration: "Higher cholesterol → more stable fluidity across temperature range"
                    }
                },
                homeoviscousAdaptation: "Cells adjust membrane lipid composition to maintain optimal fluidity when environmental temperature changes",
                example: "Winter wheat increases unsaturated fatty acids in fall → maintains membrane fluidity in cold"
            },
            
            membraneTransport: {
                selectivePermeability: "Membrane allows some substances through but not others - depends on size, charge, polarity",
                permeabilityRules: {
                    highlyPermeable: "Small, nonpolar molecules (O₂, CO₂, N₂, steroid hormones, fatty acids)",
                    somewhatPermeable: "Small, uncharged polar molecules (H₂O, glycerol, ethanol)",
                    impermeable: "Large, polar molecules (glucose, amino acids) and ions (Na⁺, K⁺, Ca²⁺, Cl⁻) - require transport proteins"
                },
                
                passiveTransport: {
                    definition: "Movement down concentration gradient (high to low); no energy (ATP) required",
                    drivingForce: "Concentration gradient (chemical potential energy)",
                    
                    simpleDiffusion: {
                        definition: "Direct passage through phospholipid bilayer",
                        substances: "Small, nonpolar molecules (O₂, CO₂, N₂, benzene)",
                        rate: "Depends on concentration gradient, temperature, molecule size, membrane permeability",
                        fickFirstLaw: "Rate of diffusion ∝ concentration gradient × surface area ÷ distance",
                        limitation: "Cannot transport large, polar, or charged molecules",
                        example: "O₂ diffusing from alveoli into blood, CO₂ from cells into blood"
                    },
                    
                    osmosis: {
                        definition: "Diffusion of water across selectively permeable membrane",
                        direction: "Water moves from high water concentration (low solute) to low water concentration (high solute)",
                        waterPotential: "Ψ (psi) - potential energy of water; water moves from high Ψ to low Ψ",
                        aquaporins: "Water channel proteins - increase rate of water movement (not required for osmosis, but speed it up)",
                        
                        tonicity: {
                            definition: "Relative solute concentration of solution compared to cell",
                            hypertonic: {
                                definition: "Higher solute concentration than cell",
                                waterMovement: "Water leaves cell",
                                animalCells: "Shrivel (crenation) - may die",
                                plantCells: "Plasmolysis (membrane pulls away from wall) - wilting"
                            },
                            hypotonic: {
                                definition: "Lower solute concentration than cell",
                                waterMovement: "Water enters cell",
                                animalCells: "Swell and may burst (lysis) - no cell wall",
                                plantCells: "Turgid (firm) - cell wall prevents bursting, creates turgor pressure"
                            },
                            isotonic: {
                                definition: "Equal solute concentration to cell",
                                waterMovement: "No net movement",
                                effect: "Cell maintains normal shape"
                            }
                        },
                        
                        turgorPressure: {
                            definition: "Pressure of cell contents against cell wall in plant cells",
                            cause: "Water enters cell in hypotonic solution, presses against wall",
                            importance: "Maintains plant structure (rigidity), drives cell expansion",
                            loss: "Wilting occurs when turgor pressure lost (dehydration or hypertonic environment)"
                        },
                        
                        waterPotentialEquation: "Ψ = Ψₛ + Ψₚ (water potential = solute potential + pressure potential)",
                        
                        examples: [
                            "Red blood cells in distilled water swell and burst (hypotonic)",
                            "Red blood cells in seawater shrivel (hypertonic)",
                            "IV fluids must be isotonic (0.9% NaCl) to avoid cell damage",
                            "Plant roots absorb water from soil (hypotonic relative to root cells)",
                            "Food preservation by salting/sugaring (hypertonic environment kills bacteria)"
                        ]
                    },
                    
                    facilitatedDiffusion: {
                        definition: "Passive transport using membrane proteins (down gradient, no ATP)",
                        transportProteins: {
                            channelProteins: {
                                structure: "Form hydrophilic pores through membrane",
                                specificity: "Specific for certain ions or molecules (size and charge selectivity)",
                                types: {
                                    ionChannels: "Allow specific ions (Na⁺, K⁺, Ca²⁺, Cl⁻) to pass",
                                    aquaporins: "Water channels",
                                    gatedChannels: "Open/close in response to signals (voltage-gated, ligand-gated, mechanically-gated)"
                                },
                                rate: "Very fast (millions of ions/molecules per second)",
                                example: "K⁺ channels in neurons"
                            },
                            carrierProteins: {
                                structure: "Bind specific molecule, undergo conformational change, release on other side",
                                mechanism: "Induced fit - binding causes shape change",
                                specificity: "Highly specific (like enzyme-substrate)",
                                rate: "Slower than channels (1000s per second)",
                                saturation: "Can be saturated if all binding sites occupied (transport maximum)",
                                example: "GLUT transporters for glucose"
                            }
                        },
                        characteristics: [
                            "Passive (no ATP required)",
                            "Down concentration gradient",
                            "Specific (requires specific transport protein)",
                            "Saturable (limited by number of transport proteins)",
                            "Faster than simple diffusion for large/polar molecules"
                        ],
                        examples: [
                            "Glucose transport into cells (GLUT1-GLUT5 transporters)",
                            "Ion movement through channels (Na⁺, K⁺, Ca²⁺, Cl⁻)",
                            "Water movement through aquaporins"
                        ]
                    }
                },
                
                activeTransport: {
                    definition: "Movement against concentration gradient (low to high); requires energy (ATP)",
                    purpose: "Maintain concentration gradients, accumulate substances, expel waste",
                    
                    primaryActiveTransport: {
                        definition: "Uses ATP directly to transport substances",
                        mechanism: "ATP hydrolysis provides energy for conformational change in transport protein",
                        
                        sodiumpotassiumPump: {
                            name: "Na⁺/K⁺-ATPase",
                            function: "Maintains Na⁺ and K⁺ gradients across membrane",
                            mechanism: [
                                "3 Na⁺ bind to pump on cytoplasmic side",
                                "ATP hydrolyzed → ADP + Pi, pump phosphorylated",
                                "Conformational change → 3 Na⁺ released outside",
                                "2 K⁺ bind on extracellular side",
                                "Phosphate group released, pump returns to original shape",
                                "2 K⁺ released inside cell"
                            ],
                            stoichiometry: "3 Na⁺ out : 2 K⁺ in : 1 ATP",
                            electrogenic: "Net charge movement (creates voltage difference)",
                            importance: [
                                "Maintains resting membrane potential (neurons)",
                                "Drives secondary active transport",
                                "Regulates cell volume (prevents osmotic swelling)",
                                "Essential for nerve impulses, muscle contraction"
                            ],
                            energyCost: "Uses ~30% of resting cell's ATP (~70% in neurons)",
                            inhibitors: "Ouabain (digitalis) - inhibits pump, used in heart medication"
                        },
                        
                        otherPumps: {
                            calciumPump: "Ca²⁺-ATPase pumps Ca²⁺ out of cytoplasm (into ER or outside cell)",
                            protonPump: "H⁺-ATPase pumps H⁺ (in plants, fungi, bacteria) - acidifies extracellular space"
                        }
                    },
                    
                    secondaryActiveTransport: {
                        definition: "Uses energy stored in electrochemical gradient (created by primary active transport)",
                        mechanism: "One substance moves down gradient, provides energy to move another substance against gradient",
                        
                        types: {
                            symport: {
                                definition: "Both substances move in same direction",
                                example: "Glucose-Na⁺ symporter in intestine - Na⁺ moves down gradient (in), brings glucose against gradient (in)",
                                application: "Glucose absorption in small intestine"
                            },
                            antiport: {
                                definition: "Substances move in opposite directions",
                                example: "Na⁺-H⁺ exchanger - Na⁺ in, H⁺ out",
                                application: "pH regulation"
                            }
                        },
                        
                        examples: [
                            "Glucose uptake in intestinal epithelium (Na⁺-glucose symport)",
                            "Amino acid transport (Na⁺-amino acid symport)",
                            "Na⁺-Ca²⁺ exchanger in heart cells (3 Na⁺ in, 1 Ca²⁺ out)"
                        ],
                        
                        dependence: "Requires Na⁺/K⁺ pump to maintain Na⁺ gradient"
                    }
                },
                
                bulkTransport: {
                    definition: "Transport of large quantities of materials or large particles using vesicles",
                    requiresEnergy: "Yes (ATP for vesicle formation and movement)",
                    
                    endocytosis: {
                        definition: "Cell membrane engulfs material, forms vesicle inside cell",
                        
                        types: {
                            phagocytosis: {
                                name: "Cell eating",
                                process: "Cell engulfs solid particles (bacteria, debris, food)",
                                vesicle: "Phagosome",
                                fate: "Phagosome fuses with lysosome → digestion",
                                cells: "White blood cells (neutrophils, macrophages), amoebas",
                                example: "Macrophage engulfing bacteria"
                            },
                            pinocytosis: {
                                name: "Cell drinking",
                                process: "Cell engulfs liquid droplets (nonspecific)",
                                vesicle: "Pinocytic vesicle (small)",
                                function: "Sampling extracellular fluid",
                                cells: "Most cells (continuous process)",
                                example: "Kidney cells reabsorbing fluids"
                            },
                            receptorMediatedEndocytosis: {
                                name: "Clathrin-mediated endocytosis",
                                process: "Specific molecules bind receptors in coated pits → vesicle formation",
                                specificity: "Highly specific (receptors for specific ligands)",
                                coating: "Clathrin protein coat on cytoplasmic side",
                                vesicle: "Coated vesicle",
                                fate: "Vesicle loses coat, fuses with endosome, contents sorted",
                                examples: [
                                    "LDL cholesterol uptake (LDL receptors)",
                                    "Iron uptake (transferrin receptors)",
                                    "Hormone uptake (insulin receptors)"
                                ],
                                diseases: "Familial hypercholesterolemia (defective LDL receptors)"
                            }
                        }
                    },
                    
                    exocytosis: {
                        definition: "Vesicle fuses with membrane, releases contents outside cell",
                        process: [
                            "Vesicle from Golgi or ER moves to plasma membrane",
                            "Vesicle membrane fuses with plasma membrane",
                            "Contents released into extracellular space",
                            "Vesicle membrane becomes part of plasma membrane"
                        ],
                        types: {
                            constitutive: "Continuous, unregulated (membrane delivery, secretion of extracellular matrix)",
                            regulated: "Triggered by signal (Ca²⁺, hormone) - secretory vesicles stored until signal"
                        },
                        examples: [
                            "Neurotransmitter release at synapse (regulated)",
                            "Hormone secretion (insulin, growth hormone) (regulated)",
                            "Digestive enzyme secretion (pancreas) (regulated)",
                            "Waste removal",
                            "Antibody secretion by B cells"
                        ],
                        importance: "Membrane addition, secretion, waste removal"
                    }
                }
            },
            
            comparison: {
                transportComparison: [
                    ["Type", "Energy", "Gradient", "Protein?", "Examples"],
                    ["Simple Diffusion", "No (passive)", "Down (high→low)", "No", "O₂, CO₂, N₂"],
                    ["Osmosis", "No (passive)", "Down (high H₂O→low H₂O)", "No (aquaporins help)", "Water"],
                    ["Facilitated Diffusion", "No (passive)", "Down (high→low)", "Yes (channel/carrier)", "Glucose, ions"],
                    ["Primary Active Transport", "Yes (ATP)", "Against (low→high)", "Yes (pump)", "Na⁺/K⁺ pump"],
                    ["Secondary Active Transport", "Yes (indirect)", "Against (low→high)", "Yes (cotransporter)", "Glucose-Na⁺ symport"],
                    ["Endocytosis", "Yes (ATP)", "N/A (bulk)", "Yes (many)", "Phagocytosis, LDL uptake"],
                    ["Exocytosis", "Yes (ATP)", "N/A (bulk)", "Yes (many)", "Neurotransmitters, hormones"]
                ]
            },
            
            examples: [
                {
                    process: "Gas Exchange in Lungs",
                    mechanism: "Simple diffusion",
                    explanation: "O₂ diffuses from alveoli (high O₂) into blood (low O₂); CO₂ diffuses from blood (high CO₂) into alveoli (low CO₂)"
                },
                {
                    process: "Nerve Impulse Transmission",
                    mechanism: "Facilitated diffusion (Na⁺ channels), active transport (Na⁺/K⁺ pump)",
                    explanation: "Na⁺ rushes in through voltage-gated channels (depolarization); Na⁺/K⁺ pump restores resting potential"
                },
                {
                    process: "Glucose Absorption in Intestine",
                    mechanism: "Secondary active transport (symport), facilitated diffusion",
                    explanation: "Na⁺-glucose symporter moves glucose from intestinal lumen into epithelial cells; glucose exits via GLUT2 (facilitated diffusion) into blood"
                },
                {
                    process: "White Blood Cell Attacking Bacteria",
                    mechanism: "Phagocytosis",
                    explanation: "Neutrophil or macrophage engulfs bacteria, forms phagosome, fuses with lysosome, digests bacteria"
                }
            ],
            
            applications: [
                "Drug design - understanding membrane permeability predicts drug absorption",
                "IV solutions - must be isotonic to avoid cell damage",
                "Food preservation - hypertonic salt/sugar solutions kill bacteria by osmosis",
                "Dialysis - uses diffusion and osmosis to filter blood in kidney failure",
                "Cystic fibrosis - defective Cl⁻ channel (CFTR) causes thick mucus",
                "Cholera - toxin causes Cl⁻ channels to remain open → water loss → dehydration",
                "Nerve gases/pesticides - inhibit acetylcholinesterase → neurotransmitter accumulation",
                "Liposome drug delivery - phospholipid vesicles deliver drugs into cells"
            ]
        };
        
        return content;
    }

    handleNucleus(problem) {
        const content = {
            topic: "Nucleus: Control Center of the Eukaryotic Cell",
            category: 'organelles',
            summary: "The nucleus is the defining organelle of eukaryotic cells, housing the cell's genetic material (DNA) and coordinating cellular activities including growth, metabolism, protein synthesis, and reproduction through gene expression.",
            
            structure: {
                nuclearEnvelope: {
                    definition: "Double membrane system separating nucleus from cytoplasm",
                    outerMembrane: {
                        structure: "Continuous with rough ER",
                        ribosomes: "May have ribosomes attached (like rough ER)",
                        function: "Connects nuclear membrane system with endomembrane system"
                    },
                    innerMembrane: {
                        structure: "Smooth, lined with nuclear lamina",
                        nuclearLamina: {
                            composition: "Network of intermediate filament proteins (lamins)",
                            function: [
                                "Provides structural support to nuclear envelope",
                                "Organizes chromatin",
                                "Anchors chromosomes",
                                "Involved in DNA replication and cell division"
                            ],
                            dynamics: "Disassembles during cell division (prophase), reassembles after (telophase)"
                        }
                    },
                    perinuclearSpace: {
                        definition: "Space between inner and outer membranes (~20-40 nm)",
                        continuity: "Continuous with ER lumen",
                        function: "May play role in protein sorting"
                    },
                    thickness: "~40 nm total (both membranes + perinuclear space)"
                },
                
                nuclearPores: {
                    number: "3000-4000 pores per nucleus (varies with cell type and activity)",
                    distribution: "Span both inner and outer membranes",
                    nuclearPoreComplex: {
                        structure: "Massive protein complex (~125 million Daltons)",
                        composition: "~30 different proteins (nucleoporins) in multiple copies (~1000 proteins total per NPC)",
                        diameter: "~120 nm diameter, ~70 nm height",
                        centralChannel: "~10 nm diameter (passively permeable), up to ~39 nm (for active transport)",
                        structure: {
                            cytoplasmicFilaments: "Extend into cytoplasm",
                            nuclearBasket: "Extends into nucleoplasm (nuclear side)",
                            spokes: "8-fold symmetry around central channel"
                        }
                    },
                    
                    transport: {
                        passiveDiffusion: {
                            substances: "Small molecules (<40 kDa), ions, water",
                            mechanism: "Diffusion through pore",
                            examples: "Nucleotides, ATP, small metabolites",
                            speed: "Fast, non-selective"
                        },
                        activeTran: {
                            substances: "Large molecules (>40 kDa): proteins, RNA",
                            mechanism: "Receptor-mediated, energy-dependent (GTP)",
                            signals: {
                                NLS: {
                                    name: "Nuclear Localization Signal",
                                    function: "Tags proteins for import into nucleus",
                                    sequence: "Short amino acid sequence (e.g., PKKKRKV in SV40 T antigen)",
                                    examples: "Transcription factors, histones, DNA/RNA polymerases"
                                },
                                NES: {
                                    name: "Nuclear Export Signal",
                                    function: "Tags proteins and RNA for export from nucleus",
                                    examples: "mRNA, tRNA, ribosomal subunits, some proteins"
                                }
                            },
                            receptors: {
                                importins: "Recognize NLS, transport into nucleus",
                                exportins: "Recognize NES, transport out of nucleus",
                                RanGTP: "GTPase providing energy and directionality"
                            }
                        }
                    },
                    
                    regulation: "Number and activity of nuclear pores regulated based on cell's transcriptional activity",
                    
                    importance: [
                        "Separates transcription (nucleus) from translation (cytoplasm) - allows RNA processing",
                        "Regulates which proteins enter nucleus (controls gene expression)",
                        "Exports mature mRNA, tRNA, ribosomal subunits to cytoplasm",
                        "Maintains distinct nuclear and cytoplasmic environments"
                    ]
                },
                
                nucleoplasm: {
                    composition: "Gel-like matrix containing water, ions, enzymes, nucleotides, DNA, RNA, proteins",
                    pH: "~7.0-7.4 (slightly basic)",
                    enzymes: "DNA polymerase, RNA polymerase, DNA repair enzymes, histones, transcription factors",
                    function: "Medium for nuclear processes (replication, transcription, RNA processing)",
                    similar: "Like cytoplasm but within nucleus"
                },
                
                nucleolus: {
                    definition: "Dense, membrane-free region in nucleus",
                    number: "1-4 per nucleus (varies)",
                    composition: "DNA (rRNA genes), RNA (pre-rRNA, rRNA), ribosomal proteins",
                    appearance: "Dark-staining, electron-dense region",
                    
                    function: "Ribosome biogenesis",
                    process: {
                        step1: "Transcription of rRNA genes (by RNA polymerase I) → pre-rRNA",
                        step2: "Processing of pre-rRNA (cleavage, modification) → 18S, 5.8S, 28S rRNA",
                        step3: "Assembly with ribosomal proteins (imported from cytoplasm)",
                        step4: "Formation of small (40S) and large (60S) ribosomal subunits",
                        step5: "Export of subunits through nuclear pores to cytoplasm"
                    },
                    
                    regions: {
                        fibrillarCenter: "rRNA genes (DNA)",
                        denseFibrillarComponent: "Early processing of pre-rRNA",
                        granularComponent: "Late processing, ribosome assembly"
                    },
                    
                    dynamics: {
                        cellDivision: "Disassembles during mitosis (prophase), reforms in daughter cells (telophase)",
                        activity: "Size correlates with ribosome production needs (large in rapidly dividing cells)"
                    },
                    
                    ribosomeProduction: "Cell produces ~10,000 ribosomes per minute",
                    
                    note: "Does NOT have membrane (not surrounded by membrane)"
                }
            },
            
            chromatinAndChromosomes: {
                chromatin: {
                    definition: "Complex of DNA and proteins in nucleus",
                    composition: "~50% DNA, ~50% protein (mostly histones), small amount RNA",
                    function: "Package DNA, regulate gene expression",
                    
                    types: {
                        euchromatin: {
                            structure: "Loosely packed, less condensed",
                            appearance: "Light-staining (light pink with H&E stain)",
                            transcription: "Transcriptionally active - genes can be expressed",
                            location: "Interior of nucleus",
                            percentage: "~90% of genome in active cells"
                        },
                        heterochromatin: {
                            structure: "Tightly packed, highly condensed",
                            appearance: "Dark-staining (dark purple with H&E stain)",
                            transcription: "Transcriptionally inactive - genes silenced",
                            types: {
                                constitutive: "Always condensed (e.g., centromeres, telomeres) - structural, repetitive DNA",
                                facultative: "Condensed in some cells/situations (e.g., Barr body - inactive X chromosome in females)"
                            },
                            location: "Periphery of nucleus (near nuclear envelope), around nucleolus",
                            percentage: "~10% of genome"
                        }
                    },
                    
                    interconversion: "Chromatin state can change - euchromatin ⇌ heterochromatin (epigenetic regulation)"
                },
                
                DNApackaging: {
                    challenge: "Human cell has ~2 meters of DNA to fit in nucleus (~10 μm diameter)",
                    compactionRatio: "~10,000-fold",
                    
                    levelsOfOrganization: {
                        level1: {
                            name: "DNA double helix",
                            diameter: "2 nm",
                            length: "2 meters (human genome)"
                        },
                        level2: {
                            name: "Nucleosome ('beads on string')",
                            structure: "DNA (147 bp) wrapped 1.65 turns around histone octamer",
                            histoneOctamer: "2 copies each of H2A, H2B, H3, H4",
                            linkerDNA: "~20-60 bp between nucleosomes",
                            linkerHistone: "H1 binds linker DNA, stabilizes nucleosome",
                            diameter: "11 nm",
                            compaction: "~6-fold"
                        },
                        level3: {
                            name: "30-nm chromatin fiber",
                            structure: "Nucleosomes coil into solenoid or zigzag structure",
                            role: "H1 histone important for this level",
                            diameter: "30 nm",
                            compaction: "~40-fold total"
                        },
                        level4: {
                            name: "Higher-order loops",
                            structure: "30-nm fiber loops attached to protein scaffold",
                            compaction: "~1000-fold"
                        },
                        level5: {
                            name: "Metaphase chromosome",
                            structure: "Maximum condensation during cell division",
                            diameter: "1400 nm (1.4 μm)",
                            compaction: "~10,000-fold",
                            visibility: "Visible under light microscope"
                        }
                    },
                    
                    histones: {
                        types: "H1, H2A, H2B, H3, H4",
                        octamer: "Core of nucleosome (2 × H2A, H2B, H3, H4)",
                        H1: "Linker histone - binds outside octamer",
                        properties: {
                            charge: "Positively charged (rich in lysine and arginine)",
                            binding: "Electrostatic attraction to negatively charged DNA phosphate backbone",
                            conservation: "Highly conserved across species (especially H3, H4)"
                        },
                        modifications: {
                            acetylation: "Add acetyl group → neutralize positive charge → loosen DNA binding → increase transcription",
                            methylation: "Add methyl group → can activate or repress transcription (depends on which lysine)",
                            phosphorylation: "Add phosphate → change chromatin structure",
                            ubiquitination: "Add ubiquitin → various effects"
                        },
                        epigenetics: "Histone modifications are heritable and regulate gene expression without changing DNA sequence"
                    }
                },
                
                chromosomes: {
                    definition: "Highly condensed chromatin visible during cell division",
                    formation: "Chromatin condenses during prophase",
                    structure: {
                        chromatid: "One copy of replicated chromosome",
                        sisterChromatids: "Two identical chromatids (after DNA replication) joined at centromere",
                        centromere: {
                            definition: "Constricted region where sister chromatids attach",
                            kinetochore: "Protein complex assembled on centromere - attaches to spindle microtubules",
                            function: "Attachment point for spindle fibers during cell division",
                            location: {
                                metacentric: "Centromere in middle (arms equal length)",
                                submetacentric: "Centromere off-center (arms unequal)",
                                acrocentric: "Centromere near end (one arm very short)",
                                telocentric: "Centromere at end (one arm only) - not in humans"
                            }
                        },
                        telomeres: {
                            definition: "Protective caps at chromosome ends",
                            sequence: "TTAGGG repeated thousands of times (in humans)",
                            function: [
                                "Protect chromosome ends from degradation",
                                "Prevent fusion with other chromosomes",
                                "Allow complete replication of chromosome ends"
                            ],
                            shortening: "Telomeres shorten with each cell division (end-replication problem)",
                            aging: "Telomere shortening linked to aging and cell senescence",
                            telomerase: "Enzyme that adds telomere repeats - active in germ cells, stem cells, cancer cells"
                        },
                        arms: {
                            pArm: "Short arm (p = petite)",
                            qArm: "Long arm (q = queue)"
                        }
                    },
                    
                    humanChromosomes: {
                        number: "46 chromosomes (2n = 46) in somatic cells",
                        pairs: "23 pairs: 22 pairs autosomes + 1 pair sex chromosomes",
                        autosomes: "Chromosomes 1-22 (numbered by size, 1 largest)",
                        sexChromosomes: {
                            female: "XX (homogametic)",
                            male: "XY (heterogametic)",
                            Xchromosome: "Larger, ~1000 genes",
                            Ychromosome: "Smaller, ~50-200 genes (mostly male development)"
                        },
                        haploid: "23 chromosomes (n = 23) in gametes (egg, sperm)"
                    },
                    
                    karyotype: {
                        definition: "Visual display of all chromosomes arranged by size and shape",
                        preparation: "Cells arrested in metaphase, stained, photographed, arranged",
                        banding: {
                            Gbanding: "Giemsa stain creates light and dark bands (unique pattern for each chromosome)",
                            uses: "Identify chromosomes, detect abnormalities"
                        },
                        applications: [
                            "Prenatal testing (amniocentesis, CVS)",
                            "Cancer diagnosis (chromosomal abnormalities)",
                            "Diagnosis of genetic disorders (Down syndrome, Turner syndrome)"
                        ]
                    }
                }
            },
            
            nuclearFunctions: {
                DNAreplication: {
                    timing: "S phase of cell cycle",
                    location: "Throughout nucleus",
                    enzymes: "DNA polymerase (α, δ, ε), helicase, primase, ligase",
                    process: "Semiconservative replication - each strand serves as template",
                    result: "Two identical copies of each chromosome (sister chromatids)"
                },
                
                transcription: {
                    definition: "DNA → RNA",
                    location: "Nucleus (eukaryotes)",
                    enzymes: {
                        RNApolI: "Transcribes most rRNA genes (18S, 5.8S, 28S rRNA) in nucleolus",
                        RNApolII: "Transcribes mRNA, most snRNA, miRNA",
                        RNApolIII: "Transcribes tRNA, 5S rRNA, some snRNA"
                    },
                    process: [
                        "Initiation: Transcription factors bind promoter, recruit RNA polymerase",
                        "Elongation: RNA polymerase synthesizes RNA (5'→3' direction)",
                        "Termination: RNA polymerase reaches terminator, releases RNA"
                    ],
                    product: "Pre-mRNA (primary transcript)"
                },
                
                RNAprocessing: {
                    location: "Nucleus",
                    mRNAprocessing: {
                        fivePrimeCapping: {
                            process: "Add 7-methylguanosine cap to 5' end",
                            timing: "During transcription (after ~25 nucleotides)",
                            function: "Protect from degradation, required for ribosome binding, export from nucleus"
                        },
                        splicing: {
                            process: "Remove introns (non-coding), join exons (coding)",
                            machinery: "Spliceosome (snRNPs + proteins)",
                            alternativeSplicing: "Different exon combinations → multiple proteins from one gene",
                            importance: "Increases protein diversity (~100,000 proteins from ~20,000 genes)"
                        },
                        polyadenylation: {
                            process: "Add poly-A tail (~200 adenines) to 3' end",
                            function: "Stabilize mRNA, aid in export, enhance translation"
                        }
                    },
                    tRNAprocessing: "Cleavage, modification of bases",
                    rRNAprocessing: "Cleavage of pre-rRNA, modification, assembly with proteins"
                },
                
                geneRegulation: {
                    chromatinRemodeling: "Change chromatin structure to allow/prevent transcription factor access",
                    transcriptionFactors: "Proteins that bind DNA and regulate transcription",
                    epigeneticModifications: "Histone modifications, DNA methylation",
                    nuclearHormoneReceptors: "Bind hormones, regulate gene expression (steroids, thyroid hormone)"
                },
                
                ribosomeAssembly: "In nucleolus - assemble ribosomal subunits"
            },
            
            nucleusMembrane: {
                separation: "Physical separation of transcription and translation",
                advantages: [
                    "RNA processing before translation (remove introns, add cap and tail)",
                    "Quality control (only processed mRNA exported)",
                    "Protection of DNA from cytoplasmic enzymes",
                    "Allows complex regulation of gene expression",
                    "Permits alternative splicing"
                ],
                disadvantages: [
                    "More complex (requires nuclear pores, transport machinery)",
                    "Slower gene expression (transcription-translation coupling not possible like in prokaryotes)"
                ]
            },
            
            comparison: {
                prokaryoticVsEukaryotic: [
                    ["Feature", "Prokaryotic", "Eukaryotic"],
                    ["Nucleus", "No (nucleoid region)", "Yes (membrane-bound)"],
                    ["DNA location", "Cytoplasm (nucleoid)", "Nucleus"],
                    ["DNA structure", "Circular, no histones (except archaea)", "Linear, associated with histones"],
                    ["Transcription location", "Cytoplasm", "Nucleus"],
                    ["Translation location", "Cytoplasm", "Cytoplasm (ribosomes)"],
                    ["Transcription-translation", "Coupled (simultaneous)", "Separated (transcription in nucleus, translation in cytoplasm)"],
                    ["RNA processing", "None (or minimal)", "Extensive (capping, splicing, polyadenylation)"],
                    ["Gene regulation", "Primarily at transcription", "Multiple levels (chromatin, transcription, RNA processing, translation)"]
                ]
            },
            
            examples: [
                {
                    process: "Protein Synthesis of Nuclear Protein",
                    steps: [
                        "1. Gene transcribed in nucleus → pre-mRNA",
                        "2. Pre-mRNA processed → mature mRNA",
                        "3. mRNA exported through nuclear pore",
                        "4. mRNA translated by ribosome in cytoplasm → protein with NLS",
                        "5. Protein imported back into nucleus via importin",
                        "6. Protein functions in nucleus (e.g., transcription factor)"
                    ]
                },
                {
                    process: "Ribosome Production",
                    steps: [
                        "1. rRNA genes transcribed in nucleolus → pre-rRNA",
                        "2. pre-rRNA processed and assembled with ribosomal proteins (imported from cytoplasm)",
                        "3. Small (40S) and large (60S) subunits formed",
                        "4. Subunits exported separately through nuclear pores",
                        "5. Subunits join during translation initiation in cytoplasm"
                    ]
                }
            ],
            
            applications: [
                "Cancer diagnosis - abnormal nuclei (enlarged, irregular, multiple nucleoli) indicate cancer",
                "Genetic testing - karyotyping detects chromosomal abnormalities (Down syndrome, Turner syndrome)",
                "Understanding aging - telomere shortening, nuclear envelope changes",
                "Drug development - targeting nuclear transport, transcription, chromatin modification",
                "Stem cell biology - nuclear reprogramming to create induced pluripotent stem cells (iPSCs)",
                "Forensic science - nuclear DNA profiling for identification",
                "Prenatal diagnosis - examining fetal cells for genetic disorders",
                "Understanding diseases - laminopathies (defects in nuclear lamina), progeria (premature aging)"
            ]
        };
        
        return content;
    }

    handleMitochondria(problem) {
        const content = {
            topic: "Mitochondria: Powerhouse of the Cell",
            category: 'organelles',
            summary: "Mitochondria are double-membrane organelles responsible for producing most of the cell's ATP through cellular respiration. They have their own DNA and ribosomes, evidence of their evolutionary origin from endosymbiotic bacteria.",
            
            structure: {
                overview: {
                    shape: "Oval, rod-shaped, or elongated; dynamic (can fuse, divide, move along cytoskeleton)",
                    size: "0.5-10 μm length, 0.5-1 μm diameter (vary by cell type)",
                    number: "Varies widely by cell type and energy demand",
                    examples: {
                        liver: "~2000 mitochondria per cell",
                        muscle: "~1000-2000 (high energy demand)",
                        redBloodCells: "0 (no mitochondria when mature - no nucleus either)",
                        oocytes: "~100,000 (provide energy for early development)",
                        skinCells: "~200-300"
                    },
                    distribution: "Concentrated where ATP needed most (e.g., near contractile proteins in muscle, synapses in neurons)"
                },
                
                outerMembrane: {
                    structure: "Smooth, similar composition to cell membrane",
                    composition: "~50% protein, 50% lipid",
                    permeability: "Highly permeable due to porins",
                    porins: {
                        name: "VDAC (voltage-dependent anion channel)",
                        function: "Allow passage of molecules <5000 Da (ATP, ADP, pyruvate, ions, metabolites)",
                        result: "Intermembrane space composition similar to cytosol (except for proteins)"
                    },
                    proteins: "Enzymes for lipid synthesis, fatty acid metabolism"
                },
                
                innerMembrane: {
                    structure: "Highly folded into cristae",
                    cristae: {
                        definition: "Folds of inner membrane extending into matrix",
                        function: "Increase surface area for electron transport chain and ATP synthase",
                        surfaceArea: "~5× greater than outer membrane due to cristae",
                        shape: {
                            lamellar: "Shelf-like folds (most common)",
                            tubular: "Tube-like projections (some cells, e.g., steroid-producing cells)"
                        },
                        variability: "Number and shape vary with metabolic state and cell type"
                    },
                    composition: "~80% protein, 20% lipid (high protein:lipid ratio)",
                    cardiolipin: {
                        definition: "Unique phospholipid with 4 fatty acid tails",
                        abundance: "~20% of inner membrane lipids",
                        function: "Stabilizes protein complexes (ETC), makes membrane impermeable to protons",
                        note: "Found almost exclusively in mitochondria (also in bacterial membranes - evolutionary evidence)"
                    },
                    permeability: "Highly impermeable - essential for maintaining H⁺ gradient",
                    transport: "Selective transport proteins for specific molecules (pyruvate, fatty acids, ADP/ATP)",
                    proteins: {
                        electronTransportChain: "Complexes I, II, III, IV (cytochrome c oxidase)",
                        ATPsynthase: "Complex V - produces ATP",
                        transporters: "Shuttle ADP, ATP, pyruvate, etc."
                    }
                },
                
                intermembraneSpace: {
                    location: "Space between outer and inner membranes (~6-8 nm wide)",
                    composition: "Similar to cytosol (due to porous outer membrane) but contains H⁺ pumped by ETC",
                    pH: "~7.0 (lower than matrix ~7.8 due to H⁺ accumulation)",
                    protonGradient: "High [H⁺] in intermembrane space, low [H⁺] in matrix",
                    function: "H⁺ gradient drives ATP synthesis",
                    proteins: "Cytochrome c (electron carrier), enzymes"
                },
                
                matrix: {
                    definition: "Gel-like substance enclosed by inner membrane",
                    pH: "~7.8 (higher than intermembrane space)",
                    composition: "Enzymes, mitochondrial DNA, ribosomes, tRNA, ions (Ca²⁺, Mg²⁺, K⁺), metabolites",
                    enzymes: {
                        krebsCycle: "Citrate synthase, isocitrate dehydrogenase, α-ketoglutarate dehydrogenase, etc.",
                        fattyAcidOxidation: "Beta-oxidation enzymes",
                        other: "Pyruvate dehydrogenase complex, glutamate dehydrogenase"
                    },
                    mitochondrialDNA: {
                        structure: "Circular, double-stranded (like bacterial DNA)",
                        size: "16,569 base pairs in humans (very small compared to nuclear genome)",
                        genes: {
                            proteins: "13 genes encoding ETC subunits",
                            rRNA: "2 genes (12S and 16S rRNA for mitochondrial ribosomes)",
                            tRNA: "22 genes (enough for mitochondrial translation)"
                        },
                        copiesPerMitochondrion: "2-10 copies",
                        totalPerCell: "1000-10,000 copies (multiple mitochondria × multiple copies per mitochondrion)",
                        inheritance: "Maternal (from egg cytoplasm only; sperm mitochondria degraded)",
                        mutationRate: "~10-17× higher than nuclear DNA (no protective histones, high oxidative stress)",
                        geneticCode: "Slightly different from universal code (e.g., UGA codes for tryptophan instead of stop)"
                    },
                    mitochondrialRibosomes: {
                        type: "70S (like bacterial, not 80S like eukaryotic cytoplasmic)",
                        subunits: "Small (28S) + Large (39S) → 55S-60S (unusual S value due to high protein:rRNA ratio)",
                        function: "Translate 13 mitochondrial mRNAs",
                        note: "Most mitochondrial proteins (~1000-1500 total) encoded by nuclear DNA, imported from cytoplasm"
                    }
                }
            },
            
            functions: {
                ATPproduction: {
                    process: "Cellular respiration - main function",
                    stages: {
                        glycolysis: {
                            location: "Cytoplasm (NOT in mitochondria)",
                            input: "Glucose (6C)",
                            output: "2 Pyruvate (3C), 2 ATP (substrate-level), 2 NADH",
                            note: "Anaerobic process - doesn't require O₂"
                        },
                        linkReaction: {
                            name: "Pyruvate oxidation",
                            location: "Mitochondrial matrix",
                            input: "2 Pyruvate",
                            output: "2 Acetyl-CoA, 2 NADH, 2 CO₂",
                            enzyme: "Pyruvate dehydrogenase complex"
                        },
                        krebsCycle: {
                            name: "Citric acid cycle, TCA cycle",
                            location: "Mitochondrial matrix",
                            input: "2 Acetyl-CoA",
                            output: "2 ATP (GTP), 6 NADH, 2 FADH₂, 4 CO₂",
                            cyclesPerGlucose: "2 (one per acetyl-CoA)",
                            function: "Oxidize acetyl-CoA, produce electron carriers (NADH, FADH₂)"
                        },
                        electronTransportChain: {
                            location: "Inner mitochondrial membrane",
                            input: "NADH, FADH₂, O₂",
                            output: "H₂O, H⁺ gradient",
                            complexes: {
                                complexI: "NADH dehydrogenase - oxidizes NADH, pumps 4 H⁺",
                                complexII: "Succinate dehydrogenase - oxidizes FADH₂, no H⁺ pumping",
                                complexIII: "Cytochrome bc1 - pumps 4 H⁺",
                                complexIV: "Cytochrome c oxidase - pumps 2 H⁺, reduces O₂ to H₂O",
                                coenzyme: "CoQ (ubiquinone), cytochrome c shuttle electrons"
                            },
                            process: [
                                "Electrons from NADH/FADH₂ pass through complexes",
                                "Energy released pumps H⁺ from matrix to intermembrane space",
                                "Creates electrochemical gradient (high [H⁺] outside, low inside + voltage difference)",
                                "O₂ is final electron acceptor: O₂ + 4e⁻ + 4H⁺ → 2H₂O"
                            ],
                            importance: "Without O₂, ETC stops, ATP production plummets"
                        },
                        chemiosmosis: {
                            location: "Inner membrane (ATP synthase)",
                            mechanism: "H⁺ flows down gradient (intermembrane space → matrix) through ATP synthase",
                            coupling: "Flow of H⁺ drives rotation of ATP synthase → ATP synthesis",
                            equation: "ADP + Pi → ATP",
                            yield: "~3 ATP per NADH, ~2 ATP per FADH₂",
                            ATPsynthase: {
                                structure: "F₀ (membrane channel) + F₁ (catalytic head)",
                                mechanism: "Proton flow rotates F₀ → conformational changes in F₁ → ATP synthesis",
                                bindingChangeMechanism: "Three catalytic sites alternate conformations (L→T→O→L...)"
                            }
                        }
                    },
                    totalATPyield: {
                        glycolysis: "2 ATP + 2 NADH (→5 ATP)",
                        linkReaction: "2 NADH (→5 ATP)",
                        krebsCycle: "2 ATP + 6 NADH (→15 ATP) + 2 FADH₂ (→3 ATP)",
                        total: "~30-32 ATP per glucose (varies with shuttle system)",
                        note: "Theoretical maximum 38 ATP, but transport costs reduce actual yield"
                    },
                    efficiency: "~40% of glucose energy captured as ATP; rest released as heat"
                },
                
                otherFunctions: {
                    heatProduction: {
                        mechanism: "Uncoupling proteins (UCPs) allow H⁺ to bypass ATP synthase",
                        result: "Energy released directly as heat instead of ATP",
                        brownFat: "Abundant mitochondria with UCP1 - generates heat (thermogenesis)",
                        importance: "Maintains body temperature (especially in newborns, hibernating animals)",
                        location: "Brown adipose tissue (upper back, neck in humans)"
                    },
                    calciumRegulation: {
                        function: "Sequester and release Ca²⁺ to regulate cytoplasmic [Ca²⁺]",
                        importance: "Ca²⁺ is second messenger in signaling; regulates muscle contraction, secretion",
                        mechanism: "Ca²⁺ uniporter imports Ca²⁺; Na⁺/Ca²⁺ exchanger exports Ca²⁺"
                    },
                    apoptosis: {
                        trigger: "Mitochondria release cytochrome c when cell damaged",
                        cascade: "Cytochrome c activates caspases → programmed cell death",
                        function: "Eliminate damaged/infected cells, regulate cell number during development",
                        note: "Prevents necrosis (uncontrolled cell death causing inflammation)"
                    },
                    biosynthesis: {
                        heme: "Synthesize heme (for hemoglobin, myoglobin, cytochromes)",
                        FeSclusters: "Assemble iron-sulfur clusters (cofactors for enzymes)",
                        steroids: "Initial steps of steroid hormone synthesis (in adrenal cortex, gonads)"
                    },
                    fattyAcidOxidation: {
                        process: "Beta-oxidation breaks down fatty acids → acetyl-CoA",
                        location: "Mitochondrial matrix",
                        yield: "Generates NADH, FADH₂ → ATP"
                    }
                }
            },
            
            endosymbioticTheory: {
                hypothesis: "Mitochondria originated from aerobic prokaryotes (alpha-proteobacteria) engulfed by ancestral eukaryotic cell ~2 billion years ago",
                mutualism: "Host provided protection, nutrients; bacterium provided ATP",
                evidence: {
                    doubleMembrane: "Inner membrane from original bacterium, outer from host cell (phagocytic vesicle)",
                    ownDNA: "Circular DNA like bacteria (not linear like eukaryotic nuclear DNA)",
                    ownRibosomes: "70S ribosomes (like bacteria), not 80S (like eukaryotic cytoplasm)",
                    reproduction: "Divide by binary fission (like bacteria), independent of cell division",
                    geneticSimilarity: "Mitochondrial genes similar to alpha-proteobacteria genes",
                    antibiotics: "Some antibiotics inhibiting bacterial protein synthesis also affect mitochondria (streptomycin, chloramphenicol)",
                    maternalInheritance: "Mitochondria from egg cytoplasm only (like inheritance from single bacterial ancestor)",
                    membraneComposition: "Cardiolipin in inner membrane (found in bacteria, rare in eukaryotes)"
                },
                geneTransfer: "Over evolution, most mitochondrial genes transferred to nuclear genome (~1000-1500 mitochondrial proteins now nuclear-encoded)",
                dependency: "Mitochondria can no longer survive independently (lost essential genes)",
                proposedBy: "Lynn Margulis (1967) - initially controversial, now widely accepted",
                significance: "Explains major evolutionary transition; origin of aerobic eukaryotic cells"
            },
            
            mitochondrialDiseases: {
                causes: "Mutations in mitochondrial DNA (mtDNA) or nuclear DNA encoding mitochondrial proteins",
                inheritance: "Maternal (mtDNA diseases) or Mendelian (nuclear gene mutations)",
                heteroplasmy: "Mix of normal and mutant mitochondria in cell; severity depends on proportion",
                thresholdEffect: "Disease symptoms appear when proportion of mutant mitochondria exceeds threshold (~60-90%)",
                affectedTissues: "Organs with high energy demand most affected: brain, heart, muscles, liver, kidneys, eyes",
                symptoms: "Muscle weakness, exercise intolerance, neurological problems, seizures, developmental delays, organ failure",
                examples: {
                    MELAS: "Mitochondrial encephalomyopathy, lactic acidosis, stroke-like episodes",
                    MERRF: "Myoclonic epilepsy with ragged red fibers (abnormal mitochondrial accumulation in muscle)",
                    Leber: "Leber's hereditary optic neuropathy - vision loss due to optic nerve degeneration",
                    Pearson: "Pearson syndrome - bone marrow failure, pancreatic insufficiency (often fatal in infancy)",
                    KSS: "Kearns-Sayre syndrome - muscle weakness, heart problems, vision loss"
                },
                diagnosis: "Muscle biopsy (ragged red fibers with modified Gomori trichrome stain), genetic testing, lactic acid levels",
                treatment: "No cure; supportive care (supplements, CoQ10, vitamins, diet modifications, exercise)"
            },
            
            mitochondrialDynamics: {
                fusion: "Mitochondria fuse together → exchange contents, complement defective mitochondria",
                fission: "Mitochondria divide → increase number, segregate damaged regions",
                movement: "Move along microtubules (kinesin, dynein motors) to areas of high ATP demand",
                importance: "Maintain mitochondrial health (mitophagy - remove damaged mitochondria), distribute ATP production, respond to energy needs",
                proteins: {
                    fusion: "Mitofusins (Mfn1, Mfn2), OPA1",
                    fission: "Drp1 (dynamin-related protein)",
                    movement: "Kinesin (anterograde), dynein (retrograde)"
                },
                regulation: "Regulated by cell's metabolic state, Ca²⁺ levels, signaling pathways"
            },
            
            comparison: {
                mitochondriaVsChloroplasts: [
                    ["Feature", "Mitochondria", "Chloroplasts"],
                    ["Found in", "All eukaryotes", "Plants, algae only"],
                    ["Function", "Cellular respiration (ATP)", "Photosynthesis (glucose)"],
                    ["Energy", "Release energy (catabolic)", "Store energy (anabolic)"],
                    ["Reactants", "Glucose, O₂", "CO₂, H₂O, light"],
                    ["Products", "CO₂, H₂O, ATP", "Glucose, O₂"],
                    ["Membranes", "Double (outer, inner with cristae)", "Double + thylakoids (third membrane system)"],
                    ["DNA", "Circular (~16.5 kb)", "Circular (~120-200 kb)"],
                    ["Ribosomes", "70S", "70S"],
                    ["Origin", "Alpha-proteobacteria (~2 bya)", "Cyanobacteria (~1.5 bya)"],
                    ["Pigments", "None", "Chlorophyll, carotenoids"]
                ]
            },
            
            examples: [
                {
                    cell: "Muscle Cells",
                    mitochondria: "1000-2000 per cell, densely packed near myofibrils",
                    reason: "High ATP demand for contraction",
                    note: "Endurance training increases mitochondrial density"
                },
                {
                    cell: "Neurons",
                    mitochondria: "Concentrated at synapses and along axon",
                    reason: "ATP for neurotransmitter release, ion pumps (Na⁺/K⁺-ATPase)",
                    note: "Mitochondrial dysfunction linked to neurodegenerative diseases"
                },
                {
                    cell: "Liver Cells",
                    mitochondria: "~2000 per cell, ~18% of cell volume",
                    reason: "High metabolic activity (detoxification, synthesis, metabolism)",
                    note: "Liver has highest metabolic rate per mass"
                },
                {
                    cell: "Red Blood Cells (mature)",
                    mitochondria: "0",
                    reason: "No nucleus or organelles; rely on glycolysis for ATP",
                    note: "More space for hemoglobin; prevents O₂ consumption by cell itself"
                }
            ],
            
            applications: [
                "Understanding metabolic diseases (diabetes, obesity, mitochondrial diseases)",
                "Aging research (mitochondrial decline with age, oxidative stress, telomere shortening)",
                "Cancer therapy (cancer cells have altered metabolism - Warburg effect)",
                "Exercise physiology (mitochondrial biogenesis with endurance training)",
                "Drug development (targeting mitochondria, improving function)",
                "Forensic science (mitochondrial DNA analysis for identification, maternal lineage)",
                "Infertility treatment (mitochondrial replacement therapy for mtDNA diseases)",
                "Neurodegenerative diseases (Parkinson's, Alzheimer's - mitochondrial dysfunction)",
                "Understanding evolution (endosymbiotic theory)"
            ]
        };
        
        return content;
    }

    handleChloroplasts(problem) {
        const content = {
            topic: "Chloroplasts: Photosynthesis Organelles",
            category: 'organelles',
            summary: "Chloroplasts are double-membrane organelles found in plant cells and algae that convert light energy into chemical energy (glucose) through photosynthesis. Like mitochondria, they contain their own DNA and originated from endosymbiotic cyanobacteria.",
            
            structure: {
                overview: {
                    shape: "Lens-shaped, disc-shaped, or ellipsoidal",
                    size: "5-10 μm length, 2-3 μm width (larger than mitochondria)",
                    number: "20-100 per mesophyll cell (varies by cell type)",
                    distribution: "Most abundant in leaf mesophyll cells (palisade and spongy layers)",
                    movement: "Can move within cell to optimize light capture (chloroplast avoidance/accumulation response)",
                    color: "Green (due to chlorophyll)"
                },
                
                outerMembrane: {
                    structure: "Smooth, similar to cell membrane",
                    permeability: "Contains porins - permeable to molecules <10,000 Da",
                    function: "Protective barrier, regulate larger molecules",
                    composition: "~50% lipid, 50% protein"
                },
                
                innerMembrane: {
                    structure: "Smooth, encloses stroma",
                    permeability: "Selectively permeable (transport proteins for specific molecules)",
                    function: "Regulate entry of metabolites, ions",
                    transporters: "Phosphate translocator (triose phosphate exporter), ATP/ADP exchanger"
                },
                
                intermembraneSpace: {
                    width: "~10-20 nm",
                    function: "Less significant for energy conversion than mitochondrial intermembrane space",
                    composition: "Similar to cytosol (due to porins in outer membrane)"
                },
                
                thylakoidMembrane: {
                    definition: "Third internal membrane system unique to chloroplasts",
                    structure: "Flattened membrane sacs (thylakoids)",
                    arrangement: {
                        grana: {
                            definition: "Stacks of thylakoids (like stack of pancakes)",
                            number: "10-20 thylakoids per granum, 40-60 grana per chloroplast",
                            function: "Site of light-dependent reactions (PSII-enriched)",
                            stacking: "Increases surface area, allows efficient energy transfer"
                        },
                        stromaThylakoids: {
                            definition: "Unstacked thylakoids connecting grana",
                            function: "Connect grana, site of PSI and ATP synthase",
                            note: "Also called lamellae or frets"
                        },
                        granamThylakoids: {
                            definition: "Thylakoids within grana stacks",
                            enriched: "PSII, LHCII (light-harvesting complex II)"
                        }
                    },
                    
                    components: {
                        photosystems: {
                            photosystemII: {
                                location: "Grana thylakoids",
                                function: "Absorb light (P680), split water, release O₂, energize electrons",
                                P680: "Reaction center chlorophyll (absorbs 680 nm light)",
                                process: "H₂O → ½O₂ + 2H⁺ + 2e⁻ (photolysis)",
                                note: "PSII comes first in process but named second (discovered after PSI)"
                            },
                            photosystemI: {
                                location: "Stroma thylakoids and grana margins",
                                function: "Absorb light (P700), reduce NADP⁺ to NADPH",
                                P700: "Reaction center chlorophyll (absorbs 700 nm light)",
                                process: "NADP⁺ + H⁺ + 2e⁻ → NADPH"
                            }
                        },
                        cytochromeb6fComplex: {
                            function: "Electron transport between PSII and PSI, pumps H⁺ into lumen",
                            analogous: "Similar to Complex III in mitochondria"
                        },
                        ATPsynthase: {
                            location: "Stroma thylakoids",
                            function: "Synthesize ATP using H⁺ gradient",
                            direction: "H⁺ flows from lumen → stroma"
                        }
                    },
                    
                    thylakoidLumen: {
                        definition: "Space inside thylakoid",
                        pH: "~5 (acidic) due to H⁺ accumulation",
                        function: "H⁺ gradient drives ATP synthesis",
                        gradient: "High [H⁺] in lumen, low [H⁺] in stroma (opposite of mitochondria)"
                    },
                    
                    pigments: {
                        chlorophylla: {
                            color: "Blue-green",
                            absorption: "Red (~660 nm) and blue (~430 nm) light",
                            reflection: "Green (~550 nm) - gives plants green color",
                            location: "Reaction centers (P680, P700) and antenna complexes",
                            abundance: "Most abundant pigment",
                            formula: "C₅₅H₇₂O₅N₄Mg"
                        },
                        chlorophyllb: {
                            color: "Yellow-green",
                            absorption: "Blue (~460 nm) and orange-red (~640 nm)",
                            function: "Accessory pigment, expands absorption range",
                            ratio: "Chlorophyll a : b ≈ 3:1",
                            difference: "CH₃ group in chl-a replaced by CHO in chl-b"
                        },
                        carotenoids: {
                            types: "Carotenes (orange) and xanthophylls (yellow)",
                            absorption: "Blue-green light (450-550 nm)",
                            functions: [
                                "Accessory pigments - absorb light, transfer energy to chlorophyll",
                                "Photoprotection - dissipate excess light energy as heat",
                                "Antioxidants - protect chlorophyll from oxidative damage"
                            ],
                            fallColors: "Revealed when chlorophyll degrades in autumn",
                            examples: "β-carotene (orange), lutein (yellow), zeaxanthin (yellow)"
                        },
                        organization: {
                            antennComplex: "100-200 pigment molecules (chlorophyll + carotenoids) funnel energy to reaction center",
                            reactionCenter: "Special pair of chlorophyll a molecules (P680, P700)",
                            LHCII: "Light-harvesting complex II - most abundant membrane protein on Earth"
                        }
                    }
                },
                
                stroma: {
                    definition: "Fluid-filled space surrounding thylakoids (like mitochondrial matrix)",
                    pH: "~8 (basic, opposite of lumen)",
                    composition: "Enzymes, DNA, ribosomes, tRNA, starch granules, lipid droplets, ions",
                    
                    enzymes: {
                        calvinCycle: "RuBisCO, phosphoglycerate kinase, glyceraldehyde-3-phosphate dehydrogenase, etc.",
                        RuBisCO: {
                            name: "Ribulose-1,5-bisphosphate carboxylase/oxygenase",
                            function: "Fixes CO₂ to RuBP (CO₂ + RuBP → 2 × 3-PGA)",
                            abundance: "Most abundant enzyme on Earth (~50% of chloroplast protein)",
                            efficiency: "Slow (fixes ~3 CO₂/sec) and makes mistakes (also binds O₂ → photorespiration)",
                            location: "Stroma",
                            note: "Rate-limiting step of carbon fixation"
                        }
                    },
                    
                    chloroplastDNA: {
                        structure: "Circular, double-stranded (like bacterial DNA)",
                        size: "120,000-200,000 base pairs (larger than mitochondrial DNA)",
                        genes: "~100-120 genes",
                        encodes: {
                            proteins: "~80 genes (photosystem subunits, RuBisCO large subunit, RNA polymerase, ribosomal proteins)",
                            rRNA: "4 genes (16S, 23S, 5S, 4.5S rRNA)",
                            tRNA: "~30 genes"
                        },
                        copiesPerChloroplast: "20-40 copies (multiple nucleoids)",
                        inheritance: "Maternal in most plants (from egg cytoplasm)",
                        note: "Most chloroplast proteins (~3000 total) encoded by nuclear DNA"
                    },
                    
                    chloroplastRibosomes: {
                        type: "70S (like bacterial, not 80S)",
                        subunits: "30S + 50S → 70S",
                        function: "Translate chloroplast mRNAs",
                        similarity: "Similar to bacterial ribosomes (evidence for endosymbiotic origin)"
                    },
                    
                    starchGrains: {
                        definition: "Temporary storage of photosynthetic products as starch",
                        formation: "Excess G3P → glucose → starch (during day)",
                        breakdown: "Starch → glucose → sucrose for export (at night)",
                        appearance: "Large, white granules visible in electron microscopy"
                    }
                }
            },
            
            photosynthesis: {
                overallEquation: "6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂",
                note: "O₂ comes from H₂O, not CO₂ (shown by isotope labeling experiments)",
                
                twoStages: {
                    lightDependentReactions: {
                        name: "Light reactions, photophosphorylation",
                        location: "Thylakoid membrane",
                        input: "Light, H₂O, NADP⁺, ADP + Pi",
                        output: "O₂, NADPH, ATP",
                        
                        process: {
                            step1: {
                                name: "Photoexcitation at PSII",
                                event: "Light excites electrons in P680 chlorophyll to higher energy state"
                            },
                            step2: {
                                name: "Water splitting (photolysis)",
                                event: "PSII splits H₂O → 2H⁺ + ½O₂ + 2e⁻",
                                enzyme: "Oxygen-evolving complex (OEC) with Mn-Ca cluster",
                                note: "Source of atmospheric O₂"
                            },
                            step3: {
                                name: "Electron transport to PSI",
                                event: "Electrons from PSII → plastoquinone (PQ) → cytochrome b₆f → plastocyanin (PC) → PSI",
                                protonPumping: "Cytochrome b₆f pumps H⁺ into lumen (creates gradient)"
                            },
                            step4: {
                                name: "Photoexcitation at PSI",
                                event: "Light re-energizes electrons at P700"
                            },
                            step5: {
                                name: "NADPH formation",
                                event: "Electrons from PSI → ferredoxin (Fd) → ferredoxin-NADP⁺ reductase (FNR) → NADP⁺ + H⁺ → NADPH"
                            },
                            step6: {
                                name: "ATP synthesis (photophosphorylation)",
                                event: "H⁺ flows from lumen → stroma through ATP synthase → ADP + Pi → ATP",
                                mechanism: "Chemiosmosis (like mitochondria but opposite direction)"
                            }
                        },
                        
                        types: {
                            nonCyclicPhotophosphorylation: {
                                path: "PSII → PSI (one-way, linear)",
                                products: "ATP + NADPH + O₂",
                                ratio: "~1.3 ATP : 1 NADPH",
                                note: "Main pathway"
                            },
                            cyclicPhotophosphorylation: {
                                path: "PSI only (electrons cycle back to PSI)",
                                products: "ATP only (no NADPH, no O₂)",
                                function: "Produces extra ATP when needed (Calvin cycle needs more ATP than NADPH)",
                                note: "No water splitting, no NADP⁺ reduction"
                            }
                        }
                    },
                    
                    lightIndependentReactions: {
                        name: "Calvin cycle, dark reactions, carbon fixation",
                        location: "Stroma",
                        input: "CO₂, ATP, NADPH (from light reactions)",
                        output: "G3P (glyceraldehyde-3-phosphate) → glucose",
                        note: "Called 'dark reactions' but actually occur during day (require ATP and NADPH from light reactions)",
                        
                        phases: {
                            phase1_CarbonFixation: {
                                enzyme: "RuBisCO",
                                reaction: "CO₂ + RuBP (5C) → unstable 6C intermediate → 2 × 3-PGA (3C)",
                                note: "CO₂ attached to RuBP (ribulose-1,5-bisphosphate)"
                            },
                            phase2_Reduction: {
                                reactions: [
                                    "3-PGA + ATP → 1,3-bisphosphoglycerate + ADP",
                                    "1,3-bisphosphoglycerate + NADPH → G3P + NADP⁺ + Pi"
                                ],
                                products: "G3P (glyceraldehyde-3-phosphate, 3C)",
                                note: "Uses ATP and NADPH from light reactions"
                            },
                            phase3_Regeneration: {
                                process: "5 G3P (15C total) → 3 RuBP (15C total)",
                                uses: "ATP",
                                purpose: "Regenerate RuBP to continue cycle"
                            }
                        },
                        
                        stoichiometry: {
                            input: "3 CO₂ + 9 ATP + 6 NADPH",
                            output: "1 G3P (net) + 9 ADP + 8 Pi + 6 NADP⁺",
                            glucose: "2 G3P → 1 glucose (6C)",
                            forOneGlucose: "6 turns of Calvin cycle: 6 CO₂ + 18 ATP + 12 NADPH → 1 glucose"
                        },
                        
                        fate: {
                            G3P: "Can be used to make glucose, sucrose, starch, fatty acids, amino acids, cellulose",
                            export: "Triose phosphate translocator exports G3P to cytosol for sucrose synthesis"
                        }
                    }
                },
                
                efficiency: {
                    theoretical: "~28% of light energy converted to chemical energy (glucose)",
                    actual: "~3-6% in C3 plants (losses due to reflection, photorespiration, respiration)",
                    C4CAM: "~4-8% (more efficient due to CO₂-concentrating mechanisms)"
                },
                
                limitingFactors: {
                    lightIntensity: "Low light → rate limited; high light → saturation",
                    CO2concentration: "Low CO₂ → rate limited (especially in C3 plants)",
                    temperature: "Low temp → enzymes slow; high temp → enzymes denature, stomata close",
                    water: "Low water → stomata close to prevent water loss → reduced CO₂ uptake",
                    minerals: "Nitrogen (for chlorophyll), magnesium (chlorophyll center), phosphorus (ATP)"
                },
                
                photorespiration: {
                    problem: "RuBisCO also binds O₂ (oxygenase activity) → wasteful process",
                    reaction: "O₂ + RuBP → 3-PGA + phosphoglycolate (2C)",
                    salvage: "Phosphoglycolate → glycolate → peroxisome and mitochondrion → CO₂ released (loss of fixed carbon)",
                    cost: "Consumes ATP, releases CO₂, no ATP/NADPH produced",
                    conditions: "Favored at high O₂, low CO₂, high temperature (stomata close)",
                    reduction: "C4 and CAM plants minimize photorespiration"
                }
            },
            
            adaptations: {
                C3plants: {
                    process: "Standard Calvin cycle (first product is 3C 3-PGA)",
                    efficiency: "Lower in hot, dry conditions (photorespiration)",
                    examples: "Most plants: wheat, rice, soybean, spinach, trees",
                    advantage: "Simple, works well in cool, moist climates",
                    disadvantage: "Photorespiration in hot, dry, high O₂ conditions"
                },
                C4plants: {
                    adaptation: "CO₂-concentrating mechanism in bundle sheath cells",
                    process: {
                        mesophyll: "CO₂ fixed by PEP carboxylase → 4C oxaloacetate → malate",
                        bundleSheath: "Malate → CO₂ + pyruvate; CO₂ enters Calvin cycle (RuBisCO)",
                        recycling: "Pyruvate returns to mesophyll"
                    },
                    advantage: "Reduced photorespiration (high CO₂ in bundle sheath), more efficient in hot/dry climates",
                    cost: "Requires 2 extra ATP per CO₂",
                    examples: "Corn, sugarcane, sorghum, crabgrass",
                    productivity: "Higher productivity in hot climates"
                },
                CAMplants: {
                    name: "Crassulacean Acid Metabolism",
                    adaptation: "Temporal separation of CO₂ uptake and Calvin cycle",
                    process: {
                        night: "Stomata open, CO₂ fixed → malate, stored in vacuole",
                        day: "Stomata closed, malate → CO₂ + pyruvate, CO₂ enters Calvin cycle"
                    },
                    advantage: "Stomata open at night → minimize water loss in very hot/dry climates",
                    disadvantage: "Slow growth (stomata closed during day)",
                    examples: "Cacti, pineapple, jade plant, orchids",
                    habitat: "Deserts, arid regions"
                }
            },
            
            endosymbioticTheory: {
                hypothesis: "Chloroplasts originated from photosynthetic cyanobacteria engulfed by ancestral eukaryotic cell ~1.5 billion years ago",
                evidence: {
                    doubleMembrane: "Inner from cyanobacteria, outer from host cell",
                    thylakoids: "Similar to cyanobacterial photosynthetic membranes",
                    ownDNA: "Circular DNA like cyanobacteria",
                    ownRibosomes: "70S like bacteria",
                    reproduction: "Divide by binary fission",
                    genetics: "Chloroplast genes similar to cyanobacterial genes",
                    pigments: "Chlorophyll a and accessory pigments like cyanobacteria"
                },
                secondaryEndosymbiosis: {
                    definition: "Some algae acquired chloroplasts by engulfing eukaryotic algae",
                    evidence: "3-4 membranes around chloroplast",
                    examples: "Brown algae, diatoms, dinoflagellates, euglenoids"
                },
                timing: "After mitochondrial endosymbiosis (~2 bya); chloroplasts ~1.5 bya"
            },
            
            otherPlastids: {
                chromoplasts: {
                    color: "Red, orange, yellow (carotenoids)",
                    function: "Pigmentation in flowers, fruits",
                    purpose: "Attract pollinators, seed dispersers",
                    examples: "Tomatoes (lycopene), carrots (carotene), peppers (capsanthin)",
                    origin: "Develop from chloroplasts (green → red during fruit ripening)"
                },
                leucoplasts: {
                    color: "Colorless (no pigments)",
                    function: "Storage",
                    types: {
                        amyloplasts: "Store starch (potatoes, grains, roots)",
                        elaioplasts: "Store oils and fats",
                        proteinoplasts: "Store proteins (rare)"
                    }
                },
                plastidInterconversion: "Plastids can convert between types depending on developmental/environmental signals"
            },
            
            comparison: {
                mitochondriaVsChloroplasts: [
                    ["Feature", "Mitochondria", "Chloroplasts"],
                    ["Found in", "All eukaryotes", "Plants, algae only"],
                    ["Function", "Cellular respiration (ATP from glucose)", "Photosynthesis (glucose from CO₂)"],
                    ["Energy", "Release energy (catabolic)", "Capture/store energy (anabolic)"],
                    ["Reactants", "Glucose, O₂", "CO₂, H₂O, light"],
                    ["Products", "CO₂, H₂O, ATP", "Glucose, O₂"],
                    ["Membranes", "Double (cristae in inner)", "Triple (outer, inner, thylakoids)"],
                    ["H⁺ gradient", "Intermembrane space (high) → matrix (low)", "Lumen (high) → stroma (low)"],
                    ["DNA size", "~16.5 kb", "~120-200 kb"],
                    ["Origin", "Alpha-proteobacteria (~2 bya)", "Cyanobacteria (~1.5 bya)"],
                    ["Occurrence", "Day and night", "Day only (requires light)"]
                ]
            },
            
            examples: [
                {
                    cell: "Palisade Mesophyll",
                    chloroplasts: "30-50 per cell, densely packed",
                    location: "Upper leaf",
                    reason: "Maximum light exposure for photosynthesis",
                    arrangement: "Elongated cells, chloroplasts line periphery"
                },
                {
                    cell: "Spongy Mesophyll",
                    chloroplasts: "20-40 per cell",
                    location: "Lower leaf",
                    reason: "Gas exchange (CO₂ uptake)",
                    arrangement: "Loosely packed cells with air spaces"
                },
                {
                    cell: "Guard Cells",
                    chloroplasts: "10-20 per cell",
                    function: "Sense light, regulate stomatal opening",
                    note: "Only epidermal cells with chloroplasts"
                },
                {
                    cell: "Root Cells",
                    chloroplasts: "Absent (no light underground)",
                    plastids: "Amyloplasts (starch storage)"
                }
            ],
            
            applications: [
                "Agriculture - improving crop photosynthetic efficiency, yield",
                "Climate change - understanding global carbon cycle, CO₂ sequestration",
                "Biofuels - engineering algae for high lipid/biofuel production",
                "Food security - C4 rice (increasing rice photosynthetic efficiency)",
                "Synthetic biology - artificial photosynthesis, solar energy conversion",
                "Evolution - understanding origin of eukaryotic photosynthesis",
                "Biotechnology - chloroplast genetic engineering (insulin production, vaccines)",
                "Environmental monitoring - chlorophyll fluorescence assesses plant stress"
            ]
        };
        
        return content;
    }


    
    handleEndomembraneSystem(problem) {
        const content = {
            topic: "Endomembrane System: Protein Processing and Transport",
            category: 'organelles',
            summary: "The endomembrane system is an interconnected network of membrane-bound organelles that work together to synthesize, modify, package, and transport proteins and lipids throughout the cell and to the cell membrane for secretion.",
            
            overview: {
                definition: "Functionally related group of organelles connected by vesicles or direct membrane continuity",
                components: [
                    "Nuclear envelope (considered part of system)",
                    "Endoplasmic reticulum (rough and smooth)",
                    "Golgi apparatus",
                    "Lysosomes",
                    "Vacuoles (plants)",
                    "Vesicles (transport, secretory, endocytic)",
                    "Plasma membrane (receives membrane from system)"
                ],
                excluded: "Mitochondria and chloroplasts (separate evolutionary origin)",
                connectivity: "Connected by vesicular transport and membrane continuity",
                function: "Coordinate synthesis, modification, storage, and export of cellular products"
            },
            
            endoplasmicReticulum: {
                definition: "Extensive network of membranous tubules and sacs (cisternae) extending from nuclear envelope throughout cytoplasm",
                extent: "Accounts for more than half of total membrane in eukaryotic cells",
                lumen: "Interior space (ER lumen or cisternal space) continuous with perinuclear space",
                
                roughER: {
                    structure: "Flattened sacs (cisternae) studded with ribosomes on cytoplasmic surface",
                    ribosomes: "Bound to ER membrane via signal recognition particle (SRP) system",
                    location: "Abundant near nucleus and in secretory cells",
                    
                    functions: {
                        proteinSynthesis: {
                            process: "Synthesis of proteins destined for secretion, membrane, or organelles",
                            mechanism: {
                                step1: "Ribosome begins translating mRNA in cytoplasm",
                                step2: "Signal sequence (hydrophobic amino acids at N-terminus) emerges",
                                step3: "Signal recognition particle (SRP) binds signal sequence, pauses translation",
                                step4: "SRP-ribosome complex binds to SRP receptor on ER membrane",
                                step5: "Ribosome docks on translocon (protein channel in ER membrane)",
                                step6: "Translation resumes, polypeptide enters ER lumen through translocon",
                                step7: "Signal sequence cleaved by signal peptidase",
                                step8: "Protein continues synthesis into ER lumen or embeds in membrane"
                            },
                            destinations: [
                                "Secretory proteins → lumen → Golgi → secretion",
                                "Membrane proteins → embed in ER membrane → Golgi → plasma membrane",
                                "Lysosomal proteins → lumen → Golgi → lysosomes",
                                "ER-resident proteins → remain in ER (have KDEL retention signal)"
                            ]
                        },
                        proteinFolding: {
                            environment: "ER lumen provides optimal conditions (calcium, chaperones, oxidizing environment)",
                            chaperones: {
                                BiP: "Binding immunoglobulin protein - prevents aggregation, assists folding",
                                calnexin: "Binds glycoproteins, ensures proper folding",
                                proteinDisulfideIsomerase: "Forms correct disulfide bonds (cysteine residues)"
                            },
                            qualityControl: "Misfolded proteins retained in ER or sent for degradation (ERAD - ER-associated degradation)"
                        },
                        glycosylation: {
                            type: "N-linked glycosylation (attach oligosaccharide to asparagine)",
                            process: "Oligosaccharyltransferase transfers preassembled oligosaccharide (14-sugar tree) to Asn in sequence Asn-X-Ser/Thr",
                            function: "Aid folding, stability, targeting, cell recognition",
                            note: "Initial glycosylation in ER; further modification in Golgi"
                        },
                        membraneProduction: {
                            lipidSynthesis: "Phospholipids synthesized by enzymes in ER membrane",
                            growth: "New membrane lipids and proteins inserted into ER membrane",
                            distribution: "ER membrane buds off vesicles → transport to other organelles",
                            result: "ER is source of most cellular membranes"
                        }
                    },
                    
                    abundance: {
                        secretoryCells: "Extensive RER (pancreatic cells secreting enzymes, plasma cells secreting antibodies)",
                        plasmaCells: "Antibody-secreting B cells - packed with RER",
                        pancreaticCells: "Secrete digestive enzymes - abundant RER"
                    }
                },
                
                smoothER: {
                    structure: "Network of tubules without ribosomes",
                    location: "Variable - abundant where its functions are needed",
                    appearance: "Smooth, tubular network",
                    
                    functions: {
                        lipidSynthesis: {
                            phospholipids: "Synthesize phospholipids for membranes",
                            cholesterol: "Synthesize cholesterol and cholesterol-derived molecules",
                            steroids: "Synthesize steroid hormones (testosterone, estrogen, cortisol) in gonads and adrenal glands",
                            location: "Abundant in liver (lipid metabolism), gonads (steroid production), adrenal cortex"
                        },
                        detoxification: {
                            process: "Modify and detoxify drugs, alcohol, and other harmful substances",
                            enzymes: "Cytochrome P450 enzymes add hydroxyl groups → increase water solubility → easier excretion",
                            location: "Liver hepatocytes (extensive SER)",
                            induction: "Chronic drug/alcohol use → more SER (adaptation)",
                            examples: "Metabolize alcohol, barbiturates, amphetamines, steroids"
                        },
                        calciumStorage: {
                            function: "Store and release Ca²⁺ for signaling",
                            muscles: "Sarcoplasmic reticulum (specialized SER) stores Ca²⁺; release triggers contraction",
                            mechanism: "Ca²⁺-ATPase pumps Ca²⁺ into SER lumen; release through Ca²⁺ channels",
                            importance: "Ca²⁺ is second messenger in many signaling pathways"
                        },
                        carbohydrateMetabolism: {
                            location: "Liver cells",
                            process: "Glucose-6-phosphatase (in SER) catalyzes final step of gluconeogenesis and glycogen breakdown",
                            function: "Release free glucose into bloodstream (liver's role in blood sugar regulation)"
                        }
                    },
                    
                    abundance: {
                        liverCells: "Extensive SER (detoxification, lipid metabolism, glucose release)",
                        muscleCells: "Sarcoplasmic reticulum (Ca²⁺ storage)",
                        testesOvaries: "Extensive SER (steroid hormone synthesis)",
                        adrenalCortex: "Extensive SER (cortisol synthesis)"
                    }
                },
                
                ERstress: {
                    causes: "Accumulation of misfolded proteins, calcium depletion, oxidative stress, viral infection",
                    response: "Unfolded protein response (UPR) - increase chaperones, reduce translation, increase ERAD",
                    diseases: "Prolonged ER stress → apoptosis; linked to diabetes, neurodegenerative diseases, cancer"
                }
            },
            
            golgiApparatus: {
                definition: "Stack of flattened membrane sacs (cisternae) that modify, sort, and package proteins and lipids",
                structure: {
                    cisternae: "5-8 flattened sacs stacked like pancakes",
                    faces: {
                        cisGolgi: {
                            name: "Cis face (receiving side)",
                            location: "Near ER",
                            function: "Receives vesicles from ER",
                            appearance: "Convex, has cis-Golgi network (CGN)"
                        },
                        medialGolgi: "Middle cisternae - processing",
                        transGolgi: {
                            name: "Trans face (shipping side)",
                            location: "Near plasma membrane",
                            function: "Sorts and dispatches vesicles to destinations",
                            appearance: "Concave, has trans-Golgi network (TGN)"
                        }
                    },
                    polarization: "Distinct composition and enzymes in each cisterna"
                },
                location: "Usually near nucleus and ER",
                number: "Dozens to hundreds of Golgi stacks per cell (varies by cell type)",
                
                functions: {
                    proteinModification: {
                        glycosylation: {
                            process: "Modify N-linked oligosaccharides from ER; add O-linked oligosaccharides",
                            Nlinked: "Trim and modify 14-sugar tree from ER",
                            Olinked: "Add sugars to serine/threonine (O-glycosylation in Golgi only)",
                            function: "Affect protein folding, stability, trafficking, recognition"
                        },
                        phosphorylation: {
                            process: "Add phosphate groups to proteins",
                            example: "Add mannose-6-phosphate (M6P) tag to lysosomal enzymes",
                            function: "Targeting signal for lysosomes"
                        },
                        proteolysis: {
                            process: "Cleave proteins to activate them",
                            examples: "Proinsulin → insulin + C-peptide; procollagen → collagen"
                        },
                        sulfation: "Add sulfate groups to tyrosine residues or carbohydrates"
                    },
                    lipidModification: {
                        sphingolipidSynthesis: "Convert ceramide to sphingomyelin and glycolipids",
                        function: "Important for membrane structure and signaling"
                    },
                    sortingAndPackaging: {
                        transGolgiNetwork: "Sorting station - directs cargo to different destinations",
                        destinations: {
                            lysosome: {
                                signal: "Mannose-6-phosphate (M6P) tag",
                                receptors: "M6P receptors in TGN bind tagged proteins",
                                vesicles: "Clathrin-coated vesicles to endosomes → lysosomes"
                            },
                            plasmaMembrane: {
                                constitutive: "Default pathway - continuous fusion with membrane",
                                regulated: "Secretory vesicles stored until signal (Ca²⁺, hormone)"
                            },
                            secretion: {
                                constitutive: "Continuous secretion (e.g., ECM proteins, membrane proteins)",
                                regulated: "Stored in secretory granules, released upon signal (hormones, neurotransmitters, digestive enzymes)"
                            },
                            otherOrganelles: "Return to ER (KDEL signal), to endosomes"
                        },
                        signals: "Specific amino acid sequences or oligosaccharide modifications"
                    },
                    polysaccharideSynthesis: {
                        plants: "Synthesize pectin, hemicellulose for cell wall",
                        animals: "Synthesize glycosaminoglycans (GAGs) for extracellular matrix"
                    }
                },
                
                vesicularTransport: {
                    ERtoGolgi: "COPII-coated vesicles bud from ER, fuse with cis-Golgi",
                    withinGolgi: "Vesicles or cisterna maturation (cisternal maturation model)",
                    GolgiToDestinations: "Clathrin-coated vesicles (to lysosomes, endosomes) or secretory vesicles",
                    retrograde: "COPI-coated vesicles return proteins from Golgi to ER"
                },
                
                importance: {
                    secretoryCells: "Extensive Golgi (pancreatic cells, goblet cells, plasma cells)",
                    gobletCells: "Secrete mucus - large Golgi producing glycoproteins",
                    plasmaCells: "Secrete antibodies - extensive Golgi for processing and secretion"
                }
            },
            
            lysosomes: {
                definition: "Membrane-bound organelles containing hydrolytic enzymes that digest macromolecules",
                discovery: "Christian de Duve (1955) - named 'lytic bodies'",
                size: "0.1-1.2 μm diameter",
                number: "Dozens to hundreds per cell",
                
                structure: {
                    membrane: {
                        composition: "Single lipid bilayer with heavily glycosylated membrane proteins",
                        glycocalyx: "Carbohydrate coating on luminal side protects membrane from digestion",
                        protonPump: "V-type H⁺-ATPase maintains acidic pH (~4.5-5.0)",
                        transporters: "Export digestion products (amino acids, sugars, nucleotides) to cytoplasm"
                    },
                    lumen: {
                        pH: "~4.5-5.0 (acidic) - optimal for hydrolytic enzymes",
                        enzymes: "~50 different hydrolytic enzymes (acid hydrolases)",
                        types: {
                            proteases: "Digest proteins → amino acids (cathepsins)",
                            lipases: "Digest lipids → fatty acids and glycerol",
                            nucleases: "Digest nucleic acids → nucleotides",
                            glycosidases: "Digest carbohydrates → simple sugars",
                            phosphatases: "Remove phosphate groups",
                            sulfatases: "Remove sulfate groups"
                        },
                        safety: "Enzymes inactive at cytoplasmic pH (~7.2) - protects cell if lysosome ruptures"
                    }
                },
                
                formation: {
                    synthesis: "Lysosomal enzymes synthesized in RER",
                    modification: "Golgi adds mannose-6-phosphate (M6P) tag",
                    sorting: "M6P receptors in trans-Golgi network bind tagged enzymes",
                    transport: "Clathrin-coated vesicles carry enzymes to endosomes",
                    maturation: "Late endosomes mature into lysosomes; M6P receptors recycled"
                },
                
                functions: {
                    autophagy: {
                        definition: "Digestion of cell's own components",
                        process: {
                            step1: "Double membrane forms around organelle or cytoplasm → autophagosome",
                            step2: "Autophagosome fuses with lysosome → autolysosome",
                            step3: "Contents digested, components recycled"
                        },
                        purposes: [
                            "Remove damaged organelles (mitochondria, ER)",
                            "Recycle cellular components during starvation",
                            "Cellular remodeling (development, differentiation)",
                            "Remove protein aggregates"
                        ],
                        regulation: "Regulated by nutrient status, growth factors, stress",
                        importance: "Defects linked to aging, neurodegenerative diseases, cancer"
                    },
                    heterophagy: {
                        definition: "Digestion of extracellular material brought in by endocytosis/phagocytosis",
                        phagocytosis: {
                            process: "Phagosome (from phagocytosis) fuses with lysosome → phagolysosome",
                            cells: "Macrophages, neutrophils (white blood cells)",
                            function: "Destroy bacteria, viruses, foreign particles, dead cells",
                            example: "Macrophage engulfs bacterium → phagosome + lysosome → digestion"
                        },
                        endocytosis: {
                            process: "Endosome (from endocytosis) fuses with lysosome",
                            function: "Digest contents (LDL cholesterol, hormones, extracellular material)",
                            receptorRecycling: "Receptors often recycled to membrane"
                        }
                    },
                    extracellularDigestion: {
                        process: "Lysosomes fuse with plasma membrane, release enzymes outside cell",
                        examples: {
                            boneRemodeling: "Osteoclasts secrete lysosomal enzymes to dissolve bone matrix",
                            spermatogenesis: "Acrosome (specialized lysosome) in sperm releases enzymes to penetrate egg",
                            fertilization: "Acrosomal reaction - enzymes digest zona pellucida of egg"
                        }
                    }
                },
                
                lysosomalstorageDiseases: {
                    cause: "Deficiency or malfunction of specific lysosomal enzyme",
                    result: "Undigested substrate accumulates in lysosomes → cell damage → organ dysfunction",
                    inheritance: "Usually autosomal recessive",
                    examples: {
                        TaySachsDisease: {
                            defect: "Hexosaminidase A deficiency",
                            accumulation: "Gangliosides (GM2) in neurons",
                            symptoms: "Neurodegeneration, developmental regression, blindness, death (usually by age 4)",
                            population: "Higher frequency in Ashkenazi Jews"
                        },
                        GaucherDisease: {
                            defect: "Glucocerebrosidase deficiency",
                            accumulation: "Glucocerebroside in macrophages",
                            symptoms: "Enlarged liver/spleen, bone disease, anemia",
                            treatment: "Enzyme replacement therapy available",
                            note: "Most common lysosomal storage disease"
                        },
                        HurlerSyndrome: {
                            defect: "α-L-iduronidase deficiency",
                            accumulation: "Glycosaminoglycans (GAGs)",
                            symptoms: "Skeletal abnormalities, mental retardation, organomegaly",
                            category: "Mucopolysaccharidosis (MPS I)"
                        },
                        Pompe: {
                            defect: "Acid maltase (α-glucosidase) deficiency",
                            accumulation: "Glycogen in lysosomes",
                            symptoms: "Muscle weakness, heart problems",
                            treatment: "Enzyme replacement therapy"
                        }
                    },
                    diagnosis: "Enzyme assays, genetic testing, biopsy",
                    treatment: "Enzyme replacement therapy (some diseases), substrate reduction therapy, bone marrow transplant, supportive care"
                }
            },
            
            vesicles: {
                definition: "Small, membrane-bound sacs that transport materials between organelles and to/from plasma membrane",
                types: {
                    transportVesicles: {
                        function: "Shuttle cargo between organelles (ER → Golgi → destinations)",
                        coatProteins: {
                            COPII: "ER → Golgi (anterograde transport)",
                            COPI: "Golgi → ER, within Golgi (retrograde transport)",
                            clathrin: "TGN → endosomes/lysosomes, plasma membrane → endosomes (endocytosis)"
                        },
                        targeting: "SNARE proteins ensure vesicles fuse with correct target membrane"
                    },
                    secretoryVesicles: {
                        constitutive: "Continuously fuse with plasma membrane (default pathway)",
                        regulated: {
                            definition: "Store contents until signal triggers fusion",
                            signal: "Ca²⁺ influx, hormone binding, neurotransmitter",
                            examples: "Insulin granules (pancreatic β cells), neurotransmitter vesicles (neurons), digestive enzyme granules (pancreatic acinar cells)"
                        }
                    },
                    endocyticVesicles: {
                        formation: "Plasma membrane invaginates, pinches off",
                        types: "Clathrin-coated vesicles (receptor-mediated), caveolae (lipid rafts), pinocytic vesicles",
                        fate: "Fuse with early endosomes → late endosomes → lysosomes"
                    }
                },
                
                vesicularTrafficking: {
                    budding: "Cargo proteins and membrane lipids concentrate; coat proteins assemble; membrane curves and pinches off",
                    transport: "Motor proteins (kinesin, dynein) move vesicles along cytoskeleton",
                    tethering: "Rab GTPases and tethering proteins capture vesicle near target membrane",
                    docking: "SNARE proteins on vesicle (v-SNAREs) and target membrane (t-SNAREs) interact",
                    fusion: "SNARE complex brings membranes together, membranes fuse, cargo delivered"
                },
                
                SNAREproteins: {
                    definition: "Soluble NSF attachment protein receptors - mediate membrane fusion",
                    vSNAREs: "On vesicle membrane (e.g., synaptobrevin)",
                    tSNAREs: "On target membrane (e.g., syntaxin, SNAP-25)",
                    mechanism: "v-SNARE and t-SNARE form tight four-helix bundle → brings membranes close → fusion",
                    specificity: "Each organelle has unique SNAREs → ensures correct targeting",
                    recycling: "NSF and α-SNAP disassemble SNARE complex using ATP"
                }
            },
            
            vacuoles: {
                plantCells: {
                    centralVacuole: {
                        size: "Can occupy 90% of cell volume",
                        membrane: "Tonoplast",
                        contents: "Cell sap (water, ions, sugars, amino acids, pigments, waste products, toxins)",
                        functions: {
                            storage: "Water, nutrients, metabolites, waste products",
                            turgorPressure: "Water-filled vacuole presses against cell wall → keeps plant upright",
                            pH: "Acidic (~pH 5-5.5) - can digest macromolecules (like lysosome)",
                            pigmentation: "Anthocyanins (red, blue, purple pigments in flowers/fruits)",
                            defense: "Store toxins, deterrents to herbivores (alkaloids, tannins)"
                        },
                        comparison: "Functionally similar to lysosomes but much larger",
                        development: "Young plant cells have small vacuoles that merge during maturation"
                    }
                },
                fungalCells: {
                    vacuoles: "Similar to plant vacuoles - storage, turgor, digestion"
                },
                protists: {
                    contractileVacuole: {
                        function: "Pump excess water out of cell (osmoregulation)",
                        necessity: "Freshwater protists live in hypotonic environment (water constantly enters)",
                        mechanism: "Accumulates water, contracts to expel water through pore",
                        examples: "Paramecium, Amoeba"
                    },
                    foodVacuole: {
                        function: "Digest food particles (like phagolysosome)",
                        formation: "Phagocytosis → food vacuole fuses with lysosome-like structure"
                    }
                }
            },
            
            endomembraneFlow: {
                pathway: "ER → Golgi → Plasma membrane/Lysosomes/Secretion",
                biosynthetic: {
                    direction: "ER → Golgi → destinations (anterograde)",
                    cargo: "Newly synthesized proteins and lipids",
                    vesicles: "COPII (ER→Golgi), clathrin or non-clathrin (Golgi→destinations)"
                },
                endocytic: {
                    direction: "Plasma membrane → endosomes → lysosomes",
                    cargo: "Extracellular material, membrane proteins/lipids for recycling or degradation",
                    vesicles: "Clathrin-coated (receptor-mediated), caveolae, pinocytic"
                },
                retrieval: {
                    direction: "Golgi → ER (retrograde)",
                    cargo: "ER-resident proteins (with KDEL signal), recycling of membrane",
                    vesicles: "COPI-coated"
                },
                membrane: {
                    balance: "Membrane added by exocytosis balanced by endocytosis",
                    composition: "Maintained by retrograde transport, lipid synthesis, protein degradation"
                }
            },
            
            comparison: {
                endomembraneComponents: [
                    ["Organelle", "Function", "Key Features"],
                    ["Rough ER", "Protein synthesis for secretion/membrane", "Ribosomes on surface"],
                    ["Smooth ER", "Lipid synthesis, detoxification, Ca²⁺ storage", "No ribosomes"],
                    ["Golgi", "Modify, sort, package proteins/lipids", "Stacked cisternae, cis and trans faces"],
                    ["Lysosome", "Digest macromolecules", "Acidic (pH ~5), 50+ hydrolytic enzymes"],
                    ["Vacuole (plant)", "Storage, turgor, pigmentation, defense", "Large (90% of cell), acidic"],
                    ["Vesicle", "Transport cargo between organelles", "Small, membrane-bound sacs"]
                ]
            },
            
            examples: [
                {
                    cell: "Pancreatic Acinar Cells",
                    endomembrane: "Extensive RER and Golgi",
                    function: "Secrete digestive enzymes (amylase, lipase, proteases) into small intestine",
                    pathway: "RER (synthesis) → Golgi (modification, packaging) → secretory granules (storage) → exocytosis"
                },
                {
                    cell: "Plasma B Cells",
                    endomembrane: "Extensive RER and Golgi",
                    function: "Secrete antibodies (immunoglobulins)",
                    volume: "RER can occupy >50% of cytoplasm",
                    rate: "Can secrete ~2000 antibody molecules per second"
                },
                {
                    cell: "Liver Hepatocytes",
                    endomembrane: "Extensive SER (detoxification), lysosomes, peroxisomes",
                    function: "Detoxify drugs/alcohol, metabolize lipids, store glycogen",
                    adaptation: "SER increases with chronic drug/alcohol exposure"
                },
                {
                    cell: "Macrophages",
                    endomembrane: "Many lysosomes",
                    function: "Phagocytose bacteria, dead cells, debris",
                    process: "Phagocytosis → phagolysosome formation → digestion"
                }
            ],
            
            applications: [
                "Biotechnology - producing recombinant proteins (insulin, antibodies) in cells with enhanced ER/Golgi",
                "Drug development - targeting protein trafficking, lysosomal enzymes",
                "Understanding diseases - lysosomal storage diseases, protein misfolding diseases (cystic fibrosis, Alzheimer's)",
                "Cancer research - altered Golgi in cancer cells, autophagy as therapy target",
                "Vaccine production - using ER/Golgi system to produce viral proteins",
                "Enzyme replacement therapy - treating lysosomal storage diseases",
                "Understanding development - role of autophagy in embryonic development, programmed cell death"
            ]
        };
        
        return content;
    }

    handleCytoskeleton(problem) {
        const content = {
            topic: "Cytoskeleton: Cellular Structure and Movement",
            category: 'cell_structure',
            summary: "The cytoskeleton is a dynamic network of protein filaments extending throughout the cytoplasm, providing structural support, enabling cell movement, facilitating intracellular transport, and playing crucial roles in cell division.",
            
            overview: {
                definition: "Network of protein filaments and tubules in the cytoplasm",
                discovery: "Once thought cells had no internal structure; electron microscopy revealed complex cytoskeleton",
                dynamic: "Constantly assembling and disassembling - not static scaffolding",
                functions: [
                    "Maintain cell shape and mechanical strength",
                    "Enable cell motility (crawling, swimming)",
                    "Position and move organelles",
                    "Facilitate intracellular transport",
                    "Cell division (mitosis, cytokinesis)",
                    "Form cellular extensions (cilia, flagella, microvilli)"
                ],
                components: "Three main types: microfilaments (actin), intermediate filaments, microtubules (tubulin)"
            },
            
            microfilaments: {
                name: "Actin filaments",
                structure: {
                    composition: "Polymer of actin protein subunits (G-actin → F-actin)",
                    monomers: "G-actin (globular actin, 42 kDa)",
                    polymer: "F-actin (filamentous actin) - two strands twisted in helix",
                    diameter: "7 nm (thinnest of cytoskeletal filaments)",
                    polarity: "Plus end (fast-growing, 'barbed') and minus end (slow-growing, 'pointed')",
                    flexibility: "Most flexible cytoskeletal element"
                },
                
                dynamics: {
                    assembly: "G-actin + ATP binds to plus end of filament",
                    disassembly: "G-actin-ADP dissociates from minus end",
                    treadmilling: "Steady-state - addition at plus end balanced by loss at minus end (filament length constant but subunits flow through)",
                    ATPhydrolysis: "ATP hydrolyzed to ADP after incorporation (affects stability)",
                    regulation: {
                        profilin: "Promotes assembly at plus end",
                        thymosin: "Sequesters G-actin, prevents assembly",
                        cappingProteins: "Block plus or minus ends, prevent growth",
                        severingProteins: "Cut filaments (cofilin, gelsolin)",
                        crosslinkingProteins: "Bundle or network filaments (fimbrin, α-actinin, filamin)"
                    }
                },
                
                location: {
                    cellCortex: "Dense network just beneath plasma membrane (supports membrane, resists deformation)",
                    stressFibers: "Contractile bundles in adherent cells (anchor to focal adhesions)",
                    microvilli: "Core of actin bundles in intestinal epithelial cells",
                    contractileRing: "Ring at cell equator during cytokinesis"
                },
                
                functions: {
                    cellShape: {
                        cortex: "Actin network beneath membrane provides mechanical support",
                        tension: "Actin-myosin contraction generates cortical tension",
                        deformation: "Resist external forces, maintain cell integrity"
                    },
                    cellMotility: {
                        lamellipodia: {
                            structure: "Broad, flat protrusions at leading edge of crawling cells",
                            mechanism: "Rapid actin polymerization at plus ends (near membrane) pushes membrane forward",
                            branchingProteins: "Arp2/3 complex nucleates branched actin network",
                            examples: "Fibroblasts, neutrophils, macrophages"
                        },
                        filopodia: {
                            structure: "Thin, finger-like protrusions",
                            mechanism: "Parallel actin bundles extend from membrane",
                            function: "Sense environment, guide cell movement (growth cones in neurons)",
                            examples: "Neurons, fibroblasts"
                        },
                        amoeboidMovement: {
                            mechanism: "Actin polymerization at front, actomyosin contraction at rear → cell body flows forward",
                            examples: "Amoeba, white blood cells (neutrophils, macrophages)"
                        },
                        cytoplasmicStreaming: {
                            definition: "Circular flow of cytoplasm in plant cells",
                            mechanism: "Myosin motors walk along actin cables, drag organelles and cytoplasm",
                            function: "Distribute nutrients, accelerate diffusion",
                            observation: "Visible in Elodea cells (chloroplasts moving)"
                        }
                    },
                    muscleContraction: {
                        structure: "Highly organized actin (thin filaments) interdigitated with myosin (thick filaments)",
                        sarcomere: "Contractile unit of muscle (Z-disc to Z-disc)",
                        mechanism: "Myosin heads walk along actin filaments, pull thin filaments toward center → sarcomere shortens → muscle contracts",
                        slidingFilament: "Actin and myosin slide past each other (filaments don't shorten)",
                        ATP: "Myosin ATPase hydrolyzes ATP for power stroke",
                        regulation: "Ca²⁺ binding to troponin exposes myosin-binding sites on actin"
                    },
                    cytokinesis: {
                        contractileRing: "Ring of actin and myosin II at cell equator",
                        mechanism: "Ring contracts, pinches cell in two (cleavage furrow deepens)",
                        timing: "Forms during anaphase, contracts during telophase",
                        completion: "Midbody forms, cells separate (abscission)"
                    },
                    endocytosisExocytosis: {
                        role: "Actin polymerization provides force for membrane invagination (endocytosis) and vesicle movement (exocytosis)",
                        example: "Clathrin-coated pit formation requires actin"
                    }
                },
                
                motorProteins: {
                    myosins: {
                        types: "~40 different myosins (myosin I, II, V, VI, etc.)",
                        myosinII: {
                            structure: "Two heads, two tails (forms thick filaments in muscle)",
                            function: "Muscle contraction, cytokinesis, cell motility",
                            mechanism: "Both heads walk along actin (processive or non-processive)"
                        },
                        myosinI: {
                            structure: "Single head",
                            function: "Cargo transport, membrane-cytoskeleton links",
                            examples: "Move vesicles, link actin to membranes"
                        },
                        myosinV: {
                            function: "Long-distance cargo transport (vesicles, organelles, mRNA)",
                            processivity: "Highly processive (takes many steps before detaching)",
                            speed: "~2 μm/sec"
                        },
                        direction: "Move toward plus (barbed) end (except myosin VI - toward minus end)"
                    }
                }
            },
            
            intermediateFil: {
                name: "Intermediate filaments",
                structure: {
                    composition: "Diverse family of fibrous proteins",
                    diameter: "10 nm (intermediate between actin 7 nm and microtubules 25 nm)",
                    subunits: "Elongated monomers (coiled-coil α-helices)",
                    assembly: "Two monomers form dimer → dimers form tetramers → tetramers assemble into rope-like filament (8 tetramers wide)",
                    polarity: "Non-polar (no plus/minus ends like actin/microtubules)",
                    stability: "Most stable cytoskeletal filaments - slower dynamics"
                },
                
                types: {
                    keratins: {
                        location: "Epithelial cells",
                        types: "Acidic (type I) and basic (type II) keratins pair to form filaments",
                        number: "~50 different keratins in humans",
                        examples: "Hair, nails (hard keratins), skin epidermis (soft keratins)",
                        disease: "Epidermolysis bullosa simplex (keratin mutations → skin blistering)"
                    },
                    vimentin: {
                        location: "Mesenchymal cells (fibroblasts, endothelial cells, white blood cells)",
                        function: "Maintain cell shape, resist mechanical stress",
                        expression: "Often upregulated in cancer cells (epithelial-mesenchymal transition)"
                    },
                    desmin: {
                        location: "Muscle cells",
                        function: "Link Z-discs in adjacent myofibrils, anchor myofibrils to plasma membrane",
                        disease: "Desminopathies (muscle weakness)"
                    },
                    neurofilaments: {
                        location: "Neurons (axons)",
                        types: "NF-L (light), NF-M (medium), NF-H (heavy)",
                        function: "Structural support for axons, determine axon diameter",
                        disease: "Accumulation in Alzheimer's, ALS"
                    },
                    glialFibrillaryAcidicProtein: {
                        location: "Glial cells (astrocytes)",
                        function: "Structural support in brain",
                        marker: "Used to identify astrocytes in histology"
                    },
                    nuclearLamins: {
                        location: "Nuclear lamina (inner nuclear envelope)",
                        types: "Lamin A, B, C",
                        function: "Support nuclear envelope, organize chromatin",
                        dynamics: "Disassemble during mitosis, reassemble in daughter cells",
                        disease: "Laminopathies (progeria - premature aging, muscular dystrophy)"
                    }
                },
                
                functions: {
                    mechanicalStrength: {
                        role: "Primary role - resist mechanical stress, maintain cell/tissue integrity",
                        tensileStrength: "High tensile strength (rope-like structure)",
                        distribution: "Form networks extending from nucleus to cell periphery"
                    },
                    cellJunctions: {
                        desmosomes: "Keratin filaments anchor to desmosomes (epithelial cells) → connect cells in tissue",
                        hemidesmosomes: "Keratin filaments anchor to hemidesmosomes → attach epithelium to basal lamina",
                        importance: "Distribute mechanical stress across tissue"
                    },
                    nuclearEnvelopeSupport: {
                        lamins: "Provide structural support, anchor chromosomes, organize chromatin",
                        regulation: "Lamins phosphorylated during mitosis → disassemble; dephosphorylated after mitosis → reassemble"
                    },
                    positioning: {
                        nucleusPositioning: "Maintain nucleus position in cell",
                        organelleOrganization: "Organize organelles in cytoplasm"
                    }
                },
                
                diseases: {
                    epidermolysisbulloSimplex: "Keratin mutations (K5, K14) → skin fragility, blistering with minor trauma",
                    progeria: "Lamin A mutation → premature aging, cardiovascular disease, short lifespan",
                    muscularDystrophy: "Desmin or lamin mutations → muscle weakness",
                    cataracts: "Mutations in lens fiber cell intermediate filaments"
                }
            },
            
            microtubules: {
                structure: {
                    composition: "Polymer of α-tubulin and β-tubulin dimers",
                    heterodimer: "α-tubulin + β-tubulin (each ~55 kDa)",
                    polymer: "13 protofilaments arranged in hollow cylinder",
                    diameter: "25 nm (thickest cytoskeletal filament)",
                    hollow: "Hollow tube (~15 nm inner diameter)",
                    polarity: "Plus end (β-tubulin exposed, fast-growing) and minus end (α-tubulin exposed, slow-growing)",
                    length: "Varies from 200 nm to several micrometers",
                    rigidity: "Most rigid cytoskeletal element (resist compression)"
                },
                
                dynamics: {
                    assembly: "GTP-tubulin dimers add to plus end",
                    GTPloss: "GTP hydrolyzed to GDP after incorporation",
                    dynamicInstability: {
                        definition: "Stochastic switching between growth and rapid shrinkage",
                        growth: "GTP-cap at plus end → stable growth",
                        catastrophe: "Loss of GTP-cap → rapid depolymerization (shrinkage)",
                        rescue: "Random addition of GTP-tubulin during shrinkage → resume growth",
                        importance: "Allows microtubules to rapidly explore space, search for targets"
                    },
                    regulation: {
                        plusTIPproteins: "Bind plus ends, regulate dynamics (EB1, CLIP-170)",
                        stathmin: "Sequesters tubulin, promotes depolymerization",
                        tau: "Stabilizes microtubules (in neurons; hyperphosphorylated tau in Alzheimer's)",
                        colchicine: "Drug that prevents assembly (used in gout, cancer)",
                        taxol: "Drug that stabilizes microtubules (chemotherapy)"
                    }
                },
                
                organization: {
                    centrosome: {
                        definition: "Microtubule-organizing center (MTOC) near nucleus",
                        structure: "Two centrioles embedded in pericentriolar material (PCM)",
                        centrioles: {
                            structure: "Nine triplets of microtubules arranged in cylinder (9+0)",
                            number: "Two centrioles per centrosome (perpendicular to each other)",
                            replication: "Duplicate during S phase (each centriole templates new one)",
                            orientation: "Mother centriole (older, has appendages), daughter centriole"
                        },
                        PCM: "Protein matrix containing γ-tubulin ring complex (γ-TuRC) - nucleates microtubules",
                        function: "Nucleate and anchor minus ends of microtubules",
                        radialArray: "Microtubules radiate from centrosome (plus ends toward cell periphery)"
                    },
                    basalBodies: {
                        structure: "Identical to centrioles (9 triplets)",
                        location: "Base of cilia and flagella",
                        function: "Template for cilia/flagella assembly, anchor to cell"
                    },
                    plants: {
                        note: "Most plant cells lack centrosomes and centrioles",
                        MTOCs: "Microtubules nucleated from dispersed sites on nuclear envelope and cell cortex"
                    }
                },
                
                functions: {
                    cellShape: {
                        support: "Rigid microtubules resist compression, maintain cell shape",
                        examples: "Axons (neurons), long protrusions"
                    },
                    intracellularTransport: {
                        role: "Serve as tracks for motor protein-driven transport",
                        cargo: "Vesicles, organelles (mitochondria, ER, Golgi), mRNA, chromosomes",
                        bidirectional: "Anterograde (toward plus end) and retrograde (toward minus end)",
                        importance: "Essential for large cells, neurons (long axons)"
                    },
                    organellePositioning: {
                        ER: "ER network extends along microtubules",
                        Golgi: "Positioned near centrosome",
                        mitochondria: "Distributed along microtubules",
                        mechanism: "Motor proteins move and position organelles"
                    },
                    cellDivision: {
                        mitoticSpindle: {
                            structure: "Array of microtubules connecting centrosomes to chromosomes",
                            types: {
                                kinetochoreMicrotubules: "Attach to kinetochores on chromosomes, pull chromatids apart",
                                polarMicrotubules: "Overlap at spindle midzone, push centrosomes apart",
                                astralMicrotubules: "Extend toward cell cortex, position spindle"
                            },
                            formation: "Centrosomes duplicate, separate, nucleate microtubules",
                            function: "Separate sister chromatids (anaphase), position spindle"
                        },
                        cytokinesis: "Position cleavage furrow (astral microtubules signal location)"
                    },
                    ciliaFlagella: {
                        structure: "9+2 arrangement: 9 outer doublet microtubules surrounding 2 central singlets",
                        basalBody: "9 triplet microtubules (like centriole) anchor and template cilium/flagellum",
                        movement: {
                            mechanism: "Dynein motors on doublets walk along adjacent doublet → sliding → bending (sliding converted to bending by nexin links)",
                            power: "ATP hydrolysis by dynein"
                        },
                        types: {
                            motileCilia: {
                                structure: "9+2 (with central pair)",
                                beat: "Coordinated beating pattern",
                                examples: "Respiratory tract (move mucus), oviduct (move egg), Paramecium (locomotion)"
                            },
                            primaryCilium: {
                                structure: "9+0 (no central pair, non-motile)",
                                function: "Sensory antenna (detect chemical, mechanical signals)",
                                examples: "Kidney epithelial cells (mechanosensation), photoreceptors (vision), olfactory neurons",
                                disease: "Ciliopathies (polycystic kidney disease, retinal degeneration)"
                            }
                        },
                        flagella: {
                            definition: "Longer than cilia (>10 μm), fewer per cell (often 1-2)",
                            examples: "Sperm tail (propulsion), Chlamydomonas (algae, locomotion)",
                            beat: "Undulating wave (different from ciliary beat)"
                        }
                    }
                },
                
                motorProteins: {
                    kinesins: {
                        types: "~45 different kinesins",
                        direction: "Mostly plus-end-directed (toward cell periphery)",
                        structure: "Motor domain (head, ATP-ase), neck, tail (cargo-binding)",
                        kinesin1: {
                            structure: "Two heads (dimer)",
                            processivity: "Highly processive (~100 steps before detaching)",
                            function: "Anterograde axonal transport (vesicles, mitochondria)",
                            speed: "~1 μm/sec",
                            mechanism: "Hand-over-hand walking"
                        },
                        otherKinesins: {
                            kinesin5: "Separate centrosomes during mitosis (bipolar, pushes antiparallel microtubules apart)",
                            kinesin13: "Depolymerase (promotes microtubule disassembly)",
                            kinesin14: "Minus-end-directed (exception)"
                        }
                    },
                    dyneins: {
                        types: "Cytoplasmic dynein, axonemal dynein",
                        direction: "Minus-end-directed (toward centrosome/nucleus)",
                        structure: "Large, complex (~1.5 MDa), AAA+ ATPase motor domain, stalk binds microtubule",
                        cytoplasmicDynein: {
                            function: "Retrograde transport (vesicles, organelles, viruses back to nucleus)",
                            processivity: "Low processivity alone; requires dynactin for processive movement",
                            examples: "Return vesicles from Golgi to ER, position Golgi/ER, nuclear envelope breakdown"
                        },
                        axonemalDynein: {
                            function: "Powers ciliary and flagellar beating",
                            mechanism: "Attached to one doublet, walks along adjacent doublet → sliding",
                            types: "Inner arm dynein, outer arm dynein",
                            disease: "Primary ciliary dyskinesia (defective dynein → immotile cilia → respiratory infections, infertility)"
                        }
                    }
                }
            },
            
            cytoskeletonInterplay: {
                coordination: "Three filament systems work together",
                crosslinkers: "Proteins link different filaments (e.g., plectin links all three types)",
                remodeling: "Constant assembly/disassembly allows rapid reorganization",
                signaling: "Rho GTPases (RhoA, Rac, Cdc42) regulate cytoskeleton in response to signals",
                examples: {
                    cellMigration: "Actin polymerization pushes leading edge; microtubules position centrosome; intermediate filaments provide integrity",
                    cellDivision: "Microtubules form spindle; actin forms contractile ring; intermediate filaments reorganize",
                    cellShapeChange: "All three systems coordinate to change and maintain new shape"
                }
            },
            
            comparison: {
                cytoskeletalFilaments: [
                    ["Feature", "Microfilaments (Actin)", "Intermediate Filaments", "Microtubules"],
                    ["Diameter", "7 nm", "10 nm", "25 nm"],
                    ["Protein", "Actin", "Various (keratins, vimentin, etc.)", "α/β-tubulin"],
                    ["Structure", "Two-strand helix", "Rope-like, 8 tetramers", "Hollow tube, 13 protofilaments"],
                    ["Polarity", "Yes (plus/minus ends)", "No (non-polar)", "Yes (plus/minus ends)"],
                    ["Dynamics", "Dynamic (treadmilling)", "Stable (slow turnover)", "Very dynamic (dynamic instability)"],
                    ["Rigidity", "Flexible", "Intermediate", "Rigid (resist compression)"],
                    ["Motor proteins", "Myosins", "None", "Kinesins, dyneins"],
                    ["Main functions", "Cell motility, shape, muscle contraction", "Mechanical strength, junctions", "Intracellular transport, spindle, cilia/flagella"],
                    ["Drugs", "Cytochalasins (disrupt)", "None common", "Colchicine (disrupt), Taxol (stabilize)"]
                ]
            },
            
            diseases: {
                cancer: {
                    microtubules: "Rapidly dividing cells → microtubules essential for mitosis",
                    chemotherapy: "Taxol (paclitaxel), vincristine, vinblastine target microtubules → block mitosis → kill cancer cells",
                    sideEffects: "Normal dividing cells affected (hair loss, GI problems, low blood counts)"
                },
                neurodegenerative: {
                    Alzheimers: "Tau protein (stabilizes microtubules) becomes hyperphosphorylated → neurofibrillary tangles → neuron dysfunction",
                    ALS: "Neurofilament accumulation in motor neurons",
                    Parkinsons: "α-synuclein aggregates affect microtubule-based transport"
                },
                muscular: {
                    muscularDystrophies: "Mutations in intermediate filaments (desmin) or linker proteins (dystrophin links actin to membrane)",
                    symptoms: "Muscle weakness, degeneration"
                },
                ciliopathies: {
                    primaryCiliaryDyskinesia: "Defective dynein → immotile cilia → chronic respiratory infections, infertility, situs inversus",
                    polycysticKidneyDisease: "Defective primary cilia in kidney → cyst formation",
                    Bardet_Biedl: "Defective cilia → obesity, retinal degeneration, polydactyly"
                }
            },
            
            examples: [
                {
                    cell: "Neurons",
                    cytoskeleton: "Long axons supported by neurofilaments and microtubules; actin in growth cones",
                    transport: "Kinesin transports vesicles/mitochondria to synapse (anterograde); dynein returns to cell body (retrograde)",
                    importance: "Axons can be >1 meter long - require robust transport"
                },
                {
                    cell: "Muscle Cells",
                    cytoskeleton: "Highly organized actin (thin filaments) and myosin (thick filaments) in sarcomeres; desmin intermediate filaments",
                    function: "Muscle contraction (sliding filament); desmin anchors myofibrils",
                    organization: "Sarcomeres aligned → striated appearance"
                },
                {
                    cell: "Epithelial Cells",
                    cytoskeleton: "Keratin intermediate filaments; actin at apical surface (microvilli); microtubules extend basally",
                    junctions: "Keratins anchor to desmosomes → connect cells in tissue",
                    function: "Mechanical strength, resist abrasion, form barrier"
                },
                {
                    cell: "Fibroblasts (migrating)",
                    cytoskeleton: "Actin-rich lamellipodia at leading edge; stress fibers (actin-myosin); microtubules radiate from centrosome",
                    migration: "Actin polymerization pushes membrane forward; adhesions form; rear retracts",
                    coordination: "Microtubules position centrosome and Golgi toward leading edge"
                }
            ],
            
            applications: [
                "Cancer chemotherapy - microtubule-targeting drugs (taxol, vinca alkaloids)",
                "Understanding cell migration - wound healing, immune response, cancer metastasis",
                "Neurodegenerative diseases - tau-targeting therapies for Alzheimer's",
                "Fertility research - sperm motility depends on flagellar dyneins",
                "Drug delivery - using motor proteins to transport cargo along cytoskeleton",
                "Tissue engineering - understanding how cells organize in 3D",
                "Infectious disease - many pathogens hijack cytoskeleton for entry, movement, exit",
                "Regenerative medicine - directing cell shape and differentiation via cytoskeleton"
            ]
        };
        
        return content;
    }

    handleCellJunctions(problem) {
        const content = {
            topic: "Cell Junctions and Intercellular Communication",
            category: 'cell_interactions',
            summary: "Cell junctions are specialized structures connecting cells in multicellular organisms, enabling adhesion, communication, and coordinated tissue function. Different junction types serve distinct roles in tissue integrity and cell-cell communication.",
            
            overview: {
                definition: "Specialized membrane structures connecting adjacent cells or cells to extracellular matrix",
                importance: "Essential for multicellularity - enable cells to form tissues with coordinated functions",
                evolution: "Arose with multicellularity; allow division of labor among cells",
                types: {
                    animalCells: "Tight junctions, adherens junctions, desmosomes, gap junctions, hemidesmosomes",
                    plantCells: "Plasmodesmata (fundamentally different - cytoplasmic connections through cell wall)"
                },
                distribution: "Especially abundant in epithelial tissues (barrier function) and cardiac muscle (synchronized contraction)"
            },
            
            tightJunctions: {
                name: "Zonula occludens",
                structure: {
                    location: "Apical-most junction in epithelial cells (closest to lumen/surface)",
                    appearance: "Belt-like, encircling cell (zonula)",
                    electronMicroscopy: "Appears as fusion points where adjacent membranes are pressed together",
                    molecularStructure: "Strands of transmembrane proteins (claudins, occludin) form seals between cells"
                },
                
                components: {
                    claudins: {
                        definition: "Family of ~24 transmembrane proteins",
                        function: "Form backbone of tight junction strands, determine permeability",
                        mechanism: "Interact with claudins on adjacent cell in homophilic/heterophilic manner",
                        diversity: "Different claudin combinations → different permeability properties"
                    },
                    occludin: {
                        definition: "Transmembrane protein",
                        function: "Regulates tight junction assembly and function",
                        note: "Not essential for junction formation but affects barrier properties"
                    },
                    JAMs: {
                        name: "Junctional adhesion molecules",
                        function: "Cell adhesion, regulate leukocyte migration through epithelium"
                    },
                    ZO_proteins: {
                        name: "Zonula occludens proteins (ZO-1, ZO-2, ZO-3)",
                        type: "Cytoplasmic scaffolding proteins",
                        function: "Link transmembrane proteins to actin cytoskeleton",
                        importance: "Essential for tight junction assembly and function"
                    }
                },
                
                functions: {
                    barrierFunction: {
                        definition: "Seal space between cells, prevent leakage",
                        paracellularBarrier: "Block passage of molecules between cells (through paracellular space)",
                        selectivity: "Can be selectively permeable to small ions (size- and charge-selective)",
                        examples: {
                            intestine: "Prevent digestive enzymes and bacteria from entering bloodstream",
                            bloodBrainBarrier: "Endothelial tight junctions prevent most substances from entering brain",
                            bladder: "Prevent urine from leaking into tissues"
                        },
                        variability: "Tightness varies - blood-brain barrier (very tight) vs kidney (leakier)"
                    },
                    fenceFunction: {
                        definition: "Prevent mixing of membrane proteins/lipids between apical and basolateral domains",
                        polarization: "Maintain cell polarity - different proteins on apical vs basolateral surfaces",
                        example: "Na⁺/K⁺-ATPase restricted to basolateral membrane; apical membrane has different transporters",
                        importance: "Essential for directional transport (e.g., nutrient absorption in intestine)"
                    }
                },
                
                regulation: {
                    assembly: "Regulated by Rho GTPases, PKC, calcium",
                    permeability: "Can be dynamically regulated (open/close in response to signals)",
                    pathology: "Disruption in disease (inflammatory bowel disease, celiac disease)"
                },
                
                clinicalSignificance: {
                    bloodBrainBarrier: "Protects brain but also blocks most drugs; developing strategies to transiently open BBB for drug delivery",
                    cancer: "Loss of tight junctions → metastasis (cells detach and invade)",
                    infections: "Some bacteria produce toxins that disrupt tight junctions (cholera toxin, Clostridium perfringens toxin)"
                }
            },
            
            adherensJunctions: {
                name: "Zonula adherens",
                structure: {
                    location: "Below tight junctions in epithelial cells",
                    appearance: "Belt-like (zonula), encircles cell",
                    width: "~15-20 nm intercellular space",
                    cytoplasmic: "Connected to actin filaments via catenins"
                },
                
                components: {
                    cadherins: {
                        definition: "Transmembrane glycoproteins mediating calcium-dependent cell-cell adhesion",
                        types: {
                            Ecadherin: "Epithelial cells",
                            Ncadherin: "Nerve, muscle, lens cells",
                            Pcadherin: "Placenta, epidermis",
                            VEcadherin: "Vascular endothelial cells"
                        },
                        structure: "Extracellular domain (5 EC repeats), transmembrane domain, cytoplasmic domain",
                        binding: "Homophilic (E-cadherin binds E-cadherin on adjacent cell)",
                        calcium: "Requires Ca²⁺ for proper folding and binding (hence 'calcium-dependent')"
                    },
                    catenins: {
                        betaCatenin: "Links cadherin to α-catenin",
                        alphaCatenin: "Links β-catenin to actin cytoskeleton",
                        p120Catenin: "Regulates cadherin stability at membrane",
                        function: "Connect cadherin to actin filaments, provide mechanical strength"
                    },
                    actinFilaments: "Form belt beneath membrane, connected to adherens junctions"
                },
                
                functions: {
                    mechanicalAdhesion: {
                        role: "Strong cell-cell adhesion, resist mechanical stress",
                        network: "Adherens junctions linked via actin filaments → distribute tension across tissue",
                        example: "Epithelial sheets resist stretching, maintain integrity"
                    },
                    tissueMorphogenesis: {
                        development: "Dynamic assembly/disassembly during embryonic development",
                        cellSorting: "Cells expressing same cadherins preferentially adhere → segregate into tissues",
                        example: "Differential adhesion hypothesis - cells sort based on cadherin expression"
                    },
                    signaling: {
                        betaCateninSignaling: "β-catenin also functions in Wnt signaling pathway (when not bound to cadherin)",
                        regulation: "When junctions disrupted, β-catenin released → enters nucleus → activates genes",
                        cancerConnection: "Loss of E-cadherin in cancer → EMT (epithelial-mesenchymal transition) → metastasis"
                    }
                },
                
                regulation: {
                    assembly: "Regulated by Rho GTPases (Rac, Cdc42), calcium",
                    dynamics: "Constantly remodeling (endocytosis and recycling of cadherins)",
                    growth: "Cells increase adherens junctions as they establish contact"
                },
                
                disease: {
                    cancer: {
                        mechanism: "Loss of E-cadherin → cells detach → invade other tissues (metastasis)",
                        EMT: "Epithelial-mesenchymal transition - E-cadherin down, N-cadherin up → cells become motile",
                        prognosis: "Loss of E-cadherin associated with poor prognosis",
                        cadherin: "E-cadherin is tumor suppressor; mutations in hereditary gastric cancer"
                    }
                }
            },
            
            desmosomes: {
                name: "Macula adherens",
                structure: {
                    appearance: "Button-like (macula) - spot welds",
                    distribution: "Scattered over cell surface (not continuous belt like adherens junctions)",
                    width: "~30 nm intercellular space",
                    plaques: "Dense cytoplasmic plaques on both sides where intermediate filaments attach",
                    electronMicroscopy: "Dense midline in intercellular space; dense plaques on cytoplasmic side"
                },
                
                components: {
                    desmogleins: {
                        type: "Cadherin family member",
                        function: "Mediate cell-cell adhesion (calcium-dependent)",
                        isoforms: "Dsg1, Dsg2, Dsg3, Dsg4"
                    },
                    desmocollins: {
                        type: "Cadherin family member",
                        function: "Mediate cell-cell adhesion",
                        isoforms: "Dsc1, Dsc2, Dsc3"
                    },
                    plakoglobin: {
                        name: "γ-catenin",
                        function: "Links desmogleins/desmocollins to intermediate filaments"
                    },
                    plakophilins: {
                        function: "Scaffolding proteins linking to intermediate filaments"
                    },
                    desmoplakin: {
                        function: "Major component of cytoplasmic plaque, directly binds intermediate filaments",
                        importance: "Essential for desmosome function"
                    },
                    intermediateFilaments: {
                        type: "Keratin (epithelial cells), desmin (muscle)"
                    }
                },
                
                functions: {
                    mechanicalStrength: {
                        role: "Provide strong, flexible adhesion - resist shearing forces",
                        network: "Connect to intermediate filament network → distribute stress throughout tissue",
                        importance: "Most important for tissues experiencing mechanical stress",
                        examples: {
                            skin: "Epidermis experiences friction, stretching - abundant desmosomes",
                            heart: "Cardiac muscle contracts forcefully - intercalated discs have desmosomes",
                            mucosa: "Oral mucosa, esophagus - resist abrasion"
                        }
                    },
                    tissueIntegrity: {
                        function: "Hold cells together in tissues subject to mechanical stress",
                        networkOrganization: "Link intermediate filament networks of adjacent cells → mechanical continuum"
                    }
                },
                
                disease: {
                    pemphigus: {
                        type: "Autoimmune blistering disease",
                        mechanism: "Autoantibodies against desmogleins (Dsg1, Dsg3) → desmosomes disrupted → cells separate (acantholysis)",
                        symptoms: "Skin and mucosal blistering",
                        types: {
                            pemphigusVulgaris: "Anti-Dsg3 (mucosa), anti-Dsg1 (skin) → severe blistering",
                            pemphigusFoliaceus: "Anti-Dsg1 (superficial skin) → less severe"
                        },
                        treatment: "Immunosuppression (steroids, rituximab)"
                    },
                    arrhythmogenicCardiomyopathy: {
                        cause: "Mutations in desmosomal proteins (plakoglobin, desmoplakin, plakophilin-2)",
                        result: "Weakened cell-cell adhesion in heart → fibro-fatty replacement of myocardium → arrhythmias, sudden death",
                        note: "Demonstrates importance of desmosomes in cardiac function"
                    },
                    skinFragility: {
                        cause: "Mutations in desmosomal proteins or keratin intermediate filaments",
                        examples: "Epidermolysis bullosa simplex (keratin mutations), ectodermal dysplasia-skin fragility syndrome (desmoplakin mutations)"
                    }
                }
            },
            
            gapJunctions: {
                definition: "Channels connecting cytoplasm of adjacent cells, allowing direct communication",
                structure: {
                    connexon: {
                        definition: "Hemichannel in one cell's membrane (6 connexin proteins)",
                        connexins: "Family of ~20 proteins in humans (Cx26, Cx32, Cx43, etc. - number is molecular weight in kDa)",
                        assembly: "Six connexins oligomerize in ER/Golgi → connexon → trafficked to membrane"
                    },
                    gapJunctionChannel: {
                        formation: "Two connexons (one from each cell) dock in extracellular space → form continuous channel",
                        pore: "~1.5 nm diameter - allows passage of molecules <1000 Da",
                        gating: "Can open or close in response to Ca²⁺, pH, voltage, phosphorylation"
                    },
                    plaques: "Gap junctions cluster into plaques (dozens to thousands of channels)"
                },
                
                permeability: {
                    canPass: "Ions (K⁺, Na⁺, Ca²⁺, Cl⁻), second messengers (IP₃, cAMP, cGMP), small metabolites (glucose, amino acids, ATP, nucleotides)",
                    cannotPass: "Large molecules (proteins, nucleic acids), most organelles",
                    selectivity: "Different connexin combinations → different permeability (size, charge selectivity)",
                    bidirectional: "Molecules flow in both directions"
                },
                
                functions: {
                    metabolicCoupling: {
                        definition: "Share metabolites between cells",
                        example: "Cells with active metabolism share nutrients with less active neighbors",
                        benefit: "Coordinate metabolism, buffer local nutrient/ion fluctuations"
                    },
                    electricalCoupling: {
                        definition: "Rapid spread of electrical signals (ions) between cells",
                        importance: "Synchronize activity of cell populations",
                        examples: {
                            cardiacMuscle: "Gap junctions in intercalated discs → action potential spreads rapidly → coordinated contraction of heart",
                            smoothMuscle: "Coordinate contraction (gut peristalsis, uterine contractions during labor)",
                            CNS: "Synchronize neuronal activity (though less common than chemical synapses)"
                        },
                        advantage: "Faster than chemical synapses (no delay for neurotransmitter release/binding)"
                    },
                    signaling: {
                        secondMessengers: "IP₃, Ca²⁺, cAMP waves propagate through tissues via gap junctions",
                        coordination: "Coordinate cellular responses across tissue (liver, pancreas)"
                    },
                    development: {
                        role: "Essential for embryonic development - coordinate cell fate decisions",
                        patterning: "Morphogen gradients spread via gap junctions"
                    }
                },
                
                regulation: {
                    gating: {
                        calcium: "High [Ca²⁺]ᵢ closes channels (protects healthy cells from damaged neighbors)",
                        pH: "Low pH (acidosis) closes channels",
                        voltage: "Large voltage differences close channels",
                        phosphorylation: "Kinases (PKC, PKA, MAPK) regulate gating"
                    },
                    turnover: "Gap junctions have short half-life (~1-5 hours) - constantly degraded and replaced",
                    endocytosis: "Connexons internalized as annular junctions (double membrane structures), degraded in lysosomes"
                },
                
                diseases: {
                    cardiac: {
                        arrhythmias: "Altered gap junction distribution/function → abnormal conduction → arrhythmias",
                        heartFailure: "Remodeling of gap junctions (decreased Cx43) in failing heart",
                        infarction: "Gap junction closure after heart attack limits spread of damage but also blocks electrical conduction"
                    },
                    deafness: {
                        cause: "Mutations in connexins (especially Cx26, Cx30) → deafness",
                        mechanism: "Gap junctions in cochlea essential for K⁺ recycling; defects → hair cell death",
                        note: "Most common inherited cause of non-syndromic deafness"
                    },
                    skinDisorders: {
                        Cx26mutations: "Can cause deafness with skin disorders (keratitis-ichthyosis-deafness syndrome)",
                        mechanism: "Gap junctions important for epidermal differentiation"
                    },
                    CharcotMarieTooth: {
                        type: "X-linked form (CMTX)",
                        cause: "Cx32 mutations (expressed in Schwann cells)",
                        result: "Peripheral neuropathy (weakness, sensory loss)",
                        mechanism: "Disrupted communication between myelin layers in Schwann cells"
                    },
                    cancer: {
                        paradox: "Gap junctions are often lost in cancer (tumor suppressors?), but can also facilitate metastasis (help cancer cells survive)",
                        mechanism: "Loss of communication → loss of growth control; but gap junctions can also transfer death signals"
                    }
                }
            },
            
            hemidesmosomes: {
                definition: "Junctions anchoring epithelial cells to basal lamina (extracellular matrix)",
                structure: {
                    appearance: "Half of desmosome (only on one cell, attaching to ECM, not another cell)",
                    plaques: "Dense cytoplasmic plaque where intermediate filaments attach",
                    basalSide: "Located on basal surface of epithelial cells"
                },
                
                components: {
                    integrins: {
                        type: "α6β4 integrin (most important)",
                        function: "Transmembrane proteins binding to laminin in basal lamina",
                        binding: "Extracellular domain binds laminin-332 (in basal lamina)"
                    },
                    plectin: {
                        function: "Links integrin cytoplasmic domain to keratin intermediate filaments",
                        importance: "Essential for hemidesmosome formation"
                    },
                    BP230: {
                        name: "Bullous pemphigoid antigen 1 (BPAG1)",
                        function: "Links to intermediate filaments"
                    },
                    BP180: {
                        name: "Bullous pemphigoid antigen 2 (BPAG2, collagen XVII)",
                        type: "Transmembrane collagen",
                        function: "Spans membrane, links to laminin in basal lamina"
                    },
                    intermediateFilaments: "Keratin filaments"
                },
                
                function: {
                    anchorCells: "Anchor epithelial cells to underlying basal lamina (part of ECM)",
                    resistStress: "Resist mechanical stress, prevent epithelium from separating from connective tissue",
                    importance: "Critical in tissues experiencing shear stress (skin, oral mucosa, cornea)"
                },
                
                disease: {
                    bullousPemphigoid: {
                        type: "Autoimmune blistering disease",
                        mechanism: "Autoantibodies against BP180 and/or BP230 → hemidesmosomes disrupted → epidermis separates from dermis → blisters",
                        symptoms: "Large, tense blisters on skin (subepidermal blisters)",
                        treatment: "Immunosuppression",
                        note: "Affects elderly (>65 years)"
                    },
                    epidermolysisbullosa: {
                        types: "Junctional EB",
                        cause: "Mutations in hemidesmosome proteins (laminin-332, collagen XVII, integrin α6β4) or laminin in basal lamina",
                        result: "Skin fragility, blistering at dermal-epidermal junction",
                        severity: "Can be severe/lethal (Herlitz type) or milder",
                        treatment: "Supportive care, wound management; gene therapy and stem cell therapy experimental"
                    }
                }
            },
            
            plasmodesmata: {
                definition: "Cytoplasmic channels connecting adjacent plant cells through cell walls",
                uniqueness: "Unique to plants - fundamentally different from animal gap junctions",
                
                structure: {
                    formation: {
                        primary: "Form during cell division - ER trapped in forming cell plate",
                        secondary: "Form de novo in existing walls"
                    },
                    anatomy: {
                        plasmamembrane: "Continuous between cells (lines plasmodesma)",
                        desmotubule: "Compressed ER tube running through center (derived from ER)",
                        cytoplasmicsleeve: "Space between desmotubule and plasma membrane (~5 nm) - pathway for molecules",
                        neckRegions: "Constrictions at cell wall entrance/exit"
                    },
                    size: "Wider than gap junctions (~40 nm diameter)",
                    complexity: "Simple plasmodesmata (straight) vs branched plasmodesmata"
                },
                
                permeability: {
                    sizeExclusionLimit: "~40-50 kDa normally (much larger than gap junctions ~1 kDa)",
                    regulated: "Can dilate or constrict (change size exclusion limit)",
                    molecules: "Small molecules (sugars, amino acids, ions, hormones), some proteins, mRNA, viruses (hijack plasmodesmata)"
                },
                
                functions: {
                    symplasticTransport: {
                        definition: "Movement through continuous cytoplasm (via plasmodesmata)",
                        contrast: "Apoplastic transport - through cell walls and intercellular spaces",
                        importance: "Distribute nutrients (sucrose from photosynthetic to non-photosynthetic cells)",
                        example: "Phloem loading - sucrose moves symplastically to sieve elements"
                    },
                    signaling: {
                        molecules: "Hormones (auxin, cytokinins), transcription factors, RNA",
                        coordination: "Coordinate development, responses to environment",
                        example: "LEAFY transcription factor moves through plasmodesmata during flower development"
                    },
                    viralMovement: {
                        mechanism: "Viruses produce movement proteins that widen plasmodesmata → viral RNA moves to adjacent cells",
                        defense: "Plants can close plasmodesmata to limit viral spread"
                    },
                    development: {
                        regulation: "Plasmodesmata closed or opened to create developmental boundaries",
                        example: "Shoot apical meristem - restricted symplastic communication maintains stem cell population"
                    }
                },
                
                regulation: {
                    callose: "β-1,3-glucan polymer deposited at plasmodesmata → narrows channel → reduces permeability",
                    proteins: "Callose synthases, β-1,3-glucanases regulate callose",
                    signals: "Stress, pathogens, developmental cues → regulate plasmodesmata"
                },
                
                comparison: {
                    vsGapJunctions: [
                        "Plasmodesmata wider (~40 nm) vs gap junctions smaller (~1.5 nm)",
                        "Plasmodesmata allow larger molecules (proteins, RNA) vs gap junctions (small molecules only)",
                        "Plasmodesmata permanent structures vs gap junctions dynamic (short half-life)",
                        "Plasmodesmata connect cytoplasm AND ER vs gap junctions only cytoplasm",
                        "Plasmodesmata formed during cell division (primary) or de novo vs gap junctions form by docking connexons"
                    ]
                }
            },
            
            comparison: {
                animalJunctions: [
                    ["Junction Type", "Structure", "Connection", "Function", "Main Proteins"],
                    ["Tight Junction", "Belt, seal", "Cell-cell (apical)", "Barrier, fence", "Claudins, occludin, ZO"],
                    ["Adherens Junction", "Belt", "Cell-cell, links actin", "Adhesion, morphogenesis", "Cadherins, catenins"],
                    ["Desmosome", "Button/spot weld", "Cell-cell, links IFs", "Strong adhesion, resist shear", "Desmogleins, desmocollins"],
                    ["Gap Junction", "Clusters of channels", "Cell-cell, cytoplasm", "Communication (ions, metabolites)", "Connexins"],
                    ["Hemidesmosome", "Half-desmosome", "Cell-ECM, links IFs", "Anchor to basal lamina", "Integrins, plectin, BP180"]
                ]
            },
            
            examples: [
                {
                    tissue: "Intestinal Epithelium",
                    junctions: "Tight junctions (apical), adherens junctions, desmosomes, hemidesmosomes (basal)",
                    function: "Tight junctions seal lumen from bloodstream; adherens and desmosomes provide strength; hemidesmosomes anchor to basal lamina",
                    importance: "Barrier function prevents bacteria/toxins from entering blood; integrity essential for absorption"
                },
                {
                    tissue: "Cardiac Muscle",
                    junctions: "Gap junctions, desmosomes, adherens junctions (all at intercalated discs)",
                    function: "Gap junctions spread action potential rapidly → synchronized contraction; desmosomes and adherens junctions resist mechanical stress",
                    importance: "Coordinated contraction essential for pumping blood"
                },
                {
                    tissue: "Epidermis (Skin)",
                    junctions: "Desmosomes (abundant), hemidesmosomes (basal layer), tight junctions (stratum granulosum)",
                    function: "Desmosomes provide strength against abrasion; hemidesmosomes anchor to dermis; tight junctions create water barrier",
                    importance: "Mechanical strength and barrier function"
                },
                {
                    tissue: "Neurons",
                    junctions: "Gap junctions (electrical synapses, less common); chemical synapses (not junctions, but functional connections)",
                    function: "Gap junctions allow rapid, synchronized activity (retina, cortex); chemical synapses allow modulation and complex processing",
                    importance: "Balance between speed (electrical) and flexibility (chemical)"
                }
            ],
            
            applications: [
                "Understanding barrier function - drug delivery across epithelia",
                "Cardiac arrhythmias - targeting gap junctions",
                "Cancer metastasis - loss of adherens junctions and E-cadherin",
                "Autoimmune diseases - pemphigus, bullous pemphigoid treatments",
                "Hearing loss - connexin gene therapy",
                "Tissue engineering - creating functional tissues with proper junctions",
                "Infectious disease - targeting bacterial toxins that disrupt tight junctions",
                "Regenerative medicine - wound healing depends on junction remodeling"
            ]
        };
        
        return content;
    }

    handleCellWall(problem) {
        const content = {
            topic: "Cell Wall: Structure, Composition, and Function",
            category: 'cell_structure',
            summary: "The cell wall is a rigid outer layer external to the plasma membrane, found in plants, fungi, bacteria, and some protists. It provides structural support, protection, and shape to cells. Composition varies by organism type.",
            
            overview: {
                definition: "Rigid, semi-permeable outer layer surrounding plasma membrane",
                presence: "Plants, fungi, bacteria, archaea, algae, some protists",
                absence: "Animals (have extracellular matrix but no rigid cell wall)",
                evolution: "Arose independently multiple times (plants vs bacteria vs fungi - different compositions)",
                location: "Outside plasma membrane, secreted by cell",
                functions: ["Structural support", "Protection", "Maintain cell shape", "Prevent over-expansion (osmotic lysis)", "Barrier to pathogens", "Cell-cell adhesion"]
            },
            
            plantCellWalls: {
                overview: "Plant cells have complex cell walls made primarily of cellulose, with additional polysaccharides and proteins",
                
                composition: {
                    cellulose: {
                        definition: "Main structural component (30-50% of primary wall)",
                        structure: "Linear polymer of β-1,4-linked glucose (several thousand glucose units)",
                        microfibrils: {
                            definition: "Cellulose chains (30-36) associate via hydrogen bonds → crystalline microfibrils (~3-5 nm diameter)",
                            strength: "High tensile strength (crystalline structure, many H-bonds)",
                            arrangement: "Embedded in matrix of other polysaccharides (like steel rods in concrete)"
                        },
                        synthesis: "Cellulose synthase complex in plasma membrane synthesizes cellulose directly into wall"
                    },
                    hemicellulose: {
                        definition: "Branched polysaccharides (20-30% of primary wall)",
                        types: "Xyloglucans (dicots), xylans, mannans, β-glucans",
                        structure: "β-1,4-linked backbone with side chains",
                        function: "Hydrogen bond to cellulose microfibrils, cross-link them, form matrix",
                        flexibility: "More flexible than cellulose (branched, not crystalline)"
                    },
                    pectin: {
                        definition: "Gel-like polysaccharides (30% of primary wall, especially in dicots)",
                        structure: "Primarily galacturonic acid polymers (acidic)",
                        types: "Homogalacturonan, rhamnogalacturonan I and II",
                        function: {
                            gelFormation: "Ca²⁺ cross-links pectin → gel that fills spaces between cellulose",
                            adhesion: "Pectin-rich middle lamella cements adjacent cells",
                            hydration: "Hydrophilic - maintain hydrated wall",
                            porosity: "Determine wall porosity (control molecule passage)"
                        },
                        methylation: "Pectin can be methylated (reduces Ca²⁺ binding, increases flexibility)"
                    },
                    lignin: {
                        definition: "Complex polymer of phenolic compounds (in secondary walls only)",
                        composition: "Cross-linked phenylpropanoids (aromatic rings)",
                        function: {
                            strengthening: "Makes wall rigid, waterproof, resistant to degradation",
                            support: "Allows upright growth (trees)",
                            waterproofing: "Prevents water loss, enables water transport in xylem",
                            protection: "Resists pathogens, herbivores (difficult to digest)"
                        },
                        deposition: "Added after cell stops growing (in secondary wall)",
                        percentage: "15-35% of secondary wall in woody tissues",
                        note: "Second most abundant natural polymer after cellulose"
                    },
                    proteins: {
                        extensins: {
                            type: "Hydroxyproline-rich glycoproteins (HRGPs)",
                            function: "Structural reinforcement, cross-link wall components, wound response",
                            structure: "Rod-like, insoluble when cross-linked"
                        },
                        expansins: {
                            function: "Loosen cell wall during growth (disrupt H-bonds between cellulose and hemicellulose)",
                            regulation: "Activated by auxin, low pH",
                            importance: "Allow cell expansion"
                        },
                        enzymes: "Peroxidases, xyloglucan endotransglycosylases (remodel wall)"
                    }
                },
                
                layers: {
                    middleLamella: {
                        definition: "Pectin-rich layer cementing adjacent cells",
                        location: "Between primary walls of neighboring cells",
                        function: "Cell-cell adhesion",
                        formation: "First layer deposited (during cytokinesis, in cell plate)"
                    },
                    primaryWall: {
                        definition: "Thin, flexible wall in growing cells",
                        composition: "Cellulose microfibrils (30-50%), hemicellulose (20-30%), pectin (30%), proteins (5-10%)",
                        thickness: "0.1-1 μm",
                        flexibility: "Allows cell expansion during growth",
                        orientation: "Cellulose microfibrils oriented transverse to direction of cell expansion",
                        allCells: "All plant cells have primary wall"
                    },
                    secondaryWall: {
                        definition: "Thick, rigid wall deposited after cell stops growing",
                        location: "Inside primary wall (between primary wall and plasma membrane)",
                        composition: "Cellulose (more than primary), hemicellulose, lignin (15-35%), little pectin",
                        thickness: "Much thicker than primary (can be several μm)",
                        layers: "Often three layers (S1, S2, S3) with different cellulose microfibril orientations",
                        function: "Provide strength, rigidity, support, water transport (xylem)",
                        cells: "Not all cells (mainly xylem vessels, fibers, sclerenchyma)"
                    }
                },
                
                functions: {
                    turgorPressure: {
                        definition: "Hydrostatic pressure of cell contents pressing against wall",
                        mechanism: "Water enters cell by osmosis → presses against rigid wall → creates pressure",
                        function: "Maintains plant structure (rigidity), drives cell expansion",
                        importance: "Herbaceous plants rely on turgor for support (no woody stems)",
                        wilting: "Loss of turgor (dehydration) → plants wilt"
                    },
                    cellShape: {
                        determination: "Rigid wall determines and maintains cell shape",
                        growth: "Direction of cellulose microfibril deposition directs cell expansion",
                        example: "Transverse microfibrils → cell elongates longitudinally"
                    },
                    protection: {
                        mechanical: "Resists physical damage, herbivores",
                        pathogen: "Barrier to fungi, bacteria (especially lignified walls)",
                        desiccation: "Prevents excessive water loss (cuticle and lignin)"
                    },
                    transport: {
                        apoplastic: "Water and dissolved substances move through cell walls and intercellular spaces",
                        porosity: "Pores in wall allow passage of molecules up to ~5 nm",
                        CaspariStrip: "Suberin in endodermis blocks apoplastic transport, forces through cells"
                    }
                },
                
                cellWallModification: {
                    cuticle: "Waxy layer (cutin, waxes) on outer epidermal walls → waterproofing, reduce transpiration",
                    suberin: "Waterproofing layer in cork cells (bark), Casparian strip (endodermis)",
                    silica: "Deposited in some plants (grasses, horsetails) → abrasion resistance",
                    callose: "β-1,3-glucan deposited rapidly in response to stress, wounding, at sieve plates"
                }
            },
            
            fungalCellWalls: {
                composition: {
                    chitin: {
                        definition: "Main structural component (10-20% of wall)",
                        structure: "Linear polymer of β-1,4-linked N-acetylglucosamine (NAG)",
                        similarity: "Similar to cellulose but with NAG instead of glucose",
                        microfibrils: "Chitin chains form crystalline microfibrils",
                        note: "Also found in arthropod exoskeletons"
                    },
                    glucans: {
                        types: "β-1,3-glucan (major), β-1,6-glucan",
                        function: "Matrix polysaccharides, cross-link chitin",
                        percentage: "50-60% of wall"
                    },
                    proteins: {
                        mannoproteins: "Glycoproteins (mannose-rich) on outer surface",
                        function: "Cell adhesion, recognition, protection"
                    }
                },
                structure: {
                    layers: "Inner chitin layer, outer glucan-protein layer",
                    flexibility: "More flexible than plant cell walls"
                },
                function: "Shape, protection, osmotic stability",
                diversity: "Varies among fungal species and cell types (hyphae vs yeast)"
            },
            
            bacterialCellWalls: {
                overview: "Bacterial cell walls are essential for survival, provide shape and protection",
                
                composition: {
                    peptidoglycan: {
                        definition: "Main component (also called murein)",
                        structure: {
                            glycanChains: "Alternating N-acetylglucosamine (NAG) and N-acetylmuramic acid (NAM), β-1,4-linked",
                            peptideBridges: "Short peptides (4-5 amino acids) attached to NAM, cross-link chains",
                            crossLinking: "Peptide bridges connect adjacent glycan chains → mesh-like structure"
                        },
                        strength: "Provides mechanical strength, resists osmotic pressure (bacteria often in hypotonic environments)",
                        uniqueness: "Unique to bacteria (not in eukaryotes) - antibiotic target"
                    }
                },
                
                types: {
                    gramPositive: {
                        peptidoglycanLayer: "Thick (20-80 nm), many layers",
                        teichoicAcids: "Polymers of glycerol or ribitol phosphate, extend through peptidoglycan",
                        outerMembrane: "Absent",
                        staining: "Retains crystal violet stain (purple)",
                        examples: "Staphylococcus, Streptococcus, Bacillus, Clostridium",
                        periplasmic: "Thin periplasmic space"
                    },
                    gramNegative: {
                        peptidoglycanLayer: "Thin (2-7 nm), single layer",
                        outerMembrane: {
                            presence: "Yes",
                            structure: "Lipopolysaccharide (LPS) outer leaflet, phospholipids inner leaflet",
                            LPS: "Lipid A (endotoxin) + core polysaccharide + O-antigen",
                            porins: "Allow passage of small molecules"
                        },
                        periplasmic: "Larger periplasmic space between inner and outer membranes",
                        staining: "Does not retain crystal violet (pink after counterstain)",
                        examples: "E. coli, Salmonella, Pseudomonas, Neisseria",
                        endotoxin: "LPS (lipid A) is endotoxin → strong immune response (fever, septic shock)"
                    }
                },
                
                functions: {
                    shape: "Determines bacterial shape (cocci, bacilli, spirilla)",
                    osmoticProtection: "Prevents lysis in hypotonic environments",
                    attachment: "Site for attachment of flagella, pili",
                    virulence: "LPS in Gram-negatives is major virulence factor"
                },
                
                antibioticTargets: {
                    penicillin: {
                        target: "Transpeptidases (penicillin-binding proteins) - cross-link peptidoglycan",
                        mechanism: "Inhibits cross-linking → weakened cell wall → lysis (especially during division)",
                        spectrum: "More effective against Gram-positives (easier access to peptidoglycan)"
                    },
                    vancomycin: {
                        target: "Binds D-Ala-D-Ala terminus of peptide chains",
                        mechanism: "Prevents cross-linking → weakened wall → lysis",
                        use: "Gram-positive infections, especially MRSA (methicillin-resistant S. aureus)"
                    },
                    lysozyme: {
                        type: "Enzyme (in tears, saliva, egg white)",
                        target: "Hydrolyzes β-1,4 bonds in peptidoglycan",
                        mechanism: "Breaks glycan chains → weakened wall → lysis"
                    }
                }
            },
            
            archaealCellWalls: {
                diversity: "Highly variable among archaea",
                noPeptidoglycan: "Do not contain peptidoglycan (unlike bacteria)",
                types: {
                    pseudopeptidoglycan: "Similar to peptidoglycan but β-1,3 linkages, different sugars (NAT instead of NAM)",
                    Slayer: "Paracrystalline surface layer proteins (common)",
                    polysaccharides: "Various polysaccharides (some species)",
                    glycoproteins: "Protein-carbohydrate complexes"
                },
                function: "Shape, protection, attachment"
            },
            
            comparisonWithAnimalECM: {
                cellWall: "Rigid, external to membrane, provides structural support and shape",
                extracellularMatrix: {
                    location: "Animal cells - secreted by cells, surrounds cells",
                    composition: "Collagen (fibers), proteoglycans, glycoproteins (fibronectin, laminin)",
                    flexibility: "Flexible (not rigid like cell wall)",
                    functions: "Support, tissue organization, cell signaling, adhesion, migration",
                    rigidity: "Varies - cartilage (moderately rigid), bone (very rigid with mineralization)",
                    note: "Animals lack rigid cell wall, allowing greater cell flexibility and motility"
                }
            },
            
            comparison: {
                cellWallTypes: [
                    ["Organism", "Main Component", "Additional Components", "Function"],
                    ["Plants", "Cellulose (β-1,4-glucose)", "Hemicellulose, pectin, lignin (secondary)", "Support, turgor, shape, protection"],
                    ["Fungi", "Chitin (β-1,4-NAG)", "Glucans, mannoproteins", "Shape, protection, osmotic stability"],
                    ["Gram+ Bacteria", "Peptidoglycan (thick)", "Teichoic acids", "Shape, osmotic protection, antibiotic target"],
                    ["Gram- Bacteria", "Peptidoglycan (thin)", "Outer membrane (LPS), porins", "Shape, protection, barrier, virulence"],
                    ["Archaea", "Variable (no peptidoglycan)", "Pseudopeptidoglycan, S-layer, polysaccharides", "Shape, protection"]
                ]
            },
            
            examples: [
                {
                    organism: "Arabidopsis (Plant)",
                    cellWall: "Primary wall (cellulose, hemicellulose, pectin) in all cells; secondary wall (lignified) in xylem, fibers",
                    function: "Turgor provides structure; xylem walls waterproof and strong for water transport"
                },
                {
                    organism: "Aspergillus (Fungus)",
                    cellWall: "Chitin and glucans",
                    function: "Maintain hyphal shape, resist osmotic stress, allow extension growth at tips"
                },
                {
                    organism: "E. coli (Gram- Bacterium)",
                    cellWall: "Thin peptidoglycan layer, outer membrane with LPS",
                    function: "Maintain rod shape, resist osmotic lysis, LPS barrier to antibiotics and detergents"
                },
                {
                    organism: "Staphylococcus aureus (Gram+ Bacterium)",
                    cellWall: "Thick peptidoglycan layer (20-80 nm)",
                    function: "Spherical shape (coccus), resist osmotic stress, attachment site for virulence factors"
                }
            ],
            
            applications: [
                "Antibiotics - targeting bacterial cell wall synthesis (penicillins, cephalosporins, vancomycin)",
                "Paper industry - cellulose from plant cell walls",
                "Biofuels - breaking down cellulose and lignin to produce ethanol",
                "Food industry - pectin as gelling agent, dietary fiber from cell walls",
                "Textiles - cotton (cellulose), linen (cellulose)",
                "Construction - wood (lignified cell walls), bamboo",
                "Understanding plant development - cell wall loosening and expansion",
                "Fungal infections - targeting chitin synthesis (antifungal drugs)",
                "Biodefense - LPS (endotoxin) in Gram-negative bacteria causes septic shock"
            ]
        };
        
        return content;
    }

    handleRibosomes(problem) {
        const content = {
            topic: "Ribosomes: Protein Synthesis Machinery",
            category: 'organelles',
            summary: "Ribosomes are large ribonucleoprotein complexes responsible for translating mRNA into proteins. Found in all cells (prokaryotic and eukaryotic), they can be free in cytoplasm or bound to endoplasmic reticulum. Despite being called organelles, they lack a membrane.",
            
            overview: {
                definition: "Large molecular machines composed of ribosomal RNA (rRNA) and ribosomal proteins that catalyze protein synthesis (translation)",
                discovery: "George Palade (1950s) - electron microscopy revealed small, dense particles",
                name: "Named for ribonucleic acid (RNA) and Greek 'soma' (body)",
                noMembrane: "Not membrane-bound (technically not an organelle, but functionally treated as one)",
                universality: "Present in all living cells - prokaryotes and eukaryotes",
                abundance: "Millions per cell (especially in protein-synthesizing cells)",
                function: "Translate genetic code (mRNA) into proteins (polypeptides)"
            },
            
            structure: {
                composition: {
                    rRNA: "Ribosomal RNA (~60% of ribosome mass)",
                    proteins: "Ribosomal proteins (~40% of ribosome mass)",
                    ratio: "~2:1 RNA:protein by mass"
                },
                
                subunits: {
                    overview: "All ribosomes composed of two subunits (large and small) that associate during translation",
                    prokaryotic: {
                        total: "70S ribosome (S = Svedberg unit, sedimentation rate)",
                        smallSubunit: {
                            size: "30S",
                            rRNA: "16S rRNA (~1540 nucleotides)",
                            proteins: "21 proteins (named S1-S21, S = small)",
                            function: "Binds mRNA, decodes genetic code (matches codon to anticodon)"
                        },
                        largeSubunit: {
                            size: "50S",
                            rRNA: "23S rRNA (~2900 nt) + 5S rRNA (~120 nt)",
                            proteins: "31 proteins (named L1-L31, L = large)",
                            function: "Catalyzes peptide bond formation (peptidyl transferase activity)"
                        },
                        note: "30S + 50S = 70S (not 80S because S units are not additive - based on shape and density)"
                    },
                    eukaryotic: {
                        total: "80S ribosome (larger and more complex)",
                        smallSubunit: {
                            size: "40S",
                            rRNA: "18S rRNA (~1900 nucleotides)",
                            proteins: "~33 proteins",
                            function: "Decode mRNA"
                        },
                        largeSubunit: {
                            size: "60S",
                            rRNA: "28S rRNA (~4700 nt) + 5.8S rRNA (~160 nt) + 5S rRNA (~120 nt)",
                            proteins: "~49 proteins",
                            function: "Peptidyl transferase center"
                        },
                        note: "40S + 60S = 80S"
                    },
                    organellar: {
                        mitochondria: "70S ribosomes (like prokaryotic - evidence for endosymbiotic origin)",
                        chloroplasts: "70S ribosomes (like prokaryotic - evidence for endosymbiotic origin)",
                        note: "Similarity to bacterial ribosomes supports endosymbiotic theory"
                    }
                },
                
                sites: {
                    A_site: {
                        name: "Aminoacyl-tRNA binding site (A = aminoacyl)",
                        function: "Incoming aminoacyl-tRNA (charged tRNA) binds here",
                        location: "Spans both subunits"
                    },
                    P_site: {
                        name: "Peptidyl-tRNA binding site (P = peptidyl)",
                        function: "Holds tRNA carrying growing polypeptide chain",
                        location: "Spans both subunits"
                    },
                    E_site: {
                        name: "Exit site (E = exit)",
                        function: "Discharged tRNA (after donating amino acid) exits here",
                        location: "Primarily on large subunit"
                    }
                },
                
                functionalRegions: {
                    decodingCenter: {
                        location: "Small subunit",
                        function: "Match codon (mRNA) with anticodon (tRNA)",
                        accuracy: "High-fidelity codon-anticodon pairing (error rate ~1 in 10,000)"
                    },
                    peptidylTransferaseCenter: {
                        location: "Large subunit",
                        function: "Catalyze peptide bond formation between amino acids",
                        ribozyme: "Catalytic activity due to rRNA (23S/28S rRNA), not protein - ribozyme!",
                        mechanism: "23S/28S rRNA positions substrates and stabilizes transition state",
                        importance: "Proves RNA can be catalytic (not just proteins)",
                        discovery: "Harry Noller and colleagues (1992) - Nobel Prize-worthy finding"
                    },
                    mRNAchannel: {
                        location: "Small subunit",
                        function: "mRNA passes through channel during translation"
                    },
                    exitTunnel: {
                        location: "Large subunit",
                        function: "Nascent polypeptide exits through tunnel (~10 nm long, 1-2 nm wide)",
                        width: "Wide enough for unfolded polypeptide but not folded protein"
                    }
                }
            },
            
            ribosomeTypes: {
                freeRibosomes: {
                    location: "Free-floating in cytoplasm (cytosol)",
                    synthesis: "Proteins for use in cytoplasm",
                    examples: "Enzymes for glycolysis, cytoplasmic structural proteins, transcription factors",
                    abundance: "More abundant in cells making lots of cytoplasmic proteins"
                },
                boundRibosomes: {
                    location: "Attached to endoplasmic reticulum (rough ER) or nuclear envelope",
                    attachment: "Via signal recognition particle (SRP) system",
                    synthesis: "Proteins destined for secretion, plasma membrane, lysosomes, or ER itself",
                    examples: "Secreted proteins (insulin, antibodies, digestive enzymes), membrane proteins, lysosomal enzymes",
                    abundance: "More abundant in secretory cells (pancreatic acinar cells, plasma cells)",
                    note: "Same ribosomes as free ribosomes - not different types, just different locations"
                },
                interchangeability: "Free and bound ribosomes are functionally identical - location depends on protein being synthesized"
            },
            
            ribosomeBiogenesis: {
                eukaryotic: {
                    location: "Nucleolus (for rRNA transcription and ribosome assembly)",
                    rRNAtranscription: {
                        RNApolI: "Transcribes 45S pre-rRNA (in nucleolus) → processed to 18S, 5.8S, 28S rRNA",
                        RNApolIII: "Transcribes 5S rRNA (outside nucleolus, in nucleoplasm)"
                    },
                    processing: "45S pre-rRNA cleaved and modified (methylation, pseudouridylation) → mature 18S, 5.8S, 28S rRNA",
                    assembly: {
                        ribosomalProteins: "Synthesized in cytoplasm, imported into nucleus/nucleolus",
                        smallSubunit: "18S rRNA + proteins assemble in nucleolus → 40S pre-subunit",
                        largeSubunit: "28S, 5.8S, 5S rRNA + proteins assemble → 60S pre-subunit",
                        maturation: "Pre-subunits undergo further modifications",
                        export: "Separate subunits exported through nuclear pores to cytoplasm",
                        association: "Subunits associate on mRNA during translation initiation"
                    },
                    rate: "Cells can produce ~10,000 ribosomes per minute (especially in rapidly growing cells)",
                    energyCost: "Ribosome biogenesis is energetically expensive (requires ~90% of cell's energy in rapidly dividing cells)"
                },
                prokaryotic: {
                    location: "No compartmentalization - occurs in cytoplasm (nucleoid region)",
                    transcription: "30S rRNA precursor → 16S rRNA; 23S and 5S rRNA from same precursor",
                    assembly: "Co-transcriptional (proteins bind as rRNA being transcribed)",
                    speed: "Faster than eukaryotic (no nuclear export)"
                }
            },
            
            translation: {
                overview: "Process of synthesizing polypeptide based on mRNA sequence",
                geneticCode: "3-nucleotide codons (mRNA) specify amino acids",
                
                initiation: {
                    prokaryotic: {
                        shineDalgarno: "Ribosome binding site (RBS) on mRNA (~8 nt upstream of AUG start codon)",
                        smallSubunit: "30S binds to Shine-Dalgarno sequence, positions AUG at P site",
                        initiatorTRNA: "fMet-tRNA (formylmethionine-tRNA) binds to AUG codon in P site",
                        largeSubunit: "50S joins → 70S initiation complex",
                        factors: "Initiation factors (IF1, IF2, IF3) assist",
                        firstAminoAcid: "fMet (formylmethionine) - formyl group later removed"
                    },
                    eukaryotic: {
                        fivePrimeCap: "Small subunit (40S) binds to 5' cap of mRNA (with initiation factors)",
                        scanning: "40S scans mRNA 5'→3' until finds AUG start codon (in Kozak sequence)",
                        initiatorTRNA: "Met-tRNA (methionine-tRNA, not formylated) binds to AUG in P site",
                        largeSubunit: "60S joins → 80S initiation complex",
                        factors: "Many eIFs (eukaryotic initiation factors)",
                        firstAminoAcid: "Met (methionine)",
                        regulation: "Highly regulated step (rate-limiting for many mRNAs)"
                    }
                },
                
                elongation: {
                    step1_binding: {
                        event: "Aminoacyl-tRNA (charged tRNA) binds to A site",
                        matching: "Anticodon (tRNA) base-pairs with codon (mRNA)",
                        factor: "EF-Tu (prokaryotes) or eEF1A (eukaryotes) delivers aminoacyl-tRNA",
                        proofreading: "Ribosome checks correct codon-anticodon pairing (decoding center in 16S/18S rRNA)"
                    },
                    step2_peptideBond: {
                        event: "Peptide bond formed between amino acid in P site and amino acid in A site",
                        catalysis: "Peptidyl transferase center (23S/28S rRNA) catalyzes reaction",
                        mechanism: "Nucleophilic attack - amino group (A site) attacks carbonyl carbon of peptidyl-tRNA (P site)",
                        result: "Growing polypeptide now attached to tRNA in A site; P site tRNA now uncharged"
                    },
                    step3_translocation: {
                        event: "Ribosome moves 3 nucleotides (one codon) along mRNA in 5'→3' direction",
                        result: {
                            A_to_P: "Peptidyl-tRNA moves from A site to P site",
                            P_to_E: "Uncharged tRNA moves from P site to E site",
                            A_empty: "A site now empty, ready for next aminoacyl-tRNA"
                        },
                        factor: "EF-G (prokaryotes) or eEF2 (eukaryotes) with GTP hydrolysis",
                        E_exit: "Uncharged tRNA exits from E site"
                    },
                    cycle: "Steps 1-3 repeat for each codon (elongation cycle)",
                    rate: "~20 amino acids per second (prokaryotes), ~2-10 amino acids per second (eukaryotes)",
                    accuracy: "Error rate ~1 in 10,000 (due to proofreading)"
                },
                
                termination: {
                    stopCodons: "UAA, UAG, UGA (nonsense codons) - do not code for amino acids",
                    releaseFactors: {
                        prokaryotic: "RF1 (recognizes UAA, UAG), RF2 (recognizes UAA, UGA)",
                        eukaryotic: "eRF1 (recognizes all three stop codons)"
                    },
                    mechanism: "Release factor enters A site, triggers hydrolysis of bond between polypeptide and tRNA in P site",
                    result: "Completed polypeptide released from ribosome",
                    dissociation: "Ribosomal subunits dissociate from mRNA, can be recycled",
                    factors: "RF3 (prokaryotes) or eRF3 (eukaryotes) assist in subunit dissociation"
                }
            },
            
            polyribosomes: {
                definition: "Multiple ribosomes translating same mRNA simultaneously (also called polysomes)",
                structure: "String of ribosomes on single mRNA (looks like beads on string)",
                advantage: "Produce multiple copies of same protein from one mRNA → efficient",
                appearance: "Visible in electron microscopy - rosette or linear arrangements",
                examples: "Common in cells actively synthesizing proteins (pancreatic acinar cells, reticulocytes)",
                location: "Can be free polysomes or ER-bound polysomes"
            },
            
            antibiotics: {
                targeting: "Many antibiotics target bacterial ribosomes (70S), not eukaryotic ribosomes (80S) → selective toxicity",
                examples: {
                    streptomycin: {
                        target: "30S subunit (small subunit of bacterial ribosome)",
                        mechanism: "Binds near decoding center, causes misreading of mRNA → incorrect amino acids incorporated → nonfunctional proteins",
                        use: "Tuberculosis, some Gram-negative infections"
                    },
                    tetracycline: {
                        target: "30S subunit",
                        mechanism: "Blocks A site, prevents aminoacyl-tRNA binding",
                        use: "Broad-spectrum (many bacterial infections, acne, Lyme disease)"
                    },
                    chloramphenicol: {
                        target: "50S subunit (large subunit)",
                        mechanism: "Inhibits peptidyl transferase activity → blocks peptide bond formation",
                        use: "Serious infections (but toxic - can cause aplastic anemia), used topically",
                        note: "Also inhibits mitochondrial ribosomes (70S) → can have side effects"
                    },
                    erythromycin: {
                        target: "50S subunit",
                        mechanism: "Blocks exit tunnel → prevents elongation of polypeptide",
                        class: "Macrolides",
                        use: "Gram-positive infections, respiratory infections, alternative to penicillin"
                    },
                    gentamicin: {
                        target: "30S subunit",
                        mechanism: "Causes misreading of mRNA",
                        class: "Aminoglycosides",
                        use: "Serious Gram-negative infections",
                        toxicity: "Nephrotoxic, ototoxic (damages kidney and ear)"
                    }
                },
                resistance: {
                    mechanisms: "Mutations in ribosomal RNA or proteins, methylation of rRNA, efflux pumps, enzymatic inactivation",
                    problem: "Antibiotic resistance increasing (MRSA, MDR-TB)"
                }
            },
            
            comparison: {
                prokaryoticVsEukaryotic: [
                    ["Feature", "Prokaryotic (70S)", "Eukaryotic (80S)"],
                    ["Size", "70S (2.5 MDa)", "80S (4.2 MDa)"],
                    ["Small subunit", "30S (16S rRNA + 21 proteins)", "40S (18S rRNA + ~33 proteins)"],
                    ["Large subunit", "50S (23S + 5S rRNA + 31 proteins)", "60S (28S + 5.8S + 5S rRNA + ~49 proteins)"],
                    ["Location", "Cytoplasm", "Cytoplasm, ER"],
                    ["First amino acid", "fMet (formylmethionine)", "Met (methionine)"],
                    ["mRNA binding", "Shine-Dalgarno sequence", "5' cap recognition, scanning"],
                    ["Antibiotic sensitivity", "Sensitive (target for antibiotics)", "Resistant (different structure)"],
                    ["Speed", "~20 aa/sec", "~2-10 aa/sec (slower)"]
                ]
            },
            
            examples: [
                {
                    cell: "Pancreatic Acinar Cells",
                    ribosomes: "Extensive rough ER with bound ribosomes",
                    function: "Synthesize digestive enzymes (amylase, lipase, proteases) for secretion into small intestine",
                    abundance: "Millions of ribosomes per cell",
                    appearance: "RER packed with ribosomes gives basophilic appearance (Nissl substance)"
                },
                {
                    cell: "Plasma B Cells",
                    ribosomes: "Extensive rough ER",
                    function: "Synthesize and secrete antibodies (immunoglobulins) at high rate (~2000 molecules/sec)",
                    volume: "RER can occupy >50% of cytoplasm"
                },
                {
                    cell: "Reticulocytes (Immature RBCs)",
                    ribosomes: "Free ribosomes (polysomes)",
                    function: "Synthesize hemoglobin (cytoplasmic protein)",
                    appearance: "Reticulin network (residual ribosomes) visible with special stains",
                    maturation: "Lose ribosomes and nucleus → mature RBCs (no protein synthesis)"
                },
                {
                    cell: "Neurons",
                    ribosomes: "Free and ER-bound ribosomes in cell body (soma); free ribosomes in dendrites",
                    function: "Synthesize proteins for neurotransmission, cytoskeleton, signaling",
                    localTranslation: "mRNA and ribosomes transported to dendrites for local protein synthesis (synaptic plasticity)"
                }
            ],
            
            applications: [
                "Antibiotic development - targeting bacterial ribosomes",
                "Understanding antibiotic resistance - ribosome mutations",
                "Protein production - engineering bacteria/yeast with optimal ribosome function for recombinant proteins",
                "Understanding genetic diseases - mutations in ribosomal proteins or assembly factors (ribosomopathies)",
                "Cancer research - increased ribosome biogenesis in cancer cells (rapid growth), targeting as therapy",
                "Structural biology - ribosome structure determination (Nobel Prize 2009 - Ramakrishnan, Steitz, Yonath)",
                "Evolutionary biology - comparing ribosomal RNA sequences to construct phylogenetic trees",
                "Understanding translation disorders - nonsense-mediated decay, ribosome stalling"
            ],
            
            diseases: {
                ribosomopathies: {
                    definition: "Diseases caused by defects in ribosome biogenesis or function",
                    examples: {
                        DiamondBlackfanAnemia: {
                            cause: "Mutations in ribosomal proteins (RPS19 most common)",
                            symptoms: "Anemia (reduced red blood cell production), birth defects",
                            mechanism: "Defective ribosome assembly → p53 activation → cell cycle arrest in erythroid progenitors",
                            treatment: "Corticosteroids, blood transfusions, bone marrow transplant"
                        },
                        TreacherCollinsSyndrome: {
                            cause: "Mutations in TCOF1 (involved in ribosome biogenesis)",
                            symptoms: "Facial bone abnormalities (underdeveloped cheekbones, jaw)",
                            mechanism: "Reduced ribosome biogenesis in neural crest cells during development"
                        },
                        FiveqMinusSyndrome: {
                            cause: "Deletion of chromosome 5q (includes ribosomal protein genes)",
                            type: "Myelodysplastic syndrome",
                            symptoms: "Anemia, low platelet count",
                            treatment: "Lenalidomide"
                        }
                    }
                }
            }
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
            throw new Error(`Unable to recognize cellular structure topic: ${topic}`);
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
            throw new Error(`Failed to process cellular structure request: ${error.message}`);
        }
    }

    getCellularContent(problem) {
        const handler = this.cellularTopics[problem.type]?.handler;
        if (!handler) {
            throw new Error(`No handler available for cellular structure topic: ${problem.type}`);
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
            currentResearch: `Current research in ${content.topic} includes...`,
            openQuestions: "Unresolved questions in the field...",
            techniques: "Advanced techniques used to study this topic..."
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
                p.replace('{concept}', topicType)
            ),
            afterLearning: this.metacognitivePrompts.afterLearning.map(p => 
                p.replace('{topic}', this.cellularTopics[topicType]?.name || topicType)
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

    // ========================================
    // CONTENT GENERATION METHODS
    // ========================================

    generateCellularContent(problem, content) {
        const contentSections = [];

        // Generate overview section
        contentSections.push(this.generateOverviewSection(problem, content));

        // Generate specific content sections based on content structure
        if (content.cellTheory) {
            contentSections.push(this.generateCellTheorySection(content));
        }

        if (content.prokaryoticVsEukaryotic) {
            contentSections.push(this.generateCellTypeComparisonSection(content));
        }

        if (content.plantVsAnimalCells) {
            contentSections.push(this.generatePlantAnimalComparisonSection(content));
        }

        if (content.structure) {
            contentSections.push(this.generateStructureSection(content));
        }

        if (content.fluidMosaicModel) {
            contentSections.push(this.generateFluidMosaicModelSection(content));
        }

        if (content.membraneTransport) {
            contentSections.push(this.generateMembraneTransportSection(content));
        }

        if (content.chromatinAndChromosomes) {
            contentSections.push(this.generateChromatinSection(content));
        }

        if (content.nuclearFunctions) {
            contentSections.push(this.generateNuclearFunctionsSection(content));
        }

        if (content.functions) {
            contentSections.push(this.generateFunctionsSection(content));
        }

        if (content.endosymbioticTheory) {
            contentSections.push(this.generateEndosymbioticTheorySection(content));
        }

        if (content.photosynthesis) {
            contentSections.push(this.generatePhotosynthesisSection(content));
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

    generateCellTheorySection(content) {
        return {
            sectionType: 'cell_theory',
            title: 'Cell Theory',
            data: content.cellTheory
        };
    }

    generateCellTypeComparisonSection(content) {
        return {
            sectionType: 'cell_type_comparison',
            title: 'Prokaryotic vs Eukaryotic Cells',
            data: content.prokaryoticVsEukaryotic
        };
    }

    generatePlantAnimalComparisonSection(content) {
        return {
            sectionType: 'plant_animal_comparison',
            title: 'Plant vs Animal Cells',
            data: content.plantVsAnimalCells
        };
    }

    generateStructureSection(content) {
        return {
            sectionType: 'structure',
            title: 'Cellular Structure',
            data: content.structure
        };
    }

    generateFluidMosaicModelSection(content) {
        return {
            sectionType: 'fluid_mosaic_model',
            title: 'Fluid Mosaic Model of Membrane',
            data: content.fluidMosaicModel
        };
    }

    generateMembraneTransportSection(content) {
        return {
            sectionType: 'membrane_transport',
            title: 'Membrane Transport Mechanisms',
            data: content.membraneTransport
        };
    }

    generateChromatinSection(content) {
        return {
            sectionType: 'chromatin_chromosomes',
            title: 'Chromatin and Chromosomes',
            data: content.chromatinAndChromosomes
        };
    }

    generateNuclearFunctionsSection(content) {
        return {
            sectionType: 'nuclear_functions',
            title: 'Nuclear Functions',
            data: content.nuclearFunctions
        };
    }

    generateFunctionsSection(content) {
        return {
            sectionType: 'functions',
            title: 'Functions and Roles',
            data: content.functions
        };
    }

    generateEndosymbioticTheorySection(content) {
        return {
            sectionType: 'endosymbiotic_theory',
            title: 'Endosymbiotic Theory',
            data: content.endosymbioticTheory
        };
    }

    generatePhotosynthesisSection(content) {
        return {
            sectionType: 'photosynthesis',
            title: 'Photosynthesis',
            data: content.photosynthesis
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
        
        // Extract from cell theory
        if (content.cellTheory && content.cellTheory.principles) {
            content.cellTheory.principles.forEach(principle => {
                keyPoints.push(principle);
            });
        }

        // Extract from comparisons
        if (content.prokaryoticVsEukaryotic) {
            keyPoints.push("Prokaryotic cells lack membrane-bound nucleus and organelles");
            keyPoints.push("Eukaryotic cells have nucleus and membrane-bound organelles");
        }

        if (content.plantVsAnimalCells) {
            keyPoints.push("Plant cells have cell walls, chloroplasts, and large central vacuoles");
            keyPoints.push("Animal cells lack cell walls and have centrioles");
        }

        // Extract from structure
        if (content.structure) {
            Object.keys(content.structure).slice(0, 3).forEach(key => {
                if (content.structure[key].definition) {
                    keyPoints.push(`${key}: ${content.structure[key].definition}`);
                } else if (content.structure[key].function) {
                    keyPoints.push(`${key}: ${content.structure[key].function}`);
                }
            });
        }

        return keyPoints.slice(0, 5);
    }

    // ========================================
    // EXPERIMENT HANDLING METHODS
    // ========================================

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

    findExperimentByTopic(topic) {
        const topicLower = topic.toLowerCase();
        
        for (const [id, exp] of Object.entries(this.cellularExperiments)) {
            if (exp.name.toLowerCase().includes(topicLower)) {
                return exp;
            }
        }

        for (const [id, exp] of Object.entries(this.cellularExperiments)) {
            if (exp.relatedTopics.some(t => topicLower.includes(t.toLowerCase()))) {
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
                    } else if (typeof value === 'object') {
                        Object.entries(value).forEach(([subKey, subValue]) => {
                            formatted.push([`  ${subKey}:`, '']);
                            if (Array.isArray(subValue)) {
                                subValue.forEach((item, i) => {
                                    formatted.push([`    ${i + 1}.`, item]);
                                });
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

        if (labExp.expectedObservations || labExp.observations) {
            const obs = labExp.expectedObservations || labExp.observations;
            formatted.push(['', '']);
            formatted.push(['Expected Observations', '']);
            Object.entries(obs).forEach(([key, value]) => {
                formatted.push([`  ${key}:`, '']);
                if (Array.isArray(value)) {
                    value.forEach(observation => formatted.push(['    -', observation]));
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

        if (labExp.dataCollection) {
            formatted.push(['', '']);
            formatted.push(['Data Collection', '']);
            Object.entries(labExp.dataCollection).forEach(([key, value]) => {
                if (Array.isArray(value)) {
                    formatted.push([key, '']);
                    value.forEach(item => {
                        if (Array.isArray(item)) {
                            formatted.push(item);
                        } else {
                            formatted.push(['  •', item]);
                        }
                    });
                } else {
                    formatted.push([key, value]);
                }
            });
        }

        if (labExp.analysis) {
            formatted.push(['', '']);
            formatted.push(['Analysis', '']);
            Object.entries(labExp.analysis).forEach(([key, value]) => {
                if (Array.isArray(value)) {
                    formatted.push([key, '']);
                    value.forEach(item => {
                        if (Array.isArray(item)) {
                            formatted.push(item);
                        } else {
                            formatted.push(['  •', item]);
                        }
                    });
                } else {
                    formatted.push([key, typeof value === 'object' ? JSON.stringify(value) : value]);
                }
            });
        }

        if (labExp.results) {
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
                labExp.safetyPrecautions.forEach(safety => {
                    formatted.push(['  ⚠', safety]);
                });
            }
        }

        return formatted;
    }

    generateExperimentWorkbook(experimentContent) {
        const workbook = this.createWorkbookStructure();
        workbook.title = 'Cellular Structure Experiment Workbook';

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

    getRelatedExperiments(topicType) {
        const related = [];
        
        Object.entries(this.cellularExperiments).forEach(([id, experiment]) => {
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
        return Object.entries(this.cellularExperiments).map(([id, exp]) => ({
            id: id,
            name: exp.name,
            category: exp.category,
            relatedTopics: exp.relatedTopics,
            scientist: exp.historicalBackground?.scientist,
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


    // ========================================
    // WORKBOOK GENERATION METHODS
    // ========================================

    generateCellularWorkbook() {
        if (!this.currentContent || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();
        workbook.title = 'Cellular Structure Workbook';

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
            title: 'Cellular Structure Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            dimensions: { width: this.width, height: this.height },
            learnerLevel: this.learnerProfile.currentLevel,
            sections: []
        };
    }

    // ========================================
    // DIAGRAM GENERATION METHODS
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
            note: "Cellular structure diagrams"
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

    getRelevantCellularDiagrams(topicType) {
        const diagramMap = {
            cell_types: [
                "cellStructure",
                "prokaryoticCell",
                "eukaryoticCell",
                "plantCell",
                "animalCell",
                "cellComparison"
            ],
            cell_membrane: [
                "cellMembrane",
                "fluidMosaicModel",
                "membraneTransport",
                "osmosis",
                "activetransport"
            ],
            nucleus: [
                "nucleus",
                "chromosomes",
                "dnaStructure",
                "chromatin",
                "nuclearPore",
                "cellStructure"
            ],
            mitochondria: [
                "mitochondrion",
                "cellularRespiration",
                "electronTransportChain",
                "atpStructure",
                "cellStructure"
            ],
            chloroplasts: [
                "chloroplastStructure",
                "photosynthesisDetailed",
                "lightReactions",
                "calvinCycle",
                "plantCell"
            ],
            endomembrane_system: [
                "endoplasmicReticulum",
                "golgiApparatus",
                "vesicleTransport",
                "cellStructure",
                "proteinSynthesis"
            ],
            cytoskeleton: [
                "cytoskeleton",
                "microfilaments",
                "microtubules",
                "cellStructure",
                "cellDivision"
            ],
            cell_junctions: [
                "cellJunctions",
                "tightJunctions",
                "gapJunctions",
                "desmosomes",
                "plasmodesmata"
            ],
            cell_wall: [
                "cellWall",
                "plantCell",
                "cellularStructures"
            ],
            ribosomes: [
                "ribosomes",
                "translation",
                "proteinSynthesis",
                "cellStructure"
            ]
        };

        return diagramMap[topicType] || [];
    }

    // Create placeholder section that will be updated when diagrams are ready
    createDiagramsPlaceholderSection() {
        if (!this.includeDiagramsInWorkbook) {
            return null;
        }

        return {
            title: 'Cellular Structure Diagrams',
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
            title: 'Cellular Structure Diagrams',
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
    // WORKBOOK SECTION CREATION METHODS
    // ========================================

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
    // CELLULAR STRUCTURE SPECIFIC HELPER METHODS
    // ========================================

    getTopicRelevance(topicType) {
        const relevance = {
            cell_types: "Understanding cell types is fundamental to all biology - distinguishes prokaryotic from eukaryotic life",
            cell_membrane: "Cell membrane controls what enters and exits cells, essential for maintaining cellular homeostasis",
            nucleus: "Nucleus houses genetic material and controls all cellular activities through gene expression",
            mitochondria: "Mitochondria produce ATP through cellular respiration, powering all cellular processes",
            chloroplasts: "Chloroplasts convert light energy to chemical energy, basis of most food chains on Earth",
            endomembrane_system: "Endomembrane system processes and packages proteins and lipids for cellular functions",
            cytoskeleton: "Cytoskeleton provides structure, enables movement, and facilitates intracellular transport",
            cell_junctions: "Cell junctions connect cells in tissues, enabling communication and coordinated function",
            cell_wall: "Cell walls provide structural support and protection in plants, fungi, and bacteria",
            ribosomes: "Ribosomes synthesize proteins, the molecular machines that perform most cellular functions"
        };

        return relevance[topicType] || "Important cellular structure concept";
    }

    suggestRelatedTopics() {
        if (!this.currentProblem) return [];

        const relatedTopicsMap = {
            cell_types: ['cell_membrane', 'nucleus', 'cell_wall'],
            cell_membrane: ['cell_types', 'endomembrane_system', 'cell_junctions'],
            nucleus: ['cell_types', 'ribosomes', 'endomembrane_system'],
            mitochondria: ['cell_types', 'cell_membrane', 'chloroplasts'],
            chloroplasts: ['cell_types', 'mitochondria', 'cell_wall'],
            endomembrane_system: ['cell_membrane', 'nucleus', 'ribosomes'],
            cytoskeleton: ['cell_types', 'cell_membrane', 'cell_junctions'],
            cell_junctions: ['cell_membrane', 'cytoskeleton', 'cell_types'],
            cell_wall: ['cell_types', 'cell_membrane', 'chloroplasts'],
            ribosomes: ['nucleus', 'endomembrane_system', 'cell_types']
        };

        const relatedTypes = relatedTopicsMap[this.currentProblem.type] || [];

        return relatedTypes.map(type => ({
            type: type,
            name: this.cellularTopics[type]?.name,
            description: this.cellularTopics[type]?.description
        }));
    }

    // DIAGRAM GENERATION

    generateCellularDiagramData() {
        if (!this.currentContent) return;

        const { type } = this.currentProblem;

        this.diagramData = {
            type: type,
            diagrams: this.getRelevantCellularDiagrams(type),
            placeholder: true,
            note: "Diagram generation will be implemented with actual cellular structures"
        };
    }

    generateGlossary() {
        if (!this.currentContent) return {};

        const glossary = {};

        // Extract from cell theory
        if (this.currentContent.cellTheory) {
            if (this.currentContent.cellTheory.principles) {
                glossary['Cell Theory'] = this.currentContent.cellTheory.principles.join('; ');
            }
        }

        // Extract from cell type comparisons
        if (this.currentContent.prokaryoticVsEukaryotic) {
            if (this.currentContent.prokaryoticVsEukaryotic.prokaryotic) {
                glossary['Prokaryotic Cell'] = this.currentContent.prokaryoticVsEukaryotic.prokaryotic.definition || 
                    "Cell lacking membrane-bound nucleus and organelles";
            }
            if (this.currentContent.prokaryoticVsEukaryotic.eukaryotic) {
                glossary['Eukaryotic Cell'] = this.currentContent.prokaryoticVsEukaryotic.eukaryotic.definition || 
                    "Cell with membrane-bound nucleus and organelles";
            }
        }

        // Extract from structure
        if (this.currentContent.structure) {
            this.extractGlossaryFromStructure(this.currentContent.structure, glossary);
        }

        // Extract from fluid mosaic model
        if (this.currentContent.fluidMosaicModel) {
            glossary['Fluid Mosaic Model'] = "Model describing cell membrane as fluid structure with embedded proteins";
            if (this.currentContent.fluidMosaicModel.components) {
                Object.entries(this.currentContent.fluidMosaicModel.components).forEach(([key, component]) => {
                    if (component.definition) {
                        glossary[this.formatKey(key)] = component.definition;
                    }
                });
            }
        }

        // Extract from membrane transport
        if (this.currentContent.membraneTransport) {
            glossary['Selective Permeability'] = "Membrane allows some substances through but not others";
            if (this.currentContent.membraneTransport.passiveTransport) {
                glossary['Passive Transport'] = "Movement down concentration gradient; no energy required";
            }
            if (this.currentContent.membraneTransport.activeTransport) {
                glossary['Active Transport'] = "Movement against concentration gradient; requires ATP energy";
            }
        }

        // Extract from organelle-specific content
        if (this.currentContent.functions) {
            if (this.currentContent.functions.ATPproduction) {
                glossary['ATP Production'] = "Process of generating ATP, the cell's energy currency";
            }
            if (this.currentContent.functions.photosynthesis) {
                glossary['Photosynthesis'] = "Process converting light energy to chemical energy (glucose)";
            }
        }

        // Extract key definitions if present
        if (this.currentContent.keyDefinitions) {
            Object.entries(this.currentContent.keyDefinitions).forEach(([term, definition]) => {
                glossary[term] = definition;
            });
        }

        return glossary;
    }

    extractGlossaryFromStructure(structure, glossary) {
        Object.entries(structure).forEach(([key, value]) => {
            if (typeof value === 'object' && value !== null) {
                if (value.definition) {
                    glossary[this.formatKey(key)] = value.definition;
                }
                if (value.function && !value.definition) {
                    glossary[this.formatKey(key)] = value.function;
                }
                // Recurse for nested objects
                Object.entries(value).forEach(([subKey, subValue]) => {
                    if (typeof subValue === 'object' && subValue !== null) {
                        if (subValue.definition) {
                            glossary[this.formatKey(subKey)] = subValue.definition;
                        }
                        if (subValue.function && !subValue.definition) {
                            glossary[this.formatKey(subKey)] = subValue.function;
                        }
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
            // Cell types
            prokaryotic_cell: "Like a studio apartment - everything in one room, no separate compartments",
            eukaryotic_cell: "Like a mansion with many specialized rooms, each with specific functions",
            plant_cell: "Like a house with a fence (cell wall) and solar panels (chloroplasts)",
            animal_cell: "Like a flexible tent without rigid walls, can change shape",
            
            // Cell membrane
            cell_membrane: "Like a security checkpoint controlling who enters and exits",
            phospholipid_bilayer: "Like a sandwich with water-loving outsides and oil-loving inside",
            selective_permeability: "Like a bouncer at a club - only certain things get through",
            channel_protein: "Like a tunnel or doorway through a wall",
            carrier_protein: "Like a revolving door that changes shape to let things through",
            
            // Transport
            diffusion: "Like perfume spreading across a room - from high to low concentration",
            osmosis: "Like water seeking balance between two solutions",
            active_transport: "Like pumping water uphill - requires energy",
            sodium_potassium_pump: "Like a revolving door that pumps 3 people out for every 2 people in",
            endocytosis: "Like the cell 'eating' by wrapping around food with its membrane",
            exocytosis: "Like the cell 'spitting out' waste by fusing a bubble with the membrane",
            
            // Nucleus
            nucleus: "Like the control center or city hall of the cell",
            nuclear_envelope: "Like a fortress wall with guarded gates (nuclear pores)",
            nuclear_pores: "Like checkpoints controlling traffic in and out of the nucleus",
            chromatin: "Like a library's filing system for genetic information",
            nucleolus: "Like a ribosome factory within the nucleus",
            
            // Mitochondria
            mitochondrion: "Like a power plant generating electricity (ATP) for the city (cell)",
            cristae: "Like solar panels - more surface area for energy production",
            cellular_respiration: "Like controlled burning of fuel to release energy",
            
            // Chloroplasts
            chloroplast: "Like a solar panel factory converting light to chemical energy",
            thylakoid: "Like stacked coins where light reactions occur",
            stroma: "Like the workspace where CO₂ is assembled into sugar",
            grana: "Like stacks of pancakes - thylakoids piled up",
            
            // Endomembrane system
            rough_er: "Like an assembly line with workers (ribosomes) attached",
            smooth_er: "Like a manufacturing plant for lipids and detoxification center",
            golgi_apparatus: "Like a post office - packages and ships proteins",
            lysosome: "Like a recycling center or garbage disposal",
            vesicle: "Like a delivery truck carrying cargo in the cell",
            
            // Cytoskeleton
            cytoskeleton: "Like the skeleton and muscles of the cell combined",
            microfilaments: "Like cables or ropes providing support and enabling movement",
            microtubules: "Like highways for intracellular transport",
            intermediate_filaments: "Like reinforcing rods in concrete - provide strength",
            
            // Other structures
            cell_wall: "Like a rigid box or fence protecting and supporting the cell",
            central_vacuole: "Like a water tower providing turgor pressure to keep plant upright",
            ribosome: "Like a factory assembling proteins from amino acid parts",
            centriole: "Like an organizational hub for cell division",
            
            // Junctions
            tight_junction: "Like a waterproof seal between bathroom tiles",
            gap_junction: "Like a telephone line between neighboring cells",
            desmosome: "Like rivets holding metal sheets together",
            plasmodesmata: "Like tunnels connecting plant cells through their walls"
        };

        return analogies[concept] || "Performs a specialized cellular function";
    }

    adaptCellularLanguage(text, level) {
        if (!text) return '';

        const adaptations = {
            basic: {
                replacements: {
                    'prokaryotic': 'simple cell (no nucleus)',
                    'eukaryotic': 'complex cell (with nucleus)',
                    'organelle': 'cell part',
                    'phospholipid bilayer': 'double layer of fat molecules',
                    'selective permeability': 'choosy about what passes through',
                    'osmosis': 'water movement',
                    'diffusion': 'spreading out',
                    'active transport': 'using energy to move things',
                    'passive transport': 'movement without energy',
                    'mitochondria': 'powerhouse (makes energy)',
                    'chloroplast': 'solar panel (makes food)',
                    'nucleus': 'control center',
                    'ribosome': 'protein maker',
                    'cytoplasm': 'cell jelly',
                    'cell membrane': 'cell boundary',
                    'cell wall': 'cell armor',
                    'vacuole': 'storage bubble',
                    'chromatin': 'packaged DNA',
                    'endoplasmic reticulum': 'transport system',
                    'Golgi apparatus': 'packaging center'
                }
            },
            intermediate: {
                replacements: {
                    'prokaryotic': 'prokaryotic (no nucleus)',
                    'eukaryotic': 'eukaryotic (with nucleus)',
                    'organelle': 'organelle',
                    'phospholipid bilayer': 'phospholipid bilayer',
                    'mitochondria': 'mitochondria (powerhouse)',
                    'chloroplast': 'chloroplast (photosynthesis)'
                }
            },
            advanced: {
                replacements: {
                    'prokaryotic': 'prokaryotic (lacking membrane-bound nucleus)',
                    'eukaryotic': 'eukaryotic (compartmentalized with membrane-bound organelles)',
                    'phospholipid bilayer': 'amphipathic phospholipid bilayer',
                    'mitochondria': 'mitochondria (site of oxidative phosphorylation)',
                    'chloroplast': 'chloroplast (site of oxygenic photosynthesis)'
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
            cell_types: "Cell type determines function: prokaryotes simple but versatile; eukaryotes complex with specialized organelles. Connects to evolution and diversity of life.",
            cell_membrane: "Membrane structure determines transport: fluid mosaic model enables selective permeability. Connects to cell communication, homeostasis, and drug delivery.",
            nucleus: "Nuclear organization controls gene expression: chromatin structure regulates DNA access. Connects to development, differentiation, and disease.",
            mitochondria: "Mitochondrial structure supports ATP synthesis: cristae increase surface area for electron transport chain. Connects to metabolism, exercise physiology, and aging.",
            chloroplasts: "Chloroplast structure enables photosynthesis: thylakoids for light reactions, stroma for Calvin cycle. Connects to global carbon cycle and food production.",
            endomembrane_system: "Endomembrane components work together: ER synthesizes, Golgi modifies, vesicles transport. Connects to secretion, disease mechanisms, and biotechnology.",
            cytoskeleton: "Cytoskeleton provides dynamic structure: enables shape changes, movement, and transport. Connects to cell division, migration, and cancer metastasis.",
            cell_junctions: "Junctions integrate cells into tissues: enable communication and mechanical coupling. Connects to tissue organization, development, and disease.",
            cell_wall: "Cell wall composition determines properties: cellulose (plants), chitin (fungi), peptidoglycan (bacteria). Connects to antibiotic action and plant growth.",
            ribosomes: "Ribosome structure enables translation: reads mRNA, assembles amino acids into proteins. Connects to gene expression and antibiotic targets."
        };

        content.conceptualConnections = connections[this.currentProblem.type] || 
            "This topic connects to broader cellular biology principles";

        return content;
    }

    enrichWithCellularExamples(content) {
        if (!this.includeExamples || content.examples) return content;

        const exampleDatabase = {
            cell_types: [
                "E. coli bacteria: prokaryotic, 1-2 μm, no nucleus, very fast reproduction",
                "Red blood cells: eukaryotic but no nucleus when mature, specialized for O₂ transport",
                "Neurons: eukaryotic, can be over 1 meter long, highly specialized for signaling"
            ],
            cell_membrane: [
                "IV fluids must be isotonic (0.9% NaCl) to prevent cell damage",
                "Cystic fibrosis: defective Cl⁻ channel causes thick mucus",
                "Cholera toxin: causes Cl⁻ channels to open, leading to severe dehydration"
            ],
            nucleus: [
                "Down syndrome: extra chromosome 21 (trisomy 21)",
                "Cancer cells: often have abnormal nuclei (enlarged, irregular shape)",
                "Dolly the sheep: cloned using nuclear transfer technique"
            ],
            mitochondria: [
                "MELAS syndrome: mitochondrial disease affecting muscles and brain",
                "Endurance training: increases mitochondrial density in muscles",
                "Maternal inheritance: all mitochondria come from egg, not sperm"
            ],
            chloroplasts: [
                "Variegated leaves: lack chloroplasts in white areas",
                "Fall colors: chlorophyll breaks down, revealing carotenoids",
                "C4 plants (corn): modified photosynthesis for hot climates"
            ],
            endomembrane_system: [
                "Tay-Sachs disease: lysosomal storage disorder (missing enzyme)",
                "Insulin secretion: produced in rough ER, packaged by Golgi, released by exocytosis",
                "Chediak-Higashi syndrome: defective lysosomal trafficking"
            ],
            cytoskeleton: [
                "Cancer metastasis: requires cytoskeleton remodeling for cell migration",
                "Taxol (cancer drug): stabilizes microtubules, prevents cell division",
                "Muscular dystrophy: defective dystrophin (cytoskeletal protein)"
            ],
            cell_junctions: [
                "Blood-brain barrier: tight junctions prevent molecule passage",
                "Desmosomes in skin: hold cells together against mechanical stress",
                "Gap junctions in heart: allow coordinated contraction"
            ],
            cell_wall: [
                "Penicillin: inhibits bacterial cell wall synthesis",
                "Wood: primarily cellulose cell walls",
                "Mushroom chitin: makes fungi cell walls tough"
            ],
            ribosomes: [
                "Streptomycin antibiotic: targets bacterial 70S ribosomes",
                "Sickle cell anemia: mutation changes one amino acid (ribosome misreads)",
                "Ribosome profiling: measures protein synthesis in real-time"
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
            cell_types: {
                size: "Prokaryotes 1-5 μm vs Eukaryotes 10-100 μm (10-100× larger)",
                complexity: "Prokaryotes simple vs Eukaryotes complex (compartmentalized)",
                reproduction: "Prokaryotes fast (20 min) vs Eukaryotes slow (hours-days)"
            },
            cell_membrane: {
                plantVsAnimal: "Plant cells rigid (turgor) vs Animal cells flexible",
                transportTypes: "Passive (no ATP) vs Active (requires ATP)",
                speed: "Diffusion slow vs Active transport fast but costly"
            },
            nucleus: {
                prokaryoticVsEukaryotic: "No nucleus (prokaryotes) vs Nucleus (eukaryotes)",
                chromatinStates: "Euchromatin (active) vs Heterochromatin (inactive)",
                DNApackaging: "Compact 10,000-fold from double helix to chromosome"
            },
            mitochondria: {
                number: "Varies: 0 (RBCs) to 100,000 (oocytes)",
                efficiency: "Aerobic 36-38 ATP vs Anaerobic 2 ATP per glucose",
                origin: "Endosymbiotic from bacteria ~2 billion years ago"
            },
            chloroplasts: {
                C3vsC4vsCAM: "C3 simple but photorespiration vs C4/CAM more efficient in hot/dry",
                lightVsDark: "Light reactions (ATP, NADPH) vs Calvin cycle (glucose)",
                origin: "Endosymbiotic from cyanobacteria ~1.5 billion years ago"
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
            content.cellTheory ||
            content.prokaryoticVsEukaryotic ||
            content.plantVsAnimalCells ||
            content.structure ||
            content.fluidMosaicModel ||
            content.membraneTransport ||
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
            this.currentContent.cellTheory ||
            this.currentContent.prokaryoticVsEukaryotic ||
            this.currentContent.structure ||
            this.currentContent.functions;
        if (hasMainContent) score += 3;

        // Additional depth
        if (this.currentContent.endosymbioticTheory) score += 1;
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
        if (this.currentContent.structure) {
            Object.entries(this.currentContent.structure).forEach(([key, value]) => {
                if (key.toLowerCase().includes(category.toLowerCase())) {
                    filtered.items.push({ type: key, data: value });
                }
            });
        }

        if (this.currentContent.prokaryoticVsEukaryotic) {
            Object.entries(this.currentContent.prokaryoticVsEukaryotic).forEach(([key, value]) => {
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
        if (this.currentContent.cellTheory) {
            summary.keyPoints.push("Cell theory and historical development covered");
            summary.coverage.cellTheory = true;
        }

        if (this.currentContent.prokaryoticVsEukaryotic) {
            summary.keyPoints.push("Prokaryotic vs eukaryotic comparison provided");
            summary.coverage.cellTypes = true;
        }

        if (this.currentContent.structure) {
            summary.keyPoints.push("Structural components explained");
            summary.coverage.structure = Object.keys(this.currentContent.structure).length;
        }

        if (this.currentContent.functions) {
            summary.keyPoints.push("Functions and processes described");
            summary.coverage.functions = true;
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
        const basicTopics = ['cell_types', 'cell_wall'];
        const intermediateTopics = ['cell_membrane', 'nucleus', 'mitochondria', 'chloroplasts', 'ribosomes', 'cytoskeleton', 'cell_junctions'];
        const advancedTopics = ['endomembrane_system'];

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
            cell_types: [
                "Distinguish between prokaryotic and eukaryotic cells",
                "Compare and contrast plant and animal cells",
                "Explain the three principles of cell theory",
                "Describe how cell size is limited by surface area to volume ratio"
            ],
            cell_membrane: [
                "Describe the fluid mosaic model of membrane structure",
                "Explain selective permeability and its importance",
                "Compare passive and active transport mechanisms",
                "Predict effects of osmosis in different solutions"
            ],
            nucleus: [
                "Describe the structure and function of the nuclear envelope",
                "Explain how chromatin is organized into chromosomes",
                "Describe the role of the nucleolus in ribosome production",
                "Explain how nuclear pores regulate molecular traffic"
            ],
            mitochondria: [
                "Describe the structure of mitochondria and relate it to function",
                "Explain how cellular respiration produces ATP",
                "Describe evidence for the endosymbiotic theory",
                "Explain maternal inheritance of mitochondrial DNA"
            ],
            chloroplasts: [
                "Describe the structure of chloroplasts",
                "Explain the two stages of photosynthesis",
                "Compare mitochondria and chloroplasts",
                "Describe evidence for endosymbiotic origin of chloroplasts"
            ],
            endomembrane_system: [
                "Describe the components of the endomembrane system",
                "Explain the pathway of protein synthesis and secretion",
                "Describe the functions of the Golgi apparatus",
                "Explain the role of lysosomes in cellular digestion"
            ],
            cytoskeleton: [
                "Identify the three types of cytoskeletal filaments",
                "Describe the functions of the cytoskeleton",
                "Explain how the cytoskeleton enables cell movement",
                "Describe the role of centrioles in cell division"
            ],
            cell_junctions: [
                "Compare different types of cell junctions",
                "Explain the function of tight junctions",
                "Describe how gap junctions enable cell communication",
                "Compare plasmodesmata in plants to junctions in animals"
            ],
            cell_wall: [
                "Compare cell wall composition in different organisms",
                "Explain the function of cell walls",
                "Describe the structure of plant cell walls",
                "Explain how antibiotics target bacterial cell walls"
            ],
            ribosomes: [
                "Describe the structure of ribosomes",
                "Explain the role of ribosomes in protein synthesis",
                "Compare 70S and 80S ribosomes",
                "Describe where ribosomes are synthesized"
            ]
        };

        return objectivesDatabase[this.currentProblem.type] || [
            "Understand the key cellular concepts",
            "Apply knowledge to biological contexts",
            "Make connections between structure and function"
        ];
    }

    identifyCellularPrerequisites() {
        if (!this.currentProblem) return [];

        const prerequisitesDatabase = {
            cell_types: [
                "Basic biology (living vs non-living)",
                "Understanding of cells as fundamental units",
                "Knowledge of microscopy basics"
            ],
            cell_membrane: [
                "Lipid structure (from biochemistry)",
                "Protein structure basics",
                "Understanding of concentration gradients"
            ],
            nucleus: [
                "DNA structure and function",
                "Understanding of genes and chromosomes",
                "Basic knowledge of protein synthesis"
            ],
            mitochondria: [
                "Cellular respiration overview",
                "ATP structure and function",
                "Basic understanding of energy conversion"
            ],
            chloroplasts: [
                "Photosynthesis overview",
                "Light energy and pigments",
                "Understanding of glucose synthesis"
            ],
            endomembrane_system: [
                "Membrane structure",
                "Protein synthesis basics",
                "Understanding of vesicle transport"
            ],
            cytoskeleton: [
                "Protein structure",
                "Cell structure basics",
                "Understanding of cell movement"
            ],
            cell_junctions: [
                "Cell membrane structure",
                "Tissue organization basics",
                "Cell communication concepts"
            ],
            cell_wall: [
                "Carbohydrate structure (cellulose)",
                "Cell types (prokaryotic vs eukaryotic)",
                "Plant vs animal cell differences"
            ],
            ribosomes: [
                "Protein synthesis overview",
                "RNA types and functions",
                "Understanding of translation process"
            ]
        };

        return prerequisitesDatabase[this.currentProblem.type] || [
            "General biology background",
            "Basic chemistry knowledge"
        ];
    }

    generateCellularStudyTips() {
        if (!this.currentProblem) return [];

        const studyTipsDatabase = {
            cell_types: [
                "Create comparison tables for prokaryotic vs eukaryotic",
                "Draw and label both plant and animal cells",
                "Use microscopy images to identify cell types",
                "Make flashcards for cell theory and key terms"
            ],
            cell_membrane: [
                "Draw the phospholipid bilayer with labeled components",
                "Create flowcharts for different transport types",
                "Practice osmosis problems with different solutions",
                "Use analogies to remember transport mechanisms"
            ],
            nucleus: [
                "Draw the nucleus with all components labeled",
                "Create diagrams showing DNA → chromatin → chromosome",
                "Practice identifying structures in electron micrographs",
                "Make concept maps linking nucleus to gene expression"
            ],
            mitochondria: [
                "Draw mitochondrial structure with cristae",
                "Create flowcharts for cellular respiration stages",
                "Practice ATP yield calculations",
                "List evidence for endosymbiotic theory"
            ],
            chloroplasts: [
                "Draw chloroplast structure with thylakoids and grana",
                "Create flowcharts for photosynthesis (light and dark reactions)",
                "Compare chloroplast and mitochondrion structures",
                "Practice light reaction and Calvin cycle steps"
            ],
            endomembrane_system: [
                "Draw the secretory pathway step-by-step",
                "Create concept maps linking ER → Golgi → vesicles",
                "Practice identifying organelles in electron micrographs",
                "Use analogies (factory, post office) for each component"
            ],
            cytoskeleton: [
                "Draw the three types of filaments with sizes",
                "Create tables comparing microfilaments, intermediate filaments, microtubules",
                "Watch videos of cytoskeleton dynamics in living cells",
                "Relate structure to function for each filament type"
            ],
            cell_junctions: [
                "Draw each junction type with labels",
                "Create comparison tables for junction types",
                "Relate each junction to tissue types where it's found",
                "Use analogies to remember functions"
            ],
            cell_wall: [
                "Draw plant cell wall structure (primary, secondary)",
                "Compare cell wall composition across organisms",
                "Create tables for cell wall functions",
                "Relate cell wall to antibiotic action in bacteria"
            ],
            ribosomes: [
                "Draw ribosome structure (subunits, sites)",
                "Practice translation steps with tRNA and mRNA",
                "Compare 70S vs 80S ribosomes",
                "Relate ribosome location to protein destination"
            ]
        };

        return studyTipsDatabase[this.currentProblem.type] || [
            "Review material regularly with active recall",
            "Create visual aids and cell diagrams",
            "Practice explaining concepts to others",
            "Relate cellular structures to real-world applications"
        ];
    }

    generateCellularProcessTimeline(processName) {
        const timelines = {
            'Cell Division (Mitosis)': [
                { phase: 'Prophase', duration: '30-60 min', events: 'Chromatin condenses, nuclear envelope breaks down, spindle forms' },
                { phase: 'Metaphase', duration: '10-30 min', events: 'Chromosomes align at metaphase plate' },
                { phase: 'Anaphase', duration: '5-15 min', events: 'Sister chromatids separate, move to opposite poles' },
                { phase: 'Telophase', duration: '15-30 min', events: 'Nuclear envelopes reform, chromosomes decondense' },
                { phase: 'Cytokinesis', duration: '20-40 min', events: 'Cell divides into two daughter cells' }
            ],
            'Protein Secretion': [
                { step: 'Synthesis', location: 'Rough ER', duration: 'Minutes', product: 'Polypeptide enters ER lumen' },
                { step: 'Folding', location: 'ER lumen', duration: 'Minutes', product: 'Proper 3D structure, disulfide bonds' },
                { step: 'Transport to Golgi', location: 'Vesicles', duration: 'Minutes', product: 'Protein in transport vesicle' },
                { step: 'Modification', location: 'Golgi', duration: 'Minutes-Hours', product: 'Glycosylation, sorting' },
                { step: 'Secretion', location: 'Exocytosis', duration: 'Seconds-Minutes', product: 'Protein released outside cell' }
            ],
            'Endocytosis': [
                { step: 'Recognition', duration: 'Milliseconds', events: 'Ligand binds receptor' },
                { step: 'Pit Formation', duration: 'Seconds', events: 'Membrane invaginates, clathrin coat forms' },
                { step: 'Vesicle Budding', duration: 'Seconds', events: 'Vesicle pinches off, loses coat' },
                { step: 'Fusion', duration: 'Seconds', events: 'Vesicle fuses with endosome' },
                { step: 'Sorting', duration: 'Minutes', events: 'Contents sorted, receptor recycled or degraded' }
            ],
            'Nuclear Transport': [
                { step: 'Recognition', duration: 'Milliseconds', events: 'Importin binds NLS on cargo protein' },
                { step: 'Docking', duration: 'Milliseconds', events: 'Complex docks at nuclear pore' },
                { step: 'Translocation', duration: 'Milliseconds', events: 'Cargo moves through pore (GTP-dependent)' },
                { step: 'Release', duration: 'Milliseconds', events: 'Ran-GTP releases cargo in nucleus' },
                { step: 'Recycling', duration: 'Milliseconds', events: 'Importin returns to cytoplasm' }
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

        if (this.currentContent.cellTheory) {
            hierarchy.children.push({
                name: 'Cell Theory',
                type: 'foundational_concept'
            });
        }

        if (this.currentContent.prokaryoticVsEukaryotic) {
            hierarchy.children.push({
                name: 'Cell Type Comparison',
                type: 'classification'
            });
        }

        if (this.currentContent.structure) {
            hierarchy.children.push({
                name: 'Cellular Structure',
                type: 'section'
            });
        }

        if (this.currentContent.functions) {
            hierarchy.children.push({
                name: 'Functions',
                type: 'section'
            });
        }

        if (this.currentContent.endosymbioticTheory) {
            hierarchy.children.push({
                name: 'Evolutionary Origin',
                type: 'section'
            });
        }

        return hierarchy;
    }

}

export default EnhancedCellularStructureWorkbook;
