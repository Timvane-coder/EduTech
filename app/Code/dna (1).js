//Enhanced DNA Biology Workbook - Comprehensive DNA and Genetics System
import { createCanvas, loadImage } from '@napi-rs/canvas';
import { BiologySvgDiagrams } from '../svg-data.js';
import { BiologyDiagramsRegistry} from '../registry.js';
import { BiologyDiagramsRenderer } from '../renderer.js';
import * as math from 'mathjs';

export class EnhancedDNABiologyWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "dna";
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

        this.dnaSymbols = this.initializeDNASymbols();
        this.setThemeColors();
        this.initializeDNATopics();
        this.initializeDNALessons();
        this.initializeDNAExperiments();
        this.initializeMisconceptionDatabase();
        this.initializeMetacognitivePrompts();
        this.initializeContextualScenarios();
        this.initializeAssessmentRubrics();
    }

    setThemeColors() {
        const themes = {
            dna: {
                background: '#ffffff',
                gridColor: '#b0b0b0',
                headerBg: '#3f51b5',
                headerText: '#ffffff',
                sectionBg: '#c5cae9',
                sectionText: '#1a237e',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#e8eaf6',
                resultText: '#303f9f',
                definitionBg: '#fff3e0',
                definitionText: '#e65100',
                stepBg: '#e0f2f1',
                stepText: '#004d40',
                borderColor: '#5c6bc0',
                contentBg: '#f3e5f5',
                contentText: '#4a148c',
                diagramBg: '#e1f5fe',
                structureBg: '#e0f7fa',
                experimentBg: '#fff9c4',
                experimentText: '#f57f17',
                adenineBg: '#ffcdd2',
                thymineBg: '#c8e6c9',
                guanineBg: '#fff9c4',
                cytosineBg: '#b3e5fc',
                dnaStrandBg: '#f8bbd0',
                chromatinBg: '#d1c4e9'
            },
            genetics: {
                background: '#fafafa',
                gridColor: '#9e9e9e',
                headerBg: '#7b1fa2',
                headerText: '#ffffff',
                sectionBg: '#e1bee7',
                sectionText: '#4a148c',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#f3e5f5',
                resultText: '#6a1b9a',
                definitionBg: '#fff8e1',
                definitionText: '#f57f17',
                stepBg: '#e8f5e9',
                stepText: '#1b5e20',
                borderColor: '#9c27b0',
                contentBg: '#ede7f6',
                contentText: '#311b92',
                diagramBg: '#fce4ec',
                structureBg: '#e8eaf6',
                experimentBg: '#fffde7',
                experimentText: '#f57f17',
                adenineBg: '#ffcdd2',
                thymineBg: '#c8e6c9',
                guanineBg: '#fff9c4',
                cytosineBg: '#b3e5fc',
                dnaStrandBg: '#f8bbd0',
                chromatinBg: '#d1c4e9'
            }
        };

        this.colors = themes[this.theme] || themes.dna;
    }

    initializeDNASymbols() {
        return {
            // Nucleotide bases
            'A': 'A',
            'T': 'T',
            'G': 'G',
            'C': 'C',
            'U': 'U',
            
            // Base pairing
            'basepair': '═',
            'hydrogen': '---',
            
            // DNA structure
            '5prime': "5'",
            '3prime': "3'",
            'phosphate': 'P',
            'deoxyribose': 'dR',
            'ribose': 'R',
            
            // Arrows
            'arrow': '→',
            'reversible': '⇌',
            'replication': '⟹',
            
            // Greek letters
            'alpha': 'α',
            'beta': 'β',
            'gamma': 'γ',
            'delta': 'Δ',
            'lambda': 'λ',
            
            // Math symbols
            'plus': '+',
            'minus': '−',
            'plusminus': '±',
            'approximately': '≈',
            'degree': '°',
            
            // Genetic notation
            'wildtype': '+',
            'mutant': '−',
            'heterozygous': '+/−',
            'homozygous_dom': '+/+',
            'homozygous_rec': '−/−'
        };
    }

    initializeDNATopics() {
        this.dnaTopics = {
            dna_structure: {
                patterns: [
                    /DNA.*structure/i,
                    /double.*helix/i,
                    /nucleotide|base.*pair/i,
                    /sugar.*phosphate.*backbone/i,
                    /antiparallel|complementary/i
                ],
                handler: this.handleDNAStructure.bind(this),
                name: 'DNA Structure and Organization',
                category: 'molecular_structure',
                description: 'The molecular architecture of DNA including nucleotides, double helix, and base pairing',
                difficulty: 'intermediate',
                prerequisites: ['basic_chemistry', 'organic_chemistry']
            },
            
            dna_replication: {
                patterns: [
                    /replication/i,
                    /DNA.*synthesis/i,
                    /semiconservative/i,
                    /DNA.*polymerase|helicase|ligase/i,
                    /leading.*strand|lagging.*strand/i,
                    /Okazaki.*fragment/i
                ],
                handler: this.handleDNAReplication.bind(this),
                name: 'DNA Replication',
                category: 'molecular_processes',
                description: 'The process of DNA copying including enzymes, mechanisms, and regulation',
                difficulty: 'advanced',
                prerequisites: ['dna_structure', 'enzymes']
            },
            
            dna_repair: {
                patterns: [
                    /DNA.*repair/i,
                    /mutation.*repair/i,
                    /mismatch.*repair/i,
                    /excision.*repair/i,
                    /proofreading/i
                ],
                handler: this.handleDNARepair.bind(this),
                name: 'DNA Repair Mechanisms',
                category: 'molecular_processes',
                description: 'Cellular mechanisms for detecting and correcting DNA damage',
                difficulty: 'advanced',
                prerequisites: ['dna_structure', 'dna_replication']
            },
            
            chromatin_organization: {
                patterns: [
                    /chromatin/i,
                    /nucleosome|histone/i,
                    /chromosome.*structure/i,
                    /heterochromatin|euchromatin/i,
                    /DNA.*packaging/i
                ],
                handler: this.handleChromatinOrganization.bind(this),
                name: 'Chromatin and Chromosome Organization',
                category: 'nuclear_organization',
                description: 'How DNA is packaged into chromatin and chromosomes',
                difficulty: 'advanced',
                prerequisites: ['dna_structure', 'proteins']
            },
            
            genetic_code: {
                patterns: [
                    /genetic.*code/i,
                    /codon|anticodon/i,
                    /translation/i,
                    /wobble.*base/i,
                    /start.*codon|stop.*codon/i
                ],
                handler: this.handleGeneticCode.bind(this),
                name: 'The Genetic Code',
                category: 'information_flow',
                description: 'How DNA sequences encode amino acid sequences',
                difficulty: 'intermediate',
                prerequisites: ['dna_structure', 'proteins']
            },
            
            mutations: {
                patterns: [
                    /mutation/i,
                    /point.*mutation|substitution/i,
                    /insertion|deletion/i,
                    /frameshift/i,
                    /silent.*mutation|missense|nonsense/i
                ],
                handler: this.handleMutations.bind(this),
                name: 'DNA Mutations and Their Effects',
                category: 'genetic_variation',
                description: 'Types of mutations and their consequences',
                difficulty: 'intermediate',
                prerequisites: ['dna_structure', 'genetic_code']
            },
            
            gene_expression: {
                patterns: [
                    /gene.*expression/i,
                    /transcription.*regulation/i,
                    /promoter|enhancer|silencer/i,
                    /transcription.*factor/i,
                    /epigenetic/i
                ],
                handler: this.handleGeneExpression.bind(this),
                name: 'Gene Expression and Regulation',
                category: 'information_flow',
                description: 'How genes are turned on and off',
                difficulty: 'advanced',
                prerequisites: ['dna_structure', 'chromatin_organization']
            },
            
            dna_technology: {
                patterns: [
                    /PCR|polymerase.*chain.*reaction/i,
                    /gel.*electrophoresis/i,
                    /DNA.*sequencing/i,
                    /restriction.*enzyme|endonuclease/i,
                    /cloning|recombinant.*DNA/i,
                    /CRISPR/i
                ],
                handler: this.handleDNATechnology.bind(this),
                name: 'DNA Technology and Techniques',
                category: 'biotechnology',
                description: 'Laboratory techniques for analyzing and manipulating DNA',
                difficulty: 'advanced',
                prerequisites: ['dna_structure', 'dna_replication', 'enzymes']
            }
        };
    }

    initializeDNALessons() {
        this.lessons = {
            dna_structure: {
                title: "DNA Structure: The Double Helix and Its Components",
                concepts: [
                    "DNA is a polymer of nucleotides",
                    "Each nucleotide contains a deoxyribose sugar, phosphate group, and nitrogenous base",
                    "Four bases: Adenine (A), Thymine (T), Guanine (G), Cytosine (C)",
                    "DNA forms a double helix with two antiparallel strands",
                    "Complementary base pairing: A-T (2 H-bonds) and G-C (3 H-bonds)",
                    "Sugar-phosphate backbone on outside, bases on inside"
                ],
                theory: "DNA (deoxyribonucleic acid) is the hereditary material in all living organisms. Its structure allows it to store genetic information and be replicated accurately. Understanding DNA structure is fundamental to molecular biology, genetics, and biotechnology.",
                keyDefinitions: {
                    "Nucleotide": "Monomer of DNA consisting of deoxyribose sugar, phosphate group, and nitrogenous base",
                    "Purine": "Two-ring nitrogenous base (Adenine and Guanine)",
                    "Pyrimidine": "Single-ring nitrogenous base (Thymine and Cytosine)",
                    "Complementary Base Pairing": "A pairs with T, G pairs with C via hydrogen bonds",
                    "Antiparallel": "Two DNA strands run in opposite directions (5'→3' and 3'→5')",
                    "Double Helix": "Two polynucleotide strands twisted around each other",
                    "Major Groove": "Wider spiral groove in DNA helix where proteins can bind",
                    "Minor Groove": "Narrower spiral groove in DNA helix",
                    "Phosphodiester Bond": "Covalent bond linking nucleotides (3' C of one sugar to 5' phosphate of next)"
                },
                nucleotideStructure: {
                    components: {
                        sugar: {
                            name: "2'-deoxyribose",
                            description: "5-carbon sugar lacking OH at 2' position",
                            carbons: "Numbered 1' through 5'",
                            role: "Structural backbone component"
                        },
                        phosphate: {
                            formula: "PO₄³⁻",
                            position: "Attached to 5' carbon of sugar",
                            role: "Links nucleotides via phosphodiester bonds",
                            charge: "Negative (makes DNA acidic)"
                        },
                        nitrogenousBases: {
                            purines: {
                                adenine: {
                                    abbreviation: "A",
                                    structure: "Double ring (purine)",
                                    pairs: "Thymine (2 hydrogen bonds)",
                                    mnemonic: "Apple Trees"
                                },
                                guanine: {
                                    abbreviation: "G",
                                    structure: "Double ring (purine)",
                                    pairs: "Cytosine (3 hydrogen bonds)",
                                    mnemonic: "Cars in the Garage"
                                }
                            },
                            pyrimidines: {
                                thymine: {
                                    abbreviation: "T",
                                    structure: "Single ring (pyrimidine)",
                                    pairs: "Adenine (2 hydrogen bonds)",
                                    unique: "DNA only (RNA has Uracil instead)"
                                },
                                cytosine: {
                                    abbreviation: "C",
                                    structure: "Single ring (pyrimidine)",
                                    pairs: "Guanine (3 hydrogen bonds)",
                                    note: "Can deaminate to uracil (mutation)"
                                }
                            }
                        }
                    }
                },
                doubleHelixStructure: {
                    discovery: {
                        scientists: "James Watson and Francis Crick",
                        year: "1953",
                        basedOn: "Rosalind Franklin's X-ray crystallography data (Photo 51)",
                        nobelPrize: "1962 (Watson, Crick, Wilkins)"
                    },
                    features: {
                        shape: "Right-handed double helix",
                        diameter: "~2 nm (20 Angstroms)",
                        pitch: "3.4 nm per complete turn",
                        basePairsPerTurn: "~10 base pairs",
                        rise: "0.34 nm between adjacent base pairs",
                        grooves: {
                            major: "Wider groove, more accessible for protein binding",
                            minor: "Narrower groove, less accessible"
                        }
                    },
                    antiparallelStrands: {
                        strand1: "Runs 5' → 3'",
                        strand2: "Runs 3' → 5' (opposite direction)",
                        significance: "Critical for replication and complementarity",
                        visualization: "Like a twisted ladder with opposite railings"
                    },
                    stabilization: {
                        hydrogenBonds: "Between complementary bases (A-T: 2 bonds, G-C: 3 bonds)",
                        baseStacking: "Van der Waals forces between stacked bases (major contribution)",
                        hydrophobicEffect: "Bases stack inside, away from water"
                    }
                },
                basePairing: {
                    chargaffsRules: {
                        rule1: "Amount of A = amount of T",
                        rule2: "Amount of G = amount of C",
                        implication: "Total purines = total pyrimidines",
                        discovered: "Erwin Chargaff (1950)",
                        significance: "Provided clue to base pairing before structure solved"
                    },
                    complementarity: {
                        definition: "Each strand contains information to specify the other",
                        ATpairing: "Adenine - Thymine (2 hydrogen bonds, weaker)",
                        GCpairing: "Guanine - Cytosine (3 hydrogen bonds, stronger)",
                        consequence: "GC-rich DNA more stable (higher melting temperature)"
                    },
                    wobbleBasePairing: {
                        context: "Third codon position in mRNA-tRNA interaction",
                        flexibility: "Non-Watson-Crick pairing allowed",
                        relevance: "Explains codon degeneracy"
                    }
                },
                DNAforms: {
                    BDNA: {
                        description: "Most common form in cells",
                        handedness: "Right-handed helix",
                        diameter: "2 nm",
                        conditions: "Normal physiological conditions",
                        basePairsPerTurn: "10-10.5"
                    },
                    ADNA: {
                        description: "Wider, more compact helix",
                        conditions: "Low humidity, dehydrated",
                        basePairsPerTurn: "11",
                        occurrence: "Rare in vivo"
                    },
                    ZDNA: {
                        description: "Left-handed helix",
                        handedness: "Opposite to B-DNA",
                        sequence: "Alternating purine-pyrimidine (GC repeats)",
                        function: "May play role in gene regulation",
                        structure: "Zigzag backbone (hence 'Z')"
                    }
                },
                comparison: {
                    DNAvsRNA: {
                        sugar: "Deoxyribose vs Ribose (2' OH present in RNA)",
                        bases: "Thymine vs Uracil",
                        structure: "Usually double-stranded vs usually single-stranded",
                        stability: "More stable vs less stable (2' OH makes RNA susceptible to hydrolysis)",
                        function: "Genetic storage vs diverse (catalytic, regulatory, protein synthesis)"
                    }
                },
                applications: [
                    "DNA fingerprinting and forensics",
                    "Understanding genetic diseases",
                    "Drug design targeting DNA",
                    "PCR and molecular cloning",
                    "DNA nanotechnology",
                    "Evolutionary studies via DNA sequencing"
                ]
            },

            dna_replication: {
                title: "DNA Replication: Copying the Genetic Material",
                concepts: [
                    "DNA replication is semiconservative - each new DNA has one old strand and one new strand",
                    "Replication occurs bidirectionally from origins of replication",
                    "Leading strand synthesized continuously, lagging strand in fragments",
                    "DNA polymerase synthesizes DNA in 5' → 3' direction only",
                    "Primase synthesizes RNA primers to start synthesis",
                    "DNA ligase joins Okazaki fragments"
                ],
                theory: "DNA replication is the process by which a cell duplicates its DNA before cell division. This ensures each daughter cell receives an exact copy of the genetic information. The process is highly accurate due to proofreading mechanisms.",
                keyDefinitions: {
                    "Semiconservative Replication": "Each new DNA molecule contains one original strand and one newly synthesized strand",
                    "Origin of Replication": "Specific DNA sequence where replication begins",
                    "Replication Fork": "Y-shaped structure where DNA unwinds and new strands are synthesized",
                    "Leading Strand": "Strand synthesized continuously in 5'→3' direction toward replication fork",
                    "Lagging Strand": "Strand synthesized discontinuously in 5'→3' direction away from fork",
                    "Okazaki Fragments": "Short DNA segments synthesized on lagging strand (100-200 nt in eukaryotes, 1000-2000 in prokaryotes)",
                    "Primer": "Short RNA sequence that initiates DNA synthesis",
                    "Proofreading": "Error correction by DNA polymerase during synthesis"
                },
                enzymesAndProteins: {
                    helicase: {
                        function: "Unwinds DNA double helix by breaking hydrogen bonds",
                        direction: "Moves along DNA",
                        energy: "Uses ATP hydrolysis",
                        result: "Creates replication fork"
                    },
                    singleStrandBindingProteins: {
                        function: "Bind to single-stranded DNA to prevent reannealing",
                        abbreviation: "SSB proteins",
                        role: "Stabilize unwound DNA"
                    },
                    topoisomerase: {
                        function: "Relieves tension ahead of replication fork",
                        mechanism: "Cuts and rejoins DNA strands",
                        types: {
                            typeI: "Cuts one strand",
                            typeII: "Cuts both strands (DNA gyrase in prokaryotes)"
                        },
                        necessity: "Prevents supercoiling due to unwinding"
                    },
                    primase: {
                        function: "Synthesizes short RNA primers (8-12 nucleotides)",
                        type: "RNA polymerase",
                        necessity: "DNA polymerase cannot start synthesis de novo, needs 3'-OH",
                        frequency: "One primer for leading strand, multiple for lagging strand"
                    },
                    DNApolymerase: {
                        prokaryotic: {
                            polI: "Removes primers, fills gaps (5'→3' exonuclease activity)",
                            polII: "DNA repair",
                            polIII: "Main replicative enzyme (adds ~1000 nt/sec)"
                        },
                        eukaryotic: {
                            polAlpha: "Primase activity, initiates synthesis",
                            polDelta: "Lagging strand synthesis",
                            polEpsilon: "Leading strand synthesis",
                            polGamma: "Mitochondrial DNA replication"
                        },
                        properties: {
                            direction: "Synthesizes only 5' → 3'",
                            requirement: "Needs primer with 3'-OH group",
                            proofreading: "3' → 5' exonuclease activity (error rate ~1 in 10⁷)",
                            speed: "Prokaryotes: ~1000 nt/sec; Eukaryotes: ~50 nt/sec"
                        }
                    },
                    DNAligase: {
                        function: "Joins Okazaki fragments by forming phosphodiester bonds",
                        mechanism: "Seals nicks between adjacent nucleotides",
                        energy: "Uses ATP (eukaryotes) or NAD+ (prokaryotes)",
                        timing: "After RNA primers removed and gaps filled"
                    },
                    telomerase: {
                        function: "Extends telomeres at chromosome ends",
                        type: "Reverse transcriptase (RNA-dependent DNA polymerase)",
                        necessity: "Prevents chromosome shortening in linear chromosomes",
                        activity: "High in germ cells and cancer cells, low/absent in most somatic cells"
                    }
                },
                
                processReplication: {
                    initiation: [
                        "Recognition of origin of replication (oriC in prokaryotes, multiple origins in eukaryotes)",
                        "Binding of initiator proteins (DnaA in E. coli, ORC in eukaryotes)",
                        "Helicase loaded onto DNA",
                        "DNA unwinds at origin, forming replication bubble",
                        "Two replication forks form, move bidirectionally"
                    ],
                    elongation: {
                        leadingStrand: [
                            "Primase synthesizes one RNA primer",
                            "DNA polymerase extends primer continuously",
                            "Synthesis proceeds 5' → 3' toward replication fork",
                            "Continuous synthesis as fork opens"
                        ],
                        laggingStrand: [
                            "Primase synthesizes multiple RNA primers",
                            "DNA polymerase synthesizes Okazaki fragments (5' → 3' away from fork)",
                            "Pol I removes RNA primers and fills gaps (prokaryotes)",
                            "DNA ligase joins fragments",
                            "Discontinuous synthesis"
                        ]
                    },
                    termination: {
                        prokaryotes: "Replication forks meet at ter sites opposite oriC",
                        eukaryotes: "Forks from adjacent origins meet; telomerase extends telomeres",
                        result: "Two identical DNA molecules (semiconservative)"
                    }
                },
                fidelity: {
                    mechanisms: [
                        "Base selection by DNA polymerase (complimentary pairing)",
                        "Proofreading (3' → 5' exonuclease removes mismatched nucleotide)",
                        "Mismatch repair (post-replication correction)"
                    ],
                    errorRate: {
                        withoutProofreading: "~1 error per 10⁵ nucleotides",
                        withProofreading: "~1 error per 10⁷ nucleotides",
                        withMismatchRepair: "~1 error per 10⁹-10¹⁰ nucleotides"
                    }
                },
                telomereProblem: {
                    issue: "DNA polymerase cannot replicate 5' end of linear chromosomes",
                    consequence: "Chromosomes shorten with each replication",
                    solution: {
                        telomerase: "Adds repetitive sequences (TTAGGG in humans) to 3' end",
                        mechanism: "RNA template within telomerase specifies sequence",
                        expression: "Active in germ cells, stem cells, and cancer cells"
                    },
                    hayflickLimit: "Somatic cells divide ~50 times before telomeres critically short"
                },
                applications: [
                    "Understanding cancer (telomerase reactivation in tumors)",
                    "PCR technology (uses DNA polymerase)",
                    "DNA sequencing methods",
                    "Studying aging (telomere shortening)",
                    "Developing anti-cancer drugs (telomerase inhibitors)",
                    "Genome editing and synthetic biology"
                ]
            },

            chromatin_organization: {
                title: "Chromatin and Chromosome Structure: DNA Packaging",
                concepts: [
                    "DNA wraps around histone proteins to form nucleosomes",
                    "Nucleosomes are the basic repeating unit of chromatin",
                    "Chromatin can be euchromatin (loose) or heterochromatin (condensed)",
                    "Higher-order structures compact DNA further",
                    "Chromatin structure regulates gene expression"
                ],
                theory: "Eukaryotic DNA is packaged with proteins into chromatin. This packaging serves multiple purposes: compacting DNA to fit in nucleus, protecting DNA from damage, and regulating gene expression. Understanding chromatin is essential for understanding epigenetics and gene regulation.",
                keyDefinitions: {
                    "Chromatin": "Complex of DNA and proteins (mainly histones) in eukaryotic cells",
                    "Nucleosome": "DNA wrapped around histone octamer - basic unit of chromatin",
                    "Histone": "Small, positively charged protein that DNA wraps around",
                    "Histone Octamer": "Core of nucleosome: 2 copies each of H2A, H2B, H3, H4",
                    "Euchromatin": "Loosely packed chromatin, transcriptionally active",
                    "Heterochromatin": "Tightly packed chromatin, transcriptionally inactive",
                    "30-nm Fiber": "Higher-order chromatin structure formed from nucleosome chain",
                    "Scaffold Proteins": "Non-histone proteins that organize chromatin loops"
                },
                nucleosomeStructure: {
                    components: {
                        histoneCore: {
                            composition: "Octamer: (H2A-H2B)₂ + (H3-H4)₂",
                            shape: "Disc-shaped protein complex",
                            charge: "Positively charged (lysine and arginine rich)",
                            function: "DNA binding through electrostatic interaction"
                        },
                        DNAwrap: {
                            length: "147 base pairs",
                            wraps: "1.65 turns around histone core",
                            leftHanded: "DNA wraps in left-handed superhelix"
                        },
                        linkerDNA: {
                            length: "20-80 bp (varies)",
                            function: "Connects nucleosomes",
                            accessibility: "More accessible to proteins"
                        },
                        histoneH1: {
                            position: "Binds to linker DNA at nucleosome entry/exit",
                            function: "Stabilizes nucleosome and helps compact chromatin",
                            presence: "Not part of core, called 'linker histone'"
                        }
                    },
                    "beadsOnString": {
                        description: "11 nm fiber - nucleosomes connected by linker DNA",
                        appearance: "Like beads on a string in electron microscopy",
                        compaction: "~6-fold compared to naked DNA"
                    }
                },
                chromatinLevels: {
                    level1: {
                        structure: "DNA double helix",
                        width: "2 nm",
                        compaction: "1×"
                    },
                    level2: {
                        structure: "Nucleosomes (beads-on-string)",
                        width: "11 nm",
                        compaction: "~6×"
                    },
                    level3: {
                        structure: "30-nm fiber (solenoid)",
                        mechanism: "H1 helps nucleosomes pack into helical structure",
                        compaction: "~40×"
                    },
                    level4: {
                        structure: "Higher-order loops",
                        mechanism: "30-nm fiber forms loops attached to scaffold",
                        compaction: "~1000×"
                    },
                    level5: {
                        structure: "Condensed chromosome (mitosis)",
                        mechanism: "Further compaction of loops",
                        compaction: "~10,000×",
                        result: "Chromosome visible under light microscope"
                    }
                },
                euchromatinVsHeterochromatin: {
                    euchromatin: {
                        structure: "Loosely packed, more accessible",
                        transcription: "Transcriptionally active",
                        staining: "Lightly stained",
                        modifications: "Acetylated histones (open conformation)",
                        location: "Interior of nucleus",
                        replication: "Replicates early in S phase"
                    },
                    heterochromatin: {
                        structure: "Tightly packed, less accessible",
                        transcription: "Transcriptionally inactive",
                        staining: "Darkly stained",
                        modifications: "Methylated histones (closed conformation)",
                        types: {
                            constitutive: "Always condensed (centromeres, telomeres)",
                            facultative: "Conditionally condensed (X chromosome inactivation)"
                        },
                        replication: "Replicates late in S phase"
                    }
                },
                histoneModifications: {
                    acetylation: {
                        effect: "Reduces positive charge, loosens DNA binding",
                        result: "Transcriptional activation",
                        enzyme: "Histone acetyltransferases (HATs)",
                        removal: "Histone deacetylases (HDACs)",
                        target: "Lysine residues on histone tails"
                    },
                    methylation: {
                        effect: "Can activate or repress depending on site",
                        examples: {
                            H3K4me3: "Trimethylation of lysine 4 on H3 - activation",
                            H3K9me3: "Trimethylation of lysine 9 on H3 - repression",
                            H3K27me3: "Trimethylation of lysine 27 on H3 - repression"
                        },
                        enzyme: "Histone methyltransferases",
                        stability: "More stable than acetylation"
                    },
                    phosphorylation: {
                        effect: "Often associated with transcription and DNA damage",
                        example: "H2AX phosphorylation at DNA breaks",
                        target: "Serine residues"
                    },
                    ubiquitination: {
                        effect: "Can activate or repress",
                        size: "Large modification (76 amino acid protein)",
                        target: "Lysine residues"
                    }
                },
                chromosomeStructure: {
                    mitotic: {
                        appearance: "X-shaped (two sister chromatids)",
                        parts: {
                            chromatid: "One copy of replicated chromosome",
                            centromere: "Constriction point where kinetochore attaches",
                            kinetochore: "Protein complex for spindle fiber attachment",
                            telomere: "Protective caps at chromosome ends",
                            pArm: "Short arm (petit)",
                            qArm: "Long arm"
                        },
                        visibility: "Only during cell division (metaphase)"
                    },
                    interphase: {
                        appearance: "Decondensed chromatin network",
                        organization: "Chromosome territories (non-random positioning)",
                        transcription: "Most gene expression occurs"
                    }
                },
                applications: [
                    "Understanding epigenetic regulation",
                    "Cancer research (chromatin changes in tumors)",
                    "Developmental biology (chromatin remodeling)",
                    "Drug development (HDAC inhibitors)",
                    "Chromosome disorders (structural abnormalities)",
                    "X-chromosome inactivation studies"
                ]
            },

            genetic_code: {
                title: "The Genetic Code: From DNA to Protein",
                concepts: [
                    "The genetic code is the set of rules for translating DNA/RNA sequence to amino acids",
                    "Codons are three-nucleotide sequences that specify amino acids",
                    "64 possible codons specify 20 amino acids plus start/stop signals",
                    "The code is degenerate (redundant), unambiguous, and nearly universal",
                    "Start codon (AUG) codes for methionine; three stop codons (UAA, UAG, UGA)"
                ],
                theory: "The genetic code is the language of life - it translates the 4-letter nucleotide alphabet into the 20-letter amino acid alphabet. Understanding the genetic code is essential for understanding how genes specify proteins and how mutations affect protein function.",
                keyDefinitions: {
                    "Genetic Code": "Set of rules by which nucleotide triplets (codons) specify amino acids",
                    "Codon": "Three-nucleotide sequence in mRNA that specifies an amino acid or stop signal",
                    "Anticodon": "Three-nucleotide sequence on tRNA complementary to mRNA codon",
                    "Start Codon": "AUG - initiates translation and codes for methionine",
                    "Stop Codon": "UAA (ochre), UAG (amber), UGA (opal) - terminate translation",
                    "Reading Frame": "Grouping of nucleotides into triplets for translation",
                    "Open Reading Frame (ORF)": "Sequence from start to stop codon without interruption",
                    "Degeneracy": "Multiple codons can code for same amino acid"
                },
                codeProperties: {
                    triplet: {
                        reasoning: "4 nucleotides, 20 amino acids",
                        calculation: "4¹ = 4 (insufficient), 4² = 16 (insufficient), 4³ = 64 (sufficient)",
                        evidence: "Crick and Brenner experiments with frameshift mutations (1961)"
                    },
                    degenerate: {
                        definition: "More than one codon for most amino acids",
                        example: "Leucine: UUA, UUG, CUU, CUC, CUA, CUG (6 codons)",
                        wobblePosition: "Third position often variable",
                        advantage: "Reduces impact of mutations"
                    },
                    unambiguous: {
                        definition: "Each codon specifies only one amino acid",
                        contrast: "One codon never codes for two different amino acids",
                        importance: "Ensures accurate translation"
                    },
                    nearlyUniversal: {
                        definition: "Same code in almost all organisms",
                        exceptions: {
                            mitochondria: "Different code (e.g., UGA codes for Trp, not stop)",
                            ciliate: "UAA and UAG code for glutamine",
                            significance: "Supports common evolutionary origin"
                        }
                    },
                    nonOverlapping: {
                        definition: "Each nucleotide belongs to only one codon",
                        example: "AUGCCCGGG → AUG-CCC-GGG (not overlapping)",
                        consequence: "Reading frame is crucial"
                    },
                    commaless: {
                        definition: "No gaps or punctuation between codons",
                        readingFrame: "Determined by start codon, proceeds in triplets",
                        frameshiftEffect: "Insertion/deletion shifts reading frame"
                    }
                },
                codonTable: {
                    startCodon: {
                        sequence: "AUG",
                        aminoAcid: "Methionine (Met, M)",
                        function: "Initiates translation",
                        dual: "Also codes for Met in middle of sequence",
                        recognition: "Shine-Dalgarno (prokaryotes) or Kozak (eukaryotes) sequence upstream"
                    },
                    stopCodons: {
                        UAA: "Ochre",
                        UAG: "Amber",
                        UGA: "Opal",
                        function: "Terminate translation",
                        recognition: "Release factors bind instead of tRNA"
                    },
                    wobbleBasePairing: {
                        position: "Third codon position (3' end of codon, 5' end of anticodon)",
                        rules: {
                            G: "Can pair with U or C",
                            U: "Can pair with A or G",
                            I: "Inosine (modified base in tRNA) can pair with U, C, or A"
                        },
                        consequence: "One tRNA can recognize multiple codons",
                        example: "tRNA with anticodon 3'-AAG-5' recognizes UUU and UUC (both code for Phe)"
                    },
                    synonymousCodons: {
                        definition: "Different codons that code for same amino acid",
                        pattern: "Often differ only in third position",
                        example: "GCU, GCC, GCA, GCG all code for Alanine",
                        advantage: "Silent mutations at wobble position"
                    }
                },
                mutationEffects: {
                    silentMutation: {
                        definition: "Nucleotide change that doesn't change amino acid",
                        example: "GAA → GAG (both code for Glu)",
                        frequency: "Common at wobble position",
                        effect: "Usually no phenotypic change"
                    },
                    missenseMutation: {
                        definition: "Nucleotide change that changes amino acid",
                        example: "GAA (Glu) → GUA (Val) - sickle cell mutation",
                        effect: "Depends on amino acid properties and location",
                        types: {
                            conservative: "Similar amino acids (Ile → Val)",
                            nonconservative: "Different properties (Glu → Val)"
                        }
                    },
                    nonsenseMutation: {
                        definition: "Nucleotide change creates stop codon",
                        example: "UAC (Tyr) → UAA (stop)",
                        effect: "Truncated protein, usually nonfunctional",
                        severity: "Usually severe, loss of function"
                    },
                    frameshiftMutation: {
                        cause: "Insertion or deletion of nucleotides (not multiple of 3)",
                        effect: "Changes reading frame downstream of mutation",
                        consequence: "Completely different amino acid sequence, often stop codon",
                        severity: "Usually severe"
                    }
                },
                applications: [
                    "Predicting protein sequence from DNA sequence",
                    "Understanding disease-causing mutations",
                    "Designing synthetic genes for biotechnology",
                    "Genetic code expansion (non-natural amino acids)",
                    "Evolutionary studies (codon usage bias)",
                    "Developing therapies for nonsense mutations (stop codon readthrough)"
                ]
            },

            mutations: {
                title: "DNA Mutations: Types, Causes, and Consequences",
                concepts: [
                    "Mutations are changes in DNA sequence",
                    "Can be spontaneous or induced by mutagens",
                    "Point mutations affect single nucleotides",
                    "Chromosomal mutations affect large DNA segments",
                    "Mutations can be beneficial, neutral, or harmful",
                    "Some mutations are inherited, others are somatic"
                ],
                theory: "Mutations are the ultimate source of genetic variation. While many mutations are harmful, they also drive evolution and adaptation. Understanding mutations is crucial for medicine, agriculture, and evolutionary biology.",
                keyDefinitions: {
                    "Mutation": "Permanent change in DNA sequence",
                    "Germline Mutation": "Mutation in gametes, can be inherited",
                    "Somatic Mutation": "Mutation in body cells, not inherited",
                    "Spontaneous Mutation": "Occurs naturally without external influence",
                    "Induced Mutation": "Caused by external factors (mutagens)",
                    "Forward Mutation": "Wild-type → mutant",
                    "Reverse Mutation": "Mutant → wild-type (reversion)",
                    "Suppressor Mutation": "Second mutation that reverses effect of first"
                },
                pointMutations: {
                    substitution: {
                        transition: {
                            definition: "Purine → purine or pyrimidine → pyrimidine",
                            examples: "A ↔ G, C ↔ T",
                            frequency: "More common than transversions"
                        },
                        transversion: {
                            definition: "Purine → pyrimidine or vice versa",
                            examples: "A or G ↔ T or C",
                            frequency: "Less common"
                        }
                    },
                    effects: {
                        silent: {
                            description: "No amino acid change due to degeneracy",
                            example: "GCU → GCC (both Ala)",
                            frequency: "~25% of random substitutions",
                            phenotype: "Usually none (though may affect regulation)"
                        },
                        missense: {
                            description: "Different amino acid encoded",
                            example: "GAA → GUA (Glu → Val, sickle cell)",
                            effect: "Depends on amino acid change and location",
                            categories: {
                                conservative: "Similar amino acid (small effect)",
                                nonconservative: "Very different amino acid (large effect)"
                            }
                        },
                        nonsense: {
                            description: "Creates premature stop codon",
                            example: "CAG → UAG (Gln → stop)",
                            effect: "Truncated, usually nonfunctional protein",
                            severity: "Often severe"
                        }
                    }
                },
                insertionDeletion: {
                    inFrame: {
                        definition: "Insertion/deletion of 3n nucleotides",
                        effect: "Adds/removes amino acids without frameshift",
                        example: "ΔF508 in cystic fibrosis (3 bp deletion)",
                        severity: "Variable, can be mild to severe"
                    },
                    frameshift: {
                        definition: "Insertion/deletion not multiple of 3",
                        effect: "Changes reading frame downstream",
                        consequence: "Different amino acids, often stop codon",
                        example: "Tay-Sachs 4 bp insertion",
                        severity: "Usually severe"
                    }
                },
                chromosomalMutations: {
                    deletion: {
                        description: "Loss of chromosome segment",
                        size: "Can be large (visible) or small (microdeletion)",
                        example: "Cri-du-chat syndrome (5p deletion)",
                        effect: "Loss of genes, usually harmful"
                    },
                    duplication: {
                        description: "Segment copied, extra copy present",
                        mechanism: "Unequal crossing over",
                        example: "Charcot-Marie-Tooth disease (PMP22 duplication)",
                        effect: "Gene dosage imbalance"
                    },
                    inversion: {
                        description: "Segment reversed within chromosome",
                        types: {
                            pericentric: "Includes centromere",
                            paracentric: "Doesn't include centromere"
                        },
                        effect: "Often no phenotype unless breaks gene or affects regulation",
                        meiosis: "Can cause problems during crossing over"
                    },
                    translocation: {
                        description: "Segment moved to different chromosome",
                        types: {
                            reciprocal: "Two-way exchange between chromosomes",
                            robertsonian: "Fusion of two chromosomes at centromere"
                        },
                        example: "Philadelphia chromosome in CML (9-22 translocation)",
                        effect: "Can create fusion genes, cause cancer"
                    }
                },
                mutationCauses: {
                    spontaneous: {
                        depurination: "Loss of purine base (~10,000 per cell per day)",
                        deamination: "Cytosine → uracil, adenine → hypoxanthine",
                        replicationErrors: "DNA polymerase mistakes (~1 in 10⁷ after proofreading)",
                        slippage: "In repetitive sequences (microsatellites)"
                    },
                    induced: {
                        physical: {
                            UV: "Causes thymine dimers",
                            ionizing: "X-rays, gamma rays - cause breaks and free radicals",
                            heat: "Increases depurination and deamination rates"
                        },
                        chemical: {
                            alkylating: "EMS, MMS - add alkyl groups to bases",
                            intercalating: "Ethidium bromide - inserts between bases, causes frameshift",
                            baseAnalogs: "5-bromouracil - incorporated as T, pairs with G",
                            oxidative: "ROS - cause various lesions including 8-oxo-G"
                        },
                        biological: {
                            viruses: "Can insert into genome",
                            transposons: "Mobile DNA elements"
                        }
                    }
                },
                applications: [
                    "Understanding genetic diseases",
                    "Cancer biology (somatic mutations in oncogenes/tumor suppressors)",
                    "Evolutionary studies (molecular clocks)",
                    "Mutagenesis for research (creating model organisms)",
                    "Genetic testing and counseling",
                    "Precision medicine (targeted therapies for specific mutations)"
                ]
            }
        };
    }

    initializeDNAExperiments() {
        this.dnaExperiments = {
            // ========================================
            // EXPERIMENT 1: GRIFFITH'S TRANSFORMATION
            // ========================================
            
            griffith_transformation: {
                name: "Griffith's Transformation Experiment - DNA as Genetic Material",
                relatedTopics: ['dna_structure', 'gene_expression'],
                category: 'classical_genetics',
                historicalBackground: {
                    scientist: "Frederick Griffith",
                    year: "1928",
                    discovery: "Bacterial transformation - first evidence that DNA is genetic material",
                    context: "Before this, it wasn't known what molecule carried genetic information",
                    organism: "Streptococcus pneumoniae (bacterium causing pneumonia)",
                    significance: "Laid foundation for molecular biology; showed genetic material could be transferred",
                    nobelConnection: "Inspired Avery, MacLeod, McCarty (1944) to identify DNA as transforming principle",
                    quote: "The dead R cells had been transformed by the heat-killed S cells",
                    modernImportance: "Basis for understanding genetic engineering, bacterial gene transfer"
                },
                bacterialStrains: {
                    SStrain: {
                        name: "Smooth strain",
                        appearance: "Smooth, shiny colonies",
                        capsule: "Polysaccharide capsule present",
                        virulence: "Virulent (causes disease)",
                        immuneResponse: "Capsule protects from immune system",
                        mouseOutcome: "Kills mice"
                    },
                    RStrain: {
                        name: "Rough strain",
                        appearance: "Rough, irregular colonies",
                        capsule: "No capsule",
                        virulence: "Non-virulent (harmless)",
                        immuneResponse: "Destroyed by immune system",
                        mouseOutcome: "Mice survive"
                    }
                },
                classicExperiment: {
                    title: "Griffith's Four-Part Transformation Experiment (1928)",
                    hypothesis: "If genetic material can be transferred, a non-virulent strain might become virulent",
                    
                    experiment1: {
                        procedure: "Inject mice with live S strain (virulent)",
                        result: "Mice die",
                        blood: "Live S strain bacteria recovered",
                        conclusion: "S strain is pathogenic due to capsule"
                    },
                    
                    experiment2: {
                        procedure: "Inject mice with live R strain (non-virulent)",
                        result: "Mice survive",
                        blood: "Live R strain bacteria recovered",
                        conclusion: "R strain is harmless without capsule"
                    },
                    
                    experiment3: {
                        procedure: "Inject mice with heat-killed S strain",
                        result: "Mice survive",
                        blood: "No bacteria recovered",
                        conclusion: "Heat-killed S strain is harmless"
                    },
                    
                    experiment4: {
                        procedure: "Inject mice with heat-killed S strain + live R strain",
                        prediction: "Mice should survive (neither component alone is harmful)",
                        actualResult: "Mice die!",
                        blood: "Live S strain bacteria recovered (with capsule!)",
                        shock: "This was completely unexpected",
                        conclusion: "Something from dead S cells 'transformed' R cells into S cells",
                        termCoined: "Transformation - genetic information transfer"
                    },
                    
                    keyObservation: "The transformation was permanent and heritable - transformed bacteria remained S strain through generations",
                    
                    question: "What was the 'transforming principle' - what molecule carried genetic information?",
                    
                    griffithsInterpretation: {
                        hypothesis: "Some chemical component from dead S cells entered R cells",
                        transformingPrinciple: "Unknown molecule could transfer genetic trait (capsule production)",
                        limitations: "Griffith didn't identify what molecule caused transformation"
                    }
                },
                
                averyMacLeodMcCarty: {
                    scientists: "Oswald Avery, Colin MacLeod, Maclyn McCarty",
                    year: "1944",
                    goal: "Identify Griffith's 'transforming principle'",
                    approach: "Systematically destroy different molecules and test transformation",
                    
                    experiments: {
                        proteinDestruction: {
                            treatment: "Add protease enzymes to kill S cell extract",
                            result: "Transformation still occurs",
                            conclusion: "Proteins are NOT the transforming principle"
                        },
                        RNADestruction: {
                            treatment: "Add RNase to destroy RNA",
                            result: "Transformation still occurs",
                            conclusion: "RNA is NOT the transforming principle"
                        },
                        DNADestruction: {
                            treatment: "Add DNase to destroy DNA",
                            result: "Transformation does NOT occur!",
                            conclusion: "DNA IS the transforming principle"
                        }
                    },
                    
                    conclusion: "DNA is the molecule that carries genetic information",
                    significance: "First clear evidence that DNA (not protein) is genetic material",
                    reception: "Initially met with skepticism (many thought proteins carried genes)",
                    vindication: "Later confirmed by Hershey-Chase experiment (1952) using bacteriophages"
                },
                
                modernLabExperiment: {
                    title: "Bacterial Transformation Lab - Demonstrating Griffith's Principle",
                    modernVersion: "Use E. coli and antibiotic resistance genes instead of S. pneumoniae",
                    purpose: "Demonstrate DNA uptake and gene expression in bacteria",
                    safetyNote: "Modern version uses non-pathogenic bacteria and safe conditions",
                    
                    materials: [
                        "E. coli bacteria (competent cells - ready to take up DNA)",
                        "Plasmid DNA with antibiotic resistance gene (e.g., ampicillin resistance)",
                        "LB broth (growth medium)",
                        "LB agar plates with ampicillin",
                        "LB agar plates without ampicillin (control)",
                        "Calcium chloride solution (makes cells competent)",
                        "Ice bath",
                        "42°C water bath (heat shock)",
                        "Sterile pipettes and tubes",
                        "Incubator (37°C)",
                        "Spreader or glass beads for plating"
                    ],
                    
                    procedure: [
                        "PREPARATION OF COMPETENT CELLS:",
                        "Grow E. coli in LB broth overnight at 37°C",
                        "Collect cells by centrifugation",
                        "Resuspend in cold CaCl₂ solution (makes membranes permeable)",
                        "Incubate on ice for 30 minutes",
                        "Cells are now 'competent' - ready to take up DNA",
                        "",
                        "TRANSFORMATION:",
                        "Divide competent cells into 2 tubes:",
                        "  Tube 1 (Experimental): Add plasmid DNA (contains amp resistance gene)",
                        "  Tube 2 (Control): Add water (no DNA)",
                        "Incubate both on ice for 20-30 minutes (DNA binds to cell surface)",
                        "Heat shock: Place tubes in 42°C water bath for 60-90 seconds",
                        "  (Heat shock creates pores in membrane, allows DNA entry)",
                        "Immediately return to ice for 2 minutes",
                        "Add LB broth, incubate at 37°C for 45 minutes",
                        "  (Allows cells to recover and express resistance gene)",
                        "",
                        "SELECTION:",
                        "Plate transformed cells (Tube 1) on LB + ampicillin plate",
                        "Plate control cells (Tube 2) on LB + ampicillin plate",
                        "Plate both on LB plate without ampicillin (growth control)",
                        "Incubate overnight at 37°C",
                        "Count colonies next day"
                    ],
                    
                    expectedResults: {
                        experimentalAmpPlate: "Many colonies (transformed bacteria resistant to ampicillin)",
                        controlAmpPlate: "No colonies (untransformed bacteria killed by ampicillin)",
                        LBPlate: "Many colonies on both (bacteria grow without antibiotic)",
                        interpretation: "Only bacteria that took up plasmid DNA can grow on ampicillin"
                    },
                    
                    calculations: {
                        transformationEfficiency: "Number of colonies / μg DNA used",
                        typical: "10⁶ - 10⁸ colonies per μg DNA",
                        formula: "Efficiency = (colonies on plate × dilution factor) / (ng DNA plated × plate volume/total volume)"
                    },
                    
                    controls: {
                        positiveControl: "Known transformable DNA (should give colonies)",
                        negativeControl: "No DNA (should give no colonies on selective plate)",
                        viabilityControl: "Plate on LB without antibiotic (shows cells are alive)"
                    },
                    
                    analysis: [
                        "Compare colony counts between experimental and control plates",
                        "Calculate transformation efficiency",
                        "Only cells that took up plasmid can survive on ampicillin plates",
                        "Demonstrates DNA uptake and gene expression (transformation)",
                        "Parallels Griffith's observation that genetic material can be transferred"
                    ]
                },
                
                molecularMechanism: {
                    DNAuptake: "DNA binds to cell surface, enters through membrane pores",
                    integration: {
                        plasmid: "Circular DNA remains separate from chromosome, replicates independently",
                        chromosomal: "Linear DNA can integrate into chromosome via recombination"
                    },
                    expression: "Bacterial transcription/translation machinery expresses new gene",
                    selection: "Antibiotic kills non-transformed cells, only transformed survive"
                },
                
                realWorldApplications: [
                    "Genetic engineering: inserting genes into bacteria (insulin production, etc.)",
                    "Cloning: creating recombinant DNA",
                    "Studying gene function: introducing/deleting genes",
                    "Natural transformation in environment: horizontal gene transfer in nature",
                    "Antibiotic resistance spread: transformation can transfer resistance genes between bacteria",
                    "Biotechnology: producing proteins, enzymes, pharmaceuticals"
                ],
                
                connectionToGriffith: [
                    "Both demonstrate DNA as genetic material",
                    "Both show genetic information can be transferred between cells",
                    "Modern version uses same principle but safer organisms",
                    "Griffith's work inspired all modern genetic engineering"
                ],
                
                extensions: [
                    "Transform with plasmids carrying different genes (GFP for fluorescence)",
                    "Test different competency methods (electroporation vs chemical)",
                    "Investigate factors affecting efficiency (DNA concentration, heat shock time)",
                    "Try different bacterial strains",
                    "Perform Southern blot to confirm DNA integration"
                ]
            },

            // ========================================
            // EXPERIMENT 2: HERSHEY-CHASE EXPERIMENT
            // ========================================
            
            hershey_chase_bacteriophage: {
                name: "Hershey-Chase Experiment - Confirming DNA as Genetic Material",
                relatedTopics: ['dna_structure', 'dna_replication'],
                category: 'classical_genetics',
                historicalBackground: {
                    scientists: "Alfred Hershey and Martha Chase",
                    year: "1952",
                    discovery: "Definitive proof that DNA (not protein) is genetic material",
                    context: "After Avery-MacLeod-McCarty, still skepticism that proteins carried genes",
                    organism: "Bacteriophage T2 (virus infecting E. coli)",
                    technique: "Radioactive labeling with ³²P (DNA) and ³⁵S (protein)",
                    nobelPrize: "1969 Nobel Prize in Physiology/Medicine (Hershey; Chase did not share)",
                    nickname: "The 'Blender Experiment' (used Waring blender to separate components)",
                    significance: "Ended debate about nature of genetic material",
                    quote: "When the phage DNA enters the bacterium, the protein coat is left outside"
                },
                
                bacteriophageStructure: {
                    head: {
                        contents: "DNA (genetic material)",
                        shape: "Icosahedral",
                        coating: "Protein capsid"
                    },
                    tail: {
                        structure: "Protein sheath and tail fibers",
                        function: "Binds to bacterial surface, injects DNA"
                    },
                    keyPoint: "Phage is just DNA wrapped in protein coat",
                    infectionCycle: [
                        "Phage attaches to bacterial surface via tail fibers",
                        "DNA is injected into bacterium",
                        "Protein coat remains outside",
                        "Phage DNA directs synthesis of new phages using bacterial machinery",
                        "Bacteria lyses, releasing ~100 new phages"
                    ]
                },
                
                experimentalRationale: {
                    question: "What enters the bacterium during infection - DNA or protein?",
                    approach: "Label DNA and protein separately, track which enters cell",
                    labelingStrategy: {
                        DNA: "Use ³²P (radioactive phosphorus) - DNA has phosphate groups, proteins don't",
                        protein: "Use ³⁵S (radioactive sulfur) - proteins have sulfur (in Cys, Met), DNA doesn't"
                    },
                    logic: "Whichever molecule enters the cell is the genetic material",
                    separation: "Use centrifugation to separate bacteria from phage coats after infection"
                },
                
                classicExperiment: {
                    title: "Hershey-Chase Radioactive Labeling Experiment (1952)",
                    
                    part1_DNAlabeling: {
                        procedure: [
                            "Grow E. coli in medium with ³²P (radioactive phosphorus)",
                            "Infect bacteria with T2 phage",
                            "Phage replicates using ³²P from medium",
                            "New phages have DNA labeled with ³²P",
                            "Harvest ³²P-labeled phages"
                        ],
                        result: "Phages with radioactive DNA (³²P in phosphate backbone)"
                    },
                    
                    part2_proteinLabeling: {
                        procedure: [
                            "Grow E. coli in medium with ³⁵S (radioactive sulfur)",
                            "Infect bacteria with T2 phage",
                            "Phage replicates using ³⁵S from medium",
                            "New phages have protein coat labeled with ³⁵S",
                            "Harvest ³⁵S-labeled phages"
                        ],
                        result: "Phages with radioactive protein coat (³⁵S in cysteine/methionine)"
                    },
                    
                    part3_infection32P: {
                        procedure: [
                            "Infect unlabeled E. coli with ³²P-labeled phages (radioactive DNA)",
                            "Allow phages to attach and inject genetic material (10 minutes)",
                            "Agitate in Waring blender (detaches empty phage coats from bacteria)",
                            "Centrifuge: bacteria pellet at bottom, phage coats in supernatant",
                            "Measure radioactivity in pellet (bacteria) and supernatant (phage coats)"
                        ],
                        results: {
                            pellet: "³²P radioactivity found in bacterial pellet",
                            supernatant: "Little ³²P in supernatant (phage coats)",
                            progeny: "New phages produced contain ³²P (inherited from parent DNA)"
                        },
                        conclusion: "DNA (³²P) entered bacteria"
                    },
                    
                    part4_infection35S: {
                        procedure: [
                            "Infect unlabeled E. coli with ³⁵S-labeled phages (radioactive protein)",
                            "Allow phages to attach and inject genetic material",
                            "Agitate in blender",
                            "Centrifuge",
                            "Measure radioactivity"
                        ],
                        results: {
                            pellet: "Little ³⁵S in bacterial pellet",
                            supernatant: "³⁵S radioactivity found in supernatant (phage coats)",
                            progeny: "New phages have NO ³⁵S (not inherited)"
                        },
                        conclusion: "Protein (³⁵S) stayed outside bacteria, was not genetic material"
                    },
                    
                    overallConclusion: "DNA is the genetic material that enters bacteria and directs synthesis of new phages. Protein coat remains outside and is not inherited.",
                    
                    keyEvidence: [
                        "³²P (DNA) found inside bacteria after infection",
                        "³⁵S (protein) found in phage ghosts outside bacteria",
                        "Progeny phages contain ³²P, demonstrating DNA inheritance",
                        "Progeny phages do NOT contain ³⁵S, showing protein not inherited"
                    ]
                },
                
                modernLabSimulation: {
                    title: "Simulated Hershey-Chase Experiment (Modern Teaching Lab)",
                    note: "Cannot use radioactive isotopes in teaching lab - use simulation or non-radioactive tracers",
                    
                    option1_simulation: {
                        materials: [
                            "Beads representing phage (two colors for DNA and protein)",
                            "Containers representing bacteria",
                            "Filter or strainer representing blender separation"
                        ],
                        procedure: [
                            "Students model phage infection using colored beads",
                            "DNA beads enter container (bacteria)",
                            "Protein beads stay outside",
                            "Simulate blender separation",
                            "Count beads in each fraction"
                        ],
                        learning: "Conceptual understanding of experiment design and logic"
                    },
                    
                    option2_fluorescence: {
                        modernVersion: "Use fluorescently labeled DNA and protein",
                        materials: [
                            "Bacteriophage",
                            "DNA-binding fluorescent dye (e.g., DAPI - binds DNA)",
                            "Protein-binding fluorescent dye (different color)",
                            "Fluorescence microscope or spectrophotometer"
                        ],
                        procedure: [
                            "Label phage DNA with DNA-specific dye",
                            "Label phage protein with protein-specific dye",
                            "Infect bacteria",
                            "Separate bacteria from phage coats (centrifugation or filtration)",
                            "Measure fluorescence in each fraction"
                        ],
                        results: "DNA fluorescence in bacteria, protein fluorescence in supernatant"
                    },
                    
                    option3_PCR: {
                        modernMolecular: "Use PCR to detect phage DNA in bacteria",
                        procedure: [
                            "Infect bacteria with phage",
                            "Separate bacteria from phage coats",
                            "Extract DNA from bacterial pellet and supernatant",
                            "PCR with primers specific to phage DNA",
                            "Gel electrophoresis to detect PCR product"
                        ],
                        results: "Phage DNA detected in bacterial fraction, not in supernatant"
                    }
                },
                
                dataAnalysis: {
                    originalData: {
                        DNAlabeling: "~70% of ³²P found in bacterial pellet, ~30% in supernatant",
                        proteinLabeling: "~80% of ³⁵S found in supernatant, ~20% in pellet",
                        interpretation: "Not perfect separation (some phage coats stick to bacteria), but clear trend"
                    },
                    statisticalSignificance: "Difference between ³²P and ³⁵S distribution highly significant",
                    controls: {
                        uninfected: "Bacteria without phage - no radioactivity",
                        noBlending: "Without blender step - most radioactivity in pellet (phages attached to bacteria)",
                        longerBlending: "Extended blending detaches more phage coats"
                    }
                },
                
                experimentalDesign: {
                    whyPhage: [
                        "Simple organism (only DNA and protein)",
                        "Easy to grow in large quantities",
                        "Clear separation between DNA injection and protein coat",
                        "Fast replication (results in hours)"
                    ],
                    whyIsotopes: [
                        "Specific labeling (³²P only in DNA, ³⁵S only in protein)",
                        "Sensitive detection",
                        "Quantitative measurement",
                        "No other element could distinguish DNA from protein so clearly"
                    ],
                    whyBlender: [
                        "Needed to separate phage coats from bacteria",
                        "Gentle enough not to lyse bacteria",
                        "Waring blender was household appliance (available)",
                        "Became iconic part of experiment"
                    ]
                },
                
                historicalContext: {
                    beforeHersheyChase: "Many scientists thought proteins carried genetic info (more complex, diverse)",
                    skepticism: "Avery-MacLeod-McCarty results questioned (proteins might contaminate DNA prep)",
                    HersheyChaseclarified: "Phage provides clean separation - DNA goes in, protein stays out",
                    aftermath: "Ended debate, paved way for Watson-Crick structure (1953)",
                    impact: "Molecular biology revolution began"
                },
                
                realWorldConnections: [
                    "Understanding viral infections (DNA or RNA viruses)",
                    "Gene therapy vectors (modified viruses deliver DNA)",
                    "Phage therapy (using bacteriophages to treat infections)",
                    "Biotechnology (phage display for antibody selection)",
                    "All modern genetic engineering depends on knowing DNA is genetic material"
                ],
                
                commonStudentMisconceptions: [
                    "Thinking protein entered bacteria (it didn't - only DNA)",
                    "Confusing ³²P with ³⁵S labeling (which labels what)",
                    "Not understanding why blender was needed (separates components)",
                    "Thinking 100% perfect separation (some cross-contamination is normal)"
                ],
                
                extensions: [
                    "Research modern uses of bacteriophages (phage therapy)",
                    "Compare to Avery-MacLeod-McCarty experiment (different approach, same conclusion)",
                    "Investigate RNA viruses (genetic material is RNA, not DNA)",
                    "Study viral life cycles (lytic vs lysogenic)",
                    "Explore historical development of molecular biology"
                ]
            },

            // ========================================
            // EXPERIMENT 3: MESELSON-STAHL EXPERIMENT
            // ========================================
            
            meselson_stahl_replication: {
                name: "Meselson-Stahl Experiment - Semiconservative DNA Replication",
                relatedTopics: ['dna_structure', 'dna_replication'],
                category: 'molecular_biology',
                historicalBackground: {
                    scientists: "Matthew Meselson and Franklin Stahl",
                    year: "1958",
                    discovery: "DNA replicates semiconservatively",
                    context: "Watson-Crick model (1953) suggested semiconservative replication, but needed experimental proof",
                    technique: "Density gradient centrifugation with heavy nitrogen isotope (¹⁵N)",
                    significance: "Provided definitive proof of semiconservative replication mechanism",
                    acclaim: "Called 'the most beautiful experiment in biology' (John Cairns)",
                    impact: "Confirmed Watson-Crick model, explained how genetic info is faithfully copied",
                    elegance: "Simple design, clear results, unambiguous interpretation"
                },
                
                threeModels: {
                    background: "After Watson-Crick (1953), three models proposed for DNA replication",
                    
                    semiconservative: {
                        description: "Each new DNA has one old strand (template) and one new strand",
                        mechanism: "Strands separate, each serves as template for new complementary strand",
                        prediction: "After 1 replication: all DNA is hybrid (one heavy, one light strand)",
                        proposedBy: "Watson and Crick (1953)",
                        analogy: "Like unzipping a zipper and building new sides on each old side"
                    },
                    
                    conservative: {
                        description: "Original DNA stays intact, entirely new copy made",
                        mechanism: "Somehow copy entire double helix, keep original unchanged",
                        prediction: "After 1 replication: half DNA is all-heavy (original), half is all-light (new)",
                        analogy: "Like photocopying - original document unchanged"
                    },
                    
                    dispersive: {
                        description: "DNA breaks into fragments, reassembles with old and new mixed throughout",
                        mechanism: "Fragmentation and reunion, mixing old and new DNA throughout molecule",
                        prediction: "After 1 replication: all DNA is intermediate density (mix of heavy and light)",
                        analogy: "Like cutting and pasting pieces of old and new text randomly"
                    },
                    
                    challenge: "How to distinguish experimentally between these models?"
                },
                
                experimentalStrategy: {
                    key: "Label DNA with heavy nitrogen (¹⁵N), then switch to normal nitrogen (¹⁴N)",
                    detection: "Separate DNA by density using cesium chloride gradient ultracentrifugation",
                    logic: "Heavy DNA (¹⁵N) sinks farther than light DNA (¹⁴N) in density gradient",
                    organism: "E. coli (fast replication, easy to grow)",
                    
                    nitrogenIsotopes: {
                        nitrogen14: {
                            abundance: "99.6% natural nitrogen",
                            mass: "14 amu",
                            effect: "Normal density DNA"
                        },
                        nitrogen15: {
                            abundance: "0.4% natural nitrogen (rare, stable isotope)",
                            mass: "15 amu",
                            effect: "Denser DNA (heavier)",
                            incorporation: "Bacteria grown in ¹⁵NH₄Cl incorporate ¹⁵N into DNA bases"
                        }
                    },
                    
                    densityGradientCentrifugation: {
                        principle: "Molecules separate by density in centrifugal field",
                        medium: "Cesium chloride (CsCl) solution",
                        process: [
                            "CsCl forms density gradient during ultracentrifugation",
                            "DNA moves to position where its density matches CsCl density",
                            "Heavy DNA (¹⁵N) settles lower, light DNA (¹⁴N) higher",
                            "Hybrid DNA (¹⁵N/¹⁴N) settles in between"
                        ],
                        detection: "UV absorption at 260 nm (DNA absorbs UV)",
                        result: "Distinct bands at different positions based on density"
                    }
                },
                
                classicExperiment: {
                    title: "Meselson-Stahl Semiconservative Replication Experiment (1958)",
                    
                    phase1_heavyLabeling: {
                        procedure: [
                            "Grow E. coli for many generations in medium with ¹⁵NH₄Cl (heavy nitrogen)",
                            "All nitrogen in DNA becomes ¹⁵N (heavy)",
                            "Extract DNA, run in CsCl density gradient",
                            "DNA settles at heavy position (¹⁵N DNA)"
                        ],
                        result: "All DNA is heavy (¹⁵N/¹⁵N)",
                        purpose: "Establish starting point - all DNA labeled with ¹⁵N",
                        generations: "~14 generations to ensure complete ¹⁵N labeling"
                    },
                    
                    phase2_transferToLight: {
                        procedure: [
                            "Transfer bacteria to medium with ¹⁴NH₄Cl (normal nitrogen)",
                            "Allow DNA to replicate once (one cell division)",
                            "Extract DNA, run in CsCl gradient"
                        ],
                        predictions: {
                            semiconservative: "All DNA at intermediate position (hybrid ¹⁵N/¹⁴N)",
                            conservative: "Half DNA at heavy position (¹⁵N/¹⁵N), half at light (¹⁴N/¹⁴N)",
                            dispersive: "All DNA at intermediate position (mixture throughout)"
                        },
                        actualResult: "ALL DNA at intermediate position (hybrid)",
                        interpretation: "Rules out conservative model. Consistent with semiconservative or dispersive."
                    },
                    
                    phase3_secondReplication: {
                        procedure: [
                            "Allow bacteria to replicate again (second generation in ¹⁴N medium)",
                            "Extract DNA, run in CsCl gradient"
                        ],
                        predictions: {
                            semiconservative: "50% hybrid (¹⁵N/¹⁴N), 50% light (¹⁴N/¹⁴N)",
                            dispersive: "All DNA at intermediate position (but lighter than generation 1)"
                        },
                        actualResult: "50% hybrid band, 50% light band",
                        interpretation: "Proves semiconservative replication! Dispersive model predicts all DNA same density."
                    },
                    
                    conclusion: "DNA replicates semiconservatively - each new DNA has one old strand and one new strand",
                    
                    diagram: {
                        generation0: "Heavy DNA (¹⁵N/¹⁵N) ██",
                        generation1: "Hybrid DNA (¹⁵N/¹⁴N) ▓▓",
                        generation2: "50% Hybrid (¹⁵N/¹⁴N) ▓▓, 50% Light (¹⁴N/¹⁴N) ░░",
                        pattern: "Each old strand templates a new strand"
                    }
                },
                
                modernLabAdaptation: {
                    title: "Demonstrating Semiconservative Replication (Modern Lab)",
                    challenge: "¹⁵N labeling and ultracentrifugation not practical for teaching labs",
                    
                    option1_simulation: {
                        approach: "Computer simulation or physical model",
                        materials: [
                            "Different colored strings (representing heavy vs light strands)",
                            "Beads for nucleotides"
                        ],
                        procedure: [
                            "Students model DNA strands with two colors (heavy and light)",
                            "Simulate replication by separating strands",
                            "Build new strands (light nitrogen) on each template",
                            "Count proportions of heavy/heavy, heavy/light, light/light",
                            "Compare to predictions of three models"
                        ],
                        benefit: "Visual and hands-on understanding of experiment logic"
                    },
                    
                    option2_BrdU: {
                        modernAlternative: "Use BrdU (bromodeoxyuridine) instead of ¹⁵N",
                        BrdU: "Thymine analog incorporated into DNA during replication",
                        detection: "Anti-BrdU antibodies (immunofluorescence) or differential staining",
                        procedure: [
                            "Grow cells in BrdU-containing medium",
                            "Allow replication for 1-2 generations",
                            "Fix cells, denature DNA",
                            "Stain with anti-BrdU antibody (fluorescent)",
                            "Observe under fluorescence microscope"
                        ],
                        results: {
                            generation1: "Uniform labeling (all chromatids have BrdU)",
                            generation2: "Half labeled (semiconservative pattern visible)"
                        },
                        advantage: "Can visualize in individual chromosomes",
                        use: "Cell biology research, sister chromatid exchange studies"
                    },
                    
                    option3_PCR: {
                        molecularApproach: "Use different tags to distinguish old vs new DNA",
                        note: "More complex, requires molecular biology techniques"
                    }
                },
                
                dataInterpretation: {
                    keyObservations: [
                        "Generation 0 (all ¹⁵N): Single band at heavy position",
                        "Generation 1 (after transfer to ¹⁴N): Single band at intermediate position",
                        "Generation 2: Two bands - intermediate and light, in 1:1 ratio"
                    ],
                    
                    whySemiconservative: {
                        generation1: "Hybrid DNA proves both strands used in replication (rules out conservative)",
                        generation2: "Appearance of light DNA and persistence of hybrid (rules out dispersive)",
                        pattern: "Matches prediction of semiconservative model exactly"
                    },
                    
                    mathematicalPrediction: {
                        generation1: "100% hybrid (¹⁵N/¹⁴N)",
                        generation2: "50% hybrid (¹⁵N/¹⁴N), 50% light (¹⁴N/¹⁴N)",
                        generation3: "25% hybrid (¹⁵N/¹⁴N), 75% light (¹⁴N/¹⁴N)",
                        generalFormula: "Hybrid proportion = 2/2ⁿ (where n = generation number)"
                    }
                },
                
                experimentalControls: {
                    pureHeavy: "DNA from bacteria grown only in ¹⁵N (reference for heavy position)",
                    pureLight: "DNA from bacteria grown only in ¹⁴N (reference for light position)",
                    mixture: "Mix heavy and light DNA (shows two distinct bands)",
                    noReplication: "DNA extracted immediately after transfer (should be all heavy)"
                },
                
                technicalDetails: {
                    centrifugation: {
                        speed: "~140,000 × g",
                        duration: "~20 hours",
                        temperature: "25°C (CsCl density optimal at this temp)"
                    },
                    CsClConcentration: "~6-8 M (high density)",
                    DNAdetection: "UV absorption at 260 nm (DNA absorbs strongly)",
                    fractionation: "Puncture tube bottom, collect fractions"
                },
                
                significance: {
                    biologicalImportance: [
                        "Proved Watson-Crick model correct",
                        "Explained how genetic information is faithfully inherited",
                        "Each daughter cell gets exact copy of parental DNA",
                        "Foundation for understanding DNA repair, recombination"
                    ],
                    methodologicalImportance: [
                        "Introduced density labeling technique",
                        "Demonstrated power of isotope labeling",
                        "Model of elegant experimental design"
                    ]
                },
                
                realWorldApplications: [
                    "Understanding DNA replication in all organisms",
                    "DNA repair mechanisms (uses same semiconservative principle)",
                    "Cell cycle studies (when DNA replicates)",
                    "BrdU labeling in cancer research (identify dividing cells)",
                    "Evolutionary studies (molecular clock based on replication fidelity)"
                ],
                
                extensions: [
                    "Study replication in eukaryotes (multiple origins, slower)",
                    "Investigate rolling circle replication (some viruses)",
                    "Explore telomere problem and telomerase",
                    "Research DNA repair mechanisms",
                    "Examine proofreading and fidelity of replication"
                ],
                
                historicalAnecdotes: {
                    elegance: "Considered one of most elegant experiments in biology",
                    collaboration: "Meselson and Stahl were graduate students at Caltech",
                    publication: "Published in PNAS (1958), immediately recognized as landmark",
                    impact: "Textbook example of clear hypothesis testing",
                    legacy: "Set standard for experimental design in molecular biology"
                }
            },

// ========================================
            // EXPERIMENT 4: DNA EXTRACTION AND ANALYSIS
            // ========================================
            
            dna_extraction_strawberry: {
                name: "DNA Extraction from Strawberries - Visualizing the Genetic Material",
                relatedTopics: ['dna_structure', 'chromatin_organization'],
                category: 'biotechnology',
                historicalBackground: {
                    context: "DNA extraction is fundamental technique in molecular biology",
                    significance: "Allows isolation and study of genetic material",
                    development: "Techniques developed throughout 20th century, refined with modern methods",
                    modernUse: "Essential for genomics, forensics, medical diagnostics, biotechnology",
                    whyStrawberries: "Octoploid (8 copies of genome), large amount of DNA, easy to extract",
                    visualization: "One of few experiments where you can actually see DNA with naked eye"
                },
                
                DNAinCells: {
                    location: "Nucleus (eukaryotes), nucleoid region (prokaryotes)",
                    packaging: "Wrapped around histones, condensed into chromatin",
                    cellBarriers: {
                        cellWall: "Must break down (in plant cells)",
                        cellMembrane: "Lipid bilayer - must disrupt",
                        nuclearMembrane: "Must break to release DNA"
                    },
                    challenge: "DNA is inside cells, surrounded by proteins, membranes, cell walls"
                },
                
                extractionPrinciples: {
                    cellLysis: {
                        purpose: "Break open cells to release contents",
                        methods: {
                            mechanical: "Grinding, crushing, homogenization",
                            detergent: "Disrupts lipid membranes (like soap on grease)",
                            salt: "Helps break down cell walls and nuclear membranes"
                        }
                    },
                    proteinRemoval: {
                        purpose: "Separate DNA from proteins (histones, enzymes)",
                        method: "Protease enzymes or salt precipitation",
                        importance: "Proteins can interfere with DNA analysis"
                    },
                    DNAprecipitation: {
                        purpose: "Make DNA visible and collectible",
                        method: "Add cold ethanol or isopropanol",
                        mechanism: "DNA insoluble in alcohol, precipitates as white stringy mass",
                        salt: "Helps DNA aggregate and precipitate"
                    }
                },
                
                modernLabExperiment: {
                    title: "Extracting DNA from Strawberries",
                    hypothesis: "DNA can be extracted from plant cells and visualized without specialized equipment",
                    purpose: "Demonstrate DNA extraction and observe genetic material",
                    
                    whyStrawberries: [
                        "Octoploid - 8 copies of each chromosome (huge amount of DNA)",
                        "Soft tissue - easy to mash",
                        "Few proteins compared to other fruits",
                        "Large cells",
                        "Easily accessible and inexpensive"
                    ],
                    
                    materials: [
                        "Fresh strawberries (2-3 large ones)",
                        "Zip-lock plastic bag",
                        "Extraction buffer:",
                        "  - 100 mL water",
                        "  - 2 teaspoons dish soap (detergent)",
                        "  - 1 teaspoon salt",
                        "Coffee filter or cheesecloth",
                        "Funnel",
                        "Clear glass or test tube",
                        "Ice-cold 95% ethanol or isopropanol (rubbing alcohol)",
                        "Wooden stick or glass rod for spooling DNA",
                        "Measuring cup",
                        "Optional: pineapple juice (contains protease)"
                    ],
                    
                    safetyPrecautions: [
                        "Ethanol is flammable - keep away from flames",
                        "Dish soap can irritate eyes - wear safety goggles",
                        "Do not ingest any materials",
                        "Wash hands after handling strawberries and chemicals"
                    ],
                    
                    procedure: [
                        "PREPARATION:",
                        "Prepare extraction buffer: mix 100 mL water, 2 tsp dish soap, 1 tsp salt",
                        "Chill ethanol in freezer (at least -20°C) - this is crucial!",
                        "Remove green tops from 2-3 strawberries",
                        "",
                        "STEP 1 - CELL LYSIS (Breaking Open Cells):",
                        "Place strawberries in zip-lock bag",
                        "Mash thoroughly for 2-3 minutes",
                        "  (This breaks cell walls and membranes mechanically)",
                        "Add 10 mL extraction buffer to bag",
                        "Gently mix for 1 minute (don't create too many bubbles)",
                        "  (Detergent disrupts lipid membranes)",
                        "  (Salt helps break down cell walls and precipitate proteins)",
                        "",
                        "STEP 2 - FILTRATION (Remove Cell Debris):",
                        "Place coffee filter in funnel over clear glass",
                        "Pour strawberry mixture through filter",
                        "Collect filtrate (liquid) in glass",
                        "  (This removes large cell debris, leaving DNA in solution)",
                        "You should have 5-10 mL of pinkish cloudy liquid",
                        "",
                        "STEP 3 - DNA PRECIPITATION:",
                        "Tilt glass at 45° angle",
                        "SLOWLY pour ice-cold ethanol down side of glass",
                        "  (Pour slowly to create distinct layer)",
                        "Add about equal volume of ethanol (or 2:1 alcohol:filtrate)",
                        "DO NOT MIX - let it sit for 2-3 minutes",
                        "Watch interface between strawberry liquid and alcohol",
                        "",
                        "OBSERVATION:",
                        "White, stringy, cloudy substance appears at interface",
                        "This is DNA precipitating out of solution!",
                        "May look like white snot or cotton candy",
                        "",
                        "STEP 4 - COLLECTING DNA:",
                        "Insert wooden stick or glass rod into solution",
                        "Gently swirl at interface where DNA is visible",
                        "DNA will wrap around stick (spooling)",
                        "Lift stick to collect DNA sample",
                        "",
                        "OPTIONAL - PROTEIN DIGESTION:",
                        "Before filtering, add 1 tsp pineapple juice to mashed strawberries",
                        "Incubate 5 minutes (contains bromelain protease)",
                        "Results in purer DNA extraction"
                    ],
                    
                    expectedResults: {
                        appearance: "White, stringy, viscous material",
                        texture: "Slimy, mucus-like",
                        location: "At interface between strawberry liquid and alcohol",
                        amount: "Several milliliters visible to naked eye",
                        purity: "Contains DNA plus some proteins and RNA (crude extract)"
                    },
                    
                    chemicalExplanations: {
                        mashing: {
                            purpose: "Mechanical cell lysis",
                            effect: "Breaks cell walls and membranes physically"
                        },
                        detergent: {
                            purpose: "Chemical cell lysis",
                            mechanism: "Soap molecules have hydrophobic and hydrophilic ends, dissolve lipid membranes",
                            analogy: "Like soap removing grease from dishes"
                        },
                        salt: {
                            purposes: [
                                "Helps break down cell walls and nuclear membranes",
                                "Neutralizes negative charges on DNA phosphate groups",
                                "Causes proteins to precipitate",
                                "Helps DNA molecules stick together (aggregate)"
                            ],
                            chemistry: "Na⁺ ions shield negative phosphate charges, allowing DNA strands to clump"
                        },
                        coldEthanol: {
                            purpose: "Precipitates DNA",
                            mechanism: [
                                "DNA soluble in water (polar), insoluble in alcohol (less polar)",
                                "Ethanol reduces polarity of solution, DNA can't stay dissolved",
                                "Cold temperature reduces DNA solubility further",
                                "DNA molecules aggregate and precipitate"
                            ],
                            whyCold: "Room temp ethanol doesn't precipitate DNA as effectively"
                        },
                        protease: {
                            purpose: "Digests proteins (histones, enzymes) bound to DNA",
                            source: "Pineapple juice (bromelain), papaya (papain), meat tenderizer",
                            result: "Purer DNA, better precipitation"
                        }
                    },
                    
                    whyDNAvisible: {
                        strawberryFactors: [
                            "Octoploid (8n) - 8 times more DNA than most organisms",
                            "Large cells",
                            "Many cells in strawberry"
                        ],
                        technique: "Precipitation concentrates millions of DNA molecules into visible mass",
                        estimate: "Typical extraction yields ~1 gram DNA from 100 grams strawberries",
                        molecules: "Trillions of DNA molecules clumped together"
                    },
                    
                    troubleshooting: {
                        noDNAappears: [
                            "Ethanol not cold enough (must be ice cold)",
                            "Didn't add enough ethanol (try 2:1 ratio)",
                            "Mixed instead of layering (pour gently down side of glass)",
                            "Didn't filter well (debris interferes)",
                            "Detergent concentration too low (try more soap)"
                        ],
                        tooMuchFoam: [
                            "Mixed too vigorously when adding detergent",
                            "Let mixture settle before filtering",
                            "Use less detergent next time"
                        ],
                        cloudyNotStringy: [
                            "May have precipitated proteins or RNA along with DNA",
                            "Try adding protease (pineapple juice)",
                            "Still contains DNA, just less pure"
                        ]
                    }
                },
                
                whatsDNA_composition: {
                    doubleHelix: "Long polymer of nucleotides",
                    components: "Sugar-phosphate backbone, nitrogenous bases",
                    length: "Each strawberry cell has ~800 million base pairs (octoploid)",
                    ifUnraveled: "DNA from one strawberry cell ~1 meter long",
                    total: "Billions of cells in one strawberry → kilometers of DNA total!"
                },
                
                testingDNA: {
                    diphenylamine: {
                        test: "DNA-specific color test",
                        procedure: "Add diphenylamine reagent to extracted DNA",
                        result: "Blue color confirms DNA presence",
                        chemistry: "Reacts with deoxyribose sugar"
                    },
                    microscopy: {
                        method: "Stain with DAPI or methylene blue",
                        observation: "Can see DNA strands under microscope"
                    }
                },
                
                modernBiotechConnection: {
                    principle: "Same basic steps used in research labs",
                    differences: {
                        research: [
                            "Automated systems (bead-based extraction, spin columns)",
                            "Purer DNA (repeated precipitation, enzyme treatment)",
                            "Quantification (spectrophotometry)",
                            "Quality check (gel electrophoresis)"
                        ],
                        strawberryLab: [
                            "Manual, simple equipment",
                            "Crude extract (contains RNA, proteins)",
                            "Visual observation only",
                            "Qualitative demonstration"
                        ]
                    },
                    applications: [
                        "Forensic DNA analysis (crime scenes)",
                        "Medical diagnostics (genetic testing)",
                        "Paternity testing",
                        "GMO detection",
                        "Ancient DNA studies (archaeology)",
                        "Conservation genetics (endangered species)"
                    ]
                },
                
                furtherAnalysis: {
                    gelElectrophoresis: "Separate DNA by size, check quality",
                    PCR: "Amplify specific DNA sequences",
                    sequencing: "Read DNA sequence",
                    restriction: "Cut DNA at specific sites with restriction enzymes",
                    quantification: "Measure DNA concentration (spectrophotometry, fluorometry)"
                },
                
                realWorldRelevance: [
                    "Every genetic test starts with DNA extraction",
                    "Forensic scientists extract DNA from crime scene evidence",
                    "Doctors extract DNA to diagnose genetic diseases",
                    "Archaeologists extract ancient DNA from fossils",
                    "Agricultural scientists extract plant DNA to develop GMOs",
                    "COVID-19 testing involves RNA extraction (similar principles)"
                ],
                
                extensions: [
                    "Extract DNA from other sources (banana, onion, cheek cells)",
                    "Compare DNA yield from different fruits",
                    "Test effect of temperature (warm vs cold ethanol)",
                    "Try different detergents (compare effectiveness)",
                    "Perform gel electrophoresis on extracted DNA",
                    "Calculate approximate DNA concentration",
                    "Research commercial DNA extraction kits"
                ],
                
                connections: {
                    toHistory: "Modern version of what Miescher did (1869) isolating 'nuclein'",
                    toGriffith: "Griffith's transforming principle was DNA - can extract and transfer it",
                    toWatsonCrick: "This stringy stuff has double helix structure (can't see without X-ray)",
                    toGenomics: "Human Genome Project started with DNA extraction from blood samples"
                }
            },

            // ========================================
            // EXPERIMENT 5: GEL ELECTROPHORESIS
            // ========================================
            
            gel_electrophoresis_analysis: {
                name: "Agarose Gel Electrophoresis - Separating and Analyzing DNA",
                relatedTopics: ['dna_structure', 'dna_technology', 'mutations'],
                category: 'biotechnology',
                historicalBackground: {
                    development: "Developed in 1970s as DNA analysis technique",
                    pioneers: "Arne Tiselius (protein electrophoresis, 1937 Nobel), adapted for DNA",
                    significance: "Revolutionized molecular biology - allows visualization and size determination of DNA",
                    modernUse: "Standard technique in every molecular biology lab worldwide",
                    applications: "DNA fingerprinting, PCR analysis, cloning verification, mutation detection",
                    impact: "Enabled genomics revolution, forensic DNA analysis, genetic diagnostics"
                },
                
                principle: {
                    definition: "Technique to separate DNA molecules by size using electric field",
                    basis: "DNA is negatively charged (phosphate backbone)",
                    mechanism: "DNA migrates toward positive electrode when electric field applied",
                    sizeEffect: "Smaller DNA moves faster through gel matrix, larger DNA moves slower",
                    visualization: "DNA stained with fluorescent dye (ethidium bromide or safer alternatives)",
                    result: "DNA appears as bands on gel, position indicates size"
                },
                
                components: {
                    agaroseGel: {
                        material: "Agarose - polysaccharide from seaweed",
                        structure: "Forms porous matrix when dissolved in buffer and cooled",
                        poreSize: "Depends on agarose concentration (0.5-2%)",
                        function: "Molecular sieve - separates DNA by size",
                        preparation: "Heat agarose in buffer until dissolved, pour into mold, let solidify"
                    },
                    buffer: {
                        name: "TAE (Tris-Acetate-EDTA) or TBE (Tris-Borate-EDTA)",
                        functions: [
                            "Conducts electricity",
                            "Maintains pH (7-8)",
                            "EDTA chelates Mg²⁺ (prevents DNase activity)"
                        ],
                        concentration: "Usually 1× (diluted from 50× stock)"
                    },
                    loadingDye: {
                        components: [
                            "Glycerol or Ficoll (makes sample dense, sinks into well)",
                            "Bromophenol blue (tracking dye, shows migration progress)",
                            "Xylene cyanol (second tracking dye, different mobility)"
                        ],
                        purpose: "Helps load samples into wells, visualize migration"
                    },
                    DNAladder: {
                        definition: "Mixture of DNA fragments of known sizes",
                        purpose: "Size standard - determine size of unknown DNA samples",
                        types: "100 bp ladder, 1 kb ladder, etc.",
                        pattern: "Evenly spaced bands at defined sizes"
                    },
                    stain: {
                        traditional: {
                            name: "Ethidium bromide (EtBr)",
                            mechanism: "Intercalates between DNA bases, fluoresces under UV light",
                            detection: "Orange fluorescence under UV",
                            hazard: "Mutagen - requires careful handling, disposal"
                        },
                        safer: {
                            alternatives: "SYBR Safe, GelRed, GelGreen",
                            advantages: "Less toxic, same sensitivity",
                            detection: "Green fluorescence under blue light or UV"
                        }
                    }
                },
                
                experimentalSetup: {
                    apparatus: {
                        gelTray: "Horizontal tray to hold gel",
                        comb: "Creates wells for loading samples",
                        tank: "Holds gel and buffer",
                        powerSupply: "Provides electric current (50-150 V)"
                    },
                    orientation: {
                        negative: "Wells at negative (black) electrode end",
                        positive: "Opposite end",
                        DNAmigration: "From negative to positive (DNA is negatively charged)"
                    }
                },
                
                modernLabExperiment: {
                    title: "DNA Analysis by Agarose Gel Electrophoresis",
                    purpose: "Separate DNA fragments by size, determine molecular weight, verify PCR or restriction digest",
                    
                    materials: [
                        "Agarose powder",
                        "1× TAE or TBE buffer",
                        "Electrophoresis apparatus (gel box, comb, power supply)",
                        "DNA samples (e.g., PCR products, plasmid DNA, restriction digest)",
                        "DNA ladder (size markers)",
                        "Loading dye (6×)",
                        "DNA stain (GelRed, SYBR Safe, or EtBr)",
                        "Microwave or hot plate (to dissolve agarose)",
                        "Micropipettes and tips",
                        "UV transilluminator or blue light (for visualization)",
                        "Safety equipment: gloves, goggles, UV protective face shield"
                    ],
                    
                    safetyPrecautions: [
                        "Wear gloves when handling gels and DNA stain",
                        "Use UV protective equipment (face shield or goggles)",
                        "Never touch gel with bare hands after staining",
                        "Dispose of EtBr waste in designated container (if using)",
                        "Turn off power before removing gel or touching apparatus",
                        "Hot agarose can cause burns - handle carefully"
                    ],
                    
                    procedure: [
                        "PART 1: GEL PREPARATION",
                        "Calculate agarose needed:",
                        "  For 1% gel: 1 g agarose per 100 mL buffer",
                        "  For 0.8% gel: 0.8 g per 100 mL (for larger DNA, >1 kb)",
                        "  For 2% gel: 2 g per 100 mL (for smaller DNA, <500 bp)",
                        "Weigh agarose powder into flask",
                        "Add 1× TAE or TBE buffer",
                        "Microwave 1-2 minutes until agarose fully dissolved",
                        "  (Solution should be clear, no particles visible)",
                        "  (Swirl carefully every 30 sec, watch for boilover)",
                        "Cool to ~60°C (warm but not too hot to touch flask)",
                        "Add DNA stain if pre-staining (e.g., 1 drop GelRed per 50 mL)",
                        "Pour into gel tray with comb in place",
                        "Remove bubbles with pipette tip",
                        "Let solidify 20-30 minutes (gel becomes opaque, firm)",
                        "",
                        "PART 2: SAMPLE PREPARATION",
                        "Mix DNA samples with loading dye:",
                        "  Typical: 5 μL DNA sample + 1 μL 6× loading dye",
                        "  Or use 1× loading dye at higher volume",
                        "Prepare DNA ladder same way (if not pre-mixed)",
                        "Keep samples on ice until loading",
                        "",
                        "PART 3: LOADING AND RUNNING GEL",
                        "Remove comb from solidified gel (gently pull straight up)",
                        "Place gel in electrophoresis tank",
                        "Add 1× buffer to cover gel (~2-5 mm above gel surface)",
                        "Check orientation: wells at negative (black) electrode",
                        "Load samples into wells using micropipette:",
                        "  Hold pipette tip just above well bottom",
                        "  Slowly dispense (sample should sink into well)",
                        "  Typical volume: 5-20 μL per well",
                        "  Lane 1: DNA ladder (size markers)",
                        "  Lanes 2-X: DNA samples",
                        "Record which sample in which lane!",
                        "Close lid (ensures proper electrode connection)",
                        "Connect to power supply",
                        "Run gel:",
                        "  Voltage: 80-120 V (lower = better resolution, longer time)",
                        "  Time: 30-60 minutes (until dye migrated 2/3 down gel)",
                        "  Check orientation: bubbles at electrodes confirm current flowing",
                        "  Watch tracking dye migrate from wells toward positive electrode",
                        "",
                        "PART 4: VISUALIZATION",
                        "Turn OFF power supply",
                        "Remove gel from tank",
                        "If post-staining: soak gel in stain solution 20-30 min, then destain in water",
                        "Place gel on UV transilluminator or blue light",
                        "Turn on light - DNA bands appear as bright bands",
                        "Photograph gel (document results)",
                        "Measure band positions, compare to ladder"
                    ],
                    
                    gelConcentration: {
                        selection: "Choose based on DNA size range",
                        chart: {
                            "0.5%": "1-30 kb (large fragments, chromosomal DNA)",
                            "0.7%": "0.8-12 kb",
                            "1.0%": "0.5-10 kb (most common, general purpose)",
                            "1.2%": "0.4-7 kb",
                            "1.5%": "0.2-3 kb (PCR products)",
                            "2.0%": "0.1-2 kb (small PCR products, primers)"
                        },
                        tradeoff: "High % = smaller pores = better resolution for small DNA, but large DNA can't enter"
                    },
                    
                    voltage: {
                        typical: "5-10 V/cm (distance between electrodes)",
                        low: "1-5 V/cm - better resolution, sharper bands, longer run time (hours)",
                        high: "10-15 V/cm - faster, but bands may be fuzzy, gel may heat up",
                        formula: "V/cm = Voltage / distance between electrodes (cm)"
                    },
                    
                    expectedResults: {
                        DNAladder: "Series of evenly spaced bands at known sizes",
                        samples: "Bands at various positions depending on DNA size",
                        interpretation: {
                            bandPosition: "Compare to ladder to determine size",
                            bandIntensity: "Brighter = more DNA",
                            sharpBands: "Good quality DNA, proper run conditions",
                            smearedBands: "Degraded DNA or RNA contamination",
                            multipleBands: "Multiple DNA fragments (restriction digest, PCR artifacts)"
                        }
                    },
                    
                    sizeCalculation: {
                        method: "Plot log(size) vs distance migrated for ladder bands",
                        semilogPlot: "Creates standard curve",
                        unknownSize: "Measure distance, interpolate from curve",
                        software: "Gel documentation systems calculate automatically"
                    },
                    
                    troubleshooting: {
                        noBands: [
                            "Forgot to add DNA (check loading)",
                            "Gel not stained or stain too dilute",
                            "Ran gel backwards (wells at positive end)",
                            "DNA degraded",
                            "Power supply not on or not connected"
                        ],
                        faintBands: [
                            "Not enough DNA loaded (load more)",
                            "Stain too dilute (add more stain)",
                            "DNA concentration too low (concentrate sample)"
                        ],
                        smearedBands: [
                            "DNA degraded (use fresh DNA, DNase contamination)",
                            "RNA contamination (add RNase)",
                            "Voltage too high (run slower)",
                            "Gel too warm (check buffer level, use lower voltage)"
                        ],
                        bandsDrift: [
                            "Buffer levels uneven (add buffer to cover gel evenly)",
                            "Gel not level (level electrophoresis box)"
                        ],
                        samplesDidntSink: [
                            "Not enough glycerol in loading dye (add more)",
                            "Pipetting too fast (dispense slowly)"
                        ]
                    }
                },
                
                applications: {
                    PCRanalysis: {
                        purpose: "Verify PCR product size, check for contamination",
                        expected: "Single band at expected size (based on primer positions)",
                        interpretation: {
                            correctSizeBand: "Successful PCR",
                            noBand: "PCR failed",
                            wrongSize: "Non-specific amplification or primer issue",
                            multipleBands: "Non-specific products, optimize PCR"
                        }
                    },
                    restrictionDigest: {
                        purpose: "Verify cloning, map plasmid, detect mutations",
                        expected: "Bands matching predicted restriction fragment sizes",
                        interpretation: {
                            correctPattern: "Correct plasmid or expected restriction sites",
                            missingBands: "Restriction site lost (mutation or wrong plasmid)",
                            extraBands: "Additional restriction sites or incomplete digest"
                        }
                    },
                    DNAfingerprinting: {
                        purpose: "Identify individuals, forensics, paternity testing",
                        method: "Compare banding patterns between samples",
                        interpretation: "Matching patterns = same individual or close relative"
                    },
                    plasmidAnalysis: {
                        purpose: "Check plasmid size, verify cloning",
                        supercoiled: "Compact, migrates faster (farther)",
                        linear: "Relaxed, migrates at expected size",
                        nicked: "Open circle, migrates slowest (least far)"
                    },
                    RNAanalysis: {
                        note: "RNA gels require denaturing conditions (formaldehyde or glyoxal)",
                        difference: "RNA is single-stranded, can form secondary structure",
                        ribosomalRNA: "18S and 28S rRNA visible as discrete bands if intact"
                    }
                },
                
                alternativeTechniques: {
                    polyacrylamideGel: {
                        use: "Higher resolution, for smaller DNA (<500 bp) or proteins",
                        structure: "Cross-linked polymer, smaller pore size",
                        applications: "DNA sequencing, SNP analysis, protein electrophoresis"
                    },
                    pulsedFieldGel: {
                        use: "Very large DNA (>50 kb, up to several Mb)",
                        method: "Alternating electric field directions",
                        applications: "Chromosome separation, large genomic fragments"
                    },
                    capillaryElectrophoresis: {
                        use: "Automated DNA sequencing and fragment analysis",
                        advantage: "High throughput, quantitative, computerized",
                        applications: "DNA sequencing, STR analysis (forensics), genetic analyzer"
                    }
                },
                
                quantitativeAnalysis: {
                    densitometry: "Measure band intensity to estimate DNA concentration",
                    comparison: "Compare unknown band intensity to ladder or standard",
                    software: "ImageJ, GelAnalyzer, proprietary gel doc software",
                    limitation: "Semi-quantitative (not as accurate as spectrophotometry)"
                },
                
                realWorldRelevance: [
                    "Forensic DNA analysis (crime scene investigation)",
                    "Paternity testing",
                    "Genetic disease diagnosis",
                    "GMO detection in food",
                    "Quality control in molecular biology research",
                    "Verifying cloning and mutagenesis experiments",
                    "COVID-19 PCR confirmation (band at expected size)"
                ],
                
                extensions: [
                    "Run different agarose concentrations side-by-side (compare resolution)",
                    "Test effect of voltage on band sharpness",
                    "Perform restriction digest and analyze pattern",
                    "Extract DNA from gel bands (gel purification)",
                    "Combine with PCR (amplify DNA, then run on gel)",
                    "Quantify DNA using densitometry",
                    "Research automated capillary electrophoresis systems"
                ],
                
                connectionsToConcepts: {
                    DNAcharge: "Demonstrates DNA is negatively charged (migrates to + electrode)",
                    sizeVsCharge: "Migration depends on size, not charge (charge/mass ratio constant)",
                    gelMatrix: "Demonstrates molecular sieving (size-based separation)",
                    DNAvisualization: "Makes invisible DNA visible (fluorescence)",
                    forensics: "Basis of DNA fingerprinting (Griffith → DNA identification)"
                }
            }
        };

        // Link experiments to topics
        this.linkExperimentsToTopics();
    }

    linkExperimentsToTopics() {
        Object.entries(this.dnaExperiments).forEach(([expId, experiment]) => {
            experiment.relatedTopics.forEach(topicId => {
                if (this.dnaTopics[topicId]) {
                    if (!this.dnaTopics[topicId].relatedExperiments) {
                        this.dnaTopics[topicId].relatedExperiments = [];
                    }
                    this.dnaTopics[topicId].relatedExperiments.push({
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
            dna_structure: {
                'Basic Structure': [
                    'Thinking DNA is a single strand (it\'s double-stranded)',
                    'Confusing DNA with RNA (different sugar, bases, and structure)',
                    'Believing all DNA is in chromosomes (mitochondria have their own DNA)',
                    'Thinking DNA strands run in same direction (they\'re antiparallel)',
                    'Confusing hydrogen bonds with covalent bonds in DNA'
                ],
                'Base Pairing': [
                    'Thinking A can pair with any base (specific A-T, G-C pairing)',
                    'Believing all base pairs have same strength (G-C has 3 H-bonds, A-T has 2)',
                    'Confusing complementary with identical (opposite strands are complementary, not same)'
                ]
            },
            
            dna_replication: {
                'Mechanism': [
                    'Thinking replication is conservative (it\'s semiconservative)',
                    'Believing both strands synthesized continuously (only leading strand is)',
                    'Confusing replication with transcription',
                    'Thinking DNA polymerase can start synthesis alone (needs primer)',
                    'Believing replication direction is 3\'→5\' (actually 5\'→3\')'
                ],
                'Enzymes': [
                    'Thinking all polymerases are the same (different types for replication, repair, etc.)',
                    'Confusing helicase with polymerase',
                    'Believing ligase synthesizes DNA (it only joins existing strands)'
                ]
            },
            
            chromatin_organization: {
                'Structure': [
                    'Thinking histones are DNA (they\'re proteins)',
                    'Believing DNA is always tightly packed (euchromatin vs heterochromatin)',
                    'Confusing nucleosome with nucleus',
                    'Thinking chromatin and chromosomes are same thing (chromatin condenses to form chromosomes)'
                ]
            },
            
            genetic_code: {
                'Code Properties': [
                    'Thinking each amino acid has one codon (code is degenerate)',
                    'Believing code is ambiguous (each codon specifies only one amino acid)',
                    'Confusing codon with anticodon',
                    'Thinking genetic code varies among organisms (it\'s nearly universal)',
                    'Believing start codon is special nucleotide (it\'s regular AUG that also codes for Met)'
                ]
            },
            
            mutations: {
                'Types and Effects': [
                    'Thinking all mutations are bad (many are neutral or beneficial)',
                    'Believing mutations are rare (they happen constantly, most repaired)',
                    'Confusing point mutations with chromosomal mutations',
                    'Thinking silent mutations have no effect (may affect regulation or splicing)',
                    'Believing all mutations in DNA affect proteins (many in non-coding regions)'
                ]
            }
        };
    }

    initializeMetacognitivePrompts() {
        this.metacognitivePrompts = {
            beforeLearning: [
                "What do you already know about {topic}?",
                "What questions do you have about DNA?",
                "How does {topic} relate to what you've learned before?",
                "What do you predict will be most challenging?"
            ],
            duringLearning: [
                "Does this make sense? Can you explain it in your own words?",
                "How does this connect to {related_concept}?",
                "What's confusing about this concept?",
                "Can you think of a real-world example?"
            ],
            afterLearning: [
                "What were the main ideas about {topic}?",
                "What surprised you while learning about DNA?",
                "What are you still unsure about?",
                "How would you teach {topic} to someone else?"
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
            dna_structure: [
                {
                    scenario: "DNA Fingerprinting",
                    context: "Crime scene investigation uses DNA analysis",
                    application: "Each person's DNA sequence is unique (except identical twins)",
                    question: "Why is DNA evidence so reliable in forensics?"
                },
                {
                    scenario: "Paternity Testing",
                    context: "Determining biological relationships",
                    application: "Child inherits half of DNA from each parent",
                    question: "How can DNA prove or disprove parentage?"
                }
            ],
            
            dna_replication: [
                {
                    scenario: "Cancer Development",
                    context: "Replication errors can lead to mutations",
                    application: "Most errors corrected by proofreading, but some slip through",
                    question: "Why don't we get cancer every time a cell divides?"
                },
                {
                    scenario: "Aging and Telomeres",
                    context: "Chromosomes shorten with each cell division",
                    application: "Telomerase extends telomeres in germ cells and cancer cells",
                    question: "Why do somatic cells have limited division capacity?"
                }
            ],
            
            mutations: [
                {
                    scenario: "Sickle Cell Disease",
                    context: "Single nucleotide change causes disease",
                    application: "GAG→GTG changes glutamic acid to valine in hemoglobin",
                    question: "How can one DNA change cause such severe symptoms?"
                },
                {
                    scenario: "Antibiotic Resistance",
                    context: "Bacteria develop resistance through mutations",
                    application: "Random mutations occasionally confer survival advantage",
                    question: "Why does antibiotic overuse lead to resistant bacteria?"
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
                    example: "Define nucleotide"
                },
                understand: {
                    description: "Explain ideas or concepts",
                    verbs: ["Explain", "Describe", "Summarize", "Compare", "Classify"],
                    example: "Explain why DNA replication is semiconservative"
                },
                apply: {
                    description: "Use information in new situations",
                    verbs: ["Calculate", "Solve", "Demonstrate", "Predict", "Use"],
                    example: "Predict the complementary DNA strand sequence"
                },
                analyze: {
                    description: "Draw connections among ideas",
                    verbs: ["Analyze", "Differentiate", "Organize", "Compare", "Contrast"],
                    example: "Analyze how mutations affect protein function"
                },
                evaluate: {
                    description: "Justify a decision or course of action",
                    verbs: ["Evaluate", "Critique", "Judge", "Defend", "Assess"],
                    example: "Evaluate the evidence for semiconservative replication"
                },
                create: {
                    description: "Produce new or original work",
                    verbs: ["Design", "Construct", "Create", "Develop", "Formulate"],
                    example: "Design an experiment to detect a specific mutation"
                }
            }
        };
    }

    // ========================================
// HANDLER METHODS FOR DNA TOPICS
// ========================================

handleDNAStructure(problem) {
    const content = {
        topic: "DNA Structure and Organization",
        category: 'molecular_structure',
        summary: "DNA (deoxyribonucleic acid) is a double-stranded helical molecule composed of nucleotides. It stores genetic information through the sequence of four nitrogenous bases: adenine (A), thymine (T), guanine (G), and cytosine (C). The two strands are antiparallel and held together by complementary base pairing.",
        
        nucleotideStructure: {
            components: {
                deoxyriboseSugar: {
                    name: "2'-deoxyribose",
                    formula: "C₅H₁₀O₄",
                    structure: "5-carbon pentose sugar",
                    numbering: "Carbons numbered 1' through 5' (prime notation)",
                    keyFeature: "Lacks hydroxyl (-OH) group at 2' position (hence 'deoxy')",
                    difference: "RNA has ribose with -OH at 2' position",
                    connections: {
                        "1'carbon": "Attached to nitrogenous base (N-glycosidic bond)",
                        "3'carbon": "Has -OH group (3'-hydroxyl)",
                        "5'carbon": "Attached to phosphate group"
                    },
                    significance: "2'-OH absence makes DNA more stable than RNA"
                },
                
                phosphateGroup: {
                    formula: "PO₄³⁻",
                    charge: "Negatively charged (gives DNA acidic nature)",
                    position: "Attached to 5' carbon of sugar",
                    linkage: "Forms phosphodiester bond with 3'-OH of next nucleotide",
                    backbone: "Alternating sugar-phosphate units form DNA backbone",
                    properties: [
                        "Makes DNA soluble in water",
                        "Causes DNA to migrate toward positive electrode (electrophoresis)",
                        "Requires positive ions (Mg²⁺, histones) to neutralize charge"
                    ]
                },
                
                nitrogenousBases: {
                    classification: {
                        purines: {
                            structure: "Double-ring structure (9 atoms: 6-membered + 5-membered rings)",
                            size: "Larger than pyrimidines",
                            members: {
                                adenine: {
                                    abbreviation: "A",
                                    fullName: "Adenine",
                                    formula: "C₅H₅N₅",
                                    pairs: "Thymine (T)",
                                    hydrogenBonds: "2 H-bonds with thymine",
                                    structure: "Purine base with amino group at position 6",
                                    occurrence: "DNA and RNA (pairs with U in RNA)"
                                },
                                guanine: {
                                    abbreviation: "G",
                                    fullName: "Guanine",
                                    formula: "C₅H₅N₅O",
                                    pairs: "Cytosine (C)",
                                    hydrogenBonds: "3 H-bonds with cytosine (stronger)",
                                    structure: "Purine base with carbonyl and amino groups",
                                    stability: "G-C rich regions more stable (higher melting temp)"
                                }
                            }
                        },
                        
                        pyrimidines: {
                            structure: "Single-ring structure (6-membered ring)",
                            size: "Smaller than purines",
                            members: {
                                cytosine: {
                                    abbreviation: "C",
                                    fullName: "Cytosine",
                                    formula: "C₄H₅N₃O",
                                    pairs: "Guanine (G)",
                                    hydrogenBonds: "3 H-bonds with guanine",
                                    structure: "Pyrimidine with amino group at position 4",
                                    instability: "Can spontaneously deaminate to uracil (mutation)"
                                },
                                thymine: {
                                    abbreviation: "T",
                                    fullName: "Thymine",
                                    formula: "C₅H₆N₂O₂",
                                    pairs: "Adenine (A)",
                                    hydrogenBonds: "2 H-bonds with adenine",
                                    structure: "Pyrimidine with methyl group at position 5",
                                    unique: "Found in DNA only; RNA has uracil instead",
                                    methylation: "Methyl group distinguishes from uracil"
                                }
                            }
                        }
                    },
                    
                    bondingToSugar: {
                        bondType: "N-glycosidic bond",
                        purines: "Bond at N-9 of purine ring to C-1' of sugar",
                        pyrimidines: "Bond at N-1 of pyrimidine ring to C-1' of sugar",
                        orientation: "Bases extend perpendicular to sugar-phosphate backbone"
                    }
                }
            },
            
            nucleosideVsNucleotide: {
                nucleoside: {
                    definition: "Base + Sugar (no phosphate)",
                    examples: "Adenosine, Guanosine, Cytidine, Thymidine",
                    naming: "Base name with -osine (purines) or -idine (pyrimidines)"
                },
                nucleotide: {
                    definition: "Base + Sugar + Phosphate",
                    examples: "Adenosine monophosphate (AMP), Guanosine monophosphate (GMP)",
                    variants: {
                        monophosphate: "One phosphate (AMP, GMP, CMP, TMP)",
                        diphosphate: "Two phosphates (ADP, GDP, etc.)",
                        triphosphate: "Three phosphates (ATP, GTP, dNTPs for replication)"
                    },
                    energyRole: "ATP, GTP are energy currency molecules"
                }
            },
            
            phosphodiesterBond: {
                definition: "Covalent bond linking nucleotides in DNA strand",
                formation: "5' phosphate of one nucleotide bonds to 3' -OH of previous nucleotide",
                reaction: "Dehydration synthesis (releases H₂O)",
                energy: "Requires energy (from dNTP hydrolysis during replication)",
                direction: "Creates directionality: 5' end (phosphate) and 3' end (hydroxyl)",
                backbone: "Creates sugar-phosphate backbone of DNA strand",
                stability: "Very stable covalent bond (not easily broken)"
            }
        },
        
        doubleHelixStructure: {
            discovery: {
                year: "1953",
                scientists: "James Watson and Francis Crick",
                location: "Cambridge University, England",
                publication: "Nature, April 25, 1953",
                basedOn: [
                    "Rosalind Franklin's X-ray crystallography (Photo 51)",
                    "Maurice Wilkins' X-ray data",
                    "Chargaff's rules (A=T, G=C amounts)",
                    "Linus Pauling's work on protein helices",
                    "Chemical bond distances and angles"
                ],
                famousQuote: "It has not escaped our notice that the specific pairing we have postulated immediately suggests a possible copying mechanism for the genetic material",
                nobelPrize: "1962 Physiology/Medicine (Watson, Crick, Wilkins; Franklin died 1958)",
                impact: "Revolutionized biology; explained heredity at molecular level"
            },
            
            structuralFeatures: {
                helix: {
                    type: "Right-handed double helix",
                    strands: "Two polynucleotide strands twisted around common axis",
                    direction: "Helix turns clockwise when viewed from top",
                    comparison: "Like spiral staircase with two railings"
                },
                
                dimensions: {
                    diameter: "2.0 nm (20 Ångströms) - remarkably uniform",
                    pitch: "3.4 nm per complete turn (360° rotation)",
                    basePairsPerTurn: "~10 base pairs (10.5 in solution)",
                    risePerBasePair: "0.34 nm (3.4 Å) between stacked base pairs",
                    helixAngle: "36° rotation per base pair (360°/10)",
                    persistence: "~50 nm (how far DNA stays straight)"
                },
                
                grooves: {
                    majorGroove: {
                        width: "~2.2 nm",
                        depth: "~0.85 nm",
                        accessibility: "Wide and deep - more accessible",
                        proteins: "Most DNA-binding proteins interact here",
                        information: "Base pair identity readable from major groove",
                        importance: "Critical for transcription factor binding"
                    },
                    minorGroove: {
                        width: "~1.2 nm",
                        depth: "~0.75 nm",
                        accessibility: "Narrow and shallow - less accessible",
                        proteins: "Some proteins (e.g., histones) bind here",
                        importance: "Also contains sequence information"
                    },
                    origin: "Result of asymmetric attachment of bases to sugar-phosphate backbone"
                },
                
                antiparallelStrands: {
                    definition: "Two strands run in opposite directions",
                    strand1: "5' → 3' direction (5' phosphate to 3' hydroxyl)",
                    strand2: "3' → 5' direction (opposite to strand 1)",
                    notation: "5'-ATCG-3' paired with 3'-TAGC-5'",
                    consequence: [
                        "Replication proceeds differently on each strand",
                        "Creates leading and lagging strands during replication",
                        "Transcription reads 3'→5' strand to make 5'→3' RNA"
                    ],
                    visualization: "Like two parallel roads with traffic flowing opposite directions"
                }
            },
            
            basePairing: {
                complementarity: {
                    rule: "Adenine pairs with Thymine; Guanine pairs with Cytosine",
                    WatsonCrick: "Standard base pairing via hydrogen bonds",
                    specificity: "Size and hydrogen bonding ensure specificity",
                    consequence: "Sequence of one strand determines sequence of other"
                },
                
                hydrogenBonds: {
                    AT_pairing: {
                        bases: "Adenine — Thymine",
                        bonds: "2 hydrogen bonds",
                        specificity: [
                            "A (N6-H) → T (O4) [donor → acceptor]",
                            "T (N3-H) → A (N1) [donor → acceptor]"
                        ],
                        strength: "Weaker than G-C (fewer bonds)",
                        stability: "AT-rich regions denature more easily"
                    },
                    GC_pairing: {
                        bases: "Guanine ≡ Cytosine",
                        bonds: "3 hydrogen bonds",
                        specificity: [
                            "G (N1-H) → C (N3)",
                            "G (N2-H) → C (O2)",
                            "C (N4-H) → G (O6)"
                        ],
                        strength: "Stronger than A-T (more bonds)",
                        stability: "GC-rich regions more stable, higher melting temp"
                    },
                    nature: "Non-covalent, weaker than covalent bonds, but many together = stable",
                    reversibility: "Can be broken (denaturation) and reformed (renaturation)"
                },
                
                geometricFit: {
                    purinePyrimidine: "Purine always pairs with pyrimidine",
                    reason: "Maintains uniform helix width (2.0 nm)",
                    purineepurine: "Too wide (would bulge)",
                    pyrimidinePyrimidine: "Too narrow (would compress)",
                    WatsonCrick: "Specific H-bonding ensures A-T and G-C only"
                },
                
                chargaffsRules: {
                    rule1: "[Adenine] = [Thymine]",
                    rule2: "[Guanine] = [Cytosine]",
                    corollary: "[Purines] = [Pyrimidines]",
                    discoverer: "Erwin Chargaff (1950)",
                    significance: "Provided crucial clue to base pairing before structure solved",
                    exception: "Applies to double-stranded DNA, not single-stranded",
                    example: "If DNA is 30% A, then 30% T, leaving 40% for G and C (20% each)"
                }
            },
            
            stabilization: {
                hydrogenBonding: {
                    role: "Holds complementary strands together",
                    number: "Millions of H-bonds along DNA length",
                    collective: "Individually weak, collectively very strong"
                },
                
                baseStacking: {
                    definition: "Van der Waals interactions between adjacent stacked bases",
                    orientation: "Bases stack flat, parallel to each other, perpendicular to helix axis",
                    forces: "Hydrophobic interactions, π-π stacking, van der Waals",
                    contribution: "Major contributor to DNA stability (more than H-bonds!)",
                    energy: "~1-2 kcal/mol per stacking interaction",
                    context: "Sequence-dependent (varies with base composition)"
                },
                
                hydrophobicEffect: {
                    principle: "Hydrophobic bases stack inside helix, away from water",
                    backbone: "Hydrophilic sugar-phosphate backbone faces outward",
                    result: "Energetically favorable in aqueous environment",
                    analogy: "Like oil droplet forming in water"
                },
                
                ionicInteractions: {
                    phosphates: "Negatively charged phosphate groups",
                    cations: "Neutralized by Mg²⁺, K⁺, Na⁺, polyamines, histones",
                    shielding: "Reduces electrostatic repulsion between strands",
                    requirement: "DNA unstable without salt/cations"
                }
            }
        },
        
        DNAforms: {
            BDNA: {
                name: "B-DNA (B-form)",
                description: "Most common form in cells under physiological conditions",
                handedness: "Right-handed helix",
                basePairsPerTurn: "10.5 base pairs",
                helixDiameter: "~2.0 nm",
                rise: "0.34 nm per base pair",
                pitch: "3.4 nm per turn",
                grooves: "Wide major groove, narrow minor groove",
                baseOrientation: "Nearly perpendicular to helix axis",
                conditions: "High humidity, physiological salt concentration",
                predominance: "~95% of DNA in vivo"
            },
            
            ADNA: {
                name: "A-DNA (A-form)",
                description: "Shorter, wider helix",
                handedness: "Right-handed helix",
                basePairsPerTurn: "11 base pairs",
                helixDiameter: "~2.3 nm (wider than B)",
                rise: "0.26 nm per base pair (more compact)",
                pitch: "2.8 nm per turn",
                grooves: "Very deep, narrow major groove; shallow minor groove",
                baseOrientation: "Tilted ~20° from perpendicular",
                conditions: "Dehydrated DNA, low humidity, high salt",
                occurrence: "RNA-DNA hybrids, some RNA duplexes",
                biological: "May form transiently during transcription"
            },
            
            ZDNA: {
                name: "Z-DNA (Z-form)",
                description: "Left-handed helix (opposite handedness)",
                handedness: "Left-handed helix (zig-zag backbone)",
                basePairsPerTurn: "12 base pairs",
                helixDiameter: "~1.8 nm (slimmer than B)",
                rise: "0.38 nm per base pair",
                backbone: "Zig-zag pattern (hence 'Z')",
                grooves: "Single deep groove (no distinct major/minor)",
                sequences: "Alternating purine-pyrimidine (especially CG repeats)",
                conditions: "High salt, negative supercoiling, specific sequences",
                biological: [
                    "Forms transiently during transcription",
                    "May play role in gene regulation",
                    "Z-DNA binding proteins exist (ZBP, ADAR1)",
                    "Associated with transcriptionally active regions"
                ],
                discovery: "Alexander Rich, 1979"
            },
            
            comparison: {
                handedness: "B and A are right-handed; Z is left-handed",
                stability: "B-DNA most stable under normal conditions",
                transitions: "DNA can switch between forms depending on conditions",
                biological: "B-DNA predominates; A and Z exist in specific contexts"
            }
        },
        
        DNADenaturation: {
            definition: "Separation of double-stranded DNA into two single strands",
            process: {
                mechanism: "Breaking hydrogen bonds between complementary bases",
                methods: "Heat, high pH, low salt, chemical denaturants",
                result: "Single-stranded DNA (ssDNA)"
            },
            
            meltingTemperature: {
                definition: "Tm = Temperature at which 50% of DNA is denatured",
                factors: [
                    "GC content: Higher GC% → higher Tm (3 H-bonds vs 2)",
                    "DNA length: Longer DNA → higher Tm (more bonds to break)",
                    "Salt concentration: Higher salt → higher Tm (shields charges)",
                    "pH: Extreme pH → lower Tm (disrupts H-bonds)"
                ],
                formula: "Tm (°C) ≈ 81.5 + 0.41(%GC) - 675/length (for short DNA in 1M NaCl)",
                measurement: "Monitor UV absorbance at 260 nm (increases upon denaturation)",
                curve: "Sigmoidal curve (cooperative transition)"
            },
            
            hyperchromicEffect: {
                observation: "UV absorbance increases upon denaturation",
                mechanism: "Base stacking quenches UV absorption; unstacking increases it",
                change: "~40% increase in A₂₆₀ from native to denatured",
                use: "Monitor denaturation by measuring absorbance at 260 nm"
            },
            
            renaturation: {
                definition: "Reformation of double helix from single strands",
                process: "Cool denatured DNA slowly",
                mechanism: "Complementary strands find each other, base pair reforms",
                requirement: "Slow cooling for proper base pairing",
                fastCooling: "Prevents proper renaturation (single strands persist)",
                specificity: "Highly specific - only complementary sequences reanneal"
            },
            
            applications: [
                "PCR: denature DNA, then polymerase extends primers",
                "Southern blotting: denature DNA, hybridize with probe",
                "DNA sequencing: denature template",
                "Tm analysis: determine GC content",
                "Studying DNA stability and structure"
            ]
        },
        
        DNAvsRNA: {
            sugar: {
                DNA: "2'-deoxyribose (no -OH at 2' carbon)",
                RNA: "Ribose (has -OH at 2' carbon)",
                consequence: "DNA more stable; RNA susceptible to alkaline hydrolysis"
            },
            
            bases: {
                DNA: "Adenine, Guanine, Cytosine, Thymine",
                RNA: "Adenine, Guanine, Cytosine, Uracil (instead of T)",
                difference: "Thymine has methyl group; Uracil does not",
                pairing: "DNA: A-T; RNA: A-U"
            },
            
            structure: {
                DNA: "Usually double-stranded (ds-DNA)",
                RNA: "Usually single-stranded (ss-RNA)",
                exception: "Some viruses have ss-DNA or ds-RNA",
                RNAsecondary: "RNA can fold into complex secondary structures (hairpins, loops)"
            },
            
            stability: {
                DNA: "Very stable (lacks 2'-OH)",
                RNA: "Less stable (2'-OH attacks phosphodiester bond in alkaline pH)",
                consequence: "DNA for long-term storage; RNA for temporary messages"
            },
            
            function: {
                DNA: "Genetic information storage and transmission",
                RNA: "Multiple: mRNA (message), tRNA (translation), rRNA (ribosome), regulatory RNAs"
            },
            
            size: {
                DNA: "Very long (millions to billions of bp)",
                RNA: "Shorter (hundreds to thousands of nucleotides)"
            }
        },
        
        supercoiling: {
            definition: "Over- or under-winding of DNA double helix",
            
            types: {
                positive: {
                    definition: "Overwound DNA (additional turns)",
                    direction: "Right-handed coiling (same as helix)",
                    effect: "Increases tension, destabilizes helix",
                    occurrence: "Ahead of replication fork, transcription bubble"
                },
                negative: {
                    definition: "Underwound DNA (fewer turns)",
                    direction: "Left-handed coiling (opposite to helix)",
                    effect: "Facilitates strand separation",
                    occurrence: "Bacterial plasmids, behind replication fork",
                    biology: "Most naturally occurring supercoiling is negative"
                }
            },
            
            biologicalSignificance: {
                packaging: "Allows DNA to fit in small spaces (nucleoid, nucleus)",
                regulation: "Affects gene expression and DNA accessibility",
                replication: "Helicase creates positive supercoils ahead; need topoisomerase",
                transcription: "RNA polymerase creates supercoils"
            },
            
            topoisomerases: {
                function: "Relieve supercoiling by cutting and rejoining DNA",
                typeI: "Cuts one strand, allows rotation, religates",
                typeII: "Cuts both strands, passes another DNA through, religates (DNA gyrase)",
                importance: "Essential for replication and transcription",
                drugs: "Quinolones (antibiotics) and camptothecins (anti-cancer) target topoisomerases"
            }
        },
        
        chromosomalDNA: {
            prokaryotes: {
                structure: "Single circular chromosome (usually)",
                location: "Nucleoid region (no membrane)",
                size: "E. coli: ~4.6 million bp",
                packaging: "Supercoiled, associated with nucleoid proteins",
                plasmids: "Small circular DNA molecules (separate from chromosome)"
            },
            
            eukaryotes: {
                structure: "Multiple linear chromosomes",
                location: "Nucleus (membrane-bound)",
                number: "Varies by species (humans: 46 chromosomes, 23 pairs)",
                size: "Human genome: ~3.2 billion bp",
                packaging: "Wrapped around histones → nucleosomes → chromatin → chromosomes",
                endCaps: "Telomeres protect chromosome ends"
            },
            
            mitochondrial: {
                structure: "Small circular chromosome",
                size: "Human mtDNA: ~16,500 bp",
                genes: "37 genes (13 proteins, 22 tRNAs, 2 rRNAs)",
                inheritance: "Maternal inheritance (from egg)",
                mutation: "Higher mutation rate (no histones, less repair)"
            }
        },
        
        DNAquantification: {
            UVSpectroscopy: {
                wavelength: "260 nm (DNA absorbs maximally)",
                calculation: "1 OD₂₆₀ unit ≈ 50 μg/mL ds-DNA",
                purity: {
                    "260/280ratio": "Pure DNA ≈ 1.8 (protein contam. lowers ratio)",
                    "260/230ratio": "Pure DNA ≈ 2.0-2.2 (salt/organic contam. lowers ratio)"
                },
                advantage: "Fast, non-destructive",
                limitation: "Cannot distinguish DNA from RNA; needs pure sample"
            },
            
            fluorometry: {
                dyes: "PicoGreen, SYBR Green (DNA-specific fluorescent dyes)",
                principle: "Dye binds DNA, fluoresces; intensity proportional to DNA amount",
                advantage: "More sensitive than UV, more specific",
                application: "Quantify low concentrations, in presence of RNA"
            },
            
            gelElectrophoresis: {
                method: "Compare band intensity to known standards",
                use: "Estimate amount and size simultaneously",
                limitation: "Semi-quantitative"
            }
        },
        
        applications: [
            "Understanding genetic inheritance",
            "DNA sequencing and genomics",
            "PCR and molecular cloning",
            "Drug design (targeting DNA)",
            "Forensic DNA analysis",
            "Understanding mutations and diseases",
            "Biotechnology and genetic engineering",
            "Evolutionary biology (DNA as molecular clock)",
            "DNA nanotechnology (using DNA as building material)"
        ],
        
        historicalMilestones: [
            "1869: Friedrich Miescher isolates 'nuclein' from white blood cells",
            "1919: Phoebus Levene identifies components (base, sugar, phosphate)",
            "1950: Chargaff's rules (A=T, G=C)",
            "1951-52: Rosalind Franklin's X-ray crystallography (Photo 51)",
            "1953: Watson & Crick publish double helix structure",
            "1962: Nobel Prize to Watson, Crick, Wilkins",
            "1980s: Z-DNA discovered",
            "Ongoing: DNA structure variations and biological roles continue to be discovered"
        ]
    };
    
    return content;
}

/**handleDNAReplication(problem) {
    const content = {
        topic: "DNA Replication",
        category: 'molecular_processes',
        summary: "DNA replication is the process by which a cell duplicates its DNA before cell division, ensuring each daughter cell receives a complete copy of genetic information. It is semiconservative (each new DNA has one old and one new strand), bidirectional, and highly accurate due to proofreading mechanisms.",
        
        replicationModels: {
            historical: "After Watson-Crick structure (1953), three models proposed",
            
            semiconservative: {
                description: "Each new DNA molecule has one original (parental) strand and one newly synthesized strand",
                mechanism: "Double helix unwinds; each strand serves as template for new complementary strand",
                proposedBy: "Watson and Crick (1953)",
                proven: "Meselson-Stahl experiment (1958)",
                result: "Two DNA molecules, each with one old and one new strand",
                accuracy: "Template directs accurate synthesis",
                analogy: "Unzip jacket, build new side on each old side"
            },
            
            conservative: {
                description: "Original double helix remains intact; entirely new double helix synthesized",
                mechanism: "Unknown mechanism to copy entire molecule without unwinding",
                result: "One all-old DNA molecule and one all-new DNA molecule",
                disproven: "Meselson-Stahl showed hybrid DNA after one replication",
                analogy: "Photocopy machine - original unchanged"
            },
            
            dispersive: {
                description: "DNA breaks into fragments, reassembles with mix of old and new throughout",
                mechanism: "Fragmentation and reunion",
                result: "All DNA molecules are patchwork of old and new segments",
                disproven: "Meselson-Stahl showed discrete bands, not gradual density shift",
                analogy: "Shredding and randomly reassembling"
            },
            
            experimentalProof: "Meselson-Stahl (1958) definitively proved semiconservative model"
        },
        
        replicationOrigins: {
            definition: "Specific DNA sequences where replication begins",
            
            prokaryotic: {
                origin: "Single origin of replication (oriC)",
                location: "E. coli chromosome: oriC at specific site",
                size: "~250 bp with specific sequence motifs",
                recognition: "DnaA protein recognizes and binds oriC",
                DnaBoxes: "9 bp repeats recognized by DnaA",
                ATrich: "AT-rich region (easier to unwind)",
                frequency: "Once per cell cycle (regulated)",
                speed: "~1000 nucleotides/second",
                time: "E. coli: ~40 minutes to replicate 4.6 Mb genome"
            },
            
            eukaryotic: {
                origins: "Multiple origins of replication (hundreds to thousands)",
                necessity: "Large genomes require multiple origins for timely replication",
                humans: "~30,000-50,000 origins in human genome",
                spacing: "Origins spaced ~30-300 kb apart",
                recognition: "ORC (Origin Recognition Complex) binds origins",
                sequence: "AT-rich consensus sequences (less conserved than prokaryotes)",
                regulation: "Ensures each origin fires only once per S phase",
                speed: "~50 nucleotides/second (slower than prokaryotes)",
                time: "S phase: ~8 hours to replicate human genome",
                coordination: "Origins don't all fire simultaneously; temporal program"
            },
            
            replicationBubble: {
                formation: "Replication origin opens, forms 'bubble'",
                forks: "Two replication forks move bidirectionally from origin",
                expansion: "Bubble expands as forks move apart",
                merging: "Adjacent bubbles merge as forks meet",
                visualization: "Can see bubbles in electron microscopy"
            }
        },
        
        enzymesAndProteins: {
            initiatorProteins: {
                prokaryotic: {
                    DnaA: {
                        function: "Recognizes and binds oriC",
                        action: "ATP-dependent; opens DNA at AT-rich region",
                        oligomerization: "Forms complex at origin",
                        regulation: "Activity controlled to prevent re-replication"
                    }
                },
                eukaryotic: {
                    ORC: {
                        fullName: "Origin Recognition Complex",
                        subunits: "Six-subunit complex (Orc1-6)",
                        function: "Binds replication origins throughout cell cycle",
                        timing: "Licenses origins in G1, fires in S phase"
                    },
                    MCM: {
                        fullName: "Minichromosome Maintenance complex",
                        function: "Helicase activity (MCM2-7)",
                        loading: "Loaded onto DNA in G1 (licensing)",
                        activation: "Activated in S phase to unwind DNA"
                    }
                }
            },
            
            helicase: {
                function: "Unwinds DNA double helix by breaking hydrogen bonds",
                mechanism: "ATP hydrolysis powers separation of strands",
                direction: "Moves along DNA directionally (3'→5' or 5'→3' depending on helicase)",
                prokaryotic: "DnaB helicase in E. coli",
                eukaryotic: "MCM2-7 complex",
                speed: "~1000 bp/sec (prokaryotes)",
                result: "Creates replication fork with single-stranded DNA (ssDNA) templates",
                energy: "Uses ATP hydrolysis"
            },
            
            singleStrandBindingProteins: {
                abbreviation: "SSB proteins (prokaryotes); RPA (eukaryotes)",
                function: "Bind and stabilize single-stranded DNA",
                prevention: "Prevents ssDNA from",                    reannealing: "Re-forming hydrogen bonds with complementary strand",
                    secondaryStructure: "Forming hairpin loops",
                    nucleaseDegradation: "Being degraded by nucleases"
                },
                binding: "Cooperative binding (one SSB recruits others)",
                removal: "Displaced as DNA polymerase synthesizes new strand",
                prokaryotic: "SSB protein in E. coli",
                eukaryotic: "RPA (Replication Protein A)"
            },
            
            topoisomerase: {
                problem: "DNA unwinding creates tension (positive supercoiling) ahead of replication fork",
                function: "Relieves torsional strain by cutting and rejoining DNA strands",
                
                typeI: {
                    mechanism: "Cuts one DNA strand, allows rotation around intact strand, religates",
                    change: "Changes linking number by ±1",
                    energy: "Does not require ATP",
                    examples: "Topoisomerase I (prokaryotes and eukaryotes)"
                },
                
                typeII: {
                    mechanism: "Cuts both strands, passes another DNA duplex through gap, religates",
                    change: "Changes linking number by ±2",
                    energy: "Requires ATP",
                    examples: "DNA gyrase (prokaryotes), Topoisomerase II (eukaryotes)",
                    DNAgyrase: "Introduces negative supercoils (unique to bacteria)"
                },
                
                importance: "Essential; replication cannot proceed without topoisomerases",
                drugs: "Antibiotics (quinolones target gyrase), anticancer drugs (target topo II)"
            },
            
            primase: {
                function: "Synthesizes short RNA primers to initiate DNA synthesis",
                type: "RNA polymerase (doesn't require primer)",
                necessity: "DNA polymerase cannot start synthesis de novo; needs 3'-OH group",
                primerLength: "8-12 ribonucleotides",
                frequency: {
                    leadingStrand: "One primer at origin",
                    laggingStrand: "One primer per Okazaki fragment (every ~1000-2000 nt)"
                },
                prokaryotic: "DnaG primase",
                eukaryotic: "Pol α-primase complex (has both primase and DNA polymerase activity)",
                removal: "Primers removed and replaced with DNA later"
            },
            
            DNApolymerase: {
                generalFunction: "Synthesizes new DNA strand by adding nucleotides",
                
                properties: {
                    direction: "Synthesis only in 5' → 3' direction",
                    requirement: "Requires primer with 3'-OH group (cannot start de novo)",
                    substrate: "dNTPs (dATP, dGTP, dCTP, dTTP)",
                    template: "Reads template strand in 3' → 5' direction",
                    mechanism: "Nucleophilic attack by 3'-OH on α-phosphate of incoming dNTP",
                    energy: "Energy from hydrolysis of pyrophosphate (PPi) released from dNTP",
                    processivity: "Number of nucleotides added before dissociating"
                },
                
                prokaryotic: {
                    PolI: {
                        fullName: "DNA Polymerase I",
                        function: "Removes primers, fills gaps",
                        domains: "5'→3' exonuclease, 3'→5' exonuclease, polymerase",
                        KlenowFragment: "Large fragment (pol + 3'→5' exo); used in research",
                        processivity: "Low (~20-100 nt)",
                        molecules: "~400 per cell"
                    },
                    PolII: {
                        fullName: "DNA Polymerase II",
                        function: "DNA repair",
                        role: "Backup replication, restart stalled forks"
                    },
                    PolIII: {
                        fullName: "DNA Polymerase III",
                        function: "Main replicative enzyme",
                        processivity: "Very high (~500,000 nt without dissociating)",
                        speed: "~1000 nt/sec",
                        holoenzyme: "Complex with multiple subunits",
                        coreEnzyme: "α (polymerase), ε (3'→5' exonuclease), θ",
                        βclamp: "Sliding clamp (processivity factor)",
                        τcomplex: "Couples leading and lagging strand synthesis"
                    }
                },
                
                eukaryotic: {
                    Polα: {
                        fullName: "DNA Polymerase α (alpha)",
                        function: "Initiates synthesis (primase activity)",
                        complex: "Pol α-primase complex",
                        processivity: "Low",
                        proofreading: "None (no 3'→5' exonuclease)",
                        role: "Synthesizes short RNA-DNA primer (~30 nt)"
                    },
                    Polδ: {
                        fullName: "DNA Polymerase δ (delta)",
                        function: "Lagging strand synthesis",
                        processivity: "High (with PCNA)",
                        proofreading: "Yes (3'→5' exonuclease)",
                        PCNA: "Proliferating Cell Nuclear Antigen (sliding clamp)",
                        speed: "~50 nt/sec"
                    },
                    Polε: {
                        fullName: "DNA Polymerase ε (epsilon)",
                        function: "Leading strand synthesis",
                        processivity: "High",
                        proofreading: "Yes (3'→5' exonuclease)",
                        speed: "~50 nt/sec"
                    },
                    Polγ: {
                        fullName: "DNA Polymerase γ (gamma)",
                        function: "Mitochondrial DNA replication",
                        location: "Mitochondria only",
                        proofreading: "Yes"
                    },
                    others: "Pol β, ζ, η, etc. (DNA repair and translesion synthesis)"
                },
                
                proofreading: {
                    activity: "3' → 5' exonuclease activity",
                    mechanism: "Removes mismatched nucleotide from 3' end",
                    process: [
                        "Pol adds incorrect nucleotide",
                        "Mismatched base pair detected (geometric distortion)",
                        "Pol pauses, backs up",
                        "3'→5' exonuclease removes incorrect nucleotide",
                        "Pol adds correct nucleotide"
                    ],
                    errorReduction: "Reduces errors from ~1 in 10⁵ to ~1 in 10⁷",
                    essential: "Critical for replication fidelity"
                }
            },
            
            DNAligase: {
                function: "Joins Okazaki fragments by sealing nicks in DNA backbone",
                mechanism: "Forms phosphodiester bond between 3'-OH and 5'-phosphate",
                reaction: "AMP or NAD⁺ dependent (depending on organism)",
                prokaryotic: "NAD⁺-dependent DNA ligase",
                eukaryotic: "ATP-dependent DNA ligase I (replication), ligase III & IV (repair)",
                timing: "After RNA primers removed and gaps filled by DNA pol",
                importance: "Essential for completing DNA synthesis on lagging strand",
                deficiency: "Ligase defects cause genome instability"
            },
            
            slidingClamp: {
                function: "Keeps DNA polymerase attached to DNA (processivity factor)",
                structure: "Ring-shaped protein that encircles DNA",
                prokaryotic: "β-clamp (beta clamp) - homodimer",
                eukaryotic: "PCNA (Proliferating Cell Nuclear Antigen) - homotrimer",
                loading: "Clamp loader (γ complex in prokaryotes, RFC in eukaryotes) opens ring, loads onto DNA",
                effect: "Increases processivity 100-1000 fold",
                analogy: "Like a donut sliding along DNA, tethering polymerase"
            }
        },
        
        replicationProcess: {
            initiation: {
                steps: [
                    "Recognition of origin of replication",
                    "Binding of initiator proteins (DnaA/ORC)",
                    "Local unwinding of DNA at AT-rich region",
                    "Loading of helicase onto DNA",
                    "Formation of pre-replication complex (pre-RC)",
                    "Helicase activation and DNA unwinding",
                    "Formation of replication forks"
                ],
                
                prokaryotic: [
                    "DnaA binds to DnaA boxes at oriC",
                    "DnaA-ATP oligomerizes, wraps DNA",
                    "DNA unwinds at AT-rich region",
                    "DnaB helicase loaded by DnaC (helicase loader)",
                    "DnaC released, DnaB unwinds DNA",
                    "SSB binds ssDNA",
                    "Primase (DnaG) synthesizes RNA primers",
                    "DNA Pol III holoenzyme begins synthesis"
                ],
                
                eukaryotic: [
                    "G1 phase: ORC binds origins",
                    "Cdc6 and Cdt1 recruit MCM2-7 helicase (licensing)",
                    "S phase: DDK and CDK phosphorylate pre-RC",
                    "MCM2-7 activated (becomes active helicase)",
                    "Cdc45 and GINS associate with MCM (CMG complex)",
                    "DNA unwound, RPA binds ssDNA",
                    "Pol α-primase synthesizes RNA-DNA primer",
                    "Pol ε (leading) and Pol δ (lagging) take over synthesis"
                ],
                
                regulation: {
                    prokaryotic: "SeqA binds hemimethylated oriC, prevents re-initiation",
                    eukaryotic: "Licensing only in G1; CDK prevents re-licensing in S/G2"
                }
            },
            
 
            elongation: {
                replicationFork: {
                    structure: "Y-shaped structure where DNA unwinds",
                    components: [
                        "Helicase unwinding DNA at fork",
                        "SSB/RPA coating ssDNA",
                        "Leading strand polymerase synthesizing continuously",
                        "Lagging strand polymerase synthesizing discontinuously",
                        "Primase making primers on lagging strand",
                        "Topoisomerase relieving tension ahead"
                    ],
                    directionality: "Both forks move away from origin"
                },
                
                leadingStrand: {
                    definition: "Strand synthesized continuously in direction of fork movement",
                    template: "3' → 5' template strand",
                    synthesis: "Continuous 5' → 3' synthesis toward fork",
                    primers: "One RNA primer at origin",
                    polymerase: "Pol III (prokaryotes), Pol ε (eukaryotes)",
                    processivity: "Very high (thousands of nucleotides)",
                    simplicity: "Straightforward continuous synthesis"
                },
                
                laggingStrand: {
                    definition: "Strand synthesized discontinuously, away from fork movement",
                    template: "5' → 3' template strand",
                    synthesis: "Discontinuous 5' → 3' synthesis away from fork",
                    primers: "Multiple RNA primers (one per Okazaki fragment)",
                    fragments: "Okazaki fragments",
                    polymerase: "Pol III (prokaryotes), Pol δ (eukaryotes)",
                    complexity: "More complex; requires primer synthesis, removal, ligation",
                    
                    OkazakiFragments: {
                        definition: "Short DNA segments synthesized on lagging strand",
                        prokaryotes: "1000-2000 nucleotides long",
                        eukaryotes: "100-200 nucleotides long",
                        discoverer: "Reiji and Tsuneko Okazaki (1968)",
                        structure: "RNA primer (5' end) + DNA (rest of fragment)",
                        synthesis: [
                            "Primase synthesizes RNA primer",
                            "Pol III/δ extends primer (synthesizes DNA)",
                            "Next primer synthesized downstream",
                            "Pol encounters previous primer, dissociates",
                            "Pol I/δ removes primer, fills gap",
                            "DNA ligase seals nick"
                        ]
                    }
                },
                
                primerRemoval: {
                    prokaryotes: "Pol I 5'→3' exonuclease removes RNA, Pol I fills gap",
                    eukaryotes: "RNase H removes most of primer, FEN1 (flap endonuclease) removes rest, Pol δ fills gap",
                    ligation: "DNA ligase seals final nick"
                },
                
                coordination: {
                    coupling: "Leading and lagging strand synthesis coordinated",
                    replisome: "Large protein complex containing all replication enzymes",
                    prokaryotic: "τ complex couples two Pol III cores (one for each strand)",
                    looping: "Lagging strand template loops out (trombone model)",
                    synchronization: "Both strands synthesized at same rate overall"
                }
            },
            
            termination: {
                prokaryotic: {
                    location: "Opposite side of circular chromosome from oriC (~ter region)",
                    terSites: "Termination sequences (Ter sites)",
                    Tus: "Tus protein binds Ter sites, blocks helicase",
                    mechanism: "Forks from opposite directions meet at ter",
                    catenanes: "Linked circular DNA molecules formed",
                    resolution: "Topoisomerase IV separates catenated chromosomes"
                },
                
                eukaryotic: {
                    forkConvergence: "Forks from adjacent origins meet",
                    telomeres: "Special problem at linear chromosome ends",
                    lastFragments: "Last RNA primer cannot be replaced (no 3' DNA to extend from)",
                    shortening: "Chromosomes shorten with each replication",
                    telomeraseSolution: "Telomerase adds repeats to 3' end (discussed below)"
                }
            }
        },
        
        telomereProblem: {
            issue: "DNA polymerase cannot fully replicate 5' end of linear chromosomes",
            
            mechanism: {
                laggingStrand: "Last Okazaki fragment leaves gap at 5' end",
                primerRemoval: "When last RNA primer removed, no upstream DNA to extend from",
                result: "3' overhang and shortened 5' end",
                consequence: "Chromosome shortens by ~50-200 bp each replication"
            },
            
            hayflickLimit: {
                observation: "Somatic cells divide ~50 times then stop (Leonard Hayflick, 1961)",
                cause: "Telomere shortening limits divisions",
                mechanism: "Critically short telomeres trigger senescence or apoptosis",
                aging: "Telomere shortening associated with cellular aging"
            },
            
            telomeres: {
                definition: "Repetitive DNA sequences at chromosome ends",
                function: "Protect coding sequences from degradation",
                sequence: {
                    humans: "TTAGGG repeats (5-15 kb)",
                    yeast: "TG₁₋₃ repeats",
                    other: "Varies but always G-rich on 3' strand"
                },
                structure: "3' overhang (100-200 nt in humans)",
                Tloop: "3' end invades double-stranded region, forms loop",
                shelterinComplex: "Protects telomere from DNA damage response"
            },
            
            telomerase: {
                definition: "Enzyme that extends telomeres",
                type: "Reverse transcriptase (RNA-dependent DNA polymerase)",
                components: {
                    TERT: "Telomerase Reverse Transcriptase (protein, catalytic subunit)",
                    TERC: "Telomerase RNA Component (template RNA)",
                    other: "Associated proteins (dyskerin, etc.)"
                },
                
                mechanism: [
                    "Telomerase binds to 3' overhang of telomere",
                    "TERC RNA template (e.g., 3'-AAUCCC-5' in humans) base pairs with DNA",
                    "TERT adds nucleotides complementary to RNA template",
                    "Extends 3' end by adding TTAGGG repeats",
                    "Telomerase translocates, repeats process",
                    "Primase can then synthesize primer on extended template",
                    "DNA polymerase fills in complementary strand"
                ],
                
                expression: {
                    germCells: "High activity (maintain telomeres across generations)",
                    stemCells: "Moderate to high activity (maintain replicative potential)",
                    somaticCells: "Low or absent (telomeres shorten with division)",
                    cancerCells: "Reactivated in ~85-90% of cancers (enables unlimited division)"
                },
                
                implications: {
                    aging: "Telomere shortening contributes to organismal aging",
                    cancer: "Telomerase reactivation hallmark of cancer",
                    therapy: "Telomerase inhibitors as anti-cancer drugs",
                    regeneration: "Telomerase activation could extend cell lifespan (risks cancer)"
                }
            },
            
            ALT: {
                fullName: "Alternative Lengthening of Telomeres",
                mechanism: "Recombination-based telomere maintenance",
                occurrence: "~10-15% of cancers lacking telomerase",
                process: "Homologous recombination between telomeres"
            }
        },
        
        fidelity: {
            importance: "Accurate replication essential to prevent mutations",
            
            errorSources: {
                tautomericShifts: "Rare tautomeric forms of bases cause mispairing",
                slippage: "Polymerase slips in repetitive sequences",
                damage: "Unrepaired DNA damage in template",
                incorporation: "Wrong dNTP occasionally incorporated"
            },
            
            fidelityMechanisms: {
                baseSelection: {
                    mechanism: "DNA polymerase active site favors Watson-Crick base pairs",
                    geometry: "Correct pairs fit better in active site",
                    errorRate: "~1 error per 10⁴-10⁵ nucleotides"
                },
                
                proofreading: {
                    mechanism: "3'→5' exonuclease removes mismatched nucleotide",
                    process: "Pol detects mismatch, backs up, removes error, continues",
                    errorReduction: "~100-fold improvement",
                    errorRate: "~1 error per 10⁶-10⁷ nucleotides"
                },
                
                mismatchRepair: {
                    timing: "Post-replication repair system",
                    mechanism: "Scans newly replicated DNA for mismatches",
                    proteins: "MutS (recognizes mismatch), MutL, MutH (prokaryotes); MSH, MLH, PMS (eukaryotes)",
                    strand: "Identifies newly synthesized strand (hemimethylated DNA in E. coli)",
                    process: "Excises error, resynthesizes",
                    errorReduction: "~100-1000 fold improvement",
                    finalErrorRate: "~1 error per 10⁹-10¹⁰ nucleotides"
                }
            },
            
            overallAccuracy: {
                spontaneousMutationRate: "~1 × 10⁻⁹ to 10⁻¹⁰ per bp per cell division",
                humanGenome: "~3 × 10⁹ bp → ~0.3-3 mutations per cell division",
                significance: "Extremely accurate; most mutations avoided"
            }
        },
        
        regulation: {
            cellCycle: {
                SPhase: "DNA replication occurs in S phase",
                G1: "Licensing (pre-RC assembly)",
                transition: "G1/S cyclins and CDKs trigger replication",
                onceOnly: "Each origin fires only once per cell cycle"
            },
            
            checkpoints: {
                G1_S: "Checks for DNA damage, adequate resources",
                intraS: "Monitors replication fork progress",
                G2_M: "Ensures replication complete before mitosis",
                damage: "ATM/ATR kinases activate checkpoints if problems detected"
            },
            
            licensing: {
                mechanism: "Ensures replication occurs once per cycle",
                G1: "MCM2-7 loaded onto chromatin (licensed origins)",
                S_G2_M: "CDK activity prevents re-licensing",
                geminin: "Inhibits Cdt1 (blocks MCM loading) in S/G2",
                result: "Origins cannot be re-licensed until next G1"
            }
        },
        
        applications: [
            "Understanding cancer (mutations from replication errors)",
            "PCR (polymerase chain reaction) - uses DNA polymerase",
            "DNA sequencing (Sanger, next-gen sequencing)",
            "Studying aging (telomere shortening)",
            "Drug development (targeting replication in cancer/bacteria)",
            "Synthetic biology (designing replication systems)",
            "Evolutionary studies (mutation rates)",
            "Genetic disorders (replication/repair defects)"
        ],
        
        clinicalRelevance: {
            cancerTherapies: "Drugs targeting replication (5-FU, methotrexate, cisplatin)",
            antibiotics: "Quinolones target bacterial DNA gyrase",
            progeria: "Accelerated aging syndromes involve replication/repair defects",
            Lynch: "Lynch syndrome - mismatch repair gene mutations → colon cancer",
            telomeraseInhibitors: "Experimental cancer therapy"
        }
    };
    
    return content;
}
*/

handleDNARepair(problem) {
    const content = {
        topic: "DNA Repair Mechanisms",
        category: 'molecular_processes',
        summary: "Cells have evolved multiple DNA repair pathways to detect and correct DNA damage. These mechanisms are essential for maintaining genome integrity, preventing mutations, and avoiding cancer. Different repair systems handle different types of damage.",
        
        typesOfDNADamage: {
            spontaneous: {
                depurination: {
                    definition: "Loss of purine base (A or G) from DNA",
                    mechanism: "Hydrolysis of N-glycosidic bond between base and sugar",
                    frequency: "~10,000 purines lost per human cell per day",
                    result: "Apurinic site (AP site) - 'missing tooth' in DNA",
                    consequence: "Can lead to mutations if not repaired"
                },
                
                deamination: {
                    cytosineToUracil: "Cytosine → Uracil (most common)",
                    adenineToHypoxanthine: "Adenine → Hypoxanthine",
                    mechanism: "Loss of amino group (-NH₂)",
                    frequency: "~100-500 cytosines deaminated per cell per day",
                    problem: "U pairs with A instead of G (C normally pairs with G)",
                    detection: "Uracil doesn't belong in DNA; specific glycosylases remove it"
                },
                
                oxidativeDamage: {
                    source: "Reactive oxygen species (ROS) from metabolism",
                    common: "8-oxoguanine (8-oxoG)",
                    problem: "8-oxoG pairs with A instead of C",
                    frequency: "~10,000 oxidative lesions per cell per day",
                    repair: "Base excision repair"
                },
                
                replicationErrors: {
                    misincorporation: "Wrong nucleotide added (~1 in 10⁴-10⁵ initially)",
                    slippage: "In repetitive sequences (microsatellites)",
                    proofreading: "Reduces to ~1 in 10⁷",
                    mismatchRepair: "Further reduces to ~1 in 10⁹-10¹⁰"
                }
            },
            
            induced: {
                UVradiation: {
                    source: "Sunlight (UVB 280-320 nm)",
                    damage: "Thymine dimers (cyclobutane pyrimidine dimers)",
                    mechanism: "Adjacent thymines form covalent bonds",
                    consequence: "Blocks replication and transcription",
                    repair: "Nucleotide excision repair",
                    disease: "Xeroderma pigmentosum (XP) - defective NER → skin cancer"
                },
                
                ionizingRadiation: {
                    source: "X-rays, gamma rays, cosmic radiation",
                    damage: "Double-strand breaks (DSBs), base modifications",
                    mechanism: "High-energy radiation breaks DNA backbone",
                    severity: "DSBs very dangerous (can lose genetic info)",
                    repair: "Homologous recombination or non-homologous end joining"
                },
                
                chemicalMutagens: {
                    alkylatingAgents: "Add alkyl groups to bases (EMS, MMS)",
                    intercalatingAgents: "Insert between bases (ethidium bromide)",
                    baseAnalogs: "Incorporated as wrong base (5-bromouracil)",
                    bulkyAdducts: "Large chemical groups attached (aflatoxin, benzo[a]pyrene)"
                }
            }
        },
        
        repairMechanisms: {
            directReversal: {
                description: "Damage reversed in single step",
                
                photoreactivation: {
                    enzyme: "Photolyase (DNA photolyase)",
                    damage: "Thymine dimers from UV",
                    mechanism: [
                        "Photolyase binds thymine dimer",
                        "Absorbs blue light (350-450 nm)",
                        "Electron transfer breaks covalent bonds",
                        "Restores normal thymines"
                    ],
                    occurrence: "Bacteria, plants, many animals (NOT humans)",
                    speed: "Very fast and efficient"
                },
                
                alkyltransferases: {
                    enzyme: "O⁶-methylguanine-DNA methyltransferase (MGMT)",
                    damage: "Alkylated bases (O⁶-methylguanine)",
                    mechanism: "Transfers alkyl group to cysteine in enzyme",
                    suicide: "Enzyme inactivated after one reaction (suicidal enzyme)",
                    importance: "Prevents G-C → A-T transitions"
                }
            },
            
            baseExcisionRepair: {
                abbreviation: "BER",
                damage: "Modified/damaged single bases (oxidation, deamination, alkylation)",
                frequency: "Repairs ~10,000-20,000 lesions per cell per day",
                
                mechanism: [
                    "DNA glycosylase recognizes and removes damaged base",
                    "Cleaves N-glycosidic bond, creates AP site",
                    "AP endonuclease cleaves phosphodiester backbone at AP site",
                    "DNA polymerase β removes deoxyribose phosphate, inserts correct nucleotide",
                    "DNA ligase seals nick"
                ],
                
                glycosylases: {
                    function: "Specific for different types of damaged bases",
                    examples: {
                        UDG: "Uracil-DNA glycosylase (removes uracil)",
                        OGG1: "8-oxoguanine glycosylase",
                        MPG: "Methylpurine glycosylase",
                        TDG: "Thymine-DNA glycosylase"
                    },
                    specificity: "Each glycosylase recognizes specific lesion"
                },
                
                variants: {
                    shortPatch: "Single nucleotide replaced (most common)",
                    longPatch: "2-10 nucleotides replaced"
                }
            },
            
            nucleotideExcisionRepair: {
                abbreviation: "NER",
                damage: "Bulky DNA lesions (thymine dimers, chemical adducts)",
                distortion: "Lesions that distort double helix",
                
                mechanism: [
                    "Damage recognition (different mechanisms for GG-NER vs TC-NER)",
                    "DNA unwinding around lesion (~30 bp)",
                    "Dual incisions: 5' side (3-5 nt from lesion) and 3' side (15-24 nt from lesion)",
                    "Excision of ~24-32 nt oligonucleotide containing damage",
                    "DNA polymerase fills gap",
                    "DNA ligase seals nick"
                ],
                
                subPathways: {
                    globalGenome: {
                        abbreviation: "GG-NER",
                        recognition: "XPC-RAD23B complex recognizes helix distortion",
                        scope: "Scans entire genome",
                        speed: "Slower"
                    },
                    transcriptionCoupled: {
                        abbreviation: "TC-NER",
                        recognition: "Stalled RNA polymerase II signals damage",
                        scope: "Actively transcribed genes only",
                        speed: "Faster (priority repair)",
                        advantage: "Protects actively expressed genes"
                    }
                },
                
                proteins: {
                    prokaryotic: "UvrA, UvrB, UvrC, UvrD (helicase)",
                    eukaryotic: "XPA-XPG proteins, TFIIH, RPA, etc.",
                    complexity: "~30 proteins involved in human NER"
                },
                
                disease: {
                    xerodermaPigmentosum: {
                        abbreviation: "XP",
                        defect: "Mutations in XP genes (XPA-XPG, XPV)",
                        symptoms: "Extreme UV sensitivity, skin cancer, neurological problems",
                        frequency: "Rare (~1 in 250,000)",
                        groups: "8 complementation groups (XP-A through XP-G, XP-Variant)",
                        outcome: "1000x increased skin cancer risk"
                    },
                    cockayne: "Cockayne syndrome - TC-NER defect, growth/neurological problems",
                    trichothiodystrophy: "TTD - TFIIH defect, brittle hair, developmental issues"
                }
            },
            
            mismatchRepair: {
                abbreviation: "MMR",
                damage: "Base-base mismatches, insertion-deletion loops",
                timing: "Post-replicative repair",
                importance: "Corrects DNA polymerase errors missed by proofreading",
                
                mechanism: [
                    "MutS (MSH2-MSH6 in eukaryotes) recognizes mismatch",
                    "MutL (MLH1-PMS2) binds, activates",
                    "Strand discrimination (identify newly synthesized strand)",
                    "MutH cleaves newly synthesized strand (E. coli)",
                    "Exonuclease degrades strand from nick through mismatch",
                    "DNA polymerase fills gap",
                    "DNA ligase seals nick"
                ],
                
                strandDiscrimination: {
                    prokaryotes: "Hemimethylation - old strand methylated at GATC, new not yet",
                    eukaryotes: "Nick or gap in newly synthesized strand, other mechanisms unclear"
                },
                
                proteins: {
                    prokaryotic: "MutS, MutL, MutH, exonucleases, pol III, ligase",
                    eukaryotic: "MSH2-MSH6 (MutSα), MSH2-MSH3 (MutSβ), MLH1-PMS2, exonuclease 1"
                },
                
                disease: {
                    Lynch: {
                        fullName: "Lynch syndrome (Hereditary Nonpolyposis Colorectal Cancer)",
                        defect: "Mutations in MMR genes (MLH1, MSH2, MSH6, PMS2)",
                        consequence: "Microsatellite instability (MSI)",
                        cancers: "Colorectal, endometrial, ovarian, others",
                        frequency: "~1 in 300-400 people",
                        penetrance: "70-80% lifetime cancer risk",
                        detection: "MSI testing in tumors"
                    }
                },
                
                microsatelliteInstability: {
                    definition: "Changes in length of repetitive DNA sequences",
                    cause: "Slippage during replication, not repaired if MMR defective",
                    marker: "Sign of MMR deficiency",
                    testing: "MSI-H (high) indicates MMR defect"
                }
            },
            
            doubleStrandBreakRepair: {
                severity: "DSBs very dangerous - can cause mutations, translocations, cell death",
                sources: "Ionizing radiation, replication fork collapse, reactive oxygen species",
                
                homologousRecombination: {
                    abbreviation: "HR",
                    template: "Uses sister chromatid as template (error-free)",
                    timing: "S and G2 phases (when sister chromatid available)",
                    accuracy: "Very accurate",
                    
                    mechanism: [
                        "End resection: 5' ends degraded, leaving 3' overhangs",
                        "RAD51 coats ssDNA, searches for homologous sequence",
                        "Strand invasion: 3' end invades homologous duplex (sister chromatid)",
                        "D-loop formation",
                        "DNA synthesis using sister chromatid as template",
                        "Resolution: Holiday junction resolved, restores sequence"
                    ],
                    
                    proteins: "RAD51, RAD52, RAD54, BRCA1, BRCA2, MRN complex",
                    
                    advantage: "Accurate; restores original sequence",
                    limitation: "Requires homologous template"
                },
                
                nonHomologousEndJoining: {
                    abbreviation: "NHEJ",
                    template: "No template used; just joins ends",
                    timing: "G1 and throughout cell cycle",
                    accuracy: "Error-prone (small deletions/insertions common)",
                    
                    mechanism: [
                        "Ku70/Ku80 protein binds DNA ends",
                        "DNA-PKcs recruited, holds ends together",
                        "End processing (remove damaged nucleotides)",
                        "DNA ligase IV + XRCC4 + XLF ligate ends"
                    ],
                    
                    proteins: "Ku70/80, DNA-PKcs, Artemis, XRCC4, DNA ligase IV, XLF",
                    
                    advantage: "Fast; doesn't require homologous template",
                    disadvantage: "Error-prone; loses genetic information"
                },
                
                choiceOfPathway: {
                    cellCycle: "HR in S/G2 (sister available), NHEJ in G1",
                    endResection: "Extensive resection favors HR",
                    evolution: "NHEJ faster, HR more accurate"
                },
                
                disease: {
                    breastOvarianCancer: "BRCA1/BRCA2 mutations impair HR → cancer",
                    SCID: "Severe Combined Immunodeficiency - NHEJ defects",
                    ataxiaTelangiectasia: "ATM deficiency - DSB signaling defect"
                }
            },
            
            translesionSynthesis: {
                abbreviation: "TLS",
                scenario: "When replication fork encounters unrepaired lesion",
                problem: "Normal polymerases stall at lesion",
                solution: "Specialized TLS polymerases can bypass lesion",
                
                mechanism: [
                    "Replication fork stalls at lesion",
                    "Polymerase switch: replicative pol replaced by TLS pol",
                    "TLS pol inserts nucleotide opposite lesion (often inaccurate)",
                    "TLS pol extends a few nucleotides",
                    "Polymerase switch: replicative pol resumes"
                ],
                
                polymerases: {
                    Polη: "Bypasses thymine dimers accurately",
                    Polι: "Bypasses various lesions",
                    Polκ: "Bypasses bulky lesions",
                    REV1: "Inserts C opposite abasic sites"
                },
                
                errorProne: "TLS often introduces mutations (price of survival)",
                
                XPV: {
                    disease: "Xeroderma pigmentosum variant",
                    defect: "Pol η deficiency",
                    consequence: "Cannot bypass thymine dimers accurately → mutations"
                }
            }
        },
        
        coordination: {
            damageDetection: {
                sensors: "Checkpoint proteins (ATM, ATR, DNA-PK)",
                signal: "Phosphorylation cascades activate repair and checkpoints",
                outcome: "Cell cycle arrest, repair activation, or apoptosis"
            },
            
            cellCycleCheckpoints: {
                G1_S: "Check for DNA damage before replication",
                intraS: "Slow replication if damage detected",
                G2_M: "Ensure repair complete before mitosis",
                p53: "Tumor suppressor; activates repair, cell cycle arrest, or apoptosis"
            },
            
            apoptosis: {
                trigger: "Extensive DNA damage beyond repair capacity",
                mechanism: "Programmed cell death to eliminate damaged cell",
                benefit: "Prevents transmission of mutations to daughter cells"
            }
        },
        
        clinicalRelevance: {
            cancer: {
                repairDefects: "Inherited or acquired defects in repair genes → cancer predisposition",
                examples: "Lynch (MMR), BRCA (HR), XP (NER), Li-Fraumeni (p53)",
                therapy: "PARP inhibitors in BRCA-mutant cancers (synthetic lethality)"
            },
            
            chemotherapy: {
                mechanism: "Many drugs damage DNA (cisplatin, alkylating agents)",
                resistance: "Upregulation of repair can cause resistance",
                strategy: "Combine DNA-damaging drugs with repair inhibitors"
            },
            
            aging: {
                accumulation: "DNA damage accumulates with age",
                decline: "Repair capacity declines with age",
                contribution: "DNA damage contributes to aging phenotypes"
            }
        },
        
        applications: [
            "Understanding cancer predisposition syndromes",
            "Developing cancer therapies (PARP inhibitors, checkpoint inhibitors)",
            "Assessing mutagenicity of chemicals",
            "Studying aging mechanisms",
            "Improving radiation therapy",
            "Genetic counseling and testing",
            "Personalized medicine (targeting repair-deficient tumors)"
        ]
    };
    
    return content;
}

handleChromatinOrganization(problem) {
    const lesson = this.lessons.chromatin_organization;
    return {
        topic: "Chromatin and Chromosome Organization",
        ...lesson
    };
}

handleGeneticCode(problem) {
    const lesson = this.lessons.genetic_code;
    return {
        topic: "The Genetic Code",
        ...lesson
    };
}

handleMutations(problem) {
    const lesson = this.lessons.mutations;
    return {
        topic: "DNA Mutations and Their Effects",
        ...lesson
    };
}

handleGeneExpression(problem) {
    const content = {
        topic: "Gene Expression and Regulation",
        category: 'information_flow',
        summary: "Gene expression is the process by which information from a gene is used to synthesize functional gene products (proteins or RNAs). Regulation of gene expression allows cells to respond to their environment and controls development, differentiation, and cellular function.",
        
        centralDogma: {
            flow: "DNA → RNA → Protein",
            transcription: "DNA → RNA (in nucleus, eukaryotes)",
            translation: "RNA → Protein (on ribosomes)",
            exceptions: {
                retroviruses: "RNA → DNA (reverse transcription)",
                RNAreplication: "RNA → RNA (RNA viruses)",
                noncodingRNA: "Some genes encode functional RNAs, not proteins"
            }
        },
        
        transcription: {
            definition: "Synthesis of RNA from DNA template",
            enzymes: "RNA polymerase",
            direction: "5' → 3' RNA synthesis; reads template 3' → 5'",
            
            stages: {
                initiation: "RNA polymerase binds promoter, opens DNA",
                elongation: "RNA polymerase adds nucleotides complementary to template",
                termination: "RNA polymerase dissociates at terminator sequence"
            }
        },
        
        regulationLevels: {
            transcriptional: "Control of RNA synthesis (most important level)",
            postTranscriptional: "RNA processing, stability, localization",
            translational: "Control of protein synthesis from mRNA",
            postTranslational: "Protein modification, localization, degradation",
            epigenetic: "Heritable changes without DNA sequence changes"
        },
        
        applications: [
            "Understanding development and differentiation",
            "Cancer research (oncogene activation, tumor suppressor inactivation)",
            "Biotechnology (controlling gene expression)",
            "Synthetic biology (designing regulatory circuits)",
            "Personalized medicine (gene expression profiling)",
            "Drug development (targeting transcription factors)"
        ]
    };
    
    return content;
}

handleDNATechnology(problem) {
    const content = {
        topic: "DNA Technology and Techniques",
        category: 'biotechnology',
        summary: "DNA technology encompasses laboratory techniques for analyzing, manipulating, and engineering DNA. These methods have revolutionized biology, medicine, and biotechnology, enabling applications from genetic diagnostics to synthetic biology.",
        
        techniques: {
            PCR: "Polymerase Chain Reaction - amplifies specific DNA sequences",
            gelElectrophoresis: "Separates DNA by size",
            restrictionEnzymes: "Cut DNA at specific sequences",
            DNAsequencing: "Determines nucleotide sequence",
            cloning: "Insert DNA into vectors for replication",
            CRISPR: "Genome editing tool",
            southernBlot: "Detects specific DNA sequences",
            microarrays: "Analyze gene expression",
            nextGenSequencing: "High-throughput sequencing"
        },
        
        applications: [
            "Medical diagnostics (genetic testing, disease detection)",
            "Forensics (DNA fingerprinting, paternity testing)",
            "Agriculture (GMOs, crop improvement)",
            "Research (gene function studies)",
            "Biotechnology (protein production, pharmaceuticals)",
            "Synthetic biology (designing organisms)",
            "Evolutionary studies (phylogenetics)",
            "Personalized medicine (pharmacogenomics)"
        ]
    };
    
    return content;
}


// ========================================
// MAIN PROBLEM PROCESSING METHODS
// ========================================

parseDNAProblem(topic, parameters = {}, subTopic = null, context = {}) {
    let topicType = null;

    // Match topic to handler
    for (const [type, config] of Object.entries(this.dnaTopics)) {
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
        throw new Error(`Unable to recognize DNA/genetics topic: ${topic}`);
    }

    return {
        originalTopic: topic,
        type: topicType,
        subTopic: subTopic,
        parameters: { ...parameters },
        context: { ...context },
        difficulty: this.dnaTopics[topicType].difficulty,
        prerequisites: this.dnaTopics[topicType].prerequisites,
        parsedAt: new Date().toISOString()
    };
}

handleDNAProblem(config) {
    const { topic, parameters, subTopic, context, requestType } = config;

    try {
        const isExperimentRequest = requestType === 'experiment' || 
                                   (typeof topic === 'string' && topic.toLowerCase().includes('experiment'));

        if (isExperimentRequest) {
            return this.handleDNAExperimentRequest(config);
        } else {
            this.currentProblem = this.parseDNAProblem(topic, parameters, subTopic, context);
            this.currentContent = this.getDNAContent(this.currentProblem);
            
            if (this.adaptiveDifficulty) {
                this.currentContent = this.adaptContentDifficulty(this.currentContent, this.learnerProfile.currentLevel);
            }
            
            if (this.contextualLearning) {
                this.currentContent.contextualScenarios = this.getContextualScenarios(this.currentProblem.type);
            }
            
            if (this.includeExperiments) {
                this.currentContent.relatedExperiments = this.getRelatedDNAExperiments(this.currentProblem.type);
            }
            
            if (this.metacognitiveSupport) {
                this.currentContent.metacognitivePrompts = this.getMetacognitivePrompts(this.currentProblem.type);
            }
            
            this.contentSteps = this.generateDNAContent(this.currentProblem, this.currentContent);
            
            // Generate workbook (handles async internally)
            this.generateDNAWorkbook();

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
        throw new Error(`Failed to process DNA request: ${error.message}`);
    }
}

getDNAContent(problem) {
    const handler = this.dnaTopics[problem.type]?.handler;
    if (!handler) {
        throw new Error(`No handler available for DNA topic: ${problem.type}`);
    }

    let content = handler(problem);

    // Apply parameter filtering if parameters are provided
    if (problem.parameters && Object.keys(problem.parameters).length > 0) {
        content = this.filterContentByParameters(content, problem.parameters);
    }

    return content;
}

handleDNAExperimentRequest(config) {
    const { topic, parameters, experimentId } = config;

    if (experimentId && this.dnaExperiments[experimentId]) {
        this.currentExperiment = this.dnaExperiments[experimentId];
    } else {
        this.currentExperiment = this.findDNAExperimentByTopic(topic);
    }

    if (!this.currentExperiment) {
        throw new Error(`No DNA experiment found for: ${topic}`);
    }

    const experimentContent = this.generateDNAExperimentContent(this.currentExperiment, parameters);
    this.generateDNAExperimentWorkbook(experimentContent);

    return {
        experiment: this.currentExperiment,
        content: experimentContent,
        workbook: this.currentWorkbook,
        getDiagrams: () => this.waitForDiagrams()
    };
}

findDNAExperimentByTopic(topic) {
    const topicLower = topic.toLowerCase();
    
    for (const [id, exp] of Object.entries(this.dnaExperiments)) {
        if (exp.name.toLowerCase().includes(topicLower)) {
            return exp;
        }
    }

    for (const [id, exp] of Object.entries(this.dnaExperiments)) {
        if (exp.relatedTopics.some(t => topicLower.includes(t.toLowerCase()))) {
            return exp;
        }
    }

    return null;
}

generateDNAExperimentContent(experiment, parameters = {}) {
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

    if (experiment.classicExperiment) {
        content.sections.push({
            type: 'classic_experiment',
            title: 'Classic Experiment',
            data: this.formatClassicExperiment(experiment.classicExperiment)
        });
    }

    if (experiment.modernLabExperiment) {
        content.sections.push({
            type: 'modern_lab',
            title: 'Modern Laboratory Version',
            data: this.formatModernLabExperiment(experiment.modernLabExperiment)
        });
    }

    return content;
}

formatClassicExperiment(classicExp) {
    const formatted = [];

    if (classicExp.title) {
        formatted.push(['Experiment', classicExp.title]);
        formatted.push(['', '']);
    }

    // Format each phase/part of the classic experiment
    Object.entries(classicExp).forEach(([key, value]) => {
        if (key === 'title') return; // Already handled

        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            formatted.push([this.formatKey(key).toUpperCase(), '']);
            
            Object.entries(value).forEach(([subKey, subValue]) => {
                if (subKey === 'procedure' && Array.isArray(subValue)) {
                    formatted.push(['  Procedure:', '']);
                    subValue.forEach((step, idx) => {
                        formatted.push([`    ${idx + 1}.`, step]);
                    });
                } else if (subKey === 'results' && typeof subValue === 'object') {
                    formatted.push(['  Results:', '']);
                    Object.entries(subValue).forEach(([resKey, resValue]) => {
                        formatted.push([`    ${this.formatKey(resKey)}:`, resValue]);
                    });
                } else if (Array.isArray(subValue)) {
                    formatted.push([`  ${this.formatKey(subKey)}:`, '']);
                    subValue.forEach(item => formatted.push(['    •', item]));
                } else {
                    formatted.push([`  ${this.formatKey(subKey)}:`, subValue]);
                }
            });
            formatted.push(['', '']);
        } else if (Array.isArray(value)) {
            formatted.push([this.formatKey(key) + ':', '']);
            value.forEach(item => formatted.push(['  •', item]));
            formatted.push(['', '']);
        } else {
            formatted.push([this.formatKey(key), value]);
        }
    });

    return formatted;
}

formatModernLabExperiment(modernLab) {
    const formatted = [];

    if (modernLab.title) {
        formatted.push(['Modern Lab Version', modernLab.title]);
        formatted.push(['', '']);
    }

    if (modernLab.purpose) {
        formatted.push(['Purpose', modernLab.purpose]);
        formatted.push(['', '']);
    }

    if (modernLab.materials) {
        formatted.push(['Materials', '']);
        modernLab.materials.forEach(material => {
            formatted.push(['  •', material]);
        });
        formatted.push(['', '']);
    }

    if (modernLab.procedure) {
        formatted.push(['Procedure', '']);
        if (Array.isArray(modernLab.procedure)) {
            modernLab.procedure.forEach((step, idx) => {
                if (step.trim() === '') {
                    formatted.push(['', '']);
                } else if (step.includes(':') && step === step.toUpperCase()) {
                    formatted.push([step, '']);
                } else {
                    formatted.push([`  ${idx + 1}.`, step]);
                }
            });
        }
        formatted.push(['', '']);
    }

    if (modernLab.expectedResults) {
        formatted.push(['Expected Results', '']);
        Object.entries(modernLab.expectedResults).forEach(([key, value]) => {
            formatted.push([`  ${this.formatKey(key)}:`, value]);
        });
        formatted.push(['', '']);
    }

    if (modernLab.dataTable && Array.isArray(modernLab.dataTable)) {
        formatted.push(['Data Analysis', '']);
        modernLab.dataTable.forEach(row => {
            if (Array.isArray(row)) {
                formatted.push([row[0] || '', row[1] || '']);
            }
        });
        formatted.push(['', '']);
    }

    if (modernLab.analysis) {
        formatted.push(['Analysis', '']);
        if (Array.isArray(modernLab.analysis)) {
            modernLab.analysis.forEach(point => formatted.push(['  •', point]));
        } else if (typeof modernLab.analysis === 'object') {
            Object.entries(modernLab.analysis).forEach(([key, value]) => {
                formatted.push([`  ${this.formatKey(key)}:`, '']);
                if (Array.isArray(value)) {
                    value.forEach(item => formatted.push(['    -', item]));
                } else {
                    formatted.push(['    ', value]);
                }
            });
        }
    }

    return formatted;
}

getRelatedDNAExperiments(topicType) {
    const related = [];
    
    Object.entries(this.dnaExperiments).forEach(([id, experiment]) => {
        if (experiment.relatedTopics.includes(topicType)) {
            related.push({
                id: id,
                name: experiment.name,
                category: experiment.category,
                historicalScientist: experiment.historicalBackground?.scientist || experiment.historicalBackground?.scientists,
                year: experiment.historicalBackground?.year,
                labTitle: experiment.labExperiment?.title || experiment.modernLabExperiment?.title
            });
        }
    });

    return related;
}

// ========================================
// CONTENT GENERATION METHODS
// ========================================

generateDNAContent(problem, content) {
    const contentSections = [];

    // Generate overview section
    contentSections.push(this.generateDNAOverviewSection(problem, content));

    // Generate specific content sections based on content structure
    if (content.nucleotideStructure || content.components) {
        contentSections.push(this.generateDNAStructureSection(content));
    }

    if (content.doubleHelixStructure || content.doubleHelix) {
        contentSections.push(this.generateDoubleHelixSection(content));
    }

    if (content.replicationProcess || content.enzymesAndProteins) {
        contentSections.push(this.generateReplicationSection(content));
    }

    if (content.repairMechanisms || content.typesOfDNADamage) {
        contentSections.push(this.generateRepairSection(content));
    }

    if (content.nucleosomeStructure || content.chromatinLevels) {
        contentSections.push(this.generateChromatinSection(content));
    }

    if (content.codonTable || content.codeProperties) {
        contentSections.push(this.generateGeneticCodeSection(content));
    }

    if (content.pointMutations || content.chromosomalMutations) {
        contentSections.push(this.generateMutationsSection(content));
    }

    // Add comparisons if available
    if (content.comparison || content.DNAvsRNA) {
        contentSections.push(this.generateDNAComparisonsSection(content));
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

generateDNAOverviewSection(problem, content) {
    return {
        type: 'overview',
        title: content.topic || 'DNA Biology Overview',
        data: {
            topic: content.topic,
            category: content.category,
            summary: content.summary,
            difficulty: problem.difficulty,
            prerequisites: problem.prerequisites,
            relevance: this.getDNATopicRelevance(problem.type),
            keyPoints: this.extractDNAKeyPoints(content)
        }
    };
}

generateDNAStructureSection(content) {
    const data = [];
    
    if (content.nucleotideStructure) {
        data.push(['NUCLEOTIDE COMPONENTS', '']);
        
        if (content.nucleotideStructure.components) {
            Object.entries(content.nucleotideStructure.components).forEach(([key, value]) => {
                data.push([this.formatKey(key), '']);
                if (typeof value === 'object') {
                    this.flattenObject(value, data, '  ');
                } else {
                    data.push(['  ', value]);
                }
                data.push(['', '']);
            });
        }
    }

    return {
        type: 'structure',
        title: 'DNA Structure',
        data: data
    };
}

generateDoubleHelixSection(content) {
    const data = [];
    
    if (content.doubleHelixStructure) {
        data.push(['DOUBLE HELIX STRUCTURE', '']);
        
        if (content.doubleHelixStructure.discovery) {
            data.push(['Discovery:', '']);
            Object.entries(content.doubleHelixStructure.discovery).forEach(([key, value]) => {
                if (Array.isArray(value)) {
                    data.push([`  ${this.formatKey(key)}:`, '']);
                    value.forEach(item => data.push(['    •', item]));
                } else {
                    data.push([`  ${this.formatKey(key)}:`, value]);
                }
            });
            data.push(['', '']);
        }

        if (content.doubleHelixStructure.structuralFeatures) {
            data.push(['Structural Features:', '']);
            Object.entries(content.doubleHelixStructure.structuralFeatures).forEach(([key, value]) => {
                data.push([`  ${this.formatKey(key)}:`, '']);
                if (typeof value === 'object') {
                    this.flattenObject(value, data, '    ');
                } else {
                    data.push(['    ', value]);
                }
            });
        }
    }

    return {
        type: 'double_helix',
        title: 'Double Helix Structure',
        data: data
    };
}

generateReplicationSection(content) {
    const data = [];
    
    if (content.replicationProcess) {
        data.push(['DNA REPLICATION PROCESS', '']);
        
        Object.entries(content.replicationProcess).forEach(([key, value]) => {
            data.push([this.formatKey(key).toUpperCase() + ':', '']);
            if (Array.isArray(value)) {
                value.forEach((step, idx) => data.push([`  ${idx + 1}.`, step]));
            } else if (typeof value === 'object') {
                this.flattenObject(value, data, '  ');
            } else {
                data.push(['  ', value]);
            }
            data.push(['', '']);
        });
    }

    if (content.enzymesAndProteins) {
        data.push(['KEY ENZYMES AND PROTEINS', '']);
        Object.entries(content.enzymesAndProteins).forEach(([enzyme, details]) => {
            data.push([this.formatKey(enzyme) + ':', '']);
            if (typeof details === 'object') {
                this.flattenObject(details, data, '  ');
            }
            data.push(['', '']);
        });
    }

    return {
        type: 'replication',
        title: 'DNA Replication',
        data: data
    };
}

generateRepairSection(content) {
    const data = [];
    
    if (content.typesOfDNADamage) {
        data.push(['TYPES OF DNA DAMAGE', '']);
        Object.entries(content.typesOfDNADamage).forEach(([damageType, details]) => {
            data.push([this.formatKey(damageType).toUpperCase(), '']);
            if (typeof details === 'object') {
                this.flattenObject(details, data, '  ');
            }
            data.push(['', '']);
        });
    }

    if (content.repairMechanisms) {
        data.push(['REPAIR MECHANISMS', '']);
        Object.entries(content.repairMechanisms).forEach(([mechanism, details]) => {
            data.push([this.formatKey(mechanism).toUpperCase(), '']);
            if (typeof details === 'object') {
                this.flattenObject(details, data, '  ');
            }
            data.push(['', '']);
        });
    }

    return {
        type: 'repair',
        title: 'DNA Repair Mechanisms',
        data: data
    };
}

generateChromatinSection(content) {
    const data = [];
    
    if (content.nucleosomeStructure) {
        data.push(['NUCLEOSOME STRUCTURE', '']);
        this.flattenObject(content.nucleosomeStructure, data, '  ');
        data.push(['', '']);
    }

    if (content.chromatinLevels) {
        data.push(['LEVELS OF CHROMATIN ORGANIZATION', '']);
        Object.entries(content.chromatinLevels).forEach(([level, details]) => {
            data.push([level.toUpperCase() + ':', '']);
            if (typeof details === 'object') {
                this.flattenObject(details, data, '  ');
            }
            data.push(['', '']);
        });
    }

    return {
        type: 'chromatin',
        title: 'Chromatin Organization',
        data: data
    };
}

generateGeneticCodeSection(content) {
    const data = [];
    
    if (content.codeProperties) {
        data.push(['PROPERTIES OF GENETIC CODE', '']);
        Object.entries(content.codeProperties).forEach(([property, details]) => {
            data.push([this.formatKey(property) + ':', '']);
            if (typeof details === 'object') {
                this.flattenObject(details, data, '  ');
            } else {
                data.push(['  ', details]);
            }
            data.push(['', '']);
        });
    }

    if (content.codonTable) {
        data.push(['CODON INFORMATION', '']);
        Object.entries(content.codonTable).forEach(([key, value]) => {
            data.push([this.formatKey(key) + ':', '']);
            if (typeof value === 'object') {
                this.flattenObject(value, data, '  ');
            } else {
                data.push(['  ', value]);
            }
            data.push(['', '']);
        });
    }

    return {
        type: 'genetic_code',
        title: 'The Genetic Code',
        data: data
    };
}

generateMutationsSection(content) {
    const data = [];
    
    if (content.pointMutations) {
        data.push(['POINT MUTATIONS', '']);
        Object.entries(content.pointMutations).forEach(([type, details]) => {
            data.push([this.formatKey(type) + ':', '']);
            if (typeof details === 'object') {
                this.flattenObject(details, data, '  ');
            }
            data.push(['', '']);
        });
    }

    if (content.chromosomalMutations) {
        data.push(['CHROMOSOMAL MUTATIONS', '']);
        Object.entries(content.chromosomalMutations).forEach(([type, details]) => {
            data.push([this.formatKey(type) + ':', '']);
            if (typeof details === 'object') {
                this.flattenObject(details, data, '  ');
            }
            data.push(['', '']);
        });
    }

    if (content.mutationCauses) {
        data.push(['CAUSES OF MUTATIONS', '']);
        Object.entries(content.mutationCauses).forEach(([category, causes]) => {
            data.push([this.formatKey(category) + ':', '']);
            if (typeof causes === 'object') {
                this.flattenObject(causes, data, '  ');
            }
            data.push(['', '']);
        });
    }

    return {
        type: 'mutations',
        title: 'DNA Mutations',
        data: data
    };
}

generateDNAComparisonsSection(content) {
    const data = [];
    
    if (content.DNAvsRNA) {
        data.push(['DNA VS RNA COMPARISON', '']);
        Object.entries(content.DNAvsRNA).forEach(([aspect, comparison]) => {
            data.push([this.formatKey(aspect) + ':', '']);
            if (typeof comparison === 'object') {
                Object.entries(comparison).forEach(([key, value]) => {
                    data.push([`  ${key}:`, value]);
                });
            } else {
                data.push(['  ', comparison]);
            }
            data.push(['', '']);
        });
    }

    if (content.comparison) {
        data.push(['OTHER COMPARISONS', '']);
        Object.entries(content.comparison).forEach(([key, value]) => {
            data.push([this.formatKey(key) + ':', '']);
            if (typeof value === 'object') {
                this.flattenObject(value, data, '  ');
            } else {
                data.push(['  ', value]);
            }
            data.push(['', '']);
        });
    }

    return {
        type: 'comparisons',
        title: 'Comparisons',
        data: data
    };
}

// ========================================
// WORKBOOK GENERATION METHODS
// ========================================

generateDNAWorkbook() {
    if (!this.currentContent || !this.currentProblem) return;

    const workbook = this.createWorkbookStructure();
    workbook.title = 'DNA Biology Workbook';

    // Start diagram generation in background if needed
    if (this.includeDiagramsInWorkbook) {
        this.diagramsPromise = this.generateDNADiagramDataAsync();
    }

    workbook.sections = [
        this.createProblemSection(),
        this.createContentOverviewSection(),
        this.createDetailedContentSection(),
        this.createDNADiagramsPlaceholderSection(),
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

generateDNAExperimentWorkbook(experimentContent) {
    const workbook = this.createWorkbookStructure();
    workbook.title = 'DNA Experiment Workbook';

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
                this.dnaTopics[topic]?.name || topic,
                this.dnaTopics[topic]?.description || ''
            ])
        });
    }

    this.currentWorkbook = workbook;
}

async generateDNADiagramDataAsync() {
    if (!this.currentContent) return;

    const { type } = this.currentProblem;

    // Get relevant diagram keys
    const diagramKeys = this.getRelevantDNADiagrams(type);

    this.diagramData = {
        type: type,
        diagrams: diagramKeys,
        renderedImages: [],
        status: 'rendering',
        placeholder: false,
        note: "DNA biology diagrams"
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

createDNADiagramsPlaceholderSection() {
    if (!this.includeDiagramsInWorkbook) {
        return null;
    }

    return {
        title: 'DNA Diagrams',
        type: 'diagrams',
        status: 'loading',
        diagrams: [],
        note: 'Diagrams are being rendered...'
    };
}

getRelevantDNADiagrams(topicType) {
    const diagramMap = {
        dna_structure: [
            "dnaStructure",
            "nucleotide",
            "basePairing",
            "doubleHelix"
        ],
        dna_replication: [
            "dnaReplication",
            "dnaStructure",
            "replicationFork",
            "enzymes"
        ],
        dna_repair: [
            "dnaStructure",
            "mutations",
            "repairMechanisms"
        ],
        chromatin_organization: [
            "chromosomes",
            "chromatin",
            "nucleosome",
            "cellStructure"
        ],
        genetic_code: [
            "codonChart",
            "transcription",
            "translation",
            "rnaStructure"
        ],
        mutations: [
            "dnaStructure",
            "mutations",
            "pointMutations",
            "chromosomalAberrations"
        ],
        gene_expression: [
            "transcription",
            "translation",
            "dnaStructure",
            "rnaStructure"
        ],
        dna_technology: [
            "pcrCycle",
            "gelElectrophoresis",
            "recombinantDNA",
            "dnaSequencing"
        ]
    };

    return diagramMap[topicType] || ["dnaStructure"];
}


// ========================================
// DIAGRAM RENDERING AND MANAGEMENT METHODS
// ========================================

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

createDNADiagramsPlaceholderSection() {
    if (!this.includeDiagramsInWorkbook) {
        return null;
    }

    return {
        title: 'DNA Diagrams',
        type: 'diagrams',
        status: 'loading',
        diagrams: [],
        note: 'Diagrams are being rendered...'
    };
}

updateDiagramsSection() {
    if (!this.currentWorkbook || !this.diagramData) return;

    // Find the diagrams section
    const diagramSectionIndex = this.currentWorkbook.sections.findIndex(
        section => section.type === 'diagrams'
    );

    if (diagramSectionIndex === -1) return;

    // Update the section with rendered diagrams
    const diagramSection = {
        title: 'DNA Diagrams',
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

// ========================================
// WORKBOOK SECTION GENERATION METHODS
// ========================================

createProblemSection() {
    if (!this.currentProblem) return null;

    return {
        title: 'Problem Overview',
        type: 'problem',
        data: [
            ['Topic', this.currentProblem.originalTopic],
            ['Type', this.currentProblem.type],
            ['Difficulty', this.currentProblem.difficulty],
            ['Prerequisites', this.currentProblem.prerequisites?.join(', ') || 'None'],
            ['', '']
        ]
    };
}

createContentOverviewSection() {
    if (!this.currentContent) return null;

    const data = [
        ['Topic', this.currentContent.topic || 'DNA Biology'],
        ['Category', this.currentContent.category || 'Genetics'],
        ['', ''],
        ['Summary', ''],
        ['', this.currentContent.summary || '']
    ];

    if (this.currentContent.keyPoints || this.extractDNAKeyPoints(this.currentContent).length > 0) {
        data.push(['', '']);
        data.push(['Key Points', '']);
        const keyPoints = this.currentContent.keyPoints || this.extractDNAKeyPoints(this.currentContent);
        keyPoints.forEach((point, idx) => {
            data.push([`  ${idx + 1}.`, point]);
        });
    }

    return {
        title: 'Content Overview',
        type: 'overview',
        data: data
    };
}

createDetailedContentSection() {
    if (!this.contentSteps || this.contentSteps.length === 0) return null;

    return {
        title: 'Detailed Content',
        type: 'detailed_content',
        subsections: this.contentSteps
    };
}

createComparisonsWorkbookSection() {
    if (!this.currentContent) return null;

    const comparisons = this.currentContent.comparison || 
                       this.currentContent.DNAvsRNA || 
                       this.currentContent.comparativeContext;

    if (!comparisons) return null;

    const data = [['Comparisons', ''], ['', '']];

    if (typeof comparisons === 'object') {
        Object.entries(comparisons).forEach(([key, value]) => {
            data.push([this.formatKey(key) + ':', '']);
            if (typeof value === 'object' && !Array.isArray(value)) {
                Object.entries(value).forEach(([subKey, subValue]) => {
                    data.push([`  ${subKey}:`, subValue]);
                });
            } else if (Array.isArray(value)) {
                value.forEach(item => data.push(['  •', item]));
            } else {
                data.push(['  ', value]);
            }
            data.push(['', '']);
        });
    }

    return {
        title: 'Comparisons',
        type: 'comparisons',
        data: data
    };
}

createExamplesApplicationsSection() {
    if (!this.currentContent) return null;

    const hasExamples = this.currentContent.examples && this.currentContent.examples.length > 0;
    const hasApplications = this.currentContent.applications && this.currentContent.applications.length > 0;

    if (!hasExamples && !hasApplications) return null;

    const data = [];

    if (hasExamples) {
        data.push(['Examples', '']);
        data.push(['', '']);
        this.currentContent.examples.forEach((example, idx) => {
            if (typeof example === 'object' && example.name) {
                data.push([`${idx + 1}. ${example.name}`, '']);
                Object.entries(example).forEach(([key, value]) => {
                    if (key !== 'name') {
                        data.push([`   ${this.formatKey(key)}:`, value]);
                    }
                });
            } else {
                data.push([`  ${idx + 1}.`, example]);
            }
        });
        data.push(['', '']);
    }

    if (hasApplications) {
        data.push(['Applications', '']);
        data.push(['', '']);
        this.currentContent.applications.forEach((app, idx) => {
            data.push([`  ${idx + 1}.`, app]);
        });
    }

    return {
        title: 'Examples and Applications',
        type: 'examples_applications',
        data: data
    };
}

createContextualScenariosWorkbookSection() {
    if (!this.currentContent?.contextualScenarios || this.currentContent.contextualScenarios.length === 0) {
        return null;
    }

    const data = [['Real-World Scenarios', ''], ['', '']];

    this.currentContent.contextualScenarios.forEach((scenario, idx) => {
        data.push([`Scenario ${idx + 1}: ${scenario.scenario}`, '']);
        data.push(['  Context:', scenario.context]);
        data.push(['  Application:', scenario.application]);
        data.push(['  Question:', scenario.question]);
        data.push(['', '']);
    });

    return {
        title: 'Contextual Scenarios',
        type: 'contextual_scenarios',
        data: data
    };
}

createRelatedExperimentsWorkbookSection() {
    if (!this.currentContent?.relatedExperiments || this.currentContent.relatedExperiments.length === 0) {
        return null;
    }

    const data = [['Related Experiments', ''], ['', '']];

    this.currentContent.relatedExperiments.forEach((exp, idx) => {
        data.push([`${idx + 1}. ${exp.name}`, '']);
        data.push(['   ID:', exp.id]);
        data.push(['   Category:', exp.category]);
        if (exp.historicalScientist) {
            data.push(['   Scientist:', exp.historicalScientist]);
        }
        if (exp.year) {
            data.push(['   Year:', exp.year]);
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
    if (!this.includeCommonMisconceptions || !this.currentProblem) return null;

    const misconceptions = this.commonMisconceptions[this.currentProblem.type];
    if (!misconceptions) return null;

    const data = [['Common Misconceptions', ''], ['', '']];

    Object.entries(misconceptions).forEach(([category, items]) => {
        data.push([category + ':', '']);
        items.forEach(misconception => {
            data.push(['  •', misconception]);
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
    if (!this.metacognitiveSupport || !this.currentContent?.metacognitivePrompts) return null;

    const data = [['Metacognitive Prompts', ''], ['', '']];

    if (this.currentContent.metacognitivePrompts.beforeLearning) {
        data.push(['Before Learning:', '']);
        this.currentContent.metacognitivePrompts.beforeLearning.forEach(prompt => {
            data.push(['  •', prompt]);
        });
        data.push(['', '']);
    }

    if (this.currentContent.metacognitivePrompts.duringLearning) {
        data.push(['During Learning:', '']);
        this.currentContent.metacognitivePrompts.duringLearning.forEach(prompt => {
            data.push(['  •', prompt]);
        });
        data.push(['', '']);
    }

    if (this.currentContent.metacognitivePrompts.afterLearning) {
        data.push(['After Learning:', '']);
        this.currentContent.metacognitivePrompts.afterLearning.forEach(prompt => {
            data.push(['  •', prompt]);
        });
    }

    return {
        title: 'Reflection Prompts',
        type: 'metacognitive',
        data: data
    };
}

createAssessmentSection() {
    if (!this.assessmentFeedback || !this.currentProblem) return null;

    const data = [['Learning Assessment', ''], ['', '']];

    // Add learning objectives
    const objectives = this.generateDNALearningObjectives();
    if (objectives.length > 0) {
        data.push(['Learning Objectives:', '']);
        objectives.forEach((obj, idx) => {
            data.push([`  ${idx + 1}.`, obj]);
        });
        data.push(['', '']);
    }

    // Add study tips
    const studyTips = this.generateDNAStudyTips();
    if (studyTips.length > 0) {
        data.push(['Study Tips:', '']);
        studyTips.forEach(tip => {
            data.push(['  •', tip]);
        });
        data.push(['', '']);
    }

    // Add prerequisites
    const prerequisites = this.identifyDNAPrerequisites();
    if (prerequisites.length > 0) {
        data.push(['Prerequisites:', '']);
        prerequisites.forEach(prereq => {
            data.push(['  •', prereq]);
        });
    }

    return {
        title: 'Assessment and Study Guide',
        type: 'assessment',
        data: data
    };
}

// ========================================
// ADDITIONAL HELPER METHODS
// ========================================

createWorkbookStructure() {
    return {
        title: 'DNA Biology Workbook',
        timestamp: new Date().toISOString(),
        theme: this.theme,
        dimensions: { width: this.width, height: this.height },
        learnerLevel: this.learnerProfile.currentLevel,
        sections: []
    };
}

// ========================================
// UTILITY AND HELPER METHODS
// ========================================

getAllDNAExperiments() {
    return Object.entries(this.dnaExperiments).map(([id, exp]) => ({
        id: id,
        name: exp.name,
        category: exp.category,
        relatedTopics: exp.relatedTopics,
        scientist: exp.historicalBackground?.scientist || exp.historicalBackground?.scientists,
        year: exp.historicalBackground?.year
    }));
}

getDNATopicRelevance(topicType) {
    const relevance = {
        dna_structure: "DNA structure is fundamental to understanding heredity and molecular biology",
        dna_replication: "DNA replication ensures accurate transmission of genetic information",
        dna_repair: "DNA repair mechanisms maintain genome integrity and prevent cancer",
        chromatin_organization: "Chromatin packaging regulates gene expression and chromosome function",
        genetic_code: "The genetic code translates DNA information into functional proteins",
        mutations: "Mutations are the source of genetic variation and can cause disease",
        gene_expression: "Gene expression regulation controls when and where genes are active",
        dna_technology: "DNA technology enables genetic analysis, medicine, and biotechnology"
    };

    return relevance[topicType] || "Important DNA/genetics concept";
}

suggestRelatedDNATopics() {
    if (!this.currentProblem) return [];

    const relatedTopicsMap = {
        dna_structure: ['dna_replication', 'genetic_code', 'mutations'],
        dna_replication: ['dna_structure', 'dna_repair', 'mutations'],
        dna_repair: ['dna_replication', 'mutations', 'chromatin_organization'],
        chromatin_organization: ['dna_structure', 'gene_expression'],
        genetic_code: ['dna_structure', 'gene_expression', 'mutations'],
        mutations: ['dna_structure', 'dna_repair', 'genetic_code'],
        gene_expression: ['genetic_code', 'chromatin_organization', 'dna_structure'],
        dna_technology: ['dna_structure', 'dna_replication', 'mutations']
    };

    const relatedTypes = relatedTopicsMap[this.currentProblem.type] || [];

    return relatedTypes.map(type => ({
        type: type,
        name: this.dnaTopics[type]?.name,
        description: this.dnaTopics[type]?.description
    }));
}

extractDNAKeyPoints(content) {
    const keyPoints = [];

    if (content.summary) keyPoints.push(content.summary);
    
    // Extract from various content structures
    if (content.nucleotideStructure?.components) {
        keyPoints.push("DNA is composed of nucleotides with three components: sugar, phosphate, and base");
    }

    if (content.doubleHelixStructure) {
        keyPoints.push("DNA forms a double helix with complementary base pairing");
    }

    if (content.replicationProcess) {
        keyPoints.push("DNA replication is semiconservative and highly accurate");
    }

    if (content.repairMechanisms) {
        keyPoints.push("Multiple repair mechanisms maintain DNA integrity");
    }

    if (content.codeProperties) {
        keyPoints.push("The genetic code is degenerate, unambiguous, and nearly universal");
    }

    return keyPoints.slice(0, 5);
}

generateDNAGlossary() {
    if (!this.currentContent) return {};

    const glossary = {};

    // Add key definitions
    if (this.currentContent.keyDefinitions) {
        Object.entries(this.currentContent.keyDefinitions).forEach(([term, definition]) => {
            glossary[term] = definition;
        });
    }

    // Extract from nucleotide structure
    if (this.currentContent.nucleotideStructure?.components) {
        const components = this.currentContent.nucleotideStructure.components;
        if (components.deoxyriboseSugar) {
            glossary['Deoxyribose'] = components.deoxyriboseSugar.name || 'Sugar component of DNA';
        }
        if (components.phosphateGroup) {
            glossary['Phosphate Group'] = 'Negatively charged component of DNA backbone';
        }
    }

    // Extract from genetic code
    if (this.currentContent.codonTable) {
        if (this.currentContent.codonTable.startCodon) {
            glossary['Start Codon'] = this.currentContent.codonTable.startCodon.sequence + ' - ' + 
                                      this.currentContent.codonTable.startCodon.function;
        }
    }

    return glossary;
}

generateDNAAnalogy(concept) {
    const analogies = {
        // DNA Structure
        nucleotide: "Like a LEGO block with three parts: base (color), sugar (connector), phosphate (link)",
        dna_helix: "Like a twisted ladder with sugar-phosphate sides and base pair rungs",
        base_pairing: "Like complementary puzzle pieces that only fit one way (A-T, G-C)",
        antiparallel: "Like two parallel roads with traffic flowing opposite directions",
        
        // DNA Replication
        semiconservative: "Like unzipping a jacket and building new sides on each old side",
        helicase: "Like a zipper unzipping the DNA double helix",
        dna_polymerase: "Like a construction worker adding new bricks, checking each one",
        proofreading: "Like a spell-checker catching and fixing mistakes immediately",
        
        // Chromatin
        nucleosome: "Like thread wrapped around a spool (histone proteins)",
        chromatin: "Like a rope that can be loosely or tightly coiled",
        chromosome: "Like a highly organized filing system storing genetic information",
        
        // Genetic Code
        codon: "Like a three-letter word spelling out an amino acid",
        genetic_code: "Like a language translating DNA words into protein sentences",
        mutation: "Like a typo that can range from harmless to devastating",
        
        // Gene Expression
        transcription: "Like making a temporary photocopy of instructions",
        translation: "Like following a recipe to bake a cake (make a protein)",
        
        // DNA Technology
        pcr: "Like a molecular photocopier making millions of copies",
        gel_electrophoresis: "Like a race where smaller molecules run faster",
        restriction_enzyme: "Like molecular scissors cutting at specific sequences",
        dna_sequencing: "Like reading the exact letters in the genetic instruction manual"
    };

    return analogies[concept] || "Performs a specialized function in genetics";
}

generateDNALearningObjectives() {
    if (!this.currentProblem) return [];

    const objectivesDatabase = {
        dna_structure: [
            "Describe the three components of a nucleotide",
            "Explain the complementary base pairing rules (A-T, G-C)",
            "Describe the antiparallel nature of DNA strands",
            "Explain how hydrogen bonding and base stacking stabilize the double helix",
            "Compare DNA and RNA structures"
        ],
        dna_replication: [
            "Explain the semiconservative model of DNA replication",
            "Describe the roles of key replication enzymes (helicase, primase, DNA polymerase, ligase)",
            "Distinguish between leading and lagging strand synthesis",
            "Explain how proofreading and mismatch repair ensure fidelity",
            "Describe the telomere problem and telomerase solution"
        ],
        dna_repair: [
            "Identify common types of DNA damage",
            "Describe different DNA repair mechanisms (BER, NER, MMR, DSB repair)",
            "Explain the consequences of defective DNA repair",
            "Relate DNA repair defects to cancer and genetic diseases"
        ],
        chromatin_organization: [
            "Describe the structure of a nucleosome",
            "Explain the levels of chromatin packaging",
            "Distinguish between euchromatin and heterochromatin",
            "Describe how histone modifications affect gene expression"
        ],
        genetic_code: [
            "Explain the properties of the genetic code (triplet, degenerate, unambiguous, universal)",
            "Use the codon table to translate mRNA to amino acid sequence",
            "Distinguish between start and stop codons",
            "Explain wobble base pairing and its significance"
        ],
        mutations: [
            "Classify mutations as point mutations or chromosomal mutations",
            "Distinguish between silent, missense, and nonsense mutations",
            "Explain how frameshift mutations affect protein sequence",
            "Describe causes of spontaneous and induced mutations",
            "Relate specific mutations to genetic diseases"
        ],
        gene_expression: [
            "Describe the central dogma (DNA → RNA → Protein)",
            "Explain transcription and translation processes",
            "Describe levels of gene regulation",
            "Relate gene expression changes to cell differentiation and disease"
        ],
        dna_technology: [
            "Explain the principles and applications of PCR",
            "Describe how gel electrophoresis separates DNA by size",
            "Explain how restriction enzymes are used in cloning",
            "Describe DNA sequencing methods and applications"
        ]
    };

    return objectivesDatabase[this.currentProblem.type] || [
        "Understand key DNA concepts",
        "Apply knowledge to genetic contexts",
        "Make connections between structure and function"
    ];
}

identifyDNAPrerequisites() {
    if (!this.currentProblem) return [];

    const prerequisitesDatabase = {
        dna_structure: [
            "Basic chemistry (atoms, bonds, molecules)",
            "Understanding of organic compounds",
            "Knowledge of hydrogen bonding"
        ],
        dna_replication: [
            "DNA structure",
            "Enzyme function",
            "Understanding of complementary base pairing"
        ],
        dna_repair: [
            "DNA structure",
            "DNA replication",
            "Types of mutations"
        ],
        chromatin_organization: [
            "DNA structure",
            "Protein structure",
            "Gene expression basics"
        ],
        genetic_code: [
            "DNA structure",
            "RNA structure",
            "Basic understanding of protein synthesis"
        ],
        mutations: [
            "DNA structure",
            "Genetic code",
            "Understanding of gene function"
        ],
        gene_expression: [
            "DNA structure",
            "Genetic code",
            "Understanding of transcription and translation"
        ],
        dna_technology: [
            "DNA structure",
            "DNA replication (for PCR)",
            "Understanding of molecular properties"
        ]
    };

    return prerequisitesDatabase[this.currentProblem.type] || [
        "Basic chemistry background",
        "General biology knowledge"
    ];
}

generateDNAStudyTips() {
    if (!this.currentProblem) return [];

    const studyTipsDatabase = {
        dna_structure: [
            "Build physical or digital DNA models to visualize 3D structure",
            "Practice drawing nucleotides and base pairing",
            "Use mnemonics: 'Apples in Trees' (A-T), 'Cars in Garages' (G-C)",
            "Create comparison tables for DNA vs RNA"
        ],
        dna_replication: [
            "Draw out replication fork with all enzymes labeled",
            "Practice distinguishing leading vs lagging strand",
            "Create flowcharts for each enzyme's role",
            "Work through the Meselson-Stahl experiment logic"
        ],
        dna_repair: [
            "Create a table of repair mechanisms and what damage they fix",
            "Draw out the steps of each repair pathway",
            "Relate repair defects to specific diseases",
            "Practice identifying types of DNA damage"
        ],
        chromatin_organization: [
            "Draw the levels of chromatin packaging progressively",
            "Build models of nucleosomes with play-doh or pipe cleaners",
            "Create comparison tables for euchromatin vs heterochromatin",
            "Practice calculating DNA compaction at each level"
        ],
        genetic_code: [
            "Practice using the codon table regularly",
            "Memorize start (AUG) and stop codons (UAA, UAG, UGA)",
            "Work through translation problems daily",
            "Understand wobble pairing at 3rd position"
        ],
        mutations: [
            "Practice predicting effects of different mutation types",
            "Create flowcharts showing how mutations affect proteins",
            "Work through real disease examples (sickle cell, etc.)",
            "Distinguish between germline and somatic mutations"
        ],
        gene_expression: [
            "Draw out central dogma with all steps",
            "Create comparison tables for transcription vs translation",
            "Practice tracing DNA → RNA → Protein",
            "Understand different levels of regulation"
        ],
        dna_technology: [
            "Watch videos of techniques being performed",
            "Practice interpreting gel images",
            "Draw out PCR cycles step-by-step",
            "Understand molecular basis of each technique"
        ]
    };

    return studyTipsDatabase[this.currentProblem.type] || [
        "Review material regularly with active recall",
        "Create visual aids and models",
        "Practice explaining concepts to others",
        "Relate concepts to real-world applications"
    ];
}

calculateDNAContentCompleteness() {
    if (!this.currentContent) return 0;

    let score = 0;
    const maxScore = 10;

    // Award points for different content aspects
    if (this.currentContent.topic) score += 1;
    if (this.currentContent.summary) score += 1;
    if (this.currentContent.examples) score += 1;
    if (this.currentContent.applications) score += 1;
    if (this.currentContent.comparison || this.currentContent.DNAvsRNA) score += 1;
    
    // Main content structures
    const hasMainContent = 
        this.currentContent.nucleotideStructure ||
        this.currentContent.doubleHelixStructure ||
        this.currentContent.replicationProcess ||
        this.currentContent.repairMechanisms ||
        this.currentContent.chromatinLevels ||
        this.currentContent.codeProperties ||
        this.currentContent.pointMutations;
    if (hasMainContent) score += 3;

    // Additional depth
    if (this.currentContent.keyDefinitions) score += 1;
    if (this.currentContent.contextualScenarios) score += 1;

    return Math.round((score / maxScore) * 100);
}

getDNAContentQualityMetrics() {
    return {
        completeness: this.calculateDNAContentCompleteness(),
        hasExamples: !!this.currentContent?.examples,
        hasComparisons: !!(this.currentContent?.comparison || this.currentContent?.DNAvsRNA),
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

// Helper method to flatten nested objects for workbook display
flattenObject(obj, data, prefix = '') {
    Object.entries(obj).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            data.push([`${prefix}${this.formatKey(key)}:`, '']);
            value.forEach(item => {
                if (typeof item === 'object') {
                    this.flattenObject(item, data, prefix + '  ');
                } else {
                    data.push([`${prefix}  •`, item]);
                }
            });
        } else if (typeof value === 'object' && value !== null) {
            data.push([`${prefix}${this.formatKey(key)}:`, '']);
            this.flattenObject(value, data, prefix + '  ');
        } else {
            data.push([`${prefix}${this.formatKey(key)}:`, value]);
        }
    });
}

// Helper to format keys nicely
formatKey(key) {
    return key
        .replace(/([A-Z])/g, ' $1')
        .replace(/_/g, ' ')
        .replace(/^\w/, c => c.toUpperCase())
        .trim();
}
}

// Export the class
export default EnhancedDNABiologyWorkbook;

