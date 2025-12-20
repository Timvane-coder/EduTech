// Enhanced Cell Biology Workbook - Comprehensive Biological Content System
import * as math from 'mathjs';

export class EnhancedCellBiologyWorkbook {
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
        this.initializeBiologyTopics();
        this.initializeMisconceptionDatabase();
        this.initializeExplanationTemplates();
        this.initializeBiologyLessons();
    }

    setThemeColors() {
        const themes = {
            biological: {
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
            // Biological notation
            'ATP': 'ATP',
            'ADP': 'ADP',
            'NADH': 'NADH',
            'FADH2': 'FADH₂',
            'CO2': 'CO₂',
            'O2': 'O₂',
            'H2O': 'H₂O',
            'glucose': 'C₆H₁₂O₆',
            'DNA': 'DNA',
            'RNA': 'RNA',
            'mRNA': 'mRNA',
            'tRNA': 'tRNA',
            'rRNA': 'rRNA'
        };
    }

    initializeBiologyTopics() {
        this.biologyTopics = {
            // 1. Cell Types
            cell_types: {
                patterns: [
                    /cell.*type/i,
                    /prokaryotic.*eukaryotic/i,
                    /animal.*plant.*cell/i,
                    /types.*of.*cells/i
                ],
                handler: this.handleCellTypes.bind(this),
                name: 'Cell Types',
                category: 'cell_structure',
                description: 'Different classifications and types of cells'
            },

            // 2. Organelles
            organelles: {
                patterns: [
                    /organelle/i,
                    /cell.*structure/i,
                    /mitochondria|nucleus|ribosome/i,
                    /cellular.*component/i
                ],
                handler: this.handleOrganelles.bind(this),
                name: 'Cell Organelles',
                category: 'cell_structure',
                description: 'Membrane-bound structures within cells'
            },

            // 3. Cellular Molecules
            cellular_molecules: {
                patterns: [
                    /molecule/i,
                    /protein|lipid|carbohydrate|nucleic.*acid/i,
                    /macromolecule/i,
                    /biomolecule/i
                ],
                handler: this.handleCellularMolecules.bind(this),
                name: 'Cellular Molecules',
                category: 'biochemistry',
                description: 'Biological macromolecules and small molecules'
            },

            // 4. Cellular Processes
            cellular_processes: {
                patterns: [
                    /cellular.*process/i,
                    /cell.*division|mitosis|meiosis/i,
                    /transcription|translation|replication/i,
                    /cell.*cycle/i
                ],
                handler: this.handleCellularProcesses.bind(this),
                name: 'Cellular Processes',
                category: 'cell_function',
                description: 'Dynamic processes occurring in cells'
            },

            // 5. Cell Membrane
            cell_membrane: {
                patterns: [
                    /cell.*membrane|plasma.*membrane/i,
                    /phospholipid.*bilayer/i,
                    /membrane.*structure|fluid.*mosaic/i,
                    /membrane.*component/i
                ],
                handler: this.handleCellMembrane.bind(this),
                name: 'Cell Membrane',
                category: 'cell_structure',
                description: 'Structure and function of the cell membrane'
            },

            // 6. Cell Communication
            cell_communication: {
                patterns: [
                    /cell.*communication|cell.*signaling/i,
                    /signal.*transduction/i,
                    /receptor|ligand/i,
                    /hormone.*signaling/i
                ],
                handler: this.handleCellCommunication.bind(this),
                name: 'Cell Communication',
                category: 'cell_function',
                description: 'How cells communicate with each other'
            },

            // 7. Transport Mechanisms
            transport_mechanisms: {
                patterns: [
                    /transport|diffusion|osmosis/i,
                    /active.*transport|passive.*transport/i,
                    /endocytosis|exocytosis/i,
                    /membrane.*transport/i
                ],
                handler: this.handleTransportMechanisms.bind(this),
                name: 'Transport Mechanisms',
                category: 'cell_function',
                description: 'Movement of substances across membranes'
            },

            // 8. Energy Metabolism
            energy_metabolism: {
                patterns: [
                    /cellular.*respiration|photosynthesis/i,
                    /glycolysis|krebs.*cycle|electron.*transport/i,
                    /ATP.*production|energy.*metabolism/i,
                    /fermentation/i
                ],
                handler: this.handleEnergyMetabolism.bind(this),
                name: 'Energy Metabolism',
                category: 'metabolism',
                description: 'Cellular energy production and utilization'
            },

            // 9. DNA and Genetics
            dna_genetics: {
                patterns: [
                    /DNA|gene|chromosome/i,
                    /genetic.*material|heredity/i,
                    /DNA.*structure|double.*helix/i,
                    /gene.*expression/i
                ],
                handler: this.handleDNAGenetics.bind(this),
                name: 'DNA and Genetics',
                category: 'genetics',
                description: 'Genetic material and inheritance'
            },

            // 10. Protein Synthesis
            protein_synthesis: {
                patterns: [
                    /protein.*synthesis|translation|transcription/i,
                    /ribosome|mRNA|tRNA/i,
                    /gene.*expression|central.*dogma/i,
                    /codon|anticodon/i
                ],
                handler: this.handleProteinSynthesis.bind(this),
                name: 'Protein Synthesis',
                category: 'molecular_biology',
                description: 'Process of making proteins from genetic information'
            },

            // 11. Cell Division
            cell_division: {
                patterns: [
                    /cell.*division|mitosis|meiosis/i,
                    /cytokinesis|karyokinesis/i,
                    /cell.*cycle|interphase/i,
                    /binary.*fission/i
                ],
                handler: this.handleCellDivision.bind(this),
                name: 'Cell Division',
                category: 'cell_function',
                description: 'Process of cell reproduction'
            },

            // 12. Enzymes and Catalysis
            enzymes: {
                patterns: [
                    /enzyme|catalyst/i,
                    /active.*site|substrate/i,
                    /enzyme.*kinetics|catalysis/i,
                    /inhibitor|cofactor/i
                ],
                handler: this.handleEnzymes.bind(this),
                name: 'Enzymes and Catalysis',
                category: 'biochemistry',
                description: 'Biological catalysts and their mechanisms'
            }
        };
    }

initializeBiologyLessons() {
        this.lessons = {
            cell_types: {
                title: "Cell Types and Classification",
                concepts: [
                    "Cells are the basic units of life",
                    "Prokaryotic cells lack membrane-bound nucleus",
                    "Eukaryotic cells have membrane-bound organelles",
                    "Animal and plant cells have distinct differences"
                ],
                theory: "Cell theory states that all living organisms are made of cells, cells are the basic unit of life, and all cells come from pre-existing cells. Understanding cell types is fundamental to biology.",
                keyDefinitions: {
                    "Prokaryotic Cell": "Simple cells without a nucleus or membrane-bound organelles (bacteria, archaea)",
                    "Eukaryotic Cell": "Complex cells with a nucleus and membrane-bound organelles (animals, plants, fungi, protists)",
                    "Cell Wall": "Rigid outer layer in plant cells, fungi, and bacteria",
                    "Nucleus": "Control center containing genetic material"
                },
                mainCategories: [
                    "Classify cells based on presence/absence of nucleus",
                    "Identify prokaryotic vs eukaryotic features",
                    "Distinguish animal vs plant cells",
                    "Understand specialized cell types"
                ],
                applications: [
                    "Medical diagnostics and disease understanding",
                    "Biotechnology and genetic engineering",
                    "Agricultural improvements",
                    "Evolutionary biology studies"
                ]
            },

            organelles: {
                title: "Cell Organelles and Their Functions",
                concepts: [
                    "Organelles are specialized structures within cells",
                    "Each organelle has specific functions",
                    "Some organelles are membrane-bound",
                    "Organelles work together for cell survival"
                ],
                theory: "The endomembrane system and other organelles compartmentalize cellular functions, allowing for efficiency and specialization. This compartmentalization is a hallmark of eukaryotic cells.",
                keyDefinitions: {
                    "Mitochondria": "Powerhouse of the cell; produces ATP through cellular respiration",
                    "Chloroplast": "Site of photosynthesis in plant cells",
                    "Endoplasmic Reticulum": "Network for protein and lipid synthesis",
                    "Golgi Apparatus": "Modifies, packages, and ships proteins",
                    "Lysosome": "Contains digestive enzymes for breaking down materials",
                    "Ribosome": "Site of protein synthesis",
                    "Nucleus": "Contains DNA and controls cell activities"
                },
                mainCategories: [
                    "Energy-producing organelles (mitochondria, chloroplasts)",
                    "Protein synthesis and processing (ribosomes, ER, Golgi)",
                    "Storage and transport (vesicles, vacuoles)",
                    "Genetic control (nucleus)"
                ],
                applications: [
                    "Understanding cellular diseases",
                    "Drug targeting and delivery",
                    "Metabolic engineering",
                    "Cell-based therapies"
                ]
            },

            cell_membrane: {
                title: "Cell Membrane Structure and Function",
                concepts: [
                    "Cell membrane is selectively permeable",
                    "Fluid mosaic model describes membrane structure",
                    "Phospholipid bilayer forms the membrane foundation",
                    "Membrane proteins perform various functions"
                ],
                theory: "The fluid mosaic model describes the cell membrane as a flexible, dynamic structure composed of a phospholipid bilayer with embedded proteins that can move laterally, creating a mosaic pattern.",
                keyDefinitions: {
                    "Phospholipid Bilayer": "Double layer of phospholipids with hydrophilic heads facing outward and hydrophobic tails facing inward",
                    "Integral Proteins": "Proteins embedded within or spanning the membrane",
                    "Peripheral Proteins": "Proteins attached to the membrane surface",
                    "Glycoproteins": "Proteins with attached carbohydrate chains for cell recognition",
                    "Cholesterol": "Steroid molecule that maintains membrane fluidity",
                    "Selective Permeability": "Membrane allows some substances to pass while blocking others"
                },
                models: {
                    "Fluid Mosaic Model": "Current model describing membrane as flexible lipid bilayer with floating proteins",
                    "Davson-Danielli Model": "Historical model proposing protein-lipid-protein sandwich (now outdated)",
                    "Robertson Unit Membrane": "Early model showing trilaminar structure"
                },
                mainFunctions: [
                    "Barrier function: separates internal from external environment",
                    "Transport: controls movement of substances",
                    "Communication: receives and transmits signals",
                    "Cell recognition: identifies self vs foreign cells",
                    "Adhesion: connects to other cells and extracellular matrix"
                ],
                applications: [
                    "Drug delivery systems",
                    "Understanding disease mechanisms",
                    "Artificial membrane development",
                    "Biosensor technology"
                ]
            },

            cellular_processes: {
                title: "Cellular Processes and Functions",
                concepts: [
                    "Cells undergo continuous dynamic processes",
                    "Cell division produces new cells",
                    "Metabolism provides energy and building blocks",
                    "Protein synthesis creates functional proteins"
                ],
                theory: "Cellular processes are coordinated sequences of molecular events that maintain life, enable growth, and respond to environmental changes. These processes are highly regulated and interconnected.",
                keyProcesses: {
                    "Mitosis": "Cell division producing two identical daughter cells",
                    "Meiosis": "Cell division producing four genetically diverse gametes",
                    "Cellular Respiration": "Breaking down glucose to produce ATP",
                    "Photosynthesis": "Converting light energy into chemical energy",
                    "Transcription": "Copying DNA information to RNA",
                    "Translation": "Using RNA to build proteins",
                    "DNA Replication": "Copying DNA before cell division"
                },
                processCategories: [
                    "Reproduction processes (mitosis, meiosis, binary fission)",
                    "Energy processes (respiration, photosynthesis, fermentation)",
                    "Information processes (replication, transcription, translation)",
                    "Transport processes (diffusion, osmosis, active transport)"
                ],
                applications: [
                    "Cancer research and treatment",
                    "Genetic engineering and biotechnology",
                    "Agricultural crop improvement",
                    "Understanding metabolic diseases"
                ]
            },

            transport_mechanisms: {
                title: "Cellular Transport Mechanisms",
                concepts: [
                    "Substances move across membranes via multiple mechanisms",
                    "Passive transport requires no energy",
                    "Active transport requires energy (ATP)",
                    "Concentration gradients drive passive transport"
                ],
                theory: "Transport mechanisms maintain cellular homeostasis by regulating the movement of ions, molecules, and water across membranes. The selectivity and directionality of transport are critical for cell survival.",
                keyMechanisms: {
                    "Simple Diffusion": "Movement from high to low concentration through membrane",
                    "Facilitated Diffusion": "Movement through protein channels without energy",
                    "Osmosis": "Diffusion of water across semipermeable membrane",
                    "Active Transport": "Movement against concentration gradient using ATP",
                    "Endocytosis": "Cell engulfs external material into vesicles",
                    "Exocytosis": "Cell expels material in vesicles to outside",
                    "Phagocytosis": "Cell eating - engulfing large particles",
                    "Pinocytosis": "Cell drinking - engulfing liquids"
                },
                categories: [
                    "Passive transport (no energy required)",
                    "Active transport (ATP required)",
                    "Bulk transport (vesicle-mediated)"
                ],
                applications: [
                    "Understanding drug absorption",
                    "Treating transport-related diseases",
                    "Designing drug delivery systems",
                    "Managing electrolyte imbalances"
                ]
            },

            energy_metabolism: {
                title: "Cellular Energy Metabolism",
                concepts: [
                    "ATP is the universal energy currency",
                    "Cellular respiration extracts energy from glucose",
                    "Photosynthesis captures light energy",
                    "Metabolic pathways are interconnected"
                ],
                theory: "Energy metabolism involves coupled redox reactions that transfer energy from nutrients to ATP. The processes of cellular respiration and photosynthesis are complementary, cycling energy and matter through ecosystems.",
                keyPathways: {
                    "Glycolysis": "Breakdown of glucose to pyruvate (cytoplasm, anaerobic, yields 2 ATP)",
                    "Krebs Cycle": "Complete oxidation of acetyl-CoA (mitochondrial matrix, yields NADH and FADH₂)",
                    "Electron Transport Chain": "ATP synthesis via chemiosmosis (inner mitochondrial membrane, yields ~34 ATP)",
                    "Photosynthesis Light Reactions": "Light energy → chemical energy (ATP, NADPH) in thylakoids",
                    "Calvin Cycle": "CO₂ fixation to produce glucose (chloroplast stroma)",
                    "Fermentation": "Anaerobic energy production (yields 2 ATP from glycolysis)"
                },
                energyYields: {
                    "Glycolysis": "2 ATP (net), 2 NADH",
                    "Krebs Cycle": "2 ATP, 6 NADH, 2 FADH₂ (per glucose)",
                    "Electron Transport": "~34 ATP (from NADH and FADH₂)",
                    "Total Aerobic Respiration": "~38 ATP per glucose",
                    "Fermentation": "2 ATP per glucose"
                },
                applications: [
                    "Understanding metabolic diseases",
                    "Athletic performance optimization",
                    "Biofuel production",
                    "Cancer metabolism research"
                ]
            },

            dna_genetics: {
                title: "DNA, Genes, and Heredity",
                concepts: [
                    "DNA is the hereditary material",
                    "Genes are segments of DNA that code for traits",
                    "DNA has a double helix structure",
                    "Genetic information flows from DNA to RNA to protein"
                ],
                theory: "The central dogma of molecular biology describes information flow: DNA → RNA → Protein. DNA stores genetic information, which is transcribed to RNA and translated to proteins that determine cellular function.",
                keyStructures: {
                    "Double Helix": "Two antiparallel DNA strands twisted in spiral",
                    "Nucleotide": "Building block of DNA (sugar + phosphate + base)",
                    "Base Pairs": "A-T (adenine-thymine) and G-C (guanine-cytosine)",
                    "Gene": "DNA sequence coding for a protein or RNA",
                    "Chromosome": "Organized structure of DNA and proteins",
                    "Chromatin": "Complex of DNA and histone proteins"
                },
                keyProcesses: [
                    "DNA replication: copying genetic information",
                    "Transcription: DNA → mRNA",
                    "Translation: mRNA → Protein",
                    "Mutation: changes in DNA sequence",
                    "Gene regulation: controlling gene expression"
                ],
                applications: [
                    "Genetic testing and counseling",
                    "Gene therapy",
                    "Forensic DNA analysis",
                    "Personalized medicine",
                    "Agricultural genetics"
                ]
            },

            protein_synthesis: {
                title: "Protein Synthesis: From Gene to Protein",
                concepts: [
                    "Genes provide instructions for making proteins",
                    "Transcription produces mRNA from DNA",
                    "Translation assembles amino acids into proteins",
                    "Ribosomes are the sites of translation"
                ],
                theory: "Protein synthesis is the process by which cells build proteins based on genetic instructions. It involves two main stages: transcription (DNA → RNA) and translation (RNA → Protein).",
                keyComponents: {
                    "mRNA": "Messenger RNA carrying genetic code from nucleus to ribosome",
                    "tRNA": "Transfer RNA bringing amino acids to ribosome",
                    "rRNA": "Ribosomal RNA forming the ribosome structure",
                    "Ribosome": "Molecular machine that reads mRNA and builds proteins",
                    "Codon": "Three-nucleotide sequence coding for one amino acid",
                    "Anticodon": "Complementary sequence on tRNA",
                    "Amino Acid": "Building block of proteins"
                },
                stages: {
                    "Transcription": [
                        "Initiation: RNA polymerase binds to promoter",
                        "Elongation: RNA polymerase synthesizes mRNA",
                        "Termination: Transcription stops at terminator sequence",
                        "RNA processing: Splicing removes introns, adds cap and tail"
                    ],
                    "Translation": [
                        "Initiation: Ribosome binds to mRNA at start codon (AUG)",
                        "Elongation: tRNAs bring amino acids, peptide bonds form",
                        "Termination: Stop codon reached, protein released",
                        "Post-translation: Protein folding and modification"
                    ]
                },
                applications: [
                    "Understanding genetic diseases",
                    "Developing new antibiotics",
                    "Producing recombinant proteins",
                    "Gene therapy strategies"
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.commonMisconceptions = {
            cell_types: {
                'Prokaryotic vs Eukaryotic': [
                    'Thinking prokaryotes have no DNA (they do, just not in a nucleus)',
                    'Believing all prokaryotes are harmful (most are beneficial)',
                    'Confusing bacteria with all prokaryotes (archaea are also prokaryotes)'
                ],
                'Animal vs Plant Cells': [
                    'Thinking only plant cells have cell membranes (both have them)',
                    'Believing plant cells don\'t have mitochondria (they have both mitochondria and chloroplasts)',
                    'Assuming all plant cells have chloroplasts (some don\'t, like root cells)'
                ]
            },
            cell_membrane: {
                'Membrane Structure': [
                    'Thinking membrane is solid and static (it\'s fluid and dynamic)',
                    'Believing proteins are fixed in position (they can move laterally)',
                    'Confusing selective permeability with impermeability'
                ],
                'Membrane Function': [
                    'Thinking membrane only keeps things out (it also allows controlled entry)',
                    'Believing all transport requires energy (passive transport doesn\'t)',
                    'Assuming membrane is just a barrier (it also recognizes and communicates)'
                ]
            },
            cellular_processes: {
                'Cell Division': [
                    'Confusing mitosis with meiosis',
                    'Thinking DNA replication happens during mitosis (it\'s before, in S phase)',
                    'Believing all cells divide at the same rate'
                ],
                'Energy Production': [
                    'Thinking only animals do cellular respiration (plants do too)',
                    'Believing photosynthesis only produces oxygen (also produces glucose)',
                    'Confusing fermentation with cellular respiration'
                ]
            },
            transport_mechanisms: {
                'Diffusion and Osmosis': [
                    'Thinking osmosis applies to all molecules (it\'s specifically water)',
                    'Believing diffusion always requires a membrane (it doesn\'t)',
                    'Confusing osmosis with active transport (osmosis is passive)'
                ],
                'Active vs Passive': [
                    'Thinking all transport across membranes requires energy',
                    'Believing concentration gradients aren\'t important for active transport',
                    'Confusing facilitated diffusion with active transport'
                ]
            }
        };

        this.clarificationStrategies = {
            visual_comparison: {
                method: 'Use side-by-side diagrams to highlight differences',
                effectiveness: 'High for structural and process comparisons'
            },
            analogy: {
                method: 'Relate biological concepts to familiar everyday examples',
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

    // MAIN HANDLER METHOD
    handleBiologyProblem(config) {
        const { topic, parameters, subTopic, context } = config;

        try {
            // Parse the biological query
            this.currentProblem = this.parseBiologyProblem(topic, parameters, subTopic, context);

            // Get content based on topic
            this.currentContent = this.getBiologyContent(this.currentProblem);

            // Generate content steps/sections
            this.contentSteps = this.generateBiologyContent(this.currentProblem, this.currentContent);

            // Generate diagram data if applicable
            this.generateBiologyDiagramData();

            // Generate workbook
            this.generateBiologyWorkbook();

            return {
                workbook: this.currentWorkbook,
                content: this.currentContent,
                diagrams: this.diagramData
            };

        } catch (error) {
            throw new Error(`Failed to process biology topic: ${error.message}`);
        }
    }

    parseBiologyProblem(topic, parameters = {}, subTopic = null, context = {}) {
        let topicType = null;

        // Match topic to handler
        for (const [type, config] of Object.entries(this.biologyTopics)) {
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
            throw new Error(`Unable to recognize biology topic: ${topic}`);
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



   filterContentByParameters(content, parameters) {
    if (!parameters || Object.keys(parameters).length === 0) {
        return content; // Return full content if no parameters
    }

    const filtered = { ...content };

    // Filter by specific items if parameters specify them
    if (parameters.specificItems && Array.isArray(parameters.specificItems)) {
        if (filtered.cellTypes) {
            filtered.cellTypes = filtered.cellTypes.filter(cell =>
                parameters.specificItems.some(item =>
                    cell.name.toLowerCase().includes(item.toLowerCase())
                )
            );
        }

        if (filtered.organelles) {
            filtered.organelles = filtered.organelles.filter(org =>
                parameters.specificItems.some(item =>
                    org.name.toLowerCase().includes(item.toLowerCase())
                )
            );
        }

        if (filtered.molecules) {
            filtered.molecules = filtered.molecules.filter(mol =>
                parameters.specificItems.some(item =>
                    mol.name.toLowerCase().includes(item.toLowerCase())
                )
            );
        }

        if (filtered.processes) {
            filtered.processes = filtered.processes.filter(proc =>
                parameters.specificItems.some(item =>
                    proc.name.toLowerCase().includes(item.toLowerCase())
                )
            );
        }
    }

    // Filter by category
    if (parameters.category) {
        if (filtered.cellTypes) {
            filtered.cellTypes = filtered.cellTypes.filter(cell =>
                cell.category.toLowerCase().includes(parameters.category.toLowerCase())
            );
        }

        if (filtered.organelles && filtered.categories) {
            const categoryKey = Object.keys(filtered.categories).find(key =>
                key.toLowerCase().includes(parameters.category.toLowerCase())
            );
            if (categoryKey) {
                const categoryOrganelles = filtered.categories[categoryKey].organelles;
                filtered.organelles = filtered.organelles.filter(org =>
                    categoryOrganelles.includes(org.name)
                );
            }
        }
    }

    // Filter by foundIn (for organelles)
    if (parameters.foundIn) {
        if (filtered.organelles) {
            filtered.organelles = filtered.organelles.filter(org =>
                org.foundIn.some(location =>
                    location.toLowerCase().includes(parameters.foundIn.toLowerCase())
                )
            );
        }
    }

    // Filter by function/purpose
    if (parameters.function) {
        if (filtered.organelles) {
            filtered.organelles = filtered.organelles.filter(org =>
                org.functions.some(func =>
                    func.toLowerCase().includes(parameters.function.toLowerCase())
                )
            );
        }

        if (filtered.processes) {
            filtered.processes = filtered.processes.filter(proc =>
                proc.purpose?.toLowerCase().includes(parameters.function.toLowerCase())
            );
        }
    }

    // Limit number of items returned
    if (parameters.limit && typeof parameters.limit === 'number') {
        if (filtered.cellTypes) filtered.cellTypes = filtered.cellTypes.slice(0, parameters.limit);
        if (filtered.organelles) filtered.organelles = filtered.organelles.slice(0, parameters.limit);
        if (filtered.molecules) filtered.molecules = filtered.molecules.slice(0, parameters.limit);
        if (filtered.processes) filtered.processes = filtered.processes.slice(0, parameters.limit);
    }

    return filtered;
}


    getBiologyContent(problem) {
    const handler = this.biologyTopics[problem.type]?.handler;
    if (!handler) {
        throw new Error(`No handler available for biology topic: ${problem.type}`);
    }

    // Get full content from handler
    let content = handler(problem);

    // Apply parameter filtering if parameters are provided
    if (problem.parameters && Object.keys(problem.parameters).length > 0) {
        content = this.filterContentByParameters(content, problem.parameters);
    }

    return content;
}

    // TOPIC HANDLERS - Each returns structured biological content

    handleCellTypes(problem) {
        const { subTopic, parameters } = problem;

        const cellTypesList = [
            {
                name: "Prokaryotic Cell",
                category: "Basic cell type",
                characteristics: [
                    "No membrane-bound nucleus",
                    "No membrane-bound organelles",
                    "Circular DNA (nucleoid region)",
                    "Smaller than eukaryotic cells (1-10 μm)",
                    "Cell wall present (peptidoglycan in bacteria)",
                    "Ribosomes present (70S)",
                    "Reproduce by binary fission"
                ],
                examples: ["Bacteria (E. coli, Streptococcus)", "Archaea (methanogens, halophiles)"],
                functions: ["Decomposition", "Nitrogen fixation", "Fermentation", "Extremophile survival"],
                diagram: "prokaryotic_cell_diagram"
            },
            {
                name: "Eukaryotic Cell",
                category: "Complex cell type",
                characteristics: [
                    "Membrane-bound nucleus containing DNA",
                    "Multiple membrane-bound organelles",
                    "Linear DNA organized in chromosomes",
                    "Larger than prokaryotic cells (10-100 μm)",
                    "Complex internal membrane systems",
                    "Ribosomes present (80S)",
                    "Reproduce by mitosis or meiosis"
                ],
                examples: ["Animal cells", "Plant cells", "Fungal cells", "Protists"],
                functions: ["Complex multicellular organization", "Specialized tissue formation", "Advanced metabolism"],
                diagram: "eukaryotic_cell_diagram"
            },
            {
                name: "Animal Cell",
                category: "Eukaryotic cell type",
                characteristics: [
                    "No cell wall (flexible cell membrane only)",
                    "No chloroplasts (cannot photosynthesize)",
                    "Small vacuoles or none",
                    "Centrioles present (for cell division)",
                    "Irregular or round shape",
                    "Lysosomes present",
                    "Store energy as glycogen"
                ],
                uniqueOrganelles: ["Centrioles", "Lysosomes"],
                examples: ["Nerve cells", "Muscle cells", "Blood cells", "Epithelial cells"],
                functions: ["Movement", "Sensory response", "Immune function", "Reproduction"],
                diagram: "animal_cell_diagram"
            },
            {
                name: "Plant Cell",
                category: "Eukaryotic cell type",
                characteristics: [
                    "Rigid cell wall (cellulose) outside membrane",
                    "Chloroplasts for photosynthesis",
                    "Large central vacuole",
                    "No centrioles",
                    "Fixed rectangular shape",
                    "Plasmodesmata connecting cells",
                    "Store energy as starch"
                ],
                uniqueOrganelles: ["Chloroplasts", "Central vacuole", "Cell wall"],
                examples: ["Leaf mesophyll cells", "Root cells", "Xylem", "Phloem"],
                functions: ["Photosynthesis", "Structural support", "Water storage", "Nutrient transport"],
                diagram: "plant_cell_diagram"
            },
            {
                name: "Bacterial Cell",
                category: "Prokaryotic specialized type",
                characteristics: [
                    "Peptidoglycan cell wall",
                    "May have capsule for protection",
                    "Flagella for movement (some species)",
                    "Pili for DNA transfer",
                    "Plasmids (extra circular DNA)",
                    "No mitochondria (cell membrane does respiration)"
                ],
                examples: ["E. coli", "Streptococcus", "Bacillus", "Cyanobacteria"],
                functions: ["Decomposition", "Disease causation", "Symbiotic relationships", "Biotechnology applications"],
                diagram: "bacterial_cell_diagram"
            },
            {
                name: "Fungal Cell",
                category: "Eukaryotic specialized type",
                characteristics: [
                    "Cell wall made of chitin",
                    "May be unicellular (yeast) or multicellular (mold)",
                    "No chloroplasts (heterotrophic)",
                    "Often multinucleate",
                    "External digestion of food",
                    "Reproduce by spores"
                ],
                examples: ["Yeast", "Mushrooms", "Molds", "Penicillium"],
                functions: ["Decomposition", "Fermentation", "Antibiotic production", "Food production"],
                diagram: "fungal_cell_diagram"
            },
            {
                name: "Archaeal Cell",
                category: "Prokaryotic domain",
                characteristics: [
                    "No peptidoglycan in cell wall",
                    "Unique membrane lipids (ether bonds)",
                    "Can survive extreme environments",
                    "Circular DNA like bacteria",
                    "Gene expression similar to eukaryotes",
                    "Metabolically diverse"
                ],
                examples: ["Methanogens", "Halophiles", "Thermophiles"],
                functions: ["Methane production", "Survival in extreme conditions", "Evolutionary insights"],
                diagram: "archaea_cell_diagram"
            }
        ];

        const comparisons = {
            prokaryotic_vs_eukaryotic: {
                criteria: ["Nucleus", "Size", "Organelles", "DNA Structure", "Cell Division", "Ribosomes"],
                prokaryotic: ["No nucleus", "1-10 μm", "No membrane-bound organelles", "Circular DNA", "Binary fission", "70S"],
                eukaryotic: ["Membrane-bound nucleus", "10-100 μm", "Membrane-bound organelles", "Linear DNA in chromosomes", "Mitosis/Meiosis", "80S"]
            },
            animal_vs_plant: {
                criteria: ["Cell Wall", "Chloroplasts", "Vacuoles", "Centrioles", "Shape", "Energy Storage"],
                animal: ["No cell wall", "No chloroplasts", "Small or absent", "Present", "Irregular/round", "Glycogen"],
                plant: ["Cellulose cell wall", "Present", "Large central vacuole", "Absent", "Fixed rectangular", "Starch"]
            }
        };

        return {
            topic: "Cell Types",
            cellTypes: cellTypesList,
            comparisons: comparisons,
            mainCategories: ["Prokaryotic (Bacteria, Archaea)", "Eukaryotic (Animal, Plant, Fungal, Protist)"],
            keyDistinctions: {
                structural: "Presence or absence of membrane-bound nucleus",
                complexity: "Number and types of organelles",
                size: "Prokaryotes smaller (1-10 μm) vs Eukaryotes larger (10-100 μm)",
                reproduction: "Binary fission vs Mitosis/Meiosis"
            },
            evolutionaryNote: "Eukaryotic cells likely evolved from prokaryotic ancestors through endosymbiosis",
            category: 'cell_types'
        };
    }

    handleOrganelles(problem) {
        const { subTopic } = problem;

        const organellesList = [
            {
                name: "Nucleus",
                type: "Membrane-bound",
                location: "Central region of cell",
                structure: [
                    "Nuclear envelope (double membrane with pores)",
                    "Nucleoplasm (gel-like interior)",
                    "Chromatin (DNA + proteins)",
                    "Nucleolus (ribosome assembly site)"
                ],
                functions: [
                    "Stores genetic information (DNA)",
                    "Controls cell activities through gene expression",
                    "Site of DNA replication",
                    "Ribosome assembly in nucleolus"
                ],
                foundIn: ["All eukaryotic cells"],
                analogy: "Control center or brain of the cell",
                diagram: "nucleus_structure"
            },
            {
                name: "Mitochondria",
                type: "Membrane-bound (double membrane)",
                location: "Scattered throughout cytoplasm",
                structure: [
                    "Outer membrane (smooth)",
                    "Inner membrane (folded into cristae)",
                    "Matrix (interior fluid)",
                    "Own circular DNA",
                    "70S ribosomes"
                ],
                functions: [
                    "Cellular respiration (produces ATP)",
                    "Krebs cycle in matrix",
                    "Electron transport chain on cristae",
                    "Regulates apoptosis"
                ],
                foundIn: ["Nearly all eukaryotic cells"],
                energyProduction: "~38 ATP per glucose molecule",
                analogy: "Powerhouse of the cell",
                diagram: "mitochondria_structure"
            },
            {
                name: "Chloroplast",
                type: "Membrane-bound (double membrane)",
                location: "Cytoplasm of plant cells",
                structure: [
                    "Outer membrane",
                    "Inner membrane",
                    "Stroma (fluid interior)",
                    "Thylakoids (disc-shaped structures)",
                    "Grana (stacks of thylakoids)",
                    "Own circular DNA"
                ],
                functions: [
                    "Photosynthesis (light → chemical energy)",
                    "Light reactions in thylakoids",
                    "Calvin cycle in stroma",
                    "Produces glucose and oxygen"
                ],
                foundIn: ["Plant cells and some protists"],
                analogy: "Solar panel of the cell",
                diagram: "chloroplast_structure"
            },
            {
                name: "Endoplasmic Reticulum (ER)",
                type: "Membrane-bound network",
                location: "Connected to nuclear envelope, extends through cytoplasm",
                structure: [
                    "Rough ER: studded with ribosomes",
                    "Smooth ER: no ribosomes",
                    "Network of interconnected membranes",
                    "Lumen (interior space)"
                ],
                functions: [
                    "Rough ER: protein synthesis and modification",
                    "Smooth ER: lipid synthesis",
                    "Smooth ER: detoxification",
                    "Smooth ER: calcium storage",
                    "Transport of materials"
                ],
                foundIn: ["All eukaryotic cells"],
                analogy: "Manufacturing and packaging facility",
                diagram: "er_structure"
            },
            {
                name: "Golgi Apparatus",
                type: "Membrane-bound",
                location: "Near nucleus and ER",
                structure: [
                    "Stacks of flattened membrane sacs (cisternae)",
                    "Cis face (receiving side)",
                    "Trans face (shipping side)",
                    "Vesicles budding off"
                ],
                functions: [
                    "Modifies proteins from ER",
                    "Packages proteins into vesicles",
                    "Sorts and ships proteins to destinations",
                    "Synthesizes certain carbohydrates"
                ],
                foundIn: ["All eukaryotic cells"],
                analogy: "Post office or shipping center",
                diagram: "golgi_structure"
            },
            {
                name: "Ribosome",
                type: "Not membrane-bound",
                location: "Free in cytoplasm or attached to rough ER",
                structure: [
                    "Two subunits (large and small)",
                    "Made of rRNA and proteins",
                    "70S in prokaryotes",
                    "80S in eukaryotes",
                    "Three binding sites (A, P, E)"
                ],
                functions: [
                    "Protein synthesis (translation)",
                    "Reads mRNA codons",
                    "Links amino acids into polypeptide chains"
                ],
                foundIn: ["All cells (prokaryotic and eukaryotic)"],
                analogy: "Protein factory or assembly line",
                diagram: "ribosome_structure"
            },
            {
                name: "Lysosome",
                type: "Membrane-bound vesicle",
                location: "Cytoplasm",
                structure: [
                    "Single membrane vesicle",
                    "Acidic interior (pH ~5)",
                    "Contains hydrolytic enzymes"
                ],
                functions: [
                    "Breaks down cellular waste",
                    "Digests worn-out organelles (autophagy)",
                    "Breaks down engulfed materials",
                    "Programmed cell death (apoptosis)"
                ],
                foundIn: ["Animal cells primarily"],
                analogy: "Recycling center or garbage disposal",
                diagram: "lysosome_structure"
            },
            {
                name: "Vacuole",
                type: "Membrane-bound sac",
                location: "Cytoplasm",
                structure: [
                    "Single membrane (tonoplast)",
                    "Fluid-filled interior",
                    "Large in plant cells, small in animal cells"
                ],
                functions: [
                    "Storage (water, nutrients, waste)",
                    "Maintains turgor pressure (plant cells)",
                    "Breaks down materials (like lysosomes)",
                    "Pigment storage"
                ],
                foundIn: ["Plant cells (large), animal cells (small), fungi, protists"],
                analogy: "Storage warehouse",
                diagram: "vacuole_structure"
            },
            {
                name: "Peroxisome",
                type: "Membrane-bound",
                location: "Cytoplasm",
                structure: [
                    "Single membrane vesicle",
                    "Contains oxidative enzymes",
                    "Self-replicating"
                ],
                functions: [
                    "Breaks down fatty acids",
                    "Detoxifies harmful substances",
                    "Breaks down hydrogen peroxide (H₂O₂)",
                    "Beta-oxidation of lipids"
                ],
                foundIn: ["Eukaryotic cells"],
                analogy: "Detoxification center",
                diagram: "peroxisome_structure"
            },
            {
                name: "Cytoskeleton",
                type: "Protein network",
                location: "Throughout cytoplasm",
                structure: [
                    "Microfilaments (actin)",
                    "Intermediate filaments",
                    "Microtubules (tubulin)"
                ],
                functions: [
                    "Maintains cell shape",
                    "Enables cell movement",
                    "Organelle transport",
                    "Cell division (spindle fibers)"
                ],
                foundIn: ["Eukaryotic cells"],
                analogy: "Scaffolding or skeleton",
                diagram: "cytoskeleton_structure"
            },
            {
                name: "Centrioles",
                type: "Protein structure",
                location: "Centrosome near nucleus",
                structure: [
                    "Pair of cylindrical structures",
                    "Made of microtubules (9 triplets)",
                    "Perpendicular to each other"
                ],
                functions: [
                    "Organize spindle fibers during cell division",
                    "Form basal bodies of cilia and flagella",
                    "Cell division in animal cells"
                ],
                foundIn: ["Animal cells and some protists"],
                analogy: "Organizing center for cell division",
                diagram: "centrioles_structure"
            },
            {
                name: "Cell Wall",
                type: "Extracellular structure",
                location: "Outside cell membrane",
                structure: [
                    "Plant: cellulose",
                    "Fungal: chitin",
                    "Bacterial: peptidoglycan",
                    "Rigid, porous structure"
                ],
                functions: [
                    "Structural support and protection",
                    "Prevents osmotic lysis",
                    "Maintains cell shape",
                    "Cell-cell adhesion"
                ],
                foundIn: ["Plants, fungi, bacteria, some protists"],
                analogy: "Armor or protective wall",
                diagram: "cell_wall_structure"
            }
        ];

        const organelleCategories = {
            energy: {
                name: "Energy Production",
                organelles: ["Mitochondria", "Chloroplast"],
                description: "Convert energy from one form to another"
            },
            synthesis: {
                name: "Synthesis and Processing",
                organelles: ["Ribosome", "Endoplasmic Reticulum", "Golgi Apparatus"],
                description: "Manufacture and process proteins and lipids"
            },
            storage: {
                name: "Storage and Transport",
                organelles: ["Vacuole", "Vesicle"],
                description: "Store materials and transport substances"
            },
            breakdown: {
                name: "Breakdown and Recycling",
                organelles: ["Lysosome", "Peroxisome"],
                description: "Digest and recycle cellular materials"
            },
            genetic: {
                name: "Genetic Control",
                organelles: ["Nucleus"],
                description: "Store and control genetic information"
            },
            structural: {
                name: "Structure and Movement",
                organelles: ["Cytoskeleton", "Centrioles", "Cell Wall"],
                description: "Maintain shape and enable movement"
            }
        };

        return {
            topic: "Cell Organelles",
            organelles: organellesList,
            categories: organelleCategories,
            animalCellOrganelles: organellesList.filter(org => 
                org.foundIn.some(loc => loc.includes("animal") || loc.includes("All") || loc.includes("Nearly all"))
            ),
            plantCellOrganelles: organellesList.filter(org => 
                org.foundIn.some(loc => loc.includes("plant") || loc.includes("Plant") || loc.includes("All") || loc.includes("Nearly all"))
            ),
            prokaryoticStructures: ["Ribosome (70S)", "Nucleoid", "Cell wall", "Plasma membrane", "Flagella", "Pili"],
            endosymbioticTheory: {
                description: "Mitochondria and chloroplasts likely evolved from ancient prokaryotes engulfed by early eukaryotic cells",
                evidence: [
                    "Own circular DNA",
                    "Double membrane",
                    "70S ribosomes (like bacteria)",
                    "Reproduce independently by binary fission",
                    "Similar size to bacteria"
                ]
            },
            category: 'organelles'
        };
    }

handleCellularMolecules(problem) {
        const moleculesList = [
            {
                name: "Proteins",
                category: "Macromolecule",
                monomers: "Amino acids",
                structure: [
                    "Primary: sequence of amino acids",
                    "Secondary: alpha helix or beta pleated sheet",
                    "Tertiary: 3D folding",
                    "Quaternary: multiple polypeptide chains"
                ],
                bonds: ["Peptide bonds", "Hydrogen bonds", "Disulfide bridges", "Ionic bonds"],
                functions: [
                    "Enzymes (catalyze reactions)",
                    "Structural support (collagen, keratin)",
                    "Transport (hemoglobin)",
                    "Defense (antibodies)",
                    "Signaling (hormones)",
                    "Movement (actin, myosin)"
                ],
                examples: ["Enzymes", "Antibodies", "Hemoglobin", "Insulin", "Collagen"],
                elements: "C, H, O, N, sometimes S",
                diagram: "protein_structure"
            },
            {
                name: "Carbohydrates",
                category: "Macromolecule",
                monomers: "Monosaccharides (simple sugars)",
                structure: [
                    "Monosaccharides: single sugar unit (glucose, fructose)",
                    "Disaccharides: two sugar units (sucrose, lactose)",
                    "Polysaccharides: many sugar units (starch, glycogen, cellulose)"
                ],
                bonds: ["Glycosidic bonds"],
                functions: [
                    "Quick energy source (glucose)",
                    "Energy storage (starch in plants, glycogen in animals)",
                    "Structural support (cellulose in plant cell walls)",
                    "Cell recognition (glycoproteins)"
                ],
                examples: ["Glucose", "Starch", "Glycogen", "Cellulose", "Chitin"],
                elements: "C, H, O (ratio usually 1:2:1)",
                diagram: "carbohydrate_types"
            },
            {
                name: "Lipids",
                category: "Macromolecule",
                monomers: "Fatty acids and glycerol (for many lipids)",
                structure: [
                    "Triglycerides: glycerol + 3 fatty acids",
                    "Phospholipids: glycerol + 2 fatty acids + phosphate group",
                    "Steroids: four fused carbon rings",
                    "Waxes: long-chain fatty acid + long-chain alcohol"
                ],
                bonds: ["Ester bonds"],
                characteristics: "Hydrophobic (water-fearing), nonpolar",
                functions: [
                    "Long-term energy storage (fats, oils)",
                    "Cell membrane structure (phospholipids)",
                    "Signaling molecules (hormones like testosterone, estrogen)",
                    "Insulation and protection",
                    "Waterproofing (waxes)"
                ],
                examples: ["Triglycerides", "Phospholipids", "Cholesterol", "Testosterone", "Estrogen"],
                elements: "C, H, O (less oxygen than carbohydrates)",
                diagram: "lipid_types"
            },
            {
                name: "Nucleic Acids",
                category: "Macromolecule",
                monomers: "Nucleotides",
                structure: [
                    "Nucleotide: phosphate + sugar + nitrogenous base",
                    "DNA: double helix, deoxyribose sugar, bases A-T and G-C",
                    "RNA: single strand, ribose sugar, bases A-U and G-C"
                ],
                bonds: ["Phosphodiester bonds (backbone)", "Hydrogen bonds (between bases)"],
                functions: [
                    "Store genetic information (DNA)",
                    "Transfer genetic information (mRNA)",
                    "Protein synthesis (tRNA, rRNA)",
                    "Energy transfer (ATP)",
                    "Cell signaling (cAMP)"
                ],
                types: {
                    DNA: "Genetic blueprint, double helix, deoxyribose",
                    RNA: "Protein synthesis, single strand, ribose",
                    ATP: "Energy currency of the cell"
                },
                examples: ["DNA", "mRNA", "tRNA", "rRNA", "ATP"],
                elements: "C, H, O, N, P",
                diagram: "nucleic_acid_structure"
            },
            {
                name: "ATP (Adenosine Triphosphate)",
                category: "Nucleotide (energy molecule)",
                structure: [
                    "Adenine (nitrogenous base)",
                    "Ribose (5-carbon sugar)",
                    "Three phosphate groups"
                ],
                functions: [
                    "Primary energy currency of cells",
                    "Releases energy when phosphate bond breaks",
                    "Powers active transport, muscle contraction, biosynthesis",
                    "Regenerated from ADP + phosphate"
                ],
                energyReaction: "ATP → ADP + Pi + Energy",
                producedBy: ["Cellular respiration", "Photosynthesis (light reactions)"],
                usedFor: ["Active transport", "Muscle contraction", "Protein synthesis", "Cell division"],
                diagram: "atp_structure"
            },
            {
                name: "Enzymes",
                category: "Protein (biological catalyst)",
                structure: [
                    "Globular proteins with active site",
                    "Specific 3D shape determines function",
                    "May require cofactors or coenzymes"
                ],
                mechanism: [
                    "Substrate binds to active site",
                    "Enzyme-substrate complex forms",
                    "Reaction occurs (activation energy lowered)",
                    "Products released, enzyme unchanged"
                ],
                properties: [
                    "Highly specific (lock-and-key or induced fit model)",
                    "Reusable (not consumed in reaction)",
                    "Affected by temperature and pH",
                    "Can be regulated (inhibitors, activators)"
                ],
                functions: ["Speed up chemical reactions", "Lower activation energy", "Allow reactions at body temperature"],
                examples: ["Amylase (breaks down starch)", "DNA polymerase (DNA replication)", "ATP synthase (makes ATP)"],
                diagram: "enzyme_mechanism"
            },
            {
                name: "Water",
                category: "Small polar molecule",
                structure: "H₂O - bent shape, polar (partial charges)",
                properties: [
                    "Polar molecule (unequal sharing of electrons)",
                    "Forms hydrogen bonds",
                    "High specific heat",
                    "High heat of vaporization",
                    "Cohesion and adhesion",
                    "Universal solvent",
                    "Less dense as solid (ice floats)"
                ],
                functions: [
                    "Solvent for biochemical reactions",
                    "Temperature regulation",
                    "Transport medium",
                    "Participant in reactions (hydrolysis, condensation)",
                    "Maintains cell shape (turgor pressure)"
                ],
                biologicalImportance: "Essential for all life; makes up 60-70% of body mass",
                diagram: "water_properties"
            }
        ];

        return {
            topic: "Cellular Molecules",
            molecules: moleculesList,
            macromolecules: {
                carbohydrates: moleculesList.find(m => m.name === "Carbohydrates"),
                proteins: moleculesList.find(m => m.name === "Proteins"),
                lipids: moleculesList.find(m => m.name === "Lipids"),
                nucleicAcids: moleculesList.find(m => m.name === "Nucleic Acids")
            },
            comparisonTable: {
                headers: ["Molecule", "Monomer", "Elements", "Functions", "Examples"],
                data: [
                    ["Carbohydrates", "Monosaccharides", "C, H, O", "Energy, structure", "Glucose, starch"],
                    ["Proteins", "Amino acids", "C, H, O, N, S", "Enzymes, structure, transport", "Hemoglobin, enzymes"],
                    ["Lipids", "Fatty acids, glycerol", "C, H, O", "Energy storage, membranes", "Fats, phospholipids"],
                    ["Nucleic Acids", "Nucleotides", "C, H, O, N, P", "Genetic information", "DNA, RNA"]
                ]
            },
            bondingTypes: {
                covalent: "Strong bonds sharing electrons (within molecules)",
                hydrogen: "Weak bonds between molecules (between DNA strands, protein folding)",
                ionic: "Attraction between charged ions (protein structure)",
                peptide: "Special covalent bond between amino acids",
                glycosidic: "Bond between sugar molecules",
                phosphodiester: "Bond in nucleic acid backbone"
            },
            category: 'cellular_molecules'
        };
    }

    handleCellularProcesses(problem) {
        const processesList = [
            {
                name: "Mitosis",
                category: "Cell Division",
                purpose: "Growth, repair, asexual reproduction",
                result: "Two identical diploid daughter cells",
                phases: [
                    {
                        name: "Prophase",
                        events: [
                            "Chromatin condenses into visible chromosomes",
                            "Each chromosome consists of two sister chromatids",
                            "Centrioles move to opposite poles",
                            "Nuclear envelope breaks down",
                            "Spindle fibers begin to form"
                        ]
                    },
                    {
                        name: "Metaphase",
                        events: [
                            "Chromosomes align at cell equator (metaphase plate)",
                            "Spindle fibers attach to centromeres",
                            "Cell checkpoint ensures proper attachment"
                        ]
                    },
                    {
                        name: "Anaphase",
                        events: [
                            "Sister chromatids separate",
                            "Chromatids pulled to opposite poles",
                            "Cell elongates",
                            "Each pole receives identical set of chromosomes"
                        ]
                    },
                    {
                        name: "Telophase",
                        events: [
                            "Chromosomes decondense",
                            "Nuclear envelopes reform around each set",
                            "Spindle fibers disappear",
                            "Cytokinesis begins (cell division)"
                        ]
                    }
                ],
                cytokinesis: {
                    animal: "Cleavage furrow pinches cell in two",
                    plant: "Cell plate forms from center outward"
                },
                diagram: "mitosis_stages"
            },
            {
                name: "Meiosis",
                category: "Cell Division",
                purpose: "Sexual reproduction, genetic diversity",
                result: "Four non-identical haploid gametes",
                divisions: {
                    meiosis_I: {
                        description: "Reductional division - separates homologous pairs",
                        phases: ["Prophase I (crossing over occurs)", "Metaphase I", "Anaphase I", "Telophase I"]
                    },
                    meiosis_II: {
                        description: "Equational division - separates sister chromatids",
                        phases: ["Prophase II", "Metaphase II", "Anaphase II", "Telophase II"]
                    }
                },
                geneticVariation: [
                    "Crossing over (exchange of DNA between homologous chromosomes)",
                    "Independent assortment (random distribution of chromosomes)"
                ],
                comparison: {
                    mitosis: "2 identical diploid cells",
                    meiosis: "4 non-identical haploid cells"
                },
                diagram: "meiosis_stages"
            },
            {
                name: "Cell Cycle",
                category: "Cell Regulation",
                phases: [
                    {
                        name: "Interphase",
                        duration: "90% of cell cycle",
                        subphases: {
                            G1: "Cell growth, normal functions, organelle production",
                            S: "DNA replication (synthesis phase)",
                            G2: "Continued growth, preparation for mitosis, protein synthesis"
                        }
                    },
                    {
                        name: "M Phase (Mitotic Phase)",
                        includes: ["Mitosis (nuclear division)", "Cytokinesis (cytoplasmic division)"],
                        duration: "Shortest phase"
                    }
                ],
                checkpoints: [
                    "G1 checkpoint: Is cell large enough? Nutrients available? DNA damaged?",
                    "G2 checkpoint: Is DNA properly replicated? Any damage?",
                    "M checkpoint: Are chromosomes properly attached to spindle?"
                ],
                regulation: "Controlled by cyclins and CDKs (cyclin-dependent kinases)",
                diagram: "cell_cycle"
            },
            {
                name: "Cellular Respiration",
                category: "Energy Metabolism",
                purpose: "Extract energy from glucose to make ATP",
                overallEquation: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ~38 ATP",
                stages: [
                    {
                        name: "Glycolysis",
                        location: "Cytoplasm",
                        input: "Glucose (6C)",
                        output: "2 Pyruvate (3C), 2 ATP (net), 2 NADH",
                        oxygenRequired: "No (anaerobic)",
                        description: "Glucose broken down into pyruvate"
                    },
                    {
                        name: "Krebs Cycle (Citric Acid Cycle)",
                        location: "Mitochondrial matrix",
                        input: "2 Acetyl-CoA",
                        output: "4 CO₂, 2 ATP, 6 NADH, 2 FADH₂",
                        oxygenRequired: "Yes (aerobic)",
                        description: "Complete oxidation of acetyl-CoA"
                    },
                    {
                        name: "Electron Transport Chain",
                        location: "Inner mitochondrial membrane (cristae)",
                        input: "NADH, FADH₂, O₂",
                        output: "~34 ATP, H₂O",
                        mechanism: "Chemiosmosis - proton gradient drives ATP synthase",
                        oxygenRequired: "Yes (O₂ is final electron acceptor)"
                     }

                    ],
                    totalATP: "~38 ATP per glucose (2 from glycolysis + 2 from Krebs + ~34 from ETC)",
                diagram: "cellular_respiration"
            },
            {
                name: "Photosynthesis",
                category: "Energy Metabolism",
                purpose: "Convert light energy into chemical energy (glucose)",
                overallEquation: "6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂",
                stages: [
                    {
                        name: "Light Reactions (Light-Dependent)",
                        location: "Thylakoid membranes",
                        input: "Light, H₂O",
                        output: "O₂, ATP, NADPH",
                        process: [
                            "Photosystem II absorbs light, splits water (photolysis)",
                            "Electrons travel through electron transport chain",
                            "Photosystem I absorbs light, reduces NADP⁺ to NADPH",
                            "Chemiosmosis produces ATP"
                        ],
                        description: "Light energy captured and converted to chemical energy"
                    },
                    {
                        name: "Calvin Cycle (Light-Independent/Dark Reactions)",
                        location: "Stroma",
                        input: "CO₂, ATP, NADPH",
                        output: "Glucose (C₆H₁₂O₆)",
                        phases: [
                            "Carbon Fixation: CO₂ combines with RuBP (5C) → 2 molecules of 3-PGA (3C)",
                            "Reduction: 3-PGA reduced to G3P using ATP and NADPH",
                            "Regeneration: Some G3P used to regenerate RuBP"
                        ],
                        description: "CO₂ fixed into glucose using ATP and NADPH"
                    }
                ],
                factors: ["Light intensity", "CO₂ concentration", "Temperature", "Water availability"],
                diagram: "photosynthesis"
            },
            {
                name: "DNA Replication",
                category: "Genetic Processes",
                purpose: "Copy DNA before cell division",
                timing: "S phase of cell cycle",
                mechanism: "Semi-conservative (each new DNA has one old and one new strand)",
                steps: [
                    {
                        step: "Initiation",
                        description: "Helicase unwinds and unzips DNA double helix",
                        enzymes: ["Helicase", "Single-strand binding proteins"]
                    },
                    {
                        step: "Elongation",
                        description: "DNA polymerase adds complementary nucleotides",
                        details: [
                            "Leading strand: synthesized continuously (5' to 3')",
                            "Lagging strand: synthesized in Okazaki fragments (5' to 3')",
                            "Primase adds RNA primers",
                            "DNA polymerase adds nucleotides"
                        ],
                        enzymes: ["DNA polymerase III", "Primase"]
                    },
                    {
                        step: "Termination",
                        description: "Ligase joins Okazaki fragments, primers replaced",
                        enzymes: ["DNA ligase", "DNA polymerase I"]
                    }
                ],
                accuracy: "Proofreading by DNA polymerase ensures high fidelity",
                diagram: "dna_replication"
            },
            {
                name: "Transcription",
                category: "Genetic Processes",
                purpose: "Create mRNA copy of gene",
                location: "Nucleus (eukaryotes), cytoplasm (prokaryotes)",
                steps: [
                    {
                        step: "Initiation",
                        description: "RNA polymerase binds to promoter region",
                        details: ["Transcription factors help RNA polymerase bind", "DNA unwinds"]
                    },
                    {
                        step: "Elongation",
                        description: "RNA polymerase synthesizes mRNA (5' to 3')",
                        details: ["Reads DNA template strand (3' to 5')", "Adds complementary RNA nucleotides"]
                    },
                    {
                        step: "Termination",
                        description: "RNA polymerase reaches terminator sequence and releases mRNA",
                        details: ["mRNA released", "DNA rewinds"]
                    }
                ],
                processing: {
                    prokaryotes: "mRNA used immediately (no processing)",
                    eukaryotes: [
                        "5' cap added",
                        "3' poly-A tail added",
                        "Splicing removes introns, keeps exons"
                    ]
                },
                diagram: "transcription"
            },
            {
                name: "Translation",
                category: "Genetic Processes",
                purpose: "Synthesize protein from mRNA",
                location: "Ribosome (cytoplasm or rough ER)",
                steps: [
                    {
                        step: "Initiation",
                        description: "Ribosome assembles around start codon (AUG)",
                        details: ["Small ribosomal subunit binds to mRNA", "First tRNA brings methionine", "Large subunit joins"]
                    },
                    {
                        step: "Elongation",
                        description: "Amino acids added one by one",
                        details: [
                            "tRNA brings amino acid matching codon",
                            "Peptide bond forms between amino acids",
                            "Ribosome moves to next codon",
                            "Process repeats"
                        ]
                    },
                    {
                        step: "Termination",
                        description: "Stop codon reached (UAA, UAG, UGA)",
                        details: ["Release factor binds", "Polypeptide released", "Ribosome disassembles"]
                    }
                ],
                geneticCode: {
                    codon: "3-nucleotide sequence on mRNA",
                    anticodon: "Complementary sequence on tRNA",
                    properties: ["Universal", "Redundant (multiple codons per amino acid)", "Unambiguous"]
                },
                diagram: "translation"
            },
            {
                name: "Osmosis",
                category: "Transport Process",
                definition: "Diffusion of water across selectively permeable membrane",
                direction: "Water moves from high water concentration to low water concentration",
                concepts: [
                    "Hypotonic: Lower solute concentration (water moves IN, cell swells)",
                    "Isotonic: Equal solute concentration (no net movement)",
                    "Hypertonic: Higher solute concentration (water moves OUT, cell shrinks)"
                ],
                effects: {
                    animalCell: {
                        hypotonic: "Cell swells, may burst (lysis)",
                        isotonic: "No change",
                        hypertonic: "Cell shrinks (crenation)"
                    },
                    plantCell: {
                        hypotonic: "Cell swells, becomes turgid (turgor pressure)",
                        isotonic: "Flaccid (limp)",
                        hypertonic: "Plasmolysis (membrane pulls away from wall)"
                    }
                },
                energyRequired: "No (passive transport)",
                diagram: "osmosis_effects"
            },
            {
                name: "Diffusion",
                category: "Transport Process",
                definition: "Movement of molecules from high to low concentration",
                types: [
                    "Simple diffusion: Small, nonpolar molecules through membrane",
                    "Facilitated diffusion: Through protein channels or carriers"
                ],
                factors: [
                    "Concentration gradient (greater difference = faster rate)",
                    "Temperature (higher = faster)",
                    "Molecule size (smaller = faster)",
                    "Distance (shorter = faster)"
                ],
                energyRequired: "No (passive transport)",
                equilibrium: "Net movement stops when concentrations equal",
                examples: ["O₂ and CO₂ exchange in lungs", "Glucose entering cells via GLUT transporters"],
                diagram: "diffusion_types"
            },
            {
                name: "Active Transport",
                category: "Transport Process",
                definition: "Movement of molecules against concentration gradient",
                energyRequired: "Yes (ATP)",
                mechanism: [
                    "Carrier protein binds to molecule",
                    "ATP provides energy for conformational change",
                    "Molecule transported across membrane",
                    "Protein returns to original shape"
                ],
                examples: [
                    "Sodium-Potassium Pump: 3 Na⁺ out, 2 K⁺ in (maintains electrochemical gradient)",
                    "Proton pump: H⁺ transport in plants",
                    "Calcium pump: Ca²⁺ transport in muscles"
                ],
                types: {
                    primary: "Directly uses ATP",
                    secondary: "Uses electrochemical gradient created by primary active transport"
                },
                diagram: "active_transport"
            },
            {
                name: "Endocytosis",
                category: "Bulk Transport",
                definition: "Cell engulfs material by forming vesicles",
                energyRequired: "Yes (ATP)",
                types: [
                    {
                        name: "Phagocytosis",
                        description: "Cell eating - engulfing large particles",
                        examples: ["White blood cells engulfing bacteria"]
                    },
                    {
                        name: "Pinocytosis",
                        description: "Cell drinking - engulfing liquids",
                        examples: ["Cells taking in dissolved nutrients"]
                    },
                    {
                        name: "Receptor-Mediated Endocytosis",
                        description: "Specific molecules bind to receptors",
                        examples: ["Cholesterol uptake via LDL receptors"]
                    }
                ],
                process: ["Membrane invaginates", "Forms vesicle around material", "Vesicle pinches off into cell"],
                diagram: "endocytosis_types"
            },
            {
                name: "Exocytosis",
                category: "Bulk Transport",
                definition: "Cell expels material in vesicles",
                energyRequired: "Yes (ATP)",
                process: [
                    "Vesicle from Golgi moves to membrane",
                    "Vesicle fuses with plasma membrane",
                    "Contents released outside cell"
                ],
                examples: [
                    "Neurotransmitter release at synapses",
                    "Hormone secretion",
                    "Waste removal",
                    "Secretion of digestive enzymes"
                ],
                diagram: "exocytosis"
            },
            {
                name: "Apoptosis",
                category: "Cell Death",
                definition: "Programmed cell death (controlled suicide)",
                purpose: [
                    "Remove damaged or unnecessary cells",
                    "Embryonic development (e.g., removing webbing between fingers)",
                    "Immune system development",
                    "Maintain tissue homeostasis"
                ],
                process: [
                    "Cell receives death signal",
                    "Caspases (enzymes) activated",
                    "DNA fragmented, organelles broken down",
                    "Cell shrinks and forms blebs",
                    "Apoptotic bodies phagocytosed by immune cells"
                ],
                vsNecrosis: {
                    apoptosis: "Controlled, no inflammation, neat cleanup",
                    necrosis: "Uncontrolled, inflammation, cell bursts"
                },
                importance: "Cancer often involves defective apoptosis",
                diagram: "apoptosis_stages"
            },
            {
                name: "Binary Fission",
                category: "Prokaryotic Cell Division",
                definition: "Asexual reproduction in prokaryotes",
                steps: [
                    "DNA replication begins at origin of replication",
                    "Cell elongates, DNA copies move to opposite poles",
                    "New cell wall and membrane form at midpoint",
                    "Cell divides into two identical daughter cells"
                ],
                speed: "Very fast (E. coli can divide every 20 minutes)",
                result: "Two genetically identical cells",
                diagram: "binary_fission"
            }
        ];

        return {
            topic: "Cellular Processes",
            processes: processesList,
            categories: {
                cellDivision: processesList.filter(p => p.category === "Cell Division"),
                energyMetabolism: processesList.filter(p => p.category === "Energy Metabolism"),
                geneticProcesses: processesList.filter(p => p.category === "Genetic Processes"),
                transport: processesList.filter(p => p.category === "Transport Process" || p.category === "Bulk Transport")
            },
            comparisons: {
                mitosis_vs_meiosis: {
                    mitosis: "2 diploid identical cells, growth/repair",
                    meiosis: "4 haploid diverse cells, sexual reproduction"
                },
                aerobic_vs_anaerobic: {
                    aerobic: "Requires O₂, produces ~38 ATP, complete oxidation",
                    anaerobic: "No O₂, produces 2 ATP, incomplete oxidation"
                },
                photosynthesis_vs_respiration: {
                    photosynthesis: "Light → glucose, stores energy, produces O₂",
                    respiration: "Glucose → ATP, releases energy, produces CO₂"
                }
            },
            centralDogma: "DNA → RNA → Protein (genetic information flow)",
            category: 'cellular_processes'
        };
    }

    handleCellMembrane(problem) {
        const { subTopic } = problem;

        const membraneContent = {
            models: {
                fluidMosaicModel: {
                    description: "The fundamental model for cell membranes, describing a flexible lipid bilayer (phospholipids with hydrophilic heads & hydrophobic tails) acting as a barrier, with proteins floating within or attached to it like tiles in a mosaic, allowing for transport and cell recognition.",
                    proposedBy: "Singer and Nicolson (1972)",
                    keyFeatures: [
                        "Phospholipid bilayer is fluid (lipids and proteins can move laterally)",
                        "Mosaic of proteins embedded in or attached to bilayer",
                        "Asymmetry (inside and outside surfaces differ)",
                        "Selective permeability"
                    ],
                    evidence: [
                        "Fluorescence recovery after photobleaching (FRAP) shows lateral movement",
                        "Freeze-fracture electron microscopy reveals proteins",
                        "Cell fusion experiments show membrane fluidity"
                    ]
                },
                davsonDanielliModel: {
                    description: "Historical model proposing a protein-lipid-protein sandwich structure",
                    proposedBy: "Davson and Danielli (1935)",
                    structure: "Continuous protein layers on both sides of lipid bilayer",
                    limitations: [
                        "Couldn't explain membrane protein diversity",
                        "Didn't account for selective permeability",
                        "Freeze-fracture studies contradicted it"
                    ],
                    status: "Outdated, replaced by fluid mosaic model"
                },
                robertsonUnitMembrane: {
                    description: "Early electron microscopy model showing trilaminar (three-layer) appearance",
                    proposedBy: "Robertson (1960s)",
                    observation: "Two dark lines (protein) with light line (lipid) between",
                    contribution: "Paved way for understanding membrane structure",
                    status: "Superseded by fluid mosaic model"
                }
            },
            structure: {
                phospholipidBilayer: {
                    description: "The core structure, made of two layers of phospholipids where hydrophilic (water-loving) heads face out and hydrophobic (water-fearing) tails face in, forming a barrier.",
                    components: {
                        head: {
                            composition: "Phosphate group + glycerol",
                            property: "Hydrophilic (polar, water-loving)",
                            position: "Faces aqueous environment (outside and inside cell)"
                        },
                        tails: {
                            composition: "Two fatty acid chains",
                            property: "Hydrophobic (nonpolar, water-fearing)",
                            position: "Faces interior of membrane",
                            saturation: "Saturated (straight) or unsaturated (kinked)"
                        }
                    },
                    properties: [
                        "Self-assembling due to hydrophobic effect",
                        "Fluid (phospholipids can move laterally)",
                        "Barrier to polar molecules and ions",
                        "Permeable to small nonpolar molecules (O₂, CO₂)"
                    ],
                    thickness: "~7-8 nm"
                },
                proteins: {
                    description: "Embedded (integral) or attached (peripheral) proteins, crucial for transport, enzymatic activity, cell signaling, and structural support.",
                    types: {
                        integralProteins: {
                            description: "Permanently embedded in membrane",
                            examples: [
                                "Transmembrane proteins (span entire membrane)",
                                "Channel proteins",
                                "Carrier proteins",
                                "Receptor proteins"
                            ],
                            properties: "Amphipathic (hydrophobic regions in membrane, hydrophilic regions outside)"
                        },
                        peripheralProteins: {
                            description: "Temporarily attached to membrane surface",
                            location: "On inner or outer surface",
                            attachment: "Bound to integral proteins or lipid heads",
                            examples: ["Enzymes", "Structural proteins"],
                            properties: "Easily removed without disrupting membrane"
                        }
                    },
                    functions: [
                        "Transport: channels and carriers move substances",
                        "Enzymatic activity: catalyze reactions at membrane",
                        "Signal transduction: receptors receive signals",
                        "Cell recognition: glycoproteins identify cells",
                        "Intercellular joining: proteins connect adjacent cells",
                        "Attachment: anchor to cytoskeleton and extracellular matrix"
                    ]
                },
                cholesterol: {
                    description: "Found in animal cells, it helps maintain membrane fluidity, preventing it from becoming too rigid or too fluid.",
                    location: "Embedded among phospholipids",
                    effects: {
                        highTemperature: "Restrains phospholipid movement (reduces fluidity)",
                        lowTemperature: "Prevents tight packing (maintains fluidity)"
                    },
                    amount: "Up to 25% of membrane lipids in some cells",
                    notFoundIn: "Plant cells (they use other sterols)"
                },
                carbohydrates: {
                    description: "Attached to proteins (glycoproteins) or lipids (glycolipids) on the outer surface, essential for cell recognition and immune response.",
                    location: "Always on extracellular (outside) surface",
                    forms: {
                        glycoproteins: {
                            description: "Proteins with attached carbohydrate chains",
                            functions: ["Cell recognition", "Immune response", "Cell adhesion"]
                        },
                        glycolipids: {
                            description: "Lipids with attached carbohydrate chains",
                            functions: ["Cell recognition", "Tissue formation"]
                        }
                    },
                    glycocalyx: "Carbohydrate coat on cell surface for protection and recognition",
                    examples: ["ABO blood type markers", "MHC proteins"]
                }
            },
            functions: {
                barrier: {
                    description: "Separates internal cellular environment from external environment",
                    mechanism: "Selective permeability based on size, charge, and polarity",
                    allows: ["Small nonpolar molecules (O₂, CO₂)", "Small uncharged polar molecules (H₂O, ethanol)"],
                    blocks: ["Large polar molecules (glucose)", "Ions (Na⁺, K⁺, Cl⁻)", "Charged molecules"]
                },
                transport: {
                    description: "Controls movement of substances into and out of cell",
                    mechanisms: [
                        "Passive transport: no energy (diffusion, osmosis, facilitated diffusion)",
                        "Active transport: requires ATP",
                        "Bulk transport: endocytosis and exocytosis"
                    ],
                    importance: "Maintains homeostasis, concentration gradients"
                },
                communication: {
                    description: "Receives and transmits signals",
                    components: ["Receptor proteins", "Signal transduction pathways"],
                    examples: ["Hormone receptors", "Growth factor receptors", "Neurotransmitter receptors"],
                    process: "Signal → Receptor → Intracellular cascade → Response"
                },
                recognition: {
                    description: "Identifies self vs foreign cells",
                    components: ["Glycoproteins", "Glycolipids", "MHC proteins"],
                    importance: [
                        "Immune system recognition",
                        "Tissue formation",
                        "Organ transplant compatibility"
                    ],
                    examples: ["ABO blood types", "HLA antigens"]
                },
                adhesion: {
                    description: "Connects to other cells and extracellular matrix",
                    types: [
                        "Cell-cell adhesion: tight junctions, desmosomes, gap junctions",
                        "Cell-matrix adhesion: integrins connect to extracellular matrix"
                    ],
                    importance: "Tissue structure, coordinated function"
                }
            },
            components: {
                transportProteins: {
                    channelProteins: {
                        description: "Form hydrophilic pores for specific ions or molecules",
                        mechanism: "Facilitated diffusion (passive)",
                        types: ["Ion channels", "Aquaporins (water channels)", "Gated channels"],
                        examples: ["Sodium channels", "Potassium channels", "Calcium channels"]
                    },
                    carrierProteins: {
                        description: "Bind to specific molecules and undergo conformational change",
                        mechanism: "Can be passive (facilitated diffusion) or active (requires ATP)",
                        examples: ["Glucose transporter (GLUT)", "Sodium-potassium pump", "Amino acid transporters"]
                    }
                },
                ionChannels: {
                    description: "Selective pores for specific ions",
                    types: {
                        voltageGated: "Open/close in response to voltage changes",
                        ligandGated: "Open/close when molecule binds",
                        mechanicallyGated: "Open/close in response to physical force"
                    },
                    importance: "Nerve impulses, muscle contraction, cell signaling"
                },
                aquaporins: {
                    description: "Specialized channel proteins for water transport",
                    function: "Facilitate rapid water movement across membrane",
                    location: "Cells that need rapid water transport (kidney, red blood cells)",
                    discovery: "Peter Agre won Nobel Prize (2003) for discovering aquaporins"
                }
            },
            properties: {
                selectivePermeability: {
                    description: "Membrane allows some substances to cross while restricting others",
                    factors: [
                        "Size: small molecules cross easier",
                        "Polarity: nonpolar molecules cross easier",
                        "Charge: uncharged molecules cross easier"
                    ],
                    importance: "Maintains cell homeostasis and distinct internal environment"
                },
                fluidity: {
                    description: "Membrane components can move laterally",
                    factors: [
                        "Temperature: higher temperature = more fluid",
                        "Saturation of fatty acids: more unsaturated = more fluid",
                        "Cholesterol: moderates fluidity"
                    ],
                    importance: "Allows membrane repair, cell growth, endocytosis/exocytosis",
                    measurement: "FRAP (fluorescence recovery after photobleaching)"
                },
                asymmetry: {
                    description: "Inner and outer membrane surfaces differ in composition",
                    differences: [
                        "Carbohydrates only on outer surface",
                        "Different proteins on each surface",
                        "Different phospholipid composition"
                    ],
                    importance: "Functional specialization of each surface"
                }
            }
        };

        // Handle specific subtopics
        if (subTopic) {
            const lowerSubTopic = subTopic.toLowerCase();
            
            if (lowerSubTopic.includes('model')) {
                return {
                    topic: "Cell Membrane Models",
                    content: membraneContent.models,
                    primaryModel: membraneContent.models.fluidMosaicModel,
                    historicalModels: [
                        membraneContent.models.davsonDanielliModel,
                        membraneContent.models.robertsonUnitMembrane
                    ],
                    category: 'cell_membrane'
                };
            }
            
            if (lowerSubTopic.includes('structure')) {
                return {
                    topic: "Cell Membrane Structure",
                    content: membraneContent.structure,
                    mainComponents: [
                        membraneContent.structure.phospholipidBilayer,
                        membraneContent.structure.proteins,
                        membraneContent.structure.cholesterol,
                        membraneContent.structure.carbohydrates
                    ],
                    category: 'cell_membrane'
                };
            }
            
            if (lowerSubTopic.includes('function')) {
                return {
                    topic: "Cell Membrane Functions",
                    content: membraneContent.functions,
                    mainFunctions: Object.keys(membraneContent.functions),
                    category: 'cell_membrane'
                };
            }
            
            if (lowerSubTopic.includes('component')) {
                return {
                    topic: "Cell Membrane Components",
                    content: membraneContent.components,
                    transportComponents: membraneContent.components.transportProteins,
                    category: 'cell_membrane'
                };
            }
        }

        // Return complete membrane information
        return {
            topic: "Cell Membrane",
            models: membraneContent.models,
            structure: membraneContent.structure,
            functions: membraneContent.functions,
            components: membraneContent.components,
            properties: membraneContent.properties,
            summary: "The cell membrane is a selectively permeable barrier composed of a fluid phospholipid bilayer with embedded and attached proteins, cholesterol, and surface carbohydrates, functioning in protection, transport, communication, and recognition.",
            category: 'cell_membrane'
        };
    }

    handleCellCommunication(problem) {
        return {
            topic: "Cell Communication and Signaling",
            signalingTypes: [
                {
                    name: "Direct Contact",
                    description: "Cells communicate through physical contact",
                    mechanisms: [
                        "Gap junctions: allow small molecules to pass between adjacent cells",
                        "Plasmodesmata: channels between plant cells",
                        "Cell-surface markers: glycoproteins identify cells"
                    ],
                    examples: ["Immune cell recognition", "Embryonic development"]
                },
                {
                    name: "Paracrine Signaling",
                    description: "Local signaling to nearby cells",
                    mechanism: "Secreted molecules diffuse to neighboring cells",
                    distance: "Short range (local)",
                    examples: ["Growth factors", "Neurotransmitters at synapses"],
                    duration: "Brief (molecules quickly degraded)"
                },
                {
                    name: "Endocrine Signaling",
                    description: "Long-distance signaling via bloodstream",
                    mechanism: "Hormones travel through circulatory system",
                    distance: "Long range (throughout body)",
                    examples: ["Insulin", "Growth hormone", "Adrenaline"],
                    duration: "Can be prolonged"
                },
                {
                    name: "Autocrine Signaling",
                    description: "Cell signals to itself",
                    mechanism: "Cell releases signal that binds to its own receptors",
                    examples: ["Immune cell activation", "Cancer cell growth"],
                    importance: "Self-regulation and feedback"
                },
                {
                    name: "Synaptic Signaling",
                    description: "Specialized paracrine signaling in nervous system",
                    mechanism: "Neurotransmitters cross synaptic cleft",
                    distance: "Very short (20-40 nm)",
                    speed: "Very fast",
                    examples: ["Action potentials", "Muscle contraction"]
                }
            ],
            signalingProcess: {
                reception: {
                    description: "Signal molecule binds to receptor protein",
                    receptors: [
                        "Cell-surface receptors (for large/polar signals)",
                        "Intracellular receptors (for small/nonpolar signals)"
                    ],
                    specificity: "Lock-and-key fit between signal and receptor"
                },
                transduction: {
                    description: "Signal converted to form that can cause cellular response",
                    mechanisms: [
                        "Signal transduction pathways",
                        "Second messengers (cAMP, Ca²⁺)",
                        "Phosphorylation cascades"
                    ],
                    amplification: "One signal molecule can trigger many responses"
                },
                response: {
                    description: "Cell's answer to the signal",
                    types: [
                        "Changes in gene expression",
                        "Changes in enzyme activity",
                        "Changes in cell shape or movement"
                    ],
                    examples: ["Glycogen breakdown", "Cell division", "Secretion"]
                }
            },
            receptorTypes: {
                GPCRs: {
                    name: "G Protein-Coupled Receptors",
                    structure: "Seven transmembrane domains",
                    mechanism: "Activates G proteins, which activate enzymes",
                    examples: ["Adrenaline receptors", "Odorant receptors"],
                    importance: "~50% of drugs target GPCRs"
                },
                receptorTyrosineKinases: {
                    name: "Receptor Tyrosine Kinases (RTKs)",
                    mechanism: "Phosphorylate tyrosine amino acids",
                    examples: ["Growth factor receptors", "Insulin receptor"],
                    importance: "Cell growth and division"
                },
                ionChannelReceptors: {
                    name: "Ligand-Gated Ion Channels",
                    mechanism: "Open/close when ligand binds",
                    speed: "Very fast response",
                    examples: ["Neurotransmitter receptors"],
                    importance: "Nerve and muscle function"
                }
            },
            secondMessengers: {
                cAMP: {
                    name: "Cyclic AMP",
                    production: "From ATP by adenylyl cyclase",
                    function: "Activates protein kinase A",
                    example: "Adrenaline response (fight or flight)"
                },
                calcium: {
                    name: "Ca²⁺ ions",
                    source: "ER storage or extracellular",
                    function: "Activates various proteins and enzymes",
                    examples: ["Muscle contraction", "Neurotransmitter release"]
                },
                IP3: {
                    name: "Inositol triphosphate",
                    function: "Triggers Ca²⁺ release from ER",
                    pathway: "Phospholipase C pathway"
                }
            },
            category: 'cell_communication'
        };
    }

    handleTransportMechanisms(problem) {
        // Return transport content (already covered in handleCellularProcesses)
        // Extract transport-specific processes
        const allProcesses = this.handleCellularProcesses(problem).processes;
        const transportProcesses = allProcesses.filter(p => 
            p.category === "Transport Process" || p.category === "Bulk Transport"
        );

        return {
            topic: "Cellular Transport Mechanisms",
            processes: transportProcesses,
            categories: {
                passiveTransport: {
                    description: "No energy required, moves with concentration gradient",
                    types: ["Simple diffusion", "Facilitated diffusion", "Osmosis"]
                },
                activeTransport: {
                    description: "Requires ATP, moves against concentration gradient",
                    types: ["Primary active transport", "Secondary active transport"]
                },
                bulkTransport: {
                    description: "Large particles or quantities moved in vesicles",
                    types: ["Endocytosis", "Exocytosis"]
                }
            },
            comparisonTable: {
                headers: ["Mechanism", "Energy", "Direction", "Molecules", "Proteins"],
                data: [
                    ["Simple Diffusion", "No", "High → Low", "Small, nonpolar", "No"],
                    ["Facilitated Diffusion", "No", "High → Low", "Large, polar", "Yes (channels/carriers)"],
                    ["Osmosis", "No", "High → Low", "Water only", "Sometimes (aquaporins)"],
                    ["Active Transport", "Yes (ATP)", "Low → High", "Various", "Yes (pumps)"],
                    ["Endocytosis", "Yes (ATP)", "Outside → Inside", "Large/bulk", "Yes"],
                    ["Exocytosis", "Yes (ATP)", "Inside → Outside", "Large/bulk", "Yes"]
                ]
            },
            category: 'transport_mechanisms'
        };
    }

    handleEnergyMetabolism(problem) {
        // Extract energy metabolism processes
        const allProcesses = this.handleCellularProcesses(problem).processes;
        const energyProcesses = allProcesses.filter(p => p.category === "Energy Metabolism");

        return {
            topic: "Cellular Energy Metabolism",
            processes: energyProcesses,
            ATPDetails: {
                structure: "Adenosine + 3 phosphates",
                energyStorage: "High-energy phosphate bonds",
                hydrolysis: "ATP → ADP + Pi + Energy (7.3 kcal/mol)",
                synthesis: "ADP + Pi + Energy → ATP",
                functions: ["Powers active transport", "Muscle contraction", "Biosynthesis", "Movement"]
            },
            comparison: {
                cellularRespiration: {
                    equation: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP",
                    type: "Catabolic (breaks down)",
                    location: "Mitochondria",
                    purpose: "Extract energy from glucose",
                    organisms: "All organisms"
                },
                photosynthesis: {
                    equation: "6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂",
                    type: "Anabolic (builds up)",
                    location: "Chloroplasts",
                    purpose: "Store energy in glucose",
                    organisms: "Plants, algae, some bacteria"
                }
            },
            energyFlow: "Sunlight → Photosynthesis → Glucose → Cellular Respiration → ATP → Cellular Work",
            category: 'energy_metabolism'
        };
    }

    handleDNAGenetics(problem) {
        return {
            topic: "DNA Structure and Genetics",
            DNAStructure: {
                discoverers: "Watson and Crick (1953), based on Franklin's X-ray data",
                shape: "Double helix",
                components: {
                    nucleotide: {
                        parts: ["Deoxyribose sugar (5-carbon)", "Phosphate group", "Nitrogenous base"],
                        bases: {
                            purines: ["Adenine (A)", "Guanine (G)"],
                            pyrimidines: ["Thymine (T)", "Cytosine (C)"]
                        }
                    },
                    sugarPhosphateBackbone: {
                        description: "Alternating sugar and phosphate groups",
                        bond: "Phosphodiester bonds",
                        orientation: "Antiparallel (one strand 5'→3', other 3'→5')"
                    },
                    basePairs: {
                        description: "Bases pair via hydrogen bonds",
                        rules: "A pairs with T (2 H-bonds), G pairs with C (3 H-bonds)",
                        significance: "Complementarity allows replication"
                    }
                },
                properties: [
                    "Antiparallel strands",
                    "Complementary base pairing",
                    "Major and minor grooves",
                    "Right-handed helix",
                    "Diameter ~2 nm"
                ]
            },
            chromosome: {
                definition: "Organized structure of DNA and proteins",
                structure: [
                    "DNA double helix",
                    "Wrapped around histone proteins (nucleosomes)",
                    "Further coiled and condensed",
                    "Most condensed during cell division"
                ],
                human: {
                    number: "46 chromosomes (23 pairs)",
                    types: "22 pairs autosomes + 1 pair sex chromosomes (XX or XY)",
                    DNALength: "~2 meters if stretched out"
                }
            },
            gene: {
                definition: "Segment of DNA that codes for a protein or RNA",
                structure: {
                    promoter: "Where RNA polymerase binds to start transcription",
                    codingSequence: "Contains genetic instructions",
                    terminator: "Signals end of gene"
                },
                humanGenome: "~20,000-25,000 genes, only ~2% of DNA codes for proteins",
                noncodingDNA: "Regulatory sequences, introns, repetitive DNA"
            },
            geneticCode: {
                codon: "Three-nucleotide sequence coding for amino acid",
                properties: [
                    "Universal: same code in (almost) all organisms",
                    "Redundant: multiple codons for same amino acid",
                    "Unambiguous: each codon specifies only one amino acid",
                    "Non-overlapping: read in groups of three"
                ],
                specialCodons: {
                    start: "AUG (codes for methionine)",
                    stop: "UAA, UAG, UGA (no amino acid)"
                },
                totalCodons: "64 (4³) codons for 20 amino acids"
            },
            mutations: {
                types: {
                    point: {
                        description: "Single nucleotide change",
                        types: [
                            "Silent: no amino acid change",
                            "Missense: different amino acid",
                            "Nonsense: creates stop codon"
                        ]
                    },
                    frameshift: {
                        description: "Insertion or deletion of nucleotides",
                        effect: "Shifts reading frame, major impact",
                        severity: "Usually more severe than point mutations"
                    },
                    chromosomal: {
                        description: "Large-scale changes",
                        types: ["Deletion", "Duplication", "Inversion", "Translocation"]
                    }
                },
                causes: ["Errors in DNA replication", "Environmental factors (radiation, chemicals)", "Viruses"],
                effects: ["Beneficial (rare)", "Neutral (most common)", "Harmful (disease)"]
            },
            DNAPackaging: {
                levels: [
                    "DNA double helix (2 nm)",
                    "Nucleosome: DNA wrapped around histones (11 nm)",
                    "Chromatin fiber: beads on a string (30 nm)",
                    "Looped domains (300 nm)",
                    "Condensed chromosome (700 nm)",
                    "Metaphase chromosome (1400 nm)"
                ],
                purpose: "Package 2 meters of DNA into nucleus ~10 μm diameter"
            },
            category: 'dna_genetics'
        };
    }

    handleProteinSynthesis(problem) {
        // Extract protein synthesis from cellular processes
        const allProcesses = this.handleCellularProcesses(problem).processes;
        const synthesisProcesses = allProcesses.filter(p => 
            p.name === "Transcription" || p.name === "Translation" || p.name === "DNA Replication"
        );

        return {
            topic: "Protein Synthesis",
            centralDogma: "DNA → RNA → Protein",
            processes: synthesisProcesses,
            RNATypes: {
                mRNA: {
                    name: "Messenger RNA",
                    function: "Carries genetic information from DNA to ribosome",
                    structure: "Single-stranded, complementary to DNA template",
                    modifications: "5' cap, 3' poly-A tail, splicing (eukaryotes)",
                    lifespan: "Short-lived (minutes to hours)"
                },
                tRNA: {
                    name: "Transfer RNA",
                    function: "Brings amino acids to ribosome",
                    structure: "Cloverleaf shape with anticodon and amino acid binding site",
                    specificity: "Each tRNA carries specific amino acid",
                    number: "~45 different tRNAs for 20 amino acids"
                },
                rRNA: {
                    name: "Ribosomal RNA",
                    function: "Structural and catalytic component of ribosomes",
                    structure: "Complex folded structure",
                    catalysis: "Peptidyl transferase activity (forms peptide bonds)",
                    abundance: "Most abundant RNA type (~80%)"
                }
            },
            ribosome: {
                structure: "Large subunit + small subunit",
                composition: "rRNA + ribosomal proteins",
                sites: {
                    A: "Aminoacyl site - incoming tRNA",
                    P: "Peptidyl site - tRNA with growing chain",
                    E: "Exit site - tRNA leaving"
                },
                size: {
                    prokaryotic: "70S (50S + 30S)",
                    eukaryotic: "80S (60S + 40S)"
                }
            },
            geneticCodeTable: {
                description: "64 codons encoding 20 amino acids + start/stop signals",
                startCodon: "AUG (Methionine)",
                stopCodons: ["UAA", "UAG", "UGA"],
                wobbleBase: "Third position can vary without changing amino acid"
            },
            regulation: {
                transcriptional: "Control of mRNA production",
                postTranscriptional: "mRNA processing and stability",
                translational: "Control of protein synthesis rate",
                postTranslational: "Protein modification and degradation"
            },
            mutations: {
                transcription: "Errors in RNA copying (less critical, temporary)",
                translation: "Errors in protein synthesis (usually caught and degraded)",
                consequences: "Most mutations neutral or harmful, rarely beneficial"
            },
            category: 'protein_synthesis'
        };
    }

    handleCellDivision(problem) {
        // Extract cell division processes
        const allProcesses = this.handleCellularProcesses(problem).processes;
        const divisionProcesses = allProcesses.filter(p => 
            p.category === "Cell Division" || p.name === "Cell Cycle" || p.name === "Binary Fission"
        );

        return {
            topic: "Cell Division",
            processes: divisionProcesses,
            comparison: {
                mitosis: {
                    purpose: "Growth, repair, asexual reproduction",
                    parentCell: "Diploid (2n)",
                    divisions: "One",
                    daughterCells: "Two",
                    genetics: "Genetically identical to parent",
                    chromosomeNumber: "Same as parent (diploid)",
                    location: "Somatic (body) cells"
                },
                meiosis: {
                    purpose: "Sexual reproduction, gamete formation",
                    parentCell: "Diploid (2n)",
                    divisions: "Two",
                    daughterCells: "Four",
                    genetics: "Genetically different from parent",
                    chromosomeNumber: "Half of parent (haploid)",
                    location: "Germ cells (sex cells)"
                },
                binaryFission: {
                    purpose: "Prokaryotic reproduction",
                    parentCell: "Prokaryotic",
                    divisions: "One",
                    daughterCells: "Two",
                    genetics: "Genetically identical",
                    mechanism: "No mitotic spindle, DNA attached to membrane",
                    speed: "Very fast (20 minutes for E. coli)"
                }
            },
            cancer: {
                description: "Uncontrolled cell division",
                causes: [
                    "Mutations in cell cycle genes",
                    "Loss of checkpoint control",
                    "Oncogene activation",
                    "Tumor suppressor inactivation"
                ],
                characteristics: [
                    "Ignore stop signals",
                    "Unlimited divisions",
                    "Avoid apoptosis",
                    "Promote angiogenesis",
                    "Metastasize (spread)"
                ],
                treatment: "Target rapidly dividing cells (chemotherapy, radiation)"
            },
            category: 'cell_division'
        };
    }

    handleEnzymes(problem) {
        return {
            topic: "Enzymes and Biological Catalysis",
            definition: "Biological catalysts that speed up chemical reactions without being consumed",
            structure: {
                composition: "Proteins (mostly) or RNA (ribozymes)",
                activeSite: {
                    description: "Region where substrate binds",
                    properties: "Specific shape complementary to substrate",
                    location: "Usually a cleft or pocket in protein"
                },
                cofactors: {
                    description: "Non-protein helpers",
                    types: {
                        inorganic: "Metal ions (Fe²⁺, Mg²⁺, Zn²⁺)",
                        organic: "Coenzymes (vitamins, NAD⁺, FAD)"
                    },
                    function: "Required for enzyme activity"
                }
            },
            mechanism: {
                lockAndKey: {
                    description: "Active site exactly complements substrate shape",
                    analogy: "Key fits into lock",
                    limitation: "Doesn't explain enzyme flexibility"
                },
                inducedFit: {
                    description: "Active site changes shape when substrate binds",
                    analogy: "Handshake - both adjust",
                    advantage: "Better explains enzyme function",
                    current: "Accepted model"
                }
            },
            function: {
                catalysis: "Lower activation energy for reaction",
                mechanism: [
                    "Bring substrates together in correct orientation",
                    "Strain substrate bonds",
                    "Provide favorable environment",
                    "Stabilize transition state"
                ],
                efficiency: "Can increase reaction rates by 10⁶ to 10¹⁷ times"
            },
            properties: {
                specificity: {
                    description: "Each enzyme catalyzes specific reaction",
                    basis: "Active site shape and chemistry",
                    types: "Substrate specificity, reaction specificity"
                },
                reusability: {
                    description: "Not consumed in reaction",
                    mechanism: "Returns to original state after reaction",
                    efficiency: "One enzyme molecule catalyzes many reactions"
                },
                regulation: {
                    description: "Enzyme activity can be controlled",
                    mechanisms: [
                        "Competitive inhibition: inhibitor competes for active site",
                        "Non-competitive inhibition: inhibitor binds elsewhere, changes shape",
                        "Allosteric regulation: regulatory molecules bind to allosteric site",
                        "Feedback inhibition: product inhibits enzyme"
                    ]
                }
            },
            factors: {
                temperature: {
                    low: "Slow reaction rate (less kinetic energy)",
                    optimal: "Maximum reaction rate (usually body temperature)",
                    high: "Denaturation (protein unfolds, loses function)",
                    graph: "Bell curve with peak at optimal temperature"
                },
                pH: {
                    description: "Each enzyme has optimal pH",
                    examples: "Pepsin (stomach) optimal pH 2, Trypsin (intestine) optimal pH 8",
                    mechanism: "Extreme pH denatures enzyme or affects active site charges",
                    graph: "Bell curve with peak at optimal pH"
                },
                substrateConcentration: {
                    low: "Reaction rate increases with substrate",
                    high: "Enzyme saturation - all active sites occupied",
                    plateau: "Maximum velocity (Vmax) reached",
                    graph: "Hyperbolic curve approaching Vmax"
                },
                enzymeConcentration: {
                    relationship: "Directly proportional to reaction rate",
                    assumption: "Excess substrate available",
                    graph: "Linear relationship"
                }
            },
            inhibition: {
                competitive: {
                    mechanism: "Inhibitor resembles substrate, competes for active site",
                    overcoming: "Increase substrate concentration",
                    examples: "Drug design (statins block cholesterol synthesis enzyme)",
                    effect: "Increases Km, doesn't change Vmax"
                },
                nonCompetitive: {
                    mechanism: "Inhibitor binds to allosteric site, changes active site shape",
                    overcoming: "Cannot be overcome by adding substrate",
                    effect: "Decreases Vmax, doesn't change Km"
                },
                irreversible: {
                    mechanism: "Inhibitor forms covalent bond with enzyme",
                    effect: "Permanently inactivates enzyme",
                    examples: "Penicillin, nerve gases, aspirin"
                }
            },
            examples: [
                {
                    name: "Amylase",
                    substrate: "Starch",
                    product: "Maltose",
                    location: "Saliva, pancreas",
                    function: "Breaks down carbohydrates"
                },
                {
                    name: "Lipase",
                    substrate: "Lipids (fats)",
                    product: "Fatty acids and glycerol",
                    location: "Pancreas, small intestine",
                    function: "Digests fats"
                },
                {
                    name: "DNA Polymerase",
                    substrate: "Nucleotides",
                    product: "DNA strand",
                    location: "Nucleus",
                    function: "DNA replication"
                },
                {
                    name: "ATP Synthase",
                    substrate: "ADP + Pi",
                    product: "ATP",
                    location: "Mitochondria, chloroplasts",
                    function: "Produces ATP"
                },
                {
                    name: "Catalase",
                    substrate: "Hydrogen peroxide (H₂O₂)",
                    product: "Water and oxygen",
                    location: "Peroxisomes",
                    function: "Detoxifies harmful peroxide",
                    speed: "One of fastest enzymes (40 million reactions/second)"
                }
            ],
            naming: {
                convention: "Usually end in -ase",
                rules: "Named after substrate or reaction type",
                examples: "Lactase (breaks down lactose), DNA polymerase (polymerizes DNA)"
            },
            category: 'enzymes'
        };
    }

    // CONTENT GENERATION METHODS

    generateBiologyContent(problem, content) {
        const contentSections = [];

        // Generate overview section
        contentSections.push(this.generateOverviewSection(problem, content));

        // Generate detailed content based on topic type
        if (content.cellTypes) {
            contentSections.push(this.generateCellTypesContent(content));
        }

        if (content.organelles) {
            contentSections.push(this.generateOrganellesContent(content));
        }

        if (content.molecules) {
            contentSections.push(this.generateMoleculesContent(content));
        }

        if (content.processes) {
            contentSections.push(this.generateProcessesContent(content));
        }

        if (content.models) {
            contentSections.push(this.generateModelsContent(content));
        }

        if (content.structure) {
            contentSections.push(this.generateStructureContent(content));
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
            description: content.description || content.summary || `Overview of ${content.topic}`,
            keyPoints: this.extractKeyPoints(content),
            relevance: this.getTopicRelevance(problem.type)
        };
    }

    generateCellTypesContent(content) {
        return {
            sectionType: 'cell_types_list',
            title: 'Cell Types',
            cellTypes: content.cellTypes.map(cell => ({
                name: cell.name,
                category: cell.category,
                characteristics: cell.characteristics,
                examples: cell.examples,
                functions: cell.functions,
                diagram: cell.diagram
            })),
            comparisons: content.comparisons,
            mainCategories: content.mainCategories
        };
    }

    generateOrganellesContent(content) {
        return {
            sectionType: 'organelles_list',
            title: 'Cell Organelles',
            organelles: content.organelles.map(org => ({
                name: org.name,
                type: org.type,
                location: org.location,
                structure: org.structure,
                functions: org.functions,
                foundIn: org.foundIn,
                analogy: org.analogy
            })),
            categories: content.categories,
            endosymbioticTheory: content.endosymbioticTheory
        };
    }

    generateMoleculesContent(content) {
        return {
            sectionType: 'molecules_list',
            title: 'Cellular Molecules',
            molecules: content.molecules.map(mol => ({
                name: mol.name,
                category: mol.category,
                monomers: mol.monomers,
                structure: mol.structure,
                functions: mol.functions,
                examples: mol.examples
            })),
            comparisonTable: content.comparisonTable
        };
    }

    generateProcessesContent(content) {
        return {
            sectionType: 'processes_list',
            title: 'Cellular Processes',
            processes: content.processes.map(proc => ({
                name: proc.name,
                category: proc.category,
                purpose: proc.purpose,
                steps: proc.steps || proc.phases || proc.stages,
                result: proc.result,
                diagram: proc.diagram
            })),
            categories: content.categories,
            comparisons: content.comparisons
        };
    }

    generateModelsContent(content) {
        return {
            sectionType: 'models',
            title: 'Scientific Models',
            models: Object.entries(content).map(([key, model]) => ({
                name: model.name || key,
                description: model.description,
                proposedBy: model.proposedBy,
                keyFeatures: model.keyFeatures,
                evidence: model.evidence,
                status: model.status
            }))
        };
    }

    generateStructureContent(content) {
        return {
            sectionType: 'structure',
            title: 'Structural Components',
            components: Object.entries(content).map(([key, component]) => ({
                name: key,
                description: component.description,
                properties: component.properties,
                functions: component.functions || component.function
            }))
        };
    }

    generateComparisonsSection(content) {
        const comparisons = content.comparisons || content.comparison;
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

        return keyPoints.slice(0, 5); // Limit to top 5 key points
    }

    getTopicRelevance(topicType) {
        const relevance = {
            cell_types: "Understanding cell types is fundamental to all biology",
            organelles: "Organelles perform specialized functions essential for life",
            cellular_molecules: "Biological molecules are the building blocks of cells",
            cellular_processes: "Cellular processes maintain life and enable reproduction",
            cell_membrane: "The cell membrane controls cell boundaries and interactions",
            transport_mechanisms: "Transport maintains cellular homeostasis",
            energy_metabolism: "Energy metabolism powers all cellular activities",
            dna_genetics: "DNA stores and transmits genetic information",
            protein_synthesis: "Proteins perform most cellular functions",
            cell_division: "Cell division enables growth and reproduction"
        };

        return relevance[topicType] || "Important biological concept";
    }

    // DIAGRAM GENERATION (Placeholder methods)

    generateBiologyDiagramData() {
        if (!this.currentContent) return;

        const { type } = this.currentProblem;

        // Placeholder diagram data generation
        this.diagramData = {
            type: type,
            diagrams: this.getRelevantDiagrams(type),
            placeholder: true,
            note: "Diagram generation will be implemented with actual biological diagrams"
        };
    }

    getRelevantDiagrams(topicType) {
        const diagramMap = {
            cell_types: ["prokaryotic_cell", "eukaryotic_cell", "animal_cell", "plant_cell"],
            organelles: ["nucleus", "mitochondria", "chloroplast", "er", "golgi", "ribosome"],
            cell_membrane: ["fluid_mosaic_model", "phospholipid_bilayer", "membrane_proteins"],
            cellular_processes: ["mitosis_stages", "meiosis_stages", "cell_cycle", "cellular_respiration"],
            transport_mechanisms: ["diffusion", "osmosis", "active_transport", "endocytosis"],
            energy_metabolism: ["cellular_respiration_overview", "photosynthesis_overview"],
            dna_genetics: ["dna_structure", "chromosome", "double_helix"],
            protein_synthesis: ["transcription", "translation", "ribosome_structure"]
        };

        return diagramMap[topicType] || [];
    }

    // WORKBOOK GENERATION

    generateBiologyWorkbook() {
        if (!this.currentContent || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createBiologyProblemSection(),
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
        title: 'Cell Biology Workbook',
        timestamp: new Date().toISOString(),
        theme: this.theme,
        dimensions: { width: this.width, height: this.height },
        sections: []
    };
}    


createBiologyProblemSection() {
        if (!this.currentProblem) return null;

        return {
            title: 'Topic Information',
            type: 'problem',
            data: [
                ['Topic Type', this.currentProblem.type],
                ['Main Topic', this.currentProblem.originalTopic],
                ['Sub-Topic', this.currentProblem.subTopic || 'General'],
                ['Category', this.biologyTopics[this.currentProblem.type]?.category || 'N/A']
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

        // Cell Types
        if (this.currentContent.cellTypes) {
            this.currentContent.cellTypes.forEach(cell => {
                contentData.push([cell.name, '']);
                contentData.push(['Category', cell.category]);
                contentData.push(['Characteristics', cell.characteristics.join('; ')]);
                if (cell.examples) contentData.push(['Examples', cell.examples.join(', ')]);
                contentData.push(['', '']); // Spacing
            });
        }

        // Organelles
        if (this.currentContent.organelles) {
            this.currentContent.organelles.forEach(org => {
                contentData.push([org.name, '']);
                contentData.push(['Type', org.type]);
                contentData.push(['Location', org.location]);
                contentData.push(['Functions', org.functions.join('; ')]);
                contentData.push(['Found In', org.foundIn.join(', ')]);
                if (org.analogy) contentData.push(['Analogy', org.analogy]);
                contentData.push(['', '']); // Spacing
            });
        }

        // Molecules
        if (this.currentContent.molecules) {
            this.currentContent.molecules.forEach(mol => {
                contentData.push([mol.name, '']);
                contentData.push(['Category', mol.category]);
                contentData.push(['Monomers', mol.monomers]);
                contentData.push(['Functions', mol.functions.join('; ')]);
                if (mol.examples) contentData.push(['Examples', mol.examples.join(', ')]);
                contentData.push(['', '']); // Spacing
            });
        }

        // Processes
        if (this.currentContent.processes) {
            this.currentContent.processes.forEach(proc => {
                contentData.push([proc.name, '']);
                contentData.push(['Category', proc.category]);
                contentData.push(['Purpose', proc.purpose]);
                if (proc.result) contentData.push(['Result', proc.result]);
                contentData.push(['', '']); // Spacing
            });
        }

        // Models
        if (this.currentContent.models) {
            Object.entries(this.currentContent.models).forEach(([key, model]) => {
                contentData.push([model.description ? 'Model' : key, '']);
                contentData.push(['Description', model.description]);
                if (model.proposedBy) contentData.push(['Proposed By', model.proposedBy]);
                if (model.keyFeatures) contentData.push(['Key Features', model.keyFeatures.join('; ')]);
                contentData.push(['', '']); // Spacing
            });
        }

        // Structure
        if (this.currentContent.structure) {
            Object.entries(this.currentContent.structure).forEach(([key, component]) => {
                contentData.push([key, '']);
                contentData.push(['Description', component.description]);
                if (component.properties) {
                    contentData.push(['Properties', Array.isArray(component.properties) ? 
                        component.properties.join('; ') : 
                        JSON.stringify(component.properties)]);
                }
                if (component.functions) {
                    contentData.push(['Functions', Array.isArray(component.functions) ? 
                        component.functions.join('; ') : 
                        component.functions]);
                }
                contentData.push(['', '']); // Spacing
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
                        data.push([example.name || 'Example', '']);
                        Object.entries(example).forEach(([key, value]) => {
                            if (key !== 'name') {
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

        if (lesson.keyProcesses) {
            data.push(['', '']);
            data.push(['KEY PROCESSES', '']);
            Object.entries(lesson.keyProcesses).forEach(([process, description]) => {
                data.push([process, description]);
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

    adaptBiologyLanguage(text, level) {
        if (!text) return '';

        const adaptations = {
            basic: {
                replacements: {
                    'organelle': 'cell part',
                    'mitochondria': 'powerhouse (energy maker)',
                    'nucleus': 'control center',
                    'chromosome': 'packaged DNA',
                    'prokaryotic': 'simple cell (no nucleus)',
                    'eukaryotic': 'complex cell (with nucleus)',
                    'phospholipid': 'fat molecule with two parts',
                    'selectively permeable': 'lets some things through',
                    'hydrophobic': 'water-fearing',
                    'hydrophilic': 'water-loving'
                }
            },
            intermediate: {
                replacements: {
                    'organelle': 'organelle',
                    'mitochondria': 'mitochondria',
                    'nucleus': 'nucleus',
                    'prokaryotic': 'prokaryotic',
                    'eukaryotic': 'eukaryotic'
                }
            },
            detailed: {
                replacements: {
                    'organelle': 'membrane-bound organelle',
                    'mitochondria': 'mitochondria (semi-autonomous organelles)',
                    'nucleus': 'nucleus (membrane-bound genetic material repository)',
                    'prokaryotic': 'prokaryotic (lacking membrane-bound nucleus)',
                    'eukaryotic': 'eukaryotic (possessing membrane-bound organelles)'
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

    generateBiologyAnalogy(concept) {
        const analogies = {
            cell: "Like a factory with different departments",
            nucleus: "Like a control center or city hall",
            mitochondria: "Like a power plant generating electricity",
            chloroplast: "Like a solar panel capturing sunlight",
            cell_membrane: "Like a security checkpoint or gatekeeper",
            ribosome: "Like an assembly line building products",
            golgi: "Like a post office packaging and shipping items",
            lysosome: "Like a recycling center or garbage disposal",
            endoplasmic_reticulum: "Like a highway system for transport",
            cytoskeleton: "Like scaffolding or building framework",
            enzyme: "Like a specialized tool or machine",
            DNA: "Like a blueprint or instruction manual",
            chromosome: "Like a chapter in an instruction book"
        };

        return analogies[concept] || "Performs a specialized function in the cell";
    }

    formatBiologicalTerm(term) {
        // Format biological terms with proper symbols
        const formatted = term
            .replace(/ATP/g, this.biologicalSymbols.ATP)
            .replace(/DNA/g, this.biologicalSymbols.DNA)
            .replace(/RNA/g, this.biologicalSymbols.RNA)
            .replace(/CO2/g, this.biologicalSymbols.CO2)
            .replace(/O2/g, this.biologicalSymbols.O2)
            .replace(/H2O/g, this.biologicalSymbols.H2O);

        return formatted;
    }

    // ENHANCED CONTENT METHODS

    addConceptualConnections(content) {
        if (!this.includeConceptualConnections) return content;

        const connections = {
            cell_types: "Cell types relate to evolutionary development and functional specialization",
            organelles: "Organelles work together as an integrated system to maintain cellular function",
            cell_membrane: "Membrane structure determines function through selective permeability",
            cellular_processes: "Processes are interconnected - energy from respiration powers other reactions",
            dna_genetics: "DNA structure enables replication and information storage",
            protein_synthesis: "Central dogma connects DNA → RNA → Protein"
        };

        content.conceptualConnections = connections[this.currentProblem.type] || 
            "This topic connects to broader biological principles";

        return content;
    }

    enrichWithExamples(content) {
        if (!this.includeExamples || content.examples) return content;

        const exampleDatabase = {
            cell_types: [
                "Red blood cells (animal cells without nucleus)",
                "Guard cells (plant cells controlling stomata)",
                "E. coli bacteria (prokaryotic cell)"
            ],
            organelles: [
                "Liver cells have many mitochondria for detoxification",
                "Leaf cells packed with chloroplasts for photosynthesis",
                "Pancreatic cells have extensive ER for enzyme production"
            ],
            cell_membrane: [
                "Glucose enters cells via GLUT transporters",
                "Neurons use sodium-potassium pumps for nerve signals",
                "White blood cells use endocytosis to engulf bacteria"
            ]
        };

        if (exampleDatabase[this.currentProblem.type]) {
            content.examples = exampleDatabase[this.currentProblem.type];
        }

        return content;
    }

    addComparativeContext(content) {
        if (!this.includeComparisons || content.comparisons) return content;

        // Add comparative information where relevant
        const comparativeData = {
            cell_types: {
                size: "Prokaryotes ~1-10 μm vs Eukaryotes ~10-100 μm",
                complexity: "Simple vs Complex internal organization",
                evolution: "Ancient vs More recent evolutionary origin"
            },
            organelles: {
                energy: "Mitochondria (all eukaryotes) vs Chloroplasts (plants only)",
                membrane: "Single membrane (lysosomes) vs Double membrane (mitochondria, nucleus)",
                origin: "Endosymbiotic (mitochondria, chloroplasts) vs Native (ER, Golgi)"
            }
        };

        if (comparativeData[this.currentProblem.type]) {
            content.comparativeContext = comparativeData[this.currentProblem.type];
        }

        return content;
    }

    // VERIFICATION AND VALIDATION

    validateBiologyContent(content) {
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
            content.cellTypes || 
            content.organelles || 
            content.molecules || 
            content.processes || 
            content.structure || 
            content.models;

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
        if (this.currentContent.description || this.currentContent.summary) score += 1;
        if (this.currentContent.examples) score += 1;
        if (this.currentContent.applications) score += 1;
        if (this.currentContent.comparisons || this.currentContent.comparison) score += 1;
        
        // Main content
        const hasMainContent = 
            this.currentContent.cellTypes || 
            this.currentContent.organelles || 
            this.currentContent.molecules || 
            this.currentContent.processes;
        if (hasMainContent) score += 3;

        // Additional depth
        if (this.currentContent.structure) score += 1;
        if (this.currentContent.models) score += 1;

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

        if (content.summary) {
            markdown += `${content.summary}\n\n`;
        }

        if (content.cellTypes) {
            markdown += `## Cell Types\n\n`;
            content.cellTypes.forEach(cell => {
                markdown += `### ${cell.name}\n`;
                markdown += `**Category:** ${cell.category}\n\n`;
                markdown += `**Characteristics:**\n`;
                cell.characteristics.forEach(char => {
                    markdown += `- ${char}\n`;
                });
                markdown += `\n`;
            });
        }

        // Add other sections similarly...

        return markdown;
    }

    convertToHTML(content) {
        let html = `<div class="biology-content">\n`;
        html += `  <h1>${content.topic}</h1>\n`;

        if (content.summary) {
            html += `  <p class="summary">${content.summary}</p>\n`;
        }

        if (content.cellTypes) {
            html += `  <section class="cell-types">\n`;
            html += `    <h2>Cell Types</h2>\n`;
            content.cellTypes.forEach(cell => {
                html += `    <article>\n`;
                html += `      <h3>${cell.name}</h3>\n`;
                html += `      <p><strong>Category:</strong> ${cell.category}</p>\n`;
                html += `      <ul>\n`;
                cell.characteristics.forEach(char => {
                    html += `        <li>${char}</li>\n`;
                });
                html += `      </ul>\n`;
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
            // Search in different content types
            if (this.currentContent.cellTypes) {
                this.currentContent.cellTypes.forEach(cell => {
                    if (JSON.stringify(cell).toLowerCase().includes(queryLower)) {
                        results.matches.push({
                            type: 'cell_type',
                            name: cell.name,
                            content: cell
                        });
                    }
                });
            }

            if (this.currentContent.organelles) {
                this.currentContent.organelles.forEach(org => {
                    if (JSON.stringify(org).toLowerCase().includes(queryLower)) {
                        results.matches.push({
                            type: 'organelle',
                            name: org.name,
                            content: org
                        });
                    }
                });
            }

            if (this.currentContent.molecules) {
                this.currentContent.molecules.forEach(mol => {
                    if (JSON.stringify(mol).toLowerCase().includes(queryLower)) {
                        results.matches.push({
                            type: 'molecule',
                            name: mol.name,
                            content: mol
                        });
                    }
                });
            }

            if (this.currentContent.processes) {
                this.currentContent.processes.forEach(proc => {
                    if (JSON.stringify(proc).toLowerCase().includes(queryLower)) {
                        results.matches.push({
                            type: 'process',
                            name: proc.name,
                            content: proc
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
        if (this.currentContent.cellTypes) {
            const matching = this.currentContent.cellTypes.filter(cell => 
                cell.category.toLowerCase().includes(category.toLowerCase())
            );
            filtered.items.push(...matching);
        }

        if (this.currentContent.organelles) {
            const matching = this.currentContent.organelles.filter(org => 
                org.type?.toLowerCase().includes(category.toLowerCase())
            );
            filtered.items.push(...matching);
        }

        if (this.currentContent.processes) {
            const matching = this.currentContent.processes.filter(proc => 
                proc.category?.toLowerCase().includes(category.toLowerCase())
            );
            filtered.items.push(...matching);
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
        if (this.currentContent.cellTypes) {
            summary.itemCount += this.currentContent.cellTypes.length;
            summary.coverage.cellTypes = this.currentContent.cellTypes.length;
        }

        if (this.currentContent.organelles) {
            summary.itemCount += this.currentContent.organelles.length;
            summary.coverage.organelles = this.currentContent.organelles.length;
        }

        if (this.currentContent.molecules) {
            summary.itemCount += this.currentContent.molecules.length;
            summary.coverage.molecules = this.currentContent.molecules.length;
        }

        if (this.currentContent.processes) {
            summary.itemCount += this.currentContent.processes.length;
            summary.coverage.processes = this.currentContent.processes.length;
        }

        // Extract key points
        if (this.currentContent.mainCategories) {
            summary.keyPoints.push(...this.currentContent.mainCategories);
        }

        return summary;
    }

    // DIFFICULTY ASSESSMENT

    assessContentDifficulty() {
        if (!this.currentContent) return 'unknown';

        let difficultyScore = 0;

        // Simple topics
        const simpleTopics = ['cell_types', 'organelles'];
        if (simpleTopics.includes(this.currentProblem.type)) {
            difficultyScore += 1;
        }

        // Intermediate topics
        const intermediateTopics = ['cellular_molecules', 'transport_mechanisms', 'cell_membrane'];
        if (intermediateTopics.includes(this.currentProblem.type)) {
            difficultyScore += 2;
        }

        // Complex topics
        const complexTopics = ['cellular_processes', 'protein_synthesis', 'dna_genetics', 'energy_metabolism'];
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
            cell_types: [
                "Distinguish between prokaryotic and eukaryotic cells",
                "Compare and contrast animal and plant cells",
                "Identify characteristics of different cell types",
                "Explain the significance of cell type diversity"
            ],
            organelles: [
                "Identify major cell organelles and their locations",
                "Describe the structure and function of each organelle",
                "Explain how organelles work together as a system",
                "Relate organelle structure to function"
            ],
            cellular_molecules: [
                "Identify the four major types of biological macromolecules",
                "Describe the structure and function of each macromolecule type",
                "Explain the relationship between monomers and polymers",
                "Compare and contrast different molecular structures"
            ],
            cellular_processes: [
                "Describe the stages of major cellular processes",
                "Explain the purpose and outcome of each process",
                "Compare different types of cellular processes",
                "Relate cellular processes to organism function"
            ],
            cell_membrane: [
                "Describe the fluid mosaic model of membrane structure",
                "Explain the components and organization of the cell membrane",
                "Relate membrane structure to its functions",
                "Understand selective permeability and transport"
            ],
            transport_mechanisms: [
                "Distinguish between passive and active transport",
                "Explain the mechanisms of different transport types",
                "Predict the direction of molecule movement",
                "Relate transport to cellular homeostasis"
            ],
            energy_metabolism: [
                "Describe the process of cellular respiration",
                "Explain the stages and products of energy metabolism",
                "Compare aerobic and anaerobic respiration",
                "Relate energy metabolism to ATP production"
            ],
            dna_genetics: [
                "Describe the structure of DNA",
                "Explain how DNA stores genetic information",
                "Understand the relationship between genes and chromosomes",
                "Describe the process of DNA replication"
            ],
            protein_synthesis: [
                "Explain the central dogma of molecular biology",
                "Describe the processes of transcription and translation",
                "Identify the roles of different RNA types",
                "Relate genetic code to protein structure"
            ],
            cell_division: [
                "Compare mitosis and meiosis",
                "Describe the stages of the cell cycle",
                "Explain the purpose of different division types",
                "Relate cell division to growth and reproduction"
            ]
        };

        return objectivesDatabase[this.currentProblem.type] || [
            "Understand the key concepts of this topic",
            "Apply knowledge to biological contexts",
            "Make connections to other biological principles"
        ];
    }

    // PREREQUISITE KNOWLEDGE

    identifyPrerequisites() {
        if (!this.currentProblem) return [];

        const prerequisitesDatabase = {
            cell_types: [
                "Basic understanding of living organisms",
                "Knowledge of what cells are"
            ],
            organelles: [
                "Understanding of cell types (prokaryotic vs eukaryotic)",
                "Basic cell structure knowledge"
            ],
            cellular_molecules: [
                "Basic chemistry (atoms, bonds, molecules)",
                "Understanding of organic compounds"
            ],
            cellular_processes: [
                "Cell structure and organelles",
                "Basic understanding of molecules (DNA, proteins, ATP)"
            ],
            cell_membrane: [
                "Understanding of lipids and proteins",
                "Basic cell structure"
            ],
            transport_mechanisms: [
                "Cell membrane structure",
                "Understanding of concentration gradients",
                "Knowledge of molecules and ions"
            ],
            energy_metabolism: [
                "Basic chemistry (chemical reactions)",
                "Understanding of ATP",
                "Cell structure (mitochondria, chloroplasts)"
            ],
            dna_genetics: [
                "Basic chemistry (bonds, molecules)",
                "Understanding of nucleotides"
            ],
            protein_synthesis: [
                "DNA structure",
                "Understanding of genes",
                "Knowledge of amino acids and proteins"
            ],
            cell_division: [
                "Cell structure",
                "DNA and chromosomes",
                "Cell cycle understanding"
            ]
        };

        return prerequisitesDatabase[this.currentProblem.type] || [
            "General biology background"
        ];
    }

    // STUDY TIPS GENERATION

    generateStudyTips() {
        if (!this.currentProblem) return [];

        const studyTipsDatabase = {
            cell_types: [
                "Create comparison tables for different cell types",
                "Draw and label diagrams of each cell type",
                "Use analogies to remember cell functions",
                "Make flashcards for key characteristics"
            ],
            organelles: [
                "Use memory devices (mnemonics) for organelle functions",
                "Create an organelle 'city' analogy",
                "Practice drawing and labeling cell diagrams",
                "Quiz yourself on structure-function relationships"
            ],
            cellular_molecules: [
                "Build molecular models to understand structure",
                "Create concept maps linking molecules to functions",
                "Practice identifying molecules from diagrams",
                "Make comparison charts for the four macromolecule types"
            ],
            cellular_processes: [
                "Break down complex processes into sequential steps",
                "Create flowcharts or diagrams for each process",
                "Use animations or videos to visualize dynamic processes",
                "Practice explaining processes out loud"
            ],
            cell_membrane: [
                "Draw the fluid mosaic model from memory",
                "Use physical models to understand membrane structure",
                "Create flashcards for membrane components",
                "Relate membrane structure to everyday examples"
            ],
            transport_mechanisms: [
                "Create comparison tables for transport types",
                "Practice predicting direction of molecule movement",
                "Use diagrams to visualize each transport mechanism",
                "Apply concepts to real-world examples"
            ],
            energy_metabolism: [
                "Memorize key equations (photosynthesis, respiration)",
                "Create detailed flowcharts for each pathway",
                "Focus on inputs, outputs, and locations",
                "Understand the 'big picture' before memorizing details"
            ],
            dna_genetics: [
                "Build DNA models to understand structure",
                "Practice base pairing rules",
                "Create diagrams showing DNA organization levels",
                "Use genetics problems to apply concepts"
            ],
            protein_synthesis: [
                "Memorize the central dogma flow",
                "Practice using codon tables",
                "Create step-by-step diagrams for transcription and translation",
                "Work through example problems"
            ],
            cell_division: [
                "Create visual timelines for mitosis and meiosis",
                "Use acronyms to remember phases (PMAT)",
                "Compare and contrast the two division types",
                "Practice identifying phases from diagrams"
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
            cell_types: [
                {
                    question: "What is the main structural difference between prokaryotic and eukaryotic cells?",
                    type: "comparison",
                    difficulty: "easy"
                },
                {
                    question: "Why do plant cells have cell walls but animal cells do not?",
                    type: "explanation",
                    difficulty: "medium"
                },
                {
                    question: "How does the absence of mitochondria in prokaryotes affect their metabolism?",
                    type: "analysis",
                    difficulty: "hard"
                }
            ],
            organelles: [
                {
                    question: "What is the function of the mitochondria?",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "Explain why cells with high energy demands have more mitochondria.",
                    type: "application",
                    difficulty: "medium"
                },
                {
                    question: "How does the structure of the cristae in mitochondria relate to ATP production?",
                    type: "analysis",
                    difficulty: "hard"
                }
            ],
            cellular_processes: [
                {
                    question: "What are the products of glycolysis?",
                    type: "recall",
                    difficulty: "easy"
                },
                {
                    question: "Compare the ATP yield of aerobic and anaerobic respiration.",
                    type: "comparison",
                    difficulty: "medium"
                },
                {
                    question: "Why is the electron transport chain considered the most efficient stage of cellular respiration?",
                    type: "explanation",
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
            cell_types: ['organelles', 'cell_membrane', 'cellular_processes'],
            organelles: ['cell_types', 'cellular_processes', 'energy_metabolism'],
            cellular_molecules: ['cell_membrane', 'protein_synthesis', 'enzymes'],
            cellular_processes: ['organelles', 'energy_metabolism', 'cell_division'],
            cell_membrane: ['transport_mechanisms', 'cell_communication', 'cellular_molecules'],
            transport_mechanisms: ['cell_membrane', 'cellular_processes'],
            energy_metabolism: ['organelles', 'cellular_processes'],
            dna_genetics: ['protein_synthesis', 'cell_division'],
            protein_synthesis: ['dna_genetics', 'cellular_molecules'],
            cell_division: ['dna_genetics', 'cellular_processes']
        };

        const relatedTypes = relatedTopicsMap[this.currentProblem.type] || [];
        
        return relatedTypes.map(type => ({
            type: type,
            name: this.biologyTopics[type]?.name,
            description: this.biologyTopics[type]?.description
        }));
    }

    // GLOSSARY GENERATION

    generateGlossary() {
        if (!this.currentContent) return {};

        const glossary = {};

        // Extract key terms from content
        if (this.currentContent.cellTypes) {
            this.currentContent.cellTypes.forEach(cell => {
                glossary[cell.name] = cell.category;
            });
        }

        if (this.currentContent.organelles) {
            this.currentContent.organelles.forEach(org => {
                glossary[org.name] = org.functions ? org.functions[0] : org.type;
            });
        }

        if (this.currentContent.molecules) {
            this.currentContent.molecules.forEach(mol => {
                glossary[mol.name] = mol.category;
            });
        }

        if (this.currentContent.processes) {
            this.currentContent.processes.forEach(proc => {
                glossary[proc.name] = proc.purpose || proc.definition;
            });
        }

        return glossary;
    }
    // TIMELINE GENERATION (for processes)

    generateProcessTimeline(processName) {
        const timelines = {
            'Mitosis': [
                { phase: 'Interphase', duration: '90% of cell cycle', events: 'DNA replication, cell growth' },
                { phase: 'Prophase', duration: 'Minutes', events: 'Chromosome condensation, spindle formation' },
                { phase: 'Metaphase', duration: 'Minutes', events: 'Chromosome alignment' },
                { phase: 'Anaphase', duration: 'Minutes', events: 'Sister chromatid separation' },
                { phase: 'Telophase', duration: 'Minutes', events: 'Nuclear envelope reformation' }
            ],
            'Cellular Respiration': [
                { stage: 'Glycolysis', location: 'Cytoplasm', output: '2 ATP, 2 NADH' },
                { stage: 'Krebs Cycle', location: 'Matrix', output: '2 ATP, 6 NADH, 2 FADH₂' },
                { stage: 'Electron Transport', location: 'Inner membrane', output: '~34 ATP' }
            ],
            'Protein Synthesis': [
                { step: 'Transcription', location: 'Nucleus', product: 'mRNA' },
                { step: 'RNA Processing', location: 'Nucleus', product: 'Mature mRNA' },
                { step: 'Translation', location: 'Ribosome', product: 'Polypeptide chain' },
                { step: 'Protein Folding', location: 'ER/Cytoplasm', product: 'Functional protein' }
            ]
        };

        return timelines[processName] || [];
    }

    // HIERARCHY VISUALIZATION

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

        if (this.currentContent.cellTypes) {
            hierarchy.children.push({
                name: 'Cell Types',
                type: 'section',
                count: this.currentContent.cellTypes.length
            });
        }

        if (this.currentContent.organelles) {
            hierarchy.children.push({
                name: 'Organelles',
                type: 'section',
                count: this.currentContent.organelles.length
            });
        }

        if (this.currentContent.processes) {
            hierarchy.children.push({
                name: 'Processes',
                type: 'section',
                count: this.currentContent.processes.length
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

    getAvailableTopics() {
        return Object.entries(this.biologyTopics).map(([key, topic]) => ({
            id: key,
            name: topic.name,
            category: topic.category,
            description: topic.description
        }));
    }

    getTopicDetails(topicId) {
        const topic = this.biologyTopics[topicId];
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
export default EnhancedCellBiologyWorkbook;
            
